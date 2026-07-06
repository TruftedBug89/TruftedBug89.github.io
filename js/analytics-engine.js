// ============================================
// CHINESE MASTER - Anonymous Analytics Engine
// 100 % client-side.  No PII.  Consent-gated.
// ============================================

var AnalyticsEngine = {
    consent: false,
    sessionId: null,
    eventBuffer: [],
    pageEntryTime: null,
    currentModule: null,
    flushTimer: null,
    sessionStartTime: null,
    visitedModules: {},
    sessionExerciseCount: 0,
    sessionXpEstimate: 0,
    deviceLogged: false,

    MAX_BUFFER_SIZE: 10,
    FLUSH_INTERVAL: 30000,
    PRUNE_DAYS: 90,
    COMPRESS_DAYS: 30,
    MAX_EVENTS: 15000,

    // ---- Initialisation ----

    init: function () {
        try {
            this.consent = localStorage.getItem('cm_analytics_consent') === 'true'
                || localStorage.getItem('analytics_consent') === 'true';
        } catch (e) {
            this.consent = false;
        }
        if (!this.consent) return;

        if (typeof window.SessionManager !== 'undefined'
            && typeof SessionManager.getActiveSessionId === 'function') {
            this.sessionId = SessionManager.getActiveSessionId();
        }
        if (!this.sessionId) {
            try {
                this.sessionId = 'anon_' + Date.now().toString(36)
                    + '_' + Math.random().toString(36).slice(2, 10);
            } catch (e) { return; }
        }

        this.sessionStartTime = Date.now();
        this.visitedModules = {};
        this.sessionExerciseCount = 0;
        this.sessionXpEstimate = 0;

        this._recordSession();
        this._recordDeviceInfo();
        this._pruneAll();
        this._compressOldEvents();
        this._startFlushTimer();
        this._bindVisibilityFlush();
        this._trackSessionStart();
    },

    /** Begin timing for the first visible page (call from hideLoadingScreen). */
    startPageTiming: function (module) {
        if (!this.consent || !this.sessionId) return;
        this.currentModule = module || 'dashboard';
        this.pageEntryTime = Date.now();
        this._markModuleVisit(module);
        this._bufferEvent('page_view', { module: this.currentModule });
    },

    // ---- Public tracking API ----

    trackPageView: function (module) {
        if (!this.consent || !this.sessionId) return;
        if (this.currentModule && this.pageEntryTime) {
            var delta = Math.round((Date.now() - this.pageEntryTime) / 1000);
            if (delta > 0) {
                this._bufferEvent('time_on_page', {
                    module: this.currentModule,
                    seconds: delta
                });
            }
        }
        this.currentModule = module;
        this.pageEntryTime = Date.now();
        this._markModuleVisit(module);
        this._bufferEvent('page_view', { module: module });
    },

    trackTimeOnPage: function (module, seconds) {
        if (!this.consent || !this.sessionId) return;
        var m = module || this.currentModule;
        if (!m || seconds <= 0) return;
        this._bufferEvent('time_on_page', {
            module: m,
            seconds: Math.round(seconds)
        });
    },

    trackExercise: function (type, score, total, accuracy) {
        if (!this.consent || !this.sessionId) return;
        var acc;
        if (typeof accuracy === 'number') {
            acc = accuracy;
        } else {
            acc = total > 0 ? Math.round((Number(score) / Number(total)) * 100) : 0;
        }
        this._bufferEvent('exercise', {
            exerciseType: String(type || 'unknown').slice(0, 40),
            module: this.currentModule || 'unknown',
            score: Math.max(0, Number(score) || 0),
            total: Math.max(1, Number(total) || 0),
            accuracy: Math.min(100, Math.max(0, Math.round(acc)))
        });
    },

    // ---- New tracking methods ----

    trackVocabReview: function (quality, cardId, deckName) {
        if (!this.consent || !this.sessionId) return;
        var q = Math.min(5, Math.max(1, Number(quality) || 1));
        this._bufferEvent('vocab_review', {
            quality: q,
            cardId: String(cardId || 'unknown').slice(0, 60),
            deckName: String(deckName || 'default').slice(0, 60),
            module: this.currentModule || 'flashcards'
        });
    },

    trackGrammarLesson: function (lessonId, title) {
        if (!this.consent || !this.sessionId) return;
        this._markModuleVisit('grammar');
        this._bufferEvent('grammar_lesson', {
            lessonId: String(lessonId || 'unknown').slice(0, 60),
            title: String(title || 'Untitled').slice(0, 120),
            module: 'grammar'
        });
    },

    trackCompletion: function (module, exerciseType, score, total) {
        if (!this.consent || !this.sessionId) return;
        var mod = String(module || this.currentModule || 'unknown').slice(0, 40);
        var eType = String(exerciseType || 'unknown').slice(0, 40);
        var s = Math.max(0, Number(score) || 0);
        var t = Math.max(1, Number(total) || 0);
        var acc = Math.min(100, Math.max(0, Math.round((s / t) * 100)));
        var eventType;
        var extra = {};

        if (eType.indexOf('reading') >= 0 || eType === 'reading' || eType.indexOf('read') >= 0) {
            eventType = 'reading_exercise';
        } else if (eType.indexOf('listening') >= 0 || eType === 'listening' || eType.indexOf('audio') >= 0) {
            eventType = 'listening_exercise';
        } else if (eType.indexOf('speaking') >= 0 || eType === 'speaking' || eType.indexOf('speech') >= 0) {
            eventType = 'speaking_exercise';
        } else if (eType.indexOf('grammar') >= 0) {
            eventType = 'grammar_practice';
        } else {
            eventType = 'reading_exercise';
            extra._deduced = true;
        }

        this._markModuleVisit(mod);
        this.sessionExerciseCount += 1;
        this.sessionXpEstimate += Math.round(s * 0.5);

        this._bufferEvent(eventType, Object.assign({
            module: mod,
            type: eType,
            score: s,
            total: t,
            accuracy: acc
        }, extra));
    },

    trackAchievement: function (name) {
        if (!this.consent || !this.sessionId) return;
        this._bufferEvent('achievement_unlocked', {
            achievement: String(name || 'Unknown').slice(0, 120),
            module: this.currentModule || 'unknown'
        });
    },

    trackLevelUp: function (oldLevel, newLevel) {
        if (!this.consent || !this.sessionId) return;
        this._bufferEvent('level_up', {
            oldLevel: Math.max(0, Number(oldLevel) || 0),
            newLevel: Math.max(0, Number(newLevel) || 0),
            module: this.currentModule || 'unknown'
        });
    },

    // ---- Stats API ----

    getStats: function () {
        if (!this.sessionId) return null;
        try {
            return {
                sessionId: this.sessionId,
                sessions: this._readSessions(),
                eventCount: this._readEvents().length,
                daily: this._readDaily()
            };
        } catch (e) { return null; }
    },

    getDetailedStats: function () {
        if (!this.sessionId) return null;
        try {
            var sessions = this._readSessions();
            var events = this._readEvents();
            var daily = this._readDaily();
            var summaries = this._readSummaries();

            var counts = { vocab_review: 0, grammar_lesson: 0, grammar_practice: 0,
                reading_exercise: 0, listening_exercise: 0, speaking_exercise: 0,
                achievement_unlocked: 0, level_up: 0, session_start: 0,
                session_end: 0, page_view: 0, exercise: 0, time_on_page: 0 };

            var totalExerciseScore = 0;
            var totalAccuracy = 0;
            var accuracyCount = 0;
            var recentActivityDays = {};

            for (var i = 0; i < events.length; i++) {
                var t = events[i].type;
                if (counts[t] !== undefined) counts[t] += 1;

                if (t === 'exercise' || t === 'reading_exercise' || t === 'listening_exercise'
                    || t === 'speaking_exercise' || t === 'grammar_practice') {
                    if (typeof events[i].score === 'number') {
                        totalExerciseScore += events[i].score;
                    }
                    if (typeof events[i].accuracy === 'number') {
                        totalAccuracy += events[i].accuracy;
                        accuracyCount += 1;
                    }
                }

                try {
                    var day = events[i].timestamp ? events[i].timestamp.split('T')[0] : null;
                    if (day) recentActivityDays[day] = true;
                } catch (e2) { /* ignore */ }
            }

            var activeDays = 0;
            for (var _k in recentActivityDays) {
                if (Object.prototype.hasOwnProperty.call(recentActivityDays, _k)) activeDays += 1;
            }

            var dailyArray = [];
            for (var d in daily) {
                if (Object.prototype.hasOwnProperty.call(daily, d)) {
                    dailyArray.push({
                        date: d,
                        pageViews: daily[d].pageViews || 0,
                        exercises: daily[d].exercises || 0,
                        timeSpent: daily[d].timeSpent || 0,
                        vocabReviews: daily[d].vocabReviews || 0,
                        achievements: daily[d].achievements || 0,
                        xpEstimate: daily[d].xpEstimate || 0
                    });
                }
            }
            dailyArray.sort(function (a, b) { return a.date.localeCompare(b.date); });

            var topGrammarLessons = {};
            var topAchievements = {};
            for (var j = 0; j < events.length; j++) {
                if (events[j].type === 'grammar_lesson' && events[j].title) {
                    topGrammarLessons[events[j].title] = (topGrammarLessons[events[j].title] || 0) + 1;
                }
                if (events[j].type === 'achievement_unlocked' && events[j].achievement) {
                    topAchievements[events[j].achievement] = true;
                }
            }

            return {
                sessionId: this.sessionId,
                firstVisit: sessions.firstVisit || null,
                lastVisit: sessions.lastVisit || null,
                device: sessions.device || {},
                eventCount: events.length,
                eventBreakdown: counts,
                activeDays: activeDays,
                totalExerciseScore: totalExerciseScore,
                avgAccuracy: accuracyCount > 0
                    ? Math.round((totalAccuracy / accuracyCount) * 100) / 100 : 0,
                totalPageViews: sessions.totalPageViews || 0,
                totalExercises: sessions.totalExercises || 0,
                totalTimeSpent: sessions.totalTimeSpent || 0,
                dailyStats: dailyArray,
                summaryEntries: summaries ? summaries.length : 0,
                topGrammarLessons: topGrammarLessons,
                achievementsEarned: Object.keys(topAchievements).length,
                dailySummaries: summaries || []
            };
        } catch (e) { return null; }
    },

    getAllSessions: function () {
        var result = [];
        try {
            for (var i = 0; i < localStorage.length; i++) {
                var key = localStorage.key(i);
                if (!key) continue;
                var match = key.match(/^analytics_(.+)_sessions$/);
                if (!match) continue;
                var sid = match[1];
                try {
                    var raw = localStorage.getItem(key);
                    if (!raw) continue;
                    var data = JSON.parse(raw);
                    if (data && typeof data === 'object') {
                        data.sessionId = sid;
                        result.push(data);
                    }
                } catch (e) { /* skip corrupt entries */ }
            }
        } catch (e) { /* ignore */ }
        return result;
    },

    getSessionSnapshot: function (sessionId) {
        try {
            var sessions = null;
            try {
                var r = localStorage.getItem('analytics_' + sessionId + '_sessions');
                if (r) sessions = JSON.parse(r);
            } catch (e) { /* ignore */ }
            var events = [];
            try {
                var re = localStorage.getItem('analytics_' + sessionId + '_events');
                if (re) events = JSON.parse(re);
            } catch (e) { /* ignore */ }
            var daily = {};
            try {
                var rd = localStorage.getItem('analytics_' + sessionId + '_daily');
                if (rd) daily = JSON.parse(rd);
            } catch (e) { /* ignore */ }
            var summaries = [];
            try {
                var rs = localStorage.getItem('analytics_' + sessionId + '_summaries');
                if (rs) summaries = JSON.parse(rs);
            } catch (e) { /* ignore */ }
            return {
                sessionId: sessionId,
                sessions: sessions,
                events: events,
                daily: daily,
                summaries: summaries
            };
        } catch (e) { return null; }
    },

    // ---- Internal key helpers ----

    _key: function (kind) {
        return 'analytics_' + this.sessionId + '_' + kind;
    },

    _readSessions: function () {
        try {
            var raw = localStorage.getItem(this._key('sessions'));
            return raw ? JSON.parse(raw) : this._emptySession();
        } catch (e) { return this._emptySession(); }
    },

    _writeSessions: function (data) {
        try {
            localStorage.setItem(this._key('sessions'), JSON.stringify(data));
        } catch (e) { this._handleStorageError(e); }
    },

    _readEvents: function () {
        try {
            var raw = localStorage.getItem(this._key('events'));
            return raw ? JSON.parse(raw) : [];
        } catch (e) { return []; }
    },

    _writeEvents: function (events) {
        try {
            localStorage.setItem(this._key('events'), JSON.stringify(events));
        } catch (e) { this._handleStorageError(e); }
    },

    _readDaily: function () {
        try {
            var raw = localStorage.getItem(this._key('daily'));
            return raw ? JSON.parse(raw) : {};
        } catch (e) { return {}; }
    },

    _writeDaily: function (data) {
        try {
            localStorage.setItem(this._key('daily'), JSON.stringify(data));
        } catch (e) { this._handleStorageError(e); }
    },

    _readSummaries: function () {
        try {
            var raw = localStorage.getItem(this._key('summaries'));
            return raw ? JSON.parse(raw) : [];
        } catch (e) { return []; }
    },

    _writeSummaries: function (data) {
        try {
            localStorage.setItem(this._key('summaries'), JSON.stringify(data));
        } catch (e) { this._handleStorageError(e); }
    },

    _emptySession: function () {
        return {
            firstVisit: new Date().toISOString(),
            lastVisit: new Date().toISOString(),
            device: {},
            totalPageViews: 0,
            totalExercises: 0,
            totalTimeSpent: 0
        };
    },

    // ---- Recording helpers ----

    _recordSession: function () {
        var s = this._readSessions();
        var now = new Date().toISOString();
        s.lastVisit = now;
        if (!s.firstVisit || s.firstVisit === '') s.firstVisit = now;
        this._writeSessions(s);
    },

    _recordDeviceInfo: function () {
        var s = this._readSessions();
        if (s.device && s.device.screenWidth && this.deviceLogged) return;
        this.deviceLogged = true;

        var ua = navigator.userAgent || '';
        var browserInfo = this._parseBrowser(ua);
        var osInfo = this._parseOS(ua);
        var conn = (navigator.connection || navigator.mozConnection || navigator.webkitConnection || null);

        s.device = {
            screenWidth: window.screen.width,
            screenHeight: window.screen.height,
            pixelRatio: window.devicePixelRatio || 1,
            colorDepth: window.screen.colorDepth || 24,
            viewportWidth: window.innerWidth,
            viewportHeight: window.innerHeight,
            browser: browserInfo.name,
            browserVersion: browserInfo.version,
            os: osInfo.name,
            osVersion: osInfo.version,
            language: (navigator.language || 'unknown').slice(0, 10),
            timezone: Intl.DateTimeFormat ? Intl.DateTimeFormat().resolvedOptions().timeZone || 'unknown' : 'unknown',
            touchSupport: ('ontouchstart' in window) || (navigator.maxTouchPoints > 0),
            maxTouchPoints: navigator.maxTouchPoints || 0,
            connectionType: conn ? (conn.effectiveType || 'unknown') : 'unknown',
            userAgent: ua.slice(0, 300)
        };
        this._writeSessions(s);
    },

    _parseBrowser: function (ua) {
        var name = 'Other';
        var version = 'unknown';
        if (/edg\/([\d.]+)/i.test(ua)) { name = 'Edge'; version = RegExp.$1; }
        else if (/opr\/([\d.]+)/i.test(ua) || /opera\/([\d.]+)/i.test(ua)) { name = 'Opera'; version = RegExp.$1; }
        else if (/chrome\/([\d.]+)/i.test(ua) && !/edg/i.test(ua)) { name = 'Chrome'; version = RegExp.$1; }
        else if (/firefox\/([\d.]+)/i.test(ua)) { name = 'Firefox'; version = RegExp.$1; }
        else if (/version\/([\d.]+).*safari/i.test(ua) && !/chrome/i.test(ua)) { name = 'Safari'; version = RegExp.$1; }
        else if (/safari\/([\d.]+)/i.test(ua) && !/chrome/i.test(ua)) { name = 'Safari'; version = RegExp.$1; }
        return { name: name, version: version };
    },

    _parseOS: function (ua) {
        var name = 'Other';
        var version = 'unknown';
        if (/windows nt ([\d.]+)/i.test(ua)) { name = 'Windows'; version = RegExp.$1; }
        else if (/mac os x ([\d_]+)/i.test(ua)) { name = 'macOS'; version = RegExp.$1.replace(/_/g, '.'); }
        else if (/linux/i.test(ua) && !/android/i.test(ua)) { name = 'Linux'; version = 'unknown'; }
        else if (/android ([\d.]+)/i.test(ua)) { name = 'Android'; version = RegExp.$1; }
        else if (/iphone os ([\d_]+)|ios ([\d.]+)/i.test(ua)) {
            name = 'iOS';
            version = (RegExp.$1 || RegExp.$2).replace(/_/g, '.');
        } else if (/ipad.*os ([\d_]+)/i.test(ua)) { name = 'iPadOS'; version = RegExp.$1.replace(/_/g, '.'); }
        return { name: name, version: version };
    },

    _bindVisibilityFlush: function () {
        var self = this;
        document.addEventListener('visibilitychange', function () {
            if (document.hidden && self.eventBuffer.length > 0) {
                self._flush();
            }
        });
    },

    _trackSessionStart: function () {
        var s = this._readSessions();
        this._bufferEvent('session_start', {
            firstVisit: s.firstVisit || null,
            totalPageViews: s.totalPageViews || 0,
            totalExercises: s.totalExercises || 0
        });
    },

    _markModuleVisit: function (module) {
        if (!module) return;
        var mod = String(module).slice(0, 60);
        if (!this.visitedModules[mod]) {
            this.visitedModules[mod] = true;
        }
    },

    // ---- Event buffering ----

    _bufferEvent: function (type, data) {
        var event = { type: type, timestamp: new Date().toISOString() };
        for (var k in data) {
            if (Object.prototype.hasOwnProperty.call(data, k)) {
                event[k] = data[k];
            }
        }
        this.eventBuffer.push(event);
        this._updateSessionStats(event);
        this._updateDailyForEvent(event);
        if (this.eventBuffer.length >= this.MAX_BUFFER_SIZE) {
            this._flush();
        }
    },

    _updateSessionStats: function (event) {
        var s = this._readSessions();
        s.lastVisit = new Date().toISOString();
        switch (event.type) {
            case 'page_view':
                s.totalPageViews = (s.totalPageViews || 0) + 1;
                break;
            case 'exercise':
                s.totalExercises = (s.totalExercises || 0) + 1;
                break;
            case 'reading_exercise':
            case 'listening_exercise':
            case 'speaking_exercise':
            case 'grammar_practice':
                s.totalExercises = (s.totalExercises || 0) + 1;
                break;
            case 'time_on_page':
                if (event.seconds) {
                    s.totalTimeSpent = (s.totalTimeSpent || 0) + event.seconds;
                }
                break;
        }
        this._writeSessions(s);
    },

    _updateDailyForEvent: function (event) {
        var d = this._readDaily();
        var today = new Date().toISOString().split('T')[0];
        if (!d[today]) {
            d[today] = { pageViews: 0, exercises: 0, timeSpent: 0,
                vocabReviews: 0, achievements: 0, xpEstimate: 0 };
        }
        var entry = d[today];

        switch (event.type) {
            case 'page_view':
                entry.pageViews = (entry.pageViews || 0) + 1;
                break;
            case 'exercise':
                entry.exercises = (entry.exercises || 0) + 1;
                break;
            case 'reading_exercise':
            case 'listening_exercise':
            case 'speaking_exercise':
            case 'grammar_practice':
                entry.exercises = (entry.exercises || 0) + 1;
                break;
            case 'time_on_page':
                if (event.seconds) {
                    entry.timeSpent = (entry.timeSpent || 0) + event.seconds;
                }
                break;
            case 'vocab_review':
                entry.vocabReviews = (entry.vocabReviews || 0) + 1;
                entry.xpEstimate = (entry.xpEstimate || 0) + Math.max(1, event.quality || 1);
                break;
            case 'achievement_unlocked':
                entry.achievements = (entry.achievements || 0) + 1;
                break;
            case 'level_up':
                entry.xpEstimate = (entry.xpEstimate || 0) + 50;
                break;
        }
        this._writeDaily(d);
    },

    _updateDaily: function (field, value) {
        var d = this._readDaily();
        var today = new Date().toISOString().split('T')[0];
        if (!d[today]) {
            d[today] = { pageViews: 0, exercises: 0, timeSpent: 0,
                vocabReviews: 0, achievements: 0, xpEstimate: 0 };
        }
        d[today][field] = (d[today][field] || 0) + (Number(value) || 1);
        this._writeDaily(d);
    },

    _flush: function () {
        if (this.eventBuffer.length === 0) return;
        var events = this._readEvents();
        var merged = events.concat(this.eventBuffer);
        var trimmed = merged.length > this.MAX_EVENTS
            ? merged.slice(merged.length - this.MAX_EVENTS) : merged;
        this._writeEvents(trimmed);
        this.eventBuffer = [];
    },

    _startFlushTimer: function () {
        if (this.flushTimer) clearInterval(this.flushTimer);
        var self = this;
        this.flushTimer = setInterval(function () {
            if (self.eventBuffer.length > 0) self._flush();
        }, this.FLUSH_INTERVAL);
    },

    // ---- Compression ----

    _compressOldEvents: function () {
        var now = new Date();
        var compressBefore = new Date();
        compressBefore.setDate(compressBefore.getDate() - this.COMPRESS_DAYS);
        var compressISO = compressBefore.toISOString();
        var compressDate = compressBefore.toISOString().split('T')[0];

        var events = this._readEvents();
        if (events.length === 0) return;

        var oldEvents = [];
        var keptEvents = [];
        for (var i = 0; i < events.length; i++) {
            if (events[i].timestamp && events[i].timestamp < compressISO) {
                oldEvents.push(events[i]);
            } else {
                keptEvents.push(events[i]);
            }
        }

        if (oldEvents.length === 0) return;

        var summaries = this._readSummaries();
        var dayBuckets = {};

        for (var j = 0; j < oldEvents.length; j++) {
            var e = oldEvents[j];
            var day;
            try { day = e.timestamp ? e.timestamp.split('T')[0] : null; } catch (ex) { day = null; }
            if (!day) continue;
            if (day >= compressDate) { keptEvents.push(e); continue; }

            if (!dayBuckets[day]) {
                dayBuckets[day] = {
                    date: day,
                    totalEvents: 0,
                    pageViews: 0,
                    exercises: 0,
                    grammarLessons: 0,
                    vocabReviews: 0,
                    achievements: 0,
                    timeSpent: 0,
                    xpEstimate: 0
                };
            }
            var b = dayBuckets[day];
            b.totalEvents += 1;

            switch (e.type) {
                case 'page_view': b.pageViews += 1; break;
                case 'exercise': b.exercises += 1; break;
                case 'reading_exercise':
                case 'listening_exercise':
                case 'speaking_exercise':
                case 'grammar_practice':
                    b.exercises += 1; break;
                case 'time_on_page':
                    if (e.seconds) b.timeSpent += e.seconds;
                    break;
                case 'grammar_lesson':
                    b.grammarLessons += 1; break;
                case 'vocab_review':
                    b.vocabReviews += 1;
                    b.xpEstimate += Math.max(1, e.quality || 1);
                    break;
                case 'achievement_unlocked':
                    b.achievements += 1;
                    break;
                case 'level_up':
                    b.xpEstimate += 50;
                    break;
            }
        }

        for (var dayKey in dayBuckets) {
            if (Object.prototype.hasOwnProperty.call(dayBuckets, dayKey)) {
                var existingIdx = -1;
                for (var si = 0; si < summaries.length; si++) {
                    if (summaries[si].date === dayKey) {
                        existingIdx = si;
                        break;
                    }
                }
                if (existingIdx >= 0) {
                    var oldS = summaries[existingIdx];
                    var newB = dayBuckets[dayKey];
                    oldS.totalEvents += newB.totalEvents;
                    oldS.pageViews += newB.pageViews;
                    oldS.exercises += newB.exercises;
                    oldS.grammarLessons += newB.grammarLessons;
                    oldS.vocabReviews += newB.vocabReviews;
                    oldS.achievements += newB.achievements;
                    oldS.timeSpent += newB.timeSpent;
                    oldS.xpEstimate += newB.xpEstimate;
                } else {
                    summaries.push(dayBuckets[dayKey]);
                }
            }
        }

        summaries.sort(function (a, b) { return a.date.localeCompare(b.date); });

        if (summaries.length > 365) {
            summaries = summaries.slice(summaries.length - 365);
        }

        this._writeSummaries(summaries);
        this._writeEvents(keptEvents);
    },

    // ---- Session end / summary ----

    _endSession: function () {
        if (!this.consent || !this.sessionId) return;

        if (this.currentModule && this.pageEntryTime) {
            var delta = Math.round((Date.now() - this.pageEntryTime) / 1000);
            if (delta > 0) {
                this._bufferEvent('time_on_page', {
                    module: this.currentModule,
                    seconds: delta
                });
            }
        }

        this._flush();

        var totalTime = this.sessionStartTime
            ? Math.round((Date.now() - this.sessionStartTime) / 1000) : 0;
        var pagesVisited = 0;
        for (var _m in this.visitedModules) {
            if (Object.prototype.hasOwnProperty.call(this.visitedModules, _m)) pagesVisited += 1;
        }

        var sessionSummary = {
            sessionId: this.sessionId,
            endedAt: new Date().toISOString(),
            totalTimeSpent: totalTime,
            pagesVisited: pagesVisited,
            pagesVisitedList: Object.keys(this.visitedModules),
            exerciseCompletions: this.sessionExerciseCount,
            xpEstimate: Math.round(this.sessionXpEstimate),
            moduleAtEnd: this.currentModule || 'unknown'
        };

        try {
            var key = this._key('session_summary');
            localStorage.setItem(key, JSON.stringify(sessionSummary));
        } catch (e) { this._handleStorageError(e); }
    },

    // ---- Pruning ----

    _pruneAll: function () {
        var cutoff = new Date();
        cutoff.setDate(cutoff.getDate() - this.PRUNE_DAYS);
        var cutoffISO = cutoff.toISOString();
        var cutoffDate = cutoff.toISOString().split('T')[0];
        try {
            var events = this._readEvents();
            if (events.length > 0) {
                var kept = [];
                for (var i = 0; i < events.length; i++) {
                    if (events[i].timestamp >= cutoffISO) kept.push(events[i]);
                }
                if (kept.length < events.length) this._writeEvents(kept);
            }

            var daily = this._readDaily();
            var changed = false;
            for (var d in daily) {
                if (Object.prototype.hasOwnProperty.call(daily, d) && d < cutoffDate) {
                    delete daily[d];
                    changed = true;
                }
            }
            if (changed) this._writeDaily(daily);

            var summaries = this._readSummaries();
            if (summaries.length > 0) {
                var keptSummaries = [];
                for (var j = 0; j < summaries.length; j++) {
                    if (summaries[j].date >= cutoffDate) keptSummaries.push(summaries[j]);
                }
                if (keptSummaries.length < summaries.length) this._writeSummaries(keptSummaries);
            }
        } catch (e) { /* ignore */ }
    },

    // ---- Error handling ----

    _handleStorageError: function (e) {
        if (e && (e.name === 'QuotaExceededError' || e.code === 22 || e.code === 1014)) {
            try {
                var events = this._readEvents();
                var half = Math.floor(events.length / 2);
                if (half > 0) {
                    this._writeEvents(events.slice(half));
                }
            } catch (e2) { /* ignore */ }
        }
    }
};

window.addEventListener('beforeunload', function () {
    if (AnalyticsEngine.consent && AnalyticsEngine.sessionId) {
        AnalyticsEngine._endSession();
    } else if (AnalyticsEngine.eventBuffer && AnalyticsEngine.eventBuffer.length > 0) {
        AnalyticsEngine._flush();
    }
});

window.AnalyticsEngine = AnalyticsEngine;

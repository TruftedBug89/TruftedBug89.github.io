// ============================================
// CHINESE MASTER - Storage Manager
// ============================================

const StorageManager = {
    // Default user data structure
    defaultUserData: {
        name: 'Learner',
        level: 1,
        xp: 0,
        totalXp: 0,
        streak: 0,
        lastActiveDate: null,
        joinDate: new Date().toISOString(),
        settings: {
            theme: 'dark',
            dailyGoal: {
                listening: 5,
                reading: 3,
                vocabulary: 10
            },
            audioSpeed: 1.0,
            showPinyin: true,
            showTranslation: true
        },
        progress: {
            vocabulary: {
                learned: [],
                reviewing: [],
                mastered: []
            },
            listening: {
                completed: [],
                scores: {}
            },
            reading: {
                completed: [],
                scores: {}
            },
            grammar: {
                completed: [],
                scores: {}
            },
            speaking: {
                completed: [],
                scores: {}
            }
        },
        dailyStats: {},
        achievements: [],
        activityLog: []
    },

    // Initialize storage
    init() {
        // Ensure a session exists before touching userData
        if (typeof SessionManager !== 'undefined') {
            SessionManager.init();
        }
        if (!this.getUserData()) {
            this.setUserData(this._freshDefault());
        }
        this.pruneDailyStats();
        this.updateStreak();
    },

    // Build a fresh default user-data object (joinDate must be set per-creation)
    _freshDefault() {
        const def = this._deepClone(this.defaultUserData);
        def.joinDate = new Date().toISOString();
        def.lastActiveDate = null;
        def.streak = 0;
        def.xp = 0;
        def.totalXp = 0;
        def.level = 1;
        return def;
    },

    _deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    },

    // Session-scoped storage key for userData
    _userDataKey() {
        const sid = (typeof SessionManager !== 'undefined')
            ? SessionManager.getActiveSessionId()
            : null;
        return sid ? `userData_${sid}` : 'userData';
    },

    // Get user data
    getUserData() {
        const data = Utils.storage.get(this._userDataKey());
        if (!data) return null;
        // Backfill any missing top-level fields (resilience against partial imports)
        const merged = this._deepClone(this.defaultUserData);
        for (const k of Object.keys(merged)) {
            if (data[k] === undefined) data[k] = merged[k];
        }
        // Backfill nested progress shape
        const dp = this.defaultUserData.progress;
        for (const m of Object.keys(dp)) {
            if (!data.progress[m]) data.progress[m] = this._deepClone(dp[m]);
            else for (const f of Object.keys(dp[m])) if (data.progress[m][f] === undefined) data.progress[m][f] = dp[m][f];
        }
        if (!data.settings || typeof data.settings !== 'object') data.settings = this._deepClone(this.defaultUserData.settings);
        return data;
    },

    // Set user data
    setUserData(data) {
        const ok = Utils.storage.set(this._userDataKey(), data);
        if (ok && typeof SessionManager !== 'undefined') {
            const sid = SessionManager.getActiveSessionId();
            if (sid) SessionManager._updateSessionMeta(sid, { name: (data && data.name) ? String(data.name).slice(0, 40) : 'Learner' });
        }
        return ok;
    },

    // Update specific user data field
    updateUserData(path, value) {
        const data = this.getUserData() || this.defaultUserData;
        const keys = path.split('.');
        let current = data;

        for (let i = 0; i < keys.length - 1; i++) {
            if (!current[keys[i]]) {
                current[keys[i]] = {};
            }
            current = current[keys[i]];
        }

        current[keys[keys.length - 1]] = value;
        this.setUserData(data);
    },

    // Get user level info
    getLevelInfo() {
        const data = this.getUserData();
        const levelThresholds = [
            0, 100, 250, 500, 1000, 1750, 2750, 4000, 5500, 7500,
            10000, 13000, 16500, 20500, 25000, 30000, 35500, 41500, 48000, 55000
        ];

        const currentLevel = data.level;
        const currentXp = data.xp;
        const nextLevelXp = levelThresholds[currentLevel] || 100;
        const prevLevelXp = levelThresholds[currentLevel - 1] || 0;
        const progress = ((currentXp - prevLevelXp) / (nextLevelXp - prevLevelXp)) * 100;

        return {
            level: currentLevel,
            currentXp,
            nextLevelXp,
            progress: Math.min(progress, 100)
        };
    },

    // Add XP
    addXP(amount) {
        const data = this.getUserData();
        data.xp += amount;
        data.totalXp += amount;

        // Check for level up
        const levelTitles = [
            'Beginner', 'Novice', 'Student', 'Scholar', 'Apprentice',
            'Journeyman', 'Adept', 'Expert', 'Master', 'Grandmaster',
            'Sage', 'Wizard', 'Oracle', 'Philosopher', 'Legend',
            'Mythic', 'Celestial', 'Transcendent', 'Immortal', 'Dragon'
        ];
        const levelThresholds = [
            0, 100, 250, 500, 1000, 1750, 2750, 4000, 5500, 7500,
            10000, 13000, 16500, 20500, 25000, 30000, 35500, 41500, 48000, 55000
        ];

        while (data.level < 20 && data.xp >= levelThresholds[data.level]) {
            data.level++;
            var lvl = data.level;
            var title = levelTitles[lvl] || ('Level ' + lvl);
            if (typeof InkAnimations !== 'undefined' && InkAnimations.showLevelUp) {
                InkAnimations.showLevelUp(lvl, title, data.totalXp);
            } else {
                Utils.showToast('Level Up! ' + title + ' (Level ' + lvl + ')', 'success');
                Utils.playSound('levelup');
                Utils.showConfetti();
            }
        }

        this.setUserData(data);

        /* Update nav footer level display */
        if (typeof updateNavFooter === 'function') {
            updateNavFooter();
        }

        return data.level;
    },

    // Update streak
    updateStreak() {
        const data = this.getUserData();
        const today = Utils.date.today();

        if (!data.lastActiveDate) {
            data.streak = 1;
            data.lastActiveDate = today;
        } else if (data.lastActiveDate === today) {
            // Already active today
        } else if (Utils.date.isYesterday(data.lastActiveDate)) {
            data.streak++;
            data.lastActiveDate = today;
        } else {
            data.streak = 1;
            data.lastActiveDate = today;
        }

        this.setUserData(data);

        if (typeof updateNavFooter === 'function') {
            updateNavFooter();
        }
    },

    // Get daily stats
    getDailyStats(date = null) {
        const data = this.getUserData();
        const targetDate = date || Utils.date.today();

        if (!data.dailyStats[targetDate]) {
            data.dailyStats[targetDate] = {
                listening: 0,
                reading: 0,
                vocabulary: 0,
                xp: 0,
                timeSpent: 0
            };
        }

        return data.dailyStats[targetDate];
    },

    // Update daily stats
    updateDailyStats(type, value = 1) {
        const data = this.getUserData();
        const today = Utils.date.today();

        if (!data.dailyStats[today]) {
            data.dailyStats[today] = {
                listening: 0,
                reading: 0,
                vocabulary: 0,
                xp: 0,
                timeSpent: 0
            };
        }

        data.dailyStats[today][type] += value;
        this.setUserData(data);
    },

    // Prune dailyStats to a rolling window to keep localStorage bounded
    pruneDailyStats(keepDays = 90) {
        const data = this.getUserData();
        if (!data || !data.dailyStats) return;
        const cutoff = new Date();
        cutoff.setDate(cutoff.getDate() - keepDays);
        const cutoffStr = cutoff.toISOString().split('T')[0];
        let changed = false;
        for (const dateKey of Object.keys(data.dailyStats)) {
            if (dateKey < cutoffStr) {
                delete data.dailyStats[dateKey];
                changed = true;
            }
        }
        if (changed) this.setUserData(data);
    },

    // Add vocabulary word
    addVocabularyWord(wordId, status = 'learned') {
        const data = this.getUserData();
        const vocab = data.progress.vocabulary;

        // Remove from other statuses
        vocab.learned = vocab.learned.filter(id => id !== wordId);
        vocab.reviewing = vocab.reviewing.filter(id => id !== wordId);
        vocab.mastered = vocab.mastered.filter(id => id !== wordId);

        // Add to new status
        if (!vocab[status].includes(wordId)) {
            vocab[status].push(wordId);
        }

        this.setUserData(data);
    },

    // Get vocabulary status
    getVocabularyStatus(wordId) {
        const data = this.getUserData();
        const vocab = data.progress.vocabulary;

        if (vocab.mastered.includes(wordId)) return 'mastered';
        if (vocab.reviewing.includes(wordId)) return 'reviewing';
        if (vocab.learned.includes(wordId)) return 'learned';
        return 'new';
    },

    // Mark exercise as completed
    markExerciseCompleted(module, exerciseId, score = null) {
        const data = this.getUserData();

        if (!data.progress[module].completed.includes(exerciseId)) {
            data.progress[module].completed.push(exerciseId);
        }

        if (score !== null) {
            data.progress[module].scores[exerciseId] = score;
        }

        this.setUserData(data);
    },

    // Check if exercise is completed
    isExerciseCompleted(module, exerciseId) {
        const data = this.getUserData();
        return data.progress[module].completed.includes(exerciseId);
    },

    // Add achievement
    addAchievement(achievementId) {
        const data = this.getUserData();

        if (!data.achievements.includes(achievementId)) {
            data.achievements.push(achievementId);
            this.setUserData(data);
            return true;
        }

        return false;
    },

    // Check if achievement is unlocked
    hasAchievement(achievementId) {
        const data = this.getUserData();
        return data.achievements.includes(achievementId);
    },

    // Add activity log entry
    addActivity(type, description, xp = 0) {
        const data = this.getUserData();

        data.activityLog.unshift({
            id: Utils.generateId(),
            type,
            description,
            xp,
            timestamp: new Date().toISOString()
        });

        // Keep only last 50 activities
        if (data.activityLog.length > 50) {
            data.activityLog = data.activityLog.slice(0, 50);
        }

        this.setUserData(data);
    },

    // Get recent activities
    getRecentActivities(count = 10) {
        const data = this.getUserData();
        return data.activityLog.slice(0, count);
    },

    // Get statistics
    getStatistics() {
        const data = this.getUserData();
        const today = Utils.date.today();
        const dailyStats = this.getDailyStats();

        // Calculate weekly stats
        let weeklyXp = 0;
        let weeklyListening = 0;
        let weeklyReading = 0;
        let weeklyVocab = 0;

        for (let i = 0; i < 7; i++) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            const dateStr = date.toISOString().split('T')[0];
            const dayStats = data.dailyStats[dateStr];

            if (dayStats) {
                weeklyXp += dayStats.xp || 0;
                weeklyListening += dayStats.listening || 0;
                weeklyReading += dayStats.reading || 0;
                weeklyVocab += dayStats.vocabulary || 0;
            }
        }

        return {
            totalWords: data.progress.vocabulary.learned.length + 
                       data.progress.vocabulary.reviewing.length + 
                       data.progress.vocabulary.mastered.length,
            masteredWords: data.progress.vocabulary.mastered.length,
            listeningCompleted: data.progress.listening.completed.length,
            readingCompleted: data.progress.reading.completed.length,
            grammarCompleted: data.progress.grammar.completed.length,
            speakingCompleted: data.progress.speaking.completed.length,
            perfectScores: data.perfectScores || 0,
            totalXp: data.totalXp,
            level: data.level,
            streak: data.streak,
            today: dailyStats,
            weekly: {
                xp: weeklyXp,
                listening: weeklyListening,
                reading: weeklyReading,
                vocabulary: weeklyVocab
            }
        };
    },

    // Get progress percentage for a module
    getModuleProgress(module, totalItems) {
        const data = this.getUserData();
        const completed = data.progress[module].completed.length;
        return Utils.percentage(completed, totalItems);
    },

    // Reset progress (in-app confirm if available)
    resetProgress() {
        const doReset = () => {
            this.setUserData(this._freshDefault());
            return true;
        };
        if (typeof App !== 'undefined' && typeof App.confirmModal === 'function') {
            return App.confirmModal({
                title: 'Reset all progress?',
                message: 'This will erase all your XP, level, streaks, achievements and activity. This cannot be undone.',
                confirmLabel: 'Reset everything',
                destructive: true,
                onConfirm: doReset
            });
        }
        if (window.confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            return doReset();
        }
        return false;
    },

    // Export data (session-scoped snapshot)
    exportData() {
        const sid = (typeof SessionManager !== 'undefined') ? SessionManager.getActiveSessionId() : null;
        const data = this.getUserData();
        const blob = {
            format: 'chinese-master-userdata',
            version: 1,
            exportedAt: new Date().toISOString(),
            sessionId: sid,
            userData: data
        };
        const jsonStr = JSON.stringify(blob, null, 2);
        const wrapped = new Blob([jsonStr], { type: 'application/json' });
        const url = URL.createObjectURL(wrapped);
        const a = document.createElement('a');
        a.href = url;
        a.download = `chinese-master-backup-${Utils.date.today()}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    },

    // Strict schema-validated sanitization of an incoming userData object.
    // Returns a safe object or null if the input is unusable.
    sanitizeUserData(input) {
        if (!input || typeof input !== 'object' || Array.isArray(input)) return null;

        const def = this.defaultUserData;
        const out = this._freshDefault();

        // Scalar fields with type checks
        out.name = (typeof input.name === 'string') ? input.name.slice(0, 60) : out.name;
        out.level = Number.isFinite(input.level) && input.level >= 1 && input.level <= 20 ? Math.floor(input.level) : 1;
        out.xp = Number.isFinite(input.xp) && input.xp >= 0 ? Math.floor(input.xp) : 0;
        out.totalXp = Number.isFinite(input.totalXp) && input.totalXp >= 0 ? Math.floor(input.totalXp) : 0;
        out.streak = Number.isFinite(input.streak) && input.streak >= 0 ? Math.floor(input.streak) : 0;
        out.lastActiveDate = (typeof input.lastActiveDate === 'string') ? input.lastActiveDate.slice(0, 20) : null;
        out.joinDate = (typeof input.joinDate === 'string') ? input.joinDate.slice(0, 20) : out.joinDate;

        // Settings
        const sIn = (input.settings && typeof input.settings === 'object') ? input.settings : {};
        out.settings.theme = (sIn.theme === 'light' || sIn.theme === 'dark') ? sIn.theme : 'dark';
        out.settings.audioSpeed = Number.isFinite(sIn.audioSpeed) && sIn.audioSpeed >= 0.5 && sIn.audioSpeed <= 2
            ? sIn.audioSpeed : 1.0;
        out.settings.showPinyin = typeof sIn.showPinyin === 'boolean' ? sIn.showPinyin : true;
        out.settings.showTranslation = typeof sIn.showTranslation === 'boolean' ? sIn.showTranslation : true;
        if (sIn.dailyGoal && typeof sIn.dailyGoal === 'object') {
            ['listening', 'reading', 'vocabulary'].forEach(k => {
                const v = sIn.dailyGoal[k];
                out.settings.dailyGoal[k] = Number.isFinite(v) && v >= 0 && v <= 500 ? Math.floor(v) : def.settings.dailyGoal[k];
            });
        }

        // Progress (per-module arrays + scores)
        const pIn = (input.progress && typeof input.progress === 'object') ? input.progress : {};
        ['listening', 'reading', 'grammar', 'speaking'].forEach(mod => {
            const mIn = (pIn[mod] && typeof pIn[mod] === 'object') ? pIn[mod] : {};
            out.progress[mod].completed = sanitizeIdArray(mIn.completed, 5000);
            out.progress[mod].scores = sanitizeScoreMap(mIn.scores, 5000);

            // vocabulary is special
            if (mod === 'vocabulary') {
                // already handled below
            }
        });

        // Vocabulary progress
        const vIn = (pIn.vocabulary && typeof pIn.vocabulary === 'object') ? pIn.vocabulary : {};
        out.progress.vocabulary.learned = sanitizeIdArray(vIn.learned, 20000);
        out.progress.vocabulary.reviewing = sanitizeIdArray(vIn.reviewing, 20000);
        out.progress.vocabulary.mastered = sanitizeIdArray(vIn.mastered, 20000);

        // dailyStats: only date-keyed numeric blobs within rolling window
        if (input.dailyStats && typeof input.dailyStats === 'object' && !Array.isArray(input.dailyStats)) {
            for (const k of Object.keys(input.dailyStats)) {
                if (typeof k === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(k) && input.dailyStats[k] && typeof input.dailyStats[k] === 'object') {
                    const dIn = input.dailyStats[k];
                    out.dailyStats[k] = {
                        listening: safeInt(dIn.listening),
                        reading: safeInt(dIn.reading),
                        vocabulary: safeInt(dIn.vocabulary),
                        xp: safeInt(dIn.xp),
                        timeSpent: safeInt(dIn.timeSpent)
                    };
                }
            }
        }

        // achievements + activityLog
        out.achievements = sanitizeIdArray(input.achievements, 200);
        if (Array.isArray(input.activityLog)) {
            out.activityLog = input.activityLog
                .filter(a => a && typeof a === 'object')
                .slice(0, 50)
                .map(a => ({
                    id: String(a.id || Utils.generateId()).slice(0, 64),
                    type: String(a.type || '').slice(0, 40),
                    description: String(a.description || '').slice(0, 200),
                    xp: safeInt(a.xp),
                    timestamp: (typeof a.timestamp === 'string') ? a.timestamp.slice(0, 30) : new Date().toISOString()
                }));
        }

        return out;

        function safeInt(v, min = 0, max = 1e9) {
            const n = Number(v);
            if (!Number.isFinite(n)) return 0;
            return Math.min(max, Math.max(min, Math.floor(n)));
        }
        function sanitizeIdArray(arr, cap) {
            if (!Array.isArray(arr)) return [];
            const seen = new Set();
            const out = [];
            for (const item of arr) {
                if (item === null || item === undefined) continue;
                const s = String(item).slice(0, 64);
                if (s && !seen.has(s)) { seen.add(s); out.push(s); }
                if (out.length >= cap) break;
            }
            return out;
        }
        function sanitizeScoreMap(obj, cap) {
            if (!obj || typeof obj !== 'object') return {};
            const out = {};
            const keys = Object.keys(obj).slice(0, cap);
            for (const k of keys) {
                const v = Number(obj[k]);
                if (Number.isFinite(v)) out[k] = Math.min(100, Math.max(0, Math.floor(v)));
            }
            return out;
        }
    },

    // Import data (sanitized). Accepts either a legacy {name,level,...} object
    // or the new {format:'chinese-master-userdata', userData:{...}} wrapper.
    importData(jsonStringOrObject) {
        try {
            const parsed = (typeof jsonStringOrObject === 'string')
                ? JSON.parse(jsonStringOrObject)
                : jsonStringOrObject;
            if (!parsed || typeof parsed !== 'object') return false;

            const userData = parsed.userData || parsed; // support legacy shape
            const cleaned = this.sanitizeUserData(userData);
            if (!cleaned) return false;

            this.setUserData(cleaned);
            this.pruneDailyStats();
            return true;
        } catch (e) {
            return false;
        }
    }
};

// Export for use in other modules
window.StorageManager = StorageManager;

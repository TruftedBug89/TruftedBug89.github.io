/* ============================================
   ZHI Studio — Mobile (lightweight learner app)
   Reuses the site's existing data files (data/*.js).
   No frameworks, no external fonts, no heavy animation.
   ============================================ */
(function () {
    'use strict';

    /* ---------------- helpers ---------------- */
    function $(id) { return document.getElementById(id); }
    function esc(s) {
        return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }
    function shuffle(a) {
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var t = a[i]; a[i] = a[j]; a[j] = t;
        }
        return a;
    }
    function sample(a, n) {
        var c = a.slice();
        shuffle(c);
        return c.slice(0, n);
    }
    function dateKey(d) {
        var y = d.getFullYear(), m = String(d.getMonth() + 1).padStart(2, '0'), dd = String(d.getDate()).padStart(2, '0');
        return y + '-' + m + '-' + dd;
    }
    function yesterday() {
        var d = new Date();
        d.setDate(d.getDate() - 1);
        return d;
    }
    function toast(msg) {
        var t = $('toast');
        if (!t) return;
        t.textContent = msg;
        t.classList.add('show');
        clearTimeout(toast._timer);
        toast._timer = setTimeout(function () { t.classList.remove('show'); }, 2200);
    }
    function todayLabel() {
        return new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
    }

    /* ---------------- storage ---------------- */
    var KEY = 'zhimobile.v1';
    var store = {
        data: null,
        defaults: function () {
            return {
                name: '',
                createdAt: Date.now(),
                xp: 0,
                streak: { count: 0, last: '' },
                stats: { vocab: { c: 0, t: 0 }, listening: { c: 0, t: 0 }, reading: { c: 0, t: 0 }, grammar: { c: 0, t: 0 } },
                learned: {},
                log: [],
                settings: { rate: 0.85, showPinyin: true, sound: true },
                bestAcc: 0,
                flags: {},
                placement: 0
            };
        },
        load: function () {
            if (store.data) return store.data;
            try {
                var raw = localStorage.getItem(KEY);
                if (raw) {
                    var d = JSON.parse(raw);
                    var def = store.defaults();
                    d.stats = d.stats || def.stats;
                    d.streak = d.streak || def.streak;
                    d.settings = d.settings || def.settings;
                    d.log = d.log || [];
                    d.learned = d.learned || {};
                    d.xp = typeof d.xp === 'number' ? d.xp : 0;
                    d.bestAcc = typeof d.bestAcc === 'number' ? d.bestAcc : 0;
                    d.flags = d.flags || {};
                    d.placement = typeof d.placement === 'number' ? d.placement : 0;
                    store.data = d;
                    return d;
                }
            } catch (e) {}
            store.data = store.defaults();
            return store.data;
        },
        save: function () {
            try { localStorage.setItem(KEY, JSON.stringify(store.data)); } catch (e) {}
        },
        reset: function () {
            try { localStorage.removeItem(KEY); } catch (e) {}
            store.data = store.defaults();
            store.save();
        }
    };

    /* ---------------- xp / level / streak ---------------- */
    function levelFor(xp) { return Math.floor(xp / 250) + 1; }
    function recordActivity() {
        var d = store.load();
        var today = dateKey(new Date());
        if (d.streak.last === today) return;
        if (d.streak.last === dateKey(yesterday())) d.streak.count += 1;
        else d.streak.count = 1;
        d.streak.last = today;
        store.save();
    }
    function recordResult(skill, correct, total) {
        var d = store.load();
        var xp = correct * 10 + (total - correct) * 2;
        d.xp += xp;
        d.stats[skill] = d.stats[skill] || { c: 0, t: 0 };
        d.stats[skill].c += correct;
        d.stats[skill].t += total;
        var acc = total ? Math.round((correct / total) * 100) : 0;
        if (acc > d.bestAcc) d.bestAcc = acc;
        recordActivity();
        d.log.push({ date: dateKey(new Date()), skill: skill, c: correct, t: total, xp: xp });
        if (d.log.length > 60) d.log = d.log.slice(-60);
        store.save();
        return xp;
    }
    function markLearned(skill, id, gotIt) {
        if (!id) return;
        var d = store.load();
        var w = d.learned[id] || { c: 0, t: 0 };
        w.t += 1;
        if (gotIt) w.c += 1;
        d.learned[id] = w;
        store.save();
    }
    function learnedCount() {
        var d = store.load(), n = 0;
        for (var k in d.learned) { if (d.learned[k].c > 0) n++; }
        return n;
    }

    /* ---------------- tts ---------------- */
    var synth = ('speechSynthesis' in window) ? window.speechSynthesis : null;
    var zhVoice = null;
    function initVoices() {
        if (!synth) return;
        try {
            var voices = synth.getVoices() || [];
            for (var i = 0; i < voices.length; i++) {
                var v = voices[i];
                if (v.lang && (v.lang.indexOf('zh') === 0 || v.lang.indexOf('cmn') === 0)) { zhVoice = v; break; }
            }
        } catch (e) {}
    }
    if (synth) {
        initVoices();
        if (typeof synth.onvoiceschanged !== 'undefined') {
            synth.onvoiceschanged = initVoices;
        }
    }
    function speak(text, cb) {
        if (!synth || !text) { if (cb) cb(); return; }
        stopSpeak();
        try {
            var u = new SpeechSynthesisUtterance(text);
            u.lang = 'zh-CN';
            u.rate = store.load().settings.rate || 0.85;
            if (zhVoice) u.voice = zhVoice;
            if (cb) u.onend = cb;
            synth.speak(u);
        } catch (e) { if (cb) cb(); }
    }
    function stopSpeak() {
        if (synth) { try { synth.cancel(); } catch (e) {} }
    }

    /* ---------------- sounds ---------------- */
    var actx = null;
    function ensureAudio() {
        if (actx) return actx;
        try {
            var AC = window.AudioContext || window.webkitAudioContext;
            if (AC) actx = new AC();
        } catch (e) {}
        return actx;
    }
    function beep(freq, dur, type, delay) {
        if (!store.load().settings.sound) return;
        var ctx = ensureAudio();
        if (!ctx) return;
        try {
            var t0 = ctx.currentTime + (delay || 0);
            var o = ctx.createOscillator(), g = ctx.createGain();
            o.type = type || 'sine';
            o.frequency.value = freq;
            g.gain.setValueAtTime(0.0001, t0);
            g.gain.exponentialRampToValueAtTime(0.12, t0 + 0.01);
            g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
            o.connect(g); g.connect(ctx.destination);
            o.start(t0); o.stop(t0 + dur + 0.02);
        } catch (e) {}
    }
    function soundCorrect() { beep(523, 0.09, 'sine'); beep(784, 0.14, 'sine', 0.09); }
    function soundWrong() { beep(196, 0.18, 'sawtooth'); }

    /* ---------------- data loader ---------------- */
    var DATA = {
        hsk1: { path: '../data/hsk1.js', varName: 'HSK1' },
        hsk2: { path: '../data/hsk2.js', varName: 'HSK2' },
        hsk3: { path: '../data/hsk3.js', varName: 'HSK3' },
        hsk4: { path: '../data/hsk4.js', varName: 'HSK4' },
        hsk5: { path: '../data/hsk5.js', varName: 'HSK5' },
        listening: { path: '../data/listening.js', varName: 'ListeningData' },
        reading: { path: '../data/reading.js', varName: 'ReadingData' },
        grammar: { path: '../data/grammar.js', varName: 'GrammarData' },
        speaking: { path: '../data/speaking.js', varName: 'SpeakingData' },
        dialogues: { path: '../data/dialogues.js', varName: 'DialoguesData' },
        cultural: { path: '../data/cultural.js', varName: 'CulturalData' },
        phrases: { path: '../data/real-world-phrases.js', varName: 'RealWorldPhrases' },
        placement: { path: '../data/placement-bank.js', varName: 'PlacementBank' }
    };
    var loaded = {};
    function loadData(key) {
        if (loaded[key]) return loaded[key];
        var cfg = DATA[key];
        if (!cfg) return Promise.reject(new Error('unknown data ' + key));
        loaded[key] = new Promise(function (resolve, reject) {
            var s = document.createElement('script');
            s.src = cfg.path;
            s.onload = function () { resolve(); };
            s.onerror = function () { delete loaded[key]; reject(new Error('failed to load ' + cfg.path)); };
            document.head.appendChild(s);
        });
        return loaded[key];
    }
    function getData(key) { return window[DATA[key].varName] || null; }

    /* ---------------- question builders ----------------
       A question: { skill, prompt, promptNote, sub, tts, listenOnly,
                     options: [..], correct: idx,
                     revealTitle, revealLines: [[k,v]..], explain }
    ----------------------------------------------------- */
    function mc(options, correctIdx) {
        var order = [];
        for (var i = 0; i < options.length; i++) order.push(i);
        shuffle(order);
        var correct = 0;
        for (var j = 0; j < order.length; j++) { if (order[j] === correctIdx) correct = j; }
        return {
            options: order.map(function (k) { return options[k]; }),
            correct: correct
        };
    }

    function buildVocabQs(words) {
        var pool = words.map(function (w) { return w.meaning; });
        var qs = [];
        words.forEach(function (w) {
            var opts = mc([w.meaning].concat(sample(pool.filter(function (m) { return m !== w.meaning; }), 3)), 0);
            var lines = [['Meaning', w.meaning]];
            if (w.examples && w.examples[0]) {
                lines.push(['Example', w.examples[0].cn + ' — ' + (w.examples[0].en || '')]);
            }
            qs.push({
                skill: 'vocab',
                id: w.id,
                prompt: w.character,
                promptNote: 'HSK ' + (w.hsk || '') + ' · ' + (w.category || 'vocabulary'),
                tts: w.character,
                options: opts.options,
                correct: opts.correct,
                revealTitle: w.character + '  ' + (w.pinyin || ''),
                revealLines: lines,
                explain: ''
            });
        });
        return qs;
    }

    function buildDictationQs(data) {
        var items = data.dictation || [];
        var pool = items.map(function (i) { return i.meaning; });
        return items.map(function (i) {
            var opts = mc([i.meaning].concat(sample(pool.filter(function (m) { return m !== i.meaning; }), 3)), 0);
            return {
                skill: 'listening',
                prompt: '',
                promptNote: (i.category || 'Dictation') + ' · ' + (i.difficulty || ''),
                listenOnly: true,
                tts: i.chinese,
                options: opts.options,
                correct: opts.correct,
                revealTitle: i.chinese + '  ' + (i.pinyin || ''),
                revealLines: [['Meaning', i.meaning], ['Hint', i.hint || '']],
                explain: ''
            };
        });
    }

    function buildComprehensionQs(data) {
        var items = data.comprehension || [];
        var qs = [];
        items.forEach(function (it) {
            (it.questions || []).forEach(function (qq) {
                var opts = mc(qq.options.slice(), qq.correct);
                qs.push({
                    skill: 'listening',
                    prompt: qq.question,
                    promptNote: 'Comprehension · listen to the passage',
                    sub: it.chinese,
                    tts: it.chinese,
                    options: opts.options,
                    correct: opts.correct,
                    revealTitle: it.chinese + (it.pinyin ? '  ' + it.pinyin : ''),
                    revealLines: [['Meaning', it.meaning || '']],
                    explain: ''
                });
            });
        });
        return qs;
    }

    function buildMinimalQs(data) {
        var items = data.minimalPairs || [];
        var qs = [];
        var allMeanings = [];
        items.forEach(function (it) {
            (it.pairs || []).forEach(function (p) { allMeanings.push(p.meaning1, p.meaning2); });
        });
        items.forEach(function (it) {
            (it.pairs || []).forEach(function (p) {
                var left = Math.random() < 0.5;
                var word = left ? p.word1 : p.word2;
                var meaning = left ? p.meaning1 : p.meaning2;
                var other = left ? p.meaning2 : p.meaning1;
                var opts = mc([meaning, other].concat(sample(allMeanings.filter(function (m) { return m !== meaning && m !== other; }), 2)), 0);
                qs.push({
                    skill: 'listening',
                    prompt: '',
                    promptNote: 'Minimal pairs · ' + (it.category || ''),
                    listenOnly: true,
                    tts: word,
                    options: opts.options,
                    correct: opts.correct,
                    revealTitle: word + '  ' + (left ? p.pinyin1 : p.pinyin2),
                    revealLines: [['Meaning', meaning]],
                    explain: ''
                });
            });
        });
        return qs;
    }

    function buildCharQs(data) {
        var items = data.characterMatch || [];
        var allPairs = [];
        items.forEach(function (it) { allPairs = allPairs.concat(it.pairs || []); });
        var pool = allPairs.map(function (p) { return p.meaning; });
        return allPairs.map(function (p) {
            var opts = mc([p.meaning].concat(sample(pool.filter(function (m) { return m !== p.meaning; }), 3)), 0);
            return {
                skill: 'reading',
                prompt: p.character,
                promptNote: 'Character · what does this character mean?',
                tts: p.character,
                options: opts.options,
                correct: opts.correct,
                revealTitle: p.character,
                revealLines: [['Meaning', p.meaning]],
                explain: ''
            };
        });
    }

    function buildSentenceQs(data) {
        var items = data.sentenceComplete || [];
        return items.map(function (it) {
            var opts = mc(it.options.slice(), it.correct);
            var filled = it.sentence.replace(/_{3,}/, it.options[it.correct]);
            return {
                skill: 'reading',
                prompt: it.sentence,
                promptNote: 'Complete the sentence · ' + (it.difficulty || ''),
                tts: filled,
                options: opts.options,
                correct: opts.correct,
                revealTitle: filled,
                revealLines: [['Meaning', it.meaning || '']],
                explain: ''
            };
        });
    }

    function buildContextQs(data) {
        var items = data.contextClues || [];
        return items.map(function (it) {
            var opts = mc(it.options.slice(), it.correct);
            return {
                skill: 'reading',
                prompt: it.sentence,
                promptNote: 'Context clues · what does “' + (it.unknownWord || '') + '” mean?',
                tts: it.sentence,
                options: opts.options,
                correct: opts.correct,
                revealTitle: it.sentence,
                revealLines: [['Unknown word', it.unknownWord || ''], ['Clues', (it.contextClues || []).join(' · ')]],
                explain: it.explanation || ''
            };
        });
    }

    function buildPassageQs(data) {
        var items = data.passageReading || [];
        var qs = [];
        items.forEach(function (it) {
            (it.questions || []).forEach(function (qq) {
                var opts = mc(qq.options.slice(), qq.correct);
                qs.push({
                    skill: 'reading',
                    prompt: qq.question,
                    promptNote: 'Passage · ' + (it.title || ''),
                    sub: it.passage,
                    tts: it.passage,
                    options: opts.options,
                    correct: opts.correct,
                    revealTitle: it.title + (it.titleMeaning ? ' · ' + it.titleMeaning : ''),
                    revealLines: [['Passage', it.passage]],
                    explain: ''
                });
            });
        });
        return qs;
    }

    function buildGrammarQs(data) {
        var lessons = data.lessons || [];
        var allMeanings = [];
        lessons.forEach(function (l) {
            (l.examples || []).forEach(function (ex) { allMeanings.push(ex.meaning); });
        });
        var qs = [];
        lessons.forEach(function (l) {
            (l.examples || []).forEach(function (ex) {
                var opts = mc([ex.meaning].concat(sample(allMeanings.filter(function (m) { return m !== ex.meaning; }), 3)), 0);
                qs.push({
                    skill: 'grammar',
                    prompt: ex.chinese,
                    promptNote: l.title,
                    tts: ex.chinese,
                    options: opts.options,
                    correct: opts.correct,
                    revealTitle: ex.chinese + (ex.pinyin ? '  ' + ex.pinyin : ''),
                    revealLines: [['Meaning', ex.meaning], ['Pattern', l.pattern || '']],
                    explain: (l.explanation || '').slice(0, 140)
                });
            });
        });
        return qs;
    }


    /* ---- speaking / tones / phrases / placement builders ---- */
    function distractor(correct, pool, count) {
        var out = [correct];
        var i = 0, guard = 0;
        while (out.length < count && guard < 500) {
            guard++;
            var pick = pool[(Math.random() * pool.length) | 0];
            if (pick && out.indexOf(pick) === -1) out.push(pick);
            i++;
        }
        return shuffle(out);
    }

    function buildSpeakingQs(data, type) {
        var qs = [];
        var list = data[type] || [];
        var allMeanings = list.map(function (it) { return it.meaning; }).filter(Boolean);
        var allPinyins = list.map(function (it) { return it.pinyin; }).filter(Boolean);
        list.forEach(function (it) {
            if (type === 'pronunciation' || type === 'sentenceReading') {
                var opts = mc(distractor(it.meaning, allMeanings, 4), 0);
                qs.push({
                    id: it.id, skill: 'speaking',
                    prompt: it.chinese, promptNote: 'Listen, repeat aloud, then pick the meaning',
                    tts: it.chinese, listenOnly: true,
                    options: opts.options, correct: opts.correct,
                    revealTitle: it.chinese + (it.pinyin ? '  ' + it.pinyin : ''),
                    revealLines: [['Meaning', it.meaning], ['Tone', it.toneNote || '—']],
                    explain: ''
                });
            } else if (type === 'shadowing') {
                var opts2 = mc(distractor(it.pinyin, allPinyins, 4), 0);
                qs.push({
                    id: it.id, skill: 'speaking',
                    prompt: it.chinese, promptNote: it.sandhiNote ? '⚠️ ' + it.sandhiNote : 'Hear it, repeat it, find the pinyin',
                    tts: it.chinese, listenOnly: true,
                    options: opts2.options, correct: opts2.correct,
                    revealTitle: it.chinese + '  ' + it.pinyin,
                    revealLines: [['Meaning', it.meaning], ['Sandhi', it.sandhi ? 'yes · ' + (it.sandhiNote || '') : '—']],
                    explain: ''
                });
            }
        });
        return qs;
    }

    function buildToneQs(data) {
        var list = data.pronunciation || [];
        var names = ['1st · high flat', '2nd · rising', '3rd · dip', '4th · falling'];
        return list.filter(function (it) { return it.tone >= 1 && it.tone <= 4; }).map(function (it) {
            var correctIdx = it.tone - 1;
            var opts = mc(names.slice(), correctIdx);
            return {
                id: it.id, skill: 'tones',
                prompt: it.chinese, promptNote: 'Listen and pick the tone',
                tts: it.chinese, listenOnly: true,
                options: opts.options, correct: opts.correct,
                revealTitle: it.chinese + '  ' + it.pinyin,
                revealLines: [['Tone', names[correctIdx]], ['Meaning', it.meaning]],
                explain: it.toneNote || ''
            };
        });
    }

    function buildPhraseQs(catItems) {
        var list = catItems || [];
        var allMeanings = list.map(function (it) { return it.meaning; }).filter(Boolean);
        return list.map(function (it) {
            var opts = mc(distractor(it.meaning, allMeanings, 4), 0);
            return {
                id: it.id, skill: 'phrases',
                prompt: it.chinese, promptNote: '🔊 Listen, then pick the meaning',
                tts: it.chinese, listenOnly: true,
                options: opts.options, correct: opts.correct,
                revealTitle: it.chinese + '  ' + it.pinyin,
                revealLines: [['Meaning', it.meaning], ['Use', it.category || '']],
                explain: ''
            };
        });
    }

    /* Adaptive placement: 3 questions per round, ladder up/down from HSK 3 */
    function placementLadder(bank) {
        var cur = 3;
        var used = {};
        var rounds = 0;
        var all = [];
        while (rounds < 4 && cur >= 1 && cur <= 5) {
            var pool = (bank.questions[cur] || []).filter(function (q) { return !used[q.id]; });
            if (pool.length < 3) break;
            var picked = sample(pool, 3);
            picked.forEach(function (q) { used[q.id] = true; });
            all.push({ level: cur, questions: picked });
            rounds++;
            // decide next level after answering: handled at summary; here pre-pick levels only
            cur = cur + 1;
        }
        return all;
    }

    function buildPlacementQs(bank) {
        var rounds = placementLadder(bank);
        var qs = [];
        rounds.forEach(function (r) {
            r.questions.forEach(function (q) {
                var correct = q.options.indexOf(q.answer);
                qs.push({
                    id: q.id, skill: 'placement',
                    prompt: q.question, promptNote: 'HSK ' + r.level + ' · ' + (q.category || ''),
                    options: q.options.slice(),
                    correct: correct < 0 ? 0 : correct,
                    revealTitle: q.answer,
                    revealLines: [['HSK level', String(r.level)], ['Category', q.category || '']],
                    explain: ''
                });
            });
        });
        return { qs: qs, ladder: rounds };
    }


    /* ---------------- achievements & weekly chart ---------------- */
    var ACHIEVEMENTS = [
        { id: 'first', emoji: '🐣', name: 'First Steps', desc: 'Complete your first session', check: function (d) { return d.log.length >= 1; } },
        { id: 'streak3', emoji: '🔥', name: 'On Fire', desc: '3-day streak', check: function (d) { return d.streak.count >= 3; } },
        { id: 'streak7', emoji: '⚡', name: 'Unstoppable', desc: '7-day streak', check: function (d) { return d.streak.count >= 7; } },
        { id: 'words50', emoji: '📚', name: 'Bookworm', desc: 'Learn 50 words', check: function (d) { return learnedCount() >= 50; } },
        { id: 'words200', emoji: '🎓', name: 'Scholar', desc: 'Learn 200 words', check: function (d) { return learnedCount() >= 200; } },
        { id: 'xp500', emoji: '💎', name: 'Gem Collector', desc: 'Earn 500 XP', check: function (d) { return d.xp >= 500; } },
        { id: 'xp2000', emoji: '🏆', name: 'Champion', desc: 'Earn 2000 XP', check: function (d) { return d.xp >= 2000; } },
        { id: 'sharp', emoji: '🎯', name: 'Sharp Shooter', desc: '80%+ accuracy in a session', check: function (d) { return d.bestAcc >= 80; } },
        { id: 'speak', emoji: '🗣', name: 'Chatterbox', desc: 'Try a speaking session', check: function (d) { return !!d.flags.speaking; } },
        { id: 'talk', emoji: '💬', name: 'Conversationalist', desc: 'Read a dialogue', check: function (d) { return !!d.flags.dialogue; } },
        { id: 'cult', emoji: '🏮', name: 'Culture Vulture', desc: 'Read a cultural note', check: function (d) { return !!d.flags.cultural; } },
        { id: 'phrase', emoji: '🗺', name: 'Globetrotter', desc: 'Quiz real-world phrases', check: function (d) { return !!d.flags.phrases; } },
        { id: 'placed', emoji: '🧭', name: 'Placed', desc: 'Take the placement test', check: function (d) { return d.placement > 0; } },
        { id: 'all4', emoji: '🌟', name: 'All-Rounder', desc: 'Practice all core skills', check: function (d) { return ['vocab', 'listening', 'reading', 'grammar'].every(function (s) { return (d.stats[s] || {}).t > 0; }); } },
        { id: 'week', emoji: '📅', name: 'Week Warrior', desc: 'Practice 5 of the last 7 days', check: function (d) { return weeklyActivity(d).filter(function (n) { return n > 0; }).length >= 5; } }
    ];
    function achievementList(d) {
        return ACHIEVEMENTS.map(function (a) {
            var ok = false;
            try { ok = !!a.check(d); } catch (e) {}
            return { id: a.id, emoji: a.emoji, name: a.name, desc: a.desc, unlocked: ok };
        });
    }
    function unlockedCount(d) {
        return achievementList(d).filter(function (a) { return a.unlocked; }).length;
    }
    function weeklyActivity(d) {
        var days = [];
        for (var i = 6; i >= 0; i--) {
            var dt = new Date();
            dt.setDate(dt.getDate() - i);
            var k = dateKey(dt);
            var xp = 0;
            (d.log || []).forEach(function (e) { if (e.date === k) xp += e.xp; });
            days.push(xp);
        }
        return days;
    }
    function weeklyChartHtml(d) {
        var days = weeklyActivity(d);
        var max = Math.max.apply(null, days.concat([1]));
        var labels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        var now = new Date().getDay(); // 0=Sun
        var bars = days.map(function (n, i) {
            var dayIdx = (now - (6 - i) + 7) % 7;
            var h = Math.max(4, Math.round((n / max) * 36));
            return '<div class="wk-col"><div class="wk-bar-wrap"><div class="wk-bar" style="height:' + h + 'px"' + (n ? '' : ' data-empty="1"') + '></div></div><div class="wk-label">' + labels[dayIdx] + '</div></div>';
        }).join('');
        return '<div class="week-bars">' + bars + '</div>';
    }

    /* ---------------- app state ---------------- */
    var SKILL_LABELS = { vocab: 'Vocabulary', listening: 'Listening', reading: 'Reading', grammar: 'Grammar', speaking: 'Speaking', tones: 'Tones', dialogue: 'Dialogues', cultural: 'Culture', phrases: 'Phrases', placement: 'Placement' };
    var tab = 'home';
    var stack = [];
    var vocabLevel = 1;
    var quiz = null;
    var cards = null;
    var dlgRef = null;
    var lessonRef = null;

    /* ---------------- navigation ---------------- */
    function screenHeader(title, note) {
        return '<div class="subhead"><button class="back" data-act="back" aria-label="Back">←</button><div><h1>' + esc(title) + '</h1>' + (note ? '<div class="subhead-note">' + esc(note) + '</div>' : '') + '</div></div>';
    }
    var DEFAULT_SCREENS = {
        home: screenHome,
        practice: screenPracticeMenu,
        progress: screenProgress,
        settings: screenSettings
    };
    function activeViewEl() { return $('view-' + tab); }
    function renderScreen() {
        var view = activeViewEl();
        if (!view || !stack.length) return;
        view.innerHTML = '';
        stack[stack.length - 1](view);
        updateTopbar();
    }
    function navTo(screen) { stack.push(screen); renderScreen(); }
    function navBack() { if (stack.length > 1) { stack.pop(); renderScreen(); } else { switchTab('home'); } }
    function switchTab(name) {
        if (!DEFAULT_SCREENS[name]) name = 'home';
        tab = name;
        stack = [DEFAULT_SCREENS[name]];
        var tabs = document.querySelectorAll('.tab');
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].setAttribute('aria-selected', String(tabs[i].getAttribute('data-view') === name));
        }
        // Views are display:none unless .active — show the current one (fix: blank content area)
        var views = document.querySelectorAll('.view');
        for (var v = 0; v < views.length; v++) {
            views[v].classList.toggle('active', views[v].id === 'view-' + name);
        }
        stopSpeak();
        renderScreen();
        try { history.replaceState(null, '', '#' + name); } catch (e) {}
    }
    function updateTopbar() {
        var d = store.load();
        var chipS = $('chip-streak'), chipL = $('chip-level');
        if (chipS) chipS.innerHTML = '🔥 <b>' + d.streak.count + '</b>';
        if (chipL) chipL.innerHTML = 'Lv<b>' + levelFor(d.xp) + '</b>';
    }

    /* ---------------- screens ---------------- */
    function loadingHtml(msg) {
        return '<div class="loading-box"><div class="spinner"></div><div>' + esc(msg) + '</div></div>';
    }
    function withLoading(title, note, loadFn, onReady) {
        navTo(function (view) {
            view.innerHTML = screenHeader(title, note) + loadingHtml('Loading…');
        });
        loadFn().then(function () {
            navBack(); // pop the loading screen
            onReady();
        }).catch(function (err) {
            navBack();
            navTo(function (view) {
                view.innerHTML = screenHeader(title, note) +
                    '<div class="card"><p>⚠️ ' + esc(err && err.message ? err.message : 'Could not load data') + '</p>' +
                    '<p class="faint">Check your connection and try again.</p></div>' +
                    '<button class="btn" data-act="back">← Back</button>';
            });
        });
    }

    /* ---- home ---- */
    var DAILY_WORDS = [
        { c: '你好', p: 'nǐ hǎo', m: 'Hello', ex: { cn: '你好，我叫李明。', en: 'Hello, my name is Li Ming.' } },
        { c: '谢谢', p: 'xièxie', m: 'Thank you', ex: { cn: '谢谢你帮我。', en: 'Thank you for helping me.' } },
        { c: '学习', p: 'xuéxí', m: 'To study / learn', ex: { cn: '我每天学习中文。', en: 'I study Chinese every day.' } },
        { c: '朋友', p: 'péngyou', m: 'Friend', ex: { cn: '他是我的好朋友。', en: 'He is my good friend.' } },
        { c: '今天', p: 'jīntiān', m: 'Today', ex: { cn: '今天天气很好。', en: 'The weather is nice today.' } },
        { c: '中国', p: 'zhōngguó', m: 'China', ex: { cn: '我在中国学习。', en: 'I study in China.' } },
        { c: '老师', p: 'lǎoshī', m: 'Teacher', ex: { cn: '我们的老师很好。', en: 'Our teacher is very nice.' } },
        { c: '学生', p: 'xuésheng', m: 'Student', ex: { cn: '我是学生。', en: 'I am a student.' } },
        { c: '家人', p: 'jiārén', m: 'Family', ex: { cn: '我爱我的家人。', en: 'I love my family.' } },
        { c: '时间', p: 'shíjiān', m: 'Time', ex: { cn: '现在没有时间了。', en: 'There is no time now.' } },
        { c: '天气', p: 'tiānqì', m: 'Weather', ex: { cn: '明天天气怎么样？', en: 'How will the weather be tomorrow?' } },
        { c: '好吃', p: 'hǎochī', m: 'Delicious', ex: { cn: '这个菜很好吃。', en: 'This dish is delicious.' } },
        { c: '喜欢', p: 'xǐhuan', m: 'To like', ex: { cn: '我喜欢喝茶。', en: 'I like drinking tea.' } },
        { c: '爱', p: 'ài', m: 'To love', ex: { cn: '我爱你。', en: 'I love you.' } },
        { c: '家', p: 'jiā', m: 'Home / family', ex: { cn: '我回家了。', en: 'I am going home.' } },
        { c: '水', p: 'shuǐ', m: 'Water', ex: { cn: '我想喝一杯水。', en: 'I want to drink a glass of water.' } },
        { c: '茶', p: 'chá', m: 'Tea', ex: { cn: '请给我一杯茶。', en: 'Please give me a cup of tea.' } },
        { c: '咖啡', p: 'kāfēi', m: 'Coffee', ex: { cn: '我早上喝咖啡。', en: 'I drink coffee in the morning.' } },
        { c: '米饭', p: 'mǐfàn', m: 'Rice', ex: { cn: '我吃米饭和菜。', en: 'I eat rice and dishes.' } },
        { c: '苹果', p: 'píngguǒ', m: 'Apple', ex: { cn: '这个苹果很甜。', en: 'This apple is very sweet.' } },
        { c: '猫', p: 'māo', m: 'Cat', ex: { cn: '我家有一只猫。', en: 'My family has a cat.' } },
        { c: '狗', p: 'gǒu', m: 'Dog', ex: { cn: '狗是人类的朋友。', en: 'Dogs are humans’ friends.' } },
        { c: '钱', p: 'qián', m: 'Money', ex: { cn: '我没有钱。', en: 'I have no money.' } },
        { c: '商店', p: 'shāngdiàn', m: 'Shop / store', ex: { cn: '商店八点开门。', en: 'The store opens at eight.' } },
        { c: '医院', p: 'yīyuàn', m: 'Hospital', ex: { cn: '他去医院了。', en: 'He went to the hospital.' } },
        { c: '学校', p: 'xuéxiào', m: 'School', ex: { cn: '学校很近。', en: 'The school is very close.' } },
        { c: '公园', p: 'gōngyuán', m: 'Park', ex: { cn: '我们去公园散步。', en: 'Let’s take a walk in the park.' } },
        { c: '地铁', p: 'dìtiě', m: 'Subway / metro', ex: { cn: '我坐地铁上班。', en: 'I take the subway to work.' } },
        { c: '飞机', p: 'fēijī', m: 'Airplane', ex: { cn: '飞机几点起飞？', en: 'When does the plane take off?' } },
        { c: '火车', p: 'huǒchē', m: 'Train', ex: { cn: '火车票很贵。', en: 'Train tickets are expensive.' } },
        { c: '汽车', p: 'qìchē', m: 'Car', ex: { cn: '他开汽车上班。', en: 'He drives a car to work.' } },
        { c: '音乐', p: 'yīnyuè', m: 'Music', ex: { cn: '我喜欢听音乐。', en: 'I like listening to music.' } },
        { c: '电影', p: 'diànyǐng', m: 'Movie / film', ex: { cn: '我们去看电影吧。', en: 'Let’s go see a movie.' } },
        { c: '书', p: 'shū', m: 'Book', ex: { cn: '这本书很有意思。', en: 'This book is very interesting.' } },
        { c: '手机', p: 'shǒujī', m: 'Mobile phone', ex: { cn: '我的手机没电了。', en: 'My phone is out of battery.' } },
        { c: '电脑', p: 'diànnǎo', m: 'Computer', ex: { cn: '我用电脑工作。', en: 'I work with a computer.' } },
        { c: '工作', p: 'gōngzuò', m: 'Work / job', ex: { cn: '我的工作很忙。', en: 'My work is very busy.' } },
        { c: '休息', p: 'xiūxi', m: 'To rest', ex: { cn: '你休息一下吧。', en: 'Take a rest.' } },
        { c: '睡觉', p: 'shuìjiào', m: 'To sleep', ex: { cn: '我十一点睡觉。', en: 'I sleep at eleven.' } },
        { c: '起床', p: 'qǐchuáng', m: 'To get up', ex: { cn: '我每天早上六点起床。', en: 'I get up at six every morning.' } },
        { c: '快乐', p: 'kuàilè', m: 'Happy', ex: { cn: '祝你生日快乐！', en: 'Happy birthday to you!' } },
        { c: '健康', p: 'jiànkāng', m: 'Healthy / health', ex: { cn: '运动使人健康。', en: 'Exercise keeps people healthy.' } }
    ];
    function dailyWord() {
        var now = new Date();
        var seed = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
        return DAILY_WORDS[seed % DAILY_WORDS.length];
    }
    function greeting() {
        var h = new Date().getHours();
        if (h < 6) return 'Late night';
        if (h < 12) return 'Good morning';
        if (h < 18) return 'Good afternoon';
        return 'Good evening';
    }

    function screenHome(view) {
        var d = store.load();
        var w = dailyWord();
        var name = d.name ? ', ' + d.name : '';
        var lv = levelFor(d.xp);
        var prog = d.xp - (lv - 1) * 250;
        var lvlPct = Math.min(100, Math.round((prog / 250) * 100));
        var ach = achievementList(d);
        var unlocked = ach.filter(function (a) { return a.unlocked; });
        var achHtml = unlocked.slice(0, 6).map(function (a) {
            return '<div class="ach unlocked" title="' + esc(a.desc) + '"><span class="ach-ico">' + a.emoji + '</span><span class="ach-name">' + esc(a.name) + '</span></div>';
        }).join('');
        var moreN = ach.length - Math.min(6, unlocked.length);
        if (moreN > 0) achHtml += '<button class="ach more" data-act="go-progress" title="See all achievements">+' + moreN + '</button>';
        var lastLog = d.log[d.log.length - 1];
        view.innerHTML =
            '<div class="greet">' + esc(greeting() + name) + ' <span class="cn-word">你好</span></div>' +
            '<div class="home-date">' + esc(todayLabel()) + ' · ZHI Studio Mobile</div>' +

            '<div class="daily-word">' +
                '<span class="dw-badge">📖 Word of the day</span>' +
                '<button class="dw-play" data-act="play-daily" aria-label="Pronounce ' + esc(w.c) + '">🔊</button>' +
                '<div class="dw-hanzi cn">' + esc(w.c) + '</div>' +
                '<div class="dw-pinyin">' + esc(w.p) + '</div>' +
                '<div class="dw-mean">' + esc(w.m) + '</div>' +
                '<div class="dw-example cn">' + esc(w.ex.cn) + '<br><span class="en">' + esc(w.ex.en) + '</span></div>' +
            '</div>' +

            '<div class="stat-row">' +
                '<div class="stat"><div class="stat-num">' + d.xp + '</div><div class="stat-label">XP</div></div>' +
                '<div class="stat"><div class="stat-num">' + d.streak.count + '🔥</div><div class="stat-label">Streak</div></div>' +
                '<div class="stat"><div class="stat-num">' + learnedCount() + '</div><div class="stat-label">Words</div></div>' +
            '</div>' +

            '<div class="card lvl-card">' +
                '<div class="skill-head"><span>Level ' + lv + '</span><span class="pct">' + prog + '/250 XP</span></div>' +
                '<div class="bar"><div class="bar-fill" style="width:' + lvlPct + '%"></div></div>' +
                '<div class="lvl-meta">' + unlockedCount(d) + '/15 achievements · best session ' + d.bestAcc + '%</div>' +
            '</div>' +

            '<div class="section-title">This week</div>' +
            '<div class="card">' + weeklyChartHtml(d) + '</div>' +

            (lastLog
                ? '<div class="section-title">Continue learning</div>' +
                  '<button class="btn" data-act="continue-last"><span>▶️ ' + esc(SKILL_LABELS[lastLog.skill] || lastLog.skill) + '</span><span class="btn-sub">Last session: ' + lastLog.c + '/' + lastLog.t + ' · +' + lastLog.xp + ' XP on ' + esc(lastLog.date) + '</span></button>'
                : '') +

            '<div class="section-title">Quick practice</div>' +
            '<div class="grid2">' +
                '<button class="mode-card" data-act="go-vocab"><span class="mode-ico">🀄</span>Vocabulary<small>HSK 1–5 · flashcards & quiz</small></button>' +
                '<button class="mode-card" data-act="go-listening"><span class="mode-ico">🎧</span>Listening<small>dictation · passages · tones</small></button>' +
                '<button class="mode-card" data-act="go-reading"><span class="mode-ico">📖</span>Reading<small>characters · sentences · passages</small></button>' +
                '<button class="mode-card" data-act="go-grammar"><span class="mode-ico">🔤</span>Grammar<small>patterns · example drills</small></button>' +
                '<button class="mode-card" data-act="go-speaking"><span class="mode-ico">🗣</span>Speaking<small>repeat & tone drills</small></button>' +
                '<button class="mode-card" data-act="go-dialogues"><span class="mode-ico">💬</span>Dialogues<small>real conversations</small></button>' +
                '<button class="mode-card" data-act="go-cultural"><span class="mode-ico">🏮</span>Culture<small>festivals · customs</small></button>' +
                '<button class="mode-card" data-act="go-phrases"><span class="mode-ico">🗺</span>Phrases<small>everyday survival</small></button>' +
            '</div>' +

            '<div class="section-title">Achievements</div>' +
            '<div class="ach-grid">' + (achHtml || '<p class="muted" style="grid-column:1/-1">Complete your first session to unlock one.</p>') + '</div>';
    }

    /* ---- practice menu ---- */
    function screenPracticeMenu(view) {
        view.innerHTML =
            '<div class="subhead"><div><h1>Practice</h1><div class="subhead-note">Pick a skill — only its data loads, so it’s fast.</div></div></div>' +
            '<button class="btn" data-act="go-vocab"><span>🀄 Vocabulary</span><span class="btn-sub">HSK 1–5 word flashcards & multiple-choice quiz</span></button>' +
            '<button class="btn" data-act="go-listening"><span>🎧 Listening</span><span class="btn-sub">Dictation, comprehension, minimal pairs</span></button>' +
            '<button class="btn" data-act="go-reading"><span>📖 Reading</span><span class="btn-sub">Characters, sentence completion, context clues, passages</span></button>' +
            '<button class="btn" data-act="go-grammar"><span>🔤 Grammar</span><span class="btn-sub">HSK grammar patterns with example drills</span></button>' +
            '<button class="btn" data-act="go-speaking"><span>🗣 Speaking</span><span class="btn-sub">Pronunciation, shadowing, sentence reading, tone drills</span></button>' +
            '<button class="btn" data-act="go-dialogues"><span>💬 Dialogues</span><span class="btn-sub">80+ real conversation scenarios by topic</span></button>' +
            '<button class="btn" data-act="go-cultural"><span>🏮 Culture</span><span class="btn-sub">Festivals, customs and cultural notes</span></button>' +
            '<button class="btn" data-act="go-phrases"><span>🗺 Real-World Phrases</span><span class="btn-sub">750+ phrases for real situations</span></button>' +
            '<button class="btn" data-act="go-placement"><span>🧭 Placement Test</span><span class="btn-sub">Find your HSK level in ~4 rounds</span></button>' +
            '<button class="btn" data-act="go-tones"><span>🎵 Tone Practice</span><span class="btn-sub">Hear a syllable, pick the tone</span></button>';
    }

    /* ---- vocab picker ---- */
    function wordCountForLevel(lv) {
        var g = getData('hsk' + lv);
        return g && g.words ? g.words.length : (lv === 1 ? 1000 : lv === 2 ? 1500 : 2000);
    }
    function screenVocabPicker(view) {
        var pills = '';
        for (var i = 1; i <= 5; i++) {
            pills += '<button class="pill' + (i === vocabLevel ? ' active' : '') + '" data-act="vocab-level:' + i + '">HSK ' + i + '</button>';
        }
        view.innerHTML =
            screenHeader('Vocabulary', 'Flashcards or quiz · HSK ' + vocabLevel + ' · ~' + wordCountForLevel(vocabLevel) + ' words') +
            '<div class="pills">' + pills + '</div>' +
            '<div class="grid2">' +
                '<button class="mode-card" data-act="vocab-start:cards"><span class="mode-ico">🃏</span>Flashcards<small>flip & mark known</small></button>' +
                '<button class="mode-card" data-act="vocab-start:quiz"><span class="mode-ico">✅</span>Quiz<small>10 questions</small></button>' +
            '</div>';
    }

    /* ---- listening picker ---- */
    function screenListeningPicker(view) {
        view.innerHTML =
            screenHeader('Listening', 'Audio plays with your device’s voice') +
            '<button class="btn" data-act="listen-start:dictation"><span>✍️ Dictation</span><span class="btn-sub">Hear the word — pick the meaning</span></button>' +
            '<button class="btn" data-act="listen-start:comprehension"><span>📻 Comprehension</span><span class="btn-sub">Listen to short passages, answer questions</span></button>' +
            '<button class="btn" data-act="listen-start:minimal"><span>🔊 Minimal Pairs</span><span class="btn-sub">Tone pairs like mā vs mǎ</span></button>' +
            '<button class="btn" data-act="go-dialogues"><span>💬 Dialogues</span><span class="btn-sub">Full scenarios — tap to listen</span></button>';
    }

    /* ---- reading picker ---- */
    function screenReadingPicker(view) {
        view.innerHTML =
            screenHeader('Reading', 'From single characters to full passages') +
            '<button class="btn" data-act="read-start:chars"><span>🀄 Characters</span><span class="btn-sub">What does this character mean?</span></button>' +
            '<button class="btn" data-act="read-start:sentences"><span>🧩 Sentence Completion</span><span class="btn-sub">Fill the missing word</span></button>' +
            '<button class="btn" data-act="read-start:context"><span>🔎 Context Clues</span><span class="btn-sub">Guess the unknown word</span></button>' +
            '<button class="btn" data-act="read-start:passages"><span>📖 Passages</span><span class="btn-sub">Read & answer questions</span></button>';
    }

    /* ---- grammar ---- */
    function screenGrammarList(view) {
        var g = getData('grammar');
        if (!g) { view.innerHTML = screenHeader('Grammar', '') + loadingHtml('Loading grammar lessons…'); return; }
        var lessons = g.lessons || [];
        var rows = lessons.map(function (l) {
            return '<button class="btn" data-act="lesson:' + esc(l.id) + '"><span>' + esc(l.title) + '</span><span class="btn-sub">' + esc(l.titleMeaning || '') + ' · ' + esc(l.level || '') + '</span></button>';
        }).join('');
        view.innerHTML =
            screenHeader('Grammar', lessons.length + ' patterns') +
            '<button class="btn btn-primary" data-act="grammar-drill">🎲 Example Drill · 10 questions</button>' +
            rows;
    }
    function screenLesson(view, lesson) {
        lessonRef = lesson;
        var examples = (lesson.examples || []).map(function (ex, i) {
            return '<div class="lesson-example">' +
                '<div class="cn">' + esc(ex.chinese) + '</div>' +
                '<div class="py">' + esc(ex.pinyin || '') + '</div>' +
                '<div class="en">' + esc(ex.meaning || '') + '</div>' +
                '<button class="btn-ghost" style="display:inline-block;padding:6px 12px;margin-top:6px;border:1px solid rgba(53,223,177,.35);border-radius:999px;color:var(--jade);font-size:12px;font-weight:700;" data-act="ex-play:' + i + '">🔊 Listen</button>' +
                '</div>';
        }).join('');
        view.innerHTML =
            screenHeader(lesson.title, '') +
            '<div class="card">' +
                '<div class="lesson-title cn">' + esc(lesson.title) + '</div>' +
                '<div class="lesson-meaning">' + esc(lesson.titleMeaning || '') + '</div>' +
                '<div class="lesson-block"><h3>Pattern</h3><div class="pat cn">' + esc(lesson.pattern || '') + '</div></div>' +
                '<div class="lesson-block"><h3>Explanation</h3><p style="margin:0">' + esc(lesson.explanation || '') + '</p></div>' +
                (lesson.commonMistake ? '<div class="lesson-block"><h3>⚠️ Common mistake</h3><p style="margin:0">' + esc(lesson.commonMistake) + '</p></div>' : '') +
            '</div>' +
            '<div class="section-title">Examples</div>' + examples;
    }

    /* ---- dialogue reader ---- */
    function screenDialogue(view, scenario) {
        dlgRef = scenario;
        var turns = (scenario.turns || []).map(function (t, i) {
            var sp = t.speaker === 'B' ? 'speaker-b' : 'speaker-a';
            return '<div class="dlg-turn ' + sp + '" data-act="dlg-turn:' + i + '">' +
                '<div class="speaker">' + esc(t.speaker || 'A') + '</div>' +
                '<div style="flex:1">' +
                    '<div class="dlg-cn">' + esc(t.chinese) + '</div>' +
                    '<div class="dlg-meta"><span class="dlg-py">' + esc(t.pinyin || '') + '</span></div>' +
                    '<div class="dlg-en" id="dlg-en-' + i + '" style="display:none">' + esc(t.meaning || '') + '</div>' +
                    '<button class="dlg-reveal" data-act="dlg-show:' + i + '" aria-label="Toggle translation">EN</button>' +
                '</div>' +
                '</div>';
        }).join('');
        view.innerHTML =
            screenHeader(scenario.title, scenario.meaning || '') +
            '<button class="btn btn-primary" data-act="dlg-playall">▶️ Play all</button>' +
            '<div class="section-title">Tap a line to hear it · EN to translate</div>' +
            turns;
    }

    /* ---- speaking ---- */
    function screenSpeakingPicker(view) {
        view.innerHTML =
            screenHeader('Speaking', 'Listen, repeat aloud, then answer') +
            '<div class="card speak-tip"><p>🎤 Use headphones in a quiet spot. Say each line out loud — your device’s voice is the model, your voice is the practice.</p></div>' +
            '<button class="btn" data-act="speak-start:pronunciation"><span>🔊 Pronunciation</span><span class="btn-sub">Hear the word, repeat, check the meaning</span></button>' +
            '<button class="btn" data-act="speak-start:shadowing"><span>🪞 Shadowing</span><span class="btn-sub">Echo full phrases & tone sandhi</span></button>' +
            '<button class="btn" data-act="speak-start:sentenceReading"><span>🗣 Sentence Reading</span><span class="btn-sub">Natural sentences to read aloud</span></button>' +
            '<button class="btn" data-act="tones-start"><span>🎵 Tone Practice</span><span class="btn-sub">Hear a syllable — which tone is it?</span></button>';
    }
    function startSpeaking(type) {
        withLoading('Speaking', '', function () { return loadData('speaking'); }, function () {
            var data = getData('speaking');
            if (!data) {
                navTo(function (view) { view.innerHTML = screenHeader('Speaking', '') + '<div class="card"><p>Speaking data unavailable.</p></div>'; });
                return;
            }
            var qs = buildSpeakingQs(data, type);
            var label = { pronunciation: 'Pronunciation', shadowing: 'Shadowing', sentenceReading: 'Sentence Reading' }[type] || 'Speaking';
            if (!qs.length) {
                navTo(function (view) { view.innerHTML = screenHeader('Speaking', '') + '<div class="card"><p>No exercises of this type.</p></div>'; });
                return;
            }
            store.load().flags.speaking = true; store.save();
            startQuiz('speaking', qs, 'Speaking · ' + label, '🔊 listen & repeat, then answer', { kind: 'speak', type: type });
        });
    }
    function startTones() {
        withLoading('Tone Practice', '', function () { return loadData('speaking'); }, function () {
            var data = getData('speaking');
            if (!data) { navTo(function (view) { view.innerHTML = screenHeader('Tones', '') + '<div class="card"><p>Tone data unavailable.</p></div>'; }); return; }
            var qs = buildToneQs(data);
            if (!qs.length) { navTo(function (view) { view.innerHTML = screenHeader('Tones', '') + '<div class="card"><p>No tone exercises.</p></div>'; }); return; }
            store.load().flags.speaking = true; store.save();
            startQuiz('tones', qs, 'Tone Practice', '🔊 which tone do you hear?', { kind: 'tones' });
        });
    }

    /* ---- dialogues (full scenarios, by category) ---- */
    function screenDialogues(view) {
        var data = getData('dialogues');
        if (!data) { view.innerHTML = screenHeader('Dialogues', '') + loadingHtml('Loading dialogues…'); return; }
        var byCat = {};
        (data.scenarios || []).forEach(function (s) { byCat[s.category] = (byCat[s.category] || 0) + 1; });
        var cats = Object.keys(byCat).sort();
        var rows = cats.map(function (c) {
            return '<button class="btn" data-act="dlg:cat:' + esc(c) + '"><span>💬 ' + esc(c) + '</span><span class="btn-sub">' + byCat[c] + ' conversations</span></button>';
        }).join('');
        view.innerHTML =
            screenHeader('Dialogues', 'Real conversations · tap to listen') +
            '<button class="btn btn-primary" data-act="dlg:random">🎲 Random dialogue</button>' +
            rows;
    }
    function screenDialogueListByCat(view, cat) {
        var data = getData('dialogues');
        var items = (data.scenarios || []).filter(function (s) { return s.category === cat; });
        var rows = items.map(function (it) {
            return '<button class="btn" data-act="dlg:' + esc(it.id) + '"><span>' + esc(it.title) + '</span><span class="btn-sub">' + esc(it.titleMeaning || '') + ' · ' + esc(it.difficulty || '') + '</span></button>';
        }).join('');
        view.innerHTML = screenHeader(cat, items.length + ' conversations') + rows;
    }
    function ensureDialogues(ok, fail) {
        var data = getData('dialogues');
        if (data) { ok(data); return; }
        loadData('dialogues').then(function () { ok(getData('dialogues')); }, function () {
            navTo(function (view) {
                view.innerHTML = screenHeader('Dialogues', '') + '<div class="card"><p>⚠️ Could not load dialogues.</p></div><button class="btn" data-act="back">← Back</button>';
            });
        });
    }
    function openDialogueById(id) {
        ensureDialogues(function (data) {
            var sc = null;
            (data.scenarios || []).forEach(function (s) { if (s.id === id) sc = s; });
            if (sc) {
                store.load().flags.dialogue = true; store.save();
                navTo(function (view) { screenDialogue(view, sc); });
            } else {
                toast('Dialogue not found');
            }
        });
    }
    function openRandomDialogue() {
        ensureDialogues(function (data) {
            var list = data.scenarios || [];
            if (!list.length) { toast('No dialogues available'); return; }
            var sc = list[(Math.random() * list.length) | 0];
            store.load().flags.dialogue = true; store.save();
            navTo(function (view) { screenDialogue(view, sc); });
        });
    }

    /* ---- cultural notes ---- */
    function screenCultural(view) {
        var data = getData('cultural');
        if (!data) { view.innerHTML = screenHeader('Culture', '') + loadingHtml('Loading culture notes…'); return; }
        var cats = data.categories || [];
        var rows = cats.map(function (c) {
            var n = (data.notes || []).filter(function (x) { return x.category === c; }).length;
            return '<button class="btn" data-act="cult:cat:' + esc(c) + '"><span>' + esc(c) + '</span><span class="btn-sub">' + n + ' notes</span></button>';
        }).join('');
        view.innerHTML =
            screenHeader('Culture', 'China, one story at a time') +
            '<button class="btn btn-primary" data-act="cult:random">🎲 Random note</button>' +
            rows;
    }
    function screenCulturalList(view, cat) {
        var data = getData('cultural');
        var items = (data.notes || []).filter(function (n) { return n.category === cat; });
        var rows = items.map(function (n) {
            return '<button class="btn" data-act="cult:note:' + esc(n.id) + '"><span>' + (n.icon || '📜') + ' ' + esc(n.title) + '</span><span class="btn-sub">' + esc(n.titleMeaning || '') + '</span></button>';
        }).join('');
        view.innerHTML = screenHeader(cat, items.length + ' notes') + rows;
    }
    function screenCulturalNote(view, note) {
        var phrases = (note.keyPhrases || []).map(function (p) {
            return '<button class="pill" data-act="cult:speak:' + esc(p) + '">🔊 ' + esc(p) + '</button>';
        }).join('');
        view.innerHTML =
            screenHeader(note.title, note.titleMeaning || '') +
            '<div class="card">' +
                '<div class="note-icon">' + (note.icon || '📜') + '</div>' +
                '<div class="note-body">' + esc(note.content || '') + '</div>' +
                (note.significance ? '<div class="note-sig">✨ ' + esc(note.significance) + '</div>' : '') +
            '</div>' +
            (phrases ? '<div class="section-title">Key phrases</div><div class="pills">' + phrases + '</div>' : '') +
            '<button class="btn btn-primary" data-act="cult:random">🎲 Another note</button>';
    }
    function ensureCultural(ok) {
        var data = getData('cultural');
        if (data) { ok(data); return; }
        loadData('cultural').then(function () { ok(getData('cultural')); }, function () {
            navTo(function (view) {
                view.innerHTML = screenHeader('Culture', '') + '<div class="card"><p>⚠️ Could not load culture notes.</p></div><button class="btn" data-act="back">← Back</button>';
            });
        });
    }
    function openCulturalNoteById(id) {
        ensureCultural(function (data) {
            var note = null;
            (data.notes || []).forEach(function (n) { if (n.id === id) note = n; });
            if (note) {
                store.load().flags.cultural = true; store.save();
                navTo(function (view) { screenCulturalNote(view, note); });
            } else toast('Note not found');
        });
    }
    function openRandomCultural() {
        ensureCultural(function (data) {
            var list = data.notes || [];
            if (!list.length) { toast('No notes available'); return; }
            var note = list[(Math.random() * list.length) | 0];
            store.load().flags.cultural = true; store.save();
            navTo(function (view) { screenCulturalNote(view, note); });
        });
    }

    /* ---- real-world phrases ---- */
    function screenPhrases(view) {
        var data = getData('phrases');
        if (!data) { view.innerHTML = screenHeader('Phrases', '') + loadingHtml('Loading phrases…'); return; }
        var cats = data.categories || [];
        var rows = cats.map(function (c) {
            var n = (data[c] || []).length;
            var label = c.replace(/([A-Z])/g, ' $1').replace(/^./, function (x) { return x.toUpperCase(); });
            return '<button class="btn" data-act="phrase:cat:' + esc(c) + '"><span>💬 ' + esc(label) + '</span><span class="btn-sub">' + n + ' phrases · tap to hear</span></button>';
        }).join('');
        view.innerHTML =
            screenHeader('Phrases', 'What you actually say') +
            '<button class="btn btn-primary" data-act="phrase:start:random">🎲 Phrase quiz · mixed</button>' +
            rows;
    }
    function screenPhraseList(view, cat) {
        var data = getData('phrases');
        var items = (data[cat] || []).slice(0, 40);
        var rows = items.map(function (p) {
            return '<div class="phrase-row">' +
                '<button class="phrase-play" data-act="phrase:play:' + esc(p.id) + '" aria-label="Pronounce ' + esc(p.chinese) + '">🔊</button>' +
                '<div class="phrase-body">' +
                    '<div class="cn">' + esc(p.chinese) + '</div>' +
                    '<div class="py">' + esc(p.pinyin || '') + '</div>' +
                    '<div class="en">' + esc(p.meaning || '') + '</div>' +
                '</div></div>';
        }).join('');
        view.innerHTML =
            screenHeader(cat, items.length + ' phrases') +
            '<button class="btn btn-primary" data-act="phrase:start:' + esc(cat) + '">✅ Quiz this set</button>' +
            rows;
    }
    function ensurePhrases(ok) {
        var data = getData('phrases');
        if (data) { ok(data); return; }
        loadData('phrases').then(function () { ok(getData('phrases')); }, function () {
            navTo(function (view) {
                view.innerHTML = screenHeader('Phrases', '') + '<div class="card"><p>⚠️ Could not load phrases.</p></div><button class="btn" data-act="back">← Back</button>';
            });
        });
    }
    function startPhraseQuiz(cat) {
        ensurePhrases(function (data) {
            var items = cat === 'random'
                ? (data.getAll ? data.getAll() : Object.keys(data).filter(function (k) { return Array.isArray(data[k]); }).reduce(function (acc, k) { return acc.concat(data[k]); }, []))
                : (data[cat] || []);
            if (!items.length) { toast('No phrases available'); return; }
            store.load().flags.phrases = true; store.save();
            startQuiz('phrases', buildPhraseQs(items), 'Phrase Quiz', cat === 'random' ? 'mixed everyday phrases' : cat, { kind: 'phrases', cat: cat });
        });
    }
    function playPhraseById(id) {
        ensurePhrases(function (data) {
            var p = data.getById ? data.getById(id) : null;
            if (!p) {
                Object.keys(data).forEach(function (k) {
                    if (Array.isArray(data[k])) data[k].forEach(function (x) { if (x.id === id) p = x; });
                });
            }
            if (p) speak(p.chinese);
        });
    }

    /* ---- placement test ---- */
    function screenPlacementIntro(view) {
        var d = store.load();
        var done = d.placement > 0 ? 'Your last result: <b>HSK ' + d.placement + '</b> (' + (PlacementBank.levels ? PlacementBank.levels[String(d.placement)].name : '') + ')' : 'Never taken';
        view.innerHTML =
            screenHeader('Placement Test', '~12 questions · adaptive') +
            '<div class="card">' +
                '<p>Not sure which HSK level fits? Answer a short adaptive quiz — it starts at HSK 3 and climbs or drops based on your answers.</p>' +
                '<p>Your level is then used as the default for vocabulary practice.</p>' +
                '<div class="card-meta">' + done + '</div>' +
            '</div>' +
            '<button class="btn btn-primary" data-act="placement-start">🚀 Start placement test</button>';
    }
    var placement = null;
    function startPlacement() {
        withLoading('Placement Test', '', function () { return loadData('placement'); }, function () {
            var bank = getData('placement');
            if (!bank || !bank.questions) {
                navTo(function (view) { view.innerHTML = screenHeader('Placement', '') + '<div class="card"><p>Placement data unavailable.</p></div>'; });
                return;
            }
            placement = { cur: 3, done: false, rounds: 0, asked: [], qs: [], qIdx: 0, picked: -1, correct: 0, total: 0 };
            placementNextRound();
        });
    }
    function placementNextRound() {
        if (!placement) return;
        if (placement.rounds >= 4 || placement.cur < 1 || placement.cur > 5) { placementFinish(); return; }
        var bank = getData('placement');
        var pool = (bank.questions[placement.cur] || []).filter(function (q) { return placement.asked.indexOf(q.id) === -1; });
        if (pool.length < 2) { placementFinish(); return; }
        var picked = sample(pool, Math.min(3, pool.length));
        picked.forEach(function (q) { placement.asked.push(q.id); });
        placement.qs = picked.map(function (q) {
            var correct = q.options.indexOf(q.answer);
            return {
                id: q.id, level: placement.cur,
                prompt: q.question, promptNote: 'HSK ' + placement.cur + ' · ' + (q.category || ''),
                options: q.options.slice(),
                correct: correct < 0 ? 0 : correct,
                answer: q.answer
            };
        });
        placement.qIdx = 0;
        placement.picked = -1;
        placement.answered = false;
        placement.rounds++;
        navTo(function (view) { renderPlacementQ(view); });
    }
    function renderPlacementQ(view) {
        if (!placement) return;
        var q = placement.qs[placement.qIdx];
        var roundLabel = 'Round ' + placement.rounds + ' · HSK ' + q.level + ' · ' + (placement.qIdx + 1) + '/3';
        var opts = q.options.map(function (o, i) {
            var cls = 'q-opt';
            var letter = 'ABCD'[i];
            if (placement.answered) {
                if (i === q.correct) cls += ' correct';
                else if (i === placement.picked) cls += ' wrong';
                else cls += ' dim';
            }
            return '<button class="' + cls + '" data-act="p-opt:' + i + '"' + (placement.answered ? ' disabled' : '') + '>' +
                '<span class="opt-letter">' + letter + '</span><span>' + esc(o) + '</span></button>';
        }).join('');
        var reveal = '';
        if (placement.answered) {
            reveal = '<div class="q-reveal"><div class="rv-title cn">' + esc(q.answer) + '</div>' +
                '<div class="rv-line"><b>Your level:</b> ' + esc(q.promptNote) + '</div></div>' +
                '<button class="btn btn-primary" data-act="p-next" style="margin-top:14px">' +
                (placement.qIdx + 1 >= placement.qs.length ? 'Next round →' : 'Next →') + '</button>';
        }
        view.innerHTML =
            screenHeader('Placement Test', 'answer honestly — it adapts') +
            '<div class="quiz-progress"><div class="track"><div class="fill" style="width:' + Math.round(((placement.rounds - 1) * 3 + placement.qIdx) / 12 * 100) + '%"></div></div><div class="count">' + roundLabel + '</div></div>' +
            '<div class="card qcard">' +
                '<div class="q-prompt small">' + esc(q.prompt) + '</div>' +
                '<div class="q-note">' + esc(q.promptNote) + '</div>' +
                '<div class="q-options">' + opts + '</div>' + reveal +
            '</div>';
    }
    function placementAnswer(idx) {
        if (!placement || placement.answered || placement.done) return;
        placement.answered = true;
        placement.picked = idx;
        var q = placement.qs[placement.qIdx];
        placement.total++;
        q.pickedOk = (idx === q.correct);
        if (idx === q.correct) { placement.correct++; soundCorrect(); } else { soundWrong(); }
        renderScreen();
    }
    function placementNext() {
        if (!placement || !placement.answered) return;
        placement.qIdx++;
        placement.answered = false;
        placement.picked = -1;
        if (placement.qIdx >= placement.qs.length) {
            // round finished → adjust level
            var got = 0;
            placement.qs.forEach(function (q) {
                if (q.pickedOk) got++;
            });
            if (got >= 2) placement.cur = Math.min(5, placement.cur + 1);
            else if (got <= 0) placement.cur = Math.max(1, placement.cur - 1);
            placementNextRound();
            return;
        }
        renderScreen();
    }
    function placementFinish() {
        if (!placement) return;
        placement.done = true;
        var level = placement.cur;
        var d = store.load();
        d.placement = level;
        d.flags.placement = true;
        store.save();
        vocabLevel = level;
        var meta = (getData('placement') && getData('placement').levels) ? getData('placement').levels[String(level)] : null;
        navTo(function (view) {
            view.innerHTML =
                screenHeader('Placement Test', 'result') +
                '<div class="summary-hero"><div class="emoji">🎯</div><div class="score">HSK ' + level + '</div>' +
                '<div class="score-label">' + (meta ? meta.name + ' · ' + meta.desc : '') + '</div></div>' +
                '<div class="card"><p>You answered <b>' + placement.correct + '/' + placement.total + '</b> correctly. Vocabulary practice now defaults to <b>HSK ' + level + '</b>.</p></div>' +
                '<div class="btn-row">' +
                    '<button class="btn" data-act="placement-start">🔄 Retake</button>' +
                    '<button class="btn btn-primary" data-act="placement-go">Start HSK ' + level + ' vocab</button>' +
                '</div>';
        });
    }

    /* ---- quiz engine ---- */
    function startQuiz(skill, questions, title, note, origin) {
        quiz = {
            skill: skill,
            questions: sample(questions, Math.min(10, questions.length)),
            i: 0,
            correct: 0,
            answered: false,
            picked: -1,
            done: false,
            title: title,
            note: note,
            origin: origin || null
        };
        navTo(function (view) { renderQuiz(view); });
    }
    function renderQuiz(view) {
        if (!quiz) return;
        if (quiz.done) { renderQuizSummary(view); return; }
        var q = quiz.questions[quiz.i];
        var pct = Math.round((quiz.i / quiz.questions.length) * 100);
        var playBtn = q.tts ? '<button class="q-play" data-act="q-play" aria-label="Play audio">🔊 ' + (q.listenOnly ? 'Play audio' : 'Listen') + '</button>' : '';
        var prompt = q.prompt
            ? '<div class="q-prompt' + (q.prompt.length > 6 ? ' small' : ' large') + ' cn">' + esc(q.prompt) + '</div>'
            : '';
        var sub = q.sub ? '<div class="q-sub cn">' + esc(q.sub) + '</div>' : '';
        var note = q.promptNote ? '<div class="q-note">' + esc(q.promptNote) + '</div>' : '';

        var opts = q.options.map(function (o, i) {
            var cls = 'q-opt';
            var letter = 'ABCD'[i];
            if (quiz.answered) {
                if (i === q.correct) cls += ' correct';
                else if (i === quiz.picked) cls += ' wrong';
                else cls += ' dim';
            }
            return '<button class="' + cls + '" data-act="opt:' + i + '"' + (quiz.answered ? ' disabled' : '') + '>' +
                '<span class="opt-letter">' + letter + '</span><span>' + esc(o) + '</span></button>';
        }).join('');

        var reveal = '';
        if (quiz.answered) {
            var lines = (q.revealLines || []).map(function (kv) {
                return '<div class="rv-line"><b>' + esc(kv[0]) + ':</b> <span class="cn">' + esc(kv[1]) + '</span></div>';
            }).join('');
            var explain = q.explain ? '<div class="rv-explain">' + esc(q.explain) + '</div>' : '';
            var nextLabel = quiz.i + 1 >= quiz.questions.length ? 'See results' : 'Next →';
            reveal = '<div class="q-reveal">' +
                '<div class="rv-title cn">' + esc(q.revealTitle || '') + '</div>' + lines + explain +
                '</div>' +
                '<button class="btn btn-primary" data-act="q-next" style="margin-top:14px">' + nextLabel + '</button>';
        }

        view.innerHTML =
            screenHeader(quiz.title || SKILL_LABELS[quiz.skill], quiz.note || '') +
            '<div class="quiz-progress"><div class="track"><div class="fill" style="width:' + pct + '%"></div></div><div class="count">' + (quiz.i + 1) + '/' + quiz.questions.length + '</div></div>' +
            '<div class="card qcard">' + playBtn + prompt + sub + note +
            '<div class="q-options">' + opts + '</div>' + reveal + '</div>';
    }
    function renderQuizSummary(view) {
        var total = quiz.questions.length;
        var acc = total ? Math.round((quiz.correct / total) * 100) : 0;
        var emoji = acc >= 90 ? '🏆' : acc >= 70 ? '🎉' : acc >= 50 ? '💪' : '📚';
        view.innerHTML =
            screenHeader(quiz.title || SKILL_LABELS[quiz.skill], '') +
            '<div class="summary-hero"><div class="emoji">' + emoji + '</div>' +
            '<div class="score">' + quiz.correct + '/' + total + '</div>' +
            '<div class="score-label">' + acc + '% accuracy · +' + quiz.xpEarned + ' XP</div></div>' +
            '<div class="bar acc-bar"><div class="bar-fill" style="width:' + acc + '%"></div></div>' +
            '<div class="card"><p>Your ' + SKILL_LABELS[quiz.skill] + ' accuracy is <b>' + acc + '%</b>. ' +
            (acc >= 70 ? 'Solid work — keep the streak alive! 🔥' : 'Review the reveals and try again — repetition is the key.') + '</p></div>' +
            '<div class="btn-row">' +
                '<button class="btn" data-act="q-retry">🔄 Retry</button>' +
                '<button class="btn btn-primary" data-act="q-done">Done</button>' +
            '</div>';
    }
    function quizAnswer(idx) {
        if (!quiz || quiz.answered || quiz.done) return;
        quiz.answered = true;
        quiz.picked = idx;
        var q = quiz.questions[quiz.i];
        if (idx === q.correct) {
            quiz.correct++;
            soundCorrect();
            markLearned(quiz.skill, q.id, true);
        } else {
            soundWrong();
            markLearned(quiz.skill, q.id, false);
        }
        renderScreen();
    }
    function quizNext() {
        if (!quiz) return;
        if (quiz.i + 1 >= quiz.questions.length) {
            quiz.xpEarned = recordResult(quiz.skill, quiz.correct, quiz.questions.length);
            quiz.done = true;
        } else {
            quiz.i++;
            quiz.answered = false;
            quiz.picked = -1;
        }
        renderScreen();
    }

    /* ---- flashcards ---- */
    function startCards(words, level) {
        var deck = sample(words, Math.min(20, words.length)).map(function (w) {
            return { word: w, retries: 0 };
        });
        cards = { deck: deck, i: 0, flipped: false, got: 0, done: false, level: level || vocabLevel };
        navTo(function (view) { renderCards(view); });
    }
    function renderCards(view) {
        if (!cards) return;
        if (cards.done) { renderCardsDone(view); return; }
        var c = cards.deck[cards.i];
        var w = c.word;
        var showPinyin = store.load().settings.showPinyin;
        var example = w.examples && w.examples[0]
            ? '<div class="fc-example cn">' + esc(w.examples[0].cn) + '<br><span class="en">' + esc(w.examples[0].en || '') + '</span></div>'
            : '';
        var back = cards.flipped
            ? '<div class="fc-pinyin">' + (showPinyin ? esc(w.pinyin || '') : '') + '</div>' +
              '<div class="fc-mean">' + esc(w.meaning) + '</div>' + example
            : '';
        view.innerHTML =
            screenHeader('Flashcards', 'HSK ' + cards.level + ' · tap card to flip') +
            '<div class="fc-count">Card ' + (cards.i + 1) + ' / ' + cards.deck.length + ' · got ' + cards.got + '</div>' +
            '<div class="fcard-wrap">' +
                '<div class="fcard" data-act="flip">' +
                    '<button class="fc-play" data-act="fplay" aria-label="Pronounce word">🔊</button>' +
                    '<div class="fc-hanzi cn">' + esc(w.character) + '</div>' + back +
                    '<div class="fc-hint">' + (cards.flipped ? 'tap card to hide' : 'tap to reveal') + '</div>' +
                '</div>' +
            '</div>' +
            (cards.flipped
                ? '<div class="btn-row">' +
                    '<button class="btn" data-act="again">🔁 Again</button>' +
                    '<button class="btn btn-primary" data-act="gotit">✓ Got it</button>' +
                  '</div>'
                : '');
    }
    function renderCardsDone(view) {
        view.innerHTML =
            screenHeader('Flashcards', '') +
            '<div class="summary-hero"><div class="emoji">🎉</div><div class="score">' + cards.got + '/' + cards.deck.length + '</div>' +
            '<div class="score-label">words marked as known</div></div>' +
            '<div class="card"><p>Known words are saved and counted in your Progress. Keep flipping daily!</p></div>' +
            '<div class="btn-row">' +
                '<button class="btn" data-act="cards-new">🔄 New deck</button>' +
                '<button class="btn btn-primary" data-act="q-done">Done</button>' +
            '</div>';
    }
    function cardAnswer(gotIt) {
        if (!cards || cards.done) return;
        var c = cards.deck[cards.i];
        markLearned('vocab', c.word.id, gotIt);
        if (gotIt) { cards.got++; }
        else if (c.retries < 2) {
            c.retries++;
            cards.deck.splice(cards.i + 1, 0, c);
        }
        cards.i++;
        cards.flipped = false;
        if (cards.i >= cards.deck.length) cards.done = true;
        renderScreen();
    }

    /* ---- progress ---- */
    function screenProgress(view) {
        var d = store.load();
        var xp = d.xp;
        var lv = levelFor(xp);
        var prog = xp - (lv - 1) * 250;
        var pct = Math.round((prog / 250) * 100);
        var skills = [
            ['vocab', '🀄 Vocabulary'], ['listening', '🎧 Listening'],
            ['reading', '📖 Reading'], ['grammar', '🔤 Grammar'],
            ['speaking', '🗣 Speaking'], ['tones', '🎵 Tones'],
            ['phrases', '🗺 Phrases'], ['dialogue', '💬 Dialogues']
        ];
        var rows = skills.map(function (s) {
            var st = d.stats[s[0]] || { c: 0, t: 0 };
            var acc = st.t ? Math.round((st.c / st.t) * 100) : 0;
            var color = acc >= 70 ? 'var(--jade)' : acc >= 40 ? 'var(--gold)' : 'var(--red)';
            return '<div class="skill-row">' +
                '<div class="skill-head"><span>' + s[1] + '</span><span class="pct">' + acc + '% · ' + st.c + '/' + st.t + '</span></div>' +
                '<div class="bar"><div class="bar-fill" style="width:' + acc + '%;background:' + color + '"></div></div>' +
                '</div>';
        }).join('');
        var log = d.log.slice(-20).reverse().map(function (e) {
            var label = SKILL_LABELS[e.skill] || e.skill;
            return '<div class="log-row"><span class="log-skill">' + esc(label) + '</span>' +
                '<span class="log-score">' + e.c + '/' + e.t + ' · +' + e.xp + ' XP</span>' +
                '<span class="log-date">' + esc(e.date.slice(5)) + '</span></div>';
        }).join('');
        var ach = achievementList(d);
        var achGrid = ach.map(function (a) {
            return '<div class="ach ' + (a.unlocked ? 'unlocked' : 'locked') + '" title="' + esc(a.desc) + '">' +
                '<span class="ach-ico">' + a.emoji + '</span>' +
                '<span class="ach-name">' + esc(a.name) + '</span>' +
                (a.unlocked ? '' : '<span class="ach-lock">🔒</span>') +
                '</div>';
        }).join('');
        view.innerHTML =
            '<div class="subhead"><div><h1>Progress</h1><div class="subhead-note">' + esc(d.name || 'Learner') + ' · joined ' + new Date(d.createdAt).toLocaleDateString() + '</div></div></div>' +
            '<div class="card">' +
                '<div class="skill-head"><span>Level ' + lv + '</span><span class="pct">' + prog + '/250 XP</span></div>' +
                '<div class="bar"><div class="bar-fill" style="width:' + pct + '%"></div></div>' +
                '<p style="margin:10px 0 0">🔥 Streak <b>' + d.streak.count + ' days</b> · Total <b>' + d.xp + ' XP</b> · <b>' + learnedCount() + '</b> words learned · best session <b>' + d.bestAcc + '%</b></p>' +
                (d.placement > 0 ? '<p style="margin:6px 0 0">🧭 Placement level: <b>HSK ' + d.placement + '</b> <button class="linklike" data-act="go-placement">retake</button></p>' : '') +
            '</div>' +
            '<div class="section-title">This week</div>' +
            '<div class="card">' + weeklyChartHtml(d) + '</div>' +
            '<div class="section-title">Accuracy by skill</div>' +
            '<div class="card">' + rows + '</div>' +
            '<div class="section-title">Achievements · ' + unlockedCount(d) + '/' + ach.length + '</div>' +
            '<div class="ach-grid">' + achGrid + '</div>' +
            '<div class="section-title">Recent sessions</div>' +
            '<div class="card">' + (log || '<p class="muted">No sessions yet.</p>') + '</div>';
    }
    /* ---- settings ---- */
    function screenSettings(view) {
        var d = store.load();
        view.innerHTML =
            '<div class="subhead"><div><h1>Settings</h1></div></div>' +
            '<div class="section-title">Profile</div>' +
            '<div class="card">' +
                '<label for="set-name" style="font-size:12px;color:var(--faint);font-weight:700;letter-spacing:.06em">YOUR NAME</label>' +
                '<input type="text" id="set-name" value="' + esc(d.name) + '" placeholder="What should we call you?" aria-label="Your name" style="margin-top:6px">' +
            '</div>' +
            '<div class="section-title">Audio</div>' +
            '<div class="card">' +
                '<div class="set-row"><div><div class="set-label">Speech speed</div><div class="set-desc">How fast Chinese is spoken</div></div>' +
                '<input type="range" id="set-rate" min="0.5" max="1.2" step="0.05" value="' + d.settings.rate + '" aria-label="Speech speed"></div>' +
                '<div class="set-row"><div><div class="set-label">Answer sounds</div><div class="set-desc">Tone feedback when answering</div></div>' +
                '<label class="switch"><input type="checkbox" id="set-sound"' + (d.settings.sound ? ' checked' : '') + ' aria-label="Answer sounds"><span class="knob"></span></label></div>' +
            '</div>' +
            '<div class="section-title">Practice</div>' +
            '<div class="card">' +
                '<div class="set-row"><div><div class="set-label">Show pinyin</div><div class="set-desc">Pinyin on flashcards and answers</div></div>' +
                '<label class="switch"><input type="checkbox" id="set-pinyin"' + (d.settings.showPinyin ? ' checked' : '') + ' aria-label="Show pinyin"><span class="knob"></span></label></div>' +
            '</div>' +
            '<div class="section-title">Data</div>' +
            '<div class="card">' +
                '<button class="btn" data-act="export">💾 Export progress (JSON)</button>' +
                '<button class="btn btn-danger" data-act="reset">🗑 Reset all progress</button>' +
                '<p class="faint" style="margin:10px 0 0">Progress is stored only on this device.</p>' +
            '</div>' +
            '<div class="section-title">Site</div>' +
            '<div class="card">' +
                '<button class="btn" data-act="desktop">🖥 Open the full desktop version</button>' +
                '<p class="faint" style="margin:10px 0 0">ZHI Studio Mobile · lightweight companion app. Desktop site keeps all its features.</p>' +
            '</div>';
        var nameInput = $('set-name');
        if (nameInput) {
            nameInput.addEventListener('change', function () {
                store.load().name = nameInput.value.trim();
                store.save();
                toast('Name saved ✓');
                renderScreen();
            });
        }
        var rateInput = $('set-rate');
        if (rateInput) {
            rateInput.addEventListener('input', function () {
                store.load().settings.rate = parseFloat(rateInput.value);
                store.save();
            });
        }
        var soundInput = $('set-sound');
        if (soundInput) {
            soundInput.addEventListener('change', function () {
                store.load().settings.sound = soundInput.checked;
                store.save();
                if (soundInput.checked) soundCorrect();
            });
        }
        var pinyinInput = $('set-pinyin');
        if (pinyinInput) {
            pinyinInput.addEventListener('change', function () {
                store.load().settings.showPinyin = pinyinInput.checked;
                store.save();
                toast('Pinyin ' + (pinyinInput.checked ? 'shown' : 'hidden'));
            });
        }
    }

    /* ---------------- actions ---------------- */
    function startVocab(mode) {
        var lv = vocabLevel;
        withLoading('Vocabulary', 'HSK ' + lv, function () { return loadData('hsk' + lv); }, function () {
            var g = getData('hsk' + lv);
            if (!g || !g.words || !g.words.length) {
                navTo(function (view) {
                    view.innerHTML = screenHeader('Vocabulary', '') + '<div class="card"><p>No words found for HSK ' + lv + '.</p></div>';
                });
                return;
            }
            if (mode === 'cards') startCards(g.words, lv);
            else startQuiz('vocab', buildVocabQs(g.words), 'Vocabulary Quiz', 'HSK ' + lv, { kind: 'vocab', level: lv, mode: 'quiz' });
        });
    }
    function startListening(type) {
        withLoading('Listening', '', function () { return loadData('listening'); }, function () {
            var data = getData('listening');
            if (!data) {
                navTo(function (view) { view.innerHTML = screenHeader('Listening', '') + '<div class="card"><p>Listening data unavailable.</p></div>'; });
                return;
            }
            var map = {
                dictation: ['Dictation', buildDictationQs(data)],
                comprehension: ['Comprehension', buildComprehensionQs(data)],
                minimal: ['Minimal Pairs', buildMinimalQs(data)]
            };
            var m = map[type];
            if (!m || !m[1].length) {
                navTo(function (view) { view.innerHTML = screenHeader('Listening', '') + '<div class="card"><p>No exercises of this type.</p></div>'; });
                return;
            }
            startQuiz('listening', m[1], 'Listening · ' + m[0], '🔊 press play, then answer', { kind: 'listen', type: type });
        });
    }
    function startReading(type) {
        withLoading('Reading', '', function () { return loadData('reading'); }, function () {
            var data = getData('reading');
            if (!data) {
                navTo(function (view) { view.innerHTML = screenHeader('Reading', '') + '<div class="card"><p>Reading data unavailable.</p></div>'; });
                return;
            }
            var map = {
                chars: ['Characters', buildCharQs(data)],
                sentences: ['Sentence Completion', buildSentenceQs(data)],
                context: ['Context Clues', buildContextQs(data)],
                passages: ['Passages', buildPassageQs(data)]
            };
            var m = map[type];
            if (!m || !m[1].length) {
                navTo(function (view) { view.innerHTML = screenHeader('Reading', '') + '<div class="card"><p>No exercises of this type.</p></div>'; });
                return;
            }
            startQuiz('reading', m[1], 'Reading · ' + m[0], '', { kind: 'read', type: type });
        });
    }
    function startGrammarDrill() {
        withLoading('Grammar Drill', '10 questions from real examples', function () { return loadData('grammar'); }, function () {
            var data = getData('grammar');
            if (!data) {
                navTo(function (view) { view.innerHTML = screenHeader('Grammar', '') + '<div class="card"><p>Grammar data unavailable.</p></div>'; });
                return;
            }
            startQuiz('grammar', buildGrammarQs(data), 'Grammar Drill', '', { kind: 'grammar' });
        });
    }

    document.addEventListener('click', function (e) {
        var el = e.target && e.target.closest ? e.target.closest('[data-act]') : null;
        if (!el) return;
        var act = el.getAttribute('data-act');
        var parts = act.split(':');
        var key = parts[0];

        if (key === 'tab') { switchTab(parts[1]); return; }
        if (key === 'go-progress') { switchTab('progress'); return; }
        if (key === 'continue-last') {
            var le = store.load().log[store.load().log.length - 1];
            if (!le) return;
            if (le.skill === 'vocab') { switchTab('practice'); startVocab('quiz'); }
            else if (le.skill === 'listening') { switchTab('practice'); startListening('dictation'); }
            else if (le.skill === 'reading') { switchTab('practice'); startReading('chars'); }
            else if (le.skill === 'grammar') { switchTab('practice'); startGrammarDrill(); }
            else if (le.skill === 'speaking') { switchTab('practice'); startSpeaking('pronunciation'); }
            else if (le.skill === 'tones') { switchTab('practice'); startTones(); }
            else if (le.skill === 'phrases') { switchTab('practice'); startPhraseQuiz('random'); }
            else if (le.skill === 'dialogue') { switchTab('practice'); navTo(function (v) { screenDialogues(v); }); }
            else if (le.skill === 'cultural') { switchTab('practice'); navTo(function (v) { screenCultural(v); }); }
            else { switchTab('practice'); navTo(function (v) { screenPracticeMenu(v); }); }
            return;
        }
        if (key === 'back') { navBack(); return; }
        if (key === 'go-vocab') { switchTab('practice'); vocabLevel = 1; navTo(function (v) { screenVocabPicker(v); }); return; }
        if (key === 'go-listening') { switchTab('practice'); navTo(function (v) { screenListeningPicker(v); }); return; }
        if (key === 'go-reading') { switchTab('practice'); navTo(function (v) { screenReadingPicker(v); }); return; }
        if (key === 'go-grammar') {
            switchTab('practice');
            withLoading('Grammar', '', function () { return loadData('grammar'); }, function () {
                navTo(function (v) { screenGrammarList(v); });
            });
            return;
        }
        if (key === 'go-speaking') { switchTab('practice'); navTo(function (v) { screenSpeakingPicker(v); }); return; }
        if (key === 'go-tones') { switchTab('practice'); startTones(); return; }
        if (key === 'go-dialogues') { switchTab('practice'); navTo(function (v) { screenDialogues(v); }); ensureDialogues(function () { renderScreen(); }); return; }
        if (key === 'go-cultural') { switchTab('practice'); navTo(function (v) { screenCultural(v); }); ensureCultural(function () { renderScreen(); }); return; }
        if (key === 'go-phrases') { switchTab('practice'); navTo(function (v) { screenPhrases(v); }); ensurePhrases(function () { renderScreen(); }); return; }
        if (key === 'go-placement') { switchTab('practice'); navTo(function (v) { screenPlacementIntro(v); }); return; }
        if (key === 'vocab-level') { vocabLevel = parseInt(parts[1], 10) || 1; renderScreen(); return; }
        if (key === 'vocab-start') { startVocab(parts[1]); return; }
        if (key === 'listen-start') { startListening(parts[1]); return; }
        if (key === 'read-start') { startReading(parts[1]); return; }
        if (key === 'grammar-drill') { startGrammarDrill(); return; }
        if (key === 'speak-start') { startSpeaking(parts[1]); return; }
        if (key === 'tones-start') { startTones(); return; }
        if (key === 'placement-start') { startPlacement(); return; }
        if (key === 'placement-go') { switchTab('practice'); vocabLevel = parseInt(parts[1], 10) || store.load().placement || 1; navTo(function (v) { screenVocabPicker(v); }); return; }
        if (key === 'p-opt') { placementAnswer(parseInt(parts[1], 10)); return; }
        if (key === 'p-next') { placementNext(); return; }
        if (key === 'lesson') {
            var g = getData('grammar');
            var lesson = null;
            if (g) {
                for (var i = 0; i < g.lessons.length; i++) { if (g.lessons[i].id === parts[1]) { lesson = g.lessons[i]; break; } }
            }
            if (lesson) navTo(function (view) { screenLesson(view, lesson); });
            return;
        }
        if (key === 'ex-play') {
            if (lessonRef && lessonRef.examples) speak(lessonRef.examples[parseInt(parts[1], 10)].chinese);
            return;
        }
        if (key === 'dlg') { openDialogueById(parts[1]); return; }
        if (key === 'dlg:cat') {
            ensureDialogues(function () {
                navTo(function (v) { screenDialogueListByCat(v, parts[1]); });
            });
            return;
        }
        if (key === 'dlg:random') { openRandomDialogue(); return; }
        if (key === 'cult:cat') {
            ensureCultural(function () { navTo(function (v) { screenCulturalList(v, parts[1]); }); });
            return;
        }
        if (key === 'cult:note') { openCulturalNoteById(parts[1]); return; }
        if (key === 'cult:random') { openRandomCultural(); return; }
        if (key === 'cult:speak') { speak(parts.slice(2).join(':')); return; }
        if (key === 'phrase:cat') {
            ensurePhrases(function () { navTo(function (v) { screenPhraseList(v, parts[1]); }); });
            return;
        }
        if (key === 'phrase:play') { playPhraseById(parts.slice(2).join(':')); return; }
        if (key === 'phrase:start') { startPhraseQuiz(parts.slice(2).join(':')); return; }
        if (key === 'dlg-turn') {
            if (dlgRef && dlgRef.turns) speak(dlgRef.turns[parseInt(parts[1], 10)].chinese);
            return;
        }
        if (key === 'dlg-show') {
            var elId = 'dlg-en-' + parts[1];
            var enEl = document.getElementById(elId);
            if (enEl) enEl.style.display = enEl.style.display === 'none' ? 'block' : 'none';
            return;
        }
        if (key === 'dlg-playall') {
            if (!dlgRef || !dlgRef.turns) return;
            var idx = 0;
            function step() {
                if (idx >= dlgRef.turns.length) return;
                speak(dlgRef.turns[idx].chinese, function () { idx++; setTimeout(step, 350); });
            }
            step();
            return;
        }
        if (key === 'opt') { quizAnswer(parseInt(parts[1], 10)); return; }
        if (key === 'q-play') { if (quiz) speak(quiz.questions[quiz.i].tts); return; }
        if (key === 'q-next') { quizNext(); return; }
        if (key === 'q-retry') {
            var origin = quiz ? quiz.origin : null;
            quiz = null;
            if (origin) {
                if (origin.kind === 'vocab') { vocabLevel = origin.level; startVocab(origin.mode); }
                else if (origin.kind === 'listen') { startListening(origin.type); }
                else if (origin.kind === 'read') { startReading(origin.type); }
                else if (origin.kind === 'grammar') { startGrammarDrill(); }
                else if (origin.kind === 'speak') { startSpeaking(origin.type); }
                else if (origin.kind === 'tones') { startTones(); }
                else if (origin.kind === 'phrases') { startPhraseQuiz(origin.cat); }
                else if (origin.kind === 'placement') { startPlacement(); }
                return;
            }
            startVocab('quiz');
            return;
        }
        if (key === 'cards-new') {
            var lv = cards ? cards.level : vocabLevel;
            cards = null;
            vocabLevel = lv;
            startVocab('cards');
            return;
        }
        if (key === 'q-done') {
            quiz = null; cards = null; dlgRef = null; lessonRef = null;
            stack = [DEFAULT_SCREENS[tab]];
            renderScreen();
            return;
        }
        if (key === 'flip') { if (cards) { cards.flipped = !cards.flipped; renderScreen(); } return; }
        if (key === 'fplay') { if (cards) speak(cards.deck[cards.i].word.character); return; }
        if (key === 'gotit') { cardAnswer(true); return; }
        if (key === 'again') { cardAnswer(false); return; }
        if (key === 'play-daily') { var w = dailyWord(); speak(w.c); return; }
        if (key === 'export') { exportProgress(); return; }
        if (key === 'reset') { resetProgress(); return; }
        if (key === 'desktop') {
            try { location.href = '../index.html?desktop=1'; } catch (err) {}
            return;
        }
    });

    function exportProgress() {
        try {
            var blob = new Blob([JSON.stringify(store.load(), null, 2)], { type: 'application/json' });
            var a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = 'zhi-mobile-progress.json';
            document.body.appendChild(a);
            a.click();
            setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
            toast('Progress exported ✓');
        } catch (e) { toast('Export failed'); }
    }
    var resetArmed = false;
    function resetProgress() {
        if (!resetArmed) {
            resetArmed = true;
            toast('Tap again to confirm reset');
            setTimeout(function () { resetArmed = false; }, 3000);
            return;
        }
        store.reset();
        resetArmed = false;
        toast('Progress reset');
        renderScreen();
    }

    /* ---------------- boot ---------------- */
    function applyHash() {
        var h = location.hash.replace('#', '');
        if (h === 'home' || h === 'practice' || h === 'progress' || h === 'settings') { switchTab(h); return; }
        if (h === 'vocab' || h === 'listening' || h === 'reading' || h === 'grammar' || h === 'speaking' || h === 'dialogues' || h === 'cultural' || h === 'phrases' || h === 'tones' || h === 'placement') {
            switchTab('practice');
            if (stack.length === 1) {
                if (h === 'vocab') navTo(function (v) { screenVocabPicker(v); });
                else if (h === 'listening') navTo(function (v) { screenListeningPicker(v); });
                else if (h === 'reading') navTo(function (v) { screenReadingPicker(v); });
                else if (h === 'speaking') navTo(function (v) { screenSpeakingPicker(v); });
                else if (h === 'dialogues') { navTo(function (v) { screenDialogues(v); }); ensureDialogues(function () { renderScreen(); }); }
                else if (h === 'cultural') { navTo(function (v) { screenCultural(v); }); ensureCultural(function () { renderScreen(); }); }
                else if (h === 'phrases') { navTo(function (v) { screenPhrases(v); }); ensurePhrases(function () { renderScreen(); }); }
                else if (h === 'tones') { startTones(); }
                else if (h === 'placement') navTo(function (v) { screenPlacementIntro(v); });
                else if (h === 'grammar') {
                    withLoading('Grammar', '', function () { return loadData('grammar'); }, function () {
                        navTo(function (v) { screenGrammarList(v); });
                    });
                }
            }
            return;
        }
        switchTab('home');
    }
    function boot() {
        store.load();
        applyHash();
        if (location.search.indexOf('selftest=1') !== -1) runSelftest();
    }
    window.addEventListener('hashchange', applyHash);

    /* ---------------- self-test (used by tests/CI) ---------------- */
    function runSelftest() {
        var results = [];
        function assert(name, cond) { results.push({ name: name, pass: !!cond }); }

        // storage
        store.reset();
        var d0 = store.load();
        assert('storage defaults', d0 && typeof d0.xp === 'number' && d0.stats.vocab.c === 0);
        store.data.xp = 123;
        store.save();
        assert('storage roundtrip', store.load().xp === 123);
        store.reset();
        assert('storage reset', store.load().xp === 0);

        // level / streak
        assert('level calc', levelFor(0) === 1 && levelFor(249) === 1 && levelFor(250) === 2 && levelFor(499) === 2);
        store.data.streak = { count: 3, last: dateKey(yesterday()) };
        recordActivity();
        assert('streak continues', store.data.streak.count === 4);
        recordActivity();
        assert('streak not double counted', store.data.streak.count === 4);

        // view visibility (regression: .view stays display:none unless .active)
        switchTab('home');
        assert('home view active', document.getElementById('view-home').classList.contains('active'));
        switchTab('practice');
        assert('practice view active', document.getElementById('view-practice').classList.contains('active'));
        assert('home view hidden when inactive', !document.getElementById('view-home').classList.contains('active'));
        switchTab('home');

        // data loading (real files over http)
        var chain = Promise.resolve();
        function step(name, fn) {
            chain = chain.then(fn).then(function () { assert(name, true); }, function () { assert(name, false); });
        }
        step('load hsk1', function () { return loadData('hsk1').then(function () { if (!window.HSK1 || !window.HSK1.words || window.HSK1.words.length < 100) throw new Error('bad hsk1'); }); });
        step('load listening', function () { return loadData('listening').then(function () { var L = window.ListeningData; if (!L || !L.dictation || !L.dictation.length) throw new Error('bad listening'); }); });
        step('load reading', function () { return loadData('reading').then(function () { var R = window.ReadingData; if (!R || !R.sentenceComplete || !R.sentenceComplete.length) throw new Error('bad reading'); }); });
        step('load grammar', function () { return loadData('grammar').then(function () { var G = window.GrammarData; if (!G || !G.lessons || !G.lessons.length) throw new Error('bad grammar'); }); });
        step('load speaking', function () { return loadData('speaking').then(function () { var S = window.SpeakingData; if (!S || !S.pronunciation || !S.pronunciation.length) throw new Error('bad speaking'); }); });
        step('load dialogues', function () { return loadData('dialogues').then(function () { var D = window.DialoguesData; if (!D || !D.scenarios || !D.scenarios.length) throw new Error('bad dialogues'); }); });
        step('load cultural', function () { return loadData('cultural').then(function () { var C = window.CulturalData; if (!C || !C.notes || !C.notes.length) throw new Error('bad cultural'); }); });
        step('load phrases', function () { return loadData('phrases').then(function () { var P = window.RealWorldPhrases; if (!P || !P.categories || !P.categories.length) throw new Error('bad phrases'); }); });
        step('load placement', function () { return loadData('placement').then(function () { var B = window.PlacementBank; if (!B || !B.questions || !B.questions[1]) throw new Error('bad placement'); }); });

        chain.then(function () {
            // question builders
            function validQ(q) {
                return q && Array.isArray(q.options) && q.options.length >= 2 &&
                    typeof q.correct === 'number' && q.correct >= 0 && q.correct < q.options.length;
            }
            var vocabQs = buildVocabQs(window.HSK1.words.slice(0, 60));
            assert('vocab questions valid', vocabQs.length > 0 && vocabQs.every(validQ));
            var dictQs = buildDictationQs(window.ListeningData);
            assert('dictation questions valid', dictQs.length > 0 && dictQs.every(validQ));
            var compQs = buildComprehensionQs(window.ListeningData);
            assert('comprehension questions valid', compQs.length > 0 && compQs.every(validQ));
            var minQs = buildMinimalQs(window.ListeningData);
            assert('minimal pair questions valid', minQs.length > 0 && minQs.every(validQ));
            var charQs = buildCharQs(window.ReadingData);
            assert('character questions valid', charQs.length > 0 && charQs.every(validQ));
            var sentQs = buildSentenceQs(window.ReadingData);
            assert('sentence questions valid', sentQs.length > 0 && sentQs.every(validQ));
            var ctxQs = buildContextQs(window.ReadingData);
            assert('context questions valid', ctxQs.length > 0 && ctxQs.every(validQ));
            var passQs = buildPassageQs(window.ReadingData);
            assert('passage questions valid', passQs.length > 0 && passQs.every(validQ));
            var grQs = buildGrammarQs(window.GrammarData);
            assert('grammar questions valid', grQs.length > 0 && grQs.every(validQ));
            var spQs = buildSpeakingQs(window.SpeakingData, 'pronunciation');
            var shQs = buildSpeakingQs(window.SpeakingData, 'shadowing');
            assert('speaking questions valid', spQs.length > 0 && spQs.every(validQ) && shQs.length > 0 && shQs.every(validQ));
            var toneQs = buildToneQs(window.SpeakingData);
            assert('tone questions valid', toneQs.length > 0 && toneQs.every(validQ));
            var phraseQs = buildPhraseQs(window.RealWorldPhrases.restaurant);
            assert('phrase questions valid', phraseQs.length > 0 && phraseQs.every(validQ));
            var builtP = buildPlacementQs(window.PlacementBank);
            assert('placement questions valid', builtP.qs.length >= 6 && builtP.qs.every(validQ));

            // scoring
            store.reset();
            var before = store.load().xp;
            recordResult('vocab', 8, 10);
            var d = store.load();
            assert('xp earned', d.xp === 8 * 10 + 2 * 2 && d.xp > before);
            assert('stats recorded', d.stats.vocab.c === 8 && d.stats.vocab.t === 10);
            assert('log recorded', d.log.length === 1 && d.log[0].xp === d.xp);
            assert('streak from activity', d.streak.count === 1);

            // DOM smoke: each screen renders without throwing
            var viewEl = $('view-home');
            try {
                screenHome(viewEl);
                screenPracticeMenu(viewEl);
                screenProgress(viewEl);
                screenSettings(viewEl);
                screenSpeakingPicker(viewEl);
                screenDialogues(viewEl);
                screenCultural(viewEl);
                screenPhrases(viewEl);
                screenPlacementIntro(viewEl);
                screenCulturalNote(viewEl, window.CulturalData.notes[0]);
                screenPhraseList(viewEl, 'restaurant');
                assert('screens render', viewEl.innerHTML.length > 50);
                assert('tab buttons wired', document.querySelectorAll('.tab[data-act^="tab:"]').length === 4);
                assert('achievements list', achievementList(store.load()).length === 15);
            } catch (e) { assert('screens render', false); }

            // quiz flow simulation
            quiz = null;
            startQuiz('vocab', vocabQs.slice(0, 3), 'Test', '', null);
            assert('quiz started', quiz && quiz.questions.length === 3);
            quizAnswer(quiz.questions[0].correct);
            assert('quiz answer correct', quiz.correct === 1 && quiz.answered === true);
            quizNext();
            quizAnswer(quiz.questions[1].correct);
            quizNext();
            quizAnswer(quiz.questions[2].correct);
            quizNext();
            assert('quiz finished', quiz.done === true && quiz.correct === 3);
            assert('quiz xp recorded', typeof quiz.xpEarned === 'number' && quiz.xpEarned > 0);

            // flashcards flow
            store.reset();
            var fakeWords = [
                { id: 'f1', character: '好', pinyin: 'hǎo', meaning: 'good', examples: [] },
                { id: 'f2', character: '大', pinyin: 'dà', meaning: 'big', examples: [] },
                { id: 'f3', character: '小', pinyin: 'xiǎo', meaning: 'small', examples: [] }
            ];
            startCards(fakeWords, 1);
            assert('cards started', cards && cards.deck.length === 3 && !cards.done);
            cardAnswer(true);
            cardAnswer(true);
            cardAnswer(false);
            cardAnswer(false);  // retry loop
            cardAnswer(true);   // finish retried card
            assert('cards finish', cards.done === true && cards.got === 3);
            assert('cards mark learned', store.load().learned.f1.c === 1 && store.load().learned.f3.c === 1);

            // dialogue reader renders
            var fakeSc = { id: 't1', title: 'Test', meaning: 'Test meaning', turns: [{ speaker: 'A', chinese: '你好', pinyin: 'nǐ hǎo', meaning: 'Hello' }] };
            try {
                screenDialogue(viewEl, fakeSc);
                assert('dialogue renders', viewEl.innerHTML.indexOf('你好') !== -1 && viewEl.innerHTML.indexOf('dlg-turn') !== -1);
            } catch (e) { assert('dialogue renders', false); }

            // lesson screen renders
            try {
                screenLesson(viewEl, window.GrammarData.lessons[0]);
                assert('lesson renders', viewEl.innerHTML.indexOf('Pattern') !== -1);
            } catch (e) { assert('lesson renders', false); }

            var pass = results.every(function (r) { return r.pass; });
            var out = document.createElement('div');
            out.id = 'selftest-out';
            out.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;z-index:9999;background:#080b16;color:#35dfb1;padding:20px;font:12px monospace;overflow:auto;white-space:pre-wrap;';
            out.textContent = 'SELFTEST ' + (pass ? 'PASS' : 'FAIL') + ' (' + results.length + ' checks)\n\n' +
                results.map(function (r) { return (r.pass ? '  ✓ ' : '  ✗ ') + r.name; }).join('\n');
            document.body.appendChild(out);
            document.title = 'SELFTEST ' + (pass ? 'PASS' : 'FAIL');
        });
    }

    /* expose internals for tests */
    window.ZhiMobile = {
        store: store, levelFor: levelFor, recordResult: recordResult, recordActivity: recordActivity,
        buildVocabQs: buildVocabQs, buildDictationQs: buildDictationQs, buildComprehensionQs: buildComprehensionQs,
        buildMinimalQs: buildMinimalQs, buildCharQs: buildCharQs, buildSentenceQs: buildSentenceQs,
        buildContextQs: buildContextQs, buildPassageQs: buildPassageQs, buildGrammarQs: buildGrammarQs,
        startQuiz: startQuiz, quizAnswer: quizAnswer, quizNext: quizNext,
        startCards: startCards, cardAnswer: cardAnswer,
        screenDialogue: screenDialogue, screenLesson: screenLesson,
        loadData: loadData, runSelftest: runSelftest
    };

    // Script sits at the end of <body>, so the DOM is already available.
    boot();
})();

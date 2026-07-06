// ============================================
// CHINESE MASTER - Daily Streak & Goals System
// Track daily learning with calendar view
// ============================================

const DailyStreak = {
    // Current streak data
    data: {
        currentStreak: 0,
        longestStreak: 0,
        lastStudyDate: null,
        studyDays: [],
        achievements: [],
        dailyGoals: {
            vocabulary: 10,
            listening: 5,
            reading: 3,
            grammar: 2
        },
        todayProgress: {
            vocabulary: 0,
            listening: 0,
            reading: 0,
            grammar: 0,
            xp: 0
        }
    },

    // Initialize
    init() {
        this.loadData();
        this.checkStreak();
        this.updateUI();
    },

    // Session-scoped storage key
    _key(base) {
        const sid = (typeof SessionManager !== 'undefined')
            ? SessionManager.getActiveSessionId() : null;
        return sid ? `${base}_${sid}` : base;
    },

    // Load data from storage
    loadData() {
        const saved = Utils.storage.get(this._key('dailyStreak'), null);
        if (saved) {
            this.data = { ...this.data, ...saved };
        }
    },

    // Save data to storage
    saveData() {
        Utils.storage.set(this._key('dailyStreak'), this.data);
    },

    // Check and update streak
    checkStreak() {
        const today = Utils.date.today();
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];

        if (!this.data.lastStudyDate) {
            // First time
            this.data.currentStreak = 0;
        } else if (this.data.lastStudyDate === today) {
            // Already studied today
        } else if (this.data.lastStudyDate === yesterdayStr) {
            // Consecutive day
            // Don't increment yet - wait for activity
        } else {
            // Streak broken
            this.data.currentStreak = 0;
        }

        this.saveData();
    },

    // Record activity
    recordActivity(type, count = 1) {
        const today = Utils.date.today();
        
        // Update today's progress
        this.data.todayProgress[type] = (this.data.todayProgress[type] || 0) + count;
        this.data.todayProgress.xp += count * 10;

        // Check if this is a new study day
        if (this.data.lastStudyDate !== today) {
            // Check if streak continues
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayStr = yesterday.toISOString().split('T')[0];

            if (this.data.lastStudyDate === yesterdayStr || !this.data.lastStudyDate) {
                this.data.currentStreak++;
            } else {
                this.data.currentStreak = 1;
            }

            this.data.lastStudyDate = today;
            
            if (!this.data.studyDays.includes(today)) {
                this.data.studyDays.push(today);
            }

            // Update longest streak
            if (this.data.currentStreak > this.data.longestStreak) {
                this.data.longestStreak = this.data.currentStreak;
            }
        }

        this.saveData();
        this.updateUI();
        this.checkAchievements();

        return this.data.todayProgress;
    },

    // Get today's progress percentage
    getTodayProgress() {
        const goals = this.data.dailyGoals;
        const progress = this.data.todayProgress;

        const vocabPercent = Math.min(100, (progress.vocabulary / goals.vocabulary) * 100);
        const listeningPercent = Math.min(100, (progress.listening / goals.listening) * 100);
        const readingPercent = Math.min(100, (progress.reading / goals.reading) * 100);
        const grammarPercent = Math.min(100, (progress.grammar / goals.grammar) * 100);

        const overall = Math.round((vocabPercent + listeningPercent + readingPercent + grammarPercent) / 4);

        return {
            vocabulary: { current: progress.vocabulary, goal: goals.vocabulary, percent: Math.round(vocabPercent) },
            listening: { current: progress.listening, goal: goals.listening, percent: Math.round(listeningPercent) },
            reading: { current: progress.reading, goal: goals.reading, percent: Math.round(readingPercent) },
            grammar: { current: progress.grammar, goal: goals.grammar, percent: Math.round(grammarPercent) },
            overall: overall,
            xp: progress.xp
        };
    },

    // Check achievements
    checkAchievements() {
        const streak = this.data.currentStreak;
        const achievements = [];

        if (streak >= 3 && !this.data.achievements?.includes('streak-3')) {
            achievements.push({ id: 'streak-3', title: '3-Day Streak!', icon: '🔥' });
        }
        if (streak >= 7 && !this.data.achievements?.includes('streak-7')) {
            achievements.push({ id: 'streak-7', title: '1-Week Streak!', icon: '🔥' });
        }
        if (streak >= 30 && !this.data.achievements?.includes('streak-30')) {
            achievements.push({ id: 'streak-30', title: '1-Month Streak!', icon: '🔥' });
        }
        if (streak >= 100 && !this.data.achievements?.includes('streak-100')) {
            achievements.push({ id: 'streak-100', title: '100-Day Streak!', icon: '🔥' });
        }

        achievements.forEach(a => {
            if (!this.data.achievements) this.data.achievements = [];
            this.data.achievements.push(a.id);
            Utils.showToast(`🏆 ${a.title}`, 'success');
        });

        this.saveData();
    },

    // Update UI
    updateUI() {
        // Update streak count
        const streakEl = document.getElementById('streak-count');
        if (streakEl) {
            streakEl.textContent = this.data.currentStreak;
        }

        // Update today's progress
        const progress = this.getTodayProgress();

        const goalListening = document.getElementById('goal-listening');
        if (goalListening) goalListening.textContent = progress.listening.current;

        const goalReading = document.getElementById('goal-reading');
        if (goalReading) goalReading.textContent = progress.reading.current;

        const goalVocab = document.getElementById('goal-vocab');
        if (goalVocab) goalVocab.textContent = progress.vocabulary.current;

        // Update goal ring + percent (single owner: GSAP via InkAnimations when available)
        const goalFill = document.getElementById('goal-fill');
        if (goalFill) {
            if (typeof InkAnimations !== 'undefined' && InkAnimations.animateGoalRing && window.gsap) {
                InkAnimations.animateGoalRing(progress.overall);
            } else {
                const circumference = 2 * Math.PI * 40;
                goalFill.style.strokeDasharray = circumference;
                goalFill.style.strokeDashoffset = circumference - (progress.overall / 100) * circumference;
                const goalPercent = document.getElementById('goal-percent');
                if (goalPercent) goalPercent.textContent = progress.overall;
            }
        } else {
            const goalPercent = document.getElementById('goal-percent');
            if (goalPercent) goalPercent.textContent = progress.overall;
        }
    },

    // Get streak calendar data
    getStreakCalendar() {
        const today = new Date();
        const calendar = [];

        // Get last 30 days
        for (let i = 29; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            const dateStr = date.toISOString().split('T')[0];

            calendar.push({
                date: dateStr,
                day: date.getDate(),
                isToday: i === 0,
                isStudyDay: this.data.studyDays.includes(dateStr),
                isFuture: false
            });
        }

        return calendar;
    },

    // Render streak calendar
    renderCalendar() {
        const calendar = this.getStreakCalendar();
        const container = document.getElementById('streak-calendar');
        if (!container) return;

        container.innerHTML = calendar.map(day => `
            <div class="streak-day ${day.isStudyDay ? 'active' : ''} ${day.isToday ? 'today' : ''} ${day.isFuture ? 'future' : ''}">
                ${Utils.escapeHtml(day.day)}
            </div>
        `).join('');
    },

    // Get statistics
    getStats() {
        return {
            currentStreak: this.data.currentStreak,
            longestStreak: this.data.longestStreak,
            totalStudyDays: this.data.studyDays.length,
            todayProgress: this.getTodayProgress(),
            achievements: this.data.achievements || []
        };
    },

    // Reset today's progress
    resetToday() {
        this.data.todayProgress = {
            vocabulary: 0,
            listening: 0,
            reading: 0,
            grammar: 0,
            xp: 0
        };
        this.saveData();
        this.updateUI();
    },

    // Update daily goals
    updateGoals(goals) {
        this.data.dailyGoals = { ...this.data.dailyGoals, ...goals };
        this.saveData();
        this.updateUI();
    },

    // Get motivational message
    getMotivationalMessage() {
        const streak = this.data.currentStreak;
        const progress = this.getTodayProgress();

        if (progress.overall >= 100) {
            return { text: 'Amazing! All daily goals completed!', type: 'success' };
        } else if (streak >= 7) {
            return { text: `${streak} days streak! Keep it going!`, type: 'info' };
        } else if (streak >= 3) {
            return { text: `${streak} days in a row! You're building a habit!`, type: 'info' };
        } else if (progress.overall > 50) {
            return { text: 'Good progress today! Keep learning!', type: 'info' };
        } else {
            return { text: 'Start learning to build your streak!', type: 'warning' };
        }
    }
};

window.DailyStreak = DailyStreak;

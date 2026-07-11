// ============================================
// CHINESE MASTER - Level Tracker & Mistake Memory
// Advanced system for tracking progress and remembering mistakes
// ============================================

const LevelTracker = {
    // Reading level definitions
    levels: {
        1: { name: 'Beginner', chinese: '初学者', description: 'Know basic characters', minXP: 0, maxXP: 500 },
        2: { name: 'Elementary', chinese: '初级', description: 'Read simple sentences', minXP: 500, maxXP: 1500 },
        3: { name: 'Intermediate', chinese: '中级', description: 'Read short passages', minXP: 1500, maxXP: 3500 },
        4: { name: 'Upper Intermediate', chinese: '中高级', description: 'Read articles', minXP: 3500, maxXP: 7000 },
        5: { name: 'Advanced', chinese: '高级', description: 'Read literature', minXP: 7000, maxXP: 15000 },
        6: { name: 'Master', chinese: '大师', description: 'Read anything', minXP: 15000, maxXP: Infinity }
    },

    // User's current level data
    userData: {
        level: 1,
        xp: 0,
        totalXP: 0,
        readingSpeed: 0, // characters per minute
        accuracy: 0, // percentage
        streak: 0,
        lastActive: null,
        // Detailed tracking
        charactersLearned: [],
        charactersMastered: [],
        wordsLearned: [],
        wordsMastered: [],
        // Performance by category
        categoryPerformance: {},
        // Time tracking
        totalTimeSpent: 0,
        sessionsCompleted: 0
    },

    // Mistake memory - tracks every mistake
    mistakeMemory: {
        // Character-level mistakes
        characters: {},
        // Word-level mistakes
        words: {},
        // Sentence-level mistakes
        sentences: {},
        // Grammar mistakes
        grammar: {},
        // Reading comprehension mistakes
        comprehension: {}
    },

    // Spaced repetition data
    srsData: {},

    // Initialize
    init() {
        this.loadUserData();
        this.loadMistakeMemory();
        this.loadSRSData();
    },

    // Session-scoped storage key
    _key(base) {
        const sid = (typeof SessionManager !== 'undefined')
            ? SessionManager.getActiveSessionId() : null;
        return sid ? `${base}_${sid}` : base;
    },

    // ============================================
    // XP AND LEVEL SYSTEM
    // ============================================

    // Add XP
    addXP(amount, reason = '') {
        this.userData.xp += amount;
        this.userData.totalXP += amount;

        // Check for level up
        const newLevel = this.calculateLevel();
        if (newLevel > this.userData.level) {
            this.userData.level = newLevel;
            this.onLevelUp(newLevel);
        }

        this.saveUserData();
        return { xp: amount, level: this.userData.level, totalXP: this.userData.totalXP };
    },

    // Calculate level from XP
    calculateLevel() {
        const xp = this.userData.totalXP;
        for (let level = 6; level >= 1; level--) {
            if (xp >= this.levels[level].minXP) {
                return level;
            }
        }
        return 1;
    },

    // Get level progress
    getLevelProgress() {
        const currentLevel = this.levels[this.userData.level];
        const xpInLevel = this.userData.totalXP - currentLevel.minXP;
        const xpNeeded = currentLevel.maxXP - currentLevel.minXP;
        const progress = Math.min(100, Math.round((xpInLevel / xpNeeded) * 100));

        return {
            level: this.userData.level,
            name: currentLevel.name,
            chinese: currentLevel.chinese,
            description: currentLevel.description,
            progress: progress,
            xpInLevel: xpInLevel,
            xpNeeded: xpNeeded,
            totalXP: this.userData.totalXP
        };
    },

    // Level up event
    onLevelUp(newLevel) {
        const levelInfo = this.levels[newLevel];
        if (typeof InkAnimations !== 'undefined' && InkAnimations.showLevelUp) {
            InkAnimations.showLevelUp(newLevel, levelInfo.name + ' (' + levelInfo.chinese + ')', this.userData.totalXP);
        } else {
            Utils.showToast(`🎉 Level Up! You are now ${levelInfo.name} (${levelInfo.chinese})`, 'success');
            Utils.playSound('levelup');
            Utils.showConfetti();
        }

        // Load newly unlocked HSK level on-demand
        if (typeof DataLoader !== 'undefined' && typeof DataLoader.loadLevel === 'function') {
            var hskLvl = Math.min(5, Math.max(1, newLevel));
            DataLoader.loadLevel('hsk' + hskLvl).catch(function(e) {
                console.warn('Failed to load newly unlocked HSK level on-demand:', e);
            });
        }
    },

    // ============================================
    // MISTAKE MEMORY SYSTEM
    // ============================================

    // Record a mistake
    recordMistake(type, id, userAnswer, correctAnswer, context = {}) {
        if (!this.mistakeMemory[type]) {
            this.mistakeMemory[type] = {};
        }

        const key = id || `${type}_${Date.now()}`;
        
        if (!this.mistakeMemory[type][key]) {
            this.mistakeMemory[type][key] = {
                id: key,
                correctAnswer: correctAnswer,
                attempts: [],
                totalMistakes: 0,
                consecutiveCorrect: 0,
                lastMistake: null,
                mastered: false,
                difficulty: context.difficulty || 1,
                category: context.category || 'general'
            };
        }

        const mistake = this.mistakeMemory[type][key];
        mistake.attempts.push({
            userAnswer: userAnswer,
            correctAnswer: correctAnswer,
            timestamp: new Date().toISOString(),
            context: context
        });
        mistake.totalMistakes++;
        mistake.consecutiveCorrect = 0;
        mistake.lastMistake = new Date().toISOString();

        // Keep only last 20 attempts
        if (mistake.attempts.length > 20) {
            mistake.attempts = mistake.attempts.slice(-20);
        }

        this.saveMistakeMemory();
        return mistake;
    },

    // Record correct answer
    recordCorrect(type, id, context = {}) {
        if (!this.mistakeMemory[type]) {
            this.mistakeMemory[type] = {};
        }

        const key = id || `${type}_${Date.now()}`;

        if (this.mistakeMemory[type][key]) {
            const mistake = this.mistakeMemory[type][key];
            mistake.consecutiveCorrect++;
            mistake.lastCorrect = new Date().toISOString();

            // Check if mastered (5 consecutive correct)
            if (mistake.consecutiveCorrect >= 5) {
                mistake.mastered = true;
            }
        }

        this.saveMistakeMemory();
    },

    // Get mistakes that need review
    getMistakesForReview(type = null, limit = 20) {
        const mistakes = [];

        const types = type ? [type] : Object.keys(this.mistakeMemory);
        
        types.forEach(t => {
            if (this.mistakeMemory[t]) {
                Object.values(this.mistakeMemory[t]).forEach(mistake => {
                    if (!mistake.mastered) {
                        mistakes.push({
                            ...mistake,
                            type: t,
                            priority: this.calculateMistakePriority(mistake)
                        });
                    }
                });
            }
        });

        // Sort by priority (higher = more urgent)
        mistakes.sort((a, b) => b.priority - a.priority);

        return mistakes.slice(0, limit);
    },

    // Calculate mistake priority for review
    calculateMistakePriority(mistake) {
        let priority = 0;

        // More mistakes = higher priority
        priority += Math.min(mistake.totalMistakes * 10, 50);

        // Recent mistakes = higher priority
        if (mistake.lastMistake) {
            const hoursSinceMistake = (Date.now() - new Date(mistake.lastMistake).getTime()) / (1000 * 60 * 60);
            if (hoursSinceMistake < 24) priority += 30;
            else if (hoursSinceMistake < 72) priority += 20;
            else if (hoursSinceMistake < 168) priority += 10;
        }

        // Lower consecutive correct = higher priority
        priority += Math.max(0, (5 - mistake.consecutiveCorrect) * 5);

        return priority;
    },

    // Get weak areas analysis
    getWeakAreas() {
        const weakAreas = {
            characters: [],
            words: [],
            categories: []
        };

        // Analyze character mistakes
        Object.values(this.mistakeMemory.characters || {}).forEach(m => {
            if (!m.mastered && m.totalMistakes >= 3) {
                weakAreas.characters.push({
                    id: m.id,
                    answer: m.correctAnswer,
                    mistakes: m.totalMistakes
                });
            }
        });

        // Analyze word mistakes
        Object.values(this.mistakeMemory.words || {}).forEach(m => {
            if (!m.mastered && m.totalMistakes >= 3) {
                weakAreas.words.push({
                    id: m.id,
                    answer: m.correctAnswer,
                    mistakes: m.totalMistakes
                });
            }
        });

        // Analyze category performance
        Object.entries(this.userData.categoryPerformance).forEach(([cat, data]) => {
            if (data.total > 0) {
                const accuracy = (data.correct / data.total) * 100;
                if (accuracy < 70) {
                    weakAreas.categories.push({
                        category: cat,
                        accuracy: Math.round(accuracy),
                        total: data.total
                    });
                }
            }
        });

        return weakAreas;
    },

    // ============================================
    // SPACED REPETITION SYSTEM
    // ============================================

    // Update SRS after review
    updateSRS(itemId, quality) {
        if (!this.srsData[itemId]) {
            this.srsData[itemId] = {
                interval: 1,
                repetitions: 0,
                easeFactor: 2.5,
                nextReview: new Date(),
                lastReview: null
            };
        }

        const item = this.srsData[itemId];

        // SM-2 algorithm
        if (quality >= 3) {
            if (item.repetitions === 0) {
                item.interval = 1;
            } else if (item.repetitions === 1) {
                item.interval = 6;
            } else {
                item.interval = Math.round(item.interval * item.easeFactor);
            }
            item.repetitions++;
        } else {
            item.repetitions = 0;
            item.interval = 1;
        }

        // Update ease factor
        item.easeFactor = Math.max(1.3, item.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));

        // Set next review date
        const nextReview = new Date();
        nextReview.setDate(nextReview.getDate() + item.interval);
        item.nextReview = nextReview;
        item.lastReview = new Date();

        this.saveSRSData();
        return item;
    },

    // Get items due for review
    getDueItems(limit = 20) {
        const now = new Date();
        const dueItems = [];

        Object.entries(this.srsData).forEach(([id, item]) => {
            if (new Date(item.nextReview) <= now) {
                dueItems.push({
                    id,
                    ...item,
                    overdueDays: Math.round((now - new Date(item.nextReview)) / (1000 * 60 * 60 * 24))
                });
            }
        });

        // Sort by overdue days (most overdue first)
        dueItems.sort((a, b) => b.overdueDays - a.overdueDays);

        return dueItems.slice(0, limit);
    },

    // ============================================
    // READING SPEED TRACKING
    // ============================================

    // Record reading speed
    recordReadingSpeed(charactersRead, timeInSeconds) {
        const charsPerMinute = Math.round((charactersRead / timeInSeconds) * 60);
        
        // Update average (weighted)
        if (this.userData.readingSpeed === 0) {
            this.userData.readingSpeed = charsPerMinute;
        } else {
            this.userData.readingSpeed = Math.round((this.userData.readingSpeed * 0.7) + (charsPerMinute * 0.3));
        }

        this.saveUserData();
        return this.userData.readingSpeed;
    },

    // Get reading speed level
    getReadingSpeedLevel() {
        const speed = this.userData.readingSpeed;
        if (speed >= 300) return { level: 'Expert', color: '#5aab8a' };
        if (speed >= 200) return { level: 'Advanced', color: '#6095c0' };
        if (speed >= 100) return { level: 'Intermediate', color: '#d4952b' };
        if (speed >= 50) return { level: 'Elementary', color: '#d4952b' };
        return { level: 'Beginner', color: '#d4432d' };
    },

    // ============================================
    // CATEGORY PERFORMANCE TRACKING
    // ============================================

    // Track category performance
    trackCategoryPerformance(category, isCorrect) {
        if (!this.userData.categoryPerformance[category]) {
            this.userData.categoryPerformance[category] = {
                correct: 0,
                total: 0,
                streak: 0,
                bestStreak: 0
            };
        }

        const perf = this.userData.categoryPerformance[category];
        perf.total++;

        if (isCorrect) {
            perf.correct++;
            perf.streak++;
            perf.bestStreak = Math.max(perf.bestStreak, perf.streak);
        } else {
            perf.streak = 0;
        }

        this.saveUserData();
    },

    // Get category performance summary
    getCategoryPerformance() {
        const summary = {};

        Object.entries(this.userData.categoryPerformance).forEach(([cat, data]) => {
            if (data.total > 0) {
                summary[cat] = {
                    accuracy: Math.round((data.correct / data.total) * 100),
                    total: data.total,
                    correct: data.correct,
                    streak: data.streak,
                    bestStreak: data.bestStreak
                };
            }
        });

        return summary;
    },

    // ============================================
    // ADAPTIVE DIFFICULTY
    // ============================================

    // Get recommended difficulty
    getRecommendedDifficulty() {
        const level = this.userData.level;
        const accuracy = this.userData.accuracy;

        // Base difficulty on level
        let difficulty = Math.min(level, 5);

        // Adjust based on accuracy
        if (accuracy > 90) difficulty = Math.min(difficulty + 1, 5);
        else if (accuracy < 60) difficulty = Math.max(difficulty - 1, 1);

        return difficulty;
    },

    // Update accuracy
    updateAccuracy(isCorrect) {
        if (this.userData.accuracy === 0) {
            this.userData.accuracy = isCorrect ? 100 : 0;
        } else {
            this.userData.accuracy = Math.round((this.userData.accuracy * 0.9) + (isCorrect ? 10 : 0));
        }
        this.saveUserData();
    },

    // ============================================
    // STREAK TRACKING
    // ============================================

    // Update streak
    updateStreak() {
        const today = new Date().toISOString().split('T')[0];
        
        if (!this.userData.lastActive) {
            this.userData.streak = 1;
        } else {
            const lastDate = new Date(this.userData.lastActive).toISOString().split('T')[0];
            
            if (lastDate === today) {
                // Same day, no change
            } else if (this.isYesterday(lastDate)) {
                this.userData.streak++;
            } else {
                this.userData.streak = 1;
            }
        }

        this.userData.lastActive = new Date().toISOString();
        this.saveUserData();
    },

    // Check if date is yesterday
    isYesterday(dateStr) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        return dateStr === yesterday.toISOString().split('T')[0];
    },

    // ============================================
    // COMPREHENSIVE STATS
    // ============================================

    // Get all stats
    getAllStats() {
        const levelProgress = this.getLevelProgress();
        const weakAreas = this.getWeakAreas();
        const categoryPerf = this.getCategoryPerformance();
        const speedLevel = this.getReadingSpeedLevel();
        const dueItems = this.getDueItems(10);
        const mistakesForReview = this.getMistakesForReview(null, 10);

        return {
            level: levelProgress,
            streak: this.userData.streak,
            readingSpeed: {
                speed: this.userData.readingSpeed,
                level: speedLevel
            },
            accuracy: this.userData.accuracy,
            weakAreas: weakAreas,
            categoryPerformance: categoryPerf,
            dueForReview: dueItems.length,
            mistakesToReview: mistakesForReview.length,
            totalCharactersLearned: this.userData.charactersLearned.length,
            totalWordsLearned: this.userData.wordsLearned.length,
            totalTimeSpent: this.userData.totalTimeSpent,
            sessionsCompleted: this.userData.sessionsCompleted
        };
    },

    // ============================================
    // SAVE/LOAD
    // ============================================

    saveUserData() {
        Utils.storage.set(this._key('levelTrackerData'), this.userData);
    },

    loadUserData() {
        const saved = Utils.storage.get(this._key('levelTrackerData'), null);
        if (saved) {
            this.userData = { ...this.userData, ...saved };
        }
    },

    saveMistakeMemory() {
        Utils.storage.set(this._key('mistakeMemory'), this.mistakeMemory);
    },

    loadMistakeMemory() {
        const saved = Utils.storage.get(this._key('mistakeMemory'), null);
        if (saved) {
            this.mistakeMemory = { ...this.mistakeMemory, ...saved };
        }
    },

    saveSRSData() {
        Utils.storage.set(this._key('srsData'), this.srsData);
    },

    loadSRSData() {
        const saved = Utils.storage.get(this._key('srsData'), null);
        if (saved) {
            this.srsData = { ...this.srsData, ...saved };
        }
    },

    // Reset all data
    resetAll() {
        const doReset = () => {
            this.userData = {
                level: 1,
                xp: 0,
                totalXP: 0,
                readingSpeed: 0,
                accuracy: 0,
                streak: 0,
                lastActive: null,
                charactersLearned: [],
                charactersMastered: [],
                wordsLearned: [],
                wordsMastered: [],
                categoryPerformance: {},
                totalTimeSpent: 0,
                sessionsCompleted: 0
            };
            this.mistakeMemory = {
                characters: {},
                words: {},
                sentences: {},
                grammar: {},
                comprehension: {}
            };
            this.srsData = {};

            this.saveUserData();
            this.saveMistakeMemory();
            this.saveSRSData();
            return true;
        };

        if (typeof App !== 'undefined' && typeof App.confirmModal === 'function') {
            return App.confirmModal({
                title: 'Reset all progress?',
                message: 'This will erase all your XP, level, mistakes and SRS data. This cannot be undone.',
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

    // Export data
    exportData() {
        return {
            userData: this.userData,
            mistakeMemory: this.mistakeMemory,
            srsData: this.srsData,
            exportDate: new Date().toISOString()
        };
    },

    // Import data (sanitized)
    importData(data) {
        if (!data || typeof data !== 'object') return false;
        if (data.userData && typeof data.userData === 'object') {
            this.userData = { ...this.userData, ...data.userData };
        }
        if (data.mistakeMemory && typeof data.mistakeMemory === 'object') {
            this.mistakeMemory = { ...this.mistakeMemory, ...data.mistakeMemory };
        }
        if (data.srsData && typeof data.srsData === 'object') {
            this.srsData = { ...this.srsData, ...data.srsData };
        }

        this.saveUserData();
        this.saveMistakeMemory();
        this.saveSRSData();
        return true;
    }
};

window.LevelTracker = LevelTracker;

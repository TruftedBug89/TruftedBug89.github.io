// ============================================
// CHINESE MASTER - Advanced Learning System
// Mistake tracking, adaptive learning, analytics
// ============================================

const AdvancedLearning = {
    // Mistake tracking
    mistakes: {
        vocabulary: {},
        listening: {},
        reading: {},
        grammar: {}
    },

    // Learning patterns
    learningPatterns: {
        visualLearner: false,
        audioLearner: false,
        repetitionNeeded: 0,
        averageResponseTime: 0,
        strongAreas: [],
        weakAreas: []
    },

    // Adaptive difficulty
    adaptiveDifficulty: {
        currentLevel: 1,
        successRate: 0,
        adjustmentThreshold: 0.8,
        minDifficulty: 1,
        maxDifficulty: 5
    },

    // Initialize
    init() {
        this.loadMistakes();
        this.loadLearningPatterns();
        this.loadAdaptiveDifficulty();
        this._lastQuestionTime = Date.now();
    },

    // Session-scoped storage key
    _key(base) {
        const sid = (typeof SessionManager !== 'undefined')
            ? SessionManager.getActiveSessionId() : null;
        return sid ? `${base}_${sid}` : base;
    },

    // Mark when a question is shown (for response time tracking)
    markQuestionTime() {
        this._lastQuestionTime = Date.now();
    },

    // ============================================
    // MISTAKE TRACKING
    // ============================================

    // Record a mistake
    recordMistake(module, itemId, userAnswer, correctAnswer, context = {}) {
        if (!this.mistakes[module]) {
            this.mistakes[module] = {};
        }

        if (!this.mistakes[module][itemId]) {
            this.mistakes[module][itemId] = {
                count: 0,
                firstMistake: new Date().toISOString(),
                lastMistake: new Date().toISOString(),
                attempts: [],
                mastered: false
            };
        }

        const mistake = this.mistakes[module][itemId];
        mistake.count++;
        mistake.lastMistake = new Date().toISOString();
        mistake.attempts.push({
            userAnswer,
            correctAnswer,
            timestamp: new Date().toISOString(),
            context,
            correct: false
        });

        // Keep only last 10 attempts
        if (mistake.attempts.length > 10) {
            mistake.attempts = mistake.attempts.slice(-10);
        }

        this.saveMistakes();
        this.updateLearningPatterns(module, itemId, false);

        return mistake;
    },

    // Record correct answer
    recordCorrect(module, itemId, context = {}) {
        if (!this.mistakes[module]) {
            this.mistakes[module] = {};
        }

        if (this.mistakes[module][itemId]) {
            const mistake = this.mistakes[module][itemId];
            mistake.lastCorrect = new Date().toISOString();
            mistake.attempts.push({
                userAnswer: '[correct]',
                correctAnswer: '[correct]',
                timestamp: new Date().toISOString(),
                context: context || {},
                correct: true
            });
            if (mistake.attempts.length > 10) {
                mistake.attempts = mistake.attempts.slice(-10);
            }
            // Check if mastered (3 consecutive correct)
            const recentAttempts = mistake.attempts.slice(-3);
            if (recentAttempts.length >= 3 && recentAttempts.every(function(a) { return a.correct; })) {
                mistake.mastered = true;
            }
        }

        this.saveMistakes();
        this.updateLearningPatterns(module, itemId, true);
    },

    // Get mistakes for review
    getMistakesForReview(module, limit = 10) {
        if (!this.mistakes[module]) return [];

        const mistakes = Object.entries(this.mistakes[module])
            .filter(([_, data]) => !data.mastered)
            .sort((a, b) => {
                // Priority: count of mistakes, then recency
                if (a[1].count !== b[1].count) {
                    return b[1].count - a[1].count;
                }
                return new Date(a[1].lastMistake) - new Date(b[1].lastMistake);
            })
            .slice(0, limit)
            .map(([id, data]) => ({
                id,
                ...data,
                priority: this.calculatePriority(data)
            }));

        return mistakes;
    },

    // Calculate priority for review
    calculatePriority(mistakeData) {
        const countWeight = Math.min(mistakeData.count / 5, 1);
        const recencyWeight = this.getRecencyWeight(mistakeData.lastMistake);
        const masteredWeight = mistakeData.mastered ? 0 : 1;

        return (countWeight * 0.4 + recencyWeight * 0.4 + masteredWeight * 0.2);
    },

    // Get recency weight
    getRecencyWeight(timestamp) {
        const now = new Date();
        const then = new Date(timestamp);
        const hoursDiff = (now - then) / (1000 * 60 * 60);

        if (hoursDiff < 1) return 1;
        if (hoursDiff < 24) return 0.8;
        if (hoursDiff < 72) return 0.6;
        if (hoursDiff < 168) return 0.4;
        return 0.2;
    },

    // Get weak areas
    getWeakAreas(module) {
        if (!this.mistakes[module]) return [];

        return Object.entries(this.mistakes[module])
            .filter(([_, data]) => data.count >= 3 && !data.mastered)
            .map(([id, data]) => ({
                id,
                mistakeCount: data.count,
                lastAttempt: data.lastMistake
            }))
            .sort((a, b) => b.mistakeCount - a.mistakeCount);
    },

    // Save mistakes to storage
    saveMistakes() {
        Utils.storage.set(this._key('mistakes'), this.mistakes);
    },

    // Load mistakes from storage
    loadMistakes() {
        const saved = Utils.storage.get(this._key('mistakes'), {});
        this.mistakes = { ...this.mistakes, ...saved };
    },

    // ============================================
    // LEARNING PATTERNS
    // ============================================

    // Update learning patterns
    updateLearningPatterns(module, itemId, isCorrect) {
        const pattern = this.learningPatterns;

        // Track response time
        const responseTime = Date.now() - (this._lastQuestionTime || Date.now());
        pattern.averageResponseTime = (pattern.averageResponseTime + responseTime) / 2;

        // Update success rate
        if (isCorrect) {
            pattern.successRate = Math.min(1, pattern.successRate + 0.1);
        } else {
            pattern.successRate = Math.max(0, pattern.successRate - 0.15);
        }

        // Determine learning style based on performance
        if (module === 'listening' && isCorrect) {
            pattern.audioLearner = true;
        }
        if (module === 'reading' && isCorrect) {
            pattern.visualLearner = true;
        }

        // Track strong/weak areas
        if (isCorrect) {
            if (!pattern.strongAreas.includes(module)) {
                pattern.strongAreas.push(module);
            }
            pattern.weakAreas = pattern.weakAreas.filter(a => a !== module);
        } else {
            if (!pattern.weakAreas.includes(module)) {
                pattern.weakAreas.push(module);
            }
        }

        // Adjust repetition needed
        if (pattern.successRate < 0.5) {
            pattern.repetitionNeeded = Math.min(5, pattern.repetitionNeeded + 1);
        } else if (pattern.successRate > 0.8) {
            pattern.repetitionNeeded = Math.max(0, pattern.repetitionNeeded - 1);
        }

        this.saveLearningPatterns();
    },

    // Get personalized recommendations
    getRecommendations() {
        const recommendations = [];
        const pattern = this.learningPatterns;

        // Based on weak areas
        if (pattern.weakAreas.length > 0) {
            recommendations.push({
                type: 'focus',
                module: pattern.weakAreas[0],
                message: `Focus more on ${pattern.weakAreas[0]} - it's your weakest area`,
                priority: 'high'
            });
        }

        // Based on learning style
        if (pattern.audioLearner) {
            recommendations.push({
                type: 'style',
                message: 'You learn well through listening - try more audio exercises',
                priority: 'medium'
            });
        }

        if (pattern.visualLearner) {
            recommendations.push({
                type: 'style',
                message: 'You learn well visually - try more reading exercises',
                priority: 'medium'
            });
        }

        // Based on success rate
        if (pattern.successRate < 0.5) {
            recommendations.push({
                type: 'difficulty',
                message: 'Consider lowering difficulty - your success rate is low',
                priority: 'high'
            });
        } else if (pattern.successRate > 0.9) {
            recommendations.push({
                type: 'difficulty',
                message: 'You\'re doing great! Try harder exercises',
                priority: 'medium'
            });
        }

        // Based on repetition needs
        if (pattern.repetitionNeeded > 3) {
            recommendations.push({
                type: 'repetition',
                message: 'Review more frequently - you need more repetition',
                priority: 'high'
            });
        }

        return recommendations;
    },

    // Save learning patterns
    saveLearningPatterns() {
        Utils.storage.set(this._key('learningPatterns'), this.learningPatterns);
    },

    // Load learning patterns
    loadLearningPatterns() {
        const saved = Utils.storage.get(this._key('learningPatterns'), {});
        this.learningPatterns = { ...this.learningPatterns, ...saved };
    },

    // ============================================
    // ADAPTIVE DIFFICULTY
    // ============================================

    // Update adaptive difficulty
    updateDifficulty(isCorrect) {
        const diff = this.adaptiveDifficulty;

        if (isCorrect) {
            diff.successRate = Math.min(1, diff.successRate + 0.1);
            
            // Increase difficulty if success rate is high
            if (diff.successRate > diff.adjustmentThreshold) {
                diff.currentLevel = Math.min(diff.maxDifficulty, diff.currentLevel + 1);
                diff.successRate = 0.5; // Reset for new level
            }
        } else {
            diff.successRate = Math.max(0, diff.successRate - 0.15);
            
            // Decrease difficulty if success rate is low
            if (diff.successRate < 0.3) {
                diff.currentLevel = Math.max(diff.minDifficulty, diff.currentLevel - 1);
                diff.successRate = 0.5; // Reset for new level
            }
        }

        this.saveAdaptiveDifficulty();
        return diff.currentLevel;
    },

    // Get current difficulty level
    getCurrentDifficulty() {
        return this.adaptiveDifficulty.currentLevel;
    },

    // Get difficulty label
    getDifficultyLabel(level) {
        const labels = {
            1: 'Beginner',
            2: 'Elementary',
            3: 'Intermediate',
            4: 'Upper Intermediate',
            5: 'Advanced'
        };
        return labels[level] || 'Intermediate';
    },

    // Save adaptive difficulty
    saveAdaptiveDifficulty() {
        Utils.storage.set(this._key('adaptiveDifficulty'), this.adaptiveDifficulty);
    },

    // Load adaptive difficulty
    loadAdaptiveDifficulty() {
        const saved = Utils.storage.get(this._key('adaptiveDifficulty'), {});
        this.adaptiveDifficulty = { ...this.adaptiveDifficulty, ...saved };
    },

    // ============================================
    // ANALYTICS
    // ============================================

    // Get comprehensive analytics
    getAnalytics() {
        const stats = StorageManager.getStatistics();
        const mistakes = this.getMistakeStats();
        const patterns = this.learningPatterns;
        const difficulty = this.adaptiveDifficulty;

        return {
            overview: {
                totalWords: stats.totalWords,
                masteredWords: stats.masteredWords,
                listeningCompleted: stats.listeningCompleted,
                readingCompleted: stats.readingCompleted,
                totalXp: stats.totalXp,
                level: stats.level,
                streak: stats.streak
            },
            mistakes: {
                total: mistakes.total,
                byModule: mistakes.byModule,
                topMistakes: mistakes.topMistakes,
                masteredRate: mistakes.masteredRate
            },
            learning: {
                style: patterns.audioLearner ? 'Audio' : patterns.visualLearner ? 'Visual' : 'Balanced',
                successRate: Math.round(patterns.successRate * 100),
                averageResponseTime: Math.round(patterns.averageResponseTime / 1000),
                strongAreas: patterns.strongAreas,
                weakAreas: patterns.weakAreas
            },
            difficulty: {
                current: difficulty.currentLevel,
                label: this.getDifficultyLabel(difficulty.currentLevel),
                successRate: Math.round(difficulty.successRate * 100)
            },
            recommendations: this.getRecommendations()
        };
    },

    // Get mistake statistics
    getMistakeStats() {
        let total = 0;
        let mastered = 0;
        const byModule = {};
        const topMistakes = [];

        Object.entries(this.mistakes).forEach(([module, items]) => {
            byModule[module] = {
                total: 0,
                mastered: 0,
                unmastered: 0
            };

            Object.entries(items).forEach(([id, data]) => {
                total++;
                byModule[module].total++;

                if (data.mastered) {
                    mastered++;
                    byModule[module].mastered++;
                } else {
                    byModule[module].unmastered++;
                    topMistakes.push({
                        module,
                        id,
                        count: data.count,
                        lastMistake: data.lastMistake
                    });
                }
            });
        });

        // Sort top mistakes
        topMistakes.sort((a, b) => b.count - a.count);

        return {
            total,
            mastered,
            masteredRate: total > 0 ? Math.round((mastered / total) * 100) : 0,
            byModule,
            topMistakes: topMistakes.slice(0, 10)
        };
    },

    // Get performance over time
    getPerformanceOverTime(days = 30) {
        const performance = [];
        const today = new Date();

        for (let i = days - 1; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            const dateStr = date.toISOString().split('T')[0];

            const dayStats = StorageManager.getDailyStats(dateStr);
            performance.push({
                date: dateStr,
                xp: dayStats.xp || 0,
                listening: dayStats.listening || 0,
                reading: dayStats.reading || 0,
                vocabulary: dayStats.vocabulary || 0
            });
        }

        return performance;
    },

    // Get learning velocity
    getLearningVelocity() {
        const performance = this.getPerformanceOverTime(7);
        const totalXp = performance.reduce((sum, day) => sum + day.xp, 0);
        const avgXpPerDay = totalXp / 7;

        return {
            avgXpPerDay: Math.round(avgXpPerDay),
            trend: this.calculateTrend(performance.map(p => p.xp)),
            projection: Math.round(avgXpPerDay * 30) // Monthly projection
        };
    },

    // Calculate trend
    calculateTrend(data) {
        if (data.length < 2) return 'stable';

        const firstHalf = data.slice(0, Math.floor(data.length / 2));
        const secondHalf = data.slice(Math.floor(data.length / 2));

        const firstAvg = firstHalf.reduce((a, b) => a + b, 0) / firstHalf.length;
        const secondAvg = secondHalf.reduce((a, b) => a + b, 0) / secondHalf.length;

        if (secondAvg > firstAvg * 1.1) return 'improving';
        if (secondAvg < firstAvg * 0.9) return 'declining';
        return 'stable';
    },

    // ============================================
    // SPACED REPETITION - Enhanced SM-2
    // ============================================

    // Enhanced SRS — delegates to SM2 algorithm
    calculateNextReview(item) {
        var card = {
            efactor: item.easeFactor || 2.5,
            interval: item.interval || 0,
            repetitions: item.repetitions || 0,
            lapses: item.lapses || 0
        };
        var result = SM2.processReview(card, item.quality);
        var now = new Date();
        return {
            interval: result.interval,
            easeFactor: result.efactor,
            repetitions: result.repetitions,
            nextReview: new Date(now.getTime() + result.interval * 24 * 60 * 60 * 1000),
            lastReview: now,
            quality: item.quality
        };
    },

    // Get items due for review
    getItemsDueForReview(module, limit = 20) {
        if (module === 'vocabulary') {
            var level = this.getCurrentDifficulty() || 1;
            var deckName = 'hsk' + level;
            var cards = SM2.loadCards(deckName);
            var dueCards = SM2.getDueCards(cards);
            return dueCards.slice(0, limit).map(function(card) {
                var now = new Date();
                var overdueDays = Math.round((now - new Date(card.nextReview)) / (1000 * 60 * 60 * 24));
                return { id: card.id, ...card, overdueDays: overdueDays };
            });
        }

        var srsData = Utils.storage.get(this._key('srsData'), {});
        var now = new Date();

        return Object.entries(srsData)
            .filter(function(entry) {
                var item = entry[1];
                var nextReview = new Date(item.nextReview);
                return nextReview <= now;
            })
            .sort(function(a, b) {
                var aOverdue = (now - new Date(a[1].nextReview)) / (1000 * 60 * 60 * 24);
                var bOverdue = (now - new Date(b[1].nextReview)) / (1000 * 60 * 60 * 24);
                return bOverdue - aOverdue;
            })
            .slice(0, limit)
            .map(function(entry) {
                var id = entry[0];
                var item = entry[1];
                return {
                    id: id,
                    ...item,
                    overdueDays: Math.round((now - new Date(item.nextReview)) / (1000 * 60 * 60 * 24))
                };
            });
    },

    // Update SRS after review
    updateSRSAfterReview(itemId, quality) {
        var srsData = Utils.storage.get(this._key('srsData'), {});
        var item = srsData[itemId] || {};

        item.quality = quality;
        var updated = this.calculateNextReview(item);

        srsData[itemId] = {
            ...item,
            ...updated
        };

        Utils.storage.set(this._key('srsData'), srsData);

        // Mirror update to SM2 deck
        try {
            var level = this.getCurrentDifficulty() || 1;
            var deckName = 'hsk' + level;
            var card = {
                id: itemId,
                efactor: updated.easeFactor,
                interval: updated.interval,
                repetitions: updated.repetitions,
                nextReview: updated.nextReview.toISOString(),
                lastReview: updated.lastReview.toISOString(),
                lapses: item.lapses || 0
            };
            SM2.updateCard(deckName, card);
        } catch (e) {
            // Gracefully degrade if deck doesn't exist
        }

        return srsData[itemId];
    },

    // ============================================
    // SMART REVIEW SESSION
    // ============================================

    // Generate smart review session
    generateReviewSession(options = {}) {
        const {
            module = 'vocabulary',
            duration = 10, // minutes
            includeNew = true,
            includeMistakes = true,
            includeReview = true
        } = options;

        const session = {
            items: [],
            estimatedDuration: duration,
            types: {
                new: 0,
                review: 0,
                mistakes: 0
            }
        };

        // Calculate item count based on duration (rough estimate)
        const itemCount = Math.round(duration * 2); // ~2 items per minute

        // Get items due for review
        if (includeReview) {
            const dueItems = this.getItemsDueForReview(module, Math.round(itemCount * 0.5));
            session.items.push(...dueItems.map(item => ({ ...item, type: 'review' })));
            session.types.review = dueItems.length;
        }

        // Get mistakes for review
        if (includeMistakes) {
            const mistakes = this.getMistakesForReview(module, Math.round(itemCount * 0.3));
            session.items.push(...mistakes.map(item => ({ ...item, type: 'mistake' })));
            session.types.mistakes = mistakes.length;
        }

        // Add new items
        if (includeNew) {
            const newItemCount = itemCount - session.items.length;
            if (newItemCount > 0) {
                const allWords = typeof VocabularyData !== 'undefined' ? VocabularyData.words : [];
                const learnedIds = new Set(Object.keys(Utils.storage.get(this._key('srsData'), {})));
                const newWords = allWords
                    .filter(w => !learnedIds.has(w.id))
                    .slice(0, newItemCount);

                session.items.push(...newWords.map(item => ({ ...item, type: 'new' })));
                session.types.new = newWords.length;
            }
        }

        // Shuffle items
        session.items = Utils.shuffle(session.items);

        return session;
    },

    // ============================================
    // RESET & CLEANUP
    // ============================================

    // Reset all learning data
    resetAll() {
        this.mistakes = { vocabulary: {}, listening: {}, reading: {}, grammar: {} };
        this.learningPatterns = {
            visualLearner: false,
            audioLearner: false,
            repetitionNeeded: 0,
            averageResponseTime: 0,
            strongAreas: [],
            weakAreas: []
        };
        this.adaptiveDifficulty = {
            currentLevel: 1,
            successRate: 0,
            adjustmentThreshold: 0.8,
            minDifficulty: 1,
            maxDifficulty: 5
        };

        Utils.storage.remove(this._key('mistakes'));
        Utils.storage.remove(this._key('learningPatterns'));
        Utils.storage.remove(this._key('adaptiveDifficulty'));
        Utils.storage.remove(this._key('srsData'));
    },

    // Export learning data
    exportData() {
        return {
            mistakes: this.mistakes,
            learningPatterns: this.learningPatterns,
            adaptiveDifficulty: this.adaptiveDifficulty,
            srsData: Utils.storage.get(this._key('srsData'), {}),
            exportDate: new Date().toISOString()
        };
    },

    // Import learning data (sanitized)
    importData(data) {
        if (!data || typeof data !== 'object') return false;
        if (data.mistakes && typeof data.mistakes === 'object') {
            this.mistakes = data.mistakes;
        }
        if (data.learningPatterns && typeof data.learningPatterns === 'object') {
            this.learningPatterns = data.learningPatterns;
        }
        if (data.adaptiveDifficulty && typeof data.adaptiveDifficulty === 'object') {
            this.adaptiveDifficulty = data.adaptiveDifficulty;
        }
        if (data.srsData && typeof data.srsData === 'object') {
            Utils.storage.set(this._key('srsData'), data.srsData);
        }

        this.saveMistakes();
        this.saveLearningPatterns();
        this.saveAdaptiveDifficulty();

        return true;
    }
};

// Export for use in other modules
window.AdvancedLearning = AdvancedLearning;

// ============================================
// CHINESE MASTER - Progress Tracker
// ============================================

const ProgressTracker = {
    // XP rewards
    xpRewards: {
        listening: {
            correct: 10,
            perfect: 20,
            completion: 5
        },
        reading: {
            correct: 10,
            perfect: 20,
            completion: 5
        },
        vocabulary: {
            learned: 5,
            reviewed: 3,
            mastered: 15
        },
        grammar: {
            correct: 10,
            completion: 5
        },
        speaking: {
            completion: 10
        }
    },

    // Level titles
    levelTitles: [
        { level: 1, title: 'Beginner', chinese: '初学者' },
        { level: 5, title: 'Student', chinese: '学生' },
        { level: 10, title: 'Scholar', chinese: '学者' },
        { level: 15, title: 'Expert', chinese: '专家' },
        { level: 20, title: 'Master', chinese: '大师' }
    ],

    // Achievement definitions
    achievements: [
        {
            id: 'first-lesson',
            title: 'First Step',
            description: 'Complete your first lesson',
            icon: '🎯',
            condition: (stats) => stats.totalCompleted > 0
        },
        {
            id: 'vocab-10',
            title: 'Vocabulary Builder',
            description: 'Learn 10 vocabulary words',
            icon: '📚',
            condition: (stats) => stats.totalWords >= 10
        },
        {
            id: 'vocab-50',
            title: 'Word Collector',
            description: 'Learn 50 vocabulary words',
            icon: '📖',
            condition: (stats) => stats.totalWords >= 50
        },
        {
            id: 'vocab-100',
            title: 'Lexicon Master',
            description: 'Learn 100 vocabulary words',
            icon: '📗',
            condition: (stats) => stats.totalWords >= 100
        },
        {
            id: 'vocab-200',
            title: 'Word Wizard',
            description: 'Learn 200 vocabulary words',
            icon: '🧙',
            condition: (stats) => stats.totalWords >= 200
        },
        {
            id: 'listening-10',
            title: 'Good Listener',
            description: 'Complete 10 listening exercises',
            icon: '🎧',
            condition: (stats) => stats.listeningCompleted >= 10
        },
        {
            id: 'listening-50',
            title: 'Audio Expert',
            description: 'Complete 50 listening exercises',
            icon: '🎤',
            condition: (stats) => stats.listeningCompleted >= 50
        },
        {
            id: 'reading-10',
            title: 'Bookworm',
            description: 'Complete 10 reading exercises',
            icon: '🐛',
            condition: (stats) => stats.readingCompleted >= 10
        },
        {
            id: 'reading-50',
            title: 'Reading Pro',
            description: 'Complete 50 reading exercises',
            icon: '📰',
            condition: (stats) => stats.readingCompleted >= 50
        },
        {
            id: 'streak-3',
            title: 'Consistent',
            description: 'Maintain a 3-day streak',
            icon: '🔥',
            condition: (stats) => stats.streak >= 3
        },
        {
            id: 'streak-7',
            title: 'Dedicated',
            description: 'Maintain a 7-day streak',
            icon: '💪',
            condition: (stats) => stats.streak >= 7
        },
        {
            id: 'streak-30',
            title: 'Unstoppable',
            description: 'Maintain a 30-day streak',
            icon: '🏆',
            condition: (stats) => stats.streak >= 30
        },
        {
            id: 'level-5',
            title: 'Rising Star',
            description: 'Reach level 5',
            icon: '⭐',
            condition: (stats) => stats.level >= 5
        },
        {
            id: 'level-10',
            title: 'Shining Bright',
            description: 'Reach level 10',
            icon: '🌟',
            condition: (stats) => stats.level >= 10
        },
        {
            id: 'xp-1000',
            title: 'XP Hunter',
            description: 'Earn 1000 XP',
            icon: '💎',
            condition: (stats) => stats.totalXp >= 1000
        },
        {
            id: 'xp-5000',
            title: 'XP Master',
            description: 'Earn 5000 XP',
            icon: '👑',
            condition: (stats) => stats.totalXp >= 5000
        },
        {
            id: 'grammar-10',
            title: 'Grammar Guru',
            description: 'Complete 10 grammar lessons',
            icon: '📝',
            condition: (stats) => stats.grammarCompleted >= 10
        },
        {
            id: 'perfect-score',
            title: 'Perfectionist',
            description: 'Get a perfect score on any exercise',
            icon: '💯',
            condition: (stats) => stats.hasPerfectScore
        },
        {
            id: 'daily-goal',
            title: 'Goal Crusher',
            description: 'Complete all daily goals',
            icon: '🎯',
            condition: (stats) => stats.dailyGoalComplete
        },
        {
            id: 'night-owl',
            title: 'Night Owl',
            description: 'Study after midnight',
            icon: '🦉',
            condition: () => {
                const hour = new Date().getHours();
                return hour >= 0 && hour < 5;
            }
        },
        {
            id: 'early-bird',
            title: 'Early Bird',
            description: 'Study before 7 AM',
            icon: '🐦',
            condition: () => {
                const hour = new Date().getHours();
                return hour >= 5 && hour < 7;
            }
        },
        {
            id: 'grammar-20',
            title: 'Grammar Sensei',
            description: 'Complete 20 grammar lessons',
            icon: '🎓',
            condition: (stats) => stats.grammarCompleted >= 20
        },
        {
            id: 'grammar-50',
            title: 'Grammar Grandmaster',
            description: 'Complete 50 grammar lessons',
            icon: '🏛️',
            condition: (stats) => stats.grammarCompleted >= 50
        },
        {
            id: 'speaking-10',
            title: 'Speaker\'s Voice',
            description: 'Complete 10 speaking exercises',
            icon: '🗣️',
            condition: (stats) => stats.speakingCompleted >= 10
        },
        {
            id: 'speaking-30',
            title: 'Orator\'s Guild',
            description: 'Complete 30 speaking exercises',
            icon: '📢',
            condition: (stats) => stats.speakingCompleted >= 30
        },
        {
            id: 'total-50',
            title: 'Dedicated Learner',
            description: 'Complete 50 total exercises',
            icon: '📋',
            condition: (stats) => stats.totalCompleted >= 50
        },
        {
            id: 'total-100',
            title: 'Study Machine',
            description: 'Complete 100 total exercises',
            icon: '⚙️',
            condition: (stats) => stats.totalCompleted >= 100
        },
        {
            id: 'total-250',
            title: 'Knowledge Engine',
            description: 'Complete 250 total exercises',
            icon: '🚂',
            condition: (stats) => stats.totalCompleted >= 250
        },
        {
            id: 'total-500',
            title: 'Legendary Scholar',
            description: 'Complete 500 total exercises',
            icon: '🏛️',
            condition: (stats) => stats.totalCompleted >= 500
        },
        {
            id: 'perfect-3',
            title: 'Triple Crown',
            description: 'Achieve 3 perfect scores',
            icon: '👑',
            condition: (stats) => stats.perfectScores >= 3
        },
        {
            id: 'perfect-10',
            title: 'Flawless',
            description: 'Achieve 10 perfect scores',
            icon: '💎',
            condition: (stats) => stats.perfectScores >= 10
        },
        {
            id: 'perfect-25',
            title: 'Untouchable',
            description: 'Achieve 25 perfect scores',
            icon: '🌟',
            condition: (stats) => stats.perfectScores >= 25
        },
        {
            id: 'vocab-500',
            title: 'Walking Dictionary',
            description: 'Learn 500 vocabulary words',
            icon: '📚',
            condition: (stats) => stats.totalWords >= 500
        },
        {
            id: 'vocab-1000',
            title: 'Human Lexicon',
            description: 'Learn 1000 vocabulary words',
            icon: '📖',
            condition: (stats) => stats.totalWords >= 1000
        },
        {
            id: 'level-15',
            title: 'Sage of Learning',
            description: 'Reach level 15',
            icon: '🧘',
            condition: (stats) => stats.level >= 15
        },
        {
            id: 'level-20',
            title: 'Master of Arts',
            description: 'Reach level 20',
            icon: '🏅',
            condition: (stats) => stats.level >= 20
        },
        {
            id: 'xp-10000',
            title: 'XP Titan',
            description: 'Earn 10000 XP',
            icon: '💰',
            condition: (stats) => stats.totalXp >= 10000
        },
        {
            id: 'xp-25000',
            title: 'XP Legend',
            description: 'Earn 25000 XP',
            icon: '💎',
            condition: (stats) => stats.totalXp >= 25000
        },
        {
            id: 'streak-60',
            title: 'Iron Will',
            description: 'Maintain a 60-day streak',
            icon: '⚡',
            condition: (stats) => stats.streak >= 60
        },
        {
            id: 'streak-100',
            title: 'Centurion',
            description: 'Maintain a 100-day streak',
            icon: '🛡️',
            condition: (stats) => stats.streak >= 100
        },
        {
            id: 'listening-100',
            title: 'Ear of the Dragon',
            description: 'Complete 100 listening exercises',
            icon: '🐉',
            condition: (stats) => stats.listeningCompleted >= 100
        },
        {
            id: 'reading-100',
            title: 'Eye of the Phoenix',
            description: 'Complete 100 reading exercises',
            icon: '🐦‍🔥',
            condition: (stats) => stats.readingCompleted >= 100
        },
        {
            id: 'hsk-complete',
            title: 'HSK Graduate',
            description: 'Master all words in one HSK level',
            icon: '🎓',
            condition: () => {
                try {
                    var ud = typeof StorageManager !== 'undefined' ? StorageManager.getUserData() : null;
                    var mastered = (ud && ud.progress && ud.progress.vocabulary && ud.progress.vocabulary.mastered) ? ud.progress.vocabulary.mastered.length : 0;
                    return mastered >= 50;
                } catch(e) { return false; }
            }
        },
        {
            id: 'all-modules',
            title: 'Renaissance Scholar',
            description: 'Complete at least 5 exercises in every module',
            icon: '🎨',
            condition: (stats) => stats.listeningCompleted >= 5 && stats.readingCompleted >= 5 && stats.grammarCompleted >= 5 && stats.speakingCompleted >= 5
        },
        {
            id: 'midnight-marathon',
            title: 'Night Scholar',
            description: 'Complete 10 exercises between midnight and 5 AM',
            icon: '🌙',
            condition: () => {
                try {
                    var data = typeof StorageManager !== 'undefined' ? StorageManager.getUserData() : null;
                    if (!data || !data.activityLog) return false;
                    var count = 0;
                    data.activityLog.forEach(function(a) {
                        var h = new Date(a.timestamp).getHours();
                        if (h >= 0 && h < 5) count++;
                    });
                    return count >= 10;
                } catch(e) { return false; }
            }
        },
        {
            id: 'seven-day-power',
            title: 'Weekend Warrior',
            description: 'Study 7 days in a row with at least 1 exercise each day',
            icon: '📅',
            condition: (stats) => stats.streak >= 7
        }
    ],

    // Track exercise completion
    trackExercise(module, exerciseId, score, total) {
        const percentage = Utils.percentage(score, total);
        const isPerfect = percentage === 100;

        // Calculate XP (safely handle modules that don't define every reward)
        const rewards = this.xpRewards[module] || {};
        let xp = 0;
        if (percentage >= 80 && typeof rewards.correct === 'number') {
            xp += rewards.correct * score;
        }
        if (isPerfect && typeof rewards.perfect === 'number') {
            xp += rewards.perfect;
        }
        if (typeof rewards.completion === 'number') {
            xp += rewards.completion;
        }
        xp = Math.max(0, xp || 0);
        
        // Add XP
        StorageManager.addXP(xp);

        // Track perfect scores
        if (isPerfect) {
            var userData = StorageManager.getUserData();
            if (userData) {
                userData.perfectScores = (userData.perfectScores || 0) + 1;
                StorageManager.setUserData(userData);
            }
        }

        /* Float +XP animation */
        if (xp > 0 && typeof InkAnimations !== 'undefined' && InkAnimations.floatXP) {
            var target = document.querySelector('.module.active .exercise-header') ||
                        document.querySelector('.module.active') ||
                        document.body;
            InkAnimations.floatXP(target, xp);
        }
        
        // Update daily stats
        StorageManager.updateDailyStats(module, 1);
        StorageManager.updateDailyStats('xp', xp);
        
        // Mark as completed
        StorageManager.markExerciseCompleted(module, exerciseId, percentage);
        
        // Add activity
        StorageManager.addActivity(
            module,
            `Completed ${module} exercise with ${percentage}% score`,
            xp
        );
        
        // Check achievements
        this.checkAchievements();
        
        return { xp, percentage, isPerfect };
    },

    // Track vocabulary learning
    trackVocabulary(wordId, status) {
        StorageManager.addVocabularyWord(wordId, status);
        
        let xp = 0;
        if (status === 'learned') {
            xp = this.xpRewards.vocabulary.learned;
        } else if (status === 'reviewing') {
            xp = this.xpRewards.vocabulary.reviewed;
        } else if (status === 'mastered') {
            xp = this.xpRewards.vocabulary.mastered;
        }
        
        StorageManager.addXP(xp);
        StorageManager.updateDailyStats('vocabulary', 1);
        StorageManager.updateDailyStats('xp', xp);

        /* Float +XP */
        if (xp > 0 && typeof InkAnimations !== 'undefined' && InkAnimations.floatXP) {
            var targetEl = document.querySelector('.flashcard-container .flashcard') ||
                          document.querySelector('#module-vocabulary.active') ||
                          document.body;
            InkAnimations.floatXP(targetEl, xp);
        }
        
        // Check achievements
        this.checkAchievements();
        
        return { xp };
    },

    // Check and award achievements
    checkAchievements() {
        const stats = StorageManager.getStatistics();
        const data = StorageManager.getUserData();
        
        if (!data || !data.settings) return;
        
        // Check daily goal completion
        const dailyGoal = data.settings.dailyGoal || { listening: 5, reading: 3, vocabulary: 10 };
        const todayStats = StorageManager.getDailyStats();
        const dailyGoalComplete = 
            todayStats.listening >= dailyGoal.listening &&
            todayStats.reading >= dailyGoal.reading &&
            todayStats.vocabulary >= dailyGoal.vocabulary;
        
        const listeningScores = data.progress?.listening?.scores || {};
        const readingScores = data.progress?.reading?.scores || {};
        
        const fullStats = {
            ...stats,
            totalCompleted: stats.listeningCompleted + stats.readingCompleted + stats.grammarCompleted + stats.speakingCompleted,
            hasPerfectScore: Object.values(listeningScores).some(s => s === 100) ||
                           Object.values(readingScores).some(s => s === 100),
            dailyGoalComplete
        };
        
        this.achievements.forEach(achievement => {
            if (!StorageManager.hasAchievement(achievement.id)) {
                try {
                    if (achievement.condition(fullStats)) {
                        StorageManager.addAchievement(achievement.id);
                        Utils.showToast(`Achievement Unlocked: ${achievement.title}!`, 'success');
                        Utils.playSound('levelup');
                        Utils.showConfetti();
                    }
                } catch (e) {
                    console.warn('Achievement condition error:', achievement.id, e);
                }
            }
        });
    },

    // Get level title
    getLevelTitle(level) {
        let title = this.levelTitles[0];
        for (const levelTitle of this.levelTitles) {
            if (level >= levelTitle.level) {
                title = levelTitle;
            }
        }
        return title;
    },

    // Get achievement progress
    getAchievementProgress() {
        const stats = StorageManager.getStatistics();
        const data = StorageManager.getUserData();
        
        return this.achievements.map(achievement => ({
            ...achievement,
            unlocked: StorageManager.hasAchievement(achievement.id)
        }));
    },

    // Get daily goal progress
    getDailyGoalProgress() {
        const data = StorageManager.getUserData();
        const todayStats = StorageManager.getDailyStats();
        const dailyGoal = data.settings.dailyGoal;
        
        const listeningProgress = Utils.percentage(todayStats.listening, dailyGoal.listening);
        const readingProgress = Utils.percentage(todayStats.reading, dailyGoal.reading);
        const vocabProgress = Utils.percentage(todayStats.vocabulary, dailyGoal.vocabulary);
        
        const overallProgress = Math.round((listeningProgress + readingProgress + vocabProgress) / 3);
        
        return {
            listening: {
                current: todayStats.listening,
                goal: dailyGoal.listening,
                progress: listeningProgress
            },
            reading: {
                current: todayStats.reading,
                goal: dailyGoal.reading,
                progress: readingProgress
            },
            vocabulary: {
                current: todayStats.vocabulary,
                goal: dailyGoal.vocabulary,
                progress: vocabProgress
            },
            overall: overallProgress
        };
    },

    // Get weekly stats
    getWeeklyStats() {
        const weeklyStats = [];
        
        for (let i = 6; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            const dateStr = date.toISOString().split('T')[0];
            const dayStats = StorageManager.getDailyStats(dateStr);
            
            weeklyStats.push({
                date: dateStr,
                day: date.toLocaleDateString('en-US', { weekday: 'short' }),
                xp: dayStats.xp || 0,
                listening: dayStats.listening || 0,
                reading: dayStats.reading || 0,
                vocabulary: dayStats.vocabulary || 0
            });
        }
        
        return weeklyStats;
    },

    // Calculate streak
    calculateStreak() {
        const data = StorageManager.getUserData();
        return data.streak;
    },

    // Get learning summary
    getLearningSummary() {
        const stats = StorageManager.getStatistics();
        const levelInfo = StorageManager.getLevelInfo();
        const dailyGoal = this.getDailyGoalProgress();
        const weeklyStats = this.getWeeklyStats();
        const achievements = this.getAchievementProgress();
        
        const unlockedAchievements = achievements.filter(a => a.unlocked).length;
        
        return {
            level: levelInfo,
            stats,
            dailyGoal,
            weeklyStats,
            achievements: {
                total: achievements.length,
                unlocked: unlockedAchievements,
                list: achievements
            },
            streak: stats.streak
        };
    }
};

// Export for use in other modules
window.ProgressTracker = ProgressTracker;

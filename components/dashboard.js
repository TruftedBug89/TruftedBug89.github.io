// ============================================
// CHINESE MASTER - Dashboard Component
// ============================================

const Dashboard = {
    // Initialize dashboard
    init() {
        this.update();
        if (typeof InkAnimations !== 'undefined' && InkAnimations.textSplitReveal) {
            InkAnimations.textSplitReveal('.greeting');
        }
    },

    // Update dashboard data
    update() {
        const stats = StorageManager.getStatistics();
        const levelInfo = StorageManager.getLevelInfo();
        const dailyGoal = ProgressTracker.getDailyGoalProgress();
        const recentActivities = StorageManager.getRecentActivities(5);

        // Update stats
        this.updateStats(stats);
        
        // Update level info
        this.updateLevelInfo(levelInfo);
        
        // Update daily goal
        this.updateDailyGoal(dailyGoal);
        
        // Update recent activities
        this.updateRecentActivities(recentActivities);
        
        // Update streak
        this.updateStreak(stats.streak);

        // Update analytics
        this.updateAnalytics();

        // Update review stats
        this.updateReviewStats();

        // Setup smart review buttons
        this.setupSmartReview();
    },

    // Update statistics cards
    updateStats(stats) {
        const elements = {
            'total-words': stats.totalWords,
            'listening-completed': stats.listeningCompleted,
            'reading-completed': stats.readingCompleted,
            'total-xp': stats.totalXp
        };

        var useGSAP = typeof InkAnimations !== 'undefined' && InkAnimations.countUp;

        Object.entries(elements).forEach(([id, value], idx) => {
            const element = document.getElementById(id);
            if (element) {
                if (useGSAP) {
                    InkAnimations.countUp(element, value, 1.0 + idx * 0.15);
                } else {
                    Utils.animateNumber(element, value);
                }
            }
        });
    },

    // Update level information
    updateLevelInfo(levelInfo) {
        const levelElement = document.getElementById('user-level');
        const xpProgress = document.getElementById('xp-progress');
        const currentXp = document.getElementById('current-xp');
        const nextLevelXp = document.getElementById('next-level-xp');

        if (levelElement) levelElement.textContent = levelInfo.level;
        var useGSAP = typeof InkAnimations !== 'undefined' && InkAnimations.animateXP;
        var fromPct = xpProgress ? parseFloat(xpProgress.style.width) || 0 : 0;
        if (xpProgress) {
            if (useGSAP) {
                InkAnimations.animateXP(fromPct, levelInfo.progress);
            } else {
                xpProgress.style.width = `${levelInfo.progress}%`;
            }
        }
        if (currentXp) currentXp.textContent = levelInfo.currentXp;
        if (nextLevelXp) nextLevelXp.textContent = levelInfo.nextLevelXp;
    },

    // Update daily goal
    updateDailyGoal(dailyGoal) {
        var goalFill = document.getElementById('goal-fill');
        var goalPercent = document.getElementById('goal-percent');

        if (goalFill) {
            var circumference = 2 * Math.PI * 40;
            goalFill.style.strokeDasharray = circumference;
            if (typeof InkAnimations !== 'undefined' && InkAnimations.animateGoalRing && !this._goalRingAnimated) {
                this._goalRingAnimated = true;
                InkAnimations.animateGoalRing(dailyGoal.overall);
            } else {
                goalFill.style.strokeDashoffset = circumference - (dailyGoal.overall / 100) * circumference;
                if (goalPercent) goalPercent.textContent = dailyGoal.overall;
            }
        } else if (goalPercent) {
            goalPercent.textContent = dailyGoal.overall;
        }

        // Update individual goals
        const goalListening = document.getElementById('goal-listening');
        const goalReading = document.getElementById('goal-reading');
        const goalVocab = document.getElementById('goal-vocab');

        if (goalListening) goalListening.textContent = dailyGoal.listening.current;
        if (goalReading) goalReading.textContent = dailyGoal.reading.current;
        if (goalVocab) goalVocab.textContent = dailyGoal.vocabulary.current;
    },

    // Update recent activities
    updateRecentActivities(activities) {
        const activityList = document.getElementById('activity-list');
        if (!activityList) return;

        if (activities.length === 0) {
            activityList.innerHTML = `
                <div class="activity-empty">
                    <p>Start learning to see your activity here!</p>
                </div>
            `;
            return;
        }

        const icons = {
            listening: '🎧',
            reading: '📖',
            vocabulary: '📝',
            grammar: '🔤',
            speaking: '🎤'
        };

        activityList.innerHTML = activities.map(activity => `
            <div class="activity-item">
                <span class="activity-icon">${Utils.escapeHtml(icons[activity.type] || '📚')}</span>
                <div class="activity-text">
                    <div>${Utils.escapeHtml(activity.description)}</div>
                    <div class="activity-time">${Utils.escapeHtml(Utils.timeAgo(activity.timestamp))}</div>
                </div>
                <span class="activity-xp">+${Utils.escapeHtml(activity.xp)} XP</span>
            </div>
        `).join('');
    },

    // Update streak
    updateStreak(streak) {
        const streakCount = document.getElementById('streak-count');
        if (streakCount) {
            streakCount.textContent = streak;
        }
    },

    // Update analytics
    updateAnalytics() {
        const analyticsContent = document.getElementById('analytics-content');
        if (!analyticsContent) return;
        if (typeof LevelTracker === 'undefined' || typeof AdvancedLearning === 'undefined') {
            analyticsContent.innerHTML = '<p>Analytics loading...</p>';
            return;
        }
        const stats = LevelTracker.getAllStats();
        const levelProgress = LevelTracker.getLevelProgress();
        const weakAreas = LevelTracker.getWeakAreas();
        const categoryPerf = LevelTracker.getCategoryPerformance();

        const safeName = Utils.escapeHtml(levelProgress.name);
        const safeChinese = Utils.escapeHtml(levelProgress.chinese);
        const safeDescription = Utils.escapeHtml(levelProgress.description);
        const safeTotalXP = Number(levelProgress.totalXP) || 0;
        const safeProgress = Math.max(0, Math.min(100, Number(levelProgress.progress) || 0));
        const safeXpInLevel = Number(levelProgress.xpInLevel) || 0;
        const safeXpNeeded = Number(levelProgress.xpNeeded) || 1;
        const safeLevel = Number(levelProgress.level) || 1;
        const safeStreak = Number(stats.streak) || 0;
        const safeReadingSpeed = Number(stats.readingSpeed.speed) || 0;
        const safeAccuracy = Math.max(0, Math.min(100, Number(stats.accuracy) || 0));
        const safeChars = Number(stats.totalCharactersLearned) || 0;
        const safeWords = Number(stats.totalWordsLearned) || 0;
        const safeMistakes = Number(stats.mistakesToReview) || 0;

        analyticsContent.innerHTML = `
            <div class="analytics-section">
                <h2>Reading Level Progress</h2>
                <div class="level-progress-card">
                    <div class="level-info">
                        <div class="level-badge-large">
                            <span class="level-number">${safeLevel}</span>
                            <span class="level-name">${safeName}</span>
                            <span class="level-chinese" lang="zh">${safeChinese}</span>
                        </div>
                        <div class="level-details">
                            <p class="level-description">${safeDescription}</p>
                            <div class="xp-bar-large">
                                <div class="xp-fill" style="width: ${safeProgress}%"></div>
                            </div>
                            <p class="xp-text">${safeXpInLevel} / ${safeXpNeeded} XP</p>
                            <p class="total-xp">Total XP: ${safeTotalXP}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="analytics-section">
                <h2>Performance Stats</h2>
                <div class="stats-grid">
                    <div class="stat-card"><div class="stat-icon">🔥</div><div class="stat-value">${safeStreak}</div><div class="stat-label">Day Streak</div></div>
                    <div class="stat-card"><div class="stat-icon">⚡</div><div class="stat-value">${safeReadingSpeed}</div><div class="stat-label">Chars/Min</div></div>
                    <div class="stat-card"><div class="stat-icon">🎯</div><div class="stat-value">${safeAccuracy}%</div><div class="stat-label">Accuracy</div></div>
                    <div class="stat-card"><div class="stat-icon">📚</div><div class="stat-value">${safeChars}</div><div class="stat-label">Characters</div></div>
                    <div class="stat-card"><div class="stat-icon">📝</div><div class="stat-value">${safeWords}</div><div class="stat-label">Words</div></div>
                    <div class="stat-card"><div class="stat-icon">🔄</div><div class="stat-value">${safeMistakes}</div><div class="stat-label">To Review</div></div>
                </div>
            </div>

            <div class="analytics-section">
                <h2>Category Performance</h2>
                <div class="category-grid">
                    ${Object.entries(categoryPerf).map(([cat, data]) => {
                        const acc = Math.max(0, Math.min(100, Number(data.accuracy) || 0));
                        const barColor = acc >= 80 ? '#2ecc71' : acc >= 60 ? '#f39c12' : '#e74c3c';
                        return '<div class="category-card"><div class="category-name">' + Utils.escapeHtml(cat) + '</div><div class="category-accuracy">' + acc + '%</div><div class="category-bar"><div class="category-fill" style="width:' + acc + '%; background:' + barColor + '"></div></div><div class="category-stats">' + (Number(data.correct)||0) + '/' + (Number(data.total)||0) + '</div></div>';
                    }).join('')}
                </div>
            </div>

            <div class="analytics-section">
                <h2>Weak Areas</h2>
                <div class="weak-areas">
                    ${weakAreas.characters.length > 0 ? '<div class="weak-section"><h3>Characters to Review</h3><div class="weak-items">' + weakAreas.characters.slice(0, 5).map(c => '<span class="weak-item">' + Utils.escapeHtml(c.answer) + ' (' + (Number(c.mistakes)||0) + 'x)</span>').join('') + '</div></div>' : ''}
                    ${weakAreas.words.length > 0 ? '<div class="weak-section"><h3>Words to Review</h3><div class="weak-items">' + weakAreas.words.slice(0, 5).map(w => '<span class="weak-item">' + Utils.escapeHtml(w.answer) + ' (' + (Number(w.mistakes)||0) + 'x)</span>').join('') + '</div></div>' : ''}
                    ${weakAreas.categories.length > 0 ? '<div class="weak-section"><h3>Categories to Improve</h3><div class="weak-items">' + weakAreas.categories.map(c => '<span class="weak-item">' + Utils.escapeHtml(c.category) + ' (' + (Number(c.accuracy)||0) + '%)</span>').join('') + '</div></div>' : ''}
                    ${weakAreas.characters.length === 0 && weakAreas.words.length === 0 && weakAreas.categories.length === 0 ? '<p class="no-weak">Great job! No weak areas detected.</p>' : ''}
                </div>
            </div>
        `;
    },

    // Update review stats
    updateReviewStats() {
        const reviewStats = document.getElementById('review-stats');
        if (!reviewStats) return;

        if (typeof AdvancedLearning === 'undefined') {
            reviewStats.innerHTML = '<p style="color:rgba(255,255,255,0.5);">Review stats loading...</p>';
            return;
        }

        const mistakes = AdvancedLearning.getMistakeStats();
        const dueItems = AdvancedLearning.getItemsDueForReview('vocabulary', 100);
        const mTotal = Utils.escapeHtml(mistakes.total);
        const mMastered = Utils.escapeHtml(mistakes.mastered);
        const mRate = Utils.escapeHtml(mistakes.masteredRate);
        const mDue = Utils.escapeHtml(dueItems.length);

        reviewStats.innerHTML = `
            <div class="review-stats-grid">
                <div class="review-stat-item">
                    <div class="review-stat-value">${mTotal}</div>
                    <div class="review-stat-label">Total Mistakes</div>
                </div>
                <div class="review-stat-item">
                    <div class="review-stat-value">${mMastered}</div>
                    <div class="review-stat-label">Mastered</div>
                </div>
                <div class="review-stat-item">
                    <div class="review-stat-value">${mRate}%</div>
                    <div class="review-stat-label">Mastered Rate</div>
                </div>
                <div class="review-stat-item">
                    <div class="review-stat-value">${mDue}</div>
                    <div class="review-stat-label">Due for Review</div>
                </div>
            </div>
        `;
    },

    // Setup smart review
    setupSmartReview() {
        const startBtn = document.getElementById('start-smart-review');
        const viewBtn = document.getElementById('view-mistakes');

        if (startBtn) {
            startBtn.onclick = () => {
                const session = AdvancedLearning.generateReviewSession({
                    module: 'vocabulary',
                    duration: 10,
                    includeNew: true,
                    includeMistakes: true,
                    includeReview: true
                });

                App.showModal(`
                    <div class="smart-review-modal">
                        <h2>🧠 Smart Review Session</h2>
                        <p>Personalized review based on your learning patterns</p>
                        <div class="session-stats">
                            <div class="session-stat">
                                <span class="stat-value">${Utils.escapeHtml(session.types.new)}</span>
                                <span class="stat-label">New Words</span>
                            </div>
                            <div class="session-stat">
                                <span class="stat-value">${Utils.escapeHtml(session.types.review)}</span>
                                <span class="stat-label">Review</span>
                            </div>
                            <div class="session-stat">
                                <span class="stat-value">${Utils.escapeHtml(session.types.mistakes)}</span>
                                <span class="stat-label">Mistakes</span>
                            </div>
                        </div>
                        <div class="session-info">
                            <p>📊 Total items: ${Utils.escapeHtml(session.items.length)}</p>
                            <p>⏱️ Estimated time: ${Utils.escapeHtml(session.estimatedDuration)} minutes</p>
                        </div>
                        <div class="modal-actions">
                            <button type="button" class="btn btn-primary" data-cm-action="start-review">Start Review</button>
                            <button type="button" class="btn btn-secondary" data-cm-action="cancel-review">Cancel</button>
                        </div>
                    </div>
                `);
                const modal = document.getElementById('modal');
                const startBtn = modal.querySelector('[data-cm-action="start-review"]');
                const cancelBtn = modal.querySelector('[data-cm-action="cancel-review"]');
                if (startBtn) startBtn.addEventListener('click', () => { App.closeModal(); App.navigateTo('vocabulary'); });
                if (cancelBtn) cancelBtn.addEventListener('click', () => App.closeModal());
            };
        }

        if (viewBtn) {
            viewBtn.onclick = () => {
                const mistakes = AdvancedLearning.getMistakeStats();
                const topMistakes = mistakes.topMistakes;

                App.showModal(`
                    <div class="mistakes-modal">
                        <h2>📝 Your Mistakes</h2>
                        <p>Items that need more practice</p>
                        <div class="mistakes-list">
                            ${topMistakes.length > 0 ? topMistakes.map(m => `
                                <div class="mistake-item">
                                    <span class="mistake-module">${Utils.escapeHtml(m.module)}</span>
                                    <span class="mistake-id">${Utils.escapeHtml(m.id)}</span>
                                    <span class="mistake-count">${Utils.escapeHtml(m.count)}x</span>
                                </div>
                            `).join('') : '<p class="no-mistakes">No mistakes recorded yet!</p>'}
                        </div>
                        <div class="modal-actions">
                            <button type="button" class="btn btn-primary" data-cm-action="close-mistakes">Close</button>
                        </div>
                    </div>
                `);
                const modal = document.getElementById('modal');
                const closeBtn = modal.querySelector('[data-cm-action="close-mistakes"]');
                if (closeBtn) closeBtn.addEventListener('click', () => App.closeModal());
            };
        }
    }
};

// Export for use in other modules
window.Dashboard = Dashboard;

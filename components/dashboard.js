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

        this.updateStats(stats);
        this.updateLevelInfo(levelInfo);
        this.updateDailyGoal(dailyGoal);
        this.updateRecentActivities(recentActivities);
        this.updateStreak(stats.streak);
        this.updateAnalytics();
        this.updateReviewStats();
        this.setupSmartReview();

        if (typeof InkAnimations !== 'undefined') {
            var dashboardModule = document.getElementById('module-dashboard');
            if (dashboardModule && InkAnimations.moduleHeroReveal) {
                InkAnimations.moduleHeroReveal(dashboardModule);
            }
            var statsGrid = document.querySelector('.dashboard-grid');
            if (statsGrid && InkAnimations.entranceStagger) {
                InkAnimations.entranceStagger(statsGrid, { y: 24, duration: 0.5, stagger: 0.08, delay: 0.2 });
            }
            var analyticsSection = document.querySelector('.analytics-dashboard');
            if (analyticsSection && InkAnimations.slideInPanel) {
                InkAnimations.slideInPanel(analyticsSection, 'right');
            }
            var smartReviewSection = document.querySelector('.smart-review-section');
            if (smartReviewSection && InkAnimations.slideInPanel) {
                InkAnimations.slideInPanel(smartReviewSection, 'down');
            }
        }
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
        var prevValues = this._prevStatValues || {};

        Object.entries(elements).forEach(([id, value], idx) => {
            const element = document.getElementById(id);
            if (element) {
                if (useGSAP) {
                    InkAnimations.countUp(element, value, 1.0 + idx * 0.15);
                } else {
                    Utils.animateNumber(element, value);
                }
                if (prevValues[id] !== undefined && prevValues[id] !== value) {
                    if (typeof InkAnimations !== 'undefined' && InkAnimations.counterBounce) {
                        var el = element;
                        var delay = (1.0 + idx * 0.15) * 1000;
                        (function(e) {
                            setTimeout(function() { InkAnimations.counterBounce(e); }, delay);
                        })(el);
                    }
                }
            }
            prevValues[id] = value;
        });
        this._prevStatValues = prevValues;
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

        if (typeof InkAnimations !== 'undefined' && InkAnimations.entranceStagger && activities.length > 0) {
            InkAnimations.entranceStagger(activityList, { y: 16, duration: 0.4, stagger: 0.05 });
        }
    },

    // Update streak
    updateStreak(streak) {
        const streakCount = document.getElementById('streak-count');
        if (streakCount) {
            var prevStreak = this._prevStreak || 0;
            streakCount.textContent = streak;
            var milestones = [3, 7, 10, 14, 21, 30, 50, 100];
            if (streak > prevStreak && milestones.indexOf(streak) !== -1) {
                if (typeof InkAnimations !== 'undefined' && InkAnimations.attentionPulse) {
                    InkAnimations.attentionPulse(streakCount);
                }
            }
            this._prevStreak = streak;
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
        ` + this._buildLearningExtras(safeMistakes);
        var reviewNowBtn = analyticsContent.querySelector('[data-cm-action="review-now-analytics"]');
        if (reviewNowBtn) {
            reviewNowBtn.onclick = function() {
                if (typeof App !== 'undefined') App.navigateTo('vocabulary');
            };
        }
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
    },

    _getWordOfTheDay() {
        var words = [
            { chinese: '学习', pinyin: 'xuéxí', meaning: 'to study, to learn' },
            { chinese: '坚持', pinyin: 'jiānchí', meaning: 'to persist, perseverance' },
            { chinese: '进步', pinyin: 'jìnbù', meaning: 'to progress, improvement' },
            { chinese: '努力', pinyin: 'nǔlì', meaning: 'hard work, to strive' },
            { chinese: '练习', pinyin: 'liànxí', meaning: 'to practice' },
            { chinese: '阅读', pinyin: 'yuèdú', meaning: 'to read' },
            { chinese: '听力', pinyin: 'tīnglì', meaning: 'listening comprehension' },
            { chinese: '成功', pinyin: 'chénggōng', meaning: 'success' },
            { chinese: '智慧', pinyin: 'zhìhuì', meaning: 'wisdom' },
            { chinese: '知识', pinyin: 'zhīshi', meaning: 'knowledge' },
            { chinese: '耐心', pinyin: 'nàixīn', meaning: 'patience' },
            { chinese: '勇气', pinyin: 'yǒngqì', meaning: 'courage' },
            { chinese: '自信', pinyin: 'zìxìn', meaning: 'self-confidence' },
            { chinese: '友谊', pinyin: 'yǒuyì', meaning: 'friendship' },
            { chinese: '时间', pinyin: 'shíjiān', meaning: 'time' },
            { chinese: '目标', pinyin: 'mùbiāo', meaning: 'goal, target' },
            { chinese: '方法', pinyin: 'fāngfǎ', meaning: 'method, way' },
            { chinese: '习惯', pinyin: 'xíguàn', meaning: 'habit' },
            { chinese: '思考', pinyin: 'sīkǎo', meaning: 'to think, ponder' },
            { chinese: '记忆', pinyin: 'jìyì', meaning: 'memory' },
            { chinese: '语言', pinyin: 'yǔyán', meaning: 'language' },
            { chinese: '文化', pinyin: 'wénhuà', meaning: 'culture' },
            { chinese: '文字', pinyin: 'wénzì', meaning: 'characters, script' },
            { chinese: '发音', pinyin: 'fāyīn', meaning: 'pronunciation' },
            { chinese: '语法', pinyin: 'yǔfǎ', meaning: 'grammar' },
            { chinese: '理解', pinyin: 'lǐjiě', meaning: 'to understand' },
            { chinese: '每天', pinyin: 'měitiān', meaning: 'every day' },
            { chinese: '开始', pinyin: 'kāishǐ', meaning: 'to start' },
            { chinese: '完成', pinyin: 'wánchéng', meaning: 'to complete' },
            { chinese: '世界', pinyin: 'shìjiè', meaning: 'world' }
        ];
        var now = new Date();
        var start = new Date(now.getFullYear(), 0, 0);
        var diff = now - start;
        var dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
        return words[dayOfYear % words.length];
    },

    _getStudyProverb() {
        var proverbs = [
            { chinese: '学如逆水行舟，不进则退。', pinyin: 'Xué rú nì shuǐ xíng zhōu, bù jìn zé tuì.', meaning: 'Learning is like rowing upstream; not to advance is to drop back.' },
            { chinese: '千里之行，始于足下。', pinyin: 'Qiān lǐ zhī xíng, shǐ yú zú xià.', meaning: 'A journey of a thousand miles begins with a single step.' },
            { chinese: '温故而知新，可以为师矣。', pinyin: 'Wēn gù ér zhī xīn, kě yǐ wéi shī yǐ.', meaning: 'Review the old to learn the new — then you can be a teacher.' },
            { chinese: '学而不思则罔，思而不学则殆。', pinyin: 'Xué ér bù sī zé wǎng, sī ér bù xué zé dài.', meaning: 'Learning without thinking is labor lost; thinking without learning is perilous.' },
            { chinese: '不积跬步，无以至千里。', pinyin: 'Bù jī kuǐ bù, wú yǐ zhì qiān lǐ.', meaning: 'Without accumulating small steps, one cannot reach a thousand miles.' },
            { chinese: '读书破万卷，下笔如有神。', pinyin: 'Dú shū pò wàn juàn, xià bǐ rú yǒu shén.', meaning: 'Read ten thousand books, and your writing will be inspired.' },
            { chinese: '勤能补拙。', pinyin: 'Qín néng bǔ zhuō.', meaning: 'Diligence can make up for lack of talent.' },
            { chinese: '只要功夫深，铁杵磨成针。', pinyin: 'Zhǐ yào gōngfū shēn, tiě chǔ mó chéng zhēn.', meaning: 'With enough effort, an iron pestle can be ground into a needle.' },
            { chinese: '学无止境。', pinyin: 'Xué wú zhǐ jìng.', meaning: 'Learning has no end.' },
            { chinese: '活到老，学到老。', pinyin: 'Huó dào lǎo, xué dào lǎo.', meaning: 'Live until old, learn until old.' },
            { chinese: '三人行，必有我师焉。', pinyin: 'Sān rén xíng, bì yǒu wǒ shī yān.', meaning: 'Among any three people walking, one can be my teacher.' },
            { chinese: '读书百遍，其义自见。', pinyin: 'Dú shū bǎi biàn, qí yì zì xiàn.', meaning: 'Read a book a hundred times, its meaning will reveal itself.' }
        ];
        var d = new Date();
        return proverbs[d.getDate() % proverbs.length];
    },

    _getTodayFocus() {
        if (typeof LevelTracker === 'undefined') return null;
        var weakAreas = LevelTracker.getWeakAreas();
        var categories = weakAreas.categories || [];
        if (categories.length > 0) {
            var worst = categories[0];
            return { name: worst.category, reason: 'Your weakest category at ' + (Number(worst.accuracy) || 0) + '% accuracy' };
        }
        var chars = weakAreas.characters || [];
        if (chars.length > 0) {
            return { name: 'Character Review', reason: chars.length + ' characters need practice' };
        }
        var words = weakAreas.words || [];
        if (words.length > 0) {
            return { name: 'Vocabulary Review', reason: words.length + ' words need practice' };
        }
        return { name: 'Keep Learning', reason: 'All areas look strong — keep going!' };
    },

    _getEstimatedTimeToNextLevel() {
        if (typeof AdvancedLearning === 'undefined') return null;
        var velocity = AdvancedLearning.getLearningVelocity();
        var avgXpPerDay = velocity.avgXpPerDay || 0;
        if (avgXpPerDay <= 0) return null;
        var levelInfo = (typeof StorageManager !== 'undefined') ? StorageManager.getLevelInfo() : null;
        if (!levelInfo) return null;
        var xpNeeded = (levelInfo.nextLevelXp || 0) - (levelInfo.currentXp || 0);
        if (xpNeeded <= 0) return { nextLevel: levelInfo.level + 1, estimatedDays: 0, xpPerDay: avgXpPerDay };
        var estimatedDays = Math.ceil(xpNeeded / avgXpPerDay);
        return { nextLevel: levelInfo.level + 1, estimatedDays: estimatedDays, xpPerDay: avgXpPerDay };
    },

    _getMiniModulePreviews() {
        if (typeof StorageManager === 'undefined') return '';
        var modules = ['vocabulary', 'listening', 'reading', 'grammar'];
        var labels = { vocabulary: 'Vocabulary', listening: 'Listening', reading: 'Reading', grammar: 'Grammar' };
        var icons = { vocabulary: '📝', listening: '🎧', reading: '📖', grammar: '🔤' };
        var totalCounts = { vocabulary: 500, listening: 200, reading: 300, grammar: 100 };

        var cards = modules.map(function(mod) {
            var progressed = 0;
            var totalItems = totalCounts[mod] || 100;
            try {
                var data = StorageManager.getUserData();
                if (data && data.progress && data.progress[mod] && data.progress[mod].completed) {
                    progressed = data.progress[mod].completed.length;
                }
            } catch(e) {}
            var pct = Math.min(100, Math.round((progressed / totalItems) * 100));
            var barColor = pct >= 60 ? '#2ecc71' : pct >= 30 ? '#f39c12' : '#e74c3c';
            return '<div class="module-preview-card">' +
                '<span class="mp-icon">' + (icons[mod] || '📚') + '</span>' +
                '<div class="mp-info">' +
                    '<div class="mp-name">' + (labels[mod] || mod) + '</div>' +
                    '<div class="mp-bar"><div class="mp-fill" style="width:' + pct + '%; background:' + barColor + '"></div></div>' +
                    '<div class="mp-count">' + progressed + ' / ' + totalItems + '</div>' +
                '</div>' +
            '</div>';
        }).join('');

        return '<div class="analytics-section"><h2>📊 Module Progress</h2><div class="module-previews-grid">' + cards + '</div></div>';
    },

    _buildLearningExtras(mistakesToReview) {
        var html = '';

        var wordOfDay = this._getWordOfTheDay();
        html += '<div class="analytics-section"><h2>📖 Word of the Day</h2><div class="word-of-day-card"><div class="wod-chinese" lang="zh">' + Utils.escapeHtml(wordOfDay.chinese) + '</div><div class="wod-pinyin">' + Utils.escapeHtml(wordOfDay.pinyin) + '</div><div class="wod-meaning">' + Utils.escapeHtml(wordOfDay.meaning) + '</div></div></div>';

        var focusModule = this._getTodayFocus();
        if (focusModule) {
            html += '<div class="analytics-section"><h2>🎯 Today\'s Focus</h2><div class="focus-card"><div class="focus-name">' + Utils.escapeHtml(focusModule.name) + '</div><div class="focus-reason">' + Utils.escapeHtml(focusModule.reason) + '</div></div></div>';
        }

        var proverb = this._getStudyProverb();
        html += '<div class="analytics-section"><h2>🏮 Study Streak Tip</h2><div class="proverb-card"><div class="proverb-chinese" lang="zh">' + Utils.escapeHtml(proverb.chinese) + '</div><div class="proverb-pinyin">' + Utils.escapeHtml(proverb.pinyin) + '</div><div class="proverb-meaning">' + Utils.escapeHtml(proverb.meaning) + '</div></div></div>';

        var timeToNext = this._getEstimatedTimeToNextLevel();
        if (timeToNext !== null) {
            html += '<div class="analytics-section"><h2>⏱️ Next Level</h2><div class="next-level-card"><p>Level ' + timeToNext.nextLevel + ' in ~' + timeToNext.estimatedDays + ' days at your current pace (' + timeToNext.xpPerDay + ' XP/day)</p></div></div>';
        }

        html += this._getMiniModulePreviews();

        if (mistakesToReview > 0) {
            html += '<div class="analytics-section"><h2>🔄 Review Queue</h2><div class="review-queue-card"><div class="mistakes-count">' + mistakesToReview + ' items need review</div><button class="btn btn-primary btn-press review-now-btn" data-cm-action="review-now-analytics" type="button">Review Now</button></div></div>';
        }

        return html;
    }
};

// Export for use in other modules
window.Dashboard = Dashboard;

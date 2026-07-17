// ============================================
// CHINESE MASTER - Dashboard Component
// ============================================

const Dashboard = {
    // Initialize dashboard
    init() {
        this._goalRingAnimated = false;
        this._setGreeting();
        this.update();
        this._checkBackupReminder();
        if (typeof InkAnimations !== 'undefined' && InkAnimations.textSplitReveal) {
            InkAnimations.textSplitReveal('.greeting');
        }
    },

    _checkBackupReminder() {
        var now = Date.now();
        var lastReminder = parseInt(Utils.storage.get('lastBackupReminder', '0'));
        var sevenDays = 7 * 24 * 60 * 60 * 1000;
        if (now - lastReminder > sevenDays) {
            var userData = StorageManager.getUserData();
            if (userData && userData.level >= 3) {
                setTimeout(function() {
                    Utils.showToast('\uD83D\uDCBE Remember to export your progress backup! Open Settings \u2192 Export', 'info');
                }, 6000);
            }
            Utils.storage.set('lastBackupReminder', String(now));
        }
    },

    _setGreeting() {
        var greetingEl = document.getElementById('greeting');
        if (!greetingEl) return;
        var hour = new Date().getHours();
        var text = hour < 12 ? '\u65e9\u4e0a\u597d \u00b7 Good morning'
            : hour < 18 ? '\u4e0b\u5348\u597d \u00b7 Good afternoon'
            : '\u665a\u4e0a\u597d \u00b7 Good evening';
        greetingEl.textContent = text;
    },

    // Update dashboard data
    update() {
        // Guard against rapid re-entry (e.g. from navigateTo + init)
        if (this._updating) return;
        this._updating = true;

        try {
            // Cancel any pending rAF from previous _renderSkillsOverview
            if (this._skillsRafId) { cancelAnimationFrame(this._skillsRafId); this._skillsRafId = null; }

            // Clear any pending counter-bounce timeouts
            if (this._counterBounceTimers) {
                this._counterBounceTimers.forEach(function(id) { clearTimeout(id); });
                this._counterBounceTimers = [];
            }

            var stats, levelInfo, dailyGoal, weeklyStats, recentActivities;
            try { stats = StorageManager.getStatistics(); } catch(e) { stats = { today: {}, streak: 0, totalWords: 0, listeningCompleted: 0, readingCompleted: 0, totalXp: 0 }; }
            try { levelInfo = StorageManager.getLevelInfo(); } catch(e) { levelInfo = { level: 1, currentXp: 0, nextLevelXp: 100, progress: 0 }; }
            try { dailyGoal = ProgressTracker.getDailyGoalProgress(); } catch(e) { dailyGoal = { overall: 0, listening: { current: 0 }, reading: { current: 0 }, vocabulary: { current: 0 } }; }
            try { weeklyStats = ProgressTracker.getWeeklyStats(); } catch(e) { weeklyStats = []; }
            try { recentActivities = StorageManager.getRecentActivities(5); } catch(e) { recentActivities = []; }

            this._renderHero(stats, levelInfo);
            this.updateStats(stats);
            this.updateLevelInfo(levelInfo);
            this.updateDailyGoal(dailyGoal);
            this._renderWeeklyChart(weeklyStats);
            this._renderHeatmap();
            this.updateRecentActivities(recentActivities);
            this.updateStreak(stats.streak);
            this._renderSkillsOverview();
            this.updateReviewStats();
            this.setupSmartReview();
            this._renderProverb();
            this._renderMissionsWidget();
            this._renderDailyChallenge();
            this._renderStreakFreezes();

            // Update action card progress badges
            this._updateActionCardBadges();

            if (typeof InkAnimations !== 'undefined') {
                var dashboardModule = document.getElementById('module-dashboard');
                if (dashboardModule && InkAnimations.moduleHeroReveal) {
                    InkAnimations.moduleHeroReveal(dashboardModule);
                }
                var statsGrid = document.querySelector('.dashboard-grid');
                if (statsGrid && InkAnimations.entranceStagger) {
                    InkAnimations.entranceStagger(statsGrid, { y: 24, duration: 0.5, stagger: 0.08, delay: 0.2 });
                }
                var skillsSection = document.querySelector('.skills-overview');
                if (skillsSection && InkAnimations.slideInPanel) {
                    InkAnimations.slideInPanel(skillsSection, 'right');
                }
                var smartReviewSection = document.querySelector('.smart-review-section');
                if (smartReviewSection && InkAnimations.slideInPanel) {
                    InkAnimations.slideInPanel(smartReviewSection, 'down');
                }
                var weeklySection = document.querySelector('.weekly-chart-section');
                if (weeklySection && InkAnimations.entranceStagger) {
                    InkAnimations.entranceStagger(weeklySection, { y: 16, duration: 0.4, stagger: 0.1, delay: 0.3 });
                }
            }
        } finally {
            this._updating = false;
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
        const trendIds = {
            'total-words': 'trend-words',
            'listening-completed': 'trend-listening',
            'reading-completed': 'trend-reading',
            'total-xp': 'trend-xp'
        };

        var todayStats = stats.today || {};
        var yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        var yesterdayStr = yesterday.toISOString().split('T')[0];
        var yesterdayStats = {};
        try {
            var userData = StorageManager.getUserData();
            if (userData && userData.dailyStats && userData.dailyStats[yesterdayStr]) {
                yesterdayStats = userData.dailyStats[yesterdayStr];
            }
        } catch(e) {}

        var useGSAP = typeof InkAnimations !== 'undefined' && InkAnimations.countUp;
        var prevValues = this._prevStatValues || {};

        var trendMap = {
            'total-words': { today: todayStats.vocabulary || 0, yesterday: yesterdayStats.vocabulary || 0 },
            'listening-completed': { today: todayStats.listening || 0, yesterday: yesterdayStats.listening || 0 },
            'reading-completed': { today: todayStats.reading || 0, yesterday: yesterdayStats.reading || 0 },
            'total-xp': { today: todayStats.xp || 0, yesterday: yesterdayStats.xp || 0 }
        };

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
                        var that = this;
                        (function(e) {
                            var tid = setTimeout(function() { InkAnimations.counterBounce(e); }, delay);
                            if (!that._counterBounceTimers) that._counterBounceTimers = [];
                            that._counterBounceTimers.push(tid);
                        })(el);
                    }
                }
            }
            prevValues[id] = value;

            var trendEl = document.getElementById(trendIds[id]);
            if (trendEl) {
                var todayVal = trendMap[id].today;
                var yesterdayVal = trendMap[id].yesterday;
                var delta = todayVal - yesterdayVal;
                if (todayVal === 0 && yesterdayVal === 0) {
                    trendEl.textContent = '—';
                    trendEl.className = 'stats-trend neutral';
                    trendEl.setAttribute('title', 'No recent activity');
                } else if (delta > 0) {
                    trendEl.textContent = '↑ +' + delta;
                    trendEl.className = 'stats-trend up';
                    trendEl.setAttribute('title', 'Up ' + delta + ' vs yesterday');
                } else if (delta < 0) {
                    trendEl.textContent = '↓ ' + delta;
                    trendEl.className = 'stats-trend down';
                    trendEl.setAttribute('title', 'Down ' + Math.abs(delta) + ' vs yesterday');
                } else if (todayVal > 0) {
                    trendEl.textContent = '= ' + todayVal;
                    trendEl.className = 'stats-trend neutral';
                    trendEl.setAttribute('title', 'Same as yesterday');
                } else {
                    trendEl.textContent = '—';
                    trendEl.className = 'stats-trend neutral';
                    trendEl.setAttribute('title', 'No activity today');
                }
            }
        });
        this._prevStatValues = prevValues;
    },

    // Update level information
    updateLevelInfo(levelInfo) {
        const levelElement = document.getElementById('user-level');
        const xpProgress = document.getElementById('xp-progress');
        const currentXp = document.getElementById('current-xp');
        const nextLevelXp = document.getElementById('next-level-xp');

        var prevLevel = this._prevLevel || 0;
        var justLeveledUp = levelInfo.level > prevLevel && prevLevel > 0;

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

        if (justLeveledUp) {
            this._prevLevel = levelInfo.level;
            Utils.showConfetti({ count: 100 });
            Utils.showToast('\uD83C\uDFC6 Level ' + levelInfo.level + '!', 'success');
        }
        if (prevLevel === 0) this._prevLevel = levelInfo.level;
    },

    // Update daily goal
    updateDailyGoal(dailyGoal) {
        var goalFill = document.getElementById('goal-fill');
        var goalPercent = document.getElementById('goal-percent');

        if (goalFill) {
            var r = goalFill.r ? goalFill.r.baseVal.value : 40;
            var circumference = 2 * Math.PI * r;
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

        if (!activities || activities.length === 0) {
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
                try { Utils.showToast('\uD83D\uDD25 ' + streak + '-day streak!', 'success'); } catch (_) {}
                try { Utils.showConfetti({ count: 80 }); } catch (_) {}
            }
            this._prevStreak = streak;
        }
    },

    // Standalone nav-footer updater — callable from anywhere
    updateNavFooter() {
        var userData = typeof StorageManager !== 'undefined' ? StorageManager.getUserData() : null;
        if (!userData) return;

        var levelEl = document.getElementById('user-level');
        var currentXpEl = document.getElementById('current-xp');
        var nextLevelXpEl = document.getElementById('next-level-xp');
        var xpBar = document.getElementById('xp-progress');
        var streakEl = document.getElementById('streak-count');
        var profileNameEl = document.getElementById('profile-name');
        var profileTextEl = document.getElementById('profile-name-text');

        if (levelEl) levelEl.textContent = userData.level || 1;
        if (profileNameEl) profileNameEl.textContent = (userData.name || 'L').charAt(0).toUpperCase();
        if (profileTextEl) profileTextEl.textContent = userData.name || 'Learner';
        if (streakEl) streakEl.textContent = userData.streak || 0;

        var thresholds = (typeof StorageManager !== 'undefined' && StorageManager.LEVEL_THRESHOLDS)
            ? StorageManager.LEVEL_THRESHOLDS
            : [0, 100, 250, 500, 1000, 1750, 2750, 4000, 5500, 7500,
               10000, 13000, 16500, 20500, 25000, 30000, 35500, 41500, 48000, 55000];
        var lvl = userData.level || 1;
        var currentThreshold = thresholds[lvl - 1] || 0;
        var nextThreshold = thresholds[lvl] || thresholds[thresholds.length - 1];
        var xpInLevel = (userData.xp || 0) - currentThreshold;
        var xpNeeded = nextThreshold - currentThreshold;
        var pct = xpNeeded > 0 ? Math.min(100, Math.round((xpInLevel / xpNeeded) * 100)) : 100;

        if (currentXpEl) currentXpEl.textContent = userData.xp || 0;
        if (nextLevelXpEl) nextLevelXpEl.textContent = nextThreshold;
        if (xpBar) xpBar.style.width = pct + '%';
    },

    // Render skills overview (category performance + key stats)
    _renderSkillsOverview() {
        const content = document.getElementById('skills-content');
        if (!content) return;
        if (typeof LevelTracker === 'undefined') {
            content.innerHTML = '<p class="skills-empty">Skills data loading...</p>';
            return;
        }
        var categoryPerf, allStats;
        try { categoryPerf = LevelTracker.getCategoryPerformance(); } catch(e) { categoryPerf = {}; }
        try { allStats = LevelTracker.getAllStats(); } catch(e) { allStats = {}; }

        var entries = Object.entries(categoryPerf).slice(0, 5);
        if (entries.length === 0) {
            content.innerHTML =
                '<div class="skills-empty">' +
                    '<div class="skills-empty-icon" aria-hidden="true">🧭</div>' +
                    '<p>No skill data yet. Complete a few exercises to see your strengths here.</p>' +
                '</div>' +
                '<div class="skills-stat-row">' +
                    '<div class="skills-stat-pill"><div class="pill-value">—</div><div class="pill-label">Accuracy</div></div>' +
                    '<div class="skills-stat-pill"><div class="pill-value">0</div><div class="pill-label">Characters</div></div>' +
                    '<div class="skills-stat-pill"><div class="pill-value">0</div><div class="pill-label">Chars/Min</div></div>' +
                '</div>';
            return;
        }

        var catIcons = {
            listening: '🎧', reading: '📖', vocabulary: '📝',
            grammar: '🔤', speaking: '🎤', pronunciation: '🗣️'
        };
        var catHtml = '';
        entries.forEach(function(entry, idx) {
            var cat = entry[0];
            var data = entry[1];
            var acc = Math.max(0, Math.min(100, Number(data.accuracy) || 0));
            var barColor = acc >= 80 ? '#5aab8a' : acc >= 60 ? '#d4952b' : '#d4432d';
            var icon = catIcons[cat.toLowerCase()] || '📚';
            var delay = (idx * 0.08).toFixed(2);
            catHtml += '<div class="category-row">' +
                '<div class="category-row-head">' +
                    '<span class="category-name"><span class="category-icon" aria-hidden="true">' + icon + '</span>' + Utils.escapeHtml(cat) + '</span>' +
                    '<span class="category-accuracy" style="color:' + barColor + ';">' + acc + '%</span>' +
                '</div>' +
                '<div class="category-bar"><div class="category-fill" data-target="' + acc + '" style="width:0%; background:' + barColor + '; transition: width 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ' + delay + 's;"></div></div>' +
                '<span class="category-stats">' + (Number(data.correct) || 0) + '/' + (Number(data.total) || 0) + ' correct</span>' +
                '</div>';
        });

        var safeAccuracy = Math.max(0, Math.min(100, Number(allStats.accuracy) || 0));
        var safeChars = Number(allStats.totalCharactersLearned) || 0;
        var safeSpeed = Number(allStats.readingSpeed && allStats.readingSpeed.speed) || 0;

        content.innerHTML =
            '<div class="skills-grid">' + catHtml + '</div>' +
            '<div class="skills-stat-row">' +
                '<div class="skills-stat-pill"><div class="pill-value">' + safeAccuracy + '%</div><div class="pill-label">Accuracy</div></div>' +
                '<div class="skills-stat-pill"><div class="pill-value">' + safeChars + '</div><div class="pill-label">Characters</div></div>' +
                '<div class="skills-stat-pill"><div class="pill-value">' + safeSpeed + '</div><div class="pill-label">Chars/Min</div></div>' +
            '</div>';

        // Animate category fills from 0 → target on next frame
        var fills = content.querySelectorAll('.category-fill');
        if (fills.length && typeof requestAnimationFrame !== 'undefined') {
            var self = this;
            this._skillsRafId = requestAnimationFrame(function() {
                self._skillsRafId = null;
                fills.forEach(function(f) {
                    var t = f.getAttribute('data-target') || '0';
                    f.style.width = t + '%';
                });
            });
        }
    },

    // Update review stats
    updateReviewStats() {
        var reviewStats = document.getElementById('review-stats');
        if (!reviewStats) return;

        if (typeof SM2 === 'undefined') {
            reviewStats.innerHTML = '<p style="color:var(--text-secondary);">Review stats loading...</p>';
            return;
        }

        var deckNames = ['hsk1', 'hsk2', 'hsk3', 'hsk4', 'hsk5'];
        var combinedStats = SM2.getAllDeckStats(deckNames);
        var mTotal = Utils.escapeHtml(combinedStats.total);
        var mNew = Utils.escapeHtml(combinedStats.new);
        var mRate = Utils.escapeHtml(combinedStats.retentionRate);
        var mDue = Utils.escapeHtml(combinedStats.dueToday);

        reviewStats.innerHTML = [
            '<div class="review-stats-grid">',
                '<div class="review-stat-item">',
                    '<div class="review-stat-value">' + mTotal + '</div>',
                    '<div class="review-stat-label">Total Cards</div>',
                '</div>',
                '<div class="review-stat-item">',
                    '<div class="review-stat-value">' + mNew + '</div>',
                    '<div class="review-stat-label">New</div>',
                '</div>',
                '<div class="review-stat-item">',
                    '<div class="review-stat-value">' + mRate + '%</div>',
                    '<div class="review-stat-label">Retention Rate</div>',
                '</div>',
                '<div class="review-stat-item">',
                    '<div class="review-stat-value">' + mDue + '</div>',
                    '<div class="review-stat-label">Due for Review</div>',
                '</div>',
            '</div>'
        ].join('');
    },

    // Setup smart review
    setupSmartReview() {
        if (this._smartReviewSetup) return;
        this._smartReviewSetup = true;

        var startBtn = document.getElementById('start-smart-review');
        var viewBtn = document.getElementById('view-mistakes');

        if (startBtn) {
            startBtn.addEventListener('click', function() {
                var deckNames = ['hsk1', 'hsk2', 'hsk3', 'hsk4', 'hsk5'];
                var allCards = [];
                deckNames.forEach(function(name) {
                    var cards = SM2.loadCards(name);
                    allCards = allCards.concat(cards);
                });
                var session = SM2.generateSession(allCards, {
                    maxNew: 10,
                    maxReview: 50,
                    includeNew: true,
                    includeReview: true,
                    forceNew: true
                });

                var newCount = Utils.escapeHtml(session.types.new);
                var reviewCount = Utils.escapeHtml(session.types.review);
                var totalCount = Utils.escapeHtml(session.cards.length);
                var estimatedTime = Utils.escapeHtml(Math.round(session.cards.length * 0.5));

                App.showModal(
                    '<div class="smart-review-modal">' +
                        '<h2 style="color:var(--text-primary);">\uD83E\uDDE0 Smart Review Session</h2>' +
                        '<p style="color:var(--text-secondary);">Spaced repetition review from SM2 decks</p>' +
                        '<div class="session-stats">' +
                            '<div class="session-stat">' +
                                '<span class="stat-value">' + newCount + '</span>' +
                                '<span class="stat-label">New Words</span>' +
                            '</div>' +
                            '<div class="session-stat">' +
                                '<span class="stat-value">' + reviewCount + '</span>' +
                                '<span class="stat-label">Review</span>' +
                            '</div>' +
                        '</div>' +
                        '<div class="session-info">' +
                            '<p>\uD83D\uDCCA Total items: ' + totalCount + '</p>' +
                            '<p>\u23F1\uFE0F Estimated time: ' + estimatedTime + ' minutes</p>' +
                        '</div>' +
                        '<div class="modal-actions">' +
                            '<button type="button" class="btn btn-primary" data-cm-action="start-review">Start Review</button>' +
                            '<button type="button" class="btn btn-secondary" data-cm-action="cancel-review">Cancel</button>' +
                        '</div>' +
                    '</div>'
                );
                var modal = document.getElementById('modal');
                if (!modal) return;
                var modalStartBtn = modal.querySelector('[data-cm-action="start-review"]');
                var cancelBtn = modal.querySelector('[data-cm-action="cancel-review"]');
                if (modalStartBtn) modalStartBtn.addEventListener('click', function() { App.closeModal(); App.navigateTo('vocabulary'); });
                if (cancelBtn) cancelBtn.addEventListener('click', function() { App.closeModal(); });
            });
        }

        if (viewBtn) {
            viewBtn.addEventListener('click', () => {
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
                var modal = document.getElementById('modal');
                if (!modal) return;
                var closeBtn = modal.querySelector('[data-cm-action="close-mistakes"]');
                if (closeBtn) closeBtn.addEventListener('click', function() { App.closeModal(); });
            });
        }
    },

    // Render hero banner
    _renderHero(stats, levelInfo) {
        var userData;
        try { userData = StorageManager.getUserData(); } catch(e) { userData = {}; }
        var heroSubtitle = document.getElementById('hero-subtitle');
        var streakCount = document.getElementById('hero-streak-count');
        var xpToday = document.getElementById('hero-xp-today');
        var levelNum = document.getElementById('hero-level-num');
        var levelTitle = document.getElementById('hero-level-title');
        var xpProgress = document.getElementById('hero-xp-progress');
        var xpText = document.getElementById('hero-xp-text');

        var todayStats = stats.today || {};
        var levelTitles = StorageManager.LEVEL_TITLES;

        if (heroSubtitle) {
            heroSubtitle.textContent = this._buildHeroSubtitle(stats, levelInfo, userData);
        }
        if (streakCount) {
            streakCount.textContent = stats.streak;
            streakCount.setAttribute('aria-label', stats.streak + ' day streak');
        }
        if (xpToday) {
            var todayXpVal = todayStats.xp || 0;
            xpToday.textContent = todayXpVal;
            xpToday.setAttribute('aria-label', todayXpVal + ' XP earned today');
        }

        var lvl = levelInfo.level;
        if (levelNum) levelNum.textContent = lvl;
        if (levelTitle) levelTitle.textContent = (levelTitles[lvl - 1] || 'Beginner');

        if (xpText) xpText.textContent = levelInfo.currentXp + ' / ' + levelInfo.nextLevelXp + ' XP';
        if (xpProgress) {
            xpProgress.style.width = levelInfo.progress + '%';
            xpProgress.setAttribute('aria-valuenow', String(Math.round(levelInfo.progress)));
            xpProgress.setAttribute('aria-valuemin', '0');
            xpProgress.setAttribute('aria-valuemax', '100');
        }
    },

    // Build contextual hero subtitle based on streak, time of day, level
    _buildHeroSubtitle(stats, levelInfo, userData) {
        var streak = stats.streak || 0;
        var todayStats = stats.today || {};
        var todayXp = todayStats.xp || 0;
        var hour = new Date().getHours();
        var name = (userData && userData.name) ? userData.name : '';

        if (streak >= 30) return name ? name + ", you're on a " + streak + "-day streak. Legendary." : "A " + streak + "-day streak. Legendary discipline.";
        if (streak >= 7)  return (name ? name + ", " : "") + streak + " days strong. Keep the flame alive.";
        if (streak === 0 && todayXp === 0) {
            if (hour < 12) return "A fresh morning. A perfect time to begin.";
            if (hour < 18) return "Afternoon ahead. Pick up where you left off.";
            return "Evening session. Even five minutes counts.";
        }
        if (todayXp > 0 && streak > 0) return "You've earned " + todayXp + " XP today. Streak at " + streak + ".";
        if (todayXp > 0) return "You've earned " + todayXp + " XP today. Keep going.";
        if (streak > 0) return "Streak at " + streak + " days. Earn XP to extend it today.";
        return "Continue your Chinese learning journey";
    },

    _renderHeatmap() {
        const heatmapEl = document.getElementById('activity-heatmap');
        if (!heatmapEl) return;

        let userData;
        try { userData = StorageManager.getUserData(); } catch(e) { userData = {}; }
        const dailyStats = userData.dailyStats || {};

        const today = new Date();
        const days = 30; // Show last 30 days
        let html = '';

        // Find max XP for scaling opacity
        let maxDailyXp = 1;
        for (let i = days - 1; i >= 0; i--) {
            const d = new Date(today);
            d.setDate(today.getDate() - i);
            const dateStr = d.toISOString().split('T')[0];
            const xp = dailyStats[dateStr] ? (dailyStats[dateStr].xp || 0) : 0;
            if (xp > maxDailyXp) maxDailyXp = xp;
        }

        for (let i = days - 1; i >= 0; i--) {
            const d = new Date(today);
            d.setDate(today.getDate() - i);
            const dateStr = d.toISOString().split('T')[0];
            const xp = dailyStats[dateStr] ? (dailyStats[dateStr].xp || 0) : 0;

            let bg = 'rgba(255,255,255,0.05)'; // Empty state
            let title = dateStr + ': No activity';

            if (xp > 0) {
                // Scale opacity from 0.3 to 1.0 based on max XP
                let opacity = 0.3 + (xp / maxDailyXp) * 0.7;
                if (opacity > 1) opacity = 1;
                bg = 'rgba(90, 171, 138, ' + opacity + ')'; // Using success color
                title = dateStr + ': ' + xp + ' XP';
            }

            html += '<div class="heatmap-cell" style="width: 14px; height: 14px; border-radius: 3px; background: ' + bg + '; cursor: pointer;" title="' + title + '"></div>';
        }

        heatmapEl.innerHTML = html;

        // Add subtle hover effect if desired (optional)
        const cells = heatmapEl.querySelectorAll('.heatmap-cell');
        cells.forEach(cell => {
            cell.addEventListener('mouseenter', () => {
                cell.style.transform = 'scale(1.2)';
                cell.style.zIndex = '2';
                cell.style.boxShadow = '0 2px 4px rgba(0,0,0,0.5)';
            });
            cell.addEventListener('mouseleave', () => {
                cell.style.transform = '';
                cell.style.zIndex = '';
                cell.style.boxShadow = '';
            });
            // Also need transition property
            cell.style.transition = 'transform 0.1s ease, box-shadow 0.1s ease';
        });
    },

    // Render weekly activity chart
    _renderWeeklyChart(weeklyStats) {
        var chartEl = document.getElementById('weekly-chart');
        var summaryEl = document.getElementById('weekly-summary');
        if (!chartEl || !summaryEl) return;

        var maxXp = Math.max.apply(null, weeklyStats.map(function(d) { return d.xp; }).concat([1]));
        var totalXp = weeklyStats.reduce(function(sum, d) { return sum + d.xp; }, 0);
        var todayIndex = weeklyStats.length - 1;
        var activeDays = weeklyStats.filter(function(d) { return d.xp > 0; }).length;

        var barsHtml = weeklyStats.map(function(day, i) {
            var heightPct = maxXp > 0 ? Math.max(4, Math.round((day.xp / maxXp) * 100)) : 4;
            var isToday = i === todayIndex;
            var cls = isToday ? 'active' : (day.xp > 0 ? 'has-activity' : 'inactive');
            var valueLabel = day.xp > 0 ? day.xp : '';
            var titleTxt = Utils.escapeHtml(day.day) + ': ' + day.xp + ' XP' + (isToday ? ' (today)' : '');
            return '<div class="weekly-bar-wrap">' +
                '<div class="weekly-bar-value">' + valueLabel + '</div>' +
                '<div class="weekly-bar ' + cls + '" style="height:' + heightPct + '%" title="' + titleTxt + '"></div>' +
                '<div class="weekly-bar-label">' + Utils.escapeHtml(day.day) + '</div>' +
                '</div>';
        }).join('');

        chartEl.innerHTML = barsHtml;

        var avgXp = Math.round(totalXp / 7);
        summaryEl.innerHTML =
            '<div class="weekly-summary-num" id="weekly-summary-num">0</div>' +
            '<div class="weekly-summary-label">XP this week</div>' +
            '<div class="weekly-summary-avg">Avg ' + avgXp + ' XP/day · ' + activeDays + '/7 active</div>';

        // CountUp the weekly summary number
        var numEl = document.getElementById('weekly-summary-num');
        if (numEl) {
            if (typeof InkAnimations !== 'undefined' && InkAnimations.countUp) {
                InkAnimations.countUp(numEl, totalXp, 1.2);
            } else if (typeof Utils !== 'undefined' && Utils.animateNumber) {
                Utils.animateNumber(numEl, totalXp);
            } else {
                numEl.textContent = totalXp;
            }
        }
    },

    // Render daily proverb card
    _renderProverb() {
        var container = document.getElementById('proverb-section');
        if (!container) return;

        var proverb = this._getStudyProverb();
        if (!proverb) return;

        container.innerHTML =
            '<div class="proverb-card">' +
            '<div class="proverb-chinese" lang="zh">' + Utils.escapeHtml(proverb.chinese) + '</div>' +
            '<div class="proverb-pinyin">' + Utils.escapeHtml(proverb.pinyin) + '</div>' +
            '<div class="proverb-meaning">' + Utils.escapeHtml(proverb.meaning) + '</div>' +
            '<div class="proverb-attribution">— 中华谚语 · Chinese Proverb</div>' +
            '</div>';
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

    _renderMissionsWidget() {
        var container = document.getElementById('missions-widget');
        if (!container) return;
        if (typeof Missions !== 'undefined' && Missions.renderWidget) {
            Missions.renderWidget(container);
        }
    },

    _renderDailyChallenge() {
        var container = document.getElementById('daily-challenge-widget');
        if (!container) return;
        if (typeof RecurringRewards !== 'undefined' && RecurringRewards.renderChallengeCard) {
            RecurringRewards.renderChallengeCard(container);
        }
    },

    _renderStreakFreezes() {
        var container = document.getElementById('streak-freeze-widget');
        if (!container) return;
        if (typeof RecurringRewards !== 'undefined' && RecurringRewards.renderFreezeCounter) {
            RecurringRewards.renderFreezeCounter(container);
        }
    },

    _updateActionCardBadges() {
        if (typeof StorageManager === 'undefined') return;
        var userData;
        try { userData = StorageManager.getUserData(); } catch(e) { userData = {}; }
        var progress = userData && userData.progress ? userData.progress : {};
        var mappings = {
            'listening-challenge': 'listening',
            'vocab-review': 'vocabulary',
            'reading-quiz': 'reading',
            'grammar-practice': 'grammar'
        };
        var labels = { listening: 'Listening', vocabulary: 'Vocab', reading: 'Reading', grammar: 'Grammar' };

        Object.keys(mappings).forEach(function(action) {
            var card = document.querySelector('.action-card[data-action="' + action + '"]');
            if (!card) return;
            var existing = card.querySelector('.action-progress-badge');
            if (existing) existing.remove();

            var mod = mappings[action];
            var completed = (progress[mod] && progress[mod].completed) ? progress[mod].completed.length : 0;
            var total = { vocabulary: 500, listening: 200, reading: 300, grammar: 100 }[mod] || 100;
            var pct = Math.min(100, Math.round((completed / total) * 100));

            var badge = document.createElement('span');
            badge.className = 'action-progress-badge';
            var color = pct >= 60 ? '#5aab8a' : pct >= 30 ? '#d4952b' : '#d4432d';
            badge.style.cssText = 'display:inline-block;margin-top:6px;padding:3px 10px;border-radius:999px;font-size:11px;font-weight:600;background:' + color + '20;color:' + color + ';border:1px solid ' + color + '40';
            badge.textContent = (labels[mod] || mod) + ': ' + completed + '/' + total;
            card.appendChild(badge);
        });
    }
};

// Expose standalone nav updater globally
window.updateNavFooter = function() { Dashboard.updateNavFooter(); };

// Export for use in other modules
window.Dashboard = Dashboard;

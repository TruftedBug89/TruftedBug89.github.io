// ============================================
// CHINESE MASTER — Placement Test Component
// Adaptive test that estimates HSK level (1-5)
// ============================================

const PlacementTest = {
    // Config
    TOTAL_QUESTIONS: 20,
    START_LEVEL: 2,

    // State
    view: 'intro',        // 'intro' | 'test' | 'result'
    ability: 2.0,         // floating-point ability estimate (0.5 - 5.5)
    questionQueue: [],    // array of selected question objects
    currentIdx: 0,
    selectedOption: null,
    answered: false,
    correctCount: 0,
    usedIds: [],
    perLevelStats: {},    // { 1: {correct, total}, 2: {...}, ... }
    startTime: null,

    // =====================
    // Public — entry points
    // =====================

    init() {
        this.showIntro();
    },

    showIntro() {
        this.view = 'intro';
        this._resetState();
        this._renderIntro();
    },

    start() {
        this._resetState();
        this.ability = this.START_LEVEL;
        this.startTime = Date.now();
        this.view = 'test';

        // Pre-select the first question
        this._selectNextQuestion();
        this._renderTest();
    },

    // =====================
    // Adaptive engine
    // =====================

    _resetState() {
        this.ability = this.START_LEVEL;
        this.questionQueue = [];
        this.currentIdx = 0;
        this.selectedOption = null;
        this.answered = false;
        this.correctCount = 0;
        this.usedIds = [];
        this.perLevelStats = { 1: { correct: 0, total: 0 }, 2: { correct: 0, total: 0 }, 3: { correct: 0, total: 0 }, 4: { correct: 0, total: 0 }, 5: { correct: 0, total: 0 } };
        this.startTime = null;
    },

    // Pick the next question based on current ability estimate
    _selectNextQuestion() {
        var level = Math.max(1, Math.min(5, Math.round(this.ability)));
        var q = PlacementBank.getRandomQuestion(level, this.usedIds);
        if (!q) {
            // Fallback: try adjacent levels
            for (var offset = 1; offset <= 4; offset++) {
                var up = Math.min(5, level + offset);
                var down = Math.max(1, level - offset);
                q = PlacementBank.getRandomQuestion(up, this.usedIds);
                if (q) break;
                q = PlacementBank.getRandomQuestion(down, this.usedIds);
                if (q) break;
            }
        }
        if (!q) return false;

        this.questionQueue.push(q);
        this.usedIds.push(q.id);
        return true;
    },

    // Record answer and update ability
    _recordAnswer(isCorrect) {
        var q = this.questionQueue[this.currentIdx];
        var lvl = q.level;

        // Update per-level stats
        if (!this.perLevelStats[lvl]) this.perLevelStats[lvl] = { correct: 0, total: 0 };
        this.perLevelStats[lvl].total++;
        if (isCorrect) {
            this.perLevelStats[lvl].correct++;
            this.correctCount++;
        }

        // Update ability estimate (adaptive step)
        // Correct: step up, bigger jump for lower-level questions
        // Wrong: step down, bigger drop for higher-level questions
        if (isCorrect) {
            this.ability += 0.45 + (5 - lvl) * 0.05;
        } else {
            this.ability -= 0.35 + (lvl - 1) * 0.05;
        }
        this.ability = Math.max(0.5, Math.min(5.5, this.ability));
    },

    // Calculate final HSK level from ability + per-level stats
    _computeFinalLevel() {
        // Method 1: round the ability estimate
        var abilityLevel = Math.max(1, Math.min(5, Math.round(this.ability)));

        // Method 2: highest level with >=50% correct (min 3 questions answered)
        var masteryLevel = 1;
        for (var lvl = 1; lvl <= 5; lvl++) {
            var stats = this.perLevelStats[lvl];
            if (stats && stats.total >= 2) {
                var rate = stats.correct / stats.total;
                if (rate >= 0.5) masteryLevel = lvl;
            }
        }

        // Take the higher of the two estimates
        return Math.max(abilityLevel, masteryLevel);
    },

    // Generate study recommendations based on level
    _getRecommendations(level) {
        var recs = [];
        if (level <= 2) {
            recs.push({ icon: '📝', text: 'Start with HSK 1-2 vocabulary flashcards', action: 'vocabulary' });
            recs.push({ icon: '🎧', text: 'Practice basic listening comprehension', action: 'listening' });
            recs.push({ icon: '🔤', text: 'Learn essential grammar patterns (HSK 1-2)', action: 'grammar' });
        } else if (level === 3) {
            recs.push({ icon: '📝', text: 'Expand to HSK 3 vocabulary', action: 'vocabulary' });
            recs.push({ icon: '📖', text: 'Try intermediate reading passages', action: 'reading' });
            recs.push({ icon: '🔤', text: 'Study 是...的 and 把 sentences', action: 'grammar' });
        } else if (level === 4) {
            recs.push({ icon: '📝', text: 'Master HSK 4 vocabulary (1200+ words)', action: 'vocabulary' });
            recs.push({ icon: '📖', text: 'Read longer passages and articles', action: 'reading' });
            recs.push({ icon: '🎤', text: 'Practice shadowing for fluency', action: 'speaking' });
        } else {
            recs.push({ icon: '📝', text: 'Study HSK 5 vocabulary (2500+ words)', action: 'vocabulary' });
            recs.push({ icon: '📖', text: 'Read newspapers and watch Chinese films', action: 'reading' });
            recs.push({ icon: '🎧', text: 'Practice speed listening with native content', action: 'listening' });
        }
        return recs;
    },

    // =====================
    // Rendering
    // =====================

    _getContainer() {
        return document.getElementById('placement-content');
    },

    _renderIntro() {
        var container = this._getContainer();
        if (!container) return;

        var lastResult = this._getSavedResult();

        container.innerHTML =
            '<div class="placement-intro">' +
            '<div class="placement-intro-hero">' +
            '<div class="placement-intro-icon" aria-hidden="true">🎯</div>' +
            '<h2>Placement Test</h2>' +
            '<p class="placement-intro-desc">Find your Chinese level in about 5 minutes. The test adapts to your answers — questions get harder when you\'re right, easier when you\'re wrong.</p>' +
            '</div>' +
            '<div class="placement-intro-features">' +
            '<div class="placement-feature"><span class="placement-feature-icon" aria-hidden="true">📊</span><span><strong>20 questions</strong><br>Across HSK 1-5</span></div>' +
            '<div class="placement-feature"><span class="placement-feature-icon" aria-hidden="true">🧠</span><span><strong>Adaptive</strong><br>Tailored to your level</span></div>' +
            '<div class="placement-feature"><span class="placement-feature-icon" aria-hidden="true">⏱️</span><span><strong>~5 min</strong><br>Quick and focused</span></div>' +
            '</div>' +
            (lastResult ?
                '<div class="placement-last-result">' +
                '<div class="placement-last-result-label">Your last result:</div>' +
                '<div class="placement-last-result-level">' +
                '<span class="placement-level-badge" style="background:' + Utils.escapeHtml(lastResult.color || '#06b6d4') + '20;color:' + Utils.escapeHtml(lastResult.color || '#06b6d4') + ';border-color:' + Utils.escapeHtml(lastResult.color || '#06b6d4') + '40">' + Utils.escapeHtml(lastResult.levelName) + '</span>' +
                '<span class="placement-last-result-title">' + Utils.escapeHtml(lastResult.levelTitle) + '</span>' +
                '<span class="placement-last-result-date">' + Utils.escapeHtml(Utils.formatDate(lastResult.date)) + '</span>' +
                '</div>' +
                '<button type="button" class="btn btn-secondary btn-press placement-retake-btn">Retake Test</button>' +
                '</div>'
                : '') +
            '<button type="button" class="btn btn-primary btn-press placement-start-btn">Start Placement Test →</button>' +
            '</div>';

        // Wire start button
        var startBtn = container.querySelector('.placement-start-btn');
        if (startBtn) {
            startBtn.addEventListener('click', this.start.bind(this));
        }

        // Wire retake button
        var retakeBtn = container.querySelector('.placement-retake-btn');
        if (retakeBtn) {
            retakeBtn.addEventListener('click', this.start.bind(this));
        }

        // Animate
        if (typeof InkAnimations !== 'undefined' && InkAnimations.slideInPanel) {
            var hero = container.querySelector('.placement-intro-hero');
            if (hero) InkAnimations.slideInPanel(hero, 'up');
            var features = container.querySelector('.placement-intro-features');
            if (features && InkAnimations.entranceStagger) {
                InkAnimations.entranceStagger(features, { y: 20, duration: 0.4, stagger: 0.1, delay: 0.2 });
            }
        }
    },

    _renderTest() {
        var container = this._getContainer();
        if (!container) return;

        var q = this.questionQueue[this.currentIdx];
        if (!q) return;

        var progressPct = Math.round((this.currentIdx / this.TOTAL_QUESTIONS) * 100);
        var levelLabel = 'HSK ' + q.level;

        // Shuffle options (keep answer correct)
        var options = Utils.shuffle(q.options.slice());

        var optionsHTML = options.map(function(opt, i) {
            var letter = String.fromCharCode(65 + i); // A, B, C, D
            return '<button type="button" class="placement-option" data-option="' + Utils.escapeAttr(opt) + '">' +
                '<span class="placement-option-letter">' + letter + '</span>' +
                '<span class="placement-option-text">' + Utils.escapeHtml(opt) + '</span>' +
                '</button>';
        }).join('');

        container.innerHTML =
            '<div class="placement-test">' +
            '<div class="placement-header">' +
            '<button type="button" class="back-btn placement-quit-btn">← Quit</button>' +
            '<div class="placement-progress-info">' +
            '<span class="placement-q-count">Question ' + (this.currentIdx + 1) + ' / ' + this.TOTAL_QUESTIONS + '</span>' +
            '<span class="placement-level-tag">' + Utils.escapeHtml(levelLabel) + '</span>' +
            '</div>' +
            '</div>' +
            '<div class="placement-progress-bar">' +
            '<div class="placement-progress-fill" style="width:' + progressPct + '%"></div>' +
            '</div>' +
            '<div class="placement-question-card">' +
            '<div class="placement-question-text">' + Utils.escapeHtml(q.question) + '</div>' +
            '<div class="placement-options">' + optionsHTML + '</div>' +
            '</div>' +
            '<div class="placement-controls">' +
            '<button type="button" class="btn btn-primary btn-press placement-next-btn hidden">Next →</button>' +
            '</div>' +
            '</div>';

        // Wire option buttons
        var self = this;
        container.querySelectorAll('.placement-option').forEach(function(btn) {
            btn.addEventListener('click', function() {
                if (self.answered) return;
                self._handleAnswer(btn);
            });
        });

        // Wire next button
        var nextBtn = container.querySelector('.placement-next-btn');
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                self._handleNext();
            });
        }

        // Wire quit button
        var quitBtn = container.querySelector('.placement-quit-btn');
        if (quitBtn) {
            quitBtn.addEventListener('click', function() {
                if (typeof App !== 'undefined' && typeof App.confirmModal === 'function') {
                    App.confirmModal({
                        title: 'Quit placement test?',
                        message: 'Your progress in this test will be lost.',
                        confirmLabel: 'Quit',
                        cancelLabel: 'Keep going',
                        destructive: true,
                        onConfirm: function() { self.showIntro(); }
                    });
                } else {
                    self.showIntro();
                }
            });
        }

        // Animate question card
        if (typeof InkAnimations !== 'undefined' && InkAnimations.slideInPanel) {
            var card = container.querySelector('.placement-question-card');
            if (card) InkAnimations.slideInPanel(card, 'up');
        }
    },

    _handleAnswer(selectedBtn) {
        this.answered = true;
        this.selectedOption = selectedBtn.dataset.option;
        var q = this.questionQueue[this.currentIdx];
        var isCorrect = (this.selectedOption === q.answer);

        // Mark options
        var container = this._getContainer();
        container.querySelectorAll('.placement-option').forEach(function(btn) {
            btn.classList.add('disabled');
            var opt = btn.dataset.option;
            if (opt === q.answer) {
                btn.classList.add('correct');
            } else if (opt === selectedBtn.dataset.option) {
                btn.classList.add('incorrect');
            }
        });

        // Record and update ability
        this._recordAnswer(isCorrect);

        // Show feedback + next button
        var feedbackClass = isCorrect ? 'placement-feedback-correct' : 'placement-feedback-incorrect';
        var feedbackIcon = isCorrect ? '✓' : '✗';
        var feedbackText = isCorrect ? 'Correct!' : 'Answer: ' + q.answer;

        var card = container.querySelector('.placement-question-card');
        if (card) {
            var feedback = document.createElement('div');
            feedback.className = 'placement-feedback ' + feedbackClass;
            feedback.innerHTML = '<span class="placement-feedback-icon">' + feedbackIcon + '</span><span>' + Utils.escapeHtml(feedbackText) + '</span>';
            card.appendChild(feedback);

            if (typeof InkAnimations !== 'undefined' && InkAnimations.slideInPanel) {
                InkAnimations.slideInPanel(feedback, 'up');
            }
        }

        // Show next button
        var nextBtn = container.querySelector('.placement-next-btn');
        if (nextBtn) {
            nextBtn.classList.remove('hidden');
            if (typeof InkAnimations !== 'undefined' && InkAnimations.slideInPanel) {
                InkAnimations.slideInPanel(nextBtn, 'up');
            }
        }

        // Play sound
        if (typeof Utils !== 'undefined' && Utils.playSound) {
            Utils.playSound(isCorrect ? 'correct' : 'incorrect');
        }
    },

    _handleNext() {
        this.currentIdx++;
        this.answered = false;
        this.selectedOption = null;

        // Check if test is complete
        if (this.currentIdx >= this.TOTAL_QUESTIONS) {
            this._finishTest();
            return;
        }

        // Select next adaptive question
        this._selectNextQuestion();
        this._renderTest();
    },

    _finishTest() {
        this.view = 'result';
        var finalLevel = this._computeFinalLevel();
        var levelMeta = PlacementBank.levels[finalLevel];
        var accuracy = Math.round((this.correctCount / this.TOTAL_QUESTIONS) * 100);
        var durationSec = Math.round((Date.now() - this.startTime) / 1000);
        var durationMin = Math.round(durationSec / 60);

        var result = {
            level: finalLevel,
            levelName: levelMeta.name,
            levelTitle: levelMeta.title,
            levelDesc: levelMeta.desc,
            color: levelMeta.color,
            score: this.correctCount,
            total: this.TOTAL_QUESTIONS,
            accuracy: accuracy,
            duration: durationSec,
            date: new Date().toISOString(),
            perLevel: this.perLevelStats
        };

        // Save to storage
        this._saveResult(result);

        // Award XP
        if (typeof StorageManager !== 'undefined' && StorageManager.addXP) {
            StorageManager.addXP(50 + finalLevel * 10);
        }
        if (typeof StorageManager !== 'undefined' && StorageManager.addActivity) {
            StorageManager.addActivity('placement', 'Completed placement test — ' + levelMeta.name + ' (' + levelMeta.title + ')', 50 + finalLevel * 10);
        }

        this._renderResult(result);
    },

    _renderResult(result) {
        var container = this._getContainer();
        if (!container) return;

        var recs = this._getRecommendations(result.level);
        var recsHTML = recs.map(function(r) {
            return '<button type="button" class="placement-rec-item" data-action="' + Utils.escapeAttr(r.action) + '">' +
                '<span class="placement-rec-icon" aria-hidden="true">' + Utils.escapeHtml(r.icon) + '</span>' +
                '<span class="placement-rec-text">' + Utils.escapeHtml(r.text) + '</span>' +
                '<span class="placement-rec-arrow" aria-hidden="true">→</span>' +
                '</button>';
        }).join('');

        // Per-level breakdown
        var breakdownHTML = '';
        for (var lvl = 1; lvl <= 5; lvl++) {
            var stats = result.perLevel[lvl] || { correct: 0, total: 0 };
            var rate = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
            var barColor = rate >= 60 ? '#10b981' : rate >= 40 ? '#f59e0b' : '#f43f5e';
            breakdownHTML +=
                '<div class="placement-breakdown-row">' +
                '<span class="placement-breakdown-label">HSK ' + lvl + '</span>' +
                '<div class="placement-breakdown-bar">' +
                '<div class="placement-breakdown-fill" style="width:' + rate + '%;background:' + barColor + '"></div>' +
                '</div>' +
                '<span class="placement-breakdown-score">' + stats.correct + '/' + stats.total + '</span>' +
                '</div>';
        }

        container.innerHTML =
            '<div class="placement-result">' +
            '<div class="placement-result-hero">' +
            '<div class="placement-result-emoji" aria-hidden="true">🎉</div>' +
            '<div class="placement-result-label">Your estimated level:</div>' +
            '<div class="placement-result-level" style="color:' + Utils.escapeHtml(result.color) + '">' + Utils.escapeHtml(result.levelName) + '</div>' +
            '<div class="placement-result-title">' + Utils.escapeHtml(result.levelTitle) + '</div>' +
            '<div class="placement-result-desc">' + Utils.escapeHtml(result.levelDesc) + '</div>' +
            '</div>' +
            '<div class="placement-result-stats">' +
            '<div class="placement-stat-item"><span class="placement-stat-value">' + result.score + '/' + result.total + '</span><span class="placement-stat-label">Correct</span></div>' +
            '<div class="placement-stat-item"><span class="placement-stat-value">' + result.accuracy + '%</span><span class="placement-stat-label">Accuracy</span></div>' +
            '<div class="placement-stat-item"><span class="placement-stat-value">~' + Math.max(1, durationMin || 1) + 'm</span><span class="placement-stat-label">Duration</span></div>' +
            '</div>' +
            '<div class="placement-breakdown">' +
            '<h3>Performance by Level</h3>' +
            breakdownHTML +
            '</div>' +
            '<div class="placement-recommendations">' +
            '<h3>Recommended Next Steps</h3>' +
            recsHTML +
            '</div>' +
            '<div class="placement-result-actions">' +
            '<button type="button" class="btn btn-primary btn-press placement-dashboard-btn">Go to Dashboard</button>' +
            '<button type="button" class="btn btn-secondary btn-press placement-retake-result-btn">Retake Test</button>' +
            '</div>' +
            '</div>';

        // Wire recommendation buttons
        container.querySelectorAll('.placement-rec-item').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var action = btn.dataset.action;
                if (typeof App !== 'undefined' && App.navigateTo) {
                    App.navigateTo(action);
                }
            });
        });

        // Wire dashboard button
        var dashBtn = container.querySelector('.placement-dashboard-btn');
        if (dashBtn) {
            dashBtn.addEventListener('click', function() {
                if (typeof App !== 'undefined' && App.navigateTo) App.navigateTo('dashboard');
            });
        }

        // Wire retake button
        var self = this;
        var retakeBtn = container.querySelector('.placement-retake-result-btn');
        if (retakeBtn) {
            retakeBtn.addEventListener('click', function() {
                self.start();
            });
        }

        // Animate
        if (typeof InkAnimations !== 'undefined') {
            var hero = container.querySelector('.placement-result-hero');
            if (hero && InkAnimations.slideInPanel) InkAnimations.slideInPanel(hero, 'up');
            var stats = container.querySelector('.placement-result-stats');
            if (stats && InkAnimations.entranceStagger) {
                InkAnimations.entranceStagger(stats, { y: 20, duration: 0.4, stagger: 0.1, delay: 0.3 });
            }
            var emoji = container.querySelector('.placement-result-emoji');
            if (emoji && window.gsap) {
                window.gsap.fromTo(emoji, { scale: 0, rotation: -30 }, { scale: 1, rotation: 0, duration: 0.7, ease: 'back.out(2)', delay: 0.2 });
            }
        }

        // Confetti for good results
        if (typeof Utils !== 'undefined' && Utils.showConfetti && result.accuracy >= 60) {
            Utils.showConfetti({ count: result.accuracy >= 80 ? 100 : 50 });
        }
        if (typeof Utils !== 'undefined' && Utils.playSound && result.accuracy >= 60) {
            Utils.playSound('levelup');
        }
    },

    // =====================
    // Storage
    // =====================

    _getSavedResult() {
        if (typeof StorageManager === 'undefined') return null;
        var data = StorageManager.getUserData();
        return (data && data.placementResult) ? data.placementResult : null;
    },

    _saveResult(result) {
        if (typeof StorageManager === 'undefined') return;
        var data = StorageManager.getUserData();
        if (!data) return;
        data.placementResult = result;
        StorageManager.setUserData(data);
    }
};

window.PlacementTest = PlacementTest;

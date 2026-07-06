// ============================================
// CHINESE MASTER - Recurring Rewards System
// ============================================

const RecurringRewards = {
    _data: null,
    _storageKey: null,

    loginRewardSchedule: [
        { day: 1, xp: 10, label: 'Day 1', icon: '🌱' },
        { day: 2, xp: 15, label: 'Day 2', icon: '🌿' },
        { day: 3, xp: 20, label: 'Day 3', icon: '🌳' },
        { day: 4, xp: 25, label: 'Day 4', icon: '⭐' },
        { day: 5, xp: 30, label: 'Day 5', icon: '🌟' },
        { day: 6, xp: 40, label: 'Day 6', icon: '💫' },
        { day: 7, xp: 50, label: 'Day 7', icon: '🏆' }
    ],

    init() {
        this._storageKey = this._getKey();
        this._data = this._load();
        this._checkWeekendBonus();
    },

    _getKey() {
        var sid = (typeof SessionManager !== 'undefined') ? SessionManager.getActiveSessionId() : null;
        return sid ? 'recurring_rewards_' + sid : 'recurring_rewards';
    },

    _load() {
        try {
            var raw = localStorage.getItem(this._storageKey);
            if (raw) return JSON.parse(raw);
        } catch (e) {}
        return this._freshData();
    },

    _save() {
        try {
            localStorage.setItem(this._storageKey, JSON.stringify(this._data));
        } catch (e) {}
    },

    _freshData() {
        return {
            loginStreak: 0,
            lastLoginReward: null,
            dailyChallenge: null,
            streakFreezes: 0,
            lastFreezeEarned: null,
            weekendBonusActive: false,
            totalLoginRewards: 0,
            totalChallengesCompleted: 0
        };
    },

    _today() {
        return new Date().toISOString().split('T')[0];
    },

    _isYesterday(dateStr) {
        if (!dateStr) return false;
        var yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        return dateStr === yesterday.toISOString().split('T')[0];
    },

    _checkWeekendBonus() {
        var day = new Date().getDay();
        var isWeekend = day === 0 || day === 6;
        if (isWeekend && !this._data.weekendBonusActive) {
            this._data.weekendBonusActive = true;
            this._save();
        } else if (!isWeekend && this._data.weekendBonusActive) {
            this._data.weekendBonusActive = false;
            this._save();
        }
    },

    checkLogin() {
        var today = this._today();
        if (this._data.lastLoginReward === today) return null;

        if (this._data.lastLoginReward && this._isYesterday(this._data.lastLoginReward)) {
            this._data.loginStreak++;
        } else if (this._data.lastLoginReward) {
            var consumed = this.consumeFreeze();
            if (!consumed) {
                this._data.loginStreak = 1;
            }
        } else {
            this._data.loginStreak = 1;
        }

        var dayInCycle = ((this._data.loginStreak - 1) % 7) + 1;
        var reward = this.loginRewardSchedule[dayInCycle - 1];

        this._data.lastLoginReward = today;
        this._data.totalLoginRewards++;

        if (this._data.loginStreak > 0 && this._data.loginStreak % 7 === 0) {
            this._data.streakFreezes = Math.min(3, (this._data.streakFreezes || 0) + 1);
            this._data.lastFreezeEarned = today;
        }

        this._save();

        if (typeof StorageManager !== 'undefined') {
            StorageManager.addXP(reward.xp);
        }

        return {
            streak: this._data.loginStreak,
            day: dayInCycle,
            reward: reward,
            freezeEarned: this._data.loginStreak % 7 === 0
        };
    },

    consumeFreeze() {
        if (this._data.streakFreezes > 0) {
            this._data.streakFreezes--;
            this._save();
            if (typeof Utils !== 'undefined') {
                Utils.showToast('❄️ Streak freeze used! Streak preserved.', 'info');
            }
            return true;
        }
        return false;
    },

    generateDailyChallenge() {
        var today = this._today();
        if (this._data.dailyChallenge && this._data.dailyChallenge.date === today) {
            return this._data.dailyChallenge;
        }

        var modules = ['listening', 'reading', 'vocabulary', 'grammar', 'speaking'];
        var module = modules[Math.floor(Math.random() * modules.length)];

        var challenges = {
            listening: { description: 'Complete a listening exercise', target: 1, multiplier: 2 },
            reading: { description: 'Complete a reading exercise', target: 1, multiplier: 2 },
            vocabulary: { description: 'Learn 5 new vocabulary words', target: 5, multiplier: 1.5 },
            grammar: { description: 'Complete a grammar lesson', target: 1, multiplier: 2 },
            speaking: { description: 'Complete a speaking exercise', target: 1, multiplier: 2 }
        };

        var c = challenges[module];
        this._data.dailyChallenge = {
            module: module,
            description: c.description,
            target: c.target,
            progress: 0,
            multiplier: c.multiplier,
            completed: false,
            date: today
        };
        this._save();
        return this._data.dailyChallenge;
    },

    recordChallengeActivity(module) {
        if (!this._data.dailyChallenge) return;
        if (this._data.dailyChallenge.date !== this._today()) return;
        if (this._data.dailyChallenge.completed) return;
        if (this._data.dailyChallenge.module !== module) return;

        this._data.dailyChallenge.progress++;
        if (this._data.dailyChallenge.progress >= this._data.dailyChallenge.target) {
            this._data.dailyChallenge.completed = true;
            this._data.totalChallengesCompleted++;

            var bonusXp = 25;
            if (typeof StorageManager !== 'undefined') {
                StorageManager.addXP(bonusXp);
            }
            if (typeof Utils !== 'undefined') {
                Utils.showToast('🎯 Daily challenge complete! +' + bonusXp + ' bonus XP', 'success');
                Utils.playSound('levelup');
            }
        }
        this._save();
    },

    getMultiplier() {
        var mult = 1;
        if (this._data && this._data.weekendBonusActive) {
            mult *= 1.5;
        }
        if (this._data && this._data.dailyChallenge && this._data.dailyChallenge.completed === false) {
            // no extra multiplier here, just tracking
        }
        return mult;
    },

    getStats() {
        if (!this._data) return { loginStreak: 0, streakFreezes: 0, weekendBonusActive: false };
        return {
            loginStreak: this._data.loginStreak || 0,
            streakFreezes: this._data.streakFreezes || 0,
            weekendBonusActive: this._data.weekendBonusActive || false,
            totalLoginRewards: this._data.totalLoginRewards || 0,
            totalChallengesCompleted: this._data.totalChallengesCompleted || 0
        };
    },

    getDailyChallenge() {
        if (!this._data) return null;
        if (!this._data.dailyChallenge || this._data.dailyChallenge.date !== this._today()) {
            return this.generateDailyChallenge();
        }
        return this._data.dailyChallenge;
    },

    showLoginRewardPopup(result) {
        if (!result) return;
        if (typeof App === 'undefined' || typeof App.showModal !== 'function') return;

        var scheduleHtml = this.loginRewardSchedule.map(function(r) {
            var isCurrent = r.day === result.day;
            var isPast = r.day < result.day;
            return '<div class="login-day' + (isCurrent ? ' current' : '') + (isPast ? ' past' : '') + '">' +
                '<div class="login-day-icon">' + r.icon + '</div>' +
                '<div class="login-day-label">' + r.label + '</div>' +
                '<div class="login-day-xp">+' + r.xp + '</div>' +
                '</div>';
        }).join('');

        var freezeHtml = '';
        if (result.freezeEarned) {
            freezeHtml = '<div class="login-freeze-earned">❄️ Streak Freeze earned! (Max 3)</div>';
        }

        App.showModal(
            '<div class="login-reward-modal">' +
                '<div class="login-reward-header">' +
                    '<div class="login-reward-icon">🎁</div>' +
                    '<h2>Daily Login Reward</h2>' +
                    '<p>Day ' + result.streak + ' streak!</p>' +
                '</div>' +
                '<div class="login-reward-schedule">' + scheduleHtml + '</div>' +
                '<div class="login-reward-claimed">' +
                    '<div class="login-xp-amount">+' + result.reward.xp + ' XP</div>' +
                    '<div class="login-xp-label">Claimed today</div>' +
                '</div>' +
                freezeHtml +
                '<div class="login-freeze-count">❄️ Streak Freezes: ' + (this._data.streakFreezes || 0) + '/3</div>' +
                '<button class="btn btn-primary login-close-btn" data-cm-action="close-login">Continue</button>' +
            '</div>'
        );

        var modal = document.getElementById('modal');
        var closeBtn = modal.querySelector('[data-cm-action="close-login"]');
        if (closeBtn) closeBtn.addEventListener('click', function() { App.closeModal(); });

        if (typeof InkAnimations !== 'undefined' && InkAnimations.celebrateLoginReward) {
            InkAnimations.celebrateLoginReward(result);
        }
    },

    renderChallengeCard(container) {
        if (!container) return;
        var challenge = this.getDailyChallenge();
        if (!challenge) return;

        var pct = Math.min(100, Math.round((challenge.progress / challenge.target) * 100));
        var html = '<div class="daily-challenge-card">';
        html += '<div class="challenge-header">';
        html += '<span class="challenge-icon">🎯</span>';
        html += '<span class="challenge-title">Daily Challenge</span>';
        if (this._data.weekendBonusActive) {
            html += '<span class="challenge-bonus">1.5x Weekend!</span>';
        }
        html += '</div>';
        html += '<div class="challenge-desc">' + Utils.escapeHtml(challenge.description) + '</div>';
        html += '<div class="challenge-module">' + Utils.escapeHtml(challenge.module.charAt(0).toUpperCase() + challenge.module.slice(1)) + ' · ' + challenge.multiplier + 'x XP</div>';
        html += '<div class="challenge-progress-bar"><div class="challenge-progress-fill" style="width:' + pct + '%"></div></div>';
        html += '<div class="challenge-progress-text">' + Math.min(challenge.progress, challenge.target) + '/' + challenge.target;
        if (challenge.completed) {
            html += ' <span class="challenge-done">✓ Complete!</span>';
        }
        html += '</div>';
        html += '</div>';
        container.innerHTML = html;
    },

    renderFreezeCounter(container) {
        if (!container) return;
        var freezes = this._data.streakFreezes || 0;
        var html = '<div class="streak-freeze-counter">';
        html += '<span class="freeze-icon">❄️</span>';
        html += '<span class="freeze-count">' + freezes + '/3</span>';
        html += '<span class="freeze-label">Streak Freezes</span>';
        html += '</div>';
        container.innerHTML = html;
    }
};

window.RecurringRewards = RecurringRewards;

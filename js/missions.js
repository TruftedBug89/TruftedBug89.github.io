// ============================================
// CHINESE MASTER - Missions System
// ============================================

const Missions = {
    _data: null,
    _storageKey: null,

    templates: [
        { id: 'listen-3', type: 'listening', description: 'Complete 3 listening exercises', target: 3, reward: 30, icon: '🎧' },
        { id: 'listen-5', type: 'listening', description: 'Complete 5 listening exercises', target: 5, reward: 50, icon: '🎧' },
        { id: 'read-3', type: 'reading', description: 'Complete 3 reading exercises', target: 3, reward: 30, icon: '📖' },
        { id: 'read-5', type: 'reading', description: 'Complete 5 reading exercises', target: 5, reward: 50, icon: '📖' },
        { id: 'vocab-5', type: 'vocabulary', description: 'Learn 5 new words', target: 5, reward: 25, icon: '📝' },
        { id: 'vocab-10', type: 'vocabulary', description: 'Learn 10 new words', target: 10, reward: 40, icon: '📝' },
        { id: 'perfect-2', type: 'perfect', description: 'Get 2 perfect scores', target: 2, reward: 50, icon: '💯' },
        { id: 'perfect-3', type: 'perfect', description: 'Get 3 perfect scores', target: 3, reward: 60, icon: '💯' },
        { id: 'speak-2', type: 'speaking', description: 'Complete 2 speaking exercises', target: 2, reward: 35, icon: '🎤' },
        { id: 'speak-3', type: 'speaking', description: 'Complete 3 speaking exercises', target: 3, reward: 45, icon: '🎤' },
        { id: 'grammar-2', type: 'grammar', description: 'Complete 2 grammar lessons', target: 2, reward: 30, icon: '📐' },
        { id: 'grammar-3', type: 'grammar', description: 'Complete 3 grammar lessons', target: 3, reward: 40, icon: '📐' },
        { id: 'xp-100', type: 'xp', description: 'Earn 100 XP today', target: 100, reward: 25, icon: '⭐' },
        { id: 'xp-200', type: 'xp', description: 'Earn 200 XP today', target: 200, reward: 50, icon: '⭐' },
        { id: 'review-10', type: 'vocabulary', description: 'Review 10 vocabulary cards', target: 10, reward: 30, icon: '🔄' },
        { id: 'review-20', type: 'vocabulary', description: 'Review 20 vocabulary cards', target: 20, reward: 45, icon: '🔄' },
        { id: 'combo-5', type: 'combo', description: 'Get a 5-answer combo streak', target: 5, reward: 40, icon: '🔥' },
        { id: 'combo-10', type: 'combo', description: 'Get a 10-answer combo streak', target: 10, reward: 60, icon: '🔥' },
        { id: 'any-5', type: 'any', description: 'Complete 5 exercises in any module', target: 5, reward: 35, icon: '📚' },
        { id: 'any-10', type: 'any', description: 'Complete 10 exercises in any module', target: 10, reward: 55, icon: '📚' }
    ],

    weeklyTemplates: [
        { id: 'w-listen-15', type: 'listening', description: 'Complete 15 listening exercises this week', target: 15, reward: 150, icon: '🎧' },
        { id: 'w-read-15', type: 'reading', description: 'Complete 15 reading exercises this week', target: 15, reward: 150, icon: '📖' },
        { id: 'w-vocab-30', type: 'vocabulary', description: 'Learn 30 new words this week', target: 30, reward: 120, icon: '📝' },
        { id: 'w-perfect-10', type: 'perfect', description: 'Get 10 perfect scores this week', target: 10, reward: 200, icon: '💯' },
        { id: 'w-xp-500', type: 'xp', description: 'Earn 500 XP this week', target: 500, reward: 100, icon: '⭐' },
        { id: 'w-any-30', type: 'any', description: 'Complete 30 exercises this week', target: 30, reward: 180, icon: '📚' },
        { id: 'w-speak-10', type: 'speaking', description: 'Complete 10 speaking exercises this week', target: 10, reward: 160, icon: '🎤' },
        { id: 'w-grammar-10', type: 'grammar', description: 'Complete 10 grammar lessons this week', target: 10, reward: 150, icon: '📐' }
    ],

    init() {
        this._storageKey = this._getKey();
        this._data = this._load();
        this.checkRefresh();
    },

    _getKey() {
        var sid = (typeof SessionManager !== 'undefined') ? SessionManager.getActiveSessionId() : null;
        return sid ? 'missions_' + sid : 'missions';
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
            dailies: [],
            weekly: null,
            lastRefresh: null,
            lastWeeklyRefresh: null,
            totalCompleted: 0,
            totalXpEarned: 0
        };
    },

    _today() {
        return new Date().toISOString().split('T')[0];
    },

    _getWeekStart() {
        var now = new Date();
        var day = now.getDay();
        var diff = now.getDate() - day + (day === 0 ? -6 : 1);
        var monday = new Date(now.setDate(diff));
        return monday.toISOString().split('T')[0];
    },

    _pickRandom(arr, count) {
        var shuffled = arr.slice();
        for (var i = shuffled.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = shuffled[i];
            shuffled[i] = shuffled[j];
            shuffled[j] = temp;
        }
        return shuffled.slice(0, count);
    },

    _generateDailies() {
        var picked = this._pickRandom(this.templates, 3);
        var today = this._today();
        return picked.map(function(t, i) {
            return {
                id: 'd-' + today + '-' + i,
                templateId: t.id,
                type: t.type,
                description: t.description,
                icon: t.icon,
                target: t.target,
                progress: 0,
                reward: t.reward,
                claimed: false,
                date: today
            };
        });
    },

    _generateWeekly() {
        var picked = this._pickRandom(this.weeklyTemplates, 1);
        var t = picked[0];
        var weekStart = this._getWeekStart();
        return {
            id: 'w-' + weekStart,
            templateId: t.id,
            type: t.type,
            description: t.description,
            icon: t.icon,
            target: t.target,
            progress: 0,
            reward: t.reward,
            claimed: false,
            weekStart: weekStart
        };
    },

    checkRefresh() {
        var today = this._today();
        var weekStart = this._getWeekStart();

        if (this._data.lastRefresh !== today) {
            this._data.dailies = this._generateDailies();
            this._data.lastRefresh = today;
        }

        if (!this._data.weekly || this._data.lastWeeklyRefresh !== weekStart) {
            this._data.weekly = this._generateWeekly();
            this._data.lastWeeklyRefresh = weekStart;
        }

        this._save();
    },

    recordActivity(module, details) {
        if (!this._data) return;
        var changed = false;
        details = details || {};

        this._data.dailies.forEach(function(m) {
            if (m.claimed || m.progress >= m.target) return;

            if (m.type === module) {
                m.progress++;
                changed = true;
            } else if (m.type === 'perfect' && details.isPerfect) {
                m.progress++;
                changed = true;
            } else if (m.type === 'xp' && details.xp) {
                m.progress += details.xp;
                changed = true;
            } else if (m.type === 'combo') {
                var ud = typeof StorageManager !== 'undefined' ? StorageManager.getUserData() : null;
                if (ud && ud._combo >= m.target) {
                    m.progress = m.target;
                    changed = true;
                }
            } else if (m.type === 'any') {
                m.progress++;
                changed = true;
            }
        });

        if (this._data.weekly && !this._data.weekly.claimed && this._data.weekly.progress < this._data.weekly.target) {
            var w = this._data.weekly;
            if (w.type === module) {
                w.progress++;
                changed = true;
            } else if (w.type === 'perfect' && details.isPerfect) {
                w.progress++;
                changed = true;
            } else if (w.type === 'xp' && details.xp) {
                w.progress += details.xp;
                changed = true;
            } else if (w.type === 'any') {
                w.progress++;
                changed = true;
            }
        }

        if (changed) this._save();
    },

    claim(missionId) {
        var mission = null;
        this._data.dailies.forEach(function(m) {
            if (m.id === missionId) mission = m;
        });
        if (!mission && this._data.weekly && this._data.weekly.id === missionId) {
            mission = this._data.weekly;
        }

        if (!mission || mission.claimed || mission.progress < mission.target) return false;

        mission.claimed = true;
        this._data.totalCompleted++;
        this._data.totalXpEarned += mission.reward;
        this._save();

        if (typeof StorageManager !== 'undefined') {
            StorageManager.addXP(mission.reward);
        }

        if (typeof InkAnimations !== 'undefined' && InkAnimations.celebrateMissionComplete) {
            InkAnimations.celebrateMissionComplete(mission);
        }

        if (typeof Utils !== 'undefined') {
            Utils.showToast('Mission complete! +' + mission.reward + ' XP', 'success');
            Utils.playSound('levelup');
        }

        if (typeof ProgressTracker !== 'undefined' && ProgressTracker.checkAchievements) {
            ProgressTracker.checkAchievements();
        }

        return true;
    },

    getDailies() {
        if (!this._data) return [];
        return this._data.dailies;
    },

    getWeekly() {
        if (!this._data) return null;
        return this._data.weekly;
    },

    getStats() {
        if (!this._data) return { totalCompleted: 0, totalXpEarned: 0 };
        return {
            totalCompleted: this._data.totalCompleted || 0,
            totalXpEarned: this._data.totalXpEarned || 0
        };
    },

    getClaimable() {
        var claimable = [];
        if (!this._data) return claimable;
        this._data.dailies.forEach(function(m) {
            if (!m.claimed && m.progress >= m.target) claimable.push(m);
        });
        if (this._data.weekly && !this._data.weekly.claimed && this._data.weekly.progress >= this._data.weekly.target) {
            claimable.push(this._data.weekly);
        }
        return claimable;
    },

    renderWidget(container) {
        if (!container || !this._data) return;
        var dailies = this._data.dailies;
        var weekly = this._data.weekly;

        var html = '<div class="missions-widget">';
        html += '<div class="missions-widget-header"><span class="missions-title">📋 Daily Missions</span>';

        var claimable = this.getClaimable();
        if (claimable.length > 0) {
            html += '<span class="missions-claimable-badge">' + claimable.length + ' ready!</span>';
        }
        html += '</div>';

        html += '<div class="missions-list">';
        dailies.forEach(function(m) {
            var pct = Math.min(100, Math.round((m.progress / m.target) * 100));
            var done = m.progress >= m.target;
            html += '<div class="mission-item' + (m.claimed ? ' claimed' : '') + (done && !m.claimed ? ' complete' : '') + '">';
            html += '<div class="mission-icon">' + Utils.escapeHtml(m.icon) + '</div>';
            html += '<div class="mission-info">';
            html += '<div class="mission-desc">' + Utils.escapeHtml(m.description) + '</div>';
            html += '<div class="mission-progress-bar"><div class="mission-progress-fill" style="width:' + pct + '%"></div></div>';
            html += '<div class="mission-progress-text">' + Math.min(m.progress, m.target) + '/' + m.target + '</div>';
            html += '</div>';
            html += '<div class="mission-reward">';
            if (m.claimed) {
                html += '<span class="mission-claimed">✓</span>';
            } else if (done) {
                html += '<button class="btn-mission-claim" data-mission-id="' + Utils.escapeAttr(m.id) + '">+' + m.reward + '</button>';
            } else {
                html += '<span class="mission-xp">+' + m.reward + ' XP</span>';
            }
            html += '</div>';
            html += '</div>';
        });

        if (weekly) {
            var wPct = Math.min(100, Math.round((weekly.progress / weekly.target) * 100));
            var wDone = weekly.progress >= weekly.target;
            html += '<div class="missions-weekly-label">📅 Weekly Mission</div>';
            html += '<div class="mission-item weekly' + (weekly.claimed ? ' claimed' : '') + (wDone && !weekly.claimed ? ' complete' : '') + '">';
            html += '<div class="mission-icon">' + Utils.escapeHtml(weekly.icon) + '</div>';
            html += '<div class="mission-info">';
            html += '<div class="mission-desc">' + Utils.escapeHtml(weekly.description) + '</div>';
            html += '<div class="mission-progress-bar"><div class="mission-progress-fill weekly" style="width:' + wPct + '%"></div></div>';
            html += '<div class="mission-progress-text">' + Math.min(weekly.progress, weekly.target) + '/' + weekly.target + '</div>';
            html += '</div>';
            html += '<div class="mission-reward">';
            if (weekly.claimed) {
                html += '<span class="mission-claimed">✓</span>';
            } else if (wDone) {
                html += '<button class="btn-mission-claim" data-mission-id="' + Utils.escapeAttr(weekly.id) + '">+' + weekly.reward + '</button>';
            } else {
                html += '<span class="mission-xp">+' + weekly.reward + ' XP</span>';
            }
            html += '</div>';
            html += '</div>';
        }

        html += '</div></div>';
        container.innerHTML = html;

        var claimBtns = container.querySelectorAll('.btn-mission-claim');
        claimBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                var mid = btn.getAttribute('data-mission-id');
                Missions.claim(mid);
                Missions.renderWidget(container);
            });
        });
    },

    renderFull(container) {
        if (!container) return;
        this.renderWidget(container);
    }
};

window.Missions = Missions;

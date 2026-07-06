// ============================================
// CHINESE MASTER - Achievements Component
// ============================================

const Achievements = {
    // Tier thresholds
    tiers: {
        bronze: { name: 'Bronze', color: '#a88a3e', icon: '🥉', minLevel: 1, maxLevel: 5 },
        silver: { name: 'Silver', color: '#a0a0a0', icon: '🥈', minLevel: 6, maxLevel: 11 },
        gold: { name: 'Gold', color: '#c9a65b', icon: '🥇', minLevel: 12, maxLevel: 17 },
        platinum: { name: 'Platinum', color: '#e5e4e2', icon: '💎', minLevel: 18, maxLevel: 999 }
    },

    // Get tier for an achievement index
    getTier(index) {
        if (index <= 4) return this.tiers.bronze;
        if (index <= 10) return this.tiers.silver;
        if (index <= 16) return this.tiers.gold;
        return this.tiers.platinum;
    },

    // Get progress toward next achievement
    getNextAchievement(achievements) {
        for (let i = 0; i < achievements.length; i++) {
            if (!achievements[i].unlocked) {
                return achievements[i];
            }
        }
        return null;
    },

    // Get unlock date for achievements from activity log
    getAchievementUnlockDate(achievementId) {
        if (typeof StorageManager === 'undefined') return null;
        const data = StorageManager.getUserData();
        if (!data || !data.activityLog) return null;

        for (let i = data.activityLog.length - 1; i >= 0; i--) {
            const entry = data.activityLog[i];
            if (entry && entry.type === 'achievement' && entry.achievementId === achievementId) {
                return entry.timestamp || null;
            }
        }
        return null;
    },

    // Format timestamp
    formatUnlockDate(timestamp) {
        if (!timestamp) return '';
        const d = new Date(timestamp);
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
    },

    _activeTab: 'achievements',

    init() {
        this.render();
    },

    _switchTab(tab) {
        this._activeTab = tab;
        this.render();
    },

    render() {
        const grid = document.getElementById('achievements-grid');
        if (!grid) return;

        var parent = grid.parentElement;
        if (parent && !parent.querySelector('.achievements-tabs')) {
            var tabBar = document.createElement('div');
            tabBar.className = 'achievements-tabs';
            tabBar.innerHTML =
                '<button class="tab-btn active" data-tab="achievements" type="button">🏆 Achievements</button>' +
                '<button class="tab-btn" data-tab="missions" type="button">📋 Missions</button>';
            parent.insertBefore(tabBar, grid);

            tabBar.addEventListener('click', function(e) {
                var btn = e.target.closest('.tab-btn');
                if (!btn) return;
                var tab = btn.getAttribute('data-tab');
                Achievements._switchTab(tab);
            });
        }

        var tabBtns = parent.querySelectorAll('.tab-btn');
        tabBtns.forEach(function(btn) {
            btn.classList.toggle('active', btn.getAttribute('data-tab') === Achievements._activeTab);
        });

        if (this._activeTab === 'missions') {
            this._renderMissionsTab(grid);
            return;
        }

        this._renderAchievementsTab(grid);
    },

    _renderMissionsTab(grid) {
        grid.style.display = 'block';
        if (typeof Missions !== 'undefined') {
            Missions.renderFull(grid);
        } else {
            grid.innerHTML = '<p style="text-align:center;color:var(--text-secondary);">Missions system loading...</p>';
        }
    },

    _renderAchievementsTab(grid) {
        if (!grid) return;

        const achievements = ProgressTracker.getAchievementProgress();
        const unlocked = achievements.filter(a => a.unlocked).length;
        const total = achievements.length;
        const safeUnlocked = Utils.escapeHtml(unlocked);
        const safeTotal = Utils.escapeHtml(total);
        const safePercent = total > 0 ? Math.round((unlocked/total)*100) : 0;
        const safeBarWidth = total > 0 ? (unlocked/total)*100 : 0;

        // Next achievement preview
        const nextAchievement = this.getNextAchievement(achievements);
        const nextIdx = achievements.findIndex(a => !a.unlocked);
        const remaining = total - unlocked;
        const nextTier = nextIdx >= 0 ? this.getTier(nextIdx) : null;

        // Header summary
        let html = `
            <div style="text-align:center; margin-bottom:24px;">
                <h2 style="margin:0 0 6px; color:var(--text-primary);">🏆 Achievements</h2>
                <p style="color:var(--text-secondary); margin:0;">
                    ${safeUnlocked} of ${safeTotal} unlocked · ${safePercent}%
                </p>
                <div style="margin: 12px auto 0; max-width: 280px; height: 6px; background: var(--bg-tertiary); border-radius: 999px; overflow: hidden;">
                    <div id="achievement-progress-fill" style="width:0%; height:100%; background: linear-gradient(90deg, #f1c40f, #e67e22);"></div>
                </div>
            </div>
        `;

        // Next achievement preview
        if (nextAchievement && nextTier) {
            html += `
            <div class="next-achievement" style="
                background: linear-gradient(135deg, rgba(${nextTier.color === '#a88a3e' ? '205,127,50' : nextTier.color === '#a0a0a0' ? '192,192,192' : nextTier.color === '#c9a65b' ? '255,215,0' : '229,228,226'},0.12), transparent);
                border: 1px solid var(--glass-border);
                border-radius: 12px;
                padding: 14px 18px;
                margin-bottom: 18px;
                display: flex;
                align-items: center;
                gap: 14px;
                max-width: 520px;
                margin-left: auto;
                margin-right: auto;
            ">
                <div style="font-size:32px;">${Utils.escapeHtml(nextAchievement.icon)}</div>
                <div style="flex:1;">
                    <div style="color:var(--text-muted); font-size:11px; text-transform: uppercase; letter-spacing: 1px;">Next Achievement ${nextTier.icon} ${nextTier.name} Tier</div>
                    <div style="color:var(--text-primary); font-weight:600; font-size:15px; margin: 2px 0;">${Utils.escapeHtml(nextAchievement.title)}</div>
                    <div style="color:var(--text-secondary); font-size:12px;">${Utils.escapeHtml(nextAchievement.description)}</div>
                </div>
                <div style="text-align:center;">
                    <div style="color:var(--text-muted); font-size:11px;">remaining</div>
                    <div style="color:var(--text-primary); font-size:22px; font-weight:700;">${Utils.escapeHtml(remaining)}</div>
                </div>
            </div>
            `;
        }

        html += achievements.map((achievement, idx) => {
            const safeTitle = Utils.escapeHtml(achievement.title);
            const safeDesc = Utils.escapeHtml(achievement.description);
            const safeIcon = Utils.escapeHtml(achievement.icon);
            const tier = this.getTier(idx);

            // Unlock date
            let unlockDateHtml = '';
            if (achievement.unlocked) {
                const ts = this.getAchievementUnlockDate(achievement.id);
                if (ts) {
                    unlockDateHtml = `<div class="achievement-unlock-date" style="font-size:10px; color:var(--text-muted); margin-top:4px;" data-timestamp="${Utils.escapeAttr(String(ts))}">${Utils.escapeHtml(this.formatUnlockDate(ts))}</div>`;
                }
            }

            // X more to unlock
            let progressHtml = '';
            if (!achievement.unlocked) {
                const remainingCount = total - idx;
                const tierUnlocked = achievements.filter((a, i) => a.unlocked && i <= idx).length;
                const tierTotal = idx + 1;
                progressHtml = `<div class="achievement-tier-progress" style="margin-top:8px;">
                    <div style="height:3px; background:var(--bg-tertiary); border-radius:999px; overflow:hidden;">
                        <div style="width:${(tierUnlocked/tierTotal)*100}%; height:100%; background:${tier.color}; border-radius:999px;"></div>
                    </div>
                    <div style="font-size:10px; color:var(--text-muted); margin-top:3px;">${Utils.escapeHtml(tierUnlocked)}/${Utils.escapeHtml(tierTotal)} in ${Utils.escapeHtml(tier.name)}</div>
                </div>`;
            }

            return `
            <div class="achievement-card ${achievement.unlocked ? '' : 'locked'}" data-achievement-id="${Utils.escapeAttr(achievement.id)}" style="
                background: ${achievement.unlocked
                    ? `linear-gradient(135deg, rgba(241,196,15,0.18), rgba(230,126,34,0.06))`
                    : 'var(--bg-card)'};
                border: 1px solid ${achievement.unlocked ? `rgba(${tier.color === '#a88a3e' ? '205,127,50' : tier.color === '#a0a0a0' ? '192,192,192' : tier.color === '#c9a65b' ? '255,215,0' : '229,228,226'},0.4)` : 'var(--glass-border)'};
                border-radius: 16px;
                padding: 20px;
                text-align: center;
                transition: transform 0.2s;
                opacity: ${achievement.unlocked ? '1' : '0.55'};
                filter: ${achievement.unlocked ? 'none' : 'grayscale(0.6)'};
            ">
                <div class="achievement-tier-label" style="
                    font-size: 9px;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: ${tier.color};
                    margin-bottom: 4px;
                    font-weight: 700;
                ">${tier.icon} ${Utils.escapeHtml(tier.name)}</div>
                <div class="achievement-icon" style="font-size:48px; margin-bottom:8px;">${safeIcon}</div>
                <h3 style="margin:0 0 6px; color:var(--text-primary); font-size:15px;">${safeTitle}</h3>
                <p style="margin:0 0 10px; color:var(--text-secondary); font-size:12px;">${safeDesc}</p>
                ${achievement.unlocked
                    ? '<span class="achievement-pill" style="display:inline-block; padding:3px 10px; border-radius:999px; background:rgba(241,196,15,0.18); color:#ffd86b; font-size:11px; font-weight:600;">✓ Unlocked</span>'
                    : '<span class="achievement-pill locked" style="display:inline-block; padding:3px 10px; border-radius:999px; background:var(--bg-hover); color:var(--text-muted); font-size:11px; font-weight:600;">🔒 Locked</span>'
                }
                ${unlockDateHtml}
                ${progressHtml}
            </div>
        `;}).join('');

        grid.style.display = 'grid';
        grid.innerHTML = html;

        // GSAP animations
        if (typeof InkAnimations !== 'undefined' && InkAnimations.entranceStagger) {
            InkAnimations.entranceStagger(grid, { y: 24, stagger: 0.05, duration: 0.45 });
        }

        // Progress bar fill animation
        const progressFill = document.getElementById('achievement-progress-fill');
        if (progressFill && typeof InkAnimations !== 'undefined' && InkAnimations.progressBarFill) {
            InkAnimations.progressBarFill(progressFill, 0, safeBarWidth);
        } else if (progressFill) {
            progressFill.style.width = safeBarWidth + '%';
        }
    },

    // Check and award achievements
    check() {
        const previous = ProgressTracker.getAchievementProgress().filter(a => a.unlocked).map(a => a.id);
        ProgressTracker.checkAchievements();
        this.render();

        // Detect newly unlocked achievements and animate
        const current = ProgressTracker.getAchievementProgress().filter(a => a.unlocked).map(a => a.id);
        const newIds = current.filter(id => !previous.includes(id));
        if (newIds.length > 0) {
            const achievements = ProgressTracker.getAchievementProgress();
            const newAchievement = achievements.find(a => newIds.includes(a.id));
            if (newAchievement) {
                this.showNotification(newAchievement);
            }
        }
    },

    // Show achievement notification
    showNotification(achievement) {
        // Create notification panel
        const panel = document.createElement('div');
        panel.className = 'achievement-notification-panel';
        panel.innerHTML = `
            <div style="font-size:48px;">${Utils.escapeHtml(achievement.icon)}</div>
            <div style="font-weight:700; font-size:16px; color:white; margin: 6px 0 2px;">Achievement Unlocked!</div>
            <div style="font-size:15px; color:#ffd86b; font-weight:600;">${Utils.escapeHtml(achievement.title)}</div>
            <div style="font-size:12px; color:rgba(255,255,255,0.5); margin-top:4px;">${Utils.escapeHtml(achievement.description)}</div>
        `;
        Object.assign(panel.style, {
            position: 'fixed',
            top: '80px',
            right: '20px',
            zIndex: '9999',
            background: 'linear-gradient(135deg, rgba(30,30,30,0.95), rgba(20,20,20,0.95))',
            border: '1px solid rgba(241,196,15,0.5)',
            borderRadius: '16px',
            padding: '20px 24px',
            textAlign: 'center',
            boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
            minWidth: '220px'
        });
        document.body.appendChild(panel);

        // GSAP slide-in
        if (typeof InkAnimations !== 'undefined' && InkAnimations.slideInPanel) {
            InkAnimations.slideInPanel(panel, 'right');
        }

        // Auto-remove after 4 seconds
        setTimeout(() => {
            if (panel.parentNode) {
                if (typeof gsap !== 'undefined') {
                    gsap.to(panel, { opacity: 0, x: 60, duration: 0.4, ease: 'power2.in', onComplete: () => panel.remove() });
                } else {
                    panel.remove();
                }
            }
        }, 4000);

        // Show toast and confetti
        Utils.showToast(`🏆 Achievement Unlocked: ${achievement.title}!`, 'success');
        Utils.showConfetti();

        // Also animate the card in the grid if visible
        setTimeout(() => {
            const card = document.querySelector(`.achievement-card[data-achievement-id="${achievement.id}"]`);
            if (card && typeof InkAnimations !== 'undefined' && InkAnimations.achievementUnlock) {
                InkAnimations.achievementUnlock(card);
            }
        }, 300);
    }
};

// Export for use in other modules
window.Achievements = Achievements;

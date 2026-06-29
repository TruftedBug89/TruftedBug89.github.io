// ============================================
// CHINESE MASTER - Achievements Component
// ============================================

const Achievements = {
    // Initialize
    init() {
        this.render();
    },

    // Render achievements
    render() {
        const grid = document.getElementById('achievements-grid');
        if (!grid) return;

        const achievements = ProgressTracker.getAchievementProgress();
        const unlocked = achievements.filter(a => a.unlocked).length;
        const total = achievements.length;
        const safeUnlocked = Utils.escapeHtml(unlocked);
        const safeTotal = Utils.escapeHtml(total);
        const safePercent = total > 0 ? Math.round((unlocked/total)*100) : 0;
        const safeBarWidth = total > 0 ? (unlocked/total)*100 : 0;

        // Header summary
        let html = `
            <div style="text-align:center; margin-bottom:24px;">
                <h2 style="margin:0 0 6px; color:white;">🏆 Achievements</h2>
                <p style="color:rgba(255,255,255,0.6); margin:0;">
                    ${safeUnlocked} of ${safeTotal} unlocked · ${safePercent}%
                </p>
                <div style="margin: 12px auto 0; max-width: 280px; height: 6px; background: rgba(255,255,255,0.08); border-radius: 999px; overflow: hidden;">
                    <div style="width:${safeBarWidth}%; height:100%; background: linear-gradient(90deg, #f1c40f, #e67e22);"></div>
                </div>
            </div>
        `;

        html += achievements.map(achievement => {
            const safeTitle = Utils.escapeHtml(achievement.title);
            const safeDesc = Utils.escapeHtml(achievement.description);
            const safeIcon = Utils.escapeHtml(achievement.icon);
            return `
            <div class="achievement-card ${achievement.unlocked ? '' : 'locked'}" style="
                background: ${achievement.unlocked
                    ? 'linear-gradient(135deg, rgba(241,196,15,0.18), rgba(230,126,34,0.06))'
                    : 'rgba(255,255,255,0.03)'};
                border: 1px solid ${achievement.unlocked ? 'rgba(241,196,15,0.4)' : 'rgba(255,255,255,0.06)'};
                border-radius: 16px;
                padding: 20px;
                text-align: center;
                transition: transform 0.2s;
                opacity: ${achievement.unlocked ? '1' : '0.55'};
                filter: ${achievement.unlocked ? 'none' : 'grayscale(0.6)'};
            ">
                <div class="achievement-icon" style="font-size:48px; margin-bottom:8px;">${safeIcon}</div>
                <h3 style="margin:0 0 6px; color:white; font-size:15px;">${safeTitle}</h3>
                <p style="margin:0 0 10px; color:rgba(255,255,255,0.6); font-size:12px;">${safeDesc}</p>
                ${achievement.unlocked
                    ? '<span class="achievement-badge" style="display:inline-block; padding:3px 10px; border-radius:999px; background:rgba(241,196,15,0.18); color:#ffd86b; font-size:11px; font-weight:600;">✓ Unlocked</span>'
                    : '<span class="achievement-badge locked" style="display:inline-block; padding:3px 10px; border-radius:999px; background:rgba(255,255,255,0.06); color:rgba(255,255,255,0.45); font-size:11px; font-weight:600;">🔒 Locked</span>'
                }
            </div>
        `;}).join('');

        grid.style.display = 'grid';
        grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(180px, 1fr))';
        grid.style.gap = '14px';
        grid.innerHTML = html;
    },

    // Check and award achievements
    check() {
        ProgressTracker.checkAchievements();
        this.render();
    },

    // Show achievement notification
    showNotification(achievement) {
        Utils.showToast(`🏆 Achievement Unlocked: ${achievement.title}!`, 'success');
        Utils.showConfetti();
    }
};

// Export for use in other modules
window.Achievements = Achievements;

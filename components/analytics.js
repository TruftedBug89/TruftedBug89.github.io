// ============================================
// CHINESE MASTER - Analytics Dashboard Component
// ============================================

const AnalyticsDashboard = {
    // Initialize
    init() {
        this.render();
    },

    // Render analytics
    render() {
        if (typeof AdvancedLearning === 'undefined') return;
        const analytics = AdvancedLearning.getAnalytics();
        const velocity = AdvancedLearning.getLearningVelocity();
        const recommendations = AdvancedLearning.getRecommendations();

        // Update overview stats
        this.updateOverviewStats(analytics.overview);

        // Update learning style
        this.updateLearningStyle(analytics.learning);

        // Update difficulty
        this.updateDifficulty(analytics.difficulty);

        // Update recommendations
        this.updateRecommendations(recommendations);

        // Update velocity
        this.updateVelocity(velocity);

        // Update performance chart
        this.updatePerformanceChart();
    },

    // Update overview stats
    updateOverviewStats(overview) {
        const elements = {
            'analytics-words': overview.totalWords,
            'analytics-mastered': overview.masteredWords,
            'analytics-listening': overview.listeningCompleted,
            'analytics-reading': overview.readingCompleted,
            'analytics-xp': overview.totalXp,
            'analytics-level': overview.level,
            'analytics-streak': overview.streak
        };

        Object.entries(elements).forEach(([id, value]) => {
            const el = document.getElementById(id);
            if (el) {
                Utils.animateNumber(el, value);
            }
        });
    },

    // Update learning style
    updateLearningStyle(learning) {
        const styleEl = document.getElementById('learning-style');
        if (styleEl) {
            styleEl.textContent = learning.style;
        }

        const successEl = document.getElementById('success-rate');
        if (successEl) {
            successEl.textContent = `${learning.successRate}%`;
        }

        const responseEl = document.getElementById('avg-response-time');
        if (responseEl) {
            responseEl.textContent = `${learning.averageResponseTime}s`;
        }
    },

    // Update difficulty
    updateDifficulty(difficulty) {
        const levelEl = document.getElementById('difficulty-level');
        if (levelEl) {
            levelEl.textContent = difficulty.label;
        }

        const barEl = document.getElementById('difficulty-bar');
        if (barEl) {
            barEl.style.width = `${(difficulty.current / 5) * 100}%`;
        }
    },

    // Update recommendations
    updateRecommendations(recommendations) {
        const container = document.getElementById('recommendations-list');
        if (!container) return;

        container.innerHTML = recommendations.map(rec => {
            const safeMsg = Utils.escapeHtml(rec.message);
            const safePriority = Utils.escapeHtml(rec.priority);
            const safeType = Utils.escapeAttr(rec.type);
            const icon = rec.type === 'focus' ? '🎯' : rec.type === 'style' ? '📚' : rec.type === 'difficulty' ? '📈' : '🔄';
            return `
            <div class="recommendation-card ${safeType}">
                <div class="rec-icon">${icon}</div>
                <div class="rec-content">
                    <p>${safeMsg}</p>
                    <span class="rec-priority">${safePriority} priority</span>
                </div>
            </div>
        `;}).join('');
    },

    // Update velocity
    updateVelocity(velocity) {
        const avgEl = document.getElementById('avg-xp-day');
        if (avgEl) {
            avgEl.textContent = velocity.avgXpPerDay;
        }

        const trendEl = document.getElementById('learning-trend');
        if (trendEl) {
            trendEl.textContent = velocity.trend;
            trendEl.className = `trend-${velocity.trend}`;
        }

        const projEl = document.getElementById('monthly-projection');
        if (projEl) {
            projEl.textContent = velocity.projection;
        }
    },

    // Update performance chart
    updatePerformanceChart() {
        var performance = AdvancedLearning.getPerformanceOverTime(7);
        var chartContainer = document.getElementById('performance-chart');
        if (!chartContainer) return;

        var maxXP = Math.max(...performance.map(p => p.xp), 1);

        chartContainer.innerHTML = `
            <div class="chart-bars">
                ${performance.map(day => {
                    const height = Math.round((day.xp / maxXP) * 100);
                    const safeHeight = Math.max(0, Math.min(100, height));
                    const safeXp = Utils.escapeHtml(day.xp);
                    const safeDay = Utils.escapeHtml(new Date(day.date).toLocaleDateString('en', { weekday: 'short' }));
                    return `
                        <div class="chart-bar-wrapper">
                            <div class="chart-bar" style="height: 0%" data-target-height="${safeHeight}">
                                <span class="chart-bar-value">${safeXp}</span>
                            </div>
                            <span class="chart-bar-label">${safeDay}</span>
                        </div>
                    `;
                }).join('')}
            </div>
        `;

        if (typeof InkAnimations !== 'undefined' && window.gsap) {
            var bars = chartContainer.querySelectorAll('.chart-bar');
            bars.forEach(function(bar) {
                var targetH = parseFloat(bar.getAttribute('data-target-height')) || 0;
                window.gsap.to(bar, { height: targetH + '%', duration: 0.7, ease: 'power3.out', delay: 0.1 });
            });
        }
    },

    // Get HTML for analytics section
    getHTML() {
        return `
            <div class="analytics-section">
                <h2>📊 Learning Analytics</h2>
                
                <div class="analytics-grid">
                    <div class="analytics-card">
                        <div class="analytics-icon">📚</div>
                        <div class="analytics-value" id="analytics-words">0</div>
                        <div class="analytics-label">Words Learned</div>
                    </div>
                    <div class="analytics-card">
                        <div class="analytics-icon">⭐</div>
                        <div class="analytics-value" id="analytics-mastered">0</div>
                        <div class="analytics-label">Mastered</div>
                    </div>
                    <div class="analytics-card">
                        <div class="analytics-icon">🎧</div>
                        <div class="analytics-value" id="analytics-listening">0</div>
                        <div class="analytics-label">Listening Done</div>
                    </div>
                    <div class="analytics-card">
                        <div class="analytics-icon">📖</div>
                        <div class="analytics-value" id="analytics-reading">0</div>
                        <div class="analytics-label">Reading Done</div>
                    </div>
                </div>

                <div class="analytics-section">
                    <h3>🎯 Learning Profile</h3>
                    <div class="profile-grid">
                        <div class="profile-item">
                            <span class="profile-label">Learning Style:</span>
                            <span class="profile-value" id="learning-style">Balanced</span>
                        </div>
                        <div class="profile-item">
                            <span class="profile-label">Success Rate:</span>
                            <span class="profile-value" id="success-rate">0%</span>
                        </div>
                        <div class="profile-item">
                            <span class="profile-label">Avg Response:</span>
                            <span class="profile-value" id="avg-response-time">0s</span>
                        </div>
                        <div class="profile-item">
                            <span class="profile-label">Difficulty:</span>
                            <span class="profile-value" id="difficulty-level">Intermediate</span>
                        </div>
                    </div>
                </div>

                <div class="analytics-section">
                    <h3>📈 Performance This Week</h3>
                    <div id="performance-chart" class="performance-chart"></div>
                </div>

                <div class="analytics-section">
                    <h3>🚀 Learning Velocity</h3>
                    <div class="velocity-grid">
                        <div class="velocity-item">
                            <span class="velocity-value" id="avg-xp-day">0</span>
                            <span class="velocity-label">XP/Day</span>
                        </div>
                        <div class="velocity-item">
                            <span class="velocity-value" id="learning-trend">stable</span>
                            <span class="velocity-label">Trend</span>
                        </div>
                        <div class="velocity-item">
                            <span class="velocity-value" id="monthly-projection">0</span>
                            <span class="velocity-label">Monthly XP</span>
                        </div>
                    </div>
                </div>

                <div class="analytics-section">
                    <h3>💡 Recommendations</h3>
                    <div id="recommendations-list" class="recommendations-list"></div>
                </div>
            </div>
        `;
    }
};

// Export for use in other modules
window.AnalyticsDashboard = AnalyticsDashboard;

if (typeof InkAnimations !== 'undefined' && InkAnimations.registerModuleEnter) {
    InkAnimations.registerModuleEnter('analytics', function(el) {
        if (typeof InkAnimations !== 'undefined' && InkAnimations.entranceStagger) {
            var sections = el.querySelectorAll('.analytics-section');
            sections.forEach(function(section) {
                InkAnimations.entranceStagger(section, { stagger: 0.06, delay: 0.1 });
            });
        }
        try { AnalyticsDashboard.render(); } catch(e) {}
    });
}

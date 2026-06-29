// ============================================
// CHINESE MASTER - Main Application
// ============================================

const App = {
    // Current state
    currentModule: 'dashboard',
    isInitialized: false,
    DEBUG: false, // set true to surface diagnostic logs in console

    // Initialize the app
    init() {
        if (this.DEBUG) console.log('Initializing Chinese Master App...');

        // Initialize storage (which in turn initializes SessionManager)
        StorageManager.init();

        // Initialize audio
        AudioManager.init();

        // SM-2, PinyinToggle, DailyStreak, TonePractice, AdvancedLearning, LevelTracker, VocabularyLearner
        if (typeof SM2 !== 'undefined') { /* SM-2 is stateless */ }
        if (typeof PinyinToggle !== 'undefined') PinyinToggle.init();
        if (typeof DailyStreak !== 'undefined') DailyStreak.init();
        if (typeof TonePractice !== 'undefined') { /* loaded */ }
        if (typeof AdvancedLearning !== 'undefined') AdvancedLearning.init();
        if (typeof LevelTracker !== 'undefined') LevelTracker.init();
        if (typeof VocabularyLearner !== 'undefined') VocabularyLearner.init();

        if (this.DEBUG) this.logDataStats();

        // Global error capture (production-grade)
        this._installGlobalErrorHandlers();

        // Set up event listeners
        this.setupEventListeners();

        // Load user preferences
        this.loadPreferences();

        // Hide loading screen as soon as init is done (no artificial delay)
        this.hideLoadingScreen();
        this.isInitialized = true;
        if (this.DEBUG) console.log('App initialized. Total vocab:', this.getTotalVocab());
    },

    // Surface uncaught errors to the user instead of failing silently
    _installGlobalErrorHandlers() {
        window.addEventListener('error', (e) => {
            if (this.DEBUG) console.error('Uncaught error:', e.error || e.message);
            try { Utils.showToast('Something went wrong — your progress is safe.', 'warning'); } catch (_) {}
        });
        window.addEventListener('unhandledrejection', (e) => {
            // Speech synthesis rejections are common and non-fatal — swallow quietly
            const reason = e && e.reason;
            const msg = (reason && (reason.message || String(reason))) || '';
            if (/speech|synthesis|audio|abort/i.test(msg)) return;
            if (this.DEBUG) console.error('Unhandled rejection:', reason);
        });
    },

    // Get total vocabulary count
    getTotalVocab() {
        let total = 0;
        if (typeof HSK1Massive !== 'undefined') total += HSK1Massive.count;
        if (typeof HSK2Massive !== 'undefined') total += HSK2Massive.count;
        if (typeof HSK3Massive !== 'undefined') total += HSK3Massive.count;
        if (typeof HSK4Massive !== 'undefined') total += HSK4Massive.count;
        if (typeof VocabularyMega !== 'undefined') total += VocabularyMega.count;
        if (typeof VocabularyData !== 'undefined') total += VocabularyData.count;
        return total;
    },

    // Log data statistics
    logDataStats() {
        const stats = {
            'HSK 1': typeof HSK1 !== 'undefined' ? HSK1.count : 0,
            'HSK 2': typeof HSK2 !== 'undefined' ? HSK2.count : 0,
            'HSK 3': typeof HSK3 !== 'undefined' ? HSK3.count : 0,
            'HSK 4-5': typeof HSK4_5 !== 'undefined' ? HSK4_5.count : 0,
            'Vocabulary': typeof VocabularyData !== 'undefined' ? VocabularyData.count : 0,
            'Listening': typeof ListeningData !== 'undefined' ? ListeningData.totalCount : 0,
            'Reading': typeof ReadingData !== 'undefined' ? ReadingData.totalCount : 0,
            'Grammar': typeof GrammarData !== 'undefined' ? GrammarData.totalCount : 0,
            'Dialogues': typeof DialoguesData !== 'undefined' ? DialoguesData.totalCount : 0,
            'Cultural': typeof CulturalData !== 'undefined' ? CulturalData.totalCount : 0,
            'Phrases': typeof RealWorldPhrases !== 'undefined' ? RealWorldPhrases.totalCount : 0,
            'HSK Reading': typeof HSKReadingMassive !== 'undefined' ? HSKReadingMassive.totalCount : 0
        };
        
        console.log('=== DATASET STATISTICS ===');
        Object.entries(stats).forEach(([name, count]) => {
            console.log(`${name}: ${count} items`);
        });
        console.log('========================');
    },

    // Set up event listeners
    setupEventListeners() {
        // Navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const module = link.dataset.module;
                this.navigateTo(module);
            });
        });

        // Mobile nav toggle
        this.setupMobileNav();

        // Theme toggle

        const themeBtn = document.getElementById('theme-toggle');
        if (themeBtn) themeBtn.addEventListener('click', () => this.toggleTheme());

        // Profile switcher
        const profileBtn = document.getElementById('profile-btn');
        if (profileBtn) profileBtn.addEventListener('click', () => SessionManagerUI.open());

        // Quick action cards
        document.querySelectorAll('.action-card').forEach(card => {
            card.addEventListener('click', () => {
                const action = card.dataset.action;
                this.handleQuickAction(action);
            });
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
            });
        });

        // Back buttons
        document.querySelectorAll('.back-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const target = btn.dataset.back;
                this.handleBack(target);
            });
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            this.handleKeyboardShortcut(e);
        });
    },

    // Navigate to a module
    navigateTo(module) {
        // Update active states
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.module === module) {
                link.classList.add('active');
            }
        });

        // Hide all modules
        document.querySelectorAll('.module').forEach(m => {
            m.classList.remove('active');
        });

        // Show target module
        const targetModule = document.getElementById(`module-${module}`);
        if (targetModule) {
            targetModule.classList.add('active');
        }

        // Reset any sub-containers that might be stuck in an exercise view
        this.resetModuleSubviews(module);
        
        this.currentModule = module;

        // Close mobile nav on navigation
        this.closeMobileNav();

        // Auto-populate module content on first navigation
        this.populateModule(module);

        // Update dashboard if needed
        if (module === 'dashboard') {
            Dashboard.update();
        }
    },

    // Reset sub-view containers when entering a module fresh
    resetModuleSubviews(module) {
        try {
            if (module === 'listening') {
                const menu = document.getElementById('listening-menu');
                const ex = document.getElementById('listening-exercise');
                if (menu) menu.classList.remove('hidden');
                if (ex) ex.classList.add('hidden');
            } else if (module === 'reading') {
                const menu = document.getElementById('reading-menu');
                const ex = document.getElementById('reading-exercise');
                if (menu) menu.classList.remove('hidden');
                if (ex) ex.classList.add('hidden');
            } else if (module === 'grammar') {
                const menu = document.getElementById('grammar-menu');
                const lesson = document.getElementById('grammar-lesson');
                const practice = document.getElementById('grammar-practice');
                if (menu) menu.classList.remove('hidden');
                if (lesson) lesson.classList.add('hidden');
                if (practice) practice.classList.add('hidden');
            } else if (module === 'speaking') {
                const menu = document.getElementById('speaking-menu');
                const ex = document.getElementById('speaking-exercise');
                if (menu) menu.classList.remove('hidden');
                if (ex) ex.classList.add('hidden');
            } else if (module === 'vocabulary') {
                if (typeof VocabularyLearner !== 'undefined' && VocabularyLearner.showLevelSelector) {
                    const container = document.getElementById('vocabulary-learner');
                    if (container && !container.querySelector('.level-selector')) {
                        VocabularyLearner.showLevelSelector();
                    }
                }
            } else if (module === 'achievements') {
                if (typeof Achievements !== 'undefined' && Achievements.render) {
                    Achievements.render();
                }
            }
        } catch (e) {
            console.warn('resetModuleSubviews error:', module, e);
        }
    },

    // Populate module content (idempotent - safe to call multiple times)
    populateModule(module) {
        try {
            if (module === 'grammar' && typeof GrammarModule !== 'undefined' && GrammarModule.showMenu) {
                const list = document.getElementById('grammar-lessons-list');
                if (list && list.children.length === 0) {
                    GrammarModule.showMenu();
                }
            } else if (module === 'listening' && typeof ListeningModule !== 'undefined' && ListeningModule.setupTypeCards) {
                ListeningModule.setupTypeCards();
            } else if (module === 'reading' && typeof ReadingModule !== 'undefined' && ReadingModule.setupTypeCards) {
                ReadingModule.setupTypeCards();
            } else if (module === 'speaking' && typeof SpeakingModule !== 'undefined' && SpeakingModule.setupTypeCards) {
                SpeakingModule.setupTypeCards();
            } else if (module === 'achievements' && typeof Achievements !== 'undefined' && Achievements.render) {
                Achievements.render();
            }
        } catch (e) {
            console.warn('populateModule error:', module, e);
        }
    },

    // Handle quick actions
    handleQuickAction(action) {
        switch(action) {
            case 'listening-challenge':
                this.navigateTo('listening');
                break;
            case 'vocab-review':
                this.navigateTo('vocabulary');
                break;
            case 'reading-quiz':
                this.navigateTo('reading');
                break;
            case 'grammar-practice':
                this.navigateTo('grammar');
                break;
        }
    },

    // Handle back button
    handleBack(target) {
        const module = target.replace('-menu', '').replace('-lesson', '').replace('-practice', '');
        this.navigateTo(module);
        
        // Reset specific module views
        if (target.includes('menu')) {
            this.showModuleMenu(module);
        }
    },

    // Show module menu
    showModuleMenu(module) {
        switch(module) {
            case 'listening':
                ListeningModule.showMenu();
                break;
            case 'reading':
                ReadingModule.showMenu();
                break;
            case 'vocabulary':
                VocabularyLearner.showLevelSelector();
                break;
            case 'grammar':
                GrammarModule.showMenu();
                break;
            case 'speaking':
                SpeakingModule.showMenu();
                break;
        }
    },

    // Toggle theme
    toggleTheme() {
        const body = document.body;
        const isDark = body.classList.contains('theme-dark');
        
        if (isDark) {
            body.classList.remove('theme-dark');
            body.classList.add('theme-light');
            StorageManager.updateUserData('settings.theme', 'light');
        } else {
            body.classList.remove('theme-light');
            body.classList.add('theme-dark');
            StorageManager.updateUserData('settings.theme', 'dark');
        }
    },

    // Load user preferences
    loadPreferences() {
        const userData = StorageManager.getUserData();
        
        // Set theme
        if (userData.settings.theme === 'light') {
            document.body.classList.remove('theme-dark');
            document.body.classList.add('theme-light');
        }
        
        // Update user name
        const userNameElement = document.getElementById('user-name');
        if (userNameElement) {
            userNameElement.textContent = userData.name || 'Learner';
        }
    },

    // Hide loading screen
    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        const mainNav = document.getElementById('main-nav');
        const mobileToggle = document.getElementById('mobile-nav-toggle');
        const mobileOverlay = document.getElementById('mobile-nav-overlay');
        
        // On mobile, keep nav hidden until toggled; on desktop, show it
        if (window.innerWidth > 768) {
            if (mainNav) mainNav.classList.remove('hidden');
        } else {
            if (mainNav) mainNav.classList.add('hidden');
            if (mobileToggle) mobileToggle.style.display = 'flex';
        }
         
        if (loadingScreen) {
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
        
        // Initialize dashboard
        Dashboard.init();
    },

    // Mobile nav
    setupMobileNav() {
        const toggle = document.getElementById('mobile-nav-toggle');
        const overlay = document.getElementById('mobile-nav-overlay');
        const nav = document.getElementById('main-nav');

        if (!toggle || !nav) return;

        const closeNav = () => {
            nav.classList.remove('mobile-open');
            nav.classList.add('hidden');
            if (overlay) overlay.classList.remove('visible');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        };

        const openNav = () => {
            nav.classList.add('mobile-open');
            nav.classList.remove('hidden');
            if (overlay) overlay.classList.add('visible');
            toggle.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';
        };

        toggle.addEventListener('click', () => {
            if (nav.classList.contains('mobile-open')) {
                closeNav();
            } else {
                openNav();
            }
        });

        if (overlay) {
            overlay.addEventListener('click', closeNav);
        }
    },

    // Close mobile nav (called on navigate)
    closeMobileNav() {
        const nav = document.getElementById('main-nav');
        if (nav && nav.classList.contains('mobile-open')) {
            document.getElementById('mobile-nav-toggle')?.click();
        }
    },

    // Handle keyboard shortcuts
    handleKeyboardShortcut(e) {
        // Ctrl/Cmd + number for navigation
        if (e.ctrlKey || e.metaKey) {
            const shortcuts = {
                '1': 'dashboard',
                '2': 'listening',
                '3': 'reading',
                '4': 'vocabulary',
                '5': 'grammar',
                '6': 'speaking',
                '7': 'achievements'
            };
            
            if (shortcuts[e.key]) {
                e.preventDefault();
                this.navigateTo(shortcuts[e.key]);
            }
        }
    },

    // Show toast notification
    showToast(message, type = 'info') {
        Utils.showToast(message, type);
    },

    // Show a polished exercise completion modal.
    // onBack / onRetry must be FUNCTIONS (not strings) — interpolating strings
    // into onclick is an eval-equivalent XSS / code-injection sink.
    showCompletionModal(opts) {
        const {
            title = 'Exercise Complete!',
            score,
            total,
            percentage,
            xp = 0,
            isPerfect = false,
            onBack = null,
            onRetry = null,
            backLabel = 'Back to Menu',
            retryLabel = 'Try Again'
        } = opts;

        let emoji, message;
        if (isPerfect) {
            emoji = '🏆';
            message = 'Perfect score! You nailed every question.';
        } else if (percentage >= 80) {
            emoji = '🌟';
            message = 'Great work! You really know your stuff.';
        } else if (percentage >= 60) {
            emoji = '👍';
            message = 'Good effort! A little more practice will help.';
        } else if (percentage >= 40) {
            emoji = '💪';
            message = 'Keep at it — repetition makes perfect.';
        } else {
            emoji = '🌱';
            message = 'Every expert started here. Try again!';
        }

        const scoreColor = isPerfect ? '#f1c40f' :
                           percentage >= 80 ? '#2ecc71' :
                           percentage >= 60 ? '#3498db' :
                           percentage >= 40 ? '#f39c12' : '#e74c3c';

        const safeTitle = Utils.escapeHtml(title);
        const safeMessage = Utils.escapeHtml(message);
        const safeBackLabel = Utils.escapeHtml(backLabel);
        const safeRetryLabel = Utils.escapeHtml(retryLabel);
        const safeEmoji = Utils.escapeHtml(emoji);
        const pctNum = Number(percentage) || 0;
        const scoreNum = Number(score) || 0;
        const totalNum = Number(total) || 0;
        const xpNum = Number(xp) || 0;

        const modal = document.getElementById('modal');
        const modalBody = document.getElementById('modal-body');
        modalBody.innerHTML = `
            <div class="activity-card" style="text-align:center; max-width:460px;">
                <div style="font-size:64px; margin-bottom:8px;">${safeEmoji}</div>
                <h2 style="margin:0 0 6px; color:white; font-size:24px;">${safeTitle}</h2>
                <p style="color:rgba(255,255,255,0.65); margin:0 0 18px; font-size:14px;">${safeMessage}</p>
                <div style="margin: 18px auto; width:140px; height:140px; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-direction:column;
                    background: conic-gradient(${scoreColor} ${pctNum * 3.6}deg, rgba(255,255,255,0.08) ${pctNum * 3.6}deg);
                    box-shadow: 0 0 30px ${scoreColor}40;">
                    <div style="width:110px; height:110px; border-radius:50%; background:rgba(20,20,30,0.9); display:flex; align-items:center; justify-content:center;">
                        <div>
                            <div style="font-size:36px; font-weight:800; color:${scoreColor}; line-height:1;">${pctNum}%</div>
                            <div style="font-size:12px; color:rgba(255,255,255,0.55); margin-top:4px;">${scoreNum}/${totalNum}</div>
                        </div>
                    </div>
                </div>
                ${xpNum > 0 ? `
                    <div style="display:inline-flex; align-items:center; gap:6px; padding:8px 18px; background:rgba(241,196,15,0.12); border:1px solid rgba(241,196,15,0.3); border-radius:999px; color:#ffd86b; font-weight:600; font-size:14px;">
                        ⭐ +${xpNum} XP earned
                    </div>
                ` : ''}
                <div class="completion-actions" style="display:flex; gap:10px; justify-content:center; margin-top:22px; flex-wrap:wrap;">
                    ${onBack ? `<button type="button" class="btn btn-primary" data-cm-action="back">${safeBackLabel}</button>` : ''}
                    ${onRetry ? `<button type="button" class="btn btn-secondary" data-cm-action="retry">${safeRetryLabel}</button>` : ''}
                </div>
            </div>
        `;
        modal.classList.remove('hidden');

        // Wire button handlers via addEventListener (no inline onclick → CSP-safe)
        if (onBack) {
            const btn = modalBody.querySelector('[data-cm-action="back"]');
            if (btn) btn.addEventListener('click', () => {
                App.closeModal();
                try { onBack(); } catch (e) { if (App.DEBUG) console.error(e); }
            });
        }
        if (onRetry) {
            const btn = modalBody.querySelector('[data-cm-action="retry"]');
            if (btn) btn.addEventListener('click', () => {
                App.closeModal();
                try { onRetry(); } catch (e) { if (App.DEBUG) console.error(e); }
            });
        }

        // Standard close handlers + Escape key
        const closeBtn = modal.querySelector('.modal-close');
        const overlay = modal.querySelector('.modal-overlay');
        closeBtn.onclick = () => modal.classList.add('hidden');
        overlay.onclick = () => modal.classList.add('hidden');
        this._trapModalFocus(modal);
    },

    // Show modal
    showModal(content) {
        const modal = document.getElementById('modal');
        const modalBody = document.getElementById('modal-body');

        modalBody.innerHTML = content;
        modal.classList.remove('hidden');

        // Close modal handlers
        const closeBtn = modal.querySelector('.modal-close');
        const overlay = modal.querySelector('.modal-overlay');

        closeBtn.onclick = () => modal.classList.add('hidden');
        overlay.onclick = () => modal.classList.add('hidden');

        this._trapModalFocus(modal);
    },

    // Basic focus trap + Escape-to-close for modal accessibility
    _trapModalFocus(modal) {
        if (!modal) return;
        // Make the modal behave as a dialog
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        if (!modal.getAttribute('aria-label')) modal.setAttribute('aria-label', 'Dialog');

        // Escape closes
        const onKey = (e) => {
            if (e.key === 'Escape') {
                modal.classList.add('hidden');
                document.removeEventListener('keydown', onKey);
            }
        };
        document.addEventListener('keydown', onKey);

        // Move focus into the modal
        const focusable = modal.querySelector('button, [tabindex], input, [role="button"]');
        if (focusable) { try { focusable.focus(); } catch (_) {} }
    },

    // Close modal
    closeModal() {
        const modal = document.getElementById('modal');
        modal.classList.add('hidden');
    },

    // Get current module
    getCurrentModule() {
        return this.currentModule;
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});

// Export for use in other modules
window.App = App;

// Custom in-app confirm modal (replaces blocking window.confirm).
// onConfirm should return a truthy value to consider the action performed.
// Returns a Promise that resolves to true if confirmed, false otherwise.
App.confirmModal = function (opts) {
    const {
        title = 'Are you sure?',
        message = 'This action cannot be undone.',
        confirmLabel = 'Confirm',
        cancelLabel = 'Cancel',
        destructive = false,
        onConfirm = null
    } = opts || {};

    return new Promise((resolve) => {
        const modal = document.getElementById('modal');
        const modalBody = document.getElementById('modal-body');
        const safeTitle = Utils.escapeHtml(title);
        const safeMessage = Utils.escapeHtml(message);
        const safeConfirm = Utils.escapeHtml(confirmLabel);
        const safeCancel = Utils.escapeHtml(cancelLabel);
        modalBody.innerHTML = `
            <div class="activity-card" style="text-align:center; max-width:440px;">
                <h2 style="margin:0 0 10px; color:white;">${safeTitle}</h2>
                <p style="color:rgba(255,255,255,0.7); margin:0 0 22px; line-height:1.5;">${safeMessage}</p>
                <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
                    <button type="button" class="btn ${destructive ? 'btn-danger' : 'btn-primary'}" data-cm-action="confirm-yes">${safeConfirm}</button>
                    <button type="button" class="btn btn-secondary" data-cm-action="confirm-no">${safeCancel}</button>
                </div>
            </div>
        `;
        modal.classList.remove('hidden');
        this._trapModalFocus(modal);

        const cleanup = () => {
            modal.classList.add('hidden');
            modalBody.innerHTML = '';
        };

        const yesBtn = modalBody.querySelector('[data-cm-action="confirm-yes"]');
        const noBtn = modalBody.querySelector('[data-cm-action="confirm-no"]');
        if (yesBtn) yesBtn.addEventListener('click', () => {
            let ok = true;
            try { ok = onConfirm ? onConfirm() !== false : true; } catch (e) { ok = false; }
            cleanup();
            resolve(!!ok);
        });
        if (noBtn) noBtn.addEventListener('click', () => { cleanup(); resolve(false); });
        // Esc closes as cancel
        const onKey = (e) => {
            if (e.key === 'Escape') {
                document.removeEventListener('keydown', onKey);
                cleanup();
                resolve(false);
            }
        };
        document.addEventListener('keydown', onKey);
    });
};
// ============================================
// CHINESE MASTER - Main Application
// ============================================

const App = {
    // Current state
    currentModule: 'dashboard',
    isInitialized: false,
    DEBUG: false, // set true to surface diagnostic logs in console
    _navInProgress: false,
    _navQueue: [],

    // Initialize the app
    init() {
        if (this.DEBUG) console.log('Initializing Chinese Master App...');
        var _initStart = Date.now();

        // Set dynamic footer year
        var footerYear = document.getElementById('footer-year');
        if (footerYear) footerYear.textContent = new Date().getFullYear();

        // Each init step wrapped in its own try/catch — one failure doesn't block later steps

        try {
            if (typeof ErrorLogger !== 'undefined' && typeof ErrorLogger.install === 'function') {
                ErrorLogger.install();
            }
        } catch (e) { console.warn('ErrorLogger init failed:', e); }

        try {
            if (typeof AnalyticsEngine !== 'undefined' && typeof AnalyticsEngine.init === 'function') {
                AnalyticsEngine.init();
            }
        } catch (e) { console.warn('AnalyticsEngine init failed:', e); }

        try {
            if (typeof OfflineBanner !== 'undefined' && typeof OfflineBanner.init === 'function') {
                OfflineBanner.init();
            }
        } catch (e) { console.warn('OfflineBanner init failed:', e); }

        // Modal chrome close handlers — attach once, not per-open
        try { this._setupModalChrome(); } catch (e) { console.warn('_setupModalChrome failed:', e); }

        // Initialize storage (which in turn initializes SessionManager)
        // ponytail: guard against localStorage failure so buttons still work
        try { StorageManager.init(); } catch (e) { console.warn('Storage init failed:', e); }

        // Initialize audio (non-critical — failure must not cascade)
        try { AudioManager.init(); } catch (e) { console.warn('Audio init failed:', e); }

        // SM-2, PinyinToggle, DailyStreak, TonePractice, AdvancedLearning, LevelTracker, VocabularyLearner
        if (typeof SM2 !== 'undefined') { /* SM-2 is stateless */ }
        if (typeof TonePractice !== 'undefined') { /* loaded */ }

        try {
            if (typeof PinyinToggle !== 'undefined') PinyinToggle.init();
        } catch (e) { console.warn('PinyinToggle init failed:', e); }

        try {
            if (typeof DailyStreak !== 'undefined') DailyStreak.init();
        } catch (e) { console.warn('DailyStreak init failed:', e); }

        try {
            if (typeof AdvancedLearning !== 'undefined') AdvancedLearning.init();
        } catch (e) { console.warn('AdvancedLearning init failed:', e); }

        try {
            if (typeof LevelTracker !== 'undefined') LevelTracker.init();
        } catch (e) { console.warn('LevelTracker init failed:', e); }

        try {
            if (typeof VocabularyLearner !== 'undefined') VocabularyLearner.init();
        } catch (e) { console.warn('VocabularyLearner init failed:', e); }

        try {
            if (typeof WordOfTheDay !== 'undefined') WordOfTheDay.init();
        } catch (e) { console.warn('WordOfTheDay init failed:', e); }

        try {
            if (typeof CharacterTooltip !== 'undefined') CharacterTooltip.init();
        } catch (e) { console.warn('CharacterTooltip init failed:', e); }

        try {
            if (typeof Missions !== 'undefined') Missions.init();
        } catch (e) { console.warn('Missions init failed:', e); }

        try {
            if (typeof RecurringRewards !== 'undefined') {
                RecurringRewards.init();
                var loginResult = RecurringRewards.checkLogin();
                if (loginResult) {
                    setTimeout(function() {
                        RecurringRewards.showLoginRewardPopup(loginResult);
                    }, 2000);
                }
            }
        } catch (e) { console.warn('RecurringRewards init failed:', e); }

        // Background-load JSONL vocabulary (overwrites legacy globals when ready)
        try {
            if (typeof DataLoader !== 'undefined' && typeof DataLoader.populateGlobals === 'function') {
                DataLoader.populateGlobals();
            }
        } catch (e) { console.warn('DataLoader init failed:', e); }

        try { if (this.DEBUG) this.logDataStats(); } catch (e) { console.warn('logDataStats failed:', e); }

        // Global error capture (production-grade)
        try { this._installGlobalErrorHandlers(); } catch (e) { console.warn('_installGlobalErrorHandlers failed:', e); }

        // Populate desktop nav before binding listeners
        try { this.populateDesktopNav(); } catch (e) { console.warn('populateDesktopNav failed:', e); }

        // Set up event listeners
        try { this.setupEventListeners(); } catch (e) { console.warn('setupEventListeners failed:', e); }

        // Init mobile shell (≤844px) — noop on desktop
        try {
            if (typeof MobileShell !== 'undefined' && typeof MobileShell.init === 'function') {
                MobileShell.init();
            }
        } catch (e) { console.warn('MobileShell init failed:', e); }

        // Load user preferences
        try { this.loadPreferences(); } catch (e) { console.warn('loadPreferences failed:', e); }

        try {
            window.dispatchEvent(new CustomEvent('app-ready'));
        } catch (e) { console.warn('app-ready event failed:', e); }

        this.isInitialized = true;
        if (this.DEBUG) console.log('App initialized. Total vocab:', this.getTotalVocab());

        // Always hide loading screen
        this.hideLoadingScreen();

        // Hard deadline: loading screen MUST be gone within 3s from init start
        var self = this;
        var _initRemaining = Math.max(0, 3000 - (Date.now() - _initStart));
        this._initDeadlineTimer = setTimeout(function() {
            var ls = document.getElementById('loading-screen');
            if (ls && ls.style.display !== 'none') {
                ls.classList.add('fade-out');
                ls.style.display = 'none';
            }
            // Force-reveal GSAP elements if animations never ran
            var revealEls = document.querySelectorAll('.gsap-reveal, .gsap-reveal-left, .gsap-reveal-right, .gsap-reveal-scale, .gsap-reveal-fade');
            for (var ri = 0; ri < revealEls.length; ri++) {
                revealEls[ri].classList.add('gsap-reveal-visible');
            }
            var staggerEls = document.querySelectorAll('.stagger-children > *, .ink-stagger > *');
            for (var si = 0; si < staggerEls.length; si++) {
                staggerEls[si].style.opacity = '1';
                staggerEls[si].style.transform = 'none';
                staggerEls[si].style.filter = 'none';
            }
            // Force onHidden if never called
            if (typeof Dashboard !== 'undefined' && !Dashboard._initialized) {
                try { Dashboard.init(); Dashboard._initialized = true; } catch (e) {}
            }
            var mn = document.getElementById('main-nav');
            if (mn && window.innerWidth > 844) { mn.classList.remove('hidden'); mn.classList.add('fade-in'); }
            if (self.currentModule !== 'dashboard') {
                try { self.navigateTo('dashboard'); } catch (e) {}
            }
        }, _initRemaining);

        // Fail-safe: force-initialize any modules that haven't started yet
        this._startFailSafe();
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

        // Scroll progress bar is GSAP-scrub-driven (see InkAnimations.initScrollProgressBar).
        // No manual scroll listener here to avoid a double-driver on #scroll-progress-fill.
    },

    // Navigate to a module
    navigateTo(module) {
        // --- NAVIGATION GUARD: queue if already in progress ---
        if (this._navInProgress) {
            // Replace pending queued nav with latest request (only one queued)
            this._navQueue[0] = module;
            return;
        }
        this._navInProgress = true;

        try {
            var targetModule = document.getElementById('module-' + module);

            // Abort gracefully if target module element doesn't exist
            if (!targetModule) {
                console.warn('navigateTo: module "' + module + '" not found in DOM');
                this._navInProgress = false;
                return;
            }

            var oldModuleEl = document.querySelector('.module.active');
            var isSameModule = !!(oldModuleEl && targetModule && oldModuleEl === targetModule);

            // Update nav-link active states (before DOM mutations, so active state matches target)
            var navLinks = document.querySelectorAll('.nav-link');
            if (navLinks && navLinks.length) {
                navLinks.forEach(function(link) {
                    if (link.classList) link.classList.remove('active');
                    if (link.dataset && link.dataset.module === module && link.classList) {
                        link.classList.add('active');
                    }
                });
            }

            // Only toggle .active if switching modules (avoids animation replay on back-button)
            if (!isSameModule) {
                // Clean up exiting module BEFORE activating new one
                if (typeof InkAnimations !== 'undefined' && InkAnimations.moduleExit && oldModuleEl) {
                    InkAnimations.moduleExit(oldModuleEl);
                }

                var allModules = document.querySelectorAll('.module');
                if (allModules && allModules.length) {
                    allModules.forEach(function(m) {
                        if (m.classList) m.classList.remove('active');
                    });
                }
                if (targetModule && targetModule.classList) {
                    targetModule.classList.add('active');
                    targetModule.removeAttribute('hidden');
                }

                if (typeof InkAnimations !== 'undefined' && InkAnimations.pageTransition && oldModuleEl) {
                    InkAnimations.pageTransition(oldModuleEl, targetModule);
                }
                // moduleEnter is deferred until after populateModule so it fires once on populated DOM
            }

            // --- FORCE-HIDE LOADING SCREEN after module switch ---
            var loadingScreen = document.getElementById('loading-screen');
            if (loadingScreen) {
                if (loadingScreen.style) loadingScreen.style.display = 'none';
                if (loadingScreen.classList) loadingScreen.classList.add('fade-out');
                // Also clear any pending hideLoader fallback timer stored on the App
                if (this._hideLoaderTimer) {
                    clearTimeout(this._hideLoaderTimer);
                    this._hideLoaderTimer = null;
                }
            }

            // Reset any sub-containers that might be stuck in an exercise view
            this.resetModuleSubviews(module);

            this.currentModule = module;

            // Sync mobile tab bar active state
            if (typeof MobileTabBar !== 'undefined' && typeof MobileTabBar.setActive === 'function') {
                MobileTabBar.setActive(module);
            }

            // Close mobile nav on navigation
            if (typeof this.closeMobileNav === 'function') this.closeMobileNav();

            // Auto-populate module content on first navigation
            this.populateModule(module);

            // Update dashboard if needed
            if (module === 'dashboard' && typeof Dashboard !== 'undefined' && Dashboard.update) {
                Dashboard.update();
            }

            // Launch adaptive placement test
            if (module === 'placement' && typeof PlacementTest !== 'undefined' && PlacementTest.showIntro) {
                PlacementTest.showIntro();
            }

            // Trigger module enter after lazy content populated (only for different module)
            // Use setTimeout to let DOM settle after populateModule before re-entering
            if (!isSameModule) {
                var modEl = document.getElementById('module-' + module);
                if (modEl && modEl.classList) {
                    if (typeof InkAnimations !== 'undefined' && InkAnimations.moduleEnter) {
                        InkAnimations.moduleEnter(modEl, module);
                    }
                    // Bind scroll-reveals + re-bind tilt/magnetic on freshly-populated DOM (single entrance)
                    if (typeof InkAnimations !== 'undefined' && InkAnimations.revealModule) {
                        InkAnimations.revealModule(modEl);
                    }
                    if (typeof InkAnimations !== 'undefined' && InkAnimations.refreshInteractions) {
                        InkAnimations.refreshInteractions(modEl);
                    }
                }
                // Reset scroll to top of new module (Lenis-aware) so user starts fresh
                if (typeof InkAnimations !== 'undefined' && InkAnimations.scrollTo) {
                    InkAnimations.scrollTo(0, { immediate: true });
                } else {
                    window.scrollTo(0, 0);
                }
            }

            // Trigger scroll-reveal on new module's gsap-reveal elements (debounced)
            if (typeof ScrollTrigger !== 'undefined') {
                if (this._scrollRefreshTimer) clearTimeout(this._scrollRefreshTimer);
                this._scrollRefreshTimer = setTimeout(function() {
                    ScrollTrigger.refresh();
                }, 100);
            }
        } catch (e) {
            console.error('navigateTo: transition failed for module "' + module + '"', e);
        } finally {
            this._navInProgress = false;

            // --- PROCESS QUEUED NAVIGATION ---
            if (this._navQueue.length > 0) {
                var nextModule = this._navQueue.shift();
                // Use setTimeout to prevent stack overflow from recursive calls
                var self = this;
                setTimeout(function() {
                    self.navigateTo(nextModule);
                }, 0);
            }
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
                const search = document.getElementById('grammar-search');
                if (menu) menu.classList.remove('hidden');
                if (lesson) lesson.classList.add('hidden');
                if (practice) practice.classList.add('hidden');
                if (search) search.value = '';
                if (typeof GrammarModule !== 'undefined' && GrammarModule._renderProgress) {
                    GrammarModule._renderProgress();
                }
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
                GrammarModule.showMenu();
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
                if (typeof GrammarModule !== 'undefined' && GrammarModule.continueNextIncomplete) {
                    GrammarModule.continueNextIncomplete();
                }
                break;
            case 'placement-test':
                this.navigateTo('placement');
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
                if (typeof ListeningModule !== 'undefined' && ListeningModule.showMenu) ListeningModule.showMenu();
                break;
            case 'reading':
                if (typeof ReadingModule !== 'undefined' && ReadingModule.showMenu) ReadingModule.showMenu();
                break;
            case 'vocabulary':
                if (typeof VocabularyLearner !== 'undefined' && VocabularyLearner.showLevelSelector) VocabularyLearner.showLevelSelector();
                break;
            case 'grammar':
                if (typeof GrammarModule !== 'undefined' && GrammarModule.showMenu) GrammarModule.showMenu();
                break;
            case 'speaking':
                if (typeof SpeakingModule !== 'undefined' && SpeakingModule.showMenu) SpeakingModule.showMenu();
                break;
        }
    },

    // Load user preferences
    loadPreferences() {
        const userData = StorageManager.getUserData();

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
        
        // On mobile (≤844px), keep nav hidden (tab bar owns nav); on desktop, show it
        if (window.innerWidth > 844) {
            if (mainNav) mainNav.classList.remove('hidden');
        } else {
            if (mainNav) mainNav.classList.add('hidden');
            if (mobileToggle) mobileToggle.style.display = 'flex';
        }
        
        // Use GSAP-powered loader if available, otherwise fall back to CSS
        const onHidden = () => {
            if (mainNav && window.innerWidth > 844) {
                mainNav.classList.add('fade-in');
            }
            this.navigateTo('dashboard');
            // navigateTo already calls Dashboard.update(), but init() also
            // sets greeting text + backup reminder — guard to avoid double update
            if (typeof Dashboard !== 'undefined' && !Dashboard._initialized) {
                Dashboard.init();
                Dashboard._initialized = true;
            }
        };
        
        if (loadingScreen) {
            var hiddenFired = false;
            var safeOnHidden = function() {
                if (hiddenFired) return;
                hiddenFired = true;
                onHidden();
            };
            // Belt-and-suspenders: if hideLoader tween never completes, force after 2.5s
            if (typeof InkAnimations !== 'undefined' && InkAnimations.hideLoader) {
                this._hideLoaderTimer = setTimeout(function() {
                    loadingScreen.classList.add('fade-out');
                    loadingScreen.style.display = 'none';
                    safeOnHidden();
                }, 2500);
                InkAnimations.hideLoader(function() {
                    clearTimeout(this._hideLoaderTimer);
                    this._hideLoaderTimer = null;
                    safeOnHidden();
                }.bind(this));
            } else {
                loadingScreen.classList.add('fade-out');
                setTimeout(function() {
                    loadingScreen.style.display = 'none';
                    safeOnHidden();
                }, 500);
            }
        } else {
            onHidden();
        }
    },

    // Fail-safe: force-initialize any modules that haven't started yet.
    // Runs 2.5s after init() called, catches modules skipped by earlier failures.
    _startFailSafe() {
        var self = this;
        setTimeout(function() {
            // Force-reveal GSAP elements if GSAP/InkAnimations never loaded
            if (typeof InkAnimations === 'undefined' || !window.gsap) {
                var revealEls = document.querySelectorAll('.gsap-reveal, .gsap-reveal-left, .gsap-reveal-right, .gsap-reveal-scale, .gsap-reveal-fade');
                for (var ri = 0; ri < revealEls.length; ri++) {
                    revealEls[ri].classList.add('gsap-reveal-visible');
                }
                var staggerEls = document.querySelectorAll('.stagger-children > *, .ink-stagger > *');
                for (var si = 0; si < staggerEls.length; si++) {
                    staggerEls[si].style.opacity = '1';
                    staggerEls[si].style.transform = 'none';
                    staggerEls[si].style.filter = 'none';
                }
            }

            // Force-init feature modules that may have been skipped
            if (typeof Dashboard !== 'undefined' && !Dashboard._initialized) {
                try { Dashboard.init(); Dashboard._initialized = true; } catch (e) { console.warn('Fail-safe Dashboard:', e); }
            }
            if (typeof PinyinToggle !== 'undefined') {
                try { PinyinToggle.init(); } catch (e) {}
            }
            if (typeof DailyStreak !== 'undefined') {
                try { DailyStreak.init(); } catch (e) {}
            }
            if (typeof AdvancedLearning !== 'undefined') {
                try { AdvancedLearning.init(); } catch (e) {}
            }
            if (typeof LevelTracker !== 'undefined') {
                try { LevelTracker.init(); } catch (e) {}
            }
            if (typeof VocabularyLearner !== 'undefined') {
                try { VocabularyLearner.init(); } catch (e) {}
            }
            if (typeof WordOfTheDay !== 'undefined') {
                try { WordOfTheDay.init(); } catch (e) {}
            }
            if (typeof CharacterTooltip !== 'undefined') {
                try { CharacterTooltip.init(); } catch (e) {}
            }
            if (typeof Missions !== 'undefined') {
                try { Missions.init(); } catch (e) {}
            }
            if (typeof RecurringRewards !== 'undefined') {
                try { RecurringRewards.init(); } catch (e) {}
            }
            if (typeof MobileShell !== 'undefined' && typeof MobileShell.init === 'function') {
                try { MobileShell.init(); } catch (e) {}
            }
            if (typeof StorageManager !== 'undefined' && typeof StorageManager.init === 'function') {
                try { StorageManager.init(); } catch (e) {}
            }
            if (typeof AudioManager !== 'undefined' && typeof AudioManager.init === 'function') {
                try { AudioManager.init(); } catch (e) {}
            }
            if (typeof ErrorLogger !== 'undefined' && typeof ErrorLogger.install === 'function') {
                try { ErrorLogger.install(); } catch (e) {}
            }
            if (typeof AnalyticsEngine !== 'undefined' && typeof AnalyticsEngine.init === 'function') {
                try { AnalyticsEngine.init(); } catch (e) {}
            }
            if (typeof OfflineBanner !== 'undefined' && typeof OfflineBanner.init === 'function') {
                try { OfflineBanner.init(); } catch (e) {}
            }
            if (typeof DataLoader !== 'undefined' && typeof DataLoader.populateGlobals === 'function') {
                try { DataLoader.populateGlobals(); } catch (e) {}
            }

            // Re-run structural init if missed (these are idempotent)
            try { self.populateDesktopNav(); } catch (e) {}
            try { self.setupEventListeners(); } catch (e) {}
            try { self.loadPreferences(); } catch (e) {}
            try { self._setupModalChrome(); } catch (e) {}
            try { self._installGlobalErrorHandlers(); } catch (e) {}

            // Ensure we navigate to dashboard and show main nav
            var mn = document.getElementById('main-nav');
            if (mn && window.innerWidth > 844) { mn.classList.remove('hidden'); mn.classList.add('fade-in'); }
            if (self.currentModule !== 'dashboard') {
                try { self.navigateTo('dashboard'); } catch (e) {}
            }
        }, 2500);
    },

    // Mobile nav (legacy hamburger — disabled when tab bar active ≤844px)
    setupMobileNav() {
        if (window.matchMedia('(max-width: 844px)').matches) return;

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
        // Shift+? opens keyboard shortcut help
        if ((e.key === '?' || e.key === '/') && e.shiftKey) {
            e.preventDefault();
            this.showShortcutHelp();
            return;
        }

        // Ctrl/Cmd + number for navigation
        if (e.ctrlKey || e.metaKey) {
            const shortcuts = {
                '1': 'dashboard',
                '2': 'listening',
                '3': 'reading',
                '4': 'vocabulary',
                '5': 'grammar',
                '6': 'speaking',
                '7': 'achievements',
                '8': 'placement'
            };
            
            if (shortcuts[e.key]) {
                e.preventDefault();
                this.navigateTo(shortcuts[e.key]);
            }
        }
    },

    showShortcutHelp() {
        this.showModal(`
            <div style="text-align:center; max-width:440px;">
                <h2 style="margin:0 0 16px; color:var(--text-primary);">Keyboard Shortcuts</h2>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; text-align:left; font-size:14px;">
                    <div><kbd>Ctrl+1</kbd></div><div>Dashboard</div>
                    <div><kbd>Ctrl+2</kbd></div><div>Listening</div>
                    <div><kbd>Ctrl+3</kbd></div><div>Reading</div>
                    <div><kbd>Ctrl+4</kbd></div><div>Vocabulary</div>
                    <div><kbd>Ctrl+5</kbd></div><div>Grammar</div>
                    <div><kbd>Ctrl+6</kbd></div><div>Speaking</div>
                    <div><kbd>Ctrl+7</kbd></div><div>Achievements</div>
                    <div><kbd>Shift+?</kbd></div><div>This help</div>
                    <div><kbd>Esc</kbd></div><div>Close modal</div>
                </div>
                <button type="button" class="btn btn-primary" data-cm-action="close-help" style="margin-top:16px;">Got it</button>
            </div>
        `);
        const modal = document.getElementById('modal');
        const closeBtn = modal.querySelector('[data-cm-action="close-help"]');
        if (closeBtn) closeBtn.addEventListener('click', () => App.closeModal());
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

        const scoreColor = isPerfect ? '#d4952b' :
                           percentage >= 80 ? '#5aab8a' :
                           percentage >= 60 ? '#6095c0' :
                           percentage >= 40 ? '#d4952b' : '#d4432d';

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
        if (!modal || !modalBody) return;
        modalBody.innerHTML = `
            <div class="activity-card" style="text-align:center; max-width:460px;">
                <div style="font-size:64px; margin-bottom:8px;" class="completion-emoji">${safeEmoji}</div>
                <h2 style="margin:0 0 6px; color:var(--text-primary); font-size:24px;">${safeTitle}</h2>
                <p style="color:var(--text-secondary); margin:0 0 18px; font-size:14px;">${safeMessage}</p>
                <div class="completion-ring" style="margin:18px auto;width:140px;height:140px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-direction:column;
                    background:conic-gradient(${scoreColor} 0deg, rgba(255,255,255,0.08) 0deg);
                    box-shadow:0 0 30px ${scoreColor}40;--pct:0;">
                    <div style="width:110px;height:110px;border-radius:50%;background:rgba(20,20,30,0.9);display:flex;align-items:center;justify-content:center;">
                        <div>
                            <div class="completion-pct" style="font-size:36px;font-weight:800;color:${scoreColor};line-height:1;">0%</div>
                            <div class="completion-score" style="font-size:12px;color:rgba(255,255,255,0.55);margin-top:4px;" data-score="${scoreNum}">0/${totalNum}</div>
                        </div>
                    </div>
                </div>
                ${xpNum > 0 ? '<div style="display:inline-flex;align-items:center;gap:6px;padding:8px 18px;background:rgba(241,196,15,0.12);border:1px solid rgba(241,196,15,0.3);border-radius:999px;color:#ffd86b;font-weight:600;font-size:14px;">⭐ +' + xpNum + ' XP earned</div>' : ''}
                <div class="completion-actions" style="display:flex;gap:10px;justify-content:center;margin-top:22px;flex-wrap:wrap;">
                    ${onBack ? '<button type="button" class="btn btn-primary" data-cm-action="back">' + safeBackLabel + '</button>' : ''}
                    ${onRetry ? '<button type="button" class="btn btn-secondary" data-cm-action="retry">' + safeRetryLabel + '</button>' : ''}
                </div>
            </div>
        `;
        modal.classList.remove('hidden');

        /* GSAP ring fill animation */
        var ringEl = modalBody.querySelector('.completion-ring');
        if (ringEl && typeof InkAnimations !== 'undefined' && InkAnimations.animateCompletionRing) {
            InkAnimations.animateCompletionRing(ringEl, pctNum, scoreColor);
        } else if (ringEl) {
            ringEl.style.background = 'conic-gradient(' + scoreColor + ' ' + (pctNum * 3.6) + 'deg, rgba(255,255,255,0.08) ' + (pctNum * 3.6) + 'deg)';
            var pctDisplay = ringEl.querySelector('.completion-pct');
            if (pctDisplay) pctDisplay.textContent = pctNum + '%';
            var scDisplay = ringEl.querySelector('.completion-score');
            if (scDisplay) scDisplay.textContent = scoreNum + '/' + totalNum;
        }

        /* Emoji entrance */
        var emojiEl = modalBody.querySelector('.completion-emoji');
        if (emojiEl && typeof InkAnimations !== 'undefined') {
            var gs = window.gsap;
            if (gs) gs.fromTo(emojiEl, { scale: 0, rotation: -20 }, { scale: 1, rotation: 0, duration: 0.6, ease: 'back.out(2)', delay: 0.2 });
        }

        /* Confetti on perfect or >80% */
        if (isPerfect || pctNum >= 80) {
            Utils.showConfetti({ count: isPerfect ? 120 : 60 });
        }

        /* Play appropriate sound */
        if (isPerfect) {
            Utils.playSound('levelup');
        } else if (pctNum >= 60) {
            Utils.playSound('correct');
        }

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

        // Standard close handlers are attached once in _setupModalChrome
        this._trapModalFocus(modal);
    },

    showCompletionModalEnd() {},

    // Show modal
    showModal(content) {
        const modal = document.getElementById('modal');
        const modalBody = document.getElementById('modal-body');
        if (!modal || !modalBody) return;

        modalBody.innerHTML = content;
        modal.classList.remove('hidden');

        this._trapModalFocus(modal);
    },

    // Focus trap — Tab cycling + Escape-to-close for modal accessibility
    _trapModalFocus(modal) {
        if (!modal) return;
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        if (!modal.getAttribute('aria-label')) modal.setAttribute('aria-label', 'Dialog');

        const onKey = (e) => {
            if (e.key === 'Escape') {
                modal.classList.add('hidden');
                document.removeEventListener('keydown', onKey);
                return;
            }
            if (e.key !== 'Tab') return;

            const focusable = modal.querySelectorAll(
                'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
            );
            if (focusable.length === 0) return;

            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (e.shiftKey) {
                if (document.activeElement === first) { e.preventDefault(); last.focus(); }
            } else {
                if (document.activeElement === last) { e.preventDefault(); first.focus(); }
            }
        };
        document.addEventListener('keydown', onKey);

        // Move focus into the modal
        const firstFocusable = modal.querySelector('button, [tabindex], input, [role="button"]');
        if (firstFocusable) { try { firstFocusable.focus(); } catch (_) {} }
    },

    // Close modal
    closeModal() {
        const modal = document.getElementById('modal');
        if (modal) modal.classList.add('hidden');
    },

    // Attach modal close handlers once (avoid listener leak on .modal-close / .modal-overlay)
    _setupModalChrome() {
        var modal = document.getElementById('modal');
        if (!modal || this._modalChromeReady) return;
        this._modalChromeReady = true;
        var closeBtn = modal.querySelector('.modal-close');
        var overlay = modal.querySelector('.modal-overlay');
        if (closeBtn) closeBtn.addEventListener('click', function() { modal.classList.add('hidden'); });
        if (overlay) overlay.addEventListener('click', function() { modal.classList.add('hidden'); });
    },

    // Get current module
    getCurrentModule() {
        return this.currentModule;
    },

    // Populate #main-nav with links matching mobile tabbar structure
    populateDesktopNav() {
        var nav = document.getElementById('main-nav');
        if (!nav) return;

        var items = [
            { id: 'dashboard',   label: 'Home',    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>' },
            { id: 'listening',   label: 'Listen',  icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11h2a2 2 0 012 2v2a2 2 0 01-2 2H3a2 2 0 01-2-2v-2a2 2 0 012-2z"/><path d="M9 17a5 5 0 005-5V5a5 5 0 00-5-5"/><path d="M14 17a8 8 0 008-8V5"/></svg>' },
            { id: 'reading',      label: 'Read',    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="14" y2="11"/></svg>' },
            { id: 'vocabulary',   label: 'Vocab',   icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="12" y1="6" x2="12" y2="18"/><line x1="8" y1="12" x2="16" y2="12"/></svg>' },
            { id: 'grammar',      label: 'Grammar', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>' },
            { id: 'speaking',     label: 'Speak',   icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>' },
            { id: 'achievements', label: 'Goals',   icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>' },
            { id: 'placement',   label: 'Test',    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>' }
        ];

        var html =
            '<div class="nav-brand">' +
                '<span class="nav-brand__seal" lang="zh">知</span>' +
                '<span class="nav-brand__copy"><strong>ZHI STUDIO</strong><span>LANGUAGE SYSTEM</span></span>' +
            '</div>' +
            '<div class="nav-divider"></div>' +
            '<div class="nav-cluster-label">LEARNING MODES</div>' +
            '<div class="nav-links">';
        for (var i = 0; i < items.length; i++) {
            var it = items[i];
            var activeClass = it.id === 'dashboard' ? ' active' : '';
            html += '<a href="#" class="nav-link' + activeClass + '" data-module="' + it.id + '" aria-current="' + (it.id === 'dashboard' ? 'page' : 'false') + '">';
            html += '<span class="nav-icon">' + it.icon + '</span>';
            html += '<span class="nav-label">' + it.label + '</span>';
            html += '<span class="nav-key">' + String(i + 1) + '</span>';
            html += '</a>';
        }
        html += '</div>';
        html +=
            '<div class="nav-footer">' +
                '<button type="button" class="nav-user" id="profile-btn" aria-label="Open learner profile">' +
                    '<span class="nav-avatar" id="profile-name">L</span>' +
                    '<span><strong id="profile-name-text">Learner</strong><small>Local profile</small></span>' +
                '</button>' +
                '<div class="nav-status"><span>PROGRESS SAVED</span><b>LOCAL</b></div>' +
            '</div>';
        nav.innerHTML = html;
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
                <h2 style="margin:0 0 10px; color:var(--text-primary);">${safeTitle}</h2>
                <p style="color:var(--text-secondary); margin:0 0 22px; line-height:1.5;">${safeMessage}</p>
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

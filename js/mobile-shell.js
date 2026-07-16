var MobileShell = (function () {
    'use strict';

    var isInit = false;
    var topbarEl = null;
    var spacerEl = null;
    var isPhone = false;

    function checkPhone() {
        return window.matchMedia('(max-width: 844px)').matches;
    }

    function buildTopbar() {
        if (topbarEl) return;

        topbarEl = document.createElement('header');
        topbarEl.className = 'mobile-topbar';
        topbarEl.setAttribute('aria-label', 'App toolbar');

        var avatar = document.createElement('button');
        avatar.className = 'topbar-avatar';
        avatar.setAttribute('type', 'button');
        avatar.setAttribute('aria-label', 'Open menu');
        avatar.id = 'topbar-avatar';
        avatar.textContent = 'L';

        avatar.addEventListener('click', function () {
            if (typeof BottomSheet === 'undefined') return;
            if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
                navigator.vibrate(6);
            }

            BottomSheet.open({
                title: 'Menu',
                rows: [
                    { label: 'Achievements', icon: '🏆', action: 'achievements' },
                    { label: 'Speaking', icon: '🎤', action: 'speaking' },
                    { label: 'Grammar', icon: '🔤', action: 'grammar' },
                    { type: 'divider' },
                    { label: 'Profile & Sessions', icon: '👤', action: 'profile' },
                    { label: 'Keyboard Shortcuts', icon: '⌨️', action: 'shortcuts' },
                    { label: 'Settings', icon: '⚙️', action: 'settings' }
                ],
                onAction: function (action) {
                    if (action === 'profile') {
                        if (typeof SessionManagerUI !== 'undefined') {
                            SessionManagerUI.open();
                        }
                    } else if (action === 'shortcuts') {
                        if (typeof App !== 'undefined' && typeof App.showShortcutHelp === 'function') {
                            App.showShortcutHelp();
                        }
                    } else if (action === 'settings') {
                        if (typeof App !== 'undefined' && typeof App.showShortcutHelp === 'function') {
                            App.showShortcutHelp();
                        }
                    } else if (typeof App !== 'undefined' && typeof App.navigateTo === 'function') {
                        App.navigateTo(action);
                    }
                }
            });
        });

        var brand = document.createElement('div');
        brand.className = 'topbar-brand';
        brand.setAttribute('aria-hidden', 'true');
        brand.innerHTML = '<span class="topbar-brand-icon">\u77e5</span>' +
            '<span class="topbar-brand-text">ZHI STUDIO</span>';

        var chips = document.createElement('div');
        chips.className = 'topbar-chips';
        chips.id = 'topbar-chips';
        chips.innerHTML =
            '<span class="topbar-chip">' +
                '<span class="topbar-chip-icon" aria-hidden="true">\uD83D\uDD25</span>' +
                '<span class="topbar-chip-value" id="topbar-streak">0</span>' +
            '</span>' +
            '<span class="topbar-chip">' +
                '<span class="topbar-chip-value" id="topbar-level">Lv1</span>' +
            '</span>';

        topbarEl.appendChild(avatar);
        topbarEl.appendChild(brand);
        topbarEl.appendChild(chips);

        spacerEl = document.createElement('div');
        spacerEl.className = 'mobile-topbar-spacer';
        spacerEl.setAttribute('aria-hidden', 'true');

        var mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.parentNode.insertBefore(spacerEl, mainContent);
            mainContent.parentNode.insertBefore(topbarEl, spacerEl);
        }
    }

    function updateTopbar() {
        if (!topbarEl) return;

        var streakCount = 0;
        var level = 1;
        var initial = 'L';

        try {
            var sid = typeof SessionManager !== 'undefined' ? SessionManager.getActiveSessionId() : null;
            if (sid && typeof StorageManager !== 'undefined') {
                var progress = StorageManager.getUserData();
                if (progress) {
                    streakCount = (typeof DailyStreak !== 'undefined' && typeof DailyStreak.getCurrentStreak === 'function') ?
                        DailyStreak.getCurrentStreak() :
                        (progress.streak || 0);
                    level = progress.level || 1;
                    if (progress.name) {
                        initial = progress.name.charAt(0).toUpperCase();
                    }
                }
            }
        } catch (ignore) {}

        var streakEl = document.getElementById('topbar-streak');
        if (streakEl) streakEl.textContent = String(streakCount);

        var levelEl = document.getElementById('topbar-level');
        if (levelEl) levelEl.textContent = 'Lv' + level;

        var avatarEl = document.getElementById('topbar-avatar');
        if (avatarEl) avatarEl.textContent = initial;
    }

    function hookModuleTransition(module) {
        var target = document.getElementById('module-' + module);
        if (!target) return;

        if (isPhone) {
            target.style.animation = 'none';
            target.offsetHeight;
            target.style.animation = 'moduleSlideIn 280ms cubic-bezier(0.32, 0.72, 0, 1) both';

            var pref = window.matchMedia('(prefers-reduced-motion: reduce)');
            if (pref.matches) {
                target.style.animation = 'none';
            }
        }
    }

    function init() {
        if (isInit) return;
        isInit = true;

        isPhone = checkPhone();
        if (!isPhone) return;

        buildTopbar();
        updateTopbar();

        if (typeof MobileTabBar !== 'undefined') {
            MobileTabBar.init();
        }

        document.addEventListener('keydown', function (e) {
            if (typeof BottomSheet !== 'undefined') {
                BottomSheet.onKeydown(e);
            }
        });

        window.addEventListener('resize', function () {
            var wasPhone = isPhone;
            isPhone = checkPhone();
            if (!wasPhone && isPhone) {
                buildTopbar();
                updateTopbar();
                if (typeof MobileTabBar !== 'undefined') {
                    MobileTabBar.init();
                }
            }
        });

        setTimeout(updateTopbar, 800);
    }

    function updateStreak(count) {
        var el = document.getElementById('topbar-streak');
        if (el) el.textContent = String(count || 0);
    }

    function updateLevel(level) {
        var el = document.getElementById('topbar-level');
        if (el) el.textContent = 'Lv' + (level || 1);
    }

    return {
        init: init,
        updateTopbar: updateTopbar,
        updateStreak: updateStreak,
        updateLevel: updateLevel,
        hookModuleTransition: hookModuleTransition
    };
})();

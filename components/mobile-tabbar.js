var MobileTabBar = (function () {
    'use strict';

    var tabs = [];
    var activeModule = 'dashboard';
    var isInit = false;

    var MODULES = [
        { id: 'dashboard',    label: i18n.t('nav.home'),    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>' },
        { id: 'listening',    label: i18n.t('nav.listen'),    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11h2a2 2 0 012 2v2a2 2 0 01-2 2H3a2 2 0 01-2-2v-2a2 2 0 012-2z"/><path d="M9 17a5 5 0 005-5V5a5 5 0 00-5-5"/><path d="M14 17a8 8 0 008-8V5"/></svg>' },
        { id: null,           label: i18n.t('nav.learn'),     icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>', isFab: true },
        { id: 'reading',      label: i18n.t('nav.read'),    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="14" y2="11"/></svg>' },
        { id: 'vocabulary',   label: i18n.t('nav.vocab'),    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="12" y1="6" x2="12" y2="18"/><line x1="8" y1="12" x2="16" y2="12"/></svg>' },
        { id: 'more',         label: i18n.t('nav.more'),      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>' }
    ];

    var MORE_SHEET_ROWS = [
        { label: 'Achievements', icon: '🏆', action: 'achievements' },
        { label: 'Speaking', icon: '🎤', action: 'speaking' },
        { label: 'Grammar', icon: '🔤', action: 'grammar' },
        { type: 'divider' },
        { label: 'Profile & Settings', icon: '👤', action: 'profile' },
        { label: 'Shortcuts', icon: '⌨️', action: 'shortcuts' }
    ];

    function buildTabEl(module) {
        var el = document.createElement('button');
        el.className = 'mobile-tab';
        el.setAttribute('type', 'button');
        el.setAttribute('role', 'tab');
        el.setAttribute('aria-selected', 'false');
        el.setAttribute('aria-controls', 'main-content');

        var iconSpan = document.createElement('span');
        iconSpan.className = 'mobile-tab-icon';
        iconSpan.innerHTML = module.icon;

        var labelSpan = document.createElement('span');
        labelSpan.className = 'mobile-tab-label';
        labelSpan.textContent = module.label;

        el.appendChild(iconSpan);
        el.appendChild(labelSpan);

        if (module.id === 'dashboard') {
            el.classList.add('active');
            el.setAttribute('aria-selected', 'true');
        }

        el.addEventListener('click', function () {
            if (module.id === 'more') {
                openMoreSheet();
                return;
            }
            if (typeof App !== 'undefined' && typeof App.navigateTo === 'function') {
                App.navigateTo(module.id);
            }
        });

        el.addEventListener('keydown', function (e) {
            if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                e.preventDefault();
                var dir = e.key === 'ArrowRight' ? 1 : -1;
                var idx = tabs.indexOf(el);
                var next = idx + dir;
                if (next >= 0 && next < tabs.length) {
                    tabs[next].focus();
                }
            }
        });

        return el;
    }

    function openMoreSheet() {
        if (typeof BottomSheet === 'undefined') return;
        if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
            navigator.vibrate(8);
        }

        BottomSheet.open({
            title: 'More',
            rows: MORE_SHEET_ROWS,
            onAction: function (action) {
                if (action === 'profile') {
                    if (typeof SessionManagerUI !== 'undefined') {
                        SessionManagerUI.open();
                    }
                } else if (action === 'shortcuts') {
                    if (typeof App !== 'undefined' && typeof App.showShortcutHelp === 'function') {
                        App.showShortcutHelp();
                    }
                } else if (typeof App !== 'undefined' && typeof App.navigateTo === 'function') {
                    App.navigateTo(action);
                }
            }
        });
    }

    // ==== Public ====

    function init() {
        if (isInit) return;
        isInit = true;

        var container = document.getElementById('mobile-tabbar');
        if (!container) return;

        var fragment = document.createDocumentFragment();

        for (var i = 0; i < MODULES.length; i++) {
            var mod = MODULES[i];
            if (mod.isFab) {
                var fab = document.createElement('button');
                fab.className = 'mobile-fab pulse';
                fab.setAttribute('type', 'button');
                fab.setAttribute('aria-label', 'Learn - Grammar');

                var fabIcon = document.createElement('span');
                fabIcon.className = 'mobile-tab-icon';
                fabIcon.innerHTML = mod.icon;
                fab.appendChild(fabIcon);

                fab.addEventListener('click', function () {
                    if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
                        navigator.vibrate(8);
                    }
                    if (typeof App !== 'undefined' && typeof App.navigateTo === 'function') {
                        App.navigateTo('grammar');
                    }
                });

                fab.addEventListener('keydown', function (e) {
                    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                        e.preventDefault();
                        var firstTab = tabs[0];
                        if (firstTab) firstTab.focus();
                    }
                });

                fragment.appendChild(fab);
            } else {
                var tabEl = buildTabEl(mod);
                tabs.push(tabEl);
                fragment.appendChild(tabEl);
            }
        }

        container.appendChild(fragment);
    }

    function setActive(module) {
        activeModule = module;
        for (var i = 0; i < tabs.length; i++) {
            var t = tabs[i];
            var mod = MODULES.find(function (m) { return m.id === module; });
            if (mod && t.querySelector('.mobile-tab-label').textContent === mod.label) {
                t.classList.add('active');
                t.setAttribute('aria-selected', 'true');
            } else {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            }
        }
    }

    function setBadge(tabId, count) {
        var mod = MODULES.find(function (m) { return m.id === tabId; });
        if (!mod) return;
        var label = mod.label;
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i].querySelector('.mobile-tab-label').textContent === label) {
                var existing = tabs[i].querySelector('.mobile-tab-badge');
                if (existing) existing.remove();
                if (count > 0) {
                    var badge = document.createElement('span');
                    badge.className = 'mobile-tab-badge';
                    badge.textContent = count > 99 ? '99+' : String(count);
                    tabs[i].appendChild(badge);
                }
                break;
            }
        }
    }

    function openMore() {
        openMoreSheet();
    }

    return {
        init: init,
        setActive: setActive,
        setBadge: setBadge,
        openMore: openMore
    };
})();

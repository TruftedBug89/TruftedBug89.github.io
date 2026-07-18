/**
 * Lightweight i18n module
 */
var i18n = (function() {
    'use strict';

    var currentLang = 'en';

    var dictionaries = {
        en: {
            nav: {
                home: 'Home',
                listen: 'Listen',
                read: 'Read',
                vocab: 'Vocab',
                grammar: 'Grammar',
                speak: 'Speak',
                goals: 'Goals',
                test: 'Test',
                learn: 'Learn',
                more: 'More'
            },
            dashboard: {
                greeting_morning: '早上好 · Good morning',
                greeting_afternoon: '下午好 · Good afternoon',
                greeting_evening: '晚上好 · Good evening',
                welcome_back: '你好 · Welcome back',
                subtitle: 'A little momentum becomes fluency. Let’s make today count.',
                os_online: 'YOUR LANGUAGE OS · ONLINE'
            },
            settings: {
                settings: 'Settings',
                profile_and_sessions: 'Profile & Sessions',
                keyboard_shortcuts: 'Keyboard Shortcuts',
                achievements: 'Achievements',
                speaking: 'Speaking',
                grammar: 'Grammar',
                ai_tutor_settings: 'AI Tutor Settings'
            }
        }
    };

    /**
     * Get a translated string by key (e.g. "nav.home")
     */
    function t(key, vars) {
        var dict = dictionaries[currentLang] || dictionaries['en'];
        var parts = key.split('.');
        var val = dict;

        for (var i = 0; i < parts.length; i++) {
            if (val && val.hasOwnProperty(parts[i])) {
                val = val[parts[i]];
            } else {
                return key; // Fallback to key if not found
            }
        }

        if (typeof val === 'string' && vars) {
            for (var k in vars) {
                if (vars.hasOwnProperty(k)) {
                    val = val.replace(new RegExp('{{' + k + '}}', 'g'), vars[k]);
                }
            }
        }

        return val;
    }

    /**
     * Set the current language
     */
    function setLang(lang) {
        if (dictionaries[lang]) {
            currentLang = lang;
        }
    }

    /**
     * Localize elements in the DOM with data-i18n attributes
     */
    function localizePage() {
        var elements = document.querySelectorAll('[data-i18n]');
        for (var i = 0; i < elements.length; i++) {
            var el = elements[i];
            var key = el.getAttribute('data-i18n');
            if (key) {
                el.textContent = t(key);
            }
        }

        var placeholders = document.querySelectorAll('[data-i18n-placeholder]');
        for (var j = 0; j < placeholders.length; j++) {
            var input = placeholders[j];
            var pKey = input.getAttribute('data-i18n-placeholder');
            if (pKey) {
                input.setAttribute('placeholder', t(pKey));
            }
        }
    }

    return {
        t: t,
        setLang: setLang,
        localizePage: localizePage,
        dictionaries: dictionaries // exposed for extending if needed
    };
})();

// Export globally
window.i18n = i18n;

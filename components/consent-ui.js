// ============================================
// CHINESE MASTER - Cookie Consent Banner
// GDPR / LSSI-CE compliant cookie management
// Self-initializes on DOMContentLoaded
// ============================================

const ConsentUI = {
    CM_CONSENT_KEY: 'cm_consent',
    CM_ANALYTICS_KEY: 'cm_analytics_consent',
    CM_CONSENT_DATE: 'cm_consent_date',

    banner: null,
    _configOpen: false,

    init() {
        if (this.hasConsent()) {
            if (window.location.hash === '#cookies') {
                this.reopenForPreferences();
            }
            return;
        }

        this.banner = this._createBanner();
        document.body.appendChild(this.banner);

        requestAnimationFrame(function () {
            if (ConsentUI.banner) {
                ConsentUI.banner.classList.add('cm-consent--visible');
                if (typeof InkAnimations !== 'undefined' && InkAnimations.slideInPanel) {
                    InkAnimations.slideInPanel(ConsentUI.banner, 'up');
                }
            }
        });

        setTimeout(function () {
            var firstBtn = ConsentUI.banner && ConsentUI.banner.querySelector('.cm-consent__btn--primary');
            if (firstBtn) firstBtn.focus();
        }, 350);

        if (window.location.hash === '#cookies') {
            this._openConfig();
        }

        this._listenHash();
    },

    hasConsent() {
        try { return localStorage.getItem(this.CM_CONSENT_KEY) !== null; } catch (e) { return false; }
    },

    isAnalyticsAllowed() {
        try { return localStorage.getItem(this.CM_ANALYTICS_KEY) === 'true'; } catch (e) { return false; }
    },

    getConsentDate() {
        try { return localStorage.getItem(this.CM_CONSENT_DATE) || null; } catch (e) { return null; }
    },

    _createBanner() {
        var banner = document.createElement('div');
        banner.className = 'cm-consent';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-label', 'Consentimiento de cookies');
        banner.setAttribute('aria-modal', 'true');
        banner.setAttribute('lang', 'es');
        banner.innerHTML = this._getBannerHTML();
        this._bindEvents(banner);
        this._trapFocus(banner);
        return banner;
    },

    _getBannerHTML() {
        var analyticsOn = localStorage.getItem(this.CM_ANALYTICS_KEY) !== 'false';

        return [
            '<div class="cm-consent__content">',
            '  <div class="cm-consent__text">',
            '    <span class="cm-consent__icon" aria-hidden="true">\uD83C\uDF6A</span>',
            '    <div>',
            '      <h2 class="cm-consent__title">Este sitio web utiliza cookies</h2>',
            '      <p class="cm-consent__message">Usamos cookies propias para guardar tu progreso de aprendizaje y estad\u00EDsticas an\u00F3nimas de uso. No hay anuncios, no hay patrocinadores, no vendemos tus datos. Solo tu aprendizaje, solo para ti.</p>',
            '    </div>',
            '  </div>',
            '  <div class="cm-consent__actions">',
            '    <button type="button" class="cm-consent__btn cm-consent__btn--primary" data-consent-action="accept-all">Aceptar todas</button>',
            '    <button type="button" class="cm-consent__btn cm-consent__btn--secondary" data-consent-action="necessary-only">Solo necesarias</button>',
            '    <button type="button" class="cm-consent__link" data-consent-action="config" aria-expanded="false" aria-controls="cookie-config-panel">Configurar</button>',
            '  </div>',
            '  <div class="cm-consent__footer">',
            '    <a href="#" class="cm-consent__policy-link" data-consent-action="policy" role="button">Pol\u00EDtica de Cookies</a>',
            '  </div>',
            '</div>',
            '<div class="cm-consent__config" id="cookie-config-panel" hidden>',
            '  <div class="cm-consent__config-item">',
            '    <div class="cm-consent__config-info">',
            '      <span class="cm-consent__config-label">Cookies necesarias</span>',
            '      <span class="cm-consent__config-desc">Para guardar tu progreso y sesi\u00F3n</span>',
            '    </div>',
            '    <label class="cm-consent__toggle cm-consent__toggle--disabled">',
            '      <input type="checkbox" checked disabled aria-label="Cookies necesarias, siempre activas">',
            '      <span class="cm-consent__toggle-slider" aria-hidden="true"></span>',
            '      <span class="cm-consent__toggle-state">Siempre activo</span>',
            '    </label>',
            '  </div>',
            '  <div class="cm-consent__config-item">',
            '    <div class="cm-consent__config-info">',
            '      <label class="cm-consent__config-label" for="cookie-toggle-analytics">Cookies anal\u00EDticas</label>',
            '      <span class="cm-consent__config-desc">Estad\u00EDsticas an\u00F3nimas de uso</span>',
            '    </div>',
            '    <label class="cm-consent__toggle">',
            '      <input type="checkbox" id="cookie-toggle-analytics" data-consent-toggle="analytics"' + (analyticsOn ? ' checked' : '') + ' aria-label="Cookies anal\u00EDticas, estad\u00EDsticas an\u00F3nimas de uso">',
            '      <span class="cm-consent__toggle-slider" aria-hidden="true"></span>',
            '    </label>',
            '  </div>',
            '  <button type="button" class="cm-consent__btn cm-consent__btn--primary" data-consent-action="save-preferences">Guardar preferencias</button>',
            '</div>'
        ].join('\n');
    },

    _bindEvents(banner) {
        var self = this;

        banner.querySelector('[data-consent-action="accept-all"]').addEventListener('click', function () {
            self._saveConsent('all', 'true');
        });

        banner.querySelector('[data-consent-action="necessary-only"]').addEventListener('click', function () {
            self._saveConsent('necessary', 'false');
        });

        banner.querySelector('[data-consent-action="config"]').addEventListener('click', function () {
            self._toggleConfig();
        });

        banner.querySelector('[data-consent-action="save-preferences"]').addEventListener('click', function () {
            var analyticsToggle = banner.querySelector('[data-consent-toggle="analytics"]');
            var analyticsOn = analyticsToggle ? analyticsToggle.checked : false;
            self._saveConsent(analyticsOn ? 'all' : 'necessary', analyticsOn ? 'true' : 'false');
        });

        banner.querySelector('[data-consent-action="policy"]').addEventListener('click', function (e) {
            e.preventDefault();
            self._openConfig();
        });
    },

    _saveConsent(consent, analytics) {
        try {
            localStorage.setItem(this.CM_CONSENT_KEY, consent);
            localStorage.setItem(this.CM_ANALYTICS_KEY, analytics);
            localStorage.setItem(this.CM_CONSENT_DATE, new Date().toISOString());
        } catch (e) { /* storage unavailable */ }
        this._dismiss();
    },

    _dismiss() {
        if (!this.banner) return;

        this.banner.classList.remove('cm-consent--visible');

        var self = this;
        var removed = false;
        var cleanup = function () {
            if (removed) return;
            removed = true;
            if (self.banner && self.banner.parentNode) {
                self.banner.remove();
            }
            self.banner = null;
            self._configOpen = false;
        };

        this.banner.addEventListener('transitionend', cleanup, { once: true });
        setTimeout(cleanup, 400);
    },

    _toggleConfig() {
        var configPanel = this.banner.querySelector('.cm-consent__config');
        var configBtn = this.banner.querySelector('[data-consent-action="config"]');
        if (!configPanel || !configBtn) return;

        if (configPanel.hidden) {
            configPanel.hidden = false;
            configBtn.setAttribute('aria-expanded', 'true');
            this._configOpen = true;
            var firstToggle = configPanel.querySelector('.cm-consent__toggle:not(.cm-consent__toggle--disabled) input');
            if (firstToggle) {
                setTimeout(function () { firstToggle.focus(); }, 100);
            }
        } else {
            configPanel.hidden = true;
            configBtn.setAttribute('aria-expanded', 'false');
            this._configOpen = false;
            configBtn.focus();
        }
    },

    _openConfig() {
        var configPanel = this.banner && this.banner.querySelector('.cm-consent__config');
        var configBtn = this.banner && this.banner.querySelector('[data-consent-action="config"]');
        if (configPanel && configPanel.hidden) {
            configPanel.hidden = false;
            if (configBtn) configBtn.setAttribute('aria-expanded', 'true');
            this._configOpen = true;
        }
    },

    _trapFocus(banner) {
        banner.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                e.preventDefault();
                return;
            }

            if (e.key !== 'Tab') return;

            var focusable = banner.querySelectorAll(
                'button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'
            );
            if (focusable.length === 0) return;

            var first = focusable[0];
            var last = focusable[focusable.length - 1];

            if (e.shiftKey) {
                if (document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                }
            } else {
                if (document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        });
    },

    _listenHash() {
        var self = this;
        window.addEventListener('hashchange', function () {
            if (window.location.hash === '#cookies') {
                if (ConsentUI.hasConsent()) {
                    self.reopenForPreferences();
                } else if (self.banner) {
                    self._openConfig();
                }
            }
        });
    },

    reopenForPreferences() {
        var prevConsent = null;
        var prevAnalytics = null;
        try {
            prevConsent = localStorage.getItem(this.CM_CONSENT_KEY);
            prevAnalytics = localStorage.getItem(this.CM_ANALYTICS_KEY);
            localStorage.removeItem(this.CM_CONSENT_KEY);
            localStorage.removeItem(this.CM_ANALYTICS_KEY);
            localStorage.removeItem(this.CM_CONSENT_DATE);
        } catch (e) { /* storage unavailable */ }

        if (this.banner && this.banner.parentNode) {
            this.banner.remove();
            this.banner = null;
        }

        try {
            if (prevAnalytics) {
                localStorage.setItem(this.CM_ANALYTICS_KEY, prevAnalytics);
            }
        } catch (e) { /* storage unavailable */ }

        this.banner = this._createBanner();
        document.body.appendChild(this.banner);

        requestAnimationFrame(function () {
            if (ConsentUI.banner) {
                ConsentUI.banner.classList.add('cm-consent--visible');
                if (typeof InkAnimations !== 'undefined' && InkAnimations.slideInPanel) {
                    InkAnimations.slideInPanel(ConsentUI.banner, 'up');
                }
            }
        });

        this._openConfig();
    }
};

window.ConsentUI = ConsentUI;

(function () {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () { ConsentUI.init(); });
    } else {
        ConsentUI.init();
    }
})();

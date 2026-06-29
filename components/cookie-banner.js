// ============================================
// CHINESE MASTER - Cookie Consent Banner
// GDPR / LSSI-CE compliant cookie management
// Self-initializes on DOMContentLoaded
// ============================================

const CookieBanner = {
    COOKIE_CONSENT_KEY: 'cookie_consent',
    ANALYTICS_CONSENT_KEY: 'analytics_consent',
    CONSENT_DATE_KEY: 'cookie_consent_date',

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
            if (CookieBanner.banner) {
                CookieBanner.banner.classList.add('cookie-banner--visible');
            }
        });

        setTimeout(function () {
            var firstBtn = CookieBanner.banner && CookieBanner.banner.querySelector('.cookie-banner__btn--primary');
            if (firstBtn) firstBtn.focus();
        }, 350);

        if (window.location.hash === '#cookies') {
            this._openConfig();
        }

        this._listenHash();
    },

    hasConsent() {
        return localStorage.getItem(this.COOKIE_CONSENT_KEY) !== null;
    },

    isAnalyticsAllowed() {
        return localStorage.getItem(this.ANALYTICS_CONSENT_KEY) === 'true';
    },

    getConsentDate() {
        return localStorage.getItem(this.CONSENT_DATE_KEY) || null;
    },

    _createBanner() {
        var banner = document.createElement('div');
        banner.className = 'cookie-banner';
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
        var analyticsOn = localStorage.getItem(this.ANALYTICS_CONSENT_KEY) !== 'false';

        return [
            '<div class="cookie-banner__content">',
            '  <div class="cookie-banner__text">',
            '    <span class="cookie-banner__icon" aria-hidden="true">\uD83C\uDF6A</span>',
            '    <div>',
            '      <h2 class="cookie-banner__title">Este sitio web utiliza cookies</h2>',
            '      <p class="cookie-banner__message">Usamos cookies propias para guardar tu progreso de aprendizaje y estad\u00EDsticas an\u00F3nimas de uso. No hay anuncios, no hay patrocinadores, no vendemos tus datos. Solo tu aprendizaje, solo para ti.</p>',
            '    </div>',
            '  </div>',
            '  <div class="cookie-banner__actions">',
            '    <button type="button" class="cookie-banner__btn cookie-banner__btn--primary" data-cookie-action="accept-all">Aceptar todas</button>',
            '    <button type="button" class="cookie-banner__btn cookie-banner__btn--secondary" data-cookie-action="necessary-only">Solo necesarias</button>',
            '    <button type="button" class="cookie-banner__link" data-cookie-action="config" aria-expanded="false" aria-controls="cookie-config-panel">Configurar</button>',
            '  </div>',
            '  <div class="cookie-banner__footer">',
            '    <a href="#" class="cookie-banner__policy-link" data-cookie-action="policy" role="button">Pol\u00EDtica de Cookies</a>',
            '  </div>',
            '</div>',
            '<div class="cookie-banner__config" id="cookie-config-panel" hidden>',
            '  <div class="cookie-banner__config-item">',
            '    <div class="cookie-banner__config-info">',
            '      <span class="cookie-banner__config-label">Cookies necesarias</span>',
            '      <span class="cookie-banner__config-desc">Para guardar tu progreso y sesi\u00F3n</span>',
            '    </div>',
            '    <label class="cookie-banner__toggle cookie-banner__toggle--disabled">',
            '      <input type="checkbox" checked disabled aria-label="Cookies necesarias, siempre activas">',
            '      <span class="cookie-banner__toggle-slider" aria-hidden="true"></span>',
            '      <span class="cookie-banner__toggle-state">Siempre activo</span>',
            '    </label>',
            '  </div>',
            '  <div class="cookie-banner__config-item">',
            '    <div class="cookie-banner__config-info">',
            '      <label class="cookie-banner__config-label" for="cookie-toggle-analytics">Cookies anal\u00EDticas</label>',
            '      <span class="cookie-banner__config-desc">Estad\u00EDsticas an\u00F3nimas de uso</span>',
            '    </div>',
            '    <label class="cookie-banner__toggle">',
            '      <input type="checkbox" id="cookie-toggle-analytics" data-cookie-toggle="analytics"' + (analyticsOn ? ' checked' : '') + ' aria-label="Cookies anal\u00EDticas, estad\u00EDsticas an\u00F3nimas de uso">',
            '      <span class="cookie-banner__toggle-slider" aria-hidden="true"></span>',
            '    </label>',
            '  </div>',
            '  <button type="button" class="cookie-banner__btn cookie-banner__btn--primary" data-cookie-action="save-preferences">Guardar preferencias</button>',
            '</div>'
        ].join('\n');
    },

    _bindEvents(banner) {
        var self = this;

        banner.querySelector('[data-cookie-action="accept-all"]').addEventListener('click', function () {
            self._saveConsent('all', 'true');
        });

        banner.querySelector('[data-cookie-action="necessary-only"]').addEventListener('click', function () {
            self._saveConsent('necessary', 'false');
        });

        banner.querySelector('[data-cookie-action="config"]').addEventListener('click', function () {
            self._toggleConfig();
        });

        banner.querySelector('[data-cookie-action="save-preferences"]').addEventListener('click', function () {
            var analyticsToggle = banner.querySelector('[data-cookie-toggle="analytics"]');
            var analyticsOn = analyticsToggle ? analyticsToggle.checked : false;
            self._saveConsent(analyticsOn ? 'all' : 'necessary', analyticsOn ? 'true' : 'false');
        });

        banner.querySelector('[data-cookie-action="policy"]').addEventListener('click', function (e) {
            e.preventDefault();
            self._openConfig();
        });
    },

    _saveConsent(consent, analytics) {
        localStorage.setItem(this.COOKIE_CONSENT_KEY, consent);
        localStorage.setItem(this.ANALYTICS_CONSENT_KEY, analytics);
        localStorage.setItem(this.CONSENT_DATE_KEY, new Date().toISOString());
        this._dismiss();
    },

    _dismiss() {
        if (!this.banner) return;

        this.banner.classList.remove('cookie-banner--visible');

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
        var configPanel = this.banner.querySelector('.cookie-banner__config');
        var configBtn = this.banner.querySelector('[data-cookie-action="config"]');
        if (!configPanel || !configBtn) return;

        if (configPanel.hidden) {
            configPanel.hidden = false;
            configBtn.setAttribute('aria-expanded', 'true');
            this._configOpen = true;
            var firstToggle = configPanel.querySelector('.cookie-banner__toggle:not(.cookie-banner__toggle--disabled) input');
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
        var configPanel = this.banner && this.banner.querySelector('.cookie-banner__config');
        var configBtn = this.banner && this.banner.querySelector('[data-cookie-action="config"]');
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
                if (CookieBanner.hasConsent()) {
                    self.reopenForPreferences();
                } else if (self.banner) {
                    self._openConfig();
                }
            }
        });
    },

    reopenForPreferences() {
        var prevConsent = localStorage.getItem(this.COOKIE_CONSENT_KEY);
        var prevAnalytics = localStorage.getItem(this.ANALYTICS_CONSENT_KEY);

        localStorage.removeItem(this.COOKIE_CONSENT_KEY);
        localStorage.removeItem(this.ANALYTICS_CONSENT_KEY);
        localStorage.removeItem(this.CONSENT_DATE_KEY);

        if (this.banner && this.banner.parentNode) {
            this.banner.remove();
            this.banner = null;
        }

        if (prevAnalytics) {
            localStorage.setItem(this.ANALYTICS_CONSENT_KEY, prevAnalytics);
        }

        this.banner = this._createBanner();
        document.body.appendChild(this.banner);

        requestAnimationFrame(function () {
            if (CookieBanner.banner) {
                CookieBanner.banner.classList.add('cookie-banner--visible');
            }
        });

        this._openConfig();
    }
};

window.CookieBanner = CookieBanner;

(function () {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () { CookieBanner.init(); });
    } else {
        CookieBanner.init();
    }
})();

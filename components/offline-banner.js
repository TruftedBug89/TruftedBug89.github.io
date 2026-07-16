// ============================================
// Offline Banner — notifies when connectivity changes
// Self-initialising, lightweight
// ============================================
const OfflineBanner = {
    banner: null,
    _online: true,

    init() {
        this._online = navigator.onLine;
        window.addEventListener('online', () => { this._online = true; this._showReconnected(); });
        window.addEventListener('offline', () => { this._online = false; this._showOffline(); });
    },

    _showOffline() {
        if (this._online) return;
        if (this.banner) return;
        this.banner = document.createElement('div');
        this.banner.className = 'offline-banner';
        this.banner.setAttribute('role', 'alert');
        this.banner.setAttribute('aria-live', 'polite');
        this.banner.innerHTML = '<span class="offline-banner__icon" aria-hidden="true">\u26A0\uFE0F</span> You\'re offline — your progress is saved locally and will sync when you reconnect.';
        document.body.appendChild(this.banner);
        requestAnimationFrame(() => {
            if (this.banner) {
                this.banner.classList.add('offline-banner--visible');
                if (typeof InkAnimations !== 'undefined' && InkAnimations.slideInPanel) {
                    InkAnimations.slideInPanel(this.banner, 'down');
                }
            }
        });
    },

    _showReconnected() {
        if (!this._online) return;
        if (this.banner) {
            this.banner.innerHTML = '<span class="offline-banner__icon" aria-hidden="true">\u2705</span> Back online! All progress synced.';
            this.banner.classList.add('offline-banner--reconnected');
            if (typeof InkAnimations !== 'undefined' && InkAnimations.attentionPulse) {
                InkAnimations.attentionPulse(this.banner);
            }
            setTimeout(() => this._dismiss(), 3000);
        }
    },

    _dismiss() {
        if (!this.banner) return;
        this.banner.classList.remove('offline-banner--visible', 'offline-banner--reconnected');
        const el = this.banner;
        this.banner = null;
        setTimeout(() => { if (el.parentNode) el.remove(); }, 400);
    }
};

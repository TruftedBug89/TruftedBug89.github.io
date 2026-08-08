// ============================================
// Network Status — offline/online toast only
// Self-initialising, lightweight non-blocking toast
// ============================================
const NetworkStatus = {
    toast: null,
    _online: true,

    init() {
        this._online = navigator.onLine;
        window.addEventListener('online', () => { this._online = true; this._showToast('\u2705 Back online!', 'success'); });
        window.addEventListener('offline', () => { this._online = false; this._showToast('\u26A0\uFE0F You\'re offline', 'warning'); });
    },

    _showToast(message, type) {
        this._dismiss(); // remove any existing

        this.toast = document.createElement('div');
        this.toast.className = `network-status-toast network-status-toast--${type}`;
        this.toast.setAttribute('role', 'status');
        this.toast.setAttribute('aria-live', 'polite');
        this.toast.innerHTML = '<span></span>';
        this.toast.querySelector('span').textContent = message;

        document.body.appendChild(this.toast);

        // Trigger animation
        requestAnimationFrame(() => {
            if (this.toast) {
                this.toast.classList.add('network-status-toast--visible');
            }
        });

        // Auto-dismiss after 3s
        setTimeout(() => this._dismiss(), 3000);
    },


    _dismiss() {
        if (!this.toast) return;
        this.toast.classList.remove('network-status-toast--visible');
        const el = this.toast;
        this.toast = null;
        setTimeout(() => { if (el && el.parentNode) el.remove(); }, 300);
    }
};

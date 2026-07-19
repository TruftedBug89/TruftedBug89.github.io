// ============================================
// Network Status — offline/online and service-worker updates
// Self-initialising, lightweight non-blocking toast
// ============================================
const NetworkStatus = {
    toast: null,
    _online: true,

    init() {
        this._online = navigator.onLine;
        window.addEventListener('online', () => { this._online = true; this._showToast('\u2705 Back online!', 'success'); });
        window.addEventListener('offline', () => { this._online = false; this._showToast('\u26A0\uFE0F You\'re offline', 'warning'); });

        // Listen for Service Worker updates
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.ready.then(reg => {
                // if there's already a waiting SW, notify
                if (reg.waiting) {
                    this._showSWUpdate();
                }

                // if a new SW is discovered, wait for it to install, then notify
                reg.addEventListener('updatefound', () => {
                    const newWorker = reg.installing;
                    if (newWorker) {
                        newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                this._showSWUpdate();
                            }
                        });
                    }
                });
            });

            // Listen for messages from SW (if implemented)
            navigator.serviceWorker.addEventListener('message', (event) => {
                if (event.data && event.data.type === 'NEW_VERSION') {
                    this._showSWUpdate();
                }
            });
        }
    },

    _showToast(message, type) {
        this._dismiss(); // remove any existing

        this.toast = document.createElement('div');
        this.toast.className = `network-status-toast network-status-toast--${type}`;
        this.toast.setAttribute('role', 'status');
        this.toast.setAttribute('aria-live', 'polite');
        this.toast.innerHTML = `<span>${message}</span>`;

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

    _showSWUpdate() {
        this._dismiss();

        this.toast = document.createElement('div');
        this.toast.className = 'network-status-toast network-status-toast--update';
        this.toast.setAttribute('role', 'alert');
        this.toast.setAttribute('aria-live', 'assertive');
        this.toast.innerHTML = `
            <span>Update available.</span>
            <button class="network-status-toast__btn" id="ns-update-btn">Refresh</button>
        `;

        document.body.appendChild(this.toast);

        const btn = document.getElementById('ns-update-btn');
        if (btn) {
            btn.addEventListener('click', () => {
                if ('serviceWorker' in navigator) {
                    navigator.serviceWorker.ready.then(reg => {
                        if (reg.waiting) {
                            reg.waiting.postMessage({ type: 'SKIP_WAITING' });
                        }
                    });
                }
            });
        }

        if ('serviceWorker' in navigator && !this._controllerChangeHandlerAdded) {
            navigator.serviceWorker.addEventListener('controllerchange', () => {
                window.location.reload();
            });
            this._controllerChangeHandlerAdded = true;
        }

        requestAnimationFrame(() => {
            if (this.toast) {
                this.toast.classList.add('network-status-toast--visible');
            }
        });
    },

    _dismiss() {
        if (!this.toast) return;
        this.toast.classList.remove('network-status-toast--visible');
        const el = this.toast;
        this.toast = null;
        setTimeout(() => { if (el && el.parentNode) el.remove(); }, 300);
    }
};

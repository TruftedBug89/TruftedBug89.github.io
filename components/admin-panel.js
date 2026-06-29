// ============================================
// CHINESE MASTER - Production Admin Dashboard
// Tabbed: Dashboard | Sessions | Errors | Data
// Password-gated (SHA-256), sessionStorage auth.
// Self-initialising on DOMContentLoaded.
// ============================================

var AdminPanel = {
    // ---- Credentials (hardcoded) ----
    PASSWORD: 'zhongwen2026',
    DEV_NAME: 'Admin',
    HASH: '3e2e569a5b4b5a6e8617e936f0d3b2e2c5b8e9f0a1b2c3d4e5f6a7b8c9d0e1f2',

    authenticated: false,
    overlay: null,
    content: null,
    _cssInjected: false,
    currentTab: 'dashboard',
    errorFilter: 'all',
    sessionSearch: '',

    // ---- Init ----

    init: function () {
        this._checkAuth();
        window.addEventListener('hashchange', this._handleHash.bind(this));
        this._handleHash();
    },

    // ---- Auth ----

    _checkAuth: function () {
        try {
            this.authenticated = sessionStorage.getItem('admin_authenticated') === 'true';
        } catch (e) {
            this.authenticated = false;
        }
    },

    _setAuth: function (val) {
        this.authenticated = val;
        try {
            if (val) sessionStorage.setItem('admin_authenticated', 'true');
            else sessionStorage.removeItem('admin_authenticated');
        } catch (e) { /* ignore */ }
    },

    _hash: function (input) {
        var encoder = new TextEncoder();
        var data = encoder.encode(input);
        return window.crypto.subtle.digest('SHA-256', data).then(function (hashBuffer) {
            var hashArray = Array.from(new Uint8Array(hashBuffer));
            return hashArray.map(function (b) { return b.toString(16).padStart(2, '0'); }).join('');
        });
    },

    // ---- Hash routing ----

    _handleHash: function () {
        if (window.location.hash === '#admin') {
            if (!this.overlay) this._createOverlay();
            this._show();
        } else {
            this._hide();
        }
    },

    // ---- Escape helper (fallback if Utils unavailable) ----

    _esc: function (val) {
        if (typeof Utils !== 'undefined' && typeof Utils.escapeHtml === 'function') {
            return Utils.escapeHtml(val);
        }
        if (val === null || val === undefined) return '';
        var str = String(val);
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    },

    // ---- Overlay creation ----

    _createOverlay: function () {
        var self = this;

        // Inject styles once
        if (!this._cssInjected) {
            var style = document.createElement('style');
            style.textContent =
                /* === OVERLAY CONTAINER === */
                '#admin-panel-overlay{'
                + 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:99999;'
                + 'background:var(--bg-dark,#0a0a0f);overflow-y:auto;display:flex;'
                + 'justify-content:center;align-items:flex-start;'
                + 'padding:40px 16px 80px;'
                + 'font-family:var(--font-en,Inter,sans-serif);'
                + 'color:var(--text-primary,#fff);'
                + '}'
                + '#admin-panel-overlay *{box-sizing:border-box;}'
                + '#admin-panel-content{width:100%;max-width:1024px;}'

                /* === LOGIN CARD === */
                + '.ap-login-card{max-width:400px;margin:80px auto 0;'
                + 'background:var(--bg-card,#16161f);border:1px solid var(--border,rgba(255,255,255,0.1));'
                + 'border-radius:var(--radius-lg,12px);padding:36px 32px;text-align:center;}'
                + '.ap-login-card h2{margin:0 0 8px;font-size:22px;}'
                + '.ap-login-card p{margin:0 0 20px;color:var(--text-secondary,#a0a0b0);font-size:14px;}'
                + '.ap-login-card input{width:100%;padding:12px 14px;margin-bottom:14px;'
                + 'background:var(--bg-input,#1a1a2e);border:1px solid var(--border,rgba(255,255,255,0.1));'
                + 'border-radius:var(--radius-md,8px);color:var(--text-primary,#fff);font-size:15px;outline:none;'
                + 'transition:border-color 0.2s;}'
                + '.ap-login-card input:focus{border-color:var(--primary,#e63946);}'
                + '.ap-login-card .ap-error{color:var(--danger,#e74c3c);font-size:13px;margin:8px 0 0;min-height:18px;}'
                + '.ap-login-card .ap-hint{margin-top:18px;font-size:12px;color:var(--text-muted,#606070);}'
                + '.ap-login-card .ap-hint code{background:var(--bg-input,#1a1a2e);'
                + 'padding:2px 6px;border-radius:var(--radius-sm,4px);font-size:11px;}'

                /* === HEADER === */
                + '.ap-header{display:flex;align-items:center;justify-content:space-between;'
                + 'margin-bottom:20px;flex-wrap:wrap;gap:12px;}'
                + '.ap-header h1{margin:0;font-size:24px;display:flex;align-items:center;gap:10px;}'
                + '.ap-header .ap-dev-badge{font-size:12px;background:var(--primary,#e63946);color:#fff;'
                + 'padding:3px 10px;border-radius:var(--radius-full,9999px);font-weight:600;'
                + 'margin-left:6px;letter-spacing:0.5px;}'
                + '.ap-header-right{display:flex;align-items:center;gap:10px;flex-wrap:wrap;}'

                /* === TAB BAR === */
                + '.ap-tab-bar{display:flex;gap:0;margin-bottom:24px;'
                + 'border-bottom:2px solid var(--border,rgba(255,255,255,0.08));'
                + 'overflow-x:auto;-webkit-overflow-scrolling:touch;}'
                + '.ap-tab{position:relative;padding:12px 20px;font-size:14px;font-weight:500;'
                + 'color:var(--text-secondary,#a0a0b0);background:none;border:none;cursor:pointer;'
                + 'white-space:nowrap;transition:color 0.2s;font-family:inherit;'
                + 'border-bottom:2px solid transparent;margin-bottom:-2px;}'
                + '.ap-tab:hover{color:var(--text-primary,#fff);}'
                + '.ap-tab.ap-tab-active{color:var(--primary,#e63946);'
                + 'border-bottom-color:var(--primary,#e63946);}'
                + '.ap-tab .ap-tab-badge{display:inline-block;margin-left:6px;'
                + 'background:var(--danger,#e74c3c);color:#fff;font-size:10px;font-weight:700;'
                + 'padding:1px 6px;border-radius:var(--radius-full,9999px);min-width:18px;text-align:center;}'

                /* === TAB PANEL === */
                + '.ap-tab-panel{display:none;animation:ap-fadeIn 0.25s ease;}'
                + '.ap-tab-panel.ap-tab-active{display:block;}'
                + '@keyframes ap-fadeIn{from{opacity:0;transform:translateY(6px);}to{opacity:1;transform:translateY(0);}}'

                /* === STAT CARDS === */
                + '.ap-summary-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));'
                + 'gap:12px;margin-bottom:28px;}'
                + '.ap-stat-card{background:var(--bg-card,#16161f);'
                + 'border:1px solid var(--border,rgba(255,255,255,0.08));'
                + 'border-radius:var(--radius-lg,12px);padding:20px 18px;'
                + 'transition:border-color 0.2s;}'
                + '.ap-stat-card:hover{border-color:var(--primary,rgba(230,57,70,0.4));}'
                + '.ap-stat-card .ap-stat-value{font-size:32px;font-weight:700;line-height:1.1;'
                + 'color:var(--text-primary,#fff);}'
                + '.ap-stat-card .ap-stat-label{font-size:12px;color:var(--text-secondary,#a0a0b0);'
                + 'margin-top:6px;text-transform:uppercase;letter-spacing:0.5px;}'
                + '.ap-stat-card .ap-stat-sub{font-size:13px;color:var(--text-muted,#606070);margin-top:4px;}'

                /* === SECTION === */
                + '.ap-section{margin-bottom:28px;}'
                + '.ap-section h2{font-size:16px;font-weight:600;margin:0 0 14px;'
                + 'padding-bottom:10px;color:var(--text-primary,#fff);'
                + 'border-bottom:1px solid var(--border,rgba(255,255,255,0.08));'
                + 'display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;}'
                + '.ap-section h2 .ap-section-actions{display:flex;gap:8px;flex-wrap:wrap;}'

                /* === TABLE === */
                + '.ap-table{width:100%;border-collapse:collapse;font-size:14px;}'
                + '.ap-table th,.ap-table td{padding:10px 12px;text-align:left;'
                + 'border-bottom:1px solid var(--border,rgba(255,255,255,0.06));}'
                + '.ap-table th{color:var(--text-secondary,#a0a0b0);font-weight:600;'
                + 'font-size:11px;text-transform:uppercase;letter-spacing:0.5px;}'
                + '.ap-table td{color:var(--text-primary,#fff);}'
                + '.ap-table tbody tr:hover{background:rgba(255,255,255,0.02);}'

                /* === BADGES === */
                + '.ap-badge{display:inline-block;padding:2px 10px;border-radius:var(--radius-full,9999px);'
                + 'font-size:12px;font-weight:500;}'
                + '.ap-badge-ok{background:rgba(46,204,113,0.15);color:var(--success,#2ecc71);}'
                + '.ap-badge-warn{background:rgba(243,156,18,0.15);color:var(--warning,#f39c12);}'
                + '.ap-badge-info{background:rgba(0,180,216,0.15);color:var(--accent,#00b4d8);}'
                + '.ap-badge-danger{background:rgba(231,76,60,0.15);color:var(--danger,#e74c3c);}'

                /* === BAR CHART === */
                + '.ap-chart{display:flex;align-items:flex-end;gap:4px;height:140px;'
                + 'padding:8px 0 0;border-bottom:1px solid var(--border,rgba(255,255,255,0.08));}'
                + '.ap-chart-bar{flex:1;min-width:24px;position:relative;display:flex;'
                + 'flex-direction:column;align-items:center;height:100%;}'
                + '.ap-chart-fill{width:100%;background:var(--gradient-primary,linear-gradient(135deg,#e63946,#c5303c));'
                + 'border-radius:var(--radius-sm,4px) var(--radius-sm,4px) 0 0;'
                + 'transition:height 0.4s ease;min-height:2px;}'
                + '.ap-chart-label{font-size:10px;color:var(--text-muted,#606070);'
                + 'margin-top:6px;text-align:center;white-space:nowrap;}'
                + '.ap-chart-val{font-size:10px;color:var(--text-secondary,#a0a0b0);'
                + 'margin-bottom:3px;text-align:center;}'

                /* === SESSION ROWS === */
                + '.ap-session-row{cursor:pointer;background:var(--bg-card,#16161f);'
                + 'border:1px solid var(--border,rgba(255,255,255,0.08));'
                + 'border-radius:var(--radius-md,8px);padding:14px 16px;margin-bottom:8px;'
                + 'display:flex;justify-content:space-between;align-items:center;'
                + 'flex-wrap:wrap;gap:8px;transition:border-color 0.2s;}'
                + '.ap-session-row:hover{border-color:rgba(255,255,255,0.2);}'
                + '.ap-session-row .ap-session-sid{font-family:"SF Mono","Cascadia Code","Fira Code",Consolas,monospace;'
                + 'font-size:13px;font-weight:600;color:var(--accent,#00b4d8);}'
                + '.ap-session-row .ap-session-meta{font-size:13px;color:var(--text-secondary,#a0a0b0);'
                + 'display:flex;gap:16px;flex-wrap:wrap;}'
                + '.ap-session-row .ap-session-expand{font-size:11px;color:var(--text-muted,#606070);'
                + 'transition:transform 0.2s;}'
                + '.ap-session-row.expanded .ap-session-expand{transform:rotate(180deg);}'
                + '.ap-session-detail{display:none;background:var(--bg-hover,#1e1e2d);'
                + 'border:1px solid var(--border,rgba(255,255,255,0.06));'
                + 'border-top:none;border-radius:0 0 var(--radius-md,8px) var(--radius-md,8px);'
                + 'padding:18px;margin-top:-4px;margin-bottom:8px;'
                + 'font-size:13px;}'
                + '.ap-session-detail.show{display:block;animation:ap-fadeIn 0.2s ease;}'
                + '.ap-detail-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));'
                + 'gap:12px;margin-bottom:14px;}'
                + '.ap-detail-grid .ap-detail-item{background:var(--bg-card,#16161f);'
                + 'border-radius:var(--radius-sm,4px);padding:10px 12px;}'
                + '.ap-detail-grid .ap-detail-item strong{display:block;font-size:11px;'
                + 'text-transform:uppercase;color:var(--text-muted,#606070);margin-bottom:3px;}'
                + '.ap-detail-grid .ap-detail-item span{font-family:"SF Mono","Cascadia Code","Fira Code",Consolas,monospace;'
                + 'font-size:13px;}'
                + '.ap-event-list{max-height:300px;overflow-y:auto;font-family:"SF Mono","Cascadia Code","Fira Code",Consolas,monospace;'
                + 'font-size:12px;}'
                + '.ap-event-list .ap-event-row{padding:5px 8px;border-bottom:1px solid var(--border,rgba(255,255,255,0.04));'
                + 'display:flex;gap:10px;}'
                + '.ap-event-list .ap-event-time{color:var(--text-muted,#606070);white-space:nowrap;}'
                + '.ap-event-list .ap-event-type{color:var(--accent,#00b4d8);font-weight:600;'
                + 'white-space:nowrap;}'
                + '.ap-event-list .ap-event-data{color:var(--text-secondary,#a0a0b0);'
                + 'word-break:break-all;}'

                /* === ERROR ROWS === */
                + '.ap-error-row{cursor:pointer;background:var(--bg-card,#16161f);'
                + 'border:1px solid var(--border,rgba(255,255,255,0.08));'
                + 'border-radius:var(--radius-md,8px);padding:12px 16px;margin-bottom:8px;'
                + 'display:flex;align-items:center;gap:14px;flex-wrap:wrap;'
                + 'transition:border-color 0.2s;}'
                + '.ap-error-row:hover{border-color:rgba(255,255,255,0.2);}'
                + '.ap-error-row .ap-error-icon{font-size:20px;flex-shrink:0;}'
                + '.ap-error-row .ap-error-msg{flex:1;min-width:200px;font-size:14px;}'
                + '.ap-error-row .ap-error-meta{font-size:12px;color:var(--text-muted,#606070);'
                + 'display:flex;gap:16px;flex-wrap:wrap;}'
                + '.ap-error-row .ap-error-count{font-size:12px;font-weight:600;'
                + 'background:rgba(231,76,60,0.2);color:var(--danger,#e74c3c);'
                + 'padding:2px 8px;border-radius:var(--radius-full,9999px);}'
                + '.ap-error-detail{display:none;background:var(--bg-hover,#1e1e2d);'
                + 'border:1px solid var(--border,rgba(255,255,255,0.06));'
                + 'border-top:none;border-radius:0 0 var(--radius-md,8px) var(--radius-md,8px);'
                + 'padding:18px;margin-top:-4px;margin-bottom:8px;'
                + 'font-size:13px;}'
                + '.ap-error-detail.show{display:block;animation:ap-fadeIn 0.2s ease;}'
                + '.ap-error-stack{font-family:"SF Mono","Cascadia Code","Fira Code",Consolas,monospace;'
                + 'font-size:12px;color:var(--text-secondary,#a0a0b0);background:var(--bg-card,#16161f);'
                + 'padding:12px;border-radius:var(--radius-sm,4px);overflow-x:auto;'
                + 'white-space:pre-wrap;word-break:break-all;max-height:250px;overflow-y:auto;'
                + 'margin-top:8px;line-height:1.5;}'

                /* === SEARCH / FILTER BAR === */
                + '.ap-toolbar{display:flex;gap:10px;flex-wrap:wrap;align-items:center;'
                + 'margin-bottom:14px;}'
                + '.ap-search{flex:1;min-width:180px;padding:9px 12px;'
                + 'background:var(--bg-input,#1a1a2e);border:1px solid var(--border,rgba(255,255,255,0.1));'
                + 'border-radius:var(--radius-md,8px);color:var(--text-primary,#fff);'
                + 'font-size:14px;outline:none;font-family:inherit;'
                + 'transition:border-color 0.2s;}'
                + '.ap-search:focus{border-color:var(--primary,#e63946);}'
                + '.ap-search::placeholder{color:var(--text-muted,#606070);}'

                /* === DATA SECTION === */
                + '.ap-data-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));'
                + 'gap:16px;margin-bottom:20px;}'
                + '.ap-data-card{background:var(--bg-card,#16161f);'
                + 'border:1px solid var(--border,rgba(255,255,255,0.08));'
                + 'border-radius:var(--radius-lg,12px);padding:20px;}'
                + '.ap-data-card h3{font-size:14px;font-weight:600;margin:0 0 12px;'
                + 'color:var(--text-primary,#fff);}'
                + '.ap-data-card p{font-size:13px;color:var(--text-secondary,#a0a0b0);'
                + 'margin:0 0 14px;line-height:1.5;}'
                + '.ap-storage-stat{display:flex;justify-content:space-between;'
                + 'padding:8px 0;border-bottom:1px solid var(--border,rgba(255,255,255,0.05));'
                + 'font-size:13px;}'
                + '.ap-storage-stat:last-child{border-bottom:none;}'
                + '.ap-storage-stat .ap-storage-label{color:var(--text-secondary,#a0a0b0);}'
                + '.ap-storage-stat .ap-storage-val{font-weight:600;'
                + 'font-family:"SF Mono","Cascadia Code","Fira Code",Consolas,monospace;}'
                + '.ap-prune-input{width:80px;padding:8px 10px;'
                + 'background:var(--bg-input,#1a1a2e);border:1px solid var(--border,rgba(255,255,255,0.1));'
                + 'border-radius:var(--radius-md,8px);color:var(--text-primary,#fff);'
                + 'font-size:14px;outline:none;text-align:center;font-family:inherit;'
                + 'margin-right:8px;}'
                + '.ap-prune-input:focus{border-color:var(--primary,#e63946);}'

                /* === BUTTONS === */
                + '.ap-btn{display:inline-flex;align-items:center;gap:6px;padding:9px 16px;'
                + 'font-size:13px;font-weight:500;font-family:inherit;border:none;cursor:pointer;'
                + 'border-radius:var(--radius-md,8px);transition:all 0.2s;'
                + 'color:var(--text-primary,#fff);white-space:nowrap;}'
                + '.ap-btn-sm{padding:6px 12px;font-size:12px;}'
                + '.ap-btn-primary{background:var(--primary,#e63946);}'
                + '.ap-btn-primary:hover{background:var(--primary-dark,#c5303c);}'
                + '.ap-btn-secondary{background:rgba(255,255,255,0.08);}'
                + '.ap-btn-secondary:hover{background:rgba(255,255,255,0.14);}'
                + '.ap-btn-danger{background:rgba(231,76,60,0.2);color:var(--danger,#e74c3c);}'
                + '.ap-btn-danger:hover{background:rgba(231,76,60,0.35);}'
                + '.ap-btn-outline{background:transparent;border:1px solid var(--border,rgba(255,255,255,0.15));}'
                + '.ap-btn-outline:hover{border-color:var(--primary,#e63946);color:var(--primary,#e63946);}'
                + '.ap-btn:disabled{opacity:0.4;cursor:not-allowed;}'
                + '.ap-btn-full{width:100%;justify-content:center;}'

                /* === EMPTY STATE === */
                + '.ap-empty{padding:32px 20px;text-align:center;color:var(--text-muted,#606070);'
                + 'font-size:14px;font-style:italic;}'
                + '.ap-empty .ap-empty-icon{font-size:36px;display:block;margin-bottom:10px;'
                + 'opacity:0.4;}'

                /* === CONFIRMATION DIALOG === */
                + '.ap-confirm-overlay{position:fixed;top:0;left:0;width:100%;height:100%;'
                + 'z-index:100000;background:rgba(0,0,0,0.7);display:flex;'
                + 'align-items:center;justify-content:center;padding:20px;}'
                + '.ap-confirm-box{background:var(--bg-card,#16161f);'
                + 'border:1px solid var(--border,rgba(255,255,255,0.1));'
                + 'border-radius:var(--radius-lg,12px);padding:28px 24px;max-width:440px;'
                + 'width:100%;text-align:center;}'
                + '.ap-confirm-box h3{margin:0 0 10px;font-size:16px;color:var(--text-primary,#fff);}'
                + '.ap-confirm-box p{margin:0 0 20px;font-size:14px;color:var(--text-secondary,#a0a0b0);'
                + 'line-height:1.5;}'
                + '.ap-confirm-box .ap-confirm-actions{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;}'

                /* === FILTER PILLS === */
                + '.ap-filter-pills{display:flex;gap:6px;flex-wrap:wrap;}'
                + '.ap-filter-pill{padding:5px 14px;font-size:12px;font-weight:500;font-family:inherit;'
                + 'border:1px solid var(--border,rgba(255,255,255,0.12));border-radius:var(--radius-full,9999px);'
                + 'background:transparent;color:var(--text-secondary,#a0a0b0);cursor:pointer;'
                + 'transition:all 0.2s;}'
                + '.ap-filter-pill:hover{color:var(--text-primary,#fff);border-color:rgba(255,255,255,0.25);}'
                + '.ap-filter-pill.ap-filter-active{background:var(--primary,#e63946);'
                + 'border-color:var(--primary,#e63946);color:#fff;}'

                /* === RESPONSIVE === */
                + '@media(max-width:700px){'
                + '#admin-panel-overlay{padding:16px 8px 60px;}'
                + '.ap-tab{padding:10px 14px;font-size:13px;}'
                + '.ap-header h1{font-size:20px;}'
                + '.ap-summary-grid{grid-template-columns:repeat(auto-fit,minmax(150px,1fr));}'
                + '.ap-stat-card .ap-stat-value{font-size:24px;}'
                + '.ap-chart{height:100px;}'
                + '.ap-session-row{flex-direction:column;align-items:flex-start;}'
                + '.ap-error-row{flex-direction:column;align-items:flex-start;}'
                + '.ap-toolbar{flex-direction:column;}'
                + '.ap-search{width:100%;}'
                + '}'
                + '@media(max-width:400px){'
                + '.ap-tab{font-size:12px;padding:8px 10px;}'
                + '.ap-summary-grid{grid-template-columns:1fr 1fr;}'
                + '}'

                /* === PRINT === */
                + '@media print{'
                + '#admin-panel-overlay{position:static;background:#fff;color:#000;padding:0;}'
                + '.ap-tab-bar,.ap-header-right,.ap-section-actions,.ap-toolbar,.ap-btn,'
                + '.ap-session-expand,.ap-error-row{cursor:default;}'
                + '.ap-session-detail,.ap-error-detail{display:block!important;}'
                + '.ap-stat-card,.ap-error-row,.ap-session-row{border:1px solid #ccc;'
                + 'background:#fff;color:#000;}'
                + '.ap-stat-card .ap-stat-value{color:#000;}'
                + '.ap-stat-card .ap-stat-label{color:#555;}'
                + '.ap-table th,.ap-table td{color:#000;border-color:#ccc;}'
                + '.ap-error-stack{color:#333;background:#f5f5f5;border:1px solid #ddd;}'
                + '.ap-badge-ok,.ap-badge-warn,.ap-badge-info,.ap-badge-danger{background:#eee;color:#000;}'
                + '.ap-tab-panel{display:block!important;margin-bottom:30px;page-break-inside:avoid;}'
                + '.ap-tab-panel h2{border-bottom:2px solid #000;color:#000;}'
                + '}';

            document.head.appendChild(style);
            this._cssInjected = true;
        }

        this.overlay = document.createElement('div');
        this.overlay.id = 'admin-panel-overlay';
        this.overlay.style.display = 'none';
        this.overlay.setAttribute('role', 'region');
        this.overlay.setAttribute('aria-label', 'Admin panel');

        this.content = document.createElement('div');
        this.content.id = 'admin-panel-content';
        this.overlay.appendChild(this.content);

        document.body.appendChild(this.overlay);
    },

    // ---- Show / Hide ----

    _show: function () {
        if (!this.overlay) return;
        this.overlay.style.display = '';
        if (this.authenticated) {
            this._renderPanel();
        } else {
            this._renderLogin();
        }
        var main = document.getElementById('main-content');
        if (main) main.setAttribute('aria-hidden', 'true');
    },

    _hide: function () {
        if (this.overlay) {
            this.overlay.style.display = 'none';
        }
        var main = document.getElementById('main-content');
        if (main) main.removeAttribute('aria-hidden');
    },

    _logout: function () {
        this._setAuth(false);
        this.currentTab = 'dashboard';
        this.errorFilter = 'all';
        this.sessionSearch = '';
        this._renderLogin();
    },

    // ---- Login ----

    _renderLogin: function () {
        var self = this;
        this.content.innerHTML =
            '<div class="ap-login-card">'
            + '<h2>' + this._esc('Admin Panel') + '</h2>'
            + '<p>Enter password to access analytics and system data</p>'
            + '<input type="password" id="ap-password" placeholder="Password" autocomplete="off">'
            + '<button type="button" class="ap-btn ap-btn-primary ap-btn-full" id="ap-login-btn">Login</button>'
            + '<div class="ap-error" id="ap-login-error"></div>'
            + '<div class="ap-hint">Access via <code>#admin</code> hash only</div>'
            + '</div>';

        var input = this.content.querySelector('#ap-password');
        var btn = this.content.querySelector('#ap-login-btn');
        var err = this.content.querySelector('#ap-login-error');

        var doLogin = function () {
            var val = (input.value || '').trim();
            if (!val) { err.textContent = 'Password required'; return; }
            btn.disabled = true;
            btn.textContent = 'Checking\u2026';
            self._hash(val).then(function (hash) {
                if (hash === self.HASH) {
                    self._setAuth(true);
                    self._renderPanel();
                } else {
                    err.textContent = 'Incorrect password';
                    btn.disabled = false;
                    btn.textContent = 'Login';
                    input.value = '';
                    input.focus();
                }
            }).catch(function () {
                err.textContent = 'Something went wrong. Try again.';
                btn.disabled = false;
                btn.textContent = 'Login';
            });
        };

        btn.addEventListener('click', doLogin);
        input.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') doLogin();
        });
        setTimeout(function () { if (input) input.focus(); }, 100);
    },

    // ---- Main panel ----

    _renderPanel: function () {
        var self = this;
        var errorCount = 0;
        if (typeof ErrorLogger !== 'undefined' && typeof ErrorLogger.getEntries === 'function') {
            var entries = ErrorLogger.getEntries();
            errorCount = entries ? entries.length : 0;
        }

        var tabs = [
            { id: 'dashboard', label: 'Dashboard' },
            { id: 'sessions', label: 'Sessions' },
            { id: 'errors', label: 'Errors', badge: errorCount > 0 ? String(errorCount) : null },
            { id: 'data', label: 'Data' }
        ];

        var tabButtons = tabs.map(function (t) {
            var activeClass = t.id === self.currentTab ? ' ap-tab-active' : '';
            var badgeHTML = t.badge ? '<span class="ap-tab-badge">' + self._esc(t.badge) + '</span>' : '';
            return '<button class="ap-tab' + activeClass + '" data-tab="' + self._esc(t.id) + '">'
                + self._esc(t.label) + badgeHTML + '</button>';
        }).join('');

        var html = '';
        html += '<div class="ap-header">';
        html += '<h1>Admin<span class="ap-dev-badge">' + self._esc(self.DEV_NAME) + '</span></h1>';
        html += '<div class="ap-header-right">';
        html += '<button type="button" class="ap-btn ap-btn-secondary ap-btn-sm" id="ap-logout-btn">Logout</button>';
        html += '</div>';
        html += '</div>';

        html += '<nav class="ap-tab-bar" role="tablist">' + tabButtons + '</nav>';

        html += '<div id="ap-tab-dashboard" class="ap-tab-panel' + (self.currentTab === 'dashboard' ? ' ap-tab-active' : '') + '"></div>';
        html += '<div id="ap-tab-sessions" class="ap-tab-panel' + (self.currentTab === 'sessions' ? ' ap-tab-active' : '') + '"></div>';
        html += '<div id="ap-tab-errors" class="ap-tab-panel' + (self.currentTab === 'errors' ? ' ap-tab-active' : '') + '"></div>';
        html += '<div id="ap-tab-data" class="ap-tab-panel' + (self.currentTab === 'data' ? ' ap-tab-active' : '') + '"></div>';

        this.content.innerHTML = html;

        // Wire tab clicks
        var tabEls = this.content.querySelectorAll('.ap-tab');
        tabEls.forEach(function (el) {
            el.addEventListener('click', function () {
                var tabId = el.getAttribute('data-tab');
                if (tabId) self._switchTab(tabId);
            });
        });

        // Wire logout
        var logoutBtn = this.content.querySelector('#ap-logout-btn');
        if (logoutBtn) logoutBtn.addEventListener('click', function () { self._logout(); });

        // Render active tab
        this._renderTabContent(this.currentTab);
    },

    _switchTab: function (tab) {
        this.currentTab = tab;
        // Update active class on tabs
        var tabEls = this.content.querySelectorAll('.ap-tab');
        tabEls.forEach(function (el) {
            var elTab = el.getAttribute('data-tab');
            if (elTab === tab) {
                el.classList.add('ap-tab-active');
            } else {
                el.classList.remove('ap-tab-active');
            }
        });
        // Update active class on panels
        var panels = this.content.querySelectorAll('.ap-tab-panel');
        panels.forEach(function (p) { p.classList.remove('ap-tab-active'); });
        var activePanel = this.content.querySelector('#ap-tab-' + tab);
        if (activePanel) activePanel.classList.add('ap-tab-active');

        this._renderTabContent(tab);
    },

    _renderTabContent: function (tab) {
        switch (tab) {
            case 'dashboard':
                this._renderDashboard();
                break;
            case 'sessions':
                this._renderSessions();
                break;
            case 'errors':
                this._renderErrors();
                break;
            case 'data':
                this._renderData();
                break;
        }
    },

    // ==================== DASHBOARD TAB ====================

    _renderDashboard: function () {
        var self = this;
        var panel = this.content.querySelector('#ap-tab-dashboard');
        if (!panel) return;
        var today = new Date().toISOString().split('T')[0];

        var sessions = (typeof AnalyticsEngine !== 'undefined' && typeof AnalyticsEngine.getAllSessions === 'function')
            ? AnalyticsEngine.getAllSessions() : [];

        var allEvents = this._gatherAllEvents(sessions);

        // Summary stats
        var totalSessions = sessions.length;
        var todaysPageViews = allEvents.filter(function (e) {
            return e.type === 'page_view' && e.timestamp && e.timestamp.indexOf(today) === 0;
        }).length;
        var exerciseEvents = allEvents.filter(function (e) { return e.type === 'exercise'; });
        var totalExercises = exerciseEvents.length;

        // Errors today
        var todaysErrors = 0;
        if (typeof ErrorLogger !== 'undefined' && typeof ErrorLogger.getEntries === 'function') {
            var allErrs = ErrorLogger.getEntries();
            if (allErrs) {
                todaysErrors = allErrs.filter(function (er) {
                    return er.firstSeen && er.firstSeen.indexOf(today) === 0;
                }).length;
            }
        }

        var html = '';

        // Summary grid
        html += '<div class="ap-summary-grid">';
        html += '<div class="ap-stat-card"><div class="ap-stat-value">' + self._esc(String(totalSessions)) + '</div><div class="ap-stat-label">Total Sessions</div></div>';
        html += '<div class="ap-stat-card"><div class="ap-stat-value">' + self._esc(String(todaysErrors)) + '</div><div class="ap-stat-label">Errors Today</div></div>';
        html += '<div class="ap-stat-card"><div class="ap-stat-value">' + self._esc(String(todaysPageViews)) + '</div><div class="ap-stat-label">Page Views Today</div></div>';
        html += '<div class="ap-stat-card"><div class="ap-stat-value">' + self._esc(String(totalExercises)) + '</div><div class="ap-stat-label">Exercises Completed</div></div>';
        html += '</div>';

        // Last 7 days activity chart
        html += '<div class="ap-section"><h2>Last 7 Days Activity</h2>';
        html += self._renderActivityChart(sessions);
        html += '</div>';

        // Top modules by usage
        html += '<div class="ap-section"><h2>Top Modules by Usage</h2>';
        html += self._renderTopModules(exerciseEvents);
        html += '</div>';

        // Recent errors
        html += '<div class="ap-section"><h2>Recent Errors</h2>';
        html += self._renderRecentErrors();
        html += '</div>';

        panel.innerHTML = html;

        // Wire error detail toggles for recent errors on dashboard
        var errRows = panel.querySelectorAll('.ap-error-row[data-from="dashboard"]');
        errRows.forEach(function (row) {
            row.addEventListener('click', function () {
                var idx = parseInt(row.getAttribute('data-err-idx'), 10);
                // Re-gather entries for the toggle callback
                var allEntries = [];
                if (typeof ErrorLogger !== 'undefined' && typeof ErrorLogger.getEntries === 'function') {
                    allEntries = ErrorLogger.getEntries() || [];
                }
                var recentEntries = allEntries.slice(0, 5);
                self._toggleErrorDetail(idx, recentEntries);
            });
        });
    },

    _renderActivityChart: function (sessions) {
        var self = this;
        var days = [];
        var today = new Date();
        for (var i = 6; i >= 0; i--) {
            var d = new Date(today);
            d.setDate(d.getDate() - i);
            days.push({
                date: d.toISOString().split('T')[0],
                label: d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }).split(',')[0] + ' ' + d.getDate()
            });
        }

        var counts = {};
        days.forEach(function (d) { counts[d.date] = 0; });

        sessions.forEach(function (s) {
            var sid = s.sessionId;
            if (!sid) return;
            try {
                var raw = localStorage.getItem('analytics_' + sid + '_daily');
                if (raw) {
                    var daily = JSON.parse(raw);
                    for (var date in daily) {
                        if (Object.prototype.hasOwnProperty.call(daily, date) && counts.hasOwnProperty(date)) {
                            var dd = daily[date];
                            counts[date] += (dd.pageViews || 0) + (dd.exercises || 0);
                        }
                    }
                }
            } catch (e) { /* ignore */ }
        });

        var maxVal = 1;
        days.forEach(function (d) { if (counts[d.date] > maxVal) maxVal = counts[d.date]; });
        if (maxVal < 1) maxVal = 1;

        var hasData = days.some(function (d) { return counts[d.date] > 0; });
        if (!hasData) {
            return '<div class="ap-empty"><span class="ap-empty-icon">No activity data for the last 7 days.</span></div>';
        }

        var html = '<div class="ap-chart">';
        days.forEach(function (d) {
            var val = counts[d.date];
            var h = Math.max(2, Math.round((val / maxVal) * 100));
            html += '<div class="ap-chart-bar">';
            html += '<div class="ap-chart-val">' + self._esc(String(val)) + '</div>';
            html += '<div class="ap-chart-fill" style="height:' + h + '%;"></div>';
            html += '<div class="ap-chart-label">' + self._esc(d.label) + '</div>';
            html += '</div>';
        });
        html += '</div>';
        return html;
    },

    _renderTopModules: function (exerciseEvents) {
        var self = this;
        if (exerciseEvents.length === 0) {
            return '<div class="ap-empty">No exercise data recorded yet.</div>';
        }

        var moduleMap = {};
        exerciseEvents.forEach(function (e) {
            var m = e.module || e.exerciseType || 'unknown';
            if (!moduleMap[m]) moduleMap[m] = { count: 0, totalAcc: 0 };
            moduleMap[m].count++;
            moduleMap[m].totalAcc += (e.accuracy || 0);
        });

        var sorted = [];
        for (var k in moduleMap) {
            if (Object.prototype.hasOwnProperty.call(moduleMap, k)) {
                sorted.push({ name: k, count: moduleMap[k].count, avgAcc: Math.round(moduleMap[k].totalAcc / moduleMap[k].count) });
            }
        }
        sorted.sort(function (a, b) { return b.count - a.count; });

        var html = '<table class="ap-table"><thead><tr><th>Module</th><th>Exercises</th><th>Avg Accuracy</th></tr></thead><tbody>';
        sorted.forEach(function (m) {
            var pctClass = m.avgAcc >= 80 ? 'ap-badge-ok' : m.avgAcc >= 50 ? 'ap-badge-warn' : 'ap-badge-info';
            html += '<tr>';
            html += '<td>' + self._esc(m.name) + '</td>';
            html += '<td>' + self._esc(String(m.count)) + '</td>';
            html += '<td><span class="ap-badge ' + pctClass + '">' + self._esc(String(m.avgAcc)) + '%</span></td>';
            html += '</tr>';
        });
        html += '</tbody></table>';
        return html;
    },

    _renderRecentErrors: function () {
        var self = this;
        if (typeof ErrorLogger === 'undefined' || typeof ErrorLogger.getEntries !== 'function') {
            return '<div class="ap-empty">Error logging not enabled.</div>';
        }

        var entries = ErrorLogger.getEntries();
        if (!entries || entries.length === 0) {
            return '<div class="ap-empty">No errors recorded.</div>';
        }

        var recent = entries.slice(0, 5);
        var html = '';
        recent.forEach(function (entry, idx) {
            var icon = (entry.type || entry.level) === 'warning' ? '\uD83D\uDFE1' : '\uD83D\uDD34';
            var msg = entry.message || '(no message)';
            var firstSeen = entry.firstSeen ? self._formatDate(entry.firstSeen) : '?';
            var lastSeen = entry.lastSeen ? self._formatDate(entry.lastSeen) : '?';
            var count = entry.count || 1;

            html += '<div class="ap-error-row" data-err-idx="' + idx + '" data-from="dashboard">';
            html += '<span class="ap-error-icon">' + self._esc(icon) + '</span>';
            html += '<span class="ap-error-msg">' + self._esc(msg.slice(0, 120)) + '</span>';
            html += '<span class="ap-error-meta">' + self._esc(firstSeen) + ' \u2013 ' + self._esc(lastSeen) + '</span>';
            html += '<span class="ap-error-count">\u00d7' + self._esc(String(count)) + '</span>';
            html += '</div>';
            html += '<div class="ap-error-detail" id="ap-err-detail-' + idx + '"></div>';
        });

        return html;
    },

    // ==================== SESSIONS TAB ====================

    _renderSessions: function () {
        var self = this;
        var panel = this.content.querySelector('#ap-tab-sessions');
        if (!panel) return;

        var sessions = (typeof AnalyticsEngine !== 'undefined' && typeof AnalyticsEngine.getAllSessions === 'function')
            ? AnalyticsEngine.getAllSessions() : [];

        var html = '';

        // Search bar
        html += '<div class="ap-toolbar">';
        html += '<input type="text" class="ap-search" id="ap-session-search" placeholder="Search by session ID..." value="' + self._esc(self.sessionSearch) + '">';
        html += '<span style="font-size:13px;color:var(--text-muted,#606070);">' + self._esc(String(sessions.length)) + ' session' + (sessions.length !== 1 ? 's' : '') + '</span>';
        html += '</div>';

        // Session list
        if (sessions.length === 0) {
            html += '<div class="ap-empty"><span class="ap-empty-icon">No session data yet.</span></div>';
        } else {
            var searchTerm = (self.sessionSearch || '').toLowerCase();
            var filtered = sessions;
            if (searchTerm) {
                filtered = sessions.filter(function (s) {
                    return (s.sessionId || '').toLowerCase().indexOf(searchTerm) !== -1;
                });
            }

            if (filtered.length === 0) {
                html += '<div class="ap-empty">No sessions match "' + self._esc(self.sessionSearch) + '".</div>';
            } else {
                filtered.forEach(function (s, idx) {
                    var sid = s.sessionId || '';
                    var pages = s.totalPageViews || 0;
                    var exercises = s.totalExercises || 0;
                    var time = self._formatTime(s.totalTimeSpent || 0);
                    var first = self._formatDate(s.firstVisit || '');
                    var last = self._formatDate(s.lastVisit || '');

                    html += '<div class="ap-session-row" data-session-idx="' + idx + '" data-sid="' + self._esc(sid) + '">';
                    html += '<span class="ap-session-sid">' + self._esc(sid.slice(0, 20)) + (sid.length > 20 ? '\u2026' : '') + '</span>';
                    html += '<span class="ap-session-meta">';
                    html += '<span>' + self._esc(String(pages)) + ' pages</span>';
                    html += '<span>' + self._esc(String(exercises)) + ' exercises</span>';
                    html += '<span>' + self._esc(time) + '</span>';
                    html += '<span>' + self._esc(first) + ' \u2013 ' + self._esc(last) + '</span>';
                    html += '</span>';
                    html += '<span class="ap-session-expand">\u25BC</span>';
                    html += '</div>';
                    html += '<div class="ap-session-detail" id="ap-detail-' + idx + '"></div>';
                });
            }
        }

        panel.innerHTML = html;

        // Wire search
        var searchInput = panel.querySelector('#ap-session-search');
        if (searchInput) {
            searchInput.addEventListener('input', function () {
                self.sessionSearch = searchInput.value;
                self._renderSessions();
            });
        }

        // Wire session detail toggles
        var rows = panel.querySelectorAll('.ap-session-row');
        rows.forEach(function (row) {
            row.addEventListener('click', function () {
                var idx = parseInt(row.getAttribute('data-session-idx'), 10);
                var sid = row.getAttribute('data-sid');
                var allSessions = sessions;
                var searchTerm = (self.sessionSearch || '').toLowerCase();
                if (searchTerm) {
                    allSessions = sessions.filter(function (s) {
                        return (s.sessionId || '').toLowerCase().indexOf(searchTerm) !== -1;
                    });
                }
                self._toggleSessionDetail(idx, allSessions);
            });
        });
    },

    _toggleSessionDetail: function (idx, sessions) {
        var detail = document.getElementById('ap-detail-' + idx);
        if (!detail) return;
        if (detail.classList.contains('show')) {
            detail.classList.remove('show');
            detail.innerHTML = '';
            // Remove expanded state from row
            var row = document.querySelector('[data-session-idx="' + idx + '"]');
            if (row) row.classList.remove('expanded');
            return;
        }
        detail.classList.add('show');
        var row = document.querySelector('[data-session-idx="' + idx + '"]');
        if (row) row.classList.add('expanded');
        var s = sessions[idx];
        if (!s) {
            detail.innerHTML = '<div class="ap-empty">Session data unavailable.</div>';
            return;
        }

        var self = this;
        var html = '';

        // Device info
        html += '<div class="ap-detail-grid">';
        html += '<div class="ap-detail-item"><strong>Session ID</strong><span>' + self._esc(s.sessionId || '?') + '</span></div>';
        html += '<div class="ap-detail-item"><strong>First Seen</strong><span>' + self._esc(s.firstVisit || '?') + '</span></div>';
        html += '<div class="ap-detail-item"><strong>Last Seen</strong><span>' + self._esc(s.lastVisit || '?') + '</span></div>';
        html += '<div class="ap-detail-item"><strong>Total Pages</strong><span>' + self._esc(String(s.totalPageViews || 0)) + '</span></div>';
        html += '<div class="ap-detail-item"><strong>Total Exercises</strong><span>' + self._esc(String(s.totalExercises || 0)) + '</span></div>';
        html += '<div class="ap-detail-item"><strong>Total Time</strong><span>' + self._esc(self._formatTime(s.totalTimeSpent || 0)) + '</span></div>';
        if (s.device) {
            html += '<div class="ap-detail-item"><strong>OS</strong><span>' + self._esc(s.device.os || '?') + '</span></div>';
            html += '<div class="ap-detail-item"><strong>Browser</strong><span>' + self._esc(s.device.browser || '?') + '</span></div>';
            html += '<div class="ap-detail-item"><strong>Language</strong><span>' + self._esc(s.device.language || '?') + '</span></div>';
            html += '<div class="ap-detail-item"><strong>Screen</strong><span>' + self._esc(String(s.device.screenWidth || '?')) + '\u00d7' + self._esc(String(s.device.screenHeight || '?')) + '</span></div>';
            html += '<div class="ap-detail-item"><strong>Viewport</strong><span>' + self._esc(String(s.device.viewportWidth || '?')) + '\u00d7' + self._esc(String(s.device.viewportHeight || '?')) + '</span></div>';
        }
        html += '</div>';

        // Events list
        var events = [];
        var sid = s.sessionId;
        if (sid) {
            try {
                var raw = localStorage.getItem('analytics_' + sid + '_events');
                if (raw) events = JSON.parse(raw);
            } catch (e) { /* ignore */ }
        }
        if (events && events.length > 0) {
            html += '<div style="font-size:13px;font-weight:600;color:var(--text-primary,#fff);margin-bottom:6px;">All Events (' + self._esc(String(events.length)) + ')</div>';
            html += '<div class="ap-event-list">';
            events.slice().reverse().forEach(function (ev) {
                var time = ev.timestamp ? self._formatDate(ev.timestamp) : '?';
                var type = ev.type || '?';
                var dataStr = JSON.stringify(ev, function (k, v) { return (k === 'timestamp' || k === 'type') ? undefined : v; });
                html += '<div class="ap-event-row">';
                html += '<span class="ap-event-time">' + self._esc(time) + '</span>';
                html += '<span class="ap-event-type">' + self._esc(type) + '</span>';
                html += '<span class="ap-event-data">' + self._esc(dataStr ? dataStr.slice(0, 200) : '') + '</span>';
                html += '</div>';
            });
            html += '</div>';
        }

        detail.innerHTML = html;
    },

    // ==================== ERRORS TAB ====================

    _renderErrors: function () {
        var self = this;
        var panel = this.content.querySelector('#ap-tab-errors');
        if (!panel) return;

        if (typeof ErrorLogger === 'undefined' || typeof ErrorLogger.getEntries !== 'function') {
            panel.innerHTML = '<div class="ap-empty" style="padding-top:60px;"><span class="ap-empty-icon">\u26A0\uFE0F</span>Error logging not enabled.<br><span style="font-size:12px;margin-top:8px;display:inline-block;">Define <code>ErrorLogger</code> with a <code>getEntries()</code> method to populate this tab.</span></div>';
            return;
        }

        var allEntries = ErrorLogger.getEntries() || [];
        var now = new Date();

        // Apply filter
        var filtered = allEntries;
        if (self.errorFilter === '24h') {
            var cutoff24 = new Date(now.getTime() - 24 * 60 * 60 * 1000).toISOString();
            filtered = allEntries.filter(function (e) { return e.firstSeen >= cutoff24; });
        } else if (self.errorFilter === '7d') {
            var cutoff7 = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();
            filtered = allEntries.filter(function (e) { return e.firstSeen >= cutoff7; });
        }

        var html = '';

        // Toolbar: filter pills + clear button
        html += '<div class="ap-toolbar">';
        html += '<div class="ap-filter-pills">';
        var filters = [
            { id: 'all', label: 'All' },
            { id: '24h', label: 'Last 24h' },
            { id: '7d', label: 'Last 7 days' }
        ];
        filters.forEach(function (f) {
            var activeClass = self.errorFilter === f.id ? ' ap-filter-active' : '';
            html += '<button class="ap-filter-pill' + activeClass + '" data-filter="' + self._esc(f.id) + '">' + self._esc(f.label) + '</button>';
        });
        html += '</div>';
        html += '<span style="font-size:13px;color:var(--text-muted,#606070);">' + self._esc(String(filtered.length)) + ' error' + (filtered.length !== 1 ? 's' : '') + '</span>';
        html += '<button type="button" class="ap-btn ap-btn-danger ap-btn-sm" id="ap-clear-errors-btn" style="margin-left:auto;">Clear All</button>';
        html += '</div>';

        if (filtered.length === 0) {
            html += '<div class="ap-empty">No errors match the current filter.</div>';
        } else {
            filtered.forEach(function (entry, idx) {
                var icon = (entry.type || entry.level) === 'warning' ? '\uD83D\uDFE1' : '\uD83D\uDD34';
                var msg = entry.message || '(no message)';
                var firstSeen = entry.firstSeen ? self._formatDate(entry.firstSeen) : '?';
                var lastSeen = entry.lastSeen ? self._formatDate(entry.lastSeen) : '?';
                var count = entry.count || 1;
                var sessions = entry.sessionsAffected || entry.sessions || 0;

                html += '<div class="ap-error-row" data-err-idx="' + idx + '">';
                html += '<span class="ap-error-icon">' + self._esc(icon) + '</span>';
                html += '<span class="ap-error-msg">' + self._esc(msg.slice(0, 150)) + (msg.length > 150 ? '\u2026' : '') + '</span>';
                html += '<span class="ap-error-meta">';
                html += '<span>' + self._esc(firstSeen) + ' \u2013 ' + self._esc(lastSeen) + '</span>';
                html += '<span>' + self._esc(String(sessions)) + ' session' + (sessions !== 1 ? 's' : '') + '</span>';
                html += '</span>';
                html += '<span class="ap-error-count">\u00d7' + self._esc(String(count)) + '</span>';
                html += '</div>';
                html += '<div class="ap-error-detail" id="ap-err-detail-' + idx + '"></div>';
            });
        }

        panel.innerHTML = html;

        // Wire filter pills
        var pills = panel.querySelectorAll('.ap-filter-pill');
        pills.forEach(function (p) {
            p.addEventListener('click', function () {
                var f = p.getAttribute('data-filter');
                if (f) {
                    self.errorFilter = f;
                    self._renderErrors();
                }
            });
        });

        // Wire clear errors button
        var clearBtn = panel.querySelector('#ap-clear-errors-btn');
        if (clearBtn) {
            clearBtn.addEventListener('click', function () { self._clearErrors(); });
        }

        // Wire error detail toggles
        var errRows = panel.querySelectorAll('.ap-error-row');
        errRows.forEach(function (row) {
            row.addEventListener('click', function () {
                var idx = parseInt(row.getAttribute('data-err-idx'), 10);
                self._toggleErrorDetail(idx, filtered);
            });
        });
    },

    _toggleErrorDetail: function (idx, entries) {
        var detail = document.getElementById('ap-err-detail-' + idx);
        if (!detail) return;
        if (detail.classList.contains('show')) {
            detail.classList.remove('show');
            detail.innerHTML = '';
            return;
        }
        detail.classList.add('show');
        var entry = entries[idx];
        if (!entry) {
            detail.innerHTML = '<div class="ap-empty">Error data unavailable.</div>';
            return;
        }

        var self = this;
        var html = '';
        html += '<div class="ap-detail-grid">';
        html += '<div class="ap-detail-item"><strong>Message</strong><span>' + self._esc(entry.message || '(none)') + '</span></div>';
        html += '<div class="ap-detail-item"><strong>Type</strong><span>' + self._esc(entry.type || entry.level || 'error') + '</span></div>';
        html += '<div class="ap-detail-item"><strong>First Seen</strong><span>' + self._esc(entry.firstSeen || '?') + '</span></div>';
        html += '<div class="ap-detail-item"><strong>Last Seen</strong><span>' + self._esc(entry.lastSeen || '?') + '</span></div>';
        html += '<div class="ap-detail-item"><strong>Occurrences</strong><span>' + self._esc(String(entry.count || 1)) + '</span></div>';
        html += '<div class="ap-detail-item"><strong>Sessions Affected</strong><span>' + self._esc(String(entry.sessionsAffected || entry.sessions || '?')) + '</span></div>';
        if (entry.source) {
            html += '<div class="ap-detail-item"><strong>Source</strong><span>' + self._esc(entry.source) + '</span></div>';
        }
        if (entry.line || entry.lineNumber) {
            html += '<div class="ap-detail-item"><strong>Line</strong><span>' + self._esc(String(entry.line || entry.lineNumber)) + '</span></div>';
        }
        html += '</div>';

        if (entry.stack) {
            html += '<div style="font-size:12px;font-weight:600;color:var(--text-secondary,#a0a0b0);margin-bottom:4px;">Stack Trace</div>';
            html += '<div class="ap-error-stack">' + self._esc(entry.stack) + '</div>';
        }

        detail.innerHTML = html;
    },

    _clearErrors: function () {
        var self = this;
        var confirmed = window.confirm('Clear all error log entries?\n\nThis cannot be undone.');
        if (!confirmed) return;
        if (typeof ErrorLogger !== 'undefined' && typeof ErrorLogger.clearEntries === 'function') {
            ErrorLogger.clearEntries();
        } else if (typeof ErrorLogger !== 'undefined' && typeof ErrorLogger.clear === 'function') {
            ErrorLogger.clear();
        }
        if (typeof Utils !== 'undefined' && typeof Utils.showToast === 'function') {
            Utils.showToast('Error log cleared.', 'success');
        }
        this._renderErrors();
    },

    // ==================== DATA TAB ====================

    _renderData: function () {
        var self = this;
        var panel = this.content.querySelector('#ap-tab-data');
        if (!panel) return;

        // Storage usage
        var analyticsKeys = 0;
        var errorsKeys = 0;
        var analyticsBytes = 0;
        var errorsBytes = 0;
        try {
            for (var i = 0; i < localStorage.length; i++) {
                var key = localStorage.key(i);
                if (!key) continue;
                var val = localStorage.getItem(key) || '';
                if (key.indexOf('analytics_') === 0) {
                    analyticsKeys++;
                    analyticsBytes += val.length * 2; // UTF-16
                }
                if (key.indexOf('errorlog_') === 0 || key.indexOf('errors_') === 0 || key.indexOf('error_') === 0) {
                    errorsKeys++;
                    errorsBytes += val.length * 2;
                }
            }
        } catch (e) { /* ignore */ }

        var analyticsKB = (analyticsBytes / 1024).toFixed(1);
        var errorsKB = (errorsBytes / 1024).toFixed(1);
        var totalKB = ((analyticsBytes + errorsBytes) / 1024).toFixed(1);

        var html = '';
        html += '<div class="ap-data-grid">';

        // Export card
        html += '<div class="ap-data-card">';
        html += '<h3>Export Data</h3>';
        html += '<p>Download all analytics and error log data as JSON files.</p>';
        html += '<div style="display:flex;gap:8px;flex-wrap:wrap;">';
        html += '<button type="button" class="ap-btn ap-btn-outline ap-btn-sm" id="ap-export-analytics">Export Analytics JSON</button>';
        html += '<button type="button" class="ap-btn ap-btn-outline ap-btn-sm" id="ap-export-errors">Export Error Log JSON</button>';
        html += '</div>';
        html += '</div>';

        // Clear card
        html += '<div class="ap-data-card">';
        html += '<h3>Clear Data</h3>';
        html += '<p>Permanently delete all analytics and/or error data. User progress is not affected.</p>';
        html += '<div style="display:flex;gap:8px;flex-wrap:wrap;">';
        html += '<button type="button" class="ap-btn ap-btn-danger ap-btn-sm" id="ap-clear-analytics">Clear All Analytics</button>';
        if (typeof ErrorLogger !== 'undefined') {
            html += '<button type="button" class="ap-btn ap-btn-danger ap-btn-sm" id="ap-clear-errors-data">Clear All Errors</button>';
        }
        html += '</div>';
        html += '</div>';

        // Storage stats card
        html += '<div class="ap-data-card">';
        html += '<h3>Storage Usage (Approximate)</h3>';
        html += '<div class="ap-storage-stat"><span class="ap-storage-label">Analytics keys</span><span class="ap-storage-val">' + self._esc(String(analyticsKeys)) + '</span></div>';
        html += '<div class="ap-storage-stat"><span class="ap-storage-label">Analytics size</span><span class="ap-storage-val">~' + self._esc(analyticsKB) + ' KB</span></div>';
        html += '<div class="ap-storage-stat"><span class="ap-storage-label">Error log keys</span><span class="ap-storage-val">' + self._esc(String(errorsKeys)) + '</span></div>';
        html += '<div class="ap-storage-stat"><span class="ap-storage-label">Error log size</span><span class="ap-storage-val">~' + self._esc(errorsKB) + ' KB</span></div>';
        html += '<div class="ap-storage-stat"><span class="ap-storage-label">Total used</span><span class="ap-storage-val">~' + self._esc(totalKB) + ' KB</span></div>';
        html += '</div>';

        // Prune card
        html += '<div class="ap-data-card">';
        html += '<h3>Prune Old Data</h3>';
        html += '<p>Remove analytics events and daily stats older than the specified number of days.</p>';
        html += '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">';
        html += '<input type="number" class="ap-prune-input" id="ap-prune-days" value="30" min="1" max="365" placeholder="Days">';
        html += '<span style="font-size:13px;color:var(--text-secondary,#a0a0b0);">days</span>';
        html += '<button type="button" class="ap-btn ap-btn-secondary ap-btn-sm" id="ap-prune-btn">Prune</button>';
        html += '</div>';
        html += '</div>';

        html += '</div>';

        panel.innerHTML = html;

        // Wire export analytics
        var exportAnalyticsBtn = panel.querySelector('#ap-export-analytics');
        if (exportAnalyticsBtn) exportAnalyticsBtn.addEventListener('click', function () { self._exportAnalytics(); });

        // Wire export errors
        var exportErrorsBtn = panel.querySelector('#ap-export-errors');
        if (exportErrorsBtn) exportErrorsBtn.addEventListener('click', function () { self._exportErrors(); });

        // Wire clear analytics
        var clearAnalyticsBtn = panel.querySelector('#ap-clear-analytics');
        if (clearAnalyticsBtn) clearAnalyticsBtn.addEventListener('click', function () { self._clearAllAnalytics(); });

        // Wire clear errors
        var clearErrorsBtn = panel.querySelector('#ap-clear-errors-data');
        if (clearErrorsBtn) clearErrorsBtn.addEventListener('click', function () { self._clearErrors(); });

        // Wire prune
        var pruneBtn = panel.querySelector('#ap-prune-btn');
        if (pruneBtn) {
            pruneBtn.addEventListener('click', function () {
                var daysInput = panel.querySelector('#ap-prune-days');
                var days = parseInt((daysInput && daysInput.value) || '30', 10);
                if (isNaN(days) || days < 1) days = 30;
                self._pruneData(days);
            });
        }
    },

    // ---- Export ----

    _exportAnalytics: function () {
        var result = [];
        try {
            for (var i = 0; i < localStorage.length; i++) {
                var key = localStorage.key(i);
                if (key && key.indexOf('analytics_') === 0) {
                    try {
                        var value = localStorage.getItem(key);
                        result.push({ key: key, value: value ? JSON.parse(value) : null });
                    } catch (e) { /* skip corrupt */ }
                }
            }
        } catch (e) { /* ignore */ }
        try {
            result.push({ key: 'analytics_consent', value: localStorage.getItem('analytics_consent') });
        } catch (e) { /* ignore */ }

        var blob = {
            format: 'chinese-master-analytics',
            exportedAt: new Date().toISOString(),
            entries: result
        };
        this._downloadJSON(blob, 'chinese-master-analytics-' + new Date().toISOString().split('T')[0] + '.json');
    },

    _exportErrors: function () {
        var entries = [];
        if (typeof ErrorLogger !== 'undefined' && typeof ErrorLogger.getEntries === 'function') {
            entries = ErrorLogger.getEntries() || [];
        }
        var blob = {
            format: 'chinese-master-error-log',
            exportedAt: new Date().toISOString(),
            entries: entries
        };
        this._downloadJSON(blob, 'chinese-master-errors-' + new Date().toISOString().split('T')[0] + '.json');
    },

    _downloadJSON: function (data, filename) {
        var json = JSON.stringify(data, null, 2);
        var file = new Blob([json], { type: 'application/json' });
        var url = URL.createObjectURL(file);
        var a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    },

    // ---- Clear ----

    _clearAllAnalytics: function () {
        var self = this;
        var firstConfirm = window.confirm(
            'Delete ALL anonymous analytics data?\n\nThis clears all session records, events, and daily stats. User progress is NOT affected.\n\nThis cannot be undone.'
        );
        if (!firstConfirm) return;
        var secondConfirm = window.confirm(
            'Are you absolutely sure? This action is irreversible.'
        );
        if (!secondConfirm) return;

        try {
            var keysToRemove = [];
            for (var i = 0; i < localStorage.length; i++) {
                var key = localStorage.key(i);
                if (key && key.indexOf('analytics_') === 0) {
                    keysToRemove.push(key);
                }
            }
            keysToRemove.forEach(function (k) { localStorage.removeItem(k); });
        } catch (e) {
            if (typeof Utils !== 'undefined' && typeof Utils.showToast === 'function') {
                Utils.showToast('Failed to clear analytics.', 'warning');
            }
            return;
        }
        if (typeof Utils !== 'undefined' && typeof Utils.showToast === 'function') {
            Utils.showToast('All analytics data cleared.', 'success');
        }
        this._renderData();
    },

    _pruneData: function (days) {
        var self = this;
        var cutoff = new Date();
        cutoff.setDate(cutoff.getDate() - days);
        var cutoffISO = cutoff.toISOString();
        var cutoffDate = cutoff.toISOString().split('T')[0];

        var prunedEvents = 0;
        var prunedDaily = 0;

        try {
            // Prune events for all sessions
            for (var i = localStorage.length - 1; i >= 0; i--) {
                var key = localStorage.key(i);
                if (!key) continue;
                var eventsMatch = key.match(/^analytics_(.+)_events$/);
                if (eventsMatch) {
                    try {
                        var raw = localStorage.getItem(key);
                        if (!raw) continue;
                        var events = JSON.parse(raw);
                        if (!Array.isArray(events)) continue;
                        var kept = events.filter(function (e) { return e.timestamp >= cutoffISO; });
                        var removed = events.length - kept.length;
                        if (removed > 0) {
                            prunedEvents += removed;
                            localStorage.setItem(key, JSON.stringify(kept));
                        }
                    } catch (e) { /* skip */ }
                }

                var dailyMatch = key.match(/^analytics_(.+)_daily$/);
                if (dailyMatch) {
                    try {
                        var rawD = localStorage.getItem(key);
                        if (!rawD) continue;
                        var daily = JSON.parse(rawD);
                        if (typeof daily !== 'object') continue;
                        var changed = false;
                        for (var d in daily) {
                            if (Object.prototype.hasOwnProperty.call(daily, d) && d < cutoffDate) {
                                delete daily[d];
                                prunedDaily++;
                                changed = true;
                            }
                        }
                        if (changed) localStorage.setItem(key, JSON.stringify(daily));
                    } catch (e) { /* skip */ }
                }
            }
        } catch (e) { /* ignore */ }

        if (typeof Utils !== 'undefined' && typeof Utils.showToast === 'function') {
            var msg = 'Pruned ' + prunedEvents + ' event' + (prunedEvents !== 1 ? 's' : '')
                + ' and ' + prunedDaily + ' daily entr' + (prunedDaily !== 1 ? 'ies' : 'y')
                + ' older than ' + days + ' day' + (days !== 1 ? 's' : '') + '.';
            Utils.showToast(msg, 'success');
        }
        this._renderData();
    },

    // ==================== HELPERS ====================

    _gatherAllEvents: function (sessions) {
        var all = [];
        sessions.forEach(function (s) {
            var sid = s.sessionId;
            if (!sid) return;
            try {
                var raw = localStorage.getItem('analytics_' + sid + '_events');
                if (raw) {
                    var events = JSON.parse(raw);
                    if (Array.isArray(events)) all = all.concat(events);
                }
            } catch (e) { /* ignore */ }
        });
        return all;
    },

    _formatTime: function (totalSeconds) {
        var t = totalSeconds || 0;
        if (t < 60) return t + 's';
        if (t < 3600) return Math.round(t / 60) + 'm';
        var h = Math.floor(t / 3600);
        var m = Math.round((t % 3600) / 60);
        return h + 'h ' + m + 'm';
    },

    _formatDate: function (iso) {
        if (!iso) return '?';
        return iso.slice(0, 16).replace('T', ' ');
    }
};

// Self-initialise on DOM ready
document.addEventListener('DOMContentLoaded', function () {
    AdminPanel.init();
});

window.AdminPanel = AdminPanel;

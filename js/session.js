// ============================================
// CHINESE MASTER - Session Manager
// Cookie-based session ID with localStorage mirror.
// Supports multiple anonymous learner profiles per browser.
//
// Security note: on a static host there is no server to enforce HttpOnly,
// so the cookie is JS-readable (no better than localStorage against XSS).
// The real protection is the strict CSP + XSS-sink hardening in app.js/utils.js.
// This module gives users multi-profile UX and a stable identity that
// survives cache clears better than a single localStorage key.
// ============================================

const SessionManager = {
    COOKIE_NAME: 'cm_sid',
    COOKIE_MAX_AGE: 315360000, // 10 years (seconds)
    SESSIONS_KEY: 'sessions',  // index of known session IDs
    ACTIVE_KEY: 'activeSessionId',
    SESSION_VERSION: 1,

    currentSessionId: null,

    init() {
        let sid = this._readCookie(this.COOKIE_NAME);

        // Mirror/detect via localStorage
        const lsActive = Utils.storage.get(this.ACTIVE_KEY, null);

        if (sid && lsActive && sid !== lsActive) {
            // Cookie and localStorage disagree — prefer the cookie (more portable)
            Utils.storage.set(this.ACTIVE_KEY, sid);
        } else if (sid && !lsActive) {
            Utils.storage.set(this.ACTIVE_KEY, sid);
        } else if (!sid && lsActive) {
            // Cookie was cleared (e.g. user cleared cookies) — restore from localStorage
            sid = lsActive;
            this._writeCookie(sid);
        }

        if (!sid) {
            // First visit — create a fresh anonymous session
            sid = this._generateSessionId();
            this._writeCookie(sid);
            Utils.storage.set(this.ACTIVE_KEY, sid);
        }

        this.currentSessionId = sid;
        this._registerSession(sid);
        this._migrateLegacyDataIfNeeded(sid);
    },

    // ---------- Session ID + cookie ----------

    _generateSessionId() {
        if (window.crypto && typeof window.crypto.randomUUID === 'function') {
            return 's_' + window.crypto.randomUUID();
        }
        if (window.crypto && window.crypto.getRandomValues) {
            const bytes = new Uint8Array(16);
            window.crypto.getRandomValues(bytes);
            return 's_' + Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
        }
        // Fallback (non-crypto) — still unique enough for client-side profile id
        return 's_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 14);
    },

    _writeCookie(sid) {
        // SameSite=Lax protects against CSRF-style cross-site requests.
        // Secure requires HTTPS; on plain http (e.g. localhost dev) browsers
        // silently drop Secure, so we attempt it but degrade gracefully.
        const isLocal = location.protocol === 'http:' && (location.hostname === 'localhost' || location.hostname === '127.0.0.1');
        const secure = isLocal ? '' : '; Secure';
        document.cookie = `${this.COOKIE_NAME}=${encodeURIComponent(sid)}; Max-Age=${this.COOKIE_MAX_AGE}; Path=/; SameSite=Lax${secure}`;
    },

    _readCookie(name) {
        const prefix = name + '=';
        const parts = document.cookie.split(';');
        for (let i = 0; i < parts.length; i++) {
            const c = parts[i].trim();
            if (c.indexOf(prefix) === 0) {
                return decodeURIComponent(c.substring(prefix.length));
            }
        }
        return null;
    },

    _clearCookie() {
        const isLocal = location.protocol === 'http:' && (location.hostname === 'localhost' || location.hostname === '127.0.0.1');
        const secure = isLocal ? '' : '; Secure';
        document.cookie = `${this.COOKIE_NAME}=; Max-Age=0; Path=/; SameSite=Lax${secure}`;
    },

    // ---------- Session registry ----------

    _registerSession(sid) {
        const sessions = Utils.storage.get(this.SESSIONS_KEY, {});
        if (!sessions[sid]) {
            sessions[sid] = {
                id: sid,
                name: 'Learner',
                created: new Date().toISOString(),
                lastActive: new Date().toISOString(),
                version: this.SESSION_VERSION
            };
            Utils.storage.set(this.SESSIONS_KEY, sessions);
        }
    },

    _updateSessionMeta(sid, patch) {
        const sessions = Utils.storage.get(this.SESSIONS_KEY, {});
        if (sessions[sid]) {
            Object.assign(sessions[sid], patch, { lastActive: new Date().toISOString() });
            Utils.storage.set(this.SESSIONS_KEY, sessions);
        }
    },

    getSessionMeta(sid) {
        const sessions = Utils.storage.get(this.SESSIONS_KEY, {});
        return sessions[sid] || null;
    },

    getAllSessions() {
        const sessions = Utils.storage.get(this.SESSIONS_KEY, {});
        return Object.values(sessions).sort((a, b) =>
            (b.lastActive || '').localeCompare(a.lastActive || '')
        );
    },

    // ---------- Active session ----------

    getActiveSessionId() {
        if (this.currentSessionId) return this.currentSessionId;
        const sid = Utils.storage.get(this.ACTIVE_KEY, null) || this._readCookie(this.COOKIE_NAME);
        this.currentSessionId = sid;
        return sid;
    },

    switchSession(sid) {
        if (!sid) return false;
        const sessions = Utils.storage.get(this.SESSIONS_KEY, {});
        if (!sessions[sid]) return false;

        this.currentSessionId = sid;
        Utils.storage.set(this.ACTIVE_KEY, sid);
        this._writeCookie(sid);
        this._updateSessionMeta(sid, {});
        return true;
    },

    createSession(name) {
        const sid = this._generateSessionId();
        const sessions = Utils.storage.get(this.SESSIONS_KEY, {});
        sessions[sid] = {
            id: sid,
            name: name || ('Learner ' + (Object.keys(sessions).length + 1)),
            created: new Date().toISOString(),
            lastActive: new Date().toISOString(),
            version: this.SESSION_VERSION
        };
        Utils.storage.set(this.SESSIONS_KEY, sessions);
        return sid;
    },

    renameSession(sid, name) {
        const safeName = String(name || '').slice(0, 40).trim() || 'Learner';
        this._updateSessionMeta(sid, { name: safeName });
    },

    deleteSession(sid) {
        if (sid === this.currentSessionId) return false; // can't delete active session directly
        const sessions = Utils.storage.get(this.SESSIONS_KEY, {});
        if (!sessions[sid]) return false;

        // Purge all data keys for this session
        Utils.storage.remove(`userData_${sid}`);
        Utils.storage.remove(`mistakes_${sid}`);
        Utils.storage.remove(`learningPatterns_${sid}`);
        Utils.storage.remove(`adaptiveDifficulty_${sid}`);
        Utils.storage.remove(`srsData_${sid}`);
        Utils.storage.remove(`levelTrackerData_${sid}`);
        Utils.storage.remove(`mistakeMemory_${sid}`);
        Utils.storage.remove(`dailyStreak_${sid}`);

        delete sessions[sid];
        Utils.storage.set(this.SESSIONS_KEY, sessions);
        return true;
    },

    // ---------- Legacy migration ----------

    // Old app stored everything under bare keys (chineseMaster_userData).
    // On first run with the new system, wrap that data into the first session.
    _migrateLegacyDataIfNeeded(sid) {
        const FLAG = 'migrated_' + sid;
        if (Utils.storage.get(FLAG, false)) return; // already migrated

        const legacy = Utils.storage.get('userData', null);
        const targetKey = `userData_${sid}`;

        // Only migrate if the legacy blob exists AND the session-scoped key does not
        if (legacy && !Utils.storage.get(targetKey, null)) {
            Utils.storage.set(targetKey, legacy);

            // Also migrate the auxiliary blobs that were stored without a session prefix
            const auxMap = {
                'mistakes': `mistakes_${sid}`,
                'learningPatterns': `learningPatterns_${sid}`,
                'adaptiveDifficulty': `adaptiveDifficulty_${sid}`,
                'srsData': `srsData_${sid}`,
                'levelTrackerData': `levelTrackerData_${sid}`,
                'mistakeMemory': `mistakeMemory_${sid}`,
                'dailyStreak': `dailyStreak_${sid}`
            };
            Object.entries(auxMap).forEach(([oldKey, newKey]) => {
                const v = Utils.storage.get(oldKey, null);
                if (v !== null && Utils.storage.get(newKey, null) === null) {
                    Utils.storage.set(newKey, v);
                }
            });

            // Carry over the learner's name into the session metadata
            if (legacy && legacy.name) {
                this._updateSessionMeta(sid, { name: String(legacy.name).slice(0, 40) });
            }
        }

        Utils.storage.set(FLAG, true);
    },

    // ---------- Snapshot / restore (export/import) ----------

    exportActiveSession() {
        const sid = this.getActiveSessionId();
        const meta = this.getSessionMeta(sid) || { id: sid, name: 'Learner' };
        return {
            format: 'chinese-master-session',
            version: this.SESSION_VERSION,
            exportedAt: new Date().toISOString(),
            session: meta,
            data: {
                userData: Utils.storage.get(`userData_${sid}`, null),
                mistakes: Utils.storage.get(`mistakes_${sid}`, null),
                learningPatterns: Utils.storage.get(`learningPatterns_${sid}`, null),
                adaptiveDifficulty: Utils.storage.get(`adaptiveDifficulty_${sid}`, null),
                srsData: Utils.storage.get(`srsData_${sid}`, null),
                levelTrackerData: Utils.storage.get(`levelTrackerData_${sid}`, null),
                mistakeMemory: Utils.storage.get(`mistakeMemory_${sid}`, null),
                dailyStreak: Utils.storage.get(`dailyStreak_${sid}`, null)
            }
        };
    },

    // Import a previously exported session blob into the CURRENT active session
    // (overwrites current session data). Returns true on success.
    importIntoActiveSession(blob) {
        if (!blob || typeof blob !== 'object') return false;
        const data = blob.data || blob;
        const sid = this.getActiveSessionId();

        // Schema-validated write of each section
        if (data.userData) {
            const cleaned = StorageManager.sanitizeUserData(data.userData);
            if (cleaned) Utils.storage.set(`userData_${sid}`, cleaned);
        }
        if (data.mistakes && typeof data.mistakes === 'object') {
            Utils.storage.set(`mistakes_${sid}`, data.mistakes);
        }
        if (data.learningPatterns && typeof data.learningPatterns === 'object') {
            Utils.storage.set(`learningPatterns_${sid}`, data.learningPatterns);
        }
        if (data.adaptiveDifficulty && typeof data.adaptiveDifficulty === 'object') {
            Utils.storage.set(`adaptiveDifficulty_${sid}`, data.adaptiveDifficulty);
        }
        if (data.srsData && typeof data.srsData === 'object') {
            Utils.storage.set(`srsData_${sid}`, data.srsData);
        }
        if (data.levelTrackerData && typeof data.levelTrackerData === 'object') {
            Utils.storage.set(`levelTrackerData_${sid}`, data.levelTrackerData);
        }
        if (data.mistakeMemory && typeof data.mistakeMemory === 'object') {
            Utils.storage.set(`mistakeMemory_${sid}`, data.mistakeMemory);
        }
        if (data.dailyStreak && typeof data.dailyStreak === 'object') {
            Utils.storage.set(`dailyStreak_${sid}`, data.dailyStreak);
        }

        // Restore name if present
        if (blob.session && blob.session.name) {
            this.renameSession(sid, blob.session.name);
        }
        return true;
    }
};

window.SessionManager = SessionManager;

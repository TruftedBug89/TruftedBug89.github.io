// ============================================
// CHINESE MASTER - Client-side Error Logger
// Deduplicated via SHA-256, 100 % localStorage-backed,
// completely serverless. Tracks unique bugs across
// sessions and machines for support diagnostics.
// ============================================

const ErrorLogger = {
    STORAGE_KEY: 'errorlog_entries',
    TOTAL_KEY: 'errorlog_total',
    MAX_ENTRIES: 100,

    _initialized: false,
    _lock: false,

    // ---- Hashing ----

    async _hash(type, message, firstStackFrame) {
        const input = `${type}:${message}:${firstStackFrame}`;
        if (window.crypto && window.crypto.subtle && typeof TextEncoder !== 'undefined') {
            try {
                const msgBuffer = new TextEncoder().encode(input);
                const hashBuffer = await window.crypto.subtle.digest('SHA-256', msgBuffer);
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
            } catch (_) {
                // Fall through to simple hash
            }
        }
        return this._simpleHash(input);
    },

    _simpleHash(str) {
        let hash = 5381;
        for (let i = 0; i < str.length; i++) {
            hash = ((hash << 5) + hash) + str.charCodeAt(i);
            hash = hash & hash;
        }
        return 'h_' + (hash >>> 0).toString(16).padStart(8, '0');
    },

    _firstStackFrame(stack) {
        if (!stack || typeof stack !== 'string') return '';
        const lines = stack.split('\n');
        for (let i = 0; i < lines.length; i++) {
            const trimmed = lines[i].trim();
            if (trimmed.startsWith('at ')) return trimmed;
        }
        if (lines.length > 1) return lines[1].trim();
        return '';
    },

    _deviceFingerprint() {
        try {
            return `${screen.width}x${screen.height}:${navigator.userAgent.slice(0, 100)}`;
        } catch (_) {
            return 'unknown';
        }
    },

    _getSessionId() {
        try {
            if (typeof SessionManager !== 'undefined' && SessionManager.currentSessionId) {
                return SessionManager.currentSessionId;
            }
        } catch (_) { /* not loaded yet */ }
        return '_anon';
    },

    _isoNow() {
        return new Date().toISOString();
    },

    // ---- Storage ----

    _loadEntries() {
        try {
            const raw = localStorage.getItem(this.STORAGE_KEY);
            if (!raw) return [];
            const parsed = JSON.parse(raw);
            if (!Array.isArray(parsed)) return [];
            return parsed;
        } catch (_) {
            return [];
        }
    },

    _saveEntries(entries) {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(entries));
            return true;
        } catch (e) {
            if (e && (e.name === 'QuotaExceededError' || e.code === 22 || e.code === 1014)) {
                const kept = entries.slice(0, Math.floor(entries.length / 2));
                try {
                    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(kept));
                    return true;
                } catch (_) {
                    // Storage truly full — silently drop
                }
            }
            return false;
        }
    },

    _incrementTotal() {
        try {
            const count = parseInt(localStorage.getItem(this.TOTAL_KEY), 10) || 0;
            localStorage.setItem(this.TOTAL_KEY, String(count + 1));
        } catch (_) {
            // Best-effort
        }
    },

    // ---- Entry deduplication + eviction ----

    _upsertEntry(entries, hash, meta) {
        const existing = entries.find(e => e.hash === hash);

        if (existing) {
            existing.lastSeen = meta.now;
            existing.count = (existing.count || 1) + 1;
            if (!existing.sessions) existing.sessions = [];
            if (!existing.machines) existing.machines = [];

            const sid = meta.sid;
            const machine = meta.machine;

            if (sid && existing.sessions.indexOf(sid) === -1) {
                existing.sessions.push(sid);
                if (existing.sessions.length > 50) {
                    existing.sessions = existing.sessions.slice(-50);
                }
            }
            if (machine && existing.machines.indexOf(machine) === -1) {
                existing.machines.push(machine);
                if (existing.machines.length > 50) {
                    existing.machines = existing.machines.slice(-50);
                }
            }
            return false;
        }

        entries.push({
            hash: hash,
            type: meta.type,
            message: meta.message,
            stack: meta.stack,
            source: meta.source || undefined,
            lineno: meta.lineno || undefined,
            colno: meta.colno || undefined,
            firstSeen: meta.now,
            lastSeen: meta.now,
            count: 1,
            sessions: meta.sid ? [meta.sid] : [],
            machines: meta.machine ? [meta.machine] : []
        });
        return true;
    },

    _evictOverflow(entries) {
        if (entries.length <= this.MAX_ENTRIES) return entries;

        entries.sort((a, b) => b.lastSeen.localeCompare(a.lastSeen));

        const keepCount = Math.ceil(this.MAX_ENTRIES * 0.8);
        const keep = entries.slice(0, keepCount);
        const overflow = entries.slice(keepCount);

        overflow.sort((a, b) => (b.count || 0) - (a.count || 0));
        const slots = this.MAX_ENTRIES - keep.length;
        keep.push(...overflow.slice(0, slots));

        keep.sort((a, b) => b.lastSeen.localeCompare(a.lastSeen));
        return keep;
    },

    // ---- Public API ----

    async capture(error, source, lineno, colno) {
        try {
            const type = (error && error.name) || 'Error';
            const message = (error && error.message) || String(error || 'unknown');
            const stack = (error && error.stack) || '';
            const firstFrame = this._firstStackFrame(stack);
            const hash = await this._hash(type, message, firstFrame);
            const meta = {
                now: this._isoNow(),
                sid: this._getSessionId(),
                machine: this._deviceFingerprint(),
                type: type,
                message: message,
                stack: stack,
                source: source || undefined,
                lineno: lineno || undefined,
                colno: colno || undefined
            };

            this._incrementTotal();

            let entries = this._loadEntries();
            this._upsertEntry(entries, hash, meta);
            entries = this._evictOverflow(entries);
            this._saveEntries(entries);
        } catch (_) {
            // Error logger must never throw
        }
    },

    captureRejection(event) {
        const reason = event && event.reason;
        if (!reason) return;

        const msg = (reason && (reason.message || String(reason))) || '';
        if (/speech|synthesis|audio|abort/i.test(msg)) return;

        const error = reason instanceof Error ? reason : new Error(msg);
        this.capture(error, '', 0, 0);
    },

    getEntries() {
        const entries = this._loadEntries();
        return entries.sort((a, b) => b.lastSeen.localeCompare(a.lastSeen));
    },

    getStats() {
        const entries = this._loadEntries();
        const totalAll = parseInt(localStorage.getItem(this.TOTAL_KEY), 10) || 0;
        const now = new Date();
        const cutoff = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();
        const activeLast7Days = entries.filter(e => e.lastSeen >= cutoff).length;

        return {
            totalUnique: entries.length,
            totalAll: totalAll,
            activeLast7Days: activeLast7Days
        };
    },

    clear() {
        try {
            localStorage.removeItem(this.STORAGE_KEY);
            localStorage.removeItem(this.TOTAL_KEY);
            return true;
        } catch (_) {
            return false;
        }
    },

    install() {
        if (this._initialized) return;
        this._initialized = true;

        const self = this;

        window.addEventListener('error', function (e) {
            const error = e.error || e.message || 'uncaught';
            self.capture(error, e.filename || '', e.lineno || 0, e.colno || 0);
        });

        window.addEventListener('unhandledrejection', function (e) {
            self.captureRejection(e);
        });
    }
};

window.ErrorLogger = ErrorLogger;

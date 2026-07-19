// ============================================
// CHINESE MASTER - Utility Functions
// ============================================

const Utils = {

    // Check if the user prefers reduced motion
    isReducedMotion() {
        if (typeof window === 'undefined' || !window.matchMedia) return false;
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    },
    // Generate unique ID (cryptographically random where available)
    generateId() {
        if (window.crypto && typeof window.crypto.randomUUID === 'function') {
            return window.crypto.randomUUID();
        }
        if (window.crypto && window.crypto.getRandomValues) {
            const bytes = new Uint8Array(16);
            window.crypto.getRandomValues(bytes);
            return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
        }
        return Date.now().toString(36) + Math.random().toString(36).slice(2);
    },

    // Escape HTML special characters (prevents XSS when interpolating into innerHTML)
    escapeHtml(value) {
        if (value === null || value === undefined) return '';
        const str = String(value);
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    },

    // Escape for use inside HTML attribute values
    escapeAttr(value) {
        return this.escapeHtml(value);
    },

    // Safe text node creation (preferred over innerHTML for dynamic text)
    text(element, value) {
        if (element) element.textContent = value;
    },

    // Random number between min and max (inclusive)
    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    // Shuffle array (Fisher-Yates algorithm)
    shuffle(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    },

    // Pick random items from array
    randomItems(array, count) {
        if (!array || !array.length) return [];
        // Default to array.length if count is undefined
        const requestedCount = count === undefined ? array.length : count;
        const n = Math.min(requestedCount, array.length);

        if (requestedCount === 1) return [this.randomItem(array)];

        // ⚡ Bolt optimization: Avoid O(N) array copy/shuffle when picking a small subset
        // Fallback to full shuffle only if we need > 50% of the items.
        if (n > array.length / 2) return this.shuffle(array).slice(0, n);

        // Fast O(K) selection using Set to track seen indices
        const result = [];
        const seen = new Set();
        while (result.length < n) {
            const idx = Math.floor(Math.random() * array.length);
            if (!seen.has(idx)) {
                seen.add(idx);
                result.push(array[idx]);
            }
        }
        return result;
    },

    // Pick one random item from array
    randomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    },

    // Format date to readable string
    formatDate(date) {
        const d = new Date(date);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return d.toLocaleDateString('en-US', options);
    },

    // Format time ago
    timeAgo(date) {
        const now = new Date();
        const diff = now - new Date(date);
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
        if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        return 'Just now';
    },

    // Calculate percentage
    percentage(value, total) {
        if (total === 0) return 0;
        return Math.round((value / total) * 100);
    },

    // Debounce function
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle function
    throttle(func, limit) {
        let inThrottle;
        return function executedFunction(...args) {
            if (!inThrottle) {
                func(...args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Deep clone object
    deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    },

    // Check if string contains Chinese characters
    hasChinese(text) {
        return /[\u4e00-\u9fff]/.test(text);
    },

    // Get Chinese character count
    chineseCharCount(text) {
        return (text.match(/[\u4e00-\u9fff]/g) || []).length;
    },

    // Extract Chinese characters from text
    extractChinese(text) {
        return (text.match(/[\u4e00-\u9fff]/g) || []).join('');
    },

    // Compare two strings ignoring whitespace
    compareStrings(str1, str2) {
        str1 = String(str1 || ''); str2 = String(str2 || '');
        return str1.replace(/\s/g, '') === str2.replace(/\s/g, '');
    },

    // Calculate similarity between two strings (Levenshtein distance)
    similarity(s1, s2) {
        const len1 = s1.length;
        const len2 = s2.length;
        const matrix = [];

        for (let i = 0; i <= len1; i++) {
            matrix[i] = [i];
        }

        for (let j = 0; j <= len2; j++) {
            matrix[0][j] = j;
        }

        for (let i = 1; i <= len1; i++) {
            for (let j = 1; j <= len2; j++) {
                const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j - 1] + cost
                );
            }
        }

        const maxLen = Math.max(len1, len2);
        if (maxLen === 0) return 1;
        return 1 - matrix[len1][len2] / maxLen;
    },

    // Check answer with tolerance
    checkAnswer(userAnswer, correctAnswer, tolerance = 0.8) {
        const normalizedUser = userAnswer.trim().toLowerCase();
        const normalizedCorrect = correctAnswer.trim().toLowerCase();

        if (normalizedUser === normalizedCorrect) return 'exact';
        if (this.similarity(normalizedUser, normalizedCorrect) >= tolerance) return 'close';
        return 'incorrect';
    },

    // Create element with attributes
    createElement(tag, attributes = {}, textContent = '') {
        const element = document.createElement(tag);
        Object.entries(attributes).forEach(([key, value]) => {
            if (key === 'className') {
                element.className = value;
            } else if (key === 'dataset') {
                Object.entries(value).forEach(([dataKey, dataValue]) => {
                    element.dataset[dataKey] = dataValue;
                });
            } else {
                element.setAttribute(key, value);
            }
        });
        if (textContent) element.textContent = textContent;
        return element;
    },

    // Show toast notification
    showToast(message, type = 'info', duration = 3000) {
        const container = document.getElementById('toast-container');
        if (!container) return;
        const toast = this.createElement('div', { className: `toast ${type}` }, message);
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => toast.remove(), 300);
        }, duration);
    },

    // Show confetti effect (GSAP-powered burst)
    showConfetti(opts) {
        opts = opts || {};
        var originX = opts.x != null ? opts.x : 0.5;
        var originY = opts.y != null ? opts.y : 0.4;
        var count = opts.count || 80;
        var spread = opts.spread || 360;

        const container = document.createElement('div');
        container.className = 'confetti-container';
        container.style.pointerEvents = 'none';
        container.style.zIndex = '99998';
        document.body.appendChild(container);

        const colors = ['#e85d4a','#c9a65b','#5aab8a','#6095c0','#9b59b6','#f08080','#d4952b','#a0e0c0','#80b8d8','#e85d4a'];
        const shapes = ['square','circle','star'];
        var hasGSAP = typeof gsap !== 'undefined';

        for (let i = 0; i < count; i++) {
            const el = document.createElement('div');
            var s = 6 + Math.random() * 10;
            var shape = shapes[Math.floor(Math.random() * shapes.length)];
            el.style.cssText =
                'position:absolute;' +
                'width:' + s + 'px;height:' + s + 'px;' +
                'left:50%;top:50%;' +
                'background:' + colors[Math.floor(Math.random() * colors.length)] + ';' +
                'border-radius:' + (shape === 'circle' ? '50%' : shape === 'star' ? '1px' : '2px') + ';' +
                'transform:rotate(' + (Math.random() * 360) + 'deg);' +
                'pointer-events:none;';

            container.appendChild(el);

            if (hasGSAP) {
                var angle = (Math.random() - 0.5) * spread;
                var dist = 200 + Math.random() * 500;
                var dx = Math.cos(angle * Math.PI / 180) * dist;
                var dy = Math.sin(angle * Math.PI / 180) * dist - 100;
                if (Utils.isReducedMotion()) {
                    gsap.set(el, { x: dx, y: dy, opacity: 0, scale: 1.4, rotation: (Math.random() - 0.5) * 720 });
                } else {
                    gsap.fromTo(el, { x: 0, y: 0, opacity: 1, scale: 0.3, rotation: 0 }, {
                    x: dx, y: dy,
                    opacity: 0,
                    scale: 1.4,
                    rotation: (Math.random() - 0.5) * 720,
                    duration: 1.6 + Math.random() * 2.2,
                    ease: 'power2.out',
                    delay: Math.random() * 0.4
                });
                }
            } else {
                el.style.animation = 'confettiFall ' + (2.5 + Math.random() * 2) + 's ease-in forwards';
                el.style.animationDelay = Math.random() * 0.5 + 's';
            }
        }

        /* Sparkles — small bright dots */
        for (var j = 0; j < 25; j++) {
            var sp = document.createElement('div');
            sp.style.cssText =
                'position:absolute;width:3px;height:3px;left:50%;top:50%;' +
                'background:#fff;border-radius:50%;pointer-events:none;' +
                'box-shadow:0 0 6px 2px rgba(255,255,255,0.8);';
            container.appendChild(sp);
            if (hasGSAP) {
                var sa = (Math.random() - 0.5) * 360;
                var sd = 80 + Math.random() * 250;
                if (Utils.isReducedMotion()) {
                    gsap.set(sp, { x: Math.cos(sa * Math.PI / 180) * sd, y: Math.sin(sa * Math.PI / 180) * sd - 60, opacity: 0, scale: 0 });
                } else {
                    gsap.fromTo(sp, { x: 0, y: 0, opacity: 1, scale: 1 }, {
                    x: Math.cos(sa * Math.PI / 180) * sd,
                    y: Math.sin(sa * Math.PI / 180) * sd - 60,
                    opacity: 0, scale: 0,
                    duration: 1 + Math.random() * 1.5,
                    ease: 'power3.out',
                    delay: 0.15 + Math.random() * 0.3
                });
                }
            }
        }

        setTimeout(() => {
            if (typeof container.remove === 'function') {
                container.remove();
            } else if (container.parentNode) {
                container.parentNode.removeChild(container);
            }
        }, 4500);
    },

    // Play sound effect (Web Audio — rich musical tones)
    playSound(type) {
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const t = ctx.currentTime;

            function tone(freq, start, dur, vol, shape) {
                var osc = ctx.createOscillator();
                var g = ctx.createGain();
                osc.type = shape || 'sine';
                osc.frequency.setValueAtTime(freq, t + start);
                g.gain.setValueAtTime(vol || 0.25, t + start);
                g.gain.exponentialRampToValueAtTime(0.001, t + start + dur);
                osc.connect(g);
                g.connect(ctx.destination);
                osc.start(t + start);
                osc.stop(t + start + dur);
            }

            switch (type) {
                case 'correct':
                    tone(523.25, 0, 0.12, 0.22);     // C5
                    tone(659.25, 0.08, 0.12, 0.22);   // E5
                    tone(783.99, 0.16, 0.16, 0.22);   // G5
                    tone(1046.5, 0.22, 0.22, 0.18);   // C6 — bright finish
                    break;
                case 'incorrect':
                    tone(200, 0, 0.15, 0.18, 'triangle');
                    tone(160, 0.1, 0.18, 0.16, 'triangle');
                    break;
                case 'levelup':
                    tone(523.25, 0, 0.1, 0.2);       // C5
                    tone(659.25, 0.06, 0.1, 0.2);     // E5
                    tone(783.99, 0.12, 0.1, 0.2);     // G5
                    tone(1046.5, 0.18, 0.1, 0.22);    // C6
                    tone(1318.5, 0.24, 0.12, 0.2);    // E6
                    tone(1568.0, 0.3, 0.18, 0.18);    // G6 — triumphant
                    tone(2093.0, 0.38, 0.35, 0.15);   // C7 — sparkle
                    break;
                case 'click':
                    tone(1200, 0, 0.06, 0.08, 'sine');
                    break;
                case 'pop':
                    tone(880, 0, 0.06, 0.15, 'sine');
                    tone(1100, 0.03, 0.08, 0.12, 'sine');
                    break;
                case 'xp':
                    tone(660, 0, 0.05, 0.12, 'sine');
                    tone(880, 0.04, 0.06, 0.1, 'sine');
                    tone(1100, 0.07, 0.08, 0.08, 'sine');
                    break;
                default:
                    tone(800, 0, 0.1, 0.12, 'sine');
            }
        } catch (e) { /* Audio not available */ }
    },

    // Animate number counting (GSAP if available, vanilla fallback)
    animateNumber(element, target, duration = 1000) {
        if (!element) return;
        if (typeof gsap !== 'undefined') {
            var gsapStart = parseInt(element.textContent) || 0;
            if (Utils.isReducedMotion()) {
                element.textContent = target;
            } else {
                gsap.fromTo(element, { textContent: gsapStart }, {
                textContent: target,
                duration: duration / 1000,
                ease: 'power3.out',
                snap: { textContent: 1 },
                onUpdate: function() { element.textContent = Math.round(element.textContent); }
            });
            }
            return;
        }
        const start = parseInt(element.textContent) || 0;
        const increment = (target - start) / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if ((increment > 0 && current >= target) || (increment < 0 && current <= target)) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.round(current);
        }, 16);
    },

    // Local storage helpers
    storage: {
        get(key, defaultValue = null) {
            try {
                const item = localStorage.getItem(`chineseMaster_${key}`);
                return item ? JSON.parse(item) : defaultValue;
            } catch (e) {
                return defaultValue;
            }
        },

        set(key, value) {
            try {
                localStorage.setItem(`chineseMaster_${key}`, JSON.stringify(value));
                return true;
            } catch (e) {
                // Quota-exceeded recovery: surface to user, then retry once
                if (e && (e.name === 'QuotaExceededError' || e.code === 22 || e.code === 1014)) {
                    if (typeof StorageManager !== 'undefined' && StorageManager.pruneDailyStats) {
                        StorageManager.pruneDailyStats();
                    }
                    try {
                        localStorage.setItem(`chineseMaster_${key}`, JSON.stringify(value));
                        return true;
                    } catch (e2) {
                        this._notifyStorageFailure(e2);
                        return false;
                    }
                }
                this._notifyStorageFailure(e);
                return false;
            }
        },

        _notifyStorageFailure(e) {
            if (this.__storageWarned) return;
            this.__storageWarned = true;
            console.error('Storage write error:', e);
            try {
                if (typeof Utils !== 'undefined' && Utils.showToast) {
                    Utils.showToast('Storage full — some progress may not be saved. Export a backup.', 'warning', 6000);
                }
            } catch (_) { /* ignore */ }
            setTimeout(() => { this.__storageWarned = false; }, 30000);
        },

        remove(key) {
            try {
                localStorage.removeItem(`chineseMaster_${key}`);
                return true;
            } catch (e) {
                return false;
            }
        },

        clear() {
            try {
                Object.keys(localStorage)
                    .filter(key => key.startsWith('chineseMaster_'))
                    .forEach(key => localStorage.removeItem(key));
                return true;
            } catch (e) {
                return false;
            }
        }
    },

    // Date helpers
    date: {
        today() {
            return new Date().toISOString().split('T')[0];
        },

        isToday(dateString) {
            return dateString === this.today();
        },

        isYesterday(dateString) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            return dateString === yesterday.toISOString().split('T')[0];
        },

        daysBetween(date1, date2) {
            const d1 = new Date(date1);
            const d2 = new Date(date2);
            const diffTime = Math.abs(d2 - d1);
            return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        },

        getWeekDays() {
            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const today = new Date();
            const dayOfWeek = today.getDay();
            return days.slice(dayOfWeek + 1).concat(days.slice(0, dayOfWeek + 1));
        }
    }
};

// Export for use in other modules
window.Utils = Utils;

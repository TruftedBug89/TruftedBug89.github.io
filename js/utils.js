// ============================================
// CHINESE MASTER - Utility Functions
// ============================================

const Utils = {
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
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
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
        return this.shuffle(array).slice(0, count);
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
        const toast = this.createElement('div', { className: `toast ${type}` }, message);
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => toast.remove(), 300);
        }, duration);
    },

    // Show confetti effect
    showConfetti() {
        const container = document.createElement('div');
        container.className = 'confetti-container';
        document.body.appendChild(container);

        const colors = ['#e63946', '#ffd700', '#2ecc71', '#00b4d8', '#9b59b6'];

        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = `${Math.random() * 2}s`;
            confetti.style.animationDuration = `${2 + Math.random() * 2}s`;
            container.appendChild(confetti);
        }

        setTimeout(() => container.remove(), 4000);
    },

    // Play sound effect (using Web Audio API)
    playSound(type) {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        switch (type) {
            case 'correct':
                oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
                oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
                oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
                break;
            case 'incorrect':
                oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
                oscillator.frequency.setValueAtTime(150, audioContext.currentTime + 0.1);
                break;
            case 'levelup':
                oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
                oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
                oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
                oscillator.frequency.setValueAtTime(1046.50, audioContext.currentTime + 0.3); // C6
                break;
            case 'click':
                oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
                gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                break;
        }

        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    },

    // Animate number counting (GSAP if available, vanilla fallback)
    animateNumber(element, target, duration = 1000) {
        if (!element) return;
        if (typeof gsap !== 'undefined') {
            var gsapStart = parseInt(element.textContent) || 0;
            gsap.fromTo(element, { textContent: gsapStart }, {
                textContent: target,
                duration: duration / 1000,
                ease: 'power3.out',
                snap: { textContent: 1 },
                onUpdate: function() { element.textContent = Math.round(element.textContent); }
            });
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

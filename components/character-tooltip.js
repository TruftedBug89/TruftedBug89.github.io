// ============================================
// Chinese Character Tooltip — hover any Chinese
// character to see pinyin + English meaning.
// ============================================
const CharacterTooltip = {
    _dict: {},
    _tooltip: null,
    _activeTarget: null,
    _hideTimer: null,
    // CJK Unified Ideographs + Ext A + compatibility ideographs
    _cjkRe: /[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff]/,

    init() {
        this._buildDictionary();
        this._createTooltip();
        this._attachListeners();
    },

    _buildDictionary() {
        var sources = [
            window.VocabularyData, window.VocabularyExtended,
            window.HSK1, window.HSK1Massive, window.HSK1Examples,
            window.HSK2, window.HSK2Massive, window.HSK3, window.HSK3Massive,
            window.HSK4_5, window.HSK4Massive, window.HSK1_2,
            window.TopicDaily, window.TopicFood, window.TopicTravel,
            window.MegaVocabulary, window.VocabularyMega
        ];
        var dict = this._dict;

        sources.forEach(function (src) {
            if (!src || !src.words) return;
            src.words.forEach(function (w) {
                var ch = w.character || '';
                if (ch && !dict[ch]) {
                    dict[ch] = { pinyin: w.pinyin || '', meaning: w.meaning || '' };
                }
            });
        });
    },

    _createTooltip() {
        // Reuse the static markup from index.html if present.
        var el = document.getElementById('cn-tooltip');
        if (!el) {
            el = document.createElement('div');
            el.id = 'cn-tooltip';
            el.className = 'cn-tooltip cn-tooltip--hidden';
            el.setAttribute('role', 'tooltip');
            el.setAttribute('aria-hidden', 'true');
            el.innerHTML = '<div class="cn-tooltip__pinyin"></div><div class="cn-tooltip__meaning"></div>';
            document.body.appendChild(el);
        }
        this._tooltip = el;

        if (getComputedStyle(el).position === 'static') {
            el.style.position = 'absolute';
        }
    },

    _hasOwnCJK(node) {
        // True if the element has CJK in its own (non-descendant) text.
        for (var n = node.firstChild; n; n = n.nextSibling) {
            if (n.nodeType === 3 && this._cjkRe.test(n.nodeValue)) return true;
        }
        return false;
    },

    _resolveTarget(el) {
        // First try known semantic wrappers.
        var known = el.closest(
            '[lang="zh"], .cn-text, .flashcard-character, .speaking-text, ' +
            '.wotd-character, .reading-passage span.word, .word-card-character, ' +
            '.vocab-character, .grammar-example, .dialogue-line'
        );
        if (known) return known;

        // Fallback: any leaf-ish element whose own text contains CJK.
        // Skip elements whose own CJK run is too long (whole paragraphs).
        if (el && el.nodeType === 1 && this._hasOwnCJK(el)) {
            var own = '';
            for (var n = el.firstChild; n; n = n.nextSibling) {
                if (n.nodeType === 3) own += n.nodeValue;
            }
            var cjkRun = own.replace(/[^\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff]+/g, ' ').trim();
            if (cjkRun && cjkRun.replace(/\s/g, '').length <= 12) return el;
        }
        return null;
    },

    _attachListeners() {
        var self = this;

        document.addEventListener('mouseover', function (e) {
            var target = self._resolveTarget(e.target);
            if (!target || target === self._activeTarget) return;
            self._showForTarget(target);
        }, true);

        document.addEventListener('mouseout', function (e) {
            var target = self._resolveTarget(e.target);
            if (target && target === self._activeTarget) {
                self._scheduleHide();
            }
        }, true);

        document.addEventListener('touchstart', function (e) {
            if (self._tooltip && !self._tooltip.classList.contains('cn-tooltip--hidden')) {
                // Allow tapping the tooltip itself without dismissing.
                if (e.target !== self._tooltip && !self._tooltip.contains(e.target)) {
                    self._hide();
                }
            }
        }, { passive: true });

        document.addEventListener('scroll', function () {
            if (self._activeTarget) self._positionFor(self._activeTarget);
        }, { passive: true });

        if (this._tooltip) {
            this._tooltip.addEventListener('mouseenter', function () { clearTimeout(self._hideTimer); });
            this._tooltip.addEventListener('mouseleave', function () { self._scheduleHide(); });
        }
    },

    _entryFor(text) {
        if (!text) return null;
        var entry = this._dict[text];
        if (entry) return { pinyin: entry.pinyin, meaning: entry.meaning, chars: text };

        // Multi-character: join per-character pinyin/meaning.
        if (text.length > 1) {
            var pinyins = [];
            var meanings = [];
            var any = false;
            for (var i = 0; i < text.length; i++) {
                var c = text[i];
                if (!this._cjkRe.test(c)) continue;
                var sub = this._dict[c];
                if (sub) {
                    any = true;
                    pinyins.push(sub.pinyin || '');
                    if (sub.meaning) meanings.push(sub.meaning);
                } else {
                    pinyins.push('?');
                }
            }
            if (any) {
                return {
                    pinyin: pinyins.filter(Boolean).join(' '),
                    meaning: meanings.join('; '),
                    chars: text
                };
            }
        }
        return null;
    },

    _showForTarget(target) {
        var raw = (target.textContent || '').trim();
        if (!raw) return;

        // Strip non-CJK surrounding text (e.g. "你 → nǐ" wrappers).
        var cjkOnly = raw.replace(/[^\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff]+/g, ' ').trim();
        if (!cjkOnly || cjkOnly.replace(/\s/g, '').length > 24) return;

        var entry = this._entryFor(cjkOnly);
        if (!entry) return;

        clearTimeout(this._hideTimer);
        this._activeTarget = target;

        var tooltip = this._tooltip;
        if (!tooltip) return;

        var pinyinEl = tooltip.querySelector('.cn-tooltip__pinyin');
        var meaningEl = tooltip.querySelector('.cn-tooltip__meaning');
        if (pinyinEl) pinyinEl.textContent = entry.pinyin;
        if (meaningEl) meaningEl.textContent = entry.meaning || '';

        tooltip.classList.remove('cn-tooltip--hidden');
        tooltip.setAttribute('aria-hidden', 'false');
        this._positionFor(target);
    },

    _positionFor(target) {
        var tooltip = this._tooltip;
        if (!tooltip || tooltip.classList.contains('cn-tooltip--hidden')) return;

        var rect = target.getBoundingClientRect();
        var tipW = tooltip.offsetWidth || 160;
        var tipH = tooltip.offsetHeight || 52;

        var top = rect.bottom + 6 + window.scrollY;
        var left = rect.left + rect.width / 2 + window.scrollX;

        if (left + tipW / 2 > window.innerWidth - 8) left = window.innerWidth - tipW / 2 - 8;
        if (left - tipW / 2 < 8) left = 8 + tipW / 2;
        if (top + tipH > window.innerHeight + window.scrollY - 8) {
            top = rect.top - tipH - 6 + window.scrollY;
        }

        tooltip.style.top = Math.max(8, top) + 'px';
        tooltip.style.left = left + 'px';
        tooltip.style.transform = 'translateX(-50%)';
    },

    _scheduleHide() {
        var self = this;
        clearTimeout(this._hideTimer);
        this._hideTimer = setTimeout(function () { self._hide(); }, 150);
    },

    _hide() {
        if (this._tooltip) {
            this._tooltip.classList.add('cn-tooltip--hidden');
            this._tooltip.setAttribute('aria-hidden', 'true');
        }
        this._activeTarget = null;
    }
};
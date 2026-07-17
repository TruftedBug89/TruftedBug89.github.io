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
            el.innerHTML = `
                <div class="cn-tooltip__header">
                    <div class="cn-tooltip__chars"></div>
                    <button class="cn-tooltip__audio" aria-label="Play pronunciation">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                        </svg>
                    </button>
                </div>
                <div class="cn-tooltip__pinyin"></div>
                <div class="cn-tooltip__meaning"></div>
            `;
            document.body.appendChild(el);
        }
        this._tooltip = el;

        // Bind audio button
        var audioBtn = el.querySelector('.cn-tooltip__audio');
        if (audioBtn) {
            audioBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (window.AudioManager && typeof window.AudioManager.speak === 'function') {
                    const chars = el.querySelector('.cn-tooltip__chars').textContent;
                    if (chars) {
                        window.AudioManager.speak(chars);
                    }
                }
            });
        }

        if (getComputedStyle(el).position === 'static') {
            el.style.position = 'absolute';
        }
    },

    _colorizePinyin(pinyinString, containerEl) {
        if (!pinyinString || !containerEl) return;
        containerEl.innerHTML = '';

        const syllables = pinyinString.split(' ');
        syllables.forEach((syl, index) => {
            let tone = 5;
            if (/[āēīōūǖ]/.test(syl)) tone = 1;
            else if (/[áéíóúǘ]/.test(syl)) tone = 2;
            else if (/[ǎěǐǒǔǚ]/.test(syl)) tone = 3;
            else if (/[àèìòùǜ]/.test(syl)) tone = 4;

            const span = document.createElement('span');
            span.className = `cn-tooltip__tone-${tone}`;
            span.textContent = syl;

            containerEl.appendChild(span);
            if (index < syllables.length - 1) {
                containerEl.appendChild(document.createTextNode(' '));
            }
        });
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

        var charsEl = tooltip.querySelector('.cn-tooltip__chars');
        var pinyinEl = tooltip.querySelector('.cn-tooltip__pinyin');
        var meaningEl = tooltip.querySelector('.cn-tooltip__meaning');

        if (charsEl) charsEl.textContent = entry.chars;
        if (pinyinEl) this._colorizePinyin(entry.pinyin, pinyinEl);
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
// ============================================
// Chinese Character Tooltip — hover to see
// pinyin + English meaning for any character
// ============================================
const CharacterTooltip = {
    _dict: {},
    _tooltip: null,
    _activeTarget: null,
    _hideTimer: null,

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
        var el = document.createElement('div');
        el.className = 'cn-tooltip';
        el.setAttribute('role', 'tooltip');
        el.setAttribute('aria-hidden', 'true');
        el.innerHTML = '<div class="cn-tooltip__pinyin"></div><div class="cn-tooltip__meaning"></div>';
        document.body.appendChild(el);
        this._tooltip = el;
    },

    _attachListeners() {
        var self = this;
        document.addEventListener('mouseover', function (e) {
            var target = e.target.closest('[lang="zh"], .cn-text, .flashcard-character, .speaking-text, .wotd-character, .reading-passage span.word');
            if (!target || target === self._activeTarget) return;
            self._showForTarget(target);
        }, true);

        document.addEventListener('mouseout', function (e) {
            var target = e.target.closest('[lang="zh"], .cn-text, .flashcard-character, .speaking-text, .wotd-character, .reading-passage span.word');
            if (target && target === self._activeTarget) {
                self._scheduleHide();
            }
        }, true);

        document.addEventListener('touchstart', function (e) {
            if (self._tooltip && !self._tooltip.classList.contains('cn-tooltip--hidden')) {
                self._hide();
            }
        }, { passive: true });

        if (this._tooltip) {
            this._tooltip.addEventListener('mouseenter', function () { clearTimeout(self._hideTimer); });
            this._tooltip.addEventListener('mouseleave', function () { self._scheduleHide(); });
        }
    },

    _showForTarget(target) {
        var text = (target.textContent || '').trim();
        if (!text || text.length > 20) return; // skip long passages

        var entry = this._dict[text];
        if (!entry) {
            // Try looking up individual characters for multi-char without direct match
            if (text.length > 1) {
                for (var i = 0; i < text.length; i++) {
                    var single = this._dict[text[i]];
                    if (single) { entry = single; text = text[i]; break; }
                }
            }
            if (!entry) return;
        }

        clearTimeout(this._hideTimer);
        this._activeTarget = target;

        var tooltip = this._tooltip;
        if (!tooltip) return;

        var pinyinEl = tooltip.querySelector('.cn-tooltip__pinyin');
        var meaningEl = tooltip.querySelector('.cn-tooltip__meaning');
        if (pinyinEl) pinyinEl.textContent = entry.pinyin;
        if (meaningEl) meaningEl.textContent = entry.meaning;

        tooltip.classList.remove('cn-tooltip--hidden');

        // Position near the target
        var rect = target.getBoundingClientRect();
        var top = rect.bottom + 6 + window.scrollY;
        var left = rect.left + rect.width / 2 + window.scrollX;

        // Keep on screen
        var tipW = tooltip.offsetWidth || 160;
        var tipH = tooltip.offsetHeight || 52;
        if (left + tipW / 2 > window.innerWidth - 8) left = window.innerWidth - tipW - 8 + tipW / 2;
        if (left - tipW / 2 < 8) left = 8 + tipW / 2;
        if (top + tipH > window.innerHeight - 8) top = rect.top - tipH - 6 + window.scrollY;

        tooltip.style.top = top + 'px';
        tooltip.style.left = left + 'px';
        tooltip.style.transform = 'translateX(-50%)';
    },

    _scheduleHide() {
        var self = this;
        clearTimeout(this._hideTimer);
        this._hideTimer = setTimeout(function () { self._hide(); }, 150);
    },

    _hide() {
        if (this._tooltip) this._tooltip.classList.add('cn-tooltip--hidden');
        this._activeTarget = null;
    }
};

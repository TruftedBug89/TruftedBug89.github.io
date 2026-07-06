// ============================================
// Word of the Day — daily vocabulary spotlight
// ============================================
const WordOfTheDay = {
    init() {
        this._render();
    },

    _getDailyWord() {
        var allWords = [];
        var sources = [
            { data: window.VocabularyData, name: 'vocabulary' },
            { data: window.HSK1, name: 'hsk1' },
            { data: window.HSK2, name: 'hsk2' },
            { data: window.HSK3, name: 'hsk3' },
            { data: window.HSK1_2, name: 'hsk1-2' }
        ];

        sources.forEach(function (src) {
            if (src.data && src.data.words && src.data.words.length) {
                allWords = allWords.concat(src.data.words);
            }
        });

        if (allWords.length === 0) return null;

        // Deterministic daily word based on date
        var now = new Date();
        var seed = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
        var index = seed % allWords.length;
        return allWords[index];
    },

    _render() {
        var container = document.getElementById('word-of-the-day');
        if (!container) return;

        var word = this._getDailyWord();
        if (!word) {
            container.innerHTML = '';
            return;
        }

        var cn = (typeof Utils !== 'undefined' && Utils.escapeHtml) ? Utils.escapeHtml(word.character || '') : (word.character || '');
        var py = (typeof Utils !== 'undefined' && Utils.escapeHtml) ? Utils.escapeHtml(word.pinyin || '') : (word.pinyin || '');
        var en = (typeof Utils !== 'undefined' && Utils.escapeHtml) ? Utils.escapeHtml(word.meaning || '') : (word.meaning || '');
        var hsk = word.hsk ? 'HSK ' + word.hsk : '';

        container.innerHTML =
            '<div class="wotd-card">' +
            '<div class="wotd-badge">\uD83D\uDCD6 Word of the Day' + (hsk ? ' \u2022 ' + Utils.escapeHtml(hsk) : '') + '</div>' +
            '<div class="wotd-character" lang="zh">' + cn + '</div>' +
            '<div class="wotd-pinyin">' + py + '</div>' +
            '<div class="wotd-meaning">' + en + '</div>' +
            (word.examples && word.examples[0] ?
                '<div class="wotd-example"><span lang="zh">' + Utils.escapeHtml(word.examples[0].cn || '') + '</span><br><span style="color:var(--text-muted);font-size:12px;">' + Utils.escapeHtml(word.examples[0].en || '') + '</span></div>'
                : '') +
            '<button class="wotd-speak-btn" type="button" aria-label="Pronounce ' + cn + '">\uD83D\uDD0A Listen</button>' +
            '</div>';

        var speakBtn = container.querySelector('.wotd-speak-btn');
        if (speakBtn) {
            speakBtn.addEventListener('click', function () {
                if (typeof AudioManager !== 'undefined' && AudioManager.speak) {
                    AudioManager.speak(word.character);
                }
                if (typeof InkAnimations !== 'undefined' && InkAnimations.feedbackPulse) {
                    InkAnimations.feedbackPulse(speakBtn, 'correct');
                }
            });
        }

        if (typeof InkAnimations !== 'undefined') {
            var card = container.querySelector('.wotd-card');
            if (card && InkAnimations.slideInPanel) {
                InkAnimations.slideInPanel(card, 'up');
            }
            var character = container.querySelector('.wotd-character');
            if (character && InkAnimations.textSplitReveal) {
                setTimeout(function() { InkAnimations.textSplitReveal(character); }, 100);
            }
        }
    }
};

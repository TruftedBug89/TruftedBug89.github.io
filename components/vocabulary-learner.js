// ============================================
// CHINESE MASTER - Vocabulary Learner
// Proper flashcard system with SM-2
// ============================================

const VocabularyLearner = {
    // Current state
    currentDeck: null,
    currentCard: null,
    isFlipped: false,
    isEasyMode: false,
    hidePinyin: false,
    mode: 'front',
    _keydownHandler: null,
    _touchStartX: 0,
    _touchStartY: 0,
    _lastCardSnapshot: null,
    _lastCardTime: 0,
    sessionCards: [],
    sessionIndex: 0,
    sessionStats: { correct: 0, incorrect: 0, total: 0 },
    
    // HSK level selection
    hskLevels: {
        1: { name: 'HSK 1', description: 'Beginner - 150 words', data: 'HSK1' },
        2: { name: 'HSK 2', description: 'Elementary - 150 words', data: 'HSK2' },
        3: { name: 'HSK 3', description: 'Intermediate - 200 words', data: 'HSK3' },
        4: { name: 'HSK 4', description: 'Upper Intermediate - 200 words', data: 'HSK4Words' },
        5: { name: 'HSK 5', description: 'Advanced - 150 words', data: 'HSK5Words' }
    },
    
    // Initialize
    init() {
        this.hidePinyin = Utils.storage.get('vocabHidePinyin', false);
        this.showLevelSelector();
    },
    
    // Show level selector
    showLevelSelector() {
        // Remove keydown listener when leaving review screen
        if (this._keydownHandler) {
            document.removeEventListener('keydown', this._keydownHandler);
            this._keydownHandler = null;
        }

        const container = document.getElementById('vocabulary-learner');
        if (!container) return;

        const userData = (typeof StorageManager !== 'undefined') ? StorageManager.getUserData() : null;
        const selectedLevel = this.currentLevel;
        const mastered = userData && userData.progress && userData.progress.vocabulary
            ? (userData.progress.vocabulary.mastered || []).length : 0;

        container.innerHTML = `
            <div class="vocab-header">
                <h2>📚 Vocabulary Learner</h2>
                <p>Learn Chinese words with spaced repetition · ${Utils.escapeHtml(mastered)} mastered</p>
            </div>

            <div class="level-selector">
                <h3>Select HSK Level</h3>
                <div class="level-cards">
                    ${Object.entries(this.hskLevels).map(([level, info]) => {
                        const lvl = parseInt(level);
                        return `
                        <div class="level-card ${lvl === selectedLevel ? 'selected' : ''}" data-level="${Utils.escapeAttr(level)}" role="button" tabindex="0">
                            <div class="level-number">${Utils.escapeHtml(level)}</div>
                            <div class="level-name">${Utils.escapeHtml(info.name)}</div>
                            <div class="level-desc">${Utils.escapeHtml(info.description)}</div>
                            <div class="level-count">${Utils.escapeHtml(this.getWordCount(lvl))} words</div>
                        </div>
                    `;}).join('')}
                </div>
            </div>

            <div class="easy-mode-toggle">
                <label class="easy-mode-label" for="easy-mode-checkbox">
                    <span class="easy-mode-icon">🛝</span>
                    <span class="easy-mode-text">Easy Mode</span>
                    <span class="easy-mode-desc">HSK 1 only · 5 cards per session</span>
                </label>
                <div class="toggle-switch">
                    <input type="checkbox" id="easy-mode-checkbox" ${this.isEasyMode ? 'checked' : ''}>
                    <span class="toggle-slider"></span>
                </div>
            </div>

            <div class="easy-mode-toggle" style="margin-top:8px;">
                <label class="easy-mode-label" for="hide-pinyin-checkbox">
                    <span class="easy-mode-icon">拼</span>
                    <span class="easy-mode-text">Hide Pinyin</span>
                    <span class="easy-mode-desc">Hide pinyin on flashcard fronts</span>
                </label>
                <div class="toggle-switch">
                    <input type="checkbox" id="hide-pinyin-checkbox" ${this.hidePinyin ? 'checked' : ''}>
                    <span class="toggle-slider"></span>
                </div>
            </div>

            <div class="vocab-actions">
                <button id="start-review-btn" class="btn btn-primary">▶ Start Review Session</button>
                <button id="browse-words-btn" class="btn btn-secondary">📖 Browse All Words</button>
            </div>

            <div class="srs-stats-panel" style="margin-top:24px;padding-top:20px;border-top:1px solid var(--bg-hover);" id="srs-stats-panel">
                <h3 style="margin-bottom:12px;">📊 SRS Progress</h3>
                <div id="srs-stats-content" style="color:var(--text-muted);">${this.getSRSStatsHTML(selectedLevel)}</div>
            </div>

            <div class="mode-selector" style="margin-top:24px;padding-top:20px;border-top:1px solid var(--bg-hover);">
                <h3 style="margin-bottom:12px;">🎯 Study Mode</h3>
                <div class="mode-options" style="display:flex;flex-wrap:wrap;gap:8px;">
                    <button class="mode-btn btn ${this.mode === 'front' ? 'btn-primary' : 'btn-secondary'}" data-mode="front" aria-pressed="${this.mode === 'front' ? 'true' : 'false'}">Front → Back</button>
                    <button class="mode-btn btn ${this.mode === 'back' ? 'btn-primary' : 'btn-secondary'}" data-mode="back" aria-pressed="${this.mode === 'back' ? 'true' : 'false'}">Back → Front</button>
                    <button class="mode-btn btn ${this.mode === 'audio' ? 'btn-primary' : 'btn-secondary'}" data-mode="audio" aria-pressed="${this.mode === 'audio' ? 'true' : 'false'}">Audio Only</button>
                    <button class="mode-btn btn ${this.mode === 'cloze' ? 'btn-primary' : 'btn-secondary'}" data-mode="cloze" aria-pressed="${this.mode === 'cloze' ? 'true' : 'false'}">Cloze</button>
                    <button class="mode-btn btn ${this.mode === 'typing' ? 'btn-primary' : 'btn-secondary'}" data-mode="typing" aria-pressed="${this.mode === 'typing' ? 'true' : 'false'}">Typing</button>
                </div>
            </div>

            <div class="topic-drills-section" style="margin-top:24px;padding-top:20px;border-top:1px solid var(--bg-hover);">
                <h3 style="margin-bottom:12px;">📂 Topic Vocabulary Drills</h3>
                <p style="color:var(--text-muted);margin-bottom:12px;">Study words organized by real-world topic</p>
                <div class="topic-chips" style="display:flex;flex-wrap:wrap;gap:8px;">
                    ${this.getTopicChipsHTML()}
                </div>
            </div>
        `; 

        // Add event listeners
        document.querySelectorAll('.level-card').forEach(card => {
            card.addEventListener('click', () => {
                const level = parseInt(card.dataset.level);
                this.selectLevel(level);
            });
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
            });
        });

        const easyCheckbox = document.getElementById('easy-mode-checkbox');
        if (easyCheckbox) {
            easyCheckbox.addEventListener('change', () => {
                this.isEasyMode = easyCheckbox.checked;
            });
        }

        const hidePinyinCheckbox = document.getElementById('hide-pinyin-checkbox');
        if (hidePinyinCheckbox) {
            hidePinyinCheckbox.addEventListener('change', () => {
                this.hidePinyin = hidePinyinCheckbox.checked;
                Utils.storage.set('vocabHidePinyin', this.hidePinyin);
            });
        }

        const startBtn = document.getElementById('start-review-btn');
        if (startBtn) startBtn.addEventListener('click', () => this.startReviewSession());

        const browseBtn = document.getElementById('browse-words-btn');
        if (browseBtn) browseBtn.addEventListener('click', () => this.showWordBrowser());

        document.querySelectorAll('.topic-chip-btn').forEach(chip => {
            chip.addEventListener('click', () => {
                this.showTopicDrills(chip.dataset.topic);
            });
        });

        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                var newMode = btn.dataset.mode;
                this.mode = newMode;
                this.showLevelSelector();
            });
        });
    },
    
    // Get word count for HSK level (DataLoader JSONL preferred, legacy globals fallback)
    getWordCount(level) {
        if (typeof DataLoader !== 'undefined' && typeof DataLoader.getWordCount === 'function') {
            var dlCount = DataLoader.getWordCount('hsk' + level);
            if (dlCount > 0) return dlCount;
            if (level === 4) {
                dlCount = DataLoader.getWordCount('hsk4');
                if (dlCount) return dlCount;
            }
            if (level === 5) {
                dlCount = DataLoader.getWordCount('hsk5');
                if (dlCount) return dlCount;
            }
        }
        const dataMap = {
            1: typeof HSK1 !== 'undefined' ? HSK1.count : 0,
            2: typeof HSK2 !== 'undefined' ? HSK2.count : 0,
            3: typeof HSK3 !== 'undefined' ? HSK3.count : 0,
            4: typeof HSK4Words !== 'undefined' ? HSK4Words.count : 0,
            5: typeof HSK5Words !== 'undefined' ? HSK5Words.count : 0
        };
        return dataMap[level] || 0;
    },
    
    // Get SRS stats HTML for level selector
    getSRSStatsHTML(level) {
        if (!level) return '<p>Select a level to see stats.</p>';
        var deckName = 'hsk' + level;
        var cards;
        try {
            cards = (typeof SM2 !== 'undefined') ? SM2.loadCards(deckName) : [];
        } catch (e) {
            cards = [];
        }
        if (!cards || cards.length === 0) return '<p>No cards studied yet for this level.</p>';
        var stats = (typeof SM2 !== 'undefined') ? SM2.getDeckStats(deckName) : { total: 0, new: 0, learning: 0, mastered: 0, dueToday: 0, retentionRate: 0 };
        return '<div style="display:flex;flex-wrap:wrap;gap:8px;font-size:0.9em;">' +
            '<span class="stat-chip" style="padding:4px 10px;background:var(--bg-card);border-radius:6px;">Total: <strong>' + stats.total + '</strong></span>' +
            '<span class="stat-chip" style="padding:4px 10px;background:var(--bg-card);border-radius:6px;color:var(--color-info);">New: <strong>' + stats.new + '</strong></span>' +
            '<span class="stat-chip" style="padding:4px 10px;background:var(--bg-card);border-radius:6px;color:var(--color-warning);">Learning: <strong>' + stats.learning + '</strong></span>' +
            '<span class="stat-chip" style="padding:4px 10px;background:var(--bg-card);border-radius:6px;color:var(--color-success);">Mastered: <strong>' + stats.mastered + '</strong></span>' +
            '<span class="stat-chip" style="padding:4px 10px;background:var(--bg-card);border-radius:6px;color:var(--color-danger);">Due: <strong>' + stats.dueToday + '</strong></span>' +
            '<span class="stat-chip" style="padding:4px 10px;background:var(--bg-card);border-radius:6px;">Retention: <strong>' + stats.retentionRate + '%</strong></span>' +
            '</div>';
    },

    // Select HSK level
    selectLevel(level) {
        this.currentLevel = level;
        
        // Highlight selected level
        document.querySelectorAll('.level-card').forEach(card => {
            const isSelected = parseInt(card.dataset.level) === level;
            card.classList.toggle('selected', isSelected);
            if (isSelected && typeof InkAnimations !== 'undefined' && InkAnimations.attentionPulse) {
                InkAnimations.attentionPulse(card);
            }
        });

        // Dynamic lazy loading of selected HSK level
        if (typeof DataLoader !== 'undefined' && typeof DataLoader.loadLevel === 'function') {
            DataLoader.loadLevel('hsk' + level).then(() => {
                const card = document.querySelector(`.level-card[data-level="${level}"]`);
                if (card) {
                    const countEl = card.querySelector('.level-count');
                    if (countEl && typeof this.getWordCount === 'function') {
                        countEl.textContent = this.getWordCount(level) + ' words';
                    }
                }
            }).catch(function(e) {
                console.warn('Failed to load level on-demand:', e);
            });
        }
    },
    
    // Get words for current level (DataLoader JSONL preferred, legacy globals fallback)
    getWordsForLevel(level) {
        if (typeof DataLoader !== 'undefined' && typeof DataLoader.getWords === 'function') {
            var dlWords = DataLoader.getWords('hsk' + level);
            if (dlWords && dlWords.length > 0) return dlWords;
            if (level === 4) {
                dlWords = DataLoader.getWords('hsk4');
                if (dlWords && dlWords.length > 0) return dlWords;
            }
            if (level === 5) {
                dlWords = DataLoader.getWords('hsk5');
                if (dlWords && dlWords.length > 0) return dlWords;
            }
        }
        switch(level) {
            case 1: return typeof HSK1 !== 'undefined' ? HSK1.words : [];
            case 2: return typeof HSK2 !== 'undefined' ? HSK2.words : [];
            case 3: return typeof HSK3 !== 'undefined' ? HSK3.words : [];
            case 4: return typeof HSK4Words !== 'undefined' ? HSK4Words.words : [];
            case 5: return typeof HSK5Words !== 'undefined' ? HSK5Words.words : [];
            default: return [];
        }
    },
    
    // Start review session
    startReviewSession() {
        const level = this.isEasyMode ? 1 : (this.currentLevel || 1);
        const words = this.getWordsForLevel(level);

        if (words.length === 0) {
            Utils.showToast('No words available for this level', 'error');
            return;
        }

        const deckName = this.isEasyMode ? 'hsk1-easy' : ('hsk' + level);
        this.sessionDeckName = deckName;
        this.sessionLevel = level;
        let cards = (typeof SM2 !== 'undefined') ? SM2.loadCards(deckName) : [];

        if (cards.length === 0) {
            cards = words.map(word => (typeof SM2 !== 'undefined') ? SM2.createCard(
                word.id,
                { character: word.character, pinyin: word.pinyin },
                { meaning: word.meaning, examples: word.examples || [] }
            ) : { id: word.id, front: { character: word.character, pinyin: word.pinyin }, back: { meaning: word.meaning, examples: word.examples || [] } });
            SM2.saveCards(deckName, cards);
        }

        const sessionSize = this.isEasyMode ? { maxNew: 5, maxReview: 10 } : { maxNew: 10, maxReview: 20 };
        const session = SM2.generateSession(cards, sessionSize);
        this.sessionCards = session.cards;
        this.sessionIndex = 0;
        this.sessionStats = { correct: 0, incorrect: 0, total: 0 };
        this.lowQualityWords = [];

        if (this.sessionCards.length === 0) {
            var fallbackCards = words.slice(0, 10).map(function(word) { return SM2.createCard(
                word.id,
                { character: word.character, pinyin: word.pinyin },
                { meaning: word.meaning, examples: word.examples || [] }
            ); });
            var confirmStudy = window.confirm('No cards due for review. Study 10 new cards instead?');
            if (!confirmStudy) { return; }
            SM2.saveCards(deckName, fallbackCards);
            var fallbackSession = SM2.generateSession(fallbackCards, { maxNew: 10, maxReview: 0 });
            this.sessionCards = fallbackSession.cards;
            this.sessionIndex = 0;
            this.sessionStats = { correct: 0, incorrect: 0, total: 0 };
            this.lowQualityWords = [];
        }

        this.showCurrentCard();
    },
    
    // Build cloze sentence (replace word with blank)
    buildClozeSentence(card) {
        var examples = card.back.examples || [];
        var sentence = '';
        if (examples.length > 0) {
            sentence = typeof examples[0] === 'string' ? examples[0] : (examples[0].cn || '');
        }
        if (!sentence) {
            var wordData = this.findWordData(card);
            if (wordData && wordData.examples && wordData.examples.length) {
                var ex = wordData.examples[0];
                sentence = typeof ex === 'string' ? ex : (ex.cn || '');
            }
        }
        if (!sentence) sentence = card.front.character;
        var char = card.front.character;
        var blanked = sentence.split(char).join('____');
        if (blanked === sentence) blanked = '____';
        return Utils.escapeHtml(blanked);
    },

    // Show current card
    showCurrentCard() {
        if (this.sessionIndex >= this.sessionCards.length) {
            this.showSessionComplete();
            return;
        }
        
        // Remove previous keydown listener if any
        if (this._keydownHandler) {
            document.removeEventListener('keydown', this._keydownHandler);
            this._keydownHandler = null;
        }

        const card = this.sessionCards[this.sessionIndex];
        this.currentCard = card;
        this.isFlipped = false;
        
        const container = document.getElementById('vocabulary-learner');
        const safeChar = Utils.escapeHtml(card.front.character);
        const safePy = Utils.escapeHtml(card.front.pinyin);
        const safeMeaning = Utils.escapeHtml(card.back.meaning);
        const safeExample = card.back.examples && card.back.examples[0] ? Utils.escapeHtml(card.back.examples[0]) : '';
        const idx = this.sessionIndex + 1;
        const total = this.sessionCards.length;
        const remaining = total - this.sessionIndex;
        const lvl = this.currentLevel || 1;
        var mode = this.mode || 'front';
        
        // HSK badge
        const wordData = this.findWordData(card);
        const hskBadge = wordData && wordData.hsk ? '<span class="hsk-card-badge">HSK ' + Utils.escapeHtml(wordData.hsk) + '</span>' : '';
        
        // Build front/back based on mode
        var frontPinyinHtml = this.hidePinyin ? '' : '<div class="flashcard-pinyin pinyin-element">' + safePy + '</div>';
        var backPinyinHtml = '<div class="flashcard-pinyin pinyin-element">' + safePy + '</div>';

        var frontContent = '';
        var backContent = '';
        
        if (mode === 'front') {
            frontContent = '\
                        <div class="flashcard-character-wrapper" style="display:flex;align-items:center;gap:8px;justify-content:center;">\
                            <div class="flashcard-character" lang="zh">' + safeChar + '</div>\
                            <button class="audio-btn" id="audio-play-btn" aria-label="Play audio" style="background:none;border:none;cursor:pointer;font-size:1.2em;padding:4px;" type="button">\ud83d\udd0a</button>\
                        </div>\
                        ' + frontPinyinHtml + '\
                        <div class="flashcard-hint">Click to reveal answer</div>';
            backContent = '\
                        ' + (this.hidePinyin ? backPinyinHtml : '') + '\
                        <div class="flashcard-meaning">' + safeMeaning + '</div>\
                        ' + (card.back.examples && card.back.examples[0] ? '\
                            <div class="flashcard-example">\
                                <div class="example-text" lang="zh">' + safeExample + '</div>\
                            </div>\
                        ' : '') + '';
        } else if (mode === 'back') {
            frontContent = '\
                        <div class="flashcard-meaning" style="font-size:1.5em;">' + safeMeaning + '</div>\
                        <div class="flashcard-hint">Click to reveal character</div>';
            backContent = '\
                        <div class="flashcard-character" lang="zh" style="font-size:2.5em;">' + safeChar + '</div>\
                        <div class="flashcard-pinyin pinyin-element">' + safePy + '</div>\
                        ' + (card.back.examples && card.back.examples[0] ? '\
                            <div class="flashcard-example">\
                                <div class="example-text" lang="zh">' + safeExample + '</div>\
                            </div>\
                        ' : '') + '';
        } else if (mode === 'audio') {
            frontContent = '\
                        <div class="flashcard-character-wrapper" style="display:flex;align-items:center;gap:8px;justify-content:center;">\
                            <div class="flashcard-character" lang="zh">' + safeChar + '</div>\
                            <button class="audio-btn" id="audio-play-btn" aria-label="Play audio" style="background:none;border:none;cursor:pointer;font-size:1.2em;padding:4px;" type="button">\ud83d\udd0a</button>\
                        </div>\
                        <div class="flashcard-hint">Listen and recall the meaning</div>';
            backContent = '\
                        <div class="flashcard-meaning">' + safeMeaning + '</div>\
                        <div class="flashcard-pinyin pinyin-element">' + safePy + '</div>\
                        ' + (card.back.examples && card.back.examples[0] ? '\
                            <div class="flashcard-example">\
                                <div class="example-text" lang="zh">' + safeExample + '</div>\
                            </div>\
                        ' : '') + '';
        } else if (mode === 'cloze') {
            var clozeText = this.buildClozeSentence(card);
            frontContent = '\
                        <div class="flashcard-cloze" style="font-size:1.5em;line-height:1.6;">' + clozeText + '</div>\
                        <div class="flashcard-hint">What word is missing?</div>';
            backContent = '\
                        <div class="flashcard-character" lang="zh" style="font-size:2.5em;">' + safeChar + '</div>\
                        <div class="flashcard-pinyin pinyin-element">' + safePy + '</div>\
                        <div class="flashcard-meaning">' + safeMeaning + '</div>\
                        ' + (card.back.examples && card.back.examples[0] ? '\
                            <div class="flashcard-example">\
                                <div class="example-text" lang="zh">' + safeExample + '</div>\
                            </div>\
                        ' : '') + '';
        } else if (mode === 'typing') {
            frontContent = '\
                        <div class="flashcard-meaning" style="font-size:1.2em;">' + safeMeaning + '</div>\
                        ' + frontPinyinHtml + '\
                        <div class="flashcard-hint">Type the character</div>\
                        <div style="margin-top:16px;">\
                            <input type="text" id="typing-input" style="font-size:1.5em;text-align:center;width:150px;padding:8px;border:2px solid var(--color-primary);border-radius:8px;" placeholder="Type here..." autofocus lang="zh">\
                        </div>';
            backContent = '\
                        <div class="flashcard-character" lang="zh" style="font-size:2.5em;">' + safeChar + '</div>\
                        ' + backPinyinHtml + '\
                        <div class="flashcard-meaning">' + safeMeaning + '</div>';
        }
        
        container.innerHTML = '\
            <div class="review-header">\
                <button class="back-btn" data-cm-action="back-levels">\u2190 Back</button>\
                <div class="review-progress">\
                    <span id="review-current">' + Utils.escapeHtml(idx) + '</span> / <span id="review-total">' + Utils.escapeHtml(total) + '</span>\
                </div>\
                <div class="review-stats">\
                    <span class="stat-correct">\u2713 ' + Utils.escapeHtml(this.sessionStats.correct) + '</span>\
                    <span class="stat-incorrect">\u2717 ' + Utils.escapeHtml(this.sessionStats.incorrect) + '</span>\
                </div>\
            </div>\
\
            <div class="flashcard-container">\
                ' + hskBadge + '\
                <div id="flashcard" class="flashcard" role="button" tabindex="0" aria-label="Flashcard - click or press space to flip">\
                    <div class="flashcard-front">' + frontContent + '\
                    </div>\
                    <div class="flashcard-back">' + backContent + '\
                    </div>\
                </div>\
            </div>\
\
            <div id="learning-details" class="learning-details-panel" style="display: none;"></div>\
\
            <div class="rating-buttons" id="rating-buttons" style="display: none;">\
                <p class="rating-label">How well did you know this?</p>\
                <div class="rating-grid">\
                    <button class="rating-btn rating-1" data-rate="1" title="Complete blackout">\
                        <span class="rating-number">1</span>\
                        <span class="rating-text">Forgot</span>\
                    </button>\
                    <button class="rating-btn rating-2" data-rate="2" title="Wrong, but remembered after seeing answer">\
                        <span class="rating-number">2</span>\
                        <span class="rating-text">Hard</span>\
                    </button>\
                    <button class="rating-btn rating-3" data-rate="3" title="Correct with difficulty">\
                        <span class="rating-number">3</span>\
                        <span class="rating-text">Okay</span>\
                    </button>\
                    <button class="rating-btn rating-4" data-rate="4" title="Correct after hesitation">\
                        <span class="rating-number">4</span>\
                        <span class="rating-text">Good</span>\
                    </button>\
                    <button class="rating-btn rating-5" data-rate="5" title="Perfect response">\
                        <span class="rating-number">5</span>\
                        <span class="rating-text">Easy</span>\
                    </button>\
                </div>\
            </div>\
\
            <div class="session-info">\
                <p>' + (this.isEasyMode ? '<span class="easy-badge">\ud83c\udf1f Easy Mode</span>' : '') + ' Deck: HSK ' + Utils.escapeHtml(lvl) + ' | Cards due: ' + Utils.escapeHtml(remaining) + '</p>\
            </div>\
        ';

        // Wire up handlers via addEventListener (CSP-safe, no inline onclick)
        const flashcard = document.getElementById('flashcard');
        if (flashcard) {
            flashcard.addEventListener('click', function() { VocabularyLearner.flipCard(); });
            flashcard.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); VocabularyLearner.flipCard(); }
            });
            // Touch events for swipe
            flashcard.addEventListener('touchstart', function(e) {
                VocabularyLearner._touchStartX = e.touches[0].clientX;
                VocabularyLearner._touchStartY = e.touches[0].clientY;
            }, { passive: true });
            flashcard.addEventListener('touchend', function(e) {
                if (VocabularyLearner._touchStartX === 0) return;
                var deltaX = e.changedTouches[0].clientX - VocabularyLearner._touchStartX;
                var deltaY = e.changedTouches[0].clientY - VocabularyLearner._touchStartY;
                VocabularyLearner._touchStartX = 0;
                VocabularyLearner._touchStartY = 0;
                // Only treat as horizontal swipe if horizontal delta is larger than vertical
                if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 80) {
                    if (deltaX < -80) {
                        // Swipe left: Forgot (rate 1)
                        if (VocabularyLearner.isFlipped) VocabularyLearner.rateCard(1);
                    } else if (deltaX > 80) {
                        // Swipe right: Good (rate 4)
                        if (VocabularyLearner.isFlipped) VocabularyLearner.rateCard(4);
                    }
                }
            }, { passive: true });
        }
        
        // Wire audio button
        var audioBtn = document.getElementById('audio-play-btn');
        if (audioBtn) {
            audioBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                if (typeof AudioManager !== 'undefined') {
                    AudioManager.speak(VocabularyLearner.currentCard.front.character);
                }
            });
        }
        
        // Auto-play audio for audio mode
        if (mode === 'audio' && typeof AudioManager !== 'undefined') {
            setTimeout(function() {
                AudioManager.speak(VocabularyLearner.currentCard.front.character);
            }, 300);
        }
        
        // Wire typing input check for typing mode
        if (mode === 'typing') {
            var typingInput = document.getElementById('typing-input');
            if (typingInput) {
                typingInput.addEventListener('blur', function() { VocabularyLearner.checkTypingAnswer(); });
                typingInput.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        VocabularyLearner.checkTypingAnswer();
                    }
                });
            }
            // No auto-flip for typing - just show rating after check
        }
        
        container.querySelectorAll('[data-rate]').forEach(function(btn) {
            var q = parseInt(btn.dataset.rate);
            btn.addEventListener('click', function() { VocabularyLearner.rateCard(q); });
        });
        var backBtn = container.querySelector('[data-cm-action="back-levels"]');
        if (backBtn) {
            backBtn.addEventListener('click', function() { VocabularyLearner.showLevelSelector(); });
        }
        
        // Add keyboard hotkeys
        var handler = function(e) {
            // Keys 1-5: rate card (only when flipped)
            if (e.key >= '1' && e.key <= '5') {
                if (VocabularyLearner.isFlipped) {
                    e.preventDefault();
                    VocabularyLearner.rateCard(parseInt(e.key));
                }
                return;
            }
            // Space: toggle flip (only when not already in rating transition)
            if (e.key === ' ' || e.key === 'Spacebar') {
                var ratingBtns = document.getElementById('rating-buttons');
                if (!ratingBtns || ratingBtns.style.display !== 'block') {
                    e.preventDefault();
                    VocabularyLearner.flipCard();
                }
                return;
            }
            // 'u' or 'U': undo last rating
            if (e.key === 'u' || e.key === 'U') {
                if (VocabularyLearner._lastCardSnapshot) {
                    var elapsed = Date.now() - VocabularyLearner._lastCardTime;
                    if (elapsed < 3000) {
                        e.preventDefault();
                        VocabularyLearner.undoLastRating();
                    }
                }
                return;
            }
            // 'a' or 'A': play audio
            if (e.key === 'a' || e.key === 'A') {
                if (VocabularyLearner.currentCard && typeof AudioManager !== 'undefined') {
                    e.preventDefault();
                    AudioManager.speak(VocabularyLearner.currentCard.front.character);
                }
                return;
            }
        };
        document.addEventListener('keydown', handler);
        this._keydownHandler = handler;
    },
    
    // Check typing answer
    checkTypingAnswer() {
        var input = document.getElementById('typing-input');
        if (!input) return;
        var answer = input.value.trim();
        var card = this.currentCard;
        if (!card) return;
        var correctChar = card.front.character;
        if (answer === correctChar) {
            // Correct - show rating buttons
            this.isFlipped = true;
            var flashcard = document.getElementById('flashcard');
            if (flashcard) {
                if (typeof InkAnimations !== 'undefined' && InkAnimations.flashcardFlip) {
                    InkAnimations.flashcardFlip(flashcard, false);
                } else {
                    flashcard.classList.add('flipped');
                }
            }
            var ratingButtons = document.getElementById('rating-buttons');
            if (ratingButtons) ratingButtons.style.display = 'block';
            input.style.borderColor = 'var(--color-success)';
            input.disabled = true;
        } else {
            // Wrong - show feedback
            input.style.borderColor = 'var(--color-danger)';
            setTimeout(function() {
                input.style.borderColor = 'var(--color-primary)';
            }, 1000);
        }
    },

    // Undo last rating by restoring snapshot
    undoLastRating() {
        if (!this._lastCardSnapshot) return;
        var deckName = this.sessionDeckName || ('hsk' + (this.currentLevel || 1));
        var snapshot = JSON.parse(JSON.stringify(this._lastCardSnapshot));
        SM2.updateCard(deckName, snapshot);
        this.sessionCards[this.sessionIndex] = snapshot;
        this.currentCard = snapshot;
        this._lastCardSnapshot = null;
        this._lastCardTime = 0;
        this.isFlipped = false;
        var flashcard = document.getElementById('flashcard');
        if (flashcard) {
            flashcard.classList.remove('flipped');
        }
        var ratingButtons = document.getElementById('rating-buttons');
        if (ratingButtons) ratingButtons.style.display = 'none';
        Utils.showToast('Rating undone', 'info');
    },

    // Flip card
    flipCard() {
        const flashcard = document.getElementById('flashcard');
        if (!flashcard) return;

        this.isFlipped = !this.isFlipped;
        
        if (typeof InkAnimations !== 'undefined' && InkAnimations.flashcardFlip) {
            InkAnimations.flashcardFlip(flashcard, !this.isFlipped);
        } else {
            flashcard.classList.toggle('flipped', this.isFlipped);
        }
        
        // Show rating buttons when flipped
        const ratingButtons = document.getElementById('rating-buttons');
        if (ratingButtons) {
            ratingButtons.style.display = this.isFlipped ? 'block' : 'none';
        }
        
        // Hide hint
        const hint = flashcard.querySelector('.flashcard-hint');
        if (hint) {
            hint.style.display = 'none';
        }

        // Disable typing input if flipped
        var typingInput = document.getElementById('typing-input');
        if (typingInput && this.isFlipped) {
            typingInput.disabled = true;
        } else if (typingInput && !this.isFlipped) {
            typingInput.disabled = false;
            typingInput.focus();
        }

        // Focus first rating button for keyboard access
        const firstRatingBtn = document.querySelector('.rating-btn');
        if (firstRatingBtn) {
            firstRatingBtn.focus();
        }
        
        // Show/hide learning details panel
        const detailsPanel = document.getElementById('learning-details');
        if (detailsPanel) {
            detailsPanel.style.display = this.isFlipped ? 'block' : 'none';
        }
        
        // Populate learning details when card is flipped
        if (this.isFlipped && this.currentCard) {
            this.showLearningDetails();
        }
    },
    
    // Show learning details after flip
    showLearningDetails() {
        const detailsContainer = document.getElementById('learning-details');
        if (!detailsContainer) return;
        
        const card = this.currentCard;
        const wordData = this.findWordData(card);
        
        let detailsHtml = '';
        
        // HSK level badge
        if (wordData && wordData.hsk) {
            detailsHtml += `<div class="detail-badge hsk-badge">HSK ${Utils.escapeHtml(wordData.hsk)}</div>`;
        }
        
        // Frequency rank — disabled until dataset is available
        // if (wordData && wordData.frequency) {
        //     detailsHtml += `<div class="detail-badge freq-badge">Top ${Utils.escapeHtml(wordData.frequency)} most common</div>`;
        // }
        
        // Radical/component breakdown — disabled until dataset is available
        // if (wordData && wordData.radicals && wordData.radicals.length) {
        //     detailsHtml += `<div class="detail-section">
        //         <div class="detail-label">Character Breakdown</div>
        //         <div class="detail-radicals">${wordData.radicals.map(r => `<span class="radical-chip"><span class="radical-char">${Utils.escapeHtml(r.char)}</span><span class="radical-name">${Utils.escapeHtml(r.name)}</span></span>`).join('')}</div>
        //     </div>`;
        // }
        
        // Example sentences - check HSK1Examples first, then card data
        var examples = [];
        if (wordData && typeof HSK1Examples !== 'undefined') {
            var hskEx = HSK1Examples.examples;
            if (hskEx && hskEx[card.front.character]) {
                examples = hskEx[card.front.character].map(function(ex) {
                    return { cn: ex.cn, en: ex.en };
                });
            }
        }
        if (examples.length === 0) {
            if (wordData && wordData.examples && wordData.examples.length) {
                examples = wordData.examples;
            } else if (card.back.examples && card.back.examples.length) {
                examples = card.back.examples;
            }
        }
        if (examples && examples.length) {
            detailsHtml += `<div class="detail-section">
                <div class="detail-label">Example Sentences</div>
                <div class="detail-examples">${examples.slice(0, 3).map(ex => {
                    if (typeof ex === 'object' && ex.cn) {
                        return `<div class="example-row"><span class="example-cn" lang="zh">${Utils.escapeHtml(ex.cn)}</span><span class="example-en">${Utils.escapeHtml(ex.en)}</span></div>`;
                    }
                    return `<div class="example-row"><span class="example-cn">${Utils.escapeHtml(typeof ex === 'string' ? ex : '')}</span></div>`;
                }).join('')}</div>
            </div>`;
        }
        
        // Related words
        if (wordData && wordData.related && wordData.related.length) {
            detailsHtml += `<div class="detail-section">
                <div class="detail-label">Related Words</div>
                <div class="detail-related">${wordData.related.map(w => `<span class="related-chip" lang="zh">${Utils.escapeHtml(w)}</span>`).join('')}</div>
            </div>`;
        }
        
        detailsContainer.innerHTML = detailsHtml;
        
        if (detailsHtml && typeof InkAnimations !== 'undefined' && InkAnimations.slideInPanel) {
            InkAnimations.slideInPanel(detailsContainer, 'up');
        }
    },
    
    // Find word data from HSK sources and vocabulary data
    findWordData(card) {
        const character = card.front.character;
        const level = this.sessionLevel || this.currentLevel || 1;
        
        // Search in HSK word lists
        const words = this.getWordsForLevel(level);
        let match = words.find(w => w.character === character);
        
        // Search in extended vocabulary data
        if (!match) {
            if (typeof DataLoader !== 'undefined' && typeof DataLoader.getWords === 'function') {
                var vocabWords = DataLoader.getWords('vocabulary');
                if (vocabWords.length) {
                    match = vocabWords.find(function(w) { return w.character === character; });
                }
            }
            if (!match && typeof VocabularyData !== 'undefined') {
                match = VocabularyData.words.find(w => w.character === character);
            }
        }
        
        // Search in HSK1_2 data
        if (!match && typeof HSK1_2 !== 'undefined') {
            match = HSK1_2.words.find(w => w.character === character);
        }
        
        return match;
    },
    
    // Rate card
    rateCard(quality) {
        if (this._isProcessing) return;
        this._isProcessing = true;

        const card = this.currentCard;
        const deckName = this.sessionDeckName || ('hsk' + (this.currentLevel || 1));
        
        // Save snapshot for undo
        this._lastCardSnapshot = JSON.parse(JSON.stringify(card));
        this._lastCardTime = Date.now();
        
        // Animate the clicked rating button
        const clickedBtn = document.querySelector(`[data-rate="${quality}"]`);
        if (clickedBtn && typeof InkAnimations !== 'undefined' && InkAnimations.counterBounce) {
            InkAnimations.counterBounce(clickedBtn);
        }
        
        // Update card with SM-2
        const updatedCard = SM2.processReview(card, quality);
        SM2.updateCard(deckName, updatedCard);
        
        // Update session stats
        this.sessionStats.total++;
        if (quality >= 3) {
            this.sessionStats.correct++;
        } else {
            this.sessionStats.incorrect++;
        }
        
        // Track low-quality words for review suggestions
        if (!this.lowQualityWords) this.lowQualityWords = [];
        if (quality <= 2) {
            this.lowQualityWords.push({ character: card.front.character, pinyin: card.front.pinyin, meaning: card.back.meaning, quality: quality });
        }
        
        // Wire XP into ProgressTracker
        if (typeof ProgressTracker !== 'undefined') {
            var xpStatus = quality >= 3 ? 'reviewing' : 'learned';
            if (updatedCard.interval >= 21) xpStatus = 'mastered';
            ProgressTracker.trackVocabulary(card.id, xpStatus);
        }
        
        // Show feedback
        this.showFeedback(quality >= 3);
        
        // Move to next card after delay
        setTimeout(() => {
            this._isProcessing = false;
            this.sessionIndex++;
            this.showCurrentCard();
        }, 800);
    },
    
    // Show feedback
    showFeedback(isCorrect) {
        const flashcard = document.getElementById('flashcard');
        if (!flashcard) return;

        const feedback = document.createElement('div');
        feedback.className = 'feedback-overlay ' + (isCorrect ? 'correct' : 'incorrect');
        feedback.textContent = isCorrect ? '\u2713 Correct!' : '\u2717 Try again later';

        flashcard.appendChild(feedback);
        
        if (typeof InkAnimations !== 'undefined' && InkAnimations.slideInPanel) {
            InkAnimations.slideInPanel(feedback, 'up');
        }
        
        setTimeout(() => {
            feedback.remove();
        }, 700);
    },
    
    // Show session complete
    showSessionComplete() {
        // Remove keydown listener when session ends
        if (this._keydownHandler) {
            document.removeEventListener('keydown', this._keydownHandler);
            this._keydownHandler = null;
        }

        const container = document.getElementById('vocabulary-learner');
        const total = this.sessionStats.total;
        const correct = this.sessionStats.correct;
        const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
        const lowQualityWords = this.lowQualityWords || [];
        
        container.innerHTML = `
            <div class="session-complete">
                <h2>🎉 Session Complete!</h2>

                <div class="session-results">
                    <div class="result-circle">
                        <span class="result-number" id="result-percentage">${Utils.escapeHtml(percentage)}%</span>
                    </div>
                    <div class="result-details">
                        <p><strong>Total cards:</strong> ${Utils.escapeHtml(total)}</p>
                        <p><strong>Correct:</strong> ${Utils.escapeHtml(correct)}</p>
                        <p><strong>Incorrect:</strong> ${Utils.escapeHtml(total - correct)}</p>
                    </div>
                </div>

                <div class="session-progress-bar" id="session-progress-bar">
                    <div class="session-progress-fill" id="session-progress-fill" style="width: 0%;"></div>
                </div>

                <div class="session-message">
                    ${percentage >= 80 ? '🌟 Great job! Keep up the good work!' :
                      percentage >= 60 ? '👍 Good effort! Review more to improve.' :
                      '💪 Keep practicing! You\'ll get better.'}
                </div>

                ${lowQualityWords.length > 0 ? `
                <div class="review-suggestions">
                    <h3>📋 Words to Review</h3>
                    <p class="review-suggestion-hint">These need more practice:</p>
                    <div class="review-word-list">
                        ${lowQualityWords.map(w => `
                            <div class="review-word-card">
                                <span class="review-word-char" lang="zh">${Utils.escapeHtml(w.character)}</span>
                                <span class="review-word-py">${Utils.escapeHtml(w.pinyin)}</span>
                                <span class="review-word-en">${Utils.escapeHtml(w.meaning)}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}

                <div class="session-actions">
                    <button type="button" class="btn btn-primary" data-cm-action="review-again">
                        Review Again
                    </button>
                    <button type="button" class="btn btn-secondary" data-cm-action="back-levels-2">
                        Back to Levels
                    </button>
                </div>
            </div>
        `;

        // GSAP animations
        const percentageEl = document.getElementById('result-percentage');
        if (percentageEl && typeof InkAnimations !== 'undefined' && InkAnimations.scorePopup) {
            InkAnimations.scorePopup(percentageEl, percentage);
        }
        
        const progressFill = document.getElementById('session-progress-fill');
        if (progressFill && typeof InkAnimations !== 'undefined' && InkAnimations.progressBarFill) {
            InkAnimations.progressBarFill(progressFill, 0, percentage);
        }

        const reviewAgainBtn = container.querySelector('[data-cm-action="review-again"]');
        const backBtn = container.querySelector('[data-cm-action="back-levels-2"]');
        if (reviewAgainBtn) reviewAgainBtn.addEventListener('click', () => VocabularyLearner.startReviewSession());
        if (backBtn) backBtn.addEventListener('click', () => VocabularyLearner.showLevelSelector());
    },
    
    // Show word browser
    showWordBrowser() {
        const level = this.currentLevel || 1;
        const words = this.getWordsForLevel(level);

        const container = document.getElementById('vocabulary-learner');
        container.innerHTML = `
            <div class="browser-header">
                <button class="back-btn" data-cm-action="back-levels-3">← Back</button>
                <h2>HSK ${Utils.escapeHtml(level)} Vocabulary</h2>
                <p>${Utils.escapeHtml(words.length)} words · tap any card to hear it</p>
            </div>

            <div class="browser-search">
                <input type="text" id="word-search" placeholder="Search characters, pinyin, or meaning..." maxlength="60">
            </div>

            <div class="browser-grid" id="word-grid">
                ${words.map(word => `
                    <div class="word-card" data-id="${Utils.escapeAttr(word.id)}" data-character="${Utils.escapeAttr(word.character)}" role="button" tabindex="0">
                        ${word.hsk ? `<span class="word-card-hsk">HSK ${Utils.escapeHtml(word.hsk)}</span>` : ''}
                        <div class="word-card-character" lang="zh">${Utils.escapeHtml(word.character)}</div>
                        <div class="word-card-pinyin pinyin-element">${Utils.escapeHtml(word.pinyin)}</div>
                        <div class="word-card-meaning translation-element">${Utils.escapeHtml(word.meaning)}</div>
                        <div class="word-card-category">${Utils.escapeHtml(word.category || '')}</div>
                        ${word.frequency ? `<div class="word-card-freq">Top ${Utils.escapeHtml(word.frequency)}</div>` : ''}
                    </div>
                `).join('')}
            </div>
        `;

        // Wire up search
        const searchEl = document.getElementById('word-search');
        if (searchEl) {
            searchEl.addEventListener('input', (e) => this.filterWords(e.target.value));
        }

        // Tap any card to hear it (CSP-safe addEventListener + keyboard)
        document.querySelectorAll('.word-card').forEach(card => {
            card.addEventListener('click', () => {
                const char = card.dataset.character;
                if (char && typeof AudioManager !== 'undefined') {
                    AudioManager.speak(char);
                }
            });
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const char = card.dataset.character;
                    if (char && typeof AudioManager !== 'undefined') AudioManager.speak(char);
                }
            });
        });

        // Entrance stagger animation
        const browserGrid = document.getElementById('word-grid');
        if (browserGrid && typeof InkAnimations !== 'undefined' && InkAnimations.entranceStagger) {
            InkAnimations.entranceStagger(browserGrid);
        }

        const backBtn = container.querySelector('[data-cm-action="back-levels-3"]');
        if (backBtn) backBtn.addEventListener('click', () => VocabularyLearner.showLevelSelector());
    },
    
    // Filter words
    filterWords(query) {
        const grid = document.getElementById('word-grid');
        if (!grid) return;
        
        const cards = grid.querySelectorAll('.word-card');
        const lowerQuery = query.toLowerCase();
        
        cards.forEach(card => {
            const character = card.querySelector('.word-card-character')?.textContent || '';
            const pinyin = card.querySelector('.word-card-pinyin')?.textContent || '';
            const meaning = card.querySelector('.word-card-meaning')?.textContent || '';
            
            const matches = character.includes(query) || 
                           pinyin.toLowerCase().includes(lowerQuery) || 
                           meaning.toLowerCase().includes(lowerQuery);
            
            card.style.display = matches ? 'block' : 'none';
        });
    },

    // Topic vocabulary chips HTML
    getTopicChipsHTML() {
        var topics = [
            { id: 'daily', name: 'Daily Life', icon: '\ud83c\udfe0', global: 'TopicDaily' },
            { id: 'food', name: 'Food & Drink', icon: '\ud83c\udf5c', global: 'TopicFood' },
            { id: 'travel', name: 'Travel', icon: '\u2708\ufe0f', global: 'TopicTravel' },
            { id: 'business', name: 'Business', icon: '\ud83d\udcbc', global: 'TopicBusiness' },
            { id: 'health', name: 'Health', icon: '\ud83c\udfe5', global: 'TopicHealth' },
            { id: 'technology', name: 'Technology', icon: '\ud83d\udcf1', global: 'TopicTechnology' },
            { id: 'nature', name: 'Nature', icon: '\ud83c\udf3f', global: 'TopicNature' },
            { id: 'emotions', name: 'Emotions', icon: '\ud83d\ude0a', global: 'TopicEmotions' },
            { id: 'entertainment', name: 'Entertainment', icon: '\ud83c\udfac', global: 'TopicEntertainment' },
            { id: 'education', name: 'Education', icon: '\ud83c\udf93', global: 'TopicEducation' },
            { id: 'sports', name: 'Sports', icon: '\u26bd', global: 'TopicSports' }
        ];

        return topics.map(function(t) {
            var count = 0;
            if (typeof window[t.global] !== 'undefined' && window[t.global].words) {
                count = window[t.global].words.length;
            }
            return '<button class="btn btn-secondary topic-chip-btn" data-topic="' + t.id + '" style="font-size:0.85em;">' +
                t.icon + ' ' + t.name + ' (' + count + ')</button>';
        }).join('');
    },

    // Show topic vocabulary drill (routed through SM2 SRS)
    showTopicDrills(topicId) {
        var container = document.getElementById('vocabulary-learner');
        if (!container) return;

        var topicMap = {
            'daily': { name: 'Daily Life', global: 'TopicDaily' },
            'food': { name: 'Food & Drink', global: 'TopicFood' },
            'travel': { name: 'Travel', global: 'TopicTravel' },
            'business': { name: 'Business', global: 'TopicBusiness' },
            'health': { name: 'Health', global: 'TopicHealth' },
            'technology': { name: 'Technology', global: 'TopicTechnology' },
            'nature': { name: 'Nature', global: 'TopicNature' },
            'emotions': { name: 'Emotions', global: 'TopicEmotions' },
            'entertainment': { name: 'Entertainment', global: 'TopicEntertainment' },
            'education': { name: 'Education', global: 'TopicEducation' },
            'sports': { name: 'Sports', global: 'TopicSports' }
        };

        var info = topicMap[topicId];
        if (!info) return;
        this._currentTopic = topicId;

        var words = [];
        if (typeof window[info.global] !== 'undefined' && window[info.global].words) {
            words = window[info.global].words;
        }

        if (!words.length) {
            container.innerHTML = '<div class="vocab-header"><h2>' + Utils.escapeHtml(info.name) + '</h2><p>No words available for this topic.</p>' +
                '<button class="btn" id="back-topic-btn">\u2190 Back</button></div>';
            document.getElementById('back-topic-btn').addEventListener('click', function() { VocabularyLearner.showLevelSelector(); });
            return;
        }

        // Initialize SM2 deck for topic
        var deckName = 'topic-' + topicId;
        this.sessionDeckName = deckName;
        this.sessionLevel = 1;
        var cards = SM2.loadCards(deckName);

        if (cards.length === 0) {
            cards = words.map(function(word) {
                return SM2.createCard(
                    word.id,
                    { character: word.character, pinyin: word.pinyin },
                    { meaning: word.meaning, examples: word.examples || [] }
                );
            });
            SM2.saveCards(deckName, cards);
        }

        var session = SM2.generateSession(cards, { maxNew: 10, maxReview: 20 });
        this.sessionCards = session.cards;
        this.sessionIndex = 0;
        this.sessionStats = { correct: 0, incorrect: 0, total: 0 };
        this.lowQualityWords = [];

        if (this.sessionCards.length === 0) {
            this.sessionCards = cards.slice(0, 10);
            this.sessionIndex = 0;
            this.sessionStats = { correct: 0, incorrect: 0, total: 0 };
            this.lowQualityWords = [];
        }

        this.showCurrentCard();
    },

};

// CSS for Vocabulary Learner is loaded as css/components-learner.css
// (injected from JS previously, moved to a real stylesheet so the strict
//  Content-Security-Policy can use style-src 'self')

window.VocabularyLearner = VocabularyLearner;

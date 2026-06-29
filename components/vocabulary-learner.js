// ============================================
// CHINESE MASTER - Vocabulary Learner
// Proper flashcard system with SM-2
// ============================================

const VocabularyLearner = {
    // Current state
    currentDeck: null,
    currentCard: null,
    isFlipped: false,
    sessionCards: [],
    sessionIndex: 0,
    sessionStats: { correct: 0, incorrect: 0, total: 0 },
    
    // HSK level selection
    hskLevels: {
        1: { name: 'HSK 1', description: 'Beginner - 150 words', data: 'HSK1' },
        2: { name: 'HSK 2', description: 'Elementary - 150 words', data: 'HSK2' },
        3: { name: 'HSK 3', description: 'Intermediate - 200 words', data: 'HSK3' },
        4: { name: 'HSK 4', description: 'Upper Intermediate - 200 words', data: 'HSK4_5' },
        5: { name: 'HSK 5', description: 'Advanced - 200 words', data: 'HSK4_5' }
    },
    
    // Initialize
    init() {
        this.showLevelSelector();
    },
    
    // Show level selector
    showLevelSelector() {
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

            <div class="vocab-actions">
                <button id="start-review-btn" class="btn btn-primary">▶ Start Review Session</button>
                <button id="browse-words-btn" class="btn btn-secondary">📖 Browse All Words</button>
            </div>
        `;

        // Add event listeners
        document.querySelectorAll('.level-card').forEach(card => {
            card.onclick = () => {
                const level = parseInt(card.dataset.level);
                this.selectLevel(level);
            };
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
            });
        });

        const startBtn = document.getElementById('start-review-btn');
        if (startBtn) startBtn.onclick = () => this.startReviewSession();

        const browseBtn = document.getElementById('browse-words-btn');
        if (browseBtn) browseBtn.onclick = () => this.showWordBrowser();
    },
    
    // Get word count for HSK level
    getWordCount(level) {
        const dataMap = {
            1: typeof HSK1 !== 'undefined' ? HSK1.count : 0,
            2: typeof HSK2 !== 'undefined' ? HSK2.count : 0,
            3: typeof HSK3 !== 'undefined' ? HSK3.count : 0,
            4: typeof HSK4_5 !== 'undefined' ? HSK4_5.count : 0,
            5: typeof HSK4_5 !== 'undefined' ? HSK4_5.count : 0
        };
        return dataMap[level] || 0;
    },
    
    // Select HSK level
    selectLevel(level) {
        this.currentLevel = level;
        
        // Highlight selected level
        document.querySelectorAll('.level-card').forEach(card => {
            card.classList.toggle('selected', parseInt(card.dataset.level) === level);
        });
    },
    
    // Get words for current level
    getWordsForLevel(level) {
        switch(level) {
            case 1: return typeof HSK1 !== 'undefined' ? HSK1.words : [];
            case 2: return typeof HSK2 !== 'undefined' ? HSK2.words : [];
            case 3: return typeof HSK3 !== 'undefined' ? HSK3.words : [];
            case 4: 
            case 5: return typeof HSK4_5 !== 'undefined' ? HSK4_5.words : [];
            default: return [];
        }
    },
    
    // Start review session
    startReviewSession() {
        const level = this.currentLevel || 1;
        const words = this.getWordsForLevel(level);
        
        if (words.length === 0) {
            Utils.showToast('No words available for this level', 'error');
            return;
        }
        
        // Get cards from SM2 or create new ones
        const deckName = `hsk${level}`;
        let cards = SM2.loadCards(deckName);
        
        // If no cards exist, create from vocabulary
        if (cards.length === 0) {
            cards = words.map(word => SM2.createCard(
                word.id,
                { character: word.character, pinyin: word.pinyin },
                { meaning: word.meaning, examples: word.examples || [] }
            ));
            SM2.saveCards(deckName, cards);
        }
        
        // Generate session
        const session = SM2.generateSession(cards, { maxNew: 10, maxReview: 20 });
        this.sessionCards = session.cards;
        this.sessionIndex = 0;
        this.sessionStats = { correct: 0, incorrect: 0, total: 0 };
        
        if (this.sessionCards.length === 0) {
            Utils.showToast('No cards due for review!', 'info');
            return;
        }
        
        this.showCurrentCard();
    },
    
    // Show current card
    showCurrentCard() {
        if (this.sessionIndex >= this.sessionCards.length) {
            this.showSessionComplete();
            return;
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
        container.innerHTML = `
            <div class="review-header">
                <button class="back-btn" data-cm-action="back-levels">← Back</button>
                <div class="review-progress">
                    <span id="review-current">${Utils.escapeHtml(idx)}</span> / <span id="review-total">${Utils.escapeHtml(total)}</span>
                </div>
                <div class="review-stats">
                    <span class="stat-correct">✓ ${Utils.escapeHtml(this.sessionStats.correct)}</span>
                    <span class="stat-incorrect">✗ ${Utils.escapeHtml(this.sessionStats.incorrect)}</span>
                </div>
            </div>

            <div class="flashcard-container">
                <div id="flashcard" class="flashcard" role="button" tabindex="0" aria-label="Flashcard - click or press space to flip">
                    <div class="flashcard-front">
                        <div class="flashcard-character" lang="zh">${safeChar}</div>
                        <div class="flashcard-pinyin pinyin-element">${safePy}</div>
                        <div class="flashcard-hint">Click to reveal answer</div>
                    </div>
                    <div class="flashcard-back">
                        <div class="flashcard-meaning">${safeMeaning}</div>
                        ${card.back.examples && card.back.examples[0] ? `
                            <div class="flashcard-example">
                                <div class="example-text" lang="zh">${safeExample}</div>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>

            <div class="rating-buttons" id="rating-buttons" style="display: none;">
                <p class="rating-label">How well did you know this?</p>
                <div class="rating-grid">
                    <button class="rating-btn rating-1" data-rate="1" title="Complete blackout">
                        <span class="rating-number">1</span>
                        <span class="rating-text">Forgot</span>
                    </button>
                    <button class="rating-btn rating-2" data-rate="2" title="Wrong, but remembered after seeing answer">
                        <span class="rating-number">2</span>
                        <span class="rating-text">Hard</span>
                    </button>
                    <button class="rating-btn rating-3" data-rate="3" title="Correct with difficulty">
                        <span class="rating-number">3</span>
                        <span class="rating-text">Okay</span>
                    </button>
                    <button class="rating-btn rating-4" data-rate="4" title="Correct after hesitation">
                        <span class="rating-number">4</span>
                        <span class="rating-text">Good</span>
                    </button>
                    <button class="rating-btn rating-5" data-rate="5" title="Perfect response">
                        <span class="rating-number">5</span>
                        <span class="rating-text">Easy</span>
                    </button>
                </div>
            </div>

            <div class="session-info">
                <p>Deck: HSK ${Utils.escapeHtml(lvl)} | Cards due: ${Utils.escapeHtml(remaining)}</p>
            </div>
        `;

        // Wire up handlers via addEventListener (CSP-safe, no inline onclick)
        const flashcard = document.getElementById('flashcard');
        if (flashcard) {
            flashcard.addEventListener('click', () => VocabularyLearner.flipCard());
            flashcard.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); VocabularyLearner.flipCard(); }
            });
        }
        container.querySelectorAll('[data-rate]').forEach(btn => {
            const q = parseInt(btn.dataset.rate);
            btn.addEventListener('click', () => VocabularyLearner.rateCard(q));
        });
        const backBtn = container.querySelector('[data-cm-action="back-levels"]');
        if (backBtn) backBtn.addEventListener('click', () => VocabularyLearner.showLevelSelector());
    },
    
    // Flip card
    flipCard() {
        const flashcard = document.getElementById('flashcard');
        if (!flashcard) return;
        
        this.isFlipped = !this.isFlipped;
        flashcard.classList.toggle('flipped', this.isFlipped);
        
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
    },
    
    // Rate card
    rateCard(quality) {
        const card = this.currentCard;
        const deckName = `hsk${this.currentLevel || 1}`;
        
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
        
        // Show feedback
        this.showFeedback(quality >= 3);
        
        // Move to next card after delay
        setTimeout(() => {
            this.sessionIndex++;
            this.showCurrentCard();
        }, 800);
    },
    
    // Show feedback
    showFeedback(isCorrect) {
        const flashcard = document.getElementById('flashcard');
        if (!flashcard) return;
        
        const feedback = document.createElement('div');
        feedback.className = `feedback-overlay ${isCorrect ? 'correct' : 'incorrect'}`;
        feedback.textContent = isCorrect ? '✓ Correct!' : '✗ Try again later';
        
        flashcard.appendChild(feedback);
        
        setTimeout(() => {
            feedback.remove();
        }, 700);
    },
    
    // Show session complete
    showSessionComplete() {
        const container = document.getElementById('vocabulary-learner');
        const total = this.sessionStats.total;
        const correct = this.sessionStats.correct;
        const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
        
        container.innerHTML = `
            <div class="session-complete">
                <h2>🎉 Session Complete!</h2>

                <div class="session-results">
                    <div class="result-circle">
                        <span class="result-number">${Utils.escapeHtml(percentage)}%</span>
                    </div>
                    <div class="result-details">
                        <p><strong>Total cards:</strong> ${Utils.escapeHtml(total)}</p>
                        <p><strong>Correct:</strong> ${Utils.escapeHtml(correct)}</p>
                        <p><strong>Incorrect:</strong> ${Utils.escapeHtml(total - correct)}</p>
                    </div>
                </div>

                <div class="session-message">
                    ${percentage >= 80 ? '🌟 Great job! Keep up the good work!' :
                      percentage >= 60 ? '👍 Good effort! Review more to improve.' :
                      '💪 Keep practicing! You\'ll get better.'}
                </div>

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
                        <div class="word-card-character" lang="zh">${Utils.escapeHtml(word.character)}</div>
                        <div class="word-card-pinyin pinyin-element">${Utils.escapeHtml(word.pinyin)}</div>
                        <div class="word-card-meaning translation-element">${Utils.escapeHtml(word.meaning)}</div>
                        <div class="word-card-category">${Utils.escapeHtml(word.category || '')}</div>
                    </div>
                `).join('')}
            </div>
        `;

        // Wire up search (avoid inline oninput stacking)
        const searchEl = document.getElementById('word-search');
        if (searchEl) {
            searchEl.oninput = (e) => this.filterWords(e.target.value);
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
    }
};

// CSS for Vocabulary Learner is loaded as css/components-learner.css
// (injected from JS previously, moved to a real stylesheet so the strict
//  Content-Security-Policy can use style-src 'self')

window.VocabularyLearner = VocabularyLearner;

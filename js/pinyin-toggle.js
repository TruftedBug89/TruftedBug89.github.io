// ============================================
// CHINESE MASTER - Global Pinyin Toggle System
// Shows/hides pinyin across ALL activities
// ============================================

const PinyinToggle = {
    // Current state
    showPinyin: true,
    showTranslation: true,
    
    // Initialize
    init() {
        // Load saved preference
        this.showPinyin = Utils.storage.get('showPinyin', true);
        this.showTranslation = Utils.storage.get('showTranslation', true);

        // Apply initial state
        this.applyState();

        // Create toggle buttons in nav
        this.createToggles();
    },
    
    // Create toggle buttons
    createToggles() {
        const navHeader = document.querySelector('.nav-header');
        if (!navHeader) return;
        
        const toggleContainer = document.createElement('div');
        toggleContainer.className = 'nav-toggle-controls';
        toggleContainer.innerHTML = `
            <button id="pinyin-toggle-btn" class="toggle-btn ${this.showPinyin ? 'active' : ''}" title="Toggle Pinyin" aria-pressed="${this.showPinyin}">
                <span class="toggle-icon">拼</span>
                <span class="toggle-label">Pinyin</span>
            </button>
            <button id="translation-toggle-btn" class="toggle-btn ${this.showTranslation ? 'active' : ''}" title="Toggle Translation" aria-pressed="${this.showTranslation}">
                <span class="toggle-icon">A</span>
                <span class="toggle-label">EN</span>
            </button>
        `;
        
        navHeader.appendChild(toggleContainer);
        
        // Add event listeners
        document.getElementById('pinyin-toggle-btn').addEventListener('click', () => {
            this.togglePinyin();
        });
        
        document.getElementById('translation-toggle-btn').addEventListener('click', () => {
            this.toggleTranslation();
        });
    },
    
    // Toggle pinyin
    togglePinyin() {
        this.showPinyin = !this.showPinyin;
        Utils.storage.set('showPinyin', this.showPinyin);
        this.applyState();
        this.updateButton('pinyin-toggle-btn', this.showPinyin);
        Utils.showToast(this.showPinyin ? 'Pinyin ON' : 'Pinyin OFF', 'info');
    },
    
    // Toggle translation
    toggleTranslation() {
        this.showTranslation = !this.showTranslation;
        Utils.storage.set('showTranslation', this.showTranslation);
        this.applyState();
        this.updateButton('translation-toggle-btn', this.showTranslation);
        Utils.showToast(this.showTranslation ? 'Translation ON' : 'Translation OFF', 'info');
    },
    
    // Apply state to all pinyin elements
    applyState() {
        document.body.classList.toggle('hide-pinyin', !this.showPinyin);
        document.body.classList.toggle('hide-translation', !this.showTranslation);
    },
    
    // Update button state
    updateButton(btnId, isActive) {
        const btn = document.getElementById(btnId);
        if (btn) {
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-pressed', isActive);
        }
    },
    
    // Create a word display with pinyin toggle support
    createWordDisplay(character, pinyin, meaning, options = {}) {
        const { 
            showCharacter = true,
            showPinyin = true,
            showMeaning = true,
            size = 'medium',
            clickable = false,
            onClick = null
        } = options;
        
        const div = document.createElement('div');
        div.className = `word-display word-display-${size}`;
        
        if (clickable) {
            div.classList.add('clickable');
            if (onClick) {
                div.addEventListener('click', () => onClick(character, pinyin, meaning));
            }
        }
        
        let html = '';

        if (showCharacter) {
            html += `<div class="word-character" lang="zh">${Utils.escapeHtml(character)}</div>`;
        }

        if (showPinyin) {
            html += `<div class="word-pinyin pinyin-element">${Utils.escapeHtml(pinyin)}</div>`;
        }

        if (showMeaning) {
            html += `<div class="word-meaning translation-element">${Utils.escapeHtml(meaning)}</div>`;
        }

        div.innerHTML = html;
        return div;
    },
    
    // Create a sentence display with pinyin toggle support
    createSentenceDisplay(chinese, pinyin, english, options = {}) {
        const { size = 'medium' } = options;

        const div = document.createElement('div');
        div.className = `sentence-display sentence-display-${size}`;

        div.innerHTML = `
            <div class="sentence-chinese" lang="zh">${Utils.escapeHtml(chinese)}</div>
            <div class="sentence-pinyin pinyin-element">${Utils.escapeHtml(pinyin)}</div>
            <div class="sentence-english translation-element">${Utils.escapeHtml(english)}</div>
        `;

        return div;
    },

    // Create a flashcard with pinyin toggle support
    createFlashcard(front, back, options = {}) {
        const { flipped = false, onFlip = null } = options;

        const card = document.createElement('div');
        card.className = `flashcard ${flipped ? 'flipped' : ''}`;

        const fChar = Utils.escapeHtml(front?.character);
        const fPy = Utils.escapeHtml(front?.pinyin);
        const bMean = Utils.escapeHtml(back?.meaning);
        const bExChar = Utils.escapeHtml(back?.example?.chinese);
        const bExPy = Utils.escapeHtml(back?.example?.pinyin);
        const bExEn = Utils.escapeHtml(back?.example?.english);
        card.innerHTML = `
            <div class="flashcard-front">
                <div class="flashcard-character" lang="zh">${fChar}</div>
                <div class="flashcard-pinyin pinyin-element">${fPy}</div>
            </div>
            <div class="flashcard-back">
                <div class="flashcard-meaning">${bMean}</div>
                <div class="flashcard-example">
                    <div class="example-chinese" lang="zh">${bExChar}</div>
                    <div class="example-pinyin pinyin-element">${bExPy}</div>
                    <div class="example-english translation-element">${bExEn}</div>
                </div>
            </div>
        `;

        if (onFlip) {
            card.addEventListener('click', () => {
                card.classList.toggle('flipped');
                onFlip(card.classList.contains('flipped'));
            });
        }

        return card;
    },

    // Create a reading passage with pinyin toggle
    createPassageDisplay(sentences) {
        const container = document.createElement('div');
        container.className = 'passage-display';

        sentences.forEach(sentence => {
            const sentenceDiv = document.createElement('div');
            sentenceDiv.className = 'passage-sentence';

            sentenceDiv.innerHTML = `
                <div class="passage-chinese" lang="zh">${Utils.escapeHtml(sentence.chinese)}</div>
                <div class="passage-pinyin pinyin-element">${Utils.escapeHtml(sentence.pinyin)}</div>
                <div class="passage-english translation-element">${Utils.escapeHtml(sentence.english)}</div>
            `;

            container.appendChild(sentenceDiv);
        });

        return container;
    }
};

// CSS for pinyin toggle is now in css/pinyin-toggle.css (loaded from index.html)
// so that the strict Content-Security-Policy can use style-src 'self' without 'unsafe-inline'.

window.PinyinToggle = PinyinToggle;

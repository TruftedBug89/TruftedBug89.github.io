// ============================================
// CHINESE MASTER - Reading Module Component
// ============================================

const ReadingModule = {
    // Current state
    currentType: null,
    currentExercise: null,
    exercises: [],
    currentIndex: 0,
    score: 0,
    _speedInterval: null,

    // Show menu
    showMenu() {
        // Clear any running speed reading timer
        if (this._speedInterval) {
            clearInterval(this._speedInterval);
            this._speedInterval = null;
        }

        const menu = document.getElementById('reading-menu');
        const ex = document.getElementById('reading-exercise');
        if (menu) menu.classList.remove('hidden');
        if (ex) ex.classList.add('hidden');

        // Setup exercise type cards
        this.setupTypeCards();

        const menuEl = document.getElementById('reading-menu');
        if (typeof InkAnimations !== 'undefined' && InkAnimations.exerciseCardReveal && menuEl) {
            InkAnimations.exerciseCardReveal(menuEl);
        }
    },

    // Setup type cards
    setupTypeCards() {
        document.querySelectorAll('#module-reading .exercise-type-card').forEach(card => {
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            if (!card.dataset.clickBound) {
                card.dataset.clickBound = '1';
                card.addEventListener('click', () => {
                    const type = card.dataset.type;
                    this.startExercise(type);
                });
            }
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
            });
        });
    },

    // Start exercise
    startExercise(type) {
        this.currentType = type;

        // Cultural Notes — browse mode
        if (type === 'cultural-notes') {
            this.showCulturalNotes();
            return;
        }

        // Useful Phrases — browse mode
        if (type === 'useful-phrases') {
            this.showUsefulPhrases();
            return;
        }

        // HSK Level Reading
        if (type === 'hsk-reading') {
            this.showHSKReadingSelector();
            return;
        }

        // Check AdvancedReading first for advanced types
        var advancedTypes = ['sentence-reconstruction', 'contextual-reading', 'reading-inference', 'contextual-fill-blank', 'long-passages', 'word-order', 'speed-challenge'];
        var isAdvanced = advancedTypes.indexOf(type) !== -1;

        var exercises;
        if (isAdvanced && typeof AdvancedReading !== 'undefined' && AdvancedReading.getAll) {
            var allAdvanced = AdvancedReading.getAll();
            var typeMap = {
                'sentence-reconstruction': 'sentenceReconstruction',
                'contextual-reading': 'contextualReading',
                'reading-inference': 'readingInference',
                'contextual-fill-blank': 'contextualFillBlank',
                'long-passages': 'longPassages',
                'word-order': 'wordOrder',
                'speed-challenge': 'speedChallenge'
            };
            var key = typeMap[type];
            var arr = AdvancedReading[key] || [];
            exercises = arr.slice(0, 10);
        } else {
            exercises = (typeof ReadingData !== 'undefined' && ReadingData.getRandomByType)
                ? ReadingData.getRandomByType(type, 10)
                : [];
        }

        this.exercises = exercises || [];
        this.currentIndex = 0;
        this.score = 0;

        if (this.exercises.length === 0) {
            Utils.showToast('No exercises available for "' + type + '". Please try another type.', 'error');
            this.showMenu();
            return;
        }

        document.getElementById('reading-menu').classList.add('hidden');
        document.getElementById('reading-exercise').classList.remove('hidden');

        if (typeof InkAnimations !== 'undefined' && InkAnimations.slideInPanel) {
            InkAnimations.slideInPanel(document.getElementById('reading-exercise'));
        }

        // Update title
        var titles = {
            'character-match': 'Character Matching',
            'sentence-complete': 'Sentence Completion',
            'passage-reading': 'Passage Reading',
            'speed-reading': 'Speed Reading',
            'radical-learn': 'Radical Learning',
            'context-clues': 'Context Clues',
            'sentence-reconstruction': 'Sentence Reconstruction',
            'contextual-reading': 'Contextual Reading',
            'reading-inference': 'Reading Inference',
            'contextual-fill-blank': 'Contextual Fill-in-Blank',
            'long-passages': 'Long Passage Reading',
            'word-order': 'Word Order',
            'speed-challenge': 'Speed Challenge',
            'cultural-notes': 'Cultural Notes',
            'useful-phrases': 'Useful Phrases'
        };
        document.getElementById('reading-title').textContent = titles[type] || 'Reading Exercise';

        this.showCurrentExercise();
    },

    // Show current exercise
    showCurrentExercise() {
        const exercise = this.exercises[this.currentIndex];
        if (!exercise) {
            this.finishExercise();
            return;
        }

        this.currentExercise = exercise;

        // Update progress
        document.getElementById('reading-current').textContent = this.currentIndex + 1;
        document.getElementById('reading-total').textContent = this.exercises.length;

        // Show content based on type
        const content = document.getElementById('reading-content');
        content.innerHTML = this.getExerciseHTML(exercise);

        // Setup controls
        this.setupControls(exercise);

        // GSAP entrance animations
        if (typeof InkAnimations !== 'undefined') {
            if (InkAnimations.slideInPanel && content.firstElementChild) {
                InkAnimations.slideInPanel(content.firstElementChild);
            }
            if (this.currentType === 'passage-reading' && InkAnimations.entranceStagger) {
                const passageBody = content.querySelector('.passage-body');
                if (passageBody) {
                    const paragraphs = passageBody.querySelectorAll('p');
                    if (paragraphs.length) {
                        InkAnimations.entranceStagger(passageBody);
                    }
                }
            }
        }
    },

    // Get exercise HTML
    getExerciseHTML(exercise) {
        switch(this.currentType) {
            case 'character-match':
                return this.getCharacterMatchHTML(exercise);
            case 'sentence-complete':
                return this.getSentenceCompleteHTML(exercise);
            case 'passage-reading':
                return this.getPassageReadingHTML(exercise);
            case 'speed-reading':
                return this.getSpeedReadingHTML(exercise);
            case 'radical-learn':
                return this.getRadicalLearnHTML(exercise);
            case 'context-clues':
                return this.getContextCluesHTML(exercise);
            case 'sentence-reconstruction':
                return this.getSentenceReconstructionHTML(exercise);
            case 'contextual-reading':
            case 'reading-inference':
            case 'long-passages':
                return this.getPassageReadingHTML(exercise);
            case 'contextual-fill-blank':
                return this.getContextualFillBlankHTML(exercise);
            case 'word-order':
                return this.getWordOrderHTML(exercise);
            case 'speed-challenge':
                return this.getSpeedReadingHTML(exercise);
            default:
                return '';
        }
    },

    // Character match HTML
    getCharacterMatchHTML(exercise) {
        const shuffledPairs = Utils.shuffle(exercise.pairs);
        const characters = shuffledPairs.map(p => p.character);
        const meanings = Utils.shuffle(shuffledPairs.map(p => p.meaning));
        const dots = this._progressDots();
        return `
            <div class="character-match-stage activity-card">
                <div class="activity-prompt">
                    <span class="activity-eyebrow">🔤 Character Matching</span>
                    <h2 class="activity-title">Match the characters</h2>
                    <p class="activity-subtitle">Tap a character on the left, then tap its meaning on the right.</p>
                    ${dots}
                </div>

                <div class="match-progress">
                    <span class="match-count"><span id="match-count">0</span>/${Utils.escapeHtml(exercise.pairs.length)}</span>
                    <div class="match-progress-bar">
                        <div class="match-progress-fill" id="match-fill" style="width:0%"></div>
                    </div>
                </div>

                <div class="match-grid">
                    <div class="match-column">
                        <h4>Characters 字</h4>
                        ${characters.map((char, i) => `
                            <div class="match-item character-item" data-index="${i}" data-character="${Utils.escapeAttr(char)}" role="button" tabindex="0">
                                <span class="cn-text" lang="zh">${Utils.escapeHtml(char)}</span>
                            </div>
                        `).join('')}
                    </div>
                    <div class="match-column">
                        <h4>Meanings 义</h4>
                        ${meanings.map((meaning, i) => `
                            <div class="match-item meaning-item" data-index="${i}" data-meaning="${Utils.escapeAttr(meaning)}" role="button" tabindex="0">
                                ${Utils.escapeHtml(meaning)}
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="match-feedback" id="match-feedback"></div>
            </div>
        `;
    },

    // Sentence complete HTML
    getSentenceCompleteHTML(exercise) {
        const dots = this._progressDots();
        // Highlight the blank in the sentence if present (best-effort)
        let sentenceHtml = Utils.escapeHtml(exercise.sentence || '');
        if (exercise.answer && (exercise.sentence || '').includes(exercise.answer)) {
            sentenceHtml = Utils.escapeHtml(exercise.sentence).replace(
                Utils.escapeHtml(exercise.answer),
                `<span class="blank-slot">___</span>`
            );
        }
        const safeMeaning = Utils.escapeHtml(exercise.meaning || '');
        return `
            <div class="sentence-stage activity-card">
                <div class="activity-prompt">
                    <span class="activity-eyebrow">📝 Sentence Completion</span>
                    <h2 class="activity-title">Choose the missing word</h2>
                    <p class="activity-subtitle">Read the sentence and pick the word that fits best.</p>
                    ${dots}
                </div>

                <div class="sentence-display">
                    <p class="sentence-cn" lang="zh">${sentenceHtml}</p>
                    <p class="sentence-meaning">${safeMeaning}</p>
                </div>

                <div class="sentence-options">
                    ${exercise.options.map((opt, i) => `
                        <div class="sentence-option" data-index="${i}" role="button" tabindex="0">
                            <span class="cn-text" lang="zh">${Utils.escapeHtml(opt)}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="sentence-feedback" id="sentence-feedback"></div>
            </div>
        `;
    },

    // Passage reading HTML
    getPassageReadingHTML(exercise) {
        const dots = this._progressDots();
        const safeTitle = Utils.escapeHtml(exercise.title || 'Reading passage');
        const safeTitle2 = Utils.escapeHtml(exercise.title || '');
        const safeTitleMeaning = Utils.escapeHtml(exercise.titleMeaning || '');
        const safePassage = Utils.escapeHtml(exercise.passage);
        const safePinyin = Utils.escapeHtml(exercise.pinyin || '');
        return `
            <div class="passage-stage activity-card">
                <div class="activity-prompt">
                    <span class="activity-eyebrow">📄 Passage Reading</span>
                    <h2 class="activity-title">${safeTitle}</h2>
                    <p class="activity-subtitle">Read the passage, then answer the questions below.</p>
                    ${dots}
                </div>

                <div class="passage-card">
                    <h3 class="passage-title">
                        ${safeTitle2}
                        <small>${safeTitleMeaning}</small>
                    </h3>
                    <p class="passage-body" lang="zh">${safePassage}</p>
                    <div class="passage-pinyin hidden" id="passage-pinyin">
                        <strong style="color: rgba(255,255,255,0.5);">Pinyin</strong>
                        <div style="margin-top:4px;">${safePinyin}</div>
                    </div>
                    <div class="dialogue-actions" style="margin-top:14px;">
                        <button class="icon-btn" id="show-passage-pinyin">👁 Show pinyin</button>
                        <button class="icon-btn" id="play-passage-btn">🔊 Listen</button>
                    </div>
                </div>

                <div class="passage-questions">
                    <h4 style="color: rgba(255,255,255,0.6); font-size:13px; text-transform:uppercase; letter-spacing:0.08em; margin: 0 0 10px;">Questions</h4>
                    ${exercise.questions.map((q, i) => `
                        <div class="passage-question" data-question-index="${i}">
                            <div class="q-header">
                                <span class="q-number">${i + 1}</span>
                                <span class="q-text">${Utils.escapeHtml(q.question)}</span>
                            </div>
                            <div class="passage-options">
                                ${q.options.map((opt, j) => `
                                    <div class="passage-option" data-question="${i}" data-option="${j}" role="button" tabindex="0">
                                        ${Utils.escapeHtml(opt)}
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    // Speed reading HTML
    getSpeedReadingHTML(exercise) {
        const dots = this._progressDots();
        const safePassage = Utils.escapeHtml(exercise.passage);
        const safeTimeLimit = Number(exercise.timeLimit) || 60;
        return `
            <div class="speed-reading-stage activity-card">
                <div class="activity-prompt">
                    <span class="activity-eyebrow">⚡ Speed Reading</span>
                    <h2 class="activity-title">Read against the clock</h2>
                    <p class="activity-subtitle">Read the passage within ${safeTimeLimit} seconds, then answer the questions.</p>
                    ${dots}
                </div>

                <div class="speed-timer">
                    <span class="timer-label">⏱ Time left</span>
                    <span class="timer-value" id="speed-timer">${safeTimeLimit}</span>
                    <span class="timer-label">seconds</span>
                </div>

                <div class="passage-card" id="speed-passage-card">
                    <p class="passage-body" id="speed-passage" lang="zh">${safePassage}</p>
                </div>

                <div class="dialogue-actions" id="speed-start-row">
                    <button class="btn btn-primary" id="start-speed-reading">▶ Start timer</button>
                </div>

                <div class="speed-questions hidden" id="speed-questions">
                    <h4 style="color: rgba(255,255,255,0.6); font-size:13px; text-transform:uppercase; letter-spacing:0.08em; margin: 16px 0 10px;">📝 Now answer these questions</h4>
                    ${exercise.questions.map((q, i) => `
                        <div class="passage-question">
                            <div class="q-header">
                                <span class="q-number">${i + 1}</span>
                                <span class="q-text">${Utils.escapeHtml(q.question)}</span>
                            </div>
                            <div class="passage-options">
                                ${q.options.map((opt, j) => `
                                    <div class="passage-option" data-question="${i}" data-option="${j}" role="button" tabindex="0">
                                        ${Utils.escapeHtml(opt)}
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    // Radical learn HTML
    getRadicalLearnHTML(exercise) {
        const dots = this._progressDots();
        const safeRadical = Utils.escapeHtml(exercise.radical);
        const safeRadicalName = Utils.escapeHtml(exercise.radicalName);
        const safeRadicalMeaning = Utils.escapeHtml(exercise.radicalMeaning);
        return `
            <div class="radical-stage activity-card">
                <div class="activity-prompt">
                    <span class="activity-eyebrow">🧩 Radical Learning</span>
                    <h2 class="activity-title">Learn the building blocks</h2>
                    <p class="activity-subtitle">Tap any character to hear how it's pronounced.</p>
                    ${dots}
                </div>

                <div class="radical-hero">
                    <div class="radical-glyph" lang="zh">${safeRadical}</div>
                    <div class="radical-name">${safeRadicalName}</div>
                    <div class="radical-meaning">${safeRadicalMeaning}</div>
                    <div class="radical-mnemonic" style="margin-top:12px; font-size:13px; color:rgba(255,255,255,0.4); font-style:italic; line-height:1.5;">
                        💡 ${Utils.escapeHtml(this._getRadicalMnemonic(exercise.radical, exercise.radicalName, exercise.radicalMeaning))}
                    </div>
                </div>

                <div class="radical-characters">
                    <h4>Characters containing this radical</h4>
                    <div class="radical-grid">
                        ${exercise.characters.map(char => `
                            <div class="radical-card" data-char="${Utils.escapeAttr(char.char)}" role="button" tabindex="0">
                                <div class="radical-char cn-text" lang="zh">${Utils.escapeHtml(char.char)}</div>
                                <div class="radical-char-meaning">${Utils.escapeHtml(char.meaning)}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="dialogue-actions">
                    <button class="btn btn-primary" id="practice-radical">📚 Practice these characters</button>
                </div>
            </div>
        `;
    },

    // Context clues HTML
    getContextCluesHTML(exercise) {
        const dots = this._progressDots();
        // Highlight the unknown word in the sentence (escape everything first)
        let sentenceHtml = Utils.escapeHtml(exercise.sentence || '');
        if (exercise.unknownWord && (exercise.sentence || '').includes(exercise.unknownWord)) {
            sentenceHtml = Utils.escapeHtml(exercise.sentence).replace(
                Utils.escapeHtml(exercise.unknownWord),
                `<span class="unknown-word">${Utils.escapeHtml(exercise.unknownWord)}</span>`
            );
        }
        return `
            <div class="context-stage activity-card">
                <div class="activity-prompt">
                    <span class="activity-eyebrow">🔍 Context Clues</span>
                    <h2 class="activity-title">Guess from context</h2>
                    <p class="activity-subtitle">Read the sentence and clues, then pick what the highlighted word means.</p>
                    ${dots}
                </div>

                <div class="context-sentence" lang="zh">${sentenceHtml}</div>

                ${exercise.contextClues && exercise.contextClues.length ? `
                    <div class="context-hints">
                        <div class="hints-label">💡 Clues in the sentence</div>
                        <ul>
                            ${exercise.contextClues.map(clue => `<li>${Utils.escapeHtml(clue)}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}

                <div class="context-options">
                    ${exercise.options.map((opt, i) => `
                        <div class="context-option" data-index="${i}" role="button" tabindex="0">${Utils.escapeHtml(opt)}</div>
                    `).join('')}
                </div>
                <div class="context-feedback" id="context-feedback" style="display:none;"></div>
            </div>
        `;
    },

    // Sentence reconstruction HTML (word reordering)
    getSentenceReconstructionHTML(exercise) {
        var dots = this._progressDots();
        var words = Utils.shuffle(exercise.scrambled.slice());
        return '\
            <div class="context-stage activity-card">\
                <div class="activity-prompt">\
                    <span class="activity-eyebrow">🧩 Sentence Reconstruction</span>\
                    <h2 class="activity-title">Reorder the words</h2>\
                    <p class="activity-subtitle">Click words in the correct order to form a sentence. HINT: ' + Utils.escapeHtml(exercise.hint || '') + '</p>\
                    ' + dots + '\
                </div>\
                <div class="recon-answer" id="recon-answer" style="min-height:60px;border:2px dashed var(--color-secondary);border-radius:8px;padding:12px;margin:16px 0;display:flex;flex-wrap:wrap;gap:8px;"></div>\
                <div class="recon-words" id="recon-words" style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;">\
                    ' + words.map(function(w, i) { return '<div class="recon-word" data-word="' + Utils.escapeHtml(w) + '" role="button" tabindex="0" style="background:var(--bg-hover);color:var(--text-primary);padding:8px 16px;border-radius:6px;cursor:pointer;font-size:1.1em;">' + Utils.escapeHtml(w) + '</div>'; }).join('') + '\
                </div>\
                <button class="btn btn-primary" id="check-recon-btn" style="margin-top:12px;width:100%;">Check Answer</button>\
                <div class="context-feedback" id="context-feedback" style="display:none;"></div>\
            </div>\
        ';
    },

    // Contextual fill-in-blank HTML
    getContextualFillBlankHTML(exercise) {
        var dots = this._progressDots();
        var context = exercise.context || '';
        return '\
            <div class="context-stage activity-card">\
                <div class="activity-prompt">\
                    <span class="activity-eyebrow">📝 Fill in the Blank</span>\
                    <h2 class="activity-title">Choose the best word</h2>\
                    <p class="activity-subtitle">Read the sentence and context, then pick the most appropriate word.</p>\
                    ' + dots + '\
                </div>\
                <div class="context-sentence" lang="zh" style="font-size:1.3em;margin:16px 0;">' + Utils.escapeHtml(exercise.sentence) + '</div>\
                ' + (context ? '<div class="context-hints"><div class="hints-label">💡 Context clue</div><p>' + Utils.escapeHtml(context) + '</p></div>' : '') + '\
                <div class="context-options">\
                    ' + exercise.options.map(function(opt, i) { return '<div class="context-option" data-index="' + i + '" role="button" tabindex="0">' + Utils.escapeHtml(opt) + '</div>'; }).join('') + '\
                </div>\
                <div class="context-feedback" id="context-feedback" style="display:none;"></div>\
            </div>\
        ';
    },

    // Word order HTML
    getWordOrderHTML(exercise) {
        var dots = this._progressDots();
        return '\
            <div class="context-stage activity-card">\
                <div class="activity-prompt">\
                    <span class="activity-eyebrow">📐 Word Order</span>\
                    <h2 class="activity-title">' + Utils.escapeHtml(exercise.instruction || 'Which has the correct word order?') + '</h2>\
                    <p class="activity-subtitle">Select the sentence with the correct Chinese word order.</p>\
                    ' + dots + '\
                </div>\
                <div class="context-options">\
                    ' + exercise.options.map(function(opt, i) { return '<div class="context-option" data-index="' + i + '" role="button" tabindex="0" lang="zh" style="font-size:1.15em;">' + Utils.escapeHtml(opt) + '</div>'; }).join('') + '\
                </div>\
                <div class="context-feedback" id="context-feedback" style="display:none;"></div>\
            </div>\
        ';
    },

    // Setup controls
    setupControls(exercise) {
        // Character matching
        let selectedCharacter = null;
        let selectedMeaning = null;

        document.querySelectorAll('.character-item').forEach(item => {
            item.addEventListener('click', () => {
                if (item.classList.contains('matched')) return;
                document.querySelectorAll('.character-item').forEach(i => i.classList.remove('selected'));
                item.classList.add('selected');
                selectedCharacter = item.dataset.character;
                if (selectedMeaning) {
                    this.checkMatch(selectedCharacter, selectedMeaning, exercise);
                    selectedCharacter = null;
                    selectedMeaning = null;
                }
            });
            item.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); item.click(); }
            });
        });

        document.querySelectorAll('.meaning-item').forEach(item => {
            item.addEventListener('click', () => {
                if (item.classList.contains('matched')) return;
                document.querySelectorAll('.meaning-item').forEach(i => i.classList.remove('selected'));
                item.classList.add('selected');
                selectedMeaning = item.dataset.meaning;
                if (selectedCharacter) {
                    this.checkMatch(selectedCharacter, selectedMeaning, exercise);
                    selectedCharacter = null;
                    selectedMeaning = null;
                }
            });
            item.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); item.click(); }
            });
        });

        // Sentence completion
        document.querySelectorAll('.sentence-option').forEach(option => {
            option.addEventListener('click', () => {
                const index = parseInt(option.dataset.index);
                this.checkSentenceComplete(index, exercise);
            });
            option.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); option.click(); }
            });
        });

        // Passage reading
        document.querySelectorAll('.passage-option').forEach(option => {
            option.addEventListener('click', () => {
                const questionIndex = parseInt(option.dataset.question);
                const optionIndex = parseInt(option.dataset.option);
                this.checkPassageAnswer(questionIndex, optionIndex, exercise);
            });
            option.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); option.click(); }
            });
        });

        // Passage: show pinyin
        const showPinyinBtn = document.getElementById('show-passage-pinyin');
        if (showPinyinBtn) {
            showPinyinBtn.addEventListener('click', () => {
                const pinyin = document.getElementById('passage-pinyin');
                if (pinyin) {
                    pinyin.classList.toggle('hidden');
                    showPinyinBtn.textContent = pinyin.classList.contains('hidden') ? '👁 Show pinyin' : '🙈 Hide pinyin';
                }
            });
        }

        // Passage: play audio
        const playPassageBtn = document.getElementById('play-passage-btn');
        if (playPassageBtn) {
            playPassageBtn.addEventListener('click', () => AudioManager.speak(exercise.passage));
        }

        // Speed reading
        const startSpeedBtn = document.getElementById('start-speed-reading');
        if (startSpeedBtn) {
            startSpeedBtn.addEventListener('click', () => {
                this.startSpeedReading(exercise);
            });
        }

        // Context clues / fill-blank / word-order (generic option click)
        document.querySelectorAll('.context-option').forEach(option => {
            option.addEventListener('click', () => {
                const index = parseInt(option.dataset.index);
                if (this.currentType === 'word-order') {
                    this.checkWordOrder(index, exercise);
                } else {
                    this.checkContextClue(index, exercise);
                }
            });
            option.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); option.click(); }
            });
        });

        // Sentence reconstruction
        var reconAnswer = document.getElementById('recon-answer');
        var selectedWords = [];
        document.querySelectorAll('.recon-word').forEach(word => {
            word.addEventListener('click', () => {
                if (word.classList.contains('used')) return;
                word.classList.add('used');
                word.style.opacity = '0.4';
                word.style.pointerEvents = 'none';
                selectedWords.push(word.dataset.word);
                // Update answer display
                reconAnswer.innerHTML = selectedWords.map(function(w) {
                    return '<span class="recon-answer-word" data-word="' + Utils.escapeHtml(w) + '" style="background:var(--color-secondary);color:#fff;padding:6px 14px;border-radius:6px;cursor:pointer;">' + Utils.escapeHtml(w) + '</span>';
                }).join(' ');
                // Click to remove from answer
                reconAnswer.querySelectorAll('.recon-answer-word').forEach(function(aw, idx) {
                    aw.addEventListener('click', function() {
                        var removed = selectedWords[idx];
                        selectedWords.splice(idx, 1);
                        document.querySelectorAll('.recon-word').forEach(function(rw) {
                            if (rw.dataset.word === removed && rw.classList.contains('used')) {
                                rw.classList.remove('used');
                                rw.style.opacity = '';
                                rw.style.pointerEvents = '';
                            }
                        });
                        reconAnswer.innerHTML = selectedWords.map(function(w) {
                            return '<span class="recon-answer-word" data-word="' + Utils.escapeHtml(w) + '" style="background:var(--color-secondary);color:#fff;padding:6px 14px;border-radius:6px;cursor:pointer;">' + Utils.escapeHtml(w) + '</span>';
                        }).join(' ');
                    });
                });
            });
            word.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); word.click(); }
            });
        });

        var checkReconBtn = document.getElementById('check-recon-btn');
        if (checkReconBtn) {
            checkReconBtn.addEventListener('click', () => {
                this.checkReconstruction(selectedWords, exercise);
            });
        }

        // Radical cards: tap to hear pronunciation
        document.querySelectorAll('.radical-card').forEach(card => {
            card.addEventListener('click', () => {
                const char = card.dataset.char;
                if (char) AudioManager.speak(char);
            });
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
            });
            // Hover effect
            card.addEventListener('mouseenter', () => {
                if (typeof InkAnimations !== 'undefined' && InkAnimations.attentionPulse) {
                    InkAnimations.attentionPulse(card);
                }
            });
        });
    },

    // Check match
    checkMatch(character, meaning, exercise) {
        if (!character || !meaning) return;

        const pair = exercise.pairs.find(p => p.character === character);
        const isCorrect = pair && pair.meaning === meaning;

        const charItem = document.querySelector(`.match-item[data-character="${character}"]`);
        const meaningItem = document.querySelector(`.match-item[data-meaning="${meaning}"]`);

        if (isCorrect) {
            charItem.classList.add('matched');
            meaningItem.classList.add('matched');
            charItem.classList.remove('selected');
            meaningItem.classList.remove('selected');
            this.score++;
            Utils.playSound('correct');

            if (typeof InkAnimations !== 'undefined') {
                if (InkAnimations.feedbackPulse) {
                    InkAnimations.feedbackPulse(charItem, 'correct');
                    InkAnimations.feedbackPulse(meaningItem, 'correct');
                }
                if (InkAnimations.highlightFlash) {
                    InkAnimations.highlightFlash(charItem);
                }
            }

            this._showCharacterBreakdown(character, exercise);
        } else {
            charItem.classList.add('incorrect');
            meaningItem.classList.add('incorrect');
            if (typeof InkAnimations !== 'undefined' && InkAnimations.shakeElement) {
                InkAnimations.shakeElement(charItem);
                InkAnimations.shakeElement(meaningItem);
            }
            setTimeout(() => {
                charItem.classList.remove('selected', 'incorrect');
                meaningItem.classList.remove('selected', 'incorrect');
            }, 700);
            Utils.playSound('incorrect');
            return;
        }

        // Update progress bar
        const matchedCount = document.querySelectorAll('.match-item.matched').length / 2;
        const total = exercise.pairs.length;
        const prevMatched = matchedCount - 1;
        const fill = document.getElementById('match-fill');
        const counter = document.getElementById('match-count');
        const prevPct = total > 0 ? (prevMatched / total) * 100 : 0;
        const newPct = total > 0 ? (matchedCount / total) * 100 : 0;

        if (fill) {
            if (typeof InkAnimations !== 'undefined' && InkAnimations.progressBarFill) {
                InkAnimations.progressBarFill(fill, prevPct, newPct);
            } else {
                fill.style.width = newPct + '%';
            }
        }
        if (counter) {
            counter.textContent = matchedCount;
            if (typeof InkAnimations !== 'undefined' && InkAnimations.counterBounce) {
                InkAnimations.counterBounce(counter);
            }
        }

        // Check if all matched
        if (matchedCount === total) {
            setTimeout(() => this.showNextButton(), 400);
        }
    },

    // Check sentence complete
    checkSentenceComplete(index, exercise) {
        const isCorrect = index === exercise.correct;
        const options = document.querySelectorAll('.sentence-option');
        const feedback = document.getElementById('sentence-feedback');

        options.forEach((opt, i) => {
            opt.classList.remove('selected', 'correct', 'incorrect');
            if (i === index) {
                opt.classList.add('selected');
                if (isCorrect) {
                    opt.classList.add('correct');
                    this.score++;
                    Utils.playSound('correct');
                    if (typeof InkAnimations !== 'undefined' && InkAnimations.feedbackPulse) {
                        InkAnimations.feedbackPulse(opt, 'correct');
                    }
                } else {
                    opt.classList.add('incorrect');
                    Utils.playSound('incorrect');
                    if (typeof InkAnimations !== 'undefined' && InkAnimations.shakeElement) {
                        InkAnimations.shakeElement(opt);
                    }
                }
            }
            if (i === exercise.correct) {
                opt.classList.add('correct');
            }
        });

        if (feedback) {
            if (isCorrect) {
                feedback.innerHTML = '✅ Excellent choice!';
                feedback.className = 'answer-feedback correct';
            } else {
                feedback.innerHTML = `❌ The correct word is highlighted in green.`;
                feedback.className = 'answer-feedback incorrect';
            }
        }

        this.showNextButton();
    },

    // Check passage answer
    checkPassageAnswer(questionIndex, optionIndex, exercise) {
        const question = exercise.questions[questionIndex];
        const isCorrect = optionIndex === question.correct;

        const options = document.querySelectorAll(`[data-question="${questionIndex}"]`);
        options.forEach((opt, i) => {
            opt.classList.remove('selected', 'correct', 'incorrect');
            opt.style.pointerEvents = 'none';
            opt.style.cursor = 'default';
            if (i === optionIndex) {
                opt.classList.add('selected');
                if (isCorrect) {
                    opt.classList.add('correct');
                    this.score++;
                    Utils.playSound('correct');
                    if (typeof InkAnimations !== 'undefined' && InkAnimations.feedbackPulse) {
                        InkAnimations.feedbackPulse(opt, 'correct');
                    }
                } else {
                    opt.classList.add('incorrect');
                    Utils.playSound('incorrect');
                    if (typeof InkAnimations !== 'undefined' && InkAnimations.shakeElement) {
                        InkAnimations.shakeElement(opt);
                    }
                }
            }
            if (i === question.correct) {
                opt.classList.add('correct');
            }
        });

        // Only advance when every question has been answered
        const total = exercise.questions.length;
        const answered = document.querySelectorAll('.passage-question .passage-option.selected').length;
        if (answered >= total) {
            this._showPassageVocabulary(exercise);
            setTimeout(() => this.showNextButton(), 600);
        }
    },

    // Start speed reading
    startSpeedReading(exercise) {
        const timer = document.getElementById('speed-timer');
        const questions = document.getElementById('speed-questions');
        const startRow = document.getElementById('speed-start-row');
        const passageCard = document.getElementById('speed-passage-card');

        if (startRow) startRow.classList.add('hidden');

        let timeLeft = exercise.timeLimit;
        timer.textContent = timeLeft;

        // Store speed reading data for final stats
        this._speedReadingData = {
            passageChars: (exercise.passage || '').replace(/\s/g, '').length,
            timeLimit: exercise.timeLimit,
            startTime: Date.now()
        };

        const interval = setInterval(() => {
            timeLeft--;
            timer.textContent = timeLeft;
            timer.classList.toggle('warning', timeLeft <= Math.max(3, exercise.timeLimit / 2) && timeLeft > 3);

            const isDanger = timeLeft <= 3;
            timer.classList.toggle('danger', isDanger);

            if (isDanger && typeof InkAnimations !== 'undefined' && InkAnimations.attentionPulse) {
                InkAnimations.attentionPulse(timer);
            }

            if (timeLeft <= 0) {
                clearInterval(interval);
                this._speedInterval = null;
                if (passageCard) passageCard.style.opacity = '0.4';
                if (questions) questions.classList.remove('hidden');
                if (typeof InkAnimations !== 'undefined' && InkAnimations.entranceStagger && questions) {
                    InkAnimations.entranceStagger(questions);
                }
                Utils.showToast('⏰ Time\'s up! Answer the questions.', 'info');
            }
        }, 1000);

        this._speedInterval = interval;
    },

    // Check context clue
    checkContextClue(index, exercise) {
        const isCorrect = index === exercise.correct;
        const options = document.querySelectorAll('.context-option');
        const feedback = document.getElementById('context-feedback');

        options.forEach((opt, i) => {
            opt.classList.remove('selected', 'correct', 'incorrect');
            if (i === index) {
                opt.classList.add('selected');
                if (isCorrect) {
                    opt.classList.add('correct');
                    this.score++;
                    Utils.playSound('correct');
                    if (typeof InkAnimations !== 'undefined' && InkAnimations.feedbackPulse) {
                        InkAnimations.feedbackPulse(opt, 'correct');
                    }
                } else {
                    opt.classList.add('incorrect');
                    Utils.playSound('incorrect');
                    if (typeof InkAnimations !== 'undefined' && InkAnimations.shakeElement) {
                        InkAnimations.shakeElement(opt);
                    }
                }
            }
            if (i === exercise.correct) {
                opt.classList.add('correct');
            }
        });

        if (feedback) {
            feedback.style.display = 'block';
            const safeExplanation = Utils.escapeHtml(exercise.explanation || '');
            const chineseUsage = this._getContextUsageExplanation(exercise);
            feedback.innerHTML = isCorrect
                ? `✅ Correct! ${safeExplanation}<br><small style="color:rgba(255,255,255,0.5);">${Utils.escapeHtml(chineseUsage)}</small>`
                : `❌ The right meaning is highlighted. ${safeExplanation}<br><small style="color:rgba(255,255,255,0.5);">${Utils.escapeHtml(chineseUsage)}</small>`;
        }

        this.showNextButton();
    },

    // Check reconstruction
    checkReconstruction(selectedWords, exercise) {
        var answer = selectedWords.join('');
        var isCorrect = answer === exercise.correct;
        var feedback = document.getElementById('context-feedback');
        if (feedback) {
            feedback.style.display = 'block';
            feedback.innerHTML = isCorrect
                ? '✅ Correct! ' + Utils.escapeHtml(exercise.meaning || '')
                : '❌ The correct order is: <strong lang="zh">' + Utils.escapeHtml(exercise.correct) + '</strong> — ' + Utils.escapeHtml(exercise.meaning || '');
        }
        if (isCorrect) this.score++;
        this.showNextButton();
    },

    // Check word order
    checkWordOrder(index, exercise) {
        var isCorrect = index === exercise.correct;
        var feedback = document.getElementById('context-feedback');
        document.querySelectorAll('.context-option').forEach(function(opt, i) {
            opt.style.pointerEvents = 'none';
            if (i === exercise.correct) opt.style.borderColor = 'var(--color-success)';
            if (i === index && !isCorrect) opt.style.borderColor = 'var(--color-warning)';
        });
        if (feedback) {
            feedback.style.display = 'block';
            feedback.innerHTML = isCorrect
                ? '✅ Correct! ' + Utils.escapeHtml(exercise.explanation || '')
                : '❌ Not quite. ' + Utils.escapeHtml(exercise.explanation || '');
        }
        if (isCorrect) this.score++;
        this.showNextButton();
    },

    // Cultural Notes browse
    showCulturalNotes() {
        var menu = document.getElementById('reading-menu');
        var ex = document.getElementById('reading-exercise');
        if (menu) menu.classList.add('hidden');
        if (ex) ex.classList.remove('hidden');
        document.getElementById('reading-title').textContent = 'Cultural Notes';

        var notes = (typeof CulturalData !== 'undefined' && CulturalData.notes) ? CulturalData.notes : [];
        if (!notes.length) {
            document.getElementById('reading-content').innerHTML = '<div class="activity-card"><p>No cultural notes available.</p><button class="btn" id="back-cultural">Back to Menu</button></div>';
            document.getElementById('back-cultural').addEventListener('click', function() { ReadingModule.showMenu(); });
            return;
        }

        // Group by category
        var categories = {};
        notes.forEach(function(n) {
            var cat = n.category || 'General';
            if (!categories[cat]) categories[cat] = [];
            categories[cat].push(n);
        });

        var html = '<div class="cultural-browse">';
        var catKeys = Object.keys(categories);
        catKeys.forEach(function(cat) {
            var items = categories[cat];
            html += '<div class="section-title" style="margin-top:20px;">\u2728 ' + Utils.escapeHtml(cat) + '</div>';
            items.forEach(function(n) {
                html += '\
                    <div class="activity-card" style="margin-bottom:12px;">\
                        <h3 style="color:var(--color-secondary);">' + Utils.escapeHtml(n.title || '') + '</h3>\
                        <p style="color:var(--text-muted);font-style:italic;">' + Utils.escapeHtml(n.titleMeaning || '') + '</p>\
                        <p style="margin-top:8px;">' + Utils.escapeHtml(n.content || '') + '</p>\
                        ' + (n.keyPhrases && n.keyPhrases.length ? '<div style="margin-top:8px;"><strong>Key phrases:</strong> ' + n.keyPhrases.map(function(k) { return Utils.escapeHtml(typeof k === 'string' ? k : k.chinese || ''); }).join(', ') + '</div>' : '') + '\
                    </div>\
                ';
            });
        });
        html += '<button class="btn" id="back-cultural" style="margin-top:16px;width:100%;">\u2190 Back to Menu</button>';
        html += '</div>';

        var content = document.getElementById('reading-content');
        content.innerHTML = html;

        document.getElementById('back-cultural').addEventListener('click', function() {
            ReadingModule.showMenu();
        });

        var controls = document.querySelector('.exercise-controls');
        if (controls) {
            controls.querySelectorAll('button').forEach(function(b) { b.classList.add('hidden'); });
        }
    },

    // Useful Phrases browse
    showUsefulPhrases() {
        var menu = document.getElementById('reading-menu');
        var ex = document.getElementById('reading-exercise');
        if (menu) menu.classList.add('hidden');
        if (ex) ex.classList.remove('hidden');
        document.getElementById('reading-title').textContent = 'Useful Phrases';

        var phrases = (typeof RealWorldPhrases !== 'undefined' && RealWorldPhrases.getAll) ? RealWorldPhrases.getAll() : [];
        if (!phrases.length) {
            document.getElementById('reading-content').innerHTML = '<div class="activity-card"><p>No phrases available.</p><button class="btn" id="back-phrases">Back to Menu</button></div>';
            document.getElementById('back-phrases').addEventListener('click', function() { ReadingModule.showMenu(); });
            return;
        }

        // Show random selection of 15
        var shuffled = phrases.slice().sort(function() { return Math.random() - 0.5; });
        var display = shuffled.slice(0, 15);

        var html = '<div class="phrases-browse">' +
            '<p class="activity-subtitle" style="text-align:center;margin-bottom:16px;">Tap to hear pronunciation</p>';

        display.forEach(function(p) {
            html += '\
                <div class="activity-card phrase-card" style="margin-bottom:8px;cursor:pointer;" data-speak="' + Utils.escapeHtml(p.chinese || '') + '">\
                    <div lang="zh" style="font-size:1.2em;">' + Utils.escapeHtml(p.chinese || '') + '</div>\
                    <div style="color:var(--color-secondary);">' + Utils.escapeHtml(p.pinyin || '') + '</div>\
                    <div style="color:var(--text-muted);">' + Utils.escapeHtml(p.meaning || '') + '</div>\
                    ' + (p.category ? '<div style="font-size:0.8em;color:var(--color-info);margin-top:4px;">' + Utils.escapeHtml(typeof p.category === 'string' ? p.category : p.category.join(', ')) + '</div>' : '') + '\
                </div>\
            ';
        });

        html += '<button class="btn" id="reshuffle-phrases" style="margin:8px 4px;">\ud83d\udd00 More Phrases</button>' +
            '<button class="btn" id="back-phrases" style="margin:8px 4px;">\u2190 Back to Menu</button>';
        html += '</div>';

        var content = document.getElementById('reading-content');
        content.innerHTML = html;

        // Click to speak
        content.querySelectorAll('.phrase-card').forEach(function(card) {
            card.addEventListener('click', function() {
                var text = this.dataset.speak;
                if (typeof AudioManager !== 'undefined') AudioManager.speak(text);
            });
        });

        document.getElementById('reshuffle-phrases').addEventListener('click', function() {
            ReadingModule.showUsefulPhrases();
        });
        document.getElementById('back-phrases').addEventListener('click', function() {
            ReadingModule.showMenu();
        });

        var controls = document.querySelector('.exercise-controls');
        if (controls) {
            controls.querySelectorAll('button').forEach(function(b) { b.classList.add('hidden'); });
        }
    },

    // HSK Level Reading — level selector then passages
    showHSKReadingSelector() {
        var menu = document.getElementById('reading-menu');
        var ex = document.getElementById('reading-exercise');
        if (menu) menu.classList.add('hidden');
        if (ex) ex.classList.remove('hidden');
        document.getElementById('reading-title').textContent = 'HSK Level Reading';

        var html = '<div class="hsk-reading-select">' +
            '<p class="activity-subtitle">Select your HSK level for leveled reading practice</p>' +
            '<div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin:16px 0;">';

        var levels = [
            { id: 'hsk1', name: 'HSK 1', desc: 'Beginner' },
            { id: 'hsk2', name: 'HSK 2', desc: 'Elementary' },
            { id: 'hsk3', name: 'HSK 3', desc: 'Intermediate' },
            { id: 'hsk4', name: 'HSK 4', desc: 'Upper Int.' },
            { id: 'hsk5', name: 'HSK 5', desc: 'Advanced' }
        ];

        levels.forEach(function(lvl) {
            var count = 0;
            if (typeof HSKReadingMassive !== 'undefined' && HSKReadingMassive[lvl.id]) {
                count = HSKReadingMassive[lvl.id].length;
            }
            html += '<button class="btn btn-secondary hsk-level-btn" data-level="' + lvl.id + '" style="min-width:120px;">' +
                '<div style="font-weight:bold;">' + lvl.name + '</div>' +
                '<div style="font-size:0.8em;color:var(--text-muted);">' + lvl.desc + '</div>' +
                '<div style="font-size:0.8em;">' + count + ' passages</div>' +
                '</button>';
        });

        html += '</div><button class="btn" id="back-hsk-select" style="width:100%;margin-top:16px;">\u2190 Back to Menu</button></div>';

        document.getElementById('reading-content').innerHTML = html;

        var controls = document.querySelector('.exercise-controls');
        if (controls) {
            controls.querySelectorAll('button').forEach(function(b) { b.classList.add('hidden'); });
        }

        var self = this;
        document.querySelectorAll('.hsk-level-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var lvl = this.dataset.level;
                self.showHSKReading(lvl);
            });
        });

        document.getElementById('back-hsk-select').addEventListener('click', function() {
            ReadingModule.showMenu();
        });
    },

    showHSKReading(level) {
        var passages = [];
        if (typeof HSKReadingMassive !== 'undefined' && HSKReadingMassive[level]) {
            passages = HSKReadingMassive[level];
        }

        if (!passages.length) {
            document.getElementById('reading-content').innerHTML =
                '<div class="activity-card"><p>No passages for ' + Utils.escapeHtml(level) + '.</p><button class="btn" id="back-hsk-read">Back</button></div>';
            document.getElementById('back-hsk-read').addEventListener('click', function() { ReadingModule.showHSKReadingSelector(); });
            return;
        }

        var levelNames = { hsk1: 'HSK 1', hsk2: 'HSK 2', hsk3: 'HSK 3', hsk4: 'HSK 4', hsk5: 'HSK 5' };
        document.getElementById('reading-title').textContent = levelNames[level] + ' Reading';

        // Store as session exercises (passage-reading style)
        this.exercises = passages;
        this.currentIndex = 0;
        this.score = 0;
        this.results = [];
        this.currentType = 'passage-reading';
        this.passageQuestionIndex = 0;

        this.showCurrentExercise();
    },

    // Progress dots for the current session
    _progressDots() {
        const total = this.exercises.length;
        const current = this.currentIndex;
        if (!total) return '';
        let html = '<div class="activity-progress-dots">';
        for (let i = 0; i < total; i++) {
            const cls = i < current ? 'done' : i === current ? 'current' : '';
            html += `<span class="dot ${cls}"></span>`;
        }
        html += '</div>';
        return html;
    },

    // Show next button
    showNextButton() {
        const checkBtn = document.getElementById('check-reading-btn');
        const nextBtn = document.getElementById('next-reading-btn');

        if (checkBtn) checkBtn.classList.add('hidden');
        if (nextBtn) nextBtn.classList.remove('hidden');

        if (nextBtn) {
            if (nextBtn._nextHandler) {
                nextBtn.removeEventListener('click', nextBtn._nextHandler);
            }
            nextBtn._nextHandler = () => {
                this.currentIndex++;
                this.showCurrentExercise();
            };
            nextBtn.addEventListener('click', nextBtn._nextHandler);
        }
    },

    // Finish exercise
    finishExercise() {
        const totalQuestions = this.exercises.length;
        const result = ProgressTracker.trackExercise('reading', `reading-${this.currentType}-${Date.now()}`, this.score, totalQuestions);
        const capturedType = this.currentType;
        const speedStats = this._getSpeedReadingStats();

        App.showCompletionModal({
            title: 'Reading Complete!',
            score: this.score,
            total: totalQuestions,
            percentage: result.percentage,
            xp: result.xp,
            isPerfect: result.isPerfect,
            subtitle: speedStats || undefined,
            onBack: () => ReadingModule.showMenu(),
            onRetry: () => ReadingModule.startExercise(capturedType)
        });
    },

    // Character breakdown for character-match exercises
    _showCharacterBreakdown(character, exercise) {
        const feedback = document.getElementById('match-feedback');
        if (!feedback) return;
        const breakdown = this._getCharacterBreakdown(character);
        const pair = exercise.pairs.find(p => p.character === character);
        const meaning = pair ? Utils.escapeHtml(pair.meaning) : '';
        feedback.innerHTML = `<span class="breakdown-char" lang="zh">${Utils.escapeHtml(character)}</span> = "${meaning}" — ${Utils.escapeHtml(breakdown.components)}<br><small style="color:rgba(255,255,255,0.35)">Radical: ${Utils.escapeHtml(breakdown.radical)}</small>`;
        feedback.className = 'match-feedback visible';
        feedback.style.display = 'block';
    },

    _getCharacterBreakdown(character) {
        const breakdowns = {
            '人': { radical: '人 (person)', components: 'Pictograph of a person standing, one of the simplest characters' },
            '大': { radical: '大 (big)', components: 'Pictograph of a person with arms stretched wide to show "big"' },
            '小': { radical: '小 (small)', components: 'Three small dots representing something diminutive' },
            '中': { radical: '丨 (line)', components: 'A line through the center of a rectangle, meaning "middle"' },
            '上': { radical: '一 (one)', components: 'A short line above a horizontal baseline = "up/above"' },
            '下': { radical: '一 (one)', components: 'A short line below a horizontal baseline = "down/below"' },
            '日': { radical: '日 (sun)', components: 'Pictograph of the sun, the dot inside was originally a sunspot' },
            '月': { radical: '月 (moon)', components: 'Pictograph of a crescent moon, also means "month"' },
            '水': { radical: '水 (water)', components: 'Pictograph of flowing water, the 氵 radical is its side form' },
            '火': { radical: '火 (fire)', components: 'Pictograph of flames rising upward' },
            '山': { radical: '山 (mountain)', components: 'Pictograph of three mountain peaks side by side' },
            '木': { radical: '木 (wood)', components: 'Pictograph of a tree with branches above and roots below' },
            '亻': { radical: '亻 (person radical)', components: 'Side form of 人, appears on the left in characters about people' },
            '氵': { radical: '氵 (water radical)', components: 'Three drops of water, always on the left side of water-related characters' },
            '口': { radical: '口 (mouth)', components: 'Pictograph of an open mouth, found in characters about speech/eating' },
            '女': { radical: '女 (woman)', components: 'Pictograph of a kneeling woman, in characters about females' },
            '扌': { radical: '扌 (hand radical)', components: 'Side form of 手 (hand), appears in action verbs involving hands' },
            '忄': { radical: '忄 (heart radical)', components: 'Side form of 心 (heart), found in emotion/feeling words' },
            '讠': { radical: '讠 (speech radical)', components: 'Side form of 言 (speech), appears in words about talking/reading' },
            '土': { radical: '土 (earth)', components: 'A cross on the ground representing soil or land' },
            '王': { radical: '王 (jade/king)', components: 'Three horizontal lines connected by a vertical line, representing a king' },
            '目': { radical: '目 (eye)', components: 'Pictograph of an eye turned sideways, in vision-related characters' },
            '田': { radical: '田 (field)', components: 'A rice field divided into four sections by paths' },
            '石': { radical: '石 (stone)', components: 'A stone under a cliff overhang' },
            '钅': { radical: '钅 (metal radical)', components: 'Side form of 金 (gold/metal), in characters about metals' },
            '辶': { radical: '辶 (walk radical)', components: 'Indicates movement or walking, wraps around the bottom-left' },
            '宀': { radical: '宀 (roof radical)', components: 'Represents a roof, found in characters related to houses/buildings' },
            '艹': { radical: '艹 (grass radical)', components: 'Two grass sprouts, top radical in plant-related characters' },
            '饣': { radical: '饣 (food radical)', components: 'Side form of 食 (eat/food), in words about food/eating' },
            '礻': { radical: '礻 (spirit radical)', components: 'Side form of 示 (altar/spirit), in characters about ceremony/ritual' },
            '衤': { radical: '衤 (clothing radical)', components: 'Side form of 衣 (clothing), in characters about garments' },
            '禾': { radical: '禾 (grain)', components: 'A stalk of grain with a hanging ear, in plant/grain characters' },
            '虫': { radical: '虫 (insect)', components: 'Pictograph of a snake or worm, in animal/insect characters' },
            '贝': { radical: '贝 (shell)', components: 'Cowrie shell pictograph, used as ancient currency, in money words' },
            '车': { radical: '车 (vehicle)', components: 'Overhead view of a chariot, in vehicle/transport characters' },
            '犭': { radical: '犭 (animal radical)', components: 'Side form of 犬 (dog), in characters about animals/beasts' },
            '刂': { radical: '刂 (knife radical)', components: 'Side form of 刀 (knife), appears on the right in cutting words' },
            '阝': { radical: '阝 (mound/city radical)', components: 'On left = mound/hill, on right = city, in place/geography words' },
            '心': { radical: '心 (heart)', components: 'The heart organ, appears at the bottom in emotion/thought characters' },
            '冫': { radical: '冫 (ice radical)', components: 'Two drops of ice, in words about cold/freezing' },
            '雨': { radical: '雨 (rain)', components: 'Cloud with falling raindrops, in weather-related characters' },
            '米': { radical: '米 (rice)', components: 'Grain on a stalk, in characters about rice/food/grains' },
            '纟': { radical: '纟 (silk radical)', components: 'Side form of 糸 (silk), in words about thread/weaving/color' },
            '门': { radical: '门 (gate)', components: 'A double door, in characters about gates/rooms/enclosures' },
            '马': { radical: '马 (horse)', components: 'Pictograph of a horse, in characters about horses/riding' },
            '鱼': { radical: '鱼 (fish)', components: 'Pictograph of a fish, in characters about fish/aquatic things' },
            '鸟': { radical: '鸟 (bird)', components: 'Pictograph of a bird, in characters about birds/flying' },
            '走': { radical: '走 (walk/run)', components: 'A running person with a foot at the bottom, in movement words' },
            '力': { radical: '力 (strength)', components: 'A plow, representing physical strength/power' },
            '广': { radical: '广 (wide/building)', components: 'A building on a cliff, in characters about shelters/buildings' },
            '彡': { radical: '彡 (hair/bristle)', components: 'Three brush strokes, indicates hair, color, or ornamentation' },
            '夂': { radical: '夂 (go)', components: 'A foot going backward, found in characters about movement' },
            '又': { radical: '又 (right hand)', components: 'A pictograph of a right hand, often means "again"' }
        };
        return breakdowns[character] || { radical: character + ' (character)', components: 'Try to memorize this character by its visual shape and stroke order' };
    },

    // Show key vocabulary from passage after all questions answered
    _showPassageVocabulary(exercise) {
        const passageTitle = exercise.title || '';
        const passage = exercise.passage || '';
        if (!passageTitle && !passage) return;

        const vocab = [];
        const vocabMap = {
            '起床': { pinyin: 'qǐchuáng', meaning: 'get up' },
            '刷牙': { pinyin: 'shuāyá', meaning: 'brush teeth' },
            '洗脸': { pinyin: 'xǐliǎn', meaning: 'wash face' },
            '早饭': { pinyin: 'zǎofàn', meaning: 'breakfast' },
            '午饭': { pinyin: 'wǔfàn', meaning: 'lunch' },
            '晚饭': { pinyin: 'wǎnfàn', meaning: 'dinner' },
            '地铁': { pinyin: 'dìtiě', meaning: 'subway' },
            '上班': { pinyin: 'shàngbān', meaning: 'go to work' },
            '下班': { pinyin: 'xiàbān', meaning: 'finish work' },
            '睡觉': { pinyin: 'shuìjiào', meaning: 'sleep' },
            '看电视': { pinyin: 'kàn diànshì', meaning: 'watch TV' },
            '看书': { pinyin: 'kànshū', meaning: 'read books' },
            '医生': { pinyin: 'yīshēng', meaning: 'doctor' },
            '老师': { pinyin: 'lǎoshī', meaning: 'teacher' },
            '医院': { pinyin: 'yīyuàn', meaning: 'hospital' },
            '学校': { pinyin: 'xuéxiào', meaning: 'school' },
            '大学': { pinyin: 'dàxué', meaning: 'university' },
            '中文': { pinyin: 'zhōngwén', meaning: 'Chinese language' },
            '工作': { pinyin: 'gōngzuò', meaning: 'work/job' },
            '旅游': { pinyin: 'lǚyóu', meaning: 'travel' },
            '长城': { pinyin: 'chángchéng', meaning: 'Great Wall' },
            '故宫': { pinyin: 'gùgōng', meaning: 'Forbidden City' },
            '火车': { pinyin: 'huǒchē', meaning: 'train' },
            '火锅': { pinyin: 'huǒguō', meaning: 'hotpot' },
            '旅行': { pinyin: 'lǚxíng', meaning: 'travel/journey' },
            '北京': { pinyin: 'běijīng', meaning: 'Beijing' },
            '西安': { pinyin: 'xī\'ān', meaning: 'Xi\'an' },
            '成都': { pinyin: 'chéngdū', meaning: 'Chengdu' },
            '兵马俑': { pinyin: 'bīngmǎyǒng', meaning: 'Terracotta Warriors' },
            '声调': { pinyin: 'shēngdiào', meaning: 'tone (in language)' },
            '电影': { pinyin: 'diànyǐng', meaning: 'movie' },
            '有意思': { pinyin: 'yǒu yìsi', meaning: 'interesting' },
            '语言': { pinyin: 'yǔyán', meaning: 'language' },
            '希望': { pinyin: 'xīwàng', meaning: 'hope' },
            '天气': { pinyin: 'tiānqì', meaning: 'weather' },
            '公园': { pinyin: 'gōngyuán', meaning: 'park' },
            '跑步': { pinyin: 'pǎobù', meaning: 'jog/run' },
            '手机': { pinyin: 'shǒujī', meaning: 'cell phone' },
            '春节': { pinyin: 'chūnjié', meaning: 'Spring Festival' },
            '节日': { pinyin: 'jiérì', meaning: 'holiday/festival' },
            '回家': { pinyin: 'huíjiā', meaning: 'return home' },
            '过年': { pinyin: 'guònián', meaning: 'celebrate New Year' },
            '重要': { pinyin: 'zhòngyào', meaning: 'important' },
            '夏天': { pinyin: 'xiàtiān', meaning: 'summer' },
            '冬天': { pinyin: 'dōngtiān', meaning: 'winter' },
            '游泳': { pinyin: 'yóuyǒng', meaning: 'swim' },
            '滑冰': { pinyin: 'huábīng', meaning: 'ice skate' },
            '空调': { pinyin: 'kōngtiáo', meaning: 'air conditioner' },
            '暖气': { pinyin: 'nuǎnqì', meaning: 'heating' },
            '妈妈': { pinyin: 'māma', meaning: 'mother' },
            '爸爸': { pinyin: 'bàba', meaning: 'father' },
            '姐姐': { pinyin: 'jiějie', meaning: 'older sister' },
            '高中生': { pinyin: 'gāozhōngshēng', meaning: 'high school student' },
            '明年': { pinyin: 'míngnián', meaning: 'next year' },
            '早上': { pinyin: 'zǎoshang', meaning: 'morning' },
            '晚上': { pinyin: 'wǎnshang', meaning: 'evening' },
            '中午': { pinyin: 'zhōngwǔ', meaning: 'noon' },
            '下午': { pinyin: 'xiàwǔ', meaning: 'afternoon' },
            '一天': { pinyin: 'yī tiān', meaning: 'one day' },
            '家庭': { pinyin: 'jiātíng', meaning: 'family' },
            '暑假': { pinyin: 'shǔjià', meaning: 'summer vacation' },
            '朋友': { pinyin: 'péngyǒu', meaning: 'friend' },
            '学习': { pinyin: 'xuéxí', meaning: 'study/learn' },
            '开始': { pinyin: 'kāishǐ', meaning: 'begin/start' },
            '觉得': { pinyin: 'juéde', meaning: 'feel/think' },
            '经济': { pinyin: 'jīngjì', meaning: 'economics' }
        };

        for (let i = 0; i < passage.length - 1; i++) {
            const bigram = passage.substring(i, i + 2);
            if (vocabMap[bigram] && !vocab.find(v => v.word === bigram)) {
                vocab.push({ word: bigram, ...vocabMap[bigram] });
            }
            if (i < passage.length - 2) {
                const trigram = passage.substring(i, i + 3);
                if (vocabMap[trigram] && !vocab.find(v => v.word === trigram)) {
                    vocab.push({ word: trigram, ...vocabMap[trigram] });
                }
            }
        }
        if (vocab.length === 0) return;
        if (vocab.length > 6) vocab.length = 6;

        // Find or create vocabulary container
        let vocabEl = document.querySelector('.passage-vocabulary');
        if (!vocabEl) {
            const container = document.querySelector('.passage-stage');
            if (!container) return;
            vocabEl = document.createElement('div');
            vocabEl.className = 'passage-vocabulary';
            container.appendChild(vocabEl);
        }

        vocabEl.innerHTML = `
            <h4 style="color:rgba(255,255,255,0.6); font-size:13px; text-transform:uppercase; letter-spacing:0.08em; margin:20px 0 10px;">📖 Key Vocabulary</h4>
            <div style="display:flex; flex-wrap:wrap; gap:8px;">
                ${vocab.map(v => `
                    <div class="vocab-chip" style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); border-radius:8px; padding:8px 12px; text-align:center; min-width:80px;">
                        <div lang="zh" style="font-size:16px; color:#fff;">${Utils.escapeHtml(v.word)}</div>
                        <div style="font-size:11px; color:rgba(255,255,255,0.4);">${Utils.escapeHtml(v.pinyin)}</div>
                        <div style="font-size:11px; color:rgba(255,255,255,0.55);">${Utils.escapeHtml(v.meaning)}</div>
                    </div>
                `).join('')}
            </div>`;

        if (typeof InkAnimations !== 'undefined' && InkAnimations.entranceStagger && vocabEl) {
            InkAnimations.entranceStagger(vocabEl);
        }
    },

    // Get mnemonic tip for radical
    _getRadicalMnemonic(radical, name, meaning) {
        const mnemonics = {
            '亻': 'Think of a person standing sideways. Characters with 亻 usually relate to people or human actions.',
            '氵': 'Three water drops. When you see 氵 on the left, the character is likely related to water or liquid.',
            '口': 'An open mouth. Characters with 口 often relate to speaking, eating, or openings.',
            '木': 'A tree shape with branches and roots. Wood-related characters use this radical.',
            '女': 'Looks like a woman walking gracefully. Characters with 女 relate to females or feminine qualities.',
            '扌': 'Three fingers of a hand. Characters with 扌 describe actions done with hands.',
            '忄': 'A simplified heart on its side. Characters with 忄 relate to emotions and feelings.',
            '讠': 'Simplified speech radical. Words about talking, reading, or language use this radical.',
            '土': 'A cross marking the ground. Characters with 土 relate to earth, land, or soil.',
            '王': 'Three jade pieces connected by a string. Characters with 王 often relate to jade, royalty, or precious things.',
            '目': 'An eye turned sideways. Characters with 目 relate to seeing, looking, or eyes.',
            '田': 'Four rice paddies. Characters with 田 relate to fields, farming, or land division.',
            '饣': 'Simplified food radical. Characters with 饣 relate to eating, food, or hunger.',
            '钅': 'Simplified metal radical. Characters with 钅 relate to metal objects, money, or hard materials.',
            '辶': 'A path with a foot walking on it. Characters with 辶 relate to movement, travel, or direction.',
            '宀': 'A roof covering a house. Characters with 宀 relate to buildings, homes, or being inside.',
            '艹': 'Two sprouts growing. Characters with 艹 relate to plants, grass, flowers, or herbs.',
            '礻': 'Altar radical. Characters with 礻 relate to ceremonies, spirits, blessings, or rituals.',
            '衤': 'Clothing radical. Characters with 衤 relate to garments, clothing, or fabric.',
            '禾': 'A grain plant with drooping head. Characters with 禾 relate to crops, farming, or harvest.',
            '心': 'The heart organ. Characters with 心 at the bottom relate to thoughts, emotions, and mental states.',
            '虫': 'A snake or worm. Characters with 虫 relate to insects, reptiles, or crawling creatures.',
            '贝': 'A cowrie shell used as money. Characters with 贝 relate to wealth, trade, or valuables.',
            '犭': 'A dog on its hind legs. Characters with 犭 relate to animals, especially wild or hunting animals.',
            '刂': 'A knife on the right side. Characters with 刂 relate to cutting, dividing, or sharp objects.',
            '阝': 'Mound on left, city on right. Left=geography/hills, right=city names/places.',
            '冫': 'Two ice crystals. Characters with 冫 relate to cold, ice, or freezing.',
            '雨': 'Clouds with rain drops. Characters with 雨 relate to weather, rain, snow, or clouds.',
            '米': 'Grains on a stalk. Characters with 米 relate to rice, grain, flour, or food.',
            '纟': 'Silk threads twisted together. Characters with 纟 relate to thread, fabric, or binding.',
            '门': 'A double door. Characters with 门 relate to gates, doors, rooms, or enclosed spaces.',
            '马': 'A horse with flowing mane. Characters with 马 relate to horses, riding, or transport.',
            '彡': 'Three flowing hairs. Characters with 彡 relate to hair, color, decoration, or pattern.',
            '夂': 'A descending foot. Characters with 夂 relate to going, walking, or movement.',
            '又': 'A right hand. Often used phonetically or means "again/also."',
            '广': 'A building on a cliff. Characters with 广 relate to buildings, rooms, or shelter.',
            '力': 'A plow pulled by strength. Characters with 力 relate to power, effort, or ability.',
            '走': 'A person running with a foot. Characters with 走 relate to walking, running, or movement.',
            '鱼': 'A fish with scales and fins. Characters with 鱼 relate to fish or aquatic life.',
            '鸟': 'A bird with feathers. Characters with 鸟 relate to birds or flying creatures.'
        };
        if (mnemonics[radical]) return mnemonics[radical];
        if (meaning) return `Remember: characters with this radical often relate to "${meaning}". Look for the ${radical} shape in characters you learn.`;
        return 'Try to spot this radical in other characters. Recognizing radicals helps you guess meaning and aids memorization.';
    },

    // Get context usage explanation for Chinese word usage
    _getContextUsageExplanation(exercise) {
        const word = exercise.unknownWord || '';
        const contextExplanations = {
            '生病': 'In Chinese, 生 (shēng) means "to give birth/to grow" and 病 (bìng) means "illness." Together, 生病 literally means "to grow illness" = "to become sick." This verb+noun pattern is common in Chinese.',
            '辣': '辣 (là) is the character for spicy/pungent taste. In Chinese food culture, 辣 describes the numbing-hot sensation from Sichuan peppercorns and chili. Chinese has specific characters for each taste: 酸 (suān, sour), 甜 (tián, sweet), 苦 (kǔ, bitter), 咸 (xián, salty), 辣 (là, spicy).',
            '着急': '着 (zháo) means "to touch/be affected" and 急 (jí) means "urgent/anxious." Together 着急 means "to feel urgency" = "worried/anxious." The 着 here is a resultative complement showing the emotional state.',
            '安静': '安 (ān) means "peace/calm" and 静 (jìng) means "quiet/still." Together they form a compound meaning "peaceful and quiet." Chinese often pairs similar-meaning characters to reinforce the meaning.',
            '终于': '终 (zhōng) means "end/final" and 于 (yú) is a preposition meaning "at/in." Together 终于 means "at the end" = "finally." This is an adverb used to indicate something happened after a long wait or effort.'
        };
        return contextExplanations[word] || `"${word}" is used in this sentence to convey meaning through context. Look at the surrounding words for clues about what "${word}" means.`;
    },

    // Get speed reading stats
    _getSpeedReadingStats() {
        if (!this._speedReadingData || !this._speedReadingData.passageChars) return null;
        const { passageChars, timeLimit } = this._speedReadingData;
        const cpm = Math.round(passageChars / (timeLimit / 60));
        this._speedReadingData = null;
        return `⚡ ${passageChars} characters in ${timeLimit}s — ~${cpm} chars/min`;
    }
};

// Export for use in other modules
window.ReadingModule = ReadingModule;

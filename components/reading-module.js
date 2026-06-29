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
    },

    // Setup type cards
    setupTypeCards() {
        // Use onclick to avoid stacking duplicate listeners on repeated calls
        document.querySelectorAll('#module-reading .exercise-type-card').forEach(card => {
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            card.onclick = () => {
                const type = card.dataset.type;
                this.startExercise(type);
            };
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
            });
        });
    },

    // Start exercise
    startExercise(type) {
        this.currentType = type;
        const exercises = (typeof ReadingData !== 'undefined' && ReadingData.getRandomByType)
            ? ReadingData.getRandomByType(type, 10)
            : [];
        this.exercises = exercises || [];
        this.currentIndex = 0;
        this.score = 0;

        if (this.exercises.length === 0) {
            Utils.showToast(`No exercises available for "${type}". Please try another type.`, 'error');
            this.showMenu();
            return;
        }

        document.getElementById('reading-menu').classList.add('hidden');
        document.getElementById('reading-exercise').classList.remove('hidden');

        // Update title
        const titles = {
            'character-match': 'Character Matching',
            'sentence-complete': 'Sentence Completion',
            'passage-reading': 'Passage Reading',
            'speed-reading': 'Speed Reading',
            'radical-learn': 'Radical Learning',
            'context-clues': 'Context Clues'
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

    // Setup controls
    setupControls(exercise) {
        // Character matching
        let selectedCharacter = null;
        let selectedMeaning = null;

        document.querySelectorAll('.character-item').forEach(item => {
            item.onclick = () => {
                document.querySelectorAll('.character-item').forEach(i => i.classList.remove('selected'));
                item.classList.add('selected');
                selectedCharacter = item.dataset.character;
                this.checkMatch(selectedCharacter, selectedMeaning, exercise);
                selectedMeaning = null;
            };
            item.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); item.click(); }
            });
        });

        document.querySelectorAll('.meaning-item').forEach(item => {
            item.onclick = () => {
                document.querySelectorAll('.meaning-item').forEach(i => i.classList.remove('selected'));
                item.classList.add('selected');
                selectedMeaning = item.dataset.meaning;
                this.checkMatch(selectedCharacter, selectedMeaning, exercise);
                selectedCharacter = null;
            };
            item.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); item.click(); }
            });
        });

        // Sentence completion
        document.querySelectorAll('.sentence-option').forEach(option => {
            option.onclick = () => {
                const index = parseInt(option.dataset.index);
                this.checkSentenceComplete(index, exercise);
            };
            option.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); option.click(); }
            });
        });

        // Passage reading
        document.querySelectorAll('.passage-option').forEach(option => {
            option.onclick = () => {
                const questionIndex = parseInt(option.dataset.question);
                const optionIndex = parseInt(option.dataset.option);
                this.checkPassageAnswer(questionIndex, optionIndex, exercise);
            };
            option.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); option.click(); }
            });
        });

        // Passage: show pinyin
        const showPinyinBtn = document.getElementById('show-passage-pinyin');
        if (showPinyinBtn) {
            showPinyinBtn.onclick = () => {
                const pinyin = document.getElementById('passage-pinyin');
                if (pinyin) {
                    pinyin.classList.toggle('hidden');
                    showPinyinBtn.textContent = pinyin.classList.contains('hidden') ? '👁 Show pinyin' : '🙈 Hide pinyin';
                }
            };
        }

        // Passage: play audio
        const playPassageBtn = document.getElementById('play-passage-btn');
        if (playPassageBtn) {
            playPassageBtn.onclick = () => AudioManager.speak(exercise.passage);
        }

        // Speed reading
        const startSpeedBtn = document.getElementById('start-speed-reading');
        if (startSpeedBtn) {
            startSpeedBtn.onclick = () => {
                this.startSpeedReading(exercise);
            };
        }

        // Context clues
        document.querySelectorAll('.context-option').forEach(option => {
            option.onclick = () => {
                const index = parseInt(option.dataset.index);
                this.checkContextClue(index, exercise);
            };
            option.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); option.click(); }
            });
        });

        // Radical cards: tap to hear pronunciation
        document.querySelectorAll('.radical-card').forEach(card => {
            card.onclick = () => {
                const char = card.dataset.char;
                if (char) AudioManager.speak(char);
            };
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
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
        } else {
            charItem.classList.add('incorrect');
            meaningItem.classList.add('incorrect');
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
        const fill = document.getElementById('match-fill');
        const counter = document.getElementById('match-count');
        if (fill) fill.style.width = `${(matchedCount / total) * 100}%`;
        if (counter) counter.textContent = matchedCount;

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
                } else {
                    opt.classList.add('incorrect');
                    Utils.playSound('incorrect');
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
                } else {
                    opt.classList.add('incorrect');
                    Utils.playSound('incorrect');
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

        const interval = setInterval(() => {
            timeLeft--;
            timer.textContent = timeLeft;
            timer.classList.toggle('warning', timeLeft <= Math.max(3, exercise.timeLimit / 2) && timeLeft > 3);
            timer.classList.toggle('danger', timeLeft <= 3);

            if (timeLeft <= 0) {
                clearInterval(interval);
                this._speedInterval = null;
                if (passageCard) passageCard.style.opacity = '0.4';
                if (questions) questions.classList.remove('hidden');
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
                } else {
                    opt.classList.add('incorrect');
                    Utils.playSound('incorrect');
                }
            }
            if (i === exercise.correct) {
                opt.classList.add('correct');
            }
        });

        if (feedback) {
            feedback.style.display = 'block';
            const safeExplanation = Utils.escapeHtml(exercise.explanation || '');
            feedback.innerHTML = isCorrect
                ? `✅ Correct! ${safeExplanation}`
                : `❌ The right meaning is highlighted. ${safeExplanation}`;
        }

        this.showNextButton();
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
            nextBtn.onclick = () => {
                this.currentIndex++;
                this.showCurrentExercise();
            };
        }
    },

    // Finish exercise
    finishExercise() {
        const totalQuestions = this.exercises.length;
        const result = ProgressTracker.trackExercise('reading', `reading-${this.currentType}-${Date.now()}`, this.score, totalQuestions);
        const capturedType = this.currentType;

        App.showCompletionModal({
            title: 'Reading Complete!',
            score: this.score,
            total: totalQuestions,
            percentage: result.percentage,
            xp: result.xp,
            isPerfect: result.isPerfect,
            onBack: () => ReadingModule.showMenu(),
            onRetry: () => ReadingModule.startExercise(capturedType)
        });
    }
};

// Export for use in other modules
window.ReadingModule = ReadingModule;

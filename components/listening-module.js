// ============================================
// CHINESE MASTER - Listening Module Component
// ============================================

const ListeningModule = {
    // Current state
    currentType: null,
    currentExercise: null,
    exercises: [],
    currentIndex: 0,
    score: 0,

    // Show menu
    showMenu() {
        const menu = document.getElementById('listening-menu');
        const ex = document.getElementById('listening-exercise');
        if (menu) menu.classList.remove('hidden');
        if (ex) ex.classList.add('hidden');

        // Setup exercise type cards
        this.setupTypeCards();
    },

    // Setup type cards
    setupTypeCards() {
        // Use onclick to avoid stacking duplicate listeners on repeated calls
        document.querySelectorAll('#module-listening .exercise-type-card').forEach(card => {
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
        const exercises = (typeof ListeningData !== 'undefined' && ListeningData.getRandomByType)
            ? ListeningData.getRandomByType(type, 10)
            : [];
        this.exercises = exercises || [];
        this.currentIndex = 0;
        this.score = 0;

        if (this.exercises.length === 0) {
            Utils.showToast(`No exercises available for "${type}". Please try another type.`, 'error');
            this.showMenu();
            return;
        }

        document.getElementById('listening-menu').classList.add('hidden');
        document.getElementById('listening-exercise').classList.remove('hidden');

        // Update title
        const titles = {
            'dictation': 'Dictation Exercise',
            'comprehension': 'Comprehension Exercise',
            'minimal-pairs': 'Minimal Pairs',
            'dialogue': 'Dialogue Practice',
            'speed-listening': 'Speed Listening',
            'shadowing': 'Shadowing Practice'
        };
        document.getElementById('listening-title').textContent = titles[type] || 'Listening Exercise';

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
        document.getElementById('listening-current').textContent = this.currentIndex + 1;
        document.getElementById('listening-total').textContent = this.exercises.length;

        // Show content based on type
        const content = document.getElementById('listening-content');
        content.innerHTML = this.getExerciseHTML(exercise);

        // Setup controls
        this.setupControls(exercise);

        // Auto-speak for some types
        if (['dictation', 'shadowing'].includes(this.currentType)) {
            setTimeout(() => AudioManager.speak(exercise.chinese), 500);
        }
    },

    // Get exercise HTML
    getExerciseHTML(exercise) {
        switch(this.currentType) {
            case 'dictation':
                return this.getDictationHTML(exercise);
            case 'comprehension':
                return this.getComprehensionHTML(exercise);
            case 'minimal-pairs':
                return this.getMinimalPairsHTML(exercise);
            case 'dialogue':
                return this.getDialogueHTML(exercise);
            case 'speed-listening':
                return this.getSpeedListeningHTML(exercise);
            case 'shadowing':
                return this.getShadowingHTML(exercise);
            default:
                return '';
        }
    },

    // Dictation HTML
    getDictationHTML(exercise) {
        const dots = this._progressDots();
        return `
            <div class="dictation-stage activity-card">
                <div class="activity-prompt">
                    <span class="activity-eyebrow">✍️ Dictation</span>
                    <h2 class="activity-title">Listen &amp; type</h2>
                    <p class="activity-subtitle">Tap the play button, then type what you hear in Chinese.</p>
                    ${dots}
                </div>

                <div class="audio-hero">
                    <button class="audio-btn" id="play-audio-btn" aria-label="Play audio">🔊</button>
                    <p class="audio-hint">Plays once · Tap to replay</p>
                </div>

                ${exercise.hint ? `<div class="hint-chip"><span class="hint-icon">💡</span>Hint: ${exercise.hint}</div>` : ''}

                <div class="dictation-input-wrap">
                    <input type="text" class="dictation-input" id="dictation-input"
                        placeholder="Type the Chinese characters..."
                        autocomplete="off" autocapitalize="off" spellcheck="false" autofocus>
                </div>
                <div class="answer-feedback" id="dictation-feedback"></div>

                <div class="dictation-actions">
                    <button class="icon-btn" id="play-again-btn" type="button">🔊 Play again</button>
                    <button class="icon-btn" id="reveal-answer-btn" type="button">👁 Reveal</button>
                </div>
            </div>
        `;
    },

// Comprehension HTML
    getComprehensionHTML(exercise) {
        const dots = this._progressDots();
        const safeCn = Utils.escapeHtml(exercise.chinese);
        const safePy = Utils.escapeHtml(exercise.pinyin || '');
        return `
            <div class="activity-card">
                <div class="activity-prompt">
                    <span class="activity-eyebrow">🤔 Comprehension</span>
                    <h2 class="activity-title">Listen & answer</h2>
                    <p class="activity-subtitle">Listen to the passage, then choose the best answer for each question</p>
                    ${dots}
               </div>

                <div class="audio-hero">
                    <button class="audio-btn" id="play-audio-btn" aria-label="Play audio">🔊</button>
                    <p class="audio-hint">Tap to hear the passage</p>
               </div>

<div class="passage-hero">
                    <div class="passage-label">📜 Passage</div>
                    <p class="passage-text" lang="zh">${safeCn}</p>
                    <p class="passage-pinyin">${safePy}</p>
                </div>

                <div class="comprehension-questions">
                    ${exercise.questions.map((q, i) => `
                        <div class="comprehension-question" data-question-index="${i}">
                            <div class="q-header">
                                <span class="q-number">${i + 1}</span>
                                <span class="q-text">${Utils.escapeHtml(q.question)}</span>
                            </div>
                            <div class="comprehension-options">
                                ${q.options.map((opt, j) => `
                                    <div class="listening-option" data-question="${i}" data-option="${j}" role="button" tabindex="0">
                                        <span class="option-letter">${String.fromCharCode(65 + j)}</span>
                                        <span class="option-text">${Utils.escapeHtml(opt)}</span>
                                   </div>
                                `).join('')}
                           </div>
                       </div>
                    `).join('')}
               </div>
           </div>
        `;
    },

    // Minimal pairs HTML
    getMinimalPairsHTML(exercise) {
        // Data structure: pairs is array with [0]=word1 obj, [1]=word2 obj
        const w1 = exercise.pairs[0] || {};
        const w2 = exercise.pairs[1] || {};
        const toneMark = (t) => ({1:'ˉ',2:'´',3:'ˇ',4:'`'}[t] || '');
        // Reset played-word tracker for this exercise
        this.currentPlayedWord = null;
        const dots = this._progressDots();
        const w1Char = Utils.escapeHtml(w1.word1 || '');
        const w1Py = Utils.escapeHtml(w1.pinyin1 || '');
        const w1Mean = Utils.escapeHtml(w1.meaning1 || '');
        const w2Char = Utils.escapeHtml(w2.word2 || '');
        const w2Py = Utils.escapeHtml(w2.pinyin2 || '');
        const w2Mean = Utils.escapeHtml(w2.meaning2 || '');
        return `
            <div class="minimal-pairs-stage activity-card">
                <div class="activity-prompt">
                    <span class="activity-eyebrow">👂 Minimal Pairs</span>
                    <h2 class="activity-title">Train your ear</h2>
                    <p class="activity-subtitle">Tap a sound below, then choose which word you heard.</p>
                    ${dots}
                </div>

                <div class="minimal-pair-cards">
                    <div class="minimal-pair-card" data-word="1" role="button" tabindex="0">
                        <div class="pair-char" lang="zh">${w1Char}</div>
                        <div class="pair-py">${w1Py} ${toneMark(w1.tone1)}</div>
                        <div class="pair-meaning">${w1Mean}</div>
                    </div>
                    <div class="minimal-pair-card" data-word="2" role="button" tabindex="0">
                        <div class="pair-char" lang="zh">${w2Char}</div>
                        <div class="pair-py">${w2Py} ${toneMark(w2.tone2)}</div>
                        <div class="pair-meaning">${w2Mean}</div>
                    </div>
                </div>

                <div class="minimal-pairs-controls">
                    <button class="btn" id="play-pair-1">🔊 Word 1</button>
                    <button class="btn" id="play-pair-2">🔊 Word 2</button>
                    <button class="btn btn-primary" id="play-random">🎲 Surprise me</button>
                </div>
                <div class="answer-feedback" id="pair-feedback" style="margin-top:14px;"></div>
            </div>
        `;
    },

    // Dialogue HTML
    getDialogueHTML(exercise) {
        const dots = this._progressDots();
        const safeTitle = Utils.escapeHtml(exercise.title || 'Conversation');
        const safeMeaning = Utils.escapeHtml(exercise.meaning || 'Read and listen to the conversation.');
        return `
            <div class="activity-card">
                <div class="activity-prompt">
                    <span class="activity-eyebrow">💬 Dialogue</span>
                    <h2 class="activity-title">${safeTitle}</h2>
                    <p class="activity-subtitle">${safeMeaning}</p>
                    ${dots}
                </div>

                <div class="audio-hero" style="padding: 18px;">
                    <button class="audio-btn" id="play-audio-btn" style="width:60px;height:60px;font-size:24px;"
                        aria-label="Play full conversation">🔊</button>
                    <p class="audio-hint">Tap to hear the full conversation</p>
                </div>

                <div class="dialogue-list">
                    ${exercise.turns.map((turn, i) => `
                        <div class="dialogue-turn speaker-${Utils.escapeAttr(turn.speaker.toLowerCase())}">
                            <div class="dialogue-avatar">${Utils.escapeHtml(turn.speaker)}</div>
                            <div class="dialogue-bubble">
                                <div class="dialogue-text" lang="zh">${Utils.escapeHtml(turn.chinese)}</div>
                                <div class="dialogue-pinyin">${Utils.escapeHtml(turn.pinyin)}</div>
                                <div class="dialogue-meaning dialogue-hidden" id="meaning-${i}">${Utils.escapeHtml(turn.meaning)}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div class="dialogue-actions">
                    <button class="icon-btn" id="reveal-meanings">👁 Show meanings</button>
                    <button class="icon-btn" id="play-each-btn">🔊 Hear each line</button>
                </div>
            </div>
        `;
    },

    // Speed listening HTML
    getSpeedListeningHTML(exercise) {
        const dots = this._progressDots();
        return `
            <div class="speed-stage activity-card">
                <div class="activity-prompt">
                    <span class="activity-eyebrow">⚡ Speed Listening</span>
                    <h2 class="activity-title">Challenge yourself</h2>
                    <p class="activity-subtitle">Pick a speed, listen, and type what you hear.</p>
                    ${dots}
                </div>

                <div class="speed-readout">
                    <div class="speed-display"><span id="speed-value">1.0</span>×</div>
                    <div class="speed-label">Playback speed</div>
                </div>

                <div class="speed-presets" id="speed-presets">
                    <button class="speed-preset" data-speed="0.5">0.5× 🐢</button>
                    <button class="speed-preset" data-speed="0.8">0.8×</button>
                    <button class="speed-preset active" data-speed="1.0">1.0×</button>
                    <button class="speed-preset" data-speed="1.2">1.2×</button>
                    <button class="speed-preset" data-speed="1.5">1.5× ⚡</button>
                </div>

                <input type="range" class="speed-slider" id="speed-slider" min="0.5" max="1.5" step="0.1" value="1.0">
                <div class="speed-marks"><span>Slow</span><span>Normal</span><span>Fast</span></div>

                <div class="audio-hero" style="margin-top:24px;">
                    <button class="audio-btn" id="play-audio-btn" aria-label="Play audio">🔊</button>
                    <p class="audio-hint">Type what you hear, then check your answer</p>
                </div>

                <div class="dictation-input-wrap">
                    <input type="text" class="dictation-input" id="speed-input"
                        placeholder="Type the sentence..."
                        autocomplete="off" autocapitalize="off" spellcheck="false">
                </div>
                <div class="answer-feedback" id="dictation-feedback"></div>
            </div>
        `;
    },

    // Shadowing HTML
    getShadowingHTML(exercise) {
        const dots = this._progressDots();
        const cn = Utils.escapeHtml(exercise.chinese);
        const py = Utils.escapeHtml(exercise.pinyin || '');
        const mn = Utils.escapeHtml(exercise.meaning || '');
        return `
            <div class="shadowing-stage activity-card">
                <div class="activity-prompt">
                    <span class="activity-eyebrow">🎤 Shadowing</span>
                    <h2 class="activity-title">Listen &amp; repeat</h2>
                    <p class="activity-subtitle">Listen to the model, then repeat out loud at the same pace.</p>
                    ${dots}
                </div>

                <div class="shadowing-display">
                    <div class="sh-cn" lang="zh">${cn}</div>
                    <div class="sh-py">${py}</div>
                    <div class="sh-meaning">${mn}</div>
                </div>

                <div class="shadowing-wave paused" id="shadowing-wave">
                    <div class="wave-bar"></div>
                    <div class="wave-bar"></div>
                    <div class="wave-bar"></div>
                    <div class="wave-bar"></div>
                    <div class="wave-bar"></div>
                    <div class="wave-bar"></div>
                    <div class="wave-bar"></div>
                </div>

                <div class="speaking-actions">
                    <button class="btn btn-primary" id="start-shadowing">▶ Start shadowing</button>
                    <button class="btn" id="listen-model">🔊 Hear again</button>
                </div>
            </div>
        `;
    },

    // Setup controls
    setupControls(exercise) {
        // Play audio button
        const playBtn = document.getElementById('play-audio-btn');
        if (playBtn) {
            playBtn.onclick = () => {
                const speedEl = document.getElementById('speed-value');
                const speed = speedEl ? parseFloat(speedEl.textContent) || 1.0 : 1.0;
                const options = speed && speed !== 1.0 ? { rate: speed } : {};
                AudioManager.speak(exercise.chinese, options);
            };
        }

        // Dictation input
        const dictationInput = document.getElementById('dictation-input');
        if (dictationInput) {
            dictationInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.checkDictation();
            });
        }

        // Dictation extras: replay and reveal
        const playAgainBtn = document.getElementById('play-again-btn');
        if (playAgainBtn) {
            playAgainBtn.onclick = () => this._playCurrent();
        }

        const revealBtn = document.getElementById('reveal-answer-btn');
        if (revealBtn) {
            revealBtn.onclick = () => this._revealDictationAnswer();
        }

        // Check answer button (general purpose)
        const checkBtn = document.getElementById('check-answer-btn');
        if (checkBtn) {
            checkBtn.onclick = () => {
                if (this.currentType === 'dictation' || this.currentType === 'speed-listening') {
                    this.checkDictation();
                } else {
                    // For other types the answer is selected via clicks;
                    // simply reveal next button if an option was chosen.
                    this.showNextButton();
                }
            };
        }

        // Comprehension options
        document.querySelectorAll('.listening-option').forEach(option => {
            option.onclick = () => {
                const questionIndex = option.dataset.question;
                const optionIndex = option.dataset.option;
                this.selectOption(questionIndex, optionIndex);
            };
            option.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); option.click(); }
            });
        });

        // Minimal pairs
        document.querySelectorAll('.minimal-pair-card').forEach(option => {
            option.onclick = () => {
                this.selectPairOption(option.dataset.word);
            };
            option.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); option.click(); }
            });
        });

        const playPair1 = document.getElementById('play-pair-1');
        const playPair2 = document.getElementById('play-pair-2');
        const playRandom = document.getElementById('play-random');

        if (playPair1) {
            playPair1.onclick = () => {
                this.currentPlayedWord = 1;
                AudioManager.speak(exercise.pairs[0].word1);
            };
        }
        if (playPair2) {
            playPair2.onclick = () => {
                this.currentPlayedWord = 2;
                AudioManager.speak(exercise.pairs[1].word2);
            };
        }
        if (playRandom) {
            playRandom.onclick = () => {
                const chosen = Math.random() > 0.5 ? 1 : 2;
                this.currentPlayedWord = chosen;
                const word = chosen === 1 ? exercise.pairs[0].word1 : exercise.pairs[1].word2;
                AudioManager.speak(word);
            };
        }

        // Dialogue reveal
        const dialogueRevealBtn = document.getElementById('reveal-meanings');
        if (dialogueRevealBtn) {
            dialogueRevealBtn.onclick = () => {
                document.querySelectorAll('.dialogue-hidden').forEach(el => {
                    el.classList.remove('dialogue-hidden');
                    el.classList.add('revealed');
                });
                this.showNextButton();
            };
        }

        // Dialogue: play each turn in sequence
        const playEachBtn = document.getElementById('play-each-btn');
        if (playEachBtn) {
            playEachBtn.onclick = async () => {
                playEachBtn.disabled = true;
                for (const turn of exercise.turns) {
                    await AudioManager.speak(turn.chinese);
                    await AudioManager.delay(400);
                }
                playEachBtn.disabled = false;
            };
        }

        // Speed slider + presets
        const speedSlider = document.getElementById('speed-slider');
        const speedValue = document.getElementById('speed-value');
        const setSpeed = (v) => {
            if (speedValue) speedValue.textContent = v;
            if (speedSlider) speedSlider.value = v;
            document.querySelectorAll('.speed-preset').forEach(p => {
                p.classList.toggle('active', parseFloat(p.dataset.speed) === parseFloat(v));
            });
        };
        if (speedSlider) {
            speedSlider.oninput = (e) => setSpeed(parseFloat(e.target.value).toFixed(1));
        }
        document.querySelectorAll('.speed-preset').forEach(p => {
            p.onclick = () => setSpeed(parseFloat(p.dataset.speed).toFixed(1));
        });

        // Speed listening input - Enter to check
        const speedInput = document.getElementById('speed-input');
        if (speedInput) {
            speedInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.checkDictation();
            });
        }

        // Shadowing controls
        const startShadowing = document.getElementById('start-shadowing');
        const listenModel = document.getElementById('listen-model');

        if (startShadowing) {
            startShadowing.onclick = () => {
                this.startShadowingMode(exercise);
            };
        }
        if (listenModel) {
            listenModel.onclick = () => {
                AudioManager.speak(exercise.chinese);
            };
        }
    },

    // Check dictation
    checkDictation() {
        const input = document.getElementById('dictation-input');
        const feedback = document.getElementById('dictation-feedback');
        const exercise = this.currentExercise;

        if (!input || !exercise) return;

        const result = Utils.checkAnswer(input.value, exercise.chinese);

        if (result === 'exact') {
            feedback.innerHTML = '✅ Excellent! Spot on.';
            feedback.className = 'answer-feedback correct';
            input.classList.add('correct');
            this.score++;
            Utils.playSound('correct');
        } else if (result === 'close') {
            feedback.innerHTML = '🟡 So close — double-check tones and characters.';
            feedback.className = 'answer-feedback close';
            input.classList.add('close');
        } else {
            feedback.innerHTML = `❌ Not quite. The answer is below — study it then continue.`;
            feedback.className = 'answer-feedback incorrect';
            input.classList.add('incorrect');
            this._revealDictationAnswer();
            Utils.playSound('incorrect');
        }

        input.disabled = true;
        this.showNextButton();
    },

    // Play current exercise's audio (used by replay button)
    _playCurrent() {
        const exercise = this.currentExercise;
        if (!exercise) return;
        AudioManager.speak(exercise.chinese);
    },

    // Reveal the correct answer for dictation
    _revealDictationAnswer() {
        const exercise = this.currentExercise;
        if (!exercise) return;
        // Remove any existing reveal
        const existing = document.getElementById('dictation-reveal');
        if (existing) existing.remove();

        const wrap = document.querySelector('.dictation-stage');
        if (!wrap) return;

        const reveal = document.createElement('div');
        reveal.id = 'dictation-reveal';
        reveal.className = 'dictation-answer-reveal';
        const rCn = Utils.escapeHtml(exercise.chinese);
        const rPy = Utils.escapeHtml(exercise.pinyin || '');
        const rMn = Utils.escapeHtml(exercise.meaning || '');
        reveal.innerHTML = `
            <div class="answer-cn" lang="zh">${rCn}</div>
            <div class="answer-py">${rPy}</div>
            <div style="color: rgba(255,255,255,0.55); font-size:13px; margin-top:6px;">${rMn}</div>
        `;
        wrap.appendChild(reveal);
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

    // Select option for comprehension
    selectOption(questionIndex, optionIndex) {
        const exercise = this.currentExercise;
        const question = exercise.questions[questionIndex];
        const isCorrect = parseInt(optionIndex) === question.correct;

        // Mark all of this question's options first
        document.querySelectorAll(`[data-question="${questionIndex}"]`).forEach(opt => {
            opt.classList.remove('selected', 'correct', 'incorrect');
        });

        const selectedOption = document.querySelector(`[data-question="${questionIndex}"][data-option="${optionIndex}"]`);
        if (selectedOption) {
            selectedOption.classList.add('selected');

            if (isCorrect) {
                selectedOption.classList.add('correct');
                this.score++;
                Utils.playSound('correct');
            } else {
                selectedOption.classList.add('incorrect');
                const correctOption = document.querySelector(`[data-question="${questionIndex}"][data-option="${question.correct}"]`);
                if (correctOption) correctOption.classList.add('correct');
                Utils.playSound('incorrect');
            }
            // Disable further clicks on this question
            document.querySelectorAll(`[data-question="${questionIndex}"]`).forEach(o => {
                o.style.pointerEvents = 'none';
                o.style.cursor = 'default';
            });
        }

        // Only advance when every question has been answered
        const total = exercise.questions.length;
        const answered = new Set();
        document.querySelectorAll('.comprehension-question').forEach(q => {
            const idx = q.dataset.questionIndex;
            const sel = q.querySelector('.selected');
            if (sel) answered.add(idx);
        });
        if (answered.size === total) {
            // Brief delay so user can see the last feedback
            setTimeout(() => this.showNextButton(), 600);
        }
    },

    // Select pair option
    selectPairOption(word) {
        const played = this.currentPlayedWord;
        // Compare selection to what was actually played. If nothing was played yet, don't score.
        const isCorrect = played !== null && played !== undefined && parseInt(word) === played;

        document.querySelectorAll('.minimal-pair-card').forEach(opt => {
            opt.classList.remove('selected', 'correct', 'incorrect');
        });

        const selectedOption = document.querySelector(`.minimal-pair-card[data-word="${word}"]`);
        if (selectedOption) {
            selectedOption.classList.add('selected');

            const feedback = document.getElementById('pair-feedback');
            if (played === null || played === undefined) {
                if (feedback) {
                    feedback.textContent = '👆 Tap "Surprise me" or one of the word buttons first!';
                    feedback.className = 'answer-feedback close';
                }
                return;
            }

            if (isCorrect) {
                selectedOption.classList.add('correct');
                this.score++;
                Utils.playSound('correct');
                if (feedback) {
                    feedback.textContent = '✅ Correct! Great ear.';
                    feedback.className = 'answer-feedback correct';
                }
            } else {
                selectedOption.classList.add('incorrect');
                Utils.playSound('incorrect');
                if (feedback) {
                    feedback.textContent = '❌ Not quite — try playing again to compare.';
                    feedback.className = 'answer-feedback incorrect';
                }
            }
        }

        this.showNextButton();
    },

    // Start shadowing mode
    startShadowingMode(exercise) {
        const wave = document.getElementById('shadowing-wave');
        if (wave) wave.classList.remove('paused');

        AudioManager.speak(exercise.chinese, {
            onEnd: () => {
                setTimeout(() => {
                    if (wave) wave.classList.add('paused');
                    this.score++;
                    this.showNextButton();
                }, 1000);
            },
            onError: () => {
                if (wave) wave.classList.add('paused');
                this.score++;
                this.showNextButton();
            }
        });
    },

    // Show next button
    showNextButton() {
        const checkBtn = document.getElementById('check-answer-btn');
        const nextBtn = document.getElementById('next-exercise-btn');
        const listenBtn = document.getElementById('listen-again-btn');

        if (checkBtn) checkBtn.classList.add('hidden');
        if (nextBtn) nextBtn.classList.remove('hidden');
        if (listenBtn) listenBtn.classList.add('hidden');

        // Setup next button
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
        const result = ProgressTracker.trackExercise('listening', `listening-${this.currentType}-${Date.now()}`, this.score, totalQuestions);
        const capturedType = this.currentType;

        App.showCompletionModal({
            title: 'Listening Complete!',
            score: this.score,
            total: totalQuestions,
            percentage: result.percentage,
            xp: result.xp,
            isPerfect: result.isPerfect,
            onBack: () => ListeningModule.showMenu(),
            onRetry: () => ListeningModule.startExercise(capturedType)
        });
    }
};

// Export for use in other modules
window.ListeningModule = ListeningModule;

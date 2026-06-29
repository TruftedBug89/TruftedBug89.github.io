// ============================================
// CHINESE MASTER - Speaking Module Component
// ============================================

const SpeakingModule = {
    // Current state
    currentType: null,
    currentExercise: null,
    exercises: [],
    currentIndex: 0,
    score: 0,

    // Show menu
    showMenu() {
        const menu = document.getElementById('speaking-menu');
        const ex = document.getElementById('speaking-exercise');
        if (menu) menu.classList.remove('hidden');
        if (ex) ex.classList.add('hidden');

        // Setup exercise type cards
        this.setupTypeCards();
    },

    // Setup type cards
    setupTypeCards() {
        // Use onclick to avoid stacking duplicate listeners on repeated calls
        document.querySelectorAll('#module-speaking .exercise-type-card').forEach(card => {
            card.onclick = () => {
                const type = card.dataset.type;
                this.startExercise(type);
            };
        });
    },

    // Start exercise
    startExercise(type) {
        this.currentType = type;
        this.exercises = this.getExercises(type);
        this.currentIndex = 0;
        this.score = 0;

        document.getElementById('speaking-menu').classList.add('hidden');
        document.getElementById('speaking-exercise').classList.remove('hidden');

        // Update title
        const titles = {
            'pronunciation': 'Pronunciation Practice',
            'shadowing-practice': 'Shadowing Practice',
            'sentence-reading': 'Sentence Reading'
        };
        document.getElementById('speaking-title').textContent = titles[type] || 'Speaking Exercise';

        this.showCurrentExercise();
    },

    // Get exercises
    getExercises(type) {
        const vocab = VocabularyData.getRandom(10);
        return vocab.map(word => ({
            id: word.id,
            chinese: word.character,
            pinyin: word.pinyin,
            meaning: word.meaning,
            type: type
        }));
    },

    // Show current exercise
    showCurrentExercise() {
        const exercise = this.exercises[this.currentIndex];
        if (!exercise) {
            this.finishExercise();
            return;
        }

        this.currentExercise = exercise;

        const content = document.getElementById('speaking-content');
        content.innerHTML = this.getExerciseHTML(exercise);

        // Setup controls
        this.setupControls(exercise);
    },

    // Get exercise HTML
    getExerciseHTML(exercise) {
        switch(this.currentType) {
            case 'pronunciation':
                return this.getPronunciationHTML(exercise);
            case 'shadowing-practice':
                return this.getShadowingHTML(exercise);
            case 'sentence-reading':
                return this.getSentenceReadingHTML(exercise);
            default:
                return '';
        }
    },

    // Pronunciation HTML
    getPronunciationHTML(exercise) {
        const cn = Utils.escapeHtml(exercise.chinese);
        const py = Utils.escapeHtml(exercise.pinyin);
        const en = Utils.escapeHtml(exercise.meaning);
        return `
            <div class="speaking-stage activity-card">
                <div class="activity-prompt">
                    <span class="activity-eyebrow">🗣️ Pronunciation</span>
                    <h2 class="activity-title">Say it out loud</h2>
                    <p class="activity-subtitle">Listen, then record yourself repeating the word.</p>
                </div>

                <div class="speaking-display">
                    <div class="sp-cn" lang="zh">${cn}</div>
                    <div class="sp-py">${py}</div>
                    <div class="sp-meaning">${en}</div>
                </div>

                <div class="tone-display">
                    <div class="tone-number tone-1" data-tone="1" role="button" tabindex="0" title="First tone (high flat)" aria-label="Play first tone">
                        <span class="tone-num">1</span>
                        <span class="tone-mark"></span>
                    </div>
                    <div class="tone-number tone-2" data-tone="2" role="button" tabindex="0" title="Second tone (rising)" aria-label="Play second tone">
                        <span class="tone-num">2</span>
                        <span class="tone-mark"></span>
                    </div>
                    <div class="tone-number tone-3" data-tone="3" role="button" tabindex="0" title="Third tone (falling-rising)" aria-label="Play third tone">
                        <span class="tone-num">3</span>
                        <span class="tone-mark"></span>
                    </div>
                    <div class="tone-number tone-4" data-tone="4" role="button" tabindex="0" title="Fourth tone (falling)" aria-label="Play fourth tone">
                        <span class="tone-num">4</span>
                        <span class="tone-mark"></span>
                    </div>
                </div>

                <button class="record-btn-large" id="record-btn" aria-label="Start recording">🎤</button>
                <p class="speaking-instruction">Tap to start · auto-stops in 3s</p>

                <div class="speaking-actions">
                    <button class="btn" id="listen-model">🔊 Hear it again</button>
                </div>
            </div>
        `;
    },

    // Shadowing HTML
    getShadowingHTML(exercise) {
        const cn = Utils.escapeHtml(exercise.chinese);
        const py = Utils.escapeHtml(exercise.pinyin);
        const en = Utils.escapeHtml(exercise.meaning);
        return `
            <div class="speaking-stage activity-card">
                <div class="activity-prompt">
                    <span class="activity-eyebrow">👥 Shadowing</span>
                    <h2 class="activity-title">Match the rhythm</h2>
                    <p class="activity-subtitle">Listen and repeat in real-time to mimic the speaker.</p>
                </div>

                <div class="speaking-display">
                    <div class="sp-cn" lang="zh">${cn}</div>
                    <div class="sp-py">${py}</div>
                    <div class="sp-meaning">${en}</div>
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

                <button class="record-btn-large" id="record-btn" aria-label="Start shadowing">🎤</button>
                <p class="speaking-instruction">Tap to start · auto-stops in 3s</p>

                <div class="speaking-actions">
                    <button class="btn" id="listen-model">🔊 Hear model</button>
                </div>
            </div>
        `;
    },

    // Sentence reading HTML
    getSentenceReadingHTML(exercise) {
        const cn = Utils.escapeHtml(exercise.chinese);
        const py = Utils.escapeHtml(exercise.pinyin);
        const en = Utils.escapeHtml(exercise.meaning);
        return `
            <div class="speaking-stage activity-card">
                <div class="activity-prompt">
                    <span class="activity-eyebrow">📖 Sentence Reading</span>
                    <h2 class="activity-title">Read it aloud</h2>
                    <p class="activity-subtitle">Read the sentence clearly, paying attention to tones and flow.</p>
                </div>

                <div class="speaking-display">
                    <div class="sp-cn" lang="zh">${cn}</div>
                    <div class="sp-py">${py}</div>
                    <div class="sp-meaning">${en}</div>
                </div>

                <button class="record-btn-large" id="record-btn" aria-label="Start recording">🎤</button>
                <p class="speaking-instruction">Tap to start · auto-stops in 3s</p>

                <div class="speaking-actions">
                    <button class="btn" id="listen-model">🔊 Hear it first</button>
                </div>
            </div>
        `;
    },

    // Setup controls
    setupControls(exercise) {
        // Record button
        const recordBtn = document.getElementById('record-btn');
        if (recordBtn) {
            let isRecording = false;
            recordBtn.onclick = () => {
                if (isRecording) {
                    this.stopRecording();
                    recordBtn.classList.remove('recording');
                    isRecording = false;
                } else {
                    this.startRecording();
                    recordBtn.classList.add('recording');
                    isRecording = true;
                }
            };
        }

        // Listen model button
        const listenBtn = document.getElementById('listen-model');
        if (listenBtn) {
            listenBtn.onclick = () => {
                AudioManager.speak(exercise.chinese);
            };
        }

        // Tone numbers
        document.querySelectorAll('.tone-number').forEach(tone => {
            tone.onclick = () => {
                const toneNum = tone.dataset.tone;
                this.playTone(toneNum);
            };
            tone.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); tone.click(); }
            });
        });
    },

    // Start recording
    startRecording() {
        // Guard against double-firing from manual stop + auto-stop
        if (this._recordingHandled) return;
        this._recordingHandled = false;
        Utils.showToast('🎤 Recording... speak now!', 'info');

        const recordBtn = document.getElementById('record-btn');
        if (recordBtn) recordBtn.classList.add('recording');

        const wave = document.getElementById('shadowing-wave');
        if (wave) wave.classList.remove('paused');

        // Auto-stop after 3 seconds
        this._autoStopTimer = setTimeout(() => {
            const btn = document.getElementById('record-btn');
            if (btn) btn.classList.remove('recording');
            this.stopRecording();
        }, 3000);
    },

    // Stop recording
    stopRecording() {
        // Guard against double-firing (manual click + auto-stop)
        if (this._recordingHandled) return;
        this._recordingHandled = true;

        if (this._autoStopTimer) {
            clearTimeout(this._autoStopTimer);
            this._autoStopTimer = null;
        }

        const recordBtn = document.getElementById('record-btn');
        if (recordBtn) recordBtn.classList.remove('recording');
        const wave = document.getElementById('shadowing-wave');
        if (wave) wave.classList.add('paused');

        Utils.showToast('✅ Nice work! Recorded successfully.', 'success');
        this.score++;

        // Auto-advance after 1 second
        setTimeout(() => {
            this._recordingHandled = false;
            this.currentIndex++;
            this.showCurrentExercise();
        }, 1000);
    },

    // Play tone
    playTone(toneNum) {
        const tones = {
            '1': 'mā',
            '2': 'má',
            '3': 'mǎ',
            '4': 'mà'
        };

        AudioManager.speak(tones[toneNum] || 'ma');

        // Highlight active tone (only if tones exist on this exercise type)
        const target = document.querySelector(`[data-tone="${toneNum}"]`);
        if (target) {
            document.querySelectorAll('.tone-number').forEach(t => t.classList.remove('active'));
            target.classList.add('active');
        }
    },

    // Finish exercise
    finishExercise() {
        const totalExercises = this.exercises.length;
        const result = ProgressTracker.trackExercise('speaking', `speaking-${this.currentType}-${Date.now()}`, this.score, totalExercises);
        const capturedType = this.currentType;

        App.showCompletionModal({
            title: 'Speaking Practice Complete!',
            score: this.score,
            total: totalExercises,
            percentage: result.percentage,
            xp: result.xp,
            isPerfect: result.isPerfect,
            backLabel: 'Back to Menu',
            retryLabel: 'Practice Again',
            onBack: () => SpeakingModule.showMenu(),
            onRetry: () => SpeakingModule.startExercise(capturedType)
        });
    }
};

// Export for use in other modules
window.SpeakingModule = SpeakingModule;

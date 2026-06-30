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

        if (typeof InkAnimations !== 'undefined' && InkAnimations.exerciseCardReveal) {
            InkAnimations.exerciseCardReveal(menu);
        }

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

        if (typeof InkAnimations !== 'undefined' && InkAnimations.slideInPanel) {
            InkAnimations.slideInPanel(document.getElementById('speaking-exercise'));
        }

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

        const scoreEl = document.createElement('div');
        scoreEl.className = 'speaking-score-display';
        scoreEl.id = 'speaking-score-display';
        scoreEl.innerHTML = '<span class="score-label">Score:</span> <span class="score-value" id="speaking-score-value">' + this.score + '</span>';
        content.prepend(scoreEl);

        if (typeof InkAnimations !== 'undefined' && InkAnimations.slideInPanel) {
            InkAnimations.slideInPanel(content);
        }

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

                <div class="tone-tips-card activity-card" style="margin-top:16px;">
                    <div class="section-title">👅 Mouth & Tongue Tips</div>
                    ${this._getToneTipsHTML()}
                </div>

                ${this._getToneSandhi(exercise) ? `
                <div class="tone-sandhi-card activity-card" style="margin-top:12px;">
                    <div class="section-title">🔄 Tone Sandhi Rule</div>
                    <p>${Utils.escapeHtml(this._getToneSandhi(exercise))}</p>
                </div>
                ` : ''}

                <div class="native-tip-card activity-card" style="margin-top:12px;">
                    <div class="section-title">💡 Native Speaker Tip</div>
                    <p>${Utils.escapeHtml(this._getNativeSpeakerTip(exercise))}</p>
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

                <div class="rhythm-card activity-card" style="margin-top:16px;">
                    <div class="section-title">📊 Rhythm & Pauses</div>
                    <div class="rhythm-bars">
                        ${this._getRhythmHTML(exercise)}
                    </div>
                    <p class="rhythm-note" style="margin-top:8px;font-style:italic;">Place natural pauses every 2-3 characters. Speak each group as a rhythmic unit, not word-by-word.</p>
                </div>

                <div class="native-tip-card activity-card" style="margin-top:12px;">
                    <div class="section-title">💡 Native Speaker Tip</div>
                    <p>${Utils.escapeHtml(this._getNativeSpeakerTip(exercise))}</p>
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
        if (typeof InkAnimations !== 'undefined' && InkAnimations.entranceStagger) {
            const toneContainer = document.querySelector('.tone-display');
            if (toneContainer) InkAnimations.entranceStagger(toneContainer, {stagger: 0.12});
        }

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

        if (typeof gsap !== 'undefined' && recordBtn) {
            gsap.to(recordBtn, {
                scale: 1.08,
                duration: 0.4,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut'
            });
        }

        this._animateWaveform(wave, true);

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

        if (typeof gsap !== 'undefined' && recordBtn) {
            gsap.killTweensOf(recordBtn);
            gsap.to(recordBtn, { scale: 1, duration: 0.2 });
        }
        this._animateWaveform(wave, false);

        Utils.showToast('✅ Nice work! Recorded successfully.', 'success');
        this.score++;

        const scoreEl = document.getElementById('speaking-score-value');
        if (scoreEl) {
            scoreEl.textContent = this.score;
            if (typeof InkAnimations !== 'undefined' && InkAnimations.counterBounce) {
                InkAnimations.counterBounce(scoreEl);
            }
        }

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
    },

    _getToneTips() {
        return [
            { tone: 1, name: 'First Tone (ˉ)', mouth: 'Keep your mouth relaxed, tongue flat. The pitch stays high and steady, like singing a note.', tongue: 'Tongue rests naturally, slightly behind lower teeth. Keep it still throughout.' },
            { tone: 2, name: 'Second Tone (ˊ)', mouth: 'Start with mouth slightly open, then lift your chin slightly as the pitch rises.', tongue: 'Tongue starts at mid-position, rises slightly as pitch goes up. Think of asking a question in English.' },
            { tone: 3, name: 'Third Tone (ˇ)', mouth: 'Lower your chin and jaw first, then rise. The voice dips low then comes back up.', tongue: 'Tongue drops low then rises. This is the longest tone — take your time with the dip.' },
            { tone: 4, name: 'Fourth Tone (ˋ)', mouth: 'Start with mouth open, then close firmly. The pitch drops sharply, like giving a command.', tongue: 'Tongue starts high and retracts slightly as pitch falls. Think of an emphatic "No!" in English.' }
        ];
    },

    _getToneTipsHTML() {
        return this._getToneTips().map(tip =>
            '<div class="tone-tip-item">' +
                '<strong>' + Utils.escapeHtml(tip.name) + ':</strong>' +
                '<p>' + Utils.escapeHtml(tip.mouth) + '</p>' +
                '<p class="tongue-note" style="font-style:italic;">' + Utils.escapeHtml(tip.tongue) + '</p>' +
            '</div>'
        ).join('');
    },

    _getToneSandhi(exercise) {
        const pinyin = exercise.pinyin;
        const syllables = pinyin.split(' ');
        for (let i = 0; i < syllables.length - 1; i++) {
            if (/[ǎěǐǒǔǚ]/.test(syllables[i]) && /[ǎěǐǒǔǚ]/.test(syllables[i + 1])) {
                return 'Tone Sandhi Rule: When two 3rd tones appear together, the first 3rd tone changes to a 2nd tone (rising). For example, "nǐ hǎo" is actually pronounced "ní hǎo" (like a 2nd tone followed by a 3rd tone). Listen carefully — the first syllable sounds like the 2nd tone!';
            }
        }
        return null;
    },

    _getNativeSpeakerTip(exercise) {
        return 'Record yourself and compare with the model audio. Focus on one tone at a time — most learners try to perfect all tones simultaneously, which slows progress. Master the 4th tone first (it comes naturally to English speakers), then the 1st tone (steady pitch). The 3rd tone is the hardest — practice it last.';
    },

    _getRhythmBreakdown(exercise) {
        const syllables = exercise.pinyin.split(' ');
        const chars = [...exercise.chinese];
        return { syllables, chars };
    },

    _getRhythmHTML(exercise) {
        const rb = this._getRhythmBreakdown(exercise);
        return rb.syllables.map((syl, i) =>
            '<div class="rhythm-syllable">' +
                '<span class="rs-char" lang="zh">' + Utils.escapeHtml(rb.chars[i] || '') + '</span>' +
                '<span class="rs-pinyin">' + Utils.escapeHtml(syl) + '</span>' +
            '</div>'
        ).join('');
    },

    _animateWaveform(waveEl, active) {
        if (typeof gsap === 'undefined' || !waveEl) return;
        const bars = waveEl.querySelectorAll('.wave-bar');
        if (!bars.length) return;
        if (active) {
            bars.forEach((bar, i) => {
                gsap.to(bar, {
                    scaleY: gsap.utils.random(0.3, 1),
                    duration: gsap.utils.random(0.3, 0.7),
                    repeat: -1,
                    yoyo: true,
                    ease: 'power1.inOut',
                    delay: i * 0.08
                });
            });
        } else {
            bars.forEach(bar => gsap.killTweensOf(bar));
            gsap.to(bars, { scaleY: 0.2, duration: 0.3, ease: 'power2.out' });
        }
    }
};

// Export for use in other modules
window.SpeakingModule = SpeakingModule;

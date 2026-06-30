// ============================================
// CHINESE MASTER - Speaking Module Component
// Reference tool: listen & repeat on your own
// ============================================

const SpeakingModule = {
    // Current state
    currentType: null,
    currentExercise: null,
    exercises: [],
    currentIndex: 0,

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

        // Progress indicator
        const progress = document.createElement('div');
        progress.className = 'speaking-progress';
        progress.innerHTML = '<span class="progress-label">' + (this.currentIndex + 1) + ' / ' + this.exercises.length + '</span>';
        content.prepend(progress);

        if (typeof InkAnimations !== 'undefined' && InkAnimations.slideInPanel) {
            InkAnimations.slideInPanel(content);
        }

        // Auto-speak for pronunciation & shadowing
        if (['pronunciation', 'shadowing-practice'].includes(this.currentType)) {
            setTimeout(() => AudioManager.speak(exercise.chinese), 500);
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
                    <p class="activity-subtitle">Listen to the model, then speak the word yourself.</p>
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

                <div class="speaking-actions">
                    <button class="btn" id="listen-model">🔊 Hear it again</button>
                    <button class="btn btn-primary" id="next-speaking">Next →</button>
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
                    <p class="activity-subtitle">Listen closely, then repeat at the same pace as the speaker.</p>
                </div>

                <div class="speaking-display">
                    <div class="sp-cn" lang="zh">${cn}</div>
                    <div class="sp-py">${py}</div>
                    <div class="sp-meaning">${en}</div>
                </div>

                <div class="native-tip-card activity-card" style="margin-top:12px;">
                    <div class="section-title">💡 Shadowing Tip</div>
                    <p>Focus on matching the rhythm and intonation of the native speaker. Pay attention to how tones connect between characters — the pinyin shows you the exact contours to follow.</p>
                </div>

                <div class="speaking-actions">
                    <button class="btn" id="listen-model">🔊 Hear model</button>
                    <button class="btn btn-primary" id="next-speaking">Next →</button>
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

                <div class="speaking-actions">
                    <button class="btn" id="listen-model">🔊 Hear it first</button>
                    <button class="btn btn-primary" id="next-speaking">Next →</button>
                </div>
            </div>
        `;
    },

    // Setup controls
    setupControls(exercise) {
        // Listen model button
        const listenBtn = document.getElementById('listen-model');
        if (listenBtn) {
            listenBtn.onclick = () => {
                AudioManager.speak(exercise.chinese);
            };
        }

        // Next button
        const nextBtn = document.getElementById('next-speaking');
        if (nextBtn) {
            nextBtn.onclick = () => {
                this.currentIndex++;
                this.showCurrentExercise();
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

    // Play tone
    playTone(toneNum) {
        const tones = {
            '1': 'mā',
            '2': 'má',
            '3': 'mǎ',
            '4': 'mà'
        };

        AudioManager.speak(tones[toneNum] || 'ma');

        // Highlight active tone
        const target = document.querySelector(`[data-tone="${toneNum}"]`);
        if (target) {
            document.querySelectorAll('.tone-number').forEach(t => t.classList.remove('active'));
            target.classList.add('active');
        }
    },

    // Finish exercise
    finishExercise() {
        const totalExercises = this.exercises.length;
        const capturedType = this.currentType;

        App.showCompletionModal({
            title: 'Speaking Practice Complete!',
            score: totalExercises,
            total: totalExercises,
            percentage: 100,
            xp: 5,
            isPerfect: false,
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
        return 'Listen to the model audio, then try to match it yourself. Focus on one tone at a time — most learners try to perfect all tones simultaneously, which slows progress. Master the 4th tone first (it comes naturally to English speakers), then the 1st tone (steady pitch). The 3rd tone is the hardest — practice it last.';
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
    }
};

// Export for use in other modules
window.SpeakingModule = SpeakingModule;

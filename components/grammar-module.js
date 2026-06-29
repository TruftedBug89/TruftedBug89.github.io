// ============================================
// CHINESE MASTER - Grammar Module Component
// ============================================

const GrammarModule = {
    // Current state
    currentLesson: null,
    currentPractice: null,
    practiceIndex: 0,
    score: 0,

    // Initialize
    init() {
        this.showMenu();
    },

    // Show menu
    showMenu() {
        const menu = document.getElementById('grammar-menu');
        const lesson = document.getElementById('grammar-lesson');
        const practice = document.getElementById('grammar-practice');
        if (menu) menu.classList.remove('hidden');
        if (lesson) lesson.classList.add('hidden');
        if (practice) practice.classList.add('hidden');

        // Populate lessons list
        this.populateLessonsList();
    },

    // Populate lessons list
    populateLessonsList() {
        const list = document.getElementById('grammar-lessons-list');
        const userData = StorageManager.getUserData();
        const completedSet = new Set(
            (userData?.progress?.grammar?.completed || [])
                .map(id => id.split('-')[1]) // exerciseId = `grammar-${lessonId}-${ts}`
                .filter(Boolean)
        );

        list.innerHTML = GrammarData.lessons.map((lesson, i) => {
            const isCompleted = completedSet.has(lesson.id);
            const safeId = Utils.escapeAttr(lesson.id);
            const safeTitle = Utils.escapeHtml(lesson.title);
            const safeTitleMeaning = Utils.escapeHtml(lesson.titleMeaning);
            const safeLevel = Utils.escapeHtml(lesson.level);
            return `
                <div class="grammar-lesson-item ${isCompleted ? 'completed' : ''}" data-id="${safeId}" role="button" tabindex="0">
                    <div class="grammar-lesson-number">${isCompleted ? '✓' : (i + 1)}</div>
                    <div class="grammar-lesson-info">
                        <h3>${safeTitle}</h3>
                        <p>${safeTitleMeaning} · ${safeLevel}</p>
                    </div>
                    <div class="grammar-lesson-arrow">›</div>
                </div>
            `;
        }).join('');

        // Use onclick to avoid stacking duplicate listeners
        document.querySelectorAll('.grammar-lesson-item').forEach(item => {
            item.onclick = () => {
                const id = item.dataset.id;
                this.showLesson(id);
            };
            item.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); item.click(); }
            });
        });
    },

    // Show lesson
    showLesson(lessonId) {
        const lesson = GrammarData.getById(lessonId);
        if (!lesson) return;

        this.currentLesson = lesson;

        const menu = document.getElementById('grammar-menu');
        const lessonEl = document.getElementById('grammar-lesson');
        if (menu) menu.classList.add('hidden');
        if (lessonEl) lessonEl.classList.remove('hidden');

        document.getElementById('grammar-lesson-title').textContent = `${lesson.title} — ${lesson.titleMeaning}`;

        const content = document.getElementById('grammar-content');
        const examples = lesson.examples || [];
        const safeTitle = Utils.escapeHtml(lesson.title);
        const safeTitleMeaning = Utils.escapeHtml(lesson.titleMeaning);
        const safeLevel = Utils.escapeHtml(lesson.level || 'Grammar');
        const safePattern = Utils.escapeHtml(lesson.pattern);
        const safeExplanation = Utils.escapeHtml(lesson.explanation);
        content.innerHTML = `
            <div class="grammar-lesson-card activity-card">
                <div class="activity-prompt">
                    <span class="activity-eyebrow">📐 ${safeLevel}</span>
                    <h2 class="activity-title">${safeTitle}</h2>
                    <p class="activity-subtitle">${safeTitleMeaning}</p>
                </div>

                <div class="grammar-pattern-card">
                    <div class="pattern-label">Pattern 结构</div>
                    <div class="pattern-text" lang="zh">${safePattern}</div>
                </div>

                <div class="grammar-explanation">
                    <div class="section-title">📖 Explanation</div>
                    <p>${safeExplanation}</p>
                </div>

                ${examples.length ? `
                    <div class="grammar-examples">
                        <div class="section-title">💬 Examples</div>
                        ${examples.map(ex => `
                            <div class="grammar-example-item">
                                <div class="ex-cn" lang="zh">${Utils.escapeHtml(ex.chinese)}</div>
                                <div class="ex-py">${Utils.escapeHtml(ex.pinyin)}</div>
                                <div class="ex-meaning">${Utils.escapeHtml(ex.meaning)}</div>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}

                <div class="dialogue-actions" style="margin-top:18px;">
                    <button class="btn" id="speak-grammar">🔊 Hear all examples</button>
                    <button class="btn btn-primary" id="grammar-practice-btn">✏️ Practice this pattern</button>
                </div>
            </div>
        `;

        // Setup speak button
        const speakBtn = document.getElementById('speak-grammar');
        if (speakBtn) {
            speakBtn.onclick = async () => {
                speakBtn.disabled = true;
                for (let i = 0; i < lesson.examples.length; i++) {
                    await AudioManager.speak(lesson.examples[i].chinese);
                    await AudioManager.delay(600);
                }
                speakBtn.disabled = false;
            };
        }

        // Setup practice button
        const practiceBtn = document.getElementById('grammar-practice-btn');
        if (practiceBtn) {
            practiceBtn.onclick = () => {
                this.startPractice(lesson);
            };
        }
    },

    // Start practice
    startPractice(lesson) {
        this.currentPractice = lesson.practice;
        this.practiceIndex = 0;
        this.score = 0;

        const lessonEl = document.getElementById('grammar-lesson');
        const practiceEl = document.getElementById('grammar-practice');
        if (lessonEl) lessonEl.classList.add('hidden');
        if (practiceEl) practiceEl.classList.remove('hidden');

        document.getElementById('grammar-total').textContent = lesson.practice.length;

        this.showCurrentPractice();
    },

// Show current practice
    showCurrentPractice() {
        const practice = this.currentPractice[this.practiceIndex];
        if (!practice) {
            this.finishPractice();
            return;
        }

        document.getElementById('grammar-current').textContent = this.practiceIndex + 1;

        const content = document.getElementById('grammar-practice-content');
        const safeQuestion = Utils.escapeHtml(practice.question);
        content.innerHTML = `
            <div class="grammar-practice-stage activity-card">
                <div class="grammar-question-card">
                    <div class="q-eyebrow">Question ${this.practiceIndex + 1} of ${this.currentPractice.length}</div>
                    <div class="q-cn" lang="zh">${safeQuestion}</div>
                </div>
                <div class="grammar-options">
                    ${practice.options.map((opt, i) => `
                        <div class="grammar-option" data-index="${i}" role="button" tabindex="0">
                            <span class="cn-text" lang="zh">${Utils.escapeHtml(opt)}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="answer-feedback" id="grammar-feedback" style="margin-top:14px;"></div>
            </div>
        `;

        // Setup option handlers
        document.querySelectorAll('.grammar-option').forEach(option => {
            option.onclick = () => {
                const index = parseInt(option.dataset.index);
                this.checkGrammarAnswer(index, practice);
            };
            option.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); option.click(); }
            });
        });
    },

    // Check grammar answer
    checkGrammarAnswer(index, practice) {
        const selectedOption = practice.options[index];
        const isCorrect = selectedOption === practice.answer;
        const feedback = document.getElementById('grammar-feedback');

        const options = document.querySelectorAll('.grammar-option');
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
            if (practice.options[i] === practice.answer) {
                opt.classList.add('correct');
            }
        });

        if (feedback) {
            feedback.textContent = isCorrect ? '✅ Correct!' : '❌ The correct answer is highlighted.';
            feedback.className = 'answer-feedback ' + (isCorrect ? 'correct' : 'incorrect');
        }

        this.showNextGrammarButton();
    },

    // Show next grammar button
    showNextGrammarButton() {
        const checkBtn = document.getElementById('check-grammar-btn');
        const nextBtn = document.getElementById('next-grammar-btn');

        if (checkBtn) checkBtn.classList.add('hidden');
        if (nextBtn) nextBtn.classList.remove('hidden');

        if (nextBtn) {
            nextBtn.onclick = () => {
                this.practiceIndex++;
                this.showCurrentPractice();
            };
        }
    },

    // Finish practice
    finishPractice() {
        const totalQuestions = this.currentPractice.length;
        const result = ProgressTracker.trackExercise('grammar', `grammar-${this.currentLesson.id}-${Date.now()}`, this.score, totalQuestions);

        App.showCompletionModal({
            title: 'Grammar Practice Complete!',
            score: this.score,
            total: totalQuestions,
            percentage: result.percentage,
            xp: result.xp,
            isPerfect: result.isPerfect,
            onBack: () => GrammarModule.showMenu(),
            onRetry: () => GrammarModule.startPractice(GrammarModule.currentLesson)
        });
    }
};

// Export for use in other modules
window.GrammarModule = GrammarModule;

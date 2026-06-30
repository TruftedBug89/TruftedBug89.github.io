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

        if (typeof InkAnimations !== 'undefined' && InkAnimations.entranceStagger) {
            const list = document.getElementById('grammar-lessons-list');
            if (list) InkAnimations.entranceStagger(list);
        }
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

        if (typeof gsap !== 'undefined') {
            document.querySelectorAll('.grammar-lesson-item').forEach(item => {
                item.addEventListener('mouseenter', () => {
                    gsap.to(item, { scale: 1.03, duration: 0.25, ease: 'power2.out' });
                });
                item.addEventListener('mouseleave', () => {
                    gsap.to(item, { scale: 1, duration: 0.25, ease: 'power2.out' });
                });
            });
        }
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

        if (typeof InkAnimations !== 'undefined' && InkAnimations.slideInPanel) {
            InkAnimations.slideInPanel(lessonEl);
        }

        document.getElementById('grammar-lesson-title').textContent = `${lesson.title} — ${lesson.titleMeaning}`;

        const content = document.getElementById('grammar-content');
        const examples = lesson.examples || [];
        const safeTitle = Utils.escapeHtml(lesson.title);
        const safeTitleMeaning = Utils.escapeHtml(lesson.titleMeaning);
        const safeLevel = Utils.escapeHtml(lesson.level || 'Grammar');
        const safePattern = Utils.escapeHtml(lesson.pattern);
        const safeExplanation = Utils.escapeHtml(lesson.explanation);
        const freq = this._getUsageFrequency(lesson);
        content.innerHTML = `
            <div class="grammar-lesson-card activity-card">
                <div class="activity-prompt">
                    <span class="activity-eyebrow">📐 ${safeLevel} · <span class="freq-badge">${freq.icon} ${Utils.escapeHtml(freq.label)}</span></span>
                    <h2 class="activity-title">${safeTitle}</h2>
                    <p class="activity-subtitle">${safeTitleMeaning}</p>
                </div>

                <div class="grammar-pattern-card">
                    <div class="pattern-label">Pattern 结构</div>
                    <div class="pattern-text" lang="zh">${safePattern}</div>
                </div>

                <div class="pattern-breakdown">
                    <div class="section-title">🔍 Pattern Breakdown</div>
                    <div class="breakdown-items">
                        ${this._getPatternBreakdown(lesson).map(part => `
                            <div class="breakdown-chip ${part.type}">
                                <span class="bd-text" ${part.type === 'structure' ? 'lang="zh"' : ''}>${Utils.escapeHtml(part.text)}</span>
                                <span class="bd-label">${Utils.escapeHtml(part.label)}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="grammar-explanation">
                    <div class="section-title">📖 Explanation</div>
                    <p>${safeExplanation}</p>
                </div>

                <div class="common-mistakes">
                    <div class="section-title">⚠️ Common Mistake</div>
                    <p>${Utils.escapeHtml(this._getCommonMistakes(lesson))}</p>
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

        if (typeof InkAnimations !== 'undefined' && InkAnimations.entranceStagger) {
            const examplesContainer = lessonEl.querySelector('.grammar-examples');
            if (examplesContainer && examplesContainer.children.length) {
                InkAnimations.entranceStagger(examplesContainer, {delay: 0.3, stagger: 0.1});
            }
        }

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
            if (isCorrect) {
                feedback.innerHTML = '<span class="fb-icon">✅</span> Correct! Great job.';
                feedback.className = 'answer-feedback correct';
                const selectedEl = options[index];
                if (selectedEl && typeof InkAnimations !== 'undefined' && InkAnimations.feedbackPulse) {
                    InkAnimations.feedbackPulse(selectedEl, 'correct');
                }
            } else {
                feedback.innerHTML = '<span class="fb-icon">❌</span> The correct answer is <strong>' + Utils.escapeHtml(practice.answer) + '</strong>.';
                feedback.className = 'answer-feedback incorrect';
                const explanation = this._getPracticeExplanation(practice);
                if (explanation) {
                    feedback.innerHTML += '<p class="fb-explain">' + Utils.escapeHtml(explanation) + '</p>';
                }
                const selectedEl = options[index];
                if (selectedEl && typeof InkAnimations !== 'undefined' && InkAnimations.shakeElement) {
                    InkAnimations.shakeElement(selectedEl);
                }
            }
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

        if (typeof InkAnimations !== 'undefined' && InkAnimations.scorePopup) {
            setTimeout(() => {
                const scoreDisplay = document.querySelector('.completion-score');
                if (scoreDisplay) InkAnimations.scorePopup(scoreDisplay, this.score);
            }, 300);
        }

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
    },

    _getPatternBreakdown(lesson) {
        const parts = lesson.pattern.split(' + ');
        return parts.map(part => {
            const hasChinese = /[\u4e00-\u9fff]/.test(part);
            return {
                text: part,
                type: hasChinese ? 'structure' : 'placeholder',
                label: hasChinese ? 'Function Word' : 'Slot'
            };
        });
    },

    _getCommonMistakes(lesson) {
        const mistakes = {
            'g001': 'Don\'t confuse 是...的 with regular 是 for description. Regular 是 describes what something IS, while 是...的 emphasizes time, place, or manner of an action.',
            'g002': 'Don\'t use 了 after stative verbs (是, 在, 有, 喜欢). "我是了学生" is incorrect — stative verbs do not take 了.',
            'g003': '过 indicates past experience (at least once). 了 marks simple completion. "我去过中国" = I have been to China (experience); "我去了中国" = I went to China (recent action).',
            'g004': '着 marks a continuous state, not an action in progress. Use 在 for ongoing actions. "门开着" = door is open (state); "我在开门呢" = I\'m opening the door (action).',
            'g005': 'The 呢 at the end is optional but common. Using only 在 is also correct. Don\'t use 了 with 在...呢 — they conflict.',
            'g006': '要...了 and 快要...了 both mean "about to." Adding 快 emphasizes imminence.',
            'g007': '想 means "want to" or "would like to" — softer than 要 (going to/want). "我想喝水" is polite; "我要喝水" is more direct/demanding.',
            'g008': '可以 is for permission or general ability. 会 is for learned skills. "我可以游泳" = I may swim (allowed); "我会游泳" = I can swim (learned skill).',
            'g009': '会 can mean "will" (future) or "can" (learned skill). Context determines meaning. "明天会下雨" = will rain; "我会说中文" = can speak Chinese.',
            'g010': 'Don\'t confuse 得 (complement) with 的 (possessive) or 地 (adverbial). All three are pronounced "de" but have different uses.',
            'g011': '的 can be dropped with close relationships. "我妈妈" is more natural than "我的妈妈" for "my mom."',
            'g012': '地 (de) transforms adjectives into adverbs. In spoken Chinese, many speakers use 的 instead, but in writing, 地 is correct.',
            'g013': 'The 把 structure is mandatory when the object is affected by the action and there is a result. English has no direct equivalent.',
            'g014': '被 can often be replaced by 叫 or 让 in spoken Chinese. "钱包被偷了" = "钱包叫/让小偷偷了" (informal).',
            'g015': 'In negative comparisons, use 没有 (not as...as), NOT 不比. "我不比他高" means "I am not taller" (implying similar height). "我没有他高" means "I am not as tall."',
            'g016': '更 is common only in comparisons. For standalone degree, use 很. "他更高" is valid only when comparing; "他很高" is simple description.',
            'g017': '不比 (not more than) implies equality, while 没有 implies A < B. They are different!',
            'g018': 'The 所以 is often dropped in spoken Chinese. "因为下雨，我不去了" is perfectly natural.',
            'g019': 'Chinese uses BOTH 虽然 AND 但是 together. English uses "Although... , ..." (no "but"). This is a common English-speaker mistake.',
            'g020': '就 makes the result sound immediate and certain. Without it, it sounds conditional. Always include 就 in the result clause.',
            'g021': '不但 can be replaced by 不仅 (more formal). Both require 而且. For negative "not only...but also," use 不但不...反而.',
            'g022': 'This structure requires two different verbs. Both actions must be real actions, not states.',
            'g023': '再 is for future sequences. For past sequences, use 又. "昨天我先吃饭，又去上班了" (past).',
            'g024': 'Both adjectives must be compatible (both positive or both negative). Don\'t mix: "又大又不甜" sounds unnatural — use 但是 instead.',
            'g025': 'The two 越 parts must agree in subject. "我越学越有意思" — correct if "I find it more interesting"; different from "我越学他越教" (the more I study, the more he teaches).'
        };
        return mistakes[lesson.id] || 'Pay attention to the word order: ' + lesson.pattern + '. Practice forming several sentences using this structure.';
    },

    _getPracticeExplanation(practice) {
        return 'This pattern uses "' + practice.answer + '" to form the correct grammatical structure.';
    },

    _getUsageFrequency(lesson) {
        const freq = {
            'HSK 1': { label: 'Essential', icon: '🔵' },
            'HSK 2': { label: 'Very Common', icon: '🟢' },
            'HSK 3': { label: 'Very Common', icon: '🟢' },
            'HSK 4': { label: 'Common', icon: '🟡' },
            'HSK 5': { label: 'Formal', icon: '🟠' },
            'HSK 6': { label: 'Literary/Formal', icon: '🔴' }
        };
        return freq[lesson.level] || { label: 'Common', icon: '🟡' };
    }
};

// Export for use in other modules
window.GrammarModule = GrammarModule;

// ============================================
// CHINESE MASTER - Tone Practice System
// Learn and practice Chinese tones
// ============================================

const TonePractice = {
    // Tone definitions
    tones: [
        { number: 1, name: 'First Tone', description: 'High level tone (ā)', pitch: '55', symbol: 'ˉ', color: '#d4432d' },
        { number: 2, name: 'Second Tone', description: 'Rising tone (á)', pitch: '35', symbol: 'ˊ', color: '#d4952b' },
        { number: 3, name: 'Third Tone', description: 'Dipping tone (ǎ)', pitch: '214', symbol: 'ˇ', color: '#5aab8a' },
        { number: 4, name: 'Fourth Tone', description: 'Falling tone (à)', pitch: '51', symbol: 'ˋ', color: '#6095c0' },
        { number: 5, name: 'Neutral Tone', description: 'Light tone (a)', pitch: '0', symbol: '·', color: '#9b59b6' }
    ],

    // Tone practice pairs (minimal pairs)
    tonePairs: [
        { id: 'tp001', pinyin1: 'mā', char1: '妈', meaning1: 'mother', tone1: 1, pinyin2: 'mǎ', char2: '马', meaning2: 'horse', tone2: 3 },
        { id: 'tp002', pinyin1: 'mā', char1: '妈', meaning1: 'mother', tone1: 1, pinyin2: 'mà', char2: '骂', meaning2: 'scold', tone2: 4 },
        { id: 'tp003', pinyin1: 'mǎ', char1: '马', meaning1: 'horse', tone1: 3, pinyin2: 'mà', char2: '骂', meaning2: 'scold', tone2: 4 },
        { id: 'tp004', pinyin1: 'bā', char1: '八', meaning1: 'eight', tone1: 1, pinyin2: 'bá', char2: '拔', meaning2: 'pull', tone2: 2 },
        { id: 'tp005', pinyin1: 'bā', char1: '八', meaning1: 'eight', tone1: 1, pinyin2: 'bǎ', char2: '把', meaning2: 'handle', tone2: 3 },
        { id: 'tp006', pinyin1: 'bā', char1: '八', meaning1: 'eight', tone1: 1, pinyin2: 'bà', char2: '爸', meaning2: 'father', tone2: 4 },
        { id: 'tp007', pinyin1: 'tāng', char1: '汤', meaning1: 'soup', tone1: 1, pinyin2: 'táng', char2: '糖', meaning2: 'sugar', tone2: 2 },
        { id: 'tp008', pinyin1: 'tāng', char1: '汤', meaning1: 'soup', tone1: 1, pinyin2: 'tǎng', char2: '躺', meaning2: 'lie down', tone2: 3 },
        { id: 'tp009', pinyin1: 'tāng', char1: '汤', meaning1: 'soup', tone1: 1, pinyin2: 'tàng', char2: '烫', meaning2: 'hot/burn', tone2: 4 },
        { id: 'tp010', pinyin1: 'shī', char1: '师', meaning1: 'teacher', tone1: 1, pinyin2: 'shí', char2: '十', meaning2: 'ten', tone2: 2 },
        { id: 'tp011', pinyin1: 'shī', char1: '师', meaning1: 'teacher', tone1: 1, pinyin2: 'shǐ', char2: '使', meaning2: 'use', tone2: 3 },
        { id: 'tp012', pinyin1: 'shī', char1: '师', meaning1: 'teacher', tone1: 1, pinyin2: 'shì', char2: '是', meaning2: 'is', tone2: 4 },
        { id: 'tp013', pinyin1: 'māo', char1: '猫', meaning1: 'cat', tone1: 1, pinyin2: 'máo', char2: '毛', meaning2: 'hair', tone2: 2 },
        { id: 'tp014', pinyin1: 'māo', char1: '猫', meaning1: 'cat', tone1: 1, pinyin2: 'mǎo', char2: '卯', meaning2: 'rabbit (zodiac)', tone2: 3 },
        { id: 'tp015', pinyin1: 'māo', char1: '猫', meaning1: 'cat', tone1: 1, pinyin2: 'mào', char2: '帽', meaning2: 'hat', tone2: 4 },
        { id: 'tp016', pinyin1: 'fēi', char1: '飞', meaning1: 'fly', tone1: 1, pinyin2: 'féi', char2: '肥', meaning2: 'fat', tone2: 2 },
        { id: 'tp017', pinyin1: 'fēi', char1: '飞', meaning1: 'fly', tone1: 1, pinyin2: 'fěi', char2: '匪', meaning2: 'bandit', tone2: 3 },
        { id: 'tp018', pinyin1: 'fēi', char1: '飞', meaning1: 'fly', tone1: 1, pinyin2: 'fèi', char2: '费', meaning2: 'cost', tone2: 4 },
        { id: 'tp019', pinyin1: 'dā', char1: '搭', meaning1: 'build', tone1: 1, pinyin2: 'dá', char2: '答', meaning2: 'answer', tone2: 2 },
        { id: 'tp020', pinyin1: 'dā', char1: '搭', meaning1: 'build', tone1: 1, pinyin2: 'dǎ', char2: '打', meaning2: 'hit', tone2: 3 },
        { id: 'tp021', pinyin1: 'dā', char1: '搭', meaning1: 'build', tone1: 1, pinyin2: 'dà', char2: '大', meaning2: 'big', tone2: 4 },
        { id: 'tp022', pinyin1: 'gē', char1: '哥', meaning1: 'brother', tone1: 1, pinyin2: 'gé', char2: '格', meaning2: 'grid', tone2: 2 },
        { id: 'tp023', pinyin1: 'gē', char1: '哥', meaning1: 'brother', tone1: 1, pinyin2: 'gě', char2: '葛', meaning2: 'vine', tone2: 3 },
        { id: 'tp024', pinyin1: 'gē', char1: '哥', meaning1: 'brother', tone1: 1, pinyin2: 'gè', char2: '个', meaning2: 'measure word', tone2: 4 },
        { id: 'tp025', pinyin1: 'huā', char1: '花', meaning1: 'flower', tone1: 1, pinyin2: 'huá', char2: '华', meaning2: 'China', tone2: 2 },
        { id: 'tp026', pinyin1: 'huā', char1: '花', meaning1: 'flower', tone1: 1, pinyin2: 'huà', char2: '话', meaning2: 'speech', tone2: 4 },
        { id: 'tp027', pinyin1: 'chī', char1: '吃', meaning1: 'eat', tone1: 1, pinyin2: 'chí', char2: '迟', meaning2: 'late', tone2: 2 },
        { id: 'tp028', pinyin1: 'chī', char1: '吃', meaning1: 'eat', tone1: 1, pinyin2: 'chǐ', char2: '尺', meaning2: 'ruler', tone2: 3 },
        { id: 'tp029', pinyin1: 'chī', char1: '吃', meaning1: 'eat', tone1: 1, pinyin2: 'chì', char2: '翅', meaning2: 'wing', tone2: 4 },
        { id: 'tp030', pinyin1: 'rén', char1: '人', meaning1: 'person', tone1: 2, pinyin2: 'rèn', char2: '认', meaning2: 'recognize', tone2: 4 }
    ],

    // Get tone by number
    getTone(number) {
        return this.tones.find(t => t.number === number);
    },

    // Get random tone pair
    getRandomPair() {
        return this.tonePairs[Math.floor(Math.random() * this.tonePairs.length)];
    },

    // Generate tone quiz
    generateQuiz(count = 10) {
        const pairs = Utils.randomItems(this.tonePairs, count);
        return pairs.map(pair => {
            const showFirst = Math.random() > 0.5;
            return {
                question: showFirst ? pair.char1 : pair.char2,
                pinyin: showFirst ? pair.pinyin1 : pair.pinyin2,
                correctTone: showFirst ? pair.tone1 : pair.tone2,
                options: [pair.tone1, pair.tone2],
                pair: pair
            };
        });
    },

    // Check tone answer
    checkAnswer(pinyin, selectedTone) {
        const toneNumber = this.getToneFromPinyin(pinyin);
        return toneNumber === selectedTone;
    },

    // Get tone number from pinyin
    getToneFromPinyin(pinyin) {
        const toneMarks = {
            'ā': 1, 'á': 2, 'ǎ': 3, 'à': 4,
            'ē': 1, 'é': 2, 'ě': 3, 'è': 4,
            'ī': 1, 'í': 2, 'ǐ': 3, 'ì': 4,
            'ō': 1, 'ó': 2, 'ǒ': 3, 'ò': 4,
            'ū': 1, 'ú': 2, 'ǔ': 3, 'ù': 4,
            'ǖ': 1, 'ǘ': 2, 'ǚ': 3, 'ǜ': 4
        };

        for (const char of pinyin) {
            if (toneMarks[char]) {
                return toneMarks[char];
            }
        }

        return 5; // Neutral tone
    },

    // Add tone marks to pinyin
    addToneMarks(pinyin, tone) {
        const toneMap = {
            'a': ['ā', 'á', 'ǎ', 'à'],
            'e': ['ē', 'é', 'ě', 'è'],
            'i': ['ī', 'í', 'ǐ', 'ì'],
            'o': ['ō', 'ó', 'ǒ', 'ò'],
            'u': ['ū', 'ú', 'ǔ', 'ù'],
            'v': ['ǖ', 'ǘ', 'ǚ', 'ǜ']
        };

        // Find the main vowel
        const vowels = ['a', 'e', 'i', 'o', 'u', 'v'];
        for (const v of vowels) {
            if (pinyin.includes(v)) {
                return pinyin.replace(v, toneMap[v][tone - 1]);
            }
        }

        return pinyin;
    },

    // Render tone practice UI
    render(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const quiz = this.generateQuiz(10);
        var self = this;
        
        container.innerHTML = `
            <div class="tone-practice">
                <h2>\uD83C\uDFAF Tone Practice</h2>
                <p>Listen and identify the tone</p>
                
                <div class="tone-quiz">
                    ${quiz.map((q, i) => `
                        <div class="tone-question" data-index="${i}">
                            <div class="tone-character">${q.question}</div>
                            <div class="tone-pinyin">${q.pinyin}</div>
                            <div class="tone-options">
                                ${self.tones.slice(0, 4).map(t => `
                                    <button class="tone-btn" data-tone="${t.number}" data-correct="${q.correctTone}" style="background: ${t.color}">
                                        ${t.number}
                                    </button>
                                `).join('')}
                            </div>
                            <div class="tone-feedback hidden"></div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        container.querySelectorAll('.tone-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var selected = parseInt(this.getAttribute('data-tone'));
                var correct = parseInt(this.getAttribute('data-correct'));
                var feedback = this.closest('.tone-question').querySelector('.tone-feedback');
                var isCorrect = selected === correct;
                feedback.textContent = isCorrect ? '\u2705 Correct!' : '\u274C Wrong — tone ' + correct;
                feedback.className = 'tone-feedback ' + (isCorrect ? 'correct' : 'incorrect');
                feedback.style.display = 'block';
                var siblings = this.parentElement.querySelectorAll('.tone-btn');
                siblings.forEach(function(s) { s.disabled = true; });
            });
        });
    }
};

window.TonePractice = TonePractice;

// ============================================
// CHINESE MASTER — Placement Test Question Bank
// HSK 1-5 adaptive placement questions
// ============================================

const PlacementBank = {
    // ~14 questions per level, mixed categories
    questions: {
        1: [
            { id: 'p1_01', level: 1, category: 'vocabulary', type: 'mc', question: 'What does "你好" mean?', options: ['Hello', 'Thank you', 'Goodbye', 'Sorry'], answer: 'Hello' },
            { id: 'p1_02', level: 1, category: 'pinyin', type: 'mc', question: 'What is the pinyin for "我"?', options: ['wǒ', 'nǐ', 'tā', 'lǐ'], answer: 'wǒ' },
            { id: 'p1_03', level: 1, category: 'vocabulary', type: 'mc', question: 'What does "谢谢" mean?', options: ['Hello', 'Thank you', 'Please', 'Sorry'], answer: 'Thank you' },
            { id: 'p1_04', level: 1, category: 'fill', type: 'mc', question: '我是___。 (I am a student.)', options: ['学生', '老师', '医生', '朋友'], answer: '学生' },
            { id: 'p1_05', level: 1, category: 'vocabulary', type: 'mc', question: 'What does "吃" mean?', options: ['to eat', 'to drink', 'to see', 'to go'], answer: 'to eat' },
            { id: 'p1_06', level: 1, category: 'pinyin', type: 'mc', question: 'What is the pinyin for "中国"?', options: ['zhōngguó', 'běijīng', 'shànghǎi', 'tiānjīn'], answer: 'zhōngguó' },
            { id: 'p1_07', level: 1, category: 'fill', type: 'mc', question: '他___老师。 (He is a teacher.)', options: ['是', '有', '在', '去'], answer: '是' },
            { id: 'p1_08', level: 1, category: 'vocabulary', type: 'mc', question: 'What does "今天" mean?', options: ['today', 'tomorrow', 'yesterday', 'now'], answer: 'today' },
            { id: 'p1_09', level: 1, category: 'numbers', type: 'mc', question: 'What number is "五"?', options: ['5', '2', '8', '10'], answer: '5' },
            { id: 'p1_10', level: 1, category: 'fill', type: 'mc', question: '我___水。 (I drink water.)', options: ['喝', '吃', '看', '写'], answer: '喝' },
            { id: 'p1_11', level: 1, category: 'vocabulary', type: 'mc', question: 'What does "再见" mean?', options: ['Goodbye', 'Hello', 'Thank you', 'Sorry'], answer: 'Goodbye' },
            { id: 'p1_12', level: 1, category: 'pinyin', type: 'mc', question: 'What is the pinyin for "爱"?', options: ['ài', 'hǎo', 'mā', 'bà'], answer: 'ài' },
            { id: 'p1_13', level: 1, category: 'fill', type: 'mc', question: '你___什么名字？ (What is your name?)', options: ['叫', '是', '有', '在'], answer: '叫' },
            { id: 'p1_14', level: 1, category: 'vocabulary', type: 'mc', question: 'What does "大" mean?', options: ['big', 'small', 'good', 'bad'], answer: 'big' }
        ],
        2: [
            { id: 'p2_01', level: 2, category: 'vocabulary', type: 'mc', question: 'What does "帮忙" mean?', options: ['to help', 'to work', 'to ask', 'to wait'], answer: 'to help' },
            { id: 'p2_02', level: 2, category: 'fill', type: 'mc', question: '我在___中文。 (I am learning Chinese.)', options: ['学', '看', '听', '写'], answer: '学' },
            { id: 'p2_03', level: 2, category: 'grammar', type: 'mc', question: 'Choose the correct sentence:', options: ['我现在很忙', '我很现在忙', '现在我忙很', '忙很我现在'], answer: '我现在很忙' },
            { id: 'p2_04', level: 2, category: 'vocabulary', type: 'mc', question: 'What does "准备" mean?', options: ['to prepare', 'to finish', 'to start', 'to stop'], answer: 'to prepare' },
            { id: 'p2_05', level: 2, category: 'pinyin', type: 'mc', question: 'What is the pinyin for "知道"?', options: ['zhīdào', 'zhǎodào', 'zǒudào', 'kàndào'], answer: 'zhīdào' },
            { id: 'p2_06', level: 2, category: 'fill', type: 'mc', question: '他___北京人。 (He is from Beijing.)', options: ['是', '有', '在', '去'], answer: '是' },
            { id: 'p2_07', level: 2, category: 'grammar', type: 'mc', question: 'Complete: 我___看过这部电影。', options: ['没有', '不', '别', '没'], answer: '没有' },
            { id: 'p2_08', level: 2, category: 'vocabulary', type: 'mc', question: 'What does "发现" mean?', options: ['to discover', 'to invent', 'to create', 'to lose'], answer: 'to discover' },
            { id: 'p2_09', level: 2, category: 'fill', type: 'mc', question: '请你___一下。 (Please wait a moment.)', options: ['等', '看', '说', '听'], answer: '等' },
            { id: 'p2_10', level: 2, category: 'pinyin', type: 'mc', question: 'What is the pinyin for "喜欢"?', options: ['xǐhuan', 'xīfú', 'xīwàng', 'xīnxiǎng'], answer: 'xǐhuan' },
            { id: 'p2_11', level: 2, category: 'grammar', type: 'mc', question: 'Complete: 这个字___写？', options: ['怎么', '什么', '哪', '谁'], answer: '怎么' },
            { id: 'p2_12', level: 2, category: 'vocabulary', type: 'mc', question: 'What does "搬家" mean?', options: ['to move house', 'to clean house', 'to buy house', 'to sell house'], answer: 'to move house' },
            { id: 'p2_13', level: 2, category: 'fill', type: 'mc', question: '我们___一起去吧。 (Let\'s go together.)', options: ['一起', '一个', '一直', '一样'], answer: '一起' },
            { id: 'p2_14', level: 2, category: 'vocabulary', type: 'mc', question: 'What does "有时候" mean?', options: ['sometimes', 'always', 'never', 'often'], answer: 'sometimes' }
        ],
        3: [
            { id: 'p3_01', level: 3, category: 'grammar', type: 'mc', question: 'Complete: 我是___来的。 (I came by ___.)', options: ['坐飞机', '坐飞机的', '飞机', '坐的飞机'], answer: '坐飞机' },
            { id: 'p3_02', level: 3, category: 'vocabulary', type: 'mc', question: 'What does "经验" mean?', options: ['experience', 'experiment', 'expert', 'expense'], answer: 'experience' },
            { id: 'p3_03', level: 3, category: 'fill', type: 'mc', question: '他___了，所以没来上课。 (He was sick, so he didn\'t come to class.)', options: ['生病', '生气', '生活', '生产'], answer: '生病' },
            { id: 'p3_04', level: 3, category: 'grammar', type: 'mc', question: 'Choose the correct sentence:', options: ['我把书还了', '我书把还了', '书我把还了', '我还了把书'], answer: '我把书还了' },
            { id: 'p3_05', level: 3, category: 'vocabulary', type: 'mc', question: 'What does "关系" mean?', options: ['relationship', 'connection', 'both A and B', 'neither'], answer: 'both A and B' },
            { id: 'p3_06', level: 3, category: 'pinyin', type: 'mc', question: 'What is the pinyin for "重要"?', options: ['zhòngyào', 'zhōngyào', 'zhòngyāo', 'zhòngyao'], answer: 'zhòngyào' },
            { id: 'p3_07', level: 3, category: 'fill', type: 'mc', question: '这个问题___回答。 (This question is easy to answer.)', options: ['容易', '方便', '简单', '快'], answer: '容易' },
            { id: 'p3_08', level: 3, category: 'grammar', type: 'mc', question: 'Complete: 他比我___。', options: ['高', '高的', '很高', '是高'], answer: '高' },
            { id: 'p3_09', level: 3, category: 'vocabulary', type: 'mc', question: 'What does "保护" mean?', options: ['to protect', 'to protest', 'to produce', 'to provide'], answer: 'to protect' },
            { id: 'p3_10', level: 3, category: 'fill', type: 'mc', question: '我___他明天会来。 (I think he will come tomorrow.)', options: ['觉得', '决定', '解决', '了解'], answer: '觉得' },
            { id: 'p3_11', level: 3, category: 'grammar', type: 'mc', question: 'Complete: 你___来___来？ (Are you coming or not?)', options: ['是...还是', '又...又', '一边...一边', '不但...而且'], answer: '是...还是' },
            { id: 'p3_12', level: 3, category: 'vocabulary', type: 'mc', question: 'What does "影响" mean?', options: ['to influence', 'to inform', 'to perform', 'to reform'], answer: 'to influence' },
            { id: 'p3_13', level: 3, category: 'fill', type: 'mc', question: '老师___我们认真听课。 (The teacher asks us to listen carefully.)', options: ['要求', '需要', '必须', '应该'], answer: '要求' },
            { id: 'p3_14', level: 3, category: 'pinyin', type: 'mc', question: 'What is the pinyin for "准备"?', options: ['zhǔnbèi', 'zhùnbèi', 'zhǔnbēi', 'zhǔnbèig'], answer: 'zhǔnbèi' }
        ],
        4: [
            { id: 'p4_01', level: 4, category: 'vocabulary', type: 'mc', question: 'What does "深刻" mean?', options: ['profound', 'shallow', 'deeply', 'dark'], answer: 'profound' },
            { id: 'p4_02', level: 4, category: 'grammar', type: 'mc', question: 'Complete: ___努力，___成功了。', options: ['虽然...但是', '因为...所以', '不但...而且', '无论...都'], answer: '因为...所以' },
            { id: 'p4_03', level: 4, category: 'fill', type: 'mc', question: '他的发言引起了___的讨论。 (His speech sparked a lively discussion.)', options: ['激烈', '强烈', '剧烈', '猛烈'], answer: '激烈' },
            { id: 'p4_04', level: 4, category: 'vocabulary', type: 'mc', question: 'What does "适应" mean?', options: ['to adapt', 'to adopt', 'to adjust', 'to accept'], answer: 'to adapt' },
            { id: 'p4_05', level: 4, category: 'pinyin', type: 'mc', question: 'What is the pinyin for "继续"?', options: ['jìxù', 'jīxù', 'jìxū', 'jìxv'], answer: 'jìxù' },
            { id: 'p4_06', level: 4, category: 'grammar', type: 'mc', question: 'Choose the correct sentence:', options: ['即使下雨，我也要去', '即使下雨，我也去要', '即使下雨，我要也去', '下雨即使，我也要去'], answer: '即使下雨，我也要去' },
            { id: 'p4_07', level: 4, category: 'fill', type: 'mc', question: '我们应该___这个机会。 (We should treasure this opportunity.)', options: ['珍惜', '珍贵', '珍宝', '珍重'], answer: '珍惜' },
            { id: 'p4_08', level: 4, category: 'vocabulary', type: 'mc', question: 'What does "保证" mean?', options: ['to guarantee', 'to protect', 'to confirm', 'to promise'], answer: 'to guarantee' },
            { id: 'p4_09', level: 4, category: 'grammar', type: 'mc', question: 'Complete: ___你同意___不同意，都要告诉我。', options: ['无论...还是', '不但...而且', '一边...一边', '既然...就'], answer: '无论...还是' },
            { id: 'p4_10', level: 4, category: 'fill', type: 'mc', question: '这个问题值得___。 (This problem is worth discussing.)', options: ['讨论', '讨论的', '被讨论', '讨论过'], answer: '讨论' },
            { id: 'p4_11', level: 4, category: 'vocabulary', type: 'mc', question: 'What does "承担" mean?', options: ['to bear responsibility', 'to take away', 'to carry up', 'to undertake a task'], answer: 'to bear responsibility' },
            { id: 'p4_12', level: 4, category: 'pinyin', type: 'mc', question: 'What is the pinyin for "严格"?', options: ['yángé', 'yāngé', 'yàngé', 'yángě'], answer: 'yángé' },
            { id: 'p4_13', level: 4, category: 'fill', type: 'mc', question: '他的想法跟我的___不同。 (His idea is completely different from mine.)', options: ['完全', '完成', '完美', '完整'], answer: '完全' },
            { id: 'p4_14', level: 4, category: 'grammar', type: 'mc', question: 'Complete: 他不但聪明，___很努力。', options: ['而且', '并且', '还', '也'], answer: '而且' }
        ],
        5: [
            { id: 'p5_01', level: 5, category: 'vocabulary', type: 'mc', question: 'What does "阐述" mean?', options: ['to expound', 'to explain briefly', 'to argue', 'to complain'], answer: 'to expound' },
            { id: 'p5_02', level: 5, category: 'grammar', type: 'mc', question: 'Complete: ___改革开放，中国经济迅速发展。', options: ['随着', '伴随', '跟随', '顺着'], answer: '随着' },
            { id: 'p5_03', level: 5, category: 'fill', type: 'mc', question: '这部电影___了社会的现实问题。 (This movie reflects real social issues.)', options: ['反映', '反应', '返照', '暴露'], answer: '反映' },
            { id: 'p5_04', level: 5, category: 'vocabulary', type: 'mc', question: 'What does "妥协" mean?', options: ['to compromise', 'to promise', 'to compose', 'to propose'], answer: 'to compromise' },
            { id: 'p5_05', level: 5, category: 'pinyin', type: 'mc', question: 'What is the pinyin for "概括"?', options: ['gàikuò', 'gàikuo', 'kàikuò', 'gàigkuò'], answer: 'gàikuò' },
            { id: 'p5_06', level: 5, category: 'grammar', type: 'mc', question: 'Choose the correct sentence:', options: ['与其等待机会，不如创造机会', '与其等待机会，不如机会创造', '等待与其机会，不如创造机会', '与其机会等待，不如创造机会'], answer: '与其等待机会，不如创造机会' },
            { id: 'p5_07', level: 5, category: 'fill', type: 'mc', question: '他对此事___了看法。 (He expressed his view on this matter.)', options: ['发表', '发布', '发明', '发生'], answer: '发表' },
            { id: 'p5_08', level: 5, category: 'vocabulary', type: 'mc', question: 'What does "洞察" mean?', options: ['to gain insight', 'to see clearly', 'to look into', 'to observe'], answer: 'to gain insight' },
            { id: 'p5_09', level: 5, category: 'grammar', type: 'mc', question: 'Complete: ___困难多大，他都不会放弃。', options: ['无论', '不管', '尽管', '即使'], answer: '无论' },
            { id: 'p5_10', level: 5, category: 'fill', type: 'mc', question: '这个理论___了广泛的讨论。 (This theory sparked extensive discussion.)', options: ['引发', '引起', '发生', '爆发'], answer: '引发' },
            { id: 'p5_11', level: 5, category: 'vocabulary', type: 'mc', question: 'What does "底蕴" mean?', options: ['rich cultural heritage', 'bottom layer', 'deep meaning', 'hidden truth'], answer: 'rich cultural heritage' },
            { id: 'p5_12', level: 5, category: 'pinyin', type: 'mc', question: 'What is the pinyin for "勉强"?', options: ['miǎnqiǎng', 'miànqiǎng', 'miǎnqiáng', 'miǎnqiang'], answer: 'miǎnqiǎng' },
            { id: 'p5_13', level: 5, category: 'fill', type: 'mc', question: '他的观点___了大多数人的意见。 (His viewpoint represents the majority opinion.)', options: ['代表', '代替', '代换', '表达'], answer: '代表' },
            { id: 'p5_14', level: 5, category: 'grammar', type: 'mc', question: 'Complete: ___经济的发展，人们的生活水平不断提高。', options: ['随着', '伴随', '通过', '根据'], answer: '随着' }
        ]
    },

    // HSK level metadata for result display
    levels: {
        1: { name: 'HSK 1', title: 'Beginner', desc: 'You can understand basic words and simple phrases.', color: '#10b981' },
        2: { name: 'HSK 2', title: 'Elementary', desc: 'You can communicate in simple, routine tasks.', color: '#06b6d4' },
        3: { name: 'HSK 3', title: 'Intermediate', desc: 'You can handle most daily conversations.', color: '#a78bfa' },
        4: { name: 'HSK 4', title: 'Upper-Intermediate', desc: 'You can discuss a wide range of topics fluently.', color: '#f59e0b' },
        5: { name: 'HSK 5', title: 'Advanced', desc: 'You can read newspapers, watch films, and give speeches.', color: '#ff6b6b' }
    },

    // Get questions for a specific level
    getQuestions(level) {
        return this.questions[level] || [];
    },

    // Get a random question from a level (avoiding used IDs)
    getRandomQuestion(level, usedIds) {
        var pool = this.questions[level];
        if (!pool || pool.length === 0) return null;
        var available = pool.filter(function(q) { return usedIds.indexOf(q.id) === -1; });
        if (available.length === 0) {
            // All used — allow repeats from this level
            available = pool;
        }
        return available[Math.floor(Math.random() * available.length)];
    },

    // Get total question count across all levels
    getTotalCount() {
        var total = 0;
        for (var k in this.questions) {
            total += this.questions[k].length;
        }
        return total;
    }
};

window.PlacementBank = PlacementBank;

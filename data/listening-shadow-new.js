// ============================================
// CHINESE MASTER - Shadowing New Exercises
// 30 HSK 1-3 shadowing practice exercises
// ============================================

(function() {
    var items = [
        {
            id: 'lshx_001',
            type: 'shadowing',
            difficulty: 'easy',
            chinese: '今天很热。',
            pinyin: 'jīntiān hěn rè.',
            meaning: 'Today is very hot.',
            breakdown: [
                { word: '今天', pinyin: 'jīntiān', meaning: 'today' },
                { word: '很', pinyin: 'hěn', meaning: 'very' },
                { word: '热', pinyin: 'rè', meaning: 'hot' }
            ]
        },
        {
            id: 'lshx_002',
            type: 'shadowing',
            difficulty: 'easy',
            chinese: '我去学校。',
            pinyin: 'wǒ qù xuéxiào.',
            meaning: 'I go to school.',
            breakdown: [
                { word: '我', pinyin: 'wǒ', meaning: 'I / me' },
                { word: '去', pinyin: 'qù', meaning: 'to go' },
                { word: '学校', pinyin: 'xuéxiào', meaning: 'school' }
            ]
        },
        {
            id: 'lshx_003',
            type: 'shadowing',
            difficulty: 'easy',
            chinese: '这是书。',
            pinyin: 'zhè shì shū.',
            meaning: 'This is a book.',
            breakdown: [
                { word: '这', pinyin: 'zhè', meaning: 'this' },
                { word: '是', pinyin: 'shì', meaning: 'is / to be' },
                { word: '书', pinyin: 'shū', meaning: 'book' }
            ]
        },
        {
            id: 'lshx_004',
            type: 'shadowing',
            difficulty: 'easy',
            chinese: '妈妈做饭。',
            pinyin: 'māma zuò fàn.',
            meaning: 'Mom cooks.',
            breakdown: [
                { word: '妈妈', pinyin: 'māma', meaning: 'mom' },
                { word: '做', pinyin: 'zuò', meaning: 'to do / to make' },
                { word: '饭', pinyin: 'fàn', meaning: 'meal / food' }
            ]
        },
        {
            id: 'lshx_005',
            type: 'shadowing',
            difficulty: 'easy',
            chinese: '请喝茶。',
            pinyin: 'qǐng hē chá.',
            meaning: 'Please have some tea.',
            breakdown: [
                { word: '请', pinyin: 'qǐng', meaning: 'please' },
                { word: '喝', pinyin: 'hē', meaning: 'to drink' },
                { word: '茶', pinyin: 'chá', meaning: 'tea' }
            ]
        },
        {
            id: 'lshx_006',
            type: 'shadowing',
            difficulty: 'easy',
            chinese: '他有姐姐。',
            pinyin: 'tā yǒu jiějie.',
            meaning: 'He has an older sister.',
            breakdown: [
                { word: '他', pinyin: 'tā', meaning: 'he' },
                { word: '有', pinyin: 'yǒu', meaning: 'to have' },
                { word: '姐姐', pinyin: 'jiějie', meaning: 'older sister' }
            ]
        },
        {
            id: 'lshx_007',
            type: 'shadowing',
            difficulty: 'easy',
            chinese: '外面下雨。',
            pinyin: 'wàimiàn xià yǔ.',
            meaning: 'It is raining outside.',
            breakdown: [
                { word: '外面', pinyin: 'wàimiàn', meaning: 'outside' },
                { word: '下', pinyin: 'xià', meaning: 'to fall (rain/snow)' },
                { word: '雨', pinyin: 'yǔ', meaning: 'rain' }
            ]
        },
        {
            id: 'lshx_008',
            type: 'shadowing',
            difficulty: 'easy',
            chinese: '北京很美。',
            pinyin: 'běijīng hěn měi.',
            meaning: 'Beijing is very beautiful.',
            breakdown: [
                { word: '北京', pinyin: 'běijīng', meaning: 'Beijing' },
                { word: '很', pinyin: 'hěn', meaning: 'very' },
                { word: '美', pinyin: 'měi', meaning: 'beautiful' }
            ]
        },
        {
            id: 'lshx_009',
            type: 'shadowing',
            difficulty: 'easy',
            chinese: '谢谢老师。',
            pinyin: 'xièxiè lǎoshī.',
            meaning: 'Thank you, teacher.',
            breakdown: [
                { word: '谢谢', pinyin: 'xièxiè', meaning: 'thank you' },
                { word: '老师', pinyin: 'lǎoshī', meaning: 'teacher' }
            ]
        },
        {
            id: 'lshx_010',
            type: 'shadowing',
            difficulty: 'easy',
            chinese: '我喜欢花。',
            pinyin: 'wǒ xǐhuān huā.',
            meaning: 'I like flowers.',
            breakdown: [
                { word: '我', pinyin: 'wǒ', meaning: 'I / me' },
                { word: '喜欢', pinyin: 'xǐhuān', meaning: 'to like' },
                { word: '花', pinyin: 'huā', meaning: 'flower' }
            ]
        },
        {
            id: 'lshx_011',
            type: 'shadowing',
            difficulty: 'easy',
            chinese: '汽车来了。',
            pinyin: 'qìchē lái le.',
            meaning: 'The car has arrived.',
            breakdown: [
                { word: '汽车', pinyin: 'qìchē', meaning: 'car / automobile' },
                { word: '来', pinyin: 'lái', meaning: 'to come' },
                { word: '了', pinyin: 'le', meaning: 'change-of-state particle' }
            ]
        },
        {
            id: 'lshx_012',
            type: 'shadowing',
            difficulty: 'easy',
            chinese: '住在上海。',
            pinyin: 'zhù zài shànghǎi.',
            meaning: 'Live in Shanghai.',
            breakdown: [
                { word: '住', pinyin: 'zhù', meaning: 'to live' },
                { word: '在', pinyin: 'zài', meaning: 'at / in' },
                { word: '上海', pinyin: 'shànghǎi', meaning: 'Shanghai' }
            ]
        },
        {
            id: 'lshx_013',
            type: 'shadowing',
            difficulty: 'easy',
            chinese: '苹果好吃。',
            pinyin: 'píngguǒ hǎo chī.',
            meaning: 'Apples are delicious.',
            breakdown: [
                { word: '苹果', pinyin: 'píngguǒ', meaning: 'apple' },
                { word: '好', pinyin: 'hǎo', meaning: 'good' },
                { word: '吃', pinyin: 'chī', meaning: 'to eat' },
                { word: '好吃', pinyin: 'hǎochī', meaning: 'delicious' }
            ]
        },
        {
            id: 'lshx_014',
            type: 'shadowing',
            difficulty: 'easy',
            chinese: '晚上看书。',
            pinyin: 'wǎnshang kàn shū.',
            meaning: 'Read books in the evening.',
            breakdown: [
                { word: '晚上', pinyin: 'wǎnshang', meaning: 'evening' },
                { word: '看', pinyin: 'kàn', meaning: 'to look / to read' },
                { word: '书', pinyin: 'shū', meaning: 'book' }
            ]
        },
        {
            id: 'lshx_015',
            type: 'shadowing',
            difficulty: 'easy',
            chinese: '他是医生。',
            pinyin: 'tā shì yīshēng.',
            meaning: 'He is a doctor.',
            breakdown: [
                { word: '他', pinyin: 'tā', meaning: 'he' },
                { word: '是', pinyin: 'shì', meaning: 'is / to be' },
                { word: '医生', pinyin: 'yīshēng', meaning: 'doctor' }
            ]
        },
        {
            id: 'lshx_016',
            type: 'shadowing',
            difficulty: 'medium',
            chinese: '坐在椅子上面。',
            pinyin: 'zuò zài yǐzi shàngmiàn.',
            meaning: 'Sit on the chair.',
            breakdown: [
                { word: '坐', pinyin: 'zuò', meaning: 'to sit' },
                { word: '在', pinyin: 'zài', meaning: 'at / on' },
                { word: '椅子', pinyin: 'yǐzi', meaning: 'chair' },
                { word: '上面', pinyin: 'shàngmiàn', meaning: 'on top of' }
            ]
        },
        {
            id: 'lshx_017',
            type: 'shadowing',
            difficulty: 'medium',
            chinese: '商店九点开门。',
            pinyin: 'shāngdiàn jiǔ diǎn kāi mén.',
            meaning: 'The shop opens at nine o\'clock.',
            breakdown: [
                { word: '商店', pinyin: 'shāngdiàn', meaning: 'shop / store' },
                { word: '九点', pinyin: 'jiǔ diǎn', meaning: 'nine o\'clock' },
                { word: '开门', pinyin: 'kāi mén', meaning: 'to open (for business)' }
            ]
        },
        {
            id: 'lshx_018',
            type: 'shadowing',
            difficulty: 'medium',
            chinese: '孩子在家睡觉。',
            pinyin: 'háizi zài jiā shuìjiào.',
            meaning: 'The child is sleeping at home.',
            breakdown: [
                { word: '孩子', pinyin: 'háizi', meaning: 'child' },
                { word: '在家', pinyin: 'zài jiā', meaning: 'at home' },
                { word: '睡觉', pinyin: 'shuìjiào', meaning: 'to sleep' }
            ]
        },
        {
            id: 'lshx_019',
            type: 'shadowing',
            difficulty: 'medium',
            chinese: '中午吃饺子。',
            pinyin: 'zhōngwǔ chī jiǎozi.',
            meaning: 'Eat dumplings at noon.',
            breakdown: [
                { word: '中午', pinyin: 'zhōngwǔ', meaning: 'noon' },
                { word: '吃', pinyin: 'chī', meaning: 'to eat' },
                { word: '饺子', pinyin: 'jiǎozi', meaning: 'dumplings' }
            ]
        },
        {
            id: 'lshx_020',
            type: 'shadowing',
            difficulty: 'medium',
            chinese: '出租车在前面。',
            pinyin: 'chūzūchē zài qiánmiàn.',
            meaning: 'The taxi is in front.',
            breakdown: [
                { word: '出租车', pinyin: 'chūzūchē', meaning: 'taxi' },
                { word: '在', pinyin: 'zài', meaning: 'at / in' },
                { word: '前面', pinyin: 'qiánmiàn', meaning: 'in front' }
            ]
        },
        {
            id: 'lshx_021',
            type: 'shadowing',
            difficulty: 'medium',
            chinese: '这里不能抽烟。',
            pinyin: 'zhèlǐ bù néng chōuyān.',
            meaning: 'No smoking here.',
            breakdown: [
                { word: '这里', pinyin: 'zhèlǐ', meaning: 'here' },
                { word: '不能', pinyin: 'bù néng', meaning: 'cannot' },
                { word: '抽烟', pinyin: 'chōuyān', meaning: 'to smoke' }
            ]
        },
        {
            id: 'lshx_022',
            type: 'shadowing',
            difficulty: 'medium',
            chinese: '周末去看电影。',
            pinyin: 'zhōumò qù kàn diànyǐng.',
            meaning: 'Go watch a movie on the weekend.',
            breakdown: [
                { word: '周末', pinyin: 'zhōumò', meaning: 'weekend' },
                { word: '去', pinyin: 'qù', meaning: 'to go' },
                { word: '看', pinyin: 'kàn', meaning: 'to watch' },
                { word: '电影', pinyin: 'diànyǐng', meaning: 'movie' }
            ]
        },
        {
            id: 'lshx_023',
            type: 'shadowing',
            difficulty: 'medium',
            chinese: '春天花儿开了。',
            pinyin: 'chūntiān huār kāi le.',
            meaning: 'The flowers bloomed in spring.',
            breakdown: [
                { word: '春天', pinyin: 'chūntiān', meaning: 'spring' },
                { word: '花儿', pinyin: 'huār', meaning: 'flower' },
                { word: '开', pinyin: 'kāi', meaning: 'to open / to bloom' },
                { word: '了', pinyin: 'le', meaning: 'change-of-state particle' }
            ]
        },
        {
            id: 'lshx_024',
            type: 'shadowing',
            difficulty: 'medium',
            chinese: '我想买这件。',
            pinyin: 'wǒ xiǎng mǎi zhè jiàn.',
            meaning: 'I want to buy this one.',
            breakdown: [
                { word: '我', pinyin: 'wǒ', meaning: 'I / me' },
                { word: '想', pinyin: 'xiǎng', meaning: 'to want / to think' },
                { word: '买', pinyin: 'mǎi', meaning: 'to buy' },
                { word: '这', pinyin: 'zhè', meaning: 'this' },
                { word: '件', pinyin: 'jiàn', meaning: 'measure word for clothes' }
            ]
        },
        {
            id: 'lshx_025',
            type: 'shadowing',
            difficulty: 'medium',
            chinese: '前面路口左转。',
            pinyin: 'qiánmiàn lùkǒu zuǒ zhuǎn.',
            meaning: 'Turn left at the intersection ahead.',
            breakdown: [
                { word: '前面', pinyin: 'qiánmiàn', meaning: 'ahead / in front' },
                { word: '路口', pinyin: 'lùkǒu', meaning: 'intersection' },
                { word: '左转', pinyin: 'zuǒ zhuǎn', meaning: 'turn left' }
            ]
        },
        {
            id: 'lshx_026',
            type: 'shadowing',
            difficulty: 'medium',
            chinese: '学习中文很快乐。',
            pinyin: 'xuéxí zhōngwén hěn kuàilè.',
            meaning: 'Learning Chinese is very joyful.',
            breakdown: [
                { word: '学习', pinyin: 'xuéxí', meaning: 'to learn / to study' },
                { word: '中文', pinyin: 'zhōngwén', meaning: 'Chinese language' },
                { word: '快乐', pinyin: 'kuàilè', meaning: 'happy / joyful' }
            ]
        },
        {
            id: 'lshx_027',
            type: 'shadowing',
            difficulty: 'medium',
            chinese: '早上七点起床。',
            pinyin: 'zǎoshang qī diǎn qǐchuáng.',
            meaning: 'Get up at seven in the morning.',
            breakdown: [
                { word: '早上', pinyin: 'zǎoshang', meaning: 'morning' },
                { word: '七点', pinyin: 'qī diǎn', meaning: 'seven o\'clock' },
                { word: '起床', pinyin: 'qǐchuáng', meaning: 'to get up (from bed)' }
            ]
        },
        {
            id: 'lshx_028',
            type: 'shadowing',
            difficulty: 'medium',
            chinese: '弟弟喜欢唱歌。',
            pinyin: 'dìdi xǐhuān chànggē.',
            meaning: 'Younger brother likes to sing.',
            breakdown: [
                { word: '弟弟', pinyin: 'dìdi', meaning: 'younger brother' },
                { word: '喜欢', pinyin: 'xǐhuān', meaning: 'to like' },
                { word: '唱歌', pinyin: 'chànggē', meaning: 'to sing' }
            ]
        },
        {
            id: 'lshx_029',
            type: 'shadowing',
            difficulty: 'medium',
            chinese: '厨师做中国菜。',
            pinyin: 'chúshī zuò zhōngguó cài.',
            meaning: 'The chef cooks Chinese food.',
            breakdown: [
                { word: '厨师', pinyin: 'chúshī', meaning: 'chef' },
                { word: '做', pinyin: 'zuò', meaning: 'to make / to cook' },
                { word: '中国菜', pinyin: 'zhōngguó cài', meaning: 'Chinese food' }
            ]
        },
        {
            id: 'lshx_030',
            type: 'shadowing',
            difficulty: 'medium',
            chinese: '学生举手问问题。',
            pinyin: 'xuéshēng jǔ shǒu wèn wèntí.',
            meaning: 'The student raises a hand to ask a question.',
            breakdown: [
                { word: '学生', pinyin: 'xuéshēng', meaning: 'student' },
                { word: '举手', pinyin: 'jǔ shǒu', meaning: 'to raise a hand' },
                { word: '问', pinyin: 'wèn', meaning: 'to ask' },
                { word: '问题', pinyin: 'wèntí', meaning: 'question' }
            ]
        }
    ];

    if (typeof ListeningData !== 'undefined' && ListeningData.shadowing) {
        ListeningData.shadowing = ListeningData.shadowing.concat(items);
    }
})();

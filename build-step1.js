const fs = require('fs');
let c = fs.readFileSync('data/listening.js', 'utf8');
c = c.replace(/\r\n/g, '\n');

// ========================================
// INSERT DICTATION ENTRIES (l091-l130)
// ========================================
const dictA = `
        ,
        {
            id: 'l091',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '早上好',
            pinyin: 'zǎoshang hǎo',
            meaning: 'Good morning',
            hint: 'Morning greeting',
            category: 'Greetings'
        },
        {
            id: 'l092',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '晚上好',
            pinyin: 'wǎnshang hǎo',
            meaning: 'Good evening',
            hint: 'Evening greeting',
            category: 'Greetings'
        },
        {
            id: 'l093',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '晚安',
            pinyin: 'wǎn\\'ān',
            meaning: 'Good night',
            hint: 'Night farewell',
            category: 'Greetings'
        },
        {
            id: 'l094',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '好久不见',
            pinyin: 'hǎojiǔ bùjiàn',
            meaning: 'Long time no see',
            hint: 'Reunion greeting',
            category: 'Greetings'
        },
        {
            id: 'l095',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '你吃饭了吗',
            pinyin: 'nǐ chīfàn le ma',
            meaning: 'Have you eaten?',
            hint: 'Common Chinese greeting',
            category: 'Greetings'
        },
        {
            id: 'l096',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '欢迎光临',
            pinyin: 'huānyíng guānglín',
            meaning: 'Welcome (to a shop)',
            hint: 'Shop greeting',
            category: 'Greetings'
        },
        {
            id: 'l097',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '请多多关照',
            pinyin: 'qǐng duōduō guānzhào',
            meaning: 'Please take care of me',
            hint: 'Formal introduction',
            category: 'Greetings'
        },
        {
            id: 'l098',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '很高兴又见到你',
            pinyin: 'hěn gāoxìng yòu jiàndào nǐ',
            meaning: 'Very happy to see you again',
            hint: 'Reunion expression',
            category: 'Greetings'
        },
        {
            id: 'l099',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '一',
            pinyin: 'yī',
            meaning: 'One',
            hint: 'First number',
            category: 'Numbers'
        },
        {
            id: 'l100',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '二',
            pinyin: 'èr',
            meaning: 'Two',
            hint: 'Second number',
            category: 'Numbers'
        },
        {
            id: 'l101',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '三',
            pinyin: 'sān',
            meaning: 'Three',
            hint: 'Third number',
            category: 'Numbers'
        },
        {
            id: 'l102',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '十',
            pinyin: 'shí',
            meaning: 'Ten',
            hint: 'Basic number',
            category: 'Numbers'
        },
        {
            id: 'l103',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '一百',
            pinyin: 'yībǎi',
            meaning: 'One hundred',
            hint: 'Hundred number',
            category: 'Numbers'
        },
        {
            id: 'l104',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '第一',
            pinyin: 'dìyī',
            meaning: 'First (ordinal)',
            hint: 'Ordinal form',
            category: 'Numbers'
        },
        {
            id: 'l105',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '电话号码是多少',
            pinyin: 'diànhuà hàomǎ shì duōshao',
            meaning: 'What is your phone number?',
            hint: 'Asking for number',
            category: 'Numbers'
        },
        {
            id: 'l106',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '我的手机号是13800138000',
            pinyin: 'wǒ de shǒujī hào shì yāo sān bā líng líng yāo sān bā líng líng líng',
            meaning: 'My phone number is 13800138000',
            hint: 'Giving phone number',
            category: 'Numbers'
        },
        {
            id: 'l107',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '一共三百五十块钱',
            pinyin: 'yīgòng sānbǎi wǔshí kuài qián',
            meaning: '350 yuan in total',
            hint: 'Total amount',
            category: 'Numbers'
        },
        {
            id: 'l108',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '我住在十五楼',
            pinyin: 'wǒ zhù zài shíwǔ lóu',
            meaning: 'I live on the 15th floor',
            hint: 'Floor number',
            category: 'Numbers'
        },
        {
            id: 'l109',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '米饭',
            pinyin: 'mǐfàn',
            meaning: 'Rice',
            hint: 'Staple food',
            category: 'Food'
        },
        {
            id: 'l110',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '面条',
            pinyin: 'miàntiáo',
            meaning: 'Noodles',
            hint: 'Staple food',
            category: 'Food'
        },
        {
            id: 'l111',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '饺子',
            pinyin: 'jiǎozi',
            meaning: 'Dumplings',
            hint: 'Traditional food',
            category: 'Food'
        },
        {
            id: 'l112',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '火锅',
            pinyin: 'huǒguō',
            meaning: 'Hotpot',
            hint: 'Popular dish',
            category: 'Food'
        },
        {
            id: 'l113',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '包子',
            pinyin: 'bāozi',
            meaning: 'Steamed bun',
            hint: 'Breakfast food',
            category: 'Food'
        },
        {
            id: 'l114',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '豆浆',
            pinyin: 'dòujiāng',
            meaning: 'Soy milk',
            hint: 'Breakfast drink',
            category: 'Food'
        },
        {
            id: 'l115',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '服务员，请给我菜单',
            pinyin: 'fúwùyuán, qǐng gěi wǒ càidān',
            meaning: 'Waiter, please give me the menu',
            hint: 'At a restaurant',
            category: 'Food'
        },
        {
            id: 'l116',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '我想点一份宫保鸡丁',
            pinyin: 'wǒ xiǎng diǎn yī fèn gōngbǎo jīdīng',
            meaning: 'I want to order Kung Pao chicken',
            hint: 'Ordering food',
            category: 'Food'
        },
        {
            id: 'l117',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '买单，请问可以刷卡吗',
            pinyin: 'mǎidān, qǐngwèn kěyǐ shuākǎ ma',
            meaning: 'Check please, can I pay by card?',
            hint: 'Paying bill',
            category: 'Food'
        },
        {
            id: 'l118',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '这个菜太辣了',
            pinyin: 'zhège cài tài là le',
            meaning: 'This dish is too spicy',
            hint: 'Food comment',
            category: 'Food'
        },
        {
            id: 'l119',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '爸爸',
            pinyin: 'bàba',
            meaning: 'Dad',
            hint: 'Family member',
            category: 'Family'
        },
        {
            id: 'l120',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '妈妈',
            pinyin: 'māma',
            meaning: 'Mom',
            hint: 'Family member',
            category: 'Family'
        },
        {
            id: 'l121',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '哥哥',
            pinyin: 'gēge',
            meaning: 'Older brother',
            hint: 'Family member',
            category: 'Family'
        },
        {
            id: 'l122',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '姐姐',
            pinyin: 'jiějie',
            meaning: 'Older sister',
            hint: 'Family member',
            category: 'Family'
        },
        {
            id: 'l123',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '弟弟',
            pinyin: 'dìdi',
            meaning: 'Younger brother',
            hint: 'Family member',
            category: 'Family'
        },
        {
            id: 'l124',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '妹妹',
            pinyin: 'mèimei',
            meaning: 'Younger sister',
            hint: 'Family member',
            category: 'Family'
        },
        {
            id: 'l125',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '我家有四口人',
            pinyin: 'wǒ jiā yǒu sì kǒu rén',
            meaning: 'My family has four people',
            hint: 'Family size',
            category: 'Family'
        },
        {
            id: 'l126',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '爷爷奶奶住在老家',
            pinyin: 'yéye nǎinai zhù zài lǎojiā',
            meaning: 'Grandpa and grandma live in the hometown',
            hint: 'Extended family',
            category: 'Family'
        },
        {
            id: 'l127',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '我丈夫是工程师',
            pinyin: 'wǒ zhàngfu shì gōngchéngshī',
            meaning: 'My husband is an engineer',
            hint: 'Spouse occupation',
            category: 'Family'
        },
        {
            id: 'l128',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '我妻子是护士',
            pinyin: 'wǒ qīzi shì hùshi',
            meaning: 'My wife is a nurse',
            hint: 'Spouse occupation',
            category: 'Family'
        },
        {
            id: 'l129',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '今天',
            pinyin: 'jīntiān',
            meaning: 'Today',
            hint: 'Time word',
            category: 'Time'
        },
        {
            id: 'l130',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '明天',
            pinyin: 'míngtiān',
            meaning: 'Tomorrow',
            hint: 'Time word',
            category: 'Time'
        }`;

// Find insertion point
const marker = "category: 'Technology'\n        }\n    ],\n\n    // ============================================\n    // COMPREHENSION";
const replacement = "category: 'Technology'\n        }" + dictA + "\n    ],\n\n    // ============================================\n    // COMPREHENSION";

if (c.includes(marker)) {
    c = c.replace(marker, replacement);
    console.log('Dictation batch A inserted');
} else {
    console.log('MARKER NOT FOUND!');
    process.exit(1);
}

fs.writeFileSync('data/listening.js', c, 'utf8');
console.log('Lines:', c.split('\n').length);

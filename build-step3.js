const fs = require('fs');
let c = fs.readFileSync('data/listening.js', 'utf8');
c = c.replace(/\r\n/g, '\n');

const dictC = `
        {
            id: 'l169',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '医院',
            pinyin: 'yīyuàn',
            meaning: 'Hospital',
            hint: 'Medical place',
            category: 'Health'
        },
        {
            id: 'l170',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '药',
            pinyin: 'yào',
            meaning: 'Medicine',
            hint: 'Health item',
            category: 'Health'
        },
        {
            id: 'l171',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '我生病了',
            pinyin: 'wǒ shēngbìng le',
            meaning: 'I am sick',
            hint: 'Health status',
            category: 'Health'
        },
        {
            id: 'l172',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '我发烧了',
            pinyin: 'wǒ fāshāo le',
            meaning: 'I have a fever',
            hint: 'Symptom',
            category: 'Health'
        },
        {
            id: 'l173',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '多喝水多休息',
            pinyin: 'duō hē shuǐ duō xiūxi',
            meaning: 'Drink more water and rest more',
            hint: 'Health advice',
            category: 'Health'
        },
        {
            id: 'l174',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '我需要去看牙医',
            pinyin: 'wǒ xūyào qù kàn yáyī',
            meaning: 'I need to see a dentist',
            hint: 'Dental care',
            category: 'Health'
        },
        {
            id: 'l175',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '你对什么药物过敏吗',
            pinyin: 'nǐ duì shénme yàowù guòmǐn ma',
            meaning: 'Are you allergic to any medications?',
            hint: 'Medical question',
            category: 'Health'
        },
        {
            id: 'l176',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '每天锻炼对身体有好处',
            pinyin: 'měitiān duànliàn duì shēntǐ yǒu hǎochù',
            meaning: 'Daily exercise is good for your health',
            hint: 'Health advice',
            category: 'Health'
        },
        {
            id: 'l177',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '我感到头晕和恶心',
            pinyin: 'wǒ gǎndào tóuyūn hé ěxīn',
            meaning: 'I feel dizzy and nauseous',
            hint: 'Symptoms description',
            category: 'Health'
        },
        {
            id: 'l178',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '请帮我叫救护车',
            pinyin: 'qǐng bāng wǒ jiào jiùhùchē',
            meaning: 'Please call an ambulance for me',
            hint: 'Emergency',
            category: 'Health'
        },
        {
            id: 'l179',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '上班',
            pinyin: 'shàngbān',
            meaning: 'Go to work',
            hint: 'Work activity',
            category: 'Work'
        },
        {
            id: 'l180',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '下班',
            pinyin: 'xiàbān',
            meaning: 'Get off work',
            hint: 'Work activity',
            category: 'Work'
        },
        {
            id: 'l181',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '今天要开会',
            pinyin: 'jīntiān yào kāihuì',
            meaning: 'There is a meeting today',
            hint: 'Work schedule',
            category: 'Work'
        },
        {
            id: 'l182',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '我的老板很严格',
            pinyin: 'wǒ de lǎobǎn hěn yángé',
            meaning: 'My boss is very strict',
            hint: 'Work comment',
            category: 'Work'
        },
        {
            id: 'l183',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '我和同事关系很好',
            pinyin: 'wǒ hé tóngshì guānxì hěn hǎo',
            meaning: 'I have a good relationship with my colleagues',
            hint: 'Work relationship',
            category: 'Work'
        },
        {
            id: 'l184',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '最近工作太忙了总加班',
            pinyin: 'zuìjìn gōngzuò tài máng le zǒng jiābān',
            meaning: 'Work has been too busy lately, always working overtime',
            hint: 'Work complaint',
            category: 'Work'
        },
        {
            id: 'l185',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '我想请假两天去看家人',
            pinyin: 'wǒ xiǎng qǐngjià liǎng tiān qù kàn jiārén',
            meaning: 'I want to take two days off to visit family',
            hint: 'Leave request',
            category: 'Work'
        },
        {
            id: 'l186',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '下个月我要换工作了',
            pinyin: 'xià gè yuè wǒ yào huàn gōngzuò le',
            meaning: 'Next month I will change jobs',
            hint: 'Career change',
            category: 'Work'
        },
        {
            id: 'l187',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '这份工作的工资不高',
            pinyin: 'zhè fèn gōngzuò de gōngzī bù gāo',
            meaning: 'The salary for this job is not high',
            hint: 'Salary comment',
            category: 'Work'
        },
        {
            id: 'l188',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '我每天坐地铁去公司上班',
            pinyin: 'wǒ měitiān zuò dìtiě qù gōngsī shàngbān',
            meaning: 'I take the subway to the office every day',
            hint: 'Commute routine',
            category: 'Work'
        },
        {
            id: 'l189',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '飞机',
            pinyin: 'fēijī',
            meaning: 'Airplane',
            hint: 'Transport',
            category: 'Travel'
        },
        {
            id: 'l190',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '机场',
            pinyin: 'jīchǎng',
            meaning: 'Airport',
            hint: 'Travel place',
            category: 'Travel'
        },
        {
            id: 'l191',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '请出示护照',
            pinyin: 'qǐng chūshì hùzhào',
            meaning: 'Please show your passport',
            hint: 'At the airport',
            category: 'Travel'
        },
        {
            id: 'l192',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '我的行李丢了',
            pinyin: 'wǒ de xíngli diū le',
            meaning: 'My luggage is lost',
            hint: 'Travel problem',
            category: 'Travel'
        },
        {
            id: 'l193',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '我需要办一个旅游签证',
            pinyin: 'wǒ xūyào bàn yīgè lǚyóu qiānzhèng',
            meaning: 'I need to apply for a tourist visa',
            hint: 'Visa application',
            category: 'Travel'
        },
        {
            id: 'l194',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '这个景点很有名',
            pinyin: 'zhège jǐngdiǎn hěn yǒumíng',
            meaning: 'This scenic spot is very famous',
            hint: 'Tourist attraction',
            category: 'Travel'
        },
        {
            id: 'l195',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '我们请了一个导游',
            pinyin: 'wǒmen qǐng le yīgè dǎoyóu',
            meaning: 'We hired a tour guide',
            hint: 'Tour arrangement',
            category: 'Travel'
        },
        {
            id: 'l196',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '我想买一张去上海的机票',
            pinyin: 'wǒ xiǎng mǎi yī zhāng qù shànghǎi de jīpiào',
            meaning: 'I want to buy a plane ticket to Shanghai',
            hint: 'Ticket purchase',
            category: 'Travel'
        },
        {
            id: 'l197',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '登机口在几号',
            pinyin: 'dēngjīkǒu zài jǐ hào',
            meaning: 'Which gate is the boarding gate?',
            hint: 'At the airport',
            category: 'Travel'
        },
        {
            id: 'l198',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '这次旅行让我难忘',
            pinyin: 'zhè cì lǚxíng ràng wǒ nánwàng',
            meaning: 'This trip was unforgettable',
            hint: 'Travel memory',
            category: 'Travel'
        },
        {
            id: 'l199',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '高兴',
            pinyin: 'gāoxìng',
            meaning: 'Happy',
            hint: 'Positive emotion',
            category: 'Emotions'
        },
        {
            id: 'l200',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '难过',
            pinyin: 'nánguò',
            meaning: 'Sad',
            hint: 'Negative emotion',
            category: 'Emotions'
        },
        {
            id: 'l201',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '我很生气',
            pinyin: 'wǒ hěn shēngqì',
            meaning: 'I am very angry',
            hint: 'Emotion expression',
            category: 'Emotions'
        },
        {
            id: 'l202',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '别担心',
            pinyin: 'bié dānxīn',
            meaning: 'Don\\'t worry',
            hint: 'Reassurance',
            category: 'Emotions'
        },
        {
            id: 'l203',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '我感到很紧张',
            pinyin: 'wǒ gǎndào hěn jǐnzhāng',
            meaning: 'I feel very nervous',
            hint: 'Emotion expression',
            category: 'Emotions'
        },
        {
            id: 'l204',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '这个消息让我很惊讶',
            pinyin: 'zhège xiāoxi ràng wǒ hěn jīngyà',
            meaning: 'This news surprised me',
            hint: 'Surprise reaction',
            category: 'Emotions'
        },
        {
            id: 'l205',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '我对结果感到很失望',
            pinyin: 'wǒ duì jiéguǒ gǎndào hěn shīwàng',
            meaning: 'I feel very disappointed with the result',
            hint: 'Disappointment',
            category: 'Emotions'
        },
        {
            id: 'l206',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '你的话让我很感动',
            pinyin: 'nǐ de huà ràng wǒ hěn gǎndòng',
            meaning: 'Your words touched me deeply',
            hint: 'Being moved',
            category: 'Emotions'
        },
        {
            id: 'l207',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '不知道为什么心里很烦',
            pinyin: 'bù zhīdào wèi shénme xīnlǐ hěn fán',
            meaning: 'Don\\'t know why I feel annoyed',
            hint: 'Annoyance',
            category: 'Emotions'
        }`;

const marker = "category: 'Directions'\n        }\n    ],\n\n    // ============================================\n    // COMPREHENSION";
const replacement = "category: 'Directions'\n        }" + dictC + "\n    ],\n\n    // ============================================\n    // COMPREHENSION";

if (c.includes(marker)) {
    c = c.replace(marker, replacement);
    console.log('Dictation batch C inserted');
} else {
    console.log('MARKER NOT FOUND!');
    const idx = c.indexOf("category: 'Directions'");
    console.log('Context:', JSON.stringify(c.substring(idx, idx+120)));
    process.exit(1);
}

fs.writeFileSync('data/listening.js', c, 'utf8');
console.log('Lines:', c.split('\n').length);
console.log('Has l207:', c.includes("id: 'l207'"));

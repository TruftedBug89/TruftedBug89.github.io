// ============================================
// CHINESE MASTER - Speed Listening NEW Extended Data
// 30 additional speed listening exercises (HSK 1-3)
// ============================================

const ListeningSpeedNew = {
    speedListening: [
        { id: 'lsnx_001', type: 'speedListening', difficulty: 'easy', chinese: '我有三个苹果', pinyin: 'wǒ yǒu sān gè píngguǒ', meaning: 'I have three apples', hint: 'Counting objects', category: 'Numbers' },
        { id: 'lsnx_002', type: 'speedListening', difficulty: 'easy', chinese: '这是一百块钱', pinyin: 'zhè shì yībǎi kuài qián', meaning: 'This is one hundred yuan', hint: 'Money amount', category: 'Numbers' },
        { id: 'lsnx_003', type: 'speedListening', difficulty: 'medium', chinese: '今天是五月三号', pinyin: 'jīntiān shì wǔ yuè sān hào', meaning: 'Today is May 3rd', hint: 'Date expression', category: 'Numbers' },
        { id: 'lsnx_004', type: 'speedListening', difficulty: 'easy', chinese: '现在八点了', pinyin: 'xiànzài bā diǎn le', meaning: 'It is eight o\'clock now', hint: 'Telling time', category: 'Time' },
        { id: 'lsnx_005', type: 'speedListening', difficulty: 'medium', chinese: '我明天下午三点去学校', pinyin: 'wǒ míngtiān xiàwǔ sān diǎn qù xuéxiào', meaning: 'I go to school at 3pm tomorrow', hint: 'Time and place', category: 'Time' },
        { id: 'lsnx_006', type: 'speedListening', difficulty: 'easy', chinese: '今天是星期一', pinyin: 'jīntiān shì xīngqī yī', meaning: 'Today is Monday', hint: 'Day of week', category: 'Time' },
        { id: 'lsnx_007', type: 'speedListening', difficulty: 'medium', chinese: '我昨天没去上班', pinyin: 'wǒ zuótiān méi qù shàngbān', meaning: 'I did not go to work yesterday', hint: 'Past action', category: 'Time' },
        { id: 'lsnx_008', type: 'speedListening', difficulty: 'easy', chinese: '这是我妈妈', pinyin: 'zhè shì wǒ māma', meaning: 'This is my mom', hint: 'Introducing family', category: 'Family' },
        { id: 'lsnx_009', type: 'speedListening', difficulty: 'medium', chinese: '我妹妹今年十岁', pinyin: 'wǒ mèimei jīnnián shí suì', meaning: 'My younger sister is ten years old', hint: 'Age and family', category: 'Family' },
        { id: 'lsnx_010', type: 'speedListening', difficulty: 'easy', chinese: '我爸爸是老师', pinyin: 'wǒ bàba shì lǎoshī', meaning: 'My dad is a teacher', hint: 'Family job', category: 'Family' },
        { id: 'lsnx_011', type: 'speedListening', difficulty: 'easy', chinese: '我喜欢红色', pinyin: 'wǒ xǐhuān hóngsè', meaning: 'I like red', hint: 'Color preference', category: 'Colors' },
        { id: 'lsnx_012', type: 'speedListening', difficulty: 'medium', chinese: '这件白色的衬衫很好看', pinyin: 'zhè jiàn báisè de chènshān hěn hǎokàn', meaning: 'This white shirt looks very nice', hint: 'Color and clothing', category: 'Colors' },
        { id: 'lsnx_013', type: 'speedListening', difficulty: 'easy', chinese: '天空是蓝色的', pinyin: 'tiānkōng shì lánsè de', meaning: 'The sky is blue', hint: 'Nature color', category: 'Colors' },
        { id: 'lsnx_014', type: 'speedListening', difficulty: 'easy', chinese: '我想吃面条', pinyin: 'wǒ xiǎng chī miàntiáo', meaning: 'I want to eat noodles', hint: 'Food desire', category: 'Food' },
        { id: 'lsnx_015', type: 'speedListening', difficulty: 'medium', chinese: '请给我一杯水', pinyin: 'qǐng gěi wǒ yī bēi shuǐ', meaning: 'Please give me a cup of water', hint: 'Ordering drink', category: 'Food' },
        { id: 'lsnx_016', type: 'speedListening', difficulty: 'easy', chinese: '苹果很好吃', pinyin: 'píngguǒ hěn hǎo chī', meaning: 'Apples are very tasty', hint: 'Food opinion', category: 'Food' },
        { id: 'lsnx_017', type: 'speedListening', difficulty: 'easy', chinese: '我去学校', pinyin: 'wǒ qù xuéxiào', meaning: 'I go to school', hint: 'Basic movement', category: 'Verbs' },
        { id: 'lsnx_018', type: 'speedListening', difficulty: 'medium', chinese: '她来我家玩', pinyin: 'tā lái wǒ jiā wán', meaning: 'She comes to my house to play', hint: 'Visit action', category: 'Verbs' },
        { id: 'lsnx_019', type: 'speedListening', difficulty: 'easy', chinese: '我想买一本书', pinyin: 'wǒ xiǎng mǎi yī běn shū', meaning: 'I want to buy a book', hint: 'Shopping verb', category: 'Verbs' },
        { id: 'lsnx_020', type: 'speedListening', difficulty: 'medium', chinese: '你吃饭了吗', pinyin: 'nǐ chīfàn le ma', meaning: 'Have you eaten?', hint: 'Common greeting', category: 'Verbs' },
        { id: 'lsnx_021', type: 'speedListening', difficulty: 'easy', chinese: '学校在那边', pinyin: 'xuéxiào zài nàbiān', meaning: 'The school is over there', hint: 'Pointing location', category: 'Places' },
        { id: 'lsnx_022', type: 'speedListening', difficulty: 'medium', chinese: '医院离我家很近', pinyin: 'yīyuàn lí wǒ jiā hěn jìn', meaning: 'The hospital is very close to my home', hint: 'Distance description', category: 'Places' },
        { id: 'lsnx_023', type: 'speedListening', difficulty: 'easy', chinese: '我要去商店', pinyin: 'wǒ yào qù shāngdiàn', meaning: 'I need to go to the store', hint: 'Going shopping', category: 'Places' },
        { id: 'lsnx_024', type: 'speedListening', difficulty: 'easy', chinese: '你叫什么名字', pinyin: 'nǐ jiào shénme míngzì', meaning: 'What is your name?', hint: 'Introduction question', category: 'Questions' },
        { id: 'lsnx_025', type: 'speedListening', difficulty: 'medium', chinese: '这个多少钱', pinyin: 'zhège duōshao qián', meaning: 'How much is this?', hint: 'Price question', category: 'Questions' },
        { id: 'lsnx_026', type: 'speedListening', difficulty: 'medium', chinese: '你怎么去上班', pinyin: 'nǐ zěnme qù shàngbān', meaning: 'How do you go to work?', hint: 'Commute question', category: 'Questions' },
        { id: 'lsnx_027', type: 'speedListening', difficulty: 'easy', chinese: '左边是银行', pinyin: 'zuǒbiān shì yínháng', meaning: 'The bank is on the left', hint: 'Direction location', category: 'Directions' },
        { id: 'lsnx_028', type: 'speedListening', difficulty: 'medium', chinese: '前面有一个红绿灯', pinyin: 'qiánmiàn yǒu yī gè hónglǜdēng', meaning: 'There is a traffic light ahead', hint: 'Giving direction', category: 'Directions' },
        { id: 'lsnx_029', type: 'speedListening', difficulty: 'easy', chinese: '这只猫很小', pinyin: 'zhè zhī māo hěn xiǎo', meaning: 'This cat is very small', hint: 'Size description', category: 'Adjectives' },
        { id: 'lsnx_030', type: 'speedListening', difficulty: 'medium', chinese: '今天太热了', pinyin: 'jīntiān tài rè le', meaning: 'Today is too hot', hint: 'Temperature feeling', category: 'Adjectives' }
    ],

    mergeWithMain() {
        if (typeof ListeningData !== 'undefined') {
            ListeningData.speedListening = [...ListeningData.speedListening, ...this.speedListening];
        }
    },

    get count() { return this.speedListening.length; }
};

if (typeof ListeningData !== 'undefined') { ListeningSpeedNew.mergeWithMain(); }
window.ListeningSpeedNew = ListeningSpeedNew;

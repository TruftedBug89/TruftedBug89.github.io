// ============================================
// CHINESE MASTER - Extended Listening Exercises
// 100+ Additional exercises
// ============================================

const ListeningExtended = {
    // More dictation exercises
    dictation: [
        { id: 'l101', type: 'dictation', difficulty: 'easy', chinese: '早上好', pinyin: 'zǎoshang hǎo', meaning: 'Good morning', hint: 'Morning greeting', category: 'Greetings' },
        { id: 'l102', type: 'dictation', difficulty: 'easy', chinese: '晚上好', pinyin: 'wǎnshang hǎo', meaning: 'Good evening', hint: 'Evening greeting', category: 'Greetings' },
        { id: 'l103', type: 'dictation', difficulty: 'easy', chinese: '晚安', pinyin: 'wǎn\'ān', meaning: 'Good night', hint: 'Night greeting', category: 'Greetings' },
        { id: 'l104', type: 'dictation', difficulty: 'easy', chinese: '不客气', pinyin: 'bù kèqi', meaning: 'You\'re welcome', hint: 'Response to thanks', category: 'Greetings' },
        { id: 'l105', type: 'dictation', difficulty: 'medium', chinese: '我叫李明', pinyin: 'wǒ jiào lǐ míng', meaning: 'My name is Li Ming', hint: 'Introduction', category: 'Introduction' },
        { id: 'l106', type: 'dictation', difficulty: 'medium', chinese: '认识你很高兴', pinyin: 'rènshi nǐ hěn gāoxìng', meaning: 'Nice to meet you', hint: 'Meeting someone', category: 'Introduction' },
        { id: 'l107', type: 'dictation', difficulty: 'medium', chinese: '你是哪国人', pinyin: 'nǐ shì nǎ guó rén', meaning: 'What nationality are you?', hint: 'Asking nationality', category: 'Introduction' },
        { id: 'l108', type: 'dictation', difficulty: 'medium', chinese: '我是中国人', pinyin: 'wǒ shì zhōngguó rén', meaning: 'I am Chinese', hint: 'Nationality', category: 'Introduction' },
        { id: 'l109', type: 'dictation', difficulty: 'medium', chinese: '你会说中文吗', pinyin: 'nǐ huì shuō zhōngwén ma', meaning: 'Can you speak Chinese?', hint: 'Language ability', category: 'Language' },
        { id: 'l110', type: 'dictation', difficulty: 'medium', chinese: '我会说一点中文', pinyin: 'wǒ huì shuō yīdiǎn zhōngwén', meaning: 'I can speak a little Chinese', hint: 'Language ability', category: 'Language' },
        { id: 'l111', type: 'dictation', difficulty: 'hard', chinese: '我想买一张去上海的火车票', pinyin: 'wǒ xiǎng mǎi yī zhāng qù shànghǎi de huǒchē piào', meaning: 'I want to buy a train ticket to Shanghai', hint: 'Buying tickets', category: 'Travel' },
        { id: 'l112', type: 'dictation', difficulty: 'hard', chinese: '请问附近有没有地铁站', pinyin: 'qǐngwèn fùjìn yǒu méiyǒu dìtiě zhàn', meaning: 'Is there a subway station nearby?', hint: 'Asking directions', category: 'Travel' },
        { id: 'l113', type: 'dictation', difficulty: 'hard', chinese: '我想预订一个双人间', pinyin: 'wǒ xiǎng yùdìng yīgè shuāngrénjiān', meaning: 'I want to book a double room', hint: 'Hotel booking', category: 'Travel' },
        { id: 'l114', type: 'dictation', difficulty: 'hard', chinese: '这件衣服可以试穿吗', pinyin: 'zhè jiàn yīfu kěyǐ shìchuān ma', meaning: 'Can I try on this clothing?', hint: 'Shopping', category: 'Shopping' },
        { id: 'l115', type: 'dictation', difficulty: 'hard', chinese: '能用信用卡付钱吗', pinyin: 'néng yòng xìnyòngkǎ fùqián ma', meaning: 'Can I pay with credit card?', hint: 'Payment', category: 'Shopping' },
        { id: 'l116', type: 'dictation', difficulty: 'hard', chinese: '我要一杯不加糖的咖啡', pinyin: 'wǒ yào yī bēi bù jiā táng de kāfēi', meaning: 'I want a coffee without sugar', hint: 'Ordering', category: 'Food' },
        { id: 'l117', type: 'dictation', difficulty: 'hard', chinese: '我对花生过敏', pinyin: 'wǒ duì huāshēng guòmǐn', meaning: 'I\'m allergic to peanuts', hint: 'Allergy', category: 'Food' },
        { id: 'l118', type: 'dictation', difficulty: 'hard', chinese: '请帮我叫一辆出租车', pinyin: 'qǐng bāng wǒ jiào yī liàng chūzūchē', meaning: 'Please help me call a taxi', hint: 'Transport', category: 'Transport' },
        { id: 'l119', type: 'dictation', difficulty: 'hard', chinese: '到机场需要多长时间', pinyin: 'dào jīchǎng xūyào duō cháng shíjiān', meaning: 'How long does it take to get to the airport?', hint: 'Time question', category: 'Transport' },
        { id: 'l120', type: 'dictation', difficulty: 'hard', chinese: '我的行李丢了', pinyin: 'wǒ de xínglǐ diū le', meaning: 'I lost my luggage', hint: 'Problem', category: 'Travel' },
        { id: 'l121', type: 'dictation', difficulty: 'hard', chinese: '这个地方怎么读', pinyin: 'zhège dìfāng zěnme dú', meaning: 'How do you read this character?', hint: 'Learning', category: 'Education' },
        { id: 'l122', type: 'dictation', difficulty: 'hard', chinese: '请再说一遍', pinyin: 'qǐng zài shuō yī biàn', meaning: 'Please say it again', hint: 'Communication', category: 'Communication' },
        { id: 'l123', type: 'dictation', difficulty: 'hard', chinese: '你说得太快了', pinyin: 'nǐ shuō de tài kuài le', meaning: 'You\'re speaking too fast', hint: 'Communication', category: 'Communication' },
        { id: 'l124', type: 'dictation', difficulty: 'hard', chinese: '我不太明白', pinyin: 'wǒ bù tài míngbai', meaning: 'I don\'t quite understand', hint: 'Communication', category: 'Communication' },
        { id: 'l125', type: 'dictation', difficulty: 'hard', chinese: '你能用中文写下来吗', pinyin: 'nǐ néng yòng zhōngwén xiě xiàlái ma', meaning: 'Can you write it down in Chinese?', hint: 'Communication', category: 'Communication' },
        { id: 'l126', type: 'dictation', difficulty: 'hard', chinese: '今天几月几号', pinyin: 'jīntiān jǐ yuè jǐ hào', meaning: 'What is the date today?', hint: 'Date question', category: 'Time' },
        { id: 'l127', type: 'dictation', difficulty: 'hard', chinese: '现在几点了', pinyin: 'xiànzài jǐ diǎn le', meaning: 'What time is it now?', hint: 'Time question', category: 'Time' },
        { id: 'l128', type: 'dictation', difficulty: 'hard', chinese: '我们约好三点见面', pinyin: 'wǒmen yuē hǎo sān diǎn jiànmiàn', meaning: 'We arranged to meet at 3 o\'clock', hint: 'Appointment', category: 'Time' },
        { id: 'l129', type: 'dictation', difficulty: 'hard', chinese: '我每天早上六点起床', pinyin: 'wǒ měitiān zǎoshang liù diǎn qǐchuáng', meaning: 'I get up at 6 AM every day', hint: 'Daily routine', category: 'Daily Life' },
        { id: 'l130', type: 'dictation', difficulty: 'hard', chinese: '周末我喜欢睡懒觉', pinyin: 'zhōumò wǒ xǐhuān shuì lǎnjiào', meaning: 'I like to sleep in on weekends', hint: 'Weekend', category: 'Daily Life' },
        { id: 'l131', type: 'dictation', difficulty: 'hard', chinese: '你有什么爱好', pinyin: 'nǐ yǒu shénme àihào', meaning: 'What hobbies do you have?', hint: 'Hobbies', category: 'Hobbies' },
        { id: 'l132', type: 'dictation', difficulty: 'hard', chinese: '我喜欢听音乐和看电影', pinyin: 'wǒ xǐhuān tīng yīnyuè hé kàn diànyǐng', meaning: 'I like listening to music and watching movies', hint: 'Hobbies', category: 'Hobbies' },
        { id: 'l133', type: 'dictation', difficulty: 'hard', chinese: '你会做什么菜', pinyin: 'nǐ huì zuò shénme cài', meaning: 'What dishes can you cook?', hint: 'Cooking', category: 'Food' },
        { id: 'l134', type: 'dictation', difficulty: 'hard', chinese: '我最喜欢吃火锅', pinyin: 'wǒ zuì xǐhuān chī huǒguō', meaning: 'I like hotpot the most', hint: 'Food preference', category: 'Food' },
        { id: 'l135', type: 'dictation', difficulty: 'hard', chinese: '中国的春节很热闹', pinyin: 'zhōngguó de chūnjié hěn rènao', meaning: 'Chinese New Year is very lively', hint: 'Culture', category: 'Culture' },
        { id: 'l136', type: 'dictation', difficulty: 'hard', chinese: '我想学做中国菜', pinyin: 'wǒ xiǎng xué zuò zhōngguó cài', meaning: 'I want to learn to cook Chinese food', hint: 'Learning', category: 'Food' },
        { id: 'l137', type: 'dictation', difficulty: 'hard', chinese: '你觉得中文难吗', pinyin: 'nǐ juéde zhōngwén nán ma', meaning: 'Do you think Chinese is difficult?', hint: 'Opinion', category: 'Education' },
        { id: 'l138', type: 'dictation', difficulty: 'hard', chinese: '多练习就会说得更好', pinyin: 'duō liànxí jiù huì shuō de gèng hǎo', meaning: 'Practice more and you\'ll speak better', hint: 'Advice', category: 'Education' },
        { id: 'l139', type: 'dictation', difficulty: 'hard', chinese: '这个字怎么写', pinyin: 'zhège zì zěnme xiě', meaning: 'How do you write this character?', hint: 'Writing', category: 'Education' },
        { id: 'l140', type: 'dictation', difficulty: 'hard', chinese: '请帮我翻译一下', pinyin: 'qǐng bāng wǒ fānyì yīxià', meaning: 'Please help me translate', hint: 'Translation', category: 'Communication' },
        { id: 'l141', type: 'dictation', difficulty: 'hard', chinese: '我打算明年去中国留学', pinyin: 'wǒ dǎsuàn míngnián qù zhōngguó liúxué', meaning: 'I plan to study in China next year', hint: 'Future plan', category: 'Education' },
        { id: 'l142', type: 'dictation', difficulty: 'hard', chinese: '你觉得哪个城市最好', pinyin: 'nǐ juéde nǎge chéngshì zuì hǎo', meaning: 'Which city do you think is the best?', hint: 'Opinion', category: 'Travel' },
        { id: 'l143', type: 'dictation', difficulty: 'hard', chinese: '我想找一份跟中文有关的工作', pinyin: 'wǒ xiǎng zhǎo yī fèn gēn zhōngwén yǒuguān de gōngzuò', meaning: 'I want to find a job related to Chinese', hint: 'Career', category: 'Work' },
        { id: 'l144', type: 'dictation', difficulty: 'hard', chinese: '学中文对我的工作很有帮助', pinyin: 'xué zhōngwén duì wǒ de gōngzuò hěn yǒu bāngzhù', meaning: 'Learning Chinese is very helpful for my work', hint: 'Benefits', category: 'Work' },
        { id: 'l145', type: 'dictation', difficulty: 'hard', chinese: '我想提高我的听力水平', pinyin: 'wǒ xiǎng tígāo wǒ de tīnglì shuǐpíng', meaning: 'I want to improve my listening level', hint: 'Goal', category: 'Education' },
        { id: 'l146', type: 'dictation', difficulty: 'hard', chinese: '每天听中文广播很有用', pinyin: 'měitiān tīng zhōngwén guǎngbō hěn yǒuyòng', hint: 'Method', meaning: 'Listening to Chinese radio every day is very useful', category: 'Education' },
        { id: 'l147', type: 'dictation', difficulty: 'hard', chinese: '看中文电视剧可以提高听力', pinyin: 'kàn zhōngwén diànshìjù kěyǐ tígāo tīnglì', meaning: 'Watching Chinese TV shows can improve listening', hint: 'Method', category: 'Education' },
        { id: 'l148', type: 'dictation', difficulty: 'hard', chinese: '我每天都用这个应用学中文', pinyin: 'wǒ měitiān dōu yòng zhège yìngyòng xué zhōngwén', meaning: 'I use this app to learn Chinese every day', hint: 'App', category: 'Technology' },
        { id: 'l149', type: 'dictation', difficulty: 'hard', chinese: '这个应用对学中文很有帮助', pinyin: 'zhège yìngyòng duì xué zhōngwén hěn yǒu bāngzhù', meaning: 'This app is very helpful for learning Chinese', hint: 'App', category: 'Technology' },
        { id: 'l150', type: 'dictation', difficulty: 'hard', chinese: '我想交一些中国朋友', pinyin: 'wǒ xiǎng jiāo yīxiē zhōngguó péngyǒu', meaning: 'I want to make some Chinese friends', hint: 'Social', category: 'Social' }
    ],

    // More comprehension exercises
    comprehension: [
        {
            id: 'l151',
            type: 'comprehension',
            difficulty: 'medium',
            chinese: '我叫王红，今年二十岁。我是大学生，学习英语。我的爱好是看书和听音乐。我有一个哥哥，他是医生。',
            pinyin: 'wǒ jiào wáng hóng, jīnnián èrshí suì. wǒ shì dàxuéshēng, xuéxí yīngyǔ. wǒ de àihào shì kànshū hé tīng yīnyuè. wǒ yǒu yīgè gēge, tā shì yīshēng.',
            meaning: 'My name is Wang Hong, I\'m 20 years old. I\'m a college student studying English. My hobbies are reading and listening to music. I have an older brother who is a doctor.',
            questions: [
                { question: '她多大了？', options: ['18岁', '19岁', '20岁', '21岁'], correct: 2 },
                { question: '她学什么专业？', options: ['中文', '英语', '日语', '法语'], correct: 1 },
                { question: '她哥哥做什么工作？', options: ['老师', '医生', '工程师', '经理'], correct: 1 }
            ]
        },
        {
            id: 'l152',
            type: 'comprehension',
            difficulty: 'hard',
            chinese: '昨天是我的生日。我的朋友们给我开了一个生日派对。我们一起吃了蛋糕，唱了生日歌。我收到了很多礼物，非常开心。',
            pinyin: 'zuótiān shì wǒ de shēngrì. wǒ de péngyǒumen gěi wǒ kāi le yīgè shēngrì pàiduì. wǒmen yīqǐ chī le dàn gāo, chàng le shēngrì gē. wǒ shōu dào le hěn duō lǐwù, fēicháng kāixīn.',
            meaning: 'Yesterday was my birthday. My friends threw me a birthday party. We ate cake together and sang happy birthday. I received many gifts and was very happy.',
            questions: [
                { question: '昨天是什么日子？', options: ['春节', '生日', '国庆节', '中秋节'], correct: 1 },
                { question: '他们一起做了什么？', options: ['看电影', '吃蛋糕唱生日歌', '去旅游', '打篮球'], correct: 1 },
                { question: '她收到了什么？', options: ['红包', '很多礼物', '花', '巧克力'], correct: 1 }
            ]
        },
        {
            id: 'l153',
            type: 'comprehension',
            difficulty: 'hard',
            chinese: '我在中国留学已经半年了。一开始我很不习惯，因为语言不通。但是现在好多了，我可以和中国人聊天了。我最喜欢的中国菜是火锅和饺子。',
            pinyin: 'wǒ zài zhōngguó liúxué yǐjīng bàn nián le. yī kāishǐ wǒ hěn bù xíguàn, yīnwèi yǔyán bù tōng. dànshì xiànzài hǎo duō le, wǒ kěyǐ hé zhōngguó rén liáotiān le. wǒ zuì xǐhuān de zhōngguó cài shì huǒguō hé jiǎozi.',
            meaning: 'I have been studying in China for half a year. At first I wasn\'t used to it because of the language barrier. But now it\'s much better, I can chat with Chinese people. My favorite Chinese foods are hotpot and dumplings.',
            questions: [
                { question: '他在中国多长时间了？', options: ['三个月', '半年', '一年', '两年'], correct: 1 },
                { question: '一开始他为什么不习惯？', options: ['食物不好', '语言不通', '天气不好', '没有朋友'], correct: 1 },
                { question: '他最喜欢什么中国菜？', options: ['面条', '火锅和饺子', '烤鸭', '炒饭'], correct: 1 }
            ]
        },
        {
            id: 'l154',
            type: 'comprehension',
            difficulty: 'medium',
            chinese: '今天天气很好，阳光明媚。我和朋友决定去公园散步。公园里有很多人在锻炼身体，有的在跑步，有的在打太极拳。我们走了大概一个小时，然后在湖边的咖啡馆休息。',
            pinyin: 'jīntiān tiānqì hěn hǎo, yángguāng míngmèi. wǒ hé péngyǒu juédìng qù gōngyuán sàn bù. gōngyuán lǐ yǒu hěn duō rén zài duànliàn shēntǐ, yǒu de zài pǎobù, yǒu de zài dǎ tàijí quán. wǒmen zǒu le dàgài yīgè xiǎoshí, ránhòu zài hú biān de kāfēiguǎn xiūxi.',
            meaning: 'The weather is very nice today, sunny and bright. My friend and I decided to take a walk in the park. There were many people exercising in the park, some running, some doing tai chi. We walked for about an hour, then rested at a cafe by the lake.',
            questions: [
                { question: '今天天气怎么样？', options: ['下雨', '很冷', '阳光明媚', '刮风'], correct: 2 },
                { question: '公园里的人在做什么？', options: ['睡觉', '锻炼身体', '看书', '吃饭'], correct: 1 },
                { question: '他们走了多长时间？', options: ['半小时', '一小时', '两小时', '三小时'], correct: 1 }
            ]
        },
        {
            id: 'l155',
            type: 'comprehension',
            difficulty: 'hard',
            chinese: '我想介绍一下我的家庭。我家有五口人：爷爷、奶奶、爸爸、妈妈和我。爷爷今年七十五岁，身体很好，每天都去公园打太极拳。奶奶七十岁，喜欢做饭，她做的菜特别好吃。爸爸是工程师，妈妈是医生。我是家里的独生子。',
            pinyin: 'wǒ xiǎng jièshào yīxià wǒ de jiātíng. wǒ jiā yǒu wǔ kǒu rén: yéye, nǎinai, bàba, māma hé wǒ. yéye jīnnián qīshíwǔ suì, shēntǐ hěn hǎo, měitiān dōu qù gōngyuán dǎ tàijí quán. nǎinai qīshí suì, xǐhuān zuòfàn, tā zuò de cài tèbié hǎochī. bàba shì gōngchéngshī, māma shì yīshēng. wǒ shì jiā lǐ de dúshēngzǐ.',
            meaning: 'I want to introduce my family. My family has five people: grandpa, grandma, dad, mom, and me. Grandpa is 75 years old, very healthy, and goes to the park to do tai chi every day. Grandma is 70, likes cooking, and her food is especially delicious. Dad is an engineer, mom is a doctor. I am the only child in the family.',
            questions: [
                { question: '他家有几口人？', options: ['三口', '四口', '五口', '六口'], correct: 2 },
                { question: '爷爷每天做什么？', options: ['看书', '打太极拳', '做饭', '钓鱼'], correct: 1 },
                { question: '他是家里的什么？', options: ['老大', '老二', '独生子', '最小的'], correct: 2 }
            ]
        }
    ],

    // Merge with main listening data
    mergeWithMain() {
        if (typeof ListeningData !== 'undefined') {
            ListeningData.dictation = [...ListeningData.dictation, ...this.dictation];
            ListeningData.comprehension = [...ListeningData.comprehension, ...this.comprehension];
        }
    },

    get count() {
        return this.dictation.length + this.comprehension.length;
    }
};

// Auto-merge when loaded
if (typeof ListeningData !== 'undefined') {
    ListeningExtended.mergeWithMain();
}

window.ListeningExtended = ListeningExtended;

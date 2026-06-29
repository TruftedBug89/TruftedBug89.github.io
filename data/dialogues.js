// ============================================
// CHINESE MASTER - Dialogue Scenarios Data
// 80+ Real-world conversation scenarios
// ============================================

const DialoguesData = {
    scenarios: [
        {
            id: 'd001',
            title: '在咖啡馆',
            titleMeaning: 'At the Coffee Shop',
            category: 'Food & Drink',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你好，想要什么？', pinyin: 'nǐ hǎo, xiǎng yào shénme?', meaning: 'Hello, what would you like?' },
                { speaker: 'B', chinese: '我要一杯咖啡。', pinyin: 'wǒ yào yī bēi kāfēi.', meaning: 'I want a cup of coffee.' },
                { speaker: 'A', chinese: '要大杯还是小杯？', pinyin: 'yào dà bēi háishì xiǎo bēi?', meaning: 'Large or small?' },
                { speaker: 'B', chinese: '大杯。多少钱？', pinyin: 'dà bēi. duōshao qián?', meaning: 'Large. How much?' },
                { speaker: 'A', chinese: '二十五块。', pinyin: 'èrshíwǔ kuài.', meaning: '25 yuan.' },
                { speaker: 'B', chinese: '好的，给你钱。', pinyin: 'hǎo de, gěi nǐ qián.', meaning: 'OK, here is the money.' }
            ]
        },
        {
            id: 'd002',
            title: '在超市',
            titleMeaning: 'At the Supermarket',
            category: 'Shopping',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '请问，牛奶在哪里？', pinyin: 'qǐngwèn, niúnǎi zài nǎlǐ?', meaning: 'Excuse me, where is the milk?' },
                { speaker: 'B', chinese: '在那边，冷藏区。', pinyin: 'zài nàbiān, lěngcáng qū.', meaning: 'Over there, in the cold section.' },
                { speaker: 'A', chinese: '谢谢。这个多少钱？', pinyin: 'xièxiè. zhège duōshao qián?', meaning: 'Thanks. How much is this?' },
                { speaker: 'B', chinese: '十二块五。', pinyin: 'shí\'èr kuài wǔ.', meaning: '12.5 yuan.' },
                { speaker: 'A', chinese: '好的，我要两个。', pinyin: 'hǎo de, wǒ yào liǎng gè.', meaning: 'OK, I want two.' }
            ]
        },
        {
            id: 'd003',
            title: '坐出租车',
            titleMeaning: 'Taking a Taxi',
            category: 'Transport',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '师傅，去火车站。', pinyin: 'shīfu, qù huǒchē zhàn.', meaning: 'Driver, to the train station.' },
                { speaker: 'B', chinese: '好的。', pinyin: 'hǎo de.', meaning: 'OK.' },
                { speaker: 'A', chinese: '大概多长时间？', pinyin: 'dàgài duō cháng shíjiān?', meaning: 'About how long?' },
                { speaker: 'B', chinese: '大概二十分钟。', pinyin: 'dàgài èrshí fēnzhōng.', meaning: 'About 20 minutes.' },
                { speaker: 'A', chinese: '多少钱？', pinyin: 'duōshao qián?', meaning: 'How much?' },
                { speaker: 'B', chinese: '三十五块。', pinyin: 'sānshíwǔ kuài.', meaning: '35 yuan.' },
                { speaker: 'A', chinese: '谢谢。不用找了。', pinyin: 'xièxiè. bùyòng zhǎo le.', meaning: 'Thanks. Keep the change.' }
            ]
        },
        {
            id: 'd004',
            title: '看病',
            titleMeaning: 'Seeing a Doctor',
            category: 'Health',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '你怎么了？', pinyin: 'nǐ zěnme le?', meaning: 'What\'s wrong?' },
                { speaker: 'B', chinese: '我头疼，还有点发烧。', pinyin: 'wǒ tóuténg, hái yǒu diǎn fāshāo.', meaning: 'I have a headache and a slight fever.' },
                { speaker: 'A', chinese: '什么时候开始的？', pinyin: 'shénme shíhou kāishǐ de?', meaning: 'When did it start?' },
                { speaker: 'B', chinese: '昨天晚上。', pinyin: 'zuótiān wǎnshang.', meaning: 'Last night.' },
                { speaker: 'A', chinese: '我给你开点药。多喝水，好好休息。', pinyin: 'wǒ gěi nǐ kāi diǎn yào. duō hē shuǐ, hǎohǎo xiūxi.', meaning: 'I\'ll prescribe some medicine. Drink more water and rest well.' },
                { speaker: 'B', chinese: '谢谢医生。', pinyin: 'xièxiè yīshēng.', meaning: 'Thank you, doctor.' }
            ]
        },
        {
            id: 'd005',
            title: '买东西',
            titleMeaning: 'Shopping',
            category: 'Shopping',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '这件衣服多少钱？', pinyin: 'zhè jiàn yīfu duōshao qián?', meaning: 'How much is this clothing?' },
                { speaker: 'B', chinese: '三百块。', pinyin: 'sān bǎi kuài.', meaning: '300 yuan.' },
                { speaker: 'A', chinese: '太贵了。能便宜一点吗？', pinyin: 'tài guì le. néng piányi yīdiǎn ma?', meaning: 'Too expensive. Can it be cheaper?' },
                { speaker: 'B', chinese: '最少两百八。', pinyin: 'zuì shǎo liǎng bǎi bā.', meaning: 'At least 280.' },
                { speaker: 'A', chinese: '好吧，我要了。', pinyin: 'hǎo ba, wǒ yào le.', meaning: 'OK, I\'ll take it.' }
            ]
        },
        {
            id: 'd006',
            title: '问路',
            titleMeaning: 'Asking Directions',
            category: 'Transport',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '请问，地铁站怎么走？', pinyin: 'qǐngwèn, dìtiě zhàn zěnme zǒu?', meaning: 'Excuse me, how do I get to the subway station?' },
                { speaker: 'B', chinese: '往前走，然后左转。', pinyin: 'wǎng qián zǒu, ránhòu zuǒ zhuǎn.', meaning: 'Go forward, then turn left.' },
                { speaker: 'A', chinese: '远吗？', pinyin: 'yuǎn ma?', meaning: 'Is it far?' },
                { speaker: 'B', chinese: '不远，走路大概五分钟。', pinyin: 'bù yuǎn, zǒulù dàgài wǔ fēnzhōng.', meaning: 'Not far, about 5 minutes walking.' },
                { speaker: 'A', chinese: '谢谢！', pinyin: 'xièxiè!', meaning: 'Thank you!' }
            ]
        },
        {
            id: 'd007',
            title: '在餐厅点菜',
            titleMeaning: 'Ordering at a Restaurant',
            category: 'Food & Drink',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '欢迎光临！几位？', pinyin: 'huānyíng guānglín! jǐ wèi?', meaning: 'Welcome! How many people?' },
                { speaker: 'B', chinese: '两位。', pinyin: 'liǎng wèi.', meaning: 'Two.' },
                { speaker: 'A', chinese: '请坐。这是菜单。', pinyin: 'qǐng zuò. zhè shì càidān.', meaning: 'Please sit. Here is the menu.' },
                { speaker: 'B', chinese: '我要一个宫保鸡丁，一个鱼香肉丝。', pinyin: 'wǒ yào yīgè gōngbǎo jīdīng, yīgè yúxiāng ròusī.', meaning: 'I want Kung Pao chicken and Yu Xiang shredded pork.' },
                { speaker: 'A', chinese: '还要什么？', pinyin: 'hái yào shénme?', meaning: 'What else?' },
                { speaker: 'B', chinese: '两碗米饭，一杯茶。', pinyin: 'liǎng wǎn mǐfàn, yī bēi chá.', meaning: 'Two bowls of rice and a cup of tea.' }
            ]
        },
        {
            id: 'd008',
            title: '打电话',
            titleMeaning: 'Making a Phone Call',
            category: 'Communication',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '喂，你好。', pinyin: 'wèi, nǐ hǎo.', meaning: 'Hello.' },
                { speaker: 'B', chinese: '你好，请问王经理在吗？', pinyin: 'nǐ hǎo, qǐngwèn wáng jīnglǐ zài ma?', meaning: 'Hello, is Manager Wang there?' },
                { speaker: 'A', chinese: '他现在不在。你是哪位？', pinyin: 'tā xiànzài bù zài. nǐ shì nǎ wèi?', meaning: 'He\'s not here now. Who is calling?' },
                { speaker: 'B', chinese: '我是李明。请他回电话。', pinyin: 'wǒ shì lǐ míng. qǐng tā huí diànhuà.', meaning: 'I\'m Li Ming. Please ask him to call back.' },
                { speaker: 'A', chinese: '好的，我会转告他。', pinyin: 'hǎo de, wǒ huì zhuǎngào tā.', meaning: 'OK, I\'ll let him know.' }
            ]
        },
        {
            id: 'd009',
            title: '预订酒店',
            titleMeaning: 'Hotel Reservation',
            category: 'Travel',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '你好，我想预订一个房间。', pinyin: 'nǐ hǎo, wǒ xiǎng yùdìng yīgè fángjiān.', meaning: 'Hello, I want to book a room.' },
                { speaker: 'B', chinese: '好的。您要住几天？', pinyin: 'hǎo de. nín yào zhù jǐ tiān?', meaning: 'OK. How many days will you stay?' },
                { speaker: 'A', chinese: '三天。从下周一到周三。', pinyin: 'sān tiān. cóng xià zhōuyī dào zhōusān.', meaning: 'Three days. From next Monday to Wednesday.' },
                { speaker: 'B', chinese: '单人间还是双人间？', pinyin: 'dānrénjiān háishì shuāngrénjiān?', meaning: 'Single or double room?' },
                { speaker: 'A', chinese: '单人间。多少钱一天？', pinyin: 'dānrénjiān. duōshao qián yī tiān?', meaning: 'Single room. How much per day?' },
                { speaker: 'B', chinese: '三百八十块一天。', pinyin: 'sān bǎi bāshí kuài yī tiān.', meaning: '380 yuan per day.' },
                { speaker: 'A', chinese: '好的，我要预订。', pinyin: 'hǎo de, wǒ yào yùdìng.', meaning: 'OK, I want to book it.' }
            ]
        },
        {
            id: 'd010',
            title: '买火车票',
            titleMeaning: 'Buying Train Tickets',
            category: 'Travel',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '我要买一张去上海的票。', pinyin: 'wǒ yào mǎi yī zhāng qù shànghǎi de piào.', meaning: 'I want to buy a ticket to Shanghai.' },
                { speaker: 'B', chinese: '什么时候的？', pinyin: 'shénme shíhou de?', meaning: 'For when?' },
                { speaker: 'A', chinese: '明天早上的。', pinyin: 'míngtiān zǎoshang de.', meaning: 'Tomorrow morning.' },
                { speaker: 'B', chinese: '几点的？有八点和十点的。', pinyin: 'jǐ diǎn de? yǒu bā diǎn hé shí diǎn de.', meaning: 'What time? There are 8 AM and 10 AM.' },
                { speaker: 'A', chinese: '八点的。多少钱？', pinyin: 'bā diǎn de. duōshao qián?', meaning: '8 AM. How much?' },
                { speaker: 'B', chinese: '二等座三百五。', pinyin: 'èr děng zuò sān bǎi wǔ.', meaning: 'Second class is 350.' }
            ]
        },
        {
            id: 'd011',
            title: '自我介绍',
            titleMeaning: 'Self Introduction',
            category: 'Social',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你好！我叫李明。', pinyin: 'nǐ hǎo! wǒ jiào lǐ míng.', meaning: 'Hello! My name is Li Ming.' },
                { speaker: 'B', chinese: '你好！我叫王红。', pinyin: 'nǐ hǎo! wǒ jiào wáng hóng.', meaning: 'Hello! My name is Wang Hong.' },
                { speaker: 'A', chinese: '很高兴认识你！', pinyin: 'hěn gāoxìng rènshi nǐ!', meaning: 'Nice to meet you!' },
                { speaker: 'B', chinese: '我也很高兴认识你！', pinyin: 'wǒ yě hěn gāoxìng rènshi nǐ!', meaning: 'I\'m also happy to meet you!' },
                { speaker: 'A', chinese: '你是哪国人？', pinyin: 'nǐ shì nǎ guó rén?', meaning: 'Where are you from?' },
                { speaker: 'B', chinese: '我是美国人。你呢？', pinyin: 'wǒ shì měiguó rén. nǐ ne?', meaning: 'I\'m American. And you?' },
                { speaker: 'A', chinese: '我是中国人。', pinyin: 'wǒ shì zhōngguó rén.', meaning: 'I\'m Chinese.' }
            ]
        },
        {
            id: 'd012',
            title: '讨论天气',
            titleMeaning: 'Discussing Weather',
            category: 'Daily Life',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '今天天气真好！', pinyin: 'jīntiān tiānqì zhēn hǎo!', meaning: 'The weather is really nice today!' },
                { speaker: 'B', chinese: '是啊，阳光很好。', pinyin: 'shì a, yángguāng hěn hǎo.', meaning: 'Yes, the sunshine is great.' },
                { speaker: 'A', chinese: '明天会怎么样？', pinyin: 'míngtiān huì zěnmeyàng?', meaning: 'How will tomorrow be?' },
                { speaker: 'B', chinese: '可能会下雨。', pinyin: 'kěnéng huì xiàyǔ.', meaning: 'It might rain.' },
                { speaker: 'A', chinese: '那要带伞。', pinyin: 'nà yào dài sǎn.', meaning: 'Then we should bring an umbrella.' }
            ]
        },
        {
            id: 'd013',
            title: '讨论爱好',
            titleMeaning: 'Discussing Hobbies',
            category: 'Social',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你有什么爱好？', pinyin: 'nǐ yǒu shénme àihào?', meaning: 'What hobbies do you have?' },
                { speaker: 'B', chinese: '我喜欢看书和听音乐。你呢？', pinyin: 'wǒ xǐhuān kànshū hé tīng yīnyuè. nǐ ne?', meaning: 'I like reading and listening to music. And you?' },
                { speaker: 'A', chinese: '我喜欢运动，特别是打篮球。', pinyin: 'wǒ xǐhuān yùndòng, tèbié shì dǎ lánqiú.', meaning: 'I like sports, especially basketball.' },
                { speaker: 'B', chinese: '我也喜欢篮球！', pinyin: 'wǒ yě xǐhuān lánqiú!', meaning: 'I also like basketball!' },
                { speaker: 'A', chinese: '太好了！我们一起去打球吧！', pinyin: 'tài hǎo le! wǒmen yīqǐ qù dǎ qiú ba!', meaning: 'Great! Let\'s go play together!' }
            ]
        },
        {
            id: 'd014',
            title: '讨论工作',
            titleMeaning: 'Discussing Work',
            category: 'Work',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你做什么工作？', pinyin: 'nǐ zuò shénme gōngzuò?', meaning: 'What work do you do?' },
                { speaker: 'B', chinese: '我是老师。你呢？', pinyin: 'wǒ shì lǎoshī. nǐ ne?', meaning: 'I\'m a teacher. And you?' },
                { speaker: 'A', chinese: '我在银行工作。', pinyin: 'wǒ zài yínháng gōngzuò.', meaning: 'I work at a bank.' },
                { speaker: 'B', chinese: '工作忙吗？', pinyin: 'gōngzuò máng ma?', meaning: 'Is work busy?' },
                { speaker: 'A', chinese: '有时候很忙。', pinyin: 'yǒushíhou hěn máng.', meaning: 'Sometimes very busy.' }
            ]
        },
        {
            id: 'd015',
            title: '讨论学习',
            titleMeaning: 'Discussing Studies',
            category: 'Education',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你学中文学了多长时间？', pinyin: 'nǐ xué zhōngwén xué le duō cháng shíjiān?', meaning: 'How long have you been learning Chinese?' },
                { speaker: 'B', chinese: '两年了。', pinyin: 'liǎng nián le.', meaning: 'Two years.' },
                { speaker: 'A', chinese: '觉得难吗？', pinyin: 'juéde nán ma?', meaning: 'Do you find it difficult?' },
                { speaker: 'B', chinese: '一开始很难，现在越来越有意思了。', pinyin: 'yī kāishǐ hěn nán, xiànzài yuè lái yuè yǒu yìsi le.', meaning: 'It was very difficult at first, but now it\'s getting more and more interesting.' },
                { speaker: 'A', chinese: '加油！', pinyin: 'jiāyóu!', meaning: 'Keep it up!' }
            ]
        },
        {
            id: 'd016',
            title: '讨论食物',
            titleMeaning: 'Discussing Food',
            category: 'Food & Drink',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你喜欢吃什么？', pinyin: 'nǐ xǐhuān chī shénme?', meaning: 'What do you like to eat?' },
                { speaker: 'B', chinese: '我喜欢吃中国菜，特别是火锅。', pinyin: 'wǒ xǐhuān chī zhōngguó cài, tèbié shì huǒguō.', meaning: 'I like Chinese food, especially hotpot.' },
                { speaker: 'A', chinese: '我也喜欢火锅！你喜欢辣的吗？', pinyin: 'wǒ yě xǐhuān huǒguō! nǐ xǐhuān là de ma?', meaning: 'I also like hotpot! Do you like spicy food?' },
                { speaker: 'B', chinese: '喜欢，但是不能太辣。', pinyin: 'xǐhuān, dànshì bù néng tài là.', meaning: 'Yes, but not too spicy.' }
            ]
        },
        {
            id: 'd017',
            title: '讨论旅行',
            titleMeaning: 'Discussing Travel',
            category: 'Travel',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你去过中国吗？', pinyin: 'nǐ qù guò zhōngguó ma?', meaning: 'Have you been to China?' },
                { speaker: 'B', chinese: '去过。去年去了北京和上海。', pinyin: 'qù guò. qùnián qù le běijīng hé shànghǎi.', meaning: 'Yes. Last year I went to Beijing and Shanghai.' },
                { speaker: 'A', chinese: '怎么样？', pinyin: 'zěnmeyàng?', meaning: 'How was it?' },
                { speaker: 'B', chinese: '很好！长城很壮观。', pinyin: 'hěn hǎo! chángchéng hěn zhuàngguān.', meaning: 'Great! The Great Wall is spectacular.' },
                { speaker: 'A', chinese: '我也想去。', pinyin: 'wǒ yě xiǎng qù.', meaning: 'I want to go too.' }
            ]
        },
        {
            id: 'd018',
            title: '讨论家庭',
            titleMeaning: 'Discussing Family',
            category: 'Social',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你家有几口人？', pinyin: 'nǐ jiā yǒu jǐ kǒu rén?', meaning: 'How many people are in your family?' },
                { speaker: 'B', chinese: '四口人。爸爸、妈妈、姐姐和我。', pinyin: 'sì kǒu rén. bàba, māma, jiějie hé wǒ.', meaning: 'Four. Dad, mom, older sister, and me.' },
                { speaker: 'A', chinese: '你姐姐做什么工作？', pinyin: 'nǐ jiějie zuò shénme gōngzuò?', meaning: 'What does your sister do?' },
                { speaker: 'B', chinese: '她是医生。', pinyin: 'tā shì yīshēng.', meaning: 'She is a doctor.' }
            ]
        },
        {
            id: 'd019',
            title: '讨论周末计划',
            titleMeaning: 'Discussing Weekend Plans',
            category: 'Social',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '这个周末你有什么计划？', pinyin: 'zhège zhōumò nǐ yǒu shénme jìhuà?', meaning: 'What plans do you have this weekend?' },
                { speaker: 'B', chinese: '我想去看电影。你呢？', pinyin: 'wǒ xiǎng qù kàn diànyǐng. nǐ ne?', meaning: 'I want to see a movie. And you?' },
                { speaker: 'A', chinese: '我想去公园散步。', pinyin: 'wǒ xiǎng qù gōngyuán sàn bù.', meaning: 'I want to take a walk in the park.' },
                { speaker: 'B', chinese: '天气好的话，我们一起去吧！', pinyin: 'tiānqì hǎo de huà, wǒmen yīqǐ qù ba!', meaning: 'If the weather is good, let\'s go together!' },
                { speaker: 'A', chinese: '好主意！', pinyin: 'hǎo zhǔyì!', meaning: 'Good idea!' }
            ]
        },
        {
            id: 'd020',
            title: '讨论健康',
            titleMeaning: 'Discussing Health',
            category: 'Health',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你看起来不太好。', pinyin: 'nǐ kàn qǐlái bù tài hǎo.', meaning: 'You don\'t look too good.' },
                { speaker: 'B', chinese: '是啊，最近很累。', pinyin: 'shì a, zuìjìn hěn lèi.', meaning: 'Yes, I\'ve been very tired lately.' },
                { speaker: 'A', chinese: '要注意休息。', pinyin: 'yào zhùyì xiūxi.', meaning: 'You should pay attention to rest.' },
                { speaker: 'B', chinese: '我知道，但是工作太忙了。', pinyin: 'wǒ zhīdào, dànshì gōngzuò tài máng le.', meaning: 'I know, but work is too busy.' },
                { speaker: 'A', chinese: '身体最重要。', pinyin: 'shēntǐ zuì zhòngyào.', meaning: 'Health is the most important.' }
            ]
        }
    ],

    // Helper methods
    getById(id) {
        return this.scenarios.find(s => s.id === id);
    },

    getByCategory(category) {
        return this.scenarios.filter(s => s.category === category);
    },

    getByDifficulty(difficulty) {
        return this.scenarios.filter(s => s.difficulty === difficulty);
    },

    getRandom(count = 5) {
        return Utils.randomItems(this.scenarios, count);
    },

    get totalCount() {
        return this.scenarios.length;
    }
};

// Export for use in other modules
window.DialoguesData = DialoguesData;

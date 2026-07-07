// ============================================
// CHINESE MASTER - New Dialogue Extension (30 Dialogues)
// Appends to ListeningData.dialogue
// ============================================

(function() {
    var items = [
        // ================================================================
        // 01-03: Ordering food at a restaurant
        // ================================================================
        {
            id: 'ldnx_001', type: 'dialogue', difficulty: 'easy',
            title: '在饭馆点菜',
            titleMeaning: 'Ordering Dishes at a Restaurant',
            characters: [
                { name: '服务员', isNative: true },
                { name: '顾客', isNative: true }
            ],
            lines: [
                { speaker: 'A', chinese: '欢迎光临！请问几位？', pinyin: 'huānyíng guānglín! qǐngwèn jǐ wèi?', meaning: 'Welcome! How many people?' },
                { speaker: 'B', chinese: '两位。', pinyin: 'liǎng wèi.', meaning: 'Two people.' },
                { speaker: 'A', chinese: '请这边坐。这是菜单。', pinyin: 'qǐng zhè biān zuò. zhè shì càidān.', meaning: 'Please sit here. Here is the menu.' },
                { speaker: 'B', chinese: '我要一碗牛肉面和一份饺子。', pinyin: 'wǒ yào yī wǎn niúròumiàn hé yī fèn jiǎozi.', meaning: 'I want a bowl of beef noodles and an order of dumplings.' },
                { speaker: 'A', chinese: '好的，要喝点什么？', pinyin: 'hǎo de, yào hē diǎn shénme?', meaning: 'OK, anything to drink?' },
                { speaker: 'B', chinese: '两杯茶，谢谢。', pinyin: 'liǎng bēi chá, xièxiè.', meaning: 'Two cups of tea, thank you.' }
            ],
            questions: [
                { question: '几个人吃饭？', options: ['一个', '两个', '三个', '四个'], correct: 1 },
                { question: '他点了什么主食？', options: ['米饭', '牛肉面', '炒饭', '包子'], correct: 1 }
            ]
        },
        {
            id: 'ldnx_002', type: 'dialogue', difficulty: 'easy',
            title: '快餐店',
            titleMeaning: 'At a Fast Food Restaurant',
            characters: [
                { name: '店员', isNative: true },
                { name: '顾客', isNative: true }
            ],
            lines: [
                { speaker: 'A', chinese: '你好，我要一个汉堡和一杯可乐。', pinyin: 'nǐ hǎo, wǒ yào yī gè hànbǎo hé yī bēi kělè.', meaning: 'Hello, I want a hamburger and a cola.' },
                { speaker: 'B', chinese: '大的还是小的？', pinyin: 'dà de háishì xiǎo de?', meaning: 'Large or small?' },
                { speaker: 'A', chinese: '大的。还要一包薯条。', pinyin: 'dà de. hái yào yī bāo shǔtiáo.', meaning: 'Large. Also one order of fries.' },
                { speaker: 'B', chinese: '一共三十五块。在这里吃还是带走？', pinyin: 'yīgòng sānshíwǔ kuài. zài zhèlǐ chī háishì dài zǒu?', meaning: '35 yuan total. For here or to go?' },
                { speaker: 'A', chinese: '在这里吃。', pinyin: 'zài zhèlǐ chī.', meaning: 'For here.' }
            ],
            questions: [
                { question: '一共多少钱？', options: ['二十五块', '三十块', '三十五块', '四十块'], correct: 2 },
                { question: '他选了什么尺寸？', options: ['小的', '中的', '大的', '没选'], correct: 2 }
            ]
        },
        {
            id: 'ldnx_003', type: 'dialogue', difficulty: 'medium',
            title: '点四川菜',
            titleMeaning: 'Ordering Sichuan Food',
            characters: [
                { name: '服务员', isNative: true },
                { name: '顾客', isNative: true }
            ],
            lines: [
                { speaker: 'A', chinese: '你们这里的特色菜是什么？', pinyin: 'nǐmen zhèlǐ de tèsè cài shì shénme?', meaning: 'What are your specialty dishes here?' },
                { speaker: 'B', chinese: '我们的麻婆豆腐和水煮鱼都很有名。', pinyin: 'wǒmen de mápó dòufu hé shuǐzhǔyú dōu hěn yǒumíng.', meaning: 'Our mapo tofu and boiled fish are both very famous.' },
                { speaker: 'A', chinese: '这两个菜辣不辣？', pinyin: 'zhè liǎng gè cài là bù là?', meaning: 'Are these two dishes spicy?' },
                { speaker: 'B', chinese: '麻婆豆腐有点辣，水煮鱼很辣。', pinyin: 'mápó dòufu yǒudiǎn là, shuǐzhǔyú hěn là.', meaning: 'Mapo tofu is a bit spicy, boiled fish is very spicy.' },
                { speaker: 'A', chinese: '那我要麻婆豆腐和一碗米饭。', pinyin: 'nà wǒ yào mápó dòufu hé yī wǎn mǐfàn.', meaning: 'Then I\'ll have mapo tofu and a bowl of rice.' },
                { speaker: 'B', chinese: '好的，请稍等。', pinyin: 'hǎo de, qǐng shāo děng.', meaning: 'OK, please wait a moment.' }
            ],
            questions: [
                { question: '水煮鱼怎么样？', options: ['不辣', '有点辣', '很辣', '甜的'], correct: 2 },
                { question: '顾客最后点了什么菜？', options: ['水煮鱼', '麻婆豆腐', '宫保鸡丁', '回锅肉'], correct: 1 }
            ]
        },

        // ================================================================
        // 04-06: Shopping / buying things
        // ================================================================
        {
            id: 'ldnx_004', type: 'dialogue', difficulty: 'easy',
            title: '买水果',
            titleMeaning: 'Buying Fruit',
            characters: [
                { name: '摊主', isNative: true },
                { name: '顾客', isNative: true }
            ],
            lines: [
                { speaker: 'A', chinese: '苹果怎么卖？', pinyin: 'píngguǒ zěnme mài?', meaning: 'How much are the apples?' },
                { speaker: 'B', chinese: '八块钱一斤，很甜的。', pinyin: 'bā kuài qián yī jīn, hěn tián de.', meaning: '8 yuan per jin, very sweet.' },
                { speaker: 'A', chinese: '给我来三斤。香蕉呢？', pinyin: 'gěi wǒ lái sān jīn. xiāngjiāo ne?', meaning: 'Give me three jin. How about bananas?' },
                { speaker: 'B', chinese: '香蕉五块钱一斤。', pinyin: 'xiāngjiāo wǔ kuài qián yī jīn.', meaning: 'Bananas are 5 yuan per jin.' },
                { speaker: 'A', chinese: '那再来两斤香蕉。一共多少钱？', pinyin: 'nà zài lái liǎng jīn xiāngjiāo. yīgòng duōshao qián?', meaning: 'Then also two jin of bananas. How much total?' },
                { speaker: 'B', chinese: '三斤苹果二十四块，两斤香蕉十块，一共三十四块。', pinyin: 'sān jīn píngguǒ èrshísì kuài, liǎng jīn xiāngjiāo shí kuài, yīgòng sānshísì kuài.', meaning: '3 jin of apples 24 yuan, 2 jin of bananas 10 yuan, 34 yuan total.' }
            ],
            questions: [
                { question: '苹果多少钱一斤？', options: ['五块', '六块', '八块', '十块'], correct: 2 },
                { question: '一共多少钱？', options: ['二十四块', '三十块', '三十四块', '四十块'], correct: 2 }
            ]
        },
        {
            id: 'ldnx_005', type: 'dialogue', difficulty: 'easy',
            title: '买衣服',
            titleMeaning: 'Buying Clothes',
            characters: [
                { name: '店员', isNative: true },
                { name: '顾客', isNative: true }
            ],
            lines: [
                { speaker: 'A', chinese: '这件衣服多少钱？', pinyin: 'zhè jiàn yīfu duōshao qián?', meaning: 'How much is this clothing?' },
                { speaker: 'B', chinese: '两百块。', pinyin: 'liǎng bǎi kuài.', meaning: '200 yuan.' },
                { speaker: 'A', chinese: '可以试穿一下吗？', pinyin: 'kěyǐ shìchuān yīxià ma?', meaning: 'Can I try it on?' },
                { speaker: 'B', chinese: '当然可以，试衣间在那边。', pinyin: 'dāngrán kěyǐ, shìyījiān zài nà biān.', meaning: 'Of course, the fitting room is over there.' },
                { speaker: 'A', chinese: '很合适。我买了。', pinyin: 'hěn héshì. wǒ mǎi le.', meaning: 'It fits well. I\'ll buy it.' }
            ],
            questions: [
                { question: '衣服多少钱？', options: ['一百块', '两百块', '三百块', '四百块'], correct: 1 },
                { question: '顾客先做了什么？', options: ['付钱', '试穿', '讲价', '走了'], correct: 1 }
            ]
        },
        {
            id: 'ldnx_006', type: 'dialogue', difficulty: 'medium',
            title: '讨价还价',
            titleMeaning: 'Bargaining at the Market',
            characters: [
                { name: '店主', isNative: true },
                { name: '顾客', isNative: true }
            ],
            lines: [
                { speaker: 'A', chinese: '老板，这个包怎么卖？', pinyin: 'lǎobǎn, zhège bāo zěnme mài?', meaning: 'Boss, how much is this bag?' },
                { speaker: 'B', chinese: '三百五十块，质量很好的。', pinyin: 'sānbǎi wǔshí kuài, zhìliàng hěn hǎo de.', meaning: '350 yuan, the quality is very good.' },
                { speaker: 'A', chinese: '太贵了！两百块卖不卖？', pinyin: 'tài guì le! liǎng bǎi kuài mài bù mài?', meaning: 'Too expensive! Will you sell for 200?' },
                { speaker: 'B', chinese: '两百太少了，最少两百八。', pinyin: 'liǎng bǎi tài shǎo le, zuì shǎo liǎng bǎi bā.', meaning: '200 is too little, at least 280.' },
                { speaker: 'A', chinese: '两百五行不行？行的话我就拿。', pinyin: 'liǎng bǎi wǔ xíng bù xíng? xíng dehuà wǒ jiù ná.', meaning: 'How about 250? If OK I\'ll take it.' },
                { speaker: 'B', chinese: '好吧好吧，两百五给你了。', pinyin: 'hǎo ba hǎo ba, liǎng bǎi wǔ gěi nǐ le.', meaning: 'Alright alright, 250, it\'s yours.' }
            ],
            questions: [
                { question: '原价是多少？', options: ['两百五十块', '三百块', '三百五十块', '四百块'], correct: 2 },
                { question: '最后多少钱成交？', options: ['两百', '两百五', '两百八', '三百'], correct: 1 }
            ]
        },

        // ================================================================
        // 07-09: Asking for directions
        // ================================================================
        {
            id: 'ldnx_007', type: 'dialogue', difficulty: 'easy',
            title: '问路去银行',
            titleMeaning: 'Asking Directions to the Bank',
            characters: [
                { name: '路人甲', isNative: true },
                { name: '路人乙', isNative: true }
            ],
            lines: [
                { speaker: 'A', chinese: '请问，最近的银行怎么走？', pinyin: 'qǐngwèn, zuìjìn de yínháng zěnme zǒu?', meaning: 'Excuse me, how do I get to the nearest bank?' },
                { speaker: 'B', chinese: '一直往前走，第一个路口右转。', pinyin: 'yīzhí wǎng qián zǒu, dì-yī gè lùkǒu yòu zhuǎn.', meaning: 'Go straight ahead, turn right at the first intersection.' },
                { speaker: 'A', chinese: '远不远？', pinyin: 'yuǎn bù yuǎn?', meaning: 'Is it far?' },
                { speaker: 'B', chinese: '不远，走路五分钟就到了。', pinyin: 'bù yuǎn, zǒulù wǔ fēnzhōng jiù dào le.', meaning: 'Not far, just five minutes walking.' },
                { speaker: 'A', chinese: '谢谢你！', pinyin: 'xièxiè nǐ!', meaning: 'Thank you!' }
            ],
            questions: [
                { question: '他想去哪里？', options: ['超市', '银行', '医院', '学校'], correct: 1 },
                { question: '走路要多久？', options: ['两分钟', '五分钟', '十分钟', '十五分钟'], correct: 1 }
            ]
        },
        {
            id: 'ldnx_008', type: 'dialogue', difficulty: 'medium',
            title: '问路去公园',
            titleMeaning: 'Asking Directions to the Park',
            characters: [
                { name: '路人甲', isNative: true },
                { name: '路人乙', isNative: true }
            ],
            lines: [
                { speaker: 'A', chinese: '不好意思，请问附近有公园吗？', pinyin: 'bù hǎoyìsi, qǐngwèn fùjìn yǒu gōngyuán ma?', meaning: 'Excuse me, is there a park nearby?' },
                { speaker: 'B', chinese: '有，前面红绿灯左转就到了。', pinyin: 'yǒu, qiánmiàn hónglǜdēng zuǒ zhuǎn jiù dào le.', meaning: 'Yes, turn left at the traffic light ahead and you\'ll be there.' },
                { speaker: 'A', chinese: '走路远吗？要走多久？', pinyin: 'zǒulù yuǎn ma? yào zǒu duō jiǔ?', meaning: 'Is it far on foot? How long to walk?' },
                { speaker: 'B', chinese: '大概十分钟。你也可以坐公交车，一站路。', pinyin: 'dàgài shí fēnzhōng. nǐ yě kěyǐ zuò gōngjiāochē, yī zhàn lù.', meaning: 'About ten minutes. You can also take the bus, just one stop.' },
                { speaker: 'A', chinese: '好的，我走路去吧。谢谢你！', pinyin: 'hǎo de, wǒ zǒulù qù ba. xièxiè nǐ!', meaning: 'OK, I\'ll walk. Thank you!' }
            ],
            questions: [
                { question: '在红绿灯那里怎么走？', options: ['右转', '左转', '直走', '掉头'], correct: 1 },
                { question: '走路大概要多久？', options: ['五分钟', '十分钟', '十五分钟', '二十分钟'], correct: 1 }
            ]
        },
        {
            id: 'ldnx_009', type: 'dialogue', difficulty: 'medium',
            title: '找地铁站',
            titleMeaning: 'Finding the Subway Station',
            characters: [
                { name: '游客', isNative: true },
                { name: '路人', isNative: true }
            ],
            lines: [
                { speaker: 'A', chinese: '你好，请问地铁站在哪里？', pinyin: 'nǐ hǎo, qǐngwèn dìtiě zhàn zài nǎlǐ?', meaning: 'Hello, where is the subway station?' },
                { speaker: 'B', chinese: '你沿着这条路一直走，过两个路口就能看到。', pinyin: 'nǐ yánzhe zhè tiáo lù yīzhí zǒu, guò liǎng gè lùkǒu jiù néng kàn dào.', meaning: 'Follow this road straight, after two intersections you\'ll see it.' },
                { speaker: 'A', chinese: '从这儿到地铁站大概多远？', pinyin: 'cóng zhèr dào dìtiě zhàn dàgài duō yuǎn?', meaning: 'About how far is it from here to the station?' },
                { speaker: 'B', chinese: '不太远，走路大概七八分钟。', pinyin: 'bù tài yuǎn, zǒulù dàgài qī bā fēnzhōng.', meaning: 'Not too far, about 7-8 minutes on foot.' },
                { speaker: 'A', chinese: '谢谢，非常感谢！', pinyin: 'xièxiè, fēicháng gǎnxiè!', meaning: 'Thanks, thank you very much!' },
                { speaker: 'B', chinese: '不客气！', pinyin: 'bù kèqì!', meaning: 'You\'re welcome!' }
            ],
            questions: [
                { question: '他要去哪里？', options: ['公交站', '地铁站', '火车站', '机场'], correct: 1 },
                { question: '要过几个路口？', options: ['一个', '两个', '三个', '四个'], correct: 1 }
            ]
        },

        // ================================================================
        // 10-12: Introducing yourself / meeting people
        // ================================================================
        {
            id: 'ldnx_010', type: 'dialogue', difficulty: 'easy',
            title: '自我介绍',
            titleMeaning: 'Self Introduction',
            characters: [
                { name: '小李', isNative: true },
                { name: '小王', isNative: true }
            ],
            lines: [
                { speaker: 'A', chinese: '你好，我叫小李。你叫什么？', pinyin: 'nǐ hǎo, wǒ jiào xiǎo lǐ. nǐ jiào shénme?', meaning: 'Hello, my name is Xiao Li. What\'s your name?' },
                { speaker: 'B', chinese: '我叫小王。很高兴认识你！', pinyin: 'wǒ jiào xiǎo wáng. hěn gāoxìng rènshi nǐ!', meaning: 'My name is Xiao Wang. Nice to meet you!' },
                { speaker: 'A', chinese: '我也很高兴。你是学生吗？', pinyin: 'wǒ yě hěn gāoxìng. nǐ shì xuéshēng ma?', meaning: 'Me too. Are you a student?' },
                { speaker: 'B', chinese: '是的，我学中文。你呢？', pinyin: 'shì de, wǒ xué zhōngwén. nǐ ne?', meaning: 'Yes, I study Chinese. And you?' },
                { speaker: 'A', chinese: '我已经工作了，在一家公司上班。', pinyin: 'wǒ yǐjīng gōngzuò le, zài yī jiā gōngsī shàngbān.', meaning: 'I already work, at a company.' }
            ],
            questions: [
                { question: '小王学什么？', options: ['英语', '中文', '数学', '科学'], correct: 1 },
                { question: '小李做什么？', options: ['学生', '老师', '在公司上班', '没工作'], correct: 2 }
            ]
        },
        {
            id: 'ldnx_011', type: 'dialogue', difficulty: 'easy',
            title: '第一次见面',
            titleMeaning: 'First Meeting',
            characters: [
                { name: '张伟', isNative: true },
                { name: '王芳', isNative: true }
            ],
            lines: [
                { speaker: 'A', chinese: '你好！你是新来的同事吗？', pinyin: 'nǐ hǎo! nǐ shì xīn lái de tóngshì ma?', meaning: 'Hello! Are you a new colleague?' },
                { speaker: 'B', chinese: '是的，我今天第一天上班。我叫王芳。', pinyin: 'shì de, wǒ jīntiān dì-yī tiān shàngbān. wǒ jiào wáng fāng.', meaning: 'Yes, today is my first day. My name is Wang Fang.' },
                { speaker: 'A', chinese: '我叫张伟，在这里工作两年了。欢迎你！', pinyin: 'wǒ jiào zhāng wěi, zài zhèlǐ gōngzuò liǎng nián le. huānyíng nǐ!', meaning: 'I\'m Zhang Wei, I\'ve worked here for two years. Welcome!' },
                { speaker: 'B', chinese: '谢谢你！以后请多多关照。', pinyin: 'xièxiè nǐ! yǐhòu qǐng duōduō guānzhào.', meaning: 'Thank you! Please take care of me in the future.' }
            ],
            questions: [
                { question: '张伟在这里工作多久了？', options: ['一年', '两年', '三年', '刚来'], correct: 1 },
                { question: '王芳什么时候开始上班？', options: ['昨天', '今天', '明天', '上周'], correct: 1 }
            ]
        },
        {
            id: 'ldnx_012', type: 'dialogue', difficulty: 'medium',
            title: '参加聚会认识新朋友',
            titleMeaning: 'Meeting New Friends at a Party',
            characters: [
                { name: '小明', isNative: true },
                { name: '大卫', isNative: false }
            ],
            lines: [
                { speaker: 'A', chinese: '你好，我叫小明。你看起来很面熟。', pinyin: 'nǐ hǎo, wǒ jiào xiǎo míng. nǐ kàn qǐlái hěn miànshú.', meaning: 'Hello, I\'m Xiao Ming. You look familiar.' },
                { speaker: 'B', chinese: '我叫大卫，我是美国人。你会说英语吗？', pinyin: 'wǒ jiào dà wèi, wǒ shì měiguó rén. nǐ huì shuō yīngyǔ ma?', meaning: 'I\'m David, I\'m American. Can you speak English?' },
                { speaker: 'A', chinese: '我会说一点。你来中国多久了？', pinyin: 'wǒ huì shuō yīdiǎn. nǐ lái zhōngguó duō jiǔ le?', meaning: 'I can speak a little. How long have you been in China?' },
                { speaker: 'B', chinese: '我来中国半年了，我在学中文。', pinyin: 'wǒ lái zhōngguó bàn nián le, wǒ zài xué zhōngwén.', meaning: 'I\'ve been in China for half a year, I\'m learning Chinese.' },
                { speaker: 'A', chinese: '你的中文不错！我们可以互相学习。', pinyin: 'nǐ de zhōngwén bùcuò! wǒmen kěyǐ hùxiāng xuéxí.', meaning: 'Your Chinese is good! We can learn from each other.' }
            ],
            questions: [
                { question: '大卫是哪国人？', options: ['中国人', '美国人', '英国人', '日本人'], correct: 1 },
                { question: '大卫来中国多久了？', options: ['三个月', '半年', '一年', '两年'], correct: 1 }
            ]
        },

        // ================================================================
        // 13-15: Talking about weather
        // ================================================================
        {
            id: 'ldnx_013', type: 'dialogue', difficulty: 'easy',
            title: '今天的天气',
            titleMeaning: 'Today\'s Weather',
            characters: [
                { name: '妈妈', isNative: true },
                { name: '孩子', isNative: true }
            ],
            lines: [
                { speaker: 'A', chinese: '妈妈，今天天气怎么样？', pinyin: 'māma, jīntiān tiānqì zěnmeyàng?', meaning: 'Mom, how is the weather today?' },
                { speaker: 'B', chinese: '今天是晴天，但是有点冷。', pinyin: 'jīntiān shì qíngtiān, dànshì yǒudiǎn lěng.', meaning: 'It\'s sunny today, but a little cold.' },
                { speaker: 'A', chinese: '那我穿毛衣可以吗？', pinyin: 'nà wǒ chuān máoyī kěyǐ ma?', meaning: 'Then can I wear a sweater?' },
                { speaker: 'B', chinese: '可以，再带一件外套吧。', pinyin: 'kěyǐ, zài dài yī jiàn wàitào ba.', meaning: 'Yes, and bring a jacket too.' },
                { speaker: 'A', chinese: '好的。明天会不会下雨？', pinyin: 'hǎo de. míngtiān huì bù huì xiàyǔ?', meaning: 'OK. Will it rain tomorrow?' },
                { speaker: 'B', chinese: '天气预报说明天有雨。', pinyin: 'tiānqì yùbào shuō míngtiān yǒu yǔ.', meaning: 'The weather forecast says it will rain tomorrow.' }
            ],
            questions: [
                { question: '今天是什么天气？', options: ['下雨', '阴天', '晴天', '下雪'], correct: 2 },
                { question: '明天天气怎么样？', options: ['晴天', '下雨', '下雪', '阴天'], correct: 1 }
            ]
        },
        {
            id: 'ldnx_014', type: 'dialogue', difficulty: 'easy',
            title: '春天来了',
            titleMeaning: 'Spring Has Come',
            characters: [
                { name: '小红', isNative: true },
                { name: '小丽', isNative: true }
            ],
            lines: [
                { speaker: 'A', chinese: '今天天气真好！不冷也不热。', pinyin: 'jīntiān tiānqì zhēn hǎo! bù lěng yě bù rè.', meaning: 'The weather is so nice today! Not cold and not hot.' },
                { speaker: 'B', chinese: '是啊，春天来了。花都开了。', pinyin: 'shì a, chūntiān lái le. huā dōu kāi le.', meaning: 'Yes, spring has come. The flowers are blooming.' },
                { speaker: 'A', chinese: '我特别喜欢春天。你想出去走走吗？', pinyin: 'wǒ tèbié xǐhuan chūntiān. nǐ xiǎng chūqù zǒuzǒu ma?', meaning: 'I especially like spring. Do you want to go out for a walk?' },
                { speaker: 'B', chinese: '好啊，我们去公园吧。', pinyin: 'hǎo a, wǒmen qù gōngyuán ba.', meaning: 'Sure, let\'s go to the park.' }
            ],
            questions: [
                { question: '现在是什么季节？', options: ['冬天', '夏天', '春天', '秋天'], correct: 2 },
                { question: '他们打算去哪里？', options: ['商场', '公园', '图书馆', '电影院'], correct: 1 }
            ]
        },
        {
            id: 'ldnx_015', type: 'dialogue', difficulty: 'medium',
            title: '夏天太热了',
            titleMeaning: 'Summer Is Too Hot',
            characters: [
                { name: '大伟', isNative: true },
                { name: '小杰', isNative: true }
            ],
            lines: [
                { speaker: 'A', chinese: '今天太热了！多少度啊？', pinyin: 'jīntiān tài rè le! duōshao dù a?', meaning: 'It\'s so hot today! How many degrees is it?' },
                { speaker: 'B', chinese: '我看了手机，现在三十六度。', pinyin: 'wǒ kàn le shǒujī, xiànzài sānshíliù dù.', meaning: 'I checked my phone, it\'s 36 degrees now.' },
                { speaker: 'A', chinese: '难怪这么热！我想去游泳。', pinyin: 'nánguài zhème rè! wǒ xiǎng qù yóuyǒng.', meaning: 'No wonder it\'s so hot! I want to go swimming.' },
                { speaker: 'B', chinese: '好主意！我知道附近有个游泳池。', pinyin: 'hǎo zhǔyì! wǒ zhīdào fùjìn yǒu gè yóuyǒngchí.', meaning: 'Good idea! I know there\'s a swimming pool nearby.' },
                { speaker: 'A', chinese: '太好了！我们现在就去吧。', pinyin: 'tài hǎo le! wǒmen xiànzài jiù qù ba.', meaning: 'Great! Let\'s go right now.' }
            ],
            questions: [
                { question: '今天多少度？', options: ['二十六度', '三十度', '三十六度', '四十度'], correct: 2 },
                { question: '他们想去做什么？', options: ['爬山', '游泳', '跑步', '逛街'], correct: 1 }
            ]
        },

        // ================================================================
        // 16-18: Making plans with friends
        // ================================================================
        {
            id: 'ldnx_016', type: 'dialogue', difficulty: 'easy',
            title: '周末一起看电影',
            titleMeaning: 'Going to a Movie on the Weekend',
            characters: [
                { name: '小刚', isNative: true },
                { name: '小华', isNative: true }
            ],
            lines: [
                { speaker: 'A', chinese: '这个周末你有空吗？', pinyin: 'zhège zhōumò nǐ yǒu kòng ma?', meaning: 'Are you free this weekend?' },
                { speaker: 'B', chinese: '有空。你有什么打算？', pinyin: 'yǒu kòng. nǐ yǒu shénme dǎsuàn?', meaning: 'I\'m free. What do you have in mind?' },
                { speaker: 'A', chinese: '我们一起去看电影吧，最近有新片上。', pinyin: 'wǒmen yīqǐ qù kàn diànyǐng ba, zuìjìn yǒu xīn piàn shàng.', meaning: 'Let\'s go watch a movie together, there\'s a new film out recently.' },
                { speaker: 'B', chinese: '好啊！星期六下午可以吗？', pinyin: 'hǎo a! xīngqīliù xiàwǔ kěyǐ ma?', meaning: 'Sure! Is Saturday afternoon OK?' },
                { speaker: 'A', chinese: '可以，几点见？', pinyin: 'kěyǐ, jǐ diǎn jiàn?', meaning: 'Yes, what time shall we meet?' },
                { speaker: 'B', chinese: '下午两点在电影院门口见。', pinyin: 'xiàwǔ liǎng diǎn zài diànyǐngyuàn ménkǒu jiàn.', meaning: 'Let\'s meet at 2 PM at the cinema entrance.' }
            ],
            questions: [
                { question: '他们约在星期几？', options: ['星期五', '星期六', '星期天', '星期四'], correct: 1 },
                { question: '几点见面？', options: ['一点', '两点', '三点', '四点'], correct: 1 }
            ]
        },
        {
            id: 'ldnx_017', type: 'dialogue', difficulty: 'medium',
            title: '约朋友吃饭',
            titleMeaning: 'Inviting a Friend to Eat',
            characters: [
                { name: '小刘', isNative: true },
                { name: '小陈', isNative: true }
            ],
            lines: [
                { speaker: 'A', chinese: '小陈，好久没见面了！这个星期一起吃个饭吧？', pinyin: 'xiǎo chén, hǎojiǔ méi jiànmiàn le! zhège xīngqī yīqǐ chī gè fàn ba?', meaning: 'Xiao Chen, long time no see! Let\'s have a meal together this week?' },
                { speaker: 'B', chinese: '好啊！我正想找你呢。你想吃什么？', pinyin: 'hǎo a! wǒ zhèng xiǎng zhǎo nǐ ne. nǐ xiǎng chī shénme?', meaning: 'Sure! I was just thinking of finding you. What do you want to eat?' },
                { speaker: 'A', chinese: '学校旁边新开了一家火锅店，去试试？', pinyin: 'xuéxiào pángbiān xīn kāi le yī jiā huǒguō diàn, qù shìshì?', meaning: 'A new hotpot restaurant opened next to the school, want to try it?' },
                { speaker: 'B', chinese: '好！星期五晚上六点怎么样？', pinyin: 'hǎo! xīngqīwǔ wǎnshang liù diǎn zěnmeyàng?', meaning: 'OK! How about Friday at 6 PM?' },
                { speaker: 'A', chinese: '没问题。到时候见！', pinyin: 'méi wèntí. dào shíhou jiàn!', meaning: 'No problem. See you then!' }
            ],
            questions: [
                { question: '他们要去吃什么？', options: ['炒菜', '火锅', '烧烤', '面条'], correct: 1 },
                { question: '约在什么时间？', options: ['星期四晚上六点', '星期五晚上六点', '星期六晚上六点', '星期五中午'], correct: 1 }
            ]
        },
        {
            id: 'ldnx_018', type: 'dialogue', difficulty: 'medium',
            title: '一起去爬山',
            titleMeaning: 'Going Hiking Together',
            characters: [
                { name: '大明', isNative: true },
                { name: '小强', isNative: true }
            ],
            lines: [
                { speaker: 'A', chinese: '明天天气会很好，我们去爬山吧！', pinyin: 'míngtiān tiānqì huì hěn hǎo, wǒmen qù páshān ba!', meaning: 'The weather will be nice tomorrow, let\'s go hiking!' },
                { speaker: 'B', chinese: '好啊，我好久没运动了。几点出发？', pinyin: 'hǎo a, wǒ hǎojiǔ méi yùndòng le. jǐ diǎn chūfā?', meaning: 'Sure, I haven\'t exercised in a long time. What time do we leave?' },
                { speaker: 'A', chinese: '早上七点出发吧，早一点凉快。', pinyin: 'zǎoshang qī diǎn chūfā ba, zǎo yīdiǎn liángkuài.', meaning: 'Let\'s leave at 7 AM, it\'s cooler earlier.' },
                { speaker: 'B', chinese: '太早了！八点行不行？', pinyin: 'tài zǎo le! bā diǎn xíng bù xíng?', meaning: 'Too early! How about 8 AM?' },
                { speaker: 'A', chinese: '行。要带水和吃的吗？', pinyin: 'xíng. yào dài shuǐ hé chī de ma?', meaning: 'OK. Should we bring water and food?' },
                { speaker: 'B', chinese: '对，我多带一些，你不用操心。', pinyin: 'duì, wǒ duō dài yīxiē, nǐ bùyòng cāoxīn.', meaning: 'Yes, I\'ll bring extra, don\'t worry about it.' }
            ],
            questions: [
                { question: '他们最后几点出发？', options: ['六点', '七点', '八点', '九点'], correct: 2 },
                { question: '谁多带水和吃的？', options: ['大明', '小强', '两个人都带', '都不带'], correct: 1 }
            ]
        },

        // ================================================================
        // 19-21: At the doctor's office
        // ================================================================
        {
            id: 'ldnx_019', type: 'dialogue', difficulty: 'easy',
            title: '看医生',
            titleMeaning: 'Seeing the Doctor',
            characters: [
                { name: '医生', isNative: true },
                { name: '病人', isNative: true }
            ],
            lines: [
                { speaker: 'A', chinese: '你哪里不舒服？', pinyin: 'nǐ nǎlǐ bù shūfu?', meaning: 'Where do you feel unwell?' },
                { speaker: 'B', chinese: '我头疼，还咳嗽。', pinyin: 'wǒ tóuténg, hái késòu.', meaning: 'I have a headache and a cough.' },
                { speaker: 'A', chinese: '发烧吗？', pinyin: 'fāshāo ma?', meaning: 'Do you have a fever?' },
                { speaker: 'B', chinese: '有一点，昨天晚上开始的。', pinyin: 'yǒu yīdiǎn, zuótiān wǎnshang kāishǐ de.', meaning: 'A little, it started last night.' },
                { speaker: 'A', chinese: '是感冒，我给你开点药。多喝水。', pinyin: 'shì gǎnmào, wǒ gěi nǐ kāi diǎn yào. duō hē shuǐ.', meaning: 'It\'s a cold, I\'ll prescribe some medicine. Drink plenty of water.' },
                { speaker: 'B', chinese: '谢谢医生。药一天吃几次？', pinyin: 'xièxiè yīshēng. yào yī tiān chī jǐ cì?', meaning: 'Thank you doctor. How many times a day for the medicine?' },
                { speaker: 'A', chinese: '一天三次，饭后吃。', pinyin: 'yī tiān sān cì, fàn hòu chī.', meaning: 'Three times a day, after meals.' }
            ],
            questions: [
                { question: '病人有什么症状？', options: ['肚子疼', '头疼咳嗽', '腿疼', '牙疼'], correct: 1 },
                { question: '一天吃几次药？', options: ['一次', '两次', '三次', '四次'], correct: 2 }
            ]
        },
        {
            id: 'ldnx_020', type: 'dialogue', difficulty: 'medium',
            title: '看牙医',
            titleMeaning: 'Seeing the Dentist',
            characters: [
                { name: '牙医', isNative: true },
                { name: '病人', isNative: true }
            ],
            lines: [
                { speaker: 'A', chinese: '医生，我牙疼得厉害。', pinyin: 'yīshēng, wǒ yá téng de lìhài.', meaning: 'Doctor, my tooth hurts badly.' },
                { speaker: 'B', chinese: '让我看看。哪一边疼？', pinyin: 'ràng wǒ kànkan. nǎ yībiān téng?', meaning: 'Let me see. Which side hurts?' },
                { speaker: 'A', chinese: '右边，下面那颗牙。', pinyin: 'yòubiān, xiàmiàn nà kē yá.', meaning: 'Right side, the tooth on the bottom.' },
                { speaker: 'B', chinese: '这颗牙有一个洞，需要补一下。', pinyin: 'zhè kē yá yǒu yī gè dòng, xūyào bǔ yīxià.', meaning: 'This tooth has a cavity, it needs to be filled.' },
                { speaker: 'A', chinese: '疼不疼啊？我有点怕。', pinyin: 'téng bù téng a? wǒ yǒudiǎn pà.', meaning: 'Does it hurt? I\'m a little scared.' },
                { speaker: 'B', chinese: '不疼，我会给你打麻药。放轻松。', pinyin: 'bù téng, wǒ huì gěi nǐ dǎ máyào. fàng qīngsōng.', meaning: 'It won\'t hurt, I\'ll give you anesthesia. Relax.' }
            ],
            questions: [
                { question: '哪颗牙有问题？', options: ['左边上面的', '左边下面的', '右边上面的', '右边下面的'], correct: 3 },
                { question: '医生要做什么？', options: ['拔牙', '补牙', '洗牙', '种牙'], correct: 1 }
            ]
        },
        {
            id: 'ldnx_021', type: 'dialogue', difficulty: 'medium',
            title: '买药',
            titleMeaning: 'Buying Medicine at the Pharmacy',
            characters: [
                { name: '药剂师', isNative: true },
                { name: '顾客', isNative: true }
            ],
            lines: [
                { speaker: 'A', chinese: '你好，我想买点感冒药。', pinyin: 'nǐ hǎo, wǒ xiǎng mǎi diǎn gǎnmào yào.', meaning: 'Hello, I want to buy some cold medicine.' },
                { speaker: 'B', chinese: '你有什么症状？发烧吗？', pinyin: 'nǐ yǒu shénme zhèngzhuàng? fāshāo ma?', meaning: 'What symptoms do you have? Do you have a fever?' },
                { speaker: 'A', chinese: '不发烧，就是流鼻涕和打喷嚏。', pinyin: 'bù fāshāo, jiùshì liú bítì hé dǎ pēntì.', meaning: 'No fever, just a runny nose and sneezing.' },
                { speaker: 'B', chinese: '那吃这个药就行了。一天两次，每次一粒。', pinyin: 'nà chī zhège yào jiù xíng le. yī tiān liǎng cì, měi cì yī lì.', meaning: 'Then just take this medicine. Twice a day, one pill each time.' },
                { speaker: 'A', chinese: '多少钱？', pinyin: 'duōshao qián?', meaning: 'How much?' },
                { speaker: 'B', chinese: '二十五块。', pinyin: 'èrshíwǔ kuài.', meaning: '25 yuan.' }
            ],
            questions: [
                { question: '顾客有什么症状？', options: ['发烧', '咳嗽', '流鼻涕打喷嚏', '头疼'], correct: 2 },
                { question: '药一天吃几次？', options: ['一次', '两次', '三次', '四次'], correct: 1 }
            ]
        },

        // ================================================================
        // 22-24: Phone conversations
        // ================================================================
        {
            id: 'ldnx_022', type: 'dialogue', difficulty: 'easy',
            title: '打电话找朋友',
            titleMeaning: 'Calling a Friend',
            characters: [
                { name: '小张', isNative: true },
                { name: '小李', isNative: true }
            ],
            lines: [
                { speaker: 'A', chinese: '喂，你好！是小李吗？', pinyin: 'wéi, nǐ hǎo! shì xiǎo lǐ ma?', meaning: 'Hello! Is this Xiao Li?' },
                { speaker: 'B', chinese: '是我。你是谁？', pinyin: 'shì wǒ. nǐ shì shéi?', meaning: 'It\'s me. Who is this?' },
                { speaker: 'A', chinese: '我是小张。你明天有空吗？', pinyin: 'wǒ shì xiǎo zhāng. nǐ míngtiān yǒu kòng ma?', meaning: 'I\'m Xiao Zhang. Are you free tomorrow?' },
                { speaker: 'B', chinese: '有空。什么事？', pinyin: 'yǒu kòng. shénme shì?', meaning: 'I\'m free. What\'s up?' },
                { speaker: 'A', chinese: '我想请你吃午饭。十二点可以吗？', pinyin: 'wǒ xiǎng qǐng nǐ chī wǔfàn. shí\'èr diǎn kěyǐ ma?', meaning: 'I want to treat you to lunch. Is 12 PM OK?' },
                { speaker: 'B', chinese: '好啊，在哪里见面？', pinyin: 'hǎo a, zài nǎlǐ jiànmiàn?', meaning: 'Sure, where shall we meet?' },
                { speaker: 'A', chinese: '在我们上次去的那家饭店。', pinyin: 'zài wǒmen shàngcì qù de nà jiā fàndiàn.', meaning: 'At the restaurant we went to last time.' }
            ],
            questions: [
                { question: '打电话的人是谁？', options: ['小李', '小张', '小王', '小明'], correct: 1 },
                { question: '明天几点见面？', options: ['十一点', '十二点', '一点', '晚上'], correct: 1 }
            ]
        },
        {
            id: 'ldnx_023', type: 'dialogue', difficulty: 'medium',
            title: '电话预约餐厅',
            titleMeaning: 'Making a Restaurant Reservation by Phone',
            characters: [
                { name: '顾客', isNative: true },
                { name: '餐厅前台', isNative: true }
            ],
            lines: [
                { speaker: 'A', chinese: '喂，你好！我想订个位子。', pinyin: 'wéi, nǐ hǎo! wǒ xiǎng dìng gè wèizi.', meaning: 'Hello! I\'d like to book a table.' },
                { speaker: 'B', chinese: '好的。请问几位？什么时候？', pinyin: 'hǎo de. qǐngwèn jǐ wèi? shénme shíhou?', meaning: 'OK. How many people, and when?' },
                { speaker: 'A', chinese: '四个人，星期六晚上七点。', pinyin: 'sì gè rén, xīngqīliù wǎnshang qī diǎn.', meaning: 'Four people, Saturday at 7 PM.' },
                { speaker: 'B', chinese: '星期六晚上...有位置。你贵姓？', pinyin: 'xīngqīliù wǎnshang... yǒu wèizhì. nǐ guìxìng?', meaning: 'Saturday evening... we have availability. Your surname?' },
                { speaker: 'A', chinese: '免贵姓王。我的电话是一三六...', pinyin: 'miǎn guì xìng wáng. wǒ de diànhuà shì yāo sān liù...', meaning: 'My surname is Wang. My phone number is 136...' },
                { speaker: 'B', chinese: '好的，王先生，已经订好了。到时候见。', pinyin: 'hǎo de, wáng xiānshēng, yǐjīng dìng hǎo le. dào shíhou jiàn.', meaning: 'OK, Mr. Wang, it\'s been booked. See you then.' }
            ],
            questions: [
                { question: '几个人吃饭？', options: ['两个', '三个', '四个', '五个'], correct: 2 },
                { question: '订的什么时间？', options: ['星期五晚上七点', '星期六下午七点', '星期六晚上七点', '星期天晚上七点'], correct: 2 }
            ]
        },
        {
            id: 'ldnx_024', type: 'dialogue', difficulty: 'medium',
            title: '打电话请假',
            titleMeaning: 'Calling in Sick',
            characters: [
                { name: '员工', isNative: true },
                { name: '老板', isNative: true }
            ],
            lines: [
                { speaker: 'A', chinese: '喂，老板吗？我是小李。', pinyin: 'wéi, lǎobǎn ma? wǒ shì xiǎo lǐ.', meaning: 'Hello, boss? This is Xiao Li.' },
                { speaker: 'B', chinese: '小李，怎么了？', pinyin: 'xiǎo lǐ, zěnme le?', meaning: 'Xiao Li, what\'s up?' },
                { speaker: 'A', chinese: '我今天身体不舒服，想请假一天。', pinyin: 'wǒ jīntiān shēntǐ bù shūfu, xiǎng qǐngjià yī tiān.', meaning: 'I\'m not feeling well today, I\'d like to take a day off.' },
                { speaker: 'B', chinese: '严重吗？去看医生了没有？', pinyin: 'yánzhòng ma? qù kàn yīshēng le méiyǒu?', meaning: 'Is it serious? Have you seen a doctor?' },
                { speaker: 'A', chinese: '有点发烧，我刚去拿了药。', pinyin: 'yǒudiǎn fāshāo, wǒ gāng qù ná le yào.', meaning: 'I have a slight fever, I just went to get medicine.' },
                { speaker: 'B', chinese: '那你好好休息吧，明天好了再来。', pinyin: 'nà nǐ hǎohǎo xiūxi ba, míngtiān hǎo le zài lái.', meaning: 'Then rest well, come back tomorrow if you\'re better.' }
            ],
            questions: [
                { question: '小李为什么请假？', options: ['出差', '家里有事', '身体不舒服', '旅行'], correct: 2 },
                { question: '小李有什么症状？', options: ['头疼', '发烧', '咳嗽', '肚子疼'], correct: 1 }
            ]
        },

        // ================================================================
        // 25-27: At school / classroom
        // ================================================================
        {
            id: 'ldnx_025', type: 'dialogue', difficulty: 'easy',
            title: '在教室里',
            titleMeaning: 'In the Classroom',
            characters: [
                { name: '老师', isNative: true },
                { name: '学生', isNative: true }
            ],
            lines: [
                { speaker: 'A', chinese: '同学们，请打开书，翻到第二十页。', pinyin: 'tóngxuémen, qǐng dǎkāi shū, fān dào dì èrshí yè.', meaning: 'Class, please open your books to page 20.' },
                { speaker: 'B', chinese: '老师，今天学什么？', pinyin: 'lǎoshī, jīntiān xué shénme?', meaning: 'Teacher, what are we learning today?' },
                { speaker: 'A', chinese: '今天学生词。跟我读："学校"。', pinyin: 'jīntiān xué shēngcí. gēn wǒ dú: "xuéxiào".', meaning: 'Today we learn new words. Read after me: "school".' },
                { speaker: 'B', chinese: '学校。', pinyin: 'xuéxiào.', meaning: 'School.' },
                { speaker: 'A', chinese: '很好！下一个："老师"。', pinyin: 'hěn hǎo! xià yī gè: "lǎoshī".', meaning: 'Very good! Next: "teacher".' },
                { speaker: 'B', chinese: '老师。', pinyin: 'lǎoshī.', meaning: 'Teacher.' }
            ],
            questions: [
                { question: '翻到第几页？', options: ['第十页', '第十五页', '第二十页', '第二十五页'], correct: 2 },
                { question: '今天学什么？', options: ['语法', '生词', '课文', '写字'], correct: 1 }
            ]
        },
        {
            id: 'ldnx_026', type: 'dialogue', difficulty: 'medium',
            title: '讨论作业',
            titleMeaning: 'Discussing Homework',
            characters: [
                { name: '小明', isNative: true },
                { name: '小花', isNative: true }
            ],
            lines: [
                { speaker: 'A', chinese: '昨天的作业你做了吗？', pinyin: 'zuótiān de zuòyè nǐ zuò le ma?', meaning: 'Did you do yesterday\'s homework?' },
                { speaker: 'B', chinese: '做了一半，第五题太难了。', pinyin: 'zuò le yībàn, dì-wǔ tí tài nán le.', meaning: 'I did half of it, question 5 was too hard.' },
                { speaker: 'A', chinese: '我也是！那道题我完全不懂。', pinyin: 'wǒ yě shì! nà dào tí wǒ wánquán bù dǒng.', meaning: 'Me too! I completely don\'t understand that question.' },
                { speaker: 'B', chinese: '要不我们去问老师吧。', pinyin: 'yàobù wǒmen qù wèn lǎoshī ba.', meaning: 'How about we go ask the teacher.' },
                { speaker: 'A', chinese: '好主意。现在老师应该在办公室。', pinyin: 'hǎo zhǔyì. xiànzài lǎoshī yīnggāi zài bàngōngshì.', meaning: 'Good idea. The teacher should be in the office now.' }
            ],
            questions: [
                { question: '哪个题最难？', options: ['第三题', '第四题', '第五题', '第六题'], correct: 2 },
                { question: '他们打算做什么？', options: ['回家', '问老师', '抄作业', '不做了'], correct: 1 }
            ]
        },
        {
            id: 'ldnx_027', type: 'dialogue', difficulty: 'medium',
            title: '考试前',
            titleMeaning: 'Before the Exam',
            characters: [
                { name: '小军', isNative: true },
                { name: '小美', isNative: true }
            ],
            lines: [
                { speaker: 'A', chinese: '明天就要考试了，你准备好了吗？', pinyin: 'míngtiān jiù yào kǎoshì le, nǐ zhǔnbèi hǎo le ma?', meaning: 'The exam is tomorrow, are you ready?' },
                { speaker: 'B', chinese: '还没呢，我有点紧张。', pinyin: 'hái méi ne, wǒ yǒudiǎn jǐnzhāng.', meaning: 'Not yet, I\'m a little nervous.' },
                { speaker: 'A', chinese: '我也是。你复习到第几课了？', pinyin: 'wǒ yě shì. nǐ fùxí dào dì jǐ kè le?', meaning: 'Me too. Which lesson have you reviewed up to?' },
                { speaker: 'B', chinese: '我复习到第八课了。你呢？', pinyin: 'wǒ fùxí dào dì-bā kè le. nǐ ne?', meaning: 'I\'ve reviewed up to lesson 8. And you?' },
                { speaker: 'A', chinese: '我才第五课！今晚要熬夜了。', pinyin: 'wǒ cái dì-wǔ kè! jīnwǎn yào áoyè le.', meaning: 'I\'m only at lesson 5! I\'ll have to stay up late tonight.' },
                { speaker: 'B', chinese: '别太晚，休息也很重要。', pinyin: 'bié tài wǎn, xiūxi yě hěn zhòngyào.', meaning: 'Don\'t stay up too late, rest is also important.' }
            ],
            questions: [
                { question: '小美复习到第几课？', options: ['第五课', '第六课', '第七课', '第八课'], correct: 3 },
                { question: '小军今晚要做什么？', options: ['睡觉', '熬夜', '出去玩', '看电视'], correct: 1 }
            ]
        },

        // ================================================================
        // 28-30: Travel / transportation
        // ================================================================
        {
            id: 'ldnx_028', type: 'dialogue', difficulty: 'easy',
            title: '坐出租车',
            titleMeaning: 'Taking a Taxi',
            characters: [
                { name: '乘客', isNative: true },
                { name: '司机', isNative: true }
            ],
            lines: [
                { speaker: 'A', chinese: '师傅，去火车站。', pinyin: 'shīfu, qù huǒchēzhàn.', meaning: 'Driver, to the train station please.' },
                { speaker: 'B', chinese: '好的，请系好安全带。', pinyin: 'hǎo de, qǐng jì hǎo ānquándài.', meaning: 'OK, please fasten your seatbelt.' },
                { speaker: 'A', chinese: '要多长时间？', pinyin: 'yào duō cháng shíjiān?', meaning: 'How long will it take?' },
                { speaker: 'B', chinese: '不堵车的话大概二十分钟。', pinyin: 'bù dǔchē dehuà dàgài èrshí fēnzhōng.', meaning: 'About 20 minutes if no traffic.' },
                { speaker: 'A', chinese: '多少钱？', pinyin: 'duōshao qián?', meaning: 'How much?' },
                { speaker: 'B', chinese: '大概三十块左右。', pinyin: 'dàgài sānshí kuài zuǒyòu.', meaning: 'About 30 yuan more or less.' }
            ],
            questions: [
                { question: '乘客要去哪里？', options: ['机场', '火车站', '公交站', '商场'], correct: 1 },
                { question: '大概需要多长时间？', options: ['十分钟', '十五分钟', '二十分钟', '三十分钟'], correct: 2 }
            ]
        },
        {
            id: 'ldnx_029', type: 'dialogue', difficulty: 'medium',
            title: '在火车站买票',
            titleMeaning: 'Buying Tickets at the Train Station',
            characters: [
                { name: '乘客', isNative: true },
                { name: '售票员', isNative: true }
            ],
            lines: [
                { speaker: 'A', chinese: '你好，我想买一张去北京的高铁票。', pinyin: 'nǐ hǎo, wǒ xiǎng mǎi yī zhāng qù běijīng de gāotiě piào.', meaning: 'Hello, I want to buy a high-speed train ticket to Beijing.' },
                { speaker: 'B', chinese: '哪天的？一等座还是二等座？', pinyin: 'nǎ tiān de? yīděngzuò háishì èrděngzuò?', meaning: 'For which day? First class or second class?' },
                { speaker: 'A', chinese: '后天的，二等座。多少钱？', pinyin: 'hòutiān de, èrděngzuò. duōshao qián?', meaning: 'The day after tomorrow, second class. How much?' },
                { speaker: 'B', chinese: '五百五十块。', pinyin: 'wǔbǎi wǔshí kuài.', meaning: '550 yuan.' },
                { speaker: 'A', chinese: '好的，给你钱。几点发车？', pinyin: 'hǎo de, gěi nǐ qián. jǐ diǎn fāchē?', meaning: 'OK, here\'s the money. What time does it depart?' },
                { speaker: 'B', chinese: '上午八点半，在六号站台。', pinyin: 'shàngwǔ bā diǎn bàn, zài liù hào zhàntái.', meaning: '8:30 AM, at platform 6.' }
            ],
            questions: [
                { question: '要去哪个城市？', options: ['上海', '北京', '广州', '深圳'], correct: 1 },
                { question: '几点发车？', options: ['上午八点', '上午八点半', '上午九点', '下午八点半'], correct: 1 }
            ]
        },
        {
            id: 'ldnx_030', type: 'dialogue', difficulty: 'medium',
            title: '坐飞机去旅行',
            titleMeaning: 'Traveling by Plane',
            characters: [
                { name: '旅客', isNative: true },
                { name: '值机员', isNative: true }
            ],
            lines: [
                { speaker: 'A', chinese: '你好，我要托运行李。', pinyin: 'nǐ hǎo, wǒ yào tuōyùn xíngli.', meaning: 'Hello, I need to check my luggage.' },
                { speaker: 'B', chinese: '请把行李放上来。你的护照呢？', pinyin: 'qǐng bǎ xíngli fàng shànglái. nǐ de hùzhào ne?', meaning: 'Please put your luggage here. Where\'s your passport?' },
                { speaker: 'A', chinese: '给你。我要靠窗的座位，可以吗？', pinyin: 'gěi nǐ. wǒ yào kào chuāng de zuòwèi, kěyǐ ma?', meaning: 'Here. I\'d like a window seat, is that possible?' },
                { speaker: 'B', chinese: '可以。这是你的登机牌。登机口在十二号。', pinyin: 'kěyǐ. zhè shì nǐ de dēngjīpái. dēngjīkǒu zài shí\'èr hào.', meaning: 'Yes. Here\'s your boarding pass. The gate is number 12.' },
                { speaker: 'A', chinese: '几点开始登机？', pinyin: 'jǐ diǎn kāishǐ dēngjī?', meaning: 'What time does boarding start?' },
                { speaker: 'B', chinese: '十点十分开始登机。祝您旅途愉快！', pinyin: 'shí diǎn shí fēn kāishǐ dēngjī. zhù nín lǚtú yúkuài!', meaning: 'Boarding starts at 10:10. Have a pleasant trip!' }
            ],
            questions: [
                { question: '旅客要什么座位？', options: ['靠过道的', '靠窗的', '中间的', '都可以'], correct: 1 },
                { question: '登机口是几号？', options: ['十号', '十一号', '十二号', '十三号'], correct: 2 }
            ]
        }
    ];

    if (typeof ListeningData !== 'undefined' && ListeningData.dialogue) {
        ListeningData.dialogue = ListeningData.dialogue.concat(items);
    }
})();

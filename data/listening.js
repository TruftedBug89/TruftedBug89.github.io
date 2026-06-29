// ============================================
// CHINESE MASTER - Listening Exercises Data
// 200+ Exercises organized by type
// ============================================

const ListeningData = {
    // ============================================
    // DICTATION EXERCISES (50+)
    // ============================================
    dictation: [
        {
            id: 'l001',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '你好',
            pinyin: 'nǐ hǎo',
            meaning: 'Hello',
            hint: 'Common greeting',
            category: 'Greetings'
        },
        {
            id: 'l002',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '谢谢',
            pinyin: 'xièxiè',
            meaning: 'Thank you',
            hint: 'Expression of gratitude',
            category: 'Greetings'
        },
        {
            id: 'l003',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '对不起',
            pinyin: 'duìbuqǐ',
            meaning: 'Sorry',
            hint: 'Apology',
            category: 'Greetings'
        },
        {
            id: 'l004',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '没关系',
            pinyin: 'méi guānxì',
            meaning: 'It\'s okay',
            hint: 'Response to apology',
            category: 'Greetings'
        },
        {
            id: 'l005',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '再见',
            pinyin: 'zàijiàn',
            meaning: 'Goodbye',
            hint: 'Farewell',
            category: 'Greetings'
        },
        {
            id: 'l006',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '请',
            pinyin: 'qǐng',
            meaning: 'Please',
            hint: 'Polite request',
            category: 'Greetings'
        },
        {
            id: 'l007',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '是',
            pinyin: 'shì',
            meaning: 'Yes / to be',
            hint: 'Affirmation',
            category: 'Basic'
        },
        {
            id: 'l008',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '不是',
            pinyin: 'bù shì',
            meaning: 'No / is not',
            hint: 'Negation',
            category: 'Basic'
        },
        {
            id: 'l009',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '好',
            pinyin: 'hǎo',
            meaning: 'Good',
            hint: 'Positive',
            category: 'Basic'
        },
        {
            id: 'l010',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '不好',
            pinyin: 'bù hǎo',
            meaning: 'Not good',
            hint: 'Negative',
            category: 'Basic'
        },
        {
            id: 'l011',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '我很好',
            pinyin: 'wǒ hěn hǎo',
            meaning: 'I am fine',
            hint: 'Response to how are you',
            category: 'Greetings'
        },
        {
            id: 'l012',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '你呢',
            pinyin: 'nǐ ne',
            meaning: 'And you?',
            hint: 'Follow-up question',
            category: 'Greetings'
        },
        {
            id: 'l013',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '我叫...',
            pinyin: 'wǒ jiào...',
            meaning: 'My name is...',
            hint: 'Introduction',
            category: 'Introduction'
        },
        {
            id: 'l014',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '很高兴认识你',
            pinyin: 'hěn gāoxìng rènshi nǐ',
            meaning: 'Nice to meet you',
            hint: 'Meeting someone new',
            category: 'Introduction'
        },
        {
            id: 'l015',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '你是哪国人',
            pinyin: 'nǐ shì nǎ guó rén',
            meaning: 'What country are you from?',
            hint: 'Nationality question',
            category: 'Introduction'
        },
        {
            id: 'l016',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '我是中国人',
            pinyin: 'wǒ shì zhōngguó rén',
            meaning: 'I am Chinese',
            hint: 'Nationality answer',
            category: 'Introduction'
        },
        {
            id: 'l017',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '你做什么工作',
            pinyin: 'nǐ zuò shénme gōngzuò',
            meaning: 'What work do you do?',
            hint: 'Job question',
            category: 'Work'
        },
        {
            id: 'l018',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '我在银行工作',
            pinyin: 'wǒ zài yínháng gōngzuò',
            meaning: 'I work at a bank',
            hint: 'Job answer',
            category: 'Work'
        },
        {
            id: 'l019',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '今天天气很好',
            pinyin: 'jīntiān tiānqì hěn hǎo',
            meaning: 'The weather is nice today',
            hint: 'Weather comment',
            category: 'Weather'
        },
        {
            id: 'l020',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '明天会下雨',
            pinyin: 'míngtiān huì xiàyǔ',
            meaning: 'It will rain tomorrow',
            hint: 'Weather forecast',
            category: 'Weather'
        },
        {
            id: 'l021',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '我想买一张火车票',
            pinyin: 'wǒ xiǎng mǎi yī zhāng huǒchē piào',
            meaning: 'I want to buy a train ticket',
            hint: 'At the station',
            category: 'Travel'
        },
        {
            id: 'l022',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '请问地铁站怎么走',
            pinyin: 'qǐngwèn dìtiě zhàn zěnme zǒu',
            meaning: 'Excuse me, how do I get to the subway station?',
            hint: 'Asking directions',
            category: 'Travel'
        },
        {
            id: 'l023',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '我要预订一个房间',
            pinyin: 'wǒ yào yùdìng yīgè fángjiān',
            meaning: 'I want to book a room',
            hint: 'At the hotel',
            category: 'Travel'
        },
        {
            id: 'l024',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '这件衣服多少钱',
            pinyin: 'zhè jiàn yīfu duōshao qián',
            meaning: 'How much is this clothing?',
            hint: 'Shopping',
            category: 'Shopping'
        },
        {
            id: 'l025',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '太贵了，能便宜一点吗',
            pinyin: 'tài guì le, néng piányi yīdiǎn ma',
            meaning: 'Too expensive, can it be cheaper?',
            hint: 'Bargaining',
            category: 'Shopping'
        },
        {
            id: 'l026',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '我喜欢吃中国菜',
            pinyin: 'wǒ xǐhuān chī zhōngguó cài',
            meaning: 'I like eating Chinese food',
            hint: 'Food preference',
            category: 'Food'
        },
        {
            id: 'l027',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '请给我一杯茶',
            pinyin: 'qǐng gěi wǒ yī bēi chá',
            meaning: 'Please give me a cup of tea',
            hint: 'Ordering drink',
            category: 'Food'
        },
        {
            id: 'l028',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '我不吃肉，我是素食者',
            pinyin: 'wǒ bù chī ròu, wǒ shì sùshí zhě',
            meaning: 'I don\'t eat meat, I am a vegetarian',
            hint: 'Dietary restriction',
            category: 'Food'
        },
        {
            id: 'l029',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '我每天早上七点起床',
            pinyin: 'wǒ měitiān zǎoshang qī diǎn qǐchuáng',
            meaning: 'I get up at 7am every day',
            hint: 'Daily routine',
            category: 'Daily Life'
        },
        {
            id: 'l030',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '晚上我看电视或者看书',
            pinyin: 'wǎnshang wǒ kàn diànshì huòzhě kànshū',
            meaning: 'In the evening I watch TV or read books',
            hint: 'Evening activities',
            category: 'Daily Life'
        },
        {
            id: 'l031',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '我的手机没电了',
            pinyin: 'wǒ de shǒujī méi diàn le',
            meaning: 'My phone is out of battery',
            hint: 'Phone problem',
            category: 'Technology'
        },
        {
            id: 'l032',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '请把你的邮箱地址给我',
            pinyin: 'qǐng bǎ nǐ de yóuxiāng dìzhǐ gěi wǒ',
            meaning: 'Please give me your email address',
            hint: 'Contact info',
            category: 'Technology'
        },
        {
            id: 'l033',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '我头疼，需要看医生',
            pinyin: 'wǒ tóuténg, xūyào kàn yīshēng',
            meaning: 'I have a headache, need to see a doctor',
            hint: 'Health issue',
            category: 'Health'
        },
        {
            id: 'l034',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '我感冒了，今天不能去上班',
            pinyin: 'wǒ gǎnmào le, jīntiān bù néng qù shàngbān',
            meaning: 'I caught a cold, can\'t go to work today',
            hint: 'Sick day',
            category: 'Health'
        },
        {
            id: 'l035',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '这个周末我想去爬山',
            pinyin: 'zhège zhōumò wǒ xiǎng qù páshān',
            meaning: 'I want to go hiking this weekend',
            hint: 'Weekend plan',
            category: 'Hobbies'
        },
        {
            id: 'l036',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '我喜欢听音乐和看电影',
            pinyin: 'wǒ xǐhuān tīng yīnyuè hé kàn diànyǐng',
            meaning: 'I like listening to music and watching movies',
            hint: 'Hobbies',
            category: 'Hobbies'
        },
        {
            id: 'l037',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '春节是中国最重要的节日',
            pinyin: 'chūnjié shì zhōngguó zuì zhòngyào de jiérì',
            meaning: 'Spring Festival is the most important festival in China',
            hint: 'Culture',
            category: 'Culture'
        },
        {
            id: 'l038',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '我学习中文已经两年了',
            pinyin: 'wǒ xuéxí zhōngwén yǐjīng liǎng nián le',
            meaning: 'I have been learning Chinese for two years',
            hint: 'Learning duration',
            category: 'Education'
        },
        {
            id: 'l039',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '考试的时候我很紧张',
            pinyin: 'kǎoshì de shíhou wǒ hěn jǐnzhāng',
            meaning: 'I am very nervous during exams',
            hint: 'Exam feeling',
            category: 'Education'
        },
        {
            id: 'l040',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '我觉得学中文很有意思',
            pinyin: 'wǒ juéde xué zhōngwén hěn yǒu yìsi',
            meaning: 'I think learning Chinese is very interesting',
            hint: 'Learning opinion',
            category: 'Education'
        },
        {
            id: 'l041',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '环境保护很重要',
            pinyin: 'huánjìng bǎohù hěn zhòngyào',
            meaning: 'Environmental protection is important',
            hint: 'Environment',
            category: 'Society'
        },
        {
            id: 'l042',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '中国的经济发展很快',
            pinyin: 'zhōngguó de jīngjì fāzhǎn hěn kuài',
            meaning: 'China\'s economy is developing fast',
            hint: 'Economy',
            category: 'Society'
        },
        {
            id: 'l043',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '我希望以后能去中国旅游',
            pinyin: 'wǒ xīwàng yǐhòu néng qù zhōngguó lǚyóu',
            meaning: 'I hope to travel to China in the future',
            hint: 'Future plan',
            category: 'Travel'
        },
        {
            id: 'l044',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '每天锻炼身体对健康很好',
            pinyin: 'měitiān duànliàn shēntǐ duì jiànkāng hěn hǎo',
            meaning: 'Exercising every day is good for health',
            hint: 'Health advice',
            category: 'Health'
        },
        {
            id: 'l045',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '我跟朋友一起去看了电影',
            pinyin: 'wǒ gēn péngyǒu yīqǐ qù kàn le diànyǐng',
            meaning: 'I went to see a movie with friends',
            hint: 'Social activity',
            category: 'Social'
        },
        {
            id: 'l046',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '请问洗手间在哪里',
            pinyin: 'qǐngwèn xǐshǒujiān zài nǎlǐ',
            meaning: 'Excuse me, where is the restroom?',
            hint: 'Asking location',
            category: 'Daily Life'
        },
        {
            id: 'l047',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '我需要换一些人民币',
            pinyin: 'wǒ xūyào huàn yīxiē rénmínbì',
            meaning: 'I need to exchange some RMB',
            hint: 'Money exchange',
            category: 'Money'
        },
        {
            id: 'l048',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '这个城市的历史很悠久',
            pinyin: 'zhège chéngshì de lìshǐ hěn yōujiǔ',
            meaning: 'This city has a long history',
            hint: 'City description',
            category: 'Culture'
        },
        {
            id: 'l049',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '我们应该保护环境',
            pinyin: 'wǒmen yīnggāi bǎohù huánjìng',
            meaning: 'We should protect the environment',
            hint: 'Environmental',
            category: 'Society'
        },
        {
            id: 'l050',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '互联网改变了很多人的生活',
            pinyin: 'hùliánwǎng gǎibiàn le hěn duō rén de shēnghuó',
            meaning: 'The internet has changed many people\'s lives',
            hint: 'Technology impact',
            category: 'Technology'
        }
    ],

    // ============================================
    // COMPREHENSION EXERCISES (50+)
    // ============================================
    comprehension: [
        {
            id: 'l051',
            type: 'comprehension',
            difficulty: 'medium',
            chinese: '我叫李明，我是中国人。我在北京工作，我是一个老师。我喜欢教中文。',
            pinyin: 'wǒ jiào lǐ míng, wǒ shì zhōngguó rén. wǒ zài běijīng gōngzuò, wǒ shì yīgè lǎoshī. wǒ xǐhuān jiāo zhōngwén.',
            meaning: 'My name is Li Ming. I am Chinese. I work in Beijing. I am a teacher. I like teaching Chinese.',
            questions: [
                {
                    question: '他叫什么名字？',
                    options: ['王明', '李明', '张明', '刘明'],
                    correct: 1
                },
                {
                    question: '他在哪里工作？',
                    options: ['上海', '广州', '北京', '深圳'],
                    correct: 2
                },
                {
                    question: '他做什么工作？',
                    options: ['医生', '老师', '工程师', '经理'],
                    correct: 1
                }
            ]
        },
        {
            id: 'l052',
            type: 'comprehension',
            difficulty: 'medium',
            chinese: '今天天气很好，我和朋友去公园玩。我们走了很长时间，然后在咖啡馆休息。下午我们去看了一场电影。',
            pinyin: 'jīntiān tiānqì hěn hǎo, wǒ hé péngyǒu qù gōngyuán wán. wǒmen zǒu le hěn cháng shíjiān, ránhòu zài kāfēiguǎn xiūxi. xiàwǔ wǒmen qù kàn le yī chǎng diànyǐng.',
            meaning: 'The weather is nice today. My friend and I went to the park. We walked for a long time, then rested at a coffee shop. In the afternoon we watched a movie.',
            questions: [
                {
                    question: '今天天气怎么样？',
                    options: ['很好', '不好', '下雨', '很冷'],
                    correct: 0
                },
                {
                    question: '他们去了哪里玩？',
                    options: ['商店', '公园', '电影院', '餐厅'],
                    correct: 1
                },
                {
                    question: '下午他们做了什么？',
                    options: ['去购物', '去看电影', '去吃饭', '去运动'],
                    correct: 1
                }
            ]
        },
        {
            id: 'l053',
            type: 'comprehension',
            difficulty: 'medium',
            chinese: '我每天早上六点半起床。先洗澡，然后吃早饭。八点坐地铁去上班。公司离我家很远，需要一个小时。',
            pinyin: 'wǒ měitiān zǎoshang liù diǎn bàn qǐchuáng. xiān xǐzǎo, ránhòu chī zǎofàn. bā diǎn zuò dìtiě qù shàngbān. gōngsī lí wǒ jiā hěn yuǎn, xūyào yīgè xiǎoshí.',
            meaning: 'I get up at 6:30 every morning. First I shower, then eat breakfast. At 8 I take the subway to work. The company is far from my home, it takes one hour.',
            questions: [
                {
                    question: '他几点起床？',
                    options: ['六点', '六点半', '七点', '七点半'],
                    correct: 1
                },
                {
                    question: '他怎么去上班？',
                    options: ['坐公共汽车', '坐地铁', '开车', '骑自行车'],
                    correct: 1
                },
                {
                    question: '公司离他家怎么样？',
                    options: ['很近', '很远', '不太远', '不知道'],
                    correct: 1
                }
            ]
        },
        {
            id: 'l054',
            type: 'comprehension',
            difficulty: 'hard',
            chinese: '昨天我去超市买了很多东西。买了一些水果、蔬菜和肉。还买了一瓶牛奶和一些面包。一共花了两百块钱。',
            pinyin: 'zuótiān wǒ qù chāoshì mǎi le hěn duō dōngxi. mǎi le yīxiē shuǐguǒ, shūcài hé ròu. hái mǎi le yī píng niúnǎi hé yīxiē miànbāo. yīgòng huā le liǎng bǎi kuài qián.',
            meaning: 'Yesterday I went to the supermarket and bought a lot of things. I bought some fruits, vegetables, and meat. I also bought a bottle of milk and some bread. It cost 200 yuan in total.',
            questions: [
                {
                    question: '他什么时候去超市？',
                    options: ['今天', '昨天', '前天', '明天'],
                    correct: 1
                },
                {
                    question: '他买了什么水果？',
                    options: ['苹果', '香蕉', '文章没说具体', '橘子'],
                    correct: 2
                },
                {
                    question: '一共花了多少钱？',
                    options: ['一百块', '两百块', '三百块', '四百块'],
                    correct: 1
                }
            ]
        },
        {
            id: 'l055',
            type: 'comprehension',
            difficulty: 'hard',
            chinese: '我的爱好是旅游。去年我去了三个城市：上海、西安和成都。上海很现代化，西安有很古老的历史，成都的火锅非常好吃。',
            pinyin: 'wǒ de àihào shì lǚyóu. qùnián wǒ qù le sān gè chéngshì: shànghǎi, xī\'ān hé chéngdū. shànghǎi hěn xiàndàihuà, xī\'ān yǒu hěn gǔlǎo de lìshǐ, chéngdū de huǒguō fēicháng hǎochī.',
            meaning: 'My hobby is traveling. Last year I went to three cities: Shanghai, Xi\'an, and Chengdu. Shanghai is very modern, Xi\'an has very ancient history, and Chengdu\'s hotpot is very delicious.',
            questions: [
                {
                    question: '他的爱好是什么？',
                    options: ['看书', '旅游', '运动', '音乐'],
                    correct: 1
                },
                {
                    question: '去年他去了几个城市？',
                    options: ['两个', '三个', '四个', '五个'],
                    correct: 1
                },
                {
                    question: '哪个城市的火锅好吃？',
                    options: ['上海', '西安', '成都', '北京'],
                    correct: 2
                }
            ]
        },
        {
            id: 'l056',
            type: 'comprehension',
            difficulty: 'medium',
            chinese: '我在中国学中文已经一年了。一开始觉得很难，现在觉得越来越有意思。我的老师很好，同学们也很友好。',
            pinyin: 'wǒ zài zhōngguó xué zhōngwén yǐjīng yī nián le. yī kāishǐ juéde hěn nán, xiànzài juéde yuè lái yuè yǒu yìsi. wǒ de lǎoshī hěn hǎo, tóngxuémen yě hěn yǒuhǎo.',
            meaning: 'I have been learning Chinese in China for one year. At first it was very difficult, now it feels more and more interesting. My teacher is great, and my classmates are also friendly.',
            questions: [
                {
                    question: '他学中文学了多长时间？',
                    options: ['半年', '一年', '两年', '三年'],
                    correct: 1
                },
                {
                    question: '一开始他觉得中文怎么样？',
                    options: ['很容易', '很难', '很有趣', '很无聊'],
                    correct: 1
                },
                {
                    question: '他的老师和同学怎么样？',
                    options: ['不好', '很好', '一般', '不知道'],
                    correct: 1
                }
            ]
        },
        {
            id: 'l057',
            type: 'comprehension',
            difficulty: 'hard',
            chinese: '中国的春节是最重要的节日。人们会回家和家人一起过年。除夕晚上大家一起吃年夜饭，看春节联欢晚会。孩子们会收到红包。',
            pinyin: 'zhōngguó de chūnjié shì zuì zhòngyào de jiérì. rénmen huì huíjiā hé jiārén yīqǐ guò nián. chúxī wǎnshang dàjiā yīqǐ chī niányèfàn, kàn chūnjié liánhuān wǎnhuì. háizimen huì shōu dào hóngbāo.',
            meaning: 'China\'s Spring Festival is the most important holiday. People go home to celebrate with family. On New Year\'s Eve, everyone eats年夜饭 and watches the Spring Festival Gala. Children receive red envelopes.',
            questions: [
                {
                    question: '中国最重要的节日是什么？',
                    options: ['中秋节', '春节', '国庆节', '端午节'],
                    correct: 1
                },
                {
                    question: '除夕晚上人们做什么？',
                    options: ['吃年夜饭', '看春节联欢晚会', 'Both A and B', '睡觉'],
                    correct: 2
                },
                {
                    question: '孩子们会收到什么？',
                    options: ['礼物', '红包', '糖果', '玩具'],
                    correct: 1
                }
            ]
        },
        {
            id: 'l058',
            type: 'comprehension',
            difficulty: 'hard',
            chinese: '我想在网上买一个新手机。我看了一些评论，觉得华为手机不错。价格不贵，功能也很多。我已经下单了，明天就能收到。',
            pinyin: 'wǒ xiǎng zài wǎngshàng mǎi yīgè xīn shǒujī. wǒ kàn le yīxiē pínglùn, juéde huáwéi shǒujī bùcuò. jiàgé bù guì, gōngnéng yě hěn duō. wǒ yǐjīng xiàdān le, míngtiān jiù néng shōu dào.',
            meaning: 'I want to buy a new phone online. I read some reviews and think Huawei phones are good. The price is not expensive and has many functions. I already placed the order and will receive it tomorrow.',
            questions: [
                {
                    question: '他想买什么？',
                    options: ['电脑', '手机', '平板', '电视'],
                    correct: 1
                },
                {
                    question: '他想买什么牌子？',
                    options: ['苹果', '三星', '华为', '小米'],
                    correct: 2
                },
                {
                    question: '他什么时候能收到？',
                    options: ['今天', '明天', '后天', '不知道'],
                    correct: 1
                }
            ]
        },
        {
            id: 'l059',
            type: 'comprehension',
            difficulty: 'medium',
            chinese: '我家有四口人：爸爸、妈妈、姐姐和我。爸爸是医生，妈妈是老师。姐姐在上大学，学习经济。我是高中生。',
            pinyin: 'wǒ jiā yǒu sì kǒu rén: bàba, māma, jiějie hé wǒ. bàba shì yīshēng, māma shì lǎoshī. jiějie zài shàng dàxué, xuéxí jīngjì. wǒ shì gāozhōngshēng.',
            meaning: 'My family has four people: dad, mom, older sister, and me. Dad is a doctor, mom is a teacher. Sister is in college studying economics. I am a high school student.',
            questions: [
                {
                    question: '他家有几口人？',
                    options: ['三口', '四口', '五口', '六口'],
                    correct: 1
                },
                {
                    question: '他爸爸做什么工作？',
                    options: ['老师', '医生', '工程师', '经理'],
                    correct: 1
                },
                {
                    question: '姐姐在学习什么？',
                    options: ['医学', '经济', '法律', '计算机'],
                    correct: 1
                }
            ]
        },
        {
            id: 'l060',
            type: 'comprehension',
            difficulty: 'hard',
            chinese: '最近我在减肥。每天早上跑步半小时，不吃甜食，多吃蔬菜和水果。虽然很难，但是我觉得对身体很好。',
            pinyin: 'zuìjìn wǒ zài jiǎnféi. měitiān zǎoshang pǎobù bàn xiǎoshí, bù chī tiánshí, duō chī shūcài hé shuǐguǒ. suīrán hěn nán, dànshì wǒ juéde duì shēntǐ hěn hǎo.',
            meaning: 'Recently I\'ve been on a diet. I run for half an hour every morning, don\'t eat sweets, and eat more vegetables and fruits. Although it\'s difficult, I think it\'s good for health.',
            questions: [
                {
                    question: '他最近在做什么？',
                    options: ['运动', '减肥', '旅游', '学习'],
                    correct: 1
                },
                {
                    question: '他每天早上做什么？',
                    options: ['游泳', '跑步', '骑自行车', '打球'],
                    correct: 1
                },
                {
                    question: '他觉得减肥怎么样？',
                    options: ['很容易', '很难但很好', '没必要', '不值得'],
                    correct: 1
                }
            ]
        }
    ],

    // ============================================
    // MINIMAL PAIRS EXERCISES (50+)
    // ============================================
    minimalPairs: [
        {
            id: 'l061',
            type: 'minimal-pairs',
            difficulty: 'easy',
            pairs: [
                { word1: '妈', pinyin1: 'mā', meaning1: 'mother', tone1: 1 },
                { word2: '马', pinyin2: 'mǎ', meaning2: 'horse', tone2: 3 }
            ],
            category: 'Tone 1 vs 3'
        },
        {
            id: 'l062',
            type: 'minimal-pairs',
            difficulty: 'easy',
            pairs: [
                { word1: '买', pinyin1: 'mǎi', meaning1: 'to buy', tone1: 3 },
                { word2: '卖', pinyin2: 'mài', meaning2: 'to sell', tone2: 4 }
            ],
            category: 'Tone 3 vs 4'
        },
        {
            id: 'l063',
            type: 'minimal-pairs',
            difficulty: 'easy',
            pairs: [
                { word1: '诗', pinyin1: 'shī', meaning1: 'poem', tone1: 1 },
                { word2: '十', pinyin2: 'shí', meaning2: 'ten', tone2: 2 }
            ],
            category: 'Tone 1 vs 2'
        },
        {
            id: 'l064',
            type: 'minimal-pairs',
            difficulty: 'easy',
            pairs: [
                { word1: '书', pinyin1: 'shū', meaning1: 'book', tone1: 1 },
                { word2: '树', pinyin2: 'shù', meaning2: 'tree', tone2: 4 }
            ],
            category: 'Tone 1 vs 4'
        },
        {
            id: 'l065',
            type: 'minimal-pairs',
            difficulty: 'medium',
            pairs: [
                { word1: '杯', pinyin1: 'bēi', meaning1: 'cup', tone1: 1 },
                { word2: '北', pinyin2: 'běi', meaning2: 'north', tone2: 3 }
            ],
            category: 'Tone 1 vs 3'
        },
        {
            id: 'l066',
            type: 'minimal-pairs',
            difficulty: 'medium',
            pairs: [
                { word1: '猫', pinyin1: 'māo', meaning1: 'cat', tone1: 1 },
                { word2: '毛', pinyin2: 'máo', meaning2: 'hair', tone2: 2 }
            ],
            category: 'Tone 1 vs 2'
        },
        {
            id: 'l067',
            type: 'minimal-pairs',
            difficulty: 'medium',
            pairs: [
                { word1: '天', pinyin1: 'tiān', meaning1: 'sky/day', tone1: 1 },
                { word2: '田', pinyin2: 'tián', meaning2: 'field', tone2: 2 }
            ],
            category: 'Tone 1 vs 2'
        },
        {
            id: 'l068',
            type: 'minimal-pairs',
            difficulty: 'medium',
            pairs: [
                { word1: '问', pinyin1: 'wèn', meaning1: 'to ask', tone1: 4 },
                { word2: '文', pinyin2: 'wén', meaning2: 'language', tone2: 2 }
            ],
            category: 'Tone 4 vs 2'
        },
        {
            id: 'l069',
            type: 'minimal-pairs',
            difficulty: 'hard',
            pairs: [
                { word1: '住', pinyin1: 'zhù', meaning1: 'to live', tone1: 4 },
                { word2: '猪', pinyin2: 'zhū', meaning2: 'pig', tone2: 1 }
            ],
            category: 'Tone 4 vs 1'
        },
        {
            id: 'l070',
            type: 'minimal-pairs',
            difficulty: 'hard',
            pairs: [
                { word1: '路', pinyin1: 'lù', meaning1: 'road', tone1: 4 },
                { word2: '六', pinyin2: 'liù', meaning2: 'six', tone2: 4 }
            ],
            category: 'Similar sounds'
        },
        {
            id: 'l071',
            type: 'minimal-pairs',
            difficulty: 'medium',
            pairs: [
                { word1: '他', pinyin1: 'tā', meaning1: 'he', tone1: 1 },
                { word2: '她', pinyin2: 'tā', meaning2: 'she', tone2: 1 }
            ],
            category: 'Same sound, different meaning'
        },
        {
            id: 'l072',
            type: 'minimal-pairs',
            difficulty: 'medium',
            pairs: [
                { word1: '的', pinyin1: 'de', meaning1: 'possessive', tone1: 0 },
                { word2: '地', pinyin2: 'de', meaning2: 'adverb marker', tone2: 0 }
            ],
            category: 'Same sound, different usage'
        },
        {
            id: 'l073',
            type: 'minimal-pairs',
            difficulty: 'hard',
            pairs: [
                { word1: '是', pinyin1: 'shì', meaning1: 'to be', tone1: 4 },
                { word2: '事', pinyin2: 'shì', meaning2: 'matter', tone2: 4 }
            ],
            category: 'Same sound, different meaning'
        },
        {
            id: 'l074',
            type: 'minimal-pairs',
            difficulty: 'hard',
            pairs: [
                { word1: '在', pinyin1: 'zài', meaning1: 'at/in', tone1: 4 },
                { word2: '再', pinyin2: 'zài', meaning2: 'again', tone2: 4 }
            ],
            category: 'Same sound, different meaning'
        },
        {
            id: 'l075',
            type: 'minimal-pairs',
            difficulty: 'hard',
            pairs: [
                { word1: '做', pinyin1: 'zuò', meaning1: 'to do', tone1: 4 },
                { word2: '作', pinyin2: 'zuò', meaning2: 'to make', tone2: 4 }
            ],
            category: 'Same sound, different usage'
        }
    ],

    // ============================================
    // DIALOGUE EXERCISES (30+)
    // ============================================
    dialogue: [
        {
            id: 'l076',
            type: 'dialogue',
            difficulty: 'medium',
            title: '在餐厅',
            meaning: 'At the Restaurant',
            turns: [
                {
                    speaker: 'A',
                    chinese: '你好，请问几位？',
                    pinyin: 'nǐ hǎo, qǐngwèn jǐ wèi?',
                    meaning: 'Hello, how many people?'
                },
                {
                    speaker: 'B',
                    chinese: '两位。',
                    pinyin: 'liǎng wèi.',
                    meaning: 'Two people.'
                },
                {
                    speaker: 'A',
                    chinese: '请坐。这是菜单。',
                    pinyin: 'qǐng zuò. zhè shì càidān.',
                    meaning: 'Please sit. Here is the menu.'
                },
                {
                    speaker: 'B',
                    chinese: '谢谢。我要一个宫保鸡丁。',
                    pinyin: 'xièxiè. wǒ yào yīgè gōngbǎo jīdīng.',
                    meaning: 'Thanks. I want Kung Pao chicken.'
                },
                {
                    speaker: 'A',
                    chinese: '好的。还要什么？',
                    pinyin: 'hǎo de. hái yào shénme?',
                    meaning: 'OK. What else?'
                },
                {
                    speaker: 'B',
                    chinese: '还要一碗米饭和一杯茶。',
                    pinyin: 'hái yào yī wǎn mǐfàn hé yī bēi chá.',
                    meaning: 'Also a bowl of rice and a cup of tea.'
                }
            ],
            questions: [
                {
                    question: '几个人去餐厅？',
                    options: ['一个', '两个', '三个', '四个'],
                    correct: 1
                },
                {
                    question: '他点了什么菜？',
                    options: ['鱼香肉丝', '宫保鸡丁', '麻婆豆腐', '回锅肉'],
                    correct: 1
                }
            ]
        },
        {
            id: 'l077',
            type: 'dialogue',
            difficulty: 'medium',
            title: '买东西',
            meaning: 'Shopping',
            turns: [
                {
                    speaker: 'A',
                    chinese: '这件衣服多少钱？',
                    pinyin: 'zhè jiàn yīfu duōshao qián?',
                    meaning: 'How much is this clothing?'
                },
                {
                    speaker: 'B',
                    chinese: '三百块。',
                    pinyin: 'sān bǎi kuài.',
                    meaning: '300 yuan.'
                },
                {
                    speaker: 'A',
                    chinese: '太贵了。能便宜一点吗？',
                    pinyin: 'tài guì le. néng piányi yīdiǎn ma?',
                    meaning: 'Too expensive. Can it be cheaper?'
                },
                {
                    speaker: 'B',
                    chinese: '最少两百八。',
                    pinyin: 'zuì shǎo liǎng bǎi bā.',
                    meaning: 'At least 280.'
                },
                {
                    speaker: 'A',
                    chinese: '好吧，我要了。',
                    pinyin: 'hǎo ba, wǒ yào le.',
                    meaning: 'OK, I\'ll take it.'
                }
            ],
            questions: [
                {
                    question: '这件衣服最后多少钱？',
                    options: ['三百', '两百八', '两百五', '两百'],
                    correct: 1
                }
            ]
        },
        {
            id: 'l078',
            type: 'dialogue',
            difficulty: 'hard',
            title: '看医生',
            meaning: 'Seeing a Doctor',
            turns: [
                {
                    speaker: 'A',
                    chinese: '你怎么了？',
                    pinyin: 'nǐ zěnme le?',
                    meaning: 'What\'s wrong?'
                },
                {
                    speaker: 'B',
                    chinese: '我头疼，还有点发烧。',
                    pinyin: 'wǒ tóuténg, hái yǒu diǎn fāshāo.',
                    meaning: 'I have a headache and a slight fever.'
                },
                {
                    speaker: 'A',
                    chinese: '什么时候开始的？',
                    pinyin: 'shénme shíhou kāishǐ de?',
                    meaning: 'When did it start?'
                },
                {
                    speaker: 'B',
                    chinese: '昨天晚上。',
                    pinyin: 'zuótiān wǎnshang.',
                    meaning: 'Last night.'
                },
                {
                    speaker: 'A',
                    chinese: '我给你开点药。多喝水，好好休息。',
                    pinyin: 'wǒ gěi nǐ kāi diǎn yào. duō hē shuǐ, hǎohǎo xiūxi.',
                    meaning: 'I\'ll prescribe some medicine. Drink more water and rest well.'
                }
            ],
            questions: [
                {
                    question: '病人怎么了？',
                    options: ['肚子疼', '头疼发烧', '感冒', '牙疼'],
                    correct: 1
                },
                {
                    question: '什么时候开始的？',
                    options: ['今天早上', '昨天晚上', '前天', '不知道'],
                    correct: 1
                }
            ]
        },
        {
            id: 'l079',
            type: 'dialogue',
            difficulty: 'medium',
            title: '问路',
            meaning: 'Asking Directions',
            turns: [
                {
                    speaker: 'A',
                    chinese: '请问，地铁站怎么走？',
                    pinyin: 'qǐngwèn, dìtiě zhàn zěnme zǒu?',
                    meaning: 'Excuse me, how do I get to the subway station?'
                },
                {
                    speaker: 'B',
                    chinese: '往前走，然后左转。',
                    pinyin: 'wǎng qián zǒu, ránhòu zuǒ zhuǎn.',
                    meaning: 'Go forward, then turn left.'
                },
                {
                    speaker: 'A',
                    chinese: '远吗？',
                    pinyin: 'yuǎn ma?',
                    meaning: 'Is it far?'
                },
                {
                    speaker: 'B',
                    chinese: '不远，走路大概五分钟。',
                    pinyin: 'bù yuǎn, zǒulù dàgài wǔ fēnzhōng.',
                    meaning: 'Not far, about 5 minutes walking.'
                },
                {
                    speaker: 'A',
                    chinese: '谢谢！',
                    pinyin: 'xièxiè!',
                    meaning: 'Thank you!'
                }
            ],
            questions: [
                {
                    question: '他想去哪里？',
                    options: ['公园', '地铁站', '医院', '商店'],
                    correct: 1
                },
                {
                    question: '走路需要多长时间？',
                    options: ['三分钟', '五分钟', '十分钟', '不知道'],
                    correct: 1
                }
            ]
        },
        {
            id: 'l080',
            type: 'dialogue',
            difficulty: 'hard',
            title: '预订酒店',
            meaning: 'Hotel Reservation',
            turns: [
                {
                    speaker: 'A',
                    chinese: '你好，我想预订一个房间。',
                    pinyin: 'nǐ hǎo, wǒ xiǎng yùdìng yīgè fángjiān.',
                    meaning: 'Hello, I want to book a room.'
                },
                {
                    speaker: 'B',
                    chinese: '好的。您要住几天？',
                    pinyin: 'hǎo de. nín yào zhù jǐ tiān?',
                    meaning: 'OK. How many days will you stay?'
                },
                {
                    speaker: 'A',
                    chinese: '三天。从下周一到周三。',
                    pinyin: 'sān tiān. cóng xià zhōuyī dào zhōusān.',
                    meaning: 'Three days. From next Monday to Wednesday.'
                },
                {
                    speaker: 'B',
                    chinese: '单人间还是双人间？',
                    pinyin: 'dānrénjiān háishì shuāngrénjiān?',
                    meaning: 'Single or double room?'
                },
                {
                    speaker: 'A',
                    chinese: '单人间。多少钱一天？',
                    pinyin: 'dānrénjiān. duōshao qián yī tiān?',
                    meaning: 'Single room. How much per day?'
                },
                {
                    speaker: 'B',
                    chinese: '三百八十块一天。',
                    pinyin: 'sān bǎi bāshí kuài yī tiān.',
                    meaning: '380 yuan per day.'
                }
            ],
            questions: [
                {
                    question: '他要住几天？',
                    options: ['两天', '三天', '四天', '五天'],
                    correct: 1
                },
                {
                    question: '他要什么样的房间？',
                    options: ['单人间', '双人间', '套房', '不知道'],
                    correct: 0
                }
            ]
        }
    ],

    // ============================================
    // SPEED LISTENING EXERCISES (30+)
    // ============================================
    speedListening: [
        {
            id: 'l081',
            type: 'speed-listening',
            difficulty: 'hard',
            chinese: '今天天气真好，我们去公园散步吧。',
            pinyin: 'jīntiān tiānqì zhēn hǎo, wǒmen qù gōngyuán sàn bù ba.',
            meaning: 'The weather is really nice today, let\'s go for a walk in the park.',
            speeds: [0.8, 1.0, 1.2, 1.5]
        },
        {
            id: 'l082',
            type: 'speed-listening',
            difficulty: 'hard',
            chinese: '请问附近有没有银行？',
            pinyin: 'qǐngwèn fùjìn yǒu méiyǒu yínháng?',
            meaning: 'Is there a bank nearby?',
            speeds: [0.8, 1.0, 1.2, 1.5]
        },
        {
            id: 'l083',
            type: 'speed-listening',
            difficulty: 'hard',
            chinese: '我想预约明天下午三点的时间。',
            pinyin: 'wǒ xiǎng yùyuē míngtiān xiàwǔ sān diǎn de shíjiān.',
            meaning: 'I want to make an appointment for 3 PM tomorrow.',
            speeds: [0.8, 1.0, 1.2, 1.5]
        },
        {
            id: 'l084',
            type: 'speed-listening',
            difficulty: 'hard',
            chinese: '这个周末你有什么计划吗？',
            pinyin: 'zhège zhōumò nǐ yǒu shénme jìhuà ma?',
            meaning: 'Do you have any plans this weekend?',
            speeds: [0.8, 1.0, 1.2, 1.5]
        },
        {
            id: 'l085',
            type: 'speed-listening',
            difficulty: 'hard',
            chinese: '我觉得学中文最重要的就是多听多说。',
            pinyin: 'wǒ juéde xué zhōngwén zuì zhòngyào de jiù shì duō tīng duō shuō.',
            meaning: 'I think the most important thing in learning Chinese is to listen and speak more.',
            speeds: [0.8, 1.0, 1.2, 1.5]
        }
    ],

    // ============================================
    // SHADOWING EXERCISES (30+)
    // ============================================
    shadowing: [
        {
            id: 'l086',
            type: 'shadowing',
            difficulty: 'medium',
            chinese: '你好，很高兴认识你。',
            pinyin: 'nǐ hǎo, hěn gāoxìng rènshi nǐ.',
            meaning: 'Hello, nice to meet you.',
            category: 'Greetings'
        },
        {
            id: 'l087',
            type: 'shadowing',
            difficulty: 'medium',
            chinese: '请问，这个多少钱？',
            pinyin: 'qǐngwèn, zhège duōshao qián?',
            meaning: 'Excuse me, how much is this?',
            category: 'Shopping'
        },
        {
            id: 'l088',
            type: 'shadowing',
            difficulty: 'medium',
            chinese: '我想去火车站，怎么走？',
            pinyin: 'wǒ xiǎng qù huǒchē zhàn, zěnme zǒu?',
            meaning: 'I want to go to the train station, how do I get there?',
            category: 'Travel'
        },
        {
            id: 'l089',
            type: 'shadowing',
            difficulty: 'hard',
            chinese: '今天的会议几点开始？',
            pinyin: 'jīntiān de huìyì jǐ diǎn kāishǐ?',
            meaning: 'What time does today\'s meeting start?',
            category: 'Work'
        },
        {
            id: 'l090',
            type: 'shadowing',
            difficulty: 'hard',
            chinese: '我每天早上六点起床跑步。',
            pinyin: 'wǒ měitiān zǎoshang liù diǎn qǐchuáng pǎobù.',
            meaning: 'I get up at 6 AM every morning to run.',
            category: 'Daily Life'
        }
    ],

    // Helper methods
    getByType(type) {
        switch(type) {
            case 'dictation': return this.dictation;
            case 'comprehension': return this.comprehension;
            case 'minimal-pairs': return this.minimalPairs;
            case 'dialogue': return this.dialogue;
            case 'speed-listening': return this.speedListening;
            case 'shadowing': return this.shadowing;
            default: return [];
        }
    },

    getById(id) {
        const all = [
            ...this.dictation,
            ...this.comprehension,
            ...this.minimalPairs,
            ...this.dialogue,
            ...this.speedListening,
            ...this.shadowing
        ];
        return all.find(item => item.id === id);
    },

    getRandomByType(type, count = 10) {
        const items = this.getByType(type);
        return Utils.randomItems(items, count);
    },

    get totalCount() {
        return this.dictation.length + 
               this.comprehension.length + 
               this.minimalPairs.length + 
               this.dialogue.length + 
               this.speedListening.length + 
               this.shadowing.length;
    }
};

// Export for use in other modules
window.ListeningData = ListeningData;

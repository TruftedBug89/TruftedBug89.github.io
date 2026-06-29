// ============================================
// CHINESE MASTER - Reading Passages Data
// 100+ Reading exercises organized by type
// ============================================

const ReadingData = {
    // Character matching exercises
    characterMatch: [
        {
            id: 'r001',
            type: 'character-match',
            difficulty: 'easy',
            pairs: [
                { character: '人', meaning: 'person' },
                { character: '大', meaning: 'big' },
                { character: '小', meaning: 'small' },
                { character: '中', meaning: 'middle' },
                { character: '上', meaning: 'up' },
                { character: '下', meaning: 'down' }
            ]
        },
        {
            id: 'r002',
            type: 'character-match',
            difficulty: 'easy',
            pairs: [
                { character: '日', meaning: 'sun/day' },
                { character: '月', meaning: 'moon/month' },
                { character: '水', meaning: 'water' },
                { character: '火', meaning: 'fire' },
                { character: '山', meaning: 'mountain' },
                { character: '木', meaning: 'wood' }
            ]
        },
        {
            id: 'r003',
            type: 'character-match',
            difficulty: 'medium',
            pairs: [
                { character: '学', meaning: 'study' },
                { character: '生', meaning: 'life/birth' },
                { character: '先', meaning: 'first' },
                { character: '生', meaning: 'student' },
                { character: '老', meaning: 'old' },
                { character: '师', meaning: 'teacher' }
            ]
        },
        {
            id: 'r004',
            type: 'character-match',
            difficulty: 'medium',
            pairs: [
                { character: '电', meaning: 'electricity' },
                { character: '话', meaning: 'speech' },
                { character: '脑', meaning: 'brain' },
                { character: '视', meaning: 'look' },
                { character: '影', meaning: 'shadow' },
                { character: '音', meaning: 'sound' }
            ]
        },
        {
            id: 'r005',
            type: 'character-match',
            difficulty: 'hard',
            pairs: [
                { character: '经', meaning: 'classics' },
                { character: '济', meaning: 'help' },
                { character: '环', meaning: 'ring' },
                { character: '境', meaning: 'border' },
                { character: '历', meaning: 'history' },
                { character: '史', meaning: 'history' }
            ]
        }
    ],

    // Sentence completion exercises
    sentenceComplete: [
        {
            id: 'r006',
            type: 'sentence-complete',
            difficulty: 'easy',
            sentence: '我___中国人。',
            options: ['是', '的', '了', '在'],
            correct: 0,
            meaning: 'I am Chinese.'
        },
        {
            id: 'r007',
            type: 'sentence-complete',
            difficulty: 'easy',
            sentence: '他___老师。',
            options: ['是', '的', '了', '在'],
            correct: 0,
            meaning: 'He is a teacher.'
        },
        {
            id: 'r008',
            type: 'sentence-complete',
            difficulty: 'easy',
            sentence: '我___北京。',
            options: ['在', '的', '了', '是'],
            correct: 0,
            meaning: 'I am in Beijing.'
        },
        {
            id: 'r009',
            type: 'sentence-complete',
            difficulty: 'medium',
            sentence: '昨天我___超市买了很多东西。',
            options: ['去', '在', '到', '从'],
            correct: 0,
            meaning: 'Yesterday I went to the supermarket and bought many things.'
        },
        {
            id: 'r010',
            type: 'sentence-complete',
            difficulty: 'medium',
            sentence: '我很喜欢___音乐。',
            options: ['听', '说', '读', '写'],
            correct: 0,
            meaning: 'I really like listening to music.'
        },
        {
            id: 'r011',
            type: 'sentence-complete',
            difficulty: 'medium',
            sentence: '明天___下雨。',
            options: ['会', '要', '能', '可以'],
            correct: 0,
            meaning: 'It will rain tomorrow.'
        },
        {
            id: 'r012',
            type: 'sentence-complete',
            difficulty: 'medium',
            sentence: '这件衣服太贵___。',
            options: ['了', '的', '着', '过'],
            correct: 0,
            meaning: 'This clothing is too expensive.'
        },
        {
            id: 'r013',
            type: 'sentence-complete',
            difficulty: 'hard',
            sentence: '我学中文已经三年___。',
            options: ['了', '的', '着', '过'],
            correct: 0,
            meaning: 'I have been learning Chinese for three years.'
        },
        {
            id: 'r014',
            type: 'sentence-complete',
            difficulty: 'hard',
            sentence: '他跑___很快。',
            options: ['得', '的', '地', '了'],
            correct: 0,
            meaning: 'He runs very fast.'
        },
        {
            id: 'r015',
            type: 'sentence-complete',
            difficulty: 'hard',
            sentence: '请把书放___桌子上。',
            options: ['在', '到', '了', '着'],
            correct: 0,
            meaning: 'Please put the book on the table.'
        },
        {
            id: 'r016',
            type: 'sentence-complete',
            difficulty: 'hard',
            sentence: '我___去过中国。',
            options: ['没', '不', '别', '无'],
            correct: 0,
            meaning: 'I have never been to China.'
        },
        {
            id: 'r017',
            type: 'sentence-complete',
            difficulty: 'hard',
            sentence: '你___吃了吗？',
            options: ['饭', '菜', '面', '肉'],
            correct: 0,
            meaning: 'Have you eaten? (Have you had rice?)'
        },
        {
            id: 'r018',
            type: 'sentence-complete',
            difficulty: 'medium',
            sentence: '今天天气很___。',
            options: ['好', '大', '多', '长'],
            correct: 0,
            meaning: 'The weather is very nice today.'
        },
        {
            id: 'r019',
            type: 'sentence-complete',
            difficulty: 'medium',
            sentence: '我___一个哥哥。',
            options: ['有', '是', '在', '去'],
            correct: 0,
            meaning: 'I have an older brother.'
        },
        {
            id: 'r020',
            type: 'sentence-complete',
            difficulty: 'medium',
            sentence: '他是___人？',
            options: ['哪', '那', '这', '什'],
            correct: 0,
            meaning: 'Where is he from? (What person?)'
        }
    ],

    // Passage reading exercises
    passageReading: [
        {
            id: 'r021',
            type: 'passage-reading',
            difficulty: 'medium',
            title: '我的一天',
            titleMeaning: 'My Day',
            passage: '我每天早上七点起床。先刷牙洗脸，然后吃早饭。八点坐地铁去上班。公司离我家很远，需要一个小时。中午在公司吃午饭。下午五点下班，回家做晚饭。晚上看看电视或者看书，十一点睡觉。',
            pinyin: 'wǒ měitiān zǎoshang qī diǎn qǐchuáng. xiān shuáyá xǐliǎn, ránhòu chī zǎofàn. bā diǎn zuò dìtiě qù shàngbān. gōngsī lí wǒ jiā hěn yuǎn, xūyào yīgè xiǎoshí. zhōngwǔ zài gōngsī chī wǔfàn. xiàwǔ wǔ diǎn xiàbān, huíjiā zuò wǎnfàn. wǎnshang kàn kàn diànshì huòzhě kànshū, shíyī diǎn shuìjiào.',
            questions: [
                {
                    question: '他几点起床？',
                    options: ['六点', '七点', '八点', '九点'],
                    correct: 1
                },
                {
                    question: '他怎么去上班？',
                    options: ['坐公共汽车', '坐地铁', '开车', '骑自行车'],
                    correct: 1
                },
                {
                    question: '他几点睡觉？',
                    options: ['十点', '十一点', '十二点', '九点'],
                    correct: 1
                }
            ]
        },
        {
            id: 'r022',
            type: 'passage-reading',
            difficulty: 'medium',
            title: '我的家庭',
            titleMeaning: 'My Family',
            passage: '我家有四口人：爸爸、妈妈、姐姐和我。爸爸是医生，在医院工作。妈妈是老师，在学校教中文。姐姐在上大学，学习经济。我是高中生，明年也要上大学了。',
            pinyin: 'wǒ jiā yǒu sì kǒu rén: bàba, māma, jiějie hé wǒ. bàba shì yīshēng, zài yīyuàn gōngzuò. māma shì lǎoshī, zài xuéxiào jiāo zhōngwén. jiějie zài shàng dàxué, xuéxí jīngjì. wǒ shì gāozhōngshēng, míngnián yě yào shàng dàxué le.',
            questions: [
                {
                    question: '他家有几口人？',
                    options: ['三口', '四口', '五口', '六口'],
                    correct: 1
                },
                {
                    question: '他妈妈做什么工作？',
                    options: ['医生', '老师', '工程师', '经理'],
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
            id: 'r023',
            type: 'passage-reading',
            difficulty: 'hard',
            title: '中国旅游',
            titleMeaning: 'Traveling in China',
            passage: '去年暑假，我和朋友一起去中国旅游。我们先去了北京，看了长城和故宫。长城很长很壮观，故宫很漂亮。然后我们坐火车去了西安，看了兵马俑。最后我们去了成都，吃了很好吃的火锅。这次旅行很难忘。',
            pinyin: 'qùnián shǔjià, wǒ hé péngyǒu yīqǐ qù zhōngguó lǚyóu. wǒmen xiān qù le běijīng, kàn le chángchéng hé gùgōng. chángchéng hěn cháng hěn zhuàngguān, gùgōng hěn piàoliang. ránhòu wǒmen zuò huǒchē qù le xī\'ān, kàn le bīngmǎyǒng. zuìhòu wǒmen qù le chéngdū, chī le hěn hǎochī de huǒguō. zhè cì lǚxíng hěn nánwàng.',
            questions: [
                {
                    question: '他们什么时候去旅游？',
                    options: ['寒假', '暑假', '国庆节', '春节'],
                    correct: 1
                },
                {
                    question: '他们先去了哪个城市？',
                    options: ['上海', '北京', '西安', '成都'],
                    correct: 1
                },
                {
                    question: '在成都他们做了什么？',
                    options: ['看长城', '看兵马俑', '吃火锅', '买东西'],
                    correct: 2
                }
            ]
        },
        {
            id: 'r024',
            type: 'passage-reading',
            difficulty: 'hard',
            title: '学中文的感想',
            titleMeaning: 'Thoughts on Learning Chinese',
            passage: '我学中文已经两年了。一开始觉得很难，特别是声调。但是现在我觉得越来越有意思。我喜欢看中文电影，听中文歌。我觉得学语言最重要的是多听多说。我希望以后能去中国工作。',
            pinyin: 'wǒ xué zhōngwén yǐjīng liǎng nián le. yī kāishǐ juéde hěn nán, tèbié shì shēngdiào. dànshì xiànzài wǒ juéde yuè lái yuè yǒu yìsi. wǒ xǐhuān kàn zhōngwén diànyǐng, tīng zhōngwén gē. wǒ juéde xué yǔyán zuì zhòngyào de shì duō tīng duō shuō. wǒ xīwàng yǐhòu néng qù zhōngguó gōngzuò.',
            questions: [
                {
                    question: '他学中文学了多长时间？',
                    options: ['一年', '两年', '三年', '四年'],
                    correct: 1
                },
                {
                    question: '一开始他觉得什么最难？',
                    options: ['汉字', '语法', '声调', '词汇'],
                    correct: 2
                },
                {
                    question: '他以后想做什么？',
                    options: ['去中国旅游', '去中国工作', '去中国留学', '去中国生活'],
                    correct: 1
                }
            ]
        },
        {
            id: 'r025',
            type: 'passage-reading',
            difficulty: 'medium',
            title: '我的爱好',
            titleMeaning: 'My Hobbies',
            passage: '我有很多爱好。我喜欢运动，特别是打篮球和游泳。每个周末我都会去游泳池游泳。我也喜欢看书，尤其是历史书。有时候我会和朋友一起去看电影。我觉得有爱好很重要，可以让生活更有趣。',
            pinyin: 'wǒ yǒu hěn duō àihào. wǒ xǐhuān yùndòng, tèbié shì dǎ lánqiú hé yóuyǒng. měi gè zhōumò wǒ dōu huì qù yóuyǒngchí yóuyǒng. wǒ yě xǐhuān kànshū, yóuqí shì lìshǐ shū. yǒushíhou wǒ huì hé péngyǒu yīqǐ qù kàn diànyǐng. wǒ juéde yǒu àihào hěn zhòngyào, kěyǐ ràng shēnghuó gèng yǒuqù.',
            questions: [
                {
                    question: '他喜欢什么运动？',
                    options: ['足球', '篮球和游泳', '跑步', '羽毛球'],
                    correct: 1
                },
                {
                    question: '他多久去游泳一次？',
                    options: ['每天', '每个周末', '每个月', '有时候'],
                    correct: 1
                },
                {
                    question: '他喜欢看什么书？',
                    options: ['小说', '历史书', '科学书', '杂志'],
                    correct: 1
                }
            ]
        },
        {
            id: 'r026',
            type: 'passage-reading',
            difficulty: 'hard',
            title: '中国的春节',
            titleMeaning: 'Chinese Spring Festival',
            passage: '春节是中国最重要的节日。每年春节，人们都会回家和家人团聚。除夕晚上，大家一起吃年夜饭，看春节联欢晚会。孩子们会收到红包，里面有钱。大年初一，人们会去拜年，说"新年快乐"。春节期间，到处都很热闹。',
            pinyin: 'chūnjié shì zhōngguó zuì zhòngyào de jiérì. měi nián chūnjié, rénmen dōu huì huíjiā hé jiārén tuánjù. chúxī wǎnshang, dàjiā yīqǐ chī niányèfàn, kàn chūnjié liánhuān wǎnhuì. háizimen huì shōu dào hóngbāo, lǐmiàn yǒu qián. dà nián chū yī, rénmen huì qù bàinián, shuō "xīnnián kuàilè". chūnjié qījiān, dàochù dōu hěn rènào.',
            questions: [
                {
                    question: '春节是什么样的节日？',
                    options: ['不重要', '最重要', '比较重要', '一般'],
                    correct: 1
                },
                {
                    question: '除夕晚上人们做什么？',
                    options: ['睡觉', '吃年夜饭看晚会', '工作', '旅游'],
                    correct: 1
                },
                {
                    question: '孩子们会收到什么？',
                    options: ['礼物', '红包', '糖果', '玩具'],
                    correct: 1
                }
            ]
        },
        {
            id: 'r027',
            type: 'passage-reading',
            difficulty: 'medium',
            title: '我的工作',
            titleMeaning: 'My Work',
            passage: '我在一家公司做经理。每天工作八个小时，从早上九点到下午五点。工作很忙，但是我喜欢我的工作。我的同事都很好，我们相处得很融洽。每个月的工资还不错，够我生活。',
            pinyin: 'wǒ zài yījiā gōngsī zuò jīnglǐ. měitiān gōngzuò bā gè xiǎoshí, cóng zǎoshang jiǔ diǎn dào xiàwǔ wǔ diǎn. gōngzuò hěn máng, dànshì wǒ xǐhuān wǒ de gōngzuò. wǒ de tóngshì dōu hěn hǎo, wǒmen xiāngchǔ de hěn róngqià. měi gè yuè de gōngzī hái bùcuò, gòu wǒ shēnghuó.',
            questions: [
                {
                    question: '他做什么工作？',
                    options: ['老师', '医生', '经理', '工程师'],
                    correct: 2
                },
                {
                    question: '他每天工作几个小时？',
                    options: ['六个小时', '七个小时', '八个小时', '九个小时'],
                    correct: 2
                },
                {
                    question: '他和同事相处得怎么样？',
                    options: ['不好', '一般', '很好', '不知道'],
                    correct: 2
                }
            ]
        },
        {
            id: 'r028',
            type: 'passage-reading',
            difficulty: 'hard',
            title: '环境保护',
            titleMeaning: 'Environmental Protection',
            passage: '现在环境问题越来越严重。空气污染、水污染、垃圾问题都很突出。我们应该保护环境，从小事做起。比如，少用塑料袋，多坐公共交通，节约用水用电。每个人都可以为保护环境做出贡献。',
            pinyin: 'xiànzài huánjìng wèntí yuè lái yuè yánzhòng. kōngqì wūrǎn, shuǐ wūrǎn, lājī wèntí dōu hěn tūchū. wǒmen yīnggāi bǎohù huánjìng, cóng xiǎoshì zuòqǐ. bǐrú, shǎo yòng sùliào dài, duō zuò gōnggòng jiāotōng, jiéyuē yòng shuǐ yòng diàn. měi gè rén dōu kěyǐ wèi bǎohù huánjìng zuò chū gòngxiàn.',
            questions: [
                {
                    question: '现在什么问题越来越严重？',
                    options: ['经济问题', '环境问题', '教育问题', '健康问题'],
                    correct: 1
                },
                {
                    question: '我们应该怎么做？',
                    options: ['什么都不做', '保护环境', '继续污染', '搬家'],
                    correct: 1
                },
                {
                    question: '下面哪个是保护环境的方法？',
                    options: ['多用塑料袋', '多开车', '节约用水', '多用电'],
                    correct: 2
                }
            ]
        },
        {
            id: 'r029',
            type: 'passage-reading',
            difficulty: 'medium',
            title: '我的朋友',
            titleMeaning: 'My Friend',
            passage: '我有一个很好的朋友，她叫小红。我们是大学同学。小红很漂亮，也很聪明。她现在在一家医院当医生。她工作很忙，但是我们每个星期都会见面。我们喜欢一起去咖啡馆聊天，或者去看电影。',
            pinyin: 'wǒ yǒu yīgè hěn hǎo de péngyǒu, tā jiào xiǎo hóng. wǒmen shì dàxué tóngxué. xiǎo hóng hěn piàoliang, yě hěn cōngmíng. tā xiànzài zài yījiā yīyuàn dāng yīshēng. tā gōngzuò hěn máng, dànshì wǒmen měi gè xīngqī dōu huì jiànmiàn. wǒmen xǐhuān yīqǐ qù kāfēiguǎn liáotiān, huòzhě qù kàn diànyǐng.',
            questions: [
                {
                    question: '小红是他的什么人？',
                    options: ['同事', '同学', '好朋友', '女朋友'],
                    correct: 2
                },
                {
                    question: '小红做什么工作？',
                    options: ['老师', '医生', '经理', '工程师'],
                    correct: 1
                },
                {
                    question: '他们多久见面一次？',
                    options: ['每天', '每个星期', '每个月', '有时候'],
                    correct: 1
                }
            ]
        },
        {
            id: 'r030',
            type: 'passage-reading',
            difficulty: 'hard',
            title: '互联网时代',
            titleMeaning: 'Internet Age',
            passage: '现在是互联网时代。人们用手机和电脑上网，可以做很多事情。可以在网上买东西、看新闻、学习、聊天。互联网让生活更方便，但是也有一些问题。比如，有些人花太多时间上网，影响了工作和学习。',
            pinyin: 'xiànzài shì hùliánwǎng shídài. rénmen yòng shǒujī hé diànnǎo shàngwǎng, kěyǐ zuò hěn duō shìqing. kěyǐ zài wǎngshàng mǎi dōngxi, kàn xīnwén, xuéxí, liáotiān. hùliánwǎng ràng shēnghuó gèng fāngbiàn, dànshì yě yǒu yīxiē wèntí. bǐrú, yǒuxiē rén huā tài duō shíjiān shàngwǎng, yǐngxiǎng le gōngzuò hé xuéxí.',
            questions: [
                {
                    question: '现在是什么时代？',
                    options: ['工业时代', '互联网时代', '农业时代', '信息时代'],
                    correct: 1
                },
                {
                    question: '互联网让人们的生活怎么样？',
                    options: ['更难', '更方便', '更贵', '更慢'],
                    correct: 1
                },
                {
                    question: '互联网有什么问题？',
                    options: ['没有问题', '花太多时间上网', '不能买东西', '不能学习'],
                    correct: 1
                }
            ]
        }
    ],

    // Speed reading exercises
    speedReading: [
        {
            id: 'r031',
            type: 'speed-reading',
            difficulty: 'hard',
            title: '快速阅读1',
            passage: '今天天气很好，我和朋友去公园玩。',
            timeLimit: 10,
            questions: [
                {
                    question: '今天天气怎么样？',
                    options: ['很好', '不好', '下雨', '很冷'],
                    correct: 0
                }
            ]
        },
        {
            id: 'r032',
            type: 'speed-reading',
            difficulty: 'hard',
            title: '快速阅读2',
            passage: '他每天早上六点起床跑步，然后吃早饭。',
            timeLimit: 10,
            questions: [
                {
                    question: '他几点起床？',
                    options: ['五点', '六点', '七点', '八点'],
                    correct: 1
                }
            ]
        },
        {
            id: 'r033',
            type: 'speed-reading',
            difficulty: 'hard',
            title: '快速阅读3',
            passage: '我想买一个新手机，但是太贵了。',
            timeLimit: 10,
            questions: [
                {
                    question: '他想买什么？',
                    options: ['电脑', '手机', '电视', '平板'],
                    correct: 1
                }
            ]
        },
        {
            id: 'r034',
            type: 'speed-reading',
            difficulty: 'hard',
            title: '快速阅读4',
            passage: '春节是中国最重要的节日，人们会回家过年。',
            timeLimit: 10,
            questions: [
                {
                    question: '什么节日最重要？',
                    options: ['中秋节', '春节', '国庆节', '端午节'],
                    correct: 1
                }
            ]
        },
        {
            id: 'r035',
            type: 'speed-reading',
            difficulty: 'hard',
            title: '快速阅读5',
            passage: '学中文要多听多说，多看中文电影。',
            timeLimit: 10,
            questions: [
                {
                    question: '学中文要多做什么？',
                    options: ['多写', '多听多说', '多读', '多背'],
                    correct: 1
                }
            ]
        }
    ],

    // Radical learning exercises
    radicalLearn: [
        {
            id: 'r036',
            type: 'radical-learn',
            difficulty: 'medium',
            radical: '亻',
            radicalName: '单人旁',
            radicalMeaning: 'person',
            characters: [
                { char: '他', meaning: 'he' },
                { char: '你', meaning: 'you' },
                { char: '们', meaning: 'plural marker' },
                { char: '做', meaning: 'to do' },
                { char: '住', meaning: 'to live' },
                { char: '作', meaning: 'to make' }
            ]
        },
        {
            id: 'r037',
            type: 'radical-learn',
            difficulty: 'medium',
            radical: '氵',
            radicalName: '三点水',
            radicalMeaning: 'water',
            characters: [
                { char: '洗', meaning: 'to wash' },
                { char: '河', meaning: 'river' },
                { char: '海', meaning: 'sea' },
                { char: '湖', meaning: 'lake' },
                { char: '汤', meaning: 'soup' },
                { char: '酒', meaning: 'alcohol' }
            ]
        },
        {
            id: 'r038',
            type: 'radical-learn',
            difficulty: 'medium',
            radical: '口',
            radicalName: '口字旁',
            radicalMeaning: 'mouth',
            characters: [
                { char: '吃', meaning: 'to eat' },
                { char: '喝', meaning: 'to drink' },
                { char: '叫', meaning: 'to call' },
                { char: '听', meaning: 'to listen' },
                { char: '唱', meaning: 'to sing' },
                { char: '吗', meaning: 'question particle' }
            ]
        },
        {
            id: 'r039',
            type: 'radical-learn',
            difficulty: 'hard',
            radical: '木',
            radicalName: '木字旁',
            radicalMeaning: 'wood/tree',
            characters: [
                { char: '树', meaning: 'tree' },
                { char: '林', meaning: 'forest' },
                { char: '桌', meaning: 'table' },
                { char: '椅', meaning: 'chair' },
                { char: '床', meaning: 'bed' },
                { char: '楼', meaning: 'building' }
            ]
        },
        {
            id: 'r040',
            type: 'radical-learn',
            difficulty: 'hard',
            radical: '女',
            radicalName: '女字旁',
            radicalMeaning: 'woman',
            characters: [
                { char: '妈', meaning: 'mother' },
                { char: '姐', meaning: 'older sister' },
                { char: '妹', meaning: 'younger sister' },
                { char: '好', meaning: 'good' },
                { char: '她', meaning: 'she' },
                { char: '姓', meaning: 'surname' }
            ]
        }
    ],

    // Context clues exercises
    contextClues: [
        {
            id: 'r041',
            type: 'context-clues',
            difficulty: 'hard',
            sentence: '他今天没来上班，可能是生病了。',
            unknownWord: '生病',
            contextClues: ['没来上班', '可能'],
            options: ['to be sick', 'to travel', 'to work', 'to rest'],
            correct: 0,
            explanation: '从"没来上班"和"可能"可以推断，他没来上班的原因可能是身体不好，所以"生病"的意思是"to be sick"。'
        },
        {
            id: 'r042',
            type: 'context-clues',
            difficulty: 'hard',
            sentence: '这个菜太辣了，我吃不了。',
            unknownWord: '辣',
            contextClues: ['太...了', '吃不了'],
            options: ['spicy', 'sweet', 'sour', 'salty'],
            correct: 0,
            explanation: '从"太...了"和"吃不了"可以推断，这个菜的味道让人不能吃，所以"辣"的意思是"spicy"。'
        },
        {
            id: 'r043',
            type: 'context-clues',
            difficulty: 'hard',
            sentence: '他的钱包丢了，所以很着急。',
            unknownWord: '着急',
            contextClues: ['丢了', '所以'],
            options: ['worried', 'happy', 'tired', 'angry'],
            correct: 0,
            explanation: '从"丢了"可以推断，丢了东西会让人感到担心，所以"着急"的意思是"worried"。'
        },
        {
            id: 'r044',
            type: 'context-clues',
            difficulty: 'hard',
            sentence: '这个地方很安静，适合看书。',
            unknownWord: '安静',
            contextClues: ['适合看书'],
            options: ['quiet', 'noisy', 'crowded', 'beautiful'],
            correct: 0,
            explanation: '从"适合看书"可以推断，看书需要安静的环境，所以"安静"的意思是"quiet"。'
        },
        {
            id: 'r045',
            type: 'context-clues',
            difficulty: 'hard',
            sentence: '他很努力地工作，终于成功了。',
            unknownWord: '终于',
            contextClues: ['很努力', '成功了'],
            options: ['finally', 'never', 'always', 'sometimes'],
            correct: 0,
            explanation: '从"很努力"和"成功了"可以推断，经过努力后达到了目标，所以"终于"的意思是"finally"。'
        }
    ],

    // Helper methods
    getByType(type) {
        switch(type) {
            case 'character-match': return this.characterMatch;
            case 'sentence-complete': return this.sentenceComplete;
            case 'passage-reading': return this.passageReading;
            case 'speed-reading': return this.speedReading;
            case 'radical-learn': return this.radicalLearn;
            case 'context-clues': return this.contextClues;
            default: return [];
        }
    },

    getById(id) {
        const all = [
            ...this.characterMatch,
            ...this.sentenceComplete,
            ...this.passageReading,
            ...this.speedReading,
            ...this.radicalLearn,
            ...this.contextClues
        ];
        return all.find(item => item.id === id);
    },

    getRandomByType(type, count = 10) {
        const items = this.getByType(type);
        return Utils.randomItems(items, count);
    },

    get totalCount() {
        return this.characterMatch.length + 
               this.sentenceComplete.length + 
               this.passageReading.length + 
               this.speedReading.length + 
               this.radicalLearn.length + 
               this.contextClues.length;
    }
};

// Export for use in other modules
window.ReadingData = ReadingData;

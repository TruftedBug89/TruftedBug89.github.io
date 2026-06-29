// ============================================
// CHINESE MASTER - Grammar Lessons Data
// 50+ Grammar patterns with explanations
// ============================================

const GrammarData = {
    lessons: [
        {
            id: 'g001',
            title: '是...的 (shì...de)',
            titleMeaning: 'Emphasizing details',
            level: 'HSK 3',
            pattern: 'Subject + 是 + Time/Place/Manner + Verb + 的',
            explanation: '这个结构用来强调动作的时间、地点、方式等细节。"是"可以省略，但"的"不能省略。',
            examples: [
                {
                    chinese: '我是昨天来的。',
                    pinyin: 'wǒ shì zuótiān lái de.',
                    meaning: 'I came yesterday. (emphasizing time)'
                },
                {
                    chinese: '他是在北京工作的。',
                    pinyin: 'tā shì zài běijīng gōngzuò de.',
                    meaning: 'He works in Beijing. (emphasizing place)'
                },
                {
                    chinese: '她是坐飞机去的。',
                    pinyin: 'tā shì zuò fēijī qù de.',
                    meaning: 'She went by plane. (emphasizing manner)'
                }
            ],
            practice: [
                {
                    question: '我___昨天___。',
                    answer: '是...来的',
                    options: ['是...来的', '在...来的', '从...来的', '到...来的']
                }
            ]
        },
        {
            id: 'g002',
            title: '了 (le) - Completed action',
            titleMeaning: 'Completed action marker',
            level: 'HSK 3',
            pattern: 'Subject + Verb + 了 + Object',
            explanation: '"了"用在动词后面，表示动作已经完成。相当于英语的过去时。',
            examples: [
                {
                    chinese: '我吃了早饭。',
                    pinyin: 'wǒ chī le zǎofàn.',
                    meaning: 'I ate breakfast.'
                },
                {
                    chinese: '他买了一本书。',
                    pinyin: 'tā mǎi le yī běn shū.',
                    meaning: 'He bought a book.'
                },
                {
                    chinese: '我们看了电影。',
                    pinyin: 'wǒmen kàn le diànyǐng.',
                    meaning: 'We watched a movie.'
                }
            ],
            practice: [
                {
                    question: '我___早饭。',
                    answer: '吃了',
                    options: ['吃了', '吃着', '吃过', '吃呢']
                }
            ]
        },
        {
            id: 'g003',
            title: '过 (guò) - Experience',
            titleMeaning: 'Experience marker',
            level: 'HSK 3',
            pattern: 'Subject + Verb + 过 + Object',
            explanation: '"过"用在动词后面，表示曾经有过某种经验。常和"没"一起用表示没有某种经验。',
            examples: [
                {
                    chinese: '我去过中国。',
                    pinyin: 'wǒ qù guò zhōngguó.',
                    meaning: 'I have been to China. (experience)'
                },
                {
                    chinese: '我没吃过北京烤鸭。',
                    pinyin: 'wǒ méi chī guò běijīng kǎoyā.',
                    meaning: 'I have never eaten Peking duck.'
                },
                {
                    chinese: '你看过这本书吗？',
                    pinyin: 'nǐ kàn guò zhè běn shū ma?',
                    meaning: 'Have you read this book?'
                }
            ],
            practice: [
                {
                    question: '我___中国。',
                    answer: '去过',
                    options: ['去了', '过', '去过', '去呢']
                }
            ]
        },
        {
            id: 'g004',
            title: '着 (zhe) - Continuous state',
            titleMeaning: 'Continuous state marker',
            level: 'HSK 3',
            pattern: 'Subject + Verb + 着 + Object',
            explanation: '"着"用在动词后面，表示动作或状态的持续。',
            examples: [
                {
                    chinese: '门开着。',
                    pinyin: 'mén kāi zhe.',
                    meaning: 'The door is open.'
                },
                {
                    chinese: '他穿着一件红衣服。',
                    pinyin: 'tā chuān zhe yī jiàn hóng yīfu.',
                    meaning: 'He is wearing red clothes.'
                },
                {
                    chinese: '她笑着说："好。"',
                    pinyin: 'tā xiào zhe shuō: "hǎo."',
                    meaning: 'She said with a smile: "OK."'
                }
            ],
            practice: [
                {
                    question: '门___。',
                    answer: '开着',
                    options: ['开了', '开着', '开过', '开呢']
                }
            ]
        },
        {
            id: 'g005',
            title: '在...呢 (zài...ne) - In progress',
            titleMeaning: 'Action in progress',
            level: 'HSK 3',
            pattern: 'Subject + 在 + Verb + 呢',
            explanation: '这个结构表示动作正在进行中，相当于英语的现在进行时。',
            examples: [
                {
                    chinese: '我在吃饭呢。',
                    pinyin: 'wǒ zài chīfàn ne.',
                    meaning: 'I am eating.'
                },
                {
                    chinese: '他在打电话呢。',
                    pinyin: 'tā zài dǎ diànhuà ne.',
                    meaning: 'He is making a phone call.'
                },
                {
                    chinese: '他们在开会呢。',
                    pinyin: 'tāmen zài kāihuì ne.',
                    meaning: 'They are having a meeting.'
                }
            ],
            practice: [
                {
                    question: '我___吃饭___。',
                    answer: '在...呢',
                    options: ['在...呢', '是...的', '要...了', '想...呢']
                }
            ]
        },
        {
            id: 'g006',
            title: '要...了 (yào...le) - About to happen',
            titleMeaning: 'About to happen',
            level: 'HSK 3',
            pattern: 'Subject + 要 + Verb + 了',
            explanation: '这个结构表示动作即将发生，相当于英语的"be going to"。',
            examples: [
                {
                    chinese: '要下雨了。',
                    pinyin: 'yào xiàyǔ le.',
                    meaning: 'It\'s going to rain.'
                },
                {
                    chinese: '火车要开了。',
                    pinyin: 'huǒchē yào kāi le.',
                    meaning: 'The train is about to leave.'
                },
                {
                    chinese: '我要走了。',
                    pinyin: 'wǒ yào zǒu le.',
                    meaning: 'I\'m going to leave.'
                }
            ],
            practice: [
                {
                    question: '___下雨___。',
                    answer: '要...了',
                    options: ['要...了', '在...呢', '是...的', '想...呢']
                }
            ]
        },
        {
            id: 'g007',
            title: '想 (xiǎng) - Want to',
            titleMeaning: 'Want to do something',
            level: 'HSK 3',
            pattern: 'Subject + 想 + Verb + Object',
            explanation: '"想"表示想要做某事，相当于英语的"want to"。',
            examples: [
                {
                    chinese: '我想喝水。',
                    pinyin: 'wǒ xiǎng hē shuǐ.',
                    meaning: 'I want to drink water.'
                },
                {
                    chinese: '他想去中国。',
                    pinyin: 'tā xiǎng qù zhōngguó.',
                    meaning: 'He wants to go to China.'
                },
                {
                    chinese: '你想吃什么？',
                    pinyin: 'nǐ xiǎng chī shénme?',
                    meaning: 'What do you want to eat?'
                }
            ],
            practice: [
                {
                    question: '我___喝水。',
                    answer: '想',
                    options: ['想', '要', '可以', '会']
                }
            ]
        },
        {
            id: 'g008',
            title: '可以 (kěyǐ) - Can/May',
            titleMeaning: 'Permission/Ability',
            level: 'HSK 3',
            pattern: 'Subject + 可以 + Verb + Object',
            explanation: '"可以"表示许可或能力，相当于英语的"can"或"may"。',
            examples: [
                {
                    chinese: '我可以坐这里吗？',
                    pinyin: 'wǒ kěyǐ zuò zhèlǐ ma?',
                    meaning: 'Can I sit here?'
                },
                {
                    chinese: '你可以帮我吗？',
                    pinyin: 'nǐ kěyǐ bāng wǒ ma?',
                    meaning: 'Can you help me?'
                },
                {
                    chinese: '我可以进来吗？',
                    pinyin: 'wǒ kěyǐ jìnlái ma?',
                    meaning: 'May I come in?'
                }
            ],
            practice: [
                {
                    question: '我___坐这里吗？',
                    answer: '可以',
                    options: ['可以', '想', '要', '会']
                }
            ]
        },
        {
            id: 'g009',
            title: '会 (huì) - Will/Can',
            titleMeaning: 'Future/Possibility',
            level: 'HSK 3',
            pattern: 'Subject + 会 + Verb + Object',
            explanation: '"会"表示将来会发生某事，或者表示能力（学会的技能）。',
            examples: [
                {
                    chinese: '明天会下雨。',
                    pinyin: 'míngtiān huì xiàyǔ.',
                    meaning: 'It will rain tomorrow.'
                },
                {
                    chinese: '我会说中文。',
                    pinyin: 'wǒ huì shuō zhōngwén.',
                    meaning: 'I can speak Chinese.'
                },
                {
                    chinese: '他会来吗？',
                    pinyin: 'tā huì lái ma?',
                    meaning: 'Will he come?'
                }
            ],
            practice: [
                {
                    question: '明天___下雨。',
                    answer: '会',
                    options: ['会', '要', '可以', '想']
                }
            ]
        },
        {
            id: 'g010',
            title: '得 (de) - Complement marker',
            titleMeaning: 'Degree/Result complement',
            level: 'HSK 3',
            pattern: 'Verb + 得 + Complement',
            explanation: '"得"用在动词后面，引出程度或结果补语。',
            examples: [
                {
                    chinese: '他说得很好。',
                    pinyin: 'tā shuō de hěn hǎo.',
                    meaning: 'He speaks very well.'
                },
                {
                    chinese: '我跑得很快。',
                    pinyin: 'wǒ pǎo de hěn kuài.',
                    meaning: 'I run very fast.'
                },
                {
                    chinese: '她唱得很好听。',
                    pinyin: 'tā chàng de hěn hǎotīng.',
                    meaning: 'She sings very beautifully.'
                }
            ],
            practice: [
                {
                    question: '他说___很好。',
                    answer: '得',
                    options: ['得', '的', '地', '了']
                }
            ]
        },
        {
            id: 'g011',
            title: '的 (de) - Possessive',
            titleMeaning: 'Possessive marker',
            level: 'HSK 3',
            pattern: 'Noun/Pronoun + 的 + Noun',
            explanation: '"的"用在名词或代词后面，表示所属关系，相当于英语的\'s或of。',
            examples: [
                {
                    chinese: '我的书',
                    pinyin: 'wǒ de shū',
                    meaning: 'my book'
                },
                {
                    chinese: '中国的历史',
                    pinyin: 'zhōngguó de lìshǐ',
                    meaning: 'China\'s history'
                },
                {
                    chinese: '老师的办公室',
                    pinyin: 'lǎoshī de bàngōngshì',
                    meaning: 'teacher\'s office'
                }
            ],
            practice: [
                {
                    question: '我___书',
                    answer: '的',
                    options: ['的', '得', '地', '了']
                }
            ]
        },
        {
            id: 'g012',
            title: '地 (de) - Adverbial marker',
            titleMeaning: 'Adverbial marker',
            level: 'HSK 3',
            pattern: 'Adjective/Adverb + 地 + Verb',
            explanation: '"地"用在形容词或副词后面，修饰动词，相当于英语的-ly。',
            examples: [
                {
                    chinese: '他高兴地说："太好了！"',
                    pinyin: 'tā gāoxìng de shuō: "tài hǎo le!"',
                    meaning: 'He said happily: "Great!"'
                },
                {
                    chinese: '她认真地学习。',
                    pinyin: 'tā rènzhēn de xuéxí.',
                    meaning: 'She studies seriously.'
                },
                {
                    chinese: '他慢慢地走。',
                    pinyin: 'tā mànmàn de zǒu.',
                    meaning: 'He walks slowly.'
                }
            ],
            practice: [
                {
                    question: '他高兴___说。',
                    answer: '地',
                    options: ['地', '的', '得', '了']
                }
            ]
        },
        {
            id: 'g013',
            title: '把 (bǎ) - Disposal',
            titleMeaning: 'Disposal construction',
            level: 'HSK 4',
            pattern: 'Subject + 把 + Object + Verb + Other',
            explanation: '"把"字句表示对某物进行某种动作，通常表示处置或结果。',
            examples: [
                {
                    chinese: '请把书放在桌子上。',
                    pinyin: 'qǐng bǎ shū fàng zài zhuōzi shàng.',
                    meaning: 'Please put the book on the table.'
                },
                {
                    chinese: '他把作业做完了。',
                    pinyin: 'tā bǎ zuòyè zuò wán le.',
                    meaning: 'He finished the homework.'
                },
                {
                    chinese: '我把手机丢了。',
                    pinyin: 'wǒ bǎ shǒujī diū le.',
                    meaning: 'I lost my phone.'
                }
            ],
            practice: [
                {
                    question: '请___书放在桌子上。',
                    answer: '把',
                    options: ['把', '被', '给', '让']
                }
            ]
        },
        {
            id: 'g014',
            title: '被 (bèi) - Passive',
            titleMeaning: 'Passive voice',
            level: 'HSK 4',
            pattern: 'Subject + 被 + Agent + Verb + Other',
            explanation: '"被"字句表示被动，主语是动作的承受者。',
            examples: [
                {
                    chinese: '他的钱包被偷了。',
                    pinyin: 'tā de qiánbāo bèi tōu le.',
                    meaning: 'His wallet was stolen.'
                },
                {
                    chinese: '他被老师批评了。',
                    pinyin: 'tā bèi lǎoshī pīpíng le.',
                    meaning: 'He was criticized by the teacher.'
                },
                {
                    chinese: '这个问题被解决了。',
                    pinyin: 'zhège wèntí bèi jiějué le.',
                    meaning: 'This problem was solved.'
                }
            ],
            practice: [
                {
                    question: '他的钱包___偷了。',
                    answer: '被',
                    options: ['被', '把', '给', '让']
                }
            ]
        },
        {
            id: 'g015',
            title: '比 (bǐ) - Comparison',
            titleMeaning: 'Comparison',
            level: 'HSK 3',
            pattern: 'A + 比 + B + Adjective',
            explanation: '"比"用于比较两个事物，表示A比B更怎么样。',
            examples: [
                {
                    chinese: '他比我高。',
                    pinyin: 'tā bǐ wǒ gāo.',
                    meaning: 'He is taller than me.'
                },
                {
                    chinese: '今天比昨天冷。',
                    pinyin: 'jīntiān bǐ zuótiān lěng.',
                    meaning: 'Today is colder than yesterday.'
                },
                {
                    chinese: '这个比那个贵。',
                    pinyin: 'zhège bǐ nàge guì.',
                    meaning: 'This one is more expensive than that one.'
                }
            ],
            practice: [
                {
                    question: '他___我高。',
                    answer: '比',
                    options: ['比', '不比', '没有', '更']
                }
            ]
        },
        {
            id: 'g016',
            title: '比...更 (bǐ...gèng) - Even more',
            titleMeaning: 'Even more comparison',
            level: 'HSK 4',
            pattern: 'A + 比 + B + 更 + Adjective',
            explanation: '在比较的基础上加"更"，表示程度更深。',
            examples: [
                {
                    chinese: '他比我更高。',
                    pinyin: 'tā bǐ wǒ gèng gāo.',
                    meaning: 'He is even taller than me.'
                },
                {
                    chinese: '今天比昨天更冷。',
                    pinyin: 'jīntiān bǐ zuótiān gèng lěng.',
                    meaning: 'Today is even colder than yesterday.'
                }
            ],
            practice: [
                {
                    question: '他比我___高。',
                    answer: '更',
                    options: ['更', '很', '非常', '太']
                }
            ]
        },
        {
            id: 'g017',
            title: '没有 (méiyǒu) - Negative comparison',
            titleMeaning: 'Not as...as',
            level: 'HSK 3',
            pattern: 'A + 没有 + B + Adjective',
            explanation: '"没有"用于否定比较，表示A不如B怎么样。',
            examples: [
                {
                    chinese: '我没有他高。',
                    pinyin: 'wǒ méiyǒu tā gāo.',
                    meaning: 'I am not as tall as him.'
                },
                {
                    chinese: '今天没有昨天冷。',
                    pinyin: 'jīntiān méiyǒu zuótiān lěng.',
                    meaning: 'Today is not as cold as yesterday.'
                }
            ],
            practice: [
                {
                    question: '我___他高。',
                    answer: '没有',
                    options: ['没有', '不比', '比', '更']
                }
            ]
        },
        {
            id: 'g018',
            title: '因为...所以 (yīnwèi...suǒyǐ) - Because...therefore',
            titleMeaning: 'Cause and effect',
            level: 'HSK 3',
            pattern: '因为 + Reason, 所以 + Result',
            explanation: '这个结构表示因果关系，"因为"引出原因，"所以"引出结果。',
            examples: [
                {
                    chinese: '因为下雨，所以我不去了。',
                    pinyin: 'yīnwèi xiàyǔ, suǒyǐ wǒ bù qù le.',
                    meaning: 'Because it\'s raining, I\'m not going.'
                },
                {
                    chinese: '因为他很努力，所以他成功了。',
                    pinyin: 'yīnwèi tā hěn nǔlì, suǒyǐ tā chénggōng le.',
                    meaning: 'Because he worked hard, he succeeded.'
                }
            ],
            practice: [
                {
                    question: '___下雨，___我不去了。',
                    answer: '因为...所以',
                    options: ['因为...所以', '虽然...但是', '如果...就', '不但...而且']
                }
            ]
        },
        {
            id: 'g019',
            title: '虽然...但是 (suīrán...dànshì) - Although...but',
            titleMeaning: 'Concession',
            level: 'HSK 3',
            pattern: '虽然 + Fact, 但是 + Contrast',
            explanation: '这个结构表示转折关系，"虽然"引出已知事实，"但是"引出相反或不同的情况。',
            examples: [
                {
                    chinese: '虽然很贵，但是很好。',
                    pinyin: 'suīrán hěn guì, dànshì hěn hǎo.',
                    meaning: 'Although it\'s expensive, it\'s very good.'
                },
                {
                    chinese: '虽然下雨了，但是他还是来了。',
                    pinyin: 'suīrán xiàyǔ le, dànshì tā háishì lái le.',
                    meaning: 'Although it rained, he still came.'
                }
            ],
            practice: [
                {
                    question: '___很贵，___很好。',
                    answer: '虽然...但是',
                    options: ['虽然...但是', '因为...所以', '如果...就', '不但...而且']
                }
            ]
        },
        {
            id: 'g020',
            title: '如果...就 (rúguǒ...jiù) - If...then',
            titleMeaning: 'Condition',
            level: 'HSK 3',
            pattern: '如果 + Condition, 就 + Result',
            explanation: '这个结构表示条件关系，"如果"引出条件，"就"引出结果。',
            examples: [
                {
                    chinese: '如果下雨，我就不去了。',
                    pinyin: 'rúguǒ xiàyǔ, wǒ jiù bù qù le.',
                    meaning: 'If it rains, I won\'t go.'
                },
                {
                    chinese: '如果你想去，我们就去。',
                    pinyin: 'rúguǒ nǐ xiǎng qù, wǒmen jiù qù.',
                    meaning: 'If you want to go, we\'ll go.'
                }
            ],
            practice: [
                {
                    question: '___下雨，我___不去了。',
                    answer: '如果...就',
                    options: ['如果...就', '因为...所以', '虽然...但是', '不但...而且']
                }
            ]
        },
        {
            id: 'g021',
            title: '不但...而且 (búdàn...érqiě) - Not only...but also',
            titleMeaning: 'Progressive',
            level: 'HSK 4',
            pattern: '不但 + A, 而且 + B',
            explanation: '这个结构表示递进关系，"不但"引出第一层意思，"而且"引出更进一步的意思。',
            examples: [
                {
                    chinese: '他不但会说中文，而且会说日文。',
                    pinyin: 'tā búdàn huì shuō zhōngwén, érqiě huì shuō rìwén.',
                    meaning: 'He can not only speak Chinese, but also Japanese.'
                },
                {
                    chinese: '这个菜不但好吃，而且便宜。',
                    pinyin: 'zhège cài búdàn hǎochī, érqiě piányi.',
                    meaning: 'This dish is not only delicious, but also cheap.'
                }
            ],
            practice: [
                {
                    question: '他___会说中文，___会说日文。',
                    answer: '不但...而且',
                    options: ['不但...而且', '虽然...但是', '因为...所以', '如果...就']
                }
            ]
        },
        {
            id: 'g022',
            title: '一...就 (yī...jiù) - As soon as',
            titleMeaning: 'Immediate sequence',
            level: 'HSK 3',
            pattern: '一 + Verb, 就 + Verb',
            explanation: '这个结构表示两个动作紧接着发生，"一"引出第一个动作，"就"引出紧接着的动作。',
            examples: [
                {
                    chinese: '我一到家就给你打电话。',
                    pinyin: 'wǒ yī dào jiù jiù gěi nǐ dǎ diànhuà.',
                    meaning: 'I\'ll call you as soon as I get home.'
                },
                {
                    chinese: '他一听到这个消息就高兴了。',
                    pinyin: 'tā yī tīng dào zhège xiāoxi jiù gāoxìng le.',
                    meaning: 'He was happy as soon as he heard the news.'
                }
            ],
            practice: [
                {
                    question: '我___到家___给你打电话。',
                    answer: '一...就',
                    options: ['一...就', '先...再', '先...然后', '不但...而且']
                }
            ]
        },
        {
            id: 'g023',
            title: '先...再 (xiān...zài) - First...then',
            titleMeaning: 'Sequence',
            level: 'HSK 3',
            pattern: '先 + Verb 1, 再 + Verb 2',
            explanation: '这个结构表示动作的先后顺序，"先"引出第一个动作，"再"引出下一个动作。',
            examples: [
                {
                    chinese: '我先吃饭，再去上班。',
                    pinyin: 'wǒ xiān chīfàn, zài qù shàngbān.',
                    meaning: 'I\'ll eat first, then go to work.'
                },
                {
                    chinese: '你先做作业，再看电视。',
                    pinyin: 'nǐ xiān zuò zuòyè, zài kàn diànshì.',
                    meaning: 'Do your homework first, then watch TV.'
                }
            ],
            practice: [
                {
                    question: '我___吃饭，___去上班。',
                    answer: '先...再',
                    options: ['先...再', '一...就', '不但...而且', '虽然...但是']
                }
            ]
        },
        {
            id: 'g024',
            title: '又...又 (yòu...yòu) - Both...and',
            titleMeaning: 'Multiple qualities',
            level: 'HSK 3',
            pattern: '又 + Adj 1, 又 + Adj 2',
            explanation: '这个结构表示同时具有两种性质或状态。',
            examples: [
                {
                    chinese: '这个苹果又大又甜。',
                    pinyin: 'zhège píngguǒ yòu dà yòu tián.',
                    meaning: 'This apple is both big and sweet.'
                },
                {
                    chinese: '她又漂亮又聪明。',
                    pinyin: 'tā yòu piàoliang yòu cōngmíng.',
                    meaning: 'She is both beautiful and smart.'
                }
            ],
            practice: [
                {
                    question: '这个苹果___大___甜。',
                    answer: '又...又',
                    options: ['又...又', '很...很', '非常...非常', '太...太']
                }
            ]
        },
        {
            id: 'g025',
            title: '越...越 (yuè...yuè) - The more...the more',
            titleMeaning: 'Progressive degree',
            level: 'HSK 4',
            pattern: '越 + Verb/Adj, 越 + Verb/Adj',
            explanation: '这个结构表示程度随着某种条件而加深。',
            examples: [
                {
                    chinese: '越学越有意思。',
                    pinyin: 'yuè xué yuè yǒu yìsi.',
                    meaning: 'The more you study, the more interesting it gets.'
                },
                {
                    chinese: '他越跑越快。',
                    pinyin: 'tā yuè pǎo yuè kuài.',
                    meaning: 'He runs faster and faster.'
                }
            ],
            practice: [
                {
                    question: '___学___有意思。',
                    answer: '越...越',
                    options: ['越...越', '又...又', '很...很', '非常...非常']
                }
            ]
        }
    ],

    // Helper methods
    getById(id) {
        return this.lessons.find(l => l.id === id);
    },

    getByLevel(level) {
        return this.lessons.filter(l => l.level === level);
    },

    getRandom(count = 5) {
        return Utils.randomItems(this.lessons, count);
    },

    get totalCount() {
        return this.lessons.length;
    }
};

// Export for use in other modules
window.GrammarData = GrammarData;

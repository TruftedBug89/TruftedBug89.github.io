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
            category: 'DeShi',
            commonMistake: 'Don\'t confuse 是...的 with regular 是 for description. Regular 是 describes what something IS, while 是...的 emphasizes time, place, or manner of an action.',
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
                { question: '我___昨天___。', answer: '是...来的', options: ['是...来的', '在...来的', '从...来的', '到...来的'] },
                { question: '她___在北京工作___。', answer: '是...的', options: ['是...的', '在...的', '给...的', '从...的'] },
                { question: '我___坐飞机去___。', answer: '是...的', options: ['是...的', '用...的', '从...的', '给...的'] },
                { question: '这___谁告诉你___？', answer: '是...的', options: ['是...的', '让...的', '给...的', '在...的'] },
                { question: '你___什么时候来___？', answer: '是...的', options: ['是...的', '从...的', '到...的', '在...的'] },
                { question: '他___一个人去___。', answer: '是...的', options: ['是...的', '在...的', '从...的', '到...的'] },
                { question: '我们___在公园认识___。', answer: '是...的', options: ['是...的', '在...的', '用...的', '从...的'] },
                { question: '这件衣服___在网上买___。', answer: '是...的', options: ['是...的', '用...的', '从...的', '到...的'] }
            ]
        },
        {
            id: 'g002',
            title: '了 (le) - Completed action',
            titleMeaning: 'Completed action marker',
            level: 'HSK 3',
            category: 'Aspect',
            commonMistake: 'Don\'t use 了 after stative verbs (是, 在, 有, 喜欢). \'我是了学生\' is incorrect — stative verbs do not take 了.',
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
                { question: '我___早饭。', answer: '吃了', options: ['吃了', '吃着', '吃过', '吃呢'] },
                { question: '他___一本书。', answer: '买了', options: ['买了', '买着', '买过', '买呢'] },
                { question: '我们___电影。', answer: '看了', options: ['看了', '看着', '看过', '看呢'] },
                { question: '她___一杯咖啡。', answer: '喝了', options: ['喝了', '喝着', '喝过', '喝呢'] },
                { question: '你___今天的作业吗？', answer: '做了', options: ['做了', '做着', '做过', '做呢'] },
                { question: '他___一封信。', answer: '写了', options: ['写了', '写着', '写过', '写呢'] },
                { question: '他们___两首歌。', answer: '唱了', options: ['唱了', '唱着', '唱过', '唱呢'] },
                { question: '我___老师一个问题。', answer: '问了', options: ['问了', '问着', '问过', '问呢'] }
            ]
        },
        {
            id: 'g003',
            title: '过 (guò) - Experience',
            titleMeaning: 'Experience marker',
            level: 'HSK 3',
            category: 'Aspect',
            commonMistake: '过 indicates past experience (at least once). 了 marks simple completion. \'我去过中国\' = I have been to China (experience); \'我去了中国\' = I went to China (recent action).',
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
                { question: '我___中国。', answer: '去过', options: ['去了', '过', '去过', '去呢'] },
                { question: '你___北京烤鸭吗？', answer: '吃过', options: ['吃过', '吃了', '吃着', '吃吗'] },
                { question: '他没___这本书。', answer: '看过', options: ['看过', '看了', '看着', '看呢'] },
                { question: '我___那个地方。', answer: '去过', options: ['去过', '去了', '去着', '去呢'] },
                { question: '你以前___日语吗？', answer: '学过', options: ['学过', '学了', '学着', '学呢'] },
                { question: '小王没___那个电影。', answer: '看过', options: ['看过', '看了', '看着', '看呢'] },
                { question: '我从来没___这种水果。', answer: '吃过', options: ['吃过', '吃了', '吃着', '吃呢'] },
                { question: '他们___那家公司。', answer: '去过', options: ['去过', '去了', '去着', '去过呢'] }
            ]
        },
        {
            id: 'g004',
            title: '着 (zhe) - Continuous state',
            titleMeaning: 'Continuous state marker',
            level: 'HSK 3',
            category: 'Aspect',
            commonMistake: '着 marks a continuous state, not an action in progress. Use 在 for ongoing actions. \'门开着\' = door is open (state); \'我在开门呢\' = I\'m opening the door (action).',
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
                { question: '门___。', answer: '开着', options: ['开了', '开着', '开过', '开呢'] },
                { question: '他___一件红衣服。', answer: '穿着', options: ['穿着', '穿了', '穿过', '穿呢'] },
                { question: '她___说："好。"', answer: '笑着', options: ['笑着', '笑了', '笑过', '笑呢'] },
                { question: '桌子上___一本书。', answer: '放着', options: ['放着', '放了', '放过', '放呢'] },
                { question: '墙上___一张地图。', answer: '挂着', options: ['挂着', '挂了', '挂过', '挂呢'] },
                { question: '他___一本书在沙发上看。', answer: '拿着', options: ['拿着', '拿了', '拿过', '拿呢'] },
                { question: '外面___很大的雨。', answer: '下着', options: ['下着', '下了', '下过', '下呢'] },
                { question: '他___眼睛想问题。', answer: '闭着', options: ['闭着', '闭了', '闭过', '闭呢'] }
            ]
        },
        {
            id: 'g005',
            title: '在...呢 (zài...ne) - In progress',
            titleMeaning: 'Action in progress',
            level: 'HSK 3',
            category: 'Aspect',
            commonMistake: 'The 呢 at the end is optional but common. Using only 在 is also correct. Don\'t use 了 with 在...呢 — they conflict.',
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
                { question: '我___吃饭___。', answer: '在...呢', options: ['在...呢', '是...的', '要...了', '想...呢'] },
                { question: '他___打电话___。', answer: '在...呢', options: ['在...呢', '是...的', '要...了', '想...呢'] },
                { question: '他们___开会___。', answer: '在...呢', options: ['在...呢', '是...的', '要...了', '想...呢'] },
                { question: '妈妈___做饭___。', answer: '在...呢', options: ['在...呢', '是...的', '要...了', '已经...了'] },
                { question: '弟弟___做作业___。', answer: '在...呢', options: ['在...呢', '是...的', '要...了', '想...呢'] },
                { question: '老师___上课___。', answer: '在...呢', options: ['在...呢', '是...的', '要...了', '已经...了'] },
                { question: '外面___下雨___。', answer: '在...呢', options: ['在...呢', '要...了', '是...的', '想...了'] },
                { question: '我们___聊天___。', answer: '在...呢', options: ['在...呢', '是...的', '要...了', '快...了'] }
            ]
        },
        {
            id: 'g006',
            title: '要...了 (yào...le) - About to happen',
            titleMeaning: 'About to happen',
            level: 'HSK 3',
            category: 'Aspect',
            commonMistake: '要...了 and 快要...了 both mean \'about to.\' Adding 快 emphasizes imminence.',
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
                { question: '___下雨___。', answer: '要...了', options: ['要...了', '在...呢', '是...的', '想...呢'] },
                { question: '火车___开___。', answer: '要...了', options: ['要...了', '在...呢', '是...的', '已经...了'] },
                { question: '电影___开始___。', answer: '要...了', options: ['要...了', '在...呢', '是...的', '已经...了'] },
                { question: '我___走___。', answer: '要...了', options: ['要...了', '在...呢', '是...的', '想...呢'] },
                { question: '天___黑___。', answer: '要...了', options: ['要...了', '在...呢', '是...的', '已经...了'] },
                { question: '超市___关门___。', answer: '要...了', options: ['要...了', '在...呢', '是...的', '快...呢'] },
                { question: '假期___结束___。', answer: '要...了', options: ['要...了', '在...呢', '是...的', '已经...了'] },
                { question: '孩子___睡着___。', answer: '要...了', options: ['要...了', '在...呢', '是...的', '快...呢'] }
            ]
        },
        {
            id: 'g007',
            title: '想 (xiǎng) - Want to',
            titleMeaning: 'Want to do something',
            level: 'HSK 3',
            category: 'Aspect',
            commonMistake: '想 means \'want to\' or \'would like to\' — softer than 要 (going to/want). \'我想喝水\' is polite; \'我要喝水\' is more direct/demanding.',
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
                { question: '我___喝水。', answer: '想', options: ['想', '要', '可以', '会'] },
                { question: '他___去中国。', answer: '想', options: ['想', '要', '可以', '会'] },
                { question: '你___吃什么？', answer: '想', options: ['想', '要', '可以', '会'] },
                { question: '我___学中文。', answer: '想', options: ['想', '要', '可以', '会'] },
                { question: '她___买一条裙子。', answer: '想', options: ['想', '要', '可以', '会'] },
                { question: '周末你___去哪儿玩？', answer: '想', options: ['想', '要', '可以', '会'] },
                { question: '我___休息一下。', answer: '想', options: ['想', '要', '可以', '会'] },
                { question: '他___和你做朋友。', answer: '想', options: ['想', '要', '可以', '会'] }
            ]
        },
        {
            id: 'g008',
            title: '可以 (kěyǐ) - Can/May',
            titleMeaning: 'Permission/Ability',
            level: 'HSK 3',
            category: 'Aspect',
            commonMistake: '可以 is for permission or general ability. 会 is for learned skills. \'我可以游泳\' = I may swim (allowed); \'我会游泳\' = I can swim (learned skill).',
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
                { question: '我___坐这里吗？', answer: '可以', options: ['可以', '想', '要', '会'] },
                { question: '你___帮我吗？', answer: '可以', options: ['可以', '想', '要', '会'] },
                { question: '我___进来吗？', answer: '可以', options: ['可以', '想', '要', '会'] },
                { question: '在这儿___拍照吗？', answer: '可以', options: ['可以', '想', '要', '会'] },
                { question: '这个字___这样写吗？', answer: '可以', options: ['可以', '想', '要', '会'] },
                { question: '图书馆里不___大声说话。', answer: '可以', options: ['可以', '想', '要', '会'] },
                { question: '明天我___早点来。', answer: '可以', options: ['可以', '想', '要', '会'] },
                { question: '你不___这样做。', answer: '可以', options: ['可以', '想', '要', '会'] }
            ]
        },
        {
            id: 'g009',
            title: '会 (huì) - Will/Can',
            titleMeaning: 'Future/Possibility',
            level: 'HSK 3',
            category: 'Aspect',
            commonMistake: '会 can mean \'will\' (future) or \'can\' (learned skill). Context determines meaning. \'明天会下雨\' = will rain; \'我会说中文\' = can speak Chinese.',
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
                { question: '明天___下雨。', answer: '会', options: ['会', '要', '可以', '想'] },
                { question: '我___说中文。', answer: '会', options: ['会', '要', '可以', '想'] },
                { question: '他___来吗？', answer: '会', options: ['会', '要', '可以', '想'] },
                { question: '你___游泳吗？', answer: '会', options: ['会', '要', '可以', '想'] },
                { question: '妈妈___不高兴的。', answer: '会', options: ['会', '要', '可以', '想'] },
                { question: '不___下雪吧？', answer: '会', options: ['会', '要', '可以', '想'] },
                { question: '努力学习就___进步。', answer: '会', options: ['会', '要', '可以', '想'] },
                { question: '小狗___听主人的话。', answer: '会', options: ['会', '要', '可以', '想'] }
            ]
        },
        {
            id: 'g010',
            title: '得 (de) - Complement marker',
            titleMeaning: 'Degree/Result complement',
            level: 'HSK 3',
            category: 'Complements',
            commonMistake: 'Don\'t confuse 得 (complement) with 的 (possessive) or 地 (adverbial). All three are pronounced \'de\' but have different uses.',
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
                { question: '他说___很好。', answer: '得', options: ['得', '的', '地', '了'] },
                { question: '我跑___很快。', answer: '得', options: ['得', '的', '地', '了'] },
                { question: '她唱___很好听。', answer: '得', options: ['得', '的', '地', '了'] },
                { question: '你写___真漂亮。', answer: '得', options: ['得', '的', '地', '了'] },
                { question: '这孩子长___真高。', answer: '得', options: ['得', '的', '地', '了'] },
                { question: '今天热___受不了。', answer: '得', options: ['得', '的', '地', '了'] },
                { question: '他高兴___跳起来。', answer: '得', options: ['得', '的', '地', '了'] },
                { question: '妹妹画___很好看。', answer: '得', options: ['得', '的', '地', '了'] }
            ]
        },
        {
            id: 'g011',
            title: '的 (de) - Possessive',
            titleMeaning: 'Possessive marker',
            level: 'HSK 3',
            category: 'DeShi',
            commonMistake: '的 can be dropped with close relationships. \'我妈妈\' is more natural than \'我的妈妈\' for \'my mom.\'',
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
                { question: '我___书', answer: '的', options: ['的', '得', '地', '了'] },
                { question: '中国___历史', answer: '的', options: ['的', '得', '地', '了'] },
                { question: '老师___办公室', answer: '的', options: ['的', '得', '地', '了'] },
                { question: '这是谁___手机？', answer: '的', options: ['的', '得', '地', '了'] },
                { question: '桌子上___电脑', answer: '的', options: ['的', '得', '地', '了'] },
                { question: '好朋友___生日', answer: '的', options: ['的', '得', '地', '了'] },
                { question: '北京___天气', answer: '的', options: ['的', '得', '地', '了'] },
                { question: '妈妈做___菜很好吃。', answer: '的', options: ['的', '得', '地', '了'] }
            ]
        },
        {
            id: 'g012',
            title: '地 (de) - Adverbial marker',
            titleMeaning: 'Adverbial marker',
            level: 'HSK 3',
            category: 'DeShi',
            commonMistake: '地 (de) transforms adjectives into adverbs. In spoken Chinese, many speakers use 的 instead, but in writing, 地 is correct.',
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
                { question: '他高兴___说。', answer: '地', options: ['地', '的', '得', '了'] },
                { question: '她认真___学习。', answer: '地', options: ['地', '的', '得', '了'] },
                { question: '他慢慢___走。', answer: '地', options: ['地', '的', '得', '了'] },
                { question: '请大声___读课文。', answer: '地', options: ['地', '的', '得', '了'] },
                { question: '孩子们开心___玩游戏。', answer: '地', options: ['地', '的', '得', '了'] },
                { question: '快___跑！要迟到了！', answer: '地', options: ['地', '的', '得', '了'] },
                { question: '他们安静___听老师讲课。', answer: '地', options: ['地', '的', '得', '了'] },
                { question: '她温柔___笑了笑。', answer: '地', options: ['地', '的', '得', '了'] }
            ]
        },
        {
            id: 'g013',
            title: '把 (bǎ) - Disposal',
            titleMeaning: 'Disposal construction',
            level: 'HSK 4',
            category: 'BaBei',
            commonMistake: 'The 把 structure is mandatory when the object is affected by the action and there is a result. English has no direct equivalent.',
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
                { question: '请___书放在桌子上。', answer: '把', options: ['把', '被', '给', '让'] },
                { question: '他___作业做完了。', answer: '把', options: ['把', '被', '给', '让'] },
                { question: '我___手机丢了。', answer: '把', options: ['把', '被', '给', '让'] },
                { question: '请___门关上。', answer: '把', options: ['把', '被', '给', '让'] },
                { question: '你___东西收拾好。', answer: '把', options: ['把', '被', '给', '让'] },
                { question: '他___衣服洗了。', answer: '把', options: ['把', '被', '给', '让'] },
                { question: '别___杯子打破了。', answer: '把', options: ['把', '被', '给', '让'] },
                { question: '小王___垃圾扔掉了。', answer: '把', options: ['把', '被', '给', '让'] }
            ]
        },
        {
            id: 'g014',
            title: '被 (bèi) - Passive',
            titleMeaning: 'Passive voice',
            level: 'HSK 4',
            category: 'BaBei',
            commonMistake: '被 can often be replaced by 叫 or 让 in spoken Chinese. \'钱包被偷了\' = \'钱包叫/让小偷偷了\' (informal).',
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
                { question: '他的钱包___偷了。', answer: '被', options: ['被', '把', '给', '让'] },
                { question: '他___老师批评了。', answer: '被', options: ['被', '把', '给', '让'] },
                { question: '这个问题___解决了。', answer: '被', options: ['被', '把', '给', '让'] },
                { question: '窗户___风吹开了。', answer: '被', options: ['被', '把', '给', '让'] },
                { question: '我的自行车___人骑走了。', answer: '被', options: ['被', '把', '给', '让'] },
                { question: '那只猫___狗吓跑了。', answer: '被', options: ['被', '把', '给', '让'] },
                { question: '草地___雪盖住了。', answer: '被', options: ['被', '把', '给', '让'] },
                { question: '他的故事___大家记住了。', answer: '被', options: ['被', '把', '给', '让'] }
            ]
        },
        {
            id: 'g015',
            title: '比 (bǐ) - Comparison',
            titleMeaning: 'Comparison',
            level: 'HSK 3',
            category: 'Comparisons',
            commonMistake: 'In negative comparisons, use 没有 (not as...as), NOT 不比. \'我不比他高\' means \'I am not taller\' (implying similar height). \'我没有他高\' means \'I am not as tall.\'',
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
                { question: '他___我高。', answer: '比', options: ['比', '不比', '没有', '更'] },
                { question: '今天___昨天冷。', answer: '比', options: ['比', '不比', '没有', '更'] },
                { question: '这个___那个贵。', answer: '比', options: ['比', '不比', '没有', '更'] },
                { question: '飞机___火车快。', answer: '比', options: ['比', '不比', '没有', '更'] },
                { question: '妹妹___弟弟瘦。', answer: '比', options: ['比', '不比', '没有', '更'] },
                { question: '这道菜___那道好吃。', answer: '比', options: ['比', '不比', '没有', '更'] },
                { question: '今年的冬天___去年冷。', answer: '比', options: ['比', '不比', '没有', '更'] },
                { question: '中文___日语难吗？', answer: '比', options: ['比', '不比', '没有', '更'] }
            ]
        },
        {
            id: 'g016',
            title: '比...更 (bǐ...gèng) - Even more',
            titleMeaning: 'Even more comparison',
            level: 'HSK 4',
            category: 'Comparisons',
            commonMistake: '更 is common only in comparisons. For standalone degree, use 很. \'他更高\' is valid only when comparing; \'他很高\' is simple description.',
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
                { question: '他比我___高。', answer: '更', options: ['更', '很', '非常', '太'] },
                { question: '今天比昨天___冷。', answer: '更', options: ['更', '很', '非常', '太'] },
                { question: '这个比那个___贵。', answer: '更', options: ['更', '很', '非常', '太'] },
                { question: '走路比骑车___慢。', answer: '更', options: ['更', '很', '非常', '太'] },
                { question: '她比妹妹___漂亮。', answer: '更', options: ['更', '很', '非常', '太'] },
                { question: '这次的考试比上次___难。', answer: '更', options: ['更', '很', '非常', '太'] },
                { question: '北京比上海___大。', answer: '更', options: ['更', '很', '非常', '太'] },
                { question: '他比哥哥___努力。', answer: '更', options: ['更', '很', '非常', '太'] }
            ]
        },
        {
            id: 'g017',
            title: '没有 (méiyǒu) - Negative comparison',
            titleMeaning: 'Not as...as',
            level: 'HSK 3',
            category: 'Comparisons',
            commonMistake: '不比 (not more than) implies equality, while 没有 implies A < B. They are different!',
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
                { question: '我___他高。', answer: '没有', options: ['没有', '不比', '比', '更'] },
                { question: '今天___昨天冷。', answer: '没有', options: ['没有', '不比', '比', '更'] },
                { question: '这个___那个好。', answer: '没有', options: ['没有', '不比', '比', '更'] },
                { question: '他___你聪明。', answer: '没有', options: ['没有', '不比', '比', '更'] },
                { question: '这双鞋___那双舒服。', answer: '没有', options: ['没有', '不比', '比', '更'] },
                { question: '小城市___大城市热闹。', answer: '没有', options: ['没有', '不比', '比', '更'] },
                { question: '这部电影___上一部好看。', answer: '没有', options: ['没有', '不比', '比', '更'] },
                { question: '我的房间___他的大。', answer: '没有', options: ['没有', '不比', '比', '更'] }
            ]
        },
        {
            id: 'g018',
            title: '因为...所以 (yīnwèi...suǒyǐ) - Because...therefore',
            titleMeaning: 'Cause and effect',
            level: 'HSK 3',
            category: 'Connectors',
            commonMistake: 'The 所以 is often dropped in spoken Chinese. \'因为下雨，我不去了\' is perfectly natural.',
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
                { question: '___下雨，___我不去了。', answer: '因为...所以', options: ['因为...所以', '虽然...但是', '如果...就', '不但...而且'] },
                { question: '___他很努力，___他成功了。', answer: '因为...所以', options: ['因为...所以', '虽然...但是', '如果...就', '不但...而且'] },
                { question: '___感冒了，___没来上课。', answer: '因为...所以', options: ['因为...所以', '虽然...但是', '如果...就', '不但...而且'] },
                { question: '___太贵了，___我没买。', answer: '因为...所以', options: ['因为...所以', '虽然...但是', '如果...就', '不但...而且'] },
                { question: '___堵车，___他迟到了。', answer: '因为...所以', options: ['因为...所以', '虽然...但是', '如果...就', '不但...而且'] },
                { question: '___今天是周末，___不用上班。', answer: '因为...所以', options: ['因为...所以', '虽然...但是', '如果...就', '不但...而且'] },
                { question: '___天气不好，___比赛取消了。', answer: '因为...所以', options: ['因为...所以', '虽然...但是', '如果...就', '不但...而且'] },
                { question: '___没吃早饭，___现在很饿。', answer: '因为...所以', options: ['因为...所以', '虽然...但是', '如果...就', '不但...而且'] }
            ]
        },
        {
            id: 'g019',
            title: '虽然...但是 (suīrán...dànshì) - Although...but',
            titleMeaning: 'Concession',
            level: 'HSK 3',
            category: 'Connectors',
            commonMistake: 'Chinese uses BOTH 虽然 AND 但是 together. English uses \'Although..., ...\' (no \'but\'). This is a common English-speaker mistake.',
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
                { question: '___很贵，___很好。', answer: '虽然...但是', options: ['虽然...但是', '因为...所以', '如果...就', '不但...而且'] },
                { question: '___下雨了，___他还是来了。', answer: '虽然...但是', options: ['虽然...但是', '因为...所以', '如果...就', '不但...而且'] },
                { question: '___很小，___很舒服。', answer: '虽然...但是', options: ['虽然...但是', '因为...所以', '如果...就', '不但...而且'] },
                { question: '___很累，___很开心。', answer: '虽然...但是', options: ['虽然...但是', '因为...所以', '如果...就', '不但...而且'] },
                { question: '___他年纪大，___身体很好。', answer: '虽然...但是', options: ['虽然...但是', '因为...所以', '如果...就', '不但...而且'] },
                { question: '___第一次来，___她很自信。', answer: '虽然...但是', options: ['虽然...但是', '因为...所以', '如果...就', '不但...而且'] },
                { question: '___中文很难，___我越来越喜欢。', answer: '虽然...但是', options: ['虽然...但是', '因为...所以', '如果...就', '不但...而且'] },
                { question: '___钱不多，___过得很开心。', answer: '虽然...但是', options: ['虽然...但是', '因为...所以', '如果...就', '不但...而且'] }
            ]
        },
        {
            id: 'g020',
            title: '如果...就 (rúguǒ...jiù) - If...then',
            titleMeaning: 'Condition',
            level: 'HSK 3',
            category: 'Connectors',
            commonMistake: '就 makes the result sound immediate and certain. Without it, it sounds conditional. Always include 就 in the result clause.',
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
                { question: '___下雨，我___不去了。', answer: '如果...就', options: ['如果...就', '因为...所以', '虽然...但是', '不但...而且'] },
                { question: '___你想去，我们___去。', answer: '如果...就', options: ['如果...就', '因为...所以', '虽然...但是', '不但...而且'] },
                { question: '___不努力，___会失败。', answer: '如果...就', options: ['如果...就', '因为...所以', '虽然...但是', '不但...而且'] },
                { question: '___有问题，你___问我。', answer: '如果...就', options: ['如果...就', '因为...所以', '虽然...但是', '不但...而且'] },
                { question: '___太晚了，我们___明天再做。', answer: '如果...就', options: ['如果...就', '因为...所以', '虽然...但是', '不但...而且'] },
                { question: '___你喜欢，___拿去吧。', answer: '如果...就', options: ['如果...就', '因为...所以', '虽然...但是', '不但...而且'] },
                { question: '___明天天气好，我们___去爬山。', answer: '如果...就', options: ['如果...就', '因为...所以', '虽然...但是', '不但...而且'] },
                { question: '___不快点，___来不及了。', answer: '如果...就', options: ['如果...就', '因为...所以', '虽然...但是', '不但...而且'] }
            ]
        },
        {
            id: 'g021',
            title: '不但...而且 (búdàn...érqiě) - Not only...but also',
            titleMeaning: 'Progressive',
            level: 'HSK 4',
            category: 'Connectors',
            commonMistake: '不但 can be replaced by 不仅 (more formal). Both require 而且. For negative \'not only...but also,\' use 不但不...反而.',
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
                { question: '他___会说中文，___会说日文。', answer: '不但...而且', options: ['不但...而且', '虽然...但是', '因为...所以', '如果...就'] },
                { question: '这个菜___好吃，___便宜。', answer: '不但...而且', options: ['不但...而且', '虽然...但是', '因为...所以', '如果...就'] },
                { question: '她___漂亮，___很聪明。', answer: '不但...而且', options: ['不但...而且', '虽然...但是', '因为...所以', '如果...就'] },
                { question: '他___会游泳，___游得很好。', answer: '不但...而且', options: ['不但...而且', '虽然...但是', '因为...所以', '如果...就'] },
                { question: '这个城市___大，___很干净。', answer: '不但...而且', options: ['不但...而且', '虽然...但是', '因为...所以', '如果...就'] },
                { question: '她___学习好，___体育也很棒。', answer: '不但...而且', options: ['不但...而且', '虽然...但是', '因为...所以', '如果...就'] },
                { question: '这本书___有趣，___很有用。', answer: '不但...而且', options: ['不但...而且', '虽然...但是', '因为...所以', '如果...就'] },
                { question: '他___会说，___会做。', answer: '不但...而且', options: ['不但...而且', '虽然...但是', '因为...所以', '如果...就'] }
            ]
        },
        {
            id: 'g022',
            title: '一...就 (yī...jiù) - As soon as',
            titleMeaning: 'Immediate sequence',
            level: 'HSK 3',
            category: 'Connectors',
            commonMistake: 'This structure requires two different verbs. Both actions must be real actions, not states.',
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
                { question: '我___到家___给你打电话。', answer: '一...就', options: ['一...就', '先...再', '不但...而且', '因为...所以'] },
                { question: '他___听到这个消息___高兴了。', answer: '一...就', options: ['一...就', '先...再', '不但...而且', '虽然...但是'] },
                { question: '我___吃完饭___去上课。', answer: '一...就', options: ['一...就', '先...再', '不但...而且', '虽然...但是'] },
                { question: '闹钟___响，他___起床了。', answer: '一...就', options: ['一...就', '先...再', '不但...而且', '因为...所以'] },
                { question: '天___亮，小鸟___开始唱了。', answer: '一...就', options: ['一...就', '先...再', '不但...而且', '虽然...但是'] },
                { question: '妈妈___回来，孩子___跑过去。', answer: '一...就', options: ['一...就', '先...再', '不但...而且', '因为...所以'] },
                { question: '他___进门___打开了电视。', answer: '一...就', options: ['一...就', '先...再', '不但...而且', '虽然...但是'] },
                { question: '老师___说，我们___明白了。', answer: '一...就', options: ['一...就', '先...再', '不但...而且', '因为...所以'] }
            ]
        },
        {
            id: 'g023',
            title: '先...再 (xiān...zài) - First...then',
            titleMeaning: 'Sequence',
            level: 'HSK 3',
            category: 'Connectors',
            commonMistake: '再 is for future sequences. For past sequences, use 又. \'昨天我先吃饭，又去上班了\' (past).',
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
                { question: '我___吃饭，___去上班。', answer: '先...再', options: ['先...再', '一...就', '不但...而且', '虽然...但是'] },
                { question: '你___做作业，___看电视。', answer: '先...再', options: ['先...再', '一...就', '不但...而且', '虽然...但是'] },
                { question: '我们___休息一下，___继续走。', answer: '先...再', options: ['先...再', '一...就', '不但...而且', '虽然...但是'] },
                { question: '___洗手，___吃饭。', answer: '先...再', options: ['先...再', '一...就', '不但...而且', '如果...就'] },
                { question: '我想___考虑一下，___做决定。', answer: '先...再', options: ['先...再', '一...就', '不但...而且', '虽然...但是'] },
                { question: '___学拼音，___学汉字。', answer: '先...再', options: ['先...再', '一...就', '不但...而且', '如果...就'] },
                { question: '他___看了看时间，___离开了。', answer: '先...再', options: ['先...再', '一...就', '不但...而且', '虽然...但是'] },
                { question: '我们___买票，___进去。', answer: '先...再', options: ['先...再', '一...就', '不但...而且', '如果...就'] }
            ]
        },
        {
            id: 'g024',
            title: '又...又 (yòu...yòu) - Both...and',
            titleMeaning: 'Multiple qualities',
            level: 'HSK 3',
            category: 'Connectors',
            commonMistake: 'Both adjectives must be compatible (both positive or both negative). Don\'t mix: \'又大又不甜\' sounds unnatural — use 但是 instead.',
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
                { question: '这个苹果___大___甜。', answer: '又...又', options: ['又...又', '很...很', '非常...非常', '太...太'] },
                { question: '她___漂亮___聪明。', answer: '又...又', options: ['又...又', '很...很', '非常...非常', '太...太'] },
                { question: '今天___冷___下雨。', answer: '又...又', options: ['又...又', '很...很', '非常...非常', '太...太'] },
                { question: '这个菜___香___好吃。', answer: '又...又', options: ['又...又', '很...很', '非常...非常', '太...太'] },
                { question: '他___会唱___会跳。', answer: '又...又', options: ['又...又', '很...很', '非常...非常', '太...太'] },
                { question: '房间___干净___明亮。', answer: '又...又', options: ['又...又', '很...很', '非常...非常', '太...太'] },
                { question: '她___高兴___紧张。', answer: '又...又', options: ['又...又', '很...很', '非常...非常', '太...太'] },
                { question: '爷爷___会说___会写中文。', answer: '又...又', options: ['又...又', '很...很', '非常...非常', '太...太'] }
            ]
        },
        {
            id: 'g025',
            title: '越...越 (yuè...yuè) - The more...the more',
            titleMeaning: 'Progressive degree',
            level: 'HSK 4',
            category: 'Comparisons',
            commonMistake: 'The two 越 parts must agree in subject. \'我越学越有意思\' — correct if \'I find it more interesting\'; different from \'我越学他越教\' (the more I study, the more he teaches).',
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
                { question: '___学___有意思。', answer: '越...越', options: ['越...越', '又...又', '很...很', '特别...特别'] },
                { question: '他___跑___快。', answer: '越...越', options: ['越...越', '又...又', '很...很', '特别...特别'] },
                { question: '___说___激动。', answer: '越...越', options: ['越...越', '又...又', '很...很', '特别...特别'] },
                { question: '雨___下___大。', answer: '越...越', options: ['越...越', '又...又', '很...很', '特别...特别'] },
                { question: '___看___好看。', answer: '越...越', options: ['越...越', '又...又', '很...很', '特别...特别'] },
                { question: '中文___学___难吗？', answer: '越...越', options: ['越...越', '又...又', '很...很', '特别...特别'] },
                { question: '___走___远。', answer: '越...越', options: ['越...越', '又...又', '很...很', '特别...特别'] },
                { question: '___想___生气。', answer: '越...越', options: ['越...越', '又...又', '很...很', '特别...特别'] }
            ]
        },
        {
            id: 'g026',
            title: '除了...以外 (chúle...yǐwài)',
            titleMeaning: 'Except / besides',
            level: 'HSK 4',
            category: 'Comparisons',
            commonMistake: 'Use 都 for exclusive \'除了...都\' (everyone except), and 也/还 for inclusive \'除了...也\' (in addition to). Mixing them changes the meaning entirely.',
            pattern: '除了 + Noun/Verb + 以外, ...都/也...',
            explanation: '"除了...以外"表示排除或补充。后面加"都"表示"除了...都(不)"，加"也"或"还"表示"除了...也/还"。',
            examples: [
                {
                    chinese: '除了我以外，大家都去了。',
                    pinyin: 'chúle wǒ yǐwài, dàjiā dōu qù le.',
                    meaning: 'Except for me, everyone went.'
                },
                {
                    chinese: '除了中文以外，他还会说日文。',
                    pinyin: 'chúle zhōngwén yǐwài, tā hái huì shuō rìwén.',
                    meaning: 'Besides Chinese, he can also speak Japanese.'
                },
                {
                    chinese: '除了看书以外，我也喜欢运动。',
                    pinyin: 'chúle kàn shū yǐwài, wǒ yě xǐhuān yùndòng.',
                    meaning: 'Besides reading, I also like sports.'
                }
            ],
            practice: [
                { question: '___中文___，他___说英文。', answer: '除了...以外...还', options: ['除了...以外...还', '不但...而且...', '虽然...但是...', '因为...所以...'] },
                { question: '___我___，大家都去了。', answer: '除了...以外...都', options: ['除了...以外...都', '不但...而且...', '虽然...但是...', '连...也都'] },
                { question: '___看书___，我也喜欢运动。', answer: '除了...以外...还', options: ['除了...以外...还', '不但...而且...', '虽然...但是...', '因为...所以...'] },
                { question: '___星期天___，他每天都来。', answer: '除了...以外...都', options: ['除了...以外...都', '不但...而且...', '虽然...但是...', '连...也都'] },
                { question: '___北京___，她___去过上海。', answer: '除了...以外...还', options: ['除了...以外...还', '不但...而且...', '虽然...但是...', '因为...所以...'] },
                { question: '___学习中文___，他___学日语。', answer: '除了...以外...还', options: ['除了...以外...还', '不但...而且...', '虽然...但是...', '因为...所以...'] },
                { question: '___他___，没人知道这件事。', answer: '除了...以外...都', options: ['除了...以外...都', '不但...而且...', '虽然...但是...', '连...也都'] },
                { question: '___喝茶___，我也喜欢喝咖啡。', answer: '除了...以外...还', options: ['除了...以外...还', '不但...而且...', '虽然...但是...', '因为...所以...'] }
            ]
        },
        {
            id: 'g027',
            title: '被 (bèi) - Passive voice',
            titleMeaning: 'Passive marker',
            level: 'HSK 4',
            category: 'BaBei',
            commonMistake: '被 is often used for unpleasant events. For neutral passive, consider using the topic-comment structure instead. \'饭做好了\' is more natural than \'饭被做好了\'.',
            pattern: 'Receiver + 被 + Doer + Verb + Complement',
            explanation: '"被"表示被动，动作的承受者在前，动作的发出者在后。用于描述不好的或出乎意料的情况。',
            examples: [
                {
                    chinese: '我的手机被偷了。',
                    pinyin: 'wǒ de shǒujī bèi tōu le.',
                    meaning: 'My phone was stolen.'
                },
                {
                    chinese: '他被老师批评了。',
                    pinyin: 'tā bèi lǎoshī pīpíng le.',
                    meaning: 'He was criticized by the teacher.'
                },
                {
                    chinese: '窗户被风吹开了。',
                    pinyin: 'chuānghu bèi fēng chuī kāi le.',
                    meaning: 'The window was blown open by the wind.'
                }
            ],
            practice: [
                { question: '我的书___他拿走__。', answer: '被...了', options: ['被...了', '把...了', '让...了', '给...了'] },
                { question: '我的手机___偷__。', answer: '被...了', options: ['被...了', '把...了', '让...了', '给...了'] },
                { question: '他___老师批评__。', answer: '被...了', options: ['被...了', '把...了', '让...了', '给...了'] },
                { question: '窗户___风吹开__。', answer: '被...了', options: ['被...了', '把...了', '让...了', '给...了'] },
                { question: '自行车___人骑走__。', answer: '被...了', options: ['被...了', '把...了', '让...了', '给...了'] },
                { question: '那个小偷___警察抓到__。', answer: '被...了', options: ['被...了', '把...了', '给...了', '让...了'] },
                { question: '蛋糕___妹妹吃完__。', answer: '被...了', options: ['被...了', '把...了', '让...了', '给...了'] },
                { question: '这个好消息___大家知道__。', answer: '被...了', options: ['被...了', '把...了', '让...了', '给...了'] }
            ]
        },
        {
            id: 'g028',
            title: '只要...就 (zhǐyào...jiù)',
            titleMeaning: 'As long as / if only',
            level: 'HSK 4',
            category: 'Connectors',
            commonMistake: '只要...就 is for sufficient conditions (if A, then B). 只有...才 is for necessary conditions (only if A, then B). Don\'t confuse them: \'只要努力就能成功\' (sufficient) vs \'只有努力才能成功\' (necessary).',
            pattern: '只要 + Condition + 就 + Result',
            explanation: '"只要...就"表示充分条件，只要前面的条件满足，后面的结果就会出现。',
            examples: [
                {
                    chinese: '只要你努力，就一定能成功。',
                    pinyin: 'zhǐyào nǐ nǔlì, jiù yīdìng néng chénggōng.',
                    meaning: 'As long as you work hard, you will definitely succeed.'
                },
                {
                    chinese: '只要不下雨，我们就去公园。',
                    pinyin: 'zhǐyào bù xià yǔ, wǒmen jiù qù gōngyuán.',
                    meaning: 'As long as it doesn\'t rain, we\'ll go to the park.'
                },
                {
                    chinese: '只要每天练习，中文就会进步。',
                    pinyin: 'zhǐyào měitiān liànxí, zhōngwén jiù huì jìnbù.',
                    meaning: 'As long as you practice every day, your Chinese will improve.'
                }
            ],
            practice: [
                { question: '___多听___能提高听力。', answer: '只要...就', options: ['只要...就', '只有...才', '因为...所以', '虽然...但是'] },
                { question: '___努力，___一定能成功。', answer: '只要...就', options: ['只要...就', '只有...才', '因为...所以', '虽然...但是'] },
                { question: '___不下雨，我们___去公园。', answer: '只要...就', options: ['只要...就', '只有...才', '因为...所以', '虽然...但是'] },
                { question: '___每天练习，中文___会进步。', answer: '只要...就', options: ['只要...就', '只有...才', '因为...所以', '虽然...但是'] },
                { question: '___不放弃，___有机会。', answer: '只要...就', options: ['只要...就', '只有...才', '因为...所以', '虽然...但是'] },
                { question: '___你愿意，___可以开始。', answer: '只要...就', options: ['只要...就', '只有...才', '因为...所以', '虽然...但是'] },
                { question: '___认真听讲，___能听懂。', answer: '只要...就', options: ['只要...就', '只有...才', '因为...所以', '虽然...但是'] },
                { question: '___吃饱了，___有力气干活。', answer: '只要...就', options: ['只要...就', '只有...才', '因为...所以', '虽然...但是'] }
            ]
        },
        {
            id: 'g029',
            title: '连...都/也 (lián...dōu/yě)',
            titleMeaning: 'Even',
            level: 'HSK 4',
            category: 'Connectors',
            commonMistake: '连...都/也 uses an extreme example to imply others. \'连他都不知道\' implies \'others definitely don\'t know either.\' 都 is more common than 也 in this pattern.',
            pattern: '连 + ExtremeExample + 都/也 + Verb',
            explanation: '"连...都/也"用来举出一个极端的例子，强调连这个最不可能的情况都发生了，其他更不用说了。',
            examples: [
                {
                    chinese: '他连早饭都没吃就去上班了。',
                    pinyin: 'tā lián zǎofàn dōu méi chī jiù qù shàngbān le.',
                    meaning: 'He went to work without even eating breakfast.'
                },
                {
                    chinese: '连小孩都知道这个道理。',
                    pinyin: 'lián xiǎohái dōu zhīdào zhège dàolǐ.',
                    meaning: 'Even children know this principle.'
                },
                {
                    chinese: '我连他的名字都忘了。',
                    pinyin: 'wǒ lián tā de míngzi dōu wàng le.',
                    meaning: 'I even forgot his name.'
                }
            ],
            practice: [
                { question: '他___谢谢___没说就走了。', answer: '连...都', options: ['连...都', '虽然...但', '不但...而且', '除了...以外'] },
                { question: '___小孩___知道这个道理。', answer: '连...都', options: ['连...都', '虽然...但', '不但...而且', '除了...以外'] },
                { question: '我___他的名字___忘了。', answer: '连...都', options: ['连...都', '虽然...但', '不但...而且', '除了...以外'] },
                { question: '他___早饭___没吃就去上班了。', answer: '连...都', options: ['连...都', '虽然...但', '不但...而且', '除了...以外'] },
                { question: '___最简单的题___做错了。', answer: '连...都', options: ['连...都', '虽然...但', '不但...而且', '除了...以外'] },
                { question: '我___一分钱___没有。', answer: '连...都', options: ['连...都', '虽然...但', '不但...而且', '除了...以外'] },
                { question: '他___手机___不会用。', answer: '连...都', options: ['连...都', '虽然...但', '不但...而且', '除了...以外'] },
                { question: '忙得___喝水的时间___没有。', answer: '连...都', options: ['连...都', '虽然...但', '不但...而且', '除了...以外'] }
            ]
        },
        {
            id: 'g030',
            title: '既...又 (jì...yòu)',
            titleMeaning: 'Both...and',
            level: 'HSK 4',
            category: 'Connectors',
            commonMistake: '既...又 is more formal than 又...又 and can connect longer clauses. Both indicate dual qualities present simultaneously.',
            pattern: '既 + Adj/Verb1 + 又 + Adj/Verb2',
            explanation: '"既...又"用来连接两个并列的成分，表示同时具有两种性质或同时进行两个动作。',
            examples: [
                {
                    chinese: '这个房间既干净又漂亮。',
                    pinyin: 'zhège fángjiān jì gānjìng yòu piàoliang.',
                    meaning: 'This room is both clean and beautiful.'
                },
                {
                    chinese: '她既聪明又努力。',
                    pinyin: 'tā jì cōngmíng yòu nǔlì.',
                    meaning: 'She is both smart and hardworking.'
                },
                {
                    chinese: '这家餐厅既好吃又便宜。',
                    pinyin: 'zhè jiā cāntīng jì hǎochī yòu piányi.',
                    meaning: 'This restaurant is both delicious and cheap.'
                }
            ],
            practice: [
                { question: '他___高___帅。', answer: '既...又', options: ['既...又', '又...又', '越...越', '连...都'] },
                { question: '这个房间___干净___漂亮。', answer: '既...又', options: ['既...又', '又...又', '越...越', '连...都'] },
                { question: '她___聪明___努力。', answer: '既...又', options: ['既...又', '又...又', '越...越', '连...都'] },
                { question: '这家餐厅___好吃___便宜。', answer: '既...又', options: ['既...又', '又...又', '越...越', '连...都'] },
                { question: '学中文___难___有意思。', answer: '既...又', options: ['既...又', '又...又', '越...越', '连...都'] },
                { question: '他___是我的老师，___是我的朋友。', answer: '既...又', options: ['既...又', '又...又', '越...越', '连...都'] },
                { question: '坐地铁___快___方便。', answer: '既...又', options: ['既...又', '又...又', '越...越', '连...都'] },
                { question: '这个办法___省钱___省时间。', answer: '既...又', options: ['既...又', '又...又', '越...越', '连...都'] }
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

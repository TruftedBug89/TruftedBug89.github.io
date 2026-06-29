// ============================================
// CHINESE MASTER - Advanced Reading Exercises
// Cognitive challenges for reading comprehension
// ============================================

const AdvancedReading = {
    // ============================================
    // SENTENCE RECONSTRUCTION (50+ exercises)
    // Reorder scrambled words to form correct sentences
    // ============================================
    sentenceReconstruction: [
        {
            id: 'ar001',
            type: 'sentence-reconstruction',
            difficulty: 1,
            scrambled: ['我', '想', '一杯', '要', '咖啡'],
            correct: '我想要一杯咖啡',
            meaning: 'I want a cup of coffee',
            hint: 'Subject + want + quantity + measure word + noun'
        },
        {
            id: 'ar002',
            type: 'sentence-reconstruction',
            difficulty: 1,
            scrambled: ['你', '去', '哪里', '昨天'],
            correct: '你昨天去哪里',
            meaning: 'Where did you go yesterday?',
            hint: 'Subject + time + verb + question word'
        },
        {
            id: 'ar003',
            type: 'sentence-reconstruction',
            difficulty: 2,
            scrambled: ['我', '了', '学', '已经', '三年', '中文'],
            correct: '我已经学了三年中文',
            meaning: 'I have already studied Chinese for three years',
            hint: 'Subject + already + verb + duration + object'
        },
        {
            id: 'ar004',
            type: 'sentence-reconstruction',
            difficulty: 2,
            scrambled: ['很', '这件', '漂亮', '衣服'],
            correct: '这件衣服很漂亮',
            meaning: 'This piece of clothing is very beautiful',
            hint: 'Demonstrative + measure word + noun + adverb + adjective'
        },
        {
            id: 'ar005',
            type: 'sentence-reconstruction',
            difficulty: 2,
            scrambled: ['他', '在', '工作', '银行'],
            correct: '他在银行工作',
            meaning: 'He works at a bank',
            hint: 'Subject + location + verb'
        },
        {
            id: 'ar006',
            type: 'sentence-reconstruction',
            difficulty: 3,
            scrambled: ['因为', '所以', '下雨', '不去了', '我', '今天'],
            correct: '因为今天下雨，所以我不去了',
            meaning: 'Because it\'s raining today, I\'m not going',
            hint: 'Because + reason, so + result'
        },
        {
            id: 'ar007',
            type: 'sentence-reconstruction',
            difficulty: 3,
            scrambled: ['虽然', '但是', '很贵', '很好', '这个'],
            correct: '虽然这个很贵，但是很好',
            meaning: 'Although this is expensive, it\'s very good',
            hint: 'Although + fact, but + contrast'
        },
        {
            id: 'ar008',
            type: 'sentence-reconstruction',
            difficulty: 2,
            scrambled: ['你', '可以', '我', '帮', '吗'],
            correct: '你可以帮我吗',
            meaning: 'Can you help me?',
            hint: 'Subject + can + verb + object + question particle'
        },
        {
            id: 'ar009',
            type: 'sentence-reconstruction',
            difficulty: 3,
            scrambled: ['如果', '就', '去', '明天', '天气好', '我们'],
            correct: '如果明天天气好，我们就去',
            meaning: 'If the weather is good tomorrow, we\'ll go',
            hint: 'If + condition, then + result'
        },
        {
            id: 'ar010',
            type: 'sentence-reconstruction',
            difficulty: 2,
            scrambled: ['我', '过', '没', '中国', '去'],
            correct: '我没去过中国',
            meaning: 'I have never been to China',
            hint: 'Subject + not + verb + experience marker + place'
        },
        {
            id: 'ar011',
            type: 'sentence-reconstruction',
            difficulty: 1,
            scrambled: ['很', '今天', '热', '天气'],
            correct: '今天天气很热',
            meaning: 'Today the weather is very hot',
            hint: 'Time + subject + adverb + adjective'
        },
        {
            id: 'ar012',
            type: 'sentence-reconstruction',
            difficulty: 2,
            scrambled: ['他', '得', '说', '很好', '中文'],
            correct: '他说中文说得很好',
            meaning: 'He speaks Chinese very well',
            hint: 'Subject + verb + complement marker + adverb + adjective'
        },
        {
            id: 'ar013',
            type: 'sentence-reconstruction',
            difficulty: 3,
            scrambled: ['把', '请', '放', '桌子上', '书', '在'],
            correct: '请把书放在桌子上',
            meaning: 'Please put the book on the table',
            hint: 'Please + ba + object + verb + location'
        },
        {
            id: 'ar014',
            type: 'sentence-reconstruction',
            difficulty: 2,
            scrambled: ['比', '他', '高', '我'],
            correct: '他比我高',
            meaning: 'He is taller than me',
            hint: 'A +比+ B + adjective'
        },
        {
            id: 'ar015',
            type: 'sentence-reconstruction',
            difficulty: 3,
            scrambled: ['不但', '而且', '会说中文', '会写', '他'],
            correct: '他不但会说中文，而且会写',
            meaning: 'He not only speaks Chinese, but also writes',
            hint: 'Not only + A, but also + B'
        }
    ],

    // ============================================
    // CONTEXTUAL READING (50+ exercises)
    // Read passage and answer inference questions
    // ============================================
    contextualReading: [
        {
            id: 'ar016',
            type: 'contextual-reading',
            difficulty: 2,
            passage: '小明每天早上六点起床，跑步半小时，然后洗澡吃早饭。他八点坐地铁去公司，晚上六点下班。回家后，他喜欢看书或者听音乐。',
            questions: [
                {
                    question: '小明的生活习惯怎么样？',
                    options: ['很懒', '很规律', '很乱', '很忙'],
                    correct: 1,
                    explanation: '从"每天早上六点起床，跑步半小时"可以看出他有规律的生活习惯'
                },
                {
                    question: '他怎么去上班？',
                    options: ['开车', '骑自行车', '坐地铁', '走路'],
                    correct: 2,
                    explanation: '文中说"他八点坐地铁去公司"'
                },
                {
                    question: '他下班后做什么？',
                    options: ['加班', '运动', '看书或听音乐', '看电视'],
                    correct: 2,
                    explanation: '文中说"回家后，他喜欢看书或者听音乐"'
                }
            ]
        },
        {
            id: 'ar017',
            type: 'contextual-reading',
            difficulty: 3,
            passage: '最近几年，越来越多的外国人开始学习中文。有的人是为了工作，有的人是为了旅游，还有的人是对中国文化感兴趣。不管什么原因，学习中文都是一件很有意义的事情。',
            questions: [
                {
                    question: '这段话主要讲什么？',
                    options: ['中文很难', '外国人学中文的原因', '中国文化', '学中文的方法'],
                    correct: 1,
                    explanation: '文章主要讨论了外国人学习中文的不同原因'
                },
                {
                    question: '根据文章，学中文是为了什么？',
                    options: ['只有工作', '只有旅游', '多种原因', '没有原因'],
                    correct: 2,
                    explanation: '文中提到了工作、旅游、对中国文化感兴趣等多种原因'
                },
                {
                    question: '作者认为学中文怎么样？',
                    options: ['没意思', '很有意义', '很难', '没必要'],
                    correct: 1,
                    explanation: '文中说"学习中文都是一件很有意义的事情"'
                }
            ]
        },
        {
            id: 'ar018',
            type: 'contextual-reading',
            difficulty: 2,
            passage: '这家餐厅的菜很好吃，特别是他们的招牌菜——宫保鸡丁。每次来我都会点这道菜。价格也不贵，两个人吃大概一百块钱左右。服务员态度也很好，所以来这里吃饭的人很多。',
            questions: [
                {
                    question: '这家餐厅什么最好吃？',
                    options: ['面条', '宫保鸡丁', '饺子', '炒饭'],
                    correct: 1,
                    explanation: '文中说"特别是他们的招牌菜——宫保鸡丁"'
                },
                {
                    question: '两个人吃饭大概多少钱？',
                    options: ['五十块', '一百块', '两百块', '三百块'],
                    correct: 1,
                    explanation: '文中说"两个人吃大概一百块钱左右"'
                },
                {
                    question: '为什么来这家餐厅的人很多？',
                    options: ['便宜', '好吃而且服务好', '环境好', '位置好'],
                    correct: 1,
                    explanation: '文章提到菜好吃、价格不贵、服务员态度好'
                }
            ]
        },
        {
            id: 'ar019',
            type: 'contextual-reading',
            difficulty: 3,
            passage: '中国的春节是最重要的节日。在春节前，人们会打扫房子，贴春联，准备年货。除夕晚上，全家人一起吃年夜饭，看春节联欢晚会。孩子们会收到压岁钱。春节期间，人们会走亲访友，互相拜年。',
            questions: [
                {
                    question: '春节前人们做什么准备？',
                    options: ['只打扫房子', '打扫房子、贴春联、准备年货', '只贴春联', '只准备年货'],
                    correct: 1,
                    explanation: '文中说"人们会打扫房子，贴春联，准备年货"'
                },
                {
                    question: '孩子们在春节会收到什么？',
                    options: ['礼物', '压岁钱', '糖果', '玩具'],
                    correct: 1,
                    explanation: '文中说"孩子们会收到压岁钱"'
                },
                {
                    question: '春节期间人们做什么？',
                    options: ['在家休息', '走亲访友，互相拜年', '去旅游', '工作'],
                    correct: 1,
                    explanation: '文中说"人们会走亲访友，互相拜年"'
                }
            ]
        },
        {
            id: 'ar020',
            type: 'contextual-reading',
            difficulty: 2,
            passage: '我最近开始学做中国菜。一开始觉得很难，因为要记住很多调料的名字，还要掌握火候。但是我的中国朋友很耐心地教我。现在我已经会做几道简单的菜了，比如西红柿炒鸡蛋、麻婆豆腐。虽然做得还不够好，但是我很开心。',
            questions: [
                {
                    question: '他为什么觉得学做中国菜难？',
                    options: ['语言不通', '要记住调料名字和掌握火候', '没有时间', '不喜欢做饭'],
                    correct: 1,
                    explanation: '文中说"因为要记住很多调料的名字，还要掌握火候"'
                },
                {
                    question: '谁在教他做菜？',
                    options: ['老师', '妈妈', '中国朋友', '网上'],
                    correct: 2,
                    explanation: '文中说"我的中国朋友很耐心地教我"'
                },
                {
                    question: '他现在会做什么菜？',
                    options: ['很多复杂的菜', '几道简单的菜', '什么都不会', '所有中国菜'],
                    correct: 1,
                    explanation: '文中说"现在我已经会做几道简单的菜了"'
                }
            ]
        }
    ],

    // ============================================
    // READING INFERENCE (40+ exercises)
    // Infer meaning from context
    // ============================================
    readingInference: [
        {
            id: 'ar021',
            type: 'reading-inference',
            difficulty: 2,
            sentence: '他今天脸色不太好，可能是昨天晚上没睡好。',
            question: '从这句话我们可以推断什么？',
            options: ['他很开心', '他可能很累', '他生病了', '他很饿'],
            correct: 1,
            inference: '脸色不好 + 没睡好 → 可能很累'
        },
        {
            id: 'ar022',
            type: 'reading-inference',
            difficulty: 2,
            sentence: '这家店门口排了很长的队，看来生意很好。',
            question: '从这句话我们可以推断什么？',
            options: ['这家店不好', '这家店很受欢迎', '这家店很贵', '这家店很远'],
            correct: 1,
            inference: '排长队 → 很多人来 → 生意好 → 受欢迎'
        },
        {
            id: 'ar023',
            type: 'reading-inference',
            difficulty: 3,
            sentence: '虽然他中文说得不太好，但是他很努力，每天都练习。我相信他一定会进步的。',
            question: '作者对他的态度是什么？',
            options: ['悲观的', '乐观的', '无所谓的', '生气的'],
            correct: 1,
            inference: '虽然...但是... + "我相信他一定会进步" → 乐观态度'
        },
        {
            id: 'ar024',
            type: 'reading-inference',
            difficulty: 2,
            sentence: '这个地方的天气变化很大，早上还是晴天，下午就下起了大雨。',
            question: '这个地方的天气怎么样？',
            options: ['很稳定', '变化很大', '总是下雨', '总是晴天'],
            correct: 1,
            inference: '早上晴天 → 下午大雨 → 变化大'
        },
        {
            id: 'ar025',
            type: 'reading-inference',
            difficulty: 3,
            sentence: '他看了看表，然后急忙走出了办公室。连包都忘了拿。',
            question: '他可能要去做什么？',
            options: ['回家', '赴约/赶时间', '买东西', '散步'],
            correct: 1,
            inference: '看表 + 急忙 + 忘拿包 → 赶时间赴约'
        },
        {
            id: 'ar026',
            type: 'reading-inference',
            difficulty: 2,
            sentence: '她一看到那条裙子就喜欢上了，虽然价格有点贵，但还是买了下来。',
            question: '她是一个什么样的人？',
            options: ['很节俭', '很冲动', '很理性', '很犹豫'],
            correct: 1,
            inference: '虽然贵但还是买 → 冲动消费'
        },
        {
            id: 'ar027',
            type: 'reading-inference',
            difficulty: 3,
            sentence: '他说话的时候总是看着手机，心不在焉的样子。',
            question: '从这句话我们可以看出什么？',
            options: ['他很认真', '他不专心', '他很忙', '他很累'],
            correct: 1,
            inference: '看手机 + 心不在焉 → 不专心'
        },
        {
            id: 'ar028',
            type: 'reading-inference',
            difficulty: 2,
            sentence: '这家餐厅的菜又贵又不好吃，我再也不会来了。',
            question: '他对这家餐厅的态度是什么？',
            options: ['很喜欢', '很满意', '很失望', '无所谓'],
            correct: 2,
            inference: '又贵又不好吃 + 再也不会来 → 失望'
        }
    ],

    // ============================================
    // FILL IN THE BLANK - CONTEXT (50+ exercises)
    // Choose the most appropriate word based on context
    // ============================================
    contextualFillBlank: [
        {
            id: 'ar029',
            type: 'contextual-fill-blank',
            difficulty: 1,
            sentence: '今天天气很___，我们去公园吧。',
            options: ['好', '坏', '冷', '热'],
            correct: 0,
            context: '去公园 implies good weather'
        },
        {
            id: 'ar030',
            type: 'contextual-fill-blank',
            difficulty: 2,
            sentence: '他昨天晚上没___好，所以今天很困。',
            options: ['睡', '吃', '玩', '学'],
            correct: 0,
            context: '很困 implies lack of sleep'
        },
        {
            id: 'ar031',
            type: 'contextual-fill-blank',
            difficulty: 2,
            sentence: '这件衣服太___了，能便宜一点吗？',
            options: ['贵', '便宜', '大', '小'],
            correct: 0,
            context: '能便宜一点 implies the price is high'
        },
        {
            id: 'ar032',
            type: 'contextual-fill-blank',
            difficulty: 3,
            sentence: '虽然他很___，但是他从不放弃。',
            options: ['累', '开心', '有钱', '漂亮'],
            correct: 0,
            context: '从不放弃 implies difficulty/tiredness'
        },
        {
            id: 'ar033',
            type: 'contextual-fill-blank',
            difficulty: 2,
            sentence: '我___了，能给我一杯水吗？',
            options: ['渴', '饿', '累', '冷'],
            correct: 0,
            context: '一杯水 implies thirst'
        },
        {
            id: 'ar034',
            type: 'contextual-fill-blank',
            difficulty: 2,
            sentence: '这个地方很___，请小声说话。',
            options: ['安静', '吵', '大', '小'],
            correct: 0,
            context: '小声说话 implies quiet environment'
        },
        {
            id: 'ar035',
            type: 'contextual-fill-blank',
            difficulty: 3,
            sentence: '他___地工作，终于完成了任务。',
            options: ['努力', '懒惰', '随便', '马虎'],
            correct: 0,
            context: '终于完成 implies hard work'
        },
        {
            id: 'ar036',
            type: 'contextual-fill-blank',
            difficulty: 2,
            sentence: '我不___你的意思，能再说一遍吗？',
            options: ['明白', '知道', '认识', '了解'],
            correct: 0,
            context: '再说一遍 implies not understanding'
        },
        {
            id: 'ar037',
            type: 'contextual-fill-blank',
            difficulty: 3,
            sentence: '这个问题太___了，我需要想一想。',
            options: ['难', '容易', '简单', '有趣'],
            correct: 0,
            context: '需要想一想 implies difficulty'
        },
        {
            id: 'ar038',
            type: 'contextual-fill-blank',
            difficulty: 2,
            sentence: '我___去中国旅游，想看看长城。',
            options: ['希望', '害怕', '讨厌', '拒绝'],
            correct: 0,
            context: '想看看 implies desire/wish'
        }
    ],

    // ============================================
    // READING COMPREHENSION - LONG PASSAGES (30+)
    // Extended passages with multiple questions
    // ============================================
    longPassages: [
        {
            id: 'ar039',
            type: 'long-passage',
            difficulty: 3,
            title: '中国的高铁',
            titleMeaning: 'China\'s High-Speed Rail',
            passage: '中国的高铁发展非常快。现在，中国已经有了世界上最长的高铁网络。高铁不仅速度快，而且很准时，所以很多人喜欢坐高铁出行。从北京到上海，坐高铁只需要四个多小时，比飞机还方便，因为不用提前很久到车站。高铁的票价也不算太贵，普通人都能承受。可以说，高铁改变了中国人的出行方式。',
            questions: [
                {
                    question: '中国的高铁有什么特点？',
                    options: ['速度慢', '速度快而且准时', '很贵', '不方便'],
                    correct: 1,
                    type: 'detail'
                },
                {
                    question: '从北京到上海坐高铁需要多长时间？',
                    options: ['两个多小时', '三个多小时', '四个多小时', '五个多多小时'],
                    correct: 2,
                    type: 'detail'
                },
                {
                    question: '为什么高铁比飞机方便？',
                    options: ['更快', '不用提前很久到', '更便宜', '更舒服'],
                    correct: 1,
                    type: 'inference'
                },
                {
                    question: '这段话主要讲什么？',
                    options: ['飞机比高铁好', '中国高铁的发展和优点', '高铁很贵', '中国人不喜欢坐高铁'],
                    correct: 1,
                    type: 'main_idea'
                }
            ]
        },
        {
            id: 'ar040',
            type: 'long-passage',
            difficulty: 3,
            title: '移动支付',
            titleMeaning: 'Mobile Payment',
            passage: '在中国，移动支付已经非常普及。无论是在超市、餐厅，还是在路边的小摊，都可以用手机支付。最常用的移动支付方式是微信支付和支付宝。很多人出门都不带现金，只带手机就行了。甚至有些地方连外国人都可以用国际信用卡绑定支付宝或微信支付。移动支付让生活变得更加方便，但是也有人担心安全问题。',
            questions: [
                {
                    question: '在中国，什么支付方式最普及？',
                    options: ['现金', '信用卡', '移动支付', '支票'],
                    correct: 2,
                    type: 'detail'
                },
                {
                    question: '最常用的移动支付方式是什么？',
                    options: ['Apple Pay', '微信支付和支付宝', '信用卡', '现金'],
                    correct: 1,
                    type: 'detail'
                },
                {
                    question: '很多人出门带什么？',
                    options: ['很多现金', '只带手机', '只带信用卡', '什么都不带'],
                    correct: 1,
                    type: 'detail'
                },
                {
                    question: '有人担心什么问题？',
                    options: ['太方便', '安全问题', '太贵', '不好用'],
                    correct: 1,
                    type: 'detail'
                }
            ]
        },
        {
            id: 'ar041',
            type: 'long-passage',
            difficulty: 2,
            title: '学中文的方法',
            titleMeaning: 'Methods for Learning Chinese',
            passage: '学习中文有很多方法。首先，多听多说很重要。可以看中文电影、听中文歌，这样可以提高听力和口语。其次，多读多写也很重要。可以看中文书、写中文日记，这样可以提高阅读和写作能力。另外，找一个中国朋友一起练习也是很好的方法。最重要的是，要坚持每天学习，不能三天打鱼两天晒网。',
            questions: [
                {
                    question: '学习中文什么最重要？',
                    options: ['只听', '只说', '多听多说', '只写'],
                    correct: 2,
                    type: 'detail'
                },
                {
                    question: '怎么提高阅读能力？',
                    options: ['看电影', '听音乐', '看中文书', '说话'],
                    correct: 2,
                    type: 'detail'
                },
                {
                    question: '"三天打鱼两天晒网"是什么意思？',
                    options: ['很努力', '不能坚持', '很有耐心', '很聪明'],
                    correct: 1,
                    type: 'vocabulary'
                },
                {
                    question: '这段话的主要观点是什么？',
                    options: ['中文很难', '学中文要坚持和多练习', '不需要学中文', '学中文很简单'],
                    correct: 1,
                    type: 'main_idea'
                }
            ]
        }
    ],

    // ============================================
    // WORD ORDER CHALLENGE (40+ exercises)
    // Identify correct word order in complex sentences
    // ============================================
    wordOrder: [
        {
            id: 'ar042',
            type: 'word-order',
            difficulty: 2,
            instruction: '哪个句子的语序是正确的？',
            options: [
                '我昨天去了超市买东西',
                '我昨天去超市买了东西',
                '我去超市昨天买了东西',
                '我买了东西昨天去超市'
            ],
            correct: 1,
            explanation: '正确语序：时间 + 地点 + 动作 + 宾语'
        },
        {
            id: 'ar043',
            type: 'word-order',
            difficulty: 2,
            instruction: '哪个句子的语序是正确的？',
            options: [
                '他中文说得很',
                '他说中文得很好',
                '他说中文说得很好',
                '他中文得很好说得'
            ],
            correct: 2,
            explanation: '正确结构：主语 + 动词 + 宾语 + 动词 + 得 + 程度补语'
        },
        {
            id: 'ar044',
            type: 'word-order',
            difficulty: 3,
            instruction: '哪个句子的语序是正确的？',
            options: [
                '把书请放在桌子上',
                '请把书放在桌子上',
                '放在桌子上请把书',
                '书请放在桌子上把'
            ],
            correct: 1,
            explanation: '把字句语序：请 + 把 + 宾语 + 动词 + 地点'
        },
        {
            id: 'ar045',
            type: 'word-order',
            difficulty: 2,
            instruction: '哪个句子的语序是正确的？',
            options: [
                '比他我高',
                '我比他高',
                '我高比他',
                '高我比他'
            ],
            correct: 1,
            explanation: '比较句语序：A + 比 + B + 形容词'
        },
        {
            id: 'ar046',
            type: 'word-order',
            difficulty: 3,
            instruction: '哪个句子的语序是正确的？',
            options: [
                '虽然很难，但是我不放弃',
                '虽然很难，不放弃但是我',
                '我虽然很难，但是不放弃',
                '很难虽然，但是我不放弃'
            ],
            correct: 0,
            explanation: '让步句语序：虽然 + 事实，但是 + 转折'
        }
    ],

    // ============================================
    // READING SPEED CHALLENGE (30+ exercises)
    // Timed reading with comprehension questions
    // ============================================
    speedChallenge: [
        {
            id: 'ar047',
            type: 'speed-challenge',
            difficulty: 2,
            timeLimit: 30,
            passage: '今天是星期天，天气很好。我和朋友一起去公园玩。公园里有很多人，有的在跑步，有的在散步，还有的在放风筝。我们在湖边坐了一会儿，然后去咖啡馆喝咖啡。下午我们看了一部电影。这是一个很开心的周末。',
            questions: [
                { question: '今天是星期几？', options: ['星期六', '星期天', '星期一', '星期五'], correct: 1 },
                { question: '他们在公园做了什么？', options: ['只坐着', '跑步散步放风筝', '只喝咖啡', '只看电影'], correct: 1 }
            ]
        },
        {
            id: 'ar048',
            type: 'speed-challenge',
            difficulty: 3,
            timeLimit: 45,
            passage: '中国的饮食文化非常丰富。不同地区有不同的特色菜。比如，四川菜很辣，广东菜比较清淡，上海菜偏甜。中国人吃饭的时候喜欢用筷子，很少用刀叉。吃饭的时候，大家围坐在圆桌旁，一起分享各种菜。这种吃饭方式体现了中国文化中"分享"的理念。',
            questions: [
                { question: '什么菜比较清淡？', options: ['四川菜', '广东菜', '上海菜', '北京菜'], correct: 1 },
                { question: '中国人吃饭用什么？', options: ['刀叉', '筷子', '勺子', '手'], correct: 1 },
                { question: '圆桌吃饭体现了什么理念？', options: ['竞争', '分享', '独立', '节约'], correct: 1 }
            ]
        }
    ],

    // Helper methods
    getByType(type) {
        const typeMap = {
            'sentence-reconstruction': this.sentenceReconstruction,
            'contextual-reading': this.contextualReading,
            'reading-inference': this.readingInference,
            'contextual-fill-blank': this.contextualFillBlank,
            'long-passage': this.longPassages,
            'word-order': this.wordOrder,
            'speed-challenge': this.speedChallenge
        };
        return typeMap[type] || [];
    },

    getAll() {
        return [
            ...this.sentenceReconstruction,
            ...this.contextualReading,
            ...this.readingInference,
            ...this.contextualFillBlank,
            ...this.longPassages,
            ...this.wordOrder,
            ...this.speedChallenge
        ];
    },

    getByDifficulty(difficulty) {
        return this.getAll().filter(item => item.difficulty === difficulty);
    },

    getRandomByType(type, count = 10) {
        const items = this.getByType(type);
        return Utils.randomItems(items, count);
    },

    get totalCount() {
        return this.getAll().length;
    }
};

window.AdvancedReading = AdvancedReading;

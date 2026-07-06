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
        },
        {
            id: 'ar049',
            type: 'long-passage',
            difficulty: 2,
            title: '端午节',
            titleMeaning: 'Dragon Boat Festival',
            passage: '端午节是中国传统节日，每年农历五月初五。这个节日是为了纪念古代诗人屈原。端午节有很多习俗，比如吃粽子、赛龙舟、挂艾草。粽子是用糯米做的，外面包着竹叶，里面可以放肉、豆沙或者蛋黄。赛龙舟是一项很有趣的活动，人们划着长长的船在河里比赛，非常热闹。端午节现在已经成为了国家法定假日。',
            questions: [
                {
                    question: '端午节是纪念谁的？',
                    options: ['孔子', '屈原', '李白', '杜甫'],
                    correct: 1,
                    type: 'detail'
                },
                {
                    question: '粽子是用什么包的？',
                    options: ['纸', '竹叶', '布', '荷叶'],
                    correct: 1,
                    type: 'detail'
                },
                {
                    question: '赛龙舟是什么活动？',
                    options: ['跑步比赛', '划船比赛', '游泳比赛', '骑车比赛'],
                    correct: 1,
                    type: 'detail'
                },
                {
                    question: '这段文字主要介绍什么？',
                    options: ['粽子的做法', '端午节的习俗和来历', '龙舟的制作', '屈原的诗歌'],
                    correct: 1,
                    type: 'main_idea'
                }
            ]
        },
        {
            id: 'ar050',
            type: 'long-passage',
            difficulty: 3,
            title: '智能手机与生活',
            titleMeaning: 'Smartphones and Daily Life',
            passage: '智能手机已经完全改变了现代人的生活。人们用手机购物、导航、学习、社交，几乎可以完成所有日常事务。然而，过度依赖手机也带来了问题。很多人每天花大量时间刷短视频，导致视力下降、睡眠减少。有些年轻人甚至得了"手机依赖症"，一刻也离不开手机。专家建议，每天使用手机的时间最好不要超过四个小时，睡前半小时应该放下手机，多和家人朋友面对面交流。科技应该服务于生活，而不是控制生活。',
            questions: [
                {
                    question: '智能手机带来了什么问题？',
                    options: ['太便宜', '过度依赖', '功能太少', '没人买'],
                    correct: 1,
                    type: 'detail'
                },
                {
                    question: '"手机依赖症"是什么意思？',
                    options: ['手机坏了', '离不开手机', '不喜欢手机', '手机很贵'],
                    correct: 1,
                    type: 'vocabulary'
                },
                {
                    question: '专家建议每天使用手机不超过多久？',
                    options: ['两个小时', '三个小时', '四个小时', '五个小时'],
                    correct: 2,
                    type: 'detail'
                },
                {
                    question: '作者对智能手机的态度是什么？',
                    options: ['完全否定', '全面肯定', '理性看待，注意控制', '无所谓'],
                    correct: 2,
                    type: 'inference'
                }
            ]
        },
        {
            id: 'ar051',
            type: 'long-passage',
            difficulty: 3,
            title: '高考',
            titleMeaning: 'College Entrance Exam',
            passage: '高考是中国最重要的考试，每年六月举行，有上千万学生参加。高考成绩直接决定学生能上什么样的大学，因此对每个家庭来说都非常重要。在高考前的几个月，高三学生几乎每天都在复习，很多人晚上学到很晚。有的家长甚至辞职，专心照顾孩子的饮食起居。虽然高考压力很大，但它也给很多农村孩子提供了改变命运的机会。近年来，一些高校开始尝试综合评价录取，不再只看高考分数，这也许会减少学生的压力。',
            questions: [
                {
                    question: '高考在什么时候举行？',
                    options: ['三月', '六月', '九月', '十二月'],
                    correct: 1,
                    type: 'detail'
                },
                {
                    question: '高考前高三学生的情况怎么样？',
                    options: ['很轻松', '每天都在复习', '不学习', '出去旅游'],
                    correct: 1,
                    type: 'detail'
                },
                {
                    question: '高考对农村孩子有什么意义？',
                    options: ['没有意义', '改变命运的机会', '只是浪费时间', '不重要'],
                    correct: 1,
                    type: 'inference'
                },
                {
                    question: '近年高校招生有什么变化？',
                    options: ['只看分数', '尝试综合评价', '取消高考', '降低难度'],
                    correct: 1,
                    type: 'detail'
                }
            ]
        },
        {
            id: 'ar052',
            type: 'long-passage',
            difficulty: 2,
            title: '旅行与成长',
            titleMeaning: 'Travel and Personal Growth',
            passage: '很多人喜欢旅行，因为旅行不仅能放松心情，还能开阔眼界。当你去到一个陌生的地方，看到不同的风景，体验不同的文化，你会对世界有新的认识。有些人喜欢一个人旅行，觉得这样更自由；有些人喜欢和朋友一起旅行，觉得这样更有趣。不管是哪种方式，旅行都能让人学到很多书本上学不到的东西。如果你有机会去旅行，不要只拍照，要多用心去感受。旅行最重要的不是去了哪里，而是你在旅途中收获了什么。',
            questions: [
                {
                    question: '旅行有什么好处？',
                    options: ['只放松心情', '放松心情和开阔眼界', '只拍照', '很累'],
                    correct: 1,
                    type: 'detail'
                },
                {
                    question: '"开阔眼界"是什么意思？',
                    options: ['眼睛变大', '增加见识', '看远处', '闭眼休息'],
                    correct: 1,
                    type: 'vocabulary'
                },
                {
                    question: '作者觉得旅行最重要的是什么？',
                    options: ['去了哪里', '拍了很多照片', '收获了什么', '花了多少钱'],
                    correct: 2,
                    type: 'main_idea'
                },
                {
                    question: '有人为什么喜欢一个人旅行？',
                    options: ['更省钱', '更自由', '更安全', '更热闹'],
                    correct: 1,
                    type: 'detail'
                }
            ]
        },
        {
            id: 'ar053',
            type: 'long-passage',
            difficulty: 2,
            title: '中国茶文化',
            titleMeaning: 'Chinese Tea Culture',
            passage: '中国是茶的故乡，茶文化有几千年的历史。中国人喝茶有很多讲究，不同季节喝不同的茶。比如，春天喝花茶，夏天喝绿茶，秋天喝乌龙茶，冬天喝红茶。泡茶的水温也很重要，绿茶用八十度左右的水最好，红茶则需要滚水。在中国很多地方，朋友来了都要先泡茶，这是表示欢迎和尊重。茶不仅是饮料，更是一种生活方式。慢慢品茶，可以让人心情平静下来。',
            questions: [
                {
                    question: '中国人夏天一般喝什么茶？',
                    options: ['花茶', '绿茶', '乌龙茶', '红茶'],
                    correct: 1,
                    type: 'detail'
                },
                {
                    question: '泡绿茶最好用多少度的水？',
                    options: ['六十度', '八十度', '一百度', '五十度'],
                    correct: 1,
                    type: 'detail'
                },
                {
                    question: '为什么朋友来了要泡茶？',
                    options: ['因为渴了', '表示欢迎和尊重', '这是一种法律', '没有原因'],
                    correct: 1,
                    type: 'inference'
                },
                {
                    question: '这段话主要说什么？',
                    options: ['茶的种类', '中国茶文化的讲究', '如何种茶', '茶叶的价格'],
                    correct: 1,
                    type: 'main_idea'
                }
            ]
        },
        {
            id: 'ar054',
            type: 'long-passage',
            difficulty: 3,
            title: '中国书法',
            titleMeaning: 'Chinese Calligraphy',
            passage: '中国书法是一门古老的艺术，用毛笔和墨汁在纸上写字。书法不只是写字，更是一种表达情感的方式。中国古代有许多著名的书法家，比如王羲之，他的《兰亭序》被称为"天下第一行书"。练习书法需要很大的耐心，一笔一画都要认真。很多人说，练书法能让人静下心来，培养专注力。现在虽然用电脑打字的人越来越多，但仍有不少人坚持练习书法，因为他们觉得这是一种文化传承。学习书法，也是在了解中国传统文化。',
            questions: [
                {
                    question: '书法是用什么写的？',
                    options: ['钢笔', '毛笔', '铅笔', '圆珠笔'],
                    correct: 1,
                    type: 'detail'
                },
                {
                    question: '谁是古代著名书法家？',
                    options: ['孔子', '屈原', '王羲之', '李白'],
                    correct: 2,
                    type: 'detail'
                },
                {
                    question: '练书法需要什么？',
                    options: ['很大的耐心', '很快的速度', '很多钱', '不用练习'],
                    correct: 0,
                    type: 'detail'
                },
                {
                    question: '为什么现在还有人练书法？',
                    options: ['电脑坏了', '文化传承', '没有别的事做', '为了赚钱'],
                    correct: 1,
                    type: 'inference'
                }
            ]
        },
        {
            id: 'ar055',
            type: 'long-passage',
            difficulty: 2,
            title: '保护环境',
            titleMeaning: 'Protecting the Environment',
            passage: '现在，环境问题越来越严重。空气污染、水污染、垃圾问题都影响着我们的健康。为了保护环境，每个人都可以做一些小事。比如，出门尽量坐公交或骑自行车，减少开车；购物时自带购物袋，不用塑料袋；垃圾分类投放，方便回收。有些城市已经开始实行严格的垃圾分类制度。保护环境不是一个人的事，而是每个人的责任。如果我们每个人都做出一点改变，世界就会变得更美好。',
            questions: [
                {
                    question: '哪些环境问题在影响我们？',
                    options: ['只有空气污染', '空气污染、水污染、垃圾问题', '只有水污染', '没有问题'],
                    correct: 1,
                    type: 'detail'
                },
                {
                    question: '怎么减少空气污染？',
                    options: ['多开车', '坐公交或骑自行车', '用塑料袋', '不分类'],
                    correct: 1,
                    type: 'detail'
                },
                {
                    question: '作者认为保护环境是谁的责任？',
                    options: ['只是政府的责任', '只是企业的责任', '每个人的责任', '不是我的责任'],
                    correct: 2,
                    type: 'main_idea'
                },
                {
                    question: '有些城市已经开始实行什么制度？',
                    options: ['禁止走路', '垃圾分类', '禁止骑自行车', '多开汽车'],
                    correct: 1,
                    type: 'detail'
                }
            ]
        },
        {
            id: 'ar056',
            type: 'long-passage',
            difficulty: 2,
            title: '孝顺父母',
            titleMeaning: 'Filial Piety',
            passage: '在中国文化中，孝顺父母是非常重要的美德。古人说"百善孝为先"，意思是所有的善行中，孝顺是最重要的。孝顺不只是给父母钱，更重要的是关心他们的生活和健康。很多年轻人工作很忙，但还是尽量抽时间回家看看父母。现在有些年轻人会把父母接到自己住的城市，方便照顾。逢年过节，人们都会回家和父母团聚。孝顺父母不仅是一种责任，也是表达感恩的方式。',
            questions: [
                {
                    question: '"百善孝为先"是什么意思？',
                    options: ['孝顺不重要', '孝顺是最重要的善行', '孝顺很简单', '不需要孝顺'],
                    correct: 1,
                    type: 'vocabulary'
                },
                {
                    question: '孝顺只给父母钱就行了吗？',
                    options: ['是的', '不行，还要关心生活和健康', '父母不需要钱', '钱最重要'],
                    correct: 1,
                    type: 'detail'
                },
                {
                    question: '年轻人怎么孝顺父母？',
                    options: ['不给父母打电话', '抽时间回家看看', '忘记父母', '不关心'],
                    correct: 1,
                    type: 'detail'
                },
                {
                    question: '这段话主要讲什么？',
                    options: ['如何赚钱', '孝顺父母的重要性和方式', '如何工作', '节日习俗'],
                    correct: 1,
                    type: 'main_idea'
                }
            ]
        },
        {
            id: 'ar057',
            type: 'long-passage',
            difficulty: 2,
            title: '运动与健康',
            titleMeaning: 'Exercise and Health',
            passage: '现代人生活节奏快，工作压力大，很多人忽视了运动。其实，规律运动对健康非常重要。每天运动半小时，可以增强体质，减少生病的可能。运动还能让人心情变好，因为运动时身体会分泌一种让人快乐的物质。不喜欢跑步的人可以试试游泳、瑜伽或者跳舞。重要的是找到一种自己喜欢的运动方式，这样才容易坚持下去。记住，健康是一切的基础，没有健康就没有幸福的生活。',
            questions: [
                {
                    question: '每天运动多长时间比较好？',
                    options: ['十分钟', '半小时', '两小时', '不用运动'],
                    correct: 1,
                    type: 'detail'
                },
                {
                    question: '运动为什么能让人心情好？',
                    options: ['不用工作', '身体分泌快乐物质', '可以睡觉', '没有原因'],
                    correct: 1,
                    type: 'detail'
                },
                {
                    question: '怎么才能坚持运动？',
                    options: ['强迫自己', '找到喜欢的方式', '不需要运动', '天天跑步'],
                    correct: 1,
                    type: 'inference'
                },
                {
                    question: '作者认为什么是一切的基础？',
                    options: ['金钱', '工作', '健康', '地位'],
                    correct: 2,
                    type: 'detail'
                }
            ]
        },
        {
            id: 'ar058',
            type: 'long-passage',
            difficulty: 3,
            title: '网络社交的利与弊',
            titleMeaning: 'Pros and Cons of Social Media',
            passage: '微信、微博、抖音等社交软件已经成为人们日常生活的一部分。通过网络，人们可以方便地和远方的朋友联系，分享生活中的点点滴滴。很多人在社交平台上找到了志同道合的朋友，甚至找到了工作和商业机会。但是，社交媒体也有负面影响。一些人花太多时间在网络上，忽略了现实中的人际关系。还有人过度关注别人的生活，产生焦虑和不满。关键是找到平衡，让社交媒体为生活服务，而不是被它控制。',
            questions: [
                {
                    question: '社交媒体有什么好处？',
                    options: ['只有坏处', '方便联系朋友、分享生活', '浪费时间', '让人更焦虑'],
                    correct: 1,
                    type: 'detail'
                },
                {
                    question: '社交媒体有什么负面影响？',
                    options: ['没有任何问题', '忽略现实人际关系', '太便宜', '功能太少'],
                    correct: 1,
                    type: 'detail'
                },
                {
                    question: '有人过度关注别人的生活会怎样？',
                    options: ['更开心', '产生焦虑和不满', '更健康', '更有钱'],
                    correct: 1,
                    type: 'detail'
                },
                {
                    question: '作者对社交媒体的态度是什么？',
                    options: ['完全反对', '完全支持', '理性使用、找到平衡', '无所谓'],
                    correct: 2,
                    type: 'main_idea'
                }
            ]
        },
    ],

    // ============================================
    // WORD ORDER CHALLENGE (40+ exercises)
    // Identify correct word order in complex sentences
    // ============================================
    wordOrder: [
        {
            id: 'ar060',
            type: 'word-order',
            difficulty: 2,
            instruction: '哪个句子的语序是正确的？',
            options: [
                '我被这件事感动了很',
                '这件事我被很感动了',
                '我被这件事很感动了',
                '我被这件事感动了'
            ],
            correct: 3,
            explanation: '被字句结构：主语 + 被 + 宾语 + 动词 + 其他成分。"很"应放在被字结构前，或直接省略。'
        },
        {
            id: 'ar061',
            type: 'word-order',
            difficulty: 2,
            instruction: '哪个句子的语序是正确的？',
            options: [
                '我吃完了把饭',
                '把饭吃完了我',
                '我把饭吃完了',
                '饭吃完了把我'
            ],
            correct: 2,
            explanation: '把字句语序：主语 + 把 + 宾语 + 动词 + 结果补语'
        },
        {
            id: 'ar062',
            type: 'word-order',
            difficulty: 3,
            instruction: '哪个句子的语序是正确的？',
            options: [
                '他跑得我比快',
                '我比他跑得快',
                '他跑得快比我',
                '我比跑得快他'
            ],
            correct: 1,
            explanation: '比较句语序：A + 比 + B + 动词 + 得 + 程度补语'
        },
        {
            id: 'ar063',
            type: 'word-order',
            difficulty: 2,
            instruction: '哪个句子的语序是正确的？',
            options: [
                '我写作业完了',
                '我写完作业了',
                '作业我写完了的',
                '写完了作业我'
            ],
            correct: 1,
            explanation: '结果补语"完"紧跟在动词后：动词 + 完 + 宾语 + 了'
        },
        {
            id: 'ar064',
            type: 'word-order',
            difficulty: 3,
            instruction: '哪个句子的语序是正确的？',
            options: [
                '这么多作业我做得完吗',
                '这么多作业我做完得吗',
                '我做得完吗这么多作业',
                '这么多作业得我做完吗'
            ],
            correct: 0,
            explanation: '可能补语结构：动词 + 得 + 结果补语，否定式为动词 + 不 + 结果补语'
        },
        {
            id: 'ar065',
            type: 'word-order',
            difficulty: 2,
            instruction: '哪个句子的语序是正确的？',
            options: [
                '他走进来了教室',
                '教室他走进来了',
                '他走进教室来了',
                '走进来了教室他'
            ],
            correct: 2,
            explanation: '趋向补语结构：动词 + 趋向补语（进）+ 宾语 + 来/去'
        },
        {
            id: 'ar066',
            type: 'word-order',
            difficulty: 3,
            instruction: '哪个句子的语序是正确的？',
            options: [
                '我学中文了三年',
                '我三年学了中文',
                '我学了中文三年了',
                '我学了三年中文'
            ],
            correct: 3,
            explanation: '时量补语放在动词后、宾语前：动词 + 了 + 时间段 + 宾语。不能说"学中文了三年"。'
        },
        {
            id: 'ar067',
            type: 'word-order',
            difficulty: 2,
            instruction: '哪个句子的语序是正确的？',
            options: [
                '桌子上放着着一本书',
                '桌子上放着一本书',
                '一本书桌子上放着',
                '放着一本书在桌子上'
            ],
            correct: 1,
            explanation: '存现句结构：地点 + 动词 + 着 + 宾语。表示存在的状态。'
        },
        {
            id: 'ar068',
            type: 'word-order',
            difficulty: 3,
            instruction: '哪个句子的语序是正确的？',
            options: [
                '那三本新书是我的',
                '三本新那书是我的',
                '新三本那书是我的',
                '那新三本书是我的'
            ],
            correct: 0,
            explanation: '多项定语顺序：指示代词 + 数量词 + 形容词 + 的 + 中心词'
        },
        {
            id: 'ar069',
            type: 'word-order',
            difficulty: 2,
            instruction: '哪个句子的语序是正确的？',
            options: [
                '他地认真学习在图书馆',
                '他在图书馆认真地学习',
                '他认真地学习在图书馆地',
                '学习他在图书馆认真地'
            ],
            correct: 1,
            explanation: '状语位置：主语 + 地点状语 + 方式状语（地）+ 动词'
        },
        {
            id: 'ar070',
            type: 'word-order',
            difficulty: 3,
            instruction: '哪个句子的语序是正确的？',
            options: [
                '那个人我昨天见的很高很高',
                '我昨天见的那个人很高',
                '我见的那个人很高昨天',
                '昨天我见那个人很高的'
            ],
            correct: 1,
            explanation: '定语从句 + 的 + 中心语 + 谓语。修饰语放被修饰词前面。'
        },
        {
            id: 'ar071',
            type: 'word-order',
            difficulty: 2,
            instruction: '哪个句子的语序是正确的？',
            options: [
                '他去图书馆看书了',
                '他去看书图书馆了',
                '图书馆他去看了书',
                '去了图书馆他看书'
            ],
            correct: 0,
            explanation: '连动句：主语 + 动词1 + 地点 + 动词2 + 宾语。两个动作有先后或目的关系。'
        },
        {
            id: 'ar072',
            type: 'word-order',
            difficulty: 3,
            instruction: '哪个句子的语序是正确的？',
            options: [
                '让我妈妈去商店买东西',
                '妈妈让我去商店买东西',
                '我去商店让妈妈买东西',
                '让买东西妈妈我去商店'
            ],
            correct: 1,
            explanation: '兼语句：主语1 + 让/叫/请 + 兼语 + 动词 + 宾语。兼语既是前动词宾语也是后动词主语。'
        },
        {
            id: 'ar073',
            type: 'word-order',
            difficulty: 3,
            instruction: '哪个句子的语序是正确的？',
            options: [
                '是他告诉我这件事的',
                '是他告诉我这件事',
                '告诉我这件事是他的',
                '是他这件事告诉我的'
            ],
            correct: 0,
            explanation: '强调句"是...的"结构：是 + 被强调部分 + 动词 + 其他 + 的'
        },
        {
            id: 'ar074',
            type: 'word-order',
            difficulty: 2,
            instruction: '哪个句子的语序是正确的？',
            options: [
                '他明天不来可能',
                '明天他可能不来',
                '不来他明天可能',
                '他不来明天可能'
            ],
            correct: 1,
            explanation: '能愿动词"可能"放在动词前：时间 + 主语 + 能愿动词 + 否定词 + 动词'
        },
        {
            id: 'ar075',
            type: 'word-order',
            difficulty: 3,
            instruction: '哪个句子的语序是正确的？',
            options: [
                '越来越他的身体好了',
                '他的身体好了越来越',
                '他的身体越来越好了',
                '越来越好了他的身体'
            ],
            correct: 2,
            explanation: '"越来越"的用法：主语 + 越来越 + 形容词/动词短语。表示程度随时间增加。'
        },
        {
            id: 'ar076',
            type: 'word-order',
            difficulty: 2,
            instruction: '哪个句子的语序是正确的？',
            options: [
                '我两个小时等了',
                '我等了两个小时',
                '我等小时了两个',
                '两个小时等了我'
            ],
            correct: 1,
            explanation: '时量补语结构：主语 + 动词 + 了 + 时间段。表示动作持续的时间。'
        },
        {
            id: 'ar077',
            type: 'word-order',
            difficulty: 3,
            instruction: '哪个句子的语序是正确的？',
            options: [
                '不但他聪明，很努力而且',
                '他不但很努力，而且聪明',
                '他不但很聪明，而且很努力',
                '不但他聪明，而且很努力'
            ],
            correct: 2,
            explanation: '"不但...而且..."结构：主语 + 不但 + 形容词/动词，而且 + 形容词/动词。主语相同放前面。'
        },
        {
            id: 'ar078',
            type: 'word-order',
            difficulty: 2,
            instruction: '哪个句子的语序是正确的？',
            options: [
                '比他跑得快我',
                '我跑得快比他',
                '我跑得比他快',
                '快我跑得比他'
            ],
            correct: 2,
            explanation: '比较句带补语：A + 动词 + 得 + 比 + B + 形容词'
        },
        {
            id: 'ar079',
            type: 'word-order',
            difficulty: 3,
            instruction: '哪个句子的语序是正确的？',
            options: [
                '他什么都愿意为我做',
                '他愿意什么都为我做',
                '什么都他愿意为我做',
                '为我做他什么都愿意'
            ],
            correct: 0,
            explanation: '"什么都"强调结构：主语 + 什么都 + 动词短语。"什么都"放在动词前表强调。'
        },
        {
            id: 'ar080',
            type: 'word-order',
            difficulty: 2,
            instruction: '哪个句子的语序是正确的？',
            options: [
                '他起床了才八点',
                '八点才起床了他',
                '他八点才起床',
                '才起床他八点'
            ],
            correct: 2,
            explanation: '副词"才"放在动词前：主语 + 时间 + 才 + 动词。表示动作发生得晚或慢。'
        },
        {
            id: 'ar081',
            type: 'word-order',
            difficulty: 3,
            instruction: '哪个句子的语序是正确的？',
            options: [
                '连饭都没吃他就走了',
                '他连都没吃饭就走了',
                '他连饭都没吃就走了',
                '连饭他都没吃就走了'
            ],
            correct: 2,
            explanation: '"连...都/也"强调结构：主语 + 连 + 强调对象 + 都/也 + 动词'
        },
        {
            id: 'ar082',
            type: 'word-order',
            difficulty: 2,
            instruction: '哪个句子的语序是正确的？',
            options: [
                '我去过中国两次',
                '我两次去过中国',
                '我去中国过两次',
                '两次我去过中国'
            ],
            correct: 0,
            explanation: '动量补语"两次"：主语 + 动词 + 过 + 地点 + 动量补语'
        },
        {
            id: 'ar083',
            type: 'word-order',
            difficulty: 3,
            instruction: '哪个句子的语序是正确的？',
            options: [
                '无论下雨不下雨，都去我要',
                '无论下不下雨，我都要去',
                '无论下不下雨，都要去我',
                '我无论都要去下不下雨'
            ],
            correct: 1,
            explanation: '"无论...都..."结构：无论 + 条件，主语 + 都 + 动词。主语放在"都"前面。'
        },
        {
            id: 'ar084',
            type: 'word-order',
            difficulty: 3,
            instruction: '哪个句子的语序是正确的？',
            options: [
                '对来说我，学中文很重要',
                '我来说对，学中文很重要',
                '对我来说，学中文很重要',
                '学中文对我来说很重要对'
            ],
            correct: 2,
            explanation: '"对...来说"结构：对 + 对象 + 来说，表示从某人的角度来看。'
        },
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
            id: 'ar090',
            type: 'speed-challenge',
            difficulty: 1,
            timeLimit: 30,
            passage: '我的好朋友叫王明。他很高，喜欢打篮球。每个周末他都会去体育馆打球。他打得很好，很多人都喜欢和他一起玩。他说打篮球不仅能锻炼身体，还能交到很多朋友。',
            questions: [
                { question: '王明喜欢什么运动？', options: ['足球', '篮球', '网球', '游泳'], correct: 1 },
                { question: '他为什么喜欢打篮球？', options: ['想赢比赛', '锻炼身体和交朋友', '想长高', '没有原因'], correct: 1 }
            ]
        },
        {
            id: 'ar091',
            type: 'speed-challenge',
            difficulty: 1,
            timeLimit: 30,
            passage: '我家附近有一家小超市。超市虽小，但东西很全。我经常去那里买水果和牛奶。超市的老板人很好，每次都会笑着和我打招呼。有时候我忘带钱了，老板还会让我下次再付。',
            questions: [
                { question: '超市大不大？', options: ['很大', '很小', '不大不小', '不知道'], correct: 1 },
                { question: '老板是个什么样的人？', options: ['很凶', '很好', '很懒', '很忙'], correct: 1 }
            ]
        },
        {
            id: 'ar092',
            type: 'speed-challenge',
            difficulty: 1,
            timeLimit: 30,
            passage: '春天来了，公园里的花都开了。有红色的，黄色的，还有白色的，漂亮极了。很多人带着孩子来公园玩。孩子们跑来跑去，笑得很开心。老人们在树下聊天或者下棋。春天真是一个美好的季节。',
            questions: [
                { question: '公园里有什么颜色的花？', options: ['只有红色', '红黄白', '只有白色', '没有花'], correct: 1 },
                { question: '老人们在树下做什么？', options: ['跑步', '聊天或下棋', '唱歌', '跳舞'], correct: 1 }
            ]
        },
        {
            id: 'ar093',
            type: 'speed-challenge',
            difficulty: 1,
            timeLimit: 30,
            passage: '我的狗狗叫小白。它全身都是白色的，眼睛又大又圆，非常可爱。小白很聪明，能听懂我说的话。我说"坐下"，它就坐下。我说"过来"，它就很快跑过来。每天放学回家，小白都会在门口等我。',
            questions: [
                { question: '小白是什么颜色？', options: ['黑色', '白色', '黄色', '棕色'], correct: 1 },
                { question: '小白有什么特点？', options: ['很懒', '很聪明', '很凶', '很大'], correct: 1 }
            ]
        },
        {
            id: 'ar094',
            type: 'speed-challenge',
            difficulty: 1,
            timeLimit: 30,
            passage: '妈妈今天做了我最喜欢吃的饺子。饺子是猪肉白菜馅的，非常好吃。我一个人吃了十五个，肚子都撑圆了。妈妈说下次再给我做牛肉馅的饺子。我已经开始期待下一次了。',
            questions: [
                { question: '今天吃的是什么馅的饺子？', options: ['牛肉馅', '猪肉白菜馅', '素馅', '海鲜馅'], correct: 1 },
                { question: '他吃了多少个饺子？', options: ['五个', '十个', '十五个', '二十个'], correct: 2 }
            ]
        },
        {
            id: 'ar095',
            type: 'speed-challenge',
            difficulty: 1,
            timeLimit: 30,
            passage: '昨天我和同学一起去爬山。山不高，但是风景很美。我们爬到山顶的时候，看到了远处的城市和河流。我们在山顶吃了午饭，拍了照片。虽然有点累，但是大家都很开心。',
            questions: [
                { question: '山高吗？', options: ['很高', '不高', '非常低', '不知道'], correct: 1 },
                { question: '他们在山顶做了什么？', options: ['睡觉', '唱歌', '吃饭和拍照', '游泳'], correct: 2 }
            ]
        },
        {
            id: 'ar096',
            type: 'speed-challenge',
            difficulty: 1,
            timeLimit: 30,
            passage: '今天是爸爸的生日。我和妈妈给爸爸准备了一个惊喜。妈妈做了很多好吃的菜，我画了一张贺卡送给爸爸。爸爸看到后非常高兴，说这是他收到的最好的礼物。晚上我们一起吃了蛋糕。',
            questions: [
                { question: '今天是谁的生日？', options: ['妈妈的', '爸爸的', '我的', '朋友的'], correct: 1 },
                { question: '爸爸收到什么礼物最开心？', options: ['钱', '蛋糕', '贺卡', '衣服'], correct: 2 }
            ]
        },
        {
            id: 'ar097',
            type: 'speed-challenge',
            difficulty: 2,
            timeLimit: 45,
            passage: '共享单车在中国非常流行。在城市的每个角落，你都能看到一排排的共享单车。人们用手机扫一下二维码就能骑车，用完后再锁上放在路边就可以了。共享单车不仅便宜，而且环保。很多人上班、上学都选择骑共享单车。不过有时候车子太多，把路都占满了，也是个问题。',
            questions: [
                { question: '怎么使用共享单车？', options: ['直接骑走', '扫二维码', '给钱就行', '拿钥匙开'], correct: 1 },
                { question: '共享单车有什么问题？', options: ['太贵', '车子太多占路', '太慢', '不好找'], correct: 1 }
            ]
        },
        {
            id: 'ar098',
            type: 'speed-challenge',
            difficulty: 2,
            timeLimit: 45,
            passage: '熊猫是中国的国宝，非常可爱。它们主要生活在四川的山里。熊猫最喜欢吃竹子，一天能吃几十公斤。因为环境变化和人类活动，熊猫的数量越来越少。幸好中国政府建立了自然保护区来保护它们。现在野生熊猫的数量已经开始慢慢增加了。',
            questions: [
                { question: '熊猫主要生活在哪个省？', options: ['云南', '四川', '广东', '北京'], correct: 1 },
                { question: '政府怎么保护熊猫？', options: ['不管', '建立自然保护区', '送到国外', '放动物园'], correct: 1 }
            ]
        },
        {
            id: 'ar099',
            type: 'speed-challenge',
            difficulty: 2,
            timeLimit: 45,
            passage: '北京的胡同是老北京最有特色的地方。胡同是窄窄的小巷，两边是传统的四合院。在胡同里，你可以看到老人下棋、小孩玩耍，感受到真正的老北京生活。不过现在很多胡同都被拆了，建成了高楼。剩下的一些胡同变成了旅游景点，卖各种小吃和纪念品。',
            questions: [
                { question: '胡同是什么？', options: ['高楼', '窄巷', '公园', '商场'], correct: 1 },
                { question: '很多胡同现在变成了什么？', options: ['学校', '医院', '高楼', '工厂'], correct: 2 }
            ]
        },
        {
            id: 'ar100',
            type: 'speed-challenge',
            difficulty: 2,
            timeLimit: 45,
            passage: '微信支付让生活变得特别方便。现在在中国，连路边卖水果的大妈都用微信收款。去超市买东西、打车、订外卖，全部可以用手机搞定。外国人来中国旅游，看到这种支付方式都觉得很惊讶。不过对于不会用智能手机的老人来说，移动支付反而带来了一些不方便。',
            questions: [
                { question: '微信支付在哪里可以用？', options: ['只在超市', '只能在网上', '很多地方都能用', '只在银行'], correct: 2 },
                { question: '对谁来说移动支付不方便？', options: ['年轻人', '外国人', '老人', '小孩'], correct: 2 }
            ]
        },
        {
            id: 'ar101',
            type: 'speed-challenge',
            difficulty: 2,
            timeLimit: 45,
            passage: '中国菜讲究"色香味俱全"，意思是菜要好看、好闻、好吃。做中国菜有很多方法，最常见的是炒、蒸、煮、炸。炒菜时火要大，动作要快；蒸菜能保持食物的原味；煮的菜比较清淡；炸的食物很香但不太健康。中国人很重视饮食，觉得吃得好才能身体好。',
            questions: [
                { question: '"色香味俱全"是什么意思？', options: ['颜色多', '好看好闻好吃', '味道重', '价格贵'], correct: 1 },
                { question: '哪种做法能保持食物的原味？', options: ['炒', '蒸', '炸', '烤'], correct: 1 }
            ]
        },
        {
            id: 'ar102',
            type: 'speed-challenge',
            difficulty: 2,
            timeLimit: 45,
            passage: '我第一次坐高铁的时候非常兴奋。高铁启动很平稳，速度慢慢加快，很快就到了每小时三百公里。窗外的风景快速向后退，感觉像在飞一样。车厢里很干净，座位也很舒服。四个小时后我就到了目的地。如果开车的话，要走八个小时呢。高铁真是改变了人们的出行方式。',
            questions: [
                { question: '高铁的速度有多快？', options: ['一百公里每小时', '两百公里的时', '三百公里的时', '四百公里的时'], correct: 2 },
                { question: '开车需要多长时间？', options: ['四小时', '六小时', '八小时', '十小时'], correct: 2 }
            ]
        },
        {
            id: 'ar103',
            type: 'speed-challenge',
            difficulty: 2,
            timeLimit: 45,
            passage: '双十一是中国最大的网上购物节，在每年的十一月十一日。这一天，几乎所有网店都会打折，很多人提前几天就把想买的东西放进购物车。到了双十一那天，大家都在疯狂下单。有些东西确实比平时便宜很多，但也有人买了根本不需要的东西。购物要理性，不要因为便宜就乱买。',
            questions: [
                { question: '双十一是什么时候？', options: ['十月十一', '十一月十一', '十二月十一', '一月十一'], correct: 1 },
                { question: '作者对双十一购物有什么建议？', options: ['多买东西', '理性购物', '不要购物', '花光钱'], correct: 1 }
            ]
        },
        {
            id: 'ar104',
            type: 'speed-challenge',
            difficulty: 2,
            timeLimit: 45,
            passage: '太极拳是一种传统的中国武术，现在很多人把它当作锻炼身体的方式。太极的动作很慢，看起来很优雅。练习太极需要注意力集中，同时调整呼吸。很多老人早上在公园里打太极，既能锻炼身体，又能放松心情。近年来，越来越多的外国人也开始学习太极了。',
            questions: [
                { question: '太极的动作特点是什么？', options: ['很快', '很慢很优雅', '很难', '很累'], correct: 1 },
                { question: '练习太极有什么好处？', options: ['只有锻炼身体', '锻炼身体和放松心情', '学会打架', '没有好处'], correct: 1 }
            ]
        },
        {
            id: 'ar105',
            type: 'speed-challenge',
            difficulty: 3,
            timeLimit: 60,
            passage: '中国年轻一代的消费观念和父母那一辈很不一样。老一辈习惯存钱，买东西精打细算，能省则省。而年轻人更愿意花钱享受生活，旅游、美食、电子产品的消费很高。有调查显示，很多"90后"每个月几乎存不下什么钱。这种消费观念的变化是社会发展带来的。一方面人们收入提高了，另一方面各种消费渠道也多了。',
            questions: [
                { question: '老一辈的消费习惯是什么？', options: ['乱花钱', '精打细算', '不存钱', '只旅游'], correct: 1 },
                { question: '年轻人更愿意在哪些方面花钱？', options: ['只存钱', '旅游美食电子产品', '只买房', '什么都不买'], correct: 1 },
                { question: '消费观念变化的原因是什么？', options: ['没有原因', '收入提高和消费渠道多', '年轻人更傻', '老人变了'], correct: 1 }
            ]
        },
        {
            id: 'ar106',
            type: 'speed-challenge',
            difficulty: 3,
            timeLimit: 60,
            passage: '中国有句古话叫"活到老，学到老"。在当今社会，这句话比任何时候都更重要。科技发展太快，很多知识和技能很快就会过时。如果不持续学习，很可能被时代淘汰。现在有很多在线教育平台，人们可以随时随地学习新知识。有些退休的老人也开始学英语、学电脑，生活过得很充实。学习不是为了考试，而是为了更好地生活。',
            questions: [
                { question: '"活到老，学到老"是什么意思？', options: ['老人不用学', '一辈子都要学习', '年轻人不用学', '学习很累'], correct: 1 },
                { question: '为什么持续学习很重要？', options: ['因为考试', '科技发展快，知识过时快', '为了面子', '没有原因'], correct: 1 },
                { question: '退休老人学习是为了什么？', options: ['赚钱', '充实生活', '回到学校', '参加考试'], correct: 1 }
            ]
        },
        {
            id: 'ar107',
            type: 'speed-challenge',
            difficulty: 3,
            timeLimit: 60,
            passage: '近几年，中国的乡村旅游业发展迅速。很多城市人周末喜欢开车到周边的农村去，呼吸新鲜空气，吃农家菜，体验田园生活。有些村子依靠旅游发展起来了，村民开起了民宿，卖起了土特产。游客可以摘水果、钓鱼、爬山，享受慢生活。乡村旅游不仅让城市人放松了，也帮助农民增加了收入，是一种双赢的模式。',
            questions: [
                { question: '城市人周末喜欢去哪里？', options: ['商场', '农村', '国外', '办公室'], correct: 1 },
                { question: '乡村旅游对农民有什么好处？', options: ['没有好处', '增加收入', '更累了', '不想工作了'], correct: 1 },
                { question: '"双赢"的意思是什么？', options: ['一方赢', '双方都受益', '没有人赢', '输了'], correct: 1 }
            ]
        },
        {
            id: 'ar108',
            type: 'speed-challenge',
            difficulty: 3,
            timeLimit: 60,
            passage: '中医是中国传统医学，有几千年的历史。中医看病的方法和西医不同，讲究"望闻问切"，也就是看脸色、听声音、问症状、把脉搏。中医认为人体是一个整体，各部分互相关联。治疗时用中药、针灸、按摩等方法，调节人体的平衡。现在很多外国人也都相信中医，来中国学习中医的留学生越来越多。',
            questions: [
                { question: '中医看病的方法叫什么？', options: ['抽血检查', '望闻问切', '拍片子', '吃药'], correct: 1 },
                { question: '中医用什么方法治疗？', options: ['只吃药', '中药针灸按摩', '只打针', '只做手术'], correct: 1 },
                { question: '外国人对中医的态度是什么？', options: ['完全不信', '越来越多的人相信', '没人知道', '反对'], correct: 1 }
            ]
        },
        {
            id: 'ar109',
            type: 'speed-challenge',
            difficulty: 3,
            timeLimit: 60,
            passage: '北京故宫是中国最有名的古代建筑群，建于明朝，已经有六百多年的历史。故宫有九千多间房间，是世界上最大的宫殿建筑。过去这里是皇帝居住和处理政务的地方，普通百姓不能进入。现在故宫成了博物馆，每年接待上千万游客。里面珍藏了大量的文物和艺术品，展示了中国悠久的历史和灿烂的文化。',
            questions: [
                { question: '故宫有多少年历史？', options: ['三百多年', '四百多年', '五百多年', '六百多年'], correct: 3 },
                { question: '故宫现在是什么？', options: ['皇帝的家', '博物馆', '商场', '学校'], correct: 1 },
                { question: '故宫里珍藏了什么？', options: ['零食', '文物和艺术品', '玩具', '衣服'], correct: 1 }
            ]
        },
        {
            id: 'ar110',
            type: 'speed-challenge',
            difficulty: 3,
            timeLimit: 60,
            passage: '很多外国人说中文是世界上最难学的语言之一，主要是因为汉字和声调。汉字不像字母文字那么有规律，需要一个个记忆。中文有四个声调，同样的发音不同的声调意思完全不一样。比如"ma"的一声是"妈"，三声是"马"，四声是"骂"。虽然有难度，但是学习中文能了解一种完全不同的文化和思维方式。这也是很多外国人坚持学中文的原因。',
            questions: [
                { question: '中文为什么难学？', options: ['太简单', '汉字和声调', '语法太难', '没有词汇'], correct: 1 },
                { question: '中文有几个声调？', options: ['两个', '三个', '四个', '五个'], correct: 2 },
                { question: '人们为什么坚持学中文？', options: ['无聊', '了解不同文化和思维方式', '被逼的', '容易找工作'], correct: 1 }
            ]
        },
        {
            id: 'ar111',
            type: 'speed-challenge',
            difficulty: 2,
            timeLimit: 45,
            passage: '中国的广场舞是一种非常特别的文化现象。每到晚上，在城市的广场或者公园里，都能看到一群群中老年人在跳舞。他们跟着音乐跳，动作整齐，很有节奏感。有人觉得广场舞很好，能让老人锻炼身体、交朋友；也有人觉得广场舞太吵，影响周围居民休息。这种争议也反映了现代城市生活中的一些问题。',
            questions: [
                { question: '谁在跳广场舞？', options: ['小孩', '年轻人', '中老年人', '所有人'], correct: 2 },
                { question: '人们对广场舞有什么看法？', options: ['都支持', '都反对', '有支持也有反对', '不关心'], correct: 2 }
            ]
        },
        {
            id: 'ar112',
            type: 'speed-challenge',
            difficulty: 2,
            timeLimit: 45,
            passage: '在中国北方，冬天有一种很特别的活动叫"冬泳"。冬泳就是在寒冷的冬天到河里或者湖里游泳。水温可能只有几度，但很多老人坚持冬泳。他们说冬泳能锻炼身体，让人不容易感冒。第一次看到有人在冰水里游泳的人都会觉得不可思议。不过医生提醒，冬泳不是每个人都适合，要先检查身体。',
            questions: [
                { question: '冬泳是什么？', options: ['冬天在室内游泳', '冬天在户外冷水游泳', '夏天游泳', '在温水里游泳'], correct: 1 },
                { question: '医生对冬泳有什么提醒？', options: ['所有人都能游', '不是每个人都适合', '一定要游', '不管身体情况'], correct: 1 }
            ]
        },
        {
            id: 'ar113',
            type: 'speed-challenge',
            difficulty: 2,
            timeLimit: 45,
            passage: '外卖在中国已经变成了一种生活方式。不管你是在家里、在办公室还是在公园，只要在手机上点几下，半小时左右热腾腾的饭菜就能送到你手上。快递小哥骑着电动车在城市里跑来跑去，风雨无阻。外卖行业给很多人提供了工作机会，但也带来了一些问题，比如塑料垃圾增多。现在有些平台开始使用环保包装了。',
            questions: [
                { question: '外卖大概多久能送到？', options: ['十分钟', '半小时', '一小时', '两小时'], correct: 1 },
                { question: '外卖带来什么问题？', options: ['太便宜', '塑料垃圾增多', '太慢', '不好吃'], correct: 1 }
            ]
        },
        {
            id: 'ar114',
            type: 'speed-challenge',
            difficulty: 1,
            timeLimit: 30,
            passage: '我有一个梦想，就是学会做一百道中国菜。现在我已经学会了二十三道，还会继续努力。我的中国朋友经常教我，有时候我做得不好，但朋友们都会鼓励我。做菜的过程虽然有点复杂，但看到别人吃得很开心，我觉得一切都值得。昨天我做的宫保鸡丁得到了大家的称赞。',
            questions: [
                { question: '他想学会多少道菜？', options: ['五十道', '一百道', '二十道', '一千道'], correct: 1 },
                { question: '他昨天做了什么菜？', options: ['麻婆豆腐', '宫保鸡丁', '西红柿炒鸡蛋', '糖醋里脊'], correct: 1 }
            ]
        },
        {
            id: 'ar115',
            type: 'speed-challenge',
            difficulty: 1,
            timeLimit: 30,
            passage: '暑假的时候，我参加了一个中文夏令营。营里有很多来自不同国家的同学。我们一起上课、做游戏、唱歌。老师教我们用中文讲笑话，非常有趣。我最喜欢晚上的活动，大家围坐在一起，用中文分享自己国家的故事。虽然我的中文还不够好，但大家都听得懂，也都在鼓励我。',
            questions: [
                { question: '他参加了一个什么活动？', options: ['运动会', '音乐会', '中文夏令营', '数学比赛'], correct: 2 },
                { question: '他最喜欢什么活动？', options: ['上课', '做游戏', '晚上分享故事', '唱歌'], correct: 2 }
            ]
        },
        {
            id: 'ar116',
            type: 'speed-challenge',
            difficulty: 1,
            timeLimit: 30,
            passage: '天上的星星真多啊！小时候，我喜欢躺在草地上数星星。一颗、两颗、三颗……总是数不完。奶奶说，每一颗星星都代表一个故事。我经常会想，那些星星上面会不会也有人在看着我呢？现在城市里的灯光太亮，已经看不到那么多星星了。真怀念小时候那片星空。',
            questions: [
                { question: '他小时候喜欢做什么？', options: ['跑步', '数星星', '画画', '唱歌'], correct: 1 },
                { question: '为什么现在看不到那么多星星？', options: ['星星变少了', '城市灯光太亮', '他眼睛不好', '天气不好'], correct: 1 }
            ]
        },
        {
            id: 'ar117',
            type: 'speed-challenge',
            difficulty: 2,
            timeLimit: 45,
            passage: '中国的农历新年——春节，不只是中国人在庆祝。在亚洲很多国家，比如韩国、越南、新加坡等，也都有庆祝农历新年的传统。每到春节，这些国家的唐人街都会张灯结彩，举办各种庆祝活动。舞龙舞狮、放烟花、发红包是共同的传统。随着华人社区在全球的扩大，春节也渐渐变成了一个国际性的节日。',
            questions: [
                { question: '哪些国家庆祝农历新年？', options: ['只有中国', '中国韩国越南新加坡等', '只有韩国', '只有新加坡'], correct: 1 },
                { question: '春节有什么共同传统？', options: ['只发红包', '舞龙舞狮放烟花发红包', '只放烟花', '只舞龙'], correct: 1 },
                { question: '春节为什么变成国际性节日？', options: ['没有原因', '华人社区全球扩大', '外国人强迫的', '中国政府推广'], correct: 1 }
            ]
        },
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

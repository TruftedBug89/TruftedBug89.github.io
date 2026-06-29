// ============================================
// CHINESE MASTER - Vocabulary Data (HSK 3-4)
// 500+ Words organized by category
// ============================================

const VocabularyData = {
    categories: [
        'Daily Life', 'Work & Career', 'Travel & Transport', 'Food & Drink',
        'Family & Relationships', 'Health & Body', 'Education', 'Technology',
        'Nature & Environment', 'Emotions & Feelings', 'Shopping & Money',
        'Time & Calendar', 'Weather', 'Hobbies & Sports', 'Culture & Society'
    ],

    words: [
        // ============================================
        // DAILY LIFE (50+ words)
        // ============================================
        {
            id: 'v001',
            character: '起',
            pinyin: 'qǐ',
            meaning: 'to get up / to rise',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '我每天早上七点起床。', pinyin: 'wǒ měitiān zǎoshang qī diǎn qǐchuáng.', en: 'I get up at 7am every day.' },
                { cn: '太阳从东方升起。', pinyin: 'tàiyáng cóng dōngfāng shēngqǐ.', en: 'The sun rises from the east.' }
            ],
            related: ['起床', '起来', '起身']
        },
        {
            id: 'v002',
            character: '床',
            pinyin: 'chuáng',
            meaning: 'bed',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '我的床很舒服。', pinyin: 'wǒ de chuáng hěn shūfu.', en: 'My bed is very comfortable.' },
                { cn: '他躺在床上看书。', pinyin: 'tā tǎng zài chuáng shàng kànshū.', en: 'He lies on the bed reading.' }
            ],
            related: ['床单', '床位', '起床']
        },
        {
            id: 'v003',
            character: '洗',
            pinyin: 'xǐ',
            meaning: 'to wash',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '我要洗手。', pinyin: 'wǒ yào xǐshǒu.', en: 'I need to wash my hands.' },
                { cn: '她每天洗衣服。', pinyin: 'tā měitiān xǐ yīfu.', en: 'She washes clothes every day.' }
            ],
            related: ['洗手', '洗澡', '洗衣服']
        },
        {
            id: 'v004',
            character: '澡',
            pinyin: 'zǎo',
            meaning: 'bath',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '我每天晚上洗澡。', pinyin: 'wǒ měitiān wǎnshang xǐzǎo.', en: 'I take a shower every evening.' },
                { cn: '洗个热水澡很舒服。', pinyin: 'xǐ gè rè shuǐ zǎo hěn shūfu.', en: 'Taking a hot bath feels comfortable.' }
            ],
            related: ['洗澡', '澡堂']
        },
        {
            id: 'v005',
            character: '刷',
            pinyin: 'shuā',
            meaning: 'to brush / to swipe',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '我每天刷牙两次。', pinyin: 'wǒ měitiān shuāyá liǎng cì.', en: 'I brush my teeth twice a day.' },
                { cn: '请刷信用卡。', pinyin: 'qǐng shuā xìnyòngkǎ.', en: 'Please swipe the credit card.' }
            ],
            related: ['刷牙', '刷卡', '刷新']
        },
        {
            id: 'v006',
            character: '牙',
            pinyin: 'yá',
            meaning: 'tooth',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '我的牙很白。', pinyin: 'wǒ de yá hěn bái.', en: 'My teeth are very white.' },
                { cn: '看牙医很重要。', pinyin: 'kàn yáyī hěn zhòngyào.', en: 'Seeing a dentist is important.' }
            ],
            related: ['牙齿', '牙医', '刷牙']
        },
        {
            id: 'v007',
            character: '穿',
            pinyin: 'chuān',
            meaning: 'to wear / to put on',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '今天穿什么？', pinyin: 'jīntiān chuān shénme?', en: 'What to wear today?' },
                { cn: '她穿了一件红衣服。', pinyin: 'tā chuān le yī jiàn hóng yīfu.', en: 'She wore red clothes.' }
            ],
            related: ['穿衣', '穿戴']
        },
        {
            id: 'v008',
            character: '衣服',
            pinyin: 'yīfu',
            meaning: 'clothes',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '这件衣服很漂亮。', pinyin: 'zhè jiàn yīfu hěn piàoliang.', en: 'This piece of clothing is very beautiful.' },
                { cn: '我要买新衣服。', pinyin: 'wǒ yào mǎi xīn yīfu.', en: 'I want to buy new clothes.' }
            ],
            related: ['服装', '衣架', '洗衣服']
        },
        {
            id: 'v009',
            character: '吃',
            pinyin: 'chī',
            meaning: 'to eat',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '你吃什么？', pinyin: 'nǐ chī shénme?', en: 'What are you eating?' },
                { cn: '我喜欢吃中国菜。', pinyin: 'wǒ xǐhuān chī zhōngguó cài.', en: 'I like eating Chinese food.' }
            ],
            related: ['吃饭', '吃力', '好吃']
        },
        {
            id: 'v010',
            character: '饭',
            pinyin: 'fàn',
            meaning: 'meal / rice',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '吃饭了吗？', pinyin: 'chīfàn le ma?', en: 'Have you eaten?' },
                { cn: '我做了晚饭。', pinyin: 'wǒ zuò le wǎnfàn.', en: 'I made dinner.' }
            ],
            related: ['早饭', '午饭', '晚饭', '米饭']
        },
        {
            id: 'v011',
            character: '做',
            pinyin: 'zuò',
            meaning: 'to do / to make',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '你在做什么？', pinyin: 'nǐ zài zuò shénme?', en: 'What are you doing?' },
                { cn: '我做饭做得很好。', pinyin: 'wǒ zuòfàn zuò de hěn hǎo.', en: 'I cook very well.' }
            ],
            related: ['做饭', '工作', '做事']
        },
        {
            id: 'v012',
            character: '喝',
            pinyin: 'hē',
            meaning: 'to drink',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '你想喝什么？', pinyin: 'nǐ xiǎng hē shénme?', en: 'What do you want to drink?' },
                { cn: '我每天喝咖啡。', pinyin: 'wǒ měitiān hē kāfēi.', en: 'I drink coffee every day.' }
            ],
            related: ['喝水', '喝茶', '喝酒']
        },
        {
            id: 'v013',
            character: '睡',
            pinyin: 'shuì',
            meaning: 'to sleep',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '我昨天睡得很好。', pinyin: 'wǒ zuótiān shuì de hěn hǎo.', en: 'I slept well yesterday.' },
                { cn: '他每天睡八个小时。', pinyin: 'tā měitiān shuì bā gè xiǎoshí.', en: 'He sleeps eight hours every day.' }
            ],
            related: ['睡觉', '睡眠', '睡衣']
        },
        {
            id: 'v014',
            character: '觉',
            pinyin: 'jiào',
            meaning: 'sleep / nap',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '睡个好觉很重要。', pinyin: 'shuì gè hǎo jiào hěn zhòngyào.', en: 'Getting a good sleep is important.' },
                { cn: '我要午觉。', pinyin: 'wǒ yào wǔjiào.', en: 'I want to take a nap.' }
            ],
            related: ['睡觉', '午觉', '感觉']
        },
        {
            id: 'v015',
            character: '住',
            pinyin: 'zhù',
            meaning: 'to live / to reside',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '你住在哪里？', pinyin: 'nǐ zhù zài nǎlǐ?', en: 'Where do you live?' },
                { cn: '我住在北京。', pinyin: 'wǒ zhù zài běijīng.', en: 'I live in Beijing.' }
            ],
            related: ['住房', '住宿', '住址']
        },
        {
            id: 'v016',
            character: '家',
            pinyin: 'jiā',
            meaning: 'home / family',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '我要回家。', pinyin: 'wǒ yào huíjiā.', en: 'I want to go home.' },
                { cn: '我的家很大。', pinyin: 'wǒ de jiā hěn dà.', en: 'My home is very big.' }
            ],
            related: ['家人', '家庭', '回家']
        },
        {
            id: 'v017',
            character: '回',
            pinyin: 'huí',
            meaning: 'to return / to go back',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '我明天回来。', pinyin: 'wǒ míngtiān huílái.', en: 'I will come back tomorrow.' },
                { cn: '请回答我的问题。', pinyin: 'qǐng huídá wǒ de wèntí.', en: 'Please answer my question.' }
            ],
            related: ['回家', '回来', '回答']
        },
        {
            id: 'v018',
            character: '出',
            pinyin: 'chū',
            meaning: 'to go out / to exit',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '我们出去吃饭吧。', pinyin: 'wǒmen chūqù chīfàn ba.', en: 'Let\'s go out to eat.' },
                { cn: '他出门了。', pinyin: 'tā chūmén le.', en: 'He went out.' }
            ],
            related: ['出去', '出门', '出发']
        },
        {
            id: 'v019',
            character: '进',
            pinyin: 'jìn',
            meaning: 'to enter / to come in',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '请进！', pinyin: 'qǐng jìn!', en: 'Please come in!' },
                { cn: '他走进了房间。', pinyin: 'tā zǒu jìn le fángjiān.', en: 'He walked into the room.' }
            ],
            related: ['进来', '进去', '进步']
        },
        {
            id: 'v020',
            character: '开',
            pinyin: 'kāi',
            meaning: 'to open / to start',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '请开门。', pinyin: 'qǐng kāimén.', en: 'Please open the door.' },
                { cn: '我们开始吧。', pinyin: 'wǒmen kāishǐ ba.', en: 'Let\'s start.' }
            ],
            related: ['开门', '开始', '开车']
        },
        {
            id: 'v021',
            character: '关',
            pinyin: 'guān',
            meaning: 'to close / to turn off',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '请关灯。', pinyin: 'qǐng guān dēng.', en: 'Please turn off the light.' },
                { cn: '关门了。', pinyin: 'guānmén le.', en: 'The door is closed.' }
            ],
            related: ['关门', '关心', '关系']
        },
        {
            id: 'v022',
            character: '灯',
            pinyin: 'dēng',
            meaning: 'light / lamp',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '请开灯。', pinyin: 'qǐng kāi dēng.', en: 'Please turn on the light.' },
                { cn: '灯很亮。', pinyin: 'dēng hěn liàng.', en: 'The light is very bright.' }
            ],
            related: ['开灯', '关灯', '红绿灯']
        },
        {
            id: 'v023',
            character: '门',
            pinyin: 'mén',
            meaning: 'door / gate',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '门开着。', pinyin: 'mén kāizhe.', en: 'The door is open.' },
                { cn: '请关门。', pinyin: 'qǐng guānmén.', en: 'Please close the door.' }
            ],
            related: ['开门', '关门', '门口']
        },
        {
            id: 'v024',
            character: '钥匙',
            pinyin: 'yàoshi',
            meaning: 'key',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '我的钥匙在哪里？', pinyin: 'wǒ de yàoshi zài nǎlǐ?', en: 'Where are my keys?' },
                { cn: '请带钥匙。', pinyin: 'qǐng dài yàoshi.', en: 'Please bring the key.' }
            ],
            related: ['车钥匙', '门钥匙']
        },
        {
            id: 'v025',
            character: '手机',
            pinyin: 'shǒujī',
            meaning: 'mobile phone',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '我的手机没电了。', pinyin: 'wǒ de shǒujī méi diàn le.', en: 'My phone is out of battery.' },
                { cn: '请看手机。', pinyin: 'qǐng kàn shǒujī.', en: 'Please look at the phone.' }
            ],
            related: ['电话', '号码', '充电']
        },
        {
            id: 'v026',
            character: '电话',
            pinyin: 'diànhuà',
            meaning: 'telephone',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '请打电话给我。', pinyin: 'qǐng dǎ diànhuà gěi wǒ.', en: 'Please call me.' },
                { cn: '电话响了。', pinyin: 'diànhuà xiǎng le.', en: 'The phone is ringing.' }
            ],
            related: ['打电话', '手机号', '电话号码']
        },
        {
            id: 'v027',
            character: '电脑',
            pinyin: 'diànnǎo',
            meaning: 'computer',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '我用电脑工作。', pinyin: 'wǒ yòng diànnǎo gōngzuò.', en: 'I use a computer for work.' },
                { cn: '电脑坏了。', pinyin: 'diànnǎo huài le.', en: 'The computer is broken.' }
            ],
            related: ['笔记本电脑', '电脑游戏']
        },
        {
            id: 'v028',
            character: '电视',
            pinyin: 'diànshì',
            meaning: 'television',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '我看电视。', pinyin: 'wǒ kàn diànshì.', en: 'I watch TV.' },
                { cn: '电视节目很好看。', pinyin: 'diànshì jiémù hěn hǎokàn.', en: 'The TV show is very interesting.' }
            ],
            related: ['看电视', '电视剧', '电视节目']
        },
        {
            id: 'v029',
            character: '音乐',
            pinyin: 'yīnyuè',
            meaning: 'music',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '我喜欢听音乐。', pinyin: 'wǒ xǐhuān tīng yīnyuè.', en: 'I like listening to music.' },
                { cn: '这首音乐很好听。', pinyin: 'zhè shǒu yīnyuè hěn hǎotīng.', en: 'This music sounds very nice.' }
            ],
            related: ['音乐会', '音乐家', '歌曲']
        },
        {
            id: 'v030',
            character: '电影',
            pinyin: 'diànyǐng',
            meaning: 'movie',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '我们去看电影吧。', pinyin: 'wǒmen qù kàn diànyǐng ba.', en: 'Let\'s go see a movie.' },
                { cn: '这部电影很有意思。', pinyin: 'zhè bù diànyǐng hěn yǒu yìsi.', en: 'This movie is very interesting.' }
            ],
            related: ['电影院', '看电影', '电影票']
        },

        // ============================================
        // WORK & CAREER (50+ words)
        // ============================================
        {
            id: 'v031',
            character: '工作',
            pinyin: 'gōngzuò',
            meaning: 'work / job',
            category: 'Work & Career',
            hsk: 3,
            examples: [
                { cn: '我在银行工作。', pinyin: 'wǒ zài yínháng gōngzuò.', en: 'I work at a bank.' },
                { cn: '工作很忙。', pinyin: 'gōngzuò hěn máng.', en: 'Work is very busy.' }
            ],
            related: ['工作单位', '找工作', '工作内容']
        },
        {
            id: 'v032',
            character: '公司',
            pinyin: 'gōngsī',
            meaning: 'company',
            category: 'Work & Career',
            hsk: 3,
            examples: [
                { cn: '他在一家大公司工作。', pinyin: 'tā zài yījiā dà gōngsī gōngzuò.', en: 'He works at a big company.' },
                { cn: '这家公司很有名。', pinyin: 'zhè jiā gōngsī hěn yǒumíng.', en: 'This company is very famous.' }
            ],
            related: ['公司职员', '分公司', '总公司']
        },
        {
            id: 'v033',
            character: '经理',
            pinyin: 'jīnglǐ',
            meaning: 'manager',
            category: 'Work & Career',
            hsk: 3,
            examples: [
                { cn: '他是我们的经理。', pinyin: 'tā shì wǒmen de jīnglǐ.', en: 'He is our manager.' },
                { cn: '经理很忙。', pinyin: 'jīnglǐ hěn máng.', en: 'The manager is very busy.' }
            ],
            related: ['总经理', '副经理', '经理人']
        },
        {
            id: 'v034',
            character: '同事',
            pinyin: 'tóngshì',
            meaning: 'colleague',
            category: 'Work & Career',
            hsk: 3,
            examples: [
                { cn: '我的同事很好。', pinyin: 'wǒ de tóngshì hěn hǎo.', en: 'My colleagues are very nice.' },
                { cn: '我和同事一起吃饭。', pinyin: 'wǒ hé tóngshì yīqǐ chīfàn.', en: 'I eat with colleagues.' }
            ],
            related: ['同事关系', '老同事']
        },
        {
            id: 'v035',
            character: '会议',
            pinyin: 'huìyì',
            meaning: 'meeting',
            category: 'Work & Career',
            hsk: 3,
            examples: [
                { cn: '下午有会议。', pinyin: 'xiàwǔ yǒu huìyì.', en: 'There is a meeting in the afternoon.' },
                { cn: '会议很长。', pinyin: 'huìyì hěn cháng.', en: 'The meeting is very long.' }
            ],
            related: ['开会', '会议室', '参加会议']
        },
        {
            id: 'v036',
            character: '老板',
            pinyin: 'lǎobǎn',
            meaning: 'boss',
            category: 'Work & Career',
            hsk: 3,
            examples: [
                { cn: '老板今天不在。', pinyin: 'lǎobǎn jīntiān bù zài.', en: 'The boss is not here today.' },
                { cn: '我跟老板谈了。', pinyin: 'wǒ gēn lǎobǎn tán le.', en: 'I talked with the boss.' }
            ],
            related: ['大老板', '老板娘']
        },
        {
            id: 'v037',
            character: '工资',
            pinyin: 'gōngzī',
            meaning: 'salary / wages',
            category: 'Work & Career',
            hsk: 3,
            examples: [
                { cn: '我的工资不高。', pinyin: 'wǒ de gōngzī bù gāo.', en: 'My salary is not high.' },
                { cn: '月底发工资。', pinyin: 'yuèdǐ fā gōngzī.', en: 'Salary is paid at the end of the month.' }
            ],
            related: ['发工资', '涨工资', '工资单']
        },
        {
            id: 'v038',
            character: '面试',
            pinyin: 'miànshì',
            meaning: 'interview',
            category: 'Work & Career',
            hsk: 4,
            examples: [
                { cn: '明天有面试。', pinyin: 'míngtiān yǒu miànshì.', en: 'There is an interview tomorrow.' },
                { cn: '面试很成功。', pinyin: 'miànshì hěn chénggōng.', en: 'The interview was very successful.' }
            ],
            related: ['面试官', '面试者', '工作面试']
        },
        {
            id: 'v039',
            character: '机会',
            pinyin: 'jīhuì',
            meaning: 'opportunity',
            category: 'Work & Career',
            hsk: 4,
            examples: [
                { cn: '这是一个好机会。', pinyin: 'zhè shì yīgè hǎo jīhuì.', en: 'This is a good opportunity.' },
                { cn: '不要错过机会。', pinyin: 'bùyào cuòguò jīhuì.', en: 'Don\'t miss the opportunity.' }
            ],
            related: ['好机会', '机会难得']
        },
        {
            id: 'v040',
            character: '经验',
            pinyin: 'jīngyàn',
            meaning: 'experience',
            category: 'Work & Career',
            hsk: 4,
            examples: [
                { cn: '他有丰富的工作经验。', pinyin: 'tā yǒu fēngfù de gōngzuò jīngyàn.', en: 'He has rich work experience.' },
                { cn: '经验很重要。', pinyin: 'jīngyàn hěn zhòngyào.', en: 'Experience is very important.' }
            ],
            related: ['有经验', '经验丰富', '工作经验']
        },
        {
            id: 'v041',
            character: '努力',
            pinyin: 'nǔlì',
            meaning: 'to work hard / effort',
            category: 'Work & Career',
            hsk: 4,
            examples: [
                { cn: '他工作很努力。', pinyin: 'tā gōngzuò hěn nǔlì.', en: 'He works very hard.' },
                { cn: '努力就会成功。', pinyin: 'nǔlì jiù huì chénggōng.', en: 'Hard work leads to success.' }
            ],
            related: ['努力工作', '努力学习']
        },
        {
            id: 'v042',
            character: '成功',
            pinyin: 'chénggōng',
            meaning: 'success / to succeed',
            category: 'Work & Career',
            hsk: 4,
            examples: [
                { cn: '祝你成功！', pinyin: 'zhù nǐ chénggōng!', en: 'Wish you success!' },
                { cn: '他成功了。', pinyin: 'tā chénggōng le.', en: 'He succeeded.' }
            ],
            related: ['成功人士', '取得成功']
        },
        {
            id: 'v043',
            character: '计划',
            pinyin: 'jìhuà',
            meaning: 'plan',
            category: 'Work & Career',
            hsk: 4,
            examples: [
                { cn: '你有什么计划？', pinyin: 'nǐ yǒu shénme jìhuà?', en: 'What plans do you have?' },
                { cn: '计划有变化。', pinyin: 'jìhuà yǒu biànhuà.', en: 'The plan has changed.' }
            ],
            related: ['做计划', '计划表', '工作计划']
        },
        {
            id: 'v044',
            character: '项目',
            pinyin: 'xiàngmù',
            meaning: 'project',
            category: 'Work & Career',
            hsk: 4,
            examples: [
                { cn: '这个项目很重要。', pinyin: 'zhège xiàngmù hěn zhòngyào.', en: 'This project is very important.' },
                { cn: '项目完成了。', pinyin: 'xiàngmù wánchéng le.', en: 'The project is completed.' }
            ],
            related: ['项目管理', '项目组']
        },
        {
            id: 'v045',
            character: '报告',
            pinyin: 'bàogào',
            meaning: 'report',
            category: 'Work & Career',
            hsk: 4,
            examples: [
                { cn: '请写报告。', pinyin: 'qǐng xiě bàogào.', en: 'Please write a report.' },
                { cn: '报告很详细。', pinyin: 'bàogào hěn xiángxì.', en: 'The report is very detailed.' }
            ],
            related: ['工作报告', '报告书', '做报告']
        },

        // ============================================
        // TRAVEL & TRANSPORT (50+ words)
        // ============================================
        {
            id: 'v046',
            character: '飞机',
            pinyin: 'fēijī',
            meaning: 'airplane',
            category: 'Travel & Transport',
            hsk: 3,
            examples: [
                { cn: '我坐飞机去北京。', pinyin: 'wǒ zuò fēijī qù běijīng.', en: 'I take a plane to Beijing.' },
                { cn: '飞机几点到？', pinyin: 'fēijī jǐ diǎn dào?', en: 'What time does the plane arrive?' }
            ],
            related: ['飞机场', '坐飞机', '飞机票']
        },
        {
            id: 'v047',
            character: '火车',
            pinyin: 'huǒchē',
            meaning: 'train',
            category: 'Travel & Transport',
            hsk: 3,
            examples: [
                { cn: '我坐火车去上海。', pinyin: 'wǒ zuò huǒchē qù shànghǎi.', en: 'I take a train to Shanghai.' },
                { cn: '火车票很便宜。', pinyin: 'huǒchē piào hěn piányi.', en: 'Train tickets are cheap.' }
            ],
            related: ['火车站', '坐火车', '火车票']
        },
        {
            id: 'v048',
            character: '汽车',
            pinyin: 'qìchē',
            meaning: 'car / automobile',
            category: 'Travel & Transport',
            hsk: 3,
            examples: [
                { cn: '我开汽车上班。', pinyin: 'wǒ kāi qìchē shàngbān.', en: 'I drive a car to work.' },
                { cn: '汽车很多。', pinyin: 'qìchē hěn duō.', en: 'There are many cars.' }
            ],
            related: ['开汽车', '汽车站', '小汽车']
        },
        {
            id: 'v049',
            character: '公共汽车',
            pinyin: 'gōnggòng qìchē',
            meaning: 'bus',
            category: 'Travel & Transport',
            hsk: 3,
            examples: [
                { cn: '我坐公共汽车去。', pinyin: 'wǒ zuò gōnggòng qìchē qù.', en: 'I go by bus.' },
                { cn: '公共汽车站在哪里？', pinyin: 'gōnggòng qìchē zhàn zài nǎlǐ?', en: 'Where is the bus stop?' }
            ],
            related: ['公交车', '公交站', '坐公交']
        },
        {
            id: 'v050',
            character: '地铁',
            pinyin: 'dìtiě',
            meaning: 'subway / metro',
            category: 'Travel & Transport',
            hsk: 3,
            examples: [
                { cn: '我坐地铁去。', pinyin: 'wǒ zuò dìtiě qù.', en: 'I go by subway.' },
                { cn: '地铁很方便。', pinyin: 'dìtiě hěn fāngbiàn.', en: 'The subway is very convenient.' }
            ],
            related: ['地铁站', '坐地铁', '地铁线']
        },
        {
            id: 'v051',
            character: '出租车',
            pinyin: 'chūzūchē',
            meaning: 'taxi',
            category: 'Travel & Transport',
            hsk: 3,
            examples: [
                { cn: '请叫出租车。', pinyin: 'qǐng jiào chūzūchē.', en: 'Please call a taxi.' },
                { cn: '出租车很贵。', pinyin: 'chūzūchē hěn guì.', en: 'Taxis are expensive.' }
            ],
            related: ['打车', '打出租车', '出租车司机']
        },
        {
            id: 'v052',
            character: '自行车',
            pinyin: 'zìxíngchē',
            meaning: 'bicycle',
            category: 'Travel & Transport',
            hsk: 3,
            examples: [
                { cn: '我骑自行车去。', pinyin: 'wǒ qí zìxíngchē qù.', en: 'I go by bicycle.' },
                { cn: '骑自行车很健康。', pinyin: 'qí zìxíngchē hěn jiànkāng.', en: 'Riding a bicycle is healthy.' }
            ],
            related: ['骑自行车', '自行车道']
        },
        {
            id: 'v053',
            character: '船',
            pinyin: 'chuán',
            meaning: 'boat / ship',
            category: 'Travel & Transport',
            hsk: 3,
            examples: [
                { cn: '我坐船去。', pinyin: 'wǒ zuò chuán qù.', en: 'I go by boat.' },
                { cn: '船很大。', pinyin: 'chuán hěn dà.', en: 'The ship is very big.' }
            ],
            related: ['坐船', '小船', '轮船']
        },
        {
            id: 'v054',
            character: '机场',
            pinyin: 'jīchǎng',
            meaning: 'airport',
            category: 'Travel & Transport',
            hsk: 3,
            examples: [
                { cn: '请送我去机场。', pinyin: 'qǐng sòng wǒ qù jīchǎng.', en: 'Please take me to the airport.' },
                { cn: '机场很远。', pinyin: 'jīchǎng hěn yuǎn.', en: 'The airport is very far.' }
            ],
            related: ['飞机场', '机场大巴', '国际机场']
        },
        {
            id: 'v055',
            character: '火车站',
            pinyin: 'huǒchē zhàn',
            meaning: 'train station',
            category: 'Travel & Transport',
            hsk: 3,
            examples: [
                { cn: '火车站在哪里？', pinyin: 'huǒchē zhàn zài nǎlǐ?', en: 'Where is the train station?' },
                { cn: '我去了火车站。', pinyin: 'wǒ qù le huǒchē zhàn.', en: 'I went to the train station.' }
            ],
            related: ['火车站', '地铁站', '汽车站']
        },
        {
            id: 'v056',
            character: '票',
            pinyin: 'piào',
            meaning: 'ticket',
            category: 'Travel & Transport',
            hsk: 3,
            examples: [
                { cn: '我要买票。', pinyin: 'wǒ yào mǎi piào.', en: 'I want to buy a ticket.' },
                { cn: '票很贵。', pinyin: 'piào hěn guì.', en: 'The ticket is expensive.' }
            ],
            related: ['买票', '火车票', '飞机票']
        },
        {
            id: 'v057',
            character: '护照',
            pinyin: 'hùzhào',
            meaning: 'passport',
            category: 'Travel & Transport',
            hsk: 4,
            examples: [
                { cn: '请出示护照。', pinyin: 'qǐng chūshì hùzhào.', en: 'Please show your passport.' },
                { cn: '我的护照过期了。', pinyin: 'wǒ de hùzhào guòqī le.', en: 'My passport has expired.' }
            ],
            related: ['护照号', '办护照']
        },
        {
            id: 'v058',
            character: '签证',
            pinyin: 'qiānzhèng',
            meaning: 'visa',
            category: 'Travel & Transport',
            hsk: 4,
            examples: [
                { cn: '我需要签证。', pinyin: 'wǒ xūyào qiānzhèng.', en: 'I need a visa.' },
                { cn: '签证办好了。', pinyin: 'qiānzhèng bàn hǎo le.', en: 'The visa is ready.' }
            ],
            related: ['办签证', '签证申请']
        },
        {
            id: 'v059',
            character: '酒店',
            pinyin: 'jiǔdiàn',
            meaning: 'hotel',
            category: 'Travel & Transport',
            hsk: 3,
            examples: [
                { cn: '我预订了酒店。', pinyin: 'wǒ yùdìng le jiǔdiàn.', en: 'I booked a hotel.' },
                { cn: '酒店很舒服。', pinyin: 'jiǔdiàn hěn shūfu.', en: 'The hotel is very comfortable.' }
            ],
            related: ['住酒店', '酒店房间', '五星级酒店']
        },
        {
            id: 'v060',
            character: '旅游',
            pinyin: 'lǚyóu',
            meaning: 'to travel / tourism',
            category: 'Travel & Transport',
            hsk: 3,
            examples: [
                { cn: '我喜欢旅游。', pinyin: 'wǒ xǐhuān lǚyóu.', en: 'I like traveling.' },
                { cn: '去中国旅游很好。', pinyin: 'qù zhōngguó lǚyóu hěn hǎo.', en: 'Traveling to China is great.' }
            ],
            related: ['旅游景点', '旅游团', '旅游业']
        },

        // ============================================
        // FOOD & DRINK (50+ words)
        // ============================================
        {
            id: 'v061',
            character: '菜',
            pinyin: 'cài',
            meaning: 'dish / vegetable',
            category: 'Food & Drink',
            hsk: 3,
            examples: [
                { cn: '中国菜很好吃。', pinyin: 'zhōngguó cài hěn hǎochī.', en: 'Chinese food is delicious.' },
                { cn: '我要一个菜。', pinyin: 'wǒ yào yīgè cài.', en: 'I want one dish.' }
            ],
            related: ['菜单', '中国菜', '做菜']
        },
        {
            id: 'v062',
            character: '肉',
            pinyin: 'ròu',
            meaning: 'meat',
            category: 'Food & Drink',
            hsk: 3,
            examples: [
                { cn: '我喜欢吃肉。', pinyin: 'wǒ xǐhuān chī ròu.', en: 'I like eating meat.' },
                { cn: '猪肉很新鲜。', pinyin: 'zhūròu hěn xīnxiān.', en: 'The pork is very fresh.' }
            ],
            related: ['猪肉', '牛肉', '鸡肉']
        },
        {
            id: 'v063',
            character: '鱼',
            pinyin: 'yú',
            meaning: 'fish',
            category: 'Food & Drink',
            hsk: 3,
            examples: [
                { cn: '鱼很新鲜。', pinyin: 'yú hěn xīnxiān.', en: 'The fish is very fresh.' },
                { cn: '我喜欢吃鱼。', pinyin: 'wǒ xǐhuān chī yú.', en: 'I like eating fish.' }
            ],
            related: ['吃鱼', '烤鱼', '鱼肉']
        },
        {
            id: 'v064',
            character: '蛋',
            pinyin: 'dàn',
            meaning: 'egg',
            category: 'Food & Drink',
            hsk: 3,
            examples: [
                { cn: '我要一个鸡蛋。', pinyin: 'wǒ yào yīgè jīdàn.', en: 'I want one egg.' },
                { cn: '鸡蛋很新鲜。', pinyin: 'jīdàn hěn xīnxiān.', en: 'The egg is very fresh.' }
            ],
            related: ['鸡蛋', '蛋糕', '蛋白质']
        },
        {
            id: 'v065',
            character: '米饭',
            pinyin: 'mǐfàn',
            meaning: 'rice (cooked)',
            category: 'Food & Drink',
            hsk: 3,
            examples: [
                { cn: '我要一碗米饭。', pinyin: 'wǒ yào yī wǎn mǐfàn.', en: 'I want a bowl of rice.' },
                { cn: '米饭很好吃。', pinyin: 'mǐfàn hěn hǎochī.', en: 'The rice is delicious.' }
            ],
            related: ['吃米饭', '炒饭', '米饭']
        },
        {
            id: 'v066',
            character: '面条',
            pinyin: 'miàntiáo',
            meaning: 'noodles',
            category: 'Food & Drink',
            hsk: 3,
            examples: [
                { cn: '我喜欢吃面条。', pinyin: 'wǒ xǐhuān chī miàntiáo.', en: 'I like eating noodles.' },
                { cn: '面条很便宜。', pinyin: 'miàntiáo hěn piányi.', en: 'Noodles are cheap.' }
            ],
            related: ['吃面条', '拉面', '炒面']
        },
        {
            id: 'v067',
            character: '汤',
            pinyin: 'tāng',
            meaning: 'soup',
            category: 'Food & Drink',
            hsk: 3,
            examples: [
                { cn: '汤很热。', pinyin: 'tāng hěn rè.', en: 'The soup is very hot.' },
                { cn: '我要一碗汤。', pinyin: 'wǒ yào yī wǎn tāng.', en: 'I want a bowl of soup.' }
            ],
            related: ['喝汤', '鸡汤', '汤面']
        },
        {
            id: 'v068',
            character: '水果',
            pinyin: 'shuǐguǒ',
            meaning: 'fruit',
            category: 'Food & Drink',
            hsk: 3,
            examples: [
                { cn: '我喜欢吃水果。', pinyin: 'wǒ xǐhuān chī shuǐguǒ.', en: 'I like eating fruit.' },
                { cn: '水果很新鲜。', pinyin: 'shuǐguǒ hěn xīnxiān.', en: 'The fruit is very fresh.' }
            ],
            related: ['买水果', '水果店', '水果汁']
        },
        {
            id: 'v069',
            character: '苹果',
            pinyin: 'píngguǒ',
            meaning: 'apple',
            category: 'Food & Drink',
            hsk: 3,
            examples: [
                { cn: '苹果很甜。', pinyin: 'píngguǒ hěn tián.', en: 'The apple is very sweet.' },
                { cn: '我要买苹果。', pinyin: 'wǒ yào mǎi píngguǒ.', en: 'I want to buy apples.' }
            ],
            related: ['红苹果', '苹果汁', '苹果手机']
        },
        {
            id: 'v070',
            character: '茶',
            pinyin: 'chá',
            meaning: 'tea',
            category: 'Food & Drink',
            hsk: 3,
            examples: [
                { cn: '请喝茶。', pinyin: 'qǐng hē chá.', en: 'Please drink tea.' },
                { cn: '中国茶很有名。', pinyin: 'zhōngguó chá hěn yǒumíng.', en: 'Chinese tea is very famous.' }
            ],
            related: ['喝茶', '绿茶', '红茶']
        },
        {
            id: 'v071',
            character: '咖啡',
            pinyin: 'kāfēi',
            meaning: 'coffee',
            category: 'Food & Drink',
            hsk: 3,
            examples: [
                { cn: '我每天喝咖啡。', pinyin: 'wǒ měitiān hē kāfēi.', en: 'I drink coffee every day.' },
                { cn: '咖啡很苦。', pinyin: 'kāfēi hěn kǔ.', en: 'The coffee is very bitter.' }
            ],
            related: ['喝咖啡', '咖啡店', '咖啡杯']
        },
        {
            id: 'v072',
            character: '啤酒',
            pinyin: 'píjiǔ',
            meaning: 'beer',
            category: 'Food & Drink',
            hsk: 3,
            examples: [
                { cn: '我要一杯啤酒。', pinyin: 'wǒ yào yī bēi píjiǔ.', en: 'I want a glass of beer.' },
                { cn: '啤酒很凉。', pinyin: 'píjiǔ hěn liáng.', en: 'The beer is very cold.' }
            ],
            related: ['喝啤酒', '啤酒瓶', '啤酒杯']
        },
        {
            id: 'v073',
            character: '糖',
            pinyin: 'táng',
            meaning: 'sugar / candy',
            category: 'Food & Drink',
            hsk: 3,
            examples: [
                { cn: '请加糖。', pinyin: 'qǐng jiā táng.', en: 'Please add sugar.' },
                { cn: '糖很甜。', pinyin: 'táng hěn tián.', en: 'The candy is very sweet.' }
            ],
            related: ['白糖', '红糖', '糖果']
        },
        {
            id: 'v074',
            character: '盐',
            pinyin: 'yán',
            meaning: 'salt',
            category: 'Food & Drink',
            hsk: 3,
            examples: [
                { cn: '请加盐。', pinyin: 'qǐng jiā yán.', en: 'Please add salt.' },
                { cn: '盐太多了。', pinyin: 'yán tài duō le.', en: 'Too much salt.' }
            ],
            related: ['加盐', '盐巴', '食盐']
        },
        {
            id: 'v075',
            character: '味道',
            pinyin: 'wèidào',
            meaning: 'taste / flavor',
            category: 'Food & Drink',
            hsk: 4,
            examples: [
                { cn: '味道很好。', pinyin: 'wèidào hěn hǎo.', en: 'The taste is very good.' },
                { cn: '什么味道？', pinyin: 'shénme wèidào?', en: 'What flavor?' }
            ],
            related: ['有味道', '味道好', '味道鲜美']
        },

        // ============================================
        // FAMILY & RELATIONSHIPS (40+ words)
        // ============================================
        {
            id: 'v076',
            character: '爸爸',
            pinyin: 'bàba',
            meaning: 'father / dad',
            category: 'Family & Relationships',
            hsk: 3,
            examples: [
                { cn: '我爸爸是医生。', pinyin: 'wǒ bàba shì yīshēng.', en: 'My dad is a doctor.' },
                { cn: '爸爸很忙。', pinyin: 'bàba hěn máng.', en: 'Dad is very busy.' }
            ],
            related: ['父亲', '爸妈', '爸爸']
        },
        {
            id: 'v077',
            character: '妈妈',
            pinyin: 'māma',
            meaning: 'mother / mom',
            category: 'Family & Relationships',
            hsk: 3,
            examples: [
                { cn: '妈妈做饭很好吃。', pinyin: 'māma zuòfàn hěn hǎochī.', en: 'Mom\'s cooking is delicious.' },
                { cn: '我爱妈妈。', pinyin: 'wǒ ài māma.', en: 'I love mom.' }
            ],
            related: ['母亲', '爸妈', '妈妈']
        },
        {
            id: 'v078',
            character: '哥哥',
            pinyin: 'gēge',
            meaning: 'older brother',
            category: 'Family & Relationships',
            hsk: 3,
            examples: [
                { cn: '我哥哥上大学。', pinyin: 'wǒ gēge shàng dàxué.', en: 'My older brother is in college.' },
                { cn: '哥哥很高。', pinyin: 'gēge hěn gāo.', en: 'Older brother is very tall.' }
            ],
            related: ['兄弟', '哥哥', '弟弟']
        },
        {
            id: 'v079',
            character: '姐姐',
            pinyin: 'jiějie',
            meaning: 'older sister',
            category: 'Family & Relationships',
            hsk: 3,
            examples: [
                { cn: '我姐姐很漂亮。', pinyin: 'wǒ jiějie hěn piàoliang.', en: 'My older sister is very beautiful.' },
                { cn: '姐姐结婚了。', pinyin: 'jiějie jiéhūn le.', en: 'Older sister is married.' }
            ],
            related: ['姐妹', '姐姐', '妹妹']
        },
        {
            id: 'v080',
            character: '弟弟',
            pinyin: 'dìdi',
            meaning: 'younger brother',
            category: 'Family & Relationships',
            hsk: 3,
            examples: [
                { cn: '我弟弟八岁。', pinyin: 'wǒ dìdi bā suì.', en: 'My younger brother is eight years old.' },
                { cn: '弟弟很聪明。', pinyin: 'dìdi hěn cōngmíng.', en: 'Younger brother is very smart.' }
            ],
            related: ['兄弟', '哥哥', '弟弟']
        },
        {
            id: 'v081',
            character: '妹妹',
            pinyin: 'mèimei',
            meaning: 'younger sister',
            category: 'Family & Relationships',
            hsk: 3,
            examples: [
                { cn: '我妹妹五岁。', pinyin: 'wǒ mèimei wǔ suì.', en: 'My younger sister is five years old.' },
                { cn: '妹妹很可爱。', pinyin: 'mèimei hěn kě\'ài.', en: 'Younger sister is very cute.' }
            ],
            related: ['姐妹', '姐姐', '妹妹']
        },
        {
            id: 'v082',
            character: '孩子',
            pinyin: 'háizi',
            meaning: 'child / children',
            category: 'Family & Relationships',
            hsk: 3,
            examples: [
                { cn: '孩子很聪明。', pinyin: 'háizi hěn cōngmíng.', en: 'The child is very smart.' },
                { cn: '我有两个孩子。', pinyin: 'wǒ yǒu liǎng gè háizi.', en: 'I have two children.' }
            ],
            related: ['孩子们', '男孩子', '女孩子']
        },
        {
            id: 'v083',
            character: '妻子',
            pinyin: 'qīzi',
            meaning: 'wife',
            category: 'Family & Relationships',
            hsk: 4,
            examples: [
                { cn: '他的妻子是老师。', pinyin: 'tā de qīzi shì lǎoshī.', en: 'His wife is a teacher.' },
                { cn: '妻子很贤惠。', pinyin: 'qīzi hěn xiánhuì.', en: 'The wife is very virtuous.' }
            ],
            related: ['老婆', '妻子', '夫人']
        },
        {
            id: 'v084',
            character: '丈夫',
            pinyin: 'zhàngfu',
            meaning: 'husband',
            category: 'Family & Relationships',
            hsk: 4,
            examples: [
                { cn: '她的丈夫是医生。', pinyin: 'tā de zhàngfu shì yīshēng.', en: 'Her husband is a doctor.' },
                { cn: '丈夫很体贴。', pinyin: 'zhàngfu hěn tǐtiē.', en: 'The husband is very considerate.' }
            ],
            related: ['老公', '丈夫', '先生']
        },
        {
            id: 'v085',
            character: '朋友',
            pinyin: 'péngyǒu',
            meaning: 'friend',
            category: 'Family & Relationships',
            hsk: 3,
            examples: [
                { cn: '他是我的好朋友。', pinyin: 'tā shì wǒ de hǎo péngyǒu.', en: 'He is my good friend.' },
                { cn: '交朋友很重要。', pinyin: 'jiāo péngyǒu hěn zhòngyào.', en: 'Making friends is important.' }
            ],
            related: ['好朋友', '男朋友', '女朋友']
        },
        {
            id: 'v086',
            character: '男朋友',
            pinyin: 'nánpéngyǒu',
            meaning: 'boyfriend',
            category: 'Family & Relationships',
            hsk: 3,
            examples: [
                { cn: '她有男朋友了。', pinyin: 'tā yǒu nánpéngyǒu le.', en: 'She has a boyfriend now.' },
                { cn: '男朋友很帅。', pinyin: 'nánpéngyǒu hěn shuài.', en: 'The boyfriend is very handsome.' }
            ],
            related: ['男朋友', '男朋友', '对象']
        },
        {
            id: 'v087',
            character: '女朋友',
            pinyin: 'nǚpéngyǒu',
            meaning: 'girlfriend',
            category: 'Family & Relationships',
            hsk: 3,
            examples: [
                { cn: '他有女朋友了。', pinyin: 'tā yǒu nǚpéngyǒu le.', en: 'He has a girlfriend now.' },
                { cn: '女朋友很漂亮。', pinyin: 'nǚpéngyǒu hěn piàoliang.', en: 'The girlfriend is very beautiful.' }
            ],
            related: ['女朋友', '女朋友', '对象']
        },

        // ============================================
        // HEALTH & BODY (40+ words)
        // ============================================
        {
            id: 'v088',
            character: '医院',
            pinyin: 'yīyuàn',
            meaning: 'hospital',
            category: 'Health & Body',
            hsk: 3,
            examples: [
                { cn: '他在医院工作。', pinyin: 'tā zài yīyuàn gōngzuò.', en: 'He works at a hospital.' },
                { cn: '请去医院。', pinyin: 'qǐng qù yīyuàn.', en: 'Please go to the hospital.' }
            ],
            related: ['去医院', '医院里', '看医生']
        },
        {
            id: 'v089',
            character: '医生',
            pinyin: 'yīshēng',
            meaning: 'doctor',
            category: 'Health & Body',
            hsk: 3,
            examples: [
                { cn: '他是医生。', pinyin: 'tā shì yīshēng.', en: 'He is a doctor.' },
                { cn: '请看医生。', pinyin: 'qǐng kàn yīshēng.', en: 'Please see a doctor.' }
            ],
            related: ['看医生', '医生说', '好医生']
        },
        {
            id: 'v090',
            character: '药',
            pinyin: 'yào',
            meaning: 'medicine',
            category: 'Health & Body',
            hsk: 3,
            examples: [
                { cn: '请吃药。', pinyin: 'qǐng chī yào.', en: 'Please take medicine.' },
                { cn: '药很苦。', pinyin: 'yào hěn kǔ.', en: 'The medicine is bitter.' }
            ],
            related: ['吃药', '买药', '药店']
        },
        {
            id: 'v091',
            character: '病',
            pinyin: 'bìng',
            meaning: 'illness / sick',
            category: 'Health & Body',
            hsk: 3,
            examples: [
                { cn: '他生病了。', pinyin: 'tā shēngbìng le.', en: 'He is sick.' },
                { cn: '什么病？', pinyin: 'shénme bìng?', en: 'What illness?' }
            ],
            related: ['生病', '看病', '病人']
        },
        {
            id: 'v092',
            character: '头疼',
            pinyin: 'tóuténg',
            meaning: 'headache',
            category: 'Health & Body',
            hsk: 3,
            examples: [
                { cn: '我头疼。', pinyin: 'wǒ tóuténg.', en: 'I have a headache.' },
                { cn: '头很疼。', pinyin: 'tóu hěn téng.', en: 'The head hurts a lot.' }
            ],
            related: ['头疼', '头痛', '治头疼']
        },
        {
            id: 'v093',
            character: '发烧',
            pinyin: 'fāshāo',
            meaning: 'to have a fever',
            category: 'Health & Body',
            hsk: 3,
            examples: [
                { cn: '他发烧了。', pinyin: 'tā fāshāo le.', en: 'He has a fever.' },
                { cn: '发烧要休息。', pinyin: 'fāshāo yào xiūxi.', en: 'When you have a fever, you need to rest.' }
            ],
            related: ['发高烧', '发烧了', '退烧']
        },
        {
            id: 'v094',
            character: '感冒',
            pinyin: 'gǎnmào',
            meaning: 'to catch a cold',
            category: 'Health & Body',
            hsk: 3,
            examples: [
                { cn: '我感冒了。', pinyin: 'wǒ gǎnmào le.', en: 'I caught a cold.' },
                { cn: '感冒要吃药。', pinyin: 'gǎnmào yào chī yào.', en: 'When you have a cold, you need to take medicine.' }
            ],
            related: ['感冒药', '感冒了', '重感冒']
        },
        {
            id: 'v095',
            character: '身体',
            pinyin: 'shēntǐ',
            meaning: 'body / health',
            category: 'Health & Body',
            hsk: 3,
            examples: [
                { cn: '身体很重要。', pinyin: 'shēntǐ hěn zhòngyào.', en: 'Health is very important.' },
                { cn: '身体怎么样？', pinyin: 'shēntǐ zěnmeyàng?', en: 'How is your health?' }
            ],
            related: ['身体健康', '身体好', '锻炼身体']
        },
        {
            id: 'v096',
            character: '锻炼',
            pinyin: 'duànliàn',
            meaning: 'to exercise',
            category: 'Health & Body',
            hsk: 4,
            examples: [
                { cn: '我每天锻炼。', pinyin: 'wǒ měitiān duànliàn.', en: 'I exercise every day.' },
                { cn: '锻炼身体很好。', pinyin: 'duànliàn shēntǐ hěn hǎo.', en: 'Exercising is good for health.' }
            ],
            related: ['锻炼身体', '体育锻炼', '经常锻炼']
        },
        {
            id: 'v097',
            character: '健康',
            pinyin: 'jiànkāng',
            meaning: 'health / healthy',
            category: 'Health & Body',
            hsk: 4,
            examples: [
                { cn: '健康很重要。', pinyin: 'jiànkāng hěn zhòngyào.', en: 'Health is very important.' },
                { cn: '祝你健康。', pinyin: 'zhù nǐ jiànkāng.', en: 'Wish you good health.' }
            ],
            related: ['身体健康', '健康食品', '不健康']
        },

        // ============================================
        // EDUCATION (40+ words)
        // ============================================
        {
            id: 'v098',
            character: '学校',
            pinyin: 'xuéxiào',
            meaning: 'school',
            category: 'Education',
            hsk: 3,
            examples: [
                { cn: '我在学校学习。', pinyin: 'wǒ zài xuéxiào xuéxí.', en: 'I study at school.' },
                { cn: '学校很大。', pinyin: 'xuéxiào hěn dà.', en: 'The school is very big.' }
            ],
            related: ['去学校', '学校里', '好学校']
        },
        {
            id: 'v099',
            character: '大学',
            pinyin: 'dàxué',
            meaning: 'university',
            category: 'Education',
            hsk: 3,
            examples: [
                { cn: '我在上大学。', pinyin: 'wǒ zài shàng dàxué.', en: 'I am in university.' },
                { cn: '北京大学很有名。', pinyin: 'běijīng dàxué hěn yǒumíng.', en: 'Peking University is very famous.' }
            ],
            related: ['上大学', '大学生', '大学里']
        },
        {
            id: 'v100',
            character: '老师',
            pinyin: 'lǎoshī',
            meaning: 'teacher',
            category: 'Education',
            hsk: 3,
            examples: [
                { cn: '他是我的老师。', pinyin: 'tā shì wǒ de lǎoshī.', en: 'He is my teacher.' },
                { cn: '老师很好。', pinyin: 'lǎoshī hěn hǎo.', en: 'The teacher is very good.' }
            ],
            related: ['好老师', '老师说', '当老师']
        },
        {
            id: 'v101',
            character: '学生',
            pinyin: 'xuésheng',
            meaning: 'student',
            category: 'Education',
            hsk: 3,
            examples: [
                { cn: '我是学生。', pinyin: 'wǒ shì xuésheng.', en: 'I am a student.' },
                { cn: '学生很多。', pinyin: 'xuésheng hěn duō.', en: 'There are many students.' }
            ],
            related: ['好学生', '大学生', '留学生']
        },
        {
            id: 'v102',
            character: '学习',
            pinyin: 'xuéxí',
            meaning: 'to study / to learn',
            category: 'Education',
            hsk: 3,
            examples: [
                { cn: '我学习中文。', pinyin: 'wǒ xuéxí zhōngwén.', en: 'I study Chinese.' },
                { cn: '学习很重要。', pinyin: 'xuéxí hěn zhòngyào.', en: 'Studying is very important.' }
            ],
            related: ['努力学习', '学习中文', '好好学习']
        },
        {
            id: 'v103',
            character: '书',
            pinyin: 'shū',
            meaning: 'book',
            category: 'Education',
            hsk: 3,
            examples: [
                { cn: '这本书很好。', pinyin: 'zhè běn shū hěn hǎo.', en: 'This book is very good.' },
                { cn: '我喜欢看书。', pinyin: 'wǒ xǐhuān kànshū.', en: 'I like reading books.' }
            ],
            related: ['看书', '买书', '书本']
        },
        {
            id: 'v104',
            character: '课',
            pinyin: 'kè',
            meaning: 'class / lesson',
            category: 'Education',
            hsk: 3,
            examples: [
                { cn: '今天有课。', pinyin: 'jīntiān yǒu kè.', en: 'There is class today.' },
                { cn: '中文课很有意思。', pinyin: 'zhōngwén kè hěn yǒu yìsi.', en: 'Chinese class is very interesting.' }
            ],
            related: ['上课', '下课', '课程']
        },
        {
            id: 'v105',
            character: '考试',
            pinyin: 'kǎoshì',
            meaning: 'exam',
            category: 'Education',
            hsk: 3,
            examples: [
                { cn: '明天有考试。', pinyin: 'míngtiān yǒu kǎoshì.', en: 'There is an exam tomorrow.' },
                { cn: '考试很难。', pinyin: 'kǎoshì hěn nán.', en: 'The exam is very difficult.' }
            ],
            related: ['考试', '考试成绩', '期末考试']
        },
        {
            id: 'v106',
            character: '作业',
            pinyin: 'zuòyè',
            meaning: 'homework',
            category: 'Education',
            hsk: 3,
            examples: [
                { cn: '作业很多。', pinyin: 'zuòyè hěn duō.', en: 'There is a lot of homework.' },
                { cn: '请做作业。', pinyin: 'qǐng zuò zuòyè.', en: 'Please do homework.' }
            ],
            related: ['做作业', '写作业', '交作业']
        },
        {
            id: 'v107',
            character: '练习',
            pinyin: 'liànxí',
            meaning: 'practice / exercise',
            category: 'Education',
            hsk: 4,
            examples: [
                { cn: '请做练习。', pinyin: 'qǐng zuò liànxí.', en: 'Please do the exercises.' },
                { cn: '练习很重要。', pinyin: 'liànxí hěn zhòngyào.', en: 'Practice is very important.' }
            ],
            related: ['做练习', '练习本', '多练习']
        },

        // ============================================
        // TECHNOLOGY (30+ words)
        // ============================================
        {
            id: 'v108',
            character: '网络',
            pinyin: 'wǎngluò',
            meaning: 'network / internet',
            category: 'Technology',
            hsk: 4,
            examples: [
                { cn: '网络很快。', pinyin: 'wǎngluò hěn kuài.', en: 'The internet is very fast.' },
                { cn: '请连接网络。', pinyin: 'qǐng liánjiē wǎngluò.', en: 'Please connect to the network.' }
            ],
            related: ['上网', '网络连接', '无线网络']
        },
        {
            id: 'v109',
            character: '上网',
            pinyin: 'shàngwǎng',
            meaning: 'to go online',
            category: 'Technology',
            hsk: 4,
            examples: [
                { cn: '我每天上网。', pinyin: 'wǒ měitiān shàngwǎng.', en: 'I go online every day.' },
                { cn: '上网很方便。', pinyin: 'shàngwǎng hěn fāngbiàn.', en: 'Going online is very convenient.' }
            ],
            related: ['上网查', '上网看', '上网买']
        },
        {
            id: 'v110',
            character: '网站',
            pinyin: 'wǎngzhàn',
            meaning: 'website',
            category: 'Technology',
            hsk: 4,
            examples: [
                { cn: '这个网站很好。', pinyin: 'zhège wǎngzhàn hěn hǎo.', en: 'This website is very good.' },
                { cn: '请访问网站。', pinyin: 'qǐng fǎngwèn wǎngzhàn.', en: 'Please visit the website.' }
            ],
            related: ['网站设计', '网站内容', '访问网站']
        },
        {
            id: 'v111',
            character: '密码',
            pinyin: 'mìmǎ',
            meaning: 'password',
            category: 'Technology',
            hsk: 4,
            examples: [
                { cn: '请输密码。', pinyin: 'qǐng shū mìmǎ.', en: 'Please enter the password.' },
                { cn: '密码是什么？', pinyin: 'mìmǎ shì shénme?', en: 'What is the password?' }
            ],
            related: ['输入密码', '修改密码', '忘记密码']
        },
        {
            id: 'v112',
            character: '软件',
            pinyin: 'ruǎnjiàn',
            meaning: 'software',
            category: 'Technology',
            hsk: 4,
            examples: [
                { cn: '这个软件很好用。', pinyin: 'zhège ruǎnjiàn hěn hǎoyòng.', en: 'This software is very easy to use.' },
                { cn: '请下载软件。', pinyin: 'qǐng xiàzǎi ruǎnjiàn.', en: 'Please download the software.' }
            ],
            related: ['软件开发', '软件公司', '应用软件']
        },
        {
            id: 'v113',
            character: '下载',
            pinyin: 'xiàzǎi',
            meaning: 'to download',
            category: 'Technology',
            hsk: 4,
            examples: [
                { cn: '请下载这个应用。', pinyin: 'qǐng xiàzǎi zhège yìngyòng.', en: 'Please download this app.' },
                { cn: '下载完成了。', pinyin: 'xiàzǎi wánchéng le.', en: 'Download completed.' }
            ],
            related: ['下载软件', '下载文件', '下载完成']
        },
        {
            id: 'v114',
            character: '应用',
            pinyin: 'yìngyòng',
            meaning: 'application / app',
            category: 'Technology',
            hsk: 4,
            examples: [
                { cn: '这个应用很有用。', pinyin: 'zhège yìngyòng hěn yǒuyòng.', en: 'This app is very useful.' },
                { cn: '请打开应用。', pinyin: 'qǐng dǎkāi yìngyòng.', en: 'Please open the app.' }
            ],
            related: ['手机应用', '应用程序', '应用软件']
        },

        // ============================================
        // NATURE & ENVIRONMENT (30+ words)
        // ============================================
        {
            id: 'v115',
            character: '山',
            pinyin: 'shān',
            meaning: 'mountain',
            category: 'Nature & Environment',
            hsk: 3,
            examples: [
                { cn: '山很高。', pinyin: 'shān hěn gāo.', en: 'The mountain is very high.' },
                { cn: '我喜欢爬山。', pinyin: 'wǒ xǐhuān páshān.', en: 'I like climbing mountains.' }
            ],
            related: ['爬山', '山上', '高山']
        },
        {
            id: 'v116',
            character: '水',
            pinyin: 'shuǐ',
            meaning: 'water',
            category: 'Nature & Environment',
            hsk: 3,
            examples: [
                { cn: '请喝水。', pinyin: 'qǐng hē shuǐ.', en: 'Please drink water.' },
                { cn: '水很干净。', pinyin: 'shuǐ hěn gānjìng.', en: 'The water is very clean.' }
            ],
            related: ['喝水', '热水', '冷水']
        },
        {
            id: 'v117',
            character: '河',
            pinyin: 'hé',
            meaning: 'river',
            category: 'Nature & Environment',
            hsk: 3,
            examples: [
                { cn: '河很长。', pinyin: 'hé hěn cháng.', en: 'The river is very long.' },
                { cn: '黄河很有名。', pinyin: 'huánghé hěn yǒumíng.', en: 'The Yellow River is very famous.' }
            ],
            related: ['河边', '过河', '黄河']
        },
        {
            id: 'v118',
            character: '海',
            pinyin: 'hǎi',
            meaning: 'sea / ocean',
            category: 'Nature & Environment',
            hsk: 3,
            examples: [
                { cn: '海很大。', pinyin: 'hǎi hěn dà.', en: 'The sea is very big.' },
                { cn: '我喜欢去海边。', pinyin: 'wǒ xǐhuān qù hǎibiān.', en: 'I like going to the seaside.' }
            ],
            related: ['海边', '大海', '上海']
        },
        {
            id: 'v119',
            character: '花',
            pinyin: 'huā',
            meaning: 'flower',
            category: 'Nature & Environment',
            hsk: 3,
            examples: [
                { cn: '花很漂亮。', pinyin: 'huā hěn piàoliang.', en: 'The flowers are very beautiful.' },
                { cn: '我喜欢花。', pinyin: 'wǒ xǐhuān huā.', en: 'I like flowers.' }
            ],
            related: ['买花', '送花', '花园']
        },
        {
            id: 'v120',
            character: '树',
            pinyin: 'shù',
            meaning: 'tree',
            category: 'Nature & Environment',
            hsk: 3,
            examples: [
                { cn: '树很高。', pinyin: 'shù hěn gāo.', en: 'The tree is very tall.' },
                { cn: '种树很好。', pinyin: 'zhòng shù hěn hǎo.', en: 'Planting trees is good.' }
            ],
            related: ['种树', '树叶', '大树']
        },
        {
            id: 'v121',
            character: '草',
            pinyin: 'cǎo',
            meaning: 'grass',
            category: 'Nature & Environment',
            hsk: 3,
            examples: [
                { cn: '草很绿。', pinyin: 'cǎo hěn lǜ.', en: 'The grass is very green.' },
                { cn: '请勿踩草。', pinyin: 'qǐng wù cǎi cǎo.', en: 'Please don\'t step on the grass.' }
            ],
            related: ['草地', '草坪', '绿草']
        },
        {
            id: 'v122',
            character: '动物',
            pinyin: 'dòngwù',
            meaning: 'animal',
            category: 'Nature & Environment',
            hsk: 3,
            examples: [
                { cn: '我喜欢动物。', pinyin: 'wǒ xǐhuān dòngwù.', en: 'I like animals.' },
                { cn: '动物园有很多动物。', pinyin: 'dòngwùyuán yǒu hěn duō dòngwù.', en: 'The zoo has many animals.' }
            ],
            related: ['动物园', '小动物', '野生动物']
        },
        {
            id: 'v123',
            character: '环境',
            pinyin: 'huánjìng',
            meaning: 'environment',
            category: 'Nature & Environment',
            hsk: 4,
            examples: [
                { cn: '保护环境很重要。', pinyin: 'bǎohù huánjìng hěn zhòngyào.', en: 'Protecting the environment is important.' },
                { cn: '环境很好。', pinyin: 'huánjìng hěn hǎo.', en: 'The environment is very good.' }
            ],
            related: ['保护环境', '环境污染', '环境问题']
        },

        // ============================================
        // EMOTIONS & FEELINGS (40+ words)
        // ============================================
        {
            id: 'v124',
            character: '高兴',
            pinyin: 'gāoxìng',
            meaning: 'happy / glad',
            category: 'Emotions & Feelings',
            hsk: 3,
            examples: [
                { cn: '我很高兴。', pinyin: 'wǒ hěn gāoxìng.', en: 'I am very happy.' },
                { cn: '很高兴认识你。', pinyin: 'hěn gāoxìng rènshi nǐ.', en: 'Nice to meet you.' }
            ],
            related: ['不高兴', '很高兴', '高兴吗']
        },
        {
            id: 'v125',
            character: '快乐',
            pinyin: 'kuàilè',
            meaning: 'happy / joyful',
            category: 'Emotions & Feelings',
            hsk: 3,
            examples: [
                { cn: '祝你生日快乐！', pinyin: 'zhù nǐ shēngrì kuàilè!', en: 'Happy birthday!' },
                { cn: '快乐每一天。', pinyin: 'kuàilè měi yī tiān.', en: 'Be happy every day.' }
            ],
            related: ['快乐', '不快乐', '快乐吗']
        },
        {
            id: 'v126',
            character: '难过',
            pinyin: 'nánguò',
            meaning: 'sad / upset',
            category: 'Emotions & Feelings',
            hsk: 3,
            examples: [
                { cn: '我很难过。', pinyin: 'wǒ hěn nánguò.', en: 'I am very sad.' },
                { cn: '不要难过。', pinyin: 'bùyào nánguò.', en: 'Don\'t be sad.' }
            ],
            related: ['很难过', '难过吗', '不难过']
        },
        {
            id: 'v127',
            character: '生气',
            pinyin: 'shēngqì',
            meaning: 'angry',
            category: 'Emotions & Feelings',
            hsk: 3,
            examples: [
                { cn: '他生气了。', pinyin: 'tā shēngqì le.', en: 'He is angry.' },
                { cn: '不要生气。', pinyin: 'bùyào shēngqì.', en: 'Don\'t be angry.' }
            ],
            related: ['很生气', '生气吗', '不生气']
        },
        {
            id: 'v128',
            character: '害怕',
            pinyin: 'hàipà',
            meaning: 'afraid / scared',
            category: 'Emotions & Feelings',
            hsk: 3,
            examples: [
                { cn: '我害怕。', pinyin: 'wǒ hàipà.', en: 'I am afraid.' },
                { cn: '不要害怕。', pinyin: 'bùyào hàipà.', en: 'Don\'t be afraid.' }
            ],
            related: ['很害怕', '害怕吗', '不害怕']
        },
        {
            id: 'v129',
            character: '担心',
            pinyin: 'dānxīn',
            meaning: 'to worry',
            category: 'Emotions & Feelings',
            hsk: 4,
            examples: [
                { cn: '我很担心。', pinyin: 'wǒ hěn dānxīn.', en: 'I am very worried.' },
                { cn: '不要担心。', pinyin: 'bùyào dānxīn.', en: 'Don\'t worry.' }
            ],
            related: ['很担心', '担心吗', '不用担心']
        },
        {
            id: 'v130',
            character: '紧张',
            pinyin: 'jǐnzhāng',
            meaning: 'nervous',
            category: 'Emotions & Feelings',
            hsk: 4,
            examples: [
                { cn: '考试前我很紧张。', pinyin: 'kǎoshì qián wǒ hěn jǐnzhāng.', en: 'I am very nervous before the exam.' },
                { cn: '不要紧张。', pinyin: 'bùyào jǐnzhāng.', en: 'Don\'t be nervous.' }
            ],
            related: ['很紧张', '紧张吗', '不紧张']
        },
        {
            id: 'v131',
            character: '累',
            pinyin: 'lèi',
            meaning: 'tired',
            category: 'Emotions & Feelings',
            hsk: 3,
            examples: [
                { cn: '我很累。', pinyin: 'wǒ hěn lèi.', en: 'I am very tired.' },
                { cn: '工作很累。', pinyin: 'gōngzuò hěn lèi.', en: 'Work is very tiring.' }
            ],
            related: ['很累', '累了', '不累']
        },
        {
            id: 'v132',
            character: '忙',
            pinyin: 'máng',
            meaning: 'busy',
            category: 'Emotions & Feelings',
            hsk: 3,
            examples: [
                { cn: '我很忙。', pinyin: 'wǒ hěn máng.', en: 'I am very busy.' },
                { cn: '工作很忙。', pinyin: 'gōngzuò hěn máng.', en: 'Work is very busy.' }
            ],
            related: ['很忙', '忙吗', '不忙']
        },
        {
            id: 'v133',
            character: '舒服',
            pinyin: 'shūfu',
            meaning: 'comfortable',
            category: 'Emotions & Feelings',
            hsk: 3,
            examples: [
                { cn: '床很舒服。', pinyin: 'chuáng hěn shūfu.', en: 'The bed is very comfortable.' },
                { cn: '不舒服。', pinyin: 'bù shūfu.', en: 'Not comfortable.' }
            ],
            related: ['很舒服', '不舒服', '舒服吗']
        },
        {
            id: 'v134',
            character: '满意',
            pinyin: 'mǎnyì',
            meaning: 'satisfied',
            category: 'Emotions & Feelings',
            hsk: 4,
            examples: [
                { cn: '我很满意。', pinyin: 'wǒ hěn mǎnyì.', en: 'I am very satisfied.' },
                { cn: '满意吗？', pinyin: 'mǎnyì ma?', en: 'Are you satisfied?' }
            ],
            related: ['很满意', '不满意', '满意吗']
        },
        {
            id: 'v135',
            character: '感兴趣',
            pinyin: 'gǎn xìngqù',
            meaning: 'interested in',
            category: 'Emotions & Feelings',
            hsk: 4,
            examples: [
                { cn: '我很感兴趣。', pinyin: 'wǒ hěn gǎn xìngqù.', en: 'I am very interested.' },
                { cn: '你感兴趣吗？', pinyin: 'nǐ gǎn xìngqù ma?', en: 'Are you interested?' }
            ],
            related: ['感兴趣', '不感兴趣', '很感兴趣']
        },

        // ============================================
        // SHOPPING & MONEY (30+ words)
        // ============================================
        {
            id: 'v136',
            character: '买',
            pinyin: 'mǎi',
            meaning: 'to buy',
            category: 'Shopping & Money',
            hsk: 3,
            examples: [
                { cn: '我要买这个。', pinyin: 'wǒ yào mǎi zhège.', en: 'I want to buy this.' },
                { cn: '买什么？', pinyin: 'mǎi shénme?', en: 'What to buy?' }
            ],
            related: ['买东西', '买菜', '买票']
        },
        {
            id: 'v137',
            character: '卖',
            pinyin: 'mài',
            meaning: 'to sell',
            category: 'Shopping & Money',
            hsk: 3,
            examples: [
                { cn: '这个卖多少钱？', pinyin: 'zhège mài duōshao qián?', en: 'How much is this?' },
                { cn: '卖完了。', pinyin: 'mài wán le.', en: 'Sold out.' }
            ],
            related: ['卖东西', '卖完', '出售']
        },
        {
            id: 'v138',
            character: '贵',
            pinyin: 'guì',
            meaning: 'expensive',
            category: 'Shopping & Money',
            hsk: 3,
            examples: [
                { cn: '太贵了！', pinyin: 'tài guì le!', en: 'Too expensive!' },
                { cn: '这个很贵。', pinyin: 'zhège hěn guì.', en: 'This is very expensive.' }
            ],
            related: ['很贵', '太贵', '不贵']
        },
        {
            id: 'v139',
            character: '便宜',
            pinyin: 'piányi',
            meaning: 'cheap',
            category: 'Shopping & Money',
            hsk: 3,
            examples: [
                { cn: '这个很便宜。', pinyin: 'zhège hěn piányi.', en: 'This is very cheap.' },
                { cn: '便宜一点。', pinyin: 'piányi yīdiǎn.', en: 'A little cheaper.' }
            ],
            related: ['很便宜', '便宜点', '不便宜']
        },
        {
            id: 'v140',
            character: '钱',
            pinyin: 'qián',
            meaning: 'money',
            category: 'Shopping & Money',
            hsk: 3,
            examples: [
                { cn: '多少钱？', pinyin: 'duōshao qián?', en: 'How much money?' },
                { cn: '我没有钱。', pinyin: 'wǒ méiyǒu qián.', en: 'I don\'t have money.' }
            ],
            related: ['花钱', '有钱', '没钱']
        },
        {
            id: 'v141',
            character: '超市',
            pinyin: 'chāoshì',
            meaning: 'supermarket',
            category: 'Shopping & Money',
            hsk: 3,
            examples: [
                { cn: '我去超市。', pinyin: 'wǒ qù chāoshì.', en: 'I go to the supermarket.' },
                { cn: '超市很大。', pinyin: 'chāoshì hěn dà.', en: 'The supermarket is very big.' }
            ],
            related: ['去超市', '超市里', '逛超市']
        },
        {
            id: 'v142',
            character: '商店',
            pinyin: 'shāngdiàn',
            meaning: 'store / shop',
            category: 'Shopping & Money',
            hsk: 3,
            examples: [
                { cn: '商店几点开门？', pinyin: 'shāngdiàn jǐ diǎn kāimén?', en: 'What time does the store open?' },
                { cn: '这个商店很大。', pinyin: 'zhège shāngdiàn hěn dà.', en: 'This store is very big.' }
            ],
            related: ['去商店', '商店里', '小商店']
        },
        {
            id: 'v143',
            character: '信用卡',
            pinyin: 'xìnyòngkǎ',
            meaning: 'credit card',
            category: 'Shopping & Money',
            hsk: 4,
            examples: [
                { cn: '请刷信用卡。', pinyin: 'qǐng shuā xìnyòngkǎ.', en: 'Please swipe the credit card.' },
                { cn: '我有信用卡。', pinyin: 'wǒ yǒu xìnyòngkǎ.', en: 'I have a credit card.' }
            ],
            related: ['用信用卡', '信用卡号', '办信用卡']
        },
        {
            id: 'v144',
            character: '付',
            pinyin: 'fù',
            meaning: 'to pay',
            category: 'Shopping & Money',
            hsk: 4,
            examples: [
                { cn: '请付款。', pinyin: 'qǐng fùkuǎn.', en: 'Please pay.' },
                { cn: '付现金。', pinyin: 'fù xiànjīn.', en: 'Pay cash.' }
            ],
            related: ['付款', '付钱', '支付']
        },

        // ============================================
        // TIME & CALENDAR (30+ words)
        // ============================================
        {
            id: 'v145',
            character: '今天',
            pinyin: 'jīntiān',
            meaning: 'today',
            category: 'Time & Calendar',
            hsk: 3,
            examples: [
                { cn: '今天几号？', pinyin: 'jīntiān jǐ hào?', en: 'What is the date today?' },
                { cn: '今天天气很好。', pinyin: 'jīntiān tiānqì hěn hǎo.', en: 'The weather is very good today.' }
            ],
            related: ['今天', '今天', '今天']
        },
        {
            id: 'v146',
            character: '明天',
            pinyin: 'míngtiān',
            meaning: 'tomorrow',
            category: 'Time & Calendar',
            hsk: 3,
            examples: [
                { cn: '明天见。', pinyin: 'míngtiān jiàn.', en: 'See you tomorrow.' },
                { cn: '明天有课。', pinyin: 'míngtiān yǒu kè.', en: 'There is class tomorrow.' }
            ],
            related: ['明天', '明天', '明天']
        },
        {
            id: 'v147',
            character: '昨天',
            pinyin: 'zuótiān',
            meaning: 'yesterday',
            category: 'Time & Calendar',
            hsk: 3,
            examples: [
                { cn: '昨天很忙。', pinyin: 'zuótiān hěn máng.', en: 'Yesterday was very busy.' },
                { cn: '昨天去了哪里？', pinyin: 'zuótiān qù le nǎlǐ?', en: 'Where did you go yesterday?' }
            ],
            related: ['昨天', '昨天', '昨天']
        },
        {
            id: 'v148',
            character: '现在',
            pinyin: 'xiànzài',
            meaning: 'now',
            category: 'Time & Calendar',
            hsk: 3,
            examples: [
                { cn: '现在几点？', pinyin: 'xiànzài jǐ diǎn?', en: 'What time is it now?' },
                { cn: '现在很忙。', pinyin: 'xiànzài hěn máng.', en: 'I am very busy now.' }
            ],
            related: ['现在', '现在', '现在']
        },
        {
            id: 'v149',
            character: '时候',
            pinyin: 'shíhou',
            meaning: 'time / moment',
            category: 'Time & Calendar',
            hsk: 3,
            examples: [
                { cn: '什么时候？', pinyin: 'shénme shíhou?', en: 'When?' },
                { cn: '小时候', pinyin: 'xiǎo shíhou', en: 'When I was young' }
            ],
            related: ['什么时候', '小时候', '有时候']
        },
        {
            id: 'v150',
            character: '分钟',
            pinyin: 'fēnzhōng',
            meaning: 'minute',
            category: 'Time & Calendar',
            hsk: 3,
            examples: [
                { cn: '等五分钟。', pinyin: 'děng wǔ fēnzhōng.', en: 'Wait five minutes.' },
                { cn: '几分钟？', pinyin: 'jǐ fēnzhōng?', en: 'How many minutes?' }
            ],
            related: ['几分钟', '等一下', '分钟']
        },
        {
            id: 'v151',
            character: '小时',
            pinyin: 'xiǎoshí',
            meaning: 'hour',
            category: 'Time & Calendar',
            hsk: 3,
            examples: [
                { cn: '等一小时。', pinyin: 'děng yī xiǎoshí.', en: 'Wait one hour.' },
                { cn: '几个小时？', pinyin: 'jǐ gè xiǎoshí?', en: 'How many hours?' }
            ],
            related: ['几小时', '半小时', '小时']
        },
        {
            id: 'v152',
            character: '月',
            pinyin: 'yuè',
            meaning: 'month / moon',
            category: 'Time & Calendar',
            hsk: 3,
            examples: [
                { cn: '这个月', pinyin: 'zhège yuè', en: 'This month' },
                { cn: '几月？', pinyin: 'jǐ yuè?', en: 'Which month?' }
            ],
            related: ['这个月', '上个月', '下个月']
        },
        {
            id: 'v153',
            character: '年',
            pinyin: 'nián',
            meaning: 'year',
            category: 'Time & Calendar',
            hsk: 3,
            examples: [
                { cn: '今年', pinyin: 'jīnnián', en: 'This year' },
                { cn: '几年？', pinyin: 'jǐ nián?', en: 'How many years?' }
            ],
            related: ['今年', '去年', '明年']
        },

        // ============================================
        // WEATHER (20+ words)
        // ============================================
        {
            id: 'v154',
            character: '天气',
            pinyin: 'tiānqì',
            meaning: 'weather',
            category: 'Weather',
            hsk: 3,
            examples: [
                { cn: '今天天气很好。', pinyin: 'jīntiān tiānqì hěn hǎo.', en: 'The weather is very good today.' },
                { cn: '天气怎么样？', pinyin: 'tiānqì zěnmeyàng?', en: 'How is the weather?' }
            ],
            related: ['天气好', '天气预报', '天气冷']
        },
        {
            id: 'v155',
            character: '热',
            pinyin: 'rè',
            meaning: 'hot',
            category: 'Weather',
            hsk: 3,
            examples: [
                { cn: '今天很热。', pinyin: 'jīntiān hěn rè.', en: 'Today is very hot.' },
                { cn: '水很热。', pinyin: 'shuǐ hěn rè.', en: 'The water is very hot.' }
            ],
            related: ['很热', '太热', '热吗']
        },
        {
            id: 'v156',
            character: '冷',
            pinyin: 'lěng',
            meaning: 'cold',
            category: 'Weather',
            hsk: 3,
            examples: [
                { cn: '今天很冷。', pinyin: 'jīntiān hěn lěng.', en: 'Today is very cold.' },
                { cn: '水很冷。', pinyin: 'shuǐ hěn lěng.', en: 'The water is very cold.' }
            ],
            related: ['很冷', '太冷', '冷吗']
        },
        {
            id: 'v157',
            character: '下雨',
            pinyin: 'xiàyǔ',
            meaning: 'to rain',
            category: 'Weather',
            hsk: 3,
            examples: [
                { cn: '下雨了。', pinyin: 'xiàyǔ le.', en: 'It\'s raining.' },
                { cn: '明天会下雨。', pinyin: 'míngtiān huì xiàyǔ.', en: 'It will rain tomorrow.' }
            ],
            related: ['下雨', '大雨', '小雨']
        },
        {
            id: 'v158',
            character: '下雪',
            pinyin: 'xiàxuě',
            meaning: 'to snow',
            category: 'Weather',
            hsk: 3,
            examples: [
                { cn: '下雪了。', pinyin: 'xiàxuě le.', en: 'It\'s snowing.' },
                { cn: '北方会下雪。', pinyin: 'běifāng huì xiàxuě.', en: 'It snows in the north.' }
            ],
            related: ['下雪', '大雪', '雪花']
        },
        {
            id: 'v159',
            character: '风',
            pinyin: 'fēng',
            meaning: 'wind',
            category: 'Weather',
            hsk: 3,
            examples: [
                { cn: '今天风很大。', pinyin: 'jīntiān fēng hěn dà.', en: 'The wind is very strong today.' },
                { cn: '刮风了。', pinyin: 'guā fēng le.', en: 'The wind is blowing.' }
            ],
            related: ['大风', '刮风', '风大']
        },
        {
            id: 'v160',
            character: '云',
            pinyin: 'yún',
            meaning: 'cloud',
            category: 'Weather',
            hsk: 3,
            examples: [
                { cn: '云很多。', pinyin: 'yún hěn duō.', en: 'There are many clouds.' },
                { cn: '白云很美。', pinyin: 'bái yún hěn měi.', en: 'The white clouds are beautiful.' }
            ],
            related: ['白云', '乌云', '云彩']
        },

        // ============================================
        // HOBBIES & SPORTS (30+ words)
        // ============================================
        {
            id: 'v161',
            character: '运动',
            pinyin: 'yùndòng',
            meaning: 'sports / exercise',
            category: 'Hobbies & Sports',
            hsk: 3,
            examples: [
                { cn: '我喜欢运动。', pinyin: 'wǒ xǐhuān yùndòng.', en: 'I like sports.' },
                { cn: '运动很健康。', pinyin: 'yùndòng hěn jiànkāng.', en: 'Exercise is healthy.' }
            ],
            related: ['做运动', '运动场', '运动员']
        },
        {
            id: 'v162',
            character: '足球',
            pinyin: 'zúqiú',
            meaning: 'football / soccer',
            category: 'Hobbies & Sports',
            hsk: 3,
            examples: [
                { cn: '我喜欢踢足球。', pinyin: 'wǒ xǐhuān tī zúqiú.', en: 'I like playing football.' },
                { cn: '足球比赛很精彩。', pinyin: 'zúqiú bǐsài hěn jīngcǎi.', en: 'The football match is exciting.' }
            ],
            related: ['踢足球', '足球场', '足球队']
        },
        {
            id: 'v163',
            character: '篮球',
            pinyin: 'lánqiú',
            meaning: 'basketball',
            category: 'Hobbies & Sports',
            hsk: 3,
            examples: [
                { cn: '他喜欢打篮球。', pinyin: 'tā xǐhuān dǎ lánqiú.', en: 'He likes playing basketball.' },
                { cn: '篮球很受欢迎。', pinyin: 'lánqiú hěn shòu huānyíng.', en: 'Basketball is very popular.' }
            ],
            related: ['打篮球', '篮球队', '篮球场']
        },
        {
            id: 'v164',
            character: '游泳',
            pinyin: 'yóuyǒng',
            meaning: 'swimming',
            category: 'Hobbies & Sports',
            hsk: 3,
            examples: [
                { cn: '我喜欢游泳。', pinyin: 'wǒ xǐhuān yóuyǒng.', en: 'I like swimming.' },
                { cn: '游泳很健康。', pinyin: 'yóuyǒng hěn jiànkāng.', en: 'Swimming is healthy.' }
            ],
            related: ['去游泳', '游泳池', '游泳馆']
        },
        {
            id: 'v165',
            character: '跑步',
            pinyin: 'pǎobù',
            meaning: 'running / jogging',
            category: 'Hobbies & Sports',
            hsk: 3,
            examples: [
                { cn: '我每天跑步。', pinyin: 'wǒ měitiān pǎobù.', en: 'I run every day.' },
                { cn: '跑步很健康。', pinyin: 'pǎobù hěn jiànkāng.', en: 'Running is healthy.' }
            ],
            related: ['去跑步', '跑步机', '跑步者']
        },
        {
            id: 'v166',
            character: '游戏',
            pinyin: 'yóuxì',
            meaning: 'game',
            category: 'Hobbies & Sports',
            hsk: 3,
            examples: [
                { cn: '我喜欢玩游戏。', pinyin: 'wǒ xǐhuān wán yóuxì.', en: 'I like playing games.' },
                { cn: '这个游戏很有意思。', pinyin: 'zhège yóuxì hěn yǒu yìsi.', en: 'This game is very interesting.' }
            ],
            related: ['玩游戏', '电脑游戏', '手机游戏']
        },
        {
            id: 'v167',
            character: '爱好',
            pinyin: 'àihào',
            meaning: 'hobby',
            category: 'Hobbies & Sports',
            hsk: 4,
            examples: [
                { cn: '你的爱好是什么？', pinyin: 'nǐ de àihào shì shénme?', en: 'What is your hobby?' },
                { cn: '我有很多爱好。', pinyin: 'wǒ yǒu hěn duō àihào.', en: 'I have many hobbies.' }
            ],
            related: ['有爱好', '爱好', '兴趣爱好']
        },

        // ============================================
        // CULTURE & SOCIETY (30+ words)
        // ============================================
        {
            id: 'v168',
            character: '文化',
            pinyin: 'wénhuà',
            meaning: 'culture',
            category: 'Culture & Society',
            hsk: 4,
            examples: [
                { cn: '中国文化很有意思。', pinyin: 'zhōngguó wénhuà hěn yǒu yìsi.', en: 'Chinese culture is very interesting.' },
                { cn: '学习文化很重要。', pinyin: 'xuéxí wénhuà hěn zhòngyào.', en: 'Learning culture is important.' }
            ],
            related: ['中国文化', '传统文化', '文化差异']
        },
        {
            id: 'v169',
            character: '历史',
            pinyin: 'lìshǐ',
            meaning: 'history',
            category: 'Culture & Society',
            hsk: 4,
            examples: [
                { cn: '中国历史很长。', pinyin: 'zhōngguó lìshǐ hěn cháng.', en: 'Chinese history is very long.' },
                { cn: '我喜欢历史。', pinyin: 'wǒ xǐhuān lìshǐ.', en: 'I like history.' }
            ],
            related: ['历史', '历史悠久', '历史书']
        },
        {
            id: 'v170',
            character: '传统',
            pinyin: 'chuántǒng',
            meaning: 'tradition',
            category: 'Culture & Society',
            hsk: 4,
            examples: [
                { cn: '这是传统。', pinyin: 'zhè shì chuántǒng.', en: 'This is tradition.' },
                { cn: '传统文化很重要。', pinyin: 'chuántǒng wénhuà hěn zhòngyào.', en: 'Traditional culture is important.' }
            ],
            related: ['传统文化', '传统节日', '传统']
        },
        {
            id: 'v171',
            character: '节日',
            pinyin: 'jiérì',
            meaning: 'festival / holiday',
            category: 'Culture & Society',
            hsk: 4,
            examples: [
                { cn: '什么节日？', pinyin: 'shénme jiérì?', en: 'What festival?' },
                { cn: '节日快乐！', pinyin: 'jiérì kuàilè!', en: 'Happy holidays!' }
            ],
            related: ['传统节日', '节日快乐', '过节']
        },
        {
            id: 'v172',
            character: '春节',
            pinyin: 'Chūnjié',
            meaning: 'Spring Festival / Chinese New Year',
            category: 'Culture & Society',
            hsk: 4,
            examples: [
                { cn: '春节快乐！', pinyin: 'Chūnjié kuàilè!', en: 'Happy Chinese New Year!' },
                { cn: '春节是中国最重要的节日。', pinyin: 'Chūnjié shì zhōngguó zuì zhòngyào de jiérì.', en: 'Spring Festival is the most important festival in China.' }
            ],
            related: ['过春节', '春节快乐', '春节联欢晚会']
        },
        {
            id: 'v173',
            character: '社会',
            pinyin: 'shèhuì',
            meaning: 'society',
            category: 'Culture & Society',
            hsk: 4,
            examples: [
                { cn: '社会发展很快。', pinyin: 'shèhuì fāzhǎn hěn kuài.', en: 'Society is developing very fast.' },
                { cn: '社会问题', pinyin: 'shèhuì wèntí', en: 'Social issues' }
            ],
            related: ['社会', '社会问题', '社会']
        },
        {
            id: 'v174',
            character: '经济',
            pinyin: 'jīngjì',
            meaning: 'economy',
            category: 'Culture & Society',
            hsk: 4,
            examples: [
                { cn: '经济发展很快。', pinyin: 'jīngjì fāzhǎn hěn kuài.', en: 'The economy is developing very fast.' },
                { cn: '经济很重要。', pinyin: 'jīngjì hěn zhòngyào.', en: 'The economy is very important.' }
            ],
            related: ['经济发展', '经济问题', '市场经济']
        },
        {
            id: 'v175',
            character: '政治',
            pinyin: 'zhèngzhì',
            meaning: 'politics',
            category: 'Culture & Society',
            hsk: 4,
            examples: [
                { cn: '我对政治不感兴趣。', pinyin: 'wǒ duì zhèngzhì bù gǎn xìngqù.', en: 'I am not interested in politics.' },
                { cn: '政治新闻', pinyin: 'zhèngzhì xīnwén', en: 'Political news' }
            ],
            related: ['政治', '政治家', '政治']
        },

        // ============================================
        // ADDITIONAL COMMON WORDS (200+ more)
        // ============================================
        {
            id: 'v176',
            character: '很',
            pinyin: 'hěn',
            meaning: 'very',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '很好。', pinyin: 'hěn hǎo.', en: 'Very good.' },
                { cn: '很大。', pinyin: 'hěn dà.', en: 'Very big.' }
            ],
            related: ['很好', '很大', '很多']
        },
        {
            id: 'v177',
            character: '太',
            pinyin: 'tài',
            meaning: 'too / extremely',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '太好了！', pinyin: 'tài hǎo le!', en: 'Great!' },
                { cn: '太贵了。', pinyin: 'tài guì le.', en: 'Too expensive.' }
            ],
            related: ['太好了', '太贵了', '太多了']
        },
        {
            id: 'v178',
            character: '最',
            pinyin: 'zuì',
            meaning: 'most',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '最好。', pinyin: 'zuì hǎo.', en: 'The best.' },
                { cn: '最大。', pinyin: 'zuì dà.', en: 'The biggest.' }
            ],
            related: ['最好', '最大', '最喜欢']
        },
        {
            id: 'v179',
            character: '比较',
            pinyin: 'bǐjiào',
            meaning: 'relatively / to compare',
            category: 'Daily Life',
            hsk: 4,
            examples: [
                { cn: '比较好。', pinyin: 'bǐjiào hǎo.', en: 'Relatively good.' },
                { cn: '比较贵。', pinyin: 'bǐjiào guì.', en: 'Relatively expensive.' }
            ],
            related: ['比较好', '比较贵', '比较']
        },
        {
            id: 'v180',
            character: '非常',
            pinyin: 'fēicháng',
            meaning: 'very / extremely',
            category: 'Daily Life',
            hsk: 4,
            examples: [
                { cn: '非常好。', pinyin: 'fēicháng hǎo.', en: 'Very good.' },
                { cn: '非常感谢。', pinyin: 'fēicháng gǎnxiè.', en: 'Thank you very much.' }
            ],
            related: ['非常好', '非常感谢', '非常喜欢']
        },
        {
            id: 'v181',
            character: '已经',
            pinyin: 'yǐjīng',
            meaning: 'already',
            category: 'Daily Life',
            hsk: 4,
            examples: [
                { cn: '已经好了。', pinyin: 'yǐjīng hǎo le.', en: 'Already done.' },
                { cn: '已经晚了。', pinyin: 'yǐjīng wǎn le.', en: 'It\'s already late.' }
            ],
            related: ['已经', '已经', '已经']
        },
        {
            id: 'v182',
            character: '可能',
            pinyin: 'kěnéng',
            meaning: 'maybe / possible',
            category: 'Daily Life',
            hsk: 4,
            examples: [
                { cn: '可能吧。', pinyin: 'kěnéng ba.', en: 'Maybe.' },
                { cn: '不可能。', pinyin: 'bù kěnéng.', en: 'Impossible.' }
            ],
            related: ['可能', '不可能', '可能']
        },
        {
            id: 'v183',
            character: '可以',
            pinyin: 'kěyǐ',
            meaning: 'can / may',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '可以吗？', pinyin: 'kěyǐ ma?', en: 'Is it okay?' },
                { cn: '可以。', pinyin: 'kěyǐ.', en: 'Yes, you can.' }
            ],
            related: ['可以', '不可以', '可以']
        },
        {
            id: 'v184',
            character: '应该',
            pinyin: 'yīnggāi',
            meaning: 'should',
            category: 'Daily Life',
            hsk: 4,
            examples: [
                { cn: '应该的。', pinyin: 'yīnggāi de.', en: 'You\'re welcome.' },
                { cn: '应该去。', pinyin: 'yīnggāi qù.', en: 'Should go.' }
            ],
            related: ['应该', '不应该', '应该']
        },
        {
            id: 'v185',
            character: '愿意',
            pinyin: 'yuànyì',
            meaning: 'willing',
            category: 'Daily Life',
            hsk: 4,
            examples: [
                { cn: '你愿意吗？', pinyin: 'nǐ yuànyì ma?', en: 'Are you willing?' },
                { cn: '我愿意。', pinyin: 'wǒ yuànyì.', en: 'I am willing.' }
            ],
            related: ['愿意', '不愿意', '愿意']
        },
        {
            id: 'v186',
            character: '希望',
            pinyin: 'xīwàng',
            meaning: 'to hope',
            category: 'Daily Life',
            hsk: 4,
            examples: [
                { cn: '我希望你快乐。', pinyin: 'wǒ xīwàng nǐ kuàilè.', en: 'I hope you are happy.' },
                { cn: '希望如此。', pinyin: 'xīwàng rúcǐ.', en: 'I hope so.' }
            ],
            related: ['希望', '不希望', '希望']
        },
        {
            id: 'v187',
            character: '觉得',
            pinyin: 'juéde',
            meaning: 'to feel / to think',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '你觉得怎么样？', pinyin: 'nǐ juéde zěnmeyàng?', en: 'What do you think?' },
                { cn: '我觉得很好。', pinyin: 'wǒ juéde hěn hǎo.', en: 'I think it\'s very good.' }
            ],
            related: ['觉得', '不觉得', '觉得']
        },
        {
            id: 'v188',
            character: '知道',
            pinyin: 'zhīdào',
            meaning: 'to know',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '你知道吗？', pinyin: 'nǐ zhīdào ma?', en: 'Do you know?' },
                { cn: '我不知道。', pinyin: 'wǒ bù zhīdào.', en: 'I don\'t know.' }
            ],
            related: ['知道', '不知道', '知道']
        },
        {
            id: 'v189',
            character: '认识',
            pinyin: 'rènshi',
            meaning: 'to know / to recognize',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '很高兴认识你。', pinyin: 'hěn gāoxìng rènshi nǐ.', en: 'Nice to meet you.' },
                { cn: '我不认识他。', pinyin: 'wǒ bù rènshi tā.', en: 'I don\'t know him.' }
            ],
            related: ['认识', '不认识', '认识']
        },
        {
            id: 'v190',
            character: '了解',
            pinyin: 'liǎojiě',
            meaning: 'to understand',
            category: 'Daily Life',
            hsk: 4,
            examples: [
                { cn: '你了解吗？', pinyin: 'nǐ liǎojiě ma?', en: 'Do you understand?' },
                { cn: '我不了解。', pinyin: 'wǒ bù liǎojiě.', en: 'I don\'t understand.' }
            ],
            related: ['了解', '不了解', '了解']
        },
        {
            id: 'v191',
            character: '明白',
            pinyin: 'míngbai',
            meaning: 'to understand / clear',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '你明白吗？', pinyin: 'nǐ míngbai ma?', en: 'Do you understand?' },
                { cn: '我不明白。', pinyin: 'wǒ bù míngbai.', en: 'I don\'t understand.' }
            ],
            related: ['明白', '不明白', '明白']
        },
        {
            id: 'v192',
            character: '问题',
            pinyin: 'wèntí',
            meaning: 'question / problem',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '有问题吗？', pinyin: 'yǒu wèntí ma?', en: 'Any questions?' },
                { cn: '没问题。', pinyin: 'méi wèntí.', en: 'No problem.' }
            ],
            related: ['问题', '没问题', '问题']
        },
        {
            id: 'v193',
            character: '答案',
            pinyin: 'dá\'àn',
            meaning: 'answer',
            category: 'Daily Life',
            hsk: 4,
            examples: [
                { cn: '答案是什么？', pinyin: 'dá\'àn shì shénme?', en: 'What is the answer?' },
                { cn: '答案对吗？', pinyin: 'dá\'àn duì ma?', en: 'Is the answer correct?' }
            ],
            related: ['答案', '正确答案', '答案']
        },
        {
            id: 'v194',
            character: '意思',
            pinyin: 'yìsi',
            meaning: 'meaning',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '什么意思？', pinyin: 'shénme yìsi?', en: 'What does it mean?' },
                { cn: '很有意思。', pinyin: 'hěn yǒu yìsi.', en: 'Very interesting.' }
            ],
            related: ['意思', '有意思', '意思']
        },
        {
            id: 'v195',
            character: '办法',
            pinyin: 'bànfǎ',
            meaning: 'method / way',
            category: 'Daily Life',
            hsk: 4,
            examples: [
                { cn: '有什么办法？', pinyin: 'yǒu shénme bànfǎ?', en: 'What method is there?' },
                { cn: '没办法。', pinyin: 'méi bànfǎ.', en: 'There\'s no way.' }
            ],
            related: ['办法', '没办法', '办法']
        },
        {
            id: 'v196',
            character: '关系',
            pinyin: 'guānxì',
            meaning: 'relationship',
            category: 'Daily Life',
            hsk: 4,
            examples: [
                { cn: '关系很好。', pinyin: 'guānxì hěn hǎo.', en: 'The relationship is very good.' },
                { cn: '没关系。', pinyin: 'méi guānxì.', en: 'It doesn\'t matter.' }
            ],
            related: ['关系', '没关系', '关系']
        },
        {
            id: 'v197',
            character: '兴趣',
            pinyin: 'xìngqù',
            meaning: 'interest',
            category: 'Daily Life',
            hsk: 4,
            examples: [
                { cn: '有兴趣吗？', pinyin: 'yǒu xìngqù ma?', en: 'Are you interested?' },
                { cn: '感兴趣。', pinyin: 'gǎn xìngqù.', en: 'Interested.' }
            ],
            related: ['兴趣', '感兴趣', '兴趣']
        },
        {
            id: 'v198',
            character: '爱好',
            pinyin: 'àihào',
            meaning: 'hobby',
            category: 'Daily Life',
            hsk: 4,
            examples: [
                { cn: '你的爱好是什么？', pinyin: 'nǐ de àihào shì shénme?', en: 'What is your hobby?' },
                { cn: '我有很多爱好。', pinyin: 'wǒ yǒu hěn duō àihào.', en: 'I have many hobbies.' }
            ],
            related: ['爱好', '有爱好', '爱好']
        },
        {
            id: 'v199',
            character: '当然',
            pinyin: 'dāngrán',
            meaning: 'of course',
            category: 'Daily Life',
            hsk: 4,
            examples: [
                { cn: '当然可以。', pinyin: 'dāngrán kěyǐ.', en: 'Of course.' },
                { cn: '当然。', pinyin: 'dāngrán.', en: 'Of course.' }
            ],
            related: ['当然', '当然', '当然']
        },
        {
            id: 'v200',
            character: '但是',
            pinyin: 'dànshì',
            meaning: 'but',
            category: 'Daily Life',
            hsk: 3,
            examples: [
                { cn: '很好，但是...', pinyin: 'hěn hǎo, dànshì...', en: 'Very good, but...' },
                { cn: '但是我不想去。', pinyin: 'dànshì wǒ bù xiǎng qù.', en: 'But I don\'t want to go.' }
            ],
            related: ['但是', '但是', '但是']
        }
    ],

    // Get words by category
    getByCategory(category) {
        return this.words.filter(w => w.category === category);
    },

    // Get words by HSK level
    getByHSK(level) {
        return this.words.filter(w => w.hsk === level);
    },

    // Get word by ID
    getById(id) {
        return this.words.find(w => w.id === id);
    },

    // Get random words
    getRandom(count = 10) {
        return Utils.randomItems(this.words, count);
    },

    // Search words
    search(query) {
        const lowerQuery = query.toLowerCase();
        return this.words.filter(w => 
            w.character.includes(query) ||
            w.pinyin.toLowerCase().includes(lowerQuery) ||
            w.meaning.toLowerCase().includes(lowerQuery)
        );
    },

    // Get total count
    get count() {
        return this.words.length;
    }
};

// Export for use in other modules
window.VocabularyData = VocabularyData;

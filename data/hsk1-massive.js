// ============================================
// CHINESE MASTER - HSK 1 MASSIVE EXAMPLES DATABASE
// Every word has 4-6 example sentences
// ALL SIMPLIFIED CHINESE with Pinyin + English
// ============================================

const HSK1Massive = {
    words: [
        // ============================
        // PRONOUNS
        // ============================
        {
            id: 'h1m_001', character: '我', pinyin: 'wǒ', meaning: 'I/me', hsk: 1, category: 'pronouns',
            examples: [
                { cn: '我是学生。', pinyin: 'wǒ shì xuésheng.', en: 'I am a student.' },
                { cn: '我是中国人。', pinyin: 'wǒ shì zhōngguó rén.', en: 'I am Chinese.' },
                { cn: '我住在北京。', pinyin: 'wǒ zhù zài běijīng.', en: 'I live in Beijing.' },
                { cn: '我喜欢学中文。', pinyin: 'wǒ xǐhuān xué zhōngwén.', en: 'I like learning Chinese.' },
                { cn: '我今天很忙。', pinyin: 'wǒ jīntiān hěn máng.', en: 'I am very busy today.' },
                { cn: '我有一个哥哥。', pinyin: 'wǒ yǒu yīgè gēge.', en: 'I have an older brother.' }
            ]
        },
        {
            id: 'h1m_002', character: '你', pinyin: 'nǐ', meaning: 'you', hsk: 1, category: 'pronouns',
            examples: [
                { cn: '你好吗？', pinyin: 'nǐ hǎo ma?', en: 'How are you?' },
                { cn: '你叫什么名字？', pinyin: 'nǐ jiào shénme míngzi?', en: 'What is your name?' },
                { cn: '你是哪国人？', pinyin: 'nǐ shì nǎ guó rén?', en: 'What country are you from?' },
                { cn: '你做什么工作？', pinyin: 'nǐ zuò shénme gōngzuò?', en: 'What work do you do?' },
                { cn: '你喜欢吃什么？', pinyin: 'nǐ xǐhuān chī shénme?', en: 'What do you like to eat?' },
                { cn: '你今天忙吗？', pinyin: 'nǐ jīntiān máng ma?', en: 'Are you busy today?' }
            ]
        },
        {
            id: 'h1m_003', character: '他', pinyin: 'tā', meaning: 'he/him', hsk: 1, category: 'pronouns',
            examples: [
                { cn: '他是老师。', pinyin: 'tā shì lǎoshī.', en: 'He is a teacher.' },
                { cn: '他很高。', pinyin: 'tā hěn gāo.', en: 'He is very tall.' },
                { cn: '他在北京工作。', pinyin: 'tā zài běijīng gōngzuò.', en: 'He works in Beijing.' },
                { cn: '他会说中文。', pinyin: 'tā huì shuō zhōngwén.', en: 'He can speak Chinese.' },
                { cn: '他是我的朋友。', pinyin: 'tā shì wǒ de péngyǒu.', en: 'He is my friend.' },
                { cn: '他今天很开心。', pinyin: 'tā jīntiān hěn kāixīn.', en: 'He is very happy today.' }
            ]
        },
        {
            id: 'h1m_004', character: '她', pinyin: 'tā', meaning: 'she/her', hsk: 1, category: 'pronouns',
            examples: [
                { cn: '她很漂亮。', pinyin: 'tā hěn piàoliang.', en: 'She is very beautiful.' },
                { cn: '她是医生。', pinyin: 'tā shì yīshēng.', en: 'She is a doctor.' },
                { cn: '她喜欢看书。', pinyin: 'tā xǐhuān kànshū.', en: 'She likes reading books.' },
                { cn: '她今天很开心。', pinyin: 'tā jīntiān hěn kāixīn.', en: 'She is very happy today.' },
                { cn: '她是我的姐姐。', pinyin: 'tā shì wǒ de jiějie.', en: 'She is my older sister.' },
                { cn: '她会做饭。', pinyin: 'tā huì zuòfàn.', en: 'She can cook.' }
            ]
        },
        {
            id: 'h1m_005', character: '我们', pinyin: 'wǒmen', meaning: 'we/us', hsk: 1, category: 'pronouns',
            examples: [
                { cn: '我们是朋友。', pinyin: 'wǒmen shì péngyǒu.', en: 'We are friends.' },
                { cn: '我们一起去。', pinyin: 'wǒmen yīqǐ qù.', en: 'Let\'s go together.' },
                { cn: '我们都是学生。', pinyin: 'wǒmen dōu shì xuésheng.', en: 'We are all students.' },
                { cn: '我们喜欢中国菜。', pinyin: 'wǒmen xǐhuān zhōngguó cài.', en: 'We like Chinese food.' },
                { cn: '我们今天很忙。', pinyin: 'wǒmen jīntiān hěn máng.', en: 'We are very busy today.' }
            ]
        },
        {
            id: 'h1m_006', character: '他们', pinyin: 'tāmen', meaning: 'they/them', hsk: 1, category: 'pronouns',
            examples: [
                { cn: '他们是学生。', pinyin: 'tāmen shì xuésheng.', en: 'They are students.' },
                { cn: '他们很高。', pinyin: 'tāmen hěn gāo.', en: 'They are very tall.' },
                { cn: '他们在北京。', pinyin: 'tāmen zài běijīng.', en: 'They are in Beijing.' },
                { cn: '他们喜欢运动。', pinyin: 'tāmen xǐhuān yùndòng.', en: 'They like sports.' },
                { cn: '他们是中国人。', pinyin: 'tāmen shì zhōngguó rén.', en: 'They are Chinese.' }
            ]
        },
        {
            id: 'h1m_007', character: '这', pinyin: 'zhè', meaning: 'this', hsk: 1, category: 'pronouns',
            examples: [
                { cn: '这是什么？', pinyin: 'zhè shì shénme?', en: 'What is this?' },
                { cn: '这是我的书。', pinyin: 'zhè shì wǒ de shū.', en: 'This is my book.' },
                { cn: '这个人是谁？', pinyin: 'zhège rén shì shéi?', en: 'Who is this person?' },
                { cn: '这个多少钱？', pinyin: 'zhège duōshao qián?', en: 'How much is this?' },
                { cn: '这个很好吃。', pinyin: 'zhège hěn hǎochī.', en: 'This is very delicious.' }
            ]
        },
        {
            id: 'h1m_008', character: '那', pinyin: 'nà', meaning: 'that', hsk: 1, category: 'pronouns',
            examples: [
                { cn: '那是什么？', pinyin: 'nà shì shénme?', en: 'What is that?' },
                { cn: '那是书。', pinyin: 'nà shì shū.', en: 'That is a book.' },
                { cn: '那个人是谁？', pinyin: 'nàge rén shì shéi?', en: 'Who is that person?' },
                { cn: '那个很贵。', pinyin: 'nàge hěn guì.', en: 'That is very expensive.' },
                { cn: '那个地方很远。', pinyin: 'nàge dìfāng hěn yuǎn.', en: 'That place is very far.' }
            ]
        },
        {
            id: 'h1m_009', character: '什么', pinyin: 'shénme', meaning: 'what', hsk: 1, category: 'pronouns',
            examples: [
                { cn: '你叫什么名字？', pinyin: 'nǐ jiào shénme míngzi?', en: 'What is your name?' },
                { cn: '这是什么？', pinyin: 'zhè shì shénme?', en: 'What is this?' },
                { cn: '你想吃什么？', pinyin: 'nǐ xiǎng chī shénme?', en: 'What do you want to eat?' },
                { cn: '你喜欢什么？', pinyin: 'nǐ xǐhuān shénme?', en: 'What do you like?' },
                { cn: '什么颜色？', pinyin: 'shénme yánsè?', en: 'What color?' }
            ]
        },
        {
            id: 'h1m_010', character: '谁', pinyin: 'shéi', meaning: 'who', hsk: 1, category: 'pronouns',
            examples: [
                { cn: '他是谁？', pinyin: 'tā shì shéi?', en: 'Who is he?' },
                { cn: '谁来了？', pinyin: 'shéi lái le?', en: 'Who came?' },
                { cn: '这是谁的书？', pinyin: 'zhè shì shéi de shū?', en: 'Whose book is this?' },
                { cn: '你喜欢谁？', pinyin: 'nǐ xǐhuān shéi?', en: 'Who do you like?' },
                { cn: '谁教你中文？', pinyin: 'shéi jiāo nǐ zhōngwén?', en: 'Who teaches you Chinese?' }
            ]
        },
        {
            id: 'h1m_011', character: '哪', pinyin: 'nǎ', meaning: 'where/which', hsk: 1, category: 'pronouns',
            examples: [
                { cn: '你是哪国人？', pinyin: 'nǐ shì nǎ guó rén?', en: 'What country are you from?' },
                { cn: '你住在哪里？', pinyin: 'nǐ zhù zài nǎlǐ?', en: 'Where do you live?' },
                { cn: '哪个是你的？', pinyin: 'nǎge shì nǐ de?', en: 'Which one is yours?' },
                { cn: '你去哪里？', pinyin: 'nǐ qù nǎlǐ?', en: 'Where are you going?' },
                { cn: '哪里有银行？', pinyin: 'nǎlǐ yǒu yínháng?', en: 'Where is there a bank?' }
            ]
        },
        {
            id: 'h1m_012', character: '几', pinyin: 'jǐ', meaning: 'how many', hsk: 1, category: 'pronouns',
            examples: [
                { cn: '你几岁？', pinyin: 'nǐ jǐ suì?', en: 'How old are you?' },
                { cn: '现在几点？', pinyin: 'xiànzài jǐ diǎn?', en: 'What time is it now?' },
                { cn: '你有几个哥哥？', pinyin: 'nǐ yǒu jǐ gè gēge?', en: 'How many older brothers do you have?' },
                { cn: '今天几号？', pinyin: 'jīntiān jǐ hào?', en: 'What is the date today?' },
                { cn: '几个人？', pinyin: 'jǐ gè rén?', en: 'How many people?' }
            ]
        },
        {
            id: 'h1m_013', character: '多少', pinyin: 'duōshao', meaning: 'how much', hsk: 1, category: 'pronouns',
            examples: [
                { cn: '多少钱？', pinyin: 'duōshao qián?', en: 'How much money?' },
                { cn: '你有多少钱？', pinyin: 'nǐ yǒu duōshao qián?', en: 'How much money do you have?' },
                { cn: '多少个人？', pinyin: 'duōshao gè rén?', en: 'How many people?' },
                { cn: '这个多少钱？', pinyin: 'zhège duōshao qián?', en: 'How much is this?' },
                { cn: '你要多少？', pinyin: 'nǐ yào duōshao?', en: 'How much do you want?' }
            ]
        },

        // ============================
        // BASIC VERBS
        // ============================
        {
            id: 'h1m_014', character: '是', pinyin: 'shì', meaning: 'to be', hsk: 1, category: 'verbs',
            examples: [
                { cn: '我是学生。', pinyin: 'wǒ shì xuésheng.', en: 'I am a student.' },
                { cn: '他是中国人。', pinyin: 'tā shì zhōngguó rén.', en: 'He is Chinese.' },
                { cn: '这是书。', pinyin: 'zhè shì shū.', en: 'This is a book.' },
                { cn: '今天是星期一。', pinyin: 'jīntiān shì xīngqī yī.', en: 'Today is Monday.' },
                { cn: '他是我的朋友。', pinyin: 'tā shì wǒ de péngyǒu.', en: 'He is my friend.' },
                { cn: '那是我的家。', pinyin: 'nà shì wǒ de jiā.', en: 'That is my home.' }
            ]
        },
        {
            id: 'h1m_015', character: '有', pinyin: 'yǒu', meaning: 'to have', hsk: 1, category: 'verbs',
            examples: [
                { cn: '我有一个哥哥。', pinyin: 'wǒ yǒu yīgè gēge.', en: 'I have an older brother.' },
                { cn: '这里有水吗？', pinyin: 'zhèlǐ yǒu shuǐ ma?', en: 'Is there water here?' },
                { cn: '他有很多书。', pinyin: 'tā yǒu hěn duō shū.', en: 'He has many books.' },
                { cn: '今天有课。', pinyin: 'jīntiān yǒu kè.', en: 'There is class today.' },
                { cn: '我没有钱。', pinyin: 'wǒ méiyǒu qián.', en: 'I don\'t have money.' },
                { cn: '你有时间吗？', pinyin: 'nǐ yǒu shíjiān ma?', en: 'Do you have time?' }
            ]
        },
        {
            id: 'h1m_016', character: '去', pinyin: 'qù', meaning: 'to go', hsk: 1, category: 'verbs',
            examples: [
                { cn: '我去学校。', pinyin: 'wǒ qù xuéxiào.', en: 'I go to school.' },
                { cn: '我们去吃饭吧。', pinyin: 'wǒmen qù chīfàn ba.', en: 'Let\'s go eat.' },
                { cn: '他去北京了。', pinyin: 'tā qù běijīng le.', en: 'He went to Beijing.' },
                { cn: '你想去哪里？', pinyin: 'nǐ xiǎng qù nǎlǐ?', en: 'Where do you want to go?' },
                { cn: '我去超市买东西。', pinyin: 'wǒ qù chāoshì mǎi dōngxi.', en: 'I go to the supermarket to buy things.' },
                { cn: '明天去公园。', pinyin: 'míngtiān qù gōngyuán.', en: 'Go to the park tomorrow.' }
            ]
        },
        {
            id: 'h1m_017', character: '来', pinyin: 'lái', meaning: 'to come', hsk: 1, category: 'verbs',
            examples: [
                { cn: '请进来。', pinyin: 'qǐng jìnlái.', en: 'Please come in.' },
                { cn: '他来了。', pinyin: 'tā lái le.', en: 'He has come.' },
                { cn: '你来中国多久了？', pinyin: 'nǐ lái zhōngguó duō jiǔ le?', en: 'How long have you been in China?' },
                { cn: '明天来我家。', pinyin: 'míngtiān lái wǒ jiā.', en: 'Come to my home tomorrow.' },
                { cn: '请来一下。', pinyin: 'qǐng lái yīxià.', en: 'Please come here for a moment.' },
                { cn: '他从美国来。', pinyin: 'tā cóng měiguó lái.', en: 'He comes from America.' }
            ]
        },
        {
            id: 'h1m_018', character: '吃', pinyin: 'chī', meaning: 'to eat', hsk: 1, category: 'verbs',
            examples: [
                { cn: '我吃饭。', pinyin: 'wǒ chīfàn.', en: 'I eat rice.' },
                { cn: '你喜欢吃什么？', pinyin: 'nǐ xǐhuān chī shénme?', en: 'What do you like to eat?' },
                { cn: '我们去吃中国菜。', pinyin: 'wǒmen qù chī zhōngguó cài.', en: 'Let\'s go eat Chinese food.' },
                { cn: '他不吃肉。', pinyin: 'tā bù chī ròu.', en: 'He doesn\'t eat meat.' },
                { cn: '吃早饭了吗？', pinyin: 'chī zǎofàn le ma?', en: 'Have you eaten breakfast?' },
                { cn: '这个很好吃。', pinyin: 'zhège hěn hǎochī.', en: 'This is very delicious.' }
            ]
        },
        {
            id: 'h1m_019', character: '喝', pinyin: 'hē', meaning: 'to drink', hsk: 1, category: 'verbs',
            examples: [
                { cn: '我喝水。', pinyin: 'wǒ hē shuǐ.', en: 'I drink water.' },
                { cn: '你想喝什么？', pinyin: 'nǐ xiǎng hē shénme?', en: 'What do you want to drink?' },
                { cn: '他每天喝咖啡。', pinyin: 'tā měitiān hē kāfēi.', en: 'He drinks coffee every day.' },
                { cn: '请喝茶。', pinyin: 'qǐng hē chá.', en: 'Please drink tea.' },
                { cn: '我喜欢喝果汁。', pinyin: 'wǒ xǐhuān hē guǒzhī.', en: 'I like drinking juice.' },
                { cn: '不要喝酒。', pinyin: 'bùyào hē jiǔ.', en: 'Don\'t drink alcohol.' }
            ]
        },
        {
            id: 'h1m_020', character: '看', pinyin: 'kàn', meaning: 'to look/see/watch', hsk: 1, category: 'verbs',
            examples: [
                { cn: '我看书。', pinyin: 'wǒ kànshū.', en: 'I read a book.' },
                { cn: '我们去看电影。', pinyin: 'wǒmen qù kàn diànyǐng.', en: 'Let\'s go see a movie.' },
                { cn: '你看什么？', pinyin: 'nǐ kàn shénme?', en: 'What are you looking at?' },
                { cn: '他在看电视。', pinyin: 'tā zài kàn diànshì.', en: 'He is watching TV.' },
                { cn: '请看一下。', pinyin: 'qǐng kàn yīxià.', en: 'Please take a look.' },
                { cn: '我看见他了。', pinyin: 'wǒ kànjiàn tā le.', en: 'I saw him.' }
            ]
        },
        {
            id: 'h1m_021', character: '听', pinyin: 'tīng', meaning: 'to listen', hsk: 1, category: 'verbs',
            examples: [
                { cn: '我听音乐。', pinyin: 'wǒ tīng yīnyuè.', en: 'I listen to music.' },
                { cn: '请听我说。', pinyin: 'qǐng tīng wǒ shuō.', en: 'Please listen to me.' },
                { cn: '他听不懂中文。', pinyin: 'tā tīng bù dǒng zhōngwén.', en: 'He doesn\'t understand Chinese.' },
                { cn: '你喜欢听什么歌？', pinyin: 'nǐ xǐhuān tīng shénme gē?', en: 'What songs do you like to listen to?' },
                { cn: '我在听广播。', pinyin: 'wǒ zài tīng guǎngbō.', en: 'I am listening to the radio.' },
                { cn: '请听一下。', pinyin: 'qǐng tīng yīxià.', en: 'Please listen for a moment.' }
            ]
        },
        {
            id: 'h1m_022', character: '说', pinyin: 'shuō', meaning: 'to speak/say', hsk: 1, category: 'verbs',
            examples: [
                { cn: '你说中文。', pinyin: 'nǐ shuō zhōngwén.', en: 'You speak Chinese.' },
                { cn: '他说什么？', pinyin: 'tā shuō shénme?', en: 'What did he say?' },
                { cn: '请说慢一点。', pinyin: 'qǐng shuō màn yīdiǎn.', en: 'Please speak slower.' },
                { cn: '她说得很好。', pinyin: 'tā shuō de hěn hǎo.', en: 'She speaks very well.' },
                { cn: '你说得对。', pinyin: 'nǐ shuō de duì.', en: 'You are right.' },
                { cn: '请再说一遍。', pinyin: 'qǐng zài shuō yī biàn.', en: 'Please say it again.' }
            ]
        },
        {
            id: 'h1m_023', character: '读', pinyin: 'dú', meaning: 'to read', hsk: 1, category: 'verbs',
            examples: [
                { cn: '我读书。', pinyin: 'wǒ dúshū.', en: 'I read books.' },
                { cn: '他在读报纸。', pinyin: 'tā zài dú bàozhǐ.', en: 'He is reading the newspaper.' },
                { cn: '请读这个句子。', pinyin: 'qǐng dú zhège jùzi.', en: 'Please read this sentence.' },
                { cn: '她读大学。', pinyin: 'tā dú dàxué.', en: 'She is in college.' },
                { cn: '读得很好。', pinyin: 'dú de hěn hǎo.', en: 'Read very well.' },
                { cn: '我喜欢读中文书。', pinyin: 'wǒ xǐhuān dú zhōngwén shū.', en: 'I like reading Chinese books.' }
            ]
        },
        {
            id: 'h1m_024', character: '写', pinyin: 'xiě', meaning: 'to write', hsk: 1, category: 'verbs',
            examples: [
                { cn: '我写汉字。', pinyin: 'wǒ xiě hànzì.', en: 'I write Chinese characters.' },
                { cn: '请写下你的名字。', pinyin: 'qǐng xiě xià nǐ de míngzi.', en: 'Please write down your name.' },
                { cn: '他在写信。', pinyin: 'tā zài xiě xìn.', en: 'He is writing a letter.' },
                { cn: '写得很好。', pinyin: 'xiě de hěn hǎo.', en: 'Written very well.' },
                { cn: '请写在这里。', pinyin: 'qǐng xiě zài zhèlǐ.', en: 'Please write here.' },
                { cn: '我会写中文。', pinyin: 'wǒ huì xiě zhōngwén.', en: 'I can write Chinese.' }
            ]
        },
        {
            id: 'h1m_025', character: '做', pinyin: 'zuò', meaning: 'to do/make', hsk: 1, category: 'verbs',
            examples: [
                { cn: '你做什么工作？', pinyin: 'nǐ zuò shénme gōngzuò?', en: 'What work do you do?' },
                { cn: '我在做饭。', pinyin: 'wǒ zài zuòfàn.', en: 'I am cooking.' },
                { cn: '他做作业。', pinyin: 'tā zuò zuòyè.', en: 'He does homework.' },
                { cn: '做什么？', pinyin: 'zuò shénme?', en: 'What are you doing?' },
                { cn: '做得很好。', pinyin: 'zuò de hěn hǎo.', en: 'Done very well.' },
                { cn: '你想做什么？', pinyin: 'nǐ xiǎng zuò shénme?', en: 'What do you want to do?' }
            ]
        },
        {
            id: 'h1m_026', character: '买', pinyin: 'mǎi', meaning: 'to buy', hsk: 1, category: 'verbs',
            examples: [
                { cn: '我买书。', pinyin: 'wǒ mǎi shū.', en: 'I buy books.' },
                { cn: '你想买什么？', pinyin: 'nǐ xiǎng mǎi shénme?', en: 'What do you want to buy?' },
                { cn: '他买了一辆车。', pinyin: 'tā mǎi le yī liàng chē.', en: 'He bought a car.' },
                { cn: '这个多少钱？', pinyin: 'zhège duōshao qián?', en: 'How much is this?' },
                { cn: '我在超市买东西。', pinyin: 'wǒ zài chāoshì mǎi dōngxi.', en: 'I am buying things at the supermarket.' },
                { cn: '买好了。', pinyin: 'mǎi hǎo le.', en: 'Bought.' }
            ]
        },
        {
            id: 'h1m_027', character: '住', pinyin: 'zhù', meaning: 'to live', hsk: 1, category: 'verbs',
            examples: [
                { cn: '我住在北京。', pinyin: 'wǒ zhù zài běijīng.', en: 'I live in Beijing.' },
                { cn: '你住在哪里？', pinyin: 'nǐ zhù zài nǎlǐ?', en: 'Where do you live?' },
                { cn: '他住在酒店。', pinyin: 'tā zhù zài jiǔdiàn.', en: 'He stays at a hotel.' },
                { cn: '住得很好。', pinyin: 'zhù de hěn hǎo.', en: 'Living very well.' },
                { cn: '我住在三楼。', pinyin: 'wǒ zhù zài sān lóu.', en: 'I live on the third floor.' },
                { cn: '这里住很方便。', pinyin: 'zhèlǐ zhù hěn fāngbiàn.', en: 'It\'s convenient to live here.' }
            ]
        },
        {
            id: 'h1m_028', character: '工作', pinyin: 'gōngzuò', meaning: 'to work', hsk: 1, category: 'verbs',
            examples: [
                { cn: '我在银行工作。', pinyin: 'wǒ zài yínháng gōngzuò.', en: 'I work at a bank.' },
                { cn: '他工作很忙。', pinyin: 'tā gōngzuò hěn máng.', en: 'He is very busy with work.' },
                { cn: '找工作。', pinyin: 'zhǎo gōngzuò.', en: 'Look for a job.' },
                { cn: '工作很好。', pinyin: 'gōngzuò hěn hǎo.', en: 'Work is very good.' },
                { cn: '我喜欢我的工作。', pinyin: 'wǒ xǐhuān wǒ de gōngzuò.', en: 'I like my work.' },
                { cn: '他在北京工作。', pinyin: 'tā zài běijīng gōngzuò.', en: 'He works in Beijing.' }
            ]
        },
        {
            id: 'h1m_029', character: '学习', pinyin: 'xuéxí', meaning: 'to study', hsk: 1, category: 'verbs',
            examples: [
                { cn: '我学习中文。', pinyin: 'wǒ xuéxí zhōngwén.', en: 'I study Chinese.' },
                { cn: '他学习很努力。', pinyin: 'tā xuéxí hěn nǔlì.', en: 'He studies very hard.' },
                { cn: '学习汉语。', pinyin: 'xuéxí hànyǔ.', en: 'Learn Chinese.' },
                { cn: '在哪里学习？', pinyin: 'zài nǎlǐ xuéxí?', en: 'Where do you study?' },
                { cn: '我喜欢学习。', pinyin: 'wǒ xǐhuān xuéxí.', en: 'I like studying.' },
                { cn: '学习中文很有意思。', pinyin: 'xuéxí zhōngwén hěn yǒu yìsi.', en: 'Learning Chinese is very interesting.' }
            ]
        },
        {
            id: 'h1m_030', character: '睡觉', pinyin: 'shuìjiào', meaning: 'to sleep', hsk: 1, category: 'verbs',
            examples: [
                { cn: '我十点睡觉。', pinyin: 'wǒ shí diǎn shuìjiào.', en: 'I sleep at ten.' },
                { cn: '他睡觉了。', pinyin: 'tā shuìjiào le.', en: 'He is sleeping.' },
                { cn: '睡个好觉。', pinyin: 'shuì gè hǎo jiào.', en: 'Have a good sleep.' },
                { cn: '我想睡觉。', pinyin: 'wǒ xiǎng shuìjiào.', en: 'I want to sleep.' },
                { cn: '他每天睡八个小时。', pinyin: 'tā měitiān shuì bā gè xiǎoshí.', en: 'He sleeps eight hours every day.' },
                { cn: '早点睡觉。', pinyin: 'zǎo diǎn shuìjiào.', en: 'Go to sleep early.' }
            ]
        },
        {
            id: 'h1m_031', character: '喜欢', pinyin: 'xǐhuān', meaning: 'to like', hsk: 1, category: 'verbs',
            examples: [
                { cn: '我喜欢你。', pinyin: 'wǒ xǐhuān nǐ.', en: 'I like you.' },
                { cn: '我喜欢吃中国菜。', pinyin: 'wǒ xǐhuān chī zhōngguó cài.', en: 'I like eating Chinese food.' },
                { cn: '她喜欢看书。', pinyin: 'tā xǐhuān kànshū.', en: 'She likes reading books.' },
                { cn: '你喜欢什么？', pinyin: 'nǐ xǐhuān shénme?', en: 'What do you like?' },
                { cn: '我很喜欢这个地方。', pinyin: 'wǒ hěn xǐhuān zhège dìfāng.', en: 'I really like this place.' },
                { cn: '他喜欢运动。', pinyin: 'tā xǐhuān yùndòng.', en: 'He likes sports.' }
            ]
        },
        {
            id: 'h1m_032', character: '想', pinyin: 'xiǎng', meaning: 'to think/want', hsk: 1, category: 'verbs',
            examples: [
                { cn: '我想去中国。', pinyin: 'wǒ xiǎng qù zhōngguó.', en: 'I want to go to China.' },
                { cn: '我想喝水。', pinyin: 'wǒ xiǎng hē shuǐ.', en: 'I want to drink water.' },
                { cn: '我想想。', pinyin: 'wǒ xiǎng xiǎng.', en: 'Let me think.' },
                { cn: '你想吃什么？', pinyin: 'nǐ xiǎng chī shénme?', en: 'What do you want to eat?' },
                { cn: '我想回家。', pinyin: 'wǒ xiǎng huíjiā.', en: 'I want to go home.' },
                { cn: '我想学中文。', pinyin: 'wǒ xiǎng xué zhōngwén.', en: 'I want to learn Chinese.' }
            ]
        },
        {
            id: 'h1m_033', character: '知道', pinyin: 'zhīdào', meaning: 'to know', hsk: 1, category: 'verbs',
            examples: [
                { cn: '我知道。', pinyin: 'wǒ zhīdào.', en: 'I know.' },
                { cn: '你知道吗？', pinyin: 'nǐ zhīdào ma?', en: 'Do you know?' },
                { cn: '我不知道。', pinyin: 'wǒ bù zhīdào.', en: 'I don\'t know.' },
                { cn: '他知道这件事。', pinyin: 'tā zhīdào zhè jiàn shì.', en: 'He knows about this matter.' },
                { cn: '你知道他在哪里吗？', pinyin: 'nǐ zhīdào tā zài nǎlǐ ma?', en: 'Do you know where he is?' },
                { cn: '我想知道。', pinyin: 'wǒ xiǎng zhīdào.', en: 'I want to know.' }
            ]
        },

        // ============================
        // BASIC NOUNS
        // ============================
        {
            id: 'h1m_034', character: '人', pinyin: 'rén', meaning: 'person', hsk: 1, category: 'nouns',
            examples: [
                { cn: '中国人。', pinyin: 'zhōngguó rén.', en: 'Chinese person.' },
                { cn: '很多人。', pinyin: 'hěn duō rén.', en: 'Many people.' },
                { cn: '他是好人。', pinyin: 'tā shì hǎo rén.', en: 'He is a good person.' },
                { cn: '一个人。', pinyin: 'yīgè rén.', en: 'One person.' },
                { cn: '那个人是谁？', pinyin: 'nàge rén shì shéi?', en: 'Who is that person?' },
                { cn: '人们很友好。', pinyin: 'rénmen hěn yǒuhǎo.', en: 'People are very friendly.' }
            ]
        },
        {
            id: 'h1m_035', character: '家', pinyin: 'jiā', meaning: 'home/family', hsk: 1, category: 'nouns',
            examples: [
                { cn: '我要回家。', pinyin: 'wǒ yào huíjiā.', en: 'I want to go home.' },
                { cn: '我的家在北京。', pinyin: 'wǒ de jiā zài běijīng.', en: 'My home is in Beijing.' },
                { cn: '欢迎来我家。', pinyin: 'huānyíng lái wǒ jiā.', en: 'Welcome to my home.' },
                { cn: '家里有几个人？', pinyin: 'jiā lǐ yǒu jǐ gè rén?', en: 'How many people are at home?' },
                { cn: '我家有四口人。', pinyin: 'wǒ jiā yǒu sì kǒu rén.', en: 'My family has four people.' },
                { cn: '我想家了。', pinyin: 'wǒ xiǎng jiā le.', en: 'I miss home.' }
            ]
        },
        {
            id: 'h1m_036', character: '学校', pinyin: 'xuéxiào', meaning: 'school', hsk: 1, category: 'nouns',
            examples: [
                { cn: '我去学校。', pinyin: 'wǒ qù xuéxiào.', en: 'I go to school.' },
                { cn: '学校很大。', pinyin: 'xuéxiào hěn dà.', en: 'The school is very big.' },
                { cn: '在学校学习。', pinyin: 'zài xuéxiào xuéxí.', en: 'Study at school.' },
                { cn: '学校在哪里？', pinyin: 'xuéxiào zài nǎlǐ?', en: 'Where is the school?' },
                { cn: '我喜欢我的学校。', pinyin: 'wǒ xǐhuān wǒ de xuéxiào.', en: 'I like my school.' },
                { cn: '学校离我家很近。', pinyin: 'xuéxiào lí wǒ jiā hěn jìn.', en: 'The school is very close to my home.' }
            ]
        },
        {
            id: 'h1m_037', character: '老师', pinyin: 'lǎoshī', meaning: 'teacher', hsk: 1, category: 'nouns',
            examples: [
                { cn: '我的老师很好。', pinyin: 'wǒ de lǎoshī hěn hǎo.', en: 'My teacher is very good.' },
                { cn: '老师教中文。', pinyin: 'lǎoshī jiāo zhōngwén.', en: 'The teacher teaches Chinese.' },
                { cn: '王老师是中国人。', pinyin: 'wáng lǎoshī shì zhōngguó rén.', en: 'Teacher Wang is Chinese.' },
                { cn: '谢谢老师。', pinyin: 'xièxiè lǎoshī.', en: 'Thank you, teacher.' },
                { cn: '老师好！', pinyin: 'lǎoshī hǎo!', en: 'Hello, teacher!' },
                { cn: '他是我的老师。', pinyin: 'tā shì wǒ de lǎoshī.', en: 'He is my teacher.' }
            ]
        },
        {
            id: 'h1m_038', character: '学生', pinyin: 'xuésheng', meaning: 'student', hsk: 1, category: 'nouns',
            examples: [
                { cn: '我是学生。', pinyin: 'wǒ shì xuésheng.', en: 'I am a student.' },
                { cn: '学生很多。', pinyin: 'xuésheng hěn duō.', en: 'There are many students.' },
                { cn: '他是好学生。', pinyin: 'tā shì hǎo xuésheng.', en: 'He is a good student.' },
                { cn: '学生在哪里？', pinyin: 'xuésheng zài nǎlǐ?', en: 'Where are the students?' },
                { cn: '我是大学生。', pinyin: 'wǒ shì dàxuésheng.', en: 'I am a college student.' },
                { cn: '学生们很努力。', pinyin: 'xuéshengmen hěn nǔlì.', en: 'The students work very hard.' }
            ]
        },
        {
            id: 'h1m_039', character: '朋友', pinyin: 'péngyǒu', meaning: 'friend', hsk: 1, category: 'nouns',
            examples: [
                { cn: '他是我的朋友。', pinyin: 'tā shì wǒ de péngyǒu.', en: 'He is my friend.' },
                { cn: '我们是好朋友。', pinyin: 'wǒmen shì hǎo péngyǒu.', en: 'We are good friends.' },
                { cn: '朋友来了。', pinyin: 'péngyǒu lái le.', en: 'The friend has come.' },
                { cn: '交朋友。', pinyin: 'jiāo péngyǒu.', en: 'Make friends.' },
                { cn: '我有很多朋友。', pinyin: 'wǒ yǒu hěn duō péngyǒu.', en: 'I have many friends.' },
                { cn: '她是我的好朋友。', pinyin: 'tā shì wǒ de hǎo péngyǒu.', en: 'She is my good friend.' }
            ]
        },
        {
            id: 'h1m_040', character: '爸爸', pinyin: 'bàba', meaning: 'father', hsk: 1, category: 'nouns',
            examples: [
                { cn: '我爸爸是医生。', pinyin: 'wǒ bàba shì yīshēng.', en: 'My father is a doctor.' },
                { cn: '爸爸很忙。', pinyin: 'bàba hěn máng.', en: 'Dad is very busy.' },
                { cn: '爸爸在家。', pinyin: 'bàba zài jiā.', en: 'Dad is at home.' },
                { cn: '我爱爸爸。', pinyin: 'wǒ ài bàba.', en: 'I love dad.' },
                { cn: '爸爸做饭很好吃。', pinyin: 'bàba zuòfàn hěn hǎochī.', en: 'Dad\'s cooking is delicious.' },
                { cn: '爸爸去工作了。', pinyin: 'bàba qù gōngzuò le.', en: 'Dad went to work.' }
            ]
        },
        {
            id: 'h1m_041', character: '妈妈', pinyin: 'māma', meaning: 'mother', hsk: 1, category: 'nouns',
            examples: [
                { cn: '我妈妈很漂亮。', pinyin: 'wǒ māma hěn piàoliang.', en: 'My mother is very beautiful.' },
                { cn: '妈妈做饭很好吃。', pinyin: 'māma zuòfàn hěn hǎochī.', en: 'Mom\'s cooking is delicious.' },
                { cn: '妈妈在家。', pinyin: 'māma zài jiā.', en: 'Mom is at home.' },
                { cn: '我爱妈妈。', pinyin: 'wǒ ài māma.', en: 'I love mom.' },
                { cn: '妈妈是老师。', pinyin: 'māma shì lǎoshī.', en: 'Mom is a teacher.' },
                { cn: '妈妈很辛苦。', pinyin: 'māma hěn xīnkǔ.', en: 'Mom works very hard.' }
            ]
        },
        {
            id: 'h1m_042', character: '水', pinyin: 'shuǐ', meaning: 'water', hsk: 1, category: 'nouns',
            examples: [
                { cn: '请喝水。', pinyin: 'qǐng hē shuǐ.', en: 'Please drink water.' },
                { cn: '水很热。', pinyin: 'shuǐ hěn rè.', en: 'The water is very hot.' },
                { cn: '我要一杯水。', pinyin: 'wǒ yào yī bēi shuǐ.', en: 'I want a glass of water.' },
                { cn: '这里有水吗？', pinyin: 'zhèlǐ yǒu shuǐ ma?', en: 'Is there water here?' },
                { cn: '我喜欢喝热水。', pinyin: 'wǒ xǐhuān hē rè shuǐ.', en: 'I like drinking hot water.' },
                { cn: '水很重要。', pinyin: 'shuǐ hěn zhòngyào.', en: 'Water is very important.' }
            ]
        },
        {
            id: 'h1m_043', character: '饭', pinyin: 'fàn', meaning: 'rice/meal', hsk: 1, category: 'nouns',
            examples: [
                { cn: '吃饭了吗？', pinyin: 'chīfàn le ma?', en: 'Have you eaten?' },
                { cn: '我做饭。', pinyin: 'wǒ zuòfàn.', en: 'I cook.' },
                { cn: '饭很好吃。', pinyin: 'fàn hěn hǎochī.', en: 'The food is delicious.' },
                { cn: '一起吃饭。', pinyin: 'yīqǐ chīfàn.', en: 'Eat together.' },
                { cn: '早饭吃什么？', pinyin: 'zǎofàn chī shénme?', en: 'What to eat for breakfast?' },
                { cn: '我做了晚饭。', pinyin: 'wǒ zuò le wǎnfàn.', en: 'I made dinner.' }
            ]
        },
        {
            id: 'h1m_044', character: '书', pinyin: 'shū', meaning: 'book', hsk: 1, category: 'nouns',
            examples: [
                { cn: '这本书很好。', pinyin: 'zhè běn shū hěn hǎo.', en: 'This book is very good.' },
                { cn: '我喜欢看书。', pinyin: 'wǒ xǐhuān kànshū.', en: 'I like reading books.' },
                { cn: '请给我书。', pinyin: 'qǐng gěi wǒ shū.', en: 'Please give me the book.' },
                { cn: '书在哪里？', pinyin: 'shū zài nǎlǐ?', en: 'Where is the book?' },
                { cn: '我买了一本书。', pinyin: 'wǒ mǎi le yī běn shū.', en: 'I bought a book.' },
                { cn: '他在看书。', pinyin: 'tā zài kànshū.', en: 'He is reading a book.' }
            ]
        },
        {
            id: 'h1m_045', character: '钱', pinyin: 'qián', meaning: 'money', hsk: 1, category: 'nouns',
            examples: [
                { cn: '多少钱？', pinyin: 'duōshao qián?', en: 'How much money?' },
                { cn: '我没有钱。', pinyin: 'wǒ méiyǒu qián.', en: 'I don\'t have money.' },
                { cn: '给你钱。', pinyin: 'gěi nǐ qián.', en: 'Here is the money.' },
                { cn: '很贵，要很多钱。', pinyin: 'hěn guì, yào hěn duō qián.', en: 'Very expensive, needs a lot of money.' },
                { cn: '我需要钱。', pinyin: 'wǒ xūyào qián.', en: 'I need money.' },
                { cn: '这是你的钱。', pinyin: 'zhè shì nǐ de qián.', en: 'This is your money.' }
            ]
        },

        // ============================
        // ADJECTIVES
        // ============================
        {
            id: 'h1m_046', character: '大', pinyin: 'dà', meaning: 'big', hsk: 1, category: 'adjectives',
            examples: [
                { cn: '这个很大。', pinyin: 'zhège hěn dà.', en: 'This is very big.' },
                { cn: '大城市。', pinyin: 'dà chéngshì.', en: 'Big city.' },
                { cn: '他很高大。', pinyin: 'tā hěn gāodà.', en: 'He is very tall.' },
                { cn: '房子很大。', pinyin: 'fángzi hěn dà.', en: 'The house is very big.' },
                { cn: '很大的苹果。', pinyin: 'hěn dà de píngguǒ.', en: 'A very big apple.' },
                { cn: '大学。', pinyin: 'dàxué.', en: 'University.' }
            ]
        },
        {
            id: 'h1m_047', character: '小', pinyin: 'xiǎo', meaning: 'small', hsk: 1, category: 'adjectives',
            examples: [
                { cn: '这个很小。', pinyin: 'zhège hěn xiǎo.', en: 'This is very small.' },
                { cn: '小孩子。', pinyin: 'xiǎo háizi.', en: 'Small child.' },
                { cn: '猫很小。', pinyin: 'māo hěn xiǎo.', en: 'The cat is very small.' },
                { cn: '小声一点。', pinyin: 'xiǎoshēng yīdiǎn.', en: 'Quieter.' },
                { cn: '很小的狗。', pinyin: 'hěn xiǎo de gǒu.', en: 'A very small dog.' },
                { cn: '小学。', pinyin: 'xiǎoxué.', en: 'Elementary school.' }
            ]
        },
        {
            id: 'h1m_048', character: '好', pinyin: 'hǎo', meaning: 'good', hsk: 1, category: 'adjectives',
            examples: [
                { cn: '很好！', pinyin: 'hěn hǎo!', en: 'Very good!' },
                { cn: '你好。', pinyin: 'nǐ hǎo.', en: 'Hello.' },
                { cn: '好吃。', pinyin: 'hǎochī.', en: 'Delicious.' },
                { cn: '好看。', pinyin: 'hǎokàn.', en: 'Good-looking.' },
                { cn: '他是一个好人。', pinyin: 'tā shì yīgè hǎo rén.', en: 'He is a good person.' },
                { cn: '今天天气很好。', pinyin: 'jīntiān tiānqì hěn hǎo.', en: 'The weather is very good today.' }
            ]
        },
        {
            id: 'h1m_049', character: '热', pinyin: 'rè', meaning: 'hot', hsk: 1, category: 'adjectives',
            examples: [
                { cn: '今天很热。', pinyin: 'jīntiān hěn rè.', en: 'Today is very hot.' },
                { cn: '水很热。', pinyin: 'shuǐ hěn rè.', en: 'The water is very hot.' },
                { cn: '天气很热。', pinyin: 'tiānqì hěn rè.', en: 'The weather is very hot.' },
                { cn: '热死了。', pinyin: 'rè sǐ le.', en: 'It\'s extremely hot.' },
                { cn: '很热的夏天。', pinyin: 'hěn rè de xiàtiān.', en: 'A very hot summer.' },
                { cn: '这个菜很热。', pinyin: 'zhège cài hěn rè.', en: 'This dish is very hot.' }
            ]
        },
        {
            id: 'h1m_050', character: '冷', pinyin: 'lěng', meaning: 'cold', hsk: 1, category: 'adjectives',
            examples: [
                { cn: '今天很冷。', pinyin: 'jīntiān hěn lěng.', en: 'Today is very cold.' },
                { cn: '水很冷。', pinyin: 'shuǐ hěn lěng.', en: 'The water is very cold.' },
                { cn: '冬天很冷。', pinyin: 'dōngtiān hěn lěng.', en: 'Winter is very cold.' },
                { cn: '我很冷。', pinyin: 'wǒ hěn lěng.', en: 'I am very cold.' },
                { cn: '很冷的天气。', pinyin: 'hěn lěng de tiānqì.', en: 'Very cold weather.' },
                { cn: '冷饮。', pinyin: 'lěngyǐn.', en: 'Cold drink.' }
            ]
        },
        {
            id: 'h1m_051', character: '高兴', pinyin: 'gāoxìng', meaning: 'happy', hsk: 1, category: 'adjectives',
            examples: [
                { cn: '我很高兴。', pinyin: 'wǒ hěn gāoxìng.', en: 'I am very happy.' },
                { cn: '很高兴认识你。', pinyin: 'hěn gāoxìng rènshi nǐ.', en: 'Nice to meet you.' },
                { cn: '他很高兴。', pinyin: 'tā hěn gāoxìng.', en: 'He is very happy.' },
                { cn: '不高兴。', pinyin: 'bù gāoxìng.', en: 'Unhappy.' },
                { cn: '今天我很高兴。', pinyin: 'jīntiān wǒ hěn gāoxìng.', en: 'I am very happy today.' },
                { cn: '她高兴地笑了。', pinyin: 'tā gāoxìng de xiào le.', en: 'She smiled happily.' }
            ]
        },
        {
            id: 'h1m_052', character: '漂亮', pinyin: 'piàoliang', meaning: 'beautiful', hsk: 1, category: 'adjectives',
            examples: [
                { cn: '她很漂亮。', pinyin: 'tā hěn piàoliang.', en: 'She is very beautiful.' },
                { cn: '这个很漂亮。', pinyin: 'zhège hěn piàoliang.', en: 'This is very beautiful.' },
                { cn: '花很漂亮。', pinyin: 'huā hěn piàoliang.', en: 'The flowers are very beautiful.' },
                { cn: '衣服很漂亮。', pinyin: 'yīfu hěn piàoliang.', en: 'The clothes are very beautiful.' },
                { cn: '这个地方很漂亮。', pinyin: 'zhège dìfāng hěn piàoliang.', en: 'This place is very beautiful.' },
                { cn: '非常漂亮。', pinyin: 'fēicháng piàoliang.', en: 'Very beautiful.' }
            ]
        },
        {
            id: 'h1m_053', character: '忙', pinyin: 'máng', meaning: 'busy', hsk: 1, category: 'adjectives',
            examples: [
                { cn: '我很忙。', pinyin: 'wǒ hěn máng.', en: 'I am very busy.' },
                { cn: '工作很忙。', pinyin: 'gōngzuò hěn máng.', en: 'Work is very busy.' },
                { cn: '他很忙。', pinyin: 'tā hěn máng.', en: 'He is very busy.' },
                { cn: '不忙。', pinyin: 'bù máng.', en: 'Not busy.' },
                { cn: '最近很忙。', pinyin: 'zuìjìn hěn máng.', en: 'Very busy recently.' },
                { cn: '忙吗？', pinyin: 'máng ma?', en: 'Are you busy?' }
            ]
        },
        {
            id: 'h1m_054', character: '累', pinyin: 'lèi', meaning: 'tired', hsk: 1, category: 'adjectives',
            examples: [
                { cn: '我很累。', pinyin: 'wǒ hěn lèi.', en: 'I am very tired.' },
                { cn: '工作很累。', pinyin: 'gōngzuò hěn lèi.', en: 'Work is very tiring.' },
                { cn: '走路很累。', pinyin: 'zǒulù hěn lèi.', en: 'Walking is very tiring.' },
                { cn: '累了就休息。', pinyin: 'lèi le jiù xiūxi.', en: 'Rest when tired.' },
                { cn: '今天很累。', pinyin: 'jīntiān hěn lèi.', en: 'Very tired today.' },
                { cn: '不累。', pinyin: 'bù lèi.', en: 'Not tired.' }
            ]
        },
        {
            id: 'h1m_055', character: '贵', pinyin: 'guì', meaning: 'expensive', hsk: 1, category: 'adjectives',
            examples: [
                { cn: '太贵了！', pinyin: 'tài guì le!', en: 'Too expensive!' },
                { cn: '这个很贵。', pinyin: 'zhège hěn guì.', en: 'This is very expensive.' },
                { cn: '不贵。', pinyin: 'bù guì.', en: 'Not expensive.' },
                { cn: '贵不贵？', pinyin: 'guì bù guì?', en: 'Is it expensive?' },
                { cn: '很贵的东西。', pinyin: 'hěn guì de dōngxi.', en: 'Very expensive things.' },
                { cn: '这个太贵了。', pinyin: 'zhège tài guì le.', en: 'This is too expensive.' }
            ]
        },
        {
            id: 'h1m_056', character: '便宜', pinyin: 'piányi', meaning: 'cheap', hsk: 1, category: 'adjectives',
            examples: [
                { cn: '这个很便宜。', pinyin: 'zhège hěn piányi.', en: 'This is very cheap.' },
                { cn: '便宜一点。', pinyin: 'piányi yīdiǎn.', en: 'A little cheaper.' },
                { cn: '不便宜。', pinyin: 'bù piányi.', en: 'Not cheap.' },
                { cn: '便宜吗？', pinyin: 'piányi ma?', en: 'Is it cheap?' },
                { cn: '很便宜的东西。', pinyin: 'hěn piányi de dōngxi.', en: 'Very cheap things.' },
                { cn: '这个很便宜。', pinyin: 'zhège hěn piányi.', en: 'This is very cheap.' }
            ]
        },
        {
            id: 'h1m_057', character: '快', pinyin: 'kuài', meaning: 'fast', hsk: 1, category: 'adjectives',
            examples: [
                { cn: '他跑得很快。', pinyin: 'tā pǎo de hěn kuài.', en: 'He runs very fast.' },
                { cn: '快一点！', pinyin: 'kuài yīdiǎn!', en: 'Faster!' },
                { cn: '很快。', pinyin: 'hěn kuài.', en: 'Very fast.' },
                { cn: '快走。', pinyin: 'kuài zǒu.', en: 'Hurry up.' },
                { cn: '时间过得很快。', pinyin: 'shíjiān guò de hěn kuài.', en: 'Time passes very fast.' },
                { cn: '吃饭很快。', pinyin: 'chīfàn hěn kuài.', en: 'Eating very fast.' }
            ]
        },
        {
            id: 'h1m_058', character: '慢', pinyin: 'màn', meaning: 'slow', hsk: 1, category: 'adjectives',
            examples: [
                { cn: '请说慢一点。', pinyin: 'qǐng shuō màn yīdiǎn.', en: 'Please speak slower.' },
                { cn: '慢走。', pinyin: 'màn zǒu.', en: 'Take care.' },
                { cn: '很慢。', pinyin: 'hěn màn.', en: 'Very slow.' },
                { cn: '慢一点。', pinyin: 'màn yīdiǎn.', en: 'Slower.' },
                { cn: '他走路很慢。', pinyin: 'tā zǒulù hěn màn.', en: 'He walks very slowly.' },
                { cn: '不要太慢。', pinyin: 'bùyào tài màn.', en: 'Don\'t be too slow.' }
            ]
        },

        // ============================
        // TIME WORDS
        // ============================
        {
            id: 'h1m_059', character: '今天', pinyin: 'jīntiān', meaning: 'today', hsk: 1, category: 'time',
            examples: [
                { cn: '今天天气很好。', pinyin: 'jīntiān tiānqì hěn hǎo.', en: 'The weather is very good today.' },
                { cn: '今天我很忙。', pinyin: 'jīntiān wǒ hěn máng.', en: 'I am very busy today.' },
                { cn: '今天是星期一。', pinyin: 'jīntiān shì xīngqī yī.', en: 'Today is Monday.' },
                { cn: '今天几号？', pinyin: 'jīntiān jǐ hào?', en: 'What is the date today?' },
                { cn: '今天我去学校。', pinyin: 'jīntiān wǒ qù xuéxiào.', en: 'I go to school today.' },
                { cn: '今天很开心。', pinyin: 'jīntiān hěn kāixīn.', en: 'Very happy today.' }
            ]
        },
        {
            id: 'h1m_060', character: '明天', pinyin: 'míngtiān', meaning: 'tomorrow', hsk: 1, category: 'time',
            examples: [
                { cn: '明天见。', pinyin: 'míngtiān jiàn.', en: 'See you tomorrow.' },
                { cn: '明天有课。', pinyin: 'míngtiān yǒu kè.', en: 'There is class tomorrow.' },
                { cn: '明天去公园。', pinyin: 'míngtiān qù gōngyuán.', en: 'Go to the park tomorrow.' },
                { cn: '明天天气怎么样？', pinyin: 'míngtiān tiānqì zěnmeyàng?', en: 'How will the weather be tomorrow?' },
                { cn: '明天我很忙。', pinyin: 'míngtiān wǒ hěn máng.', en: 'I will be very busy tomorrow.' },
                { cn: '明天来我家。', pinyin: 'míngtiān lái wǒ jiā.', en: 'Come to my home tomorrow.' }
            ]
        },
        {
            id: 'h1m_061', character: '昨天', pinyin: 'zuótiān', meaning: 'yesterday', hsk: 1, category: 'time',
            examples: [
                { cn: '昨天很忙。', pinyin: 'zuótiān hěn máng.', en: 'Yesterday was very busy.' },
                { cn: '昨天我去超市了。', pinyin: 'zuótiān wǒ qù chāoshì le.', en: 'I went to the supermarket yesterday.' },
                { cn: '昨天天气不好。', pinyin: 'zuótiān tiānqì bù hǎo.', en: 'The weather was bad yesterday.' },
                { cn: '昨天是我的生日。', pinyin: 'zuótiān shì wǒ de shēngrì.', en: 'Yesterday was my birthday.' },
                { cn: '昨天我见了朋友。', pinyin: 'zuótiān wǒ jiàn le péngyǒu.', en: 'I met a friend yesterday.' },
                { cn: '昨天很开心。', pinyin: 'zuótiān hěn kāixīn.', en: 'Very happy yesterday.' }
            ]
        },

        // ============================
        // OTHER BASIC WORDS
        // ============================
        {
            id: 'h1m_062', character: '不', pinyin: 'bù', meaning: 'not', hsk: 1, category: 'other',
            examples: [
                { cn: '不好。', pinyin: 'bù hǎo.', en: 'Not good.' },
                { cn: '不去。', pinyin: 'bù qù.', en: 'Not going.' },
                { cn: '不知道。', pinyin: 'bù zhīdào.', en: 'Don\'t know.' },
                { cn: '不是。', pinyin: 'bù shì.', en: 'No.' },
                { cn: '不喜欢。', pinyin: 'bù xǐhuān.', en: 'Don\'t like.' },
                { cn: '不行。', pinyin: 'bù xíng.', en: 'Not okay.' }
            ]
        },
        {
            id: 'h1m_063', character: '很', pinyin: 'hěn', meaning: 'very', hsk: 1, category: 'other',
            examples: [
                { cn: '很好。', pinyin: 'hěn hǎo.', en: 'Very good.' },
                { cn: '很大。', pinyin: 'hěn dà.', en: 'Very big.' },
                { cn: '很多。', pinyin: 'hěn duō.', en: 'Very many.' },
                { cn: '很快。', pinyin: 'hěn kuài.', en: 'Very fast.' },
                { cn: '很高兴。', pinyin: 'hěn gāoxìng.', en: 'Very happy.' },
                { cn: '很漂亮。', pinyin: 'hěn piàoliang.', en: 'Very beautiful.' }
            ]
        },
        {
            id: 'h1m_064', character: '太', pinyin: 'tài', meaning: 'too', hsk: 1, category: 'other',
            examples: [
                { cn: '太好了！', pinyin: 'tài hǎo le!', en: 'Great!' },
                { cn: '太贵了。', pinyin: 'tài guì le.', en: 'Too expensive.' },
                { cn: '太多了。', pinyin: 'tài duō le.', en: 'Too much.' },
                { cn: '太热了。', pinyin: 'tài rè le.', en: 'Too hot.' },
                { cn: '太好了！', pinyin: 'tài hǎo le!', en: 'Wonderful!' },
                { cn: '太难了。', pinyin: 'tài nán le.', en: 'Too difficult.' }
            ]
        },
        {
            id: 'h1m_065', character: '都', pinyin: 'dōu', meaning: 'all', hsk: 1, category: 'other',
            examples: [
                { cn: '我们都去。', pinyin: 'wǒmen dōu qù.', en: 'We all go.' },
                { cn: '都是学生。', pinyin: 'dōu shì xuésheng.', en: 'All are students.' },
                { cn: '都喜欢。', pinyin: 'dōu xǐhuān.', en: 'All like it.' },
                { cn: '都不知道。', pinyin: 'dōu bù zhīdào.', en: 'None of them know.' },
                { cn: '大家都好。', pinyin: 'dàjiā dōu hǎo.', en: 'Everyone is good.' },
                { cn: '都是中国人。', pinyin: 'dōu shì zhōngguó rén.', en: 'All are Chinese.' }
            ]
        },
        {
            id: 'h1m_066', character: '也', pinyin: 'yě', meaning: 'also', hsk: 1, category: 'other',
            examples: [
                { cn: '我也去。', pinyin: 'wǒ yě qù.', en: 'I also go.' },
                { cn: '也是。', pinyin: 'yě shì.', en: 'Also yes.' },
                { cn: '也很好。', pinyin: 'yě hěn hǎo.', en: 'Also very good.' },
                { cn: '也不知道。', pinyin: 'yě bù zhīdào.', en: 'Also don\'t know.' },
                { cn: '我也是学生。', pinyin: 'wǒ yě shì xuésheng.', en: 'I am also a student.' },
                { cn: '她也很漂亮。', pinyin: 'tā yě hěn piàoliang.', en: 'She is also very beautiful.' }
            ]
        },
        {
            id: 'h1m_067', character: '在', pinyin: 'zài', meaning: 'at/in', hsk: 1, category: 'other',
            examples: [
                { cn: '我在家。', pinyin: 'wǒ zài jiā.', en: 'I am at home.' },
                { cn: '他在学校。', pinyin: 'tā zài xuéxiào.', en: 'He is at school.' },
                { cn: '书在桌子上。', pinyin: 'shū zài zhuōzi shàng.', en: 'The book is on the table.' },
                { cn: '他在工作。', pinyin: 'tā zài gōngzuò.', en: 'He is working.' },
                { cn: '我在吃饭。', pinyin: 'wǒ zài chīfàn.', en: 'I am eating.' },
                { cn: '她在北京。', pinyin: 'tā zài běijīng.', en: 'She is in Beijing.' }
            ]
        },
        {
            id: 'h1m_068', character: '的', pinyin: 'de', meaning: 'possessive particle', hsk: 1, category: 'other',
            examples: [
                { cn: '我的书。', pinyin: 'wǒ de shū.', en: 'My book.' },
                { cn: '他的名字。', pinyin: 'tā de míngzi.', en: 'His name.' },
                { cn: '中国的朋友。', pinyin: 'zhōngguó de péngyǒu.', en: 'Chinese friend.' },
                { cn: '好的。', pinyin: 'hǎo de.', en: 'Okay.' },
                { cn: '很漂亮的衣服。', pinyin: 'hěn piàoliang de yīfu.', en: 'Very beautiful clothes.' },
                { cn: '我的家。', pinyin: 'wǒ de jiā.', en: 'My home.' }
            ]
        },
        {
            id: 'h1m_069', character: '了', pinyin: 'le', meaning: 'completed action', hsk: 1, category: 'other',
            examples: [
                { cn: '我吃了。', pinyin: 'wǒ chī le.', en: 'I have eaten.' },
                { cn: '他走了。', pinyin: 'tā zǒu le.', en: 'He has left.' },
                { cn: '下雨了。', pinyin: 'xiàyǔ le.', en: 'It\'s raining.' },
                { cn: '好了。', pinyin: 'hǎo le.', en: 'Done.' },
                { cn: '我买了书。', pinyin: 'wǒ mǎi le shū.', en: 'I bought a book.' },
                { cn: '她来了。', pinyin: 'tā lái le.', en: 'She has come.' }
            ]
        },
        {
            id: 'h1m_070', character: '吗', pinyin: 'ma', meaning: 'question particle', hsk: 1, category: 'other',
            examples: [
                { cn: '你好吗？', pinyin: 'nǐ hǎo ma?', en: 'How are you?' },
                { cn: '是吗？', pinyin: 'shì ma?', en: 'Is that so?' },
                { cn: '去吗？', pinyin: 'qù ma?', en: 'Are you going?' },
                { cn: '好吃吗？', pinyin: 'hǎochī ma?', en: 'Is it delicious?' },
                { cn: '你忙吗？', pinyin: 'nǐ máng ma?', en: 'Are you busy?' },
                { cn: '他是中国人吗？', pinyin: 'tā shì zhōngguó rén ma?', en: 'Is he Chinese?' }
            ]
        },
        {
            id: 'h1m_071', character: '和', pinyin: 'hé', meaning: 'and', hsk: 1, category: 'other',
            examples: [
                { cn: '你和我。', pinyin: 'nǐ hé wǒ.', en: 'You and I.' },
                { cn: '爸爸和妈妈。', pinyin: 'bàba hé māma.', en: 'Dad and mom.' },
                { cn: '老师和学生。', pinyin: 'lǎoshī hé xuésheng.', en: 'Teacher and student.' },
                { cn: '中国和美国。', pinyin: 'zhōngguó hé měiguó.', en: 'China and America.' },
                { cn: '书和笔。', pinyin: 'shū hé bǐ.', en: 'Book and pen.' },
                { cn: '吃饭和喝水。', pinyin: 'chīfàn hé hē shuǐ.', en: 'Eat and drink.' }
            ]
        },
        {
            id: 'h1m_072', character: '请', pinyin: 'qǐng', meaning: 'please', hsk: 1, category: 'other',
            examples: [
                { cn: '请坐。', pinyin: 'qǐng zuò.', en: 'Please sit.' },
                { cn: '请喝水。', pinyin: 'qǐng hē shuǐ.', en: 'Please drink water.' },
                { cn: '请帮我。', pinyin: 'qǐng bāng wǒ.', en: 'Please help me.' },
                { cn: '请说中文。', pinyin: 'qǐng shuō zhōngwén.', en: 'Please speak Chinese.' },
                { cn: '请进。', pinyin: 'qǐng jìn.', en: 'Please come in.' },
                { cn: '请等一下。', pinyin: 'qǐng děng yīxià.', en: 'Please wait a moment.' }
            ]
        },
        {
            id: 'h1m_073', character: '谢谢', pinyin: 'xièxie', meaning: 'thank you', hsk: 1, category: 'other',
            examples: [
                { cn: '谢谢你。', pinyin: 'xièxiè nǐ.', en: 'Thank you.' },
                { cn: '谢谢老师。', pinyin: 'xièxiè lǎoshī.', en: 'Thank you, teacher.' },
                { cn: '非常感谢。', pinyin: 'fēicháng gǎnxiè.', en: 'Thank you very much.' },
                { cn: '不用谢。', pinyin: 'bùyòng xiè.', en: 'You\'re welcome.' },
                { cn: '谢谢你的帮助。', pinyin: 'xièxiè nǐ de bāngzhù.', en: 'Thank you for your help.' },
                { cn: '谢谢大家。', pinyin: 'xièxiè dàjiā.', en: 'Thank you everyone.' }
            ]
        },
        {
            id: 'h1m_074', character: '对不起', pinyin: 'duìbuqǐ', meaning: 'sorry', hsk: 1, category: 'other',
            examples: [
                { cn: '对不起！', pinyin: 'duìbuqǐ!', en: 'I\'m sorry!' },
                { cn: '对不起，我迟到了。', pinyin: 'duìbuqǐ, wǒ chídào le.', en: 'Sorry, I\'m late.' },
                { cn: '对不起，请再说一遍。', pinyin: 'duìbuqǐ, qǐng zài shuō yī biàn.', en: 'Sorry, please say it again.' },
                { cn: '没关系。', pinyin: 'méiguānxi.', en: 'It doesn\'t matter.' },
                { cn: '真的很对不起。', pinyin: 'zhēn de hěn duìbuqǐ.', en: 'I\'m really very sorry.' },
                { cn: '对不起，打扰了。', pinyin: 'duìbuqǐ, dǎrǎo le.', en: 'Sorry to bother you.' }
            ]
        },
        {
            id: 'h1m_075', character: '没关系', pinyin: 'méiguānxi', meaning: 'it\'s okay', hsk: 1, category: 'other',
            examples: [
                { cn: '没关系。', pinyin: 'méiguānxi.', en: 'It doesn\'t matter.' },
                { cn: '没关系，不用道歉。', pinyin: 'méiguānxi, bùyòng dàoqiàn.', en: 'It\'s okay, no need to apologize.' },
                { cn: '没关系，我理解。', pinyin: 'méiguānxi, wǒ lǐjiě.', en: 'It\'s okay, I understand.' },
                { cn: '真的没关系。', pinyin: 'zhēn de méiguānxi.', en: 'It really doesn\'t matter.' },
                { cn: '没关系，下次注意。', pinyin: 'méiguānxi, xià cì zhùyì.', en: 'It\'s okay, be careful next time.' },
                { cn: '没关系，我们还是朋友。', pinyin: 'méiguānxi, wǒmen háishì péngyǒu.', en: 'It\'s okay, we are still friends.' }
            ]
        }
    ],

    // Get total count
    get count() {
        return this.words.length;
    },

    // Get word by ID
    getById(id) {
        return this.words.find(w => w.id === id);
    },

    // Get word by character
    getByCharacter(character) {
        return this.words.find(w => w.character === character);
    },

    // Get random words
    getRandom(count = 10) {
        return Utils.randomItems(this.words, count);
    },

    // Get words by category
    getByCategory(category) {
        return this.words.filter(w => w.category === category);
    },

    // Search words
    search(query) {
        const lowerQuery = query.toLowerCase();
        return this.words.filter(w =>
            w.character.includes(query) ||
            w.pinyin.toLowerCase().includes(lowerQuery) ||
            w.meaning.toLowerCase().includes(lowerQuery)
        );
    }
};

window.HSK1Massive = HSK1Massive;

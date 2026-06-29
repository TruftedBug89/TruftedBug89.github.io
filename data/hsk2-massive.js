// ============================================
// CHINESE MASTER - HSK 2 MASSIVE EXAMPLES DATABASE
// Every word has 4-6 example sentences
// ALL SIMPLIFIED CHINESE with Pinyin + English
// ============================================

const HSK2Massive = {
    words: [
        // ============================
        // ADVERBS
        // ============================
        {
            id: 'h2m_001', character: '就', pinyin: 'jiù', meaning: 'then/just', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '我就来。', pinyin: 'wǒ jiù lái.', en: 'I\'m coming right now.' },
                { cn: '吃完饭就走。', pinyin: 'chī wán fàn jiù zǒu.', en: 'Leave right after eating.' },
                { cn: '就是这个。', pinyin: 'jiù shì zhège.', en: 'This is it.' },
                { cn: '我就不去。', pinyin: 'wǒ jiù bù qù.', en: 'I just won\'t go.' },
                { cn: '他就是我的老师。', pinyin: 'tā jiù shì wǒ de lǎoshī.', en: 'He is my teacher.' },
                { cn: '马上就来。', pinyin: 'mǎshàng jiù lái.', en: 'Coming right away.' }
            ]
        },
        {
            id: 'h2m_002', character: '还', pinyin: 'hái', meaning: 'still/also', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '我还要。', pinyin: 'wǒ hái yào.', en: 'I also want.' },
                { cn: '他还在工作。', pinyin: 'tā hái zài gōngzuò.', en: 'He is still working.' },
                { cn: '还有别的吗？', pinyin: 'hái yǒu biéde ma?', en: 'Is there anything else?' },
                { cn: '还是不行。', pinyin: 'háishì bù xíng.', en: 'Still not working.' },
                { cn: '我还想去。', pinyin: 'wǒ hái xiǎng qù.', en: 'I still want to go.' },
                { cn: '还是你厉害。', pinyin: 'háishì nǐ lìhai.', en: 'You are still more impressive.' }
            ]
        },
        {
            id: 'h2m_003', character: '已经', pinyin: 'yǐjīng', meaning: 'already', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '我已经吃了。', pinyin: 'wǒ yǐjīng chī le.', en: 'I have already eaten.' },
                { cn: '他已经走了。', pinyin: 'tā yǐjīng zǒu le.', en: 'He has already left.' },
                { cn: '已经十点了。', pinyin: 'yǐjīng shí diǎn le.', en: 'It\'s already ten o\'clock.' },
                { cn: '已经晚了。', pinyin: 'yǐjīng wǎn le.', en: 'It\'s already late.' },
                { cn: '我已经学了两年中文。', pinyin: 'wǒ yǐjīng xué le liǎng nián zhōngwén.', en: 'I have already studied Chinese for two years.' },
                { cn: '已经完成了。', pinyin: 'yǐjīng wánchéng le.', en: 'Already completed.' }
            ]
        },
        {
            id: 'h2m_004', character: '一起', pinyin: 'yīqǐ', meaning: 'together', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '我们一起去。', pinyin: 'wǒmen yīqǐ qù.', en: 'Let\'s go together.' },
                { cn: '一起吃饭。', pinyin: 'yīqǐ chīfàn.', en: 'Eat together.' },
                { cn: '他们一起工作。', pinyin: 'tāmen yīqǐ gōngzuò.', en: 'They work together.' },
                { cn: '和朋友一起玩。', pinyin: 'hé péngyǒu yīqǐ wán.', en: 'Play with friends together.' },
                { cn: '一起学习。', pinyin: 'yīqǐ xuéxí.', en: 'Study together.' },
                { cn: '我们一起去旅游。', pinyin: 'wǒmen yīqǐ qù lǚyóu.', en: 'Let\'s travel together.' }
            ]
        },
        {
            id: 'h2m_005', character: '再', pinyin: 'zài', meaning: 'again', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '再说一遍。', pinyin: 'zài shuō yī biàn.', en: 'Say it again.' },
                { cn: '再见。', pinyin: 'zàijiàn.', en: 'Goodbye.' },
                { cn: '再吃一个。', pinyin: 'zài chī yīgè.', en: 'Eat one more.' },
                { cn: '下次再来。', pinyin: 'xià cì zài lái.', en: 'Come again next time.' },
                { cn: '再等一下。', pinyin: 'zài děng yīxià.', en: 'Wait a little more.' },
                { cn: '请再说一次。', pinyin: 'qǐng zài shuō yī cì.', en: 'Please say it once more.' }
            ]
        },
        {
            id: 'h2m_006', character: '又', pinyin: 'yòu', meaning: 'again (past)', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '他又来了。', pinyin: 'tā yòu lái le.', en: 'He came again.' },
                { cn: '又下雨了。', pinyin: 'yòu xiàyǔ le.', en: 'It\'s raining again.' },
                { cn: '又贵了。', pinyin: 'yòu guì le.', en: 'It\'s more expensive again.' },
                { cn: '他又迟到了。', pinyin: 'tā yòu chídào le.', en: 'He was late again.' },
                { cn: '又是一个好天气。', pinyin: 'yòu shì yīgè hǎo tiānqì.', en: 'Another good weather day.' },
                { cn: '又见面了。', pinyin: 'yòu jiànmiàn le.', en: 'Meet again.' }
            ]
        },
        {
            id: 'h2m_007', character: '真', pinyin: 'zhēn', meaning: 'really', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '真好！', pinyin: 'zhēn hǎo!', en: 'Really good!' },
                { cn: '真漂亮。', pinyin: 'zhēn piàoliang.', en: 'Really beautiful.' },
                { cn: '真的吗？', pinyin: 'zhēn de ma?', en: 'Really?' },
                { cn: '真好吃。', pinyin: 'zhēn hǎochī.', en: 'Really delicious.' },
                { cn: '真不好意思。', pinyin: 'zhēn bù hǎoyìsi.', en: 'I\'m really sorry.' },
                { cn: '真是太好了。', pinyin: 'zhēn shì tài hǎo le.', en: 'It\'s really great.' }
            ]
        },
        {
            id: 'h2m_008', character: '最', pinyin: 'zuì', meaning: 'most', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '最好。', pinyin: 'zuì hǎo.', en: 'The best.' },
                { cn: '最大。', pinyin: 'zuì dà.', en: 'The biggest.' },
                { cn: '我最喜欢。', pinyin: 'wǒ zuì xǐhuān.', en: 'I like the most.' },
                { cn: '他是最好的。', pinyin: 'tā shì zuì hǎo de.', en: 'He is the best.' },
                { cn: '最高的人。', pinyin: 'zuì gāo de rén.', en: 'The tallest person.' },
                { cn: '最重要的事。', pinyin: 'zuì zhòngyào de shì.', en: 'The most important thing.' }
            ]
        },
        {
            id: 'h2m_009', character: '更', pinyin: 'gèng', meaning: 'more', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '更好。', pinyin: 'gèng hǎo.', en: 'Better.' },
                { cn: '更大。', pinyin: 'gèng dà.', en: 'Bigger.' },
                { cn: '我更喜欢。', pinyin: 'wǒ gèng xǐhuān.', en: 'I prefer.' },
                { cn: '更好看。', pinyin: 'gèng hǎokàn.', en: 'More beautiful.' },
                { cn: '更重要。', pinyin: 'gèng zhòngyào.', en: 'More important.' },
                { cn: '这个更好。', pinyin: 'zhège gèng hǎo.', en: 'This one is better.' }
            ]
        },
        {
            id: 'h2m_010', character: '非常', pinyin: 'fēicháng', meaning: 'very', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '非常好。', pinyin: 'fēicháng hǎo.', en: 'Very good.' },
                { cn: '非常感谢。', pinyin: 'fēicháng gǎnxiè.', en: 'Thank you very much.' },
                { cn: '非常漂亮。', pinyin: 'fēicháng piàoliang.', en: 'Very beautiful.' },
                { cn: '非常喜欢。', pinyin: 'fēicháng xǐhuān.', en: 'Like very much.' },
                { cn: '非常忙。', pinyin: 'fēicháng máng.', en: 'Very busy.' },
                { cn: '非常好吃。', pinyin: 'fēicháng hǎochī.', en: 'Very delicious.' }
            ]
        },
        {
            id: 'h2m_011', character: '特别', pinyin: 'tèbié', meaning: 'especially', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '特别好。', pinyin: 'tèbié hǎo.', en: 'Especially good.' },
                { cn: '特别大。', pinyin: 'tèbié dà.', en: 'Especially big.' },
                { cn: '我特别喜欢。', pinyin: 'wǒ tèbié xǐhuān.', en: 'I especially like.' },
                { cn: '特别感谢你。', pinyin: 'tèbié gǎnxiè nǐ.', en: 'Especially thank you.' },
                { cn: '特别漂亮。', pinyin: 'tèbié piàoliang.', en: 'Especially beautiful.' },
                { cn: '这个特别好吃。', pinyin: 'zhège tèbié hǎochī.', en: 'This is especially delicious.' }
            ]
        },
        {
            id: 'h2m_012', character: '比较', pinyin: 'bǐjiào', meaning: 'relatively', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '比较好。', pinyin: 'bǐjiào hǎo.', en: 'Relatively good.' },
                { cn: '比较大。', pinyin: 'bǐjiào dà.', en: 'Relatively big.' },
                { cn: '比较贵。', pinyin: 'bǐjiào guì.', en: 'Relatively expensive.' },
                { cn: '我比较喜欢。', pinyin: 'wǒ bǐjiào xǐhuān.', en: 'I relatively like.' },
                { cn: '比较简单。', pinyin: 'bǐjiào jiǎndān.', en: 'Relatively simple.' },
                { cn: '这个比较便宜。', pinyin: 'zhège bǐjiào piányi.', en: 'This is relatively cheap.' }
            ]
        },
        {
            id: 'h2m_013', character: '一定', pinyin: 'yīdìng', meaning: 'certainly', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '我一定去。', pinyin: 'wǒ yīdìng qù.', en: 'I will certainly go.' },
                { cn: '一定可以。', pinyin: 'yīdìng kěyǐ.', en: 'Certainly can.' },
                { cn: '一定要努力。', pinyin: 'yīdìng yào nǔlì.', en: 'Must work hard.' },
                { cn: '我一定会来。', pinyin: 'wǒ yīdìng huì lái.', en: 'I will certainly come.' },
                { cn: '一定要成功。', pinyin: 'yīdìng yào chénggōng.', en: 'Must succeed.' },
                { cn: '一定没问题。', pinyin: 'yīdìng méi wèntí.', en: 'Certainly no problem.' }
            ]
        },
        {
            id: 'h2m_014', character: '可能', pinyin: 'kěnéng', meaning: 'maybe', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '可能吧。', pinyin: 'kěnéng ba.', en: 'Maybe.' },
                { cn: '他可能不来。', pinyin: 'tā kěnéng bù lái.', en: 'He might not come.' },
                { cn: '可能下雨。', pinyin: 'kěnéng xiàyǔ.', en: 'It might rain.' },
                { cn: '这是可能的。', pinyin: 'zhè shì kěnéng de.', en: 'This is possible.' },
                { cn: '不可能。', pinyin: 'bù kěnéng.', en: 'Impossible.' },
                { cn: '可能会迟到。', pinyin: 'kěnéng huì chídào.', en: 'Might be late.' }
            ]
        },
        {
            id: 'h2m_015', character: '当然', pinyin: 'dāngrán', meaning: 'of course', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '当然可以。', pinyin: 'dāngrán kěyǐ.', en: 'Of course.' },
                { cn: '当然好。', pinyin: 'dāngrán hǎo.', en: 'Of course it\'s good.' },
                { cn: '当然去。', pinyin: 'dāngrán qù.', en: 'Of course I\'ll go.' },
                { cn: '当然喜欢。', pinyin: 'dāngrán xǐhuān.', en: 'Of course I like it.' },
                { cn: '当然没问题。', pinyin: 'dāngrán méi wèntí.', en: 'Of course no problem.' },
                { cn: '当然可以帮你。', pinyin: 'dāngrán kěyǐ bāng nǐ.', en: 'Of course I can help you.' }
            ]
        },
        {
            id: 'h2m_016', character: '其实', pinyin: 'qíshí', meaning: 'actually', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '其实不是。', pinyin: 'qíshí bù shì.', en: 'Actually no.' },
                { cn: '其实我很喜欢。', pinyin: 'qíshí wǒ hěn xǐhuān.', en: 'Actually I like it very much.' },
                { cn: '其实很简单。', pinyin: 'qíshí hěn jiǎndān.', en: 'Actually it\'s very simple.' },
                { cn: '其实我不知道。', pinyin: 'qíshí wǒ bù zhīdào.', en: 'Actually I don\'t know.' },
                { cn: '其实很难。', pinyin: 'qíshí hěn nán.', en: 'Actually it\'s very difficult.' },
                { cn: '其实他说得对。', pinyin: 'qíshí tā shuō de duì.', en: 'Actually he is right.' }
            ]
        },
        {
            id: 'h2m_017', character: '正在', pinyin: 'zhèngzài', meaning: 'in the process of', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '我正在学习。', pinyin: 'wǒ zhèngzài xuéxí.', en: 'I am studying.' },
                { cn: '他正在吃饭。', pinyin: 'tā zhèngzài chīfàn.', en: 'He is eating.' },
                { cn: '她正在打电话。', pinyin: 'tā zhèngzài dǎ diànhuà.', en: 'She is making a phone call.' },
                { cn: '我们正在开会。', pinyin: 'wǒmen zhèngzài kāihuì.', en: 'We are having a meeting.' },
                { cn: '天正在下雨。', pinyin: 'tiān zhèngzài xiàyǔ.', en: 'It\'s raining.' },
                { cn: '他正在工作。', pinyin: 'tā zhèngzài gōngzuò.', en: 'He is working.' }
            ]
        },
        {
            id: 'h2m_018', character: '一直', pinyin: 'yīzhí', meaning: 'always/continuously', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '我一直在这里。', pinyin: 'wǒ yīzhí zài zhèlǐ.', en: 'I have always been here.' },
                { cn: '他一直很努力。', pinyin: 'tā yīzhí hěn nǔlì.', en: 'He has always worked hard.' },
                { cn: '一直往前走。', pinyin: 'yīzhí wǎng qián zǒu.', en: 'Keep going straight.' },
                { cn: '我一直很喜欢中文。', pinyin: 'wǒ yīzhí hěn xǐhuān zhōngwén.', en: 'I have always liked Chinese.' },
                { cn: '雨一直下。', pinyin: 'yǔ yīzhí xià.', en: 'The rain keeps falling.' },
                { cn: '他一直在等你。', pinyin: 'tā yīzhí zài děng nǐ.', en: 'He has been waiting for you.' }
            ]
        },
        {
            id: 'h2m_019', character: '有时候', pinyin: 'yǒushíhou', meaning: 'sometimes', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '有时候我去。', pinyin: 'yǒushíhou wǒ qù.', en: 'Sometimes I go.' },
                { cn: '有时候下雨。', pinyin: 'yǒushíhou xiàyǔ.', en: 'Sometimes it rains.' },
                { cn: '有时候我很忙。', pinyin: 'yǒushíhou wǒ hěn máng.', en: 'Sometimes I am very busy.' },
                { cn: '有时候我想家。', pinyin: 'yǒushíhou wǒ xiǎng jiā.', en: 'Sometimes I miss home.' },
                { cn: '有时候他不来。', pinyin: 'yǒushíhou tā bù lái.', en: 'Sometimes he doesn\'t come.' },
                { cn: '有时候我很累。', pinyin: 'yǒushíhou wǒ hěn lèi.', en: 'Sometimes I am very tired.' }
            ]
        },
        {
            id: 'h2m_020', character: '终于', pinyin: 'zhōngyú', meaning: 'finally', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '终于到了！', pinyin: 'zhōngyú dào le!', en: 'Finally arrived!' },
                { cn: '终于成功了。', pinyin: 'zhōngyú chénggōng le.', en: 'Finally succeeded.' },
                { cn: '终于放假了。', pinyin: 'zhōngyú fàngjià le.', en: 'Finally on vacation.' },
                { cn: '终于完成了。', pinyin: 'zhōngyú wánchéng le.', en: 'Finally completed.' },
                { cn: '终于见到你了。', pinyin: 'zhōngyú jiàn dào nǐ le.', en: 'Finally met you.' },
                { cn: '终于可以休息了。', pinyin: 'zhōngyú kěyǐ xiūxi le.', en: 'Finally can rest.' }
            ]
        },

        // ============================
        // VERBS
        // ============================
        {
            id: 'h2m_021', character: '给', pinyin: 'gěi', meaning: 'to give', hsk: 2, category: 'verbs',
            examples: [
                { cn: '给你。', pinyin: 'gěi nǐ.', en: 'Give it to you.' },
                { cn: '请给我一杯水。', pinyin: 'qǐng gěi wǒ yī bēi shuǐ.', en: 'Please give me a glass of water.' },
                { cn: '给他打电话。', pinyin: 'gěi tā dǎ diànhuà.', en: 'Give him a call.' },
                { cn: '给我看看。', pinyin: 'gěi wǒ kàn kàn.', en: 'Show me.' },
                { cn: '给你钱。', pinyin: 'gěi nǐ qián.', en: 'Here is the money.' },
                { cn: '送给你。', pinyin: 'sòng gěi nǐ.', en: 'Give it to you as a gift.' }
            ]
        },
        {
            id: 'h2m_022', character: '让', pinyin: 'ràng', meaning: 'to let/allow', hsk: 2, category: 'verbs',
            examples: [
                { cn: '让我看看。', pinyin: 'ràng wǒ kàn kàn.', en: 'Let me take a look.' },
                { cn: '请让我过去。', pinyin: 'qǐng ràng wǒ guòqù.', en: 'Please let me pass.' },
                { cn: '他让我等一下。', pinyin: 'tā ràng wǒ děng yīxià.', en: 'He asked me to wait.' },
                { cn: '让我想想。', pinyin: 'ràng wǒ xiǎng xiǎng.', en: 'Let me think.' },
                { cn: '不要让我担心。', pinyin: 'bùyào ràng wǒ dānxīn.', en: 'Don\'t make me worry.' },
                { cn: '让我帮你。', pinyin: 'ràng wǒ bāng nǐ.', en: 'Let me help you.' }
            ]
        },
        {
            id: 'h2m_023', character: '问', pinyin: 'wèn', meaning: 'to ask', hsk: 2, category: 'verbs',
            examples: [
                { cn: '我问你。', pinyin: 'wǒ wèn nǐ.', en: 'I ask you.' },
                { cn: '请问一下。', pinyin: 'qǐngwèn yīxià.', en: 'Excuse me.' },
                { cn: '他问了我一个问题。', pinyin: 'tā wèn le wǒ yīgè wèntí.', en: 'He asked me a question.' },
                { cn: '问老师。', pinyin: 'wèn lǎoshī.', en: 'Ask the teacher.' },
                { cn: '我想问你一件事。', pinyin: 'wǒ xiǎng wèn nǐ yī jiàn shì.', en: 'I want to ask you something.' },
                { cn: '问路。', pinyin: 'wèn lù.', en: 'Ask for directions.' }
            ]
        },
        {
            id: 'h2m_024', character: '找', pinyin: 'zhǎo', meaning: 'to look for', hsk: 2, category: 'verbs',
            examples: [
                { cn: '我在找我的手机。', pinyin: 'wǒ zài zhǎo wǒ de shǒujī.', en: 'I\'m looking for my phone.' },
                { cn: '找人。', pinyin: 'zhǎo rén.', en: 'Look for someone.' },
                { cn: '找工作。', pinyin: 'zhǎo gōngzuò.', en: 'Look for a job.' },
                { cn: '找到了吗？', pinyin: 'zhǎo dào le ma?', en: 'Did you find it?' },
                { cn: '找不到。', pinyin: 'zhǎo bù dào.', en: 'Can\'t find.' },
                { cn: '请帮我找一下。', pinyin: 'qǐng bāng wǒ zhǎo yīxià.', en: 'Please help me look for it.' }
            ]
        },
        {
            id: 'h2m_025', character: '进', pinyin: 'jìn', meaning: 'to enter', hsk: 2, category: 'verbs',
            examples: [
                { cn: '请进来。', pinyin: 'qǐng jìnlái.', en: 'Please come in.' },
                { cn: '走进去。', pinyin: 'zǒu jìnqù.', en: 'Walk in.' },
                { cn: '进房间。', pinyin: 'jìn fángjiān.', en: 'Enter the room.' },
                { cn: '请进。', pinyin: 'qǐng jìn.', en: 'Please enter.' },
                { cn: '他进了办公室。', pinyin: 'tā jìn le bàngōngshì.', en: 'He entered the office.' },
                { cn: '进去吧。', pinyin: 'jìnqù ba.', en: 'Go in.' }
            ]
        },
        {
            id: 'h2m_026', character: '出', pinyin: 'chū', meaning: 'to go out', hsk: 2, category: 'verbs',
            examples: [
                { cn: '我出去一下。', pinyin: 'wǒ chūqù yīxià.', en: 'I\'m going out for a moment.' },
                { cn: '出门。', pinyin: 'chūmén.', en: 'Go out.' },
                { cn: '出去玩。', pinyin: 'chūqù wán.', en: 'Go out to play.' },
                { cn: '出来吧。', pinyin: 'chūlái ba.', en: 'Come out.' },
                { cn: '他出去了。', pinyin: 'tā chūqù le.', en: 'He went out.' },
                { cn: '出发。', pinyin: 'chūfā.', en: 'Set off.' }
            ]
        },
        {
            id: 'h2m_027', character: '回', pinyin: 'huí', meaning: 'to return', hsk: 2, category: 'verbs',
            examples: [
                { cn: '我回家。', pinyin: 'wǒ huíjiā.', en: 'I go home.' },
                { cn: '回来。', pinyin: 'huílái.', en: 'Come back.' },
                { cn: '回去。', pinyin: 'huíqù.', en: 'Go back.' },
                { cn: '回答问题。', pinyin: 'huídá wèntí.', en: 'Answer questions.' },
                { cn: '他回来了。', pinyin: 'tā huílái le.', en: 'He has come back.' },
                { cn: '回电话。', pinyin: 'huí diànhuà.', en: 'Return a call.' }
            ]
        },
        {
            id: 'h2m_028', character: '开', pinyin: 'kāi', meaning: 'to open/start', hsk: 2, category: 'verbs',
            examples: [
                { cn: '开门。', pinyin: 'kāimén.', en: 'Open the door.' },
                { cn: '开车。', pinyin: 'kāichē.', en: 'Drive a car.' },
                { cn: '开始。', pinyin: 'kāishǐ.', en: 'Start.' },
                { cn: '开会。', pinyin: 'kāihuì.', en: 'Have a meeting.' },
                { cn: '开心。', pinyin: 'kāixīn.', en: 'Happy.' },
                { cn: '打开。', pinyin: 'dǎkāi.', en: 'Open.' }
            ]
        },
        {
            id: 'h2m_029', character: '关', pinyin: 'guān', meaning: 'to close/turn off', hsk: 2, category: 'verbs',
            examples: [
                { cn: '关门。', pinyin: 'guānmén.', en: 'Close the door.' },
                { cn: '关灯。', pinyin: 'guān dēng.', en: 'Turn off the light.' },
                { cn: '关电视。', pinyin: 'guān diànshì.', en: 'Turn off the TV.' },
                { cn: '关心。', pinyin: 'guānxīn.', en: 'Care about.' },
                { cn: '关系。', pinyin: 'guānxì.', en: 'Relationship.' },
                { cn: '请关手机。', pinyin: 'qǐng guān shǒujī.', en: 'Please turn off the phone.' }
            ]
        },
        {
            id: 'h2m_030', character: '穿', pinyin: 'chuān', meaning: 'to wear', hsk: 2, category: 'verbs',
            examples: [
                { cn: '穿衣服。', pinyin: 'chuān yīfu.', en: 'Wear clothes.' },
                { cn: '穿鞋。', pinyin: 'chuān xié.', en: 'Wear shoes.' },
                { cn: '穿红衣服。', pinyin: 'chuān hóng yīfu.', en: 'Wear red clothes.' },
                { cn: '穿什么？', pinyin: 'chuān shénme?', en: 'What to wear?' },
                { cn: '穿好了。', pinyin: 'chuān hǎo le.', en: 'Dressed.' },
                { cn: '穿得漂亮。', pinyin: 'chuān de piàoliang.', en: 'Dressed beautifully.' }
            ]
        },
        {
            id: 'h2m_031', character: '洗', pinyin: 'xǐ', meaning: 'to wash', hsk: 2, category: 'verbs',
            examples: [
                { cn: '洗手。', pinyin: 'xǐshǒu.', en: 'Wash hands.' },
                { cn: '洗脸。', pinyin: 'xǐliǎn.', en: 'Wash face.' },
                { cn: '洗澡。', pinyin: 'xǐzǎo.', en: 'Take a bath.' },
                { cn: '洗衣服。', pinyin: 'xǐ yīfu.', en: 'Wash clothes.' },
                { cn: '洗干净了。', pinyin: 'xǐ gānjìng le.', en: 'Washed clean.' },
                { cn: '请洗手。', pinyin: 'qǐng xǐshǒu.', en: 'Please wash your hands.' }
            ]
        },
        {
            id: 'h2m_032', character: '教', pinyin: 'jiāo', meaning: 'to teach', hsk: 2, category: 'verbs',
            examples: [
                { cn: '他教中文。', pinyin: 'tā jiāo zhōngwén.', en: 'He teaches Chinese.' },
                { cn: '老师教我们。', pinyin: 'lǎoshī jiāo wǒmen.', en: 'The teacher teaches us.' },
                { cn: '教我做饭。', pinyin: 'jiāo wǒ zuòfàn.', en: 'Teach me to cook.' },
                { cn: '教得好。', pinyin: 'jiāo de hǎo.', en: 'Teach well.' },
                { cn: '他教英文。', pinyin: 'tā jiāo yīngwén.', en: 'He teaches English.' },
                { cn: '请教你一下。', pinyin: 'qǐngjiào nǐ yīxià.', en: 'Let me ask you something.' }
            ]
        },
        {
            id: 'h2m_033', character: '用', pinyin: 'yòng', meaning: 'to use', hsk: 2, category: 'verbs',
            examples: [
                { cn: '用这个。', pinyin: 'yòng zhège.', en: 'Use this.' },
                { cn: '用中文说。', pinyin: 'yòng zhōngwén shuō.', en: 'Say it in Chinese.' },
                { cn: '用手机。', pinyin: 'yòng shǒujī.', en: 'Use the phone.' },
                { cn: '用筷子。', pinyin: 'yòng kuàizi.', en: 'Use chopsticks.' },
                { cn: '不用了。', pinyin: 'bùyòng le.', en: 'No need.' },
                { cn: '有用吗？', pinyin: 'yǒuyòng ma?', en: 'Is it useful?' }
            ]
        },
        {
            id: 'h2m_034', character: '等', pinyin: 'děng', meaning: 'to wait', hsk: 2, category: 'verbs',
            examples: [
                { cn: '请等一下。', pinyin: 'qǐng děng yīxià.', en: 'Please wait a moment.' },
                { cn: '等我。', pinyin: 'děng wǒ.', en: 'Wait for me.' },
                { cn: '等车。', pinyin: 'děng chē.', en: 'Wait for the bus.' },
                { cn: '等了很久。', pinyin: 'děng le hěn jiǔ.', en: 'Waited for a long time.' },
                { cn: '请等一等。', pinyin: 'qǐng děng yī děng.', en: 'Please wait.' },
                { cn: '等一下。', pinyin: 'děng yīxià.', en: 'Wait a moment.' }
            ]
        },
        {
            id: 'h2m_035', character: '帮', pinyin: 'bāng', meaning: 'to help', hsk: 2, category: 'verbs',
            examples: [
                { cn: '请帮我。', pinyin: 'qǐng bāng wǒ.', en: 'Please help me.' },
                { cn: '帮个忙。', pinyin: 'bāng gè máng.', en: 'Do me a favor.' },
                { cn: '帮忙。', pinyin: 'bāngmáng.', en: 'Help.' },
                { cn: '帮帮我。', pinyin: 'bāng bang wǒ.', en: 'Help me.' },
                { cn: '谢谢你帮我。', pinyin: 'xièxiè nǐ bāng wǒ.', en: 'Thank you for helping me.' },
                { cn: '他帮了我。', pinyin: 'tā bāng le wǒ.', en: 'He helped me.' }
            ]
        },
        {
            id: 'h2m_036', character: '告诉', pinyin: 'gàosù', meaning: 'to tell', hsk: 2, category: 'verbs',
            examples: [
                { cn: '请告诉我。', pinyin: 'qǐng gàosù wǒ.', en: 'Please tell me.' },
                { cn: '告诉朋友。', pinyin: 'gàosù péngyǒu.', en: 'Tell a friend.' },
                { cn: '他告诉了我。', pinyin: 'tā gàosù le wǒ.', en: 'He told me.' },
                { cn: '不要告诉别人。', pinyin: 'bùyào gàosù biérén.', en: 'Don\'t tell others.' },
                { cn: '告诉你一个好消息。', pinyin: 'gàosù nǐ yīgè hǎo xiāoxi.', en: 'Tell you a piece of good news.' },
                { cn: '告诉老师。', pinyin: 'gàosù lǎoshī.', en: 'Tell the teacher.' }
            ]
        },
        {
            id: 'h2m_037', character: '准备', pinyin: 'zhǔnbèi', meaning: 'to prepare', hsk: 2, category: 'verbs',
            examples: [
                { cn: '准备好了。', pinyin: 'zhǔnbèi hǎo le.', en: 'It\'s ready.' },
                { cn: '准备出发。', pinyin: 'zhǔnbèi chūfā.', en: 'Prepare to leave.' },
                { cn: '准备考试。', pinyin: 'zhǔnbèi kǎoshì.', en: 'Prepare for the exam.' },
                { cn: '准备吃饭。', pinyin: 'zhǔnbèi chīfàn.', en: 'Prepare to eat.' },
                { cn: '准备好了吗？', pinyin: 'zhǔnbèi hǎo le ma?', en: 'Are you ready?' },
                { cn: '我准备去中国。', pinyin: 'wǒ zhǔnbèi qù zhōngguó.', en: 'I\'m preparing to go to China.' }
            ]
        },
        {
            id: 'h2m_038', character: '开始', pinyin: 'kāishǐ', meaning: 'to begin', hsk: 2, category: 'verbs',
            examples: [
                { cn: '开始吧。', pinyin: 'kāishǐ ba.', en: 'Let\'s start.' },
                { cn: '开始学习。', pinyin: 'kāishǐ xuéxí.', en: 'Start studying.' },
                { cn: '开始工作。', pinyin: 'kāishǐ gōngzuò.', en: 'Start working.' },
                { cn: '什么时候开始？', pinyin: 'shénme shíhou kāishǐ?', en: 'When does it start?' },
                { cn: '开始了。', pinyin: 'kāishǐ le.', en: 'It has started.' },
                { cn: '从头开始。', pinyin: 'cóng tóu kāishǐ.', en: 'Start from the beginning.' }
            ]
        },
        {
            id: 'h2m_039', character: '觉得', pinyin: 'juéde', meaning: 'to feel/think', hsk: 2, category: 'verbs',
            examples: [
                { cn: '我觉得很好。', pinyin: 'wǒ juéde hěn hǎo.', en: 'I think it\'s good.' },
                { cn: '你觉得怎么样？', pinyin: 'nǐ juéde zěnmeyàng?', en: 'What do you think?' },
                { cn: '我觉得不对。', pinyin: 'wǒ juéde bù duì.', en: 'I think it\'s not right.' },
                { cn: '他觉得很难。', pinyin: 'tā juéde hěn nán.', en: 'He thinks it\'s very difficult.' },
                { cn: '我觉得可以。', pinyin: 'wǒ juéde kěyǐ.', en: 'I think it\'s okay.' },
                { cn: '你觉得好吃吗？', pinyin: 'nǐ juéde hǎochī ma?', en: 'Do you think it\'s delicious?' }
            ]
        },
        {
            id: 'h2m_040', character: '希望', pinyin: 'xīwàng', meaning: 'to hope', hsk: 2, category: 'verbs',
            examples: [
                { cn: '我希望你快乐。', pinyin: 'wǒ xīwàng nǐ kuàilè.', en: 'I hope you are happy.' },
                { cn: '希望如此。', pinyin: 'xīwàng rúcǐ.', en: 'I hope so.' },
                { cn: '我希望去中国。', pinyin: 'wǒ xīwàng qù zhōngguó.', en: 'I hope to go to China.' },
                { cn: '他希望成功。', pinyin: 'tā xīwàng chénggōng.', en: 'He hopes to succeed.' },
                { cn: '希望你能来。', pinyin: 'xīwàng nǐ néng lái.', en: 'I hope you can come.' },
                { cn: '没有希望。', pinyin: 'méiyǒu xīwàng.', en: 'No hope.' }
            ]
        },
        {
            id: 'h2m_041', character: '可以', pinyin: 'kěyǐ', meaning: 'can/may', hsk: 2, category: 'verbs',
            examples: [
                { cn: '可以吗？', pinyin: 'kěyǐ ma?', en: 'Is it okay?' },
                { cn: '可以。', pinyin: 'kěyǐ.', en: 'Yes, you can.' },
                { cn: '不可以。', pinyin: 'bù kěyǐ.', en: 'You can\'t.' },
                { cn: '可以帮我吗？', pinyin: 'kěyǐ bāng wǒ ma?', en: 'Can you help me?' },
                { cn: '可以进去吗？', pinyin: 'kěyǐ jìnqù ma?', en: 'May I go in?' },
                { cn: '当然可以。', pinyin: 'dāngrán kěyǐ.', en: 'Of course.' }
            ]
        },
        {
            id: 'h2m_042', character: '要', pinyin: 'yào', meaning: 'to want/need', hsk: 2, category: 'verbs',
            examples: [
                { cn: '我要这个。', pinyin: 'wǒ yào zhège.', en: 'I want this.' },
                { cn: '你要什么？', pinyin: 'nǐ yào shénme?', en: 'What do you want?' },
                { cn: '我要喝水。', pinyin: 'wǒ yào hē shuǐ.', en: 'I want to drink water.' },
                { cn: '不要。', pinyin: 'bùyào.', en: 'Don\'t want.' },
                { cn: '要去吗？', pinyin: 'yào qù ma?', en: 'Do you want to go?' },
                { cn: '我需要帮助。', pinyin: 'wǒ xūyào bāngzhù.', en: 'I need help.' }
            ]
        },
        {
            id: 'h2m_043', character: '会', pinyin: 'huì', meaning: 'can/will', hsk: 2, category: 'verbs',
            examples: [
                { cn: '我会说中文。', pinyin: 'wǒ huì shuō zhōngwén.', en: 'I can speak Chinese.' },
                { cn: '他会来吗？', pinyin: 'tā huì lái ma?', en: 'Will he come?' },
                { cn: '不会。', pinyin: 'bù huì.', en: 'I can\'t / Won\'t.' },
                { cn: '我会帮你。', pinyin: 'wǒ huì bāng nǐ.', en: 'I will help you.' },
                { cn: '明天会下雨。', pinyin: 'míngtiān huì xiàyǔ.', en: 'It will rain tomorrow.' },
                { cn: '我会努力。', pinyin: 'wǒ huì nǔlì.', en: 'I will work hard.' }
            ]
        },
        {
            id: 'h2m_044', character: '能', pinyin: 'néng', meaning: 'can/able to', hsk: 2, category: 'verbs',
            examples: [
                { cn: '我能去吗？', pinyin: 'wǒ néng qù ma?', en: 'Can I go?' },
                { cn: '能帮我吗？', pinyin: 'néng bāng wǒ ma?', en: 'Can you help me?' },
                { cn: '不能。', pinyin: 'bù néng.', en: 'Cannot.' },
                { cn: '你能说中文吗？', pinyin: 'nǐ néng shuō zhōngwén ma?', en: 'Can you speak Chinese?' },
                { cn: '我能进来吗？', pinyin: 'wǒ néng jìnlái ma?', en: 'May I come in?' },
                { cn: '他能做。', pinyin: 'tā néng zuò.', en: 'He can do it.' }
            ]
        },
        {
            id: 'h2m_045', character: '应该', pinyin: 'yīnggāi', meaning: 'should', hsk: 2, category: 'verbs',
            examples: [
                { cn: '你应该去。', pinyin: 'nǐ yīnggāi qù.', en: 'You should go.' },
                { cn: '应该努力。', pinyin: 'yīnggāi nǔlì.', en: 'Should work hard.' },
                { cn: '不应该这样。', pinyin: 'bù yīnggāi zhèyàng.', en: 'Shouldn\'t be like this.' },
                { cn: '你应该学习。', pinyin: 'nǐ yīnggāi xuéxí.', en: 'You should study.' },
                { cn: '应该早点睡。', pinyin: 'yīnggāi zǎo diǎn shuì.', en: 'Should sleep earlier.' },
                { cn: '应该好好休息。', pinyin: 'yīnggāi hǎohǎo xiūxi.', en: 'Should rest well.' }
            ]
        },
        {
            id: 'h2m_046', character: '认识', pinyin: 'rènshi', meaning: 'to know (someone)', hsk: 2, category: 'verbs',
            examples: [
                { cn: '我认识他。', pinyin: 'wǒ rènshi tā.', en: 'I know him.' },
                { cn: '很高兴认识你。', pinyin: 'hěn gāoxìng rènshi nǐ.', en: 'Nice to meet you.' },
                { cn: '我不认识她。', pinyin: 'wǒ bù rènshi tā.', en: 'I don\'t know her.' },
                { cn: '你认识他吗？', pinyin: 'nǐ rènshi tā ma?', en: 'Do you know him?' },
                { cn: '认识很久了。', pinyin: 'rènshi hěn jiǔ le.', en: 'Known each other for a long time.' },
                { cn: '我认识这个地方。', pinyin: 'wǒ rènshi zhège dìfāng.', en: 'I know this place.' }
            ]
        },
        {
            id: 'h2m_047', character: '了解', pinyin: 'liǎojiě', meaning: 'to understand', hsk: 2, category: 'verbs',
            examples: [
                { cn: '我不了解。', pinyin: 'wǒ bù liǎojiě.', en: 'I don\'t understand.' },
                { cn: '了解中国。', pinyin: 'liǎojiě zhōngguó.', en: 'Understand China.' },
                { cn: '了解一下。', pinyin: 'liǎojiě yīxià.', en: 'Learn about it.' },
                { cn: '我很了解他。', pinyin: 'wǒ hěn liǎojiě tā.', en: 'I understand him very well.' },
                { cn: '了解情况。', pinyin: 'liǎojiě qíngkuàng.', en: 'Understand the situation.' },
                { cn: '了解更多。', pinyin: 'liǎojiě gèng duō.', en: 'Learn more.' }
            ]
        },
        {
            id: 'h2m_048', character: '相信', pinyin: 'xiāngxìn', meaning: 'to believe', hsk: 2, category: 'verbs',
            examples: [
                { cn: '我相信你。', pinyin: 'wǒ xiāngxìn nǐ.', en: 'I believe you.' },
                { cn: '相信自己。', pinyin: 'xiāngxìn zìjǐ.', en: 'Believe in yourself.' },
                { cn: '不相信。', pinyin: 'bù xiāngxìn.', en: 'Don\'t believe.' },
                { cn: '他相信这是真的。', pinyin: 'tā xiāngxìn zhè shì zhēn de.', en: 'He believes this is true.' },
                { cn: '很难相信。', pinyin: 'hěn nán xiāngxìn.', en: 'Hard to believe.' },
                { cn: '我相信他会来。', pinyin: 'wǒ xiāngxìn tā huì lái.', en: 'I believe he will come.' }
            ]
        },
        {
            id: 'h2m_049', character: '需要', pinyin: 'xūyào', meaning: 'to need', hsk: 2, category: 'verbs',
            examples: [
                { cn: '我需要帮助。', pinyin: 'wǒ xūyào bāngzhù.', en: 'I need help.' },
                { cn: '需要多少钱？', pinyin: 'xūyào duōshao qián?', en: 'How much money is needed?' },
                { cn: '不需要。', pinyin: 'bù xūyào.', en: 'Not needed.' },
                { cn: '需要时间。', pinyin: 'xūyào shíjiān.', en: 'Need time.' },
                { cn: '你需要休息。', pinyin: 'nǐ xūyào xiūxi.', en: 'You need to rest.' },
                { cn: '我需要买书。', pinyin: 'wǒ xūyào mǎi shū.', en: 'I need to buy books.' }
            ]
        },
        {
            id: 'h2m_050', character: '担心', pinyin: 'dānxīn', meaning: 'to worry', hsk: 2, category: 'verbs',
            examples: [
                { cn: '别担心。', pinyin: 'bié dānxīn.', en: 'Don\'t worry.' },
                { cn: '我很担心。', pinyin: 'wǒ hěn dānxīn.', en: 'I am very worried.' },
                { cn: '不用担心。', pinyin: 'bùyòng dānxīn.', en: 'No need to worry.' },
                { cn: '他很担心你。', pinyin: 'tā hěn dānxīn nǐ.', en: 'He is very worried about you.' },
                { cn: '我担心他会迟到。', pinyin: 'wǒ dānxīn tā huì chídào.', en: 'I worry he will be late.' },
                { cn: '不要担心我。', pinyin: 'bùyào dānxīn wǒ.', en: 'Don\'t worry about me.' }
            ]
        },
        {
            id: 'h2m_051', character: '害怕', pinyin: 'hàipà', meaning: 'to be afraid', hsk: 2, category: 'verbs',
            examples: [
                { cn: '我害怕。', pinyin: 'wǒ hàipà.', en: 'I am afraid.' },
                { cn: '不要害怕。', pinyin: 'bùyào hàipà.', en: 'Don\'t be afraid.' },
                { cn: '他害怕狗。', pinyin: 'tā hàipà gǒu.', en: 'He is afraid of dogs.' },
                { cn: '害怕什么？', pinyin: 'hàipà shénme?', en: 'What are you afraid of?' },
                { cn: '我很害怕。', pinyin: 'wǒ hěn hàipà.', en: 'I am very afraid.' },
                { cn: '别害怕，有我在。', pinyin: 'bié hàipà, yǒu wǒ zài.', en: 'Don\'t be afraid, I\'m here.' }
            ]
        },
        {
            id: 'h2m_052', character: '生气', pinyin: 'shēngqì', meaning: 'to be angry', hsk: 2, category: 'verbs',
            examples: [
                { cn: '他生气了。', pinyin: 'tā shēngqì le.', en: 'He is angry.' },
                { cn: '不要生气。', pinyin: 'bùyào shēngqì.', en: 'Don\'t be angry.' },
                { cn: '我很生气。', pinyin: 'wǒ hěn shēngqì.', en: 'I am very angry.' },
                { cn: '生什么气？', pinyin: 'shēng shénme qì?', en: 'Why are you angry?' },
                { cn: '他生我的气。', pinyin: 'tā shēng wǒ de qì.', en: 'He is angry at me.' },
                { cn: '别生他的气。', pinyin: 'bié shēng tā de qì.', en: 'Don\'t be angry at him.' }
            ]
        },
        {
            id: 'h2m_053', character: '着急', pinyin: 'zháojí', meaning: 'to be anxious', hsk: 2, category: 'verbs',
            examples: [
                { cn: '别着急。', pinyin: 'bié zháojí.', en: 'Don\'t be anxious.' },
                { cn: '我很着急。', pinyin: 'wǒ hěn zháojí.', en: 'I am very anxious.' },
                { cn: '着什么急？', pinyin: 'zháo shénme jí?', en: 'Why are you anxious?' },
                { cn: '不要着急。', pinyin: 'bùyào zháojí.', en: 'Don\'t be anxious.' },
                { cn: '他很着急。', pinyin: 'tā hěn zháojí.', en: 'He is very anxious.' },
                { cn: '时间还早，别着急。', pinyin: 'shíjiān hái zǎo, bié zháojí.', en: 'It\'s still early, don\'t worry.' }
            ]
        },

        // ============================
        // NOUNS
        // ============================
        {
            id: 'h2m_054', character: '旁边', pinyin: 'pángbiān', meaning: 'beside', hsk: 2, category: 'nouns',
            examples: [
                { cn: '在旁边。', pinyin: 'zài pángbiān.', en: 'Beside.' },
                { cn: '坐在我旁边。', pinyin: 'zuò zài wǒ pángbiān.', en: 'Sit beside me.' },
                { cn: '学校旁边有商店。', pinyin: 'xuéxiào pángbiān yǒu shāngdiàn.', en: 'There is a store beside the school.' },
                { cn: '旁边是谁？', pinyin: 'pángbiān shì shéi?', en: 'Who is beside you?' },
                { cn: '在桌子旁边。', pinyin: 'zài zhuōzi pángbiān.', en: 'Beside the table.' },
                { cn: '医院旁边。', pinyin: 'yīyuàn pángbiān.', en: 'Beside the hospital.' }
            ]
        },
        {
            id: 'h2m_055', character: '对面', pinyin: 'duìmiàn', meaning: 'opposite', hsk: 2, category: 'nouns',
            examples: [
                { cn: '在对面。', pinyin: 'zài duìmiàn.', en: 'Across the street.' },
                { cn: '对面是银行。', pinyin: 'duìmiàn shì yínháng.', en: 'The bank is across the street.' },
                { cn: '坐在对面。', pinyin: 'zuò zài duìmiàn.', en: 'Sit opposite.' },
                { cn: '对面有人。', pinyin: 'duìmiàn yǒu rén.', en: 'There is someone opposite.' },
                { cn: '学校对面有公园。', pinyin: 'xuéxiào duìmiàn yǒu gōngyuán.', en: 'There is a park across from the school.' },
                { cn: '看对面。', pinyin: 'kàn duìmiàn.', en: 'Look across.' }
            ]
        },
        {
            id: 'h2m_056', character: '中间', pinyin: 'zhōngjiān', meaning: 'middle', hsk: 2, category: 'nouns',
            examples: [
                { cn: '在中间。', pinyin: 'zài zhōngjiān.', en: 'In the middle.' },
                { cn: '站在中间。', pinyin: 'zhàn zài zhōngjiān.', en: 'Stand in the middle.' },
                { cn: '中间有桌子。', pinyin: 'zhōngjiān yǒu zhuōzi.', en: 'There is a table in the middle.' },
                { cn: '房间中间。', pinyin: 'fángjiān zhōngjiān.', en: 'In the middle of the room.' },
                { cn: '路中间。', pinyin: 'lù zhōngjiān.', en: 'In the middle of the road.' },
                { cn: '中间是谁？', pinyin: 'zhōngjiān shì shéi?', en: 'Who is in the middle?' }
            ]
        },
        {
            id: 'h2m_057', character: '手机', pinyin: 'shǒujī', meaning: 'mobile phone', hsk: 2, category: 'nouns',
            examples: [
                { cn: '我的手机。', pinyin: 'wǒ de shǒujī.', en: 'My phone.' },
                { cn: '用手机。', pinyin: 'yòng shǒujī.', en: 'Use the phone.' },
                { cn: '手机没电了。', pinyin: 'shǒujī méi diàn le.', en: 'The phone is out of battery.' },
                { cn: '看手机。', pinyin: 'kàn shǒujī.', en: 'Look at the phone.' },
                { cn: '买手机。', pinyin: 'mǎi shǒujī.', en: 'Buy a phone.' },
                { cn: '手机响了。', pinyin: 'shǒujī xiǎng le.', en: 'The phone is ringing.' }
            ]
        },
        {
            id: 'h2m_058', character: '电脑', pinyin: 'diànnǎo', meaning: 'computer', hsk: 2, category: 'nouns',
            examples: [
                { cn: '用电脑。', pinyin: 'yòng diànnǎo.', en: 'Use a computer.' },
                { cn: '电脑坏了。', pinyin: 'diànnǎo huài le.', en: 'The computer is broken.' },
                { cn: '买电脑。', pinyin: 'mǎi diànnǎo.', en: 'Buy a computer.' },
                { cn: '电脑很贵。', pinyin: 'diànnǎo hěn guì.', en: 'The computer is expensive.' },
                { cn: '我的电脑。', pinyin: 'wǒ de diànnǎo.', en: 'My computer.' },
                { cn: '用电脑工作。', pinyin: 'yòng diànnǎo gōngzuò.', en: 'Use a computer for work.' }
            ]
        },
        {
            id: 'h2m_059', character: '电视', pinyin: 'diànshì', meaning: 'television', hsk: 2, category: 'nouns',
            examples: [
                { cn: '看电视。', pinyin: 'kàn diànshì.', en: 'Watch TV.' },
                { cn: '电视很大。', pinyin: 'diànshì hěn dà.', en: 'The TV is very big.' },
                { cn: '开电视。', pinyin: 'kāi diànshì.', en: 'Turn on the TV.' },
                { cn: '关电视。', pinyin: 'guān diànshì.', en: 'Turn off the TV.' },
                { cn: '电视节目。', pinyin: 'diànshì jiémù.', en: 'TV program.' },
                { cn: '买电视。', pinyin: 'mǎi diànshì.', en: 'Buy a TV.' }
            ]
        },
        {
            id: 'h2m_060', character: '电影', pinyin: 'diànyǐng', meaning: 'movie', hsk: 2, category: 'nouns',
            examples: [
                { cn: '看电影。', pinyin: 'kàn diànyǐng.', en: 'Watch a movie.' },
                { cn: '中国电影。', pinyin: 'zhōngguó diànyǐng.', en: 'Chinese movie.' },
                { cn: '电影很好看。', pinyin: 'diànyǐng hěn hǎokàn.', en: 'The movie is very good.' },
                { cn: '去看电影。', pinyin: 'qù kàn diànyǐng.', en: 'Go see a movie.' },
                { cn: '什么电影？', pinyin: 'shénme diànyǐng?', en: 'What movie?' },
                { cn: '电影票。', pinyin: 'diànyǐng piào.', en: 'Movie ticket.' }
            ]
        },
        {
            id: 'h2m_061', character: '音乐', pinyin: 'yīnyuè', meaning: 'music', hsk: 2, category: 'nouns',
            examples: [
                { cn: '听音乐。', pinyin: 'tīng yīnyuè.', en: 'Listen to music.' },
                { cn: '中国音乐。', pinyin: 'zhōngguó yīnyuè.', en: 'Chinese music.' },
                { cn: '音乐很好听。', pinyin: 'yīnyuè hěn hǎotīng.', en: 'The music sounds great.' },
                { cn: '喜欢什么音乐？', pinyin: 'xǐhuān shénme yīnyuè?', en: 'What music do you like?' },
                { cn: '听中文音乐。', pinyin: 'tīng zhōngwén yīnyuè.', en: 'Listen to Chinese music.' },
                { cn: '音乐会。', pinyin: 'yīnyuè huì.', en: 'Concert.' }
            ]
        },
        {
            id: 'h2m_062', character: '春天', pinyin: 'chūntiān', meaning: 'spring', hsk: 2, category: 'nouns',
            examples: [
                { cn: '春天很美。', pinyin: 'chūntiān hěn měi.', en: 'Spring is beautiful.' },
                { cn: '春天来了。', pinyin: 'chūntiān lái le.', en: 'Spring has come.' },
                { cn: '春天天气好。', pinyin: 'chūntiān tiānqì hǎo.', en: 'The weather is good in spring.' },
                { cn: '春天开花。', pinyin: 'chūntiān kāi huā.', en: 'Flowers bloom in spring.' },
                { cn: '我喜欢春天。', pinyin: 'wǒ xǐhuān chūntiān.', en: 'I like spring.' },
                { cn: '春天很暖和。', pinyin: 'chūntiān hěn nuǎnhuo.', en: 'Spring is warm.' }
            ]
        },
        {
            id: 'h2m_063', character: '夏天', pinyin: 'xiàtiān', meaning: 'summer', hsk: 2, category: 'nouns',
            examples: [
                { cn: '夏天很热。', pinyin: 'xiàtiān hěn rè.', en: 'Summer is hot.' },
                { cn: '夏天游泳。', pinyin: 'xiàtiān yóuyǒng.', en: 'Swim in summer.' },
                { cn: '喜欢夏天。', pinyin: 'xǐhuān xiàtiān.', en: 'Like summer.' },
                { cn: '夏天吃冰淇淋。', pinyin: 'xiàtiān chī bīngqílín.', en: 'Eat ice cream in summer.' },
                { cn: '夏天很长。', pinyin: 'xiàtiān hěn cháng.', en: 'Summer is long.' },
                { cn: '夏天放假。', pinyin: 'xiàtiān fàngjià.', en: 'Summer vacation.' }
            ]
        },
        {
            id: 'h2m_064', character: '秋天', pinyin: 'qiūtiān', meaning: 'autumn', hsk: 2, category: 'nouns',
            examples: [
                { cn: '秋天很凉快。', pinyin: 'qiūtiān hěn liángkuai.', en: 'Autumn is cool.' },
                { cn: '秋天叶子变黄。', pinyin: 'qiūtiān yèzi biàn huáng.', en: 'Leaves turn yellow in autumn.' },
                { cn: '喜欢秋天。', pinyin: 'xǐhuān qiūtiān.', en: 'Like autumn.' },
                { cn: '秋天天气好。', pinyin: 'qiūtiān tiānqì hǎo.', en: 'The weather is good in autumn.' },
                { cn: '秋天不冷不热。', pinyin: 'qiūtiān bù lěng bù rè.', en: 'Autumn is neither cold nor hot.' },
                { cn: '北京的秋天很美。', pinyin: 'běijīng de qiūtiān hěn měi.', en: 'Beijing\'s autumn is very beautiful.' }
            ]
        },
        {
            id: 'h2m_065', character: '冬天', pinyin: 'dōngtiān', meaning: 'winter', hsk: 2, category: 'nouns',
            examples: [
                { cn: '冬天很冷。', pinyin: 'dōngtiān hěn lěng.', en: 'Winter is cold.' },
                { cn: '冬天下雪。', pinyin: 'dōngtiān xiàxuě.', en: 'It snows in winter.' },
                { cn: '冬天穿厚衣服。', pinyin: 'dōngtiān chuān hòu yīfu.', en: 'Wear thick clothes in winter.' },
                { cn: '我不喜欢冬天。', pinyin: 'wǒ bù xǐhuān dōngtiān.', en: 'I don\'t like winter.' },
                { cn: '冬天很干燥。', pinyin: 'dōngtiān hěn gānzào.', en: 'Winter is very dry.' },
                { cn: '冬天喝热茶。', pinyin: 'dōngtiān hē rè chá.', en: 'Drink hot tea in winter.' }
            ]
        },
        {
            id: 'h2m_066', character: '飞机', pinyin: 'fēijī', meaning: 'airplane', hsk: 2, category: 'nouns',
            examples: [
                { cn: '坐飞机。', pinyin: 'zuò fēijī.', en: 'Take a plane.' },
                { cn: '飞机很快。', pinyin: 'fēijī hěn kuài.', en: 'Planes are very fast.' },
                { cn: '飞机票很贵。', pinyin: 'fēijī piào hěn guì.', en: 'Plane tickets are expensive.' },
                { cn: '飞机几点到？', pinyin: 'fēijī jǐ diǎn dào?', en: 'What time does the plane arrive?' },
                { cn: '坐飞机去北京。', pinyin: 'zuò fēijī qù běijīng.', en: 'Take a plane to Beijing.' },
                { cn: '飞机起飞了。', pinyin: 'fēijī qǐfēi le.', en: 'The plane has taken off.' }
            ]
        },
        {
            id: 'h2m_067', character: '火车', pinyin: 'huǒchē', meaning: 'train', hsk: 2, category: 'nouns',
            examples: [
                { cn: '坐火车。', pinyin: 'zuò huǒchē.', en: 'Take a train.' },
                { cn: '火车票。', pinyin: 'huǒchē piào.', en: 'Train ticket.' },
                { cn: '火车站。', pinyin: 'huǒchē zhàn.', en: 'Train station.' },
                { cn: '火车来了。', pinyin: 'huǒchē lái le.', en: 'The train has come.' },
                { cn: '坐火车去上海。', pinyin: 'zuò huǒchē qù shànghǎi.', en: 'Take a train to Shanghai.' },
                { cn: '火车很快。', pinyin: 'huǒchē hěn kuài.', en: 'The train is very fast.' }
            ]
        },
        {
            id: 'h2m_068', character: '地铁', pinyin: 'dìtiě', meaning: 'subway', hsk: 2, category: 'nouns',
            examples: [
                { cn: '坐地铁。', pinyin: 'zuò dìtiě.', en: 'Take the subway.' },
                { cn: '地铁站。', pinyin: 'dìtiě zhàn.', en: 'Subway station.' },
                { cn: '地铁很方便。', pinyin: 'dìtiě hěn fāngbiàn.', en: 'The subway is very convenient.' },
                { cn: '坐地铁去。', pinyin: 'zuò dìtiě qù.', en: 'Go by subway.' },
                { cn: '地铁人很多。', pinyin: 'dìtiě rén hěn duō.', en: 'The subway has many people.' },
                { cn: '换地铁。', pinyin: 'huàn dìtiě.', en: 'Transfer subway.' }
            ]
        },
        {
            id: 'h2m_069', character: '自行车', pinyin: 'zìxíngchē', meaning: 'bicycle', hsk: 2, category: 'nouns',
            examples: [
                { cn: '骑自行车。', pinyin: 'qí zìxíngchē.', en: 'Ride a bicycle.' },
                { cn: '自行车很方便。', pinyin: 'zìxíngchē hěn fāngbiàn.', en: 'Bicycles are very convenient.' },
                { cn: '买自行车。', pinyin: 'mǎi zìxíngchē.', en: 'Buy a bicycle.' },
                { cn: '骑自行车去。', pinyin: 'qí zìxíngchē qù.', en: 'Go by bicycle.' },
                { cn: '自行车坏了。', pinyin: 'zìxíngchē huài le.', en: 'The bicycle is broken.' },
                { cn: '共享单车。', pinyin: 'gòngxiǎng dānchē.', en: 'Shared bicycle.' }
            ]
        },
        {
            id: 'h2m_070', character: '机场', pinyin: 'jīchǎng', meaning: 'airport', hsk: 2, category: 'nouns',
            examples: [
                { cn: '去机场。', pinyin: 'qù jīchǎng.', en: 'Go to the airport.' },
                { cn: '机场很远。', pinyin: 'jīchǎng hěn yuǎn.', en: 'The airport is very far.' },
                { cn: '到机场了。', pinyin: 'dào jīchǎng le.', en: 'Arrived at the airport.' },
                { cn: '机场很大。', pinyin: 'jīchǎng hěn dà.', en: 'The airport is very big.' },
                { cn: '去机场怎么走？', pinyin: 'qù jīchǎng zěnme zǒu?', en: 'How to get to the airport?' },
                { cn: '机场接人。', pinyin: 'jīchǎng jiē rén.', en: 'Pick up someone at the airport.' }
            ]
        },
        {
            id: 'h2m_071', character: '超市', pinyin: 'chāoshì', meaning: 'supermarket', hsk: 2, category: 'nouns',
            examples: [
                { cn: '去超市。', pinyin: 'qù chāoshì.', en: 'Go to the supermarket.' },
                { cn: '超市买东西。', pinyin: 'chāoshì mǎi dōngxi.', en: 'Buy things at the supermarket.' },
                { cn: '超市很大。', pinyin: 'chāoshì hěn dà.', en: 'The supermarket is very big.' },
                { cn: '超市很近。', pinyin: 'chāoshì hěn jìn.', en: 'The supermarket is very close.' },
                { cn: '去超市买菜。', pinyin: 'qù chāoshì mǎi cài.', en: 'Go to the supermarket to buy vegetables.' },
                { cn: '超市几点关门？', pinyin: 'chāoshì jǐ diǎn guānmén?', en: 'What time does the supermarket close?' }
            ]
        },
        {
            id: 'h2m_072', character: '银行', pinyin: 'yínháng', meaning: 'bank', hsk: 2, category: 'nouns',
            examples: [
                { cn: '去银行。', pinyin: 'qù yínháng.', en: 'Go to the bank.' },
                { cn: '银行取钱。', pinyin: 'yínháng qǔ qián.', en: 'Withdraw money at the bank.' },
                { cn: '银行在哪里？', pinyin: 'yínháng zài nǎlǐ?', en: 'Where is the bank?' },
                { cn: '银行很近。', pinyin: 'yínháng hěn jìn.', en: 'The bank is very close.' },
                { cn: '去银行存钱。', pinyin: 'qù yínháng cún qián.', en: 'Go to the bank to deposit money.' },
                { cn: '银行几点开门？', pinyin: 'yínháng jǐ diǎn kāimén?', en: 'What time does the bank open?' }
            ]
        },
        {
            id: 'h2m_073', character: '图书馆', pinyin: 'túshūguǎn', meaning: 'library', hsk: 2, category: 'nouns',
            examples: [
                { cn: '去图书馆。', pinyin: 'qù túshūguǎn.', en: 'Go to the library.' },
                { cn: '图书馆看书。', pinyin: 'túshūguǎn kànshū.', en: 'Read books at the library.' },
                { cn: '图书馆很安静。', pinyin: 'túshūguǎn hěn ānjìng.', en: 'The library is very quiet.' },
                { cn: '图书馆有很多书。', pinyin: 'túshūguǎn yǒu hěn duō shū.', en: 'The library has many books.' },
                { cn: '在图书馆学习。', pinyin: 'zài túshūguǎn xuéxí.', en: 'Study at the library.' },
                { cn: '图书馆借书。', pinyin: 'túshūguǎn jiè shū.', en: 'Borrow books from the library.' }
            ]
        },
        {
            id: 'h2m_074', character: '公园', pinyin: 'gōngyuán', meaning: 'park', hsk: 2, category: 'nouns',
            examples: [
                { cn: '去公园。', pinyin: 'qù gōngyuán.', en: 'Go to the park.' },
                { cn: '公园散步。', pinyin: 'gōngyuán sànbù.', en: 'Take a walk in the park.' },
                { cn: '公园很漂亮。', pinyin: 'gōngyuán hěn piàoliang.', en: 'The park is very beautiful.' },
                { cn: '公园里有花。', pinyin: 'gōngyuán lǐ yǒu huā.', en: 'There are flowers in the park.' },
                { cn: '在公园玩。', pinyin: 'zài gōngyuán wán.', en: 'Play in the park.' },
                { cn: '公园很大。', pinyin: 'gōngyuán hěn dà.', en: 'The park is very big.' }
            ]
        },
        {
            id: 'h2m_075', character: '电影院', pinyin: 'diànyǐngyuàn', meaning: 'cinema', hsk: 2, category: 'nouns',
            examples: [
                { cn: '去电影院。', pinyin: 'qù diànyǐngyuàn.', en: 'Go to the cinema.' },
                { cn: '电影院看电影。', pinyin: 'diànyǐngyuàn kàn diànyǐng.', en: 'Watch a movie at the cinema.' },
                { cn: '电影院很近。', pinyin: 'diànyǐngyuàn hěn jìn.', en: 'The cinema is very close.' },
                { cn: '去电影院怎么走？', pinyin: 'qù diànyǐngyuàn zěnme zǒu?', en: 'How to get to the cinema?' },
                { cn: '电影院人很多。', pinyin: 'diànyǐngyuàn rén hěn duō.', en: 'The cinema has many people.' },
                { cn: '电影院很大。', pinyin: 'diànyǐngyuàn hěn dà.', en: 'The cinema is very big.' }
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

window.HSK2Massive = HSK2Massive;

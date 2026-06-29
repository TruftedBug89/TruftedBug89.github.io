// ============================================
// CHINESE MASTER - HSK 3 MASSIVE EXAMPLES DATABASE
// Every word has 4-6 example sentences
// ALL SIMPLIFIED CHINESE with Pinyin + English
// ============================================

const HSK3Massive = {
    words: [
        // ============================
        // VERBS
        // ============================
        {
            id: 'h3m_001', character: '安排', pinyin: 'ānpái', meaning: 'to arrange', hsk: 3, category: 'verbs',
            examples: [
                { cn: '我来安排。', pinyin: 'wǒ lái ānpái.', en: 'I\'ll arrange it.' },
                { cn: '安排好了。', pinyin: 'ānpái hǎo le.', en: 'It\'s been arranged.' },
                { cn: '安排时间。', pinyin: 'ānpái shíjiān.', en: 'Arrange the time.' },
                { cn: '安排会议。', pinyin: 'ānpái huìyì.', en: 'Arrange a meeting.' },
                { cn: '谁安排的？', pinyin: 'shéi ānpái de?', en: 'Who arranged this?' },
                { cn: '安排一下。', pinyin: 'ānpái yīxià.', en: 'Make arrangements.' }
            ]
        },
        {
            id: 'h3m_002', character: '帮助', pinyin: 'bāngzhù', meaning: 'to help', hsk: 3, category: 'verbs',
            examples: [
                { cn: '请帮助我。', pinyin: 'qǐng bāngzhù wǒ.', en: 'Please help me.' },
                { cn: '互相帮助。', pinyin: 'hùxiāng bāngzhù.', en: 'Help each other.' },
                { cn: '帮助别人。', pinyin: 'bāngzhù biérén.', en: 'Help others.' },
                { cn: '感谢你的帮助。', pinyin: 'gǎnxiè nǐ de bāngzhù.', en: 'Thank you for your help.' },
                { cn: '他帮助了我。', pinyin: 'tā bāngzhù le wǒ.', en: 'He helped me.' },
                { cn: '帮助解决问题。', pinyin: 'bāngzhù jiějué wèntí.', en: 'Help solve the problem.' }
            ]
        },
        {
            id: 'h3m_003', character: '表示', pinyin: 'biǎoshì', meaning: 'to express', hsk: 3, category: 'verbs',
            examples: [
                { cn: '表示感谢。', pinyin: 'biǎoshì gǎnxiè.', en: 'Express gratitude.' },
                { cn: '表示欢迎。', pinyin: 'biǎoshì huānyíng.', en: 'Express welcome.' },
                { cn: '表示同意。', pinyin: 'biǎoshì tóngyì.', en: 'Express agreement.' },
                { cn: '他表示抱歉。', pinyin: 'tā biǎoshì bàoqiàn.', en: 'He expressed apology.' },
                { cn: '表示关心。', pinyin: 'biǎoshì guānxīn.', en: 'Express concern.' },
                { cn: '什么意思表示？', pinyin: 'shénme yìsi biǎoshì?', en: 'What does it mean?' }
            ]
        },
        {
            id: 'h3m_004', character: '参加', pinyin: 'cānjiā', meaning: 'to participate', hsk: 3, category: 'verbs',
            examples: [
                { cn: '参加活动。', pinyin: 'cānjiā huódòng.', en: 'Participate in activities.' },
                { cn: '参加考试。', pinyin: 'cānjiā kǎoshì.', en: 'Take an exam.' },
                { cn: '参加聚会。', pinyin: 'cānjiā jùhuì.', en: 'Attend a party.' },
                { cn: '我想参加。', pinyin: 'wǒ xiǎng cānjiā.', en: 'I want to participate.' },
                { cn: '参加比赛。', pinyin: 'cānjiā bǐsài.', en: 'Participate in a competition.' },
                { cn: '参加工作。', pinyin: 'cānjiā gōngzuò.', en: 'Start working.' }
            ]
        },
        {
            id: 'h3m_005', character: '出现', pinyin: 'chūxiàn', meaning: 'to appear', hsk: 3, category: 'verbs',
            examples: [
                { cn: '问题出现了。', pinyin: 'wèntí chūxiàn le.', en: 'A problem appeared.' },
                { cn: '他出现了。', pinyin: 'tā chūxiàn le.', en: 'He appeared.' },
                { cn: '出现了新情况。', pinyin: 'chūxiàn le xīn qíngkuàng.', en: 'A new situation appeared.' },
                { cn: '出现在哪里？', pinyin: 'chūxiàn zài nǎlǐ?', en: 'Where did it appear?' },
                { cn: '突然出现。', pinyin: 'tūrán chūxiàn.', en: 'Suddenly appeared.' },
                { cn: '出现了问题。', pinyin: 'chūxiàn le wèntí.', en: 'A problem occurred.' }
            ]
        },
        {
            id: 'h3m_006', character: '担心', pinyin: 'dānxīn', meaning: 'to worry', hsk: 3, category: 'verbs',
            examples: [
                { cn: '我很担心。', pinyin: 'wǒ hěn dānxīn.', en: 'I am very worried.' },
                { cn: '别担心。', pinyin: 'bié dānxīn.', en: 'Don\'t worry.' },
                { cn: '不用担心。', pinyin: 'bùyòng dānxīn.', en: 'No need to worry.' },
                { cn: '他很担心你。', pinyin: 'tā hěn dānxīn nǐ.', en: 'He is very worried about you.' },
                { cn: '我担心他会迟到。', pinyin: 'wǒ dānxīn tā huì chídào.', en: 'I worry he will be late.' },
                { cn: '不要担心我。', pinyin: 'bùyào dānxīn wǒ.', en: 'Don\'t worry about me.' }
            ]
        },
        {
            id: 'h3m_007', character: '发现', pinyin: 'fāxiàn', meaning: 'to discover', hsk: 3, category: 'verbs',
            examples: [
                { cn: '我发现了一个问题。', pinyin: 'wǒ fāxiàn le yīgè wèntí.', en: 'I discovered a problem.' },
                { cn: '发现了什么？', pinyin: 'fāxiàn le shénme?', en: 'What did you discover?' },
                { cn: '被发现了。', pinyin: 'bèi fāxiàn le.', en: 'Was discovered.' },
                { cn: '发现新大陆。', pinyin: 'fāxiàn xīn dàlù.', en: 'Discover a new continent.' },
                { cn: '我发现他很聪明。', pinyin: 'wǒ fāxiàn tā hěn cōngmíng.', en: 'I found out he is very smart.' },
                { cn: '终于发现了。', pinyin: 'zhōngyú fāxiàn le.', en: 'Finally discovered.' }
            ]
        },
        {
            id: 'h3m_008', character: '改变', pinyin: 'gǎibiàn', meaning: 'to change', hsk: 3, category: 'verbs',
            examples: [
                { cn: '改变计划。', pinyin: 'gǎibiàn jìhuà.', en: 'Change the plan.' },
                { cn: '改变想法。', pinyin: 'gǎibiàn xiǎngfǎ.', en: 'Change the idea.' },
                { cn: '改变生活。', pinyin: 'gǎibiàn shēnghuó.', en: 'Change life.' },
                { cn: '改变自己。', pinyin: 'gǎibiàn zìjǐ.', en: 'Change yourself.' },
                { cn: '无法改变。', pinyin: 'wúfǎ gǎibiàn.', en: 'Cannot be changed.' },
                { cn: '改变了很多。', pinyin: 'gǎibiàn le hěn duō.', en: 'Changed a lot.' }
            ]
        },
        {
            id: 'h3m_009', character: '感谢', pinyin: 'gǎnxiè', meaning: 'to thank', hsk: 3, category: 'verbs',
            examples: [
                { cn: '感谢你的帮助。', pinyin: 'gǎnxiè nǐ de bāngzhù.', en: 'Thank you for your help.' },
                { cn: '非常感谢。', pinyin: 'fēicháng gǎnxiè.', en: 'Thank you very much.' },
                { cn: '感谢大家。', pinyin: 'gǎnxiè dàjiā.', en: 'Thank you everyone.' },
                { cn: '我很感谢他。', pinyin: 'wǒ hěn gǎnxiè tā.', en: 'I am very grateful to him.' },
                { cn: '表示感谢。', pinyin: 'biǎoshì gǎnxiè.', en: 'Express gratitude.' },
                { cn: '感谢信。', pinyin: 'gǎnxiè xìn.', en: 'Thank you letter.' }
            ]
        },
        {
            id: 'h3m_010', character: '关心', pinyin: 'guānxīn', meaning: 'to care about', hsk: 3, category: 'verbs',
            examples: [
                { cn: '我很关心你。', pinyin: 'wǒ hěn guānxīn nǐ.', en: 'I care about you very much.' },
                { cn: '关心别人。', pinyin: 'guānxīn biérén.', en: 'Care about others.' },
                { cn: '关心健康。', pinyin: 'guānxīn jiànkāng.', en: 'Care about health.' },
                { cn: '不关心。', pinyin: 'bù guānxīn.', en: 'Don\'t care.' },
                { cn: '关心国家大事。', pinyin: 'guānxīn guójiā dàshì.', en: 'Care about national affairs.' },
                { cn: '他很关心我。', pinyin: 'tā hěn guānxīn wǒ.', en: 'He cares about me very much.' }
            ]
        },
        {
            id: 'h3m_011', character: '检查', pinyin: 'jiǎnchá', meaning: 'to check', hsk: 3, category: 'verbs',
            examples: [
                { cn: '请检查一下。', pinyin: 'qǐng jiǎnchá yīxià.', en: 'Please check.' },
                { cn: '检查作业。', pinyin: 'jiǎnchá zuòyè.', en: 'Check homework.' },
                { cn: '检查身体。', pinyin: 'jiǎnchá shēntǐ.', en: 'Physical examination.' },
                { cn: '检查结果。', pinyin: 'jiǎnchá jiéguǒ.', en: 'Check the results.' },
                { cn: '仔细检查。', pinyin: 'zǐxì jiǎnchá.', en: 'Check carefully.' },
                { cn: '检查一下。', pinyin: 'jiǎnchá yīxià.', en: 'Take a look.' }
            ]
        },
        {
            id: 'h3m_012', character: '减少', pinyin: 'jiǎnshǎo', meaning: 'to reduce', hsk: 3, category: 'verbs',
            examples: [
                { cn: '减少浪费。', pinyin: 'jiǎnshǎo làngfèi.', en: 'Reduce waste.' },
                { cn: '减少开支。', pinyin: 'jiǎnshǎo kāizhī.', en: 'Reduce expenses.' },
                { cn: '减少压力。', pinyin: 'jiǎnshǎo yālì.', en: 'Reduce pressure.' },
                { cn: '减少人数。', pinyin: 'jiǎnshǎo rénshù.', en: 'Reduce the number of people.' },
                { cn: '减少错误。', pinyin: 'jiǎnshǎo cuòwù.', en: 'Reduce mistakes.' },
                { cn: '减少污染。', pinyin: 'jiǎnshǎo wūrǎn.', en: 'Reduce pollution.' }
            ]
        },
        {
            id: 'h3m_013', character: '交流', pinyin: 'jiāoliú', meaning: 'to communicate', hsk: 3, category: 'verbs',
            examples: [
                { cn: '我们需要交流。', pinyin: 'wǒmen xūyào jiāoliú.', en: 'We need to communicate.' },
                { cn: '文化交流。', pinyin: 'wénhuà jiāoliú.', en: 'Cultural exchange.' },
                { cn: '交流经验。', pinyin: 'jiāoliú jīngyàn.', en: 'Exchange experience.' },
                { cn: '互相交流。', pinyin: 'hùxiāng jiāoliú.', en: 'Communicate with each other.' },
                { cn: '交流想法。', pinyin: 'jiāoliú xiǎngfǎ.', en: 'Exchange ideas.' },
                { cn: '无法交流。', pinyin: 'wúfǎ jiāoliú.', en: 'Cannot communicate.' }
            ]
        },
        {
            id: 'h3m_014', character: '教育', pinyin: 'jiàoyù', meaning: 'to educate', hsk: 3, category: 'verbs',
            examples: [
                { cn: '教育很重要。', pinyin: 'jiàoyù hěn zhòngyào.', en: 'Education is very important.' },
                { cn: '受教育。', pinyin: 'shòu jiàoyù.', en: 'Receive education.' },
                { cn: '教育孩子。', pinyin: 'jiàoyù háizi.', en: 'Educate children.' },
                { cn: '教育制度。', pinyin: 'jiàoyù zhìdù.', en: 'Education system.' },
                { cn: '高等教育。', pinyin: 'gāoděng jiàoyù.', en: 'Higher education.' },
                { cn: '教育水平。', pinyin: 'jiàoyù shuǐpíng.', en: 'Education level.' }
            ]
        },
        {
            id: 'h3m_015', character: '接受', pinyin: 'jiēshòu', meaning: 'to accept', hsk: 3, category: 'verbs',
            examples: [
                { cn: '我接受你的建议。', pinyin: 'wǒ jiēshòu nǐ de jiànyì.', en: 'I accept your suggestion.' },
                { cn: '接受挑战。', pinyin: 'jiēshòu tiǎozhàn.', en: 'Accept the challenge.' },
                { cn: '接受礼物。', pinyin: 'jiēshòu lǐwù.', en: 'Accept a gift.' },
                { cn: '不能接受。', pinyin: 'bù néng jiēshòu.', en: 'Cannot accept.' },
                { cn: '接受现实。', pinyin: 'jiēshòu xiànshí.', en: 'Accept reality.' },
                { cn: '接受帮助。', pinyin: 'jiēshòu bāngzhù.', en: 'Accept help.' }
            ]
        },
        {
            id: 'h3m_016', character: '解决', pinyin: 'jiějué', meaning: 'to solve', hsk: 3, category: 'verbs',
            examples: [
                { cn: '解决问题。', pinyin: 'jiějué wèntí.', en: 'Solve the problem.' },
                { cn: '解决困难。', pinyin: 'jiějué kùnnán.', en: 'Overcome difficulties.' },
                { cn: '解决了。', pinyin: 'jiějué le.', en: 'Solved.' },
                { cn: '怎么解决？', pinyin: 'zěnme jiějué?', en: 'How to solve it?' },
                { cn: '解决办法。', pinyin: 'jiějué bànfǎ.', en: 'Solution.' },
                { cn: '无法解决。', pinyin: 'wúfǎ jiějué.', en: 'Cannot be solved.' }
            ]
        },
        {
            id: 'h3m_017', character: '解释', pinyin: 'jiěshì', meaning: 'to explain', hsk: 3, category: 'verbs',
            examples: [
                { cn: '请解释一下。', pinyin: 'qǐng jiěshì yīxià.', en: 'Please explain.' },
                { cn: '解释清楚。', pinyin: 'jiěshì qīngchu.', en: 'Explain clearly.' },
                { cn: '解释原因。', pinyin: 'jiěshì yuányīn.', en: 'Explain the reason.' },
                { cn: '他解释了。', pinyin: 'tā jiěshì le.', en: 'He explained.' },
                { cn: '不需要解释。', pinyin: 'bù xūyào jiěshì.', en: 'No need to explain.' },
                { cn: '解释一下。', pinyin: 'jiěshì yīxià.', en: 'Give an explanation.' }
            ]
        },
        {
            id: 'h3m_018', character: '决定', pinyin: 'juédìng', meaning: 'to decide', hsk: 3, category: 'verbs',
            examples: [
                { cn: '我决定去。', pinyin: 'wǒ juédìng qù.', en: 'I decided to go.' },
                { cn: '做决定。', pinyin: 'zuò juédìng.', en: 'Make a decision.' },
                { cn: '决定好了。', pinyin: 'juédìng hǎo le.', en: 'Decided.' },
                { cn: '他决定留下。', pinyin: 'tā juédìng liú xià.', en: 'He decided to stay.' },
                { cn: '很难决定。', pinyin: 'hěn nán juédìng.', en: 'Hard to decide.' },
                { cn: '决定了吗？', pinyin: 'juédìng le ma?', en: 'Have you decided?' }
            ]
        },
        {
            id: 'h3m_019', character: '考虑', pinyin: 'kǎolǜ', meaning: 'to consider', hsk: 3, category: 'verbs',
            examples: [
                { cn: '让我考虑一下。', pinyin: 'ràng wǒ kǎolǜ yīxià.', en: 'Let me think about it.' },
                { cn: '考虑清楚。', pinyin: 'kǎolǜ qīngchu.', en: 'Think it through.' },
                { cn: '考虑周到。', pinyin: 'kǎolǜ zhōudào.', en: 'Considerate.' },
                { cn: '考虑一下。', pinyin: 'kǎolǜ yīxià.', en: 'Consider it.' },
                { cn: '认真考虑。', pinyin: 'rènzhēn kǎolǜ.', en: 'Seriously consider.' },
                { cn: '考虑好了吗？', pinyin: 'kǎolǜ hǎo le ma?', en: 'Have you thought it through?' }
            ]
        },
        {
            id: 'h3m_020', character: '离开', pinyin: 'líkāi', meaning: 'to leave', hsk: 3, category: 'verbs',
            examples: [
                { cn: '我要离开了。', pinyin: 'wǒ yào líkāi le.', en: 'I have to leave.' },
                { cn: '离开这里。', pinyin: 'líkāi zhèlǐ.', en: 'Leave this place.' },
                { cn: '他离开了。', pinyin: 'tā líkāi le.', en: 'He left.' },
                { cn: '离开家。', pinyin: 'líkāi jiā.', en: 'Leave home.' },
                { cn: '离开中国。', pinyin: 'líkāi zhōngguó.', en: 'Leave China.' },
                { cn: '舍不得离开。', pinyin: 'shěbude líkāi.', en: 'Reluctant to leave.' }
            ]
        },

        // ============================
        // NOUNS
        // ============================
        {
            id: 'h3m_021', character: '办法', pinyin: 'bànfǎ', meaning: 'method', hsk: 3, category: 'nouns',
            examples: [
                { cn: '没办法。', pinyin: 'méi bànfǎ.', en: 'No way.' },
                { cn: '有办法。', pinyin: 'yǒu bànfǎ.', en: 'There is a way.' },
                { cn: '想办法。', pinyin: 'xiǎng bànfǎ.', en: 'Think of a way.' },
                { cn: '好办法。', pinyin: 'hǎo bànfǎ.', en: 'Good method.' },
                { cn: '什么办法？', pinyin: 'shénme bànfǎ?', en: 'What method?' },
                { cn: '用什么办法？', pinyin: 'yòng shénme bànfǎ?', en: 'Use what method?' }
            ]
        },
        {
            id: 'h3m_022', character: '办公室', pinyin: 'bàngōngshì', meaning: 'office', hsk: 3, category: 'nouns',
            examples: [
                { cn: '在办公室。', pinyin: 'zài bàngōngshì.', en: 'In the office.' },
                { cn: '去办公室。', pinyin: 'qù bàngōngshì.', en: 'Go to the office.' },
                { cn: '办公室很大。', pinyin: 'bàngōngshì hěn dà.', en: 'The office is very big.' },
                { cn: '办公室在哪里？', pinyin: 'bàngōngshì zài nǎlǐ?', en: 'Where is the office?' },
                { cn: '在办公室工作。', pinyin: 'zài bàngōngshì gōngzuò.', en: 'Work in the office.' },
                { cn: '办公室有空调。', pinyin: 'bàngōngshì yǒu kōngtiáo.', en: 'The office has air conditioning.' }
            ]
        },
        {
            id: 'h3m_023', character: '报纸', pinyin: 'bàozhǐ', meaning: 'newspaper', hsk: 3, category: 'nouns',
            examples: [
                { cn: '看报纸。', pinyin: 'kàn bàozhǐ.', en: 'Read the newspaper.' },
                { cn: '买报纸。', pinyin: 'mǎi bàozhǐ.', en: 'Buy a newspaper.' },
                { cn: '今天的报纸。', pinyin: 'jīntiān de bàozhǐ.', en: 'Today\'s newspaper.' },
                { cn: '报纸上说。', pinyin: 'bàozhǐ shàng shuō.', en: 'The newspaper says.' },
                { cn: '中文报纸。', pinyin: 'zhōngwén bàozhǐ.', en: 'Chinese newspaper.' },
                { cn: '看中文报纸。', pinyin: 'kàn zhōngwén bàozhǐ.', en: 'Read Chinese newspapers.' }
            ]
        },
        {
            id: 'h3m_024', character: '笔记本', pinyin: 'bǐjìběn', meaning: 'notebook', hsk: 3, category: 'nouns',
            examples: [
                { cn: '写在笔记本上。', pinyin: 'xiě zài bǐjìběn shàng.', en: 'Write it in the notebook.' },
                { cn: '买笔记本。', pinyin: 'mǎi bǐjìběn.', en: 'Buy a notebook.' },
                { cn: '我的笔记本。', pinyin: 'wǒ de bǐjìběn.', en: 'My notebook.' },
                { cn: '笔记本电脑。', pinyin: 'bǐjìběn diànnǎo.', en: 'Laptop.' },
                { cn: '用笔记本记。', pinyin: 'yòng bǐjìběn jì.', en: 'Use a notebook to record.' },
                { cn: '新笔记本。', pinyin: 'xīn bǐjìběn.', en: 'New notebook.' }
            ]
        },
        {
            id: 'h3m_025', character: '材料', pinyin: 'cáiliào', meaning: 'material', hsk: 3, category: 'nouns',
            examples: [
                { cn: '准备材料。', pinyin: 'zhǔnbèi cáiliào.', en: 'Prepare materials.' },
                { cn: '学习材料。', pinyin: 'xuéxí cáiliào.', en: 'Learning materials.' },
                { cn: '材料很多。', pinyin: 'cáiliào hěn duō.', en: 'There are many materials.' },
                { cn: '什么材料？', pinyin: 'shénme cáiliào?', en: 'What material?' },
                { cn: '买材料。', pinyin: 'mǎi cáiliào.', en: 'Buy materials.' },
                { cn: '材料不够。', pinyin: 'cáiliào bù gòu.', en: 'Not enough materials.' }
            ]
        },
        {
            id: 'h3m_026', character: '餐厅', pinyin: 'cāntīng', meaning: 'restaurant', hsk: 3, category: 'nouns',
            examples: [
                { cn: '去餐厅吃饭。', pinyin: 'qù cāntīng chīfàn.', en: 'Go to the restaurant to eat.' },
                { cn: '餐厅人很多。', pinyin: 'cāntīng rén hěn duō.', en: 'The restaurant has many people.' },
                { cn: '学校餐厅。', pinyin: 'xuéxiào cāntīng.', en: 'School cafeteria.' },
                { cn: '餐厅在哪里？', pinyin: 'cāntīng zài nǎlǐ?', en: 'Where is the restaurant?' },
                { cn: '餐厅很大。', pinyin: 'cāntīng hěn dà.', en: 'The restaurant is very big.' },
                { cn: '去餐厅。', pinyin: 'qù cāntīng.', en: 'Go to the restaurant.' }
            ]
        },
        {
            id: 'h3m_027', character: '成绩', pinyin: 'chéngjì', meaning: 'achievement/grades', hsk: 3, category: 'nouns',
            examples: [
                { cn: '成绩很好。', pinyin: 'chéngjì hěn hǎo.', en: 'Good grades.' },
                { cn: '考试成绩。', pinyin: 'kǎoshì chéngjì.', en: 'Exam results.' },
                { cn: '成绩提高了。', pinyin: 'chéngjì tígāo le.', en: 'Grades improved.' },
                { cn: '成绩不错。', pinyin: 'chéngjì bùcuò.', en: 'Not bad grades.' },
                { cn: '看成绩。', pinyin: 'kàn chéngjì.', en: 'Check grades.' },
                { cn: '成绩下降了。', pinyin: 'chéngjì xiàjiàng le.', en: 'Grades declined.' }
            ]
        },
        {
            id: 'h3m_028', character: '窗户', pinyin: 'chuānghu', meaning: 'window', hsk: 3, category: 'nouns',
            examples: [
                { cn: '打开窗户。', pinyin: 'dǎkāi chuānghu.', en: 'Open the window.' },
                { cn: '关窗户。', pinyin: 'guān chuānghu.', en: 'Close the window.' },
                { cn: '窗户很大。', pinyin: 'chuānghu hěn dà.', en: 'The window is very big.' },
                { cn: '窗户旁边。', pinyin: 'chuānghu pángbiān.', en: 'Beside the window.' },
                { cn: '看窗外。', pinyin: 'kàn chuāng wài.', en: 'Look out the window.' },
                { cn: '窗户开着。', pinyin: 'chuānghu kāizhe.', en: 'The window is open.' }
            ]
        },
        {
            id: 'h3m_029', character: '词语', pinyin: 'cíyǔ', meaning: 'vocabulary', hsk: 3, category: 'nouns',
            examples: [
                { cn: '学习新词语。', pinyin: 'xuéxí xīn cíyǔ.', en: 'Learn new vocabulary.' },
                { cn: '这个词语什么意思？', pinyin: 'zhège cíyǔ shénme yìsi?', en: 'What does this word mean?' },
                { cn: '记住词语。', pinyin: 'jì zhù cíyǔ.', en: 'Remember the vocabulary.' },
                { cn: '中文词语。', pinyin: 'zhōngwén cíyǔ.', en: 'Chinese vocabulary.' },
                { cn: '很多词语。', pinyin: 'hěn duō cíyǔ.', en: 'Many words.' },
                { cn: '词语表。', pinyin: 'cíyǔ biǎo.', en: 'Vocabulary list.' }
            ]
        },
        {
            id: 'h3m_030', character: '答案', pinyin: 'dá\'àn', meaning: 'answer', hsk: 3, category: 'nouns',
            examples: [
                { cn: '正确答案。', pinyin: 'zhèngquè dá\'àn.', en: 'Correct answer.' },
                { cn: '答案是什么？', pinyin: 'dá\'àn shì shénme?', en: 'What is the answer?' },
                { cn: '找到答案。', pinyin: 'zhǎo dào dá\'àn.', en: 'Find the answer.' },
                { cn: '答案不对。', pinyin: 'dá\'àn bù duì.', en: 'The answer is wrong.' },
                { cn: '没有答案。', pinyin: 'méiyǒu dá\'àn.', en: 'No answer.' },
                { cn: '写答案。', pinyin: 'xiě dá\'àn.', en: 'Write the answer.' }
            ]
        },

        // ============================
        // ADJECTIVES
        // ============================
        {
            id: 'h3m_031', character: '安全', pinyin: 'ānquán', meaning: 'safe', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '很安全。', pinyin: 'hěn ānquán.', en: 'Very safe.' },
                { cn: '注意安全。', pinyin: 'zhùyì ānquán.', en: 'Pay attention to safety.' },
                { cn: '安全第一。', pinyin: 'ānquán dì yī.', en: 'Safety first.' },
                { cn: '不安全。', pinyin: 'bù ānquán.', en: 'Unsafe.' },
                { cn: '安全出口。', pinyin: 'ānquán chūkǒu.', en: 'Emergency exit.' },
                { cn: '安全带。', pinyin: 'ānquán dài.', en: 'Seat belt.' }
            ]
        },
        {
            id: 'h3m_032', character: '安静', pinyin: 'ānjìng', meaning: 'quiet', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '很安静。', pinyin: 'hěn ānjìng.', en: 'Very quiet.' },
                { cn: '请安静。', pinyin: 'qǐng ānjìng.', en: 'Please be quiet.' },
                { cn: '安静的地方。', pinyin: 'ānjìng de dìfāng.', en: 'A quiet place.' },
                { cn: '图书馆很安静。', pinyin: 'túshūguǎn hěn ānjìng.', en: 'The library is very quiet.' },
                { cn: '安静一点。', pinyin: 'ānjìng yīdiǎn.', en: 'Be quieter.' },
                { cn: '不安静。', pinyin: 'bù ānjìng.', en: 'Not quiet.' }
            ]
        },
        {
            id: 'h3m_033', character: '方便', pinyin: 'fāngbiàn', meaning: 'convenient', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '很方便。', pinyin: 'hěn fāngbiàn.', en: 'Very convenient.' },
                { cn: '方便吗？', pinyin: 'fāngbiàn ma?', en: 'Is it convenient?' },
                { cn: '不方便。', pinyin: 'bù fāngbiàn.', en: 'Not convenient.' },
                { cn: '交通方便。', pinyin: 'jiāotōng fāngbiàn.', en: 'Convenient transportation.' },
                { cn: '方便面。', pinyin: 'fāngbiàn miàn.', en: 'Instant noodles.' },
                { cn: '很方便使用。', pinyin: 'hěn fāngbiàn shǐyòng.', en: 'Very convenient to use.' }
            ]
        },
        {
            id: 'h3m_034', character: '丰富', pinyin: 'fēngfù', meaning: 'rich/abundant', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '内容很丰富。', pinyin: 'nèiróng hěn fēngfù.', en: 'The content is very rich.' },
                { cn: '经验丰富。', pinyin: 'jīngyàn fēngfù.', en: 'Rich experience.' },
                { cn: '资源丰富。', pinyin: 'zīyuán fēngfù.', en: 'Abundant resources.' },
                { cn: '丰富的知识。', pinyin: 'fēngfù de zhīshi.', en: 'Rich knowledge.' },
                { cn: '生活很丰富。', pinyin: 'shēnghuó hěn fēngfù.', en: 'Life is very rich.' },
                { cn: '种类丰富。', pinyin: 'zhǒnglèi fēngfù.', en: 'Rich variety.' }
            ]
        },
        {
            id: 'h3m_035', character: '复杂', pinyin: 'fùzá', meaning: 'complex', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '很复杂。', pinyin: 'hěn fùzá.', en: 'Very complex.' },
                { cn: '问题很复杂。', pinyin: 'wèntí hěn fùzá.', en: 'The problem is very complex.' },
                { cn: '不复杂。', pinyin: 'bù fùzá.', en: 'Not complex.' },
                { cn: '情况很复杂。', pinyin: 'qíngkuàng hěn fùzá.', en: 'The situation is very complex.' },
                { cn: '复杂的系统。', pinyin: 'fùzá de xìtǒng.', en: 'A complex system.' },
                { cn: '太复杂了。', pinyin: 'tài fùzá le.', en: 'Too complex.' }
            ]
        },
        {
            id: 'h3m_036', character: '合适', pinyin: 'héshì', meaning: 'suitable', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '这个很合适。', pinyin: 'zhège hěn héshì.', en: 'This is very suitable.' },
                { cn: '合适吗？', pinyin: 'héshì ma?', en: 'Is it suitable?' },
                { cn: '不合适。', pinyin: 'bù héshì.', en: 'Not suitable.' },
                { cn: '找合适的。', pinyin: 'zhǎo héshì de.', en: 'Find a suitable one.' },
                { cn: '很合适你。', pinyin: 'hěn héshì nǐ.', en: 'Very suitable for you.' },
                { cn: '合适的价格。', pinyin: 'héshì de jiàgé.', en: 'A reasonable price.' }
            ]
        },
        {
            id: 'h3m_037', character: '紧张', pinyin: 'jǐnzhāng', meaning: 'nervous', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '考试前我很紧张。', pinyin: 'kǎoshì qián wǒ hěn jǐnzhāng.', en: 'I am very nervous before the exam.' },
                { cn: '不要紧张。', pinyin: 'bùyào jǐnzhāng.', en: 'Don\'t be nervous.' },
                { cn: '很紧张。', pinyin: 'hěn jǐnzhāng.', en: 'Very nervous.' },
                { cn: '他很紧张。', pinyin: 'tā hěn jǐnzhāng.', en: 'He is very nervous.' },
                { cn: '紧张什么？', pinyin: 'jǐnzhāng shénme?', en: 'What are you nervous about?' },
                { cn: '有点紧张。', pinyin: 'yǒudiǎn jǐnzhāng.', en: 'A little nervous.' }
            ]
        },
        {
            id: 'h3m_038', character: '精彩', pinyin: 'jīngcǎi', meaning: 'wonderful', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '很精彩。', pinyin: 'hěn jīngcǎi.', en: 'Very wonderful.' },
                { cn: '精彩的表演。', pinyin: 'jīngcǎi de biǎoyǎn.', en: 'A wonderful performance.' },
                { cn: '比赛很精彩。', pinyin: 'bǐsài hěn jīngcǎi.', en: 'The game is very exciting.' },
                { cn: '非常精彩。', pinyin: 'fēicháng jīngcǎi.', en: 'Extremely wonderful.' },
                { cn: '精彩的电影。', pinyin: 'jīngcǎi de diànyǐng.', en: 'A wonderful movie.' },
                { cn: '太精彩了！', pinyin: 'tài jīngcǎi le!', en: 'Too wonderful!' }
            ]
        },
        {
            id: 'h3m_039', character: '开心', pinyin: 'kāixīn', meaning: 'happy', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '很开心。', pinyin: 'hěn kāixīn.', en: 'Very happy.' },
                { cn: '今天很开心。', pinyin: 'jīntiān hěn kāixīn.', en: 'Very happy today.' },
                { cn: '不开心。', pinyin: 'bù kāixīn.', en: 'Unhappy.' },
                { cn: '开心一点。', pinyin: 'kāixīn yīdiǎn.', en: 'Be happier.' },
                { cn: '他很开心。', pinyin: 'tā hěn kāixīn.', en: 'He is very happy.' },
                { cn: '玩得很开心。', pinyin: 'wán de hěn kāixīn.', en: 'Had a great time.' }
            ]
        },
        {
            id: 'h3m_040', character: '可爱', pinyin: 'kě\'ài', meaning: 'cute', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '很可爱。', pinyin: 'hěn kě\'ài.', en: 'Very cute.' },
                { cn: '这个很可爱。', pinyin: 'zhège hěn kě\'ài.', en: 'This is very cute.' },
                { cn: '可爱的孩子。', pinyin: 'kě\'ài de háizi.', en: 'A cute child.' },
                { cn: '小猫很可爱。', pinyin: 'xiǎo māo hěn kě\'ài.', en: 'The kitten is very cute.' },
                { cn: '非常可爱。', pinyin: 'fēicháng kě\'ài.', en: 'Very cute.' },
                { cn: '太可爱了！', pinyin: 'tài kě\'ài le!', en: 'So cute!' }
            ]
        },
        {
            id: 'h3m_041', character: '困难', pinyin: 'kùnnán', meaning: 'difficult', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '很困难。', pinyin: 'hěn kùnnán.', en: 'Very difficult.' },
                { cn: '遇到困难。', pinyin: 'yù dào kùnnán.', en: 'Encounter difficulties.' },
                { cn: '克服困难。', pinyin: 'kèfú kùnnán.', en: 'Overcome difficulties.' },
                { cn: '困难很大。', pinyin: 'kùnnán hěn dà.', en: 'The difficulty is great.' },
                { cn: '有困难。', pinyin: 'yǒu kùnnán.', en: 'Have difficulties.' },
                { cn: '不怕困难。', pinyin: 'bù pà kùnnán.', en: 'Not afraid of difficulties.' }
            ]
        },
        {
            id: 'h3m_042', character: '厉害', pinyin: 'lìhai', meaning: 'awesome', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '很厉害。', pinyin: 'hěn lìhai.', en: 'Very awesome.' },
                { cn: '他很厉害。', pinyin: 'tā hěn lìhai.', en: 'He is very impressive.' },
                { cn: '太厉害了！', pinyin: 'tài lìhai le!', en: 'Too awesome!' },
                { cn: '真厉害。', pinyin: 'zhēn lìhai.', en: 'Really impressive.' },
                { cn: '厉害的人。', pinyin: 'lìhai de rén.', en: 'An impressive person.' },
                { cn: '你真厉害。', pinyin: 'nǐ zhēn lìhai.', en: 'You are really impressive.' }
            ]
        },
        {
            id: 'h3m_043', character: '难过', pinyin: 'nánguò', meaning: 'sad', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '我很难过。', pinyin: 'wǒ hěn nánguò.', en: 'I am very sad.' },
                { cn: '不要难过。', pinyin: 'bùyào nánguò.', en: 'Don\'t be sad.' },
                { cn: '很难过。', pinyin: 'hěn nánguò.', en: 'Very sad.' },
                { cn: '他很难过。', pinyin: 'tā hěn nánguò.', en: 'He is very sad.' },
                { cn: '心里难过。', pinyin: 'xīnlǐ nánguò.', en: 'Feeling sad.' },
                { cn: '难过什么？', pinyin: 'nánguò shénme?', en: 'What are you sad about?' }
            ]
        },
        {
            id: 'h3m_044', character: '热情', pinyin: 'rèqíng', meaning: 'enthusiastic', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '很热情。', pinyin: 'hěn rèqíng.', en: 'Very enthusiastic.' },
                { cn: '热情的人。', pinyin: 'rèqíng de rén.', en: 'An enthusiastic person.' },
                { cn: '热情招待。', pinyin: 'rèqíng zhāodài.', en: 'Warm reception.' },
                { cn: '他很热情。', pinyin: 'tā hěn rèqíng.', en: 'He is very enthusiastic.' },
                { cn: '非常热情。', pinyin: 'fēicháng rèqíng.', en: 'Very enthusiastic.' },
                { cn: '热情欢迎。', pinyin: 'rèqíng huānyíng.', en: 'Warmly welcome.' }
            ]
        },
        {
            id: 'h3m_045', character: '伤心', pinyin: 'shāngxīn', meaning: 'sad', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '很伤心。', pinyin: 'hěn shāngxīn.', en: 'Very sad.' },
                { cn: '不要伤心。', pinyin: 'bùyào shāngxīn.', en: 'Don\'t be sad.' },
                { cn: '他很伤心。', pinyin: 'tā hěn shāngxīn.', en: 'He is very sad.' },
                { cn: '伤心事。', pinyin: 'shāngxīn shì.', en: 'A sad matter.' },
                { cn: '哭了，很伤心。', pinyin: 'kū le, hěn shāngxīn.', en: 'Cried, very sad.' },
                { cn: '别伤心了。', pinyin: 'bié shāngxīn le.', en: 'Don\'t be sad anymore.' }
            ]
        },
        {
            id: 'h3m_046', character: '生气', pinyin: 'shēngqì', meaning: 'angry', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '很生气。', pinyin: 'hěn shēngqì.', en: 'Very angry.' },
                { cn: '不要生气。', pinyin: 'bùyào shēngqì.', en: 'Don\'t be angry.' },
                { cn: '他生气了。', pinyin: 'tā shēngqì le.', en: 'He is angry.' },
                { cn: '生什么气？', pinyin: 'shēng shénme qì?', en: 'Why are you angry?' },
                { cn: '他生我的气。', pinyin: 'tā shēng wǒ de qì.', en: 'He is angry at me.' },
                { cn: '别生他的气。', pinyin: 'bié shēng tā de qì.', en: 'Don\'t be angry at him.' }
            ]
        },
        {
            id: 'h3m_047', character: '失望', pinyin: 'shīwàng', meaning: 'disappointed', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '很失望。', pinyin: 'hěn shīwàng.', en: 'Very disappointed.' },
                { cn: '不要失望。', pinyin: 'bùyào shīwàng.', en: 'Don\'t be disappointed.' },
                { cn: '他很失望。', pinyin: 'tā hěn shīwàng.', en: 'He is very disappointed.' },
                { cn: '令人失望。', pinyin: 'lìng rén shīwàng.', en: 'Disappointing.' },
                { cn: '失望了。', pinyin: 'shīwàng le.', en: 'Disappointed.' },
                { cn: '太失望了。', pinyin: 'tài shīwàng le.', en: 'Too disappointed.' }
            ]
        },
        {
            id: 'h3m_048', character: '舒服', pinyin: 'shūfu', meaning: 'comfortable', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '很舒服。', pinyin: 'hěn shūfu.', en: 'Very comfortable.' },
                { cn: '不舒服。', pinyin: 'bù shūfu.', en: 'Uncomfortable.' },
                { cn: '床很舒服。', pinyin: 'chuáng hěn shūfu.', en: 'The bed is very comfortable.' },
                { cn: '感觉不舒服。', pinyin: 'gǎnjué bù shūfu.', en: 'Feeling unwell.' },
                { cn: '穿得很舒服。', pinyin: 'chuān de hěn shūfu.', en: 'Dressed comfortably.' },
                { cn: '这里很舒服。', pinyin: 'zhèlǐ hěn shūfu.', en: 'It\'s very comfortable here.' }
            ]
        },
        {
            id: 'h3m_049', character: '无聊', pinyin: 'wúliáo', meaning: 'boring', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '很无聊。', pinyin: 'hěn wúliáo.', en: 'Very boring.' },
                { cn: '无聊的时候。', pinyin: 'wúliáo de shíhou.', en: 'When bored.' },
                { cn: '这个很无聊。', pinyin: 'zhège hěn wúliáo.', en: 'This is very boring.' },
                { cn: '不无聊。', pinyin: 'bù wúliáo.', en: 'Not boring.' },
                { cn: '太无聊了。', pinyin: 'tài wúliáo le.', en: 'Too boring.' },
                { cn: '觉得无聊。', pinyin: 'juéde wúliáo.', en: 'Feel bored.' }
            ]
        },
        {
            id: 'h3m_050', character: '幸福', pinyin: 'xìngfú', meaning: 'happy/blessed', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '很幸福。', pinyin: 'hěn xìngfú.', en: 'Very happy.' },
                { cn: '幸福的生活。', pinyin: 'xìngfú de shēnghuó.', en: 'A happy life.' },
                { cn: '祝你幸福。', pinyin: 'zhù nǐ xìngfú.', en: 'Wish you happiness.' },
                { cn: '他很幸福。', pinyin: 'tā hěn xìngfú.', en: 'He is very happy.' },
                { cn: '幸福的家庭。', pinyin: 'xìngfú de jiātíng.', en: 'A happy family.' },
                { cn: '感到幸福。', pinyin: 'gǎndào xìngfú.', en: 'Feel happy.' }
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

window.HSK3Massive = HSK3Massive;

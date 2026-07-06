// ============================================
// CHINESE MASTER - Dialogue Expansion (20 Dialogues)
// Merges into ListeningData.dialogue
// ============================================

var ListeningDialoguePlus = {
    dialogue: [
        // ---- EASY (7 items) ----
        {
            id: 'ldip001', type: 'dialogue', difficulty: 'easy',
            title: '在餐厅点菜',
            meaning: 'Ordering Food at a Restaurant',
            turns: [
                { speaker: 'A', chinese: '欢迎光临！几位？', pinyin: 'huānyíng guānglín! jǐ wèi?', meaning: 'Welcome! How many people?' },
                { speaker: 'B', chinese: '两位，有靠窗的座位吗？', pinyin: 'liǎng wèi, yǒu kào chuāng de zuòwèi ma?', meaning: 'Two, do you have a window seat?' },
                { speaker: 'A', chinese: '有的，这边请。这是菜单。', pinyin: 'yǒu de, zhè biān qǐng. zhè shì càidān.', meaning: 'Yes we do, this way please. Here is the menu.' },
                { speaker: 'B', chinese: '我要一份红烧牛肉面，再来一杯茶。', pinyin: 'wǒ yào yī fèn hóngshāo niúròumiàn, zài lái yī bēi chá.', meaning: 'I\'ll have braised beef noodles and a cup of tea.' }
            ],
            culturalNote: 'Chinese restaurants typically seat by the window on request; tea is a common default beverage.',
            questions: [
                { question: 'How many people are dining?', options: ['One', 'Two', 'Three', 'Four'], correct: 1 },
                { question: 'What type of seat did they request?', options: ['Booth', 'Window seat', 'Corner', 'Outside'], correct: 1 }
            ]
        },
        {
            id: 'ldip002', type: 'dialogue', difficulty: 'easy',
            title: '问路去超市',
            meaning: 'Asking Directions to the Supermarket',
            turns: [
                { speaker: 'A', chinese: '请问，最近的超市怎么走？', pinyin: 'qǐngwèn, zuìjìn de chāoshì zěnme zǒu?', meaning: 'Excuse me, how do I get to the nearest supermarket?' },
                { speaker: 'B', chinese: '一直往前走，过两个路口就到了。', pinyin: 'yīzhí wǎng qián zǒu, guò liǎng gè lùkǒu jiù dào le.', meaning: 'Go straight, after two intersections you\'ll be there.' },
                { speaker: 'A', chinese: '要走多久？', pinyin: 'yào zǒu duō jiǔ?', meaning: 'How long does it take to walk?' },
                { speaker: 'B', chinese: '不远，大概五分钟。', pinyin: 'bù yuǎn, dàgài wǔ fēnzhōng.', meaning: 'Not far, about five minutes.' },
                { speaker: 'A', chinese: '太谢谢你了！', pinyin: 'tài xièxie nǐ le!', meaning: 'Thank you very much!' }
            ],
            culturalNote: 'People in China are generally very willing to give directions to strangers.',
            questions: [
                { question: 'Where does the person want to go?', options: ['Bank', 'Supermarket', 'Park', 'Hospital'], correct: 1 },
                { question: 'How long is the walk?', options: ['Two minutes', 'Five minutes', 'Ten minutes', 'Fifteen minutes'], correct: 1 }
            ]
        },
        {
            id: 'ldip003', type: 'dialogue', difficulty: 'easy',
            title: '买衣服讨价',
            meaning: 'Bargaining for Clothes',
            turns: [
                { speaker: 'A', chinese: '这件T恤多少钱？', pinyin: 'zhè jiàn T xù duōshao qián?', meaning: 'How much is this T-shirt?' },
                { speaker: 'B', chinese: '一百五十块，质量很好的。', pinyin: 'yībǎi wǔshí kuài, zhìliàng hěn hǎo de.', meaning: '150 yuan, the quality is very good.' },
                { speaker: 'A', chinese: '太贵了！八十块可以吗？', pinyin: 'tài guì le! bāshí kuài kěyǐ ma?', meaning: 'Too expensive! Is 80 yuan OK?' },
                { speaker: 'B', chinese: '好吧，八十块卖给你了。', pinyin: 'hǎo ba, bāshí kuài mài gěi nǐ le.', meaning: 'Alright, 80 yuan, sold to you.' }
            ],
            culturalNote: 'Bargaining is expected in Chinese markets and street vendors, though fixed-price stores are increasingly common.',
            questions: [
                { question: 'What was the original price?', options: ['80 yuan', '100 yuan', '150 yuan', '200 yuan'], correct: 2 },
                { question: 'What was the final price?', options: ['80 yuan', '100 yuan', '120 yuan', '150 yuan'], correct: 0 }
            ]
        },
        {
            id: 'ldip004', type: 'dialogue', difficulty: 'easy',
            title: '看医生',
            meaning: 'At the Doctor',
            turns: [
                { speaker: 'A', chinese: '你怎么了？哪里不舒服？', pinyin: 'nǐ zěnme le? nǎlǐ bù shūfu?', meaning: 'What\'s wrong? Where do you feel unwell?' },
                { speaker: 'B', chinese: '医生，我头疼，还发烧了。', pinyin: 'yīshēng, wǒ tóuténg, hái fāshāo le.', meaning: 'Doctor, I have a headache and also a fever.' },
                { speaker: 'A', chinese: '量一下体温。嗯，三十八度。你感冒了。', pinyin: 'liáng yīxià tǐwēn. ńg, sānshíbā dù. nǐ gǎnmào le.', meaning: 'Let me check your temperature. Hmm, 38 degrees. You have a cold.' },
                { speaker: 'B', chinese: '要打针吗？', pinyin: 'yào dǎzhēn ma?', meaning: 'Do I need an injection?' },
                { speaker: 'A', chinese: '不用打针，吃药多喝水就好了。', pinyin: 'bùyòng dǎzhēn, chī yào duō hē shuǐ jiù hǎo le.', meaning: 'No injection needed, take medicine and drink more water.' }
            ],
            culturalNote: 'Chinese doctors commonly measure temperature in Celsius and often prescribe medicine quickly.',
            questions: [
                { question: 'What symptoms does the patient have?', options: ['Stomachache', 'Headache and fever', 'Cough', 'Sore throat'], correct: 1 },
                { question: 'What treatment was given?', options: ['Injection', 'Surgery', 'Medicine and water', 'Rest only'], correct: 2 }
            ]
        },
        {
            id: 'ldip005', type: 'dialogue', difficulty: 'easy',
            title: '遇见老朋友',
            meaning: 'Meeting an Old Friend',
            turns: [
                { speaker: 'A', chinese: '好久不见！你变漂亮了！', pinyin: 'hǎojiǔ bùjiàn! nǐ biàn piàoliang le!', meaning: 'Long time no see! You got prettier!' },
                { speaker: 'B', chinese: '谢谢你，你也越来越帅了！', pinyin: 'xièxie nǐ, nǐ yě yuè lái yuè shuài le!', meaning: 'Thanks, you are also getting more handsome!' },
                { speaker: 'A', chinese: '最近在忙什么？', pinyin: 'zuìjìn zài máng shénme?', meaning: 'What have you been busy with lately?' },
                { speaker: 'B', chinese: '我在学中文，很有意思。', pinyin: 'wǒ zài xué zhōngwén, hěn yǒu yìsi.', meaning: 'I\'m learning Chinese, it\'s very interesting.' }
            ],
            culturalNote: 'Compliments on appearance are common when meeting acquaintances in China, often reciprocated.',
            questions: [
                { question: 'How long has it been since they last met?', options: ['A few days', 'A few weeks', 'A long time', 'Never met'], correct: 2 },
                { question: 'What has person B been doing?', options: ['Working', 'Traveling', 'Learning Chinese', 'Studying abroad'], correct: 2 }
            ]
        },
        {
            id: 'ldip006', type: 'dialogue', difficulty: 'easy',
            title: '在机场接人',
            meaning: 'Picking Someone Up at the Airport',
            turns: [
                { speaker: 'A', chinese: '你好！你是张先生吗？', pinyin: 'nǐ hǎo! nǐ shì zhāng xiānshēng ma?', meaning: 'Hello! Are you Mr. Zhang?' },
                { speaker: 'B', chinese: '是的，你是来接我的吗？', pinyin: 'shì de, nǐ shì lái jiē wǒ de ma?', meaning: 'Yes, are you here to pick me up?' },
                { speaker: 'A', chinese: '对，欢迎来北京！车在外面等我们。', pinyin: 'duì, huānyíng lái běijīng! chē zài wàimiàn děng wǒmen.', meaning: 'Yes, welcome to Beijing! The car is waiting outside.' },
                { speaker: 'B', chinese: '太好了，我们走吧。', pinyin: 'tài hǎo le, wǒmen zǒu ba.', meaning: 'Great, let\'s go.' }
            ],
            culturalNote: 'Having a driver or colleague meet you at the airport is a common sign of hospitality in Chinese business culture.',
            questions: [
                { question: 'Where does this conversation take place?', options: ['Train station', 'Airport', 'Hotel', 'Office'], correct: 1 },
                { question: 'What city has person B arrived in?', options: ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'], correct: 1 }
            ]
        },
        {
            id: 'ldip007', type: 'dialogue', difficulty: 'easy',
            title: '酒店入住',
            meaning: 'Hotel Check-in',
            turns: [
                { speaker: 'A', chinese: '你好，我预订了一个房间。', pinyin: 'nǐ hǎo, wǒ yùdìng le yī gè fángjiān.', meaning: 'Hello, I booked a room.' },
                { speaker: 'B', chinese: '请给我你的护照。', pinyin: 'qǐng gěi wǒ nǐ de hùzhào.', meaning: 'Please give me your passport.' },
                { speaker: 'A', chinese: '好的，这是护照。有WiFi吗？', pinyin: 'hǎo de, zhè shì hùzhào. yǒu WiFi ma?', meaning: 'Here is my passport. Is there WiFi?' },
                { speaker: 'B', chinese: '有的，密码在房卡上面。', pinyin: 'yǒu de, mìmǎ zài fángkǎ shàngmiàn.', meaning: 'Yes, the password is on the room card.' }
            ],
            culturalNote: 'In China, hotels are required to register guests with local police, so passports are always checked.',
            questions: [
                { question: 'What does the hotel staff request?', options: ['Credit card', 'Passport', 'Cash deposit', 'Phone number'], correct: 1 },
                { question: 'Where is the WiFi password?', options: ['On a sign', 'On the room card', 'On a receipt', 'Given verbally'], correct: 1 }
            ]
        },

        // ---- MEDIUM (7 items) ----
        {
            id: 'ldip008', type: 'dialogue', difficulty: 'medium',
            title: '工作面试',
            meaning: 'Job Interview',
            turns: [
                { speaker: 'A', chinese: '请简单介绍一下你自己。', pinyin: 'qǐng jiǎndān jièshào yīxià nǐ zìjǐ.', meaning: 'Please briefly introduce yourself.' },
                { speaker: 'B', chinese: '我叫小李，去年大学毕业，专业是计算机。', pinyin: 'wǒ jiào xiǎo lǐ, qùnián dàxué bìyè, zhuānyè shì jìsuànjī.', meaning: 'My name is Xiao Li, graduated from university last year, major in computer science.' },
                { speaker: 'A', chinese: '你为什么想在我们公司工作？', pinyin: 'nǐ wèishénme xiǎng zài wǒmen gōngsī gōngzuò?', meaning: 'Why do you want to work at our company?' },
                { speaker: 'B', chinese: '贵公司发展很快，我想在这里学习和成长。', pinyin: 'guì gōngsī fāzhǎn hěn kuài, wǒ xiǎng zài zhèlǐ xuéxí hé chéngzhǎng.', meaning: 'Your company is growing fast, I want to learn and grow here.' },
                { speaker: 'A', chinese: '我们下周给你消息。', pinyin: 'wǒmen xiàzhōu gěi nǐ xiāoxī.', meaning: 'We\'ll give you news next week.' }
            ],
            culturalNote: '"Guì gōngsī" (贵公司) means "your esteemed company" — a formal polite form. Job candidates are expected to show modesty and eagerness to learn.',
            questions: [
                { question: 'What was the candidate\'s major?', options: ['English', 'Business', 'Computer science', 'Engineering'], correct: 2 },
                { question: 'When did the candidate graduate?', options: ['This year', 'Last year', 'Two years ago', 'Three years ago'], correct: 1 }
            ]
        },
        {
            id: 'ldip009', type: 'dialogue', difficulty: 'medium',
            title: '打电话约见面',
            meaning: 'Phone Call to Arrange Meeting',
            turns: [
                { speaker: 'A', chinese: '喂，小王在家吗？', pinyin: 'wéi, xiǎo wáng zài jiā ma?', meaning: 'Hello, is Xiao Wang at home?' },
                { speaker: 'B', chinese: '我就是小王。你是小李吧？', pinyin: 'wǒ jiù shì xiǎo wáng. nǐ shì xiǎo lǐ ba?', meaning: 'This is Xiao Wang. You are Xiao Li, right?' },
                { speaker: 'A', chinese: '对，明天有空吗？一起吃午饭吧。', pinyin: 'duì, míngtiān yǒu kòng ma? yīqǐ chī wǔfàn ba.', meaning: 'Yes, are you free tomorrow? Let\'s have lunch together.' },
                { speaker: 'B', chinese: '好啊，十二点老地方见。', pinyin: 'hǎo a, shí\'èr diǎn lǎo dìfāng jiàn.', meaning: 'Sure, let\'s meet at the usual place at noon.' }
            ],
            culturalNote: 'The phone greeting "wéi" (喂) is the standard way to answer a phone in Chinese. "Lǎodìfāng" (老地方) means "the usual place" — common among close friends.',
            questions: [
                { question: 'How do they greet on the phone?', options: ['Nǐ hǎo', 'Wéi', 'Zǎo ān', 'Hāi'], correct: 1 },
                { question: 'Where will they meet?', options: ['At a restaurant', 'At the usual place', 'At the office', 'At home'], correct: 1 }
            ]
        },
        {
            id: 'ldip010', type: 'dialogue', difficulty: 'medium',
            title: '周末计划',
            meaning: 'Making Weekend Plans',
            turns: [
                { speaker: 'A', chinese: '这个周末你有什么安排？', pinyin: 'zhège zhōumò nǐ yǒu shénme ānpái?', meaning: 'What plans do you have this weekend?' },
                { speaker: 'B', chinese: '没有特别的安排，你呢？', pinyin: 'méiyǒu tèbié de ānpái, nǐ ne?', meaning: 'No special plans, and you?' },
                { speaker: 'A', chinese: '我们去看电影吧，最近有一部新片很好看。', pinyin: 'wǒmen qù kàn diànyǐng ba, zuìjìn yǒu yī bù xīn piàn hěn hǎokàn.', meaning: 'Let\'s go watch a movie, there is a new film that is very good.' },
                { speaker: 'B', chinese: '好主意！你想看几点场？', pinyin: 'hǎo zhǔyì! nǐ xiǎng kàn jǐ diǎn chǎng?', meaning: 'Good idea! What showtime do you want?' },
                { speaker: 'A', chinese: '下午三点的怎么样？', pinyin: 'xiàwǔ sān diǎn de zěnme yàng?', meaning: 'How about the 3 PM one?' }
            ],
            questions: [
                { question: 'What activity do they plan?', options: ['Shopping', 'Watching a movie', 'Hiking', 'Eating out'], correct: 1 },
                { question: 'What time do they consider?', options: ['1 PM', '2 PM', '3 PM', '4 PM'], correct: 2 }
            ]
        },
        {
            id: 'ldip011', type: 'dialogue', difficulty: 'medium',
            title: '在银行开户',
            meaning: 'Opening a Bank Account',
            turns: [
                { speaker: 'A', chinese: '你好，我想开一个银行账户。', pinyin: 'nǐ hǎo, wǒ xiǎng kāi yī gè yínháng zhànghù.', meaning: 'Hello, I want to open a bank account.' },
                { speaker: 'B', chinese: '好的，请给我您的身份证。', pinyin: 'hǎo de, qǐng gěi wǒ nín de shēnfènzhèng.', meaning: 'OK, please give me your ID card.' },
                { speaker: 'A', chinese: '这是身份证。还需要别的东西吗？', pinyin: 'zhè shì shēnfènzhèng. hái xūyào bié de dōngxi ma?', meaning: 'Here is my ID card. Do you need anything else?' },
                { speaker: 'B', chinese: '请在这里签字，然后设置密码。', pinyin: 'qǐng zài zhèlǐ qiānzì, ránhòu shèzhì mìmǎ.', meaning: 'Please sign here, then set your password.' }
            ],
            culturalNote: 'Chinese banks typically require a national ID card (身份证) or passport for account opening. Setting a 6-digit PIN is standard.',
            questions: [
                { question: 'What is needed to open the account?', options: ['Driver\'s license', 'ID card', 'Student card', 'Credit card'], correct: 1 },
                { question: 'What does the customer do after signing?', options: ['Leave', 'Set a password', 'Pay a fee', 'Take a photo'], correct: 1 }
            ]
        },
        {
            id: 'ldip012', type: 'dialogue', difficulty: 'medium',
            title: '坐出租车',
            meaning: 'Taking a Taxi',
            turns: [
                { speaker: 'A', chinese: '师傅，去火车站多少钱？', pinyin: 'shīfu, qù huǒchēzhàn duōshao qián?', meaning: 'Driver, how much to go to the train station?' },
                { speaker: 'B', chinese: '大概三十块钱，不堵车的话。', pinyin: 'dàgài sānshí kuài qián, bù dǔchē dehuà.', meaning: 'About 30 yuan, if there is no traffic.' },
                { speaker: 'A', chinese: '好，请开快一点，我赶时间。', pinyin: 'hǎo, qǐng kāi kuài yīdiǎn, wǒ gǎn shíjiān.', meaning: 'OK, please drive a bit faster, I\'m in a hurry.' },
                { speaker: 'B', chinese: '放心，我知道一条近路。', pinyin: 'fàngxīn, wǒ zhīdào yī tiáo jìn lù.', meaning: 'Don\'t worry, I know a shortcut.' }
            ],
            culturalNote: 'Addressing a taxi driver as "shīfu" (师傅) is polite and common. It literally means "master" and shows respect.',
            questions: [
                { question: 'How does the passenger address the driver?', options: ['Lǎoshī', 'Shīfu', 'Xiānshēng', 'Tóngzhì'], correct: 1 },
                { question: 'What is the estimated fare?', options: ['20 yuan', '25 yuan', '30 yuan', '40 yuan'], correct: 2 }
            ]
        },
        {
            id: 'ldip013', type: 'dialogue', difficulty: 'medium',
            title: '在邮局寄包裹',
            meaning: 'Mailing a Package at the Post Office',
            turns: [
                { speaker: 'A', chinese: '你好，我要寄这个包裹到美国。', pinyin: 'nǐ hǎo, wǒ yào jì zhège bāoguǒ dào měiguó.', meaning: 'Hello, I want to mail this package to the United States.' },
                { speaker: 'B', chinese: '好的，请先填一下这个单子。', pinyin: 'hǎo de, qǐng xiān tián yīxià zhège dānzi.', meaning: 'OK, please fill out this form first.' },
                { speaker: 'A', chinese: '要多久能到？', pinyin: 'yào duō jiǔ néng dào?', meaning: 'How long will it take to arrive?' },
                { speaker: 'B', chinese: '空运大概七到十天。', pinyin: 'kōngyùn dàgài qī dào shí tiān.', meaning: 'By air, about 7 to 10 days.' },
                { speaker: 'A', chinese: '好的，多少钱？', pinyin: 'hǎo de, duōshao qián?', meaning: 'OK, how much?' }
            ],
            questions: [
                { question: 'Where is the package going?', options: ['China', 'Japan', 'The United States', 'Korea'], correct: 2 },
                { question: 'How long will delivery take?', options: ['3-5 days', '7-10 days', '14-21 days', '1 month'], correct: 1 }
            ]
        },
        {
            id: 'ldip014', type: 'dialogue', difficulty: 'medium',
            title: '生日聚会',
            meaning: 'Birthday Party',
            turns: [
                { speaker: 'A', chinese: '生日快乐！这是给你的礼物。', pinyin: 'shēngrì kuàilè! zhè shì gěi nǐ de lǐwù.', meaning: 'Happy birthday! This is a gift for you.' },
                { speaker: 'B', chinese: '谢谢你！是什么东西？', pinyin: 'xièxie nǐ! shì shénme dōngxi?', meaning: 'Thank you! What is it?' },
                { speaker: 'A', chinese: '是一本中文书，希望你喜欢。', pinyin: 'shì yī běn zhōngwén shū, xīwàng nǐ xǐhuan.', meaning: 'It\'s a Chinese book, hope you like it.' },
                { speaker: 'B', chinese: '太好了，我正想学中文呢！', pinyin: 'tài hǎo le, wǒ zhèng xiǎng xué zhōngwén ne!', meaning: 'Great, I actually want to learn Chinese!' },
                { speaker: 'A', chinese: '来，大家唱生日歌吧！', pinyin: 'lái, dàjiā chàng shēngrì gē ba!', meaning: 'Come on, everyone sing the birthday song!' }
            ],
            culturalNote: 'In China, it\'s polite to open gifts after the party (not in front of the giver) to avoid comparison. However, younger generations are more casual.',
            questions: [
                { question: 'What is the gift?', options: ['A phone', 'A book', 'Clothes', 'Food'], correct: 1 },
                { question: 'What does the recipient want to learn?', options: ['English', 'Japanese', 'Chinese', 'Korean'], correct: 2 }
            ]
        },

        // ---- HARD (6 items) ----
        {
            id: 'ldip015', type: 'dialogue', difficulty: 'hard',
            title: '在教室讨论作业',
            meaning: 'Discussing Homework in Class',
            turns: [
                { speaker: 'A', chinese: '你懂老师布置的作业是什么意思吗？', pinyin: 'nǐ dǒng lǎoshī bùzhì de zuòyè shì shénme yìsi ma?', meaning: 'Do you understand what the homework the teacher assigned means?' },
                { speaker: 'B', chinese: '我也不太清楚，好像要我们写一篇作文。', pinyin: 'wǒ yě bù tài qīngchǔ, hǎoxiàng yào wǒmen xiě yī piān zuòwén.', meaning: 'I\'m not very clear either, it seems we need to write an essay.' },
                { speaker: 'A', chinese: '题目是什么？我忘记记下来了。', pinyin: 'tímù shì shénme? wǒ wàngjì jì xiàlái le.', meaning: 'What\'s the topic? I forgot to write it down.' },
                { speaker: 'B', chinese: '题目是"我的理想生活"。五百字以上。', pinyin: 'tímù shì "wǒ de lǐxiǎng shēnghuó". wǔbǎi zì yǐshàng.', meaning: 'The topic is "My Ideal Life." 500 characters or more.' },
                { speaker: 'A', chinese: '五百字！太多了吧！', pinyin: 'wǔbǎi zì! tài duō le ba!', meaning: '500 characters! That\'s too many!' }
            ],
            culturalNote: 'Chinese students are often assigned essays with high word counts as a way to practice character memorization and composition skills.',
            questions: [
                { question: 'What is the homework assignment?', options: ['Read a book', 'Write an essay', 'Solve math problems', 'Draw a picture'], correct: 1 },
                { question: 'What is the minimum word count?', options: ['200 characters', '300 characters', '500 characters', '800 characters'], correct: 2 }
            ]
        },
        {
            id: 'ldip016', type: 'dialogue', difficulty: 'hard',
            title: '谈天气和出行',
            meaning: 'Talking About Weather and Travel Plans',
            turns: [
                { speaker: 'A', chinese: '你看天气预报了吗？周末好像会下大雨。', pinyin: 'nǐ kàn tiānqì yùbào le ma? zhōumò hǎoxiàng huì xià dà yǔ.', meaning: 'Did you check the weather forecast? It seems like heavy rain this weekend.' },
                { speaker: 'B', chinese: '真的吗？我还想去爬山呢，这下怎么办？', pinyin: 'zhēn de ma? wǒ hái xiǎng qù páshān ne, zhèxià zěnme bàn?', meaning: 'Really? I still wanted to go hiking, what should we do now?' },
                { speaker: 'A', chinese: '要不改成室内活动吧，比如去博物馆。', pinyin: 'yàobù gǎichéng shìnèi huódòng ba, bǐrú qù bówùguǎn.', meaning: 'How about switching to indoor activities, like going to a museum?' },
                { speaker: 'B', chinese: '嗯，也好。听说新开了个科技馆很不错。', pinyin: 'ńg, yě hǎo. tīngshuō xīn kāi le gè kējìguǎn hěn bùcuò.', meaning: 'Hmm, that works too. I heard a new science museum opened recently.' },
                { speaker: 'A', chinese: '行，那就这么定了。周日早上九点见。', pinyin: 'xíng, nà jiù zhème dìng le. zhōurì zǎoshang jiǔ diǎn jiàn.', meaning: 'OK, it\'s settled then. See you Sunday at 9 AM.' }
            ],
            questions: [
                { question: 'What was the original plan?', options: ['Going swimming', 'Going hiking', 'Going shopping', 'Staying home'], correct: 1 },
                { question: 'What is their new plan?', options: ['Go to a museum', 'Go to a movie', 'Stay home', 'Go to a restaurant'], correct: 0 }
            ]
        },
        {
            id: 'ldip017', type: 'dialogue', difficulty: 'hard',
            title: '买火车票',
            meaning: 'Buying Train Tickets',
            turns: [
                { speaker: 'A', chinese: '你好，我想买一张去广州的高铁票。', pinyin: 'nǐ hǎo, wǒ xiǎng mǎi yī zhāng qù guǎngzhōu de gāotiě piào.', meaning: 'Hello, I want to buy a high-speed train ticket to Guangzhou.' },
                { speaker: 'B', chinese: '哪天的？要一等座还是二等座？', pinyin: 'nǎ tiān de? yào yīděngzuò háishì èrděngzuò?', meaning: 'For which day? First class or second class?' },
                { speaker: 'A', chinese: '大后天的，二等座就可以了。', pinyin: 'dà hòutiān de, èrděngzuò jiù kěyǐ le.', meaning: 'Three days from now, second class is fine.' },
                { speaker: 'B', chinese: '好的，上午九点发车，四百五十块。', pinyin: 'hǎo de, shàngwǔ jiǔ diǎn fāchē, sìbǎi wǔshí kuài.', meaning: 'OK, departs at 9 AM, 450 yuan.' },
                { speaker: 'A', chinese: '可以用手机支付吗？', pinyin: 'kěyǐ yòng shǒujī zhīfù ma?', meaning: 'Can I pay by phone?' }
            ],
            culturalNote: 'China\'s high-speed rail (高铁 gāotiě) is the world\'s largest network. Mobile payment (WeChat/Alipay) is standard for ticket purchases.',
            questions: [
                { question: 'What type of train ticket is requested?', options: ['Regular train', 'High-speed train', 'Subway', 'Bus'], correct: 1 },
                { question: 'How much does the ticket cost?', options: ['350 yuan', '400 yuan', '450 yuan', '500 yuan'], correct: 2 }
            ]
        },
        {
            id: 'ldip018', type: 'dialogue', difficulty: 'hard',
            title: '介绍自己和新朋友相识',
            meaning: 'Introducing Oneself and Meeting New Friends',
            turns: [
                { speaker: 'A', chinese: '你好，我叫张伟。这是我第一次来这里。', pinyin: 'nǐ hǎo, wǒ jiào zhāng wěi. zhè shì wǒ dì-yī cì lái zhèlǐ.', meaning: 'Hello, my name is Zhang Wei. This is my first time here.' },
                { speaker: 'B', chinese: '欢迎你！我是王芳，在这里工作三年了。', pinyin: 'huānyíng nǐ! wǒ shì wáng fāng, zài zhèlǐ gōngzuò sān nián le.', meaning: 'Welcome! I\'m Wang Fang, I\'ve worked here for three years.' },
                { speaker: 'A', chinese: '很高兴认识你。你是做什么工作的？', pinyin: 'hěn gāoxìng rènshi nǐ. nǐ shì zuò shénme gōngzuò de?', meaning: 'Nice to meet you. What kind of work do you do?' },
                { speaker: 'B', chinese: '我是设计师，主要负责网页设计。你呢？', pinyin: 'wǒ shì shèjìshī, zhǔyào fùzé wǎngyè shèjì. nǐ ne?', meaning: 'I\'m a designer, mainly responsible for web design. And you?' },
                { speaker: 'A', chinese: '我是软件工程师，刚毕业不久。', pinyin: 'wǒ shì ruǎnjiàn gōngchéngshī, gāng bìyè bù jiǔ.', meaning: 'I\'m a software engineer, graduated not too long ago.' }
            ],
            questions: [
                { question: 'What is person B\'s job?', options: ['Teacher', 'Designer', 'Doctor', 'Engineer'], correct: 1 },
                { question: 'How long has person B worked there?', options: ['One year', 'Two years', 'Three years', 'Five years'], correct: 2 }
            ]
        },
        {
            id: 'ldip019', type: 'dialogue', difficulty: 'hard',
            title: '请求帮助找东西',
            meaning: 'Asking for Help Finding Something',
            turns: [
                { speaker: 'A', chinese: '不好意思，我手机找不到了，你能帮我打个电话吗？', pinyin: 'bù hǎoyìsi, wǒ shǒujī zhǎo bù dào le, nǐ néng bāng wǒ dǎ gè diànhuà ma?', meaning: 'Sorry, I can\'t find my phone, can you help me make a call to it?' },
                { speaker: 'B', chinese: '当然可以。你的号码是多少？', pinyin: 'dāngrán kěyǐ. nǐ de hàomǎ shì duōshao?', meaning: 'Of course. What is your number?' },
                { speaker: 'A', chinese: '13876543210，麻烦你了。', pinyin: 'yāo sān bā qī liù wǔ sì sān èr yāo líng, máfan nǐ le.', meaning: '13876543210, sorry for the trouble.' },
                { speaker: 'B', chinese: '我听到了！声音从沙发下面传来的。', pinyin: 'wǒ tīngdào le! shēngyīn cóng shāfā xiàmiàn chuán lái de.', meaning: 'I hear it! The sound is coming from under the sofa.' },
                { speaker: 'A', chinese: '啊找到了！太感谢你了！', pinyin: 'a zhǎodào le! tài gǎnxiè nǐ le!', meaning: 'Ah, found it! Thank you so much!' }
            ],
            questions: [
                { question: 'What was lost?', options: ['Wallet', 'Keys', 'Phone', 'Glasses'], correct: 2 },
                { question: 'Where was it found?', options: ['On the table', 'Under the sofa', 'In the bag', 'In the car'], correct: 1 }
            ]
        },
        {
            id: 'ldip020', type: 'dialogue', difficulty: 'hard',
            title: '讨论中餐文化',
            meaning: 'Discussing Chinese Food Culture',
            turns: [
                { speaker: 'A', chinese: '你在中国住了一年，最喜欢吃什么菜？', pinyin: 'nǐ zài zhōngguó zhù le yī nián, zuì xǐhuan chī shénme cài?', meaning: 'You\'ve lived in China for a year, what dish do you like most?' },
                { speaker: 'B', chinese: '太多了！不过我特别爱吃四川火锅，很辣很过瘾。', pinyin: 'tài duō le! bùguò wǒ tèbié ài chī sìchuān huǒguō, hěn là hěn guòyǐn.', meaning: 'So many! But I especially love Sichuan hotpot, very spicy and satisfying.' },
                { speaker: 'A', chinese: '火锅确实好吃，但吃太多会上火。', pinyin: 'huǒguō quèshí hǎochī, dàn chī tài duō huì shànghuǒ.', meaning: 'Hotpot is indeed delicious, but eating too much causes internal heat.' },
                { speaker: 'B', chinese: '什么是上火？我不太明白。', pinyin: 'shénme shì shànghuǒ? wǒ bù tài míngbái.', meaning: 'What is "shànghuǒ"? I don\'t quite understand.' },
                { speaker: 'A', chinese: '就是身体太热，可能会喉咙痛、长痘痘。所以中国人吃完火锅通常喝凉茶。', pinyin: 'jiùshì shēntǐ tài rè, kěnéng huì hóulóng tòng, zhǎng dòudòu. suǒyǐ zhōngguó rén chī wán huǒguō tōngcháng hē liángchá.', meaning: 'It means the body is too hot, may cause sore throat or pimples. So Chinese people usually drink herbal tea after hotpot.' }
            ],
            culturalNote: '"Shànghuǒ" (上火) is a concept from Traditional Chinese Medicine referring to excess internal heat. "Liángchá" (凉茶), cooling herbal tea, is commonly consumed to balance this.',
            questions: [
                { question: 'What dish does person B love?', options: ['Beijing duck', 'Sichuan hotpot', 'Dumplings', 'Noodles'], correct: 1 },
                { question: 'What is "shànghuǒ"?', options: ['Getting angry', 'Internal heat imbalance', 'Food poisoning', 'Allergy'], correct: 1 }
            ]
        }
    ],

    mergeWithMain: function() {
        if (typeof ListeningData !== 'undefined') {
            ListeningData.dialogue.push(...this.dialogue);
        }
    }
};

if (typeof ListeningData !== 'undefined') {
    ListeningDialoguePlus.mergeWithMain();
}
window.ListeningDialoguePlus = ListeningDialoguePlus;

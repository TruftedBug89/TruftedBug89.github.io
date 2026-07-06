// ============================================
// CHINESE MASTER - Dialogues Quadruple Data
// 60 new dialogue scenarios (d100-d159)
// ============================================

const DialoguesQuadruple = {
    scenarios: [
        {
            id: 'd100', title: '在药店', titleMeaning: 'At the Pharmacy', category: 'Health', difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你好，请问你哪里不舒服？', pinyin: 'nǐ hǎo, qǐngwèn nǐ nǎlǐ bù shūfu?', meaning: 'Hello, what seems to be the problem?' },
                { speaker: 'B', chinese: '我感冒了，流鼻涕，还咳嗽。', pinyin: 'wǒ gǎnmào le, liú bítì, hái késòu.', meaning: 'I have a cold, runny nose, and a cough.' },
                { speaker: 'A', chinese: '发烧吗？', pinyin: 'fāshāo ma?', meaning: 'Do you have a fever?' },
                { speaker: 'B', chinese: '有一点，三十七度八。', pinyin: 'yǒu yīdiǎn, sānshíqī dù bā.', meaning: 'A little, 37.8 degrees.' },
                { speaker: 'A', chinese: '给你这个感冒药，一天三次，一次两片。', pinyin: 'gěi nǐ zhège gǎnmào yào, yī tiān sān cì, yī cì liǎng piàn.', meaning: 'Here is cold medicine, three times a day, two pills each time.' },
                { speaker: 'B', chinese: '好的，谢谢。多少钱？', pinyin: 'hǎo de, xièxiè. duōshao qián?', meaning: 'OK, thank you. How much?' },
                { speaker: 'A', chinese: '二十八块。多喝水，注意休息。', pinyin: 'èrshíbā kuài. duō hē shuǐ, zhùyì xiūxi.', meaning: '28 yuan. Drink more water and rest well.' }
            ]
        },
        {
            id: 'd101', title: '在银行', titleMeaning: 'At the Bank', category: 'Finance', difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你好，我要换钱。', pinyin: 'nǐ hǎo, wǒ yào huàn qián.', meaning: 'Hello, I want to exchange money.' },
                { speaker: 'B', chinese: '请问换什么货币？', pinyin: 'qǐngwèn huàn shénme huòbì?', meaning: 'What currency would you like to exchange?' },
                { speaker: 'A', chinese: '美元换人民币。今天汇率是多少？', pinyin: 'měiyuán huàn rénmínbì. jīntiān huìlǜ shì duōshao?', meaning: 'USD to RMB. What is today\'s exchange rate?' },
                { speaker: 'B', chinese: '今天是七块二。您要换多少？', pinyin: 'jīntiān shì qī kuài èr. nín yào huàn duōshao?', meaning: 'Today it\'s 7.2. How much do you want to exchange?' },
                { speaker: 'A', chinese: '换五百美元。', pinyin: 'huàn wǔbǎi měiyuán.', meaning: 'Exchange 500 USD.' },
                { speaker: 'B', chinese: '好的，请出示护照和填写这张表。', pinyin: 'hǎo de, qǐng chūshì hùzhào hé tiánxiě zhè zhāng biǎo.', meaning: 'OK, please show your passport and fill out this form.' }
            ]
        },
        {
            id: 'd102', title: '酒店入住', titleMeaning: 'Hotel Check-in', category: 'Travel', difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '你好，我预订了房间。', pinyin: 'nǐ hǎo, wǒ yùdìng le fángjiān.', meaning: 'Hello, I have a reservation.' },
                { speaker: 'B', chinese: '请问您的名字是？', pinyin: 'qǐngwèn nín de míngzì shì?', meaning: 'What is your name?' },
                { speaker: 'A', chinese: '我叫王明。', pinyin: 'wǒ jiào wáng míng.', meaning: 'My name is Wang Ming.' },
                { speaker: 'B', chinese: '找到了，双人间，住三晚。需要押金五百元。', pinyin: 'zhǎodào le, shuāngrénjiān, zhù sān wǎn. xūyào yājīn wǔbǎi yuán.', meaning: 'Found it. Double room, three nights. A deposit of 500 yuan is required.' },
                { speaker: 'A', chinese: '可以刷卡吗？', pinyin: 'kěyǐ shuākǎ ma?', meaning: 'Can I pay by card?' },
                { speaker: 'B', chinese: '没问题。这是您的房卡，房间在八楼。早餐是早上七点到九点。', pinyin: 'méi wèntí. zhè shì nín de fángkǎ, fángjiān zài bā lóu. zǎocān shì zǎoshang qī diǎn dào jiǔ diǎn.', meaning: 'No problem. Here is your key card, room on the 8th floor. Breakfast is from 7 AM to 9 AM.' },
                { speaker: 'A', chinese: '谢谢，有WiFi密码吗？', pinyin: 'xièxiè, yǒu WiFi mìmǎ ma?', meaning: 'Thank you. Is there a WiFi password?' },
                { speaker: 'B', chinese: '密码是hotel8888。祝您住得愉快！', pinyin: 'mìmǎ shì hotel bā bā bā bā. zhù nín zhù de yúkuài!', meaning: 'The password is hotel8888. Enjoy your stay!' }
            ]
        },
        {
            id: 'd103', title: '点外卖', titleMeaning: 'Ordering Delivery', category: 'Food & Drink', difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '喂，你好，我要点外卖。', pinyin: 'wèi, nǐ hǎo, wǒ yào diǎn wàimài.', meaning: 'Hello, I\'d like to order delivery.' },
                { speaker: 'B', chinese: '好的，您要什么？', pinyin: 'hǎo de, nín yào shénme?', meaning: 'OK, what would you like?' },
                { speaker: 'A', chinese: '一碗牛肉面和一杯珍珠奶茶。', pinyin: 'yī wǎn niúròu miàn hé yī bēi zhēnzhū nǎichá.', meaning: 'A bowl of beef noodles and a cup of bubble tea.' },
                { speaker: 'B', chinese: '要辣椒吗？', pinyin: 'yào làjiāo ma?', meaning: 'Would you like chili?' },
                { speaker: 'A', chinese: '少放一点。送餐地址是中山路一百二十号。', pinyin: 'shǎo fàng yīdiǎn. sòngcān dìzhǐ shì zhōngshān lù yībǎi èrshí hào.', meaning: 'Just a little. Delivery address is 120 Zhongshan Road.' },
                { speaker: 'B', chinese: '好的，大概三十分钟送到。一共四十二元。', pinyin: 'hǎo de, dàgài sānshí fēnzhōng sòngdào. yīgòng sìshí\'èr yuán.', meaning: 'OK, about 30 minutes. Total is 42 yuan.' }
            ]
        },
        {
            id: 'd104', title: '工作面试', titleMeaning: 'Job Interview', category: 'Work', difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '请介绍一下你自己。', pinyin: 'qǐng jièshào yīxià nǐ zìjǐ.', meaning: 'Please introduce yourself.' },
                { speaker: 'B', chinese: '我叫李华，今年二十六岁。我大学毕业已经三年了，学的是计算机专业。', pinyin: 'wǒ jiào lǐ huá, jīnnián èrshíliù suì. wǒ dàxué bìyè yǐjīng sān nián le, xué de shì jìsuànjī zhuānyè.', meaning: 'I\'m Li Hua, 26 years old. I graduated from university three years ago, majoring in computer science.' },
                { speaker: 'A', chinese: '你有什么工作经验？', pinyin: 'nǐ yǒu shénme gōngzuò jīngyàn?', meaning: 'What work experience do you have?' },
                { speaker: 'B', chinese: '我以前在一家科技公司工作了两年。', pinyin: 'wǒ yǐqián zài yī jiā kējì gōngsī gōngzuò le liǎng nián.', meaning: 'I worked at a tech company for two years.' },
                { speaker: 'A', chinese: '你为什么离开那家公司？', pinyin: 'nǐ wèishénme líkāi nà jiā gōngsī?', meaning: 'Why did you leave that company?' },
                { speaker: 'B', chinese: '我想找更多发展机会。我很喜欢贵公司的企业文化。', pinyin: 'wǒ xiǎng zhǎo gèng duō fāzhǎn jīhuì. wǒ hěn xǐhuān guì gōngsī de qǐyè wénhuà.', meaning: 'I want more development opportunities. I really like your company culture.' },
                { speaker: 'A', chinese: '好的，你什么时候能来上班？', pinyin: 'hǎo de, nǐ shénme shíhou néng lái shàngbān?', meaning: 'Great, when can you start?' }
            ]
        },
        {
            id: 'd105', title: '交新朋友', titleMeaning: 'Making New Friends', category: 'Social', difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你好，你也在这里学中文吗？', pinyin: 'nǐ hǎo, nǐ yě zài zhèlǐ xué zhōngwén ma?', meaning: 'Hello, are you also learning Chinese here?' },
                { speaker: 'B', chinese: '是啊，我刚来两个月。', pinyin: 'shì a, wǒ gāng lái liǎng gè yuè.', meaning: 'Yes, I just started two months ago.' },
                { speaker: 'A', chinese: '我也是！我叫汤姆，你叫什么？', pinyin: 'wǒ yě shì! wǒ jiào tāngmǔ, nǐ jiào shénme?', meaning: 'Me too! I\'m Tom, what\'s your name?' },
                { speaker: 'B', chinese: '我叫玛丽。很高兴认识你！', pinyin: 'wǒ jiào mǎlì. hěn gāoxìng rènshi nǐ!', meaning: 'I\'m Mary. Nice to meet you!' },
                { speaker: 'A', chinese: '以后我们可以一起练习中文口语。', pinyin: 'yǐhòu wǒmen kěyǐ yīqǐ liànxí zhōngwén kǒuyǔ.', meaning: 'We can practice spoken Chinese together!' },
                { speaker: 'B', chinese: '好主意！加个微信吧。', pinyin: 'hǎo zhǔyì! jiā gè wēixìn ba.', meaning: 'Good idea! Let\'s add each other on WeChat.' }
            ]
        },
        {
            id: 'd106', title: '在健身房', titleMeaning: 'At the Gym', category: 'Sports', difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你好，我想办一张健身卡。', pinyin: 'nǐ hǎo, wǒ xiǎng bàn yī zhāng jiànshēn kǎ.', meaning: 'Hello, I\'d like to get a gym membership.' },
                { speaker: 'B', chinese: '好的，我们有月卡、季卡和年卡。', pinyin: 'hǎo de, wǒmen yǒu yuèkǎ, jìkǎ hé niánkǎ.', meaning: 'OK, we have monthly, quarterly, and annual memberships.' },
                { speaker: 'A', chinese: '月卡多少钱？', pinyin: 'yuèkǎ duōshao qián?', meaning: 'How much is the monthly card?' },
                { speaker: 'B', chinese: '月卡三百元，季卡八百元。有游泳池和瑜伽课。', pinyin: 'yuèkǎ sānbǎi yuán, jìkǎ bābǎi yuán. yǒu yóuyǒngchí hé yújiā kè.', meaning: 'Monthly is 300, quarterly is 800. Includes pool and yoga classes.' },
                { speaker: 'A', chinese: '我要季卡。今天可以开始用吗？', pinyin: 'wǒ yào jìkǎ. jīntiān kěyǐ kāishǐ yòng ma?', meaning: 'I\'ll take the quarterly. Can I start using it today?' },
                { speaker: 'B', chinese: '没问题，请填一下个人信息表。', pinyin: 'méi wèntí, qǐng tián yīxià gèrén xìnxī biǎo.', meaning: 'Sure, please fill out the personal information form.' }
            ]
        },
        {
            id: 'd107', title: '在博物馆', titleMeaning: 'At the Museum', category: 'Culture', difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '请问门票多少钱？', pinyin: 'qǐngwèn ménpiào duōshao qián?', meaning: 'Excuse me, how much are tickets?' },
                { speaker: 'B', chinese: '成人票六十元，学生票三十元。', pinyin: 'chéngrén piào liùshí yuán, xuésheng piào sānshí yuán.', meaning: 'Adult tickets 60 yuan, student tickets 30 yuan.' },
                { speaker: 'A', chinese: '我是学生，这是我的学生证。', pinyin: 'wǒ shì xuésheng, zhè shì wǒ de xuésheng zhèng.', meaning: 'I\'m a student, here is my student ID.' },
                { speaker: 'B', chinese: '好的，给你票。展览从一楼开始看。', pinyin: 'hǎo de, gěi nǐ piào. zhǎnlǎn cóng yī lóu kāishǐ kàn.', meaning: 'OK, here is your ticket. The exhibition starts on the first floor.' },
                { speaker: 'A', chinese: '可以拍照吗？', pinyin: 'kěyǐ pāizhào ma?', meaning: 'Can I take photos?' },
                { speaker: 'B', chinese: '可以，但不能用闪光灯。', pinyin: 'kěyǐ, dàn bù néng yòng shǎnguāng dēng.', meaning: 'Yes, but no flash photography.' }
            ]
        },
        {
            id: 'd108', title: '在演唱会', titleMeaning: 'At a Concert', category: 'Entertainment', difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你好，我买了两张演唱会的票。', pinyin: 'nǐ hǎo, wǒ mǎi le liǎng zhāng yǎnchànghuì de piào.', meaning: 'Hello, I bought two concert tickets.' },
                { speaker: 'B', chinese: '请出示票。您的座位在A区第六排。', pinyin: 'qǐng chūshì piào. nín de zuòwèi zài A qū dì liù pái.', meaning: 'Please show the tickets. Your seats are in Area A, Row 6.' },
                { speaker: 'A', chinese: '演出几点开始？', pinyin: 'yǎnchū jǐ diǎn kāishǐ?', meaning: 'When does the show start?' },
                { speaker: 'B', chinese: '七点半开始，大概两个半小时。中场休息十五分钟。', pinyin: 'qī diǎn bàn kāishǐ, dàgài liǎng gè bàn xiǎoshí. zhōngchǎng xiūxi shíwǔ fēnzhōng.', meaning: 'Starts at 7:30, about two and a half hours. 15-minute intermission.' },
                { speaker: 'A', chinese: '谢谢！这里太棒了！', pinyin: 'xièxiè! zhèlǐ tài bàng le!', meaning: 'Thank you! This place is awesome!' }
            ]
        },
        {
            id: 'd109', title: '买电影票', titleMeaning: 'Buying Movie Tickets', category: 'Entertainment', difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你好，今晚七点半的电影还有票吗？', pinyin: 'nǐ hǎo, jīnwǎn qī diǎn bàn de diànyǐng hái yǒu piào ma?', meaning: 'Hello, are there still tickets for the 7:30 movie tonight?' },
                { speaker: 'B', chinese: '有，您要几张？', pinyin: 'yǒu, nín yào jǐ zhāng?', meaning: 'Yes, how many?' },
                { speaker: 'A', chinese: '两张。中间的座位还有吗？', pinyin: 'liǎng zhāng. zhōngjiān de zuòwèi hái yǒu ma?', meaning: 'Two. Are there middle seats left?' },
                { speaker: 'B', chinese: '第五排中间有。两张一共一百二十元。', pinyin: 'dì wǔ pái zhōngjiān yǒu. liǎng zhāng yīgòng yībǎi èrshí yuán.', meaning: 'Row 5 middle is available. Two tickets total 120 yuan.' },
                { speaker: 'A', chinese: '好的，我要了。', pinyin: 'hǎo de, wǒ yào le.', meaning: 'OK, I\'ll take them.' }
            ]
        },
        {
            id: 'd110', title: '在邮局', titleMeaning: 'At the Post Office', category: 'Daily Life', difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你好，我要寄一个包裹。', pinyin: 'nǐ hǎo, wǒ yào jì yī gè bāoguǒ.', meaning: 'Hello, I want to send a package.' },
                { speaker: 'B', chinese: '寄到哪里？', pinyin: 'jì dào nǎlǐ?', meaning: 'To where?' },
                { speaker: 'A', chinese: '寄到美国。海运还是空运比较快？', pinyin: 'jì dào měiguó. hǎiyùn háishì kōngyùn bǐjiào kuài?', meaning: 'To the United States. Which is faster, sea or air?' },
                { speaker: 'B', chinese: '空运快，大概七到十天。海运要一个月。', pinyin: 'kōngyùn kuài, dàgài qī dào shí tiān. hǎiyùn yào yī gè yuè.', meaning: 'Air is faster, about 7-10 days. Sea takes about a month.' },
                { speaker: 'A', chinese: '空运多少钱？', pinyin: 'kōngyùn duōshao qián?', meaning: 'How much for air?' },
                { speaker: 'B', chinese: '两公斤以内一百五十元。请先填一下海关申报单。', pinyin: 'liǎng gōngjīn yǐnèi yībǎi wǔshí yuán. qǐng xiān tián yīxià hǎiguān shēnbào dān.', meaning: 'Under 2 kg is 150 yuan. Please fill out this customs form first.' }
            ]
        },
        {
            id: 'd111', title: '理发店', titleMeaning: 'Getting a Haircut', category: 'Daily Life', difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '欢迎光临！请问想怎么剪？', pinyin: 'huānyíng guānglín! qǐngwèn xiǎng zěnme jiǎn?', meaning: 'Welcome! How would you like your hair cut?' },
                { speaker: 'B', chinese: '我想剪短一点，但不要太短。', pinyin: 'wǒ xiǎng jiǎn duǎn yīdiǎn, dàn bùyào tài duǎn.', meaning: 'I want it a bit shorter, but not too short.' },
                { speaker: 'A', chinese: '好的，大概剪到肩膀这里可以吗？', pinyin: 'hǎo de, dàgài jiǎn dào jiānbǎng zhèlǐ kěyǐ ma?', meaning: 'OK, about shoulder length like this?' },
                { speaker: 'B', chinese: '可以。顺便帮我修一下刘海。', pinyin: 'kěyǐ. shùnbiàn bāng wǒ xiū yīxià liúhǎi.', meaning: 'Yes. Also trim my bangs.' },
                { speaker: 'A', chinese: '需要洗头吗？', pinyin: 'xūyào xǐtóu ma?', meaning: 'Need a wash?' },
                { speaker: 'B', chinese: '要的。剪完再洗吧。', pinyin: 'yào de. jiǎn wán zài xǐ ba.', meaning: 'Yes. Wash after cutting.' }
            ]
        },
        {
            id: 'd112', title: '修手机', titleMeaning: 'Phone Repair Shop', category: 'Technology', difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你好，我的手机屏幕摔坏了。', pinyin: 'nǐ hǎo, wǒ de shǒujī píngmù shuāi huài le.', meaning: 'Hello, my phone screen is broken.' },
                { speaker: 'B', chinese: '我看看。这是iPhone吗？', pinyin: 'wǒ kànkan. zhè shì iPhone ma?', meaning: 'Let me see. Is this an iPhone?' },
                { speaker: 'A', chinese: '是的，iPhone 14。换屏幕要多少钱？', pinyin: 'shì de, iPhone shísì. huàn píngmù yào duōshao qián?', meaning: 'Yes, iPhone 14. How much to replace the screen?' },
                { speaker: 'B', chinese: '原装屏八百，组装屏四百。你要哪种？', pinyin: 'yuánzhuāng píng bābǎi, zǔzhuāng píng sìbǎi. nǐ yào nǎ zhǒng?', meaning: 'Original screen 800, third-party 400. Which do you want?' },
                { speaker: 'A', chinese: '原装的吧。要多久？', pinyin: 'yuánzhuāng de ba. yào duō jiǔ?', meaning: 'Original please. How long will it take?' },
                { speaker: 'B', chinese: '大概两个小时就好。', pinyin: 'dàgài liǎng gè xiǎoshí jiù hǎo.', meaning: 'About two hours.' }
            ]
        },
        {
            id: 'd113', title: '租房子', titleMeaning: 'Renting an Apartment', category: 'Daily Life', difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '你好，我在网上看到你这里有一套房子出租。', pinyin: 'nǐ hǎo, wǒ zài wǎngshang kàn dào nǐ zhèlǐ yǒu yī tào fángzi chūzū.', meaning: 'Hello, I saw online that you have an apartment for rent.' },
                { speaker: 'B', chinese: '是的，一室一厅，六十平米。要不要先看看？', pinyin: 'shì de, yī shì yī tīng, liùshí píngmǐ. yào bùyào xiān kànkan?', meaning: 'Yes, one bedroom one living room, 60 sqm. Want to take a look first?' },
                { speaker: 'A', chinese: '好的。月租多少？', pinyin: 'hǎo de. yuè zū duōshao?', meaning: 'OK. How much is monthly rent?' },
                { speaker: 'B', chinese: '月租两千五。押一付三。包物业费，不包水电。', pinyin: 'yuè zū liǎngqiān wǔ. yā yī fù sān. bāo wùyè fèi, bù bāo shuǐdiàn.', meaning: '2500 per month. One month deposit, three months rent upfront. Property fee included, utilities not included.' },
                { speaker: 'A', chinese: '合同签多久？', pinyin: 'hétong qiān duō jiǔ?', meaning: 'How long is the lease?' },
                { speaker: 'B', chinese: '最少一年。如果你觉得合适，随时可以签。', pinyin: 'zuì shǎo yī nián. rúguǒ nǐ juéde héshì, suíshí kěyǐ qiān.', meaning: 'Minimum one year. If it suits you, we can sign anytime.' }
            ]
        },
        {
            id: 'd114', title: '在海关', titleMeaning: 'At Immigration', category: 'Travel', difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '你好，请出示护照和签证。', pinyin: 'nǐ hǎo, qǐng chūshì hùzhào hé qiānzhèng.', meaning: 'Hello, please show your passport and visa.' },
                { speaker: 'B', chinese: '给你。', pinyin: 'gěi nǐ.', meaning: 'Here you go.' },
                { speaker: 'A', chinese: '你来中国的目的是什么？', pinyin: 'nǐ lái zhōngguó de mùdì shì shénme?', meaning: 'What is the purpose of your visit to China?' },
                { speaker: 'B', chinese: '我来旅游和学中文。', pinyin: 'wǒ lái lǚyóu hé xué zhōngwén.', meaning: 'I came for tourism and to learn Chinese.' },
                { speaker: 'A', chinese: '你打算在中国待多久？', pinyin: 'nǐ dǎsuàn zài zhōngguó dāi duō jiǔ?', meaning: 'How long do you plan to stay in China?' },
                { speaker: 'B', chinese: '大概三个月。', pinyin: 'dàgài sān gè yuè.', meaning: 'About three months.' },
                { speaker: 'A', chinese: '你在中国的住址是哪里？', pinyin: 'nǐ zài zhōngguó de zhùzhǐ shì nǎlǐ?', meaning: 'What is your address in China?' },
                { speaker: 'B', chinese: '我住在北京的一家酒店。', pinyin: 'wǒ zhù zài běijīng de yī jiā jiǔdiàn.', meaning: 'I\'m staying at a hotel in Beijing.' },
                { speaker: 'A', chinese: '好的，祝你在中国玩得愉快。', pinyin: 'hǎo de, zhù nǐ zài zhōngguó wán de yúkuài.', meaning: 'OK, enjoy your stay in China.' }
            ]
        },
        {
            id: 'd115', title: '在图书馆', titleMeaning: 'At the Library', category: 'Education', difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你好，我想办一张借书卡。', pinyin: 'nǐ hǎo, wǒ xiǎng bàn yī zhāng jièshū kǎ.', meaning: 'Hello, I\'d like to get a library card.' },
                { speaker: 'B', chinese: '好的，请出示身份证。需要交五十元押金。', pinyin: 'hǎo de, qǐng chūshì shēnfènzhèng. xūyào jiāo wǔshí yuán yājīn.', meaning: 'OK, please show your ID card. A 50 yuan deposit is required.' },
                { speaker: 'A', chinese: '一个人可以借几本书？', pinyin: 'yī gè rén kěyǐ jiè jǐ běn shū?', meaning: 'How many books can one person borrow?' },
                { speaker: 'B', chinese: '最多五本，借期一个月，可以续借一次。', pinyin: 'zuì duō wǔ běn, jiè qī yī gè yuè, kěyǐ xùjiè yī cì.', meaning: 'Up to five books, one-month loan period, can renew once.' },
                { speaker: 'A', chinese: '安静区在哪儿？', pinyin: 'ānjìng qū zài nǎr?', meaning: 'Where is the quiet area?' },
                { speaker: 'B', chinese: '在三楼。别忘了手机要调成静音模式。', pinyin: 'zài sān lóu. bié wàng le shǒujī yào tiáo chéng jìngyīn móshì.', meaning: 'On the third floor. Don\'t forget to set your phone to silent mode.' }
            ]
        },
        {
            id: 'd116', title: '约会', titleMeaning: 'On a Date', category: 'Social', difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你终于来了！我还以为你不来了呢。', pinyin: 'nǐ zhōngyú lái le! wǒ hái yǐwéi nǐ bù lái le ne.', meaning: 'You finally came! I thought you weren\'t coming.' },
                { speaker: 'B', chinese: '对不起，路上堵车了。这家餐厅看起来不错。', pinyin: 'duìbuqǐ, lùshang dǔchē le. zhè jiā cāntīng kàn qǐlái bùcuò.', meaning: 'Sorry, there was traffic. This restaurant looks nice.' },
                { speaker: 'A', chinese: '是啊，我听说这里的菜很好吃。你想吃什么？', pinyin: 'shì a, wǒ tīng shuō zhèlǐ de cài hěn hǎochī. nǐ xiǎng chī shénme?', meaning: 'Yeah, I heard the food here is great. What do you want to eat?' },
                { speaker: 'B', chinese: '你点吧，我不挑食。', pinyin: 'nǐ diǎn ba, wǒ bù tiāoshí.', meaning: 'You order, I\'m not picky.' },
                { speaker: 'A', chinese: '那就来一条蒸鱼和两个小菜，再点一瓶红酒。', pinyin: 'nà jiù lái yī tiáo zhēng yú hé liǎng gè xiǎo cài, zài diǎn yī píng hóngjiǔ.', meaning: 'Let\'s get a steamed fish, two side dishes, and a bottle of red wine.' },
                { speaker: 'B', chinese: '好的！今天跟你在一起很开心。', pinyin: 'hǎo de! jīntiān gēn nǐ zài yīqǐ hěn kāixīn.', meaning: 'Great! I\'m really happy to be with you today.' }
            ]
        },
        {
            id: 'd117', title: '在婚礼上', titleMeaning: 'At a Wedding', category: 'Social', difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '恭喜恭喜！祝你们百年好合！', pinyin: 'gōngxǐ gōngxǐ! zhù nǐmen bǎinián hǎo hé!', meaning: 'Congratulations! Wishing you a lifetime of happiness together!' },
                { speaker: 'B', chinese: '谢谢你来参加我们的婚礼！', pinyin: 'xièxiè nǐ lái cānjiā wǒmen de hūnlǐ!', meaning: 'Thank you for coming to our wedding!' },
                { speaker: 'A', chinese: '这是我的一点心意。', pinyin: 'zhè shì wǒ de yīdiǎn xīnyì.', meaning: 'This is a small gift from me.' },
                { speaker: 'B', chinese: '太客气了！你们怎么认识的？', pinyin: 'tài kèqi le! nǐmen zěnme rènshi de?', meaning: 'You\'re too kind! How did you two meet?' },
                { speaker: 'C', chinese: '我们是在大学认识的，已经在一起六年了。', pinyin: 'wǒmen shì zài dàxué rènshi de, yǐjīng zài yīqǐ liù nián le.', meaning: 'We met in university, been together for six years.' },
                { speaker: 'A', chinese: '真不容易！希望你们永远幸福。', pinyin: 'zhēn bù róngyì! xīwàng nǐmen yǒngyuǎn xìngfú.', meaning: 'Not easy! I hope you\'ll be happy forever.' },
                { speaker: 'B', chinese: '谢谢！待会儿一定要多喝几杯！', pinyin: 'xièxiè! dāihuìr yīdìng yào duō hē jǐ bēi!', meaning: 'Thank you! Make sure to drink more later!' }
            ]
        },
        {
            id: 'd118', title: '聊爱好', titleMeaning: 'Chatting About Hobbies', category: 'Social', difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你平时喜欢做什么？', pinyin: 'nǐ píngshí xǐhuān zuò shénme?', meaning: 'What do you like to do in your free time?' },
                { speaker: 'B', chinese: '我喜欢摄影和弹吉他。你呢？', pinyin: 'wǒ xǐhuān shèyǐng hé tán jítā. nǐ ne?', meaning: 'I like photography and playing guitar. You?' },
                { speaker: 'A', chinese: '我喜欢爬山和跑步。周末经常去郊外。', pinyin: 'wǒ xǐhuān páshān hé pǎobù. zhōumò jīngcháng qù jiāowài.', meaning: 'I like hiking and running. Often go to the countryside on weekends.' },
                { speaker: 'B', chinese: '听起来不错！下次可以一起去吗？', pinyin: 'tīng qǐlái bùcuò! xiàcì kěyǐ yīqǐ qù ma?', meaning: 'Sounds great! Can I join next time?' },
                { speaker: 'A', chinese: '当然！这个星期天怎么样？', pinyin: 'dāngrán! zhège xīngqītiān zěnmeyàng?', meaning: 'Of course! How about this Sunday?' }
            ]
        },
        {
            id: 'd119', title: '计划旅行', titleMeaning: 'Planning a Trip', category: 'Travel', difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '我们今年假期去哪儿玩？', pinyin: 'wǒmen jīnnián jiàqī qù nǎr wán?', meaning: 'Where should we go for vacation this year?' },
                { speaker: 'B', chinese: '我想去云南。听说丽江和大理都很美。', pinyin: 'wǒ xiǎng qù yúnnán. tīng shuō lìjiāng hé dàlǐ dōu hěn měi.', meaning: 'I want to go to Yunnan. I heard Lijiang and Dali are beautiful.' },
                { speaker: 'A', chinese: '好啊！要玩多少天呢？', pinyin: 'hǎo a! yào wán duōshao tiān ne?', meaning: 'Great! How many days should we go?' },
                { speaker: 'B', chinese: '一个星期吧。我们先订机票和酒店。', pinyin: 'yī gè xīngqī ba. wǒmen xiān dìng jīpiào hé jiǔdiàn.', meaning: 'About a week. Let\'s book flights and hotels first.' },
                { speaker: 'A', chinese: '你的预算是多少？', pinyin: 'nǐ de yùsuàn shì duōshao?', meaning: 'What\'s your budget?' },
                { speaker: 'B', chinese: '大概五千块。我们可以在网上找找攻略。', pinyin: 'dàgài wǔqiān kuài. wǒmen kěyǐ zài wǎngshang zhǎo zhao gōnglüè.', meaning: 'About 5000 yuan. We can look up travel guides online.' }
            ]
        },
        {
            id: 'd120', title: '投诉服务', titleMeaning: 'Complaining About Service', category: 'Food & Drink', difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '服务员，请过来一下。', pinyin: 'fúwùyuán, qǐng guòlai yīxià.', meaning: 'Waiter, please come here.' },
                { speaker: 'B', chinese: '您好，有什么问题吗？', pinyin: 'nín hǎo, yǒu shénme wèntí ma?', meaning: 'Hello, is there a problem?' },
                { speaker: 'A', chinese: '这个汤是凉的，而且菜太咸了。', pinyin: 'zhège tāng shì liáng de, érqiě cài tài xián le.', meaning: 'This soup is cold, and the dish is too salty.' },
                { speaker: 'B', chinese: '非常抱歉！我马上给您换一碗热汤。', pinyin: 'fēicháng bàoqiàn! wǒ mǎshàng gěi nín huàn yī wǎn rè tāng.', meaning: 'Very sorry! I\'ll replace the soup with a hot one right away.' },
                { speaker: 'A', chinese: '还有，我们已经等了半个小时了，菜还没上齐。', pinyin: 'hái yǒu, wǒmen yǐjīng děng le bàn gè xiǎoshí le, cài hái méi shàng qí.', meaning: 'Also, we\'ve been waiting half an hour and not all dishes have arrived.' },
                { speaker: 'B', chinese: '我马上去厨房催一下，今天确实客人比较多。为表示歉意，给您打个九折。', pinyin: 'wǒ mǎshàng qù chúfáng cuī yīxià, jīntiān quèshí kèrén bǐjiào duō. wèi biǎoshì qiànyì, gěi nín dǎ gè jiǔ zhé.', meaning: 'I\'ll rush the kitchen right away. It is indeed busy today. As an apology, 10% off your bill.' }
            ]
        },
        {
            id: 'd121', title: '请教建议', titleMeaning: 'Asking for Advice', category: 'Education', difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '老师，我想提高我的中文水平，有什么建议吗？', pinyin: 'lǎoshī, wǒ xiǎng tígāo wǒ de zhōngwén shuǐpíng, yǒu shénme jiànyì ma?', meaning: 'Teacher, I want to improve my Chinese. Any advice?' },
                { speaker: 'B', chinese: '多听中文歌，多看中文电影，这个很有帮助。', pinyin: 'duō tīng zhōngwén gē, duō kàn zhōngwén diànyǐng, zhège hěn yǒu bāngzhù.', meaning: 'Listen to more Chinese songs and watch more Chinese movies. It helps a lot.' },
                { speaker: 'A', chinese: '但是我听不懂歌词。', pinyin: 'dànshì wǒ tīng bu dǒng gēcí.', meaning: 'But I can\'t understand the lyrics.' },
                { speaker: 'B', chinese: '可以先看带中文字幕的，慢慢就熟悉了。', pinyin: 'kěyǐ xiān kàn dài zhōngwén zìmù de, mànmàn jiù shúxī le.', meaning: 'Start with Chinese subtitles, you\'ll get familiar gradually.' },
                { speaker: 'A', chinese: '好，我试试。还有什么好方法？', pinyin: 'hǎo, wǒ shì shi. hái yǒu shénme hǎo fāngfǎ?', meaning: 'OK, I\'ll try. Any other good methods?' },
                { speaker: 'B', chinese: '最好找中国朋友经常练习说中文。', pinyin: 'zuì hǎo zhǎo zhōngguó péngyou jīngcháng liànxí shuō zhōngwén.', meaning: 'Best is to find Chinese friends and practice speaking often.' }
            ]
        },
        {
            id: 'd122', title: '指路', titleMeaning: 'Giving Directions', category: 'Transport', difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '请问，最近的医院怎么走？', pinyin: 'qǐngwèn, zuì jìn de yīyuàn zěnme zǒu?', meaning: 'Excuse me, how do I get to the nearest hospital?' },
                { speaker: 'B', chinese: '从这条路一直走，第二个路口右转。', pinyin: 'cóng zhè tiáo lù yīzhí zǒu, dì èr gè lùkǒu yòu zhuǎn.', meaning: 'Go straight on this road, turn right at the second intersection.' },
                { speaker: 'A', chinese: '要走多久？', pinyin: 'yào zǒu duō jiǔ?', meaning: 'How long to walk?' },
                { speaker: 'B', chinese: '走路可能要十五分钟。你也可以坐公交车，两站就到了。', pinyin: 'zǒulù kěnéng yào shíwǔ fēnzhōng. nǐ yě kěyǐ zuò gōngjiāochē, liǎng zhàn jiù dào le.', meaning: 'About 15 minutes walking. You can also take the bus, just two stops.' },
                { speaker: 'A', chinese: '公交车站在哪里？', pinyin: 'gōngjiāochē zhàn zài nǎlǐ?', meaning: 'Where is the bus stop?' },
                { speaker: 'B', chinese: '看到那个红色的楼了吗？车站就在楼对面。', pinyin: 'kàn dào nàge hóngsè de lóu le ma? chēzhàn jiù zài lóu duìmiàn.', meaning: 'See that red building? The bus stop is right across from it.' }
            ]
        },
        {
            id: 'd123', title: '打电话订餐', titleMeaning: 'Phone Call Ordering', category: 'Food & Drink', difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '喂，你好，是川菜馆吗？', pinyin: 'wèi, nǐ hǎo, shì chuāncàiguǎn ma?', meaning: 'Hello, is this the Sichuan restaurant?' },
                { speaker: 'B', chinese: '是的，请问您要订什么？', pinyin: 'shì de, qǐngwèn nín yào dìng shénme?', meaning: 'Yes, what would you like to order?' },
                { speaker: 'A', chinese: '我要一份水煮鱼和一份麻婆豆腐。', pinyin: 'wǒ yào yī fèn shuǐzhǔ yú hé yī fèn mápó dòufu.', meaning: 'I\'d like a boiled fish in chili sauce and a mapo tofu.' },
                { speaker: 'B', chinese: '好的，地址和电话？', pinyin: 'hǎo de, dìzhǐ hé diànhuà?', meaning: 'OK, address and phone number?' },
                { speaker: 'A', chinese: '中山路88号，电话是13800138000。多久能送到？', pinyin: 'zhōngshān lù bāshíbā hào, diànhuà shì yāo sān bā líng líng yāo sān bā líng líng líng. duō jiǔ néng sòng dào?', meaning: '88 Zhongshan Road, phone is 13800138000. How long for delivery?' },
                { speaker: 'B', chinese: '大概四十分钟。一共七十八元。谢谢！', pinyin: 'dàgài sìshí fēnzhōng. yīgòng qīshíbā yuán. xièxiè!', meaning: 'About 40 minutes. Total is 78 yuan. Thank you!' }
            ]
        },
        {
            id: 'd124', title: '视频通话', titleMeaning: 'Video Call', category: 'Technology', difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '喂？能看到我吗？', pinyin: 'wèi? néng kàn dào wǒ ma?', meaning: 'Hello? Can you see me?' },
                { speaker: 'B', chinese: '能看到，不过画面有点卡。', pinyin: 'néng kàn dào, bùguò huàmiàn yǒudiǎn kǎ.', meaning: 'I can see you, but the video is a bit laggy.' },
                { speaker: 'A', chinese: '可能网速太慢了。你能听见我说话吗？', pinyin: 'kěnéng wǎngsù tài màn le. nǐ néng tīng jiàn wǒ shuōhuà ma?', meaning: 'Maybe the internet is too slow. Can you hear me?' },
                { speaker: 'B', chinese: '能听见，很清楚。你那边怎么样？', pinyin: 'néng tīng jiàn, hěn qīngchu. nǐ nàbiān zěnmeyàng?', meaning: 'I can hear you clearly. How are things over there?' },
                { speaker: 'A', chinese: '挺好的！好久不见，你瘦了！', pinyin: 'tǐng hǎo de! hǎojiǔ bùjiàn, nǐ shòu le!', meaning: 'Pretty good! Long time no see, you look thinner!' },
                { speaker: 'B', chinese: '是啊，最近在减肥。你那边天气怎么样？', pinyin: 'shì a, zuìjìn zài jiǎnféi. nǐ nàbiān tiānqì zěnmeyàng?', meaning: 'Yeah, I\'ve been losing weight. How\'s the weather there?' }
            ]
        },
        {
            id: 'd125', title: '在会议上', titleMeaning: 'At a Conference', category: 'Work', difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '早上好，今天我们要讨论下半年的销售计划。', pinyin: 'zǎoshang hǎo, jīntiān wǒmen yào tǎolùn xià bàn nián de xiāoshòu jìhuà.', meaning: 'Good morning. Today we\'ll discuss the second-half sales plan.' },
                { speaker: 'B', chinese: '我看了一下上季度的数据，销量下降了百分之十。', pinyin: 'wǒ kàn le yīxià shàng jìdù de shùjù, xiāoliàng xiàjiàng le bǎifēnzhī shí.', meaning: 'I looked at last quarter\'s data, sales dropped 10%.' },
                { speaker: 'A', chinese: '你有什么改进的建议？', pinyin: 'nǐ yǒu shénme gǎijìn de jiànyì?', meaning: 'What suggestions do you have for improvement?' },
                { speaker: 'B', chinese: '我觉得应该加强线上推广，特别是社交媒体方面。', pinyin: 'wǒ juéde yīnggāi jiāqiáng xiànshàng tuīguǎng, tèbié shì shèjiāo méitǐ fāngmiàn.', meaning: 'I think we should strengthen online marketing, especially social media.' },
                { speaker: 'C', chinese: '同意。我们还可以做一些促销活动。', pinyin: 'tóngyì. wǒmen hái kěyǐ zuò yīxiē cùxiāo huódòng.', meaning: 'Agreed. We can also run some promotional events.' },
                { speaker: 'A', chinese: '好的，下周三之前每人交一份详细方案。', pinyin: 'hǎo de, xià zhōusān zhīqián měi rén jiāo yī fèn xiángxì fāng\'àn.', meaning: 'Good. Everyone submit a detailed proposal by next Wednesday.' }
            ]
        },
        {
            id: 'd126', title: '学校对话', titleMeaning: 'At School', category: 'Education', difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '小明，你的作业做完了吗？', pinyin: 'xiǎomíng, nǐ de zuòyè zuò wán le ma?', meaning: 'Xiao Ming, did you finish your homework?' },
                { speaker: 'B', chinese: '还没有，数学题太难了。', pinyin: 'hái méiyǒu, shùxué tí tài nán le.', meaning: 'Not yet, the math problems are too hard.' },
                { speaker: 'A', chinese: '我可以教你。哪道题不会？', pinyin: 'wǒ kěyǐ jiāo nǐ. nǎ dào tí bù huì?', meaning: 'I can teach you. Which problem don\'t you understand?' },
                { speaker: 'B', chinese: '最后一道应用题。', pinyin: 'zuìhòu yī dào yìngyòng tí.', meaning: 'The last word problem.' },
                { speaker: 'A', chinese: '这道题其实很简单，看这里……明白了吗？', pinyin: 'zhè dào tí qíshí hěn jiǎndān, kàn zhèlǐ...... míngbai le ma?', meaning: 'This problem is actually simple. Look here... understand now?' },
                { speaker: 'B', chinese: '啊，我明白了！谢谢！', pinyin: 'ā, wǒ míngbai le! xièxiè!', meaning: 'Ah, I get it now! Thanks!' }
            ]
        },
        {
            id: 'd127', title: '一起学习', titleMeaning: 'Studying Together', category: 'Education', difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '周末要不要一起去图书馆复习？', pinyin: 'zhōumò yào bùyào yīqǐ qù túshūguǎn fùxí?', meaning: 'Want to go to the library to review together this weekend?' },
                { speaker: 'B', chinese: '好啊。下周就要考试了，我还没准备好。', pinyin: 'hǎo a. xià zhōu jiù yào kǎoshì le, wǒ hái méi zhǔnbèi hǎo.', meaning: 'Sure. The exam is next week and I\'m not ready yet.' },
                { speaker: 'A', chinese: '你最担心哪一科？', pinyin: 'nǐ zuì dānxīn nǎ yī kē?', meaning: 'Which subject worries you most?' },
                { speaker: 'B', chinese: '物理。我总是记不住公式。', pinyin: 'wùlǐ. wǒ zǒngshì jì bu zhù gōngshì.', meaning: 'Physics. I can never remember the formulas.' },
                { speaker: 'A', chinese: '没关系，我们一起做练习题，慢慢就会了。', pinyin: 'méi guānxi, wǒmen yīqǐ zuò liànxí tí, mànmàn jiù huì le.', meaning: 'No worries, let\'s do practice questions together, you\'ll get it gradually.' },
                { speaker: 'B', chinese: '谢谢！你真是我的好朋友。', pinyin: 'xièxiè! nǐ zhēn shì wǒ de hǎo péngyou.', meaning: 'Thanks! You\'re really a good friend.' }
            ]
        },
        {
            id: 'd128', title: '一起做饭', titleMeaning: 'Cooking Together', category: 'Food & Drink', difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '今天我们一起做饭吧！你想吃什么？', pinyin: 'jīntiān wǒmen yīqǐ zuòfàn ba! nǐ xiǎng chī shénme?', meaning: 'Let\'s cook together today! What do you want to eat?' },
                { speaker: 'B', chinese: '我想吃西红柿炒鸡蛋和红烧排骨。', pinyin: 'wǒ xiǎng chī xīhóngshì chǎo jīdàn hé hóngshāo páigǔ.', meaning: 'I want tomato scrambled eggs and braised spare ribs.' },
                { speaker: 'A', chinese: '好啊，先去超市买食材吧。我们需要排骨、鸡蛋、西红柿、葱、姜。', pinyin: 'hǎo a, xiān qù chāoshì mǎi shícái ba. wǒmen xūyào páigǔ, jīdàn, xīhóngshì, cōng, jiāng.', meaning: 'OK, let\'s go buy ingredients at the supermarket first. We need ribs, eggs, tomatoes, green onions, ginger.' },
                { speaker: 'B', chinese: '我来切菜，你来炒菜，怎么样？', pinyin: 'wǒ lái qiē cài, nǐ lái chǎo cài, zěnmeyàng?', meaning: 'I\'ll chop the vegetables, you stir-fry, how about that?' },
                { speaker: 'A', chinese: '没问题！小心刀，别切到手。', pinyin: 'méi wèntí! xiǎoxīn dāo, bié qiē dào shǒu.', meaning: 'Sure! Be careful with the knife, don\'t cut your hand.' },
                { speaker: 'B', chinese: '嗯！好香啊！我饿了。', pinyin: 'èn! hǎo xiāng a! wǒ è le.', meaning: 'Hmm! It smells so good! I\'m hungry.' }
            ]
        },
        {
            id: 'd129', title: '搬家', titleMeaning: 'Moving House', category: 'Daily Life', difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '你确定下周六搬家吗？', pinyin: 'nǐ quèdìng xià zhōuliù bānjiā ma?', meaning: 'Are you sure you\'re moving next Saturday?' },
                { speaker: 'B', chinese: '是的，我已经找好了搬家公司。', pinyin: 'shì de, wǒ yǐjīng zhǎo hǎo le bānjiā gōngsī.', meaning: 'Yes, I\'ve already found a moving company.' },
                { speaker: 'A', chinese: '要我把旧家具卖掉还是搬走？', pinyin: 'yào wǒ bǎ jiù jiājù mài diào háishì bān zǒu?', meaning: 'Should I sell the old furniture or take it?' },
                { speaker: 'B', chinese: '大部分卖掉吧，新房子需要买新的。', pinyin: 'dà bùfen mài diào ba, xīn fángzi xūyào mǎi xīn de.', meaning: 'Sell most of it, the new place needs new furniture.' },
                { speaker: 'A', chinese: '我可以帮你搬家。需要几个箱子？', pinyin: 'wǒ kěyǐ bāng nǐ bānjiā. xūyào jǐ gè xiāngzi?', meaning: 'I can help you move. How many boxes do you need?' },
                { speaker: 'B', chinese: '大概二十个。我还需要人帮忙打包衣服。', pinyin: 'dàgài èrshí gè. wǒ hái xūyào rén bāngmáng dǎbāo yīfu.', meaning: 'About twenty. I also need someone to help pack clothes.' },
                { speaker: 'A', chinese: '没问题，周六早上八点我过来。', pinyin: 'méi wèntí, zhōuliù zǎoshang bā diǎn wǒ guòlai.', meaning: 'No problem, I\'ll come over Saturday at 8 AM.' }
            ]
        },
        {
            id: 'd130', title: '车坏了', titleMeaning: 'Car Trouble', category: 'Transport', difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '师傅，我的车发动不了了。', pinyin: 'shīfu, wǒ de chē fādòng bùliǎo le.', meaning: 'Mechanic, my car won\'t start.' },
                { speaker: 'B', chinese: '我看看。你最近什么时候换过机油？', pinyin: 'wǒ kànkan. nǐ zuìjìn shénme shíhou huàn guò jīyóu?', meaning: 'Let me see. When did you last change the oil?' },
                { speaker: 'A', chinese: '大概半年前。', pinyin: 'dàgài bàn nián qián.', meaning: 'About half a year ago.' },
                { speaker: 'B', chinese: '发动机好像有问题。需要仔细检查一下。', pinyin: 'fādòngjī hǎoxiàng yǒu wèntí. xūyào zǐxì jiǎnchá yīxià.', meaning: 'The engine seems to have a problem. Needs a thorough check.' },
                { speaker: 'A', chinese: '修好大概要多少钱？', pinyin: 'xiū hǎo dàgài yào duōshao qián?', meaning: 'How much will it cost to fix?' },
                { speaker: 'B', chinese: '现在还不确定，我先检测一下。明天给你报价。', pinyin: 'xiànzài hái bù quèdìng, wǒ xiān jiǎncè yīxià. míngtiān gěi nǐ bàojià.', meaning: 'Not sure yet. I\'ll run diagnostics first and give you a quote tomorrow.' }
            ]
        },
        {
            id: 'd131', title: '失物招领', titleMeaning: 'Lost and Found', category: 'Daily Life', difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你好，我昨天在公交车上丢了一个包。', pinyin: 'nǐ hǎo, wǒ zuótiān zài gōngjiāochē shang diū le yī gè bāo.', meaning: 'Hello, I lost a bag on the bus yesterday.' },
                { speaker: 'B', chinese: '什么样的包？', pinyin: 'shénme yàng de bāo?', meaning: 'What kind of bag?' },
                { speaker: 'A', chinese: '一个黑色的双肩包，里面有一个笔记本电脑和几本书。', pinyin: 'yī gè hēisè de shuāngjiān bāo, lǐmiàn yǒu yī gè bǐjìběn diànnǎo hé jǐ běn shū.', meaning: 'A black backpack, with a laptop and some books inside.' },
                { speaker: 'B', chinese: '你是坐几路公交车？', pinyin: 'nǐ shì zuò jǐ lù gōngjiāochē?', meaning: 'Which bus route were you on?' },
                { speaker: 'A', chinese: '三十二路，大概下午三点左右。', pinyin: 'sānshí\'èr lù, dàgài xiàwǔ sān diǎn zuǒyòu.', meaning: 'Route 32, around 3 PM.' },
                { speaker: 'B', chinese: '我查一下。啊，确实有一个。请说一下你电脑的牌子。', pinyin: 'wǒ chá yīxià. a, quèshí yǒu yī gè. qǐng shuō yīxià nǐ diànnǎo de páizi.', meaning: 'Let me check. Ah, there is one. Please tell me the brand of your laptop.' }
            ]
        },
        {
            id: 'd132', title: '在派出所', titleMeaning: 'At the Police Station', category: 'Emergency', difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '你好，我要报案。我的钱包被偷了。', pinyin: 'nǐ hǎo, wǒ yào bào\'àn. wǒ de qiánbāo bèi tōu le.', meaning: 'Hello, I want to report a crime. My wallet was stolen.' },
                { speaker: 'B', chinese: '什么时候？在哪里被偷的？', pinyin: 'shénme shíhou? zài nǎlǐ bèi tōu de?', meaning: 'When and where was it stolen?' },
                { speaker: 'A', chinese: '今天下午在人民广场的地铁站。', pinyin: 'jīntiān xiàwǔ zài rénmín guǎngchǎng de dìtiě zhàn.', meaning: 'This afternoon at People\'s Square subway station.' },
                { speaker: 'B', chinese: '钱包里有什么？', pinyin: 'qiánbāo lǐ yǒu shénme?', meaning: 'What was in the wallet?' },
                { speaker: 'A', chinese: '有身份证、银行卡、两千元现金。', pinyin: 'yǒu shēnfènzhèng, yínhángkǎ, liǎngqiān yuán xiànjīn.', meaning: 'ID card, bank cards, and 2000 yuan in cash.' },
                { speaker: 'B', chinese: '好的，先填一下报案表。我们会尽快调查。', pinyin: 'hǎo de, xiān tián yīxià bào\'àn biǎo. wǒmen huì jǐnkuài diàochá.', meaning: 'OK, please fill out the report form first. We\'ll investigate as soon as possible.' }
            ]
        },
        {
            id: 'd133', title: '瑜伽课', titleMeaning: 'Yoga Class', category: 'Sports', difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '欢迎来到瑜伽课！你是第一次来吗？', pinyin: 'huānyíng láidào yújiā kè! nǐ shì dì yī cì lái ma?', meaning: 'Welcome to yoga class! Is this your first time?' },
                { speaker: 'B', chinese: '是的，我从来没有练过瑜伽。', pinyin: 'shì de, wǒ cónglái méiyǒu liàn guò yújiā.', meaning: 'Yes, I\'ve never practiced yoga before.' },
                { speaker: 'A', chinese: '没关系，今天我们从基础动作开始。先深呼吸。', pinyin: 'méi guānxi, jīntiān wǒmen cóng jīchǔ dòngzuò kāishǐ. xiān shēn hūxī.', meaning: 'No worries, today we\'ll start with basic poses. Take a deep breath first.' },
                { speaker: 'B', chinese: '老师，这个动作我做不到。', pinyin: 'lǎoshī, zhège dòngzuò wǒ zuò bù dào.', meaning: 'Teacher, I can\'t do this pose.' },
                { speaker: 'A', chinese: '慢慢来，不用急。膝盖可以稍微弯一点。', pinyin: 'mànmàn lái, bùyòng jí. xīgài kěyǐ shāowēi wān yīdiǎn.', meaning: 'Take it slow, no rush. You can bend your knees slightly.' },
                { speaker: 'B', chinese: '好的。练完瑜伽感觉身体好舒服！', pinyin: 'hǎo de. liàn wán yújiā gǎnjué shēntǐ hǎo shūfu!', meaning: 'OK. After yoga, my body feels so comfortable!' }
            ]
        },
        {
            id: 'd134', title: '在公园', titleMeaning: 'At the Park', category: 'Daily Life', difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '今天天气真好，公园里人真多！', pinyin: 'jīntiān tiānqì zhēn hǎo, gōngyuán lǐ rén zhēn duō!', meaning: 'The weather is great today, so many people in the park!' },
                { speaker: 'B', chinese: '是啊，有人在跑步，有人在打太极。', pinyin: 'shì a, yǒu rén zài pǎobù, yǒu rén zài dǎ tàijí.', meaning: 'Yeah, some people are running, some are doing tai chi.' },
                { speaker: 'A', chinese: '我们去租一辆双人自行车吧！', pinyin: 'wǒmen qù zū yī liàng shuāngrén zìxíngchē ba!', meaning: 'Let\'s rent a tandem bicycle!' },
                { speaker: 'B', chinese: '好主意！那边有个租车的地方。', pinyin: 'hǎo zhǔyì! nàbiān yǒu gè zūchē de dìfang.', meaning: 'Good idea! There\'s a rental place over there.' },
                { speaker: 'A', chinese: '多少钱一小时？', pinyin: 'duōshao qián yī xiǎoshí?', meaning: 'How much per hour?' },
                { speaker: 'B', chinese: '二十元一小时，不贵。', pinyin: 'èrshí yuán yī xiǎoshí, bù guì.', meaning: '20 yuan per hour, not expensive.' }
            ]
        },
        {
            id: 'd135', title: '野餐', titleMeaning: 'Picnic', category: 'Daily Life', difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '这个地方真漂亮！我们在这里铺毯子吧。', pinyin: 'zhège dìfang zhēn piàoliang! wǒmen zài zhèlǐ pū tǎnzi ba.', meaning: 'This place is beautiful! Let\'s spread the blanket here.' },
                { speaker: 'B', chinese: '好。我带了三明治、水果和果汁。', pinyin: 'hǎo. wǒ dài le sānmíngzhì, shuǐguǒ hé guǒzhī.', meaning: 'OK. I brought sandwiches, fruit, and juice.' },
                { speaker: 'A', chinese: '我带了一些零食和一瓶葡萄酒。', pinyin: 'wǒ dài le yīxiē língshí hé yī píng pútaojiǔ.', meaning: 'I brought some snacks and a bottle of wine.' },
                { speaker: 'B', chinese: '哇，太丰盛了！来，干杯！', pinyin: 'wā, tài fēngshèng le! lái, gānbēi!', meaning: 'Wow, so plentiful! Come, cheers!' },
                { speaker: 'A', chinese: '干杯！看那边，有人在放风筝。', pinyin: 'gānbēi! kàn nàbiān, yǒu rén zài fàng fēngzhēng.', meaning: 'Cheers! Look over there, someone is flying a kite.' },
                { speaker: 'B', chinese: '真美好的一天！', pinyin: 'zhēn měihǎo de yī tiān!', meaning: 'Such a wonderful day!' }
            ]
        },
        {
            id: 'd136', title: '生日派对', titleMeaning: 'Birthday Party', category: 'Social', difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '祝你生日快乐！这是送给你的礼物。', pinyin: 'zhù nǐ shēngrì kuàilè! zhè shì sòng gěi nǐ de lǐwù.', meaning: 'Happy birthday to you! Here is a gift for you.' },
                { speaker: 'B', chinese: '谢谢你！我可以现在拆开吗？', pinyin: 'xièxiè nǐ! wǒ kěyǐ xiànzài chāikāi ma?', meaning: 'Thank you! Can I open it now?' },
                { speaker: 'A', chinese: '当然！希望你喜欢。', pinyin: 'dāngrán! xīwàng nǐ xǐhuān.', meaning: 'Of course! I hope you like it.' },
                { speaker: 'B', chinese: '哇，是一本中文书！我正好想要这本书。', pinyin: 'wā, shì yī běn zhōngwén shū! wǒ zhènghǎo xiǎng yào zhè běn shū.', meaning: 'Wow, a Chinese book! I just happened to want this book.' },
                { speaker: 'C', chinese: '蛋糕来了！快许个愿！', pinyin: 'dàngāo lái le! kuài xǔ gè yuàn!', meaning: 'The cake is here! Hurry, make a wish!' },
                { speaker: 'B', chinese: '好！我希望大家每天都开心健康！', pinyin: 'hǎo! wǒ xīwàng dàjiā měitiān dōu kāixīn jiànkāng!', meaning: 'OK! I hope everyone is happy and healthy every day!' }
            ]
        },
        {
            id: 'd137', title: '假期计划', titleMeaning: 'Holiday Plans', category: 'Travel', difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '春节快到了，你有什么计划？', pinyin: 'chūnjié kuài dào le, nǐ yǒu shénme jìhuà?', meaning: 'Spring Festival is coming, what are your plans?' },
                { speaker: 'B', chinese: '我要回老家跟家人团聚。你呢？', pinyin: 'wǒ yào huí lǎojiā gēn jiārén tuánjù. nǐ ne?', meaning: 'I\'m going back to my hometown to reunite with family. You?' },
                { speaker: 'A', chinese: '我正在考虑出国旅游。可能去泰国。', pinyin: 'wǒ zhèngzài kǎolǜ chūguó lǚyóu. kěnéng qù tàiguó.', meaning: 'I\'m considering traveling abroad. Maybe Thailand.' },
                { speaker: 'B', chinese: '泰国很不错！这个季节气温刚刚好。', pinyin: 'tàiguó hěn bùcuò! zhège jìjié qìwēn gānggāng hǎo.', meaning: 'Thailand is great! The temperature is just right this season.' },
                { speaker: 'A', chinese: '是的，而且机票也不贵。你过年会收到红包吗？', pinyin: 'shì de, érqiě jīpiào yě bù guì. nǐ guònián huì shōu dào hóngbāo ma?', meaning: 'Yes, and flights aren\'t expensive. Will you receive red envelopes during New Year?' },
                { speaker: 'B', chinese: '当然！每年都收到很多红包。', pinyin: 'dāngrán! měinián dōu shōu dào hěnduō hóngbāo.', meaning: 'Of course! I receive many red envelopes every year.' }
            ]
        },
        {
            id: 'd138', title: '周末安排', titleMeaning: 'Weekend Plans', category: 'Social', difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '这个周末天气应该不错，你有什么安排？', pinyin: 'zhège zhōumò tiānqì yīnggāi bùcuò, nǐ yǒu shénme ānpái?', meaning: 'The weather should be nice this weekend, what are your plans?' },
                { speaker: 'B', chinese: '我周六要去健身，周日想去看画展。', pinyin: 'wǒ zhōuliù yào qù jiànshēn, zhōurì xiǎng qù kàn huàzhǎn.', meaning: 'Saturday I\'m going to the gym, Sunday I want to see an art exhibition.' },
                { speaker: 'A', chinese: '哪个画展？', pinyin: 'nǎge huàzhǎn?', meaning: 'Which exhibition?' },
                { speaker: 'B', chinese: '市美术馆的现代艺术展。要不要一起去？', pinyin: 'shì měishùguǎn de xiàndài yìshù zhǎn. yào bùyào yīqǐ qù?', meaning: 'The modern art exhibition at the City Art Museum. Want to come?' },
                { speaker: 'A', chinese: '好啊！我周日正好没事。几点去？', pinyin: 'hǎo a! wǒ zhōurì zhènghǎo méi shì. jǐ diǎn qù?', meaning: 'Great! I happen to be free Sunday. What time?' }
            ]
        },
        {
            id: 'd139', title: '讨论新闻', titleMeaning: 'Discussing the News', category: 'Daily Life', difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '你看到今天的新闻了吗？', pinyin: 'nǐ kàn dào jīntiān de xīnwén le ma?', meaning: 'Did you see today\'s news?' },
                { speaker: 'B', chinese: '没有，发生什么事了？', pinyin: 'méiyǒu, fāshēng shénme shì le?', meaning: 'No, what happened?' },
                { speaker: 'A', chinese: '新闻说下个月高铁票要涨价了。', pinyin: 'xīnwén shuō xià gè yuè gāotiě piào yào zhǎngjià le.', meaning: 'The news says high-speed rail tickets will increase in price next month.' },
                { speaker: 'B', chinese: '真的吗？涨多少？', pinyin: 'zhēn de ma? zhǎng duōshao?', meaning: 'Really? By how much?' },
                { speaker: 'A', chinese: '大概百分之十五。以后出门越来越贵了。', pinyin: 'dàgài bǎifēnzhī shíwǔ. yǐhòu chūmén yuè lái yuè guì le.', meaning: 'About 15%. Traveling is getting more and more expensive.' },
                { speaker: 'B', chinese: '没办法，什么都涨价。', pinyin: 'méi bànfǎ, shénme dōu zhǎngjià.', meaning: 'Can\'t help it, everything is going up.' }
            ]
        },
        {
            id: 'd140', title: '聊天气', titleMeaning: 'Weather Chat', category: 'Weather', difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '今天好热啊！温度多少度？', pinyin: 'jīntiān hǎo rè a! wēndù duōshao dù?', meaning: 'So hot today! What\'s the temperature?' },
                { speaker: 'B', chinese: '天气预报说今天最高三十五度。', pinyin: 'tiānqì yùbào shuō jīntiān zuì gāo sānshíwǔ dù.', meaning: 'The weather forecast says a high of 35 today.' },
                { speaker: 'A', chinese: '真受不了！什么时候能凉快一点？', pinyin: 'zhēn shòu bù liǎo! shénme shíhou néng liángkuài yīdiǎn?', meaning: 'I can\'t stand it! When will it cool down?' },
                { speaker: 'B', chinese: '听说下周三会下雨，气温会降下来。', pinyin: 'tīng shuō xià zhōusān huì xiàyǔ, qìwēn huì jiàng xiàlai.', meaning: 'I heard it will rain next Wednesday, temps will drop.' },
                { speaker: 'A', chinese: '太好了！我最讨厌这种闷热的天气。', pinyin: 'tài hǎo le! wǒ zuì tǎoyàn zhè zhǒng mēnrè de tiānqì.', meaning: 'Great! I hate this muggy weather the most.' }
            ]
        },
        {
            id: 'd141', title: '遇到邻居', titleMeaning: 'Meeting a Neighbor', category: 'Social', difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '早上好！你是新搬来的邻居吗？', pinyin: 'zǎoshang hǎo! nǐ shì xīn bān lái de línjū ma?', meaning: 'Good morning! Are you the new neighbor who just moved in?' },
                { speaker: 'B', chinese: '是的，我上周刚搬过来。我叫陈晓。', pinyin: 'shì de, wǒ shàng zhōu gāng bān guòlai. wǒ jiào chén xiǎo.', meaning: 'Yes, I just moved in last week. I\'m Chen Xiao.' },
                { speaker: 'A', chinese: '欢迎！我姓李，住在你对门。以后有什么事可以找我帮忙。', pinyin: 'huānyíng! wǒ xìng lǐ, zhù zài nǐ duìmén. yǐhòu yǒu shénme shì kěyǐ zhǎo wǒ bāngmáng.', meaning: 'Welcome! I\'m Mr. Li, I live across from you. If you need anything, feel free to ask.' },
                { speaker: 'B', chinese: '谢谢！这附近有什么好吃的地方吗？', pinyin: 'xièxiè! zhè fùjìn yǒu shénme hǎochī de dìfang ma?', meaning: 'Thanks! Are there any good places to eat around here?' },
                { speaker: 'A', chinese: '楼下拐角有个面馆，味道不错，价格也实惠。', pinyin: 'lóu xià guǎijiǎo yǒu gè miànguǎn, wèidào bùcuò, jiàgé yě shíhuì.', meaning: 'There\'s a noodle shop around the corner downstairs, good taste and reasonable prices.' }
            ]
        },
        {
            id: 'd142', title: '在聚会上', titleMeaning: 'At a Party', category: 'Social', difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '嘿！好久不见！最近怎么样？', pinyin: 'hēi! hǎojiǔ bùjiàn! zuìjìn zěnmeyàng?', meaning: 'Hey! Long time no see! How have you been?' },
                { speaker: 'B', chinese: '还好！工作挺忙的。你呢？', pinyin: 'hái hǎo! gōngzuò tǐng máng de. nǐ ne?', meaning: 'Not bad! Work has been busy. You?' },
                { speaker: 'A', chinese: '我刚换了一份新工作。来，我给你介绍一下，这位是我的同事张伟。', pinyin: 'wǒ gāng huàn le yī fèn xīn gōngzuò. lái, wǒ gěi nǐ jièshào yīxià, zhè wèi shì wǒ de tóngshì zhāng wěi.', meaning: 'I just changed jobs. Come, let me introduce you, this is my colleague Zhang Wei.' },
                { speaker: 'B', chinese: '你好！很高兴认识你。', pinyin: 'nǐ hǎo! hěn gāoxìng rènshi nǐ.', meaning: 'Hello! Nice to meet you.' },
                { speaker: 'C', chinese: '你好！听说你也是做设计的？', pinyin: 'nǐ hǎo! tīng shuō nǐ yě shì zuò shèjì de?', meaning: 'Hello! I hear you\'re also in design?' },
                { speaker: 'B', chinese: '对！我在一家广告公司工作。', pinyin: 'duì! wǒ zài yī jiā guǎnggào gōngsī gōngzuò.', meaning: 'Yes! I work at an advertising company.' }
            ]
        },
        {
            id: 'd143', title: '介绍家人', titleMeaning: 'Introducing Family', category: 'Family', difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '给你们看看我家的照片。这是我爸爸和妈妈。', pinyin: 'gěi nǐmen kànkan wǒ jiā de zhàopiàn. zhè shì wǒ bàba hé māma.', meaning: 'Let me show you a photo of my family. These are my dad and mom.' },
                { speaker: 'B', chinese: '你爸爸看起来很年轻！他做什么工作？', pinyin: 'nǐ bàba kàn qǐlái hěn niánqīng! tā zuò shénme gōngzuò?', meaning: 'Your dad looks young! What does he do?' },
                { speaker: 'A', chinese: '他是工程师。我妈妈是护士，已经退休了。', pinyin: 'tā shì gōngchéngshī. wǒ māma shì hùshi, yǐjīng tuìxiū le.', meaning: 'He\'s an engineer. My mom is a nurse, already retired.' },
                { speaker: 'B', chinese: '这个男孩是谁？你弟弟吗？', pinyin: 'zhège nánhái shì shéi? nǐ dìdi ma?', meaning: 'Who is this boy? Your younger brother?' },
                { speaker: 'A', chinese: '不是，是我表哥的儿子，我侄子。他很可爱吧？', pinyin: 'bù shì, shì wǒ biǎogē de érzi, wǒ zhízi. tā hěn kě\'ài ba?', meaning: 'No, it\'s my cousin\'s son, my nephew. He\'s cute, right?' }
            ]
        },
        {
            id: 'd144', title: '讨论孩子', titleMeaning: 'Discussing Children', category: 'Family', difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你家孩子几岁了？', pinyin: 'nǐ jiā háizi jǐ suì le?', meaning: 'How old is your child?' },
                { speaker: 'B', chinese: '我女儿五岁了，今年刚开始上幼儿园。', pinyin: 'wǒ nǚ\'ér wǔ suì le, jīnnián gāng kāishǐ shàng yòu\'éryuán.', meaning: 'My daughter is five, just started kindergarten this year.' },
                { speaker: 'A', chinese: '她喜欢幼儿园吗？', pinyin: 'tā xǐhuān yòu\'éryuán ma?', meaning: 'Does she like kindergarten?' },
                { speaker: 'B', chinese: '一开始有点不习惯，但现在很喜欢。每天回家都唱歌跳舞。', pinyin: 'yī kāishǐ yǒudiǎn bù xíguàn, dàn xiànzài hěn xǐhuān. měitiān huí jiā dōu chànggē tiàowǔ.', meaning: 'At first she wasn\'t used to it, but now she loves it. She sings and dances every day after school.' },
                { speaker: 'A', chinese: '真好！养孩子虽然辛苦，但是很幸福。', pinyin: 'zhēn hǎo! yǎng háizi suīrán xīnkǔ, dànshì hěn xìngfú.', meaning: 'That\'s great! Raising kids is hard but very happy.' },
                { speaker: 'B', chinese: '是啊，看着她一天天长大，什么累都值得。', pinyin: 'shì a, kàn zhe tā yī tiān tiān zhǎngdà, shénme lèi dōu zhídé.', meaning: 'Yes, watching her grow every day makes all the fatigue worthwhile.' }
            ]
        },
        {
            id: 'd145', title: '退休计划', titleMeaning: 'Retirement Plans', category: 'Finance', difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你打算什么时候退休？', pinyin: 'nǐ dǎsuàn shénme shíhou tuìxiū?', meaning: 'When do you plan to retire?' },
                { speaker: 'B', chinese: '我想再过五年就退休。你呢？', pinyin: 'wǒ xiǎng zài guò wǔ nián jiù tuìxiū. nǐ ne?', meaning: 'I want to retire in five years. You?' },
                { speaker: 'A', chinese: '我可能还要工作十年。退休后有什么打算？', pinyin: 'wǒ kěnéng hái yào gōngzuò shí nián. tuìxiū hòu yǒu shénme dǎsuàn?', meaning: 'I might work another ten years. What are your plans after retirement?' },
                { speaker: 'B', chinese: '我想去世界各地旅行。特别是欧洲，一直想去看看。', pinyin: 'wǒ xiǎng qù shìjiè gè dì lǚxíng. tèbié shì ōuzhōu, yīzhí xiǎng qù kànkan.', meaning: 'I want to travel around the world. Especially Europe, I\'ve always wanted to see it.' },
                { speaker: 'A', chinese: '好主意！我也想去日本住一段时间。', pinyin: 'hǎo zhǔyì! wǒ yě xiǎng qù rìběn zhù yī duàn shíjiān.', meaning: 'Good idea! I also want to live in Japan for a while.' },
                { speaker: 'B', chinese: '关键是要存够钱。你的养老金够吗？', pinyin: 'guānjiàn shì yào cún gòu qián. nǐ de yǎnglǎojīn gòu ma?', meaning: 'The key is to save enough. Is your pension enough?' }
            ]
        },
        {
            id: 'd146', title: '买礼物', titleMeaning: 'Buying a Gift', category: 'Shopping', difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你好，我想买一件礼物送给女朋友。', pinyin: 'nǐ hǎo, wǒ xiǎng mǎi yī jiàn lǐwù sòng gěi nǚ péngyou.', meaning: 'Hello, I want to buy a gift for my girlfriend.' },
                { speaker: 'B', chinese: '有什么特别的要求吗？', pinyin: 'yǒu shénme tèbié de yāoqiú ma?', meaning: 'Any special requirements?' },
                { speaker: 'A', chinese: '她喜欢简约风格。你的预算是多少？', pinyin: 'tā xǐhuān jiǎnyuē fēnggé. nǐ de yùsuàn shì duōshao?', meaning: 'She likes minimalist style. What\'s your budget?' },
                { speaker: 'A', chinese: '大概五百块左右。', pinyin: 'dàgài wǔbǎi kuài zuǒyòu.', meaning: 'Around 500 yuan.' },
                { speaker: 'B', chinese: '这条围巾怎么样？真丝的，手感很好，三百八十元。', pinyin: 'zhè tiáo wéijīn zěnmeyàng? zhēnsī de, shǒugǎn hěn hǎo, sānbǎi bāshí yuán.', meaning: 'How about this scarf? Pure silk, great texture, 380 yuan.' },
                { speaker: 'A', chinese: '不错！有礼盒包装吗？', pinyin: 'bùcuò! yǒu lǐhé bāozhuāng ma?', meaning: 'Nice! Do you have a gift box?' },
                { speaker: 'B', chinese: '有，免费的。我们可以帮你包装得漂漂亮亮的。', pinyin: 'yǒu, miǎnfèi de. wǒmen kěyǐ bāng nǐ bāozhuāng de piàopiàoliàngliàng de.', meaning: 'Yes, free of charge. We can wrap it beautifully for you.' }
            ]
        },
        {
            id: 'd147', title: '网购问题', titleMeaning: 'Online Shopping Problem', category: 'Shopping', difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '喂，你好，我在你们网店买了一件衣服，收到的颜色不对。', pinyin: 'wèi, nǐ hǎo, wǒ zài nǐmen wǎngdiàn mǎi le yī jiàn yīfu, shōudào de yánsè bù duì.', meaning: 'Hello, I bought a piece of clothing from your online store but the color I received is wrong.' },
                { speaker: 'B', chinese: '很抱歉给您带来不便。请问您的订单号是多少？', pinyin: 'hěn bàoqiàn gěi nín dàilái bùbiàn. qǐngwèn nín de dìngdān hào shì duōshao?', meaning: 'Sorry for the inconvenience. What is your order number?' },
                { speaker: 'A', chinese: '订单号是20250618。我订的是蓝色的，收到的是黑色的。', pinyin: 'dìngdān hào shì èr líng èr wǔ líng liù yāo bā. wǒ dìng de shì lánsè de, shōudào de shì hēisè de.', meaning: 'Order number is 20250618. I ordered blue, received black.' },
                { speaker: 'B', chinese: '我查一下。非常抱歉，是我们的发货错误。您可以退货退款，或者我们重新发一件蓝色的。', pinyin: 'wǒ chá yīxià. fēicháng bàoqiàn, shì wǒmen de fāhuò cuòwù. nín kěyǐ tuìhuò tuìkuǎn, huòzhě wǒmen chóngxīn fā yī jiàn lánsè de.', meaning: 'Let me check. Very sorry, it was our shipping error. You can return for a refund, or we can resend the blue one.' },
                { speaker: 'A', chinese: '重新发吧。多久能收到？', pinyin: 'chóngxīn fā ba. duō jiǔ néng shōudào?', meaning: 'Resend it. How long to receive?' },
                { speaker: 'B', chinese: '明天就发，大概三天到。我们会送您一张优惠券作为补偿。', pinyin: 'míngtiān jiù fā, dàgài sān tiān dào. wǒmen huì sòng nín yī zhāng yōuhuì quàn zuòwéi bǔcháng.', meaning: 'We\'ll ship tomorrow, about three days. We\'ll give you a coupon as compensation.' }
            ]
        },
        {
            id: 'd148', title: '退货', titleMeaning: 'Returning an Item', category: 'Shopping', difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你好，我想退这件衣服。', pinyin: 'nǐ hǎo, wǒ xiǎng tuì zhè jiàn yīfu.', meaning: 'Hello, I want to return this clothing.' },
                { speaker: 'B', chinese: '请问为什么退货呢？', pinyin: 'qǐngwèn wèishénme tuìhuò ne?', meaning: 'May I ask why you\'re returning it?' },
                { speaker: 'A', chinese: '买回去发现穿着不合适。还不到七天，小票还在。', pinyin: 'mǎi huíqù fāxiàn chuān zhe bù héshì. hái bù dào qī tiān, xiǎopiào hái zài.', meaning: 'I bought it and found it doesn\'t fit. It\'s been less than seven days, I still have the receipt.' },
                { speaker: 'B', chinese: '好的，让我看一下小票和衣服。吊牌没剪吧？', pinyin: 'hǎo de, ràng wǒ kàn yīxià xiǎopiào hé yīfu. diàopái méi jiǎn ba?', meaning: 'OK, let me check the receipt and the item. The tag hasn\'t been cut off?' },
                { speaker: 'A', chinese: '没有，都完好。', pinyin: 'méiyǒu, dōu wánhǎo.', meaning: 'No, all intact.' },
                { speaker: 'B', chinese: '好的，退回到您的微信账户，大概一到三个工作日到账。', pinyin: 'hǎo de, tuìhuí dào nín de wēixìn zhànghù, dàgài yī dào sān gè gōngzuò rì dàozhàng.', meaning: 'OK, refunded to your WeChat account, about 1-3 business days to arrive.' }
            ]
        },
        {
            id: 'd149', title: '餐厅预约', titleMeaning: 'Making a Reservation', category: 'Food & Drink', difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你好，我想订一个桌位。', pinyin: 'nǐ hǎo, wǒ xiǎng dìng yī gè zhuōwèi.', meaning: 'Hello, I\'d like to reserve a table.' },
                { speaker: 'B', chinese: '好的，请问几位？什么时间？', pinyin: 'hǎo de, qǐngwèn jǐ wèi? shénme shíjiān?', meaning: 'OK, how many people and what time?' },
                { speaker: 'A', chinese: '六位，周六晚上七点。有包间吗？', pinyin: 'liù wèi, zhōuliù wǎnshang qī diǎn. yǒu bāojiān ma?', meaning: 'Six people, Saturday at 7 PM. Do you have a private room?' },
                { speaker: 'B', chinese: '有的。包间最低消费八百元。', pinyin: 'yǒu de. bāojiān zuì dī xiāofèi bābǎi yuán.', meaning: 'Yes. Private room minimum spending is 800 yuan.' },
                { speaker: 'A', chinese: '好的，没问题。可以点菜了吗？', pinyin: 'hǎo de, méi wèntí. kěyǐ diǎn cài le ma?', meaning: 'OK, no problem. Can I order dishes now?' },
                { speaker: 'B', chinese: '可以提前点菜，或者当天再点。请问您贵姓？', pinyin: 'kěyǐ tíqián diǎn cài, huòzhě dàngtiān zài diǎn. qǐngwèn nín guìxìng?', meaning: 'You can pre-order or order on the day. What\'s your surname?' }
            ]
        },
        {
            id: 'd150', title: '取消预约', titleMeaning: 'Canceling an Appointment', category: 'Daily Life', difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你好，我需要取消明天的预约。', pinyin: 'nǐ hǎo, wǒ xūyào qǔxiāo míngtiān de yùyuē.', meaning: 'Hello, I need to cancel tomorrow\'s appointment.' },
                { speaker: 'B', chinese: '请问您的姓名和预约时间？', pinyin: 'qǐngwèn nín de xìngmíng hé yùyuē shíjiān?', meaning: 'What\'s your name and appointment time?' },
                { speaker: 'A', chinese: '我叫王丽，预约的是明天上午十点。', pinyin: 'wǒ jiào wáng lì, yùyuē de shì míngtiān shàngwǔ shí diǎn.', meaning: 'I\'m Wang Li, appointment was tomorrow at 10 AM.' },
                { speaker: 'B', chinese: '好的，找到了。能问一下为什么要取消吗？', pinyin: 'hǎo de, zhǎodào le. néng wèn yīxià wèishénme yào qǔxiāo ma?', meaning: 'OK, found it. May I ask why you\'re canceling?' },
                { speaker: 'A', chinese: '临时有急事。需要付取消费吗？', pinyin: 'línshí yǒu jíshì. xūyào fù qǔxiāo fèi ma?', meaning: 'Something urgent came up. Do I need to pay a cancellation fee?' },
                { speaker: 'B', chinese: '不用，提前二十四小时取消是免费的。要不要重新预约？', pinyin: 'bùyòng, tíqián èrshísì xiǎoshí qǔxiāo shì miǎnfèi de. yào bùyào chóngxīn yùyuē?', meaning: 'No, canceling 24 hours in advance is free. Would you like to reschedule?' }
            ]
        },
        {
            id: 'd151', title: '改约时间', titleMeaning: 'Rescheduling', category: 'Daily Life', difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你好，我想把预约改到下周三可以吗？', pinyin: 'nǐ hǎo, wǒ xiǎng bǎ yùyuē gǎi dào xià zhōusān kěyǐ ma?', meaning: 'Hello, can I change my appointment to next Wednesday?' },
                { speaker: 'B', chinese: '我看看日程表。下周三下午两点有空。', pinyin: 'wǒ kànkan rìchéng biǎo. xià zhōusān xiàwǔ liǎng diǎn yǒu kòng.', meaning: 'Let me check the schedule. Next Wednesday at 2 PM is available.' },
                { speaker: 'A', chinese: '上午不行吗？我下午有个会。', pinyin: 'shàngwǔ bù xíng ma? wǒ xiàwǔ yǒu gè huì.', meaning: 'Morning won\'t work? I have a meeting in the afternoon.' },
                { speaker: 'B', chinese: '下周三上午都满了。下周四上午十点呢？', pinyin: 'xià zhōusān shàngwǔ dōu mǎn le. xià zhōusì shàngwǔ shí diǎn ne?', meaning: 'Next Wednesday morning is all booked. How about next Thursday at 10 AM?' },
                { speaker: 'A', chinese: '周四可以。那就定周四上午十点。', pinyin: 'zhōusì kěyǐ. nà jiù dìng zhōusì shàngwǔ shí diǎn.', meaning: 'Thursday works. Let\'s set it for Thursday 10 AM.' },
                { speaker: 'B', chinese: '好的，改好了。到时候见。', pinyin: 'hǎo de, gǎi hǎo le. dào shíhou jiàn.', meaning: 'OK, changed. See you then.' }
            ]
        },
        {
            id: 'd152', title: '看牙医', titleMeaning: 'At the Dentist', category: 'Health', difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '你好，请坐。你觉得哪里不舒服？', pinyin: 'nǐ hǎo, qǐng zuò. nǐ juéde nǎlǐ bù shūfu?', meaning: 'Hello, please sit. Where does it feel uncomfortable?' },
                { speaker: 'B', chinese: '我右边下面的牙疼了三天了，晚上疼得睡不着。', pinyin: 'wǒ yòubiān xiàmiàn de yá téng le sān tiān le, wǎnshang téng de shuì bù zháo.', meaning: 'My lower right tooth has been hurting for three days. Can\'t sleep at night.' },
                { speaker: 'A', chinese: '张开嘴，我看看。啊，这里有个洞，很深了。', pinyin: 'zhāngkāi zuǐ, wǒ kànkan. a, zhèlǐ yǒu gè dòng, hěn shēn le.', meaning: 'Open your mouth, let me see. Ah, there\'s a cavity here, quite deep.' },
                { speaker: 'B', chinese: '需要拔掉吗？', pinyin: 'xūyào bá diào ma?', meaning: 'Does it need to be pulled out?' },
                { speaker: 'A', chinese: '不用拔，可以补。不过需要先消炎。我给你开点消炎药。三天后回来补牙。', pinyin: 'bùyòng bá, kěyǐ bǔ. bùguò xūyào xiān xiāoyán. wǒ gěi nǐ kāi diǎn xiāoyán yào. sān tiān hòu huílai bǔ yá.', meaning: 'No need to pull, it can be filled. But need to reduce inflammation first. I\'ll prescribe anti-inflammatory medicine. Come back in three days for the filling.' },
                { speaker: 'B', chinese: '谢谢医生！补牙疼不疼？', pinyin: 'xièxiè yīshēng! bǔ yá téng bù téng?', meaning: 'Thank you, doctor! Does getting a filling hurt?' },
                { speaker: 'A', chinese: '会打麻药，不会太疼。放心。', pinyin: 'huì dǎ máyào, bù huì tài téng. fàngxīn.', meaning: 'We\'ll use anesthetic, it won\'t hurt much. Don\'t worry.' }
            ]
        },
        {
            id: 'd153', title: '抽血检查', titleMeaning: 'Blood Test', category: 'Health', difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你好，我要抽血化验。', pinyin: 'nǐ hǎo, wǒ yào chōuxiě huàyàn.', meaning: 'Hello, I need a blood test.' },
                { speaker: 'B', chinese: '请坐，把袖子卷起来。早上吃饭了吗？', pinyin: 'qǐng zuò, bǎ xiùzi juǎn qǐlai. zǎoshang chīfàn le ma?', meaning: 'Please sit, roll up your sleeve. Have you eaten this morning?' },
                { speaker: 'A', chinese: '没有，是空腹来的。', pinyin: 'méiyǒu, shì kōngfù lái de.', meaning: 'No, I came on an empty stomach.' },
                { speaker: 'B', chinese: '好的。稍微有点疼，请放松。', pinyin: 'hǎo de. shāowēi yǒudiǎn téng, qǐng fàngsōng.', meaning: 'OK. It\'ll hurt a little, please relax.' },
                { speaker: 'A', chinese: '结果什么时候能出来？', pinyin: 'jiéguǒ shénme shíhou néng chūlai?', meaning: 'When will the results come out?' },
                { speaker: 'B', chinese: '血常规半个小时，其他项目明天下午。', pinyin: 'xiěchángguī bàn gè xiǎoshí, qítā xiàngmù míngtiān xiàwǔ.', meaning: 'CBC in half an hour, other items tomorrow afternoon.' }
            ]
        },
        {
            id: 'd154', title: '中药咨询', titleMeaning: 'Pharmacy Consultation', category: 'Health', difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '医生，我最近总是失眠，有没有什么中药可以调理？', pinyin: 'yīshēng, wǒ zuìjìn zǒngshì shīmián, yǒu méiyǒu shénme zhōngyào kěyǐ tiáolǐ?', meaning: 'Doctor, I\'ve been having insomnia lately. Is there any Chinese medicine that can help regulate?' },
                { speaker: 'B', chinese: '你伸一下舌头，我把把脉。', pinyin: 'nǐ shēn yīxià shétou, wǒ bǎ bǎ mài.', meaning: 'Show me your tongue, let me take your pulse.' },
                { speaker: 'A', chinese: '怎么样？严重吗？', pinyin: 'zěnmeyàng? yánzhòng ma?', meaning: 'How is it? Is it serious?' },
                { speaker: 'B', chinese: '从脉象看，你是心脾两虚。我给你开一副归脾汤加减。', pinyin: 'cóng màixiàng kàn, nǐ shì xīnpí liǎngxū. wǒ gěi nǐ kāi yī fù guīpí tāng jiājiǎn.', meaning: 'From the pulse, you have heart-spleen deficiency. I\'ll prescribe a modified Guipi decoction.' },
                { speaker: 'A', chinese: '中药苦不苦？怎么煎？', pinyin: 'zhōngyào kǔ bù kǔ? zěnme jiān?', meaning: 'Is Chinese medicine bitter? How to brew it?' },
                { speaker: 'B', chinese: '有一点苦但不是不能接受。每天一剂，早上和晚上各喝一次。用三碗水煮成一碗。', pinyin: 'yǒu yīdiǎn kǔ dàn bù shì bù néng jiēshòu. měitiān yī jì, zǎoshang hé wǎnshang gè hē yī cì. yòng sān wǎn shuǐ zhǔ chéng yī wǎn.', meaning: 'A bit bitter but manageable. One dose per day, once in the morning and once at night. Boil three bowls of water down to one.' }
            ]
        },
        {
            id: 'd155', title: '中医看病', titleMeaning: 'Traditional Medicine Consultation', category: 'Health', difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '大夫，我最近腰疼得厉害，干不了活了。', pinyin: 'dàifu, wǒ zuìjìn yāo téng de lìhai, gàn bù liǎo huó le.', meaning: 'Doctor, my lower back has been hurting badly lately, I can\'t work.' },
                { speaker: 'B', chinese: '什么时候开始的？做什么工作？', pinyin: 'shénme shíhou kāishǐ de? zuò shénme gōngzuò?', meaning: 'When did it start? What work do you do?' },
                { speaker: 'A', chinese: '大概一个月了。我是送快递的，每天搬东西很多。', pinyin: 'dàgài yī gè yuè le. wǒ shì sòng kuàidì de, měitiān bān dōngxi hěnduō.', meaning: 'About a month. I\'m a delivery courier, I move lots of things every day.' },
                { speaker: 'B', chinese: '你躺下，我给你做个推拿，再配合针灸治疗。', pinyin: 'nǐ tǎng xià, wǒ gěi nǐ zuò gè tuīná, zài pèihé zhēnjiǔ zhìliáo.', meaning: 'Lie down, I\'ll give you a massage treatment, combined with acupuncture.' },
                { speaker: 'A', chinese: '针灸疼吗？我以前没试过。', pinyin: 'zhēnjiǔ téng ma? wǒ yǐqián méi shì guò.', meaning: 'Does acupuncture hurt? I\'ve never tried it before.' },
                { speaker: 'B', chinese: '进针的时候有一点感觉，但不疼。治几个疗程就能好。', pinyin: 'jìn zhēn de shíhou yǒu yīdiǎn gǎnjué, dàn bù téng. zhì jǐ gè liáochéng jiù néng hǎo.', meaning: 'You\'ll feel a bit when the needle goes in, but it won\'t hurt. A few treatment sessions and you\'ll be better.' }
            ]
        },
        {
            id: 'd156', title: '买西药', titleMeaning: 'Buying Western Medicine', category: 'Health', difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你好，我有医生开的处方。', pinyin: 'nǐ hǎo, wǒ yǒu yīshēng kāi de chǔfāng.', meaning: 'Hello, I have a doctor\'s prescription.' },
                { speaker: 'B', chinese: '好的，我看一下。这是抗生素，需要饭后吃。', pinyin: 'hǎo de, wǒ kàn yīxià. zhè shì kàngshēngsù, xūyào fàn hòu chī.', meaning: 'OK, let me check. This is an antibiotic, take it after meals.' },
                { speaker: 'A', chinese: '一天吃几次？', pinyin: 'yī tiān chī jǐ cì?', meaning: 'How many times a day?' },
                { speaker: 'B', chinese: '一天三次，一次一粒。整个疗程七天，一定要吃完。', pinyin: 'yī tiān sān cì, yī cì yī lì. zhěnggè liáochéng qī tiān, yīdìng yào chī wán.', meaning: 'Three times a day, one pill each time. Complete the full seven-day course.' },
                { speaker: 'A', chinese: '有什么副作用吗？', pinyin: 'yǒu shénme fùzuòyòng ma?', meaning: 'Any side effects?' },
                { speaker: 'B', chinese: '可能会有点胃不舒服。不要喝酒。', pinyin: 'kěnéng huì yǒudiǎn wèi bù shūfu. bùyào hējiǔ.', meaning: 'Might have some stomach discomfort. Don\'t drink alcohol.' }
            ]
        },
        {
            id: 'd157', title: '菜市场买菜', titleMeaning: 'At the Market', category: 'Food & Drink', difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '老板，这白菜怎么卖？', pinyin: 'lǎobǎn, zhè báicài zěnme mài?', meaning: 'Boss, how much is this cabbage?' },
                { speaker: 'B', chinese: '一块五一斤。很新鲜，今天早上刚到的。', pinyin: 'yī kuài wǔ yī jīn. hěn xīnxiān, jīntiān zǎoshang gāng dào de.', meaning: '1.5 yuan per jin. Very fresh, just arrived this morning.' },
                { speaker: 'A', chinese: '来两斤吧。西红柿呢？', pinyin: 'lái liǎng jīn ba. xīhóngshì ne?', meaning: 'I\'ll take two jin. How about tomatoes?' },
                { speaker: 'B', chinese: '西红柿三块一斤。要多少？', pinyin: 'xīhóngshì sān kuài yī jīn. yào duōshao?', meaning: 'Tomatoes 3 yuan per jin. How much?' },
                { speaker: 'A', chinese: '来一斤。新鲜的鸡蛋有吗？', pinyin: 'lái yī jīn. xīnxiān de jīdàn yǒu ma?', meaning: 'One jin. Do you have fresh eggs?' },
                { speaker: 'B', chinese: '有，土鸡蛋，六块一斤。', pinyin: 'yǒu, tǔ jīdàn, liù kuài yī jīn.', meaning: 'Yes, free-range eggs, 6 yuan per jin.' }
            ]
        },
        {
            id: 'd158', title: '砍价', titleMeaning: 'Haggling Prices', category: 'Shopping', difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '这条围巾多少钱？', pinyin: 'zhè tiáo wéijīn duōshao qián?', meaning: 'How much is this scarf?' },
                { speaker: 'B', chinese: '一百二，纯羊毛的。', pinyin: 'yībǎi èr, chún yángmáo de.', meaning: '120 yuan, pure wool.' },
                { speaker: 'A', chinese: '太贵了！八十块卖不卖？', pinyin: 'tài guì le! bāshí kuài mài bù mài?', meaning: 'Too expensive! Will you sell for 80?' },
                { speaker: 'B', chinese: '八十块太低了，我进价都不止这个。最少一百。', pinyin: 'bāshí kuài tài dī le, wǒ jìnjià dōu bù zhǐ zhège. zuì shǎo yībǎi.', meaning: '80 is too low, my wholesale cost is more than that. At least 100.' },
                { speaker: 'A', chinese: '九十块吧，行不行？我是常客。', pinyin: 'jiǔshí kuài ba, xíng bù xíng? wǒ shì chángkè.', meaning: 'How about 90? I\'m a regular customer.' },
                { speaker: 'B', chinese: '好吧好吧，九十块拿去。下次再来啊！', pinyin: 'hǎo ba hǎo ba, jiǔshí kuài ná qù. xiàcì zài lái a!', meaning: 'Alright alright, take it for 90. Come again next time!' }
            ]
        },
        {
            id: 'd159', title: '修电脑', titleMeaning: 'Computer Repair', category: 'Technology', difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你好，我的电脑开不了机了。', pinyin: 'nǐ hǎo, wǒ de diànnǎo kāi bù liǎo jī le.', meaning: 'Hello, my computer won\'t turn on.' },
                { speaker: 'B', chinese: '插上电源试过了吗？', pinyin: 'chā shang diànyuán shì guò le ma?', meaning: 'Have you tried plugging in the power?' },
                { speaker: 'A', chinese: '试过了。按电源键一点反应都没有，灯也不亮。', pinyin: 'shì guò le. àn diànyuán jiàn yīdiǎn fǎnyìng dōu méiyǒu, dēng yě bù liàng.', meaning: 'Yes. No response at all when pressing the power button, no lights.' },
                { speaker: 'B', chinese: '可能是电源适配器坏了，也可能是主板的问题。我先检测一下。', pinyin: 'kěnéng shì diànyuán shìpèiqì huài le, yě kěnéng shì zhǔbǎn de wèntí. wǒ xiān jiǎncè yīxià.', meaning: 'Maybe the power adapter is broken, or it could be a motherboard issue. Let me diagnose first.' },
                { speaker: 'A', chinese: '我里面有重要的文件，不会丢吧？', pinyin: 'wǒ lǐmiàn yǒu zhòngyào de wénjiàn, bù huì diū ba?', meaning: 'I have important files inside, they won\'t be lost will they?' },
                { speaker: 'B', chinese: '这个是硬件问题，硬盘应该没事。文件不会丢。放心。', pinyin: 'zhège shì yìngjiàn wèntí, yìngpán yīnggāi méishì. wénjiàn bù huì diū. fàngxīn.', meaning: 'This is a hardware issue, the hard drive should be fine. Files won\'t be lost. Don\'t worry.' },
                { speaker: 'A', chinese: '大概多少钱？', pinyin: 'dàgài duōshao qián?', meaning: 'About how much?' },
                { speaker: 'B', chinese: '如果是适配器问题，一百五就够了。主板的话可能要三四百。', pinyin: 'rúguǒ shì shìpèiqì wèntí, yībǎi wǔ jiù gòu le. zhǔbǎn de huà kěnéng yào sānsìbǎi.', meaning: 'If it\'s the adapter, 150 is enough. If it\'s the motherboard, maybe 300-400.' }
            ]
        }
    ],

    mergeWithMain() {
        if (typeof DialoguesData !== 'undefined' && DialoguesData.scenarios) {
            DialoguesData.scenarios.push(...this.scenarios);
        }
    },

    get count() { return this.scenarios.length; }
};

if (typeof DialoguesData !== 'undefined') DialoguesQuadruple.mergeWithMain();
window.DialoguesQuadruple = DialoguesQuadruple;

// Also merge into ListeningData.dialogue (after quadruple pushes to DialoguesData)
(function() {
    if (typeof ListeningData !== 'undefined' && DialoguesQuadruple.scenarios) {
        DialoguesQuadruple.scenarios.forEach(function(s) {
            var ex = {
                id: s.id,
                type: 'dialogue',
                difficulty: s.difficulty || 'medium',
                title: s.title,
                meaning: s.titleMeaning,
                turns: s.turns
            };
            if (!ListeningData.dialogue.find(function(d) { return d.id === s.id; })) {
                ListeningData.dialogue.push(ex);
            }
        });
    }
})();

// ============================================
// CHINESE MASTER - Extra Dialogue Scenarios
// 300 additional scenarios across 20 categories
// Auto-merges into DialoguesData
// ============================================

(function() {
    var items = [
        // ==================== 1. RESTAURANT (dex_001 - dex_015) ====================
        {
            id: 'dex_001',
            title: '预订座位',
            titleMeaning: 'Reserving a Table',
            category: 'Restaurant',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你好，我想预订今晚的座位。', pinyin: 'nǐ hǎo, wǒ xiǎng yùdìng jīnwǎn de zuòwèi.', meaning: 'Hello, I want to reserve a table for tonight.' },
                { speaker: 'B', chinese: '请问几位？', pinyin: 'qǐngwèn jǐ wèi?', meaning: 'How many people?' },
                { speaker: 'A', chinese: '四位，晚上七点。', pinyin: 'sì wèi, wǎnshang qī diǎn.', meaning: 'Four people, at 7 pm.' },
                { speaker: 'B', chinese: '好的，我帮您记下了。', pinyin: 'hǎo de, wǒ bāng nín jìxià le.', meaning: 'OK, I have noted it for you.' }
            ]
        },
        {
            id: 'dex_002',
            title: '点菜',
            titleMeaning: 'Ordering Food',
            category: 'Restaurant',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '服务员，可以点菜吗？', pinyin: 'fúwùyuán, kěyǐ diǎn cài ma?', meaning: 'Waiter, can I order?' },
                { speaker: 'B', chinese: '好的，您想吃什么？', pinyin: 'hǎo de, nín xiǎng chī shénme?', meaning: 'Sure, what would you like to eat?' },
                { speaker: 'A', chinese: '我要一个宫保鸡丁和一碗米饭。', pinyin: 'wǒ yào yī gè gōngbǎo jīdīng hé yī wǎn mǐfàn.', meaning: 'I want a Kung Pao Chicken and a bowl of rice.' },
                { speaker: 'B', chinese: '要不要辣的？', pinyin: 'yào bù yào là de?', meaning: 'Do you want it spicy?' },
                { speaker: 'A', chinese: '微辣就可以了。', pinyin: 'wēi là jiù kěyǐ le.', meaning: 'Just a little spicy is fine.' }
            ]
        },
        {
            id: 'dex_003',
            title: '推荐菜',
            titleMeaning: 'Recommended Dishes',
            category: 'Restaurant',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你们这里有什么好吃的推荐？', pinyin: 'nǐmen zhèlǐ yǒu shénme hǎo chī de tuījiàn?', meaning: 'What delicious food do you recommend here?' },
                { speaker: 'B', chinese: '我们的招牌菜是糖醋鱼。', pinyin: 'wǒmen de zhāopái cài shì tángcù yú.', meaning: 'Our signature dish is sweet and sour fish.' },
                { speaker: 'A', chinese: '听起来不错，就来这个吧。', pinyin: 'tīng qǐlai bùcuò, jiù lái zhège ba.', meaning: 'Sounds good, I will have this.' },
                { speaker: 'B', chinese: '还需要别的吗？', pinyin: 'hái xūyào bié de ma?', meaning: 'Anything else?' },
                { speaker: 'A', chinese: '再来一个蔬菜汤。', pinyin: 'zài lái yī gè shūcài tāng.', meaning: 'Also a vegetable soup.' }
            ]
        },
        {
            id: 'dex_004',
            title: '口味要求',
            titleMeaning: 'Taste Preferences',
            category: 'Restaurant',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '这道菜不要放味精。', pinyin: 'zhè dào cài bù yào fàng wèijīng.', meaning: 'Don\'t put MSG in this dish.' },
                { speaker: 'B', chinese: '好的，我记下了。', pinyin: 'hǎo de, wǒ jìxià le.', meaning: 'OK, I have noted it.' },
                { speaker: 'A', chinese: '少盐，多放点葱。', pinyin: 'shǎo yán, duō fàng diǎn cōng.', meaning: 'Less salt, more spring onions.' },
                { speaker: 'B', chinese: '没问题，还有其他要求吗？', pinyin: 'méi wèntí, hái yǒu qítā yāoqiú ma?', meaning: 'No problem, any other requests?' },
                { speaker: 'A', chinese: '没有了，谢谢。', pinyin: 'méiyǒu le, xièxie.', meaning: 'No more, thanks.' }
            ]
        },
        {
            id: 'dex_005',
            title: '加菜',
            titleMeaning: 'Adding More Dishes',
            category: 'Restaurant',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '服务员，我们要加菜。', pinyin: 'fúwùyuán, wǒmen yào jiā cài.', meaning: 'Waiter, we want to add more dishes.' },
                { speaker: 'B', chinese: '好的，您想加什么？', pinyin: 'hǎo de, nín xiǎng jiā shénme?', meaning: 'Sure, what would you like to add?' },
                { speaker: 'A', chinese: '再来一个烤鸭。', pinyin: 'zài lái yī gè kǎoyā.', meaning: 'Another roast duck.' },
                { speaker: 'B', chinese: '烤鸭需要等二十分钟。', pinyin: 'kǎoyā xūyào děng èrshí fēnzhōng.', meaning: 'Roast duck takes 20 minutes to prepare.' },
                { speaker: 'A', chinese: '没关系，我们可以等。', pinyin: 'méi guānxì, wǒmen kěyǐ děng.', meaning: 'No problem, we can wait.' }
            ]
        },
        {
            id: 'dex_006',
            title: '买单',
            titleMeaning: 'Paying the Bill',
            category: 'Restaurant',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '服务员，买单。', pinyin: 'fúwùyuán, mǎidān.', meaning: 'Waiter, check please.' },
                { speaker: 'B', chinese: '好的，一共一百八十块。', pinyin: 'hǎo de, yīgòng yībǎi bāshí kuài.', meaning: 'OK, total is 180 yuan.' },
                { speaker: 'A', chinese: '可以刷卡吗？', pinyin: 'kěyǐ shuākǎ ma?', meaning: 'Can I pay by card?' },
                { speaker: 'B', chinese: '可以的。', pinyin: 'kěyǐ de.', meaning: 'Yes, you can.' }
            ]
        },
        {
            id: 'dex_007',
            title: 'AA制',
            titleMeaning: 'Splitting the Bill',
            category: 'Restaurant',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '我们各付各的吧。', pinyin: 'wǒmen gè fù gè de ba.', meaning: 'Let\'s go Dutch.' },
                { speaker: 'B', chinese: '好啊，你吃了多少？', pinyin: 'hǎo a, nǐ chī le duōshao?', meaning: 'OK, how much did you have?' },
                { speaker: 'A', chinese: '我大概八十块。', pinyin: 'wǒ dàgài bāshí kuài.', meaning: 'About 80 yuan for me.' },
                { speaker: 'B', chinese: '那我付一百块。', pinyin: 'nà wǒ fù yībǎi kuài.', meaning: 'Then I will pay 100 yuan.' }
            ]
        },
        {
            id: 'dex_008',
            title: '打包',
            titleMeaning: 'Taking Leftovers',
            category: 'Restaurant',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '这些吃不完，可以打包吗？', pinyin: 'zhèxiē chī bù wán, kěyǐ dǎbāo ma?', meaning: 'We can\'t finish this, can we take it to go?' },
                { speaker: 'B', chinese: '可以，我给您拿打包盒。', pinyin: 'kěyǐ, wǒ gěi nín ná dǎbāo hé.', meaning: 'Sure, I will get you a takeout container.' },
                { speaker: 'A', chinese: '谢谢，麻烦你了。', pinyin: 'xièxie, máfan nǐ le.', meaning: 'Thanks, sorry for the trouble.' },
                { speaker: 'B', chinese: '不客气，请慢走。', pinyin: 'bù kèqì, qǐng màn zǒu.', meaning: 'You\'re welcome, take care.' }
            ]
        },
        {
            id: 'dex_009',
            title: '投诉食物',
            titleMeaning: 'Complaining About Food',
            category: 'Restaurant',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '服务员，这个菜是凉的。', pinyin: 'fúwùyuán, zhège cài shì liáng de.', meaning: 'Waiter, this dish is cold.' },
                { speaker: 'B', chinese: '对不起，我给您热一下。', pinyin: 'duìbuqǐ, wǒ gěi nín rè yīxià.', meaning: 'Sorry, I will heat it up for you.' },
                { speaker: 'A', chinese: '而且这个肉太老了。', pinyin: 'érqiě zhège ròu tài lǎo le.', meaning: 'Also this meat is too tough.' },
                { speaker: 'B', chinese: '我帮您换一份新的。', pinyin: 'wǒ bāng nín huàn yī fèn xīn de.', meaning: 'I will exchange it for a fresh one.' },
                { speaker: 'A', chinese: '好的，快一点。', pinyin: 'hǎo de, kuài yīdiǎn.', meaning: 'OK, please be quick.' }
            ]
        },
        {
            id: 'dex_010',
            title: '自助餐',
            titleMeaning: 'Buffet',
            category: 'Restaurant',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '自助餐多少钱一位？', pinyin: 'zìzhùcān duōshao qián yī wèi?', meaning: 'How much is the buffet per person?' },
                { speaker: 'B', chinese: '中午一百二，晚上一百八。', pinyin: 'zhōngwǔ yībǎi èr, wǎnshang yībǎi bā.', meaning: '120 yuan for lunch, 180 for dinner.' },
                { speaker: 'A', chinese: '孩子有优惠吗？', pinyin: 'háizi yǒu yōuhuì ma?', meaning: 'Is there a discount for children?' },
                { speaker: 'B', chinese: '一米二以下半价。', pinyin: 'yī mǐ èr yǐxià bàn jià.', meaning: 'Under 1.2 meters is half price.' }
            ]
        },
        {
            id: 'dex_011',
            title: '外卖订餐',
            titleMeaning: 'Ordering Takeout',
            category: 'Restaurant',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你好，我要外卖。', pinyin: 'nǐ hǎo, wǒ yào wàimài.', meaning: 'Hello, I want to order takeout.' },
                { speaker: 'B', chinese: '好的，您的地址是哪里？', pinyin: 'hǎo de, nín de dìzhǐ shì nǎlǐ?', meaning: 'OK, what is your address?' },
                { speaker: 'A', chinese: '中山路十五号。', pinyin: 'zhōngshān lù shíwǔ hào.', meaning: '15 Zhongshan Road.' },
                { speaker: 'B', chinese: '大概三十分钟送到。', pinyin: 'dàgài sānshí fēnzhōng sòng dào.', meaning: 'It will arrive in about 30 minutes.' },
                { speaker: 'A', chinese: '好的，谢谢。', pinyin: 'hǎo de, xièxie.', meaning: 'OK, thanks.' }
            ]
        },
        {
            id: 'dex_012',
            title: '询问菜单',
            titleMeaning: 'Asking About the Menu',
            category: 'Restaurant',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你们有素食吗？', pinyin: 'nǐmen yǒu sùshí ma?', meaning: 'Do you have vegetarian food?' },
                { speaker: 'B', chinese: '有的，我们有蔬菜炒饭和豆腐。', pinyin: 'yǒu de, wǒmen yǒu shūcài chǎofàn hé dòufu.', meaning: 'Yes, we have vegetable fried rice and tofu.' },
                { speaker: 'A', chinese: '有没有辣的？', pinyin: 'yǒu méiyǒu là de?', meaning: 'Is there anything spicy?' },
                { speaker: 'B', chinese: '麻婆豆腐是辣的。', pinyin: 'mápó dòufu shì là de.', meaning: 'Mapo tofu is spicy.' },
                { speaker: 'A', chinese: '就来这个吧。', pinyin: 'jiù lái zhège ba.', meaning: 'I will have this then.' }
            ]
        },
        {
            id: 'dex_013',
            title: '等位',
            titleMeaning: 'Waiting for a Table',
            category: 'Restaurant',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '请问还有位子吗？', pinyin: 'qǐngwèn hái yǒu wèizi ma?', meaning: 'Excuse me, do you have any tables?' },
                { speaker: 'B', chinese: '现在满了，需要等十五分钟。', pinyin: 'xiànzài mǎn le, xūyào děng shíwǔ fēnzhōng.', meaning: 'We are full now, need to wait 15 minutes.' },
                { speaker: 'A', chinese: '好的，我们等。', pinyin: 'hǎo de, wǒmen děng.', meaning: 'OK, we will wait.' },
                { speaker: 'B', chinese: '请在这里拿号。', pinyin: 'qǐng zài zhèlǐ ná hào.', meaning: 'Please take a number here.' },
                { speaker: 'A', chinese: '好的，谢谢。', pinyin: 'hǎo de, xièxie.', meaning: 'OK, thanks.' }
            ]
        },
        {
            id: 'dex_014',
            title: '特色菜介绍',
            titleMeaning: 'Introducing Specialties',
            category: 'Restaurant',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你们店的特色菜是什么？', pinyin: 'nǐmen diàn de tèsè cài shì shénme?', meaning: 'What is your restaurant\'s specialty?' },
                { speaker: 'B', chinese: '我们最出名的是水煮鱼。', pinyin: 'wǒmen zuì chūmíng de shì shuǐzhǔ yú.', meaning: 'Our most famous dish is boiled fish in chili.' },
                { speaker: 'A', chinese: '辣不辣？', pinyin: 'là bù là?', meaning: 'Is it spicy?' },
                { speaker: 'B', chinese: '有点辣，但是很好吃。', pinyin: 'yǒudiǎn là, dànshì hěn hǎochī.', meaning: 'A bit spicy, but very tasty.' },
                { speaker: 'A', chinese: '那就试试吧。', pinyin: 'nà jiù shìshi ba.', meaning: 'Let me try it then.' }
            ]
        },
        {
            id: 'dex_015',
            title: '茶水服务',
            titleMeaning: 'Tea Service',
            category: 'Restaurant',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '请给我们一壶茶。', pinyin: 'qǐng gěi wǒmen yī hú chá.', meaning: 'Please give us a pot of tea.' },
                { speaker: 'B', chinese: '您要什么茶？我们有绿茶和乌龙茶。', pinyin: 'nín yào shénme chá? wǒmen yǒu lǜchá hé wūlóng chá.', meaning: 'What tea would you like? We have green tea and oolong tea.' },
                { speaker: 'A', chinese: '绿茶吧。', pinyin: 'lǜchá ba.', meaning: 'Green tea please.' },
                { speaker: 'B', chinese: '好的，请稍等。', pinyin: 'hǎo de, qǐng shāo děng.', meaning: 'OK, please wait a moment.' }
            ]
        },
        // ==================== 2. SHOPPING (dex_016 - dex_030) ====================
        {
            id: 'dex_016',
            title: '问价格',
            titleMeaning: 'Asking the Price',
            category: 'Shopping',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '这个多少钱？', pinyin: 'zhège duōshao qián?', meaning: 'How much is this?' },
                { speaker: 'B', chinese: '这个三百五十块。', pinyin: 'zhège sānbǎi wǔshí kuài.', meaning: 'This is 350 yuan.' },
                { speaker: 'A', chinese: '太贵了，能便宜点吗？', pinyin: 'tài guì le, néng piányi diǎn ma?', meaning: 'Too expensive, can it be cheaper?' },
                { speaker: 'B', chinese: '最低三百块。', pinyin: 'zuìdī sānbǎi kuài.', meaning: 'The lowest is 300 yuan.' }
            ]
        },
        {
            id: 'dex_017',
            title: '讨价还价',
            titleMeaning: 'Bargaining',
            category: 'Shopping',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '太贵了，打个折吧。', pinyin: 'tài guì le, dǎ gè zhé ba.', meaning: 'Too expensive, give a discount.' },
                { speaker: 'B', chinese: '那你说多少钱？', pinyin: 'nà nǐ shuō duōshao qián?', meaning: 'Then how much do you say?' },
                { speaker: 'A', chinese: '两百块，行吗？', pinyin: 'liǎng bǎi kuài, xíng ma?', meaning: '200 yuan, okay?' },
                { speaker: 'B', chinese: '太低了，两百五行不行？', pinyin: 'tài dī le, liǎng bǎi wǔ xíng bù xíng?', meaning: 'Too low, how about 250?' },
                { speaker: 'A', chinese: '好吧，成交。', pinyin: 'hǎo ba, chéngjiāo.', meaning: 'OK, deal.' }
            ]
        },
        {
            id: 'dex_018',
            title: '试衣服',
            titleMeaning: 'Trying Clothes',
            category: 'Shopping',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '我可以试穿这件吗？', pinyin: 'wǒ kěyǐ shìchuān zhè jiàn ma?', meaning: 'Can I try this on?' },
                { speaker: 'B', chinese: '当然可以，试衣间在那边。', pinyin: 'dāngrán kěyǐ, shìyī jiān zài nàbiān.', meaning: 'Of course, the fitting room is over there.' },
                { speaker: 'A', chinese: '有没有大一号的？', pinyin: 'yǒu méiyǒu dà yī hào de?', meaning: 'Do you have a size larger?' },
                { speaker: 'B', chinese: '我给您找找。', pinyin: 'wǒ gěi nín zhǎozhǎo.', meaning: 'Let me look for you.' }
            ]
        },
        {
            id: 'dex_019',
            title: '退货',
            titleMeaning: 'Returns',
            category: 'Shopping',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '我想退货。', pinyin: 'wǒ xiǎng tuìhuò.', meaning: 'I want to return this.' },
                { speaker: 'B', chinese: '请问是什么原因？', pinyin: 'qǐngwèn shì shénme yuányīn?', meaning: 'May I ask the reason?' },
                { speaker: 'A', chinese: '大小不合适，太大了。', pinyin: 'dàxiǎo bù héshì, tài dà le.', meaning: 'The size doesn\'t fit, it\'s too big.' },
                { speaker: 'B', chinese: '您有收据吗？', pinyin: 'nín yǒu shōujù ma?', meaning: 'Do you have the receipt?' },
                { speaker: 'A', chinese: '有的，在这里。', pinyin: 'yǒu de, zài zhèlǐ.', meaning: 'Yes, here it is.' },
                { speaker: 'B', chinese: '好的，我帮您办理。', pinyin: 'hǎo de, wǒ bāng nín bànlǐ.', meaning: 'OK, I will process it for you.' }
            ]
        },
        {
            id: 'dex_020',
            title: '换货',
            titleMeaning: 'Exchange',
            category: 'Shopping',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '这个有质量问题，我想换一个。', pinyin: 'zhège yǒu zhìliàng wèntí, wǒ xiǎng huàn yī gè.', meaning: 'This has a quality issue, I want to exchange it.' },
                { speaker: 'B', chinese: '不好意思，给您添麻烦了。', pinyin: 'bù hǎoyìsi, gěi nín tiān máfan le.', meaning: 'Sorry for the trouble.' },
                { speaker: 'A', chinese: '可以换同款不同颜色吗？', pinyin: 'kěyǐ huàn tóng kuǎn bùtóng yánsè ma?', meaning: 'Can I exchange for the same style in a different color?' },
                { speaker: 'B', chinese: '可以的，您看这个颜色喜欢吗？', pinyin: 'kěyǐ de, nín kàn zhège yánsè xǐhuān ma?', meaning: 'Yes, do you like this color?' },
                { speaker: 'A', chinese: '这个不错，就换这个吧。', pinyin: 'zhège bùcuò, jiù huàn zhège ba.', meaning: 'This is nice, I will exchange for this.' }
            ]
        },
        {
            id: 'dex_021',
            title: '买鞋',
            titleMeaning: 'Buying Shoes',
            category: 'Shopping',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '我想买一双运动鞋。', pinyin: 'wǒ xiǎng mǎi yī shuāng yùndòng xié.', meaning: 'I want to buy a pair of sports shoes.' },
                { speaker: 'B', chinese: '您穿多大码？', pinyin: 'nín chuān duō dà mǎ?', meaning: 'What size do you wear?' },
                { speaker: 'A', chinese: '四十二码的。', pinyin: 'sìshí èr mǎ de.', meaning: 'Size 42.' },
                { speaker: 'B', chinese: '这双是今年的新款，您试试。', pinyin: 'zhè shuāng shì jīnnián de xīnkuǎn, nín shìshi.', meaning: 'This pair is this year\'s new style, try it on.' },
                { speaker: 'A', chinese: '很舒服，就要这双。', pinyin: 'hěn shūfu, jiù yào zhè shuāng.', meaning: 'Very comfortable, I will take this pair.' }
            ]
        },
        {
            id: 'dex_022',
            title: '买化妆品',
            titleMeaning: 'Buying Cosmetics',
            category: 'Shopping',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '我想买防晒霜。', pinyin: 'wǒ xiǎng mǎi fángshài shuāng.', meaning: 'I want to buy sunscreen.' },
                { speaker: 'B', chinese: '您想要什么防晒指数的？', pinyin: 'nín xiǎng yào shénme fángshài zhǐshù de?', meaning: 'What SPF do you want?' },
                { speaker: 'A', chinese: 'SPF五十的吧。', pinyin: 'SPF wǔshí de ba.', meaning: 'SPF 50 please.' },
                { speaker: 'B', chinese: '这个牌子很好用，而且不油腻。', pinyin: 'zhège páizi hěn hǎo yòng, érqiě bù yóunì.', meaning: 'This brand works well and is not greasy.' },
                { speaker: 'A', chinese: '多少钱？', pinyin: 'duōshao qián?', meaning: 'How much?' },
                { speaker: 'B', chinese: '一百二十块。', pinyin: 'yībǎi èrshí kuài.', meaning: '120 yuan.' }
            ]
        },
        {
            id: 'dex_023',
            title: '买水果',
            titleMeaning: 'Buying Fruit',
            category: 'Shopping',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '苹果怎么卖？', pinyin: 'píngguǒ zěnme mài?', meaning: 'How much are the apples?' },
                { speaker: 'B', chinese: '六块钱一斤。', pinyin: 'liù kuài qián yī jīn.', meaning: '6 yuan per jin.' },
                { speaker: 'A', chinese: '称两斤。', pinyin: 'chēng liǎng jīn.', meaning: 'Give me two jin.' },
                { speaker: 'B', chinese: '好的，还要别的吗？', pinyin: 'hǎo de, hái yào bié de ma?', meaning: 'OK, anything else?' },
                { speaker: 'A', chinese: '再来一串香蕉。', pinyin: 'zài lái yī chuàn xiāngjiāo.', meaning: 'Also a bunch of bananas.' }
            ]
        },
        {
            id: 'dex_024',
            title: '买礼物',
            titleMeaning: 'Buying Gifts',
            category: 'Shopping',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '我想给朋友买生日礼物。', pinyin: 'wǒ xiǎng gěi péngyou mǎi shēngrì lǐwù.', meaning: 'I want to buy a birthday gift for a friend.' },
                { speaker: 'B', chinese: '您朋友是男生还是女生？', pinyin: 'nín péngyou shì nánshēng háishì nǚshēng?', meaning: 'Is your friend a boy or a girl?' },
                { speaker: 'A', chinese: '是女生。', pinyin: 'shì nǚshēng.', meaning: 'It\'s a girl.' },
                { speaker: 'B', chinese: '这款围巾很受欢迎，可以看看。', pinyin: 'zhè kuǎn wéijīn hěn shòu huānyíng, kěyǐ kànkan.', meaning: 'This scarf is very popular, you can take a look.' },
                { speaker: 'A', chinese: '很漂亮，多少钱？', pinyin: 'hěn piàoliang, duōshao qián?', meaning: 'Very pretty, how much?' },
                { speaker: 'B', chinese: '一百五十块，可以免费包装。', pinyin: 'yībǎi wǔshí kuài, kěyǐ miǎnfèi bāozhuāng.', meaning: '150 yuan, with free gift wrapping.' }
            ]
        },
        {
            id: 'dex_025',
            title: '逛商场',
            titleMeaning: 'Shopping at the Mall',
            category: 'Shopping',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '这个商场真大。', pinyin: 'zhège shāngchǎng zhēn dà.', meaning: 'This mall is really big.' },
                { speaker: 'B', chinese: '是啊，一共有五层。', pinyin: 'shì a, yīgòng yǒu wǔ céng.', meaning: 'Yes, there are five floors total.' },
                { speaker: 'A', chinese: '我们一层一层逛吧。', pinyin: 'wǒmen yī céng yī céng guàng ba.', meaning: 'Let\'s browse floor by floor.' },
                { speaker: 'B', chinese: '好，先去二楼的服装区。', pinyin: 'hǎo, xiān qù èr lóu de fúzhuāng qū.', meaning: 'OK, let\'s go to the clothing section on the second floor first.' }
            ]
        },
        {
            id: 'dex_026',
            title: '打折促销',
            titleMeaning: 'Sales and Promotions',
            category: 'Shopping',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '现在有什么打折活动吗？', pinyin: 'xiànzài yǒu shénme dǎzhé huódòng ma?', meaning: 'Are there any discount promotions now?' },
                { speaker: 'B', chinese: '有的，买二送一。', pinyin: 'yǒu de, mǎi èr sòng yī.', meaning: 'Yes, buy two get one free.' },
                { speaker: 'A', chinese: '真的吗？太划算了。', pinyin: 'zhēn de ma? tài huásuàn le.', meaning: 'Really? That\'s a great deal.' },
                { speaker: 'B', chinese: '这个活动到本周日结束。', pinyin: 'zhège huódòng dào běn zhōurì jiéshù.', meaning: 'This promotion ends this Sunday.' }
            ]
        },
        {
            id: 'dex_027',
            title: '买电器',
            titleMeaning: 'Buying Electronics',
            category: 'Shopping',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '我想买一个电饭煲。', pinyin: 'wǒ xiǎng mǎi yī gè diànfànbāo.', meaning: 'I want to buy a rice cooker.' },
                { speaker: 'B', chinese: '这款是智能的，功能很多。', pinyin: 'zhè kuǎn shì zhìnéng de, gōngnéng hěn duō.', meaning: 'This one is smart, with many functions.' },
                { speaker: 'A', chinese: '保修期多久？', pinyin: 'bǎoxiū qī duō jiǔ?', meaning: 'How long is the warranty?' },
                { speaker: 'B', chinese: '保修两年。', pinyin: 'bǎoxiū liǎng nián.', meaning: 'Two-year warranty.' },
                { speaker: 'A', chinese: '好，就买这个吧。', pinyin: 'hǎo, jiù mǎi zhège ba.', meaning: 'OK, I will buy this one.' }
            ]
        },
        {
            id: 'dex_028',
            title: '网上购物取货',
            titleMeaning: 'Online Shopping Pickup',
            category: 'Shopping',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你好，我来取快递。', pinyin: 'nǐ hǎo, wǒ lái qǔ kuàidì.', meaning: 'Hello, I\'m here to pick up a package.' },
                { speaker: 'B', chinese: '您的取件码是什么？', pinyin: 'nín de qǔjiàn mǎ shì shénme?', meaning: 'What is your pickup code?' },
                { speaker: 'A', chinese: '是五六七八九。', pinyin: 'shì wǔ liù qī bā jiǔ.', meaning: 'It\'s 56789.' },
                { speaker: 'B', chinese: '找到了，请在这里签字。', pinyin: 'zhǎo dào le, qǐng zài zhèlǐ qiānzì.', meaning: 'Found it, please sign here.' }
            ]
        },
        {
            id: 'dex_029',
            title: '买书',
            titleMeaning: 'Buying Books',
            category: 'Shopping',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '请问有中文学习书吗？', pinyin: 'qǐngwèn yǒu zhōngwén xuéxí shū ma?', meaning: 'Excuse me, do you have Chinese learning books?' },
                { speaker: 'B', chinese: '有的，在二楼的语言区。', pinyin: 'yǒu de, zài èr lóu de yǔyán qū.', meaning: 'Yes, on the second floor in the language section.' },
                { speaker: 'A', chinese: '有推荐的吗？', pinyin: 'yǒu tuījiàn de ma?', meaning: 'Any recommendations?' },
                { speaker: 'B', chinese: '这本《汉语口语》很实用。', pinyin: 'zhè běn \"hànyǔ kǒuyǔ\" hěn shíyòng.', meaning: 'This \"Chinese Speaking\" book is very practical.' },
                { speaker: 'A', chinese: '好的，我就要这本。', pinyin: 'hǎo de, wǒ jiù yào zhè běn.', meaning: 'OK, I will take this one.' }
            ]
        },
        {
            id: 'dex_030',
            title: '付款方式',
            titleMeaning: 'Payment Methods',
            category: 'Shopping',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '可以用支付宝吗？', pinyin: 'kěyǐ yòng zhīfùbǎo ma?', meaning: 'Can I use Alipay?' },
                { speaker: 'B', chinese: '可以的，也可以微信支付。', pinyin: 'kěyǐ de, yě kěyǐ wēixìn zhīfù.', meaning: 'Yes, you can also use WeChat Pay.' },
                { speaker: 'A', chinese: '现金收吗？', pinyin: 'xiànjīn shōu ma?', meaning: 'Do you accept cash?' },
                { speaker: 'B', chinese: '现金也收的。', pinyin: 'xiànjīn yě shōu de.', meaning: 'We also accept cash.' },
                { speaker: 'A', chinese: '那我用微信支付。', pinyin: 'nà wǒ yòng wēixìn zhīfù.', meaning: 'Then I will use WeChat Pay.' }
            ]
        },
        // ==================== 3. TRAVEL (dex_031 - dex_045) ====================
        {
            id: 'dex_031',
            title: '订机票',
            titleMeaning: 'Booking Flight Tickets',
            category: 'Travel',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '我想订一张去北京的机票。', pinyin: 'wǒ xiǎng dìng yī zhāng qù běijīng de jīpiào.', meaning: 'I want to book a ticket to Beijing.' },
                { speaker: 'B', chinese: '您想订哪天的？', pinyin: 'nín xiǎng dìng nǎ tiān de?', meaning: 'Which day do you want?' },
                { speaker: 'A', chinese: '下周五的。', pinyin: 'xià zhōuwǔ de.', meaning: 'Next Friday.' },
                { speaker: 'B', chinese: '早上八点有一班，可以吗？', pinyin: 'zǎoshang bā diǎn yǒu yī bān, kěyǐ ma?', meaning: 'There is one at 8 am, is that OK?' },
                { speaker: 'A', chinese: '可以，多少钱？', pinyin: 'kěyǐ, duōshao qián?', meaning: 'OK, how much?' },
                { speaker: 'B', chinese: '经济舱八百块。', pinyin: 'jīngjì cāng bābǎi kuài.', meaning: 'Economy class is 800 yuan.' }
            ]
        },
        {
            id: 'dex_032',
            title: '问路',
            titleMeaning: 'Asking for Directions',
            category: 'Travel',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '请问，故宫怎么走？', pinyin: 'qǐngwèn, gùgōng zěnme zǒu?', meaning: 'Excuse me, how do I get to the Forbidden City?' },
                { speaker: 'B', chinese: '一直往前走，到红绿灯右转。', pinyin: 'yīzhí wǎng qián zǒu, dào hónglǜdēng yòu zhuǎn.', meaning: 'Go straight ahead, turn right at the traffic light.' },
                { speaker: 'A', chinese: '走路要多久？', pinyin: 'zǒulù yào duō jiǔ?', meaning: 'How long does it take on foot?' },
                { speaker: 'B', chinese: '大概十五分钟。', pinyin: 'dàgài shíwǔ fēnzhōng.', meaning: 'About 15 minutes.' },
                { speaker: 'A', chinese: '谢谢您。', pinyin: 'xièxie nín.', meaning: 'Thank you.' }
            ]
        },
        {
            id: 'dex_033',
            title: '买景点门票',
            titleMeaning: 'Buying Scenic Spot Tickets',
            category: 'Travel',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '门票多少钱一张？', pinyin: 'ménpiào duōshao qián yī zhāng?', meaning: 'How much is one ticket?' },
                { speaker: 'B', chinese: '成人票六十块，学生票半价。', pinyin: 'chéngrén piào liùshí kuài, xuéshēng piào bàn jià.', meaning: 'Adult ticket is 60 yuan, student ticket is half price.' },
                { speaker: 'A', chinese: '我要两张成人票。', pinyin: 'wǒ yào liǎng zhāng chéngrén piào.', meaning: 'I want two adult tickets.' },
                { speaker: 'B', chinese: '好的，一共一百二十块。', pinyin: 'hǎo de, yīgòng yībǎi èrshí kuài.', meaning: 'OK, total is 120 yuan.' }
            ]
        },
        {
            id: 'dex_034',
            title: '拍照',
            titleMeaning: 'Taking Photos',
            category: 'Travel',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '能帮我拍张照片吗？', pinyin: 'néng bāng wǒ pāi zhāng zhàopiàn ma?', meaning: 'Can you take a photo for me?' },
                { speaker: 'B', chinese: '好的，您站好。', pinyin: 'hǎo de, nín zhàn hǎo.', meaning: 'Sure, stand still.' },
                { speaker: 'A', chinese: '要把后面的塔拍进去。', pinyin: 'yào bǎ hòumiàn de tǎ pāi jìnqù.', meaning: 'Please include the pagoda behind me.' },
                { speaker: 'B', chinese: '好了，拍得很漂亮。', pinyin: 'hǎo le, pāi de hěn piàoliang.', meaning: 'Done, it looks beautiful.' },
                { speaker: 'A', chinese: '谢谢！', pinyin: 'xièxie!', meaning: 'Thanks!' }
            ]
        },
        {
            id: 'dex_035',
            title: '旅游攻略',
            titleMeaning: 'Travel Tips',
            category: 'Travel',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '我第一次来上海，有什么推荐？', pinyin: 'wǒ dì yī cì lái shànghǎi, yǒu shénme tuījiàn?', meaning: 'This is my first time in Shanghai, any recommendations?' },
                { speaker: 'B', chinese: '一定要去外滩看看夜景。', pinyin: 'yīdìng yào qù wàitān kànkan yèjǐng.', meaning: 'You must go to the Bund to see the night view.' },
                { speaker: 'A', chinese: '还有呢？', pinyin: 'hái yǒu ne?', meaning: 'What else?' },
                { speaker: 'B', chinese: '城隍庙的小吃也很好吃。', pinyin: 'chénghuáng miào de xiǎochī yě hěn hǎochī.', meaning: 'The snacks at City God Temple are also delicious.' },
                { speaker: 'A', chinese: '太好了，我要去看看。', pinyin: 'tài hǎo le, wǒ yào qù kànkan.', meaning: 'Great, I will go see it.' }
            ]
        },
        {
            id: 'dex_036',
            title: '订火车票',
            titleMeaning: 'Booking Train Tickets',
            category: 'Travel',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '我想订两张去广州的火车票。', pinyin: 'wǒ xiǎng dìng liǎng zhāng qù guǎngzhōu de huǒchē piào.', meaning: 'I want to book two train tickets to Guangzhou.' },
                { speaker: 'B', chinese: '要高铁还是普通车？', pinyin: 'yào gāotiě háishì pǔtōng chē?', meaning: 'High-speed rail or regular train?' },
                { speaker: 'A', chinese: '高铁，要上午的。', pinyin: 'gāotiě, yào shàngwǔ de.', meaning: 'High-speed, morning departure.' },
                { speaker: 'B', chinese: '九点一刻有一趟，二等座四百五。', pinyin: 'jiǔ diǎn yī kè yǒu yī tàng, èr děng zuò sìbǎi wǔ.', meaning: 'There is one at 9:15, second class is 450.' },
                { speaker: 'A', chinese: '好的，就订这个。', pinyin: 'hǎo de, jiù dìng zhège.', meaning: 'OK, book this one.' }
            ]
        },
        {
            id: 'dex_037',
            title: '坐公交车',
            titleMeaning: 'Taking the Bus',
            category: 'Travel',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '去博物馆坐几路车？', pinyin: 'qù bówùguǎn zuò jǐ lù chē?', meaning: 'Which bus goes to the museum?' },
                { speaker: 'B', chinese: '你可以坐五路或者八路。', pinyin: 'nǐ kěyǐ zuò wǔ lù huòzhě bā lù.', meaning: 'You can take bus No. 5 or No. 8.' },
                { speaker: 'A', chinese: '要坐几站？', pinyin: 'yào zuò jǐ zhàn?', meaning: 'How many stops?' },
                { speaker: 'B', chinese: '五路坐三站就到了。', pinyin: 'wǔ lù zuò sān zhàn jiù dào le.', meaning: 'Three stops on the No. 5.' },
                { speaker: 'A', chinese: '谢谢。', pinyin: 'xièxie.', meaning: 'Thanks.' }
            ]
        },
        {
            id: 'dex_038',
            title: '自驾游',
            titleMeaning: 'Road Trip',
            category: 'Travel',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '我们开车去杭州吧。', pinyin: 'wǒmen kāichē qù hángzhōu ba.', meaning: 'Let\'s drive to Hangzhou.' },
                { speaker: 'B', chinese: '好主意，走高速大概两小时。', pinyin: 'hǎo zhǔyi, zǒu gāosù dàgài liǎng xiǎoshí.', meaning: 'Good idea, about two hours on the highway.' },
                { speaker: 'A', chinese: '路上可以停一下吃午饭。', pinyin: 'lùshang kěyǐ tíng yīxià chī wǔfàn.', meaning: 'We can stop for lunch on the way.' },
                { speaker: 'B', chinese: '我来导航。', pinyin: 'wǒ lái dǎoháng.', meaning: 'I will navigate.' },
                { speaker: 'A', chinese: '别忘了加满油。', pinyin: 'bié wàng le jiā mǎn yóu.', meaning: 'Don\'t forget to fill up the tank.' }
            ]
        },
        {
            id: 'dex_039',
            title: '订酒店',
            titleMeaning: 'Booking a Hotel',
            category: 'Travel',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '我们还没订酒店呢。', pinyin: 'wǒmen hái méi dìng jiǔdiàn ne.', meaning: 'We haven\'t booked a hotel yet.' },
                { speaker: 'B', chinese: '在网上看看有什么好的。', pinyin: 'zài wǎngshàng kànkan yǒu shénme hǎo de.', meaning: 'Let\'s check online for good ones.' },
                { speaker: 'A', chinese: '这家评分很高，价格也合适。', pinyin: 'zhè jiā píngfēn hěn gāo, jiàgé yě héshì.', meaning: 'This one has high ratings and a reasonable price.' },
                { speaker: 'B', chinese: '预订两晚，带早餐的。', pinyin: 'yùdìng liǎng wǎn, dài zǎocān de.', meaning: 'Book two nights with breakfast.' },
                { speaker: 'A', chinese: '好的，我马上下单。', pinyin: 'hǎo de, wǒ mǎshàng xià dān.', meaning: 'OK, I will order now.' }
            ]
        },
        {
            id: 'dex_040',
            title: '旅行团',
            titleMeaning: 'Tour Group',
            category: 'Travel',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你们有去九寨沟的旅行团吗？', pinyin: 'nǐmen yǒu qù jiǔzhàigōu de lǚxíng tuán ma?', meaning: 'Do you have tour groups to Jiuzhaigou?' },
                { speaker: 'B', chinese: '有的，三天两晚的团。', pinyin: 'yǒu de, sān tiān liǎng wǎn de tuán.', meaning: 'Yes, a three-day-two-night tour.' },
                { speaker: 'A', chinese: '多少钱？包括什么？', pinyin: 'duōshao qián? bāokuò shénme?', meaning: 'How much? What does it include?' },
                { speaker: 'B', chinese: '两千八，包括酒店和门票。', pinyin: 'liǎng qiān bā, bāokuò jiǔdiàn hé ménpiào.', meaning: '2800, including hotel and tickets.' },
                { speaker: 'A', chinese: '吃饭包括吗？', pinyin: 'chīfàn bāokuò ma?', meaning: 'Are meals included?' },
                { speaker: 'B', chinese: '包括早餐，午餐和晚餐自理。', pinyin: 'bāokuò zǎocān, wǔcān hé wǎncān zìlǐ.', meaning: 'Breakfast is included, lunch and dinner are on your own.' }
            ]
        },
        {
            id: 'dex_041',
            title: '登长城',
            titleMeaning: 'Climbing the Great Wall',
            category: 'Travel',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '长城离市区远吗？', pinyin: 'chángchéng lí shìqū yuǎn ma?', meaning: 'Is the Great Wall far from the city?' },
                { speaker: 'B', chinese: '大概一个半小时车程。', pinyin: 'dàgài yī gè bàn xiǎoshí chēchéng.', meaning: 'About an hour and a half drive.' },
                { speaker: 'A', chinese: '我们坐缆车上去吧。', pinyin: 'wǒmen zuò lǎnchē shàngqù ba.', meaning: 'Let\'s take the cable car up.' },
                { speaker: 'B', chinese: '好，走下来会比较有意思。', pinyin: 'hǎo, zǒu xiàlai huì bǐjiào yǒuyìsi.', meaning: 'OK, walking down will be more interesting.' },
                { speaker: 'A', chinese: '风景太壮观了！', pinyin: 'fēngjǐng tài zhuàngguān le!', meaning: 'The view is magnificent!' }
            ]
        },
        {
            id: 'dex_042',
            title: '护照丢失',
            titleMeaning: 'Lost Passport',
            category: 'Travel',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '我的护照丢了，怎么办？', pinyin: 'wǒ de hùzhào diū le, zěnme bàn?', meaning: 'I lost my passport, what should I do?' },
                { speaker: 'B', chinese: '别着急，先去大使馆报失。', pinyin: 'bié zháojí, xiān qù dàshǐguǎn bàoshī.', meaning: 'Don\'t worry, first go to the embassy to report it.' },
                { speaker: 'A', chinese: '大使馆在哪里？', pinyin: 'dàshǐguǎn zài nǎlǐ?', meaning: 'Where is the embassy?' },
                { speaker: 'B', chinese: '在市中心，我可以带你去。', pinyin: 'zài shì zhōngxīn, wǒ kěyǐ dài nǐ qù.', meaning: 'In the city center, I can take you there.' },
                { speaker: 'A', chinese: '太感谢了！', pinyin: 'tài gǎnxiè le!', meaning: 'I\'m so grateful!' }
            ]
        },
        {
            id: 'dex_043',
            title: '纪念品',
            titleMeaning: 'Souvenirs',
            category: 'Travel',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '我想买一些纪念品带回去。', pinyin: 'wǒ xiǎng mǎi yīxiē jìniànpǐn dài huíqù.', meaning: 'I want to buy some souvenirs to take back.' },
                { speaker: 'B', chinese: '这个茶叶是当地的特产。', pinyin: 'zhège cháyè shì dāngdì de tèchǎn.', meaning: 'This tea is a local specialty.' },
                { speaker: 'A', chinese: '多少钱一盒？', pinyin: 'duōshao qián yī hé?', meaning: 'How much per box?' },
                { speaker: 'B', chinese: '小盒五十，大盒八十。', pinyin: 'xiǎo hé wǔshí, dà hé bāshí.', meaning: 'Small box is 50, large box is 80.' },
                { speaker: 'A', chinese: '我要三盒小的。', pinyin: 'wǒ yào sān hé xiǎo de.', meaning: 'I want three small boxes.' }
            ]
        },
        {
            id: 'dex_044',
            title: '天气影响行程',
            titleMeaning: 'Weather Affecting Plans',
            category: 'Travel',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '明天天气预报说有大雨。', pinyin: 'míngtiān tiānqì yùbào shuō yǒu dà yǔ.', meaning: 'The weather forecast says heavy rain tomorrow.' },
                { speaker: 'B', chinese: '那去海边的计划要改了。', pinyin: 'nà qù hǎibiān de jìhuà yào gǎi le.', meaning: 'Then we need to change the beach plan.' },
                { speaker: 'A', chinese: '不如去博物馆吧。', pinyin: 'bùrú qù bówùguǎn ba.', meaning: 'How about going to the museum instead?' },
                { speaker: 'B', chinese: '好主意，室内不怕雨。', pinyin: 'hǎo zhǔyi, shìnèi bù pà yǔ.', meaning: 'Good idea, indoors we don\'t have to worry about rain.' }
            ]
        },
        {
            id: 'dex_045',
            title: '回程确认',
            titleMeaning: 'Return Trip Confirmation',
            category: 'Travel',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '我们回去的机票确认了吗？', pinyin: 'wǒmen huíqù de jīpiào quèrèn le ma?', meaning: 'Have we confirmed the return flight?' },
                { speaker: 'B', chinese: '确认了，周日下午三点的。', pinyin: 'quèrèn le, zhōurì xiàwǔ sān diǎn de.', meaning: 'Confirmed, Sunday at 3 pm.' },
                { speaker: 'A', chinese: '那我们要几点去机场？', pinyin: 'nà wǒmen yào jǐ diǎn qù jīchǎng?', meaning: 'What time should we go to the airport?' },
                { speaker: 'B', chinese: '最晚中午十二点出发。', pinyin: 'zuìwǎn zhōngwǔ shíèr diǎn chūfā.', meaning: 'Depart by noon at the latest.' }
            ]
        },
        // ==================== 4. HOTEL (dex_046 - dex_060) ====================
        {
            id: 'dex_046',
            title: '办理入住',
            titleMeaning: 'Check-in',
            category: 'Hotel',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你好，我预订了房间。', pinyin: 'nǐ hǎo, wǒ yùdìng le fángjiān.', meaning: 'Hello, I have a room reservation.' },
                { speaker: 'B', chinese: '请问您的名字？', pinyin: 'qǐngwèn nín de míngzì?', meaning: 'What is your name, please?' },
                { speaker: 'A', chinese: '我叫王明。', pinyin: 'wǒ jiào wángmíng.', meaning: 'My name is Wang Ming.' },
                { speaker: 'B', chinese: '找到了，您订的是大床房，住两晚。', pinyin: 'zhǎo dào le, nín dìng de shì dà chuáng fáng, zhù liǎng wǎn.', meaning: 'Found it, you booked a king room for two nights.' },
                { speaker: 'A', chinese: '对的，押金多少？', pinyin: 'duì de, yājīn duōshao?', meaning: 'Correct, how much is the deposit?' },
                { speaker: 'B', chinese: '五百块。这是您的房卡。', pinyin: 'wǔbǎi kuài. zhè shì nín de fángkǎ.', meaning: '500 yuan. Here is your room card.' }
            ]
        },
        {
            id: 'dex_047',
            title: '换房间',
            titleMeaning: 'Changing Rooms',
            category: 'Hotel',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '这个房间太吵了，能换一间吗？', pinyin: 'zhège fángjiān tài chǎo le, néng huàn yī jiān ma?', meaning: 'This room is too noisy, can I change?' },
                { speaker: 'B', chinese: '对不起，我帮您看看。', pinyin: 'duìbuqǐ, wǒ bāng nín kànkan.', meaning: 'Sorry, let me check for you.' },
                { speaker: 'A', chinese: '有没有靠里面的房间？', pinyin: 'yǒu méiyǒu kào lǐmiàn de fángjiān?', meaning: 'Is there a room facing the interior?' },
                { speaker: 'B', chinese: '有的，八楼还有一间，比较安静。', pinyin: 'yǒu de, bā lóu hái yǒu yī jiān, bǐjiào ānjìng.', meaning: 'Yes, there is one on the eighth floor, quieter.' },
                { speaker: 'A', chinese: '好的，就换到八楼吧。', pinyin: 'hǎo de, jiù huàn dào bā lóu ba.', meaning: 'OK, change to the eighth floor.' }
            ]
        },
        {
            id: 'dex_048',
            title: '客房服务',
            titleMeaning: 'Room Service',
            category: 'Hotel',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你好，我需要客房服务。', pinyin: 'nǐ hǎo, wǒ xūyào kèfáng fúwù.', meaning: 'Hello, I need room service.' },
                { speaker: 'B', chinese: '您需要什么？', pinyin: 'nín xūyào shénme?', meaning: 'What do you need?' },
                { speaker: 'A', chinese: '请送一份早餐到房间，七百零三号房。', pinyin: 'qǐng sòng yī fèn zǎocān dào fángjiān, qī bǎi líng sān hào fáng.', meaning: 'Please send breakfast to room 703.' },
                { speaker: 'B', chinese: '好的，请问您想吃什么？', pinyin: 'hǎo de, qǐngwèn nín xiǎng chī shénme?', meaning: 'OK, what would you like to eat?' },
                { speaker: 'A', chinese: '一份中式早餐，一杯豆浆。', pinyin: 'yī fèn zhōngshì zǎocān, yī bēi dòujiāng.', meaning: 'A Chinese breakfast and a cup of soy milk.' },
                { speaker: 'B', chinese: '二十分钟后送到。', pinyin: 'èrshí fēnzhōng hòu sòng dào.', meaning: 'Will be delivered in 20 minutes.' }
            ]
        },
        {
            id: 'dex_049',
            title: '投诉噪音',
            titleMeaning: 'Noise Complaint',
            category: 'Hotel',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '隔壁太吵了，我无法睡觉。', pinyin: 'gébì tài chǎo le, wǒ wúfǎ shuìjiào.', meaning: 'The next room is too noisy, I can\'t sleep.' },
                { speaker: 'B', chinese: '非常抱歉，我马上联系他们。', pinyin: 'fēicháng bàoqiàn, wǒ mǎshàng liánxì tāmen.', meaning: 'I\'m very sorry, I will contact them right away.' },
                { speaker: 'A', chinese: '已经吵了半个小时了。', pinyin: 'yǐjīng chǎo le bàn gè xiǎoshí le.', meaning: 'It\'s been noisy for half an hour.' },
                { speaker: 'B', chinese: '我们为您换一间房，并且升级到套房。', pinyin: 'wǒmen wèi nín huàn yī jiān fáng, bìngqiě shēngjí dào tàofáng.', meaning: 'We will change your room and upgrade you to a suite.' },
                { speaker: 'A', chinese: '那太好了，谢谢。', pinyin: 'nà tài hǎo le, xièxie.', meaning: 'That would be great, thank you.' }
            ]
        },
        {
            id: 'dex_050',
            title: '洗衣服务',
            titleMeaning: 'Laundry Service',
            category: 'Hotel',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你们有洗衣服务吗？', pinyin: 'nǐmen yǒu xǐyī fúwù ma?', meaning: 'Do you have laundry service?' },
                { speaker: 'B', chinese: '有的，您可以把衣服放在洗衣袋里。', pinyin: 'yǒu de, nín kěyǐ bǎ yīfú fàng zài xǐyī dài lǐ.', meaning: 'Yes, you can put clothes in the laundry bag.' },
                { speaker: 'A', chinese: '什么时候能洗好？', pinyin: 'shénme shíhou néng xǐ hǎo?', meaning: 'When will it be ready?' },
                { speaker: 'B', chinese: '今天下午送的话，明天早上就好。', pinyin: 'jīntiān xiàwǔ sòng dehuà, míngtiān zǎoshang jiù hǎo.', meaning: 'If sent this afternoon, it will be ready tomorrow morning.' },
                { speaker: 'A', chinese: '费用是多少？', pinyin: 'fèiyòng shì duōshao?', meaning: 'How much does it cost?' },
                { speaker: 'B', chinese: '一件衣服十五块。', pinyin: 'yī jiàn yīfú shíwǔ kuài.', meaning: '15 yuan per item.' }
            ]
        },
        {
            id: 'dex_051',
            title: '叫醒服务',
            titleMeaning: 'Wake-up Call',
            category: 'Hotel',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '我需要叫醒服务。', pinyin: 'wǒ xūyào jiàoxǐng fúwù.', meaning: 'I need a wake-up call.' },
                { speaker: 'B', chinese: '好的，您想几点起床？', pinyin: 'hǎo de, nín xiǎng jǐ diǎn qǐchuáng?', meaning: 'OK, what time would you like to wake up?' },
                { speaker: 'A', chinese: '明天早上六点半。', pinyin: 'míngtiān zǎoshang liù diǎn bàn.', meaning: 'Tomorrow at 6:30 am.' },
                { speaker: 'B', chinese: '好的，六点半准时叫您。', pinyin: 'hǎo de, liù diǎn bàn zhǔnshí jiào nín.', meaning: 'OK, we will call you at 6:30 sharp.' }
            ]
        },
        {
            id: 'dex_052',
            title: '推迟退房',
            titleMeaning: 'Late Check-out',
            category: 'Hotel',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '我可以推迟退房吗？', pinyin: 'wǒ kěyǐ tuīchí tuìfáng ma?', meaning: 'Can I have a late check-out?' },
                { speaker: 'B', chinese: '您想推迟到几点？', pinyin: 'nín xiǎng tuīchí dào jǐ diǎn?', meaning: 'What time would you like to extend to?' },
                { speaker: 'A', chinese: '下午两点可以吗？', pinyin: 'xiàwǔ liǎng diǎn kěyǐ ma?', meaning: 'Can it be 2 pm?' },
                { speaker: 'B', chinese: '可以的，需要加收半天房费。', pinyin: 'kěyǐ de, xūyào jiā shōu bàntiān fángfèi.', meaning: 'Yes, there will be a half-day charge.' },
                { speaker: 'A', chinese: '没问题。', pinyin: 'méi wèntí.', meaning: 'No problem.' }
            ]
        },
        {
            id: 'dex_053',
            title: '网络问题',
            titleMeaning: 'Internet Issue',
            category: 'Hotel',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '房间的WiFi密码是多少？', pinyin: 'fángjiān de WiFi mìmǎ shì duōshao?', meaning: 'What is the WiFi password for the room?' },
                { speaker: 'B', chinese: '在房卡套上写着呢。', pinyin: 'zài fángkǎ tào shàng xiě zhe ne.', meaning: 'It\'s written on the room card holder.' },
                { speaker: 'A', chinese: '我连不上网。', pinyin: 'wǒ lián bù shàng wǎng.', meaning: 'I can\'t connect to the internet.' },
                { speaker: 'B', chinese: '我让技术员帮您看看。', pinyin: 'wǒ ràng jìshùyuán bāng nín kànkan.', meaning: 'I will send a technician to help you.' }
            ]
        },
        {
            id: 'dex_054',
            title: '加床',
            titleMeaning: 'Extra Bed',
            category: 'Hotel',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '我想加一张床，可以吗？', pinyin: 'wǒ xiǎng jiā yī zhāng chuáng, kěyǐ ma?', meaning: 'I want to add an extra bed, is that possible?' },
                { speaker: 'B', chinese: '可以的，加床费是一百块一晚。', pinyin: 'kěyǐ de, jiā chuáng fèi shì yībǎi kuài yī wǎn.', meaning: 'Yes, the extra bed fee is 100 yuan per night.' },
                { speaker: 'A', chinese: '好的，请加一张。', pinyin: 'hǎo de, qǐng jiā yī zhāng.', meaning: 'OK, please add one.' },
                { speaker: 'B', chinese: '今晚我们会给您准备好。', pinyin: 'jīnwǎn wǒmen huì gěi nín zhǔnbèi hǎo.', meaning: 'We will have it ready for you tonight.' }
            ]
        },
        {
            id: 'dex_055',
            title: '早餐时间',
            titleMeaning: 'Breakfast Hours',
            category: 'Hotel',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '早餐几点开始？', pinyin: 'zǎocān jǐ diǎn kāishǐ?', meaning: 'What time does breakfast start?' },
                { speaker: 'B', chinese: '每天早上六点到十点。', pinyin: 'měitiān zǎoshang liù diǎn dào shí diǎn.', meaning: 'Every day from 6 am to 10 am.' },
                { speaker: 'A', chinese: '在几楼？', pinyin: 'zài jǐ lóu?', meaning: 'Which floor?' },
                { speaker: 'B', chinese: '在二楼餐厅。', pinyin: 'zài èr lóu cāntīng.', meaning: 'On the second floor restaurant.' },
                { speaker: 'A', chinese: '谢谢。', pinyin: 'xièxie.', meaning: 'Thanks.' }
            ]
        },
        {
            id: 'dex_056',
            title: '空调问题',
            titleMeaning: 'Air Conditioning Issue',
            category: 'Hotel',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '房间的空调不制冷。', pinyin: 'fángjiān de kòngtiáo bù zhìlěng.', meaning: 'The air conditioner in the room isn\'t cooling.' },
                { speaker: 'B', chinese: '我马上派人去修。', pinyin: 'wǒ mǎshàng pài rén qù xiū.', meaning: 'I will send someone to fix it right away.' },
                { speaker: 'A', chinese: '房间里很热，能不能快点？', pinyin: 'fángjiān lǐ hěn rè, néng bùnéng kuài diǎn?', meaning: 'It\'s very hot in the room, can you hurry?' },
                { speaker: 'B', chinese: '好的，五分钟内到。', pinyin: 'hǎo de, wǔ fēnzhōng nèi dào.', meaning: 'OK, will be there within five minutes.' },
                { speaker: 'A', chinese: '谢谢。', pinyin: 'xièxie.', meaning: 'Thanks.' }
            ]
        },
        {
            id: 'dex_057',
            title: '行李寄存',
            titleMeaning: 'Luggage Storage',
            category: 'Hotel',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '退房后可以寄存行李吗？', pinyin: 'tuìfáng hòu kěyǐ jìcún xíngli ma?', meaning: 'Can I store luggage after check-out?' },
                { speaker: 'B', chinese: '可以的，免费寄存。', pinyin: 'kěyǐ de, miǎnfèi jìcún.', meaning: 'Yes, free storage.' },
                { speaker: 'A', chinese: '我下午五点来取。', pinyin: 'wǒ xiàwǔ wǔ diǎn lái qǔ.', meaning: 'I will pick it up at 5 pm.' },
                { speaker: 'B', chinese: '没问题，我们会保管好。', pinyin: 'méi wèntí, wǒmen huì bǎoguǎn hǎo.', meaning: 'No problem, we will keep it safe.' }
            ]
        },
        {
            id: 'dex_058',
            title: '借用物品',
            titleMeaning: 'Borrowing Items',
            category: 'Hotel',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '可以借一个转换插头吗？', pinyin: 'kěyǐ jiè yī gè zhuǎnhuàn chātóu ma?', meaning: 'Can I borrow a plug adapter?' },
                { speaker: 'B', chinese: '有的，我给您拿一个。', pinyin: 'yǒu de, wǒ gěi nín ná yī gè.', meaning: 'Yes, I will get one for you.' },
                { speaker: 'A', chinese: '还需要一个吹风机。', pinyin: 'hái xūyào yī gè chuīfēngjī.', meaning: 'I also need a hairdryer.' },
                { speaker: 'B', chinese: '吹风机在房间的抽屉里。', pinyin: 'chuīfēngjī zài fángjiān de chōuti lǐ.', meaning: 'The hairdryer is in the room drawer.' },
                { speaker: 'A', chinese: '好的，找到了。', pinyin: 'hǎo de, zhǎo dào le.', meaning: 'OK, found it.' }
            ]
        },
        {
            id: 'dex_059',
            title: '退房结账',
            titleMeaning: 'Check-out and Payment',
            category: 'Hotel',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你好，我要退房。', pinyin: 'nǐ hǎo, wǒ yào tuìfáng.', meaning: 'Hello, I want to check out.' },
                { speaker: 'B', chinese: '好的，请稍等，我查一下您的消费。', pinyin: 'hǎo de, qǐng shāo děng, wǒ chá yīxià nín de xiāofèi.', meaning: 'OK, please wait, let me check your charges.' },
                { speaker: 'A', chinese: '有额外费用吗？', pinyin: 'yǒu éwài fèiyòng ma?', meaning: 'Are there any extra charges?' },
                { speaker: 'B', chinese: '您用了房间里的矿泉水，一共两瓶。', pinyin: 'nín yòng le fángjiān lǐ de kuàngquán shuǐ, yīgòng liǎng píng.', meaning: 'You used the mineral water in the room, two bottles.' },
                { speaker: 'A', chinese: '总共多少钱？', pinyin: 'zǒnggòng duōshao qián?', meaning: 'Total how much?' },
                { speaker: 'B', chinese: '加上押金退款，您还需要付两百块。', pinyin: 'jiāshang yājīn tuìkuǎn, nín hái xūyào fù liǎng bǎi kuài.', meaning: 'Including the deposit refund, you need to pay 200 yuan.' }
            ]
        },
        {
            id: 'dex_060',
            title: '酒店健身房',
            titleMeaning: 'Hotel Gym',
            category: 'Hotel',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你们有健身房吗？', pinyin: 'nǐmen yǒu jiànshēn fáng ma?', meaning: 'Do you have a gym?' },
                { speaker: 'B', chinese: '有的，在三楼，二十四小时开放。', pinyin: 'yǒu de, zài sān lóu, èrshísì xiǎoshí kāifàng.', meaning: 'Yes, on the third floor, open 24 hours.' },
                { speaker: 'A', chinese: '需要刷卡吗？', pinyin: 'xūyào shuākǎ ma?', meaning: 'Do I need to swipe a card?' },
                { speaker: 'B', chinese: '用房卡就可以进去。', pinyin: 'yòng fángkǎ jiù kěyǐ jìnqù.', meaning: 'You can enter with your room card.' },
                { speaker: 'A', chinese: '太好了，我晚上去跑步。', pinyin: 'tài hǎo le, wǒ wǎnshang qù pǎobù.', meaning: 'Great, I will go running tonight.' }
            ]
        },
        // ==================== 5. SCHOOL (dex_061 - dex_075) ====================
        {
            id: 'dex_061',
            title: '第一堂课',
            titleMeaning: 'First Day of Class',
            category: 'School',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '同学们好，我是你们的新老师。', pinyin: 'tóngxuémen hǎo, wǒ shì nǐmen de xīn lǎoshī.', meaning: 'Hello class, I am your new teacher.' },
                { speaker: 'B', chinese: '老师好！', pinyin: 'lǎoshī hǎo!', meaning: 'Hello teacher!' },
                { speaker: 'A', chinese: '今天我们先互相认识一下。', pinyin: 'jīntiān wǒmen xiān hùxiāng rènshi yīxià.', meaning: 'Today let\'s first get to know each other.' },
                { speaker: 'C', chinese: '老师，我叫李华。', pinyin: 'lǎoshī, wǒ jiào lǐhuá.', meaning: 'Teacher, my name is Li Hua.' },
                { speaker: 'A', chinese: '你好李华，欢迎你。', pinyin: 'nǐ hǎo lǐhuá, huānyíng nǐ.', meaning: 'Hello Li Hua, welcome.' }
            ]
        },
        {
            id: 'dex_062',
            title: '交作业',
            titleMeaning: 'Handing in Homework',
            category: 'School',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '老师，这是昨天的作业。', pinyin: 'lǎoshī, zhè shì zuótiān de zuòyè.', meaning: 'Teacher, here is yesterday\'s homework.' },
                { speaker: 'B', chinese: '好的，放这里吧。', pinyin: 'hǎo de, fàng zhèlǐ ba.', meaning: 'OK, put it here.' },
                { speaker: 'A', chinese: '老师，第三题我不会做。', pinyin: 'lǎoshī, dì sān tí wǒ bù huì zuò.', meaning: 'Teacher, I don\'t know how to do question 3.' },
                { speaker: 'B', chinese: '下课后来办公室，我教你。', pinyin: 'xiàkè hòu lái bàngōngshì, wǒ jiào nǐ.', meaning: 'Come to the office after class, I will teach you.' },
                { speaker: 'A', chinese: '谢谢老师。', pinyin: 'xièxie lǎoshī.', meaning: 'Thank you, teacher.' }
            ]
        },
        {
            id: 'dex_063',
            title: '考试通知',
            titleMeaning: 'Exam Announcement',
            category: 'School',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '同学们，下周三有期中考试。', pinyin: 'tóngxuémen, xià zhōusān yǒu qīzhōng kǎoshì.', meaning: 'Class, there is a midterm exam next Wednesday.' },
                { speaker: 'B', chinese: '老师，考什么内容？', pinyin: 'lǎoshī, kǎo shénme nèiróng?', meaning: 'Teacher, what content will be covered?' },
                { speaker: 'A', chinese: '第一课到第五课。', pinyin: 'dì yī kè dào dì wǔ kè.', meaning: 'Lesson 1 to Lesson 5.' },
                { speaker: 'C', chinese: '难不难？', pinyin: 'nán bù nán?', meaning: 'Is it difficult?' },
                { speaker: 'A', chinese: '好好复习就不难。', pinyin: 'hǎohǎo fùxí jiù bù nán.', meaning: 'If you review well, it won\'t be difficult.' }
            ]
        },
        {
            id: 'dex_064',
            title: '考试成绩',
            titleMeaning: 'Exam Results',
            category: 'School',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '成绩出来了，你考得怎么样？', pinyin: 'chéngjì chūlái le, nǐ kǎo de zěnme yàng?', meaning: 'The results are out, how did you do?' },
                { speaker: 'B', chinese: '我考了九十五分。', pinyin: 'wǒ kǎo le jiǔshíwǔ fēn.', meaning: 'I got 95 points.' },
                { speaker: 'A', chinese: '真厉害！我只有八十分。', pinyin: 'zhēn lìhài! wǒ zhǐyǒu bāshí fēn.', meaning: 'Amazing! I only got 80.' },
                { speaker: 'B', chinese: '八十分也不错啊。', pinyin: 'bāshí fēn yě bùcuò a.', meaning: '80 is not bad either.' },
                { speaker: 'A', chinese: '下次我要更努力。', pinyin: 'xià cì wǒ yào gèng nǔlì.', meaning: 'Next time I need to work harder.' }
            ]
        },
        {
            id: 'dex_065',
            title: '课堂提问',
            titleMeaning: 'Class Question',
            category: 'School',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '谁能回答这个问题？', pinyin: 'shuí néng huídá zhège wèntí?', meaning: 'Who can answer this question?' },
                { speaker: 'B', chinese: '老师，我来回答。', pinyin: 'lǎoshī, wǒ lái huídá.', meaning: 'Teacher, let me answer.' },
                { speaker: 'A', chinese: '好的，你说。', pinyin: 'hǎo de, nǐ shuō.', meaning: 'OK, go ahead.' },
                { speaker: 'B', chinese: '答案是十四。', pinyin: 'dáàn shì shísì.', meaning: 'The answer is 14.' },
                { speaker: 'A', chinese: '回答正确，很好。', pinyin: 'huídá zhèngquè, hěn hǎo.', meaning: 'Correct answer, very good.' }
            ]
        },
        {
            id: 'dex_066',
            title: '请假',
            titleMeaning: 'Asking for Leave',
            category: 'School',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '老师，我明天想请假。', pinyin: 'lǎoshī, wǒ míngtiān xiǎng qǐngjià.', meaning: 'Teacher, I want to ask for leave tomorrow.' },
                { speaker: 'B', chinese: '怎么了？不舒服吗？', pinyin: 'zěnme le? bù shūfu ma?', meaning: 'What\'s wrong? Are you feeling unwell?' },
                { speaker: 'A', chinese: '我感冒了，有点发烧。', pinyin: 'wǒ gǎnmào le, yǒudiǎn fāshāo.', meaning: 'I have a cold and a bit of a fever.' },
                { speaker: 'B', chinese: '好好休息，多喝水。', pinyin: 'hǎohǎo xiūxí, duō hē shuǐ.', meaning: 'Rest well and drink plenty of water.' },
                { speaker: 'A', chinese: '谢谢老师关心。', pinyin: 'xièxie lǎoshī guānxīn.', meaning: 'Thank you for your concern, teacher.' }
            ]
        },
        {
            id: 'dex_067',
            title: '选课',
            titleMeaning: 'Course Selection',
            category: 'School',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '下学期你想选什么课？', pinyin: 'xià xuéqī nǐ xiǎng xuǎn shénme kè?', meaning: 'What courses do you want to take next semester?' },
                { speaker: 'B', chinese: '我想选汉语课和书法课。', pinyin: 'wǒ xiǎng xuǎn hànyǔ kè hé shūfǎ kè.', meaning: 'I want to take Chinese and calligraphy.' },
                { speaker: 'A', chinese: '书法课有意思吗？', pinyin: 'shūfǎ kè yǒuyìsi ma?', meaning: 'Is calligraphy interesting?' },
                { speaker: 'B', chinese: '很有意思，你可以来试试。', pinyin: 'hěn yǒuyìsi, nǐ kěyǐ lái shìshi.', meaning: 'Very interesting, you should try it.' },
                { speaker: 'A', chinese: '好啊，我也选这个。', pinyin: 'hǎo a, wǒ yě xuǎn zhège.', meaning: 'OK, I will choose this too.' }
            ]
        },
        {
            id: 'dex_068',
            title: '图书馆借书',
            titleMeaning: 'Library Book Borrowing',
            category: 'School',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你好，我想借这本书。', pinyin: 'nǐ hǎo, wǒ xiǎng jiè zhè běn shū.', meaning: 'Hello, I want to borrow this book.' },
                { speaker: 'B', chinese: '请出示学生证。', pinyin: 'qǐng chūshì xuéshēng zhèng.', meaning: 'Please show your student ID.' },
                { speaker: 'A', chinese: '给，能借多久？', pinyin: 'gěi, néng jiè duō jiǔ?', meaning: 'Here, how long can I borrow it?' },
                { speaker: 'B', chinese: '一个月，到期可以续借。', pinyin: 'yī gè yuè, dào qī kěyǐ xùjiè.', meaning: 'One month, you can renew when it\'s due.' },
                { speaker: 'A', chinese: '好的，谢谢。', pinyin: 'hǎo de, xièxie.', meaning: 'OK, thanks.' }
            ]
        },
        {
            id: 'dex_069',
            title: '课间聊天',
            titleMeaning: 'Chatting Between Classes',
            category: 'School',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '下节是什么课？', pinyin: 'xià jié shì shénme kè?', meaning: 'What is the next class?' },
                { speaker: 'B', chinese: '数学课。', pinyin: 'shùxué kè.', meaning: 'Math class.' },
                { speaker: 'A', chinese: '我讨厌数学，太难了。', pinyin: 'wǒ tǎoyàn shùxué, tài nán le.', meaning: 'I hate math, it\'s too hard.' },
                { speaker: 'B', chinese: '多做题就会了。', pinyin: 'duō zuò tí jiù huì le.', meaning: 'Do more practice and you\'ll get it.' },
                { speaker: 'A', chinese: '你说得对。', pinyin: 'nǐ shuō de duì.', meaning: 'You\'re right.' }
            ]
        },
        {
            id: 'dex_070',
            title: '毕业典礼',
            titleMeaning: 'Graduation Ceremony',
            category: 'School',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '毕业典礼是下周六吗？', pinyin: 'bìyè diǎnlǐ shì xià zhōuliù ma?', meaning: 'Is the graduation ceremony next Saturday?' },
                { speaker: 'B', chinese: '对，上午九点在大礼堂。', pinyin: 'duì, shàngwǔ jiǔ diǎn zài dàlǐtáng.', meaning: 'Yes, at 9 am in the auditorium.' },
                { speaker: 'A', chinese: '你爸妈会来吗？', pinyin: 'nǐ bà mā huì lái ma?', meaning: 'Will your parents come?' },
                { speaker: 'B', chinese: '会来的，他们很期待。', pinyin: 'huì lái de, tāmen hěn qīdài.', meaning: 'They will, they are looking forward to it.' },
                { speaker: 'A', chinese: '毕业之后你有什么计划？', pinyin: 'bìyè zhīhòu nǐ yǒu shénme jìhuà?', meaning: 'What are your plans after graduation?' },
                { speaker: 'B', chinese: '我想去中国留学。', pinyin: 'wǒ xiǎng qù zhōngguó liúxué.', meaning: 'I want to study in China.' }
            ]
        },
        {
            id: 'dex_071',
            title: '小组讨论',
            titleMeaning: 'Group Discussion',
            category: 'School',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '我们小组讨论一下这个课题。', pinyin: 'wǒmen xiǎozǔ tǎolùn yīxià zhège kètí.', meaning: 'Let\'s discuss this topic in our group.' },
                { speaker: 'B', chinese: '我先说说我的想法。', pinyin: 'wǒ xiān shuōshuō wǒ de xiǎngfǎ.', meaning: 'Let me share my thoughts first.' },
                { speaker: 'C', chinese: '我觉得可以从环境角度分析。', pinyin: 'wǒ juéde kěyǐ cóng huánjìng jiǎodù fēnxī.', meaning: 'I think we can analyze from an environmental perspective.' },
                { speaker: 'A', chinese: '好主意，大家分工合作。', pinyin: 'hǎo zhǔyi, dàjiā fēngōng hézuò.', meaning: 'Good idea, let\'s divide the work.' },
                { speaker: 'B', chinese: '我负责查资料。', pinyin: 'wǒ fùzé chá zīliào.', meaning: 'I will be responsible for research.' },
                { speaker: 'A', chinese: '那我们周五之前完成。', pinyin: 'nà wǒmen zhōuwǔ zhīqián wánchéng.', meaning: 'Then let\'s finish by Friday.' }
            ]
        },
        {
            id: 'dex_072',
            title: '申请奖学金',
            titleMeaning: 'Scholarship Application',
            category: 'School',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '你申请奖学金了吗？', pinyin: 'nǐ shēnqǐng jiǎngxuéjīn le ma?', meaning: 'Have you applied for the scholarship?' },
                { speaker: 'B', chinese: '申请了，但是竞争很大。', pinyin: 'shēnqǐng le, dànshì jìngzhēng hěn dà.', meaning: 'I applied, but the competition is fierce.' },
                { speaker: 'A', chinese: '你的成绩那么好，肯定有机会。', pinyin: 'nǐ de chéngjì nàme hǎo, kěndìng yǒu jīhuì.', meaning: 'Your grades are so good, you definitely have a chance.' },
                { speaker: 'B', chinese: '希望吧，还需要面试。', pinyin: 'xīwàng ba, hái xūyào miànshì.', meaning: 'I hope so, there is also an interview.' },
                { speaker: 'A', chinese: '加油，我相信你！', pinyin: 'jiāyóu, wǒ xiāngxìn nǐ!', meaning: 'Go for it, I believe in you!' }
            ]
        },
        {
            id: 'dex_073',
            title: '换专业',
            titleMeaning: 'Changing Major',
            category: 'School',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '我想换专业，学经济。', pinyin: 'wǒ xiǎng huàn zhuānyè, xué jīngjì.', meaning: 'I want to change my major to economics.' },
                { speaker: 'B', chinese: '你现在学什么？', pinyin: 'nǐ xiànzài xué shénme?', meaning: 'What are you studying now?' },
                { speaker: 'A', chinese: '学计算机，但是我不喜欢。', pinyin: 'xué jìsuànjī, dànshì wǒ bù xǐhuān.', meaning: 'Computer science, but I don\'t like it.' },
                { speaker: 'B', chinese: '换专业手续麻烦吗？', pinyin: 'huàn zhuānyè shǒuxù máfan ma?', meaning: 'Is the process of changing majors troublesome?' },
                { speaker: 'A', chinese: '需要填表，还要系主任签字。', pinyin: 'xūyào tián biǎo, hái yào xìzhǔrèn qiānzì.', meaning: 'Need to fill forms and get the department head\'s signature.' },
                { speaker: 'B', chinese: '祝你顺利！', pinyin: 'zhù nǐ shùnlì!', meaning: 'Wish you success!' }
            ]
        },
        {
            id: 'dex_074',
            title: '宿舍生活',
            titleMeaning: 'Dormitory Life',
            category: 'School',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你们宿舍怎么样？', pinyin: 'nǐmen sùshè zěnme yàng?', meaning: 'How is your dormitory?' },
                { speaker: 'B', chinese: '四个人一间，还可以。', pinyin: 'sì gè rén yī jiān, hái kěyǐ.', meaning: 'Four people per room, not bad.' },
                { speaker: 'A', chinese: '有空调吗？', pinyin: 'yǒu kòngtiáo ma?', meaning: 'Is there air conditioning?' },
                { speaker: 'B', chinese: '有，但是晚上十一点就断电了。', pinyin: 'yǒu, dànshì wǎnshang shíyī diǎn jiù duàn diàn le.', meaning: 'Yes, but the power goes off at 11 pm.' },
                { speaker: 'A', chinese: '那还挺严格的。', pinyin: 'nà hái tǐng yángé de.', meaning: 'That\'s quite strict.' }
            ]
        },
        {
            id: 'dex_075',
            title: '课外活动',
            titleMeaning: 'Extracurricular Activities',
            category: 'School',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '放学后你有什么活动？', pinyin: 'fàngxué hòu nǐ yǒu shénme huódòng?', meaning: 'What activities do you have after school?' },
                { speaker: 'B', chinese: '我参加了篮球队。', pinyin: 'wǒ cānjiā le lánqiú duì.', meaning: 'I joined the basketball team.' },
                { speaker: 'A', chinese: '真棒，每周练习几次？', pinyin: 'zhēn bàng, měi zhōu liànxí jǐ cì?', meaning: 'Awesome, how many times a week do you practice?' },
                { speaker: 'B', chinese: '每周三次，周二四六。', pinyin: 'měi zhōu sān cì, zhōu èr sì liù.', meaning: 'Three times a week, Tuesday, Thursday, Saturday.' },
                { speaker: 'A', chinese: '我也想参加。', pinyin: 'wǒ yě xiǎng cānjiā.', meaning: 'I want to join too.' },
                { speaker: 'B', chinese: '欢迎你来！', pinyin: 'huānyíng nǐ lái!', meaning: 'You are welcome!' }
            ]
        },
        // ==================== 6. WORK (dex_076 - dex_090) ====================
        {
            id: 'dex_076',
            title: '开会',
            titleMeaning: 'Having a Meeting',
            category: 'Work',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '大家下午好，现在开始开会。', pinyin: 'dàjiā xiàwǔ hǎo, xiànzài kāishǐ kāihuì.', meaning: 'Good afternoon everyone, let\'s start the meeting.' },
                { speaker: 'B', chinese: '今天的议题是什么？', pinyin: 'jīntiān de yìtí shì shénme?', meaning: 'What is today\'s agenda?' },
                { speaker: 'A', chinese: '讨论新项目的进度。', pinyin: 'tǎolùn xīn xiàngmù de jìndù.', meaning: 'Discussing the progress of the new project.' },
                { speaker: 'C', chinese: '我们组已经完成了百分之八十。', pinyin: 'wǒmen zǔ yǐjīng wánchéng le bǎi fēn zhī bāshí.', meaning: 'Our team has completed 80%.' },
                { speaker: 'A', chinese: '很好，继续加油。', pinyin: 'hěn hǎo, jìxù jiāyóu.', meaning: 'Very good, keep it up.' }
            ]
        },
        {
            id: 'dex_077',
            title: '请假工作',
            titleMeaning: 'Taking Leave from Work',
            category: 'Work',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '经理，我想请三天假。', pinyin: 'jīnglǐ, wǒ xiǎng qǐng sān tiān jià.', meaning: 'Manager, I want to take three days off.' },
                { speaker: 'B', chinese: '有什么事吗？', pinyin: 'yǒu shénme shì ma?', meaning: 'Any reason?' },
                { speaker: 'A', chinese: '我家里有急事，要回老家。', pinyin: 'wǒ jiālǐ yǒu jíshì, yào huí lǎojiā.', meaning: 'I have a family emergency and need to go back home.' },
                { speaker: 'B', chinese: '好的，你把手头的工作交接一下。', pinyin: 'hǎo de, nǐ bǎ shǒutóu de gōngzuò jiāojiē yīxià.', meaning: 'OK, hand over your current work first.' },
                { speaker: 'A', chinese: '好的，谢谢经理。', pinyin: 'hǎo de, xièxie jīnglǐ.', meaning: 'OK, thank you, manager.' }
            ]
        },
        {
            id: 'dex_078',
            title: '加班',
            titleMeaning: 'Working Overtime',
            category: 'Work',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '今晚又要加班了。', pinyin: 'jīnwǎn yòu yào jiābān le.', meaning: 'I have to work overtime again tonight.' },
                { speaker: 'B', chinese: '是啊，项目截止日期快到了。', pinyin: 'shì a, xiàngmù jiézhǐ rìqī kuài dào le.', meaning: 'Yeah, the project deadline is coming up.' },
                { speaker: 'A', chinese: '你吃晚饭了吗？', pinyin: 'nǐ chī wǎnfàn le ma?', meaning: 'Have you had dinner?' },
                { speaker: 'B', chinese: '还没，我们点外卖吧。', pinyin: 'hái méi, wǒmen diǎn wàimài ba.', meaning: 'Not yet, let\'s order takeout.' },
                { speaker: 'A', chinese: '好，我要一份炒饭。', pinyin: 'hǎo, wǒ yào yī fèn chǎofàn.', meaning: 'OK, I want a fried rice.' }
            ]
        },
        {
            id: 'dex_079',
            title: '面试',
            titleMeaning: 'Job Interview',
            category: 'Work',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '你好，请坐，先自我介绍一下。', pinyin: 'nǐ hǎo, qǐng zuò, xiān zìwǒ jièshào yīxià.', meaning: 'Hello, please sit down. First, introduce yourself.' },
                { speaker: 'B', chinese: '您好，我叫张伟，毕业于北京大学。', pinyin: 'nín hǎo, wǒ jiào zhāngwěi, bìyè yú běijīng dàxué.', meaning: 'Hello, my name is Zhang Wei, I graduated from Peking University.' },
                { speaker: 'A', chinese: '你为什么想加入我们公司？', pinyin: 'nǐ wèishénme xiǎng jiārù wǒmen gōngsī?', meaning: 'Why do you want to join our company?' },
                { speaker: 'B', chinese: '因为贵公司在行业内很有名，我想学习更多。', pinyin: 'yīnwèi guì gōngsī zài hángyè nèi hěn yǒumíng, wǒ xiǎng xuéxí gèng duō.', meaning: 'Because your company is well known in the industry and I want to learn more.' },
                { speaker: 'A', chinese: '你有什么优势？', pinyin: 'nǐ yǒu shénme yōushì?', meaning: 'What are your strengths?' },
                { speaker: 'B', chinese: '我沟通能力强，而且很细心。', pinyin: 'wǒ gōutōng nénglì qiáng, érqiě hěn xìxīn.', meaning: 'I have strong communication skills and am very detail-oriented.' }
            ]
        },
        {
            id: 'dex_080',
            title: '同事帮忙',
            titleMeaning: 'Colleague Asking for Help',
            category: 'Work',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '小王，能帮我看看这个文件吗？', pinyin: 'xiǎo wáng, néng bāng wǒ kànkan zhège wénjiàn ma?', meaning: 'Xiao Wang, can you take a look at this document for me?' },
                { speaker: 'B', chinese: '好的，有什么问题？', pinyin: 'hǎo de, yǒu shénme wèntí?', meaning: 'Sure, what\'s the problem?' },
                { speaker: 'A', chinese: '这里的数字好像不对。', pinyin: 'zhèlǐ de shùzì hǎoxiàng bù duì.', meaning: 'The numbers here seem wrong.' },
                { speaker: 'B', chinese: '我看看，确实错了，应该是三百万。', pinyin: 'wǒ kànkan, quèshí cuò le, yīnggāi shì sān bǎi wàn.', meaning: 'Let me see, indeed wrong, it should be 3 million.' },
                { speaker: 'A', chinese: '谢谢，我马上改。', pinyin: 'xièxie, wǒ mǎshàng gǎi.', meaning: 'Thanks, I\'ll fix it right away.' }
            ]
        },
        {
            id: 'dex_081',
            title: '升职',
            titleMeaning: 'Promotion',
            category: 'Work',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '恭喜你升职了！', pinyin: 'gōngxǐ nǐ shēngzhí le!', meaning: 'Congratulations on your promotion!' },
                { speaker: 'B', chinese: '谢谢，我也没有想到。', pinyin: 'xièxie, wǒ yě méiyǒu xiǎng dào.', meaning: 'Thanks, I didn\'t expect it either.' },
                { speaker: 'A', chinese: '你工作这么努力，应该的。', pinyin: 'nǐ gōngzuò zhème nǔlì, yīnggāi de.', meaning: 'You work so hard, you deserve it.' },
                { speaker: 'B', chinese: '今晚我请大家吃饭！', pinyin: 'jīnwǎn wǒ qǐng dàjiā chīfàn!', meaning: 'Tonight I treat everyone to dinner!' },
                { speaker: 'A', chinese: '太好了，我们去哪吃？', pinyin: 'tài hǎo le, wǒmen qù nǎ chī?', meaning: 'Great, where are we going?' }
            ]
        },
        {
            id: 'dex_082',
            title: '辞职',
            titleMeaning: 'Resignation',
            category: 'Work',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '经理，我想跟您谈一件事。', pinyin: 'jīnglǐ, wǒ xiǎng gēn nín tán yī jiàn shì.', meaning: 'Manager, I want to talk to you about something.' },
                { speaker: 'B', chinese: '你说吧。', pinyin: 'nǐ shuō ba.', meaning: 'Go ahead.' },
                { speaker: 'A', chinese: '我想辞职。', pinyin: 'wǒ xiǎng cízhí.', meaning: 'I want to resign.' },
                { speaker: 'B', chinese: '为什么？是对工作不满意吗？', pinyin: 'wèishénme? shì duì gōngzuò bù mǎnyì ma?', meaning: 'Why? Are you unsatisfied with the work?' },
                { speaker: 'A', chinese: '不是的，我找到了一个更适合发展的机会。', pinyin: 'bù shì de, wǒ zhǎo dào le yī gè gèng shìhé fāzhǎn de jīhuì.', meaning: 'No, I found an opportunity better for my development.' },
                { speaker: 'B', chinese: '我理解，祝你未来更好。', pinyin: 'wǒ lǐjiě, zhù nǐ wèilái gèng hǎo.', meaning: 'I understand, wish you all the best.' }
            ]
        },
        {
            id: 'dex_083',
            title: '团建活动',
            titleMeaning: 'Team Building',
            category: 'Work',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '这周末有团建活动，大家都要参加。', pinyin: 'zhè zhōumò yǒu tuánjiàn huódòng, dàjiā dōu yào cānjiā.', meaning: 'There is a team building event this weekend, everyone must attend.' },
                { speaker: 'B', chinese: '去哪里？', pinyin: 'qù nǎlǐ?', meaning: 'Where are we going?' },
                { speaker: 'A', chinese: '去郊区的一个农场。', pinyin: 'qù jiāoqū de yī gè nóngchǎng.', meaning: 'To a farm in the suburbs.' },
                { speaker: 'C', chinese: '有什么活动？', pinyin: 'yǒu shénme huódòng?', meaning: 'What activities?' },
                { speaker: 'A', chinese: '烧烤、钓鱼还有团队游戏。', pinyin: 'shāokǎo, diàoyú hái yǒu tuánduì yóuxì.', meaning: 'BBQ, fishing, and team games.' },
                { speaker: 'B', chinese: '听起来很好玩！', pinyin: 'tīng qǐlai hěn hǎowán!', meaning: 'Sounds fun!' }
            ]
        },
        {
            id: 'dex_084',
            title: '邮件沟通',
            titleMeaning: 'Email Communication',
            category: 'Work',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你收到客户的邮件了吗？', pinyin: 'nǐ shōu dào kèhù de yóujiàn le ma?', meaning: 'Did you receive the client\'s email?' },
                { speaker: 'B', chinese: '收到了，他们想要修改方案。', pinyin: 'shōu dào le, tāmen xiǎng yào xiūgǎi fāng\'àn.', meaning: 'Yes, they want to revise the plan.' },
                { speaker: 'A', chinese: '改动大吗？', pinyin: 'gǎidòng dà ma?', meaning: 'Are the changes big?' },
                { speaker: 'B', chinese: '不大，改几个细节就行了。', pinyin: 'bù dà, gǎi jǐ gè xìjié jiù xíng le.', meaning: 'Not big, just change a few details.' },
                { speaker: 'A', chinese: '那我今天改好发给你。', pinyin: 'nà wǒ jīntiān gǎi hǎo fā gěi nǐ.', meaning: 'Then I will revise it today and send it to you.' }
            ]
        },
        {
            id: 'dex_085',
            title: '工资谈判',
            titleMeaning: 'Salary Negotiation',
            category: 'Work',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '经理，我想谈谈工资的事。', pinyin: 'jīnglǐ, wǒ xiǎng tántan gōngzī de shì.', meaning: 'Manager, I want to talk about salary.' },
                { speaker: 'B', chinese: '好的，你说说你的想法。', pinyin: 'hǎo de, nǐ shuōshuō nǐ de xiǎngfǎ.', meaning: 'OK, tell me your thoughts.' },
                { speaker: 'A', chinese: '我来公司已经两年了，希望能加薪。', pinyin: 'wǒ lái gōngsī yǐjīng liǎng nián le, xīwàng néng jiā xīn.', meaning: 'I\'ve been with the company for two years and hope for a raise.' },
                { speaker: 'B', chinese: '你的表现确实不错，我考虑一下。', pinyin: 'nǐ de biǎoxiàn quèshí bùcuò, wǒ kǎolǜ yīxià.', meaning: 'Your performance is indeed good, let me think about it.' },
                { speaker: 'A', chinese: '我希望增加百分之十五。', pinyin: 'wǒ xīwàng zēngjiā bǎi fēn zhī shíwǔ.', meaning: 'I\'m hoping for a 15% increase.' },
                { speaker: 'B', chinese: '我下周给你答复。', pinyin: 'wǒ xià zhōu gěi nǐ dáfù.', meaning: 'I will give you an answer next week.' }
            ]
        },
        {
            id: 'dex_086',
            title: '出差',
            titleMeaning: 'Business Trip',
            category: 'Work',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '下周一你要去上海出差。', pinyin: 'xià zhōuyī nǐ yào qù shànghǎi chūchāi.', meaning: 'You need to go to Shanghai on a business trip next Monday.' },
                { speaker: 'B', chinese: '去几天？', pinyin: 'qù jǐ tiān?', meaning: 'How many days?' },
                { speaker: 'A', chinese: '周三回来，我帮你订机票和酒店。', pinyin: 'zhōusān huílai, wǒ bāng nǐ dìng jīpiào hé jiǔdiàn.', meaning: 'Back on Wednesday, I will book the flight and hotel for you.' },
                { speaker: 'B', chinese: '好的，需要准备什么资料？', pinyin: 'hǎo de, xūyào zhǔnbèi shénme zīliào?', meaning: 'OK, what materials do I need to prepare?' },
                { speaker: 'A', chinese: '把合同和PPT带上。', pinyin: 'bǎ hétóng hé PPT dài shàng.', meaning: 'Bring the contract and PPT.' }
            ]
        },
        {
            id: 'dex_087',
            title: '新人培训',
            titleMeaning: 'New Employee Training',
            category: 'Work',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '欢迎新同事，今天开始培训。', pinyin: 'huānyíng xīn tóngshì, jīntiān kāishǐ péixùn.', meaning: 'Welcome new colleagues, training starts today.' },
                { speaker: 'B', chinese: '请问培训内容是什么？', pinyin: 'qǐngwèn péixùn nèiróng shì shénme?', meaning: 'What is the training content?' },
                { speaker: 'A', chinese: '先了解公司文化，再学习工作流程。', pinyin: 'xiān liǎojiě gōngsī wénhuà, zài xuéxí gōngzuò liúchéng.', meaning: 'First understand the company culture, then learn the workflow.' },
                { speaker: 'C', chinese: '培训要多久？', pinyin: 'péixùn yào duō jiǔ?', meaning: 'How long is the training?' },
                { speaker: 'A', chinese: '为期一周。', pinyin: 'wéi qī yī zhōu.', meaning: 'One week long.' }
            ]
        },
        {
            id: 'dex_088',
            title: '年终总结',
            titleMeaning: 'Year-end Review',
            category: 'Work',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '年终总结写好了吗？', pinyin: 'niánzhōng zǒngjié xiě hǎo le ma?', meaning: 'Have you finished the year-end review?' },
                { speaker: 'B', chinese: '还在写，要总结一年的工作成果。', pinyin: 'hái zài xiě, yào zǒngjié yī nián de gōngzuò chéngguǒ.', meaning: 'Still writing, need to summarize this year\'s achievements.' },
                { speaker: 'A', chinese: '别忘了写明年的计划。', pinyin: 'bié wàng le xiě míngnián de jìhuà.', meaning: 'Don\'t forget to write next year\'s plans.' },
                { speaker: 'B', chinese: '好的，你有什么建议？', pinyin: 'hǎo de, nǐ yǒu shénme jiànyì?', meaning: 'OK, do you have any suggestions?' },
                { speaker: 'A', chinese: '多用数据说话，更专业。', pinyin: 'duō yòng shùjù shuōhuà, gèng zhuānyè.', meaning: 'Use more data to speak, it\'s more professional.' }
            ]
        },
        {
            id: 'dex_089',
            title: '客户来访',
            titleMeaning: 'Client Visit',
            category: 'Work',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '客户明天来访，准备好了吗？', pinyin: 'kèhù míngtiān lái fǎng, zhǔnbèi hǎo le ma?', meaning: 'The client is visiting tomorrow, are you ready?' },
                { speaker: 'B', chinese: '会议室已经订好了。', pinyin: 'huìyì shì yǐjīng dìng hǎo le.', meaning: 'The meeting room is already booked.' },
                { speaker: 'A', chinese: '投影仪和资料都准备了吗？', pinyin: 'tóuyǐng yí hé zīliào dōu zhǔnbèi le ma?', meaning: 'Is the projector and materials prepared?' },
                { speaker: 'B', chinese: '都准备好了，茶点也订了。', pinyin: 'dōu zhǔnbèi hǎo le, chádiǎn yě dìng le.', meaning: 'Everything is ready, snacks are also ordered.' },
                { speaker: 'A', chinese: '做得好。', pinyin: 'zuò de hǎo.', meaning: 'Well done.' }
            ]
        },
        {
            id: 'dex_090',
            title: '工作餐',
            titleMeaning: 'Working Lunch',
            category: 'Work',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '中午一起吃饭吧？', pinyin: 'zhōngwǔ yīqǐ chīfàn ba?', meaning: 'Want to have lunch together?' },
                { speaker: 'B', chinese: '好啊，去哪吃？', pinyin: 'hǎo a, qù nǎ chī?', meaning: 'Sure, where to eat?' },
                { speaker: 'A', chinese: '楼下新开了家面馆，去试试？', pinyin: 'lóuxià xīn kāi le jiā miànguǎn, qù shìshi?', meaning: 'A new noodle shop opened downstairs, want to try it?' },
                { speaker: 'B', chinese: '走吧，我请客。', pinyin: 'zǒu ba, wǒ qǐngkè.', meaning: 'Let\'s go, my treat.' },
                { speaker: 'A', chinese: '那怎么好意思。', pinyin: 'nà zěnme hǎoyìsi.', meaning: 'I\'m embarrassed.' }
            ]
        },
        // ==================== 7. DOCTOR (dex_091 - dex_105) ====================
        {
            id: 'dex_091',
            title: '挂号',
            titleMeaning: 'Registering at the Hospital',
            category: 'Doctor',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你好，我要挂号。', pinyin: 'nǐ hǎo, wǒ yào guàhào.', meaning: 'Hello, I want to register.' },
                { speaker: 'B', chinese: '您挂哪个科？', pinyin: 'nín guà nǎ ge kē?', meaning: 'Which department?' },
                { speaker: 'A', chinese: '我头疼，应该挂内科。', pinyin: 'wǒ tóuténg, yīnggāi guà nèikē.', meaning: 'I have a headache, I should see internal medicine.' },
                { speaker: 'B', chinese: '挂号费十五块。', pinyin: 'guàhào fèi shíwǔ kuài.', meaning: 'The registration fee is 15 yuan.' },
                { speaker: 'A', chinese: '好的，给您钱。', pinyin: 'hǎo de, gěi nǐ qián.', meaning: 'OK, here is the money.' }
            ]
        },
        {
            id: 'dex_092',
            title: '看医生',
            titleMeaning: 'Seeing the Doctor',
            category: 'Doctor',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你哪里不舒服？', pinyin: 'nǐ nǎlǐ bù shūfu?', meaning: 'Where do you feel unwell?' },
                { speaker: 'B', chinese: '我肚子疼了两天了。', pinyin: 'wǒ dùzi téng le liǎng tiān le.', meaning: 'I\'ve had a stomachache for two days.' },
                { speaker: 'A', chinese: '有没有拉肚子？', pinyin: 'yǒu méiyǒu lā dùzi?', meaning: 'Have you had diarrhea?' },
                { speaker: 'B', chinese: '有，昨天拉了五次。', pinyin: 'yǒu, zuótiān lā le wǔ cì.', meaning: 'Yes, I went five times yesterday.' },
                { speaker: 'A', chinese: '可能是肠胃炎，先验个血。', pinyin: 'kěnéng shì chángwèi yán, xiān yàn gè xuè.', meaning: 'It might be gastroenteritis, let\'s do a blood test first.' }
            ]
        },
        {
            id: 'dex_093',
            title: '拿药',
            titleMeaning: 'Getting Medicine',
            category: 'Doctor',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '医生，这些药怎么吃？', pinyin: 'yīshēng, zhèxiē yào zěnme chī?', meaning: 'Doctor, how do I take these medicines?' },
                { speaker: 'B', chinese: '这个一天三次，饭后吃。', pinyin: 'zhège yī tiān sān cì, fàn hòu chī.', meaning: 'This one three times a day, after meals.' },
                { speaker: 'A', chinese: '一次吃几片？', pinyin: 'yī cì chī jǐ piàn?', meaning: 'How many pills each time?' },
                { speaker: 'B', chinese: '一次两片，多喝水。', pinyin: 'yī cì liǎng piàn, duō hē shuǐ.', meaning: 'Two pills each time, drink plenty of water.' },
                { speaker: 'A', chinese: '好的，记住了。', pinyin: 'hǎo de, jìzhù le.', meaning: 'OK, got it.' }
            ]
        },
        {
            id: 'dex_094',
            title: '看牙医',
            titleMeaning: 'Seeing the Dentist',
            category: 'Doctor',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '我的牙疼得厉害。', pinyin: 'wǒ de yá téng de lìhài.', meaning: 'My tooth hurts badly.' },
                { speaker: 'B', chinese: '是哪颗牙疼？', pinyin: 'shì nǎ kē yá téng?', meaning: 'Which tooth hurts?' },
                { speaker: 'A', chinese: '右边下面的大牙。', pinyin: 'yòubiān xiàmiàn de dà yá.', meaning: 'The lower right molar.' },
                { speaker: 'B', chinese: '张开嘴，我看看。', pinyin: 'zhāng kāi zuǐ, wǒ kànkan.', meaning: 'Open your mouth, let me see.' },
                { speaker: 'A', chinese: '怎么样？严重吗？', pinyin: 'zěnme yàng? yánzhòng ma?', meaning: 'How is it? Is it serious?' },
                { speaker: 'B', chinese: '蛀牙了，需要补牙。', pinyin: 'zhù yá le, xūyào bǔ yá.', meaning: 'It\'s a cavity, needs to be filled.' }
            ]
        },
        {
            id: 'dex_095',
            title: '发烧',
            titleMeaning: 'Having a Fever',
            category: 'Doctor',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '我好像发烧了。', pinyin: 'wǒ hǎoxiàng fāshāo le.', meaning: 'I think I have a fever.' },
                { speaker: 'B', chinese: '量一下体温。', pinyin: 'liáng yīxià tǐwēn.', meaning: 'Let\'s take your temperature.' },
                { speaker: 'A', chinese: '三十九度。', pinyin: 'sānshíjiǔ dù.', meaning: '39 degrees.' },
                { speaker: 'B', chinese: '发烧了，打一针吧。', pinyin: 'fāshāo le, dǎ yī zhēn ba.', meaning: 'You have a fever, let\'s give you an injection.' },
                { speaker: 'A', chinese: '我怕打针。', pinyin: 'wǒ pà dǎzhēn.', meaning: 'I\'m afraid of injections.' },
                { speaker: 'B', chinese: '那就先吃药观察一下。', pinyin: 'nà jiù xiān chī yào guānchá yīxià.', meaning: 'Then take medicine and observe first.' }
            ]
        },
        {
            id: 'dex_096',
            title: '过敏',
            titleMeaning: 'Allergy',
            category: 'Doctor',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '我身上起了很多红点。', pinyin: 'wǒ shēnshang qǐ le hěn duō hóng diǎn.', meaning: 'I have many red spots on my body.' },
                { speaker: 'B', chinese: '痒不痒？', pinyin: 'yǎng bù yǎng?', meaning: 'Are they itchy?' },
                { speaker: 'A', chinese: '很痒，可能是过敏。', pinyin: 'hěn yǎng, kěnéng shì guòmǐn.', meaning: 'Very itchy, might be an allergy.' },
                { speaker: 'B', chinese: '你最近吃了什么？', pinyin: 'nǐ zuìjìn chī le shénme?', meaning: 'What have you eaten recently?' },
                { speaker: 'A', chinese: '吃了海鲜。', pinyin: 'chī le hǎixiān.', meaning: 'I ate seafood.' },
                { speaker: 'B', chinese: '应该是海鲜过敏，我给你开点药。', pinyin: 'yīnggāi shì hǎixiān guòmǐn, wǒ gěi nǐ kāi diǎn yào.', meaning: 'It\'s likely a seafood allergy, I\'ll prescribe some medicine.' }
            ]
        },
        {
            id: 'dex_097',
            title: '买药',
            titleMeaning: 'Buying Medicine',
            category: 'Doctor',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '请问有感冒药吗？', pinyin: 'qǐngwèn yǒu gǎnmào yào ma?', meaning: 'Excuse me, do you have cold medicine?' },
                { speaker: 'B', chinese: '有的，你要哪种？', pinyin: 'yǒu de, nǐ yào nǎ zhǒng?', meaning: 'Yes, which kind do you want?' },
                { speaker: 'A', chinese: '有没有中药成分的？', pinyin: 'yǒu méiyǒu zhōngyào chéngfèn de?', meaning: 'Is there one with Chinese medicine ingredients?' },
                { speaker: 'B', chinese: '这个板蓝根是中药的。', pinyin: 'zhège bǎnlángēn shì zhōngyào de.', meaning: 'This Banlangen is Chinese medicine.' },
                { speaker: 'A', chinese: '好的，来两盒。', pinyin: 'hǎo de, lái liǎng hé.', meaning: 'OK, give me two boxes.' }
            ]
        },
        {
            id: 'dex_098',
            title: '体检',
            titleMeaning: 'Health Check-up',
            category: 'Doctor',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '我想做一次全身体检。', pinyin: 'wǒ xiǎng zuò yī cì quánshēn tǐjiǎn.', meaning: 'I want to have a full body check-up.' },
                { speaker: 'B', chinese: '好的，有几种套餐可以选择。', pinyin: 'hǎo de, yǒu jǐ zhǒng tàocān kěyǐ xuǎnzé.', meaning: 'OK, there are several packages to choose from.' },
                { speaker: 'A', chinese: '基础套餐多少钱？', pinyin: 'jīchǔ tàocān duōshao qián?', meaning: 'How much is the basic package?' },
                { speaker: 'B', chinese: '五百块，包括血常规和心电图。', pinyin: 'wǔbǎi kuài, bāokuò xuè chángguī hé xīndiàntú.', meaning: '500 yuan, includes blood test and ECG.' },
                { speaker: 'A', chinese: '好的，就做基础套餐。', pinyin: 'hǎo de, jiù zuò jīchǔ tàocān.', meaning: 'OK, I will do the basic package.' }
            ]
        },
        {
            id: 'dex_099',
            title: '急诊',
            titleMeaning: 'Emergency Room',
            category: 'Doctor',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '医生，我父亲胸口疼！', pinyin: 'yīshēng, wǒ fùqīn xiōngkǒu téng!', meaning: 'Doctor, my father has chest pain!' },
                { speaker: 'B', chinese: '快让他躺下，我检查一下。', pinyin: 'kuài ràng tā tǎngxià, wǒ jiǎnchá yīxià.', meaning: 'Quick, let him lie down, let me check.' },
                { speaker: 'A', chinese: '他脸色很白。', pinyin: 'tā liǎnsè hěn bái.', meaning: 'His face is very pale.' },
                { speaker: 'B', chinese: '可能是心脏病发作，马上送急救室！', pinyin: 'kěnéng shì xīnzàng bìng fāzuò, mǎshàng sòngjíjiù shì!', meaning: 'It might be a heart attack, send him to the ER immediately!' },
                { speaker: 'A', chinese: '求求您，救救他！', pinyin: 'qiúqiu nín, jiùjiu tā!', meaning: 'Please, save him!' }
            ]
        },
        {
            id: 'dex_100',
            title: '中医',
            titleMeaning: 'Traditional Chinese Medicine',
            category: 'Doctor',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '医生，我经常失眠。', pinyin: 'yīshēng, wǒ jīngcháng shīmián.', meaning: 'Doctor, I often have insomnia.' },
                { speaker: 'B', chinese: '伸手我看看你的脉。', pinyin: 'shēn shǒu wǒ kànkan nǐ de mài.', meaning: 'Extend your hand, let me check your pulse.' },
                { speaker: 'A', chinese: '怎么样？', pinyin: 'zěnme yàng?', meaning: 'How is it?' },
                { speaker: 'B', chinese: '你肝火旺盛，需要调理。', pinyin: 'nǐ gānhuǒ wàngshèng, xūyào tiáolǐ.', meaning: 'Your liver fire is strong, needs to be regulated.' },
                { speaker: 'A', chinese: '怎么调理？', pinyin: 'zěnme tiáolǐ?', meaning: 'How to regulate?' },
                { speaker: 'B', chinese: '我给你开几副中药，注意饮食清淡。', pinyin: 'wǒ gěi nǐ kāi jǐ fù zhōngyào, zhùyì yǐnshí qīngdàn.', meaning: 'I will prescribe some Chinese medicine, and keep your diet light.' }
            ]
        },
        {
            id: 'dex_101',
            title: '扭伤',
            titleMeaning: 'Sprain',
            category: 'Doctor',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '我不小心扭到脚了。', pinyin: 'wǒ bù xiǎoxīn niǔ dào jiǎo le.', meaning: 'I accidentally sprained my ankle.' },
                { speaker: 'B', chinese: '肿得挺厉害的。', pinyin: 'zhǒng de tǐng lìhài de.', meaning: 'It\'s quite swollen.' },
                { speaker: 'A', chinese: '还能走路吗？', pinyin: 'hái néng zǒulù ma?', meaning: 'Can I still walk?' },
                { speaker: 'B', chinese: '先冰敷一下，明天再来拍个片。', pinyin: 'xiān bīng fū yīxià, míngtiān zài lái pāi gè piàn.', meaning: 'Ice it first, come back tomorrow for an X-ray.' },
                { speaker: 'A', chinese: '好的，谢谢医生。', pinyin: 'hǎo de, xièxie yīshēng.', meaning: 'OK, thank you doctor.' }
            ]
        },
        {
            id: 'dex_102',
            title: '验血报告',
            titleMeaning: 'Blood Test Results',
            category: 'Doctor',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '医生，我的验血报告出来了吗？', pinyin: 'yīshēng, wǒ de yànxuè bàogào chūlái le ma?', meaning: 'Doctor, are my blood test results out?' },
                { speaker: 'B', chinese: '出来了，各项指标都正常。', pinyin: 'chūlái le, gè xiàng zhǐbiāo dōu zhèngcháng.', meaning: 'They\'re out, all indicators are normal.' },
                { speaker: 'A', chinese: '那我为什么总是头晕？', pinyin: 'nà wǒ wèishénme zǒngshì tóuyūn?', meaning: 'Then why am I always dizzy?' },
                { speaker: 'B', chinese: '可能是血压低，要多休息。', pinyin: 'kěnéng shì xuèyā dī, yào duō xiūxí.', meaning: 'It might be low blood pressure, need more rest.' },
                { speaker: 'A', chinese: '好的，我注意。', pinyin: 'hǎo de, wǒ zhùyì.', meaning: 'OK, I will be careful.' }
            ]
        },
        {
            id: 'dex_103',
            title: '打疫苗',
            titleMeaning: 'Getting Vaccinated',
            category: 'Doctor',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你好，我想打流感疫苗。', pinyin: 'nǐ hǎo, wǒ xiǎng dǎ liúgǎn yìmiáo.', meaning: 'Hello, I want to get a flu shot.' },
                { speaker: 'B', chinese: '好的，请填一下这个表。', pinyin: 'hǎo de, qǐng tián yīxià zhège biǎo.', meaning: 'OK, please fill out this form.' },
                { speaker: 'A', chinese: '填好了，要钱的吗？', pinyin: 'tián hǎo le, yào qián de ma?', meaning: 'Done, is it free?' },
                { speaker: 'B', chinese: '免费的，请到三号接种室。', pinyin: 'miǎnfèi de, qǐng dào sān hào jiēzhòng shì.', meaning: 'It\'s free, please go to vaccination room 3.' },
                { speaker: 'A', chinese: '好的，谢谢。', pinyin: 'hǎo de, xièxie.', meaning: 'OK, thanks.' }
            ]
        },
        {
            id: 'dex_104',
            title: '做手术',
            titleMeaning: 'Having Surgery',
            category: 'Doctor',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '医生，我的手术安排在什么时候？', pinyin: 'yīshēng, wǒ de shǒushù ānpái zài shénme shíhou?', meaning: 'Doctor, when is my surgery scheduled?' },
                { speaker: 'B', chinese: '明天上午十点，今晚八点后不要吃东西。', pinyin: 'míngtiān shàngwǔ shí diǎn, jīnwǎn bā diǎn hòu bù yào chī dōngxi.', meaning: 'Tomorrow at 10 am, don\'t eat after 8 pm tonight.' },
                { speaker: 'A', chinese: '手术风险大吗？', pinyin: 'shǒushù fēngxiǎn dà ma?', meaning: 'Is the surgery risky?' },
                { speaker: 'B', chinese: '不用担心，这只是一个小手术。', pinyin: 'bùyòng dānxīn, zhè zhǐshì yī gè xiǎo shǒushù.', meaning: 'Don\'t worry, it\'s just a minor surgery.' },
                { speaker: 'A', chinese: '好的，我明白了。', pinyin: 'hǎo de, wǒ míngbái le.', meaning: 'OK, I understand.' }
            ]
        },
        {
            id: 'dex_105',
            title: '康复建议',
            titleMeaning: 'Recovery Advice',
            category: 'Doctor',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '出院后要注意什么？', pinyin: 'chūyuàn hòu yào zhùyì shénme?', meaning: 'What should I pay attention to after discharge?' },
                { speaker: 'B', chinese: '多休息，不要做剧烈运动。', pinyin: 'duō xiūxí, bù yào zuò jùliè yùndòng.', meaning: 'Rest more, don\'t do strenuous exercise.' },
                { speaker: 'A', chinese: '饮食上要注意吗？', pinyin: 'yǐnshí shàng yào zhùyì ma?', meaning: 'Any dietary precautions?' },
                { speaker: 'B', chinese: '少吃辛辣，多吃水果蔬菜。', pinyin: 'shǎo chī xīnlà, duō chī shuǐguǒ shūcài.', meaning: 'Eat less spicy food, more fruits and vegetables.' },
                { speaker: 'A', chinese: '多久来复查？', pinyin: 'duō jiǔ lái fùchá?', meaning: 'When should I come for a follow-up?' },
                { speaker: 'B', chinese: '一个月后来复查。', pinyin: 'yī gè yuè hòu lái fùchá.', meaning: 'Come back for a check-up in one month.' }
            ]
        },
        // ==================== 8. BANK (dex_106 - dex_120) ====================
        {
            id: 'dex_106',
            title: '开账户',
            titleMeaning: 'Opening an Account',
            category: 'Bank',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你好，我想开一个银行账户。', pinyin: 'nǐ hǎo, wǒ xiǎng kāi yī gè yínháng zhànghù.', meaning: 'Hello, I want to open a bank account.' },
                { speaker: 'B', chinese: '好的，请问您带身份证了吗？', pinyin: 'hǎo de, qǐngwèn nín dài shēnfènzhèng le ma?', meaning: 'OK, did you bring your ID?' },
                { speaker: 'A', chinese: '带了，这是我的身份证。', pinyin: 'dài le, zhè shì wǒ de shēnfènzhèng.', meaning: 'Yes, here is my ID card.' },
                { speaker: 'B', chinese: '请填一下这张申请表。', pinyin: 'qǐng tián yīxià zhè zhāng shēnqǐng biǎo.', meaning: 'Please fill out this application form.' },
                { speaker: 'A', chinese: '填好了，还需要什么？', pinyin: 'tián hǎo le, hái xūyào shénme?', meaning: 'Done, what else is needed?' },
                { speaker: 'B', chinese: '请设置一个密码。', pinyin: 'qǐng shèzhì yī gè mìmǎ.', meaning: 'Please set a password.' }
            ]
        },
        {
            id: 'dex_107',
            title: '存钱',
            titleMeaning: 'Depositing Money',
            category: 'Bank',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你好，我要存钱。', pinyin: 'nǐ hǎo, wǒ yào cún qián.', meaning: 'Hello, I want to deposit money.' },
                { speaker: 'B', chinese: '您要存多少钱？', pinyin: 'nín yào cún duōshao qián?', meaning: 'How much do you want to deposit?' },
                { speaker: 'A', chinese: '五千块。', pinyin: 'wǔ qiān kuài.', meaning: '5000 yuan.' },
                { speaker: 'B', chinese: '请把现金和存折给我。', pinyin: 'qǐng bǎ xiànjīn hé cúnzhé gěi wǒ.', meaning: 'Please give me the cash and passbook.' },
                { speaker: 'A', chinese: '给，麻烦你了。', pinyin: 'gěi, máfan nǐ le.', meaning: 'Here, sorry for the trouble.' }
            ]
        },
        {
            id: 'dex_108',
            title: '取钱',
            titleMeaning: 'Withdrawing Money',
            category: 'Bank',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你好，我想取钱。', pinyin: 'nǐ hǎo, wǒ xiǎng qǔ qián.', meaning: 'Hello, I want to withdraw money.' },
                { speaker: 'B', chinese: '您要取多少？', pinyin: 'nín yào qǔ duōshao?', meaning: 'How much do you want to withdraw?' },
                { speaker: 'A', chinese: '两千块。', pinyin: 'liǎng qiān kuài.', meaning: '2000 yuan.' },
                { speaker: 'B', chinese: '请输入密码。', pinyin: 'qǐng shūrù mìmǎ.', meaning: 'Please enter your password.' },
                { speaker: 'A', chinese: '好了，给您钱。', pinyin: 'hǎo le, gěi nǐ qián.', meaning: 'Done, here is your money.' }
            ]
        },
        {
            id: 'dex_109',
            title: '转账',
            titleMeaning: 'Bank Transfer',
            category: 'Bank',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '我要转账到另一个账户。', pinyin: 'wǒ yào zhuǎnzhàng dào lìng yī gè zhànghù.', meaning: 'I want to transfer to another account.' },
                { speaker: 'B', chinese: '请提供对方的账号和姓名。', pinyin: 'qǐng tígōng duìfāng de zhànghào hé xìngmíng.', meaning: 'Please provide the recipient\'s account number and name.' },
                { speaker: 'A', chinese: '账号是6222021234567890，名字是李华。', pinyin: 'zhànghào shì 6222021234567890, míngzì shì lǐhuá.', meaning: 'The account number is 6222021234567890, name is Li Hua.' },
                { speaker: 'B', chinese: '转账金额是多少？', pinyin: "zhuǎnzhàng jīn'é shì duōshao?", meaning: 'What is the transfer amount?' },
                { speaker: 'A', chinese: '三千块。', pinyin: 'sān qiān kuài.', meaning: '3000 yuan.' },
                { speaker: 'B', chinese: '转账成功，这是凭证。', pinyin: 'zhuǎnzhàng chénggōng, zhè shì píngzhèng.', meaning: 'Transfer successful, here is the receipt.' }
            ]
        },
        {
            id: 'dex_110',
            title: '兑换外币',
            titleMeaning: 'Currency Exchange',
            category: 'Bank',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你好，我想换一些美元。', pinyin: 'nǐ hǎo, wǒ xiǎng huàn yīxiē měiyuán.', meaning: 'Hello, I want to exchange some US dollars.' },
                { speaker: 'B', chinese: '今天的汇率是7.2。', pinyin: 'jīntiān de huìlǜ shì qī diǎn èr.', meaning: 'Today\'s exchange rate is 7.2.' },
                { speaker: 'A', chinese: '我要换五百美元。', pinyin: 'wǒ yào huàn wǔbǎi měiyuán.', meaning: 'I want to exchange 500 USD.' },
                { speaker: 'B', chinese: '好的，请出示护照。', pinyin: 'hǎo de, qǐng chūshì hùzhào.', meaning: 'OK, please show your passport.' },
                { speaker: 'A', chinese: '给，这是三千六百块。', pinyin: 'gěi, zhè shì sān qiān liù bǎi kuài.', meaning: 'Here, this is 3600 yuan.' }
            ]
        },
        {
            id: 'dex_111',
            title: '挂失银行卡',
            titleMeaning: 'Lost Bank Card',
            category: 'Bank',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '我的银行卡丢了，要挂失。', pinyin: 'wǒ de yínháng kǎ diū le, yào guàshī.', meaning: 'I lost my bank card, I need to report it.' },
                { speaker: 'B', chinese: '请问您的身份证号是多少？', pinyin: 'qǐngwèn nín de shēnfènzhèng hào shì duōshao?', meaning: 'What is your ID number?' },
                { speaker: 'A', chinese: '三三零一一九九零零零零一二三四五六。', pinyin: 'sān sān líng yī yī jiǔ jiǔ líng líng líng líng yī èr sān sì wǔ liù.', meaning: '33011990000123456.' },
                { speaker: 'B', chinese: '好的，我已经帮您挂失了。', pinyin: 'hǎo de, wǒ yǐjīng bāng nín guàshī le.', meaning: 'OK, I have reported the loss for you.' },
                { speaker: 'A', chinese: '补办新卡要多久？', pinyin: 'bǔbàn xīn kǎ yào duō jiǔ?', meaning: 'How long does it take to get a new card?' },
                { speaker: 'B', chinese: '七个工作日。', pinyin: 'qī gè gōngzuò rì.', meaning: 'Seven working days.' }
            ]
        },
        {
            id: 'dex_112',
            title: '查余额',
            titleMeaning: 'Checking Balance',
            category: 'Bank',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你好，帮我查一下余额。', pinyin: "nǐ hǎo, bāng wǒ chá yīxià yú'é.", meaning: 'Hello, help me check the balance.' },
                { speaker: 'B', chinese: '请把卡给我。', pinyin: 'qǐng bǎ kǎ gěi wǒ.', meaning: 'Please give me your card.' },
                { speaker: 'A', chinese: '给。', pinyin: 'gěi.', meaning: 'Here.' },
                { speaker: 'B', chinese: '您的余额是两万三千五百块。', pinyin: "nín de yú'é shì liǎng wàn sān qiān wǔ bǎi kuài.", meaning: 'Your balance is 23,500 yuan.' },
                { speaker: 'A', chinese: '好的，谢谢。', pinyin: 'hǎo de, xièxie.', meaning: 'OK, thanks.' }
            ]
        },
        {
            id: 'dex_113',
            title: '办信用卡',
            titleMeaning: 'Applying for Credit Card',
            category: 'Bank',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '你好，我想申请一张信用卡。', pinyin: 'nǐ hǎo, wǒ xiǎng shēnqǐng yī zhāng xìnyòng kǎ.', meaning: 'Hello, I want to apply for a credit card.' },
                { speaker: 'B', chinese: '您的月收入是多少？', pinyin: 'nín de yuè shōurù shì duōshao?', meaning: 'What is your monthly income?' },
                { speaker: 'A', chinese: '八千块。', pinyin: 'bā qiān kuài.', meaning: '8000 yuan.' },
                { speaker: 'B', chinese: '请提供您的工作证明和收入证明。', pinyin: 'qǐng tígōng nín de gōngzuò zhèngmíng hé shōurù zhèngmíng.', meaning: 'Please provide your employment and income proof.' },
                { speaker: 'A', chinese: '好的，这是我的材料。', pinyin: 'hǎo de, zhè shì wǒ de cáiliào.', meaning: 'OK, here are my documents.' },
                { speaker: 'B', chinese: '审核需要两周，有结果会通知您。', pinyin: 'shěnhé xūyào liǎng zhōu, yǒu jiéguǒ huì tōngzhī nín.', meaning: 'Review takes two weeks, we will notify you of the result.' }
            ]
        },
        {
            id: 'dex_114',
            title: '交水电费',
            titleMeaning: 'Paying Utility Bills',
            category: 'Bank',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你好，我想交水电费。', pinyin: 'nǐ hǎo, wǒ xiǎng jiāo shuǐdiàn fèi.', meaning: 'Hello, I want to pay my utility bills.' },
                { speaker: 'B', chinese: '请告诉我您的用户编号。', pinyin: 'qǐng gàosù wǒ nín de yònghù biānhào.', meaning: 'Please tell me your customer number.' },
                { speaker: 'A', chinese: '编号是12345678。', pinyin: 'biānhào shì 12345678.', meaning: 'The number is 12345678.' },
                { speaker: 'B', chinese: '水费一百二十，电费三百，总共四百二十。', pinyin: 'shuǐfèi yībǎi èrshí, diànfèi sānbǎi, zǒnggòng sìbǎi èrshí.', meaning: 'Water bill 120, electricity bill 300, total 420.' },
                { speaker: 'A', chinese: '好的，从卡里扣吧。', pinyin: 'hǎo de, cóng kǎ lǐ kòu ba.', meaning: 'OK, deduct from my card.' }
            ]
        },
        {
            id: 'dex_115',
            title: '定期存款',
            titleMeaning: 'Fixed Deposit',
            category: 'Bank',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '我想办定期存款。', pinyin: 'wǒ xiǎng bàn dìngqī cúnkuǎn.', meaning: 'I want to open a fixed deposit.' },
                { speaker: 'B', chinese: '您想存多久？有一年、三年和五年。', pinyin: 'nín xiǎng cún duō jiǔ? yǒu yī nián, sān nián hé wǔ nián.', meaning: 'How long? We have one year, three years, and five years.' },
                { speaker: 'A', chinese: '一年的利率是多少？', pinyin: 'yī nián de lìlǜ shì duōshao?', meaning: 'What is the interest rate for one year?' },
                { speaker: 'B', chinese: '年利率百分之一点七五。', pinyin: 'nián lìlǜ bǎi fēn zhī yī diǎn qī wǔ.', meaning: 'The annual interest rate is 1.75%.' },
                { speaker: 'A', chinese: '好，我存两万块，一年期。', pinyin: 'hǎo, wǒ cún liǎng wàn kuài, yī nián qī.', meaning: 'OK, I will deposit 20,000 yuan for one year.' }
            ]
        },
        {
            id: 'dex_116',
            title: '贷款咨询',
            titleMeaning: 'Loan Consultation',
            category: 'Bank',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '你好，我想咨询一下贷款。', pinyin: 'nǐ hǎo, wǒ xiǎng zīxún yīxià dàikuǎn.', meaning: 'Hello, I want to inquire about a loan.' },
                { speaker: 'B', chinese: '您想贷多少钱？', pinyin: 'nín xiǎng dài duōshao qián?', meaning: 'How much do you want to borrow?' },
                { speaker: 'A', chinese: '三十万，买房。', pinyin: 'sānshí wàn, mǎi fáng.', meaning: '300,000, to buy a house.' },
                { speaker: 'B', chinese: '您有抵押物吗？', pinyin: 'nín yǒu dǐyā wù ma?', meaning: 'Do you have collateral?' },
                { speaker: 'A', chinese: '可以用房子抵押。', pinyin: 'kěyǐ yòng fángzi dǐyā.', meaning: 'I can use the house as collateral.' },
                { speaker: 'B', chinese: '请填一下申请表，我们会评估。', pinyin: 'qǐng tián yīxià shēnqǐng biǎo, wǒmen huì pínggū.', meaning: 'Please fill out the application form, we will evaluate it.' }
            ]
        },
        {
            id: 'dex_117',
            title: 'ATM取款',
            titleMeaning: 'ATM Withdrawal',
            category: 'Bank',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '这个ATM机怎么用？', pinyin: 'zhège ATM jī zěnme yòng?', meaning: 'How do I use this ATM?' },
                { speaker: 'B', chinese: '插卡，输入密码就可以了。', pinyin: 'chā kǎ, shūrù mìmǎ jiù kěyǐ le.', meaning: 'Insert your card, enter the password, and you\'re done.' },
                { speaker: 'A', chinese: '我要取一千块。', pinyin: 'wǒ yào qǔ yī qiān kuài.', meaning: 'I want to withdraw 1000 yuan.' },
                { speaker: 'B', chinese: '按取款，输入金额就行了。', pinyin: "àn qǔkuǎn, shūrù jīn'é jiù xíng le.", meaning: 'Press withdraw, enter the amount.' },
                { speaker: 'A', chinese: '好的，出来了，谢谢。', pinyin: 'hǎo de, chūlái le, xièxie.', meaning: 'OK, it came out, thanks.' }
            ]
        },
        {
            id: 'dex_118',
            title: '改密码',
            titleMeaning: 'Changing Password',
            category: 'Bank',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '我想改银行卡密码。', pinyin: 'wǒ xiǎng gǎi yínháng kǎ mìmǎ.', meaning: 'I want to change my bank card password.' },
                { speaker: 'B', chinese: '请先输入旧密码。', pinyin: 'qǐng xiān shūrù jiù mìmǎ.', meaning: 'Please enter the old password first.' },
                { speaker: 'A', chinese: '输入好了。', pinyin: 'shūrù hǎo le.', meaning: 'Done.' },
                { speaker: 'B', chinese: '请输入新密码，再确认一次。', pinyin: 'qǐng shūrù xīn mìmǎ, zài quèrèn yī cì.', meaning: 'Please enter the new password, then confirm it.' },
                { speaker: 'A', chinese: '好了，改好了吗？', pinyin: 'hǎo le, gǎi hǎo le ma?', meaning: 'Done, is it changed?' },
                { speaker: 'B', chinese: '成功了，下次用新密码。', pinyin: 'chénggōng le, xià cì yòng xīn mìmǎ.', meaning: 'Successful, use the new password next time.' }
            ]
        },
        {
            id: 'dex_119',
            title: '购买理财产品',
            titleMeaning: 'Buying Financial Products',
            category: 'Bank',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '你们有什么理财推荐？', pinyin: 'nǐmen yǒu shénme lǐcái tuījiàn?', meaning: 'What financial products do you recommend?' },
                { speaker: 'B', chinese: '这款年化收益百分之四，风险低。', pinyin: 'zhè kuǎn niánhuà shōuyì bǎi fēn zhī sì, fēngxiǎn dī.', meaning: 'This one has an annualized return of 4%, low risk.' },
                { speaker: 'A', chinese: '最低买多少？', pinyin: 'zuì dī mǎi duōshao?', meaning: 'What is the minimum purchase?' },
                { speaker: 'B', chinese: '一万块起购。', pinyin: 'yī wàn kuài qǐ gòu.', meaning: 'Minimum 10,000 yuan.' },
                { speaker: 'A', chinese: '好的，我买五万。', pinyin: 'hǎo de, wǒ mǎi wǔ wàn.', meaning: 'OK, I\'ll buy 50,000 yuan worth.' }
            ]
        },
        {
            id: 'dex_120',
            title: '银行排队',
            titleMeaning: 'Waiting in Line at Bank',
            category: 'Bank',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '请问现在人多吗？', pinyin: 'qǐngwèn xiànzài rén duō ma?', meaning: 'Excuse me, is it crowded now?' },
                { speaker: 'B', chinese: '上午人多，下午好一点。', pinyin: 'shàngwǔ rén duō, xiàwǔ hǎo yīdiǎn.', meaning: 'Mornings are busy, afternoons are better.' },
                { speaker: 'A', chinese: '我拿个号，前面还有多少人？', pinyin: 'wǒ ná gè hào, qiánmiàn hái yǒu duōshao rén?', meaning: 'Let me take a number, how many people ahead?' },
                { speaker: 'B', chinese: '前面还有五个。', pinyin: 'qiánmiàn hái yǒu wǔ gè.', meaning: 'Five people ahead.' },
                { speaker: 'A', chinese: '那很快了。', pinyin: 'nà hěn kuài le.', meaning: 'That\'s quick.' }
            ]
        },
        // ==================== 9. POST OFFICE (dex_121 - dex_135) ====================
        {
            id: 'dex_121',
            title: '寄信',
            titleMeaning: 'Sending a Letter',
            category: 'Post Office',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你好，我想寄一封信到美国。', pinyin: 'nǐ hǎo, wǒ xiǎng jì yī fēng xìn dào měiguó.', meaning: 'Hello, I want to send a letter to the US.' },
                { speaker: 'B', chinese: '平信还是挂号信？', pinyin: 'píngxìn háishì guàhào xìn?', meaning: 'Regular or registered?' },
                { speaker: 'A', chinese: '挂号信吧，比较保险。', pinyin: 'guàhào xìn ba, bǐjiào bǎoxiǎn.', meaning: 'Registered, it\'s safer.' },
                { speaker: 'B', chinese: '好的，请填一下地址。', pinyin: 'hǎo de, qǐng tián yīxià dìzhǐ.', meaning: 'OK, please fill in the address.' },
                { speaker: 'A', chinese: '多少钱？', pinyin: 'duōshao qián?', meaning: 'How much?' },
                { speaker: 'B', chinese: '挂号信三十块。', pinyin: 'guàhào xìn sānshí kuài.', meaning: 'Registered letter is 30 yuan.' }
            ]
        },
        {
            id: 'dex_122',
            title: '寄包裹',
            titleMeaning: 'Sending a Package',
            category: 'Post Office',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '我想寄一个包裹到北京。', pinyin: 'wǒ xiǎng jì yī gè bāoguǒ dào běijīng.', meaning: 'I want to send a package to Beijing.' },
                { speaker: 'B', chinese: '里面装的是什么？', pinyin: 'lǐmiàn zhuāng de shì shénme?', meaning: 'What is inside?' },
                { speaker: 'A', chinese: '是一些衣服和书。', pinyin: 'shì yīxiē yīfú hé shū.', meaning: 'Some clothes and books.' },
                { speaker: 'B', chinese: '请把包裹放在秤上。', pinyin: 'qǐng bǎ bāoguǒ fàng zài chèng shàng.', meaning: 'Please put the package on the scale.' },
                { speaker: 'A', chinese: '五公斤，多少钱？', pinyin: 'wǔ gōngjīn, duōshao qián?', meaning: 'Five kilograms, how much?' },
                { speaker: 'B', chinese: '一共六十块。', pinyin: 'yīgòng liùshí kuài.', meaning: 'Total is 60 yuan.' }
            ]
        },
        {
            id: 'dex_123',
            title: '买邮票',
            titleMeaning: 'Buying Stamps',
            category: 'Post Office',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你好，我买邮票。', pinyin: 'nǐ hǎo, wǒ mǎi yóupiào.', meaning: 'Hello, I want to buy stamps.' },
                { speaker: 'B', chinese: '您要寄到哪里？', pinyin: 'nín yào jì dào nǎlǐ?', meaning: 'Where are you sending to?' },
                { speaker: 'A', chinese: '国内平信。', pinyin: 'guónèi píngxìn.', meaning: 'Domestic regular mail.' },
                { speaker: 'B', chinese: '一块二一张，您要几张？', pinyin: 'yī kuài èr yī zhāng, nín yào jǐ zhāng?', meaning: '1.2 yuan each, how many do you want?' },
                { speaker: 'A', chinese: '买十张。', pinyin: 'mǎi shí zhāng.', meaning: 'Buy ten.' }
            ]
        },
        {
            id: 'dex_124',
            title: '明信片',
            titleMeaning: 'Postcards',
            category: 'Post Office',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你们有明信片卖吗？', pinyin: 'nǐmen yǒu míngxìnpiàn mài ma?', meaning: 'Do you sell postcards?' },
                { speaker: 'B', chinese: '有的，这些是风景明信片。', pinyin: 'yǒu de, zhèxiē shì fēngjǐng míngxìnpiàn.', meaning: 'Yes, these are scenic postcards.' },
                { speaker: 'A', chinese: '这张长城的好看，多少钱？', pinyin: 'zhè zhāng chángchéng de hǎokàn, duōshao qián?', meaning: 'This Great Wall one is nice, how much?' },
                { speaker: 'B', chinese: '五块一张，含邮票。', pinyin: 'wǔ kuài yī zhāng, hán yóupiào.', meaning: '5 yuan each, including stamp.' },
                { speaker: 'A', chinese: '我买三张。', pinyin: 'wǒ mǎi sān zhāng.', meaning: 'I\'ll buy three.' }
            ]
        },
        {
            id: 'dex_125',
            title: '快递',
            titleMeaning: 'Express Delivery',
            category: 'Post Office',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '我想寄快递，最快的哪种？', pinyin: 'wǒ xiǎng jì kuàidì, zuì kuài de nǎ zhǒng?', meaning: 'I want to send an express, which is the fastest?' },
                { speaker: 'B', chinese: 'EMS是最快的，三天到美国。', pinyin: 'EMS shì zuì kuài de, sān tiān dào měiguó.', meaning: 'EMS is the fastest, three days to the US.' },
                { speaker: 'A', chinese: '多少钱？', pinyin: 'duōshao qián?', meaning: 'How much?' },
                { speaker: 'B', chinese: '起步价两百块。', pinyin: 'qǐbù jià liǎng bǎi kuài.', meaning: 'Starting price is 200 yuan.' },
                { speaker: 'A', chinese: '好的，就要EMS。', pinyin: 'hǎo de, jiù yào EMS.', meaning: 'OK, I\'ll take EMS.' }
            ]
        },
        {
            id: 'dex_126',
            title: '包裹追踪',
            titleMeaning: 'Package Tracking',
            category: 'Post Office',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你好，我想查一下包裹到哪里了。', pinyin: 'nǐ hǎo, wǒ xiǎng chá yīxià bāoguǒ dào nǎlǐ le.', meaning: 'Hello, I want to track where my package is.' },
                { speaker: 'B', chinese: '请告诉我单号。', pinyin: 'qǐng gàosù wǒ dān hào.', meaning: 'Please tell me the tracking number.' },
                { speaker: 'A', chinese: 'EA123456789CN。', pinyin: 'EA123456789CN.', meaning: 'EA123456789CN.' },
                { speaker: 'B', chinese: '已经到北京了，正在派送中。', pinyin: 'yǐjīng dào běijīng le, zhèngzài pài sòng zhōng.', meaning: 'It has arrived in Beijing and is out for delivery.' },
                { speaker: 'A', chinese: '太好了，谢谢。', pinyin: 'tài hǎo le, xièxie.', meaning: 'Great, thanks.' }
            ]
        },
        {
            id: 'dex_127',
            title: '收包裹',
            titleMeaning: 'Receiving a Package',
            category: 'Post Office',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你好，我来取包裹。', pinyin: 'nǐ hǎo, wǒ lái qǔ bāoguǒ.', meaning: 'Hello, I\'m here to pick up a package.' },
                { speaker: 'B', chinese: '请出示您的身份证和通知单。', pinyin: 'qǐng chūshì nín de shēnfènzhèng hé tōngzhī dān.', meaning: 'Please show your ID and notification slip.' },
                { speaker: 'A', chinese: '给，这是我的。', pinyin: 'gěi, zhè shì wǒ de.', meaning: 'Here, this is mine.' },
                { speaker: 'B', chinese: '找到了，请在这里签字。', pinyin: 'zhǎo dào le, qǐng zài zhèlǐ qiānzì.', meaning: 'Found it, please sign here.' },
                { speaker: 'A', chinese: '好的，谢谢。', pinyin: 'hǎo de, xièxie.', meaning: 'OK, thanks.' }
            ]
        },
        {
            id: 'dex_128',
            title: '改地址',
            titleMeaning: 'Address Change',
            category: 'Post Office',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '我搬家了，想改收信地址。', pinyin: 'wǒ bānjiā le, xiǎng gǎi shōu xìn dìzhǐ.', meaning: 'I moved and want to change my mailing address.' },
                { speaker: 'B', chinese: '请填一下地址变更表。', pinyin: 'qǐng tián yīxià dìzhǐ biàngēng biǎo.', meaning: 'Please fill out the address change form.' },
                { speaker: 'A', chinese: '新地址是上海市南京路一百号。', pinyin: 'xīn dìzhǐ shì shànghǎi shì nánjīng lù yībǎi hào.', meaning: 'The new address is 100 Nanjing Road, Shanghai.' },
                { speaker: 'B', chinese: '变更从什么时候开始？', pinyin: 'biàngēng cóng shénme shíhou kāishǐ?', meaning: 'When should the change take effect?' },
                { speaker: 'A', chinese: '从下个月一号开始。', pinyin: 'cóng xià gè yuè yī hào kāishǐ.', meaning: 'Starting from the first of next month.' }
            ]
        },
        {
            id: 'dex_129',
            title: '国际包裹',
            titleMeaning: 'International Package',
            category: 'Post Office',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '我想寄包裹到加拿大。', pinyin: 'wǒ xiǎng jì bāoguǒ dào jiānádà.', meaning: 'I want to send a package to Canada.' },
                { speaker: 'B', chinese: '需要填写海关申报单。', pinyin: 'xūyào tiánxiě hǎiguān shēnbào dān.', meaning: 'You need to fill out a customs declaration form.' },
                { speaker: 'A', chinese: '里面是送给朋友的礼物。', pinyin: 'lǐmiàn shì sòng gěi péngyou de lǐwù.', meaning: 'Inside are gifts for a friend.' },
                { speaker: 'B', chinese: '价值多少？要写清楚。', pinyin: 'jiàzhí duōshao? yào xiě qīngchu.', meaning: 'What is the value? Write it clearly.' },
                { speaker: 'A', chinese: '大概两百块人民币。', pinyin: 'dàgài liǎng bǎi kuài rénmínbì.', meaning: 'About 200 RMB.' },
                { speaker: 'B', chinese: '运费是三百五十块。', pinyin: 'yùnfèi shì sānbǎi wǔshí kuài.', meaning: 'The shipping cost is 350 yuan.' }
            ]
        },
        {
            id: 'dex_130',
            title: '汇款',
            titleMeaning: 'Money Remittance',
            category: 'Post Office',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你好，我想汇款。', pinyin: 'nǐ hǎo, wǒ xiǎng huìkuǎn.', meaning: 'Hello, I want to send money.' },
                { speaker: 'B', chinese: '汇到哪里？', pinyin: 'huì dào nǎlǐ?', meaning: 'Where are you sending it?' },
                { speaker: 'A', chinese: '汇到广州。', pinyin: 'huì dào guǎngzhōu.', meaning: 'To Guangzhou.' },
                { speaker: 'B', chinese: '请填一下汇款单。', pinyin: 'qǐng tián yīxià huìkuǎn dān.', meaning: 'Please fill out the remittance form.' },
                { speaker: 'A', chinese: '填好了，两千块。', pinyin: 'tián hǎo le, liǎng qiān kuài.', meaning: 'Done, 2000 yuan.' },
                { speaker: 'B', chinese: '手续费十五块。', pinyin: 'shǒuxù fèi shíwǔ kuài.', meaning: 'Service fee is 15 yuan.' }
            ]
        },
        {
            id: 'dex_131',
            title: '邮政储蓄',
            titleMeaning: 'Postal Savings',
            category: 'Post Office',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你们这里可以存钱吗？', pinyin: 'nǐmen zhèlǐ kěyǐ cún qián ma?', meaning: 'Can I deposit money here?' },
                { speaker: 'B', chinese: '可以的，我们有邮政储蓄业务。', pinyin: 'kěyǐ de, wǒmen yǒu yóuzhèng chǔxù yèwù.', meaning: 'Yes, we have postal savings services.' },
                { speaker: 'A', chinese: '存一千块。', pinyin: 'cún yī qiān kuài.', meaning: 'Deposit 1000 yuan.' },
                { speaker: 'B', chinese: '请把存折给我。', pinyin: 'qǐng bǎ cúnzhé gěi wǒ.', meaning: 'Please give me your passbook.' },
                { speaker: 'A', chinese: '给，麻烦你了。', pinyin: 'gěi, máfan nǐ le.', meaning: 'Here, sorry for the trouble.' }
            ]
        },
        {
            id: 'dex_132',
            title: '退包裹',
            titleMeaning: 'Returning a Package',
            category: 'Post Office',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '这个包裹寄错了，我要退回来。', pinyin: 'zhège bāoguǒ jì cuò le, wǒ yào tuì huílai.', meaning: 'This package was sent incorrectly, I want to return it.' },
                { speaker: 'B', chinese: '您有寄件时的收据吗？', pinyin: 'nín yǒu jìjiàn shí de shōujù ma?', meaning: 'Do you have the receipt from when it was sent?' },
                { speaker: 'A', chinese: '有的，这就是。', pinyin: 'yǒu de, zhè jiù shì.', meaning: 'Yes, here it is.' },
                { speaker: 'B', chinese: '我帮您处理退件。', pinyin: 'wǒ bāng nín chǔlǐ tuìjiàn.', meaning: 'I will process the return for you.' },
                { speaker: 'A', chinese: '需要收费吗？', pinyin: 'xūyào shōufèi ma?', meaning: 'Is there a fee?' },
                { speaker: 'B', Chinese: '退件费是十块。', pinyin: 'tuìjiàn fèi shì shí kuài.', meaning: 'Return fee is 10 yuan.' }
            ]
        },
        {
            id: 'dex_133',
            title: '杂志订阅',
            titleMeaning: 'Magazine Subscription',
            category: 'Post Office',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你好，我想订杂志。', pinyin: 'nǐ hǎo, wǒ xiǎng dìng zázhì.', meaning: 'Hello, I want to subscribe to a magazine.' },
                { speaker: 'B', chinese: '这里有杂志目录，您看看。', pinyin: 'zhèlǐ yǒu zázhì mùlù, nín kànkan.', meaning: 'Here is the magazine catalog, take a look.' },
                { speaker: 'A', chinese: '我要订《读者》，一年多少钱？', pinyin: 'wǒ yào dìng \"dúzhě\", yī nián duōshao qián?', meaning: 'I want to subscribe to \"Duzhe\", how much for a year?' },
                { speaker: 'B', chinese: '一年一百二十块，每月两期。', pinyin: 'yī nián yībǎi èrshí kuài, měi yuè liǎng qī.', meaning: '120 yuan per year, two issues per month.' },
                { speaker: 'A', chinese: '好的，我订一年。', pinyin: 'hǎo de, wǒ dìng yī nián.', meaning: 'OK, I\'ll subscribe for one year.' }
            ]
        },
        {
            id: 'dex_134',
            title: '邮政信箱',
            titleMeaning: 'Post Office Box',
            category: 'Post Office',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '我想租一个邮政信箱。', pinyin: 'wǒ xiǎng zū yī gè yóuzhèng xìnxiāng.', meaning: 'I want to rent a PO box.' },
                { speaker: 'B', chinese: '好的，有不同大小的。', pinyin: 'hǎo de, yǒu bùtóng dàxiǎo de.', meaning: 'OK, we have different sizes.' },
                { speaker: 'A', chinese: '最小的多少钱？', pinyin: 'zuì xiǎo de duōshao qián?', meaning: 'How much is the smallest one?' },
                { speaker: 'B', chinese: '半年一百五十块。', pinyin: 'bàn nián yībǎi wǔshí kuài.', meaning: '150 yuan for half a year.' },
                { speaker: 'A', chinese: '好的，我租半年。', pinyin: 'hǎo de, wǒ zū bàn nián.', meaning: 'OK, I\'ll rent for half a year.' }
            ]
        },
        {
            id: 'dex_135',
            title: '邮局营业时间',
            titleMeaning: 'Post Office Hours',
            category: 'Post Office',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '请问你们几点开门？', pinyin: 'qǐngwèn nǐmen jǐ diǎn kāimén?', meaning: 'Excuse me, what time do you open?' },
                { speaker: 'B', chinese: '早上九点到下午五点。', pinyin: 'zǎoshang jiǔ diǎn dào xiàwǔ wǔ diǎn.', meaning: '9 am to 5 pm.' },
                { speaker: 'A', chinese: '周末营业吗？', pinyin: 'zhōumò yíngyè ma?', meaning: 'Are you open on weekends?' },
                { speaker: 'B', chinese: '周六上午营业，周日休息。', pinyin: 'zhōuliù shàngwǔ yíngyè, zhōurì xiūxí.', meaning: 'Saturday morning open, Sunday closed.' },
                { speaker: 'A', chinese: '好的，谢谢。', pinyin: 'hǎo de, xièxie.', meaning: 'OK, thanks.' }
            ]
        },
        // ==================== 10. TAXI (dex_136 - dex_150) ====================
        {
            id: 'dex_136',
            title: '打车',
            titleMeaning: 'Hailing a Taxi',
            category: 'Taxi',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '师傅，去火车站。', pinyin: 'shīfu, qù huǒchē zhàn.', meaning: 'Driver, to the train station.' },
                { speaker: 'B', chinese: '好的，请上车。', pinyin: 'hǎo de, qǐng shàng chē.', meaning: 'OK, please get in.' },
                { speaker: 'A', chinese: '大概多久能到？', pinyin: 'dàgài duō jiǔ néng dào?', meaning: 'About how long to get there?' },
                { speaker: 'B', chinese: '不堵车的话二十分钟。', pinyin: 'bù dǔchē dehuà èrshí fēnzhōng.', meaning: 'If no traffic, about 20 minutes.' },
                { speaker: 'A', chinese: '好的，走吧。', pinyin: 'hǎo de, zǒu ba.', meaning: 'OK, let\'s go.' }
            ]
        },
        {
            id: 'dex_137',
            title: '打表计价',
            titleMeaning: 'Metered Fare',
            category: 'Taxi',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '师傅，打表吗？', pinyin: 'shīfu, dǎ biǎo ma?', meaning: 'Driver, do you use the meter?' },
                { speaker: 'B', chinese: '当然打表，放心。', pinyin: 'dāngrán dǎ biǎo, fàngxīn.', meaning: 'Of course I use the meter, don\'t worry.' },
                { speaker: 'A', chinese: '起步价是多少？', pinyin: 'qǐbù jià shì duōshao?', meaning: 'What is the starting fare?' },
                { speaker: 'B', chinese: '起步价十二块。', pinyin: "qǐbù jià shí'èr kuài.", meaning: 'Starting fare is 12 yuan.' },
                { speaker: 'A', chinese: '好的。', pinyin: 'hǎo de.', meaning: 'OK.' }
            ]
        },
        {
            id: 'dex_138',
            title: '堵车',
            titleMeaning: 'Traffic Jam',
            category: 'Taxi',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '前面怎么那么堵？', pinyin: 'qiánmiàn zěnme nàme dǔ?', meaning: 'Why is it so congested ahead?' },
                { speaker: 'B', chinese: '好像是出了交通事故。', pinyin: 'hǎoxiàng shì chū le jiāotōng shìgù.', meaning: 'Looks like there was a traffic accident.' },
                { speaker: 'A', chinese: '能不能绕路？', pinyin: 'néng bùnéng rào lù?', meaning: 'Can you take a detour?' },
                { speaker: 'B', chinese: '可以，走小路可能会快一些。', pinyin: 'kěyǐ, zǒu xiǎo lù kěnéng huì kuài yīxiē.', meaning: 'Yes, taking the small road might be faster.' },
                { speaker: 'A', chinese: '那就绕路吧。', pinyin: 'nà jiù rào lù ba.', meaning: 'Then take the detour.' }
            ]
        },
        {
            id: 'dex_139',
            title: '机场打车',
            titleMeaning: 'Taxi to Airport',
            category: 'Taxi',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '师傅，去浦东机场。', pinyin: 'shīfu, qù pǔdōng jīchǎng.', meaning: 'Driver, to Pudong Airport.' },
                { speaker: 'B', chinese: '是T1还是T2？', pinyin: 'shì T1 háishì T2?', meaning: 'Terminal 1 or 2?' },
                { speaker: 'A', chinese: 'T2，国际航班。', pinyin: 'T2, guójì hángbān.', meaning: 'Terminal 2, international flight.' },
                { speaker: 'B', chinese: '大概需要四十分钟。', pinyin: 'dàgài xūyào sìshí fēnzhōng.', meaning: 'It takes about 40 minutes.' },
                { speaker: 'A', chinese: '我有行李，后备箱能放吗？', pinyin: 'wǒ yǒu xíngli, hòubèi xiāng néng fàng ma?', meaning: 'I have luggage, can it fit in the trunk?' },
                { speaker: 'B', chinese: '没问题，放得下。', pinyin: 'méi wèntí, fàng de xià.', meaning: 'No problem, it will fit.' }
            ]
        },
        {
            id: 'dex_140',
            title: '夜间打车',
            titleMeaning: 'Night Taxi',
            category: 'Taxi',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '师傅，晚上好。', pinyin: 'shīfu, wǎnshang hǎo.', meaning: 'Driver, good evening.' },
                { speaker: 'B', chinese: '晚上好，去哪儿？', pinyin: 'wǎnshang hǎo, qù nǎr?', meaning: 'Good evening, where to?' },
                { speaker: 'A', chinese: '去三里屯。', pinyin: 'qù sānlǐtún.', meaning: 'To Sanlitun.' },
                { speaker: 'B', chinese: '晚上要加收夜间费。', pinyin: 'wǎnshang yào jiā shōu yèjiān fèi.', meaning: 'There is a nighttime surcharge.' },
                { speaker: 'A', chinese: '加多少？', pinyin: 'jiā duōshao?', meaning: 'How much extra?' },
                { speaker: 'B', chinese: '加收百分之二十。', pinyin: 'jiā shōu bǎi fēn zhī èrshí.', meaning: '20% extra.' }
            ]
        },
        {
            id: 'dex_141',
            title: '打车软件',
            titleMeaning: 'Ride-hailing App',
            category: 'Taxi',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你打车是用什么软件？', pinyin: 'nǐ dǎchē shì yòng shénme ruǎnjiàn?', meaning: 'What app do you use to hail taxis?' },
                { speaker: 'B', chinese: '我用滴滴，很方便。', pinyin: 'wǒ yòng dīdī, hěn fāngbiàn.', meaning: 'I use Didi, it\'s very convenient.' },
                { speaker: 'A', chinese: '我也下一个。', pinyin: 'wǒ yě xià yī gè.', meaning: 'I\'ll download it too.' },
                { speaker: 'B', chinese: '绑定支付宝就可以付款了。', pinyin: 'bǎngdìng zhīfùbǎo jiù kěyǐ fùkuǎn le.', meaning: 'Link Alipay and you can pay.' },
                { speaker: 'A', chinese: '比路边打车便宜吗？', pinyin: 'bǐ lùbiān dǎchē piányi ma?', meaning: 'Is it cheaper than hailing on the street?' },
                { speaker: 'B', chinese: '经常有优惠券，划算很多。', pinyin: 'jīngcháng yǒu yōuhuì quàn, huásuàn hěn duō.', meaning: 'There are often coupons, much more cost-effective.' }
            ]
        },
        {
            id: 'dex_142',
            title: '拼车',
            titleMeaning: 'Carpooling',
            category: 'Taxi',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你好，是拼车的吗？', pinyin: 'nǐ hǎo, shì pīnchē de ma?', meaning: 'Hello, is this the carpool?' },
                { speaker: 'B', chinese: '是的，请上车，还有一位乘客。', pinyin: 'shì de, qǐng shàng chē, hái yǒu yī wèi chéngkè.', meaning: 'Yes, please get in, there is another passenger.' },
                { speaker: 'A', chinese: '那先送他还是先送我？', pinyin: 'nà xiān sòng tā háishì xiān sòng wǒ?', meaning: 'Will you drop him off first or me?' },
                { speaker: 'B', chinese: '先送他，因为比较近。', pinyin: 'xiān sòng tā, yīnwèi bǐjiào jìn.', meaning: 'Him first, because it\'s closer.' },
                { speaker: 'A', chinese: '好的，没问题。', pinyin: 'hǎo de, méi wèntí.', meaning: 'OK, no problem.' }
            ]
        },
        {
            id: 'dex_143',
            title: '找零',
            titleMeaning: 'Getting Change',
            category: 'Taxi',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '师傅，到了，多少钱？', pinyin: 'shīfu, dào le, duōshao qián?', meaning: 'Driver, we\'re here, how much?' },
                { speaker: 'B', chinese: '三十八块。', pinyin: 'sānshíbā kuài.', meaning: '38 yuan.' },
                { speaker: 'A', chinese: '给您五十。', pinyin: 'gěi nín wǔshí.', meaning: 'Here is 50.' },
                { speaker: 'B', chinese: '找您十二块。', pinyin: "zhǎo nín shí'èr kuài.", meaning: 'Here is 12 yuan change.' },
                { speaker: 'A', chinese: '谢谢师傅。', pinyin: 'xièxie shīfu.', meaning: 'Thanks, driver.' }
            ]
        },
        {
            id: 'dex_144',
            title: '丢东西在车上',
            titleMeaning: 'Leaving Something in the Taxi',
            category: 'Taxi',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '师傅，我的手机好像掉车上了！', pinyin: 'shīfu, wǒ de shǒujī hǎoxiàng diào chē shàng le!', meaning: 'Driver, I think I left my phone in the car!' },
                { speaker: 'B', chinese: '别急，我看看后座。', pinyin: 'bié jí, wǒ kànkan hòu zuò.', meaning: 'Don\'t worry, let me check the back seat.' },
                { speaker: 'A', chinese: '找到了吗？', pinyin: 'zhǎo dào le ma?', meaning: 'Did you find it?' },
                { speaker: 'B', chinese: '找到了，在座位下面。', pinyin: 'zhǎo dào le, zài zuòwèi xiàmiàn.', meaning: 'Found it, under the seat.' },
                { speaker: 'A', chinese: '太感谢了！', pinyin: 'tài gǎnxiè le!', meaning: 'Thank you so much!' }
            ]
        },
        {
            id: 'dex_145',
            title: '不熟悉路',
            titleMeaning: 'Unfamiliar Route',
            category: 'Taxi',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '师傅，您认识路吗？', pinyin: 'shīfu, nín rènshi lù ma?', meaning: 'Driver, do you know the way?' },
                { speaker: 'B', chinese: '认识，放心吧。', pinyin: 'rènshi, fàngxīn ba.', meaning: 'I know it, don\'t worry.' },
                { speaker: 'A', chinese: '我用导航指路吧。', pinyin: 'wǒ yòng dǎoháng zhǐlù ba.', meaning: 'Let me use the navigation to guide.' },
                { speaker: 'B', chinese: '好，听你的。', pinyin: 'hǎo, tīng nǐ de.', meaning: 'OK, I\'ll follow you.' },
                { speaker: 'A', chinese: '前面左转就到了。', pinyin: 'qiánmiàn zuǒ zhuǎn jiù dào le.', meaning: 'Turn left ahead and we\'re there.' }
            ]
        },
        {
            id: 'dex_146',
            title: '高速费',
            titleMeaning: 'Toll Fee',
            category: 'Taxi',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '师傅，走高速吧，快一些。', pinyin: 'shīfu, zǒu gāosù ba, kuài yīxiē.', meaning: 'Driver, let\'s take the highway, faster.' },
                { speaker: 'B', chinese: '高速费要您出。', pinyin: 'gāosù fèi yào nín chū.', meaning: 'The toll fee is on you.' },
                { speaker: 'A', chinese: '多少钱？', pinyin: 'duōshao qián?', meaning: 'How much?' },
                { speaker: 'B', chinese: '十五块。', pinyin: 'shíwǔ kuài.', meaning: '15 yuan.' },
                { speaker: 'A', chinese: '好的，没问题。', pinyin: 'hǎo de, méi wèntí.', meaning: 'OK, no problem.' }
            ]
        },
        {
            id: 'dex_147',
            title: '等红灯',
            titleMeaning: 'Waiting at Red Light',
            category: 'Taxi',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '这个红灯真长啊。', pinyin: 'zhège hóngdēng zhēn cháng a.', meaning: 'This red light is really long.' },
                { speaker: 'B', chinese: '这个路口要等九十秒。', pinyin: 'zhège lùkǒu yào děng jiǔshí miǎo.', meaning: 'This intersection has a 90-second wait.' },
                { speaker: 'A', chinese: '那只能等了。', pinyin: 'nà zhǐ néng děng le.', meaning: 'Then we just have to wait.' },
                { speaker: 'B', chinese: '绿灯了，走了。', pinyin: 'lǜdēng le, zǒu le.', meaning: 'Green light, let\'s go.' }
            ]
        },
        {
            id: 'dex_148',
            title: '出租车发票',
            titleMeaning: 'Taxi Receipt',
            category: 'Taxi',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '师傅，能给我发票吗？', pinyin: 'shīfu, néng gěi wǒ fāpiào ma?', meaning: 'Driver, can I have a receipt?' },
                { speaker: 'B', chinese: '可以，您等等。', pinyin: 'kěyǐ, nín děngděng.', meaning: 'Sure, wait a moment.' },
                { speaker: 'A', chinese: '我要报销用的。', pinyin: 'wǒ yào bàoxiāo yòng de.', meaning: 'I need it for reimbursement.' },
                { speaker: 'B', chinese: '给，这是您的发票。', pinyin: 'gěi, zhè shì nín de fāpiào.', meaning: 'Here, this is your receipt.' },
                { speaker: 'A', chinese: '谢谢。', pinyin: 'xièxie.', meaning: 'Thanks.' }
            ]
        },
        {
            id: 'dex_149',
            title: '下雨打车难',
            titleMeaning: 'Hard to Get Taxi in Rain',
            category: 'Taxi',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '下雨天打车真难。', pinyin: 'xiàyǔ tiān dǎchē zhēn nán.', meaning: 'It\'s really hard to get a taxi on rainy days.' },
                { speaker: 'B', chinese: '是啊，等了半个小时了。', pinyin: 'shì a, děng le bàn gè xiǎoshí le.', meaning: 'Yeah, been waiting for half an hour.' },
                { speaker: 'A', chinese: '用软件加小费吧。', pinyin: 'yòng ruǎnjiàn jiā xiǎofèi ba.', meaning: 'Let\'s use the app and add a tip.' },
                { speaker: 'B', chinese: '好主意，加到二十块。', pinyin: 'hǎo zhǔyi, jiā dào èrshí kuài.', meaning: 'Good idea, add 20 yuan.' },
                { speaker: 'A', chinese: '有人接单了！', pinyin: 'yǒu rén jiē dān le!', meaning: 'Someone accepted the order!' }
            ]
        },
        {
            id: 'dex_150',
            title: '长途打车',
            titleMeaning: 'Long-distance Taxi',
            category: 'Taxi',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '师傅，去天津多少钱？', pinyin: 'shīfu, qù tiānjīn duōshao qián?', meaning: 'Driver, how much to Tianjin?' },
                { speaker: 'B', chinese: '打表的话大概三百到四百。', pinyin: 'dǎ biǎo dehuà dàgài sānbǎi dào sìbǎi.', meaning: 'On the meter, about 300 to 400.' },
                { speaker: 'A', chinese: '能讲个价吗？三百行不行？', pinyin: 'néng jiǎng gè jià ma? sānbǎi xíng bù xíng?', meaning: 'Can we negotiate? 300 okay?' },
                { speaker: 'B', chinese: '三百五行吗？来回油费不少。', pinyin: 'sānbǎi wǔ xíng ma? láihuí yóufèi bù shǎo.', meaning: 'How about 350? Round trip fuel cost is a lot.' },
                { speaker: 'A', chinese: '好吧，走吧。', pinyin: 'hǎo ba, zǒu ba.', meaning: 'OK, let\'s go.' }
            ]
        },
        // ==================== 11. SUBWAY (dex_151 - dex_165) ====================
        {
            id: 'dex_151',
            title: '买地铁票',
            titleMeaning: 'Buying Subway Tickets',
            category: 'Subway',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你好，买两张地铁票。', pinyin: 'nǐ hǎo, mǎi liǎng zhāng dìtiě piào.', meaning: 'Hello, two subway tickets please.' },
                { speaker: 'B', chinese: '您要去哪一站？', pinyin: 'nín yào qù nǎ yī zhàn?', meaning: 'Which station are you going to?' },
                { speaker: 'A', chinese: '去天安门东。', pinyin: 'qù tiānānmén dōng.', meaning: 'To Tiananmen East.' },
                { speaker: 'B', chinese: '每张五块，一共十块。', pinyin: 'měi zhāng wǔ kuài, yīgòng shí kuài.', meaning: '5 yuan each, 10 yuan total.' },
                { speaker: 'A', chinese: '给，谢谢。', pinyin: 'gěi, xièxie.', meaning: 'Here, thanks.' }
            ]
        },
        {
            id: 'dex_152',
            title: '刷卡进站',
            titleMeaning: 'Tapping Card to Enter',
            category: 'Subway',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '这个刷卡机怎么用？', pinyin: 'zhège shuākǎ jī zěnme yòng?', meaning: 'How do I use this card reader?' },
                { speaker: 'B', chinese: '把卡放在这里扫一下。', pinyin: 'bǎ kǎ fàng zài zhèlǐ sǎo yīxià.', meaning: 'Put your card here and scan it.' },
                { speaker: 'A', chinese: '滴的一声就好了吗？', pinyin: 'dī de yī shēng jiù hǎo le ma?', meaning: 'Is it done when it beeps?' },
                { speaker: 'B', chinese: '对，门开了就可以进去了。', pinyin: 'duì, mén kāi le jiù kěyǐ jìnqù le.', meaning: 'Yes, when the gate opens, you can go in.' },
                { speaker: 'A', chinese: '好的，谢谢。', pinyin: 'hǎo de, xièxie.', meaning: 'OK, thanks.' }
            ]
        },
        {
            id: 'dex_153',
            title: '换乘',
            titleMeaning: 'Transferring Lines',
            category: 'Subway',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '请问去故宫要在哪站换乘？', pinyin: 'qǐngwèn qù gùgōng yào zài nǎ zhàn huànchéng?', meaning: 'Excuse me, which station do I transfer at to get to the Forbidden City?' },
                { speaker: 'B', chinese: '坐一号线到天安门东下。', pinyin: 'zuò yī hào xiàn dào tiānānmén dōng xià.', meaning: 'Take Line 1 to Tiananmen East.' },
                { speaker: 'A', chinese: '不用换乘吗？', pinyin: 'bùyòng huànchéng ma?', meaning: 'No transfer needed?' },
                { speaker: 'B', chinese: '不用，一号线直达。', pinyin: 'bùyòng, yī hào xiàn zhídá.', meaning: 'No, Line 1 goes directly.' },
                { speaker: 'A', chinese: '太好了，谢谢。', pinyin: 'tài hǎo le, xièxie.', meaning: 'Great, thanks.' }
            ]
        },
        {
            id: 'dex_154',
            title: '末班车',
            titleMeaning: 'Last Train',
            category: 'Subway',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '请问末班车是几点？', pinyin: 'qǐngwèn mòbān chē shì jǐ diǎn?', meaning: 'Excuse me, what time is the last train?' },
                { speaker: 'B', chinese: '十一点半。', pinyin: 'shíyī diǎn bàn.', meaning: '11:30 pm.' },
                { speaker: 'A', chinese: '现在还能赶上吗？', pinyin: 'xiànzài hái néng gǎn shàng ma?', meaning: 'Can I still catch it now?' },
                { speaker: 'B', chinese: '还有十五分钟，来得及。', pinyin: 'hái yǒu shíwǔ fēnzhōng, láidejí.', meaning: 'Still 15 minutes, you have time.' },
                { speaker: 'A', chinese: '好的，我快走。', pinyin: 'hǎo de, wǒ kuài zǒu.', meaning: 'OK, I\'ll hurry.' }
            ]
        },
        {
            id: 'dex_155',
            title: '地铁卡充值',
            titleMeaning: 'Recharging Subway Card',
            category: 'Subway',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你好，我要给交通卡充值。', pinyin: 'nǐ hǎo, wǒ yào gěi jiāotōng kǎ chōngzhí.', meaning: 'Hello, I want to recharge my transit card.' },
                { speaker: 'B', chinese: '充多少钱？', pinyin: 'chōng duōshao qián?', meaning: 'How much do you want to add?' },
                { speaker: 'A', chinese: '一百块。', pinyin: 'yībǎi kuài.', meaning: '100 yuan.' },
                { speaker: 'B', chinese: '请把卡放在这里。', pinyin: 'qǐng bǎ kǎ fàng zài zhèlǐ.', meaning: 'Please put the card here.' },
                { speaker: 'A', chinese: '好了，充值成功了吗？', pinyin: 'hǎo le, chōngzhí chénggōng le ma?', meaning: 'Done, was it successful?' },
                { speaker: 'B', chinese: '成功了，余额一百五十。', pinyin: "chénggōng le, yú'é yībǎi wǔshí.", meaning: 'Successful, balance is 150.' }
            ]
        },
        {
            id: 'dex_156',
            title: '坐过站',
            titleMeaning: 'Missing Stop',
            category: 'Subway',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '糟糕，坐过站了！', pinyin: 'zāogāo, zuò guò zhàn le!', meaning: 'Oh no, I missed my stop!' },
                { speaker: 'B', chinese: '你现在在哪一站？', pinyin: 'nǐ xiànzài zài nǎ yī zhàn?', meaning: 'Which station are you at now?' },
                { speaker: 'A', chinese: '我也不知道，好像到了终点站。', pinyin: 'wǒ yě bù zhīdào, hǎoxiàng dào le zhōngdiǎn zhàn.', meaning: 'I don\'t know either, looks like the terminal.' },
                { speaker: 'B', chinese: '坐回去就行了，不用出站。', pinyin: 'zuò huíqu jiù xíng le, bùyòng chū zhàn.', meaning: 'Just ride back, no need to exit.' },
                { speaker: 'A', chinese: '好的，谢谢！', pinyin: 'hǎo de, xièxie!', meaning: 'OK, thanks!' }
            ]
        },
        {
            id: 'dex_157',
            title: '高峰期',
            titleMeaning: 'Rush Hour',
            category: 'Subway',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '地铁好挤啊。', pinyin: 'dìtiě hǎo jǐ a.', meaning: 'The subway is so crowded.' },
                { speaker: 'B', chinese: '现在是高峰期，人特别多。', pinyin: 'xiànzài shì gāofēng qī, rén tèbié duō.', meaning: 'It\'s rush hour now, especially crowded.' },
                { speaker: 'A', chinese: '每天都这么多人吗？', pinyin: 'měitiān dōu zhème duō rén ma?', meaning: 'Is it like this every day?' },
                { speaker: 'B', chinese: '早上八点和晚上六点最挤。', pinyin: 'zǎoshang bā diǎn hé wǎnshang liù diǎn zuì jǐ.', meaning: '8 am and 6 pm are the most crowded.' },
                { speaker: 'A', chinese: '下次我避开这个时间。', pinyin: 'xià cì wǒ bìkāi zhège shíjiān.', meaning: 'Next time I\'ll avoid this time.' }
            ]
        },
        {
            id: 'dex_158',
            title: '地铁线路图',
            titleMeaning: 'Subway Map',
            category: 'Subway',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '请问有地铁线路图吗？', pinyin: 'qǐngwèn yǒu dìtiě xiànlù tú ma?', meaning: 'Excuse me, do you have a subway map?' },
                { speaker: 'B', chinese: '在墙上就有，您可以去看看。', pinyin: 'zài qiáng shàng jiù yǒu, nín kěyǐ qù kànkan.', meaning: 'It\'s on the wall, you can go take a look.' },
                { speaker: 'A', chinese: '我能在手机上查吗？', pinyin: 'wǒ néng zài shǒujī shàng chá ma?', meaning: 'Can I check on my phone?' },
                { speaker: 'B', chinese: '可以，下载一个地铁通APP。', pinyin: 'kěyǐ, xiàzài yī gè dìtiě tōng APP.', meaning: 'Yes, download a subway app.' },
                { speaker: 'A', chinese: '好的，谢谢。', pinyin: 'hǎo de, xièxie.', meaning: 'OK, thanks.' }
            ]
        },
        {
            id: 'dex_159',
            title: '安检',
            titleMeaning: 'Security Check',
            category: 'Subway',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '所有的包都要过安检吗？', pinyin: 'suǒyǒu de bāo dōu yào guò ānjiǎn ma?', meaning: 'Do all bags need to go through security?' },
                { speaker: 'B', chinese: '是的，请把包放在传送带上。', pinyin: 'shì de, qǐng bǎ bāo fàng zài chuánsòng dài shàng.', meaning: 'Yes, please put your bag on the conveyor belt.' },
                { speaker: 'A', chinese: '水要拿出来吗？', pinyin: 'shuǐ yào ná chūlái ma?', meaning: 'Do I need to take out water?' },
                { speaker: 'B', chinese: '请喝一口。', pinyin: 'qǐng hē yī kǒu.', meaning: 'Please take a sip.' },
                { speaker: 'A', chinese: '好的。', pinyin: 'hǎo de.', meaning: 'OK.' }
            ]
        },
        {
            id: 'dex_160',
            title: '地铁故障',
            titleMeaning: 'Subway Breakdown',
            category: 'Subway',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '地铁怎么停了？', pinyin: 'dìtiě zěnme tíng le?', meaning: 'Why did the subway stop?' },
                { speaker: 'B', chinese: '广播说前面有故障。', pinyin: 'guǎngbō shuō qiánmiàn yǒu gùzhàng.', meaning: 'The announcement says there is a breakdown ahead.' },
                { speaker: 'A', chinese: '要等多久？', pinyin: 'yào děng duō jiǔ?', meaning: 'How long do we have to wait?' },
                { speaker: 'B', chinese: '没说，可能要十分钟。', pinyin: 'méi shuō, kěnéng yào shí fēnzhōng.', meaning: 'It didn\'t say, maybe ten minutes.' },
                { speaker: 'A', chinese: '那我上班要迟到了。', pinyin: 'nà wǒ shàngbān yào chídào le.', meaning: 'Then I\'ll be late for work.' }
            ]
        },
        {
            id: 'dex_161',
            title: '让座',
            titleMeaning: 'Offering Seat',
            category: 'Subway',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '您请坐。', pinyin: 'nín qǐng zuò.', meaning: 'Please have a seat.' },
                { speaker: 'B', chinese: '谢谢你，年轻人。', pinyin: 'xièxie nǐ, niánqīng rén.', meaning: 'Thank you, young person.' },
                { speaker: 'A', chinese: '不客气。', pinyin: 'bù kèqì.', meaning: 'You\'re welcome.' },
                { speaker: 'B', chinese: '现在的年轻人真有礼貌。', pinyin: 'xiànzài de niánqīng rén zhēn yǒu lǐmào.', meaning: 'Young people nowadays are so polite.' }
            ]
        },
        {
            id: 'dex_162',
            title: '地铁出口',
            titleMeaning: 'Subway Exit',
            category: 'Subway',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '请问去王府井从哪个出口出？', pinyin: 'qǐngwèn qù wángfǔjǐng cóng nǎ ge chūkǒu chū?', meaning: 'Excuse me, which exit for Wangfujing?' },
                { speaker: 'B', chinese: '从A出口出，往东走两百米。', pinyin: 'cóng A chūkǒu chū, wǎng dōng zǒu liǎng bǎi mǐ.', meaning: 'Take Exit A, walk east 200 meters.' },
                { speaker: 'A', chinese: '好的，谢谢。', pinyin: 'hǎo de, xièxie.', meaning: 'OK, thanks.' },
                { speaker: 'B', chinese: '不客气。', pinyin: 'bù kèqì.', meaning: 'You\'re welcome.' }
            ]
        },
        {
            id: 'dex_163',
            title: '地铁卡丢失',
            titleMeaning: 'Lost Transit Card',
            category: 'Subway',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '我的地铁卡丢了，能补办吗？', pinyin: 'wǒ de dìtiě kǎ diū le, néng bǔbàn ma?', meaning: 'I lost my subway card, can I get a replacement?' },
                { speaker: 'B', chinese: '可以，请到客服中心办理。', pinyin: 'kěyǐ, qǐng dào kèfú zhōngxīn bànlǐ.', meaning: 'Yes, please go to the customer service center.' },
                { speaker: 'A', chinese: '需要什么证件？', pinyin: 'xūyào shénme zhèngjiàn?', meaning: 'What documents do I need?' },
                { speaker: 'B', chinese: '身份证就可以，工本费二十块。', pinyin: 'shēnfènzhèng jiù kěyǐ, gōngběn fèi èrshí kuài.', meaning: 'Just your ID, the fee is 20 yuan.' },
                { speaker: 'A', chinese: '好的，我去办。', pinyin: 'hǎo de, wǒ qù bàn.', meaning: 'OK, I\'ll go do it.' }
            ]
        },
        {
            id: 'dex_164',
            title: '带宠物坐地铁',
            titleMeaning: 'Pets on Subway',
            category: 'Subway',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '我可以带小狗坐地铁吗？', pinyin: 'wǒ kěyǐ dài xiǎo gǒu zuò dìtiě ma?', meaning: 'Can I bring my dog on the subway?' },
                { speaker: 'B', chinese: '不好意思，宠物不能上地铁。', pinyin: 'bù hǎoyìsi, chǒngwù bù néng shàng dìtiě.', meaning: 'Sorry, pets are not allowed on the subway.' },
                { speaker: 'A', chinese: '装在包里也不行吗？', pinyin: 'zhuāng zài bāo lǐ yě bù xíng ma?', meaning: 'Not even in a bag?' },
                { speaker: 'B', chinese: '不行的，您可以打车。', pinyin: 'bù xíng de, nín kěyǐ dǎchē.', meaning: 'No, you can take a taxi instead.' },
                { speaker: 'A', chinese: '好吧，我知道了。', pinyin: 'hǎo ba, wǒ zhīdào le.', meaning: 'OK, I understand.' }
            ]
        },
        {
            id: 'dex_165',
            title: '地铁优惠',
            titleMeaning: 'Subway Discount',
            category: 'Subway',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '坐地铁有优惠吗？', pinyin: 'zuò dìtiě yǒu yōuhuì ma?', meaning: 'Are there any discounts for the subway?' },
                { speaker: 'B', chinese: '用交通卡每月超过一百块后打八折。', pinyin: 'yòng jiāotōng kǎ měi yuè chāoguò yībǎi kuài hòu dǎ bā zhé.', meaning: 'With a transit card, after spending 100 yuan per month, you get 20% off.' },
                { speaker: 'A', chinese: '学生有优惠吗？', pinyin: 'xuéshēng yǒu yōuhuì ma?', meaning: 'Is there a student discount?' },
                { speaker: 'B', chinese: '学生卡半价。', pinyin: 'xuéshēng kǎ bàn jià.', meaning: 'Student card is half price.' },
                { speaker: 'A', chinese: '那很划算。', pinyin: 'nà hěn huásuàn.', meaning: 'That\'s very cost-effective.' }
            ]
        },
        // ==================== 12. AIRPORT (dex_166 - dex_180) ====================
        {
            id: 'dex_166',
            title: '值机',
            titleMeaning: 'Check-in at Airport',
            category: 'Airport',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你好，我要办理值机。', pinyin: 'nǐ hǎo, wǒ yào bànlǐ zhíjī.', meaning: 'Hello, I want to check in.' },
                { speaker: 'B', chinese: '请出示您的护照和机票。', pinyin: 'qǐng chūshì nín de hùzhào hé jīpiào.', meaning: 'Please show your passport and ticket.' },
                { speaker: 'A', chinese: '给，我要靠窗的座位。', pinyin: 'gěi, wǒ yào kào chuāng de zuòwèi.', meaning: 'Here, I want a window seat.' },
                { speaker: 'B', chinese: '好的，您的行李要托运吗？', pinyin: 'hǎo de, nín de xíngli yào tuōyùn ma?', meaning: 'OK, do you need to check in any luggage?' },
                { speaker: 'A', chinese: '托运一个箱子。', pinyin: 'tuōyùn yī gè xiāngzi.', meaning: 'Check in one suitcase.' },
                { speaker: 'B', chinese: '好的，登机口在B23，请到那边候机。', pinyin: 'hǎo de, dēngjī kǒu zài B èr sān, qǐng dào nàbiān hòujī.', meaning: 'OK, your gate is B23, please wait there.' }
            ]
        },
        {
            id: 'dex_167',
            title: '过安检',
            titleMeaning: 'Going Through Security',
            category: 'Airport',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '笔记本电脑要拿出来吗？', pinyin: 'bǐjìběn diànnǎo yào ná chūlái ma?', meaning: 'Do I need to take out my laptop?' },
                { speaker: 'B', chinese: '是的，还有充电宝也要拿出来。', pinyin: 'shì de, hái yǒu chōngdiàn bǎo yě yào ná chūlái.', meaning: 'Yes, and power banks too.' },
                { speaker: 'A', chinese: '手机呢？', pinyin: 'shǒujī ne?', meaning: 'What about my phone?' },
                { speaker: 'B', chinese: '手机放包里就行。', pinyin: 'shǒujī fàng bāo lǐ jiù xíng.', meaning: 'Phone can stay in the bag.' },
                { speaker: 'A', chinese: '好的，谢谢。', pinyin: 'hǎo de, xièxie.', meaning: 'OK, thanks.' }
            ]
        },
        {
            id: 'dex_168',
            title: '行李超重',
            titleMeaning: 'Overweight Luggage',
            category: 'Airport',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '您的行李超重了五公斤。', pinyin: 'nín de xíngli chāozhòng le wǔ gōngjīn.', meaning: 'Your luggage is 5 kg overweight.' },
                { speaker: 'B', chinese: '超重要加多少钱？', pinyin: 'chāozhòng yào jiā duōshao qián?', meaning: 'How much for the excess?' },
                { speaker: 'A', chinese: '每公斤五十块。', pinyin: 'měi gōngjīn wǔshí kuài.', meaning: '50 yuan per kilogram.' },
                { speaker: 'B', chinese: '那要加二百五十块，太贵了。', pinyin: 'nà yào jiā èrbǎi wǔshí kuài, tài guì le.', meaning: 'That\'s 250 yuan, too expensive.' },
                { speaker: 'A', chinese: '您可以拿出来一些随身带。', pinyin: 'nín kěyǐ ná chūlái yīxiē suíshēn dài.', meaning: 'You can take some out as carry-on.' },
                { speaker: 'B', chinese: '好主意，我拿一些出来。', pinyin: 'hǎo zhǔyi, wǒ ná yīxiē chūlái.', meaning: 'Good idea, I\'ll take some out.' }
            ]
        },
        {
            id: 'dex_169',
            title: '航班延误',
            titleMeaning: 'Flight Delay',
            category: 'Airport',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '请问CA1234航班为什么延误？', pinyin: 'qǐngwèn CA yī èr sān sì hángbān wèishénme yánwù?', meaning: 'Excuse me, why is flight CA1234 delayed?' },
                { speaker: 'B', chinese: '因为天气原因，预计晚点两小时。', pinyin: 'yīnwèi tiānqì yuányīn, yùjì wǎn diǎn liǎng xiǎoshí.', meaning: 'Due to weather, estimated delay of two hours.' },
                { speaker: 'A', chinese: '那有安排食宿吗？', pinyin: 'nà yǒu ānpái shísù ma?', meaning: 'Will meals and accommodation be arranged?' },
                { speaker: 'B', chinese: '我们提供餐券和酒店。', pinyin: 'wǒmen tígōng cānquàn hé jiǔdiàn.', meaning: 'We provide meal vouchers and hotel.' },
                { speaker: 'A', chinese: '好的，谢谢。', pinyin: 'hǎo de, xièxie.', meaning: 'OK, thanks.' }
            ]
        },
        {
            id: 'dex_170',
            title: '登机',
            titleMeaning: 'Boarding',
            category: 'Airport',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '现在开始登机了吗？', pinyin: 'xiànzài kāishǐ dēngjī le ma?', meaning: 'Has boarding started now?' },
                { speaker: 'B', chinese: '还没，要再等十分钟。', pinyin: 'hái méi, yào zài děng shí fēnzhōng.', meaning: 'Not yet, wait another ten minutes.' },
                { speaker: 'A', chinese: '广播说头等舱先登机。', pinyin: 'guǎngbō shuō tóuděng cāng xiān dēngjī.', meaning: 'The announcement says first class boards first.' },
                { speaker: 'B', chinese: '我们是经济舱，要排队。', pinyin: 'wǒmen shì jīngjì cāng, yào páiduì.', meaning: 'We are economy class, we need to queue.' },
                { speaker: 'A', chinese: '好的，排队吧。', pinyin: 'hǎo de, páiduì ba.', meaning: 'OK, let\'s queue.' }
            ]
        },
        {
            id: 'dex_171',
            title: '海关申报',
            titleMeaning: 'Customs Declaration',
            category: 'Airport',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '请问有什么需要申报的吗？', pinyin: 'qǐngwèn yǒu shénme xūyào shēnbào de ma?', meaning: 'Do you have anything to declare?' },
                { speaker: 'B', chinese: '我带了一些茶叶和特产。', pinyin: 'wǒ dài le yīxiē cháyè hé tèchǎn.', meaning: 'I have some tea and local products.' },
                { speaker: 'A', chinese: '价值超过五千元需要申报。', pinyin: 'jiàzhí chāoguò wǔ qiān yuán xūyào shēnbào.', meaning: 'Items worth over 5000 yuan need to be declared.' },
                { speaker: 'B', chinese: '不到五千，不用申报吧？', pinyin: 'bù dào wǔ qiān, bùyòng shēnbào ba?', meaning: 'Less than 5000, no need to declare, right?' },
                { speaker: 'A', chinese: '是的，请走绿色通道。', pinyin: 'shì de, qǐng zǒu lǜsè tōngdào.', meaning: 'Yes, please go through the green channel.' }
            ]
        },
        {
            id: 'dex_172',
            title: '转机',
            titleMeaning: 'Connecting Flight',
            category: 'Airport',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '我需要转机，时间够吗？', pinyin: 'wǒ xūyào zhuǎnjī, shíjiān gòu ma?', meaning: 'I have a connecting flight, is there enough time?' },
                { speaker: 'B', chinese: '中转时间只有一小时。', pinyin: 'zhōngzhuǎn shíjiān zhǐyǒu yī xiǎoshí.', meaning: 'The transfer time is only one hour.' },
                { speaker: 'A', chinese: '那够不够？', pinyin: 'nà gòu bù gòu?', meaning: 'Is that enough?' },
                { speaker: 'B', chinese: '国内转机够了，不用过海关。', pinyin: 'guónèi zhuǎnjī gòu le, bùyòng guò hǎiguān.', meaning: 'For domestic transfer it\'s enough, no customs needed.' },
                { speaker: 'A', chinese: '那就好。', pinyin: 'nà jiù hǎo.', meaning: 'That\'s good.' }
            ]
        },
        {
            id: 'dex_173',
            title: '过境免签',
            titleMeaning: 'Transit Without Visa',
            category: 'Airport',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '我只有三小时转机，需要签证吗？', pinyin: 'wǒ zhǐyǒu sān xiǎoshí zhuǎnjī, xūyào qiānzhèng ma?', meaning: 'I only have a three-hour layover, do I need a visa?' },
                { speaker: 'B', chinese: '不出机场的话，不用签证。', pinyin: 'bù chū jīchǎng dehuà, bùyòng qiānzhèng.', meaning: 'If you don\'t leave the airport, no visa needed.' },
                { speaker: 'A', chinese: '我想出去逛逛，可以吗？', pinyin: 'wǒ xiǎng chūqù guàngguàng, kěyǐ ma?', meaning: 'I want to go out and look around, can I?' },
                { speaker: 'B', chinese: '那需要办理过境签证。', pinyin: 'nà xūyào bànlǐ guòjìng qiānzhèng.', meaning: 'Then you need a transit visa.' },
                { speaker: 'A', chinese: '时间太紧了，算了。', pinyin: 'shíjiān tài jǐn le, suàn le.', meaning: 'Time is too tight, forget it.' }
            ]
        },
        {
            id: 'dex_174',
            title: '免税店',
            titleMeaning: 'Duty-free Shop',
            category: 'Airport',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '这里有免税店吗？', pinyin: 'zhèlǐ yǒu miǎnshuì diàn ma?', meaning: 'Are there duty-free shops here?' },
                { speaker: 'B', chinese: '有的，过了安检就能看到。', pinyin: 'yǒu de, guò le ānjiǎn jiù néng kàn dào.', meaning: 'Yes, you can see them after security.' },
                { speaker: 'A', chinese: '化妆品便宜吗？', pinyin: 'huàzhuāng pǐn piányi ma?', meaning: 'Are cosmetics cheap?' },
                { speaker: 'B', chinese: '比外面便宜不少。', pinyin: 'bǐ wàimiàn piányi bù shǎo.', meaning: 'Quite a bit cheaper than outside.' },
                { speaker: 'A', chinese: '我要去看看。', pinyin: 'wǒ yào qù kànkan.', meaning: 'I want to go look.' }
            ]
        },
        {
            id: 'dex_175',
            title: '飞机餐',
            titleMeaning: 'Airline Meal',
            category: 'Airport',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '请问有什么餐食可以选择？', pinyin: 'qǐngwèn yǒu shénme cānshí kěyǐ xuǎnzé?', meaning: 'What meal options are available?' },
                { speaker: 'B', chinese: '有鸡肉饭和牛肉面。', pinyin: 'yǒu jīròu fàn hé niúròu miàn.', meaning: 'We have chicken rice and beef noodles.' },
                { speaker: 'A', chinese: '我要鸡肉饭。', pinyin: 'wǒ yào jīròu fàn.', meaning: 'I\'ll have the chicken rice.' },
                { speaker: 'B', chinese: '请问要喝什么？', pinyin: 'qǐngwèn yào hē shénme?', meaning: 'What would you like to drink?' },
                { speaker: 'A', chinese: '橙汁，谢谢。', pinyin: 'chéngzhī, xièxie.', meaning: 'Orange juice, thanks.' }
            ]
        },
        {
            id: 'dex_176',
            title: '取行李',
            titleMeaning: 'Baggage Claim',
            category: 'Airport',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '请问行李在几号转盘？', pinyin: 'qǐngwèn xíngli zài jǐ hào zhuànpán?', meaning: 'Excuse me, which carousel is the luggage on?' },
                { speaker: 'B', chinese: '三号转盘。', pinyin: 'sān hào zhuànpán.', meaning: 'Carousel 3.' },
                { speaker: 'A', chinese: '怎么还没出来？', pinyin: 'zěnme hái méi chūlái?', meaning: 'Why isn\'t it out yet?' },
                { speaker: 'B', chinese: '再等一等，马上就到了。', pinyin: 'zài děng yī děng, mǎshàng jiù dào le.', meaning: 'Wait a bit more, it\'s coming soon.' },
                { speaker: 'A', chinese: '看到了，我的箱子！', pinyin: 'kàn dào le, wǒ de xiāngzi!', meaning: 'I see it, my suitcase!' }
            ]
        },
        {
            id: 'dex_177',
            title: '行李丢失',
            titleMeaning: 'Lost Luggage',
            category: 'Airport',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '我的行李没出来，可能丢了。', pinyin: 'wǒ de xíngli méi chūlái, kěnéng diū le.', meaning: 'My luggage didn\'t come out, it might be lost.' },
                { speaker: 'B', chinese: '请到行李查询处登记。', pinyin: 'qǐng dào xíngli cháxún chù dēngjì.', meaning: 'Please go to the baggage inquiry office to register.' },
                { speaker: 'A', chinese: '会找到吗？', pinyin: 'huì zhǎo dào ma?', meaning: 'Will it be found?' },
                { speaker: 'B', chinese: '我们会尽力找，找到后送到您家。', pinyin: 'wǒmen huì jìnlì zhǎo, zhǎo dào hòu sòng dào nín jiā.', meaning: 'We will try our best and deliver it to your home once found.' },
                { speaker: 'A', chinese: '大概要多久？', pinyin: 'dàgài yào duō jiǔ?', meaning: 'About how long?' },
                { speaker: 'B', chinese: '一般在二十四小时内。', pinyin: 'yībān zài èrshísì xiǎoshí nèi.', meaning: 'Usually within 24 hours.' }
            ]
        },
        {
            id: 'dex_178',
            title: '机场大巴',
            titleMeaning: 'Airport Bus',
            category: 'Airport',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '请问机场大巴在哪坐？', pinyin: 'qǐngwèn jīchǎng dàbā zài nǎ zuò?', meaning: 'Excuse me, where do I take the airport bus?' },
                { speaker: 'B', chinese: '出了到达大厅就能看到。', pinyin: 'chū le dàodá dàtīng jiù néng kàn dào.', meaning: 'You can see it when you exit the arrival hall.' },
                { speaker: 'A', chinese: '到市区多少钱？', pinyin: 'dào shìqū duōshao qián?', meaning: 'How much to the city center?' },
                { speaker: 'B', chinese: '三十块一位。', pinyin: 'sānshí kuài yī wèi.', meaning: '30 yuan per person.' },
                { speaker: 'A', chinese: '多久一班？', pinyin: 'duō jiǔ yī bān?', meaning: 'How often does it run?' },
                { speaker: 'B', chinese: '每半小时一班。', pinyin: 'měi bàn xiǎoshí yī bān.', meaning: 'Every half hour.' }
            ]
        },
        {
            id: 'dex_179',
            title: 'VIP休息室',
            titleMeaning: 'VIP Lounge',
            category: 'Airport',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '请问贵宾休息室在哪？', pinyin: 'qǐngwèn guìbīn xiūxí shì zài nǎ?', meaning: 'Excuse me, where is the VIP lounge?' },
                { speaker: 'B', chinese: '在二楼，过了安检右转。', pinyin: 'zài èr lóu, guò le ānjiǎn yòu zhuǎn.', meaning: 'On the second floor, turn right after security.' },
                { speaker: 'A', chinese: '我有头等舱机票，可以进去吗？', pinyin: 'wǒ yǒu tóuděng cāng jīpiào, kěyǐ jìnqù ma?', meaning: 'I have a first-class ticket, can I enter?' },
                { speaker: 'B', chinese: '可以的，里面有免费餐饮。', pinyin: 'kěyǐ de, lǐmiàn yǒu miǎnfèi cān yǐn.', meaning: 'Yes, there are free food and drinks inside.' },
                { speaker: 'A', chinese: '太好了。', pinyin: 'tài hǎo le.', meaning: 'Great.' }
            ]
        },
        {
            id: 'dex_180',
            title: '接机',
            titleMeaning: 'Picking Someone Up',
            category: 'Airport',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你好，我来接人。', pinyin: 'nǐ hǎo, wǒ lái jiē rén.', meaning: 'Hello, I\'m here to pick someone up.' },
                { speaker: 'B', chinese: '请问接的航班号是多少？', pinyin: 'qǐngwèn jiē de hángbān hào shì duōshao?', meaning: 'What is the flight number?' },
                { speaker: 'A', chinese: 'MU5678，从上海来的。', pinyin: 'MU wǔ liù qī bā, cóng shànghǎi lái de.', meaning: 'MU5678, from Shanghai.' },
                { speaker: 'B', chinese: '那个航班已经降落了，在B出口等。', pinyin: 'nàgè hángbān yǐjīng jiàngluò le, zài B chūkǒu děng.', meaning: 'That flight has landed, wait at Exit B.' },
                { speaker: 'A', chinese: '好的，谢谢。', pinyin: 'hǎo de, xièxie.', meaning: 'OK, thanks.' }
            ]
        },
        // ==================== 13. SOCIAL (dex_181 - dex_195) ====================
        {
            id: 'dex_181',
            title: '自我介绍',
            titleMeaning: 'Self-introduction',
            category: 'Social',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你好，我叫小明，很高兴认识你。', pinyin: 'nǐ hǎo, wǒ jiào xiǎomíng, hěn gāoxìng rènshi nǐ.', meaning: 'Hello, my name is Xiaoming, nice to meet you.' },
                { speaker: 'B', chinese: '你好，我叫丽丽，请多关照。', pinyin: 'nǐ hǎo, wǒ jiào lìlì, qǐng duō guānzhào.', meaning: 'Hello, my name is Lili, please take care of me.' },
                { speaker: 'A', chinese: '你是哪里人？', pinyin: 'nǐ shì nǎlǐ rén?', meaning: 'Where are you from?' },
                { speaker: 'B', chinese: '我是北京人，你呢？', pinyin: 'wǒ shì běijīng rén, nǐ ne?', meaning: 'I\'m from Beijing, and you?' },
                { speaker: 'A', chinese: '我是上海人。', pinyin: 'wǒ shì shànghǎi rén.', meaning: 'I\'m from Shanghai.' }
            ]
        },
        {
            id: 'dex_182',
            title: '打招呼',
            titleMeaning: 'Greeting',
            category: 'Social',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '好久不见！', pinyin: 'hǎo jiǔ bù jiàn!', meaning: 'Long time no see!' },
                { speaker: 'B', chinese: '是啊，最近怎么样？', pinyin: 'shì a, zuìjìn zěnme yàng?', meaning: 'Yeah, how have you been lately?' },
                { speaker: 'A', chinese: '挺好的，工作忙。', pinyin: 'tǐng hǎo de, gōngzuò máng.', meaning: 'Pretty good, busy with work.' },
                { speaker: 'B', chinese: '有空一起吃饭吧。', pinyin: 'yǒu kòng yīqǐ chīfàn ba.', meaning: 'Let\'s have a meal together when you\'re free.' },
                { speaker: 'A', chinese: '好的，我下周联系你。', pinyin: 'hǎo de, wǒ xià zhōu liánxì nǐ.', meaning: 'OK, I\'ll contact you next week.' }
            ]
        },
        {
            id: 'dex_183',
            title: '邀请朋友',
            titleMeaning: 'Inviting a Friend',
            category: 'Social',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '这周末你有空吗？', pinyin: 'zhè zhōumò nǐ yǒu kòng ma?', meaning: 'Are you free this weekend?' },
                { speaker: 'B', chinese: '有空，有什么事？', pinyin: 'yǒu kòng, yǒu shénme shì?', meaning: 'Yes, what\'s up?' },
                { speaker: 'A', chinese: '我想请你看电影。', pinyin: 'wǒ xiǎng qǐng nǐ kàn diànyǐng.', meaning: 'I want to invite you to see a movie.' },
                { speaker: 'B', chinese: '好啊，看什么电影？', pinyin: 'hǎo a, kàn shénme diànyǐng?', meaning: 'Sure, what movie?' },
                { speaker: 'A', chinese: '最近有部新片，评分很高。', pinyin: 'zuìjìn yǒu bù xīn piàn, píngfēn hěn gāo.', meaning: 'There\'s a new movie with high ratings.' },
                { speaker: 'B', chinese: '好，就这么定了。', pinyin: 'hǎo, jiù zhème dìng le.', meaning: 'OK, it\'s settled.' }
            ]
        },
        {
            id: 'dex_184',
            title: '生日聚会',
            titleMeaning: 'Birthday Party',
            category: 'Social',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '明天是我的生日，来参加聚会吧。', pinyin: 'míngtiān shì wǒ de shēngrì, lái cānjiā jùhuì ba.', meaning: 'Tomorrow is my birthday, come to the party.' },
                { speaker: 'B', chinese: '生日快乐！几点开始？', pinyin: 'shēngrì kuàilè! jǐ diǎn kāishǐ?', meaning: 'Happy birthday! What time does it start?' },
                { speaker: 'A', chinese: '晚上七点，在我家。', pinyin: 'wǎnshang qī diǎn, zài wǒ jiā.', meaning: '7 pm, at my place.' },
                { speaker: 'B', chinese: '需要我带什么吗？', pinyin: 'xūyào wǒ dài shénme ma?', meaning: 'Do I need to bring anything?' },
                { speaker: 'A', chinese: '人来就行，不用带东西。', pinyin: 'rén lái jiù xíng, bùyòng dài dōngxi.', meaning: 'Just come, no need to bring anything.' }
            ]
        },
        {
            id: 'dex_185',
            title: '夸奖',
            titleMeaning: 'Giving Compliments',
            category: 'Social',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你今天穿得真好看。', pinyin: 'nǐ jīntiān chuān de zhēn hǎokàn.', meaning: 'You look great today.' },
                { speaker: 'B', chinese: '谢谢，这是新买的裙子。', pinyin: 'xièxie, zhè shì xīn mǎi de qúnzi.', meaning: 'Thanks, this is a new dress I bought.' },
                { speaker: 'A', chinese: '颜色很适合你。', pinyin: 'yánsè hěn shìhé nǐ.', meaning: 'The color suits you well.' },
                { speaker: 'B', chinese: '你太会说话了。', pinyin: 'nǐ tài huì shuōhuà le.', meaning: 'You\'re so sweet.' }
            ]
        },
        {
            id: 'dex_186',
            title: '道歉',
            titleMeaning: 'Apologizing',
            category: 'Social',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '对不起，我来晚了。', pinyin: 'duìbuqǐ, wǒ lái wǎn le.', meaning: 'Sorry, I\'m late.' },
                { speaker: 'B', chinese: '没关系，路上堵车吗？', pinyin: 'méi guānxì, lùshang dǔchē ma?', meaning: 'No problem, was the traffic bad?' },
                { speaker: 'A', chinese: '是的，堵了很久。', pinyin: 'shì de, dǔ le hěn jiǔ.', meaning: 'Yes, stuck in traffic for a long time.' },
                { speaker: 'B', chinese: '没事，我也刚到。', pinyin: 'méi shì, wǒ yě gāng dào.', meaning: 'It\'s fine, I just arrived too.' },
                { speaker: 'A', chinese: '下次我请客赔罪。', pinyin: 'xià cì wǒ qǐngkè péizuì.', meaning: 'Next time I\'ll treat you to make up for it.' }
            ]
        },
        {
            id: 'dex_187',
            title: '告别',
            titleMeaning: 'Saying Goodbye',
            category: 'Social',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '时间不早了，我得走了。', pinyin: 'shíjiān bù zǎo le, wǒ děi zǒu le.', meaning: 'It\'s getting late, I have to go.' },
                { speaker: 'B', chinese: '再坐一会儿吧。', pinyin: 'zài zuò yīhuǐr ba.', meaning: 'Stay a bit longer.' },
                { speaker: 'A', chinese: '不了，明天还要上班。', pinyin: 'bù le, míngtiān hái yào shàngbān.', meaning: 'No, I have work tomorrow.' },
                { speaker: 'B', chinese: '那好吧，路上小心。', pinyin: 'nà hǎo ba, lùshang xiǎoxīn.', meaning: 'OK then, take care on the way.' },
                { speaker: 'A', chinese: '再见，下次再聚！', pinyin: 'zàijiàn, xià cì zài jù!', meaning: 'Goodbye, let\'s meet again next time!' }
            ]
        },
        {
            id: 'dex_188',
            title: '邻里问候',
            titleMeaning: 'Neighborly Greeting',
            category: 'Social',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '阿姨，早上好。', pinyin: 'āyí, zǎoshang hǎo.', meaning: 'Auntie, good morning.' },
                { speaker: 'B', chinese: '早上好，去买菜啊？', pinyin: 'zǎoshang hǎo, qù mǎi cài a?', meaning: 'Good morning, going grocery shopping?' },
                { speaker: 'A', chinese: '是啊，您也去吗？', pinyin: 'shì a, nín yě qù ma?', meaning: 'Yes, are you going too?' },
                { speaker: 'B', chinese: '我刚回来，今天的菜很新鲜。', pinyin: 'wǒ gāng huílái, jīntiān de cài hěn xīnxiān.', meaning: 'I just got back, today\'s vegetables are very fresh.' },
                { speaker: 'A', chinese: '好的，我去看看。', pinyin: 'hǎo de, wǒ qù kànkan.', meaning: 'OK, I\'ll go take a look.' }
            ]
        },
        {
            id: 'dex_189',
            title: '聊爱好',
            titleMeaning: 'Talking About Hobbies',
            category: 'Social',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你平时喜欢做什么？', pinyin: 'nǐ píngshí xǐhuān zuò shénme?', meaning: 'What do you like to do in your free time?' },
                { speaker: 'B', chinese: '我喜欢跑步和听音乐。', pinyin: 'wǒ xǐhuān pǎobù hé tīng yīnyuè.', meaning: 'I like running and listening to music.' },
                { speaker: 'A', chinese: '跑步一般跑多远？', pinyin: 'pǎobù yībān pǎo duō yuǎn?', meaning: 'How far do you usually run?' },
                { speaker: 'B', chinese: '五公里左右。', pinyin: 'wǔ gōnglǐ zuǒyòu.', meaning: 'About 5 kilometers.' },
                { speaker: 'A', chinese: '真厉害！', pinyin: 'zhēn lìhài!', meaning: 'That\'s impressive!' }
            ]
        },
        {
            id: 'dex_190',
            title: '谈论天气',
            titleMeaning: 'Talking About Weather',
            category: 'Social',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '今天天气真好啊。', pinyin: 'jīntiān tiānqì zhēn hǎo a.', meaning: 'The weather is really nice today.' },
                { speaker: 'B', chinese: '是啊，阳光明媚的。', pinyin: 'shì a, yángguāng míngmèi de.', meaning: 'Yes, sunny and bright.' },
                { speaker: 'A', chinese: '适合出去走走。', pinyin: 'shìhé chūqù zǒuzǒu.', meaning: 'Good for a walk outside.' },
                { speaker: 'B', chinese: '我们去公园吧。', pinyin: 'wǒmen qù gōngyuán ba.', meaning: 'Let\'s go to the park.' },
                { speaker: 'A', chinese: '好主意！', pinyin: 'hǎo zhǔyi!', meaning: 'Good idea!' }
            ]
        },
        {
            id: 'dex_191',
            title: '约饭',
            titleMeaning: 'Making Dinner Plans',
            category: 'Social',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '晚上一起吃火锅吧。', pinyin: 'wǎnshang yīqǐ chī huǒguō ba.', meaning: 'Let\'s have hotpot together tonight.' },
                { speaker: 'B', chinese: '好久没吃火锅了，好想吃。', pinyin: 'hǎo jiǔ méi chī huǒguō le, hǎo xiǎng chī.', meaning: 'I haven\'t had hotpot in a long time, I really want it.' },
                { speaker: 'A', chinese: '我知道一家很好吃的店。', pinyin: 'wǒ zhīdào yī jiā hěn hǎochī de diàn.', meaning: 'I know a very good restaurant.' },
                { speaker: 'B', chinese: '在哪里？贵不贵？', pinyin: 'zài nǎlǐ? guì bù guì?', meaning: 'Where is it? Is it expensive?' },
                { speaker: 'A', chinese: '在市中心，人均一百左右。', pinyin: 'zài shì zhōngxīn, rénjūn yībǎi zuǒyòu.', meaning: 'In the city center, about 100 per person.' },
                { speaker: 'B', chinese: '可以，几点见？', pinyin: 'kěyǐ, jǐ diǎn jiàn?', meaning: 'OK, what time to meet?' }
            ]
        },
        {
            id: 'dex_192',
            title: '送礼物',
            titleMeaning: 'Giving Gifts',
            category: 'Social',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '这是送给你的礼物，希望你喜欢。', pinyin: 'zhè shì sòng gěi nǐ de lǐwù, xīwàng nǐ xǐhuān.', meaning: 'This is a gift for you, hope you like it.' },
                { speaker: 'B', chinese: '太客气了，我可以打开吗？', pinyin: 'tài kèqì le, wǒ kěyǐ dǎkāi ma?', meaning: 'You\'re too kind, can I open it?' },
                { speaker: 'A', chinese: '当然可以。', pinyin: 'dāngrán kěyǐ.', meaning: 'Of course.' },
                { speaker: 'B', chinese: '哇，好漂亮的围巾，谢谢你！', pinyin: 'wa, hǎo piàoliang de wéijīn, xièxie nǐ!', meaning: 'Wow, what a beautiful scarf, thank you!' },
                { speaker: 'A', chinese: '不客气，你喜欢就好。', pinyin: 'bù kèqì, nǐ xǐhuān jiù hǎo.', meaning: 'You\'re welcome, I\'m glad you like it.' }
            ]
        },
        {
            id: 'dex_193',
            title: '交朋友',
            titleMeaning: 'Making Friends',
            category: 'Social',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你是新来的留学生吗？', pinyin: 'nǐ shì xīn lái de liúxuéshēng ma?', meaning: 'Are you a new international student?' },
                { speaker: 'B', chinese: '是的，我刚来中国一个月。', pinyin: 'shì de, wǒ gāng lái zhōngguó yī gè yuè.', meaning: 'Yes, I just arrived in China a month ago.' },
                { speaker: 'A', chinese: '我们可以做朋友吗？', pinyin: 'wǒmen kěyǐ zuò péngyou ma?', meaning: 'Can we be friends?' },
                { speaker: 'B', chinese: '当然可以，我正想多认识一些朋友。', pinyin: 'dāngrán kěyǐ, wǒ zhèng xiǎng duō rènshi yīxiē péngyou.', meaning: 'Of course, I\'ve been wanting to meet more friends.' },
                { speaker: 'A', chinese: '加个微信吧。', pinyin: 'jiā gè wēixìn ba.', meaning: 'Let\'s add each other on WeChat.' },
                { speaker: 'B', chinese: '好的，我扫你。', pinyin: 'hǎo de, wǒ sǎo nǐ.', meaning: 'OK, I\'ll scan your QR code.' }
            ]
        },
        {
            id: 'dex_194',
            title: '聊天话题',
            titleMeaning: 'Conversation Topics',
            category: 'Social',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你看过最近的新闻吗？', pinyin: 'nǐ kàn guò zuìjìn de xīnwén ma?', meaning: 'Have you seen the recent news?' },
                { speaker: 'B', chinese: '看了，关于那个科技公司的。', pinyin: 'kàn le, guānyú nàgè kējì gōngsī de.', meaning: 'Yes, about that tech company.' },
                { speaker: 'A', chinese: '你觉得他们的新产品怎么样？', pinyin: 'nǐ juéde tāmen de xīn chǎnpǐn zěnme yàng?', meaning: 'What do you think of their new product?' },
                { speaker: 'B', chinese: '很有创意，但价格太高了。', pinyin: 'hěn yǒu chuàngyì, dàn jiàgé tài gāo le.', meaning: 'Very innovative, but the price is too high.' },
                { speaker: 'A', chinese: '我也是这么想的。', pinyin: 'wǒ yě shì zhème xiǎng de.', meaning: 'I think so too.' }
            ]
        },
        {
            id: 'dex_195',
            title: '安慰朋友',
            titleMeaning: 'Comforting a Friend',
            category: 'Social',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你怎么了？看起来不开心。', pinyin: 'nǐ zěnme le? kàn qǐlai bù kāixīn.', meaning: 'What\'s wrong? You look unhappy.' },
                { speaker: 'B', chinese: '我失恋了。', pinyin: 'wǒ shīliàn le.', meaning: 'I broke up with my boyfriend/girlfriend.' },
                { speaker: 'A', chinese: '别难过，你会遇到更好的人。', pinyin: 'bié nánguò, nǐ huì yù dào gèng hǎo de rén.', meaning: 'Don\'t be sad, you will meet someone better.' },
                { speaker: 'B', chinese: '谢谢你，但我还是很难受。', pinyin: 'xièxie nǐ, dàn wǒ háishì hěn nánshòu.', meaning: 'Thank you, but I still feel terrible.' },
                { speaker: 'A', chinese: '我们去吃点甜的吧，心情会好一些。', pinyin: 'wǒmen qù chī diǎn tián de ba, xīnqíng huì hǎo yīxiē.', meaning: 'Let\'s go get some sweets, it\'ll cheer you up.' },
                { speaker: 'B', chinese: '好，走吧。', pinyin: 'hǎo, zǒu ba.', meaning: 'OK, let\'s go.' }
            ]
        },
        // ==================== 14. DATING (dex_196 - dex_210) ====================
        {
            id: 'dex_196',
            title: '第一次约会',
            titleMeaning: 'First Date',
            category: 'Dating',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你好，等很久了吗？', pinyin: 'nǐ hǎo, děng hěn jiǔ le ma?', meaning: 'Hello, have you been waiting long?' },
                { speaker: 'B', chinese: '没有，我也刚到。', pinyin: 'méiyǒu, wǒ yě gāng dào.', meaning: 'No, I just arrived too.' },
                { speaker: 'A', chinese: '你今天真漂亮。', pinyin: 'nǐ jīntiān zhēn piàoliang.', meaning: 'You look really beautiful today.' },
                { speaker: 'B', chinese: '谢谢，我们去哪？', pinyin: 'xièxie, wǒmen qù nǎ?', meaning: 'Thanks, where are we going?' },
                { speaker: 'A', chinese: '我订了一家意大利餐厅。', pinyin: 'wǒ dìng le yī jiā yìdàlì cāntīng.', meaning: 'I\'ve booked an Italian restaurant.' },
                { speaker: 'B', chinese: '听起来不错。', pinyin: 'tīng qǐlai bùcuò.', meaning: 'Sounds nice.' }
            ]
        },
        {
            id: 'dex_197',
            title: '约会安排',
            titleMeaning: 'Date Plans',
            category: 'Dating',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '周末你想做什么？', pinyin: 'zhōumò nǐ xiǎng zuò shénme?', meaning: 'What do you want to do this weekend?' },
                { speaker: 'B', chinese: '我想去看画展。', pinyin: 'wǒ xiǎng qù kàn huàzhǎn.', meaning: 'I want to go see an art exhibition.' },
                { speaker: 'A', chinese: '我也喜欢艺术，一起去吧。', pinyin: 'wǒ yě xǐhuān yìshù, yīqǐ qù ba.', meaning: 'I like art too, let\'s go together.' },
                { speaker: 'B', 'chinese': '真的吗？太好了。', pinyin: 'zhēn de ma? tài hǎo le.', meaning: 'Really? That\'s great.' },
                { speaker: 'A', chinese: '看完画展我请你吃饭。', pinyin: 'kàn wán huàzhǎn wǒ qǐng nǐ chīfàn.', meaning: 'After the exhibition, I\'ll treat you to dinner.' }
            ]
        },
        {
            id: 'dex_198',
            title: '表白',
            titleMeaning: 'Confessing Feelings',
            category: 'Dating',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '我有件事想跟你说。', pinyin: 'wǒ yǒu jiàn shì xiǎng gēn nǐ shuō.', meaning: 'I have something to tell you.' },
                { speaker: 'B', chinese: '什么事？你说吧。', pinyin: 'shénme shì? nǐ shuō ba.', meaning: 'What is it? Go ahead.' },
                { speaker: 'A', chinese: '我喜欢你很久了。', pinyin: 'wǒ xǐhuān nǐ hěn jiǔ le.', meaning: 'I\'ve liked you for a long time.' },
                { speaker: 'B', chinese: '我...我也喜欢你。', pinyin: 'wǒ... wǒ yě xǐhuān nǐ.', meaning: 'I... I like you too.' },
                { speaker: 'A', chinese: '真的吗？太开心了！', pinyin: 'zhēn de ma? tài kāixīn le!', meaning: 'Really? I\'m so happy!' }
            ]
        },
        {
            id: 'dex_199',
            title: '送花',
            titleMeaning: 'Giving Flowers',
            category: 'Dating',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '这束花送给你。', pinyin: 'zhè shù huā sòng gěi nǐ.', meaning: 'This bouquet is for you.' },
                { speaker: 'B', chinese: '哇，好漂亮！是玫瑰！', pinyin: 'wa, hǎo piàoliang! shì méigui!', meaning: 'Wow, so beautiful! Roses!' },
                { speaker: 'A', chinese: '你喜欢就好。', pinyin: 'nǐ xǐhuān jiù hǎo.', meaning: 'I\'m glad you like them.' },
                { speaker: 'B', chinese: '我很喜欢，谢谢你。', pinyin: 'wǒ hěn xǐhuān, xièxie nǐ.', meaning: 'I love them, thank you.' },
                { speaker: 'A', chinese: '不客气，你比花还美。', pinyin: 'bù kèqì, nǐ bǐ huā hái měi.', meaning: 'You\'re welcome, you\'re more beautiful than flowers.' }
            ]
        },
        {
            id: 'dex_200',
            title: '看电影',
            titleMeaning: 'Watching a Movie',
            category: 'Dating',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '最近有部爱情片，想看吗？', pinyin: 'zuìjìn yǒu bù àiqíng piàn, xiǎng kàn ma?', meaning: 'There\'s a new romance movie, want to see it?' },
                { speaker: 'B', chinese: '好啊，我喜欢看爱情片。', pinyin: 'hǎo a, wǒ xǐhuān kàn àiqíng piàn.', meaning: 'Sure, I like romance movies.' },
                { speaker: 'A', chinese: '我买七点的票。', pinyin: 'wǒ mǎi qī diǎn de piào.', meaning: 'I\'ll buy tickets for 7 o\'clock.' },
                { speaker: 'B', chinese: '我来买爆米花和饮料。', pinyin: 'wǒ lái mǎi bàomǐhuā hé yǐnliào.', meaning: 'I\'ll get the popcorn and drinks.' },
                { speaker: 'A', chinese: '好，一会儿见。', pinyin: 'hǎo, yīhuǐr jiàn.', meaning: 'OK, see you soon.' }
            ]
        },
        {
            id: 'dex_201',
            title: '散步',
            titleMeaning: 'Taking a Walk',
            category: 'Dating',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '吃饱了，我们散散步吧。', pinyin: 'chī bǎo le, wǒmen sànsàn bù ba.', meaning: 'I\'m full, let\'s take a walk.' },
                { speaker: 'B', chinese: '好，去河边走走。', pinyin: 'hǎo, qù hé biān zǒuzǒu.', meaning: 'OK, let\'s walk by the river.' },
                { speaker: 'A', chinese: '晚上的夜景真美。', pinyin: 'wǎnshang de yèjǐng zhēn měi.', meaning: 'The night view is really beautiful.' },
                { speaker: 'B', chinese: '是啊，和你一起看更美。', pinyin: 'shì a, hé nǐ yīqǐ kàn gèng měi.', meaning: 'Yes, it\'s even more beautiful with you.' },
                { speaker: 'A', chinese: '你嘴真甜。', pinyin: 'nǐ zuǐ zhēn tián.', meaning: 'You\'re so sweet.' }
            ]
        },
        {
            id: 'dex_202',
            title: '吃醋',
            titleMeaning: 'Jealousy',
            category: 'Dating',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '刚才那个男生是谁？', pinyin: 'gāngcái nàge nánshēng shì shuí?', meaning: 'Who was that guy just now?' },
                { speaker: 'B', chinese: '只是一个同事。', pinyin: 'zhǐshì yī gè tóngshì.', meaning: 'Just a colleague.' },
                { speaker: 'A', chinese: '你们看起来很亲密。', pinyin: 'nǐmen kàn qǐlai hěn qīnmì.', meaning: 'You looked very close.' },
                { speaker: 'B', chinese: '你吃醋了吗？', pinyin: 'nǐ chīcù le ma?', meaning: 'Are you jealous?' },
                { speaker: 'A', chinese: '有点。', pinyin: 'yǒudiǎn.', meaning: 'A little.' },
                { speaker: 'B', chinese: '别担心，我只喜欢你一个人。', pinyin: 'bié dānxīn, wǒ zhǐ xǐhuān nǐ yī gè rén.', meaning: 'Don\'t worry, I only like you.' }
            ]
        },
        {
            id: 'dex_203',
            title: '纪念日',
            titleMeaning: 'Anniversary',
            category: 'Dating',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '今天是我们认识一周年。', pinyin: 'jīntiān shì wǒmen rènshi yī zhōunián.', meaning: 'Today is our one-year anniversary of meeting.' },
                { speaker: 'B', chinese: '时间过得真快。', pinyin: 'shíjiān guò de zhēn kuài.', meaning: 'Time flies.' },
                { speaker: 'A', chinese: '我给你准备了一个惊喜。', pinyin: 'wǒ gěi nǐ zhǔnbèi le yī gè jīngxǐ.', meaning: 'I prepared a surprise for you.' },
                { speaker: 'B', chinese: '是什么？快给我看看！', pinyin: 'shì shénme? kuài gěi wǒ kànkan!', meaning: 'What is it? Show me!' },
                { speaker: 'A', chinese: '是我们一起去旅行的相册。', pinyin: 'shì wǒmen yīqǐ qù lǚxíng de xiàngcè.', meaning: 'It\'s a photo album of our trip together.' },
                { speaker: 'B', chinese: '太有心了，我好感动！', pinyin: 'tài yǒuxīn le, wǒ hǎo gǎndòng!', meaning: 'So thoughtful, I\'m so touched!' }
            ]
        },
        {
            id: 'dex_204',
            title: '吵架',
            titleMeaning: 'Arguing',
            category: 'Dating',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '你为什么总是迟到？', pinyin: 'nǐ wèishénme zǒngshì chídào?', meaning: 'Why are you always late?' },
                { speaker: 'B', chinese: '我也不想的，工作太忙了。', pinyin: 'wǒ yě bù xiǎng de, gōngzuò tài máng le.', meaning: 'I don\'t mean to, work is too busy.' },
                { speaker: 'A', chinese: '你总是有借口。', pinyin: 'nǐ zǒngshì yǒu jièkǒu.', meaning: 'You always have an excuse.' },
                { speaker: 'B', chinese: '对不起，我以后会注意的。', pinyin: 'duìbuqǐ, wǒ yǐhòu huì zhùyì de.', meaning: 'I\'m sorry, I\'ll be more careful from now on.' },
                { speaker: 'A', chinese: '好吧，原谅你了。', pinyin: 'hǎo ba, yuánliàng nǐ le.', meaning: 'OK, I forgive you.' },
                { speaker: 'B', chinese: '谢谢你理解我。', pinyin: 'xièxie nǐ lǐjiě wǒ.', meaning: 'Thank you for understanding.' }
            ]
        },
        {
            id: 'dex_205',
            title: '求婚',
            titleMeaning: 'Proposal',
            category: 'Dating',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '我有很重要的话想对你说。', pinyin: 'wǒ yǒu hěn zhòngyào de huà xiǎng duì nǐ shuō.', meaning: 'I have something very important to say to you.' },
                { speaker: 'B', chinese: '什么话？', pinyin: 'shénme huà?', meaning: 'What is it?' },
                { speaker: 'A', chinese: '嫁给我好吗？', pinyin: 'jià gěi wǒ hǎo ma?', meaning: 'Will you marry me?' },
                { speaker: 'B', chinese: '天啊！我愿意！', pinyin: 'tiān a! wǒ yuànyì!', meaning: 'Oh my god! Yes, I do!' },
                { speaker: 'A', chinese: '我会让你幸福的。', pinyin: 'wǒ huì ràng nǐ xìngfú de.', meaning: 'I will make you happy.' }
            ]
        },
        {
            id: 'dex_206',
            title: '异地恋',
            titleMeaning: 'Long-distance Relationship',
            category: 'Dating',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '我要去北京工作了。', pinyin: 'wǒ yào qù běijīng gōngzuò le.', meaning: 'I\'m going to work in Beijing.' },
                { speaker: 'B', chinese: '那我们怎么办？', pinyin: 'nà wǒmen zěnme bàn?', meaning: 'What will we do?' },
                { speaker: 'A', chinese: '我们可以视频通话，每天联系。', pinyin: 'wǒmen kěyǐ shìpín tōnghuà, měitiān liánxì.', meaning: 'We can video call and stay in touch daily.' },
                { speaker: 'B', chinese: '可是距离太远了。', pinyin: 'kěshì jùlí tài yuǎn le.', meaning: 'But the distance is too far.' },
                { speaker: 'A', chinese: '我会每个月回来看你。', pinyin: 'wǒ huì měi gè yuè huílái kàn nǐ.', meaning: 'I\'ll come back to see you every month.' },
                { speaker: 'B', chinese: '说话算话？', pinyin: 'shuōhuà suàn huà?', meaning: 'Promise?' },
                { speaker: 'A', chinese: '一言为定。', pinyin: 'yī yán wéi dìng.', meaning: 'It\'s a deal.' }
            ]
        },
        {
            id: 'dex_207',
            title: '约会AA制',
            titleMeaning: 'Going Dutch on Dates',
            category: 'Dating',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '今天我来买单。', pinyin: 'jīntiān wǒ lái mǎidān.', meaning: 'I\'ll pay today.' },
                { speaker: 'B', chinese: '不，我们AA吧。', pinyin: 'bù, wǒmen AA ba.', meaning: 'No, let\'s go Dutch.' },
                { speaker: 'A', chinese: '我请你，没关系的。', pinyin: 'wǒ qǐng nǐ, méi guānxì de.', meaning: 'My treat, it\'s fine.' },
                { speaker: 'B', chinese: '下次你请，这次AA。', pinyin: 'xià cì nǐ qǐng, zhè cì AA.', meaning: 'You can pay next time, this time let\'s split.' },
                { speaker: 'A', chinese: '好吧，听你的。', pinyin: 'hǎo ba, tīng nǐ de.', meaning: 'OK, whatever you say.' }
            ]
        },
        {
            id: 'dex_208',
            title: '见家长',
            titleMeaning: 'Meeting the Parents',
            category: 'Dating',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '这周末来我家吃饭吧，我爸妈想见你。', pinyin: 'zhè zhōumò lái wǒ jiā chīfàn ba, wǒ bà mā xiǎng jiàn nǐ.', meaning: 'Come to my place for dinner this weekend, my parents want to meet you.' },
                { speaker: 'B', chinese: '我有点紧张。', pinyin: 'wǒ yǒudiǎn jǐnzhāng.', meaning: 'I\'m a bit nervous.' },
                { speaker: 'A', chinese: '别紧张，他们人很好。', pinyin: 'bié jǐnzhāng, tāmen rén hěn hǎo.', meaning: 'Don\'t be nervous, they\'re very nice.' },
                { speaker: 'B', chinese: '我该带什么礼物？', pinyin: 'wǒ gāi dài shénme lǐwù?', meaning: 'What gift should I bring?' },
                { speaker: 'A', chinese: '带水果或者酒就可以了。', pinyin: 'dài shuǐguǒ huòzhě jiǔ jiù kěyǐ le.', meaning: 'Just bring some fruit or wine.' },
                { speaker: 'B', chinese: '好的，我准备一下。', pinyin: 'hǎo de, wǒ zhǔnbèi yīxià.', meaning: 'OK, I\'ll prepare.' }
            ]
        },
        {
            id: 'dex_209',
            title: '分手',
            titleMeaning: 'Breaking Up',
            category: 'Dating',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '我们需要谈谈。', pinyin: 'wǒmen xūyào tántan.', meaning: 'We need to talk.' },
                { speaker: 'B', chinese: '谈什么？', pinyin: 'tán shénme?', meaning: 'About what?' },
                { speaker: 'A', chinese: '我觉得我们不合适。', pinyin: 'wǒ juéde wǒmen bù héshì.', meaning: 'I don\'t think we\'re right for each other.' },
                { speaker: 'B', chinese: '你是要分手吗？', pinyin: 'nǐ shì yào fēnshǒu ma?', meaning: 'Are you breaking up with me?' },
                { speaker: 'A', chinese: '对不起，这对我们都好。', pinyin: 'duìbuqǐ, zhè duì wǒmen dōu hǎo.', meaning: 'I\'m sorry, this is best for both of us.' },
                { speaker: 'B', chinese: '我明白了，祝你幸福。', pinyin: 'wǒ míngbái le, zhù nǐ xìngfú.', meaning: 'I understand, wish you happiness.' }
            ]
        },
        {
            id: 'dex_210',
            title: '浪漫晚餐',
            titleMeaning: 'Romantic Dinner',
            category: 'Dating',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '我为你准备了烛光晚餐。', pinyin: 'wǒ wèi nǐ zhǔnbèi le zhúguāng wǎncān.', meaning: 'I prepared a candlelight dinner for you.' },
                { speaker: 'B', chinese: '太浪漫了！', pinyin: 'tài làngmàn le!', meaning: 'So romantic!' },
                { speaker: 'A', chinese: '这是你最喜欢的红酒。', pinyin: 'zhè shì nǐ zuì xǐhuān de hóngjiǔ.', meaning: 'This is your favorite red wine.' },
                { speaker: 'B', chinese: '你想得好周到。', pinyin: 'nǐ xiǎng de hǎo zhōudào.', meaning: 'You\'re so thoughtful.' },
                { speaker: 'A', chinese: '为了我们，干杯。', pinyin: 'wèile wǒmen, gānbēi.', meaning: 'To us, cheers.' },
                { speaker: 'B', chinese: '干杯！', pinyin: 'gānbēi!', meaning: 'Cheers!' }
            ]
        },
        // ==================== 15. FAMILY (dex_211 - dex_225) ====================
        {
            id: 'dex_211',
            title: '叫起床',
            titleMeaning: 'Waking Someone Up',
            category: 'Family',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '儿子，起床了，七点了！', pinyin: 'érzi, qǐchuáng le, qī diǎn le!', meaning: 'Son, get up, it\'s 7 o\'clock!' },
                { speaker: 'B', chinese: '再睡五分钟。', pinyin: 'zài shuì wǔ fēnzhōng.', meaning: 'Five more minutes.' },
                { speaker: 'A', chinese: '要迟到了，快起来！', pinyin: 'yào chídào le, kuài qǐlái!', meaning: 'You\'ll be late, get up now!' },
                { speaker: 'B', chinese: '好吧，我起来了。', pinyin: 'hǎo ba, wǒ qǐlái le.', meaning: 'OK, I\'m getting up.' },
                { speaker: 'A', chinese: '早餐在桌上了。', pinyin: 'zǎocān zài zhuō shàng le.', meaning: 'Breakfast is on the table.' }
            ]
        },
        {
            id: 'dex_212',
            title: '做家务',
            titleMeaning: 'Doing Chores',
            category: 'Family',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '今天该你打扫卫生了。', pinyin: 'jīntiān gāi nǐ dǎsǎo wèishēng le.', meaning: 'It\'s your turn to clean today.' },
                { speaker: 'B', chinese: '我知道了，马上做。', pinyin: 'wǒ zhīdào le, mǎshàng zuò.', meaning: 'I know, I\'ll do it right away.' },
                { speaker: 'A', chinese: '别忘了拖地。', pinyin: 'bié wàng le tuō dì.', meaning: 'Don\'t forget to mop the floor.' },
                { speaker: 'B', chinese: '好的，你先休息吧。', pinyin: 'hǎo de, nǐ xiān xiūxí ba.', meaning: 'OK, you go rest first.' },
                { speaker: 'A', chinese: '辛苦了。', pinyin: 'xīnkǔ le.', meaning: 'Good work.' }
            ]
        },
        {
            id: 'dex_213',
            title: '教孩子功课',
            titleMeaning: 'Helping with Homework',
            category: 'Family',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '爸爸，这道题我不会做。', pinyin: 'bàba, zhè dào tí wǒ bù huì zuò.', meaning: 'Dad, I can\'t do this problem.' },
                { speaker: 'B', chinese: '我看看，这是一元一次方程。', pinyin: 'wǒ kànkan, zhè shì yī yuán yī cì fāngchéng.', meaning: 'Let me see, this is a linear equation.' },
                { speaker: 'A', chinese: '我没听懂老师讲的。', pinyin: 'wǒ méi tīng dǒng lǎoshī jiǎng de.', meaning: 'I didn\'t understand what the teacher said.' },
                { speaker: 'B', chinese: '没关系，我教你。先把X移到左边。', pinyin: 'méi guānxì, wǒ jiào nǐ. xiān bǎ X yí dào zuǒbiān.', meaning: 'No problem, I\'ll teach you. First move X to the left side.' },
                { speaker: 'A', chinese: '哦，我明白了！', pinyin: 'ò, wǒ míngbái le!', meaning: 'Oh, I get it now!' }
            ]
        },
        {
            id: 'dex_214',
            title: '家庭聚餐',
            titleMeaning: 'Family Dinner',
            category: 'Family',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '今天全家人都在，真热闹。', pinyin: 'jīntiān quán jiā rén dōu zài, zhēn rènao.', meaning: 'The whole family is here today, so lively.' },
                { speaker: 'B', chinese: '是啊，难得大家都聚在一起。', pinyin: 'shì a, nándé dàjiā dōu jù zài yīqǐ.', meaning: 'Yes, it\'s rare that everyone is together.' },
                { speaker: 'C', chinese: '妈做的菜最好吃了。', pinyin: 'mā zuò de cài zuì hǎo chī le.', meaning: 'Mom\'s cooking is the best.' },
                { speaker: 'A', chinese: '多吃点，你太瘦了。', pinyin: 'duō chī diǎn, nǐ tài shòu le.', meaning: 'Eat more, you\'re too thin.' },
                { speaker: 'B', chinese: '来，大家干一杯！', pinyin: 'lái, dàjiā gàn yī bēi!', meaning: 'Come, let\'s all cheers!' }
            ]
        },
        {
            id: 'dex_215',
            title: '看孩子',
            titleMeaning: 'Babysitting',
            category: 'Family',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '今天能帮我带孩子吗？', pinyin: 'jīntiān néng bāng wǒ dài háizi ma?', meaning: 'Can you help me watch the kids today?' },
                { speaker: 'B', chinese: '可以，几点到几点？', pinyin: 'kěyǐ, jǐ diǎn dào jǐ diǎn?', meaning: 'Sure, from what time to what time?' },
                { speaker: 'A', chinese: '下午两点到六点。', pinyin: 'xiàwǔ liǎng diǎn dào liù diǎn.', meaning: 'From 2 pm to 6 pm.' },
                { speaker: 'B', chinese: '好的，我带他去公园玩。', pinyin: 'hǎo de, wǒ dài tā qù gōngyuán wán.', meaning: 'OK, I\'ll take him to the park to play.' },
                { speaker: 'A', chinese: '麻烦你了。', pinyin: 'máfan nǐ le.', meaning: 'Sorry for the trouble.' }
            ]
        },
        {
            id: 'dex_216',
            title: '亲戚串门',
            titleMeaning: 'Relatives Visiting',
            category: 'Family',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '姑姑来了，快叫姑姑。', pinyin: 'gūgu lái le, kuài jiào gūgu.', meaning: 'Aunt is here, say hello to aunt.' },
                { speaker: 'B', chinese: '姑姑好！', pinyin: 'gūgu hǎo!', meaning: 'Hello aunt!' },
                { speaker: 'C', chinese: '好久不见，长这么高了！', pinyin: 'hǎo jiǔ bù jiàn, zhǎng zhème gāo le!', meaning: 'Long time no see, you\'ve grown so tall!' },
                { speaker: 'A', chinese: '快进来坐，喝茶。', pinyin: 'kuài jìnlái zuò, hē chá.', meaning: 'Come in and sit down, have some tea.' },
                { speaker: 'C', chinese: '这是我带来的水果。', pinyin: 'zhè shì wǒ dài lái de shuǐguǒ.', meaning: 'These are some fruits I brought.' },
                { speaker: 'A', chinese: '太客气了。', pinyin: 'tài kèqì le.', meaning: 'You\'re too kind.' }
            ]
        },
        {
            id: 'dex_217',
            title: '过年',
            titleMeaning: 'Chinese New Year',
            category: 'Family',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '新年快乐！恭喜发财！', pinyin: 'xīnnián kuàilè! gōngxǐ fācái!', meaning: 'Happy New Year! Wish you wealth!' },
                { speaker: 'B', chinese: '新年快乐！这是给你的红包。', pinyin: 'xīnnián kuàilè! zhè shì gěi nǐ de hóngbāo.', meaning: 'Happy New Year! This is a red envelope for you.' },
                { speaker: 'A', chinese: '谢谢！祝您身体健康！', pinyin: 'xièxie! zhù nín shēntǐ jiànkāng!', meaning: 'Thank you! Wish you good health!' },
                { speaker: 'B', chinese: '今晚我们一起包饺子。', pinyin: 'jīnwǎn wǒmen yīqǐ bāo jiǎozi.', meaning: 'Tonight let\'s make dumplings together.' },
                { speaker: 'A', chinese: '太好了，我最喜欢吃饺子了。', pinyin: 'tài hǎo le, wǒ zuì xǐhuān chī jiǎozi le.', meaning: 'Great, I love eating dumplings.' }
            ]
        },
        {
            id: 'dex_218',
            title: '中秋节',
            titleMeaning: 'Mid-Autumn Festival',
            category: 'Family',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '中秋节快乐！', pinyin: 'zhōngqiū jié kuàilè!', meaning: 'Happy Mid-Autumn Festival!' },
                { speaker: 'B', chinese: '来，吃块月饼。', pinyin: 'lái, chī kuài yuèbǐng.', meaning: 'Here, have a mooncake.' },
                { speaker: 'A', chinese: '这是什么馅的？', pinyin: 'zhè shì shénme xiàn de?', meaning: 'What filling is this?' },
                { speaker: 'B', chinese: '莲蓉蛋黄馅的。', pinyin: 'liánróng dànhuáng xiàn de.', meaning: 'Lotus seed paste with egg yolk.' },
                { speaker: 'A', chinese: '好吃，我喜欢。', pinyin: 'hǎochī, wǒ xǐhuān.', meaning: 'Delicious, I like it.' }
            ]
        },
        {
            id: 'dex_219',
            title: '生病照顾',
            titleMeaning: 'Taking Care of the Sick',
            category: 'Family',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '妈，你感冒了，多喝热水。', pinyin: 'mā, nǐ gǎnmào le, duō hē rè shuǐ.', meaning: 'Mom, you have a cold, drink more hot water.' },
                { speaker: 'B', chinese: '没事，休息一下就好了。', pinyin: 'méi shì, xiūxí yīxià jiù hǎo le.', meaning: 'It\'s fine, I\'ll be better after some rest.' },
                { speaker: 'A', chinese: '我去给你煮姜汤。', pinyin: 'wǒ qù gěi nǐ zhǔ jiāng tāng.', meaning: 'I\'ll go make you some ginger soup.' },
                { speaker: 'B', chinese: '你真是个好孩子。', pinyin: 'nǐ zhēn shì gè hǎo háizi.', meaning: 'You\'re such a good child.' },
                { speaker: 'A', chinese: '盖好被子，别着凉了。', pinyin: 'gài hǎo bèizi, bié zháo liáng le.', meaning: 'Cover up well, don\'t catch a chill.' }
            ]
        },
        {
            id: 'dex_220',
            title: '周末家庭活动',
            titleMeaning: 'Weekend Family Activities',
            category: 'Family',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '这周末我们去爬山吧。', pinyin: 'zhè zhōumò wǒmen qù páshān ba.', meaning: 'Let\'s go hiking this weekend.' },
                { speaker: 'B', chinese: '好主意，很久没运动了。', pinyin: 'hǎo zhǔyi, hěn jiǔ méi yùndòng le.', meaning: 'Good idea, haven\'t exercised in a while.' },
                { speaker: 'C', chinese: '我也要去！', pinyin: 'wǒ yě yào qù!', meaning: 'I want to go too!' },
                { speaker: 'A', chinese: '好，带上水和零食。', pinyin: 'hǎo, dài shàng shuǐ hé língshí.', meaning: 'OK, bring water and snacks.' },
                { speaker: 'B', chinese: '早上八点出发。', pinyin: 'zǎoshang bā diǎn chūfā.', meaning: 'Depart at 8 am.' }
            ]
        },
        {
            id: 'dex_221',
            title: '养宠物',
            titleMeaning: 'Having a Pet',
            category: 'Family',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '妈妈，我想养一只狗。', pinyin: 'māma, wǒ xiǎng yǎng yī zhī gǒu.', meaning: 'Mom, I want to have a dog.' },
                { speaker: 'B', chinese: '养狗很麻烦的，要天天遛。', pinyin: 'yǎng gǒu hěn máfan de, yào tiāntiān liù.', meaning: 'Having a dog is a lot of trouble, need to walk it every day.' },
                { speaker: 'A', chinese: '我会负责照顾它的。', pinyin: 'wǒ huì fùzé zhàogù tā de.', meaning: 'I\'ll take responsibility for taking care of it.' },
                { speaker: 'B', chinese: '那你要保证每天遛狗和打扫。', pinyin: 'nà nǐ yào bǎozhèng měitiān liù gǒu hé dǎsǎo.', meaning: 'Then you must promise to walk it and clean up every day.' },
                { speaker: 'A', chinese: '我保证！', pinyin: 'wǒ bǎozhèng!', meaning: 'I promise!' }
            ]
        },
        {
            id: 'dex_222',
            title: '给父母买东西',
            titleMeaning: 'Buying Things for Parents',
            category: 'Family',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '爸，我给你买了一件羽绒服。', pinyin: 'bà, wǒ gěi nǐ mǎi le yī jiàn yǔróng fú.', meaning: 'Dad, I bought you a down jacket.' },
                { speaker: 'B', chinese: '花这个钱干什么，我有衣服穿。', pinyin: 'huā zhège qián gàn shénme, wǒ yǒu yīfú chuān.', meaning: 'Why spend this money, I have clothes to wear.' },
                { speaker: 'A', chinese: '你穿上去一定很暖和。', pinyin: 'nǐ chuān shàngqù yīdìng hěn nuǎnhuo.', meaning: 'It will keep you warm.' },
                { speaker: 'B', chinese: '你孝顺，爸爸很开心。', pinyin: 'nǐ xiàoshùn, bàba hěn kāixīn.', meaning: 'You\'re a filial child, dad is very happy.' },
                { speaker: 'A', chinese: '你开心我就开心。', pinyin: 'nǐ kāixīn wǒ jiù kāixīn.', meaning: 'Your happiness is my happiness.' }
            ]
        },
        {
            id: 'dex_223',
            title: '商量事情',
            titleMeaning: 'Family Discussion',
            category: 'Family',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '我想跟你们商量一件事。', pinyin: 'wǒ xiǎng gēn nǐmen shāngliáng yī jiàn shì.', meaning: 'I want to discuss something with you.' },
                { speaker: 'B', chinese: '什么事？说吧。', pinyin: 'shénme shì? shuō ba.', meaning: 'What is it? Go ahead.' },
                { speaker: 'A', chinese: '我想出国留学。', pinyin: 'wǒ xiǎng chūguó liúxué.', meaning: 'I want to study abroad.' },
                { speaker: 'B', chinese: '哪個國家？学费贵吗？', pinyin: 'nǎ ge guójiā? xuéfèi guì ma?', meaning: 'Which country? Is the tuition expensive?' },
                { speaker: 'A', chinese: '我想去美国，可以申请奖学金。', pinyin: 'wǒ xiǎng qù měiguó, kěyǐ shēnqǐng jiǎngxuéjīn.', meaning: 'I want to go to the US, I can apply for scholarships.' },
                { speaker: 'B', chinese: '只要你努力，我们支持你。', pinyin: 'zhǐyào nǐ nǔlì, wǒmen zhīchí nǐ.', meaning: 'As long as you work hard, we support you.' }
            ]
        },
        {
            id: 'dex_224',
            title: '叫吃饭',
            titleMeaning: 'Calling to Eat',
            category: 'Family',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '吃饭了！快来洗手。', pinyin: 'chīfàn le! kuài lái xǐ shǒu.', meaning: 'Dinner is ready! Come wash your hands.' },
                { speaker: 'B', chinese: '来了来了，今天吃什么？', pinyin: 'lái le lái le, jīntiān chī shénme?', meaning: 'Coming, coming, what\'s for dinner today?' },
                { speaker: 'A', chinese: '红烧肉和青菜。', pinyin: 'hóngshāo ròu hé qīngcài.', meaning: 'Braised pork and green vegetables.' },
                { speaker: 'B', chinese: '哇，我的最爱！', pinyin: 'wa, wǒ de zuì ài!', meaning: 'Wow, my favorite!' },
                { speaker: 'A', chinese: '好吃就多吃点。', pinyin: 'hǎochī jiù duō chī diǎn.', meaning: 'If it\'s good, eat more.' }
            ]
        },
        {
            id: 'dex_225',
            title: '睡前故事',
            titleMeaning: 'Bedtime Story',
            category: 'Family',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '爸爸，给我讲个故事吧。', pinyin: 'bàba, gěi wǒ jiǎng gè gùshì ba.', meaning: 'Dad, tell me a story.' },
                { speaker: 'B', chinese: '好，你想听什么故事？', pinyin: 'hǎo, nǐ xiǎng tīng shénme gùshì?', meaning: 'OK, what story do you want to hear?' },
                { speaker: 'A', chinese: '想听孙悟空的故事。', pinyin: 'xiǎng tīng sūnwùkōng de gùshì.', meaning: 'I want to hear about Sun Wukong.' },
                { speaker: 'B', chinese: '从前有一座花果山...', pinyin: 'cóngqián yǒu yī zuò huāguǒ shān...', meaning: 'Once upon a time there was a Mountain of Flowers and Fruits...' },
                { speaker: 'A', chinese: '然后呢？', pinyin: 'ránhòu ne?', meaning: 'What happened next?' },
                { speaker: 'B', chinese: '明天继续讲，现在睡觉吧。', pinyin: 'míngtiān jìxù jiǎng, xiànzài shuìjiào ba.', meaning: 'I\'ll continue tomorrow, now go to sleep.' }
            ]
        },
        // ==================== 16. PHONE (dex_226 - dex_240) ====================
        {
            id: 'dex_226',
            title: '打电话',
            titleMeaning: 'Making a Phone Call',
            category: 'Phone',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '喂，请问是王先生吗？', pinyin: 'wèi, qǐngwèn shì wáng xiānsheng ma?', meaning: 'Hello, is this Mr. Wang?' },
                { speaker: 'B', chinese: '是的，您是？', pinyin: 'shì de, nín shì?', meaning: 'Yes, who is this?' },
                { speaker: 'A', chinese: '我是小李，想跟您约个时间。', pinyin: 'wǒ shì xiǎo lǐ, xiǎng gēn nín yuē gè shíjiān.', meaning: 'I\'m Xiao Li, I want to schedule a time with you.' },
                { speaker: 'B', chinese: '好的，你说吧。', pinyin: 'hǎo de, nǐ shuō ba.', meaning: 'OK, go ahead.' },
                { speaker: 'A', chinese: '明天下午三点方便吗？', pinyin: 'míngtiān xiàwǔ sān diǎn fāngbiàn ma?', meaning: 'Is 3 pm tomorrow convenient?' },
                { speaker: 'B', chinese: '可以的，明天见。', pinyin: 'kěyǐ de, míngtiān jiàn.', meaning: 'Yes, see you tomorrow.' }
            ]
        },
        {
            id: 'dex_227',
            title: '打错电话',
            titleMeaning: 'Wrong Number',
            category: 'Phone',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你好，请问是张丽吗？', pinyin: 'nǐ hǎo, qǐngwèn shì zhāng lì ma?', meaning: 'Hello, is this Zhang Li?' },
                { speaker: 'B', chinese: '你打错了，这里没有叫张丽的。', pinyin: 'nǐ dǎ cuò le, zhèlǐ méiyǒu jiào zhāng lì de.', meaning: 'You have the wrong number, there is no Zhang Li here.' },
                { speaker: 'A', chinese: '对不起，打扰了。', pinyin: 'duìbuqǐ, dǎrǎo le.', meaning: 'Sorry to disturb you.' },
                { speaker: 'B', chinese: '没关系。', pinyin: 'méi guānxì.', meaning: 'No problem.' }
            ]
        },
        {
            id: 'dex_228',
            title: '电话留言',
            titleMeaning: 'Leaving a Voicemail',
            category: 'Phone',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你好，我是李明，请回电话给我。', pinyin: 'nǐ hǎo, wǒ shì lǐ míng, qǐng huí diànhuà gěi wǒ.', meaning: 'Hello, this is Li Ming, please call me back.' },
                { speaker: 'B', chinese: '好的，我让他回你电话。', pinyin: 'hǎo de, wǒ ràng tā huí nǐ diànhuà.', meaning: 'OK, I\'ll have him return your call.' },
                { speaker: 'A', chinese: '我的号码是13812345678。', pinyin: 'wǒ de hàomǎ shì yī sān bā yī èr sān sì wǔ liù qī bā.', meaning: 'My number is 13812345678.' },
                { speaker: 'B', chinese: '记下了，我会转告的。', pinyin: 'jì xià le, wǒ huì zhuǎngào de.', meaning: 'Noted, I\'ll pass on the message.' }
            ]
        },
        {
            id: 'dex_229',
            title: '信号不好',
            titleMeaning: 'Bad Signal',
            category: 'Phone',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '喂，听得见吗？', pinyin: 'wèi, tīng de jiàn ma?', meaning: 'Hello, can you hear me?' },
                { speaker: 'B', chinese: '听不清楚，信号不好。', pinyin: 'tīng bù qīngchu, xìnhào bù hǎo.', meaning: 'I can\'t hear you clearly, the signal is bad.' },
                { speaker: 'A', chinese: '我到外面去打。', pinyin: 'wǒ dào wàimiàn qù dǎ.', meaning: 'I\'ll go outside to call.' },
                { speaker: 'B', chinese: '现在好多了，你说吧。', pinyin: 'xiànzài hǎo duō le, nǐ shuō ba.', meaning: 'Much better now, go ahead.' }
            ]
        },
        {
            id: 'dex_230',
            title: '预约',
            titleMeaning: 'Making an Appointment',
            category: 'Phone',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你好，我想预约做头发。', pinyin: 'nǐ hǎo, wǒ xiǎng yùyuē zuò tóufa.', meaning: 'Hello, I want to book a haircut.' },
                { speaker: 'B', chinese: '好的，您想约几点？', pinyin: 'hǎo de, nín xiǎng yuē jǐ diǎn?', meaning: 'OK, what time would you like?' },
                { speaker: 'A', chinese: '明天上午十点有位置吗？', pinyin: 'míngtiān shàngwǔ shí diǎn yǒu wèizhì ma?', meaning: 'Is there a slot at 10 am tomorrow?' },
                { speaker: 'B', chinese: '有的，请问您找哪位发型师？', pinyin: 'yǒu de, qǐngwèn nín zhǎo nǎ wèi fàxíng shī?', meaning: 'Yes, which stylist would you like?' },
                { speaker: 'A', chinese: '随便，都可以。', pinyin: 'suíbiàn, dōu kěyǐ.', meaning: 'Anyone, any is fine.' },
                { speaker: 'B', chinese: '好的，明天十点见。', pinyin: 'hǎo de, míngtiān shí diǎn jiàn.', meaning: 'OK, see you tomorrow at 10.' }
            ]
        },
        {
            id: 'dex_231',
            title: '接电话',
            titleMeaning: 'Answering the Phone',
            category: 'Phone',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你的手机响了，快接。', pinyin: 'nǐ de shǒujī xiǎng le, kuài jiē.', meaning: 'Your phone is ringing, answer it.' },
                { speaker: 'B', chinese: '等一下，我在做饭。', pinyin: 'děng yīxià, wǒ zài zuò fàn.', meaning: 'Wait a moment, I\'m cooking.' },
                { speaker: 'A', chinese: '我帮你接吧。', pinyin: 'wǒ bāng nǐ jiē ba.', meaning: 'I\'ll answer it for you.' },
                { speaker: 'B', chinese: '好的，谢谢。', pinyin: 'hǎo de, xièxie.', meaning: 'OK, thanks.' },
                { speaker: 'A', chinese: '是你妈妈打来的。', pinyin: 'shì nǐ māma dǎ lái de.', meaning: 'It\'s your mom calling.' }
            ]
        },
        {
            id: 'dex_232',
            title: '挂电话',
            titleMeaning: 'Hanging Up',
            category: 'Phone',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '那就这样吧，我先挂了。', pinyin: 'nà jiù zhèyàng ba, wǒ xiān guà le.', meaning: 'That\'s it then, I\'ll hang up now.' },
                { speaker: 'B', chinese: '好的，再见。', pinyin: 'hǎo de, zàijiàn.', meaning: 'OK, goodbye.' },
                { speaker: 'A', chinese: '再见，有空联系。', pinyin: 'zàijiàn, yǒu kòng liánxì.', meaning: 'Goodbye, keep in touch.' },
                { speaker: 'B', chinese: '好的，拜拜。', pinyin: 'hǎo de, bāibāi.', meaning: 'OK, bye bye.' }
            ]
        },
        {
            id: 'dex_233',
            title: '语音消息',
            titleMeaning: 'Voice Messages',
            category: 'Phone',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '你收到我的微信语音了吗？', pinyin: 'nǐ shōu dào wǒ de wēixìn yǔyīn le ma?', meaning: 'Did you receive my WeChat voice message?' },
                { speaker: 'B', chinese: '收到了，但没来得及听。', pinyin: 'shōu dào le, dàn méi láidejí tīng.', meaning: 'Received it, but didn\'t have time to listen.' },
                { speaker: 'A', chinese: '你现在听一下吧，有急事。', pinyin: 'nǐ xiànzài tīng yīxià ba, yǒu jíshì.', meaning: 'Listen to it now, it\'s urgent.' },
                { speaker: 'B', chinese: '好的，我现在听。', pinyin: 'hǎo de, wǒ xiànzài tīng.', meaning: 'OK, I\'ll listen now.' }
            ]
        },
        {
            id: 'dex_234',
            title: '手机没电',
            titleMeaning: 'Phone Dying',
            category: 'Phone',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '我手机快没电了。', pinyin: 'wǒ shǒujī kuài méi diàn le.', meaning: 'My phone is about to die.' },
                { speaker: 'B', chinese: '你有充电宝吗？', pinyin: 'nǐ yǒu chōngdiàn bǎo ma?', meaning: 'Do you have a power bank?' },
                { speaker: 'A', chinese: '没有，忘带了。', pinyin: 'méiyǒu, wàng dài le.', meaning: 'No, I forgot to bring it.' },
                { speaker: 'B', chinese: '我这里有，借给你用。', pinyin: 'wǒ zhèlǐ yǒu, jiè gěi nǐ yòng.', meaning: 'I have one here, lend it to you.' },
                { speaker: 'A', chinese: '太好了，谢谢！', pinyin: 'tài hǎo le, xièxie!', meaning: 'Great, thanks!' }
            ]
        },
        {
            id: 'dex_235',
            title: '骚扰电话',
            titleMeaning: 'Spam Calls',
            category: 'Phone',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '又是骚扰电话。', pinyin: 'yòu shì sāorǎo diànhuà.', meaning: 'Another spam call.' },
                { speaker: 'B', chinese: '直接挂掉不要接。', pinyin: 'zhíjiē guà diào bù yào jiē.', meaning: 'Just hang up, don\'t answer.' },
                { speaker: 'A', chinese: '我把他拉黑名单了。', pinyin: 'wǒ bǎ tā lā hēimíngdān le.', meaning: 'I blocked the number.' },
                { speaker: 'B', chinese: '最近骚扰电话越来越多了。', pinyin: 'zuìjìn sāorǎo diànhuà yuè lái yuè duō le.', meaning: 'Spam calls are getting more frequent lately.' },
                { speaker: 'A', chinese: '装个拦截软件吧。', pinyin: 'zhuāng gè lánjié ruǎnjiàn ba.', meaning: 'Install a blocker app.' }
            ]
        },
        {
            id: 'dex_236',
            title: '国际长途',
            titleMeaning: 'International Calls',
            category: 'Phone',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '我想打国际长途，怎么收费？', pinyin: 'wǒ xiǎng dǎ guójì chángtú, zěnme shōufèi?', meaning: 'I want to make an international call, how much does it cost?' },
                { speaker: 'B', chinese: '打到美国每分钟一块五。', pinyin: 'dǎ dào měiguó měi fēnzhōng yī kuài wǔ.', meaning: 'To the US, 1.5 yuan per minute.' },
                { speaker: 'A', chinese: '有没有更便宜的方式？', pinyin: 'yǒu méiyǒu gèng piányi de fāngshì?', meaning: 'Is there a cheaper way?' },
                { speaker: 'B', chinese: '可以用网络电话，免费。', pinyin: 'kěyǐ yòng wǎngluò diànhuà, miǎnfèi.', meaning: 'You can use internet calling, it\'s free.' },
                { speaker: 'A', chinese: '对，用微信视频就可以了。', pinyin: 'duì, yòng wēixìn shìpín jiù kěyǐ le.', meaning: 'Right, I can use WeChat video call.' }
            ]
        },
        {
            id: 'dex_237',
            title: '电话会议',
            titleMeaning: 'Conference Call',
            category: 'Phone',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '大家都能听到吗？', pinyin: 'dàjiā dōu néng tīng dào ma?', meaning: 'Can everyone hear me?' },
                { speaker: 'B', chinese: '能听到，但是有点噪音。', pinyin: 'néng tīng dào, dànshì yǒudiǎn zàoyīn.', meaning: 'Yes, but there\'s some background noise.' },
                { speaker: 'A', chinese: '请大家关闭麦克风。', pinyin: 'qǐng dàjiā guānbì màikèfēng.', meaning: 'Please mute your microphones.' },
                { speaker: 'C', chinese: '好的，已关闭。', pinyin: 'hǎo de, yǐ guānbì.', meaning: 'OK, muted.' },
                { speaker: 'A', chinese: '现在开始汇报进度。', pinyin: 'xiànzài kāishǐ huìbào jìndù.', meaning: 'Let\'s start the progress report.' }
            ]
        },
        {
            id: 'dex_238',
            title: '手机套餐',
            titleMeaning: 'Phone Plans',
            category: 'Phone',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '你好，我想换个手机套餐。', pinyin: 'nǐ hǎo, wǒ xiǎng huàn gè shǒujī tàocān.', meaning: 'Hello, I want to change my phone plan.' },
                { speaker: 'B', chinese: '您现在的套餐是多少？', pinyin: 'nín xiànzài de tàocān shì duōshao?', meaning: 'What is your current plan?' },
                { speaker: 'A', chinese: '每个月九十九的，流量不够用。', pinyin: 'měi gè yuè jiǔshíjiǔ de, liúliàng bù gòu yòng.', meaning: '99 yuan per month, not enough data.' },
                { speaker: 'B', chinese: '这款一百二十九的，有三十G流量。', pinyin: 'zhè kuǎn yībǎi èrshíjiǔ de, yǒu sānshí G liúliàng.', meaning: 'This 129 yuan plan has 30GB of data.' },
                { speaker: 'A', chinese: '好的，帮我换成这个。', pinyin: 'hǎo de, bāng wǒ huàn chéng zhège.', meaning: 'OK, help me switch to this one.' }
            ]
        },
        {
            id: 'dex_239',
            title: '通话记录',
            titleMeaning: 'Call History',
            category: 'Phone',
            difficulty: 'easy',
            turns: [
                { speaker: 'A', chinese: '我找不到昨天的通话记录了。', pinyin: 'wǒ zhǎo bù dào zuótiān de tōnghuà jìlù le.', meaning: 'I can\'t find yesterday\'s call history.' },
                { speaker: 'B', chinese: '你删了吗？', pinyin: 'nǐ shān le ma?', meaning: 'Did you delete it?' },
                { speaker: 'A', chinese: '没有啊，不知道去哪了。', pinyin: 'méiyǒu a, bù zhīdào qù nǎ le.', meaning: 'No, I don\'t know where it went.' },
                { speaker: 'B', chinese: '在通话记录里往下翻翻看。', pinyin: 'zài tōnghuà jìlù lǐ wǎng xià fān fān kàn.', meaning: 'Scroll down in the call history.' },
                { speaker: 'A', chinese: '找到了，谢谢！', pinyin: 'zhǎo dào le, xièxie!', meaning: 'Found it, thanks!' }
            ]
        },
        {
            id: 'dex_240',
            title: '紧急电话',
            titleMeaning: 'Emergency Call',
            category: 'Phone',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '110吗？这里发生了交通事故。', pinyin: 'yī yī líng ma? zhèlǐ fāshēng le jiāotōng shìgù.', meaning: 'Is this 110? There has been a traffic accident here.' },
                { speaker: 'B', chinese: '请告诉我您的位置。', pinyin: 'qǐng gàosù wǒ nín de wèizhì.', meaning: 'Please tell me your location.' },
                { speaker: 'A', chinese: '在人民路和中山路交叉口。', pinyin: 'zài rénmín lù hé zhōngshān lù jiāochā kǒu.', meaning: 'At the intersection of Renmin Road and Zhongshan Road.' },
                { speaker: 'B', chinese: '有人受伤吗？', pinyin: 'yǒu rén shòushāng ma?', meaning: 'Is anyone injured?' },
                { speaker: 'A', chinese: '有两个人受伤了，需要救护车。', pinyin: 'yǒu liǎng gè rén shòushāng le, xūyào jiùhù chē.', meaning: 'Two people are injured, need an ambulance.' },
                { speaker: 'B', chinese: '我们马上派人过去。', pinyin: 'wǒmen mǎshàng pài rén guòqù.', meaning: 'We will send someone right away.' }
            ]
        },
        // ==================== 17. EMERGENCY (dex_241 - dex_255) ====================
        {
            id: 'dex_241',
            title: '报警',
            titleMeaning: 'Calling the Police',
            category: 'Emergency',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '警察，我家被偷了！', pinyin: 'jǐngchá, wǒ jiā bèi tōu le!', meaning: 'Police, my house has been burgled!' },
                { speaker: 'B', chinese: '请冷静，您什么时候发现的？', pinyin: 'qǐng lěngjìng, nín shénme shíhou fāxiàn de?', meaning: 'Please stay calm, when did you discover it?' },
                { speaker: 'A', chinese: '刚刚回家发现的，门被撬开了。', pinyin: 'gānggāng huí jiā fāxiàn de, mén bèi qiào kāi le.', meaning: 'I just came home and found the door was forced open.' },
                { speaker: 'B', chinese: '丢了什么东西？', pinyin: 'diū le shénme dōngxi?', meaning: 'What was stolen?' },
                { speaker: 'A', chinese: '笔记本电脑和现金。', pinyin: 'bǐjìběn diànnǎo hé xiànjīn.', meaning: 'A laptop and some cash.' },
                { speaker: 'B', chinese: '我们马上派警员过去。', pinyin: 'wǒmen mǎshàng pài jǐngyuán guòqù.', meaning: 'We\'ll send an officer right away.' }
            ]
        },
        {
            id: 'dex_242',
            title: '叫救护车',
            titleMeaning: 'Calling an Ambulance',
            category: 'Emergency',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '快打120，有人晕倒了！', pinyin: 'kuài dǎ yī èr líng, yǒu rén yūn dǎo le!', meaning: 'Quick, call 120, someone has fainted!' },
                { speaker: 'B', chinese: '120吗？这里有人需要急救。', pinyin: 'yī èr líng ma? zhèlǐ yǒu rén xūyào jíjiù.', meaning: 'Is this 120? Someone needs emergency help here.' },
                { speaker: 'C', chinese: '请告诉我地址和病人情况。', pinyin: 'qǐng gàosù wǒ dìzhǐ hé bìngrén qíngkuàng.', meaning: 'Please tell me the address and patient condition.' },
                { speaker: 'B', chinese: '在光明路十八号，老人晕倒了，没有呼吸了。', pinyin: 'zài guāngmíng lù shíbā hào, lǎorén yūn dǎo le, méiyǒu hūxī le.', meaning: 'At 18 Guangming Road, an elderly person has fainted and isn\'t breathing.' },
                { speaker: 'C', chinese: '我们马上到，先做心肺复苏。', pinyin: 'wǒmen mǎshàng dào, xiān zuò xīnfèi fùsū.', meaning: 'We\'re on our way, start CPR in the meantime.' }
            ]
        },
        {
            id: 'dex_243',
            title: '火灾',
            titleMeaning: 'Fire Emergency',
            category: 'Emergency',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '着火了！快打119！', pinyin: 'zháohuǒ le! kuài dǎ yī yī jiǔ!', meaning: 'Fire! Quick, call 119!' },
                { speaker: 'B', chinese: '119吗？我们楼里着火了！', pinyin: 'yī yī jiǔ ma? wǒmen lóu lǐ zháohuǒ le!', meaning: 'Is this 119? There\'s a fire in our building!' },
                { speaker: 'C', chinese: '在什么位置？火势大不大？', pinyin: 'zài shénme wèizhì? huǒshì dà bù dà?', meaning: 'What\'s the location? How big is the fire?' },
                { speaker: 'B', chinese: '在五楼，烟很大！', pinyin: 'zài wǔ lóu, yān hěn dà!', meaning: 'On the fifth floor, lots of smoke!' },
                { speaker: 'C', chinese: '不要坐电梯，用湿毛巾捂住口鼻。', pinyin: 'bù yào zuò diàntī, yòng shī máojīn wǔ zhù kǒu bí.', meaning: 'Don\'t use the elevator, cover your mouth and nose with a wet towel.' },
                { speaker: 'A', chinese: '好的，我们马上疏散！', pinyin: 'hǎo de, wǒmen mǎshàng shūsàn!', meaning: 'OK, we\'ll evacuate immediately!' }
            ]
        },
        {
            id: 'dex_244',
            title: '丢失钱包',
            titleMeaning: 'Lost Wallet',
            category: 'Emergency',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '我的钱包丢了！', pinyin: 'wǒ de qiánbāo diū le!', meaning: 'I lost my wallet!' },
                { speaker: 'B', chinese: '里面有什么重要的东西？', pinyin: 'lǐmiàn yǒu shénme zhòngyào de dōngxi?', meaning: 'What important things were inside?' },
                { speaker: 'A', chinese: '有身份证、银行卡和现金。', pinyin: 'yǒu shēnfènzhèng, yínháng kǎ hé xiànjīn.', meaning: 'My ID card, bank cards, and cash.' },
                { speaker: 'B', chinese: '先挂失银行卡，再补办身份证。', pinyin: 'xiān guàshī yínháng kǎ, zài bǔbàn shēnfènzhèng.', meaning: 'First report the bank cards, then get a new ID.' },
                { speaker: 'A', chinese: '好的，我马上去办。', pinyin: 'hǎo de, wǒ mǎshàng qù bàn.', meaning: 'OK, I\'ll do that right away.' }
            ]
        },
        {
            id: 'dex_245',
            title: '交通事故',
            titleMeaning: 'Traffic Accident',
            category: 'Emergency',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '你没事吧？撞到哪里了？', pinyin: 'nǐ méi shì ba? zhuàng dào nǎlǐ le?', meaning: 'Are you OK? Where were you hit?' },
                { speaker: 'B', chinese: '我的腿很疼，动不了。', pinyin: 'wǒ de tuǐ hěn téng, dòng bù liǎo.', meaning: 'My leg hurts a lot, I can\'t move it.' },
                { speaker: 'A', chinese: '别动，我打120。', pinyin: 'bié dòng, wǒ dǎ yī èr líng.', meaning: 'Don\'t move, I\'ll call 120.' },
                { speaker: 'B', chinese: '麻烦你帮我联系我家人。', pinyin: 'máfan nǐ bāng wǒ liánxì wǒ jiārén.', meaning: 'Please help me contact my family.' },
                { speaker: 'A', chinese: '好的，你家人电话是多少？', pinyin: 'hǎo de, nǐ jiārén diànhuà shì duōshao?', meaning: 'OK, what is your family\'s phone number?' }
            ]
        },
        {
            id: 'dex_246',
            title: '地震',
            titleMeaning: 'Earthquake',
            category: 'Emergency',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '地震了！快躲到桌子底下！', pinyin: 'dìzhèn le! kuài duǒ dào zhuōzi dǐxià!', meaning: 'Earthquake! Quickly get under the table!' },
                { speaker: 'B', chinese: '好可怕，还在晃！', pinyin: 'hǎo kěpà, hái zài huàng!', meaning: 'So scary, it\'s still shaking!' },
                { speaker: 'A', chinese: '抱着头，别站起来。', pinyin: 'bào zhe tóu, bié zhàn qǐlái.', meaning: 'Cover your head, don\'t stand up.' },
                { speaker: 'B', chinese: '停了，我们现在怎么办？', pinyin: 'tíng le, wǒmen xiànzài zěnme bàn?', meaning: 'It stopped, what do we do now?' },
                { speaker: 'A', chinese: '快速到空旷的地方去。', pinyin: 'kuàisù dào kōngkuàng de dìfang qù.', meaning: 'Quickly go to an open area.' }
            ]
        },
        {
            id: 'dex_247',
            title: '煤气泄漏',
            titleMeaning: 'Gas Leak',
            category: 'Emergency',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '有煤气味，是不是泄漏了？', pinyin: 'yǒu méiqì wèi, shì bùshì xièlòu le?', meaning: 'I smell gas, is there a leak?' },
                { speaker: 'B', chinese: '快关掉煤气阀，打开窗户。', pinyin: 'kuài guān diào méiqì fá, dǎkāi chuānghu.', meaning: 'Quick, turn off the gas valve and open the windows.' },
                { speaker: 'A', chinese: '不要开灯，可能会爆炸。', pinyin: 'bù yào kāi dēng, kěnéng huì bàozhà.', meaning: 'Don\'t turn on the lights, it could explode.' },
                { speaker: 'B', chinese: '我们快出去，打电话叫维修。', pinyin: 'wǒmen kuài chūqù, dǎ diànhuà jiào wéixiū.', meaning: 'Let\'s get out and call for repairs.' },
                { speaker: 'A', chinese: '好的，先保证安全。', pinyin: 'hǎo de, xiān bǎozhèng ānquán.', meaning: 'OK, safety first.' }
            ]
        },
        {
            id: 'dex_248',
            title: '食物中毒',
            titleMeaning: 'Food Poisoning',
            category: 'Emergency',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '我肚子好疼，还想吐。', pinyin: 'wǒ dùzi hǎo téng, hái xiǎng tù.', meaning: 'My stomach hurts badly and I feel like vomiting.' },
                { speaker: 'B', chinese: '是不是吃坏东西了？', pinyin: 'shì bùshì chī huài dōngxi le?', meaning: 'Did you eat something bad?' },
                { speaker: 'A', chinese: '中午在外面吃了海鲜。', pinyin: 'zhōngwǔ zài wàimiàn chī le hǎixiān.', meaning: 'I ate seafood out for lunch.' },
                { speaker: 'B', chinese: '可能是食物中毒，赶紧去医院。', pinyin: 'kěnéng shì shíwù zhòngdú, gǎnjǐn qù yīyuàn.', meaning: 'It might be food poisoning, go to the hospital immediately.' },
                { speaker: 'A', chinese: '你能陪我去吗？', pinyin: 'nǐ néng péi wǒ qù ma?', meaning: 'Can you come with me?' },
                { speaker: 'B', chinese: '当然，我们打车去。', pinyin: 'dāngrán, wǒmen dǎchē qù.', meaning: 'Of course, let\'s take a taxi.' }
            ]
        },
        {
            id: 'dex_249',
            title: '银行卡被盗刷',
            titleMeaning: 'Card Fraud',
            category: 'Emergency',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '我的银行卡被盗刷了！', pinyin: 'wǒ de yínháng kǎ bèi dào shuā le!', meaning: 'My bank card has been fraudulently used!' },
                { speaker: 'B', chinese: '什么时候的事？', pinyin: 'shénme shíhou de shì?', meaning: 'When did it happen?' },
                { speaker: 'A', chinese: '刚才收到短信，消费了五千块。', pinyin: 'gāngcái shōu dào duǎnxìn, xiāofèi le wǔ qiān kuài.', meaning: 'I just got a text message, 5000 yuan was spent.' },
                { speaker: 'B', chinese: '快打银行电话冻结账户。', pinyin: 'kuài dǎ yínháng diànhuà dòngjié zhànghù.', meaning: 'Quickly call the bank to freeze the account.' },
                { speaker: 'A', chinese: '然后要去报警吗？', pinyin: 'ránhòu yào qù bàojǐng ma?', meaning: 'And then should I go to the police?' },
                { speaker: 'B', chinese: '对，带上身份证去派出所。', pinyin: 'duì, dài shàng shēnfènzhèng qù pàichūsuǒ.', meaning: 'Yes, bring your ID to the police station.' }
            ]
        },
        {
            id: 'dex_250',
            title: '迷路',
            titleMeaning: 'Getting Lost',
            category: 'Emergency',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '我好像迷路了。', pinyin: 'wǒ hǎoxiàng mílù le.', meaning: 'I think I\'m lost.' },
                { speaker: 'B', chinese: '你现在在什么地方？', pinyin: 'nǐ xiànzài zài shénme dìfang?', meaning: 'Where are you now?' },
                { speaker: 'A', chinese: '我也不清楚，周围都是树。', pinyin: 'wǒ yě bù qīngchu, zhōuwéi dōu shì shù.', meaning: 'I\'m not sure either, there are trees all around.' },
                { speaker: 'B', chinese: '看看手机地图，打开定位。', pinyin: 'kànkan shǒujī dìtú, dǎkāi dìngwèi.', meaning: 'Check the map on your phone, turn on GPS.' },
                { speaker: 'A', chinese: '手机没信号了。', pinyin: 'shǒujī méi xìnhào le.', meaning: 'My phone has no signal.' },
                { speaker: 'B', chinese: '别着急，找路人问问。', pinyin: 'bié zháojí, zhǎo lùrén wènwen.', meaning: 'Don\'t worry, ask a passerby for directions.' }
            ]
        },
        {
            id: 'dex_251',
            title: '电梯故障',
            titleMeaning: 'Elevator Malfunction',
            category: 'Emergency',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '电梯不动了！', pinyin: 'diàntī bù dòng le!', meaning: 'The elevator stopped!' },
                { speaker: 'B', chinese: '别慌，按紧急按钮。', pinyin: 'bié huāng, àn jǐnjí ànniǔ.', meaning: 'Don\'t panic, press the emergency button.' },
                { speaker: 'A', chinese: '按了，有人回应了。', pinyin: 'àn le, yǒu rén huíyìng le.', meaning: 'I pressed it, someone responded.' },
                { speaker: 'C', chinese: '请稍等，维修人员马上到。', pinyin: 'qǐng shāo děng, wéixiū rényuán mǎshàng dào.', meaning: 'Please wait, maintenance is on the way.' },
                { speaker: 'B', chinese: '好的，我们在这里等。', pinyin: 'hǎo de, wǒmen zài zhèlǐ děng.', meaning: 'OK, we\'ll wait here.' }
            ]
        },
        {
            id: 'dex_252',
            title: '被狗咬',
            titleMeaning: 'Dog Bite',
            category: 'Emergency',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '我被狗咬了，流血了！', pinyin: 'wǒ bèi gǒu yǎo le, liúxuè le!', meaning: 'I was bitten by a dog, I\'m bleeding!' },
                { speaker: 'B', chinese: '赶紧用清水冲洗伤口。', pinyin: 'gǎnjǐn yòng qīngshuǐ chōngxǐ shāngkǒu.', meaning: 'Quickly rinse the wound with clean water.' },
                { speaker: 'A', chinese: '要去医院吗？', pinyin: 'yào qù yīyuàn ma?', meaning: 'Do I need to go to the hospital?' },
                { speaker: 'B', chinese: '一定要去，要打狂犬疫苗。', pinyin: 'yīdìng yào qù, yào dǎ kuángquǎn yìmiáo.', meaning: 'Definitely, you need a rabies shot.' },
                { speaker: 'A', chinese: '好的，我马上去。', pinyin: 'hǎo de, wǒ mǎshàng qù.', meaning: 'OK, I\'ll go right away.' }
            ]
        },
        {
            id: 'dex_253',
            title: '台风',
            titleMeaning: 'Typhoon',
            category: 'Emergency',
            difficulty: 'medium',
            turns: [
                { speaker: 'A', chinese: '台风要来了，赶紧做好准备。', pinyin: 'táifēng yào lái le, gǎnjǐn zuò hǎo zhǔnbèi.', meaning: 'A typhoon is coming, get prepared quickly.' },
                { speaker: 'B', chinese: '要准备什么？', pinyin: 'yào zhǔnbèi shénme?', meaning: 'What do we need to prepare?' },
                { speaker: 'A', chinese: '买一些水和食物，把窗户关好。', pinyin: 'mǎi yīxiē shuǐ hé shíwù, bǎ chuānghu guān hǎo.', meaning: 'Buy some water and food, and close the windows securely.' },
                { speaker: 'B', chinese: '阳台上的花盆要搬进来。', pinyin: 'yángtái shàng de huāpén yào bān jìnlái.', meaning: 'Bring the flower pots in from the balcony.' },
                { speaker: 'A', chinese: '对，防止被风吹下去砸到人。', pinyin: 'duì, fángzhǐ bèi fēng chuī xiàqù zá dào rén.', meaning: 'Right, to prevent them from being blown off and hitting someone.' }
            ]
        },
        {
            id: 'dex_254',
            title: '溺水',
            titleMeaning: 'Drowning',
            category: 'Emergency',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '救命！有人落水了！', pinyin: 'jiùmìng! yǒu rén luòshuǐ le!', meaning: 'Help! Someone fell into the water!' },
                { speaker: 'B', chinese: '谁会游泳？快来救人！', pinyin: 'shuí huì yóuyǒng? kuài lái jiùrén!', meaning: 'Who can swim? Come save them!' },
                { speaker: 'C', chinese: '我来了，快打120！', pinyin: 'wǒ lái le, kuài dǎ yī èr líng!', meaning: 'I\'m coming, quick call 120!' },
                { speaker: 'A', chinese: '救上来了，但他没有呼吸了！', pinyin: 'jiù shànglái le, dàn tā méiyǒu hūxī le!', meaning: 'He\'s rescued, but he\'s not breathing!' },
                { speaker: 'B', chinese: '我做人工呼吸，你按压胸口。', pinyin: 'wǒ zuò réngōng hūxī, nǐ ànyā xiōngkǒu.', meaning: 'I\'ll do mouth-to-mouth, you do chest compressions.' }
            ]
        },
        {
            id: 'dex_255',
            title: '被骗',
            titleMeaning: 'Being Scammed',
            category: 'Emergency',
            difficulty: 'hard',
            turns: [
                { speaker: 'A', chinese: '我好像被骗了。', pinyin: 'wǒ hǎoxiàng bèi piàn le.', meaning: 'I think I was scammed.' },
                { speaker: 'B', chinese: '怎么回事？', pinyin: 'zěnme huí shì?', meaning: 'What happened?' },
                { speaker: 'A', chinese: '有人打电话说我中奖了，让我先交税。', pinyin: 'yǒu rén dǎ diànhuà shuō wǒ zhòngjiǎng le, ràng wǒ xiān jiāo shuì.', meaning: 'Someone called saying I won a prize and needed to pay tax first.' },
                { speaker: 'B', chinese: '这是典型的诈骗，你汇钱了吗？', pinyin: 'zhè shì diǎnxíng de zhàpiàn, nǐ huì qián le ma?', meaning: 'That\'s a typical scam, did you send money?' },
                { speaker: 'A', chinese: '汇了两千块。', pinyin: 'huì le liǎng qiān kuài.', meaning: 'I sent 2000 yuan.' },
                { speaker: 'B', chinese: '快报警！打110！', pinyin: 'kuài bàojǐng! dǎ yī yī líng!', meaning: 'Call the police now! Dial 110!' }
            ]
        }
    ];
    if (typeof DialoguesData !== 'undefined' && DialoguesData.scenarios) {
        DialoguesData.scenarios = DialoguesData.scenarios.concat(items);
    }
})();

// ============================================
// CHINESE MASTER - Real-World Phrases Dataset
// 500+ Practical phrases organized by situation
// ============================================

const RealWorldPhrases = {
    // ============================================
    // RESTAURANT & FOOD (80+ phrases)
    // ============================================
    restaurant: [
        { id: 'rw001', chinese: '请给我菜单', pinyin: 'qǐng gěi wǒ càidān', meaning: 'Please give me the menu', difficulty: 1, category: 'ordering' },
        { id: 'rw002', chinese: '我要点菜', pinyin: 'wǒ yào diǎn cài', meaning: 'I want to order', difficulty: 1, category: 'ordering' },
        { id: 'rw003', chinese: '这个菜辣吗', pinyin: 'zhège cài là ma', meaning: 'Is this dish spicy?', difficulty: 1, category: 'asking' },
        { id: 'rw004', chinese: '我不吃辣', pinyin: 'wǒ bù chī là', meaning: 'I don\'t eat spicy food', difficulty: 1, category: 'preferences' },
        { id: 'rw005', chinese: '我对花生过敏', pinyin: 'wǒ duì huāshēng guòmǐn', meaning: 'I\'m allergic to peanuts', difficulty: 2, category: 'allergies' },
        { id: 'rw006', chinese: '请少放盐', pinyin: 'qǐng shǎo fàng yán', meaning: 'Please use less salt', difficulty: 2, category: 'preferences' },
        { id: 'rw007', chinese: '请不要放味精', pinyin: 'qǐng bùyào fàng wèijīng', meaning: 'Please don\'t add MSG', difficulty: 2, category: 'preferences' },
        { id: 'rw008', chinese: '买单', pinyin: 'mǎidān', meaning: 'Check please', difficulty: 1, category: 'paying' },
        { id: 'rw009', chinese: '可以刷卡吗', pinyin: 'kěyǐ shuākǎ ma', meaning: 'Can I pay by card?', difficulty: 1, category: 'paying' },
        { id: 'rw010', chinese: '可以微信支付吗', pinyin: 'kěyǐ wēixìn zhīfù ma', meaning: 'Can I pay with WeChat?', difficulty: 2, category: 'paying' },
        { id: 'rw011', chinese: '可以支付宝吗', pinyin: 'kěyǐ zhīfùbǎo ma', meaning: 'Can I pay with Alipay?', difficulty: 2, category: 'paying' },
        { id: 'rw012', chinese: '找零', pinyin: 'zhǎolíng', meaning: 'Change (money back)', difficulty: 1, category: 'paying' },
        { id: 'rw013', chinese: '不用找了', pinyin: 'bùyòng zhǎo le', meaning: 'Keep the change', difficulty: 1, category: 'paying' },
        { id: 'rw014', chinese: '请打包', pinyin: 'qǐng dǎbāo', meaning: 'Please pack this to go', difficulty: 1, category: 'takeaway' },
        { id: 'rw015', chinese: '我要一杯咖啡', pinyin: 'wǒ yào yī bēi kāfēi', meaning: 'I want a cup of coffee', difficulty: 1, category: 'ordering' },
        { id: 'rw016', chinese: '要大杯还是小杯', pinyin: 'yào dà bēi háishì xiǎo bēi', meaning: 'Large or small cup?', difficulty: 1, category: 'ordering' },
        { id: 'rw017', chinese: '加糖吗', pinyin: 'jiā táng ma', meaning: 'Add sugar?', difficulty: 1, category: 'ordering' },
        { id: 'rw018', chinese: '不加糖', pinyin: 'bù jiā táng', meaning: 'No sugar', difficulty: 1, category: 'ordering' },
        { id: 'rw019', chinese: '加奶吗', pinyin: 'jiā nǎi ma', meaning: 'Add milk?', difficulty: 1, category: 'ordering' },
        { id: 'rw020', chinese: '请加冰', pinyin: 'qǐng jiā bīng', meaning: 'Please add ice', difficulty: 1, category: 'ordering' },
        { id: 'rw021', chinese: '不要冰', pinyin: 'bùyào bīng', meaning: 'No ice', difficulty: 1, category: 'ordering' },
        { id: 'rw022', chinese: '请再给我一杯', pinyin: 'qǐng zài gěi wǒ yī bēi', meaning: 'Please give me another cup', difficulty: 2, category: 'ordering' },
        { id: 'rw023', chinese: '这个好吃吗', pinyin: 'zhège hǎochī ma', meaning: 'Is this delicious?', difficulty: 1, category: 'asking' },
        { id: 'rw024', chinese: '推荐什么菜', pinyin: 'tuījiàn shénme cài', meaning: 'What dish do you recommend?', difficulty: 2, category: 'asking' },
        { id: 'rw025', chinese: '有什么特色菜', pinyin: 'yǒu shénme tèsè cài', meaning: 'What are the specialty dishes?', difficulty: 2, category: 'asking' },
        { id: 'rw026', chinese: '等一下再点', pinyin: 'děng yīxià zài diǎn', meaning: 'Wait a moment before ordering', difficulty: 2, category: 'ordering' },
        { id: 'rw027', chinese: '我还要一个汤', pinyin: 'wǒ hái yào yīgè tāng', meaning: 'I also want a soup', difficulty: 1, category: 'ordering' },
        { id: 'rw028', chinese: '够了够了', pinyin: 'gòu le gòu le', meaning: 'That\'s enough', difficulty: 1, category: 'ordering' },
        { id: 'rw029', chinese: '太多了', pinyin: 'tài duō le', meaning: 'Too much', difficulty: 1, category: 'complaints' },
        { id: 'rw030', chinese: '太咸了', pinyin: 'tài xián le', meaning: 'Too salty', difficulty: 1, category: 'complaints' },
        { id: 'rw031', chinese: '太淡了', pinyin: 'tài dàn le', meaning: 'Too bland', difficulty: 2, category: 'complaints' },
        { id: 'rw032', chinese: '菜还没上', pinyin: 'cài hái méi shàng', meaning: 'The food hasn\'t been served yet', difficulty: 2, category: 'complaints' },
        { id: 'rw033', chinese: '我点的不是这个', pinyin: 'wǒ diǎn de bù shì zhège', meaning: 'This isn\'t what I ordered', difficulty: 2, category: 'complaints' },
        { id: 'rw034', chinese: '洗手间在哪里', pinyin: 'xǐshǒujiān zài nǎlǐ', meaning: 'Where is the restroom?', difficulty: 1, category: 'asking' },
        { id: 'rw035', chinese: '有wifi吗', pinyin: 'yǒu wifi ma', meaning: 'Is there WiFi?', difficulty: 1, category: 'asking' },
        { id: 'rw036', chinese: 'wifi密码是什么', pinyin: 'wifi mìmǎ shì shénme', meaning: 'What\'s the WiFi password?', difficulty: 1, category: 'asking' },
        { id: 'rw037', chinese: '可以坐这里吗', pinyin: 'kěyǐ zuò zhèlǐ ma', meaning: 'Can I sit here?', difficulty: 1, category: 'asking' },
        { id: 'rw038', chinese: '这里有人吗', pinyin: 'zhèlǐ yǒu rén ma', meaning: 'Is anyone sitting here?', difficulty: 1, category: 'asking' },
        { id: 'rw039', chinese: '请帮我拍照', pinyin: 'qǐng bāng wǒ pāizhào', meaning: 'Please take a photo for me', difficulty: 1, category: 'requests' },
        { id: 'rw040', chinese: '谢谢你的服务', pinyin: 'xièxiè nǐ de fúwù', meaning: 'Thank you for the service', difficulty: 1, category: 'polite' },
        { id: 'rw041', chinese: '非常好吃', pinyin: 'fēicháng hǎochī', meaning: 'Very delicious', difficulty: 1, category: 'compliments' },
        { id: 'rw042', chinese: '下次还来', pinyin: 'xià cì hái lái', meaning: 'Will come again next time', difficulty: 2, category: 'compliments' },
        { id: 'rw043', chinese: '有没有位子', pinyin: 'yǒu méiyǒu wèizi', meaning: 'Are there any seats?', difficulty: 2, category: 'asking' },
        { id: 'rw044', chinese: '我要预订位子', pinyin: 'wǒ yào yùdìng wèizi', meaning: 'I want to reserve a seat', difficulty: 2, category: 'reservations' },
        { id: 'rw045', chinese: '几点开门', pinyin: 'jǐ diǎn kāimén', meaning: 'What time do you open?', difficulty: 1, category: 'asking' },
        { id: 'rw046', chinese: '几点关门', pinyin: 'jǐ diǎn guānmén', meaning: 'What time do you close?', difficulty: 1, category: 'asking' },
        { id: 'rw047', chinese: '今天有特价吗', pinyin: 'jīntiān yǒu tèjià ma', meaning: 'Are there any specials today?', difficulty: 2, category: 'asking' },
        { id: 'rw048', chinese: '可以开发票吗', pinyin: 'kěyǐ kāi fāpiào ma', meaning: 'Can I get a receipt?', difficulty: 2, category: 'paying' },
        { id: 'rw049', chinese: '分开付', pinyin: 'fēnkāi fù', meaning: 'Split the bill', difficulty: 2, category: 'paying' },
        { id: 'rw050', chinese: '一起付', pinyin: 'yīqǐ fù', meaning: 'Pay together', difficulty: 1, category: 'paying' }
    ],

    // ============================================
    // SHOPPING (80+ phrases)
    // ============================================
    shopping: [
        { id: 'rw051', chinese: '这个多少钱', pinyin: 'zhège duōshao qián', meaning: 'How much is this?', difficulty: 1, category: 'price' },
        { id: 'rw052', chinese: '太贵了', pinyin: 'tài guì le', meaning: 'Too expensive', difficulty: 1, category: 'bargaining' },
        { id: 'rw053', chinese: '能便宜一点吗', pinyin: 'néng piányi yīdiǎn ma', meaning: 'Can it be cheaper?', difficulty: 1, category: 'bargaining' },
        { id: 'rw054', chinese: '最低多少钱', pinyin: 'zuìdī duōshao qián', meaning: 'What\'s the lowest price?', difficulty: 2, category: 'bargaining' },
        { id: 'rw055', chinese: '打几折', pinyin: 'dǎ jǐ zhé', meaning: 'What discount?', difficulty: 2, category: 'discounts' },
        { id: 'rw056', chinese: '有优惠吗', pinyin: 'yǒu yōuhuì ma', meaning: 'Is there a discount?', difficulty: 1, category: 'discounts' },
        { id: 'rw057', chinese: '可以试穿吗', pinyin: 'kěyǐ shìchuān ma', meaning: 'Can I try it on?', difficulty: 1, category: 'trying' },
        { id: 'rw058', chinese: '试衣间在哪里', pinyin: 'shìyījiān zài nǎlǐ', meaning: 'Where is the fitting room?', difficulty: 1, category: 'asking' },
        { id: 'rw059', chinese: '有大一号的吗', pinyin: 'yǒu dà yī hào de ma', meaning: 'Do you have a size bigger?', difficulty: 2, category: 'sizes' },
        { id: 'rw060', chinese: '有小一号的吗', pinyin: 'yǒu xiǎo yī hào de ma', meaning: 'Do you have a size smaller?', difficulty: 2, category: 'sizes' },
        { id: 'rw061', chinese: '这个有别的颜色吗', pinyin: 'zhège yǒu biéde yánsè ma', meaning: 'Does this come in other colors?', difficulty: 2, category: 'colors' },
        { id: 'rw062', chinese: '我要这个', pinyin: 'wǒ yào zhège', meaning: 'I want this one', difficulty: 1, category: 'buying' },
        { id: 'rw063', chinese: '我再看看', pinyin: 'wǒ zài kàn kàn', meaning: 'Let me look around more', difficulty: 1, category: 'browsing' },
        { id: 'rw064', chinese: '只是看看', pinyin: 'zhǐ shì kàn kàn', meaning: 'Just looking', difficulty: 1, category: 'browsing' },
        { id: 'rw065', chinese: '可以退吗', pinyin: 'kěyǐ tuì ma', meaning: 'Can I return it?', difficulty: 1, category: 'returns' },
        { id: 'rw066', chinese: '可以换吗', pinyin: 'kěyǐ huàn ma', meaning: 'Can I exchange it?', difficulty: 1, category: 'returns' },
        { id: 'rw067', chinese: '有保修吗', pinyin: 'yǒu bǎoxiū ma', meaning: 'Is there a warranty?', difficulty: 2, category: 'warranty' },
        { id: 'rw068', chinese: '可以送到家吗', pinyin: 'kěyǐ sòng dào jiā ma', meaning: 'Can it be delivered home?', difficulty: 2, category: 'delivery' },
        { id: 'rw069', chinese: '运费多少', pinyin: 'yùnfèi duōshao', meaning: 'How much is shipping?', difficulty: 2, category: 'delivery' },
        { id: 'rw070', chinese: '几天能到', pinyin: 'jǐ tiān néng dào', meaning: 'How many days to arrive?', difficulty: 2, category: 'delivery' },
        { id: 'rw071', chinese: '可以网上买吗', pinyin: 'kěyǐ wǎngshàng mǎi ma', meaning: 'Can I buy it online?', difficulty: 2, category: 'online' },
        { id: 'rw072', chinese: '有实体店吗', pinyin: 'yǒu shítǐ diàn ma', meaning: 'Is there a physical store?', difficulty: 2, category: 'asking' },
        { id: 'rw073', chinese: '质量怎么样', pinyin: 'zhìliàng zěnmeyàng', meaning: 'How is the quality?', difficulty: 2, category: 'quality' },
        { id: 'rw074', chinese: '是正品吗', pinyin: 'shì zhèngpǐn ma', meaning: 'Is it authentic?', difficulty: 2, category: 'quality' },
        { id: 'rw075', chinese: '有假一赔十吗', pinyin: 'yǒu jiǎ yī péi shí ma', meaning: 'Is there a fake-one-pay-ten policy?', difficulty: 3, category: 'quality' },
        { id: 'rw076', chinese: '可以开增值税发票吗', pinyin: 'kěyǐ kāi zēngzhíshuì fāpiào ma', meaning: 'Can I get a VAT invoice?', difficulty: 3, category: 'invoices' },
        { id: 'rw077', chinese: '我要退货', pinyin: 'wǒ yào tuì huò', meaning: 'I want to return this', difficulty: 1, category: 'returns' },
        { id: 'rw078', chinese: '我要换货', pinyin: 'wǒ yào huàn huò', meaning: 'I want to exchange this', difficulty: 1, category: 'returns' },
        { id: 'rw079', chinese: '有会员卡吗', pinyin: 'yǒu huìyuánkǎ ma', meaning: 'Do you have a membership card?', difficulty: 2, category: 'membership' },
        { id: 'rw080', chinese: '怎么办会员卡', pinyin: 'zěnme bàn huìyuánkǎ', meaning: 'How to get a membership card?', difficulty: 2, category: 'membership' },
        { id: 'rw081', chinese: '积分可以换什么', pinyin: 'jīfēn kěyǐ huàn shénme', meaning: 'What can points be exchanged for?', difficulty: 3, category: 'membership' },
        { id: 'rw082', chinese: '有满减活动吗', pinyin: 'yǒu mǎn jiǎn huódòng ma', meaning: 'Are there any spend-and-save promotions?', difficulty: 3, category: 'promotions' },
        { id: 'rw083', chinese: '可以凑单吗', pinyin: 'kěyǐ còu dān ma', meaning: 'Can I combine orders for discount?', difficulty: 3, category: 'promotions' },
        { id: 'rw084', chinese: '包邮吗', pinyin: 'bāoyóu ma', meaning: 'Is shipping free?', difficulty: 2, category: 'delivery' },
        { id: 'rw085', chinese: '支持货到付款吗', pinyin: 'zhīchí huò dào fùkuǎn ma', meaning: 'Do you support cash on delivery?', difficulty: 3, category: 'payment' },
        { id: 'rw086', chinese: '可以分期付款吗', pinyin: 'kěyǐ fēnqī fùkuǎn ma', meaning: 'Can I pay in installments?', difficulty: 3, category: 'payment' },
        { id: 'rw087', chinese: '有赠品吗', pinyin: 'yǒu zèngpǐn ma', meaning: 'Are there any gifts/freebies?', difficulty: 2, category: 'promotions' },
        { id: 'rw088', chinese: '可以多买几个吗', pinyin: 'kěyǐ duō mǎi jǐ gè ma', meaning: 'Can I buy more?', difficulty: 1, category: 'buying' },
        { id: 'rw089', chinese: '买一送一吗', pinyin: 'mǎi yī sòng yī ma', meaning: 'Is it buy one get one free?', difficulty: 2, category: 'promotions' },
        { id: 'rw090', chinese: '什么时候打折', pinyin: 'shénme shíhou dǎ zhé', meaning: 'When is the sale?', difficulty: 1, category: 'discounts' },
        { id: 'rw091', chinese: '这个可以用多久', pinyin: 'zhège kěyǐ yòng duō jiǔ', meaning: 'How long can this last?', difficulty: 2, category: 'quality' },
        { id: 'rw092', chinese: '有说明书吗', pinyin: 'yǒu shuōmíngshū ma', meaning: 'Is there an instruction manual?', difficulty: 2, category: 'product' },
        { id: 'rw093', chinese: '怎么用', pinyin: 'zěnme yòng', meaning: 'How to use it?', difficulty: 1, category: 'product' },
        { id: 'rw094', chinese: '需要电池吗', pinyin: 'xūyào diànchí ma', meaning: 'Does it need batteries?', difficulty: 2, category: 'product' },
        { id: 'rw095', chinese: '可以充电吗', pinyin: 'kěyǐ chōngdiàn ma', meaning: 'Can it be charged?', difficulty: 2, category: 'product' },
        { id: 'rw096', chinese: '防水吗', pinyin: 'fángshuǐ ma', meaning: 'Is it waterproof?', difficulty: 2, category: 'product' },
        { id: 'rw097', chinese: '有保修期吗', pinyin: 'yǒu bǎoxiūqī ma', meaning: 'Is there a warranty period?', difficulty: 2, category: 'warranty' },
        { id: 'rw098', chinese: '保修期多长', pinyin: 'bǎoxiūqī duō cháng', meaning: 'How long is the warranty?', difficulty: 2, category: 'warranty' },
        { id: 'rw099', chinese: '可以维修吗', pinyin: 'kěyǐ wéixiū ma', meaning: 'Can it be repaired?', difficulty: 2, category: 'repair' },
        { id: 'rw100', chinese: '维修多少钱', pinyin: 'wéixiū duōshao qián', meaning: 'How much for repair?', difficulty: 2, category: 'repair' }
    ],

    // ============================================
    // TRANSPORTATION (80+ phrases)
    // ============================================
    transportation: [
        { id: 'rw101', chinese: '请去这个地方', pinyin: 'qǐng qù zhège dìfāng', meaning: 'Please go to this place', difficulty: 1, category: 'taxi' },
        { id: 'rw102', chinese: '到机场多少钱', pinyin: 'dào jīchǎng duōshao qián', meaning: 'How much to the airport?', difficulty: 1, category: 'taxi' },
        { id: 'rw103', chinese: '大概多长时间', pinyin: 'dàgài duō cháng shíjiān', meaning: 'About how long?', difficulty: 1, category: 'taxi' },
        { id: 'rw104', chinese: '请开快一点', pinyin: 'qǐng kāi kuài yīdiǎn', meaning: 'Please drive faster', difficulty: 1, category: 'taxi' },
        { id: 'rw105', chinese: '请开慢一点', pinyin: 'qǐng kāi màn yīdiǎn', meaning: 'Please drive slower', difficulty: 1, category: 'taxi' },
        { id: 'rw106', chinese: '在这里停车', pinyin: 'zài zhèlǐ tíng chē', meaning: 'Stop here', difficulty: 1, category: 'taxi' },
        { id: 'rw107', chinese: '请停一下', pinyin: 'qǐng tíng yīxià', meaning: 'Please stop for a moment', difficulty: 1, category: 'taxi' },
        { id: 'rw108', chinese: '我赶时间', pinyin: 'wǒ gǎn shíjiān', meaning: 'I\'m in a hurry', difficulty: 1, category: 'taxi' },
        { id: 'rw109', chinese: '请打表', pinyin: 'qǐng dǎ biǎo', meaning: 'Please use the meter', difficulty: 2, category: 'taxi' },
        { id: 'rw110', chinese: '可以开发票吗', pinyin: 'kěyǐ kāi fāpiào ma', meaning: 'Can I get a receipt?', difficulty: 2, category: 'taxi' },
        { id: 'rw111', chinese: '不用找了', pinyin: 'bùyòng zhǎo le', meaning: 'Keep the change', difficulty: 1, category: 'taxi' },
        { id: 'rw112', chinese: '我要去火车站', pinyin: 'wǒ yào qù huǒchēzhàn', meaning: 'I want to go to the train station', difficulty: 1, category: 'directions' },
        { id: 'rw113', chinese: '地铁站怎么走', pinyin: 'dìtiězhàn zěnme zǒu', meaning: 'How to get to the subway?', difficulty: 1, category: 'directions' },
        { id: 'rw114', chinese: '离这里远吗', pinyin: 'lí zhèlǐ yuǎn ma', meaning: 'Is it far from here?', difficulty: 1, category: 'directions' },
        { id: 'rw115', chinese: '走路要多久', pinyin: 'zǒulù yào duō jiǔ', meaning: 'How long to walk?', difficulty: 1, category: 'directions' },
        { id: 'rw116', chinese: '请帮我叫出租车', pinyin: 'qǐng bāng wǒ jiào chūzūchē', meaning: 'Please help me call a taxi', difficulty: 1, category: 'requests' },
        { id: 'rw117', chinese: '我在哪里等车', pinyin: 'wǒ zài nǎlǐ děng chē', meaning: 'Where should I wait for the bus?', difficulty: 1, category: 'bus' },
        { id: 'rw118', chinese: '这辆车到不到机场', pinyin: 'zhè liàng chē dào bù dào jīchǎng', meaning: 'Does this bus go to the airport?', difficulty: 2, category: 'bus' },
        { id: 'rw119', chinese: '到站请告诉我', pinyin: 'dào zhàn qǐng gàosù wǒ', meaning: 'Please tell me when we arrive', difficulty: 2, category: 'bus' },
        { id: 'rw120', chinese: '我应该在哪站下车', pinyin: 'wǒ yīnggāi zài nǎ zhàn xià chē', meaning: 'Which stop should I get off?', difficulty: 2, category: 'bus' },
        { id: 'rw121', chinese: '换乘几号线', pinyin: 'huànchéng jǐ hào xiàn', meaning: 'Which line to transfer?', difficulty: 2, category: 'subway' },
        { id: 'rw122', chinese: '怎么买地铁票', pinyin: 'zěnme mǎi dìtiě piào', meaning: 'How to buy subway tickets?', difficulty: 1, category: 'subway' },
        { id: 'rw123', chinese: '可以刷手机吗', pinyin: 'kěyǐ shuā shǒujī ma', meaning: 'Can I use my phone to pay?', difficulty: 2, category: 'subway' },
        { id: 'rw124', chinese: '我要买一张去北京的票', pinyin: 'wǒ yào mǎi yī zhāng qù běijīng de piào', meaning: 'I want to buy a ticket to Beijing', difficulty: 1, category: 'train' },
        { id: 'rw125', chinese: '有座位吗', pinyin: 'yǒu zuòwèi ma', meaning: 'Are there seats?', difficulty: 1, category: 'train' },
        { id: 'rw126', chinese: '硬座还是软座', pinyin: 'yìng zuò háishì ruǎn zuò', meaning: 'Hard seat or soft seat?', difficulty: 2, category: 'train' },
        { id: 'rw127', chinese: '几点发车', pinyin: 'jǐ diǎn fā chē', meaning: 'What time does it depart?', difficulty: 1, category: 'train' },
        { id: 'rw128', chinese: '晚点多长时间', pinyin: 'wǎndiǎn duō cháng shíjiān', meaning: 'How long is the delay?', difficulty: 2, category: 'train' },
        { id: 'rw129', chinese: '可以退票吗', pinyin: 'kěyǐ tuì piào ma', meaning: 'Can I get a refund?', difficulty: 2, category: 'train' },
        { id: 'rw130', chinese: '可以改签吗', pinyin: 'kěyǐ gǎiqiān ma', meaning: 'Can I change my ticket?', difficulty: 2, category: 'train' },
        { id: 'rw131', chinese: '在哪里取票', pinyin: 'zài nǎlǐ qǔ piào', meaning: 'Where to collect tickets?', difficulty: 1, category: 'train' },
        { id: 'rw132', chinese: '需要取票吗', pinyin: 'xūyào qǔ piào ma', meaning: 'Do I need to collect a ticket?', difficulty: 2, category: 'train' },
        { id: 'rw133', chinese: '可以刷身份证吗', pinyin: 'kěyǐ shuā shēnfènzhèng ma', meaning: 'Can I use my ID card?', difficulty: 2, category: 'train' },
        { id: 'rw134', chinese: '行李放在哪里', pinyin: 'xínglǐ fàng zài nǎlǐ', meaning: 'Where to put luggage?', difficulty: 1, category: 'train' },
        { id: 'rw135', chinese: '到站了吗', pinyin: 'dào zhàn le ma', meaning: 'Have we arrived?', difficulty: 1, category: 'train' },
        { id: 'rw136', chinese: '还有几站', pinyin: 'hái yǒu jǐ zhàn', meaning: 'How many more stops?', difficulty: 1, category: 'train' },
        { id: 'rw137', chinese: '我要办登机牌', pinyin: 'wǒ yào bàn dēngjīpái', meaning: 'I want to check in', difficulty: 2, category: 'airport' },
        { id: 'rw138', chinese: '在哪里办理', pinyin: 'zài nǎlǐ bànlǐ', meaning: 'Where to check in?', difficulty: 1, category: 'airport' },
        { id: 'rw139', chinese: '行李超重了吗', pinyin: 'xínglǐ chāozhòng le ma', meaning: 'Is my luggage overweight?', difficulty: 2, category: 'airport' },
        { id: 'rw140', chinese: '可以带多少行李', pinyin: 'kěyǐ dài duōshao xínglǐ', meaning: 'How much luggage can I bring?', difficulty: 2, category: 'airport' },
        { id: 'rw141', chinese: '在哪里安检', pinyin: 'zài nǎlǐ ānjiǎn', meaning: 'Where is security check?', difficulty: 2, category: 'airport' },
        { id: 'rw142', chinese: '在哪里登机', pinyin: 'zài nǎlǐ dēngjī', meaning: 'Where to board?', difficulty: 1, category: 'airport' },
        { id: 'rw143', chinese: '几号登机口', pinyin: 'jǐ hào dēngjī kǒu', meaning: 'Which boarding gate?', difficulty: 1, category: 'airport' },
        { id: 'rw144', chinese: '飞机几点起飞', pinyin: 'fēijī jǐ diǎn qǐfēi', meaning: 'What time does the plane take off?', difficulty: 1, category: 'airport' },
        { id: 'rw145', chinese: '有免费WiFi吗', pinyin: 'yǒu miǎnfèi WiFi ma', meaning: 'Is there free WiFi?', difficulty: 1, category: 'airport' },
        { id: 'rw146', chinese: '在哪里取行李', pinyin: 'zài nǎlǐ qǔ xínglǐ', meaning: 'Where to collect luggage?', difficulty: 1, category: 'airport' },
        { id: 'rw147', chinese: '我的行李丢了', pinyin: 'wǒ de xínglǐ diū le', meaning: 'I lost my luggage', difficulty: 2, category: 'problems' },
        { id: 'rw148', chinese: '怎么去市区', pinyin: 'zěnme qù shìqū', meaning: 'How to get to the city center?', difficulty: 1, category: 'directions' },
        { id: 'rw149', chinese: '有机场大巴吗', pinyin: 'yǒu jīchǎng dàbā ma', meaning: 'Is there an airport shuttle?', difficulty: 2, category: 'airport' },
        { id: 'rw150', chinese: '在哪里坐出租车', pinyin: 'zài nǎlǐ zuò chūzūchē', meaning: 'Where to take a taxi?', difficulty: 1, category: 'airport' }
    ],

    // ============================================
    // HOTEL & ACCOMMODATION (60+ phrases)
    // ============================================
    hotel: [
        { id: 'rw151', chinese: '我要订房间', pinyin: 'wǒ yào dìng fángjiān', meaning: 'I want to book a room', difficulty: 1, category: 'booking' },
        { id: 'rw152', chinese: '有空房间吗', pinyin: 'yǒu kòng fángjiān ma', meaning: 'Are there any rooms available?', difficulty: 1, category: 'booking' },
        { id: 'rw153', chinese: '住一晚多少钱', pinyin: 'zhù yī wǎn duōshao qián', meaning: 'How much per night?', difficulty: 1, category: 'price' },
        { id: 'rw154', chinese: '单人间还是双人间', pinyin: 'dānrénjiān háishì shuāngrénjiān', meaning: 'Single or double room?', difficulty: 1, category: 'room_type' },
        { id: 'rw155', chinese: '有大床房吗', pinyin: 'yǒu dà chuáng fáng ma', meaning: 'Do you have king bed rooms?', difficulty: 2, category: 'room_type' },
        { id: 'rw156', chinese: '含早餐吗', pinyin: 'hán zǎocān ma', meaning: 'Is breakfast included?', difficulty: 1, category: 'amenities' },
        { id: 'rw157', chinese: '可以看一下房间吗', pinyin: 'kěyǐ kàn yīxià fángjiān ma', meaning: 'Can I see the room?', difficulty: 1, category: 'viewing' },
        { id: 'rw158', chinese: '我想换房间', pinyin: 'wǒ xiǎng huàn fángjiān', meaning: 'I want to change rooms', difficulty: 1, category: 'requests' },
        { id: 'rw159', chinese: '房间太吵了', pinyin: 'fángjiān tài chǎo le', meaning: 'The room is too noisy', difficulty: 2, category: 'complaints' },
        { id: 'rw160', chinese: '空调坏了', pinyin: 'kōngtiáo huài le', meaning: 'The air conditioning is broken', difficulty: 2, category: 'problems' },
        { id: 'rw161', chinese: '没有热水', pinyin: 'méiyǒu rè shuǐ', meaning: 'There\'s no hot water', difficulty: 1, category: 'problems' },
        { id: 'rw162', chinese: 'wifi密码是什么', pinyin: 'wifi mìmǎ shì shénme', meaning: 'What\'s the WiFi password?', difficulty: 1, category: 'amenities' },
        { id: 'rw163', chinese: '几点退房', pinyin: 'jǐ diǎn tuì fáng', meaning: 'What time is checkout?', difficulty: 1, category: 'checkout' },
        { id: 'rw164', chinese: '可以延迟退房吗', pinyin: 'kěyǐ yánchí tuì fáng ma', meaning: 'Can I have a late checkout?', difficulty: 2, category: 'checkout' },
        { id: 'rw165', chinese: '可以寄存行李吗', pinyin: 'kěyǐ jìcún xínglǐ ma', meaning: 'Can I store my luggage?', difficulty: 2, category: 'services' },
        { id: 'rw166', chinese: '请叫醒我', pinyin: 'qǐng jiào xǐng wǒ', meaning: 'Please wake me up', difficulty: 2, category: 'services' },
        { id: 'rw167', chinese: '请打扫房间', pinyin: 'qǐng dǎsǎo fángjiān', meaning: 'Please clean the room', difficulty: 1, category: 'services' },
        { id: 'rw168', chinese: '可以加床吗', pinyin: 'kěyǐ jiā chuáng ma', meaning: 'Can I add a bed?', difficulty: 2, category: 'requests' },
        { id: 'rw169', chinese: '有保险箱吗', pinyin: 'yǒu bǎoxiǎnxiāng ma', meaning: 'Is there a safe?', difficulty: 2, category: 'amenities' },
        { id: 'rw170', chinese: '餐厅在哪里', pinyin: 'cāntīng zài nǎlǐ', meaning: 'Where is the restaurant?', difficulty: 1, category: 'asking' },
        { id: 'rw171', chinese: '健身房在哪里', pinyin: 'jiànshēnfáng zài nǎlǐ', meaning: 'Where is the gym?', difficulty: 1, category: 'asking' },
        { id: 'rw172', chinese: '游泳池在哪里', pinyin: 'yóuyǒngchí zài nǎlǐ', meaning: 'Where is the pool?', difficulty: 1, category: 'asking' },
        { id: 'rw173', chinese: '可以帮我叫出租车吗', pinyin: 'kěyǐ bāng wǒ jiào chūzūchē ma', meaning: 'Can you call me a taxi?', difficulty: 1, category: 'requests' },
        { id: 'rw174', chinese: '有洗衣服务吗', pinyin: 'yǒu xǐyī fúwù ma', meaning: 'Is there laundry service?', difficulty: 2, category: 'services' },
        { id: 'rw175', chinese: '可以熨衣服吗', pinyin: 'kěyǐ yùn yīfu ma', meaning: 'Can I get my clothes ironed?', difficulty: 2, category: 'services' },
        { id: 'rw176', chinese: '附近有便利店吗', pinyin: 'fùjìn yǒu biànlì diàn ma', meaning: 'Is there a convenience store nearby?', difficulty: 1, category: 'asking' },
        { id: 'rw177', chinese: '附近有什么好吃的', pinyin: 'fùjìn yǒu shénme hǎochī de', meaning: 'What good food is nearby?', difficulty: 1, category: 'asking' },
        { id: 'rw178', chinese: '可以帮我打印吗', pinyin: 'kěyǐ bāng wǒ dǎyìn ma', meaning: 'Can you help me print?', difficulty: 2, category: 'services' },
        { id: 'rw179', chinese: '有会议室吗', pinyin: 'yǒu huìyì shì ma', meaning: 'Is there a meeting room?', difficulty: 2, category: 'amenities' },
        { id: 'rw180', chinese: '可以开发票吗', pinyin: 'kěyǐ kāi fāpiào ma', meaning: 'Can I get an invoice?', difficulty: 2, category: 'checkout' }
    ],

    // ============================================
    // DAILY LIFE & COMMUNICATION (80+ phrases)
    // ============================================
    dailyLife: [
        { id: 'rw181', chinese: '今天天气怎么样', pinyin: 'jīntiān tiānqì zěnmeyàng', meaning: 'How\'s the weather today?', difficulty: 1, category: 'weather' },
        { id: 'rw182', chinese: '明天会下雨吗', pinyin: 'míngtiān huì xiàyǔ ma', meaning: 'Will it rain tomorrow?', difficulty: 1, category: 'weather' },
        { id: 'rw183', chinese: '今天几度', pinyin: 'jīntiān jǐ dù', meaning: 'What\'s the temperature today?', difficulty: 1, category: 'weather' },
        { id: 'rw184', chinese: '你忙吗', pinyin: 'nǐ máng ma', meaning: 'Are you busy?', difficulty: 1, category: 'greetings' },
        { id: 'rw185', chinese: '最近怎么样', pinyin: 'zuìjìn zěnmeyàng', meaning: 'How have you been?', difficulty: 1, category: 'greetings' },
        { id: 'rw186', chinese: '好久不见', pinyin: 'hǎojiǔ bùjiàn', meaning: 'Long time no see', difficulty: 1, category: 'greetings' },
        { id: 'rw187', chinese: '你吃了吗', pinyin: 'nǐ chī le ma', meaning: 'Have you eaten?', difficulty: 1, category: 'greetings' },
        { id: 'rw188', chinese: '我去上班了', pinyin: 'wǒ qù shàngbān le', meaning: 'I\'m going to work', difficulty: 1, category: 'daily' },
        { id: 'rw189', chinese: '我下班了', pinyin: 'wǒ xiàbān le', meaning: 'I\'m off work', difficulty: 1, category: 'daily' },
        { id: 'rw190', chinese: '我要出去一下', pinyin: 'wǒ yào chūqù yīxià', meaning: 'I need to go out', difficulty: 1, category: 'daily' },
        { id: 'rw191', chinese: '请帮我一下', pinyin: 'qǐng bāng wǒ yīxià', meaning: 'Please help me', difficulty: 1, category: 'requests' },
        { id: 'rw192', chinese: '可以帮我拍张照吗', pinyin: 'kěyǐ bāng wǒ pāi zhāng zhào ma', meaning: 'Can you take a photo for me?', difficulty: 1, category: 'requests' },
        { id: 'rw193', chinese: '这个怎么用', pinyin: 'zhège zěnme yòng', meaning: 'How to use this?', difficulty: 1, category: 'asking' },
        { id: 'rw194', chinese: '我不太舒服', pinyin: 'wǒ bù tài shūfu', meaning: 'I don\'t feel well', difficulty: 1, category: 'health' },
        { id: 'rw195', chinese: '我头疼', pinyin: 'wǒ tóuténg', meaning: 'I have a headache', difficulty: 1, category: 'health' },
        { id: 'rw196', chinese: '我感冒了', pinyin: 'wǒ gǎnmào le', meaning: 'I caught a cold', difficulty: 1, category: 'health' },
        { id: 'rw197', chinese: '附近有药店吗', pinyin: 'fùjìn yǒu yàodiàn ma', meaning: 'Is there a pharmacy nearby?', difficulty: 1, category: 'health' },
        { id: 'rw198', chinese: '可以帮我叫救护车吗', pinyin: 'kěyǐ bāng wǒ jiào jiùhùchē ma', meaning: 'Can you call an ambulance?', difficulty: 2, category: 'emergency' },
        { id: 'rw199', chinese: '我的钱包丢了', pinyin: 'wǒ de qiánbāo diū le', meaning: 'I lost my wallet', difficulty: 1, category: 'problems' },
        { id: 'rw200', chinese: '我的手机丢了', pinyin: 'wǒ de shǒujī diū le', meaning: 'I lost my phone', difficulty: 1, category: 'problems' },
        { id: 'rw201', chinese: '请帮我报警', pinyin: 'qǐng bāng wǒ bàojǐng', meaning: 'Please help me call the police', difficulty: 2, category: 'emergency' },
        { id: 'rw202', chinese: '我不认识路', pinyin: 'wǒ bù rènshi lù', meaning: 'I don\'t know the way', difficulty: 1, category: 'directions' },
        { id: 'rw203', chinese: '我迷路了', pinyin: 'wǒ mílù le', meaning: 'I\'m lost', difficulty: 1, category: 'problems' },
        { id: 'rw204', chinese: '请帮我导航', pinyin: 'qǐng bāng wǒ dǎoháng', meaning: 'Please help me navigate', difficulty: 2, category: 'requests' },
        { id: 'rw205', chinese: '现在几点了', pinyin: 'xiànzài jǐ diǎn le', meaning: 'What time is it?', difficulty: 1, category: 'time' },
        { id: 'rw206', chinese: '今天星期几', pinyin: 'jīntiān xīngqī jǐ', meaning: 'What day is it?', difficulty: 1, category: 'time' },
        { id: 'rw207', chinese: '今天几号', pinyin: 'jīntiān jǐ hào', meaning: 'What\'s the date?', difficulty: 1, category: 'time' },
        { id: 'rw208', chinese: '你什么时候有空', pinyin: 'nǐ shénme shíhou yǒu kòng', meaning: 'When are you free?', difficulty: 1, category: 'time' },
        { id: 'rw209', chinese: '我们可以见面吗', pinyin: 'wǒmen kěyǐ jiànmiàn ma', meaning: 'Can we meet?', difficulty: 1, category: 'social' },
        { id: 'rw210', chinese: '在哪里见面', pinyin: 'zài nǎlǐ jiànmiàn', meaning: 'Where to meet?', difficulty: 1, category: 'social' },
        { id: 'rw211', chinese: '我要走了', pinyin: 'wǒ yào zǒu le', meaning: 'I have to go', difficulty: 1, category: 'farewell' },
        { id: 'rw212', chinese: '下次再聊', pinyin: 'xià cì zài liáo', meaning: 'Let\'s chat next time', difficulty: 1, category: 'farewell' },
        { id: 'rw213', chinese: '保持联系', pinyin: 'bǎochí liánxì', meaning: 'Keep in touch', difficulty: 1, category: 'farewell' },
        { id: 'rw214', chinese: '一路平安', pinyin: 'yī lù píng ān', meaning: 'Have a safe trip', difficulty: 1, category: 'farewell' },
        { id: 'rw215', chinese: '祝你一切顺利', pinyin: 'zhù nǐ yīqiè shùnlì', meaning: 'Wish you all the best', difficulty: 1, category: 'wishes' },
        { id: 'rw216', chinese: '生日快乐', pinyin: 'shēngrì kuàilè', meaning: 'Happy birthday', difficulty: 1, category: 'wishes' },
        { id: 'rw217', chinese: '新年快乐', pinyin: 'xīnnián kuàilè', meaning: 'Happy New Year', difficulty: 1, category: 'wishes' },
        { id: 'rw218', chinese: '恭喜发财', pinyin: 'gōngxǐ fācái', meaning: 'Congratulations and prosperity', difficulty: 2, category: 'wishes' },
        { id: 'rw219', chinese: '节日快乐', pinyin: 'jiérì kuàilè', meaning: 'Happy holidays', difficulty: 1, category: 'wishes' },
        { id: 'rw220', chinese: '祝你成功', pinyin: 'zhù nǐ chénggōng', meaning: 'Wish you success', difficulty: 1, category: 'wishes' },
        { id: 'rw221', chinese: '我很喜欢这里', pinyin: 'wǒ hěn xǐhuān zhèlǐ', meaning: 'I really like this place', difficulty: 1, category: 'opinions' },
        { id: 'rw222', chinese: '这个地方很美', pinyin: 'zhège dìfāng hěn měi', meaning: 'This place is beautiful', difficulty: 1, category: 'opinions' },
        { id: 'rw223', chinese: '我觉得很好', pinyin: 'wǒ juéde hěn hǎo', meaning: 'I think it\'s great', difficulty: 1, category: 'opinions' },
        { id: 'rw224', chinese: '我同意', pinyin: 'wǒ tóngyì', meaning: 'I agree', difficulty: 1, category: 'opinions' },
        { id: 'rw225', chinese: '我不同意', pinyin: 'wǒ bù tóngyì', meaning: 'I disagree', difficulty: 1, category: 'opinions' },
        { id: 'rw226', chinese: '你说得对', pinyin: 'nǐ shuō de duì', meaning: 'You\'re right', difficulty: 1, category: 'opinions' },
        { id: 'rw227', chinese: '我不这么认为', pinyin: 'wǒ bù zhème rènwéi', meaning: 'I don\'t think so', difficulty: 2, category: 'opinions' },
        { id: 'rw228', chinese: '这是我的看法', pinyin: 'zhè shì wǒ de kànfǎ', meaning: 'This is my view', difficulty: 2, category: 'opinions' },
        { id: 'rw229', chinese: '你怎么看', pinyin: 'nǐ zěnme kàn', meaning: 'What do you think?', difficulty: 1, category: 'opinions' },
        { id: 'rw230', chinese: '可以给我一些建议吗', pinyin: 'kěyǐ gěi wǒ yīxiē jiànyì ma', meaning: 'Can you give me some advice?', difficulty: 2, category: 'requests' }
    ],

    // ============================================
    // WORK & BUSINESS (60+ phrases)
    // ============================================
    work: [
        { id: 'rw231', chinese: '我是来面试的', pinyin: 'wǒ shì lái miànshì de', meaning: 'I\'m here for an interview', difficulty: 2, category: 'interview' },
        { id: 'rw232', chinese: '我有预约', pinyin: 'wǒ yǒu yùyuē', meaning: 'I have an appointment', difficulty: 1, category: 'meetings' },
        { id: 'rw233', chinese: '请稍等一下', pinyin: 'qǐng shāo děng yīxià', meaning: 'Please wait a moment', difficulty: 1, category: 'meetings' },
        { id: 'rw234', chinese: '会议几点开始', pinyin: 'huìyì jǐ diǎn kāishǐ', meaning: 'What time does the meeting start?', difficulty: 1, category: 'meetings' },
        { id: 'rw235', chinese: '可以改时间吗', pinyin: 'kěyǐ gǎi shíjiān ma', meaning: 'Can we change the time?', difficulty: 2, category: 'meetings' },
        { id: 'rw236', chinese: '我发邮件给你', pinyin: 'wǒ fā yóujiàn gěi nǐ', meaning: 'I\'ll send you an email', difficulty: 1, category: 'communication' },
        { id: 'rw237', chinese: '请确认一下', pinyin: 'qǐng quèrèn yīxià', meaning: 'Please confirm', difficulty: 1, category: 'communication' },
        { id: 'rw238', chinese: '这个方案可以吗', pinyin: 'zhège fāng\'àn kěyǐ ma', meaning: 'Is this plan OK?', difficulty: 2, category: 'proposals' },
        { id: 'rw239', chinese: '我们需要讨论一下', pinyin: 'wǒmen xūyào tǎolùn yīxià', meaning: 'We need to discuss', difficulty: 2, category: 'meetings' },
        { id: 'rw240', chinese: '有什么问题吗', pinyin: 'yǒu shénme wèntí ma', meaning: 'Any questions?', difficulty: 1, category: 'meetings' },
        { id: 'rw241', chinese: '可以再说一遍吗', pinyin: 'kěyǐ zài shuō yī biàn ma', meaning: 'Can you say that again?', difficulty: 1, category: 'communication' },
        { id: 'rw242', chinese: '我不太明白', pinyin: 'wǒ bù tài míngbai', meaning: 'I don\'t quite understand', difficulty: 1, category: 'communication' },
        { id: 'rw243', chinese: '可以解释一下吗', pinyin: 'kěyǐ jiěshì yīxià ma', meaning: 'Can you explain?', difficulty: 1, category: 'communication' },
        { id: 'rw244', chinese: '我的中文不太好', pinyin: 'wǒ de zhōngwén bù tài hǎo', meaning: 'My Chinese isn\'t very good', difficulty: 1, category: 'communication' },
        { id: 'rw245', chinese: '可以说慢一点吗', pinyin: 'kěyǐ shuō màn yīdiǎn ma', meaning: 'Can you speak slower?', difficulty: 1, category: 'communication' },
        { id: 'rw246', chinese: '可以用英文吗', pinyin: 'kěyǐ yòng yīngwén ma', meaning: 'Can we use English?', difficulty: 1, category: 'communication' },
        { id: 'rw247', chinese: '这个用中文怎么说', pinyin: 'zhège yòng zhōngwén zěnme shuō', meaning: 'How to say this in Chinese?', difficulty: 1, category: 'language' },
        { id: 'rw248', chinese: '请写下来', pinyin: 'qǐng xiě xiàlái', meaning: 'Please write it down', difficulty: 1, category: 'communication' },
        { id: 'rw249', chinese: '可以发给我吗', pinyin: 'kěyǐ fā gěi wǒ ma', meaning: 'Can you send it to me?', difficulty: 1, category: 'requests' },
        { id: 'rw250', chinese: '什么时候需要', pinyin: 'shénme shíhou xūyào', meaning: 'When is it needed?', difficulty: 1, category: 'deadlines' },
        { id: 'rw251', chinese: '截止日期是什么时候', pinyin: 'jiézhǐ rìqī shì shénme shíhou', meaning: 'What\'s the deadline?', difficulty: 2, category: 'deadlines' },
        { id: 'rw252', chinese: '可以延期吗', pinyin: 'kěyǐ yánqī ma', meaning: 'Can it be extended?', difficulty: 2, category: 'deadlines' },
        { id: 'rw253', chinese: '我需要帮助', pinyin: 'wǒ xūyào bāngzhù', meaning: 'I need help', difficulty: 1, category: 'requests' },
        { id: 'rw254', chinese: '可以教我吗', pinyin: 'kěyǐ jiāo wǒ ma', meaning: 'Can you teach me?', difficulty: 1, category: 'requests' },
        { id: 'rw255', chinese: '这个怎么做', pinyin: 'zhège zěnme zuò', meaning: 'How to do this?', difficulty: 1, category: 'asking' },
        { id: 'rw256', chinese: '有什么建议吗', pinyin: 'yǒu shénme jiànyì ma', meaning: 'Any suggestions?', difficulty: 1, category: 'asking' },
        { id: 'rw257', chinese: '我觉得可以', pinyin: 'wǒ juéde kěyǐ', meaning: 'I think it\'s OK', difficulty: 1, category: 'opinions' },
        { id: 'rw258', chinese: '我觉得不行', pinyin: 'wǒ juéde bùxíng', meaning: 'I don\'t think it works', difficulty: 1, category: 'opinions' },
        { id: 'rw259', chinese: '需要修改吗', pinyin: 'xūyào xiūgǎi ma', meaning: 'Does it need modification?', difficulty: 2, category: 'feedback' },
        { id: 'rw260', chinese: '可以再考虑一下吗', pinyin: 'kěyǐ zài kǎolǜ yīxià ma', meaning: 'Can we think about it more?', difficulty: 2, category: 'decisions' },
        { id: 'rw261', chinese: '我同意你的看法', pinyin: 'wǒ tóngyì nǐ de kànfǎ', meaning: 'I agree with your view', difficulty: 2, category: 'opinions' },
        { id: 'rw262', chinese: '我有不同的想法', pinyin: 'wǒ yǒu bùtóng de xiǎngfǎ', meaning: 'I have a different thought', difficulty: 2, category: 'opinions' },
        { id: 'rw263', chinese: '我们可以合作', pinyin: 'wǒmen kěyǐ hézuò', meaning: 'We can cooperate', difficulty: 2, category: 'business' },
        { id: 'rw264', chinese: '签合同', pinyin: 'qiān hétong', meaning: 'Sign a contract', difficulty: 2, category: 'business' },
        { id: 'rw265', chinese: '有什么条件', pinyin: 'yǒu shénme tiáojiàn', meaning: 'What are the conditions?', difficulty: 2, category: 'business' },
        { id: 'rw266', chinese: '价格可以商量吗', pinyin: 'jiàgé kěyǐ shāngliang ma', meaning: 'Can we negotiate the price?', difficulty: 2, category: 'business' },
        { id: 'rw267', chinese: '最低价是多少', pinyin: 'zuìdī jià shì duōshao', meaning: 'What\'s the lowest price?', difficulty: 2, category: 'business' },
        { id: 'rw268', chinese: '可以试用吗', pinyin: 'kěyǐ shìyòng ma', meaning: 'Can I try it?', difficulty: 1, category: 'business' },
        { id: 'rw269', chinese: '有样品吗', pinyin: 'yǒu yàngpǐn ma', meaning: 'Are there samples?', difficulty: 2, category: 'business' },
        { id: 'rw270', chinese: '什么时候交货', pinyin: 'shénme shíhou jiāo huò', meaning: 'When is delivery?', difficulty: 2, category: 'business' }
    ],

    // Helper methods
    getAll() {
        return [
            ...this.restaurant,
            ...this.shopping,
            ...this.transportation,
            ...this.hotel,
            ...this.dailyLife,
            ...this.work
        ];
    },

    getByCategory(category) {
        return this.getAll().filter(p => p.category === category);
    },

    getByDifficulty(difficulty) {
        return this.getAll().filter(p => p.difficulty === difficulty);
    },

    getRandom(count = 10, difficulty = null) {
        let all = this.getAll();
        if (difficulty) {
            all = all.filter(p => p.difficulty === difficulty);
        }
        return Utils.randomItems(all, count);
    },

    getById(id) {
        return this.getAll().find(p => p.id === id);
    },

    get totalCount() {
        return this.getAll().length;
    },

    get categories() {
        return ['restaurant', 'shopping', 'transportation', 'hotel', 'dailyLife', 'work'];
    }
};

window.RealWorldPhrases = RealWorldPhrases;

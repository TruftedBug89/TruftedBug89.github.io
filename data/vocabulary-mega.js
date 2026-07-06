// ============================================
// CHINESE MASTER - MEGA VOCABULARY DATABASE
// 200+ Additional Words with Examples
// ALL SIMPLIFIED CHINESE
// ============================================

const VocabularyMega = {
    words: [
        // ============================
        // DAILY LIFE VERBS
        // ============================
        { id: 'vm001', character: '起床', pinyin: 'qǐchuáng', meaning: 'to get up', hsk: 2, category: 'daily', examples: [{ cn: '我每天七点起床。', en: 'I get up at 7am every day.' }, { cn: '快起床！', en: 'Get up quickly!' }, { cn: '起床了。', en: 'Time to get up.' }] },
        { id: 'vm002', character: '刷牙', pinyin: 'shuāyá', meaning: 'to brush teeth', hsk: 2, category: 'daily', examples: [{ cn: '我每天刷牙两次。', en: 'I brush my teeth twice a day.' }, { cn: '请刷牙。', en: 'Please brush your teeth.' }] },
        { id: 'vm003', character: '洗脸', pinyin: 'xǐliǎn', meaning: 'to wash face', hsk: 2, category: 'daily', examples: [{ cn: '洗脸洗手。', en: 'Wash face and hands.' }, { cn: '早上洗脸。', en: 'Wash face in the morning.' }] },
        { id: 'vm004', character: '洗澡', pinyin: 'xǐzǎo', meaning: 'to take a bath/shower', hsk: 2, category: 'daily', examples: [{ cn: '我每天洗澡。', en: 'I take a shower every day.' }, { cn: '洗澡很舒服。', en: 'Taking a bath is comfortable.' }] },
        { id: 'vm005', character: '穿衣服', pinyin: 'chuān yīfu', meaning: 'to get dressed', hsk: 2, category: 'daily', examples: [{ cn: '穿衣服出门。', en: 'Get dressed and go out.' }, { cn: '穿什么衣服？', en: 'What clothes to wear?' }] },
        { id: 'vm006', character: '吃早饭', pinyin: 'chī zǎofàn', meaning: 'to eat breakfast', hsk: 2, category: 'daily', examples: [{ cn: '吃早饭了吗？', en: 'Have you eaten breakfast?' }, { cn: '我不吃早饭。', en: 'I don\'t eat breakfast.' }] },
        { id: 'vm007', character: '上班', pinyin: 'shàngbān', meaning: 'to go to work', hsk: 2, category: 'daily', examples: [{ cn: '我八点上班。', en: 'I go to work at 8am.' }, { cn: '上班很忙。', en: 'Work is very busy.' }] },
        { id: 'vm008', character: '下班', pinyin: 'xiàbān', meaning: 'to get off work', hsk: 2, category: 'daily', examples: [{ cn: '我五点下班。', en: 'I get off work at 5pm.' }, { cn: '下班后做什么？', en: 'What to do after work?' }] },
        { id: 'vm009', character: '做饭', pinyin: 'zuòfàn', meaning: 'to cook', hsk: 2, category: 'daily', examples: [{ cn: '我做饭很好吃。', en: 'I cook very well.' }, { cn: '谁做饭？', en: 'Who cooks?' }] },
        { id: 'vm010', character: '打扫', pinyin: 'dǎsǎo', meaning: 'to clean', hsk: 3, category: 'daily', examples: [{ cn: '打扫房间。', en: 'Clean the room.' }, { cn: '打扫卫生。', en: 'Clean up.' }] },
        { id: 'vm011', character: '洗衣服', pinyin: 'xǐ yīfu', meaning: 'to wash clothes', hsk: 2, category: 'daily', examples: [{ cn: '我洗衣服。', en: 'I wash clothes.' }, { cn: '洗衣服很累。', en: 'Washing clothes is tiring.' }] },
        { id: 'vm012', character: '晾衣服', pinyin: 'liàng yīfu', meaning: 'to hang clothes to dry', hsk: 3, category: 'daily', examples: [{ cn: '晾衣服在外面。', en: 'Hang clothes outside.' }, { cn: '衣服还没干。', en: 'Clothes aren\'t dry yet.' }] },
        { id: 'vm013', character: '熨衣服', pinyin: 'yùn yīfu', meaning: 'to iron clothes', hsk: 3, category: 'daily', examples: [{ cn: '请熨衣服。', en: 'Please iron the clothes.' }, { cn: '衣服很皱，要熨。', en: 'Clothes are wrinkled, need ironing.' }] },
        { id: 'vm014', character: '叠衣服', pinyin: 'dié yīfu', meaning: 'to fold clothes', hsk: 3, category: 'daily', examples: [{ cn: '叠衣服放衣柜。', en: 'Fold clothes and put in wardrobe.' }, { cn: '请叠衣服。', en: 'Please fold the clothes.' }] },
        { id: 'vm015', character: '倒垃圾', pinyin: 'dào lājī', meaning: 'to take out trash', hsk: 3, category: 'daily', examples: [{ cn: '请倒垃圾。', en: 'Please take out the trash.' }, { cn: '垃圾满了。', en: 'The trash is full.' }] },

        // ============================
        // SHOPPING & MONEY
        // ============================
        { id: 'vm016', character: '购物', pinyin: 'gòuwù', meaning: 'to go shopping', hsk: 3, category: 'shopping', examples: [{ cn: '去购物。', en: 'Go shopping.' }, { cn: '网上购物。', en: 'Online shopping.' }] },
        { id: 'vm017', character: '打折', pinyin: 'dǎ zhé', meaning: 'discount', hsk: 3, category: 'shopping', examples: [{ cn: '打折了！', en: 'On sale!' }, { cn: '打八折。', en: '20% discount.' }] },
        { id: 'vm018', character: '便宜', pinyin: 'piányi', meaning: 'cheap', hsk: 2, category: 'shopping', examples: [{ cn: '很便宜。', en: 'Very cheap.' }, { cn: '便宜一点。', en: 'A little cheaper.' }] },
        { id: 'vm019', character: '贵', pinyin: 'guì', meaning: 'expensive', hsk: 2, category: 'shopping', examples: [{ cn: '太贵了！', en: 'Too expensive!' }, { cn: '不贵。', en: 'Not expensive.' }] },
        { id: 'vm020', character: '付款', pinyin: 'fùkuǎn', meaning: 'to pay', hsk: 3, category: 'shopping', examples: [{ cn: '请付款。', en: 'Please pay.' }, { cn: '在哪里付款？', en: 'Where to pay?' }] },
        { id: 'vm021', character: '找零', pinyin: 'zhǎo líng', meaning: 'change (money)', hsk: 3, category: 'shopping', examples: [{ cn: '找零多少钱？', en: 'How much change?' }, { cn: '不用找了。', en: 'Keep the change.' }] },
        { id: 'vm022', character: '收据', pinyin: 'shōujù', meaning: 'receipt', hsk: 3, category: 'shopping', examples: [{ cn: '请给我收据。', en: 'Please give me a receipt.' }, { cn: '收据在这里。', en: 'The receipt is here.' }] },
        { id: 'vm023', character: '退货', pinyin: 'tuì huò', meaning: 'to return goods', hsk: 3, category: 'shopping', examples: [{ cn: '我想退货。', en: 'I want to return this.' }, { cn: '可以退货吗？', en: 'Can I return it?' }] },
        { id: 'vm024', character: '换货', pinyin: 'huàn huò', meaning: 'to exchange goods', hsk: 3, category: 'shopping', examples: [{ cn: '可以换货吗？', en: 'Can I exchange it?' }, { cn: '换一个。', en: 'Exchange for another one.' }] },
        { id: 'vm025', character: '试穿', pinyin: 'shì chuān', meaning: 'to try on (clothes)', hsk: 3, category: 'shopping', examples: [{ cn: '可以试穿吗？', en: 'Can I try it on?' }, { cn: '试衣间在哪里？', en: 'Where is the fitting room?' }] },

        // ============================
        // FOOD & COOKING
        // ============================
        { id: 'vm026', character: '切', pinyin: 'qiē', meaning: 'to cut', hsk: 3, category: 'cooking', examples: [{ cn: '切菜。', en: 'Cut vegetables.' }, { cn: '切碎。', en: 'Cut into small pieces.' }] },
        { id: 'vm027', character: '炒', pinyin: 'chǎo', meaning: 'to stir-fry', hsk: 3, category: 'cooking', examples: [{ cn: '炒菜。', en: 'Stir-fry vegetables.' }, { cn: '炒饭。', en: 'Fried rice.' }] },
        { id: 'vm028', character: '煮', pinyin: 'zhǔ', meaning: 'to boil', hsk: 3, category: 'cooking', examples: [{ cn: '煮面条。', en: 'Boil noodles.' }, { cn: '煮汤。', en: 'Cook soup.' }] },
        { id: 'vm029', character: '蒸', pinyin: 'zhēng', meaning: 'to steam', hsk: 3, category: 'cooking', examples: [{ cn: '蒸包子。', en: 'Steam buns.' }, { cn: '蒸鱼。', en: 'Steam fish.' }] },
        { id: 'vm030', character: '烤', pinyin: 'kǎo', meaning: 'to roast/bake', hsk: 3, category: 'cooking', examples: [{ cn: '烤鸭。', en: 'Roast duck.' }, { cn: '烤面包。', en: 'Bake bread.' }] },
        { id: 'vm031', character: '炖', pinyin: 'dùn', meaning: 'to stew', hsk: 3, category: 'cooking', examples: [{ cn: '炖肉。', en: 'Stew meat.' }, { cn: '炖汤。', en: 'Stew soup.' }] },
        { id: 'vm032', character: '炸', pinyin: 'zhá', meaning: 'to deep-fry', hsk: 3, category: 'cooking', examples: [{ cn: '炸鸡。', en: 'Fried chicken.' }, { cn: '炸薯条。', en: 'French fries.' }] },
        { id: 'vm033', character: '拌', pinyin: 'bàn', meaning: 'to mix/toss', hsk: 3, category: 'cooking', examples: [{ cn: '拌沙拉。', en: 'Toss salad.' }, { cn: '凉拌菜。', en: 'Cold mixed vegetables.' }] },
        { id: 'vm034', character: '味道', pinyin: 'wèidào', meaning: 'taste/flavor', hsk: 3, category: 'food', examples: [{ cn: '味道很好。', en: 'Tastes very good.' }, { cn: '什么味道？', en: 'What flavor?' }] },
        { id: 'vm035', character: '甜', pinyin: 'tián', meaning: 'sweet', hsk: 2, category: 'food', examples: [{ cn: '很甜。', en: 'Very sweet.' }, { cn: '甜食。', en: 'Dessert.' }] },
        { id: 'vm036', character: '酸', pinyin: 'suān', meaning: 'sour', hsk: 2, category: 'food', examples: [{ cn: '很酸。', en: 'Very sour.' }, { cn: '酸奶。', en: 'Yogurt.' }] },
        { id: 'vm037', character: '苦', pinyin: 'kǔ', meaning: 'bitter', hsk: 2, category: 'food', examples: [{ cn: '很苦。', en: 'Very bitter.' }, { cn: '苦瓜。', en: 'Bitter melon.' }] },
        { id: 'vm038', character: '咸', pinyin: 'xián', meaning: 'salty', hsk: 2, category: 'food', examples: [{ cn: '太咸了。', en: 'Too salty.' }, { cn: '咸菜。', en: 'Pickled vegetables.' }] },
        { id: 'vm039', character: '辣', pinyin: 'là', meaning: 'spicy', hsk: 2, category: 'food', examples: [{ cn: '很辣！', en: 'Very spicy!' }, { cn: '辣酱。', en: 'Chili sauce.' }] },
        { id: 'vm040', character: '鲜', pinyin: 'xiān', meaning: 'fresh/savory', hsk: 3, category: 'food', examples: [{ cn: '很鲜。', en: 'Very fresh.' }, { cn: '新鲜。', en: 'Fresh.' }] },

        // ============================
        // BODY & HEALTH
        // ============================
        { id: 'vm041', character: '头疼', pinyin: 'tóuténg', meaning: 'headache', hsk: 2, category: 'health', examples: [{ cn: '我头疼。', en: 'I have a headache.' }, { cn: '头很疼。', en: 'Head hurts a lot.' }] },
        { id: 'vm042', character: '发烧', pinyin: 'fāshāo', meaning: 'fever', hsk: 2, category: 'health', examples: [{ cn: '发烧了。', en: 'Have a fever.' }, { cn: '量体温。', en: 'Take temperature.' }] },
        { id: 'vm043', character: '感冒', pinyin: 'gǎnmào', meaning: 'cold (illness)', hsk: 2, category: 'health', examples: [{ cn: '感冒了。', en: 'Caught a cold.' }, { cn: '吃感冒药。', en: 'Take cold medicine.' }] },
        { id: 'vm044', character: '咳嗽', pinyin: 'késou', meaning: 'to cough', hsk: 3, category: 'health', examples: [{ cn: '我咳嗽。', en: 'I\'m coughing.' }, { cn: '咳嗽很厉害。', en: 'Coughing badly.' }] },
        { id: 'vm045', character: '肚子疼', pinyin: 'dùzi téng', meaning: 'stomachache', hsk: 2, category: 'health', examples: [{ cn: '肚子疼。', en: 'Stomach hurts.' }, { cn: '吃坏肚子了。', en: 'Ate something bad.' }] },
        { id: 'vm046', character: '拉肚子', pinyin: 'lā dùzi', meaning: 'diarrhea', hsk: 3, category: 'health', examples: [{ cn: '拉肚子了。', en: 'Have diarrhea.' }, { cn: '吃药。', en: 'Take medicine.' }] },
        { id: 'vm047', character: '过敏', pinyin: 'guòmǐn', meaning: 'allergy', hsk: 3, category: 'health', examples: [{ cn: '我对花生过敏。', en: 'I\'m allergic to peanuts.' }, { cn: '过敏反应。', en: 'Allergic reaction.' }] },
        { id: 'vm048', character: '受伤', pinyin: 'shòushāng', meaning: 'injured', hsk: 3, category: 'health', examples: [{ cn: '受伤了。', en: 'Got injured.' }, { cn: '受伤很重。', en: 'Seriously injured.' }] },
        { id: 'vm049', character: '看病', pinyin: 'kàn bìng', meaning: 'to see a doctor', hsk: 2, category: 'health', examples: [{ cn: '去看病。', en: 'Go see a doctor.' }, { cn: '看病很贵。', en: 'Seeing a doctor is expensive.' }] },
        { id: 'vm050', character: '打针', pinyin: 'dǎ zhēn', meaning: 'to get an injection', hsk: 3, category: 'health', examples: [{ cn: '打针很疼。', en: 'Injections hurt.' }, { cn: '要打针。', en: 'Need an injection.' }] },
        { id: 'vm051', character: '吃药', pinyin: 'chī yào', meaning: 'to take medicine', hsk: 2, category: 'health', examples: [{ cn: '请吃药。', en: 'Please take medicine.' }, { cn: '吃药了吗？', en: 'Have you taken medicine?' }] },
        { id: 'vm052', character: '住院', pinyin: 'zhù yuàn', meaning: 'to be hospitalized', hsk: 3, category: 'health', examples: [{ cn: '住院了。', en: 'Hospitalized.' }, { cn: '住院三天。', en: 'In hospital for 3 days.' }] },
        { id: 'vm053', character: '手术', pinyin: 'shǒushù', meaning: 'surgery', hsk: 4, category: 'health', examples: [{ cn: '做手术。', en: 'Have surgery.' }, { cn: '手术很成功。', en: 'Surgery was successful.' }] },
        { id: 'vm054', character: '体检', pinyin: 'tǐjiǎn', meaning: 'physical examination', hsk: 3, category: 'health', examples: [{ cn: '每年体检。', en: 'Annual physical.' }, { cn: '体检结果。', en: 'Physical exam results.' }] },

        // ============================
        // WEATHER & NATURE
        // ============================
        { id: 'vm055', character: '晴天', pinyin: 'qíng tiān', meaning: 'sunny day', hsk: 2, category: 'weather', examples: [{ cn: '今天晴天。', en: 'Today is sunny.' }, { cn: '晴天很热。', en: 'Sunny days are hot.' }] },
        { id: 'vm056', character: '阴天', pinyin: 'yīn tiān', meaning: 'cloudy day', hsk: 2, category: 'weather', examples: [{ cn: '今天阴天。', en: 'Today is cloudy.' }, { cn: '阴天很闷。', en: 'Cloudy days are stuffy.' }] },
        { id: 'vm057', character: '下雨', pinyin: 'xià yǔ', meaning: 'to rain', hsk: 2, category: 'weather', examples: [{ cn: '下雨了。', en: 'It\'s raining.' }, { cn: '下大雨。', en: 'Heavy rain.' }] },
        { id: 'vm058', character: '下雪', pinyin: 'xià xuě', meaning: 'to snow', hsk: 2, category: 'weather', examples: [{ cn: '下雪了。', en: 'It\'s snowing.' }, { cn: '雪很大。', en: 'Heavy snow.' }] },
        { id: 'vm059', character: '刮风', pinyin: 'guā fēng', meaning: 'windy', hsk: 2, category: 'weather', examples: [{ cn: '刮风了。', en: 'It\'s windy.' }, { cn: '风很大。', en: 'Strong wind.' }] },
        { id: 'vm060', character: '打雷', pinyin: 'dǎ léi', meaning: 'thunder', hsk: 3, category: 'weather', examples: [{ cn: '打雷了。', en: 'Thunder.' }, { cn: '打雷下雨。', en: 'Thunder and rain.' }] },
        { id: 'vm061', character: '闪电', pinyin: 'shǎndiàn', meaning: 'lightning', hsk: 3, category: 'weather', examples: [{ cn: '闪电了。', en: 'Lightning.' }, { cn: '闪电很亮。', en: 'Bright lightning.' }] },
        { id: 'vm062', character: '彩虹', pinyin: 'cǎihóng', meaning: 'rainbow', hsk: 3, category: 'weather', examples: [{ cn: '有彩虹！', en: 'There\'s a rainbow!' }, { cn: '彩虹很美。', en: 'Rainbow is beautiful.' }] },
        { id: 'vm063', character: '雾', pinyin: 'wù', meaning: 'fog', hsk: 3, category: 'weather', examples: [{ cn: '有雾。', en: 'It\'s foggy.' }, { cn: '雾很大。', en: 'Thick fog.' }] },
        { id: 'vm064', character: '霜', pinyin: 'shuāng', meaning: 'frost', hsk: 3, category: 'weather', examples: [{ cn: '有霜。', en: 'There\'s frost.' }, { cn: '霜很冷。', en: 'Frost is cold.' }] },

        // ============================
        // TRANSPORTATION
        // ============================
        { id: 'vm065', character: '开车', pinyin: 'kāi chē', meaning: 'to drive', hsk: 2, category: 'transport', examples: [{ cn: '开车去。', en: 'Drive there.' }, { cn: '开车很累。', en: 'Driving is tiring.' }] },
        { id: 'vm066', character: '骑车', pinyin: 'qí chē', meaning: 'to ride (bicycle)', hsk: 2, category: 'transport', examples: [{ cn: '骑车去。', en: 'Ride a bike there.' }, { cn: '骑车很健康。', en: 'Cycling is healthy.' }] },
        { id: 'vm067', character: '坐车', pinyin: 'zuò chē', meaning: 'to take a vehicle', hsk: 2, category: 'transport', examples: [{ cn: '坐车去。', en: 'Take a vehicle.' }, { cn: '坐车很累。', en: 'Sitting in a car is tiring.' }] },
        { id: 'vm068', character: '等车', pinyin: 'děng chē', meaning: 'to wait for vehicle', hsk: 2, category: 'transport', examples: [{ cn: '等车。', en: 'Wait for the bus.' }, { cn: '等了很久。', en: 'Waited a long time.' }] },
        { id: 'vm069', character: '换车', pinyin: 'huàn chē', meaning: 'to transfer', hsk: 3, category: 'transport', examples: [{ cn: '在这里换车。', en: 'Transfer here.' }, { cn: '换乘地铁。', en: 'Transfer to subway.' }] },
        { id: 'vm070', character: '堵车', pinyin: 'dǔ chē', meaning: 'traffic jam', hsk: 3, category: 'transport', examples: [{ cn: '堵车了。', en: 'Traffic jam.' }, { cn: '堵车很严重。', en: 'Severe traffic.' }] },
        { id: 'vm071', character: '超车', pinyin: 'chāo chē', meaning: 'to overtake', hsk: 3, category: 'transport', examples: [{ cn: '不要超车。', en: 'Don\'t overtake.' }, { cn: '超车很危险。', en: 'Overtaking is dangerous.' }] },
        { id: 'vm072', character: '停车', pinyin: 'tíng chē', meaning: 'to park', hsk: 3, category: 'transport', examples: [{ cn: '停车。', en: 'Park the car.' }, { cn: '停车场在哪里？', en: 'Where is the parking lot?' }] },
        { id: 'vm073', character: '加油', pinyin: 'jiā yóu', meaning: 'to refuel', hsk: 3, category: 'transport', examples: [{ cn: '加油。', en: 'Refuel.' }, { cn: '加油站。', en: 'Gas station.' }] },
        { id: 'vm074', character: '修车', pinyin: 'xiū chē', meaning: 'to repair car', hsk: 3, category: 'transport', examples: [{ cn: '车坏了，要修车。', en: 'Car broken, need repair.' }, { cn: '修车很贵。', en: 'Car repair is expensive.' }] },

        // ============================
        // TECHNOLOGY
        // ============================
        { id: 'vm075', character: '上网', pinyin: 'shàng wǎng', meaning: 'to go online', hsk: 3, category: 'technology', examples: [{ cn: '上网查。', en: 'Search online.' }, { cn: '上网很方便。', en: 'Going online is convenient.' }] },
        { id: 'vm076', character: '下载', pinyin: 'xiàzǎi', meaning: 'to download', hsk: 3, category: 'technology', examples: [{ cn: '下载软件。', en: 'Download software.' }, { cn: '下载完了。', en: 'Download complete.' }] },
        { id: 'vm077', character: '上传', pinyin: 'shàngchuán', meaning: 'to upload', hsk: 3, category: 'technology', examples: [{ cn: '上传照片。', en: 'Upload photos.' }, { cn: '上传文件。', en: 'Upload files.' }] },
        { id: 'vm078', character: '发送', pinyin: 'fāsòng', meaning: 'to send', hsk: 3, category: 'technology', examples: [{ cn: '发送邮件。', en: 'Send email.' }, { cn: '发送消息。', en: 'Send message.' }] },
        { id: 'vm079', character: '接收', pinyin: 'jiēshōu', meaning: 'to receive', hsk: 3, category: 'technology', examples: [{ cn: '接收文件。', en: 'Receive files.' }, { cn: '接收信号。', en: 'Receive signal.' }] },
        { id: 'vm080', character: '删除', pinyin: 'shānchú', meaning: 'to delete', hsk: 3, category: 'technology', examples: [{ cn: '删除文件。', en: 'Delete file.' }, { cn: '删除照片。', en: 'Delete photos.' }] },
        { id: 'vm081', character: '保存', pinyin: 'bǎocún', meaning: 'to save', hsk: 3, category: 'technology', examples: [{ cn: '保存文件。', en: 'Save file.' }, { cn: '保存照片。', en: 'Save photos.' }] },
        { id: 'vm082', character: '复制', pinyin: 'fùzhì', meaning: 'to copy', hsk: 3, category: 'technology', examples: [{ cn: '复制粘贴。', en: 'Copy and paste.' }, { cn: '复制文件。', en: 'Copy file.' }] },
        { id: 'vm083', character: '粘贴', pinyin: 'zhāntiē', meaning: 'to paste', hsk: 3, category: 'technology', examples: [{ cn: '粘贴在这里。', en: 'Paste here.' }, { cn: '复制粘贴。', en: 'Copy and paste.' }] },
        { id: 'vm084', character: '打印', pinyin: 'dǎyìn', meaning: 'to print', hsk: 3, category: 'technology', examples: [{ cn: '打印文件。', en: 'Print file.' }, { cn: '打印出来。', en: 'Print out.' }] },
        { id: 'vm085', character: '充电', pinyin: 'chōngdiàn', meaning: 'to charge', hsk: 3, category: 'technology', examples: [{ cn: '充电。', en: 'Charge.' }, { cn: '手机要充电。', en: 'Phone needs charging.' }] },

        // ============================
        // WORK & BUSINESS
        // ============================
        { id: 'vm086', character: '开会', pinyin: 'kāi huì', meaning: 'to have a meeting', hsk: 3, category: 'work', examples: [{ cn: '开会了。', en: 'Meeting started.' }, { cn: '开会讨论。', en: 'Meeting to discuss.' }] },
        { id: 'vm087', character: '出差', pinyin: 'chū chāi', meaning: 'business trip', hsk: 3, category: 'work', examples: [{ cn: '出差了。', en: 'On a business trip.' }, { cn: '出差很累。', en: 'Business trips are tiring.' }] },
        { id: 'vm088', character: '加班', pinyin: 'jiā bān', meaning: 'to work overtime', hsk: 3, category: 'work', examples: [{ cn: '加班了。', en: 'Worked overtime.' }, { cn: '经常加班。', en: 'Often work overtime.' }] },
        { id: 'vm089', character: '请假', pinyin: 'qǐng jià', meaning: 'to ask for leave', hsk: 3, category: 'work', examples: [{ cn: '请假。', en: 'Ask for leave.' }, { cn: '请病假。', en: 'Sick leave.' }] },
        { id: 'vm090', character: '辞职', pinyin: 'cí zhí', meaning: 'to resign', hsk: 4, category: 'work', examples: [{ cn: '辞职了。', en: 'Resigned.' }, { cn: '想辞职。', en: 'Want to resign.' }] },
        { id: 'vm091', character: '招聘', pinyin: 'zhāopìn', meaning: 'to recruit', hsk: 4, category: 'work', examples: [{ cn: '招聘员工。', en: 'Recruit employees.' }, { cn: '招聘信息。', en: 'Recruitment info.' }] },
        { id: 'vm092', character: '面试', pinyin: 'miànshì', meaning: 'interview', hsk: 4, category: 'work', examples: [{ cn: '去面试。', en: 'Go to interview.' }, { cn: '面试很紧张。', en: 'Interview is nerve-wracking.' }] },
        { id: 'vm093', character: '工资', pinyin: 'gōngzī', meaning: 'salary', hsk: 3, category: 'work', examples: [{ cn: '发工资。', en: 'Get paid.' }, { cn: '工资很高。', en: 'High salary.' }] },
        { id: 'vm094', character: '奖金', pinyin: 'jiǎngjīn', meaning: 'bonus', hsk: 4, category: 'work', examples: [{ cn: '发奖金。', en: 'Get bonus.' }, { cn: '年终奖金。', en: 'Year-end bonus.' }] },
        { id: 'vm095', character: '升职', pinyin: 'shēng zhí', meaning: 'promotion', hsk: 4, category: 'work', examples: [{ cn: '升职了。', en: 'Got promoted.' }, { cn: '想升职。', en: 'Want promotion.' }] },

        // ============================
        // EDUCATION
        // ============================
        { id: 'vm096', character: '上课', pinyin: 'shàng kè', meaning: 'to attend class', hsk: 2, category: 'education', examples: [{ cn: '上课了。', en: 'Class started.' }, { cn: '上课很认真。', en: 'Attend class seriously.' }] },
        { id: 'vm097', character: '下课', pinyin: 'xià kè', meaning: 'class ends', hsk: 2, category: 'education', examples: [{ cn: '下课了。', en: 'Class is over.' }, { cn: '下课后做什么？', en: 'What to do after class?' }] },
        { id: 'vm098', character: '考试', pinyin: 'kǎoshì', meaning: 'exam', hsk: 2, category: 'education', examples: [{ cn: '考试了。', en: 'Exam time.' }, { cn: '考试很难。', en: 'Exam is difficult.' }] },
        { id: 'vm099', character: '作业', pinyin: 'zuòyè', meaning: 'homework', hsk: 2, category: 'education', examples: [{ cn: '做作业。', en: 'Do homework.' }, { cn: '作业很多。', en: 'A lot of homework.' }] },
        { id: 'vm100', character: '毕业', pinyin: 'bìyè', meaning: 'to graduate', hsk: 3, category: 'education', examples: [{ cn: '毕业了。', en: 'Graduated.' }, { cn: '大学毕业。', en: 'College graduation.' }] },
        { id: 'vm101', character: '开学', pinyin: 'kāi xué', meaning: 'school starts', hsk: 3, category: 'education', examples: [{ cn: '开学了。', en: 'School started.' }, { cn: '什么时候开学？', en: 'When does school start?' }] },
        { id: 'vm102', character: '放假', pinyin: 'fàng jià', meaning: 'holiday/vacation', hsk: 3, category: 'education', examples: [{ cn: '放假了！', en: 'Holiday!' }, { cn: '放几天假？', en: 'How many days off?' }] },
        { id: 'vm103', character: '补课', pinyin: 'bǔ kè', meaning: 'makeup class', hsk: 3, category: 'education', examples: [{ cn: '要补课。', en: 'Need makeup class.' }, { cn: '补课很累。', en: 'Makeup classes are tiring.' }] },
        { id: 'vm104', character: '复习', pinyin: 'fùxí', meaning: 'to review', hsk: 3, category: 'education', examples: [{ cn: '复习功课。', en: 'Review lessons.' }, { cn: '考试前复习。', en: 'Review before exam.' }] },
        { id: 'vm105', character: '预习', pinyin: 'yùxí', meaning: 'to preview', hsk: 3, category: 'education', examples: [{ cn: '预习新课。', en: 'Preview new lesson.' }, { cn: '预习很重要。', en: 'Previewing is important.' }] },

        // ============================
        // EMOTIONS & FEELINGS
        // ============================
        { id: 'vm106', character: '开心', pinyin: 'kāixīn', meaning: 'happy', hsk: 2, category: 'emotions', examples: [{ cn: '很开心。', en: 'Very happy.' }, { cn: '不开心。', en: 'Unhappy.' }] },
        { id: 'vm107', character: '难过', pinyin: 'nánguò', meaning: 'sad', hsk: 3, category: 'emotions', examples: [{ cn: '很难过。', en: 'Very sad.' }, { cn: '不要难过。', en: 'Don\'t be sad.' }] },
        { id: 'vm108', character: '生气', pinyin: 'shēngqì', meaning: 'angry', hsk: 3, category: 'emotions', examples: [{ cn: '很生气。', en: 'Very angry.' }, { cn: '不要生气。', en: 'Don\'t be angry.' }] },
        { id: 'vm109', character: '害怕', pinyin: 'hàipà', meaning: 'afraid', hsk: 3, category: 'emotions', examples: [{ cn: '很害怕。', en: 'Very afraid.' }, { cn: '不要害怕。', en: 'Don\'t be afraid.' }] },
        { id: 'vm110', character: '紧张', pinyin: 'jǐnzhāng', meaning: 'nervous', hsk: 3, category: 'emotions', examples: [{ cn: '很紧张。', en: 'Very nervous.' }, { cn: '不要紧张。', en: 'Don\'t be nervous.' }] },
        { id: 'vm111', character: '担心', pinyin: 'dānxīn', meaning: 'worried', hsk: 3, category: 'emotions', examples: [{ cn: '很担心。', en: 'Very worried.' }, { cn: '不用担心。', en: 'Don\'t worry.' }] },
        { id: 'vm112', character: '失望', pinyin: 'shīwàng', meaning: 'disappointed', hsk: 3, category: 'emotions', examples: [{ cn: '很失望。', en: 'Very disappointed.' }, { cn: '不要失望。', en: 'Don\'t be disappointed.' }] },
        { id: 'vm113', character: '惊讶', pinyin: 'jīngyà', meaning: 'surprised', hsk: 3, category: 'emotions', examples: [{ cn: '很惊讶。', en: 'Very surprised.' }, { cn: '太惊讶了！', en: 'Too surprised!' }] },
        { id: 'vm114', character: '无聊', pinyin: 'wúliáo', meaning: 'bored', hsk: 3, category: 'emotions', examples: [{ cn: '很无聊。', en: 'Very bored.' }, { cn: '无聊的时候做什么？', en: 'What to do when bored?' }] },
        { id: 'vm115', character: '累', pinyin: 'lèi', meaning: 'tired', hsk: 2, category: 'emotions', examples: [{ cn: '很累。', en: 'Very tired.' }, { cn: '累了就休息。', en: 'Rest when tired.' }] },
        { id: 'vm116', character: '饿', pinyin: 'è', meaning: 'hungry', hsk: 2, category: 'emotions', examples: [{ cn: '很饿。', en: 'Very hungry.' }, { cn: '饿了吗？', en: 'Are you hungry?' }] },
        { id: 'vm117', character: '渴', pinyin: 'kě', meaning: 'thirsty', hsk: 2, category: 'emotions', examples: [{ cn: '很渴。', en: 'Very thirsty.' }, { cn: '渴了喝水。', en: 'Drink water when thirsty.' }] },
        { id: 'vm118', character: '困', pinyin: 'kùn', meaning: 'sleepy', hsk: 2, category: 'emotions', examples: [{ cn: '很困。', en: 'Very sleepy.' }, { cn: '困了就睡。', en: 'Sleep when sleepy.' }] },
        { id: 'vm119', character: '舒服', pinyin: 'shūfu', meaning: 'comfortable', hsk: 2, category: 'emotions', examples: [{ cn: '很舒服。', en: 'Very comfortable.' }, { cn: '不舒服。', en: 'Uncomfortable.' }] },
        { id: 'vm120', character: '难受', pinyin: 'nánshòu', meaning: 'uncomfortable/unwell', hsk: 3, category: 'emotions', examples: [{ cn: '很难受。', en: 'Feeling unwell.' }, { cn: '心里难受。', en: 'Feeling upset.' }] },

        // ============================
        // TIME & SCHEDULE
        // ============================
        { id: 'vm121', character: '上午', pinyin: 'shàngwǔ', meaning: 'morning', hsk: 2, category: 'time', examples: [{ cn: '上午好。', en: 'Good morning.' }, { cn: '上午开会。', en: 'Meeting in the morning.' }] },
        { id: 'vm122', character: '中午', pinyin: 'zhōngwǔ', meaning: 'noon', hsk: 2, category: 'time', examples: [{ cn: '中午吃饭。', en: 'Eat lunch at noon.' }, { cn: '中午休息。', en: 'Rest at noon.' }] },
        { id: 'vm123', character: '下午', pinyin: 'xiàwǔ', meaning: 'afternoon', hsk: 2, category: 'time', examples: [{ cn: '下午好。', en: 'Good afternoon.' }, { cn: '下午开会。', en: 'Meeting in the afternoon.' }] },
        { id: 'vm124', character: '傍晚', pinyin: 'bàngwǎn', meaning: 'evening/dusk', hsk: 3, category: 'time', examples: [{ cn: '傍晚散步。', en: 'Take a walk at dusk.' }, { cn: '傍晚很美。', en: 'Evening is beautiful.' }] },
        { id: 'vm125', character: '半夜', pinyin: 'bànyè', meaning: 'midnight', hsk: 3, category: 'time', examples: [{ cn: '半夜醒来。', en: 'Wake up at midnight.' }, { cn: '半夜很安静。', en: 'Midnight is quiet.' }] },
        { id: 'vm126', character: '以前', pinyin: 'yǐqián', meaning: 'before', hsk: 2, category: 'time', examples: [{ cn: '以前。', en: 'Before.' }, { cn: '以前不知道。', en: 'Didn\'t know before.' }] },
        { id: 'vm127', character: '以后', pinyin: 'yǐhòu', meaning: 'after', hsk: 2, category: 'time', examples: [{ cn: '以后再说。', en: 'Talk about it later.' }, { cn: '以后会好的。', en: 'It will be better later.' }] },
        { id: 'vm128', character: '刚才', pinyin: 'gāngcái', meaning: 'just now', hsk: 3, category: 'time', examples: [{ cn: '刚才。', en: 'Just now.' }, { cn: '刚才发生了什么？', en: 'What happened just now?' }] },
        { id: 'vm129', character: '马上', pinyin: 'mǎshàng', meaning: 'immediately', hsk: 3, category: 'time', examples: [{ cn: '马上来。', en: 'Coming right away.' }, { cn: '马上就好。', en: 'Almost done.' }] },
        { id: 'vm130', character: '暂时', pinyin: 'zànshí', meaning: 'temporarily', hsk: 4, category: 'time', examples: [{ cn: '暂时不行。', en: 'Not possible for now.' }, { cn: '暂时这样。', en: 'For now, it\'s like this.' }] },

        // ============================
        // PLACES & LOCATIONS
        // ============================
        { id: 'vm131', character: '附近', pinyin: 'fùjìn', meaning: 'nearby', hsk: 3, category: 'places', examples: [{ cn: '附近有商店。', en: 'There\'s a store nearby.' }, { cn: '就在附近。', en: 'It\'s nearby.' }] },
        { id: 'vm132', character: '对面', pinyin: 'duìmiàn', meaning: 'opposite', hsk: 3, category: 'places', examples: [{ cn: '在对面。', en: 'Across the street.' }, { cn: '对面是银行。', en: 'Bank is across the street.' }] },
        { id: 'vm133', character: '旁边', pinyin: 'pángbiān', meaning: 'beside', hsk: 3, category: 'places', examples: [{ cn: '在旁边。', en: 'Beside.' }, { cn: '学校旁边。', en: 'Beside the school.' }] },
        { id: 'vm134', character: '中间', pinyin: 'zhōngjiān', meaning: 'middle', hsk: 3, category: 'places', examples: [{ cn: '在中间。', en: 'In the middle.' }, { cn: '站在中间。', en: 'Stand in the middle.' }] },
        { id: 'vm135', character: '里面', pinyin: 'lǐmiàn', meaning: 'inside', hsk: 2, category: 'places', examples: [{ cn: '在里面。', en: 'Inside.' }, { cn: '房子里面。', en: 'Inside the house.' }] },
        { id: 'vm136', character: '外面', pinyin: 'wàimiàn', meaning: 'outside', hsk: 2, category: 'places', examples: [{ cn: '在外面。', en: 'Outside.' }, { cn: '外面很冷。', en: 'It\'s cold outside.' }] },
        { id: 'vm137', character: '楼上', pinyin: 'lóushàng', meaning: 'upstairs', hsk: 3, category: 'places', examples: [{ cn: '在楼上。', en: 'Upstairs.' }, { cn: '楼上很安静。', en: 'Upstairs is quiet.' }] },
        { id: 'vm138', character: '楼下', pinyin: 'lóuxià', meaning: 'downstairs', hsk: 3, category: 'places', examples: [{ cn: '在楼下。', en: 'Downstairs.' }, { cn: '楼下有商店。', en: 'Store downstairs.' }] },
        { id: 'vm139', character: '左边', pinyin: 'zuǒbiān', meaning: 'left side', hsk: 2, category: 'places', examples: [{ cn: '在左边。', en: 'On the left.' }, { cn: '左边是银行。', en: 'Bank is on the left.' }] },
        { id: 'vm140', character: '右边', pinyin: 'yòubiān', meaning: 'right side', hsk: 2, category: 'places', examples: [{ cn: '在右边。', en: 'On the right.' }, { cn: '右边是商店。', en: 'Store is on the right.' }] },

        // ============================
        // COMMUNICATION
        // ============================
        { id: 'vm141', character: '打电话', pinyin: 'dǎ diànhuà', meaning: 'to make a call', hsk: 2, category: 'communication', examples: [{ cn: '打电话。', en: 'Make a call.' }, { cn: '打电话给我。', en: 'Call me.' }] },
        { id: 'vm142', character: '接电话', pinyin: 'jiē diànhuà', meaning: 'to answer phone', hsk: 3, category: 'communication', examples: [{ cn: '接电话。', en: 'Answer the phone.' }, { cn: '没接电话。', en: 'Didn\'t answer.' }] },
        { id: 'vm143', character: '发短信', pinyin: 'fā duǎnxìn', meaning: 'to send text', hsk: 3, category: 'communication', examples: [{ cn: '发短信。', en: 'Send text message.' }, { cn: '发短信给我。', en: 'Text me.' }] },
        { id: 'vm144', character: '发邮件', pinyin: 'fā yóujiàn', meaning: 'to send email', hsk: 3, category: 'communication', examples: [{ cn: '发邮件。', en: 'Send email.' }, { cn: '发邮件给你。', en: 'Email you.' }] },
        { id: 'vm145', character: '聊天', pinyin: 'liáotiān', meaning: 'to chat', hsk: 3, category: 'communication', examples: [{ cn: '聊天。', en: 'Chat.' }, { cn: '一起聊天。', en: 'Chat together.' }] },
        { id: 'vm146', character: '见面', pinyin: 'jiànmiàn', meaning: 'to meet', hsk: 3, category: 'communication', examples: [{ cn: '见面。', en: 'Meet.' }, { cn: '什么时候见面？', en: 'When to meet?' }] },
        { id: 'vm147', character: '约会', pinyin: 'yuēhuì', meaning: 'date/appointment', hsk: 3, category: 'communication', examples: [{ cn: '约会。', en: 'Date.' }, { cn: '有约会。', en: 'Have a date.' }] },
        { id: 'vm148', character: '介绍', pinyin: 'jièshào', meaning: 'to introduce', hsk: 3, category: 'communication', examples: [{ cn: '自我介绍。', en: 'Self introduction.' }, { cn: '介绍一下。', en: 'Introduce.' }] },
        { id: 'vm149', character: '解释', pinyin: 'jiěshì', meaning: 'to explain', hsk: 3, category: 'communication', examples: [{ cn: '解释一下。', en: 'Explain.' }, { cn: '请解释。', en: 'Please explain.' }] },
        { id: 'vm150', character: '道歉', pinyin: 'dàoqiàn', meaning: 'to apologize', hsk: 3, category: 'communication', examples: [{ cn: '道歉。', en: 'Apologize.' }, { cn: '向你道歉。', en: 'Apologize to you.' }] },

        // ============================
        // ADDITIONAL COMMON WORDS
        // ============================
        { id: 'vm151', character: '虽然', pinyin: 'suīrán', meaning: 'although', hsk: 3, category: 'grammar', examples: [{ cn: '虽然很难，但是...', en: 'Although difficult, but...' }] },
        { id: 'vm152', character: '但是', pinyin: 'dànshì', meaning: 'but', hsk: 2, category: 'grammar', examples: [{ cn: '虽然...但是...', en: 'Although...but...' }] },
        { id: 'vm153', character: '因为', pinyin: 'yīnwèi', meaning: 'because', hsk: 2, category: 'grammar', examples: [{ cn: '因为下雨。', en: 'Because it\'s raining.' }] },
        { id: 'vm154', character: '所以', pinyin: 'suǒyǐ', meaning: 'so/therefore', hsk: 2, category: 'grammar', examples: [{ cn: '所以我不去。', en: 'So I won\'t go.' }] },
        { id: 'vm155', character: '如果', pinyin: 'rúguǒ', meaning: 'if', hsk: 3, category: 'grammar', examples: [{ cn: '如果可以的话...', en: 'If possible...' }] },
        { id: 'vm156', character: '不但', pinyin: 'búdàn', meaning: 'not only', hsk: 4, category: 'grammar', examples: [{ cn: '不但...而且...', en: 'Not only...but also...' }] },
        { id: 'vm157', character: '而且', pinyin: 'érqiě', meaning: 'and also', hsk: 4, category: 'grammar', examples: [{ cn: '不但...而且...', en: 'Not only...but also...' }] },
        { id: 'vm158', character: '虽然', pinyin: 'suīrán', meaning: 'although', hsk: 3, category: 'grammar', examples: [{ cn: '虽然很累，但是很开心。', en: 'Although tired, but happy.' }] },
        { id: 'vm159', character: '即使', pinyin: 'jíshǐ', meaning: 'even if', hsk: 4, category: 'grammar', examples: [{ cn: '即使下雨，我也去。', en: 'Even if it rains, I\'ll go.' }] },
        { id: 'vm160', character: '无论', pinyin: 'wúlùn', meaning: 'no matter', hsk: 4, category: 'grammar', examples: [{ cn: '无论怎样...', en: 'No matter what...' }] },
        { id: 'vm161', character: '只要', pinyin: 'zhǐyào', meaning: 'as long as', hsk: 4, category: 'grammar', examples: [{ cn: '只要努力...', en: 'As long as you work hard...' }] },
        { id: 'vm162', character: '只有', pinyin: 'zhǐyǒu', meaning: 'only if', hsk: 4, category: 'grammar', examples: [{ cn: '只有这样...', en: 'Only this way...' }] },
        { id: 'vm163', character: '既然', pinyin: 'jìrán', meaning: 'since', hsk: 4, category: 'grammar', examples: [{ cn: '既然如此...', en: 'Since this is the case...' }] },
        { id: 'vm164', character: '除非', pinyin: 'chúfēi', meaning: 'unless', hsk: 4, category: 'grammar', examples: [{ cn: '除非...', en: 'Unless...' }] },
        { id: 'vm165', character: '尽管', pinyin: 'jǐnguǎn', meaning: 'despite', hsk: 4, category: 'grammar', examples: [{ cn: '尽管如此...', en: 'Despite this...' }] },
        { id: 'vm166', character: '不仅', pinyin: 'bùjǐn', meaning: 'not only', hsk: 4, category: 'grammar', examples: [{ cn: '不仅...而且...', en: 'Not only...but also...' }] },
        { id: 'vm167', character: '何况', pinyin: 'hékuàng', meaning: 'let alone', hsk: 4, category: 'grammar', examples: [{ cn: '何况...', en: 'Let alone...' }] },
        { id: 'vm168', character: '与其', pinyin: 'yǔqí', meaning: 'rather than', hsk: 4, category: 'grammar', examples: [{ cn: '与其...不如...', en: 'Rather than...better to...' }] },
        { id: 'vm169', character: '宁可', pinyin: 'nìngkě', meaning: 'would rather', hsk: 4, category: 'grammar', examples: [{ cn: '宁可...也不...', en: 'Would rather...than...' }] },
        { id: 'vm170', character: '以便', pinyin: 'yǐbiàn', meaning: 'so that', hsk: 4, category: 'grammar', examples: [{ cn: '...以便...', en: '...so that...' }] },
        { id: 'vm171', character: '万一', pinyin: 'wànyī', meaning: 'in case', hsk: 4, category: 'grammar', examples: [{ cn: '万一...', en: 'In case...' }] },
        { id: 'vm172', character: '总之', pinyin: 'zǒngzhī', meaning: 'in short', hsk: 4, category: 'grammar', examples: [{ cn: '总之...', en: 'In short...' }] },
        { id: 'vm173', character: '看来', pinyin: 'kànlái', meaning: 'it seems', hsk: 4, category: 'grammar', examples: [{ cn: '看来...', en: 'It seems...' }] },
        { id: 'vm174', character: '据说', pinyin: 'jùshuō', meaning: 'it is said', hsk: 4, category: 'grammar', examples: [{ cn: '据说...', en: 'It is said...' }] },
        { id: 'vm175', character: '毕竟', pinyin: 'bìjìng', meaning: 'after all', hsk: 4, category: 'grammar', examples: [{ cn: '毕竟...', en: 'After all...' }] },
        { id: 'vm176', character: '竟然', pinyin: 'jìngrán', meaning: 'unexpectedly', hsk: 4, category: 'grammar', examples: [{ cn: '竟然...', en: 'Unexpectedly...' }] },
        { id: 'vm177', character: '简直', pinyin: 'jiǎnzhí', meaning: 'simply', hsk: 4, category: 'grammar', examples: [{ cn: '简直...', en: 'Simply...' }] },
        { id: 'vm178', character: '几乎', pinyin: 'jīhū', meaning: 'almost', hsk: 4, category: 'grammar', examples: [{ cn: '几乎...', en: 'Almost...' }] },
        { id: 'vm179', character: '逐渐', pinyin: 'zhújiàn', meaning: 'gradually', hsk: 4, category: 'grammar', examples: [{ cn: '逐渐...', en: 'Gradually...' }] },
        { id: 'vm180', character: '稍微', pinyin: 'shāowēi', meaning: 'slightly', hsk: 4, category: 'grammar', examples: [{ cn: '稍微...', en: 'Slightly...' }] },
        { id: 'vm181', character: '相当', pinyin: 'xiāngdāng', meaning: 'quite/rather', hsk: 4, category: 'grammar', examples: [{ cn: '相当...', en: 'Quite...' }] },
        { id: 'vm182', character: '格外', pinyin: 'géwài', meaning: 'especially', hsk: 4, category: 'grammar', examples: [{ cn: '格外...', en: 'Especially...' }] },
        { id: 'vm183', character: '十分', pinyin: 'shífēn', meaning: 'very', hsk: 4, category: 'grammar', examples: [{ cn: '十分...', en: 'Very...' }] },
        { id: 'vm184', character: '极了', pinyin: 'jí le', meaning: 'extremely', hsk: 3, category: 'grammar', examples: [{ cn: '好极了！', en: 'Excellent!' }] },
        { id: 'vm185', character: '得多', pinyin: 'de duō', meaning: 'much more', hsk: 3, category: 'grammar', examples: [{ cn: '好得多。', en: 'Much better.' }] },
        { id: 'vm186', character: '多了', pinyin: 'duō le', meaning: 'much more', hsk: 3, category: 'grammar', examples: [{ cn: '好多了。', en: 'Much better.' }] },
        { id: 'vm187', character: '透了', pinyin: 'tòu le', meaning: 'extremely', hsk: 3, category: 'grammar', examples: [{ cn: '坏透了。', en: 'Extremely bad.' }] },
        { id: 'vm188', character: '死了', pinyin: 'sǐ le', meaning: 'extremely', hsk: 3, category: 'grammar', examples: [{ cn: '热死了。', en: 'Extremely hot.' }] },
        { id: 'vm189', character: '坏了', pinyin: 'huài le', meaning: 'extremely', hsk: 3, category: 'grammar', examples: [{ cn: '急坏了。', en: 'Extremely anxious.' }] },
        { id: 'vm190', character: '不得了', pinyin: 'bù dé liǎo', meaning: 'extremely', hsk: 3, category: 'grammar', examples: [{ cn: '不得了！', en: 'Incredible!' }] },
        { id: 'vm191', character: '了不起', pinyin: 'liǎobuqǐ', meaning: 'amazing', hsk: 3, category: 'grammar', examples: [{ cn: '了不起！', en: 'Amazing!' }] },
        { id: 'vm192', character: '不在乎', pinyin: 'bù zàihu', meaning: 'don\'t care', hsk: 3, category: 'grammar', examples: [{ cn: '不在乎。', en: 'Don\'t care.' }] },
        { id: 'vm193', character: '来不及', pinyin: 'lái bu jí', meaning: 'too late', hsk: 3, category: 'grammar', examples: [{ cn: '来不及了！', en: 'Too late!' }] },
        { id: 'vm194', character: '来得及', pinyin: 'lái de jí', meaning: 'in time', hsk: 3, category: 'grammar', examples: [{ cn: '还来得及。', en: 'Still in time.' }] },
        { id: 'vm195', character: '忍不住', pinyin: 'rěn bu zhù', meaning: 'can\'t help', hsk: 3, category: 'grammar', examples: [{ cn: '忍不住笑了。', en: 'Couldn\'t help laughing.' }] },
        { id: 'vm196', character: '说不定', pinyin: 'shuō bu dìng', meaning: 'maybe', hsk: 3, category: 'grammar', examples: [{ cn: '说不定...', en: 'Maybe...' }] },
        { id: 'vm197', character: '不一定', pinyin: 'bù yīdìng', meaning: 'not necessarily', hsk: 3, category: 'grammar', examples: [{ cn: '不一定。', en: 'Not necessarily.' }] },
        { id: 'vm198', character: '不好意思', pinyin: 'bù hǎoyìsi', meaning: 'embarrassed', hsk: 3, category: 'grammar', examples: [{ cn: '不好意思。', en: 'I\'m embarrassed.' }] },
        { id: 'vm199', character: '没办法', pinyin: 'méi bànfǎ', meaning: 'no way', hsk: 3, category: 'grammar', examples: [{ cn: '没办法。', en: 'No way.' }] },
        { id: 'vm200', character: '无所谓', pinyin: 'wúsuǒwèi', meaning: 'doesn\'t matter', hsk: 4, category: 'grammar', examples: [{ cn: '无所谓。', en: 'Doesn\'t matter.' }] }
    ],

    get count() { return this.words.length; },
    getById(id) { return this.words.find(w => w.id === id); },
    getByCategory(category) { return this.words.filter(w => w.category === category); },
    getRandom(count = 10) { return Utils.randomItems(this.words, count); },
    search(query) {
        const q = query.toLowerCase();
        return this.words.filter(w =>
            w.character.includes(query) ||
            w.pinyin.toLowerCase().includes(q) ||
            w.meaning.toLowerCase().includes(q)
        );
    }
};

window.VocabularyMega = VocabularyMega;

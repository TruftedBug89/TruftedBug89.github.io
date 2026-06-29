// ============================================
// CHINESE MASTER - DAILY LIFE VOCABULARY
// 150+ Daily Life Words with Examples
// ALL SIMPLIFIED CHINESE - Verified Pinyin
// ============================================

const TopicDaily = {
    words: [
        // MORNING ROUTINE
        { id: 'dl001', character: '起床', pinyin: 'qǐ chuáng', meaning: 'get up', examples: [{ cn: '起床了！', en: 'Get up!' }, { cn: '七点起床。', en: 'Get up at 7.' }] },
        { id: 'dl002', character: '刷牙', pinyin: 'shuā yá', meaning: 'brush teeth', examples: [{ cn: '刷牙。', en: 'Brush teeth.' }, { cn: '每天刷牙。', en: 'Brush teeth every day.' }] },
        { id: 'dl003', character: '洗脸', pinyin: 'xǐ liǎn', meaning: 'wash face', examples: [{ cn: '洗脸。', en: 'Wash face.' }, { cn: '用热水洗脸。', en: 'Wash face with hot water.' }] },
        { id: 'dl004', character: '洗澡', pinyin: 'xǐ zǎo', meaning: 'take shower', examples: [{ cn: '洗澡。', en: 'Take a shower.' }, { cn: '每天洗澡。', en: 'Shower every day.' }] },
        { id: 'dl005', character: '穿衣服', pinyin: 'chuān yī fu', meaning: 'get dressed', examples: [{ cn: '穿衣服。', en: 'Get dressed.' }, { cn: '穿什么衣服？', en: 'What to wear?' }] },
        { id: 'dl006', character: '梳头', pinyin: 'shū tóu', meaning: 'comb hair', examples: [{ cn: '梳头。', en: 'Comb hair.' }, { cn: '梳头发。', en: 'Comb hair.' }] },
        { id: 'dl007', character: '化妆', pinyin: 'huà zhuāng', meaning: 'put on makeup', examples: [{ cn: '化妆。', en: 'Put on makeup.' }, { cn: '化妆很麻烦。', en: 'Makeup is troublesome.' }] },
        { id: 'dl008', character: '吃早饭', pinyin: 'chī zǎo fàn', meaning: 'eat breakfast', examples: [{ cn: '吃早饭。', en: 'Eat breakfast.' }, { cn: '吃早饭了吗？', en: 'Had breakfast?' }] },
        { id: 'dl009', character: '出门', pinyin: 'chū mén', meaning: 'go out', examples: [{ cn: '出门了。', en: 'Going out.' }, { cn: '快出门。', en: 'Hurry out.' }] },
        { id: 'dl010', character: '上班', pinyin: 'shàng bān', meaning: 'go to work', examples: [{ cn: '上班。', en: 'Go to work.' }, { cn: '八点上班。', en: 'Work starts at 8.' }] },

        // WORK & OFFICE
        { id: 'dl011', character: '下班', pinyin: 'xià bān', meaning: 'get off work', examples: [{ cn: '下班了。', en: 'Off work.' }, { cn: '五点下班。', en: 'Off work at 5.' }] },
        { id: 'dl012', character: '加班', pinyin: 'jiā bān', meaning: 'work overtime', examples: [{ cn: '加班。', en: 'Work overtime.' }, { cn: '今天要加班。', en: 'Need to work overtime today.' }] },
        { id: 'dl013', character: '开会', pinyin: 'kāi huì', meaning: 'have meeting', examples: [{ cn: '开会。', en: 'Have a meeting.' }, { cn: '下午开会。', en: 'Meeting in the afternoon.' }] },
        { id: 'dl014', character: '打电话', pinyin: 'dǎ diàn huà', meaning: 'make a call', examples: [{ cn: '打电话。', en: 'Make a call.' }, { cn: '打电话给我。', en: 'Call me.' }] },
        { id: 'dl015', character: '发邮件', pinyin: 'fā yóu jiàn', meaning: 'send email', examples: [{ cn: '发邮件。', en: 'Send email.' }, { cn: '发邮件给你。', en: 'Email you.' }] },
        { id: 'dl016', character: '电脑', pinyin: 'diàn nǎo', meaning: 'computer', examples: [{ cn: '用电脑。', en: 'Use computer.' }, { cn: '电脑坏了。', en: 'Computer broken.' }] },
        { id: 'dl017', character: '打印机', pinyin: 'dǎ yìn jī', meaning: 'printer', examples: [{ cn: '用打印机。', en: 'Use printer.' }, { cn: '打印机没墨了。', en: 'Printer out of ink.' }] },
        { id: 'dl018', character: '文件', pinyin: 'wén jiàn', meaning: 'document', examples: [{ cn: '看文件。', en: 'Read document.' }, { cn: '发文件。', en: 'Send document.' }] },
        { id: 'dl019', character: '签字', pinyin: 'qiān zì', meaning: 'sign', examples: [{ cn: '请签字。', en: 'Please sign.' }, { cn: '在这里签字。', en: 'Sign here.' }] },
        { id: 'dl020', character: '请假', pinyin: 'qǐng jià', meaning: 'ask for leave', examples: [{ cn: '请假。', en: 'Ask for leave.' }, { cn: '请病假。', en: 'Sick leave.' }] },

        // SHOPPING
        { id: 'dl021', character: '超市', pinyin: 'chāo shì', meaning: 'supermarket', examples: [{ cn: '去超市。', en: 'Go to supermarket.' }, { cn: '超市买东西。', en: 'Shop at supermarket.' }] },
        { id: 'dl022', character: '商店', pinyin: 'shāng diàn', meaning: 'store', examples: [{ cn: '去商店。', en: 'Go to store.' }, { cn: '商店很大。', en: 'Store is big.' }] },
        { id: 'dl023', character: '买菜', pinyin: 'mǎi cài', meaning: 'buy groceries', examples: [{ cn: '买菜。', en: 'Buy groceries.' }, { cn: '去市场买菜。', en: 'Go to market for groceries.' }] },
        { id: 'dl024', character: '购物', pinyin: 'gòu wù', meaning: 'shopping', examples: [{ cn: '去购物。', en: 'Go shopping.' }, { cn: '网上购物。', en: 'Online shopping.' }] },
        { id: 'dl025', character: '排队', pinyin: 'pái duì', meaning: 'queue', examples: [{ cn: '排队。', en: 'Queue up.' }, { cn: '排队很长。', en: 'Long queue.' }] },
        { id: 'dl026', character: '打折', pinyin: 'dǎ zhé', meaning: 'discount', examples: [{ cn: '打折了！', en: 'On sale!' }, { cn: '打八折。', en: '20% off.' }] },
        { id: 'dl027', character: '便宜', pinyin: 'pián yi', meaning: 'cheap', examples: [{ cn: '很便宜。', en: 'Very cheap.' }, { cn: '便宜一点。', en: 'Cheaper.' }] },
        { id: 'dl028', character: '贵', pinyin: 'guì', meaning: 'expensive', examples: [{ cn: '太贵了！', en: 'Too expensive!' }, { cn: '不贵。', en: 'Not expensive.' }] },
        { id: 'dl029', character: '付钱', pinyin: 'fù qián', meaning: 'pay', examples: [{ cn: '付钱。', en: 'Pay.' }, { cn: '在哪里付钱？', en: 'Where to pay?' }] },
        { id: 'dl030', character: '找钱', pinyin: 'zhǎo qián', meaning: 'give change', examples: [{ cn: '找钱。', en: 'Give change.' }, { cn: '不用找了。', en: 'Keep the change.' }] },

        // HOME LIFE
        { id: 'dl031', character: '做饭', pinyin: 'zuò fàn', meaning: 'cook', examples: [{ cn: '做饭。', en: 'Cook.' }, { cn: '做饭很好吃。', en: 'Cook well.' }] },
        { id: 'dl032', character: '洗碗', pinyin: 'xǐ wǎn', meaning: 'wash dishes', examples: [{ cn: '洗碗。', en: 'Wash dishes.' }, { cn: '谁洗碗？', en: 'Who washes dishes?' }] },
        { id: 'dl033', character: '扫地', pinyin: 'sǎo dì', meaning: 'sweep floor', examples: [{ cn: '扫地。', en: 'Sweep floor.' }, { cn: '每天扫地。', en: 'Sweep floor every day.' }] },
        { id: 'dl034', character: '拖地', pinyin: 'tuō dì', meaning: 'mop floor', examples: [{ cn: '拖地。', en: 'Mop floor.' }, { cn: '拖地很累。', en: 'Mopping is tiring.' }] },
        { id: 'dl035', character: '洗衣服', pinyin: 'xǐ yī fu', meaning: 'wash clothes', examples: [{ cn: '洗衣服。', en: 'Wash clothes.' }, { cn: '用洗衣机洗衣服。', en: 'Use washing machine.' }] },
        { id: 'dl036', character: '晾衣服', pinyin: 'liàng yī fu', meaning: 'hang clothes', examples: [{ cn: '晾衣服。', en: 'Hang clothes.' }, { cn: '衣服还没干。', en: 'Clothes not dry yet.' }] },
        { id: 'dl037', character: '叠衣服', pinyin: 'dié yī fu', meaning: 'fold clothes', examples: [{ cn: '叠衣服。', en: 'Fold clothes.' }, { cn: '叠衣服放衣柜。', en: 'Fold clothes in wardrobe.' }] },
        { id: 'dl038', character: '倒垃圾', pinyin: 'dào lā jī', meaning: 'take out trash', examples: [{ cn: '倒垃圾。', en: 'Take out trash.' }, { cn: '垃圾满了。', en: 'Trash is full.' }] },
        { id: 'dl039', character: '浇花', pinyin: 'jiāo huā', meaning: 'water plants', examples: [{ cn: '浇花。', en: 'Water plants.' }, { cn: '每天浇花。', en: 'Water plants daily.' }] },
        { id: 'dl040', character: '遛狗', pinyin: 'liù gǒu', meaning: 'walk the dog', examples: [{ cn: '遛狗。', en: 'Walk the dog.' }, { cn: '每天遛狗。', en: 'Walk dog daily.' }] },

        // EVENING & SLEEP
        { id: 'dl041', character: '吃晚饭', pinyin: 'chī wǎn fàn', meaning: 'eat dinner', examples: [{ cn: '吃晚饭。', en: 'Eat dinner.' }, { cn: '几点吃晚饭？', en: 'What time is dinner?' }] },
        { id: 'dl042', character: '看电视', pinyin: 'kàn diàn shì', meaning: 'watch TV', examples: [{ cn: '看电视。', en: 'Watch TV.' }, { cn: '看电视很放松。', en: 'Watching TV is relaxing.' }] },
        { id: 'dl043', character: '看书', pinyin: 'kàn shū', meaning: 'read book', examples: [{ cn: '看书。', en: 'Read book.' }, { cn: '喜欢看书。', en: 'Like reading.' }] },
        { id: 'dl044', character: '听音乐', pinyin: 'tīng yīn yuè', meaning: 'listen to music', examples: [{ cn: '听音乐。', en: 'Listen to music.' }, { cn: '听音乐很放松。', en: 'Music is relaxing.' }] },
        { id: 'dl045', character: '上网', pinyin: 'shàng wǎng', meaning: 'go online', examples: [{ cn: '上网。', en: 'Go online.' }, { cn: '上网看新闻。', en: 'Read news online.' }] },
        { id: 'dl046', character: '玩手机', pinyin: 'wán shǒu jī', meaning: 'play phone', examples: [{ cn: '玩手机。', en: 'Play phone.' }, { cn: '不要玩手机。', en: 'Don\'t play phone.' }] },
        { id: 'dl047', character: '洗澡', pinyin: 'xǐ zǎo', meaning: 'take bath', examples: [{ cn: '洗澡。', en: 'Take bath.' }, { cn: '洗澡睡觉。', en: 'Bath and sleep.' }] },
        { id: 'dl048', character: '睡觉', pinyin: 'shuì jiào', meaning: 'sleep', examples: [{ cn: '睡觉。', en: 'Sleep.' }, { cn: '十点睡觉。', en: 'Sleep at 10.' }] },
        { id: 'dl049', character: '做梦', pinyin: 'zuò mèng', meaning: 'dream', examples: [{ cn: '做梦了。', en: 'Had a dream.' }, { cn: '做了一个梦。', en: 'Had a dream.' }] },
        { id: 'dl050', character: '失眠', pinyin: 'shī mián', meaning: 'insomnia', examples: [{ cn: '失眠了。', en: 'Had insomnia.' }, { cn: '经常失眠。', en: 'Often have insomnia.' }] },

        // WEATHER & SEASONS
        { id: 'dl051', character: '晴天', pinyin: 'qíng tiān', meaning: 'sunny day', examples: [{ cn: '今天晴天。', en: 'Today is sunny.' }, { cn: '晴天很热。', en: 'Sunny days are hot.' }] },
        { id: 'dl052', character: '阴天', pinyin: 'yīn tiān', meaning: 'cloudy day', examples: [{ cn: '今天阴天。', en: 'Today is cloudy.' }, { cn: '阴天很闷。', en: 'Cloudy days are stuffy.' }] },
        { id: 'dl053', character: '下雨', pinyin: 'xià yǔ', meaning: 'rain', examples: [{ cn: '下雨了。', en: 'It\'s raining.' }, { cn: '下大雨。', en: 'Heavy rain.' }] },
        { id: 'dl054', character: '下雪', pinyin: 'xià xuě', meaning: 'snow', examples: [{ cn: '下雪了。', en: 'It\'s snowing.' }, { cn: '雪很大。', en: 'Heavy snow.' }] },
        { id: 'dl055', character: '刮风', pinyin: 'guā fēng', meaning: 'windy', examples: [{ cn: '刮风了。', en: 'It\'s windy.' }, { cn: '风很大。', en: 'Strong wind.' }] },
        { id: 'dl056', character: '热', pinyin: 'rè', meaning: 'hot', examples: [{ cn: '很热。', en: 'Very hot.' }, { cn: '天气很热。', en: 'Weather is hot.' }] },
        { id: 'dl057', character: '冷', pinyin: 'lěng', meaning: 'cold', examples: [{ cn: '很冷。', en: 'Very cold.' }, { cn: '冬天很冷。', en: 'Winter is cold.' }] },
        { id: 'dl058', character: '春天', pinyin: 'chūn tiān', meaning: 'spring', examples: [{ cn: '春天很美。', en: 'Spring is beautiful.' }, { cn: '春天来了。', en: 'Spring has come.' }] },
        { id: 'dl059', character: '夏天', pinyin: 'xià tiān', meaning: 'summer', examples: [{ cn: '夏天很热。', en: 'Summer is hot.' }, { cn: '喜欢夏天。', en: 'Like summer.' }] },
        { id: 'dl060', character: '秋天', pinyin: 'qiū tiān', meaning: 'autumn', examples: [{ cn: '秋天很凉快。', en: 'Autumn is cool.' }, { cn: '秋天很美。', en: 'Autumn is beautiful.' }] },
        { id: 'dl061', character: '冬天', pinyin: 'dōng tiān', meaning: 'winter', examples: [{ cn: '冬天很冷。', en: 'Winter is cold.' }, { cn: '冬天下雪。', en: 'It snows in winter.' }] },

        // TIME
        { id: 'dl062', character: '早上', pinyin: 'zǎo shang', meaning: 'morning', examples: [{ cn: '早上好。', en: 'Good morning.' }, { cn: '早上很忙。', en: 'Morning is busy.' }] },
        { id: 'dl063', character: '中午', pinyin: 'zhōng wǔ', meaning: 'noon', examples: [{ cn: '中午吃饭。', en: 'Eat lunch at noon.' }, { cn: '中午休息。', en: 'Rest at noon.' }] },
        { id: 'dl064', character: '下午', pinyin: 'xià wǔ', meaning: 'afternoon', examples: [{ cn: '下午好。', en: 'Good afternoon.' }, { cn: '下午开会。', en: 'Meeting in afternoon.' }] },
        { id: 'dl065', character: '晚上', pinyin: 'wǎn shang', meaning: 'evening', examples: [{ cn: '晚上好。', en: 'Good evening.' }, { cn: '晚上见。', en: 'See you tonight.' }] },
        { id: 'dl066', character: '今天', pinyin: 'jīn tiān', meaning: 'today', examples: [{ cn: '今天很忙。', en: 'Today is busy.' }, { cn: '今天天气好。', en: 'Weather is good today.' }] },
        { id: 'dl067', character: '明天', pinyin: 'míng tiān', meaning: 'tomorrow', examples: [{ cn: '明天见。', en: 'See you tomorrow.' }, { cn: '明天有课。', en: 'Class tomorrow.' }] },
        { id: 'dl068', character: '昨天', pinyin: 'zuó tiān', meaning: 'yesterday', examples: [{ cn: '昨天很忙。', en: 'Yesterday was busy.' }, { cn: '昨天去了哪里？', en: 'Where did you go yesterday?' }] },
        { id: 'dl069', character: '周末', pinyin: 'zhōu mò', meaning: 'weekend', examples: [{ cn: '周末快乐！', en: 'Happy weekend!' }, { cn: '周末做什么？', en: 'What to do on weekend?' }] },
        { id: 'dl070', character: '假期', pinyin: 'jià qī', meaning: 'holiday/vacation', examples: [{ cn: '放假了！', en: 'Holiday!' }, { cn: '假期很长。', en: 'Long vacation.' }] },

        // TRANSPORTATION
        { id: 'dl071', character: '开车', pinyin: 'kāi chē', meaning: 'drive', examples: [{ cn: '开车去。', en: 'Drive there.' }, { cn: '开车很累。', en: 'Driving is tiring.' }] },
        { id: 'dl072', character: '坐车', pinyin: 'zuò chē', meaning: 'take vehicle', examples: [{ cn: '坐车去。', en: 'Take a vehicle.' }, { cn: '坐车很累。', en: 'Taking car is tiring.' }] },
        { id: 'dl073', character: '骑车', pinyin: 'qí chē', meaning: 'ride bike', examples: [{ cn: '骑车去。', en: 'Ride bike there.' }, { cn: '骑车很健康。', en: 'Cycling is healthy.' }] },
        { id: 'dl074', character: '走路', pinyin: 'zǒu lù', meaning: 'walk', examples: [{ cn: '走路去。', en: 'Walk there.' }, { cn: '走路很健康。', en: 'Walking is healthy.' }] },
        { id: 'dl075', character: '堵车', pinyin: 'dǔ chē', meaning: 'traffic jam', examples: [{ cn: '堵车了。', en: 'Traffic jam.' }, { cn: '路上堵车。', en: 'Traffic on road.' }] },
        { id: 'dl076', character: '迟到', pinyin: 'chí dào', meaning: 'late', examples: [{ cn: '迟到了！', en: 'Late!' }, { cn: '不要迟到。', en: 'Don\'t be late.' }] },
        { id: 'dl077', character: '加油', pinyin: 'jiā yóu', meaning: 'refuel/cheer up', examples: [{ cn: '加油！', en: 'Cheer up!' }, { cn: '去加油站。', en: 'Go to gas station.' }] },
        { id: 'dl078', character: '停车', pinyin: 'tíng chē', meaning: 'park', examples: [{ cn: '停车。', en: 'Park.' }, { cn: '停车场在哪里？', en: 'Where is parking lot?' }] },

        // COMMUNICATION
        { id: 'dl079', character: '聊天', pinyin: 'liáo tiān', meaning: 'chat', examples: [{ cn: '一起聊天。', en: 'Chat together.' }, { cn: '聊天很开心。', en: 'Chatting is fun.' }] },
        { id: 'dl080', character: '发短信', pinyin: 'fā duǎn xìn', meaning: 'send text', examples: [{ cn: '发短信。', en: 'Send text.' }, { cn: '发短信给我。', en: 'Text me.' }] },
        { id: 'dl081', character: '微信', pinyin: 'wēi xìn', meaning: 'WeChat', examples: [{ cn: '加微信。', en: 'Add WeChat.' }, { cn: '微信支付。', en: 'WeChat Pay.' }] },
        { id: 'dl082', character: '朋友圈', pinyin: 'péng yǒu quān', meaning: 'Moments (WeChat)', examples: [{ cn: '发朋友圈。', en: 'Post on Moments.' }, { cn: '看朋友圈。', en: 'Check Moments.' }] },
        { id: 'dl083', character: '视频', pinyin: 'shì pín', meaning: 'video', examples: [{ cn: '看视频。', en: 'Watch video.' }, { cn: '视频通话。', en: 'Video call.' }] },
        { id: 'dl084', character: '语音', pinyin: 'yǔ yīn', meaning: 'voice message', examples: [{ cn: '发语音。', en: 'Send voice message.' }, { cn: '听语音。', en: 'Listen to voice.' }] },
        { id: 'dl085', character: '点赞', pinyin: 'diǎn zàn', meaning: 'like (social media)', examples: [{ cn: '点赞。', en: 'Like.' }, { cn: '给我点赞。', en: 'Like my post.' }] },

        // FEELINGS & EMOTIONS
        { id: 'dl086', character: '开心', pinyin: 'kāi xīn', meaning: 'happy', examples: [{ cn: '很开心。', en: 'Very happy.' }, { cn: '今天很开心。', en: 'Happy today.' }] },
        { id: 'dl087', character: '难过', pinyin: 'nán guò', meaning: 'sad', examples: [{ cn: '很难过。', en: 'Very sad.' }, { cn: '不要难过。', en: 'Don\'t be sad.' }] },
        { id: 'dl088', character: '生气', pinyin: 'shēng qì', meaning: 'angry', examples: [{ cn: '很生气。', en: 'Very angry.' }, { cn: '不要生气。', en: 'Don\'t be angry.' }] },
        { id: 'dl089', character: '害怕', pinyin: 'hài pà', meaning: 'afraid', examples: [{ cn: '很害怕。', en: 'Very afraid.' }, { cn: '不要害怕。', en: 'Don\'t be afraid.' }] },
        { id: 'dl090', character: '紧张', pinyin: 'jǐn zhāng', meaning: 'nervous', examples: [{ cn: '很紧张。', en: 'Very nervous.' }, { cn: '不要紧张。', en: 'Don\'t be nervous.' }] },
        { id: 'dl091', character: '担心', pinyin: 'dān xīn', meaning: 'worried', examples: [{ cn: '很担心。', en: 'Very worried.' }, { cn: '不用担心。', en: 'Don\'t worry.' }] },
        { id: 'dl092', character: '累', pinyin: 'lèi', meaning: 'tired', examples: [{ cn: '很累。', en: 'Very tired.' }, { cn: '累了就休息。', en: 'Rest when tired.' }] },
        { id: 'dl093', character: '饿', pinyin: 'è', meaning: 'hungry', examples: [{ cn: '很饿。', en: 'Very hungry.' }, { cn: '饿了吗？', en: 'Hungry?' }] },
        { id: 'dl094', character: '渴', pinyin: 'kě', meaning: 'thirsty', examples: [{ cn: '很渴。', en: 'Very thirsty.' }, { cn: '渴了喝水。', en: 'Drink when thirsty.' }] },
        { id: 'dl095', character: '困', pinyin: 'kùn', meaning: 'sleepy', examples: [{ cn: '很困。', en: 'Very sleepy.' }, { cn: '困了就睡。', en: 'Sleep when sleepy.' }] },
        { id: 'dl096', character: '无聊', pinyin: 'wú liáo', meaning: 'bored', examples: [{ cn: '很无聊。', en: 'Very bored.' }, { cn: '无聊的时候做什么？', en: 'What to do when bored?' }] },
        { id: 'dl097', character: '舒服', pinyin: 'shū fu', meaning: 'comfortable', examples: [{ cn: '很舒服。', en: 'Very comfortable.' }, { cn: '不舒服。', en: 'Uncomfortable.' }] },
        { id: 'dl098', character: '高兴', pinyin: 'gāo xìng', meaning: 'glad', examples: [{ cn: '很高兴。', en: 'Very glad.' }, { cn: '很高兴认识你。', en: 'Nice to meet you.' }] },
        { id: 'dl099', character: '满意', pinyin: 'mǎn yì', meaning: 'satisfied', examples: [{ cn: '很满意。', en: 'Very satisfied.' }, { cn: '不满意。', en: 'Not satisfied.' }] },
        { id: 'dl100', character: '失望', pinyin: 'shī wàng', meaning: 'disappointed', examples: [{ cn: '很失望。', en: 'Very disappointed.' }, { cn: '不要失望。', en: 'Don\'t be disappointed.' }] },

        // BODY PARTS
        { id: 'dl101', character: '头', pinyin: 'tóu', meaning: 'head', examples: [{ cn: '头疼。', en: 'Headache.' }, { cn: '点头。', en: 'Nod.' }] },
        { id: 'dl102', character: '眼睛', pinyin: 'yǎn jīng', meaning: 'eyes', examples: [{ cn: '眼睛很大。', en: 'Big eyes.' }, { cn: '闭眼睛。', en: 'Close eyes.' }] },
        { id: 'dl103', character: '耳朵', pinyin: 'ěr duo', meaning: 'ears', examples: [{ cn: '耳朵很灵。', en: 'Sharp ears.' }, { cn: '用耳朵听。', en: 'Listen with ears.' }] },
        { id: 'dl104', character: '鼻子', pinyin: 'bí zi', meaning: 'nose', examples: [{ cn: '鼻子很灵。', en: 'Good sense of smell.' }, { cn: '鼻子堵了。', en: 'Nose is blocked.' }] },
        { id: 'dl105', character: '嘴', pinyin: 'zuǐ', meaning: 'mouth', examples: [{ cn: '张嘴。', en: 'Open mouth.' }, { cn: '闭嘴。', en: 'Close mouth.' }] },
        { id: 'dl106', character: '手', pinyin: 'shǒu', meaning: 'hand', examples: [{ cn: '洗手。', en: 'Wash hands.' }, { cn: '握手。', en: 'Shake hands.' }] },
        { id: 'dl107', character: '脚', pinyin: 'jiǎo', meaning: 'foot', examples: [{ cn: '洗脚。', en: 'Wash feet.' }, { cn: '脚很疼。', en: 'Feet hurt.' }] },
        { id: 'dl108', character: '腿', pinyin: 'tuǐ', meaning: 'leg', examples: [{ cn: '腿很长。', en: 'Long legs.' }, { cn: '腿疼。', en: 'Leg hurts.' }] },
        { id: 'dl109', character: '肚子', pinyin: 'dù zi', meaning: 'stomach', examples: [{ cn: '肚子疼。', en: 'Stomachache.' }, { cn: '肚子饿了。', en: 'Hungry.' }] },
        { id: 'dl110', character: '背', pinyin: 'bèi', meaning: 'back', examples: [{ cn: '背疼。', en: 'Back hurts.' }, { cn: '背包。', en: 'Backpack.' }] },

        // CLOTHING
        { id: 'dl111', character: '衣服', pinyin: 'yī fu', meaning: 'clothes', examples: [{ cn: '穿衣服。', en: 'Wear clothes.' }, { cn: '洗衣服。', en: 'Wash clothes.' }] },
        { id: 'dl112', character: '裤子', pinyin: 'kù zi', meaning: 'pants', examples: [{ cn: '穿裤子。', en: 'Wear pants.' }, { cn: '牛仔裤。', en: 'Jeans.' }] },
        { id: 'dl113', character: '裙子', pinyin: 'qún zi', meaning: 'skirt/dress', examples: [{ cn: '穿裙子。', en: 'Wear skirt.' }, { cn: '红裙子。', en: 'Red dress.' }] },
        { id: 'dl114', character: '鞋', pinyin: 'xié', meaning: 'shoes', examples: [{ cn: '穿鞋。', en: 'Wear shoes.' }, { cn: '新鞋。', en: 'New shoes.' }] },
        { id: 'dl115', character: '帽子', pinyin: 'mào zi', meaning: 'hat', examples: [{ cn: '戴帽子。', en: 'Wear hat.' }, { cn: '帽子很贵。', en: 'Hat is expensive.' }] },
        { id: 'dl116', character: '外套', pinyin: 'wài tào', meaning: 'coat/jacket', examples: [{ cn: '穿外套。', en: 'Wear coat.' }, { cn: '外套很暖和。', en: 'Coat is warm.' }] },
        { id: 'dl117', character: '袜子', pinyin: 'wà zi', meaning: 'socks', examples: [{ cn: '穿袜子。', en: 'Wear socks.' }, { cn: '洗袜子。', en: 'Wash socks.' }] },
        { id: 'dl118', character: '手套', pinyin: 'shǒu tào', meaning: 'gloves', examples: [{ cn: '戴手套。', en: 'Wear gloves.' }, { cn: '手套很暖和。', en: 'Gloves are warm.' }] },
        { id: 'dl119', character: '围巾', pinyin: 'wéi jīn', meaning: 'scarf', examples: [{ cn: '戴围巾。', en: 'Wear scarf.' }, { cn: '围巾很暖和。', en: 'Scarf is warm.' }] },
        { id: 'dl120', character: '眼镜', pinyin: 'yǎn jìng', meaning: 'glasses', examples: [{ cn: '戴眼镜。', en: 'Wear glasses.' }, { cn: '眼镜坏了。', en: 'Glasses broken.' }] },

        // HOUSEHOLD ITEMS
        { id: 'dl121', character: '桌子', pinyin: 'zhuō zi', meaning: 'table/desk', examples: [{ cn: '桌子上。', en: 'On the table.' }, { cn: '擦桌子。', en: 'Wipe table.' }] },
        { id: 'dl122', character: '椅子', pinyin: 'yǐ zi', meaning: 'chair', examples: [{ cn: '坐在椅子上。', en: 'Sit on chair.' }, { cn: '椅子很舒服。', en: 'Chair is comfortable.' }] },
        { id: 'dl123', character: '床', pinyin: 'chuáng', meaning: 'bed', examples: [{ cn: '上床睡觉。', en: 'Go to bed.' }, { cn: '床很舒服。', en: 'Bed is comfortable.' }] },
        { id: 'dl124', character: '灯', pinyin: 'dēng', meaning: 'light/lamp', examples: [{ cn: '开灯。', en: 'Turn on light.' }, { cn: '关灯。', en: 'Turn off light.' }] },
        { id: 'dl125', character: '门', pinyin: 'mén', meaning: 'door', examples: [{ cn: '开门。', en: 'Open door.' }, { cn: '关门。', en: 'Close door.' }] },
        { id: 'dl126', character: '窗户', pinyin: 'chuāng hu', meaning: 'window', examples: [{ cn: '开窗户。', en: 'Open window.' }, { cn: '关窗户。', en: 'Close window.' }] },
        { id: 'dl127', character: '钥匙', pinyin: 'yào shi', meaning: 'key', examples: [{ cn: '拿钥匙。', en: 'Take key.' }, { cn: '钥匙丢了。', en: 'Lost key.' }] },
        { id: 'dl128', character: '手机', pinyin: 'shǒu jī', meaning: 'phone', examples: [{ cn: '用手机。', en: 'Use phone.' }, { cn: '手机没电了。', en: 'Phone dead.' }] },
        { id: 'dl129', character: '钱包', pinyin: 'qián bāo', meaning: 'wallet', examples: [{ cn: '拿钱包。', en: 'Take wallet.' }, { cn: '钱包丢了。', en: 'Lost wallet.' }] },
        { id: 'dl130', character: '伞', pinyin: 'sǎn', meaning: 'umbrella', examples: [{ cn: '带伞。', en: 'Bring umbrella.' }, { cn: '下雨了，要伞。', en: 'Raining, need umbrella.' }] },

        // FOOD PREP
        { id: 'dl131', character: '切菜', pinyin: 'qiē cài', meaning: 'cut vegetables', examples: [{ cn: '切菜。', en: 'Cut vegetables.' }, { cn: '切菜很累。', en: 'Cutting vegetables is tiring.' }] },
        { id: 'dl132', character: '炒菜', pinyin: 'chǎo cài', meaning: 'stir-fry', examples: [{ cn: '炒菜。', en: 'Stir-fry.' }, { cn: '炒菜很好吃。', en: 'Stir-fry is delicious.' }] },
        { id: 'dl133', character: '煮饭', pinyin: 'zhǔ fàn', meaning: 'cook rice', examples: [{ cn: '煮饭。', en: 'Cook rice.' }, { cn: '用电饭煲煮饭。', en: 'Cook rice with rice cooker.' }] },
        { id: 'dl134', character: '泡茶', pinyin: 'pào chá', meaning: 'make tea', examples: [{ cn: '泡茶。', en: 'Make tea.' }, { cn: '泡一杯茶。', en: 'Make a cup of tea.' }] },
        { id: 'dl135', character: '热饭', pinyin: 'rè fàn', meaning: 'heat food', examples: [{ cn: '热饭。', en: 'Heat food.' }, { cn: '用微波炉热饭。', en: 'Heat food in microwave.' }] },

        // SOCIAL
        { id: 'dl136', character: '见面', pinyin: 'jiàn miàn', meaning: 'meet', examples: [{ cn: '见面。', en: 'Meet.' }, { cn: '什么时候见面？', en: 'When to meet?' }] },
        { id: 'dl137', character: '约会', pinyin: 'yuē huì', meaning: 'date', examples: [{ cn: '约会。', en: 'Date.' }, { cn: '有约会。', en: 'Have a date.' }] },
        { id: 'dl138', character: '聚会', pinyin: 'jù huì', meaning: 'party/gathering', examples: [{ cn: '聚会。', en: 'Party.' }, { cn: '生日聚会。', en: 'Birthday party.' }] },
        { id: 'dl139', character: '做客', pinyin: 'zuò kè', meaning: 'visit (as guest)', examples: [{ cn: '去朋友家做客。', en: 'Visit friend\'s home.' }, { cn: '欢迎来做客。', en: 'Welcome to visit.' }] },
        { id: 'dl140', character: '送礼', pinyin: 'sòng lǐ', meaning: 'give gift', examples: [{ cn: '送礼。', en: 'Give gift.' }, { cn: '送什么礼？', en: 'What gift to give?' }] },

        // APPLIANCES
        { id: 'dl141', character: '冰箱', pinyin: 'bīng xiāng', meaning: 'refrigerator', examples: [{ cn: '冰箱里。', en: 'In the fridge.' }, { cn: '开冰箱。', en: 'Open fridge.' }] },
        { id: 'dl142', character: '洗衣机', pinyin: 'xǐ yī jī', meaning: 'washing machine', examples: [{ cn: '用洗衣机。', en: 'Use washing machine.' }, { cn: '洗衣机坏了。', en: 'Washer broken.' }] },
        { id: 'dl143', character: '空调', pinyin: 'kōng tiáo', meaning: 'air conditioner', examples: [{ cn: '开空调。', en: 'Turn on AC.' }, { cn: '空调很冷。', en: 'AC is cold.' }] },
        { id: 'dl144', character: '电视', pinyin: 'diàn shì', meaning: 'TV', examples: [{ cn: '看电视。', en: 'Watch TV.' }, { cn: '开电视。', en: 'Turn on TV.' }] },
        { id: 'dl145', character: '微波炉', pinyin: 'wēi bō lú', meaning: 'microwave', examples: [{ cn: '用微波炉。', en: 'Use microwave.' }, { cn: '微波炉热饭。', en: 'Microwave food.' }] },
        { id: 'dl146', character: '热水器', pinyin: 'rè shuǐ qì', meaning: 'water heater', examples: [{ cn: '热水器。', en: 'Water heater.' }, { cn: '热水器坏了。', en: 'Water heater broken.' }] },
        { id: 'dl147', character: '吸尘器', pinyin: 'xī chén qì', meaning: 'vacuum cleaner', examples: [{ cn: '用吸尘器。', en: 'Use vacuum.' }, { cn: '吸尘器很吵。', en: 'Vacuum is noisy.' }] },
        { id: 'dl148', character: '电饭煲', pinyin: 'diàn fàn bāo', meaning: 'rice cooker', examples: [{ cn: '用电饭煲。', en: 'Use rice cooker.' }, { cn: '电饭煲很方便。', en: 'Rice cooker is convenient.' }] },
        { id: 'dl149', character: '吹风机', pinyin: 'chuī fēng jī', meaning: 'hair dryer', examples: [{ cn: '用吹风机。', en: 'Use hair dryer.' }, { cn: '吹头发。', en: 'Dry hair.' }] },
        { id: 'dl150', character: '闹钟', pinyin: 'nào zhōng', meaning: 'alarm clock', examples: [{ cn: '设闹钟。', en: 'Set alarm.' }, { cn: '闹钟响了。', en: 'Alarm rang.' }] }
    ],

    get count() { return this.words.length; },
    getById(id) { return this.words.find(w => w.id === id); },
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

window.TopicDaily = TopicDaily;

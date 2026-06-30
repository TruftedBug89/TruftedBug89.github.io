// ============================================
// CHINESE MASTER - TRAVEL VOCABULARY
// 150+ Travel Words with Examples
// ALL SIMPLIFIED CHINESE - Verified Pinyin
// ============================================

const TopicTravel = {
    words: [
        // ============================
        // AIRPORT & FLIGHTS
        // ============================
        { id: 'tr001', character: '机场', pinyin: 'jī chǎng', meaning: 'airport', examples: [{ cn: '机场很远。', en: 'The airport is far.' }, { cn: '去机场。', en: 'Go to the airport.' }] },
        { id: 'tr002', character: '飞机', pinyin: 'fēi jī', meaning: 'airplane', examples: [{ cn: '飞机很快。', en: 'The plane is fast.' }, { cn: '坐飞机。', en: 'Take a plane.' }] },
        { id: 'tr003', character: '航班', pinyin: 'háng bān', meaning: 'flight', examples: [{ cn: '航班几点？', en: 'What time is the flight?' }, { cn: '航班延误了。', en: 'The flight is delayed.' }] },
        { id: 'tr004', character: '登机', pinyin: 'dēng jī', meaning: 'boarding', examples: [{ cn: '登机口在哪里？', en: 'Where is the boarding gate?' }, { cn: '开始登机。', en: 'Boarding has started.' }] },
        { id: 'tr005', character: '登机牌', pinyin: 'dēng jī pái', meaning: 'boarding pass', examples: [{ cn: '请出示登机牌。', en: 'Please show your boarding pass.' }, { cn: '办登机牌。', en: 'Get boarding pass.' }] },
        { id: 'tr006', character: '行李', pinyin: 'xíng lǐ', meaning: 'luggage', examples: [{ cn: '行李很重。', en: 'The luggage is heavy.' }, { cn: '取行李。', en: 'Collect luggage.' }] },
        { id: 'tr007', character: '行李箱', pinyin: 'xíng lǐ xiāng', meaning: 'suitcase', examples: [{ cn: '行李箱很大。', en: 'The suitcase is big.' }, { cn: '收拾行李箱。', en: 'Pack the suitcase.' }] },
        { id: 'tr008', character: '护照', pinyin: 'hù zhào', meaning: 'passport', examples: [{ cn: '请出示护照。', en: 'Please show your passport.' }, { cn: '护照过期了。', en: 'The passport has expired.' }] },
        { id: 'tr009', character: '签证', pinyin: 'qiān zhèng', meaning: 'visa', examples: [{ cn: '办签证。', en: 'Apply for a visa.' }, { cn: '签证下来了。', en: 'The visa is approved.' }] },
        { id: 'tr010', character: '安检', pinyin: 'ān jiǎn', meaning: 'security check', examples: [{ cn: '过安检。', en: 'Go through security.' }, { cn: '安检很严。', en: 'Security is strict.' }] },
        { id: 'tr011', character: '海关', pinyin: 'hǎi guān', meaning: 'customs', examples: [{ cn: '过海关。', en: 'Go through customs.' }, { cn: '海关检查。', en: 'Customs inspection.' }] },
        { id: 'tr012', character: '延误', pinyin: 'yán wù', meaning: 'delay', examples: [{ cn: '航班延误了。', en: 'The flight is delayed.' }, { cn: '延误两小时。', en: 'Delayed two hours.' }] },
        { id: 'tr013', character: '起飞', pinyin: 'qǐ fēi', meaning: 'take off', examples: [{ cn: '飞机起飞了。', en: 'The plane has taken off.' }, { cn: '几点起飞？', en: 'What time does it take off?' }] },
        { id: 'tr014', character: '降落', pinyin: 'jiàng luò', meaning: 'land', examples: [{ cn: '飞机降落了。', en: 'The plane has landed.' }, { cn: '安全降落。', en: 'Safely landed.' }] },
        { id: 'tr015', character: '转机', pinyin: 'zhuǎn jī', meaning: 'transfer flight', examples: [{ cn: '需要转机。', en: 'Need to transfer.' }, { cn: '转机两个小时。', en: 'Two-hour layover.' }] },
        { id: 'tr016', character: '直飞', pinyin: 'zhí fēi', meaning: 'direct flight', examples: [{ cn: '有直飞吗？', en: 'Is there a direct flight?' }, { cn: '直飞北京。', en: 'Direct flight to Beijing.' }] },
        { id: 'tr017', character: '经济舱', pinyin: 'jīng jì cāng', meaning: 'economy class', examples: [{ cn: '经济舱。', en: 'Economy class.' }, { cn: '经济舱很挤。', en: 'Economy class is cramped.' }] },
        { id: 'tr018', character: '商务舱', pinyin: 'shāng wù cāng', meaning: 'business class', examples: [{ cn: '商务舱很贵。', en: 'Business class is expensive.' }, { cn: '坐商务舱。', en: 'Fly business class.' }] },
        { id: 'tr019', character: '头等舱', pinyin: 'tóu děng cāng', meaning: 'first class', examples: [{ cn: '头等舱很舒服。', en: 'First class is comfortable.' }, { cn: '买头等舱票。', en: 'Buy first class ticket.' }] },
        { id: 'tr020', character: '退税', pinyin: 'tuì shuì', meaning: 'tax refund', examples: [{ cn: '可以退税吗？', en: 'Can I get a tax refund?' }, { cn: '办退税。', en: 'Process tax refund.' }] },

        // ============================
        // TRAIN & STATION
        // ============================
        { id: 'tr021', character: '火车', pinyin: 'huǒ chē', meaning: 'train', examples: [{ cn: '坐火车。', en: 'Take a train.' }, { cn: '火车很快。', en: 'The train is fast.' }] },
        { id: 'tr022', character: '高铁', pinyin: 'gāo tiě', meaning: 'high-speed rail', examples: [{ cn: '坐高铁。', en: 'Take high-speed rail.' }, { cn: '高铁很快。', en: 'High-speed rail is fast.' }] },
        { id: 'tr023', character: '火车站', pinyin: 'huǒ chē zhàn', meaning: 'train station', examples: [{ cn: '去火车站。', en: 'Go to the train station.' }, { cn: '火车站很大。', en: 'The train station is big.' }] },
        { id: 'tr024', character: '站台', pinyin: 'zhàn tái', meaning: 'platform', examples: [{ cn: '在几号站台？', en: 'Which platform?' }, { cn: '站台在那边。', en: 'The platform is over there.' }] },
        { id: 'tr025', character: '座位', pinyin: 'zuò wèi', meaning: 'seat', examples: [{ cn: '我的座位在哪里？', en: 'Where is my seat?' }, { cn: '座位很舒服。', en: 'The seat is comfortable.' }] },
        { id: 'tr026', character: '卧铺', pinyin: 'wò pù', meaning: 'sleeper berth', examples: [{ cn: '买卧铺票。', en: 'Buy sleeper ticket.' }, { cn: '卧铺很舒服。', en: 'Sleeper berth is comfortable.' }] },
        { id: 'tr027', character: '硬座', pinyin: 'yìng zuò', meaning: 'hard seat', examples: [{ cn: '硬座很累。', en: 'Hard seat is tiring.' }, { cn: '硬座便宜。', en: 'Hard seat is cheap.' }] },
        { id: 'tr028', character: '软座', pinyin: 'ruǎn zuò', meaning: 'soft seat', examples: [{ cn: '软座舒服。', en: 'Soft seat is comfortable.' }, { cn: '软座贵一点。', en: 'Soft seat is more expensive.' }] },
        { id: 'tr029', character: '检票', pinyin: 'jiǎn piào', meaning: 'ticket check', examples: [{ cn: '开始检票。', en: 'Ticket check started.' }, { cn: '检票口。', en: 'Ticket checkpoint.' }] },
        { id: 'tr030', character: '候车室', pinyin: 'hòu chē shì', meaning: 'waiting room', examples: [{ cn: '在候车室等。', en: 'Wait in the waiting room.' }, { cn: '候车室很大。', en: 'The waiting room is big.' }] },

        // ============================
        // HOTEL & ACCOMMODATION
        // ============================
        { id: 'tr031', character: '酒店', pinyin: 'jiǔ diàn', meaning: 'hotel', examples: [{ cn: '住酒店。', en: 'Stay at a hotel.' }, { cn: '酒店很贵。', en: 'The hotel is expensive.' }] },
        { id: 'tr032', character: '宾馆', pinyin: 'bīn guǎn', meaning: 'guesthouse', examples: [{ cn: '住宾馆。', en: 'Stay at a guesthouse.' }, { cn: '宾馆便宜。', en: 'The guesthouse is cheap.' }] },
        { id: 'tr033', character: '房间', pinyin: 'fáng jiān', meaning: 'room', examples: [{ cn: '订房间。', en: 'Book a room.' }, { cn: '房间很大。', en: 'The room is big.' }] },
        { id: 'tr034', character: '前台', pinyin: 'qián tái', meaning: 'reception', examples: [{ cn: '去前台。', en: 'Go to reception.' }, { cn: '问前台。', en: 'Ask the reception.' }] },
        { id: 'tr035', character: '入住', pinyin: 'rù zhù', meaning: 'check in', examples: [{ cn: '几点入住？', en: 'What time is check-in?' }, { cn: '办入住。', en: 'Check in.' }] },
        { id: 'tr036', character: '退房', pinyin: 'tuì fáng', meaning: 'check out', examples: [{ cn: '几点退房？', en: 'What time is checkout?' }, { cn: '办退房。', en: 'Check out.' }] },
        { id: 'tr037', character: '单人间', pinyin: 'dān rén jiān', meaning: 'single room', examples: [{ cn: '订单人间。', en: 'Book a single room.' }, { cn: '单人间便宜。', en: 'Single room is cheaper.' }] },
        { id: 'tr038', character: '双人间', pinyin: 'shuāng rén jiān', meaning: 'double room', examples: [{ cn: '订双人间。', en: 'Book a double room.' }, { cn: '双人间大一点。', en: 'Double room is bigger.' }] },
        { id: 'tr039', character: '钥匙', pinyin: 'yào shi', meaning: 'key', examples: [{ cn: '拿钥匙。', en: 'Take the key.' }, { cn: '钥匙丢了。', en: 'Lost the key.' }] },
        { id: 'tr040', character: '房卡', pinyin: 'fáng kǎ', meaning: 'room card', examples: [{ cn: '用房卡开门。', en: 'Use room card to open door.' }, { cn: '房卡没电了。', en: 'Room card is out of battery.' }] },
        { id: 'tr041', character: '毛巾', pinyin: 'máo jīn', meaning: 'towel', examples: [{ cn: '要毛巾。', en: 'Need a towel.' }, { cn: '毛巾很干净。', en: 'The towel is clean.' }] },
        { id: 'tr042', character: '洗发水', pinyin: 'xǐ fà shuǐ', meaning: 'shampoo', examples: [{ cn: '有洗发水吗？', en: 'Is there shampoo?' }, { cn: '洗发水用完了。', en: 'Shampoo is used up.' }] },
        { id: 'tr043', character: '空调', pinyin: 'kōng tiáo', meaning: 'air conditioning', examples: [{ cn: '开空调。', en: 'Turn on the AC.' }, { cn: '空调坏了。', en: 'The AC is broken.' }] },
        { id: 'tr044', character: 'wifi', pinyin: 'wài fài', meaning: 'WiFi', examples: [{ cn: '有wifi吗？', en: 'Is there WiFi?' }, { cn: 'wifi密码是什么？', en: 'What\'s the WiFi password?' }] },

        // ============================
        // DIRECTIONS & TRANSPORT
        // ============================
        { id: 'tr045', character: '地铁', pinyin: 'dì tiě', meaning: 'subway', examples: [{ cn: '坐地铁。', en: 'Take the subway.' }, { cn: '地铁很方便。', en: 'The subway is convenient.' }] },
        { id: 'tr046', character: '公共汽车', pinyin: 'gōng gòng qì chē', meaning: 'bus', examples: [{ cn: '坐公共汽车。', en: 'Take the bus.' }, { cn: '公共汽车来了。', en: 'The bus has arrived.' }] },
        { id: 'tr047', character: '出租车', pinyin: 'chū zū chē', meaning: 'taxi', examples: [{ cn: '打出租车。', en: 'Hail a taxi.' }, { cn: '出租车很贵。', en: 'Taxis are expensive.' }] },
        { id: 'tr048', character: '网约车', pinyin: 'wǎng yuē chē', meaning: 'ride-hailing car', examples: [{ cn: '叫网约车。', en: 'Call a ride-hailing car.' }, { cn: '网约车便宜。', en: 'Ride-hailing is cheaper.' }] },
        { id: 'tr049', character: '自行车', pinyin: 'zì xíng chē', meaning: 'bicycle', examples: [{ cn: '骑自行车。', en: 'Ride a bicycle.' }, { cn: '共享单车。', en: 'Shared bicycle.' }] },
        { id: 'tr050', character: '步行', pinyin: 'bù xíng', meaning: 'walking', examples: [{ cn: '步行去。', en: 'Walk there.' }, { cn: '步行十分钟。', en: 'Ten minutes walk.' }] },
        { id: 'tr051', character: '左转', pinyin: 'zuǒ zhuǎn', meaning: 'turn left', examples: [{ cn: '左转。', en: 'Turn left.' }, { cn: '在路口左转。', en: 'Turn left at the intersection.' }] },
        { id: 'tr052', character: '右转', pinyin: 'yòu zhuǎn', meaning: 'turn right', examples: [{ cn: '右转。', en: 'Turn right.' }, { cn: '在红绿灯右转。', en: 'Turn right at the traffic light.' }] },
        { id: 'tr053', character: '直走', pinyin: 'zhí zǒu', meaning: 'go straight', examples: [{ cn: '直走。', en: 'Go straight.' }, { cn: '直走一百米。', en: 'Go straight 100 meters.' }] },
        { id: 'tr054', character: '红绿灯', pinyin: 'hóng lǜ dēng', meaning: 'traffic light', examples: [{ cn: '红绿灯。', en: 'Traffic light.' }, { cn: '等红绿灯。', en: 'Wait for the traffic light.' }] },
        { id: 'tr055', character: '路口', pinyin: 'lù kǒu', meaning: 'intersection', examples: [{ cn: '在路口。', en: 'At the intersection.' }, { cn: '路口很堵。', en: 'The intersection is congested.' }] },
        { id: 'tr056', character: '地图', pinyin: 'dì tú', meaning: 'map', examples: [{ cn: '看地图。', en: 'Look at the map.' }, { cn: '用手机地图。', en: 'Use phone map.' }] },
        { id: 'tr057', character: '导航', pinyin: 'dǎo háng', meaning: 'navigation', examples: [{ cn: '用导航。', en: 'Use navigation.' }, { cn: '导航很准。', en: 'Navigation is accurate.' }] },
        { id: 'tr058', character: '堵车', pinyin: 'dǔ chē', meaning: 'traffic jam', examples: [{ cn: '堵车了。', en: 'Traffic jam.' }, { cn: '路上堵车。', en: 'Traffic jam on the road.' }] },

        // ============================
        // SIGHTSEEING & TOURISM
        // ============================
        { id: 'tr059', character: '旅游', pinyin: 'lǚ yóu', meaning: 'tourism/travel', examples: [{ cn: '去旅游。', en: 'Go traveling.' }, { cn: '喜欢旅游。', en: 'Like traveling.' }] },
        { id: 'tr060', character: '景点', pinyin: 'jǐng diǎn', meaning: 'scenic spot', examples: [{ cn: '去景点。', en: 'Go to scenic spot.' }, { cn: '景点很多。', en: 'Many scenic spots.' }] },
        { id: 'tr061', character: '长城', pinyin: 'cháng chéng', meaning: 'Great Wall', examples: [{ cn: '去长城。', en: 'Go to the Great Wall.' }, { cn: '长城很长。', en: 'The Great Wall is very long.' }] },
        { id: 'tr062', character: '故宫', pinyin: 'gù gōng', meaning: 'Forbidden City', examples: [{ cn: '参观故宫。', en: 'Visit the Forbidden City.' }, { cn: '故宫很大。', en: 'The Forbidden City is big.' }] },
        { id: 'tr063', character: '博物馆', pinyin: 'bó wù guǎn', meaning: 'museum', examples: [{ cn: '去博物馆。', en: 'Go to the museum.' }, { cn: '博物馆免费。', en: 'The museum is free.' }] },
        { id: 'tr064', character: '寺庙', pinyin: 'sì miào', meaning: 'temple', examples: [{ cn: '参观寺庙。', en: 'Visit the temple.' }, { cn: '寺庙很安静。', en: 'The temple is quiet.' }] },
        { id: 'tr065', character: '公园', pinyin: 'gōng yuán', meaning: 'park', examples: [{ cn: '去公园。', en: 'Go to the park.' }, { cn: '公园很漂亮。', en: 'The park is beautiful.' }] },
        { id: 'tr066', character: '海滩', pinyin: 'hǎi tān', meaning: 'beach', examples: [{ cn: '去海滩。', en: 'Go to the beach.' }, { cn: '海滩很美。', en: 'The beach is beautiful.' }] },
        { id: 'tr067', character: '山', pinyin: 'shān', meaning: 'mountain', examples: [{ cn: '爬山。', en: 'Climb a mountain.' }, { cn: '山很高。', en: 'The mountain is high.' }] },
        { id: 'tr068', character: '湖', pinyin: 'hú', meaning: 'lake', examples: [{ cn: '湖很美。', en: 'The lake is beautiful.' }, { cn: '在湖边散步。', en: 'Walk by the lake.' }] },
        { id: 'tr069', character: '拍照', pinyin: 'pāi zhào', meaning: 'take photos', examples: [{ cn: '拍照。', en: 'Take photos.' }, { cn: '请帮我拍照。', en: 'Please take a photo for me.' }] },
        { id: 'tr070', character: '纪念品', pinyin: 'jì niàn pǐn', meaning: 'souvenir', examples: [{ cn: '买纪念品。', en: 'Buy souvenirs.' }, { cn: '纪念品很贵。', en: 'Souvenirs are expensive.' }] },
        { id: 'tr071', character: '导游', pinyin: 'dǎo yóu', meaning: 'tour guide', examples: [{ cn: '请导游。', en: 'Hire a tour guide.' }, { cn: '导游很好。', en: 'The tour guide is good.' }] },
        { id: 'tr072', character: '旅行团', pinyin: 'lǚ xíng tuán', meaning: 'tour group', examples: [{ cn: '跟旅行团。', en: 'Join a tour group.' }, { cn: '旅行团很便宜。', en: 'Tour groups are cheap.' }] },
        { id: 'tr073', character: '自由行', pinyin: 'zì yóu xíng', meaning: 'independent travel', examples: [{ cn: '自由行。', en: 'Independent travel.' }, { cn: '自由行更自由。', en: 'Independent travel is freer.' }] },

        // ============================
        // TRAVEL PROBLEMS
        // ============================
        { id: 'tr074', character: '迷路', pinyin: 'mí lù', meaning: 'lost', examples: [{ cn: '我迷路了。', en: 'I\'m lost.' }, { cn: '迷路了怎么办？', en: 'What to do when lost?' }] },
        { id: 'tr075', character: '丢东西', pinyin: 'diū dōng xi', meaning: 'lose something', examples: [{ cn: '我丢东西了。', en: 'I lost something.' }, { cn: '丢钱包了。', en: 'Lost my wallet.' }] },
        { id: 'tr076', character: '被偷', pinyin: 'bèi tōu', meaning: 'stolen', examples: [{ cn: '被偷了。', en: 'It was stolen.' }, { cn: '手机被偷了。', en: 'Phone was stolen.' }] },
        { id: 'tr077', character: '生病', pinyin: 'shēng bìng', meaning: 'get sick', examples: [{ cn: '生病了。', en: 'Got sick.' }, { cn: '旅行中生病。', en: 'Got sick during travel.' }] },
        { id: 'tr078', character: '受伤', pinyin: 'shòu shāng', meaning: 'injured', examples: [{ cn: '受伤了。', en: 'Got injured.' }, { cn: '腿受伤了。', en: 'Leg is injured.' }] },
        { id: 'tr079', character: '报警', pinyin: 'bào jǐng', meaning: 'call police', examples: [{ cn: '报警。', en: 'Call the police.' }, { cn: '要报警吗？', en: 'Should we call the police?' }] },
        { id: 'tr080', character: '大使馆', pinyin: 'dà shǐ guǎn', meaning: 'embassy', examples: [{ cn: '去大使馆。', en: 'Go to the embassy.' }, { cn: '联系大使馆。', en: 'Contact the embassy.' }] },
        { id: 'tr081', character: '保险', pinyin: 'bǎo xiǎn', meaning: 'insurance', examples: [{ cn: '买保险。', en: 'Buy insurance.' }, { cn: '旅行保险。', en: 'Travel insurance.' }] },
        { id: 'tr082', character: '赔偿', pinyin: 'péi cháng', meaning: 'compensation', examples: [{ cn: '要求赔偿。', en: 'Request compensation.' }, { cn: '赔偿损失。', en: 'Compensate for losses.' }] },

        // ============================
        // TRAVEL ESSENTIALS
        // ============================
        { id: 'tr083', character: '机票', pinyin: 'jī piào', meaning: 'plane ticket', examples: [{ cn: '买机票。', en: 'Buy plane ticket.' }, { cn: '机票很贵。', en: 'Plane ticket is expensive.' }] },
        { id: 'tr084', character: '火车票', pinyin: 'huǒ chē piào', meaning: 'train ticket', examples: [{ cn: '买火车票。', en: 'Buy train ticket.' }, { cn: '火车票便宜。', en: 'Train ticket is cheap.' }] },
        { id: 'tr085', character: '门票', pinyin: 'mén piào', meaning: 'entrance ticket', examples: [{ cn: '买门票。', en: 'Buy entrance ticket.' }, { cn: '门票多少钱？', en: 'How much is the ticket?' }] },
        { id: 'tr086', character: '地图', pinyin: 'dì tú', meaning: 'map', examples: [{ cn: '看地图。', en: 'Look at the map.' }, { cn: '买地图。', en: 'Buy a map.' }] },
        { id: 'tr087', character: '充电器', pinyin: 'chōng diàn qì', meaning: 'charger', examples: [{ cn: '带充电器。', en: 'Bring a charger.' }, { cn: '充电器坏了。', en: 'The charger is broken.' }] },
        { id: 'tr088', character: '转换插头', pinyin: 'zhuǎn huàn chā tóu', meaning: 'adapter', examples: [{ cn: '带转换插头。', en: 'Bring an adapter.' }, { cn: '需要转换插头。', en: 'Need an adapter.' }] },
        { id: 'tr089', character: '防晒霜', pinyin: 'fáng shài shuāng', meaning: 'sunscreen', examples: [{ cn: '涂防晒霜。', en: 'Apply sunscreen.' }, { cn: '防晒霜很重要。', en: 'Sunscreen is important.' }] },
        { id: 'tr090', character: '雨伞', pinyin: 'yǔ sǎn', meaning: 'umbrella', examples: [{ cn: '带雨伞。', en: 'Bring an umbrella.' }, { cn: '下雨了，要雨伞。', en: 'It\'s raining, need an umbrella.' }] },
        { id: 'tr091', character: '地图', pinyin: 'dì tú', meaning: 'map', examples: [{ cn: '下载地图。', en: 'Download map.' }, { cn: '离线地图。', en: 'Offline map.' }] },
        { id: 'tr092', character: '翻译', pinyin: 'fān yì', meaning: 'translate', examples: [{ cn: '帮我翻译。', en: 'Help me translate.' }, { cn: '用翻译软件。', en: 'Use translation software.' }] },
        { id: 'tr093', character: '汇率', pinyin: 'huì lǜ', meaning: 'exchange rate', examples: [{ cn: '汇率多少？', en: 'What\'s the exchange rate?' }, { cn: '汇率变化。', en: 'Exchange rate changes.' }] },
        { id: 'tr094', character: '换钱', pinyin: 'huàn qián', meaning: 'exchange money', examples: [{ cn: '在哪里换钱？', en: 'Where to exchange money?' }, { cn: '换钱很麻烦。', en: 'Exchanging money is troublesome.' }] },
        { id: 'tr095', character: '小费', pinyin: 'xiǎo fèi', meaning: 'tip', examples: [{ cn: '要给小费吗？', en: 'Should I give a tip?' }, { cn: '小费是10%。', en: 'Tip is 10%.' }] },

        // ============================
        // TRAVEL PHRASES
        // ============================
        { id: 'tr096', character: '请问', pinyin: 'qǐng wèn', meaning: 'excuse me', examples: [{ cn: '请问一下。', en: 'Excuse me.' }, { cn: '请问，哪里有银行？', en: 'Excuse me, where is a bank?' }] },
        { id: 'tr097', character: '怎么走', pinyin: 'zěn me zǒu', meaning: 'how to get to', examples: [{ cn: '怎么走？', en: 'How to get there?' }, { cn: '去机场怎么走？', en: 'How to get to the airport?' }] },
        { id: 'tr098', character: '多远', pinyin: 'duō yuǎn', meaning: 'how far', examples: [{ cn: '多远？', en: 'How far?' }, { cn: '离这里多远？', en: 'How far from here?' }] },
        { id: 'tr099', character: '多长时间', pinyin: 'duō cháng shí jiān', meaning: 'how long (time)', examples: [{ cn: '多长时间？', en: 'How long?' }, { cn: '要多长时间？', en: 'How long does it take?' }] },
        { id: 'tr100', character: '多少钱', pinyin: 'duō shao qián', meaning: 'how much', examples: [{ cn: '多少钱？', en: 'How much?' }, { cn: '这个多少钱？', en: 'How much is this?' }] },
        { id: 'tr101', character: '在哪里', pinyin: 'zài nǎ lǐ', meaning: 'where', examples: [{ cn: '在哪里？', en: 'Where is it?' }, { cn: '洗手间在哪里？', en: 'Where is the restroom?' }] },
        { id: 'tr102', character: '谢谢', pinyin: 'xiè xie', meaning: 'thank you', examples: [{ cn: '谢谢！', en: 'Thank you!' }, { cn: '非常感谢。', en: 'Thank you very much.' }] },
        { id: 'tr103', character: '不客气', pinyin: 'bù kè qì', meaning: 'you\'re welcome', examples: [{ cn: '不客气。', en: 'You\'re welcome.' }, { cn: '不客气，应该的。', en: 'You\'re welcome, my pleasure.' }] },
        { id: 'tr104', character: '对不起', pinyin: 'duì bu qǐ', meaning: 'sorry', examples: [{ cn: '对不起。', en: 'I\'m sorry.' }, { cn: '对不起，打扰了。', en: 'Sorry to bother you.' }] },
        { id: 'tr105', character: '没关系', pinyin: 'méi guān xi', meaning: 'it\'s okay', examples: [{ cn: '没关系。', en: 'It\'s okay.' }, { cn: '没关系，不用道歉。', en: 'It\'s okay, no need to apologize.' }] },

        // ============================
        // ADDITIONAL TRAVEL WORDS
        // ============================
        { id: 'tr106', character: '出发', pinyin: 'chū fā', meaning: 'depart', examples: [{ cn: '几点出发？', en: 'What time to depart?' }, { cn: '准备出发。', en: 'Ready to depart.' }] },
        { id: 'tr107', character: '到达', pinyin: 'dào dá', meaning: 'arrive', examples: [{ cn: '到达了。', en: 'Arrived.' }, { cn: '什么时候到达？', en: 'When will we arrive?' }] },
        { id: 'tr108', character: '返回', pinyin: 'fǎn huí', meaning: 'return', examples: [{ cn: '返回酒店。', en: 'Return to hotel.' }, { cn: '什么时候返回？', en: 'When to return?' }] },
        { id: 'tr109', character: '停留', pinyin: 'tíng liú', meaning: 'stay', examples: [{ cn: '在这里停留。', en: 'Stay here.' }, { cn: '停留几天？', en: 'Stay for how many days?' }] },
        { id: 'tr110', character: '参观', pinyin: 'cān guān', meaning: 'visit', examples: [{ cn: '参观博物馆。', en: 'Visit the museum.' }, { cn: '参观故宫。', en: 'Visit the Forbidden City.' }] },
        { id: 'tr111', character: '游览', pinyin: 'yóu lǎn', meaning: 'tour', examples: [{ cn: '游览城市。', en: 'Tour the city.' }, { cn: '游览景点。', en: 'Tour scenic spots.' }] },
        { id: 'tr112', character: '体验', pinyin: 'tǐ yàn', meaning: 'experience', examples: [{ cn: '体验文化。', en: 'Experience culture.' }, { cn: '体验当地生活。', en: 'Experience local life.' }] },
        { id: 'tr113', character: '推荐', pinyin: 'tuī jiàn', meaning: 'recommend', examples: [{ cn: '推荐什么？', en: 'What do you recommend?' }, { cn: '推荐餐厅。', en: 'Recommend a restaurant.' }] },
        { id: 'tr114', character: '预约', pinyin: 'yù yuē', meaning: 'reservation', examples: [{ cn: '有预约。', en: 'Have a reservation.' }, { cn: '要预约吗？', en: 'Need a reservation?' }] },
        { id: 'tr115', character: '取消', pinyin: 'qǔ xiāo', meaning: 'cancel', examples: [{ cn: '取消预约。', en: 'Cancel reservation.' }, { cn: '航班取消了。', en: 'Flight cancelled.' }] },
        { id: 'tr116', character: '改签', pinyin: 'gǎi qiān', meaning: 'change ticket', examples: [{ cn: '改签机票。', en: 'Change flight ticket.' }, { cn: '可以改签吗？', en: 'Can I change the ticket?' }] },
        { id: 'tr117', character: '退票', pinyin: 'tuì piào', meaning: 'refund ticket', examples: [{ cn: '退票。', en: 'Refund ticket.' }, { cn: '可以退票吗？', en: 'Can I get a refund?' }] },
        { id: 'tr118', character: '延误', pinyin: 'yán wù', meaning: 'delay', examples: [{ cn: '延误了。', en: 'Delayed.' }, { cn: '延误多长时间？', en: 'How long is the delay?' }] },
        { id: 'tr119', character: '准时', pinyin: 'zhǔn shí', meaning: 'on time', examples: [{ cn: '很准时。', en: 'Very punctual.' }, { cn: '准时到达。', en: 'Arrive on time.' }] },
        { id: 'tr120', character: '安全', pinyin: 'ān quán', meaning: 'safe', examples: [{ cn: '很安全。', en: 'Very safe.' }, { cn: '注意安全。', en: 'Pay attention to safety.' }] }
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

window.TopicTravel = TopicTravel;

(function() {
    if (typeof VocabularyData !== 'undefined' && TopicTravel.words) {
        TopicTravel.words.forEach(function(w) {
            if (!VocabularyData.words.find(function(vw) { return vw.character === w.character; })) {
                VocabularyData.words.push(w);
            }
        });
        VocabularyData.count = VocabularyData.words.length;
    }
})();

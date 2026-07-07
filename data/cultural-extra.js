// ============================================
// CHINESE MASTER - Extra Cultural Notes
// 100 additional cultural insights
// Auto-merges into CulturalData
// ============================================

(function() {
  var items = [

    // ── Festivals (10) ──────────────────────────

    {
      id: 'ce001',
      title: '元宵节 (Lantern Festival)',
      titleMeaning: 'Lantern Festival',
      category: 'Festivals',
      icon: '🏮',
      content: '元宵节在农历正月十五，是春节的最后一天。人们会吃元宵（也叫汤圆），这是一种用糯米粉做成的甜食，里面有花生、芝麻等馅料。晚上还有赏花灯、猜灯谜的活动。花灯五颜六色，非常漂亮。',
      keyPhrases: ['元宵', '汤圆', '花灯', '灯谜', '正月十五'],
      significance: '元宵节标志着春节庆祝活动的结束。'
    },
    {
      id: 'ce002',
      title: '清明节 (Tomb Sweeping Day)',
      titleMeaning: 'Tomb Sweeping Day',
      category: 'Festivals',
      icon: '🌿',
      content: '清明节在每年4月4日或5日，是中国人扫墓祭祖的节日。人们会去祖先的墓地，清理杂草，献上鲜花和食物。清明节也是春天踏青的好时候，很多家庭会去郊外游玩。',
      keyPhrases: ['扫墓', '祭祖', '踏青', '祖先'],
      significance: '清明节表达了中国人对祖先的尊敬和怀念。'
    },
    {
      id: 'ce003',
      title: '重阳节 (Double Ninth Festival)',
      titleMeaning: 'Double Ninth Festival',
      category: 'Festivals',
      icon: '🏔️',
      content: '重阳节在农历九月初九，因为"九"在中国文化中是阳数，所以叫"重阳"。这一天人们会登高望远、赏菊花、喝菊花酒。现在重阳节也是中国的老人节，表达对老人的尊敬。',
      keyPhrases: ['重阳', '登高', '菊花', '老人节', '敬老'],
      significance: '重阳节体现了中国人尊敬老人的传统美德。'
    },
    {
      id: 'ce004',
      title: '七夕节 (Qixi Festival)',
      titleMeaning: 'Qixi Festival / Chinese Valentine\'s Day',
      category: 'Festivals',
      icon: '💕',
      content: '七夕节在农历七月初七。传说这一天牛郎和织女会在天上的鹊桥相会。这是一个浪漫的节日，被称为"中国的情人节"。年轻男女会在这一天约会、互送礼物。',
      keyPhrases: ['七夕', '牛郎织女', '鹊桥', '情人节', '浪漫'],
      significance: '七夕节是中国最具浪漫色彩的传统节日。'
    },
    {
      id: 'ce005',
      title: '腊八节 (Laba Festival)',
      titleMeaning: 'Laba Festival',
      category: 'Festivals',
      icon: '🥣',
      content: '腊八节在农历十二月初八。这一天人们会喝腊八粥，用大米、小米、红豆、花生、红枣等八种食材熬制。腊八节过后，春节就不远了。俗话说"过了腊八就是年"。',
      keyPhrases: ['腊八粥', '腊八', '食材', '过年', '十二月初八'],
      significance: '腊八节是春节前的重要节日，拉开了过年的序幕。'
    },
    {
      id: 'ce006',
      title: '除夕 (New Year\'s Eve)',
      titleMeaning: 'New Year\'s Eve',
      category: 'Festivals',
      icon: '🎆',
      content: '除夕是农历年的最后一天，也是春节最重要的部分。全家人会聚在一起吃年夜饭，这是中国人最重视的一顿饭。晚饭后人们会守岁，等待新年的到来。午夜十二点，鞭炮齐鸣。',
      keyPhrases: ['除夕', '年夜饭', '守岁', '鞭炮', '团圆'],
      significance: '除夕是中国人最重要的家庭团聚时刻。'
    },
    {
      id: 'ce007',
      title: '国庆节 (National Day)',
      titleMeaning: 'National Day',
      category: 'Festivals',
      icon: '🇨🇳',
      content: '国庆节在10月1日，是中华人民共和国成立的纪念日。北京天安门广场会举行升旗仪式和大阅兵。全国各地都会放假七天，这被称为"黄金周"，很多人选择出去旅游。',
      keyPhrases: ['国庆节', '天安门', '阅兵', '黄金周', '升旗'],
      significance: '国庆节是中国最重要的现代节日之一。'
    },
    {
      id: 'ce008',
      title: '冬至 (Winter Solstice)',
      titleMeaning: 'Winter Solstice',
      category: 'Festivals',
      icon: '❄️',
      content: '冬至是一年中白天最短、夜晚最长的一天。北方人习惯在这一天吃饺子，因为饺子像耳朵，据说吃了不会冻耳朵。南方人则吃汤圆，象征团圆。冬至也是中国古代重要的节气。',
      keyPhrases: ['冬至', '饺子', '汤圆', '节气', '白天最短'],
      significance: '冬至是中国古代"二十四节气"之一，有重要的文化意义。'
    },
    {
      id: 'ce009',
      title: '中秋节为什么要吃月饼？',
      titleMeaning: 'Why eat mooncakes on Mid-Autumn Festival?',
      category: 'Festivals',
      icon: '🥮',
      content: '中秋节吃月饼的传统已经有上千年的历史。月饼是圆形的，象征团圆和完整。古代人在中秋节用月饼祭拜月亮，后来演变成家人分享月饼的习俗。现在月饼有各种口味：莲蓉、豆沙、五仁等。',
      keyPhrases: ['月饼', '团圆', '祭拜', '莲蓉', '五仁'],
      significance: '月饼是中秋节最重要的文化符号之一。'
    },
    {
      id: 'ce010',
      title: '元宵节猜灯谜',
      titleMeaning: 'Lantern riddles on Lantern Festival',
      category: 'Festivals',
      icon: '💡',
      content: '猜灯谜是元宵节的传统活动。人们在灯笼上写上谜语，让别人猜。谜语通常是一句诗或者一句话，猜一个字、一个事物或者一个成语。猜对的人会有小礼物。这个活动既有趣又能锻炼智力。',
      keyPhrases: ['灯谜', '谜语', '成语', '猜字', '灯笼'],
      significance: '猜灯谜活动体现了中国人对文字游戏的热爱。'
    },

    // ── Food Culture (10) ───────────────────────

    {
      id: 'ce011',
      title: '饺子 (Dumplings)',
      titleMeaning: 'Dumplings',
      category: 'Food',
      icon: '🥟',
      content: '饺子是中国北方最受欢迎的食物，形似古代的金元宝，象征财富。饺子馅有很多种类：猪肉白菜、韭菜鸡蛋、牛肉胡萝卜等。过年时全家人一起包饺子是一种传统，有的人还会在饺子里放一枚硬币，谁吃到就代表好运。',
      keyPhrases: ['饺子', '金元宝', '馅', '包饺子', '好运'],
      significance: '饺子是中国人过年不可缺少的食物。'
    },
    {
      id: 'ce012',
      title: '火锅 (Hot Pot)',
      titleMeaning: 'Hot Pot',
      category: 'Food',
      icon: '🍲',
      content: '火锅是中国非常流行的聚餐方式。大家围坐在一锅滚烫的汤底周围，把自己喜欢的肉和菜放进去煮。火锅有麻辣的重庆火锅、清淡的涮羊肉、养生的菌汤火锅等。吃火锅最重要的是热闹和分享。',
      keyPhrases: ['火锅', '汤底', '麻辣', '涮羊肉', '聚餐'],
      significance: '火锅体现了中国人喜欢热闹和分享的饮食习惯。'
    },
    {
      id: 'ce013',
      title: '北京烤鸭 (Beijing Roast Duck)',
      titleMeaning: 'Beijing Roast Duck',
      category: 'Food',
      icon: '🦆',
      content: '北京烤鸭是中国最有名的菜肴之一，已有几百年历史。鸭子经过特殊处理后挂在炉子里烤制，皮脆肉嫩。吃的时候用薄饼卷着鸭肉、黄瓜条和甜面酱。很多外国游客来北京一定要尝一尝。',
      keyPhrases: ['烤鸭', '北京', '皮脆肉嫩', '薄饼', '甜面酱'],
      significance: '北京烤鸭是中国美食走向世界的代表之一。'
    },
    {
      id: 'ce014',
      title: '豆浆油条 (Soy Milk & Fried Dough)',
      titleMeaning: 'Soy Milk & Fried Dough Sticks',
      category: 'Food',
      icon: '🥛',
      content: '豆浆和油条是中国人最传统的早餐搭配。豆浆是用黄豆磨成的，营养丰富；油条是油炸的面食，外脆里软。把油条泡在热豆浆里吃，是很多人童年最美好的记忆。这种早餐便宜又好吃。',
      keyPhrases: ['豆浆', '油条', '早餐', '黄豆', '传统'],
      significance: '豆浆油条是中国人最熟悉的早餐组合。'
    },
    {
      id: 'ce015',
      title: '四大菜系 (Four Great Cuisines)',
      titleMeaning: 'Four Great Cuisines',
      category: 'Food',
      icon: '🍜',
      content: '中国传统上有四大菜系：川菜、鲁菜、粤菜、苏菜。川菜以麻辣闻名，代表菜有麻婆豆腐；鲁菜讲究咸鲜；粤菜注重原味，点心很有名；苏菜精致细腻，甜咸适中。后来发展成八大菜系。',
      keyPhrases: ['川菜', '鲁菜', '粤菜', '苏菜', '麻婆豆腐'],
      significance: '四大菜系代表了中国不同地区的饮食风格。'
    },
    {
      id: 'ce016',
      title: '面条的文化意义',
      titleMeaning: 'Cultural meaning of noodles',
      category: 'Food',
      icon: '🍝',
      content: '在中国文化中，面条代表"长寿"。过生日的时候，人们会吃一碗"长寿面"，面条越长越好，不能咬断。这表达了希望过生日的人健康长寿的美好祝愿。所以在中国，面条不只是食物，还有文化的含义。',
      keyPhrases: ['长寿面', '面条', '生日', '健康长寿', '祝愿'],
      significance: '面条在中国饮食文化中象征着长寿。'
    },
    {
      id: 'ce017',
      title: '米饭的地位',
      titleMeaning: 'The status of rice',
      category: 'Food',
      icon: '🍚',
      content: '米饭是中国人最重要的主食，尤其是南方人，几乎每顿饭都离不开米饭。中国人打招呼时常说"你吃饭了吗？"，这说明了米饭在日常生活中的重要性。中国还发明了各种用米做的食物，如米粉、米线、年糕。',
      keyPhrases: ['米饭', '主食', '南方', '年糕', '米粉'],
      significance: '米饭是中国饮食文化的核心。'
    },
    {
      id: 'ce018',
      title: '中国茶种类',
      titleMeaning: 'Types of Chinese tea',
      category: 'Food',
      icon: '🍵',
      content: '中国茶主要分为六大类：绿茶（如龙井）、红茶（如祁红）、乌龙茶（如铁观音）、白茶（如白毫银针）、黄茶和黑茶（如普洱茶）。每类茶的制作工艺和味道都不同。绿茶不发酵，味道清新；红茶全发酵，味道醇厚。',
      keyPhrases: ['绿茶', '红茶', '乌龙茶', '龙井', '铁观音'],
      significance: '中国是世界上茶种类最丰富的国家。'
    },
    {
      id: 'ce019',
      title: '三餐习惯 (Meal Habits)',
      titleMeaning: 'Meal Habits',
      category: 'Food',
      icon: '🍽️',
      content: '中国人很注重早餐，俗话说"早饭要吃好"。早餐通常有包子、豆浆、粥等。午餐是一天中最重要的一餐，一般有米饭、几个菜和一个汤。晚餐家人会聚在一起吃。很多人有午睡的习惯，吃完午饭休息一会儿再工作。',
      keyPhrases: ['早餐', '午餐', '晚餐', '午睡', '习惯'],
      significance: '中国饮食文化讲究一日三餐的合理安排。'
    },
    {
      id: 'ce020',
      title: '各种小吃的魅力',
      titleMeaning: 'The charm of street snacks',
      category: 'Food',
      icon: '🍢',
      content: '中国每个城市都有自己的特色小吃。比如天津的煎饼果子、西安的肉夹馍、上海的汤包、成都的串串香。夜市是品尝小吃最好的地方。中国人很爱逛夜市，一边走一边吃各种小吃，这叫"逛吃逛吃"。',
      keyPhrases: ['小吃', '夜市', '煎饼果子', '肉夹馍', '汤包'],
      significance: '小吃文化是中国城市生活的一大特色。'
    },

    // ── Customs & Traditions (10) ──────────────

    {
      id: 'ce021',
      title: '红色为什么是吉祥色？',
      titleMeaning: 'Why is red auspicious?',
      category: 'Traditions',
      icon: '🔴',
      content: '在中国文化中，红色代表好运、幸福和繁荣。传说有一个叫"年"的怪兽害怕红色，所以人们用红色来驱除它。春节时，人们贴红色的春联、穿红色的衣服、发红色的红包。结婚的时候，新娘也会穿红色的旗袍。',
      keyPhrases: ['红色', '吉祥', '年兽', '春联', '好运'],
      significance: '红色是中国文化中最重要的颜色，代表幸福。'
    },
    {
      id: 'ce022',
      title: '敬酒礼仪 (Toasting Etiquette)',
      titleMeaning: 'Toasting Etiquette',
      category: 'Traditions',
      icon: '🥂',
      content: '在中国饭桌上，敬酒是非常重要的礼仪。晚辈要给长辈敬酒，下属要给上司敬酒。敬酒时杯子要比对方的低，表示尊重。说"干杯"的时候，最好把杯子里的酒喝完，表示诚意和尊重。',
      keyPhrases: ['敬酒', '干杯', '尊重', '礼仪', '长辈'],
      significance: '敬酒是中国社交活动中的重要礼节。'
    },
    {
      id: 'ce023',
      title: '尊老爱幼 (Respecting Elders)',
      titleMeaning: 'Respecting Elders and Caring for the Young',
      category: 'Traditions',
      icon: '👴',
      content: '尊老爱幼是中国的传统美德。在公交车上，年轻人会给老人让座。家庭中，子女有责任照顾年老的父母。中国古代有"孝"的概念，孝顺父母是做人的基本要求。这种观念一直延续到今天。',
      keyPhrases: ['尊老爱幼', '让座', '孝顺', '传统美德', '敬老'],
      significance: '尊老爱幼体现了中国社会的核心价值观。'
    },
    {
      id: 'ce024',
      title: '送礼禁忌',
      titleMeaning: 'Gift-giving taboos',
      category: 'Traditions',
      icon: '🎁',
      content: '在中国送礼有很多讲究。不能送钟，因为"送钟"听起来像"送终"（参加葬礼）。不能送伞，因为"伞"听起来像"散"，意思是分开。不能送绿色的帽子，因为"绿帽子"有不好的意思。送水果要成双，不能送单数。',
      keyPhrases: ['送礼', '送钟', '送伞', '绿帽子', '成双'],
      significance: '送礼的禁忌反映了中国人对语言谐音的重视。'
    },
    {
      id: 'ce025',
      title: '婚礼习俗 (Wedding Customs)',
      titleMeaning: 'Wedding Customs',
      category: 'Traditions',
      icon: '💒',
      content: '中国传统婚礼有很多讲究。结婚前要选一个好日子，这叫做"看日子"。婚礼上新娘穿红色旗袍，新郎穿中式礼服。新娘进门要跨火盆，象征红红火火。婚礼上要有红双喜字。现在很多年轻人也选择穿白色婚纱。',
      keyPhrases: ['婚礼', '看日子', '旗袍', '双喜', '跨火盆'],
      significance: '婚礼习俗体现了中国人对美好婚姻的祝愿。'
    },
    {
      id: 'ce026',
      title: '做客的规矩',
      titleMeaning: 'Rules for being a guest',
      category: 'Traditions',
      icon: '🏠',
      content: '去别人家做客，中国人有一些规矩。进门要换拖鞋，不能直接穿鞋进去。一般要带一些小礼物，比如水果或酒。主人端茶时，客人要站起来双手接。吃饭时主人说"请慢用"，客人才能开始吃。走的时候要感谢主人的招待。',
      keyPhrases: ['做客', '拖鞋', '礼物', '端茶', '感谢'],
      significance: '做客的规矩反映了中国人对礼节的重视。'
    },
    {
      id: 'ce027',
      title: '压岁钱的由来',
      titleMeaning: 'Origin of lucky money',
      category: 'Traditions',
      icon: '🧧',
      content: '压岁钱是春节时长辈给孩子的红包。传说在古代，有一种叫"祟"的小妖怪会伤害小孩，但"祟"怕红色和铜钱。所以大人在除夕夜把铜钱包在红纸里放在孩子枕边。后来这个习俗就变成了给红包，表达对孩子平安长大的祝福。',
      keyPhrases: ['压岁钱', '红包', '祟', '铜钱', '祝福'],
      significance: '压岁钱是长辈对晚辈最真诚的祝福。'
    },
    {
      id: 'ce028',
      title: '请客文化',
      titleMeaning: 'Treating culture',
      category: 'Traditions',
      icon: '🤝',
      content: '中国人很喜欢请客，朋友聚会时常常会抢着付钱。如果你请别人吃饭，下一次对方可能会回请你，这是一种社交方式。在饭桌上，主人会不断地给客人夹菜，叫客人"多吃点"。这代表了主人的大方和热情好客。',
      keyPhrases: ['请客', '付钱', '回请', '夹菜', '好客'],
      significance: '请客文化体现了中国人的热情和社交智慧。'
    },
    {
      id: 'ce029',
      title: '磕头与鞠躬',
      titleMeaning: 'Kowtow and bowing',
      category: 'Traditions',
      icon: '🙇',
      content: '在中国古代，磕头是最隆重的一种礼节，给长辈或神明行礼。现在很少有人磕头了，但过春节时有些地方的长辈还给晚辈发红包时，晚辈会磕头。日常生活中，微微鞠躬或者点头来打招呼就可以了。',
      keyPhrases: ['磕头', '鞠躬', '行礼', '礼节', '尊重'],
      significance: '磕头和鞠躬是中国人表达尊敬的传统方式。'
    },
    {
      id: 'ce030',
      title: '本命年',
      titleMeaning: 'Zodiac year of birth',
      category: 'Traditions',
      icon: '🔴',
      content: '本命年就是属于你生肖的那一年。中国人认为本命年的运气不太好，可能会有一些困难。所以在本命年，人们会穿红色的内衣、系红色腰带，希望红色能带来好运、挡住不好的事情。这是很有趣的一种传统。',
      keyPhrases: ['本命年', '生肖', '红色', '运气', '传统'],
      significance: '本命年的习俗反映了中国人对生肖文化的信仰。'
    },

    // ── Daily Life (10) ─────────────────────────

    {
      id: 'ce031',
      title: '地铁文化 (Subway Culture)',
      titleMeaning: 'Subway Culture',
      category: 'Daily Life',
      icon: '🚇',
      content: '中国大城市的地铁非常发达，北京、上海的地铁线网超过700公里。上下班高峰期地铁非常拥挤，人们形容为"挤成纸片人"。在地铁上，人们通常会玩手机、听音乐或者看电子书。地铁是了解城市生活最好的窗口。',
      keyPhrases: ['地铁', '高峰期', '拥挤', '城市', '通勤'],
      significance: '地铁是连接中国大城市生活的动脉。'
    },
    {
      id: 'ce032',
      title: '广场舞 (Square Dancing)',
      titleMeaning: 'Square Dancing',
      category: 'Daily Life',
      icon: '💃',
      content: '广场舞是中国中老年妇女最喜欢的健身活动。每天早晨和傍晚，在公园和广场上都能看到一群阿姨们在跳舞。她们随着音乐的节奏，做着整齐的动作。广场舞既锻炼身体又结交朋友，是中国城市一道特别的风景。',
      keyPhrases: ['广场舞', '阿姨', '公园', '健身', '跳舞'],
      significance: '广场舞是当代中国最具特色的市民文化之一。'
    },
    {
      id: 'ce033',
      title: '快递与外卖',
      titleMeaning: 'Express delivery and food delivery',
      category: 'Daily Life',
      icon: '📦',
      content: '中国的快递和外卖服务在全世界领先。网购的东西一两天就可以送到，外卖食品半小时左右就能到家门口。快递小哥和外卖骑手穿着各种颜色的制服，骑着电动车在城市里穿梭。这大大改变了中国人的生活方式。',
      keyPhrases: ['快递', '外卖', '网购', '电动车', '方便'],
      significance: '快递和外卖让中国人的生活变得极其便利。'
    },
    {
      id: 'ce034',
      title: '早起文化',
      titleMeaning: 'Early-rising culture',
      category: 'Daily Life',
      icon: '🌅',
      content: '中国人喜欢早起，认为"一日之计在于晨"。早晨你会看到很多人在公园里晨练：跑步的、打太极的、打羽毛球的。街上的早餐摊也很早就开门了。很多人习惯早睡早起，这个习惯被认为有益健康。',
      keyPhrases: ['早起', '晨练', '健康', '公园', '习惯'],
      significance: '早起是中国人的传统生活习惯。'
    },
    {
      id: 'ce035',
      title: '午休习惯',
      titleMeaning: 'Nap habits',
      category: 'Daily Life',
      icon: '😴',
      content: '午休在中国非常普遍。学校和很多公司都安排了午休时间。中国人认为短暂的午睡可以提高下午的工作效率。你可能看到有人在办公室里趴着睡觉，或者在车里小睡一会儿。这跟一些西方国家不太一样。',
      keyPhrases: ['午休', '午睡', '效率', '休息', '习惯'],
      significance: '午休文化是中国人保持精力的一种生活方式。'
    },
    {
      id: 'ce036',
      title: '排队文化的变化',
      titleMeaning: 'Changes in queuing culture',
      category: 'Daily Life',
      icon: '👥',
      content: '以前中国人不太习惯排队，但现在情况已经大大改善。在公交站、医院挂号、银行办事，大家都会排队等候。手机上取号排队也很普及，到了时间系统会提醒你。这说明社会文明程度在不断提高。',
      keyPhrases: ['排队', '挂号', '取号', '文明', '社会'],
      significance: '排队文化的变化反映了中国社会的文明进步。'
    },
    {
      id: 'ce037',
      title: '中国的小区生活',
      titleMeaning: 'Life in Chinese residential compounds',
      category: 'Daily Life',
      icon: '🏘️',
      content: '大多数中国城市居民住在"小区"里，就是有围墙的住宅区。小区有自己的大门、保安和绿化。小区里孩子们在游乐场玩，老人们在椅子上下棋聊天。小区像一个大家庭，邻居之间的互动比西方城市要多一些。',
      keyPhrases: ['小区', '保安', '邻居', '绿化', '社区'],
      significance: '小区是中国城市居民日常生活的基本单位。'
    },
    {
      id: 'ce038',
      title: '给孩子取名字',
      titleMeaning: 'Choosing names for children',
      category: 'Daily Life',
      icon: '👶',
      content: '中国人给孩子取名字非常慎重。名字一般由两个字或一个字组成，每个字都有好的意思。有些父母会请专门的人根据孩子的出生时间来选择名字。女孩的名字常用"美"、"花"、"静"等字；男孩的名字常用"强"、"伟"、"龙"等字。',
      keyPhrases: ['取名', '名字', '含义', '出生', '传统文化'],
      significance: '取名字反映了父母对孩子未来的美好期望。'
    },
    {
      id: 'ce039',
      title: '讨价还价',
      titleMeaning: 'Bargaining',
      category: 'Daily Life',
      icon: '💬',
      content: '在中国的传统市场和小商店里，讨价还价是一种很普遍的做法。买家会说"便宜点吧"，卖家可能会说"已经很便宜了"。有时候一番讨价之后，价格可能便宜不少。在大商场和超市里则通常是固定价格。',
      keyPhrases: ['讨价还价', '便宜', '市场', '价格', '讲价'],
      significance: '讨价还价是中国传统商业文化的一部分。'
    },
    {
      id: 'ce040',
      title: '公交让座',
      titleMeaning: 'Giving up seats on the bus',
      category: 'Daily Life',
      icon: '🚌',
      content: '在公交车上给老人、孕妇和抱小孩的乘客让座，是中国人普遍的礼貌。公交车上还有专门的爱心座位。如果你不给需要的人让座，周围的人可能会用眼神提醒你。让座时你可以说"您请坐"。',
      keyPhrases: ['让座', '公交', '老人', '礼貌', '爱心'],
      significance: '让座是中国社会公德的日常体现。'
    },

    // ── Arts (10) ───────────────────────────────

    {
      id: 'ce041',
      title: '国画 (Chinese Painting)',
      titleMeaning: 'Traditional Chinese Painting',
      category: 'Art',
      icon: '🖼️',
      content: '中国国画有上千年的历史，用毛笔、墨和宣纸创作的。国画不追求完美的写实，而是讲究"意境"——通过画面表达情感和想法。常见的题材有山水、花鸟、人物等。一幅画上常常还题有诗句和印章。',
      keyPhrases: ['国画', '毛笔', '宣纸', '意境', '山水'],
      significance: '国画是中国视觉艺术的最高形式之一。'
    },
    {
      id: 'ce042',
      title: '京剧 (Peking Opera)',
      titleMeaning: 'Peking Opera',
      category: 'Art',
      icon: '🎭',
      content: '京剧是中国的国粹，有超过200年的历史。演员的脸上画着不同颜色的脸谱，红色代表忠诚，白色代表奸诈，黑色代表正直。京剧的表演结合了唱、念、做、打。虽然年轻人看得不多，但去北京旅游看京剧是一种特别体验。',
      keyPhrases: ['京剧', '脸谱', '国粹', '唱念做打', '表演'],
      significance: '京剧是中国传统表演艺术的代表。'
    },
    {
      id: 'ce043',
      title: '剪纸艺术 (Paper Cutting)',
      titleMeaning: 'Paper Cutting Art',
      category: 'Art',
      icon: '✂️',
      content: '剪纸是中国传统的民间艺术，用一把剪刀和一张红纸就可以创作。人们剪出各种图案：花鸟、生肖、双喜字等。过年时把剪纸贴在窗户上，叫做"窗花"。剪纸艺术已经被列入世界非物质文化遗产。',
      keyPhrases: ['剪纸', '窗花', '红纸', '图案', '遗产'],
      significance: '剪纸是中国最有代表性的民间艺术之一。'
    },
    {
      id: 'ce044',
      title: '太极拳 (Tai Chi)',
      titleMeaning: 'Tai Chi',
      category: 'Art',
      icon: '☯️',
      content: '太极拳是中国传统武术的一种，动作缓慢优美。太极强调"以柔克刚"，看起来柔软的动作蕴含着巨大的力量。每天早晨，公园里很多人在练太极。打太极不仅能锻炼身体，还能让人心情平静。太极拳已经被不断传播到世界各地。',
      keyPhrases: ['太极拳', '以柔克刚', '动作', '平静', '健身'],
      significance: '太极拳是中国传统文化与现代健康理念的结合。'
    },
    {
      id: 'ce045',
      title: '毛笔字的学习',
      titleMeaning: 'Learning brush calligraphy',
      category: 'Art',
      icon: '🖊️',
      content: '在中国，很多小学生要学习写毛笔字。学校有专门的书法课，孩子们先从笔画开始练：横、竖、撇、捺、点。练习需要用墨汁和字帖。家长认为练习书法能让孩子静下心来，培养耐心和专注力。这是一个很好的传统。',
      keyPhrases: ['毛笔字', '笔画', '书法课', '墨汁', '字帖'],
      significance: '学习毛笔字是传承中国文化的重要方式。'
    },
    {
      id: 'ce046',
      title: '中国园林艺术',
      titleMeaning: 'Chinese garden art',
      category: 'Art',
      icon: '🏯',
      content: '中国园林讲究"虽由人作，宛自天开"，意思是虽然是人工建造的，但看起来像自然的一样。苏州园林是最著名的代表。园林里有假山、水池、亭子和长廊。每个季节的景色都不同，体现了中国人与自然和谐共处的理念。',
      keyPhrases: ['园林', '苏州', '假山', '水池', '自然'],
      significance: '中国园林体现了"天人合一"的哲学思想。'
    },
    {
      id: 'ce047',
      title: '刺绣 (Embroidery)',
      titleMeaning: 'Embroidery',
      category: 'Art',
      icon: '🧵',
      content: '中国刺绣有四大名绣：苏绣、湘绣、粤绣、蜀绣。刺绣师可以在丝绸上用彩色的丝线绣出美丽的图案。手巧的刺绣师的作品像画一样逼真。中国刺绣不仅是衣服上的装饰，也是一种珍贵的艺术品。',
      keyPhrases: ['刺绣', '苏绣', '丝绸', '手工', '图案'],
      significance: '刺绣是中国传统手工艺的瑰宝。'
    },
    {
      id: 'ce048',
      title: '陶瓷文化 (Ceramics)',
      titleMeaning: 'Ceramics Culture',
      category: 'Art',
      icon: '🏺',
      content: '中国是陶瓷的故乡，景德镇被称为"瓷都"。中国瓷器以青花瓷最为有名，蓝色的花纹画在白色瓷器上，非常优雅。制作一件好瓷器需要经过很多工序：拉坯、上釉、烧制等。好的瓷器薄如纸，白如玉。',
      keyPhrases: ['陶瓷', '青花瓷', '景德镇', '瓷器', '上釉'],
      significance: '中国瓷器不仅美观，更承载了千年的文化历史。'
    },
    {
      id: 'ce049',
      title: '中国音乐',
      titleMeaning: 'Chinese music',
      category: 'Art',
      icon: '🎵',
      content: '中国传统乐器有古筝、二胡、琵琶、笛子等。这些乐器都有上千年的历史。古筝的声音听起来很优雅，二胡的声音有点像人唱歌。现在很多年轻人喜欢把传统乐器与现代歌曲结合，给传统的音乐带来新的生命。',
      keyPhrases: ['古筝', '二胡', '琵琶', '笛子', '民乐'],
      significance: '中国传统音乐是中华文化的优美表达。'
    },
    {
      id: 'ce050',
      title: '风筝 (Kites)',
      titleMeaning: 'Kites',
      category: 'Art',
      icon: '🪁',
      content: '风筝是中国发明的，有两千多年的历史。最早的木制风筝据说是哲学家墨子发明的。现在人们喜欢在春天放风筝，风筝的形状有很多：蝴蝶、老鹰、龙等。山东潍坊是中国的"风筝之都"，每年都举办国际风筝节。',
      keyPhrases: ['风筝', '墨子', '春天', '潍坊', '龙形'],
      significance: '风筝是中国传统民间工艺，也是老少皆宜的娱乐。'
    },

    // ── Geography & Landmarks (10) ──────────────

    {
      id: 'ce051',
      title: '西湖 (West Lake)',
      titleMeaning: 'West Lake',
      category: 'Landmarks',
      icon: '🌊',
      content: '西湖位于杭州，是中国最有名的湖之一。西湖有十景，如"断桥残雪"、"雷峰夕照"。苏堤和白堤是两条穿过湖面的长路，很适合散步。春天的时候，苏堤上的桃花盛开，非常美丽。西湖被列入世界遗产名录。',
      keyPhrases: ['西湖', '杭州', '十景', '苏堤', '世界遗产'],
      significance: '西湖是中国山水美景的经典代表。'
    },
    {
      id: 'ce052',
      title: '黄山 (Yellow Mountain)',
      titleMeaning: 'Yellow Mountain',
      category: 'Landmarks',
      icon: '⛰️',
      content: '黄山在安徽省，以"四绝"闻名：奇松、怪石、云海、温泉。黄山的松树长在悬崖上，形状奇特。云海出现时，山峰像是在云上飘着，如同仙境。中国有句古话："五岳归来不看山，黄山归来不看岳"。',
      keyPhrases: ['黄山', '奇松', '怪石', '云海', '仙境'],
      significance: '黄山是中国最美的山之一，被称为"天下第一奇山"。'
    },
    {
      id: 'ce053',
      title: '九寨沟 (Jiuzhaigou)',
      titleMeaning: 'Jiuzhaigou Valley',
      category: 'Landmarks',
      icon: '🏞️',
      content: '九寨沟在四川省，以美丽的湖泊和瀑布闻名。湖水有各种颜色：蓝的、绿的、黄的，像宝石一样。秋天的九寨沟特别美，枫叶变红，和湖水的颜色形成对比。这里也是大熊猫的故乡。九寨沟是联合国世界自然遗产。',
      keyPhrases: ['九寨沟', '湖泊', '瀑布', '秋天', '大熊猫'],
      significance: '九寨沟是中国的自然奇观，如童话世界一般美丽。'
    },
    {
      id: 'ce054',
      title: '兵马俑 (Terracotta Warriors)',
      titleMeaning: 'Terracotta Warriors',
      category: 'Landmarks',
      icon: '🗿',
      content: '兵马俑在西安，是秦始皇陵的一部分。那里有成千上万的陶土士兵和马匹，每个士兵的脸都不一样。兵马俑是在1974年被农民发现的，现在是世界第八大奇迹之一。去兵马俑参观，你能感受到两千多年前秦朝的强大。',
      keyPhrases: ['兵马俑', '秦始皇', '西安', '陶土', '奇迹'],
      significance: '兵马俑展示了古代中国的伟大艺术和军事力量。'
    },
    {
      id: 'ce055',
      title: '桂林山水 (Guilin Scenery)',
      titleMeaning: 'Guilin Scenery',
      category: 'Landmarks',
      icon: '🏞️',
      content: '桂林在广西，以山水闻名。"桂林山水甲天下"意思是桂林的风景天下第一。漓江两岸有奇特的山峰，像一幅中国水墨画。坐着竹筏在漓江上漂流，是去桂林旅游必体验的项目。',
      keyPhrases: ['桂林', '漓江', '甲天下', '竹筏', '山水'],
      significance: '桂林山水代表了中国南方秀丽的自然风光。'
    },
    {
      id: 'ce056',
      title: '颐和园 (Summer Palace)',
      titleMeaning: 'Summer Palace',
      category: 'Landmarks',
      icon: '🏛️',
      content: '颐和园在北京，是中国最大的皇家园林。慈禧太后曾经在这里居住和办公。颐和园以昆明湖和万寿山为中心，景色优美。园内有一条非常长的长廊，上面画着上千幅彩色故事画。这里也是北京人周末喜欢去的地方。',
      keyPhrases: ['颐和园', '慈禧', '昆明湖', '长廊', '皇家园林'],
      significance: '颐和园是中国古代园林艺术的巅峰之作。'
    },
    {
      id: 'ce057',
      title: '天坛 (Temple of Heaven)',
      titleMeaning: 'Temple of Heaven',
      category: 'Landmarks',
      icon: '🛕',
      content: '天坛在北京，是明清两代皇帝祭天的地方。主要建筑是祈年殿，圆形的蓝色屋顶非常美丽。天坛的建筑没有用一颗钉子，全部是木结构拼接。皇帝每年在这里祈祷丰收和平安。现在天坛是北京市民晨练的好地方。',
      keyPhrases: ['天坛', '祈年殿', '祭天', '皇帝', '木结构'],
      significance: '天坛是中国古代天文信仰和建筑工艺的完美结合。'
    },
    {
      id: 'ce058',
      title: '苏州园林',
      titleMeaning: 'Suzhou Classical Gardens',
      category: 'Landmarks',
      icon: '🌿',
      content: '苏州被称为"人间天堂"，以园林闻名。拙政园和留园是最著名的两个。苏州园林的特点是"小中见大"，在很小的空间里设计出山水的意境。你走在园子里，一步一景，每换个角度看到的都不一样。',
      keyPhrases: ['苏州', '拙政园', '留园', '人间天堂', '小中见大'],
      significance: '苏州园林代表了中国古典园林的最高水平。'
    },
    {
      id: 'ce059',
      title: '布达拉宫 (Potala Palace)',
      titleMeaning: 'Potala Palace',
      category: 'Landmarks',
      icon: '🏰',
      content: '布达拉宫在西藏拉萨，建在一座山上，有十三层高，是世界上海拔最高的宫殿。它是以前达赖喇嘛居住的地方，也是藏传佛教的圣地。宫殿白色的墙壁和红色的顶楼在蓝天之下特别壮观。',
      keyPhrases: ['布达拉宫', '西藏', '拉萨', '达赖喇嘛', '佛教'],
      significance: '布达拉宫是藏族文化最宏伟的象征。'
    },
    {
      id: 'ce060',
      title: '敦煌莫高窟',
      titleMeaning: 'Mogao Caves of Dunhuang',
      category: 'Landmarks',
      icon: '🕌',
      content: '莫高窟在甘肃省，是丝绸之路上的一座文化宝库。那里有超过400个洞窟，洞窟里有精美的壁画和佛像。最老的洞窟有超过1600年的历史。壁画描绘了佛教故事、飞天和古人的日常生活。',
      keyPhrases: ['莫高窟', '敦煌', '壁画', '佛教', '丝绸之路'],
      significance: '莫高窟是世界最大的佛教艺术宝库之一。'
    },

    // ── Modern China (10) ───────────────────────

    {
      id: 'ce061',
      title: '高铁 (High-Speed Rail)',
      titleMeaning: 'High-Speed Rail',
      category: 'Modern China',
      icon: '🚄',
      content: '中国拥有世界上最长的高铁网络，超过4万公里。高铁的速度一般在300公里每小时左右，从北京到上海只需要四个半小时。高铁车厢干净舒适，准时运行。高铁彻底改变了中国人的出行方式。',
      keyPhrases: ['高铁', '高速', '网络', '北京上海', '出行'],
      significance: '高铁是中国现代化的一张名片。'
    },
    {
      id: 'ce062',
      title: '手机支付 (Mobile Payment)',
      titleMeaning: 'Mobile Payment',
      category: 'Modern China',
      icon: '📱',
      content: '在中国，手机支付已经基本取代了现金。微信支付和支付宝是最常用的两种方式。不管是商场、路边摊还是菜市场，都可以扫码支付。很多人出门已经不带钱包，只带手机就可以了。连乞丐都有收款二维码。',
      keyPhrases: ['手机支付', '微信', '支付宝', '扫码', '无现金'],
      significance: '手机支付让中国率先进入了无现金社会。'
    },
    {
      id: 'ce063',
      title: '共享单车 (Shared Bikes)',
      titleMeaning: 'Shared Bikes',
      category: 'Modern China',
      icon: '🚲',
      content: '共享单车在中国城市非常普及。用手机扫一下二维码就可以骑车，骑完之后停在路边锁上就好。这解决了"最后一公里"的交通问题。最流行的品牌有美团单车、哈啰单车等。不同颜色的共享单车是城市的一道风景。',
      keyPhrases: ['共享单车', '扫码', '二维码', '最后一公里', '骑行'],
      significance: '共享单车是绿色出行在中国的创新实践。'
    },
    {
      id: 'ce064',
      title: '双十一 (Singles\' Day)',
      titleMeaning: 'Singles\' Day (11.11)',
      category: 'Modern China',
      icon: '🛒',
      content: '双十一是11月11日，原来是年轻人自嘲"光棍"的节日。现在变成了世界上最大的网购狂欢节。电商平台会推出大量折扣活动，很多人会提前把想买的东西放进购物车。2023年双十一的交易额仍然巨大，反映了中国强大的消费能力。',
      keyPhrases: ['双十一', '网购', '折扣', '购物车', '消费'],
      significance: '双十一已经发展成为全球最大的购物节。'
    },
    {
      id: 'ce065',
      title: '直播带货',
      titleMeaning: 'Live-streaming shopping',
      category: 'Modern China',
      icon: '🎥',
      content: '直播带货在中国非常火爆。主播们通过直播向观众推荐商品，观众可以即时提问和购买。著名主播李佳琦曾经在几分钟内卖出几万支口红。这种购物方式把娱乐和购物结合在一起，很受年轻人的喜爱。',
      keyPhrases: ['直播带货', '主播', '李佳琦', '购物', '直播'],
      significance: '直播带货是中国电商的最新发展趋势。'
    },
    {
      id: 'ce066',
      title: '短视频时代',
      titleMeaning: 'Short-video era',
      category: 'Modern China',
      icon: '📹',
      content: '短视频应用如抖音在国际上也很有名。人们用手机拍15秒到几分钟的视频分享自己的生活。抖音上有搞笑、美食、旅游、学习等各种内容。很多普通人也通过短视频变成了"网红"。这改变了人们获取信息和娱乐的方式。',
      keyPhrases: ['短视频', '抖音', '网红', '分享', '娱乐'],
      significance: '短视频正在重塑中国人的媒体消费习惯。'
    },
    {
      id: 'ce067',
      title: '中国制造 (Made in China)',
      titleMeaning: 'Made in China',
      category: 'Modern China',
      icon: '🏭',
      content: '中国被称为"世界工厂"，生产世界上很多产品。从玩具到手机，从衣服到汽车，"中国制造"遍布全球。近年来，中国正从"中国制造"向"中国创造"转变。华为、大疆、比亚迪等品牌在世界范围内都有影响力。',
      keyPhrases: ['中国制造', '世界工厂', '华为', '创造', '品牌'],
      significance: '"中国制造"正在转向"中国创造"。'
    },
    {
      id: 'ce068',
      title: '外卖骑手',
      titleMeaning: 'Food delivery riders',
      category: 'Modern China',
      icon: '🛵',
      content: '在城市的大街小巷，你总能看到穿着黄色或蓝色制服的外卖骑手。美团和饿了么是两大平台。无论刮风下雨，他们都在送餐的路上。外卖骑手的工作很辛苦，但为无数人提供了便利。点外卖已经成为中国年轻人的日常。',
      keyPhrases: ['外卖骑手', '美团', '饿了么', '送餐', '制服'],
      significance: '外卖骑手是支撑中国外卖经济的重要力量。'
    },
    {
      id: 'ce069',
      title: '电子竞技 (E-sports)',
      titleMeaning: 'E-sports',
      category: 'Modern China',
      icon: '🎮',
      content: '电子竞技在中国很受欢迎，尤其是年轻人。中国的电竞战队在国际比赛上经常拿冠军，比如《王者荣耀》的比赛。打电竞现在也是一种职业，好的选手收入很高。有些大学甚至开设了电竞专业。',
      keyPhrases: ['电子竞技', '电竞', '王者荣耀', '比赛', '职业'],
      significance: '电竞已成为中国体育和文化的一部分。'
    },
    {
      id: 'ce070',
      title: '新能源车',
      titleMeaning: 'New energy vehicles',
      category: 'Modern China',
      icon: '🚗',
      content: '中国现在是世界上最大的电动汽车市场。路上越来越多绿色车牌的汽车，那就是新能源车。比亚迪、蔚来、理想等是中国的电动车品牌。政府鼓励人们买电动车，绿色环保。充电桩也遍布城市的每个角落。',
      keyPhrases: ['新能源车', '电动车', '比亚迪', '绿色', '充电桩'],
      significance: '新能源车代表了中国绿色交通的未来。'
    },

    // ── Language & Stories (10) ─────────────────

    {
      id: 'ce071',
      title: '成语：画蛇添足',
      titleMeaning: 'Idiom: Drawing legs on a snake',
      category: 'Language',
      icon: '🐍',
      content: '"画蛇添足"是一个成语，意思是做多余的事情，反而把事情弄坏了。故事是说几个人比赛画蛇，一个人画完后又给蛇加了脚，结果输掉了比赛。这个成语告诉人们：做事情要适可而止，不要多此一举。',
      keyPhrases: ['画蛇添足', '成语', '多余', '适可而止', '故事'],
      significance: '成语故事蕴含着中国人的智慧。'
    },
    {
      id: 'ce072',
      title: '成语：狐假虎威',
      titleMeaning: 'Idiom: Fox borrows tiger\'s might',
      category: 'Language',
      icon: '🦊',
      content: '"狐假虎威"讲的是狐狸借老虎的威风来吓唬其他动物。现代用来形容那些依靠有权势的人来欺负别人的人。这个成语提醒我们不要被假象迷惑，也警告那些"狐假虎威"的人最终会被发现。',
      keyPhrases: ['狐假虎威', '成语', '威风', '依靠', '权势'],
      significance: '成语用动物的故事来讽刺社会现象。'
    },
    {
      id: 'ce073',
      title: '成语：守株待兔',
      titleMeaning: 'Idiom: Waiting for hares by a stump',
      category: 'Language',
      icon: '🐰',
      content: '"守株待兔"讲的是一个农夫看见兔子撞死在树桩上，于是每天都等在树桩旁，希望再有兔子撞过来。结果田地荒废了。这个成语告诉人们不要光凭运气，应该努力工作，主动去追求。',
      keyPhrases: ['守株待兔', '成语', '运气', '努力', '被动'],
      significance: '成语用简单的故事传达深刻的生活道理。'
    },
    {
      id: 'ce074',
      title: '成语：拔苗助长',
      titleMeaning: 'Idiom: Pulling seedlings to help them grow',
      category: 'Language',
      icon: '🌱',
      content: '"拔苗助长"说的是一个农夫嫌禾苗长得太慢，就一棵一棵地往上拔。结果禾苗全死了。这个成语用来形容做事急于求成，违反自然规律，反而把事情弄坏。教育孩子也好，学习语言也好，都不能拔苗助长。',
      keyPhrases: ['拔苗助长', '成语', '禾苗', '急于求成', '规律'],
      significance: '拔苗助长的教训提醒人们要有耐心。'
    },
    {
      id: 'ce075',
      title: '成语：对牛弹琴',
      titleMeaning: 'Idiom: Playing music to a cow',
      category: 'Language',
      icon: '🐄',
      content: '"对牛弹琴"意思是对听不懂的人讲道理，白费力气。故事说古代音乐家给牛弹琴，牛根本没反应。这个成语用来形容跟不理解的人交流是浪费时间。也提醒讲话要看对象，不要对牛弹琴。',
      keyPhrases: ['对牛弹琴', '成语', '交流', '白费力气', '对象'],
      significance: '"对牛弹琴"提醒我们沟通要注意对象。'
    },
    {
      id: 'ce076',
      title: '数字文化：8和4',
      titleMeaning: 'Number culture: 8 and 4',
      category: 'Language',
      icon: '🔢',
      content: '在中国数字文化中，8是最吉利的数字，因为"八"听起来像"发"（发财、发达）。很多人会选带8的电话号码或车牌号。4是最不吉利的数字，因为"四"听起来像"死"。很多楼没有4层或14层。这反映了中国人对数字谐音的重视。',
      keyPhrases: ['数字', '八', '四', '吉利', '谐音'],
      significance: '数字的文化含义影响着中国人的日常生活。'
    },
    {
      id: 'ce077',
      title: '数字文化：6和9',
      titleMeaning: 'Number culture: 6 and 9',
      category: 'Language',
      icon: '🔢',
      content: '数字6代表"顺"，六六大顺，意思是事事顺利。网络用语"666"是夸奖的意思，说一个人或一件事很厉害。数字9代表"久"，象征长久和永恒。9也是最大的个位数，象征最高。结婚送999朵玫瑰，代表爱情长长久久。',
      keyPhrases: ['六六大顺', '顺', '666', '长久', '永恒'],
      significance: '数字6和9都是中国文化中受欢迎的数字。'
    },
    {
      id: 'ce078',
      title: '十二生肖故事',
      titleMeaning: 'Legend of the Chinese Zodiac',
      category: 'Language',
      icon: '🐀',
      content: '你知道吗？为什么老鼠在十二生肖排第一？传说玉皇大帝举办了一场比赛，谁先到谁排第一。老鼠和猫约好一起去，但老鼠没叫醒猫，自己跳上牛的背，快到终点时跳下来跑第一。所以猫和老鼠成了敌人。',
      keyPhrases: ['十二生肖', '老鼠', '比赛', '猫', '玉皇大帝'],
      significance: '十二生肖的传说生动有趣，代代相传。'
    },
    {
      id: 'ce079',
      title: '普通话与方言',
      titleMeaning: 'Mandarin and dialects',
      category: 'Language',
      icon: '🗣️',
      content: '普通话是中国的官方语言，以北京语音为标准音。但中国还有很多方言，如上海话、广东话（粤语）、四川话等，有些甚至互相听不懂。在学校里孩子们都说普通话，但回家可能讲方言。保护方言文化也是一件重要的事情。',
      keyPhrases: ['普通话', '方言', '粤语', '上海话', '保护'],
      significance: '普通话和方言共同构成了丰富的汉语世界。'
    },
    {
      id: 'ce080',
      title: '汉字的演变',
      titleMeaning: 'Evolution of Chinese characters',
      category: 'Language',
      icon: '📜',
      content: '汉字已经有三千多年的历史了。最早的汉字刻在龟甲和兽骨上，叫"甲骨文"。后来发展出金文、篆书、隶书、楷书。现在我们写的是简体字，但台湾和香港还在用繁体字。了解汉字的演变有助于学习汉字。',
      keyPhrases: ['汉字', '甲骨文', '篆书', '简体字', '繁体字'],
      significance: '汉字的演变反映了中国悠久的历史文化。'
    },

    // ── More Festivals & Customs (10) ───────────

    {
      id: 'ce081',
      title: '年夜饭的意义',
      titleMeaning: 'Meaning of New Year\'s Eve dinner',
      category: 'Festivals',
      icon: '🍽️',
      content: '年夜饭是中国人一年中最重要的一顿饭。菜的数量一定要是双数，常常是8或10道菜。一定要有一条鱼，因为"鱼"和"余"同音，象征"年年有余"。还有鸡代表"吉祥"，年糕代表"年年高升"。每一道菜都有美好的含义。',
      keyPhrases: ['年夜饭', '鱼', '年年有余', '年糕', '吉祥'],
      significance: '年夜饭不只是一顿饭，更是对新一年的美好祝愿。'
    },
    {
      id: 'ce082',
      title: '贴春联的讲究',
      titleMeaning: 'Rules for pasting couplets',
      category: 'Festivals',
      icon: '🟥',
      content: '过年时家家户户都要贴春联。春联是红色的长条纸，上面写着美好的诗句。上联贴在右边，下联贴在左边。横批贴在门的上面。贴春联的时间很重要，通常在除夕上午。春联要贴到元宵节后或者直到自然掉落。',
      keyPhrases: ['春联', '上联', '下联', '横批', '除夕'],
      significance: '贴春联是春节最有仪式感的活动之一。'
    },
    {
      id: 'ce083',
      title: '放鞭炮的传统',
      titleMeaning: 'Tradition of firecrackers',
      category: 'Festivals',
      icon: '🧨',
      content: '放鞭炮是中国人过年的传统习俗。传说古代有一个叫"年"的怪兽，每年除夕出来吃人。后来人们发现"年"怕红色和巨大的响声，于是过年时就放鞭炮驱赶"年"兽。现在为了环保，很多城市限制放鞭炮了。',
      keyPhrases: ['鞭炮', '年兽', '响声', '驱赶', '环保'],
      significance: '放鞭炮的传说让春节更添传奇色彩。'
    },
    {
      id: 'ce084',
      title: '属相配对',
      titleMeaning: 'Zodiac compatibility',
      category: 'Traditions',
      icon: '💑',
      content: '在中国，有些人会在恋爱和结婚前看生肖是否相配。比如属虎和属蛇的人被认为不太合适，因为老虎和蛇天生不合。属马和属羊则是好搭配。当然现在年轻人大多不太在意这些了，但在农村地区仍有影响。',
      keyPhrases: ['属相', '配对', '恋爱', '结婚', '合适'],
      significance: '生肖配对反映了传统文化对婚恋的影响。'
    },
    {
      id: 'ce085',
      title: '生日吃什么',
      titleMeaning: 'What to eat on birthdays',
      category: 'Traditions',
      icon: '🎂',
      content: '中国人过生日除了蛋糕，还有传统的食物。一是长寿面，面条要很长，不能咬断，象征长寿。二是染红的鸡蛋，红色代表好运。有些地方的人们还会吃桃形的馒头（寿桃），桃在中国文化中象征长寿。',
      keyPhrases: ['生日', '长寿面', '红鸡蛋', '寿桃', '长寿'],
      significance: '生日的传统食物代表着对健康长寿的美好祝愿。'
    },
    {
      id: 'ce086',
      title: '龙舟赛',
      titleMeaning: 'Dragon boat racing',
      category: 'Festivals',
      icon: '🚣',
      content: '每年端午节，全国各地都会举行龙舟比赛。每艘船上坐着二十个左右的划手，一个鼓手在船头敲鼓指挥节奏。划手跟着鼓点一起用力划。岸上有很多观众大声加油，场面非常热闹。这项传统已经传播到世界很多国家。',
      keyPhrases: ['龙舟', '划手', '鼓手', '比赛', '端午节'],
      significance: '龙舟赛体现了中国人的团队精神和竞争意识。'
    },
    {
      id: 'ce087',
      title: '属相与性格',
      titleMeaning: 'Zodiac and personality',
      category: 'Traditions',
      icon: '🐯',
      content: '很多人相信生肖会影响一个人的性格。比如属龙的人自信、有领导力；属兔的人温和、善良；属猴的人聪明、灵活。虽然在现代社会，人们不太认真看待这些，但在聊天的时候，聊属相还是一个有趣的话题。你的属相是什么？',
      keyPhrases: ['生肖', '性格', '属龙', '属兔', '有趣'],
      significance: '生肖性格描述是一种轻松的社交话题。'
    },
    {
      id: 'ce088',
      title: '中元节 (Ghost Festival)',
      titleMeaning: 'Ghost Festival',
      category: 'Festivals',
      icon: '👻',
      content: '中元节在农历七月十五，是传统的"鬼节"。中国人相信这一天阴间的鬼魂会来到人间。人们会烧纸钱给去世的亲人使用。有些地方还会放河灯，为鬼魂照路。这个节日表现了中国人对逝去亲人的思念。',
      keyPhrases: ['中元节', '鬼节', '纸钱', '河灯', '思念'],
      significance: '中元节反映了中国人对亡灵的敬畏和怀念。'
    },
    {
      id: 'ce089',
      title: '寒食节',
      titleMeaning: 'Cold Food Festival',
      category: 'Festivals',
      icon: '🍃',
      content: '寒食节在清明节前一天，是为了纪念古代忠臣介子推。据说介子推宁愿被烧死也不出来做官。人们在这一天不吃热食，只吃冷的食物，以此来纪念他。现在寒食节和清明节的习俗已经融合在一起了。',
      keyPhrases: ['寒食节', '介子推', '冷食', '纪念', '忠臣'],
      significance: '寒食节体现了中国人对忠义精神的崇敬。'
    },
    {
      id: 'ce090',
      title: '祭拜祖先',
      titleMeaning: 'Worshipping ancestors',
      category: 'Traditions',
      icon: '🙏',
      content: '在很多中国家庭里，供奉祖先的牌位是一种传统。家里设有一个小供台或祖先堂，上面放着祖先的照片或牌位。重要的节日，人们会点上香，放上水果和食物作为祭品。这个习俗代表了中国人"不忘本"的家庭观念。',
      keyPhrases: ['祭拜', '祖先', '牌位', '香', '不忘本'],
      significance: '祭拜祖先是中国人饮水思源的文化体现。'
    },

    // ── More Culture & Social (10) ─────────────

    {
      id: 'ce091',
      title: '关系 (Guanxi)',
      titleMeaning: 'Guanxi (Personal Connections)',
      category: 'Social',
      icon: '🔗',
      content: '在中国，"关系"是一个很重要的概念。关系指的是你认识的人和你与他们的联系。好的关系可能帮你在工作、学习、生活中获得便利。建立关系通常需要在日常交往中互相关心、互相帮助。',
      keyPhrases: ['关系', '人脉', '联系', '互相帮助', '便利'],
      significance: '"关系"是中国社会运作的核心机制之一。'
    },
    {
      id: 'ce092',
      title: '打招呼的方式',
      titleMeaning: 'Ways of greeting',
      category: 'Social',
      icon: '👋',
      content: '中国人打招呼的方式和西方不太一样。最常见的问候是"你吃了吗？"，不是真的要问你吃了没有，只是表达关心。朋友见面常说"你去哪儿？"。这些问题的目的不是打听隐私，而是一种友好的问候。',
      keyPhrases: ['打招呼', '你吃了吗', '问候', '关心', '友好'],
      significance: '理解中国人的问候方式有助于更好地社交。'
    },
    {
      id: 'ce093',
      title: '谦虚文化',
      titleMeaning: 'Culture of humility',
      category: 'Social',
      icon: '🙂',
      content: '在中国文化中，谦虚是一种美德。如果有人夸你，你应该说"哪里哪里"，表示自己还不够好。即使你很优秀，也不应该直接说自己多好。这跟一些西方文化中鼓励自我表现不太一样。谦虚让人显得有教养。',
      keyPhrases: ['谦虚', '哪里哪里', '夸', '美德', '教养'],
      significance: '谦虚是中国人社交中的重要准则。'
    },
    {
      id: 'ce094',
      title: '称呼的学问',
      titleMeaning: 'The art of addressing people',
      category: 'Social',
      icon: '👤',
      content: '中文里的称呼很复杂。对不认识的老人，可以叫"大爷"、"大妈"；对朋友的父母，叫"叔叔"、"阿姨"。在学校，叫"老师"；在单位，可以叫"师傅"。乱叫的话可能不太礼貌。不过对同龄人，叫"帅哥"或"美女"都比较安全。',
      keyPhrases: ['称呼', '大爷', '叔叔', '老师', '礼貌'],
      significance: '合适的称呼是中国人际交往的第一步。'
    },
    {
      id: 'ce095',
      title: '集体主义',
      titleMeaning: 'Collectivism',
      category: 'Social',
      icon: '👨‍👩‍👧‍👦',
      content: '中国社会强调集体主义，个人要服从集体利益。在家庭中要顾家，在公司里以团队为先。这也可以解释为什么中国人在疫情期间能够很好地配合隔离措施。在一些需要个人突出的时候，中国人可能显得比较保守。',
      keyPhrases: ['集体主义', '个人', '团队', '家庭', '社会'],
      significance: '集体主义是中国社会行为的一个重要特点。'
    },
    {
      id: 'ce096',
      title: '高考 (Gaokao)',
      titleMeaning: 'College Entrance Exam',
      category: 'Modern China',
      icon: '📝',
      content: '高考是中国最重要的考试，通常在6月7日和8日。它对学生的未来有非常大的影响。高考期间，很多人会为考生加油。考场周边会交通管制，建筑工地停工。家长在学校外焦急地等待。高考被认为是最公平的选拔方式。',
      keyPhrases: ['高考', '考试', '大学', '家长', '公平'],
      significance: '高考是中国人人生中最重要的转折点之一。'
    },
    {
      id: 'ce097',
      title: '独生子女政策的影响',
      titleMeaning: 'Impact of the one-child policy',
      category: 'Social',
      icon: '👪',
      content: '中国从1980年到2016年实行了独生子女政策。这造就了一代没有兄弟姐妹的年轻人。他们被称为"小皇帝"，因为是家里的唯一希望。现在政策已放宽，很多家庭可以生两个或三个孩子了。但这个政策对家庭结构产生了深远影响。',
      keyPhrases: ['独生子女', '政策', '小皇帝', '家庭', '兄弟姐妹'],
      significance: '独生子女政策深刻改变了中国社会的家庭结构。'
    },
    {
      id: 'ce098',
      title: '中国人的时间观',
      titleMeaning: 'Chinese perception of time',
      category: 'Social',
      icon: '⏰',
      content: '中国人对时间的态度比较灵活。朋友聚会晚到十几分钟是可以接受的，但在商务场合要准时。中国文化看重长期规划，"慢慢来"是一种生活智慧。俗话说"欲速则不达"，意思是太着急反而达不到目的。',
      keyPhrases: ['时间观', '准时', '慢慢来', '长期', '规划'],
      significance: '中国的时间观体现了"慢工出细活"的哲学。'
    },
    {
      id: 'ce099',
      title: '送礼不能送水果？',
      titleMeaning: 'Can\'t give fruit as a gift?',
      category: 'Social',
      icon: '🍐',
      content: '有些水果不能随便送。梨不能送，因为"梨"听起来像"离"，代表分离。情侣之间最好不要送梨。李子也不太好，因为"李"和"离"同音。橘子则是好礼物，代表吉祥。送礼前了解一下这些知识可以避免尴尬。',
      keyPhrases: ['送礼', '梨', '分离', '橘子', '吉祥'],
      significance: '水果送礼的讲究体现了中国人对语言的敏感。'
    },
    {
      id: 'ce100',
      title: '微笑文化',
      titleMeaning: 'Smile culture',
      category: 'Social',
      icon: '😊',
      content: '在中国，人们不一定像一些国家那样对陌生人微笑。这可能让外国游客觉得中国人不高冷。但这不是不友好好，而是文化差异。中国人一旦熟悉之后，非常热情。微笑更多是留给认识的人的。这跟西方"对每个人都微笑"的习惯有所不同。',
      keyPhrases: ['微笑', '文化差异', '陌生人', '热情', '习惯'],
      significance: '了解微笑文化的差异有助于跨文化交流。'
    }
  ];

  if (typeof CulturalData !== 'undefined' && CulturalData.notes) {
    CulturalData.notes = CulturalData.notes.concat(items);
  }
})();

// ============================================
// CHINESE MASTER - Cultural Quadruple Data
// 225 cultural entries across 24 categories
// ============================================

const CulturalQuadruple = {
    notes: [
        // ============================================================
        // 24 SOLAR TERMS (c100–c123)
        // ============================================================
        {
            id: `c100`, title: `立春`, titleMeaning: `Beginning of Spring`,
            category: `Solar Terms`, icon: `🌱`,
            content: `立春是二十四节气的第一个节气，标志着春天的开始。一般在每年的2月3日至5日之间。这一天，太阳到达黄经315度。立春之后，天气逐渐变暖，万物开始复苏。在中国北方，人们有"咬春"的习俗，吃春饼来庆祝春天的到来。农民开始准备春耕。`,
            keyPhrases: ['立春', '春天', '春饼', '咬春'],
            significance: `一年之计在于春，立春象征着新生和希望。`
        },
        {
            id: `c101`, title: `雨水`, titleMeaning: `Rain Water`,
            category: `Solar Terms`, icon: `🌧️`,
            content: `雨水是第二个节气，一般在2月18日至20日之间。这时候气温回升，冰雪融化，降水增多，所以叫"雨水"。春雨贵如油，对农作物的生长非常重要。在中国一些地方，出嫁的女儿会回娘家看望父母。人们也常说"雨水节，接雨水"，用雨水泡茶。`,
            keyPhrases: ['雨水', '春雨', '降水', '融化'],
            significance: `雨水标志着降雨开始增多，滋润大地，孕育生机。`
        },
        {
            id: `c102`, title: `惊蛰`, titleMeaning: `Awakening of Insects`,
            category: `Solar Terms`, icon: `⚡`,
            content: `惊蛰是第三个节气，通常在3月5日或6日。春雷始鸣，惊醒了冬眠的昆虫，所以叫"惊蛰"。气温明显回升，大地回春。农民开始忙于春耕。在民间习俗中，人们会吃梨，寓意远离疾病。也有人说惊蛰这天要"打小人"，驱赶霉运。`,
            keyPhrases: ['惊蛰', '春雷', '冬眠', '吃梨'],
            significance: `万物复苏，春雷唤醒大地，农事开始繁忙。`
        },
        {
            id: `c103`, title: `春分`, titleMeaning: `Spring Equinox`,
            category: `Solar Terms`, icon: `🌿`,
            content: `春分在3月20日或21日，太阳直射赤道，昼夜等长。春分之后，白天越来越长，夜晚越来越短。气温继续回升，正是春耕大忙时节。民间有"春分到，蛋儿俏"的说法，人们会玩"立蛋"的游戏。春分也是祭祀祖先的日子。`,
            keyPhrases: ['春分', '昼夜', '立蛋', '平衡'],
            significance: `春分代表昼夜平衡，象征中庸与和谐。`
        },
        {
            id: `c104`, title: `清明`, titleMeaning: `Clear and Bright`,
            category: `Solar Terms`, icon: `🌧️`,
            content: `清明是第五个节气，一般在4月4日或5日。既是节气也是传统节日。天气清澈明朗，万物生长。清明节是中国最重要的祭祀节日之一，人们会扫墓、祭拜祖先。同时，清明也是踏青、放风筝的好时节。古诗说"清明时节雨纷纷"。`,
            keyPhrases: ['清明', '扫墓', '踏青', '祭祀'],
            significance: `清明既是追思先人的日子，也是踏青赏春的节气。`
        },
        {
            id: `c105`, title: `谷雨`, titleMeaning: `Grain Rain`,
            category: `Solar Terms`, icon: `🌾`,
            content: `谷雨是第六个节气，在4月19日至21日之间。这是春季的最后一个节气。"雨生百谷"，降雨增多有利于谷类作物的生长。在中国南方有摘谷雨茶的习俗，据说谷雨这天采的茶特别好。北方有吃香椿的习惯。`,
            keyPhrases: ['谷雨', '百谷', '谷雨茶', '香椿'],
            significance: `雨水滋润百谷，象征着丰收的希望。`
        },
        {
            id: `c106`, title: `立夏`, titleMeaning: `Beginning of Summer`,
            category: `Solar Terms`, icon: `☀️`,
            content: `立夏是第七个节气，在5月5日至7日之间。表示夏天的开始。气温明显升高，雷雨增多，农作物进入旺盛生长期。民间有"立夏吃蛋"的习俗，还有"称人"的习俗，据说立夏称了体重就不会在夏天消瘦。江南一带还有"立夏尝三鲜"的说法。`,
            keyPhrases: ['立夏', '夏天', '吃蛋', '称人'],
            significance: `万物繁茂，标志着夏季和农忙的开始。`
        },
        {
            id: `c107`, title: `小满`, titleMeaning: `Grain Buds`,
            category: `Solar Terms`, icon: `🌿`,
            content: `小满是第八个节气，在5月20日至22日之间。麦类等夏熟作物籽粒开始饱满但尚未成熟，所以叫"小满"。南方有"小满动三车"的农谚（丝车、油车、水车）。这个节气也提醒人们"满招损，谦受益"的人生道理。`,
            keyPhrases: ['小满', '麦子', '饱满', '水车'],
            significance: `小满未满，象征着谦逊和持续成长的智慧。`
        },
        {
            id: `c108`, title: `芒种`, titleMeaning: `Grain in Ear`,
            category: `Solar Terms`, icon: `🌾`,
            content: `芒种是第九个节气，在6月5日至7日之间。"芒"指有芒的麦子快收，"种"指有芒的稻子可种，所以叫"芒种"。这是一个收获和播种同时进行的忙碌节气。南方进入梅雨季节。民间有送花神的习俗，感谢花神带来美丽的春天。`,
            keyPhrases: ['芒种', '收割', '播种', '梅雨'],
            significance: `收获与播种并行，象征勤劳和时机的重要。`
        },
        {
            id: `c109`, title: `夏至`, titleMeaning: `Summer Solstice`,
            category: `Solar Terms`, icon: `☀️`,
            content: `夏至在6月21日或22日，太阳直射北回归线，是一年中白昼最长的一天。夏至之后天气越来越热。古人说"夏至一阴生"，阳气达到极致后开始转阴。民间有"冬至饺子夏至面"的说法，北方人夏至吃面。`,
            keyPhrases: ['夏至', '白昼', '最长', '夏至面'],
            significance: `阳极而生阴，体现阴阳转换的哲学思想。`
        },
        {
            id: `c110`, title: `小暑`, titleMeaning: `Minor Heat`,
            category: `Solar Terms`, icon: `🔥`,
            content: `小暑是第十一个节气，在7月6日至8日之间。天气开始炎热，但还没到最热的时候。民间有"小暑大暑，上蒸下煮"的说法。这时候吃西瓜、喝绿豆汤是很好的消暑方式。南方有"食新"的习俗，吃新米尝新。`,
            keyPhrases: ['小暑', '炎热', '消暑', '西瓜'],
            significance: `小暑入伏，提醒人们注意防暑降温。`
        },
        {
            id: `c111`, title: `大暑`, titleMeaning: `Major Heat`,
            category: `Solar Terms`, icon: `🌡️`,
            content: `大暑是第十二个节气，在7月22日至24日之间。这是一年中最热的时期。湿热交蒸，农作物生长最快。人们要注意防暑。广东很多地方在大暑有吃仙草的习俗。北方人会喝绿豆汤、吃凉面来消暑。`,
            keyPhrases: ['大暑', '酷热', '仙草', '绿豆汤'],
            significance: `极致炎热也孕育着最旺盛的生命力。`
        },
        {
            id: `c112`, title: `立秋`, titleMeaning: `Beginning of Autumn`,
            category: `Solar Terms`, icon: `🍂`,
            content: `立秋是第十三个节气，在8月7日至9日之间。表示秋天的开始。但立秋不代表马上凉快，"秋老虎"可能还会出现。民间有"贴秋膘"的习俗，吃炖肉等补充夏天消耗的体力。还有"啃秋"吃西瓜的说法。`,
            keyPhrases: ['立秋', '秋老虎', '贴秋膘', '啃秋'],
            significance: `标志着秋天来临，收获的季节即将到来。`
        },
        {
            id: `c113`, title: `处暑`, titleMeaning: `End of Heat`,
            category: `Solar Terms`, icon: `🍃`,
            content: `处暑是第十四个节气，在8月22日至24日之间。"处"是终止的意思，处暑表示炎热的夏天即将结束。气温开始下降，昼夜温差加大。民间有处暑吃鸭子的习俗。秋天也是放河灯、中元节祭祖的时节。`,
            keyPhrases: ['处暑', '暑气', '终止', '放河灯'],
            significance: `夏去秋来，气温变化提醒人们顺应自然。`
        },
        {
            id: `c114`, title: `白露`, titleMeaning: `White Dew`,
            category: `Solar Terms`, icon: `💧`,
            content: `白露是第十五个节气，在9月7日至9日之间。天气转凉，清晨地面和叶子上有白色的露珠。古人以四时配五行，秋属金、金白色，所以叫"白露"。民间有"白露不露身"的说法，意味着该添衣了。南方有喝白露茶和吃龙眼的习俗。`,
            keyPhrases: ['白露', '露珠', '白露茶', '龙眼'],
            significance: `露水凝结意味着秋意渐浓，提醒添衣保暖。`
        },
        {
            id: `c115`, title: `秋分`, titleMeaning: `Autumn Equinox`,
            category: `Solar Terms`, icon: `🍁`,
            content: `秋分在9月22日至24日之间，太阳直射赤道，昼夜等长。秋分之后北半球昼短夜长。这是秋收、秋耕、秋种的"三秋"大忙时节。秋分也是中国农民丰收节。民间有"秋分吃秋菜"的习俗。`,
            keyPhrases: ['秋分', '昼夜', '丰收', '秋菜'],
            significance: `昼夜平分，象征平衡，是收获与感恩的季节。`
        },
        {
            id: `c116`, title: `寒露`, titleMeaning: `Cold Dew`,
            category: `Solar Terms`, icon: `❄️`,
            content: `寒露是第十七个节气，在10月8日或9日。气温比白露时更低，地面的露水更冷，快要凝结成霜了。北方已进入深秋，南方也逐渐变凉。这时候是登高赏红叶的好时节。有"寒露吃芝麻"的说法。`,
            keyPhrases: ['寒露', '露水', '红叶', '赏秋'],
            significance: `天气渐冷，提醒人们顺应季节变化调养身体。`
        },
        {
            id: `c117`, title: `霜降`, titleMeaning: `Frost's Descent`,
            category: `Solar Terms`, icon: `🌨️`,
            content: `霜降是第十八个节气，在10月23日或24日。这是秋天的最后一个节气，天气渐冷，开始有霜。北方已经进入冬季模式，树叶大量飘落。民间有"霜降吃柿子"的习俗，据说吃了不会流鼻涕。也是赏菊的最佳时期。`,
            keyPhrases: ['霜降', '降霜', '柿子', '菊花'],
            significance: `秋去冬来，霜降标志着秋天的告别。`
        },
        {
            id: `c118`, title: `立冬`, titleMeaning: `Beginning of Winter`,
            category: `Solar Terms`, icon: `🌬️`,
            content: `立冬是第十九个节气，在11月7日或8日。表示冬天正式开始。虽然南方可能还很温暖，但北方已经需要穿棉衣了。民间有"立冬补冬"的习俗，吃饺子、喝羊汤来补充能量。立冬也是汉字文化圈的传统节日。`,
            keyPhrases: ['立冬', '补冬', '饺子', '羊汤'],
            significance: `立冬标志着冬季开始，是进补养生的好时机。`
        },
        {
            id: `c119`, title: `小雪`, titleMeaning: `Minor Snow`,
            category: `Solar Terms`, icon: `🌨️`,
            content: `小雪是第二十个节气，在11月22日或23日。北方开始降雪，但雪量不大。气温继续下降。民间开始准备过冬的食物，比如腌腊肉、腌菜。有"小雪腌菜，大雪腌肉"的说法。黄河以北可能出现土壤封冻。`,
            keyPhrases: ['小雪', '降雪', '腌菜', '腊肉'],
            significance: `准备过冬的时节，体现中国人未雨绸缪的智慧。`
        },
        {
            id: `c120`, title: `大雪`, titleMeaning: `Major Snow`,
            category: `Solar Terms`, icon: `❄️`,
            content: `大雪是第二十一个节气，在12月6日至8日之间。雪量较大，范围也广。北方"千里冰封，万里雪飘"。南方也可能见到雪花。大雪是"进补"的好时节，有"冬天进补，开春打虎"的说法。`,
            keyPhrases: ['大雪', '雪花', '冰封', '进补'],
            significance: `严冬时节，休养生息，为来年积蓄力量。`
        },
        {
            id: `c121`, title: `冬至`, titleMeaning: `Winter Solstice`,
            category: `Solar Terms`, icon: `🥟`,
            content: `冬至在12月21日至23日之间，太阳直射南回归线，是北半球白昼最短、黑夜最长的一天。冬至大如年，是中国最重要的节气之一。北方吃饺子，南方吃汤圆。古人认为"冬至一阳生"，阳气开始回升。`,
            keyPhrases: ['冬至', '饺子', '汤圆', '一阳生'],
            significance: `阴极而阳生，象征循环往复、生生不息的自然规律。`
        },
        {
            id: `c122`, title: `小寒`, titleMeaning: `Minor Cold`,
            category: `Solar Terms`, icon: `🥶`,
            content: `小寒是第二十三个节气，在1月5日至7日之间。标志着一年中最寒冷时段的开始。虽然叫"小寒"，但在很多年份，小寒比大寒更冷。民间有"小寒胜大寒"的说法。此时腊梅盛开，是赏梅的好时节。`,
            keyPhrases: ['小寒', '寒冷', '腊梅', '赏梅'],
            significance: `在最寒冷的时节也有生命绽放，体现坚韧精神。`
        },
        {
            id: `c123`, title: `大寒`, titleMeaning: `Major Cold`,
            category: `Solar Terms`, icon: `🧊`,
            content: `大寒是二十四节气的最后一个节气，在1月20日前后。虽是最冷时节，但也意味着春天不远了。大寒过后就是立春，一个新的轮回即将开始。民间有"大寒迎年"的风俗，人们开始准备年货，迎接春节。`,
            keyPhrases: ['大寒', '极寒', '年货', '春节'],
            significance: `二十四节气的终点，也预示着新的开始。`
        },

        // ============================================================
        // CHINESE INVENTIONS (c124–c135)
        // ============================================================
        {
            id: `c124`, title: `造纸术`, titleMeaning: `Papermaking`,
            category: `Inventions`, icon: `📜`,
            content: `造纸术是中国古代四大发明之一。东汉时期（公元105年），蔡伦改进了造纸技术，用树皮、麻头、破布和渔网等原料制造出质量优良的纸张。造纸术后来传到朝鲜、日本、阿拉伯和欧洲，对世界文明做出了巨大贡献。在这之前，人们用竹简、丝绸来写字。`,
            keyPhrases: ['造纸术', '蔡伦', '四大发明'],
            significance: `造纸术彻底改变了人类记录和传播知识的方式。`
        },
        {
            id: `c125`, title: `印刷术`, titleMeaning: `Printing`,
            category: `Inventions`, icon: `📖`,
            content: `印刷术也是四大发明之一。最早的雕版印刷出现在唐代，宋代毕昇发明了活字印刷。活字印刷使用可以移动的单个字模，大大提高了印刷效率，降低了书籍的成本。印刷术传到欧洲后，推动了文艺复兴和科学革命。`,
            keyPhrases: ['印刷术', '毕昇', '活字印刷'],
            significance: `印刷术促进了知识的传播和教育的普及。`
        },
        {
            id: `c126`, title: `火药`, titleMeaning: `Gunpowder`,
            category: `Inventions`, icon: `💥`,
            content: `火药是中国古代炼丹家在炼丹过程中意外发现的，主要成分是硫磺、木炭和硝石。唐代已经用于军事。后来火药通过阿拉伯传到欧洲，改变了世界战争格局。在中国，火药也用于制作烟花和爆竹，增添节日气氛。`,
            keyPhrases: ['火药', '炼丹', '烟花', '四大发明'],
            significance: `火药的发明改变了世界军事格局，也带来了绚丽的烟花文化。`
        },
        {
            id: `c127`, title: `指南针`, titleMeaning: `Compass`,
            category: `Inventions`, icon: `🧭`,
            content: `指南针是利用磁铁在地球磁场中的指极性而制成的一种指向仪器。最早的形式是"司南"，出现在战国时期。宋代指南针应用于航海，使远洋航行成为可能。郑和下西洋和后来欧洲的地理大发现都离不开指南针的帮助。`,
            keyPhrases: ['指南针', '司南', '航海', '四大发明'],
            significance: `指南针开启了人类远洋航海的新纪元。`
        },
        {
            id: `c128`, title: `算盘`, titleMeaning: `Abacus`,
            category: `Inventions`, icon: `🧮`,
            content: `算盘是中国传统的计算工具，起源于汉代或更早。算盘呈长方形，周为木框，内贯竹杆，杆上串有算珠，上珠当五，下珠当一。熟练者运算速度快于计算器。在计算机出现前，算盘是中国商业和日常生活中不可或缺的工具。`,
            keyPhrases: ['算盘', '计算', '算珠'],
            significance: `算盘是古代计算技术的杰出代表，至今仍在使用。`
        },
        {
            id: `c129`, title: `筷子`, titleMeaning: `Chopsticks`,
            category: `Inventions`, icon: `🥢`,
            content: `筷子是中国最具代表性的餐具，有三千多年的历史。最早的筷子是竹子或木头做的。使用筷子需要手指的协调配合，被认为有助于大脑发育。筷子不仅是餐具，也是中国文化的重要符号。中国筷子比日本和韩国筷子更长更粗。`,
            keyPhrases: ['筷子', '餐具', '饮食文化'],
            significance: `筷子体现了中华饮食文明的智慧和优雅。`
        },
        {
            id: `c130`, title: `丝绸`, titleMeaning: `Silk`,
            category: `Inventions`, icon: `🧵`,
            content: `中国是丝绸的故乡，养蚕缫丝的历史可以追溯到五千年前。传说黄帝的妻子嫘祖发明了养蚕和织丝技术。丝绸通过丝绸之路传到西方，成为珍贵的奢侈品。古罗马人以穿中国丝绸为荣。丝绸至今仍是中国重要的文化符号和出口产品。`,
            keyPhrases: ['丝绸', '养蚕', '丝绸之路', '嫘祖'],
            significance: `丝绸是古代中国与世界连接的纽带。`
        },
        {
            id: `c131`, title: `瓷器`, titleMeaning: `Porcelain`,
            category: `Inventions`, icon: `🏺`,
            content: `瓷器是中国古代的伟大发明，英语"China"就是瓷器的意思。最早的原始瓷器出现在商代，成熟的瓷器在东汉时期出现。景德镇被称为"瓷都"，生产的瓷器享誉世界。青花瓷是中国瓷器的代表，蓝白相间，精美绝伦。`,
            keyPhrases: ['瓷器', '景德镇', '青花瓷', 'China'],
            significance: `瓷器代表了中国古代工匠精神和审美追求。`
        },
        {
            id: `c132`, title: `地动仪`, titleMeaning: `Seismoscope`,
            category: `Inventions`, icon: `🏛️`,
            content: `地动仪是东汉科学家张衡在公元132年发明的，是世界上最早的测报地震的仪器。仪器外围有八条龙，每条龙嘴里含着一颗铜球，下方各有一只蛤蟆。哪个方向发生地震，对应方向的龙就会吐出铜球落入蛤蟆嘴中。`,
            keyPhrases: ['地动仪', '张衡', '地震'],
            significance: `世界上第一台地震检测仪器，展现了中国古代科学智慧。`
        },
        {
            id: `c133`, title: `浑天仪`, titleMeaning: `Armillary Sphere`,
            category: `Inventions`, icon: `🔭`,
            content: `浑天仪是中国古代观测天体运行的天文仪器，由张衡发明和完善。它用多个同心环表示天球的各种坐标系，可以用来测量天体的位置。浑天仪体现了中国古代"浑天说"的宇宙观，认为天地像一个鸡蛋。`,
            keyPhrases: ['浑天仪', '张衡', '天文'],
            significance: `中国古人对宇宙探索的重要工具和智慧结晶。`
        },
        {
            id: `c134`, title: `纸币`, titleMeaning: `Paper Money`,
            category: `Inventions`, icon: `💴`,
            content: `世界上最早的纸币出现在中国北宋时期（公元1023年），名叫"交子"。当时四川的商人不便携带大量铁钱，于是发明了纸质凭证。后来政府接管并正式发行"交子"。这一创新比欧洲最早的纸币早了六百多年。`,
            keyPhrases: ['纸币', '交子', '北宋'],
            significance: `世界最早的纸币，改变了人类的交易方式和经济形态。`
        },
        {
            id: `c135`, title: `风筝`, titleMeaning: `Kite`,
            category: `Inventions`, icon: `🪁`,
            content: `风筝起源于中国，有两千多年的历史。最早的风筝是墨子和鲁班用木头制作的。纸发明后，出现了纸风筝。风筝最初用于军事通讯和测量距离，后来成为民间娱乐活动。潍坊被称为"风筝之都"，每年举办国际风筝节。`,
            keyPhrases: ['风筝', '潍坊', '飞行', '娱乐'],
            significance: `风筝体现了人类对飞行的早期探索和美好想象。`
        },

        // ============================================================
        // FAMOUS LANDMARKS (c136–c159)
        // ============================================================
        {
            id: `c136`, title: `长城`, titleMeaning: `The Great Wall`,
            category: `Landmarks`, icon: `🏯`,
            content: `长城是中国最著名的古代军事防御工程，总长超过两万公里。最早的长城建于春秋战国时期，秦始皇统一六国后连接和扩建了长城。我们现在看到的长城大多是明代修建的。长城1987年被列入世界文化遗产。"不到长城非好汉"是中国人的名言。`,
            keyPhrases: ['长城', '秦始皇', '万里长城', '八达岭'],
            significance: `长城是中华民族的象征，体现了坚韧不拔的民族精神。`
        },
        {
            id: `c137`, title: `故宫`, titleMeaning: `The Forbidden City`,
            category: `Landmarks`, icon: `🏯`,
            content: `故宫位于北京中心，是明清两代的皇家宫殿，建于1406年至1420年。有大小宫殿七十多座，房屋九千余间。故宫以中轴线对称布局，体现了中国古代建筑的最高水平。现在是故宫博物院，收藏了大量珍贵文物。`,
            keyPhrases: ['故宫', '紫禁城', '对称', '太和殿'],
            significance: `故宫是中国古代建筑艺术的巅峰之作。`
        },
        {
            id: `c138`, title: `兵马俑`, titleMeaning: `Terracotta Warriors`,
            category: `Landmarks`, icon: `🗿`,
            content: `兵马俑位于陕西省西安市，是秦始皇陵的一部分。1974年被农民打井时偶然发现。坑内有数以千计的兵马俑，每个士兵的面部表情都不一样，还有战车和马匹。兵马俑被称为"世界第八大奇迹"。`,
            keyPhrases: ['兵马俑', '秦始皇', '西安', '陶俑'],
            significance: `展示了秦朝的强大军事力量和精湛的雕塑技艺。`
        },
        {
            id: `c139`, title: `西湖`, titleMeaning: `West Lake`,
            category: `Landmarks`, icon: `🌊`,
            content: `西湖位于浙江省杭州市，是中国最著名的湖泊之一。西湖三面环山，风景如画。有"苏堤春晓"、"断桥残雪"等十景。关于西湖有很多美丽的传说，最著名的是白蛇传。西湖2011年被列入世界文化遗产。`,
            keyPhrases: ['西湖', '杭州', '十景', '白蛇传'],
            significance: `西湖是中国山水美学的典范，影响了中日的园林设计。`
        },
        {
            id: `c140`, title: `黄山`, titleMeaning: `Yellow Mountain`,
            category: `Landmarks`, icon: `⛰️`,
            content: `黄山位于安徽省，以奇松、怪石、云海、温泉"四绝"闻名于世。有"五岳归来不看山，黄山归来不看岳"的说法。黄山的迎客松是中国最著名的松树。黄山1990年被列入世界文化与自然双重遗产。`,
            keyPhrases: ['黄山', '迎客松', '云海', '四绝'],
            significance: `黄山代表了中国山水画的理想境界和审美标准。`
        },
        {
            id: `c141`, title: `桂林山水`, titleMeaning: `Guilin Scenery`,
            category: `Landmarks`, icon: `🏞️`,
            content: `桂林位于广西壮族自治区，以"山清、水秀、洞奇、石美"著称。喀斯特地貌形成了奇特的峰林景观。"桂林山水甲天下"这句话流传千年。漓江两岸的山水风光印在了二十元人民币的背面。`,
            keyPhrases: ['桂林', '漓江', '山水甲天下'],
            significance: `桂林山水是中国自然风光的代表和骄傲。`
        },
        {
            id: `c142`, title: `九寨沟`, titleMeaning: `Jiuzhaigou Valley`,
            category: `Landmarks`, icon: `🏞️`,
            content: `九寨沟位于四川省，因沟内有九个藏族村寨而得名。以翠海、叠瀑、彩林、雪峰和藏族风情而闻名。湖水颜色丰富，蓝绿交映，美不胜收。"九寨归来不看水"是对它的最高评价。1992年被列入世界自然遗产。`,
            keyPhrases: ['九寨沟', '翠海', '瀑布', '藏族'],
            significance: `九寨沟是大自然馈赠给人类的珍贵礼物。`
        },
        {
            id: `c143`, title: `泰山`, titleMeaning: `Mount Tai`,
            category: `Landmarks`, icon: `⛩️`,
            content: `泰山位于山东省，是"五岳之首"。历代帝王在登基后会到泰山举行封禅大典，以证明自己的统治是"天命所归"。泰山被古人视为"直通帝座"的神山。1987年被列入世界文化与自然双重遗产。`,
            keyPhrases: ['泰山', '五岳', '封禅', '日出'],
            significance: `泰山承载了中华民族的历史记忆和精神信仰。`
        },
        {
            id: `c144`, title: `布达拉宫`, titleMeaning: `Potala Palace`,
            category: `Landmarks`, icon: `🏰`,
            content: `布达拉宫位于西藏拉萨的红山上，是世界上海拔最高的宫殿。建于公元七世纪，是松赞干布为迎娶文成公主而建。布达拉宫是藏传佛教的圣地，也是西藏最宏伟的建筑。1994年被列入世界文化遗产。`,
            keyPhrases: ['布达拉宫', '拉萨', '西藏', '松赞干布'],
            significance: `布达拉宫是藏族文化的象征和人类建筑史上的奇迹。`
        },
        {
            id: `c145`, title: `莫高窟`, titleMeaning: `Mogao Caves`,
            category: `Landmarks`, icon: `🛕`,
            content: `莫高窟位于甘肃省敦煌市，俗称"千佛洞"。始建于前秦时期，历经十六国、北朝、隋、唐、五代、西夏、元等朝代，连续营造了一千多年。现有洞窟735个，壁画4.5万平方米，泥质彩塑2415尊。是世界上现存规模最大的佛教艺术圣地。`,
            keyPhrases: ['莫高窟', '敦煌', '千佛洞', '壁画'],
            significance: `莫高窟是丝绸之路上最璀璨的文化明珠。`
        },
        {
            id: `c146`, title: `颐和园`, titleMeaning: `Summer Palace`,
            category: `Landmarks`, icon: `🏯`,
            content: `颐和园位于北京西郊，是中国现存最大的皇家园林。始建于清乾隆年间（1750年），原为清漪园。以昆明湖和万寿山为基址，以杭州西湖为蓝本。颐和园集中了中国古典园林艺术的精华，1998年被列入世界文化遗产。`,
            keyPhrases: ['颐和园', '昆明湖', '万寿山', '皇家园林'],
            significance: `颐和园是中国古典园林艺术的集大成者。`
        },
        {
            id: `c147`, title: `天坛`, titleMeaning: `Temple of Heaven`,
            category: `Landmarks`, icon: `🛕`,
            content: `天坛位于北京，建于明永乐十八年（1420年），是明清两代皇帝祭天、祈祷五谷丰登的场所。祈年殿是天坛的核心建筑，圆形攒尖顶代表天圆地方的宇宙观。天坛的建筑中大量使用了象征天、地和万物的数字。1998年被列入世界文化遗产。`,
            keyPhrases: ['天坛', '祈年殿', '祭天', '回音壁'],
            significance: `天坛体现了中国古代"天人合一"的哲学思想。`
        },
        {
            id: `c148`, title: `苏州园林`, titleMeaning: `Suzhou Classical Gardens`,
            category: `Landmarks`, icon: `🏡`,
            content: `苏州园林是江苏苏州城内古典园林的总称，以私家园林为主。拙政园、留园、网师园、环秀山庄等最为著名。苏州园林讲究"移步换景"，在有限的空间里创造出无限的自然意境。"上有天堂，下有苏杭"。`,
            keyPhrases: ['苏州园林', '拙政园', '留园', '移步换景'],
            significance: `苏州园林是中国文人造园艺术的最高成就。`
        },
        {
            id: `c149`, title: `丽江古城`, titleMeaning: `Old Town of Lijiang`,
            category: `Landmarks`, icon: `🏘️`,
            content: `丽江古城位于云南省丽江市，建于宋末元初。古城倚山傍水，街道布局自由灵活。独特的水系设计使家家门前有流水。丽江古城是纳西族文化的重要载体，纳西古乐和东巴文字是极其珍贵的文化遗产。1997年被列入世界文化遗产。`,
            keyPhrases: ['丽江古城', '纳西族', '东巴文', '四方街'],
            significance: `丽江古城是多民族文化交融的活化石。`
        },
        {
            id: `c150`, title: `平遥古城`, titleMeaning: `Ancient City of Pingyao`,
            category: `Landmarks`, icon: `🏛️`,
            content: `平遥古城位于山西省，始建于西周时期，现存城墙为明代修建。平遥是清代中国的金融中心，中国第一家票号"日升昌"诞生于此。整个古城保存完好，城墙、街道、店铺、民居都保持明清时期风貌。1997年被列入世界文化遗产。`,
            keyPhrases: ['平遥古城', '票号', '日升昌', '晋商'],
            significance: `平遥古城是中国古代城市规划和商业文化的杰出代表。`
        },
        {
            id: `c151`, title: `张家界`, titleMeaning: `Zhangjiajie`,
            category: `Landmarks`, icon: `🏔️`,
            content: `张家界位于湖南省，以独特的石英砂岩峰林地貌闻名。三千多座奇峰异石拔地而起，仿佛仙境。张家界国家森林公园是中国第一个国家森林公园。《阿凡达》电影中的悬浮山灵感来源于此。1992年被列入世界自然遗产。`,
            keyPhrases: ['张家界', '峰林', '天门山', '阿凡达'],
            significance: `张家界的奇特地貌展现了大自然的鬼斧神工。`
        },
        {
            id: `c152`, title: `峨眉山`, titleMeaning: `Mount Emei`,
            category: `Landmarks`, icon: `⛰️`,
            content: `峨眉山位于四川省，是中国四大佛教名山之一，相传是普贤菩萨的道场。最高峰万佛顶海拔3099米。山上有金顶、洗象池、白龙洞等名胜古迹，还有可爱的峨眉山猴子。1996年被列入世界文化与自然双重遗产。`,
            keyPhrases: ['峨眉山', '普贤菩萨', '金顶', '猴子'],
            significance: `峨眉山是佛教文化与中国自然景观完美融合的代表。`
        },
        {
            id: `c153`, title: `乐山大佛`, titleMeaning: `Leshan Giant Buddha`,
            category: `Landmarks`, icon: `🗿`,
            content: `乐山大佛位于四川省乐山市，是一尊弥勒佛坐像，通高71米，是中国最大的摩崖石刻造像。大佛开凿于唐代开元元年（713年），历时约九十年完成。大佛面向岷江、大渡河和青衣江三江汇流处，建造初衷是镇压水患。`,
            keyPhrases: ['乐山大佛', '弥勒佛', '石刻', '三江'],
            significance: `乐山大佛体现了古代工匠的卓越技艺和虔诚信仰。`
        },
        {
            id: `c154`, title: `龙门石窟`, titleMeaning: `Longmen Grottoes`,
            category: `Landmarks`, icon: `🛕`,
            content: `龙门石窟位于河南省洛阳市，开凿于北魏时期，历经东魏、西魏、北齐、隋、唐等朝代四百多年的大规模营造。现存窟龛2345个，造像十万余尊。最大的佛像高达17.14米。龙门石窟展示了中国石刻艺术的最高水平。2000年被列入世界文化遗产。`,
            keyPhrases: ['龙门石窟', '洛阳', '奉先寺', '石刻'],
            significance: `龙门石窟是中国古代佛教艺术的巅峰之作。`
        },
        {
            id: `c155`, title: `云冈石窟`, titleMeaning: `Yungang Grottoes`,
            category: `Landmarks`, icon: `🛕`,
            content: `云冈石窟位于山西省大同市，开凿于北魏时期（公元5世纪），是中国第一个由皇家开凿的大型石窟群。现存主要洞窟45个，大小窟龛252个，石雕造像51000余尊。云冈石窟融合了印度、中亚和中国的艺术风格。2001年被列入世界文化遗产。`,
            keyPhrases: ['云冈石窟', '大同', '北魏', '佛教艺术'],
            significance: `云冈石窟展现了多元文化交流融合的艺术魅力。`
        },
        {
            id: `c156`, title: `黄龙`, titleMeaning: `Huanglong Scenic Area`,
            category: `Landmarks`, icon: `🏞️`,
            content: `黄龙位于四川省，以彩池、雪山、峡谷、森林"四绝"著称。地表钙华堆积形成了三千多个五彩缤纷的池子，宛如一条金色巨龙盘踞在山谷中。黄龙是中国唯一保护完好的高原湿地，1992年被列入世界自然遗产。`,
            keyPhrases: ['黄龙', '彩池', '钙华', '高原湿地'],
            significance: `黄龙五彩池是亿万年地质演化的神奇杰作。`
        },
        {
            id: `c157`, title: `武夷山`, titleMeaning: `Mount Wuyi`,
            category: `Landmarks`, icon: `🏔️`,
            content: `武夷山位于福建省，以丹霞地貌和丰富的生物多样性著称。武夷山是乌龙茶和红茶的发源地，大红袍母树生长于此。九曲溪竹筏漂流是一大特色。武夷山也是朱子理学的发祥地。1999年被列入世界文化与自然双重遗产。`,
            keyPhrases: ['武夷山', '九曲溪', '大红袍', '朱熹'],
            significance: `武夷山的茶文化和理学传统影响深远。`
        },
        {
            id: `c158`, title: `鼓浪屿`, titleMeaning: `Gulangyu Island`,
            category: `Landmarks`, icon: `🏝️`,
            content: `鼓浪屿位于福建省厦门市，是一个风景如画的小岛。岛上没有机动车，被誉为"海上花园"。鼓浪屿有"万国建筑博览"之称，中西建筑风格交相辉映。鼓浪屿也是中国著名的"钢琴之岛"，人均钢琴拥有率全国最高。2017年被列入世界文化遗产。`,
            keyPhrases: ['鼓浪屿', '厦门', '钢琴', '万国建筑'],
            significance: `鼓浪屿是中西文化碰撞融合的独特见证。`
        },
        {
            id: `c159`, title: `庐山`, titleMeaning: `Mount Lu`,
            category: `Landmarks`, icon: `⛰️`,
            content: `庐山位于江西省，以雄、奇、险、秀闻名。有"匡庐奇秀甲天下"之誉。李白的"飞流直下三千尺，疑是银河落九天"描写的就是庐山瀑布。庐山还有白鹿洞书院，是中国古代四大书院之一。1996年被列入世界文化遗产。`,
            keyPhrases: ['庐山', '瀑布', '白鹿洞书院', '李白'],
            significance: `庐山是自然奇观与人文历史的完美结合。`
        },

        // ============================================================
        // HISTORICAL FIGURES (c160–c173)
        // ============================================================
        {
            id: `c160`, title: `孔子`, titleMeaning: `Confucius`,
            category: `Historical Figures`, icon: `👨‍🏫`,
            content: `孔子（公元前551年—前479年），名丘，字仲尼，春秋时期鲁国人。他是中国古代最伟大的思想家、教育家，儒家学派的创始人。孔子提倡"仁"和"礼"，主张"有教无类"（人人都有受教育的权利）。他的思想和学说收录在《论语》中，影响了中国和东亚两千多年。`,
            keyPhrases: ['孔子', '儒家', '论语', '仁'],
            significance: `孔子是中国文化的核心人物，被尊称为"至圣先师"。`
        },
        {
            id: `c161`, title: `老子`, titleMeaning: `Laozi`,
            category: `Historical Figures`, icon: `🧘`,
            content: `老子（约公元前6世纪），姓李名耳，春秋时期哲学家，道家学派创始人。他的思想集中在《道德经》中，只有五千多字。"道可道，非常道"是开篇第一句。老子主张"无为而治"，强调顺应自然。他被道教尊为太上老君。`,
            keyPhrases: ['老子', '道家', '道德经', '无为'],
            significance: `老子的思想深刻影响了中国哲学和世界文化。`
        },
        {
            id: `c162`, title: `孟子`, titleMeaning: `Mencius`,
            category: `Historical Figures`, icon: `👨‍🏫`,
            content: `孟子（约公元前372年—前289年），名轲，战国时期儒家代表人物，被尊称为"亚圣"。孟子主张"性善论"，认为人天生是善良的。他提出"民为贵，社稷次之，君为轻"的民本思想。孟母三迁的故事教育我们要重视学习环境。`,
            keyPhrases: ['孟子', '性善论', '民为贵', '孟母三迁'],
            significance: `孟子发展了儒家学说，强调仁政和人民的重要性。`
        },
        {
            id: `c163`, title: `庄子`, titleMeaning: `Zhuangzi`,
            category: `Historical Figures`, icon: `🦋`,
            content: `庄子（约公元前369年—前286年），名周，战国时期道家代表人物。庄子的文章想象力丰富，语言生动。他最著名的故事是"庄周梦蝶"：庄子梦见自己变成了蝴蝶，醒来后不知道是自己梦见了蝴蝶，还是蝴蝶梦见了他。庄子追求精神的绝对自由。`,
            keyPhrases: ['庄子', '庄周梦蝶', '逍遥游'],
            significance: `庄子的逍遥精神为中国文人提供了精神自由的理想。`
        },
        {
            id: `c164`, title: `孙子`, titleMeaning: `Sun Tzu`,
            category: `Historical Figures`, icon: `⚔️`,
            content: `孙子（约公元前544年—前470年），名武，春秋时期军事家。他写的《孙子兵法》是世界上最早的军事著作，有"兵学圣典"之称。"知己知彼，百战不殆"是最著名的格言。孙子兵法不仅用于军事，也广泛应用于商业和管理。`,
            keyPhrases: ['孙子', '孙子兵法', '知己知彼'],
            significance: `《孙子兵法》的影响超越了军事领域，成为世界范围内的智慧经典。`
        },
        {
            id: `c165`, title: `秦始皇`, titleMeaning: `Qin Shi Huang`,
            category: `Historical Figures`, icon: `👑`,
            content: `秦始皇（公元前259年—前210年），名嬴政，是中国历史上第一个统一全国的皇帝。他统一了文字、度量衡、货币和车轨，修建了万里长城。但也实行了焚书坑儒等残暴政策。1974年发现的兵马俑展现了他巨大的陵墓规模。`,
            keyPhrases: ['秦始皇', '统一', '长城', '焚书坑儒'],
            significance: `秦始皇奠定了中国统一多民族国家的基础。`
        },
        {
            id: `c166`, title: `汉武帝`, titleMeaning: `Emperor Wu of Han`,
            category: `Historical Figures`, icon: `👑`,
            content: `汉武帝（公元前156年—前87年），名刘彻，西汉第七位皇帝。在位的54年间，他北击匈奴，开辟丝绸之路，独尊儒术，加强中央集权。汉武帝时期，中国的疆域大幅扩大，国力达到顶峰。他所建立的制度影响中国历史两千多年。`,
            keyPhrases: ['汉武帝', '丝绸之路', '独尊儒术'],
            significance: `汉武帝开创了中国历史上第一个真正的"盛世"。`
        },
        {
            id: `c167`, title: `唐太宗`, titleMeaning: `Emperor Taizong of Tang`,
            category: `Historical Figures`, icon: `👑`,
            content: `唐太宗（598年—649年），名李世民，唐朝第二位皇帝。他任用贤臣，虚心纳谏，开创了"贞观之治"。在他统治下，唐朝成为当时世界上最强大的国家，长安成为国际大都市。他的名言"以铜为镜，可以正衣冠；以史为镜，可以知兴替"。`,
            keyPhrases: ['唐太宗', '贞观之治', '纳谏'],
            significance: `唐太宗是中国历史上最伟大的帝王之一，贞观之治是盛世的典范。`
        },
        {
            id: `c168`, title: `李白`, titleMeaning: `Li Bai`,
            category: `Historical Figures`, icon: `🍷`,
            content: `李白（701年—762年），字太白，号青莲居士，唐代最伟大的浪漫主义诗人，被称为"诗仙"。李白的诗想象奇特、气势磅礴，充满豪放的个性。"床前明月光，疑是地上霜"是中国人都会背的诗句。他一生游遍中国大好河山，留下了大量诗篇。`,
            keyPhrases: ['李白', '诗仙', '浪漫主义', '唐诗'],
            significance: `李白代表了中国诗歌的最高成就和浪漫精神的极致。`
        },
        {
            id: `c169`, title: `杜甫`, titleMeaning: `Du Fu`,
            category: `Historical Figures`, icon: `✍️`,
            content: `杜甫（712年—770年），字子美，唐代伟大的现实主义诗人，被称为"诗圣"。他的诗反映了唐代社会的真实面貌和人民的痛苦，被称为"诗史"。名句"安得广厦千万间，大庇天下寒士俱欢颜"表达了他对人民的深切同情。`,
            keyPhrases: ['杜甫', '诗圣', '现实主义', '诗史'],
            significance: `杜甫以诗歌记录历史，展现了中国文人忧国忧民的精神。`
        },
        {
            id: `c170`, title: `白居易`, titleMeaning: `Bai Juyi`,
            category: `Historical Figures`, icon: `📝`,
            content: `白居易（772年—846年），字乐天，唐代著名诗人。他的诗通俗易懂，"老妪能解"（老妇人也能听懂）。《长恨歌》和《琵琶行》是他最著名的长篇叙事诗。"同是天涯沦落人，相逢何必曾相识"是千古名句。`,
            keyPhrases: ['白居易', '长恨歌', '琵琶行'],
            significance: `白居易的诗通俗而不失深刻，深受各阶层人民喜爱。`
        },
        {
            id: `c171`, title: `苏轼`, titleMeaning: `Su Shi`,
            category: `Historical Figures`, icon: `🖌️`,
            content: `苏轼（1037年—1101年），号东坡居士，北宋文学家、书法家、画家。"唐宋八大家"之一。苏轼的词气势豪迈，开豪放派先河。"大江东去，浪淘尽，千古风流人物"是他的名句。他也是一位美食家，东坡肉就是以他的名字命名的。`,
            keyPhrases: ['苏轼', '苏东坡', '东坡肉', '宋词'],
            significance: `苏轼是中国文化史上罕见的全才，诗文书画皆成就斐然。`
        },
        {
            id: `c172`, title: `郑和`, titleMeaning: `Zheng He`,
            category: `Historical Figures`, icon: `⛵`,
            content: `郑和（1371年—1433年），明代伟大的航海家。从1405年到1433年，他率领庞大的船队七次下西洋，到达东南亚、南亚、西亚和东非等三十多个国家和地区。郑和的远航比哥伦布发现美洲早八十多年，展示了中国当时的强大国力。`,
            keyPhrases: ['郑和', '下西洋', '航海', '船队'],
            significance: `郑和下西洋是中国古代航海事业最辉煌的篇章。`
        },
        {
            id: `c173`, title: `鲁迅`, titleMeaning: `Lu Xun`,
            category: `Historical Figures`, icon: `🖋️`,
            content: `鲁迅（1881年—1936年），原名周树人，是中国现代文学的奠基人。他的作品《狂人日记》、《阿Q正传》、《孔乙己》深刻批判了旧社会的弊端。"横眉冷对千夫指，俯首甘为孺子牛"是他最著名的名言。鲁迅的文字影响了几代中国人。`,
            keyPhrases: ['鲁迅', '狂人日记', '阿Q正传'],
            significance: `鲁迅用笔作为武器，唤醒国人，推动了中国现代思想解放。`
        },

        // ============================================================
        // CHINESE MYTHOLOGY (c174–c181)
        // ============================================================
        {
            id: `c174`, title: `盘古开天`, titleMeaning: `Pangu Creates the World`,
            category: `Mythology`, icon: `🌍`,
            content: `盘古开天辟地是中国最著名的创世神话。传说最初天地混沌如鸡子，盘古在其中沉睡了一万八千年。他醒来后用巨斧劈开了混沌，清者上升为天，浊者下沉为地。盘古头顶天、脚踏地，天日高一丈，地日厚一丈。盘古死后，身体化作了山川河流、日月星辰。`,
            keyPhrases: ['盘古', '开天辟地', '创世', '混沌'],
            significance: `盘古神话反映了中华民族对宇宙起源的想象和探索。`
        },
        {
            id: `c175`, title: `女娲补天`, titleMeaning: `Nüwa Mends the Sky`,
            category: `Mythology`, icon: `🌌`,
            content: `女娲是中国神话中的人类始祖。传说她用黄土造人，创造了人类。后来天崩地裂，洪水泛滥，女娲炼五色石补天，砍断巨龟的四足支撑天的四极，治平洪水，杀死猛兽，拯救了人类。女娲在民间信仰中被尊为"娲皇"。`,
            keyPhrases: ['女娲', '补天', '造人', '五色石'],
            significance: `女娲代表了中华民族的母亲精神和拯救苍生的仁爱之心。`
        },
        {
            id: `c176`, title: `后羿射日`, titleMeaning: `Houyi Shoots the Suns`,
            category: `Mythology`, icon: `🏹`,
            content: `后羿射日是中国著名的神话。传说古时候天上同时出现了十个太阳，大地被烤焦，民不聊生。神箭手后羿射下了九个太阳，只留下一个，拯救了人类。后羿的妻子嫦娥后来吃了仙药飞到月亮上去了。这个故事体现了古人对英雄的崇拜。`,
            keyPhrases: ['后羿', '射日', '太阳', '英雄'],
            significance: `后羿射日体现了先民战胜自然、追求美好生活的愿望。`
        },
        {
            id: `c177`, title: `嫦娥奔月`, titleMeaning: `Chang'e Flies to the Moon`,
            category: `Mythology`, icon: `🌙`,
            content: `嫦娥奔月是中国最著名的爱情神话。嫦娥是后羿的妻子，后羿从西王母那里求得了长生不老药。嫦娥吃下仙药后飞向了月亮，从此住在广寒宫中，和玉兔为伴。中秋赏月的习俗就和嫦娥奔月的传说有关。中国的月球探测器也命名为"嫦娥"。`,
            keyPhrases: ['嫦娥', '奔月', '中秋', '玉兔'],
            significance: `嫦娥的故事寄托了中国人对月亮的浪漫想象。`
        },
        {
            id: `c178`, title: `牛郎织女`, titleMeaning: `The Cowherd and Weaver Girl`,
            category: `Mythology`, icon: `🌌`,
            content: `牛郎织女是中国四大民间传说之一。织女是天帝的孙女，私自下凡与牛郎相爱结婚。王母娘娘知道后大怒，用金簪划出一道银河将两人分开。每年农历七月初七，喜鹊会在银河上搭起鹊桥，让牛郎织女相会。这一天就是七夕节，中国的情人节。`,
            keyPhrases: ['牛郎织女', '七夕', '鹊桥', '银河'],
            significance: `牛郎织女象征着坚贞不渝的爱情，是中国传统情人节的故事来源。`
        },
        {
            id: `c179`, title: `白蛇传`, titleMeaning: `Legend of the White Snake`,
            category: `Mythology`, icon: `🐍`,
            content: `白蛇传是中国四大民间传说之一。白娘子（白素贞）是一条修炼千年的白蛇，化为人形后嫁给了许仙。法海和尚识破了她的身份，将她镇压在雷峰塔下。白娘子和许仙的儿子长大后救出了母亲。故事发生在杭州西湖断桥边，歌颂了超越人妖界限的真爱。`,
            keyPhrases: ['白蛇传', '白娘子', '许仙', '雷峰塔'],
            significance: `白蛇传歌颂了跨越障碍的忠贞爱情，流传千年。`
        },
        {
            id: `c180`, title: `西游记`, titleMeaning: `Journey to the West`,
            category: `Mythology`, icon: `🐒`,
            content: `《西游记》是明代吴承恩写的神话小说，中国四大名著之一。讲述了唐僧（玄奘）在孙悟空、猪八戒、沙僧的保护下，去西天取经的故事。孙悟空是最受欢迎的角色，他本领高强、嫉恶如仇。"大闹天宫"和"三打白骨精"是最著名的情节。`,
            keyPhrases: ['西游记', '孙悟空', '唐僧', '取经'],
            significance: `《西游记》融合了佛教、道教思想，是中国浪漫主义文学的巅峰。`
        },
        {
            id: `c181`, title: `封神演义`, titleMeaning: `Investiture of the Gods`,
            category: `Mythology`, icon: `🏮`,
            content: `《封神演义》是明代的神魔小说。讲述了商朝末年，姜子牙辅佐周武王讨伐纣王的故事。小说中有大量神仙、妖魔和法宝的描写，哪吒闹海、姜子牙钓鱼、妲己惑君等情节家喻户晓。这部小说构建了一个完整的中国神话体系。`,
            keyPhrases: ['封神演义', '姜子牙', '哪吒', '纣王'],
            significance: `《封神演义》影响了中国的民间信仰和神话观念。`
        },

        // ============================================================
        // PAINTING & CALLIGRAPHY (c182–c187)
        // ============================================================
        {
            id: `c182`, title: `水墨画`, titleMeaning: `Ink Wash Painting`,
            category: `Painting & Calligraphy`, icon: `🎨`,
            content: `水墨画是中国传统绘画的主要形式，用毛笔蘸水和墨在宣纸上作画。通过墨色的浓淡干湿变化来表现物象的质感、空间感和气韵。水墨画讲究"意在笔先"，追求的不是形似而是神似。著名的水墨画家有八大山人、齐白石等。`,
            keyPhrases: ['水墨画', '墨色', '宣纸', '意境'],
            significance: `水墨画是中国审美的核心表达，体现了"少即是多"的东方哲学。`
        },
        {
            id: `c183`, title: `工笔画`, titleMeaning: `Gongbi Painting`,
            category: `Painting & Calligraphy`, icon: `🖼️`,
            content: `工笔画是中国传统绘画的一种，以精细工整著称。画法是先用细笔勾勒轮廓，再层层渲染颜色。题材以花鸟、人物为主。工笔画需要极大的耐心和技巧，一幅画可能需要数月甚至数年才能完成。宋代是工笔画的鼎盛时期。`,
            keyPhrases: ['工笔画', '精细', '花鸟', '勾勒'],
            significance: `工笔画展现了中国古代画家的精湛技艺和对细节的极致追求。`
        },
        {
            id: `c184`, title: `书法`, titleMeaning: `Calligraphy`,
            category: `Painting & Calligraphy`, icon: `✒️`,
            content: `书法是中国特有的一种艺术形式，用毛笔书写汉字。书法有五体：篆书、隶书、楷书、行书、草书。王羲之被称为"书圣"，他的《兰亭序》被称为"天下第一行书"。练习书法不仅能写一手好字，还能修身养性，培养耐心。`,
            keyPhrases: ['书法', '毛笔', '五体', '王羲之'],
            significance: `书法是中国文化的核心艺术之一，融合了文字之美和精神修养。`
        },
        {
            id: `c185`, title: `文房四宝`, titleMeaning: `Four Treasures of the Study`,
            category: `Painting & Calligraphy`, icon: `🖌️`,
            content: `文房四宝是指笔、墨、纸、砚四种中国传统的书写工具。毛笔以浙江湖州的湖笔最为著名；墨以安徽徽州的徽墨最好；宣纸产于安徽宣城，能保存千年不坏；端砚产于广东肇庆（古称端州），石质细腻。这四样东西是古代文人必备的物品。`,
            keyPhrases: ['文房四宝', '笔墨纸砚', '湖笔', '宣纸'],
            significance: `文房四宝不仅是工具，更是中国文化精神价值的物质载体。`
        },
        {
            id: `c186`, title: `兰亭序`, titleMeaning: `Preface to the Orchid Pavilion`,
            category: `Painting & Calligraphy`, icon: `📜`,
            content: `《兰亭序》是东晋书法家王羲之于公元353年所作，被誉为"天下第一行书"。一次文人雅集之后，王羲之酒醉之中挥毫写下了这篇序文。全文324字，每个字都写得优美流畅。据说王羲之酒醒后又写了好几遍，但都达不到原作的水平。真本据说已随唐太宗殉葬了。`,
            keyPhrases: ['兰亭序', '王羲之', '行书'],
            significance: `《兰亭序》代表了中国书法艺术的最高峰。`
        },
        {
            id: `c187`, title: `清明上河图`, titleMeaning: `Along the River During Qingming Festival`,
            category: `Painting & Calligraphy`, icon: `🖼️`,
            content: `《清明上河图》是北宋画家张择端创作的画卷，中国十大传世名画之一。画卷长5.28米，描绘了北宋都城汴京（今河南开封）的繁荣景象。画中有八百多个人物、六十多只牲畜、二十多艘船只和三十多座建筑，细致地反映了宋代城市生活的各个层面。`,
            keyPhrases: ['清明上河图', '张择端', '北宋', '汴京'],
            significance: `《清明上河图》是研究宋代社会生活的珍贵图像史料。`
        },

        // ============================================================
        // MUSIC INSTRUMENTS (c188–c195)
        // ============================================================
        {
            id: `c188`, title: `古筝`, titleMeaning: `Guzheng`,
            category: `Music Instruments`, icon: `🎶`,
            content: `古筝是中国传统的弹拨乐器，有两千五百多年的历史。古筝有21根弦，音域宽广，音色优美动听。弹奏时右手拨弦，左手按弦来改变音高。代表曲目有《高山流水》、《渔舟唱晚》等。古筝在唐代传入日本、朝鲜和越南。`,
            keyPhrases: ['古筝', '弹拨', '高山流水'],
            significance: `古筝的音色最能表现中国古典音乐的韵味和意境。`
        },
        {
            id: `c189`, title: `二胡`, titleMeaning: `Erhu`,
            category: `Music Instruments`, icon: `🎻`,
            content: `二胡是中国最流行的拉弦乐器，有一千多年的历史。只有两根弦，却能演奏出极其丰富的音乐。二胡的音色接近人声，擅长表现忧伤、深沉的情感。瞎子阿炳的《二泉映月》是最著名的二胡曲，听了让人落泪。`,
            keyPhrases: ['二胡', '二泉映月', '阿炳'],
            significance: `二胡以其深沉的表现力被誉为最能表达中国人情感的乐器。`
        },
        {
            id: `c190`, title: `琵琶`, titleMeaning: `Pipa`,
            category: `Music Instruments`, icon: `🎵`,
            content: `琵琶是中国传统的弹拨乐器，有两千多年的历史。琵琶的演奏技法丰富，可以表现战争激烈、文曲优雅等多种风格。白居易的《琵琶行》生动描绘了琵琶的音响效果。"大弦嘈嘈如急雨，小弦切切如私语"是千古名句。`,
            keyPhrases: ['琵琶', '弹拨', '琵琶行'],
            significance: `琵琶的表现力极为丰富，是中国弹拨乐器的代表。`
        },
        {
            id: `c191`, title: `笛子`, titleMeaning: `Dizi (Bamboo Flute)`,
            category: `Music Instruments`, icon: `🎋`,
            content: `笛子是中国最古老的吹管乐器，距今约七千年。最常见的笛子是竹制的，有六个音孔和一个吹孔。笛子的声音清脆明亮，擅长表现欢快、悠扬的音乐。《梁祝》和《姑苏行》是著名的笛子曲。在中国民间，笛子是广泛使用的乐器。`,
            keyPhrases: ['笛子', '竹笛', '吹管'],
            significance: `笛子是中国人最熟悉的乐器之一，轻快悠扬的声音充满了田园诗意。`
        },
        {
            id: `c192`, title: `唢呐`, titleMeaning: `Suona`,
            category: `Music Instruments`, icon: `📯`,
            content: `唢呐是一种双簧管乐器，声音高亢响亮。在中国的婚丧嫁娶等仪式中经常能听到唢呐的声音。唢呐最初来自波斯和阿拉伯地区，经丝绸之路传入中国，在中国发展了一千多年后，已经完全融入了中国的音乐文化。`,
            keyPhrases: ['唢呐', '双簧', '婚礼', '丧事'],
            significance: `唢呐浓烈的音色和热闹气氛是中国民间仪式不可或缺的。`
        },
        {
            id: `c193`, title: `编钟`, titleMeaning: `Bianzhong (Chime Bells)`,
            category: `Music Instruments`, icon: `🔔`,
            content: `编钟是中国古代的大型打击乐器，用青铜铸造。1978年在湖北随州出土的曾侯乙编钟是世界上最早的十二平均律乐器，有65个钟，每个钟可以发出两个不同的音。编钟的发现震惊了世界，证明了中国古代音乐科技的高度发达。`,
            keyPhrases: ['编钟', '曾侯乙', '青铜', '打击'],
            significance: `编钟是中国古代音乐和冶金技术的辉煌成就。`
        },
        {
            id: `c194`, title: `扬琴`, titleMeaning: `Yangqin (Hammered Dulcimer)`,
            category: `Music Instruments`, icon: `🎹`,
            content: `扬琴是中国击弦乐器，大约在明代从波斯传入。扬琴的演奏方法是用两根竹制的琴竹击打琴弦，声音清脆欢快。扬琴是民族乐队的"钢琴"，音域宽广，表现力丰富。在广东音乐和江南丝竹中，扬琴是核心乐器。`,
            keyPhrases: ['扬琴', '击弦', '琴竹'],
            significance: `扬琴融合了中外音乐元素，成为中国民族乐队的重要支柱。`
        },
        {
            id: `c195`, title: `马头琴`, titleMeaning: `Morin Khuur (Horse-head Fiddle)`,
            category: `Music Instruments`, icon: `🐴`,
            content: `马头琴是蒙古族的传统拉弦乐器，因为琴杆上端雕刻有马头而得名。马头琴的声音低沉苍劲，像是草原上风吹过的声音。蒙古族人民对马头琴有特殊的感情，它是蒙古族文化的象征。关于马头琴的起源有许多美丽的传说。`,
            keyPhrases: ['马头琴', '蒙古族', '草原'],
            significance: `马头琴承载了蒙古族人民对草原的深厚情感和文化记忆。`
        },

        // ============================================================
        // REGIONAL CUISINES (c196–c205)
        // ============================================================
        {
            id: `c196`, title: `北京烤鸭`, titleMeaning: `Peking Duck`,
            category: `Regional Cuisines`, icon: `🦆`,
            content: `北京烤鸭是北京最有名的菜肴，有着数百年的历史。最有名的是全聚德和便宜坊两家老字号。烤鸭用果木烤制，外皮酥脆、肉质鲜嫩。吃法是将片好的鸭肉和葱丝、黄瓜条一起放在薄饼上，再抹上甜面酱卷起来吃。`,
            keyPhrases: ['北京烤鸭', '全聚德', '薄饼'],
            significance: `北京烤鸭是中华饮食文化的杰出代表，享誉全球。`
        },
        {
            id: `c197`, title: `火锅`, titleMeaning: `Hot Pot`,
            category: `Regional Cuisines`, icon: `🍲`,
            content: `火锅是中国非常流行的餐饮方式，历史超过千年。人们在桌子中间的锅里煮各种食材，边煮边吃。重庆火锅以麻辣著称，老北京火锅用铜锅涮羊肉，广东的粥底火锅和潮汕牛肉火锅各有特色。火锅是一种社交饮食方式，大家围在一起吃饭聊天。`,
            keyPhrases: ['火锅', '麻辣', '重庆', '涮羊肉'],
            significance: `火锅体现了中国人重视团圆和分享的饮食文化。`
        },
        {
            id: `c198`, title: `小笼包`, titleMeaning: `Soup Dumplings`,
            category: `Regional Cuisines`, icon: `🥟`,
            content: `小笼包起源于上海南翔，是最受欢迎的江南小吃之一。小笼包的特点是个头小、皮薄、馅多、汤汁足。吃的时候要小心，先咬一小口，吹一吹，把里面的汤汁吸出来，再吃包子。上海南翔小笼包和无锡小笼包最为著名。`,
            keyPhrases: ['小笼包', '汤包', '南翔'],
            significance: `小笼包以精致的工艺和鲜美的口感体现了江南饮食的细腻。`
        },
        {
            id: `c199`, title: `点心`, titleMeaning: `Dim Sum`,
            category: `Regional Cuisines`, icon: `🥮`,
            content: `点心是广东和香港的特色饮食，通常配着茶一起吃，所以也叫"饮茶"或"喝茶"。点心种类繁多，有虾饺、烧卖、叉烧包、肠粉、凤爪等上百种。服务员推着小车在餐厅里走动，顾客可以选自己喜欢的点心。"一盅两件"是老广东人的悠闲生活。`,
            keyPhrases: ['点心', '饮茶', '虾饺', '烧卖'],
            significance: `点心文化体现了广东人对美食和生活品质的追求。`
        },
        {
            id: `c200`, title: `川菜`, titleMeaning: `Sichuan Cuisine`,
            category: `Regional Cuisines`, icon: `🌶️`,
            content: `川菜是中国四大菜系之一，起源于四川和重庆地区。川菜以"麻、辣、鲜、香"为主要特点，善用花椒和辣椒。代表菜有麻婆豆腐、宫保鸡丁、回锅肉、水煮鱼等。川菜讲究"一菜一格，百菜百味"，辣只是川菜的一个方面。`,
            keyPhrases: ['川菜', '麻婆豆腐', '花椒', '麻辣'],
            significance: `川菜以其丰富的味道和多变的技法风靡全国乃至世界。`
        },
        {
            id: `c201`, title: `粤菜`, titleMeaning: `Cantonese Cuisine`,
            category: `Regional Cuisines`, icon: `🦐`,
            content: `粤菜即广东菜，是中国四大菜系之一。粤菜讲究食材的新鲜，烹调注重保留原料的原味。以清淡、鲜美著称。代表菜有白切鸡、清蒸鱼、烤乳猪等。在海外，粤菜是最早被外国人熟悉的中国菜系。广州有"食在广州"的美誉。`,
            keyPhrases: ['粤菜', '白切鸡', '清蒸', '广州'],
            significance: `粤菜以食材至上的理念，代表了中国烹饪的最高境界之一。`
        },
        {
            id: `c202`, title: `鲁菜`, titleMeaning: `Shandong Cuisine`,
            category: `Regional Cuisines`, icon: `🍖`,
            content: `鲁菜即山东菜，是中国四大菜系中历史最悠久、技法最丰富的菜系。鲁菜以咸鲜为主，重视火候和汤的制作。爆、炒、烧、塌是鲁菜的特色烹调方法。代表菜有葱烧海参、糖醋鲤鱼、九转大肠等。鲁菜对北方其他菜系影响很大。`,
            keyPhrases: ['鲁菜', '山东', '葱烧海参'],
            significance: `鲁菜作为"北方菜之母"，奠定了北方烹饪的技术基础。`
        },
        {
            id: `c203`, title: `苏菜`, titleMeaning: `Jiangsu Cuisine`,
            category: `Regional Cuisines`, icon: `🦀`,
            content: `苏菜即江苏菜，是中国四大菜系之一。苏菜刀工精细，讲究造型，烹饪方法以炖、焖、煨为主。味道清淡，略带甜味。代表菜有松鼠鳜鱼、清炖蟹粉狮子头、大煮干丝等。淮扬菜是苏菜中最精致的一个分支。`,
            keyPhrases: ['苏菜', '淮扬菜', '松鼠鳜鱼'],
            significance: `苏菜以精湛的刀工和优雅的造型体现了江南文人的审美品味。`
        },
        {
            id: `c204`, title: `湘菜`, titleMeaning: `Hunan Cuisine`,
            category: `Regional Cuisines`, icon: `🌶️`,
            content: `湘菜即湖南菜，是中国八大菜系之一。湘菜以香辣著称，但和川菜的麻辣不同，湘菜是鲜辣和酸辣。湘菜多用新鲜辣椒而非干辣椒。代表菜有剁椒鱼头、辣椒炒肉、臭豆腐、东安子鸡等。湖南人"无辣不欢"。`,
            keyPhrases: ['湘菜', '辣', '剁椒鱼头'],
            significance: `湘菜的辣代表着湖南人热情豪爽的性格。`
        },
        {
            id: `c205`, title: `徽菜`, titleMeaning: `Anhui Cuisine`,
            category: `Regional Cuisines`, icon: `🍜`,
            content: `徽菜即安徽菜，是中国八大菜系之一。徽菜以烧、炖、蒸见长，讲究"重油、重色、重火功"。徽菜善用火腿和山珍。代表菜有臭鳜鱼、毛豆腐、李鸿章大杂烩等。黄山炖鸽是徽菜中著名的养生菜肴。`,
            keyPhrases: ['徽菜', '臭鳜鱼', '毛豆腐', '黄山'],
            significance: `徽菜体现了徽商对饮食的讲究和山区饮食的特色。`
        },

        // ============================================================
        // CHINESE OPERA (c206–c210)
        // ============================================================
        {
            id: `c206`, title: `京剧`, titleMeaning: `Peking Opera`,
            category: `Chinese Opera`, icon: `🎭`,
            content: `京剧是中国的国粹，形成于清代（约1840年前后）。京剧融合了徽剧、汉剧等多种地方戏的特点。角色分为生、旦、净、丑四大行当。京剧讲究"唱、念、做、打"四种基本功。脸谱是京剧的一大特色，不同颜色代表不同的性格——红脸代表忠义，白脸代表奸诈。`,
            keyPhrases: ['京剧', '国粹', '脸谱', '梅兰芳'],
            significance: `京剧是中国传统戏剧的最高代表，2010年被列入世界非物质文化遗产。`
        },
        {
            id: `c207`, title: `昆曲`, titleMeaning: `Kunqu Opera`,
            category: `Chinese Opera`, icon: `🎼`,
            content: `昆曲是中国最古老的剧种之一，起源于元末明初的江苏昆山。昆曲唱腔优美婉转，被称为"百戏之祖"。代表剧目有《牡丹亭》、《长生殿》、《桃花扇》等。《牡丹亭》中杜丽娘和柳梦梅的爱情故事感动了无数观众。2001年昆曲被联合国列为"人类口述和非物质遗产代表作"。`,
            keyPhrases: ['昆曲', '牡丹亭', '百戏之祖'],
            significance: `昆曲是中国戏曲艺术的源头活水，被誉为"人类文化瑰宝"。`
        },
        {
            id: `c208`, title: `越剧`, titleMeaning: `Yue Opera`,
            category: `Chinese Opera`, icon: `🎵`,
            content: `越剧起源于浙江绍兴地区，是中国第二大剧种。越剧以唱为主，声腔清悠婉丽，擅长抒情。越剧最特别的是女班，几乎所有角色都由女演员扮演。代表剧目有《梁山伯与祝英台》、《红楼梦》、《西厢记》等。`,
            keyPhrases: ['越剧', '梁山伯与祝英台', '女班'],
            significance: `越剧以柔美抒情的风格赢得了广泛的观众基础。`
        },
        {
            id: `c209`, title: `黄梅戏`, titleMeaning: `Huangmei Opera`,
            category: `Chinese Opera`, icon: `🎤`,
            content: `黄梅戏起源于湖北黄梅，发展于安徽安庆。唱腔流畅明快，通俗易懂。《天仙配》是最著名的黄梅戏剧目，讲述了七仙女下凡和凡人董永相爱的美丽故事。"树上的鸟儿成双对"是家喻户晓的唱段。`,
            keyPhrases: ['黄梅戏', '天仙配', '七仙女'],
            significance: `黄梅戏以其生活化的表演和优美的唱腔深受大众喜爱。`
        },
        {
            id: `c210`, title: `变脸`, titleMeaning: `Face-Changing`,
            category: `Chinese Opera`, icon: `🎭`,
            content: `变脸是川剧表演中一种特技，演员通过快速变换脸谱来表达角色的情绪变化。变脸的手法有"抹脸"、"吹脸"、"扯脸"和"运气变脸"等。变脸技法是中国戏曲艺术的瑰宝，也是川剧被列入国家非物质文化遗产的重要原因。`,
            keyPhrases: ['变脸', '川剧', '脸谱', '特技'],
            significance: `变脸技巧神奇莫测，是中国传统戏曲中最具观赏性的表演艺术之一。`
        },

        // ============================================================
        // TRADITIONAL MEDICINE (c211–c217)
        // ============================================================
        {
            id: `c211`, title: `中医`, titleMeaning: `Traditional Chinese Medicine`,
            category: `Traditional Medicine`, icon: `💊`,
            content: `中医是中国的传统医学体系，有数千年的历史。中医的理论基础是阴阳五行学说和经络学说。中医认为人体是一个有机整体，通过望、闻、问、切"四诊"来判断病情。中医经典有《黄帝内经》、《伤寒杂病论》、《本草纲目》等。`,
            keyPhrases: ['中医', '阴阳五行', '四诊', '黄帝内经'],
            significance: `中医代表了独特的东方生命观和健康智慧。`
        },
        {
            id: `c212`, title: `针灸`, titleMeaning: `Acupuncture`,
            category: `Traditional Medicine`, icon: `📌`,
            content: `针灸是中医的重要组成部分，包括针刺和灸法两部分。针刺是将很细的针刺入人体特定的穴位，来调节气血运行。灸法是用艾草燃烧的热力刺激穴位。针灸已在世界范围内被广泛认可，2010年中医针灸被列入世界非物质文化遗产。`,
            keyPhrases: ['针灸', '穴位', '经络', '针刺'],
            significance: `针灸是中医最具国际影响力的疗法之一。`
        },
        {
            id: `c213`, title: `中药`, titleMeaning: `Chinese Herbal Medicine`,
            category: `Traditional Medicine`, icon: `🌿`,
            content: `中药以植物药为主，也包括动物药和矿物药，共有数千种。中药通常多种药材配合使用，称为"方剂"。李时珍的《本草纲目》收录了1892种药物。常见的中药有人参（益气）、枸杞（明目）、灵芝（强身）等。`,
            keyPhrases: ['中药', '本草纲目', '人参', '李时珍'],
            significance: `中药是中华民族几千年医疗经验的结晶。`
        },
        {
            id: `c214`, title: `拔罐`, titleMeaning: `Cupping Therapy`,
            category: `Traditional Medicine`, icon: `🫙`,
            content: `拔罐是中医传统疗法，用罐子吸在皮肤上造成局部充血来治疗疾病。拔罐可以祛除体内的"湿气"和"寒气"。"拔火罐"最为常见。2016年里约奥运会上，游泳运动员菲尔普斯身上的拔罐痕迹引起了全世界的关注。`,
            keyPhrases: ['拔罐', '火罐', '湿气'],
            significance: `拔罐是简单有效的传统疗法，已在国际上获得广泛认知。`
        },
        {
            id: `c215`, title: `刮痧`, titleMeaning: `Gua Sha`,
            category: `Traditional Medicine`, icon: `🪨`,
            content: `刮痧是中医传统疗法，用刮痧板在皮肤表面反复刮动，使皮肤出现红色痧痕。刮痧可以促进气血运行，排出体内毒素。刮痧常用于治疗感冒、中暑、肌肉酸痛等。虽然刮痧后皮肤看起来很红，但对治病有很好的效果。`,
            keyPhrases: ['刮痧', '痧痕', '排毒'],
            significance: `刮痧是价廉实用的民间疗法，体现了"治未病"的预防理念。`
        },
        {
            id: `c216`, title: `太极`, titleMeaning: `Tai Chi`,
            category: `Traditional Medicine`, icon: `☯️`,
            content: `太极拳是中国传统武术，也是一种内外兼修的养生方法。太极动作缓慢、连贯、圆活，以柔克刚是核心原则。每天早晨，中国各地的公园里都能看到练太极的人。太极不仅能锻炼身体，还能修身养性。2020年太极拳被列入世界非物质文化遗产。`,
            keyPhrases: ['太极', '以柔克刚', '养生'],
            significance: `太极拳体现了阴阳平衡的哲学思想，是动与静的完美结合。`
        },
        {
            id: `c217`, title: `气功`, titleMeaning: `Qigong`,
            category: `Traditional Medicine`, icon: `🧘`,
            content: `气功是中国传统的健身养生方法，通过调节呼吸、身体姿势和意念来修炼"气"。气功强调"意、气、形"三者的统一。常见的气功有八段锦、五禽戏、易筋经等。气功不仅能够强身健体，还可以治疗一些慢性疾病。`,
            keyPhrases: ['气功', '呼吸', '八段锦'],
            significance: `气功体现了中国人对生命能量"气"的独特理解和运用。`
        },

        // ============================================================
        // PHILOSOPHY (c218–c223)
        // ============================================================
        {
            id: `c218`, title: `儒家`, titleMeaning: `Confucianism`,
            category: `Philosophy`, icon: `📚`,
            content: `儒家学说由孔子创立，是中国两千年来的主流思想。核心观念包括"仁"（爱别人）、"义"（做正确的事）、"礼"（遵守规范）、"智"（明辨是非）、"信"（诚实守信）。儒家强调家庭的重要，重视教育和自我修养。"修身、齐家、治国、平天下"是儒家的理想。`,
            keyPhrases: ['儒家', '仁义礼智信', '修身'],
            significance: `儒家思想塑造了中国人的价值观和社会秩序两千多年。`
        },
        {
            id: `c219`, title: `道家`, titleMeaning: `Taoism`,
            category: `Philosophy`, icon: `☯️`,
            content: `道家由老子创立，庄子发展，强调"道"是宇宙万物的本源和规律。道家主张"无为而治"，顺应自然，不强求。"天人合一"是道家的核心追求。道家的阴阳符号和太极图是中国文化中最有辨识度的符号。`,
            keyPhrases: ['道家', '道', '无为', '天人合一'],
            significance: `道家思想为中国文化注入了崇尚自然、追求自由的精神。`
        },
        {
            id: `c220`, title: `法家`, titleMeaning: `Legalism`,
            category: `Philosophy`, icon: `⚖️`,
            content: `法家是春秋战国时期的重要学派，代表人物有管仲、商鞅、韩非子。法家主张"以法治国"，强调法律和制度的重要性。商鞅变法帮助秦国强大起来，最终统一了中国。法家认为人性本恶，需要用严刑峻法来约束。`,
            keyPhrases: ['法家', '韩非子', '商鞅', '依法治国'],
            significance: `法家为中国古代的治国理政提供了重要的思想和工具。`
        },
        {
            id: `c221`, title: `墨家`, titleMeaning: `Mohism`,
            category: `Philosophy`, icon: `🛡️`,
            content: `墨家由墨子（墨翟）创立，是春秋战国时期与儒家并称的"显学"。墨家主张"兼爱"（爱所有人没有差别）和"非攻"（反对战争）。墨家成员生活朴素，严于律己，重视实践和科学。墨家对中国早期的逻辑学和科学做出了贡献。`,
            keyPhrases: ['墨家', '墨子', '兼爱', '非攻'],
            significance: `墨家的"兼爱"思想至今仍有深刻的伦理价值。`
        },
        {
            id: `c222`, title: `阴阳`, titleMeaning: `Yin and Yang`,
            category: `Philosophy`, icon: `☯️`,
            content: `阴阳是中国古代哲学的核心概念，认为一切事物都由对立统一的两个方面组成。阴代表黑暗、寒冷、安静、女性等；阳代表光明、温暖、运动、男性等。阴阳不是绝对的，而是相互依存和转化的。阴阳理论影响了中医、建筑、饮食等方方面面。`,
            keyPhrases: ['阴阳', '对立', '统一', '平衡'],
            significance: `阴阳理论是中国人理解世界最根本的思维框架。`
        },
        {
            id: `c223`, title: `五行`, titleMeaning: `Five Elements`,
            category: `Philosophy`, icon: `⭐`,
            content: `五行是指木、火、土、金、水五种基本元素及其运动变化。五行之间有相生（木生火、火生土、土生金、金生水、水生木）和相克（木克土、土克水、水克火、火克金、金克木）的关系。五行理论广泛应用于中医、风水、命理等领域。`,
            keyPhrases: ['五行', '木火土金水', '相生相克'],
            significance: `五行学说构建了中国古代的系统思维和世界观。`
        },

        // ============================================================
        // MODERN CHINA (c224–c230)
        // ============================================================
        {
            id: `c224`, title: `高铁`, titleMeaning: `High-Speed Rail`,
            category: `Modern China`, icon: `🚄`,
            content: `中国高铁是世界运营里程最长、速度最快的铁路系统。"复兴号"是中国自主研发的高速列车，最高时速可达350公里。从北京到上海只要四个多小时。高铁极大地改变了中国人的出行方式和生活节奏。高铁技术也是中国科技实力的象征。`,
            keyPhrases: ['高铁', '复兴号', '时速350'],
            significance: `高铁展现了中国现代科技成就，是国家名片之一。`
        },
        {
            id: `c225`, title: `微信`, titleMeaning: `WeChat`,
            category: `Modern China`, icon: `💬`,
            content: `微信是腾讯公司开发的社交应用，有超过十亿用户。微信不仅仅是一个聊天工具，还可以用来支付、订餐、打车、挂号、办公……几乎什么都离不开微信。"扫一扫"加好友和微信支付是中国日常生活的重要组成部分。`,
            keyPhrases: ['微信', '腾讯', '扫码', '微信支付'],
            significance: `微信深刻改变了中国人的生活方式和社交方式。`
        },
        {
            id: `c226`, title: `支付宝`, titleMeaning: `Alipay`,
            category: `Modern China`, icon: `📱`,
            content: `支付宝是阿里巴巴旗下的第三方支付平台，创建于2004年。支付宝和微信支付共同推动了中国的无现金社会。现在中国人出门只需要带手机就行了。支付宝还提供理财、保险等多种金融服务。"余额宝"让普通人也能轻松理财。`,
            keyPhrases: ['支付宝', '移动支付', '无现金'],
            significance: `支付宝推动了中国进入无现金时代，改变了支付习惯。`
        },
        {
            id: `c227`, title: `双十一`, titleMeaning: `Singles' Day (11.11)`,
            category: `Modern China`, icon: `🛒`,
            content: `双十一是每年的11月11日，原先是年轻人的"光棍节"。阿里巴巴在2009年将这一天变成了购物狂欢节。如今双十一已成为全球最大的在线购物节，销售额惊人。这一天各大电商平台都会推出大量折扣，人们纷纷"剁手"购物。`,
            keyPhrases: ['双十一', '购物节', '天猫'],
            significance: `双十一展示了中国电子商务的蓬勃发展和消费文化。`
        },
        {
            id: `c228`, title: `共享单车`, titleMeaning: `Shared Bicycles`,
            category: `Modern China`, icon: `🚲`,
            content: `共享单车是中国近年来最流行的出行方式之一。用手机扫描车身上的二维码，就可以解锁骑车。摩拜和哈啰是最有名的品牌。共享单车解决了"最后一公里"的出行问题，绿色环保，方便快捷。但也带来了一些乱停乱放的城市管理问题。`,
            keyPhrases: ['共享单车', '扫码', '摩拜'],
            significance: `共享单车是中国共享经济创新模式的典型代表。`
        },
        {
            id: `c229`, title: `抖音`, titleMeaning: `TikTok / Douyin`,
            category: `Modern China`, icon: `🎵`,
            content: `抖音是字节跳动公司推出短视频分享平台，在国内叫"抖音"，国际版叫"TikTok"。用户可以在抖音上看各种短视频，从美食、舞蹈到知识分享。抖音让很多人成为了"网红"，也改变了获取信息和娱乐的方式。`,
            keyPhrases: ['抖音', '短视频', '网红'],
            significance: `抖音是全球最受欢迎的短视频平台之一，代表了中国互联网创新。`
        },
        {
            id: `c230`, title: `外卖`, titleMeaning: `Food Delivery`,
            category: `Modern China`, icon: `🛵`,
            content: `外卖在中国非常发达，美团和饿了么是最大的两个平台。打开APP选择想吃的食物，半小时左右就能送到家门口。中国外卖的速度之快、选择之多让外国游客惊叹不已。外卖小哥骑着电动车穿梭在城市的各个角落。`,
            keyPhrases: ['外卖', '美团', '饿了么'],
            significance: `外卖行业改变了中国人的饮食消费习惯和城市生活方式。`
        },

        // ============================================================
        // ETIQUETTE (c231–c236)
        // ============================================================
        {
            id: `c231`, title: `送礼`, titleMeaning: `Gift-Giving`,
            category: `Etiquette`, icon: `🎁`,
            content: `送礼在中国文化中非常重要，是表达感谢、尊敬和维系关系的方式。不过有很多讲究：不能送钟（"送钟"听起来像"送终"）、不能送伞（"伞"听起来像"散"）、不能送绿色的帽子给男人（"绿帽子"是骂人的话）。送水果和茶叶是比较安全的选择。`,
            keyPhrases: ['送礼', '禁忌', '礼物'],
            significance: `送礼反映了中国人重视人际关系和维护面子的文化心理。`
        },
        {
            id: `c232`, title: `做客`, titleMeaning: `Being a Guest`,
            category: `Etiquette`, icon: `🏠`,
            content: `到中国人家做客有很多礼仪。进门要换拖鞋，主人会倒茶或递水果。第一次去别人家通常要带礼物。如果是吃饭，客人要等主人说"开始吃吧"才能动筷。吃饭时不要把筷子竖着插在饭里（像上香）。离开时要感谢主人的招待。`,
            keyPhrases: ['做客', '礼仪', '换鞋'],
            significance: `做客礼仪反映了中国人重视秩序和尊重的传统。`
        },
        {
            id: `c233`, title: `面子`, titleMeaning: `Face`,
            category: `Etiquette`, icon: `😊`,
            content: `面子是中国人际关系中非常重要的概念。简单来说，面子就是一个人在社会中的尊严和地位。"给面子"就是尊重别人。"丢面子"就是失去尊严。"面子"和"脸"的意思是相似的。在商业谈判和社交中，给人留面子是非常重要的。`,
            keyPhrases: ['面子', '给面子', '丢面子'],
            significance: `面子文化深深影响了中国人的社会交往和人际关系。`
        },
        {
            id: `c234`, title: `关系`, titleMeaning: `Guanxi (Relationships)`,
            category: `Etiquette`, icon: `🤝`,
            content: `关系是中国社会中非常重要的概念，指人与人之间的联系和网络。在中国，"有关系"通常意味着可以更快地办成事情。建立关系需要时间和投资，比如一起吃饭、互相帮忙。关系不是贿赂，而是一种基于互惠和信任的社会资本。`,
            keyPhrases: ['关系', '人脉', '互惠'],
            significance: `"关系"是中国社会运作的润滑剂，体现了集体主义的人际观。`
        },
        {
            id: `c235`, title: `敬酒`, titleMeaning: `Toasting`,
            category: `Etiquette`, icon: `🥂`,
            content: `敬酒是中国酒桌文化的重要组成部分。敬酒时要用双手举杯，杯口应略低于对方的酒杯以示尊重。通常先敬长辈或领导。说"干杯"表示要全部喝完，说"随意"表示喝多少都可以。在中国商业宴会上，敬酒的能力有时候和业务能力一样重要。`,
            keyPhrases: ['敬酒', '干杯', '双手'],
            significance: `敬酒礼仪是中国人情社会中建立和维护关系的重要手段。`
        },
        {
            id: `c236`, title: `尊老爱幼`, titleMeaning: `Respect the Old and Cherish the Young`,
            category: `Etiquette`, icon: `👴`,
            content: `尊老爱幼是中华民族的传统美德。在公交车上要给老人让座，吃饭时让长辈先动筷子，见面时向长辈问好。孝顺父母是中国人最基本的道德要求。"百善孝为先"。春节时晚辈向长辈拜年，长辈给晚辈发红包。`,
            keyPhrases: ['尊老爱幼', '孝顺', '敬老'],
            significance: `尊老爱幼体现了中国以家庭为核心的伦理道德观。`
        },

        // ============================================================
        // IDIOM STORIES (c237–c242)
        // ============================================================
        {
            id: `c237`, title: `守株待兔`, titleMeaning: `Waiting by the Tree Stump`,
            category: `Idiom Stories`, icon: `🐰`,
            content: `守株待兔是一个成语故事。一个农夫在田里干活时，一只兔子撞在树桩上死了。农夫捡到兔子后非常开心，从此不再种地，每天守在树桩旁等兔子撞死。当然，再也没有兔子撞上来。这个成语用来比喻不主动努力，侥幸地等待好运。`,
            keyPhrases: ['守株待兔', '农夫', '侥幸'],
            significance: `讽刺那些不劳而获、不思进取的人。`
        },
        {
            id: `c238`, title: `画蛇添足`, titleMeaning: `Drawing Legs on a Snake`,
            category: `Idiom Stories`, icon: `🐍`,
            content: `画蛇添足是一个成语故事。几个人比赛画蛇，谁先画完谁就能喝一壶酒。一个人最先画完，却得意地给蛇画上了脚。这时另一个人画完了，说"蛇本来没有脚，你画的不是蛇"，然后拿走了酒。这个成语比喻做了多余的事，反而不好。`,
            keyPhrases: ['画蛇添足', '多余', '弄巧成拙'],
            significance: `提醒人们不要做多余的事，否则会适得其反。`
        },
        {
            id: `c239`, title: `掩耳盗铃`, titleMeaning: `Plugging Ears to Steal a Bell`,
            category: `Idiom Stories`, icon: `🔔`,
            content: `掩耳盗铃是一个成语故事。有一个人想偷一口大钟，钟太重搬不动，他想把钟砸碎了再搬走。锤子一砸，钟响了起来。他赶紧捂住自己的耳朵，以为这样别人也听不见了。这个成语用来形容自己欺骗自己，却以为能骗过别人。`,
            keyPhrases: ['掩耳盗铃', '自欺欺人'],
            significance: `讽刺了自欺欺人的愚蠢行为。`
        },
        {
            id: `c240`, title: `对牛弹琴`, titleMeaning: `Playing Music to a Cow`,
            category: `Idiom Stories`, icon: `🐄`,
            content: `对牛弹琴是一个成语。有一个音乐家古琴弹得非常好，一天他对着一头牛弹起了高雅的音乐，牛却毫无反应，继续低头吃草。这个成语比喻对不懂道理的人讲道理，白费力气。也常用来讽刺说话做事不看对象。`,
            keyPhrases: ['对牛弹琴', '白费力气'],
            significance: `说明沟通要看对象，对不理解的人说再多也无用。`
        },
        {
            id: `c241`, title: `狐假虎威`, titleMeaning: `Fox Borrowing Tiger's Might`,
            category: `Idiom Stories`, icon: `🦊`,
            content: `狐假虎威是一个成语故事。老虎抓住一只狐狸要吃掉它，狐狸急中生智说："我是天帝派来管理百兽的，你要是敢吃我，天帝不会放过你。"老虎将信将疑，狐狸说："你跟着我走一趟，看动物们怕不怕我。"老虎跟在狐狸后面，动物们看到老虎纷纷逃跑，狐狸说："你看，它们都怕我。"`,
            keyPhrases: ['狐假虎威', '借势'],
            significance: `比喻借着别人的势力来欺压人。`
        },
        {
            id: `c242`, title: `井底之蛙`, titleMeaning: `Frog at the Bottom of a Well`,
            category: `Idiom Stories`, icon: `🐸`,
            content: `井底之蛙是一个成语故事。一只青蛙住在井底，它以为天空只有井口那么大。有一天，一只来自大海的海龟路过，告诉青蛙大海多么辽阔。青蛙听了非常惊讶。这个成语用来比喻见识狭窄、目光短浅的人。`,
            keyPhrases: ['井底之蛙', '见识短浅'],
            significance: `劝诫人们要开阔眼界，不要坐井观天。`
        },

        // ============================================================
        // ADDITIONAL FESTIVALS & TRADITIONS (c243–c260)
        // ============================================================
        {
            id: `c243`, title: `春节`, titleMeaning: `Spring Festival (Chinese New Year)`,
            category: `Festivals`, icon: `🧧`,
            content: `春节是中国最重要的传统节日，也是农历新年的开始。除夕夜全家团圆吃年夜饭，放鞭炮，看春晚。初一开始拜年，长辈给晚辈红包。春节习俗包括贴春联、挂灯笼、穿新衣。整个节日持续到正月十五元宵节。`,
            keyPhrases: ['春节', '红包', '年夜饭', '拜年'],
            significance: `春节象征着团圆、辞旧迎新，是中国人最重要的节日。`
        },
        {
            id: `c244`, title: `元宵节`, titleMeaning: `Lantern Festival`,
            category: `Festivals`, icon: `🏮`,
            content: `元宵节在农历正月十五，是春节后的第一个重要节日。人们会吃元宵（汤圆），象征着家庭团圆。晚上还有赏花灯、猜灯谜的传统活动。元宵节也常被称为中国的"情人节"，古代青年男女在这一天可以出门赏灯相识。`,
            keyPhrases: ['元宵', '汤圆', '花灯', '猜灯谜'],
            significance: `元宵节标志着春节庆祝活动的圆满结束。`
        },
        {
            id: `c245`, title: `重阳节`, titleMeaning: `Double Ninth Festival`,
            category: `Festivals`, icon: `🌼`,
            content: `重阳节在农历九月初九。"九"是阳数，九月九日是两个阳数，所以叫"重阳"。这天人们会登高望远、赏菊花、插茱萸、喝菊花酒。1989年中国政府将重阳节定为"老人节"，倡导全社会尊老敬老的风尚。`,
            keyPhrases: ['重阳', '登高', '菊花', '敬老'],
            significance: `重阳节承载着孝敬老人和追求健康长寿的美好愿望。`
        },
        {
            id: `c246`, title: `腊八节`, titleMeaning: `Laba Festival`,
            category: `Festivals`, icon: `🥣`,
            content: `腊八节在农历十二月初八。这一天人们要喝腊八粥，用大米、小米、红豆、花生、枣子、莲子等八种食材熬成的粥。腊八粥的由来和佛教有关，相传释迦牟尼在腊八这天悟道成佛。喝了腊八粥也意味着春节快要到了。"过了腊八就是年"。`,
            keyPhrases: ['腊八', '腊八粥', '佛教'],
            significance: `腊八节是春节的序曲，提醒人们准备迎接新年。`
        },
        {
            id: `c247`, title: `中元节`, titleMeaning: `Hungry Ghost Festival`,
            category: `Festivals`, icon: `👻`,
            content: `中元节在农历七月十五，也叫"鬼节"。根据传统信仰，这一天地府的鬼魂会返回人间。人们会焚烧纸钱、准备食物来祭祀祖先和孤魂野鬼。在南方一些地区，还有放水灯的习俗，照亮亡灵回家的路。`,
            keyPhrases: ['中元节', '鬼节', '祭祀', '纸钱'],
            significance: `中元节体现了中国人慎终追远、善待亡者的文化传统。`
        },
        {
            id: `c248`, title: `七夕节`, titleMeaning: `Qixi Festival (Chinese Valentine's Day)`,
            category: `Festivals`, icon: `💕`,
            content: `七夕节是农历七月初七，源自牛郎织女的爱情传说。这一天晚上，女孩们会向织女星乞求智慧和巧手，所以也叫"乞巧节"。现代年轻人把七夕当作中国的情人节，互相送礼表达爱意。`,
            keyPhrases: ['七夕', '乞巧', '情人节'],
            significance: `七夕是中国最具浪漫色彩的传统节日。`
        },
        {
            id: `c249`, title: `清明上巳`, titleMeaning: `Qingming and Shangsi Festivals`,
            category: `Festivals`, icon: `🍃`,
            content: `清明节和古代三月三的上巳节在时间上接近。上巳节在古代是祓禊（在水边沐浴以祛除不祥）的日子。王羲之的《兰亭序》就是在一次上巳节的文人雅集上写的。这些春日习俗反映了古人对生命循环和健康的美好期待。`,
            keyPhrases: ['上巳', '三月三', '祓禊', '兰亭'],
            significance: `上巳节是古人亲近自然、享受春光的日子。`
        },
        {
            id: `c250`, title: `年画`, titleMeaning: `New Year Paintings`,
            category: `Traditions`, icon: `🖼️`,
            content: `年画是中国特有的一种绘画体裁，主要在春节期间张贴。年画的内容多为神仙、吉祥图案和民俗故事。门神是最常见的年画题材，贴在门上保佑平安。天津杨柳青和苏州桃花坞是中国最有名的年画产地。`,
            keyPhrases: ['年画', '门神', '杨柳青'],
            significance: `年画反映了劳动人民对美好生活的祝愿和审美情趣。`
        },
        {
            id: `c251`, title: `剪纸`, titleMeaning: `Paper Cutting`,
            category: `Traditions`, icon: `✂️`,
            content: `剪纸是中国最古老的民间艺术之一，用剪刀或刻刀在纸上剪刻出各种图案。剪纸常用于装饰窗户（窗花）、墙壁和灯笼。红纸剪成的"囍"字是婚礼必备。2009年剪纸被列入世界非物质文化遗产。`,
            keyPhrases: ['剪纸', '窗花', '囍'],
            significance: `剪纸以最简单的材料和工具成为了最普及的民间艺术。`
        },
        {
            id: `c252`, title: `春联`, titleMeaning: `Spring Couplets`,
            category: `Traditions`, icon: `📝`,
            content: `春联是在春节时贴在门两侧的对联，用红纸黑字或金字书写。上下联分别贴在门的左右两侧，横批贴在门上方。春联的内容通常是吉利话和对新年的祝福。贴春联是中国人过春节最重要的习俗之一，起源于古代的桃符。`,
            keyPhrases: ['春联', '对子', '横批', '桃符'],
            significance: `春联是中国人表达新年祝福的最直接方式。`
        },
        {
            id: `c253`, title: `旗袍`, titleMeaning: `Qipao / Cheongsam`,
            category: `Traditions`, icon: `👗`,
            content: `旗袍是源自清代满族女性的传统服装，经过改良后成为20世纪中国女性的代表性服饰。旗袍完美展现了东方女性的优雅曲线，立领、盘扣、开衩是其典型特点。现代旗袍在中外正式场合中倍受欢迎，是中华服饰文化的名片。`,
            keyPhrases: ['旗袍', '立领', '开衩'],
            significance: `旗袍融合了传统与时尚，是中国女性的经典着装象征。`
        },
        {
            id: `c254`, title: `舞龙舞狮`, titleMeaning: `Dragon and Lion Dance`,
            category: `Traditions`, icon: `🐲`,
            content: `舞龙和舞狮是中国传统表演艺术，在春节、开业庆典等喜庆场合均可见到。龙是中华民族的图腾，舞龙时多人配合操纵一条长龙，做出盘旋翻滚的动作。舞狮通常由两人合作，模仿狮子的各种动作。伴随着锣鼓声，热闹非凡。`,
            keyPhrases: ['舞龙', '舞狮', '锣鼓'],
            significance: `舞龙舞狮表达了中国人对吉祥和繁荣的美好祝愿。`
        },
        {
            id: `c255`, title: `对联`, titleMeaning: `Duilian (Couplets)`,
            category: `Traditions`, icon: `📜`,
            content: `对联是中国独特的文学艺术形式，由上下两联相对的文字组成，讲究对仗工整、平仄协调。对联不仅用于春节（春联），也常用于名胜古迹、寺庙、园林等场所。中国最长的对联在昆明大观楼，共180字。`,
            keyPhrases: ['对联', '对仗', '平仄'],
            significance: `对联是中国语言文字艺术的精华，体现对称之美。`
        },
        {
            id: `c256`, title: `鞭炮`, titleMeaning: `Firecrackers`,
            category: `Traditions`, icon: `🧨`,
            content: `放鞭炮是中国传统节庆活动中不可或缺的部分。传说鞭炮的声音可以驱赶叫"年"的怪兽，所以春节时家家户户都要放鞭炮。火药发明后，鞭炮的制作工艺不断发展。近年来由于环保考量，许多城市限制燃放烟花爆竹。`,
            keyPhrases: ['鞭炮', '爆竹', '年兽', '火药'],
            significance: `鞭炮是中国人表达喜悦和驱邪迎祥的传统方式。`
        },
        {
            id: `c257`, title: `京剧脸谱`, titleMeaning: `Peking Opera Facial Makeup`,
            category: `Traditions`, icon: `🎭`,
            content: `京剧脸谱是京剧表演中用彩色颜料在演员脸上画出的图案。不同颜色代表不同性格：红色代表忠勇（关公）、白色代表奸诈（曹操）、黑色代表刚正（包公）、蓝色代表勇猛。脸谱不仅是一种化妆，更是一种艺术。`,
            keyPhrases: ['脸谱', '关公', '曹操', '包公'],
            significance: `脸谱将人物性格符号化，是中国戏曲美学的独特创造。`
        },
        {
            id: `c258`, title: `汉服`, titleMeaning: `Hanfu (Han Chinese Clothing)`,
            category: `Traditions`, icon: `👘`,
            content: `汉服是中国汉族的传统民族服饰，有三千多年的历史。汉服的基本特点是交领、右衽、系带。近年来，越来越多的年轻人在传统节日和日常生活中穿汉服，掀起了"汉服复兴"的文化潮流。汉服代表了中国古代的服饰文化。`,
            keyPhrases: ['汉服', '交领', '右衽'],
            significance: `汉服承载着中华民族的服饰文化和审美传统。`
        },
        {
            id: `c259`, title: `中国结`, titleMeaning: `Chinese Knot`,
            category: `Traditions`, icon: `🪢`,
            content: `中国结是中国传统的手工编织艺术，用一根绳子编出各种结饰。每个结都有吉祥的寓意。"双喜结"代表喜庆，"如意结"代表吉祥。红色是中国结最常见的颜色。中国结常常挂在室内或作为礼物赠送，代表着幸福和好运。`,
            keyPhrases: ['中国结', '编织', '吉祥'],
            significance: `中国结以绳结的形式传递着祝福和美好的愿望。`
        },
        {
            id: `c260`, title: `麻将`, titleMeaning: `Mahjong`,
            category: `Traditions`, icon: `🀄`,
            content: `麻将是中国最流行的桌上游戏之一，起源于清代，由四名玩家组成。麻将共有144张牌，包括筒、条、万三种花色。打麻将需要运气和技巧的结合。麻将不仅是休闲娱乐，也是社会交往的重要方式。在海外华人社区中，麻将也是文化认同的标志。`,
            keyPhrases: ['麻将', '筒条万', '和牌'],
            significance: `麻将是中国市井文化的缩影，承载着丰富的社交功能。`
        },

        // ============================================================
        // ADDITIONAL LANDMARKS & NATURAL HERITAGE (c261–c270)
        // ============================================================
        {
            id: `c261`, title: `阿里山`, titleMeaning: `Alishan`,
            category: `Landmarks`, icon: `🏔️`,
            content: `阿里山位于台湾省嘉义县，以日出、云海、森林、铁路和晚霞"五奇"著称。阿里山小火车是世界三大登山铁路之一。阿里山的森林茂密，有千年古木。阿里山也是台湾原住民邹族的传统居住地。`,
            keyPhrases: ['阿里山', '日出', '小火车', '台湾'],
            significance: `阿里山是台湾最具代表性的自然风景区之一。`
        },
        {
            id: `c262`, title: `日月潭`, titleMeaning: `Sun Moon Lake`,
            category: `Landmarks`, icon: `🌊`,
            content: `日月潭位于台湾省南投县，是台湾最大的天然湖泊。湖的东北面形状像圆圆的太阳，西南面像弯弯的月亮，所以叫"日月潭"。湖水清澈，四周青山环绕。日月潭自行车道被CNN评为全球十大最美自行车道之一。`,
            keyPhrases: ['日月潭', '台湾', '湖泊'],
            significance: `日月潭以其湖光山色成为台湾最重要的旅游名片。`
        },
        {
            id: `c263`, title: `兵马俑坑`, titleMeaning: `The Terracotta Army Pits`,
            category: `Landmarks`, icon: `⚔️`,
            content: `兵马俑共有三个陪葬坑。一号坑最大，有六千多个兵马俑，按照古代军队的队列排列。二号坑有骑兵和战车，三号坑被认为是指挥部。每个陶俑平均身高1.8米，重约300公斤，面部表情无一相同，展现了极高的艺术水平。`,
            keyPhrases: ['兵马俑', '秦始皇陵', '陪葬坑'],
            significance: `兵马俑的规模之宏大、工艺之精美是世界考古史上的奇迹。`
        },
        {
            id: `c264`, title: `华山`, titleMeaning: `Mount Hua`,
            category: `Landmarks`, icon: `⛰️`,
            content: `华山位于陕西省，是"五岳"中的西岳，以险峻著称，被誉为"奇险天下第一山"。华山的登山路极陡，有的地方需要扶着铁链攀爬。长空栈道建在悬崖绝壁上，非常惊险。金庸武侠小说中的"华山论剑"使华山更加闻名。`,
            keyPhrases: ['华山', '西岳', '长空栈道'],
            significance: `华山的险峻体现了中国人不畏艰难、勇于攀登的精神。`
        },
        {
            id: `c265`, title: `衡山`, titleMeaning: `Mount Heng (Hunan)`,
            category: `Landmarks`, icon: `⛰️`,
            content: `衡山位于湖南省，是"五岳"中的南岳。衡山有七十二座山峰，以祝融峰最高。衡山是道教名山和佛教圣地，山上寺庙众多，香火旺盛。"衡山苍苍入紫冥"是李白对衡山的赞美。`,
            keyPhrases: ['衡山', '南岳', '祝融峰'],
            significance: `衡山承载了千年的宗教文化和自然崇拜传统。`
        },
        {
            id: `c266`, title: `恒山`, titleMeaning: `Mount Heng (Shanxi)`,
            category: `Landmarks`, icon: `⛰️`,
            content: `恒山位于山西省，是"五岳"中的北岳。恒山最著名的是悬空寺——一座建在悬崖峭壁上的木结构寺庙，已有1500多年的历史。悬空寺融合了佛教、道教和儒家三教的元素，是中国古代建筑的奇迹。`,
            keyPhrases: ['恒山', '北岳', '悬空寺'],
            significance: `恒山悬空寺展示了中国古代高超的建筑技术和宗教包容精神。`
        },
        {
            id: `c267`, title: `嵩山少林寺`, titleMeaning: `Shaolin Temple on Mount Song`,
            category: `Landmarks`, icon: `🛕`,
            content: `少林寺位于河南省嵩山，是中国佛教禅宗的祖庭和少林武术的发源地。少林寺建于公元495年，至今已有1500多年历史。少林功夫闻名世界，以"禅武合一"为特点。少林寺塔林是中国现存规模最大的墓塔群。2010年被列入世界文化遗产。`,
            keyPhrases: ['少林寺', '武术', '禅宗', '嵩山'],
            significance: `少林寺是禅宗和武术的双重圣地，代表了中国文化的独特魅力。`
        },
        {
            id: `c268`, title: `都江堰`, titleMeaning: `Dujiangyan Irrigation System`,
            category: `Landmarks`, icon: `🏗️`,
            content: `都江堰位于四川省成都市，是公元前256年秦国蜀郡太守李冰父子主持修建的大型水利工程，至今仍在使用。都江堰利用自然地势，无坝引水，灌溉了成都平原。它是世界上最古老且仍在发挥作用的水利工程，2000年被列入世界文化遗产。`,
            keyPhrases: ['都江堰', '李冰', '水利', '成都'],
            significance: `都江堰是古代科技与自然和谐共存的杰出范例。`
        },
        {
            id: `c269`, title: `京杭大运河`, titleMeaning: `Grand Canal`,
            category: `Landmarks`, icon: `🛶`,
            content: `京杭大运河是世界上最长的人工运河，全长约1794公里，北起北京，南至杭州。运河始建于公元前5世纪的春秋时期，隋朝大规模扩建，连接了海河、黄河、淮河、长江和钱塘江五大水系。大运河2014年被列入世界文化遗产。`,
            keyPhrases: ['大运河', '京杭', '隋朝'],
            significance: `大运河是中国古代南北交通和经济交流的大动脉。`
        },
        {
            id: `c270`, title: `福建土楼`, titleMeaning: `Fujian Tulou`,
            category: `Landmarks`, icon: `🏘️`,
            content: `福建土楼是福建西南地区客家人的传统民居，多为圆形或方形的大型夯土建筑。土楼可以容纳整个家族几百人同住，兼具居住和防御功能。最大的土楼有四五层高。2008年福建土楼被列入世界文化遗产。`,
            keyPhrases: ['土楼', '客家', '圆形建筑'],
            significance: `土楼体现了客家人团结互助、聚族而居的传统生活方式。`
        },

        // ============================================================
        // ADDITIONAL HISTORICAL FIGURES (c271–c278)
        // ============================================================
        {
            id: `c271`, title: `诸葛亮`, titleMeaning: `Zhuge Liang`,
            category: `Historical Figures`, icon: `🪭`,
            content: `诸葛亮（181年—234年），字孔明，三国时期蜀汉丞相。他是中国历史上最著名的政治家和军事家之一，以智慧和忠诚著称。"鞠躬尽瘁，死而后已"是他的名言。空城计、草船借箭等故事展示了他卓越的智慧。民间尊称他为"智圣"。`,
            keyPhrases: ['诸葛亮', '孔明', '鞠躬尽瘁'],
            significance: `诸葛亮是中国智慧的象征，其品格和才能为后世楷模。`
        },
        {
            id: `c272`, title: `曹操`, titleMeaning: `Cao Cao`,
            category: `Historical Figures`, icon: `⚔️`,
            content: `曹操（155年—220年），字孟德，东汉末年杰出的政治家、军事家、诗人。他统一了中国北方，奠定了曹魏政权的基础。曹操的诗歌气势磅礴，"老骥伏枥，志在千里"出自他的笔下。他在戏剧中多以白脸奸臣形象出现，但其历史功绩不可忽视。`,
            keyPhrases: ['曹操', '三国', '魏国'],
            significance: `曹操是文韬武略兼备的历史人物，文学与军事成就均极高。`
        },
        {
            id: `c273`, title: `成吉思汗`, titleMeaning: `Genghis Khan`,
            category: `Historical Figures`, icon: `🐎`,
            content: `成吉思汗（1162年—1227年），原名铁木真，蒙古帝国的建立者。他统一了蒙古各部落，创建了历史上疆域最辽阔的帝国之一。成吉思汗建立了驿站系统和通行文书制度，促进了东西方的人员和贸易往来。`,
            keyPhrases: ['成吉思汗', '铁木真', '蒙古帝国'],
            significance: `成吉思汗的历史影响跨越了欧亚大陆，改变了世界格局。`
        },
        {
            id: `c274`, title: `玄奘`, titleMeaning: `Xuanzang`,
            category: `Historical Figures`, icon: `🧘`,
            content: `玄奘（602年—664年），唐代高僧，中国佛教史上最伟大的翻译家。他为了取得真经，从长安出发，经过西域、中亚，到达印度，历时17年，行程五万里。他带回佛经657部，回来后翻译了75部佛经。《大唐西域记》记录了中亚和印度的地理风俗。`,
            keyPhrases: ['玄奘', '取经', '大唐西域记'],
            significance: `玄奘的取经之旅是中外文化交流史上的伟大壮举。`
        },
        {
            id: `c275`, title: `蔡伦`, titleMeaning: `Cai Lun`,
            category: `Historical Figures`, icon: `📜`,
            content: `蔡伦（约63年—121年），东汉宦官，被公认为造纸术的改进者。公元105年，他向汉和帝报告了用树皮、麻头、破布和渔网造纸的方法。这种纸质量好、成本低，很快得到了推广。"蔡侯纸"的发明改变了知识的记录和传播方式。`,
            keyPhrases: ['蔡伦', '造纸术', '蔡侯纸'],
            significance: `蔡伦的造纸术是人类文明史上最重要的发明之一。`
        },
        {
            id: `c276`, title: `张衡`, titleMeaning: `Zhang Heng`,
            category: `Historical Figures`, icon: `🔭`,
            content: `张衡（78年—139年），东汉时期伟大的天文学家、数学家和发明家。他发明了世界上最早的地动仪和浑天仪。他还精确计算了圆周率，绘制了中国最早的星图。月球上的一座环形山就是以张衡命名的。`,
            keyPhrases: ['张衡', '地动仪', '浑天仪'],
            significance: `张衡是中国古代科学的集大成者，贡献涵盖天文学、地震学等领域。`
        },
        {
            id: `c277`, title: `李时珍`, titleMeaning: `Li Shizhen`,
            category: `Historical Figures`, icon: `🌿`,
            content: `李时珍（1518年—1593年），明代著名医学家。他花费27年时间，走访各地，考察药材，参考八百多种书籍，写成了《本草纲目》。《本草纲目》共52卷，收录药物1892种，附图1100多幅，是中医药学的百科全书，已翻译成多种文字。`,
            keyPhrases: ['李时珍', '本草纲目', '药物'],
            significance: `《本草纲目》是中医药学的巅峰之作，影响深远。`
        },
        {
            id: `c278`, title: `王羲之`, titleMeaning: `Wang Xizhi`,
            category: `Historical Figures`, icon: `✒️`,
            content: `王羲之（303年—361年），东晋著名书法家，被后人尊为"书圣"。他的《兰亭序》被称为"天下第一行书"。王羲之的书法在隶书向楷书转变的过程中起到了关键作用。"入木三分"这个成语就来自他书法的力度。`,
            keyPhrases: ['王羲之', '书圣', '兰亭序'],
            significance: `王羲之奠定了中国书法艺术的基本审美标准。`
        },

        // ============================================================
        // ADDITIONAL MYTHOLOGY & LITERATURE (c279–c286)
        // ============================================================
        {
            id: `c279`, title: `梁山伯与祝英台`, titleMeaning: `Butterfly Lovers`,
            category: `Mythology`, icon: `🦋`,
            content: `梁山伯与祝英台是中国四大民间传说之一。祝英台女扮男装去读书，与梁山伯成为同窗好友。当梁山伯发现祝英台是女子时，她已经许配给了别人。梁山伯病逝，祝英台出嫁那天在他坟前哭泣，坟墓裂开，两人化为蝴蝶双双飞去。`,
            keyPhrases: ['梁山伯', '祝英台', '化蝶'],
            significance: `梁祝的故事被誉为"东方的罗密欧与朱丽叶"。`
        },
        {
            id: `c280`, title: `孟姜女哭长城`, titleMeaning: `Meng Jiangnü Weeps at the Great Wall`,
            category: `Mythology`, icon: `😢`,
            content: `孟姜女哭长城是中国四大民间传说之一。秦始皇修建长城时，孟姜女的丈夫被抓去修长城。冬天到了，孟姜女千里送寒衣，到了长城才知道丈夫已经累死了，埋在长城里。孟姜女哭泣了三天三夜，长城崩塌，露出了她丈夫的尸骨。`,
            keyPhrases: ['孟姜女', '长城', '哭泣'],
            significance: `孟姜女的故事反映了人民对暴政的控诉和对爱情的忠贞。`
        },
        {
            id: `c281`, title: `八仙过海`, titleMeaning: `Eight Immortals Crossing the Sea`,
            category: `Mythology`, icon: `🌊`,
            content: `八仙过海是中国著名的道教神话。八仙（铁拐李、汉钟离、张果老、蓝采和、何仙姑、吕洞宾、韩湘子、曹国舅）各显神通渡过大海。成语"八仙过海，各显神通"比喻每个人用自己的方法解决问题。八仙的故事在民间广泛流传。`,
            keyPhrases: ['八仙', '过海', '各显神通'],
            significance: `八仙代表了社会各阶层对长生和自由的向往。`
        },
        {
            id: `c282`, title: `三国演义`, titleMeaning: `Romance of the Three Kingdoms`,
            category: `Mythology`, icon: `⚔️`,
            content: `《三国演义》是明代罗贯中写的长篇小说，中国四大名著之一。小说描写了东汉末年到西晋初期魏、蜀、吴三国之间的政治和军事斗争。曹操、刘备、孙权三足鼎立，诸葛亮、关羽、赵云等人物家喻户晓。"桃园结义"和"赤壁之战"是最经典的情节。`,
            keyPhrases: ['三国演义', '关羽', '赤壁之战'],
            significance: `《三国演义》是中国最受欢迎的历史小说，影响深远。`
        },
        {
            id: `c283`, title: `水浒传`, titleMeaning: `Water Margin`,
            category: `Mythology`, icon: `🏔️`,
            content: `《水浒传》是元末明初施耐庵写的长篇小说，中国四大名著之一。小说讲述了一百零八位好汉被逼上梁山、替天行道的故事。宋江、武松、林冲、鲁智深等人物形象鲜活。"武松打虎"和"鲁智深倒拔垂杨柳"是脍炙人口的片段。`,
            keyPhrases: ['水浒传', '梁山', '武松打虎'],
            significance: `《水浒传》歌颂了反抗压迫的草莽英雄精神。`
        },
        {
            id: `c284`, title: `红楼梦`, titleMeaning: `Dream of the Red Chamber`,
            category: `Mythology`, icon: `🏯`,
            content: `《红楼梦》是清代曹雪芹写的长篇小说，被认为是中国古典小说的巅峰之作。小说以贾宝玉和林黛玉的爱情悲剧为主线，描绘了贾、王、史、薛四大家族的兴衰。"一个是阆苑仙葩，一个是美玉无瑕"是对宝黛爱情的咏叹。`,
            keyPhrases: ['红楼梦', '贾宝玉', '林黛玉'],
            significance: `《红楼梦》是中国文学史上最伟大的作品，被誉为"百科全书"。`
        },
        {
            id: `c285`, title: `精卫填海`, titleMeaning: `Jingwei Fills the Sea`,
            category: `Mythology`, icon: `🐦`,
            content: `精卫填海是中国上古神话。炎帝的小女儿女娃在东海游泳时不幸淹死，死后化身为一只叫精卫的小鸟。精卫每天从西山上衔来小石子和树枝，决心要把东海填平。这个神话赞扬了不屈不挠、不畏艰难的精神。`,
            keyPhrases: ['精卫填海', '小鸟', '毅力'],
            significance: `精卫填海象征着中华民族百折不挠的顽强意志。`
        },
        {
            id: `c286`, title: `夸父逐日`, titleMeaning: `Kuafu Chases the Sun`,
            category: `Mythology`, icon: `☀️`,
            content: `夸父逐日是中国上古神话。夸父是巨人族，他看到太阳跑得快，就想追上太阳。他追啊追，越来越渴，喝干了黄河和渭河的水，还是不够，最后渴死在路上。他死后，手杖化为了一片桃林。这个神话体现了先民挑战自然的勇气。`,
            keyPhrases: ['夸父', '逐日', '桃林'],
            significance: `夸父逐日象征了追求光明和勇于探索的不屈精神。`
        },

        // ============================================================
        // ADDITIONAL ART & CRAFTS (c287–c294)
        // ============================================================
        {
            id: `c287`, title: `青花瓷`, titleMeaning: `Blue and White Porcelain`,
            category: `Art & Crafts`, icon: `🏺`,
            content: `青花瓷是中国瓷器的代表，以其蓝白相间的装饰闻名。青花瓷的制作在元代达到成熟，明代永乐和宣德年间发展到巅峰。青花料（钴蓝料）在白色瓷胎上绘制图案，再上透明釉高温烧成。元青花存世量极少，在拍卖市场上价值连城。`,
            keyPhrases: ['青花瓷', '钴蓝', '元青花'],
            significance: `青花瓷是中国瓷器艺术在世界范围内最具辨识度的名片。`
        },
        {
            id: `c288`, title: `紫砂壶`, titleMeaning: `Yixing Clay Teapot`,
            category: `Art & Crafts`, icon: `🫖`,
            content: `紫砂壶产于江苏省宜兴市，用当地特有的紫砂泥制作。紫砂壶泡茶不失原味，色香味俱佳，且久用越发光润。明清以来，宜兴紫砂壶成为文人雅士的最爱，每一把都是独一无二的艺术品。名家制作的紫砂壶价值极高。`,
            keyPhrases: ['紫砂壶', '宜兴', '泡茶'],
            significance: `紫砂壶将实用与艺术完美结合，是中国茶文化的重要载体。`
        },
        {
            id: `c289`, title: `刺绣`, titleMeaning: `Embroidery`,
            category: `Art & Crafts`, icon: `🪡`,
            content: `中国刺绣有四大名绣：苏绣（苏州）、湘绣（湖南）、粤绣（广东）和蜀绣（四川）。刺绣用彩色丝线在丝绸上绣出精美的图案。苏绣以精细雅洁见长，双面绣是其绝技——正反两面可以看到不同的图案。刺绣是中国女红的最高成就。`,
            keyPhrases: ['刺绣', '苏绣', '双面绣'],
            significance: `刺绣展现了中国女性精湛的手工技艺和审美智慧。`
        },
        {
            id: `c290`, title: `景泰蓝`, titleMeaning: `Cloisonné`,
            category: `Art & Crafts`, icon: `🏺`,
            content: `景泰蓝是中国特有的金属与珐琅工艺结合的工艺品，因在明代景泰年间盛行而得名。制作时先用铜丝掐出图案的轮廓，再填上各色珐琅釉料，经过多次烧制和打磨而成。景泰蓝色彩鲜艳华丽，是国内外收藏家珍视的艺术品。`,
            keyPhrases: ['景泰蓝', '珐琅', '掐丝'],
            significance: `景泰蓝代表了中国金属工艺和珐琅技艺的完美融合。`
        },
        {
            id: `c291`, title: `玉雕`, titleMeaning: `Jade Carving`,
            category: `Art & Crafts`, icon: `💎`,
            content: `玉雕是中国最古老的雕刻艺术之一，已有七千多年历史。中国人认为玉有"仁、义、智、勇、洁"五德。"君子比德于玉"是中国人的文化理念。和田玉和翡翠是最珍贵的玉料。玉器包括摆件、首饰和文房用具等。`,
            keyPhrases: ['玉雕', '和田玉', '翡翠'],
            significance: `玉文化深深融入了中国人的精神世界和审美传统。`
        },
        {
            id: `c292`, title: `皮影戏`, titleMeaning: `Shadow Puppetry`,
            category: `Art & Crafts`, icon: `🎪`,
            content: `皮影戏是中国古老的民间戏剧形式，用兽皮或纸板做成人物剪影，在灯光照射下透过白色幕布进行表演。艺人一边操纵皮影，一边说唱故事。皮影戏已有两千多年历史，2011年被列入世界非物质文化遗产。`,
            keyPhrases: ['皮影戏', '剪影', '幕布'],
            significance: `皮影戏是世界电影的雏形，是中国民间艺术的瑰宝。`
        },
        {
            id: `c293`, title: `盆景`, titleMeaning: `Penjing (Bonsai)`,
            category: `Art & Crafts`, icon: `🪴`,
            content: `盆景是中国传统的园林艺术，在盆中栽培植物并配以山石，构成自然景观的缩影。盆景分为树桩盆景和山水盆景两大类。一盆好的盆景可以将大自然的山水意境浓缩在方寸之间。"一盆一世界，一石一乾坤"是盆景的哲学境界。`,
            keyPhrases: ['盆景', '缩景', '山水'],
            significance: `盆景体现了中国人以小见大、师法自然的艺术追求。`
        },
        {
            id: `c294`, title: `灯笼`, titleMeaning: `Chinese Lanterns`,
            category: `Art & Crafts`, icon: `🏮`,
            content: `灯笼是中国传统照明和装饰工具，有两千多年历史。传统的灯笼用竹条做骨架，外面糊上红纸或红绸。春节和元宵节时，家家户户挂灯笼。最著名的是自贡灯会，规模宏大，灯饰精美绝伦，吸引了大量游客。`,
            keyPhrases: ['灯笼', '元宵', '自贡灯会'],
            significance: `灯笼是中国人喜庆祥和的最典型视觉符号之一。`
        },

        // ============================================================
        // ADDITIONAL CUISINE & DIETARY CULTURE (c295–c300)
        // ============================================================
        {
            id: `c295`, title: `兰州拉面`, titleMeaning: `Lanzhou Hand-Pulled Noodles`,
            category: `Regional Cuisines`, icon: `🍜`,
            content: `兰州拉面是来自甘肃省兰州市的著名面食。拉面师傅现场手工拉制面条，面团在手中变成细长的面条。"一清二白三红四绿五黄"是兰州拉面的精髓：汤清、萝卜白、辣椒油红、香菜蒜苗绿、面条黄亮。兰州拉面馆遍布中国各地。`,
            keyPhrases: ['兰州拉面', '手工拉面', '牛肉面'],
            significance: `兰州拉面以其独特的手工制法和鲜美口感成为中国面食文化的代表。`
        },
        {
            id: `c296`, title: `刀削面`, titleMeaning: `Daoxiao (Knife-Cut) Noodles`,
            category: `Regional Cuisines`, icon: `🍜`,
            content: `刀削面是山西的特色面食，用特制的弧形刀将面团一片一片地削入开水中。面条中间厚两边薄，形似柳叶。"一根落汤一根飘，一根白面已出水"是刀削面的生动写照。刀削面口感筋道滑爽，浇上肉卤或搭配各种菜肴同吃。`,
            keyPhrases: ['刀削面', '山西', '削面'],
            significance: `刀削面的制作技巧本身就是精彩的表演艺术。`
        },
        {
            id: `c297`, title: `夫妻肺片`, titleMeaning: `Husband and Wife Lung Slices`,
            category: `Regional Cuisines`, icon: `🥩`,
            content: `夫妻肺片是一道著名的四川凉菜，用牛肉和牛杂（牛舌、牛肚、牛心等）为主料，配以辣椒油、花椒粉等佐料。菜名源于一对卖这道菜的夫妻。虽然叫"肺片"，但通常并不真用牛肺。这道菜麻辣鲜香，是川菜小吃的经典。`,
            keyPhrases: ['夫妻肺片', '麻辣', '凉菜'],
            significance: `夫妻肺片体现了川菜"一菜一格"的独特魅力和民间美食文化。`
        },
        {
            id: `c298`, title: `龙井虾仁`, titleMeaning: `Longjing Shrimp`,
            category: `Regional Cuisines`, icon: `🍤`,
            content: `龙井虾仁是杭州的特色名菜，用新鲜的西湖虾仁和龙井茶叶一起烹制。虾仁鲜嫩，茶叶清香，两者相辅相成，是杭州菜中茶食结合的经典之作。这道菜体现了江南饮食讲究清淡、精致的特色。`,
            keyPhrases: ['龙井虾仁', '龙井茶', '杭州'],
            significance: `龙井虾仁是中国茶文化与美食文化完美融合的典范。`
        },
        {
            id: `c299`, title: `西湖醋鱼`, titleMeaning: `West Lake Vinegar Fish`,
            category: `Regional Cuisines`, icon: `🐟`,
            content: `西湖醋鱼是杭州的传统名菜，用草鱼烹制，浇以香醋和糖调制的糖醋汁。这道菜的特点是口感鲜嫩、酸甜适中。传说这道菜是宋代文人苏东坡在杭州做官时创制的，至今仍是杭州餐馆的招牌菜。`,
            keyPhrases: ['西湖醋鱼', '草鱼', '苏东坡'],
            significance: `西湖醋鱼代表了杭州菜精致而不失自然的烹饪理念。`
        },
        {
            id: `c300`, title: `月饼`, titleMeaning: `Mooncake`,
            category: `Regional Cuisines`, icon: `🥮`,
            content: `月饼是中秋节必吃的传统食品。传统的月饼有广式、苏式、京式等多种风格。广式月饼皮薄馅大，莲蓉和蛋黄是最经典的馅料。近年来还出现了冰皮月饼和冰淇淋月饼等新品种。月饼圆圆的外形象征着团圆。`,
            keyPhrases: ['月饼', '中秋', '莲蓉'],
            significance: `月饼是中秋节的文化符号，承载着团圆和思念的情感。`
        },

        // ============================================================
        // ADDITIONAL PHILOSOPHY & BELIEFS (c301–c306)
        // ============================================================
        {
            id: `c301`, title: `禅宗`, titleMeaning: `Chan (Zen) Buddhism`,
            category: `Philosophy`, icon: `🧘`,
            content: `禅宗是佛教传入中国后与中国文化相融合而产生的重要宗派。禅宗强调"不立文字，直指人心"，通过打坐冥想和生活中平常事来悟道。"菩提本无树，明镜亦非台"是禅宗六祖慧能的名句。禅宗后来传到日本和韩国，对东亚文化影响深远。`,
            keyPhrases: ['禅宗', '慧能', '冥想'],
            significance: `禅宗将深奥的佛法融入日常生活，影响了中国的艺术和哲学。`
        },
        {
            id: `c302`, title: `风水`, titleMeaning: `Feng Shui`,
            category: `Philosophy`, icon: `🏠`,
            content: `风水是中国古代关于建筑选址和空间布局的学问，核心是人与环境的和谐。上好的风水讲究"背山面水""藏风聚气"。风水中用到八卦、五行等理论。在传统中国建筑中，从皇宫到民居都融入了风水的理念。`,
            keyPhrases: ['风水', '背山面水', '和谐'],
            significance: `风神体现了中国人"天人合一"的空间哲学和环境智慧。`
        },
        {
            id: `c303`, title: `孝道`, titleMeaning: `Filial Piety`,
            category: `Philosophy`, icon: `🙏`,
            content: `孝道是中国儒家伦理思想的核心概念，要求子女尊敬、赡养、服从父母。"百善孝为先"是中国人的道德信条。中国古代有"二十四孝"的故事来教导人们孝道。虽然现代社会有所改变，但孝顺仍然是中国人最看重的美德之一。`,
            keyPhrases: ['孝道', '孝顺', '二十四孝'],
            significance: `孝道是中国家庭伦理的基石，维系着中国社会的代际关系。`
        },
        {
            id: `c304`, title: `中庸之道`, titleMeaning: `The Doctrine of the Mean`,
            category: `Philosophy`, icon: `⚖️`,
            content: `中庸之道是儒家的重要哲学概念，强调做事不走极端，保持恰如其分的"中"的状态。"中庸"原出自《论语》，后由子思写成《中庸》一书。"过犹不及"是体现中庸思想的典型说法。中庸之道影响了中国人处事和为人的基本原则。`,
            keyPhrases: ['中庸', '过犹不及', '适度'],
            significance: `中庸之道是中国人处理问题和人际关系的核心哲学原则。`
        },
        {
            id: `c305`, title: `礼`, titleMeaning: `Li (Ritual Propriety)`,
            category: `Philosophy`, icon: `🙇`,
            content: `"礼"是儒家文化的核心概念之一，指社会规范、礼节仪式和道德准则。孔子认为"礼"是维护社会秩序的重要工具。"克己复礼为仁"是他的名言。中国古代的礼制非常复杂，涵盖政治、宗教、生活的方方面面。现代社会讲"礼貌"就是对"礼"的继承。`,
            keyPhrases: ['礼', '克己复礼', '礼制'],
            significance: `"礼"塑造了中国社会讲究秩序、尊重规范的文化传统。`
        },
        {
            id: `c306`, title: `仁`, titleMeaning: `Ren (Benevolence)`,
            category: `Philosophy`, icon: `❤️`,
            content: `"仁"是孔子儒家思想中最核心的概念，基本含义是爱人。"仁者爱人"、"己所不欲，勿施于人"都是"仁"的体现。在《论语》中孔子对"仁"有丰富的讨论，从"克己复礼为仁"到"仁者，其言也讱"。仁字的结构是"二人"，体现了人际关系中的关爱。`,
            keyPhrases: ['仁', '爱人', '己所不欲勿施于人'],
            significance: `"仁"是中国伦理道德的最高标准，代表了最美好的品德。`
        },

        // ============================================================
        // ADDITIONAL MODERN CHINA (c307–c314)
        // ============================================================
        {
            id: `c307`, title: `淘宝`, titleMeaning: `Taobao`,
            category: `Modern China`, icon: `🛍️`,
            content: `淘宝是阿里巴巴2003年创建的在线购物平台，是中国最大的C2C电商网站。"淘宝"意思是淘出好东西。双十一最初就是从淘宝开始搞起来的。无数小商家通过淘宝创业，改变了中国零售业的格局。"亲"是淘宝卖家和买家之间常用的称呼。`,
            keyPhrases: ['淘宝', '阿里巴巴', '网购'],
            significance: `淘宝开启了中国电子商务的新时代，改变了数亿人的消费习惯。`
        },
        {
            id: `c308`, title: `京东`, titleMeaning: `JD.com`,
            category: `Modern China`, icon: `📦`,
            content: `京东是中国第二大电子商务平台，以自营物流和品质保证著称。京东拥有自己的物流网络，在很多城市能做到"当日达"。京东早期以卖电子产品起步，现在已发展为全品类的购物平台。`,
            keyPhrases: ['京东', '物流', '当日达'],
            significance: `京东的自建物流体系树立了中国电商行业的服务标准。`
        },
        {
            id: `c309`, title: `百度`, titleMeaning: `Baidu`,
            category: `Modern China`, icon: `🔍`,
            content: `百度是中国最大的搜索引擎，创立于2000年。"百度"取自辛弃疾词中的"众里寻他千百度"。百度不仅是搜索引擎，还在人工智能、自动驾驶等领域大力研发。百度地图和百度网盘是广受用户欢迎的产品。`,
            keyPhrases: ['百度', '搜索引擎', 'AI'],
            significance: `百度是中国互联网信息检索的重要入口和AI领跑者。`
        },
        {
            id: `c310`, title: `华为`, titleMeaning: `Huawei`,
            category: `Modern China`, icon: `📡`,
            content: `华为1987年成立于深圳，是全球领先的通信设备和智能手机制造商。华为在5G技术领域处于世界领先地位。麒麟芯片和鸿蒙操作系统是华为技术的代表。任正非是华为的创始人，"狼性文化"是华为企业文化的特色。`,
            keyPhrases: ['华为', '5G', '任正非'],
            significance: `华为是中国高科技企业在全球市场最成功的代表之一。`
        },
        {
            id: `c311`, title: `大疆`, titleMeaning: `DJI`,
            category: `Modern China`, icon: `🚁`,
            content: `大疆创新是全球最大的民用无人机制造商，总部位于深圳。大疆的无人机占据了全球消费级无人机市场的主导份额。大疆的技术用于航拍、农业、测绘、救援等广泛领域。大疆的成功被认为是中国创新能力的象征。`,
            keyPhrases: ['大疆', '无人机', '航拍'],
            significance: `大疆以技术创新引领了全球无人机行业的发展。`
        },
        {
            id: `c312`, title: `移动支付`, titleMeaning: `Mobile Payment`,
            category: `Modern China`, icon: `💳`,
            content: `中国的移动支付普及率世界第一。扫码支付技术使得支付变得极其便捷，连路边小摊都支持微信和支付宝。每年春节期间，数亿人通过手机发红包。移动支付减少了现金使用，也推动了金融服务在农村地区的普及。`,
            keyPhrases: ['移动支付', '扫码', '无现金社会'],
            significance: `移动支付重塑了中国的金融生态和日常消费模式。`
        },
        {
            id: `c313`, title: `人脸识别`, titleMeaning: `Facial Recognition`,
            category: `Modern China`, icon: `📷`,
            content: `中国在人脸识别技术方面走在世界前列。在火车站和机场，人脸识别被用于身份认证；在商场和便利店，刷脸就可以支付。这项技术极大地提高了效率，但也引发了关于隐私保护的讨论。`,
            keyPhrases: ['人脸识别', '刷脸', 'AI'],
            significance: `人脸识别技术展示了中国AI应用的前沿实践和管理创新。`
        },
        {
            id: `c314`, title: `直播带货`, titleMeaning: `Live-Streaming E-commerce`,
            category: `Modern China`, icon: `📺`,
            content: `直播带货是中国近年来最火的电商模式。主播在直播间展示产品并与粉丝互动，观众可即时下单购买。李佳琦和薇娅是最早的头部带货主播。直播带货将购物和娱乐结合，彻底改变了线上零售的形式。`,
            keyPhrases: ['直播带货', '主播', '电商'],
            significance: `直播带货开创了新一轮电商零售的体验升级和商业模式变革。`
        },

        // ============================================================
        // ADDITIONAL IDIOMS & IDIOM STORIES (c315–c324)
        // ============================================================
        {
            id: `c315`, title: `亡羊补牢`, titleMeaning: `Mend the Pen After Sheep Are Lost`,
            category: `Idiom Stories`, icon: `🐑`,
            content: `亡羊补牢是一个成语故事。一个人养了一群羊，一天早上发现羊圈坏了，少了一只羊。邻居劝他修羊圈，他说"羊已经丢了，修它干什么？"第二天发现又少了一只羊。他终于后悔了，赶紧修好了羊圈。从此再也没丢过羊。比喻出了问题后及时补救还来得及。`,
            keyPhrases: ['亡羊补牢', '补救'],
            significance: `教导人们犯错误后要及时改正，犹未晚也。`
        },
        {
            id: `c316`, title: `刻舟求剑`, titleMeaning: `Marking the Boat to Find the Sword`,
            category: `Idiom Stories`, icon: `⚔️`,
            content: `刻舟求剑是一个成语故事。一个人坐船过江时不小心把剑掉进了水里。他赶紧在船舷上刻了一个记号，说"我的剑是从这里掉下去的"。船靠岸后，他从刻记号的地方跳下水去找剑，当然找不到。比喻不懂得随着情况变化而改变方法。`,
            keyPhrases: ['刻舟求剑', '不懂变通'],
            significance: `讽刺了墨守成规、不知变通的死板做法。`
        },
        {
            id: `c317`, title: `自相矛盾`, titleMeaning: `Self-Contradiction`,
            category: `Idiom Stories`, icon: `🛡️`,
            content: `自相矛盾是一个成语故事（出自《韩非子》）。一个人卖矛和盾，他先夸自己的盾说："我的盾最坚固，没有什么矛能刺穿它。"又夸自己的矛说："我的矛最锋利，什么盾都能刺穿。"有人问："用你的矛刺你的盾，会怎么样呢？"卖者无言以对。`,
            keyPhrases: ['自相矛盾', '矛', '盾'],
            significance: `讽刺说话做事前后抵触、不能自圆其说的行为。`
        },
        {
            id: `c318`, title: `杞人忧天`, titleMeaning: `Man of Qi Worried About the Sky`,
            category: `Idiom Stories`, icon: `😰`,
            content: `杞人忧天是一个成语故事。杞国有一个人，整天担心天会塌下来，地会陷下去，他愁得吃不下饭、睡不着觉。别人开导他说天是气聚成的，不会掉下来；地是土石堆起来的，不会陷下去。这个人终于放下了心。比喻不必要的担心和忧虑。`,
            keyPhrases: ['杞人忧天', '无谓担忧'],
            significance: `劝人不要为没有根据的事情而忧虑不安。`
        },
        {
            id: `c319`, title: `叶公好龙`, titleMeaning: `Lord Ye's Love of Dragons`,
            category: `Idiom Stories`, icon: `🐲`,
            content: `叶公好龙是一个成语故事。叶公非常喜欢龙，家中到处都雕刻着龙、画着龙。天上的真龙知道了很感动，就来到叶公家里探望他。不料叶公看到真龙吓得魂飞魄散，转身就跑。比喻表面上喜欢某事物，实际上并不是真正理解或喜爱它。`,
            keyPhrases: ['叶公好龙', '表里不一'],
            significance: `讽刺口是心非、言行不一的虚伪态度。`
        },
        {
            id: `c320`, title: `买椟还珠`, titleMeaning: `Buy the Box, Return the Pearl`,
            category: `Idiom Stories`, icon: `💎`,
            content: `买椟还珠是一个成语故事。有一个楚国商人卖珍珠给郑国人，用精美的木兰盒子装着。郑国人买了之后只拿了漂亮的盒子，却把里面的珍珠还给了商人。比喻没有眼光，取舍不当，丢了主要的东西而取了次要的。`,
            keyPhrases: ['买椟还珠', '取舍不当'],
            significance: `讽刺因只看外表而忽视了真正的价值。`
        },
        {
            id: `c321`, title: `塞翁失马`, titleMeaning: `Old Man Lost His Horse`,
            category: `Idiom Stories`, icon: `🐴`,
            content: `塞翁失马是一个成语故事。边塞有个老人丢了马，邻居来安慰他，老人说"这怎么不是好事呢？"几个月后，马带回来一匹胡人的骏马。邻居来道贺，老人说"这怎么不是坏事呢？"后来老人的儿子骑这匹马摔断了腿。战争中，青壮年都被征兵战死，老人的儿子因瘸腿没被征发，保全了性命。`,
            keyPhrases: ['塞翁失马', '焉知非福'],
            significance: `寓示了福祸相依、相互转化的辩证哲理。`
        },
        {
            id: `c322`, title: `拔苗助长`, titleMeaning: `Pulling Up Seedlings to Help Them Grow`,
            category: `Idiom Stories`, icon: `🌱`,
            content: `拔苗助长是一个成语故事（出自《孟子》）。宋国有一个农夫，觉得他的稻苗长得太慢，就把苗一棵一棵往上拔了一点。他累得满头大汗回家说："今天把我累坏了，我帮苗长高了。"他儿子跑去一看，禾苗全枯死了。比喻违反事物发展的客观规律，急于求成。`,
            keyPhrases: ['拔苗助长', '急功近利'],
            significance: `教导人们做事要遵循规律，不可急于求成适得其反。`
        },
        {
            id: `c323`, title: `东施效颦`, titleMeaning: `Dongshi Imitates a Frown`,
            category: `Idiom Stories`, icon: `😊`,
            content: `东施效颦是一个成语故事。越国美女西施有心痛的毛病，每当发病时就捧心皱眉，看起来别有风韵。邻居丑女东施觉得西施皱眉头的样子很美，也学着捧心皱眉。结果大家看到东施更丑了，纷纷逃走。比喻不顾自身条件盲目模仿别人。`,
            keyPhrases: ['东施效颦', '盲目模仿'],
            significance: `讽刺不分实际条件而机械模仿他人的愚蠢行为。`
        },
        {
            id: `c324`, title: `杯弓蛇影`, titleMeaning: `Mistaking a Bow's Reflection for a Snake`,
            category: `Idiom Stories`, icon: `🍷`,
            content: `杯弓蛇影是一个成语故事。有一个人应邀到朋友家喝酒，看到酒杯里好像有一条小蛇，但他还是勉强喝了下去。回家后他就病了。朋友知道后来看他，他说明了原因。朋友回家琢磨，发现是墙上挂的弓映在酒杯里像蛇。朋友带他来看，他的病立刻好了。比喻疑神疑鬼、自己吓自己。`,
            keyPhrases: ['杯弓蛇影', '疑神疑鬼'],
            significance: `提醒人们不要被虚假的表象所迷惑而自己吓自己。`
        }
    ],

    mergeWithMain() {
        if (typeof CulturalData !== `undefined` && CulturalData.notes) {
            CulturalData.notes.push(...this.notes);
        }
    },

    get count() { return this.notes.length; }
};

if (typeof CulturalData !== `undefined`) CulturalQuadruple.mergeWithMain();
window.CulturalQuadruple = CulturalQuadruple;

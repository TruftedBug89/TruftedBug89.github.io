// build-cultural-mega.js
// Generates data/cultural-mega.js with 300 cultural notes (cm_001–cm_300)
// Run: node build-cultural-mega.js

const fs = require('fs');
const path = require('path');

const CATS = [
  { k: 'Festivals', i: '🎊' }, { k: 'Customs', i: '🎎' },
  { k: 'Food Culture', i: '🍜' }, { k: 'Language', i: '🀄' },
  { k: 'History', i: '🏛️' }, { k: 'Philosophy', i: '☯️' },
  { k: 'Arts', i: '🎭' }, { k: 'Geography', i: '🗺️' },
  { k: 'Business Etiquette', i: '💼' }, { k: 'Social Norms', i: '🤝' }
];

const SEED = {
  Festivals: [
    { t: '元宵灯会', tm: 'Lantern Festival Display', sig: '灯火辉煌，象征着团圆和希望。', kp: ['灯会', '元宵', '花灯', '猜灯谜'] },
    { t: '七夕乞巧', tm: 'Qixi Festival', sig: '象征忠贞不渝的爱情。', kp: ['七夕', '乞巧', '牛郎织女', '鹊桥'] },
    { t: '腊八节喝粥', tm: 'Laba Festival', sig: '标志着春节准备的开始。', kp: ['腊八', '腊八粥', '佛教', '过年'] },
    { t: '冬至大如年', tm: 'Winter Solstice', sig: '体现顺应自然和家庭团圆的观念。', kp: ['冬至', '饺子', '汤圆', '节气'] },
    { t: '端午赛龙舟', tm: 'Dragon Boat Racing', sig: '纪念屈原，弘扬团结拼搏的精神。', kp: ['龙舟', '屈原', '粽子', '竞技'] },
    { t: '重阳登高', tm: 'Double Ninth Ascending', sig: '尊老敬老，祈愿长寿安康。', kp: ['重阳', '登高', '敬老', '菊花'] },
    { t: '清明祭祖', tm: 'Qingming Ancestor Worship', sig: '慎终追远，缅怀先人。', kp: ['清明', '祭祖', '扫墓', '踏青'] },
    { t: '除夕守岁', tm: 'New Year\'s Eve Vigil', sig: '辞旧迎新，全家团圆。', kp: ['除夕', '守岁', '年夜饭', '压岁钱'] },
    { t: '元旦迎新', tm: 'New Year Celebration', sig: '一元复始，万象更新。', kp: ['元旦', '新年', '倒计时', '跨年'] },
    { t: '中秋赏月', tm: 'Mid-Autumn Moon Viewing', sig: '月圆人团圆，寄托思乡之情。', kp: ['中秋', '赏月', '月饼', '团圆'] },
    { t: '舞龙舞狮', tm: 'Dragon and Lion Dance', sig: '驱邪避灾，带来吉祥。', kp: ['舞龙', '舞狮', '热闹', '吉祥'] },
    { t: '放鞭炮', tm: 'Setting Firecrackers', sig: '驱赶年兽，迎接新年。', kp: ['鞭炮', '爆竹', '年兽', '热闹'] },
    { t: '贴春联', tm: 'Spring Couplets', sig: '表达对新年的美好祝愿。', kp: ['春联', '对联', '祝福', '红色'] },
    { t: '压岁钱', tm: 'Lucky Money', sig: '长辈对晚辈的祝福和关爱。', kp: ['压岁钱', '红包', '吉祥', '祝福'] },
    { t: '逛庙会', tm: 'Temple Fair', sig: '感受传统民俗和节日氛围。', kp: ['庙会', '小吃', '表演', '民俗'] },
    { t: '元宵吃汤圆', tm: 'Eating Tangyuan', sig: '团团圆圆，甜甜蜜蜜。', kp: ['汤圆', '元宵', '糯米', '团圆'] },
    { t: '端午挂艾草', tm: 'Hanging Mugwort', sig: '驱邪避疫，祈求健康。', kp: ['艾草', '端午', '驱邪', '香囊'] },
    { t: '中秋送月饼', tm: 'Mooncake Gifting', sig: '以饼寄情，表达祝福。', kp: ['月饼', '送礼', '祝福', '亲友'] },
    { t: '腊月扫尘', tm: 'Year-end Cleaning', sig: '扫除晦气，迎接新福。', kp: ['扫尘', '腊月', '大扫除', '辞旧'] },
    { t: '祭灶神', tm: 'Kitchen God Worship', sig: '祈求灶神上天言好事。', kp: ['灶神', '祭灶', '糖瓜', '小年'] },
    { t: '接财神', tm: 'Welcoming the God of Wealth', sig: '祈求财运亨通。', kp: ['财神', '接财', '发财', '鞭炮'] },
    { t: '年画', tm: 'New Year Paintings', sig: '装饰房屋，增添喜庆气氛。', kp: ['年画', '门神', '喜庆', '传统'] },
    { t: '送穷神', tm: 'Sending Away Poverty God', sig: '祈求新的一年富裕安康。', kp: ['送穷', '初五', '破五', '迎财'] },
    { t: '祭月', tm: 'Moon Worship', sig: '古人对月亮的崇拜和感恩。', kp: ['祭月', '月亮', '中秋', '仪式'] },
    { t: '迎春', tm: 'Spring Welcoming Ritual', sig: '迎接春天，祈求丰收。', kp: ['迎春', '立春', '春耕', '祭祀'] },
    { t: '打春牛', tm: 'Beating the Spring Ox', sig: '提醒农民春耕开始。', kp: ['春牛', '立春', '农耕', '习俗'] },
    { t: '放河灯', tm: 'Floating River Lanterns', sig: '寄托哀思或许下心愿。', kp: ['河灯', '中元', '祈福', '水灯'] },
    { t: '赏花灯', tm: 'Lantern Viewing', sig: '元宵节的传统活动，绚丽多彩。', kp: ['花灯', '元宵', '灯市', '赏灯'] },
    { t: '猜灯谜', tm: 'Lantern Riddles', sig: '益智有趣，增添节日文化氛围。', kp: ['灯谜', '猜谜', '元宵', '智力'] },
    { t: '扎灯笼', tm: 'Making Lanterns', sig: '传统手工艺，传承民俗文化。', kp: ['灯笼', '手工', '竹篾', '彩纸'] }
  ],
  Customs: [
    { t: '敬茶礼仪', tm: 'Tea Offering Etiquette', sig: '表达尊敬与感恩的传统礼节。', kp: ['敬茶', '礼仪', '长辈', '感恩'] },
    { t: '磕头拜年', tm: 'Kowtow New Year Greeting', sig: '最隆重的拜年方式，体现孝道。', kp: ['磕头', '拜年', '孝道', '长辈'] },
    { t: '拱手礼', tm: 'Fist-and-palm Salute', sig: '传统见面礼节，庄重得体。', kp: ['拱手', '作揖', '礼节', '传统'] },
    { t: '抓周', tm: 'One-year-old Fortune Telling', sig: '预测孩子未来兴趣和职业的趣味习俗。', kp: ['抓周', '周岁', '预测', '习俗'] },
    { t: '做满月', tm: 'Full Moon Celebration', sig: '庆祝新生儿满月，祝福健康成长。', kp: ['满月', '红蛋', '庆祝', '新生儿'] },
    { t: '过百岁', tm: '100-day Celebration', sig: '祝愿孩子长命百岁。', kp: ['百岁', '百日', '长寿', '祝福'] },
    { t: '订婚下聘', tm: 'Betrothal Gifts', sig: '传统婚俗中的重要仪式。', kp: ['聘礼', '订婚', '彩礼', '传统'] },
    { t: '哭嫁', tm: 'Wedding Lament', sig: '表达对娘家的不舍之情。', kp: ['哭嫁', '婚俗', '传统', '感恩'] },
    { t: '跨火盆', tm: 'Stepping Over Firepan', sig: '驱邪避灾，祈求平安。', kp: ['火盆', '婚礼', '驱邪', '吉祥'] },
    { t: '闹洞房', tm: 'Wedding Bedroom Fun', sig: '增添婚礼喜庆气氛的传统环节。', kp: ['洞房', '闹婚', '喜庆', '玩笑'] },
    { t: '回门', tm: 'Bride\'s Return Visit', sig: '婚后新娘回娘家探望。', kp: ['回门', '归宁', '婚俗', '团圆'] },
    { t: '上梁', tm: 'Beam-raising Ceremony', sig: '建房时的祈福仪式。', kp: ['上梁', '建房', '祈福', '鞭炮'] },
    { t: '暖房', tm: 'Housewarming', sig: '朋友为新居送暖添喜。', kp: ['暖房', '乔迁', '送礼', '喜庆'] },
    { t: '本命年穿红', tm: 'Wearing Red in Zodiac Year', sig: '辟邪消灾，祈求平安顺遂。', kp: ['本命年', '红色', '辟邪', '运气'] },
    { t: '戴长命锁', tm: 'Longevity Lock', sig: '祝愿孩子健康成长，长命百岁。', kp: ['长命锁', '银饰', '保佑', '平安'] },
    { t: '系红绳', tm: 'Red String Wristband', sig: '招好运避邪祟的民间习俗。', kp: ['红绳', '辟邪', '好运', '吉祥'] },
    { t: '烧香拜佛', tm: 'Incense Burning and Worship', sig: '表达虔诚祈福的心愿。', kp: ['烧香', '拜佛', '祈福', '寺庙'] },
    { t: '祭祖', tm: 'Ancestor Worship', sig: '不忘根本，传承家族精神。', kp: ['祭祖', '祠堂', '香火', '孝道'] },
    { t: '哭丧', tm: 'Funeral Wailing', sig: '表达对逝者的哀悼。', kp: ['哭丧', '葬礼', '哀悼', '传统'] },
    { t: '守孝', tm: 'Mourning Period', sig: '子女对父母尽孝的最后方式。', kp: ['守孝', '孝道', '丧礼', '传统'] },
    { t: '过继', tm: 'Family Adoption Custom', sig: '延续家族香火的传统做法。', kp: ['过继', '宗族', '香火', '传统'] },
    { t: '结拜', tm: 'Sworn Brotherhood', sig: '异姓结为兄弟的古老传统。', kp: ['结拜', '兄弟', '义气', '桃园'] },
    { t: '认干亲', tm: 'Honorary Kinship', sig: '通过认亲增强人际关系。', kp: ['干亲', '认亲', '干爹', '干妈'] },
    { t: '送灶', tm: 'Sending off the Kitchen God', sig: '祈求灶神保佑一家平安。', kp: ['送灶', '灶神', '小年', '糖果'] },
    { t: '迎灶', tm: 'Welcoming the Kitchen God', sig: '迎接灶神回家，祈求保佑。', kp: ['迎灶', '灶神', '除夕', '祭祀'] },
    { t: '沐浴更衣', tm: 'Bathing and Changing Clothes', sig: '节前净身以示恭敬。', kp: ['沐浴', '更衣', '净身', '习俗'] },
    { t: '开光', tm: 'Consecration Ritual', sig: '为佛像或器物赋予灵性的佛教仪式。', kp: ['开光', '佛教', '仪式', '灵性'] },
    { t: '算命', tm: 'Fortune Telling', sig: '民间通过八字占卜命运的习俗。', kp: ['算命', '八字', '占卜', '命运'] },
    { t: '看风水', tm: 'Feng Shui Practice', sig: '通过环境布局改善运势的传统。', kp: ['风水', '布局', '运势', '阴阳'] },
    { t: '贴门神', tm: 'Door God Posting', sig: '驱邪避鬼，保佑家宅平安。', kp: ['门神', '秦琼', '敬德', '辟邪'] }
  ],
  'Food Culture': [
    { t: '北京烤鸭', tm: 'Peking Duck', sig: '中国最具代表性的菜肴之一。', kp: ['烤鸭', '北京', '全聚德', '片鸭'] },
    { t: '四川麻辣烫', tm: 'Sichuan Malatang', sig: '街头美食的代表，麻辣鲜香。', kp: ['麻辣烫', '辣椒', '花椒', '街边'] },
    { t: '兰州拉面', tm: 'Lanzhou Pulled Noodles', sig: '手工拉面的极致艺术。', kp: ['拉面', '兰州', '牛肉面', '手工'] },
    { t: '上海小笼包', tm: 'Shanghai Soup Dumplings', sig: '皮薄馅嫩汤汁鲜美的江南名点。', kp: ['小笼包', '灌汤包', '上海', '南翔'] },
    { t: '广式烧腊', tm: 'Cantonese Roast Meats', sig: '粤菜中极受欢迎的烧味系列。', kp: ['烧腊', '叉烧', '烧鹅', '脆皮'] },
    { t: '湖南剁椒鱼头', tm: 'Hunan Chopped Pepper Fish Head', sig: '湘菜的经典代表，鲜辣入味。', kp: ['剁椒鱼头', '湘菜', '辣椒', '鲜辣'] },
    { t: '东北酸菜炖粉条', tm: 'Northeast Sour Cabbage Stew', sig: '东北冬天的温暖家常菜。', kp: ['酸菜', '粉条', '东北', '炖菜'] },
    { t: '云南过桥米线', tm: 'Yunnan Crossing Bridge Rice Noodles', sig: '云南最具特色的美食之一。', kp: ['过桥米线', '云南', '鲜汤', '米线'] },
    { t: '陕西肉夹馍', tm: 'Shaanxi Meat in Pita', sig: '中式汉堡，西北风味代表。', kp: ['肉夹馍', '陕西', '白吉馍', '腊汁肉'] },
    { t: '重庆小面', tm: 'Chongqing Small Noodles', sig: '山城人的早餐首选。', kp: ['小面', '重庆', '麻辣', '碱水面'] },
    { t: '天津狗不理包子', tm: 'Tianjin Goubuli Baozi', sig: '百年老字号的包子传奇。', kp: ['狗不理', '包子', '天津', '老字号'] },
    { t: '杭州西湖醋鱼', tm: 'Hangzhou West Lake Vinegar Fish', sig: '浙菜中的清新佳作。', kp: ['醋鱼', '西湖', '杭州', '浙菜'] },
    { t: '南京盐水鸭', tm: 'Nanjing Salted Duck', sig: '金陵菜系的经典名菜。', kp: ['盐水鸭', '南京', '金陵', '板鸭'] },
    { t: '成都串串香', tm: 'Chengdu Chuan Chuan Xiang', sig: '火锅的街头变体，随性自在。', kp: ['串串香', '成都', '火锅', '签签'] },
    { t: '福建佛跳墙', tm: 'Fujian Buddha Jumps Over the Wall', sig: '闽菜中的顶级盛宴。', kp: ['佛跳墙', '福建', '闽菜', '鲍鱼'] },
    { t: '安徽臭鳜鱼', tm: 'Anhui Stinky Mandarin Fish', sig: '闻着臭吃着香的徽州名菜。', kp: ['臭鳜鱼', '安徽', '徽菜', '发酵'] },
    { t: '山东煎饼果子', tm: 'Shandong Jianbing', sig: '北方经典的街头早餐。', kp: ['煎饼果子', '山东', '杂粮', '薄脆'] },
    { t: '河南烩面', tm: 'Henan Braised Noodles', sig: '中原大地的暖心面食。', kp: ['烩面', '河南', '羊肉', '高汤'] },
    { t: '广东肠粉', tm: 'Cantonese Rice Rolls', sig: '爽滑细腻的茶楼经典。', kp: ['肠粉', '广东', '早茶', '米浆'] },
    { t: '上海红烧肉', tm: 'Shanghai Red-braised Pork', sig: '浓油赤酱的沪上经典。', kp: ['红烧肉', '上海', '五花肉', '冰糖'] },
    { t: '东北锅包肉', tm: 'Northeast Guobaorou', sig: '外酥里嫩的东北名菜。', kp: ['锅包肉', '东北', '糖醋', '里脊'] },
    { t: '湖南臭豆腐', tm: 'Hunan Stinky Tofu', sig: '闻起来臭吃起来香的街头传奇。', kp: ['臭豆腐', '长沙', '炸豆腐', '泡菜'] },
    { t: '北京炸酱面', tm: 'Beijing Zhajiangmian', sig: '老北京的平民美食代表。', kp: ['炸酱面', '北京', '黄酱', '菜码'] },
    { t: '广东煲汤', tm: 'Cantonese Slow-cooked Soup', sig: '粤人对汤品的极致追求。', kp: ['煲汤', '广东', '老火汤', '滋补'] },
    { t: '四川回锅肉', tm: 'Sichuan Twice-cooked Pork', sig: '川菜家常菜的第一名。', kp: ['回锅肉', '川菜', '蒜苗', '豆瓣'] },
    { t: '江苏狮子头', tm: 'Jiangsu Lion\'s Head Meatball', sig: '淮扬菜中的精细功夫菜。', kp: ['狮子头', '淮扬菜', '肉圆', '扬州'] },
    { t: '广东白切鸡', tm: 'Cantonese White-cut Chicken', sig: '原汁原味的鸡中上品。', kp: ['白切鸡', '广东', '姜葱', '蘸料'] },
    { t: '武汉热干面', tm: 'Wuhan Hot Dry Noodles', sig: '江城武汉的早餐之王。', kp: ['热干面', '武汉', '芝麻酱', '碱面'] },
    { t: '西安羊肉泡馍', tm: 'Xi\'an Lamb Paomo', sig: '西北汉子的豪迈美食。', kp: ['羊肉泡馍', '西安', '馍', '羊肉汤'] },
    { t: '内蒙古烤全羊', tm: 'Inner Mongolia Roast Whole Lamb', sig: '草原盛会上的压轴大菜。', kp: ['烤全羊', '蒙古', '草原', '篝火'] }
  ],
  Language: [
    { t: '汉字起源', tm: 'Origin of Chinese Characters', sig: '汉字是世界上最古老的文字之一。', kp: ['汉字', '甲骨文', '象形', '仓颉'] },
    { t: '甲骨文', tm: 'Oracle Bone Script', sig: '中国最早的文字形式之一。', kp: ['甲骨文', '卜辞', '殷商', '考古'] },
    { t: '金文', tm: 'Bronze Inscriptions', sig: '铸刻在青铜器上的古文字。', kp: ['金文', '钟鼎文', '青铜器', '铭文'] },
    { t: '篆书演变', tm: 'Seal Script Evolution', sig: '秦统一文字的重要成果。', kp: ['篆书', '小篆', '李斯', '统一'] },
    { t: '古代汉语四声', tm: 'Four Tones of Ancient Chinese', sig: '汉语声调系统的奠基。', kp: ['四声', '平仄', '声调', '押韵'] },
    { t: '文言文', tm: 'Classical Chinese', sig: '中国古代的书面语言。', kp: ['文言文', '古汉语', '之乎者也', '典籍'] },
    { t: '白话文运动', tm: 'Vernacular Chinese Movement', sig: '现代汉语的转折点。', kp: ['白话文', '胡适', '鲁迅', '新文化'] },
    { t: '汉语拼音', tm: 'Hanyu Pinyin', sig: '汉字注音和拼写的重要工具。', kp: ['拼音', '声母', '韵母', '周有光'] },
    { t: '简体字与繁体字', tm: 'Simplified vs Traditional', sig: '汉字简化的重要文字改革。', kp: ['简体字', '繁体字', '简化', '文字改革'] },
    { t: '中国方言', tm: 'Chinese Dialects', sig: '汉语的丰富多样性。', kp: ['方言', '普通话', '粤语', '闽南语'] },
    { t: '成语故事', tm: 'Chinese Idiom Stories', sig: '四字成语背后的文化智慧。', kp: ['成语', '典故', '寓言', '四字'] },
    { t: '歇后语', tm: 'Chinese Xiehouyu', sig: '幽默风趣的民间语言艺术。', kp: ['歇后语', '俏皮话', '幽默', '双关'] },
    { t: '谚语俗语', tm: 'Chinese Proverbs', sig: '民间智慧的浓缩表达。', kp: ['谚语', '俗语', '民间', '格言'] },
    { t: '网络流行语', tm: 'Internet Slang', sig: '新时代的语言创新。', kp: ['网络语', '流行语', '表情包', '梗'] },
    { t: '外语借词', tm: 'Foreign Loanwords in Chinese', sig: '中外文化交流的语言印记。', kp: ['借词', '外来语', '咖啡', '沙发'] },
    { t: '量词', tm: 'Measure Words', sig: '汉语中最具特色的词类之一。', kp: ['量词', '个', '张', '条'] },
    { t: '汉字结构', tm: 'Chinese Character Structure', sig: '汉字的构成规律。', kp: ['部首', '偏旁', '形声', '会意'] },
    { t: '多音字', tm: 'Polyphonic Characters', sig: '同一字形不同读音的有趣现象。', kp: ['多音字', '读音', '行', '长'] },
    { t: '汉语语法特点', tm: 'Chinese Grammar Features', sig: '汉语语法的独特之处。', kp: ['语法', '语序', '虚词', '了'] },
    { t: '修辞手法', tm: 'Chinese Rhetoric', sig: '让语言更生动的表达技巧。', kp: ['修辞', '比喻', '排比', '拟人'] },
    { t: '古诗词朗诵', tm: 'Classical Poetry Recitation', sig: '感受汉语言的韵律之美。', kp: ['朗诵', '诗词', '平仄', '押韵'] },
    { t: '绕口令', tm: 'Tongue Twisters', sig: '锻炼发音的有趣游戏。', kp: ['绕口令', '发音', '四声', '练习'] },
    { t: '称呼系统', tm: 'Chinese Addressing System', sig: '复杂而精密的亲属与社会称呼。', kp: ['称呼', '亲属', '尊称', '辈分'] },
    { t: '礼貌用语', tm: 'Polite Expressions', sig: '日常交流中不可或缺的礼貌。', kp: ['礼貌', '请问', '谢谢', '对不起'] },
    { t: '叹词与语气词', tm: 'Interjections and Particles', sig: '表达情感的重要语言工具。', kp: ['叹词', '语气词', '啊', '吧'] },
    { t: '方位词', tm: 'Location Words', sig: '表达空间概念的基础词汇。', kp: ['方位', '上下', '左右', '前后'] },
    { t: '颜色词', tm: 'Color Words', sig: '汉语颜色词的文化内涵。', kp: ['颜色', '红', '白', '黑'] },
    { t: '汉语书面语', tm: 'Written Chinese', sig: '正式场合使用的语言风格。', kp: ['书面语', '正式', '公文', '报告'] },
    { t: '汉语口语', tm: 'Spoken Chinese', sig: '日常交流中的地道表达。', kp: ['口语', '日常', '地道', '俚语'] },
    { t: '翻译技巧', tm: 'Translation Techniques', sig: '中英互译的要点与智慧。', kp: ['翻译', '直译', '意译', '信达雅'] }
  ],
  History: [
    { t: '秦始皇统一六国', tm: 'Qin Shi Huang United the Six Kingdoms', sig: '中国历史上第一个大一统王朝。', kp: ['秦始皇', '统一', '六国', '皇帝'] },
    { t: '汉朝丝绸之路', tm: 'Han Dynasty Silk Road', sig: '东西方文明交流的桥梁。', kp: ['丝绸之路', '张骞', '汉朝', '贸易'] },
    { t: '唐朝盛世', tm: 'Tang Dynasty Golden Age', sig: '中国古代最强盛的朝代之一。', kp: ['唐朝', '盛世', '长安', '贞观'] },
    { t: '宋朝商品经济', tm: 'Song Dynasty Commerce', sig: '中国古代经济的高峰。', kp: ['宋朝', '商品经济', '交子', '清明上河图'] },
    { t: '元朝疆域', tm: 'Yuan Dynasty Territory', sig: '中国历史上最辽阔的疆域。', kp: ['元朝', '成吉思汗', '忽必烈', '疆域'] },
    { t: '明朝郑和下西洋', tm: 'Zheng He\'s Voyages', sig: '古代世界最庞大的远洋航行。', kp: ['郑和', '下西洋', '明朝', '宝船'] },
    { t: '清朝康乾盛世', tm: 'Kangxi-Qianlong Golden Age', sig: '中国最后一个盛世的辉煌。', kp: ['康乾盛世', '清朝', '康熙', '乾隆'] },
    { t: '辛亥革命', tm: 'Xinhai Revolution', sig: '结束封建帝制的伟大革命。', kp: ['辛亥革命', '孙中山', '武昌起义', '民国'] },
    { t: '五四运动', tm: 'May Fourth Movement', sig: '新民主主义革命的开端。', kp: ['五四', '新文化', '民主', '科学'] },
    { t: '抗日战争', tm: 'War of Resistance Against Japan', sig: '全民族共同抵抗外来侵略的战争。', kp: ['抗战', '日军', '八路军', '南京'] },
    { t: '开国大典', tm: 'Founding Ceremony', sig: '中华人民共和国成立的历史时刻。', kp: ['开国', '毛泽东', '天安门', '1949'] },
    { t: '改革开放', tm: 'Reform and Opening-up', sig: '改变中国命运的伟大决策。', kp: ['改革开放', '邓小平', '经济', '特区'] },
    { t: '四大发明', tm: 'Four Great Inventions', sig: '中国古代科技对世界的贡献。', kp: ['造纸', '印刷', '火药', '指南针'] },
    { t: '北京人遗址', tm: 'Peking Man Site', sig: '早期人类演化的重要发现。', kp: ['北京人', '周口店', '猿人', '化石'] },
    { t: '夏商周断代', tm: 'Xia-Shang-Zhou Chronology', sig: '中国最早三个朝代的年代研究。', kp: ['夏朝', '商朝', '周朝', '三代'] },
    { t: '楚汉之争', tm: 'Chu-Han Contention', sig: '项羽与刘邦争夺天下的历史。', kp: ['项羽', '刘邦', '楚汉', '垓下'] },
    { t: '三国鼎立', tm: 'Three Kingdoms', sig: '英雄辈出的分裂时代。', kp: ['三国', '曹操', '诸葛亮', '赤壁'] },
    { t: '隋朝大运河', tm: 'Sui Dynasty Grand Canal', sig: '古代世界最长的运河工程。', kp: ['大运河', '隋炀帝', '水利', '漕运'] },
    { t: '安史之乱', tm: 'An Lushan Rebellion', sig: '唐朝由盛转衰的转折点。', kp: ['安史之乱', '安禄山', '杨贵妃', '马嵬坡'] },
    { t: '岳飞抗金', tm: 'Yue Fei Fighting Jin', sig: '精忠报国的民族英雄故事。', kp: ['岳飞', '精忠报国', '南宋', '金朝'] },
    { t: '蒙古西征', tm: 'Mongol Western Expedition', sig: '改变欧亚格局的军事行动。', kp: ['蒙古', '西征', '成吉思汗', '骑兵'] },
    { t: '明清海禁', tm: 'Ming-Qing Sea Ban', sig: '闭关锁国政策的由来与影响。', kp: ['海禁', '闭关', '倭寇', '贸易'] },
    { t: '鸦片战争', tm: 'Opium Wars', sig: '中国近代史的开端。', kp: ['鸦片战争', '英国', '林则徐', '南京条约'] },
    { t: '洋务运动', tm: 'Westernization Movement', sig: '中国近代化的早期尝试。', kp: ['洋务', '李鸿章', '自强', '求富'] },
    { t: '戊戌变法', tm: 'Hundred Days Reform', sig: '维新派推动的政治改革。', kp: ['戊戌变法', '康有为', '梁启超', '维新'] },
    { t: '南昌起义', tm: 'Nanchang Uprising', sig: '中国共产党独立领导武装斗争的开始。', kp: ['南昌起义', '建军', '周恩来', '朱德'] },
    { t: '长征', tm: 'The Long March', sig: '中国革命史上的壮举。', kp: ['长征', '红军', '毛泽东', '遵义'] },
    { t: '西安事变', tm: 'Xi\'an Incident', sig: '促成抗日民族统一战线的关键事件。', kp: ['西安事变', '张学良', '蒋介石', '抗日'] },
    { t: '两弹一星', tm: 'Two Bombs, One Satellite', sig: '新中国国防科技的里程碑。', kp: ['两弹一星', '原子弹', '氢弹', '卫星'] },
    { t: '一带一路', tm: 'Belt and Road Initiative', sig: '新时代的全球合作倡议。', kp: ['一带一路', '丝绸之路', '合作', '全球化'] }
  ],
  Philosophy: [
    { t: '孔子与儒学', tm: 'Confucius and Confucianism', sig: '影响中国两千多年的核心思想。', kp: ['孔子', '儒学', '仁', '礼'] },
    { t: '老子与道家', tm: 'Laozi and Daoism', sig: '道法自然的哲学智慧。', kp: ['老子', '道家', '无为', '自然'] },
    { t: '孟子仁政', tm: 'Mencius\' Benevolent Governance', sig: '以民为本的政治哲学。', kp: ['孟子', '仁政', '民本', '性善'] },
    { t: '庄子逍遥', tm: 'Zhuangzi\'s Carefree Spirit', sig: '追求精神自由的哲学境界。', kp: ['庄子', '逍遥', '齐物', '自由'] },
    { t: '韩非子与法家', tm: 'Han Feizi and Legalism', sig: '以法治国的思想体系。', kp: ['韩非子', '法家', '法治', '商鞅'] },
    { t: '孙子兵法', tm: 'Sun Tzu\'s Art of War', sig: '世界最早的军事哲学著作。', kp: ['孙子', '兵法', '谋略', '不战'] },
    { t: '墨子兼爱', tm: 'Mozi\'s Universal Love', sig: '兼爱非攻的和平思想。', kp: ['墨子', '兼爱', '非攻', '尚贤'] },
    { t: '禅宗', tm: 'Zen Buddhism', sig: '佛教中国化的哲学瑰宝。', kp: ['禅宗', '佛教', '顿悟', '慧能'] },
    { t: '中庸之道', tm: 'Doctrine of the Mean', sig: '儒家追求平衡和谐的智慧。', kp: ['中庸', '和谐', '平衡', '过犹不及'] },
    { t: '阴阳五行', tm: 'Yin-Yang and Five Elements', sig: '中国古代的宇宙观和方法论。', kp: ['阴阳', '五行', '相生', '相克'] },
    { t: '八卦与易经', tm: 'Bagua and I Ching', sig: '中国最古老的哲学经典。', kp: ['易经', '八卦', '占卜', '变易'] },
    { t: '知行合一', tm: 'Unity of Knowledge and Action', sig: '王阳明心学的核心命题。', kp: ['知行合一', '王阳明', '心学', '良知'] },
    { t: '格物致知', tm: 'Investigating Things to Gain Knowledge', sig: '儒家追求真理的途径。', kp: ['格物', '致知', '大学', '诚意'] },
    { t: '程朱理学', tm: 'Cheng-Zhu Neo-Confucianism', sig: '宋明理学的正统体系。', kp: ['程朱', '理学', '朱熹', '理气'] },
    { t: '陆王心学', tm: 'Lu-Wang School of Mind', sig: '强调内心修养的哲学流派。', kp: ['心学', '陆九渊', '王阳明', '本心'] },
    { t: '孝道哲学', tm: 'Philosophy of Filial Piety', sig: '中华伦理的基石。', kp: ['孝', '仁', '伦理', '家庭'] },
    { t: '义利之辨', tm: 'Righteousness vs Profit', sig: '中国传统伦理的核心议题。', kp: ['义', '利', '孟子', '道德'] },
    { t: '天人合一', tm: 'Heaven and Man as One', sig: '中国文化中最高的哲学理想。', kp: ['天人合一', '自然', '和谐', '宇宙'] },
    { t: '厚德载物', tm: 'Great Virtue Carries All', sig: '君子以德立世的处世哲学。', kp: ['厚德', '载物', '君子', '周易'] },
    { t: '自强不息', tm: 'Continuous Self-improvement', sig: '中华民族的精神追求。', kp: ['自强', '不息', '君子', '乾坤'] },
    { t: '和而不同', tm: 'Harmony in Diversity', sig: '君子交往的基本原则。', kp: ['和而不同', '君子', '和谐', '差异'] },
    { t: '上善若水', tm: 'Highest Good is Like Water', sig: '老子对最高品德的比喻。', kp: ['上善若水', '老子', '水', '柔'] },
    { t: '无为而治', tm: 'Governing by Non-action', sig: '道家治国理政的最高境界。', kp: ['无为', '治国', '道家', '自然'] },
    { t: '礼尚往来', tm: 'Reciprocity of Rites', sig: '中国人际交往的黄金法则。', kp: ['礼', '往来', '回报', '礼节'] },
    { t: '己所不欲勿施于人', tm: 'Golden Rule of Confucianism', sig: '儒家伦理的核心准则。', kp: ['己所不欲', '勿施于人', '孔子', '仁'] },
    { t: '三纲五常', tm: 'Three Bonds and Five Constants', sig: '古代社会的道德规范体系。', kp: ['三纲', '五常', '君臣', '伦理'] },
    { t: '佛教中国化', tm: 'Sinification of Buddhism', sig: '外来思想与本土文化融合的典范。', kp: ['佛教', '中国化', '禅宗', '净土'] },
    { t: '道教神仙', tm: 'Daoist Immortals', sig: '中国本土宗教的神仙信仰。', kp: ['道教', '神仙', '老子', '炼丹'] },
    { t: '民间信仰', tm: 'Folk Beliefs', sig: '丰富多彩的中国民间宗教活动。', kp: ['民间信仰', '土地公', '妈祖', '关公'] },
    { t: '中华武术哲学', tm: 'Martial Arts Philosophy', sig: '武与德的完美结合。', kp: ['武术', '武德', '内外兼修', '止戈'] }
  ],
  Arts: [
    { t: '昆曲', tm: 'Kunqu Opera', sig: '百戏之祖的优雅艺术。', kp: ['昆曲', '牡丹亭', '水磨腔', '非遗'] },
    { t: '越剧', tm: 'Yue Opera', sig: '柔美婉转的江南戏曲。', kp: ['越剧', '梁山伯', '祝英台', '尹派'] },
    { t: '黄梅戏', tm: 'Huangmei Opera', sig: '活泼自然的民间戏曲。', kp: ['黄梅戏', '天仙配', '女驸马', '严凤英'] },
    { t: '川剧变脸', tm: 'Sichuan Opera Face-changing', sig: '神秘莫测的舞台绝技。', kp: ['川剧', '变脸', '喷火', '绝活'] },
    { t: '剪纸艺术', tm: 'Paper Cutting Art', sig: '巧手剪出万千世界。', kp: ['剪纸', '窗花', '镂空', '红纸'] },
    { t: '皮影戏', tm: 'Shadow Puppetry', sig: '光影中的戏剧艺术。', kp: ['皮影', '影戏', '驴皮', '灯光'] },
    { t: '泥塑面人', tm: 'Clay Figurines', sig: '指尖上的民间艺术。', kp: ['泥塑', '面人', '泥人张', '彩塑'] },
    { t: '景泰蓝', tm: 'Cloisonné', sig: '铜胎掐丝珐琅的工艺瑰宝。', kp: ['景泰蓝', '珐琅', '铜胎', '掐丝'] },
    { t: '玉雕', tm: 'Jade Carving', sig: '温润如玉的雕刻艺术。', kp: ['玉雕', '和田玉', '翡翠', '雕刻'] },
    { t: '木雕', tm: 'Wood Carving', sig: '刀木之间的匠心之美。', kp: ['木雕', '东阳', '浮雕', '红木'] },
    { t: '漆器', tm: 'Lacquerware', sig: '千磨万彩的东方技艺。', kp: ['漆器', '大漆', '雕漆', '福州'] },
    { t: '刺绣', tm: 'Embroidery', sig: '针尖上的锦绣艺术。', kp: ['刺绣', '苏绣', '湘绣', '蜀绣'] },
    { t: '云锦', tm: 'Yunjin Brocade', sig: '寸锦寸金的丝织极品。', kp: ['云锦', '南京', '织锦', '龙凤'] },
    { t: '唐三彩', tm: 'Tang Sancai', sig: '盛唐气象的陶瓷艺术。', kp: ['唐三彩', '陶器', '釉彩', '马'] },
    { t: '紫砂壶', tm: 'Zisha Teapot', sig: '茶文化与陶艺的完美结合。', kp: ['紫砂', '宜兴', '茶壶', '陈鸣远'] },
    { t: '敦煌壁画', tm: 'Dunhuang Murals', sig: '世界佛教艺术的宝库。', kp: ['敦煌', '壁画', '莫高窟', '飞天'] },
    { t: '兵马俑', tm: 'Terracotta Warriors', sig: '世界第八大奇迹。', kp: ['兵马俑', '秦始皇', '陶俑', '西安'] },
    { t: '古代建筑', tm: 'Ancient Architecture', sig: '中国传统建筑的智慧与美学。', kp: ['建筑', '斗拱', '飞檐', '榫卯'] },
    { t: '牌坊', tm: 'Memorial Archway', sig: '中国古代纪念碑式建筑。', kp: ['牌坊', '牌楼', '贞节', '表彰'] },
    { t: '塔', tm: 'Chinese Pagoda', sig: '佛教建筑的中国化典范。', kp: ['塔', '佛塔', '大雁塔', '宝塔'] },
    { t: '石狮', tm: 'Stone Lions', sig: '中国传统建筑中的守护神。', kp: ['石狮', '守护', '威严', '陵墓'] },
    { t: '华表', tm: 'Huabiao Pillar', sig: '中国古代的标志性装饰柱。', kp: ['华表', '天安门', '石柱', '雕龙'] },
    { t: '瓷器纹样', tm: 'Porcelain Patterns', sig: '瓷器上丰富的文化符号。', kp: ['青花', '粉彩', '龙纹', '缠枝'] },
    { t: '篆刻', tm: 'Seal Carving', sig: '方寸之间的书法与雕刻艺术。', kp: ['篆刻', '印章', '寿山石', '边款'] },
    { t: '古琴', tm: 'Guqin', sig: '君子四艺之首的雅乐。', kp: ['古琴', '七弦', '高山流水', '伯牙'] },
    { t: '围棋', tm: 'Weiqi (Go)', sig: '黑白之间的智慧博弈。', kp: ['围棋', '棋道', '361', '段位'] },
    { t: '中国扇', tm: 'Chinese Fans', sig: '集实用与艺术于一身的雅物。', kp: ['扇子', '折扇', '团扇', '檀香扇'] },
    { t: '中国灯彩', tm: 'Chinese Festive Lanterns', sig: '五彩缤纷的民间灯彩艺术。', kp: ['灯彩', '灯笼', '彩灯', '元宵'] },
    { t: '民间歌谣', tm: 'Folk Songs', sig: '劳动人民的心声与智慧。', kp: ['民歌', '号子', '小调', '山歌'] },
    { t: '民族舞蹈', tm: 'Ethnic Dances', sig: '多姿多彩的民族舞蹈文化。', kp: ['舞蹈', '秧歌', '腰鼓', '孔雀舞'] }
  ],
  Geography: [
    { t: '黄河母亲河', tm: 'Yellow River - Mother River', sig: '中华文明的摇篮。', kp: ['黄河', '母亲河', '黄土高原', '文明'] },
    { t: '长江', tm: 'Yangtze River', sig: '中国最长的河流。', kp: ['长江', '黄金水道', '三峡', '流域'] },
    { t: '泰山', tm: 'Mount Tai', sig: '五岳之尊，帝王封禅之地。', kp: ['泰山', '五岳', '封禅', '日出'] },
    { t: '黄山', tm: 'Yellow Mountain', sig: '天下第一奇山。', kp: ['黄山', '迎客松', '云海', '温泉'] },
    { t: '峨眉山', tm: 'Mount Emei', sig: '中国四大佛教名山之一。', kp: ['峨眉', '佛教', '云海', '金顶'] },
    { t: '青藏高原', tm: 'Qinghai-Tibet Plateau', sig: '世界屋脊的壮美风光。', kp: ['青藏高原', '西藏', '牦牛', '雪山'] },
    { t: '桂林山水', tm: 'Guilin Scenery', sig: '桂林山水甲天下。', kp: ['桂林', '漓江', '喀斯特', '山水'] },
    { t: '西湖', tm: 'West Lake', sig: '人间天堂的湖光山色。', kp: ['西湖', '杭州', '断桥', '苏堤'] },
    { t: '张家界', tm: 'Zhangjiajie', sig: '阿凡达取景地的神奇地貌。', kp: ['张家界', '武陵源', '石英岩', '峰林'] },
    { t: '九寨沟', tm: 'Jiuzhaigou', sig: '童话世界的彩色湖泊。', kp: ['九寨沟', '海子', '瀑布', '五花海'] },
    { t: '云南石林', tm: 'Stone Forest', sig: '喀斯特地貌的奇观。', kp: ['石林', '喀斯特', '阿诗玛', '云南'] },
    { t: '丝绸之路', tm: 'Silk Road Geography', sig: '连接东西方的古老商路。', kp: ['丝绸之路', '敦煌', '河西走廊', '骆驼'] },
    { t: '黄土高原', tm: 'Loess Plateau', sig: '世界上最大的黄土覆盖区。', kp: ['黄土', '高原', '窑洞', '水土'] },
    { t: '东北平原', tm: 'Northeast Plain', sig: '中国的大粮仓。', kp: ['东北', '平原', '黑土地', '北大仓'] },
    { t: '内蒙古草原', tm: 'Inner Mongolia Grassland', sig: '天苍苍野茫茫的牧歌画卷。', kp: ['草原', '蒙古包', '马', '那达慕'] },
    { t: '塔克拉玛干', tm: 'Taklamakan Desert', sig: '中国最大的沙漠。', kp: ['塔克拉玛干', '沙漠', '胡杨', '绿洲'] },
    { t: '海南三亚', tm: 'Sanya, Hainan', sig: '中国最美的热带海滨。', kp: ['三亚', '海南', '海滩', '天涯海角'] },
    { t: '哈尔滨冰雕', tm: 'Harbin Ice Sculpture', sig: '冰雪王国的艺术奇迹。', kp: ['哈尔滨', '冰雕', '冰雪节', '松花江'] },
    { t: '西双版纳', tm: 'Xishuangbanna', sig: '热带雨林中的傣族风情。', kp: ['西双版纳', '热带', '大象', '傣族'] },
    { t: '香格里拉', tm: 'Shangri-La', sig: '世外桃源般的净土。', kp: ['香格里拉', '云南', '藏族', '松赞林寺'] },
    { t: '洞庭湖', tm: 'Dongting Lake', sig: '中国第二大淡水湖。', kp: ['洞庭湖', '岳阳楼', '鱼米之乡', '候鸟'] },
    { t: '鄱阳湖', tm: 'Poyang Lake', sig: '中国最大的淡水湖。', kp: ['鄱阳湖', '江西', '湿地', '候鸟'] },
    { t: '珠穆朗玛峰', tm: 'Mount Everest', sig: '世界之巅的雄伟壮丽。', kp: ['珠穆朗玛', '喜马拉雅', '8848', '登山'] },
    { t: '四川盆地', tm: 'Sichuan Basin', sig: '天府之国的富饶土地。', kp: ['四川', '盆地', '天府之国', '都江堰'] },
    { t: '江南水乡', tm: 'Jiangnan Water Towns', sig: '小桥流水人家的诗画意境。', kp: ['江南', '周庄', '同里', '乌镇'] },
    { t: '鼓浪屿', tm: 'Gulangyu Island', sig: '海上花园的音乐之岛。', kp: ['鼓浪屿', '厦门', '钢琴', '万国建筑'] },
    { t: '可可西里', tm: 'Hoh Xil', sig: '世界第三极的无人区。', kp: ['可可西里', '藏羚羊', '保护区', '高原'] },
    { t: '长白山天池', tm: 'Tianchi Lake', sig: '休眠火山口的绝美湖泊。', kp: ['长白山', '天池', '火山', '人参'] },
    { t: '壶口瀑布', tm: 'Hukou Waterfall', sig: '黄河上最壮观的瀑布。', kp: ['壶口', '瀑布', '黄河', '陕西'] },
    { t: '敦煌鸣沙山', tm: 'Mingsha Mountain', sig: '沙漠中的月牙泉奇景。', kp: ['鸣沙山', '月牙泉', '敦煌', '沙漠'] }
  ],
  'Business Etiquette': [
    { t: '商务名片', tm: 'Business Cards', sig: '名片交换是建立第一印象的关键。', kp: ['名片', '双手', '接递', '尊重'] },
    { t: '商务宴请', tm: 'Business Banquets', sig: '饭桌上谈生意的中国式商务。', kp: ['宴请', '敬酒', '转盘', '客套'] },
    { t: '商务着装', tm: 'Business Attire', sig: '正式场合的着装规范。', kp: ['西装', '领带', '正装', '得体'] },
    { t: '守时观念', tm: 'Punctuality', sig: '守时是基本的职业素养。', kp: ['守时', '准时', '尊重', '效率'] },
    { t: '商务谈判', tm: 'Business Negotiations', sig: '和气生财的谈判哲学。', kp: ['谈判', '协商', '共赢', '妥协'] },
    { t: '邮件礼仪', tm: 'Email Etiquette', sig: '专业商务邮件的书写规范。', kp: ['邮件', '称呼', '格式', '回复'] },
    { t: '会议礼仪', tm: 'Meeting Etiquette', sig: '会前准备和会议中的行为规范。', kp: ['会议', '议程', '发言', '记录'] },
    { t: '商务送礼', tm: 'Business Gifts', sig: '送礼在中国商务中的人情艺术。', kp: ['送礼', '商务', '茶叶', '禁忌'] },
    { t: '建立关系', tm: 'Building Guanxi', sig: '关系在中国商务中的核心作用。', kp: ['关系', '人脉', '信任', '积累'] },
    { t: '商务电话', tm: 'Business Calls', sig: '电话沟通中的礼仪与技巧。', kp: ['电话', '问候', '自报家门', '记录'] },
    { t: '微信商务', tm: 'WeChat Business', sig: '微信在中国职场中的重要性。', kp: ['微信', '工作群', '朋友圈', '回复'] },
    { t: '商务拜访', tm: 'Business Visits', sig: '到对方公司拜访的注意事项。', kp: ['拜访', '预约', '前台', '等候'] },
    { t: '商务考察', tm: 'Business Inspections', sig: '到工厂或项目现场考察的礼仪。', kp: ['考察', '参观', '接待', '反馈'] },
    { t: '签约礼仪', tm: 'Contract Signing', sig: '正式签约仪式的规范流程。', kp: ['签约', '合同', '仪式', '握手'] },
    { t: '层级尊重', tm: 'Hierarchy Respect', sig: '中国职场中上下级关系的处理。', kp: ['层级', '领导', '尊重', '汇报'] },
    { t: '商务招待', tm: 'Business Entertainment', sig: '招待客户的吃住行安排。', kp: ['招待', '客户', '餐厅', '酒店'] },
    { t: '商务送礼禁忌', tm: 'Gift Taboos', sig: '哪些礼物不能送的文化禁忌。', kp: ['禁忌', '钟', '伞', '梨'] },
    { t: '跨国公司文化', tm: 'Cross-cultural Management', sig: '中外合资企业中的文化融合。', kp: ['跨国', '文化差异', '沟通', '适应'] },
    { t: '茶桌社交', tm: 'Tea Table Socializing', sig: '以茶会友的商务社交方式。', kp: ['茶桌', '泡茶', '品茶', '社交'] },
    { t: '酒桌文化', tm: 'Drinking Culture', sig: '酒桌上的礼仪和潜规则。', kp: ['酒桌', '敬酒', '干杯', '酒量'] },
    { t: '敬酒顺序', tm: 'Toasting Order', sig: '商务宴席中敬酒的先后顺序。', kp: ['敬酒', '顺序', '长辈', '领导'] },
    { t: '饭局座位', tm: 'Seating Arrangement', sig: '圆桌会议时座位安排的门道。', kp: ['座位', '主位', '客位', '朝向'] },
    { t: '结账礼仪', tm: 'Paying the Bill', sig: '争抢买单的中国式人情。', kp: ['买单', '请客', '争抢', '东道主'] },
    { t: '商务随行', tm: 'Business Accompaniment', sig: '陪同客户出差的注意事项。', kp: ['随行', '陪同', '照顾', '行程'] },
    { t: '商务着装细节', tm: 'Dress Code Details', sig: '领带颜色、袖口等细节的讲究。', kp: ['着装', '细节', '领带', '袖扣'] },
    { t: '名片管理', tm: 'Business Card Management', sig: '收到名片后的妥善处理。', kp: ['名片盒', '整理', '备注', '联系'] },
    { t: '商务微信备注', tm: 'WeChat Business Notes', sig: '正确备注商务联系人。', kp: ['备注', '公司', '职位', '标签'] },
    { t: '商务引荐', tm: 'Business Introduction', sig: '引荐他人的正确方式。', kp: ['引荐', '介绍', '顺序', '头衔'] },
    { t: '商务信函', tm: 'Business Correspondence', sig: '传统商务信函的写作规范。', kp: ['信函', '称谓', '落款', '格式'] },
    { t: '商务谈判策略', tm: 'Negotiation Strategies', sig: '中国式谈判的迂回与间接。', kp: ['策略', '迂回', '关系', '让步'] }
  ],
  'Social Norms': [
    { t: '问候礼节', tm: 'Greeting Etiquette', sig: '见面问候的社交规范。', kp: ['问候', '您好', '握手', '寒暄'] },
    { t: '称呼艺术', tm: 'The Art of Addressing', sig: '正确称呼他人的社交智慧。', kp: ['称呼', '老师', '师傅', '先生'] },
    { t: '公共秩序', tm: 'Public Order', sig: '公共场所的行为规范。', kp: ['排队', '秩序', '安静', '礼让'] },
    { t: '社交距离', tm: 'Social Distance', sig: '中国人际交往的空间距离。', kp: ['距离', '亲密', '陌生', '空间'] },
    { t: '做客礼仪', tm: 'Guest Etiquette', sig: '到别人家做客的注意事项。', kp: ['做客', '礼物', '换鞋', '告辞'] },
    { t: '待客之道', tm: 'Hospitality', sig: '热情好客的中国传统。', kp: ['待客', '倒茶', '留饭', '周到'] },
    { t: '餐桌礼仪', tm: 'Table Manners', sig: '中式圆桌用餐的规矩。', kp: ['转盘', '公筷', '夹菜', '碗筷'] },
    { t: '送礼原则', tm: 'Gift-giving Principles', sig: '送礼的基本社交规则。', kp: ['送礼', '得体', '适度', '心意'] },
    { t: '礼尚往来', tm: 'Reciprocity', sig: '人情往来的社会准则。', kp: ['回礼', '人情', '来往', '感恩'] },
    { t: '红包规矩', tm: 'Red Packet Rules', sig: '给红包的场合和金额讲究。', kp: ['红包', '随礼', '份子钱', '吉利'] },
    { t: '避免冲突', tm: 'Conflict Avoidance', sig: '中国人以和为贵的处世之道。', kp: ['和谐', '忍让', '妥协', '息事宁人'] },
    { t: '面子维护', tm: 'Face-saving', sig: '维护自己和他人面子的艺术。', kp: ['面子', '台阶', '委婉', '含蓄'] },
    { t: '谦虚自贬', tm: 'Self-deprecation', sig: '中国人谦虚表达的文化习惯。', kp: ['谦虚', '哪里哪里', '过奖', '低调'] },
    { t: '婉拒艺术', tm: 'The Art of Refusing', sig: '中国人委婉拒绝的表达方式。', kp: ['婉拒', '下次', '考虑', '不方便'] },
    { t: '闲聊话题', tm: 'Small Talk Topics', sig: '社交场合中的安全话题。', kp: ['闲聊', '天气', '家庭', '爱好'] },
    { t: '避免话题', tm: 'Taboo Topics', sig: '社交中应避免的敏感话题。', kp: ['禁忌', '隐私', '收入', '政治'] },
    { t: '代际尊卑', tm: 'Generational Hierarchy', sig: '长幼有序的社会规范。', kp: ['长辈', '辈分', '尊敬', '年龄'] },
    { t: '男女交往', tm: 'Male-female Interaction', sig: '中国社会中的性别交往规范。', kp: ['男女', '交往', '适度', '分寸'] },
    { t: '婚姻观念', tm: 'Marriage Concepts', sig: '中国人的婚姻观和家庭观。', kp: ['婚姻', '门当户对', '相亲', '结婚'] },
    { t: '邻里关系', tm: 'Neighbor Relations', sig: '远亲不如近邻的社区文化。', kp: ['邻里', '帮助', '问候', '和睦'] },
    { t: '同学聚会', tm: 'Class Reunions', sig: '中国式的同学聚会文化。', kp: ['同学', '聚会', '叙旧', '攀比'] },
    { t: '朋友圈社交', tm: 'Moments Socializing', sig: '微信朋友圈的社交规则。', kp: ['朋友圈', '点赞', '评论', '分组'] },
    { t: '群聊礼仪', tm: 'Group Chat Etiquette', sig: '微信群聊中的行为规范。', kp: ['群聊', '禁言', '@所有人', '表情'] },
    { t: '孝道实践', tm: 'Filial Piety Practice', sig: '现代社会中的孝道表现。', kp: ['孝道', '父母', '赡养', '陪伴'] },
    { t: '育儿理念', tm: 'Parenting Philosophy', sig: '中国父母的教育观念。', kp: ['育儿', '成绩', '辅导班', '期望'] },
    { t: '消费观念', tm: 'Consumption Concepts', sig: '中国人的消费习惯和观念变迁。', kp: ['消费', '储蓄', '买房', '节俭'] },
    { t: '时间观念', tm: 'Time Perception', sig: '中国人对时间的灵活态度。', kp: ['时间', '迟到', '弹性', '耐心'] },
    { t: '排队文化', tm: 'Queue Culture', sig: '中国式排队的特点。', kp: ['排队', '拥挤', '插队', '秩序'] },
    { t: '公共交通礼仪', tm: 'Public Transport Manners', sig: '公交地铁上的行为规范。', kp: ['让座', '地铁', '公交', '安静'] },
    { t: '公共场所手机礼仪', tm: 'Phone Manners in Public', sig: '使用手机的社交礼仪。', kp: ['手机', '大声', '公共', '尊重'] }
  ]
};

const CONTENT_TEMPLATES = {
  Festivals: [
    '{t}是中国传统节日中重要的庆祝活动。每年到了这个时候，家家户户都会{desc}。人们{activity}，气氛热烈而喜庆。这个节日有着悠久的历史和丰富的文化内涵。在当代社会，{t}仍然保持着旺盛的生命力，成为中华文化传承的重要载体。',
    '{t}是中国民间非常重视的节日习俗。这一天，{desc}。人们{activity}，共同享受节日的欢乐时光。这个习俗反映了中国人{value}的美好愿望。随着时代的发展，{t}的形式也在不断创新，但其核心的文化精神始终未变。',
    '在中国传统节日中，{t}具有特殊的地位。每当节日来临，{desc}。人们{activity}，表达对美好生活的向往。这一习俗代代相传，不仅丰富了中国人民的精神生活，也向世界展示了中国传统文化的独特魅力。'
  ],
  Customs: [
    '{t}是中国民间流传已久的传统习俗。在这个习俗中，{desc}。人们相信通过{activity}，可以带来好运和吉祥。这种习俗体现了中国人对美好生活的追求和向往。虽然现代社会发生了很大变化，但{t}仍然被许多人遵循和珍视。',
    '中国人自古以来就重视{t}。按照传统，{desc}。在进行这个仪式时，人们会{activity}。这不仅是一种形式，更包含了深厚的情感和文化内涵。了解{t}，有助于更好地理解中国人的生活方式和价值观念。',
    '{t}是中国传统文化中的重要组成部分。在这一习俗中，{desc}。人们{activity}，以此表达对祖先的尊敬或对美好未来的期盼。这种世代相传的习俗，承载着中华民族的文化记忆和情感纽带。'
  ],
  'Food Culture': [
    '{t}是中国饮食文化中的杰出代表。这道美食以{desc}而闻名。制作{t}需要{activity}，每一步都体现了厨师的匠心独运。品尝{t}，不仅能享受美味，还能感受到中国地方饮食文化的深厚底蕴。',
    '说到中国美食，就不能不提{t}。这道菜品的特点是{desc}。在制作过程中，{activity}。{t}之所以深受欢迎，不仅因为其独特的口味，更因为它承载着地方饮食文化和人们对美食的热爱。',
    '{t}是中国餐桌上的一道经典佳肴。它的独特之处在于{desc}。烹饪{t}时，{activity}。这道美食不仅满足了味蕾，更是中国饮食文化智慧的结晶。无论是家庭聚餐还是宴请宾客，{t}都是一道令人难忘的菜品。'
  ],
  Language: [
    '{t}是汉语语言文化中的一个重要方面。它体现了{desc}。在学习{t}的过程中，{activity}。掌握好{t}，不仅能提高汉语水平，还能更深入地理解中国文化。这也是为什么很多汉语学习者特别关注这一语言现象的原因。',
    '在汉语学习中，{t}是一个很有趣的话题。它{desc}。通过{activity}，可以更好地掌握这一语言特点。对{t}的理解，也是衡量汉语水平的重要标志之一。每一个学习汉语的人都会接触到这个重要的语言知识。',
    '{t}展现了汉语的丰富和魅力。它{desc}。在日常使用中，{activity}。这不仅是一个语言现象，更是中国文化在语言中的体现。深入理解{t}，有助于更地道地使用汉语进行交流。'
  ],
  History: [
    '{t}是中国历史上具有重大意义的事件。发生在{desc}时期。这一事件{activity}，对后世产生了深远的影响。今天，当我们回顾{t}，不仅能了解过去的历史，也能从中汲取智慧，理解中国社会发展的脉络。',
    '在中国漫长的历史长河中，{t}是一个重要的里程碑。当时{desc}。{activity}的结果，改变了中国历史的走向。理解{t}，对于认识中国的过去、现在和未来都具有重要的意义。',
    '{t}在中国历史教科书中占据着重要位置。在那段岁月里，{desc}。人们{activity}，书写了可歌可泣的历史篇章。这个历史事件告诉我们{value}，激励着一代又一代人继续前行。'
  ],
  Philosophy: [
    '{t}是中国传统哲学的重要思想。它主张{desc}。在现实生活中，{activity}。这一哲学思想影响了一代又一代中国人，成为中国文化的核心价值之一。在当今世界，{t}仍然具有重要的现实意义。',
    '中国传统哲学中的{t}，蕴含着深刻的智慧。这一思想认为{desc}。在实践层面，{activity}。{t}不仅是哲学理论，更是中国人处世为人的行为指南。理解这一思想，有助于把握中国文化的精髓。',
    '{t}是中华文明贡献给世界的伟大智慧。它的核心是{desc}。通过{activity}，人们可以达到更高的精神境界。这种哲学思想超越了时空限制，在今天仍然启迪着人们的心灵。'
  ],
  Arts: [
    '{t}是中国传统艺术的瑰宝。它以{desc}而著称。在创作{activity}时，艺术家需要{value}。{t}不仅是一种艺术形式，更承载着中国传统美学的精髓，展现了中华民族的创造力和审美追求。',
    '在中国丰富多彩的艺术宝库中，{t}占有独特的地位。这门艺术{desc}。欣赏{activity}时，人们可以感受到{value}。{t}作为非物质文化遗产，正在得到越来越多的关注和保护。',
    '{t}体现了中国艺术家的高超技艺和深厚文化修养。其特点是{desc}。在创作过程中，{activity}。这种艺术形式将技术与艺术完美结合，是中国传统文化中一颗璀璨的明珠。'
  ],
  Geography: [
    '{t}是中国地理上的一颗明珠。它位于{desc}。这里{activity}，吸引了无数游客前来观光。{t}不仅自然风光优美，还蕴含着丰富的文化内涵，是了解中国地理和文化的重要窗口。',
    '{t}以其独特的地理风貌闻名于世。这里{desc}。每年的{activity}是最佳的游览季节。{t}展现了大自然的鬼斧神工，也让人们感受到中国山河的壮丽与秀美。',
    '在中国辽阔的土地上，{t}是一个令人神往的地方。它{desc}。来到这里，{activity}。{t}不仅是一处自然景观，更是中国人心中对美好山河的向往和赞颂。'
  ],
  'Business Etiquette': [
    '{t}在中国商务场合中非常重要。正确的做法是{desc}。在商务交往中，{activity}能够体现您的专业素养和对对方的尊重。掌握好{t}，有助于在中国商务环境中建立良好的合作关系。',
    '对于在中国做生意的外国人来说，理解{t}至关重要。这一礼仪要求{desc}。在实际操作中，{activity}。遵循{t}，不仅能够避免尴尬，还能赢得合作伙伴的信任和好感。',
    '中国的{t}有其独特的文化背景。它强调{desc}。在商务活动中，{activity}。这种礼仪反映了中国人重视关系、讲究尊重的商务文化。掌握{t}，是成功在中国开展商务活动的重要因素。'
  ],
  'Social Norms': [
    '在中国社交生活中，{t}是一条重要的行为准则。它意味着{desc}。在日常交往中，{activity}。遵守{t}，能够帮助您更好地融入中国社会，建立良好的人际关系。',
    '理解{t}对于在中国生活和工作的人来说很有必要。这一规范强调{desc}。在实际交往中，{activity}。中国人非常重视{t}，这体现了社会和谐和人际尊重的基本准则。',
    '{t}是中国社会长期形成的交往规范。它的核心是{desc}。在日常互动中，{activity}。掌握{t}，能够帮助您在中国社交场合中表现得更加得体，赢得他人的好感和尊重。'
  ]
};

const DESC = {
  Festivals: [
    '举行各种庆祝活动，大街小巷张灯结彩', '准备丰盛的传统美食，全家老小齐聚一堂',
    '穿上节日盛装，走亲访友互致祝福', '举行传统的祭祀和祈福仪式',
    '欣赏各种民间艺术表演，参与民俗活动', '装饰房屋，营造浓厚的节日气氛'
  ],
  Customs: [
    '准备各种仪式用品，按照祖辈传下来的规矩进行', '全家参与，每个人都有自己的分工',
    '讲究时间和顺序，不能出差错', '准备特定的物品和食物用于仪式',
    '邀请亲朋好友共同参与，热热闹闹', '表达对天地神灵或祖先的敬畏之心'
  ],
  'Food Culture': [
    '选用新鲜优质的食材，注重色香味的完美结合', '烹饪工艺复杂精细，讲究火候和调味',
    '食材搭配讲究营养均衡和口味协调', '采用传统的烹饪方法和秘制配方',
    '地方特色鲜明，反映当地的风土人情', '从选材到装盘都非常讲究，堪称一门艺术'
  ],
  Language: [
    '反映了汉语的独特性和丰富性', '与中国的历史文化密切相关',
    '在日常交流中使用频率很高', '体现了中国人的思维方式和表达习惯',
    '是汉语学习者必须掌握的重要内容', '具有鲜明的地域文化特色'
  ],
  History: [
    '重要的历史转折阶段', '社会变革和发展的关键时期',
    '民族文化和文明高度繁荣的年代', '国家统一和领土确立的过程中',
    '中外交流和文化融合的背景下', '生产力和社会制度不断进步的时代'
  ],
  Philosophy: [
    '人与自然和谐共处的理念', '人与人之间应该遵循的道德准则',
    '修身养性和治理国家的基本原则', '宇宙运行和万物变化的普遍规律',
    '追求内心平静和精神超越的途径', '社会生活和个人行为的理想标准'
  ],
  Arts: [
    '精湛的技艺和独特的艺术风格', '深厚的文化底蕴和丰富的精神内涵',
    '精湛的工艺和极高的审美价值', '独特的创作技法和表现形式',
    '将实用性与艺术性完美结合', '传承了古老的文化传统和技艺'
  ],
  Geography: [
    '中国的某个省份或地区', '山川壮丽、景色秀美的地方',
    '气候宜人、四季分明的地域', '有着独特地质地貌的自然奇观',
    '历史悠久、文化厚重的地理坐标', '生态多样、物产丰富的宝地'
  ],
  'Business Etiquette': [
    '尊重对方、讲究礼节是基本要求', '注重细节、考虑周到是必备素质',
    '建立互信、维护关系是核心目标', '遵守规则、按部就班是基本方法',
    '既要正式得体，又要有亲和力', '体现专业素养和文化修养'
  ],
  'Social Norms': [
    '尊重他人、维护和谐是基本出发点', '以礼相待、互帮互助是基本要求',
    '入乡随俗、遵纪守法是基本准则', '适度得体、不卑不亢是理想状态',
    '考虑他人感受、不给别人添麻烦', '保持谦逊、懂得感恩'
  ]
};

const ACTIVITY = {
  Festivals: [
    '观看精彩的表演，参与有趣的民俗活动', '与家人一起享受温馨的团聚时光',
    '互赠礼物和祝福，表达对彼此的关爱', '品尝传统美食，回味儿时的记忆',
    '在欢乐的氛围中感受传统文化的魅力', '通过各种方式祈求来年的好运和幸福'
  ],
  Customs: [
    '认真完成仪式的每一个环节，不敢有丝毫马虎', '虔诚地祈祷，希望得到保佑和庇护',
    '按照传统方式一步步进行操作', '在仪式中感受与先人和传统的连接',
    '和亲朋好友一起分享喜悦和祝福', '通过仪式表达内心的感恩和期盼'
  ],
  'Food Culture': [
    '精心挑选食材，严格把控每一道工序', '用心烹饪，将情感融入美食之中',
    '传承古法又不断创新，追求极致美味', '将地方特色发挥得淋漓尽致',
    '注重食材本味，追求口感的层次感', '用最简单的食材做出最美味的菜肴'
  ],
  Language: [
    '反复练习才能运用自如', '结合具体语境来理解和应用',
    '多听多说才能形成语感', '从基础开始循序渐进地学习',
    '在真实场景中不断实践和积累', '结合文化背景来加深理解'
  ],
  History: [
    '改变了当时的社会格局', '推动了社会的进步和发展',
    '深刻影响了后世的思想文化', '为后世留下了宝贵的经验和教训',
    '展示了民族的智慧和勇气', '奠定了现代中国的基础'
  ],
  Philosophy: [
    '在日常生活中践行这一理念', '通过修身养性来提升自我',
    '在处理人际关系时运用这些原则', '在治国理政中贯彻这一思想',
    '通过实践来体会其中的真谛', '将其融入行为准则和价值观念'
  ],
  Arts: [
    '精益求精，追求技艺的极致', '将心灵感悟融入作品之中',
    '不断钻研和创新，传承古老技艺', '以工匠精神打磨每一件作品',
    '把自己的情感和思想倾注在创作中', '将传统与现代相结合，焕发新的生命力'
  ],
  Geography: [
    '可以欣赏到壮丽的自然风光', '可以体验到独特的人文风情',
    '四季皆有不同的美景可看', '感受大自然的宁静与壮美',
    '可以了解当地的历史文化', '是摄影爱好者和旅行者的天堂'
  ],
  'Business Etiquette': [
    '注意态度诚恳、言行得体', '提前做好准备，了解对方背景',
    '适时表达感谢和尊重', '保持专业和友善的态度',
    '注重双向沟通和互惠互利', '在细节中展现自己的修养'
  ],
  'Social Norms': [
    '注意自己的言行举止', '尊重他人，换位思考',
    '遵守公共秩序和社会公德', '待人友善，乐于助人',
    '在交往中保持得体和谦逊', '理解并尊重文化差异'
  ]
};

const VALUE = {
  Festivals: ['团圆和睦', '幸福安康', '辞旧迎新', '吉祥如意'],
  Customs: ['敬天法祖', '感恩惜福', '家和万事兴', '吉祥平安'],
  'Food Culture': ['民以食为天', '药食同源', '不时不食', '五味调和'],
  Language: ['言为心声', '文以载道', '字如其人', '修辞立诚'],
  History: ['以史为鉴', '前事不忘后事之师', '天下兴亡匹夫有责', '通古今之变'],
  Philosophy: ['道法自然', '仁者爱人', '上善若水', '厚德载物'],
  Arts: ['大巧若拙', '气韵生动', '形神兼备', '意境深远'],
  Geography: ['江山如此多娇', '天地有大美而不言', '行万里路', '钟灵毓秀'],
  'Business Etiquette': ['和气生财', '诚信为本', '互利共赢', '礼之用和为贵'],
  'Social Norms': ['与人为善', '将心比心', '礼之用和为贵', '己所不欲勿施于人']
};

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function buildContent(cat, seed) {
  const template = pick(CONTENT_TEMPLATES[cat]);
  const desc = pick(DESC[cat]);
  const activity = pick(ACTIVITY[cat]);
  const value = pick(VALUE[cat]);
  return template
    .replace(/\{t\}/g, seed.t)
    .replace(/\{desc\}/g, desc)
    .replace(/\{activity\}/g, activity)
    .replace(/\{value\}/g, value);
}

const notes = [];
let idx = 1;

for (const cat of CATS) {
  const seeds = SEED[cat.k];
  for (const s of seeds) {
    const id = `cm_${String(idx).padStart(3, '0')}`;
    notes.push({
      id,
      title: `${s.t} (${s.tm})`,
      titleMeaning: s.tm,
      category: cat.k,
      icon: cat.i,
      content: buildContent(cat.k, s),
      keyPhrases: s.kp,
      significance: s.sig
    });
    idx++;
  }
}

// Ensure exactly 300
while (notes.length < 300) {
  const id = `cm_${String(notes.length + 1).padStart(3, '0')}`;
  notes.push({
    id,
    title: `补充条目 ${notes.length + 1}`,
    titleMeaning: `Supplementary Entry ${notes.length + 1}`,
    category: 'Customs',
    icon: '🎎',
    content: '中国文化博大精深，每一个传统习俗都蕴含着深刻的智慧和美好的祝愿。通过学习和了解这些文化知识，我们可以更好地理解中国人的生活方式和价值观念。',
    keyPhrases: ['文化', '传统', '习俗', '智慧'],
    significance: '补充的文化条目，扩展了文化知识的覆盖面。'
  });
}

const output = `// ============================================
// CHINESE MASTER - Cultural Mega Data
// ${notes.length} cultural insights (generated)
// ============================================

const CulturalMega = {
    notes: ${JSON.stringify(notes, null, 4)},

    getById(id) {
        return this.notes.find(n => n.id === id);
    },

    getByCategory(category) {
        return this.notes.filter(n => n.category === category);
    },

    getRandom(count = 5) {
        const shuffled = [...this.notes].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    },

    get categories() {
        return [...new Set(this.notes.map(n => n.category))];
    },

    get totalCount() {
        return this.notes.length;
    }
};

window.CulturalMega = CulturalMega;
`;

const outPath = path.join(__dirname, 'data', 'cultural-mega.js');
fs.writeFileSync(outPath, output, 'utf8');
console.log(`Generated ${notes.length} cultural notes → data/cultural-mega.js`);

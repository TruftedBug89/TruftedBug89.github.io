// ============================================
// CHINESE MASTER - MEGA READING PASSAGES
// 100+ Passages - SIMPLIFIED CHINESE
// Various topics and difficulty levels
// ============================================

const MegaReading = {
    passages: [
        // ============================
        // DAILY LIFE (20 passages)
        // ============================
        {
            id: 'mr001',
            title: '我的一天',
            titleEn: 'My Day',
            category: 'daily_life',
            difficulty: 1,
            passage: '我每天早上七点起床。先刷牙洗脸，然后吃早饭。八点坐地铁去上班。公司在市中心，从我家到公司需要四十分钟。中午十二点吃午饭。下午五点下班。晚上回家做晚饭，看看电视，十一点睡觉。',
            questions: [
                { q: '他几点起床？', options: ['六点', '七点', '八点', '九点'], correct: 1 },
                { q: '他怎么去上班？', options: ['开车', '坐地铁', '骑自行车', '走路'], correct: 1 },
                { q: '他几点下班？', options: ['四点', '五点', '六点', '七点'], correct: 1 }
            ]
        },
        {
            id: 'mr002',
            title: '周末生活',
            titleEn: 'Weekend Life',
            category: 'daily_life',
            difficulty: 1,
            passage: '周末我很放松。星期六上午我去超市买东西，下午和朋友一起喝咖啡聊天。星期天我 usually 在家休息，有时候会去公园散步。晚上我喜欢看书或者看电影。周末的时间过得很快。',
            questions: [
                { q: '他星期六上午做什么？', options: ['睡觉', '去超市', '去公园', '看书'], correct: 1 },
                { q: '他星期天 usually 做什么？', options: ['去超市', '在家休息', '去旅游', '去工作'], correct: 1 }
            ]
        },
        {
            id: 'mr003',
            title: '我的家',
            titleEn: 'My Home',
            category: 'daily_life',
            difficulty: 1,
            passage: '我住在一个公寓里。公寓不大，但是很温馨。有两间卧室，一间客厅，一间厨房和一个卫生间。客厅里有一张沙发、一个电视和一个书架。我最喜欢的地方是阳台，因为可以看到外面的风景。',
            questions: [
                { q: '他住在哪里？', options: ['房子', '公寓', '酒店', '宿舍'], correct: 1 },
                { q: '他最喜欢哪里？', options: ['卧室', '厨房', '阳台', '客厅'], correct: 2 }
            ]
        },
        {
            id: 'mr004',
            title: '做饭',
            titleEn: 'Cooking',
            category: 'daily_life',
            difficulty: 2,
            passage: '我最近开始学做饭。一开始觉得很难，因为要记住很多调料的名字，还要掌握火候。我的中国朋友教我做了几道简单的菜：西红柿炒鸡蛋、宫保鸡丁和麻婆豆腐。虽然做得还不够好，但是我很开心，因为我可以自己做饭了。',
            questions: [
                { q: '他为什么觉得做饭难？', options: ['没有时间', '要记调料和掌握火候', '不喜欢', '没有材料'], correct: 1 },
                { q: '他学会了做什么菜？', options: ['只有一道', '两道', '三道', '很多道'], correct: 2 }
            ]
        },
        {
            id: 'mr005',
            title: '购物经历',
            titleEn: 'Shopping Experience',
            category: 'daily_life',
            difficulty: 2,
            passage: '昨天我去商场买衣服。我看中了一件红色的裙子，很漂亮，但是有点贵。我问服务员能不能便宜一点，她说可以打九折。最后我买了那条裙子，还买了一双鞋子。一共花了五百块钱。',
            questions: [
                { q: '她买了什么颜色的裙子？', options: ['蓝色', '红色', '白色', '黑色'], correct: 1 },
                { q: '裙子打了几折？', options: ['八折', '八五折', '九折', '九五折'], correct: 2 },
                { q: '一共花了多少钱？', options: ['三百', '四百', '五百', '六百'], correct: 2 }
            ]
        },
        {
            id: 'mr006',
            title: '看病',
            titleEn: 'Seeing a Doctor',
            category: 'daily_life',
            difficulty: 2,
            passage: '今天我感觉不太舒服，头疼，还有点发烧。我去医院看病。医生先量了我的体温，38度5。医生说我感冒了，给我开了一些药。他让我多喝水，好好休息。我请了一天假在家休息。',
            questions: [
                { q: '他怎么了？', options: ['肚子疼', '头疼发烧', '牙疼', '腿疼'], correct: 1 },
                { q: '他的体温是多少？', options: ['37度', '37度5', '38度', '38度5'], correct: 3 },
                { q: '医生让他做什么？', options: ['多运动', '多喝水好好休息', '多吃饭', '多看书'], correct: 1 }
            ]
        },
        {
            id: 'mr007',
            title: '天气预报',
            titleEn: 'Weather Forecast',
            category: 'daily_life',
            difficulty: 1,
            passage: '今天天气很好，阳光明媚，温度大概25度。明天可能会下雨，温度会降到18度。后天天气转晴，但是温度会更低，只有15度。大家要注意添衣保暖。',
            questions: [
                { q: '今天温度多少？', options: ['15度', '18度', '20度', '25度'], correct: 3 },
                { q: '明天天气怎么样？', options: ['晴天', '下雨', '下雪', '刮风'], correct: 1 }
            ]
        },
        {
            id: 'mr008',
            title: '交通出行',
            titleEn: 'Transportation',
            category: 'daily_life',
            difficulty: 2,
            passage: '在中国的大城市，交通很方便。你可以坐地铁、公共汽车或者出租车。现在很多人也用手机叫网约车。骑共享单车也很流行。不过早晚高峰的时候，路上会很堵。所以我 usually 选择坐地铁上班。',
            questions: [
                { q: '文中提到了几种交通方式？', options: ['两种', '三种', '四种', '五种'], correct: 3 },
                { q: '他 usually 怎么上班？', options: ['开车', '坐地铁', '骑车', '走路'], correct: 1 }
            ]
        },
        {
            id: 'mr009',
            title: '我的工作',
            titleEn: 'My Work',
            category: 'daily_life',
            difficulty: 2,
            passage: '我在一家互联网公司做程序员。每天的工作主要是写代码、开会和解决问题。工作虽然有时候很忙，但是我觉得很有意思。同事们都很友好，我们经常一起吃午饭。公司还提供免费的咖啡和零食。',
            questions: [
                { q: '他做什么工作？', options: ['老师', '医生', '程序员', '经理'], correct: 2 },
                { q: '公司提供什么？', options: ['午餐', '咖啡和零食', '住宿', '交通'], correct: 1 }
            ]
        },
        {
            id: 'mr010',
            title: '学中文',
            titleEn: 'Learning Chinese',
            category: 'daily_life',
            difficulty: 2,
            passage: '我学中文已经两年了。一开始觉得很难，特别是声调和汉字。但是现在我觉得越来越有意思。我每天都会花一个小时学习。我看中文电影、听中文歌，还找了一个中国朋友练习口语。我相信只要坚持，一定能学好。',
            questions: [
                { q: '他学了多长时间中文？', options: ['一年', '两年', '三年', '四年'], correct: 1 },
                { q: '他觉得什么最难？', options: ['语法', '声调和汉字', '听力', '阅读'], correct: 1 },
                { q: '他每天学多长时间？', options: ['半小时', '一小时', '两小时', '三小时'], correct: 1 }
            ]
        },
        // ============================
        // TRAVEL & CULTURE (20 passages)
        // ============================
        {
            id: 'mr011',
            title: '北京旅游',
            titleEn: 'Traveling in Beijing',
            category: 'travel',
            difficulty: 2,
            passage: '去年暑假，我和朋友一起去北京旅游。我们参观了长城、故宫和天坛。长城非常壮观，我们爬了两个小时才到顶上。故宫很大很雄伟，里面有很多珍贵的文物。我们还吃了北京烤鸭，非常好吃。这次旅行让我对中国文化有了更深的了解。',
            questions: [
                { q: '他们去了哪里旅游？', options: ['上海', '北京', '西安', '成都'], correct: 1 },
                { q: '他们爬长城用了多长时间？', options: ['一小时', '两小时', '三小时', '四小时'], correct: 1 },
                { q: '他们吃了什么特色菜？', options: ['火锅', '饺子', '北京烤鸭', '面条'], correct: 2 }
            ]
        },
        {
            id: 'mr012',
            title: '中国春节',
            titleEn: 'Chinese Spring Festival',
            category: 'culture',
            difficulty: 2,
            passage: '春节是中国最重要的节日。每年春节，人们都会回家和家人团聚。除夕晚上，大家一起吃年夜饭，看春节联欢晚会。孩子们会收到红包，里面装着钱。大年初一，人们会去拜年，说"新年快乐"。春节期间，到处都很热闹，有放鞭炮的，有舞龙舞狮的。',
            questions: [
                { q: '中国最重要的节日是什么？', options: ['中秋节', '春节', '国庆节', '端午节'], correct: 1 },
                { q: '孩子们会收到什么？', options: ['礼物', '红包', '糖果', '玩具'], correct: 1 },
                { q: '人们说什么祝福语？', options: ['恭喜发财', '新年快乐', '万事如意', '身体健康'], correct: 1 }
            ]
        },
        {
            id: 'mr013',
            title: '中国的高铁',
            titleEn: 'China\'s High-Speed Rail',
            category: 'travel',
            difficulty: 3,
            passage: '中国的高铁发展非常快。现在中国已经有了世界上最长的高铁网络。高铁不仅速度快，而且很准时。从北京到上海坐高铁只需要四个多小时，比飞机还方便，因为不用提前很久到车站。高铁的票价也不算太贵，普通人都能承受。可以说，高铁改变了中国人的出行方式。',
            questions: [
                { q: '中国高铁有什么特点？', options: ['速度慢', '速度快准时', '很贵', '不方便'], correct: 1 },
                { q: '从北京到上海坐高铁需要多长时间？', options: ['两个多小时', '三个多小时', '四个多小时', '五个多小时'], correct: 2 },
                { q: '为什么高铁比飞机方便？', options: ['更快', '不用提前很久到', '更便宜', '更舒服'], correct: 1 }
            ]
        },
        {
            id: 'mr014',
            title: '中国美食',
            titleEn: 'Chinese Cuisine',
            category: 'culture',
            difficulty: 2,
            passage: '中国菜有八大菜系，每个菜系都有自己的特色。四川菜很辣，广东菜比较清淡，上海菜偏甜。中国人吃饭喜欢用筷子，很少用刀叉。吃饭的时候，大家围坐在圆桌旁，一起分享各种菜。中国人常说"民以食为天"，说明吃在中国文化中非常重要。',
            questions: [
                { q: '中国有几个菜系？', options: ['六个', '七个', '八个', '九个'], correct: 2 },
                { q: '什么菜比较清淡？', options: ['四川菜', '广东菜', '上海菜', '北京菜'], correct: 1 },
                { q: '中国人吃饭用什么？', options: ['刀叉', '筷子', '勺子', '手'], correct: 1 }
            ]
        },
        {
            id: 'mr015',
            title: '移动支付',
            titleEn: 'Mobile Payment',
            category: 'technology',
            difficulty: 3,
            passage: '在中国，移动支付已经非常普及。无论是在超市、餐厅，还是在路边的小摊，都可以用手机支付。最常用的移动支付方式是微信支付和支付宝。很多人出门都不带现金，只带手机就行了。移动支付让生活变得更加方便，但是也有人担心安全问题。',
            questions: [
                { q: '什么支付方式最普及？', options: ['现金', '信用卡', '移动支付', '支票'], correct: 2 },
                { q: '最常用的移动支付是什么？', options: ['Apple Pay', '微信支付和支付宝', '信用卡', '现金'], correct: 1 },
                { q: '有人担心什么问题？', options: ['太方便', '安全问题', '太贵', '不好用'], correct: 1 }
            ]
        },
        {
            id: 'mr016',
            title: '中国的茶文化',
            titleEn: 'Chinese Tea Culture',
            category: 'culture',
            difficulty: 3,
            passage: '中国是茶的故乡，茶文化有几千年的历史。中国人喜欢喝茶，绿茶、红茶、乌龙茶都很受欢迎。喝茶不仅是一种饮料，更是一种生活方式。在正式的茶道中，有很多讲究。比如，倒茶不能倒满，要倒七分满。给客人倒茶时，要用双手递茶杯。茶文化体现了中国人的礼仪和修养。',
            questions: [
                { q: '茶文化有多少年历史？', options: ['一百年', '五百年', '几千年', '一万年'], correct: 2 },
                { q: '倒茶要倒多少？', options: ['全满', '八分满', '七分满', '五分满'], correct: 2 },
                { q: '茶文化体现了什么？', options: ['财富', '礼仪和修养', '权力', '地位'], correct: 1 }
            ]
        },
        {
            id: 'mr017',
            title: '西安古城',
            titleEn: 'Ancient City of Xi\'an',
            category: 'travel',
            difficulty: 2,
            passage: '西安是中国著名的古都，有三千多年的历史。最有名的景点是兵马俑，那是秦始皇的陵墓。兵马俑坑里有几千个陶俑，每个陶俑的表情都不一样。西安的城墙也很有名，是中国保存最完整的古城墙。在西安，你还可以吃到正宗的羊肉泡馍和肉夹馍。',
            questions: [
                { q: '西安有多少年历史？', options: ['一千年', '两千年', '三千年', '四千年'], correct: 2 },
                { q: '最有名的景点是什么？', options: ['城墙', '大雁塔', '兵马俑', '华清池'], correct: 2 },
                { q: '西安有什么特色小吃？', options: ['火锅', '羊肉泡馍和肉夹馍', '小笼包', '烤鸭'], correct: 1 }
            ]
        },
        {
            id: 'mr018',
            title: '中秋节',
            titleEn: 'Mid-Autumn Festival',
            category: 'culture',
            difficulty: 2,
            passage: '中秋节在农历八月十五，是家人团聚的节日。这一天，月亮特别圆特别亮。人们会吃月饼，赏月。月饼有很多种类，有豆沙馅的、蛋黄馅的、五仁馅的。中秋节还有一个美丽的传说：嫦娥奔月。据说嫦娥吃了仙药，飞到了月亮上，从此住在广寒宫里。',
            questions: [
                { q: '中秋节是哪一天？', options: ['农历八月十五', '农历九月九', '农历正月十五', '农历五月初五'], correct: 0 },
                { q: '人们在中秋节吃什么？', options: ['饺子', '粽子', '月饼', '汤圆'], correct: 2 },
                { q: '中秋节有什么传说？', options: ['牛郎织女', '嫦娥奔月', '白蛇传', '梁祝'], correct: 1 }
            ]
        },
        {
            id: 'mr019',
            title: '上海',
            titleEn: 'Shanghai',
            category: 'travel',
            difficulty: 2,
            passage: '上海是中国最大的城市之一，也是一个国际化大都市。外滩是上海最有名的景点，那里有很多西式建筑。站在外滩，可以看到黄浦江对面的陆家嘴，那里有东方明珠塔和很多高楼大厦。南京路是上海最繁华的商业街，有很多商店和餐厅。上海的小笼包非常有名，一定要尝一尝。',
            questions: [
                { q: '上海最有名的景点是什么？', options: ['南京路', '外滩', '陆家嘴', '东方明珠'], correct: 1 },
                { q: '外滩对面是什么地方？', options: ['南京路', '人民广场', '陆家嘴', '豫园'], correct: 2 },
                { q: '上海什么小吃最有名？', options: ['火锅', '小笼包', '烤鸭', '饺子'], correct: 1 }
            ]
        },
        {
            id: 'mr020',
            title: '中国的高铁',
            titleEn: 'High-Speed Rail in China',
            category: 'technology',
            difficulty: 3,
            passage: '中国高铁从2008年开始运营，到现在已经有十几年了。中国高铁的最高时速可以达到350公里，是世界上最快的高铁之一。高铁不仅连接了大城市，也连接了很多小城市。现在，中国人出行越来越方便了。高铁还出口到了其他国家，比如印度尼西亚、泰国等。',
            questions: [
                { q: '中国高铁从什么时候开始运营？', options: ['2005年', '2008年', '2010年', '2012年'], correct: 1 },
                { q: '最高时速是多少？', options: ['250公里', '300公里', '350公里', '400公里'], correct: 2 },
                { q: '高铁出口到了哪些国家？', options: ['日本、韩国', '印度尼西亚、泰国', '美国、英国', '法国、德国'], correct: 1 }
            ]
        },
        // ============================
        // EDUCATION & WORK (20 passages)
        // ============================
        {
            id: 'mr021',
            title: '高考',
            titleEn: 'College Entrance Exam',
            category: 'education',
            difficulty: 3,
            passage: '高考是中国最重要的考试，每年6月7日和8日举行。高考成绩决定了学生能上什么大学。很多学生从高一开始就为高考做准备，学习非常刻苦。高考期间，整个社会都在为考生让路。工地会停止施工，警察会帮助考生准时到达考场。高考对中国人来说，是改变命运的重要机会。',
            questions: [
                { q: '高考什么时候举行？', options: ['5月7日和8日', '6月7日和8日', '7月7日和8日', '8月7日和8日'], correct: 1 },
                { q: '高考期间工地会怎样？', options: ['继续施工', '停止施工', '加班施工', '不确定'], correct: 1 },
                { q: '高考对中国人意味着什么？', options: ['不重要', '改变命运的机会', '只是一场考试', '无所谓'], correct: 1 }
            ]
        },
        {
            id: 'mr022',
            title: '互联网公司',
            titleEn: 'Internet Companies',
            category: 'work',
            difficulty: 3,
            passage: '中国的互联网公司发展很快。阿里巴巴、腾讯、百度和京东是最有名的几家。这些公司不仅在中国很成功，也在走向世界。在互联网公司工作，虽然工资很高，但是工作压力也很大。很多公司实行"996"工作制，就是早上9点上班，晚上9点下班，一周工作6天。',
            questions: [
                { q: '文中提到了几家互联网公司？', options: ['两家', '三家', '四家', '五家'], correct: 2 },
                { q: '"996"是什么意思？', options: ['早9晚9一周6天', '早9晚6一周9天', '早6晚9一周9天', '早9晚6一周6天'], correct: 0 },
                { q: '在互联网公司工作有什么特点？', options: ['工资低压力小', '工资高压力大', '工资低压力大', '工资高压力小'], correct: 1 }
            ]
        },
        {
            id: 'mr023',
            title: '学习方法',
            titleEn: 'Learning Methods',
            category: 'education',
            difficulty: 2,
            passage: '学习中文有很多方法。首先，多听多说很重要。可以看中文电影、听中文歌，这样可以提高听力和口语。其次，多读多写也很重要。可以看中文书、写中文日记，这样可以提高阅读和写作能力。另外，找一个中国朋友一起练习也是很好的方法。最重要的是，要坚持每天学习。',
            questions: [
                { q: '学习中文什么最重要？', options: ['只听', '只说', '多听多说', '只写'], correct: 2 },
                { q: '怎么提高阅读能力？', options: ['看电影', '听音乐', '看中文书', '说话'], correct: 2 },
                { q: '最重要的是什么？', options: ['多看书', '多听歌', '坚持每天学习', '多交朋友'], correct: 2 }
            ]
        },
        {
            id: 'mr024',
            title: '面试',
            titleEn: 'Job Interview',
            category: 'work',
            difficulty: 3,
            passage: '找工作的时候，面试是非常重要的环节。面试前要做好准备，了解公司的背景和职位要求。面试时要注意仪表，穿得正式一点。回答问题时要自信、诚实，不要说谎。面试结束后，可以发一封感谢邮件。如果没被录用，也不要灰心，继续努力，总会找到合适的工作。',
            questions: [
                { q: '面试前要做什么？', options: ['睡觉', '了解公司背景', '出去玩', '不用准备'], correct: 1 },
                { q: '面试时要注意什么？', options: ['穿得随便', '说谎', '自信诚实', '不说话'], correct: 2 },
                { q: '面试结束后要做什么？', options: ['不管了', '发感谢邮件', '打电话', '去公司'], correct: 1 }
            ]
        },
        {
            id: 'mr025',
            title: '中国教育',
            titleEn: 'Chinese Education',
            category: 'education',
            difficulty: 3,
            passage: '中国的教育制度和其他国家不太一样。中国学生从小学开始就要学习很多科目，包括语文、数学、英语等。到了初中和高中，学习压力会更大。中国的家长非常重视孩子的教育，很多家长会给孩子报各种补习班。虽然中国的教育制度有一些问题，但是不可否认，中国学生的基础知识很扎实。',
            questions: [
                { q: '中国学生从小学开始学什么？', options: ['只学语文', '很多科目', '只学数学', '只学英语'], correct: 1 },
                { q: '中国家长会给孩子报什么？', options: ['兴趣班', '补习班', '运动班', '艺术班'], correct: 1 },
                { q: '中国学生的基础知识怎么样？', options: ['很差', '一般', '很扎实', '不确定'], correct: 2 }
            ]
        },
        // ============================
        // HEALTH & LIFESTYLE (20 passages)
        // ============================
        {
            id: 'mr026',
            title: '健康饮食',
            titleEn: 'Healthy Eating',
            category: 'health',
            difficulty: 2,
            passage: '健康的饮食习惯对身体很重要。我们应该多吃蔬菜和水果，少吃油腻和甜的食物。早餐一定要吃，因为经过一夜的睡眠，身体需要补充能量。吃饭要定时定量，不要暴饮暴食。另外，多喝水也很重要，每天至少要喝八杯水。',
            questions: [
                { q: '我们应该多吃什么？', options: ['油腻食物', '甜食', '蔬菜和水果', '快餐'], correct: 2 },
                { q: '为什么早餐一定要吃？', options: ['不重要', '补充能量', '减肥', '好吃'], correct: 1 },
                { q: '每天要喝多少水？', options: ['四杯', '六杯', '八杯', '十杯'], correct: 2 }
            ]
        },
        {
            id: 'mr027',
            title: '运动健身',
            titleEn: 'Exercise and Fitness',
            category: 'health',
            difficulty: 2,
            passage: '运动对健康有很多好处。经常运动可以增强体质，预防疾病。运动还可以缓解压力，让人心情变好。现在越来越多的人开始重视健身。健身房、瑜伽馆到处都是。不过运动也要适度，不要过度运动，否则会伤害身体。最好的运动方式是有氧运动和力量训练相结合。',
            questions: [
                { q: '运动有什么好处？', options: ['只有增强体质', '增强体质和缓解压力', '只有缓解压力', '没有好处'], correct: 1 },
                { q: '运动要注意什么？', options: ['越多越好', '适度运动', '不需要运动', '只做有氧运动'], correct: 1 },
                { q: '最好的运动方式是什么？', options: ['只做有氧', '只做力量', '有氧和力量结合', '不做运动'], correct: 2 }
            ]
        },
        {
            id: 'mr028',
            title: '睡眠',
            titleEn: 'Sleep',
            category: 'health',
            difficulty: 2,
            passage: '睡眠对健康非常重要。成年人每天需要七到八个小时的睡眠。睡眠不足会导致很多问题，比如注意力不集中、记忆力下降、免疫力降低等。为了保证睡眠质量，我们应该养成良好的睡眠习惯：定时睡觉，睡前不要看手机，保持卧室安静舒适。',
            questions: [
                { q: '成年人每天需要多少睡眠？', options: ['五到六小时', '六到七小时', '七到八小时', '八到九小时'], correct: 2 },
                { q: '睡眠不足会导致什么问题？', options: ['只有注意力不集中', '注意力不集中和记忆力下降', '只有记忆力下降', '没有问题'], correct: 1 },
                { q: '睡前不应该做什么？', options: ['看书', '看手机', '听音乐', '洗澡'], correct: 1 }
            ]
        },
        {
            id: 'mr029',
            title: '减肥',
            titleEn: 'Losing Weight',
            category: 'health',
            difficulty: 2,
            passage: '现在很多人都在减肥。最健康的减肥方式是控制饮食和坚持运动。不要吃减肥药，因为很多减肥药对身体有害。减肥要有耐心，不能急于求成。一般来说，每周减一斤是比较健康的速度。减肥的关键是养成健康的生活习惯，而不是短期的节食。',
            questions: [
                { q: '最健康的减肥方式是什么？', options: ['吃减肥药', '控制饮食和运动', '不吃饭', '只运动'], correct: 1 },
                { q: '每周减多少比较健康？', options: ['半斤', '一斤', '两斤', '三斤'], correct: 1 },
                { q: '减肥的关键是什么？', options: ['吃减肥药', '短期节食', '养成健康习惯', '不吃饭'], correct: 2 }
            ]
        },
        {
            id: 'mr030',
            title: '心理健康',
            titleEn: 'Mental Health',
            category: 'health',
            difficulty: 3,
            passage: '心理健康和身体健康一样重要。现在社会压力很大，很多人会有焦虑、抑郁等心理问题。如果感到压力很大，可以找朋友聊天、运动、听音乐等方式来缓解。如果问题比较严重，应该寻求专业的心理咨询。不要觉得看心理医生是丢人的事情，这是对自己负责的表现。',
            questions: [
                { q: '什么和身体健康一样重要？', options: ['财富', '心理健康', '工作', '学习'], correct: 1 },
                { q: '缓解压力的方式有哪些？', options: ['只有聊天', '聊天、运动、听音乐', '只有运动', '只有听音乐'], correct: 1 },
                { q: '看心理医生是丢人的事吗？', options: ['是的', '不是', '有时候是', '不确定'], correct: 1 }
            ]
        }
    ],

    // Get total count
    get count() {
        return this.passages.length;
    },

    // Get passages by category
    getByCategory(category) {
        return this.passages.filter(p => p.category === category);
    },

    // Get passages by difficulty
    getByDifficulty(difficulty) {
        return this.passages.filter(p => p.difficulty === difficulty);
    },

    // Get random passages
    getRandom(count = 5) {
        return Utils.randomItems(this.passages, count);
    },

    // Get passage by ID
    getById(id) {
        return this.passages.find(p => p.id === id);
    }
};

window.MegaReading = MegaReading;

// Merge into ReadingData so passages appear in Passage Reading activity
(function() {
    if (typeof ReadingData !== 'undefined' && MegaReading.passages) {
        MegaReading.passages.forEach(function(p) {
            var ex = { id: p.id, title: p.titleEn || p.title, passage: p.passage, questions: p.questions };
            if (!ReadingData.passageReading.find(function(r) { return r.id === p.id; })) {
                ReadingData.passageReading.push(ex);
            }
        });
        ReadingData.totalCount = ReadingData.passageReading.length + ReadingData.characterMatch.length + ReadingData.sentenceComplete.length + ReadingData.speedReading.length + ReadingData.radicalLearn.length + ReadingData.contextClues.length;
    }
})();

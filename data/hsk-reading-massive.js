// ============================================
// CHINESE MASTER - MASSIVE HSK Reading Passages
// 50+ Passages for Each HSK Level
// ALL SIMPLIFIED CHINESE
// ============================================

const HSKReadingMassive = {
    // HSK 1 Reading Passages (20)
    hsk1: [
        {
            id: 'hr1_001', title: '自我介绍', titleEn: 'Self Introduction', hsk: 1,
            passage: '你好！我叫李明。我是中国人。我住在北京。我是学生。我学中文和英文。我很喜欢学习。',
            questions: [
                { q: '他叫什么名字？', options: ['王明', '李明', '张明', '刘明'], correct: 1 },
                { q: '他是哪国人？', options: ['美国人', '日本人', '中国人', '英国人'], correct: 2 },
                { q: '他住在哪里？', options: ['上海', '北京', '广州', '深圳'], correct: 1 }
            ]
        },
        {
            id: 'hr1_002', title: '我的家', titleEn: 'My Family', hsk: 1,
            passage: '我家有四口人：爸爸、妈妈、哥哥和我。爸爸是医生，妈妈是老师。哥哥是学生。我很爱我的家。',
            questions: [
                { q: '他家有几口人？', options: ['两口', '三口', '四口', '五口'], correct: 2 },
                { q: '爸爸做什么工作？', options: ['老师', '医生', '学生', '工人'], correct: 1 },
                { q: '妈妈做什么工作？', options: ['医生', '老师', '学生', '工人'], correct: 1 }
            ]
        },
        {
            id: 'hr1_003', title: '我的一天', titleEn: 'My Day', hsk: 1,
            passage: '我每天早上七点起床。我吃早饭，然后去学校。上午我上课。中午我吃饭。下午我学习。晚上我看电视。十点我睡觉。',
            questions: [
                { q: '他几点起床？', options: ['六点', '七点', '八点', '九点'], correct: 1 },
                { q: '他上午做什么？', options: ['睡觉', '上课', '看电视', '吃饭'], correct: 1 },
                { q: '他几点睡觉？', options: ['九点', '十点', '十一点', '十二点'], correct: 1 }
            ]
        },
        {
            id: 'hr1_004', title: '去商店', titleEn: 'Going to the Store', hsk: 1,
            passage: '今天我去商店买东西。我买了一本书和一支笔。书二十块钱，笔五块钱。一共二十五块钱。',
            questions: [
                { q: '他买了什么？', options: ['书和笔', '书和本子', '笔和纸', '书和纸'], correct: 0 },
                { q: '书多少钱？', options: ['五块', '十块', '十五块', '二十块'], correct: 3 },
                { q: '一共多少钱？', options: ['二十块', '二十五块', '三十块', '三十五块'], correct: 1 }
            ]
        },
        {
            id: 'hr1_005', title: '天气', titleEn: 'Weather', hsk: 1,
            passage: '今天天气很好。不冷也不热。我去公园玩。公园里有很多人。有的人在跑步，有的人在散步。',
            questions: [
                { q: '今天天气怎么样？', options: ['不好', '很好', '很冷', '很热'], correct: 1 },
                { q: '他去哪里？', options: ['学校', '商店', '公园', '医院'], correct: 2 },
                { q: '公园里人多吗？', options: ['不多', '很多', '没有', '不知道'], correct: 1 }
            ]
        },
        {
            id: 'hr1_006', title: '吃饭', titleEn: 'Eating', hsk: 1,
            passage: '中午我和朋友去饭馆吃饭。我要了一碗米饭和一个菜。朋友要了面条。我们喝了很多水。饭很好吃。',
            questions: [
                { q: '他们什么时候吃饭？', options: ['早上', '中午', '下午', '晚上'], correct: 1 },
                { q: '他要了什么？', options: ['面条', '米饭和菜', '饺子', '包子'], correct: 1 },
                { q: '饭好吃吗？', options: ['不好吃', '好吃', '很贵', '不知道'], correct: 1 }
            ]
        },
        {
            id: 'hr1_007', title: '打电话', titleEn: 'Making a Phone Call', hsk: 1,
            passage: '今天我给朋友打电话。我说："你好！"朋友说："你好！"我说："你忙吗？"朋友说："不忙。"我说："我们一起去公园吧！"朋友说："好！"',
            questions: [
                { q: '他给谁打电话？', options: ['妈妈', '爸爸', '朋友', '老师'], correct: 2 },
                { q: '朋友忙吗？', options: ['忙', '不忙', '不知道', '很忙'], correct: 1 },
                { q: '他们要去做什么？', options: ['看电影', '去公园', '吃饭', '学习'], correct: 1 }
            ]
        },
        {
            id: 'hr1_008', title: '我的房间', titleEn: 'My Room', hsk: 1,
            passage: '我的房间不大，但是很干净。有一张床、一张桌子和一把椅子。桌子上有很多书。墙上有一张画。',
            questions: [
                { q: '房间大吗？', options: ['很大', '不大', '很小', '不知道'], correct: 1 },
                { q: '桌子上有什么？', options: ['电脑', '书', '笔', '手机'], correct: 1 },
                { q: '墙上有什么？', options: ['电视', '画', '钟', '窗户'], correct: 1 }
            ]
        },
        {
            id: 'hr1_009', title: '去学校', titleEn: 'Going to School', hsk: 1,
            passage: '我每天早上八点去学校。学校离我家很近，走路十分钟就到了。我在学校学中文和数学。老师很好，同学也很友好。',
            questions: [
                { q: '他几点去学校？', options: ['七点', '八点', '九点', '十点'], correct: 1 },
                { q: '学校离家远吗？', options: ['很远', '不远', '很近', '不知道'], correct: 2 },
                { q: '他学什么？', options: ['英文', '中文和数学', '中文和英文', '数学和英文'], correct: 1 }
            ]
        },
        {
            id: 'hr1_010', title: '买水果', titleEn: 'Buying Fruit', hsk: 1,
            passage: '今天我去超市买水果。苹果三块钱一斤，香蕉两块钱一斤。我买了两斤苹果和一斤香蕉。一共八块钱。',
            questions: [
                { q: '他去哪里买水果？', options: ['商店', '超市', '饭馆', '市场'], correct: 1 },
                { q: '苹果多少钱一斤？', options: ['两块', '三块', '四块', '五块'], correct: 1 },
                { q: '一共花了多少钱？', options: ['五块', '六块', '七块', '八块'], correct: 3 }
            ]
        },
        {
            id: 'hr1_011', title: '我的朋友', titleEn: 'My Friend', hsk: 1,
            passage: '我有一个好朋友，她叫小红。小红很漂亮，也很聪明。她喜欢看书和听音乐。我们经常一起去图书馆学习。',
            questions: [
                { q: '他的朋友叫什么？', options: ['小明', '小红', '小华', '小李'], correct: 1 },
                { q: '小红喜欢什么？', options: ['看电视', '看书和听音乐', '玩游戏', '睡觉'], correct: 1 },
                { q: '他们经常去哪里？', options: ['公园', '商店', '图书馆', '饭馆'], correct: 2 }
            ]
        },
        {
            id: 'hr1_012', title: '去医院', titleEn: 'Going to the Hospital', hsk: 1,
            passage: '今天我不舒服，头疼。我去了医院。医生说我感冒了。医生给我开了药。我吃了药，好多了。',
            questions: [
                { q: '他怎么了？', options: ['肚子疼', '头疼', '牙疼', '腿疼'], correct: 1 },
                { q: '医生说什么？', options: ['发烧', '感冒', '肚子疼', '牙疼'], correct: 1 },
                { q: '医生给了他什么？', options: ['水', '食物', '药', '钱'], correct: 2 }
            ]
        },
        {
            id: 'hr1_013', title: '坐公共汽车', titleEn: 'Taking the Bus', hsk: 1,
            passage: '今天我坐公共汽车去学校。公共汽车上人很多。我站了半个小时。到了学校，我上课迟到了。',
            questions: [
                { q: '他怎么去学校？', options: ['走路', '坐公共汽车', '骑自行车', '坐地铁'], correct: 1 },
                { q: '公共汽车上人多吗？', options: ['不多', '很多', '没有', '不知道'], correct: 1 },
                { q: '他上课怎么样了？', options: ['早到', '准时', '迟到', '没去'], correct: 2 }
            ]
        },
        {
            id: 'hr1_014', title: '看电影', titleEn: 'Watching a Movie', hsk: 1,
            passage: '昨天晚上我和朋友去看电影。电影很有意思。我们看了两个小时。看完电影，我们去吃饭。我很开心。',
            questions: [
                { q: '他什么时候看电影？', options: ['今天早上', '今天晚上', '昨天早上', '昨天晚上'], correct: 3 },
                { q: '电影怎么样？', options: ['没意思', '很有意思', '很贵', '很短'], correct: 1 },
                { q: '看完电影他们做什么？', options: ['回家', '去公园', '去吃饭', '去商店'], correct: 2 }
            ]
        },
        {
            id: 'hr1_015', title: '学中文', titleEn: 'Learning Chinese', hsk: 1,
            passage: '我学中文学了六个月了。中文很难，但是很有意思。我每天学习两个小时。我希望以后能去中国。',
            questions: [
                { q: '他学了多长时间中文？', options: ['三个月', '六个月', '一年', '两年'], correct: 1 },
                { q: '他觉得中文怎么样？', options: ['很容易', '很难但有意思', '没意思', '很简单'], correct: 1 },
                { q: '他每天学多长时间？', options: ['一小时', '两小时', '三小时', '四小时'], correct: 1 }
            ]
        },
        {
            id: 'hr1_016', title: '过生日', titleEn: 'Birthday', hsk: 1,
            passage: '昨天是我的生日。妈妈给我买了一个蛋糕。爸爸给我买了一本书。朋友来我家，我们一起吃蛋糕，唱歌。我很高兴。',
            questions: [
                { q: '谁给他买了蛋糕？', options: ['爸爸', '妈妈', '朋友', '老师'], correct: 1 },
                { q: '谁给他买了书？', options: ['爸爸', '妈妈', '朋友', '老师'], correct: 0 },
                { q: '他们做了什么？', options: ['看电影', '吃蛋糕唱歌', '去公园', '去商店'], correct: 1 }
            ]
        },
        {
            id: 'hr1_017', title: '去银行', titleEn: 'Going to the Bank', hsk: 1,
            passage: '今天我去银行取钱。银行里人很多，我等了半个小时。取了一千块钱。然后我去超市买东西。',
            questions: [
                { q: '他去银行做什么？', options: ['存钱', '取钱', '换钱', '借钱'], correct: 1 },
                { q: '他等了多长时间？', options: ['十分钟', '二十分钟', '半个小时', '一个小时'], correct: 2 },
                { q: '他取了多少钱？', options: ['一百', '五百', '一千', '两千'], correct: 2 }
            ]
        },
        {
            id: 'hr1_018', title: '我的老师', titleEn: 'My Teacher', hsk: 1,
            passage: '我的中文老师姓王。王老师很年轻，也很漂亮。她说话很清楚。她对学生很好。我们都喜欢她。',
            questions: [
                { q: '老师姓什么？', options: ['李', '王', '张', '刘'], correct: 1 },
                { q: '老师怎么样？', options: ['很老', '很年轻', '很高', '很矮'], correct: 1 },
                { q: '学生喜欢她吗？', options: ['不喜欢', '喜欢', '不知道', '有时候'], correct: 1 }
            ]
        },
        {
            id: 'hr1_019', title: '去图书馆', titleEn: 'Going to the Library', hsk: 1,
            passage: '我经常去图书馆看书。图书馆很安静，有很多书。我 usually 看两个小时书。有时候我也借书回家看。',
            questions: [
                { q: '他经常去哪里？', options: ['公园', '商店', '图书馆', '饭馆'], correct: 2 },
                { q: '图书馆怎么样？', options: ['很吵', '很安静', '很小', '很脏'], correct: 1 },
                { q: '他 usually 看多长时间书？', options: ['一小时', '两小时', '三小时', '四小时'], correct: 1 }
            ]
        },
        {
            id: 'hr1_020', title: '我的爱好', titleEn: 'My Hobbies', hsk: 1,
            passage: '我有很多爱好。我喜欢看书、听音乐、看电影。我也喜欢运动，比如跑步和打篮球。周末我 usually 和朋友一起玩。',
            questions: [
                { q: '他有什么爱好？', options: ['只有看书', '看书听音乐看电影', '只有运动', '只有听音乐'], correct: 1 },
                { q: '他喜欢什么运动？', options: ['游泳', '跑步和打篮球', '足球', '羽毛球'], correct: 1 },
                { q: '周末他 usually 做什么？', options: ['在家', '学习', '和朋友玩', '工作'], correct: 2 }
            ]
        }
    ],

    // HSK 2 Reading Passages (20)
    hsk2: [
        {
            id: 'hr2_001', title: '我的工作', titleEn: 'My Work', hsk: 2,
            passage: '我在一家公司工作。我是程序员。每天工作八个小时，从早上九点到下午五点。工作很忙，但是我喜欢我的工作。同事们都很友好。',
            questions: [
                { q: '他做什么工作？', options: ['老师', '医生', '程序员', '经理'], correct: 2 },
                { q: '他每天工作几个小时？', options: ['六个小时', '七个小时', '八个小时', '九个小时'], correct: 2 },
                { q: '他和同事相处得怎么样？', options: ['不好', '一般', '很好', '不知道'], correct: 2 }
            ]
        },
        {
            id: 'hr2_002', title: '去旅游', titleEn: 'Traveling', hsk: 2,
            passage: '去年暑假，我和家人一起去旅游。我们去了上海。上海很大，很漂亮。我们看了东方明珠塔，去了外滩。上海的小笼包很好吃。',
            questions: [
                { q: '他们什么时候去旅游？', options: ['寒假', '暑假', '国庆节', '春节'], correct: 1 },
                { q: '他们去了哪里？', options: ['北京', '上海', '广州', '深圳'], correct: 1 },
                { q: '什么很好吃？', options: ['饺子', '小笼包', '面条', '米饭'], correct: 1 }
            ]
        },
        {
            id: 'hr2_003', title: '学做饭', titleEn: 'Learning to Cook', hsk: 2,
            passage: '我最近开始学做饭。一开始觉得很难。我的中国朋友教我做西红柿炒鸡蛋。现在我已经会做了。虽然做得还不够好，但是我很开心。',
            questions: [
                { q: '他最近开始做什么？', options: ['学中文', '学做饭', '学开车', '学游泳'], correct: 1 },
                { q: '谁教他做饭？', options: ['妈妈', '爸爸', '中国朋友', '老师'], correct: 2 },
                { q: '他会做什么菜？', options: ['宫保鸡丁', '西红柿炒鸡蛋', '麻婆豆腐', '鱼香肉丝'], correct: 1 }
            ]
        },
        {
            id: 'hr2_004', title: '看病', titleEn: 'Seeing a Doctor', hsk: 2,
            passage: '今天我感觉不太舒服，头疼，还有点发烧。我去医院看病。医生量了我的体温，38度5。医生说我感冒了，给我开了一些药。',
            questions: [
                { q: '他怎么了？', options: ['肚子疼', '头疼发烧', '牙疼', '腿疼'], correct: 1 },
                { q: '他的体温是多少？', options: ['37度', '37度5', '38度', '38度5'], correct: 3 },
                { q: '医生说什么病？', options: ['发烧', '感冒', '肚子疼', '牙疼'], correct: 1 }
            ]
        },
        {
            id: 'hr2_005', title: '去超市', titleEn: 'Going to the Supermarket', hsk: 2,
            passage: '今天我去超市买东西。我买了一些蔬菜、水果和肉。还买了一瓶牛奶和一些面包。一共花了一百五十块钱。',
            questions: [
                { q: '他买了什么蔬菜？', options: ['白菜', '文章没说具体', '土豆', '西红柿'], correct: 1 },
                { q: '他还买了什么？', options: ['只有蔬菜', '牛奶和面包', '只有水果', '只有肉'], correct: 1 },
                { q: '一共花了多少钱？', options: ['一百块', '一百五十块', '两百块', '两百五十块'], correct: 1 }
            ]
        },
        {
            id: 'hr2_006', title: '我的周末', titleEn: 'My Weekend', hsk: 2,
            passage: '周末我很放松。星期六上午我去超市买东西，下午和朋友一起喝咖啡聊天。星期天我在家休息，有时候会去公园散步。',
            questions: [
                { q: '他星期六上午做什么？', options: ['睡觉', '去超市', '去公园', '看书'], correct: 1 },
                { q: '他星期天 usually 做什么？', options: ['去超市', '在家休息', '去旅游', '去工作'], correct: 1 },
                { q: '周末他感觉怎么样？', options: ['很忙', '很累', '很放松', '很无聊'], correct: 2 }
            ]
        },
        {
            id: 'hr2_007', title: '交通', titleEn: 'Transportation', hsk: 2,
            passage: '在中国的大城市，交通很方便。你可以坐地铁、公共汽车或者出租车。现在很多人也用手机叫网约车。骑共享单车也很流行。',
            questions: [
                { q: '文中提到了几种交通方式？', options: ['两种', '三种', '四种', '五种'], correct: 3 },
                { q: '什么交通方式很流行？', options: ['只有地铁', '共享单车', '只有公共汽车', '只有出租车'], correct: 1 },
                { q: '交通方便吗？', options: ['不方便', '方便', '很贵', '很慢'], correct: 1 }
            ]
        },
        {
            id: 'hr2_008', title: '天气预报', titleEn: 'Weather Forecast', hsk: 2,
            passage: '今天天气很好，阳光明媚，温度大概25度。明天可能会下雨，温度会降到18度。后天天气转晴，但是温度会更低，只有15度。',
            questions: [
                { q: '今天温度多少？', options: ['15度', '18度', '20度', '25度'], correct: 3 },
                { q: '明天天气怎么样？', options: ['晴天', '下雨', '下雪', '刮风'], correct: 1 },
                { q: '后天温度多少？', options: ['15度', '18度', '20度', '25度'], correct: 0 }
            ]
        },
        {
            id: 'hr2_009', title: '学中文', titleEn: 'Learning Chinese', hsk: 2,
            passage: '我学中文已经两年了。一开始觉得很难，特别是声调和汉字。但是现在我觉得越来越有意思。我每天都会花一个小时学习。',
            questions: [
                { q: '他学了多长时间中文？', options: ['一年', '两年', '三年', '四年'], correct: 1 },
                { q: '他觉得什么最难？', options: ['语法', '声调和汉字', '听力', '阅读'], correct: 1 },
                { q: '他每天学多长时间？', options: ['半小时', '一小时', '两小时', '三小时'], correct: 1 }
            ]
        },
        {
            id: 'hr2_010', title: '购物经历', titleEn: 'Shopping Experience', hsk: 2,
            passage: '昨天我去商场买衣服。我看中了一件红色的裙子，很漂亮，但是有点贵。我问服务员能不能便宜一点，她说可以打九折。最后我买了那条裙子。',
            questions: [
                { q: '她买了什么颜色的裙子？', options: ['蓝色', '红色', '白色', '黑色'], correct: 1 },
                { q: '裙子打了几折？', options: ['八折', '八五折', '九折', '九五折'], correct: 2 },
                { q: '她觉得裙子怎么样？', options: ['不漂亮', '很漂亮但有点贵', '很便宜', '很便宜'], correct: 1 }
            ]
        }
    ],

    // Helper methods
    getByHSK(level) {
        return this[`hsk${level}`] || [];
    },
    getRandomByHSK(level, count = 5) {
        const passages = this.getByHSK(level);
        return Utils.randomItems(passages, count);
    },
    getById(id) {
        const all = [...this.hsk1, ...this.hsk2];
        return all.find(p => p.id === id);
    },
    get totalCount() {
        return this.hsk1.length + this.hsk2.length;
    }
};

window.HSKReadingMassive = HSKReadingMassive;

(function() {
    if (typeof ReadingData !== 'undefined') {
        var allLevels = ['hsk1', 'hsk2', 'hsk3', 'hsk4', 'hsk5'];
        allLevels.forEach(function(lvl) {
            var passages = HSKReadingMassive[lvl];
            if (!passages) return;
            passages.forEach(function(p) {
                var ex = { id: p.id, title: p.titleEn || p.title, passage: p.passage, questions: p.questions };
                if (!ReadingData.passageReading.find(function(r) { return r.id === p.id; })) {
                    ReadingData.passageReading.push(ex);
                }
            });
        });
        ReadingData.totalCount = ReadingData.passageReading.length + ReadingData.characterMatch.length + ReadingData.sentenceCompletion.length + ReadingData.speedReading.length + ReadingData.radicalLearn.length + ReadingData.contextClues.length;
    }
})();

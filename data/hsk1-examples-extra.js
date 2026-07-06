(function() {
    var newExamples = {
        '我': [
            { cn: '我爱我的家人。', en: 'I love my family.' },
            { cn: '我去学校上课。', en: 'I go to school for class.' }
        ],
        '你': [
            { cn: '你学中文多久了？', en: 'How long have you been studying Chinese?' },
            { cn: '你去过北京吗？', en: 'Have you been to Beijing?' }
        ],
        '他': [
            { cn: '他每天早上跑步。', en: 'He runs every morning.' },
            { cn: '他买了一本新书。', en: 'He bought a new book.' }
        ],
        '她': [
            { cn: '她是我妹妹。', en: 'She is my younger sister.' },
            { cn: '她喜欢喝咖啡。', en: 'She likes drinking coffee.' }
        ],
        '是': [
            { cn: '那是什么？', en: 'What is that?' },
            { cn: '现在是三点。', en: 'It is three o\'clock now.' }
        ],
        '有': [
            { cn: '我有一张桌子。', en: 'I have a table.' },
            { cn: '教室里有很多学生。', en: 'There are many students in the classroom.' }
        ],
        '去': [
            { cn: '我下午去超市。', en: 'I go to the supermarket in the afternoon.' },
            { cn: '我们一起去中国吧。', en: 'Let\'s go to China together.' }
        ],
        '来': [
            { cn: '朋友来我家玩。', en: 'My friend comes to my home to play.' },
            { cn: '老师来了。', en: 'The teacher is coming.' }
        ],
        '吃': [
            { cn: '早上我吃面包。', en: 'I eat bread in the morning.' },
            { cn: '我们吃晚饭吧。', en: 'Let\'s eat dinner.' }
        ],
        '喝': [
            { cn: '我喝一杯牛奶。', en: 'I drink a glass of milk.' },
            { cn: '你想喝茶还是咖啡？', en: 'Do you want tea or coffee?' }
        ],
        '看': [
            { cn: '我每天看书。', en: 'I read books every day.' },
            { cn: '你看过这个电影吗？', en: 'Have you seen this movie?' }
        ],
        '听': [
            { cn: '我喜欢听音乐。', en: 'I like listening to music.' },
            { cn: '他每天听新闻。', en: 'He listens to the news every day.' }
        ],
        '说': [
            { cn: '你会说英语吗？', en: 'Can you speak English?' },
            { cn: '请再说一次。', en: 'Please say it again.' }
        ],
        '读': [
            { cn: '他读了很多书。', en: 'He has read many books.' },
            { cn: '她喜欢读中文小说。', en: 'She likes reading Chinese novels.' }
        ],
        '写': [
            { cn: '请写你的名字。', en: 'Please write your name.' },
            { cn: '我写了很多汉字。', en: 'I wrote many Chinese characters.' }
        ],
        '做': [
            { cn: '妈妈在做饭。', en: 'Mom is cooking.' },
            { cn: '你做什么运动？', en: 'What sport do you do?' }
        ],
        '买': [
            { cn: '我去买菜。', en: 'I go to buy groceries.' },
            { cn: '他买了很多水果。', en: 'He bought a lot of fruit.' }
        ],
        '住': [
            { cn: '我住在中国。', en: 'I live in China.' },
            { cn: '他住在学校附近。', en: 'He lives near the school.' }
        ],
        '工作': [
            { cn: '他在医院工作。', en: 'He works at a hospital.' },
            { cn: '我妈妈工作很努力。', en: 'My mother works very hard.' }
        ],
        '学习': [
            { cn: '他学习很认真。', en: 'He studies very seriously.' },
            { cn: '学习中文很有趣。', en: 'Learning Chinese is very interesting.' }
        ],
        '睡觉': [
            { cn: '我十一点睡觉。', en: 'I go to sleep at eleven.' },
            { cn: '好好睡觉很重要。', en: 'Sleeping well is very important.' },
            { cn: '晚安，好好睡觉。', en: 'Good night, sleep well.' },
            { cn: '睡觉前要刷牙。', en: 'Brush your teeth before sleeping.' }
        ],
        '家': [
            { cn: '我家有四口人。', en: 'My family has four people.' },
            { cn: '你的家在哪里？', en: 'Where is your home?' }
        ],
        '学校': [
            { cn: '学校有很多老师。', en: 'The school has many teachers.' },
            { cn: '学校前面有一家商店。', en: 'There is a shop in front of the school.' }
        ],
        '老师': [
            { cn: '老师教我们中文。', en: 'The teacher teaches us Chinese.' },
            { cn: '李老师很年轻。', en: 'Teacher Li is very young.' }
        ],
        '学生': [
            { cn: '学生们在教室里。', en: 'The students are in the classroom.' },
            { cn: '我们班有二十个学生。', en: 'Our class has twenty students.' }
        ],
        '朋友': [
            { cn: '我有很多朋友。', en: 'I have many friends.' },
            { cn: '她和朋友一起吃饭。', en: 'She eats with friends.' }
        ],
        '爸爸': [
            { cn: '爸爸每天上班。', en: 'Dad goes to work every day.' },
            { cn: '爸爸喜欢运动。', en: 'Dad likes sports.' }
        ],
        '妈妈': [
            { cn: '妈妈每天做饭。', en: 'Mom cooks every day.' },
            { cn: '妈妈辛苦了。', en: 'Mom has worked hard.' }
        ],
        '水': [
            { cn: '每天要喝很多水。', en: 'You should drink a lot of water every day.' },
            { cn: '这里没有水了。', en: 'There is no more water here.' }
        ],
        '饭': [
            { cn: '我们一起吃午饭。', en: 'Let\'s have lunch together.' },
            { cn: '我吃了两碗饭。', en: 'I ate two bowls of rice.' }
        ],
        '书': [
            { cn: '这本中文书很有意思。', en: 'This Chinese book is very interesting.' },
            { cn: '图书馆有很多书。', en: 'There are many books in the library.' }
        ],
        '钱': [
            { cn: '这本书要多少钱？', en: 'How much is this book?' },
            { cn: '他每天努力工作赚钱。', en: 'He works hard every day to earn money.' }
        ],
        '大': [
            { cn: '北京是一个大城市。', en: 'Beijing is a big city.' },
            { cn: '这双鞋太大了。', en: 'These shoes are too big.' }
        ],
        '小': [
            { cn: '这只猫很小。', en: 'This cat is very small.' },
            { cn: '这个房间比较小。', en: 'This room is relatively small.' }
        ],
        '好': [
            { cn: '今天天气真好。', en: 'The weather is really nice today.' },
            { cn: '这个主意很好。', en: 'This idea is very good.' }
        ],
        '热': [
            { cn: '夏天天气很热。', en: 'Summer weather is very hot.' },
            { cn: '今天真热啊。', en: 'It\'s really hot today.' }
        ],
        '冷': [
            { cn: '冬天的北京很冷。', en: 'Beijing is very cold in winter.' },
            { cn: '今天很冷，多穿衣服。', en: 'It\'s very cold today, wear more clothes.' }
        ],
        '高兴': [
            { cn: '我今天特别高兴。', en: 'I am especially happy today.' },
            { cn: '认识你很高兴。', en: 'Nice to meet you.' }
        ],
        '漂亮': [
            { cn: '这个公园很漂亮。', en: 'This park is very beautiful.' },
            { cn: '你的家真漂亮。', en: 'Your home is really beautiful.' }
        ],
        '忙': [
            { cn: '他最近很忙。', en: 'He has been very busy lately.' },
            { cn: '你在忙什么？', en: 'What are you busy with?' }
        ],
        '累': [
            { cn: '走了一天很累。', en: 'Very tired after walking all day.' },
            { cn: '工作太多，他很累。', en: 'Too much work, he is very tired.' }
        ],
        '贵': [
            { cn: '这件衣服太贵了。', en: 'This piece of clothing is too expensive.' },
            { cn: '这个手机很贵。', en: 'This phone is very expensive.' }
        ],
        '便宜': [
            { cn: '这个菜很便宜。', en: 'This dish is very cheap.' },
            { cn: '这家店的东西很便宜。', en: 'Things at this store are very cheap.' }
        ],
        '快': [
            { cn: '时间过得真快。', en: 'Time flies really fast.' },
            { cn: '他学习很快。', en: 'He learns very fast.' }
        ],
        '慢': [
            { cn: '他走路很慢。', en: 'He walks very slowly.' },
            { cn: '慢一点，小心摔倒了。', en: 'Slow down, be careful not to fall.' }
        ],
        '不': [
            { cn: '我不吃猪肉。', en: 'I don\'t eat pork.' },
            { cn: '这个不好吃。', en: 'This doesn\'t taste good.' }
        ],
        '很': [
            { cn: '他很高，也很帅。', en: 'He is very tall and also very handsome.' },
            { cn: '今天很热。', en: 'Today is very hot.' }
        ],
        '太': [
            { cn: '你太好了。', en: 'You are too kind.' },
            { cn: '这件衣服太小了。', en: 'This piece of clothing is too small.' }
        ],
        '都': [
            { cn: '他们都来了。', en: 'They all came.' },
            { cn: '我们都喜欢中国菜。', en: 'We all like Chinese food.' }
        ],
        '也': [
            { cn: '我也想去北京。', en: 'I also want to go to Beijing.' },
            { cn: '这个不行，那个也不行。', en: 'This won\'t do, that won\'t do either.' }
        ],
        '在': [
            { cn: '他在家里。', en: 'He is at home.' },
            { cn: '猫在桌子下面。', en: 'The cat is under the table.' }
        ],
        '的': [
            { cn: '妈妈的衣服很漂亮。', en: 'Mom\'s clothes are very beautiful.' },
            { cn: '这是谁的笔？', en: 'Whose pen is this?' }
        ],
        '了': [
            { cn: '他来北京了。', en: 'He has come to Beijing.' },
            { cn: '我吃完了。', en: 'I have finished eating.' }
        ],
        '吗': [
            { cn: '你吃了吗？', en: 'Have you eaten?' },
            { cn: '这是你的书吗？', en: 'Is this your book?' }
        ],
        '和': [
            { cn: '我和朋友一起去。', en: 'I go together with my friend.' },
            { cn: '学习和工作都很重要。', en: 'Studying and working are both important.' }
        ],
        '请': [
            { cn: '请进。', en: 'Please come in.' },
            { cn: '请问现在几点？', en: 'Excuse me, what time is it now?' }
        ],
        '谢谢': [
            { cn: '谢谢你的礼物。', en: 'Thank you for your gift.' },
            { cn: '谢谢你的帮助。', en: 'Thank you for your help.' }
        ],
        '对不起': [
            { cn: '对不起，我错了。', en: 'Sorry, I was wrong.' },
            { cn: '对不起，请问图书馆在哪里？', en: 'Excuse me, where is the library?' }
        ],
        '没关系': [
            { cn: '没关系，慢慢来。', en: 'It\'s okay, take your time.' },
            { cn: '没关系，下次注意就好了。', en: 'It\'s okay, just be careful next time.' }
        ],
        '我们': [
            { cn: '我们是一家人。', en: 'We are a family.' },
            { cn: '我们一起学中文吧。', en: 'Let\'s learn Chinese together.' }
        ],
        '他们': [
            { cn: '他们是我的同学。', en: 'They are my classmates.' },
            { cn: '他们都很友好。', en: 'They are all very friendly.' }
        ],
        '这': [
            { cn: '这是我的家。', en: 'This is my home.' },
            { cn: '这本书是你的吗？', en: 'Is this book yours?' }
        ],
        '那': [
            { cn: '那是我的学校。', en: 'That is my school.' },
            { cn: '那个公园很大。', en: 'That park is very big.' }
        ],
        '什么': [
            { cn: '你想吃什么？', en: 'What do you want to eat?' },
            { cn: '这是什么字？', en: 'What character is this?' }
        ],
        '谁': [
            { cn: '谁在敲门？', en: 'Who is knocking at the door?' },
            { cn: '谁能帮我？', en: 'Who can help me?' }
        ],
        '哪': [
            { cn: '你是哪国人？', en: 'What country are you from?' },
            { cn: '哪个是你的座位？', en: 'Which seat is yours?' }
        ],
        '几': [
            { cn: '你有几个孩子？', en: 'How many children do you have?' },
            { cn: '你们班有几个学生？', en: 'How many students are in your class?' }
        ],
        '多少': [
            { cn: '这些水果一共多少钱？', en: 'How much are these fruits in total?' },
            { cn: '你有多少本中文书？', en: 'How many Chinese books do you have?' }
        ],
        '自己': [
            { cn: '你要相信自己。', en: 'You must believe in yourself.' },
            { cn: '他一个人自己住。', en: 'He lives alone by himself.' }
        ],
        '大家': [
            { cn: '大家好，我叫王明。', en: 'Hello everyone, my name is Wang Ming.' },
            { cn: '大家一起努力。', en: 'Let\'s all work hard together.' }
        ],
        '一': [
            { cn: '我只有一个妹妹。', en: 'I only have one younger sister.' },
            { cn: '请给我一杯水。', en: 'Please give me a glass of water.' }
        ],
        '二': [
            { cn: '我有两个苹果。', en: 'I have two apples.' },
            { cn: '现在两点。', en: 'It\'s two o\'clock now.' }
        ],
        '三': [
            { cn: '我家有三口人。', en: 'My family has three people.' },
            { cn: '一天吃三顿饭。', en: 'Eat three meals a day.' }
        ],
        '四': [
            { cn: '一年有四个季节。', en: 'There are four seasons in a year.' },
            { cn: '他有四个好朋友。', en: 'He has four good friends.' }
        ],
        '五': [
            { cn: '星期五我休息。', en: 'I rest on Friday.' },
            { cn: '五个学生来晚了。', en: 'Five students arrived late.' }
        ],
        '六': [
            { cn: '六点吃晚饭。', en: 'Eat dinner at six.' },
            { cn: '星期六我们去玩。', en: 'We go out to play on Saturday.' }
        ],
        '七': [
            { cn: '一周有七天。', en: 'There are seven days in a week.' },
            { cn: '七元钱。', en: 'Seven yuan.' }
        ],
        '八': [
            { cn: '我每天睡八个小时。', en: 'I sleep eight hours every day.' },
            { cn: '八点上课。', en: 'Class starts at eight.' }
        ],
        '九': [
            { cn: '现在是九点。', en: 'It\'s nine o\'clock now.' },
            { cn: '九月份开学。', en: 'School starts in September.' }
        ],
        '十': [
            { cn: '这个杯子十块钱。', en: 'This cup is ten yuan.' },
            { cn: '十个人一起吃饭。', en: 'Ten people eat together.' }
        ],
        '百': [
            { cn: '这本书一百页。', en: 'This book has one hundred pages.' },
            { cn: '这个学校有三百个学生。', en: 'This school has three hundred students.' }
        ],
        '千': [
            { cn: '这个手机一千元。', en: 'This phone costs one thousand yuan.' },
            { cn: '这里有上千本书。', en: 'There are over a thousand books here.' }
        ],
        '万': [
            { cn: '这个城市有十万人。', en: 'This city has one hundred thousand people.' },
            { cn: '一万块钱太多了。', en: 'Ten thousand yuan is too much.' }
        ],
        '零': [
            { cn: '现在零度。', en: 'It\'s zero degrees now.' },
            { cn: '从零开始学习。', en: 'Start learning from zero.' }
        ],
        '两': [
            { cn: '两个人一起去看电影。', en: 'Two people go to see a movie together.' },
            { cn: '我有两本字典。', en: 'I have two dictionaries.' }
        ],
        '喜欢': [
            { cn: '我很喜欢这只小猫。', en: 'I really like this little cat.' },
            { cn: '她喜欢跳舞和唱歌。', en: 'She likes dancing and singing.' }
        ],
        '想': [
            { cn: '我想喝一杯茶。', en: 'I want to drink a cup of tea.' },
            { cn: '你想去中国吗？', en: 'Do you want to go to China?' }
        ],
        '没有': [
            { cn: '我没有姐姐。', en: 'I don\'t have an older sister.' },
            { cn: '今天没有作业。', en: 'There is no homework today.' }
        ],
        '知道': [
            { cn: '我知道这件事。', en: 'I know about this matter.' },
            { cn: '我不知道他说什么。', en: 'I don\'t know what he said.' }
        ],
        '人': [
            { cn: '教室里有很多人。', en: 'There are many people in the classroom.' },
            { cn: '中国人喜欢喝茶。', en: 'Chinese people like drinking tea.' }
        ],
        '卖': [
            { cn: '这家店卖水果。', en: 'This shop sells fruit.' },
            { cn: '他卖了旧书。', en: 'He sold old books.' }
        ],
        '坐': [
            { cn: '请坐在这里。', en: 'Please sit here.' },
            { cn: '我们坐公交去。', en: 'Let\'s take the bus there.' }
        ],
        '站': [
            { cn: '公交车站在哪里？', en: 'Where is the bus stop?' },
            { cn: '他站了一天很累。', en: 'He stood all day and is very tired.' }
        ],
        '走': [
            { cn: '我们一起走吧。', en: 'Let\'s go together.' },
            { cn: '我走路去上学。', en: 'I walk to school.' }
        ],
        '跑': [
            { cn: '他每天跑步。', en: 'He runs every day.' },
            { cn: '别跑太快。', en: 'Don\'t run too fast.' }
        ],
        '飞': [
            { cn: '小鸟在天上飞。', en: 'The bird is flying in the sky.' },
            { cn: '飞机从北京飞上海。', en: 'The plane flies from Beijing to Shanghai.' }
        ],
        '起床': [
            { cn: '我每天早上六点起床。', en: 'I get up at six every morning.' },
            { cn: '起床了，要迟到了。', en: 'Get up, you\'ll be late.' }
        ],
        '叫': [
            { cn: '我叫小明。', en: 'My name is Xiaoming.' },
            { cn: '请叫他来一下。', en: 'Please call him to come here.' }
        ],
        '今天': [
            { cn: '今天是我的生日。', en: 'Today is my birthday.' },
            { cn: '今天天气很好，我们去公园吧。', en: 'The weather is good today, let\'s go to the park.' }
        ],
        '明天': [
            { cn: '明天我要去图书馆。', en: 'I want to go to the library tomorrow.' },
            { cn: '明天见！', en: 'See you tomorrow!' }
        ],
        '爱': [
            { cn: '我爱我的国家。', en: 'I love my country.' },
            { cn: '妈妈很爱我。', en: 'Mom loves me very much.' }
        ],
        '昨天': [
            { cn: '昨天我去了超市。', en: 'I went to the supermarket yesterday.' },
            { cn: '昨天的课很有意思。', en: 'Yesterday\'s class was very interesting.' }
        ],
        '医院': [
            { cn: '医院在学校的旁边。', en: 'The hospital is next to the school.' },
            { cn: '我妈妈在医院工作。', en: 'My mother works at the hospital.' }
        ],
        '商店': [
            { cn: '商店里有很多人。', en: 'There are many people in the store.' },
            { cn: '我在这家商店买衣服。', en: 'I buy clothes at this store.' }
        ],
        '饭馆': [
            { cn: '我们一起去饭馆吃饭吧。', en: 'Let\'s go to a restaurant to eat.' },
            { cn: '这家饭馆的菜很好吃。', en: 'The dishes at this restaurant are delicious.' }
        ],
        '中国': [
            { cn: '中国很大。', en: 'China is very big.' },
            { cn: '中国菜很有名。', en: 'Chinese food is very famous.' }
        ],
        '北京': [
            { cn: '北京是中国的首都。', en: 'Beijing is the capital of China.' },
            { cn: '我明年去北京旅游。', en: 'I will travel to Beijing next year.' }
        ],
        '儿子': [
            { cn: '他有一个儿子。', en: 'He has a son.' },
            { cn: '儿子很喜欢踢足球。', en: 'The son really likes playing soccer.' }
        ],
        '女儿': [
            { cn: '她的女儿很漂亮。', en: 'Her daughter is very beautiful.' },
            { cn: '女儿在学跳舞。', en: 'The daughter is learning to dance.' }
        ],
        '先生': [
            { cn: '王先生是老师。', en: 'Mr. Wang is a teacher.' },
            { cn: '李先生在家吗？', en: 'Is Mr. Li at home?' }
        ],
        '小姐': [
            { cn: '小姐，请问要点什么？', en: 'Miss, what would you like to order?' },
            { cn: '张小姐很漂亮。', en: 'Miss Zhang is very beautiful.' }
        ],
        '医生': [
            { cn: '医生给他开了药。', en: 'The doctor prescribed him medicine.' },
            { cn: '他的梦想是当医生。', en: 'His dream is to become a doctor.' }
        ],
        '菜': [
            { cn: '我妈妈做的菜很好吃。', en: 'The dishes my mom cooks are delicious.' },
            { cn: '我们去买菜吧。', en: 'Let\'s go buy groceries.' }
        ],
        '水果': [
            { cn: '多吃水果对身体好。', en: 'Eating more fruit is good for your health.' },
            { cn: '我喜欢吃新鲜水果。', en: 'I like eating fresh fruit.' }
        ],
        '茶': [
            { cn: '中国人喜欢喝绿茶。', en: 'Chinese people like drinking green tea.' },
            { cn: '请给我一杯茶。', en: 'Please give me a cup of tea.' }
        ],
        '衣服': [
            { cn: '这件衣服很合适。', en: 'This piece of clothing fits well.' },
            { cn: '她正在洗衣服。', en: 'She is washing clothes.' }
        ],
        '车': [
            { cn: '他每天开车上班。', en: 'He drives to work every day.' },
            { cn: '这是谁的车？', en: 'Whose car is this?' }
        ],
        '日': [
            { cn: '我的生日是五月一日。', en: 'My birthday is May 1st.' },
            { cn: '日子过得真快。', en: 'Days pass really quickly.' }
        ],
        '月': [
            { cn: '这个月我很忙。', en: 'I am very busy this month.' },
            { cn: '一年有十二个月。', en: 'There are twelve months in a year.' }
        ],
        '年': [
            { cn: '我今年二十岁。', en: 'I am twenty years old this year.' },
            { cn: '他学中文两年了。', en: 'He has studied Chinese for two years.' }
        ],
        '天': [
            { cn: '他每天学习中文。', en: 'He studies Chinese every day.' },
            { cn: '天气好的时候去爬山。', en: 'Go hiking when the weather is good.' },
            { cn: '今天天气真好。', en: 'The weather is really nice today.' },
            { cn: '蓝蓝的天空很美。', en: 'The blue sky is very beautiful.' }
        ],
        '时候': [
            { cn: '你什么时候回家？', en: 'When are you going home?' },
            { cn: '上课的时候要认真听。', en: 'You should listen carefully during class.' }
        ],
        '现在': [
            { cn: '现在是上午九点。', en: 'It\'s nine in the morning now.' },
            { cn: '他已经是大学生了。', en: 'He is already a college student now.' }
        ],
        '上午': [
            { cn: '我上午在家学习。', en: 'I study at home in the morning.' },
            { cn: '上午有课吗？', en: 'Is there class in the morning?' }
        ],
        '下午': [
            { cn: '下午我们去打篮球。', en: 'We are going to play basketball in the afternoon.' },
            { cn: '她下午要上班。', en: 'She has to work in the afternoon.' }
        ],
        '晚上': [
            { cn: '晚上我十点睡觉。', en: 'I go to bed at ten in the evening.' },
            { cn: '晚上好！', en: 'Good evening!' }
        ],
        '名字': [
            { cn: '你的名字很好听。', en: 'Your name sounds very nice.' },
            { cn: '她的中文名字是小红。', en: 'Her Chinese name is Xiaohong.' },
            { cn: '请写下你的名字。', en: 'Please write down your name.' },
            { cn: '他的名字叫小明。', en: 'His name is Xiaoming.' }
        ],
        '多': [
            { cn: '今天来了很多人。', en: 'Many people came today.' },
            { cn: '你多大了？', en: 'How old are you?' }
        ],
        '少': [
            { cn: '请少放点盐。', en: 'Please put less salt.' },
            { cn: '他说话很少。', en: 'He speaks very little.' }
        ],
        '新': [
            { cn: '他买了一辆新车。', en: 'He bought a new car.' },
            { cn: '这是我的新朋友。', en: 'This is my new friend.' }
        ],
        '旧': [
            { cn: '这件衣服旧了。', en: 'This piece of clothing is old.' },
            { cn: '旧书也可以看。', en: 'Old books can also be read.' }
        ],
        '长': [
            { cn: '她的头发很长。', en: 'Her hair is very long.' },
            { cn: '长城很长。', en: 'The Great Wall is very long.' }
        ],
        '短': [
            { cn: '他的头发很短。', en: 'His hair is very short.' },
            { cn: '冬天白天很短。', en: 'Winter days are very short.' }
        ],
        '早上': [
            { cn: '早上好！', en: 'Good morning!' },
            { cn: '我早上六点起床。', en: 'I get up at six in the morning.' },
            { cn: '早上喝一杯水很好。', en: 'Drinking a glass of water in the morning is good.' },
            { cn: '每天早上我都喝牛奶。', en: 'I drink milk every morning.' }
        ],
        '中午': [
            { cn: '中午我们一起吃饭。', en: 'Let\'s have lunch together at noon.' },
            { cn: '中午很热。', en: 'It\'s very hot at noon.' },
            { cn: '中午吃什么？', en: 'What are we eating at noon?' },
            { cn: '中午十二点吃午饭。', en: 'Eat lunch at twelve noon.' }
        ],
        '号': [
            { cn: '今天几号？', en: 'What is the date today?' },
            { cn: '五月五号是端午节。', en: 'May 5th is the Dragon Boat Festival.' },
            { cn: '我住三号房间。', en: 'I live in room number three.' }
        ],
        '星期': [
            { cn: '一个星期有七天。', en: 'A week has seven days.' },
            { cn: '星期一有中文课。', en: 'There is Chinese class on Monday.' },
            { cn: '你星期几有空？', en: 'Which day of the week are you free?' }
        ],
        '点': [
            { cn: '现在几点？', en: 'What time is it now?' },
            { cn: '八点开始上课。', en: 'Class starts at eight o\'clock.' },
            { cn: '请说慢一点。', en: 'Please speak a bit slower.' }
        ],
        '难': [
            { cn: '中文不太难。', en: 'Chinese is not too difficult.' },
            { cn: '这个考试很难。', en: 'This exam is very difficult.' },
            { cn: '学习新东西不难。', en: 'Learning new things is not difficult.' }
        ],
        '分钟': [
            { cn: '请等我五分钟。', en: 'Please wait for me five minutes.' },
            { cn: '他每天跑步三十分钟。', en: 'He runs for thirty minutes every day.' },
            { cn: '还有十分钟下课。', en: 'There are still ten minutes until class ends.' }
        ],
        '容易': [
            { cn: '这个题很容易。', en: 'This question is very easy.' },
            { cn: '说容易做起来难。', en: 'Easy to say, hard to do.' },
            { cn: '学习中文不容易。', en: 'Learning Chinese is not easy.' }
        ],
        '小时': [
            { cn: '我每天睡八个小时。', en: 'I sleep eight hours every day.' },
            { cn: '他等了一个小时。', en: 'He waited for an hour.' },
            { cn: '一个小时有六十分钟。', en: 'An hour has sixty minutes.' }
        ],
        '前': [
            { cn: '饭前要洗手。', en: 'Wash hands before meals.' },
            { cn: '学校前面有一家商店。', en: 'There is a shop in front of the school.' },
            { cn: '他三年前去过中国。', en: 'He went to China three years ago.' }
        ],
        '后': [
            { cn: '放学后我回家。', en: 'I go home after school.' },
            { cn: '课后可以问老师问题。', en: 'You can ask the teacher questions after class.' },
            { cn: '他在我后面站着。', en: 'He is standing behind me.' }
        ],
        '没': [
            { cn: '我还没吃饭。', en: 'I haven\'t eaten yet.' },
            { cn: '他没来上课。', en: 'He didn\'t come to class.' },
            { cn: '这里没有人。', en: 'There is no one here.' }
        ],
        '呢': [
            { cn: '我很好，你呢？', en: 'I am fine, and you?' },
            { cn: '他在做什么呢？', en: 'What is he doing?' },
            { cn: '我的书呢？', en: 'Where is my book?' }
        ],
        '但是': [
            { cn: '我很累，但是很开心。', en: 'I am tired, but very happy.' },
            { cn: '我想去，但是没有时间。', en: 'I want to go, but I don\'t have time.' },
            { cn: '这个很贵，但是很好。', en: 'This is very expensive, but very good.' },
            { cn: '他很有钱但是不快乐。', en: 'He is rich but not happy.' },
            { cn: '中文很难但是很有意思。', en: 'Chinese is difficult but very interesting.' }
        ],
        '因为': [
            { cn: '因为下雨，所以没去。', en: 'Because it was raining, I didn\'t go.' },
            { cn: '因为生病了，所以请假。', en: 'Because I got sick, I asked for leave.' },
            { cn: '因为很忙，他不能来。', en: 'Because he is very busy, he can\'t come.' },
            { cn: '因为天气不好，所以没去公园。', en: 'Because the weather was bad, we didn\'t go to the park.' },
            { cn: '他因为生病没来。', en: 'He didn\'t come because he was sick.' }
        ],
        '所以': [
            { cn: '他学习很努力，所以进步很快。', en: 'He studies very hard, so he improves quickly.' },
            { cn: '今天很冷，所以多穿一点。', en: 'It\'s very cold today, so wear more.' },
            { cn: '他生病了，所以没来。', en: 'He was sick, so he didn\'t come.' },
            { cn: '我很累所以我要休息。', en: 'I am tired so I need to rest.' },
            { cn: '下雨了所以出门要带伞。', en: 'It\'s raining so bring an umbrella when going out.' }
        ],
        '如果': [
            { cn: '如果明天下雨，我们就不去了。', en: 'If it rains tomorrow, we won\'t go.' },
            { cn: '如果累了就休息。', en: 'Rest if you\'re tired.' },
            { cn: '如果有时间，我来看你。', en: 'If I have time, I\'ll come see you.' },
            { cn: '如果我有时间我就去。', en: 'If I have time, I will go.' },
            { cn: '如果下雨就不去了。', en: 'If it rains, we won\'t go.' }
        ],
        '哥哥': [
            { cn: '我哥哥是老师。', en: 'My older brother is a teacher.' },
            { cn: '哥哥比我大五岁。', en: 'My older brother is five years older than me.' },
            { cn: '哥哥喜欢打篮球。', en: 'My older brother likes playing basketball.' }
        ],
        '弟弟': [
            { cn: '弟弟今年十岁。', en: 'My younger brother is ten years old.' },
            { cn: '弟弟在学中文。', en: 'My younger brother is learning Chinese.' },
            { cn: '弟弟很聪明。', en: 'My younger brother is very smart.' }
        ],
        '姐姐': [
            { cn: '姐姐是护士。', en: 'My older sister is a nurse.' },
            { cn: '姐姐做的菜很好吃。', en: 'The food my older sister cooks is delicious.' },
            { cn: '姐姐在北京工作。', en: 'My older sister works in Beijing.' }
        ],
        '妹妹': [
            { cn: '妹妹五岁了。', en: 'My younger sister is five years old.' },
            { cn: '妹妹喜欢画画。', en: 'My younger sister likes drawing.' },
            { cn: '妹妹很可爱。', en: 'My younger sister is very cute.' }
        ],
        '爷爷': [
            { cn: '爷爷今年七十岁。', en: 'Grandpa is seventy years old this year.' },
            { cn: '爷爷喜欢喝茶。', en: 'Grandpa likes drinking tea.' },
            { cn: '爷爷每天早上去公园。', en: 'Grandpa goes to the park every morning.' }
        ],
        '奶奶': [
            { cn: '奶奶做的饭很好吃。', en: 'Grandma\'s cooking is very delicious.' },
            { cn: '奶奶在家里休息。', en: 'Grandma is resting at home.' },
            { cn: '我爱奶奶。', en: 'I love grandma.' }
        ],
        '外公': [
            { cn: '外公住在上海。', en: 'Grandpa lives in Shanghai.' },
            { cn: '外公身体很好。', en: 'Grandpa is in good health.' },
            { cn: '我们每年去看外公。', en: 'We go to see grandpa every year.' }
        ],
        '外婆': [
            { cn: '外婆很善良。', en: 'Grandma is very kind.' },
            { cn: '外婆会做很多菜。', en: 'Grandma can cook many dishes.' },
            { cn: '外婆喜欢散步。', en: 'Grandma likes taking walks.' }
        ],
        '叔叔': [
            { cn: '叔叔是司机。', en: 'Uncle is a driver.' },
            { cn: '叔叔从北京来。', en: 'Uncle comes from Beijing.' },
            { cn: '叔叔送了我一个礼物。', en: 'Uncle gave me a gift.' }
        ],
        '阿姨': [
            { cn: '阿姨是医生。', en: 'Auntie is a doctor.' },
            { cn: '阿姨很热情。', en: 'Auntie is very warm-hearted.' },
            { cn: '阿姨在家里做客。', en: 'Auntie is visiting at our home.' }
        ],
        '丈夫': [
            { cn: '她丈夫是工程师。', en: 'Her husband is an engineer.' },
            { cn: '丈夫每天工作很忙。', en: 'The husband is very busy with work every day.' },
            { cn: '她丈夫对她很好。', en: 'Her husband treats her very well.' }
        ],
        '妻子': [
            { cn: '他妻子是老师。', en: 'His wife is a teacher.' },
            { cn: '妻子做饭很好吃。', en: 'The wife cooks very delicious food.' },
            { cn: '他爱他的妻子。', en: 'He loves his wife.' }
        ],
        '孙子': [
            { cn: '孙子今年八岁了。', en: 'The grandson is eight years old this year.' },
            { cn: '孙子喜欢玩玩具。', en: 'The grandson likes playing with toys.' },
            { cn: '奶奶很爱孙子。', en: 'Grandma loves her grandson very much.' }
        ],
        '孙女': [
            { cn: '孙女很漂亮。', en: 'The granddaughter is very beautiful.' },
            { cn: '孙女在学校学习很好。', en: 'The granddaughter studies well at school.' },
            { cn: '爷爷带孙女去公园。', en: 'Grandpa takes his granddaughter to the park.' }
        ],
        '舅舅': [
            { cn: '舅舅在北京工作。', en: 'Uncle works in Beijing.' },
            { cn: '舅舅买了很多水果。', en: 'Uncle bought a lot of fruit.' },
            { cn: '舅舅明年回家过年。', en: 'Uncle will come home for New Year next year.' }
        ],
        '姑姑': [
            { cn: '姑姑住在广州。', en: 'Aunt lives in Guangzhou.' },
            { cn: '姑姑常来我家玩。', en: 'Aunt often comes to my home to visit.' },
            { cn: '姑姑是护士。', en: 'Aunt is a nurse.' }
        ],
        '表哥': [
            { cn: '表哥在大学学习。', en: 'My older male cousin is studying at university.' },
            { cn: '表哥很高。', en: 'My older male cousin is very tall.' },
            { cn: '表哥喜欢打篮球。', en: 'My older male cousin likes playing basketball.' }
        ],
        '表姐': [
            { cn: '表姐在北京工作。', en: 'My older female cousin works in Beijing.' },
            { cn: '表姐很漂亮。', en: 'My older female cousin is very beautiful.' },
            { cn: '表姐教我英语。', en: 'My older female cousin teaches me English.' }
        ],
        '亲戚': [
            { cn: '春节的时候亲戚都来了。', en: 'All the relatives came during Spring Festival.' },
            { cn: '他有很多亲戚。', en: 'He has many relatives.' },
            { cn: '亲戚们在一起吃饭。', en: 'The relatives eat together.' }
        ],
        '兄弟': [
            { cn: '他们是兄弟。', en: 'They are brothers.' },
            { cn: '兄弟俩长得很像。', en: 'The two brothers look very alike.' },
            { cn: '好兄弟应该互相帮助。', en: 'Good brothers should help each other.' }
        ],
        '姐妹': [
            { cn: '她们是姐妹。', en: 'They are sisters.' },
            { cn: '姐妹俩都喜欢跳舞。', en: 'Both sisters like dancing.' },
            { cn: '我和姐姐是姐妹。', en: 'My older sister and I are sisters.' }
        ],
        '父母': [
            { cn: '父母都很爱我。', en: 'My parents love me very much.' },
            { cn: '他住在父母家。', en: 'He lives at his parents\' home.' },
            { cn: '要孝顺父母。', en: 'You should be filial to your parents.' }
        ],
        '伯伯': [
            { cn: '伯伯是医生。', en: 'Uncle is a doctor.' },
            { cn: '伯伯住在北京。', en: 'Uncle lives in Beijing.' },
            { cn: '伯伯对我很好。', en: 'Uncle is very kind to me.' }
        ],
        '嫂子': [
            { cn: '嫂子是老师。', en: 'Sister-in-law is a teacher.' },
            { cn: '嫂子做的菜很好吃。', en: 'Sister-in-law\'s cooking is delicious.' },
            { cn: '嫂子对我很好。', en: 'Sister-in-law is very nice to me.' }
        ],
        '姐夫': [
            { cn: '姐夫是中国人。', en: 'Brother-in-law is Chinese.' },
            { cn: '姐夫会做中国菜。', en: 'Brother-in-law can cook Chinese food.' },
            { cn: '姐夫在北京工作。', en: 'Brother-in-law works in Beijing.' }
        ],
        '长辈': [
            { cn: '要尊敬长辈。', en: 'You should respect elders.' },
            { cn: '长辈们在一起说话。', en: 'The elders are talking together.' },
            { cn: '过年时要给长辈拜年。', en: 'You should pay New Year visits to elders.' }
        ],
        '晚辈': [
            { cn: '长辈要关心晚辈。', en: 'Elders should care for the younger generation.' },
            { cn: '晚辈应该听长辈的话。', en: 'The younger generation should listen to elders.' },
            { cn: '孩子们是晚辈。', en: 'Children are the younger generation.' }
        ],
        '侄女': [
            { cn: '侄女今年七岁。', en: 'My niece is seven years old this year.' },
            { cn: '侄女喜欢画画。', en: 'My niece likes drawing.' },
            { cn: '我送侄女去学校。', en: 'I take my niece to school.' }
        ],
        '侄子': [
            { cn: '侄子很调皮。', en: 'My nephew is very naughty.' },
            { cn: '侄子喜欢吃糖。', en: 'My nephew likes eating candy.' },
            { cn: '我教侄子写汉字。', en: 'I teach my nephew to write Chinese characters.' }
        ],
        '女婿': [
            { cn: '女婿是外国人。', en: 'The son-in-law is a foreigner.' },
            { cn: '女婿对女儿很好。', en: 'The son-in-law treats my daughter well.' },
            { cn: '女婿会说中文。', en: 'The son-in-law can speak Chinese.' }
        ],
        '面包': [
            { cn: '早上我吃面包。', en: 'I eat bread in the morning.' },
            { cn: '这个面包很好吃。', en: 'This bread is very delicious.' },
            { cn: '我买了面包和牛奶。', en: 'I bought bread and milk.' }
        ],
        '牛奶': [
            { cn: '每天喝牛奶对身体好。', en: 'Drinking milk every day is good for health.' },
            { cn: '请给我一杯牛奶。', en: 'Please give me a glass of milk.' },
            { cn: '牛奶很新鲜。', en: 'The milk is very fresh.' }
        ],
        '鸡蛋': [
            { cn: '早上吃一个鸡蛋。', en: 'Eat an egg in the morning.' },
            { cn: '鸡蛋很有营养。', en: 'Eggs are very nutritious.' },
            { cn: '我买了十个鸡蛋。', en: 'I bought ten eggs.' }
        ],
        '牛肉': [
            { cn: '牛肉面很好吃。', en: 'Beef noodles are very delicious.' },
            { cn: '他喜欢吃牛肉。', en: 'He likes eating beef.' },
            { cn: '牛肉多少钱一斤？', en: 'How much is beef per jin?' }
        ],
        '猪肉': [
            { cn: '猪肉炒白菜很好吃。', en: 'Stir-fried pork with cabbage is delicious.' },
            { cn: '我不吃猪肉。', en: 'I don\'t eat pork.' },
            { cn: '猪肉很新鲜。', en: 'The pork is very fresh.' }
        ],
        '鸡肉': [
            { cn: '鸡肉很嫩。', en: 'The chicken meat is very tender.' },
            { cn: '他喜欢吃鸡肉。', en: 'He likes eating chicken.' },
            { cn: '妈妈做了鸡肉汤。', en: 'Mom made chicken soup.' }
        ],
        '面条': [
            { cn: '中午我吃面条。', en: 'I eat noodles at noon.' },
            { cn: '这碗面条很好吃。', en: 'This bowl of noodles is delicious.' },
            { cn: '你会做面条吗？', en: 'Can you make noodles?' }
        ],
        '包子': [
            { cn: '包子是中国的传统食物。', en: 'Steamed buns are a traditional Chinese food.' },
            { cn: '我早上吃了两个包子。', en: 'I ate two steamed buns this morning.' },
            { cn: '这家店的包子很好吃。', en: 'The steamed buns at this shop are delicious.' }
        ],
        '蛋糕': [
            { cn: '生日的时候吃蛋糕。', en: 'Eat cake on your birthday.' },
            { cn: '这个蛋糕很甜。', en: 'This cake is very sweet.' },
            { cn: '妈妈做了一个大蛋糕。', en: 'Mom made a big cake.' }
        ],
        '糖': [
            { cn: '请不要吃太多糖。', en: 'Please don\'t eat too much sugar.' },
            { cn: '咖啡里加了糖。', en: 'Added sugar to the coffee.' },
            { cn: '小孩子都喜欢吃糖。', en: 'Children all like eating candy.' }
        ],
        '盐': [
            { cn: '菜里放一点盐。', en: 'Put a little salt in the dish.' },
            { cn: '盐太多了，很咸。', en: 'Too much salt, it\'s very salty.' },
            { cn: '请给我一点盐。', en: 'Please give me a little salt.' }
        ],
        '豆腐': [
            { cn: '豆腐很有营养。', en: 'Tofu is very nutritious.' },
            { cn: '麻婆豆腐很好吃。', en: 'Mapo tofu is very delicious.' },
            { cn: '豆腐很便宜。', en: 'Tofu is very cheap.' }
        ],
        '汤': [
            { cn: '这碗汤很热。', en: 'This bowl of soup is very hot.' },
            { cn: '我喜欢喝鸡蛋汤。', en: 'I like drinking egg soup.' },
            { cn: '汤很好喝。', en: 'The soup is very tasty.' }
        ],
        '饺子': [
            { cn: '春节的时候吃饺子。', en: 'Eat dumplings during Spring Festival.' },
            { cn: '我会包饺子。', en: 'I can make dumplings.' },
            { cn: '饺子很好吃。', en: 'Dumplings are delicious.' }
        ],
        '虾': [
            { cn: '虾很新鲜。', en: 'The shrimp is very fresh.' },
            { cn: '我喜欢吃虾。', en: 'I like eating shrimp.' },
            { cn: '虾很贵。', en: 'Shrimp is very expensive.' }
        ],
        '蔬菜': [
            { cn: '多吃蔬菜对身体好。', en: 'Eating more vegetables is good for health.' },
            { cn: '这些蔬菜很新鲜。', en: 'These vegetables are very fresh.' },
            { cn: '我不喜欢吃蔬菜。', en: 'I don\'t like eating vegetables.' }
        ],
        '土豆': [
            { cn: '土豆炖牛肉很好吃。', en: 'Potato stewed with beef is delicious.' },
            { cn: '土豆很便宜。', en: 'Potatoes are very cheap.' },
            { cn: '我喜欢吃土豆丝。', en: 'I like eating shredded potatoes.' }
        ],
        '苹果': [
            { cn: '这个苹果很甜。', en: 'This apple is very sweet.' },
            { cn: '我每天吃一个苹果。', en: 'I eat an apple every day.' },
            { cn: '苹果多少钱一斤？', en: 'How much are apples per jin?' }
        ],
        '香蕉': [
            { cn: '香蕉是黄色的。', en: 'Bananas are yellow.' },
            { cn: '香蕉很甜。', en: 'Bananas are very sweet.' },
            { cn: '我买了五根香蕉。', en: 'I bought five bananas.' }
        ],
        '咖啡': [
            { cn: '早上喝一杯咖啡。', en: 'Drink a cup of coffee in the morning.' },
            { cn: '我不喜欢喝咖啡。', en: 'I don\'t like drinking coffee.' },
            { cn: '咖啡有点苦。', en: 'Coffee is a little bitter.' }
        ],
        '果汁': [
            { cn: '我要喝橙汁。', en: 'I want to drink orange juice.' },
            { cn: '果汁很健康。', en: 'Fruit juice is very healthy.' },
            { cn: '请给我一杯果汁。', en: 'Please give me a glass of juice.' }
        ],
        '可乐': [
            { cn: '他喜欢喝可乐。', en: 'He likes drinking cola.' },
            { cn: '可乐不健康。', en: 'Cola is not healthy.' },
            { cn: '给我一瓶可乐。', en: 'Give me a bottle of cola.' }
        ],
        '啤酒': [
            { cn: '他喜欢喝啤酒。', en: 'He likes drinking beer.' },
            { cn: '天热的时候喝啤酒。', en: 'Drink beer when it\'s hot.' },
            { cn: '一瓶啤酒多少钱？', en: 'How much is a bottle of beer?' }
        ],
        '酸奶': [
            { cn: '酸奶对肠胃好。', en: 'Yogurt is good for the stomach.' },
            { cn: '我喜欢喝酸奶。', en: 'I like drinking yogurt.' },
            { cn: '这个酸奶很好喝。', en: 'This yogurt tastes very good.' }
        ],
        '头': [
            { cn: '他头疼。', en: 'He has a headache.' },
            { cn: '请戴帽子保护头。', en: 'Please wear a hat to protect your head.' },
            { cn: '他点了点头。', en: 'He nodded his head.' }
        ],
        '手': [
            { cn: '饭前要洗手。', en: 'Wash your hands before meals.' },
            { cn: '她的手很漂亮。', en: 'Her hands are very beautiful.' },
            { cn: '请举起手。', en: 'Please raise your hand.' }
        ],
        '脸': [
            { cn: '她脸红了。', en: 'Her face turned red.' },
            { cn: '早上洗脸。', en: 'Wash your face in the morning.' },
            { cn: '她有一张漂亮的脸。', en: 'She has a beautiful face.' }
        ],
        '眼睛': [
            { cn: '她的眼睛很大。', en: 'Her eyes are very big.' },
            { cn: '看书久了眼睛会累。', en: 'Reading for a long time makes your eyes tired.' },
            { cn: '他的眼睛很漂亮。', en: 'His eyes are very beautiful.' }
        ],
        '耳朵': [
            { cn: '兔子有两只长耳朵。', en: 'Rabbits have two long ears.' },
            { cn: '请认真听，用好你的耳朵。', en: 'Listen carefully, use your ears well.' },
            { cn: '她的耳朵很红。', en: 'Her ears are very red.' }
        ],
        '嘴': [
            { cn: '吃饭的时候不要说话。', en: 'Don\'t talk with food in your mouth.' },
            { cn: '他的嘴很小。', en: 'His mouth is very small.' },
            { cn: '请张开嘴。', en: 'Please open your mouth.' }
        ],
        '鼻子': [
            { cn: '他的鼻子很高。', en: 'His nose is very high.' },
            { cn: '狗的鼻子很灵。', en: 'A dog\'s nose is very sensitive.' },
            { cn: '鼻子不舒服。', en: 'The nose feels uncomfortable.' }
        ],
        '头发': [
            { cn: '她的头发很长。', en: 'Her hair is very long.' },
            { cn: '我每天早上梳头发。', en: 'I comb my hair every morning.' },
            { cn: '他去剪头发了。', en: 'He went to get a haircut.' }
        ],
        '身体': [
            { cn: '身体健康很重要。', en: 'Health is very important.' },
            { cn: '多运动对身体好。', en: 'More exercise is good for your body.' },
            { cn: '他身体很好。', en: 'He is in good health.' }
        ],
        '腿': [
            { cn: '他的腿很长。', en: 'His legs are very long.' },
            { cn: '走了很多路，腿很累。', en: 'Walked a lot, legs are very tired.' },
            { cn: '他腿受伤了。', en: 'He injured his leg.' }
        ],
        '脚': [
            { cn: '这双鞋很合脚。', en: 'These shoes fit my feet well.' },
            { cn: '他的脚很大。', en: 'His feet are very big.' },
            { cn: '走路走多了脚疼。', en: 'Walking too much makes feet hurt.' }
        ],
        '肚子': [
            { cn: '我肚子饿了。', en: 'I am hungry.' },
            { cn: '吃太多了肚子不舒服。', en: 'Ate too much, stomach feels uncomfortable.' },
            { cn: '他肚子疼。', en: 'He has a stomachache.' }
        ],
        '牙': [
            { cn: '每天要刷牙。', en: 'You should brush your teeth every day.' },
            { cn: '他的牙很白。', en: 'His teeth are very white.' },
            { cn: '牙疼不是病。', en: 'Toothache is not an illness.' }
        ],
        '猫': [
            { cn: '猫很可爱。', en: 'Cats are very cute.' },
            { cn: '我家有一只白猫。', en: 'My family has a white cat.' },
            { cn: '猫喜欢吃鱼。', en: 'Cats like eating fish.' }
        ],
        '狗': [
            { cn: '狗是人类最好的朋友。', en: 'Dogs are humans\' best friends.' },
            { cn: '她养了一只小狗。', en: 'She keeps a little dog.' },
            { cn: '狗跑得很快。', en: 'Dogs run very fast.' }
        ],
        '马': [
            { cn: '马跑得很快。', en: 'Horses run very fast.' },
            { cn: '他骑了一匹马。', en: 'He rode a horse.' },
            { cn: '马在草地上吃草。', en: 'Horses are eating grass on the grassland.' }
        ],
        '牛': [
            { cn: '牛在田里工作。', en: 'The ox is working in the field.' },
            { cn: '牛奶对身体好。', en: 'Milk is good for health.' },
            { cn: '他属牛。', en: 'He was born in the Year of the Ox.' }
        ],
        '羊': [
            { cn: '山上有白色的羊。', en: 'There are white sheep on the mountain.' },
            { cn: '羊肉很好吃。', en: 'Lamb is very delicious.' },
            { cn: '羊在吃草。', en: 'The sheep are eating grass.' }
        ],
        '鸡': [
            { cn: '早上公鸡会叫。', en: 'The rooster crows in the morning.' },
            { cn: '鸡蛋很有营养。', en: 'Eggs are very nutritious.' },
            { cn: '鸡在院子里跑。', en: 'The chicken is running in the yard.' }
        ],
        '猪': [
            { cn: '猪很胖。', en: 'Pigs are very fat.' },
            { cn: '猪在泥里打滚。', en: 'The pig is rolling in the mud.' },
            { cn: '猪肉很好吃。', en: 'Pork is very delicious.' }
        ],
        '老虎': [
            { cn: '老虎很凶猛。', en: 'Tigers are very fierce.' },
            { cn: '老虎是森林之王。', en: 'Tiger is the king of the forest.' },
            { cn: '孩子们在动物园看老虎。', en: 'The children are watching tigers at the zoo.' }
        ],
        '熊猫': [
            { cn: '熊猫很可爱。', en: 'Pandas are very cute.' },
            { cn: '熊猫喜欢吃竹子。', en: 'Pandas like eating bamboo.' },
            { cn: '熊猫是中国国宝。', en: 'Pandas are China\'s national treasure.' }
        ],
        '兔子': [
            { cn: '兔子跳得很高。', en: 'Rabbits jump very high.' },
            { cn: '小兔子很可爱。', en: 'Little rabbits are very cute.' },
            { cn: '兔子喜欢吃胡萝卜。', en: 'Rabbits like eating carrots.' }
        ],
        '猴子': [
            { cn: '猴子很聪明。', en: 'Monkeys are very smart.' },
            { cn: '猴子喜欢吃香蕉。', en: 'Monkeys like eating bananas.' },
            { cn: '在山上看到了猴子。', en: 'Saw monkeys on the mountain.' }
        ],
        '大象': [
            { cn: '大象很大。', en: 'Elephants are very big.' },
            { cn: '大象有长长的鼻子。', en: 'Elephants have long trunks.' },
            { cn: '孩子们喜欢看大象。', en: 'Children like watching elephants.' }
        ],
        '狮子': [
            { cn: '狮子很勇敢。', en: 'Lions are very brave.' },
            { cn: '狮子是百兽之王。', en: 'Lion is the king of beasts.' },
            { cn: '在动物园看到了狮子。', en: 'Saw a lion at the zoo.' }
        ],
        '蛇': [
            { cn: '蛇很长。', en: 'Snakes are very long.' },
            { cn: '他害怕蛇。', en: 'He is afraid of snakes.' },
            { cn: '蛇在草地上爬行。', en: 'The snake is crawling on the grass.' }
        ],
        '花': [
            { cn: '花很漂亮。', en: 'Flowers are very beautiful.' },
            { cn: '春天花开了。', en: 'Flowers bloom in spring.' },
            { cn: '我送了她一束花。', en: 'I gave her a bouquet of flowers.' }
        ],
        '树': [
            { cn: '树很高。', en: 'Trees are very tall.' },
            { cn: '春天树绿了。', en: 'Trees turn green in spring.' },
            { cn: '学校前面有很多树。', en: 'There are many trees in front of the school.' }
        ],
        '太阳': [
            { cn: '太阳出来了。', en: 'The sun has come out.' },
            { cn: '太阳很大很亮。', en: 'The sun is very big and bright.' },
            { cn: '早上太阳从东方升起。', en: 'The sun rises in the east in the morning.' }
        ],
        '月亮': [
            { cn: '中秋节月亮很圆。', en: 'The moon is very round at Mid-Autumn Festival.' },
            { cn: '月亮在天上。', en: 'The moon is in the sky.' },
            { cn: '今晚的月亮真美。', en: 'The moon is really beautiful tonight.' }
        ],
        '星星': [
            { cn: '晚上可以看到很多星星。', en: 'You can see many stars at night.' },
            { cn: '星星在天上闪闪发光。', en: 'The stars are twinkling in the sky.' },
            { cn: '我喜欢看星星。', en: 'I like watching stars.' }
        ],
        '山': [
            { cn: '我喜欢爬山。', en: 'I like climbing mountains.' },
            { cn: '这座山很高。', en: 'This mountain is very tall.' },
            { cn: '山上有树和花。', en: 'There are trees and flowers on the mountain.' }
        ],
        '河': [
            { cn: '这条河很长。', en: 'This river is very long.' },
            { cn: '鱼在河里游泳。', en: 'Fish are swimming in the river.' },
            { cn: '河边有很多树。', en: 'There are many trees by the river.' }
        ],
        '海': [
            { cn: '大海很蓝。', en: 'The sea is very blue.' },
            { cn: '我喜欢去海边玩。', en: 'I like going to the seaside to play.' },
            { cn: '海里有很多鱼。', en: 'There are many fish in the sea.' }
        ],
        '雨': [
            { cn: '今天下雨了。', en: 'It rained today.' },
            { cn: '出门别忘带雨伞。', en: 'Don\'t forget to bring an umbrella when going out.' },
            { cn: '雨停了。', en: 'The rain has stopped.' }
        ],
        '雪': [
            { cn: '北方冬天会下雪。', en: 'It snows in the north in winter.' },
            { cn: '雪是白色的。', en: 'Snow is white.' },
            { cn: '孩子们在雪地里玩。', en: 'The children are playing in the snow.' }
        ],
        '风': [
            { cn: '今天风很大。', en: 'It\'s very windy today.' },
            { cn: '春风吹在脸上很舒服。', en: 'The spring wind feels comfortable on the face.' },
            { cn: '风停了。', en: 'The wind has stopped.' }
        ],
        '天气': [
            { cn: '今天天气怎么样？', en: 'How is the weather today?' },
            { cn: '明天天气很好。', en: 'The weather will be good tomorrow.' },
            { cn: '我喜欢温暖的天气。', en: 'I like warm weather.' }
        ],
        '高': [
            { cn: '他很高。', en: 'He is very tall.' },
            { cn: '山很高。', en: 'The mountain is very high.' },
            { cn: '飞机飞得很高。', en: 'The plane flies very high.' }
        ],
        '矮': [
            { cn: '他不矮。', en: 'He is not short.' },
            { cn: '这棵树很矮。', en: 'This tree is very short.' },
            { cn: '她个子不高，有点矮。', en: 'She is not tall, a bit short.' }
        ],
        '胖': [
            { cn: '他有点胖。', en: 'He is a bit fat.' },
            { cn: '吃太多会胖。', en: 'Eating too much will make you fat.' },
            { cn: '这个小孩很胖，很可爱。', en: 'This child is chubby, very cute.' }
        ],
        '瘦': [
            { cn: '他很瘦。', en: 'He is very thin.' },
            { cn: '她太瘦了，要多吃点。', en: 'She is too thin, she needs to eat more.' },
            { cn: '最近他瘦了很多。', en: 'He has lost a lot of weight recently.' }
        ],
        '美': [
            { cn: '这个地方很美。', en: 'This place is very beautiful.' },
            { cn: '她的歌声很美。', en: 'Her singing voice is very beautiful.' },
            { cn: '景色真美。', en: 'The scenery is really beautiful.' }
        ],
        '对': [
            { cn: '你说得对。', en: 'You are right.' },
            { cn: '这个答案不对。', en: 'This answer is not correct.' },
            { cn: '对面是学校。', en: 'The opposite side is the school.' }
        ],
        '远': [
            { cn: '学校离家很远。', en: 'The school is very far from home.' },
            { cn: '走路去太远了。', en: 'It\'s too far to walk.' },
            { cn: '超市离这里不远。', en: 'The supermarket is not far from here.' }
        ],
        '近': [
            { cn: '我家离学校很近。', en: 'My home is very close to school.' },
            { cn: '附近有医院吗？', en: 'Is there a hospital nearby?' },
            { cn: '最近比较忙。', en: 'Been quite busy lately.' }
        ],
        '重': [
            { cn: '这个箱子很重。', en: 'This box is very heavy.' },
            { cn: '他的病很重。', en: 'His illness is very serious.' },
            { cn: '请重说一遍。', en: 'Please say it again.' }
        ],
        '轻': [
            { cn: '这个书包很轻。', en: 'This backpack is very light.' },
            { cn: '请轻一点。', en: 'Please be gentle.' },
            { cn: '她轻轻地走路。', en: 'She walks lightly.' }
        ],
        '满': [
            { cn: '杯子满了。', en: 'The cup is full.' },
            { cn: '教室里坐满了学生。', en: 'The classroom is full of students.' },
            { cn: '请倒满水。', en: 'Please fill the glass with water.' }
        ],
        '空': [
            { cn: '盒子是空的。', en: 'The box is empty.' },
            { cn: '教室里没有学生，是空的。', en: 'There are no students in the classroom, it\'s empty.' },
            { cn: '我明天有空。', en: 'I am free tomorrow.' }
        ],
        '圆': [
            { cn: '月亮很圆。', en: 'The moon is very round.' },
            { cn: '盘子是圆的。', en: 'The plate is round.' },
            { cn: '他画了一个圆。', en: 'He drew a circle.' }
        ],
        '方': [
            { cn: '桌子是方形的。', en: 'The table is square.' },
            { cn: '请把这个方框涂黑。', en: 'Please blacken this square.' },
            { cn: '房间里有一张方桌子。', en: 'There is a square table in the room.' }
        ],
        '静': [
            { cn: '图书馆里很安静。', en: 'The library is very quiet.' },
            { cn: '请保持安静。', en: 'Please keep quiet.' },
            { cn: '晚上很安静。', en: 'It\'s very quiet at night.' }
        ],
        '早': [
            { cn: '明天早上见。', en: 'See you tomorrow morning.' },
            { cn: '你来得很早。', en: 'You came very early.' },
            { cn: '早睡早起身体好。', en: 'Early to bed, early to rise makes you healthy.' }
        ],
        '晚': [
            { cn: '今天来晚了。', en: 'Arrived late today.' },
            { cn: '太晚了，我要回家了。', en: 'It\'s too late, I need to go home.' },
            { cn: '晚上好。', en: 'Good evening.' }
        ],
        '碗': [
            { cn: '请给我一个碗。', en: 'Please give me a bowl.' },
            { cn: '我吃了一碗面。', en: 'I ate a bowl of noodles.' },
            { cn: '碗里有米饭。', en: 'There is rice in the bowl.' }
        ],
        '杯': [
            { cn: '请给我一杯茶。', en: 'Please give me a cup of tea.' },
            { cn: '杯子里有水。', en: 'There is water in the cup.' },
            { cn: '他喝了两杯咖啡。', en: 'He drank two cups of coffee.' }
        ],
        '瓶': [
            { cn: '请给我一瓶水。', en: 'Please give me a bottle of water.' },
            { cn: '桌子上有一瓶花。', en: 'There is a vase of flowers on the table.' },
            { cn: '他买了两瓶啤酒。', en: 'He bought two bottles of beer.' }
        ],
        '块': [
            { cn: '这块蛋糕很好吃。', en: 'This piece of cake is delicious.' },
            { cn: '他给了我一块糖。', en: 'He gave me a piece of candy.' },
            { cn: '一共二十块钱。', en: 'Twenty yuan in total.' }
        ],
        '只': [
            { cn: '我有一只猫。', en: 'I have a cat.' },
            { cn: '他只有十块钱。', en: 'He only has ten yuan.' },
            { cn: '我只吃了一个苹果。', en: 'I only ate one apple.' }
        ],
        '个': [
            { cn: '我是一个学生。', en: 'I am a student.' },
            { cn: '这个苹果很大。', en: 'This apple is very big.' },
            { cn: '他买了三个橘子。', en: 'He bought three oranges.' }
        ],
        '本': [
            { cn: '这本中文书很有意思。', en: 'This Chinese book is very interesting.' },
            { cn: '请给我两本笔记本。', en: 'Please give me two notebooks.' },
            { cn: '他买了很多本书。', en: 'He bought many books.' }
        ],
        '支': [
            { cn: '请给我一支笔。', en: 'Please give me a pen.' },
            { cn: '这支笔很好写。', en: 'This pen writes very well.' },
            { cn: '我买了两支铅笔。', en: 'I bought two pencils.' }
        ],
        '把': [
            { cn: '请拿一把椅子来。', en: 'Please bring a chair.' },
            { cn: '这把刀很快。', en: 'This knife is very sharp.' },
            { cn: '他买了一把伞。', en: 'He bought an umbrella.' }
        ],
        '台': [
            { cn: '这台电脑很贵。', en: 'This computer is very expensive.' },
            { cn: '桌子上有一台电视。', en: 'There is a TV on the table.' },
            { cn: '他买了一台洗衣机。', en: 'He bought a washing machine.' }
        ],
        '部': [
            { cn: '这部手机很好用。', en: 'This phone works very well.' },
            { cn: '我看了一部好电影。', en: 'I watched a good movie.' },
            { cn: '他在一部电影里当演员。', en: 'He is an actor in a movie.' }
        ],
        '盒': [
            { cn: '这盒饼干很好吃。', en: 'This box of cookies is delicious.' },
            { cn: '请给我一盒牛奶。', en: 'Please give me a carton of milk.' },
            { cn: '他买了一盒糖。', en: 'He bought a box of candy.' }
        ],
        '包': [
            { cn: '请给我一包纸巾。', en: 'Please give me a pack of tissues.' },
            { cn: '他背着一个大包。', en: 'He is carrying a big bag.' },
            { cn: '一包饼干多少钱？', en: 'How much is a pack of cookies?' }
        ],
        '层': [
            { cn: '这栋楼有十层。', en: 'This building has ten floors.' },
            { cn: '我住在三层。', en: 'I live on the third floor.' },
            { cn: '蛋糕有两层。', en: 'The cake has two layers.' }
        ],
        '周末': [
            { cn: '周末愉快！', en: 'Happy weekend!' },
            { cn: '周末我常去公园。', en: 'I often go to the park on weekends.' },
            { cn: '你周末做什么？', en: 'What do you do on weekends?' }
        ],
        '去年': [
            { cn: '去年我去了中国。', en: 'I went to China last year.' },
            { cn: '去年他在北京学习。', en: 'He studied in Beijing last year.' },
            { cn: '去年的今天很冷。', en: 'It was very cold on this day last year.' }
        ],
        '明年': [
            { cn: '明年我大学就毕业了。', en: 'I will graduate from university next year.' },
            { cn: '明年我要去旅行。', en: 'I will travel next year.' },
            { cn: '明年你几岁了？', en: 'How old will you be next year?' }
        ],
        '经常': [
            { cn: '我经常去图书馆。', en: 'I often go to the library.' },
            { cn: '他经常迟到。', en: 'He is often late.' },
            { cn: '我们经常在一起吃饭。', en: 'We often eat together.' }
        ],
        '总是': [
            { cn: '他总是很忙。', en: 'He is always very busy.' },
            { cn: '她总是笑。', en: 'She is always smiling.' },
            { cn: '你总是忘记带钥匙。', en: 'You always forget to bring your keys.' }
        ],
        '刚': [
            { cn: '我刚到北京。', en: 'I just arrived in Beijing.' },
            { cn: '他刚走。', en: 'He just left.' },
            { cn: '我刚吃完饭。', en: 'I just finished eating.' }
        ],
        '马上': [
            { cn: '我马上来。', en: 'I\'ll come right away.' },
            { cn: '请马上开始。', en: 'Please start immediately.' },
            { cn: '他马上就到。', en: 'He will arrive soon.' }
        ],
        '司机': [
            { cn: '司机在车上等我。', en: 'The driver is waiting for me in the car.' },
            { cn: '他爸爸是出租车司机。', en: 'His father is a taxi driver.' },
            { cn: '司机开车很稳。', en: 'The driver drives very steadily.' }
        ],
        '护士': [
            { cn: '护士在医院工作。', en: 'Nurses work at the hospital.' },
            { cn: '这位护士很温柔。', en: 'This nurse is very gentle.' },
            { cn: '她梦想成为护士。', en: 'She dreams of becoming a nurse.' }
        ],
        '农民': [
            { cn: '农民在田里种菜。', en: 'Farmers grow vegetables in the fields.' },
            { cn: '农民工作很辛苦。', en: 'Farmers work very hard.' },
            { cn: '他爷爷是农民。', en: 'His grandfather is a farmer.' }
        ],
        '工人': [
            { cn: '工人在建房子。', en: 'Workers are building a house.' },
            { cn: '他爸爸是工人。', en: 'His father is a worker.' },
            { cn: '工人工作很努力。', en: 'The workers work very hard.' }
        ],
        '经理': [
            { cn: '他是公司的经理。', en: 'He is the company manager.' },
            { cn: '经理在开会。', en: 'The manager is in a meeting.' },
            { cn: '王经理很忙。', en: 'Manager Wang is very busy.' }
        ],
        '再见': [
            { cn: '再见，明天见！', en: 'Goodbye, see you tomorrow!' },
            { cn: '下课了，同学们再见。', en: 'Class is over, goodbye students.' },
            { cn: '我先走了，再见。', en: 'I\'m leaving now, goodbye.' },
            { cn: '再见，下次再来玩。', en: 'Goodbye, come play again next time.' },
            { cn: '和大家说再见。', en: 'Say goodbye to everyone.' }
        ],
        '欢迎': [
            { cn: '欢迎来我家。', en: 'Welcome to my home.' },
            { cn: '欢迎来到中国。', en: 'Welcome to China.' },
            { cn: '热烈欢迎新同学。', en: 'Warmly welcome new classmates.' }
        ],
        '小心': [
            { cn: '小心开车。', en: 'Drive carefully.' },
            { cn: '小心，前面有车。', en: 'Be careful, there\'s a car ahead.' },
            { cn: '小心烫。', en: 'Careful, it\'s hot.' }
        ],
        '帮忙': [
            { cn: '请帮我一个忙。', en: 'Please help me.' },
            { cn: '谢谢你的帮忙。', en: 'Thank you for your help.' },
            { cn: '你愿意帮忙吗？', en: 'Are you willing to help?' }
        ],
        '打扰': [
            { cn: '打扰一下。', en: 'Excuse me.' },
            { cn: '对不起，打扰了。', en: 'Sorry to bother you.' },
            { cn: '请不要打扰我学习。', en: 'Please don\'t disturb my studying.' }
        ],
        '生病': [
            { cn: '他生病了，不能来上课。', en: 'He is sick and can\'t come to class.' },
            { cn: '多喝水不容易生病。', en: 'Drinking more water makes you less likely to get sick.' },
            { cn: '你生病了吗？', en: 'Are you sick?' }
        ],
        '电话': [
            { cn: '请给我你的电话。', en: 'Please give me your phone number.' },
            { cn: '他在打电话。', en: 'He is on the phone.' },
            { cn: '电话响了。', en: 'The phone is ringing.' }
        ],
        '电脑': [
            { cn: '我用电脑学习中文。', en: 'I use the computer to study Chinese.' },
            { cn: '这台电脑很新。', en: 'This computer is very new.' },
            { cn: '他每天用电脑工作。', en: 'He works on the computer every day.' },
            { cn: '电脑很方便。', en: 'Computers are very convenient.' }
        ],
        '电视': [
            { cn: '晚上在家看电视。', en: 'Watch TV at home in the evening.' },
            { cn: '这个电视节目很有意思。', en: 'This TV show is very interesting.' },
            { cn: '他看电视看了一个小时。', en: 'He watched TV for an hour.' }
        ],
        '电影': [
            { cn: '我们去看电影吧。', en: 'Let\'s go see a movie.' },
            { cn: '这部电影很好看。', en: 'This movie is very good.' },
            { cn: '我每个星期都看电影。', en: 'I watch a movie every week.' }
        ],
        '房间': [
            { cn: '我的房间不大。', en: 'My room is not big.' },
            { cn: '请把房间收拾干净。', en: 'Please clean up the room.' },
            { cn: '这个房间很舒服。', en: 'This room is very comfortable.' }
        ],
        '上课': [
            { cn: '我们八点上课。', en: 'We have class at eight.' },
            { cn: '上课了，请坐好。', en: 'Class is starting, please sit properly.' },
            { cn: '他上课很认真。', en: 'He is very attentive in class.' }
        ],
        '下班': [
            { cn: '他六点下班。', en: 'He gets off work at six.' },
            { cn: '下班后我们去吃饭。', en: 'We go eat after work.' },
            { cn: '你几点下班？', en: 'What time do you get off work?' }
        ],
        '唱歌': [
            { cn: '他唱歌很好听。', en: 'He sings very well.' },
            { cn: '我喜欢唱歌。', en: 'I like singing.' },
            { cn: '我们一起唱歌吧。', en: 'Let\'s sing together.' },
            { cn: '我喜欢在洗澡时唱歌。', en: 'I like singing in the shower.' }
        ],
        '跳舞': [
            { cn: '她跳舞很美。', en: 'She dances very beautifully.' },
            { cn: '你喜欢跳舞吗？', en: 'Do you like dancing?' },
            { cn: '他们在跳舞。', en: 'They are dancing.' },
            { cn: '跳中国舞很难。', en: 'Chinese dance is very difficult.' }
        ],
        '游泳': [
            { cn: '夏天我喜欢游泳。', en: 'I like swimming in summer.' },
            { cn: '他每天游泳。', en: 'He swims every day.' },
            { cn: '我学会了游泳。', en: 'I learned to swim.' },
            { cn: '游泳池在哪里？', en: 'Where is the swimming pool?' }
        ],
        '跑步': [
            { cn: '他每天早上跑步。', en: 'He runs every morning.' },
            { cn: '跑步对身体好。', en: 'Running is good for health.' },
            { cn: '我们一起跑步吧。', en: 'Let\'s run together.' },
            { cn: '他每天跑步半小时。', en: 'He runs for half an hour every day.' },
            { cn: '跑步可以锻炼身体。', en: 'Running can exercise the body.' }
        ],
        '旅游': [
            { cn: '我喜欢旅游。', en: 'I like traveling.' },
            { cn: '明年我要去中国旅游。', en: 'I will travel to China next year.' },
            { cn: '旅游可以学到很多东西。', en: 'Traveling can teach you many things.' }
        ],
        '休息': [
            { cn: '累了就休息。', en: 'Rest when tired.' },
            { cn: '请休息一下。', en: 'Please rest a moment.' },
            { cn: '星期天我在家休息。', en: 'I rest at home on Sunday.' }
        ],
        '上班': [
            { cn: '他早上八点上班。', en: 'He starts work at eight in the morning.' },
            { cn: '你坐什么车上班？', en: 'What do you take to work?' },
            { cn: '上班不能迟到。', en: 'Can\'t be late for work.' }
        ],
        '搬家': [
            { cn: '我下个月搬家。', en: 'I am moving next month.' },
            { cn: '他搬到了北京。', en: 'He moved to Beijing.' },
            { cn: '搬家很麻烦。', en: 'Moving is very troublesome.' }
        ],
        '做饭': [
            { cn: '妈妈在做饭。', en: 'Mom is cooking.' },
            { cn: '你会做饭吗？', en: 'Can you cook?' },
            { cn: '我今天不想做饭。', en: 'I don\'t want to cook today.' }
        ],
        '上网': [
            { cn: '我喜欢上网看新闻。', en: 'I like going online to read news.' },
            { cn: '他每天上网学习。', en: 'He studies online every day.' },
            { cn: '上网时间不要太长。', en: 'Don\'t spend too long online.' }
        ],
        '洗澡': [
            { cn: '晚上洗澡很舒服。', en: 'Taking a shower at night is very comfortable.' },
            { cn: '他每天洗澡。', en: 'He takes a shower every day.' },
            { cn: '洗澡水很热。', en: 'The shower water is very hot.' }
        ],
        '刷牙': [
            { cn: '早上和晚上要刷牙。', en: 'Brush your teeth in the morning and evening.' },
            { cn: '请认真刷牙。', en: 'Please brush your teeth carefully.' },
            { cn: '他买了新牙刷。', en: 'He bought a new toothbrush.' }
        ],
        '开门': [
            { cn: '请开门。', en: 'Please open the door.' },
            { cn: '商店九点开门。', en: 'The store opens at nine.' },
            { cn: '他开门出去了。', en: 'He opened the door and went out.' }
        ],
        '关门': [
            { cn: '请关门。', en: 'Please close the door.' },
            { cn: '商店晚上十点关门。', en: 'The store closes at ten in the evening.' },
            { cn: '外面冷，请关门。', en: 'It\'s cold outside, please close the door.' }
        ],
        '考试': [
            { cn: '明天有中文考试。', en: 'There is a Chinese exam tomorrow.' },
            { cn: '考试的时候不能说话。', en: 'You can\'t talk during the exam.' },
            { cn: '他考试考得很好。', en: 'He did very well on the exam.' }
        ],
        '作业': [
            { cn: '我在做作业。', en: 'I am doing homework.' },
            { cn: '今天作业很多。', en: 'There is a lot of homework today.' },
            { cn: '他写完作业了。', en: 'He finished his homework.' }
        ],
        '问题': [
            { cn: '我有一个问题。', en: 'I have a question.' },
            { cn: '请问你一个问题。', en: 'May I ask you a question?' },
            { cn: '这个问题的答案很简单。', en: 'The answer to this question is very simple.' },
            { cn: '我能问你一个问题吗？', en: 'Can I ask you a question?' },
            { cn: '这个问题很难。', en: 'This question is very difficult.' }
        ],
        '中文': [
            { cn: '我在学中文。', en: 'I am learning Chinese.' },
            { cn: '中文很有意思。', en: 'Chinese is very interesting.' },
            { cn: '他会说中文和英文。', en: 'He can speak Chinese and English.' }
        ],
        '英语': [
            { cn: '他的英语很好。', en: 'His English is very good.' },
            { cn: '我喜欢学英语。', en: 'I like learning English.' },
            { cn: '请用英语说。', en: 'Please say it in English.' }
        ],
        '数学': [
            { cn: '数学很难。', en: 'Mathematics is very difficult.' },
            { cn: '他喜欢数学。', en: 'He likes mathematics.' },
            { cn: '数学老师很严格。', en: 'The math teacher is very strict.' }
        ],
        '历史': [
            { cn: '中国历史很长。', en: 'Chinese history is very long.' },
            { cn: '我喜欢上历史课。', en: 'I like attending history class.' },
            { cn: '历史很有趣。', en: 'History is very interesting.' }
        ],
        '科学': [
            { cn: '科学很重要。', en: 'Science is very important.' },
            { cn: '他喜欢科学。', en: 'He likes science.' },
            { cn: '科学改变生活。', en: 'Science changes life.' }
        ],
        '铅笔': [
            { cn: '请给我一支铅笔。', en: 'Please give me a pencil.' },
            { cn: '我用铅笔写字。', en: 'I write with a pencil.' },
            { cn: '这只铅笔是红色的。', en: 'This pencil is red.' }
        ],
        '橡皮': [
            { cn: '请给我一块橡皮。', en: 'Please give me an eraser.' },
            { cn: '我用橡皮擦错字。', en: 'I use an eraser to erase wrong characters.' },
            { cn: '橡皮不见了。', en: 'The eraser is missing.' }
        ],
        '尺子': [
            { cn: '用尺子画一条直线。', en: 'Use a ruler to draw a straight line.' },
            { cn: '我的尺子是蓝色的。', en: 'My ruler is blue.' },
            { cn: '请借我一把尺子。', en: 'Please lend me a ruler.' }
        ],
        '桌子': [
            { cn: '书在桌子上。', en: 'The book is on the table.' },
            { cn: '这张桌子很大。', en: 'This table is very big.' },
            { cn: '桌子上有一杯水。', en: 'There is a glass of water on the table.' }
        ],
        '椅子': [
            { cn: '请坐在椅子上。', en: 'Please sit on the chair.' },
            { cn: '这把椅子很舒服。', en: 'This chair is very comfortable.' },
            { cn: '教室里有二十把椅子。', en: 'There are twenty chairs in the classroom.' }
        ],
        '门': [
            { cn: '请开门。', en: 'Please open the door.' },
            { cn: '门口站着一个人。', en: 'There is a person standing at the door.' },
            { cn: '关门，外面很冷。', en: 'Close the door, it\'s cold outside.' }
        ],
        '窗': [
            { cn: '请打开窗户。', en: 'Please open the window.' },
            { cn: '窗外有树。', en: 'There are trees outside the window.' },
            { cn: '窗户关着。', en: 'The window is closed.' }
        ],
        '灯': [
            { cn: '请开灯。', en: 'Please turn on the light.' },
            { cn: '灯很亮。', en: 'The light is very bright.' },
            { cn: '请关灯。', en: 'Please turn off the light.' }
        ],
        '礼物': [
            { cn: '这是给你的礼物。', en: 'This is a gift for you.' },
            { cn: '谢谢你的礼物。', en: 'Thank you for your gift.' },
            { cn: '我收到了一份礼物。', en: 'I received a gift.' },
            { cn: '他送了花作为礼物。', en: 'He gave flowers as a gift.' },
            { cn: '生日礼物很重要。', en: 'Birthday gifts are very important.' }
        ],
        '动物': [
            { cn: '我喜欢小动物。', en: 'I like small animals.' },
            { cn: '动物园里有很多动物。', en: 'There are many animals in the zoo.' },
            { cn: '猫和狗都是动物。', en: 'Cats and dogs are both animals.' }
        ],
        '植物': [
            { cn: '我家里有很多植物。', en: 'There are many plants in my home.' },
            { cn: '植物需要阳光和水。', en: 'Plants need sunlight and water.' },
            { cn: '这棵植物长得很高。', en: 'This plant has grown very tall.' }
        ],
        '世界': [
            { cn: '世界很大。', en: 'The world is very big.' },
            { cn: '我想去看看世界。', en: 'I want to go see the world.' },
            { cn: '中国在世界很有名。', en: 'China is very famous in the world.' }
        ],
        '国家': [
            { cn: '中国是一个大国。', en: 'China is a big country.' },
            { cn: '每个国家都有不同的文化。', en: 'Every country has a different culture.' },
            { cn: '我爱我的国家。', en: 'I love my country.' }
        ],
        '城市': [
            { cn: '北京是一个大城市。', en: 'Beijing is a big city.' },
            { cn: '这个城市很漂亮。', en: 'This city is very beautiful.' },
            { cn: '我喜欢住在城市里。', en: 'I like living in the city.' }
        ],
        '颜色': [
            { cn: '你最喜欢什么颜色？', en: 'What color do you like most?' },
            { cn: '红色是中国人的幸运颜色。', en: 'Red is the lucky color for Chinese people.' },
            { cn: '这件衣服的颜色很好看。', en: 'The color of this piece of clothing is very nice.' }
        ],
        '红色': [
            { cn: '国旗是红色的。', en: 'The national flag is red.' },
            { cn: '我喜欢穿红色的衣服。', en: 'I like wearing red clothes.' },
            { cn: '红色的花很漂亮。', en: 'Red flowers are very beautiful.' }
        ],
        '蓝色': [
            { cn: '天空是蓝色的。', en: 'The sky is blue.' },
            { cn: '他喜欢蓝色。', en: 'He likes blue.' },
            { cn: '蓝色的海很美。', en: 'The blue sea is very beautiful.' }
        ],
        '白色': [
            { cn: '雪是白色的。', en: 'Snow is white.' },
            { cn: '她穿了一件白色裙子。', en: 'She wore a white skirt.' },
            { cn: '白色很干净。', en: 'White is very clean.' }
        ],
        '黑色': [
            { cn: '他的头发是黑色的。', en: 'His hair is black.' },
            { cn: '黑色的猫很神秘。', en: 'Black cats are very mysterious.' },
            { cn: '他喜欢穿黑色的衣服。', en: 'He likes wearing black clothes.' }
        ],
        '手机': [
            { cn: '请给我你的手机号码。', en: 'Please give me your phone number.' },
            { cn: '手机没电了。', en: 'The phone battery is dead.' },
            { cn: '我用手机学中文。', en: 'I use my phone to study Chinese.' }
        ],
        '照片': [
            { cn: '请给我看你的照片。', en: 'Please show me your photos.' },
            { cn: '这张照片很漂亮。', en: 'This photo is very beautiful.' },
            { cn: '他喜欢拍照片。', en: 'He likes taking photos.' }
        ],
        '游戏': [
            { cn: '孩子们喜欢玩游戏。', en: 'Children like playing games.' },
            { cn: '这个游戏很有意思。', en: 'This game is very interesting.' },
            { cn: '不要玩太多游戏。', en: 'Don\'t play too many games.' }
        ],
        '运动': [
            { cn: '多运动对身体好。', en: 'More exercise is good for the body.' },
            { cn: '你喜欢什么运动？', en: 'What sport do you like?' },
            { cn: '跑步是最好的运动。', en: 'Running is the best exercise.' }
        ],
        '篮球': [
            { cn: '他喜欢打篮球。', en: 'He likes playing basketball.' },
            { cn: '篮球运动员都很高。', en: 'Basketball players are all very tall.' },
            { cn: '放学后我们去打篮球。', en: 'Let\'s play basketball after school.' }
        ],
        '足球': [
            { cn: '足球是世界上最有名的运动。', en: 'Soccer is the most famous sport in the world.' },
            { cn: '他每周踢足球。', en: 'He plays soccer every week.' },
            { cn: '我喜欢看足球比赛。', en: 'I like watching soccer matches.' }
        ],
        '比赛': [
            { cn: '明天有一场篮球比赛。', en: 'There is a basketball game tomorrow.' },
            { cn: '这场比赛很精彩。', en: 'This game is very exciting.' },
            { cn: '他赢得了比赛。', en: 'He won the competition.' }
        ],
        '赢': [
            { cn: '我们赢了比赛。', en: 'We won the game.' },
            { cn: '他赢了。', en: 'He won.' },
            { cn: '谁赢了？', en: 'Who won?' }
        ],
        '输': [
            { cn: '他们输了比赛。', en: 'They lost the game.' },
            { cn: '他不想输。', en: 'He doesn\'t want to lose.' },
            { cn: '输赢不重要。', en: 'Winning or losing isn\'t important.' }
        ],
        '开车': [
            { cn: '我爸爸会开车。', en: 'My dad can drive.' },
            { cn: '开车要小心。', en: 'Be careful when driving.' },
            { cn: '他每天开车上班。', en: 'He drives to work every day.' }
        ],
        '走路': [
            { cn: '我走路去学校。', en: 'I walk to school.' },
            { cn: '走路对身体好。', en: 'Walking is good for your health.' },
            { cn: '他走路很慢。', en: 'He walks very slowly.' }
        ],
        '桥': [
            { cn: '这是一座很长的桥。', en: 'This is a very long bridge.' },
            { cn: '过桥的时候要小心。', en: 'Be careful when crossing the bridge.' },
            { cn: '桥下有一条河。', en: 'There is a river under the bridge.' }
        ],
        '地铁': [
            { cn: '我坐地铁去上班。', en: 'I take the subway to work.' },
            { cn: '地铁很快也很方便。', en: 'The subway is fast and convenient.' },
            { cn: '地铁站在哪里？', en: 'Where is the subway station?' }
        ],
        '飞机': [
            { cn: '坐飞机很快。', en: 'Taking a plane is very fast.' },
            { cn: '飞机从北京飞到上海。', en: 'The plane flies from Beijing to Shanghai.' },
            { cn: '他在机场等飞机。', en: 'He is waiting for the plane at the airport.' }
        ],
        '时间': [
            { cn: '时间过得很快。', en: 'Time flies very fast.' },
            { cn: '你有时间吗？', en: 'Do you have time?' },
            { cn: '请给我一点时间。', en: 'Please give me a little time.' }
        ],
        '节日': [
            { cn: '春节是中国最重要的节日。', en: 'Spring Festival is China\'s most important holiday.' },
            { cn: '节日的时候大家都很开心。', en: 'Everyone is very happy during festivals.' },
            { cn: '你喜欢什么节日？', en: 'What festival do you like?' }
        ],
        '黄色': [
            { cn: '香蕉是黄色的。', en: 'Bananas are yellow.' },
            { cn: '黄色的花很漂亮。', en: 'Yellow flowers are very beautiful.' },
            { cn: '他穿了一件黄色的衣服。', en: 'He wore a yellow piece of clothing.' }
        ],
        '绿色': [
            { cn: '草是绿色的。', en: 'The grass is green.' },
            { cn: '绿色代表环保。', en: 'Green represents environmental protection.' },
            { cn: '春天的树是绿色的。', en: 'The trees are green in spring.' }
        ]
    };

    if (typeof HSK1Examples !== 'undefined' && HSK1Examples.examples) {
        var existing = HSK1Examples.examples;
        var keys = Object.keys(newExamples);
        var totalExamples = 0;
        var newKeyCount = 0;
        for (var i = 0; i < keys.length; i++) {
            var ch = keys[i];
            if (!existing[ch]) {
                existing[ch] = [];
                newKeyCount++;
            }
            var arr = newExamples[ch];
            for (var j = 0; j < arr.length; j++) {
                existing[ch].push(arr[j]);
                totalExamples++;
            }
        }
        if (HSK1Examples.getExamples) {
            HSK1Examples.getExamples = function(c) { return existing[c] || []; };
        }
        if (HSK1Examples.getRandomExample) {
            HSK1Examples.getRandomExample = function(c) {
                var arr = existing[c] || [];
                return arr.length > 0 ? arr[Math.floor(Math.random() * arr.length)] : null;
            };
        }
        console.log('HSK1Examples-extra: Added examples for ' + keys.length + ' character keys (' + newKeyCount + ' new keys), ' + totalExamples + ' total new example sentences.');
    }
})();

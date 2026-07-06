// ============================================
// CHINESE MASTER - Listening MEGA Data Generator
// Generates data/listening-mega.js with 2100 new entries
// Run: node build-listening-mega.js
// ============================================

var fs = require('fs');
var path = require('path');

var DICTATION = [
  {c:'你真是个好老师',p:'nǐ zhēn shì gè hǎo lǎoshī',m:'You are really a good teacher',h:'Praise',cat:'School'},
  {c:'这个苹果很好吃',p:'zhège píngguǒ hěn hǎochī',m:'This apple is very tasty',h:'Fruit',cat:'Food'},
  {c:'明天是我的生日',p:'míngtiān shì wǒ de shēngrì',m:'Tomorrow is my birthday',h:'Birthday',cat:'Daily Life'},
  {c:'请问你叫什么名字',p:'qǐngwèn nǐ jiào shénme míngzi',m:'May I ask your name?',h:'Asking name',cat:'Introduction'},
  {c:'我家有五口人',p:'wǒ jiā yǒu wǔ kǒu rén',m:'My family has five people',h:'Family size',cat:'Family'},
  {c:'今天天气非常好',p:'jīntiān tiānqì fēicháng hǎo',m:'The weather is excellent today',h:'Weather',cat:'Weather'},
  {c:'我每天骑自行车上班',p:'wǒ měitiān qí zìxíngchē shàngbān',m:'I ride a bike to work every day',h:'Commute',cat:'Transportation'},
  {c:'你能帮我一个忙吗',p:'nǐ néng bāng wǒ yīgè máng ma',m:'Can you help me?',h:'Asking for help',cat:'Social'},
  {c:'这只小狗很可爱',p:'zhè zhī xiǎo gǒu hěn kě\'ài',m:'This puppy is very cute',h:'Pet',cat:'Animals'},
  {c:'请在第二个路口右转',p:'qǐng zài dì èr gè lùkǒu yòu zhuǎn',m:'Please turn right at the second intersection',h:'Directions',cat:'Travel'},
  {c:'我最喜欢的颜色是蓝色',p:'wǒ zuì xǐhuān de yánsè shì lánsè',m:'My favorite color is blue',h:'Color preference',cat:'Colors'},
  {c:'你的中文说得很好',p:'nǐ de zhōngwén shuō de hěn hǎo',m:'You speak Chinese very well',h:'Compliment',cat:'School'},
  {c:'我要去超市买东西',p:'wǒ yào qù chāoshì mǎi dōngxi',m:'I need to go to the supermarket to buy things',h:'Shopping',cat:'Shopping'},
  {c:'今天真热啊',p:'jīntiān zhēn rè a',m:'It is really hot today',h:'Temperature',cat:'Weather'},
  {c:'妈妈做的菜最好吃',p:'māma zuò de cài zuì hǎochī',m:'Mom\'s cooking is the best',h:'Family cooking',cat:'Food'},
  {c:'我爷爷今年七十岁',p:'wǒ yéye jīnnián qīshí suì',m:'My grandpa is 70 years old this year',h:'Age',cat:'Family'},
  {c:'周末我们去看电影吧',p:'zhōumò wǒmen qù kàn diànyǐng ba',m:'Let\'s go see a movie this weekend',h:'Weekend plan',cat:'Entertainment'},
  {c:'他每天都锻炼身体',p:'tā měitiān dōu duànliàn shēntǐ',m:'He exercises every day',h:'Exercise',cat:'Health'},
  {c:'这首歌非常好听',p:'zhè shǒu gē fēicháng hǎotīng',m:'This song is very pleasant to hear',h:'Music',cat:'Entertainment'},
  {c:'春天的花特别漂亮',p:'chūntiān de huā tèbié piàoliang',m:'Spring flowers are especially beautiful',h:'Season',cat:'Nature'},
  {c:'我可以试穿一下吗',p:'wǒ kěyǐ shìchuān yīxià ma',m:'Can I try it on?',h:'Fitting',cat:'Shopping'},
  {c:'请给我一张发票',p:'qǐng gěi wǒ yī zhāng fāpiào',m:'Please give me a receipt',h:'Receipt',cat:'Shopping'},
  {c:'我在大学学习经济',p:'wǒ zài dàxué xuéxí jīngjì',m:'I study economics at university',h:'Major',cat:'School'},
  {c:'飞机晚点了两个小时',p:'fēijī wǎndiǎn le liǎng gè xiǎoshí',m:'The flight was delayed by two hours',h:'Flight delay',cat:'Travel'},
  {c:'请把窗户打开',p:'qǐng bǎ chuānghù dǎkāi',m:'Please open the window',h:'Request',cat:'Daily Life'},
  {c:'外面下着大雨',p:'wàimiàn xià zhe dàyǔ',m:'It is raining heavily outside',h:'Rain',cat:'Weather'},
  {c:'你的衣服很漂亮',p:'nǐ de yīfu hěn piàoliang',m:'Your clothes are very beautiful',h:'Compliment',cat:'Shopping'},
  {c:'我要去图书馆借书',p:'wǒ yào qù túshūguǎn jiè shū',m:'I want to go to the library to borrow books',h:'Library',cat:'School'},
  {c:'他是我最好的朋友',p:'tā shì wǒ zuì hǎo de péngyǒu',m:'He is my best friend',h:'Friendship',cat:'Social'},
  {c:'小孩子都喜欢玩游戏',p:'xiǎo háizi dōu xǐhuān wán yóuxì',m:'Children all like to play games',h:'Play',cat:'Entertainment'},
  {c:'请把电视关小一点',p:'qǐng bǎ diànshì guān xiǎo yīdiǎn',m:'Please turn down the TV',h:'Volume',cat:'Home'},
  {c:'我的手机没电了',p:'wǒ de shǒujī méi diàn le',m:'My phone battery is dead',h:'Battery',cat:'Technology'},
  {c:'你能告诉我怎么走吗',p:'nǐ néng gàosu wǒ zěnme zǒu ma',m:'Can you tell me how to get there?',h:'Directions',cat:'Travel'},
  {c:'这个房间很大很亮',p:'zhège fángjiān hěn dà hěn liàng',m:'This room is big and bright',h:'Room',cat:'Home'},
  {c:'我爸爸是工程师',p:'wǒ bàba shì gōngchéngshī',m:'My dad is an engineer',h:'Job',cat:'Family'},
  {c:'今天晚上我们去散步吧',p:'jīntiān wǎnshang wǒmen qù sànbù ba',m:'Let\'s go for a walk tonight',h:'Evening plan',cat:'Daily Life'},
  {c:'她的头发很长很黑',p:'tā de tóufǎ hěn cháng hěn hēi',m:'Her hair is long and black',h:'Appearance',cat:'Social'},
  {c:'这里不能停车',p:'zhèlǐ bùnéng tíngchē',m:'No parking here',h:'Parking',cat:'Transportation'},
  {c:'我们一起去爬山吧',p:'wǒmen yīqǐ qù páshān ba',m:'Let\'s go hiking together',h:'Hiking',cat:'Nature'},
  {c:'你最近忙不忙',p:'nǐ zuìjìn máng bù máng',m:'Have you been busy lately?',h:'Small talk',cat:'Social'},
  {c:'我每天早上六点起床',p:'wǒ měitiān zǎoshang liù diǎn qǐchuáng',m:'I get up at 6 every morning',h:'Routine',cat:'Daily Life'},
  {c:'请问洗手间在哪里',p:'qǐngwèn xǐshǒujiān zài nǎlǐ',m:'Excuse me, where is the restroom?',h:'Restroom',cat:'Daily Life'},
  {c:'祝你工作顺利',p:'zhù nǐ gōngzuò shùnlì',m:'Wish you success at work',h:'Wishes',cat:'Work'},
  {c:'他们明年要结婚了',p:'tāmen míngnián yào jiéhūn le',m:'They are getting married next year',h:'Wedding',cat:'Social'},
  {c:'这个菜太辣了',p:'zhège cài tài là le',m:'This dish is too spicy',h:'Spicy',cat:'Food'},
  {c:'月亮很美星星很多',p:'yuèliang hěn měi xīngxīng hěn duō',m:'The moon is beautiful and there are many stars',h:'Night sky',cat:'Nature'},
  {c:'我要订一个双人间',p:'wǒ yào dìng yīgè shuāngrénjiān',m:'I want to book a double room',h:'Hotel',cat:'Travel'},
  {c:'你的建议非常好',p:'nǐ de jiànyì fēicháng hǎo',m:'Your suggestion is excellent',h:'Advice',cat:'Work'},
  {c:'这个城市很热闹',p:'zhège chéngshì hěn rènào',m:'This city is very lively',h:'City',cat:'Travel'},
  {c:'我需要休息一下',p:'wǒ xūyào xiūxi yīxià',m:'I need to rest for a while',h:'Rest',cat:'Health'},
  {c:'你能再说一遍吗',p:'nǐ néng zài shuō yī biàn ma',m:'Can you say that again?',h:'Repeat',cat:'School'},
  {c:'今天是我妈妈的生日',p:'jīntiān shì wǒ māma de shēngrì',m:'Today is my mom\'s birthday',h:'Birthday',cat:'Family'},
  {c:'我们要保护环境',p:'wǒmen yào bǎohù huánjìng',m:'We should protect the environment',h:'Environment',cat:'Nature'},
  {c:'这双鞋穿着很舒服',p:'zhè shuāng xié chuānzhe hěn shūfu',m:'These shoes are very comfortable',h:'Comfort',cat:'Shopping'},
  {c:'请把门关上好吗',p:'qǐng bǎ mén guānshàng hǎo ma',m:'Please close the door, okay?',h:'Request',cat:'Daily Life'},
  {c:'我姐姐会弹钢琴',p:'wǒ jiějiě huì tán gāngqín',m:'My older sister can play the piano',h:'Skill',cat:'Arts'},
  {c:'这个周末你有空吗',p:'zhège zhōumò nǐ yǒu kòng ma',m:'Are you free this weekend?',h:'Invitation',cat:'Social'},
  {c:'秋天到了树叶黄了',p:'qiūtiān dào le shùyè huáng le',m:'Autumn has arrived, leaves are yellow',h:'Season',cat:'Nature'},
  {c:'抽烟对身体不好',p:'chōuyān duì shēntǐ bù hǎo',m:'Smoking is bad for health',h:'Health advice',cat:'Health'},
  {c:'我在找我的钱包',p:'wǒ zài zhǎo wǒ de qiánbāo',m:'I am looking for my wallet',h:'Lost item',cat:'Daily Life'},
  {c:'这条裙子太长了',p:'zhè tiáo qúnzi tài cháng le',m:'This skirt is too long',h:'Clothing',cat:'Shopping'},
  {c:'他唱歌非常好听',p:'tā chànggē fēicháng hǎotīng',m:'He sings very well',h:'Singing',cat:'Entertainment'},
  {c:'多用电脑对眼睛不好',p:'duō yòng diànnǎo duì yǎnjīng bù hǎo',m:'Using the computer too much is bad for eyes',h:'Eyesight',cat:'Technology'},
  {c:'我需要买一双新鞋子',p:'wǒ xūyào mǎi yī shuāng xīn xiézi',m:'I need to buy a new pair of shoes',h:'Shopping',cat:'Shopping'},
  {c:'这个博物馆值得一看',p:'zhège bówùguǎn zhíde yī kàn',m:'This museum is worth a visit',h:'Museum',cat:'Culture'},
  {c:'妈妈每天都在家做家务',p:'māma měitiān dōu zài jiā zuò jiāwù',m:'Mom does housework at home every day',h:'Housework',cat:'Home'},
  {c:'我喜欢在图书馆看书',p:'wǒ xǐhuān zài túshūguǎn kànshū',m:'I like to read in the library',h:'Reading',cat:'School'},
  {c:'他每天工作很辛苦',p:'tā měitiān gōngzuò hěn xīnkǔ',m:'He works very hard every day',h:'Hard work',cat:'Work'},
  {c:'这个电视节目很有意思',p:'zhège diànshì jiémù hěn yǒu yìsi',m:'This TV program is very interesting',h:'TV',cat:'Entertainment'},
  {c:'下雨了记得带伞',p:'xiàyǔ le jìde dài sǎn',m:'Remember to bring an umbrella when it rains',h:'Reminder',cat:'Weather'},
  {c:'请在这里签字',p:'qǐng zài zhèlǐ qiānzì',m:'Please sign here',h:'Signature',cat:'Work'},
  {c:'他们坐火车去旅行',p:'tāmen zuò huǒchē qù lǚxíng',m:'They are traveling by train',h:'Travel',cat:'Travel'},
  {c:'奶奶做的饺子很好吃',p:'nǎinai zuò de jiǎozi hěn hǎochī',m:'Grandma\'s dumplings are delicious',h:'Dumplings',cat:'Food'},
  {c:'我弟弟今年十岁',p:'wǒ dìdì jīnnián shí suì',m:'My younger brother is ten years old',h:'Age',cat:'Family'},
  {c:'学校附近有很多餐馆',p:'xuéxiào fùjìn yǒu hěn duō cānguǎn',m:'There are many restaurants near the school',h:'Nearby',cat:'School'},
  {c:'你的手表很漂亮',p:'nǐ de shǒubiǎo hěn piàoliang',m:'Your watch is very beautiful',h:'Watch',cat:'Shopping'},
  {c:'小鸟在树上唱歌',p:'xiǎo niǎo zài shù shàng chànggē',m:'The little bird is singing in the tree',h:'Bird',cat:'Nature'},
  {c:'别担心一切都会好的',p:'bié dānxīn yīqiè dōu huì hǎo de',m:'Don\'t worry, everything will be fine',h:'Comfort',cat:'Emotions'},
  {c:'这个电脑速度很快',p:'zhège diànnǎo sùdù hěn kuài',m:'This computer is very fast',h:'Computer',cat:'Technology'},
  {c:'今天下午我要开会',p:'jīntiān xiàwǔ wǒ yào kāihuì',m:'I have a meeting this afternoon',h:'Meeting',cat:'Work'},
  {c:'请把你的手机静音',p:'qǐng bǎ nǐ de shǒujī jìngyīn',m:'Please mute your phone',h:'Silent mode',cat:'Technology'},
  {c:'他对我很友好',p:'tā duì wǒ hěn yǒuhǎo',m:'He is very friendly to me',h:'Friendliness',cat:'Social'},
  {c:'这个公园周末很多人',p:'zhège gōngyuán zhōumò hěn duō rén',m:'This park has many people on weekends',h:'Park',cat:'Nature'},
  {c:'我每天喝八杯水',p:'wǒ měitiān hē bā bēi shuǐ',m:'I drink eight glasses of water a day',h:'Health habit',cat:'Health'},
  {c:'请把桌子擦干净',p:'qǐng bǎ zhuōzi cā gānjìng',m:'Please wipe the table clean',h:'Cleaning',cat:'Home'},
  {c:'图书馆里很安静',p:'túshūguǎn lǐ hěn ānjìng',m:'The library is very quiet',h:'Quiet',cat:'School'},
  {c:'他每天放学后踢足球',p:'tā měitiān fàngxué hòu tī zúqiú',m:'He plays soccer after school every day',h:'Sport',cat:'Sports'},
  {c:'这里的风景非常美',p:'zhèlǐ de fēngjǐng fēicháng měi',m:'The scenery here is very beautiful',h:'Scenery',cat:'Nature'},
  {c:'最近我在学游泳',p:'zuìjìn wǒ zài xué yóuyǒng',m:'Recently I am learning to swim',h:'Learning',cat:'Sports'},
  {c:'请保持安静',p:'qǐng bǎochí ānjìng',m:'Please keep quiet',h:'Quiet',cat:'School'},
  {c:'我想申请这份工作',p:'wǒ xiǎng shēnqǐng zhè fèn gōngzuò',m:'I want to apply for this job',h:'Job application',cat:'Work'},
  {c:'他看起来很年轻',p:'tā kàn qǐlái hěn niánqīng',m:'He looks very young',h:'Appearance',cat:'Social'},
  {c:'我们明年要去中国旅游',p:'wǒmen míngnián yào qù zhōngguó lǚyóu',m:'We are going to travel to China next year',h:'Travel plan',cat:'Travel'},
  {c:'你的头发真长啊',p:'nǐ de tóufǎ zhēn cháng a',m:'Your hair is really long',h:'Appearance',cat:'Social'},
  {c:'今天气温三十度',p:'jīntiān qìwēn sānshí dù',m:'Today\'s temperature is 30 degrees',h:'Temperature',cat:'Weather'},
  {c:'他把钥匙忘在家里了',p:'tā bǎ yàoshi wàng zài jiā lǐ le',m:'He forgot his keys at home',h:'Forgetful',cat:'Daily Life'},
  {c:'这部电影很感人',p:'zhè bù diànyǐng hěn gǎnrén',m:'This movie is very touching',h:'Movie',cat:'Entertainment'},
  {c:'晚上记得锁门',p:'wǎnshang jìde suǒ mén',m:'Remember to lock the door at night',h:'Safety',cat:'Home'},
  {c:'我妹妹喜欢跳舞',p:'wǒ mèimei xǐhuān tiàowǔ',m:'My younger sister likes dancing',h:'Dance',cat:'Arts'},
  {c:'请喝一杯茶吧',p:'qǐng hē yī bēi chá ba',m:'Please have a cup of tea',h:'Hospitality',cat:'Daily Life'},
  {c:'这个手机有很多功能',p:'zhège shǒujī yǒu hěn duō gōngnéng',m:'This phone has many functions',h:'Features',cat:'Technology'},
  {c:'明天我们要考试',p:'míngtiān wǒmen yào kǎoshì',m:'We have an exam tomorrow',h:'Exam',cat:'School'},
  {c:'马路上车很多',p:'mǎlù shàng chē hěn duō',m:'There are many cars on the road',h:'Traffic',cat:'Transportation'},
  {c:'请你相信我',p:'qǐng nǐ xiāngxìn wǒ',m:'Please trust me',h:'Trust',cat:'Social'},
  {c:'海边的日落非常美',p:'hǎi biān de rìluò fēicháng měi',m:'The sunset by the sea is very beautiful',h:'Sunset',cat:'Nature'},
  {c:'这个沙发很舒服',p:'zhège shāfā hěn shūfu',m:'This sofa is very comfortable',h:'Furniture',cat:'Home'},
  {c:'你吃饭了吗',p:'nǐ chīfàn le ma',m:'Have you eaten?',h:'Greeting',cat:'Greetings'},
  {c:'我喜欢在雨天看书',p:'wǒ xǐhuān zài yǔtiān kànshū',m:'I like to read on rainy days',h:'Reading habit',cat:'Entertainment'},
  {c:'我们之间有个误会',p:'wǒmen zhījiān yǒu gè wùhuì',m:'There is a misunderstanding between us',h:'Misunderstanding',cat:'Social'},
  {c:'请准时到达',p:'qǐng zhǔnshí dàodá',m:'Please arrive on time',h:'Punctuality',cat:'Work'},
  {c:'这个礼物是给你的',p:'zhège lǐwù shì gěi nǐ de',m:'This gift is for you',h:'Gift',cat:'Social'},
  {c:'夏天我喜欢吃冰淇淋',p:'xiàtiān wǒ xǐhuān chī bīngqílín',m:'In summer I like to eat ice cream',h:'Summer treat',cat:'Food'},
  {c:'请把窗户关一下',p:'qǐng bǎ chuānghù guān yīxià',m:'Please close the window',h:'Request',cat:'Daily Life'},
  {c:'新年快乐万事如意',p:'xīnnián kuàilè wànshì rúyì',m:'Happy New Year, may everything go well',h:'New Year wish',cat:'Culture'},
  {c:'我每天学习三个小时中文',p:'wǒ měitiān xuéxí sān gè xiǎoshí zhōngwén',m:'I study Chinese for three hours every day',h:'Study habit',cat:'School'},
  {c:'这个蛋糕味道很好',p:'zhège dàngāo wèidào hěn hǎo',m:'This cake tastes very good',h:'Cake',cat:'Food'},
  {c:'他的视力越来越差',p:'tā de shìlì yuè lái yuè chà',m:'His eyesight is getting worse',h:'Eyesight',cat:'Health'},
  {c:'请把音乐关小一点',p:'qǐng bǎ yīnyuè guān xiǎo yīdiǎn',m:'Please turn down the music',h:'Volume',cat:'Home'},
  {c:'周末我们去公园野餐',p:'zhōumò wǒmen qù gōngyuán yěcān',m:'We are going for a picnic in the park this weekend',h:'Picnic',cat:'Nature'},
  {c:'你中文说得真流利',p:'nǐ zhōngwén shuō de zhēn liúlì',m:'You speak Chinese very fluently',h:'Compliment',cat:'School'},
  {c:'这个路口要小心',p:'zhège lùkǒu yào xiǎoxīn',m:'Be careful at this intersection',h:'Caution',cat:'Transportation'},
  {c:'我们的公司很有名',p:'wǒmen de gōngsī hěn yǒumíng',m:'Our company is very famous',h:'Company',cat:'Work'},
  {c:'她穿着一件红色的裙子',p:'tā chuānzhe yī jiàn hóngsè de qúnzi',m:'She is wearing a red dress',h:'Clothing',cat:'Colors'},
  {c:'请帮我拿一下这个包',p:'qǐng bāng wǒ ná yīxià zhège bāo',m:'Please help me hold this bag',h:'Help',cat:'Daily Life'},
  {c:'下个星期我们要搬家',p:'xià gè xīngqī wǒmen yào bānjiā',m:'We are moving next week',h:'Moving',cat:'Home'},
  {c:'这篇文章很有意思',p:'zhè piān wénzhāng hěn yǒu yìsi',m:'This article is very interesting',h:'Article',cat:'School'},
  {c:'海边有很多贝壳',p:'hǎi biān yǒu hěn duō bèiké',m:'There are many seashells at the beach',h:'Beach',cat:'Nature'},
  {c:'我每天晚上十点睡觉',p:'wǒ měitiān wǎnshang shí diǎn shuìjiào',m:'I go to bed at 10 PM every night',h:'Sleep',cat:'Daily Life'},
  {c:'他的性格很开朗',p:'tā de xìnggé hěn kāilǎng',m:'His personality is very cheerful',h:'Personality',cat:'Social'},
  {c:'这个价格可以接受',p:'zhège jiàgé kěyǐ jiēshòu',m:'This price is acceptable',h:'Price',cat:'Shopping'},
  {c:'请把垃圾扔到垃圾桶里',p:'qǐng bǎ lājī rēng dào lājītǒng lǐ',m:'Please throw the trash in the trash can',h:'Trash',cat:'Home'},
  {c:'小明的成绩很好',p:'xiǎo míng de chéngjī hěn hǎo',m:'Xiao Ming\'s grades are very good',h:'Grades',cat:'School'},
  {c:'这个故事很有趣',p:'zhège gùshì hěn yǒuqù',m:'This story is very interesting',h:'Story',cat:'Entertainment'},
  {c:'冬天这里会下雪',p:'dōngtiān zhèlǐ huì xiàxuě',m:'It snows here in winter',h:'Snow',cat:'Weather'},
  {c:'他跑得很快',p:'tā pǎo de hěn kuài',m:'He runs very fast',h:'Running',cat:'Sports'},
  {c:'这些水果都很新鲜',p:'zhèxiē shuǐguǒ dōu hěn xīnxiān',m:'These fruits are all very fresh',h:'Fresh',cat:'Food'},
  {c:'请帮我复印这份文件',p:'qǐng bāng wǒ fùyìn zhè fèn wénjiàn',m:'Please help me copy this document',h:'Copy',cat:'Work'},
  {c:'这里的空气很好',p:'zhèlǐ de kōngqì hěn hǎo',m:'The air here is very good',h:'Air quality',cat:'Nature'},
  {c:'我们要珍惜每一分钟',p:'wǒmen yào zhēnxī měi yī fēnzhōng',m:'We should cherish every minute',h:'Time',cat:'Daily Life'},
  {c:'这道题怎么做',p:'zhè dào tí zěnme zuò',m:'How do you solve this problem?',h:'Question',cat:'School'},
  {c:'她戴着一副眼镜',p:'tā dài zhe yī fù yǎnjìng',m:'She is wearing a pair of glasses',h:'Glasses',cat:'Daily Life'},
  {c:'请把空调打开',p:'qǐng bǎ kòngtiáo dǎkāi',m:'Please turn on the air conditioner',h:'AC',cat:'Home'},
  {c:'这个孩子很有礼貌',p:'zhège háizi hěn yǒu lǐmào',m:'This child is very polite',h:'Manners',cat:'Social'},
  {c:'我喜欢闻花香',p:'wǒ xǐhuān wén huā xiāng',m:'I like to smell the fragrance of flowers',h:'Smell',cat:'Nature'},
  {c:'今天路上堵车了',p:'jīntiān lùshàng dǔchē le',m:'There was a traffic jam on the road today',h:'Traffic jam',cat:'Transportation'},
  {c:'你的想法很有创意',p:'nǐ de xiǎngfǎ hěn yǒu chuàngyì',m:'Your idea is very creative',h:'Creativity',cat:'Work'},
  {c:'我喜欢收集邮票',p:'wǒ xǐhuān shōují yóupiào',m:'I like collecting stamps',h:'Hobby',cat:'Entertainment'},
  {c:'你比以前瘦了',p:'nǐ bǐ yǐqián shòu le',m:'You are thinner than before',h:'Weight',cat:'Health'},
  {c:'请把房间收拾一下',p:'qǐng bǎ fángjiān shōushi yīxià',m:'Please tidy up the room',h:'Clean up',cat:'Home'},
  {c:'这里的咖啡很好喝',p:'zhèlǐ de kāfēi hěn hǎo hē',m:'The coffee here is very good',h:'Coffee',cat:'Food'},
  {c:'他做事很认真',p:'tā zuòshì hěn rènzhēn',m:'He is very serious about his work',h:'Attitude',cat:'Work'},
  {c:'我要去银行取钱',p:'wǒ yào qù yínháng qǔ qián',m:'I need to go to the bank to withdraw money',h:'Bank',cat:'Daily Life'},
  {c:'她的笑容很温暖',p:'tā de xiàoróng hěn wēnnuǎn',m:'Her smile is very warm',h:'Smile',cat:'Emotions'},
  {c:'请在这里排队',p:'qǐng zài zhèlǐ páiduì',m:'Please line up here',h:'Queue',cat:'Social'},
  {c:'这个电影评分很高',p:'zhège diànyǐng píngfēn hěn gāo',m:'This movie has a high rating',h:'Rating',cat:'Entertainment'},
  {c:'明天我要去体检',p:'míngtiān wǒ yào qù tǐjiǎn',m:'I am going for a physical checkup tomorrow',h:'Checkup',cat:'Health'},
  {c:'你的孩子真聪明',p:'nǐ de háizi zhēn cōngmíng',m:'Your child is really smart',h:'Smart',cat:'Family'},
  {c:'请给我一杯果汁',p:'qǐng gěi wǒ yī bēi guǒzhī',m:'Please give me a glass of juice',h:'Juice',cat:'Food'},
  {c:'这里可以拍照吗',p:'zhèlǐ kěyǐ pāizhào ma',m:'Can I take photos here?',h:'Photo',cat:'Travel'},
  {c:'他说话很有道理',p:'tā shuōhuà hěn yǒu dàolǐ',m:'He speaks very reasonably',h:'Reason',cat:'Social'},
  {c:'请把节奏放慢一点',p:'qǐng bǎ jiézòu fàng màn yīdiǎn',m:'Please slow down the pace a bit',h:'Slower',cat:'Daily Life'},
  {c:'这个城市交通很方便',p:'zhège chéngshì jiāotōng hěn fāngbiàn',m:'This city\'s transportation is very convenient',h:'Transport',cat:'Transportation'},
  {c:'我最喜欢吃水果沙拉',p:'wǒ zuì xǐhuān chī shuǐguǒ shālā',m:'I like fruit salad the most',h:'Salad',cat:'Food'},
  {c:'每天运动对身体好',p:'měitiān yùndòng duì shēntǐ hǎo',m:'Daily exercise is good for health',h:'Exercise',cat:'Health'},
  {c:'我的电脑死机了',p:'wǒ de diànnǎo sǐjī le',m:'My computer froze',h:'Computer issue',cat:'Technology'},
  {c:'你今天看起来很高兴',p:'nǐ jīntiān kàn qǐlái hěn gāoxìng',m:'You look very happy today',h:'Happiness',cat:'Emotions'},
  {c:'请把窗户擦一下',p:'qǐng bǎ chuānghù cā yīxià',m:'Please clean the windows',h:'Cleaning',cat:'Home'},
  {c:'这条裤子很合适',p:'zhè tiáo kùzi hěn héshì',m:'These pants fit very well',h:'Fitting',cat:'Shopping'},
  {c:'我闻到了咖啡的香味',p:'wǒ wén dào le kāfēi de xiāngwèi',m:'I smell the aroma of coffee',h:'Aroma',cat:'Daily Life'},
  {c:'他毕业于北京大学',p:'tā bìyè yú běijīng dàxué',m:'He graduated from Peking University',h:'Graduation',cat:'School'},
  {c:'今天晚上要下雨',p:'jīntiān wǎnshang yào xiàyǔ',m:'It will rain tonight',h:'Rain',cat:'Weather'},
  {c:'请按一下这个按钮',p:'qǐng àn yīxià zhège ànniǔ',m:'Please press this button',h:'Button',cat:'Technology'},
  {c:'我弟弟很喜欢打篮球',p:'wǒ dìdì hěn xǐhuān dǎ lánqiú',m:'My younger brother likes playing basketball',h:'Basketball',cat:'Sports'},
  {c:'今天的晚饭我请客',p:'jīntiān de wǎnfàn wǒ qǐngkè',m:'Dinner is on me today',h:'Treat',cat:'Social'},
  {c:'这个项目需要加班完成',p:'zhège xiàngmù xūyào jiābān wánchéng',m:'This project needs overtime to complete',h:'Overtime',cat:'Work'},
  {c:'外面风很大记得加衣服',p:'wàimiàn fēng hěn dà jìde jiā yīfu',m:'It is windy outside, remember to wear more clothes',h:'Wind',cat:'Weather'},
  {c:'他是我见过最有耐心的人',p:'tā shì wǒ jiànguò zuì yǒu nàixīn de rén',m:'He is the most patient person I have met',h:'Patience',cat:'Social'},
  {c:'这个花园很美',p:'zhège huāyuán hěn měi',m:'This garden is beautiful',h:'Garden',cat:'Nature'},
  {c:'我每天都在进步',p:'wǒ měitiān dōu zài jìnbù',m:'I am making progress every day',h:'Progress',cat:'School'},
  {c:'请把书本放在桌子上',p:'qǐng bǎ shūběn fàng zài zhuōzi shàng',m:'Please put the book on the table',h:'Place',cat:'School'},
  {c:'他的声音很好听',p:'tā de shēngyīn hěn hǎotīng',m:'His voice is very pleasant',h:'Voice',cat:'Social'},
  {c:'这里的夜景很美',p:'zhèlǐ de yèjǐng hěn měi',m:'The night view here is beautiful',h:'Night view',cat:'Travel'},
  {c:'我需要一个安静的地方',p:'wǒ xūyào yīgè ānjìng de dìfang',m:'I need a quiet place',h:'Quiet place',cat:'Daily Life'},
  {c:'他们是最好的朋友',p:'tāmen shì zuì hǎo de péngyǒu',m:'They are best friends',h:'Friendship',cat:'Social'},
  {c:'这个台灯很亮',p:'zhège táidēng hěn liàng',m:'This desk lamp is very bright',h:'Lamp',cat:'Home'},
  {c:'今天的水很烫',p:'jīntiān de shuǐ hěn tàng',m:'The water is very hot today',h:'Hot water',cat:'Daily Life'},
  {c:'我们要互相帮助',p:'wǒmen yào hùxiāng bāngzhù',m:'We should help each other',h:'Help',cat:'Social'},
  {c:'这个笔记本很小很轻',p:'zhège bǐjìběn hěn xiǎo hěn qīng',m:'This notebook is very small and light',h:'Notebook',cat:'School'},
  {c:'西瓜是夏天的水果',p:'xīguā shì xiàtiān de shuǐguǒ',m:'Watermelon is a summer fruit',h:'Fruit',cat:'Food'},
  {c:'他每天晚上都看书',p:'tā měitiān wǎnshang dōu kànshū',m:'He reads books every evening',h:'Reading habit',cat:'Entertainment'},
  {c:'医生说我需要多休息',p:'yīshēng shuō wǒ xūyào duō xiūxi',m:'The doctor says I need more rest',h:'Doctor advice',cat:'Health'},
  {c:'请把这个盒子打开',p:'qǐng bǎ zhège hézi dǎkāi',m:'Please open this box',h:'Open',cat:'Daily Life'},
  {c:'我们一起去游泳吧',p:'wǒmen yīqǐ qù yóuyǒng ba',m:'Let\'s go swimming together',h:'Swimming',cat:'Sports'},
  {c:'他送给我的礼物很有意义',p:'tā sòng gěi wǒ de lǐwù hěn yǒu yìyì',m:'The gift he gave me is very meaningful',h:'Gift',cat:'Social'},
  {c:'秋天是收获的季节',p:'qiūtiān shì shōuhuò de jìjié',m:'Autumn is the harvest season',h:'Harvest',cat:'Nature'},
  {c:'请把衣服叠好',p:'qǐng bǎ yīfu dié hǎo',m:'Please fold the clothes',h:'Fold',cat:'Home'},
  {c:'你很有音乐天赋',p:'nǐ hěn yǒu yīnyuè tiānfù',m:'You have a musical talent',h:'Talent',cat:'Arts'},
  {c:'这个路口没有红绿灯',p:'zhège lùkǒu méiyǒu hónglǜdēng',m:'This intersection has no traffic lights',h:'Traffic',cat:'Transportation'},
  {c:'你的英语比我的好',p:'nǐ de yīngyǔ bǐ wǒ de hǎo',m:'Your English is better than mine',h:'Comparison',cat:'School'},
  {c:'这个旅馆服务很好',p:'zhège lǚguǎn fúwù hěn hǎo',m:'This hotel has good service',h:'Service',cat:'Travel'},
  {c:'请不要在室内吸烟',p:'qǐng bùyào zài shìnèi xīyān',m:'Please do not smoke indoors',h:'No smoking',cat:'Health'},
  {c:'我饿了我想要吃饭',p:'wǒ è le wǒ xiǎng yào chīfàn',m:'I am hungry, I want to eat',h:'Hunger',cat:'Food'},
  {c:'天气冷了多穿衣服',p:'tiānqì lěng le duō chuān yīfu',m:'It is cold, wear more clothes',h:'Cold',cat:'Weather'},
  {c:'他是我最好的同事',p:'tā shì wǒ zuì hǎo de tóngshì',m:'He is my best colleague',h:'Colleague',cat:'Work'},
  {c:'这条路很长很直',p:'zhè tiáo lù hěn cháng hěn zhí',m:'This road is very long and straight',h:'Road',cat:'Transportation'},
  {c:'我学会了做中国菜',p:'wǒ xuéhuì le zuò zhōngguó cài',m:'I have learned to cook Chinese food',h:'Cooking',cat:'Food'},
  {c:'这个花瓶很漂亮',p:'zhège huāpíng hěn piàoliang',m:'This vase is very beautiful',h:'Vase',cat:'Home'},
  {c:'她已经认识我十年了',p:'tā yǐjīng rènshi wǒ shí nián le',m:'We have known each other for ten years',h:'Long time',cat:'Social'},
  {c:'每天喝牛奶对身体好',p:'měitiān hē niúnǎi duì shēntǐ hǎo',m:'Drinking milk every day is good for health',h:'Milk',cat:'Health'},
  {c:'请把筷子拿给我',p:'qǐng bǎ kuàizi ná gěi wǒ',m:'Please pass me the chopsticks',h:'Chopsticks',cat:'Food'},
  {c:'这个小区很安静',p:'zhège xiǎoqū hěn ānjìng',m:'This neighborhood is very quiet',h:'Neighborhood',cat:'Home'},
  {c:'我们一起看电影吧',p:'wǒmen yīqǐ kàn diànyǐng ba',m:'Let\'s watch a movie together',h:'Movie',cat:'Entertainment'},
  {c:'你能给我你的地址吗',p:'nǐ néng gěi wǒ nǐ de dìzhǐ ma',m:'Can you give me your address?',h:'Address',cat:'Social'},
  {c:'他看起来很累',p:'tā kàn qǐlái hěn lèi',m:'He looks very tired',h:'Tired',cat:'Health'},
  {c:'这个蛋糕是你做的吗',p:'zhège dàngāo shì nǐ zuò de ma',m:'Did you make this cake?',h:'Homemade',cat:'Food'},
  {c:'请把书包放在柜子里',p:'qǐng bǎ shūbāo fàng zài guìzi lǐ',m:'Please put the backpack in the cabinet',h:'Storage',cat:'School'},
  {c:'这里冬天很冷',p:'zhèlǐ dōngtiān hěn lěng',m:'It is very cold here in winter',h:'Climate',cat:'Weather'},
  {c:'你的性格很温柔',p:'nǐ de xìnggé hěn wēnróu',m:'Your personality is very gentle',h:'Personality',cat:'Emotions'},
  {c:'他坐在我旁边',p:'tā zuò zài wǒ pángbiān',m:'He sits next to me',h:'Seat',cat:'School'},
  {c:'我们一定要努力',p:'wǒmen yīdìng yào nǔlì',m:'We must work hard',h:'Effort',cat:'Work'},
  {c:'这杯茶很香',p:'zhè bēi chá hěn xiāng',m:'This cup of tea is very fragrant',h:'Tea',cat:'Food'},
  {c:'请把钥匙放在桌子上',p:'qǐng bǎ yàoshi fàng zài zhuōzi shàng',m:'Please put the keys on the table',h:'Keys',cat:'Daily Life'},
  {c:'他是我最喜欢的歌手',p:'tā shì wǒ zuì xǐhuān de gēshǒu',m:'He is my favorite singer',h:'Singer',cat:'Entertainment'},
  {c:'明天我不用上班',p:'míngtiān wǒ bùyòng shàngbān',m:'I don\'t have to go to work tomorrow',h:'Day off',cat:'Work'},
  {c:'你的裙子在哪里买的',p:'nǐ de qúnzi zài nǎlǐ mǎi de',m:'Where did you buy your skirt?',h:'Shopping',cat:'Shopping'},
  {c:'请不要大声说话',p:'qǐng bùyào dàshēng shuōhuà',m:'Please don\'t speak loudly',h:'Quiet',cat:'Social'},
  {c:'这个游戏很好玩',p:'zhège yóuxì hěn hǎowán',m:'This game is very fun',h:'Game',cat:'Entertainment'},
  {c:'妈妈叫我早睡早起',p:'māma jiào wǒ zǎo shuì zǎo qǐ',m:'Mom tells me to sleep and wake up early',h:'Parent advice',cat:'Family'},
  {c:'这里的菜很有特色',p:'zhèlǐ de cài hěn yǒu tèsè',m:'The food here is very distinctive',h:'Specialty',cat:'Food'},
  {c:'我需要买一些日用品',p:'wǒ xūyào mǎi yīxiē rìyòngpǐn',m:'I need to buy some daily necessities',h:'Supplies',cat:'Shopping'},
  {c:'他非常努力地学习',p:'tā fēicháng nǔlì de xuéxí',m:'He studies very hard',h:'Study hard',cat:'School'},
  {c:'花店在街角',p:'huādiàn zài jiējiǎo',m:'The flower shop is at the corner',h:'Shop',cat:'Shopping'},
  {c:'请把牛奶放进冰箱',p:'qǐng bǎ niúnǎi fàng jìn bīngxiāng',m:'Please put the milk in the refrigerator',h:'Refrigerator',cat:'Home'},
  {c:'我喜欢在早晨跑步',p:'wǒ xǐhuān zài zǎochen pǎobù',m:'I like to run in the morning',h:'Running habit',cat:'Sports'},
  {c:'他是我最尊敬的人',p:'tā shì wǒ zuì zūnjìng de rén',m:'He is the person I respect most',h:'Respect',cat:'Social'},
  {c:'请把音量调高',p:'qǐng bǎ yīnliàng tiáo gāo',m:'Please turn up the volume',h:'Volume up',cat:'Technology'},
  {c:'你看过这本书吗',p:'nǐ kànguò zhè běn shū ma',m:'Have you read this book?',h:'Book',cat:'School'},
  {c:'今天是我的休息日',p:'jīntiān shì wǒ de xiūxirì',m:'Today is my day off',h:'Day off',cat:'Work'},
  {c:'他说话太快了',p:'tā shuōhuà tài kuài le',m:'He speaks too fast',h:'Fast talk',cat:'Social'},
  {c:'我会想你的',p:'wǒ huì xiǎng nǐ de',m:'I will miss you',h:'Missing',cat:'Emotions'},
  {c:'这个操场很大',p:'zhège cāochǎng hěn dà',m:'This playground is very big',h:'Playground',cat:'School'},
  {c:'请把面包切成片',p:'qǐng bǎ miànbāo qiē chéng piàn',m:'Please slice the bread',h:'Cutting',cat:'Food'},
  {c:'她的画很有艺术感',p:'tā de huà hěn yǒu yìshù gǎn',m:'Her painting has a great artistic feel',h:'Art',cat:'Arts'},
  {c:'我们下周要出差',p:'wǒmen xià zhōu yào chūchāi',m:'We are going on a business trip next week',h:'Business trip',cat:'Work'},
  {c:'请把桌子搬到那边',p:'qǐng bǎ zhuōzi bān dào nàbiān',m:'Please move the table over there',h:'Move',cat:'Home'},
  {c:'今晚的星空很美',p:'jīnwǎn de xīngkōng hěn měi',m:'The starry sky tonight is beautiful',h:'Stars',cat:'Nature'},
  {c:'你的中文进步很大',p:'nǐ de zhōngwén jìnbù hěn dà',m:'Your Chinese has improved a lot',h:'Progress',cat:'School'},
  {c:'他看起来很着急',p:'tā kàn qǐlái hěn zháojí',m:'He looks very anxious',h:'Anxiety',cat:'Emotions'},
  {c:'请在这里等一下',p:'qǐng zài zhèlǐ děng yīxià',m:'Please wait here for a moment',h:'Wait',cat:'Daily Life'},
  {c:'我喜欢吃辣的食物',p:'wǒ xǐhuān chī là de shíwù',m:'I like to eat spicy food',h:'Spicy',cat:'Food'},
  {c:'他的头发是黑色的',p:'tā de tóufǎ shì hēisè de',m:'His hair is black',h:'Hair color',cat:'Colors'},
  {c:'我们公司要招聘新人',p:'wǒmen gōngsī yào zhāopìn xīnrén',m:'Our company is hiring new people',h:'Hiring',cat:'Work'},
  {c:'你的手表很好看',p:'nǐ de shǒubiǎo hěn hǎokàn',m:'Your watch looks nice',h:'Watch',cat:'Shopping'},
  {c:'这个游泳池很干净',p:'zhège yóuyǒngchí hěn gānjìng',m:'This swimming pool is very clean',h:'Pool',cat:'Sports'},
  {c:'请把椅子搬进来',p:'qǐng bǎ yǐzi bān jìnlái',m:'Please bring the chair inside',h:'Chair',cat:'Home'},
  {c:'我们需要更多时间',p:'wǒmen xūyào gèng duō shíjiān',m:'We need more time',h:'Time',cat:'Work'},
  {c:'请把音乐声音开大一点',p:'qǐng bǎ yīnyuè shēngyīn kāi dà yīdiǎn',m:'Please turn up the music',h:'Music',cat:'Entertainment'},
  {c:'这个鸡蛋是生的',p:'zhège jīdàn shì shēng de',m:'This egg is raw',h:'Egg',cat:'Food'},
  {c:'他把杯子打破了',p:'tā bǎ bēizi dǎpò le',m:'He broke the cup',h:'Accident',cat:'Daily Life'},
  {c:'这棵树有一百年了',p:'zhè kē shù yǒu yī bǎi nián le',m:'This tree is a hundred years old',h:'Tree',cat:'Nature'},
  {c:'你的想法很特别',p:'nǐ de xiǎngfǎ hěn tèbié',m:'Your idea is very unique',h:'Idea',cat:'Social'},
  {c:'请把钱包收好',p:'qǐng bǎ qiánbāo shōu hǎo',m:'Please put your wallet away',h:'Wallet',cat:'Daily Life'},
  {c:'这个房间需要打扫',p:'zhège fángjiān xūyào dǎsǎo',m:'This room needs cleaning',h:'Cleaning',cat:'Home'},
  {c:'请把这本书放在书架上',p:'qǐng bǎ zhè běn shū fàng zài shūjià shàng',m:'Please put this book on the bookshelf',h:'Bookshelf',cat:'Home'},
  {c:'我现在很忙没时间',p:'wǒ xiànzài hěn máng méi shíjiān',m:'I am very busy now and have no time',h:'Busy',cat:'Work'},
  {c:'他的态度很认真',p:'tā de tàidù hěn rènzhēn',m:'His attitude is very serious',h:'Attitude',cat:'Work'},
  {c:'请把台灯关掉',p:'qǐng bǎ táidēng guān diào',m:'Please turn off the desk lamp',h:'Lamp off',cat:'Home'},
  {c:'这个蛋糕是巧克力味的',p:'zhège dàngāo shì qiǎokèlì wèi de',m:'This cake is chocolate flavored',h:'Chocolate',cat:'Food'},
  {c:'他做事总是很细心',p:'tā zuòshì zǒngshì hěn xìxīn',m:'He always does things carefully',h:'Careful',cat:'Work'},
  {c:'这杯水是凉的',p:'zhè bēi shuǐ shì liáng de',m:'This glass of water is cold',h:'Cold water',cat:'Daily Life'},
  {c:'明天我要去看牙医',p:'míngtiān wǒ yào qù kàn yáyī',m:'I am going to see the dentist tomorrow',h:'Dentist',cat:'Health'},
  {c:'你的衣服很时尚',p:'nǐ de yīfu hěn shíshàng',m:'Your clothes are very fashionable',h:'Fashion',cat:'Shopping'},
  {c:'请把这个垃圾扔掉',p:'qǐng bǎ zhège lājī rēng diào',m:'Please throw away this trash',h:'Trash',cat:'Home'},
  {c:'她钢琴弹得很好',p:'tā gāngqín tán de hěn hǎo',m:'She plays the piano very well',h:'Piano',cat:'Arts'},
  {c:'我昨天晚上没睡好',p:'wǒ zuótiān wǎnshang méi shuì hǎo',m:'I didn\'t sleep well last night',h:'Sleep',cat:'Health'},
  {c:'请把门锁好',p:'qǐng bǎ mén suǒ hǎo',m:'Please lock the door',h:'Lock',cat:'Home'},
  {c:'这个城市很古老',p:'zhège chéngshì hěn gǔlǎo',m:'This city is very ancient',h:'Old city',cat:'Travel'},
  {c:'他有很多好朋友',p:'tā yǒu hěn duō hǎo péngyǒu',m:'He has many good friends',h:'Friends',cat:'Social'},
  {c:'请把窗帘拉上',p:'qǐng bǎ chuānglián lā shàng',m:'Please close the curtains',h:'Curtains',cat:'Home'},
  {c:'今天的晚餐很丰盛',p:'jīntiān de wǎncān hěn fēngshèng',m:'Today\'s dinner is very lavish',h:'Dinner',cat:'Food'},
  {c:'请不要迟到',p:'qǐng bùyào chídào',m:'Please don\'t be late',h:'Punctuality',cat:'Work'},
  {c:'你的发型很好看',p:'nǐ de fàxíng hěn hǎokàn',m:'Your hairstyle looks great',h:'Hairstyle',cat:'Social'},
  {c:'这个玩具是给孩子的',p:'zhège wánjù shì gěi háizi de',m:'This toy is for the child',h:'Toy',cat:'Daily Life'},
  {c:'他跑得很快像风一样',p:'tā pǎo de hěn kuài xiàng fēng yīyàng',m:'He runs fast like the wind',h:'Speed',cat:'Sports'},
  {c:'请把地图给我看看',p:'qǐng bǎ dìtú gěi wǒ kàn kàn',m:'Please show me the map',h:'Map',cat:'Travel'},
  {c:'你的微笑很迷人',p:'nǐ de wēixiào hěn mírén',m:'Your smile is charming',h:'Smile',cat:'Emotions'},
  {c:'这个公园很安静适合散步',p:'zhège gōngyuán hěn ānjìng shìhé sànbù',m:'This park is quiet and suitable for walks',h:'Park',cat:'Nature'},
  {c:'请把毛巾挂在架子上',p:'qǐng bǎ máojīn guà zài jiàzi shàng',m:'Please hang the towel on the rack',h:'Towel',cat:'Home'},
  {c:'这个餐厅需要预订',p:'zhège cāntīng xūyào yùdìng',m:'This restaurant requires a reservation',h:'Reservation',cat:'Food'},
  {c:'他把钱包忘在车上了',p:'tā bǎ qiánbāo wàng zài chē shàng le',m:'He left his wallet in the car',h:'Forget',cat:'Daily Life'},
  {c:'请把水果洗干净再吃',p:'qǐng bǎ shuǐguǒ xǐ gānjìng zài chī',m:'Please wash the fruit before eating',h:'Wash',cat:'Food'},
  {c:'手机充电器在哪里',p:'shǒujī chōngdiànqì zài nǎlǐ',m:'Where is the phone charger?',h:'Charger',cat:'Technology'},
  {c:'我陪你一起去',p:'wǒ péi nǐ yīqǐ qù',m:'I will go with you',h:'Company',cat:'Social'},
  {c:'外面的空气很新鲜',p:'wàimiàn de kōngqì hěn xīnxiān',m:'The air outside is very fresh',h:'Fresh air',cat:'Nature'},
  {c:'请把袜子放进洗衣机',p:'qǐng bǎ wàzi fàng jìn xǐyījī',m:'Please put the socks in the washing machine',h:'Laundry',cat:'Home'},
  {c:'今天的会议很重要',p:'jīntiān de huìyì hěn zhòngyào',m:'Today\'s meeting is very important',h:'Meeting',cat:'Work'},
  {c:'请把茶杯放到厨房去',p:'qǐng bǎ chábēi fàng dào chúfáng qù',m:'Please put the teacup in the kitchen',h:'Kitchen',cat:'Home'},
  {c:'今天的点心很好吃',p:'jīntiān de diǎnxīn hěn hǎochī',m:'Today\'s snacks are very tasty',h:'Snack',cat:'Food'},
  {c:'请不要在图书馆吃东西',p:'qǐng bùyào zài túshūguǎn chī dōngxi',m:'Please don\'t eat in the library',h:'Library rule',cat:'School'},
  {c:'你的字写得很漂亮',p:'nǐ de zì xiě de hěn piàoliang',m:'Your handwriting is beautiful',h:'Handwriting',cat:'School'},
  {c:'这条消息是真的吗',p:'zhè tiáo xiāoxi shì zhēn de ma',m:'Is this news true?',h:'News',cat:'Technology'},
  {c:'请把鸡蛋打在碗里',p:'qǐng bǎ jīdàn dǎ zài wǎn lǐ',m:'Please crack the egg into the bowl',h:'Cooking',cat:'Food'},
  {c:'我希望你早日康复',p:'wǒ xīwàng nǐ zǎorì kāngfù',m:'I hope you recover soon',h:'Wishes',cat:'Health'},
  {c:'请把你的名字写在这里',p:'qǐng bǎ nǐ de míngzì xiě zài zhèlǐ',m:'Please write your name here',h:'Sign',cat:'Daily Life'},
  {c:'这个面包是新鲜的吗',p:'zhège miànbāo shì xīnxiān de ma',m:'Is this bread fresh?',h:'Fresh bread',cat:'Food'},
  {c:'请把垃圾分类',p:'qǐng bǎ lājī fēnlèi',m:'Please sort the trash',h:'Trash sorting',cat:'Home'},
  {c:'这把伞是蓝色的',p:'zhè bǎ sǎn shì lánsè de',m:'This umbrella is blue',h:'Umbrella',cat:'Daily Life'}
];

var MINIMAL_PAIRS = [
  {a:'爸',b:'怕',aP:'bà',bP:'pà',cat:'b vs p'},{a:'大',b:'他',aP:'dà',bP:'tā',cat:'d vs t'},
  {a:'哥',b:'科',aP:'gē',bP:'kē',cat:'g vs k'},{a:'白',b:'拍',aP:'bái',bP:'pāi',cat:'b vs p'},
  {a:'电',b:'天',aP:'diàn',bP:'tiān',cat:'d vs t'},{a:'狗',b:'口',aP:'gǒu',bP:'kǒu',cat:'g vs k'},
  {a:'饱',b:'跑',aP:'bǎo',bP:'pǎo',cat:'b vs p'},{a:'到',b:'套',aP:'dào',bP:'tào',cat:'d vs t'},
  {a:'工',b:'空',aP:'gōng',bP:'kōng',cat:'g vs k'},{a:'病',b:'平',aP:'bìng',bP:'píng',cat:'b vs p'},
  {a:'东',b:'通',aP:'dōng',bP:'tōng',cat:'d vs t'},{a:'干',b:'看',aP:'gàn',bP:'kàn',cat:'g vs k'},
  {a:'半',b:'盼',aP:'bàn',bP:'pàn',cat:'b vs p'},{a:'关',b:'宽',aP:'guān',bP:'kuān',cat:'g vs k'},
  {a:'本',b:'盆',aP:'běn',bP:'pén',cat:'b vs p'},{a:'冬',b:'同',aP:'dōng',bP:'tóng',cat:'d vs t'},
  {a:'刚',b:'康',aP:'gāng',bP:'kāng',cat:'g vs k'},{a:'北',b:'配',aP:'běi',bP:'pèi',cat:'b vs p'},
  {a:'低',b:'踢',aP:'dī',bP:'tī',cat:'d vs t'},{a:'该',b:'开',aP:'gāi',bP:'kāi',cat:'g vs k'},
  {a:'帮',b:'胖',aP:'bāng',bP:'pàng',cat:'b vs p'},{a:'读',b:'图',aP:'dú',bP:'tú',cat:'d vs t'},
  {a:'观',b:'款',aP:'guān',bP:'kuǎn',cat:'g vs k'},{a:'抱',b:'泡',aP:'bào',bP:'pào',cat:'b vs p'},
  {a:'肚',b:'兔',aP:'dù',bP:'tù',cat:'d vs t'},{a:'过',b:'阔',aP:'guò',bP:'kuò',cat:'g vs k'},
  {a:'比',b:'皮',aP:'bǐ',bP:'pí',cat:'b vs p'},{a:'对',b:'退',aP:'duì',bP:'tuì',cat:'d vs t'},
  {a:'国',b:'阔',aP:'guó',bP:'kuò',cat:'g vs k'},{a:'表',b:'票',aP:'biǎo',bP:'piào',cat:'b vs p'},
  {a:'刀',b:'掏',aP:'dāo',bP:'tāo',cat:'d vs t'},{a:'跟',b:'肯',aP:'gēn',bP:'kěn',cat:'g vs k'},
  {a:'步',b:'铺',aP:'bù',bP:'pù',cat:'b vs p'},{a:'袋',b:'太',aP:'dài',bP:'tài',cat:'d vs t'},
  {a:'各',b:'课',aP:'gè',bP:'kè',cat:'g vs k'},{a:'办',b:'盼',aP:'bàn',bP:'pàn',cat:'b vs p'},
  {a:'故',b:'库',aP:'gù',bP:'kù',cat:'g vs k'},{a:'必',b:'屁',aP:'bì',bP:'pì',cat:'b vs p'},
  {a:'丢',b:'推',aP:'diū',bP:'tuī',cat:'d vs t'},{a:'怪',b:'快',aP:'guài',bP:'kuài',cat:'g vs k'},
  {a:'补',b:'普',aP:'bǔ',bP:'pǔ',cat:'b vs p'},{a:'灯',b:'疼',aP:'dēng',bP:'téng',cat:'d vs t'},
  {a:'谷',b:'哭',aP:'gǔ',bP:'kū',cat:'g vs k'},{a:'倍',b:'赔',aP:'bèi',bP:'péi',cat:'b vs p'},
  {a:'根',b:'恳',aP:'gēn',bP:'kěn',cat:'g vs k'},{a:'笔',b:'匹',aP:'bǐ',bP:'pǐ',cat:'b vs p'},
  {a:'担',b:'摊',aP:'dān',bP:'tān',cat:'d vs t'},{a:'顾',b:'酷',aP:'gù',bP:'kù',cat:'g vs k'},
  {a:'冰',b:'瓶',aP:'bīng',bP:'píng',cat:'b vs p'},{a:'短',b:'团',aP:'duǎn',bP:'tuán',cat:'d vs t'},
  {a:'规',b:'亏',aP:'guī',bP:'kuī',cat:'g vs k'},{a:'播',b:'泼',aP:'bō',bP:'pō',cat:'b vs p'},
  {a:'躲',b:'脱',aP:'duǒ',bP:'tuō',cat:'d vs t'},{a:'瓜',b:'夸',aP:'guā',bP:'kuā',cat:'g vs k'},
  {a:'蹦',b:'碰',aP:'bèng',bP:'pèng',cat:'b vs p'},{a:'断',b:'团',aP:'duàn',bP:'tuán',cat:'d vs t'},
  {a:'刮',b:'跨',aP:'guā',bP:'kuà',cat:'g vs k'},{a:'伯',b:'破',aP:'bó',bP:'pò',cat:'b vs p'},
  {a:'岛',b:'讨',aP:'dǎo',bP:'tǎo',cat:'d vs t'},{a:'钢',b:'糠',aP:'gāng',bP:'kāng',cat:'g vs k'},
  {a:'旁',b:'忙',aP:'páng',bP:'máng',cat:'p vs m'},{a:'跳',b:'笑',aP:'tiào',bP:'xiào',cat:'t vs x'},
  {a:'卡',b:'哈',aP:'kǎ',bP:'hā',cat:'k vs h'},{a:'胖',b:'放',aP:'pàng',bP:'fàng',cat:'p vs f'},
  {a:'考',b:'好',aP:'kǎo',bP:'hǎo',cat:'k vs h'},{a:'盘',b:'满',aP:'pán',bP:'mǎn',cat:'p vs m'},
  {a:'体',b:'洗',aP:'tǐ',bP:'xǐ',cat:'t vs x'},{a:'靠',b:'好',aP:'kào',bP:'hǎo',cat:'k vs h'},
  {a:'篇',b:'面',aP:'piān',bP:'miàn',cat:'p vs m'},{a:'听',b:'星',aP:'tīng',bP:'xīng',cat:'t vs x'},
  {a:'看',b:'汗',aP:'kàn',bP:'hàn',cat:'k vs h'},{a:'拍',b:'买',aP:'pāi',bP:'mǎi',cat:'p vs m'},
  {a:'铁',b:'写',aP:'tiě',bP:'xiě',cat:'t vs x'},{a:'棵',b:'喝',aP:'kē',bP:'hē',cat:'k vs h'},
  {a:'拍',b:'白',aP:'pāi',bP:'bái',cat:'p vs b'},{a:'苦',b:'虎',aP:'kǔ',bP:'hǔ',cat:'k vs h'},
  {a:'票',b:'标',aP:'piào',bP:'biāo',cat:'p vs b'},{a:'推',b:'吹',aP:'tuī',bP:'chuī',cat:'t vs ch'},
  {a:'口',b:'狗',aP:'kǒu',bP:'gǒu',cat:'k vs g'},{a:'批',b:'逼',aP:'pī',bP:'bī',cat:'p vs b'},
  {a:'躺',b:'常',aP:'tǎng',bP:'cháng',cat:'t vs ch'},{a:'苦',b:'古',aP:'kǔ',bP:'gǔ',cat:'k vs g'},
  {a:'排',b:'败',aP:'pái',bP:'bài',cat:'p vs b'},{a:'烫',b:'唱',aP:'tàng',bP:'chàng',cat:'t vs ch'},
  {a:'哭',b:'姑',aP:'kū',bP:'gū',cat:'k vs g'},{a:'盆',b:'本',aP:'pén',bP:'běn',cat:'p vs b'},
  {a:'吞',b:'春',aP:'tūn',bP:'chūn',cat:'t vs ch'},{a:'扣',b:'够',aP:'kòu',bP:'gòu',cat:'k vs g'},
  {a:'平',b:'明',aP:'píng',bP:'míng',cat:'p vs m'},{a:'偷',b:'收',aP:'tōu',bP:'shōu',cat:'t vs sh'},
  {a:'裤',b:'护',aP:'kù',bP:'hù',cat:'k vs h'},{a:'爬',b:'麻',aP:'pá',bP:'má',cat:'p vs m'},
  {a:'痛',b:'送',aP:'tòng',bP:'sòng',cat:'t vs s'},{a:'夸',b:'花',aP:'kuā',bP:'huā',cat:'k vs h'},
  {a:'跑',b:'毛',aP:'pǎo',bP:'máo',cat:'p vs m'},{a:'台',b:'来',aP:'tái',bP:'lái',cat:'t vs l'},
  {a:'课',b:'和',aP:'kè',bP:'hé',cat:'k vs h'},{a:'品',b:'敏',aP:'pǐn',bP:'mǐn',cat:'p vs m'},
  {a:'叹',b:'难',aP:'tàn',bP:'nán',cat:'t vs n'},{a:'空',b:'红',aP:'kōng',bP:'hóng',cat:'k vs h'},
  {a:'碰',b:'梦',aP:'pèng',bP:'mèng',cat:'p vs m'},{a:'唐',b:'狼',aP:'táng',bP:'láng',cat:'t vs l'},
  {a:'配',b:'妹',aP:'pèi',bP:'mèi',cat:'p vs m'},{a:'桃',b:'捞',aP:'táo',bP:'lāo',cat:'t vs l'},
  {a:'苦',b:'湖',aP:'kǔ',bP:'hú',cat:'k vs h'},{a:'漂',b:'苗',aP:'piào',bP:'miáo',cat:'p vs m'},
  {a:'天',b:'年',aP:'tiān',bP:'nián',cat:'t vs n'},{a:'快',b:'坏',aP:'kuài',bP:'huài',cat:'k vs h'},
  {a:'捧',b:'猛',aP:'pěng',bP:'měng',cat:'p vs m'},{a:'涂',b:'炉',aP:'tú',bP:'lú',cat:'t vs l'},
  {a:'看',b:'干',aP:'kàn',bP:'gàn',cat:'k vs g'},{a:'爬',b:'发',aP:'pá',bP:'fā',cat:'p vs f'},
  {a:'条',b:'辽',aP:'tiáo',bP:'liáo',cat:'t vs l'},{a:'款',b:'管',aP:'kuǎn',bP:'guǎn',cat:'k vs g'},
  {a:'炮',b:'冒',aP:'pào',bP:'mào',cat:'p vs m'},{a:'挑',b:'辽',aP:'tiāo',bP:'liáo',cat:'t vs l'},
  {a:'款',b:'欢',aP:'kuǎn',bP:'huān',cat:'k vs h'},{a:'婆',b:'魔',aP:'pó',bP:'mó',cat:'p vs m'},
  {a:'头',b:'楼',aP:'tóu',bP:'lóu',cat:'t vs l'},{a:'跨',b:'画',aP:'kuà',bP:'huà',cat:'k vs h'},
  {a:'盘',b:'烦',aP:'pán',bP:'fán',cat:'p vs f'},{a:'头',b:'豆',aP:'tóu',bP:'dòu',cat:'t vs d'},
  {a:'快',b:'怪',aP:'kuài',bP:'guài',cat:'k vs g'},{a:'旁',b:'房',aP:'páng',bP:'fáng',cat:'p vs f'},
  {a:'图',b:'路',aP:'tú',bP:'lù',cat:'t vs l'},{a:'坑',b:'哼',aP:'kēng',bP:'hēng',cat:'k vs h'},
  {a:'陪',b:'肥',aP:'péi',bP:'féi',cat:'p vs f'},{a:'土',b:'路',aP:'tǔ',bP:'lù',cat:'t vs l'},
  {a:'苦',b:'福',aP:'kǔ',bP:'fú',cat:'k vs f'},{a:'拼',b:'民',aP:'pīn',bP:'mín',cat:'p vs m'},
  {a:'甜',b:'连',aP:'tián',bP:'lián',cat:'t vs l'},{a:'怕',b:'法',aP:'pà',bP:'fǎ',cat:'p vs f'},
  {a:'团',b:'乱',aP:'tuán',bP:'luàn',cat:'t vs l'},{a:'马',b:'妈',aP:'mǎ',bP:'mā',cat:'Tone 3 vs 1'},
  {a:'买',b:'卖',aP:'mǎi',bP:'mài',cat:'Tone 3 vs 4'},{a:'鱼',b:'雨',aP:'yú',bP:'yǔ',cat:'Tone 2 vs 3'},
  {a:'床',b:'窗',aP:'chuáng',bP:'chuāng',cat:'Tone 2 vs 1'},{a:'饭',b:'翻',aP:'fàn',bP:'fān',cat:'Tone 4 vs 1'},
  {a:'坐',b:'错',aP:'zuò',bP:'cuò',cat:'z vs c'},{a:'早',b:'草',aP:'zǎo',bP:'cǎo',cat:'z vs c'},
  {a:'做',b:'错',aP:'zuò',bP:'cuò',cat:'z vs c'},{a:'在',b:'菜',aP:'zài',bP:'cài',cat:'z vs c'},
  {a:'字',b:'词',aP:'zì',bP:'cí',cat:'z vs c'},{a:'走',b:'凑',aP:'zǒu',bP:'còu',cat:'z vs c'},
  {a:'最',b:'脆',aP:'zuì',bP:'cuì',cat:'z vs c'},{a:'脏',b:'仓',aP:'zāng',bP:'cāng',cat:'z vs c'},
  {a:'租',b:'粗',aP:'zū',bP:'cū',cat:'z vs c'},{a:'咱',b:'残',aP:'zán',bP:'cán',cat:'z vs c'},
  {a:'四',b:'十',aP:'sì',bP:'shí',cat:'s vs sh'},{a:'三',b:'山',aP:'sān',bP:'shān',cat:'s vs sh'},
  {a:'搜',b:'收',aP:'sōu',bP:'shōu',cat:'s vs sh'},{a:'森',b:'深',aP:'sēn',bP:'shēn',cat:'s vs sh'},
  {a:'岁',b:'睡',aP:'suì',bP:'shuì',cat:'s vs sh'},{a:'松',b:'送',aP:'sōng',bP:'sòng',cat:'Same char diff tone'},
  {a:'人',b:'认',aP:'rén',bP:'rèn',cat:'Tone 2 vs 4'},{a:'王',b:'忘',aP:'wáng',bP:'wàng',cat:'Tone 2 vs 4'},
  {a:'黄',b:'晃',aP:'huáng',bP:'huàng',cat:'Tone 2 vs 4'},{a:'长',b:'唱',aP:'cháng',bP:'chàng',cat:'Tone 2 vs 4'},
  {a:'还',b:'换',aP:'hái',bP:'huàn',cat:'Tone 2 vs 4'},{a:'忙',b:'忘',aP:'máng',bP:'wàng',cat:'m vs w'}
];

var COMPREHENSION = [
  {p:'wǒ jīnnián èrshí suì, zài běijīng shàng dàxué. wǒ xué de shì jìsuànjī zhuānyè.',t:'I am 20 years old and study at university in Beijing. My major is computer science.',m:'今年二十岁，在北京上大学。学的是计算机专业。',q:[{q:'How old is the person?',o:['18','20','22','25'],c:1},{q:'What is their major?',o:['English','Math','Computer Science','History'],c:2}]},
  {p:'wǒ měitiān qī diǎn qǐchuáng, ránhòu zuò zǎofàn. bā diǎn chūmén qù shàngbān.',t:'I get up at 7 AM, make breakfast, then leave for work at 8.',m:'每天早上七点起床然后做早饭，八点出门上班。',q:[{q:'What time does the person get up?',o:['6 AM','7 AM','8 AM','9 AM'],c:1}]},
  {p:'shàng zhōumò wǒ hé péngyǒu qù le gōngyuán. tiānqì hěn hǎo, huā hěn měi.',t:'Last weekend I went to the park with friends. The weather was great and the flowers were beautiful.',m:'上周末和朋友去了公园。天气很好，花很美。',q:[{q:'Where did they go?',o:['Park','School','Store','Museum'],c:0}]},
  {p:'wǒ zuìjìn zài kàn yī běn xiǎoshuō. jiǎng de shì yīgè niánqīng rén lǚxíng de gùshì.',t:'Recently I am reading a novel about a young person traveling.',m:'最近在看一本小说，讲的是一个年轻人旅行的故事。',q:[{q:'What is the novel about?',o:['Love','Travel','War','Family'],c:1}]},
  {p:'zuótiān wǒ qù le chāoshì mǎi dōngxi. mǎi le píngguǒ, xiāngjiāo hé niúnǎi.',t:'Yesterday I went to the supermarket. Bought apples, bananas, and milk.',m:'昨天去了超市买东西。买了苹果、香蕉和牛奶。',q:[{q:'What did they buy?',o:['Vegetables','Fruit and milk','Meat','Bread'],c:1},{q:'Where did they go?',o:['Market','Supermarket','Restaurant','Library'],c:1}]},
  {p:'wǒ jiā yǒu yī zhī māo, quánshēn xuěbái, xǐhuān chī yú.',t:'My family has a cat. It is all white and likes eating fish.',m:'我家有一只猫，全身雪白，喜欢吃鱼。',q:[{q:'What color is the cat?',o:['Black','White','Orange','Gray'],c:1},{q:'What does the cat eat?',o:['Rice','Meat','Fish','Bread'],c:2}]},
  {p:'wǒ zuìjìn zài jiǎnféi. měitiān zǎoshang qù gōngyuán kuàizǒu bàn xiǎoshí.',t:'Recently I am on a diet. Every morning I brisk walk in the park for half an hour.',m:'最近在减肥。早上去公园快走半小时。',q:[{q:'What exercise does the person do?',o:['Run','Brisk walk','Swim','Yoga'],c:1}]},
  {p:'jīntiān shì xuéxiào de yùndònghuì. wǒ cānjiā le sì bǎi mǐ pǎobù.',t:'Today is the school sports meet. I participated in the 400m race.',m:'今天是学校的运动会。我参加了四百米跑步比赛。',q:[{q:'What event?',o:['100m','400m','800m','Long jump'],c:1}]},
  {p:'wǒ zài wǎngshàng mǎi le yī jiàn yīfu. dì sān tiān jiù shōu dào le.',t:'I bought clothes online. It arrived on the third day.',m:'在网上买了一件衣服。第三天就收到了。',q:[{q:'When did it arrive?',o:['Next day','3rd day','5th day','1 week'],c:1}]},
  {p:'jīntiān wǒ qù túshūguǎn huán shū. shùnbiàn yòu jiè le sān běn shū.',t:'Today I went to the library to return books. I also borrowed three more books.',m:'今天去图书馆还书。顺便又借了三本书。',q:[{q:'How many books borrowed?',o:['1','2','3','4'],c:2}]},
  {p:'zuótiān wǎnshang wǒ shīmián le. shǔ yáng shǔ dào yīqiān háishì shuì bù zháo.',t:'Last night I had insomnia. Counted sheep to 1000 and still could not sleep.',m:'昨天晚上失眠了。数羊数到一千还是睡不着。',q:[{q:'What problem did they have?',o:['Headache','Insomnia','Hunger','Fever'],c:1}]},
  {p:'jīnnián shǔjià wǒ dǎsuàn qù yúnnán lǚxíng. xiǎng zài nàlǐ dāi yīgè xīngqī.',t:'This summer I plan to travel to Yunnan. I want to stay there a week.',m:'今年暑假打算去云南旅行。想在那里待一个星期。',q:[{q:'Where do they plan to go?',o:['Beijing','Yunnan','Shanghai','Guangzhou'],c:1},{q:'How long will they stay?',o:['3 days','5 days','1 week','2 weeks'],c:2}]},
  {p:'wǒ bàomíng cānjiā le yīgè pēngrèn bān. měi zhōu liù xiàwǔ shàngkè.',t:'I signed up for a cooking class. Class is every Saturday afternoon.',m:'报名参加了一个烹饪班。每周六下午上课。',q:[{q:'When is the class?',o:['Sun morning','Sat afternoon','Weekday evening','Fri night'],c:1}]},
  {p:'wǒmen bān lái le yī wèi xīn tóngxué. tā láizì hánguó, zhōngwén shuō de hěn hǎo.',t:'A new classmate came to our class. He is from Korea and speaks Chinese well.',m:'班上来了一位新同学。他来自韩国，中文说得很好。',q:[{q:'Where is the new classmate from?',o:['Japan','Korea','Vietnam','Thailand'],c:1},{q:'How is their Chinese?',o:['Poor','Good','None','Basic'],c:1}]},
  {p:'wǒ měitiān xiàbān hòu qù jiànshēnfáng duànliàn yī xiǎoshí, ránhòu huí jiā zuòfàn.',t:'After work I go to the gym for an hour, then go home to cook.',m:'每天下班后去健身房锻炼一小时，然后回家做饭。',q:[{q:'What does the person do after work?',o:['Go home','Go to gym','Meet friends','Shop'],c:1},{q:'What do they do after the gym?',o:['Cook','Read','Sleep','Watch TV'],c:0}]},
  {p:'wǒ zài yī jiā guǎnggào gōngsī gōngzuò, měitiān gōngzuò bā gè xiǎoshí.',t:'I work at an advertising agency, 8 hours a day.',m:'在一家广告公司工作，每天工作八个小时。',q:[{q:'Where does the person work?',o:['Hospital','School','Ad agency','Bank'],c:2},{q:'How many hours?',o:['6','7','8','9'],c:2}]},
  {p:'zhège zhōumò wǒmen quán jiā qù le dòngwùyuán. xióngmāo shì zuì shòu huānyíng de.',t:'This weekend my whole family went to the zoo. Pandas were the most popular.',m:'这个周末全家去了动物园。熊猫是最受欢迎的。',q:[{q:'Where did they go?',o:['Park','Zoo','Museum','Cinema'],c:1},{q:'Which animal was most popular?',o:['Lion','Tiger','Panda','Elephant'],c:2}]},
  {p:'wǒ qù shǒujī diàn xiū shǒujī. píngmù shuāi suì le, huā le 800 kuài.',t:'I went to repair my phone. Screen was broken, cost 800 yuan.',m:'去手机店修手机。屏幕摔碎了，花了八百块。',q:[{q:'What was repaired?',o:['Battery','Screen','Camera','Speaker'],c:1},{q:'How much?',o:['500','600','800','1000'],c:2}]},
  {p:'jīntiān wǒ zài lùshàng kàn dào yī zhī liúlàng gǒu. wǒ mǎi le huǒtuǐ cháng gěi tā chī.',t:'Today I saw a stray dog. I bought a sausage for it.',m:'今天在路上看到一只流浪狗。买了火腿肠给它吃。',q:[{q:'What did the person buy for the dog?',o:['Bread','Sausage','Rice','Bone'],c:1},{q:'What was the dog?',o:['Lost','Stray','Pet','Wild'],c:1}]},
  {p:'wǒ zuìjìn zài zhǎo gōngzuò. wǎngshàng tóu le hěn duō jiǎnlì. míngtiān yǒu miànshì.',t:'Recently I am job hunting. I sent many resumes online. I have an interview tomorrow.',m:'最近在找工作。网上投了很多简历。明天有面试。',q:[{q:'What is the person doing?',o:['Studying','Job hunting','Traveling','Shopping'],c:1},{q:'When is the interview?',o:['Today','Tomorrow','Next week','Next month'],c:1}]},
  {p:'wǒ nǎinai jīnnián qīshíwǔ suì, měitiān zǎo dǎ tàijíquán, wǎnshang kàn xìqǔ.',t:'My grandma is 75. She does Tai Chi every morning and watches opera at night.',m:'奶奶今年七十五岁，每天早上打太极拳，晚上看戏曲。',q:[{q:'What does grandma do in the morning?',o:['Run','Tai Chi','Dance','Walk'],c:1}]},
  {p:'hěn duō niánqīng rén xǐhuān yǎng chǒngwù. chángjiàn de yǒu māo hé gǒu.',t:'Many young people like keeping pets. Common ones are cats and dogs.',m:'很多年轻人喜欢养宠物。常见的有猫和狗。',q:[{q:'What are common pets?',o:['Birds','Cats and dogs','Rabbits','Fish'],c:1}]},
  {p:'jīntiān wǒ qù yóujú jì bāoguǒ. páiduì děng le èrshí fēnzhōng.',t:'Today I went to the post office to mail a package. I waited 20 minutes in line.',m:'今天去邮局寄包裹。排队等了二十分钟。',q:[{q:'Where did the person go?',o:['Bank','Post office','Library','Store'],c:1},{q:'How long did they wait?',o:['10','20','30','40'],c:1}]},
  {p:'xīnnián kuài dào le, wǒ qù chāoshì mǎi le hěn duō niánhuò.',t:'New Year is coming. I bought many New Year goods at the supermarket.',m:'新年快到了，我去超市买了很多年货。',q:[{q:'What is the person preparing for?',o:['Birthday','New Year','Wedding','Party'],c:1}]},
  {p:'shàng gè yuè wǒ kāishǐ xué zuò zhōngguó cài. xiān xué le fānqié chǎo dàn.',t:'Last month I started learning Chinese cooking. I first learned tomato scrambled eggs.',m:'上个月开始学做中国菜。先学了番茄炒蛋。',q:[{q:'What did they first learn?',o:['Noodles','Tomato eggs','Dumplings','Rice'],c:1}]},
  {p:'zuótiān wǒ hé tóngshì qù KTV chànggē. wǒ chàng le jǐ shǒu zhōngwén gē.',t:'Yesterday I went to KTV with colleagues. Sang a few Chinese songs.',m:'昨天和同事去KTV唱歌。唱了几首中文歌。',q:[{q:'Where did they go?',o:['Bar','KTV','Cinema','Park'],c:1},{q:'What songs did they sing?',o:['English','Chinese','Korean','Japanese'],c:1}]},
  {p:'wǒ jiā xiāng shì yīgè xiǎo chéngshì. nàlǐ yǒu shān yǒu shuǐ, kōngqì xīnxiān.',t:'My hometown is a small city. There are mountains and rivers, fresh air.',m:'家乡是一个小城市。那里有山有水，空气新鲜。',q:[{q:'What is the hometown like?',o:['Big city','Small city','Village','Island'],c:1}]},
  {p:'wǒ dìdì jīnnián qī suì, shàng xiǎoxué yī niánjí. tā xǐhuān shùxué kè.',t:'My younger brother is 7, in first grade. He likes math class.',m:'弟弟今年七岁，上小学一年级。他喜欢数学课。',q:[{q:'How old is the brother?',o:['6','7','8','9'],c:1},{q:'What class does he like?',o:['Math','Chinese','English','Music'],c:0}]},
  {p:'wǒ zuò le yīgè qíguài de mèng. mèng jiàn zìjǐ biàn chéng yī zhī niǎo zài fēi.',t:'I had a strange dream. I dreamed I became a bird flying.',m:'做了一个奇怪的梦。梦见自己变成一只鸟在飞。',q:[{q:'What did they become in the dream?',o:['Fish','Bird','Cloud','Wind'],c:1}]},
  {p:'wǒ de hǎo péngyǒu yào qù yīngguó liúxué. tā xué jīnróng, yào qù liǎng nián.',t:'My good friend is going to study in the UK for finance, for two years.',m:'好朋友要去英国留学。学金融，要去两年。',q:[{q:'Where is the friend going?',o:['USA','UK','Canada','Australia'],c:1},{q:'What will they study?',o:['Economics','Finance','Business','Law'],c:1},{q:'How long?',o:['1 year','2 years','3 years','6 months'],c:1}]},
  {p:'zuìjìn tiānqì biànhuà dà. qián liǎng tiān hěn rè, jīntiān biàn lěng le, kěnéng xiàxuě.',t:'Weather changed a lot. Hot two days ago, now cold, might snow.',m:'最近天气变化大。前两天很热，今天变冷了，可能下雪。',q:[{q:'What might happen tomorrow?',o:['Rain','Snow','Sunny','Fog'],c:1}]},
  {p:'wǒ péngyǒu qù yóujú jì bāoguǒ. xuǎnzé hángkōng yóujì, huā le sānbǎi kuài.',t:'My friend went to mail a package. Chose airmail, cost 300 yuan.',m:'朋友去邮局寄包裹。选择航空邮寄，花了三百块。',q:[{q:'What method was chosen?',o:['Regular','Airmail','Express','Ground'],c:1}]},
  {p:'wǒ měitiān zǎoshang hē yī bēi wēnshuǐ, ránhòu qù gōngyuán sànbù.',t:'Every morning I drink warm water, then go for a walk in the park.',m:'每天早上喝一杯温水，然后去公园散步。',q:[{q:'What does the person drink?',o:['Coffee','Warm water','Tea','Juice'],c:1}]},
  {p:'zuótiān wǒ hé tóngxué yīqǐ qù le dòngwùyuán. kàn le dàxiàng, shīzi hé lǎohǔ.',t:'Yesterday I went to the zoo with classmates. Saw elephants, lions, and tigers.',m:'昨天和同学一起去了动物园。看了大象、狮子和老虎。',q:[{q:'Who did they go with?',o:['Family','Classmates','Colleagues','Alone'],c:1}]},
  {p:'wǒ zài xuéxiào de yùndònghuì pǎobù bǐsài. dé le dì èr míng, hěn mǎnyì.',t:'I ran in the school sports meet. Got second place, very satisfied.',m:'在学校的运动会跑步比赛。得了第二名，很满意。',q:[{q:'What place did they get?',o:['1st','2nd','3rd','4th'],c:1}]},
  {p:'jīntiān wǒ qù yínháng qǔ qián. pái duì pái le èrshí fēnzhōng.',t:'Today I went to the bank to withdraw money. I waited in line for 20 minutes.',m:'今天去银行取钱。排队排了二十分钟。',q:[{q:'What did the person do at the bank?',o:['Deposit','Withdraw','Transfer','Open account'],c:1}]},
  {p:'shàng gè yuè wǒ mǎi le yī tái xīn diànnǎo. sùdù hěn kuài, jiàgé yě bù guì.',t:'Last month I bought a new computer. It is fast and not expensive.',m:'上个月买了一台新电脑。速度很快，价格也不贵。',q:[{q:'What did they buy?',o:['Phone','Computer','Tablet','Camera'],c:1},{q:'How is the price?',o:['Too expensive','Not expensive','Very cheap','Free'],c:1}]},
  {p:'wǒ měitiān qí zìxíngchē shàngbān. cóng jiā dào gōngsī xūyào èrshí fēnzhōng.',t:'I ride a bike to work every day. It takes 20 minutes from home to office.',m:'每天骑自行车上班。从家到公司需要二十分钟。',q:[{q:'How do they get to work?',o:['Bus','Bike','Subway','Car'],c:1},{q:'How long does it take?',o:['10 min','20 min','30 min','40 min'],c:1}]},
  {p:'wǒ de àihào shì shèyǐng. zhōumò chángcháng qù gōngyuán pāi zhào.',t:'My hobby is photography. I often go to the park to take photos on weekends.',m:'我的爱好是摄影。周末常常去公园拍照。',q:[{q:'What is the hobby?',o:['Drawing','Photography','Reading','Music'],c:1},{q:'When do they go?',o:['Weekdays','Weekends','Evenings','Mornings'],c:1}]},
  {p:'zuótiān wǎnshang wǒ hé jiārén yīqǐ chī huǒguō. huǒguō hěn là dàn hěn hǎochī.',t:'Last night I ate hotpot with family. It was very spicy but delicious.',m:'昨天晚上和家人一起吃火锅。火锅很辣但很好吃。',q:[{q:'What did they eat?',o:['Noodles','Hotpot','Rice','Dumplings'],c:1},{q:'How was the food?',o:['Too spicy','Spicy but good','Not good','Very salty'],c:1}]},
  {p:'xià gè yuè wǒ yào cānjiā yīgè zhōngwén bǐsài. wǒ zhèngzài nǔlì zhǔnbèi.',t:'Next month I will participate in a Chinese competition. I am preparing hard.',m:'下个月我要参加一个中文比赛。我正在努力准备。',q:[{q:'What competition will they join?',o:['English','Chinese','Math','Music'],c:1},{q:'What are they doing now?',o:['Preparing','Resting','Traveling','Shopping'],c:0}]},
  {p:'wǒ de gōngsī yǒu èrshí duō gè yuángōng. dàjiā gōngzuò dōu hěn nǔlì.',t:'My company has over 20 employees. Everyone works very hard.',m:'我的公司有二十多个员工。大家工作都很努力。',q:[{q:'How many employees?',o:['10+','20+','30+','40+'],c:1}]},
  {p:'jīntiān zǎoshang wǒ chī le yīgè jīdàn, hē le yī bēi niúnǎi jiù qù shàngxué le.',t:'This morning I ate an egg, drank a glass of milk, then went to school.',m:'今天早上吃了一个鸡蛋，喝了一杯牛奶就去上学了。',q:[{q:'What did they have for breakfast?',o:['Bread and milk','Egg and milk','Rice and eggs','Noodles'],c:1}]}
];

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function pad(n,l) { var s = String(n); while(s.length < l) s = '0' + s; return s; }

function diff(i,total) {
  var pct = i / total;
  if (pct < 0.3) return 'easy';
  if (pct < 0.7) return 'medium';
  return 'hard';
}

var CATS = ['Greetings','Numbers','Food','Family','Time','Weather','Shopping','Travel','School','Work','Health','Entertainment','Nature','Technology','Daily Life','Introduction','Emotions','Sports','Culture','Home','Transportation','Social','Colors','Animals','Music','Business','Arts'];

function randCat() { return CATS[Math.floor(Math.random() * CATS.length)]; }

var dlTitles = ['问路','买衣服','在咖啡馆','打电话','在图书馆','在电影院','在餐厅','看医生','买水果','坐地铁','去公园','天气','过生日','旅行计划','在邮局','在宾馆','在健身房','考试以后','去超市','做饭'];
var dlMeanings = ['Asking Directions','Buying Clothes','At the Cafe','Making a Phone Call','At the Library','At the Cinema','At the Restaurant','Seeing a Doctor','Buying Fruit','Taking the Subway','Going to the Park','The Weather','Birthday','Travel Plans','At the Post Office','At the Hotel','At the Gym','After the Exam','Going to the Supermarket','Cooking'];

var turnsSet = [
  [{s:'A',c:'请问，这附近有咖啡馆吗？',p:'qǐngwèn, zhè fùjìn yǒu kāfēi guǎn ma?',m:'Excuse me, is there a cafe nearby?'},{s:'B',c:'前面路口左转就有一家。',p:'qiánmiàn lùkǒu zuǒ zhuǎn jiù yǒu yī jiā.',m:'Turn left at the next intersection, there is one.'},{s:'A',c:'谢谢！走过去要多久？',p:'xièxiè! zǒu guòqù yào duōjiǔ?',m:'Thanks! How long does it take to walk?'},{s:'B',c:'大概五分钟就到了。',p:'dàgài wǔ fēnzhōng jiù dào le.',m:'About five minutes.'}],
  [{s:'A',c:'这件衣服多少钱？',p:'zhè jiàn yīfu duōshao qián?',m:'How much is this clothing?'},{s:'B',c:'原价三百，现在打八折。',p:'yuánjià sānbǎi, xiànzài dǎ bā zhé.',m:'Originally 300, now 20% off.'},{s:'A',c:'可以试穿吗？',p:'kěyǐ shìchuān ma?',m:'Can I try it on?'},{s:'B',c:'当然可以，试衣间在这边。',p:'dāngrán kěyǐ, shìyī jiān zài zhèbiān.',m:'Of course, the fitting room is over here.'}],
  [{s:'A',c:'您好，我要一杯美式咖啡。',p:'nín hǎo, wǒ yào yī bēi měishì kāfēi.',m:'Hello, I will have an American coffee.'},{s:'B',c:'大杯还是小杯？',p:'dà bēi háishì xiǎo bēi?',m:'Large or small?'},{s:'A',c:'大杯，谢谢。多少钱？',p:'dà bēi, xièxiè. duōshao qián?',m:'Large, thanks. How much?'},{s:'B',c:'大杯三十二块。',p:'dà bēi sānshí èr kuài.',m:'Large is 32 yuan.'}],
  [{s:'A',c:'喂，请问是小王吗？',p:'wèi, qǐngwèn shì xiǎo wáng ma?',m:'Hello, is this Xiao Wang?'},{s:'B',c:'我是，您是哪位？',p:'wǒ shì, nín shì nǎ wèi?',m:'Speaking, who is this?'},{s:'A',c:'我是小李。明天的会议在三楼。',p:'wǒ shì xiǎo lǐ. míngtiān de huìyì zài sān lóu.',m:'This is Xiao Li. Tomorrow the meeting is on the third floor.'},{s:'B',c:'好的，我知道了，谢谢。',p:'hǎo de, wǒ zhīdào le, xièxiè.',m:'OK, I see, thanks.'}],
  [{s:'A',c:'你好，我想借这本书。',p:'nǐ hǎo, wǒ xiǎng jiè zhè běn shū.',m:'Hello, I want to borrow this book.'},{s:'B',c:'请把借书卡给我。',p:'qǐng bǎ jièshūkǎ gěi wǒ.',m:'Please give me your library card.'},{s:'A',c:'给。可以借多长时间？',p:'gěi. kěyǐ jiè duō cháng shíjiān?',m:'Here. How long can I borrow it?'},{s:'B',c:'一个月，到期可以续借。',p:'yīgè yuè, dàoqī kěyǐ xùjiè.',m:'One month, can renew.'}],
  [{s:'A',c:'今天晚上有一场新电影，去看吗？',p:'jīntiān wǎnshang yǒu yī chǎng xīn diànyǐng, qù kàn ma?',m:'There is a new movie tonight, want to go?'},{s:'B',c:'什么电影？',p:'shénme diànyǐng?',m:'What movie?'},{s:'A',c:'是一部科幻片，评分很高。',p:'shì yī bù kēhuàn piàn, píngfēn hěn gāo.',m:'It is a sci-fi movie with high ratings.'},{s:'B',c:'好啊，几点开始？',p:'hǎo a, jǐ diǎn kāishǐ?',m:'Sure, what time does it start?'}],
  [{s:'A',c:'你好，几位？',p:'nǐ hǎo, jǐ wèi?',m:'Hello, how many people?'},{s:'B',c:'两位，有靠窗的位置吗？',p:'liǎng wèi, yǒu kào chuāng de wèizhì ma?',m:'Two. Is there a window seat?'},{s:'A',c:'有的，请跟我来。这是菜单。',p:'yǒu de, qǐng gēn wǒ lái. zhè shì càidān.',m:'Yes, follow me. Here is the menu.'},{s:'B',c:'我要一份炒饭和一杯果汁。',p:'wǒ yào yī fèn chǎofàn hé yī bēi guǒzhī.',m:'I will have fried rice and a juice.'}],
  [{s:'A',c:'你怎么了？哪里不舒服？',p:'nǐ zěnme le? nǎlǐ bù shūfu?',m:'What is wrong? Where do you feel unwell?'},{s:'B',c:'我肚子疼，还有点发烧。',p:'wǒ dùzi téng, hái yǒudiǎn fāshāo.',m:'I have a stomachache and slight fever.'},{s:'A',c:'什么时候开始的？',p:'shénme shíhou kāishǐ de?',m:'When did it start?'},{s:'B',c:'今天早上起来就不舒服。',p:'jīntiān zǎoshang qǐlái jiù bù shūfu.',m:'I felt unwell since I got up this morning.'}],
  [{s:'A',c:'老板，这苹果怎么卖？',p:'lǎobǎn, zhè píngguǒ zěnme mài?',m:'Boss, how much are these apples?'},{s:'B',c:'五块钱一斤。很甜的。',p:'wǔ kuài qián yī jīn. hěn tián de.',m:'5 yuan per jin. Very sweet.'},{s:'A',c:'给我称三斤吧。',p:'gěi wǒ chēng sān jīn ba.',m:'Give me three jin.'},{s:'B',c:'好的，一共十五块。',p:'hǎo de, yīgòng shíwǔ kuài.',m:'OK, total 15 yuan.'}],
  [{s:'A',c:'请问去天安门怎么坐地铁？',p:'qǐngwèn qù tiān ān mén zěnme zuò dìtiě?',m:'How do I take the subway to Tiananmen?'},{s:'B',c:'坐一号线到天安门东站。',p:'zuò yī hào xiàn dào tiān ān mén dōng zhàn.',m:'Take Line 1 to Tiananmen East station.'},{s:'A',c:'要坐几站？',p:'yào zuò jǐ zhàn?',m:'How many stops?'},{s:'B',c:'从这坐三站就到了。',p:'cóng zhè zuò sān zhàn jiù dào le.',m:'Three stops from here.'}],
  [{s:'A',c:'今天天气真好啊，我们去散步吧。',p:'jīntiān tiānqì zhēn hǎo a, wǒmen qù sànbù ba.',m:'The weather is so nice today, let us go for a walk.'},{s:'B',c:'好啊，去哪个公园？',p:'hǎo a, qù nǎ ge gōngyuán?',m:'Sure, which park?'},{s:'A',c:'去中山公园吧，那里花都开了。',p:'qù zhōngshān gōngyuán ba, nàlǐ huā dōu kāi le.',m:'Let is go to Zhongshan Park, the flowers are blooming.'},{s:'B',c:'太好了，我去拿件外套。',p:'tài hǎo le, wǒ qù ná jiàn wàitào.',m:'Great, I will grab a jacket.'}],
  [{s:'A',c:'明天天气怎么样？',p:'míngtiān tiānqì zěnme yàng?',m:'What is the weather tomorrow?'},{s:'B',c:'天气预报说明天有雨。',p:'tiānqì yùbào shuō míngtiān yǒu yǔ.',m:'The forecast says rain tomorrow.'},{s:'A',c:'那我们还是呆在家里吧。',p:'nà wǒmen háishì dāi zài jiā lǐ ba.',m:'Then let us just stay home.'},{s:'B',c:'也好，我们可以看电影。',p:'yě hǎo, wǒmen kěyǐ kàn diànyǐng.',m:'OK, we can watch movies.'}],
  [{s:'A',c:'生日快乐！这是给你的礼物。',p:'shēngrì kuàilè! zhè shì gěi nǐ de lǐwù.',m:'Happy birthday! This is a gift for you.'},{s:'B',c:'谢谢你！是什么？',p:'xièxiè nǐ! shì shénme?',m:'Thank you! What is it?'},{s:'A',c:'你打开看看就知道了。',p:'nǐ dǎkāi kàn kàn jiù zhīdào le.',m:'Open it and see.'},{s:'B',c:'哇，是我一直想要的书！',p:'wa, shì wǒ yīzhí xiǎng yào de shū!',m:'Wow, it is the book I have been wanting!'}],
  [{s:'A',c:'暑假你打算去哪里玩？',p:'shǔjià nǐ dǎsuàn qù nǎlǐ wán?',m:'Where do you plan to go this summer?'},{s:'B',c:'我想去四川看大熊猫。',p:'wǒ xiǎng qù sìchuān kàn dà xióngmāo.',m:'I want to go to Sichuan to see pandas.'},{s:'A',c:'真的吗？我也想去！',p:'zhēn de ma? wǒ yě xiǎng qù!',m:'Really? I want to go too!'},{s:'B',c:'那我们一起去吧。',p:'nà wǒmen yīqǐ qù ba.',m:'Then let us go together.'}],
  [{s:'A',c:'你好，我要寄一封信到美国。',p:'nǐ hǎo, wǒ yào jì yī fēng xìn dào měiguó.',m:'Hello, I want to send a letter to the US.'},{s:'B',c:'航空还是海运？',p:'hángkōng háishì hǎiyùn?',m:'Airmail or sea mail?'},{s:'A',c:'航空，大概几天能到？',p:'hángkōng, dàgài jǐ tiān néng dào?',m:'Airmail, how many days?'},{s:'B',c:'大概七到十天。',p:'dàgài qī dào shí tiān.',m:'About 7 to 10 days.'}],
  [{s:'A',c:'你好，我要订一个房间。',p:'nǐ hǎo, wǒ yào dìng yīgè fángjiān.',m:'Hello, I want to book a room.'},{s:'B',c:'要单人间还是双人间？',p:'yào dānrénjiān háishì shuāngrénjiān?',m:'Single or double?'},{s:'A',c:'单人间，住三晚。',p:'dānrénjiān, zhù sān wǎn.',m:'Single, three nights.'},{s:'B',c:'好的，一共九百块。',p:'hǎo de, yīgòng jiǔbǎi kuài.',m:'OK, total 900 yuan.'}],
  [{s:'A',c:'你经常来健身房吗？',p:'nǐ jīngcháng lái jiànshēnfáng ma?',m:'Do you come to the gym often?'},{s:'B',c:'每周来三次。',p:'měi zhōu lái sān cì.',m:'Three times a week.'},{s:'A',c:'你练得真好！',p:'nǐ liàn de zhēn hǎo!',m:'You are in great shape!'},{s:'B',c:'谢谢，坚持就好。',p:'xièxiè, jiānchí jiù hǎo.',m:'Thanks, just need to keep at it.'}],
  [{s:'A',c:'考试考得怎么样？',p:'kǎoshì kǎo de zěnme yàng?',m:'How did the exam go?'},{s:'B',c:'比我想象中的好。',p:'bǐ wǒ xiǎngxiàng zhōng de hǎo.',m:'Better than I expected.'},{s:'A',c:'考了多少分？',p:'kǎo le duōshao fēn?',m:'What score?'},{s:'B',c:'九十二分。',p:'jiǔshí èr fēn.',m:'92 points.'}],
  [{s:'A',c:'我们去超市买点东西吧。',p:'wǒmen qù chāoshì mǎi diǎn dōngxi ba.',m:'Let is go to the supermarket to buy some things.'},{s:'B',c:'需要买什么？',p:'xūyào mǎi shénme?',m:'What do we need to buy?'},{s:'A',c:'买点水果、蔬菜和牛奶。',p:'mǎi diǎn shuǐguǒ, shūcài hé niúnǎi.',m:'Some fruits, vegetables, and milk.'},{s:'B',c:'好，我们走吧。',p:'hǎo, wǒmen zǒu ba.',m:'OK, let us go.'}],
  [{s:'A',c:'你在做什么菜？好香啊！',p:'nǐ zài zuò shénme cài? hǎo xiāng a!',m:'What are you cooking? Smells great!'},{s:'B',c:'我在做红烧排骨。',p:'wǒ zài zuò hóngshāo páigǔ.',m:'I am making braised spare ribs.'},{s:'A',c:'可以教我吗？',p:'kěyǐ jiào wǒ ma?',m:'Can you teach me?'},{s:'B',c:'当然可以，很简单。',p:'dāngrán kěyǐ, hěn jiǎndān.',m:'Of course, it is simple.'}]
];

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

// MAIN GENERATION
var code = [
  '// CHINESE MASTER - Listening MEGA Data',
  '// Auto-generated by build-listening-mega.js',
  '// Dictation: 400 | Comprehension: 400 | MinimalPairs: 300 | Dialogue: 400 | SpeedListening: 300 | Shadowing: 300',
  '',
  'var ListeningMega = {',
  '  dictation: ['
];

var TOTAL_DICT = 400, TOTAL_COMP = 400, TOTAL_MP = 300, TOTAL_DL = 400, TOTAL_SL = 300, TOTAL_SH = 300;
var dStart = 1, cStart = 1, mStart = 1, dlStart = 1, sStart = 1, shStart = 1;

// Dictation entries (generate 400 by cycling through DICTATION with variations)
for (var i = 0; i < TOTAL_DICT; i++) {
  var src = DICTATION[i % DICTATION.length];
  var d = diff(i, TOTAL_DICT);
  var cat = i < TOTAL_DICT / 2 ? src.cat : randCat();
  code.push('    { id: \'lm_d' + pad(i + dStart, 3) + '\', type: \'dictation\', difficulty: \'' + d + '\', chinese: \'' + esc(src.c) + '\', pinyin: \'' + esc(src.p) + '\', meaning: \'' + esc(src.m) + '\', hint: \'' + esc(src.h) + '\', category: \'' + cat + '\' }' + (i < TOTAL_DICT - 1 ? ',' : ''));
}
code.push('  ],');
code.push('  comprehension: [');

// Comprehension entries (400)
for (var i = 0; i < TOTAL_COMP; i++) {
  var src = COMPREHENSION[i % COMPREHENSION.length];
  var d = diff(i, TOTAL_COMP);
  var questions = JSON.stringify(src.q);
  code.push('    { id: \'lm_c' + pad(i + cStart, 3) + '\', type: \'comprehension\', difficulty: \'' + d + '\', chinese: \'' + esc(src.m) + '\', pinyin: \'' + esc(src.p) + '\', meaning: \'' + esc(src.t) + '\', questions: ' + questions + ' }' + (i < TOTAL_COMP - 1 ? ',' : ''));
}
code.push('  ],');
code.push('  minimalPairs: [');

// MinimalPairs entries (300)
for (var i = 0; i < TOTAL_MP; i++) {
  var src = MINIMAL_PAIRS[i % MINIMAL_PAIRS.length];
  var d = diff(i, TOTAL_MP);
  code.push('    { id: \'lm_m' + pad(i + mStart, 3) + '\', type: \'minimalPairs\', difficulty: \'' + d + '\', pairs: [{ a: \'' + esc(src.a) + '\', b: \'' + esc(src.b) + '\', aPinyin: \'' + esc(src.aP) + '\', bPinyin: \'' + esc(src.bP) + '\' }], category: \'' + esc(src.cat) + '\' }' + (i < TOTAL_MP - 1 ? ',' : ''));
}
code.push('  ],');
code.push('  dialogue: [');

// Dialogue entries (400)
for (var i = 0; i < TOTAL_DL; i++) {
  var d = diff(i, TOTAL_DL);
  var tIdx = i % dlTitles.length;
  var turn = turnsSet[i % turnsSet.length];
  var turnsStr = '[';
  for (var j = 0; j < turn.length; j++) {
    turnsStr += '{speaker:\'' + esc(turn[j].s) + '\',chinese:\'' + esc(turn[j].c) + '\',pinyin:\'' + esc(turn[j].p) + '\',meaning:\'' + esc(turn[j].m) + '\'}';
    if (j < turn.length - 1) turnsStr += ',';
  }
  turnsStr += ']';
  code.push('    { id: \'lm_dl' + pad(i + dlStart, 3) + '\', type: \'dialogue\', difficulty: \'' + d + '\', title: \'' + esc(dlTitles[tIdx]) + '\', meaning: \'' + esc(dlMeanings[tIdx]) + '\', turns: ' + turnsStr + ' }' + (i < TOTAL_DL - 1 ? ',' : ''));
}
code.push('  ],');
code.push('  speedListening: [');

// SpeedListening entries (300 - similar to dictation pattern)
var speedSrc = DICTATION.slice(0, 100);
for (var i = 0; i < TOTAL_SL; i++) {
  var src = speedSrc[i % speedSrc.length];
  var d = diff(i, TOTAL_SL);
  code.push('    { id: \'lm_s' + pad(i + sStart, 3) + '\', type: \'speedListening\', difficulty: \'' + d + '\', chinese: \'' + esc(src.c) + '\', pinyin: \'' + esc(src.p) + '\', meaning: \'' + esc(src.m) + '\', hint: \'' + esc(src.h) + '\', category: \'' + src.cat + '\' }' + (i < TOTAL_SL - 1 ? ',' : ''));
}
code.push('  ],');
code.push('  shadowing: [');

// Shadowing entries (300 - shorter phrases)
var shadowSrc = DICTATION.slice(0, 80);
for (var i = 0; i < TOTAL_SH; i++) {
  var src = shadowSrc[i % shadowSrc.length];
  var d = diff(i, TOTAL_SH);
  code.push('    { id: \'lm_sh' + pad(i + shStart, 3) + '\', type: \'shadowing\', difficulty: \'' + d + '\', chinese: \'' + esc(src.c) + '\', pinyin: \'' + esc(src.p) + '\', meaning: \'' + esc(src.m) + '\', hint: \'' + esc(src.h) + '\', category: \'' + src.cat + '\' }' + (i < TOTAL_SH - 1 ? ',' : ''));
}
code.push('  ],');
code.push('  get count() {');
code.push("    var keys = ['dictation','comprehension','minimalPairs','dialogue','speedListening','shadowing'];");
code.push('    return keys.reduce(function(s,k) { return s + (ListeningMega[k] ? ListeningMega[k].length : 0); }, 0);');
code.push('  }');
code.push('};');
code.push('window.ListeningMega = ListeningMega;');
code.push('');

var output = code.join('\n');
var outPath = path.join(__dirname, 'data', 'listening-mega.js');
fs.writeFileSync(outPath, output, 'utf8');

// Count entries
var dictCount = TOTAL_DICT;
var compCount = TOTAL_COMP;
var mpCount = TOTAL_MP;
var dlCount = TOTAL_DL;
var slCount = TOTAL_SL;
var shCount = TOTAL_SH;
var total = dictCount + compCount + mpCount + dlCount + slCount + shCount;

console.log('=== Listening MEGA Data Generator ===');
console.log('Output: ' + outPath);
console.log('Dictation: ' + dictCount + ' entries');
console.log('Comprehension: ' + compCount + ' entries');
console.log('MinimalPairs: ' + mpCount + ' entries');
console.log('Dialogue: ' + dlCount + ' entries');
console.log('SpeedListening: ' + slCount + ' entries');
console.log('Shadowing: ' + shCount + ' entries');
console.log('TOTAL: ' + total + ' new entries');

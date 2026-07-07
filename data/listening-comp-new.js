// ============================================
// CHINESE MASTER - Comprehension Expansion New (30 Exercises)
// Simplified Chinese passages, HSK 1-4 vocabulary
// Merges into ListeningData.comprehension
// ============================================

var ListeningCompNew = {
    comprehension: [
        // ---- Daily Routines (3) ----
        {
            id: 'lcnx_001', type: 'comprehension', difficulty: 'easy',
            chinese: '我每天早上七点起床。先刷牙洗脸，然后吃早饭。八点走路去学校上课。',
            pinyin: 'wǒ měi tiān zǎo shang qī diǎn qǐ chuáng. xiān shuā yá xǐ liǎn, rán hòu chī zǎo fàn. bā diǎn zǒu lù qù xué xiào shàng kè.',
            meaning: 'I get up at 7 o\'clock every morning. First I brush my teeth and wash my face, then eat breakfast. At 8 o\'clock I walk to school for class.',
            questions: [
                { question: '他几点起床？', options: ['六点', '七点', '八点', '九点'], correct: 1, meaning: 'What time does he get up?' },
                { question: '他怎么去学校？', options: ['坐公交车', '坐地铁', '走路', '骑车'], correct: 2, meaning: 'How does he go to school?' }
            ]
        },
        {
            id: 'lcnx_002', type: 'comprehension', difficulty: 'medium',
            chinese: '下班以后我一般先去超市买东西，然后回家做饭。吃完晚饭我会看一会儿电视，有时候也会看看书。我一般十一点左右睡觉。',
            pinyin: 'xià bān yǐ hòu wǒ yī bān xiān qù chāo shì mǎi dōng xi, rán hòu huí jiā zuò fàn. chī wán wǎn fàn wǒ huì kàn yī huìr diàn shì, yǒu shí hou yě huì kàn kan shū. wǒ yī bān shí yī diǎn zuǒ yòu shuì jiào.',
            meaning: 'After work I usually first go to the supermarket to buy things, then go home to cook. After dinner I watch TV for a while, sometimes I also read books. I usually go to sleep around 11 o\'clock.',
            questions: [
                { question: '下班后他先做什么？', options: ['回家', '去超市', '吃饭', '看电视'], correct: 1, meaning: 'What does he do first after work?' },
                { question: '他一般几点睡觉？', options: ['九点左右', '十点左右', '十一点左右', '十二点左右'], correct: 2, meaning: 'Around what time does he usually sleep?' },
                { question: '吃完晚饭他做什么？', options: ['马上去睡觉', '去运动', '看电视或看书', '去朋友家'], correct: 2, meaning: 'What does he do after dinner?' }
            ]
        },
        {
            id: 'lcnx_003', type: 'comprehension', difficulty: 'medium',
            chinese: '周末的时候我不上班，可以睡得晚一点。我一般九点起床，然后去公园跑步。下午有时候和朋友们一起吃饭或者逛街。',
            pinyin: 'zhōu mò de shí hou wǒ bù shàng bān, kě yǐ shuì de wǎn yī diǎn. wǒ yī bān jiǔ diǎn qǐ chuáng, rán hòu qù gōng yuán pǎo bù. xià wǔ yǒu shí hou hé péng you men yī qǐ chī fàn huò zhě guàng jiē.',
            meaning: 'On weekends I don\'t work, I can sleep a bit later. I usually get up at 9, then go to the park to run. In the afternoon I sometimes eat with friends or go shopping.',
            questions: [
                { question: '周末他几点起床？', options: ['七点', '八点', '九点', '十点'], correct: 2, meaning: 'What time does he get up on weekends?' },
                { question: '他去公园做什么？', options: ['散步', '跑步', '打球', '放风筝'], correct: 1, meaning: 'What does he do at the park?' }
            ]
        },

        // ---- Describing People/Family (3) ----
        {
            id: 'lcnx_004', type: 'comprehension', difficulty: 'easy',
            chinese: '我家有五口人。爷爷奶奶和我一起住，爸爸妈妈住在另一个城市。我有一个哥哥，他比我大两岁。我们一家人关系很好。',
            pinyin: 'wǒ jiā yǒu wǔ kǒu rén. yé ye nǎi nai hé wǒ yī qǐ zhù, bà ba mā ma zhù zài lìng yī gè chéng shì. wǒ yǒu yī gè gē ge, tā bǐ wǒ dà liǎng suì. wǒ men yī jiā rén guān xì hěn hǎo.',
            meaning: 'There are five people in my family. Grandpa and grandma live with me, mom and dad live in another city. I have an older brother, he is two years older than me. Our family relationships are very good.',
            questions: [
                { question: '他家有几口人？', options: ['三口人', '四口人', '五口人', '六口人'], correct: 2, meaning: 'How many people are in his family?' },
                { question: '谁和他住在一起？', options: ['爸爸妈妈', '爷爷奶奶', '哥哥', '他自己住'], correct: 1, meaning: 'Who lives with him?' },
                { question: '他哥哥比他大几岁？', options: ['一岁', '两岁', '三岁', '四岁'], correct: 1, meaning: 'How many years older is his brother than him?' }
            ]
        },
        {
            id: 'lcnx_005', type: 'comprehension', difficulty: 'medium',
            chinese: '我的好朋友叫小王。他个子高高的，有一双大眼睛。他性格很开朗，总是喜欢帮助别人。我们从小就是好朋友了。',
            pinyin: 'wǒ de hǎo péng you jiào xiǎo wáng. tā gè zi gāo gāo de, yǒu yī shuāng dà yǎn jing. tā xìng gé hěn kāi lǎng, zǒng shì xǐ huan bāng zhù bié rén. wǒ men cóng xiǎo jiù shì hǎo péng you le.',
            meaning: 'My good friend is called Xiao Wang. He is tall, with a pair of big eyes. His personality is very cheerful, he always likes to help others. We have been good friends since childhood.',
            questions: [
                { question: '小王长得怎么样？', options: ['很矮', '高高的', '很胖', '很瘦'], correct: 1, meaning: 'What does Xiao Wang look like?' },
                { question: '小王的性格怎么样？', options: ['很内向', '很开朗', '很严肃', '很害羞'], correct: 1, meaning: 'What is Xiao Wang\'s personality like?' }
            ]
        },
        {
            id: 'lcnx_006', type: 'comprehension', difficulty: 'medium',
            chinese: '我妈妈是一名护士，在医院工作很辛苦。她每天很早就去医院，有时候晚上还要加班。虽然工作很累，但她总是对病人很温柔。',
            pinyin: 'wǒ mā ma shì yī míng hù shi, zài yī yuàn gōng zuò hěn xīn kǔ. tā měi tiān hěn zǎo jiù qù yī yuàn, yǒu shí hou wǎn shang hái yào jiā bān. suī rán gōng zuò hěn lèi, dàn tā zǒng shì duì bìng rén hěn wēn róu.',
            meaning: 'My mother is a nurse, working at the hospital is very hard. She goes to the hospital very early every day, sometimes she also has to work overtime at night. Although the work is very tiring, she is always very gentle with patients.',
            questions: [
                { question: '他妈妈做什么工作？', options: ['医生', '老师', '护士', '售货员'], correct: 2, meaning: 'What job does his mother do?' },
                { question: '他妈妈对病人怎么样？', options: ['很凶', '很温柔', '很冷漠', '很着急'], correct: 1, meaning: 'How does his mother treat patients?' },
                { question: '关于妈妈的工作哪个是对的？', options: ['很轻松', '很辛苦', '离家很近', '工资很高'], correct: 1, meaning: 'Which is correct about mother\'s work?' }
            ]
        },

        // ---- Shopping Experiences (3) ----
        {
            id: 'lcnx_007', type: 'comprehension', difficulty: 'easy',
            chinese: '今天我去了商场买衣服。看中了一件白色的衬衫，价格是一百二十元。我觉得有点贵，但是朋友说很好看，所以我买了。',
            pinyin: 'jīn tiān wǒ qù le shāng chǎng mǎi yī fu. kàn zhòng le yī jiàn bái sè de chèn shān, jià gé shì yī bǎi èr shí yuán. wǒ jué de yǒu diǎn guì, dàn shì péng you shuō hěn hǎo kàn, suǒ yǐ wǒ mǎi le.',
            meaning: 'Today I went to the mall to buy clothes. I took a liking to a white shirt, the price was 120 yuan. I thought it was a bit expensive, but my friend said it looked very nice, so I bought it.',
            questions: [
                { question: '他去了哪里？', options: ['超市', '商场', '书店', '菜市场'], correct: 1, meaning: 'Where did he go?' },
                { question: '他买了什么？', options: ['裤子', '鞋子', '衬衫', '帽子'], correct: 2, meaning: 'What did he buy?' },
                { question: '衣服多少钱？', options: ['一百元', '一百二十元', '一百五十元', '两百元'], correct: 1, meaning: 'How much was the clothing?' }
            ]
        },
        {
            id: 'lcnx_008', type: 'comprehension', difficulty: 'medium',
            chinese: '昨天我和妈妈去菜市场买菜。我们买了西红柿、黄瓜和鸡蛋，还买了一条鱼。妈妈很会讲价，卖菜的阿姨给我们便宜了五块钱。',
            pinyin: 'zuó tiān wǒ hé mā ma qù cài shì chǎng mǎi cài. wǒ men mǎi le xī hóng shì, huáng guā hé jī dàn, hái mǎi le yī tiáo yú. mā ma hěn huì jiǎng jià, mài cài de ā yí gěi wǒ men pián yi le wǔ kuài qián.',
            meaning: 'Yesterday my mom and I went to the vegetable market to buy groceries. We bought tomatoes, cucumbers and eggs, and also bought a fish. Mom is very good at bargaining, the vegetable seller aunt gave us a discount of 5 yuan.',
            questions: [
                { question: '他们去了哪里买菜？', options: ['超市', '菜市场', '商场', '网上'], correct: 1, meaning: 'Where did they go to buy groceries?' },
                { question: '他们没买什么？', options: ['西红柿', '黄瓜', '猪肉', '鱼'], correct: 2, meaning: 'What didn\'t they buy?' },
                { question: '为什么便宜了五块钱？', options: ['阿姨是熟人', '妈妈说太贵了', '妈妈会讲价', '东西不新鲜'], correct: 2, meaning: 'Why did it become cheaper by 5 yuan?' }
            ]
        },
        {
            id: 'lcnx_009', type: 'comprehension', difficulty: 'hard',
            chinese: '现在的年轻人都喜欢在网上买东西。网上购物很方便，不用出门就能买到各种东西。而且价格常常比商店便宜。但是有时候买到的衣服大小不合适，退货比较麻烦。',
            pinyin: 'xiàn zài de nián qīng rén dōu xǐ huan zài wǎng shàng mǎi dōng xi. wǎng shàng gòu wù hěn fāng biàn, bù yòng chū mén jiù néng mǎi dào gè zhǒng dōng xi. ér qiě jià gé cháng cháng bǐ shāng diàn pián yi. dàn shì yǒu shí hou mǎi dào de yī fu dà xiǎo bù hé shì, tuì huò bǐ jiào má fan.',
            meaning: 'Nowadays young people all like shopping online. Online shopping is very convenient, you can buy all kinds of things without going out. Moreover prices are often cheaper than stores. But sometimes the clothes purchased are the wrong size, and returns are more troublesome.',
            questions: [
                { question: '年轻人喜欢在哪里买东西？', options: ['商场', '超市', '网上', '菜市场'], correct: 2, meaning: 'Where do young people like to shop?' },
                { question: '网上购物的好处是什么？', options: ['东西更好', '方便而且便宜', '可以聊天', '送货很快'], correct: 1, meaning: 'What are the benefits of online shopping?' },
                { question: '网上购物有什么问题？', options: ['价格太贵', '不能退货', '大小可能不合适', '东西种类少'], correct: 2, meaning: 'What is a problem with online shopping?' }
            ]
        },

        // ---- School/Study Situations (3) ----
        {
            id: 'lcnx_010', type: 'comprehension', difficulty: 'easy',
            chinese: '我在一所大学学习经济。我们每天上午有四节课，下午有两节课。我最喜欢的课是英语课，因为英语老师讲课很有趣。',
            pinyin: 'wǒ zài yī suǒ dà xué xué xí jīng jì. wǒ men měi tiān shàng wǔ yǒu sì jié kè, xià wǔ yǒu liǎng jié kè. wǒ zuì xǐ huan de kè shì yīng yǔ kè, yīn wèi yīng yǔ lǎo shī jiǎng kè hěn yǒu qù.',
            meaning: 'I study economics at a university. We have four classes every morning, and two classes in the afternoon. My favorite class is English, because the English teacher\'s lectures are very interesting.',
            questions: [
                { question: '他学什么专业？', options: ['英语', '经济', '数学', '历史'], correct: 1, meaning: 'What major does he study?' },
                { question: '他最喜欢什么课？', options: ['数学课', '经济课', '英语课', '历史课'], correct: 2, meaning: 'What class does he like most?' },
                { question: '每天有几节课？', options: ['四节', '五节', '六节', '八节'], correct: 2, meaning: 'How many classes are there each day?' }
            ]
        },
        {
            id: 'lcnx_011', type: 'comprehension', difficulty: 'medium',
            chinese: '我已经学了两年中文了。刚开始的时候觉得很难，特别是写汉字。但是后来慢慢找到了学习方法。现在我能和中国人简单聊天了，我觉得很有成就感。',
            pinyin: 'wǒ yǐ jīng xué le liǎng nián zhōng wén le. gāng kāi shǐ de shí hou jué de hěn nán, tè bié shì xiě hàn zì. dàn shì hòu lái màn màn zhǎo dào le xué xí fāng fǎ. xiàn zài wǒ néng hé zhōng guó rén jiǎn dān liáo tiān le, wǒ jué de hěn yǒu chéng jiù gǎn.',
            meaning: 'I have already studied Chinese for two years. At first I felt it was very difficult, especially writing Chinese characters. But later I slowly found a study method. Now I can chat simply with Chinese people, I feel a great sense of achievement.',
            questions: [
                { question: '他学中文多长时间了？', options: ['一年', '两年', '三年', '四年'], correct: 1, meaning: 'How long has he studied Chinese?' },
                { question: '刚开始他觉得什么最难？', options: ['说中文', '写汉字', '听力', '语法'], correct: 1, meaning: 'What did he find hardest at first?' },
                { question: '现在他的中文水平怎么样？', options: ['完全不会', '能简单聊天', '非常流利', '只会写汉字'], correct: 1, meaning: 'What is his current Chinese level?' }
            ]
        },
        {
            id: 'lcnx_012', type: 'comprehension', difficulty: 'hard',
            chinese: '下个星期就要期末考试了，我最近每天都在图书馆复习。这次考试非常重要，如果考不好可能会影响毕业。我的同学们也都在认真准备，大家压力都很大。',
            pinyin: 'xià gè xīng qī jiù yào qī mò kǎo shì le, wǒ zuì jìn měi tiān dōu zài tú shū guǎn fù xí. zhè cì kǎo shì fēi cháng zhòng yào, rú guǒ kǎo bù hǎo kě néng huì yǐng xiǎng bì yè. wǒ de tóng xué men yě dōu zài rèn zhēn zhǔn bèi, dà jiā yā lì dōu hěn dà.',
            meaning: 'The final exam is next week, I have been reviewing at the library every day recently. This exam is very important, if I don\'t do well it might affect graduation. My classmates are all preparing seriously too, everyone is under a lot of pressure.',
            questions: [
                { question: '他每天都在哪里复习？', options: ['家里', '教室', '图书馆', '朋友家'], correct: 2, meaning: 'Where does he review every day?' },
                { question: '考试是什么时候？', options: ['这个星期', '下个星期', '下个月', '明年'], correct: 1, meaning: 'When is the exam?' },
                { question: '如果考不好有什么后果？', options: ['没有影响', '可能影响毕业', '要交罚款', '要退学'], correct: 1, meaning: 'What will happen if he doesn\'t do well?' }
            ]
        },

        // ---- Weather and Seasons (3) ----
        {
            id: 'lcnx_013', type: 'comprehension', difficulty: 'easy',
            chinese: '今天天气真热啊！温度有三十五度。我把空调打开了，还喝了很多水。真希望快点下雨凉快一点。',
            pinyin: 'jīn tiān tiān qì zhēn rè a! wēn dù yǒu sān shí wǔ dù. wǒ bǎ kōng tiáo dǎ kāi le, hái hē le hěn duō shuǐ. zhēn xī wàng kuài diǎn xià yǔ liáng kuai yī diǎn.',
            meaning: 'Today\'s weather is really hot! The temperature is 35 degrees. I turned on the air conditioner and also drank a lot of water. I really hope it rains soon to cool down a bit.',
            questions: [
                { question: '今天温度是多少度？', options: ['二十五度', '三十度', '三十五度', '四十度'], correct: 2, meaning: 'What is today\'s temperature?' },
                { question: '他希望什么？', options: ['出太阳', '下雪', '下雨', '刮风'], correct: 2, meaning: 'What does he hope for?' }
            ]
        },
        {
            id: 'lcnx_014', type: 'comprehension', difficulty: 'medium',
            chinese: '一年有四个季节，每一个季节都不同。春天很温暖，花开得很漂亮。夏天天气热，我常常去游泳。秋天很凉快，树叶变成黄色和红色。冬天很冷，有时候还会下雪。',
            pinyin: 'yī nián yǒu sì gè jì jié, měi yī gè jì jié dōu bù tóng. chūn tiān hěn wēn nuǎn, huā kāi de hěn piào liang. xià tiān tiān qì rè, wǒ cháng cháng qù yóu yǒng. qiū tiān hěn liáng kuai, shù yè biàn chéng huáng sè hé hóng sè. dōng tiān hěn lěng, yǒu shí hou hái huì xià xuě.',
            meaning: 'A year has four seasons, each one is different. Spring is very warm, flowers bloom beautifully. Summer weather is hot, I often go swimming. Autumn is very cool, leaves turn yellow and red. Winter is very cold, sometimes it even snows.',
            questions: [
                { question: '他夏天常常做什么？', options: ['爬山', '游泳', '跑步', '滑雪'], correct: 1, meaning: 'What does he often do in summer?' },
                { question: '秋天的树叶变成什么颜色？', options: ['蓝色和白色', '黄色和红色', '绿色和黑色', '只变成黄色'], correct: 1, meaning: 'What colors do the leaves turn in autumn?' },
                { question: '一共有几个季节被提到了？', options: ['两个', '三个', '四个', '五个'], correct: 2, meaning: 'How many seasons are mentioned?' }
            ]
        },
        {
            id: 'lcnx_015', type: 'comprehension', difficulty: 'hard',
            chinese: '天气预报说明天会下大雨，风力也很大。所以我决定明天不去爬山了，改到后天再去。爬山前一定要看天气，安全最重要。',
            pinyin: 'tiān qì yù bào shuō míng tiān huì xià dà yǔ, fēng lì yě hěn dà. suǒ yǐ wǒ jué dìng míng tiān bù qù pá shān le, gǎi dào hòu tiān zài qù. pá shān qián yī dìng yào kàn tiān qì, ān quán zuì zhòng yào.',
            meaning: 'The weather forecast says it will rain heavily tomorrow, and the wind will be strong too. So I decided not to go hiking tomorrow, I\'ll change it to the day after tomorrow. Before hiking you must check the weather, safety is most important.',
            questions: [
                { question: '明天天气怎么样？', options: ['晴天', '下大雨刮大风', '下小雨', '多云'], correct: 1, meaning: 'What will the weather be like tomorrow?' },
                { question: '他决定什么时候去爬山？', options: ['明天', '后天', '大后天', '下周'], correct: 1, meaning: 'When did he decide to go hiking?' },
                { question: '他觉得什么最重要？', options: ['天气', '时间', '安全', '朋友'], correct: 2, meaning: 'What does he think is most important?' }
            ]
        },

        // ---- Hobbies and Interests (3) ----
        {
            id: 'lcnx_016', type: 'comprehension', difficulty: 'easy',
            chinese: '我的爱好是画画。我从小就喜欢用彩笔画花草和小动物。每个周末我都会花两个小时画画。画画让我感觉很放松。',
            pinyin: 'wǒ de ài hào shì huà huà. wǒ cóng xiǎo jiù xǐ huan yòng cǎi bǐ huà huā cǎo hé xiǎo dòng wù. měi gè zhōu mò wǒ dōu huì huā liǎng gè xiǎo shí huà huà. huà huà ràng wǒ gǎn jué hěn fàng sōng.',
            meaning: 'My hobby is drawing. Since I was young I\'ve liked using colored pens to draw plants and small animals. Every weekend I spend two hours drawing. Drawing makes me feel very relaxed.',
            questions: [
                { question: '他的爱好是什么？', options: ['唱歌', '画画', '跳舞', '写字'], correct: 1, meaning: 'What is his hobby?' },
                { question: '他喜欢画什么？', options: ['人物', '建筑', '花草和小动物', '风景'], correct: 2, meaning: 'What does he like to draw?' },
                { question: '画画让他感觉怎么样？', options: ['很累', '很着急', '很放松', '很无聊'], correct: 2, meaning: 'How does drawing make him feel?' }
            ]
        },
        {
            id: 'lcnx_017', type: 'comprehension', difficulty: 'medium',
            chinese: '我非常喜欢听音乐。不同的心情听不同的歌。开心的时候我喜欢听快歌，难过的时候喜欢听慢歌。我还想学吉他，以后可以自己弹自己唱。',
            pinyin: 'wǒ fēi cháng xǐ huan tīng yīn yuè. bù tóng de xīn qíng tīng bù tóng de gē. kāi xīn de shí hou wǒ xǐ huan tīng kuài gē, nán guò de shí hou xǐ huan tīng màn gē. wǒ hái xiǎng xué jí tā, yǐ hòu kě yǐ zì jǐ tán zì jǐ chàng.',
            meaning: 'I really like listening to music. Different moods, different songs. When I\'m happy I like listening to fast songs, when sad I like listening to slow songs. I also want to learn guitar, so in the future I can play and sing by myself.',
            questions: [
                { question: '他喜欢听什么类型的歌？', options: ['只喜欢快歌', '只喜欢慢歌', '看心情听不同的歌', '不喜欢听歌'], correct: 2, meaning: 'What type of songs does he like to listen to?' },
                { question: '他还想学什么？', options: ['钢琴', '吉他', '小提琴', '鼓'], correct: 1, meaning: 'What else does he want to learn?' },
                { question: '难过的时候他听什么？', options: ['快歌', '摇滚', '慢歌', '不听歌'], correct: 2, meaning: 'What does he listen to when sad?' }
            ]
        },
        {
            id: 'lcnx_018', type: 'comprehension', difficulty: 'hard',
            chinese: '摄影是我最喜欢的爱好。我买了一台新相机，每个周末都出去拍照。我喜欢拍自然风景，特别是日出和日落。拍出好照片的时候特别有成就感。以后我想当一名摄影师。',
            pinyin: 'shè yǐng shì wǒ zuì xǐ huan de ài hào. wǒ mǎi le yī tái xīn xiàng jī, měi gè zhōu mò dōu chū qù pāi zhào. wǒ xǐ huan pāi zì rán fēng jǐng, tè bié shì rì chū hé rì luò. pāi chū hǎo zhào piàn de shí hou tè bié yǒu chéng jiù gǎn. yǐ hòu wǒ xiǎng dāng yī míng shè yǐng shī.',
            meaning: 'Photography is my favorite hobby. I bought a new camera, every weekend I go out to take photos. I like photographing natural scenery, especially sunrises and sunsets. When I take a good photo I feel a special sense of achievement. In the future I want to become a photographer.',
            questions: [
                { question: '他最喜欢的爱好是什么？', options: ['画画', '唱歌', '摄影', '跑步'], correct: 2, meaning: 'What is his favorite hobby?' },
                { question: '他特别喜欢拍什么？', options: ['人物', '建筑', '日出和日落', '动物'], correct: 2, meaning: 'What does he especially like to photograph?' },
                { question: '他以后想做什么？', options: ['画家', '摄影师', '歌手', '老师'], correct: 1, meaning: 'What does he want to become in the future?' }
            ]
        },

        // ---- Food and Cooking (3) ----
        {
            id: 'lcnx_019', type: 'comprehension', difficulty: 'easy',
            chinese: '我特别喜欢吃饺子。每个星期天妈妈都会包饺子。饺子里面有猪肉和白菜，非常好吃。吃饺子的时候我最喜欢蘸醋。',
            pinyin: 'wǒ tè bié xǐ huan chī jiǎo zi. měi gè xīng qī tiān mā ma dōu huì bāo jiǎo zi. jiǎo zi lǐ miàn yǒu zhū ròu hé bái cài, fēi cháng hǎo chī. chī jiǎo zi de shí hou wǒ zuì xǐ huan zhàn cù.',
            meaning: 'I especially like eating dumplings. Every Sunday mom makes dumplings. The dumplings have pork and cabbage inside, very delicious. When eating dumplings I like dipping them in vinegar the most.',
            questions: [
                { question: '他特别喜欢吃什麼？', options: ['面条', '饺子', '米饭', '包子'], correct: 1, meaning: 'What does he especially like to eat?' },
                { question: '饺子里面有什么？', options: ['牛肉和白菜', '猪肉和白菜', '鸡肉和韭菜', '羊肉和萝卜'], correct: 1, meaning: 'What is inside the dumplings?' }
            ]
        },
        {
            id: 'lcnx_020', type: 'comprehension', difficulty: 'medium',
            chinese: '今天我第一次学做菜。我做了一道西红柿炒鸡蛋，虽然样子不太好看，但是味道还不错。妈妈尝了一口说还可以，让我很开心。以后我想学更多中国菜。',
            pinyin: 'jīn tiān wǒ dì yī cì xué zuò cài. wǒ zuò le yī dào xī hóng shì chǎo jī dàn, suī rán yàng zi bù tài hǎo kàn, dàn shì wèi dào hái bù cuò. mā ma cháng le yī kǒu shuō hái kě yǐ, ràng wǒ hěn kāi xīn. yǐ hòu wǒ xiǎng xué gèng duō zhōng guó cài.',
            meaning: 'Today I learned to cook for the first time. I made a dish of scrambled eggs with tomatoes, although it didn\'t look very good, the taste was not bad. Mom took a bite and said it was okay, which made me very happy. In the future I want to learn more Chinese dishes.',
            questions: [
                { question: '他做了什麼菜？', options: ['宫保鸡丁', '西红柿炒鸡蛋', '红烧肉', '炒青菜'], correct: 1, meaning: 'What dish did he make?' },
                { question: '妈妈觉得菜怎么样？', options: ['很好吃', '还可以', '不好吃', '太咸了'], correct: 1, meaning: 'What did mom think of the dish?' },
                { question: '他以后想做什么？', options: ['开餐厅', '学更多中国菜', '不再做菜', '只做西餐'], correct: 1, meaning: 'What does he want to do in the future?' }
            ]
        },
        {
            id: 'lcnx_021', type: 'comprehension', difficulty: 'hard',
            chinese: '上周我和朋友去了一家很有名的四川餐厅。我们点了麻婆豆腐、水煮鱼和宫保鸡丁。这些菜都非常好吃，但是有点太辣了。我们喝了很多水，一边吃一边流汗。虽然很辣，但是大家都很开心。',
            pinyin: 'shàng zhōu wǒ hé péng you qù le yī jiā hěn yǒu míng de sì chuān cān tīng. wǒ men diǎn le má pó dòu fu, shuǐ zhǔ yú hé gōng bǎo jī dīng. zhè xiē cài dōu fēi cháng hǎo chī, dàn shì yǒu diǎn tài là le. wǒ men hē le hěn duō shuǐ, yī biān chī yī biān liú hàn. suī rán hěn là, dàn shì dà jiā dōu hěn kāi xīn.',
            meaning: 'Last week my friends and I went to a very famous Sichuan restaurant. We ordered mapo tofu, boiled fish, and kung pao chicken. These dishes were all very delicious, but a bit too spicy. We drank a lot of water, sweating while eating. Although very spicy, everyone was very happy.',
            questions: [
                { question: '他们去了什么餐厅？', options: ['广东餐厅', '四川餐厅', '北京餐厅', '上海餐厅'], correct: 1, meaning: 'What kind of restaurant did they go to?' },
                { question: '他们没点什么菜？', options: ['麻婆豆腐', '水煮鱼', '宫保鸡丁', '回锅肉'], correct: 3, meaning: 'What dish didn\'t they order?' },
                { question: '菜有什么特点？', options: ['很好吃但太辣', '很淡', '很甜', '很油腻'], correct: 0, meaning: 'What was characteristic about the dishes?' }
            ]
        },

        // ---- Travel/Trips (3) ----
        {
            id: 'lcnx_022', type: 'comprehension', difficulty: 'easy',
            chinese: '上个周末我和家人开车去海边玩。我们在沙滩上走了很长时间，还拍了照片。午饭吃了新鲜的海鲜，特别好吃。这真是一次开心的旅行。',
            pinyin: 'shàng gè zhōu mò wǒ hé jiā rén kāi chē qù hǎi biān wán. wǒ men zài shā tān shàng zǒu le hěn cháng shí jiān, hái pāi le zhào piàn. wǔ fàn chī le xīn xiān de hǎi xiān, tè bié hǎo chī. zhè zhēn shì yī cì kāi xīn de lǚ xíng.',
            meaning: 'Last weekend my family and I drove to the seaside to play. We walked on the beach for a long time, and also took photos. For lunch we ate fresh seafood, it was especially delicious. This was truly a happy trip.',
            questions: [
                { question: '他们怎么去海边的？', options: ['坐火车', '坐飞机', '开车', '坐船'], correct: 2, meaning: 'How did they go to the seaside?' },
                { question: '午饭吃了什么？', options: ['面条', '饺子', '海鲜', '烤肉'], correct: 2, meaning: 'What did they eat for lunch?' },
                { question: '这次旅行怎么样？', options: ['很无聊', '很开心', '很累', '很失望'], correct: 1, meaning: 'How was this trip?' }
            ]
        },
        {
            id: 'lcnx_023', type: 'comprehension', difficulty: 'medium',
            chinese: '我计划暑假去北京旅游一个星期。我想去看天安门、故宫和长城。听说北京的夏天很热，所以我会带防晒霜和帽子。我还想尝尝正宗的北京烤鸭。',
            pinyin: 'wǒ jì huà shǔ jià qù běi jīng lǚ yóu yī gè xīng qī. wǒ xiǎng qù kàn tiān ān mén, gù gōng hé cháng chéng. tīng shuō běi jīng de xià tiān hěn rè, suǒ yǐ wǒ huì dài fáng shài shuāng hé mào zi. wǒ hái xiǎng cháng chang zhèng zōng de běi jīng kǎo yā.',
            meaning: 'I plan to travel to Beijing for one week during summer vacation. I want to see Tiananmen, the Forbidden City, and the Great Wall. I heard Beijing\'s summer is very hot, so I will bring sunscreen and a hat. I also want to try authentic Beijing roast duck.',
            questions: [
                { question: '他计划去北京多久？', options: ['三天', '五天', '一个星期', '两个星期'], correct: 2, meaning: 'How long does he plan to go to Beijing?' },
                { question: '他为什么带防晒霜？', options: ['因为会下雨', '因为夏天很热', '因为冬天很冷', '因为风很大'], correct: 1, meaning: 'Why does he bring sunscreen?' },
                { question: '他想吃什么？', options: ['饺子', '火锅', '北京烤鸭', '麻婆豆腐'], correct: 2, meaning: 'What does he want to eat?' }
            ]
        },
        {
            id: 'lcnx_024', type: 'comprehension', difficulty: 'hard',
            chinese: '去年冬天我第一次坐飞机去哈尔滨看冰雕。一下飞机就觉得很冷，温度是零下二十度。我穿了很厚的衣服还是觉得冷。不过冰雕太漂亮了，特别是晚上的时候，五颜六色的灯光照在冰上，像童话世界一样。',
            pinyin: 'qù nián dōng tiān wǒ dì yī cì zuò fēi jī qù hā ěr bīn kàn bīng diāo. yī xià fēi jī jiù jué de hěn lěng, wēn dù shì líng xià èr shí dù. wǒ chuān le hěn hòu de yī fu hái shì jué de lěng. bù guò bīng diāo tài piào liang le, tè bié shì wǎn shang de shí hou, wǔ yán liù sè de dēng guāng zhào zài bīng shàng, xiàng tóng huà shì jiè yī yàng.',
            meaning: 'Last winter I took a plane for the first time to Harbin to see ice sculptures. As soon as I got off the plane I felt very cold, the temperature was minus 20 degrees. I wore very thick clothes but still felt cold. But the ice sculptures were too beautiful, especially at night, colorful lights shining on the ice, like a fairy tale world.',
            questions: [
                { question: '他去了哪个城市？', options: ['北京', '哈尔滨', '上海', '广州'], correct: 1, meaning: 'Which city did he go to?' },
                { question: '那里的温度是多少？', options: ['零下十度', '零下二十度', '零下三十度', '零度'], correct: 1, meaning: 'What was the temperature there?' },
                { question: '冰雕什么时候最漂亮？', options: ['早上', '中午', '下午', '晚上'], correct: 3, meaning: 'When are the ice sculptures most beautiful?' }
            ]
        },

        // ---- Health and Exercise (3) ----
        {
            id: 'lcnx_025', type: 'comprehension', difficulty: 'easy',
            chinese: '我的爸爸每天都去公园跑步。他已经坚持跑步五年了。爸爸说跑步让他身体很好，很少生病。我也想像爸爸一样坚持运动。',
            pinyin: 'wǒ de bà ba měi tiān dōu qù gōng yuán pǎo bù. tā yǐ jīng jiān chí pǎo bù wǔ nián le. bà ba shuō pǎo bù ràng tā shēn tǐ hěn hǎo, hěn shǎo shēng bìng. wǒ yě xiǎng xiàng bà ba yī yàng jiān chí yùn dòng.',
            meaning: 'My dad goes running in the park every day. He has persisted in running for five years already. Dad says running makes his body very healthy, he rarely gets sick. I also want to persist in exercise like dad.',
            questions: [
                { question: '爸爸跑步多长时间了？', options: ['三年', '四年', '五年', '六年'], correct: 2, meaning: 'How long has dad been running?' },
                { question: '跑步对爸爸有什么好处？', options: ['赚了很多钱', '身体很好很少生病', '认识了很多朋友', '不用上班了'], correct: 1, meaning: 'What benefit does running bring dad?' },
                { question: '他想做什么？', options: ['也坚持运动', '不去上班', '搬到公园旁边', '买新跑鞋'], correct: 0, meaning: 'What does he want to do?' }
            ]
        },
        {
            id: 'lcnx_026', type: 'comprehension', difficulty: 'medium',
            chinese: '我昨天去医院看医生，因为我头疼和咳嗽好几天了。医生给我检查了身体，说我只是普通的感冒，不用太担心。他给我开了一些药，叫我多喝水多休息。',
            pinyin: 'wǒ zuó tiān qù yī yuàn kàn yī shēng, yīn wèi wǒ tóu téng hé ké sou hǎo jǐ tiān le. yī shēng gěi wǒ jiǎn chá le shēn tǐ, shuō wǒ zhǐ shì pǔ tōng de gǎn mào, bù yòng tài dān xīn. tā gěi wǒ kāi le yī xiē yào, jiào wǒ duō hē shuǐ duō xiū xi.',
            meaning: 'Yesterday I went to the hospital to see a doctor because I had a headache and cough for several days. The doctor checked my body and said I just have a common cold, no need to worry too much. He prescribed me some medicine and told me to drink more water and rest more.',
            questions: [
                { question: '他为什么去医院？', options: ['肚子疼', '头疼和咳嗽', '发烧', '腿受伤了'], correct: 1, meaning: 'Why did he go to the hospital?' },
                { question: '医生说他得了什么病？', options: ['重感冒', '普通的感冒', '发烧', '胃病'], correct: 1, meaning: 'What illness did the doctor say he had?' },
                { question: '医生给他什么建议？', options: ['多运动', '多喝水多休息', '不用吃药', '马上去上班'], correct: 1, meaning: 'What advice did the doctor give him?' }
            ]
        },
        {
            id: 'lcnx_027', type: 'comprehension', difficulty: 'hard',
            chinese: '保持健康的生活方式很重要。首先，每天要保证足够的睡眠，最好睡七到八个小时。其次，要注意饮食，多吃蔬菜水果，少吃油炸食品。最后，每个星期至少锻炼三次，比如跑步、游泳或者打球。健康是最大的财富。',
            pinyin: 'bǎo chí jiàn kāng de shēng huó fāng shì hěn zhòng yào. shǒu xiān, měi tiān yào bǎo zhèng zú gòu de shuì mián, zuì hǎo shuì qī dào bā gè xiǎo shí. qí cì, yào zhù yì yǐn shí, duō chī shū cài shuǐ guǒ, shǎo chī yóu zhá shí pǐn. zuì hòu, měi gè xīng qī zhì shǎo duàn liàn sān cì, bǐ rú pǎo bù, yóu yǒng huò zhě dǎ qiú. jiàn kāng shì zuì dà de cái fù.',
            meaning: 'Maintaining a healthy lifestyle is very important. First, ensure enough sleep every day, it\'s best to sleep seven to eight hours. Second, pay attention to diet, eat more vegetables and fruits, eat less fried food. Finally, exercise at least three times a week, such as running, swimming, or playing ball games. Health is the greatest wealth.',
            questions: [
                { question: '每天最好睡多少个小时？', options: ['五到六个小时', '七到八个小时', '九到十个小时', '越多越好'], correct: 1, meaning: 'How many hours is it best to sleep per day?' },
                { question: '饮食要注意什么？', options: ['多吃肉', '多吃油炸食品', '多吃蔬菜水果', '只吃面条'], correct: 2, meaning: 'What should be noted about diet?' },
                { question: '作者认为什么最重要？', options: ['钱', '工作', '健康', '房子'], correct: 2, meaning: 'What does the author consider most important?' }
            ]
        },

        // ---- Holidays and Celebrations (3) ----
        {
            id: 'lcnx_028', type: 'comprehension', difficulty: 'easy',
            chinese: '今天是我妹妹的生日。她今年十二岁了。妈妈给她买了一个大蛋糕，上面有草莓和巧克力。我们全家人一起唱了生日歌，妹妹很开心地吹灭了蜡烛。',
            pinyin: 'jīn tiān shì wǒ mèi mei de shēng rì. tā jīn nián shí èr suì le. mā ma gěi tā mǎi le yī gè dà dàn gāo, shàng miàn yǒu cǎo méi hé qiǎo kè lì. wǒ men quán jiā rén yī qǐ chàng le shēng rì gē, mèi mei hěn kāi xīn de chuī miè le là zhú.',
            meaning: 'Today is my younger sister\'s birthday. She turned twelve this year. Mom bought her a big cake with strawberries and chocolate on top. Our whole family sang the birthday song together, and my sister happily blew out the candles.',
            questions: [
                { question: '妹妹今年几岁了？', options: ['十岁', '十一岁', '十二岁', '十三岁'], correct: 2, meaning: 'How old is the younger sister this year?' },
                { question: '蛋糕上面有什么？', options: ['苹果', '草莓和巧克力', '香蕉', '橘子'], correct: 1, meaning: 'What is on top of the cake?' },
                { question: '家人一起做了什么？', options: ['跳舞', '唱生日歌', '看电视', '出去玩'], correct: 1, meaning: 'What did the family do together?' }
            ]
        },
        {
            id: 'lcnx_029', type: 'comprehension', difficulty: 'medium',
            chinese: '春节是中国人最重要的传统节日。春节的时候，家家户户都会贴春联和挂红灯笼。除夕晚上全家人一起吃团圆饭，吃饺子。孩子们最开心了，因为他们可以收到红包。大年初一大家都会穿新衣服去拜年。',
            pinyin: 'chūn jié shì zhōng guó rén zuì zhòng yào de chuán tǒng jié rì. chūn jié de shí hou, jiā jiā hù hù dōu huì tiē chūn lián hé guà hóng dēng long. chú xī wǎn shang quán jiā rén yī qǐ chī tuán yuán fàn, chī jiǎo zi. hái zi men zuì kāi xīn le, yīn wèi tā men kě yǐ shōu dào hóng bāo. dà nián chū yī dà jiā dōu huì chuān xīn yī fu qù bài nián.',
            meaning: 'Spring Festival is the most important traditional holiday for Chinese people. During Spring Festival, every household posts spring couplets and hangs red lanterns. On New Year\'s Eve the whole family eats reunion dinner together, eating dumplings. Children are the happiest because they can receive red envelopes. On the first day of the new year everyone wears new clothes to pay New Year\'s visits.',
            questions: [
                { question: '春节人们会在门上贴什么？', options: ['画', '春联', '照片', '通知'], correct: 1, meaning: 'What do people post on doors during Spring Festival?' },
                { question: '孩子们为什么最开心？', options: ['可以不上学', '可以收红包', '可以去旅行', '可以看电视'], correct: 1, meaning: 'Why are children the happiest?' },
                { question: '除夕晚上吃什么？', options: ['面条', '粽子', '饺子', '月饼'], correct: 2, meaning: 'What is eaten on New Year\'s Eve?' }
            ]
        },
        {
            id: 'lcnx_030', type: 'comprehension', difficulty: 'hard',
            chinese: '中秋节是每年农历八月十五，这一天月亮最圆最亮。中秋节的传统是吃月饼和赏月。月饼有各种各样的口味，有豆沙的、莲蓉的，还有五仁的。每年的中秋节，不管在哪里工作，我都会回家和家人团聚。',
            pinyin: 'zhōng qiū jié shì měi nián nóng lì bā yuè shí wǔ, zhè yī tiān yuè liang zuì yuán zuì liàng. zhōng qiū jié de chuán tǒng shì chī yuè bǐng hé shǎng yuè. yuè bǐng yǒu gè zhǒng gè yàng de kǒu wèi, yǒu dòu shā de, lián róng de, hái yǒu wǔ rén de. měi nián de zhōng qiū jié, bù guǎn zài nǎ lǐ gōng zuò, wǒ dōu huì huí jiā hé jiā rén tuán jù.',
            meaning: 'Mid-Autumn Festival is on the 15th day of the 8th lunar month each year, on this day the moon is the roundest and brightest. The tradition of Mid-Autumn Festival is eating mooncakes and appreciating the moon. Mooncakes have various flavors, there are red bean paste ones, lotus seed paste ones, and five kernel ones. Every Mid-Autumn Festival, no matter where I work, I always go home to reunite with family.',
            questions: [
                { question: '中秋节是什么时候？', options: ['农历一月十五', '农历八月十五', '农历五月五日', '农历十二月三十'], correct: 1, meaning: 'When is the Mid-Autumn Festival?' },
                { question: '中秋节的传统是什么？', options: ['吃粽子和赛龙舟', '吃月饼和赏月', '贴春联和放鞭炮', '吃元宵和看花灯'], correct: 1, meaning: 'What are the traditions of Mid-Autumn Festival?' },
                { question: '每年中秋节他都会做什么？', options: ['去旅行', '去朋友家', '回家和亲人团聚', '一个人过'], correct: 2, meaning: 'What does he do every Mid-Autumn Festival?' }
            ]
        }
    ],

    mergeWithMain: function() {
        if (typeof ListeningData !== 'undefined') {
            ListeningData.comprehension.push(...this.comprehension);
        }
    }
};

if (typeof ListeningData !== 'undefined') {
    ListeningCompNew.mergeWithMain();
}
window.ListeningCompNew = ListeningCompNew;

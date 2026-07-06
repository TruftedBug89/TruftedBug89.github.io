// ============================================
// CHINESE MASTER - HSK 2 MASSIVE EXAMPLES DATABASE
// Every word has 8-10 example sentences
// ALL SIMPLIFIED CHINESE with Pinyin + English
// ============================================

const HSK2Massive = {
    words: [
        // ============================
        // Adjectives
        // ============================
        {
            id: 'h2m_001', character: '红', pinyin: 'hóng', meaning: 'red', hsk: 2, category: 'adjectives',
            examples: [
                { cn: '红色的苹果。', pinyin: 'hóngsè de píngguǒ.', en: 'Red apple.' },
                { cn: '红灯。', pinyin: 'hóng dēng.', en: 'Red light.' },
                { cn: '她穿了一件红色的衣服。', pinyin: 'tā chuān le yī jiàn hóngsè de yīfu.', en: 'She wore a red outfit.' },
                { cn: '中国红。', pinyin: 'zhōngguó hóng.', en: 'Chinese red.' },
                { cn: '红绿灯怎么走？', pinyin: 'hónglǜdēng zěnme zǒu?', en: 'How to navigate traffic lights?' },
                { cn: '红叶很漂亮。', pinyin: 'hóng yè hěn piàoliang.', en: 'Red leaves are very beautiful.' },
                { cn: '脸红。', pinyin: 'liǎn hóng.', en: 'Face turns red (blushing).' },
                { cn: '红花绿叶。', pinyin: 'hóng huā lǜ yè.', en: 'Red flowers and green leaves.' }
            ]
        },

        {
            id: 'h2m_002', character: '白', pinyin: 'bái', meaning: 'white', hsk: 2, category: 'adjectives',
            examples: [
                { cn: '白色的花。', pinyin: 'báisè de huā.', en: 'White flower.' },
                { cn: '白天。', pinyin: 'báitiān.', en: 'Daytime.' },
                { cn: '他穿了一件白衬衫。', pinyin: 'tā chuān le yī jiàn bái chènshān.', en: 'He wore a white shirt.' },
                { cn: '白云。', pinyin: 'bái yún.', en: 'White clouds.' },
                { cn: '不明白。', pinyin: 'bù míngbái.', en: 'Don\'t understand.' },
                { cn: '黑板和粉笔。', pinyin: 'hēibǎn hé fěnbǐ.', en: 'Blackboard and chalk.' },
                { cn: '白头发。', pinyin: 'bái tóufa.', en: 'White/grey hair.' },
                { cn: '一清二白。', pinyin: 'yī qīng èr bái.', en: 'Perfectly clear and pure.' }
            ]
        },

        {
            id: 'h2m_003', character: '黑', pinyin: 'hēi', meaning: 'black', hsk: 2, category: 'adjectives',
            examples: [
                { cn: '黑色的猫。', pinyin: 'hēisè de māo.', en: 'Black cat.' },
                { cn: '天黑。', pinyin: 'tiān hēi.', en: 'Dark (sky).' },
                { cn: '他喜欢穿黑衣服。', pinyin: 'tā xǐhuān chuān hēi yīfu.', en: 'He likes wearing black clothes.' },
                { cn: '黑板。', pinyin: 'hēibǎn.', en: 'Blackboard.' },
                { cn: '黑头发。', pinyin: 'hēi tóufa.', en: 'Black hair.' },
                { cn: '天黑了，我们回家吧。', pinyin: 'tiān hēi le, wǒmen huí jiā ba.', en: 'It\'s getting dark, let\'s go home.' },
                { cn: '黑白的照片。', pinyin: 'hēi bái de zhàopiàn.', en: 'Black and white photo.' },
                { cn: '黑夜。', pinyin: 'hēiyè.', en: 'Dark night.' }
            ]
        },

        {
            id: 'h2m_004', character: '蓝', pinyin: 'lán', meaning: 'blue', hsk: 2, category: 'adjectives',
            examples: [
                { cn: '蓝色的天。', pinyin: 'lánsè de tiān.', en: 'Blue sky.' },
                { cn: '大海很蓝。', pinyin: 'dàhǎi hěn lán.', en: 'The ocean is very blue.' },
                { cn: '他的眼睛是蓝色的。', pinyin: 'tā de yǎnjīng shì lánsè de.', en: 'His eyes are blue.' },
                { cn: '蓝天白云。', pinyin: 'lán tiān bái yún.', en: 'Blue sky and white clouds.' },
                { cn: '蓝色是我最喜欢的颜色。', pinyin: 'lánsè shì wǒ zuì xǐhuān de yánsè.', en: 'Blue is my favorite color.' },
                { cn: '你穿蓝色很好看。', pinyin: 'nǐ chuān lánsè hěn hǎokàn.', en: 'You look good in blue.' },
                { cn: '深蓝色。', pinyin: 'shēn lánsè.', en: 'Dark blue.' },
                { cn: '浅蓝色。', pinyin: 'qiǎn lánsè.', en: 'Light blue.' }
            ]
        },

        {
            id: 'h2m_005', character: '绿', pinyin: 'lǜ', meaning: 'green', hsk: 2, category: 'adjectives',
            examples: [
                { cn: '绿色的草。', pinyin: 'lǜsè de cǎo.', en: 'Green grass.' },
                { cn: '树叶很绿。', pinyin: 'shùyè hěn lǜ.', en: 'The leaves are very green.' },
                { cn: '绿灯。', pinyin: 'lǜ dēng.', en: 'Green light.' },
                { cn: '绿化很重要。', pinyin: 'lǜhuà hěn zhòngyào.', en: 'Greenery is very important.' },
                { cn: '春天到处都是绿的。', pinyin: 'chūntiān dàochù dōu shì lǜ de.', en: 'Everything is green in spring.' },
                { cn: '我喜欢绿茶。', pinyin: 'wǒ xǐhuān lǜchá.', en: 'I like green tea.' },
                { cn: '绿色的山。', pinyin: 'lǜsè de shān.', en: 'Green mountains.' },
                { cn: '绿色生活。', pinyin: 'lǜsè shēnghuó.', en: 'Green living.' }
            ]
        },

        {
            id: 'h2m_006', character: '黄', pinyin: 'huáng', meaning: 'yellow', hsk: 2, category: 'adjectives',
            examples: [
                { cn: '黄色的花。', pinyin: 'huángsè de huā.', en: 'Yellow flower.' },
                { cn: '秋天树叶变黄了。', pinyin: 'qiūtiān shùyè biàn huáng le.', en: 'In autumn leaves turn yellow.' },
                { cn: '黄色的衣服。', pinyin: 'huángsè de yīfu.', en: 'Yellow clothes.' },
                { cn: '黄河。', pinyin: 'huáng hé.', en: 'Yellow River.' },
                { cn: '他买了一辆黄色的车。', pinyin: 'tā mǎi le yī liàng huángsè de chē.', en: 'He bought a yellow car.' },
                { cn: '黄昏。', pinyin: 'huánghūn.', en: 'Dusk.' },
                { cn: '小心黄灯。', pinyin: 'xiǎoxīn huáng dēng.', en: 'Watch out for yellow light.' },
                { cn: '金黄的麦田。', pinyin: 'jīn huáng de mài tián.', en: 'Golden yellow wheat field.' }
            ]
        },

        {
            id: 'h2m_007', character: '甜', pinyin: 'tián', meaning: 'sweet', hsk: 2, category: 'adjectives',
            examples: [
                { cn: '很甜。', pinyin: 'hěn tián.', en: 'Very sweet.' },
                { cn: '这个苹果很甜。', pinyin: 'zhège píngguǒ hěn tián.', en: 'This apple is very sweet.' },
                { cn: '甜品。', pinyin: 'tiánpǐn.', en: 'Dessert.' },
                { cn: '我不太喜欢甜的。', pinyin: 'wǒ bù tài xǐhuān tián de.', en: 'I don\'t really like sweet things.' },
                { cn: '甜食吃多了不好。', pinyin: 'tiánshí chī duō le bù hǎo.', en: 'Eating too many sweets isn\'t good.' },
                { cn: '这个蛋糕很甜。', pinyin: 'zhège dàngāo hěn tián.', en: 'This cake is very sweet.' },
                { cn: '甜水。', pinyin: 'tián shuǐ.', en: 'Sweet water.' },
                { cn: '生活甜甜蜜蜜。', pinyin: 'shēnghuó tiántián mìmì.', en: 'A sweet and happy life.' }
            ]
        },

        {
            id: 'h2m_008', character: '苦', pinyin: 'kǔ', meaning: 'bitter', hsk: 2, category: 'adjectives',
            examples: [
                { cn: '很苦。', pinyin: 'hěn kǔ.', en: 'Very bitter.' },
                { cn: '这种药很苦。', pinyin: 'zhè zhǒng yào hěn kǔ.', en: 'This medicine is very bitter.' },
                { cn: '咖啡有点苦。', pinyin: 'kāfēi yǒudiǎn kǔ.', en: 'Coffee is a bit bitter.' },
                { cn: '苦瓜。', pinyin: 'kǔguā.', en: 'Bitter melon.' },
                { cn: '吃苦。', pinyin: 'chī kǔ.', en: 'Endure hardship.' },
                { cn: '他吃了很多苦。', pinyin: 'tā chī le hěn duō kǔ.', en: 'He endured a lot of hardship.' },
                { cn: '先苦后甜。', pinyin: 'xiān kǔ hòu tián.', en: 'First bitter, then sweet (proverb).' },
                { cn: '这个菜太苦了。', pinyin: 'zhège cài tài kǔ le.', en: 'This dish is too bitter.' }
            ]
        },

        {
            id: 'h2m_009', character: '辣', pinyin: 'là', meaning: 'spicy', hsk: 2, category: 'adjectives',
            examples: [
                { cn: '很辣。', pinyin: 'hěn là.', en: 'Very spicy.' },
                { cn: '四川菜很辣。', pinyin: 'sìchuān cài hěn là.', en: 'Sichuan food is very spicy.' },
                { cn: '我不能吃辣。', pinyin: 'wǒ bù néng chī là.', en: 'I can\'t eat spicy food.' },
                { cn: '辣死了！', pinyin: 'là sǐ le!', en: 'So spicy!' },
                { cn: '你喜欢吃辣的吗？', pinyin: 'nǐ xǐhuān chī là de ma?', en: 'Do you like eating spicy food?' },
                { cn: '这个火锅太辣了。', pinyin: 'zhège huǒguō tài là le.', en: 'This hotpot is too spicy.' },
                { cn: '辣条很好吃。', pinyin: 'làtiáo hěn hǎochī.', en: 'Spicy strips are very tasty.' },
                { cn: '放点辣椒。', pinyin: 'fàng diǎn làjiāo.', en: 'Add some chili.' }
            ]
        },

        {
            id: 'h2m_010', character: '咸', pinyin: 'xián', meaning: 'salty', hsk: 2, category: 'adjectives',
            examples: [
                { cn: '很咸。', pinyin: 'hěn xián.', en: 'Very salty.' },
                { cn: '这个菜太咸了。', pinyin: 'zhège cài tài xián le.', en: 'This dish is too salty.' },
                { cn: '咸鱼。', pinyin: 'xián yú.', en: 'Salted fish.' },
                { cn: '不要太咸。', pinyin: 'bù yào tài xián.', en: 'Don\'t make it too salty.' },
                { cn: '我喜欢咸的。', pinyin: 'wǒ xǐhuān xián de.', en: 'I like salty food.' },
                { cn: '咸水湖。', pinyin: 'xián shuǐ hú.', en: 'Saltwater lake.' },
                { cn: '北方人吃的比较咸。', pinyin: 'běifāng rén chī de bǐjiào xián.', en: 'Northerners eat more salty food.' },
                { cn: '盐太多了。', pinyin: 'yán tài duō le.', en: 'Too much salt.' }
            ]
        },

        {
            id: 'h2m_011', character: '酸', pinyin: 'suān', meaning: 'sour', hsk: 2, category: 'adjectives',
            examples: [
                { cn: '很酸。', pinyin: 'hěn suān.', en: 'Very sour.' },
                { cn: '柠檬很酸。', pinyin: 'níngméng hěn suān.', en: 'Lemons are very sour.' },
                { cn: '酸菜。', pinyin: 'suāncài.', en: 'Pickled vegetables.' },
                { cn: '这个橘子太酸了。', pinyin: 'zhège júzi tài suān le.', en: 'This orange is too sour.' },
                { cn: '酸甜的。', pinyin: 'suān tián de.', en: 'Sweet and sour.' },
                { cn: '酸奶很好喝。', pinyin: 'suānnǎi hěn hǎohē.', en: 'Yogurt is very tasty.' },
                { cn: '心里酸酸的。', pinyin: 'xīnli suānsuān de.', en: 'Feeling sad/heartbroken.' },
                { cn: '酸辣汤。', pinyin: 'suān là tāng.', en: 'Hot and sour soup.' }
            ]
        },

        {
            id: 'h2m_012', character: '新鲜', pinyin: 'xīnxiān', meaning: 'fresh', hsk: 2, category: 'adjectives',
            examples: [
                { cn: '很新鲜。', pinyin: 'hěn xīnxiān.', en: 'Very fresh.' },
                { cn: '新鲜的水果。', pinyin: 'xīnxiān de shuǐguǒ.', en: 'Fresh fruit.' },
                { cn: '空气很新鲜。', pinyin: 'kōngqì hěn xīnxiān.', en: 'The air is very fresh.' },
                { cn: '这条鱼很新鲜。', pinyin: 'zhè tiáo yú hěn xīnxiān.', en: 'This fish is very fresh.' },
                { cn: '每天吃新鲜蔬菜。', pinyin: 'měitiān chī xīnxiān shūcài.', en: 'Eat fresh vegetables every day.' },
                { cn: '新鲜事。', pinyin: 'xīnxiān shì.', en: 'Something new/exciting.' },
                { cn: '买新鲜的菜最好。', pinyin: 'mǎi xīnxiān de cài zuì hǎo.', en: 'It\'s best to buy fresh vegetables.' },
                { cn: '这个面包很新鲜。', pinyin: 'zhège miànbāo hěn xīnxiān.', en: 'This bread is very fresh.' }
            ]
        },

        {
            id: 'h2m_013', character: '安静', pinyin: 'ānjìng', meaning: 'quiet', hsk: 2, category: 'adjectives',
            examples: [
                { cn: '很安静。', pinyin: 'hěn ānjìng.', en: 'Very quiet.' },
                { cn: '请安静。', pinyin: 'qǐng ānjìng.', en: 'Please be quiet.' },
                { cn: '图书馆里很安静。', pinyin: 'túshūguǎn lǐ hěn ānjìng.', en: 'It\'s very quiet in the library.' },
                { cn: '安静的地方。', pinyin: 'ānjìng de dìfang.', en: 'A quiet place.' },
                { cn: '这个小区很安静。', pinyin: 'zhège xiǎoqū hěn ānjìng.', en: 'This neighborhood is very quiet.' },
                { cn: '保持安静。', pinyin: 'bǎochí ānjìng.', en: 'Keep quiet.' },
                { cn: '我需要一个安静的环境。', pinyin: 'wǒ xūyào yī gè ānjìng de huánjìng.', en: 'I need a quiet environment.' },
                { cn: '教室里很安静。', pinyin: 'jiàoshì lǐ hěn ānjìng.', en: 'The classroom is very quiet.' }
            ]
        },

        {
            id: 'h2m_014', character: '热闹', pinyin: 'rènao', meaning: 'lively', hsk: 2, category: 'adjectives',
            examples: [
                { cn: '很热闹。', pinyin: 'hěn rènao.', en: 'Very lively.' },
                { cn: '街上很热闹。', pinyin: 'jiē shàng hěn rènao.', en: 'The streets are very lively.' },
                { cn: '春节很热闹。', pinyin: 'chūnjié hěn rènao.', en: 'Spring Festival is very lively.' },
                { cn: '我喜欢热闹的地方。', pinyin: 'wǒ xǐhuān rènao de dìfang.', en: 'I like lively places.' },
                { cn: '这个市场真热闹。', pinyin: 'zhège shìchǎng zhēn rènao.', en: 'This market is really lively.' },
                { cn: '热闹的晚上。', pinyin: 'rènao de wǎnshang.', en: 'A lively evening.' },
                { cn: '这里比以前更热闹了。', pinyin: 'zhèlǐ bǐ yǐqián gèng rènao le.', en: 'It\'s more lively here than before.' },
                { cn: '婚礼很热闹。', pinyin: 'hūnlǐ hěn rènao.', en: 'The wedding was very lively.' }
            ]
        },

        {
            id: 'h2m_015', character: '干净', pinyin: 'gānjìng', meaning: 'clean', hsk: 2, category: 'adjectives',
            examples: [
                { cn: '很干净。', pinyin: 'hěn gānjìng.', en: 'Very clean.' },
                { cn: '这个房间很干净。', pinyin: 'zhège fángjiān hěn gānjìng.', en: 'This room is very clean.' },
                { cn: '请把桌子擦干净。', pinyin: 'qǐng bǎ zhuōzi cā gānjìng.', en: 'Please wipe the table clean.' },
                { cn: '干净的水。', pinyin: 'gānjìng de shuǐ.', en: 'Clean water.' },
                { cn: '保持干净。', pinyin: 'bǎochí gānjìng.', en: 'Keep clean.' },
                { cn: '他穿得很干净。', pinyin: 'tā chuān de hěn gānjìng.', en: 'He dresses very cleanly.' },
                { cn: '一个干净的城市。', pinyin: 'yī gè gānjìng de chéngshì.', en: 'A clean city.' },
                { cn: '洗干净了。', pinyin: 'xǐ gānjìng le.', en: 'Washed clean.' }
            ]
        },

        {
            id: 'h2m_016', character: '脏', pinyin: 'zāng', meaning: 'dirty', hsk: 2, category: 'adjectives',
            examples: [
                { cn: '很脏。', pinyin: 'hěn zāng.', en: 'Very dirty.' },
                { cn: '衣服脏了。', pinyin: 'yīfu zāng le.', en: 'The clothes are dirty.' },
                { cn: '这里太脏了。', pinyin: 'zhèlǐ tài zāng le.', en: 'It\'s too dirty here.' },
                { cn: '脏东西。', pinyin: 'zāng dōngxi.', en: 'Dirty things.' },
                { cn: '手脏了，去洗洗。', pinyin: 'shǒu zāng le, qù xǐ xǐ.', en: 'Your hands are dirty, go wash them.' },
                { cn: '地板很脏。', pinyin: 'dìbǎn hěn zāng.', en: 'The floor is very dirty.' },
                { cn: '别把衣服弄脏了。', pinyin: 'bié bǎ yīfu nòng zāng le.', en: 'Don\'t get your clothes dirty.' },
                { cn: '脏水不能喝。', pinyin: 'zāng shuǐ bù néng hē.', en: 'Dirty water can\'t be drunk.' }
            ]
        },

        {
            id: 'h2m_017', character: '舒服', pinyin: 'shūfu', meaning: 'comfortable', hsk: 2, category: 'adjectives',
            examples: [
                { cn: '很舒服。', pinyin: 'hěn shūfu.', en: 'Very comfortable.' },
                { cn: '这件衣服很舒服。', pinyin: 'zhè jiàn yīfu hěn shūfu.', en: 'This clothing is very comfortable.' },
                { cn: '休息一下很舒服。', pinyin: 'xiūxi yīxià hěn shūfu.', en: 'It\'s comfortable to rest a bit.' },
                { cn: '这张床很舒服。', pinyin: 'zhè zhāng chuáng hěn shūfu.', en: 'This bed is very comfortable.' },
                { cn: '不舒服。', pinyin: 'bù shūfu.', en: 'Uncomfortable / Not feeling well.' },
                { cn: '你哪里不舒服？', pinyin: 'nǐ nǎlǐ bù shūfu?', en: 'Where do you feel unwell?' },
                { cn: '今天天气很舒服。', pinyin: 'jīntiān tiānqì hěn shūfu.', en: 'The weather is very comfortable today.' },
                { cn: '洗个热水澡真舒服。', pinyin: 'xǐ gè rè shuǐ zǎo zhēn shūfu.', en: 'Taking a hot shower is really comfortable.' }
            ]
        },

        {
            id: 'h2m_018', character: '简单', pinyin: 'jiǎndān', meaning: 'simple', hsk: 2, category: 'adjectives',
            examples: [
                { cn: '很简单。', pinyin: 'hěn jiǎndān.', en: 'Very simple.' },
                { cn: '这个问题很简单。', pinyin: 'zhège wèntí hěn jiǎndān.', en: 'This question is very simple.' },
                { cn: '简单的生活。', pinyin: 'jiǎndān de shēnghuó.', en: 'A simple life.' },
                { cn: '不难，很简单。', pinyin: 'bù nán, hěn jiǎndān.', en: 'Not hard, very simple.' },
                { cn: '简单说一说。', pinyin: 'jiǎndān shuō yī shuō.', en: 'Briefly explain.' },
                { cn: '中国菜不简单。', pinyin: 'zhōngguó cài bù jiǎndān.', en: 'Chinese cuisine is not simple.' },
                { cn: '这个工作很简单。', pinyin: 'zhège gōngzuò hěn jiǎndān.', en: 'This job is very simple.' },
                { cn: '说简单，做难。', pinyin: 'shuō jiǎndān, zuò nán.', en: 'Easy to say, hard to do.' }
            ]
        },

        {
            id: 'h2m_019', character: '快乐', pinyin: 'kuàilè', meaning: 'happy', hsk: 2, category: 'adjectives',
            examples: [
                { cn: '很快乐。', pinyin: 'hěn kuàilè.', en: 'Very happy.' },
                { cn: '生日快乐。', pinyin: 'shēngrì kuàilè.', en: 'Happy birthday.' },
                { cn: '祝大家快乐。', pinyin: 'zhù dàjiā kuàilè.', en: 'Wishing everyone happiness.' },
                { cn: '快乐的一天。', pinyin: 'kuàilè de yī tiān.', en: 'A happy day.' },
                { cn: '和朋友们在一起很快乐。', pinyin: 'hé péngyoumen zài yīqǐ hěn kuàilè.', en: 'Being with friends is happy.' },
                { cn: '快乐最重要。', pinyin: 'kuàilè zuì zhòngyào.', en: 'Happiness is most important.' },
                { cn: '快乐的孩子。', pinyin: 'kuàilè de háizi.', en: 'Happy children.' },
                { cn: '新年快乐。', pinyin: 'xīnnián kuàilè.', en: 'Happy New Year.' }
            ]
        },

        {
            id: 'h2m_020', character: '健康', pinyin: 'jiànkāng', meaning: 'healthy', hsk: 2, category: 'adjectives',
            examples: [
                { cn: '很健康。', pinyin: 'hěn jiànkāng.', en: 'Very healthy.' },
                { cn: '身体健康最重要。', pinyin: 'shēntǐ jiànkāng zuì zhòngyào.', en: 'Physical health is most important.' },
                { cn: '健康饮食。', pinyin: 'jiànkāng yǐnshí.', en: 'Healthy diet.' },
                { cn: '他看起来很健康。', pinyin: 'tā kàn qǐlái hěn jiànkāng.', en: 'He looks very healthy.' },
                { cn: '祝你健康。', pinyin: 'zhù nǐ jiànkāng.', en: 'Wishing you health.' },
                { cn: '每天运动对健康好。', pinyin: 'měitiān yùndòng duì jiànkāng hǎo.', en: 'Daily exercise is good for health.' },
                { cn: '健康的生活方式。', pinyin: 'jiànkāng de shēnghuó fāngshì.', en: 'A healthy lifestyle.' },
                { cn: '吃蔬菜水果很健康。', pinyin: 'chī shūcài shuǐguǒ hěn jiànkāng.', en: 'Eating vegetables and fruit is healthy.' }
            ]
        },

        {
            id: 'h2m_021', character: '重要', pinyin: 'zhòngyào', meaning: 'important', hsk: 2, category: 'adjectives',
            examples: [
                { cn: '很重要。', pinyin: 'hěn zhòngyào.', en: 'Very important.' },
                { cn: '这件事非常重要。', pinyin: 'zhè jiàn shì fēicháng zhòngyào.', en: 'This matter is very important.' },
                { cn: '重要的是结果。', pinyin: 'zhòngyào de shì jiéguǒ.', en: 'What\'s important is the result.' },
                { cn: '不重要。', pinyin: 'bù zhòngyào.', en: 'Not important.' },
                { cn: '学习对每个人都很重要。', pinyin: 'xuéxí duì měi gè rén dōu hěn zhòngyào.', en: 'Learning is important for everyone.' },
                { cn: '重要的决定。', pinyin: 'zhòngyào de juédìng.', en: 'An important decision.' },
                { cn: '健康比什么都重要。', pinyin: 'jiànkāng bǐ shénme dōu zhòngyào.', en: 'Health is more important than anything.' },
                { cn: '机会很重要。', pinyin: 'jīhuì hěn zhòngyào.', en: 'Opportunity is important.' }
            ]
        },

        {
            id: 'h2m_022', character: '聪明', pinyin: 'cōngmíng', meaning: 'smart', hsk: 2, category: 'adjectives',
            examples: [
                { cn: '很聪明。', pinyin: 'hěn cōngmíng.', en: 'Very smart.' },
                { cn: '聪明的孩子。', pinyin: 'cōngmíng de háizi.', en: 'A smart child.' },
                { cn: '你真聪明。', pinyin: 'nǐ zhēn cōngmíng.', en: 'You are really smart.' },
                { cn: '他从小就很聪明。', pinyin: 'tā cóngxiǎo jiù hěn cōngmíng.', en: 'He has been smart since childhood.' },
                { cn: '聪明人不会这样做。', pinyin: 'cōngmíng rén bù huì zhèyàng zuò.', en: 'A smart person would not do this.' },
                { cn: '聪明反被聪明误。', pinyin: 'cōngmíng fǎn bèi cōngmíng wù.', en: 'Too clever for your own good (proverb).' },
                { cn: '你不只是聪明，还很努力。', pinyin: 'nǐ bù zhǐ shì cōngmíng, hái hěn nǔlì.', en: 'You\'re not just smart, you\'re also hardworking.' },
                { cn: '多读书会更聪明。', pinyin: 'duō dúshū huì gèng cōngmíng.', en: 'Reading more makes you smarter.' }
            ]
        },

        {
            id: 'h2m_023', character: '努力', pinyin: 'nǔlì', meaning: 'hardworking', hsk: 2, category: 'adjectives',
            examples: [
                { cn: '很努力。', pinyin: 'hěn nǔlì.', en: 'Very hardworking.' },
                { cn: '努力学习。', pinyin: 'nǔlì xuéxí.', en: 'Study hard.' },
                { cn: '他工作很努力。', pinyin: 'tā gōngzuò hěn nǔlì.', en: 'He works very hard.' },
                { cn: '努力就有结果。', pinyin: 'nǔlì jiù yǒu jiéguǒ.', en: 'Hard work yields results.' },
                { cn: '我一定会努力的。', pinyin: 'wǒ yīdìng huì nǔlì de.', en: 'I will definitely work hard.' },
                { cn: '大家一起努力。', pinyin: 'dàjiā yīqǐ nǔlì.', en: 'Everyone work hard together.' },
                { cn: '努力不一定成功，不努力一定不成功。', pinyin: 'nǔlì bù yīdìng chénggōng, bù nǔlì yīdìng bù chénggōng.', en: 'Hard work may not guarantee success, but not working hard certainly fails.' },
                { cn: '他很努力学中文。', pinyin: 'tā hěn nǔlì xué zhōngwén.', en: 'He works hard at learning Chinese.' }
            ]
        },

        {
            id: 'h2m_024', character: '认真', pinyin: 'rènzhēn', meaning: 'serious/careful', hsk: 2, category: 'adjectives',
            examples: [
                { cn: '很认真。', pinyin: 'hěn rènzhēn.', en: 'Very careful/serious.' },
                { cn: '认真学习。', pinyin: 'rènzhēn xuéxí.', en: 'Study seriously.' },
                { cn: '他做事很认真。', pinyin: 'tā zuò shì hěn rènzhēn.', en: 'He does things very carefully.' },
                { cn: '认真听老师说话。', pinyin: 'rènzhēn tīng lǎoshī shuōhuà.', en: 'Listen carefully to the teacher.' },
                { cn: '态度认真。', pinyin: 'tàidù rènzhēn.', en: 'A serious attitude.' },
                { cn: '他是个认真的人。', pinyin: 'tā shì gè rènzhēn de rén.', en: 'He is a serious person.' },
                { cn: '认真一点。', pinyin: 'rènzhēn yīdiǎn.', en: 'Be more careful.' },
                { cn: '做事情要认真。', pinyin: 'zuò shìqing yào rènzhēn.', en: 'Be serious about doing things.' }
            ]
        },

        {
            id: 'h2m_025', character: '年轻', pinyin: 'niánqīng', meaning: 'young', hsk: 2, category: 'adjectives',
            examples: [
                { cn: '很年轻。', pinyin: 'hěn niánqīng.', en: 'Very young.' },
                { cn: '他看起来很年轻。', pinyin: 'tā kàn qǐlái hěn niánqīng.', en: 'He looks very young.' },
                { cn: '年轻人。', pinyin: 'niánqīng rén.', en: 'Young people.' },
                { cn: '你还年轻，还有很多机会。', pinyin: 'nǐ hái niánqīng, hái yǒu hěn duō jīhuì.', en: 'You are still young, there are many opportunities.' },
                { cn: '年轻时多学东西。', pinyin: 'niánqīng shí duō xué dōngxi.', en: 'Learn more things while young.' },
                { cn: '年轻一代。', pinyin: 'niánqīng yī dài.', en: 'The younger generation.' },
                { cn: '她比我年轻。', pinyin: 'tā bǐ wǒ niánqīng.', en: 'She is younger than me.' },
                { cn: '年轻就是好。', pinyin: 'niánqīng jiù shì hǎo.', en: 'Being young is great.' }
            ]
        },

        {
            id: 'h2m_026', character: '老', pinyin: 'lǎo', meaning: 'old (people)', hsk: 2, category: 'adjectives',
            examples: [
                { cn: '很老。', pinyin: 'hěn lǎo.', en: 'Very old.' },
                { cn: '老人。', pinyin: 'lǎorén.', en: 'Old person / elderly.' },
                { cn: '他的爷爷很老了。', pinyin: 'tā de yéye hěn lǎo le.', en: 'His grandfather is very old.' },
                { cn: '老朋友。', pinyin: 'lǎo péngyou.', en: 'Old friend.' },
                { cn: '我家有一只老猫。', pinyin: 'wǒ jiā yǒu yī zhī lǎo māo.', en: 'I have an old cat at home.' },
                { cn: '中国有很多古老的文化。', pinyin: 'zhōngguó yǒu hěn duō gǔlǎo de wénhuà.', en: 'China has many ancient cultures.' },
                { cn: '老办法不一定不好。', pinyin: 'lǎo bànfǎ bù yīdìng bù hǎo.', en: 'Old methods are not necessarily bad.' },
                { cn: '老地方见。', pinyin: 'lǎo dìfang jiàn.', en: 'Meet at the usual place.' }
            ]
        },

        {
            id: 'h2m_027', character: '饿', pinyin: 'è', meaning: 'hungry', hsk: 2, category: 'adjectives',
            examples: [
                { cn: '我很饿。', pinyin: 'wǒ hěn è.', en: 'I am hungry.' },
                { cn: '你饿了吗？', pinyin: 'nǐ è le ma?', en: 'Are you hungry?' },
                { cn: '饿死了。', pinyin: 'è sǐ le.', en: 'I\'m starving.' },
                { cn: '不饿。', pinyin: 'bù è.', en: 'Not hungry.' },
                { cn: '我有点饿。', pinyin: 'wǒ yǒudiǎn è.', en: 'I\'m a bit hungry.' },
                { cn: '饿的时候什么都好吃。', pinyin: 'è de shíhou shénme dōu hǎochī.', en: 'When hungry, everything tastes good.' },
                { cn: '别饿着肚子工作。', pinyin: 'bié è zhe dùzi gōngzuò.', en: 'Don\'t work on an empty stomach.' },
                { cn: '从早到现在都没吃东西，太饿了。', pinyin: 'cóng zǎo dào xiànzài dōu méi chī dōngxi, tài è le.', en: 'Haven\'t eaten since morning, so hungry.' }
            ]
        },

        {
            id: 'h2m_028', character: '渴', pinyin: 'kě', meaning: 'thirsty', hsk: 2, category: 'adjectives',
            examples: [
                { cn: '我很渴。', pinyin: 'wǒ hěn kě.', en: 'I am thirsty.' },
                { cn: '你渴吗？', pinyin: 'nǐ kě ma?', en: 'Are you thirsty?' },
                { cn: '渴死了。', pinyin: 'kě sǐ le.', en: 'I\'m dying of thirst.' },
                { cn: '又饿又渴。', pinyin: 'yòu è yòu kě.', en: 'Both hungry and thirsty.' },
                { cn: '跑完步后很渴。', pinyin: 'pǎo wán bù hòu hěn kě.', en: 'Very thirsty after running.' },
                { cn: '多喝水就不渴了。', pinyin: 'duō hē shuǐ jiù bù kě le.', en: 'Drink more water and you won\'t be thirsty.' },
                { cn: '夏天容易渴。', pinyin: 'xiàtiān róngyì kě.', en: 'It\'s easy to get thirsty in summer.' },
                { cn: '我渴得想喝水。', pinyin: 'wǒ kě de xiǎng hē shuǐ.', en: 'I\'m so thirsty I want water.' }
            ]
        },

        {
            id: 'h2m_029', character: '饱', pinyin: 'bǎo', meaning: 'full (after eating)', hsk: 2, category: 'adjectives',
            examples: [
                { cn: '我吃饱了。', pinyin: 'wǒ chī bǎo le.', en: 'I am full.' },
                { cn: '你吃饱了吗？', pinyin: 'nǐ chī bǎo le ma?', en: 'Are you full?' },
                { cn: '吃饱了就想睡觉。', pinyin: 'chī bǎo le jiù xiǎng shuìjiào.', en: 'Feel sleepy after eating full.' },
                { cn: '饱了。', pinyin: 'bǎo le.', en: 'I\'m full.' },
                { cn: '还没吃饱。', pinyin: 'hái méi chī bǎo.', en: 'Haven\'t eaten enough yet.' },
                { cn: '吃得饱饱的。', pinyin: 'chī de bǎo bǎo de.', en: 'Ate until very full.' },
                { cn: '饱了眼福。', pinyin: 'bǎo le yǎnfú.', en: 'Feasted one\'s eyes (enjoyed seeing something).' },
                { cn: '今天吃得太饱了。', pinyin: 'jīntiān chī de tài bǎo le.', en: 'Ate too much today.' }
            ]
        },

        {
            id: 'h2m_030', character: '晴', pinyin: 'qíng', meaning: 'sunny', hsk: 2, category: 'adjectives',
            examples: [
                { cn: '今天晴天。', pinyin: 'jīntiān qíngtiān.', en: 'Today is sunny.' },
                { cn: '天气晴了。', pinyin: 'tiānqì qíng le.', en: 'The weather cleared up.' },
                { cn: '天气预报说明天会晴。', pinyin: 'tiānqì yùbào shuō míngtiān huì qíng.', en: 'The weather forecast says it will be sunny tomorrow.' },
                { cn: '雨过天晴。', pinyin: 'yǔ guò tiān qíng.', en: 'After rain comes sunshine.' },
                { cn: '晴天多好啊。', pinyin: 'qíngtiān duō hǎo a.', en: 'Sunny days are so nice.' },
                { cn: '一连晴了好几天。', pinyin: 'yī lián qíng le hǎo jǐ tiān.', en: 'It\'s been sunny for several days straight.' },
                { cn: '晴空万里。', pinyin: 'qíng kōng wàn lǐ.', en: 'Clear skies for miles.' },
                { cn: '希望明天是晴天。', pinyin: 'xīwàng míngtiān shì qíngtiān.', en: 'Hope tomorrow is sunny.' }
            ]
        },

        // ============================
        // Adverbs
        // ============================
        {
            id: 'h2m_031', character: '就', pinyin: 'jiù', meaning: 'then/just', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '我就来。', pinyin: 'wǒ jiù lái.', en: 'I\'m coming right now.' },
                { cn: '吃完饭就走。', pinyin: 'chī wán fàn jiù zǒu.', en: 'Leave right after eating.' },
                { cn: '就是这个。', pinyin: 'jiù shì zhège.', en: 'This is it.' },
                { cn: '我就不去。', pinyin: 'wǒ jiù bù qù.', en: 'I just won\'t go.' },
                { cn: '他就是我的老师。', pinyin: 'tā jiù shì wǒ de lǎoshī.', en: 'He is my teacher.' },
                { cn: '马上就来。', pinyin: 'mǎshàng jiù lái.', en: 'Coming right away.' },
                { cn: '一学就会。', pinyin: 'yī xué jiù huì.', en: 'Learn it right away.' },
                { cn: '我就知道你会来。', pinyin: 'wǒ jiù zhīdào nǐ huì lái.', en: 'I just knew you would come.' },
                { cn: '他说完就走了。', pinyin: 'tā shuō wán jiù zǒu le.', en: 'He left as soon as he finished speaking.' }
            ]
        },

        {
            id: 'h2m_032', character: '还', pinyin: 'hái', meaning: 'still/also', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '我还要。', pinyin: 'wǒ hái yào.', en: 'I also want.' },
                { cn: '他还在工作。', pinyin: 'tā hái zài gōngzuò.', en: 'He is still working.' },
                { cn: '还有别的吗？', pinyin: 'hái yǒu biéde ma?', en: 'Is there anything else?' },
                { cn: '还是不行。', pinyin: 'háishì bù xíng.', en: 'Still not working.' },
                { cn: '我还想去。', pinyin: 'wǒ hái xiǎng qù.', en: 'I still want to go.' },
                { cn: '还是你厉害。', pinyin: 'háishì nǐ lìhai.', en: 'You are still more impressive.' },
                { cn: '你还要什么？', pinyin: 'nǐ hái yào shénme?', en: 'What else do you want?' },
                { cn: '外面还在下雨。', pinyin: 'wàimiàn hái zài xiàyǔ.', en: 'It\'s still raining outside.' },
                { cn: '他还没回来。', pinyin: 'tā hái méi huílái.', en: 'He hasn\'t come back yet.' }
            ]
        },

        {
            id: 'h2m_033', character: '已经', pinyin: 'yǐjīng', meaning: 'already', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '我已经吃了。', pinyin: 'wǒ yǐjīng chī le.', en: 'I have already eaten.' },
                { cn: '他已经走了。', pinyin: 'tā yǐjīng zǒu le.', en: 'He has already left.' },
                { cn: '已经十点了。', pinyin: 'yǐjīng shí diǎn le.', en: 'It\'s already ten o\'clock.' },
                { cn: '已经晚了。', pinyin: 'yǐjīng wǎn le.', en: 'It\'s already late.' },
                { cn: '我已经学了两年中文。', pinyin: 'wǒ yǐjīng xué le liǎng nián zhōngwén.', en: 'I have already studied Chinese for two years.' },
                { cn: '已经完成了。', pinyin: 'yǐjīng wánchéng le.', en: 'Already completed.' },
                { cn: '已经来不及了。', pinyin: 'yǐjīng láibují le.', en: 'It\'s already too late.' },
                { cn: '他已经不是小孩子了。', pinyin: 'tā yǐjīng bù shì xiǎoháizi le.', en: 'He is no longer a child.' }
            ]
        },

        {
            id: 'h2m_034', character: '一起', pinyin: 'yīqǐ', meaning: 'together', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '我们一起去。', pinyin: 'wǒmen yīqǐ qù.', en: 'Let\'s go together.' },
                { cn: '一起吃饭。', pinyin: 'yīqǐ chīfàn.', en: 'Eat together.' },
                { cn: '他们一起工作。', pinyin: 'tāmen yīqǐ gōngzuò.', en: 'They work together.' },
                { cn: '一起学习中文。', pinyin: 'yīqǐ xuéxí zhōngwén.', en: 'Study Chinese together.' },
                { cn: '我们住在一起。', pinyin: 'wǒmen zhù zài yīqǐ.', en: 'We live together.' },
                { cn: '一起去看电影吧。', pinyin: 'yīqǐ qù kàn diànyǐng ba.', en: 'Let\'s go watch a movie together.' },
                { cn: '把东西放在一起。', pinyin: 'bǎ dōngxi fàng zài yīqǐ.', en: 'Put things together.' },
                { cn: '大家一起努力。', pinyin: 'dàjiā yīqǐ nǔlì.', en: 'Everyone work hard together.' },
                { cn: '我们一起玩吧。', pinyin: 'wǒmen yīqǐ wán ba.', en: 'Let\'s play together.' }
            ]
        },

        {
            id: 'h2m_035', character: '再', pinyin: 'zài', meaning: 'again', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '再说一遍。', pinyin: 'zài shuō yī biàn.', en: 'Say it again.' },
                { cn: '再见。', pinyin: 'zàijiàn.', en: 'Goodbye (see you again).' },
                { cn: '再做一次。', pinyin: 'zài zuò yī cì.', en: 'Do it one more time.' },
                { cn: '下次再来。', pinyin: 'xià cì zài lái.', en: 'Come again next time.' },
                { cn: '我一定会再来的。', pinyin: 'wǒ yīdìng huì zài lái de.', en: 'I will definitely come again.' },
                { cn: '别再说了。', pinyin: 'bié zài shuō le.', en: 'Don\'t say it again.' },
                { cn: '我再想想。', pinyin: 'wǒ zài xiǎng xiǎng.', en: 'Let me think again.' },
                { cn: '明天再谈吧。', pinyin: 'míngtiān zài tán ba.', en: 'Let\'s talk again tomorrow.' }
            ]
        },

        {
            id: 'h2m_036', character: '又', pinyin: 'yòu', meaning: 'again (past)', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '他又来了。', pinyin: 'tā yòu lái le.', en: 'He came again.' },
                { cn: '又下雨了。', pinyin: 'yòu xiàyǔ le.', en: 'It\'s raining again.' },
                { cn: '我又忘了。', pinyin: 'wǒ yòu wàng le.', en: 'I forgot again.' },
                { cn: '他又迟到了。', pinyin: 'tā yòu chídào le.', en: 'He is late again.' },
                { cn: '我又饿了。', pinyin: 'wǒ yòu è le.', en: 'I\'m hungry again.' },
                { cn: '今年又丰收了。', pinyin: 'jīnnián yòu fēngshōu le.', en: 'Another bumper harvest this year.' },
                { cn: '又便宜又好。', pinyin: 'yòu piányi yòu hǎo.', en: 'Both cheap and good.' },
                { cn: '弟弟又长高了。', pinyin: 'dìdi yòu zhǎng gāo le.', en: 'Younger brother grew taller again.' }
            ]
        },

        {
            id: 'h2m_037', character: '真', pinyin: 'zhēn', meaning: 'really', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '真好！', pinyin: 'zhēn hǎo!', en: 'Really good!' },
                { cn: '真漂亮。', pinyin: 'zhēn piàoliang.', en: 'Really beautiful.' },
                { cn: '真好吃。', pinyin: 'zhēn hǎochī.', en: 'Really delicious.' },
                { cn: '真高兴见到你。', pinyin: 'zhēn gāoxìng jiàndào nǐ.', en: 'Really happy to see you.' },
                { cn: '真有意思。', pinyin: 'zhēn yǒu yìsi.', en: 'Really interesting.' },
                { cn: '今天真冷。', pinyin: 'jīntiān zhēn lěng.', en: 'Today is really cold.' },
                { cn: '你真聪明。', pinyin: 'nǐ zhēn cōngmíng.', en: 'You are really smart.' },
                { cn: '真不容易。', pinyin: 'zhēn bù róngyì.', en: 'Really not easy.' },
                { cn: '这个电影真好看。', pinyin: 'zhège diànyǐng zhēn hǎokàn.', en: 'This movie is really good.' }
            ]
        },

        {
            id: 'h2m_038', character: '最', pinyin: 'zuì', meaning: 'most', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '最好。', pinyin: 'zuì hǎo.', en: 'The best.' },
                { cn: '最重要。', pinyin: 'zuì zhòngyào.', en: 'Most important.' },
                { cn: '她最漂亮。', pinyin: 'tā zuì piàoliang.', en: 'She is the most beautiful.' },
                { cn: '我最喜欢这个。', pinyin: 'wǒ zuì xǐhuān zhège.', en: 'I like this the most.' },
                { cn: '最大的城市。', pinyin: 'zuì dà de chéngshì.', en: 'The biggest city.' },
                { cn: '北京是我最想去的地方。', pinyin: 'běijīng shì wǒ zuì xiǎng qù de dìfang.', en: 'Beijing is the place I want to go most.' },
                { cn: '最快的方法。', pinyin: 'zuì kuài de fāngfǎ.', en: 'The fastest method.' },
                { cn: '今天是今年最热的一天。', pinyin: 'jīntiān shì jīnnián zuì rè de yī tiān.', en: 'Today is the hottest day of the year.' }
            ]
        },

        {
            id: 'h2m_039', character: '更', pinyin: 'gèng', meaning: 'more', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '更好。', pinyin: 'gèng hǎo.', en: 'Better.' },
                { cn: '更大了。', pinyin: 'gèng dà le.', en: 'Even bigger.' },
                { cn: '我想了解更多。', pinyin: 'wǒ xiǎng liǎojiě gèng duō.', en: 'I want to understand more.' },
                { cn: '更快一点。', pinyin: 'gèng kuài yīdiǎn.', en: 'A bit faster.' },
                { cn: '这个更便宜。', pinyin: 'zhège gèng piányi.', en: 'This one is cheaper.' },
                { cn: '今天比昨天更冷。', pinyin: 'jīntiān bǐ zuótiān gèng lěng.', en: 'Today is colder than yesterday.' },
                { cn: '我更喜欢这个颜色。', pinyin: 'wǒ gèng xǐhuān zhège yánsè.', en: 'I prefer this color.' },
                { cn: '学习中文越来越有意思了。', pinyin: 'xuéxí zhōngwén yuèláiyuè yǒu yìsi le.', en: 'Learning Chinese is becoming more and more interesting.' },
                { cn: '你有没有更好的办法？', pinyin: 'nǐ yǒu méiyǒu gèng hǎo de bànfǎ?', en: 'Do you have a better method?' }
            ]
        },

        {
            id: 'h2m_040', character: '非常', pinyin: 'fēicháng', meaning: 'very', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '非常好。', pinyin: 'fēicháng hǎo.', en: 'Very good.' },
                { cn: '非常感谢。', pinyin: 'fēicháng gǎnxiè.', en: 'Very grateful.' },
                { cn: '非常漂亮。', pinyin: 'fēicháng piàoliang.', en: 'Very beautiful.' },
                { cn: '我非常喜欢中国。', pinyin: 'wǒ fēicháng xǐhuān zhōngguó.', en: 'I like China very much.' },
                { cn: '今天非常热。', pinyin: 'jīntiān fēicháng rè.', en: 'Today is very hot.' },
                { cn: '他工作非常努力。', pinyin: 'tā gōngzuò fēicháng nǔlì.', en: 'He works very hard.' },
                { cn: '这道菜非常好吃。', pinyin: 'zhè dào cài fēicháng hǎochī.', en: 'This dish is very delicious.' },
                { cn: '我非常想家。', pinyin: 'wǒ fēicháng xiǎng jiā.', en: 'I miss home very much.' },
                { cn: '非常高兴认识你。', pinyin: 'fēicháng gāoxìng rènshi nǐ.', en: 'Very happy to meet you.' }
            ]
        },

        {
            id: 'h2m_041', character: '特别', pinyin: 'tèbié', meaning: 'especially', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '特别好。', pinyin: 'tèbié hǎo.', en: 'Especially good.' },
                { cn: '特别感谢。', pinyin: 'tèbié gǎnxiè.', en: 'Special thanks.' },
                { cn: '这个特别好吃。', pinyin: 'zhège tèbié hǎochī.', en: 'This is especially delicious.' },
                { cn: '今天特别忙。', pinyin: 'jīntiān tèbié máng.', en: 'Today is especially busy.' },
                { cn: '特别的日子。', pinyin: 'tèbié de rìzi.', en: 'A special day.' },
                { cn: '没有什么特别的。', pinyin: 'méiyǒu shénme tèbié de.', en: 'Nothing special.' },
                { cn: '他对中文特别感兴趣。', pinyin: 'tā duì zhōngwén tèbié gǎn xìngqù.', en: 'He is especially interested in Chinese.' },
                { cn: '北京特别大。', pinyin: 'běijīng tèbié dà.', en: 'Beijing is especially big.' },
                { cn: '我特别想学中文。', pinyin: 'wǒ tèbié xiǎng xué zhōngwén.', en: 'I especially want to learn Chinese.' }
            ]
        },

        {
            id: 'h2m_042', character: '比较', pinyin: 'bǐjiào', meaning: 'relatively', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '比较好。', pinyin: 'bǐjiào hǎo.', en: 'Relatively good.' },
                { cn: '比较便宜。', pinyin: 'bǐjiào piányi.', en: 'Relatively cheap.' },
                { cn: '比较近。', pinyin: 'bǐjiào jìn.', en: 'Relatively close.' },
                { cn: '这个比较难。', pinyin: 'zhège bǐjiào nán.', en: 'This is relatively difficult.' },
                { cn: '比较一下价格。', pinyin: 'bǐjiào yīxià jiàgé.', en: 'Compare the prices.' },
                { cn: '今天比较冷。', pinyin: 'jīntiān bǐjiào lěng.', en: 'Today is relatively cold.' },
                { cn: '我比较喜欢喝茶。', pinyin: 'wǒ bǐjiào xǐhuān hē chá.', en: 'I relatively prefer drinking tea.' },
                { cn: '他的中文比较好。', pinyin: 'tā de zhōngwén bǐjiào hǎo.', en: 'His Chinese is relatively good.' },
                { cn: '这个城市比较小。', pinyin: 'zhège chéngshì bǐjiào xiǎo.', en: 'This city is relatively small.' }
            ]
        },

        {
            id: 'h2m_043', character: '一定', pinyin: 'yīdìng', meaning: 'certainly', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '我一定去。', pinyin: 'wǒ yīdìng qù.', en: 'I will certainly go.' },
                { cn: '一定要来。', pinyin: 'yīdìng yào lái.', en: 'You must come.' },
                { cn: '一定没问题。', pinyin: 'yīdìng méi wèntí.', en: 'Certainly no problem.' },
                { cn: '他一定会成功的。', pinyin: 'tā yīdìng huì chénggōng de.', en: 'He will certainly succeed.' },
                { cn: '不一定是真的。', pinyin: 'bù yīdìng shì zhēn de.', en: 'Not necessarily true.' },
                { cn: '我一定帮你。', pinyin: 'wǒ yīdìng bāng nǐ.', en: 'I will certainly help you.' },
                { cn: '明天一定会更好。', pinyin: 'míngtiān yīdìng huì gèng hǎo.', en: 'Tomorrow will certainly be better.' },
                { cn: '你一定要小心。', pinyin: 'nǐ yīdìng yào xiǎoxīn.', en: 'You must be careful.' }
            ]
        },

        {
            id: 'h2m_044', character: '可能', pinyin: 'kěnéng', meaning: 'maybe', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '可能吧。', pinyin: 'kěnéng ba.', en: 'Maybe.' },
                { cn: '可能下雨。', pinyin: 'kěnéng xiàyǔ.', en: 'It might rain.' },
                { cn: '他可能不来了。', pinyin: 'tā kěnéng bù lái le.', en: 'He might not come.' },
                { cn: '有可能。', pinyin: 'yǒu kěnéng.', en: 'It\'s possible.' },
                { cn: '不可能。', pinyin: 'bù kěnéng.', en: 'Impossible.' },
                { cn: '可能是真的。', pinyin: 'kěnéng shì zhēn de.', en: 'It might be true.' },
                { cn: '这个问题可能很严重。', pinyin: 'zhège wèntí kěnéng hěn yánzhòng.', en: 'This problem might be very serious.' },
                { cn: '明天可能不会下雪。', pinyin: 'míngtiān kěnéng bù huì xiàxuě.', en: 'It might not snow tomorrow.' }
            ]
        },

        {
            id: 'h2m_045', character: '当然', pinyin: 'dāngrán', meaning: 'of course', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '当然可以。', pinyin: 'dāngrán kěyǐ.', en: 'Of course.' },
                { cn: '当然好。', pinyin: 'dāngrán hǎo.', en: 'Of course it\'s good.' },
                { cn: '当然要去。', pinyin: 'dāngrán yào qù.', en: 'Of course I\'ll go.' },
                { cn: '你当然可以来。', pinyin: 'nǐ dāngrán kěyǐ lái.', en: 'Of course you can come.' },
                { cn: '当然不是。', pinyin: 'dāngrán bù shì.', en: 'Of course not.' },
                { cn: '当然了，他是最棒的。', pinyin: 'dāngrán le, tā shì zuì bàng de.', en: 'Of course, he is the best.' },
                { cn: '这当然是好事。', pinyin: 'zhè dāngrán shì hǎo shì.', en: 'This is of course a good thing.' },
                { cn: '当然没问题。', pinyin: 'dāngrán méi wèntí.', en: 'Of course no problem.' }
            ]
        },

        {
            id: 'h2m_046', character: '其实', pinyin: 'qíshí', meaning: 'actually', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '其实不是。', pinyin: 'qíshí bù shì.', en: 'Actually no.' },
                { cn: '其实我知道。', pinyin: 'qíshí wǒ zhīdào.', en: 'Actually I know.' },
                { cn: '其实很容易。', pinyin: 'qíshí hěn róngyì.', en: 'Actually it\'s very easy.' },
                { cn: '其实他很好。', pinyin: 'qíshí tā hěn hǎo.', en: 'Actually he is very nice.' },
                { cn: '其实我不太饿。', pinyin: 'qíshí wǒ bù tài è.', en: 'Actually I\'m not very hungry.' },
                { cn: '其实你应该去。', pinyin: 'qíshí nǐ yīnggāi qù.', en: 'Actually you should go.' },
                { cn: '他说不难，其实很难。', pinyin: 'tā shuō bù nán, qíshí hěn nán.', en: 'He said it\'s not hard, actually it is very hard.' },
                { cn: '其实我昨天就来了。', pinyin: 'qíshí wǒ zuótiān jiù lái le.', en: 'Actually I came yesterday.' }
            ]
        },

        {
            id: 'h2m_047', character: '正在', pinyin: 'zhèngzài', meaning: 'in the process of', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '我正在学习。', pinyin: 'wǒ zhèngzài xuéxí.', en: 'I am studying.' },
                { cn: '他正在吃饭。', pinyin: 'tā zhèngzài chīfàn.', en: 'He is eating.' },
                { cn: '妈妈正在做饭。', pinyin: 'māma zhèngzài zuòfàn.', en: 'Mom is cooking.' },
                { cn: '外面正在下雨。', pinyin: 'wàimiàn zhèngzài xiàyǔ.', en: 'It\'s raining outside.' },
                { cn: '警察正在调查这件事。', pinyin: 'jǐngchá zhèngzài diàochá zhè jiàn shì.', en: 'The police are investigating this matter.' },
                { cn: '他们正在开会。', pinyin: 'tāmen zhèngzài kāihuì.', en: 'They are having a meeting.' },
                { cn: '他正在找工作。', pinyin: 'tā zhèngzài zhǎo gōngzuò.', en: 'He is looking for a job.' },
                { cn: '我正忙着呢。', pinyin: 'wǒ zhèng máng zhe ne.', en: 'I am busy right now.' }
            ]
        },

        {
            id: 'h2m_048', character: '一直', pinyin: 'yīzhí', meaning: 'always/continuously', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '我一直在这里。', pinyin: 'wǒ yīzhí zài zhèlǐ.', en: 'I have always been here.' },
                { cn: '一直往前走。', pinyin: 'yīzhí wǎng qián zǒu.', en: 'Keep going straight ahead.' },
                { cn: '我一直在等你。', pinyin: 'wǒ yīzhí zài děng nǐ.', en: 'I have been waiting for you.' },
                { cn: '一直下雨。', pinyin: 'yīzhí xiàyǔ.', en: 'It\'s been raining continuously.' },
                { cn: '他一直很努力。', pinyin: 'tā yīzhí hěn nǔlì.', en: 'He has always been hardworking.' },
                { cn: '这个问题一直没有解决。', pinyin: 'zhège wèntí yīzhí méiyǒu jiějué.', en: 'This problem has never been solved.' },
                { cn: '我一直想学中文。', pinyin: 'wǒ yīzhí xiǎng xué zhōngwén.', en: 'I have always wanted to learn Chinese.' },
                { cn: '从这里一直走就到了。', pinyin: 'cóng zhèlǐ yīzhí zǒu jiù dào le.', en: 'Walk straight from here and you\'ll arrive.' }
            ]
        },

        {
            id: 'h2m_049', character: '有时候', pinyin: 'yǒushíhou', meaning: 'sometimes', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '有时候我去。', pinyin: 'yǒushíhou wǒ qù.', en: 'Sometimes I go.' },
                { cn: '有时候会下雨。', pinyin: 'yǒushíhou huì xiàyǔ.', en: 'Sometimes it rains.' },
                { cn: '我有时候在家工作。', pinyin: 'wǒ yǒushíhou zài jiā gōngzuò.', en: 'Sometimes I work from home.' },
                { cn: '有时候他也会生气。', pinyin: 'yǒushíhou tā yě huì shēngqì.', en: 'Sometimes he also gets angry.' },
                { cn: '有时候走路比坐车快。', pinyin: 'yǒushíhou zǒulù bǐ zuòchē kuài.', en: 'Sometimes walking is faster than taking a car.' },
                { cn: '我有时候会忘记带手机。', pinyin: 'wǒ yǒushíhou huì wàngjì dài shǒujī.', en: 'Sometimes I forget to bring my phone.' },
                { cn: '有时候周末我们会去公园。', pinyin: 'yǒushíhou zhōumò wǒmen huì qù gōngyuán.', en: 'Sometimes on weekends we go to the park.' },
                { cn: '有时候不说话也是一种回答。', pinyin: 'yǒushíhou bù shuōhuà yě shì yī zhǒng huídá.', en: 'Sometimes not speaking is also a kind of answer.' }
            ]
        },

        {
            id: 'h2m_050', character: '终于', pinyin: 'zhōngyú', meaning: 'finally', hsk: 2, category: 'adverbs',
            examples: [
                { cn: '终于到了！', pinyin: 'zhōngyú dào le!', en: 'Finally arrived!' },
                { cn: '我终于明白了。', pinyin: 'wǒ zhōngyú míngbái le.', en: 'I finally understand.' },
                { cn: '终于可以回家了。', pinyin: 'zhōngyú kěyǐ huí jiā le.', en: 'Finally can go home.' },
                { cn: '终于下雨了。', pinyin: 'zhōngyú xiàyǔ le.', en: 'It\'s finally raining.' },
                { cn: '他终于找到了工作。', pinyin: 'tā zhōngyú zhǎodào le gōngzuò.', en: 'He finally found a job.' },
                { cn: '等了好久，终于来了。', pinyin: 'děng le hǎojiǔ, zhōngyú lái le.', en: 'Waited a long time, finally came.' },
                { cn: '考试终于结束了。', pinyin: 'kǎoshì zhōngyú jiéshù le.', en: 'The exam is finally over.' },
                { cn: '春天终于来了。', pinyin: 'chūntiān zhōngyú lái le.', en: 'Spring has finally arrived.' }
            ]
        },

        // ============================
        // Nouns
        // ============================
        {
            id: 'h2m_051', character: '旁边', pinyin: 'pángbiān', meaning: 'beside', hsk: 2, category: 'nouns',
            examples: [
                { cn: '在旁边。', pinyin: 'zài pángbiān.', en: 'Beside.' },
                { cn: '他坐在我旁边。', pinyin: 'tā zuò zài wǒ pángbiān.', en: 'He sits beside me.' },
                { cn: '旁边的人。', pinyin: 'pángbiān de rén.', en: 'The person beside.' },
                { cn: '医院旁边有一个公园。', pinyin: 'yīyuàn pángbiān yǒu yī gè gōngyuán.', en: 'There is a park beside the hospital.' },
                { cn: '我旁边的座位是空的。', pinyin: 'wǒ pángbiān de zuòwèi shì kōng de.', en: 'The seat beside me is empty.' },
                { cn: '超市就在银行旁边。', pinyin: 'chāoshì jiù zài yínháng pángbiān.', en: 'The supermarket is right beside the bank.' },
                { cn: '你旁边的那个东西是什么？', pinyin: 'nǐ pángbiān de nàge dōngxi shì shénme?', en: 'What is that thing beside you?' },
                { cn: '站在我旁边。', pinyin: 'zhàn zài wǒ pángbiān.', en: 'Stand beside me.' }
            ]
        },

        {
            id: 'h2m_052', character: '对面', pinyin: 'duìmiàn', meaning: 'opposite', hsk: 2, category: 'nouns',
            examples: [
                { cn: '在对面。', pinyin: 'zài duìmiàn.', en: 'Across the street.' },
                { cn: '学校在银行对面。', pinyin: 'xuéxiào zài yínháng duìmiàn.', en: 'The school is opposite the bank.' },
                { cn: '我家对面有个超市。', pinyin: 'wǒ jiā duìmiàn yǒu gè chāoshì.', en: 'There is a supermarket opposite my house.' },
                { cn: '坐在我对面的人是谁？', pinyin: 'zuò zài wǒ duìmiàn de rén shì shéi?', en: 'Who is the person sitting opposite me?' },
                { cn: '请去对面等我。', pinyin: 'qǐng qù duìmiàn děng wǒ.', en: 'Please wait for me across the street.' },
                { cn: '对面的山上有很多树。', pinyin: 'duìmiàn de shān shàng yǒu hěn duō shù.', en: 'There are many trees on the mountain opposite.' },
                { cn: '他就住在对面。', pinyin: 'tā jiù zhù zài duìmiàn.', en: 'He lives right opposite.' },
                { cn: '对面的那个人你认识吗？', pinyin: 'duìmiàn de nàge rén nǐ rènshi ma?', en: 'Do you know that person across the street?' }
            ]
        },

        {
            id: 'h2m_053', character: '中间', pinyin: 'zhōngjiān', meaning: 'middle', hsk: 2, category: 'nouns',
            examples: [
                { cn: '在中间。', pinyin: 'zài zhōngjiān.', en: 'In the middle.' },
                { cn: '坐中间的那排。', pinyin: 'zuò zhōngjiān de nà pái.', en: 'Sit in the middle row.' },
                { cn: '中间那个人是我哥哥。', pinyin: 'zhōngjiān nàge rén shì wǒ gēge.', en: 'The person in the middle is my older brother.' },
                { cn: '把桌子放在房间中间。', pinyin: 'bǎ zhuōzi fàng zài fángjiān zhōngjiān.', en: 'Put the table in the middle of the room.' },
                { cn: '两座楼中间有个花园。', pinyin: 'liǎng zuò lóu zhōngjiān yǒu gè huāyuán.', en: 'There\'s a garden between the two buildings.' },
                { cn: '请站在中间。', pinyin: 'qǐng zhàn zài zhōngjiān.', en: 'Please stand in the middle.' },
                { cn: '从中间开始。', pinyin: 'cóng zhōngjiān kāishǐ.', en: 'Start from the middle.' },
                { cn: '中间休息十分钟。', pinyin: 'zhōngjiān xiūxi shí fēnzhōng.', en: 'Take a ten-minute break in the middle.' }
            ]
        },

        {
            id: 'h2m_054', character: '里', pinyin: 'lǐ', meaning: 'inside', hsk: 2, category: 'nouns',
            examples: [
                { cn: '在家里。', pinyin: 'zài jiālǐ.', en: 'At home.' },
                { cn: '房间里有人吗？', pinyin: 'fángjiān lǐ yǒu rén ma?', en: 'Is there anyone in the room?' },
                { cn: '书包里有书。', pinyin: 'shūbāo lǐ yǒu shū.', en: 'There are books in the backpack.' },
                { cn: '杯子里的水。', pinyin: 'bēizi lǐ de shuǐ.', en: 'The water in the cup.' },
                { cn: '你心里怎么想？', pinyin: 'nǐ xīnli zěnme xiǎng?', en: 'What do you think in your heart?' },
                { cn: '城市里有很多高楼。', pinyin: 'chéngshì lǐ yǒu hěn duō gāolóu.', en: 'There are many tall buildings in the city.' },
                { cn: '在黑暗里看不太清楚。', pinyin: 'zài hēiàn lǐ kàn bù tài qīngchu.', en: 'Can\'t see clearly in the dark.' },
                { cn: '冰箱里什么都没有。', pinyin: 'bīngxiāng lǐ shénme dōu méiyǒu.', en: 'There\'s nothing in the refrigerator.' }
            ]
        },

        {
            id: 'h2m_055', character: '外', pinyin: 'wài', meaning: 'outside', hsk: 2, category: 'nouns',
            examples: [
                { cn: '在外面。', pinyin: 'zài wàimiàn.', en: 'Outside.' },
                { cn: '门外有人。', pinyin: 'mén wài yǒu rén.', en: 'There\'s someone outside the door.' },
                { cn: '窗户外面。', pinyin: 'chuānghu wàimiàn.', en: 'Outside the window.' },
                { cn: '出了学校大门往左走。', pinyin: 'chū le xuéxiào dàmén wǎng zuǒ zǒu.', en: 'After leaving the school gate, go left.' },
                { cn: '除了他以外。', pinyin: 'chúle tā yǐwài.', en: 'Besides him.' },
                { cn: '天外有天。', pinyin: 'tiān wài yǒu tiān.', en: 'There\'s always someone better.' },
                { cn: '另外的事情。', pinyin: 'lìngwài de shìqing.', en: 'Other matters.' },
                { cn: '校外活动。', pinyin: 'xiàowài huódòng.', en: 'Extracurricular activities.' }
            ]
        },

        {
            id: 'h2m_056', character: '上', pinyin: 'shàng', meaning: 'on/above', hsk: 2, category: 'nouns',
            examples: [
                { cn: '在上面。', pinyin: 'zài shàngmiàn.', en: 'On top.' },
                { cn: '桌子上有一本书。', pinyin: 'zhuōzi shàng yǒu yī běn shū.', en: 'There is a book on the table.' },
                { cn: '马上就来。', pinyin: 'mǎshàng jiù lái.', en: 'Coming right away.' },
                { cn: '路上小心。', pinyin: 'lùshàng xiǎoxīn.', en: 'Be careful on the road.' },
                { cn: '天上的星星很亮。', pinyin: 'tiān shàng de xīngxīng hěn liàng.', en: 'The stars in the sky are very bright.' },
                { cn: '他在地板上坐着。', pinyin: 'tā zài dìbǎn shàng zuò zhe.', en: 'He is sitting on the floor.' },
                { cn: '墙上挂着一幅画。', pinyin: 'qiáng shàng guà zhe yī fú huà.', en: 'A painting hangs on the wall.' },
                { cn: '世界上没有完全一样的东西。', pinyin: 'shìjiè shàng méiyǒu wánquán yīyàng de dōngxi.', en: 'There is nothing completely identical in the world.' }
            ]
        },

        {
            id: 'h2m_057', character: '下', pinyin: 'xià', meaning: 'under/below', hsk: 2, category: 'nouns',
            examples: [
                { cn: '在下面。', pinyin: 'zài xiàmiàn.', en: 'Below.' },
                { cn: '树下很凉快。', pinyin: 'shù xià hěn liángkuai.', en: 'It\'s cool under the tree.' },
                { cn: '椅子下面有东西。', pinyin: 'yǐzi xiàmiàn yǒu dōngxi.', en: 'There\'s something under the chair.' },
                { cn: '下个星期。', pinyin: 'xià gè xīngqī.', en: 'Next week.' },
                { cn: '他的眼神向下看。', pinyin: 'tā de yǎnshén xiàng xià kàn.', en: 'His eyes looked downward.' },
                { cn: '在楼下的商店。', pinyin: 'zài lóu xià de shāngdiàn.', en: 'The store downstairs.' },
                { cn: '猫在桌子下面睡觉。', pinyin: 'māo zài zhuōzi xiàmiàn shuìjiào.', en: 'The cat is sleeping under the table.' },
                { cn: '往下走一层就到了。', pinyin: 'wǎng xià zǒu yī céng jiù dào le.', en: 'Go down one floor and you\'re there.' }
            ]
        },

        {
            id: 'h2m_058', character: '左', pinyin: 'zuǒ', meaning: 'left', hsk: 2, category: 'nouns',
            examples: [
                { cn: '在左边。', pinyin: 'zài zuǒbiān.', en: 'On the left.' },
                { cn: '往左拐。', pinyin: 'wǎng zuǒ guǎi.', en: 'Turn left.' },
                { cn: '左手边。', pinyin: 'zuǒshǒu biān.', en: 'Left-hand side.' },
                { cn: '请举左手。', pinyin: 'qǐng jǔ zuǒ shǒu.', en: 'Please raise your left hand.' },
                { cn: '从左边数第三个。', pinyin: 'cóng zuǒbiān shǔ dì sān gè.', en: 'The third one from the left.' },
                { cn: '邮局在银行的左边。', pinyin: 'yóujú zài yínháng de zuǒbiān.', en: 'The post office is to the left of the bank.' },
                { cn: '请向左转。', pinyin: 'qǐng xiàng zuǒ zhuǎn.', en: 'Please turn left.' },
                { cn: '他的左眼有点不舒服。', pinyin: 'tā de zuǒ yǎn yǒudiǎn bù shūfu.', en: 'His left eye feels a bit uncomfortable.' }
            ]
        },

        {
            id: 'h2m_059', character: '右', pinyin: 'yòu', meaning: 'right', hsk: 2, category: 'nouns',
            examples: [
                { cn: '在右边。', pinyin: 'zài yòubiān.', en: 'On the right.' },
                { cn: '往右拐。', pinyin: 'wǎng yòu guǎi.', en: 'Turn right.' },
                { cn: '右手边。', pinyin: 'yòushǒu biān.', en: 'Right-hand side.' },
                { cn: '大多数人用右手写字。', pinyin: 'dà duōshù rén yòng yòu shǒu xiězì.', en: 'Most people write with their right hand.' },
                { cn: '在十字路口向右转。', pinyin: 'zài shízì lùkǒu xiàng yòu zhuǎn.', en: 'Turn right at the intersection.' },
                { cn: '右边那个是大楼。', pinyin: 'yòubiān nàge shì dàlóu.', en: 'The one on the right is the big building.' },
                { cn: '桌子右边放着电脑。', pinyin: 'zhuōzi yòubiān fàng zhe diànnǎo.', en: 'The computer is on the right side of the desk.' },
                { cn: '右边的门是出口。', pinyin: 'yòubiān de mén shì chūkǒu.', en: 'The door on the right is the exit.' }
            ]
        },

        {
            id: 'h2m_060', character: '东', pinyin: 'dōng', meaning: 'east', hsk: 2, category: 'nouns',
            examples: [
                { cn: '往东走。', pinyin: 'wǎng dōng zǒu.', en: 'Go east.' },
                { cn: '东边。', pinyin: 'dōngbiān.', en: 'East side.' },
                { cn: '中国在亚洲的东部。', pinyin: 'zhōngguó zài yàzhōu de dōngbù.', en: 'China is in eastern Asia.' },
                { cn: '太阳从东边升起。', pinyin: 'tàiyáng cóng dōngbiān shēngqǐ.', en: 'The sun rises from the east.' },
                { cn: '东风。', pinyin: 'dōngfēng.', en: 'East wind.' },
                { cn: '东京是日本的首都。', pinyin: 'dōngjīng shì rìběn de shǒudū.', en: 'Tokyo is the capital of Japan.' },
                { cn: '东北方向。', pinyin: 'dōngběi fāngxiàng.', en: 'Northeast direction.' },
                { cn: '北京的东城区。', pinyin: 'běijīng de dōngchéng qū.', en: 'The Dongcheng District of Beijing.' }
            ]
        },

        {
            id: 'h2m_061', character: '西', pinyin: 'xī', meaning: 'west', hsk: 2, category: 'nouns',
            examples: [
                { cn: '往西走。', pinyin: 'wǎng xī zǒu.', en: 'Go west.' },
                { cn: '西边。', pinyin: 'xībiān.', en: 'West side.' },
                { cn: '太阳在西边落下。', pinyin: 'tàiyáng zài xībiān luòxià.', en: 'The sun sets in the west.' },
                { cn: '西方文化。', pinyin: 'xīfāng wénhuà.', en: 'Western culture.' },
                { cn: '西安是个古城。', pinyin: 'xīān shì gè gǔ chéng.', en: 'Xi\'an is an ancient city.' },
                { cn: '我们往西北方向走。', pinyin: 'wǒmen wǎng xīběi fāngxiàng zǒu.', en: 'We\'re heading northwest.' },
                { cn: '西瓜很好吃。', pinyin: 'xīguā hěn hǎochī.', en: 'Watermelon is very tasty.' },
                { cn: '我喜欢吃西餐。', pinyin: 'wǒ xǐhuān chī xīcān.', en: 'I like eating Western food.' }
            ]
        },

        {
            id: 'h2m_062', character: '南', pinyin: 'nán', meaning: 'south', hsk: 2, category: 'nouns',
            examples: [
                { cn: '往南走。', pinyin: 'wǎng nán zǒu.', en: 'Go south.' },
                { cn: '南边。', pinyin: 'nánbiān.', en: 'South side.' },
                { cn: '中国的南方很热。', pinyin: 'zhōngguó de nánfāng hěn rè.', en: 'Southern China is very hot.' },
                { cn: '南京是个美丽的城市。', pinyin: 'nánjīng shì gè měilì de chéngshì.', en: 'Nanjing is a beautiful city.' },
                { cn: '向南走两公里。', pinyin: 'xiàng nán zǒu liǎng gōnglǐ.', en: 'Walk two kilometers south.' },
                { cn: '南方人喜欢吃米饭。', pinyin: 'nánfāng rén xǐhuān chī mǐfàn.', en: 'Southerners like to eat rice.' },
                { cn: '窗户朝南。', pinyin: 'chuānghu cháo nán.', en: 'The window faces south.' },
                { cn: '云南的风景很美。', pinyin: 'yúnnán de fēngjǐng hěn měi.', en: 'Yunnan\'s scenery is very beautiful.' }
            ]
        },

        {
            id: 'h2m_063', character: '北', pinyin: 'běi', meaning: 'north', hsk: 2, category: 'nouns',
            examples: [
                { cn: '往北走。', pinyin: 'wǎng běi zǒu.', en: 'Go north.' },
                { cn: '北边。', pinyin: 'běibiān.', en: 'North side.' },
                { cn: '中国的北方很冷。', pinyin: 'zhōngguó de běifāng hěn lěng.', en: 'Northern China is very cold.' },
                { cn: '北京在中国的北部。', pinyin: 'běijīng zài zhōngguó de běi bù.', en: 'Beijing is in northern China.' },
                { cn: '他住在城北。', pinyin: 'tā zhù zài chéng běi.', en: 'He lives in the north of the city.' },
                { cn: '北方人吃面比较多。', pinyin: 'běifāng rén chī miàn bǐjiào duō.', en: 'Northerners eat more noodles.' },
                { cn: '北极很冷。', pinyin: 'běijí hěn lěng.', en: 'The North Pole is very cold.' },
                { cn: '北京欢迎你。', pinyin: 'běijīng huānyíng nǐ.', en: 'Beijing welcomes you.' }
            ]
        },

        {
            id: 'h2m_064', character: '手机', pinyin: 'shǒujī', meaning: 'mobile phone', hsk: 2, category: 'nouns',
            examples: [
                { cn: '我的手机。', pinyin: 'wǒ de shǒujī.', en: 'My phone.' },
                { cn: '手机没电了。', pinyin: 'shǒujī méi diàn le.', en: 'The phone is out of battery.' },
                { cn: '买了个新手机。', pinyin: 'mǎi le gè xīn shǒujī.', en: 'Bought a new phone.' },
                { cn: '请把手机给我。', pinyin: 'qǐng bǎ shǒujī gěi wǒ.', en: 'Please give me the phone.' },
                { cn: '手机响了。', pinyin: 'shǒujī xiǎng le.', en: 'The phone is ringing.' },
                { cn: '现在谁没有手机？', pinyin: 'xiànzài shéi méiyǒu shǒujī?', en: 'Who doesn\'t have a phone nowadays?' },
                { cn: '用手机可以学习中文。', pinyin: 'yòng shǒujī kěyǐ xuéxí zhōngwén.', en: 'You can learn Chinese with your phone.' },
                { cn: '手机很方便。', pinyin: 'shǒujī hěn fāngbiàn.', en: 'Mobile phones are very convenient.' }
            ]
        },

        {
            id: 'h2m_065', character: '电脑', pinyin: 'diànnǎo', meaning: 'computer', hsk: 2, category: 'nouns',
            examples: [
                { cn: '用电脑。', pinyin: 'yòng diànnǎo.', en: 'Use a computer.' },
                { cn: '我的电脑坏了。', pinyin: 'wǒ de diànnǎo huài le.', en: 'My computer broke.' },
                { cn: '打开电脑。', pinyin: 'dǎkāi diànnǎo.', en: 'Turn on the computer.' },
                { cn: '他买了一台新电脑。', pinyin: 'tā mǎi le yī tái xīn diànnǎo.', en: 'He bought a new computer.' },
                { cn: '在电脑上写作业。', pinyin: 'zài diànnǎo shàng xiě zuòyè.', en: 'Write homework on the computer.' },
                { cn: '电脑可以帮助我们很多。', pinyin: 'diànnǎo kěyǐ bāngzhù wǒmen hěn duō.', en: 'Computers can help us a lot.' },
                { cn: '关掉电脑休息一下。', pinyin: 'guān diào diànnǎo xiūxi yīxià.', en: 'Turn off the computer and rest a bit.' },
                { cn: '他整天坐在电脑前面。', pinyin: 'tā zhěng tiān zuò zài diànnǎo qiánmiàn.', en: 'He sits in front of the computer all day.' }
            ]
        },

        {
            id: 'h2m_066', character: '电视', pinyin: 'diànshì', meaning: 'television', hsk: 2, category: 'nouns',
            examples: [
                { cn: '看电视。', pinyin: 'kàn diànshì.', en: 'Watch TV.' },
                { cn: '这个电视节目很好看。', pinyin: 'zhège diànshì jiémù hěn hǎokàn.', en: 'This TV program is very good.' },
                { cn: '把电视关掉。', pinyin: 'bǎ diànshì guān diào.', en: 'Turn off the TV.' },
                { cn: '孩子很喜欢看电视。', pinyin: 'háizi hěn xǐhuān kàn diànshì.', en: 'Children like watching TV very much.' },
                { cn: '打开电视看看新闻。', pinyin: 'dǎkāi diànshì kàn kàn xīnwén.', en: 'Turn on the TV to watch the news.' },
                { cn: '这台电视太贵了。', pinyin: 'zhè tái diànshì tài guì le.', en: 'This TV is too expensive.' },
                { cn: '现在的电视都很薄。', pinyin: 'xiànzài de diànshì dōu hěn báo.', en: 'Modern TVs are all very thin.' },
                { cn: '晚上我想在家看电视。', pinyin: 'wǎnshang wǒ xiǎng zài jiā kàn diànshì.', en: 'In the evening I want to watch TV at home.' }
            ]
        },

        {
            id: 'h2m_067', character: '电影', pinyin: 'diànyǐng', meaning: 'movie', hsk: 2, category: 'nouns',
            examples: [
                { cn: '看电影。', pinyin: 'kàn diànyǐng.', en: 'Watch a movie.' },
                { cn: '这个电影很好看。', pinyin: 'zhège diànyǐng hěn hǎokàn.', en: 'This movie is very good.' },
                { cn: '我们一起去看电影。', pinyin: 'wǒmen yīqǐ qù kàn diànyǐng.', en: 'Let\'s go watch a movie together.' },
                { cn: '我最喜欢的电影。', pinyin: 'wǒ zuì xǐhuān de diànyǐng.', en: 'My favorite movie.' },
                { cn: '电影院。', pinyin: 'diànyǐngyuàn.', en: 'Movie theater.' },
                { cn: '昨晚看了一部好电影。', pinyin: 'zuówǎn kàn le yī bù hǎo diànyǐng.', en: 'Watched a good movie last night.' },
                { cn: '这部电影是中国拍的。', pinyin: 'zhè bù diànyǐng shì zhōngguó pāi de.', en: 'This movie was made in China.' },
                { cn: '你觉得这电影怎么样？', pinyin: 'nǐ juéde zhè diànyǐng zěnmeyàng?', en: 'What do you think of this movie?' }
            ]
        },

        {
            id: 'h2m_068', character: '音乐', pinyin: 'yīnyuè', meaning: 'music', hsk: 2, category: 'nouns',
            examples: [
                { cn: '听音乐。', pinyin: 'tīng yīnyuè.', en: 'Listen to music.' },
                { cn: '我喜欢音乐。', pinyin: 'wǒ xǐhuān yīnyuè.', en: 'I like music.' },
                { cn: '这首音乐很动听。', pinyin: 'zhè shǒu yīnyuè hěn dòngtīng.', en: 'This piece of music is very pleasant.' },
                { cn: '中国音乐。', pinyin: 'zhōngguó yīnyuè.', en: 'Chinese music.' },
                { cn: '放点音乐吧。', pinyin: 'fàng diǎn yīnyuè ba.', en: 'Let\'s put on some music.' },
                { cn: '你会弹音乐吗？', pinyin: 'nǐ huì tán yīnyuè ma?', en: 'Can you play music?' },
                { cn: '音乐让心情变好。', pinyin: 'yīnyuè ràng xīnqíng biàn hǎo.', en: 'Music improves your mood.' },
                { cn: '他学音乐十几年了。', pinyin: 'tā xué yīnyuè shí jǐ nián le.', en: 'He has studied music for over ten years.' }
            ]
        },

        {
            id: 'h2m_069', character: '颜色', pinyin: 'yánsè', meaning: 'color', hsk: 2, category: 'nouns',
            examples: [
                { cn: '什么颜色？', pinyin: 'shénme yánsè?', en: 'What color?' },
                { cn: '我喜欢这个颜色。', pinyin: 'wǒ xǐhuān zhège yánsè.', en: 'I like this color.' },
                { cn: '颜色太深了。', pinyin: 'yánsè tài shēn le.', en: 'The color is too dark.' },
                { cn: '彩虹有七种颜色。', pinyin: 'cǎihóng yǒu qī zhǒng yánsè.', en: 'A rainbow has seven colors.' },
                { cn: '有没有别的颜色？', pinyin: 'yǒu méiyǒu biéde yánsè?', en: 'Are there other colors?' },
                { cn: '这种颜色很适合你。', pinyin: 'zhè zhǒng yánsè hěn shìhé nǐ.', en: 'This color suits you very well.' },
                { cn: '他喜欢很亮的颜色。', pinyin: 'tā xǐhuān hěn liàng de yánsè.', en: 'He likes very bright colors.' },
                { cn: '颜色的变化很漂亮。', pinyin: 'yánsè de biànhuà hěn piàoliang.', en: 'The change of colors is very beautiful.' }
            ]
        },

        {
            id: 'h2m_070', character: '春天', pinyin: 'chūntiān', meaning: 'spring', hsk: 2, category: 'nouns',
            examples: [
                { cn: '春天很美。', pinyin: 'chūntiān hěn měi.', en: 'Spring is beautiful.' },
                { cn: '春天到了。', pinyin: 'chūntiān dào le.', en: 'Spring has arrived.' },
                { cn: '我喜欢春天。', pinyin: 'wǒ xǐhuān chūntiān.', en: 'I like spring.' },
                { cn: '春天来了，花都开了。', pinyin: 'chūntiān lái le, huā dōu kāi le.', en: 'Spring is here, the flowers are blooming.' },
                { cn: '春天是播种的季节。', pinyin: 'chūntiān shì bōzhòng de jìjié.', en: 'Spring is the season for sowing.' },
                { cn: '每年春天我们都去旅游。', pinyin: 'měinián chūntiān wǒmen dōu qù lǚyóu.', en: 'Every spring we go traveling.' },
                { cn: '春天天气变暖和了。', pinyin: 'chūntiān tiānqì biàn nuǎnhuo le.', en: 'The weather gets warmer in spring.' },
                { cn: '春天的风很舒服。', pinyin: 'chūntiān de fēng hěn shūfu.', en: 'The spring breeze is very comfortable.' }
            ]
        },

        {
            id: 'h2m_071', character: '夏天', pinyin: 'xiàtiān', meaning: 'summer', hsk: 2, category: 'nouns',
            examples: [
                { cn: '夏天很热。', pinyin: 'xiàtiān hěn rè.', en: 'Summer is hot.' },
                { cn: '夏天到了。', pinyin: 'xiàtiān dào le.', en: 'Summer has arrived.' },
                { cn: '我喜欢夏天的夜晚。', pinyin: 'wǒ xǐhuān xiàtiān de yèwǎn.', en: 'I like summer nights.' },
                { cn: '夏天太热了。', pinyin: 'xiàtiān tài rè le.', en: 'Summer is too hot.' },
                { cn: '夏天去游泳很好。', pinyin: 'xiàtiān qù yóuyǒng hěn hǎo.', en: 'Going swimming in summer is great.' },
                { cn: '夏天有很多水果吃。', pinyin: 'xiàtiān yǒu hěn duō shuǐguǒ chī.', en: 'There are many fruits to eat in summer.' },
                { cn: '北京的夏天又热又干。', pinyin: 'běijīng de xiàtiān yòu rè yòu gān.', en: 'Beijing summers are both hot and dry.' },
                { cn: '这个夏天我想去海边。', pinyin: 'zhège xiàtiān wǒ xiǎng qù hǎibiān.', en: 'This summer I want to go to the beach.' }
            ]
        },

        {
            id: 'h2m_072', character: '秋天', pinyin: 'qiūtiān', meaning: 'autumn', hsk: 2, category: 'nouns',
            examples: [
                { cn: '秋天很凉快。', pinyin: 'qiūtiān hěn liángkuai.', en: 'Autumn is cool.' },
                { cn: '秋天来了。', pinyin: 'qiūtiān lái le.', en: 'Autumn has come.' },
                { cn: '北京的秋天最好。', pinyin: 'běijīng de qiūtiān zuì hǎo.', en: 'Beijing\'s autumn is the best.' },
                { cn: '秋天树叶变黄了。', pinyin: 'qiūtiān shùyè biàn huáng le.', en: 'In autumn the leaves turn yellow.' },
                { cn: '秋天是收获的季节。', pinyin: 'qiūtiān shì shōuhuò de jìjié.', en: 'Autumn is the harvest season.' },
                { cn: '秋天很适合旅行。', pinyin: 'qiūtiān hěn shìhé lǚxíng.', en: 'Autumn is very suitable for travel.' },
                { cn: '秋天的天空特别蓝。', pinyin: 'qiūtiān de tiānkōng tèbié lán.', en: 'The autumn sky is especially blue.' },
                { cn: '九月份就是秋天了。', pinyin: 'jiǔ yuèfèn jiù shì qiūtiān le.', en: 'September is autumn.' }
            ]
        },

        {
            id: 'h2m_073', character: '冬天', pinyin: 'dōngtiān', meaning: 'winter', hsk: 2, category: 'nouns',
            examples: [
                { cn: '冬天很冷。', pinyin: 'dōngtiān hěn lěng.', en: 'Winter is cold.' },
                { cn: '冬天来了。', pinyin: 'dōngtiān lái le.', en: 'Winter has come.' },
                { cn: '冬天会下雪。', pinyin: 'dōngtiān huì xiàxuě.', en: 'It snows in winter.' },
                { cn: '我不喜欢冬天。', pinyin: 'wǒ bù xǐhuān dōngtiān.', en: 'I don\'t like winter.' },
                { cn: '冬天要多穿衣服。', pinyin: 'dōngtiān yào duō chuān yīfu.', en: 'Wear more clothes in winter.' },
                { cn: '冬天最适合吃火锅。', pinyin: 'dōngtiān zuì shìhé chī huǒguō.', en: 'Winter is the best time for hotpot.' },
                { cn: '东北的冬天特别冷。', pinyin: 'dōngběi de dōngtiān tèbié lěng.', en: 'Winter in the northeast is especially cold.' },
                { cn: '冬天太阳下山很早。', pinyin: 'dōngtiān tàiyáng xià shān hěn zǎo.', en: 'The sun sets very early in winter.' }
            ]
        },

        {
            id: 'h2m_074', character: '公共汽车', pinyin: 'gōnggòngqìchē', meaning: 'bus', hsk: 2, category: 'nouns',
            examples: [
                { cn: '坐公共汽车。', pinyin: 'zuò gōnggòngqìchē.', en: 'Take the bus.' },
                { cn: '我每天坐公共汽车上班。', pinyin: 'wǒ měitiān zuò gōnggòngqìchē shàngbān.', en: 'I take the bus to work every day.' },
                { cn: '公共汽车几点来？', pinyin: 'gōnggòngqìchē jǐ diǎn lái?', en: 'What time does the bus come?' },
                { cn: '公共汽车站。', pinyin: 'gōnggòngqìchē zhàn.', en: 'Bus stop.' },
                { cn: '公共汽车比地铁慢。', pinyin: 'gōnggòngqìchē bǐ dìtiě màn.', en: 'The bus is slower than the subway.' },
                { cn: '这趟公共汽车去哪里？', pinyin: 'zhè tàng gōnggòngqìchē qù nǎlǐ?', en: 'Where does this bus go?' },
                { cn: '公共汽车上有很多人。', pinyin: 'gōnggòngqìchē shàng yǒu hěn duō rén.', en: 'There are many people on the bus.' },
                { cn: '最后一班公共汽车是几点？', pinyin: 'zuìhòu yī bān gōnggòngqìchē shì jǐ diǎn?', en: 'What time is the last bus?' }
            ]
        },

        {
            id: 'h2m_075', character: '出租车', pinyin: 'chūzūchē', meaning: 'taxi', hsk: 2, category: 'nouns',
            examples: [
                { cn: '坐出租车。', pinyin: 'zuò chūzūchē.', en: 'Take a taxi.' },
                { cn: '叫了一辆出租车。', pinyin: 'jiào le yī liàng chūzūchē.', en: 'Called a taxi.' },
                { cn: '坐出租车更快。', pinyin: 'zuò chūzūchē gèng kuài.', en: 'Taking a taxi is faster.' },
                { cn: '出租车司机很友好。', pinyin: 'chūzūchē sījī hěn yǒuhǎo.', en: 'The taxi driver is very friendly.' },
                { cn: '出租车太贵了。', pinyin: 'chūzūchē tài guì le.', en: 'Taxis are too expensive.' },
                { cn: '请帮我叫一辆出租车。', pinyin: 'qǐng bāng wǒ jiào yī liàng chūzūchē.', en: 'Please help me call a taxi.' },
                { cn: '我坐出租车去机场。', pinyin: 'wǒ zuò chūzūchē qù jīchǎng.', en: 'I\'ll take a taxi to the airport.' },
                { cn: '北京的出租车是黄色的。', pinyin: 'běijīng de chūzūchē shì huángsè de.', en: 'Beijing\'s taxis are yellow.' }
            ]
        },

        {
            id: 'h2m_076', character: '飞机', pinyin: 'fēijī', meaning: 'airplane', hsk: 2, category: 'nouns',
            examples: [
                { cn: '坐飞机。', pinyin: 'zuò fēijī.', en: 'Take a plane.' },
                { cn: '飞机起飞了。', pinyin: 'fēijī qǐfēi le.', en: 'The plane took off.' },
                { cn: '飞机要飞多久？', pinyin: 'fēijī yào fēi duō jiǔ?', en: 'How long is the flight?' },
                { cn: '第一次坐飞机很兴奋。', pinyin: 'dì yī cì zuò fēijī hěn xīngfèn.', en: 'First time on a plane is very exciting.' },
                { cn: '飞机上的饭还不错。', pinyin: 'fēijī shàng de fàn hái bù cuò.', en: 'The food on the plane is not bad.' },
                { cn: '飞机票已经买好了。', pinyin: 'fēijī piào yǐjīng mǎi hǎo le.', en: 'The plane ticket has been purchased.' },
                { cn: '从北京飞到上海要两个小时。', pinyin: 'cóng běijīng fēi dào shànghǎi yào liǎng gè xiǎoshí.', en: 'Flying from Beijing to Shanghai takes two hours.' },
                { cn: '飞机是我最喜欢的交通工具。', pinyin: 'fēijī shì wǒ zuì xǐhuān de jiāotōng gōngjù.', en: 'Airplanes are my favorite form of transportation.' }
            ]
        },

        {
            id: 'h2m_077', character: '火车', pinyin: 'huǒchē', meaning: 'train', hsk: 2, category: 'nouns',
            examples: [
                { cn: '坐火车。', pinyin: 'zuò huǒchē.', en: 'Take a train.' },
                { cn: '火车几点的？', pinyin: 'huǒchē jǐ diǎn de?', en: 'What time is the train?' },
                { cn: '坐火车去很方便。', pinyin: 'zuò huǒchē qù hěn fāngbiàn.', en: 'Going by train is very convenient.' },
                { cn: '火车正在进站。', pinyin: 'huǒchē zhèngzài jìn zhàn.', en: 'The train is arriving at the station.' },
                { cn: '我喜欢坐火车旅行。', pinyin: 'wǒ xǐhuān zuò huǒchē lǚxíng.', en: 'I like traveling by train.' },
                { cn: '这趟火车经过很多城市。', pinyin: 'zhè tàng huǒchē jīngguò hěn duō chéngshì.', en: 'This train passes through many cities.' },
                { cn: '高铁比普通火车快得多。', pinyin: 'gāotiě bǐ pǔtōng huǒchē kuài de duō.', en: 'High-speed rail is much faster than regular trains.' },
                { cn: '火车站的票很便宜。', pinyin: 'huǒchē zhàn de piào hěn piányi.', en: 'Train station tickets are cheap.' }
            ]
        },

        {
            id: 'h2m_078', character: '地铁', pinyin: 'dìtiě', meaning: 'subway', hsk: 2, category: 'nouns',
            examples: [
                { cn: '坐地铁。', pinyin: 'zuò dìtiě.', en: 'Take the subway.' },
                { cn: '地铁很快。', pinyin: 'dìtiě hěn kuài.', en: 'The subway is fast.' },
                { cn: '地铁站在那边。', pinyin: 'dìtiě zhàn zài nà biān.', en: 'The subway station is over there.' },
                { cn: '北京的地铁很方便。', pinyin: 'běijīng de dìtiě hěn fāngbiàn.', en: 'Beijing\'s subway is very convenient.' },
                { cn: '我坐地铁上班。', pinyin: 'wǒ zuò dìtiě shàngbān.', en: 'I take the subway to work.' },
                { cn: '地铁站人很多。', pinyin: 'dìtiě zhàn rén hěn duō.', en: 'There are many people at the subway station.' },
                { cn: '这趟地铁去不去市中心？', pinyin: 'zhè tàng dìtiě qù bù qù shì zhōngxīn?', en: 'Does this subway go to the city center?' },
                { cn: '地铁比公共汽车快。', pinyin: 'dìtiě bǐ gōnggòngqìchē kuài.', en: 'The subway is faster than the bus.' }
            ]
        },

        {
            id: 'h2m_079', character: '自行车', pinyin: 'zìxíngchē', meaning: 'bicycle', hsk: 2, category: 'nouns',
            examples: [
                { cn: '骑自行车。', pinyin: 'qí zìxíngchē.', en: 'Ride a bicycle.' },
                { cn: '买了一辆自行车。', pinyin: 'mǎi le yī liàng zìxíngchē.', en: 'Bought a bicycle.' },
                { cn: '骑自行车对身体好。', pinyin: 'qí zìxíngchē duì shēntǐ hǎo.', en: 'Riding a bicycle is good for your health.' },
                { cn: '自行车很便宜。', pinyin: 'zìxíngchē hěn piányi.', en: 'Bicycles are cheap.' },
                { cn: '他会骑自行车上班。', pinyin: 'tā huì qí zìxíngchē shàngbān.', en: 'He rides a bicycle to work.' },
                { cn: '我的自行车坏了。', pinyin: 'wǒ de zìxíngchē huài le.', en: 'My bicycle broke.' },
                { cn: '小孩子学骑自行车很快。', pinyin: 'xiǎoháizi xué qí zìxíngchē hěn kuài.', en: 'Kids learn to ride a bicycle quickly.' },
                { cn: '这里有很多共享自行车。', pinyin: 'zhèlǐ yǒu hěn duō gòngxiǎng zìxíngchē.', en: 'There are many shared bicycles here.' }
            ]
        },

        {
            id: 'h2m_080', character: '机场', pinyin: 'jīchǎng', meaning: 'airport', hsk: 2, category: 'nouns',
            examples: [
                { cn: '去机场。', pinyin: 'qù jīchǎng.', en: 'Go to the airport.' },
                { cn: '机场很大。', pinyin: 'jīchǎng hěn dà.', en: 'The airport is very big.' },
                { cn: '我去机场接人。', pinyin: 'wǒ qù jīchǎng jiē rén.', en: 'I go to the airport to pick someone up.' },
                { cn: '机场离这里远吗？', pinyin: 'jīchǎng lí zhèlǐ yuǎn ma?', en: 'Is the airport far from here?' },
                { cn: '机场的免税店。', pinyin: 'jīchǎng de miǎnshuì diàn.', en: 'The duty-free shop at the airport.' },
                { cn: '请送我去机场。', pinyin: 'qǐng sòng wǒ qù jīchǎng.', en: 'Please take me to the airport.' },
                { cn: '在机场等行李。', pinyin: 'zài jīchǎng děng xíngli.', en: 'Waiting for luggage at the airport.' },
                { cn: '上海有两个机场。', pinyin: 'shànghǎi yǒu liǎng gè jīchǎng.', en: 'Shanghai has two airports.' }
            ]
        },

        {
            id: 'h2m_081', character: '火车站', pinyin: 'huǒchēzhàn', meaning: 'train station', hsk: 2, category: 'nouns',
            examples: [
                { cn: '去火车站。', pinyin: 'qù huǒchēzhàn.', en: 'Go to the train station.' },
                { cn: '火车站在哪里？', pinyin: 'huǒchēzhàn zài nǎlǐ?', en: 'Where is the train station?' },
                { cn: '火车站人很多。', pinyin: 'huǒchēzhàn rén hěn duō.', en: 'The train station is very crowded.' },
                { cn: '坐地铁去火车站。', pinyin: 'zuò dìtiě qù huǒchēzhàn.', en: 'Take the subway to the train station.' },
                { cn: '在火车站买票。', pinyin: 'zài huǒchēzhàn mǎi piào.', en: 'Buy tickets at the train station.' },
                { cn: '这个城市的火车站很漂亮。', pinyin: 'zhège chéngshì de huǒchēzhàn hěn piàoliang.', en: 'This city\'s train station is very beautiful.' },
                { cn: '火车站在东边。', pinyin: 'huǒchēzhàn zài dōngbiān.', en: 'The train station is on the east side.' },
                { cn: '我朋友在火车站等我。', pinyin: 'wǒ péngyou zài huǒchēzhàn děng wǒ.', en: 'My friend is waiting for me at the train station.' }
            ]
        },

        {
            id: 'h2m_082', character: '超市', pinyin: 'chāoshì', meaning: 'supermarket', hsk: 2, category: 'nouns',
            examples: [
                { cn: '去超市。', pinyin: 'qù chāoshì.', en: 'Go to the supermarket.' },
                { cn: '超市里有很多东西。', pinyin: 'chāoshì lǐ yǒu hěn duō dōngxi.', en: 'There are many things in the supermarket.' },
                { cn: '我去超市买菜。', pinyin: 'wǒ qù chāoshì mǎi cài.', en: 'I go to the supermarket to buy vegetables.' },
                { cn: '这家超市很大。', pinyin: 'zhè jiā chāoshì hěn dà.', en: 'This supermarket is very big.' },
                { cn: '超市几点关门？', pinyin: 'chāoshì jǐ diǎn guānmén?', en: 'What time does the supermarket close?' },
                { cn: '超市就在对面。', pinyin: 'chāoshì jiù zài duìmiàn.', en: 'The supermarket is right across the street.' },
                { cn: '在超市买东西很方便。', pinyin: 'zài chāoshì mǎi dōngxi hěn fāngbiàn.', en: 'Shopping at the supermarket is very convenient.' },
                { cn: '这家超市的东西很便宜。', pinyin: 'zhè jiā chāoshì de dōngxi hěn piányi.', en: 'This supermarket\'s goods are very cheap.' }
            ]
        },

        {
            id: 'h2m_083', character: '银行', pinyin: 'yínháng', meaning: 'bank', hsk: 2, category: 'nouns',
            examples: [
                { cn: '去银行。', pinyin: 'qù yínháng.', en: 'Go to the bank.' },
                { cn: '银行旁边是邮局。', pinyin: 'yínháng pángbiān shì yóujú.', en: 'Next to the bank is the post office.' },
                { cn: '我去银行取钱。', pinyin: 'wǒ qù yínháng qǔ qián.', en: 'I go to the bank to withdraw money.' },
                { cn: '银行几点开门？', pinyin: 'yínháng jǐ diǎn kāimén?', en: 'What time does the bank open?' },
                { cn: '中国的银行很多。', pinyin: 'zhōngguó de yínháng hěn duō.', en: 'There are many banks in China.' },
                { cn: '在银行排队等了很久。', pinyin: 'zài yínháng páiduì děng le hěn jiǔ.', en: 'Waited in line at the bank for a long time.' },
                { cn: '我的银行卡丢了。', pinyin: 'wǒ de yínhángkǎ diū le.', en: 'I lost my bank card.' },
                { cn: '银行工作人员很热情。', pinyin: 'yínháng gōngzuò rényuán hěn rèqíng.', en: 'The bank staff are very warm.' }
            ]
        },

        {
            id: 'h2m_084', character: '邮局', pinyin: 'yóujú', meaning: 'post office', hsk: 2, category: 'nouns',
            examples: [
                { cn: '去邮局。', pinyin: 'qù yóujú.', en: 'Go to the post office.' },
                { cn: '邮局在哪里？', pinyin: 'yóujú zài nǎlǐ?', en: 'Where is the post office?' },
                { cn: '我去邮局寄信。', pinyin: 'wǒ qù yóujú jì xìn.', en: 'I go to the post office to mail a letter.' },
                { cn: '邮局就在学校旁边。', pinyin: 'yóujú jiù zài xuéxiào pángbiān.', en: 'The post office is right next to the school.' },
                { cn: '邮局下午几点下班？', pinyin: 'yóujú xiàwǔ jǐ diǎn xiàbān?', en: 'What time does the post office close in the afternoon?' },
                { cn: '在邮局可以寄包裹。', pinyin: 'zài yóujú kěyǐ jì bāoguǒ.', en: 'You can send packages at the post office.' },
                { cn: '邮局的服务很好。', pinyin: 'yóujú de fúwù hěn hǎo.', en: 'The post office\'s service is very good.' },
                { cn: '北京的邮局有很多。', pinyin: 'běijīng de yóujú yǒu hěn duō.', en: 'There are many post offices in Beijing.' }
            ]
        },

        {
            id: 'h2m_085', character: '图书馆', pinyin: 'túshūguǎn', meaning: 'library', hsk: 2, category: 'nouns',
            examples: [
                { cn: '去图书馆。', pinyin: 'qù túshūguǎn.', en: 'Go to the library.' },
                { cn: '图书馆很安静。', pinyin: 'túshūguǎn hěn ānjìng.', en: 'The library is very quiet.' },
                { cn: '我在图书馆看书。', pinyin: 'wǒ zài túshūguǎn kàn shū.', en: 'I read books at the library.' },
                { cn: '学校图书馆很大。', pinyin: 'xuéxiào túshūguǎn hěn dà.', en: 'The school library is very big.' },
                { cn: '图书馆有很多中文书。', pinyin: 'túshūguǎn yǒu hěn duō zhōngwén shū.', en: 'The library has many Chinese books.' },
                { cn: '周末去图书馆学习。', pinyin: 'zhōumò qù túshūguǎn xuéxí.', en: 'Go to the library to study on the weekend.' },
                { cn: '请保持图书馆的安静。', pinyin: 'qǐng bǎochí túshūguǎn de ānjìng.', en: 'Please keep the library quiet.' },
                { cn: '图书馆里有免费的网络。', pinyin: 'túshūguǎn lǐ yǒu miǎnfèi de wǎngluò.', en: 'There is free internet in the library.' }
            ]
        },

        {
            id: 'h2m_086', character: '公园', pinyin: 'gōngyuán', meaning: 'park', hsk: 2, category: 'nouns',
            examples: [
                { cn: '去公园。', pinyin: 'qù gōngyuán.', en: 'Go to the park.' },
                { cn: '公园很大很漂亮。', pinyin: 'gōngyuán hěn dà hěn piàoliang.', en: 'The park is big and beautiful.' },
                { cn: '早上很多人去公园锻炼。', pinyin: 'zǎoshang hěn duō rén qù gōngyuán duànliàn.', en: 'Many people go to the park to exercise in the morning.' },
                { cn: '周末带孩子去公园玩。', pinyin: 'zhōumò dài háizi qù gōngyuán wán.', en: 'Take the kids to the park to play on the weekend.' },
                { cn: '公园里有湖。', pinyin: 'gōngyuán lǐ yǒu hú.', en: 'There is a lake in the park.' },
                { cn: '这个公园不收钱。', pinyin: 'zhège gōngyuán bù shōu qián.', en: 'This park is free.' },
                { cn: '在北京，公园很多。', pinyin: 'zài běijīng, gōngyuán hěn duō.', en: 'In Beijing, there are many parks.' },
                { cn: '公园里的花开了。', pinyin: 'gōngyuán lǐ de huā kāi le.', en: 'The flowers in the park have bloomed.' }
            ]
        },

        {
            id: 'h2m_087', character: '电影院', pinyin: 'diànyǐngyuàn', meaning: 'cinema', hsk: 2, category: 'nouns',
            examples: [
                { cn: '去电影院。', pinyin: 'qù diànyǐngyuàn.', en: 'Go to the cinema.' },
                { cn: '电影院在楼上。', pinyin: 'diànyǐngyuàn zài lóu shàng.', en: 'The cinema is upstairs.' },
                { cn: '我们一起去电影院。', pinyin: 'wǒmen yīqǐ qù diànyǐngyuàn.', en: 'Let\'s go to the cinema together.' },
                { cn: '这家电影院很大。', pinyin: 'zhè jiā diànyǐngyuàn hěn dà.', en: 'This cinema is very big.' },
                { cn: '电影院的票不贵。', pinyin: 'diànyǐngyuàn de piào bù guì.', en: 'Cinema tickets are not expensive.' },
                { cn: '新电影院开张了。', pinyin: 'xīn diànyǐngyuàn kāizhāng le.', en: 'A new cinema has opened.' },
                { cn: '电影院离我家很近。', pinyin: 'diànyǐngyuàn lí wǒ jiā hěn jìn.', en: 'The cinema is very close to my home.' },
                { cn: '在电影院不能大声说话。', pinyin: 'zài diànyǐngyuàn bù néng dàshēng shuōhuà.', en: 'You can\'t speak loudly in the cinema.' }
            ]
        },

        {
            id: 'h2m_088', character: '办公室', pinyin: 'bàngōngshì', meaning: 'office', hsk: 2, category: 'nouns',
            examples: [
                { cn: '在办公室。', pinyin: 'zài bàngōngshì.', en: 'In the office.' },
                { cn: '他在办公室工作。', pinyin: 'tā zài bàngōngshì gōngzuò.', en: 'He works in the office.' },
                { cn: '办公室在二楼。', pinyin: 'bàngōngshì zài èr lóu.', en: 'The office is on the second floor.' },
                { cn: '我去办公室找老师。', pinyin: 'wǒ qù bàngōngshì zhǎo lǎoshī.', en: 'I go to the office to find the teacher.' },
                { cn: '办公室很大很干净。', pinyin: 'bàngōngshì hěn dà hěn gānjìng.', en: 'The office is big and clean.' },
                { cn: '请到我的办公室来。', pinyin: 'qǐng dào wǒ de bàngōngshì lái.', en: 'Please come to my office.' },
                { cn: '办公室里没有人。', pinyin: 'bàngōngshì lǐ méiyǒu rén.', en: 'There is no one in the office.' },
                { cn: '经理的办公室在右边。', pinyin: 'jīnglǐ de bàngōngshì zài yòubiān.', en: 'The manager\'s office is on the right.' }
            ]
        },

        {
            id: 'h2m_089', character: '教室', pinyin: 'jiàoshì', meaning: 'classroom', hsk: 2, category: 'nouns',
            examples: [
                { cn: '在教室。', pinyin: 'zài jiàoshì.', en: 'In the classroom.' },
                { cn: '教室里有很多学生。', pinyin: 'jiàoshì lǐ yǒu hěn duō xuésheng.', en: 'There are many students in the classroom.' },
                { cn: '我们的教室在五楼。', pinyin: 'wǒmen de jiàoshì zài wǔ lóu.', en: 'Our classroom is on the fifth floor.' },
                { cn: '请把教室打扫干净。', pinyin: 'qǐng bǎ jiàoshì dǎsǎo gānjìng.', en: 'Please clean the classroom.' },
                { cn: '教室很安静。', pinyin: 'jiàoshì hěn ānjìng.', en: 'The classroom is very quiet.' },
                { cn: '老师走进了教室。', pinyin: 'lǎoshī zǒu jìn le jiàoshì.', en: 'The teacher walked into the classroom.' },
                { cn: '我喜欢我们的教室。', pinyin: 'wǒ xǐhuān wǒmen de jiàoshì.', en: 'I like our classroom.' },
                { cn: '下课后教室就空了。', pinyin: 'xiàkè hòu jiàoshì jiù kōng le.', en: 'The classroom is empty after class.' }
            ]
        },

        {
            id: 'h2m_090', character: '房间', pinyin: 'fángjiān', meaning: 'room', hsk: 2, category: 'nouns',
            examples: [
                { cn: '我的房间。', pinyin: 'wǒ de fángjiān.', en: 'My room.' },
                { cn: '请打扫房间。', pinyin: 'qǐng dǎsǎo fángjiān.', en: 'Please clean the room.' },
                { cn: '你的房间很大。', pinyin: 'nǐ de fángjiān hěn dà.', en: 'Your room is very big.' },
                { cn: '每个房间都有窗户。', pinyin: 'měi gè fángjiān dōu yǒu chuānghu.', en: 'Every room has a window.' },
                { cn: '房间里有电视吗？', pinyin: 'fángjiān lǐ yǒu diànshì ma?', en: 'Is there a TV in the room?' },
                { cn: '请到我的房间来。', pinyin: 'qǐng dào wǒ de fángjiān lái.', en: 'Please come to my room.' },
                { cn: '这间房间很舒服。', pinyin: 'zhè jiān fángjiān hěn shūfu.', en: 'This room is very comfortable.' },
                { cn: '酒店的房间不错。', pinyin: 'jiǔdiàn de fángjiān bù cuò.', en: 'The hotel room is not bad.' }
            ]
        },

        // ============================
        // Transport
        // ============================
        {
            id: 'h2m_091', character: '船', pinyin: 'chuán', meaning: 'boat/ship', hsk: 2, category: 'transport',
            examples: [
                { cn: '坐船。', pinyin: 'zuò chuán.', en: 'Take a boat.' },
                { cn: '大船。', pinyin: 'dà chuán.', en: 'Big ship.' },
                { cn: '坐船去。', pinyin: 'zuò chuán qù.', en: 'Go by boat.' },
                { cn: '小船。', pinyin: 'xiǎo chuán.', en: 'Small boat.' },
                { cn: '船上有很多人。', pinyin: 'chuán shàng yǒu hěn duō rén.', en: 'There are many people on the boat.' },
                { cn: '船来了。', pinyin: 'chuán lái le.', en: 'The boat has arrived.' },
                { cn: '这条船很旧。', pinyin: 'zhè tiáo chuán hěn jiù.', en: 'This boat is very old.' },
                { cn: '乘风破浪。', pinyin: 'chéng fēng pò làng.', en: 'Ride the wind and break the waves (idiom).' }
            ]
        },

        {
            id: 'h2m_092', character: '票', pinyin: 'piào', meaning: 'ticket', hsk: 2, category: 'transport',
            examples: [
                { cn: '买票。', pinyin: 'mǎi piào.', en: 'Buy a ticket.' },
                { cn: '一张票。', pinyin: 'yī zhāng piào.', en: 'One ticket.' },
                { cn: '请给我票。', pinyin: 'qǐng gěi wǒ piào.', en: 'Please give me the ticket.' },
                { cn: '飞机票。', pinyin: 'fēijī piào.', en: 'Plane ticket.' },
                { cn: '电影票。', pinyin: 'diànyǐng piào.', en: 'Movie ticket.' },
                { cn: '票没了。', pinyin: 'piào méi le.', en: 'Tickets are sold out.' },
                { cn: '买不到票。', pinyin: 'mǎi bù dào piào.', en: 'Can\'t get tickets.' },
                { cn: '多少钱一张票？', pinyin: 'duōshao qián yī zhāng piào?', en: 'How much is a ticket?' }
            ]
        },

        {
            id: 'h2m_093', character: '站', pinyin: 'zhàn', meaning: 'station/stop', hsk: 2, category: 'transport',
            examples: [
                { cn: '到站了。', pinyin: 'dào zhàn le.', en: 'Arrived at the station.' },
                { cn: '下一站。', pinyin: 'xià yī zhàn.', en: 'Next stop.' },
                { cn: '公交车站。', pinyin: 'gōngjiāochē zhàn.', en: 'Bus stop.' },
                { cn: '地铁站。', pinyin: 'dìtiě zhàn.', en: 'Subway station.' },
                { cn: '你在哪一站下？', pinyin: 'nǐ zài nǎ yī zhàn xià?', en: 'At which stop do you get off?' },
                { cn: '起点站。', pinyin: 'qǐdiǎn zhàn.', en: 'Starting station.' },
                { cn: '终点站。', pinyin: 'zhōngdiǎn zhàn.', en: 'Terminal station.' },
                { cn: '我要在这个站下车。', pinyin: 'wǒ yào zài zhège zhàn xiàchē.', en: 'I want to get off at this stop.' }
            ]
        },

        {
            id: 'h2m_094', character: '路', pinyin: 'lù', meaning: 'road', hsk: 2, category: 'transport',
            examples: [
                { cn: '这条路。', pinyin: 'zhè tiáo lù.', en: 'This road.' },
                { cn: '路上小心。', pinyin: 'lùshàng xiǎoxīn.', en: 'Be careful on the road.' },
                { cn: '问路。', pinyin: 'wèn lù.', en: 'Ask for directions.' },
                { cn: '大路。', pinyin: 'dà lù.', en: 'Main road.' },
                { cn: '顺着这条路走。', pinyin: 'shùnzhe zhè tiáo lù zǒu.', en: 'Walk along this road.' },
                { cn: '路不远。', pinyin: 'lù bù yuǎn.', en: 'The road isn\'t far.' },
                { cn: '一路上都是风景。', pinyin: 'yī lù shàng dōu shì fēngjǐng.', en: 'Scenery all along the way.' },
                { cn: '迷路了。', pinyin: 'mí lù le.', en: 'Lost the way.' }
            ]
        },

        {
            id: 'h2m_095', character: '条', pinyin: 'tiáo', meaning: 'measure word for roads', hsk: 2, category: 'transport',
            examples: [
                { cn: '一条路。', pinyin: 'yī tiáo lù.', en: 'A road.' },
                { cn: '三条鱼。', pinyin: 'sān tiáo yú.', en: 'Three fish.' },
                { cn: '一条河。', pinyin: 'yī tiáo hé.', en: 'A river.' },
                { cn: '一条狗。', pinyin: 'yī tiáo gǒu.', en: 'A dog.' },
                { cn: '一条裙子。', pinyin: 'yī tiáo qúnzi.', en: 'A skirt.' },
                { cn: '条件。', pinyin: 'tiáojiàn.', en: 'Conditions.' },
                { cn: '这条街。', pinyin: 'zhè tiáo jiē.', en: 'This street.' },
                { cn: '一条新闻。', pinyin: 'yī tiáo xīnwén.', en: 'A piece of news.' }
            ]
        },

        {
            id: 'h2m_096', character: '辆', pinyin: 'liàng', meaning: 'measure word for vehicles', hsk: 2, category: 'transport',
            examples: [
                { cn: '一辆车。', pinyin: 'yī liàng chē.', en: 'A car.' },
                { cn: '一辆自行车。', pinyin: 'yī liàng zìxíngchē.', en: 'A bicycle.' },
                { cn: '这一辆车。', pinyin: 'zhè yī liàng chē.', en: 'This car.' },
                { cn: '几辆车。', pinyin: 'jǐ liàng chē.', en: 'A few cars.' },
                { cn: '停车场有很多辆车。', pinyin: 'tíngchē chǎng yǒu hěn duō liàng chē.', en: 'There are many cars in the parking lot.' },
                { cn: '这辆公车很新。', pinyin: 'zhè liàng gōngchē hěn xīn.', en: 'This bus is very new.' },
                { cn: '你买了辆什么车？', pinyin: 'nǐ mǎi le liàng shénme chē?', en: 'What kind of car did you buy?' },
                { cn: '每辆车都有自己的故事。', pinyin: 'měi liàng chē dōu yǒu zìjǐ de gùshì.', en: 'Every car has its own story.' }
            ]
        },

        {
            id: 'h2m_097', character: '张', pinyin: 'zhāng', meaning: 'measure word for tickets', hsk: 2, category: 'transport',
            examples: [
                { cn: '一张票。', pinyin: 'yī zhāng piào.', en: 'A ticket.' },
                { cn: '一张纸。', pinyin: 'yī zhāng zhǐ.', en: 'A piece of paper.' },
                { cn: '一张桌子。', pinyin: 'yī zhāng zhuōzi.', en: 'A table.' },
                { cn: '一张床。', pinyin: 'yī zhāng chuáng.', en: 'A bed.' },
                { cn: '一张照片。', pinyin: 'yī zhāng zhàopiàn.', en: 'A photo.' },
                { cn: '这纸张。', pinyin: 'zhè zhāng zhǐ.', en: 'This piece of paper.' },
                { cn: '地图有一张。', pinyin: 'dìtú yǒu yī zhāng.', en: 'There is one map.' },
                { cn: '考卷一张。', pinyin: 'kǎojuàn yī zhāng.', en: 'One exam paper.' }
            ]
        },

        {
            id: 'h2m_098', character: '次', pinyin: 'cì', meaning: 'measure word for times', hsk: 2, category: 'transport',
            examples: [
                { cn: '第一次。', pinyin: 'dì yī cì.', en: 'The first time.' },
                { cn: '每次。', pinyin: 'měi cì.', en: 'Every time.' },
                { cn: '一次两次。', pinyin: 'yī cì liǎng cì.', en: 'Once or twice.' },
                { cn: '下次再来。', pinyin: 'xià cì zài lái.', en: 'Come again next time.' },
                { cn: '这次怎么样？', pinyin: 'zhè cì zěnmeyàng?', en: 'How was it this time?' },
                { cn: '多少次了？', pinyin: 'duōshao cì le?', en: 'How many times?' },
                { cn: '一次就够了。', pinyin: 'yī cì jiù gòu le.', en: 'Once is enough.' },
                { cn: '第一次去中国很开心。', pinyin: 'dì yī cì qù zhōngguó hěn kāixīn.', en: 'First time going to China was very happy.' }
            ]
        },

        {
            id: 'h2m_099', character: '遍', pinyin: 'biàn', meaning: 'measure word for actions', hsk: 2, category: 'transport',
            examples: [
                { cn: '再说一遍。', pinyin: 'zài shuō yī biàn.', en: 'Say it again.' },
                { cn: '读一遍。', pinyin: 'dú yī biàn.', en: 'Read it once.' },
                { cn: '一遍一遍地练习。', pinyin: 'yī biàn yī biàn de liànxí.', en: 'Practice over and over.' },
                { cn: '看了三遍。', pinyin: 'kàn le sān biàn.', en: 'Watched it three times.' },
                { cn: '从头到尾听了一遍。', pinyin: 'cóng tóu dào wěi tīng le yī biàn.', en: 'Listened from beginning to end once.' },
                { cn: '写两遍。', pinyin: 'xiě liǎng biàn.', en: 'Write it twice.' },
                { cn: '一遍比一遍好。', pinyin: 'yī biàn bǐ yī biàn hǎo.', en: 'Better each time.' },
                { cn: '遍体鳞伤。', pinyin: 'biàn tǐ lín shāng.', en: 'Covered with wounds (idiom).' }
            ]
        },

        {
            id: 'h2m_100', character: '趟', pinyin: 'tàng', meaning: 'measure word for trips', hsk: 2, category: 'transport',
            examples: [
                { cn: '去一趟。', pinyin: 'qù yī tàng.', en: 'Go once.' },
                { cn: '跑一趟。', pinyin: 'pǎo yī tàng.', en: 'Make a trip.' },
                { cn: '我来一趟不容易。', pinyin: 'wǒ lái yī tàng bù róngyì.', en: 'It\'s not easy for me to come this once.' },
                { cn: '每天走一趟。', pinyin: 'měitiān zǒu yī tàng.', en: 'Walk once every day.' },
                { cn: '一趟火车。', pinyin: 'yī tàng huǒchē.', en: 'One train trip.' },
                { cn: '这趟车去哪里？', pinyin: 'zhè tàng chē qù nǎlǐ?', en: 'Where does this train/bus go?' },
                { cn: '最后一趟。', pinyin: 'zuìhòu yī tàng.', en: 'The last trip.' },
                { cn: '白跑了一趟。', pinyin: 'bái pǎo le yī tàng.', en: 'Wasted a trip (went for nothing).' }
            ]
        },

        // ============================
        // Verbs
        // ============================
        {
            id: 'h2m_101', character: '给', pinyin: 'gěi', meaning: 'to give', hsk: 2, category: 'verbs',
            examples: [
                { cn: '给你。', pinyin: 'gěi nǐ.', en: 'Here you are.' },
                { cn: '请给我一杯水。', pinyin: 'qǐng gěi wǒ yī bēi shuǐ.', en: 'Please give me a cup of water.' },
                { cn: '他给了我一份礼物。', pinyin: 'tā gěi le wǒ yī fèn lǐwù.', en: 'He gave me a gift.' },
                { cn: '我给你打电话。', pinyin: 'wǒ gěi nǐ dǎ diànhuà.', en: 'I\'ll give you a call.' },
                { cn: '妈妈给我买了新衣服。', pinyin: 'māma gěi wǒ mǎi le xīn yīfu.', en: 'Mom bought me new clothes.' },
                { cn: '请给我看一下。', pinyin: 'qǐng gěi wǒ kàn yīxià.', en: 'Please let me take a look.' },
                { cn: '给钱。', pinyin: 'gěi qián.', en: 'Give money.' },
                { cn: '你能给我一点时间吗？', pinyin: 'nǐ néng gěi wǒ yīdiǎn shíjiān ma?', en: 'Can you give me some time?' }
            ]
        },

        {
            id: 'h2m_102', character: '让', pinyin: 'ràng', meaning: 'to let/allow', hsk: 2, category: 'verbs',
            examples: [
                { cn: '让我看看。', pinyin: 'ràng wǒ kàn kàn.', en: 'Let me take a look.' },
                { cn: '让他进来。', pinyin: 'ràng tā jìnlái.', en: 'Let him come in.' },
                { cn: '别让他走。', pinyin: 'bié ràng tā zǒu.', en: 'Don\'t let him leave.' },
                { cn: '这件事让大家都开心。', pinyin: 'zhè jiàn shì ràng dàjiā dōu kāixīn.', en: 'This makes everyone happy.' },
                { cn: '让我来帮你。', pinyin: 'ràng wǒ lái bāng nǐ.', en: 'Let me help you.' },
                { cn: '不要让父母担心。', pinyin: 'bù yào ràng fùmǔ dānxīn.', en: 'Don\'t make your parents worry.' },
                { cn: '这个消息让我很难过。', pinyin: 'zhège xiāoxi ràng wǒ hěn nánguò.', en: 'This news made me very sad.' },
                { cn: '让我想想。', pinyin: 'ràng wǒ xiǎng xiǎng.', en: 'Let me think.' },
                { cn: '请让一下，谢谢。', pinyin: 'qǐng ràng yīxià, xièxiè.', en: 'Please let me pass, thank you.' }
            ]
        },

        {
            id: 'h2m_103', character: '问', pinyin: 'wèn', meaning: 'to ask', hsk: 2, category: 'verbs',
            examples: [
                { cn: '我问你。', pinyin: 'wǒ wèn nǐ.', en: 'I ask you.' },
                { cn: '请问。', pinyin: 'qǐng wèn.', en: 'Excuse me / May I ask.' },
                { cn: '问问题。', pinyin: 'wèn wèntí.', en: 'Ask a question.' },
                { cn: '他问了我很多问题。', pinyin: 'tā wèn le wǒ hěn duō wèntí.', en: 'He asked me many questions.' },
                { cn: '有问题就问老师。', pinyin: 'yǒu wèntí jiù wèn lǎoshī.', en: 'If you have questions, ask the teacher.' },
                { cn: '别问了，我不知道。', pinyin: 'bié wèn le, wǒ bù zhīdào.', en: 'Stop asking, I don\'t know.' },
                { cn: '我想问你一件事。', pinyin: 'wǒ xiǎng wèn nǐ yī jiàn shì.', en: 'I want to ask you something.' },
                { cn: '问路怎么走？', pinyin: 'wèn lù zěnme zǒu?', en: 'Ask for directions?' }
            ]
        },

        {
            id: 'h2m_104', character: '找', pinyin: 'zhǎo', meaning: 'to look for', hsk: 2, category: 'verbs',
            examples: [
                { cn: '我在找我的手机。', pinyin: 'wǒ zài zhǎo wǒ de shǒujī.', en: 'I\'m looking for my phone.' },
                { cn: '你找谁？', pinyin: 'nǐ zhǎo shéi?', en: 'Who are you looking for?' },
                { cn: '找不到了。', pinyin: 'zhǎo bù dào le.', en: 'Can\'t find it.' },
                { cn: '我在找一份新工作。', pinyin: 'wǒ zài zhǎo yī fèn xīn gōngzuò.', en: 'I am looking for a new job.' },
                { cn: '找到答案了。', pinyin: 'zhǎodào dáàn le.', en: 'Found the answer.' },
                { cn: '你能帮我找一下吗？', pinyin: 'nǐ néng bāng wǒ zhǎo yīxià ma?', en: 'Can you help me look for it?' },
                { cn: '慢慢找，不着急。', pinyin: 'mànmàn zhǎo, bù zháojí.', en: 'Take your time looking, no rush.' },
                { cn: '我找了很久才找到。', pinyin: 'wǒ zhǎo le hěn jiǔ cái zhǎodào.', en: 'I looked for a long time before finding it.' }
            ]
        },

        {
            id: 'h2m_105', character: '进', pinyin: 'jìn', meaning: 'to enter', hsk: 2, category: 'verbs',
            examples: [
                { cn: '请进来。', pinyin: 'qǐng jìnlái.', en: 'Please come in.' },
                { cn: '你进来吧。', pinyin: 'nǐ jìnlái ba.', en: 'Come in.' },
                { cn: '进去看看。', pinyin: 'jìnqù kàn kàn.', en: 'Go in and take a look.' },
                { cn: '他走进了教室。', pinyin: 'tā zǒu jìn le jiàoshì.', en: 'He walked into the classroom.' },
                { cn: '不要进去。', pinyin: 'bù yào jìnqù.', en: 'Don\'t go in.' },
                { cn: '进门请换鞋。', pinyin: 'jìn mén qǐng huàn xié.', en: 'Please change shoes when entering.' },
                { cn: '汽车开进了车库。', pinyin: 'qìchē kāi jìn le chēkù.', en: 'The car drove into the garage.' },
                { cn: '他把书放进了书包。', pinyin: 'tā bǎ shū fàng jìn le shūbāo.', en: 'He put the book into his backpack.' }
            ]
        },

        {
            id: 'h2m_106', character: '出', pinyin: 'chū', meaning: 'to go out', hsk: 2, category: 'verbs',
            examples: [
                { cn: '我出去一下。', pinyin: 'wǒ chūqù yīxià.', en: 'I\'m going out for a moment.' },
                { cn: '太阳出来了。', pinyin: 'tàiyáng chūlái le.', en: 'The sun came out.' },
                { cn: '出问题了。', pinyin: 'chū wèntí le.', en: 'A problem came up.' },
                { cn: '他出门了。', pinyin: 'tā chūmén le.', en: 'He went out.' },
                { cn: '我从家里出来。', pinyin: 'wǒ cóng jiālǐ chūlái.', en: 'I came out from home.' },
                { cn: '这本书是什么时候出的？', pinyin: 'zhè běn shū shì shénme shíhou chū de?', en: 'When was this book published?' },
                { cn: '请拿出你的证件。', pinyin: 'qǐng ná chū nǐ de zhèngjiàn.', en: 'Please take out your ID.' },
                { cn: '又出事了。', pinyin: 'yòu chūshì le.', en: 'Something happened again.' }
            ]
        },

        {
            id: 'h2m_107', character: '回', pinyin: 'huí', meaning: 'to return', hsk: 2, category: 'verbs',
            examples: [
                { cn: '我回家。', pinyin: 'wǒ huí jiā.', en: 'I go home.' },
                { cn: '你什么时候回来？', pinyin: 'nǐ shénme shíhou huílái?', en: 'When will you come back?' },
                { cn: '他回国了。', pinyin: 'tā huí guó le.', en: 'He returned to his country.' },
                { cn: '回头见。', pinyin: 'huítóu jiàn.', en: 'See you later.' },
                { cn: '我马上就回来。', pinyin: 'wǒ mǎshàng jiù huílái.', en: 'I\'ll be right back.' },
                { cn: '周末回老家。', pinyin: 'zhōumò huí lǎojiā.', en: 'Return to hometown on the weekend.' },
                { cn: '请给我回电话。', pinyin: 'qǐng gěi wǒ huí diànhuà.', en: 'Please call me back.' },
                { cn: '这个东西从哪里来的回哪里去。', pinyin: 'zhège dōngxi cóng nǎlǐ lái de huí nǎlǐ qù.', en: 'This thing goes back where it came from.' }
            ]
        },

        {
            id: 'h2m_108', character: '开', pinyin: 'kāi', meaning: 'to open/start', hsk: 2, category: 'verbs',
            examples: [
                { cn: '开门。', pinyin: 'kāi mén.', en: 'Open the door.' },
                { cn: '请打开窗户。', pinyin: 'qǐng dǎkāi chuānghu.', en: 'Please open the window.' },
                { cn: '你开车去吗？', pinyin: 'nǐ kāichē qù ma?', en: 'Are you driving there?' },
                { cn: '会议开始了。', pinyin: 'huìyì kāishǐ le.', en: 'The meeting has started.' },
                { cn: '开灯。', pinyin: 'kāi dēng.', en: 'Turn on the light.' },
                { cn: '商店几点开门？', pinyin: 'shāngdiàn jǐ diǎn kāimén?', en: 'What time does the store open?' },
                { cn: '花开得很漂亮。', pinyin: 'huā kāi de hěn piàoliang.', en: 'The flowers bloom beautifully.' },
                { cn: '开电脑。', pinyin: 'kāi diànnǎo.', en: 'Turn on the computer.' }
            ]
        },

        {
            id: 'h2m_109', character: '关', pinyin: 'guān', meaning: 'to close/turn off', hsk: 2, category: 'verbs',
            examples: [
                { cn: '关门。', pinyin: 'guān mén.', en: 'Close the door.' },
                { cn: '请关窗。', pinyin: 'qǐng guān chuāng.', en: 'Please close the window.' },
                { cn: '关灯。', pinyin: 'guān dēng.', en: 'Turn off the light.' },
                { cn: '把电视关掉。', pinyin: 'bǎ diànshì guān diào.', en: 'Turn off the TV.' },
                { cn: '电脑关了没有？', pinyin: 'diànnǎo guān le méiyǒu?', en: 'Is the computer turned off?' },
                { cn: '商店关门了。', pinyin: 'shāngdiàn guānmén le.', en: 'The store is closed.' },
                { cn: '这个问题跟他没关系。', pinyin: 'zhège wèntí gēn tā méi guānxi.', en: 'This problem has nothing to do with him.' },
                { cn: '请把门关上。', pinyin: 'qǐng bǎ mén guān shàng.', en: 'Please close the door.' }
            ]
        },

        {
            id: 'h2m_110', character: '穿', pinyin: 'chuān', meaning: 'to wear', hsk: 2, category: 'verbs',
            examples: [
                { cn: '穿衣服。', pinyin: 'chuān yīfu.', en: 'Wear clothes / Get dressed.' },
                { cn: '今天穿什么？', pinyin: 'jīntiān chuān shénme?', en: 'What to wear today?' },
                { cn: '穿鞋。', pinyin: 'chuān xié.', en: 'Put on shoes.' },
                { cn: '她穿了一条漂亮的裙子。', pinyin: 'tā chuān le yī tiáo piàoliang de qúnzi.', en: 'She wore a beautiful dress.' },
                { cn: '天冷了，多穿点衣服。', pinyin: 'tiān lěng le, duō chuān diǎn yīfu.', en: 'It\'s cold, wear more clothes.' },
                { cn: '这件衣服穿起来很舒服。', pinyin: 'zhè jiàn yīfu chuān qǐlái hěn shūfu.', en: 'This clothing feels comfortable to wear.' },
                { cn: '他不喜欢穿牛仔裤。', pinyin: 'tā bù xǐhuān chuān niúzǎikù.', en: 'He doesn\'t like wearing jeans.' },
                { cn: '穿好了吗？我们走吧。', pinyin: 'chuān hǎo le ma? wǒmen zǒu ba.', en: 'Are you dressed? Let\'s go.' }
            ]
        },

        {
            id: 'h2m_111', character: '洗', pinyin: 'xǐ', meaning: 'to wash', hsk: 2, category: 'verbs',
            examples: [
                { cn: '洗手。', pinyin: 'xǐ shǒu.', en: 'Wash hands.' },
                { cn: '洗衣服。', pinyin: 'xǐ yīfu.', en: 'Wash clothes.' },
                { cn: '洗脸。', pinyin: 'xǐ liǎn.', en: 'Wash face.' },
                { cn: '我去洗澡。', pinyin: 'wǒ qù xǐzǎo.', en: 'I\'m going to take a shower.' },
                { cn: '把碗洗干净。', pinyin: 'bǎ wǎn xǐ gānjìng.', en: 'Wash the dishes clean.' },
                { cn: '吃饭前要洗手。', pinyin: 'chīfàn qián yào xǐ shǒu.', en: 'Wash hands before eating.' },
                { cn: '这件衣服需要手洗。', pinyin: 'zhè jiàn yīfu xūyào shǒu xǐ.', en: 'This clothing needs to be hand-washed.' },
                { cn: '洗完澡舒服多了。', pinyin: 'xǐ wán zǎo shūfu duō le.', en: 'Feel much more comfortable after showering.' }
            ]
        },

        {
            id: 'h2m_112', character: '教', pinyin: 'jiāo', meaning: 'to teach', hsk: 2, category: 'verbs',
            examples: [
                { cn: '他教中文。', pinyin: 'tā jiāo zhōngwén.', en: 'He teaches Chinese.' },
                { cn: '你教教我怎么用。', pinyin: 'nǐ jiāo jiāo wǒ zěnme yòng.', en: 'Teach me how to use it.' },
                { cn: '妈妈教我做饭。', pinyin: 'māma jiāo wǒ zuòfàn.', en: 'Mom teaches me to cook.' },
                { cn: '谁教你中文？', pinyin: 'shéi jiāo nǐ zhōngwén?', en: 'Who teaches you Chinese?' },
                { cn: '老师教得很好。', pinyin: 'lǎoshī jiāo de hěn hǎo.', en: 'The teacher teaches very well.' },
                { cn: '这个很难教。', pinyin: 'zhège hěn nán jiāo.', en: 'This is very hard to teach.' },
                { cn: '你可以教我说中文吗？', pinyin: 'nǐ kěyǐ jiāo wǒ shuō zhōngwén ma?', en: 'Can you teach me to speak Chinese?' },
                { cn: '教会了徒弟，饿死了师傅。', pinyin: 'jiāo huì le túdì, è sǐ le shīfu.', en: 'Teach the apprentice and starve the master.' }
            ]
        },

        {
            id: 'h2m_113', character: '用', pinyin: 'yòng', meaning: 'to use', hsk: 2, category: 'verbs',
            examples: [
                { cn: '用这个。', pinyin: 'yòng zhège.', en: 'Use this.' },
                { cn: '我用手机拍照。', pinyin: 'wǒ yòng shǒujī pāizhào.', en: 'I use my phone to take photos.' },
                { cn: '这个怎么用？', pinyin: 'zhège zěnme yòng?', en: 'How do you use this?' },
                { cn: '不用谢。', pinyin: 'bù yòng xiè.', en: 'No need to thank me.' },
                { cn: '用筷子吃饭。', pinyin: 'yòng kuàizi chīfàn.', en: 'Use chopsticks to eat.' },
                { cn: '用不了那么多。', pinyin: 'yòng bù liǎo nàme duō.', en: 'Don\'t need that much.' },
                { cn: '这个办法很有用。', pinyin: 'zhège bànfǎ hěn yǒu yòng.', en: 'This method is very useful.' },
                { cn: '我用中文写日记。', pinyin: 'wǒ yòng zhōngwén xiě rìjì.', en: 'I write my diary in Chinese.' }
            ]
        },

        {
            id: 'h2m_114', character: '等', pinyin: 'děng', meaning: 'to wait', hsk: 2, category: 'verbs',
            examples: [
                { cn: '请等一下。', pinyin: 'qǐng děng yīxià.', en: 'Please wait a moment.' },
                { cn: '我在等朋友。', pinyin: 'wǒ zài děng péngyou.', en: 'I\'m waiting for a friend.' },
                { cn: '等等我。', pinyin: 'děng děng wǒ.', en: 'Wait for me.' },
                { cn: '等了好久。', pinyin: 'děng le hǎo jiǔ.', en: 'Waited for a long time.' },
                { cn: '我等不及了。', pinyin: 'wǒ děng bù jí le.', en: 'I can\'t wait any longer.' },
                { cn: '你在等谁？', pinyin: 'nǐ zài děng shéi?', en: 'Who are you waiting for?' },
                { cn: '等一会儿再说。', pinyin: 'děng yīhuǐr zài shuō.', en: 'Let\'s wait a bit before talking.' },
                { cn: '不等了，我们走吧。', pinyin: 'bù děng le, wǒmen zǒu ba.', en: 'Let\'s not wait anymore, let\'s go.' }
            ]
        },

        {
            id: 'h2m_115', character: '帮', pinyin: 'bāng', meaning: 'to help', hsk: 2, category: 'verbs',
            examples: [
                { cn: '请帮我。', pinyin: 'qǐng bāng wǒ.', en: 'Please help me.' },
                { cn: '我可以帮你吗？', pinyin: 'wǒ kěyǐ bāng nǐ ma?', en: 'Can I help you?' },
                { cn: '谢谢你的帮助。', pinyin: 'xièxiè nǐ de bāngzhù.', en: 'Thank you for your help.' },
                { cn: '帮帮忙。', pinyin: 'bāng bāng máng.', en: 'Give me a hand.' },
                { cn: '他帮了我很多忙。', pinyin: 'tā bāng le wǒ hěn duō máng.', en: 'He helped me a lot.' },
                { cn: '我们一起帮你。', pinyin: 'wǒmen yīqǐ bāng nǐ.', en: 'We will help you together.' },
                { cn: '帮我把这个拿过来。', pinyin: 'bāng wǒ bǎ zhège ná guòlái.', en: 'Help me bring this over.' },
                { cn: '不用帮，我自己来。', pinyin: 'bù yòng bāng, wǒ zìjǐ lái.', en: 'No need to help, I\'ll do it myself.' }
            ]
        },

        {
            id: 'h2m_116', character: '告诉', pinyin: 'gàosù', meaning: 'to tell', hsk: 2, category: 'verbs',
            examples: [
                { cn: '请告诉我。', pinyin: 'qǐng gàosù wǒ.', en: 'Please tell me.' },
                { cn: '我告诉你一件事。', pinyin: 'wǒ gàosù nǐ yī jiàn shì.', en: 'I\'ll tell you something.' },
                { cn: '别告诉他。', pinyin: 'bié gàosù tā.', en: 'Don\'t tell him.' },
                { cn: '谁告诉你的？', pinyin: 'shéi gàosù nǐ de?', en: 'Who told you?' },
                { cn: '老师告诉我们要好好学习。', pinyin: 'lǎoshī gàosù wǒmen yào hǎohāo xuéxí.', en: 'The teacher told us to study hard.' },
                { cn: '你不能告诉别人。', pinyin: 'nǐ bù néng gàosù biérén.', en: 'You can\'t tell others.' },
                { cn: '告诉你一个好消息。', pinyin: 'gàosù nǐ yī gè hǎo xiāoxi.', en: 'Tell you some good news.' },
                { cn: '我已经告诉过你了。', pinyin: 'wǒ yǐjīng gàosù guò nǐ le.', en: 'I already told you.' }
            ]
        },

        {
            id: 'h2m_117', character: '准备', pinyin: 'zhǔnbèi', meaning: 'to prepare', hsk: 2, category: 'verbs',
            examples: [
                { cn: '准备好了。', pinyin: 'zhǔnbèi hǎo le.', en: 'It\'s ready.' },
                { cn: '准备考试。', pinyin: 'zhǔnbèi kǎoshì.', en: 'Prepare for the exam.' },
                { cn: '妈妈在准备晚饭。', pinyin: 'māma zài zhǔnbèi wǎnfàn.', en: 'Mom is preparing dinner.' },
                { cn: '你准备好了吗？', pinyin: 'nǐ zhǔnbèi hǎo le ma?', en: 'Are you ready?' },
                { cn: '开始准备行李。', pinyin: 'kāishǐ zhǔnbèi xíngli.', en: 'Start preparing luggage.' },
                { cn: '需要准备什么？', pinyin: 'xūyào zhǔnbèi shénme?', en: 'What needs to be prepared?' },
                { cn: '我已经准备好了。', pinyin: 'wǒ yǐjīng zhǔnbèi hǎo le.', en: 'I am already prepared.' },
                { cn: '没有准备好就不能开始。', pinyin: 'méiyǒu zhǔnbèi hǎo jiù bù néng kāishǐ.', en: 'Can\'t start without being prepared.' }
            ]
        },

        {
            id: 'h2m_118', character: '开始', pinyin: 'kāishǐ', meaning: 'to begin', hsk: 2, category: 'verbs',
            examples: [
                { cn: '开始吧。', pinyin: 'kāishǐ ba.', en: 'Let\'s start.' },
                { cn: '电影开始了。', pinyin: 'diànyǐng kāishǐ le.', en: 'The movie has started.' },
                { cn: '新学期开始了。', pinyin: 'xīn xuéqī kāishǐ le.', en: 'The new semester has begun.' },
                { cn: '从零开始。', pinyin: 'cóng líng kāishǐ.', en: 'Start from zero.' },
                { cn: '开始工作。', pinyin: 'kāishǐ gōngzuò.', en: 'Start working.' },
                { cn: '一切重新开始。', pinyin: 'yīqiè chóngxīn kāishǐ.', en: 'Everything starts anew.' },
                { cn: '你什么时候开始学中文的？', pinyin: 'nǐ shénme shíhou kāishǐ xué zhōngwén de?', en: 'When did you start learning Chinese?' },
                { cn: '一个好的开始很重要。', pinyin: 'yī gè hǎo de kāishǐ hěn zhòngyào.', en: 'A good start is very important.' }
            ]
        },

        {
            id: 'h2m_119', character: '觉得', pinyin: 'juéde', meaning: 'to feel/think', hsk: 2, category: 'verbs',
            examples: [
                { cn: '我觉得很好。', pinyin: 'wǒ juéde hěn hǎo.', en: 'I think it\'s good.' },
                { cn: '你觉得呢？', pinyin: 'nǐ juéde ne?', en: 'What do you think?' },
                { cn: '我觉得不舒服。', pinyin: 'wǒ juéde bù shūfu.', en: 'I feel uncomfortable.' },
                { cn: '你觉得冷吗？', pinyin: 'nǐ juéde lěng ma?', en: 'Do you feel cold?' },
                { cn: '我不觉得难。', pinyin: 'wǒ bù juéde nán.', en: 'I don\'t think it\'s difficult.' },
                { cn: '你觉得这菜好吃吗？', pinyin: 'nǐ juéde zhè cài hǎochī ma?', en: 'Do you think this dish is delicious?' },
                { cn: '我觉得你很聪明。', pinyin: 'wǒ juéde nǐ hěn cōngmíng.', en: 'I think you are very smart.' },
                { cn: '他觉得自己是对的。', pinyin: 'tā juéde zìjǐ shì duì de.', en: 'He thinks he is right.' }
            ]
        },

        {
            id: 'h2m_120', character: '希望', pinyin: 'xīwàng', meaning: 'to hope', hsk: 2, category: 'verbs',
            examples: [
                { cn: '我希望你快乐。', pinyin: 'wǒ xīwàng nǐ kuàilè.', en: 'I hope you are happy.' },
                { cn: '希望明天不下雨。', pinyin: 'xīwàng míngtiān bù xiàyǔ.', en: 'I hope it doesn\'t rain tomorrow.' },
                { cn: '我希望学好中文。', pinyin: 'wǒ xīwàng xué hǎo zhōngwén.', en: 'I hope to learn Chinese well.' },
                { cn: '有希望。', pinyin: 'yǒu xīwàng.', en: 'There is hope.' },
                { cn: '别抱太大希望。', pinyin: 'bié bào tài dà xīwàng.', en: 'Don\'t get your hopes too high.' },
                { cn: '希望你能来。', pinyin: 'xīwàng nǐ néng lái.', en: 'I hope you can come.' },
                { cn: '希望能成功。', pinyin: 'xīwàng néng chénggōng.', en: 'Hope to succeed.' },
                { cn: '希望你一切顺利。', pinyin: 'xīwàng nǐ yīqiè shùnlì.', en: 'Hope everything goes well for you.' }
            ]
        },

        {
            id: 'h2m_121', character: '可以', pinyin: 'kěyǐ', meaning: 'can/may', hsk: 2, category: 'verbs',
            examples: [
                { cn: '可以吗？', pinyin: 'kěyǐ ma?', en: 'Is it okay?' },
                { cn: '当然可以。', pinyin: 'dāngrán kěyǐ.', en: 'Of course you can.' },
                { cn: '我可以坐这里吗？', pinyin: 'wǒ kěyǐ zuò zhèlǐ ma?', en: 'Can I sit here?' },
                { cn: '不可以用手机。', pinyin: 'bù kěyǐ yòng shǒujī.', en: 'Cannot use mobile phones.' },
                { cn: '这个可以吃吗？', pinyin: 'zhège kěyǐ chī ma?', en: 'Can this be eaten?' },
                { cn: '你可以帮我吗？', pinyin: 'nǐ kěyǐ bāng wǒ ma?', en: 'Can you help me?' },
                { cn: '我觉得可以。', pinyin: 'wǒ juéde kěyǐ.', en: 'I think it\'s okay.' },
                { cn: '这样做可不可以？', pinyin: 'zhèyàng zuò kě bù kěyǐ?', en: 'Is it okay to do it this way?' },
                { cn: '你可以走了。', pinyin: 'nǐ kěyǐ zǒu le.', en: 'You can leave now.' }
            ]
        },

        {
            id: 'h2m_122', character: '要', pinyin: 'yào', meaning: 'to want/need', hsk: 2, category: 'verbs',
            examples: [
                { cn: '我要这个。', pinyin: 'wǒ yào zhège.', en: 'I want this.' },
                { cn: '你要什么？', pinyin: 'nǐ yào shénme?', en: 'What do you want?' },
                { cn: '要下雨了。', pinyin: 'yào xiàyǔ le.', en: 'It\'s going to rain.' },
                { cn: '我要学中文。', pinyin: 'wǒ yào xué zhōngwén.', en: 'I want to learn Chinese.' },
                { cn: '需要多长时间？', pinyin: 'xūyào duō cháng shíjiān?', en: 'How long does it take?' },
                { cn: '不要着急。', pinyin: 'bù yào zháojí.', en: 'Don\'t worry.' },
                { cn: '马上就要到了。', pinyin: 'mǎshàng jiù yào dào le.', en: 'Almost there.' },
                { cn: '你要不要喝水？', pinyin: 'nǐ yào bù yào hē shuǐ?', en: 'Do you want to drink water?' }
            ]
        },

        {
            id: 'h2m_123', character: '会', pinyin: 'huì', meaning: 'can/will', hsk: 2, category: 'verbs',
            examples: [
                { cn: '我会说中文。', pinyin: 'wǒ huì shuō zhōngwén.', en: 'I can speak Chinese.' },
                { cn: '你会不会游泳？', pinyin: 'nǐ huì bù huì yóuyǒng?', en: 'Can you swim?' },
                { cn: '明天会下雨。', pinyin: 'míngtiān huì xiàyǔ.', en: 'It will rain tomorrow.' },
                { cn: '他一定会来的。', pinyin: 'tā yīdìng huì lái de.', en: 'He will definitely come.' },
                { cn: '我不会做饭。', pinyin: 'wǒ bù huì zuòfàn.', en: 'I can\'t cook.' },
                { cn: '学会了吗？', pinyin: 'xué huì le ma?', en: 'Have you learned it?' },
                { cn: '机会会来的。', pinyin: 'jīhuì huì lái de.', en: 'The opportunity will come.' },
                { cn: '你会开车吗？', pinyin: 'nǐ huì kāichē ma?', en: 'Can you drive?' }
            ]
        },

        {
            id: 'h2m_124', character: '能', pinyin: 'néng', meaning: 'can/able to', hsk: 2, category: 'verbs',
            examples: [
                { cn: '我能去吗？', pinyin: 'wǒ néng qù ma?', en: 'Can I go?' },
                { cn: '你不能这样。', pinyin: 'nǐ bù néng zhèyàng.', en: 'You can\'t do this.' },
                { cn: '能不能便宜一点？', pinyin: 'néng bù néng piányi yīdiǎn?', en: 'Can it be a bit cheaper?' },
                { cn: '我现在不能走。', pinyin: 'wǒ xiànzài bù néng zǒu.', en: 'I can\'t leave now.' },
                { cn: '你能说中文吗？', pinyin: 'nǐ néng shuō zhōngwén ma?', en: 'Can you speak Chinese?' },
                { cn: '他不能吃辣的东西。', pinyin: 'tā bù néng chī là de dōngxi.', en: 'He cannot eat spicy food.' },
                { cn: '能不能帮我一下？', pinyin: 'néng bù néng bāng wǒ yīxià?', en: 'Can you help me a bit?' },
                { cn: '一次只能做一件事。', pinyin: 'yī cì zhǐ néng zuò yī jiàn shì.', en: 'Can only do one thing at a time.' }
            ]
        },

        {
            id: 'h2m_125', character: '应该', pinyin: 'yīnggāi', meaning: 'should', hsk: 2, category: 'verbs',
            examples: [
                { cn: '你应该去。', pinyin: 'nǐ yīnggāi qù.', en: 'You should go.' },
                { cn: '应该没问题。', pinyin: 'yīnggāi méi wèntí.', en: 'Should be no problem.' },
                { cn: '我不应该说那些话。', pinyin: 'wǒ bù yīnggāi shuō nàxiē huà.', en: 'I shouldn\'t have said those words.' },
                { cn: '你应该多休息。', pinyin: 'nǐ yīnggāi duō xiūxi.', en: 'You should rest more.' },
                { cn: '现在应该到了吧？', pinyin: 'xiànzài yīnggāi dào le ba?', en: 'Should have arrived by now?' },
                { cn: '我们应该互相帮助。', pinyin: 'wǒmen yīnggāi hùxiāng bāngzhù.', en: 'We should help each other.' },
                { cn: '孩子应该早睡早起。', pinyin: 'háizi yīnggāi zǎo shuì zǎo qǐ.', en: 'Children should go to bed early and get up early.' },
                { cn: '这件事你应该知道。', pinyin: 'zhè jiàn shì nǐ yīnggāi zhīdào.', en: 'You should know about this.' }
            ]
        },

        {
            id: 'h2m_126', character: '愿意', pinyin: 'yuànyì', meaning: 'willing', hsk: 2, category: 'verbs',
            examples: [
                { cn: '我愿意。', pinyin: 'wǒ yuànyì.', en: 'I am willing.' },
                { cn: '你愿意嫁给我吗？', pinyin: 'nǐ yuànyì jià gěi wǒ ma?', en: 'Will you marry me?' },
                { cn: '谁愿意去？', pinyin: 'shéi yuànyì qù?', en: 'Who is willing to go?' },
                { cn: '我不愿意做这件事。', pinyin: 'wǒ bù yuànyì zuò zhè jiàn shì.', en: 'I am not willing to do this.' },
                { cn: '他愿意帮我。', pinyin: 'tā yuànyì bāng wǒ.', en: 'He is willing to help me.' },
                { cn: '只要你愿意，什么都可以。', pinyin: 'zhǐyào nǐ yuànyì, shénme dōu kěyǐ.', en: 'As long as you\'re willing, anything is possible.' },
                { cn: '我很愿意加入你们。', pinyin: 'wǒ hěn yuànyì jiārù nǐmen.', en: 'I am very willing to join you.' },
                { cn: '他不太愿意说话。', pinyin: 'tā bù tài yuànyì shuōhuà.', en: 'He is not very willing to talk.' }
            ]
        },

        {
            id: 'h2m_127', character: '认识', pinyin: 'rènshi', meaning: 'to know (someone)', hsk: 2, category: 'verbs',
            examples: [
                { cn: '我认识他。', pinyin: 'wǒ rènshi tā.', en: 'I know him.' },
                { cn: '很高兴认识你。', pinyin: 'hěn gāoxìng rènshi nǐ.', en: 'Nice to meet you.' },
                { cn: '我不认识路。', pinyin: 'wǒ bù rènshi lù.', en: 'I don\'t know the way.' },
                { cn: '你认识这个人吗？', pinyin: 'nǐ rènshi zhège rén ma?', en: 'Do you know this person?' },
                { cn: '我们认识很久了。', pinyin: 'wǒmen rènshi hěn jiǔ le.', en: 'We have known each other for a long time.' },
                { cn: '他认识很多中文字。', pinyin: 'tā rènshi hěn duō zhōngwén zì.', en: 'He knows many Chinese characters.' },
                { cn: '通过朋友认识的。', pinyin: 'tōngguò péngyou rènshi de.', en: 'Met through a friend.' },
                { cn: '我不太认识这两个字。', pinyin: 'wǒ bù tài rènshi zhè liǎng gè zì.', en: 'I don\'t really know these two characters.' }
            ]
        },

        {
            id: 'h2m_128', character: '了解', pinyin: 'liǎojiě', meaning: 'to understand', hsk: 2, category: 'verbs',
            examples: [
                { cn: '我不了解。', pinyin: 'wǒ bù liǎojiě.', en: 'I don\'t understand.' },
                { cn: '你了解中国吗？', pinyin: 'nǐ liǎojiě zhōngguó ma?', en: 'Do you understand China?' },
                { cn: '我想多了解你。', pinyin: 'wǒ xiǎng duō liǎojiě nǐ.', en: 'I want to get to know you better.' },
                { cn: '了解一下情况。', pinyin: 'liǎojiě yīxià qíngkuàng.', en: 'Get a sense of the situation.' },
                { cn: '他非常了解这件事。', pinyin: 'tā fēicháng liǎojiě zhè jiàn shì.', en: 'He understands this matter very well.' },
                { cn: '我不太了解中国文化。', pinyin: 'wǒ bù tài liǎojiě zhōngguó wénhuà.', en: 'I don\'t really understand Chinese culture.' },
                { cn: '了解自己才能了解别人。', pinyin: 'liǎojiě zìjǐ cái néng liǎojiě biérén.', en: 'Understand yourself before you can understand others.' },
                { cn: '你最好先了解一下。', pinyin: 'nǐ zuìhǎo xiān liǎojiě yīxià.', en: 'You\'d better understand first.' }
            ]
        },

        {
            id: 'h2m_129', character: '相信', pinyin: 'xiāngxìn', meaning: 'to believe', hsk: 2, category: 'verbs',
            examples: [
                { cn: '我相信你。', pinyin: 'wǒ xiāngxìn nǐ.', en: 'I believe you.' },
                { cn: '你相信我吗？', pinyin: 'nǐ xiāngxìn wǒ ma?', en: 'Do you believe me?' },
                { cn: '我不相信。', pinyin: 'wǒ bù xiāngxìn.', en: 'I don\'t believe it.' },
                { cn: '相信自己的力量。', pinyin: 'xiāngxìn zìjǐ de lìliàng.', en: 'Believe in your own strength.' },
                { cn: '他相信自己的判断。', pinyin: 'tā xiāngxìn zìjǐ de pànduàn.', en: 'He believes in his own judgment.' },
                { cn: '很难相信这是真的。', pinyin: 'hěn nán xiāngxìn zhè shì zhēn de.', en: 'Hard to believe this is true.' },
                { cn: '请相信我一次。', pinyin: 'qǐng xiāngxìn wǒ yī cì.', en: 'Please believe me this once.' },
                { cn: '相信自己能行。', pinyin: 'xiāngxìn zìjǐ néng xíng.', en: 'Believe you can do it.' }
            ]
        },

        {
            id: 'h2m_130', character: '需要', pinyin: 'xūyào', meaning: 'to need', hsk: 2, category: 'verbs',
            examples: [
                { cn: '我需要帮助。', pinyin: 'wǒ xūyào bāngzhù.', en: 'I need help.' },
                { cn: '你需要什么？', pinyin: 'nǐ xūyào shénme?', en: 'What do you need?' },
                { cn: '不需要。', pinyin: 'bù xūyào.', en: 'Not needed.' },
                { cn: '我需要更多时间。', pinyin: 'wǒ xūyào gèng duō shíjiān.', en: 'I need more time.' },
                { cn: '你需要休息一下。', pinyin: 'nǐ xūyào xiūxi yīxià.', en: 'You need to rest a bit.' },
                { cn: '需要多少钱？', pinyin: 'xūyào duōshao qián?', en: 'How much money is needed?' },
                { cn: '这个工作需要很多耐心。', pinyin: 'zhège gōngzuò xūyào hěn duō nàixīn.', en: 'This job requires a lot of patience.' },
                { cn: '学中文需要天天练习。', pinyin: 'xué zhōngwén xūyào tiāntiān liànxí.', en: 'Learning Chinese requires daily practice.' }
            ]
        },

        {
            id: 'h2m_131', character: '担心', pinyin: 'dānxīn', meaning: 'to worry', hsk: 2, category: 'verbs',
            examples: [
                { cn: '别担心。', pinyin: 'bié dānxīn.', en: 'Don\'t worry.' },
                { cn: '我担心他。', pinyin: 'wǒ dānxīn tā.', en: 'I worry about him.' },
                { cn: '不用担心。', pinyin: 'bù yòng dānxīn.', en: 'No need to worry.' },
                { cn: '父母总是担心孩子。', pinyin: 'fùmǔ zǒngshì dānxīn háizi.', en: 'Parents always worry about their children.' },
                { cn: '你在担心什么？', pinyin: 'nǐ zài dānxīn shénme?', en: 'What are you worried about?' },
                { cn: '别太担心了。', pinyin: 'bié tài dānxīn le.', en: 'Don\'t worry too much.' },
                { cn: '担心也没用。', pinyin: 'dānxīn yě méi yòng.', en: 'Worrying is useless.' },
                { cn: '他担心考试不及格。', pinyin: 'tā dānxīn kǎoshì bù jígé.', en: 'He\'s worried about failing the exam.' }
            ]
        },

        {
            id: 'h2m_132', character: '害怕', pinyin: 'hàipà', meaning: 'to be afraid', hsk: 2, category: 'verbs',
            examples: [
                { cn: '我害怕。', pinyin: 'wǒ hàipà.', en: 'I am afraid.' },
                { cn: '别害怕。', pinyin: 'bié hàipà.', en: 'Don\'t be afraid.' },
                { cn: '你害怕什么？', pinyin: 'nǐ hàipà shénme?', en: 'What are you afraid of?' },
                { cn: '她害怕黑暗。', pinyin: 'tā hàipà hēiàn.', en: 'She is afraid of the dark.' },
                { cn: '不要害怕失败。', pinyin: 'bù yào hàipà shībài.', en: 'Don\'t be afraid of failure.' },
                { cn: '我害怕一个人在家。', pinyin: 'wǒ hàipà yīgèrén zài jiā.', en: 'I\'m afraid of being home alone.' },
                { cn: '他害怕做错事。', pinyin: 'tā hàipà zuò cuò shì.', en: 'He is afraid of doing things wrong.' },
                { cn: '没什么好害怕的。', pinyin: 'méi shénme hǎo hàipà de.', en: 'There\'s nothing to be afraid of.' }
            ]
        },

        {
            id: 'h2m_133', character: '生气', pinyin: 'shēngqì', meaning: 'to be angry', hsk: 2, category: 'verbs',
            examples: [
                { cn: '他生气了。', pinyin: 'tā shēngqì le.', en: 'He is angry.' },
                { cn: '别生气。', pinyin: 'bié shēngqì.', en: 'Don\'t be angry.' },
                { cn: '你为什么生气？', pinyin: 'nǐ wèishénme shēngqì?', en: 'Why are you angry?' },
                { cn: '妈妈真的生气了。', pinyin: 'māma zhēnde shēngqì le.', en: 'Mom is really angry.' },
                { cn: '他的话让我很生气。', pinyin: 'tā de huà ràng wǒ hěn shēngqì.', en: 'His words made me very angry.' },
                { cn: '生气对身体不好。', pinyin: 'shēngqì duì shēntǐ bù hǎo.', en: 'Getting angry is bad for your health.' },
                { cn: '我不是故意惹你生气的。', pinyin: 'wǒ bù shì gùyì rě nǐ shēngqì de.', en: 'I didn\'t mean to make you angry.' },
                { cn: '他又生气了。', pinyin: 'tā yòu shēngqì le.', en: 'He got angry again.' }
            ]
        },

        {
            id: 'h2m_134', character: '着急', pinyin: 'zháojí', meaning: 'to be anxious', hsk: 2, category: 'verbs',
            examples: [
                { cn: '别着急。', pinyin: 'bié zháojí.', en: 'Don\'t be anxious.' },
                { cn: '我很着急。', pinyin: 'wǒ hěn zháojí.', en: 'I am very anxious.' },
                { cn: '着急也没有用。', pinyin: 'zháojí yě méiyǒu yòng.', en: 'Being anxious is useless.' },
                { cn: '他急着要回家。', pinyin: 'tā jízhe yào huí jiā.', en: 'He is anxious to go home.' },
                { cn: '慢慢来，别着急。', pinyin: 'mànmàn lái, bié zháojí.', en: 'Take it slow, don\'t be anxious.' },
                { cn: '你在着急什么？', pinyin: 'nǐ zài zháojí shénme?', en: 'What are you anxious about?' },
                { cn: '时间还早，不用着急。', pinyin: 'shíjiān hái zǎo, bù yòng zháojí.', en: 'It\'s still early, no need to be anxious.' },
                { cn: '他着急是因为迟到了。', pinyin: 'tā zháojí shì yīnwèi chídào le.', en: 'He is anxious because he is late.' }
            ]
        },

        {
            id: 'h2m_135', character: '满意', pinyin: 'mǎnyì', meaning: 'to be satisfied', hsk: 2, category: 'verbs',
            examples: [
                { cn: '我很满意。', pinyin: 'wǒ hěn mǎnyì.', en: 'I am very satisfied.' },
                { cn: '你满意吗？', pinyin: 'nǐ mǎnyì ma?', en: 'Are you satisfied?' },
                { cn: '不满意。', pinyin: 'bù mǎnyì.', en: 'Not satisfied.' },
                { cn: '他对结果很满意。', pinyin: 'tā duì jiéguǒ hěn mǎnyì.', en: 'He is very satisfied with the result.' },
                { cn: '老板对员工很满意。', pinyin: 'lǎobǎn duì yuángōng hěn mǎnyì.', en: 'The boss is very satisfied with the employees.' },
                { cn: '这个答案你满意吗？', pinyin: 'zhège dáàn nǐ mǎnyì ma?', en: 'Are you satisfied with this answer?' },
                { cn: '令人满意的结果。', pinyin: 'lìng rén mǎnyì de jiéguǒ.', en: 'A satisfying result.' },
                { cn: '我不太满意这个安排。', pinyin: 'wǒ bù tài mǎnyì zhège ānpái.', en: 'I\'m not very satisfied with this arrangement.' }
            ]
        },

        {
            id: 'h2m_136', character: '习惯', pinyin: 'xíguàn', meaning: 'to be used to', hsk: 2, category: 'verbs',
            examples: [
                { cn: '我习惯了。', pinyin: 'wǒ xíguàn le.', en: 'I\'m used to it.' },
                { cn: '我不习惯早起。', pinyin: 'wǒ bù xíguàn zǎoqǐ.', en: 'I\'m not used to getting up early.' },
                { cn: '慢慢就习惯了。', pinyin: 'mànmàn jiù xíguàn le.', en: 'You\'ll get used to it gradually.' },
                { cn: '好习惯很重要。', pinyin: 'hǎo xíguàn hěn zhòngyào.', en: 'Good habits are very important.' },
                { cn: '你习惯这里的生活吗？', pinyin: 'nǐ xíguàn zhèlǐ de shēnghuó ma?', en: 'Are you used to life here?' },
                { cn: '坏习惯很难改。', pinyin: 'huài xíguàn hěn nán gǎi.', en: 'Bad habits are hard to change.' },
                { cn: '我已经习惯了中国的饭菜。', pinyin: 'wǒ yǐjīng xíguàn le zhōngguó de fàncài.', en: 'I\'ve gotten used to Chinese food.' },
                { cn: '从小养成的习惯。', pinyin: 'cóngxiǎo yǎngchéng de xíguàn.', en: 'A habit formed since childhood.' }
            ]
        },

        {
            id: 'h2m_137', character: '感兴趣', pinyin: 'gǎn xìngqù', meaning: 'to be interested', hsk: 2, category: 'verbs',
            examples: [
                { cn: '我很感兴趣。', pinyin: 'wǒ hěn gǎn xìngqù.', en: 'I am very interested.' },
                { cn: '不感兴趣。', pinyin: 'bù gǎn xìngqù.', en: 'Not interested.' },
                { cn: '我对中国很感兴趣。', pinyin: 'wǒ duì zhōngguó hěn gǎn xìngqù.', en: 'I am very interested in China.' },
                { cn: '他对外语很感兴趣。', pinyin: 'tā duì wàiyǔ hěn gǎn xìngqù.', en: 'He is very interested in foreign languages.' },
                { cn: '你对什么感兴趣？', pinyin: 'nǐ duì shénme gǎn xìngqù?', en: 'What are you interested in?' },
                { cn: '我渐渐对历史感兴趣了。', pinyin: 'wǒ jiànjiàn duì lìshǐ gǎn xìngqù le.', en: 'I\'m gradually becoming interested in history.' },
                { cn: '他好像不太感兴趣。', pinyin: 'tā hǎoxiàng bù tài gǎn xìngqù.', en: 'He doesn\'t seem very interested.' },
                { cn: '大家都对这个项目很感兴趣。', pinyin: 'dàjiā dōu duì zhège xiàngmù hěn gǎn xìngqù.', en: 'Everyone is very interested in this project.' }
            ]
        },

        {
            id: 'h2m_138', character: '同意', pinyin: 'tóngyì', meaning: 'to agree', hsk: 2, category: 'verbs',
            examples: [
                { cn: '我同意。', pinyin: 'wǒ tóngyì.', en: 'I agree.' },
                { cn: '你同意吗？', pinyin: 'nǐ tóngyì ma?', en: 'Do you agree?' },
                { cn: '不同意。', pinyin: 'bù tóngyì.', en: 'Disagree.' },
                { cn: '大家都同意这个决定。', pinyin: 'dàjiā dōu tóngyì zhège juédìng.', en: 'Everyone agrees with this decision.' },
                { cn: '我同意你的看法。', pinyin: 'wǒ tóngyì nǐ de kànfǎ.', en: 'I agree with your view.' },
                { cn: '如果你同意的话。', pinyin: 'rúguǒ nǐ tóngyì dehuà.', en: 'If you agree.' },
                { cn: '爸爸终于同意了。', pinyin: 'bàba zhōngyú tóngyì le.', en: 'Dad finally agreed.' },
                { cn: '我不能同意这个方案。', pinyin: 'wǒ bù néng tóngyì zhège fāngàn.', en: 'I cannot agree with this plan.' }
            ]
        },

        {
            id: 'h2m_139', character: '反对', pinyin: 'fǎnduì', meaning: 'to oppose', hsk: 2, category: 'verbs',
            examples: [
                { cn: '我反对。', pinyin: 'wǒ fǎnduì.', en: 'I oppose.' },
                { cn: '很多人反对这个计划。', pinyin: 'hěn duō rén fǎnduì zhège jìhuà.', en: 'Many people oppose this plan.' },
                { cn: '反对的声音很大。', pinyin: 'fǎnduì de shēngyīn hěn dà.', en: 'The opposing voices are loud.' },
                { cn: '我反对这种做法。', pinyin: 'wǒ fǎnduì zhè zhǒng zuòfǎ.', en: 'I oppose this approach.' },
                { cn: '有没有人反对？', pinyin: 'yǒu méiyǒu rén fǎnduì?', en: 'Is there anyone opposed?' },
                { cn: '他反对我的建议。', pinyin: 'tā fǎnduì wǒ de jiànyì.', en: 'He opposes my suggestion.' },
                { cn: '反对的人请举手。', pinyin: 'fǎnduì de rén qǐng jǔ shǒu.', en: 'Those opposed, please raise your hand.' },
                { cn: '你不能反对所有人的意见。', pinyin: 'nǐ bù néng fǎnduì suǒyǒu rén de yìjiàn.', en: 'You can\'t oppose everyone\'s opinions.' }
            ]
        },

        {
            id: 'h2m_140', character: '支持', pinyin: 'zhīchí', meaning: 'to support', hsk: 2, category: 'verbs',
            examples: [
                { cn: '我支持你。', pinyin: 'wǒ zhīchí nǐ.', en: 'I support you.' },
                { cn: '谢谢你的支持。', pinyin: 'xièxiè nǐ de zhīchí.', en: 'Thank you for your support.' },
                { cn: '父母一直支持我。', pinyin: 'fùmǔ yīzhí zhīchí wǒ.', en: 'My parents have always supported me.' },
                { cn: '大家都很支持他。', pinyin: 'dàjiā dōu hěn zhīchí tā.', en: 'Everyone supports him.' },
                { cn: '你的支持对我很重要。', pinyin: 'nǐ de zhīchí duì wǒ hěn zhòngyào.', en: 'Your support is very important to me.' },
                { cn: '不支持这个决定。', pinyin: 'bù zhīchí zhège juédìng.', en: 'Do not support this decision.' },
                { cn: '我们需要互相支持。', pinyin: 'wǒmen xūyào hùxiāng zhīchí.', en: 'We need to support each other.' },
                { cn: '公司支持员工学习新技能。', pinyin: 'gōngsī zhīchí yuángōng xuéxí xīn jìnéng.', en: 'The company supports employees in learning new skills.' }
            ]
        },

        // ============================
        // Weather
        // ============================
        {
            id: 'h2m_141', character: '阴', pinyin: 'yīn', meaning: 'cloudy', hsk: 2, category: 'weather',
            examples: [
                { cn: '今天阴天。', pinyin: 'jīntiān yīntiān.', en: 'Today is cloudy.' },
                { cn: '天阴了。', pinyin: 'tiān yīn le.', en: 'The sky turned cloudy.' },
                { cn: '阴天没有太阳。', pinyin: 'yīntiān méiyǒu tàiyáng.', en: 'There\'s no sun on cloudy days.' },
                { cn: '阴转晴。', pinyin: 'yīn zhuǎn qíng.', en: 'Cloudy turning sunny.' },
                { cn: '阴沉沉的。', pinyin: 'yīnchénchén de.', en: 'Gloomy and overcast.' },
                { cn: '阴天可能会下雨。', pinyin: 'yīntiān kěnéng huì xiàyǔ.', en: 'It might rain on a cloudy day.' },
                { cn: '今天天气阴阴的。', pinyin: 'jīntiān tiānqì yīn yīn de.', en: 'Today\'s weather is overcast.' },
                { cn: '阴凉的地方。', pinyin: 'yīnliáng de dìfang.', en: 'A shady place.' }
            ]
        },

        {
            id: 'h2m_142', character: '刮风', pinyin: 'guāfēng', meaning: 'windy', hsk: 2, category: 'weather',
            examples: [
                { cn: '外面刮风。', pinyin: 'wàimiàn guāfēng.', en: 'It\'s windy outside.' },
                { cn: '今天刮大风。', pinyin: 'jīntiān guā dà fēng.', en: 'It\'s very windy today.' },
                { cn: '刮风下雨。', pinyin: 'guā fēng xià yǔ.', en: 'Windy and rainy.' },
                { cn: '外面刮风了，多穿点。', pinyin: 'wàimiàn guā fēng le, duō chuān diǎn.', en: 'It\'s windy outside, wear more.' },
                { cn: '刮风的时候别出门。', pinyin: 'guā fēng de shíhou bié chūmén.', en: 'Don\'t go out when it\'s windy.' },
                { cn: '这里经常刮风。', pinyin: 'zhèlǐ jīngcháng guāfēng.', en: 'It\'s often windy here.' },
                { cn: '刮风的声音很大。', pinyin: 'guā fēng de shēngyīn hěn dà.', en: 'The sound of the wind is very loud.' },
                { cn: '春风刮起来了。', pinyin: 'chūn fēng guā qǐlái le.', en: 'The spring wind has started blowing.' }
            ]
        },

        {
            id: 'h2m_143', character: '下雨', pinyin: 'xiàyǔ', meaning: 'rainy', hsk: 2, category: 'weather',
            examples: [
                { cn: '今天下雨。', pinyin: 'jīntiān xiàyǔ.', en: 'It\'s raining today.' },
                { cn: '下雨了。', pinyin: 'xiàyǔ le.', en: 'It\'s raining.' },
                { cn: '外面在下雨。', pinyin: 'wàimiàn zài xiàyǔ.', en: 'It\'s raining outside.' },
                { cn: '下雨天。', pinyin: 'xiàyǔ tiān.', en: 'A rainy day.' },
                { cn: '下雨的时候我喜欢在家。', pinyin: 'xiàyǔ de shíhou wǒ xǐhuān zài jiā.', en: 'I like being at home when it rains.' },
                { cn: '好像要下雨了。', pinyin: 'hǎoxiàng yào xiàyǔ le.', en: 'Looks like it might rain.' },
                { cn: '昨天下了一天的雨。', pinyin: 'zuótiān xià le yī tiān de yǔ.', en: 'It rained all day yesterday.' },
                { cn: '下雨别忘了带伞。', pinyin: 'xiàyǔ bié wàng le dài sǎn.', en: 'Don\'t forget to bring an umbrella when it rains.' }
            ]
        },

        {
            id: 'h2m_144', character: '下雪', pinyin: 'xiàxuě', meaning: 'snowy', hsk: 2, category: 'weather',
            examples: [
                { cn: '今天下雪。', pinyin: 'jīntiān xiàxuě.', en: 'It\'s snowing today.' },
                { cn: '下雪了。', pinyin: 'xiàxuě le.', en: 'It\'s snowing.' },
                { cn: '外面在下雪。', pinyin: 'wàimiàn zài xiàxuě.', en: 'It\'s snowing outside.' },
                { cn: '北京冬天会下雪吗？', pinyin: 'běijīng dōngtiān huì xiàxuě ma?', en: 'Does Beijing get snow in winter?' },
                { cn: '下雪天很美。', pinyin: 'xiàxuě tiān hěn měi.', en: 'Snowy days are beautiful.' },
                { cn: '第一次见到下雪。', pinyin: 'dì yī cì jiàndào xiàxuě.', en: 'First time seeing snow.' },
                { cn: '下了很大的雪。', pinyin: 'xià le hěn dà de xuě.', en: 'It snowed heavily.' },
                { cn: '孩子最喜欢下雪了。', pinyin: 'háizi zuì xǐhuān xiàxuě le.', en: 'Children love snow the most.' }
            ]
        },

        {
            id: 'h2m_145', character: '温度', pinyin: 'wēndù', meaning: 'temperature', hsk: 2, category: 'weather',
            examples: [
                { cn: '温度很高。', pinyin: 'wēndù hěn gāo.', en: 'The temperature is high.' },
                { cn: '今天的温度是多少？', pinyin: 'jīntiān de wēndù shì duōshao?', en: 'What is today\'s temperature?' },
                { cn: '温度计。', pinyin: 'wēndù jì.', en: 'Thermometer.' },
                { cn: '室内温度。', pinyin: 'shìnèi wēndù.', en: 'Indoor temperature.' },
                { cn: '温度太低了。', pinyin: 'wēndù tài dī le.', en: 'The temperature is too low.' },
                { cn: '温度上升。', pinyin: 'wēndù shàngshēng.', en: 'Temperature rise.' },
                { cn: '这里冬天的温度在零下。', pinyin: 'zhèlǐ dōngtiān de wēndù zài líng xià.', en: 'Winter temperatures here are below zero.' },
                { cn: '温度变化很大。', pinyin: 'wēndù biànhuà hěn dà.', en: 'The temperature change is significant.' }
            ]
        },

        {
            id: 'h2m_146', character: '度', pinyin: 'dù', meaning: 'degree', hsk: 2, category: 'weather',
            examples: [
                { cn: '三十度。', pinyin: 'sānshí dù.', en: 'Thirty degrees.' },
                { cn: '今天三十几度。', pinyin: 'jīntiān sānshí jǐ dù.', en: 'It\'s over thirty degrees today.' },
                { cn: '零度。', pinyin: 'líng dù.', en: 'Zero degrees.' },
                { cn: '一度两度。', pinyin: 'yī dù liǎng dù.', en: 'One or two degrees.' },
                { cn: '温度到了四十度。', pinyin: 'wēndù dào le sìshí dù.', en: 'The temperature reached forty degrees.' },
                { cn: '中度。', pinyin: 'zhōng dù.', en: 'Moderate.' },
                { cn: '速度很快。', pinyin: 'sùdù hěn kuài.', en: 'The speed is very fast.' },
                { cn: '度数不高。', pinyin: 'dùshù bù gāo.', en: 'The degree is not high (alcohol).' }
            ]
        },

        {
            id: 'h2m_147', character: '天气', pinyin: 'tiānqì', meaning: 'weather', hsk: 2, category: 'weather',
            examples: [
                { cn: '天气很好。', pinyin: 'tiānqì hěn hǎo.', en: 'The weather is good.' },
                { cn: '今天天气怎么样？', pinyin: 'jīntiān tiānqì zěnmeyàng?', en: 'How\'s the weather today?' },
                { cn: '天气预报。', pinyin: 'tiānqì yùbào.', en: 'Weather forecast.' },
                { cn: '天气越来越热。', pinyin: 'tiānqì yuèláiyuè rè.', en: 'The weather is getting hotter and hotter.' },
                { cn: '北京秋天的天气最好。', pinyin: 'běijīng qiūtiān de tiānqì zuì hǎo.', en: 'Beijing\'s autumn weather is the best.' },
                { cn: '天气不好就别出去了。', pinyin: 'tiānqì bù hǎo jiù bié chūqù le.', en: 'If the weather is bad, don\'t go out.' },
                { cn: '天气变化很快。', pinyin: 'tiānqì biànhuà hěn kuài.', en: 'The weather changes quickly.' },
                { cn: '我很喜欢这种天气。', pinyin: 'wǒ hěn xǐhuān zhè zhǒng tiānqì.', en: 'I really like this kind of weather.' }
            ]
        },

        {
            id: 'h2m_148', character: '风', pinyin: 'fēng', meaning: 'wind', hsk: 2, category: 'weather',
            examples: [
                { cn: '风很大。', pinyin: 'fēng hěn dà.', en: 'The wind is strong.' },
                { cn: '春天的风很舒服。', pinyin: 'chūntiān de fēng hěn shūfu.', en: 'The spring wind is very comfortable.' },
                { cn: '大风。', pinyin: 'dà fēng.', en: 'Strong wind.' },
                { cn: '风停了。', pinyin: 'fēng tíng le.', en: 'The wind stopped.' },
                { cn: '冷风吹过。', pinyin: 'lěng fēng chuī guò.', en: 'A cold wind blows through.' },
                { cn: '风的方向。', pinyin: 'fēng de fāngxiàng.', en: 'Wind direction.' },
                { cn: '风太大了。', pinyin: 'fēng tài dà le.', en: 'The wind is too strong.' },
                { cn: '听风的声音。', pinyin: 'tīng fēng de shēngyīn.', en: 'Listen to the sound of the wind.' }
            ]
        },

        {
            id: 'h2m_149', character: '雨', pinyin: 'yǔ', meaning: 'rain', hsk: 2, category: 'weather',
            examples: [
                { cn: '大雨。', pinyin: 'dà yǔ.', en: 'Heavy rain.' },
                { cn: '小雨。', pinyin: 'xiǎo yǔ.', en: 'Light rain.' },
                { cn: '下雨了。', pinyin: 'xià yǔ le.', en: 'It\'s raining.' },
                { cn: '今天有雨。', pinyin: 'jīntiān yǒu yǔ.', en: 'There is rain today.' },
                { cn: '雨后彩虹。', pinyin: 'yǔ hòu cǎihóng.', en: 'Rainbow after the rain.' },
                { cn: '雨很大。', pinyin: 'yǔ hěn dà.', en: 'The rain is heavy.' },
                { cn: '暴雨。', pinyin: 'bàoyǔ.', en: 'Rainstorm.' },
                { cn: '小雨点。', pinyin: 'xiǎo yǔ diǎn.', en: 'Little raindrops.' }
            ]
        },

        {
            id: 'h2m_150', character: '雪', pinyin: 'xuě', meaning: 'snow', hsk: 2, category: 'weather',
            examples: [
                { cn: '大雪。', pinyin: 'dà xuě.', en: 'Heavy snow.' },
                { cn: '下雪了。', pinyin: 'xià xuě le.', en: 'It\'s snowing.' },
                { cn: '雪花。', pinyin: 'xuěhuā.', en: 'Snowflakes.' },
                { cn: '白雪。', pinyin: 'bái xuě.', en: 'White snow.' },
                { cn: '雪很大。', pinyin: 'xuě hěn dà.', en: 'The snow is heavy.' },
                { cn: '山上有很多雪。', pinyin: 'shān shàng yǒu hěn duō xuě.', en: 'There is a lot of snow on the mountain.' },
                { cn: '我喜欢看雪。', pinyin: 'wǒ xǐhuān kàn xuě.', en: 'I like watching snow.' },
                { cn: '雪人。', pinyin: 'xuěrén.', en: 'Snowman.' }
            ]
        }

    ],

    // Get words by category
    getByCategory(category) {
        return this.words.filter(w => w.category === category);
    },

    // Search words
    search(query) {
        const lowerQuery = query.toLowerCase();
        return this.words.filter(w =>
            w.character.includes(query) ||
            w.pinyin.toLowerCase().includes(lowerQuery) ||
            w.meaning.toLowerCase().includes(lowerQuery)
        );
    }
};

window.HSK2Massive = HSK2Massive;
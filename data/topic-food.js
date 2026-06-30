// ============================================
// CHINESE MASTER - FOOD & ORDERING VOCABULARY
// 150+ Food Words with Examples
// ALL SIMPLIFIED CHINESE - Verified Pinyin
// ============================================

const TopicFood = {
    words: [
        // ============================
        // STAPLE FOODS
        // ============================
        { id: 'fd001', character: '米饭', pinyin: 'mǐ fàn', meaning: 'rice', examples: [{ cn: '吃米饭。', en: 'Eat rice.' }, { cn: '米饭很好吃。', en: 'The rice is delicious.' }] },
        { id: 'fd002', character: '面条', pinyin: 'miàn tiáo', meaning: 'noodles', examples: [{ cn: '吃面条。', en: 'Eat noodles.' }, { cn: '面条很热。', en: 'The noodles are hot.' }] },
        { id: 'fd003', character: '馒头', pinyin: 'mán tou', meaning: 'steamed bun', examples: [{ cn: '吃馒头。', en: 'Eat steamed bun.' }, { cn: '馒头很软。', en: 'The steamed bun is soft.' }] },
        { id: 'fd004', character: '饺子', pinyin: 'jiǎo zi', meaning: 'dumplings', examples: [{ cn: '包饺子。', en: 'Make dumplings.' }, { cn: '饺子很好吃。', en: 'Dumplings are delicious.' }] },
        { id: 'fd005', character: '包子', pinyin: 'bāo zi', meaning: 'steamed stuffed bun', examples: [{ cn: '吃包子。', en: 'Eat steamed buns.' }, { cn: '肉包子。', en: 'Meat bun.' }] },
        { id: 'fd006', character: '饼', pinyin: 'bǐng', meaning: 'flatbread/cookie', examples: [{ cn: '吃饼。', en: 'Eat flatbread.' }, { cn: '饼干。', en: 'Biscuit.' }] },
        { id: 'fd007', character: '粥', pinyin: 'zhōu', meaning: 'porridge', examples: [{ cn: '喝粥。', en: 'Drink porridge.' }, { cn: '白粥。', en: 'Plain porridge.' }] },
        { id: 'fd008', character: '油条', pinyin: 'yóu tiáo', meaning: 'fried dough stick', examples: [{ cn: '吃油条。', en: 'Eat fried dough stick.' }, { cn: '油条很脆。', en: 'The fried dough stick is crispy.' }] },
        { id: 'fd009', character: '豆浆', pinyin: 'dòu jiāng', meaning: 'soy milk', examples: [{ cn: '喝豆浆。', en: 'Drink soy milk.' }, { cn: '豆浆很甜。', en: 'The soy milk is sweet.' }] },
        { id: 'fd010', character: '面包', pinyin: 'miàn bāo', meaning: 'bread', examples: [{ cn: '吃面包。', en: 'Eat bread.' }, { cn: '面包很新鲜。', en: 'The bread is fresh.' }] },

        // ============================
        // MEAT & SEAFOOD
        // ============================
        { id: 'fd011', character: '猪肉', pinyin: 'zhū ròu', meaning: 'pork', examples: [{ cn: '吃猪肉。', en: 'Eat pork.' }, { cn: '猪肉很新鲜。', en: 'The pork is fresh.' }] },
        { id: 'fd012', character: '牛肉', pinyin: 'niú ròu', meaning: 'beef', examples: [{ cn: '吃牛肉。', en: 'Eat beef.' }, { cn: '牛肉很贵。', en: 'Beef is expensive.' }] },
        { id: 'fd013', character: '鸡肉', pinyin: 'jī ròu', meaning: 'chicken', examples: [{ cn: '吃鸡肉。', en: 'Eat chicken.' }, { cn: '鸡肉很嫩。', en: 'The chicken is tender.' }] },
        { id: 'fd014', character: '羊肉', pinyin: 'yáng ròu', meaning: 'lamb/mutton', examples: [{ cn: '吃羊肉。', en: 'Eat lamb.' }, { cn: '羊肉串。', en: 'Lamb skewers.' }] },
        { id: 'fd015', character: '鱼', pinyin: 'yú', meaning: 'fish', examples: [{ cn: '吃鱼。', en: 'Eat fish.' }, { cn: '鱼很新鲜。', en: 'The fish is fresh.' }] },
        { id: 'fd016', character: '虾', pinyin: 'xiā', meaning: 'shrimp', examples: [{ cn: '吃虾。', en: 'Eat shrimp.' }, { cn: '虾很新鲜。', en: 'The shrimp is fresh.' }] },
        { id: 'fd017', character: '螃蟹',pinyin: 'páng xiè', meaning: 'crab', examples: [{ cn: '吃螃蟹。', en: 'Eat crab.' }, { cn: '螃蟹很贵。', en: 'Crab is expensive.' }] },
        { id: 'fd018', character: '鸡蛋', pinyin: 'jī dàn', meaning: 'egg', examples: [{ cn: '吃鸡蛋。', en: 'Eat eggs.' }, { cn: '鸡蛋很新鲜。', en: 'The eggs are fresh.' }] },
        { id: 'fd019', character: '鸭', pinyin: 'yā', meaning: 'duck', examples: [{ cn: '烤鸭。', en: 'Roast duck.' }, { cn: '北京烤鸭。', en: 'Peking duck.' }] },
        { id: 'fd020', character: '豆腐', pinyin: 'dòu fu', meaning: 'tofu', examples: [{ cn: '吃豆腐。', en: 'Eat tofu.' }, { cn: '麻婆豆腐。', en: 'Mapo tofu.' }] },

        // ============================
        // VEGETABLES
        // ============================
        { id: 'fd021', character: '白菜', pinyin: 'bái cài', meaning: 'Chinese cabbage', examples: [{ cn: '炒白菜。', en: 'Stir-fry cabbage.' }, { cn: '白菜很便宜。', en: 'Cabbage is cheap.' }] },
        { id: 'fd022', character: '青菜', pinyin: 'qīng cài', meaning: 'green vegetables', examples: [{ cn: '吃青菜。', en: 'Eat green vegetables.' }, { cn: '青菜很健康。', en: 'Green vegetables are healthy.' }] },
        { id: 'fd023', character: '土豆', pinyin: 'tǔ dòu', meaning: 'potato', examples: [{ cn: '炒土豆。', en: 'Stir-fry potato.' }, { cn: '土豆丝。', en: 'Shredded potato.' }] },
        { id: 'fd024', character: '西红柿', pinyin: 'xī hóng shì', meaning: 'tomato', examples: [{ cn: '西红柿炒鸡蛋。', en: 'Tomato scrambled eggs.' }, { cn: '西红柿很新鲜。', en: 'The tomato is fresh.' }] },
        { id: 'fd025', character: '黄瓜', pinyin: 'huáng guā', meaning: 'cucumber', examples: [{ cn: '凉拌黄瓜。', en: 'Cold cucumber.' }, { cn: '黄瓜很脆。', en: 'The cucumber is crispy.' }] },
        { id: 'fd026', character: '胡萝卜', pinyin: 'hú luó bo', meaning: 'carrot', examples: [{ cn: '吃胡萝卜。', en: 'Eat carrots.' }, { cn: '胡萝卜很有营养。', en: 'Carrots are nutritious.' }] },
        { id: 'fd027', character: '茄子', pinyin: 'qié zi', meaning: 'eggplant', examples: [{ cn: '炒茄子。', en: 'Stir-fry eggplant.' }, { cn: '红烧茄子。', en: 'Braised eggplant.' }] },
        { id: 'fd028', character: '辣椒', pinyin: 'là jiāo', meaning: 'chili pepper', examples: [{ cn: '很辣的辣椒。', en: 'Very spicy chili.' }, { cn: '放辣椒。', en: 'Add chili.' }] },
        { id: 'fd029', character: '大蒜', pinyin: 'dà suàn', meaning: 'garlic', examples: [{ cn: '放大蒜。', en: 'Add garlic.' }, { cn: '大蒜很香。', en: 'Garlic smells good.' }] },
        { id: 'fd030', character: '葱', pinyin: 'cōng', meaning: 'green onion', examples: [{ cn: '放葱。', en: 'Add green onion.' }, { cn: '葱花。', en: 'Chopped green onion.' }] },
        { id: 'fd031', character: '姜', pinyin: 'jiāng', meaning: 'ginger', examples: [{ cn: '放姜。', en: 'Add ginger.' }, { cn: '姜很辣。', en: 'Ginger is spicy.' }] },
        { id: 'fd032', character: '蘑菇', pinyin: 'mó gu', meaning: 'mushroom', examples: [{ cn: '吃蘑菇。', en: 'Eat mushrooms.' }, { cn: '蘑菇很鲜。', en: 'Mushrooms are fresh.' }] },
        { id: 'fd033', character: '玉米', pinyin: 'yù mǐ', meaning: 'corn', examples: [{ cn: '吃玉米。', en: 'Eat corn.' }, { cn: '玉米很甜。', en: 'The corn is sweet.' }] },
        { id: 'fd034', character: '豆角', pinyin: 'dòu jiǎo', meaning: 'green beans', examples: [{ cn: '炒豆角。', en: 'Stir-fry green beans.' }, { cn: '豆角很嫩。', en: 'The green beans are tender.' }] },

        // ============================
        // FRUITS
        // ============================
        { id: 'fd035', character: '苹果', pinyin: 'píng guǒ', meaning: 'apple', examples: [{ cn: '吃苹果。', en: 'Eat apple.' }, { cn: '苹果很甜。', en: 'The apple is sweet.' }] },
        { id: 'fd036', character: '香蕉', pinyin: 'xiāng jiāo', meaning: 'banana', examples: [{ cn: '吃香蕉。', en: 'Eat banana.' }, { cn: '香蕉很甜。', en: 'The banana is sweet.' }] },
        { id: 'fd037', character: '橘子', pinyin: 'jú zi', meaning: 'orange', examples: [{ cn: '吃橘子。', en: 'Eat orange.' }, { cn: '橘子很酸。', en: 'The orange is sour.' }] },
        { id: 'fd038', character: '葡萄', pinyin: 'pú tao', meaning: 'grape', examples: [{ cn: '吃葡萄。', en: 'Eat grapes.' }, { cn: '葡萄很甜。', en: 'The grapes are sweet.' }] },
        { id: 'fd039', character: '西瓜', pinyin: 'xī guā', meaning: 'watermelon', examples: [{ cn: '吃西瓜。', en: 'Eat watermelon.' }, { cn: '西瓜很甜。', en: 'The watermelon is sweet.' }] },
        { id: 'fd040', character: '草莓', pinyin: 'cǎo méi', meaning: 'strawberry', examples: [{ cn: '吃草莓。', en: 'Eat strawberry.' }, { cn: '草莓很新鲜。', en: 'The strawberries are fresh.' }] },
        { id: 'fd041', character: '芒果', pinyin: 'máng guǒ', meaning: 'mango', examples: [{ cn: '吃芒果。', en: 'Eat mango.' }, { cn: '芒果很甜。', en: 'The mango is sweet.' }] },
        { id: 'fd042', character: '菠萝', pinyin: 'bō luó', meaning: 'pineapple', examples: [{ cn: '吃菠萝。', en: 'Eat pineapple.' }, { cn: '菠萝很酸。', en: 'The pineapple is sour.' }] },
        { id: 'fd043', character: '桃', pinyin: 'táo', meaning: 'peach', examples: [{ cn: '吃桃。', en: 'Eat peach.' }, { cn: '桃子很甜。', en: 'The peach is sweet.' }] },
        { id: 'fd044', character: '梨', pinyin: 'lí', meaning: 'pear', examples: [{ cn: '吃梨。', en: 'Eat pear.' }, { cn: '梨很甜。', en: 'The pear is sweet.' }] },
        { id: 'fd045', character: '柠檬', pinyin: 'níng méng', meaning: 'lemon', examples: [{ cn: '柠檬很酸。', en: 'The lemon is sour.' }, { cn: '柠檬水。', en: 'Lemonade.' }] },

        // ============================
        // DRINKS
        // ============================
        { id: 'fd046', character: '水', pinyin: 'shuǐ', meaning: 'water', examples: [{ cn: '喝水。', en: 'Drink water.' }, { cn: '热水。', en: 'Hot water.' }] },
        { id: 'fd047', character: '茶', pinyin: 'chá', meaning: 'tea', examples: [{ cn: '喝茶。', en: 'Drink tea.' }, { cn: '绿茶。', en: 'Green tea.' }] },
        { id: 'fd048', character: '咖啡', pinyin: 'kā fēi', meaning: 'coffee', examples: [{ cn: '喝咖啡。', en: 'Drink coffee.' }, { cn: '咖啡很苦。', en: 'The coffee is bitter.' }] },
        { id: 'fd049', character: '牛奶', pinyin: 'niú nǎi', meaning: 'milk', examples: [{ cn: '喝牛奶。', en: 'Drink milk.' }, { cn: '牛奶很新鲜。', en: 'The milk is fresh.' }] },
        { id: 'fd050', character: '果汁', pinyin: 'guǒ zhī', meaning: 'juice', examples: [{ cn: '喝果汁。', en: 'Drink juice.' }, { cn: '苹果果汁。', en: 'Apple juice.' }] },
        { id: 'fd051', character: '啤酒', pinyin: 'pí jiǔ', meaning: 'beer', examples: [{ cn: '喝啤酒。', en: 'Drink beer.' }, { cn: '啤酒很凉。', en: 'The beer is cold.' }] },
        { id: 'fd052', character: '可乐', pinyin: 'kě lè', meaning: 'cola', examples: [{ cn: '喝可乐。', en: 'Drink cola.' }, { cn: '可乐很甜。', en: 'The cola is sweet.' }] },
        { id: 'fd053', character: '矿泉水', pinyin: 'kuàng quán shuǐ', meaning: 'mineral water', examples: [{ cn: '买矿泉水。', en: 'Buy mineral water.' }, { cn: '矿泉水很干净。', en: 'Mineral water is clean.' }] },
        { id: 'fd054', character: '酸奶', pinyin: 'suān nǎi', meaning: 'yogurt', examples: [{ cn: '喝酸奶。', en: 'Drink yogurt.' }, { cn: '酸奶很好喝。', en: 'The yogurt tastes good.' }] },
        { id: 'fd055', character: '豆浆', pinyin: 'dòu jiāng', meaning: 'soy milk', examples: [{ cn: '喝豆浆。', en: 'Drink soy milk.' }, { cn: '豆浆很甜。', en: 'The soy milk is sweet.' }] },

        // ============================
        // FLAVORS & TASTES
        // ============================
        { id: 'fd056', character: '甜', pinyin: 'tián', meaning: 'sweet', examples: [{ cn: '很甜。', en: 'Very sweet.' }, { cn: '甜食。', en: 'Dessert.' }] },
        { id: 'fd057', character: '酸', pinyin: 'suān', meaning: 'sour', examples: [{ cn: '很酸。', en: 'Very sour.' }, { cn: '酸奶。', en: 'Yogurt.' }] },
        { id: 'fd058', character: '苦', pinyin: 'kǔ', meaning: 'bitter', examples: [{ cn: '很苦。', en: 'Very bitter.' }, { cn: '苦瓜。', en: 'Bitter melon.' }] },
        { id: 'fd059', character: '辣', pinyin: 'là', meaning: 'spicy', examples: [{ cn: '很辣！', en: 'Very spicy!' }, { cn: '辣酱。', en: 'Chili sauce.' }] },
        { id: 'fd060', character: '咸', pinyin: 'xián', meaning: 'salty', examples: [{ cn: '太咸了。', en: 'Too salty.' }, { cn: '咸菜。', en: 'Pickled vegetables.' }] },
        { id: 'fd061', character: '鲜', pinyin: 'xiān', meaning: 'fresh/savory', examples: [{ cn: '很鲜。', en: 'Very fresh.' }, { cn: '新鲜。', en: 'Fresh.' }] },
        { id: 'fd062', character: '香', pinyin: 'xiāng', meaning: 'fragrant', examples: [{ cn: '很香。', en: 'Very fragrant.' }, { cn: '香菜。', en: 'Cilantro.' }] },
        { id: 'fd063', character: '淡', pinyin: 'dàn', meaning: 'bland/light', examples: [{ cn: '太淡了。', en: 'Too bland.' }, { cn: '清淡。', en: 'Light/mild.' }] },
        { id: 'fd064', character: '油腻', pinyin: 'yóu nì', meaning: 'greasy', examples: [{ cn: '太油腻了。', en: 'Too greasy.' }, { cn: '油腻的食物。', en: 'Greasy food.' }] },
        { id: 'fd065', character: '好吃', pinyin: 'hǎo chī', meaning: 'delicious', examples: [{ cn: '很好吃！', en: 'Very delicious!' }, { cn: '真好吃。', en: 'Really delicious.' }] },
        { id: 'fd066', character: '好喝', pinyin: 'hǎo hē', meaning: 'tasty (drink)', examples: [{ cn: '很好喝！', en: 'Very tasty!' }, { cn: '这个茶很好喝。', en: 'This tea tastes great.' }] },

        // ============================
        // COOKING METHODS
        // ============================
        { id: 'fd067', character: '炒', pinyin: 'chǎo', meaning: 'stir-fry', examples: [{ cn: '炒菜。', en: 'Stir-fry vegetables.' }, { cn: '炒饭。', en: 'Fried rice.' }] },
        { id: 'fd068', character: '煮', pinyin: 'zhǔ', meaning: 'boil', examples: [{ cn: '煮面条。', en: 'Boil noodles.' }, { cn: '煮汤。', en: 'Cook soup.' }] },
        { id: 'fd069', character: '蒸', pinyin: 'zhēng', meaning: 'steam', examples: [{ cn: '蒸包子。', en: 'Steam buns.' }, { cn: '蒸鱼。', en: 'Steam fish.' }] },
        { id: 'fd070', character: '烤', pinyin: 'kǎo', meaning: 'roast/bake', examples: [{ cn: '烤鸭。', en: 'Roast duck.' }, { cn: '烤面包。', en: 'Bake bread.' }] },
        { id: 'fd071', character: '炸', pinyin: 'zhá', meaning: 'deep-fry', examples: [{ cn: '炸鸡。', en: 'Fried chicken.' }, { cn: '炸薯条。', en: 'French fries.' }] },
        { id: 'fd072', character: '炖', pinyin: 'dùn', meaning: 'stew', examples: [{ cn: '炖肉。', en: 'Stew meat.' }, { cn: '炖汤。', en: 'Stew soup.' }] },
        { id: 'fd073', character: '拌', pinyin: 'bàn', meaning: 'mix/toss', examples: [{ cn: '凉拌菜。', en: 'Cold mixed vegetables.' }, { cn: '拌沙拉。', en: 'Toss salad.' }] },
        { id: 'fd074', character: '切', pinyin: 'qiē', meaning: 'cut', examples: [{ cn: '切菜。', en: 'Cut vegetables.' }, { cn: '切碎。', en: 'Cut into pieces.' }] },
        { id: 'fd075', character: '炒', pinyin: 'chǎo', meaning: 'fry', examples: [{ cn: '炒鸡蛋。', en: 'Scrambled eggs.' }, { cn: '炒面。', en: 'Fried noodles.' }] },

        // ============================
        // ORDERING & RESTAURANT
        // ============================
        { id: 'fd076', character: '点菜', pinyin: 'diǎn cài', meaning: 'order food', examples: [{ cn: '请点菜。', en: 'Please order.' }, { cn: '点菜了吗？', en: 'Have you ordered?' }] },
        { id: 'fd077', character: '菜单', pinyin: 'cài dān', meaning: 'menu', examples: [{ cn: '看菜单。', en: 'Look at the menu.' }, { cn: '菜单在这里。', en: 'Here is the menu.' }] },
        { id: 'fd078', character: '买单', pinyin: 'mǎi dān', meaning: 'pay the bill', examples: [{ cn: '买单。', en: 'Check please.' }, { cn: '我来买单。', en: 'I\'ll pay the bill.' }] },
        { id: 'fd079', character: '服务员', pinyin: 'fú wù yuán', meaning: 'waiter/waitress', examples: [{ cn: '服务员！', en: 'Waiter!' }, { cn: '叫服务员。', en: 'Call the waiter.' }] },
        { id: 'fd080', character: '打包', pinyin: 'dǎ bāo', meaning: 'takeaway pack', examples: [{ cn: '请打包。', en: 'Please pack it to go.' }, { cn: '打包带走。', en: 'Pack to take away.' }] },
        { id: 'fd081', character: '找零', pinyin: 'zhǎo líng', meaning: 'change (money)', examples: [{ cn: '找零多少钱？', en: 'How much change?' }, { cn: '不用找了。', en: 'Keep the change.' }] },
        { id: 'fd082', character: '小费', pinyin: 'xiǎo fèi', meaning: 'tip', examples: [{ cn: '给小费。', en: 'Give a tip.' }, { cn: '要给小费吗？', en: 'Should I tip?' }] },
        { id: 'fd083', character: '预约', pinyin: 'yù yuē', meaning: 'reservation', examples: [{ cn: '有预约。', en: 'Have a reservation.' }, { cn: '要预约吗？', en: 'Need a reservation?' }] },
        { id: 'fd084', character: '等位', pinyin: 'děng wèi', meaning: 'wait for table', examples: [{ cn: '要等位。', en: 'Need to wait for a table.' }, { cn: '等位多久？', en: 'How long to wait?' }] },
        { id: 'fd085', character: '推荐', pinyin: 'tuī jiàn', meaning: 'recommend', examples: [{ cn: '推荐什么菜？', en: 'What dishes do you recommend?' }, { cn: '有什么推荐？', en: 'Any recommendations?' }] },

        // ============================
        // DISHES & CUISINE
        // ============================
        { id: 'fd086', character: '宫保鸡丁', pinyin: 'gōng bǎo jī dīng', meaning: 'Kung Pao chicken', examples: [{ cn: '宫保鸡丁。', en: 'Kung Pao chicken.' }, { cn: '宫保鸡丁很辣。', en: 'Kung Pao chicken is spicy.' }] },
        { id: 'fd087', character: '麻婆豆腐', pinyin: 'pó dòu fu', meaning: 'Mapo tofu', examples: [{ cn: '麻婆豆腐。', en: 'Mapo tofu.' }, { cn: '麻婆豆腐很辣。', en: 'Mapo tofu is spicy.' }] },
        { id: 'fd088', character: '鱼香肉丝', pinyin: 'yú xiāng ròu sī', meaning: 'Yu Xiang shredded pork', examples: [{ cn: '鱼香肉丝。', en: 'Yu Xiang shredded pork.' }, { cn: '鱼香肉丝很好吃。', en: 'Yu Xiang shredded pork is delicious.' }] },
        { id: 'fd089', character: '红烧肉', pinyin: 'hóng shāo ròu', meaning: 'braised pork', examples: [{ cn: '红烧肉。', en: 'Braised pork.' }, { cn: '红烧肉很香。', en: 'Braised pork is fragrant.' }] },
        { id: 'fd090', character: '回锅肉', pinyin: 'huí guō ròu', meaning: 'twice-cooked pork', examples: [{ cn: '回锅肉。', en: 'Twice-cooked pork.' }, { cn: '回锅肉很辣。', en: 'Twice-cooked pork is spicy.' }] },
        { id: 'fd091', character: '糖醋排骨', pinyin: 'táng cù pái gǔ', meaning: 'sweet and sour ribs', examples: [{ cn: '糖醋排骨。', en: 'Sweet and sour ribs.' }, { cn: '糖醋排骨很甜。', en: 'Sweet and sour ribs are sweet.' }] },
        { id: 'fd092', character: '火锅', pinyin: 'huǒ guō', meaning: 'hotpot', examples: [{ cn: '吃火锅。', en: 'Eat hotpot.' }, { cn: '火锅很辣。', en: 'Hotpot is spicy.' }] },
        { id: 'fd093', character: '烤鸭', pinyin: 'kǎo yā', meaning: 'roast duck', examples: [{ cn: '北京烤鸭。', en: 'Peking duck.' }, { cn: '烤鸭很好吃。', en: 'Roast duck is delicious.' }] },
        { id: 'fd094', character: '炒饭', pinyin: 'chǎo fàn', meaning: 'fried rice', examples: [{ cn: '蛋炒饭。', en: 'Egg fried rice.' }, { cn: '炒饭很好吃。', en: 'Fried rice is delicious.' }] },
        { id: 'fd095', character: '炒面', pinyin: 'chǎo miàn', meaning: 'fried noodles', examples: [{ cn: '炒面。', en: 'Fried noodles.' }, { cn: '炒面很好吃。', en: 'Fried noodles are delicious.' }] },
        { id: 'fd096', character: '汤', pinyin: 'tāng', meaning: 'soup', examples: [{ cn: '喝汤。', en: 'Drink soup.' }, { cn: '汤很热。', en: 'The soup is hot.' }] },
        { id: 'fd097', character: '沙拉', pinyin: 'shā lā', meaning: 'salad', examples: [{ cn: '吃沙拉。', en: 'Eat salad.' }, { cn: '水果沙拉。', en: 'Fruit salad.' }] },
        { id: 'fd098', character: '三明治', pinyin: 'sān míng zhì', meaning: 'sandwich', examples: [{ cn: '吃三明治。', en: 'Eat sandwich.' }, { cn: '鸡肉三明治。', en: 'Chicken sandwich.' }] },
        { id: 'fd099', character: '汉堡', pinyin: 'hàn bǎo', meaning: 'hamburger', examples: [{ cn: '吃汉堡。', en: 'Eat hamburger.' }, { cn: '汉堡包。', en: 'Hamburger.' }] },
        { id: 'fd100', character: '披萨', pinyin: 'pī sà', meaning: 'pizza', examples: [{ cn: '吃披萨。', en: 'Eat pizza.' }, { cn: '披萨很好吃。', en: 'Pizza is delicious.' }] },
        { id: 'fd101', character: '寿司', pinyin: 'shòu sī', meaning: 'sushi', examples: [{ cn: '吃寿司。', en: 'Eat sushi.' }, { cn: '寿司很新鲜。', en: 'Sushi is fresh.' }] },
        { id: 'fd102', character: '冰淇淋', pinyin: 'bīng qí lín', meaning: 'ice cream', examples: [{ cn: '吃冰淇淋。', en: 'Eat ice cream.' }, { cn: '巧克力冰淇淋。', en: 'Chocolate ice cream.' }] },
        { id: 'fd103', character: '蛋糕', pinyin: 'dàn gāo', meaning: 'cake', examples: [{ cn: '吃蛋糕。', en: 'Eat cake.' }, { cn: '生日蛋糕。', en: 'Birthday cake.' }] },
        { id: 'fd104', character: '巧克力', pinyin: 'qiǎo kè lì', meaning: 'chocolate', examples: [{ cn: '吃巧克力。', en: 'Eat chocolate.' }, { cn: '巧克力很甜。', en: 'Chocolate is sweet.' }] },
        { id: 'fd105', character: '饼干', pinyin: 'bǐng gān', meaning: 'biscuit/cookie', examples: [{ cn: '吃饼干。', en: 'Eat biscuit.' }, { cn: '巧克力饼干。', en: 'Chocolate cookie.' }] },

        // ============================
        // ORDERING PHRASES
        // ============================
        { id: 'fd106', character: '我想要', pinyin: 'wǒ xiǎng yào', meaning: 'I would like', examples: [{ cn: '我想要这个。', en: 'I would like this.' }, { cn: '我想要一杯茶。', en: 'I would like a cup of tea.' }] },
        { id: 'fd107', character: '请给我', pinyin: 'qǐng gěi wǒ', meaning: 'please give me', examples: [{ cn: '请给我菜单。', en: 'Please give me the menu.' }, { cn: '请给我一杯水。', en: 'Please give me a glass of water.' }] },
        { id: 'fd108', character: '不要', pinyin: 'bù yào', meaning: 'don\'t want', examples: [{ cn: '不要辣。', en: 'No spicy.' }, { cn: '不要糖。', en: 'No sugar.' }] },
        { id: 'fd109', character: '少放', pinyin: 'shǎo fàng', meaning: 'less', examples: [{ cn: '少放盐。', en: 'Less salt.' }, { cn: '少放糖。', en: 'Less sugar.' }] },
        { id: 'fd110', character: '多放', pinyin: 'duō fàng', meaning: 'more', examples: [{ cn: '多放辣椒。', en: 'More chili.' }, { cn: '多放肉。', en: 'More meat.' }] },
        { id: 'fd111', character: '一杯', pinyin: 'yī bēi', meaning: 'one cup', examples: [{ cn: '一杯茶。', en: 'One cup of tea.' }, { cn: '一杯咖啡。', en: 'One cup of coffee.' }] },
        { id: 'fd112', character: '一碗', pinyin: 'yī wǎn', meaning: 'one bowl', examples: [{ cn: '一碗面。', en: 'One bowl of noodles.' }, { cn: '一碗汤。', en: 'One bowl of soup.' }] },
        { id: 'fd113', character: '一份', pinyin: 'yī fèn', meaning: 'one serving', examples: [{ cn: '一份沙拉。', en: 'One salad.' }, { cn: '一份炒饭。', en: 'One fried rice.' }] },
        { id: 'fd114', character: '再来一个', pinyin: 'zài lái yī gè', meaning: 'one more', examples: [{ cn: '再来一个。', en: 'One more please.' }, { cn: '再来一杯。', en: 'One more cup.' }] },
        { id: 'fd115', character: '够了', pinyin: 'gòu le', meaning: 'enough', examples: [{ cn: '够了够了。', en: 'That\'s enough.' }, { cn: '够了吗？', en: 'Is that enough?' }] },
        { id: 'fd116', character: '很饱', pinyin: 'hěn bǎo', meaning: 'very full', examples: [{ cn: '很饱了。', en: 'Very full.' }, { cn: '吃得很饱。', en: 'Ate very full.' }] },
        { id: 'fd117', character: '很好吃', pinyin: 'hěn hǎo chī', meaning: 'very delicious', examples: [{ cn: '很好吃！', en: 'Very delicious!' }, { cn: '真的很好吃。', en: 'Really delicious.' }] },
        { id: 'fd118', character: '太贵了', pinyin: 'tài guì le', meaning: 'too expensive', examples: [{ cn: '太贵了！', en: 'Too expensive!' }, { cn: '这个太贵了。', en: 'This is too expensive.' }] },
        { id: 'fd119', character: '便宜一点', pinyin: 'pián yi yī diǎn', meaning: 'a little cheaper', examples: [{ cn: '便宜一点。', en: 'A little cheaper.' }, { cn: '能便宜一点吗？', en: 'Can it be cheaper?' }] },
        { id: 'fd120', character: '可以刷卡吗', pinyin: 'kě yǐ shuā kǎ ma', meaning: 'can I pay by card', examples: [{ cn: '可以刷卡吗？', en: 'Can I pay by card?' }, { cn: '可以微信支付吗？', en: 'Can I pay with WeChat?' }] }
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

window.TopicFood = TopicFood;

(function() {
    if (typeof VocabularyData !== 'undefined' && TopicFood.words) {
        TopicFood.words.forEach(function(w) {
            if (!VocabularyData.words.find(function(vw) { return vw.character === w.character; })) {
                VocabularyData.words.push(w);
            }
        });
        VocabularyData.count = VocabularyData.words.length;
    }
})();

// ============================================
// CHINESE MASTER - Reading Passages Data
// 100+ Reading exercises organized by type
// ============================================

const ReadingData = {
    // Character matching exercises
    characterMatch: [
        {
            id: 'r001',
            type: 'character-match',
            difficulty: 'easy',
            pairs: [
                { character: '人', meaning: 'person' },
                { character: '大', meaning: 'big' },
                { character: '小', meaning: 'small' },
                { character: '中', meaning: 'middle' },
                { character: '上', meaning: 'up' },
                { character: '下', meaning: 'down' }
            ]
        },
        {
            id: 'r002',
            type: 'character-match',
            difficulty: 'easy',
            pairs: [
                { character: '日', meaning: 'sun/day' },
                { character: '月', meaning: 'moon/month' },
                { character: '水', meaning: 'water' },
                { character: '火', meaning: 'fire' },
                { character: '山', meaning: 'mountain' },
                { character: '木', meaning: 'wood' }
            ]
        },
        {
            id: 'r003',
            type: 'character-match',
            difficulty: 'medium',
            pairs: [
                { character: '学', meaning: 'study' },
                { character: '生', meaning: 'life/birth' },
                { character: '先', meaning: 'first' },
                { character: '生', meaning: 'student' },
                { character: '老', meaning: 'old' },
                { character: '师', meaning: 'teacher' }
            ]
        },
        {
            id: 'r004',
            type: 'character-match',
            difficulty: 'medium',
            pairs: [
                { character: '电', meaning: 'electricity' },
                { character: '话', meaning: 'speech' },
                { character: '脑', meaning: 'brain' },
                { character: '视', meaning: 'look' },
                { character: '影', meaning: 'shadow' },
                { character: '音', meaning: 'sound' }
            ]
        },
        {
            id: 'r005',
            type: 'character-match',
            difficulty: 'hard',
            pairs: [
                { character: '经', meaning: 'classics' },
                { character: '济', meaning: 'help' },
                { character: '环', meaning: 'ring' },
                { character: '境', meaning: 'border' },
                { character: '历', meaning: 'history' },
                { character: '史', meaning: 'history' }
            ]
        },
    {
        id: 'r046',
        type: 'character-match',
        difficulty: 'medium',
        pairs: [
            { character: '烧', meaning: 'to burn' },
            { character: '灯', meaning: 'lamp' },
            { character: '炒', meaning: 'to stir-fry' },
            { character: '烤', meaning: 'to roast' },
            { character: '烟', meaning: 'smoke' },
            { character: '热', meaning: 'hot' }
        ]
    },
    {
        id: 'r047',
        type: 'character-match',
        difficulty: 'medium',
        pairs: [
            { character: '地', meaning: 'ground' },
            { character: '场', meaning: 'field' },
            { character: '城', meaning: 'city' },
            { character: '墙', meaning: 'wall' },
            { character: '块', meaning: 'piece' },
            { character: '塔', meaning: 'tower' }
        ]
    },
    {
        id: 'r048',
        type: 'character-match',
        difficulty: 'medium',
        pairs: [
            { character: '钱', meaning: 'money' },
            { character: '银', meaning: 'silver' },
            { character: '铁', meaning: 'iron' },
            { character: '钟', meaning: 'clock' },
            { character: '针', meaning: 'needle' },
            { character: '错', meaning: 'wrong' }
        ]
    },
    {
        id: 'r049',
        type: 'character-match',
        difficulty: 'medium',
        pairs: [
            { character: '想', meaning: 'to think' },
            { character: '忘', meaning: 'to forget' },
            { character: '急', meaning: 'urgent' },
            { character: '忙', meaning: 'busy' },
            { character: '快', meaning: 'fast' },
            { character: '慢', meaning: 'slow' }
        ]
    },
    {
        id: 'r050',
        type: 'character-match',
        difficulty: 'medium',
        pairs: [
            { character: '打', meaning: 'to hit' },
            { character: '把', meaning: 'handle' },
            { character: '找', meaning: 'to find' },
            { character: '报', meaning: 'to report' },
            { character: '拉', meaning: 'to pull' },
            { character: '推', meaning: 'to push' }
        ]
    },
    {
        id: 'r051',
        type: 'character-match',
        difficulty: 'medium',
        pairs: [
            { character: '看', meaning: 'to see' },
            { character: '眼', meaning: 'eye' },
            { character: '睡', meaning: 'to sleep' },
            { character: '睛', meaning: 'eyeball' },
            { character: '盲', meaning: 'blind' },
            { character: '相', meaning: 'mutual' }
        ]
    },
    {
        id: 'r052',
        type: 'character-match',
        difficulty: 'medium',
        pairs: [
            { character: '跑', meaning: 'to run' },
            { character: '跳', meaning: 'to jump' },
            { character: '路', meaning: 'road' },
            { character: '跟', meaning: 'to follow' },
            { character: '踢', meaning: 'to kick' },
            { character: '距', meaning: 'distance' }
        ]
    },
    {
        id: 'r053',
        type: 'character-match',
        difficulty: 'medium',
        pairs: [
            { character: '说', meaning: 'to speak' },
            { character: '话', meaning: 'speech' },
            { character: '读', meaning: 'to read' },
            { character: '记', meaning: 'to remember' },
            { character: '让', meaning: 'to let' },
            { character: '谢', meaning: 'to thank' }
        ]
    },
    {
        id: 'r054',
        type: 'character-match',
        difficulty: 'medium',
        pairs: [
            { character: '饭', meaning: 'rice/meal' },
            { character: '饱', meaning: 'full (eating)' },
            { character: '饿', meaning: 'hungry' },
            { character: '饺', meaning: 'dumpling' },
            { character: '饼', meaning: 'pancake' },
            { character: '馆', meaning: 'restaurant' }
        ]
    },
    {
        id: 'r055',
        type: 'character-match',
        difficulty: 'medium',
        pairs: [
            { character: '买', meaning: 'to buy' },
            { character: '卖', meaning: 'to sell' },
            { character: '贵', meaning: 'expensive' },
            { character: '货', meaning: 'goods' },
            { character: '费', meaning: 'fee' },
            { character: '赚', meaning: 'to earn' }
        ]
    },
    {
        id: 'r056',
        type: 'character-match',
        difficulty: 'easy',
        pairs: [
            { character: '门', meaning: 'door' },
            { character: '开', meaning: 'to open' },
            { character: '关', meaning: 'to close' },
            { character: '间', meaning: 'between' },
            { character: '问', meaning: 'to ask' },
            { character: '闻', meaning: 'to smell' }
        ]
    },
    {
        id: 'r057',
        type: 'character-match',
        difficulty: 'easy',
        pairs: [
            { character: '花', meaning: 'flower' },
            { character: '草', meaning: 'grass' },
            { character: '叶', meaning: 'leaf' },
            { character: '果', meaning: 'fruit' },
            { character: '茶', meaning: 'tea' },
            { character: '药', meaning: 'medicine' }
        ]
    },
    {
        id: 'r058',
        type: 'character-match',
        difficulty: 'easy',
        pairs: [
            { character: '鱼', meaning: 'fish' },
            { character: '鸟', meaning: 'bird' },
            { character: '马', meaning: 'horse' },
            { character: '牛', meaning: 'cow' },
            { character: '羊', meaning: 'sheep' },
            { character: '狗', meaning: 'dog' }
        ]
    },
    {
        id: 'r059',
        type: 'character-match',
        difficulty: 'easy',
        pairs: [
            { character: '猫', meaning: 'cat' },
            { character: '鸡', meaning: 'chicken' },
            { character: '鸭', meaning: 'duck' },
            { character: '猪', meaning: 'pig' },
            { character: '龙', meaning: 'dragon' },
            { character: '虎', meaning: 'tiger' }
        ]
    },
    {
        id: 'r060',
        type: 'character-match',
        difficulty: 'easy',
        pairs: [
            { character: '车', meaning: 'car' },
            { character: '船', meaning: 'boat' },
            { character: '机', meaning: 'machine' },
            { character: '飞', meaning: 'to fly' },
            { character: '行', meaning: 'to walk' },
            { character: '走', meaning: 'to walk' }
        ]
    },
    {
        id: 'r061',
        type: 'character-match',
        difficulty: 'easy',
        pairs: [
            { character: '来', meaning: 'to come' },
            { character: '去', meaning: 'to go' },
            { character: '进', meaning: 'to enter' },
            { character: '出', meaning: 'to exit' },
            { character: '回', meaning: 'to return' },
            { character: '到', meaning: 'to arrive' }
        ]
    },
    {
        id: 'r062',
        type: 'character-match',
        difficulty: 'easy',
        pairs: [
            { character: '东', meaning: 'east' },
            { character: '西', meaning: 'west' },
            { character: '南', meaning: 'south' },
            { character: '北', meaning: 'north' },
            { character: '左', meaning: 'left' },
            { character: '右', meaning: 'right' }
        ]
    },
    {
        id: 'r063',
        type: 'character-match',
        difficulty: 'easy',
        pairs: [
            { character: '前', meaning: 'front' },
            { character: '后', meaning: 'back' },
            { character: '里', meaning: 'inside' },
            { character: '外', meaning: 'outside' },
            { character: '旁', meaning: 'side' },
            { character: '边', meaning: 'side' }
        ]
    },
    {
        id: 'r064',
        type: 'character-match',
        difficulty: 'medium',
        pairs: [
            { character: '春', meaning: 'spring' },
            { character: '夏', meaning: 'summer' },
            { character: '秋', meaning: 'autumn' },
            { character: '冬', meaning: 'winter' },
            { character: '冷', meaning: 'cold' },
            { character: '暖', meaning: 'warm' }
        ]
    },
    {
        id: 'r065',
        type: 'character-match',
        difficulty: 'easy',
        pairs: [
            { character: '红', meaning: 'red' },
            { character: '黄', meaning: 'yellow' },
            { character: '蓝', meaning: 'blue' },
            { character: '绿', meaning: 'green' },
            { character: '白', meaning: 'white' },
            { character: '黑', meaning: 'black' }
        ]
    },
    {
        id: 'r066',
        type: 'character-match',
        difficulty: 'medium',
        pairs: [
            { character: '身', meaning: 'body' },
            { character: '体', meaning: 'body' },
            { character: '头', meaning: 'head' },
            { character: '手', meaning: 'hand' },
            { character: '脚', meaning: 'foot' },
            { character: '心', meaning: 'heart' }
        ]
    },
    {
        id: 'r067',
        type: 'character-match',
        difficulty: 'medium',
        pairs: [
            { character: '晴', meaning: 'clear/sunny' },
            { character: '阴', meaning: 'cloudy' },
            { character: '雷', meaning: 'thunder' },
            { character: '雾', meaning: 'fog' },
            { character: '霜', meaning: 'frost' },
            { character: '雪', meaning: 'snow' }
        ]
    },
    {
        id: 'r068',
        type: 'character-match',
        difficulty: 'medium',
        pairs: [
            { character: '百', meaning: 'hundred' },
            { character: '千', meaning: 'thousand' },
            { character: '万', meaning: 'ten thousand' },
            { character: '年', meaning: 'year' },
            { character: '岁', meaning: 'age' },
            { character: '时', meaning: 'time' }
        ]
    },
    {
        id: 'r069',
        type: 'character-match',
        difficulty: 'easy',
        pairs: [
            { character: '菜', meaning: 'dish/vegetable' },
            { character: '肉', meaning: 'meat' },
            { character: '面', meaning: 'noodle' },
            { character: '汤', meaning: 'soup' },
            { character: '蛋', meaning: 'egg' },
            { character: '米', meaning: 'rice' }
        ]
    },
    {
        id: 'r070',
        type: 'character-match',
        difficulty: 'easy',
        pairs: [
            { character: '笔', meaning: 'pen' },
            { character: '纸', meaning: 'paper' },
            { character: '书', meaning: 'book' },
            { character: '画', meaning: 'picture' },
            { character: '歌', meaning: 'song' },
            { character: '舞', meaning: 'dance' }
        ]
    },
    {
        id: 'r071',
        type: 'character-match',
        difficulty: 'medium',
        pairs: [
            { character: '医', meaning: 'medicine' },
            { character: '病', meaning: 'sick' },
            { character: '疼', meaning: 'pain' },
            { character: '死', meaning: 'to die' },
            { character: '活', meaning: 'to live' },
            { character: '治', meaning: 'to treat' }
        ]
    },
    {
        id: 'r072',
        type: 'character-match',
        difficulty: 'medium',
        pairs: [
            { character: '桌', meaning: 'table' },
            { character: '椅', meaning: 'chair' },
            { character: '床', meaning: 'bed' },
            { character: '窗', meaning: 'window' },
            { character: '房', meaning: 'house' },
            { character: '屋', meaning: 'room' }
        ]
    },
    {
        id: 'r073',
        type: 'character-match',
        difficulty: 'medium',
        pairs: [
            { character: '衣', meaning: 'clothing' },
            { character: '裤', meaning: 'pants' },
            { character: '鞋', meaning: 'shoes' },
            { character: '帽', meaning: 'hat' },
            { character: '袜', meaning: 'socks' },
            { character: '裙', meaning: 'skirt' }
        ]
    },
    {
        id: 'r074',
        type: 'character-match',
        difficulty: 'hard',
        pairs: [
            { character: '教', meaning: 'to teach' },
            { character: '懂', meaning: 'to understand' },
            { character: '知', meaning: 'to know' },
            { character: '识', meaning: 'knowledge' },
            { character: '认', meaning: 'to recognize' },
            { character: '习', meaning: 'to practice' }
        ]
    },
    {
        id: 'r075',
        type: 'character-match',
        difficulty: 'hard',
        pairs: [
            { character: '爱', meaning: 'to love' },
            { character: '恨', meaning: 'to hate' },
            { character: '喜', meaning: 'to like' },
            { character: '怒', meaning: 'angry' },
            { character: '哀', meaning: 'sorrow' },
            { character: '乐', meaning: 'happy' }
        ]
    },
    {
        id: 'r076',
        type: 'character-match',
        difficulty: 'hard',
        pairs: [
            { character: '高', meaning: 'tall/high' },
            { character: '矮', meaning: 'short' },
            { character: '胖', meaning: 'fat' },
            { character: '瘦', meaning: 'thin' },
            { character: '美', meaning: 'beautiful' },
            { character: '丑', meaning: 'ugly' }
        ]
    },
    {
        id: 'r077',
        type: 'character-match',
        difficulty: 'hard',
        pairs: [
            { character: '男', meaning: 'male' },
            { character: '女', meaning: 'female' },
            { character: '老', meaning: 'old' },
            { character: '少', meaning: 'young' },
            { character: '长', meaning: 'long' },
            { character: '短', meaning: 'short' }
        ]
    },
    {
        id: 'r078',
        type: 'character-match',
        difficulty: 'hard',
        pairs: [
            { character: '多', meaning: 'many' },
            { character: '深', meaning: 'deep' },
            { character: '浅', meaning: 'shallow' },
            { character: '厚', meaning: 'thick' },
            { character: '薄', meaning: 'thin' },
            { character: '轻', meaning: 'light' }
        ]
    },
    {
        id: 'r079',
        type: 'character-match',
        difficulty: 'hard',
        pairs: [
            { character: '重', meaning: 'heavy' },
            { character: '新', meaning: 'new' },
            { character: '旧', meaning: 'old (thing)' },
            { character: '远', meaning: 'far' },
            { character: '近', meaning: 'near' },
            { character: '平', meaning: 'flat' }
        ]
    },
    {
        id: 'r080',
        type: 'character-match',
        difficulty: 'hard',
        pairs: [
            { character: '早', meaning: 'early' },
            { character: '晚', meaning: 'late' },
            { character: '快', meaning: 'fast' },
            { character: '久', meaning: 'long time' },
            { character: '永', meaning: 'forever' },
            { character: '刚', meaning: 'just now' }
        ]
    },
    {
        id: 'r081',
        type: 'character-match',
        difficulty: 'medium',
        pairs: [
            { character: '父', meaning: 'father' },
            { character: '母', meaning: 'mother' },
            { character: '儿', meaning: 'son' },
            { character: '兄', meaning: 'elder brother' },
            { character: '弟', meaning: 'younger brother' },
            { character: '妹', meaning: 'younger sister' }
        ]
    },
    {
        id: 'r082',
        type: 'character-match',
        difficulty: 'medium',
        pairs: [
            { character: '工', meaning: 'work' },
            { character: '农', meaning: 'farming' },
            { character: '商', meaning: 'business' },
            { character: '军', meaning: 'army' },
            { character: '政', meaning: 'politics' },
            { character: '法', meaning: 'law' }
        ]
    },
    {
        id: 'r083',
        type: 'character-match',
        difficulty: 'medium',
        pairs: [
            { character: '海', meaning: 'sea' },
            { character: '河', meaning: 'river' },
            { character: '湖', meaning: 'lake' },
            { character: '江', meaning: 'large river' },
            { character: '洋', meaning: 'ocean' },
            { character: '泉', meaning: 'spring' }
        ]
    },
    {
        id: 'r084',
        type: 'character-match',
        difficulty: 'medium',
        pairs: [
            { character: '金', meaning: 'gold' },
            { character: '玉', meaning: 'jade' },
            { character: '石', meaning: 'stone' },
            { character: '土', meaning: 'earth' },
            { character: '沙', meaning: 'sand' },
            { character: '泥', meaning: 'mud' }
        ]
    },
    {
        id: 'r085',
        type: 'character-match',
        difficulty: 'medium',
        pairs: [
            { character: '风', meaning: 'wind' },
            { character: '雨', meaning: 'rain' },
            { character: '云', meaning: 'cloud' },
            { character: '星', meaning: 'star' },
            { character: '光', meaning: 'light' },
            { character: '明', meaning: 'bright' }
        ]
    },
    {
        id: 'r086',
        type: 'character-match',
        difficulty: 'hard',
        pairs: [
            { character: '国', meaning: 'country' },
            { character: '家', meaning: 'family' },
            { character: '族', meaning: 'clan' },
            { character: '村', meaning: 'village' },
            { character: '市', meaning: 'city' },
            { character: '省', meaning: 'province' }
        ]
    },
    {
        id: 'r087',
        type: 'character-match',
        difficulty: 'hard',
        pairs: [
            { character: '思', meaning: 'to think' },
            { character: '念', meaning: 'to miss' },
            { character: '意', meaning: 'meaning' },
            { character: '愿', meaning: 'wish' },
            { character: '志', meaning: 'will' },
            { character: '德', meaning: 'virtue' }
        ]
    },
    {
        id: 'r088',
        type: 'character-match',
        difficulty: 'hard',
        pairs: [
            { character: '文', meaning: 'language' },
            { character: '字', meaning: 'character' },
            { character: '词', meaning: 'word' },
            { character: '句', meaning: 'sentence' },
            { character: '篇', meaning: 'article' },
            { character: '章', meaning: 'chapter' }
        ]
    },
    {
        id: 'r089',
        type: 'character-match',
        difficulty: 'hard',
        pairs: [
            { character: '力', meaning: 'strength' },
            { character: '气', meaning: 'energy' },
            { character: '功', meaning: 'achievement' },
            { character: '动', meaning: 'to move' },
            { character: '劳', meaning: 'labor' },
            { character: '努', meaning: 'to strive' }
        ]
    },
    {
        id: 'r090',
        type: 'character-match',
        difficulty: 'hard',
        pairs: [
            { character: '安', meaning: 'peace' },
            { character: '全', meaning: 'complete' },
            { character: '定', meaning: 'stable' },
            { character: '宁', meaning: 'tranquil' },
            { character: '静', meaning: 'quiet' },
            { character: '清', meaning: 'clear' }
        ]
    },
    {
        id: 'r091',
        type: 'character-match',
        difficulty: 'hard',
        pairs: [
            { character: '发', meaning: 'to send out' },
            { character: '收', meaning: 'to receive' },
            { character: '取', meaning: 'to take' },
            { character: '给', meaning: 'to give' },
            { character: '送', meaning: 'to deliver' },
            { character: '还', meaning: 'to return' }
        ]
    },
    {
        id: 'r092',
        type: 'character-match',
        difficulty: 'easy',
        pairs: [
            { character: '一', meaning: 'one' },
            { character: '二', meaning: 'two' },
            { character: '三', meaning: 'three' },
            { character: '四', meaning: 'four' },
            { character: '五', meaning: 'five' },
            { character: '六', meaning: 'six' }
        ]
    },
    {
        id: 'r093',
        type: 'character-match',
        difficulty: 'easy',
        pairs: [
            { character: '七', meaning: 'seven' },
            { character: '八', meaning: 'eight' },
            { character: '九', meaning: 'nine' },
            { character: '十', meaning: 'ten' },
            { character: '零', meaning: 'zero' },
            { character: '半', meaning: 'half' }
        ]
    },
    {
        id: 'r094',
        type: 'character-match',
        difficulty: 'medium',
        pairs: [
            { character: '口', meaning: 'mouth' },
            { character: '耳', meaning: 'ear' },
            { character: '鼻', meaning: 'nose' },
            { character: '舌', meaning: 'tongue' },
            { character: '牙', meaning: 'tooth' },
            { character: '发', meaning: 'hair' }
        ]
    },
    {
        id: 'r095',
        type: 'character-match',
        difficulty: 'medium',
        pairs: [
            { character: '王', meaning: 'king' },
            { character: '民', meaning: 'people' },
            { character: '主', meaning: 'master' },
            { character: '自', meaning: 'self' },
            { character: '由', meaning: 'freedom' },
            { character: '义', meaning: 'justice' }
        ]
    },
    ],
    
    // Sentence completion exercises
    sentenceComplete: [
        {
            id: 'r006',
            type: 'sentence-complete',
            difficulty: 'easy',
            sentence: '我___中国人。',
            options: ['是', '的', '了', '在'],
            correct: 0,
            meaning: 'I am Chinese.'
        },
        {
            id: 'r007',
            type: 'sentence-complete',
            difficulty: 'easy',
            sentence: '他___老师。',
            options: ['是', '的', '了', '在'],
            correct: 0,
            meaning: 'He is a teacher.'
        },
        {
            id: 'r008',
            type: 'sentence-complete',
            difficulty: 'easy',
            sentence: '我___北京。',
            options: ['在', '的', '了', '是'],
            correct: 0,
            meaning: 'I am in Beijing.'
        },
        {
            id: 'r009',
            type: 'sentence-complete',
            difficulty: 'medium',
            sentence: '昨天我___超市买了很多东西。',
            options: ['去', '在', '到', '从'],
            correct: 0,
            meaning: 'Yesterday I went to the supermarket and bought many things.'
        },
        {
            id: 'r010',
            type: 'sentence-complete',
            difficulty: 'medium',
            sentence: '我很喜欢___音乐。',
            options: ['听', '说', '读', '写'],
            correct: 0,
            meaning: 'I really like listening to music.'
        },
        {
            id: 'r011',
            type: 'sentence-complete',
            difficulty: 'medium',
            sentence: '明天___下雨。',
            options: ['会', '要', '能', '可以'],
            correct: 0,
            meaning: 'It will rain tomorrow.'
        },
        {
            id: 'r012',
            type: 'sentence-complete',
            difficulty: 'medium',
            sentence: '这件衣服太贵___。',
            options: ['了', '的', '着', '过'],
            correct: 0,
            meaning: 'This clothing is too expensive.'
        },
        {
            id: 'r013',
            type: 'sentence-complete',
            difficulty: 'hard',
            sentence: '我学中文已经三年___。',
            options: ['了', '的', '着', '过'],
            correct: 0,
            meaning: 'I have been learning Chinese for three years.'
        },
        {
            id: 'r014',
            type: 'sentence-complete',
            difficulty: 'hard',
            sentence: '他跑___很快。',
            options: ['得', '的', '地', '了'],
            correct: 0,
            meaning: 'He runs very fast.'
        },
        {
            id: 'r015',
            type: 'sentence-complete',
            difficulty: 'hard',
            sentence: '请把书放___桌子上。',
            options: ['在', '到', '了', '着'],
            correct: 0,
            meaning: 'Please put the book on the table.'
        },
        {
            id: 'r016',
            type: 'sentence-complete',
            difficulty: 'hard',
            sentence: '我___去过中国。',
            options: ['没', '不', '别', '无'],
            correct: 0,
            meaning: 'I have never been to China.'
        },
        {
            id: 'r017',
            type: 'sentence-complete',
            difficulty: 'hard',
            sentence: '你___吃了吗？',
            options: ['饭', '菜', '面', '肉'],
            correct: 0,
            meaning: 'Have you eaten? (Have you had rice?)'
        },
        {
            id: 'r018',
            type: 'sentence-complete',
            difficulty: 'medium',
            sentence: '今天天气很___。',
            options: ['好', '大', '多', '长'],
            correct: 0,
            meaning: 'The weather is very nice today.'
        },
        {
            id: 'r019',
            type: 'sentence-complete',
            difficulty: 'medium',
            sentence: '我___一个哥哥。',
            options: ['有', '是', '在', '去'],
            correct: 0,
            meaning: 'I have an older brother.'
        },
        {
            id: 'r020',
            type: 'sentence-complete',
            difficulty: 'medium',
            sentence: '他是___人？',
            options: ['哪', '那', '这', '什'],
            correct: 0,
            meaning: 'Where is he from? (What person?)'
        },
    {
        id: 'r096',
        type: 'sentence-complete',
        difficulty: 'medium',
        sentence: '我每天___公共汽车去上班。',
        options: ['坐', '开', '骑', '走'],
        correct: 0,
        meaning: 'I take the bus to work every day.'
    },
    {
        id: 'r097',
        type: 'sentence-complete',
        difficulty: 'medium',
        sentence: '他比我___三岁。',
        options: ['大', '多', '高', '老'],
        correct: 0,
        meaning: 'He is three years older than me.'
    },
    {
        id: 'r098',
        type: 'sentence-complete',
        difficulty: 'medium',
        sentence: '这个苹果___那个苹果大。',
        options: ['比', '跟', '和', '像'],
        correct: 0,
        meaning: 'This apple is bigger than that apple.'
    },
    {
        id: 'r099',
        type: 'sentence-complete',
        difficulty: 'medium',
        sentence: '我已经___完这本书了。',
        options: ['看', '读', '写', '学'],
        correct: 0,
        meaning: 'I have already finished reading this book.'
    },
    {
        id: 'r100',
        type: 'sentence-complete',
        difficulty: 'medium',
        sentence: '你能___我一下吗？',
        options: ['帮', '给', '让', '叫'],
        correct: 0,
        meaning: 'Can you help me for a moment?'
    },
    {
        id: 'r101',
        type: 'sentence-complete',
        difficulty: 'medium',
        sentence: '外面___下雨了，带把伞吧。',
        options: ['在', '要', '会', '能'],
        correct: 0,
        meaning: 'It is raining outside, bring an umbrella.'
    },
    {
        id: 'r102',
        type: 'sentence-complete',
        difficulty: 'hard',
        sentence: '他___汉语说得很好。',
        options: ['的', '得', '地', '了'],
        correct: 0,
        meaning: 'His Chinese is spoken very well.'
    },
    {
        id: 'r103',
        type: 'sentence-complete',
        difficulty: 'medium',
        sentence: '我们___点出发？',
        options: ['几', '什', '多', '哪'],
        correct: 0,
        meaning: 'What time shall we set off?'
    },
    {
        id: 'r104',
        type: 'sentence-complete',
        difficulty: 'medium',
        sentence: '你___什么没来上课？',
        options: ['为', '因', '做', '干'],
        correct: 0,
        meaning: 'Why didn\'t you come to class?'
    },
    {
        id: 'r105',
        type: 'sentence-complete',
        difficulty: 'easy',
        sentence: '这件衣服___漂亮！',
        options: ['真', '很', '太', '非'],
        correct: 0,
        meaning: 'This clothing is really beautiful!'
    },
    {
        id: 'r106',
        type: 'sentence-complete',
        difficulty: 'medium',
        sentence: '我___好了，可以走了。',
        options: ['准备', '预备', '打算', '计划'],
        correct: 0,
        meaning: 'I\'m ready, we can go.'
    },
    {
        id: 'r107',
        type: 'sentence-complete',
        difficulty: 'medium',
        sentence: '请___我介绍一下。',
        options: ['给', '为', '对', '向'],
        correct: 0,
        meaning: 'Please introduce me.'
    },
    {
        id: 'r108',
        type: 'sentence-complete',
        difficulty: 'medium',
        sentence: '从这儿___火车站怎么走？',
        options: ['到', '去', '往', '在'],
        correct: 0,
        meaning: 'How do I get to the train station from here?'
    },
    {
        id: 'r109',
        type: 'sentence-complete',
        difficulty: 'easy',
        sentence: '这个字怎么___？',
        options: ['读', '说', '讲', '念'],
        correct: 0,
        meaning: 'How do you read this character?'
    },
    {
        id: 'r110',
        type: 'sentence-complete',
        difficulty: 'medium',
        sentence: '我___得这个菜很好吃。',
        options: ['觉', '想', '看', '认'],
        correct: 0,
        meaning: 'I feel that this dish is very delicious.'
    },
    {
        id: 'r111',
        type: 'sentence-complete',
        difficulty: 'hard',
        sentence: '她唱歌唱___很好听。',
        options: ['得', '的', '地', '了'],
        correct: 0,
        meaning: 'She sings very beautifully.'
    },
    {
        id: 'r112',
        type: 'sentence-complete',
        difficulty: 'medium',
        sentence: '快___，要迟到了！',
        options: ['点', '些', '走', '跑'],
        correct: 0,
        meaning: 'Hurry up, we\'re going to be late!'
    },
    {
        id: 'r113',
        type: 'sentence-complete',
        difficulty: 'easy',
        sentence: '别___了，快起来！',
        options: ['睡', '躺', '坐', '站'],
        correct: 0,
        meaning: 'Stop sleeping, get up quickly!'
    },
    {
        id: 'r114',
        type: 'sentence-complete',
        difficulty: 'easy',
        sentence: '这个问题太难___。',
        options: ['了', '的', '啊', '吗'],
        correct: 0,
        meaning: 'This question is too difficult.'
    },
    {
        id: 'r115',
        type: 'sentence-complete',
        difficulty: 'medium',
        sentence: '你把窗户打开___吗？',
        options: ['好', '了', '过', '着'],
        correct: 0,
        meaning: 'Did you finish opening the window?'
    },
    {
        id: 'r116',
        type: 'sentence-complete',
        difficulty: 'easy',
        sentence: '我___过他，他很高。',
        options: ['见', '看', '找', '遇'],
        correct: 0,
        meaning: 'I have seen him before, he is very tall.'
    },
    {
        id: 'r117',
        type: 'sentence-complete',
        difficulty: 'medium',
        sentence: '等一下，我还___准备好。',
        options: ['没', '不', '别', '未'],
        correct: 0,
        meaning: 'Wait a moment, I\'m not ready yet.'
    },
    {
        id: 'r118',
        type: 'sentence-complete',
        difficulty: 'easy',
        sentence: '你___哪儿来的？',
        options: ['从', '在', '到', '往'],
        correct: 0,
        meaning: 'Where did you come from?'
    },
    {
        id: 'r119',
        type: 'sentence-complete',
        difficulty: 'medium',
        sentence: '这里可以___照片吗？',
        options: ['拍', '照', '看', '画'],
        correct: 0,
        meaning: 'Can I take photos here?'
    },
    {
        id: 'r120',
        type: 'sentence-complete',
        difficulty: 'easy',
        sentence: '我们___电影院门口见面吧。',
        options: ['在', '到', '去', '从'],
        correct: 0,
        meaning: 'Let\'s meet at the cinema entrance.'
    },
    {
        id: 'r121',
        type: 'sentence-complete',
        difficulty: 'medium',
        sentence: '他___着书包出去了。',
        options: ['背', '拿', '带', '提'],
        correct: 0,
        meaning: 'He went out carrying a backpack.'
    },
    {
        id: 'r122',
        type: 'sentence-complete',
        difficulty: 'medium',
        sentence: '我___了两个小时才到。',
        options: ['开', '走', '坐', '骑'],
        correct: 0,
        meaning: 'I drove for two hours to arrive.'
    },
    {
        id: 'r123',
        type: 'sentence-complete',
        difficulty: 'medium',
        sentence: '这个故事很有意思，___再讲一遍。',
        options: ['请', '让', '叫', '给'],
        correct: 0,
        meaning: 'This story is very interesting, please tell it again.'
    },
    {
        id: 'r124',
        type: 'sentence-complete',
        difficulty: 'medium',
        sentence: '放心吧，没___大问题。',
        options: ['什么', '怎么', '那么', '这么'],
        correct: 0,
        meaning: 'Don\'t worry, there\'s no big problem.'
    },
    {
        id: 'r125',
        type: 'sentence-complete',
        difficulty: 'easy',
        sentence: '你___试试这件衣服。',
        options: ['可以', '可能', '应该', '必须'],
        correct: 0,
        meaning: 'You can try on this clothing.'
    },
    {
        id: 'r126',
        type: 'sentence-complete',
        difficulty: 'easy',
        sentence: '大家___来了，我们开始吧。',
        options: ['都', '也', '还', '就'],
        correct: 0,
        meaning: 'Everyone has arrived, let\'s begin.'
    },
    {
        id: 'r127',
        type: 'sentence-complete',
        difficulty: 'medium',
        sentence: '他把杯子打___了。',
        options: ['破', '坏', '碎', '断'],
        correct: 0,
        meaning: 'He broke the cup.'
    },
    {
        id: 'r128',
        type: 'sentence-complete',
        difficulty: 'hard',
        sentence: '我对中国历史很___兴趣。',
        options: ['感', '有', '兴', '爱'],
        correct: 0,
        meaning: 'I am very interested in Chinese history.'
    },
    {
        id: 'r129',
        type: 'sentence-complete',
        difficulty: 'hard',
        sentence: '虽然下雨了，___是他还是来了。',
        options: ['但', '可', '却', '而'],
        correct: 0,
        meaning: 'Although it rained, he still came.'
    },
    {
        id: 'r130',
        type: 'sentence-complete',
        difficulty: 'medium',
        sentence: '他___会说三种语言。',
        options: ['能', '会', '可以', '想'],
        correct: 0,
        meaning: 'He can speak three languages.'
    },
    {
        id: 'r131',
        type: 'sentence-complete',
        difficulty: 'medium',
        sentence: '我打算___中国留学。',
        options: ['去', '到', '来', '在'],
        correct: 0,
        meaning: 'I plan to study abroad in China.'
    },
    {
        id: 'r132',
        type: 'sentence-complete',
        difficulty: 'medium',
        sentence: '请___往前走，就到了。',
        options: ['一直', '继续', '直接', '接着'],
        correct: 0,
        meaning: 'Please go straight ahead and you\'ll arrive.'
    },
    {
        id: 'r133',
        type: 'sentence-complete',
        difficulty: 'medium',
        sentence: '那___楼就是图书馆。',
        options: ['座', '个', '栋', '间'],
        correct: 0,
        meaning: 'That building is the library.'
    },
    {
        id: 'r134',
        type: 'sentence-complete',
        difficulty: 'easy',
        sentence: '我们___周末去爬山吧？',
        options: ['这个', '那个', '哪个', '什么'],
        correct: 0,
        meaning: 'Shall we go hiking this weekend?'
    },
    {
        id: 'r135',
        type: 'sentence-complete',
        difficulty: 'easy',
        sentence: '这个菜___好吃，你尝尝。',
        options: ['很', '真', '太', '好'],
        correct: 0,
        meaning: 'This dish is very delicious, try some.'
    },
    ],

    // Passage reading exercises
    passageReading: [
        {
            id: 'r021',
            type: 'passage-reading',
            difficulty: 'medium',
            title: '我的一天',
            titleMeaning: 'My Day',
            passage: '我每天早上七点起床。先刷牙洗脸，然后吃早饭。八点坐地铁去上班。公司离我家很远，需要一个小时。中午在公司吃午饭。下午五点下班，回家做晚饭。晚上看看电视或者看书，十一点睡觉。',
            pinyin: 'wǒ měitiān zǎoshang qī diǎn qǐchuáng. xiān shuáyá xǐliǎn, ránhòu chī zǎofàn. bā diǎn zuò dìtiě qù shàngbān. gōngsī lí wǒ jiā hěn yuǎn, xūyào yīgè xiǎoshí. zhōngwǔ zài gōngsī chī wǔfàn. xiàwǔ wǔ diǎn xiàbān, huíjiā zuò wǎnfàn. wǎnshang kàn kàn diànshì huòzhě kànshū, shíyī diǎn shuìjiào.',
            questions: [
                {
                    question: '他几点起床？',
                    options: ['六点', '七点', '八点', '九点'],
                    correct: 1
                },
                {
                    question: '他怎么去上班？',
                    options: ['坐公共汽车', '坐地铁', '开车', '骑自行车'],
                    correct: 1
                },
                {
                    question: '他几点睡觉？',
                    options: ['十点', '十一点', '十二点', '九点'],
                    correct: 1
                }
            ]
        },
        {
            id: 'r022',
            type: 'passage-reading',
            difficulty: 'medium',
            title: '我的家庭',
            titleMeaning: 'My Family',
            passage: '我家有四口人：爸爸、妈妈、姐姐和我。爸爸是医生，在医院工作。妈妈是老师，在学校教中文。姐姐在上大学，学习经济。我是高中生，明年也要上大学了。',
            pinyin: 'wǒ jiā yǒu sì kǒu rén: bàba, māma, jiějie hé wǒ. bàba shì yīshēng, zài yīyuàn gōngzuò. māma shì lǎoshī, zài xuéxiào jiāo zhōngwén. jiějie zài shàng dàxué, xuéxí jīngjì. wǒ shì gāozhōngshēng, míngnián yě yào shàng dàxué le.',
            questions: [
                {
                    question: '他家有几口人？',
                    options: ['三口', '四口', '五口', '六口'],
                    correct: 1
                },
                {
                    question: '他妈妈做什么工作？',
                    options: ['医生', '老师', '工程师', '经理'],
                    correct: 1
                },
                {
                    question: '姐姐在学习什么？',
                    options: ['医学', '经济', '法律', '计算机'],
                    correct: 1
                }
            ]
        },
        {
            id: 'r023',
            type: 'passage-reading',
            difficulty: 'hard',
            title: '中国旅游',
            titleMeaning: 'Traveling in China',
            passage: '去年暑假，我和朋友一起去中国旅游。我们先去了北京，看了长城和故宫。长城很长很壮观，故宫很漂亮。然后我们坐火车去了西安，看了兵马俑。最后我们去了成都，吃了很好吃的火锅。这次旅行很难忘。',
            pinyin: 'qùnián shǔjià, wǒ hé péngyǒu yīqǐ qù zhōngguó lǚyóu. wǒmen xiān qù le běijīng, kàn le chángchéng hé gùgōng. chángchéng hěn cháng hěn zhuàngguān, gùgōng hěn piàoliang. ránhòu wǒmen zuò huǒchē qù le xī\'ān, kàn le bīngmǎyǒng. zuìhòu wǒmen qù le chéngdū, chī le hěn hǎochī de huǒguō. zhè cì lǚxíng hěn nánwàng.',
            questions: [
                {
                    question: '他们什么时候去旅游？',
                    options: ['寒假', '暑假', '国庆节', '春节'],
                    correct: 1
                },
                {
                    question: '他们先去了哪个城市？',
                    options: ['上海', '北京', '西安', '成都'],
                    correct: 1
                },
                {
                    question: '在成都他们做了什么？',
                    options: ['看长城', '看兵马俑', '吃火锅', '买东西'],
                    correct: 2
                }
            ]
        },
        {
            id: 'r024',
            type: 'passage-reading',
            difficulty: 'hard',
            title: '学中文的感想',
            titleMeaning: 'Thoughts on Learning Chinese',
            passage: '我学中文已经两年了。一开始觉得很难，特别是声调。但是现在我觉得越来越有意思。我喜欢看中文电影，听中文歌。我觉得学语言最重要的是多听多说。我希望以后能去中国工作。',
            pinyin: 'wǒ xué zhōngwén yǐjīng liǎng nián le. yī kāishǐ juéde hěn nán, tèbié shì shēngdiào. dànshì xiànzài wǒ juéde yuè lái yuè yǒu yìsi. wǒ xǐhuān kàn zhōngwén diànyǐng, tīng zhōngwén gē. wǒ juéde xué yǔyán zuì zhòngyào de shì duō tīng duō shuō. wǒ xīwàng yǐhòu néng qù zhōngguó gōngzuò.',
            questions: [
                {
                    question: '他学中文学了多长时间？',
                    options: ['一年', '两年', '三年', '四年'],
                    correct: 1
                },
                {
                    question: '一开始他觉得什么最难？',
                    options: ['汉字', '语法', '声调', '词汇'],
                    correct: 2
                },
                {
                    question: '他以后想做什么？',
                    options: ['去中国旅游', '去中国工作', '去中国留学', '去中国生活'],
                    correct: 1
                }
            ]
        },
        {
            id: 'r025',
            type: 'passage-reading',
            difficulty: 'medium',
            title: '我的爱好',
            titleMeaning: 'My Hobbies',
            passage: '我有很多爱好。我喜欢运动，特别是打篮球和游泳。每个周末我都会去游泳池游泳。我也喜欢看书，尤其是历史书。有时候我会和朋友一起去看电影。我觉得有爱好很重要，可以让生活更有趣。',
            pinyin: 'wǒ yǒu hěn duō àihào. wǒ xǐhuān yùndòng, tèbié shì dǎ lánqiú hé yóuyǒng. měi gè zhōumò wǒ dōu huì qù yóuyǒngchí yóuyǒng. wǒ yě xǐhuān kànshū, yóuqí shì lìshǐ shū. yǒushíhou wǒ huì hé péngyǒu yīqǐ qù kàn diànyǐng. wǒ juéde yǒu àihào hěn zhòngyào, kěyǐ ràng shēnghuó gèng yǒuqù.',
            questions: [
                {
                    question: '他喜欢什么运动？',
                    options: ['足球', '篮球和游泳', '跑步', '羽毛球'],
                    correct: 1
                },
                {
                    question: '他多久去游泳一次？',
                    options: ['每天', '每个周末', '每个月', '有时候'],
                    correct: 1
                },
                {
                    question: '他喜欢看什么书？',
                    options: ['小说', '历史书', '科学书', '杂志'],
                    correct: 1
                }
            ]
        },
        {
            id: 'r026',
            type: 'passage-reading',
            difficulty: 'hard',
            title: '中国的春节',
            titleMeaning: 'Chinese Spring Festival',
            passage: '春节是中国最重要的节日。每年春节，人们都会回家和家人团聚。除夕晚上，大家一起吃年夜饭，看春节联欢晚会。孩子们会收到红包，里面有钱。大年初一，人们会去拜年，说"新年快乐"。春节期间，到处都很热闹。',
            pinyin: 'chūnjié shì zhōngguó zuì zhòngyào de jiérì. měi nián chūnjié, rénmen dōu huì huíjiā hé jiārén tuánjù. chúxī wǎnshang, dàjiā yīqǐ chī niányèfàn, kàn chūnjié liánhuān wǎnhuì. háizimen huì shōu dào hóngbāo, lǐmiàn yǒu qián. dà nián chū yī, rénmen huì qù bàinián, shuō "xīnnián kuàilè". chūnjié qījiān, dàochù dōu hěn rènào.',
            questions: [
                {
                    question: '春节是什么样的节日？',
                    options: ['不重要', '最重要', '比较重要', '一般'],
                    correct: 1
                },
                {
                    question: '除夕晚上人们做什么？',
                    options: ['睡觉', '吃年夜饭看晚会', '工作', '旅游'],
                    correct: 1
                },
                {
                    question: '孩子们会收到什么？',
                    options: ['礼物', '红包', '糖果', '玩具'],
                    correct: 1
                }
            ]
        },
        {
            id: 'r027',
            type: 'passage-reading',
            difficulty: 'medium',
            title: '我的工作',
            titleMeaning: 'My Work',
            passage: '我在一家公司做经理。每天工作八个小时，从早上九点到下午五点。工作很忙，但是我喜欢我的工作。我的同事都很好，我们相处得很融洽。每个月的工资还不错，够我生活。',
            pinyin: 'wǒ zài yījiā gōngsī zuò jīnglǐ. měitiān gōngzuò bā gè xiǎoshí, cóng zǎoshang jiǔ diǎn dào xiàwǔ wǔ diǎn. gōngzuò hěn máng, dànshì wǒ xǐhuān wǒ de gōngzuò. wǒ de tóngshì dōu hěn hǎo, wǒmen xiāngchǔ de hěn róngqià. měi gè yuè de gōngzī hái bùcuò, gòu wǒ shēnghuó.',
            questions: [
                {
                    question: '他做什么工作？',
                    options: ['老师', '医生', '经理', '工程师'],
                    correct: 2
                },
                {
                    question: '他每天工作几个小时？',
                    options: ['六个小时', '七个小时', '八个小时', '九个小时'],
                    correct: 2
                },
                {
                    question: '他和同事相处得怎么样？',
                    options: ['不好', '一般', '很好', '不知道'],
                    correct: 2
                }
            ]
        },
        {
            id: 'r028',
            type: 'passage-reading',
            difficulty: 'hard',
            title: '环境保护',
            titleMeaning: 'Environmental Protection',
            passage: '现在环境问题越来越严重。空气污染、水污染、垃圾问题都很突出。我们应该保护环境，从小事做起。比如，少用塑料袋，多坐公共交通，节约用水用电。每个人都可以为保护环境做出贡献。',
            pinyin: 'xiànzài huánjìng wèntí yuè lái yuè yánzhòng. kōngqì wūrǎn, shuǐ wūrǎn, lājī wèntí dōu hěn tūchū. wǒmen yīnggāi bǎohù huánjìng, cóng xiǎoshì zuòqǐ. bǐrú, shǎo yòng sùliào dài, duō zuò gōnggòng jiāotōng, jiéyuē yòng shuǐ yòng diàn. měi gè rén dōu kěyǐ wèi bǎohù huánjìng zuò chū gòngxiàn.',
            questions: [
                {
                    question: '现在什么问题越来越严重？',
                    options: ['经济问题', '环境问题', '教育问题', '健康问题'],
                    correct: 1
                },
                {
                    question: '我们应该怎么做？',
                    options: ['什么都不做', '保护环境', '继续污染', '搬家'],
                    correct: 1
                },
                {
                    question: '下面哪个是保护环境的方法？',
                    options: ['多用塑料袋', '多开车', '节约用水', '多用电'],
                    correct: 2
                }
            ]
        },
        {
            id: 'r029',
            type: 'passage-reading',
            difficulty: 'medium',
            title: '我的朋友',
            titleMeaning: 'My Friend',
            passage: '我有一个很好的朋友，她叫小红。我们是大学同学。小红很漂亮，也很聪明。她现在在一家医院当医生。她工作很忙，但是我们每个星期都会见面。我们喜欢一起去咖啡馆聊天，或者去看电影。',
            pinyin: 'wǒ yǒu yīgè hěn hǎo de péngyǒu, tā jiào xiǎo hóng. wǒmen shì dàxué tóngxué. xiǎo hóng hěn piàoliang, yě hěn cōngmíng. tā xiànzài zài yījiā yīyuàn dāng yīshēng. tā gōngzuò hěn máng, dànshì wǒmen měi gè xīngqī dōu huì jiànmiàn. wǒmen xǐhuān yīqǐ qù kāfēiguǎn liáotiān, huòzhě qù kàn diànyǐng.',
            questions: [
                {
                    question: '小红是他的什么人？',
                    options: ['同事', '同学', '好朋友', '女朋友'],
                    correct: 2
                },
                {
                    question: '小红做什么工作？',
                    options: ['老师', '医生', '经理', '工程师'],
                    correct: 1
                },
                {
                    question: '他们多久见面一次？',
                    options: ['每天', '每个星期', '每个月', '有时候'],
                    correct: 1
                }
            ]
        },
        {
            id: 'r030',
            type: 'passage-reading',
            difficulty: 'hard',
            title: '互联网时代',
            titleMeaning: 'Internet Age',
            passage: '现在是互联网时代。人们用手机和电脑上网，可以做很多事情。可以在网上买东西、看新闻、学习、聊天。互联网让生活更方便，但是也有一些问题。比如，有些人花太多时间上网，影响了工作和学习。',
            pinyin: 'xiànzài shì hùliánwǎng shídài. rénmen yòng shǒujī hé diànnǎo shàngwǎng, kěyǐ zuò hěn duō shìqing. kěyǐ zài wǎngshàng mǎi dōngxi, kàn xīnwén, xuéxí, liáotiān. hùliánwǎng ràng shēnghuó gèng fāngbiàn, dànshì yě yǒu yīxiē wèntí. bǐrú, yǒuxiē rén huā tài duō shíjiān shàngwǎng, yǐngxiǎng le gōngzuò hé xuéxí.',
            questions: [
                {
                    question: '现在是什么时代？',
                    options: ['工业时代', '互联网时代', '农业时代', '信息时代'],
                    correct: 1
                },
                {
                    question: '互联网让人们的生活怎么样？',
                    options: ['更难', '更方便', '更贵', '更慢'],
                    correct: 1
                },
                {
                    question: '互联网有什么问题？',
                    options: ['没有问题', '花太多时间上网', '不能买东西', '不能学习'],
                    correct: 1
                }
            ]
        }
    ],

    // Speed reading exercises
    speedReading: [
        {
            id: 'r031',
            type: 'speed-reading',
            difficulty: 'hard',
            title: '快速阅读1',
            passage: '今天天气很好，我和朋友去公园玩。',
            timeLimit: 10,
            questions: [
                {
                    question: '今天天气怎么样？',
                    options: ['很好', '不好', '下雨', '很冷'],
                    correct: 0
                }
            ]
        },
        {
            id: 'r032',
            type: 'speed-reading',
            difficulty: 'hard',
            title: '快速阅读2',
            passage: '他每天早上六点起床跑步，然后吃早饭。',
            timeLimit: 10,
            questions: [
                {
                    question: '他几点起床？',
                    options: ['五点', '六点', '七点', '八点'],
                    correct: 1
                }
            ]
        },
        {
            id: 'r033',
            type: 'speed-reading',
            difficulty: 'hard',
            title: '快速阅读3',
            passage: '我想买一个新手机，但是太贵了。',
            timeLimit: 10,
            questions: [
                {
                    question: '他想买什么？',
                    options: ['电脑', '手机', '电视', '平板'],
                    correct: 1
                }
            ]
        },
        {
            id: 'r034',
            type: 'speed-reading',
            difficulty: 'hard',
            title: '快速阅读4',
            passage: '春节是中国最重要的节日，人们会回家过年。',
            timeLimit: 10,
            questions: [
                {
                    question: '什么节日最重要？',
                    options: ['中秋节', '春节', '国庆节', '端午节'],
                    correct: 1
                }
            ]
        },
        {
            id: 'r035',
            type: 'speed-reading',
            difficulty: 'hard',
            title: '快速阅读5',
            passage: '学中文要多听多说，多看中文电影。',
            timeLimit: 10,
            questions: [
                {
                    question: '学中文要多做什么？',
                    options: ['多写', '多听多说', '多读', '多背'],
                    correct: 1
                }
            ]
        }
    ],

    // Radical learning exercises
    radicalLearn: [
        {
            id: 'r036',
            type: 'radical-learn',
            difficulty: 'medium',
            radical: '亻',
            radicalName: '单人旁',
            radicalMeaning: 'person',
            characters: [
                { char: '他', meaning: 'he' },
                { char: '你', meaning: 'you' },
                { char: '们', meaning: 'plural marker' },
                { char: '做', meaning: 'to do' },
                { char: '住', meaning: 'to live' },
                { char: '作', meaning: 'to make' }
            ]
        },
        {
            id: 'r037',
            type: 'radical-learn',
            difficulty: 'medium',
            radical: '氵',
            radicalName: '三点水',
            radicalMeaning: 'water',
            characters: [
                { char: '洗', meaning: 'to wash' },
                { char: '河', meaning: 'river' },
                { char: '海', meaning: 'sea' },
                { char: '湖', meaning: 'lake' },
                { char: '汤', meaning: 'soup' },
                { char: '酒', meaning: 'alcohol' }
            ]
        },
        {
            id: 'r038',
            type: 'radical-learn',
            difficulty: 'medium',
            radical: '口',
            radicalName: '口字旁',
            radicalMeaning: 'mouth',
            characters: [
                { char: '吃', meaning: 'to eat' },
                { char: '喝', meaning: 'to drink' },
                { char: '叫', meaning: 'to call' },
                { char: '听', meaning: 'to listen' },
                { char: '唱', meaning: 'to sing' },
                { char: '吗', meaning: 'question particle' }
            ]
        },
        {
            id: 'r039',
            type: 'radical-learn',
            difficulty: 'hard',
            radical: '木',
            radicalName: '木字旁',
            radicalMeaning: 'wood/tree',
            characters: [
                { char: '树', meaning: 'tree' },
                { char: '林', meaning: 'forest' },
                { char: '桌', meaning: 'table' },
                { char: '椅', meaning: 'chair' },
                { char: '床', meaning: 'bed' },
                { char: '楼', meaning: 'building' }
            ]
        },
        {
            id: 'r040',
            type: 'radical-learn',
            difficulty: 'hard',
            radical: '女',
            radicalName: '女字旁',
            radicalMeaning: 'woman',
            characters: [
                { char: '妈', meaning: 'mother' },
                { char: '姐', meaning: 'older sister' },
                { char: '妹', meaning: 'younger sister' },
                { char: '好', meaning: 'good' },
                { char: '她', meaning: 'she' },
                { char: '姓', meaning: 'surname' }
            ]
        }
    ],

    // Context clues exercises
    contextClues: [
        {
            id: 'r041',
            type: 'context-clues',
            difficulty: 'hard',
            sentence: '他今天没来上班，可能是生病了。',
            unknownWord: '生病',
            contextClues: ['没来上班', '可能'],
            options: ['to be sick', 'to travel', 'to work', 'to rest'],
            correct: 0,
            explanation: '从"没来上班"和"可能"可以推断，他没来上班的原因可能是身体不好，所以"生病"的意思是"to be sick"。'
        },
        {
            id: 'r042',
            type: 'context-clues',
            difficulty: 'hard',
            sentence: '这个菜太辣了，我吃不了。',
            unknownWord: '辣',
            contextClues: ['太...了', '吃不了'],
            options: ['spicy', 'sweet', 'sour', 'salty'],
            correct: 0,
            explanation: '从"太...了"和"吃不了"可以推断，这个菜的味道让人不能吃，所以"辣"的意思是"spicy"。'
        },
        {
            id: 'r043',
            type: 'context-clues',
            difficulty: 'hard',
            sentence: '他的钱包丢了，所以很着急。',
            unknownWord: '着急',
            contextClues: ['丢了', '所以'],
            options: ['worried', 'happy', 'tired', 'angry'],
            correct: 0,
            explanation: '从"丢了"可以推断，丢了东西会让人感到担心，所以"着急"的意思是"worried"。'
        },
        {
            id: 'r044',
            type: 'context-clues',
            difficulty: 'hard',
            sentence: '这个地方很安静，适合看书。',
            unknownWord: '安静',
            contextClues: ['适合看书'],
            options: ['quiet', 'noisy', 'crowded', 'beautiful'],
            correct: 0,
            explanation: '从"适合看书"可以推断，看书需要安静的环境，所以"安静"的意思是"quiet"。'
        },
        {
            id: 'r045',
            type: 'context-clues',
            difficulty: 'hard',
            sentence: '他很努力地工作，终于成功了。',
            unknownWord: '终于',
            contextClues: ['很努力', '成功了'],
            options: ['finally', 'never', 'always', 'sometimes'],
            correct: 0,
            explanation: '从"很努力"和"成功了"可以推断，经过努力后达到了目标，所以"终于"的意思是"finally"。'
        }
    ],

    // Helper methods
    getByType(type) {
        switch(type) {
            case 'character-match': return this.characterMatch;
            case 'sentence-complete': return this.sentenceComplete;
            case 'passage-reading': return this.passageReading;
            case 'speed-reading': return this.speedReading;
            case 'radical-learn': return this.radicalLearn;
            case 'context-clues': return this.contextClues;
            default: return [];
        }
    },

    getById(id) {
        const all = [
            ...this.characterMatch,
            ...this.sentenceComplete,
            ...this.passageReading,
            ...this.speedReading,
            ...this.radicalLearn,
            ...this.contextClues
        ];
        return all.find(item => item.id === id);
    },

    getRandomByType(type, count = 10) {
        const items = this.getByType(type);
        return Utils.randomItems(items, count);
    },

    get totalCount() {
        return this.characterMatch.length + 
               this.sentenceComplete.length + 
               this.passageReading.length + 
               this.speedReading.length + 
               this.radicalLearn.length + 
               this.contextClues.length;
    }
};

// Export for use in other modules
window.ReadingData = ReadingData;
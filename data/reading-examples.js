// ============================================
// CHINESE MASTER - Reading Passages with Examples
// Multiple examples and detailed explanations
// ALL SIMPLIFIED CHINESE
// ============================================

const ReadingExamples = {
    passages: [
        // HSK 1 Passages with detailed examples
        {
            id: 're001',
            hsk: 1,
            title: 'My Daily Routine',
            titleCn: '我的一天',
            passage: '我每天早上七点起床。我先刷牙，然后洗脸。八点吃早饭。九点去学校。上午学习中文。中午十二点吃午饭。下午继续学习。晚上六点回家。七点吃晚饭。十点睡觉。',
            pinyin: 'wǒ měitiān zǎoshang qī diǎn qǐchuáng. wǒ xiān shuáyá, ránhòu xǐliǎn. bā diǎn chī zǎofàn. jiǔ diǎn qù xuéxiào. shàngwǔ xuéxí zhōngwén. zhōngwǔ shí\'èr diǎn chī wǔfàn. xiàwǔ jìxù xuéxí. wǎnshang liù diǎn huíjiā. qī diǎn chī wǎnfàn. shí diǎn shuìjiào.',
            translation: 'I get up at 7am every day. I first brush my teeth, then wash my face. At 8am I eat breakfast. At 9am I go to school. In the morning I study Chinese. At noon I eat lunch. In the afternoon I continue studying. At 6pm I go home. At 7pm I eat dinner. At 10pm I sleep.',
            vocabulary: [
                { cn: '早上', pinyin: 'zǎoshang', en: 'morning' },
                { cn: '起床', pinyin: 'qǐchuáng', en: 'get up' },
                { cn: '刷牙', pinyin: 'shuáyá', en: 'brush teeth' },
                { cn: '洗脸', pinyin: 'xǐliǎn', en: 'wash face' },
                { cn: '早饭', pinyin: 'zǎofàn', en: 'breakfast' },
                { cn: '学校', pinyin: 'xuéxiào', en: 'school' },
                { cn: '学习', pinyin: 'xuéxí', en: 'study' },
                { cn: '中午', pinyin: 'zhōngwǔ', en: 'noon' },
                { cn: '午饭', pinyin: 'wǔfàn', en: 'lunch' },
                { cn: '下午', pinyin: 'xiàwǔ', en: 'afternoon' },
                { cn: '回家', pinyin: 'huíjiā', en: 'go home' },
                { cn: '晚饭', pinyin: 'wǎnfàn', en: 'dinner' },
                { cn: '睡觉', pinyin: 'shuìjiào', en: 'sleep' }
            ],
            questions: [
                { q: 'What time does he get up?', qCn: '他几点起床？', options: ['6am', '7am', '8am', '9am'], correct: 1 },
                { q: 'What does he do first?', qCn: '他先做什么？', options: ['Eat breakfast', 'Brush teeth', 'Go to school', 'Study'], correct: 1 },
                { q: 'What time does he eat lunch?', qCn: '他几点吃午饭？', options: ['11am', '12pm', '1pm', '2pm'], correct: 1 },
                { q: 'What time does he go home?', qCn: '他几点回家？', options: ['5pm', '6pm', '7pm', '8pm'], correct: 1 }
            ]
        },
        {
            id: 're002',
            hsk: 1,
            title: 'My Family',
            titleCn: '我的家',
            passage: '我家有四口人：爸爸、妈妈、哥哥和我。爸爸是医生，他在医院工作。妈妈是老师，她在学校教中文。哥哥是大学生，他学习英文。我是高中生，我学习中文和英文。',
            pinyin: 'wǒ jiā yǒu sì kǒu rén: bàba, māma, gēge hé wǒ. bàba shì yīshēng, tā zài yīyuàn gōngzuò. māma shì lǎoshī, tā zài xuéxiào jiāo zhōngwén. gēge shì dàxuéshēng, tā xuéxí yīngwén. wǒ shì gāozhōngshēng, wǒ xuéxí zhōngwén hé yīngwén.',
            translation: 'My family has four people: dad, mom, older brother, and me. Dad is a doctor, he works at the hospital. Mom is a teacher, she teaches Chinese at school. Older brother is a college student, he studies English. I am a high school student, I study Chinese and English.',
            vocabulary: [
                { cn: '家', pinyin: 'jiā', en: 'family/home' },
                { cn: '口', pinyin: 'kǒu', en: 'measure word for people' },
                { cn: '爸爸', pinyin: 'bàba', en: 'father' },
                { cn: '妈妈', pinyin: 'māma', en: 'mother' },
                { cn: '哥哥', pinyin: 'gēge', en: 'older brother' },
                { cn: '医生', pinyin: 'yīshēng', en: 'doctor' },
                { cn: '医院', pinyin: 'yīyuàn', en: 'hospital' },
                { cn: '老师', pinyin: 'lǎoshī', en: 'teacher' },
                { cn: '学校', pinyin: 'xuéxiào', en: 'school' },
                { cn: '教', pinyin: 'jiāo', en: 'teach' },
                { cn: '大学生', pinyin: 'dàxuéshēng', en: 'college student' },
                { cn: '高中生', pinyin: 'gāozhōngshēng', en: 'high school student' }
            ],
            questions: [
                { q: 'How many people are in his family?', qCn: '他家有几口人？', options: ['Two', 'Three', 'Four', 'Five'], correct: 2 },
                { q: 'What does his father do?', qCn: '他爸爸做什么工作？', options: ['Teacher', 'Doctor', 'Student', 'Engineer'], correct: 1 },
                { q: 'What does his mother teach?', qCn: '他妈妈教什么？', options: ['English', 'Math', 'Chinese', 'Science'], correct: 2 },
                { q: 'What is he studying?', qCn: '他学什么？', options: ['Only Chinese', 'Only English', 'Chinese and English', 'Math'], correct: 2 }
            ]
        },
        {
            id: 're003',
            hsk: 1,
            title: 'At the Restaurant',
            titleCn: '在饭馆',
            passage: '今天我和朋友去饭馆吃饭。饭馆人很多。我要了一碗米饭和一个菜。朋友要了面条。我们喝了很多水。饭很好吃。一共花了五十块钱。',
            pinyin: 'jīntiān wǒ hé péngyǒu qù fànguǎn chīfàn. fànguǎn rén hěn duō. wǒ yào le yī wǎn mǐfàn hé yīgè cài. péngyǒu yào le miàntiáo. wǒmen hē le hěn duō shuǐ. fàn hěn hǎochī. yīgòng huā le wǔshí kuài qián.',
            translation: 'Today my friend and I went to a restaurant to eat. The restaurant had many people. I ordered a bowl of rice and a dish. My friend ordered noodles. We drank a lot of water. The food was delicious. It cost 50 yuan in total.',
            vocabulary: [
                { cn: '饭馆', pinyin: 'fànguǎn', en: 'restaurant' },
                { cn: '吃饭', pinyin: 'chīfàn', en: 'eat' },
                { cn: '碗', pinyin: 'wǎn', en: 'bowl' },
                { cn: '米饭', pinyin: 'mǐfàn', en: 'rice' },
                { cn: '菜', pinyin: 'cài', en: 'dish/vegetable' },
                { cn: '面条', pinyin: 'miàntiáo', en: 'noodles' },
                { cn: '水', pinyin: 'shuǐ', en: 'water' },
                { cn: '好吃', pinyin: 'hǎochī', en: 'delicious' },
                { cn: '一共', pinyin: 'yīgòng', en: 'total' },
                { cn: '块钱', pinyin: 'kuài qián', en: 'yuan' }
            ],
            questions: [
                { q: 'Where did they eat?', qCn: '他们在哪里吃饭？', options: ['At home', 'At school', 'At a restaurant', 'At a store'], correct: 2 },
                { q: 'What did he order?', qCn: '他要了什么？', options: ['Noodles', 'Rice and a dish', 'Only rice', 'Only a dish'], correct: 1 },
                { q: 'How much did it cost?', qCn: '一共多少钱？', options: ['15 yuan', '30 yuan', '50 yuan', '100 yuan'], correct: 2 }
            ]
        },
        {
            id: 're004',
            hsk: 1,
            title: 'Buying Things',
            titleCn: '买东西',
            passage: '今天我去商店买东西。我买了一本书，二十块钱。我还买了一支笔，五块钱。一共二十五块钱。我给了店员一百块钱，他找了我七十五块钱。',
            pinyin: 'jīntiān wǒ qù shāngdiàn mǎi dōngxi. wǒ mǎi le yī běn shū, èrshí kuài qián. wǒ hái mǎi le yī zhī bǐ, wǔ kuài qián. yīgòng èrshíwǔ kuài qián. wǒ gěi le diànyuán yī bǎi kuài qián, tā zhǎo le wǒ qīshíwǔ kuài qián.',
            translation: 'Today I went to the store to buy things. I bought a book, 20 yuan. I also bought a pen, 5 yuan. Total 25 yuan. I gave the clerk 100 yuan, and he gave me 75 yuan change.',
            vocabulary: [
                { cn: '商店', pinyin: 'shāngdiàn', en: 'store' },
                { cn: '买', pinyin: 'mǎi', en: 'buy' },
                { cn: '东西', pinyin: 'dōngxi', en: 'things' },
                { cn: '书', pinyin: 'shū', en: 'book' },
                { cn: '笔', pinyin: 'bǐ', en: 'pen' },
                { cn: '给', pinyin: 'gěi', en: 'give' },
                { cn: '找', pinyin: 'zhǎo', en: 'give change' },
                { cn: '块钱', pinyin: 'kuài qián', en: 'yuan' }
            ],
            questions: [
                { q: 'What did he buy?', qCn: '他买了什么？', options: ['A book and a pen', 'Only a book', 'Only a pen', 'A book and a bag'], correct: 0 },
                { q: 'How much was the book?', qCn: '书多少钱？', options: ['5 yuan', '10 yuan', '20 yuan', '25 yuan'], correct: 2 },
                { q: 'How much change did he get?', qCn: '他找了多少钱？', options: ['25 yuan', '50 yuan', '75 yuan', '100 yuan'], correct: 2 }
            ]
        },
        {
            id: 're005',
            hsk: 1,
            title: 'Weather',
            titleCn: '天气',
            passage: '今天天气很好，不冷也不热。阳光明媚。我和朋友去公园玩。公园里有很多人。有的人在跑步，有的人在散步，还有的人在拍照。我们走了很长时间，很累，但是很开心。',
            pinyin: 'jīntiān tiānqì hěn hǎo, bù lěng yě bù rè. yángguāng míngmèi. wǒ hé péngyǒu qù gōngyuán wán. gōngyuán lǐ yǒu hěn duō rén. yǒu de rén zài pǎobù, yǒu de rén zài sànbù, hái yǒu de rén zài pāizhào. wǒmen zǒu le hěn cháng shíjiān, hěn lèi, dànshì hěn kāixīn.',
            translation: 'Today the weather is very good, not cold and not hot. The sunshine is bright. My friend and I went to the park to play. There were many people in the park. Some were running, some were walking, and some were taking photos. We walked for a long time, very tired, but very happy.',
            vocabulary: [
                { cn: '天气', pinyin: 'tiānqì', en: 'weather' },
                { cn: '冷', pinyin: 'lěng', en: 'cold' },
                { cn: '热', pinyin: 'rè', en: 'hot' },
                { cn: '阳光', pinyin: 'yángguāng', en: 'sunshine' },
                { cn: '公园', pinyin: 'gōngyuán', en: 'park' },
                { cn: '跑步', pinyin: 'pǎobù', en: 'run' },
                { cn: '散步', pinyin: 'sànbù', en: 'walk' },
                { cn: '拍照', pinyin: 'pāizhào', en: 'take photos' },
                { cn: '累', pinyin: 'lèi', en: 'tired' },
                { cn: '开心', pinyin: 'kāixīn', en: 'happy' }
            ],
            questions: [
                { q: 'How is the weather today?', qCn: '今天天气怎么样？', options: ['Cold', 'Hot', 'Very good', 'Rainy'], correct: 2 },
                { q: 'Where did they go?', qCn: '他们去哪里？', options: ['School', 'Store', 'Park', 'Restaurant'], correct: 2 },
                { q: 'What were people doing?', qCn: '人们在做什么？', options: ['Only running', 'Only walking', 'Running, walking, taking photos', 'Sleeping'], correct: 2 }
            ]
        },
        {
            id: 're006',
            hsk: 1,
            title: 'My Friend',
            titleCn: '我的朋友',
            passage: '我有一个好朋友，她叫小红。小红很漂亮，也很聪明。她喜欢看书和听音乐。她不喜欢运动。我们经常一起去图书馆学习。她教我英文，我教她中文。',
            pinyin: 'wǒ yǒu yīgè hǎo péngyǒu, tā jiào xiǎo hóng. xiǎo hóng hěn piàoliang, yě hěn cōngmíng. tā xǐhuān kànshū hé tīng yīnyuè. tā bù xǐhuān yùndòng. wǒmen jīngcháng yīqǐ qù túshūguǎn xuéxí. tā jiāo wǒ yīngwén, wǒ jiāo tā zhōngwén.',
            translation: 'I have a good friend, her name is Xiao Hong. Xiao Hong is very beautiful and very smart. She likes reading books and listening to music. She doesn\'t like sports. We often go to the library to study together. She teaches me English, I teach her Chinese.',
            vocabulary: [
                { cn: '朋友', pinyin: 'péngyǒu', en: 'friend' },
                { cn: '漂亮', pinyin: 'piàoliang', en: 'beautiful' },
                { cn: '聪明', pinyin: 'cōngmíng', en: 'smart' },
                { cn: '喜欢', pinyin: 'xǐhuān', en: 'like' },
                { cn: '看书', pinyin: 'kànshū', en: 'read books' },
                { cn: '音乐', pinyin: 'yīnyuè', en: 'music' },
                { cn: '运动', pinyin: 'yùndòng', en: 'sports' },
                { cn: '图书馆', pinyin: 'túshūguǎn', en: 'library' },
                { cn: '教', pinyin: 'jiāo', en: 'teach' }
            ],
            questions: [
                { q: 'What is her friend\'s name?', qCn: '她的朋友叫什么？', options: ['Xiao Ming', 'Xiao Hong', 'Xiao Hua', 'Xiao Li'], correct: 1 },
                { q: 'What does she like?', qCn: '她喜欢什么？', options: ['Sports', 'Reading and music', 'Only reading', 'Only music'], correct: 1 },
                { q: 'What do they do together?', qCn: '他们一起做什么？', options: ['Play sports', 'Go to the library', 'Watch movies', 'Go shopping'], correct: 1 }
            ]
        },
        {
            id: 're007',
            hsk: 1,
            title: 'Going to School',
            titleCn: '去学校',
            passage: '我每天早上八点去学校。学校离我家很近，走路十分钟就到了。我在学校学中文和数学。老师很好，同学也很友好。我很喜欢我的学校。',
            pinyin: 'wǒ měitiān zǎoshang bā diǎn qù xuéxiào. xuéxiào lí wǒ jiā hěn jìn, zǒulù shí fēnzhōng jiù dào le. wǒ zài xuéxiào xué zhōngwén hé shùxué. lǎoshī hěn hǎo, tóngxué yě hěn yǒuhǎo. wǒ hěn xǐhuān wǒ de xuéxiào.',
            translation: 'I go to school at 8am every day. The school is very close to my home, only 10 minutes walking. I study Chinese and math at school. The teacher is very good, and the classmates are also very friendly. I really like my school.',
            vocabulary: [
                { cn: '学校', pinyin: 'xuéxiào', en: 'school' },
                { cn: '近', pinyin: 'jìn', en: 'close/near' },
                { cn: '走路', pinyin: 'zǒulù', en: 'walk' },
                { cn: '分钟', pinyin: 'fēnzhōng', en: 'minute' },
                { cn: '数学', pinyin: 'shùxué', en: 'math' },
                { cn: '同学', pinyin: 'tóngxué', en: 'classmate' },
                { cn: '友好', pinyin: 'yǒuhǎo', en: 'friendly' }
            ],
            questions: [
                { q: 'What time does he go to school?', qCn: '他几点去学校？', options: ['7am', '8am', '9am', '10am'], correct: 1 },
                { q: 'How far is the school?', qCn: '学校离家远吗？', options: ['Very far', 'Not far', 'Very close', 'Not close'], correct: 2 },
                { q: 'What subjects does he study?', qCn: '他学什么？', options: ['Only Chinese', 'Only math', 'Chinese and math', 'English and math'], correct: 2 }
            ]
        },
        {
            id: 're008',
            hsk: 1,
            title: 'My Room',
            titleCn: '我的房间',
            passage: '我的房间不大，但是很干净。有一张床、一张桌子和一把椅子。桌子上有很多书和一台电脑。墙上有一张画。窗户旁边有一盆花。我很喜欢我的房间。',
            pinyin: 'wǒ de fángjiān bù dà, dànshì hěn gānjìng. yǒu yī zhāng chuáng, yī zhāng zhuōzi hé yī bǎ yǐzi. zhuōzi shàng yǒu hěn duō shū hé yī tái diànnǎo. qiáng shàng yǒu yī zhāng huà. chuānghu pángbiān yǒu yī pén huā. wǒ hěn xǐhuān wǒ de fángjiān.',
            translation: 'My room is not big, but it is very clean. There is a bed, a desk, and a chair. There are many books and a computer on the desk. There is a painting on the wall. There is a pot of flowers next to the window. I really like my room.',
            vocabulary: [
                { cn: '房间', pinyin: 'fángjiān', en: 'room' },
                { cn: '干净', pinyin: 'gānjìng', en: 'clean' },
                { cn: '床', pinyin: 'chuáng', en: 'bed' },
                { cn: '桌子', pinyin: 'zhuōzi', en: 'desk/table' },
                { cn: '椅子', pinyin: 'yǐzi', en: 'chair' },
                { cn: '电脑', pinyin: 'diànnǎo', en: 'computer' },
                { cn: '墙', pinyin: 'qiáng', en: 'wall' },
                { cn: '画', pinyin: 'huà', en: 'painting' },
                { cn: '窗户', pinyin: 'chuānghu', en: 'window' },
                { cn: '花', pinyin: 'huā', en: 'flower' }
            ],
            questions: [
                { q: 'Is the room big?', qCn: '房间大吗？', options: ['Very big', 'Not big', 'Small', 'Very small'], correct: 1 },
                { q: 'What is on the desk?', qCn: '桌子上有什么？', options: ['Only books', 'Only a computer', 'Books and a computer', 'Nothing'], correct: 2 },
                { q: 'What is next to the window?', qCn: '窗户旁边有什么？', options: ['A bed', 'A desk', 'A flower', 'A painting'], correct: 2 }
            ]
        },
        {
            id: 're009',
            hsk: 1,
            title: 'My Birthday',
            titleCn: '我的生日',
            passage: '昨天是我的生日。我请了很多朋友来我家。妈妈做了一个大蛋糕。爸爸买了很多好吃的菜。我们一起吃蛋糕，唱歌，玩游戏。我收到了很多礼物。我非常高兴。',
            pinyin: 'zuótiān shì wǒ de shēngrì. wǒ qǐng le hěn duō péngyǒu lái wǒ jiā. māma zuò le yīgè dàn dàn gāo. bàba mǎi le hěn duō hǎochī de cài. wǒmen yīqǐ chī dàn gāo, chànggē, wán yóuxì. wǒ shōu dào le hěn duō lǐwù. wǒ fēicháng gāoxìng.',
            translation: 'Yesterday was my birthday. I invited many friends to my home. Mom made a big cake. Dad bought a lot of delicious food. We ate cake, sang songs, and played games together. I received many gifts. I was very happy.',
            vocabulary: [
                { cn: '生日', pinyin: 'shēngrì', en: 'birthday' },
                { cn: '请', pinyin: 'qǐng', en: 'invite' },
                { cn: '蛋糕', pinyin: 'dàngāo', en: 'cake' },
                { cn: '唱歌', pinyin: 'chànggē', en: 'sing songs' },
                { cn: '游戏', pinyin: 'yóuxì', en: 'game' },
                { cn: '礼物', pinyin: 'lǐwù', en: 'gift' },
                { cn: '高兴', pinyin: 'gāoxìng', en: 'happy' }
            ],
            questions: [
                { q: 'When was his birthday?', qCn: '他的生日是什么时候？', options: ['Today', 'Yesterday', 'Tomorrow', 'Last week'], correct: 1 },
                { q: 'Who made the cake?', qCn: '谁做了蛋糕？', options: ['Dad', 'Mom', 'Friends', 'He'], correct: 1 },
                { q: 'What did they do?', qCn: '他们做了什么？', options: ['Only ate cake', 'Ate cake, sang, played games', 'Only sang', 'Only played games'], correct: 1 }
            ]
        },
        {
            id: 're010',
            hsk: 1,
            title: 'At the Hospital',
            titleCn: '在医院',
            passage: '今天我不舒服，头疼，还有点发烧。我去了医院。医生给我检查了一下。医生说我感冒了，给我开了一些药。医生让我多喝水，好好休息。我吃了药，好多了。',
            pinyin: 'jīntiān wǒ bù shūfu, tóuténg, hái yǒu diǎn fāshāo. wǒ qù le yīyuàn. yīshēng gěi wǒ jiǎnchá le yīxià. yīshēng shuō wǒ gǎnmào le, gěi wǒ kāi le yīxiē yào. yīshēng ràng wǒ duō hē shuǐ, hǎohǎo xiūxi. wǒ chī le yào, hǎo duō le.',
            translation: 'Today I don\'t feel well, I have a headache and a slight fever. I went to the hospital. The doctor examined me. The doctor said I have a cold and prescribed some medicine. The doctor told me to drink more water and rest well. I took the medicine and feel much better.',
            vocabulary: [
                { cn: '舒服', pinyin: 'shūfu', en: 'comfortable' },
                { cn: '头疼', pinyin: 'tóuténg', en: 'headache' },
                { cn: '发烧', pinyin: 'fāshāo', en: 'fever' },
                { cn: '医院', pinyin: 'yīyuàn', en: 'hospital' },
                { cn: '检查', pinyin: 'jiǎnchá', en: 'examine' },
                { cn: '感冒', pinyin: 'gǎnmào', en: 'cold' },
                { cn: '药', pinyin: 'yào', en: 'medicine' },
                { cn: '休息', pinyin: 'xiūxi', en: 'rest' }
            ],
            questions: [
                { q: 'What was wrong with him?', qCn: '他怎么了？', options: ['Stomachache', 'Headache and fever', 'Toothache', 'Backache'], correct: 1 },
                { q: 'What did the doctor say?', qCn: '医生说什么？', options: ['He has a fever', 'He has a cold', 'He has a stomachache', 'Nothing'], correct: 1 },
                { q: 'What did the doctor tell him to do?', qCn: '医生让他做什么？', options: ['Drink more water and rest', 'Exercise more', 'Eat more', 'Work harder'], correct: 0 }
            ]
        }
    ],

    // Get passages by HSK level
    getByHSK(level) {
        return this.passages.filter(p => p.hsk === level);
    },

    // Get random passage
    getRandom(level = null) {
        let passages = level ? this.getByHSK(level) : this.passages;
        return passages[Math.floor(Math.random() * passages.length)];
    },

    // Get total count
    get count() {
        return this.passages.length;
    }
};

window.ReadingExamples = ReadingExamples;

(function() {
    if (typeof ReadingData !== 'undefined' && ReadingExamples.passages) {
        ReadingExamples.passages.forEach(function(p) {
            var ex = { id: p.id, title: p.titleCn || p.title, passage: p.passage, pinyin: p.pinyin, questions: p.questions };
            if (!ReadingData.passageReading.find(function(r) { return r.id === p.id; })) {
                ReadingData.passageReading.push(ex);
            }
        });
        ReadingData.totalCount = ReadingData.passageReading.length + ReadingData.characterMatch.length + ReadingData.sentenceComplete.length + ReadingData.speedReading.length + ReadingData.radicalLearn.length + ReadingData.contextClues.length;
    }
})();

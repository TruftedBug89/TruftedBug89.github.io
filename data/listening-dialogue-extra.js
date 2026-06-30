const ListeningDialogueExtra = {
    dialogue: [
{
    id: 'le300',
    type: 'dialogue',
    difficulty: 'easy',
    title: 'æ‰“æ‹›å‘¼',
    meaning: 'Greetings',
    turns: [
        { speaker: 'A', chinese: 'ä½ å¥½ï¼ä½ å«ä»€ä¹ˆåå­—ï¼Ÿ', pinyin: 'ni3 hao3! ni3 jiao4 shen2 me ming2 zi4?', meaning: 'Hello! What is your name?' },
        { speaker: 'B', chinese: 'æˆ‘å«å°çŽ‹ã€‚ä½ å‘¢ï¼Ÿ', pinyin: 'wo3 jiao4 xiao3 wang2. ni3 ne?', meaning: 'My name is Xiao Wang. And you?' },
        { speaker: 'A', chinese: 'æˆ‘å«å°æŽã€‚å¾ˆé«˜å…´è®¤è¯†ä½ ã€‚', pinyin: 'wo3 jiao4 xiao3 li3. hen3 gao1 xing4 ren4 shi2 ni3.', meaning: 'My name is Xiao Li. Nice to meet you.' },
        { speaker: 'B', chinese: 'æˆ‘ä¹Ÿå¾ˆé«˜å…´è®¤è¯†ä½ ï¼', pinyin: 'wo3 ye3 hen3 gao1 xing4 ren4 shi2 ni3!', meaning: 'Nice to meet you too!' }
    ],
    questions: [
        { question: 'Bå«ä»€ä¹ˆåå­—ï¼Ÿ', options: ['å°æŽ', 'å°çŽ‹', 'å°å¼ ', 'å°èµµ'], correct: 1 }
    ]
},
{
    id: 'le301',
    type: 'dialogue',
    difficulty: 'easy',
    title: 'å¤©æ°”',
    meaning: 'The Weather',
    turns: [
        { speaker: 'A', chinese: 'ä»Šå¤©å¤©æ°”çœŸå¥½ï¼', pinyin: 'jin1 tian1 tian1 qi4 zhen1 hao3!', meaning: 'The weather is really nice today!' },
        { speaker: 'B', chinese: 'æ˜¯å•Šï¼Œä¸å†·ä¹Ÿä¸çƒ­ã€‚', pinyin: 'shi4 a, bu4 leng3 ye3 bu4 re4.', meaning: 'Yes, not cold and not hot.' },
        { speaker: 'A', chinese: 'æ˜Žå¤©ä¼šä¸‹é›¨å—ï¼Ÿ', pinyin: 'ming2 tian1 hui4 xia4 yu3 ma?', meaning: 'Will it rain tomorrow?' },
        { speaker: 'B', chinese: 'ä¸ä¼šï¼Œæ˜Žå¤©ä¹Ÿæ˜¯æ™´å¤©ã€‚', pinyin: 'bu4 hui4, ming2 tian1 ye3 shi4 qing2 tian1.', meaning: 'No, tomorrow will also be sunny.' }
    ],
    questions: [
        { question: 'ä»Šå¤©å¤©æ°”æ€Žä¹ˆæ ·ï¼Ÿ', options: ['ä¸‹é›¨', 'ä¸‹é›ª', 'å¾ˆå¥½', 'å¾ˆçƒ­'], correct: 2 }
    ]
},
{
    id: 'le302',
    type: 'dialogue',
    difficulty: 'easy',
    title: 'åœ¨å’–å•¡åº—',
    meaning: 'At the Coffee Shop',
    turns: [
        { speaker: 'A', chinese: 'ä½ å¥½ï¼Œæˆ‘è¦ä¸€æ¯å’–å•¡ã€‚', pinyin: 'ni3 hao3, wo3 yao4 yi4 bei1 ka1 fei1.', meaning: 'Hello, I would like a cup of coffee.' },
        { speaker: 'B', chinese: 'ä½ è¦çƒ­çš„è¿˜æ˜¯å†°çš„ï¼Ÿ', pinyin: 'ni3 yao4 re4 de hai2 shi4 bing1 de?', meaning: 'Do you want hot or iced?' },
        { speaker: 'A', chinese: 'çƒ­çš„ï¼ŒåŠ ç‰›å¥¶å’Œç³–ã€‚', pinyin: 're4 de, jia1 niu2 nai3 he2 tang2.', meaning: 'Hot, with milk and sugar.' },
        { speaker: 'B', chinese: 'å¥½çš„ï¼Œä¸€å…±äºŒåå—é’±ã€‚', pinyin: 'hao3 de, yi2 gong4 er4 shi2 kuai4 qian2.', meaning: 'OK, that will be 20 yuan total.' }
    ],
    questions: [
        { question: 'ä»–è¦äº†ä»€ä¹ˆï¼Ÿ', options: ['èŒ¶', 'å’–å•¡', 'å¯ä¹', 'ç‰›å¥¶'], correct: 1 }
    ]
},
{
    id: 'le303',
    type: 'dialogue',
    difficulty: 'easy',
    title: 'é—®è·¯',
    meaning: 'Asking for Directions',
    turns: [
        { speaker: 'A', chinese: 'è¯·é—®ï¼Œåœ°é“ç«™åœ¨å“ªé‡Œï¼Ÿ', pinyin: 'qing3 wen4, di4 tie3 zhan4 zai4 na3 li3?', meaning: 'Excuse me, where is the subway station?' },
        { speaker: 'B', chinese: 'å¾€å‰èµ°ï¼Œç„¶åŽå³è½¬ã€‚', pinyin: 'wang3 qian2 zou3, ran2 hou4 you4 zhuan3.', meaning: 'Go straight, then turn right.' },
        { speaker: 'A', chinese: 'è¿œä¸è¿œï¼Ÿ', pinyin: 'yuan3 bu4 yuan3?', meaning: 'Is it far?' },
        { speaker: 'B', chinese: 'ä¸è¿œï¼Œèµ°äº”åˆ†é’Ÿå°±åˆ°ã€‚', pinyin: 'bu4 yuan3, zou3 wu3 fen1 zhong1 jiu4 dao4.', meaning: 'Not far, just a 5-minute walk.' }
    ],
    questions: [
        { question: 'ä»–è¦åŽ»å“ªé‡Œï¼Ÿ', options: ['å…¬äº¤ç«™', 'åœ°é“ç«™', 'ç«è½¦ç«™', 'æœºåœº'], correct: 1 }
    ]
},
{
    id: 'le304',
    type: 'dialogue',
    difficulty: 'easy',
    title: 'ä¹°ä¸œè¥¿',
    meaning: 'Shopping',
    turns: [
        { speaker: 'A', chinese: 'è¿™ä¸ªè‹¹æžœå¤šå°‘é’±ä¸€æ–¤ï¼Ÿ', pinyin: 'zhe4 ge4 ping2 guo3 duo1 shao3 qian2 yi4 jin1?', meaning: 'How much per jin for these apples?' },
        { speaker: 'B', chinese: 'äº”å—é’±ä¸€æ–¤ï¼Œå¾ˆç”œçš„ã€‚', pinyin: 'wu3 kuai4 qian2 yi4 jin1, hen3 tian2 de.', meaning: '5 yuan per jin, they are very sweet.' },
        { speaker: 'A', chinese: 'å¥½çš„ï¼Œæˆ‘ä¹°ä¸¤æ–¤ã€‚', pinyin: 'hao3 de, wo3 mai3 liang3 jin1.', meaning: 'OK, I will buy two jin.' },
        { speaker: 'B', chinese: 'ä¸€å…±åå—é’±ï¼Œè°¢è°¢ã€‚', pinyin: 'yi2 gong4 shi2 kuai4 qian2, xie4 xie.', meaning: '10 yuan in total, thank you.' }
    ],
    questions: [
        { question: 'è‹¹æžœå¤šå°‘é’±ä¸€æ–¤ï¼Ÿ', options: ['ä¸‰å—', 'äº”å—', 'åå—', 'ä¸¤å—é’±'], correct: 1 }
    ]
},
{
    id: 'le305',
    type: 'dialogue',
    difficulty: 'easy',
    title: 'æ‰“ç”µè¯',
    meaning: 'Making a Phone Call',
    turns: [
        { speaker: 'A', chinese: 'å–‚ï¼Œä½ å¥½ï¼è¯·é—®å°æŽåœ¨å—ï¼Ÿ', pinyin: 'wei2, ni3 hao3! qing3 wen4 xiao3 li3 zai4 ma?', meaning: 'Hello! Is Xiao Li there?' },
        { speaker: 'B', chinese: 'ä»–ä¸åœ¨ï¼Œä»–å‡ºåŽ»äº†ã€‚', pinyin: 'ta1 bu2 zai4, ta1 chu1 qu4 le.', meaning: 'He is not here, he went out.' },
        { speaker: 'A', chinese: 'ä»–ä»€ä¹ˆæ—¶å€™å›žæ¥ï¼Ÿ', pinyin: 'ta1 shen2 me shi2 hou4 hui2 lai2?', meaning: 'When will he come back?' },
        { speaker: 'B', chinese: 'ä¸‹åˆå››ç‚¹å›žæ¥ã€‚', pinyin: 'xia4 wu3 si4 dian3 hui2 lai2.', meaning: 'He will come back at 4 PM.' }
    ],
    questions: [
        { question: 'å°æŽä»€ä¹ˆæ—¶å€™å›žæ¥ï¼Ÿ', options: ['ä¸Šåˆå››ç‚¹', 'ä¸‹åˆå››ç‚¹', 'ä¸‹åˆäº”ç‚¹', 'æ™šä¸Š'], correct: 1 }
    ]
},
{
    id: 'le306',
    type: 'dialogue',
    difficulty: 'easy',
    title: 'é“æ­‰',
    meaning: 'Apologizing',
    turns: [
        { speaker: 'A', chinese: 'å¯¹ä¸èµ·ï¼Œæˆ‘è¿Ÿåˆ°äº†ã€‚', pinyin: 'dui4 bu4 qi3, wo3 chi2 dao4 le.', meaning: 'Sorry, I am late.' },
        { speaker: 'B', chinese: 'æ²¡å…³ç³»ï¼Œä½ ç­‰äº†å¾ˆä¹…å—ï¼Ÿ', pinyin: 'mei2 guan1 xi, ni3 deng3 le hen3 jiu3 ma?', meaning: 'It\'s OK. Did you wait a long time?' },
        { speaker: 'A', chinese: 'æ²¡æœ‰ï¼Œæˆ‘åˆšåˆ°äº”åˆ†é’Ÿã€‚', pinyin: 'mei2 you3, wo3 gang1 dao4 wu3 fen1 zhong1.', meaning: 'No, I just arrived 5 minutes ago.' },
        { speaker: 'B', chinese: 'é‚£æˆ‘ä»¬è¿›åŽ»å§ã€‚', pinyin: 'na4 wo3 men jin4 qu4 ba.', meaning: 'Let\'s go in then.' }
    ],
    questions: [
        { question: 'Aä¸ºä»€ä¹ˆé“æ­‰ï¼Ÿ', options: ['è¿Ÿåˆ°äº†', 'å¿˜äº†', 'è¯´äº†åè¯', 'æ‰“ç ´äº†ä¸œè¥¿'], correct: 0 }
    ]
},
{
    id: 'le307',
    type: 'dialogue',
    difficulty: 'easy',
    title: 'ç”Ÿæ—¥å¿«ä¹',
    meaning: 'Happy Birthday',
    turns: [
        { speaker: 'A', chinese: 'ç”Ÿæ—¥å¿«ä¹ï¼è¿™æ˜¯ç»™ä½ çš„ç¤¼ç‰©ã€‚', pinyin: 'sheng1 ri4 kuai4 le4! zhe4 shi4 gei3 ni3 de li3 wu4.', meaning: 'Happy birthday! This is a gift for you.' },
        { speaker: 'B', chinese: 'è°¢è°¢ä½ ï¼æ˜¯ä»€ä¹ˆï¼Ÿ', pinyin: 'xie4 xie ni3! shi4 shen2 me?', meaning: 'Thank you! What is it?' },
        { speaker: 'A', chinese: 'ä½ æ‰“å¼€çœ‹çœ‹å°±çŸ¥é“äº†ã€‚', pinyin: 'ni3 da3 kai1 kan4 kan4 jiu4 zhi1 dao4 le.', meaning: 'Open it and you will find out.' },
        { speaker: 'B', chinese: 'å“‡ï¼Œæ˜¯ä¸€æœ¬ä¹¦ï¼æˆ‘å¾ˆå–œæ¬¢ï¼', pinyin: 'wa, shi4 yi4 ben3 shu1! wo3 hen3 xi3 huan1!', meaning: 'Wow, it\'s a book! I really like it!' }
    ],
    questions: [
        { question: 'ç¤¼ç‰©æ˜¯ä»€ä¹ˆï¼Ÿ', options: ['è¡£æœ', 'ä¹¦', 'æ‰‹æœº', 'æ‰‹è¡¨'], correct: 1 }
    ]
},
{
    id: 'le308',
    type: 'dialogue',
    difficulty: 'easy',
    title: 'é—®æ—¶é—´',
    meaning: 'Asking the Time',
    turns: [
        { speaker: 'A', chinese: 'è¯·é—®ï¼ŒçŽ°åœ¨å‡ ç‚¹äº†ï¼Ÿ', pinyin: 'qing3 wen4, xian4 zai4 ji3 dian3 le?', meaning: 'Excuse me, what time is it now?' },
        { speaker: 'B', chinese: 'çŽ°åœ¨åç‚¹åŠã€‚', pinyin: 'xian4 zai4 shi2 dian3 ban4.', meaning: 'It is 10:30 now.' },
        { speaker: 'A', chinese: 'è°¢è°¢ï¼æˆ‘å¿«è¿Ÿåˆ°äº†ã€‚', pinyin: 'xie4 xie! wo3 kuai4 chi2 dao4 le.', meaning: 'Thank you! I am almost late.' },
        { speaker: 'B', chinese: 'ä¸å®¢æ°”ï¼Œå¿«åŽ»å§ï¼', pinyin: 'bu2 ke4 qi4, kuai4 qu4 ba!', meaning: 'You\'re welcome, hurry up!' }
    ],
    questions: [
        { question: 'çŽ°åœ¨å‡ ç‚¹ï¼Ÿ', options: ['ä¹ç‚¹åŠ', 'åç‚¹', 'åç‚¹åŠ', 'åä¸€ç‚¹'], correct: 2 }
    ]
},
{
    id: 'le309',
    type: 'dialogue',
    difficulty: 'easy',
    title: 'è°¢è°¢ä¸Žå†è§',
    meaning: 'Thanks and Goodbye',
    turns: [
        { speaker: 'A', chinese: 'æ—¶é—´ä¸æ—©äº†ï¼Œæˆ‘è¦èµ°äº†ã€‚', pinyin: 'shi2 jian1 bu4 zao3 le, wo3 yao4 zou3 le.', meaning: 'It\'s getting late, I have to go.' },
        { speaker: 'B', chinese: 'å¥½çš„ï¼Œè°¢è°¢ä½ ä»Šå¤©è¿‡æ¥ã€‚', pinyin: 'hao3 de, xie4 xie ni3 jin1 tian1 guo4 lai2.', meaning: 'OK, thank you for coming today.' },
        { speaker: 'A', chinese: 'è°¢è°¢ä½ çš„æ‹›å¾…ã€‚å†è§ï¼', pinyin: 'xie4 xie ni3 de zhao1 dai4. zai4 jian4!', meaning: 'Thank you for your hospitality. Goodbye!' },
        { speaker: 'B', chinese: 'å†è§ï¼è·¯ä¸Šå°å¿ƒï¼', pinyin: 'zai4 jian4! lu4 shang4 xiao3 xin1!', meaning: 'Goodbye! Be careful on the way!' }
    ],
    questions: [
        { question: 'Aè¦åšä»€ä¹ˆï¼Ÿ', options: ['åƒé¥­', 'èµ°äº†', 'ç¡è§‰', 'çœ‹ç”µè§†'], correct: 1 }
    ]
},
{
    id: 'le310',
    type: 'dialogue',
    difficulty: 'medium',
    title: 'åœ¨é¤åŽ…',
    meaning: 'At the Restaurant',
    turns: [
        { speaker: 'A', chinese: 'æ¬¢è¿Žå…‰ä¸´ï¼è¯·é—®å‡ ä½ï¼Ÿ', pinyin: 'huan1 ying2 guang1 lin2! qing3 wen4 ji3 wei4?', meaning: 'Welcome! How many people?' },
        { speaker: 'B', chinese: 'ä¸¤ä½ã€‚æœ‰é çª—çš„åº§ä½å—ï¼Ÿ', pinyin: 'liang3 wei4. you3 kao4 chuang1 de zuo4 wei4 ma?', meaning: 'Two. Do you have a window seat?' },
        { speaker: 'A', chinese: 'æœ‰çš„ï¼Œè¯·è·Ÿæˆ‘æ¥ã€‚', pinyin: 'you3 de, qing3 gen1 wo3 lai2.', meaning: 'Yes, please follow me.' },
        { speaker: 'B', chinese: 'è¯·ç»™æˆ‘ä»¬èœå•ã€‚', pinyin: 'qing3 gei3 wo3 men cai4 dan1.', meaning: 'Please give us the menu.' },
        { speaker: 'A', chinese: 'å¥½çš„ï¼Œæœ‰ä»€ä¹ˆéœ€è¦éšæ—¶å«æˆ‘ã€‚', pinyin: 'hao3 de, you3 shen2 me xu1 yao4 sui2 shi2 jiao4 wo3.', meaning: 'Sure, call me anytime if you need anything.' }
    ],
    questions: [
        { question: 'ä»–ä»¬å‡ ä¸ªäººï¼Ÿ', options: ['ä¸€ä¸ª', 'ä¸¤ä¸ª', 'ä¸‰ä¸ª', 'å››ä¸ª'], correct: 1 },
        { question: 'ä»–ä»¬æƒ³è¦ä»€ä¹ˆåº§ä½ï¼Ÿ', options: ['é é—¨çš„', 'é çª—çš„', 'æ¥¼ä¸Šçš„', 'å¤–é¢çš„'], correct: 1 }
    ]
},
{
    id: 'le311',
    type: 'dialogue',
    difficulty: 'medium',
    title: 'åœ¨é…’åº—',
    meaning: 'At the Hotel',
    turns: [
        { speaker: 'A', chinese: 'ä½ å¥½ï¼Œæˆ‘æƒ³åŠžç†å…¥ä½ã€‚', pinyin: 'ni3 hao3, wo3 xiang3 ban4 li3 ru4 zhu4.', meaning: 'Hello, I would like to check in.' },
        { speaker: 'B', chinese: 'ä½ æœ‰é¢„è®¢å—ï¼Ÿ', pinyin: 'ni3 you3 yu4 ding4 ma?', meaning: 'Do you have a reservation?' },
        { speaker: 'A', chinese: 'æœ‰ï¼Œæˆ‘å§“çŽ‹ã€‚', pinyin: 'you3, wo3 xing4 wang2.', meaning: 'Yes, my last name is Wang.' },
        { speaker: 'B', chinese: 'æ‰¾åˆ°äº†ã€‚ä½ä¸‰ä¸ªæ™šä¸Šï¼Œå¯¹å—ï¼Ÿ', pinyin: 'zhao3 dao4 le. zhu4 san1 ge4 wan3 shang4, dui4 ma?', meaning: 'Found it. Three nights, correct?' },
        { speaker: 'A', chinese: 'å¯¹ã€‚æˆ¿é—´æœ‰æ— çº¿ç½‘å—ï¼Ÿ', pinyin: 'dui4. fang2 jian1 you3 wu2 xian4 wang3 ma?', meaning: 'Yes. Does the room have Wi-Fi?' },
        { speaker: 'B', chinese: 'æœ‰çš„ï¼Œè¿™æ˜¯ä½ çš„æˆ¿å¡ã€‚', pinyin: 'you3 de, zhe4 shi4 ni3 de fang2 ka3.', meaning: 'Yes, here is your room key.' }
    ],
    questions: [
        { question: 'ä»–è¦ä½å‡ ä¸ªæ™šä¸Šï¼Ÿ', options: ['ä¸€ä¸ª', 'ä¸¤ä¸ª', 'ä¸‰ä¸ª', 'å››ä¸ª'], correct: 2 },
        { question: 'ä»–é—®äº†ä»€ä¹ˆï¼Ÿ', options: ['æ—©é¤', 'æ— çº¿ç½‘', 'æ¸¸æ³³æ± ', 'åœè½¦åœº'], correct: 1 }
    ]
},
{
    id: 'le312',
    type: 'dialogue',
    difficulty: 'medium',
    title: 'åœ¨æœºåœº',
    meaning: 'At the Airport',
    turns: [
        { speaker: 'A', chinese: 'è¯·ç»™æˆ‘ä½ çš„æŠ¤ç…§å’Œæœºç¥¨ã€‚', pinyin: 'qing3 gei3 wo3 ni3 de hu4 zhao4 he2 ji1 piao4.', meaning: 'Please give me your passport and ticket.' },
        { speaker: 'B', chinese: 'ç»™ä½ ã€‚æˆ‘è¦æ‰˜è¿è¡ŒæŽã€‚', pinyin: 'gei3 ni3. wo3 yao4 tuo1 yun4 xing2 li3.', meaning: 'Here you are. I need to check my luggage.' },
        { speaker: 'A', chinese: 'è¡ŒæŽè¶…é‡äº†ï¼Œéœ€è¦åŠ é’±ã€‚', pinyin: 'xing2 li3 chao1 zhong4 le, xu1 yao4 jia1 qian2.', meaning: 'Your luggage is overweight, you need to pay extra.' },
        { speaker: 'B', chinese: 'åŠ å¤šå°‘é’±ï¼Ÿ', pinyin: 'jia1 duo1 shao3 qian2?', meaning: 'How much extra?' },
        { speaker: 'A', chinese: 'ä¸¤ç™¾å—ã€‚è¿™æ˜¯ä½ çš„ç™»æœºç‰Œã€‚', pinyin: 'liang3 bai3 kuai4. zhe4 shi4 ni3 de deng1 ji1 pai2.', meaning: '200 yuan. Here is your boarding pass.' },
        { speaker: 'B', chinese: 'ç™»æœºå£æ˜¯å‡ å·ï¼Ÿ', pinyin: 'deng1 ji1 kou3 shi4 ji3 hao4?', meaning: 'What is the gate number?' },
        { speaker: 'A', chinese: 'åäº”å·ç™»æœºå£ã€‚', pinyin: 'shi2 wu3 hao4 deng1 ji1 kou3.', meaning: 'Gate 15.' }
    ],
    questions: [
        { question: 'è¡ŒæŽè¶…é‡è¦åŠ å¤šå°‘é’±ï¼Ÿ', options: ['ä¸€ç™¾å—', 'ä¸¤ç™¾å—', 'ä¸‰ç™¾å—', 'äº”åå—'], correct: 1 },
        { question: 'ç™»æœºå£æ˜¯å‡ å·ï¼Ÿ', options: ['åå·', 'åäºŒå·', 'åäº”å·', 'äºŒåå·'], correct: 2 }
    ]
},
{
    id: 'le313',
    type: 'dialogue',
    difficulty: 'medium',
    title: 'ä¹°è¡£æœ',
    meaning: 'Buying Clothes',
    turns: [
        { speaker: 'A', chinese: 'æˆ‘å¯ä»¥è¯•ç©¿è¿™ä»¶è¡£æœå—ï¼Ÿ', pinyin: 'wo3 ke3 yi3 shi4 chuan1 zhe4 jian4 yi1 fu2 ma?', meaning: 'Can I try on this clothing?' },
        { speaker: 'B', chinese: 'å½“ç„¶å¯ä»¥ï¼Œè¯•è¡£é—´åœ¨é‚£é‡Œã€‚', pinyin: 'dang1 ran2 ke3 yi3, shi4 yi1 jian1 zai4 na4 li3.', meaning: 'Of course, the fitting room is over there.' },
        { speaker: 'A', chinese: 'æˆ‘è§‰å¾—æœ‰ç‚¹å°ï¼Œæœ‰å¤§ä¸€å·çš„å—ï¼Ÿ', pinyin: 'wo3 jue2 de you3 dian3 xiao3, you3 da4 yi1 hao4 de ma?', meaning: 'I think it\'s a bit small, do you have a larger size?' },
        { speaker: 'B', chinese: 'æœ‰çš„ï¼Œæˆ‘ç»™ä½ æ‹¿ã€‚', pinyin: 'you3 de, wo3 gei3 ni3 na2.', meaning: 'Yes, I will get it for you.' },
        { speaker: 'A', chinese: 'è¿™ä»¶å¾ˆåˆé€‚ã€‚å¤šå°‘é’±ï¼Ÿ', pinyin: 'zhe4 jian4 hen3 he2 shi4. duo1 shao3 qian2?', meaning: 'This one fits well. How much?' },
        { speaker: 'B', chinese: 'ä¸‰ç™¾äº”åå—ã€‚çŽ°åœ¨æ‰“å…«æŠ˜ã€‚', pinyin: 'san1 bai3 wu3 shi2 kuai4. xian4 zai4 da3 ba1 zhe2.', meaning: '350 yuan. It is 20% off now.' }
    ],
    questions: [
        { question: 'è¡£æœåŽŸä»·å¤šå°‘é’±ï¼Ÿ', options: ['ä¸¤ç™¾äº”åå—', 'ä¸‰ç™¾äº”åå—', 'å››ç™¾äº”åå—', 'äº”ç™¾å—'], correct: 1 },
        { question: 'çŽ°åœ¨æ‰“å‡ æŠ˜ï¼Ÿ', options: ['ä¹æŠ˜', 'å…«æŠ˜', 'ä¸ƒæŠ˜', 'å…­æŠ˜'], correct: 1 }
    ]
},
{
    id: 'le314',
    type: 'dialogue',
    difficulty: 'medium',
    title: 'åœ¨åŒ»é™¢',
    meaning: 'At the Hospital',
    turns: [
        { speaker: 'A', chinese: 'ä½ å“ªé‡Œä¸èˆ’æœï¼Ÿ', pinyin: 'ni3 na3 li3 bu4 shu1 fu2?', meaning: 'Where do you feel unwell?' },
        { speaker: 'B', chinese: 'æˆ‘å¤´ç–¼ã€å’³å—½ã€è¿˜æœ‰ç‚¹å„¿å‘çƒ§ã€‚', pinyin: 'wo3 tou2 teng2, ke2 sou4, hai2 you3 dian3 er2 fa1 shao1.', meaning: 'I have a headache, cough, and a slight fever.' },
        { speaker: 'A', chinese: 'é‡ä¸€ä¸‹ä½“æ¸©å§ã€‚å¼ å˜´ã€‚', pinyin: 'liang2 yi2 xia4 ti3 wen1 ba. zhang1 zui3.', meaning: 'Let\'s check your temperature. Open your mouth.' },
        { speaker: 'B', chinese: 'ä¸¥é‡å—ï¼Ÿ', pinyin: 'yan2 zhong4 ma?', meaning: 'Is it serious?' },
        { speaker: 'A', chinese: 'ä¸ä¸¥é‡ï¼Œæ˜¯æ„Ÿå†’ã€‚æˆ‘ç»™ä½ å¼€ç‚¹è¯ã€‚', pinyin: 'bu4 yan2 zhong4, shi4 gan3 mao4. wo3 gei3 ni3 kai1 dian3 yao4.', meaning: 'Not serious, it\'s a cold. I will prescribe some medicine for you.' },
        { speaker: 'B', chinese: 'è°¢è°¢åŒ»ç”Ÿã€‚ä¸€å¤©åƒå‡ æ¬¡ï¼Ÿ', pinyin: 'xie4 xie yi1 sheng1. yi4 tian1 chi1 ji3 ci4?', meaning: 'Thank you doctor. How many times a day should I take it?' }
    ],
    questions: [
        { question: 'Bæœ‰ä»€ä¹ˆç—‡çŠ¶ï¼Ÿ', options: ['èƒƒç–¼', 'å¤´ç–¼å’³å—½', 'è…¿ç–¼', 'ç‰™ç–¼'], correct: 1 },
        { question: 'åŒ»ç”Ÿè¯´ä»–æ€Žä¹ˆäº†ï¼Ÿ', options: ['å‘çƒ§', 'æ„Ÿå†’', 'è‚šå­ç–¼', 'è¿‡æ•'], correct: 1 }
    ]
},
{
    id: 'le315',
    type: 'dialogue',
    difficulty: 'medium',
    title: 'åœ¨è¯åº—',
    meaning: 'At the Pharmacy',
    turns: [
        { speaker: 'A', chinese: 'ä½ å¥½ï¼Œæˆ‘æƒ³ä¹°æ„Ÿå†’è¯ã€‚', pinyin: 'ni3 hao3, wo3 xiang3 mai3 gan3 mao4 yao4.', meaning: 'Hello, I want to buy cold medicine.' },
        { speaker: 'B', chinese: 'ä½ æœ‰ä»€ä¹ˆç—‡çŠ¶ï¼Ÿ', pinyin: 'ni3 you3 shen2 me zheng4 zhuang4?', meaning: 'What symptoms do you have?' },
        { speaker: 'A', chinese: 'æµé¼»æ¶•ï¼Œå—“å­ç–¼ã€‚', pinyin: 'liu2 bi2 ti4, sang3 zi teng2.', meaning: 'Runny nose and sore throat.' },
        { speaker: 'B', chinese: 'è¿™ä¸ªè¯æ•ˆæžœå¾ˆå¥½ã€‚æ¯æ¬¡ä¸¤ç‰‡ã€‚', pinyin: 'zhe4 ge4 yao4 xiao4 guo3 hen3 hao3. mei3 ci4 liang3 pian4.', meaning: 'This medicine works very well. Two tablets each time.' },
        { speaker: 'A', chinese: 'ä¸€å¤©å‡ æ¬¡ï¼Ÿ', pinyin: 'yi4 tian1 ji3 ci4?', meaning: 'How many times a day?' },
        { speaker: 'B', chinese: 'ä¸€å¤©ä¸‰æ¬¡ï¼Œé¥­åŽåƒã€‚', pinyin: 'yi4 tian1 san1 ci4, fan4 hou4 chi1.', meaning: 'Three times a day, after meals.' }
    ],
    questions: [
        { question: 'æ¯æ¬¡åƒå‡ ç‰‡ï¼Ÿ', options: ['ä¸€ç‰‡', 'ä¸¤ç‰‡', 'ä¸‰ç‰‡', 'å››ç‰‡'], correct: 1 }
    ]
},
{
    id: 'le316',
    type: 'dialogue',
    difficulty: 'medium',
    title: 'æ‰“è½¦',
    meaning: 'Taking a Taxi',
    turns: [
        { speaker: 'A', chinese: 'å¸ˆå‚…ï¼ŒåŽ»ç«è½¦ç«™ã€‚', pinyin: 'shi1 fu4, qu4 huo3 che1 zhan4.', meaning: 'Driver, to the train station please.' },
        { speaker: 'B', chinese: 'å¥½çš„ï¼Œè¯·ç³»å¥½å®‰å…¨å¸¦ã€‚', pinyin: 'hao3 de, qing3 ji4 hao3 an1 quan2 dai4.', meaning: 'OK, please fasten your seatbelt.' },
        { speaker: 'A', chinese: 'å¤§æ¦‚å¤šé•¿æ—¶é—´ï¼Ÿ', pinyin: 'da4 gai4 duo1 chang2 shi2 jian1?', meaning: 'About how long will it take?' },
        { speaker: 'B', chinese: 'ä¸å µè½¦çš„è¯ï¼ŒäºŒååˆ†é’Ÿã€‚', pinyin: 'bu4 du3 che1 de hua4, er4 shi2 fen1 zhong1.', meaning: 'About 20 minutes if there\'s no traffic.' },
        { speaker: 'A', chinese: 'å¤šå°‘é’±ï¼Ÿ', pinyin: 'duo1 shao3 qian2?', meaning: 'How much?' },
        { speaker: 'B', chinese: 'æ‰“è¡¨ï¼Œåˆ°äº†çœ‹ä»·é’±ã€‚', pinyin: 'da3 biao3, dao4 le kan4 jia4 qian2.', meaning: 'The meter will tell us when we arrive.' }
    ],
    questions: [
        { question: 'ä»–è¦åŽ»å“ªé‡Œï¼Ÿ', options: ['æœºåœº', 'ç«è½¦ç«™', 'é…’åº—', 'åŒ»é™¢'], correct: 1 },
        { question: 'ä¸å µè½¦è¦å¤šé•¿æ—¶é—´ï¼Ÿ', options: ['ååˆ†é’Ÿ', 'äºŒååˆ†é’Ÿ', 'ä¸‰ååˆ†é’Ÿ', 'å››ååˆ†é’Ÿ'], correct: 1 }
    ]
},
{
    id: 'le317',
    type: 'dialogue',
    difficulty: 'medium',
    title: 'åå…¬äº¤è½¦',
    meaning: 'Taking the Bus',
    turns: [
        { speaker: 'A', chinese: 'è¯·é—®ï¼Œè¿™è¾†è½¦åˆ°å¸‚ä¸­å¿ƒå—ï¼Ÿ', pinyin: 'qing3 wen4, zhe4 liang4 che1 dao4 shi4 zhong1 xin1 ma?', meaning: 'Excuse me, does this bus go to the city center?' },
        { speaker: 'B', chinese: 'åˆ°çš„ï¼Œè¦åå…­ç«™ã€‚', pinyin: 'dao4 de, yao4 zuo4 liu4 zhan4.', meaning: 'Yes, it takes six stops.' },
        { speaker: 'A', chinese: 'è½¦ç¥¨å¤šå°‘é’±ï¼Ÿ', pinyin: 'che1 piao4 duo1 shao3 qian2?', meaning: 'How much is the fare?' },
        { speaker: 'B', chinese: 'ä¸¤å—é’±ï¼Œå¯ä»¥åˆ·å¡æˆ–è€…æŠ•å¸ã€‚', pinyin: 'liang3 kuai4 qian2, ke3 yi3 shua1 ka3 huo4 zhe3 tou2 bi4.', meaning: '2 yuan, you can use a card or coins.' },
        { speaker: 'A', chinese: 'åˆ°äº†å¸‚ä¸­å¿ƒè¯·å‘Šè¯‰æˆ‘ä¸€å£°ã€‚', pinyin: 'dao4 le shi4 zhong1 xin1 qing3 gao4 su4 wo3 yi4 sheng1.', meaning: 'Please let me know when we reach the city center.' }
    ],
    questions: [
        { question: 'è½¦ç¥¨å¤šå°‘é’±ï¼Ÿ', options: ['ä¸€å—', 'ä¸¤å—', 'ä¸‰å—', 'å››å—'], correct: 1 },
        { question: 'è¦åå‡ ç«™ï¼Ÿ', options: ['å››ç«™', 'äº”ç«™', 'å…­ç«™', 'ä¸ƒç«™'], correct: 2 }
    ]
},
{
    id: 'le318',
    type: 'dialogue',
    difficulty: 'medium',
    title: 'åœ¨ç«è½¦ç«™',
    meaning: 'At the Train Station',
    turns: [
        { speaker: 'A', chinese: 'è¯·é—®ï¼Œåˆ°å¹¿å·žçš„ç«è½¦å‡ ç‚¹å‡ºå‘ï¼Ÿ', pinyin: 'qing3 wen4, dao4 guang3 zhou1 de huo3 che1 ji3 dian3 chu1 fa1?', meaning: 'Excuse me, when does the train to Guangzhou depart?' },
        { speaker: 'B', chinese: 'ä¸Šåˆä¹ç‚¹åäº”åˆ†ï¼Œåœ¨äº”å·ç«™å°ã€‚', pinyin: 'shang4 wu3 jiu3 dian3 shi2 wu3 fen1, zai4 wu3 hao4 zhan4 tai2.', meaning: '9:15 AM, at platform 5.' },
        { speaker: 'A', chinese: 'éœ€è¦å¤šé•¿æ—¶é—´åˆ°å¹¿å·žï¼Ÿ', pinyin: 'xu1 yao4 duo1 chang2 shi2 jian1 dao4 guang3 zhou1?', meaning: 'How long does it take to Guangzhou?' },
        { speaker: 'B', chinese: 'å¤§æ¦‚ä¸¤ä¸ªå°æ—¶ã€‚', pinyin: 'da4 gai4 liang3 ge4 xiao3 shi2.', meaning: 'About 2 hours.' },
        { speaker: 'A', chinese: 'å¥½çš„ï¼Œè°¢è°¢ã€‚æˆ‘è¦ä¹°ä¸€å¼ ç¥¨ã€‚', pinyin: 'hao3 de, xie4 xie. wo3 yao4 mai3 yi4 zhang1 piao4.', meaning: 'OK, thanks. I want to buy one ticket.' }
    ],
    questions: [
        { question: 'ç«è½¦å‡ ç‚¹å‡ºå‘ï¼Ÿ', options: ['ä¸Šåˆå…«ç‚¹åäº”', 'ä¸Šåˆä¹ç‚¹åäº”', 'ä¸Šåˆåç‚¹åäº”', 'ä¸‹åˆä¹ç‚¹åäº”'], correct: 1 },
        { question: 'éœ€è¦å¤šé•¿æ—¶é—´ï¼Ÿ', options: ['ä¸€ä¸ªå°æ—¶', 'ä¸¤ä¸ªå°æ—¶', 'ä¸‰ä¸ªå°æ—¶', 'å››ä¸ªå°æ—¶'], correct: 1 }
    ]
},
{
    id: 'le319',
    type: 'dialogue',
    difficulty: 'medium',
    title: 'åœ¨é“¶è¡Œ',
    meaning: 'At the Bank',
    turns: [
        { speaker: 'A', chinese: 'ä½ å¥½ï¼Œè¯·é—®å¯ä»¥å¼€è´¦æˆ·å—ï¼Ÿ', pinyin: 'ni3 hao3, qing3 wen4 ke3 yi3 kai1 zhang4 hu4 ma?', meaning: 'Hello, can I open an account?' },
        { speaker: 'B', chinese: 'å¯ä»¥çš„ï¼Œè¯·ç»™æˆ‘ä½ çš„æŠ¤ç…§ã€‚', pinyin: 'ke3 yi3 de, qing3 gei3 wo3 ni3 de hu4 zhao4.', meaning: 'Sure, please give me your passport.' },
        { speaker: 'A', chinese: 'å¥½çš„ï¼Œåœ¨è¿™é‡Œã€‚', pinyin: 'hao3 de, zai4 zhe4 li3.', meaning: 'OK, here it is.' },
        { speaker: 'B', chinese: 'è°¢è°¢ï¼Œè¯·å¡«å†™è¿™å¼ è¡¨æ ¼ã€‚', pinyin: 'xie4 xie, qing3 tian2 xie3 zhe4 zhang1 biao3 ge2.', meaning: 'Thanks, please fill out this form.' },
        { speaker: 'A', chinese: 'å¡«å¥½äº†ã€‚è¿˜è¦ä»€ä¹ˆï¼Ÿ', pinyin: 'tian2 hao3 le. hai2 yao4 shen2 me?', meaning: 'Done. Anything else?' },
        { speaker: 'B', chinese: 'è¯·è®¾ç½®ä¸€ä¸ªå…­ä½å¯†ç ã€‚', pinyin: 'qing3 she4 zhi4 yi2 ge4 liu4 wei4 mi4 ma3.', meaning: 'Please set a six-digit PIN.' }
    ],
    questions: [
        { question: 'ä»–éœ€è¦æä¾›ä»€ä¹ˆï¼Ÿ', options: ['èº«ä»½è¯', 'æŠ¤ç…§', 'é“¶è¡Œå¡', 'é©¾ç…§'], correct: 1 },
        { question: 'å¯†ç è¦å‡ ä½ï¼Ÿ', options: ['å››ä½', 'äº”ä½', 'å…­ä½', 'å…«ä½'], correct: 2 }
    ]
},
{
    id: 'le320',
    type: 'dialogue',
    difficulty: 'medium',
    title: 'åœ¨é‚®å±€',
    meaning: 'At the Post Office',
    turns: [
        { speaker: 'A', chinese: 'ä½ å¥½ï¼Œæˆ‘æƒ³å¯„ä¸€ä¸ªåŒ…è£¹ã€‚', pinyin: 'ni3 hao3, wo3 xiang3 ji4 yi2 ge4 bao1 guo3.', meaning: 'Hello, I want to mail a package.' },
        { speaker: 'B', chinese: 'å¯„åˆ°å“ªé‡Œï¼Ÿ', pinyin: 'ji4 dao4 na3 li3?', meaning: 'Where to?' },
        { speaker: 'A', chinese: 'å¯„åˆ°ç¾Žå›½ã€‚å¤šé•¿æ—¶é—´èƒ½åˆ°ï¼Ÿ', pinyin: 'ji4 dao4 mei3 guo2. duo1 chang2 shi2 jian1 neng2 dao4?', meaning: 'To the United States. How long will it take?' },
        { speaker: 'B', chinese: 'èˆªç©ºçš„è¯ï¼Œå¤§æ¦‚ä¸ƒå¤©åˆ°åå¤©ã€‚', pinyin: 'hang2 kong1 de hua4, da4 gai4 qi1 tian1 dao4 shi2 tian1.', meaning: 'By air mail, about 7 to 10 days.' },
        { speaker: 'A', chinese: 'å¥½çš„ã€‚éœ€è¦ç§°ä¸€ä¸‹é‡é‡å—ï¼Ÿ', pinyin: 'hao3 de. xu1 yao4 cheng1 yi2 xia4 zhong4 liang4 ma?', meaning: 'OK. Do you need to weigh it?' },
        { speaker: 'B', chinese: 'å¯¹ï¼Œæ”¾ä¸Šæ¥å§ã€‚ä¸€å…±å…«åå—ã€‚', pinyin: 'dui4, fang4 shang4 lai2 ba. yi2 gong4 ba1 shi2 kuai4.', meaning: 'Yes, put it on here. 80 yuan total.' }
    ],
    questions: [
        { question: 'åŒ…è£¹å¯„åˆ°å“ªé‡Œï¼Ÿ', options: ['è‹±å›½', 'ç¾Žå›½', 'æ—¥æœ¬', 'æ³•å›½'], correct: 1 },
        { question: 'éœ€è¦å¤šå°‘é’±ï¼Ÿ', options: ['äº”åå—', 'å…­åå—', 'ä¸ƒåå—', 'å…«åå—'], correct: 3 }
    ]
},
{
    id: 'le321',
    type: 'dialogue',
    difficulty: 'medium',
    title: 'ç”µè¯é¢„çº¦',
    meaning: 'Making an Appointment by Phone',
    turns: [
        { speaker: 'A', chinese: 'ä½ å¥½ï¼Œè¿™é‡Œæ˜¯ç‰™ç§‘è¯Šæ‰€ã€‚', pinyin: 'ni3 hao3, zhe4 li3 shi4 ya2 ke1 zhen3 suo3.', meaning: 'Hello, this is the dental clinic.' },
        { speaker: 'B', chinese: 'ä½ å¥½ï¼Œæˆ‘æƒ³é¢„çº¦çœ‹ç‰™ã€‚', pinyin: 'ni3 hao3, wo3 xiang3 yu4 yue1 kan4 ya2.', meaning: 'Hello, I would like to make an appointment to see the dentist.' },
        { speaker: 'A', chinese: 'ä½ æƒ³çº¦ä»€ä¹ˆæ—¶å€™ï¼Ÿ', pinyin: 'ni3 xiang3 yue1 shen2 me shi2 hou4?', meaning: 'When would you like to come?' },
        { speaker: 'B', chinese: 'æ˜ŸæœŸäº”ä¸‹åˆæœ‰ç©ºå—ï¼Ÿ', pinyin: 'xing1 qi1 wu3 xia4 wu3 you3 kong4 ma?', meaning: 'Is Friday afternoon available?' },
        { speaker: 'A', chinese: 'ä¸‹åˆä¸‰ç‚¹å¯ä»¥ã€‚ä½ å«ä»€ä¹ˆåå­—ï¼Ÿ', pinyin: 'xia4 wu3 san1 dian3 ke3 yi3. ni3 jiao4 shen2 me ming2 zi4?', meaning: '3 PM is available. What is your name?' },
        { speaker: 'B', chinese: 'æˆ‘å«å¼ æ˜Žã€‚è°¢è°¢ï¼', pinyin: 'wo3 jiao4 zhang1 ming2. xie4 xie!', meaning: 'My name is Zhang Ming. Thank you!' }
    ],
    questions: [
        { question: 'ä»–çº¦äº†ä»€ä¹ˆæ—¶é—´ï¼Ÿ', options: ['æ˜ŸæœŸå››ä¸‹åˆä¸‰ç‚¹', 'æ˜ŸæœŸäº”ä¸Šåˆä¸‰ç‚¹', 'æ˜ŸæœŸäº”ä¸‹åˆä¸‰ç‚¹', 'æ˜ŸæœŸå…­ä¸Šåˆ'], correct: 2 }
    ]
},
{
    id: 'le322',
    type: 'dialogue',
    difficulty: 'medium',
    title: 'æ‰¾å·¥ä½œ',
    meaning: 'Looking for a Job',
    turns: [
        { speaker: 'A', chinese: 'ä½ å¥½ï¼Œæˆ‘æ¥åº”è˜æœåŠ¡å‘˜ã€‚', pinyin: 'ni3 hao3, wo3 lai2 ying4 pin4 fu2 wu4 yuan2.', meaning: 'Hello, I am here to apply for the waiter position.' },
        { speaker: 'B', chinese: 'ä½ æœ‰å·¥ä½œç»éªŒå—ï¼Ÿ', pinyin: 'ni3 you3 gong1 zuo4 jing1 yan4 ma?', meaning: 'Do you have work experience?' },
        { speaker: 'A', chinese: 'æœ‰ï¼Œæˆ‘ä»¥å‰åœ¨å’–å•¡åº—å·¥ä½œè¿‡ä¸¤å¹´ã€‚', pinyin: 'you3, wo3 yi3 qian2 zai4 ka1 fei1 dian4 gong1 zuo4 guo4 liang3 nian2.', meaning: 'Yes, I worked at a coffee shop for two years before.' },
        { speaker: 'B', chinese: 'ä½ ä¼šè¯´è‹±è¯­å—ï¼Ÿ', pinyin: 'ni3 hui4 shuo1 ying1 yu3 ma?', meaning: 'Can you speak English?' },
        { speaker: 'A', chinese: 'ä¼šè¯´ä¸€ç‚¹å„¿ã€‚', pinyin: 'hui4 shuo1 yi4 dian3 er2.', meaning: 'I can speak a little.' },
        { speaker: 'B', chinese: 'å¥½çš„ï¼Œä½ æ˜Žå¤©å¯ä»¥æ¥è¯•å·¥å—ï¼Ÿ', pinyin: 'hao3 de, ni3 ming2 tian1 ke3 yi3 lai2 shi4 gong1 ma?', meaning: 'OK, can you come for a trial tomorrow?' }
    ],
    questions: [
        { question: 'ä»–ä»¥å‰åœ¨å“ªé‡Œå·¥ä½œï¼Ÿ', options: ['é¤åŽ…', 'å’–å•¡åº—', 'é…’åº—', 'è¶…å¸‚'], correct: 1 },
        { question: 'ä»–æ˜Žå¤©è¦åšä»€ä¹ˆï¼Ÿ', options: ['é¢è¯•', 'è¯•å·¥', 'ç­¾åˆåŒ', 'åŸ¹è®­'], correct: 1 }
    ]
},
{
    id: 'le323',
    type: 'dialogue',
    difficulty: 'medium',
    title: 'åœ¨å›¾ä¹¦é¦†',
    meaning: 'At the Library',
    turns: [
        { speaker: 'A', chinese: 'ä½ å¥½ï¼Œæˆ‘æƒ³å€Ÿè¿™æœ¬ä¹¦ã€‚', pinyin: 'ni3 hao3, wo3 xiang3 jie4 zhe4 ben3 shu1.', meaning: 'Hello, I want to borrow this book.' },
        { speaker: 'B', chinese: 'è¯·å‡ºç¤ºä½ çš„å€Ÿä¹¦å¡ã€‚', pinyin: 'qing3 chu1 shi4 ni3 de jie4 shu1 ka3.', meaning: 'Please show your library card.' },
        { speaker: 'A', chinese: 'ç»™ä½ ã€‚å¯ä»¥å€Ÿå¤šä¹…ï¼Ÿ', pinyin: 'gei3 ni3. ke3 yi3 jie4 duo1 jiu3?', meaning: 'Here. How long can I borrow it?' },
        { speaker: 'B', chinese: 'å¯ä»¥å€Ÿä¸€ä¸ªæœˆã€‚åˆ°æœŸå‰å¯ä»¥ç»­å€Ÿã€‚', pinyin: 'ke3 yi3 jie4 yi2 ge4 yue4. dao4 qi1 qian2 ke3 yi3 xu4 jie4.', meaning: 'One month. You can renew before the due date.' },
        { speaker: 'A', chinese: 'å¦‚æžœæ™šäº†ä¼šç½šæ¬¾å—ï¼Ÿ', pinyin: 'ru2 guo3 wan3 le hui4 fa2 kuan3 ma?', meaning: 'Will there be a fine if it\'s late?' },
        { speaker: 'B', chinese: 'æ¯å¤©ç½šäº”æ¯›é’±ã€‚', pinyin: 'mei3 tian1 fa2 wu3 mao2 qian2.', meaning: 'Fifty cents per day.' }
    ],
    questions: [
        { question: 'å¯ä»¥å€Ÿå¤šä¹…ï¼Ÿ', options: ['ä¸¤å‘¨', 'ä¸€ä¸ªæœˆ', 'ä¸¤ä¸ªæœˆ', 'ä¸€å‘¨'], correct: 1 },
        { question: 'æ¯å¤©ç½šæ¬¾å¤šå°‘ï¼Ÿ', options: ['ä¸‰æ¯›', 'äº”æ¯›', 'ä¸€å—', 'ä¸¤å—'], correct: 1 }
    ]
},
{
    id: 'le324',
    type: 'dialogue',
    difficulty: 'medium',
    title: 'åœ¨å¥èº«æˆ¿',
    meaning: 'At the Gym',
    turns: [
        { speaker: 'A', chinese: 'ä½ å¥½ï¼Œæˆ‘æƒ³åŠžä¸€å¼ å¥èº«å¡ã€‚', pinyin: 'ni3 hao3, wo3 xiang3 ban4 yi4 zhang1 jian4 shen1 ka3.', meaning: 'Hello, I want to get a gym membership card.' },
        { speaker: 'B', chinese: 'æˆ‘ä»¬æœˆå¡ä¸‰ç™¾å—ï¼Œå¹´å¡ä¸¤åƒå…«ã€‚', pinyin: 'wo3 men yue4 ka3 san1 bai3 kuai4, nian2 ka3 liang3 qian1 ba1.', meaning: 'Our monthly card is 300 yuan, annual card is 2800.' },
        { speaker: 'A', chinese: 'å¹´å¡èƒ½ä¾¿å®œä¸€ç‚¹å—ï¼Ÿ', pinyin: 'nian2 ka3 neng2 pian2 yi2 yi4 dian3 ma?', meaning: 'Can the annual card be cheaper?' },
        { speaker: 'B', chinese: 'çŽ°åœ¨æ´»åŠ¨ä»·ï¼Œå¹´å¡åªè¦ä¸¤åƒäº”ç™¾ã€‚', pinyin: 'xian4 zai4 huo2 dong4 jia4, nian2 ka3 zhi3 yao4 liang3 qian1 wu3 bai3.', meaning: 'Currently on promotion, the annual card is only 2500.' },
        { speaker: 'A', chinese: 'å¥½çš„ï¼Œæˆ‘åŠžå¹´å¡ã€‚æœ‰æ•™ç»ƒå—ï¼Ÿ', pinyin: 'hao3 de, wo3 ban4 nian2 ka3. you3 jiao4 lian4 ma?', meaning: 'OK, I\'ll get the annual card. Do you have trainers?' },
        { speaker: 'B', chinese: 'æœ‰ï¼Œç¬¬ä¸€æ¬¡å…è´¹ä½“éªŒã€‚', pinyin: 'you3, di4 yi1 ci4 mian3 fei4 ti3 yan4.', meaning: 'Yes, the first session is a free trial.' }
    ],
    questions: [
        { question: 'å¹´å¡æ´»åŠ¨ä»·å¤šå°‘é’±ï¼Ÿ', options: ['ä¸¤åƒ', 'ä¸¤åƒäº”', 'ä¸¤åƒå…«', 'ä¸‰åƒ'], correct: 1 },
        { question: 'æœˆå¡å¤šå°‘é’±ï¼Ÿ', options: ['ä¸¤ç™¾', 'ä¸‰ç™¾', 'å››ç™¾', 'äº”ç™¾'], correct: 1 }
    ]
},
{
    id: 'le325',
    type: 'dialogue',
    difficulty: 'medium',
    title: 'é‚€è¯·å‚åŠ èšä¼š',
    meaning: 'Inviting to a Party',
    turns: [
        { speaker: 'A', chinese: 'è¿™ä¸ªæ˜ŸæœŸå…­æ™šä¸Šä½ æœ‰ç©ºå—ï¼Ÿ', pinyin: 'zhe4 ge4 xing1 qi1 liu4 wan3 shang4 ni3 you3 kong4 ma?', meaning: 'Are you free this Saturday evening?' },
        { speaker: 'B', chinese: 'æœ‰å•Šï¼Œä»€ä¹ˆäº‹ï¼Ÿ', pinyin: 'you3 a, shen2 me shi4?', meaning: 'Yes, what\'s up?' },
        { speaker: 'A', chinese: 'æˆ‘è¯·ä¸€äº›æœ‹å‹æ¥å®¶é‡Œèšé¤ï¼Œä½ æ¥å—ï¼Ÿ', pinyin: 'wo3 qing3 yi4 xie1 peng2 you3 lai2 jia1 li3 ju4 can1, ni3 lai2 ma?', meaning: 'I am inviting some friends over for a dinner party, will you come?' },
        { speaker: 'B', chinese: 'å¤ªå¥½äº†ï¼è¦å¸¦ä»€ä¹ˆå—ï¼Ÿ', pinyin: 'tai4 hao3 le! yao4 dai4 shen2 me ma?', meaning: 'Great! Should I bring anything?' },
        { speaker: 'A', chinese: 'ä¸ç”¨å¸¦ä¸œè¥¿ï¼Œå¸¦ä½ è‡ªå·±æ¥å°±è¡Œäº†ã€‚', pinyin: 'bu2 yong4 dai4 dong1 xi, dai4 ni3 zi4 ji3 lai2 jiu4 xing2 le.', meaning: 'No need to bring anything, just bring yourself.' },
        { speaker: 'B', chinese: 'å‡ ç‚¹å¼€å§‹ï¼Ÿ', pinyin: 'ji3 dian3 kai1 shi3?', meaning: 'What time does it start?' },
        { speaker: 'A', chinese: 'æ™šä¸Šå…­ç‚¹ã€‚', pinyin: 'wan3 shang4 liu4 dian3.', meaning: '6 PM.' }
    ],
    questions: [
        { question: 'èšä¼šä»€ä¹ˆæ—¶å€™ï¼Ÿ', options: ['æ˜ŸæœŸäº”æ™šä¸Š', 'æ˜ŸæœŸå…­æ™šä¸Š', 'æ˜ŸæœŸå…­ä¸‹åˆ', 'æ˜ŸæœŸå¤©æ™šä¸Š'], correct: 1 },
        { question: 'å‡ ç‚¹å¼€å§‹ï¼Ÿ', options: ['äº”ç‚¹', 'å…­ç‚¹', 'ä¸ƒç‚¹', 'å…«ç‚¹'], correct: 1 }
    ]
},
{
    id: 'le326',
    type: 'dialogue',
    difficulty: 'medium',
    title: 'çº¦æœ‹å‹',
    meaning: 'Making Plans with Friends',
    turns: [
        { speaker: 'A', chinese: 'æ˜Žå¤©ä½ æœ‰å®‰æŽ’å—ï¼Ÿ', pinyin: 'ming2 tian1 ni3 you3 an1 pai2 ma?', meaning: 'Do you have plans tomorrow?' },
        { speaker: 'B', chinese: 'æ²¡æœ‰ã€‚ä½ æƒ³åšä»€ä¹ˆï¼Ÿ', pinyin: 'mei2 you3. ni3 xiang3 zuo4 shen2 me?', meaning: 'No. What do you want to do?' },
        { speaker: 'A', chinese: 'æˆ‘ä»¬åŽ»çœ‹ç”µå½±å§ã€‚', pinyin: 'wo3 men qu4 kan4 dian4 ying3 ba.', meaning: 'Let\'s go watch a movie.' },
        { speaker: 'B', chinese: 'å¥½å•Šï¼Œçœ‹ä»€ä¹ˆç”µå½±ï¼Ÿ', pinyin: 'hao3 a, kan4 shen2 me dian4 ying3?', meaning: 'Great, what movie?' },
        { speaker: 'A', chinese: 'æ–°ä¸Šæ˜ çš„é‚£éƒ¨å–œå‰§ç‰‡ã€‚', pinyin: 'xin1 shang4 ying4 de na4 bu4 xi3 ju4 pian4.', meaning: 'The new comedy that just came out.' },
        { speaker: 'B', chinese: 'å¥½ï¼å‡ ç‚¹åœ¨å“ªè§ï¼Ÿ', pinyin: 'hao3! ji3 dian3 zai4 na3 jian4?', meaning: 'OK! What time and where?' }
    ],
    questions: [
        { question: 'ä»–ä»¬è¦çœ‹ä»€ä¹ˆç±»åž‹çš„ç”µå½±ï¼Ÿ', options: ['ææ€–ç‰‡', 'å–œå‰§ç‰‡', 'çˆ±æƒ…ç‰‡', 'åŠ¨ä½œç‰‡'], correct: 1 }
    ]
},
{
    id: 'le327',
    type: 'dialogue',
    difficulty: 'medium',
    title: 'ç‚¹é¤',
    meaning: 'Ordering Food',
    turns: [
        { speaker: 'A', chinese: 'å¯ä»¥ç‚¹èœäº†å—ï¼Ÿ', pinyin: 'ke3 yi3 dian3 cai4 le ma?', meaning: 'Can we order now?' },
        { speaker: 'B', chinese: 'å¯ä»¥ã€‚è¦ä»€ä¹ˆï¼Ÿ', pinyin: 'ke3 yi3. yao4 shen2 me?', meaning: 'Yes. What would you like?' },
        { speaker: 'A', chinese: 'æ¥ä¸€ç¢Ÿå®«ä¿é¸¡ä¸ï¼Œä¸€ç¢—é…¸è¾£æ±¤ï¼Œä¸€ç¢—ç±³é¥­ã€‚', pinyin: 'lai2 yi4 die2 gong1 bao3 ji1 ding1, yi4 wan3 suan1 la4 tang1, yi4 wan3 mi3 fan4.', meaning: 'One plate of kung pao chicken, one bowl of hot and sour soup, and one bowl of rice.' },
        { speaker: 'B', chinese: 'è¦å–ç‚¹ä»€ä¹ˆå—ï¼Ÿ', pinyin: 'yao4 he1 dian3 shen2 me ma?', meaning: 'Would you like something to drink?' },
        { speaker: 'A', chinese: 'ä¸¤æ¯ç»¿èŒ¶ã€‚', pinyin: 'liang3 bei1 lv4 cha2.', meaning: 'Two cups of green tea.' },
        { speaker: 'B', chinese: 'å¥½ï¼Œè¯·ç¨ç­‰ã€‚', pinyin: 'hao3, qing3 shao1 deng3.', meaning: 'OK, please wait a moment.' }
    ],
    questions: [
        { question: 'ä»–ä»¬ç‚¹äº†ä»€ä¹ˆä¸»èœï¼Ÿ', options: ['éº»å©†è±†è…', 'å®«ä¿é¸¡ä¸', 'è¥¿çº¢æŸ¿ç‚’é¸¡è›‹', 'é±¼é¦™è‚‰ä¸'], correct: 1 },
        { question: 'å–ä»€ä¹ˆï¼Ÿ', options: ['çº¢èŒ¶', 'ç»¿èŒ¶', 'å’–å•¡', 'å¯ä¹'], correct: 1 }
    ]
},
{
    id: 'le328',
    type: 'dialogue',
    difficulty: 'medium',
    title: 'æŠ•è¯‰',
    meaning: 'Making a Complaint',
    turns: [
        { speaker: 'A', chinese: 'æœåŠ¡å‘˜ï¼Œæœ‰é—®é¢˜ã€‚', pinyin: 'fu2 wu4 yuan2, you3 wen4 ti2.', meaning: 'Waiter, there is a problem.' },
        { speaker: 'B', chinese: 'æ€Žä¹ˆäº†ï¼Ÿ', pinyin: 'zen3 me le?', meaning: 'What\'s wrong?' },
        { speaker: 'A', chinese: 'è¿™é“èœå¤ªå’¸äº†ï¼Œè€Œä¸”ä¸å¤ªçƒ­ã€‚', pinyin: 'zhe4 dao4 cai4 tai4 xian2 le, er2 qie3 bu2 tai4 re4.', meaning: 'This dish is too salty, and it\'s not very hot.' },
        { speaker: 'B', chinese: 'éžå¸¸æŠ±æ­‰ã€‚æˆ‘é©¬ä¸Šç»™ä½ æ¢ä¸€ä»½ã€‚', pinyin: 'fei1 chang2 bao4 qian4. wo3 ma3 shang4 gei3 ni3 huan4 yi2 fen4.', meaning: 'I am very sorry. I will replace it for you right away.' },
        { speaker: 'A', chinese: 'è°¢è°¢ä½ ã€‚', pinyin: 'xie4 xie ni3.', meaning: 'Thank you.' },
        { speaker: 'B', chinese: 'ä¸å¥½æ„æ€ï¼Œç»™ä½ æ·»éº»çƒ¦äº†ã€‚', pinyin: 'bu4 hao3 yi4 si, gei3 ni3 tian1 ma2 fan2 le.', meaning: 'Sorry for the trouble.' }
    ],
    questions: [
        { question: 'èœæœ‰ä»€ä¹ˆé—®é¢˜ï¼Ÿ', options: ['å¤ªç”œäº†', 'å¤ªæ·¡äº†', 'å¤ªå’¸äº†', 'å¤ªè¾£äº†'], correct: 2 }
    ]
},
{
    id: 'le329',
    type: 'dialogue',
    difficulty: 'medium',
    title: 'è¯¦ç»†é—®è·¯',
    meaning: 'Asking Detailed Directions',
    turns: [
        { speaker: 'A', chinese: 'è¯·é—®ï¼ŒåŽ»åšç‰©é¦†æ€Žä¹ˆèµ°ï¼Ÿ', pinyin: 'qing3 wen4, qu4 bo2 wu4 guan3 zen3 me zou3?', meaning: 'Excuse me, how do I get to the museum?' },
        { speaker: 'B', chinese: 'ä¸€ç›´å¾€å‰èµ°ï¼Œè¿‡ä¸¤ä¸ªè·¯å£ï¼Œç„¶åŽå·¦è½¬ã€‚', pinyin: 'yi4 zhi2 wang3 qian2 zou3, guo4 liang3 ge4 lu4 kou3, ran2 hou4 zuo3 zhuan3.', meaning: 'Go straight, pass two intersections, then turn left.' },
        { speaker: 'A', chinese: 'ç¦»è¿™å„¿è¿œå—ï¼Ÿ', pinyin: 'li2 zhe4 er2 yuan3 ma?', meaning: 'Is it far from here?' },
        { speaker: 'B', chinese: 'èµ°è·¯å¤§æ¦‚åäº”åˆ†é’Ÿã€‚ä¹Ÿå¯ä»¥åå…¬äº¤è½¦ã€‚', pinyin: 'zou3 lu4 da4 gai4 shi2 wu3 fen1 zhong1. ye3 ke3 yi3 zuo4 gong1 jiao1 che1.', meaning: 'About 15 minutes walking. You can also take the bus.' },
        { speaker: 'A', chinese: 'åå‡ è·¯è½¦ï¼Ÿ', pinyin: 'zuo4 ji3 lu4 che1?', meaning: 'Which bus line?' },
        { speaker: 'B', chinese: 'åä¸‰è·¯ï¼Œåä¸¤ç«™å°±åˆ°ã€‚', pinyin: 'zuo4 san1 lu4, zuo4 liang3 zhan4 jiu4 dao4.', meaning: 'Take bus No. 3, it\'s two stops.' }
    ],
    questions: [
        { question: 'èµ°è·¯è¦å¤šä¹…ï¼Ÿ', options: ['äº”åˆ†é’Ÿ', 'ååˆ†é’Ÿ', 'åäº”åˆ†é’Ÿ', 'äºŒååˆ†é’Ÿ'], correct: 2 },
        { question: 'åå‡ è·¯è½¦ï¼Ÿ', options: ['ä¸€è·¯', 'äºŒè·¯', 'ä¸‰è·¯', 'å››è·¯'], correct: 2 }
    ]
},
{
    id: 'le330',
    type: 'dialogue',
    difficulty: 'medium',
    title: 'åœ¨ç”µå½±é™¢',
    meaning: 'At the Movie Theater',
    turns: [
        { speaker: 'A', chinese: 'ä¸¤å¼ æ™šä¸Šä¸ƒç‚¹çš„ç¥¨ã€‚', pinyin: 'liang3 zhang1 wan3 shang4 qi1 dian3 de piao4.', meaning: 'Two tickets for the 7 PM show.' },
        { speaker: 'B', chinese: 'è¦é€‰åº§ä½å—ï¼Ÿ', pinyin: 'yao4 xuan3 zuo4 wei4 ma?', meaning: 'Would you like to choose seats?' },
        { speaker: 'A', chinese: 'ä¸­é—´çš„ï¼Œç¬¬å…­æŽ’ã€‚', pinyin: 'zhong1 jian1 de, di4 liu4 pai2.', meaning: 'In the middle, the sixth row.' },
        { speaker: 'B', chinese: 'å¥½çš„ï¼Œä¸€å…±ä¸€ç™¾äºŒåå—ã€‚', pinyin: 'hao3 de, yi2 gong4 yi4 bai3 er4 shi2 kuai4.', meaning: 'OK, 120 yuan total.' },
        { speaker: 'A', chinese: 'æœ‰æ²¡æœ‰çˆ†ç±³èŠ±å’Œå¯ä¹ï¼Ÿ', pinyin: 'you3 mei2 you3 bao4 mi3 hua1 he2 ke3 le4?', meaning: 'Do you have popcorn and cola?' },
        { speaker: 'B', chinese: 'æœ‰å¥—é¤ï¼Œäº”åå—ä¸€ä»½ã€‚', pinyin: 'you3 tao4 can1, wu3 shi2 kuai4 yi2 fen4.', meaning: 'We have a combo, 50 yuan each.' }
    ],
    questions: [
        { question: 'ä¸¤å¼ ç¥¨ä¸€å…±å¤šå°‘é’±ï¼Ÿ', options: ['å…­åå—', 'ä¸€ç™¾å—', 'ä¸€ç™¾äºŒåå—', 'ä¸¤ç™¾å—'], correct: 2 },
        { question: 'å¥—é¤å¤šå°‘é’±ä¸€ä»½ï¼Ÿ', options: ['ä¸‰åå—', 'å››åå—', 'äº”åå—', 'å…­åå—'], correct: 2 }
    ]
},
{
    id: 'le331',
    type: 'dialogue',
    difficulty: 'medium',
    title: 'åœ¨ç†å‘åº—',
    meaning: 'At the Hair Salon',
    turns: [
        { speaker: 'A', chinese: 'ä½ å¥½ï¼Œæˆ‘æƒ³å‰ªå¤´å‘ã€‚', pinyin: 'ni3 hao3, wo3 xiang3 jian3 tou2 fa5.', meaning: 'Hello, I want a haircut.' },
        { speaker: 'B', chinese: 'ä½ æƒ³å‰ªä»€ä¹ˆæ ·çš„ï¼Ÿ', pinyin: 'ni3 xiang3 jian3 shen2 me yang4 de?', meaning: 'What style would you like?' },
        { speaker: 'A', chinese: 'çŸ­ä¸€ç‚¹ï¼Œæ¸…çˆ½ä¸€ç‚¹å°±è¡Œã€‚', pinyin: 'duan3 yi4 dian3, qing1 shuang3 yi4 dian3 jiu4 xing2.', meaning: 'Just a little shorter and neater.' },
        { speaker: 'B', chinese: 'å¥½çš„ï¼Œè¯·è¿™è¾¹æ´—å¤´ã€‚', pinyin: 'hao3 de, qing3 zhe4 bian1 xi3 tou2.', meaning: 'OK, please come over here to wash your hair.' },
        { speaker: 'A', chinese: 'å‰ªå¤´å‘å¤šå°‘é’±ï¼Ÿ', pinyin: 'jian3 tou2 fa5 duo1 shao3 qian2?', meaning: 'How much is a haircut?' },
        { speaker: 'B', chinese: 'å…­åå—ã€‚', pinyin: 'liu4 shi2 kuai4.', meaning: '60 yuan.' }
    ],
    questions: [
        { question: 'å‰ªå¤´å‘å¤šå°‘é’±ï¼Ÿ', options: ['å››åå—', 'äº”åå—', 'å…­åå—', 'å…«åå—'], correct: 2 }
    ]
},
{
    id: 'le332',
    type: 'dialogue',
    difficulty: 'medium',
    title: 'ç§Ÿæˆ¿å­',
    meaning: 'Renting an Apartment',
    turns: [
        { speaker: 'A', chinese: 'æˆ‘çœ‹åˆ°ä½ å‘çš„ç§Ÿæˆ¿å¹¿å‘Šã€‚', pinyin: 'wo3 kan4 dao4 ni3 fa1 de zu1 fang2 guang3 gao4.', meaning: 'I saw your rental advertisement.' },
        { speaker: 'B', chinese: 'å¯¹å¯¹ï¼Œä¸€å®¤ä¸€åŽ…ï¼Œæœˆç§Ÿä¸‰åƒã€‚', pinyin: 'dui4 dui4, yi2 shi4 yi2 ting1, yue4 zu1 san1 qian1.', meaning: 'Yes, one bedroom one living room, 3000 per month.' },
        { speaker: 'A', chinese: 'åŒ…æ‹¬æ°´ç”µè´¹å—ï¼Ÿ', pinyin: 'bao1 kuo4 shui3 dian4 fei4 ma?', meaning: 'Does it include utilities?' },
        { speaker: 'B', chinese: 'ä¸åŒ…æ‹¬ï¼Œæ°´ç”µè´¹è‡ªå·±ä»˜ã€‚', pinyin: 'bu4 bao1 kuo4, shui3 dian4 fei4 zi4 ji3 fu4.', meaning: 'No, utilities are paid by yourself.' },
        { speaker: 'A', chinese: 'ä»€ä¹ˆæ—¶å€™å¯ä»¥çœ‹æˆ¿ï¼Ÿ', pinyin: 'shen2 me shi2 hou4 ke3 yi3 kan4 fang2?', meaning: 'When can I see the apartment?' },
        { speaker: 'B', chinese: 'æ˜Žå¤©ä¸‹åˆéƒ½å¯ä»¥ã€‚', pinyin: 'ming2 tian1 xia4 wu3 dou1 ke3 yi3.', meaning: 'Any time tomorrow afternoon.' }
    ],
    questions: [
        { question: 'æœˆç§Ÿå¤šå°‘é’±ï¼Ÿ', options: ['ä¸¤åƒ', 'ä¸‰åƒ', 'å››åƒ', 'äº”åƒ'], correct: 1 },
        { question: 'æ°´ç”µè´¹åŒ…æ‹¬å—ï¼Ÿ', options: ['åŒ…æ‹¬', 'ä¸åŒ…æ‹¬', 'ä¸€åŠ', 'ä¸çŸ¥é“'], correct: 1 }
    ]
},
{
    id: 'le333',
    type: 'dialogue',
    difficulty: 'medium',
    title: 'å’Œæœ‹å‹è§é¢',
    meaning: 'Meeting a Friend',
    turns: [
        { speaker: 'A', chinese: 'å¥½ä¹…ä¸è§ï¼ä½ æœ€è¿‘æ€Žä¹ˆæ ·ï¼Ÿ', pinyin: 'hao3 jiu3 bu2 jian4! ni3 zui4 jin4 zen3 me yang4?', meaning: 'Long time no see! How have you been lately?' },
        { speaker: 'B', chinese: 'æŒºå¥½çš„ã€‚æˆ‘æ¢äº†æ–°å·¥ä½œã€‚', pinyin: 'ting3 hao3 de. wo3 huan4 le xin1 gong1 zuo4.', meaning: 'Pretty good. I changed to a new job.' },
        { speaker: 'A', chinese: 'çœŸçš„å—ï¼Ÿåœ¨å“ªé‡Œä¸Šç­ï¼Ÿ', pinyin: 'zhen1 de ma? zai4 na3 li3 shang4 ban1?', meaning: 'Really? Where do you work now?' },
        { speaker: 'B', chinese: 'åœ¨å¸‚ä¸­å¿ƒçš„ä¸€å®¶å¤–è´¸å…¬å¸ã€‚', pinyin: 'zai4 shi4 zhong1 xin1 de yi4 jia1 wai4 mao4 gong1 si1.', meaning: 'At a foreign trade company in the city center.' },
        { speaker: 'A', chinese: 'å¬èµ·æ¥ä¸é”™ï¼ä½ å–œæ¬¢å—ï¼Ÿ', pinyin: 'ting1 qi3 lai2 bu2 cuo4! ni3 xi3 huan1 ma?', meaning: 'Sounds good! Do you like it?' },
        { speaker: 'B', chinese: 'æŒºå–œæ¬¢çš„ï¼ŒåŒäº‹ä¹Ÿå¾ˆå¥½ã€‚', pinyin: 'ting3 xi3 huan1 de, tong2 shi4 ye3 hen3 hao3.', meaning: 'I like it quite a bit, and my colleagues are great too.' }
    ],
    questions: [
        { question: 'Bæœ€è¿‘åšäº†ä»€ä¹ˆï¼Ÿ', options: ['æ¬å®¶äº†', 'æ¢äº†æ–°å·¥ä½œ', 'åŽ»æ—…è¡Œäº†', 'ä¹°æˆ¿å­äº†'], correct: 1 },
        { question: 'Båœ¨å“ªé‡Œä¸Šç­ï¼Ÿ', options: ['é“¶è¡Œ', 'å¤–è´¸å…¬å¸', 'å­¦æ ¡', 'åŒ»é™¢'], correct: 1 }
    ]
},
{
    id: 'le334',
    type: 'dialogue',
    difficulty: 'medium',
    title: 'åœ¨æ—…è¡Œç¤¾',
    meaning: 'At the Travel Agency',
    turns: [
        { speaker: 'A', chinese: 'ä½ å¥½ï¼Œæˆ‘æƒ³è®¢åŽ»æ³°å›½çš„æœºç¥¨ã€‚', pinyin: 'ni3 hao3, wo3 xiang3 ding4 qu4 tai4 guo2 de ji1 piao4.', meaning: 'Hello, I want to book a flight to Thailand.' },
        { speaker: 'B', chinese: 'ä½ æƒ³ä»€ä¹ˆæ—¶å€™å‡ºå‘ï¼Ÿ', pinyin: 'ni3 xiang3 shen2 me shi2 hou4 chu1 fa1?', meaning: 'When would you like to depart?' },
        { speaker: 'A', chinese: 'ä¸‹å‘¨ä¸€ã€‚å¾€è¿”ç¥¨å¤šå°‘é’±ï¼Ÿ', pinyin: 'xia4 zhou1 yi1. wang3 fan3 piao4 duo1 shao3 qian2?', meaning: 'Next Monday. How much is a round-trip ticket?' },
        { speaker: 'B', chinese: 'å¾€è¿”ä¸‰åƒäº”ç™¾å—å·¦å³ã€‚', pinyin: 'wang3 fan3 san1 qian1 wu3 bai3 kuai4 zuo3 you4.', meaning: 'Around 3500 yuan round-trip.' },
        { speaker: 'A', chinese: 'æœ‰ç›´é£žçš„å—ï¼Ÿ', pinyin: 'you3 zhi2 fei1 de ma?', meaning: 'Is there a direct flight?' },
        { speaker: 'B', chinese: 'æœ‰ï¼Œç›´é£žå¤§æ¦‚äº”ä¸ªå°æ—¶ã€‚', pinyin: 'you3, zhi2 fei1 da4 gai4 wu3 ge4 xiao3 shi2.', meaning: 'Yes, direct flight is about 5 hours.' }
    ],
    questions: [
        { question: 'å¾€è¿”ç¥¨å¤§çº¦å¤šå°‘é’±ï¼Ÿ', options: ['ä¸¤åƒäº”ç™¾', 'ä¸‰åƒäº”ç™¾', 'å››åƒäº”ç™¾', 'äº”åƒ'], correct: 1 },
        { question: 'ç›´é£žè¦å¤šé•¿æ—¶é—´ï¼Ÿ', options: ['ä¸‰ä¸ªå°æ—¶', 'å››ä¸ªå°æ—¶', 'äº”ä¸ªå°æ—¶', 'å…­ä¸ªå°æ—¶'], correct: 2 }
    ]
},
{
    id: 'le335',
    type: 'dialogue',
    difficulty: 'hard',
    title: 'çœ‹ç—…',
    meaning: 'Seeing a Doctor',
    turns: [
        { speaker: 'A', chinese: 'åŒ»ç”Ÿï¼Œæˆ‘æœ€è¿‘æ€»æ˜¯æ„Ÿè§‰å¾ˆç´¯ã€‚', pinyin: 'yi1 sheng1, wo3 zui4 jin4 zong3 shi4 gan3 jue2 hen3 lei4.', meaning: 'Doctor, I have been feeling very tired lately.' },
        { speaker: 'B', chinese: 'å¤šé•¿æ—¶é—´äº†ï¼Ÿè¿˜æœ‰åˆ«çš„ç—‡çŠ¶å—ï¼Ÿ', pinyin: 'duo1 chang2 shi2 jian1 le? hai2 you3 bie2 de zheng4 zhuang4 ma?', meaning: 'How long has this been going on? Any other symptoms?' },
        { speaker: 'A', chinese: 'å¤§æ¦‚ä¸¤ä¸ªæ˜ŸæœŸã€‚æœ‰æ—¶å€™å¤´æ™•ã€ç¡ä¸å¥½è§‰ã€‚', pinyin: 'da4 gai4 liang3 ge4 xing1 qi1. you3 shi2 hou4 tou2 yun1, shui4 bu4 hao3 jiao4.', meaning: 'About two weeks. Sometimes I feel dizzy and can\'t sleep well.' },
        { speaker: 'B', chinese: 'ä½ æœ€è¿‘å·¥ä½œåŽ‹åŠ›å¤§å—ï¼Ÿ', pinyin: 'ni3 zui4 jin4 gong1 zuo4 ya1 li4 da4 ma?', meaning: 'Have you been under a lot of work pressure lately?' },
        { speaker: 'A', chinese: 'æ˜¯çš„ï¼Œæœ€è¿‘ç»å¸¸åŠ ç­åˆ°å¾ˆæ™šã€‚', pinyin: 'shi4 de, zui4 jin4 jing1 chang2 jia1 ban1 dao4 hen3 wan3.', meaning: 'Yes, I often work overtime until very late.' },
        { speaker: 'B', chinese: 'æˆ‘å…ˆç»™ä½ é‡è¡€åŽ‹ï¼Œç„¶åŽæŠ½è¡€æ£€æŸ¥ä¸€ä¸‹ã€‚', pinyin: 'wo3 xian1 gei3 ni3 liang2 xie3 ya1, ran2 hou4 chou1 xue3 jian3 cha2 yi2 xia4.', meaning: 'Let me first check your blood pressure, then draw blood for testing.' },
        { speaker: 'A', chinese: 'è°¢è°¢åŒ»ç”Ÿã€‚ç»“æžœä»€ä¹ˆæ—¶å€™å‡ºæ¥ï¼Ÿ', pinyin: 'xie4 xie yi1 sheng1. jie2 guo3 shen2 me shi2 hou4 chu1 lai2?', meaning: 'Thank you doctor. When will the results come out?' }
    ],
    questions: [
        { question: 'ä»–ä¸èˆ’æœå¤šé•¿æ—¶é—´äº†ï¼Ÿ', options: ['ä¸€ä¸ªæ˜ŸæœŸ', 'ä¸¤ä¸ªæ˜ŸæœŸ', 'ä¸‰ä¸ªæ˜ŸæœŸ', 'ä¸€ä¸ªæœˆ'], correct: 1 },
        { question: 'ä»–ä¸ºä»€ä¹ˆæ„Ÿè§‰ç´¯ï¼Ÿ', options: ['è¿åŠ¨å¤ªå¤š', 'ç»å¸¸åŠ ç­', 'é¥®é£Ÿä¸å¥½', 'å¤©æ°”åŽŸå› '], correct: 1 },
        { question: 'åŒ»ç”Ÿè¦åšä»€ä¹ˆæ£€æŸ¥ï¼Ÿ', options: ['ç…§Xå…‰', 'æŠ½è¡€æ£€æŸ¥', 'åšCT', 'åšBè¶…'], correct: 1 }
    ]
},
{
    id: 'le336',
    type: 'dialogue',
    difficulty: 'hard',
    title: 'è®²ä»·',
    meaning: 'Bargaining',
    turns: [
        { speaker: 'A', chinese: 'è€æ¿ï¼Œè¿™ä¸ªåŒ…æ€Žä¹ˆå–ï¼Ÿ', pinyin: 'lao3 ban3, zhe4 ge4 bao1 zen3 me mai4?', meaning: 'Boss, how much is this bag?' },
        { speaker: 'B', chinese: 'è¿™ä¸ªæ˜¯æ‰‹å·¥çš„ï¼Œäº”ç™¾å…«åå—ã€‚', pinyin: 'zhe4 ge4 shi4 shou3 gong1 de, wu3 bai3 ba1 shi2 kuai4.', meaning: 'This one is handmade, 580 yuan.' },
        { speaker: 'A', chinese: 'å¤ªè´µäº†ï¼èƒ½ä¾¿å®œä¸€ç‚¹å—ï¼Ÿ', pinyin: 'tai4 gui4 le! neng2 pian2 yi2 yi4 dian3 ma?', meaning: 'Too expensive! Can you make it cheaper?' },
        { speaker: 'B', chinese: 'ä½ å‡ºä¸ªä»·å§ã€‚', pinyin: 'ni3 chu1 ge4 jia4 ba.', meaning: 'Give me your price.' },
        { speaker: 'A', chinese: 'ä¸‰ç™¾å—ï¼Œæ€Žä¹ˆæ ·ï¼Ÿ', pinyin: 'san1 bai3 kuai4, zen3 me yang4?', meaning: 'How about 300 yuan?' },
        { speaker: 'B', chinese: 'ä¸è¡Œä¸è¡Œï¼Œå¤ªå°‘äº†ã€‚æœ€å°‘å››ç™¾äº”ã€‚', pinyin: 'bu4 xing2 bu4 xing2, tai4 shao3 le. zui4 shao3 si4 bai3 wu3.', meaning: 'No, no, that\'s too low. The minimum is 450.' },
        { speaker: 'A', chinese: 'å››ç™¾è¡Œå—ï¼Ÿè¡Œæˆ‘å°±æ‹¿ã€‚', pinyin: 'si4 bai3 xing2 ma? xing2 wo3 jiu4 na2.', meaning: 'How about 400? If that works, I\'ll take it.' }
    ],
    questions: [
        { question: 'åŒ…çš„åŽŸä»·æ˜¯å¤šå°‘ï¼Ÿ', options: ['å››ç™¾å…«åå—', 'äº”ç™¾å…«åå—', 'å…­ç™¾å…«åå—', 'ä¸‰ç™¾å…«åå—'], correct: 1 },
        { question: 'Aæœ€åŽå‡ºä»·å¤šå°‘ï¼Ÿ', options: ['ä¸‰ç™¾', 'ä¸‰ç™¾äº”', 'å››ç™¾', 'å››ç™¾äº”'], correct: 2 }
    ]
},
{
    id: 'le337',
    type: 'dialogue',
    difficulty: 'hard',
    title: 'é¢è¯•',
    meaning: 'Job Interview',
    turns: [
        { speaker: 'A', chinese: 'è¯·ç®€å•ä»‹ç»ä¸€ä¸‹ä½ è‡ªå·±ã€‚', pinyin: 'qing3 jian3 dan1 jie4 shao4 yi2 xia4 ni3 zi4 ji3.', meaning: 'Please briefly introduce yourself.' },
        { speaker: 'B', chinese: 'æˆ‘å­¦è®¡ç®—æœºä¸“ä¸šï¼Œæœ‰ä¸‰å¹´å·¥ä½œç»éªŒã€‚', pinyin: 'wo3 xue2 ji4 suan4 ji1 zhuan1 ye4, you3 san1 nian2 gong1 zuo4 jing1 yan4.', meaning: 'I studied computer science and have three years of work experience.' },
        { speaker: 'A', chinese: 'ä½ ä¸ºä»€ä¹ˆæƒ³åœ¨æˆ‘ä»¬å…¬å¸å·¥ä½œï¼Ÿ', pinyin: 'ni3 wei4 shen2 me xiang3 zai4 wo3 men gong1 si1 gong1 zuo4?', meaning: 'Why do you want to work at our company?' },
        { speaker: 'B', chinese: 'æˆ‘å¾ˆå–œæ¬¢ä½ ä»¬çš„äº§å“ï¼Œè€Œä¸”è´µå…¬å¸å‘å±•å¾ˆå¿«ã€‚', pinyin: 'wo3 hen3 xi3 huan1 ni3 men de chan3 pin3, er2 qie3 gui4 gong1 si1 fa1 zhan3 hen3 kuai4.', meaning: 'I really like your products, and your company is growing very fast.' },
        { speaker: 'A', chinese: 'ä½ å¯¹å·¥èµ„æœ‰ä»€ä¹ˆè¦æ±‚ï¼Ÿ', pinyin: 'ni3 dui4 gong1 zi1 you3 shen2 me yao1 qiu2?', meaning: 'What are your salary expectations?' },
        { speaker: 'B', chinese: 'æ ¹æ®æˆ‘çš„ç»éªŒï¼Œæˆ‘å¸Œæœ›æœˆè–ªåœ¨ä¸€ä¸‡ä»¥ä¸Šã€‚', pinyin: 'gen1 ju4 wo3 de jing1 yan4, wo3 xi1 wang4 yue4 xin1 zai4 yi2 wan4 yi3 shang4.', meaning: 'Based on my experience, I hope for a monthly salary above 10,000.' },
        { speaker: 'A', chinese: 'å¥½çš„ï¼Œæˆ‘ä»¬ä¼šé€šçŸ¥ä½ é¢è¯•ç»“æžœã€‚', pinyin: 'hao3 de, wo3 men hui4 tong1 zhi1 ni3 mian4 shi4 jie2 guo3.', meaning: 'OK, we will inform you of the interview result.' }
    ],
    questions: [
        { question: 'Bæœ‰å‡ å¹´çš„å·¥ä½œç»éªŒï¼Ÿ', options: ['ä¸€å¹´', 'ä¸¤å¹´', 'ä¸‰å¹´', 'å››å¹´'], correct: 2 },
        { question: 'Bå¸Œæœ›æœˆè–ªå¤šå°‘ï¼Ÿ', options: ['äº”åƒä»¥ä¸Š', 'å…«åƒä»¥ä¸Š', 'ä¸€ä¸‡ä»¥ä¸Š', 'ä¸€ä¸‡äº”ä»¥ä¸Š'], correct: 2 },
        { question: 'Bå­¦ä»€ä¹ˆä¸“ä¸šï¼Ÿ', options: ['è‹±è¯­', 'æ•°å­¦', 'è®¡ç®—æœº', 'ç»æµŽ'], correct: 2 }
    ]
},
{
    id: 'le338',
    type: 'dialogue',
    difficulty: 'hard',
    title: 'è¡ŒæŽä¸¢å¤±',
    meaning: 'Lost Luggage',
    turns: [
        { speaker: 'A', chinese: 'ä½ å¥½ï¼Œæˆ‘çš„è¡ŒæŽæ²¡å‡ºæ¥ã€‚', pinyin: 'ni3 hao3, wo3 de xing2 li3 mei2 chu1 lai2.', meaning: 'Hello, my luggage didn\'t come out.' },
        { speaker: 'B', chinese: 'è¯·å‡ºç¤ºä½ çš„ç™»æœºç‰Œå’Œè¡ŒæŽç‰Œã€‚', pinyin: 'qing3 chu1 shi4 ni3 de deng1 ji1 pai2 he2 xing2 li3 pai2.', meaning: 'Please show your boarding pass and luggage tag.' },
        { speaker: 'A', chinese: 'ç»™ä½ ã€‚è¡ŒæŽæ˜¯é»‘è‰²çš„ç®±å­ã€‚', pinyin: 'gei3 ni3. xing2 li3 shi4 hei1 se4 de xiang1 zi.', meaning: 'Here. It\'s a black suitcase.' },
        { speaker: 'B', chinese: 'æˆ‘çœ‹ä¸€ä¸‹è®°å½•...ä½ çš„è¡ŒæŽè¿˜åœ¨å‡ºå‘åœ°ã€‚', pinyin: 'wo3 kan4 yi2 xia4 ji4 lu4... ni3 de xing2 li3 hai2 zai4 chu1 fa1 di4.', meaning: 'Let me check the records... Your luggage is still at the departure airport.' },
        { speaker: 'A', chinese: 'æ€Žä¹ˆä¼šè¿™æ ·ï¼Ÿæˆ‘è¯¥æ€Žä¹ˆåŠžï¼Ÿ', pinyin: 'zen3 me hui4 zhe4 yang4? wo3 gai1 zen3 me ban4?', meaning: 'How could this happen? What should I do?' },
        { speaker: 'B', chinese: 'è¯·å¡«å†™è¿™å¼ è¡¨ã€‚æˆ‘ä»¬æ˜Žå¤©é€åˆ°ä½ çš„é…’åº—ã€‚', pinyin: 'qing3 tian2 xie3 zhe4 zhang1 biao3. wo3 men ming2 tian1 song4 dao4 ni3 de jiu3 dian4.', meaning: 'Please fill out this form. We will deliver it to your hotel tomorrow.' }
    ],
    questions: [
        { question: 'è¡ŒæŽçŽ°åœ¨åœ¨å“ªé‡Œï¼Ÿ', options: ['åœ¨é…’åº—', 'åœ¨æœºåœº', 'åœ¨å‡ºå‘åœ°', 'åœ¨è·¯ä¸Š'], correct: 2 },
        { question: 'è¡ŒæŽä»€ä¹ˆæ—¶å€™é€åˆ°ï¼Ÿ', options: ['ä»Šå¤©', 'æ˜Žå¤©', 'åŽå¤©', 'ä¸‰å¤©åŽ'], correct: 1 },
        { question: 'è¡ŒæŽæ˜¯ä»€ä¹ˆé¢œè‰²çš„ï¼Ÿ', options: ['çº¢è‰²', 'è“è‰²', 'é»‘è‰²', 'ç°è‰²'], correct: 2 }
    ]
},
{
    id: 'le339',
    type: 'dialogue',
    difficulty: 'hard',
    title: 'æŠ¥è­¦',
    meaning: 'Reporting to the Police',
    turns: [
        { speaker: 'A', chinese: 'ä½ å¥½ï¼Œæˆ‘è¦æŠ¥æ¡ˆã€‚æˆ‘çš„æ‰‹æœºè¢«å·äº†ã€‚', pinyin: 'ni3 hao3, wo3 yao4 bao4 an4. wo3 de shou3 ji1 bei4 tou1 le.', meaning: 'Hello, I want to report a case. My phone was stolen.' },
        { speaker: 'B', chinese: 'åœ¨å“ªé‡Œè¢«å·çš„ï¼Ÿä»€ä¹ˆæ—¶å€™å‘ç”Ÿçš„ï¼Ÿ', pinyin: 'zai4 na3 li3 bei4 tou1 de? shen2 me shi2 hou4 fa1 sheng1 de?', meaning: 'Where was it stolen? When did it happen?' },
        { speaker: 'A', chinese: 'åœ¨åœ°é“ä¸Šï¼Œå¤§æ¦‚åŠå°æ—¶å‰ã€‚', pinyin: 'zai4 di4 tie3 shang4, da4 gai4 ban4 xiao3 shi2 qian2.', meaning: 'On the subway, about half an hour ago.' },
        { speaker: 'B', chinese: 'æ˜¯ä»€ä¹ˆç‰Œå­çš„æ‰‹æœºï¼Ÿä»€ä¹ˆé¢œè‰²ï¼Ÿ', pinyin: 'shi4 shen2 me pai2 zi de shou3 ji1? shen2 me yan2 se4?', meaning: 'What brand of phone? What color?' },
        { speaker: 'A', chinese: 'ç™½è‰²çš„è‹¹æžœæ‰‹æœºã€‚', pinyin: 'bai2 se4 de ping2 guo3 shou3 ji1.', meaning: 'A white iPhone.' },
        { speaker: 'B', chinese: 'å¥½çš„ï¼Œè¯·å¡«ä¸€ä¸‹è¿™å¼ è¡¨ã€‚æˆ‘ä»¬ä¼šå°½åŠ›å¸®ä½ æ‰¾ã€‚', pinyin: 'hao3 de, qing3 tian2 yi2 xia4 zhe4 zhang1 biao3. wo3 men hui4 jin4 li4 bang1 ni3 zhao3.', meaning: 'OK, please fill out this form. We will do our best to help you find it.' }
    ],
    questions: [
        { question: 'æ‰‹æœºåœ¨å“ªé‡Œè¢«å·çš„ï¼Ÿ', options: ['å…¬äº¤ä¸Š', 'åœ°é“ä¸Š', 'å•†åœºé‡Œ', 'è·¯ä¸Š'], correct: 1 },
        { question: 'è¢«å·å¤šä¹…äº†ï¼Ÿ', options: ['åäº”åˆ†é’Ÿ', 'åŠå°æ—¶', 'ä¸€å°æ—¶', 'ä¸¤å°æ—¶'], correct: 1 },
        { question: 'æ‰‹æœºæ˜¯ä»€ä¹ˆé¢œè‰²çš„ï¼Ÿ', options: ['é»‘è‰²', 'ç™½è‰²', 'é‡‘è‰²', 'è“è‰²'], correct: 1 }
    ]
},
{
    id: 'le340',
    type: 'dialogue',
    difficulty: 'hard',
    title: 'å•†åŠ¡ä¼šè®®',
    meaning: 'Business Meeting',
    turns: [
        { speaker: 'A', chinese: 'æ„Ÿè°¢å¤§å®¶æ¥å‚åŠ ä»Šå¤©çš„ä¼šè®®ã€‚', pinyin: 'gan3 xie4 da4 jia1 lai2 can1 jia1 jin1 tian1 de hui4 yi4.', meaning: 'Thank you all for coming to today\'s meeting.' },
        { speaker: 'B', chinese: 'è¿™æ¬¡æˆ‘ä»¬è¦è®¨è®ºä¸‹åŠå¹´çš„é”€å”®è®¡åˆ’ã€‚', pinyin: 'zhe4 ci4 wo3 men yao4 tao3 lun4 xia4 ban4 nian2 de xiao1 shou4 ji4 hua4.', meaning: 'This time we need to discuss the sales plan for the second half of the year.' },
        { speaker: 'A', chinese: 'ä¸ŠåŠå¹´çš„é”€å”®é¢å¢žé•¿äº†ç™¾åˆ†ä¹‹åäº”ã€‚', pinyin: 'shang4 ban4 nian2 de xiao1 shou4 e2 zeng1 zhang3 le bai3 fen1 zhi1 shi2 wu3.', meaning: 'Sales in the first half increased by 15%.' },
        { speaker: 'B', chinese: 'å¾ˆå¥½ã€‚ä½†æ˜¯æˆ‘ä»¬çš„ç›®æ ‡æ˜¯å¤šå°‘ï¼Ÿ', pinyin: 'hen3 hao3. dan4 shi4 wo3 men de mu4 biao1 shi4 duo1 shao3?', meaning: 'Great. But what is our target?' },
        { speaker: 'A', chinese: 'ä¸‹åŠå¹´çš„ç›®æ ‡æ˜¯å†å¢žé•¿ç™¾åˆ†ä¹‹äºŒåã€‚', pinyin: 'xia4 ban4 nian2 de mu4 biao1 shi4 zai4 zeng1 zhang3 bai3 fen1 zhi1 er4 shi2.', meaning: 'The target for the second half is another 20% increase.' },
        { speaker: 'B', chinese: 'ä¸ºäº†å®žçŽ°è¿™ä¸ªç›®æ ‡ï¼Œæˆ‘ä»¬éœ€è¦æ‰©å¤§å¸‚åœºæŽ¨å¹¿çš„é¢„ç®—ã€‚', pinyin: 'wei4 le shi2 xian4 zhe4 ge4 mu4 biao1, wo3 men xu1 yao4 kuo4 da4 shi4 chang3 tui1 guang3 de yu4 suan4.', meaning: 'To achieve this goal, we need to expand the marketing budget.' },
        { speaker: 'A', chinese: 'æˆ‘åŒæ„ã€‚å¤§å®¶æœ‰ä»€ä¹ˆå»ºè®®å—ï¼Ÿ', pinyin: 'wo3 tong2 yi4. da4 jia1 you3 shen2 me jian4 yi4 ma?', meaning: 'I agree. Does anyone have any suggestions?' }
    ],
    questions: [
        { question: 'ä¸ŠåŠå¹´é”€å”®é¢å¢žé•¿äº†å¤šå°‘ï¼Ÿ', options: ['ç™¾åˆ†ä¹‹å', 'ç™¾åˆ†ä¹‹åäº”', 'ç™¾åˆ†ä¹‹äºŒå', 'ç™¾åˆ†ä¹‹äºŒåäº”'], correct: 1 },
        { question: 'ä¸‹åŠå¹´ç›®æ ‡æ˜¯å¤šå°‘ï¼Ÿ', options: ['ç™¾åˆ†ä¹‹å', 'ç™¾åˆ†ä¹‹åäº”', 'ç™¾åˆ†ä¹‹äºŒå', 'ç™¾åˆ†ä¹‹äºŒåäº”'], correct: 2 },
        { question: 'Bå»ºè®®æ‰©å¤§ä»€ä¹ˆï¼Ÿ', options: ['ç”Ÿäº§é¢„ç®—', 'å¸‚åœºæŽ¨å¹¿é¢„ç®—', 'ç ”å‘é¢„ç®—', 'äººå‘˜é¢„ç®—'], correct: 1 }
    ]
},
{
    id: 'le341',
    type: 'dialogue',
    difficulty: 'hard',
    title: 'è°ˆçˆ±å¥½',
    meaning: 'Discussing Hobbies',
    turns: [
        { speaker: 'A', chinese: 'ä½ å¹³æ—¶æœ‰ä»€ä¹ˆçˆ±å¥½ï¼Ÿ', pinyin: 'ni3 ping2 shi2 you3 shen2 me ai4 hao4?', meaning: 'What hobbies do you usually have?' },
        { speaker: 'B', chinese: 'æˆ‘å–œæ¬¢æ‘„å½±ï¼Œç‰¹åˆ«æ˜¯æ‹é£Žæ™¯ã€‚', pinyin: 'wo3 xi3 huan1 she4 ying3, te4 bie2 shi4 pai1 feng1 jing3.', meaning: 'I like photography, especially landscape photography.' },
        { speaker: 'A', chinese: 'æ‘„å½±å¾ˆæœ‰æ„æ€ã€‚ä½ ç”¨ä»€ä¹ˆç›¸æœºï¼Ÿ', pinyin: 'she4 ying3 hen3 you3 yi4 si1. ni3 yong4 shen2 me xiang4 ji1?', meaning: 'Photography is very interesting. What camera do you use?' },
        { speaker: 'B', chinese: 'æˆ‘ç”¨çš„æ˜¯ä½³èƒ½ç›¸æœºã€‚ä¸Šå‘¨æˆ‘åˆšä»Žäº‘å—å›žæ¥ï¼Œæ‹äº†å¾ˆå¤šç¾Žä¸½çš„ç…§ç‰‡ã€‚', pinyin: 'wo3 yong4 de shi4 jia1 neng2 xiang4 ji1. shang4 zhou1 wo3 gang1 cong2 yun2 nan2 hui2 lai2, pai1 le hen3 duo1 mei3 li4 de zhao4 pian4.', meaning: 'I use a Canon camera. Last week I just came back from Yunnan and took lots of beautiful photos.' },
        { speaker: 'A', chinese: 'å¤ªæ£’äº†ï¼æœ‰æœºä¼šç»™æˆ‘çœ‹çœ‹ä½ çš„ä½œå“ã€‚', pinyin: 'tai4 bang4 le! you3 ji1 hui4 gei3 wo3 kan4 kan4 ni3 de zuo4 pin3.', meaning: 'That\'s great! Show me your work sometime when you get a chance.' },
        { speaker: 'B', chinese: 'æ²¡é—®é¢˜ã€‚ä½ ä¹Ÿå–œæ¬¢æ—…è¡Œå—ï¼Ÿ', pinyin: 'mei2 wen4 ti2. ni3 ye3 xi3 huan1 lv3 xing2 ma?', meaning: 'No problem. Do you also like traveling?' }
    ],
    questions: [
        { question: 'Bæœ‰ä»€ä¹ˆçˆ±å¥½ï¼Ÿ', options: ['ç”»ç”»', 'æ‘„å½±', 'çœ‹ä¹¦', 'è¿åŠ¨'], correct: 1 },
        { question: 'Båˆšä»Žå“ªä¸ªåœ°æ–¹å›žæ¥ï¼Ÿ', options: ['å››å·', 'äº‘å—', 'å¹¿è¥¿', 'è´µå·ž'], correct: 1 },
        { question: 'Bç”¨ä»€ä¹ˆç‰Œå­çš„ç›¸æœºï¼Ÿ', options: ['å°¼åº·', 'ç´¢å°¼', 'ä½³èƒ½', 'å¯Œå£«'], correct: 2 }
    ]
},
{
    id: 'le342',
    type: 'dialogue',
    difficulty: 'hard',
    title: 'äº¤æµèœè°±',
    meaning: 'Exchanging Recipes',
    turns: [
        { speaker: 'A', chinese: 'ä½ åšçš„è¥¿çº¢æŸ¿ç‚’é¸¡è›‹çœŸå¥½åƒï¼èƒ½æ•™æˆ‘å—ï¼Ÿ', pinyin: 'ni3 zuo4 de xi1 hong2 shi4 chao3 ji1 dan4 zhen1 hao3 chi1! neng2 jiao1 wo3 ma?', meaning: 'Your tomato scrambled eggs are delicious! Can you teach me?' },
        { speaker: 'B', chinese: 'å½“ç„¶å¯ä»¥ï¼å…¶å®žå¾ˆç®€å•ã€‚', pinyin: 'dang1 ran2 ke3 yi3! qi2 shi2 hen3 jian3 dan1.', meaning: 'Of course! Actually it is very simple.' },
        { speaker: 'A', chinese: 'éœ€è¦å‡†å¤‡å“ªäº›ææ–™ï¼Ÿ', pinyin: 'xu1 yao4 zhun3 bei4 na3 xie1 cai2 liao4?', meaning: 'What ingredients do I need?' },
        { speaker: 'B', chinese: 'ä¸‰ä¸ªé¸¡è›‹ã€ä¸¤ä¸ªè¥¿çº¢æŸ¿ã€è‘±ã€ç›å’Œç³–ã€‚', pinyin: 'san1 ge4 ji1 dan4, liang3 ge4 xi1 hong2 shi4, cong1, yan2 he2 tang2.', meaning: 'Three eggs, two tomatoes, scallions, salt, and sugar.' },
        { speaker: 'A', chinese: 'æ­¥éª¤å‘¢ï¼Ÿå…ˆç‚’é¸¡è›‹è¿˜æ˜¯å…ˆç‚’è¥¿çº¢æŸ¿ï¼Ÿ', pinyin: 'bu4 zhou4 ne? xian1 chao3 ji1 dan4 hai2 shi4 xian1 chao3 xi1 hong2 shi4?', meaning: 'And the steps? Scramble the eggs first or the tomatoes first?' },
        { speaker: 'B', chinese: 'å…ˆç‚’é¸¡è›‹ï¼Œå–å‡ºæ¥ã€‚ç„¶åŽç‚’è¥¿çº¢æŸ¿ï¼ŒåŠ ä¸€ç‚¹ç³–ï¼Œæœ€åŽæŠŠé¸¡è›‹å€’å›žåŽ»ä¸€èµ·ç‚’ã€‚', pinyin: 'xian1 chao3 ji1 dan4, qu3 chu1 lai2. ran2 hou4 chao3 xi1 hong2 shi4, jia1 yi4 dian3 tang2, zui4 hou4 ba3 ji1 dan4 dao4 hui2 qu4 yi4 qi3 chao3.', meaning: 'First scramble the eggs and take them out. Then cook the tomatoes with a bit of sugar, and finally put the eggs back and stir-fry them together.' }
    ],
    questions: [
        { question: 'éœ€è¦å‡ ä¸ªé¸¡è›‹ï¼Ÿ', options: ['ä¸¤ä¸ª', 'ä¸‰ä¸ª', 'å››ä¸ª', 'äº”ä¸ª'], correct: 1 },
        { question: 'è¥¿çº¢æŸ¿ç‚’é¸¡è›‹è¦åŠ ä»€ä¹ˆè°ƒæ–™ï¼Ÿ', options: ['ç›å’Œé†‹', 'ç›å’Œé…±æ²¹', 'ç›å’Œç³–', 'ç›å’Œå‘³ç²¾'], correct: 2 }
    ]
},
{
    id: 'le343',
    type: 'dialogue',
    difficulty: 'hard',
    title: 'è®¡åˆ’æ—…è¡Œ',
    meaning: 'Planning a Trip',
    turns: [
        { speaker: 'A', chinese: 'æˆ‘ä»¬æš‘å‡åŽ»å“ªé‡ŒçŽ©ï¼Ÿ', pinyin: 'wo3 men shu3 jia4 qu4 na3 li3 wan2?', meaning: 'Where should we go for summer vacation?' },
        { speaker: 'B', chinese: 'æˆ‘æƒ³åŽ»è¥¿å®‰çœ‹å…µé©¬ä¿‘ã€‚', pinyin: 'wo3 xiang3 qu4 xi1 an1 kan4 bing1 ma3 yong3.', meaning: 'I want to go to Xi\'an to see the Terracotta Warriors.' },
        { speaker: 'A', chinese: 'å¥½ä¸»æ„ï¼è¥¿å®‰å°åƒä¹Ÿå¾ˆæœ‰åã€‚', pinyin: 'hao3 zhu3 yi4! xi1 an1 xiao3 chi1 ye3 hen3 you3 ming2.', meaning: 'Good idea! Xi\'an snacks are also very famous.' },
        { speaker: 'B', chinese: 'å¯¹ï¼æˆ‘ä»¬è¦æå‰è®¢æœºç¥¨å’Œé…’åº—ã€‚', pinyin: 'dui4! wo3 men yao4 ti2 qian2 ding4 ji1 piao4 he2 jiu3 dian4.', meaning: 'Yes! We need to book flights and hotel in advance.' },
        { speaker: 'A', chinese: 'åŽ»å‡ å¤©æ¯”è¾ƒå¥½ï¼Ÿ', pinyin: 'qu4 ji3 tian1 bi3 jiao4 hao3?', meaning: 'How many days would be best?' },
        { speaker: 'B', chinese: 'å››å¤©åº”è¯¥å¤Ÿäº†ã€‚æˆ‘æŸ¥ä¸€ä¸‹é«˜é“ç¥¨ã€‚', pinyin: 'si4 tian1 ying1 gai1 gou4 le. wo3 cha2 yi2 xia4 gao1 tie3 piao4.', meaning: 'Four days should be enough. Let me check the high-speed train tickets.' },
        { speaker: 'A', chinese: 'åé«˜é“æ¯”åé£žæœºæ–¹ä¾¿ã€‚', pinyin: 'zuo4 gao1 tie3 bi3 zuo4 fei1 ji1 fang1 bian4.', meaning: 'Taking the high-speed train is more convenient than flying.' }
    ],
    questions: [
        { question: 'ä»–ä»¬æƒ³åŽ»å“ªä¸ªåŸŽå¸‚ï¼Ÿ', options: ['åŒ—äº¬', 'ä¸Šæµ·', 'è¥¿å®‰', 'æˆéƒ½'], correct: 2 },
        { question: 'ä»–ä»¬æƒ³åä»€ä¹ˆäº¤é€šå·¥å…·ï¼Ÿ', options: ['é£žæœº', 'é«˜é“', 'å¤§å·´', 'è‡ªé©¾'], correct: 1 },
        { question: 'ä»–ä»¬æ‰“ç®—åŽ»å‡ å¤©ï¼Ÿ', options: ['ä¸‰å¤©', 'å››å¤©', 'äº”å¤©', 'å…­å¤©'], correct: 1 }
    ]
},
{
    id: 'le344',
    type: 'dialogue',
    difficulty: 'hard',
    title: 'æˆ¿ä¸œä¸Žç§Ÿå®¢',
    meaning: 'Landlord and Tenant',
    turns: [
        { speaker: 'A', chinese: 'ä½ å¥½ï¼Œæˆ‘åŽ¨æˆ¿çš„æ°´é¾™å¤´åäº†ã€‚', pinyin: 'ni3 hao3, wo3 chu2 fang2 de shui3 long2 tou2 huai4 le.', meaning: 'Hello, the kitchen faucet is broken.' },
        { speaker: 'B', chinese: 'ä»€ä¹ˆæ—¶å€™åçš„ï¼Ÿ', pinyin: 'shen2 me shi2 hou4 huai4 de?', meaning: 'When did it break?' },
        { speaker: 'A', chinese: 'æ˜¨å¤©æ™šä¸Šå¼€å§‹æ¼æ°´ï¼Œä¸€ç›´æ»´æ°´ã€‚', pinyin: 'zuo2 tian1 wan3 shang4 kai1 shi3 lou4 shui3, yi4 zhi2 di1 shui3.', meaning: 'It started leaking last night, keeps dripping.' },
        { speaker: 'B', chinese: 'å¥½çš„ï¼Œæˆ‘ä»Šå¤©ä¸‹åˆå«ç»´ä¿®å·¥äººè¿‡åŽ»ã€‚', pinyin: 'hao3 de, wo3 jin1 tian1 xia4 wu3 jiao4 wei2 xiu1 gong1 ren2 guo4 qu4.', meaning: 'OK, I will call a repairman to come over this afternoon.' },
        { speaker: 'A', chinese: 'å¤§æ¦‚å‡ ç‚¹ï¼Ÿæˆ‘è¦å®‰æŽ’åœ¨å®¶ç­‰ã€‚', pinyin: 'da4 gai4 ji3 dian3? wo3 yao4 an1 pai2 zai4 jia1 deng3.', meaning: 'Around what time? I need to arrange to be home and wait.' },
        { speaker: 'B', chinese: 'ä¸¤ç‚¹åˆ°å››ç‚¹ä¹‹é—´ã€‚å¦å¤–ï¼Œä¸‹ä¸ªå­£åº¦çš„æˆ¿ç§Ÿè¯¥äº¤äº†ã€‚', pinyin: 'liang3 dian3 dao4 si4 dian3 zhi1 jian1. ling4 wai4, xia4 ge4 ji4 du4 de fang2 zu1 gai1 jiao1 le.', meaning: 'Between 2 and 4 PM. Also, the rent for next quarter is due.' }
    ],
    questions: [
        { question: 'ä»€ä¹ˆä¸œè¥¿åäº†ï¼Ÿ', options: ['æ°´é¾™å¤´', 'ç”µç¯', 'ç©ºè°ƒ', 'å†°ç®±'], correct: 0 },
        { question: 'ç»´ä¿®å·¥äººå‡ ç‚¹æ¥ï¼Ÿ', options: ['ä¸Šåˆä¸¤ç‚¹åˆ°å››ç‚¹', 'ä¸‹åˆä¸¤ç‚¹åˆ°å››ç‚¹', 'ä¸‹åˆä¸‰ç‚¹åˆ°äº”ç‚¹', 'æ˜Žå¤©'], correct: 1 }
    ]
},
{
    id: 'le345',
    type: 'dialogue',
    difficulty: 'hard',
    title: 'ä¿®è½¦',
    meaning: 'Car Repair',
    turns: [
        { speaker: 'A', chinese: 'ä½ å¥½ï¼Œæˆ‘çš„è½¦æœ‰ç‚¹é—®é¢˜ã€‚', pinyin: 'ni3 hao3, wo3 de che1 you3 dian3 wen4 ti2.', meaning: 'Hello, there is some problem with my car.' },
        { speaker: 'B', chinese: 'ä»€ä¹ˆé—®é¢˜ï¼Ÿè¯·è¯¦ç»†è¯´ä¸€ä¸‹ã€‚', pinyin: 'shen2 me wen4 ti2? qing3 xiang2 xi4 shuo1 yi2 xia4.', meaning: 'What problem? Please describe in detail.' },
        { speaker: 'A', chinese: 'å‘åŠ¨çš„æ—¶å€™æœ‰å¥‡æ€ªçš„å£°éŸ³ï¼Œè€Œä¸”åˆ¹è½¦ä¸å¤ªçµæ•ã€‚', pinyin: 'fa1 dong4 de shi2 hou4 you3 qi2 guai4 de sheng1 yin1, er2 qie3 sha1 che1 bu2 tai4 ling2 min3.', meaning: 'There is a strange noise when starting, and the brakes are not very responsive.' },
        { speaker: 'B', chinese: 'æˆ‘å¸®ä½ æ£€æŸ¥ä¸€ä¸‹ã€‚å¤§æ¦‚éœ€è¦ä¸€ä¸ªå°æ—¶ã€‚', pinyin: 'wo3 bang1 ni3 jian3 cha2 yi2 xia4. da4 gai4 xu1 yao4 yi2 ge4 xiao3 shi2.', meaning: 'Let me check it for you. It will take about an hour.' },
        { speaker: 'A', chinese: 'å¥½çš„ã€‚ä¿®ç†è´¹å¤§æ¦‚å¤šå°‘ï¼Ÿ', pinyin: 'hao3 de. xiu1 li3 fei4 da4 gai4 duo1 shao3?', meaning: 'OK. How much will the repair cost roughly?' },
        { speaker: 'B', chinese: 'æ£€æŸ¥å®Œæ‰èƒ½ç¡®å®šã€‚ä½ å…ˆåœ¨è¿™é‡Œç­‰ä¸€ä¸‹ã€‚', pinyin: 'jian3 cha2 wan2 cai2 neng2 que4 ding4. ni3 xian1 zai4 zhe4 li3 deng3 yi2 xia4.', meaning: 'We can only determine that after checking. Please wait here for a moment.' }
    ],
    questions: [
        { question: 'è½¦æœ‰ä»€ä¹ˆé—®é¢˜ï¼Ÿ', options: ['å‘åŠ¨æœºå’Œåˆ¹è½¦', 'ç©ºè°ƒå’Œå‘åŠ¨æœº', 'åˆ¹è½¦å’Œè½®èƒŽ', 'è½®èƒŽå’Œå‘åŠ¨æœº'], correct: 0 },
        { question: 'æ£€æŸ¥è¦å¤šä¹…ï¼Ÿ', options: ['åŠå°æ—¶', 'ä¸€å°æ—¶', 'ä¸€ä¸ªåŠå°æ—¶', 'ä¸¤å°æ—¶'], correct: 1 }
    ]
},
{
    id: 'le346',
    type: 'dialogue',
    difficulty: 'hard',
    title: 'è¿‡æµ·å…³',
    meaning: 'Going Through Customs',
    turns: [
        { speaker: 'A', chinese: 'ä½ å¥½ï¼Œè¯·å‡ºç¤ºæŠ¤ç…§ã€‚', pinyin: 'ni3 hao3, qing3 chu1 shi4 hu4 zhao4.', meaning: 'Hello, please show your passport.' },
        { speaker: 'B', chinese: 'ç»™ä½ ã€‚', pinyin: 'gei3 ni3.', meaning: 'Here you are.' },
        { speaker: 'A', chinese: 'ä½ æ¥ä¸­å›½çš„ç›®çš„æ˜¯ä»€ä¹ˆï¼Ÿ', pinyin: 'ni3 lai2 zhong1 guo2 de mu4 di4 shi4 shen2 me?', meaning: 'What is the purpose of your visit to China?' },
        { speaker: 'B', chinese: 'æˆ‘æ¥æ—…æ¸¸ï¼Œé¡ºä¾¿æ‹œè®¿æœ‹å‹ã€‚', pinyin: 'wo3 lai2 lv3 you2, shun4 bian4 bai4 fang3 peng2 you3.', meaning: 'I am here for tourism, and also to visit friends.' },
        { speaker: 'A', chinese: 'ä½ æ‰“ç®—åœ¨ä¸­å›½å¾…å¤šä¹…ï¼Ÿ', pinyin: 'ni3 da3 suan4 zai4 zhong1 guo2 dai1 duo1 jiu3?', meaning: 'How long do you plan to stay in China?' },
        { speaker: 'B', chinese: 'å¤§æ¦‚ä¸¤ä¸ªæ˜ŸæœŸã€‚è¿™æ˜¯æˆ‘çš„é…’åº—é¢„è®¢ã€‚', pinyin: 'da4 gai4 liang3 ge4 xing1 qi1. zhe4 shi4 wo3 de jiu3 dian4 yu4 ding4.', meaning: 'About two weeks. Here is my hotel reservation.' },
        { speaker: 'A', chinese: 'å¥½çš„ï¼Œæ¬¢è¿Žæ¥åˆ°ä¸­å›½ã€‚', pinyin: 'hao3 de, huan1 ying2 lai2 dao4 zhong1 guo2.', meaning: 'OK, welcome to China.' }
    ],
    questions: [
        { question: 'ä»–æ¥ä¸­å›½å¹²ä»€ä¹ˆï¼Ÿ', options: ['å·¥ä½œ', 'å­¦ä¹ ', 'æ—…æ¸¸æ‹œè®¿æœ‹å‹', 'æŽ¢äº²'], correct: 2 },
        { question: 'ä»–æ‰“ç®—å¾…å¤šä¹…ï¼Ÿ', options: ['ä¸€å‘¨', 'ä¸¤å‘¨', 'ä¸‰å‘¨', 'ä¸€ä¸ªæœˆ'], correct: 1 }
    ]
},
{
    id: 'le347',
    type: 'dialogue',
    difficulty: 'hard',
    title: 'å­¦ä¹ è®¨è®º',
    meaning: 'Academic Discussion',
    turns: [
        { speaker: 'A', chinese: 'ä½ è§‰å¾—å­¦ä¸­æ–‡æœ€éš¾çš„æ˜¯ä»€ä¹ˆï¼Ÿ', pinyin: 'ni3 jue2 de xue2 zhong1 wen2 zui4 nan2 de shi4 shen2 me?', meaning: 'What do you think is the hardest part about learning Chinese?' },
        { speaker: 'B', chinese: 'æˆ‘è§‰å¾—å£°è°ƒæœ€éš¾ï¼Œç‰¹åˆ«æ˜¯ç¬¬ä¸‰å£°å’Œç¬¬äºŒå£°è¿žåœ¨ä¸€èµ·ã€‚', pinyin: 'wo3 jue2 de sheng1 diao4 zui4 nan2, te4 bie2 shi4 di4 san1 sheng1 he2 di4 er4 sheng1 lian2 zai4 yi4 qi3.', meaning: 'I think tones are the hardest, especially when the third tone and second tone come together.' },
        { speaker: 'A', chinese: 'å¯¹ï¼Œæˆ‘ä¹Ÿæœ‰åŒæ„Ÿã€‚å†™æ±‰å­—ä¹Ÿå¾ˆæœ‰æŒ‘æˆ˜æ€§ã€‚', pinyin: 'dui4, wo3 ye3 you3 tong2 gan3. xie3 han4 zi4 ye3 hen3 you3 tiao3 zhan4 xing4.', meaning: 'Right, I feel the same. Writing Chinese characters is also very challenging.' },
        { speaker: 'B', chinese: 'ä½ æ€Žä¹ˆç»ƒä¹ å†™æ±‰å­—ï¼Ÿ', pinyin: 'ni3 zen3 me lian4 xi2 xie3 han4 zi4?', meaning: 'How do you practice writing characters?' },
        { speaker: 'A', chinese: 'æˆ‘æ¯å¤©å†™äº”åä¸ªæ±‰å­—ï¼Œç”¨ç”°å­—æ ¼ç»ƒä¹ ã€‚', pinyin: 'wo3 mei3 tian1 xie3 wu3 shi2 ge4 han4 zi4, yong4 tian2 zi4 ge2 lian4 xi2.', meaning: 'I write 50 characters every day using grid practice sheets.' },
        { speaker: 'B', chinese: 'è¿™ä¸ªæ–¹æ³•å¾ˆå¥½ï¼æˆ‘ä¹Ÿæƒ³è¯•è¯•ã€‚', pinyin: 'zhe4 ge4 fang1 fa3 hen3 hao3! wo3 ye3 xiang3 shi4 shi4.', meaning: 'That\'s a great method! I want to try it too.' }
    ],
    questions: [
        { question: 'Bè§‰å¾—ä»€ä¹ˆæœ€éš¾ï¼Ÿ', options: ['è¯­æ³•', 'å£°è°ƒ', 'è¯æ±‡', 'é˜…è¯»'], correct: 1 },
        { question: 'Aæ¯å¤©å†™å¤šå°‘ä¸ªæ±‰å­—ï¼Ÿ', options: ['ä¸‰åä¸ª', 'å››åä¸ª', 'äº”åä¸ª', 'å…­åä¸ª'], correct: 2 }
    ]
},
{
    id: 'le348',
    type: 'dialogue',
    difficulty: 'hard',
    title: 'ç”µè„‘é—®é¢˜',
    meaning: 'Computer Problem',
    turns: [
        { speaker: 'A', chinese: 'æˆ‘çš„ç”µè„‘å¼€ä¸äº†æœºäº†ã€‚ä½ èƒ½å¸®æˆ‘çœ‹çœ‹å—ï¼Ÿ', pinyin: 'wo3 de dian4 nao3 kai1 bu4 liao3 ji1 le. ni3 neng2 bang1 wo3 kan4 kan4 ma?', meaning: 'My computer won\'t turn on. Can you take a look for me?' },
        { speaker: 'B', chinese: 'ä½ æœ€è¿‘æœ‰æ²¡æœ‰å®‰è£…ä»€ä¹ˆæ–°è½¯ä»¶ï¼Ÿ', pinyin: 'ni3 zui4 jin4 you3 mei2 you3 an1 zhuang1 shen2 me xin1 ruan3 jian4?', meaning: 'Have you installed any new software recently?' },
        { speaker: 'A', chinese: 'æ˜¨å¤©è£…äº†ä¸€ä¸ªå…è´¹çš„è§†é¢‘ç¼–è¾‘è½¯ä»¶ã€‚', pinyin: 'zuo2 tian1 zhuang1 le yi2 ge4 mian3 fei4 de shi4 pin2 bian1 ji2 ruan3 jian4.', meaning: 'I installed a free video editing software yesterday.' },
        { speaker: 'B', chinese: 'å¯èƒ½æ˜¯ç—…æ¯’ã€‚ä½ å…ˆæŒ‰ä¸‹ç”µæºé”®åç§’é’Ÿè¯•è¯•ã€‚', pinyin: 'ke3 neng2 shi4 bing4 du2. ni3 xian1 an4 xia4 dian4 yuan2 jian4 shi2 miao3 zhong1 shi4 shi4.', meaning: 'It might be a virus. First try holding down the power button for ten seconds.' },
        { speaker: 'A', chinese: 'è¿˜æ˜¯ä¸è¡Œï¼Œå±å¹•ä¸€ç›´æ˜¯é»‘çš„ã€‚', pinyin: 'hai2 shi4 bu4 xing2, ping2 mu4 yi4 zhi2 shi4 hei1 de.', meaning: 'Still not working, the screen remains black.' },
        { speaker: 'B', chinese: 'é‚£æˆ‘å¸®ä½ é‡è£…ç³»ç»Ÿå§ã€‚éœ€è¦å…ˆå¤‡ä»½æ–‡ä»¶ã€‚', pinyin: 'na4 wo3 bang1 ni3 chong2 zhuang1 xi4 tong3 ba. xu1 yao4 xian1 bei4 fen4 wen2 jian4.', meaning: 'Then let me help you reinstall the system. We need to back up your files first.' }
    ],
    questions: [
        { question: 'ç”µè„‘å¯èƒ½å‡ºäº†ä»€ä¹ˆé—®é¢˜ï¼Ÿ', options: ['ç¡¬ä»¶åäº†', 'å¯èƒ½æ˜¯ç—…æ¯’', 'æ²¡ç”µäº†', 'å±å¹•åäº†'], correct: 1 },
        { question: 'Bå»ºè®®æ€Žä¹ˆè§£å†³ï¼Ÿ', options: ['æ¢ç”µè„‘', 'é‡è£…ç³»ç»Ÿ', 'æ¢ç”µæ± ', 'é€ç»´ä¿®åº—'], correct: 1 }
    ]
},
{
    id: 'le349',
    type: 'dialogue',
    difficulty: 'hard',
    title: 'æ–‡åŒ–å·®å¼‚',
    meaning: 'Cultural Differences',
    turns: [
        { speaker: 'A', chinese: 'ä½ åœ¨ä¸­å›½ç”Ÿæ´»ä¸€æ®µæ—¶é—´äº†ï¼Œè§‰å¾—è·Ÿä½ çš„å›½å®¶æœ‰ä»€ä¹ˆä¸åŒï¼Ÿ', pinyin: 'ni3 zai4 zhong1 guo2 sheng1 huo2 yi2 duan4 shi2 jian1 le, jue2 de gen1 ni3 de guo2 jia1 you3 shen2 me bu4 tong2?', meaning: 'You\'ve been living in China for a while now, what differences do you notice compared to your country?' },
        { speaker: 'B', chinese: 'å¾ˆå¤šä¸åŒã€‚æ¯”å¦‚ä¸­å›½äººåƒé¥­çš„æ—¶å€™å–œæ¬¢å¤§å®¶ä¸€èµ·åˆ†äº«èœã€‚', pinyin: 'hen3 duo1 bu4 tong2. bi3 ru2 zhong1 guo2 ren2 chi1 fan4 de shi2 hou4 xi3 huan1 da4 jia1 yi4 qi3 fen1 xiang3 cai4.', meaning: 'Many differences. For example, Chinese people like to share dishes together when eating.' },
        { speaker: 'A', chinese: 'å¯¹ï¼Œè¿™å«åˆé¤åˆ¶ã€‚è¿˜æœ‰å‘¢ï¼Ÿ', pinyin: 'dui4, zhe4 jiao4 he2 can1 zhi4. hai2 you3 ne?', meaning: 'Yes, this is called shared dining. What else?' },
        { speaker: 'B', chinese: 'ä¸­å›½äººå¾ˆé‡è§†å®¶åº­ã€‚è¿‡å¹´çš„æ—¶å€™å…¨å®¶éƒ½è¦å›¢èšã€‚', pinyin: 'zhong1 guo2 ren2 hen3 zhong4 shi4 jia1 ting2. guo4 nian2 de shi2 hou4 quan2 jia1 dou1 yao4 tuan2 ju4.', meaning: 'Chinese people value family a lot. During Chinese New Year, the whole family gets together.' },
        { speaker: 'A', chinese: 'è¿™æ˜¯å¾ˆé‡è¦çš„ä¼ ç»Ÿã€‚ä½ å–œæ¬¢è¿™é‡Œçš„ç”Ÿæ´»æ–¹å¼å—ï¼Ÿ', pinyin: 'zhe4 shi4 hen3 zhong4 yao4 de chuan2 tong3. ni3 xi3 huan1 zhe4 li3 de sheng1 huo2 fang1 shi4 ma?', meaning: 'This is a very important tradition. Do you like the lifestyle here?' },
        { speaker: 'B', chinese: 'æˆ‘å¾ˆå–œæ¬¢ã€‚è™½ç„¶ä¸€å¼€å§‹æœ‰äº›ä¸ä¹ æƒ¯ï¼Œä½†çŽ°åœ¨è§‰å¾—å¾ˆæ¸©é¦¨ã€‚', pinyin: 'wo3 hen3 xi3 huan1. sui1 ran2 yi4 kai1 shi3 you3 xie1 bu4 xi2 guan4, dan4 xian4 zai4 jue2 de hen3 wen1 xin1.', meaning: 'I like it a lot. Although it was a bit hard to get used to at first, now I find it very warm and welcoming.' },
        { speaker: 'A', chinese: 'å¬åˆ°ä½ è¿™ä¹ˆè¯´æˆ‘å¾ˆé«˜å…´ï¼', pinyin: 'ting1 dao4 ni3 zhe4 me shuo1 wo3 hen3 gao1 xing4!', meaning: 'I am glad to hear you say that!' }
    ],
    questions: [
        { question: 'ä¸­å›½äººåƒé¥­å–œæ¬¢ä»€ä¹ˆæ–¹å¼ï¼Ÿ', options: ['åˆ†é¤åˆ¶', 'åˆé¤åˆ¶', 'è‡ªåŠ©', 'å¿«é¤'], correct: 1 },
        { question: 'ä¸­å›½äººè¿‡å¹´æœ‰ä»€ä¹ˆä¼ ç»Ÿï¼Ÿ', options: ['æ—…è¡Œ', 'å…¨å®¶å›¢èš', 'å¤–å‡ºåƒé¥­', 'çœ‹ç”µå½±'], correct: 1 },
        { question: 'Bå¯¹åœ¨ä¸­å›½çš„ç”Ÿæ´»æ„Ÿè§‰æ€Žä¹ˆæ ·ï¼Ÿ', options: ['ä¸ä¹ æƒ¯', 'å¾ˆæ¸©é¦¨', 'å¾ˆæ— èŠ', 'å¾ˆç´¯'], correct: 1 }
    ]
}
],

    mergeWithMain() {
        if (typeof ListeningData !== "undefined") {
            ListeningData.dialogue = [...ListeningData.dialogue, ...this.dialogue];
        }
    },

    get count() { return this.dialogue.length; }
};

if (typeof ListeningData !== "undefined") { ListeningDialogueExtra.mergeWithMain(); }
window.ListeningDialogueExtra = ListeningDialogueExtra;

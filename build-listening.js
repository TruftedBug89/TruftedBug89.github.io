// Build script: adds new entries to listening.js
const fs = require('fs');
const path = 'data/listening.js';
let content = fs.readFileSync(path, 'utf8');

// ========================================
// NEW DICTATION ENTRIES
// ========================================
const newDictation = `        ,
        {
            id: 'l091',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '早上好',
            pinyin: 'zǎoshang hǎo',
            meaning: 'Good morning',
            hint: 'Morning greeting',
            category: 'Greetings'
        },
        {
            id: 'l092',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '晚上好',
            pinyin: 'wǎnshang hǎo',
            meaning: 'Good evening',
            hint: 'Evening greeting',
            category: 'Greetings'
        },
        {
            id: 'l093',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '晚安',
            pinyin: 'wǎn\\'ān',
            meaning: 'Good night',
            hint: 'Night farewell',
            category: 'Greetings'
        },
        {
            id: 'l094',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '好久不见',
            pinyin: 'hǎojiǔ bùjiàn',
            meaning: 'Long time no see',
            hint: 'Reunion greeting',
            category: 'Greetings'
        },
        {
            id: 'l095',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '你吃饭了吗',
            pinyin: 'nǐ chīfàn le ma',
            meaning: 'Have you eaten?',
            hint: 'Common Chinese greeting',
            category: 'Greetings'
        },
        {
            id: 'l096',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '欢迎光临',
            pinyin: 'huānyíng guānglín',
            meaning: 'Welcome (to a shop)',
            hint: 'Shop greeting',
            category: 'Greetings'
        },
        {
            id: 'l097',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '请多多关照',
            pinyin: 'qǐng duōduō guānzhào',
            meaning: 'Please take care of me',
            hint: 'Formal introduction',
            category: 'Greetings'
        },
        {
            id: 'l098',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '很高兴又见到你',
            pinyin: 'hěn gāoxìng yòu jiàndào nǐ',
            meaning: 'Very happy to see you again',
            hint: 'Reunion expression',
            category: 'Greetings'
        },
        {
            id: 'l099',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '一',
            pinyin: 'yī',
            meaning: 'One',
            hint: 'First number',
            category: 'Numbers'
        },
        {
            id: 'l100',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '二',
            pinyin: 'èr',
            meaning: 'Two',
            hint: 'Second number',
            category: 'Numbers'
        }`;

// Insert new dictation entries before the closing of dictation array
content = content.replace(
  "category: 'Technology'\n        }\n    ],\n\n    // ============================================\n    // COMPREHENSION",
  "category: 'Technology'\n        }" + newDictation + "\n    ],\n\n    // ============================================\n    // COMPREHENSION"
);

fs.writeFileSync(path, content, 'utf8');
const verify = fs.readFileSync(path, 'utf8');
console.log('Lines:', verify.split('\n').length);
console.log('Has l100:', verify.includes("id: 'l100'"));

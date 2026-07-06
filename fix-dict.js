const fs = require('fs');
let c = fs.readFileSync('data/listening.js', 'utf8');

// Normalize CRLF to LF
c = c.replace(/\r\n/g, '\n');

// Find the end of dictation array and insert l091
const oldEnd = "category: 'Technology'\n        }\n    ],\n\n    // ============================================\n    // COMPREHENSION";
const newEnd = "category: 'Technology'\n        },\n        {\n            id: 'l091',\n            type: 'dictation',\n            difficulty: 'easy',\n            chinese: '早上好',\n            pinyin: 'zǎoshang hǎo',\n            meaning: 'Good morning',\n            hint: 'Morning greeting',\n            category: 'Greetings'\n        }\n    ],\n\n    // ============================================\n    // COMPREHENSION";

if (c.includes(oldEnd)) {
    c = c.replace(oldEnd, newEnd);
    console.log('Replacement done');
} else {
    console.log('OLD END NOT FOUND');
    // Debug: find what's actually there
    const idx = c.indexOf("category: 'Technology'");
    console.log('Found at:', idx);
    console.log('Context:', JSON.stringify(c.substring(idx, idx + 100)));
}

fs.writeFileSync('data/listening.js', c, 'utf8');
console.log('Has l091:', c.includes("id: 'l091'"));

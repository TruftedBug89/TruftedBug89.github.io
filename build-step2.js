const fs = require('fs');
let c = fs.readFileSync('data/listening.js', 'utf8');
c = c.replace(/\r\n/g, '\n');

const dictB = `
        {
            id: 'l131',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '昨天',
            pinyin: 'zuótiān',
            meaning: 'Yesterday',
            hint: 'Time word',
            category: 'Time'
        },
        {
            id: 'l132',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '现在几点了',
            pinyin: 'xiànzài jǐ diǎn le',
            meaning: 'What time is it now?',
            hint: 'Asking time',
            category: 'Time'
        },
        {
            id: 'l133',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '我每天早上七点起床',
            pinyin: 'wǒ měitiān zǎoshang qī diǎn qǐchuáng',
            meaning: 'I get up at 7am every day',
            hint: 'Daily routine',
            category: 'Time'
        },
        {
            id: 'l134',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '晚上十点睡觉',
            pinyin: 'wǎnshang shí diǎn shuìjiào',
            meaning: 'Go to bed at 10pm',
            hint: 'Bedtime',
            category: 'Time'
        },
        {
            id: 'l135',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '会议从下午两点到四点',
            pinyin: 'huìyì cóng xiàwǔ liǎng diǎn dào sì diǎn',
            meaning: 'Meeting from 2pm to 4pm',
            hint: 'Schedule',
            category: 'Time'
        },
        {
            id: 'l136',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '下个星期五是我的生日',
            pinyin: 'xià gè xīngqīwǔ shì wǒ de shēngrì',
            meaning: 'Next Friday is my birthday',
            hint: 'Future date',
            category: 'Time'
        },
        {
            id: 'l137',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '我在这里住了三年了',
            pinyin: 'wǒ zài zhèlǐ zhù le sān nián le',
            meaning: 'I have lived here for three years',
            hint: 'Duration',
            category: 'Time'
        },
        {
            id: 'l138',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '时间过得真快',
            pinyin: 'shíjiān guò de zhēn kuài',
            meaning: 'Time flies',
            hint: 'Common phrase',
            category: 'Time'
        },
        {
            id: 'l139',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '晴天',
            pinyin: 'qíngtiān',
            meaning: 'Sunny day',
            hint: 'Weather type',
            category: 'Weather'
        },
        {
            id: 'l140',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '下雨',
            pinyin: 'xiàyǔ',
            meaning: 'Rain',
            hint: 'Weather type',
            category: 'Weather'
        },
        {
            id: 'l141',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '刮风了',
            pinyin: 'guāfēng le',
            meaning: 'It\\'s windy',
            hint: 'Weather condition',
            category: 'Weather'
        },
        {
            id: 'l142',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '下雪',
            pinyin: 'xiàxuě',
            meaning: 'Snow',
            hint: 'Winter weather',
            category: 'Weather'
        },
        {
            id: 'l143',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '今天很冷',
            pinyin: 'jīntiān hěn lěng',
            meaning: 'Today is very cold',
            hint: 'Temperature comment',
            category: 'Weather'
        },
        {
            id: 'l144',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '夏天很热',
            pinyin: 'xiàtiān hěn rè',
            meaning: 'Summer is very hot',
            hint: 'Seasonal comment',
            category: 'Weather'
        },
        {
            id: 'l145',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '天气预报说明天会下大雨',
            pinyin: 'tiānqì yùbào shuō míngtiān huì xià dàyǔ',
            meaning: 'The weather forecast says it will rain heavily tomorrow',
            hint: 'Weather forecast',
            category: 'Weather'
        },
        {
            id: 'l146',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '今天温度是零下五度',
            pinyin: 'jīntiān wēndù shì língxià wǔ dù',
            meaning: 'Today\\'s temperature is minus 5 degrees',
            hint: 'Temperature detail',
            category: 'Weather'
        },
        {
            id: 'l147',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '秋天是北京最好的季节',
            pinyin: 'qiūtiān shì běijīng zuì hǎo de jìjié',
            meaning: 'Autumn is the best season in Beijing',
            hint: 'Seasonal opinion',
            category: 'Weather'
        },
        {
            id: 'l148',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '雨后出现了彩虹',
            pinyin: 'yǔ hòu chūxiàn le cǎihóng',
            meaning: 'A rainbow appeared after the rain',
            hint: 'Weather phenomenon',
            category: 'Weather'
        },
        {
            id: 'l149',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '多少钱',
            pinyin: 'duōshao qián',
            meaning: 'How much?',
            hint: 'Price question',
            category: 'Shopping'
        },
        {
            id: 'l150',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '便宜',
            pinyin: 'piányi',
            meaning: 'Cheap',
            hint: 'Price description',
            category: 'Shopping'
        },
        {
            id: 'l151',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '太贵了',
            pinyin: 'tài guì le',
            meaning: 'Too expensive',
            hint: 'Price complaint',
            category: 'Shopping'
        },
        {
            id: 'l152',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '可以打折吗',
            pinyin: 'kěyǐ dǎzhé ma',
            meaning: 'Can you give a discount?',
            hint: 'Bargaining',
            category: 'Shopping'
        },
        {
            id: 'l153',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '我想试穿一下',
            pinyin: 'wǒ xiǎng shìchuān yīxià',
            meaning: 'I want to try it on',
            hint: 'Fitting clothes',
            category: 'Shopping'
        },
        {
            id: 'l154',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '请问可以用微信支付吗',
            pinyin: 'qǐngwèn kěyǐ yòng wēixìn zhīfù ma',
            meaning: 'Can I pay with WeChat Pay?',
            hint: 'Payment method',
            category: 'Shopping'
        },
        {
            id: 'l155',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '我要退货，这是我的收据',
            pinyin: 'wǒ yào tuìhuò, zhè shì wǒ de shōujù',
            meaning: 'I want to return this, here is my receipt',
            hint: 'Returning items',
            category: 'Shopping'
        },
        {
            id: 'l156',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '有大一号的吗',
            pinyin: 'yǒu dà yī hào de ma',
            meaning: 'Do you have a larger size?',
            hint: 'Size question',
            category: 'Shopping'
        },
        {
            id: 'l157',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '这个颜色不适合我',
            pinyin: 'zhège yánsè bù shìhé wǒ',
            meaning: 'This color doesn\\'t suit me',
            hint: 'Color opinion',
            category: 'Shopping'
        },
        {
            id: 'l158',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '我去超市买了一些日用品',
            pinyin: 'wǒ qù chāoshì mǎi le yīxiē rìyòngpǐn',
            meaning: 'I went to the supermarket and bought some daily necessities',
            hint: 'Shopping trip',
            category: 'Shopping'
        },
        {
            id: 'l159',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '左边',
            pinyin: 'zuǒbiān',
            meaning: 'Left side',
            hint: 'Direction',
            category: 'Directions'
        },
        {
            id: 'l160',
            type: 'dictation',
            difficulty: 'easy',
            chinese: '右边',
            pinyin: 'yòubiān',
            meaning: 'Right side',
            hint: 'Direction',
            category: 'Directions'
        },
        {
            id: 'l161',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '一直往前走',
            pinyin: 'yīzhí wǎng qián zǒu',
            meaning: 'Go straight ahead',
            hint: 'Direction instruction',
            category: 'Directions'
        },
        {
            id: 'l162',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '在红绿灯那里左转',
            pinyin: 'zài hónglǜdēng nàlǐ zuǒ zhuǎn',
            meaning: 'Turn left at the traffic light',
            hint: 'Direction instruction',
            category: 'Directions'
        },
        {
            id: 'l163',
            type: 'dictation',
            difficulty: 'medium',
            chinese: '地铁站在前面',
            pinyin: 'dìtiě zhàn zài qiánmiàn',
            meaning: 'The subway station is ahead',
            hint: 'Location info',
            category: 'Directions'
        },
        {
            id: 'l164',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '请问最近的医院怎么走',
            pinyin: 'qǐngwèn zuìjìn de yīyuàn zěnme zǒu',
            meaning: 'Excuse me, how do I get to the nearest hospital?',
            hint: 'Asking direction',
            category: 'Directions'
        },
        {
            id: 'l165',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '过了十字路口就到了',
            pinyin: 'guò le shízì lùkǒu jiù dào le',
            meaning: 'You\\'ll be there after the intersection',
            hint: 'Landmark direction',
            category: 'Directions'
        },
        {
            id: 'l166',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '在第二个路口右转',
            pinyin: 'zài dì èr gè lùkǒu yòu zhuǎn',
            meaning: 'Turn right at the second intersection',
            hint: 'Detailed direction',
            category: 'Directions'
        },
        {
            id: 'l167',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '离这里远不远',
            pinyin: 'lí zhèlǐ yuǎn bù yuǎn',
            meaning: 'Is it far from here?',
            hint: 'Distance question',
            category: 'Directions'
        },
        {
            id: 'l168',
            type: 'dictation',
            difficulty: 'hard',
            chinese: '我用手机地图导航',
            pinyin: 'wǒ yòng shǒujī dìtú dǎoháng',
            meaning: 'I use my phone map for navigation',
            hint: 'Navigation method',
            category: 'Directions'
        }`;

// Marker: end of l130
const marker = "category: 'Time'\n        }\n    ],\n\n    // ============================================\n    // COMPREHENSION";
const replacement = "category: 'Time'\n        }" + dictB + "\n    ],\n\n    // ============================================\n    // COMPREHENSION";

if (c.includes(marker)) {
    c = c.replace(marker, replacement);
    console.log('Dictation batch B inserted');
} else {
    console.log('MARKER NOT FOUND!');
    // Show context
    const idx = c.indexOf("category: 'Time'");
    console.log('Context:', JSON.stringify(c.substring(idx, idx+120)));
    process.exit(1);
}

fs.writeFileSync('data/listening.js', c, 'utf8');
console.log('Lines:', c.split('\n').length);

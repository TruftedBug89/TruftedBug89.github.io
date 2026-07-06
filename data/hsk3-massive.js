// ============================================
// CHINESE MASTER - HSK 3 MASSIVE EXAMPLES DATABASE
// Every word has 8-10 example sentences
// ALL SIMPLIFIED CHINESE with Pinyin + English
// ============================================

const HSK3Massive = {
    words: [
        // ============================
        // Adjectives
        // ============================
        {
            id: 'h3m_001', character: '安全', pinyin: 'ānquán', meaning: 'safe', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '这里很安全。', pinyin: 'Zhèlǐ hěn ānquán。', en: 'It is very safe here.' },
                { cn: '注意安全！', pinyin: 'Zhùyì ānquán!', en: 'Pay attention to safety!' }
            ]
        },

        {
            id: 'h3m_002', character: '安静', pinyin: 'ānjìng', meaning: 'quiet', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '图书馆里很安静。', pinyin: 'Túshūguǎn lǐ hěn ānjìng。', en: 'The library is very quiet.' },
                { cn: '请安静一点。', pinyin: 'Qǐng ānjìng yīdiǎn。', en: 'Please be a little quieter.' }
            ]
        },

        {
            id: 'h3m_003', character: '方便', pinyin: 'fāngbiàn', meaning: 'convenient', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '这里交通很方便。', pinyin: 'Zhèlǐ jiāotōng hěn fāngbiàn。', en: 'The transportation here is very convenient.' },
                { cn: '什么时候方便？', pinyin: 'Shénme shíhou fāngbiàn?', en: 'When is it convenient?' }
            ]
        },

        {
            id: 'h3m_004', character: '丰富', pinyin: 'fēngfù', meaning: 'rich/abundant', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '中国的文化很丰富。', pinyin: 'Zhōngguó de wénhuà hěn fēngfù。', en: 'China\'s culture is very rich.' },
                { cn: '他有丰富的经验。', pinyin: 'Tā yǒu fēngfù de jīngyàn。', en: 'He has rich experience.' }
            ]
        },

        {
            id: 'h3m_005', character: '复杂', pinyin: 'fùzá', meaning: 'complex', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '这个问题很复杂。', pinyin: 'Zhège wèntí hěn fùzá。', en: 'This problem is very complex.' },
                { cn: '情况变得复杂了。', pinyin: 'Qíngkuàng biàn de fùzá le。', en: 'The situation has become complex.' }
            ]
        },

        {
            id: 'h3m_006', character: '合适', pinyin: 'héshì', meaning: 'suitable', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '这件衣服很合适。', pinyin: 'Zhè jiàn yīfu hěn héshì。', en: 'This piece of clothing fits well.' },
                { cn: '你找到合适的人了吗？', pinyin: 'Nǐ zhǎodào héshì de rén le ma?', en: 'Have you found a suitable person?' }
            ]
        },

        {
            id: 'h3m_007', character: '基本', pinyin: 'jīběn', meaning: 'basic', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '这是基本的知识。', pinyin: 'Zhè shì jīběn de zhīshi。', en: 'This is basic knowledge.' },
                { cn: '我基本同意。', pinyin: 'Wǒ jīběn tóngyì。', en: 'I basically agree.' }
            ]
        },

        {
            id: 'h3m_008', character: '激动', pinyin: 'jīdòng', meaning: 'excited', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '听到这个消息我很激动。', pinyin: 'Tīngdào zhège xiāoxi wǒ hěn jīdòng。', en: 'I was very excited to hear this news.' },
                { cn: '别太激动了。', pinyin: 'Bié tài jīdòng le。', en: 'Don\'t get too excited.' }
            ]
        },

        {
            id: 'h3m_009', character: '紧张', pinyin: 'jǐnzhāng', meaning: 'nervous', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '考试前我很紧张。', pinyin: 'Kǎoshì qián wǒ hěn jǐnzhāng。', en: 'I was very nervous before the exam.' },
                { cn: '时间很紧张。', pinyin: 'Shíjiān hěn jǐnzhāng。', en: 'Time is very tight.' }
            ]
        },

        {
            id: 'h3m_010', character: '精彩', pinyin: 'jīngcǎi', meaning: 'wonderful', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '演出非常精彩。', pinyin: 'Yǎnchū fēicháng jīngcǎi。', en: 'The performance was wonderful.' },
                { cn: '你的演讲很精彩。', pinyin: 'Nǐ de yǎnjiǎng hěn jīngcǎi。', en: 'Your speech was wonderful.' }
            ]
        },

        {
            id: 'h3m_011', character: '开心', pinyin: 'kāixīn', meaning: 'happy', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '今天我很开心。', pinyin: 'Jīntiān wǒ hěn kāixīn。', en: 'I am very happy today.' },
                { cn: '祝你生日快乐，天天开心！', pinyin: 'Zhù nǐ shēngrì kuàilè, tiāntiān kāixīn!', en: 'Happy birthday, may you be happy every day!' }
            ]
        },

        {
            id: 'h3m_012', character: '可爱', pinyin: 'kě\'ài', meaning: 'cute', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '这只小猫真可爱。', pinyin: 'Zhè zhī xiǎo māo zhēn kě\'ài。', en: 'This little cat is so cute.' },
                { cn: '你的孩子很可爱。', pinyin: 'Nǐ de háizi hěn kě\'ài。', en: 'Your child is very cute.' }
            ]
        },

        {
            id: 'h3m_013', character: '可怕', pinyin: 'kěpà', meaning: 'terrible', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '那部电影很可怕。', pinyin: 'Nà bù diànyǐng hěn kěpà。', en: 'That movie was terrifying.' },
                { cn: '发生了可怕的事情。', pinyin: 'Fāshēng le kěpà de shìqing。', en: 'Something terrible happened.' }
            ]
        },

        {
            id: 'h3m_014', character: '困难', pinyin: 'kùnnán', meaning: 'difficult', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '这个工作很困难。', pinyin: 'Zhège gōngzuò hěn kùnnán。', en: 'This work is very difficult.' },
                { cn: '我们遇到了很多困难。', pinyin: 'Wǒmen yùdào le hěn duō kùnnán。', en: 'We encountered many difficulties.' }
            ]
        },

        {
            id: 'h3m_015', character: '厉害', pinyin: 'lìhai', meaning: 'awesome/formidable', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '他太厉害了！', pinyin: 'Tā tài lìhai le!', en: 'He is amazing!' },
                { cn: '这药很厉害。', pinyin: 'Zhè yào hěn lìhai。', en: 'This medicine is very strong.' }
            ]
        },

        {
            id: 'h3m_016', character: '难过', pinyin: 'nánguò', meaning: 'sad', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '听到这个消息我很难过。', pinyin: 'Tīngdào zhège xiāoxi wǒ hěn nánguò。', en: 'I was very sad to hear this news.' },
                { cn: '别难过了，一切都会好的。', pinyin: 'Bié nánguò le, yīqiè dōu huì hǎo de。', en: 'Don\'t be sad; everything will be fine.' }
            ]
        },

        {
            id: 'h3m_017', character: '难受', pinyin: 'nánshòu', meaning: 'uncomfortable', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '我今天身体很难受。', pinyin: 'Wǒ jīntiān shēntǐ hěn nánshòu。', en: 'I feel very uncomfortable today.' },
                { cn: '这种感觉真难受。', pinyin: 'Zhè zhǒng gǎnjué zhēn nánshòu。', en: 'This feeling is really uncomfortable.' }
            ]
        },

        {
            id: 'h3m_018', character: '破', pinyin: 'pò', meaning: 'broken', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '我的手机屏幕破了。', pinyin: 'Wǒ de shǒujī píngmù pò le。', en: 'My phone screen is broken.' },
                { cn: '这件衣服破了。', pinyin: 'Zhè jiàn yīfu pò le。', en: 'This piece of clothing is torn.' }
            ]
        },

        {
            id: 'h3m_019', character: '普遍', pinyin: 'pǔbiàn', meaning: 'common', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '这是一个普遍现象。', pinyin: 'Zhè shì yī gè pǔbiàn xiànxiàng。', en: 'This is a common phenomenon.' },
                { cn: '手机已经很普遍了。', pinyin: 'Shǒujī yǐjīng hěn pǔbiàn le。', en: 'Mobile phones are already very common.' }
            ]
        },

        {
            id: 'h3m_020', character: '热情', pinyin: 'rèqíng', meaning: 'enthusiastic', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '这里的人很热情。', pinyin: 'Zhèlǐ de rén hěn rèqíng。', en: 'The people here are very warm.' },
                { cn: '谢谢你的热情招待。', pinyin: 'Xièxiè nǐ de rèqíng zhāodài。', en: 'Thank you for your warm hospitality.' }
            ]
        },

        {
            id: 'h3m_021', character: '容易', pinyin: 'róngyì', meaning: 'easy', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '这个问题很容易。', pinyin: 'Zhège wèntí hěn róngyì。', en: 'This question is very easy.' },
                { cn: '学中文不容易。', pinyin: 'Xué Zhōngwén bù róngyì。', en: 'Learning Chinese is not easy.' }
            ]
        },

        {
            id: 'h3m_022', character: '伤心', pinyin: 'shāngxīn', meaning: 'sad', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '她伤心得哭了。', pinyin: 'Tā shāngxīn de kū le。', en: 'She was so sad that she cried.' },
                { cn: '别为这件事伤心了。', pinyin: 'Bié wèi zhè jiàn shì shāngxīn le。', en: 'Don\'t be sad about this matter anymore.' }
            ]
        },

        {
            id: 'h3m_023', character: '生气', pinyin: 'shēngqì', meaning: 'angry', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '他为什么生气？', pinyin: 'Tā wèishénme shēngqì?', en: 'Why is he angry?' },
                { cn: '别生气了，我道歉。', pinyin: 'Bié shēngqì le, wǒ dàoqiàn。', en: 'Don\'t be angry; I apologize.' }
            ]
        },

        {
            id: 'h3m_024', character: '失望', pinyin: 'shīwàng', meaning: 'disappointed', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '我对这个结果很失望。', pinyin: 'Wǒ duì zhège jiéguǒ hěn shīwàng。', en: 'I am very disappointed with this result.' },
                { cn: '别让我失望。', pinyin: 'Bié ràng wǒ shīwàng。', en: 'Don\'t disappoint me.' }
            ]
        },

        {
            id: 'h3m_025', character: '舒服', pinyin: 'shūfu', meaning: 'comfortable', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '这张床很舒服。', pinyin: 'Zhè zhāng chuáng hěn shūfu。', en: 'This bed is very comfortable.' },
                { cn: '我觉得不舒服。', pinyin: 'Wǒ juéde bù shūfu。', en: 'I feel uncomfortable.' }
            ]
        },

        {
            id: 'h3m_026', character: '顺利', pinyin: 'shùnlì', meaning: 'smooth', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '一切都很顺利。', pinyin: 'Yīqiè dōu hěn shùnlì。', en: 'Everything is going smoothly.' },
                { cn: '祝你工作顺利！', pinyin: 'Zhù nǐ gōngzuò shùnlì!', en: 'Wishing you smooth work!' }
            ]
        },

        {
            id: 'h3m_027', character: '讨厌', pinyin: 'tǎoyàn', meaning: 'annoying', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '我讨厌下雨天。', pinyin: 'Wǒ tǎoyàn xià yǔ tiān。', en: 'I hate rainy days.' },
                { cn: '他真让人讨厌。', pinyin: 'Tā zhēn ràng rén tǎoyàn。', en: 'He is really annoying.' }
            ]
        },

        {
            id: 'h3m_028', character: '伟大', pinyin: 'wěidà', meaning: 'great', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '他是一个伟大的人。', pinyin: 'Tā shì yī gè wěidà de rén。', en: 'He is a great person.' },
                { cn: '中国有伟大的历史。', pinyin: 'Zhōngguó yǒu wěidà de lìshǐ。', en: 'China has a great history.' }
            ]
        },

        {
            id: 'h3m_029', character: '无聊', pinyin: 'wúliáo', meaning: 'boring', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '这个电影很无聊。', pinyin: 'Zhège diànyǐng hěn wúliáo。', en: 'This movie is very boring.' },
                { cn: '一个人在家好无聊。', pinyin: 'Yī gè rén zài jiā hǎo wúliáo。', en: 'Being home alone is so boring.' }
            ]
        },

        {
            id: 'h3m_030', character: '幸福', pinyin: 'xìngfú', meaning: 'happy/blessed', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '他们一家人很幸福。', pinyin: 'Tāmen yī jiā rén hěn xìngfú。', en: 'Their family is very happy.' },
                { cn: '祝你幸福！', pinyin: 'Zhù nǐ xìngfú!', en: 'I wish you happiness!' }
            ]
        },

        {
            id: 'h3m_031', character: '严格', pinyin: 'yángé', meaning: 'strict', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '我们的老师很严格。', pinyin: 'Wǒmen de lǎoshī hěn yángé。', en: 'Our teacher is very strict.' },
                { cn: '公司有严格的规定。', pinyin: 'Gōngsī yǒu yángé de guīdìng。', en: 'The company has strict regulations.' }
            ]
        },

        {
            id: 'h3m_032', character: '严重', pinyin: 'yánzhòng', meaning: 'serious', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '这个问题很严重。', pinyin: 'Zhège wèntí hěn yánzhòng。', en: 'This problem is very serious.' },
                { cn: '他的病不严重。', pinyin: 'Tā de bìng bù yánzhòng。', en: 'His illness is not serious.' }
            ]
        },

        {
            id: 'h3m_033', character: '勇敢', pinyin: 'yǒnggǎn', meaning: 'brave', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '你真勇敢！', pinyin: 'Nǐ zhēn yǒnggǎn!', en: 'You are so brave!' },
                { cn: '勇敢面对困难。', pinyin: 'Yǒnggǎn miànduì kùnnán。', en: 'Face difficulties bravely.' }
            ]
        },

        {
            id: 'h3m_034', character: '有名', pinyin: 'yǒumíng', meaning: 'famous', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '他是很有名的演员。', pinyin: 'Tā shì hěn yǒumíng de yǎnyuán。', en: 'He is a very famous actor.' },
                { cn: '这个地方很有名。', pinyin: 'Zhège dìfang hěn yǒumíng。', en: 'This place is very famous.' }
            ]
        },

        {
            id: 'h3m_035', character: '有趣', pinyin: 'yǒuqù', meaning: 'interesting', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '这本书很有趣。', pinyin: 'Zhè běn shū hěn yǒuqù。', en: 'This book is very interesting.' },
                { cn: '他是一个有趣的人。', pinyin: 'Tā shì yī gè yǒuqù de rén。', en: 'He is an interesting person.' }
            ]
        },

        {
            id: 'h3m_036', character: '着急', pinyin: 'zháojí', meaning: 'anxious', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '别着急，慢慢来。', pinyin: 'Bié zháojí, mànman lái。', en: 'Don\'t be anxious; take it slowly.' },
                { cn: '他在着急地等人。', pinyin: 'Tā zài zháojí de děng rén。', en: 'He is anxiously waiting for someone.' }
            ]
        },

        {
            id: 'h3m_037', character: '真正', pinyin: 'zhēnzhèng', meaning: 'real/true', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '他是我真正的朋友。', pinyin: 'Tā shì wǒ zhēnzhèng de péngyou。', en: 'He is my true friend.' },
                { cn: '这才是真正的问题。', pinyin: 'Zhè cái shì zhēnzhèng de wèntí。', en: 'This is the real problem.' }
            ]
        },

        {
            id: 'h3m_038', character: '正常', pinyin: 'zhèngcháng', meaning: 'normal', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '一切都很正常。', pinyin: 'Yīqiè dōu hěn zhèngcháng。', en: 'Everything is normal.' },
                { cn: '这是正常现象。', pinyin: 'Zhè shì zhèngcháng xiànxiàng。', en: 'This is a normal phenomenon.' }
            ]
        },

        {
            id: 'h3m_039', character: '正好', pinyin: 'zhènghǎo', meaning: 'just right', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '你来得正好。', pinyin: 'Nǐ lái de zhènghǎo。', en: 'You came at just the right time.' },
                { cn: '这件衣服正好合适。', pinyin: 'Zhè jiàn yīfu zhènghǎo héshì。', en: 'This piece of clothing fits just right.' }
            ]
        },

        {
            id: 'h3m_040', character: '重要', pinyin: 'zhòngyào', meaning: 'important', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '这是一个重要的决定。', pinyin: 'Zhè shì yī gè zhòngyào de juédìng。', en: 'This is an important decision.' },
                { cn: '健康最重要。', pinyin: 'Jiànkāng zuì zhòngyào。', en: 'Health is most important.' }
            ]
        },

        {
            id: 'h3m_041', character: '主动', pinyin: 'zhǔdòng', meaning: 'active/initiative', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '你应该主动一点。', pinyin: 'Nǐ yīnggāi zhǔdòng yīdiǎn。', en: 'You should be more proactive.' },
                { cn: '他主动帮助了我。', pinyin: 'Tā zhǔdòng bāngzhù le wǒ。', en: 'He took the initiative to help me.' }
            ]
        },

        {
            id: 'h3m_042', character: '主要', pinyin: 'zhǔyào', meaning: 'main', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '主要的问题是什么？', pinyin: 'Zhǔyào de wèntí shì shénme?', en: 'What is the main problem?' },
                { cn: '他主要负责销售。', pinyin: 'Tā zhǔyào fùzé xiāoshòu。', en: 'He is mainly responsible for sales.' }
            ]
        },

        {
            id: 'h3m_043', character: '仔细', pinyin: 'zǐxì', meaning: 'careful', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '请仔细检查。', pinyin: 'Qǐng zǐxì jiǎnchá。', en: 'Please check carefully.' },
                { cn: '他做事很仔细。', pinyin: 'Tā zuòshì hěn zǐxì。', en: 'He does things very carefully.' }
            ]
        },

        {
            id: 'h3m_044', character: '自然', pinyin: 'zìrán', meaning: 'natural', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '大自然很美。', pinyin: 'Dà zìrán hěn měi。', en: 'Nature is very beautiful.' },
                { cn: '她笑得很自然。', pinyin: 'Tā xiào de hěn zìrán。', en: 'She smiles very naturally.' }
            ]
        },

        {
            id: 'h3m_045', character: '自信', pinyin: 'zìxìn', meaning: 'confident', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '他对自己很自信。', pinyin: 'Tā duì zìjǐ hěn zìxìn。', en: 'He is very confident in himself.' },
                { cn: '要有自信！', pinyin: 'Yào yǒu zìxìn!', en: 'Be confident!' }
            ]
        },

        {
            id: 'h3m_046', character: '自由', pinyin: 'zìyóu', meaning: 'free', hsk: 3, category: 'adjectives',
            examples: [
                { cn: '每个人都有自由的权利。', pinyin: 'Měi gè rén dōu yǒu zìyóu de quánlì。', en: 'Everyone has the right to freedom.' },
                { cn: '我喜欢自由的生活。', pinyin: 'Wǒ xǐhuān zìyóu de shēnghuó。', en: 'I like a free life.' }
            ]
        },

        // ============================
        // Adverbs
        // ============================
        {
            id: 'h3m_047', character: '时期', pinyin: 'shíqī', meaning: 'period', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '这是一个特殊时期。', pinyin: 'Zhè shì yī gè tèshū shíqī。', en: 'This is a special period.' },
                { cn: '在那个时期，生活很困难。', pinyin: 'Zài nà gè shíqī, shēnghuó hěn kùnnán。', en: 'During that period, life was very difficult.' }
            ]
        },

        {
            id: 'h3m_048', character: '阶段', pinyin: 'jiēduàn', meaning: 'stage', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '我们进入了新阶段。', pinyin: 'Wǒmen jìnrù le xīn jiēduàn。', en: 'We have entered a new stage.' },
                { cn: '每个阶段都有困难。', pinyin: 'Měi gè jiēduàn dōu yǒu kùnnán。', en: 'Every stage has difficulties.' }
            ]
        },

        {
            id: 'h3m_049', character: '将来', pinyin: 'jiānglái', meaning: 'future', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '将来我想当医生。', pinyin: 'Jiānglái wǒ xiǎng dāng yīshēng。', en: 'In the future, I want to be a doctor.' },
                { cn: '将来的事情谁也说不准。', pinyin: 'Jiānglái de shìqing shéi yě shuō bù zhǔn。', en: 'No one can predict future events.' }
            ]
        },

        {
            id: 'h3m_050', character: '过去', pinyin: 'guòqù', meaning: 'past', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '过去的事情就让它过去吧。', pinyin: 'Guòqù de shìqing jiù ràng tā guòqù ba。', en: 'Let the past stay in the past.' },
                { cn: '我过去住在北京。', pinyin: 'Wǒ guòqù zhù zài Běijīng。', en: 'I used to live in Beijing.' }
            ]
        },

        {
            id: 'h3m_051', character: '目前', pinyin: 'mùqián', meaning: 'currently', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '目前我还没有工作。', pinyin: 'Mùqián wǒ hái méiyǒu gōngzuò。', en: 'Currently I still have no job.' },
                { cn: '目前的情况很好。', pinyin: 'Mùqián de qíngkuàng hěn hǎo。', en: 'The current situation is good.' }
            ]
        },

        {
            id: 'h3m_052', character: '以前', pinyin: 'yǐqián', meaning: 'before', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '我以前没见过他。', pinyin: 'Wǒ yǐqián méi jiàn guò tā。', en: 'I had never seen him before.' },
                { cn: '以前这里是一家商店。', pinyin: 'Yǐqián zhèlǐ shì yī jiā shāngdiàn。', en: 'This used to be a shop before.' }
            ]
        },

        {
            id: 'h3m_053', character: '以后', pinyin: 'yǐhòu', meaning: 'after/later', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '以后我会注意的。', pinyin: 'Yǐhòu wǒ huì zhùyì de。', en: 'I will pay attention in the future.' },
                { cn: '从那以后我们成了好朋友。', pinyin: 'Cóng nà yǐhòu wǒmen chéng le hǎo péngyou。', en: 'After that we became good friends.' }
            ]
        },

        {
            id: 'h3m_054', character: '后来', pinyin: 'hòulái', meaning: 'afterwards', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '后来他去了上海。', pinyin: 'Hòulái tā qù le Shànghǎi。', en: 'Afterwards he went to Shanghai.' },
                { cn: '后来我才明白。', pinyin: 'Hòulái wǒ cái míngbai。', en: 'I only understood afterwards.' }
            ]
        },

        {
            id: 'h3m_055', character: '最近', pinyin: 'zuìjìn', meaning: 'recently', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '最近我很忙。', pinyin: 'Zuìjìn wǒ hěn máng。', en: 'I have been very busy recently.' },
                { cn: '你最近在看什么书？', pinyin: 'Nǐ zuìjìn zài kàn shénme shū?', en: 'What book have you been reading recently?' }
            ]
        },

        {
            id: 'h3m_056', character: '刚才', pinyin: 'gāngcái', meaning: 'just now', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '他刚才还在这里。', pinyin: 'Tā gāngcái hái zài zhèlǐ。', en: 'He was just here a moment ago.' },
                { cn: '你刚才说什么？', pinyin: 'Nǐ gāngcái shuō shénme?', en: 'What did you just say?' }
            ]
        },

        {
            id: 'h3m_057', character: '暂时', pinyin: 'zànshí', meaning: 'temporarily', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '暂时没有问题了。', pinyin: 'Zànshí méiyǒu wèntí le。', en: 'There are no problems for now.' },
                { cn: '我暂时住在朋友家。', pinyin: 'Wǒ zànshí zhù zài péngyou jiā。', en: 'I am temporarily staying at a friend\'s place.' }
            ]
        },

        {
            id: 'h3m_058', character: '永远', pinyin: 'yǒngyuǎn', meaning: 'forever', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '我永远不会忘记你。', pinyin: 'Wǒ yǒngyuǎn bù huì wàngjì nǐ。', en: 'I will never forget you.' },
                { cn: '友谊永远是最重要的。', pinyin: 'Yǒuyì yǒngyuǎn shì zuì zhòngyào de。', en: 'Friendship is always the most important.' }
            ]
        },

        {
            id: 'h3m_059', character: '及时', pinyin: 'jíshí', meaning: 'timely', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '你来得真及时。', pinyin: 'Nǐ lái de zhēn jíshí。', en: 'You came just in time.' },
                { cn: '问题得到了及时解决。', pinyin: 'Wèntí dédào le jíshí jiějué。', en: 'The problem was solved in a timely manner.' }
            ]
        },

        {
            id: 'h3m_060', character: '按时', pinyin: 'ànshí', meaning: 'on time', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '请按时完成作业。', pinyin: 'Qǐng ànshí wánchéng zuòyè。', en: 'Please complete your homework on time.' },
                { cn: '火车按时到达。', pinyin: 'Huǒchē ànshí dàodá。', en: 'The train arrived on time.' }
            ]
        },

        {
            id: 'h3m_061', character: '提前', pinyin: 'tíqián', meaning: 'in advance', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '请提前告诉我。', pinyin: 'Qǐng tíqián gàosu wǒ。', en: 'Please tell me in advance.' },
                { cn: '我们提前完成了任务。', pinyin: 'Wǒmen tíqián wánchéng le rènwù。', en: 'We completed the task ahead of schedule.' }
            ]
        },

        {
            id: 'h3m_062', character: '终于', pinyin: 'zhōngyú', meaning: 'finally', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '我终于到了。', pinyin: 'Wǒ zhōngyú dào le。', en: 'I finally arrived.' },
                { cn: '等了很久，他终于来了。', pinyin: 'Děng le hěn jiǔ, tā zhōngyú lái le。', en: 'After waiting a long time, he finally came.' }
            ]
        },

        {
            id: 'h3m_063', character: '从来', pinyin: 'cónglái', meaning: 'always (with negative)', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '我从来没去过日本。', pinyin: 'Wǒ cónglái méi qù guò Rìběn。', en: 'I have never been to Japan.' },
                { cn: '他从来不说谎。', pinyin: 'Tā cónglái bù shuōhuǎng。', en: 'He never lies.' }
            ]
        },

        {
            id: 'h3m_064', character: '经常', pinyin: 'jīngcháng', meaning: 'often', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '我经常去图书馆。', pinyin: 'Wǒ jīngcháng qù túshūguǎn。', en: 'I often go to the library.' },
                { cn: '他经常出差。', pinyin: 'Tā jīngcháng chūchāi。', en: 'He often goes on business trips.' }
            ]
        },

        {
            id: 'h3m_065', character: '通常', pinyin: 'tōngcháng', meaning: 'usually', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '我通常七点起床。', pinyin: 'Wǒ tōngcháng qī diǎn qǐchuáng。', en: 'I usually get up at seven.' },
                { cn: '周末通常比较轻松。', pinyin: 'Zhōumò tōngcháng bǐjiào qīngsōng。', en: 'Weekends are usually more relaxed.' }
            ]
        },

        {
            id: 'h3m_066', character: '往往', pinyin: 'wǎngwǎng', meaning: 'often/tend to', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '成功往往需要时间。', pinyin: 'Chénggōng wǎngwǎng xūyào shíjiān。', en: 'Success often requires time.' },
                { cn: '他往往工作到很晚。', pinyin: 'Tā wǎngwǎng gōngzuò dào hěn wǎn。', en: 'He tends to work until very late.' }
            ]
        },

        {
            id: 'h3m_067', character: '一直', pinyin: 'yīzhí', meaning: 'always/continuously', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '雨一直下。', pinyin: 'Yǔ yīzhí xià。', en: 'The rain keeps falling.' },
                { cn: '我一直想学中文。', pinyin: 'Wǒ yīzhí xiǎng xué Zhōngwén。', en: 'I have always wanted to learn Chinese.' }
            ]
        },

        {
            id: 'h3m_068', character: '一会儿', pinyin: 'yīhuìr', meaning: 'a while', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '请等一会儿。', pinyin: 'Qǐng děng yīhuìr。', en: 'Please wait a moment.' },
                { cn: '我一会儿就回来。', pinyin: 'Wǒ yīhuìr jiù huílái。', en: 'I\'ll be back in a moment.' }
            ]
        },

        {
            id: 'h3m_069', character: '一下子', pinyin: 'yīxiàzi', meaning: 'suddenly', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '天气一下子变冷了。', pinyin: 'Tiānqì yīxiàzi biàn lěng le。', en: 'The weather suddenly turned cold.' },
                { cn: '我一下子想起来了。', pinyin: 'Wǒ yīxiàzi xiǎng qǐlái le。', en: 'I suddenly remembered.' }
            ]
        },

        {
            id: 'h3m_070', character: '同时', pinyin: 'tóngshí', meaning: 'at the same time', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '我们可以同时进行。', pinyin: 'Wǒmen kěyǐ tóngshí jìnxíng。', en: 'We can proceed at the same time.' },
                { cn: '他同时做着两份工作。', pinyin: 'Tā tóngshí zuò zhe liǎng fèn gōngzuò。', en: 'He is doing two jobs at the same time.' }
            ]
        },

        {
            id: 'h3m_071', character: '随时', pinyin: 'suíshí', meaning: 'anytime', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '有问题随时找我。', pinyin: 'Yǒu wèntí suíshí zhǎo wǒ。', en: 'If you have problems, find me anytime.' },
                { cn: '随时欢迎你来。', pinyin: 'Suíshí huānyíng nǐ lái。', en: 'You are welcome anytime.' }
            ]
        },

        {
            id: 'h3m_072', character: '不断', pinyin: 'bùduàn', meaning: 'continuously', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '技术在不断进步。', pinyin: 'Jìshù zài bùduàn jìnbù。', en: 'Technology is continuously advancing.' },
                { cn: '他不断地学习新知识。', pinyin: 'Tā bùduàn de xuéxí xīn zhīshi。', en: 'He continuously learns new knowledge.' }
            ]
        },

        {
            id: 'h3m_073', character: '逐渐', pinyin: 'zhújiàn', meaning: 'gradually', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '天气逐渐变暖。', pinyin: 'Tiānqì zhújiàn biàn nuǎn。', en: 'The weather is gradually warming up.' },
                { cn: '我逐渐适应了新环境。', pinyin: 'Wǒ zhújiàn shìyìng le xīn huánjìng。', en: 'I gradually adapted to the new environment.' }
            ]
        },

        {
            id: 'h3m_074', character: '立刻', pinyin: 'lìkè', meaning: 'immediately', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '请立刻出发。', pinyin: 'Qǐng lìkè chūfā。', en: 'Please depart immediately.' },
                { cn: '他听到消息立刻赶来了。', pinyin: 'Tā tīngdào xiāoxi lìkè gǎn lái le。', en: 'He came immediately upon hearing the news.' }
            ]
        },

        {
            id: 'h3m_075', character: '马上', pinyin: 'mǎshàng', meaning: 'right away', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '我马上就到。', pinyin: 'Wǒ mǎshàng jiù dào。', en: 'I\'ll arrive right away.' },
                { cn: '会议马上开始了。', pinyin: 'Huìyì mǎshàng kāishǐ le。', en: 'The meeting is starting right away.' }
            ]
        },

        {
            id: 'h3m_076', character: '已经', pinyin: 'yǐjīng', meaning: 'already', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '我已经吃过饭了。', pinyin: 'Wǒ yǐjīng chī guò fàn le。', en: 'I have already eaten.' },
                { cn: '问题已经解决了。', pinyin: 'Wèntí yǐjīng jiějué le。', en: 'The problem has already been solved.' }
            ]
        },

        {
            id: 'h3m_077', character: '才', pinyin: 'cái', meaning: 'only then', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '他十点才到。', pinyin: 'Tā shí diǎn cái dào。', en: 'He only arrived at ten.' },
                { cn: '我昨天才知道。', pinyin: 'Wǒ zuótiān cái zhīdào。', en: 'I only found out yesterday.' }
            ]
        },

        {
            id: 'h3m_078', character: '就', pinyin: 'jiù', meaning: 'then/just', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '我马上就来。', pinyin: 'Wǒ mǎshàng jiù lái。', en: 'I\'ll come right away.' },
                { cn: '这就是我想要的。', pinyin: 'Zhè jiùshì wǒ xiǎng yào de。', en: 'This is exactly what I wanted.' }
            ]
        },

        {
            id: 'h3m_079', character: '还', pinyin: 'hái', meaning: 'still', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '他还在工作。', pinyin: 'Tā hái zài gōngzuò。', en: 'He is still working.' },
                { cn: '你还有什么问题吗？', pinyin: 'Nǐ hái yǒu shénme wèntí ma?', en: 'Do you still have any questions?' }
            ]
        },

        {
            id: 'h3m_080', character: '再', pinyin: 'zài', meaning: 'again', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '请再说一遍。', pinyin: 'Qǐng zài shuō yī biàn。', en: 'Please say it again.' },
                { cn: '我们下次再见。', pinyin: 'Wǒmen xià cì zài jiàn。', en: 'See you again next time.' }
            ]
        },

        {
            id: 'h3m_081', character: '又', pinyin: 'yòu', meaning: 'again', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '他又迟到了。', pinyin: 'Tā yòu chídào le。', en: 'He is late again.' },
                { cn: '今天又下雨了。', pinyin: 'Jīntiān yòu xià yǔ le。', en: 'It is raining again today.' }
            ]
        },

        {
            id: 'h3m_082', character: '也', pinyin: 'yě', meaning: 'also', hsk: 3, category: 'adverbs',
            examples: [
                { cn: '我也想去。', pinyin: 'Wǒ yě xiǎng qù。', en: 'I also want to go.' },
                { cn: '他也是中国人。', pinyin: 'Tā yě shì Zhōngguó rén。', en: 'He is also Chinese.' }
            ]
        },

        // ============================
        // Nouns
        // ============================
        {
            id: 'h3m_083', character: '办法', pinyin: 'bànfǎ', meaning: 'method', hsk: 3, category: 'nouns',
            examples: [
                { cn: '你能想个办法吗？', pinyin: 'nǐ néng xiǎng gè bànfǎ ma？', en: 'Can you think of a method?' },
                { cn: '这是一个好办法。', pinyin: 'zhè shì yī gè hǎo bànfǎ。', en: 'This is a good method.' },
                { cn: '总有办法的。', pinyin: 'zǒng yǒu bànfǎ de。', en: 'There is always a way.' },
                { cn: '办法总比困难多。', pinyin: 'bànfǎ zǒng bǐ kùnnán duō。', en: 'There are always more solutions than problems.' },
                { cn: '我想到了一个办法。', pinyin: 'wǒ xiǎng dào le yī gè bànfǎ。', en: 'I thought of a method.' },
                { cn: '没办法了。', pinyin: 'méi bànfǎ le。', en: 'There\'s no way out.' },
                { cn: '用这个办法试试。', pinyin: 'yòng zhège bànfǎ shì shì。', en: 'Try this method.' },
                { cn: '什么办法都试过了。', pinyin: 'shénme bànfǎ dōu shì guò le。', en: 'Every method has been tried.' }
            ]
        },

        {
            id: 'h3m_084', character: '办公室', pinyin: 'bàngōngshì', meaning: 'office', hsk: 3, category: 'nouns',
            examples: [
                { cn: '他在办公室工作。', pinyin: 'tā zài bàngōngshì gōngzuò。', en: 'He works in the office.' },
                { cn: '办公室在二楼。', pinyin: 'bàngōngshì zài èr lóu。', en: 'The office is on the second floor.' },
                { cn: '我去办公室找老师。', pinyin: 'wǒ qù bàngōngshì zhǎo lǎoshī。', en: 'I go to the office to find the teacher.' },
                { cn: '经理不在办公室。', pinyin: 'jīnglǐ bù zài bàngōngshì。', en: 'The manager is not in the office.' },
                { cn: '办公室很大。', pinyin: 'bàngōngshì hěn dà。', en: 'The office is very big.' },
                { cn: '请到我的办公室来。', pinyin: 'qǐng dào wǒ de bàngōngshì lái。', en: 'Please come to my office.' },
                { cn: '办公室政治。', pinyin: 'bàngōngshì zhèngzhì。', en: 'Office politics.' },
                { cn: '他一大早就在办公室等。', pinyin: 'tā yī dà zǎo jiù zài bàngōngshì děng。', en: 'He was waiting in the office early in the morning.' }
            ]
        },

        {
            id: 'h3m_085', character: '报纸', pinyin: 'bàozhǐ', meaning: 'newspaper', hsk: 3, category: 'nouns',
            examples: [
                { cn: '我每天早上看报纸。', pinyin: 'wǒ měitiān zǎoshang kàn bàozhǐ。', en: 'I read the newspaper every morning.' },
                { cn: '这条新闻上了报纸。', pinyin: 'zhè tiáo xīnwén shàng le bàozhǐ。', en: 'This news made it into the newspaper.' },
                { cn: '订了一份报纸。', pinyin: 'dìng le yī fèn bàozhǐ。', en: 'Subscribed to a newspaper.' },
                { cn: '报纸上有很多广告。', pinyin: 'bàozhǐ shàng yǒu hěn duō guǎnggào。', en: 'There are many ads in the newspaper.' },
                { cn: '现在看报纸的人越来越少了。', pinyin: 'xiànzài kàn bàozhǐ de rén yuèláiyuè shǎo le。', en: 'Fewer and fewer people read newspapers now.' },
                { cn: '把报纸给我看看。', pinyin: 'bǎ bàozhǐ gěi wǒ kàn kàn。', en: 'Let me take a look at the newspaper.' },
                { cn: '报纸上说今天会下雨。', pinyin: 'bàozhǐ shàng shuō jīntiān huì xiàyǔ。', en: 'The newspaper says it will rain today.' },
                { cn: '这是今天的报纸。', pinyin: 'zhè shì jīntiān de bàozhǐ。', en: 'This is today\'s newspaper.' }
            ]
        },

        {
            id: 'h3m_086', character: '笔记本', pinyin: 'bǐjìběn', meaning: 'notebook', hsk: 3, category: 'nouns',
            examples: [
                { cn: '请拿出你的笔记本。', pinyin: 'Qǐng ná chū nǐ de bǐjìběn。', en: 'Please take out your notebook.' },
                { cn: '这个笔记本很漂亮。', pinyin: 'Zhège bǐjìběn hěn piàoliang。', en: 'This notebook is very pretty.' }
            ]
        },

        {
            id: 'h3m_087', character: '材料', pinyin: 'cáiliào', meaning: 'material', hsk: 3, category: 'nouns',
            examples: [
                { cn: '我们需要准备一些材料。', pinyin: 'Wǒmen xūyào zhǔnbèi yīxiē cáiliào。', en: 'We need to prepare some materials.' },
                { cn: '这种材料很环保。', pinyin: 'Zhè zhǒng cáiliào hěn huánbǎo。', en: 'This material is very environmentally friendly.' }
            ]
        },

        {
            id: 'h3m_088', character: '餐厅', pinyin: 'cāntīng', meaning: 'restaurant', hsk: 3, category: 'nouns',
            examples: [
                { cn: '公司附近有一家不错的餐厅。', pinyin: 'Gōngsī fùjìn yǒu yī jiā bùcuò de cāntīng。', en: 'There is a nice restaurant near the company.' },
                { cn: '我们中午去餐厅吃饭吧。', pinyin: 'Wǒmen zhōngwǔ qù cāntīng chīfàn ba。', en: 'Let\'s go to the restaurant for lunch.' }
            ]
        },

        {
            id: 'h3m_089', character: '成绩', pinyin: 'chéngjì', meaning: 'achievement', hsk: 3, category: 'nouns',
            examples: [
                { cn: '他的考试成绩很好。', pinyin: 'Tā de kǎoshì chéngjì hěn hǎo。', en: 'His exam results are very good.' },
                { cn: '努力就会有成绩。', pinyin: 'Nǔlì jiù huì yǒu chéngjì。', en: 'Hard work will yield results.' }
            ]
        },

        {
            id: 'h3m_090', character: '窗户', pinyin: 'chuānghu', meaning: 'window', hsk: 3, category: 'nouns',
            examples: [
                { cn: '请打开窗户透透气。', pinyin: 'Qǐng dǎkāi chuānghu tòu tòu qì。', en: 'Please open the window to let in fresh air.' },
                { cn: '从窗户可以看到大海。', pinyin: 'Cóng chuānghu kěyǐ kàn dào dàhǎi。', en: 'You can see the ocean from the window.' }
            ]
        },

        {
            id: 'h3m_091', character: '词语', pinyin: 'cíyǔ', meaning: 'vocabulary', hsk: 3, category: 'nouns',
            examples: [
                { cn: '这个词语我不认识。', pinyin: 'Zhège cíyǔ wǒ bù rènshi。', en: 'I don\'t know this vocabulary word.' },
                { cn: '请用这个词语造句。', pinyin: 'Qǐng yòng zhège cíyǔ zàojù。', en: 'Please make a sentence with this word.' }
            ]
        },

        {
            id: 'h3m_092', character: '答案', pinyin: 'dá\'àn', meaning: 'answer', hsk: 3, category: 'nouns',
            examples: [
                { cn: '你知道答案吗？', pinyin: 'Nǐ zhīdào dá\'àn ma?', en: 'Do you know the answer?' },
                { cn: '这个问题没有标准答案。', pinyin: 'Zhège wèntí méiyǒu biāozhǔn dá\'àn。', en: 'There is no standard answer to this question.' }
            ]
        },

        {
            id: 'h3m_093', character: '地方', pinyin: 'dìfang', meaning: 'place', hsk: 3, category: 'nouns',
            examples: [
                { cn: '这个地方真漂亮。', pinyin: 'Zhège dìfang zhēn piàoliang。', en: 'This place is really beautiful.' },
                { cn: '你是什么地方的人？', pinyin: 'Nǐ shì shénme dìfang de rén?', en: 'Where are you from?' }
            ]
        },

        {
            id: 'h3m_094', character: '地铁', pinyin: 'dìtiě', meaning: 'subway', hsk: 3, category: 'nouns',
            examples: [
                { cn: '我每天坐地铁上班。', pinyin: 'Wǒ měitiān zuò dìtiě shàngbān。', en: 'I take the subway to work every day.' },
                { cn: '地铁站在那边。', pinyin: 'Dìtiě zhàn zài nà biān。', en: 'The subway station is over there.' }
            ]
        },

        {
            id: 'h3m_095', character: '电脑', pinyin: 'diànnǎo', meaning: 'computer', hsk: 3, category: 'nouns',
            examples: [
                { cn: '我的电脑坏了。', pinyin: 'Wǒ de diànnǎo huài le。', en: 'My computer broke.' },
                { cn: '你每天用电脑多长时间？', pinyin: 'Nǐ měitiān yòng diànnǎo duō cháng shíjiān?', en: 'How long do you use the computer every day?' }
            ]
        },

        {
            id: 'h3m_096', character: '电视', pinyin: 'diànshì', meaning: 'television', hsk: 3, category: 'nouns',
            examples: [
                { cn: '孩子喜欢看电视。', pinyin: 'Háizi xǐhuān kàn diànshì。', en: 'Children like to watch TV.' },
                { cn: '这台电视很便宜。', pinyin: 'Zhè tái diànshì hěn piányi。', en: 'This TV is very cheap.' }
            ]
        },

        {
            id: 'h3m_097', character: '电影', pinyin: 'diànyǐng', meaning: 'movie', hsk: 3, category: 'nouns',
            examples: [
                { cn: '我们周末去看电影吧。', pinyin: 'Wǒmen zhōumò qù kàn diànyǐng ba。', en: 'Let\'s go watch a movie this weekend.' },
                { cn: '这部电影很有意思。', pinyin: 'Zhè bù diànyǐng hěn yǒu yìsi。', en: 'This movie is very interesting.' }
            ]
        },

        {
            id: 'h3m_098', character: '电子邮件', pinyin: 'diànzǐ yóujiàn', meaning: 'email', hsk: 3, category: 'nouns',
            examples: [
                { cn: '请给我发一封电子邮件。', pinyin: 'Qǐng gěi wǒ fā yī fēng diànzǐ yóujiàn。', en: 'Please send me an email.' },
                { cn: '我收到了你的电子邮件。', pinyin: 'Wǒ shōudào le nǐ de diànzǐ yóujiàn。', en: 'I received your email.' }
            ]
        },

        {
            id: 'h3m_099', character: '短信', pinyin: 'duǎnxìn', meaning: 'text message', hsk: 3, category: 'nouns',
            examples: [
                { cn: '我给你发了一条短信。', pinyin: 'Wǒ gěi nǐ fā le yī tiáo duǎnxìn。', en: 'I sent you a text message.' },
                { cn: '收到短信请回复。', pinyin: 'Shōudào duǎnxìn qǐng huífù。', en: 'Please reply when you receive the text.' }
            ]
        },

        {
            id: 'h3m_100', character: '方向', pinyin: 'fāngxiàng', meaning: 'direction', hsk: 3, category: 'nouns',
            examples: [
                { cn: '你往这个方向走。', pinyin: 'Nǐ wǎng zhège fāngxiàng zǒu。', en: 'You go in this direction.' },
                { cn: '我分不清方向。', pinyin: 'Wǒ fēn bù qīng fāngxiàng。', en: 'I can\'t tell the direction.' }
            ]
        },

        {
            id: 'h3m_101', character: '房间', pinyin: 'fángjiān', meaning: 'room', hsk: 3, category: 'nouns',
            examples: [
                { cn: '我的房间不大但很舒服。', pinyin: 'Wǒ de fángjiān bù dà dàn hěn shūfu。', en: 'My room is not big but very comfortable.' },
                { cn: '请打扫一下房间。', pinyin: 'Qǐng dǎsǎo yīxià fángjiān。', en: 'Please clean the room.' }
            ]
        },

        {
            id: 'h3m_102', character: '附近', pinyin: 'fùjìn', meaning: 'nearby', hsk: 3, category: 'nouns',
            examples: [
                { cn: '学校附近有一家超市。', pinyin: 'Xuéxiào fùjìn yǒu yī jiā chāoshì。', en: 'There is a supermarket near the school.' },
                { cn: '我就住在附近。', pinyin: 'Wǒ jiù zhù zài fùjìn。', en: 'I live nearby.' }
            ]
        },

        {
            id: 'h3m_103', character: '工资', pinyin: 'gōngzī', meaning: 'salary', hsk: 3, category: 'nouns',
            examples: [
                { cn: '他的工资很高。', pinyin: 'Tā de gōngzī hěn gāo。', en: 'His salary is very high.' },
                { cn: '这个月的工资发了吗？', pinyin: 'Zhège yuè de gōngzī fā le ma?', en: 'Has this month\'s salary been paid?' }
            ]
        },

        {
            id: 'h3m_104', character: '公司', pinyin: 'gōngsī', meaning: 'company', hsk: 3, category: 'nouns',
            examples: [
                { cn: '我在一家大公司工作。', pinyin: 'Wǒ zài yī jiā dà gōngsī gōngzuò。', en: 'I work at a large company.' },
                { cn: '这家公司很有名。', pinyin: 'Zhè jiā gōngsī hěn yǒumíng。', en: 'This company is very famous.' }
            ]
        },

        {
            id: 'h3m_105', character: '故事', pinyin: 'gùshi', meaning: 'story', hsk: 3, category: 'nouns',
            examples: [
                { cn: '给我讲一个故事吧。', pinyin: 'Gěi wǒ jiǎng yī gè gùshi ba。', en: 'Tell me a story.' },
                { cn: '这个故事很感人。', pinyin: 'Zhège gùshi hěn gǎnrén。', en: 'This story is very touching.' }
            ]
        },

        {
            id: 'h3m_106', character: '顾客', pinyin: 'gùkè', meaning: 'customer', hsk: 3, category: 'nouns',
            examples: [
                { cn: '服务员对顾客很热情。', pinyin: 'Fúwùyuán duì gùkè hěn rèqíng。', en: 'The waiter is very warm to customers.' },
                { cn: '顾客就是上帝。', pinyin: 'Gùkè jiùshì shàngdì。', en: 'The customer is god.' }
            ]
        },

        {
            id: 'h3m_107', character: '关键', pinyin: 'guānjiàn', meaning: 'key/crucial point', hsk: 3, category: 'nouns',
            examples: [
                { cn: '成功的关键是坚持。', pinyin: 'Chénggōng de guānjiàn shì jiānchí。', en: 'The key to success is persistence.' },
                { cn: '问题的关键不在于钱。', pinyin: 'Wèntí de guānjiàn bù zàiyú qián。', en: 'The key to the problem is not about money.' }
            ]
        },

        {
            id: 'h3m_108', character: '广播', pinyin: 'guǎngbō', meaning: 'broadcast', hsk: 3, category: 'nouns',
            examples: [
                { cn: '我在听广播。', pinyin: 'Wǒ zài tīng guǎngbō。', en: 'I\'m listening to the broadcast.' },
                { cn: '广播里说今天会下雨。', pinyin: 'Guǎngbō lǐ shuō jīntiān huì xià yǔ。', en: 'The broadcast said it will rain today.' }
            ]
        },

        {
            id: 'h3m_109', character: '广告', pinyin: 'guǎnggào', meaning: 'advertisement', hsk: 3, category: 'nouns',
            examples: [
                { cn: '这个广告很有意思。', pinyin: 'Zhège guǎnggào hěn yǒu yìsi。', en: 'This advertisement is very interesting.' },
                { cn: '我在网上看到了这个广告。', pinyin: 'Wǒ zài wǎng shàng kàn dào le zhège guǎnggào。', en: 'I saw this advertisement online.' }
            ]
        },

        {
            id: 'h3m_110', character: '规定', pinyin: 'guīdìng', meaning: 'regulation', hsk: 3, category: 'nouns',
            examples: [
                { cn: '学校有严格的规定。', pinyin: 'Xuéxiào yǒu yángé de guīdìng。', en: 'The school has strict regulations.' },
                { cn: '请遵守公司的规定。', pinyin: 'Qǐng zūnshǒu gōngsī de guīdìng。', en: 'Please follow the company regulations.' }
            ]
        },

        {
            id: 'h3m_111', character: '国家', pinyin: 'guójiā', meaning: 'country', hsk: 3, category: 'nouns',
            examples: [
                { cn: '中国是一个大国。', pinyin: 'Zhōngguó shì yī gè dà guó。', en: 'China is a big country.' },
                { cn: '你去过哪些国家？', pinyin: 'Nǐ qù guò nǎxiē guójiā?', en: 'Which countries have you been to?' }
            ]
        },

        {
            id: 'h3m_112', character: '果汁', pinyin: 'guǒzhī', meaning: 'juice', hsk: 3, category: 'nouns',
            examples: [
                { cn: '我想喝一杯果汁。', pinyin: 'Wǒ xiǎng hē yī bēi guǒzhī。', en: 'I want to drink a glass of juice.' },
                { cn: '这种果汁很好喝。', pinyin: 'Zhè zhǒng guǒzhī hěn hǎohē。', en: 'This kind of juice is delicious.' }
            ]
        },

        {
            id: 'h3m_113', character: '过程', pinyin: 'guòchéng', meaning: 'process', hsk: 3, category: 'nouns',
            examples: [
                { cn: '学习的过程很重要。', pinyin: 'Xuéxí de guòchéng hěn zhòngyào。', en: 'The learning process is very important.' },
                { cn: '请描述一下这个过程。', pinyin: 'Qǐng miáoshù yīxià zhège guòchéng。', en: 'Please describe this process.' }
            ]
        },

        {
            id: 'h3m_114', character: '海洋', pinyin: 'hǎiyáng', meaning: 'ocean', hsk: 3, category: 'nouns',
            examples: [
                { cn: '海洋里有很多生物。', pinyin: 'Hǎiyáng lǐ yǒu hěn duō shēngwù。', en: 'There are many creatures in the ocean.' },
                { cn: '他喜欢研究海洋。', pinyin: 'Tā xǐhuān yánjiū hǎiyáng。', en: 'He likes to study the ocean.' }
            ]
        },

        {
            id: 'h3m_115', character: '会议', pinyin: 'huìyì', meaning: 'meeting', hsk: 3, category: 'nouns',
            examples: [
                { cn: '下午有一个重要会议。', pinyin: 'Xiàwǔ yǒu yī gè zhòngyào huìyì。', en: 'There is an important meeting this afternoon.' },
                { cn: '会议推迟了。', pinyin: 'Huìyì tuīchí le。', en: 'The meeting was postponed.' }
            ]
        },

        {
            id: 'h3m_116', character: '活动', pinyin: 'huódòng', meaning: 'activity', hsk: 3, category: 'nouns',
            examples: [
                { cn: '学校组织了很多活动。', pinyin: 'Xuéxiào zǔzhī le hěn duō huódòng。', en: 'The school organized many activities.' },
                { cn: '你喜欢什么课外活动？', pinyin: 'Nǐ xǐhuān shénme kèwài huódòng?', en: 'What extracurricular activities do you like?' }
            ]
        },

        {
            id: 'h3m_117', character: '基础', pinyin: 'jīchǔ', meaning: 'foundation', hsk: 3, category: 'nouns',
            examples: [
                { cn: '打好基础很重要。', pinyin: 'Dǎ hǎo jīchǔ hěn zhòngyào。', en: 'Building a good foundation is very important.' },
                { cn: '他的中文基础很好。', pinyin: 'Tā de Zhōngwén jīchǔ hěn hǎo。', en: 'His Chinese foundation is very good.' }
            ]
        },

        {
            id: 'h3m_118', character: '计划', pinyin: 'jìhuà', meaning: 'plan', hsk: 3, category: 'nouns',
            examples: [
                { cn: '你有什么计划？', pinyin: 'Nǐ yǒu shénme jìhuà?', en: 'What plans do you have?' },
                { cn: '一切按计划进行。', pinyin: 'Yīqiè àn jìhuà jìnxíng。', en: 'Everything is going according to plan.' }
            ]
        },

        {
            id: 'h3m_119', character: '技术', pinyin: 'jìshù', meaning: 'technology', hsk: 3, category: 'nouns',
            examples: [
                { cn: '科技发展得很快。', pinyin: 'Kējì fāzhǎn de hěn kuài。', en: 'Technology develops very fast.' },
                { cn: '他学习计算机技术。', pinyin: 'Tā xuéxí jìsuànjī jìshù。', en: 'He studies computer technology.' }
            ]
        },

        {
            id: 'h3m_120', character: '季节', pinyin: 'jìjié', meaning: 'season', hsk: 3, category: 'nouns',
            examples: [
                { cn: '你最喜欢哪个季节？', pinyin: 'Nǐ zuì xǐhuān nǎ gè jìjié?', en: 'Which season do you like most?' },
                { cn: '秋天是最美的季节。', pinyin: 'Qiūtiān shì zuì měi de jìjié。', en: 'Autumn is the most beautiful season.' }
            ]
        },

        {
            id: 'h3m_121', character: '价格', pinyin: 'jiàgé', meaning: 'price', hsk: 3, category: 'nouns',
            examples: [
                { cn: '这个东西的价格是多少？', pinyin: 'Zhège dōngxi de jiàgé shì duōshǎo?', en: 'What is the price of this item?' },
                { cn: '价格太贵了！', pinyin: 'Jiàgé tài guì le!', en: 'The price is too expensive!' }
            ]
        },

        {
            id: 'h3m_122', character: '假期', pinyin: 'jiàqī', meaning: 'vacation', hsk: 3, category: 'nouns',
            examples: [
                { cn: '假期你打算做什么？', pinyin: 'Jiàqī nǐ dǎsuàn zuò shénme?', en: 'What do you plan to do during the vacation?' },
                { cn: '我的假期过得很开心。', pinyin: 'Wǒ de jiàqī guò de hěn kāixīn。', en: 'I had a very happy vacation.' }
            ]
        },

        {
            id: 'h3m_123', character: '交通', pinyin: 'jiāotōng', meaning: 'traffic', hsk: 3, category: 'nouns',
            examples: [
                { cn: '北京的交通很堵。', pinyin: 'Běijīng de jiāotōng hěn dǔ。', en: 'Beijing\'s traffic is very congested.' },
                { cn: '这里的交通很方便。', pinyin: 'Zhèlǐ de jiāotōng hěn fāngbiàn。', en: 'The transportation here is very convenient.' }
            ]
        },

        {
            id: 'h3m_124', character: '教授', pinyin: 'jiàoshòu', meaning: 'professor', hsk: 3, category: 'nouns',
            examples: [
                { cn: '李教授是我们的老师。', pinyin: 'Lǐ jiàoshòu shì wǒmen de lǎoshī。', en: 'Professor Li is our teacher.' },
                { cn: '他是一位著名的教授。', pinyin: 'Tā shì yī wèi zhùmíng de jiàoshòu。', en: 'He is a famous professor.' }
            ]
        },

        {
            id: 'h3m_125', character: '节目', pinyin: 'jiémù', meaning: 'program', hsk: 3, category: 'nouns',
            examples: [
                { cn: '这个电视节目很好看。', pinyin: 'Zhège diànshì jiémù hěn hǎokàn。', en: 'This TV program is very good.' },
                { cn: '今晚有什么节目？', pinyin: 'Jīnwǎn yǒu shénme jiémù?', en: 'What program is on tonight?' }
            ]
        },

        {
            id: 'h3m_126', character: '节日', pinyin: 'jiérì', meaning: 'festival', hsk: 3, category: 'nouns',
            examples: [
                { cn: '春节是中国最重要的节日。', pinyin: 'Chūnjié shì Zhōngguó zuì zhòngyào de jiérì。', en: 'Spring Festival is the most important festival in China.' },
                { cn: '你最喜欢哪个节日？', pinyin: 'Nǐ zuì xǐhuān nǎ gè jiérì?', en: 'Which festival do you like most?' }
            ]
        },

        {
            id: 'h3m_127', character: '结果', pinyin: 'jiéguǒ', meaning: 'result', hsk: 3, category: 'nouns',
            examples: [
                { cn: '考试结果出来了。', pinyin: 'Kǎoshì jiéguǒ chūlái le。', en: 'The exam results are out.' },
                { cn: '结果证明他是对的。', pinyin: 'Jiéguǒ zhèngmíng tā shì duì de。', en: 'The results proved he was right.' }
            ]
        },

        {
            id: 'h3m_128', character: '经济', pinyin: 'jīngjì', meaning: 'economy', hsk: 3, category: 'nouns',
            examples: [
                { cn: '国家的经济发展很快。', pinyin: 'Guójiā de jīngjì fāzhǎn hěn kuài。', en: 'The country\'s economy is developing quickly.' },
                { cn: '他对经济很感兴趣。', pinyin: 'Tā duì jīngjì hěn gǎn xìngqù。', en: 'He is very interested in economics.' }
            ]
        },

        {
            id: 'h3m_129', character: '精神', pinyin: 'jīngshén', meaning: 'spirit', hsk: 3, category: 'nouns',
            examples: [
                { cn: '他的精神很好。', pinyin: 'Tā de jīngshén hěn hǎo。', en: 'His spirit is very good.' },
                { cn: '我们要学习这种精神。', pinyin: 'Wǒmen yào xuéxí zhè zhǒng jīngshén。', en: 'We should learn from this spirit.' }
            ]
        },

        {
            id: 'h3m_130', character: '句子', pinyin: 'jùzi', meaning: 'sentence', hsk: 3, category: 'nouns',
            examples: [
                { cn: '请用这个词造一个句子。', pinyin: 'Qǐng yòng zhège cí zào yī gè jùzi。', en: 'Please make a sentence with this word.' },
                { cn: '这个句子太长了。', pinyin: 'Zhège jùzi tài cháng le。', en: 'This sentence is too long.' }
            ]
        },

        {
            id: 'h3m_131', character: '咖啡', pinyin: 'kāfēi', meaning: 'coffee', hsk: 3, category: 'nouns',
            examples: [
                { cn: '我每天早上喝一杯咖啡。', pinyin: 'Wǒ měitiān zǎoshang hē yī bēi kāfēi。', en: 'I drink a cup of coffee every morning.' },
                { cn: '这家店的咖啡很好喝。', pinyin: 'Zhè jiā diàn de kāfēi hěn hǎohē。', en: 'This shop\'s coffee is delicious.' }
            ]
        },

        {
            id: 'h3m_132', character: '科学', pinyin: 'kēxué', meaning: 'science', hsk: 3, category: 'nouns',
            examples: [
                { cn: '科学改变了我们的生活。', pinyin: 'Kēxué gǎibiàn le wǒmen de shēnghuó。', en: 'Science has changed our lives.' },
                { cn: '他对科学很感兴趣。', pinyin: 'Tā duì kēxué hěn gǎn xìngqù。', en: 'He is very interested in science.' }
            ]
        },

        {
            id: 'h3m_133', character: '世纪', pinyin: 'shìjì', meaning: 'century', hsk: 3, category: 'nouns',
            examples: [
                { cn: '这座建筑有五个世纪的历史。', pinyin: 'Zhè zuò jiànzhù yǒu wǔ gè shìjì de lìshǐ。', en: 'This building has five centuries of history.' },
                { cn: '二十一世纪是信息时代。', pinyin: 'Èrshíyī shìjì shì xìnxī shídài。', en: 'The 21st century is the information age.' }
            ]
        },

        {
            id: 'h3m_134', character: '年代', pinyin: 'niándài', meaning: 'era/decade', hsk: 3, category: 'nouns',
            examples: [
                { cn: '那是九十年代的事了。', pinyin: 'Nà shì jiǔshí niándài de shì le。', en: 'That was something from the 90s.' },
                { cn: '这个年代变化太快了。', pinyin: 'Zhège niándài biànhuà tài kuài le。', en: 'Changes in this era are too fast.' }
            ]
        },

        {
            id: 'h3m_135', character: '环境', pinyin: 'huánjìng', meaning: 'environment', hsk: 3, category: 'nouns',
            examples: [
                { cn: '我们要保护环境。', pinyin: 'Wǒmen yào bǎohù huánjìng。', en: 'We must protect the environment.' },
                { cn: '这里的工作环境很好。', pinyin: 'Zhèlǐ de gōngzuò huánjìng hěn hǎo。', en: 'The work environment here is very good.' }
            ]
        },

        {
            id: 'h3m_136', character: '经验', pinyin: 'jīngyàn', meaning: 'experience', hsk: 3, category: 'nouns',
            examples: [
                { cn: '他有丰富的经验。', pinyin: 'Tā yǒu fēngfù de jīngyàn。', en: 'He has rich experience.' },
                { cn: '这次旅行是一次难忘的经验。', pinyin: 'Zhè cì lǚxíng shì yī cì nánwàng de jīngyàn。', en: 'This trip was an unforgettable experience.' }
            ]
        },

        {
            id: 'h3m_137', character: '情况', pinyin: 'qíngkuàng', meaning: 'situation', hsk: 3, category: 'nouns',
            examples: [
                { cn: '现在的情况怎么样了？', pinyin: 'Xiànzài de qíngkuàng zěnmeyàng le?', en: 'How is the situation now?' },
                { cn: '根据实际情况来决定。', pinyin: 'Gēnjù shíjì qíngkuàng lái juédìng。', en: 'Decide based on the actual situation.' }
            ]
        },

        // ============================
        // Verbs
        // ============================
        {
            id: 'h3m_138', character: '安排', pinyin: 'ānpái', meaning: 'to arrange', hsk: 3, category: 'verbs',
            examples: [
                { cn: '经理安排了一个重要的会议。', pinyin: 'jīnglǐ ānpái le yī gè zhòngyào de huìyì。', en: 'The manager arranged an important meeting.' },
                { cn: '请你安排一下明天的工作。', pinyin: 'qǐng nǐ ānpái yīxià míngtiān de gōngzuò。', en: 'Please arrange tomorrow\'s work.' },
                { cn: '他帮我安排了住宿。', pinyin: 'tā bāng wǒ ānpái le zhùsù。', en: 'He helped me arrange accommodation.' },
                { cn: '一切都安排好了。', pinyin: 'yīqiè dōu ānpái hǎo le。', en: 'Everything has been arranged.' },
                { cn: '这个活动安排得很不错。', pinyin: 'zhège huódòng ānpái de hěn bù cuò。', en: 'This event was arranged very well.' },
                { cn: '你安排好时间了吗？', pinyin: 'nǐ ānpái hǎo shíjiān le ma？', en: 'Have you arranged your time?' },
                { cn: '公司安排我去上海出差。', pinyin: 'gōngsī ānpái wǒ qù shànghǎi chūchāi。', en: 'The company arranged for me to go to Shanghai on business.' },
                { cn: '日程安排得很满。', pinyin: 'rìchéng ānpái de hěn mǎn。', en: 'The schedule is very packed.' }
            ]
        },

        {
            id: 'h3m_139', character: '帮助', pinyin: 'bāngzhù', meaning: 'to help', hsk: 3, category: 'verbs',
            examples: [
                { cn: '他经常帮助有困难的同学。', pinyin: 'tā jīngcháng bāngzhù yǒu kùnnán de tóngxué。', en: 'He often helps classmates who have difficulties.' },
                { cn: '谢谢你的帮助！', pinyin: 'xièxiè nǐ de bāngzhù！', en: 'Thank you for your help!' },
                { cn: '我能帮助你吗？', pinyin: 'wǒ néng bāngzhù nǐ ma？', en: 'Can I help you?' },
                { cn: '朋友之间应该互相帮助。', pinyin: 'péngyou zhī jiān yīnggāi hùxiāng bāngzhù。', en: 'Friends should help each other.' },
                { cn: '帮助别人是快乐的事。', pinyin: 'bāngzhù biérén shì kuàilè de shì。', en: 'Helping others is a joyful thing.' },
                { cn: '电脑能帮助我们做很多事。', pinyin: 'diànnǎo néng bāngzhù wǒmen zuò hěn duō shì。', en: 'Computers can help us do many things.' },
                { cn: '他需要你的帮助。', pinyin: 'tā xūyào nǐ de bāngzhù。', en: 'He needs your help.' },
                { cn: '这本书帮助我学中文。', pinyin: 'zhè běn shū bāngzhù wǒ xué zhōngwén。', en: 'This book helps me learn Chinese.' }
            ]
        },

        {
            id: 'h3m_140', character: '表示', pinyin: 'biǎoshì', meaning: 'to express', hsk: 3, category: 'verbs',
            examples: [
                { cn: '她表示对这个计划很感兴趣。', pinyin: 'tā biǎoshì duì zhège jìhuà hěn gǎn xìngqù。', en: 'She expressed great interest in this plan.' },
                { cn: '我向你表示衷心的感谢。', pinyin: 'wǒ xiàng nǐ biǎoshì zhōngxīn de gǎnxiè。', en: 'I express my heartfelt thanks to you.' },
                { cn: '他表示不同意。', pinyin: 'tā biǎoshì bù tóngyì。', en: 'He expressed disagreement.' },
                { cn: '这个符号表示什么？', pinyin: 'zhège fúhào biǎoshì shénme？', en: 'What does this symbol mean?' },
                { cn: '老师对我们的表现表示满意。', pinyin: 'lǎoshī duì wǒmen de biǎoxiàn biǎoshì mǎnyì。', en: 'The teacher expressed satisfaction with our performance.' },
                { cn: '政府表示会解决问题。', pinyin: 'zhèngfǔ biǎoshì huì jiějué wèntí。', en: 'The government indicated it would solve the problem.' },
                { cn: '他表示愿意帮忙。', pinyin: 'tā biǎoshì yuànyì bāngmáng。', en: 'He expressed willingness to help.' },
                { cn: '红色表示危险。', pinyin: 'hóngsè biǎoshì wēixiǎn。', en: 'Red indicates danger.' }
            ]
        },

        {
            id: 'h3m_141', character: '参加', pinyin: 'cānjiā', meaning: 'to participate', hsk: 3, category: 'verbs',
            examples: [
                { cn: '下个月我要参加朋友的婚礼。', pinyin: 'xià gè yuè wǒ yào cānjiā péngyou de hūnlǐ。', en: 'Next month I\'ll attend a friend\'s wedding.' },
                { cn: '你参加昨天的活动了吗？', pinyin: 'nǐ cānjiā zuótiān de huódòng le ma？', en: 'Did you participate in yesterday\'s activity?' },
                { cn: '很多人参加了这次比赛。', pinyin: 'hěn duō rén cānjiā le zhè cì bǐsài。', en: 'Many people participated in this competition.' },
                { cn: '我也想参加。', pinyin: 'wǒ yě xiǎng cānjiā。', en: 'I want to participate too.' },
                { cn: '他参加了中文课。', pinyin: 'tā cānjiā le zhōngwén kè。', en: 'He joined the Chinese class.' },
                { cn: '参加活动的人很多。', pinyin: 'cānjiā huódòng de rén hěn duō。', en: 'Many people participated in the activity.' },
                { cn: '你报名参加吗？', pinyin: 'nǐ bàomíng cānjiā ma？', en: 'Are you signing up to participate?' },
                { cn: '欢迎大家积极参加。', pinyin: 'huānyíng dàjiā jījí cānjiā。', en: 'Everyone is welcome to actively participate.' }
            ]
        },

        {
            id: 'h3m_142', character: '出现', pinyin: 'chūxiàn', meaning: 'to appear', hsk: 3, category: 'verbs',
            examples: [
                { cn: '问题出现了，我们需要马上解决。', pinyin: 'wèntí chūxiàn le，wǒmen xūyào mǎshàng jiějué。', en: 'A problem appeared; we need to solve it immediately.' },
                { cn: '他突然出现在我的面前。', pinyin: 'tā túrán chūxiàn zài wǒ de miànqián。', en: 'He suddenly appeared in front of me.' },
                { cn: '新技术不断出现。', pinyin: 'xīn jìshù bùduàn chūxiàn。', en: 'New technologies keep appearing.' },
                { cn: '出现了很多问题。', pinyin: 'chūxiàn le hěn duō wèntí。', en: 'Many problems appeared.' },
                { cn: '太阳从云后面出现了。', pinyin: 'tàiyáng cóng yún hòumiàn chūxiàn le。', en: 'The sun appeared from behind the clouds.' },
                { cn: '这种情况很少出现。', pinyin: 'zhè zhǒng qíngkuàng hěn shǎo chūxiàn。', en: 'This situation rarely occurs.' },
                { cn: '电视上出现了他的照片。', pinyin: 'diànshì shàng chūxiàn le tā de zhàopiàn。', en: 'His photo appeared on TV.' },
                { cn: '新的思路出现在我脑海中。', pinyin: 'xīn de sīlù chūxiàn zài wǒ nǎohǎi zhōng。', en: 'A new idea appeared in my mind.' }
            ]
        },

        {
            id: 'h3m_143', character: '担心', pinyin: 'dānxīn', meaning: 'to worry', hsk: 3, category: 'verbs',
            examples: [
                { cn: '妈妈总是担心我的健康。', pinyin: 'māma zǒngshì dānxīn wǒ de jiànkāng。', en: 'Mom always worries about my health.' },
                { cn: '别担心，一切都会好起来的。', pinyin: 'bié dānxīn，yīqiè dōu huì hǎo qǐlái de。', en: 'Don\'t worry; everything will get better.' },
                { cn: '我担心他会迟到。', pinyin: 'wǒ dānxīn tā huì chídào。', en: 'I\'m worried he\'ll be late.' },
                { cn: '担心也没有用。', pinyin: 'dānxīn yě méiyǒu yòng。', en: 'Worrying is useless.' },
                { cn: '他在为考试担心。', pinyin: 'tā zài wèi kǎoshì dānxīn。', en: 'He is worried about the exam.' },
                { cn: '你不用为我担心。', pinyin: 'nǐ bùyòng wèi wǒ dānxīn。', en: 'You don\'t need to worry about me.' },
                { cn: '这件事让我很担心。', pinyin: 'zhè jiàn shì ràng wǒ hěn dānxīn。', en: 'This matter makes me very worried.' },
                { cn: '最担心的事情还是发生了。', pinyin: 'zuì dānxīn de shìqing háishì fāshēng le。', en: 'The most feared thing still happened.' }
            ]
        },

        {
            id: 'h3m_144', character: '发现', pinyin: 'fāxiàn', meaning: 'to discover', hsk: 3, category: 'verbs',
            examples: [
                { cn: '我发现了一家很好的餐厅。', pinyin: 'wǒ fāxiàn le yī jiā hěn hǎo de cāntīng。', en: 'I discovered a very good restaurant.' },
                { cn: '科学家发现了一种新的方法。', pinyin: 'kēxuéjiā fāxiàn le yī zhǒng xīn de fāngfǎ。', en: 'Scientists discovered a new method.' },
                { cn: '你发现了什么？', pinyin: 'nǐ fāxiàn le shénme？', en: 'What did you discover?' },
                { cn: '我没有发现任何问题。', pinyin: 'wǒ méiyǒu fāxiàn rènhé wèntí。', en: 'I did not discover any problems.' },
                { cn: '他发现自己在说中文。', pinyin: 'tā fāxiàn zìjǐ zài shuō zhōngwén。', en: 'He found himself speaking Chinese.' },
                { cn: '这是重大发现。', pinyin: 'zhè shì zhòngdà fāxiàn。', en: 'This is a major discovery.' },
                { cn: '刚发现今天不用上课。', pinyin: 'gāng fāxiàn jīntiān bùyòng shàngkè。', en: 'Just discovered there is no class today.' },
                { cn: '他在书里发现了答案。', pinyin: 'tā zài shū lǐ fāxiàn le dáàn。', en: 'He discovered the answer in the book.' }
            ]
        },

        {
            id: 'h3m_145', character: '改变', pinyin: 'gǎibiàn', meaning: 'to change', hsk: 3, category: 'verbs',
            examples: [
                { cn: '我想改变我的生活方式。', pinyin: 'wǒ xiǎng gǎibiàn wǒ de shēnghuó fāngshì。', en: 'I want to change my lifestyle.' },
                { cn: '这件事改变了他的想法。', pinyin: 'zhè jiàn shì gǎibiàn le tā de xiǎngfǎ。', en: 'This matter changed his thinking.' },
                { cn: '不要试图改变别人。', pinyin: 'bùyào shìtú gǎibiàn biérén。', en: 'Don\'t try to change others.' },
                { cn: '世界在快速改变。', pinyin: 'shìjiè zài kuàisù gǎibiàn。', en: 'The world is changing rapidly.' },
                { cn: '计划改变了。', pinyin: 'jìhuà gǎibiàn le。', en: 'The plan has changed.' },
                { cn: '这个决定改变了我的命运。', pinyin: 'zhège juédìng gǎibiàn le wǒ de mìngyùn。', en: 'This decision changed my fate.' },
                { cn: '改变习惯不容易。', pinyin: 'gǎibiàn xíguàn bù róngyì。', en: 'Changing habits is not easy.' },
                { cn: '天气改变了我们的行程。', pinyin: 'tiānqì gǎibiàn le wǒmen de xíngchéng。', en: 'The weather changed our itinerary.' }
            ]
        },

        {
            id: 'h3m_146', character: '感谢', pinyin: 'gǎnxiè', meaning: 'to thank', hsk: 3, category: 'verbs',
            examples: [
                { cn: '非常感谢你的帮助。', pinyin: 'fēicháng gǎnxiè nǐ de bāngzhù。', en: 'Thank you very much for your help.' },
                { cn: '我想感谢所有支持我的人。', pinyin: 'wǒ xiǎng gǎnxiè suǒyǒu zhīchí wǒ de rén。', en: 'I want to thank everyone who supported me.' },
                { cn: '感谢你的邀请。', pinyin: 'gǎnxiè nǐ de yāoqǐng。', en: 'Thank you for your invitation.' },
                { cn: '我们必须感谢父母的养育。', pinyin: 'wǒmen bìxū gǎnxiè fùmǔ de yǎngyù。', en: 'We must thank our parents for raising us.' },
                { cn: '我对你充满感谢。', pinyin: 'wǒ duì nǐ chōngmǎn gǎnxiè。', en: 'I am full of gratitude to you.' },
                { cn: '谢谢你，太感谢了！', pinyin: 'xièxiè nǐ，tài gǎnxiè le！', en: 'Thank you, so grateful!' },
                { cn: '我想当面对你表示感谢。', pinyin: 'wǒ xiǎng dāngmiàn duì nǐ biǎoshì gǎnxiè。', en: 'I want to thank you in person.' },
                { cn: '写信感谢朋友的关心。', pinyin: 'xiěxìn gǎnxiè péngyou de guānxīn。', en: 'Write a letter to thank a friend for their concern.' }
            ]
        },

        {
            id: 'h3m_147', character: '关心', pinyin: 'guānxīn', meaning: 'to care about', hsk: 3, category: 'verbs',
            examples: [
                { cn: '你应该多关心自己的身体。', pinyin: 'nǐ yīnggāi duō guānxīn zìjǐ de shēntǐ。', en: 'You should care more about your health.' },
                { cn: '大家都很关心这个问题。', pinyin: 'dàjiā dōu hěn guānxīn zhège wèntí。', en: 'Everyone cares a lot about this issue.' },
                { cn: '谢谢你关心我。', pinyin: 'xièxiè nǐ guānxīn wǒ。', en: 'Thank you for caring about me.' },
                { cn: '父母最关心孩子的教育。', pinyin: 'fùmǔ zuì guānxīn háizi de jiàoyù。', en: 'Parents are most concerned about their children\'s education.' },
                { cn: '我不太关心这些事情。', pinyin: 'wǒ bù tài guānxīn zhèxiē shìqing。', en: 'I don\'t really care about these things.' },
                { cn: '他对政治很关心。', pinyin: 'tā duì zhèngzhì hěn guānxīn。', en: 'He cares a lot about politics.' },
                { cn: '互相关心是友谊的基础。', pinyin: 'hùxiāng guānxīn shì yǒuyì de jīchǔ。', en: 'Mutual care is the foundation of friendship.' },
                { cn: '关心别人的感受很重要。', pinyin: 'guānxīn biérén de gǎnshòu hěn zhòngyào。', en: 'Caring about others\' feelings is important.' }
            ]
        },

        {
            id: 'h3m_148', character: '检查', pinyin: 'jiǎnchá', meaning: 'to check', hsk: 3, category: 'verbs',
            examples: [
                { cn: '医生仔细检查了他的身体。', pinyin: 'yīshēng zǐxì jiǎnchá le tā de shēntǐ。', en: 'The doctor carefully checked his body.' },
                { cn: '出发前请检查一下行李。', pinyin: 'chūfā qián qǐng jiǎnchá yīxià xíngli。', en: 'Please check your luggage before departure.' },
                { cn: '检查完再走。', pinyin: 'jiǎnchá wán zài zǒu。', en: 'Leave after checking.' },
                { cn: '我需要检查一下电脑。', pinyin: 'wǒ xūyào jiǎnchá yīxià diànnǎo。', en: 'I need to check the computer.' },
                { cn: '安全检查很重要。', pinyin: 'ānquán jiǎnchá hěn zhòngyào。', en: 'Safety checks are important.' },
                { cn: '请检查你的作业。', pinyin: 'qǐng jiǎnchá nǐ de zuòyè。', en: 'Please check your homework.' },
                { cn: '老师正在检查试卷。', pinyin: 'lǎoshī zhèngzài jiǎnchá shìjuàn。', en: 'The teacher is checking the exam papers.' },
                { cn: '再检查一遍，看看有没有错。', pinyin: 'zài jiǎnchá yī biàn，kàn kàn yǒu méiyǒu cuò。', en: 'Check again to see if there are any errors.' }
            ]
        },

        {
            id: 'h3m_149', character: '减少', pinyin: 'jiǎnshǎo', meaning: 'to reduce', hsk: 3, category: 'verbs',
            examples: [
                { cn: '我们应该减少使用塑料。', pinyin: 'wǒmen yīnggāi jiǎnshǎo shǐyòng sùliào。', en: 'We should reduce the use of plastic.' },
                { cn: '公司减少了不必要的开支。', pinyin: 'gōngsī jiǎnshǎo le bù bìyào de kāizhī。', en: 'The company reduced unnecessary expenses.' },
                { cn: '路上的车减少了。', pinyin: 'lùshang de chē jiǎnshǎo le。', en: 'The number of cars on the road decreased.' },
                { cn: '减少工作时间。', pinyin: 'jiǎnshǎo gōngzuò shíjiān。', en: 'Reduce working hours.' },
                { cn: '这个措施可以大大减少浪费。', pinyin: 'zhège cuòshī kěyǐ dàdà jiǎnshǎo làngfèi。', en: 'This measure can greatly reduce waste.' },
                { cn: '体重减少了很多。', pinyin: 'tǐzhòng jiǎnshǎo le hěn duō。', en: 'Lost a lot of weight.' },
                { cn: '我们要减少错误。', pinyin: 'wǒmen yào jiǎnshǎo cuòwù。', en: 'We need to reduce mistakes.' },
                { cn: '虽然减少了开会，效率却提高了。', pinyin: 'suīrán jiǎnshǎo le kāihuì，xiàolǜ què tígāo le。', en: 'Although meetings were reduced, efficiency improved.' }
            ]
        },

        {
            id: 'h3m_150', character: '交流', pinyin: 'jiāoliú', meaning: 'to communicate', hsk: 3, category: 'verbs',
            examples: [
                { cn: '我们需要多交流想法。', pinyin: 'wǒmen xūyào duō jiāoliú xiǎngfǎ。', en: 'We need to communicate ideas more.' },
                { cn: '两国领导人交流了意见。', pinyin: 'liǎng guó lǐngdǎo rén jiāoliú le yìjiàn。', en: 'The leaders of the two countries exchanged views.' },
                { cn: '文化交流很重要。', pinyin: 'wénhuà jiāoliú hěn zhòngyào。', en: 'Cultural exchange is very important.' },
                { cn: '通过交流解决了很多问题。', pinyin: 'tōngguò jiāoliú jiějué le hěn duō wèntí。', en: 'Many problems were solved through communication.' },
                { cn: '与外国人交流可以提高语言能力。', pinyin: 'yǔ wàiguó rén jiāoliú kěyǐ tígāo yǔyán nénglì。', en: 'Communicating with foreigners can improve language skills.' },
                { cn: '我们有很好的交流。', pinyin: 'wǒmen yǒu hěn hǎo de jiāoliú。', en: 'We have very good communication.' },
                { cn: '在会议上大家积极交流意见。', pinyin: 'zài huìyì shàng dàjiā jījí jiāoliú yìjiàn。', en: 'At the meeting everyone actively exchanged opinions.' },
                { cn: '缺乏交流会导致误解。', pinyin: 'quēfá jiāoliú huì dǎozhì wùjiě。', en: 'Lack of communication can lead to misunderstandings.' }
            ]
        },

        {
            id: 'h3m_151', character: '教育', pinyin: 'jiàoyù', meaning: 'to educate', hsk: 3, category: 'verbs',
            examples: [
                { cn: '父母应该好好教育孩子。', pinyin: 'fùmǔ yīnggāi hǎohāo jiàoyù háizi。', en: 'Parents should educate their children well.' },
                { cn: '这个经历教育了我。', pinyin: 'zhège jīnglì jiàoyù le wǒ。', en: 'This experience taught me a lesson.' },
                { cn: '教育是国家的基础。', pinyin: 'jiàoyù shì guójiā de jīchǔ。', en: 'Education is the foundation of a country.' },
                { cn: '中国的教育水平在提高。', pinyin: 'zhōngguó de jiàoyù shuǐpíng zài tígāo。', en: 'China\'s education level is improving.' },
                { cn: '他从事教育工作。', pinyin: 'tā cóngshì jiàoyù gōngzuò。', en: 'He works in education.' },
                { cn: '好的教育能改变命运。', pinyin: 'hǎo de jiàoyù néng gǎibiàn mìngyùn。', en: 'Good education can change one\'s destiny.' },
                { cn: '教育改革需要时间。', pinyin: 'jiàoyù gǎigé xūyào shíjiān。', en: 'Education reform takes time.' },
                { cn: '家庭教育非常重要。', pinyin: 'jiātíng jiàoyù fēicháng zhòngyào。', en: 'Family education is very important.' }
            ]
        },

        {
            id: 'h3m_152', character: '接受', pinyin: 'jiēshòu', meaning: 'to accept', hsk: 3, category: 'verbs',
            examples: [
                { cn: '我接受了朋友的邀请。', pinyin: 'wǒ jiēshòu le péngyou de yāoqǐng。', en: 'I accepted my friend\'s invitation.' },
                { cn: '他很难接受这个事实。', pinyin: 'tā hěn nán jiēshòu zhège shìshí。', en: 'He finds it hard to accept this fact.' },
                { cn: '请接受我的道歉。', pinyin: 'qǐng jiēshòu wǒ de dàoqiàn。', en: 'Please accept my apology.' },
                { cn: '他接受了我的建议。', pinyin: 'tā jiēshòu le wǒ de jiànyì。', en: 'He accepted my suggestion.' },
                { cn: '我无法接受这样的结果。', pinyin: 'wǒ wúfǎ jiēshòu zhèyàng de jiéguǒ。', en: 'I cannot accept such a result.' },
                { cn: '接受新知识需要时间。', pinyin: 'jiēshòu xīn zhīshi xūyào shíjiān。', en: 'Accepting new knowledge takes time.' },
                { cn: '不管怎么样，必须接受。', pinyin: 'bùguǎn zěnmeyàng，bìxū jiēshòu。', en: 'No matter what, must accept.' },
                { cn: '学会接受失败也是一种成长。', pinyin: 'xuéhuì jiēshòu shībài yě shì yī zhǒng chéngzhǎng。', en: 'Learning to accept failure is also a form of growth.' }
            ]
        },

        {
            id: 'h3m_153', character: '解决', pinyin: 'jiějué', meaning: 'to solve', hsk: 3, category: 'verbs',
            examples: [
                { cn: '我们必须尽快解决这个问题。', pinyin: 'wǒmen bìxū jǐnkuài jiějué zhège wèntí。', en: 'We must solve this problem as soon as possible.' },
                { cn: '他终于解决了所有的困难。', pinyin: 'tā zhōngyú jiějué le suǒyǒu de kùnnán。', en: 'He finally solved all the difficulties.' },
                { cn: '这个办法能解决问题吗？', pinyin: 'zhège bànfǎ néng jiějué wèntí ma？', en: 'Can this method solve the problem?' },
                { cn: '问题还没解决。', pinyin: 'wèntí hái méi jiějué。', en: 'The problem is not yet solved.' },
                { cn: '沟通可以解决很多矛盾。', pinyin: 'gōutōng kěyǐ jiějué hěn duō máodùn。', en: 'Communication can solve many conflicts.' },
                { cn: '我们商量一下怎么解决。', pinyin: 'wǒmen shāngliang yīxià zěnme jiějué。', en: 'Let\'s discuss how to solve it.' },
                { cn: '这件事只能我们自己解决。', pinyin: 'zhè jiàn shì zhǐ néng wǒmen zìjǐ jiějué。', en: 'This matter can only be solved by ourselves.' },
                { cn: '数学题解决了。', pinyin: 'shùxué tí jiějué le。', en: 'The math problem is solved.' }
            ]
        },

        {
            id: 'h3m_154', character: '解释', pinyin: 'jiěshì', meaning: 'to explain', hsk: 3, category: 'verbs',
            examples: [
                { cn: '老师解释了这个词的用法。', pinyin: 'lǎoshī jiěshì le zhège cí de yòngfǎ。', en: 'The teacher explained the usage of this word.' },
                { cn: '你能解释一下原因吗？', pinyin: 'nǐ néng jiěshì yīxià yuányīn ma？', en: 'Can you explain the reason?' },
                { cn: '他解释了为什么迟到。', pinyin: 'tā jiěshì le wèishénme chídào。', en: 'He explained why he was late.' },
                { cn: '这个很难解释。', pinyin: 'zhège hěn nán jiěshì。', en: 'This is hard to explain.' },
                { cn: '不用解释了。', pinyin: 'bùyòng jiěshì le。', en: 'No need to explain.' },
                { cn: '请把这个规定解释清楚。', pinyin: 'qǐng bǎ zhège guīdìng jiěshì qīngchu。', en: 'Please explain this rule clearly.' },
                { cn: '解释了半天他还是不明白。', pinyin: 'jiěshì le bàntiān tā háishì bù míngbai。', en: 'After explaining for a long time he still doesn\'t understand.' },
                { cn: '科学可以解释这个现象。', pinyin: 'kēxué kěyǐ jiěshì zhège xiànxiàng。', en: 'Science can explain this phenomenon.' }
            ]
        },

        {
            id: 'h3m_155', character: '决定', pinyin: 'juédìng', meaning: 'to decide', hsk: 3, category: 'verbs',
            examples: [
                { cn: '我决定去中国留学。', pinyin: 'wǒ juédìng qù zhōngguó liúxué。', en: 'I decided to study abroad in China.' },
                { cn: '这件事由你来决定。', pinyin: 'zhè jiàn shì yóu nǐ lái juédìng。', en: 'You decide on this matter.' },
                { cn: '这是一个重要的决定。', pinyin: 'zhè shì yī gè zhòngyào de juédìng。', en: 'This is an important decision.' },
                { cn: '决定了就不要后悔。', pinyin: 'juédìng le jiù bùyào hòuhuǐ。', en: 'Once you\'ve decided, don\'t regret it.' },
                { cn: '公司决定增加投资。', pinyin: 'gōngsī juédìng zēngjiā tóuzī。', en: 'The company decided to increase investment.' },
                { cn: '还没做出最后决定。', pinyin: 'hái méi zuò chū zuìhòu juédìng。', en: 'A final decision has not yet been made.' },
                { cn: '我无法决定选哪个。', pinyin: 'wǒ wúfǎ juédìng xuǎn nǎ gè。', en: 'I can\'t decide which one to choose.' },
                { cn: '决定了就马上行动。', pinyin: 'juédìng le jiù mǎshàng xíngdòng。', en: 'Act immediately once you decide.' }
            ]
        },

        {
            id: 'h3m_156', character: '考虑', pinyin: 'kǎolǜ', meaning: 'to consider', hsk: 3, category: 'verbs',
            examples: [
                { cn: '我需要时间考虑一下。', pinyin: 'wǒ xūyào shíjiān kǎolǜ yīxià。', en: 'I need some time to consider.' },
                { cn: '你应该考虑别人的感受。', pinyin: 'nǐ yīnggāi kǎolǜ biérén de gǎnshòu。', en: 'You should consider other people\'s feelings.' },
                { cn: '请考虑我的建议。', pinyin: 'qǐng kǎolǜ wǒ de jiànyì。', en: 'Please consider my suggestion.' },
                { cn: '考虑好了再回答。', pinyin: 'kǎolǜ hǎo le zài huídá。', en: 'Think it over before answering.' },
                { cn: '他在考虑要不要换工作。', pinyin: 'tā zài kǎolǜ yào bù yào huàn gōngzuò。', en: 'He is considering whether to change jobs.' },
                { cn: '买房子要考虑很多因素。', pinyin: 'mǎi fángzi yào kǎolǜ hěn duō yīnsù。', en: 'Buying a house requires considering many factors.' },
                { cn: '考虑问题要全面。', pinyin: 'kǎolǜ wèntí yào quánmiàn。', en: 'Consider problems comprehensively.' },
                { cn: '不用考虑了。', pinyin: 'bùyòng kǎolǜ le。', en: 'No need to consider anymore.' }
            ]
        },

        {
            id: 'h3m_157', character: '离开', pinyin: 'líkāi', meaning: 'to leave', hsk: 3, category: 'verbs',
            examples: [
                { cn: '他去年离开了那家公司。', pinyin: 'tā qùnián líkāi le nà jiā gōngsī。', en: 'He left that company last year.' },
                { cn: '火车马上就要离开了。', pinyin: 'huǒchē mǎshàng jiù yào líkāi le。', en: 'The train is about to leave.' },
                { cn: '请不要离开。', pinyin: 'qǐng bùyào líkāi。', en: 'Please don\'t leave.' },
                { cn: '他离开中国已经三年了。', pinyin: 'tā líkāi zhōngguó yǐjīng sān nián le。', en: 'He has been away from China for three years.' },
                { cn: '我永远不会离开你。', pinyin: 'wǒ yǒngyuǎn bù huì líkāi nǐ。', en: 'I will never leave you.' },
                { cn: '离开学校后他去了国外。', pinyin: 'líkāi xuéxiào hòu tā qù le guówài。', en: 'After leaving school he went abroad.' },
                { cn: '他一句话没说就离开了。', pinyin: 'tā yī jù huà méi shuō jiù líkāi le。', en: 'He left without saying a word.' },
                { cn: '离开家以后才知道家的温暖。', pinyin: 'líkāi jiā yǐhòu cái zhīdào jiā de wēnnuǎn。', en: 'Only after leaving home did I realize its warmth.' }
            ]
        },

        {
            id: 'h3m_158', character: '利用', pinyin: 'lìyòng', meaning: 'to utilize', hsk: 3, category: 'verbs',
            examples: [
                { cn: '我们应该充分利用时间。', pinyin: 'wǒmen yīnggāi chōngfèn lìyòng shíjiān。', en: 'We should make full use of our time.' },
                { cn: '他利用周末学习中文。', pinyin: 'tā lìyòng zhōumò xuéxí zhōngwén。', en: 'He uses weekends to study Chinese.' },
                { cn: '利用网络可以查到很多资料。', pinyin: 'lìyòng wǎngluò kěyǐ chá dào hěn duō zīliào。', en: 'Using the internet you can find many resources.' },
                { cn: '别利用人。', pinyin: 'bié lìyòng rén。', en: 'Don\'t use people.' },
                { cn: '这个资源要好好利用。', pinyin: 'zhège zīyuán yào hǎohao lìyòng。', en: 'This resource should be well utilized.' },
                { cn: '废品也可以再利用。', pinyin: 'fèipǐn yě kěyǐ zài lìyòng。', en: 'Waste can also be reused.' },
                { cn: '利用这个机会学习。', pinyin: 'lìyòng zhège jīhuì xuéxí。', en: 'Use this opportunity to learn.' },
                { cn: '学会利用工具。', pinyin: 'xuéhuì lìyòng gōngjù。', en: 'Learn to use tools.' }
            ]
        },

        {
            id: 'h3m_159', character: '联系', pinyin: 'liánxì', meaning: 'to contact', hsk: 3, category: 'verbs',
            examples: [
                { cn: '请及时和我联系。', pinyin: 'qǐng jíshí hé wǒ liánxì。', en: 'Please contact me in time.' },
                { cn: '我们保持联系吧。', pinyin: 'wǒmen bǎochí liánxì ba。', en: 'Let\'s keep in touch.' },
                { cn: '我怎么联系你？', pinyin: 'wǒ zěnme liánxì nǐ？', en: 'How can I contact you?' },
                { cn: '我们很久没联系了。', pinyin: 'wǒmen hěn jiǔ méi liánxì le。', en: 'We haven\'t been in touch for a long time.' },
                { cn: '可以通过电子邮件联系。', pinyin: 'kěyǐ tōngguò diànzǐ yóujiàn liánxì。', en: 'You can contact via email.' },
                { cn: '失去了联系。', pinyin: 'shīqù le liánxì。', en: 'Lost contact.' },
                { cn: '他正联系医院。', pinyin: 'tā zhèng liánxì yīyuàn。', en: 'He is contacting the hospital.' },
                { cn: '保持联系是最好的。', pinyin: 'bǎochí liánxì shì zuì hǎo de。', en: 'Staying in touch is best.' }
            ]
        },

        {
            id: 'h3m_160', character: '了解', pinyin: 'liǎojiě', meaning: 'to understand', hsk: 3, category: 'verbs',
            examples: [
                { cn: '你了解中国文化吗？', pinyin: 'nǐ liǎojiě zhōngguó wénhuà ma？', en: 'Do you understand Chinese culture?' },
                { cn: '我想多了解你的想法。', pinyin: 'wǒ xiǎng duō liǎojiě nǐ de xiǎngfǎ。', en: 'I want to understand your thoughts more.' },
                { cn: '我不太了解情况。', pinyin: 'wǒ bù tài liǎojiě qíngkuàng。', en: 'I don\'t really understand the situation.' },
                { cn: '通过看书可以了解历史。', pinyin: 'tōngguò kànshū kěyǐ liǎojiě lìshǐ。', en: 'You can understand history through reading.' },
                { cn: '了解自己最重要。', pinyin: 'liǎojiě zìjǐ zuì zhòngyào。', en: 'Understanding yourself is most important.' },
                { cn: '我对音乐很了解。', pinyin: 'wǒ duì yīnyuè hěn liǎojiě。', en: 'I know a lot about music.' },
                { cn: '慢慢了解吧。', pinyin: 'mànmàn liǎojiě ba。', en: 'Gradually get to know it.' },
                { cn: '深入了解这个领域。', pinyin: 'shēnrù liǎojiě zhège lǐngyù。', en: 'Gain an in-depth understanding of this field.' }
            ]
        },

        {
            id: 'h3m_161', character: '满足', pinyin: 'mǎnzú', meaning: 'to satisfy', hsk: 3, category: 'verbs',
            examples: [
                { cn: '这家餐厅的菜满足了我的口味。', pinyin: 'zhè jiā cāntīng de cài mǎnzú le wǒ de kǒuwèi。', en: 'This restaurant\'s food satisfied my taste.' },
                { cn: '我们要满足客户的需求。', pinyin: 'wǒmen yào mǎnzú kèhù de xūqiú。', en: 'We must satisfy the customers\' needs.' },
                { cn: '生活条件不断满足。', pinyin: 'shēnghuó tiáojiàn bùduàn mǎnzú。', en: 'Living conditions are constantly improving.' },
                { cn: '很满足现在的生活。', pinyin: 'hěn mǎnzú xiànzài de shēnghuó。', en: 'Very satisfied with current life.' },
                { cn: '不能满足于现状。', pinyin: 'bù néng mǎnzú yú xiànzhuàng。', en: 'Can\'t be satisfied with the status quo.' },
                { cn: '要满足什么条件？', pinyin: 'yào mǎnzú shénme tiáojiàn？', en: 'What conditions need to be met?' },
                { cn: '需求得到满足。', pinyin: 'xūqiú dédào mǎnzú。', en: 'Needs were satisfied.' },
                { cn: '满足感很重要。', pinyin: 'mǎnzú gǎn hěn zhòngyào。', en: 'A sense of satisfaction is important.' }
            ]
        },

        {
            id: 'h3m_162', character: '判断', pinyin: 'pànduàn', meaning: 'to judge', hsk: 3, category: 'verbs',
            examples: [
                { cn: '你应该根据事实来判断。', pinyin: 'nǐ yīnggāi gēnjù shìshí lái pànduàn。', en: 'You should judge based on facts.' },
                { cn: '这件事很难判断对错。', pinyin: 'zhè jiàn shì hěn nán pànduàn duìcuò。', en: 'It is hard to judge right from wrong in this matter.' },
                { cn: '我判断他会来。', pinyin: 'wǒ pànduàn tā huì lái。', en: 'I judge that he will come.' },
                { cn: '判断力很重要。', pinyin: 'pànduàn lì hěn zhòngyào。', en: 'Judgment is very important.' },
                { cn: '不要轻易下判断。', pinyin: 'bùyào qīngyì xià pànduàn。', en: 'Don\'t make judgments lightly.' },
                { cn: '判断错了。', pinyin: 'pànduàn cuò le。', en: 'Judged wrong.' },
                { cn: '正确的判断。', pinyin: 'zhèngquè de pànduàn。', en: 'Correct judgment.' },
                { cn: '看情况来判断。', pinyin: 'kàn qíngkuàng lái pànduàn。', en: 'Judge based on the situation.' }
            ]
        },

        {
            id: 'h3m_163', character: '商量', pinyin: 'shāngliang', meaning: 'to discuss', hsk: 3, category: 'verbs',
            examples: [
                { cn: '我们商量一下再做决定。', pinyin: 'wǒmen shāngliang yīxià zài zuò juédìng。', en: 'Let\'s discuss before making a decision.' },
                { cn: '这件事我需要和家人商量。', pinyin: 'zhè jiàn shì wǒ xūyào hé jiārén shāngliang。', en: 'I need to discuss this with my family.' },
                { cn: '先商量再行动。', pinyin: 'xiān shāngliang zài xíngdòng。', en: 'Discuss first, then act.' },
                { cn: '商量的结果是什么？', pinyin: 'shāngliang de jiéguǒ shì shénme？', en: 'What is the result of the discussion?' },
                { cn: '我们私下商量一下吧。', pinyin: 'wǒmen sīxià shāngliang yīxià ba。', en: 'Let\'s discuss privately.' },
                { cn: '有事好商量。', pinyin: 'yǒu shì hǎo shāngliang。', en: 'Everything can be discussed.' },
                { cn: '商量好了再说。', pinyin: 'shāngliang hǎo le zài shuō。', en: 'Wait until it\'s discussed before speaking.' },
                { cn: '一起商量解决方案。', pinyin: 'yīqǐ shāngliang jiějué fāngàn。', en: 'Discuss solutions together.' }
            ]
        },

        {
            id: 'h3m_164', character: '申请', pinyin: 'shēnqǐng', meaning: 'to apply', hsk: 3, category: 'verbs',
            examples: [
                { cn: '我申请了一份新工作。', pinyin: 'wǒ shēnqǐng le yī fèn xīn gōngzuò。', en: 'I applied for a new job.' },
                { cn: '你想申请哪所大学？', pinyin: 'nǐ xiǎng shēnqǐng nǎ suǒ dàxué？', en: 'Which university do you want to apply to?' },
                { cn: '申请材料准备好了吗？', pinyin: 'shēnqǐng cáiliào zhǔnbèi hǎo le ma？', en: 'Are the application materials ready?' },
                { cn: '他申请了留学。', pinyin: 'tā shēnqǐng le liúxué。', en: 'He applied to study abroad.' },
                { cn: '怎么申请？', pinyin: 'zěnme shēnqǐng？', en: 'How to apply?' },
                { cn: '申请通过了。', pinyin: 'shēnqǐng tōngguò le。', en: 'The application was approved.' },
                { cn: '他被拒绝了很多次申请。', pinyin: 'tā bèi jùjué le hěn duō cì shēnqǐng。', en: 'His application was rejected many times.' },
                { cn: '现在开始接受申请。', pinyin: 'xiànzài kāishǐ jiēshòu shēnqǐng。', en: 'Now accepting applications.' }
            ]
        },

        {
            id: 'h3m_165', character: '说明', pinyin: 'shuōmíng', meaning: 'to explain', hsk: 3, category: 'verbs',
            examples: [
                { cn: '请说明你的理由。', pinyin: 'qǐng shuōmíng nǐ de lǐyóu。', en: 'Please explain your reasons.' },
                { cn: '这说明我们的方法是正确的。', pinyin: 'zhè shuōmíng wǒmen de fāngfǎ shì zhèngquè de。', en: 'This shows that our method is correct.' },
                { cn: '说明书在哪里？', pinyin: 'shuōmíngshū zài nǎlǐ？', en: 'Where is the instruction manual?' },
                { cn: '需要我说明一下吗？', pinyin: 'xūyào wǒ shuōmíng yīxià ma？', en: 'Do you need me to explain?' },
                { cn: '事实说明了一切。', pinyin: 'shìshí shuōmíng le yīqiè。', en: 'The facts explain everything.' },
                { cn: '请用例子说明。', pinyin: 'qǐng yòng lìzi shuōmíng。', en: 'Please explain with examples.' },
                { cn: '说明情况很重要。', pinyin: 'shuōmíng qíngkuàng hěn zhòngyào。', en: 'Explaining the situation is important.' },
                { cn: '产品说明很清楚。', pinyin: 'chǎnpǐn shuōmíng hěn qīngchu。', en: 'The product description is very clear.' }
            ]
        },

        {
            id: 'h3m_166', character: '提高', pinyin: 'tígāo', meaning: 'to improve', hsk: 3, category: 'verbs',
            examples: [
                { cn: '我想提高我的中文水平。', pinyin: 'wǒ xiǎng tígāo wǒ de zhōngwén shuǐpíng。', en: 'I want to improve my Chinese level.' },
                { cn: '公司的效率大大提高了。', pinyin: 'gōngsī de xiàolǜ dàdà tígāo le。', en: 'The company\'s efficiency has greatly improved.' },
                { cn: '提高警惕。', pinyin: 'tígāo jǐngtì。', en: 'Heighten vigilance.' },
                { cn: '你怎么提高学习效率？', pinyin: 'nǐ zěnme tígāo xuéxí xiàolǜ？', en: 'How do you improve learning efficiency?' },
                { cn: '声音提高一点。', pinyin: 'shēngyīn tígāo yīdiǎn。', en: 'Raise your voice a little.' },
                { cn: '温度提高了不少。', pinyin: 'wēndù tígāo le bù shǎo。', en: 'The temperature has increased considerably.' },
                { cn: '持续提高产品质量。', pinyin: 'chíxù tígāo chǎnpǐn zhìliàng。', en: 'Continuously improve product quality.' },
                { cn: '分数比上次提高了。', pinyin: 'fēnshù bǐ shàng cì tígāo le。', en: 'The score improved compared to last time.' }
            ]
        },

        {
            id: 'h3m_167', character: '同意', pinyin: 'tóngyì', meaning: 'to agree', hsk: 3, category: 'verbs',
            examples: [
                { cn: '我完全同意你的看法。', pinyin: 'wǒ wánquán tóngyì nǐ de kànfǎ。', en: 'I completely agree with your view.' },
                { cn: '老板同意了我的建议。', pinyin: 'lǎobǎn tóngyì le wǒ de jiànyì。', en: 'The boss agreed to my suggestion.' },
                { cn: '你同意这个方案吗？', pinyin: 'nǐ tóngyì zhège fāngàn ma？', en: 'Do you agree with this plan?' },
                { cn: '大家都同意了。', pinyin: 'dàjiā dōu tóngyì le。', en: 'Everyone agreed.' },
                { cn: '我不得不同意。', pinyin: 'wǒ bùdé bù tóngyì。', en: 'I had no choice but to agree.' },
                { cn: '请表示同意或不同意。', pinyin: 'qǐng biǎoshì tóngyì huò bù tóngyì。', en: 'Please indicate agree or disagree.' },
                { cn: '如果不同意可以提意见。', pinyin: 'rúguǒ bù tóngyì kěyǐ tí yìjiàn。', en: 'If you disagree you can voice your opinion.' },
                { cn: '他终于点头表示同意。', pinyin: 'tā zhōngyú diǎntóu biǎoshì tóngyì。', en: 'He finally nodded in agreement.' }
            ]
        },

        {
            id: 'h3m_168', character: '推荐', pinyin: 'tuījiàn', meaning: 'to recommend', hsk: 3, category: 'verbs',
            examples: [
                { cn: '你能推荐一家好餐厅吗？', pinyin: 'nǐ néng tuījiàn yī jiā hǎo cāntīng ma？', en: 'Can you recommend a good restaurant?' },
                { cn: '老师推荐我读这本书。', pinyin: 'lǎoshī tuījiàn wǒ dú zhè běn shū。', en: 'The teacher recommended me to read this book.' },
                { cn: '推荐一个好地方。', pinyin: 'tuījiàn yī gè hǎo dìfang。', en: 'Recommend a good place.' },
                { cn: '这个电影值得推荐。', pinyin: 'zhège diànyǐng zhídé tuījiàn。', en: 'This movie is worth recommending.' },
                { cn: '朋友推荐我来这里的。', pinyin: 'péngyou tuījiàn wǒ lái zhèlǐ de。', en: 'A friend recommended me to come here.' },
                { cn: '你有什么好书推荐吗？', pinyin: 'nǐ yǒu shénme hǎo shū tuījiàn ma？', en: 'Do you have any good book recommendations?' },
                { cn: '强烈推荐这道菜。', pinyin: 'qiángliè tuījiàn zhè dào cài。', en: 'Strongly recommend this dish.' },
                { cn: '他们推荐我当组长。', pinyin: 'tāmen tuījiàn wǒ dāng zǔzhǎng。', en: 'They recommended me to be group leader.' }
            ]
        },

        {
            id: 'h3m_169', character: '完成', pinyin: 'wánchéng', meaning: 'to complete', hsk: 3, category: 'verbs',
            examples: [
                { cn: '我终于完成了这个项目。', pinyin: 'wǒ zhōngyú wánchéng le zhège xiàngmù。', en: 'I finally completed this project.' },
                { cn: '请在周五前完成报告。', pinyin: 'qǐng zài zhōuwǔ qián wánchéng bàogào。', en: 'Please complete the report by Friday.' },
                { cn: '作业完成了吗？', pinyin: 'zuòyè wánchéng le ma？', en: 'Is the homework done?' },
                { cn: '完成了！', pinyin: 'wánchéng le！', en: 'Done!' },
                { cn: '任务还没完成。', pinyin: 'rènwù hái méi wánchéng。', en: 'The task is not yet completed.' },
                { cn: '需要两天才能完成。', pinyin: 'xūyào liǎng tiān cái néng wánchéng。', en: 'It will take two days to complete.' },
                { cn: '按时完成任务。', pinyin: 'ànshí wánchéng rènwù。', en: 'Complete the task on time.' },
                { cn: '他努力完成了所有工作。', pinyin: 'tā nǔlì wánchéng le suǒyǒu gōngzuò。', en: 'He worked hard to complete all the work.' }
            ]
        },

        {
            id: 'h3m_170', character: '忘记', pinyin: 'wàngjì', meaning: 'to forget', hsk: 3, category: 'verbs',
            examples: [
                { cn: '我忘记带钥匙了。', pinyin: 'wǒ wàngjì dài yàoshi le。', en: 'I forgot to bring my keys.' },
                { cn: '别忘了明天有会议。', pinyin: 'bié wàngjì míngtiān yǒu huìyì。', en: 'Don\'t forget there is a meeting tomorrow.' },
                { cn: '我永远不会忘记你。', pinyin: 'wǒ yǒngyuǎn bù huì wàngjì nǐ。', en: 'I will never forget you.' },
                { cn: '对不起我忘记你的名字了。', pinyin: 'duìbùqǐ wǒ wàngjì nǐ de míngzi le。', en: 'Sorry I forgot your name.' },
                { cn: '我忘不了那次经历。', pinyin: 'wǒ wàng bù liǎo nà cì jīnglì。', en: 'I can\'t forget that experience.' },
                { cn: '差点忘记了。', pinyin: 'chàdiǎn wàngjì le。', en: 'Almost forgot.' },
                { cn: '忘记过去，向前看。', pinyin: 'wàngjì guòqù，xiàng qián kàn。', en: 'Forget the past, look forward.' },
                { cn: '他忘记了关灯。', pinyin: 'tā wàngjì le guān dēng。', en: 'He forgot to turn off the light.' }
            ]
        },

        {
            id: 'h3m_171', character: '习惯', pinyin: 'xíguàn', meaning: 'to be used to', hsk: 3, category: 'verbs',
            examples: [
                { cn: '我已经习惯了这里的生活。', pinyin: 'wǒ yǐjīng xíguàn le zhèlǐ de shēnghuó。', en: 'I have gotten used to life here.' },
                { cn: '早起是一个好习惯。', pinyin: 'zǎoqǐ shì yī gè hǎo xíguàn。', en: 'Getting up early is a good habit.' },
                { cn: '我不习惯吃早饭。', pinyin: 'wǒ bù xíguàn chī zǎofàn。', en: 'I\'m not used to eating breakfast.' },
                { cn: '养成好习惯需要时间。', pinyin: 'yǎngchéng hǎo xíguàn xūyào shíjiān。', en: 'Developing good habits takes time.' },
                { cn: '慢慢习惯就好了。', pinyin: 'mànmàn xíguàn jiù hǎo le。', en: 'You\'ll get used to it gradually.' },
                { cn: '这个习惯很难改。', pinyin: 'zhège xíguàn hěn nán gǎi。', en: 'This habit is hard to break.' },
                { cn: '在当地生活久了就习惯了。', pinyin: 'zài dāngdì shēnghuó jiǔ le jiù xíguàn le。', en: 'After living locally for a long time you get used to it.' },
                { cn: '好习惯受益终生。', pinyin: 'hǎo xíguàn shòuyì zhōngshēng。', en: 'Good habits benefit you for life.' }
            ]
        },

        {
            id: 'h3m_172', character: '相信', pinyin: 'xiāngxìn', meaning: 'to believe', hsk: 3, category: 'verbs',
            examples: [
                { cn: '我相信你能成功。', pinyin: 'wǒ xiāngxìn nǐ néng chénggōng。', en: 'I believe you can succeed.' },
                { cn: '你相信这个故事吗？', pinyin: 'nǐ xiāngxìn zhège gùshi ma？', en: 'Do you believe this story?' },
                { cn: '请相信我。', pinyin: 'qǐng xiāngxìn wǒ。', en: 'Please believe me.' },
                { cn: '我不太相信他的话。', pinyin: 'wǒ bù tài xiāngxìn tā de huà。', en: 'I don\'t really believe his words.' },
                { cn: '相信自己的判断。', pinyin: 'xiāngxìn zìjǐ de pànduàn。', en: 'Believe in your own judgment.' },
                { cn: '这是一个让人不敢相信的消息。', pinyin: 'zhè shì yī gè ràng rén bù gǎn xiāngxìn de xiāoxi。', en: 'This is a piece of news one can hardly believe.' },
                { cn: '选择相信别人。', pinyin: 'xuǎnzé xiāngxìn biérén。', en: 'Choose to believe others.' },
                { cn: '相信好事会发生。', pinyin: 'xiāngxìn hǎo shì huì fāshēng。', en: 'Believe good things will happen.' }
            ]
        },

        {
            id: 'h3m_173', character: '选择', pinyin: 'xuǎnzé', meaning: 'to choose', hsk: 3, category: 'verbs',
            examples: [
                { cn: '你可以选择自己喜欢的专业。', pinyin: 'nǐ kěyǐ xuǎnzé zìjǐ xǐhuān de zhuānyè。', en: 'You can choose a major you like.' },
                { cn: '这是一个重要的选择。', pinyin: 'zhè shì yī gè zhòngyào de xuǎnzé。', en: 'This is an important choice.' },
                { cn: '没有别的选择。', pinyin: 'méiyǒu biéde xuǎnzé。', en: 'There is no other choice.' },
                { cn: '你选择哪一个？', pinyin: 'nǐ xuǎnzé nǎ yī gè？', en: 'Which one do you choose?' },
                { cn: '正确的选择。', pinyin: 'zhèngquè de xuǎnzé。', en: 'The right choice.' },
                { cn: '选择困难。', pinyin: 'xuǎnzé kùnnán。', en: 'Difficulty choosing.' },
                { cn: '我选择相信你。', pinyin: 'wǒ xuǎnzé xiāngxìn nǐ。', en: 'I choose to believe you.' },
                { cn: '人生就是不断的选择。', pinyin: 'rénshēng jiùshì bùduàn de xuǎnzé。', en: 'Life is a continuous series of choices.' }
            ]
        },

        {
            id: 'h3m_174', character: '以为', pinyin: 'yǐwéi', meaning: 'to think (mistakenly)', hsk: 3, category: 'verbs',
            examples: [
                { cn: '我以为今天是周日。', pinyin: 'wǒ yǐwéi jīntiān shì zhōurì。', en: 'I thought today was Sunday.' },
                { cn: '别以为我不知道。', pinyin: 'bié yǐwéi wǒ bù zhīdào。', en: 'Don\'t think I don\'t know.' },
                { cn: '你以为是那么容易吗？', pinyin: 'nǐ yǐwéi shì nàme róngyì ma？', en: 'Did you think it was that easy?' },
                { cn: '他以为自己是正确的。', pinyin: 'tā yǐwéi zìjǐ shì zhèngquè de。', en: 'He thought he was right.' },
                { cn: '大家都以为他会来。', pinyin: 'dàjiā dōu yǐwéi tā huì lái。', en: 'Everyone thought he would come.' },
                { cn: '别以为了不起。', pinyin: 'bié yǐwéi liǎobùqǐ。', en: 'Don\'t think you\'re so great.' },
                { cn: '我还以为你不来了呢。', pinyin: 'wǒ hái yǐwéi nǐ bù lái le ne。', en: 'I thought you weren\'t coming.' },
                { cn: '以为自己很聪明，其实不是。', pinyin: 'yǐwéi zìjǐ hěn cōngmíng，qíshí bù shì。', en: 'Thinks he\'s smart, but actually isn\'t.' }
            ]
        },

        {
            id: 'h3m_175', character: '影响', pinyin: 'yǐngxiǎng', meaning: 'to influence', hsk: 3, category: 'verbs',
            examples: [
                { cn: '天气影响了我们的计划。', pinyin: 'tiānqì yǐngxiǎng le wǒmen de jìhuà。', en: 'The weather affected our plans.' },
                { cn: '父母对孩子有很大的影响。', pinyin: 'fùmǔ duì háizi yǒu hěn dà de yǐngxiǎng。', en: 'Parents have a great influence on their children.' },
                { cn: '手机对生活的影响很大。', pinyin: 'shǒujī duì shēnghuó de yǐngxiǎng hěn dà。', en: 'Mobile phones have a big impact on life.' },
                { cn: '不要受别人的影响。', pinyin: 'bùyào shòu biérén de yǐngxiǎng。', en: 'Don\'t be influenced by others.' },
                { cn: '经济危机影响了全球。', pinyin: 'jīngjì wēijī yǐngxiǎng le quánqiú。', en: 'The economic crisis affected the whole world.' },
                { cn: '这个决定会影响未来。', pinyin: 'zhège juédìng huì yǐngxiǎng wèilái。', en: 'This decision will affect the future.' },
                { cn: '受影响的范围很广。', pinyin: 'shòu yǐngxiǎng de fànwéi hěn guǎng。', en: 'The scope of influence is very wide.' },
                { cn: '他的演讲影响了我的一生。', pinyin: 'tā de yǎnjiǎng yǐngxiǎng le wǒ de yīshēng。', en: 'His speech influenced my whole life.' }
            ]
        },

        {
            id: 'h3m_176', character: '预报', pinyin: 'yùbào', meaning: 'to forecast', hsk: 3, category: 'verbs',
            examples: [
                { cn: '天气预报说明天会下雨。', pinyin: 'tiānqì yùbào shuō míngtiān huì xià yǔ。', en: 'The weather forecast says it will rain tomorrow.' },
                { cn: '他们预报了这次地震。', pinyin: 'tāmen yùbào le zhè cì dìzhèn。', en: 'They forecast this earthquake.' },
                { cn: '预报准确吗？', pinyin: 'yùbào zhǔnquè ma？', en: 'Is the forecast accurate?' },
                { cn: '根据预报，今年会很热。', pinyin: 'gēnjù yùbào，jīnnián huì hěn rè。', en: 'According to the forecast, this year will be very hot.' },
                { cn: '气象预报很重要。', pinyin: 'qìxiàng yùbào hěn zhòngyào。', en: 'Weather forecasting is important.' },
                { cn: '提前预报。', pinyin: 'tíqián yùbào。', en: 'Advance forecast.' },
                { cn: '虽然预报了有雨，可是没下。', pinyin: 'suīrán yùbào le yǒu yǔ，kěshì méi xià。', en: 'Although rain was forecast, it didn\'t rain.' },
                { cn: '你相信天气预报吗？', pinyin: 'nǐ xiāngxìn tiānqì yùbào ma？', en: 'Do you believe the weather forecast?' }
            ]
        },

        {
            id: 'h3m_177', character: '增加', pinyin: 'zēngjiā', meaning: 'to increase', hsk: 3, category: 'verbs',
            examples: [
                { cn: '公司计划增加员工数量。', pinyin: 'gōngsī jìhuà zēngjiā yuángōng shùliàng。', en: 'The company plans to increase the number of employees.' },
                { cn: '人口在不断增加。', pinyin: 'rénkǒu zài bùduàn zēngjiā。', en: 'The population is continuously increasing.' },
                { cn: '我想增加收入。', pinyin: 'wǒ xiǎng zēngjiā shōurù。', en: 'I want to increase my income.' },
                { cn: '增加了新的课程。', pinyin: 'zēngjiā le xīn de kèchéng。', en: 'Added new courses.' },
                { cn: '速度增加了不少。', pinyin: 'sùdù zēngjiā le bù shǎo。', en: 'The speed has increased considerably.' },
                { cn: '增加了很多麻烦。', pinyin: 'zēngjiā le hěn duō máfan。', en: 'It added a lot of trouble.' },
                { cn: '逐年增加。', pinyin: 'zhú nián zēngjiā。', en: 'Increase year by year.' },
                { cn: '学习和娱乐的时间都需要增加。', pinyin: 'xuéxí hé yúlè de shíjiān dōu xūyào zēngjiā。', en: 'Both study and leisure time need to increase.' }
            ]
        },

        {
            id: 'h3m_178', character: '整理', pinyin: 'zhěnglǐ', meaning: 'to organize', hsk: 3, category: 'verbs',
            examples: [
                { cn: '我周末整理了房间。', pinyin: 'wǒ zhōumò zhěnglǐ le fángjiān。', en: 'I organized my room over the weekend.' },
                { cn: '请把文件整理好。', pinyin: 'qǐng bǎ wénjiàn zhěnglǐ hǎo。', en: 'Please organize the documents properly.' },
                { cn: '整理思路很重要。', pinyin: 'zhěnglǐ sīlù hěn zhòngyào。', en: 'Organizing your thoughts is important.' },
                { cn: '她花了一个下午整理衣柜。', pinyin: 'tā huā le yī gè xiàwǔ zhěnglǐ yīguì。', en: 'She spent an afternoon organizing the wardrobe.' },
                { cn: '把数据整理一下。', pinyin: 'bǎ shùjù zhěnglǐ yīxià。', en: 'Organize the data.' },
                { cn: '整理好了马上发给你。', pinyin: 'zhěnglǐ hǎo le mǎshàng fā gěi nǐ。', en: 'I\'ll send it to you right after organizing.' },
                { cn: '整理笔记。', pinyin: 'zhěnglǐ bǐjì。', en: 'Organize notes.' },
                { cn: '生活需要整理。', pinyin: 'shēnghuó xūyào zhěnglǐ。', en: 'Life needs organizing.' }
            ]
        },

        {
            id: 'h3m_179', character: '支持', pinyin: 'zhīchí', meaning: 'to support', hsk: 3, category: 'verbs',
            examples: [
                { cn: '谢谢你的支持！', pinyin: 'xièxiè nǐ de zhīchí！', en: 'Thank you for your support!' },
                { cn: '我支持你的决定。', pinyin: 'wǒ zhīchí nǐ de juédìng。', en: 'I support your decision.' },
                { cn: '家人一直在支持我。', pinyin: 'jiārén yīzhí zài zhīchí wǒ。', en: 'My family has always been supporting me.' },
                { cn: '这个手机不支持这个功能。', pinyin: 'zhège shǒujī bù zhīchí zhège gōngnéng。', en: 'This phone doesn\'t support this feature.' },
                { cn: '政府的支持很重要。', pinyin: 'zhèngfǔ de zhīchí hěn zhòngyào。', en: 'Government support is important.' },
                { cn: '精神上的支持也很重要。', pinyin: 'jīngshén shàng de zhīchí yě hěn zhòngyào。', en: 'Emotional support is also important.' },
                { cn: '我们需要互相支持。', pinyin: 'wǒmen xūyào hùxiāng zhīchí。', en: 'We need to support each other.' },
                { cn: '有了大家的支持，事情就容易了。', pinyin: 'yǒu le dàjiā de zhīchí，shìqing jiù róngyì le。', en: 'With everyone\'s support, things become easier.' }
            ]
        },

        {
            id: 'h3m_180', character: '注意', pinyin: 'zhùyì', meaning: 'to pay attention', hsk: 3, category: 'verbs',
            examples: [
                { cn: '注意安全！', pinyin: 'zhùyì ānquán！', en: 'Pay attention to safety!' },
                { cn: '我没注意到他来了。', pinyin: 'wǒ méi zhùyì dào tā lái le。', en: 'I did not notice him coming.' },
                { cn: '请你注意。', pinyin: 'qǐng nǐ zhùyì。', en: 'Please pay attention.' },
                { cn: '多注意身体。', pinyin: 'duō zhùyì shēntǐ。', en: 'Pay more attention to your health.' },
                { cn: '他注意到了一些问题。', pinyin: 'tā zhùyì dào le yīxiē wèntí。', en: 'He noticed some problems.' },
                { cn: '值得注意的现象。', pinyin: 'zhídé zhùyì de xiànxiàng。', en: 'A phenomenon worth noting.' },
                { cn: '我注意观察了很长时间。', pinyin: 'wǒ zhùyì guānchá le hěn cháng shíjiān。', en: 'I paid attention and observed for a long time.' },
                { cn: '引起大家的注意。', pinyin: 'yǐnqǐ dàjiā de zhùyì。', en: 'Attract everyone\'s attention.' }
            ]
        },

        {
            id: 'h3m_181', character: '准备', pinyin: 'zhǔnbèi', meaning: 'to prepare', hsk: 3, category: 'verbs',
            examples: [
                { cn: '我已经准备好了。', pinyin: 'wǒ yǐjīng zhǔnbèi hǎo le。', en: 'I am already prepared.' },
                { cn: '妈妈在准备晚饭。', pinyin: 'māma zài zhǔnbèi wǎnfàn。', en: 'Mom is preparing dinner.' },
                { cn: '你准备好了吗？', pinyin: 'nǐ zhǔnbèi hǎo le ma？', en: 'Are you ready?' },
                { cn: '准备行李要花点时间。', pinyin: 'zhǔnbèi xíngli yào huā diǎn shíjiān。', en: 'Preparing luggage takes some time.' },
                { cn: '做好准备。', pinyin: 'zuò hǎo zhǔnbèi。', en: 'Get prepared.' },
                { cn: '考试前要充分准备。', pinyin: 'kǎoshì qián yào chōngfèn zhǔnbèi。', en: 'Prepare fully before the exam.' },
                { cn: '我正准备出门。', pinyin: 'wǒ zhèng zhǔnbèi chūmén。', en: 'I am about to go out.' },
                { cn: '一切都准备好了。', pinyin: 'yīqiè dōu zhǔnbèi hǎo le。', en: 'Everything is ready.' }
            ]
        },

        {
            id: 'h3m_182', character: '总结', pinyin: 'zǒngjié', meaning: 'to summarize', hsk: 3, category: 'verbs',
            examples: [
                { cn: '请总结一下今天的内容。', pinyin: 'qǐng zǒngjié yīxià jīntiān de nèiróng。', en: 'Please summarize today\'s content.' },
                { cn: '最后，我来做一个总结。', pinyin: 'zuìhòu，wǒ lái zuò yī gè zǒngjié。', en: 'Finally, let me make a summary.' },
                { cn: '学习要善于总结。', pinyin: 'xuéxí yào shànyú zǒngjié。', en: 'Learning requires being good at summarizing.' },
                { cn: '总结一下经验。', pinyin: 'zǒngjié yīxià jīngyàn。', en: 'Summarize the experience.' },
                { cn: '这是今年的工作总结。', pinyin: 'zhè shì jīnnián de gōngzuò zǒngjié。', en: 'This is the work summary for this year.' },
                { cn: '会议总结很重要。', pinyin: 'huìyì zǒngjié hěn zhòngyào。', en: 'Meeting summaries are important.' },
                { cn: '简单总结一下。', pinyin: 'jiǎndān zǒngjié yīxià。', en: 'Briefly summarize.' },
                { cn: '学会了总结，才能进步。', pinyin: 'xuéhuì le zǒngjié，cái néng jìnbù。', en: 'Only by learning to summarize can you progress.' }
            ]
        },

        {
            id: 'h3m_183', character: '尊重', pinyin: 'zūnzhòng', meaning: 'to respect', hsk: 3, category: 'verbs',
            examples: [
                { cn: '我们应该尊重不同的文化。', pinyin: 'wǒmen yīnggāi zūnzhòng bùtóng de wénhuà。', en: 'We should respect different cultures.' },
                { cn: '尊重别人就是尊重自己。', pinyin: 'zūnzhòng biérén jiùshì zūnzhòng zìjǐ。', en: 'Respecting others is respecting yourself.' },
                { cn: '请尊重我的意见。', pinyin: 'qǐng zūnzhòng wǒ de yìjiàn。', en: 'Please respect my opinion.' },
                { cn: '互相尊重。', pinyin: 'hùxiāng zūnzhòng。', en: 'Mutual respect.' },
                { cn: '年轻人要尊重长辈。', pinyin: 'niánqīng rén yào zūnzhòng zhǎngbèi。', en: 'Young people should respect their elders.' },
                { cn: '我得到了尊重。', pinyin: 'wǒ dédào le zūnzhòng。', en: 'I gained respect.' },
                { cn: '尊重他人的时间。', pinyin: 'zūnzhòng tārén de shíjiān。', en: 'Respect others\' time.' },
                { cn: '只有尊重别人，别人才会尊重你。', pinyin: 'zhǐyǒu zūnzhòng biérén，biérén cái huì zūnzhòng nǐ。', en: 'Only by respecting others will others respect you.' }
            ]
        },

        {
            id: 'h3m_184', character: '遵守', pinyin: 'zūnshǒu', meaning: 'to obey/follow', hsk: 3, category: 'verbs',
            examples: [
                { cn: '请遵守交通规则。', pinyin: 'qǐng zūnshǒu jiāotōng guīzé。', en: 'Please obey the traffic rules.' },
                { cn: '我们必须遵守规定。', pinyin: 'wǒmen bìxū zūnshǒu guīdìng。', en: 'We must follow the regulations.' },
                { cn: '遵守时间很重要。', pinyin: 'zūnshǒu shíjiān hěn zhòngyào。', en: 'Punctuality is very important.' },
                { cn: '大家都应该遵守法律。', pinyin: 'dàjiā dōu yīnggāi zūnshǒu fǎlǜ。', en: 'Everyone should obey the law.' },
                { cn: '他遵守了自己的承诺。', pinyin: 'tā zūnshǒu le zìjǐ de chéngnuò。', en: 'He kept his promise.' },
                { cn: '违反规则不如遵守规则。', pinyin: 'wéifǎn guīzé bùrú zūnshǒu guīzé。', en: 'It\'s better to follow rules than break them.' },
                { cn: '学生要遵守学校纪律。', pinyin: 'xuésheng yào zūnshǒu xuéxiào jìlǜ。', en: 'Students should follow school discipline.' },
                { cn: '在社会上要遵守社会规范。', pinyin: 'zài shèhuì shàng yào zūnshǒu shèhuì guīfàn。', en: 'In society, one should follow social norms.' }
            ]
        },

        {
            id: 'h3m_185', character: '做梦', pinyin: 'zuòmèng', meaning: 'to dream', hsk: 3, category: 'verbs',
            examples: [
                { cn: '我昨天做了一个奇怪的梦。', pinyin: 'wǒ zuótiān zuò le yī gè qíguài de mèng。', en: 'I had a strange dream yesterday.' },
                { cn: '别做梦了，快起床！', pinyin: 'bié zuòmèng le，kuài qǐchuáng！', en: 'Stop dreaming, get up quickly!' },
                { cn: '晚上做噩梦了。', pinyin: 'wǎnshang zuò èmèng le。', en: 'Had a nightmare last night.' },
                { cn: '他做了一个美梦。', pinyin: 'tā zuò le yī gè měi mèng。', en: 'He had a beautiful dream.' },
                { cn: '做梦都想出国。', pinyin: 'zuòmèng dōu xiǎng chūguó。', en: 'Dream of going abroad even in sleep.' },
                { cn: '日有所思，夜有所梦。', pinyin: 'rì yǒu suǒ sī，yè yǒu suǒ mèng。', en: 'What you think of during the day, you dream of at night.' },
                { cn: '梦到什么了？', pinyin: 'mèng dào shénme le？', en: 'What did you dream about?' },
                { cn: '别做梦了，做现实一点。', pinyin: 'bié zuòmèng le，zuò xiànshí yīdiǎn。', en: 'Stop dreaming, be more realistic.' }
            ]
        },

        {
            id: 'h3m_186', character: '道歉', pinyin: 'dàoqiàn', meaning: 'to apologize', hsk: 3, category: 'verbs',
            examples: [
                { cn: '你应该向他道歉。', pinyin: 'nǐ yīnggāi xiàng tā dàoqiàn。', en: 'You should apologize to him.' },
                { cn: '我为我刚才说的话道歉。', pinyin: 'wǒ wèi wǒ gāngcái shuō de huà dàoqiàn。', en: 'I apologize for what I just said.' },
                { cn: '不用道歉了。', pinyin: 'bùyòng dàoqiàn le。', en: 'No need to apologize.' },
                { cn: '他向我道歉了。', pinyin: 'tā xiàng wǒ dàoqiàn le。', en: 'He apologized to me.' },
                { cn: '道歉不丢脸。', pinyin: 'dàoqiàn bù diūliǎn。', en: 'Apologizing is not shameful.' },
                { cn: '请接受我的道歉。', pinyin: 'qǐng jiēshòu wǒ de dàoqiàn。', en: 'Please accept my apology.' },
                { cn: '迟到了应该道歉。', pinyin: 'chídào le yīnggāi dàoqiàn。', en: 'You should apologize when you\'re late.' },
                { cn: '他说到做到，真的来道歉了。', pinyin: 'tā shuō dào zuò dào，zhēnde lái dàoqiàn le。', en: 'He kept his word and really came to apologize.' }
            ]
        },

        {
            id: 'h3m_187', character: '负责', pinyin: 'fùzé', meaning: 'to be responsible', hsk: 3, category: 'verbs',
            examples: [
                { cn: '谁负责这个项目？', pinyin: 'shéi fùzé zhège xiàngmù？', en: 'Who is responsible for this project?' },
                { cn: '他对工作非常负责。', pinyin: 'tā duì gōngzuò fēicháng fùzé。', en: 'He is very responsible about his work.' },
                { cn: '你要为自己的行为负责。', pinyin: 'nǐ yào wèi zìjǐ de xíngwéi fùzé。', en: 'You must take responsibility for your actions.' },
                { cn: '负责人是谁？', pinyin: 'fùzé rén shì shéi？', en: 'Who is the person in charge?' },
                { cn: '我不负责这件事。', pinyin: 'wǒ bù fùzé zhè jiàn shì。', en: 'I am not responsible for this matter.' },
                { cn: '他需要负责全部的费用。', pinyin: 'tā xūyào fùzé quánbù de fèiyòng。', en: 'He needs to be responsible for all the costs.' },
                { cn: '做事要有负责的态度。', pinyin: 'zuòshì yào yǒu fùzé de tàidù。', en: 'Have a responsible attitude when doing things.' },
                { cn: '安全问题由他负责。', pinyin: 'ānquán wèntí yóu tā fùzé。', en: 'Safety issues are his responsibility.' }
            ]
        },

        {
            id: 'h3m_188', character: '介绍', pinyin: 'jièshào', meaning: 'to introduce', hsk: 3, category: 'verbs',
            examples: [
                { cn: '让我介绍一下自己。', pinyin: 'ràng wǒ jièshào yīxià zìjǐ。', en: 'Let me introduce myself.' },
                { cn: '朋友介绍我们认识的。', pinyin: 'péngyou jièshào wǒmen rènshi de。', en: 'A friend introduced us.' },
                { cn: '你能介绍一个好老师吗？', pinyin: 'nǐ néng jièshào yī gè hǎo lǎoshī ma？', en: 'Can you recommend a good teacher?' },
                { cn: '请详细介绍你的经历。', pinyin: 'qǐng xiángxì jièshào nǐ de jīnglì。', en: 'Please introduce your experience in detail.' },
                { cn: '他给我介绍了中国文化。', pinyin: 'tā gěi wǒ jièshào le zhōngguó wénhuà。', en: 'He introduced me to Chinese culture.' },
                { cn: '先介绍一下背景。', pinyin: 'xiān jièshào yīxià bèijǐng。', en: 'First, introduce the background.' },
                { cn: '介绍人很重要。', pinyin: 'jièshào rén hěn zhòngyào。', en: 'The person who introduces is important.' },
                { cn: '不需要介绍，我们都认识。', pinyin: 'bù xūyào jièshào，wǒmen dōu rènshi。', en: 'No need for introductions, we all know each other.' }
            ]
        },

        {
            id: 'h3m_189', character: '提供', pinyin: 'tígōng', meaning: 'to provide', hsk: 3, category: 'verbs',
            examples: [
                { cn: '酒店提供免费早餐。', pinyin: 'jiǔdiàn tígōng miǎnfèi zǎocān。', en: 'The hotel provides free breakfast.' },
                { cn: '请提供更多信息。', pinyin: 'qǐng tígōng gèng duō xìnxī。', en: 'Please provide more information.' },
                { cn: '公司提供良好的工作环境。', pinyin: 'gōngsī tígōng liánghǎo de gōngzuò huánjìng。', en: 'The company provides a good working environment.' },
                { cn: '感谢你提供的帮助。', pinyin: 'gǎnxiè nǐ tígōng de bāngzhù。', en: 'Thank you for the help you provided.' },
                { cn: '学校提供住宿。', pinyin: 'xuéxiào tígōng zhùsù。', en: 'The school provides accommodation.' },
                { cn: '能提供服务吗？', pinyin: 'néng tígōng fúwù ma？', en: 'Can you provide service?' },
                { cn: '提供解决方案。', pinyin: 'tígōng jiějué fāngàn。', en: 'Provide solutions.' },
                { cn: '这项服务是免费提供的。', pinyin: 'zhè xiàng fúwù shì miǎnfèi tígōng de。', en: 'This service is provided free of charge.' }
            ]
        },

        {
            id: 'h3m_190', character: '讨论', pinyin: 'tǎolùn', meaning: 'to discuss', hsk: 3, category: 'verbs',
            examples: [
                { cn: '我们讨论了很久这个问题。', pinyin: 'wǒmen tǎolùn le hěn jiǔ zhège wèntí。', en: 'We discussed this problem for a long time.' },
                { cn: '会上大家热烈讨论。', pinyin: 'huì shàng dàjiā rèliè tǎolùn。', en: 'Everyone discussed enthusiastically at the meeting.' },
                { cn: '先讨论一下再决定。', pinyin: 'xiān tǎolùn yīxià zài juédìng。', en: 'Discuss first, then decide.' },
                { cn: '讨论并没有结果。', pinyin: 'tǎolùn bìng méiyǒu jiéguǒ。', en: 'The discussion had no result.' },
                { cn: '这件事需要大家讨论。', pinyin: 'zhè jiàn shì xūyào dàjiā tǎolùn。', en: 'This matter needs everyone\'s discussion.' },
                { cn: '小组讨论很有帮助。', pinyin: 'xiǎozǔ tǎolùn hěn yǒu bāngzhù。', en: 'Group discussion is very helpful.' },
                { cn: '我们讨论了一下午。', pinyin: 'wǒmen tǎolùn le yī xiàwǔ。', en: 'We discussed all afternoon.' },
                { cn: '讨论能让问题更清楚。', pinyin: 'tǎolùn néng ràng wèntí gèng qīngchu。', en: 'Discussion can make problems clearer.' }
            ]
        },

        {
            id: 'h3m_191', character: '比较', pinyin: 'bǐjiào', meaning: 'to compare', hsk: 3, category: 'verbs',
            examples: [
                { cn: '请比较这两个方案。', pinyin: 'qǐng bǐjiào zhè liǎng gè fāngàn。', en: 'Please compare these two plans.' },
                { cn: '比较起来，这个更好。', pinyin: 'bǐjiào qǐlái，zhège gèng hǎo。', en: 'Comparatively speaking, this one is better.' },
                { cn: '比较一下价格。', pinyin: 'bǐjiào yīxià jiàgé。', en: 'Compare the prices.' },
                { cn: '他比较高。', pinyin: 'tā bǐjiào gāo。', en: 'He is relatively tall.' },
                { cn: '比较难。', pinyin: 'bǐjiào nán。', en: 'Relatively difficult.' },
                { cn: '比较之后再做决定。', pinyin: 'bǐjiào zhīhòu zài zuò juédìng。', en: 'Make a decision after comparing.' },
                { cn: '没有比较就没有好坏。', pinyin: 'méiyǒu bǐjiào jiù méiyǒu hǎo huài。', en: 'Without comparison there is no good or bad.' },
                { cn: '我们需要更多数据来比较。', pinyin: 'wǒmen xūyào gèng duō shùjù lái bǐjiào。', en: 'We need more data to compare.' }
            ]
        },

        {
            id: 'h3m_192', character: '发展', pinyin: 'fāzhǎn', meaning: 'to develop', hsk: 3, category: 'verbs',
            examples: [
                { cn: '中国经济快速发展。', pinyin: 'zhōngguó jīngjì kuàisù fāzhǎn。', en: 'China\'s economy is developing rapidly.' },
                { cn: '公司计划向国外发展。', pinyin: 'gōngsī jìhuà xiàng guówài fāzhǎn。', en: 'The company plans to expand abroad.' },
                { cn: '科技发展改变生活。', pinyin: 'kējì fāzhǎn gǎibiàn shēnghuó。', en: 'Technological development changes life.' },
                { cn: '发展得很快。', pinyin: 'fāzhǎn de hěn kuài。', en: 'Developing very fast.' },
                { cn: '个人发展很重要。', pinyin: 'gèrén fāzhǎn hěn zhòngyào。', en: 'Personal development is very important.' },
                { cn: '可持续发展。', pinyin: 'kě chíxù fāzhǎn。', en: 'Sustainable development.' },
                { cn: '城市发展太快了。', pinyin: 'chéngshì fāzhǎn tài kuài le。', en: 'Urban development is too fast.' },
                { cn: '我们应该关注今后的发展。', pinyin: 'wǒmen yīnggāi guānzhù jīnhòu de fāzhǎn。', en: 'We should pay attention to future developments.' }
            ]
        },

        {
            id: 'h3m_193', character: '管理', pinyin: 'guǎnlǐ', meaning: 'to manage', hsk: 3, category: 'verbs',
            examples: [
                { cn: '他管理一家大公司。', pinyin: 'tā guǎnlǐ yī jiā dà gōngsī。', en: 'He manages a large company.' },
                { cn: '时间管理很重要。', pinyin: 'shíjiān guǎnlǐ hěn zhòngyào。', en: 'Time management is very important.' },
                { cn: '你会管理吗？', pinyin: 'nǐ huì guǎnlǐ ma？', en: 'Can you manage?' },
                { cn: '学校管理得很好。', pinyin: 'xuéxiào guǎnlǐ de hěn hǎo。', en: 'The school is managed well.' },
                { cn: '加强管理。', pinyin: 'jiāqiáng guǎnlǐ。', en: 'Strengthen management.' },
                { cn: '管理工作不容易。', pinyin: 'guǎnlǐ gōngzuò bù róngyì。', en: 'Management work is not easy.' },
                { cn: '他学习现代管理方法。', pinyin: 'tā xuéxí xiàndài guǎnlǐ fāngfǎ。', en: 'He studies modern management methods.' },
                { cn: '有效的管理可以节省很多资源。', pinyin: 'yǒuxiào de guǎnlǐ kěyǐ jiéshěng hěn duō zīyuán。', en: 'Effective management can save many resources.' }
            ]
        },

        {
            id: 'h3m_194', character: '获得', pinyin: 'huòdé', meaning: 'to obtain', hsk: 3, category: 'verbs',
            examples: [
                { cn: '他获得了第一名。', pinyin: 'tā huòdé le dì yī míng。', en: 'He obtained first place.' },
                { cn: '我从这本书获得了知识。', pinyin: 'wǒ cóng zhè běn shū huòdé le zhīshi。', en: 'I gained knowledge from this book.' },
                { cn: '获得经验很重要。', pinyin: 'huòdé jīngyàn hěn zhòngyào。', en: 'Gaining experience is important.' },
                { cn: '他获得了奖学金。', pinyin: 'tā huòdé le jiǎngxuéjīn。', en: 'He obtained a scholarship.' },
                { cn: '怎么才能获得成功？', pinyin: 'zěnme cái néng huòdé chénggōng？', en: 'How can one achieve success?' },
                { cn: '获得大家的认可。', pinyin: 'huòdé dàjiā de rènkě。', en: 'Gain everyone\'s recognition.' },
                { cn: '努力就能获得回报。', pinyin: 'nǔlì jiù néng huòdé huíbào。', en: 'Hard work brings rewards.' },
                { cn: '希望通过努力获得更好的生活。', pinyin: 'xīwàng tōngguò nǔlì huòdé gèng hǎo de shēnghuó。', en: 'Hope to achieve a better life through hard work.' }
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

window.HSK3Massive = HSK3Massive;
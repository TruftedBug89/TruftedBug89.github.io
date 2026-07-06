// ============================================
// CHINESE MASTER - Grammar Plus Lessons Data
// 15 Advanced grammar patterns (HSK 4-5)
// Auto-merges into GrammarData
// ============================================

var GrammarPlus = {
    lessons: [
        // 1 — 把字句 (HSK 4, BaBei)
        {
            id: 'gp001',
            title: '把字句 (bǎ zì jù)',
            titleMeaning: 'The Ba Construction',
            level: 'HSK 4',
            category: 'BaBei',
            commonMistake: 'Don\'t use 把 with verbs that don\'t affect the object (like 喜欢, 知道, 看见). The 把 construction requires a verb that changes or disposes of the object.',
            pattern: 'Subject + 把 + Object + Verb + Complement/Result',
            explanation: '把字句用于强调对宾语的处理或影响。宾语被提前，放在"把"后面，动词必须有补语或其他成分表示结果。',
            examples: [
                {
                    chinese: '我把水喝完了。',
                    pinyin: 'wǒ bǎ shuǐ hē wán le.',
                    meaning: 'I finished drinking the water.'
                },
                {
                    chinese: '请把门打开。',
                    pinyin: 'qǐng bǎ mén dǎkāi.',
                    meaning: 'Please open the door.'
                },
                {
                    chinese: '他把作业做完了。',
                    pinyin: 'tā bǎ zuòyè zuò wán le.',
                    meaning: 'He finished his homework.'
                }
            ],
            practice: [
                { question: '我___水喝___了。', answer: '把...完', options: ['把...完', '被...完', '给...完', '用...完'] },
                { question: '请___门打开。', answer: '把', options: ['把', '被', '给', '让'] },
                { question: '他___书放___桌子上了。', answer: '把...在', options: ['把...在', '被...在', '给...在', '让...在'] },
                { question: '你___作业写___了吗？', answer: '把...完', options: ['把...完', '被...完', '给...完', '让...完'] },
                { question: '我___钱花___了。', answer: '把...光', options: ['把...光', '被...光', '给...光', '用...光'] }
            ]
        },

        // 2 — 被字句 (HSK 4, BaBei)
        {
            id: 'gp002',
            title: '被字句 (bèi zì jù)',
            titleMeaning: 'The Passive Voice',
            level: 'HSK 4',
            category: 'BaBei',
            commonMistake: 'Only use 被 when the subject is the receiver of an action and the agent is known or implied. Not all English passives translate to 被 in Chinese — many use topic-comment structure instead.',
            pattern: 'Receiver + 被 (+ Agent) + Verb + Complement/Result',
            explanation: '被字句表示被动，强调主语是动作的承受者。通常用于表示不如意或不幸的事情，但现在也广泛用于中性或好的情况。',
            examples: [
                {
                    chinese: '我的手机被偷了。',
                    pinyin: 'wǒ de shǒujī bèi tōu le.',
                    meaning: 'My phone was stolen.'
                },
                {
                    chinese: '他被老师批评了。',
                    pinyin: 'tā bèi lǎoshī pīpíng le.',
                    meaning: 'He was criticized by the teacher.'
                },
                {
                    chinese: '那本书被人借走了。',
                    pinyin: 'nà běn shū bèi rén jiè zǒu le.',
                    meaning: 'That book was borrowed by someone.'
                }
            ],
            practice: [
                { question: '手机___偷___。', answer: '被...了', options: ['被...了', '把...了', '给...了', '让...了'] },
                { question: '他___老师批评___。', answer: '被...了', options: ['被...了', '把...了', '让...了', '给...了'] },
                { question: '蛋糕___弟弟吃___。', answer: '被...了', options: ['被...了', '把...了', '给...了', '用...了'] },
                { question: '窗户___风刮___。', answer: '被...了', options: ['被...了', '把...了', '给...了', '让...了'] },
                { question: '这件事___大家知道___。', answer: '被...了', options: ['被...了', '把...了', '给...了', '让...了'] }
            ]
        },

        // 3 — "就" vs "才" (HSK 4, Adverbs)
        {
            id: 'gp003',
            title: '"就" vs "才" (jiù vs cái)',
            titleMeaning: 'Early vs Late / Only Then',
            level: 'HSK 4',
            category: 'Comparatives',
            commonMistake: '就 indicates "earlier than expected" or "right away"; 才 indicates "later than expected" or "only then." Mixing them up reverses the meaning entirely.',
            pattern: 'Time/Number + 就 + Verb ... | Time/Number + 才 + Verb ...',
            explanation: '"就"表示动作发生得早、快、顺利，或者数量少。"才"表示动作发生得晚、慢、困难，或者数量少。两者语气相反。',
            examples: [
                {
                    chinese: '他七点就来了。',
                    pinyin: 'tā qī diǎn jiù lái le.',
                    meaning: 'He came as early as 7 o\'clock.'
                },
                {
                    chinese: '他九点才来。',
                    pinyin: 'tā jiǔ diǎn cái lái.',
                    meaning: 'He didn\'t come until 9 o\'clock.'
                },
                {
                    chinese: '我十分钟就能做完。',
                    pinyin: 'wǒ shí fēnzhōng jiù néng zuò wán.',
                    meaning: 'I can finish it in just 10 minutes.'
                }
            ],
            practice: [
                { question: '他七点___来了。（早）', answer: '就', options: ['就', '才', '都', '也'] },
                { question: '他九点___来。（晚）', answer: '才', options: ['才', '就', '都', '也'] },
                { question: '我等了三个小时他___到。', answer: '才', options: ['才', '就', '都', '还'] },
                { question: '我五分钟___能做完。', answer: '就', options: ['就', '才', '都', '还'] },
                { question: '弟弟十一岁___会开车了。', answer: '就', options: ['就', '才', '都', '也'] }
            ]
        },

        // 4 — "又" vs "再" vs "还" (HSK 4, Adverbs)
        {
            id: 'gp004',
            title: '"又" vs "再" vs "还" (yòu vs zài vs hái)',
            titleMeaning: 'Again / Still / Also',
            level: 'HSK 4',
            category: 'Comparatives',
            commonMistake: '又 = repetition of a PAST action. 再 = repetition of a FUTURE action. 还 = continuation or "still." Never use 又 for future plans.',
            pattern: '又 + Verb (past repetition) | 再 + Verb (future repetition) | 还 + Verb (still/continuation)',
            explanation: '"又"表示已经重复的动作。"再"表示将要重复的动作。"还"表示持续的状态或者"还想要"的意思。三个词的使用时间不同。',
            examples: [
                {
                    chinese: '他昨天又迟到了。',
                    pinyin: 'tā zuótiān yòu chídào le.',
                    meaning: 'He was late again yesterday.'
                },
                {
                    chinese: '明天再来吧。',
                    pinyin: 'míngtiān zài lái ba.',
                    meaning: 'Come again tomorrow.'
                },
                {
                    chinese: '他还在睡觉。',
                    pinyin: 'tā hái zài shuìjiào.',
                    meaning: 'He is still sleeping.'
                }
            ],
            practice: [
                { question: '昨天他___迟到了。（已重复）', answer: '又', options: ['又', '再', '还', '也'] },
                { question: '明天___来。（将重复）', answer: '再', options: ['再', '又', '还', '也'] },
                { question: '他___在睡觉。（持续）', answer: '还', options: ['还', '又', '再', '就'] },
                { question: '吃完了___吃。', answer: '再', options: ['再', '又', '还', '就'] },
                { question: '我___想喝一杯咖啡。', answer: '还', options: ['还', '又', '再', '也'] }
            ]
        },

        // 5 — 结果补语 (HSK 4, Complements)
        {
            id: 'gp005',
            title: '结果补语 (jiéguǒ bǔyǔ)',
            titleMeaning: 'Result Complements',
            level: 'HSK 4',
            category: 'Complements',
            commonMistake: 'The result complement goes directly after the verb with nothing between them. Don\'t insert 了 or any particle between the verb and its result complement — 了 goes after the complement.',
            pattern: 'Verb + Result Complement (+ 了) + Object',
            explanation: '结果补语用在动词后面，表示动作的结果。常见的结果补语包括：完、到、见、对、错、好、会、懂等。',
            examples: [
                {
                    chinese: '我写完作业了。',
                    pinyin: 'wǒ xiě wán zuòyè le.',
                    meaning: 'I finished writing my homework.'
                },
                {
                    chinese: '他找到钥匙了。',
                    pinyin: 'tā zhǎodào yàoshi le.',
                    meaning: 'He found the key.'
                },
                {
                    chinese: '你听懂了吗？',
                    pinyin: 'nǐ tīng dǒng le ma?',
                    meaning: 'Did you understand?'
                }
            ],
            practice: [
                { question: '我写___作业__。', answer: '完...了', options: ['完...了', '了...完', '完...着', '到...了'] },
                { question: '他找___钥匙__。', answer: '到...了', options: ['到...了', '完...了', '见...了', '好...了'] },
                { question: '你听___了吗？', answer: '懂', options: ['懂', '完', '到', '见'] },
                { question: '我没看___那个人。', answer: '见', options: ['见', '完', '懂', '好'] },
                { question: '这道题你做___了。', answer: '对', options: ['对', '错', '完', '到'] }
            ]
        },

        // 6 — 趋向补语 (HSK 4, Complements)
        {
            id: 'gp006',
            title: '趋向补语：来/去 (qūxiàng bǔyǔ)',
            titleMeaning: 'Directional Complements: 来/去',
            level: 'HSK 4',
            category: 'Complements',
            commonMistake: 'Use 来 when movement is toward the speaker; 去 when away. Compound directional complements (进来/进去, 上来/上去, etc.) follow the same logic.',
            pattern: 'Verb + 来/去 (direction toward/away from speaker)',
            explanation: '趋向补语表示动作的方向。"来"表示朝向说话人，"去"表示离开说话人。复合趋向补语如"进来""走去"等。',
            examples: [
                {
                    chinese: '他走进来了。',
                    pinyin: 'tā zǒu jìnlái le.',
                    meaning: 'He walked in. (toward speaker)'
                },
                {
                    chinese: '她跑出去了。',
                    pinyin: 'tā pǎo chūqù le.',
                    meaning: 'She ran out. (away from speaker)'
                },
                {
                    chinese: '请把书拿上来。',
                    pinyin: 'qǐng bǎ shū ná shànglái.',
                    meaning: 'Please bring the book up. (toward speaker)'
                }
            ],
            practice: [
                { question: '他走___了。（向我）', answer: '进来', options: ['进来', '进去', '出去', '走来'] },
                { question: '她跑___了。（离开）', answer: '出去', options: ['出去', '出来', '进来', '走去'] },
                { question: '请把书拿___。', answer: '上来', options: ['上来', '上去', '下来', '起来'] },
                { question: '他从山上走___了。', answer: '下来', options: ['下来', '下去', '上来', '起来'] },
                { question: '小鸟飞___了。', answer: '起来', options: ['起来', '下来', '上来', '进来'] }
            ]
        },

        // 7 — 可能补语 (HSK 4, Complements)
        {
            id: 'gp007',
            title: '可能补语 (kěnéng bǔyǔ)',
            titleMeaning: 'Potential Complements: V+得/不+Result',
            level: 'HSK 4',
            category: 'Complements',
            commonMistake: 'Don\'t use 能/不能 with result complements to show potential. Use 得/不 between the verb and complement instead — "看得见" not "能看见".',
            pattern: 'Verb + 得/不 + Complement (possibility/impossibility)',
            explanation: '可能补语表示动作的结果是否可能实现。"得"表示可能（做得到），"不"表示不可能（做不到）。常见结构如"看得见""听不懂"等。',
            examples: [
                {
                    chinese: '我看得见黑板。',
                    pinyin: 'wǒ kàn de jiàn hēibǎn.',
                    meaning: 'I can see the blackboard.'
                },
                {
                    chinese: '他听不懂中文。',
                    pinyin: 'tā tīng bu dǒng zhōngwén.',
                    meaning: 'He can\'t understand Chinese.'
                },
                {
                    chinese: '这么多菜，你吃得完吗？',
                    pinyin: 'zhème duō cài, nǐ chī de wán ma?',
                    meaning: 'So much food, can you finish eating it?'
                }
            ],
            practice: [
                { question: '我___见黑板。（能）', answer: '看得', options: ['看得', '看不了', '能看', '会看'] },
                { question: '他___懂中文。（不能）', answer: '听不懂', options: ['听不懂', '听不了', '不能听', '不会听'] },
                { question: '这么多书，___得完吗？', answer: '看', options: ['看', '读', '写', '学'] },
                { question: '这个箱子太重，我___不动。', answer: '拿', options: ['拿', '搬', '提', '拉'] },
                { question: '你___得完这么多吗？', answer: '吃', options: ['吃', '喝', '做', '用'] }
            ]
        },

        // 8 — "地" vs "得" vs "的" (HSK 4, Basic)
        {
            id: 'gp008',
            title: '"地" vs "得" vs "的" (de particles)',
            titleMeaning: 'The Three De Particles',
            level: 'HSK 4',
            category: 'Basic',
            commonMistake: '的 marks possession/description (adjective + noun). 地 marks manner (adjective + verb). 得 marks degree/complement (verb + degree). Native speakers often mix them in writing too.',
            pattern: 'Adj + 的 + Noun (description) | Adj + 地 + Verb (manner) | Verb + 得 + Complement (degree)',
            explanation: '三个"de"用法不同。"的"连接定语和名词（美丽的花）。"地"连接状语和动词（慢慢地走）。"得"连接动词和补语（跑得快）。',
            examples: [
                {
                    chinese: '这是我妈妈的书。',
                    pinyin: 'zhè shì wǒ māma de shū.',
                    meaning: 'This is my mother\'s book.'
                },
                {
                    chinese: '她高兴地笑了。',
                    pinyin: 'tā gāoxìng de xiào le.',
                    meaning: 'She smiled happily.'
                },
                {
                    chinese: '他跑得很快。',
                    pinyin: 'tā pǎo de hěn kuài.',
                    meaning: 'He runs very fast.'
                }
            ],
            practice: [
                { question: '这是我___书。（拥有）', answer: '的', options: ['的', '地', '得', '了'] },
                { question: '她高兴___笑了。（方式）', answer: '地', options: ['地', '的', '得', '了'] },
                { question: '他跑___很快。（程度）', answer: '得', options: ['得', '的', '地', '了'] },
                { question: '慢慢___走，别急。（方式）', answer: '地', options: ['地', '的', '得', '了'] },
                { question: '她唱歌唱___非常好听。', answer: '得', options: ['得', '的', '地', '了'] }
            ]
        },

        // 9 — "和" vs "跟" vs "与" (HSK 4, Connectors)
        {
            id: 'gp009',
            title: '"和" vs "跟" vs "与" (hé vs gēn vs yǔ)',
            titleMeaning: 'And / With',
            level: 'HSK 4',
            category: 'Connectors',
            commonMistake: '和 only connects nouns/noun phrases, NOT clauses or verbs. Use 而 or just a comma for connecting clauses. 跟 is more colloquial for "with." 与 is formal/written.',
            pattern: 'Noun + 和/跟/与 + Noun (connecting nouns and nominal phrases only)',
            explanation: '"和"、"跟"、"与"都用来连接名词和名词短语。"和"最常用，"跟"更口语化，"与"主要用于书面语。三者都不能连接句子。',
            examples: [
                {
                    chinese: '我喜欢茶和咖啡。',
                    pinyin: 'wǒ xǐhuan chá hé kāfēi.',
                    meaning: 'I like tea and coffee.'
                },
                {
                    chinese: '我跟朋友一起去。',
                    pinyin: 'wǒ gēn péngyou yīqǐ qù.',
                    meaning: 'I\'m going with a friend.'
                },
                {
                    chinese: '工作与生活的关系很重要。',
                    pinyin: 'gōngzuò yǔ shēnghuó de guānxi hěn zhòngyào.',
                    meaning: 'The relationship between work and life is important.'
                }
            ],
            practice: [
                { question: '我___你一起去。（口语）', answer: '跟', options: ['跟', '与', '而', '并'] },
                { question: '苹果___香蕉都很好吃。', answer: '和', options: ['和', '跟', '与', '而'] },
                { question: '学习___工作都很忙。', answer: '和', options: ['和', '跟', '与', '而'] },
                { question: '经济利益___社会发展（书面语）', answer: '与', options: ['与', '和', '跟', '而'] }
            ]
        },

        // 10 — "所有" vs "一切" vs "每...都" (HSK 4, Quantifiers)
        {
            id: 'gp010',
            title: '"所有" vs "一切" vs "每...都"',
            titleMeaning: 'All / Every',
            level: 'HSK 4',
            category: 'Connectors',
            commonMistake: '所有 modifies nouns (所有学生). 一切 is an abstract standalone noun meaning "everything" — can\'t directly precede concrete nouns. 每...都 emphasizes individual items within a group.',
            pattern: '所有的 + Noun | 一切 + (Noun) | 每 + Measure Word + Noun + 都',
            explanation: '"所有"用在名词前表示全部（所有的书）。"一切"通常是概述，比较抽象（一切顺利）。"每...都"强调每个个体（每本书都很好）。',
            examples: [
                {
                    chinese: '所有的学生都来了。',
                    pinyin: 'suǒyǒu de xuésheng dōu lái le.',
                    meaning: 'All the students came.'
                },
                {
                    chinese: '祝你一切顺利。',
                    pinyin: 'zhù nǐ yīqiè shùnlì.',
                    meaning: 'Wish you all the best.'
                },
                {
                    chinese: '每个问题都很重要。',
                    pinyin: 'měi gè wèntí dōu hěn zhòngyào.',
                    meaning: 'Every question is important.'
                }
            ],
            practice: [
                { question: '___的学生都来了。（全体）', answer: '所有', options: ['所有', '一切', '每', '全部'] },
                { question: '祝你___顺利。（概括）', answer: '一切', options: ['一切', '所有', '每', '各种'] },
                { question: '___个问题____很重要。', answer: '每...都', options: ['每...都', '每...就', '每...还', '每...也'] },
                { question: '___你都准备好了。', answer: '一切', options: ['一切', '所有', '每', '全部'] }
            ]
        },

        // 11 — "虽然...但是/可是..." (HSK 4, Connectors)
        {
            id: 'gp011',
            title: '"虽然...但是/可是..." (suīrán...dànshì...)',
            titleMeaning: 'Although / Even Though',
            level: 'HSK 4',
            category: 'Connectors',
            commonMistake: 'In Chinese, 虽然 and 但是/可是 often pair together — unlike English where "although" and "but" cannot appear in the same clause. Don\'t omit 但是/可是.',
            pattern: '虽然 + Clause 1，但是/可是 + Clause 2',
            explanation: '这个结构表示转折关系。与英语不同，中文中"虽然"和"但是"可以同时使用。"虽然"可以省略，但"但是"不能省略。',
            examples: [
                {
                    chinese: '虽然下雨了，但是我还是去了。',
                    pinyin: 'suīrán xiàyǔ le, dànshì wǒ háishì qù le.',
                    meaning: 'Although it rained, I still went.'
                },
                {
                    chinese: '虽然很累，可是我很开心。',
                    pinyin: 'suīrán hěn lèi, kěshì wǒ hěn kāixīn.',
                    meaning: 'Although I\'m tired, I\'m very happy.'
                },
                {
                    chinese: '这件衣服虽然贵，但是质量好。',
                    pinyin: 'zhè jiàn yīfu suīrán guì, dànshì zhìliàng hǎo.',
                    meaning: 'Although this piece of clothing is expensive, the quality is good.'
                }
            ],
            practice: [
                { question: '___下雨了，___我还是去了。', answer: '虽然...但是', options: ['虽然...但是', '因为...所以', '虽然...所以', '如果...但是'] },
                { question: '___很累，___我很开心。', answer: '虽然...可是', options: ['虽然...可是', '虽然...所以', '因为...可是', '即使...可是'] },
                { question: '___很贵，___质量好。', answer: '虽然...但是', options: ['虽然...但是', '因为...但是', '如果...但是', '不但...但是'] },
                { question: '___很小，___很干净。', answer: '虽然...但是', options: ['虽然...但是', '因为...所以', '如果...就', '不但...而且'] }
            ]
        },

        // 12 — "连...都/也..." (HSK 5, Prepositional)
        {
            id: 'gp012',
            title: '"连...都/也..." (lián...dōu/yě...)',
            titleMeaning: 'Even',
            level: 'HSK 5',
            category: 'Prepositional',
            commonMistake: 'This pattern emphasizes an extreme case. Use 都 for emphasis, 也 for softer contrast. Don\'t use 也 after negative phrases — use 都 instead.',
            pattern: '连 + Noun/Phrase + 都/也 + Verb/Adjective',
            explanation: '这个结构表示"甚至"的意思，用来强调一个极端的例子。连最不可能或最极端的情况都成立，其他情况更不用说。',
            examples: [
                {
                    chinese: '这道题连老师都不会做。',
                    pinyin: 'zhè dào tí lián lǎoshī dōu bù huì zuò.',
                    meaning: 'Even the teacher can\'t solve this problem.'
                },
                {
                    chinese: '他连饭都没吃就走了。',
                    pinyin: 'tā lián fàn dōu méi chī jiù zǒu le.',
                    meaning: 'He left without even eating.'
                },
                {
                    chinese: '连小孩子都知道这个道理。',
                    pinyin: 'lián xiǎo háizi dōu zhīdào zhège dàolǐ.',
                    meaning: 'Even little children know this principle.'
                }
            ],
            practice: [
                { question: '___老师___不会做这道题。', answer: '连...都', options: ['连...都', '连...就', '即使...都', '哪怕...都'] },
                { question: '他___饭___没吃就走了。', answer: '连...都', options: ['连...都', '连...就', '即使...也', '虽然...也'] },
                { question: '___小孩子___知道这个道理。', answer: '连...都', options: ['连...都', '连...就', '即使...都', '哪怕...都'] },
                { question: '我___一个字___没写。', answer: '连...都', options: ['连...都', '连...就', '即使...也', '哪怕...也'] }
            ]
        },

        // 13 — "非...不可" (HSK 5, ModalParticles)
        {
            id: 'gp013',
            title: '"非...不可" (fēi...bùkě)',
            titleMeaning: 'Must / Have To',
            level: 'HSK 5',
            category: 'ModalParticles',
            commonMistake: '非...不可 is a stronger, more emphatic "must" than 必须. It implies insistence or inevitability. In casual speech, 不可 is sometimes dropped, but for HSK, the full pattern is expected.',
            pattern: '非 + Verb/Clause + 不可',
            explanation: '这个结构表示强烈的必要性或必然性，相当于"一定得这样"。表达强烈的决心或必然的趋势。口语中有时省略"不可"。',
            examples: [
                {
                    chinese: '我非去不可。',
                    pinyin: 'wǒ fēi qù bùkě.',
                    meaning: 'I absolutely must go.'
                },
                {
                    chinese: '雨这么大，非淋湿不可。',
                    pinyin: 'yǔ zhème dà, fēi lín shī bùkě.',
                    meaning: 'With such heavy rain, I\'m bound to get soaked.'
                },
                {
                    chinese: '这件事非你做不可。',
                    pinyin: 'zhè jiàn shì fēi nǐ zuò bùkě.',
                    meaning: 'This must be done by you (no one else can).'
                }
            ],
            practice: [
                { question: '我___去___。', answer: '非...不可', options: ['非...不可', '必须...不可', '一定...不可', '非得...不可'] },
                { question: '雨这么大，___淋湿___。', answer: '非...不可', options: ['非...不可', '可能...不可', '应该...不可', '必须...不可'] },
                { question: '这件事___你做___。', answer: '非...不可', options: ['非...不可', '必须...不可', '一定...不可', '非得...不可'] },
                { question: '你再这样，___出事___。', answer: '非...不可', options: ['非...不可', '可能...不可', '应该...不可', '必须...不可'] }
            ]
        },

        // 14 — "以来/以后/以前/以内" (HSK 5, Prepositional)
        {
            id: 'gp014',
            title: '"以来" / "以后" / "以前" / "以内"',
            titleMeaning: 'Time Boundaries: Since / After / Before / Within',
            level: 'HSK 5',
            category: 'Prepositional',
            commonMistake: '以来 = "ever since a past point until now" (requires a starting point). 以后 = "after" (can start in the future). 以前 = "before." 以内 = "within a time range." Don\'t confuse 以来 (ongoing from past to now) with 以后 (after, not necessarily continuous).',
            pattern: 'Time/Event + 以来/以后/以前/以内 + Clause',
            explanation: '这四个词都用于表示时间关系。"以来"从过去到现在。"以后"在某个时间之后。"以前"在某个时间之前。"以内"在某段时间范围之内。',
            examples: [
                {
                    chinese: '开学以来，我学到了很多东西。',
                    pinyin: 'kāixué yǐlái, wǒ xué dào le hěn duō dōngxi.',
                    meaning: 'Since school started, I\'ve learned a lot.'
                },
                {
                    chinese: '下课以后我们去吃饭。',
                    pinyin: 'xiàkè yǐhòu wǒmen qù chīfàn.',
                    meaning: 'After class, we\'ll go eat.'
                },
                {
                    chinese: '三天以内完成这个工作。',
                    pinyin: 'sān tiān yǐnèi wánchéng zhège gōngzuò.',
                    meaning: 'Finish this work within three days.'
                }
            ],
            practice: [
                { question: '开学___，我学了很多。', answer: '以来', options: ['以来', '以后', '以前', '以内'] },
                { question: '下课___我们去吃饭。', answer: '以后', options: ['以后', '以来', '以前', '之内'] },
                { question: '三天___完成工作。', answer: '以内', options: ['以内', '以来', '以后', '之前'] },
                { question: '回家___先洗手。', answer: '以后', options: ['以后', '以来', '以前', '以内'] }
            ]
        },

        // 15 — "不管...都..." (HSK 5, Connectors)
        {
            id: 'gp015',
            title: '"不管...都..." (bùguǎn...dōu...)',
            titleMeaning: 'No Matter How / Regardless Of',
            level: 'HSK 5',
            category: 'Connectors',
            commonMistake: '不管 must be followed by 都/也 in the second clause. The first clause often contains a question word (什么/谁/怎么/多大/多少) or an "A not A" pattern. Don\'t use 不管 with a simple statement — use 虽然 instead.',
            pattern: '不管 + Question Word/A-not-A，都/也 + Result',
            explanation: '"不管"表示在任何条件下结果都不变。后面常常跟疑问词（什么、谁、怎么）或者正反并列结构，第二分句必须用"都"或"也"。',
            examples: [
                {
                    chinese: '不管多忙，我都会去运动。',
                    pinyin: 'bùguǎn duō máng, wǒ dōu huì qù yùndòng.',
                    meaning: 'No matter how busy, I always go exercise.'
                },
                {
                    chinese: '不管是谁，都要遵守法律。',
                    pinyin: 'bùguǎn shì shéi, dōu yào zūnshǒu fǎlǜ.',
                    meaning: 'Whoever it is, everyone must follow the law.'
                },
                {
                    chinese: '不管你去不去，我都要去。',
                    pinyin: 'bùguǎn nǐ qù bu qù, wǒ dōu yào qù.',
                    meaning: 'Whether you go or not, I\'m going.'
                }
            ],
            practice: [
                { question: '___多忙，我___会去运动。', answer: '不管...都', options: ['不管...都', '虽然...都', '因为...都', '如果...都'] },
                { question: '___是谁，___要遵守规则。', answer: '不管...都', options: ['不管...都', '虽然...都', '即使...都', '如果...都'] },
                { question: '___你去不去，我___得去。', answer: '不管...都', options: ['不管...都', '虽然...都', '因为...都', '如果...都'] },
                { question: '___什么困难，我们___不怕。', answer: '不管...也', options: ['不管...也', '虽然...也', '因为...也', '如果...也'] }
            ]
        }
    ],

    mergeWithMain: function() {
        if (typeof GrammarData !== 'undefined') {
            GrammarData.lessons.push(...this.lessons);
        }
    }
};

if (typeof GrammarData !== 'undefined') { GrammarPlus.mergeWithMain(); }

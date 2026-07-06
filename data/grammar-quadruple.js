const GrammarQuadruple = {
  lessons: [
    // ============================================================
    // HSK 1 — Basic Patterns (g100–g109)
    // ============================================================
    {
      id: 'g100',
      title: '是字句 (Shì)',
      titleMeaning: '"To be" sentence with 是',
      level: 'HSK 1',
      category: 'Basic',
      commonMistake: 'Don\'t confuse 是 with adjective predicates. \'他是高\' is wrong — say \'他很高\' for \'He is tall.\'',
      pattern: 'Subject + 是 + Noun/Noun Phrase',
      explanation: '"是"是最基本的判断动词，用来连接主语和名词性谓语，表示"等同"或"归类"。否定形式用"不是"。',
      examples: [
        { chinese: '我是学生。', pinyin: 'Wǒ shì xuésheng.', meaning: 'I am a student.' },
        { chinese: '他不是老师。', pinyin: 'Tā bú shì lǎoshī.', meaning: 'He is not a teacher.' },
        { chinese: '这是我的书。', pinyin: 'Zhè shì wǒ de shū.', meaning: 'This is my book.' }
      ],
      practice: [
        { question: '她 ___ 医生。', answer: '是', options: ['是', '的', '在', '有'] },
        { question: '我 ___ 中国人。', answer: '是', options: ['是', '在', '有', '的'] },
        { question: '这 ___ 他的手机。', answer: '是', options: ['是', '的', '了', '在'] },
        { question: '他不 ___ 老师。', answer: '是', options: ['是', '在', '有', '的'] },
        { question: '你 ___ 学生吗？', answer: '是', options: ['是', '在', '有', '的'] },
        { question: '我们 ___ 好朋友。', answer: '是', options: ['是', '有', '在', '了'] },
        { question: '那本书 ___ 我的。', answer: '是', options: ['是', '有', '在', '的'] }
      ]
    },
    {
      id: 'g101',
      title: '有字句 (Yǒu)',
      titleMeaning: '"To have" and existential 有',
      level: 'HSK 1',
      category: 'Basic',
      commonMistake: 'The negated form of 有 is always 没有, never 不有.',
      pattern: 'Subject + 有 + Object',
      explanation: '"有"表示领有、存在。否定形式用"没有"，不能加"不"。也可用于表示存在，"某处有某人/某物"。',
      examples: [
        { chinese: '我有一本词典。', pinyin: 'Wǒ yǒu yì běn cídiǎn.', meaning: 'I have a dictionary.' },
        { chinese: '教室里有很多学生。', pinyin: 'Jiàoshì li yǒu hěn duō xuésheng.', meaning: 'There are many students in the classroom.' },
        { chinese: '他没有哥哥。', pinyin: 'Tā méiyǒu gēge.', meaning: 'He doesn\'t have an older brother.' }
      ],
      practice: [
        { question: '桌子上 ___ 一杯茶。', answer: '有', options: ['有', '是', '在', '的'] },
        { question: '我 ___ 一个弟弟。', answer: '有', options: ['有', '是', '在', '的'] },
        { question: '教室里 ___ 很多学生。', answer: '有', options: ['有', '是', '在', '了'] },
        { question: '公园里 ___ 很多花。', answer: '有', options: ['有', '是', '在', '的'] },
        { question: '冰箱里 ___ 牛奶吗？', answer: '有', options: ['有', '是', '了', '的'] },
        { question: '他没 ___ 时间。', answer: '有', options: ['有', '是', '在', '的'] },
        { question: '你家 ___ 几只猫？', answer: '有', options: ['有', '是', '在', '的'] }
      ]
    },
    {
      id: 'g102',
      title: '形容词谓语句',
      titleMeaning: 'Adjectival predicate sentences',
      level: 'HSK 1',
      category: 'Basic',
      commonMistake: 'Never insert 是 between subject and adjective. \'他是高\' is incorrect. Adjectives act as predicates directly.',
      pattern: 'Subject + (很) + Adjective',
      explanation: '汉语中形容词可以直接作谓语，不需要"是"。通常加"很"使语气自然，但"很"在这里不一定表示程度，更多是起音节调节作用。否定用"不"。',
      examples: [
        { chinese: '今天很热。', pinyin: 'Jīntiān hěn rè.', meaning: 'Today is hot.' },
        { chinese: '这本书不贵。', pinyin: 'Zhè běn shū bú guì.', meaning: 'This book is not expensive.' },
        { chinese: '他很高。', pinyin: 'Tā hěn gāo.', meaning: 'He is tall.' }
      ],
      practice: [
        { question: '这个苹果 ___ 甜。', answer: '很', options: ['很', '是', '有', '的'] },
        { question: '今天 ___ 冷。', answer: '很', options: ['很', '是', '有', '的'] },
        { question: '她的头发 ___ 长。', answer: '很', options: ['很', '是', '在', '的'] },
        { question: '我 ___ 忙。', answer: '很', options: ['很', '有', '是', '了'] },
        { question: '这件衣服 ___ 贵。', answer: '很', options: ['很', '是', '有', '了'] },
        { question: '北京夏天 ___ 热。', answer: '很', options: ['很', '是', '在', '的'] },
        { question: '那个地方 ___ 漂亮。', answer: '很', options: ['很', '是', '在', '得'] }
      ]
    },
    {
      id: 'g103',
      title: '在 — 表示位置',
      titleMeaning: '在 for location',
      level: 'HSK 1',
      category: 'Basic',
      commonMistake: 'Don\'t confuse 在 (location) with 是 (identity). \'他是家\' is wrong for \'He is at home\' — use 他在家.',
      pattern: 'Subject + 在 + Location',
      explanation: '"在"作动词表示"位于某处"。也可作介词，构成"在+地点+动词"的结构表示动作发生的地点。',
      examples: [
        { chinese: '他在家。', pinyin: 'Tā zài jiā.', meaning: 'He is at home.' },
        { chinese: '我在学校学习。', pinyin: 'Wǒ zài xuéxiào xuéxí.', meaning: 'I study at school.' },
        { chinese: '书在桌子上。', pinyin: 'Shū zài zhuōzi shang.', meaning: 'The book is on the table.' }
      ],
      practice: [
        { question: '妈妈 ___ 厨房做饭。', answer: '在', options: ['在', '是', '有', '的'] },
        { question: '我 ___ 图书馆看书。', answer: '在', options: ['在', '是', '有', '的'] },
        { question: '爸爸 ___ 公司上班。', answer: '在', options: ['在', '是', '有', '了'] },
        { question: '手机 ___ 桌子上。', answer: '在', options: ['在', '是', '有', '的'] },
        { question: '他 ___ 北京工作。', answer: '在', options: ['在', '是', '有', '的'] },
        { question: '猫 ___ 沙发下面。', answer: '在', options: ['在', '是', '有', '着'] },
        { question: '我们 ___ 饭店吃饭。', answer: '在', options: ['在', '是', '有', '的'] }
      ]
    },
    {
      id: 'g104',
      title: '疑问代词 — 谁、什么、哪儿',
      titleMeaning: 'Question words: who, what, where',
      level: 'HSK 1',
      category: 'Basic',
      commonMistake: 'Chinese question words do NOT trigger word-order inversion. \'你喜欢什么？\' keeps SVO order — not \'什么你喜欢？\'',
      pattern: 'Subject + Verb + 谁/什么/哪儿？',
      explanation: '汉语疑问句语序与陈述句一致，不需要倒装。疑问词直接放在所要提问的成分位置上。',
      examples: [
        { chinese: '他是谁？', pinyin: 'Tā shì shéi?', meaning: 'Who is he?' },
        { chinese: '你喜欢吃什么？', pinyin: 'Nǐ xǐhuan chī shénme?', meaning: 'What do you like to eat?' },
        { chinese: '你去哪儿？', pinyin: 'Nǐ qù nǎr?', meaning: 'Where are you going?' }
      ],
      practice: [
        { question: '你想喝 ___？', answer: '什么', options: ['什么', '谁', '哪儿', '怎么'] },
        { question: '他是 ___？', answer: '谁', options: ['谁', '什么', '哪儿', '怎么'] },
        { question: '你要去 ___？', answer: '哪儿', options: ['哪儿', '什么', '谁', '怎么'] },
        { question: '你喜欢 ___ 颜色？', answer: '什么', options: ['什么', '谁', '哪儿', '怎么'] },
        { question: '你的手机在 ___？', answer: '哪儿', options: ['哪儿', '谁', '什么', '怎么'] },
        { question: '___ 是你的老师？', answer: '谁', options: ['谁', '什么', '哪儿', '怎么'] },
        { question: '你手里拿着 ___？', answer: '什么', options: ['什么', '谁', '哪儿', '怎么'] }
      ]
    },
    {
      id: 'g105',
      title: '吧 — 建议语气',
      titleMeaning: '吧 for suggestions',
      level: 'HSK 1',
      category: 'Basic',
      commonMistake: '吧 is NOT a question marker. It softens suggestions and guesses. \'你是学生吧？\' = \'You\'re a student, right?\' — seeking confirmation, not asking neutrally.',
      pattern: 'Sentence + 吧',
      explanation: '"吧"放在句末，表示建议、商量、请求或推测的语气。用于祈使句末尾使语气更委婉。',
      examples: [
        { chinese: '我们走吧。', pinyin: 'Wǒmen zǒu ba.', meaning: 'Let\'s go.' },
        { chinese: '你吃点儿东西吧。', pinyin: 'Nǐ chī diǎnr dōngxi ba.', meaning: 'Why don\'t you eat something.' },
        { chinese: '你是中国人吧？', pinyin: 'Nǐ shì Zhōngguórén ba?', meaning: 'You\'re Chinese, right?' }
      ],
      practice: [
        { question: '快下雨了，我们回家 ___。', answer: '吧', options: ['吧', '吗', '呢', '啊'] },
        { question: '一起去吃饭 ___。', answer: '吧', options: ['吧', '吗', '呢', '啊'] },
        { question: '休息一下 ___。', answer: '吧', options: ['吧', '吗', '呢', '啊'] },
        { question: '你尝尝这个菜 ___。', answer: '吧', options: ['吧', '吗', '呢', '啊'] },
        { question: '别担心 ___。', answer: '吧', options: ['吧', '吗', '呢', '啊'] },
        { question: '那我们明天见 ___。', answer: '吧', options: ['吧', '吗', '呢', '啊'] },
        { question: '你看完再说 ___。', answer: '吧', options: ['吧', '吗', '呢', '啊'] }
      ]
    },
    {
      id: 'g106',
      title: '了 — 变化实现',
      titleMeaning: '了 indicating change or completion',
      level: 'HSK 1',
      category: 'Basic',
      commonMistake: 'Don\'t use 了 with 没 in negation. \'我没吃饭了\' is wrong — say \'我没吃饭\'.',
      pattern: 'Sentence + 了',
      explanation: '句末"了"表示情况发生了变化或即将发生变化。动词后"了"表示动作完成。两者常结合使用。',
      examples: [
        { chinese: '下雨了。', pinyin: 'Xià yǔ le.', meaning: 'It\'s raining now (change).' },
        { chinese: '我吃饭了。', pinyin: 'Wǒ chī fàn le.', meaning: 'I\'ve eaten (completed).' },
        { chinese: '他去了北京。', pinyin: 'Tā qù le Běijīng.', meaning: 'He went to Beijing.' }
      ],
      practice: [
        { question: '天冷 ___，多穿衣服。', answer: '了', options: ['了', '的', '得', '地'] },
        { question: '下雪 ___。', answer: '了', options: ['了', '的', '得', '地'] },
        { question: '饭做好 ___。', answer: '了', options: ['了', '的', '得', '地'] },
        { question: '他走 ___。', answer: '了', options: ['了', '的', '得', '地'] },
        { question: '花都开 ___。', answer: '了', options: ['了', '的', '得', '地'] },
        { question: '我已经到 ___。', answer: '了', options: ['了', '的', '得', '地'] },
        { question: '天晴 ___。', answer: '了', options: ['了', '的', '得', '地'] }
      ]
    },
    {
      id: 'g107',
      title: '呢 — 疑问与持续',
      titleMeaning: '呢 for follow-up questions and continuity',
      level: 'HSK 1',
      category: 'Basic',
      commonMistake: '呢 after a noun forms a short follow-up question: \'你呢？\' = \'And you?\' — don\'t repeat the whole question.',
      pattern: 'Noun/Phrase + 呢？ | Sentence + 呢',
      explanation: '"呢"用在名词后构成省略疑问句，意为"……怎么样"。用在陈述句末可表示动作正在进行或状态持续。',
      examples: [
        { chinese: '你呢？', pinyin: 'Nǐ ne?', meaning: 'And you? / How about you?' },
        { chinese: '他在看书呢。', pinyin: 'Tā zài kàn shū ne.', meaning: 'He is reading a book.' },
        { chinese: '我的手机呢？', pinyin: 'Wǒ de shǒujī ne?', meaning: 'Where is my phone?' }
      ],
      practice: [
        { question: '我去买咖啡，你 ___？', answer: '呢', options: ['呢', '吗', '吧', '啊'] },
        { question: '我的钥匙 ___？', answer: '呢', options: ['呢', '吗', '吧', '啊'] },
        { question: '他还在看书 ___。', answer: '呢', options: ['呢', '吗', '吧', '啊'] },
        { question: '明天放假，你做什么 ___？', answer: '呢', options: ['呢', '吗', '吧', '啊'] },
        { question: '我觉得挺好，你 ___？', answer: '呢', options: ['呢', '吗', '吧', '啊'] },
        { question: '爸爸 ___？', answer: '呢', options: ['呢', '吗', '吧', '啊'] },
        { question: '妈妈在做饭 ___。', answer: '呢', options: ['呢', '吗', '吧', '啊'] }
      ]
    },
    {
      id: 'g108',
      title: '吗 — 是非问句',
      titleMeaning: '吗 for yes/no questions',
      level: 'HSK 1',
      category: 'Basic',
      commonMistake: '吗 turns any statement into a yes/no question WITHOUT changing word order. \'你是老师吗？\' = \'Are you a teacher?\'',
      pattern: 'Statement + 吗？',
      explanation: '"吗"是最简单的是非问句标记，加在陈述句末尾即可构成一般疑问句。不需要改变原句语序。',
      examples: [
        { chinese: '你好吗？', pinyin: 'Nǐ hǎo ma?', meaning: 'How are you?' },
        { chinese: '他是老师吗？', pinyin: 'Tā shì lǎoshī ma?', meaning: 'Is he a teacher?' },
        { chinese: '你有词典吗？', pinyin: 'Nǐ yǒu cídiǎn ma?', meaning: 'Do you have a dictionary?' }
      ],
      practice: [
        { question: '你喜欢吃中国菜 ___？', answer: '吗', options: ['吗', '吧', '呢', '啊'] },
        { question: '你是老师 ___？', answer: '吗', options: ['吗', '吧', '呢', '啊'] },
        { question: '今天热 ___？', answer: '吗', options: ['吗', '吧', '呢', '啊'] },
        { question: '他有时间 ___？', answer: '吗', options: ['吗', '吧', '呢', '啊'] },
        { question: '这本书好看 ___？', answer: '吗', options: ['吗', '吧', '呢', '啊'] },
        { question: '你会说中文 ___？', answer: '吗', options: ['吗', '吧', '呢', '啊'] },
        { question: '明天你去 ___？', answer: '吗', options: ['吗', '吧', '呢', '啊'] }
      ]
    },
    {
      id: 'g109',
      title: '的 — 所属关系',
      titleMeaning: '的 for possession and modification',
      level: 'HSK 1',
      category: 'Basic',
      commonMistake: '的 links modifiers to nouns. Don\'t overuse it with close family: \'我妈妈\' is more natural than \'我的妈妈\'.',
      pattern: 'Modifier + 的 + Noun',
      explanation: '"的"是汉语最重要的定语标记词，用来连接定语和中心语，表示所属、性质、来源等关系。口语中与代词组合表示所属时可省略。',
      examples: [
        { chinese: '我的妈妈是老师。', pinyin: 'Wǒ de māma shì lǎoshī.', meaning: 'My mom is a teacher.' },
        { chinese: '这是一本很有意思的书。', pinyin: 'Zhè shì yì běn hěn yǒu yìsi de shū.', meaning: 'This is a very interesting book.' },
        { chinese: '他朋友在中国。', pinyin: 'Tā péngyou zài Zhōngguó.', meaning: 'His friend is in China.' }
      ],
      practice: [
        { question: '这是姐姐 ___ 衣服。', answer: '的', options: ['的', '得', '地', '了'] },
        { question: '我 ___ 书包很重。', answer: '的', options: ['的', '得', '地', '了'] },
        { question: '蓝色 ___ 那件衣服很好看。', answer: '的', options: ['的', '得', '地', '了'] },
        { question: '北京 ___ 冬天很冷。', answer: '的', options: ['的', '得', '地', '了'] },
        { question: '很好吃 ___ 菜。', answer: '的', options: ['的', '得', '地', '了'] },
        { question: '他 ___ 工作很忙。', answer: '的', options: ['的', '得', '地', '了'] },
        { question: '妈妈做 ___ 饭很好吃。', answer: '的', options: ['的', '得', '地', '了'] }
      ]
    },

    // ============================================================
    // HSK 1–2 — Question & Basic Patterns (g110–g119)
    // ============================================================
    {
      id: 'g110',
      title: '正反问句 — A不A',
      titleMeaning: 'Affirmative-negative questions (A-not-A)',
      level: 'HSK 2',
      category: 'Questions',
      commonMistake: 'A-not-A questions don\'t need 吗. \'你去不去吗？\' is wrong — remove 吗.',
      pattern: 'Verb + 不 + Verb | Adj + 不 + Adj',
      explanation: '"A不A"是汉语特有的疑问格式，把动词或形容词的肯定形式和否定形式并列，构成选择问。比"吗"问句更口语化。',
      examples: [
        { chinese: '你是不是学生？', pinyin: 'Nǐ shì bú shì xuésheng?', meaning: 'Are you a student (or not)?' },
        { chinese: '这个菜好不好吃？', pinyin: 'Zhè ge cài hǎo bù hǎo chī?', meaning: 'Is this dish tasty (or not)?' },
        { chinese: '你今天去不去？', pinyin: 'Nǐ jīntiān qù bú qù?', meaning: 'Are you going today (or not)?' }
      ],
      practice: [
        { question: '你明天 ___ 来？', answer: '来不来', options: ['来不来', '来了吗', '没来', '来过'] },
        { question: '这个菜 ___ 吃？', answer: '好不好', options: ['好不好', '好吗', '好了', '不'] },
        { question: '你 ___ 学生？', answer: '是不是', options: ['是不是', '是吗', '是啊', '没是'] },
        { question: '今天 ___？', answer: '冷不冷', options: ['冷不冷', '很冷', '冷吗', '冷过'] },
        { question: '你 ___ 这件衣服？', answer: '喜不喜欢', options: ['喜不喜欢', '喜欢吗', '喜欢了', '怕喜欢'] },
        { question: '他 ___ 中文？', answer: '会不会', options: ['会不会', '可以吗', '能吗', '会了'] },
        { question: '这双鞋 ___？', answer: '贵不贵', options: ['贵不贵', '贵吗', '很贵', '贵了'] }
      ]
    },
    {
      id: 'g111',
      title: '是不是 — 确认问',
      titleMeaning: '"是不是" for confirmation questions',
      level: 'HSK 2',
      category: 'Questions',
      commonMistake: '是不是 can be inserted mid-sentence for confirmation. It\'s more specific than 吗 which asks about the whole sentence.',
      pattern: 'Subject + 是不是 + Predicate？',
      explanation: '"是不是"作为整体插入句中，用来确认某一信息或寻求对方认同。语气比"吗"更侧重于确认已有推测。',
      examples: [
        { chinese: '你是不是中国人？', pinyin: 'Nǐ shì bu shì Zhōngguórén?', meaning: 'Are you Chinese (or not)?' },
        { chinese: '他是不是不喜欢吃辣的？', pinyin: 'Tā shì bu shì bù xǐhuan chī là de?', meaning: 'Is it that he doesn\'t like spicy food?' },
        { chinese: '今天是不是星期五？', pinyin: 'Jīntiān shì bu shì xīngqīwǔ?', meaning: 'Is today Friday?' }
      ],
      practice: [
        { question: '你 ___ 去过长城？', answer: '是不是', options: ['是不是', '有没有', '可不可以', '应不应该'] },
        { question: '他 ___ 生病了？', answer: '是不是', options: ['是不是', '有没有', '可不可', '能不能'] },
        { question: '今天 ___ 你的生日？', answer: '是不是', options: ['是不是', '有没有', '会不会', '应不应'] },
        { question: '你 ___ 忘了带钥匙？', answer: '是不是', options: ['是不是', '有没有', '要不要', '能不能'] },
        { question: '这道题 ___ 太难了？', answer: '是不是', options: ['是不是', '会不会', '行不行', '好不好'] },
        { question: '你 ___ 又迟到了？', answer: '是不是', options: ['是不是', '有没有', '能不能', '会不会'] },
        { question: '他 ___ 你哥哥？', answer: '是不是', options: ['是不是', '能不能', '会不会', '好不好'] }
      ]
    },
    {
      id: 'g112',
      title: '有没有 — 询问经历',
      titleMeaning: '"有没有" to ask about experience',
      level: 'HSK 2',
      category: 'Questions',
      commonMistake: 'Use 有没有 to ask about past experience without 了. \'你有没有去\' (not \'你有没有去了\').',
      pattern: 'Subject + 有没有 + Verb + 过 + Object？',
      explanation: '"有没有"用来询问是否发生过某事或是否有某种经历。在南方方言中常用于一般动作的提问，标准普通话中可替代"V没V"。',
      examples: [
        { chinese: '你有没有去过上海？', pinyin: 'Nǐ yǒu méiyǒu qù guo Shànghǎi?', meaning: 'Have you ever been to Shanghai?' },
        { chinese: '你有没有吃饭？', pinyin: 'Nǐ yǒu méiyǒu chī fàn?', meaning: 'Have you eaten?' },
        { chinese: '他有没有告诉你？', pinyin: 'Tā yǒu méiyǒu gàosu nǐ?', meaning: 'Did he tell you?' }
      ],
      practice: [
        { question: '你 ___ 看过这部电影？', answer: '有没有', options: ['有没有', '是不是', '可不可', '会不会'] },
        { question: '你 ___ 去过日本？', answer: '有没有', options: ['有没有', '是不是', '能不能', '会不会'] },
        { question: '他 ___ 吃过臭豆腐？', answer: '有没有', options: ['有没有', '是不是', '能不能', '会不会'] },
        { question: '你 ___ 收到我的短信？', answer: '有没有', options: ['有没有', '是不是', '能不能', '行不行'] },
        { question: '你们 ___ 想过去哪儿？', answer: '有没有', options: ['有没有', '是不是', '能不能', '会不会'] },
        { question: '你 ___ 告诉老师？', answer: '有没有', options: ['有没有', '是不是', '能不能', '会不会'] },
        { question: '他 ___ 来过这里？', answer: '有没有', options: ['有没有', '是不是', '会不会', '能能'] }
      ]
    },
    {
      id: 'g113',
      title: '多少 vs 几',
      titleMeaning: '多少 vs 几 for asking quantities',
      level: 'HSK 1',
      category: 'Questions',
      commonMistake: '几 expects answer <10 and MUST have a measure word. 多少 expects ≥10 and the measure word is optional.',
      pattern: '多少 + (Measure Word) + Noun？ | 几 + Measure Word + Noun？',
      explanation: '"多少"用于询问数量，预计答案大于10或不确定；"几"用于询问数量，预计答案小于10。注意"几"后必须加量词，"多少"后可加可不加。',
      examples: [
        { chinese: '你们班有多少学生？', pinyin: 'Nǐmen bān yǒu duōshao xuésheng?', meaning: 'How many students are in your class?' },
        { chinese: '你家有几口人？', pinyin: 'Nǐ jiā yǒu jǐ kǒu rén?', meaning: 'How many people are in your family?' },
        { chinese: '这件衣服多少钱？', pinyin: 'Zhè jiàn yīfu duōshao qián?', meaning: 'How much is this piece of clothing?' }
      ],
      practice: [
        { question: '你们家有 ___ 口人？(expected small number)', answer: '几', options: ['几', '多少', '什么', '怎么'] },
        { question: '这个苹果 ___ 钱？', answer: '多少', options: ['多少', '几', '什么', '怎么'] },
        { question: '你有 ___ 个兄弟姐妹？', answer: '几', options: ['几', '多少', '什么', '怎么'] },
        { question: '学校有 ___ 个学生？', answer: '多少', options: ['多少', '几', '什么', '怎么'] },
        { question: '今天星期 ___？', answer: '几', options: ['几', '多少', '什么', '怎么'] },
        { question: '这件衣服 ___ 钱？', answer: '多少', options: ['多少', '几', '什么', '怎么'] },
        { question: '你今年 ___ 岁了？', answer: '几', options: ['几', '多少', '什么', '怎么'] }
      ]
    },
    {
      id: 'g114',
      title: '怎么 vs 怎么样',
      titleMeaning: '怎么 (how/method) vs 怎么样 (how/state)',
      level: 'HSK 2',
      category: 'Questions',
      commonMistake: '怎么 asks \'how\' (method) or \'why\' (surprise). 怎么样 asks \'how\' (evaluation). \'你怎么去？\' = How do you go? vs \'你觉得怎么样？\' = What do you think?',
      pattern: '怎么 + Verb？ | Subject + 怎么样？',
      explanation: '"怎么"询问方式、方法或原因；"怎么样"询问状况、评价或征求意见。注意"怎么"多作状语修饰动词，"怎么样"多作谓语或补语。',
      examples: [
        { chinese: '怎么去火车站？', pinyin: 'Zěnme qù huǒchēzhàn?', meaning: 'How do I get to the train station?' },
        { chinese: '你觉得这件衣服怎么样？', pinyin: 'Nǐ juéde zhè jiàn yīfu zěnmeyàng?', meaning: 'What do you think of this clothing?' },
        { chinese: '你怎么不高兴？', pinyin: 'Nǐ zěnme bù gāoxìng?', meaning: 'Why are you unhappy?' }
      ],
      practice: [
        { question: '这个电影 ___？', answer: '怎么样', options: ['怎么样', '怎么', '什么', '为什么'] },
        { question: '你 ___ 知道我的名字？', answer: '怎么', options: ['怎么', '怎么样', '什么', '为什么'] },
        { question: '你觉得这个菜 ___？', answer: '怎么样', options: ['怎么样', '怎么', '什么', '为什么'] },
        { question: '___ 打开这个盒子？', answer: '怎么', options: ['怎么', '怎么样', '什么', '为什么'] },
        { question: '你最近 ___？', answer: '怎么样', options: ['怎么样', '怎么', '什么', '为什么'] },
        { question: '你 ___ 不去参加聚会？', answer: '怎么', options: ['怎么', '怎么样', '什么', '为什么'] },
        { question: '换这个工作 ___？', answer: '怎么样', options: ['怎么样', '怎么', '什么', '为什么'] }
      ]
    },
    {
      id: 'g115',
      title: '几点了',
      titleMeaning: 'Telling time with 几',
      level: 'HSK 1',
      category: 'Questions',
      commonMistake: '几 points to the hours slot. Don\'t forget 点 after the number. \'3钟\' is wrong; say \'三点\'.',
      pattern: '现在 + (是) + Number + 点 + Number + 分',
      explanation: '用"几"询问时刻。表达时间时用"点"表示整点，"分"表示分钟，"半"表示30分钟，"刻"表示15分钟。',
      examples: [
        { chinese: '现在几点了？', pinyin: 'Xiànzài jǐ diǎn le?', meaning: 'What time is it now?' },
        { chinese: '现在三点半。', pinyin: 'Xiànzài sān diǎn bàn.', meaning: 'It\'s three thirty.' },
        { chinese: '我八点一刻上课。', pinyin: 'Wǒ bā diǎn yí kè shàng kè.', meaning: 'I have class at a quarter past eight.' }
      ],
      practice: [
        { question: '现在 ___ 点了？', answer: '几', options: ['几', '多少', '什么', '怎么'] },
        { question: '现在两点 ___。', answer: '半', options: ['半', '分', '刻', '秒'] },
        { question: '你 ___ 点起床？', answer: '几', options: ['几', '多少', '什么', '怎么'] },
        { question: '会议 ___ 点开始？', answer: '几', options: ['几', '多少', '什么', '怎么'] },
        { question: '现在三点二十 ___。', answer: '分', options: ['分', '半', '秒', '刻'] },
        { question: '我七 ___ 半回家。', answer: '点', options: ['点', '时', '刻', '钟'] },
        { question: '电影 ___ 点结束？', answer: '几', options: ['几', '多少', '什么', '怎么'] }
      ]
    },
    {
      id: 'g116',
      title: 'Measure Words 量词基础',
      titleMeaning: 'Basic measure words (个、本、张、支)',
      level: 'HSK 1',
      category: 'Questions',
      commonMistake: 'Every number before a noun MUST have a measure word. \'三书\' is wrong — say \'三本书\'.',
      pattern: 'Number + Measure Word + Noun',
      explanation: '汉语中数词不能直接修饰名词，必须加量词。"个"是最通用的量词；"本"用于书、杂志等装订物；"张"用于平面物体；"支"用于笔、香烟等细长物体。',
      examples: [
        { chinese: '三个人', pinyin: 'sān ge rén', meaning: 'three people' },
        { chinese: '一本书', pinyin: 'yì běn shū', meaning: 'one book' },
        { chinese: '一张纸', pinyin: 'yì zhāng zhǐ', meaning: 'one sheet of paper' },
        { chinese: '一支笔', pinyin: 'yì zhī bǐ', meaning: 'one pen' }
      ],
      practice: [
        { question: '我买了一 ___ 书。', answer: '本', options: ['本', '张', '个', '支'] },
        { question: '桌子上有两 ___ 笔。', answer: '支', options: ['支', '本', '张', '个'] },
        { question: '教室里有一 ___ 地图。', answer: '张', options: ['张', '本', '个', '支'] },
        { question: '我有三 ___ 好朋友。', answer: '个', options: ['个', '本', '张', '支'] },
        { question: '请给我一 ___ 纸。', answer: '张', options: ['张', '本', '个', '支'] },
        { question: '图书馆里有五 ___ 杂志。', answer: '本', options: ['本', '张', '个', '支'] },
        { question: '他买了十 ___ 铅笔。', answer: '支', options: ['支', '本', '个', '张'] }
      ]
    },
    {
      id: 'g117',
      title: '太...了 — 过度表达',
      titleMeaning: '太...了 for excess',
      level: 'HSK 2',
      category: 'Questions',
      commonMistake: '太...了 ALWAYS needs 了 at the end. Without 了 the sentence feels incomplete.',
      pattern: '太 + Adjective + 了',
      explanation: '"太+形容词+了"表示程度过头，带有感叹语气。可以表示赞叹（太好了！）或不满（太贵了！）。不加"了"时语气不完整。',
      examples: [
        { chinese: '太好了！', pinyin: 'Tài hǎo le!', meaning: 'Great! / Excellent!' },
        { chinese: '这个菜太辣了。', pinyin: 'Zhè ge cài tài là le.', meaning: 'This dish is too spicy.' },
        { chinese: '今天太冷了。', pinyin: 'Jīntiān tài lěng le.', meaning: 'Today is too cold.' }
      ],
      practice: [
        { question: '这件衣服 ___ 贵 ___。', answer: '太了', options: ['太了', '很的', '真啊', '多呢'] },
        { question: '外面的风 ___ 大 ___。', answer: '太了', options: ['太了', '很的', '真啊', '多呢'] },
        { question: '今天 ___ 累 ___。', answer: '太了', options: ['太了', '很的', '真啊', '多呢'] },
        { question: '这道题 ___ 难 ___。', answer: '太了', options: ['太了', '很的', '真啊', '多呢'] },
        { question: '你的房间 ___ 乱 ___。', answer: '太了', options: ['太了', '很的', '真啊', '多呢'] },
        { question: '这个消息 ___ 好 ___。', answer: '太了', options: ['太了', '很的', '真啊', '多呢'] },
        { question: '地铁 ___ 挤 ___。', answer: '太了', options: ['太了', '很的', '真啊', '多呢'] }
      ]
    },
    {
      id: 'g118',
      title: '能 — 能力与可能',
      titleMeaning: '能 for ability and possibility',
      level: 'HSK 2',
      category: 'Questions',
      commonMistake: '能 is for environmental/conditional ability (can because nothing stops you). 会 is for learned skill. \'我能游泳\' = the pool is open; \'我会游泳\' = I learned how.',
      pattern: 'Subject + 能 + Verb Phrase',
      explanation: '"能"表示具备某种能力、条件允许或客观可能性。与"会"不同，"能"强调条件成熟或能力达到；"会"偏重通过学习掌握的技能。',
      examples: [
        { chinese: '我能说一点儿中文。', pinyin: 'Wǒ néng shuō yìdiǎnr Zhōngwén.', meaning: 'I can speak a little Chinese.' },
        { chinese: '明天你能来吗？', pinyin: 'Míngtiān nǐ néng lái ma?', meaning: 'Can you come tomorrow?' },
        { chinese: '这里不能抽烟。', pinyin: 'Zhèlǐ bù néng chōu yān.', meaning: 'You cannot smoke here.' }
      ],
      practice: [
        { question: '我感冒了，不 ___ 去上课。', answer: '能', options: ['能', '会', '可以', '想'] },
        { question: '你 ___ 吃辣的吗？', answer: '能', options: ['能', '会', '想', '要'] },
        { question: '他 ___ 用筷子吃饭。', answer: '能', options: ['能', '会', '想', '要'] },
        { question: '明天你 ___ 早点到吗？', answer: '能', options: ['能', '会', '想', '要'] },
        { question: '我腿疼，不 ___ 跑步。', answer: '能', options: ['能', '会', '想', '要'] },
        { question: '现在 ___ 走了吗？', answer: '能', options: ['能', '会', '想', '要'] },
        { question: '这里不 ___ 停车。', answer: '能', options: ['能', '会', '想', '要'] }
      ]
    },
    {
      id: 'g119',
      title: '会 — 技能与可能',
      titleMeaning: '会 for learned skills and future',
      level: 'HSK 2',
      category: 'Questions',
      commonMistake: '会 for \'will\' is a prediction, not a plan. \'我要去买东西\' = I\'m going shopping (plan). \'明天会下雨\' = It will rain (prediction).',
      pattern: 'Subject + 会 + Verb',
      explanation: '"会"有两个主要用法：①表示通过学习掌握的技能；②表示将来发生的可能性。第二种用法强调主观推测，常用于天气预报等语境。',
      examples: [
        { chinese: '我会说英语。', pinyin: 'Wǒ huì shuō Yīngyǔ.', meaning: 'I can speak English (learned skill).' },
        { chinese: '明天会下雨。', pinyin: 'Míngtiān huì xià yǔ.', meaning: 'It will rain tomorrow.' },
        { chinese: '他不会来。', pinyin: 'Tā bú huì lái.', meaning: 'He won\'t come.' }
      ],
      practice: [
        { question: '小孩子还 ___ 走路了。', answer: '会', options: ['会', '能', '可以', '想'] },
        { question: '你 ___ 游泳吗？', answer: '会', options: ['会', '能', '可以', '想'] },
        { question: '她 ___ 三种语言。', answer: '会', options: ['会', '能', '可以', '想'] },
        { question: '明天 ___ 下雨。', answer: '会', options: ['会', '能', '可以', '想'] },
        { question: '我不 ___ 开车。', answer: '会', options: ['会', '能', '可以', '想'] },
        { question: '他 ___ 做中国菜。', answer: '会', options: ['会', '能', '可以', '想'] },
        { question: '你觉得他会 ___ 吗？', answer: '来', options: ['来', '到', '走', '去'] }
      ]
    },

    // ============================================================
    // HSK 2–3 — Comparisons (g120–g129)
    // ============================================================
    {
      id: 'g120',
      title: '比字句 — 基本比较',
      titleMeaning: 'Basic comparison with 比',
      level: 'HSK 2',
      category: 'Comparisons',
      commonMistake: 'Never say \'A 比 B 不高\'. The negative of 比 is 没有, not 不比. \'我比他不高\' is wrong.',
      pattern: 'A + 比 + B + Adjective',
      explanation: '"比"是汉语最常用的比较介词。基本结构"A比B+形容词"表示A在某方面超过B。否定形式为"A没有B+形容词"或"A不比B+形容词"。前者侧重客观陈述，后者隐含反驳语气。',
      examples: [
        { chinese: '我比你高。', pinyin: 'Wǒ bǐ nǐ gāo.', meaning: 'I am taller than you.' },
        { chinese: '今天比昨天热。', pinyin: 'Jīntiān bǐ zuótiān rè.', meaning: 'Today is hotter than yesterday.' },
        { chinese: '他没有我高。', pinyin: 'Tā méiyǒu wǒ gāo.', meaning: 'He is not as tall as me.' }
      ],
      practice: [
        { question: '西瓜 ___ 苹果大。', answer: '比', options: ['比', '和', '跟', '像'] },
        { question: '她 ___ 我漂亮。', answer: '比', options: ['比', '和', '跟', '像'] },
        { question: '火车 ___ 汽车快。', answer: '比', options: ['比', '和', '跟', '像'] },
        { question: '今天 ___ 昨天热。', answer: '比', options: ['比', '和', '跟', '像'] },
        { question: '弟弟 ___ 哥哥高。', answer: '比', options: ['比', '和', '跟', '像'] },
        { question: '这件 ___ 那件便宜。', answer: '比', options: ['比', '和', '跟', '像'] },
        { question: '飞机 ___ 火车方便。', answer: '比', options: ['比', '和', '跟', '像'] }
      ]
    },
    {
      id: 'g121',
      title: '比字句 — 具体差别',
      titleMeaning: '比 with specific numerical differences',
      level: 'HSK 2',
      category: 'Comparisons',
      commonMistake: 'After adjective, add 得多/多了/一点儿 for specific degree. \'高得多\' = much taller; \'高一点儿\' = a bit taller.',
      pattern: 'A + 比 + B + Adjective + Number/Complement',
      explanation: '在"比"字句中的形容词后可加数量补语或程度补语来表示具体差异程度。常用"多了"、"一些"、"一点儿"、"得多"等。',
      examples: [
        { chinese: '我比他大三岁。', pinyin: 'Wǒ bǐ tā dà sān suì.', meaning: 'I am three years older than him.' },
        { chinese: '这条路比那条长多了。', pinyin: 'Zhè tiáo lù bǐ nà tiáo cháng duō le.', meaning: 'This road is much longer than that one.' },
        { chinese: '今天比昨天冷一点儿。', pinyin: 'Jīntiān bǐ zuótiān lěng yìdiǎnr.', meaning: 'Today is a bit colder than yesterday.' }
      ],
      practice: [
        { question: '姐姐 ___ 妹妹高五公分。', answer: '比', options: ['比', '和', '跟', '对'] },
        { question: '他 ___ 我大两岁。', answer: '比', options: ['比', '和', '跟', '对'] },
        { question: '这只猫 ___ 那只重三斤。', answer: '比', options: ['比', '和', '跟', '对'] },
        { question: '高铁 ___ 普通火车快多了。', answer: '比', options: ['比', '和', '跟', '对'] },
        { question: '他的中文 ___ 我好得多。', answer: '比', options: ['比', '和', '跟', '对'] },
        { question: '今天 ___ 昨天暖和一点儿。', answer: '比', options: ['比', '和', '跟', '对'] },
        { question: '我 ___ 你早到十分钟。', answer: '比', options: ['比', '和', '跟', '对'] }
      ]
    },
    {
      id: 'g122',
      title: '跟...一样',
      titleMeaning: '跟...一样 for equality',
      level: 'HSK 2',
      category: 'Comparisons',
      commonMistake: '跟...一样 can take an optional adjective at the end. Without adjective, it means \'the same.\' With adjective, it means \'as X as.\'',
      pattern: 'A + 跟 + B + 一样 (+ Adjective)',
      explanation: '"跟...一样"表示两者在某个方面相同。可单独使用表示"一样"，也可后加形容词表示在某方面的程度相同。否定用"跟...不一样"或"不跟...一样"。口语中"跟"可换成"和"。',
      examples: [
        { chinese: '我的书跟你的一样。', pinyin: 'Wǒ de shū gēn nǐ de yíyàng.', meaning: 'My book is the same as yours.' },
        { chinese: '他跟我一样高。', pinyin: 'Tā gēn wǒ yíyàng gāo.', meaning: 'He is as tall as me.' },
        { chinese: '这个跟那个不一样。', pinyin: 'Zhè ge gēn nà ge bù yíyàng.', meaning: 'This one is different from that one.' }
      ],
      practice: [
        { question: '他的年龄 ___ 我的一样大。', answer: '跟', options: ['跟', '比', '对', '从'] },
        { question: '你的包 ___ 我的不一样。', answer: '跟', options: ['跟', '比', '对', '从'] },
        { question: '这两种茶味道 ___。', answer: '一样', options: ['一样', '一起', '一般', '一定'] },
        { question: '儿子 ___ 爸爸一样高。', answer: '跟', options: ['跟', '比', '对', '从'] },
        { question: '这两件衣服 ___ 不一样？', answer: '跟', options: ['跟', '比', '对', '从'] },
        { question: '我 ___ 你一样喜欢看电影。', answer: '跟', options: ['跟', '比', '对', '从'] },
        { question: '这两台电脑价格 ___。', answer: '一样', options: ['一样', '一起', '一般', '一定'] }
      ]
    },
    {
      id: 'g123',
      title: '没有...那么（这么）',
      titleMeaning: '没有...那么 for negative comparison',
      level: 'HSK 3',
      category: 'Comparisons',
      commonMistake: '那么/这么 in negative 比 sentences indicates degree. 那么 for distant/thrid-person reference; 这么 for near/first-person.',
      pattern: 'A + 没有 + B + 那么/这么 + Adjective',
      explanation: '"没有...那么/这么"用于否定性比较，表示A在某个方面不如B。这是"比"字句最常见的否定形式。"那么"用于远指，"这么"用于近指。',
      examples: [
        { chinese: '我没有你那么高。', pinyin: 'Wǒ méiyǒu nǐ nàme gāo.', meaning: 'I\'m not as tall as you.' },
        { chinese: '北京没有上海那么热。', pinyin: 'Běijīng méiyǒu Shànghǎi nàme rè.', meaning: 'Beijing is not as hot as Shanghai.' },
        { chinese: '他们的房间没有我们的这么大。', pinyin: 'Tāmen de fángjiān méiyǒu wǒmen de zhème dà.', meaning: 'Their room is not as big as ours.' }
      ],
      practice: [
        { question: '这家饭店 ___ 那家好吃。', answer: '没有', options: ['没有', '不是', '不比', '不一样'] },
        { question: '我的手机 ___ 你的贵。', answer: '没有', options: ['没有', '不是', '不比', '不一样'] },
        { question: '他 ___ 我想象的那么老。', answer: '没有', options: ['没有', '不是', '不比', '不一样'] },
        { question: '这次考试 ___ 上次那么难。', answer: '没有', options: ['没有', '不是', '不比', '不一样'] },
        { question: '这个城市 ___ 北京那么大。', answer: '没有', options: ['没有', '不是', '不比', '不一样'] },
        { question: '他 ___ 我那么高。', answer: '没有', options: ['没有', '不是', '不比', '不一样'] },
        { question: '我 ___ 你跑得快。', answer: '没有', options: ['没有', '不是', '不比', '不一样'] }
      ]
    },
    {
      id: 'g124',
      title: '越来越...',
      titleMeaning: '越来越... for progressive change',
      level: 'HSK 3',
      category: 'Comparisons',
      commonMistake: '越来越 is a fixed pattern — the two 越 are together. Don\'t confuse with 越...越... which uses two separate verbs/adjectives.',
      pattern: 'Subject + 越来越 + Adjective/Verb',
      explanation: '"越来越..."表示程度随着时间的推移而加深。"越...越..."的近义结构，但"越来越"后只需一个谓词成分即可。',
      examples: [
        { chinese: '天气越来越冷了。', pinyin: 'Tiānqì yuè lái yuè lěng le.', meaning: 'The weather is getting colder and colder.' },
        { chinese: '他的中文越来越好了。', pinyin: 'Tā de Zhōngwén yuè lái yuè hǎo le.', meaning: 'His Chinese is getting better and better.' },
        { chinese: '越来越多人用手机支付。', pinyin: 'Yuè lái yuè duō rén yòng shǒujī zhīfù.', meaning: 'More and more people use mobile payment.' }
      ],
      practice: [
        { question: '他跑步 ___ 快 ___。', answer: '越来越', options: ['越来越', '越越', '又又', '也也'] },
        { question: '天气 ___ 暖 ___ 了。', answer: '越来越', options: ['越来越', '越越', '又又', '也也'] },
        { question: '他 ___ 胖 ___ 了。', answer: '越来越', options: ['越来越', '越越', '又又', '也也'] },
        { question: '手机 ___ 便宜 ___ 了。', answer: '越来越', options: ['越来越', '越越', '又又', '也也'] },
        { question: '___ 多的人开始学习中文。', answer: '越来越', options: ['越来越', '越越', '又又', '也也'] },
        { question: '我 ___ 喜欢 ___ 这个城市。', answer: '越来越', options: ['越来越', '越越', '又又', '也也'] },
        { question: '功课 ___ 难 ___ 了。', answer: '越来越', options: ['越来越', '越越', '又又', '也也'] }
      ]
    },
    {
      id: 'g125',
      title: '越...越...',
      titleMeaning: '越...越... for correlative increase',
      level: 'HSK 3',
      category: 'Comparisons',
      commonMistake: '越...越... requires two different verbs/adjectives (one for each 越). \'越走越快\' = the more one walks, the faster. \'越来越快\' = getting faster and faster.',
      pattern: '越 + Verb/Adj + 越 + Verb/Adj',
      explanation: '"越A越B"表示B的程度随着A的变化而变化。前后两个"越"关联两个不同的动作或状态，体现出一种倚变关系。',
      examples: [
        { chinese: '他越跑越快。', pinyin: 'Tā yuè pǎo yuè kuài.', meaning: 'The more he runs, the faster he gets.' },
        { chinese: '你越说，我越不明白。', pinyin: 'Nǐ yuè shuō, wǒ yuè bù míngbai.', meaning: 'The more you explain, the less I understand.' },
        { chinese: '越早越好。', pinyin: 'Yuè zǎo yuè hǎo.', meaning: 'The earlier, the better.' }
      ],
      practice: [
        { question: '这本书 ___ 看 ___ 有意思。', answer: '越越', options: ['越越', '越来越', '又又', '也也'] },
        { question: '___ 往南走 ___ 暖和。', answer: '越越', options: ['越越', '越来越', '又又', '也也'] },
        { question: '东西 ___ 多 ___ 便宜。', answer: '越越', options: ['越越', '越来越', '又又', '也也'] },
        { question: '___ 着急 ___ 做不好。', answer: '越越', options: ['越越', '越来越', '又又', '也也'] },
        { question: '他 ___ 想 ___ 生气。', answer: '越越', options: ['越越', '越来越', '又又', '也也'] },
        { question: '___ 老 ___ 怕死。', answer: '越越', options: ['越越', '越来越', '又又', '也也'] },
        { question: '字 ___ 小 ___ 看不清楚。', answer: '越越', options: ['越越', '越来越', '又又', '也也'] }
      ]
    },
    {
      id: 'g126',
      title: '除了...以外',
      titleMeaning: '除了...以外 for inclusion/exclusion',
      level: 'HSK 3',
      category: 'Comparisons',
      commonMistake: '除了...都 excludes (everyone except). 除了...也/还 includes (besides, also). Pick the right adverb or you reverse the meaning.',
      pattern: '除了...（以外），也/还/都...',
      explanation: '"除了...以外"有两种基本用法：①后面用"也/还"表示加合（包括……还包括……）；②后面用"都"表示排他（不包括……）。"以外"可以省略。',
      examples: [
        { chinese: '除了中文以外，他还会说日语。', pinyin: 'Chúle Zhōngwén yǐwài, tā hái huì shuō Rìyǔ.', meaning: 'Besides Chinese, he can also speak Japanese.' },
        { chinese: '除了他，我们都去了。', pinyin: 'Chúle tā, wǒmen dōu qù le.', meaning: 'Except for him, we all went.' },
        { chinese: '除了看书，她也喜欢听音乐。', pinyin: 'Chúle kàn shū, tā yě xǐhuan tīng yīnyuè.', meaning: 'Besides reading, she also likes listening to music.' }
      ],
      practice: [
        { question: '___ 苹果 ___，我还买了香蕉。', answer: '除了以外', options: ['除了以外', '因为所以', '虽然但是', '如果就'] },
        { question: '___ 小李，大家 ___ 到了。', answer: '除了都', options: ['除了都', '因为也', '虽然还', '如果也'] },
        { question: '___ 打篮球 ___，他也喜欢踢足球。', answer: '除了以外', options: ['除了以外', '因为所以', '虽然但是', '如果就'] },
        { question: '___ 星期天 ___，我每天都要上班。', answer: '除了以外', options: ['除了以外', '因为所以', '虽然但是', '如果就'] },
        { question: '___ 他 ___，没有人知道这件事。', answer: '除了以外', options: ['除了以外', '因为所以', '虽然但是', '如果就'] },
        { question: '___ 唱歌，她 ___ 会跳舞。', answer: '除了还', options: ['除了还', '因为就', '虽然但', '如果就'] },
        { question: '___ 英语 ___，他还会说法语。', answer: '除了以外', options: ['除了以外', '因为所以', '虽然但是', '如果就'] }
      ]
    },
    {
      id: 'g127',
      title: '差不多 vs 几乎',
      titleMeaning: '差不多 vs 几乎 (almost/nearly)',
      level: 'HSK 4',
      category: 'Comparisons',
      commonMistake: '差不多 is colloquial and can stand alone as a predicate (\'差不多\'). 几乎 cannot stand alone and is more formal.',
      pattern: '差不多/几乎 + Number/Verb',
      explanation: '"差不多"和"几乎"都表示"相近、接近某个数量或状态"。"差不多"更口语化，可用于数量、程度、状态；"几乎"偏书面语，强调程度深，常有"差点儿"的意思。"差不多"可单独作谓语，"几乎"不能。',
      examples: [
        { chinese: '我差不多等了两个小时。', pinyin: 'Wǒ chàbuduō děng le liǎng ge xiǎoshí.', meaning: 'I waited for almost two hours.' },
        { chinese: '他几乎忘了这件事。', pinyin: 'Tā jīhū wàng le zhè jiàn shì.', meaning: 'He almost forgot about this matter.' },
        { chinese: '我们两个差不多高。', pinyin: 'Wǒmen liǎng ge chàbuduō gāo.', meaning: 'We two are about the same height.' }
      ],
      practice: [
        { question: '房间里 ___ 有五十个人。', answer: '差不多', options: ['差不多', '左右', '前后', '上下'] },
        { question: '他 ___ 迟到了一个钟头。', answer: '几乎', options: ['几乎', '差不多', '左右', '大概'] },
        { question: '我 ___ 把这件事忘了。', answer: '几乎', options: ['几乎', '差不多', '左右', '大概'] },
        { question: '这两个人长得 ___。', answer: '差不多', options: ['差不多', '左右', '前后', '上下'] },
        { question: '他 ___ 每天都要加班。', answer: '几乎', options: ['几乎', '差不多', '左右', '大概'] },
        { question: '我们 ___ 走到的时候，车开走了。', answer: '差不多', options: ['差不多', '左右', '前后', '上下'] },
        { question: '这次考试 ___ 都及格了。', answer: '差不多', options: ['差不多', '左右', '前后', '上下'] }
      ]
    },
    {
      id: 'g128',
      title: '左右 vs 前后',
      titleMeaning: '左右 vs 前后 for approximation',
      level: 'HSK 4',
      category: 'Comparisons',
      commonMistake: '左右 works after numbers and time amounts. 前后 works only after time points. \'三点左右\' is correct; \'三点前后\' sounds odd.',
      pattern: 'Number + 左右/前后',
      explanation: '"左右"用于数量、时间、年龄等的大概范围；"前后"用于时间点的前后范围。注意："左右"可在具体时刻后，"前后"只能在大致时间点后。',
      examples: [
        { chinese: '他三十岁左右。', pinyin: 'Tā sānshí suì zuǒyòu.', meaning: 'He is around thirty years old.' },
        { chinese: '春节前后火车票很难买。', pinyin: 'Chūnjié qiánhòu huǒchē piào hěn nán mǎi.', meaning: 'Train tickets around Spring Festival are hard to buy.' },
        { chinese: '三点左右我到。', pinyin: 'Sān diǎn zuǒyòu wǒ dào.', meaning: 'I\'ll arrive around three o\'clock.' }
      ],
      practice: [
        { question: '中秋节 ___，月饼很受欢迎。', answer: '前后', options: ['前后', '左右', '上下', '里外'] },
        { question: '这本书有三百页 ___。', answer: '左右', options: ['左右', '前后', '上下', '里外'] },
        { question: '他四十岁 ___。', answer: '左右', options: ['左右', '前后', '上下', '里外'] },
        { question: '春节 ___ 火车票很难买。', answer: '前后', options: ['前后', '左右', '上下', '里外'] },
        { question: '大约十点 ___ 到家。', answer: '左右', options: ['左右', '前后', '上下', '里外'] },
        { question: '元旦 ___ 商场有很多活动。', answer: '前后', options: ['前后', '左右', '上下', '里外'] },
        { question: '月薪八千块 ___。', answer: '左右', options: ['左右', '前后', '上下', '里外'] }
      ]
    },
    {
      id: 'g129',
      title: 'A比B + 更/还 + Adj',
      titleMeaning: '比 with degree adverbs 更/还',
      level: 'HSK 3',
      category: 'Comparisons',
      commonMistake: '更 is objective; 还 is subjective and often implies surprise. \'比我还高\' = even taller than me (wow, didn\'t expect that).',
      pattern: 'A + 比 + B + 更/还 + Adjective',
      explanation: '"比"字句中可用"更"或"还"加重比较语气。"更"表示程度加深，较客观；"还"带有主观夸张或反预期的意味，常用于口语。',
      examples: [
        { chinese: '她比她姐姐更漂亮。', pinyin: 'Tā bǐ tā jiějie gèng piàoliang.', meaning: 'She is even more beautiful than her sister.' },
        { chinese: '今天比昨天还冷。', pinyin: 'Jīntiān bǐ zuótiān hái lěng.', meaning: 'Today is even colder than yesterday.' },
        { chinese: '这个手机比那个还要贵。', pinyin: 'Zhè ge shǒujī bǐ nà ge hái yào guì.', meaning: 'This phone is even more expensive than that one.' }
      ],
      practice: [
        { question: '他的成绩比我 ___ 好。', answer: '更', options: ['更', '很', '真', '太'] },
        { question: '这个菜比那个 ___ 好吃。', answer: '更', options: ['更', '很', '真', '太'] },
        { question: '今天比昨天 ___ 冷。', answer: '还', options: ['还', '很', '真', '太'] },
        { question: '她比模特 ___ 漂亮。', answer: '还', options: ['还', '很', '真', '太'] },
        { question: '这只狗比那只 ___ 可爱。', answer: '更', options: ['更', '很', '真', '太'] },
        { question: '这比我想的 ___ 要难。', answer: '还', options: ['还', '更', '很', '太'] },
        { question: '北京比广州 ___ 干燥。', answer: '更', options: ['更', '还', '很', '真'] }
      ]
    },

    // ============================================================
    // HSK 3 — Complements (g130–g139)
    // ============================================================
    {
      id: 'g130',
      title: '结果补语 — V + 到',
      titleMeaning: 'Result complement with 到',
      level: 'HSK 3',
      category: 'Complements',
      commonMistake: 'V+到 requires the action to succeed. \'找\' = to look for; \'找到\' = to find. Negate potential with \'V不到\' or \'没V到\'.',
      pattern: 'Verb + 到 + (Object)',
      explanation: '结果补语"到"表示动作达到了目的、结果或某一点。搭配动词"找、看、听、买"等，表示动作成功实现或感知到某物。',
      examples: [
        { chinese: '我找到了钥匙。', pinyin: 'Wǒ zhǎo dào le yàoshi.', meaning: 'I found the keys.' },
        { chinese: '你看到那只猫了吗？', pinyin: 'Nǐ kàn dào nà zhī māo le ma?', meaning: 'Did you see that cat?' },
        { chinese: '他买到了票。', pinyin: 'Tā mǎi dào le piào.', meaning: 'He managed to buy the tickets.' }
      ],
      practice: [
        { question: '听不 ___ 你说什么。', answer: '到', options: ['到', '完', '见', '了'] },
        { question: '我终于找 ___ 了工作。', answer: '到', options: ['到', '完', '见', '好'] },
        { question: '你看 ___ 天上的星星了吗？', answer: '到', options: ['到', '完', '见', '好'] },
        { question: '太晚了，买不 ___ 票了。', answer: '到', options: ['到', '完', '见', '好'] },
        { question: '我听 ___ 有人在敲门。', answer: '到', options: ['到', '完', '见', '好'] },
        { question: '找不 ___ 更好的办法。', answer: '到', options: ['到', '完', '见', '好'] },
        { question: '没想 ___ 是你！', answer: '到', options: ['到', '完', '见', '好'] }
      ]
    },
    {
      id: 'g131',
      title: '结果补语 — V + 完',
      titleMeaning: 'Result complement with 完 (finish)',
      level: 'HSK 3',
      category: 'Complements',
      commonMistake: '完 means complete consumption or finishing. \'吃完\' = eat it all up. Don\'t use 到 when you mean completion.',
      pattern: 'Verb + 完 + Object',
      explanation: '结果补语"完"表示动作完成、结束，宾语所指事物被消耗完毕或动作进行到底。极其常用。',
      examples: [
        { chinese: '我吃完饭了。', pinyin: 'Wǒ chī wán fàn le.', meaning: 'I finished eating.' },
        { chinese: '你看完这本书了吗？', pinyin: 'Nǐ kàn wán zhè běn shū le ma?', meaning: 'Have you finished reading this book?' },
        { chinese: '钱花完了。', pinyin: 'Qián huā wán le.', meaning: 'The money has all been spent.' }
      ],
      practice: [
        { question: '作业做 ___ 了吗？', answer: '完', options: ['完', '到', '好', '会'] },
        { question: '你喝 ___ 牛奶了吗？', answer: '完', options: ['完', '到', '好', '成'] },
        { question: '这本书我看了三天才看 ___。', answer: '完', options: ['完', '到', '好', '成'] },
        { question: '钱花 ___ 了，不能再买了。', answer: '完', options: ['完', '到', '好', '成'] },
        { question: '等我写 ___ 作业再去玩。', answer: '完', options: ['完', '到', '好', '成'] },
        { question: '你吃 ___ 饭再走吧。', answer: '完', options: ['完', '到', '好', '成'] },
        { question: '用 ___ 别忘了关机器。', answer: '完', options: ['完', '到', '好', '成'] }
      ]
    },
    {
      id: 'g132',
      title: '结果补语 — V + 见',
      titleMeaning: 'Result complement with 见 (perceive)',
      level: 'HSK 3',
      category: 'Complements',
      commonMistake: '见 only works with perception verbs (看, 听, 闻, etc.). Don\'t use with action verbs like \'写\' or \'吃\'.',
      pattern: 'Verb + 见 + Object',
      explanation: '结果补语"见"表示通过感官感知到某事物，常用于感官动词"看"和"听"之后。其他动词如"闻"也可搭配。',
      examples: [
        { chinese: '我看见他了。', pinyin: 'Wǒ kàn jiàn tā le.', meaning: 'I saw him.' },
        { chinese: '你听见什么声音了吗？', pinyin: 'Nǐ tīng jiàn shénme shēngyīn le ma?', meaning: 'Did you hear any sound?' },
        { chinese: '我闻见了花香。', pinyin: 'Wǒ wén jiàn le huā xiāng.', meaning: 'I smelled the fragrance of flowers.' }
      ],
      practice: [
        { question: '他在教室，你看 ___ 了吗？', answer: '见', options: ['见', '到', '完', '过'] },
        { question: '我闻 ___ 了饭菜的香味。', answer: '见', options: ['见', '到', '完', '好'] },
        { question: '听不 ___ 手机铃声。', answer: '见', options: ['见', '到', '完', '好'] },
        { question: '我看 ___ 一只猫在树上。', answer: '见', options: ['见', '到', '完', '好'] },
        { question: '外面太吵，我听不 ___ 你说话。', answer: '见', options: ['见', '到', '完', '好'] },
        { question: '你看 ___ 黑板上的字吗？', answer: '见', options: ['见', '到', '完', '好'] },
        { question: '进门就闻 ___ 了咖啡的味道。', answer: '见', options: ['见', '到', '完', '好'] }
      ]
    },
    {
      id: 'g133',
      title: '结果补语 — V + 好',
      titleMeaning: 'Result complement with 好 (ready/satisfactory)',
      level: 'HSK 3',
      category: 'Complements',
      commonMistake: '好 implies a satisfactory or ready result. \'做好\' = done well/ready. \'做完\' = simply finished (neutral).',
      pattern: 'Verb + 好 (+ Object)',
      explanation: '结果补语"好"表示动作完成并达到令人满意的状态。与"完"不同，"好"暗含结果良好、准备就绪的意思。',
      examples: [
        { chinese: '饭做好了。', pinyin: 'Fàn zuò hǎo le.', meaning: 'The meal is ready.' },
        { chinese: '你准备好了吗？', pinyin: 'Nǐ zhǔnbèi hǎo le ma?', meaning: 'Are you ready?' },
        { chinese: '请坐好。', pinyin: 'Qǐng zuò hǎo.', meaning: 'Please sit properly.' }
      ],
      practice: [
        { question: '行李收拾 ___ 了吗？', answer: '好', options: ['好', '完', '到', '会'] },
        { question: '你做 ___ 决定了吗？', answer: '好', options: ['好', '完', '到', '成'] },
        { question: '桌子摆 ___ 了，可以吃饭了。', answer: '好', options: ['好', '完', '到', '成'] },
        { question: '衣服还没洗 ___。', answer: '好', options: ['好', '完', '到', '成'] },
        { question: '你订 ___ 酒店了吗？', answer: '好', options: ['好', '完', '到', '成'] },
        { question: '坐 ___，别动！', answer: '好', options: ['好', '完', '到', '成'] },
        { question: '文件已经打印 ___ 了。', answer: '好', options: ['好', '完', '到', '成'] }
      ]
    },
    {
      id: 'g134',
      title: '趋向补语 — 起来',
      titleMeaning: 'Directional complement 起来 (up/start)',
      level: 'HSK 3',
      category: 'Complements',
      commonMistake: '起来 as complement can mean UP (physical), START (metaphorical), or COLLECT. Context determines which. \'想起来\' = remember (metaphorical emerge).',
      pattern: 'Verb + 起来',
      explanation: '复合趋向补语"起来"有三个核心用法：①表示由低到高的动作（站起来）；②表示动作开始并继续（笑起来）；③表示从分散到聚合（收起来）。引申义还可表示"当……的时候"。',
      examples: [
        { chinese: '他站起来了。', pinyin: 'Tā zhàn qǐlai le.', meaning: 'He stood up.' },
        { chinese: '大家都笑起来了。', pinyin: 'Dàjiā dōu xiào qǐlai le.', meaning: 'Everyone started laughing.' },
        { chinese: '把东西收起来。', pinyin: 'Bǎ dōngxi shōu qǐlai.', meaning: 'Put the things away.' }
      ],
      practice: [
        { question: '天气慢慢暖和 ___ 了。', answer: '起来', options: ['起来', '下来', '下去', '出来'] },
        { question: '老师叫我们站 ___ 回答问题。', answer: '起来', options: ['起来', '上来', '下去', '回去'] },
        { question: '我想 ___ 了，他叫张伟。', answer: '起来', options: ['起来', '出来', '上来', '下来'] },
        { question: '把书收 ___ 吧。', answer: '起来', options: ['起来', '进去', '出去', '过来'] },
        { question: '小朋友听到音乐就跳了 ___。', answer: '起来', options: ['起来', '下去', '过来', '上去'] },
        { question: '说 ___ 容易，做起来难。', answer: '起来', options: ['起来', '出来', '上来', '下来'] },
        { question: '雨下 ___ 了。', answer: '起来', options: ['起来', '下去', '过来', '出来'] }
      ]
    },
    {
      id: 'g135',
      title: '趋向补语 — 下去',
      titleMeaning: 'Directional complement 下去 (down/continue)',
      level: 'HSK 3',
      category: 'Complements',
      commonMistake: '下去 means \'continue on\' for actions already under way. Don\'t use for starting something new — that\'s 起来.',
      pattern: 'Verb + 下去',
      explanation: '复合趋向补语"下去"有两个核心用法：①表示由高到低的动作（走下去）；②表示动作继续进行（坚持下去）。第二种用法非常常见，表示继续正在进行的事情。',
      examples: [
        { chinese: '他从楼上走下去。', pinyin: 'Tā cóng lóu shang zǒu xiàqu.', meaning: 'He walked downstairs.' },
        { chinese: '请说下去。', pinyin: 'Qǐng shuō xiàqu.', meaning: 'Please continue speaking.' },
        { chinese: '这么好的天气不会一直持续下去。', pinyin: 'Zhème hǎo de tiānqì bú huì yìzhí chíxù xiàqu.', meaning: 'Such good weather won\'t last forever.' }
      ],
      practice: [
        { question: '坚持 ___ 就是胜利。', answer: '下去', options: ['下去', '上去', '起来', '出来'] },
        { question: '请继续说 ___，我听着呢。', answer: '下去', options: ['下去', '上来', '起来', '回来'] },
        { question: '学中文一定要坚持学 ___。', answer: '下去', options: ['下去', '上去', '起来', '出来'] },
        { question: '再这么胖 ___ 可不行。', answer: '下去', options: ['下去', '起来', '过来', '出去'] },
        { question: '他躺 ___ 休息一会儿。', answer: '下来', options: ['下来', '下去', '上来', '进去'] },
        { question: '把这杯水喝 ___。', answer: '下去', options: ['下去', '上来', '进来', '回去'] },
        { question: '十年坚持 ___，终于成功了。', answer: '下来', options: ['下来', '下去', '起来', '过来'] }
      ]
    },
    {
      id: 'g136',
      title: '趋向补语 — 出来',
      titleMeaning: 'Directional complement 出来 (out/emerge)',
      level: 'HSK 3',
      category: 'Complements',
      commonMistake: '出来 can mean \'out\' (physical) or \'recognize/discern\' (metaphorical). \'认出来\' = recognize; \'写出来\' = write out.',
      pattern: 'Verb + 出来',
      explanation: '复合趋向补语"出来"表示动作由内到外，或由隐蔽到显现。引申义表示辨认、识别出某事物的结果。',
      examples: [
        { chinese: '他从房间里走出来了。', pinyin: 'Tā cóng fángjiān li zǒu chūlai le.', meaning: 'He walked out of the room.' },
        { chinese: '我听出来是你的声音。', pinyin: 'Wǒ tīng chūlai shì nǐ de shēngyīn.', meaning: 'I recognized it was your voice.' },
        { chinese: '这首诗是他写出来的。', pinyin: 'Zhè shǒu shī shì tā xiě chūlai de.', meaning: 'This poem was written by him.' }
      ],
      practice: [
        { question: '我看 ___ 这是个骗局。', answer: '出来', options: ['出来', '起来', '下去', '上来'] },
        { question: '他从包里拿 ___ 一本书。', answer: '出来', options: ['出来', '起来', '下去', '上来'] },
        { question: '你能认 ___ 这个字吗？', answer: '出来', options: ['出来', '起来', '下去', '上来'] },
        { question: '太阳从云后面露 ___ 了。', answer: '出来', options: ['出来', '起来', '下去', '上来'] },
        { question: '你的声音我一听就听 ___ 了。', answer: '出来', options: ['出来', '起来', '下去', '上来'] },
        { question: '他想 ___ 一个好办法。', answer: '出来', options: ['出来', '起来', '下去', '上来'] },
        { question: '照片洗 ___ 了。', answer: '出来', options: ['出来', '起来', '下去', '上来'] }
      ]
    },
    {
      id: 'g137',
      title: '程度补语 — V + 得 + Adj',
      titleMeaning: 'Degree complement with 得',
      level: 'HSK 3',
      category: 'Complements',
      commonMistake: 'V+得+Adj: the complement describes RESULT, not manner. \'跑得快\' = runs fast (result); \'快跑\' = run quickly (manner).',
      pattern: 'Verb + 得 + (Adverb) + Adjective',
      explanation: '程度补语用于说明动作达到的程度或状态。结构为"动词+得+形容词"。否定形式"动词+得+不+形容词"。带宾语时需重复动词或提前宾语。',
      examples: [
        { chinese: '他跑得很快。', pinyin: 'Tā pǎo de hěn kuài.', meaning: 'He runs very fast.' },
        { chinese: '她汉字写得很漂亮。', pinyin: 'Tā hànzì xiě de hěn piàoliang.', meaning: 'She writes Chinese characters beautifully.' },
        { chinese: '我累得说不出话。', pinyin: 'Wǒ lèi de shuō bù chū huà.', meaning: 'I\'m so tired I can\'t speak.' }
      ],
      practice: [
        { question: '他唱歌唱 ___ 很好听。', answer: '得', options: ['得', '的', '地', '了'] },
        { question: '她跳舞跳 ___ 很美。', answer: '得', options: ['得', '的', '地', '了'] },
        { question: '弟弟跑 ___ 比哥哥快。', answer: '得', options: ['得', '的', '地', '了'] },
        { question: '我热 ___ 满头大汗。', answer: '得', options: ['得', '的', '地', '了'] },
        { question: '他说 ___ 太快了，我听不懂。', answer: '得', options: ['得', '的', '地', '了'] },
        { question: '这个孩子笑 ___ 很开心。', answer: '得', options: ['得', '的', '地', '了'] },
        { question: '他忙 ___ 连饭都忘了吃。', answer: '得', options: ['得', '的', '地', '了'] }
      ]
    },
    {
      id: 'g138',
      title: '可能补语 — V + 得/不 + 了',
      titleMeaning: 'Potential complement with 得/不了',
      level: 'HSK 3',
      category: 'Complements',
      commonMistake: 'V不了 = can\'t do (capacity/circumstance). NOT the same as 没V which means didn\'t do. \'吃不了\' = I can\'t eat more; \'没吃\' = I didn\'t eat.',
      pattern: 'Verb + 得/不 + 了 (liǎo)',
      explanation: '可能补语"V得了"表示有能力或条件完成某动作；"V不了"表示没有能力或条件。泛指能力、容量或可能性。',
      examples: [
        { chinese: '这么多菜我吃不了。', pinyin: 'Zhème duō cài wǒ chī bù liǎo.', meaning: 'I can\'t eat this much food.' },
        { chinese: '明天你去得了吗？', pinyin: 'Míngtiān nǐ qù de liǎo ma?', meaning: 'Can you go tomorrow?' },
        { chinese: '这件事我一个人做不了。', pinyin: 'Zhè jiàn shì wǒ yí ge rén zuò bù liǎo.', meaning: 'I can\'t do this alone.' }
      ],
      practice: [
        { question: '这么多工作，我一个人干 ___。', answer: '不了', options: ['不了', '不完', '不到', '不好'] },
        { question: '你一个人搬 ___ 这张桌子吗？', answer: '得了', options: ['得了', '完了', '到了', '好了'] },
        { question: '这双鞋太小，我穿 ___。', answer: '不了', options: ['不了', '不好', '不完', '不到'] },
        { question: '明天的事谁也说 ___。', answer: '不了', options: ['不了', '不好', '不完', '不到'] },
        { question: '这么多书，我一天看不 ___。', answer: '了', options: ['了', '完', '到', '好'] },
        { question: '这点小事，我一个人做 ___。', answer: '得了', options: ['得了', '完了', '到了', '好了'] },
        { question: '他病得很重，可能来 ___ 了。', answer: '不了', options: ['不了', '不到', '不好', '不完'] }
      ]
    },
    {
      id: 'g139',
      title: '可能补语 — V + 得/不 + 动',
      titleMeaning: 'Potential complement with 得/不动',
      level: 'HSK 3',
      category: 'Complements',
      commonMistake: 'V+不动 = can\'t physically do it (tired/weak). Different from V不了 which covers all inability types. \'走不动\' = feet hurt; \'去不了\' = schedule conflict.',
      pattern: 'Verb + 得/不 + 动',
      explanation: '"V得动"表示有能力移动或承载；"V不动"表示没力气或无法移动。常用于"拿、搬、走、跑"等动作动词。',
      examples: [
        { chinese: '这个箱子太重，我拿不动。', pinyin: 'Zhè ge xiāngzi tài zhòng, wǒ ná bú dòng.', meaning: 'This box is too heavy, I can\'t carry it.' },
        { chinese: '我累得走不动了。', pinyin: 'Wǒ lèi de zǒu bú dòng le.', meaning: 'I\'m so tired I can\'t walk anymore.' },
        { chinese: '你搬得动这张桌子吗？', pinyin: 'Nǐ bān de dòng zhè zhāng zhuōzi ma?', meaning: 'Can you move this table?' }
      ],
      practice: [
        { question: '吃完饭以后，我站都站 ___ 了。', answer: '不动', options: ['不动', '不起', '不了', '不下'] },
        { question: '这个沙发太重，我搬 ___。', answer: '不动', options: ['不动', '不起', '不了', '不下'] },
        { question: '走了十公里，我已经走 ___ 了。', answer: '不动', options: ['不动', '不到', '不了', '不起'] },
        { question: '你拿 ___ 这个箱子吗？', answer: '得动', options: ['得动', '得了', '得到', '得完'] },
        { question: '我太累了，爬 ___ 楼梯了。', answer: '不动', options: ['不动', '不了', '不起', '不到'] },
        { question: '这袋米五十公斤，谁也拿 ___。', answer: '不动', options: ['不动', '不起', '不了', '不下'] },
        { question: '你开了一天车，开 ___ 了吧？', answer: '不动', options: ['不动', '不起', '不了', '不下'] }
      ]
    },

    // ============================================================
    // HSK 3 — 把 & 被 Constructions (g140–g144)
    // ============================================================
    {
      id: 'g140',
      title: '把字句 — 基本结构',
      titleMeaning: '把 construction basics',
      level: 'HSK 3',
      category: 'BaBei',
      commonMistake: '把 sentence requires: (1) definite object, (2) verb with complement/了, (3) verb that disposes of the object. \'我把书看\' is incomplete — need result.',
      pattern: 'Subject + 把 + Object + Verb + Complement',
      explanation: '"把"字句是汉语最具特色的句式之一，强调对宾语的处置和影响。宾语必须是有定的。动词不能单独使用，必须有补语、了或其他成分。核心语义：主语通过动作使宾语发生某种变化。',
      examples: [
        { chinese: '我把书放在桌子上了。', pinyin: 'Wǒ bǎ shū fàng zài zhuōzi shang le.', meaning: 'I put the book on the table.' },
        { chinese: '请把门打开。', pinyin: 'Qǐng bǎ mén dǎ kāi.', meaning: 'Please open the door.' },
        { chinese: '他把杯子打破了。', pinyin: 'Tā bǎ bēizi dǎ pò le.', meaning: 'He broke the cup.' }
      ],
      practice: [
        { question: '请 ___ 窗户关上。', answer: '把', options: ['把', '被', '让', '给'] },
        { question: '___ 衣服洗干净。', answer: '把', options: ['把', '被', '让', '给'] },
        { question: '他 ___ 作业做完了。', answer: '把', options: ['把', '被', '让', '给'] },
        { question: '别 ___ 东西弄坏了。', answer: '把', options: ['把', '被', '让', '给'] },
        { question: '我 ___ 钱花光了。', answer: '把', options: ['把', '被', '让', '给'] },
        { question: '请 ___ 空调打开。', answer: '把', options: ['把', '被', '让', '给'] },
        { question: '弟弟 ___ 杯子打破了。', answer: '把', options: ['把', '被', '让', '给'] }
      ]
    },
    {
      id: 'g141',
      title: '把字句 — V + 给',
      titleMeaning: '把 with 给 (transfer to someone)',
      level: 'HSK 3',
      category: 'BaBei',
      commonMistake: 'V+给 in 把 sentences emphasizes transfer. NOT all 把 sentences need 给 — only those involving giving/handing over.',
      pattern: 'Subject + 把 + Object + Verb + 给 + Recipient',
      explanation: '"把...V给..."强调将某物通过动作传递/转交给某人。常见动词：送、交、递、寄、卖、介绍等。',
      examples: [
        { chinese: '我把礼物送给她了。', pinyin: 'Wǒ bǎ lǐwù sòng gěi tā le.', meaning: 'I gave the gift to her.' },
        { chinese: '请把作业交给老师。', pinyin: 'Qǐng bǎ zuòyè jiāo gěi lǎoshī.', meaning: 'Please hand in your homework to the teacher.' },
        { chinese: '他把车卖给了一个朋友。', pinyin: 'Tā bǎ chē mài gěi le yí ge péngyou.', meaning: 'He sold the car to a friend.' }
      ],
      practice: [
        { question: '我把钱递 ___ 了售票员。', answer: '给', options: ['给', '到', '在', '去'] },
        { question: '她把花送 ___ 了妈妈。', answer: '给', options: ['给', '到', '在', '去'] },
        { question: '请把作业交 ___ 老师。', answer: '给', options: ['给', '到', '在', '去'] },
        { question: '我把票寄 ___ 你了。', answer: '给', options: ['给', '到', '在', '去'] },
        { question: '他把房子卖 ___ 了一个商人。', answer: '给', options: ['给', '到', '在', '去'] },
        { question: '我把她介绍 ___ 了我的朋友。', answer: '给', options: ['给', '到', '在', '去'] },
        { question: '请把这封信交 ___ 经理。', answer: '给', options: ['给', '到', '在', '去'] }
      ]
    },
    {
      id: 'g142',
      title: '把字句 — V + 成',
      titleMeaning: '把 with 成 (transform into)',
      level: 'HSK 3',
      category: 'BaBei',
      commonMistake: '把...V成... can express transformation OR mistaken perception. \'写成太\' = mistakenly wrote as 太; \'翻译成英文\' = translate into English.',
      pattern: 'Subject + 把 + Object + Verb + 成 + Result',
      explanation: '"把...V成..."表示通过动作使事物A变成事物B或状态B。强调处置的结果是一种转变或误认。',
      examples: [
        { chinese: '他把这本书翻译成了英文。', pinyin: 'Tā bǎ zhè běn shū fānyì chéng le Yīngwén.', meaning: 'He translated this book into English.' },
        { chinese: '人们把长城看成是中国的象征。', pinyin: 'Rénmen bǎ Chángchéng kàn chéng shì Zhōngguó de xiàngzhēng.', meaning: 'People see the Great Wall as a symbol of China.' },
        { chinese: '我把"大"写成了"太"。', pinyin: 'Wǒ bǎ "dà" xiě chéng le "tài".', meaning: 'I wrote "大" as "太" by mistake.' }
      ],
      practice: [
        { question: '别把好 ___ 坏。', answer: '意当', options: ['意当', '事做', '话说', '字写'] },
        { question: '不要把钱看 ___ 最重要的东西。', answer: '成', options: ['成', '作', '是', '了'] },
        { question: '他把"土"写 ___ 了"士"。', answer: '成', options: ['成', '了', '完', '好'] },
        { question: '请把这篇文章翻译 ___ 英文。', answer: '成', options: ['成', '了', '得', '好'] },
        { question: '千万别把梦当 ___ 现实。', answer: '成', options: ['成', '了', '到', '好'] },
        { question: '她把旧衣服改 ___ 了书包。', answer: '成', options: ['成', '了', '完', '好'] },
        { question: '我把水烧 ___ 了开水。', answer: '成', options: ['成', '了', '完', '好'] }
      ]
    },
    {
      id: 'g143',
      title: '被字句 — 基本被动',
      titleMeaning: '被 passive construction - basic',
      level: 'HSK 3',
      category: 'BaBei',
      commonMistake: '被 sentences don\'t require the agent. \'饭被吃了\' = the food was eaten (by someone unspecified). Often used for negative/unwelcome events.',
      pattern: 'Patient + 被 (+ Agent) + Verb + Complement',
      explanation: '"被"字句是汉语被动句的主要形式，表示被动者遭受或经历某一动作。施事可以省略。"被"多用于不如意的事情，但现代汉语使用范围扩大。"叫/让"在口语中可替代"被"。',
      examples: [
        { chinese: '我的自行车被偷了。', pinyin: 'Wǒ de zìxíngchē bèi tōu le.', meaning: 'My bicycle was stolen.' },
        { chinese: '他被老师批评了。', pinyin: 'Tā bèi lǎoshī pīpíng le.', meaning: 'He was criticized by the teacher.' },
        { chinese: '窗户被风吹开了。', pinyin: 'Chuānghu bèi fēng chuī kāi le.', meaning: 'The window was blown open by the wind.' }
      ],
      practice: [
        { question: '蛋糕 ___ 谁吃了？', answer: '被', options: ['被', '把', '让', '叫'] },
        { question: '钱包 ___ 小偷偷走了。', answer: '被', options: ['被', '把', '给', '让'] },
        { question: '他的手机 ___ 摔坏了。', answer: '被', options: ['被', '把', '给', '对'] },
        { question: '书 ___ 朋友借走了。', answer: '被', options: ['被', '把', '给', '对'] },
        { question: '树 ___ 风刮倒了。', answer: '被', options: ['被', '把', '给', '对'] },
        { question: '他 ___ 公司开除了。', answer: '被', options: ['被', '把', '给', '对'] },
        { question: '门 ___ 锁上了。', answer: '被', options: ['被', '把', '给', '让'] }
      ]
    },
    {
      id: 'g144',
      title: '叫/让 — 口语被动',
      titleMeaning: '叫/让 passive in spoken Chinese',
      level: 'HSK 3',
      category: 'BaBei',
      commonMistake: '叫/让 as passive MUST include the agent — can\'t omit like 被. \'钱包叫偷了\' is wrong; must say \'钱包叫小偷偷了\'.',
      pattern: 'Patient + 叫/让 + Agent + Verb + Complement',
      explanation: '"叫"和"让"在口语中可替代"被"表被动，但必须引出施事者，不能省略。北方口语偏"叫"，南方口语偏"让"。注意这两个词也有使役用法，需根据上下文区分。',
      examples: [
        { chinese: '我的笔叫他借走了。', pinyin: 'Wǒ de bǐ jiào tā jiè zǒu le.', meaning: 'My pen was borrowed by him.' },
        { chinese: '衣服让雨淋湿了。', pinyin: 'Yīfu ràng yǔ lín shī le.', meaning: 'The clothes got wet from the rain.' },
        { chinese: '别让人看见了。', pinyin: 'Bié ràng rén kàn jiàn le.', meaning: 'Don\'t let people see it.' }
      ],
      practice: [
        { question: '杯子 ___ 弟弟打碎了。', answer: '让', options: ['让', '把', '对', '为'] },
        { question: '自行车 ___ 人偷走了。', answer: '叫', options: ['叫', '把', '对', '为'] },
        { question: '饭 ___ 狗吃了。', answer: '让', options: ['让', '把', '对', '为'] },
        { question: '我的衣服 ___ 雨淋湿了。', answer: '叫', options: ['叫', '把', '对', '为'] },
        { question: '别 ___ 老师知道了。', answer: '让', options: ['让', '把', '对', '为'] },
        { question: '电脑 ___ 他弄坏了。', answer: '叫', options: ['叫', '把', '对', '为'] },
        { question: '包子 ___ 我吃完了。', answer: '让', options: ['让', '把', '对', '为'] }
      ]
    },

    // ============================================================
    // HSK 3–4 — Aspect & Modality (g145–g154)
    // ============================================================
    {
      id: 'g145',
      title: '着 — 持续状态',
      titleMeaning: '着 for ongoing states',
      level: 'HSK 3',
      category: 'Aspect',
      commonMistake: '着 is for states/ongoing conditions. Don\'t use for habitual actions (\'每天穿着\' is wrong for habitual \'wears every day\').',
      pattern: 'Verb + 着 (+ Object)',
      explanation: '动态助词"着"表示动作或状态的持续。可用于：①动作进行中；②状态的持续（门开着呢）；③两个动作同时进行（V1着V2）。注意静态动词（在、有、是、像等）一般不加"着"。',
      examples: [
        { chinese: '门开着呢。', pinyin: 'Mén kāi zhe ne.', meaning: 'The door is open.' },
        { chinese: '他穿着一件红色外套。', pinyin: 'Tā chuān zhe yí jiàn hóngsè wàitào.', meaning: 'He is wearing a red jacket.' },
        { chinese: '她笑着说："你好！"', pinyin: 'Tā xiào zhe shuō: "Nǐ hǎo!"', meaning: 'She smiled and said, "Hello!"' }
      ],
      practice: [
        { question: '墙上挂 ___ 一幅画。', answer: '着', options: ['着', '了', '过', '在'] },
        { question: '他手里拿 ___ 一杯咖啡。', answer: '着', options: ['着', '了', '过', '在'] },
        { question: '她穿 ___ 一条蓝色的裙子。', answer: '着', options: ['着', '了', '过', '在'] },
        { question: '他躺 ___ 看电视。', answer: '着', options: ['着', '了', '过', '在'] },
        { question: '小狗趴 ___ 在地上。', answer: '着', options: ['着', '了', '过', '在'] },
        { question: '妈妈笑 ___ 说："你真棒！"', answer: '着', options: ['着', '了', '过', '在'] },
        { question: '灯一直亮 ___ 呢。', answer: '着', options: ['着', '了', '过', '在'] }
      ]
    },
    {
      id: 'g146',
      title: '在 — 进行态',
      titleMeaning: '在 for actions in progress',
      level: 'HSK 2',
      category: 'Aspect',
      commonMistake: '在 is for actions in progress RIGHT NOW. Not for general truths or habits. Compare with present continuous in English.',
      pattern: 'Subject + 在 + Verb (+ Object)',
      explanation: '"在"作为副词放在动词前，表示动作正在进行。可与"正"和"呢"搭配使用，加强进行语气。与"着"不同，"在"强调动作的进行过程。',
      examples: [
        { chinese: '我在吃饭。', pinyin: 'Wǒ zài chī fàn.', meaning: 'I am eating.' },
        { chinese: '外面在下雨。', pinyin: 'Wàimiàn zài xià yǔ.', meaning: 'It\'s raining outside.' },
        { chinese: '他正在看书呢。', pinyin: 'Tā zhèngzài kàn shū ne.', meaning: 'He is reading a book.' }
      ],
      practice: [
        { question: '妈妈 ___ 做饭。', answer: '在', options: ['在', '着', '了', '过'] },
        { question: '他 ___ 打电话。', answer: '在', options: ['在', '着', '了', '过'] },
        { question: '外面 ___ 下雪。', answer: '在', options: ['在', '着', '了', '过'] },
        { question: '我 ___ 听音乐呢。', answer: '在', options: ['在', '着', '了', '过'] },
        { question: '哥哥 ___ 打篮球。', answer: '在', options: ['在', '着', '了', '过'] },
        { question: '你 ___ 做什么呢？', answer: '在', options: ['在', '着', '了', '过'] },
        { question: '孩子们 ___ 睡觉呢。', answer: '在', options: ['在', '着', '了', '过'] }
      ]
    },
    {
      id: 'g147',
      title: '了 — 多种用法辨析',
      titleMeaning: '了 varieties: aspect vs modal',
      level: 'HSK 4',
      category: 'Aspect',
      commonMistake: '了 has TWO uses: verb-suffix (completed action) and sentence-final (change of state). Both can co-occur: \'我吃了饭了\' = I\'ve eaten (completed, new state).',
      pattern: 'Verb + 了 (aspect) | Sentence + 了 (modal)',
      explanation: '"了"分两个层面：①动态助词"了1"在动词后，表动作完成；②语气助词"了2"在句末，表情况变化或新信息出现。句中同时出现表示动作已完成且与现在有关。注意：否定已发生动作用"没（有）+V"，去掉"了"。',
      examples: [
        { chinese: '我买了三本书。', pinyin: 'Wǒ mǎi le sān běn shū.', meaning: 'I bought three books.' },
        { chinese: '他会说中文了。', pinyin: 'Tā huì shuō Zhōngwén le.', meaning: 'He can speak Chinese now (change of state).' },
        { chinese: '我没买那本书。', pinyin: 'Wǒ méi mǎi nà běn shū.', meaning: 'I didn\'t buy that book.' }
      ],
      practice: [
        { question: '我吃 ___ 饭了。', answer: '了', options: ['了', '着', '过', '的'] },
        { question: '他买 ___ 一件新衣服。', answer: '了', options: ['了', '着', '过', '的'] },
        { question: '我会开车 ___。', answer: '了', options: ['了', '着', '过', '的'] },
        { question: '她来 ___。', answer: '了', options: ['了', '着', '过', '的'] },
        { question: '你吃 ___ 早饭没有？', answer: '了', options: ['了', '着', '过', '的'] },
        { question: '天黑 ___，该回家了。', answer: '了', options: ['了', '着', '过', '的'] },
        { question: '我忘 ___ 带钱包。', answer: '了', options: ['了', '着', '过', '的'] }
      ]
    },
    {
      id: 'g148',
      title: '过 — 经验体',
      titleMeaning: '过 for past experiences',
      level: 'HSK 3',
      category: 'Aspect',
      commonMistake: '过 marks EXPERIENCE — you did it at least once before. Not for recent/specific past actions. \'我昨天看过电影\' is odd (use 了 for yesterday).',
      pattern: 'Subject + Verb + 过 + Object',
      explanation: '动态助词"过"表示过去曾经发生过某动作或状态，强调经历。否定用"没（有）+ 动词+过"。与"了"不同，"过"不涉及对现在的影响，纯粹谈经历。',
      examples: [
        { chinese: '我去过中国。', pinyin: 'Wǒ qù guo Zhōngguó.', meaning: 'I have been to China.' },
        { chinese: '你吃过中国菜吗？', pinyin: 'Nǐ chī guo Zhōngguó cài ma?', meaning: 'Have you ever eaten Chinese food?' },
        { chinese: '我没见过他。', pinyin: 'Wǒ méi jiàn guo tā.', meaning: 'I have never met him.' }
      ],
      practice: [
        { question: '你看 ___ 这部电影吗？', answer: '过', options: ['过', '了', '着', '完'] },
        { question: '我去 ___ 长城。', answer: '过', options: ['过', '了', '着', '完'] },
        { question: '你吃 ___ 四川火锅吗？', answer: '过', options: ['过', '了', '着', '完'] },
        { question: '我从来没见 ___ 熊猫。', answer: '过', options: ['过', '了', '着', '完'] },
        { question: '他学 ___ 三年法语。', answer: '过', options: ['过', '了', '着', '完'] },
        { question: '你听 ___ 这首歌吗？', answer: '过', options: ['过', '了', '着', '完'] },
        { question: '我们以前见 ___ 面。', answer: '过', options: ['过', '了', '着', '完'] }
      ]
    },
    {
      id: 'g149',
      title: '得děi — 必须',
      titleMeaning: '得 (děi) for necessity',
      level: 'HSK 4',
      category: 'Aspect',
      commonMistake: '得 děi = must/have to (spoken). NOT the same as 得 de (complement marker). \'我得走\' (I must go) vs \'走得快\' (walks fast).',
      pattern: 'Subject + 得 + Verb',
      explanation: '能愿动词"得"(děi)在口语中表示"必须、不得不"的意义。强调客观需要或情理上的必须。否定用"不用"或"不必"，不能用"不得"。注意与"得到"的"得dé"区分。',
      examples: [
        { chinese: '我得走了。', pinyin: 'Wǒ děi zǒu le.', meaning: 'I have to go.' },
        { chinese: '你得好好学习。', pinyin: 'Nǐ děi hǎohāo xuéxí.', meaning: 'You must study hard.' },
        { chinese: '做这个菜得用很多油。', pinyin: 'Zuò zhè ge cài děi yòng hěn duō yóu.', meaning: 'Making this dish requires a lot of oil.' }
      ],
      practice: [
        { question: '今天 ___ 早点睡觉。', answer: '得', options: ['得', '能', '会', '想'] },
        { question: '你 ___ 多喝水。', answer: '得', options: ['得', '能', '会', '想'] },
        { question: '我 ___ 去医院看病。', answer: '得', options: ['得', '能', '会', '想'] },
        { question: '这件事 ___ 认真做。', answer: '得', options: ['得', '能', '会', '想'] },
        { question: '做蛋糕 ___ 用鸡蛋。', answer: '得', options: ['得', '能', '会', '想'] },
        { question: '你 ___ 告诉我实情。', answer: '得', options: ['得', '能', '会', '想'] },
        { question: '再不走就 ___ 迟到了。', answer: '得', options: ['得', '能', '会', '想'] }
      ]
    },
    {
      id: 'g150',
      title: '应该 vs 必须',
      titleMeaning: '应该 vs 必须 (should vs must)',
      level: 'HSK 3',
      category: 'Aspect',
      commonMistake: '必须 is a hard command (must/required). 应该 is a soft suggestion (should). Use 必须 for rules, 应该 for advice.',
      pattern: 'Subject + 应该/必须 + Verb',
      explanation: '"应该"表示情理上应该做，语气较柔和、建议性强；"必须"表示一定要做，语气强硬、命令性强，没有商量余地。否定分别是"不应该"和"不必"。',
      examples: [
        { chinese: '你应该多喝水。', pinyin: 'Nǐ yīnggāi duō hē shuǐ.', meaning: 'You should drink more water.' },
        { chinese: '学生必须穿校服。', pinyin: 'Xuésheng bìxū chuān xiàofú.', meaning: 'Students must wear school uniforms.' },
        { chinese: '你不用来这么早。', pinyin: 'Nǐ bú yòng lái zhème zǎo.', meaning: 'You don\'t need to come so early.' }
      ],
      practice: [
        { question: '在图书馆里 ___ 保持安静。', answer: '必须', options: ['必须', '应该', '可能', '需要'] },
        { question: '你 ___ 多锻炼身体。', answer: '应该', options: ['应该', '必须', '可能', '需要'] },
        { question: '上飞机前 ___ 检查护照。', answer: '必须', options: ['必须', '应该', '可能', '需要'] },
        { question: '我们 ___ 互相帮助。', answer: '应该', options: ['应该', '必须', '可能', '需要'] },
        { question: '你不 ___ 喝酒后开车。', answer: '应该', options: ['应该', '必须', '可能', '需要'] },
        { question: '进入工地 ___ 戴安全帽。', answer: '必须', options: ['必须', '应该', '可能', '需要'] },
        { question: '他 ___ 对自己的行为负责。', answer: '应该', options: ['应该', '必须', '可能', '需要'] }
      ]
    },
    {
      id: 'g151',
      title: '才 vs 就 — 时间视角',
      titleMeaning: '才 (lateness) vs 就 (earliness)',
      level: 'HSK 3',
      category: 'Aspect',
      commonMistake: '才 = later than expected. 就 = earlier than expected. The SAME time can be 才 or 就 depending on speaker\'s expectation: \'他十点才来\' = late; \'他十点就来了\' = early.',
      pattern: 'Time + 才/就 + Verb',
      explanation: '"才"和"就"在时间表达中形成对立。"才"表示说话人认为时间晚、慢、迟、少；"就"表示说话人认为时间早、快、顺利。核心区别在于主观预期的违背或符合。',
      examples: [
        { chinese: '他十点才来。', pinyin: 'Tā shí diǎn cái lái.', meaning: 'He didn\'t come until ten (late).' },
        { chinese: '他六点就来了。', pinyin: 'Tā liù diǎn jiù lái le.', meaning: 'He came as early as six (early).' },
        { chinese: '我学了一年才会。', pinyin: 'Wǒ xué le yì nián cái huì.', meaning: 'It took me a year to learn it (slow).' }
      ],
      practice: [
        { question: '我等了一个小时他 ___ 到。', answer: '才', options: ['才', '就', '又', '再'] },
        { question: '他五点 ___ 起床了。', answer: '就', options: ['就', '才', '又', '再'] },
        { question: '你怎么 ___ 来？都迟到了。', answer: '才', options: ['才', '就', '又', '再'] },
        { question: '我八点起床，他六点 ___ 起来了。', answer: '就', options: ['就', '才', '又', '再'] },
        { question: '我花了三个月 ___ 学会。', answer: '才', options: ['才', '就', '又', '再'] },
        { question: '他 ___ 到家天就黑了。', answer: '才', options: ['才', '就', '又', '再'] },
        { question: '从我家到学校十分钟 ___ 到了。', answer: '就', options: ['就', '才', '又', '再'] }
      ]
    },
    {
      id: 'g152',
      title: '再 vs 又 — 重复表达',
      titleMeaning: '再 (future repetition) vs 又 (past repetition)',
      level: 'HSK 3',
      category: 'Aspect',
      commonMistake: '再 = again (future). 又 = again (past). \'请再说一次\' (future) vs \'他又来晚了\' (past). This is the #1 learner mistake.',
      pattern: '再 + Verb (future) | 又 + Verb (past)',
      explanation: '"再"表示未发生的重复（将要做）；"又"表示已发生的重复（已经做）。这是最基本也是最常混淆的区别。注意"再"还可用于假设句（"再……就……"）和祈使句（"再来一次"）。',
      examples: [
        { chinese: '请再说一遍。', pinyin: 'Qǐng zài shuō yí biàn.', meaning: 'Please say it again (future).' },
        { chinese: '他又迟到了。', pinyin: 'Tā yòu chídào le.', meaning: 'He was late again (past).' },
        { chinese: '再不走就来不及了。', pinyin: 'Zài bù zǒu jiù láibují le.', meaning: 'If we don\'t leave now, it\'ll be too late.' }
      ],
      practice: [
        { question: '这本书很有意思，我想 ___ 看一遍。', answer: '再', options: ['再', '又', '才', '就'] },
        { question: '怎么 ___ 是你？', answer: '又', options: ['又', '再', '才', '就'] },
        { question: '今天 ___ 下雨了。', answer: '又', options: ['又', '再', '才', '就'] },
        { question: '欢迎下次 ___ 来。', answer: '再', options: ['再', '又', '才', '就'] },
        { question: '你不要 ___ 迟到了。', answer: '再', options: ['再', '又', '才', '就'] },
        { question: '昨天他 ___ 去那家饭店了。', answer: '又', options: ['又', '再', '才', '就'] },
        { question: '___ 努力一点就好了。', answer: '再', options: ['再', '又', '才', '就'] }
      ]
    },
    {
      id: 'g153',
      title: '已经 — 已然态',
      titleMeaning: '已经 for already-completed state',
      level: 'HSK 3',
      category: 'Aspect',
      commonMistake: '刚 = just now (objective recent past). 刚才 = a moment ago (noun, can be topic). \'我刚到\' = just arrived; \'刚才他来了\' = he came a moment ago.',
      pattern: 'Subject + 已经 + Verb/Adj + 了',
      explanation: '"已经"表示动作或状态在说话之前就已发生或存在。常与"了"配合使用，构成"已经……了"结构。这类句子的语义重心在于强调"事情已发生"这一事实。',
      examples: [
        { chinese: '我已经吃完饭了。', pinyin: 'Wǒ yǐjīng chī wán fàn le.', meaning: 'I\'ve already finished eating.' },
        { chinese: '他已经不是小孩子了。', pinyin: 'Tā yǐjīng bú shì xiǎoháizi le.', meaning: 'He\'s no longer a child.' },
        { chinese: '天已经黑了。', pinyin: 'Tiān yǐjīng hēi le.', meaning: 'It\'s already dark.' }
      ],
      practice: [
        { question: '电影 ___ 开始了。', answer: '已经', options: ['已经', '刚才', '刚刚', '马上'] },
        { question: '我 ___ 写完作业了。', answer: '已经', options: ['已经', '刚才', '刚刚', '马上'] },
        { question: '他 ___ 不是学生了。', answer: '已经', options: ['已经', '刚才', '刚刚', '马上'] },
        { question: '菜 ___ 凉了，快吃吧。', answer: '已经', options: ['已经', '刚才', '刚刚', '马上'] },
        { question: '她 ___ 结婚三年了。', answer: '已经', options: ['已经', '刚才', '刚刚', '马上'] },
        { question: '我 ___ 决定了。', answer: '已经', options: ['已经', '刚才', '刚刚', '马上'] },
        { question: '春天 ___ 来了。', answer: '已经', options: ['已经', '刚才', '刚刚', '马上'] }
      ]
    },
    {
      id: 'g154',
      title: '快要...了 — 即将',
      titleMeaning: '快要...了 for imminent action',
      level: 'HSK 3',
      category: 'Aspect',
      commonMistake: '快要...了 = about to happen. 就要...了 = about to happen (with specific time OK). \'快下雨了\' (no time word) vs \'明天就要考试了\' (with time word).',
      pattern: 'Subject + 快要/就要/快 + Verb + 了',
      explanation: '"快要...了"、"就要...了"、"快...了"都表示动作或情况即将发生。区别："就要"前可以有具体时间，"快要"和"快"前面一般不接具体时间。都要求句末有"了"。',
      examples: [
        { chinese: '火车快要开了。', pinyin: 'Huǒchē kuàiyào kāi le.', meaning: 'The train is about to depart.' },
        { chinese: '我明天就要回国了。', pinyin: 'Wǒ míngtiān jiùyào huí guó le.', meaning: 'I\'m going back to my country tomorrow.' },
        { chinese: '快下雨了。', pinyin: 'Kuài xià yǔ le.', meaning: 'It\'s about to rain.' }
      ],
      practice: [
        { question: '春节 ___ 到了。', answer: '快要', options: ['快要', '已经', '刚刚', '刚才'] },
        { question: '___ 开学了。', answer: '快要', options: ['快要', '已经', '刚才', '正在'] },
        { question: '我明天 ___ 考试了。', answer: '就要', options: ['就要', '快要', '已经', '刚才'] },
        { question: '天 ___ 黑了。', answer: '快', options: ['快', '刚', '才', '正'] },
        { question: '超市 ___ 关门了。', answer: '就要', options: ['就要', '快要', '已经', '刚才'] },
        { question: '___ 过春节了，大家都很忙。', answer: '快要', options: ['快要', '已经', '刚才', '正在'] },
        { question: '汽车 ___ 没油了。', answer: '快要', options: ['快要', '已经', '刚才', '正在'] }
      ]
    },

    // ============================================================
    // HSK 3–4 — 的得地 & 是...的 (g155–g164)
    // ============================================================
    {
      id: 'g155',
      title: '的、得、地 — 区分用法',
      titleMeaning: '的 (attributive) vs 得 (complement) vs 地 (adverbial)',
      level: 'HSK 3',
      category: 'DeShi',
      commonMistake: '是...的 emphasizes WHEN/WHERE/HOW an action happened. Don\'t use for new information about what happened — that\'s regular 了.',
      pattern: 'Adj + 的 + N | V + 得 + Complement | Adv + 地 + V',
      explanation: '"的"连接定语和名词；"得"连接动词/形容词和补语；"地"连接状语和动词。口诀：名词前用"的"，动词后用"得"，动词前用"地"。口语中都读轻声de。',
      examples: [
        { chinese: '漂亮的女孩 (的)', pinyin: 'piàoliang de nǚhái', meaning: 'beautiful girl' },
        { chinese: '跑得很快 (得)', pinyin: 'pǎo de hěn kuài', meaning: 'run very fast' },
        { chinese: '慢慢地走 (地)', pinyin: 'mànmàn de zǒu', meaning: 'walk slowly' }
      ],
      practice: [
        { question: '他高兴 ___ 跳了起来。', answer: '地', options: ['地', '的', '得', '了'] },
        { question: '妈妈做 ___ 菜很好吃。', answer: '的', options: ['的', '得', '地', '了'] },
        { question: '他跑 ___ 满头大汗。', answer: '得', options: ['得', '的', '地', '了'] },
        { question: '请慢慢 ___ 走。', answer: '地', options: ['地', '的', '得', '了'] },
        { question: '高高 ___ 个子。', answer: '的', options: ['的', '得', '地', '了'] },
        { question: '说 ___ 比唱 ___ 好听。', answer: '得', options: ['得', '的', '地', '了'] },
        { question: '认真 ___ 学习。', answer: '地', options: ['地', '的', '得', '了'] }
      ]
    },
    {
      id: 'g156',
      title: '是...的 — 强调句型',
      titleMeaning: '是...的 structure for emphasis',
      level: 'HSK 3',
      category: 'DeShi',
      commonMistake: '的 (possessive/modifier) and 地 (adverbial) are different characters. Writing 的 for everything is a beginner mistake. Check which \'de\' function you need.',
      pattern: 'Subject + 是 + Emphasis + Verb + 的',
      explanation: '"是...的"结构用来强调已发生动作的时间、地点、方式、目的、施事等。注意"是"可以省略，"的"通常放在句尾（不带宾语时）或宾语之前。这类结构不可用于未发生的事件。',
      examples: [
        { chinese: '我是昨天来的。', pinyin: 'Wǒ shì zuótiān lái de.', meaning: 'It was yesterday that I came.' },
        { chinese: '他是坐飞机去的。', pinyin: 'Tā shì zuò fēijī qù de.', meaning: 'He went by plane.' },
        { chinese: '这本书是在北京买的。', pinyin: 'Zhè běn shū shì zài Běijīng mǎi de.', meaning: 'This book was bought in Beijing.' }
      ],
      practice: [
        { question: '你 ___ 怎么来 ___？', answer: '是的', options: ['是的', '就了', '在的', '去了'] },
        { question: '我 ___ 去年毕业 ___。', answer: '是的', options: ['是的', '就了', '在的', '去了'] },
        { question: '他 ___ 坐地铁去 ___。', answer: '是的', options: ['是的', '就了', '在的', '去了'] },
        { question: '这本书 ___ 在图书馆买 ___。', answer: '是的', options: ['是的', '就了', '在的', '去了'] },
        { question: '我们 ___ 昨天认识 ___。', answer: '是的', options: ['是的', '就了', '在的', '去了'] },
        { question: '他 ___ 从日本来 ___。', answer: '是的', options: ['是的', '就了', '在的', '去了'] },
        { question: '这件衣服 ___ 在网上买 ___。', answer: '是的', options: ['是的', '就了', '在的', '去了'] }
      ]
    },
    {
      id: 'g157',
      title: '是...的 — 强调施事',
      titleMeaning: '是...的 to emphasize the agent',
      level: 'HSK 3',
      category: 'DeShi',
      commonMistake: '得 is for complements (result/degree), NOT for possession. \'跑的快\' is wrong; should be \'跑得快\' (runs fast).',
      pattern: 'Object + 是 + Agent + Verb + 的',
      explanation: '"是...的"可将焦点放在动作的执行者（施事）上。宾语提前，施事置于"是"之后，强调"是谁做的这件事"。',
      examples: [
        { chinese: '这张画是我画的。', pinyin: 'Zhè zhāng huà shì wǒ huà de.', meaning: 'This painting was painted by me.' },
        { chinese: '这道菜是妈妈做的。', pinyin: 'Zhè dào cài shì māma zuò de.', meaning: 'This dish was made by mom.' },
        { chinese: '信是谁寄来的？', pinyin: 'Xìn shì shéi jì lái de?', meaning: 'Who sent this letter?' }
      ],
      practice: [
        { question: '这个蛋糕 ___ 我做的。', answer: '是', options: ['是', '被', '把', '让'] },
        { question: '这些字 ___ 老师写的。', answer: '是', options: ['是', '被', '把', '让'] },
        { question: '照片 ___ 谁拍的？', answer: '是', options: ['是', '被', '把', '让'] },
        { question: '这首歌 ___ 他写的。', answer: '是', options: ['是', '被', '把', '让'] },
        { question: '礼物 ___ 爸爸送的。', answer: '是', options: ['是', '被', '把', '让'] },
        { question: '这个报告 ___ 组长写的。', answer: '是', options: ['是', '被', '把', '让'] },
        { question: '那封信 ___ 妈妈寄来的。', answer: '是', options: ['是', '被', '把', '让'] }
      ]
    },
    {
      id: 'g158',
      title: 'Measure Words 进阶',
      titleMeaning: 'Advanced measure words (双、条、件、次、遍)',
      level: 'HSK 3',
      category: 'DeShi',
      commonMistake: '地 turns adjectives into adverbs: \'认真地学习\' = study seriously. Place it between the adjective and the verb it modifies.',
      pattern: 'Number + Measure Word + Noun / Verb + Number + Measure Word',
      explanation: '"双"用于成对物品（鞋子、筷子、手）；"条"用于长条状物（路、河、鱼、裤子）；"件"用于事情或上衣；"次"表示动作次数（动量词）；"遍"强调动作从头到尾完整一次。',
      examples: [
        { chinese: '一双筷子', pinyin: 'yì shuāng kuàizi', meaning: 'a pair of chopsticks' },
        { chinese: '一条河', pinyin: 'yì tiáo hé', meaning: 'a river' },
        { chinese: '一件事', pinyin: 'yí jiàn shì', meaning: 'one thing/matter' },
        { chinese: '我去了三次。', pinyin: 'Wǒ qù le sān cì.', meaning: 'I went three times.' },
        { chinese: '请再说一遍。', pinyin: 'Qǐng zài shuō yí biàn.', meaning: 'Please say it once more (from start to finish).' }
      ],
      practice: [
        { question: '我看过两 ___ 这部电影。', answer: '遍', options: ['遍', '次', '回', '下'] },
        { question: '他买了一 ___ 新鞋。', answer: '双', options: ['双', '条', '件', '次'] },
        { question: '这 ___ 路很长。', answer: '条', options: ['条', '双', '件', '张'] },
        { question: '我今天做了三 ___ 事。', answer: '件', options: ['件', '双', '条', '次'] },
        { question: '这 ___ 河真漂亮。', answer: '条', options: ['条', '双', '件', '本'] },
        { question: '我去过那家饭店两 ___。', answer: '次', options: ['次', '遍', '回', '下'] },
        { question: '请把课文再读一 ___。', answer: '遍', options: ['遍', '次', '下', '回'] }
      ]
    },
    {
      id: 'g159',
      title: '动词重叠 — VV/V一V',
      titleMeaning: 'Verb reduplication (casual/light action)',
      level: 'HSK 2',
      category: 'DeShi',
      commonMistake: 'Multiple 的 in one phrase is legal but stylistically marked. Try rewriting to avoid 的-的-的 chains: \'我朋友的姐姐的车\' → \'我朋友姐姐的车\'.',
      pattern: 'Verb + Verb | Verb + 一 + Verb',
      explanation: '动词重叠(A-A或ABAB)表示动作短暂、尝试、轻松或随意的意味。单音节：看看、想想、试试；双音节：休息休息、讨论讨论。常用于祈使或建议语气中。',
      examples: [
        { chinese: '你看看这本书。', pinyin: 'Nǐ kànkan zhè běn shū.', meaning: 'Take a look at this book.' },
        { chinese: '让我想一想。', pinyin: 'Ràng wǒ xiǎng yì xiǎng.', meaning: 'Let me think about it.' },
        { chinese: '周末我们出去玩儿玩儿。', pinyin: 'Zhōumò wǒmen chūqù wánr wanr.', meaning: 'Let\'s go out and have some fun this weekend.' }
      ],
      practice: [
        { question: '你 ___ 这道题怎么做。', answer: '试试', options: ['试试', '试了', '试过', '试着'] },
        { question: '我想 ___ 你的新手机。', answer: '看看', options: ['看看', '看了', '看过', '看着'] },
        { question: '让我 ___ 好吗？', answer: '想想', options: ['想想', '想了', '想过', '想着'] },
        { question: '周末去公园 ___。', answer: '逛逛', options: ['逛逛', '逛了', '逛过', '逛着'] },
        { question: '你 ___ 这是什么？', answer: '猜猜', options: ['猜猜', '猜了', '猜过', '猜着'] },
        { question: '咱们休息 ___ 吧。', answer: '休息', options: ['休息', '休息完', '休息过', '休息着'] },
        { question: '等我 ___ 再告诉你。', answer: '想想', options: ['想想', '想了', '想过', '想着'] }
      ]
    },
    {
      id: 'g160',
      title: '形容词重叠 — AA/AABB',
      titleMeaning: 'Adjective reduplication (高的→高高的, 干净→干干净净)',
      level: 'HSK 4',
      category: 'DeShi',
      commonMistake: '的-phrases can omit the noun head when context is clear: \'我的书\' → \'我的\' (mine). A common pattern: \'大的那个\' = the big one.',
      pattern: 'Adj + Adj (单音节) | AABB (双音节)',
      explanation: '形容词重叠表示程度加深，有生动的描写意味。单音节：AA式（高高的、红红的）；双音节：AABB式（干干净净、高高兴兴）。重叠后一般不加"很"，且多带"的"。口语中第二个A常读轻声。',
      examples: [
        { chinese: '她有一双大大的眼睛。', pinyin: 'Tā yǒu yì shuāng dàdà de yǎnjing.', meaning: 'She has big big eyes.' },
        { chinese: '房间干干净净的。', pinyin: 'Fángjiān gāngānjìngjìng de.', meaning: 'The room is very clean.' },
        { chinese: '他高高兴兴地去上班了。', pinyin: 'Tā gāogāoxìngxìng de qù shàngbān le.', meaning: 'He happily went to work.' }
      ],
      practice: [
        { question: '月亮 ___ 的，很漂亮。', answer: '圆圆', options: ['圆圆', '很圆', '圆了', '圆过'] },
        { question: '他有一个 ___ 的鼻子。', answer: '高高', options: ['高高', '很高', '高了', '高过'] },
        { question: '房间 ___ 的。', answer: '干干净净', options: ['干干净净', '很干净', '干净了', '干净过'] },
        { question: '她 ___ 地去上班了。', answer: '高高兴兴', options: ['高高兴兴', '很高兴', '高兴了', '高兴过'] },
        { question: '孩子 ___ 的眼睛很可爱。', answer: '大大', options: ['大大', '很大', '大了', '大过'] },
        { question: '头发 ___ 的，脸也白的。', answer: '黑黑', options: ['黑黑', '很黑', '黑了', '黑过'] },
        { question: '衣服洗得 ___ 的。', answer: '白白', options: ['白白', '很白', '白了', '白过'] }
      ]
    },
    {
      id: 'g161',
      title: 'V来V去',
      titleMeaning: 'V来V去 (back and forth / this way and that)',
      level: 'HSK 4',
      category: 'DeShi',
      commonMistake: '是...的 for past: \'我是昨天去的\' focuses on WHEN, not that it happened. You already know it happened.',
      pattern: 'Verb + 来 + Verb + 去',
      explanation: '"V来V去"表示动作反复进行或来回变动。可用于具体的方向往返（走来走去），也可用于抽象的思维活动（想来想去、说来说去）。',
      examples: [
        { chinese: '他在房间里走来走去。', pinyin: 'Tā zài fángjiān li zǒu lái zǒu qù.', meaning: 'He paces back and forth in the room.' },
        { chinese: '我想来想去还是决定不去。', pinyin: 'Wǒ xiǎng lái xiǎng qù háishì juédìng bú qù.', meaning: 'After thinking it over, I decided not to go.' },
        { chinese: '说来说去，你是不想去。', pinyin: 'Shuō lái shuō qù, nǐ shì bù xiǎng qù.', meaning: 'After all that talk, you just don\'t want to go.' }
      ],
      practice: [
        { question: '我 ___ 想 ___ 还是想不通。', answer: '来去', options: ['来去', '上去', '下去', '出来'] },
        { question: '他在房间里走 ___ 走 ___。', answer: '来去', options: ['来去', '上去', '下去', '出来'] },
        { question: '说 ___ 说 ___，你是不想去。', answer: '来去', options: ['来去', '上去', '下去', '出来'] },
        { question: '翻 ___ 翻 ___ 也找不到钥匙。', answer: '来去', options: ['来去', '上去', '下去', '出来'] },
        { question: '考 ___ 考 ___，终于考上了大学。', answer: '来去', options: ['来去', '上去', '下去', '出来'] },
        { question: '小狗在院子里跑 ___ 跑 ___。', answer: '来去', options: ['来去', '上去', '下去', '出来'] },
        { question: '挑 ___ 挑 ___ 还是买贵的吧。', answer: '来去', options: ['来去', '上去', '下去', '出来'] }
      ]
    },
    {
      id: 'g162',
      title: '使/让/叫 — 使役用法',
      titleMeaning: '使、让、叫 causatives',
      level: 'HSK 4',
      category: 'DeShi',
      commonMistake: '是...的 can only emphasize already-known past events. Don\'t use it to report breaking news. \'地震是三点发生的\' assumes the listener knows there was an earthquake.',
      pattern: 'Subject + 使/让/叫 + Person + Verb Phrase',
      explanation: '"使"、"让"、"叫"三个词都可表示"致使、让某人做某事"。"使"偏书面，强调结果或影响；"让"偏口语，语气较温和；"叫"北方口语色彩，表使役有时也表被动需区分。使役句中宾语后必须接动作。',
      examples: [
        { chinese: '这个消息使我很高兴。', pinyin: 'Zhè ge xiāoxi shǐ wǒ hěn gāoxìng.', meaning: 'This news made me very happy.' },
        { chinese: '妈妈让我早点回家。', pinyin: 'Māma ràng wǒ zǎo diǎn huí jiā.', meaning: 'Mom told me to come home early.' },
        { chinese: '他叫我去买东西。', pinyin: 'Tā jiào wǒ qù mǎi dōngxi.', meaning: 'He told me to go buy things.' }
      ],
      practice: [
        { question: '这件事 ___ 人很难过。', answer: '让', options: ['让', '把', '被', '对'] },
        { question: '这个消息 ___ 我很高兴。', answer: '使', options: ['使', '把', '被', '对'] },
        { question: '妈妈 ___ 我早点回家。', answer: '叫', options: ['叫', '把', '被', '对'] },
        { question: '他 ___ 我去帮他买东西。', answer: '让', options: ['让', '把', '被', '对'] },
        { question: '成功 ___ 人更加自信。', answer: '使', options: ['使', '把', '被', '对'] },
        { question: '别 ___ 他等你太久。', answer: '让', options: ['让', '把', '被', '对'] },
        { question: '我 ___ 弟弟关上门。', answer: '叫', options: ['叫', '把', '被', '对'] }
      ]
    },
    {
      id: 'g163',
      title: '连...都/也 — 甚至',
      titleMeaning: '连...都/也 for "even"',
      level: 'HSK 4',
      category: 'DeShi',
      commonMistake: '在...的 works like a relative clause: \'在学中文的学生\' = students who are studying Chinese. The 的 is essential — don\'t drop it.',
      pattern: '连 + Noun/Minimum Element + 都/也 + Verb Phrase',
      explanation: '"连...都/也"表示强调，意思是"甚至……也……"。用极端或最低限度的事例来说明某种情况。"连"后是说话人认为最不可能或最低限度的成分。极常见的强调句型。',
      examples: [
        { chinese: '他连饭都没吃就走了。', pinyin: 'Tā lián fàn dōu méi chī jiù zǒu le.', meaning: 'He left without even eating.' },
        { chinese: '连小孩子也明白这个道理。', pinyin: 'Lián xiǎoháizi yě míngbai zhè ge dàoli.', meaning: 'Even children understand this principle.' },
        { chinese: '他连看都没看我一眼。', pinyin: 'Tā lián kàn dōu méi kàn wǒ yì yǎn.', meaning: 'He didn\'t even glance at me.' }
      ],
      practice: [
        { question: '他 ___ 最简单的汉字 ___ 不认识。', answer: '连都', options: ['连都', '虽然但是', '因为所以', '如果就'] },
        { question: '___ 小孩子 ___ 知道不要乱扔垃圾。', answer: '连也', options: ['连也', '虽然也', '因为也', '如果也'] },
        { question: '他 ___ 早饭 ___ 没吃就走了。', answer: '连都', options: ['连都', '虽然都', '因为都', '如果都'] },
        { question: '___ 老师 ___ 不会这道题。', answer: '连都', options: ['连都', '虽然都', '因为都', '如果都'] },
        { question: '太吵了，___ 电话 ___ 听不见。', answer: '连都', options: ['连都', '虽然都', '因为都', '如果都'] },
        { question: '___ 一分钱 ___ 没有。', answer: '连都', options: ['连都', '虽然都', '因为都', '如果都'] },
        { question: '他 ___ 看 ___ 没看我一眼。', answer: '连都', options: ['连都', '虽然都', '因为都', '如果都'] }
      ]
    },
    {
      id: 'g164',
      title: '对...来说',
      titleMeaning: '对...来说 for perspective',
      level: 'HSK 4',
      category: 'DeShi',
      commonMistake: 'When possessed noun is a close relationship or organization, 的 is often dropped. \'我妈妈\' (my mom), \'我们学校\' (our school).',
      pattern: '对 + Person/Entity + 来说，...',
      explanation: '"对...来说"用来引出某人的观点、立场或从某角度出发的看法。意思是"从……的角度来看"、"对于……而言"。常用于表达主观判断或限定陈述的适用范围。',
      examples: [
        { chinese: '对我来说，学习中文很有意思。', pinyin: 'Duì wǒ lái shuō, xuéxí Zhōngwén hěn yǒu yìsi.', meaning: 'For me, learning Chinese is very interesting.' },
        { chinese: '对孩子来说，玩很重要。', pinyin: 'Duì háizi lái shuō, wán hěn zhòngyào.', meaning: 'For children, playing is very important.' },
        { chinese: '对初学者来说，这个语法有点难。', pinyin: 'Duì chūxuézhě lái shuō, zhè ge yǔfǎ yǒudiǎn nán.', meaning: 'For beginners, this grammar point is a bit difficult.' }
      ],
      practice: [
        { question: '___ 老年人 ___，健康是最重要的。', answer: '对来说', options: ['对来说', '关于', '根据', '随着'] },
        { question: '___ 我 ___，这太难了。', answer: '对来说', options: ['对来说', '关于', '根据', '随着'] },
        { question: '___ 孩子 ___，玩很重要。', answer: '对来说', options: ['对来说', '关于', '根据', '随着'] },
        { question: '___ 初学者 ___，这个语法不太难。', answer: '对来说', options: ['对来说', '关于', '根据', '随着'] },
        { question: '___ 学生 ___，考试成绩很重要。', answer: '对来说', options: ['对来说', '关于', '根据', '随着'] },
        { question: '___ 外国人 ___，汉字很难学。', answer: '对来说', options: ['对来说', '关于', '根据', '随着'] },
        { question: '___ 病人 ___，休息第一。', answer: '对来说', options: ['对来说', '关于', '根据', '随着'] }
      ]
    },

    // ============================================================
    // HSK 4 — Connectors & Complex Sentences (g165–g174)
    // ============================================================
    {
      id: 'g165',
      title: '因为...所以...',
      titleMeaning: '因为...所以... cause and effect',
      level: 'HSK 2',
      category: 'Connectors',
      commonMistake: '虽然...但是 MUST use both — unlike English which uses only one. Dropping 但是 is a classic English-speaker mistake.',
      pattern: '因为 + Cause，所以 + Result',
      explanation: '"因为...所以..."是最常用的因果连词对。前句表原因，后句表结果。"因为"和"所以"可单独使用，但配对使用更完整。口语中"因为"常带"……的原因"句末标记。',
      examples: [
        { chinese: '因为下雨，所以我不去了。', pinyin: 'Yīnwèi xià yǔ, suǒyǐ wǒ bú qù le.', meaning: 'Because it\'s raining, I\'m not going.' },
        { chinese: '他因为太忙，所以没有回电话。', pinyin: 'Tā yīnwèi tài máng, suǒyǐ méiyǒu huí diànhuà.', meaning: 'Because he was too busy, he didn\'t return the call.' },
        { chinese: '因为我喜欢中国菜，所以我常去那家饭店。', pinyin: 'Yīnwèi wǒ xǐhuan Zhōngguó cài, suǒyǐ wǒ cháng qù nà jiā fàndiàn.', meaning: 'Because I like Chinese food, I often go to that restaurant.' }
      ],
      practice: [
        { question: '___ 身体不舒服，___ 我没去上班。', answer: '因为所以', options: ['因为所以', '虽然但是', '不但而且', '如果就'] },
        { question: '___ 下雨 ___ 他不来了。', answer: '因为所以', options: ['因为所以', '虽然但是', '不但而且', '如果就'] },
        { question: '___ 太贵了，___ 我没买。', answer: '因为所以', options: ['因为所以', '虽然但是', '不但而且', '如果就'] },
        { question: '___ 堵车 ___ 我迟到了。', answer: '因为所以', options: ['因为所以', '虽然但是', '不但而且', '如果就'] },
        { question: '___ 路上堵车 ___ 迟到了。', answer: '所以', options: ['所以', '但是', '而且', '还是'] },
        { question: '___ 我没看书，___ 考试不及格。', answer: '因为所以', options: ['因为所以', '虽然但是', '不但而且', '如果就'] },
        { question: '___ 妈妈病了，___ 我在家照顾她。', answer: '因为所以', options: ['因为所以', '虽然但是', '不但而且', '如果就'] }
      ]
    },
    {
      id: 'g166',
      title: '虽然...但是...',
      titleMeaning: '虽然...但是... concession',
      level: 'HSK 3',
      category: 'Connectors',
      commonMistake: '所以 can be dropped in spoken Chinese. \'因为下雨，我不去了\' is natural. But 因为 can\'t be dropped when 所以 is present.',
      pattern: '虽然 + Concession，但是 + Main Clause',
      explanation: '"虽然...但是..."是转折连词对，前句承认事实A，后句指出与A相反或出乎意料的事实B。"可是"和"不过"可替代"但是"，语气依次减弱。前一分句可省略"虽然"，后一分句必须有转折词。',
      examples: [
        { chinese: '虽然他很累，但是他还是很高兴。', pinyin: 'Suīrán tā hěn lèi, dànshì tā háishì hěn gāoxìng.', meaning: 'Although he was tired, he was still happy.' },
        { chinese: '虽然下雨了，可是我还是去了。', pinyin: 'Suīrán xià yǔ le, kěshì wǒ háishì qù le.', meaning: 'Although it rained, I still went.' },
        { chinese: '东西虽然贵，不过质量很好。', pinyin: 'Dōngxi suīrán guì, búguò zhìliàng hěn hǎo.', meaning: 'Although the things are expensive, the quality is good.' }
      ],
      practice: [
        { question: '___ 他已经七十岁了，___ 身体很好。', answer: '虽然但是', options: ['虽然但是', '因为所以', '不但而且', '如果就'] },
        { question: '___ 下雨了，___ 我还是想去。', answer: '虽然但是', options: ['虽然但是', '因为所以', '不但而且', '如果就'] },
        { question: '___ 东西便宜 ___ 质量不太好。', answer: '虽然但是', options: ['虽然但是', '因为所以', '不但而且', '如果就'] },
        { question: '___ 很累，他 ___ 很高兴。', answer: '虽然但是', options: ['虽然但是', '因为所以', '不但而且', '如果就'] },
        { question: '___ 她年纪大了 ___ 心态很年轻。', answer: '虽然但是', options: ['虽然但是', '因为所以', '不但而且', '如果就'] },
        { question: '___ 住得远，他每天 ___ 准时到。', answer: '虽然但是', options: ['虽然但是', '因为所以', '不但而且', '如果就'] },
        { question: '___ 考试难 ___ 大家都及格了。', answer: '虽然但是', options: ['虽然但是', '因为所以', '不但而且', '如果就'] }
      ]
    },
    {
      id: 'g167',
      title: '不但...而且...',
      titleMeaning: '不但...而且... for not only...but also',
      level: 'HSK 3',
      category: 'Connectors',
      commonMistake: '如果...就: 就 is MANDATORY in the result clause. Without it, the conditional feels incomplete.',
      pattern: 'Subject + 不但 + Adj/Verb，而且 + Adj/Verb',
      explanation: '"不但...而且..."表示递进关系，后一分句比前一分句在意义上更进一层。主语相同时放在"不但"之前；主语不同时分别放在"不但"和"而且"之后。口语中可用"不仅"替代"不但"。',
      examples: [
        { chinese: '她不但漂亮，而且很聪明。', pinyin: 'Tā búdàn piàoliang, érqiě hěn cōngming.', meaning: 'She is not only beautiful but also very smart.' },
        { chinese: '他不但会说中文，而且会说日语。', pinyin: 'Tā búdàn huì shuō Zhōngwén, érqiě huì shuō Rìyǔ.', meaning: 'He can speak not only Chinese but also Japanese.' },
        { chinese: '他不但学习好，而且体育也好。', pinyin: 'Tā búdàn xuéxí hǎo, érqiě tǐyù yě hǎo.', meaning: 'He is not only good at studies but also good at sports.' }
      ],
      practice: [
        { question: '这家饭店 ___ 好吃，___ 便宜。', answer: '不但而且', options: ['不但而且', '虽然但是', '因为所以', '如果就'] },
        { question: '她 ___ 漂亮 ___ 聪明。', answer: '不但而且', options: ['不但而且', '虽然但是', '因为所以', '如果就'] },
        { question: '他 ___ 学习好 ___ 体育也好。', answer: '不但而且', options: ['不但而且', '虽然但是', '因为所以', '如果就'] },
        { question: '___ 去过日本，___ 在日本住过。', answer: '不但而且', options: ['不但而且', '虽然但是', '因为所以', '如果就'] },
        { question: '这个手机 ___ 好看 ___ 功能多。', answer: '不但而且', options: ['不但而且', '虽然但是', '因为所以', '如果就'] },
        { question: '他 ___ 会弹钢琴 ___ 会拉小提琴。', answer: '不但而且', options: ['不但而且', '虽然但是', '因为所以', '如果就'] },
        { question: '旅游 ___ 能放松心情 ___ 能增长见识。', answer: '不但而且', options: ['不但而且', '虽然但是', '因为所以', '如果就'] }
      ]
    },
    {
      id: 'g168',
      title: '如果...就...',
      titleMeaning: '如果...就... conditionals',
      level: 'HSK 3',
      category: 'Connectors',
      commonMistake: '不但...而且 shows progression (not only X but even Y). 而且 introduces the more impressive/notable point.',
      pattern: '如果 + Condition，就 + Result',
      explanation: '"如果...就..."是最基本的假设条件句。"如果"引导条件分句，"就"引出结果分句。"如果"可省略，"就"不能省。"要是...就..."为其口语变体。注意假设句不要求条件真实。',
      examples: [
        { chinese: '如果明天下雨，我就不去了。', pinyin: 'Rúguǒ míngtiān xià yǔ, wǒ jiù bú qù le.', meaning: 'If it rains tomorrow, I won\'t go.' },
        { chinese: '如果你有问题，就问我。', pinyin: 'Rúguǒ nǐ yǒu wèntí, jiù wèn wǒ.', meaning: 'If you have questions, ask me.' },
        { chinese: '要是你有时间，我们就去看电影。', pinyin: 'Yàoshi nǐ yǒu shíjiān, wǒmen jiù qù kàn diànyǐng.', meaning: 'If you have time, we\'ll go watch a movie.' }
      ],
      practice: [
        { question: '___ 你不舒服，___ 在家休息吧。', answer: '如果就', options: ['如果就', '虽然但是', '因为所以', '不但而且'] },
        { question: '___ 明天下雨，我 ___ 不去了。', answer: '如果就', options: ['如果就', '虽然但是', '因为所以', '不但而且'] },
        { question: '___ 有时间，___ 给我打电话。', answer: '如果就', options: ['如果就', '虽然但是', '因为所以', '不但而且'] },
        { question: '___ 太贵了的话 ___ 别买了。', answer: '如果就', options: ['如果就', '虽然但是', '因为所以', '不但而且'] },
        { question: '___ 你能来，我 ___ 太高兴了。', answer: '如果就', options: ['如果就', '虽然但是', '因为所以', '不但而且'] },
        { question: '___ 你不想去 ___ 别去了。', answer: '如果就', options: ['如果就', '虽然但是', '因为所以', '不但而且'] },
        { question: '___ 有问题，随时 ___ 问我。', answer: '如果就', options: ['如果就', '虽然但是', '因为所以', '不但而且'] }
      ]
    },
    {
      id: 'g169',
      title: '只要...就...',
      titleMeaning: '只要...就... sufficient condition',
      level: 'HSK 4',
      category: 'Connectors',
      commonMistake: '只要 = \'as long as\' (sufficient condition). 只有 = \'only if\' (necessary condition). Different meaning: \'只要努力就成功\' vs \'只有努力才成功\'.',
      pattern: '只要 + Condition，就 + Result',
      explanation: '"只要...就..."表示充分条件，前一分句是后一分句的充分条件——满足前句条件，后句结果必然成立。强调条件容易满足，语气比"只有...才..."宽松。',
      examples: [
        { chinese: '只要你努力，就能成功。', pinyin: 'Zhǐyào nǐ nǔlì, jiù néng chénggōng.', meaning: 'As long as you work hard, you can succeed.' },
        { chinese: '只要不下雨，我们就去公园。', pinyin: 'Zhǐyào bú xià yǔ, wǒmen jiù qù gōngyuán.', meaning: 'As long as it doesn\'t rain, we\'ll go to the park.' },
        { chinese: '只要有钱，什么都能买。', pinyin: 'Zhǐyào yǒu qián, shénme dōu néng mǎi.', meaning: 'As long as you have money, you can buy anything.' }
      ],
      practice: [
        { question: '___ 多练习，___ 能学好中文。', answer: '只要就', options: ['只要就', '只有才', '虽然但', '如果就'] },
        { question: '___ 不下雨，我们 ___ 去公园。', answer: '只要就', options: ['只要就', '只有才', '虽然但', '如果就'] },
        { question: '___ 努力 ___ 能成功。', answer: '只要就', options: ['只要就', '只有才', '虽然但', '如果就'] },
        { question: '___ 有钱，什么 ___ 能买。', answer: '只要就', options: ['只要就', '只有才', '虽然但', '如果就'] },
        { question: '___ 你不放弃，___ 有机会。', answer: '只要就', options: ['只要就', '只有才', '虽然但', '如果就'] },
        { question: '___ 吃饱了 ___ 有力气干活。', answer: '只要就', options: ['只要就', '只有才', '虽然但', '如果就'] },
        { question: '___ 每天坚持，___ 一定会进步。', answer: '只要就', options: ['只要就', '只有才', '虽然但', '如果就'] }
      ]
    },
    {
      id: 'g170',
      title: '只有...才...',
      titleMeaning: '只有...才... necessary condition',
      level: 'HSK 4',
      category: 'Connectors',
      commonMistake: '只有...才 means \'only if X, then Y.\' 才 MUST be used, not 就. \'只有努力才成功\' — mixing with 就 is wrong.',
      pattern: '只有 + Condition，才 + Result',
      explanation: '"只有...才..."表示必要条件——前句是后句唯一必需的条件。不满足该条件，结果就不会发生。比"只要...就..."条件更严格、排他性更强。',
      examples: [
        { chinese: '只有努力学习，才能取得好成绩。', pinyin: 'Zhǐyǒu nǔlì xuéxí, cái néng qǔdé hǎo chéngjì.', meaning: 'Only by studying hard can you get good grades.' },
        { chinese: '只有去过中国，才能真正了解中国文化。', pinyin: 'Zhǐyǒu qù guo Zhōngguó, cái néng zhēnzhèng liǎojiě Zhōngguó wénhuà.', meaning: 'Only by going to China can you truly understand Chinese culture.' },
        { chinese: '只有你亲自去说，他才相信。', pinyin: 'Zhǐyǒu nǐ qīnzì qù shuō, tā cái xiāngxìn.', meaning: 'Only if you tell him in person will he believe it.' }
      ],
      practice: [
        { question: '___ 坚持 ___ 能成功。', answer: '只有才', options: ['只有才', '只要就', '因为所以', '如果就'] },
        { question: '___ 亲身经历 ___ 能真正理解。', answer: '只有才', options: ['只有才', '只要就', '因为就', '如果就'] },
        { question: '___ 通过考试 ___ 能毕业。', answer: '只有才', options: ['只有才', '只要就', '因为就', '如果就'] },
        { question: '___ 他去说，老板 ___ 会相信。', answer: '只有才', options: ['只有才', '只要就', '因为就', '如果就'] },
        { question: '___ 付出 ___ 会有收获。', answer: '只有才', options: ['只有才', '只要就', '因为就', '如果就'] },
        { question: '___ 去过了 ___ 知道好不好。', answer: '只有才', options: ['只有才', '只要就', '因为就', '如果就'] },
        { question: '___ 失去 ___ 懂得珍惜。', answer: '只有才', options: ['只有才', '只要就', '因为就', '如果就'] }
      ]
    },
    {
      id: 'g171',
      title: '既然...就...',
      titleMeaning: '既然...就... since/then',
      level: 'HSK 4',
      category: 'Connectors',
      commonMistake: '无论...都 means \'no matter what, still...\'. Use with question words (谁/什么/怎么): \'无论谁去都行\' = whoever goes is fine.',
      pattern: '既然 + Known Fact，就 + Conclusion/Suggestion',
      explanation: '"既然...就..."表示从已知前提推出结论。前句是既成事实或双方已知的信息，后句是基于此的推理或建议。与"因为...所以..."不同，"既然"的前提是听者已知的事实。',
      examples: [
        { chinese: '既然下雨了，我们就不去了。', pinyin: 'Jìrán xià yǔ le, wǒmen jiù bú qù le.', meaning: 'Since it\'s raining, we won\'t go.' },
        { chinese: '既然你来了，就一起吃饭吧。', pinyin: 'Jìrán nǐ lái le, jiù yìqǐ chī fàn ba.', meaning: 'Since you\'re here, let\'s eat together.' },
        { chinese: '既然大家都同意，就这么定了。', pinyin: 'Jìrán dàjiā dōu tóngyì, jiù zhème dìng le.', meaning: 'Since everyone agrees, it\'s settled.' }
      ],
      practice: [
        { question: '___ 你知道了，___ 不说了。', answer: '既然就', options: ['既然就', '虽然但', '因为所以', '不但而且'] },
        { question: '___ 下雨了，___ 别去了。', answer: '既然就', options: ['既然就', '虽然但', '因为所以', '不但而且'] },
        { question: '___ 你来了，___ 一起吃吧。', answer: '既然就', options: ['既然就', '虽然但', '因为所以', '不但而且'] },
        { question: '___ 生病了 ___ 好好休息。', answer: '既然就', options: ['既然就', '虽然但', '因为所以', '不但而且'] },
        { question: '___ 决定了 ___ 不要后悔。', answer: '既然就', options: ['既然就', '虽然但', '因为所以', '不但而且'] },
        { question: '___ 迟到 ___ 进门小声点。', answer: '既然就', options: ['既然就', '虽然但', '因为所以', '不但而且'] },
        { question: '___ 答应了 ___ 一定要做到。', answer: '既然就', options: ['既然就', '虽然但', '因为所以', '不但而且'] }
      ]
    },
    {
      id: 'g172',
      title: '无论...都...',
      titleMeaning: '无论...都... no matter what',
      level: 'HSK 4',
      category: 'Connectors',
      commonMistake: '即使...也 = \'even if...still...\'. It\'s hypothetical concession, not factual like 虽然. \'即使下雨我也会去\' (it may rain).',
      pattern: '无论 + Question Word/Alternatives，都 + Result',
      explanation: '"无论...都..."表示在任何条件下结果都不变。前句常带疑问词（什么、怎么、谁、哪儿）或正反并列（A不A）。后句常有"都"或"也"与之呼应。',
      examples: [
        { chinese: '无论多忙，他都每天锻炼。', pinyin: 'Wúlùn duō máng, tā dōu měitiān duànliàn.', meaning: 'No matter how busy he is, he exercises every day.' },
        { chinese: '无论你去不去，我都要去。', pinyin: 'Wúlùn nǐ qù bú qù, wǒ dōu yào qù.', meaning: 'Whether you go or not, I\'m going.' },
        { chinese: '无论谁叫他，他都不理。', pinyin: 'Wúlùn shéi jiào tā, tā dōu bù lǐ.', meaning: 'No matter who calls him, he ignores them.' }
      ],
      practice: [
        { question: '___ 做什么工作，___ 要认真。', answer: '无论都', options: ['无论都', '虽然但', '因为所以', '如果就'] },
        { question: '___ 你去不去，我 ___ 要去。', answer: '无论都', options: ['无论都', '虽然但', '因为所以', '如果就'] },
        { question: '___ 多忙，他 ___ 每天锻炼。', answer: '无论都', options: ['无论都', '虽然但', '因为所以', '如果就'] },
        { question: '___ 谁叫他，他 ___ 不理。', answer: '无论都', options: ['无论都', '虽然但', '因为所以', '如果就'] },
        { question: '___ 多远，我 ___ 要找到你。', answer: '无论都', options: ['无论都', '虽然但', '因为所以', '如果就'] },
        { question: '___ 结果怎么样，___ 要试试。', answer: '无论都', options: ['无论都', '虽然但', '因为所以', '如果就'] },
        { question: '___ 发生什么，我 ___ 站在你这边。', answer: '无论都', options: ['无论都', '虽然但', '因为所以', '如果就'] }
      ]
    },
    {
      id: 'g173',
      title: '一方面...一方面...',
      titleMeaning: '一方面...一方面... on one hand...on the other',
      level: 'HSK 4',
      category: 'Connectors',
      commonMistake: '首先...然后/其次...最后 = \'first...then...finally.\' Formal sequential connector. Use 第一/第二 for listing points instead.',
      pattern: '一方面 + Aspect A，一方面 + Aspect B',
      explanation: '"一方面...一方面..."（也可以说"一方面...另一方面..."）用来并列陈述同一事物的两个侧面、原因或影响。两个侧面同等重要，无转折或递进关系。',
      examples: [
        { chinese: '他一方面想出国留学，一方面又不想离开家人。', pinyin: 'Tā yì fāngmiàn xiǎng chū guó liúxué, yì fāngmiàn yòu bù xiǎng líkāi jiārén.', meaning: 'On one hand he wants to study abroad, on the other he doesn\'t want to leave his family.' },
        { chinese: '一方面价格便宜，一方面质量很好。', pinyin: 'Yì fāngmiàn jiàgé piányi, yì fāngmiàn zhìliàng hěn hǎo.', meaning: 'On one hand the price is cheap, on the other the quality is good.' },
        { chinese: '一方面可以赚钱，一方面可以积累经验。', pinyin: 'Yì fāngmiàn kěyǐ zhuànqián, yì fāngmiàn kěyǐ jīlěi jīngyàn.', meaning: 'On one hand you can earn money, on the other you can gain experience.' }
      ],
      practice: [
        { question: '这份工作 ___ 轻松，___ 工资高。', answer: '一方面一方面', options: ['一方面一方面', '虽然但是', '不但而且', '因为所以'] },
        { question: '___ 想出国 ___ 又舍不得家人。', answer: '一方面一方面', options: ['一方面一方面', '虽然但是', '不但而且', '因为所以'] },
        { question: '___ 价格便宜 ___ 质量不好。', answer: '一方面一方面', options: ['一方面一方面', '虽然但是', '不但而且', '因为所以'] },
        { question: '___ 能赚钱 ___ 能锻炼自己。', answer: '一方面一方面', options: ['一方面一方面', '虽然但是', '不但而且', '因为所以'] },
        { question: '___ 喜欢热闹 ___ 又需要安静。', answer: '一方面一方面', options: ['一方面一方面', '虽然但是', '不但而且', '因为所以'] },
        { question: '___ 想省钱 ___ 又想吃好的。', answer: '一方面一方面', options: ['一方面一方面', '虽然但是', '不但而且', '因为所以'] },
        { question: '___ 方便 ___ 也有风险。', answer: '一方面一方面', options: ['一方面一方面', '虽然但是', '不但而且', '因为所以'] }
      ]
    },
    {
      id: 'g174',
      title: '不但不/没...反而...',
      titleMeaning: '不但不/没...反而... contrary to expectation',
      level: 'HSK 4',
      category: 'Connectors',
      commonMistake: '连...都/也 uses extreme examples: \'连他都不知道\' implies lesser people definitely don\'t. Pick 都 or 也 — both work, 都 is more common.',
      pattern: '不但不/没 + Expected，反而 + Opposite',
      explanation: '"不但不/没...反而..."表示情况不但没有朝预想方向发展，反而走向了相反的方面。带有反预期语气，强烈转折。',
      examples: [
        { chinese: '雨不但没有停，反而更大了。', pinyin: 'Yǔ búdàn méiyǒu tíng, fǎn\'ér gèng dà le.', meaning: 'Not only did the rain not stop, it got even heavier.' },
        { chinese: '他不但不感谢我，反而骂了我一顿。', pinyin: 'Tā búdàn bù gǎnxiè wǒ, fǎn\'ér mà le wǒ yí dùn.', meaning: 'Not only did he not thank me, he scolded me instead.' },
        { chinese: '吃了药以后，病不但没好，反而更严重了。', pinyin: 'Chī le yào yǐhòu, bìng búdàn méi hǎo, fǎn\'ér gèng yánzhòng le.', meaning: 'After taking medicine, not only did the illness not get better, it got worse.' }
      ],
      practice: [
        { question: '价格 ___ 下降，___ 上涨了。', answer: '不但没有反而', options: ['不但没有反而', '虽然但是', '因为所以', '如果就'] },
        { question: '雨 ___ 停，___ 更大。', answer: '不但没有反而', options: ['不但没有反而', '虽然但是', '因为所以', '如果就'] },
        { question: '他 ___ 道歉，___ 还骂我。', answer: '不但没有反而', options: ['不但没有反而', '虽然但是', '因为所以', '如果就'] },
        { question: '吃了药 ___ 好，___ 更差了。', answer: '不但没有反而', options: ['不但没有反而', '虽然但是', '因为所以', '如果就'] },
        { question: '工资 ___ 涨，___ 降低了。', answer: '不但没有反而', options: ['不但没有反而', '虽然但是', '因为所以', '如果就'] },
        { question: '问题 ___ 解决，___ 更多了。', answer: '不但没有反而', options: ['不但没有反而', '虽然但是', '因为所以', '如果就'] },
        { question: '他 ___ 帮我，___ 拖后腿。', answer: '不但没有反而', options: ['不但没有反而', '虽然但是', '因为所以', '如果就'] }
      ]
    },

    // ============================================================
    // HSK 4–5 — Prepositional & Topic Patterns (g175–g179)
    // ============================================================
    {
      id: 'g175',
      title: '关于 — 引出话题',
      titleMeaning: '关于 for introducing a topic',
      level: 'HSK 4',
      category: 'Basic',
      commonMistake: '关于 is for TOPIC (what about). 对于 is for TARGET (toward what). \'关于中国\' = about China (topic). \'对中国感兴趣\' = interested IN China (target).',
      pattern: '关于 + Topic，Sentence',
      explanation: '"关于"是介词，用来引出谈论或涉及的话题。可放在句首作状语，或与"的"组成"关于……的"结构作定语。"关于"与"对于"不同：前者标记话题范围，后者标记动作的对象。',
      examples: [
        { chinese: '关于这件事，我不想多说。', pinyin: 'Guānyú zhè jiàn shì, wǒ bù xiǎng duō shuō.', meaning: 'Regarding this matter, I don\'t want to say much.' },
        { chinese: '他写了一本关于中国历史的书。', pinyin: 'Tā xiě le yì běn guānyú Zhōngguó lìshǐ de shū.', meaning: 'He wrote a book about Chinese history.' },
        { chinese: '关于这个问题，我们还需要讨论。', pinyin: 'Guānyú zhè ge wèntí, wǒmen hái xūyào tǎolùn.', meaning: 'Regarding this question, we still need to discuss it.' }
      ],
      practice: [
        { question: '___ 中国文化，我知道得不多。', answer: '关于', options: ['关于', '对于', '至于', '根据'] },
        { question: '___ 这件事，我不想多谈。', answer: '关于', options: ['关于', '对于', '至于', '根据'] },
        { question: '他写了很多 ___ 历史的文章。', answer: '关于', options: ['关于', '对于', '至于', '根据'] },
        { question: '___ 这个问题，我们下次再讨论。', answer: '关于', options: ['关于', '对于', '至于', '根据'] },
        { question: '有没有 ___ 环保的建议？', answer: '关于', options: ['关于', '对于', '至于', '根据'] },
        { question: '___ 医疗，政府出台了新政策。', answer: '关于', options: ['关于', '对于', '至于', '根据'] },
        { question: '我想了解一下 ___ 签证的信息。', answer: '关于', options: ['关于', '对于', '至于', '根据'] }
      ]
    },
    {
      id: 'g176',
      title: '根据 — 依据标准',
      titleMeaning: '根据 for basis/according to',
      level: 'HSK 4',
      category: 'Basic',
      commonMistake: '根据 marks the BASIS of judgment. Not for \'following instructions\' — that\'s 按照. \'根据调查\' (based on survey); \'按照说明\' (following instructions).',
      pattern: '根据 + Source，Conclusion/Statement',
      explanation: '"根据"表示以某事物为基础或标准。后接名词或名词性短语，引出结论或评价的依据。常用于正式、客观语境中。',
      examples: [
        { chinese: '根据天气预报，明天会下雨。', pinyin: 'Gēnjù tiānqì yùbào, míngtiān huì xià yǔ.', meaning: 'According to the weather forecast, it will rain tomorrow.' },
        { chinese: '根据调查，大部分人支持这个政策。', pinyin: 'Gēnjù diàochá, dà bùfen rén zhīchí zhè ge zhèngcè.', meaning: 'According to the survey, most people support this policy.' },
        { chinese: '根据你的描述，我想我知道是哪里了。', pinyin: 'Gēnjù nǐ de miáoshù, wǒ xiǎng wǒ zhīdào shì nǎlǐ le.', meaning: 'Based on your description, I think I know where it is.' }
      ],
      practice: [
        { question: '___ 法律规定，未成年人不能喝酒。', answer: '根据', options: ['根据', '关于', '对于', '随着'] },
        { question: '___ 天气预报，明天有大雨。', answer: '根据', options: ['根据', '关于', '对于', '随着'] },
        { question: '___ 调查结果，多数人支持这个方案。', answer: '根据', options: ['根据', '关于', '对于', '随着'] },
        { question: '___ 你的描述，他应该是昨天到的。', answer: '根据', options: ['根据', '关于', '对于', '随着'] },
        { question: '___ 合同条款，你有权退货。', answer: '根据', options: ['根据', '关于', '对于', '随着'] },
        { question: '___ 传统习俗，过年要吃饺子。', answer: '根据', options: ['根据', '关于', '对于', '随着'] },
        { question: '___ 统计数据，人口在增长。', answer: '根据', options: ['根据', '关于', '对于', '随着'] }
      ]
    },
    {
      id: 'g177',
      title: '按照 — 遵从规则',
      titleMeaning: '按照 for following a standard',
      level: 'HSK 4',
      category: 'Basic',
      commonMistake: '按照 = follow/carry out according to rules. Use for compliance, not inference. \'按照法律\' = in accordance with the law.',
      pattern: '按照 + Rule/Plan + Action',
      explanation: '"按照"表示遵从某种标准、规定或计划来行事。强调动作严格按照既定的规则执行。与"根据"不同，"按照"侧重照办执行，而非推理判断。',
      examples: [
        { chinese: '请按照说明书操作。', pinyin: 'Qǐng ànzhào shuōmíngshū cāozuò.', meaning: 'Please follow the manual to operate.' },
        { chinese: '按照计划，我们下个月出发。', pinyin: 'Ànzhào jìhuà, wǒmen xià ge yuè chūfā.', meaning: 'According to the plan, we\'ll depart next month.' },
        { chinese: '你按照我说的做就行了。', pinyin: 'Nǐ ànzhào wǒ shuō de zuò jiù xíng le.', meaning: 'Just do as I say.' }
      ],
      practice: [
        { question: '请 ___ 顺序排队。', answer: '按照', options: ['按照', '根据', '关于', '随着'] },
        { question: '请 ___ 说明书操作。', answer: '按照', options: ['按照', '根据', '关于', '随着'] },
        { question: '___ 计划，下周出发。', answer: '按照', options: ['按照', '根据', '关于', '随着'] },
        { question: '你 ___ 我说的做就行。', answer: '按照', options: ['按照', '根据', '关于', '随着'] },
        { question: '___ 学校规定，不能迟到。', answer: '按照', options: ['按照', '根据', '关于', '随着'] },
        { question: '___ 菜谱一步步来。', answer: '按照', options: ['按照', '根据', '关于', '随着'] },
        { question: '___ 惯例，每年办一次活动。', answer: '按照', options: ['按照', '根据', '关于', '随着'] }
      ]
    },
    {
      id: 'g178',
      title: '随着 — 伴随变化',
      titleMeaning: '随着 for along with (change)',
      level: 'HSK 5',
      category: 'Basic',
      commonMistake: '随着 shows correlated change over time. The two clauses must describe a CHANGE relationship, not a static one. \'随着时间\' needs a changing result.',
      pattern: '随着 + Situation A，Situation B changes',
      explanation: '"随着"表示一种情况伴随着另一种情况的变化而变化。通常是前一分句条件变化，后一分句结果随之变化。注意主语不同时需分别指出。',
      examples: [
        { chinese: '随着年龄的增长，他的身体越来越差了。', pinyin: 'Suízhe niánlíng de zēngzhǎng, tā de shēntǐ yuè lái yuè chà le.', meaning: 'As he ages, his health is getting worse.' },
        { chinese: '随着经济的发展，人们的生活水平提高了。', pinyin: 'Suízhe jīngjì de fāzhǎn, rénmen de shēnghuó shuǐpíng tígāo le.', meaning: 'Along with economic development, people\'s living standards have improved.' },
        { chinese: '随着时间过去，我越来越了解他。', pinyin: 'Suízhe shíjiān guòqù, wǒ yuè lái yuè liǎojiě tā.', meaning: 'As time goes by, I understand him more and more.' }
      ],
      practice: [
        { question: '___ 互联网的普及，在线教育变得越来越流行。', answer: '随着', options: ['随着', '根据', '按照', '关于'] },
        { question: '___ 时间推移，我越来越了解他。', answer: '随着', options: ['随着', '根据', '按照', '关于'] },
        { question: '___ 年龄增长，记忆力会减退。', answer: '随着', options: ['随着', '根据', '按照', '关于'] },
        { question: '___ 气温升高，冰雪开始融化。', answer: '随着', options: ['随着', '根据', '按照', '关于'] },
        { question: '___ 科技发展，生活更方便了。', answer: '随着', options: ['随着', '根据', '按照', '关于'] },
        { question: '___ 考试临近，压力越来越大。', answer: '随着', options: ['随着', '根据', '按照', '关于'] },
        { question: '___ 收入提高，消费也在增加。', answer: '随着', options: ['随着', '根据', '按照', '关于'] }
      ]
    },
    {
      id: 'g179',
      title: 'Topic-Comment 话题结构',
      titleMeaning: 'Topic-comment structure in Chinese',
      level: 'HSK 4',
      category: 'Basic',
      commonMistake: 'Topic-comment structure puts the known/old topic first. The comment (rest of sentence) describes it. \'这本书，我很喜欢\' — book is the topic. Don\'t use this to introduce NEW topics.',
      pattern: 'Topic + Comment (S-P clause)',
      explanation: '汉语是话题优先语言。主题结构将已知信息放在句首作为话题，后面是用完整的陈述句（可含主语+谓语）对其进行说明。主题和述题之间无连接词，依靠语序表意。',
      examples: [
        { chinese: '这本书，我很喜欢。', pinyin: 'Zhè běn shū, wǒ hěn xǐhuan.', meaning: 'This book, I really like it.' },
        { chinese: '水果，我最喜欢吃苹果。', pinyin: 'Shuǐguǒ, wǒ zuì xǐhuan chī píngguǒ.', meaning: 'As for fruit, I like apples the most.' },
        { chinese: '那个地方，他去过三次了。', pinyin: 'Nà ge dìfang, tā qù guo sān cì le.', meaning: 'That place, he has been there three times.' }
      ],
      practice: [
        { question: '中国菜，我 ___ 喜欢吃辣的。', answer: '最', options: ['最', '很', '真', '太'] },
        { question: '这件事，___ 不好说。', answer: '我', options: ['我', '他', '你', '谁'] },
        { question: '水果，___ 喜欢苹果。', answer: '我最', options: ['我最', '他很', '你真', '太'] },
        { question: '这本书，___ 很感兴趣。', answer: '我', options: ['我', '他', '你', '谁'] },
        { question: '那个地方，___ 去过三次了。', answer: '他', options: ['他', '我', '你', '谁'] },
        { question: '数学题，___ 都做完了。', answer: '我', options: ['我', '他', '你', '谁'] },
        { question: '酒，___ 从来不喝。', answer: '我', options: ['我', '他', '你', '谁'] }
      ]
    },

    // ============================================================
    // HSK 4–5 — Relative Clauses & Advanced (g180–g189)
    // ============================================================
    {
      id: 'g180',
      title: '的字结构 — 关系从句',
      titleMeaning: 'Relative clauses with 的',
      level: 'HSK 4',
      category: 'Relative',
      commonMistake: 'Relative clauses with 的 go BEFORE the noun (like an adjective), NOT after like English. \'我买的书\' (book that I bought), not \'书我买的\'.',
      pattern: 'Clause + 的 + Noun',
      explanation: '汉语关系从句（定语从句）放在中心名词之前，用"的"连接。修饰语全部前置，与英语的"that/who"后置结构不同。从句可以是动词句、形容词句或主谓句。',
      examples: [
        { chinese: '我昨天买的那本书很有意思。', pinyin: 'Wǒ zuótiān mǎi de nà běn shū hěn yǒu yìsi.', meaning: 'The book that I bought yesterday is very interesting.' },
        { chinese: '那个穿红衣服的女孩是我同学。', pinyin: 'Nà ge chuān hóng yīfu de nǚhái shì wǒ tóngxué.', meaning: 'The girl wearing red clothes is my classmate.' },
        { chinese: '他说的那句话我不明白。', pinyin: 'Tā shuō de nà jù huà wǒ bù míngbai.', meaning: 'I don\'t understand that sentence he said.' }
      ],
      practice: [
        { question: '昨天 ___ 菜很好吃。', answer: '来的人做的', options: ['来的人做的', '来了人做的', '人来做的', '人来做'] },
        { question: '穿红衣服 ___ 那个女孩是我同学。', answer: '的', options: ['的', '得', '地', '了'] },
        { question: '我昨天买 ___ 书很有意思。', answer: '的', options: ['的', '得', '地', '了'] },
        { question: '去过中国 ___ 人都说好。', answer: '的', options: ['的', '得', '地', '了'] },
        { question: '他 ___ 那句话我不明白。', answer: '说的', options: ['说的', '说了', '说过', '说到'] },
        { question: '妈妈 ___ 饭最好吃。', answer: '做的', options: ['做的', '做了', '做过', '做到'] },
        { question: '你介绍 ___ 那个人我认识。', answer: '的', options: ['的', '得', '地', '了'] }
      ]
    },
    {
      id: 'g181',
      title: '难道...吗 — 反问句',
      titleMeaning: '难道...吗 rhetorical questions',
      level: 'HSK 4',
      category: 'Relative',
      commonMistake: '难道...吗 is rhetorical: the answer is already assumed. Don\'t use it for genuine questions — use 吗 alone instead.',
      pattern: '难道 + Statement + 吗？',
      explanation: '"难道...吗"构成反问句（修辞疑问句），用表面是问句的形式表达强烈的肯定或否定态度。意思是"我不相信不……"或"当然……"。语气强烈，带有反驳或质问的意味。',
      examples: [
        { chinese: '难道你不相信我吗？', pinyin: 'Nándào nǐ bù xiāngxìn wǒ ma?', meaning: 'Don\'t you believe me? (You should!)' },
        { chinese: '难道这不是真的吗？', pinyin: 'Nándào zhè bú shì zhēn de ma?', meaning: 'Isn\'t this true? (It is true!)' },
        { chinese: '难道你从来没有想过这个问题吗？', pinyin: 'Nándào nǐ cónglái méiyǒu xiǎng guo zhè ge wèntí ma?', meaning: 'Haven\'t you ever thought about this question?' }
      ],
      practice: [
        { question: '___ 你不觉得这样做不对 ___？', answer: '难道吗', options: ['难道吗', '是不是', '有没有', '可不可'] },
        { question: '___ 你不知道 ___？', answer: '难道吗', options: ['难道吗', '是不是', '有没有', '可不可'] },
        { question: '___ 这是我的错 ___？', answer: '难道吗', options: ['难道吗', '是不是', '有没有', '可不可'] },
        { question: '___ 他不相信 ___？', answer: '难道吗', options: ['难道吗', '是不是', '有没有', '可不可'] },
        { question: '___ 还有比这更重要的 ___？', answer: '难道吗', options: ['难道吗', '是不是', '有没有', '可不可'] },
        { question: '___ 他说谎了 ___？', answer: '难道吗', options: ['难道吗', '是不是', '有没有', '可不可'] },
        { question: '___ 你忘了 ___？', answer: '难道吗', options: ['难道吗', '是不是', '有没有', '可不可'] }
      ]
    },
    {
      id: 'g182',
      title: '不得不 — 双重否定',
      titleMeaning: '不得不 (have to / no choice but)',
      level: 'HSK 4',
      category: 'Relative',
      commonMistake: '不得不 conveys helplessness: forced by circumstance. Not for voluntary decisions. \'不得不加班\' = forced OT; \'想加班\' = want OT.',
      pattern: 'Subject + 不得不 + Verb Phrase',
      explanation: '"不得不"是双重否定结构，表示"没有别的选择，只能这样做"。语气比"必须"更强，强调客观情况迫使做某事，带有无奈或被迫的意味。',
      examples: [
        { chinese: '下大雨了，我不得不取消计划。', pinyin: 'Xià dà yǔ le, wǒ bùdébù qǔxiāo jìhuà.', meaning: 'It\'s raining heavily, I have no choice but to cancel the plan.' },
        { chinese: '为了生活，他不得不加班工作。', pinyin: 'Wèile shēnghuó, tā bùdébù jiābān gōngzuò.', meaning: 'For a living, he has to work overtime.' },
        { chinese: '她不得不离开家乡去大城市找工作。', pinyin: 'Tā bùdébù líkāi jiāxiāng qù dà chéngshì zhǎo gōngzuò.', meaning: 'She had to leave her hometown to find work in a big city.' }
      ],
      practice: [
        { question: '时间来不及了，我 ___ 打车去。', answer: '不得不', options: ['不得不', '不能不', '不要不', '不必不'] },
        { question: '为了生活他 ___ 每天加班。', answer: '不得不', options: ['不得不', '不能不', '不要不', '不必不'] },
        { question: '她 ___ 离开家乡去打工。', answer: '不得不', options: ['不得不', '不能不', '不要不', '不必不'] },
        { question: '堵车太严重了，___ 迟到。', answer: '不得不', options: ['不得不', '不能不', '不要不', '不必不'] },
        { question: '公司倒闭，我 ___ 重新找工。', answer: '不得不', options: ['不得不', '不能不', '不要不', '不必不'] },
        { question: '雨太大了，___ 取消活动。', answer: '不得不', options: ['不得不', '不能不', '不要不', '不必不'] },
        { question: '生病了 ___ 住院。', answer: '不得不', options: ['不得不', '不能不', '不要不', '不必不'] }
      ]
    },
    {
      id: 'g183',
      title: '不能不 — 不得不之辨',
      titleMeaning: '不能不 (must, cannot not)',
      level: 'HSK 5',
      category: 'Relative',
      commonMistake: '不能不 implies MORAL obligation or personal conviction. 不得不 implies EXTERNAL compulsion. The nuance is intent vs. circumstance.',
      pattern: 'Subject + 不能不 + Verb Phrase',
      explanation: '"不能不"也是双重否定，但语气与"不得不"有微妙区别。"不能不"强调主观上认为应该、理当如此，有道德或情理上的必然性；"不得不"则强调客观所迫、无奈举措。',
      examples: [
        { chinese: '你不能不去看他，他是你的好朋友。', pinyin: 'Nǐ bùnéng bú qù kàn tā, tā shì nǐ de hǎo péngyou.', meaning: 'You must go see him; he is your good friend.' },
        { chinese: '做人不能不讲信用。', pinyin: 'Zuòrén bùnéng bù jiǎng xìnyòng.', meaning: 'One must keep their word.' },
        { chinese: '我不得不去，因为老板命令了。', pinyin: 'Wǒ bùdébù qù, yīnwèi lǎobǎn mìnglìng le.', meaning: 'I had to go because the boss ordered it.' }
      ],
      practice: [
        { question: '在这件事上，我不 ___ 不认真对待。', answer: '能', options: ['能', '得', '会', '可'] },
        { question: '做人不 ___ 不讲信用。', answer: '能', options: ['能', '得', '会', '可'] },
        { question: '你不 ___ 不去看他，他是你朋友。', answer: '能', options: ['能', '得', '会', '可'] },
        { question: '这件事 ___ 不怪他。', answer: '不能', options: ['不能', '不得不', '不会', '不可以'] },
        { question: '做人 ___ 不诚实。', answer: '不能', options: ['不能', '不得不', '不会', '不可以'] },
        { question: '作为学生 ___ 不好好学习。', answer: '不能', options: ['不能', '不得不', '不会', '不可以'] },
        { question: '你 ___ 不承认自己的错误。', answer: '不能', options: ['不能', '不得不', '不会', '不可以'] }
      ]
    },
    {
      id: 'g184',
      title: '很/真/太 — 程度副词辨析',
      titleMeaning: '很 vs 真 vs 太 in degree emphasis',
      level: 'HSK 2',
      category: 'Relative',
      commonMistake: '很 is neutral/filler. 真 is exclamatory/surprised. 太...了 is excessive. \'很好\' (good); \'真好!\' (wow, great!); \'太好了!\' (awesome!).',
      pattern: '很/真/太 + Adjective',
      explanation: '"很"是中性程度副词，用于客观陈述，可单独成句；"真"带感叹语气，表示主观感受；"太"表过度或极致，常与"了"配合。"真"更口语化和带情感。',
      examples: [
        { chinese: '这本书很有意思。', pinyin: 'Zhè běn shū hěn yǒu yìsi.', meaning: 'This book is very interesting (neutral statement).' },
        { chinese: '这本书真有意思！', pinyin: 'Zhè běn shū zhēn yǒu yìsi!', meaning: 'This book is really interesting! (exclamatory).' },
        { chinese: '这本书太有意思了！', pinyin: 'Zhè běn shū tài yǒu yìsi le!', meaning: 'This book is so interesting! (excess/awesome).' }
      ],
      practice: [
        { question: '你 ___ 好啊！见到你很高兴。', answer: '真', options: ['真', '很', '太', '多'] },
        { question: '这本书 ___ 好看了！', answer: '太', options: ['太', '很', '真', '多'] },
        { question: '今天天气 ___ 不错。', answer: '很', options: ['很', '真', '太', '多'] },
        { question: '你 ___ 是太好了！', answer: '真', options: ['真', '很', '太', '多'] },
        { question: '这地方 ___ 漂亮啊！', answer: '真', options: ['真', '很', '太', '多'] },
        { question: '今天 ___ 快乐了！', answer: '太', options: ['太', '很', '真', '多'] },
        { question: '我 ___ 喜欢这部电影。', answer: '很', options: ['很', '真', '太', '多'] }
      ]
    },
    {
      id: 'g185',
      title: '句末语气词 — 啊、嘛、呢、吗',
      titleMeaning: 'Sentence-final particles: 啊, 嘛, 呢, 吗 compared',
      level: 'HSK 3',
      category: 'Relative',
      commonMistake: 'Particle choice (啊/嘛/呢/吗) reflects SPEAKER ATTITUDE, not grammar. Using wrong particle changes tone: \'你好吗？\' (neutral) vs \'你好啊！\' (warm).',
      pattern: 'Sentence + 啊/嘛/呢/吗',
      explanation: '句末语气词传达丰富的语用信息——"啊"表舒缓、提醒、感叹；"嘛"表显而易见；"呢"表提醒或夸张；"吗"表纯疑问。这些词仅表情态，不改变命题意义。选用需结合语境和语气。',
      examples: [
        { chinese: '你快点啊！', pinyin: 'Nǐ kuài diǎn a!', meaning: 'Hurry up!' },
        { chinese: '这很简单嘛！', pinyin: 'Zhè hěn jiǎndān ma!', meaning: 'This is so simple! (obviously).' },
        { chinese: '他在家呢。', pinyin: 'Tā zài jiā ne.', meaning: 'He is at home (reminding/informing).' },
        { chinese: '好吗？', pinyin: 'Hǎo ma?', meaning: 'Is it okay?' }
      ],
      practice: [
        { question: '时间不早了 ___。', answer: '啊', options: ['啊', '吗', '嘛', '吧'] },
        { question: '快点 ___，要迟到了。', answer: '啊', options: ['啊', '吗', '嘛', '吧'] },
        { question: '这很简单 ___！', answer: '嘛', options: ['嘛', '吗', '呢', '吧'] },
        { question: '他在家 ___。', answer: '呢', options: ['呢', '啊', '嘛', '吧'] },
        { question: '好 ___？', answer: '吗', options: ['吗', '啊', '嘛', '吧'] },
        { question: '你怎么还不去 ___？', answer: '啊', options: ['啊', '吗', '嘛', '吧'] },
        { question: '你快点 ___。', answer: '吧', options: ['吧', '吗', '呢', '啊'] }
      ]
    },
    {
      id: 'g186',
      title: '不是...就是... — 二选一',
      titleMeaning: '不是...就是... for "either...or" (exclusive)',
      level: 'HSK 4',
      category: 'Relative',
      commonMistake: '不是...就是 signals EXCLUSIVE either-or (must be one or the other). Not for open free choice — use 或者 for that.',
      pattern: '不是 + Option A，就是 + Option B',
      explanation: '"不是...就是..."表示两种情况必居其一，排除其他可能性。暗含说话人对这两种选择有所判断或无奈。与"或者...或者..."不同，"不是...就是..."强调非此即彼的排他性。',
      examples: [
        { chinese: '他不是在看书，就是在写东西。', pinyin: 'Tā bú shì zài kàn shū, jiù shì zài xiě dōngxi.', meaning: 'He is either reading or writing (nothing else).' },
        { chinese: '周末我不是在家睡觉，就是出去逛街。', pinyin: 'Zhōumò wǒ bú shì zài jiā shuìjiào, jiù shì chūqù guàngjiē.', meaning: 'On weekends I\'m either sleeping at home or out shopping.' },
        { chinese: '这件事不是你去做，就是我去做。', pinyin: 'Zhè jiàn shì bú shì nǐ qù zuò, jiù shì wǒ qù zuò.', meaning: 'Either you do it, or I do it.' }
      ],
      practice: [
        { question: '每天他 ___ 玩游戏，___ 在看视频。', answer: '不是就是', options: ['不是就是', '不是而是', '虽然但是', '因为所以'] },
        { question: '周末 ___ 学习 ___ 出去玩。', answer: '不是就是', options: ['不是就是', '不是而是', '虽然但是', '因为所以'] },
        { question: '这件事 ___ 你 ___ 我做。', answer: '不是就是', options: ['不是就是', '不是而是', '虽然但是', '因为所以'] },
        { question: '他 ___ 在睡觉 ___ 在发呆。', answer: '不是就是', options: ['不是就是', '不是而是', '虽然但是', '因为所以'] },
        { question: '午饭 ___ 面条 ___ 米饭。', answer: '不是就是', options: ['不是就是', '不是而是', '虽然但是', '因为所以'] },
        { question: '他 ___ 迟到 ___ 请假。', answer: '不是就是', options: ['不是就是', '不是而是', '虽然但是', '因为所以'] },
        { question: '答案 ___ A ___ B。', answer: '不是就是', options: ['不是就是', '不是而是', '虽然但是', '因为所以'] }
      ]
    },
    {
      id: 'g187',
      title: '又...又... — 并列叠加',
      titleMeaning: '又...又... for "both...and"',
      level: 'HSK 3',
      category: 'Relative',
      commonMistake: '又...又 connects two SIMULTANEOUS qualities. Both must be compatible (same valence). \'又大又小\' is paradoxical; \'又大又圆\' works.',
      pattern: '又 + Adj/Verb + 又 + Adj/Verb',
      explanation: '"又...又..."并列连接两个形容词或动词，表示两种状态或动作同时存在。可以用同一主语，也可用不同主语。强调"两种特性集中在一人或一物身上"。',
      examples: [
        { chinese: '这个菜又好吃又便宜。', pinyin: 'Zhè ge cài yòu hǎochī yòu piányi.', meaning: 'This dish is both delicious and cheap.' },
        { chinese: '她又会唱歌又会跳舞。', pinyin: 'Tā yòu huì chànggē yòu huì tiàowǔ.', meaning: 'She can both sing and dance.' },
        { chinese: '雨又大，风又紧。', pinyin: 'Yǔ yòu dà, fēng yòu jǐn.', meaning: 'The rain is heavy and the wind is strong.' }
      ],
      practice: [
        { question: '他的房间 ___ 干净 ___ 整齐。', answer: '又又', options: ['又又', '也也', '越越', '又也'] },
        { question: '这个菜 ___ 好吃 ___ 便宜。', answer: '又又', options: ['又又', '也也', '越越', '又也'] },
        { question: '她 ___ 会唱歌 ___ 会跳舞。', answer: '又又', options: ['又又', '也也', '越越', '又也'] },
        { question: '今天的风 ___ 大，雨 ___ 急。', answer: '又又', options: ['又又', '也也', '越越', '又也'] },
        { question: '这部手机 ___ 轻 ___ 薄。', answer: '又又', options: ['又又', '也也', '越越', '又也'] },
        { question: '这家店 ___ 便宜 ___ 好吃。', answer: '又又', options: ['又又', '也也', '越越', '又也'] },
        { question: '我的房间 ___ 小 ___ 暗。', answer: '又又', options: ['又又', '也也', '越越', '又也'] }
      ]
    },
    {
      id: 'g188',
      title: '边...边... — 同时进行',
      titleMeaning: '边...边... for simultaneous actions',
      level: 'HSK 3',
      category: 'Relative',
      commonMistake: '边...边 needs BOTH actions to be doable simultaneously. Can\'t 边睡觉边跑步 (sleep and run at same time). Use for realistic concurrent actions.',
      pattern: '边 + Verb A + 边 + Verb B',
      explanation: '"边...边..."表示两个动作同时进行。用于同一个主语同时做两件事。"一边...一边..."是其完整形式，口语中常省略"一"。两动作通常一个为持续性动作，一个为伴随动作。',
      examples: [
        { chinese: '我边走边看手机。', pinyin: 'Wǒ biān zǒu biān kàn shǒujī.', meaning: 'I walk while looking at my phone.' },
        { chinese: '他喜欢边听音乐边做作业。', pinyin: 'Tā xǐhuan biān tīng yīnyuè biān zuò zuòyè.', meaning: 'He likes to listen to music while doing homework.' },
        { chinese: '老师一边写一边解释。', pinyin: 'Lǎoshī yìbiān xiě yìbiān jiěshì.', meaning: 'The teacher writes and explains at the same time.' }
      ],
      practice: [
        { question: '不要 ___ 吃饭 ___ 看电视。', answer: '边边', options: ['边边', '又又', '也也', '在在'] },
        { question: '我 ___ 走 ___ 听音乐。', answer: '边边', options: ['边边', '又又', '也也', '在在'] },
        { question: '他 ___ 工作 ___ 学习。', answer: '边边', options: ['边边', '又又', '也也', '在在'] },
        { question: '___ 唱歌 ___ 弹吉他。', answer: '边边', options: ['边边', '又又', '也也', '在在'] },
        { question: '不要 ___ 开车 ___ 打电话。', answer: '边边', options: ['边边', '又又', '也也', '在在'] },
        { question: '妈妈 ___ 做饭 ___ 跟朋友聊天。', answer: '边边', options: ['边边', '又又', '也也', '在在'] },
        { question: '我 ___ 跑步 ___ 听广播。', answer: '边边', options: ['边边', '又又', '也也', '在在'] }
      ]
    },
    {
      id: 'g189',
      title: '是...而不是... — 取舍对比',
      titleMeaning: '是...而不是... for "it is...not..."',
      level: 'HSK 5',
      category: 'Relative',
      commonMistake: '是...而不是 explicitly affirms A and rejects B. Stronger contrast than just stating A. \'是努力不是运气\' = it WAS effort, NOT luck.',
      pattern: 'Subject + 是 + Choice A + 而不是 + Choice B',
      explanation: '"是...而不是..."用来对两者进行取舍或正误辨别，肯定前项(A)，否定后项(B)。常用于澄清误解、强调真相或表达作者的立场判断。',
      examples: [
        { chinese: '这是你的责任，而不是我的。', pinyin: 'Zhè shì nǐ de zérèn, ér bú shì wǒ de.', meaning: 'This is your responsibility, not mine.' },
        { chinese: '成功是靠努力，而不是靠运气。', pinyin: 'Chénggōng shì kào nǔlì, ér bú shì kào yùnqi.', meaning: 'Success comes from hard work, not luck.' },
        { chinese: '他是我的老师，而不是我的同事。', pinyin: 'Tā shì wǒ de lǎoshī, ér bú shì wǒ de tóngshì.', meaning: 'He is my teacher, not my colleague.' }
      ],
      practice: [
        { question: '这是对 ___ 错，___ 是错。', answer: '而不是', options: ['而不是', '或者是', '也不是', '却是'] },
        { question: '成功靠努力 ___ 运气。', answer: '而不是', options: ['而不是', '而且是', '或者是', '也是'] },
        { question: '他是老师 ___ 学生。', answer: '而不是', options: ['而不是', '或者是', '也是', '可是'] },
        { question: '这是你的问题 ___ 我的。', answer: '而不是', options: ['而不是', '或者是', '也是', '可是'] },
        { question: '关键在质量 ___ 数量。', answer: '而不是', options: ['而不是', '或者是', '也是', '可是'] },
        { question: '幸福来自内心 ___ 外物。', answer: '而不是', options: ['而不是', '或者是', '也是', '可是'] },
        { question: '他要的是尊重 ___ 同情。', answer: '而不是', options: ['而不是', '或者是', '也是', '可是'] }
      ]
    }
  ],

  mergeWithMain: function () {
    if (typeof GrammarData !== 'undefined' && GrammarData.lessons) {
      GrammarData.lessons.push.apply(GrammarData.lessons, this.lessons);
    }
  },

  get count() {
    return this.lessons.length;
  }
};

if (typeof GrammarData !== 'undefined') {
  GrammarQuadruple.mergeWithMain();
}

window.GrammarQuadruple = GrammarQuadruple;

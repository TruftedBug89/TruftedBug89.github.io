const fs = require('fs');
const path = require('path');

const levels = ['HSK 1','HSK 2','HSK 3','HSK 4','HSK 5'];
const categories = ['Aspect','BaBei','Comparisons','Complements','Connectors','DeShi','Particles','Conditionals','Passive','ResultComp','DirectionComp','PotentialComp','RelativeClauses','Questions','Negation','TimeExpressions'];

const grammarTemplates = [
  // HSK 1 - Basic structures
  {t:'是 (shì) - To be',tm:'To be',l:'HSK 1',cat:'Aspect',pat:'Subject + 是 + Noun',exp:'"是"表示主语和名词之间的等同或归类关系，是最基本的系动词。',
   ex:[{cn:'我是学生。',py:'wǒ shì xuéshēng',en:'I am a student.'},{cn:'他是老师。',py:'tā shì lǎoshī',en:'He is a teacher.'},{cn:'这是书。',py:'zhè shì shū',en:'This is a book.'}],
   cm:{s:'我是学生好。',c:'我是学生。',e:'"是"后面直接跟名词，不需要加形容词。'},
   es:[{q:'我___学生。',o:['是','有','在','去'],c:0},{q:'他___老师。',o:['是','有','在','去'],c:0},{q:'这___书。',o:['是','有','在','去'],c:0}]},
  {t:'有 (yǒu) - To have',tm:'To have/There is',l:'HSK 1',cat:'Aspect',pat:'Subject + 有 + Object',exp:'"有"表示拥有或存在，否定形式用"没"。', ex:[{cn:'我有一本书。',py:'wǒ yǒu yī běn shū',en:'I have a book.'},{cn:'他有一个妹妹。',py:'tā yǒu yī gè mèimei',en:'He has a younger sister.'},{cn:'桌子上有一杯水。',py:'zhuōzi shàng yǒu yī bēi shuǐ',en:'There is a glass of water on the table.'}],
   cm:{s:'我没有一本书。',c:'我没有书。',e:'有字句的否定用"没有"，不需要量词。"一本书"的"一"可以省略。'},
   es:[{q:'我___一本书。',o:['有','是','在','能'],c:0},{q:'他___妹妹。',o:['有','是','在','能'],c:0},{q:'桌子上___水。',o:['有','是','在','能'],c:0}]},
  {t:'在 (zài) - At/In',tm:'Location marker',l:'HSK 1',cat:'Aspect',pat:'Subject + 在 + Place + Verb',exp:'"在"表示动作发生的地点或位置。后面接地点名词，然后接动词短语。',
   ex:[{cn:'我在学校学习。',py:'wǒ zài xuéxiào xuéxí',en:'I study at school.'},{cn:'他在家吃饭。',py:'tā zài jiā chīfàn',en:'He eats at home.'},{cn:'她在办公室工作。',py:'tā zài bàngōngshì gōngzuò',en:'She works in the office.'}],
   cm:{s:'我在学校。学习。',c:'我在学校学习。',e:'"在"引导的处所状语直接放在动词前，不需要停顿。'},
   es:[{q:'我___学校学习。',o:['在','到','从','去'],c:0},{q:'他___家吃饭。',o:['在','到','从','去'],c:0},{q:'她___办公室工作。',o:['在','到','从','去'],c:0}]},
  {t:'不 (bù) - Negation',tm:'Negation marker',l:'HSK 1',cat:'Aspect',pat:'Subject + 不 + Verb/Adjective',exp:'"不"用于否定动词或形容词，表示主观上不做某事或不是某种状态。',
   ex:[{cn:'我不去。',py:'wǒ bù qù',en:'I am not going.'},{cn:'他不高。',py:'tā bù gāo',en:'He is not tall.'},{cn:'这个不贵。',py:'zhège bù guì',en:'This is not expensive.'}],
   cm:{s:'我不好。',c:'我不好（表示身体不适或状态不好）',e:'"不"直接用在形容词前，不需要其他助词。'},
   es:[{q:'我___去。',o:['不','没','别','无'],c:0},{q:'他___高。',o:['不','没','别','无'],c:0},{q:'这个___贵。',o:['不','没','别','无'],c:0}]},
  {t:'很 (hěn) - Very',tm:'Degree adverb',l:'HSK 1',cat:'Aspect',pat:'Subject + 很 + Adjective',exp:'"很"是最常用的程度副词，放在形容词前表示程度。在陈述句中"很"常用来连接主语和形容词，不一定强调"非常"的意思。',
   ex:[{cn:'她很高。',py:'tā hěn gāo',en:'She is tall.'},{cn:'今天很热。',py:'jīntiān hěn rè',en:'Today is hot.'},{cn:'这个菜很好吃。',py:'zhège cài hěn hǎochī',en:'This dish is delicious.'}],
   cm:{s:'她很漂亮很。',c:'她很漂亮。',e:'"很"只能放在形容词前面，不能放在后面。'},
   es:[{q:'她___高。',o:['很','是','有','在'],c:0},{q:'今天___热。',o:['很','是','有','在'],c:0},{q:'这个菜___好吃。',o:['很','是','有','在'],c:0}]},

  // HSK 2 - Time/Progress
  {t:'正在 (zhèngzài) - In progress',tm:'Action in progress',l:'HSK 2',cat:'Aspect',pat:'Subject + 正在 + Verb + (呢)',exp:'"正在"表示动作正在进行中，常与句尾的"呢"一起使用。',
   ex:[{cn:'我正在吃饭呢。',py:'wǒ zhèngzài chīfàn ne',en:'I am eating.'},{cn:'他正在打电话。',py:'tā zhèngzài dǎ diànhuà',en:'He is on the phone.'},{cn:'孩子们正在玩游戏。',py:'háizimen zhèngzài wán yóuxì',en:'The children are playing games.'}],
   cm:{s:'我正在吃饭了。',c:'我正在吃饭呢。',e:'"正在"表示进行中，不与"了"连用。应该用"呢"。'},
   es:[{q:'我___吃饭。',o:['正在','已经','了','过'],c:0},{q:'他___打电话。',o:['正在','已经','了','过'],c:0},{q:'他们___上课。',o:['正在','已经','了','过'],c:0}]},
  {t:'了 (le) - Change of state',tm:'Change of state',l:'HSK 2',cat:'Aspect',pat:'Subject + Verb + (Object) + 了',exp:'句尾"了"表示情况发生了变化或出现了新情况。',
   ex:[{cn:'下雨了。',py:'xià yǔ le',en:'It is raining now.'},{cn:'我知道了。',py:'wǒ zhīdào le',en:'I understand now.'},{cn:'他走了。',py:'tā zǒu le',en:'He has left.'}],
   cm:{s:'我吃饭了。',c:'我吃饭了。(表示动作已经完成或情况已发生)',e:'句尾"了"可以表示变化，也可以表示动作完成。'},
   es:[{q:'下___。',o:['雨了','雨','雨吗','雨吧'],c:0},{q:'我___了。',o:['知道','知道','知道吗','知道吧'],c:0},{q:'他___了。',o:['走','走','走吗','走吧'],c:0}]},

  // HSK 3 - Key particles
  {t:'的 (de) - Attribute marker',tm:'Attribute/Modifier marker',l:'HSK 3',cat:'DeShi',pat:'Modifier + 的 + Noun',exp:'"的"连接修饰语和名词，表示定语关系。可以是形容词、名词、代词或动词短语作定语。',
   ex:[{cn:'我的书',py:'wǒ de shū',en:'my book'},{cn:'漂亮的花',py:'piàoliang de huā',en:'beautiful flowers'},{cn:'昨天买的衣服',py:'zuótiān mǎi de yīfu',en:'the clothes bought yesterday'}],
   cm:{s:'我书',c:'我的书',e:'代词作定语一般要加"的"，表示所属关系。'},
   es:[{q:'我___书',o:['的','得','地','了'],c:0},{q:'漂亮___花',o:['的','得','地','了'],c:0},{q:'他___朋友',o:['的','得','地','了'],c:0}]},
  {t:'得 (de) - Complement marker',tm:'Degree/Result complement',l:'HSK 3',cat:'Complements',pat:'Verb + 得 + Complement',exp:'"得"用在动词后面引出程度或结果补语，表示动作达到的程度或产生的效果。',
   ex:[{cn:'他说得很好。',py:'tā shuō de hěn hǎo',en:'He speaks very well.'},{cn:'我跑得很快。',py:'wǒ pǎo de hěn kuài',en:'I run very fast.'},{cn:'她唱得很好听。',py:'tā chàng de hěn hǎotīng',en:'She sings beautifully.'}],
   cm:{s:'他说的很好。',c:'他说得很好。',e:'程度补语要用"得"（补语标记），不是"的"（定语标记）。'},
   es:[{q:'他说___很好。',o:['得','的','地','了'],c:0},{q:'我跑___很快。',o:['得','的','地','了'],c:0},{q:'她唱___很好听。',o:['得','的','地','了'],c:0}]},
  {t:'地 (de) - Adverbial marker',tm:'Adverbial marker',l:'HSK 3',cat:'DeShi',pat:'Adjective/Adverb + 地 + Verb',exp:'"地"放在形容词或副词后面，修饰动词，相当于英语的-ly。口语中有时用"的"代替，但书面语必须用"地"。',
   ex:[{cn:'他高兴地说。',py:'tā gāoxìng de shuō',en:'He said happily.'},{cn:'她认真地学习。',py:'tā rènzhēn de xuéxí',en:'She studies seriously.'},{cn:'他慢慢地走。',py:'tā mànmàn de zǒu',en:'He walks slowly.'}],
   cm:{s:'他高兴的说。',c:'他高兴地说。',e:'修饰动词应该用"地"而不是"的"。'},
   es:[{q:'他高兴___说。',o:['地','的','得','了'],c:0},{q:'她认真___学习。',o:['地','的','得','了'],c:0},{q:'他慢慢___走。',o:['地','的','得','了'],c:0}]},
  {t:'比 (bǐ) - Comparison',tm:'Comparison',l:'HSK 3',cat:'Comparisons',pat:'A + 比 + B + Adjective',exp:'"比"用于比较两个事物之间的差别，A比B更怎么样。否定用"没有"或"不如"。',
   ex:[{cn:'他比我高。',py:'tā bǐ wǒ gāo',en:'He is taller than me.'},{cn:'今天比昨天冷。',py:'jīntiān bǐ zuótiān lěng',en:'Today is colder than yesterday.'},{cn:'这个比那个贵。',py:'zhège bǐ nàge guì',en:'This is more expensive than that.'}],
   cm:{s:'我比他很高。',c:'我比他高。(不能加"很")',e:'"比"字句中形容词前不用"很""非常"等程度副词。'},
   es:[{q:'他___我高。',o:['比','和','跟','像'],c:0},{q:'今天___昨天冷。',o:['比','和','跟','像'],c:0},{q:'这个___那个贵。',o:['比','和','跟','像'],c:0}]},

  // HSK 3 - Verb complements
  {t:'结果补语 - 完 (wán)',tm:'Result complement: finish',l:'HSK 3',cat:'ResultComp',pat:'Verb + 完 + (Object)',exp:'结果补语"完"放在动词后面，表示动作完成、做完了。是汉语中最常用的结果补语之一。',
   ex:[{cn:'我吃完晚饭了。',py:'wǒ chī wán wǎnfàn le',en:'I finished eating dinner.'},{cn:'作业做完了吗？',py:'zuòyè zuò wán le ma',en:'Have you finished the homework?'},{cn:'我看完这本书了。',py:'wǒ kàn wán zhè běn shū le',en:'I finished reading this book.'}],
   cm:{s:'我吃完完饭了。',c:'我吃完饭了。',e:'补语已经包含"完"的意思，动词后只加一个"完"。'},
   es:[{q:'我做___作业了。',o:['完','到','好','了'],c:0},{q:'你看___这本书了吗？',o:['完','到','好','了'],c:0},{q:'他吃___饭了。',o:['完','到','好','了'],c:0}]},
  {t:'结果补语 - 到 (dào)',tm:'Result complement: arrive at',l:'HSK 3',cat:'ResultComp',pat:'Verb + 到 + Object',exp:'结果补语"到"表示通过动作达到了某个目标或结果。',
   ex:[{cn:'我找到钥匙了。',py:'wǒ zhǎo dào yàoshi le',en:'I found the keys.'},{cn:'他买到票了。',py:'tā mǎi dào piào le',en:'He bought the ticket.'},{cn:'你收到我的信了吗？',py:'nǐ shōu dào wǒ de xìn le ma',en:'Did you receive my letter?'}],
   cm:{s:'我找钥匙到了。',c:'我找到钥匙了。',e:'补语"到"要紧跟在动词后面，宾语放在补语后面。'},
   es:[{q:'我找___钥匙了。',o:['到','完','好','了'],c:0},{q:'他买___票了。',o:['到','完','好','了'],c:0},{q:'你收___我的信了吗？',o:['到','完','好','了'],c:0}]},
  {t:'结果补语 - 好 (hǎo)',tm:'Result complement: ready',l:'HSK 3',cat:'ResultComp',pat:'Verb + 好 + (Object)',exp:'结果补语"好"表示动作已经完成并且达到了满意的状态或准备好了。',
   ex:[{cn:'我已经准备好了。',py:'wǒ yǐjīng zhǔnbèi hǎo le',en:'I am ready.'},{cn:'饭做好了。',py:'fàn zuò hǎo le',en:'The food is ready.'},{cn:'你睡好了吗？',py:'nǐ shuì hǎo le ma',en:'Did you sleep well?'}],
   cm:{s:'我做准备了好。',c:'我准备好了。',e:'补语"好"要放在动词后面，不能放在句尾。（句尾"了"表示状态变化。）'},
   es:[{q:'我准备___了。',o:['好','完','到','了'],c:0},{q:'饭做___了。',o:['好','完','到','了'],c:0},{q:'你睡___了吗？',o:['好','完','到','了'],c:0}]},

  // Direction complements
  {t:'趋向补语 - 来/去 (lái/qù)',tm:'Direction complement: come/go',l:'HSK 3',cat:'DirectionComp',pat:'Verb + 来/去',exp:'趋向补语"来/去"表示动作的方向——"来"朝着说话人，"去"远离说话人。',
   ex:[{cn:'他走进来了。',py:'tā zǒu jìnlái le',en:'He walked in.'},{cn:'我跑过去了。',py:'wǒ pǎo guòqù le',en:'I ran over there.'},{cn:'请站起来。',py:'qǐng zhàn qǐlái',en:'Please stand up.'}],
   cm:{s:'他走进来我了。',c:'他走进来了。',e:'趋向补语"来/去"紧跟在动词后面，宾语不插入补语中。'},
   es:[{q:'他走___了。',o:['进来','出来','上去','下去'],c:0},{q:'请站___。',o:['起来','进来','过来','出去'],c:0},{q:'我跑___了。',o:['过去','下来','回来','起来'],c:0}]},
  {t:'趋向补语 - 上/下 (shàng/xià)',tm:'Direction complement: up/down',l:'HSK 3',cat:'DirectionComp',pat:'Verb + 上/下 + 来/去',exp:'复合趋向补语"上来/上去/下来/下去"表示动作的方向和位置关系。',
   ex:[{cn:'他走上楼去了。',py:'tā zǒu shàng lóu qù le',en:'He walked upstairs.'},{cn:'你下来吧。',py:'nǐ xiàlái ba',en:'Come down.'},{cn:'他跳下水去了。',py:'tā tiào xià shuǐ qù le',en:'He jumped down into the water.'}],
   cm:{s:'他走上去了楼。',c:'他走上楼去了。',e:'宾语放在复合趋向补语的中间：动词+上/下+宾语+来/去。'},
   es:[{q:'他走___去了。',o:['上楼','下楼','上楼','下楼'],c:0},{q:'你___吧。',o:['下来','上去','进来','出去'],c:0},{q:'他跳___去了。',o:['下水','下水','下水','下水'],c:0}]},

  // Potential complements
  {t:'可能补语 - 得/不了 (de/bùliǎo)',tm:'Potential complement: can/cannot',l:'HSK 3',cat:'PotentialComp',pat:'Verb + 得/不 + 结果补语',exp:'可能补语表示动作能否达到某种结果。"V+得了"表示"能V"，"V+不了"表示"不能V"。',
   ex:[{cn:'这么多作业我做得完。',py:'zhème duō zuòyè wǒ zuò de wán',en:'I can finish so much homework.'},{cn:'这件事我做不了。',py:'zhè jiàn shì wǒ zuò bù liǎo',en:'I cannot do this thing.'},{cn:'他明天来得了吗？',py:'tā míngtiān lái de liǎo ma',en:'Can he come tomorrow?'}],
   cm:{s:'我做得完不了。',c:'我做得完。/我做不完。',e:'可能补语的肯定和否定形式不同，不能混用。肯定用"得"，否定用"不"。'},
   es:[{q:'我吃___了这碗饭。',o:['得了','不了','得了','不了'],c:0},{q:'他明天来___了。',o:['得了','不了','得了','不了'],c:0},{q:'这件事我做___。',o:['不了','得了','不了','得了'],c:0}]},

  // HSK 4 - Complex structures
  {t:'把 (bǎ) - Disposal',tm:'Disposal construction',l:'HSK 4',cat:'BaBei',pat:'Subject + 把 + Object + Verb + Complement',exp:'把字句表示对宾语进行处置或施加影响。宾语必须是已知的、特定的。"把"后的动词不能是简单形式，必须带补语或"了"。',
   ex:[{cn:'请把门关上。',py:'qǐng bǎ mén guān shàng',en:'Please close the door.'},{cn:'他把作业做完了。',py:'tā bǎ zuòyè zuò wán le',en:'He finished his homework.'},{cn:'我把手机丢了。',py:'wǒ bǎ shǒujī diū le',en:'I lost my phone.'}],
   cm:{s:'把他打。',c:'把他打了一顿。/把他打伤了。',e:'把字句的动词不能是光杆动词，必须带补语或"了"。'},
   es:[{q:'请___门关上。',o:['把','被','让','给'],c:0},{q:'他___作业做完了。',o:['把','被','让','给'],c:0},{q:'我___手机丢了。',o:['把','被','让','给'],c:0}]},
  {t:'被 (bèi) - Passive voice',tm:'Passive voice',l:'HSK 4',cat:'Passive',pat:'Subject + 被 + (Agent) + Verb + Complement',exp:'"被"表示被动，主语是动作的承受者。常用于表示不好的或出乎意料的事情。口语中可以用"叫"或"让"代替。',
   ex:[{cn:'钱包被偷了。',py:'qiánbāo bèi tōu le',en:'The wallet was stolen.'},{cn:'他被老师批评了。',py:'tā bèi lǎoshī pīpíng le',en:'He was criticized by the teacher.'},{cn:'窗户被风吹开了。',py:'chuānghu bèi fēng chuī kāi le',en:'The window was blown open by the wind.'}],
   cm:{s:'他被老师。',c:'他被老师批评了。',e:'"被"字句的动词不能是光杆动词，需要带补语或"了"等成分。'},
   es:[{q:'钱包___偷了。',o:['被','把','让','给'],c:0},{q:'他___老师表扬了。',o:['被','把','让','给'],c:0},{q:'窗户___风吹开了。',o:['被','把','让','给'],c:0}]},
  {t:'让/叫 (ràng/jiào) - Causative/Passive',tm:'Let/cause/passive',l:'HSK 4',cat:'Passive',pat:'Subject + 让/叫 + Person + Verb',exp:'"让"和"叫"可以表示使令（让某人做某事）或者在口语中代替"被"表示被动。',
   ex:[{cn:'妈妈让我去超市。',py:'māma ràng wǒ qù chāoshì',en:'Mom asked me to go to the supermarket.'},{cn:'我叫他骗了。',py:'wǒ jiào tā piàn le',en:'I was cheated by him.'},{cn:'老师让学生回答问题。',py:'lǎoshī ràng xuéshēng huídá wèntí',en:'The teacher asked students to answer questions.'}],
   cm:{s:'让我去商店。',c:'他让我去商店。(兼语句需要有主语)',e:'兼语句的主语不能省略，必须明确是谁让谁做什么。'},
   es:[{q:'妈妈___我去超市。',o:['让','叫','被','把'],c:0},{q:'我___他骗了。',o:['叫','让','被','把'],c:0},{q:'老师___学生回答问题。',o:['让','叫','被','把'],c:0}]},
  {t:'如果...就 (rúguǒ...jiù) - If',tm:'Conditional',l:'HSK 4',cat:'Conditionals',pat:'如果 + Condition, 就 + Result',exp:'"如果...就"表示假设关系。如果条件成立，就会导致后面的结果。"就"可以换成"那""那么"等。',
   ex:[{cn:'如果明天下雨，我就不去了。',py:'rúguǒ míngtiān xià yǔ, wǒ jiù bù qù le',en:'If it rains tomorrow, I will not go.'},{cn:'如果你想去，我们就去。',py:'rúguǒ nǐ xiǎng qù, wǒmen jiù qù',en:'If you want to go, we will go.'}],
   cm:{s:'如果要下雨，我就不去。',c:'如果明天下雨，我就不去。',e:'条件句的两个分句主语不同时，各自的主语不能省略。'},
   es:[{q:'___下雨，我___不去了。',o:['如果...就','因为...所以','虽然...但是','不仅...而且'],c:0},{q:'___你想去，我们___去。',o:['如果...就','因为...所以','虽然...但是','不仅...而且'],c:0}]},
  {t:'要是...就 (yàoshi...jiù) - If (colloquial)',tm:'If (spoken)',l:'HSK 4',cat:'Conditionals',pat:'要是 + Condition, 就 + Result',exp:'"要是...就"和"如果...就"意思相同，但"要是"更口语化，常用于日常对话。',
   ex:[{cn:'要是你累了，就先休息吧。',py:'yàoshi nǐ lèi le, jiù xiān xiūxi ba',en:'If you are tired, rest first.'},{cn:'要是不行，我们再想办法。',py:'yàoshi bù xíng, wǒmen zài xiǎng bànfǎ',en:'If it does not work, we will think of another way.'}],
   cm:{s:'要是明天不下雨了就出去玩。',c:'要是明天不下雨，我们就出去玩。',e:'"要是"引导的条件分句和结果分句之间要有停顿。结果分句最好加"就"。'},
   es:[{q:'___你累了，___先休息吧。',o:['要是...就','如果...那么','因为...所以','虽然...但是'],c:0},{q:'___不行，我们___想办法。',o:['要是...就','如果...那么','因为...所以','虽然...但是'],c:0}]},
  {t:'只要...就 (zhǐyào...jiù) - As long as',tm:'As long as',l:'HSK 4',cat:'Conditionals',pat:'只要 + Condition, 就 + Result',exp:'"只要...就"表示充分条件（必要条件）。只要条件满足，结果就能实现。与"只有...才"（必要条件）不同。',
   ex:[{cn:'只要你努力，就能成功。',py:'zhǐyào nǐ nǔlì, jiù néng chénggōng',en:'As long as you work hard, you can succeed.'},{cn:'只要不下雨，我们就去公园。',py:'zhǐyào bù xià yǔ, wǒmen jiù qù gōngyuán',en:'As long as it does not rain, we will go to the park.'}],
   cm:{s:'只要你努力才能成功。',c:'只要你努力就能成功。(用"就"，不用"才")',e:'"只要...就"和"只有...才"的搭配不同，不能混用。'},
   es:[{q:'___你努力，___能成功。',o:['只要...就','只有...才','如果...就','因为...所以'],c:0},{q:'___不下雨，我们___去公园。',o:['只要...就','只有...才','如果...就','因为...所以'],c:0}]},

  // HSK 4 - More complements
  {t:'结果补语 - 住 (zhù)',tm:'Result complement: firm/stuck',l:'HSK 4',cat:'ResultComp',pat:'Verb + 住',exp:'结果补语"住"表示动作使事物固定或保持在某个状态。',
   ex:[{cn:'我记住了这个字。',py:'wǒ jì zhù le zhège zì',en:'I memorized this character.'},{cn:'他抓住了小偷。',py:'tā zhuā zhù le xiǎotōu',en:'He caught the thief.'},{cn:'请拿住这个包。',py:'qǐng ná zhù zhège bāo',en:'Please hold this bag.'}],
   cm:{s:'我记了这个字住。',c:'我记住了这个字。',e:'补语"住"要紧跟在动词后，宾语放在补语后。'},
   es:[{q:'我记___这个字了。',o:['住','到','完','好'],c:0},{q:'他抓___了小偷。',o:['住','到','完','好'],c:0},{q:'请拿___这个包。',o:['住','到','完','好'],c:0}]},
  {t:'结果补语 - 懂 (dǒng)',tm:'Result complement: understand',l:'HSK 4',cat:'ResultComp',pat:'Verb + 懂',exp:'结果补语"懂"表示通过听、看、学等动作达到了理解的结果。',
   ex:[{cn:'我听懂了你的意思。',py:'wǒ tīng dǒng le nǐ de yìsi',en:'I understood what you meant.'},{cn:'你看懂这篇文章了吗？',py:'nǐ kàn dǒng zhè piān wénzhāng le ma',en:'Did you understand this article?'},{cn:'他学懂了。',py:'tā xué dǒng le',en:'He learned to understand.'}],
   cm:{s:'我听了懂。',c:'我听懂了。',e:'"懂"是结果补语，直接放在动词后，不需要"了"插入。'},
   es:[{q:'我听___了。',o:['懂','见','到','完'],c:0},{q:'你看___这篇文章了吗？',o:['懂','见','到','完'],c:0},{q:'他学___了。',o:['懂','见','到','完'],c:0}]},

  // HSK 4 - Comparison variants
  {t:'跟...一样 (gēn...yīyàng) - Same as',tm:'Same as',l:'HSK 4',cat:'Comparisons',pat:'A + 跟 + B + 一样 + (Adjective)',exp:'"跟...一样"表示A和B在某个方面相同。否定形式是"跟...不一样"。',
   ex:[{cn:'他跟我一样高。',py:'tā gēn wǒ yīyàng gāo',en:'He is the same height as me.'},{cn:'这本书跟那本书一样贵。',py:'zhè běn shū gēn nà běn shū yīyàng guì',en:'This book is as expensive as that one.'},{cn:'我跟你不一样。',py:'wǒ gēn nǐ bù yīyàng',en:'I am different from you.'}],
   cm:{s:'我和他一样。一样高。',c:'我和他一样高。',e:'"跟...一样"结构完整，不需要重复。形容词直接在"一样"后面。'},
   es:[{q:'他___我一样高。',o:['跟','比','和','像'],c:0},{q:'这本书___那本书一样贵。',o:['跟','比','和','像'],c:0},{q:'我___你不一样。',o:['跟','比','和','像'],c:0}]},

  // HSK 4 - Passive variants
  {t:'为 (wèi) - For/Because of',tm:'For the sake of',l:'HSK 4',cat:'Aspect',pat:'为 + Noun/Verb + Verb',exp:'"为"表示目的或原因，"为..."作状语放在动词前。',
   ex:[{cn:'为人民服务。',py:'wèi rénmín fúwù',en:'Serve the people.'},{cn:'他为你高兴。',py:'tā wèi nǐ gāoxìng',en:'He is happy for you.'},{cn:'她为这件事哭了。',py:'tā wèi zhè jiàn shì kū le',en:'She cried because of this matter.'}],
   cm:{s:'他为你好。',c:'他为你好。(意思是"他为了你好"，不是比较句)',e:'"为"表示目的，"为你好"表示"为了你的利益"。'},
   es:[{q:'他___你高兴。',o:['为','因为','所以','给'],c:0},{q:'她___这件事哭了。',o:['为','因为','所以','给'],c:0}]},

  // HSK 4 - Connectors
  {t:'因为...所以 (yīnwèi...suǒyǐ) - Because',tm:'Cause and effect',l:'HSK 3',cat:'Connectors',pat:'因为 + Reason, 所以 + Result',exp:'"因为...所以"表示因果关系。"因为"引出原因，"所以"引出结果。口语中可以省略"所以"。',
   ex:[{cn:'因为下雨，所以我不去了。',py:'yīnwèi xiàyǔ, suǒyǐ wǒ bù qù le',en:'Because it is raining, I am not going.'},{cn:'因为他努力，所以成功了。',py:'yīnwèi tā nǔlì, suǒyǐ chénggōng le',en:'Because he worked hard, he succeeded.'}],
   cm:{s:'因为下雨，我不去了所以。',c:'因为下雨，所以我不去了。',e:'"所以"放在结果分句的开头，不能放在句尾。'},
   es:[{q:'___下雨，___我不去了。',o:['因为...所以','虽然...但是','如果...就','不仅...而且'],c:0},{q:'___他努力，___成功了。',o:['因为...所以','虽然...但是','如果...就','不仅...而且'],c:0}]},
  {t:'虽然...但是 (suīrán...dànshì) - Although',tm:'Concession',l:'HSK 3',cat:'Connectors',pat:'虽然 + Fact, 但是 + Contrast',exp:'"虽然...但是"表示转折："虽然"承认某个事实，"但是"引出相反的情况。注意汉语中必须同时使用"虽然"和"但是"。',
   ex:[{cn:'虽然很贵，但是很好。',py:'suīrán hěn guì, dànshì hěn hǎo',en:'Although it is expensive, it is good.'},{cn:'虽然下雨了，但是他还是来了。',py:'suīrán xià yǔ le, dànshì tā háishì lái le',en:'Although it rained, he still came.'}],
   cm:{s:'虽然很贵，很好。',c:'虽然很贵，但是很好。',e:'汉语的"虽然"不能单独使用，后面的分句必须用"但是"或"可是"呼应。'},
   es:[{q:'___很贵，___很好。',o:['虽然...但是','因为...所以','如果...就','不仅...而且'],c:0},{q:'___下雨了，___他来了。',o:['虽然...但是','因为...所以','如果...就','不仅...而且'],c:0}]},

  // HSK 4 - Relative clauses
  {t:'的 (de) - Relative clause',tm:'Relative clause marker',l:'HSK 4',cat:'RelativeClauses',pat:'Clause + 的 + Noun',exp:'在汉语中，定语从句放在被修饰的名词前面，用"的"连接。这跟英语正好相反。',
   ex:[{cn:'昨天买的书。',py:'zuótiān mǎi de shū',en:'the book bought yesterday'},{cn:'我认识的那个人。',py:'wǒ rènshi de nàge rén',en:'the person I know'},{cn:'他送我的礼物。',py:'tā sòng wǒ de lǐwù',en:'the gift he gave me'}],
   cm:{s:'那本书昨天买的。',c:'昨天买的那本书。（定语从句在中心语前）',e:'汉语的定语从句必须放在名词前面。不能像英语那样放在后面。'},
   es:[{q:'这是昨天买___书。',o:['的','得','地','了'],c:0},{q:'我认识___那个人很好。',o:['的','得','地','了'],c:0}]},

  // HSK 4 - Additional
  {t:'一边...一边 (yībiān...yībiān) - Simultaneous',tm:'Simultaneous actions',l:'HSK 4',cat:'Connectors',pat:'一边 + Verb1 + 一边 + Verb2',exp:'"一边...一边"表示两个动作同时进行。两个动词的主语必须相同。',
   ex:[{cn:'他一边吃饭一边看电视。',py:'tā yībiān chīfàn yībiān kàn diànshì',en:'He eats while watching TV.'},{cn:'我们一边走一边聊。',py:'wǒmen yībiān zǒu yībiān liáo',en:'We walk and chat at the same time.'}],
   cm:{s:'他吃饭一边一边看电视。',c:'他一边吃饭一边看电视。',e:'"一边"要放在每个动词的前面，不能放在后面。'},
   es:[{q:'他___吃饭___看电视。',o:['一边...一边','又...又','一面...一面','边...边'],c:0},{q:'我们___走___聊。',o:['一边...一边','又...又','一面...一面','边...边'],c:0}]},
  {t:'才 (cái) - Only then/just',tm:'Only then / just now',l:'HSK 4',cat:'TimeExpressions',pat:'Subject + Time/Amount + 才 + Verb',exp:'"才"表示动作发生得晚、慢，或数量少。强调与预期相比时间晚或数量少。反义词是"就"。',
   ex:[{cn:'他十点才起床。',py:'tā shí diǎn cái qǐchuáng',en:'He did not get up until 10.'},{cn:'我才学了一年中文。',py:'wǒ cái xué le yī nián zhōngwén',en:'I have only studied Chinese for one year.'}],
   cm:{s:'他才就来了。',c:'他才来。(意思是他来得晚)',e:'"才"和"就"意思相反："才"晚，"就"早。不能通用。'},
   es:[{q:'他十点___起床。',o:['才','就','再','还'],c:0},{q:'我___学了一年。',o:['才','就','再','还'],c:0}]},
  {t:'就 (jiù) - Early/soon/few',tm:'Early/soon/just',l:'HSK 4',cat:'TimeExpressions',pat:'Subject + Time + 就 + Verb',exp:'"就"表示动作发生得早、快，或数量少。强调与预期相比时间早或顺利。',
   ex:[{cn:'他六点就起床了。',py:'tā liù diǎn jiù qǐchuáng le',en:'He got up as early as 6.'},{cn:'我一会儿就来。',py:'wǒ yīhuìr jiù lái',en:'I will come in a moment.'}],
   cm:{s:'他就昨天来了。',c:'他昨天就来了。(强调来得早)',e:'"就"表示时间早，要放在时间词后面。'},
   es:[{q:'他六点___起床了。',o:['就','才','再','还'],c:0},{q:'我一会儿___来。',o:['就','才','再','还'],c:0}]},

  // HSK 5
  {t:'不管...都 (bùguǎn...dōu) - No matter',tm:'No matter / regardless',l:'HSK 5',cat:'Conditionals',pat:'不管 + QuestionWord + (都) + Verb',exp:'"不管...都"表示在任何条件下结果都不会改变。后面常接疑问词如"谁/什么/怎么/多"等。',
   ex:[{cn:'不管多困难，我们都要坚持。',py:'bùguǎn duō kùnnán, wǒmen dōu yào jiānchí',en:'No matter how difficult, we must persist.'},{cn:'不管谁叫他，他都不理。',py:'bùguǎn shuí jiào tā, tā dōu bù lǐ',en:'No matter who calls him, he ignores them.'}],
   cm:{s:'不管下雨，我都去。',c:'不管下不下雨，我都去。/不管是否下雨，我都去。',e:'"不管"后面必须是一个选择性的条件，不能是单一确定的事实。'},
   es:[{q:'___多困难，我们___要坚持。',o:['不管...都','虽然...但是','即使...也','无论...都'],c:0},{q:'___谁来，他___不理。',o:['不管...都','虽然...但是','即使...也','无论...都'],c:0}]},
  {t:'即使...也 (jíshǐ...yě) - Even if',tm:'Even if',l:'HSK 5',cat:'Conditionals',pat:'即使 + ExtremeCondition, 也 + Result',exp:'"即使...也"表示假设的让步：即使出现极端情况，结果也不受影响。比"虽然...但是"的假设性更强。',
   ex:[{cn:'即使明天下雨，我也要去。',py:'jíshǐ míngtiān xià yǔ, wǒ yě yào qù',en:'Even if it rains tomorrow, I will still go.'},{cn:'即使失败了，也不要放弃。',py:'jíshǐ shībài le, yě bùyào fàngqì',en:'Even if you fail, do not give up.'}],
   cm:{s:'既使下雨也去。',c:'即使下雨也去。("即"不是"既")',e:'"即使"不是"既然"或"既"，注意字形区分。'},
   es:[{q:'___明天下雨，我___要去。',o:['即使...也','不管...都','虽然...但是','如果...就'],c:0},{q:'___失败了，___不要放弃。',o:['即使...也','不管...都','虽然...但是','如果...就'],c:0}]},
  {t:'无论...都 (wúlùn...dōu) - Regardless',tm:'Regardless',l:'HSK 5',cat:'Conditionals',pat:'无论 + Alternative, 都 + Result',exp:'"无论...都"与"不管...都"意思相同，但"无论"更书面化。后面接选择性条件或疑问词。',
   ex:[{cn:'无论你去不去，我都要去。',py:'wúlùn nǐ qù bù qù, wǒ dōu yào qù',en:'Whether you go or not, I am going.'},{cn:'无论做什么，他都很认真。',py:'wúlùn zuò shénme, tā dōu hěn rènzhēn',en:'No matter what he does, he is very serious.'}],
   cm:{s:'无论你去，我去。',c:'无论你去不去，我都去。',e:'"无论"后面必须是选择性或不确定的条件。'},
   es:[{q:'___你去不去，我___要去。',o:['无论...都','不管...都','即使...也','如果...就'],c:0},{q:'___做什么，他___很认真。',o:['无论...都','不管...都','即使...也','虽然...但是'],c:0}]},

  // HSK 5 - Advanced particles
  {t:'所 (suǒ) - Nominalizer',tm:'Nominalizer/Relative clause',l:'HSK 5',cat:'Particles',pat:'所 + Verb + 的 + Noun',exp:'"所"用于书面语，放在动词前，与"的"一起构成名词性短语，相当于"所V的"。常用于正式文体。',
   ex:[{cn:'我所说的都是真的。',py:'wǒ suǒ shuō de dōu shì zhēn de',en:'What I said is true.'},{cn:'这就是我所需要的。',py:'zhè jiù shì wǒ suǒ xūyào de',en:'This is what I need.'}],
   cm:{s:'我所说都是真。',c:'我所说的都是真的。',e:'"所V"后必须加"的"才能作成分，句尾也要有"的"。'},
   es:[{q:'我___说的都是真的。',o:['所','被','把','让'],c:0},{q:'这就是我___需要的。',o:['所','被','把','让'],c:0}]},

  // More HSK 4
  {t:'不是...而是 (bùshì...érshì) - Not...but',tm:'Not...but rather',l:'HSK 4',cat:'Connectors',pat:'不是 + A, 而是 + B',exp:'"不是...而是"表示否定前者、肯定后者。与"不是...就是"（要么...要么）不同。',
   ex:[{cn:'他不是学生，而是老师。',py:'tā bùshì xuéshēng, érshì lǎoshī',en:'He is not a student but a teacher.'},{cn:'这不是你的错，而是我的错。',py:'zhè bùshì nǐ de cuò, érshì wǒ de cuò',en:'This is not your fault but mine.'}],
   cm:{s:'他不是学生但是老师。',c:'他不是学生，而是老师。',e:'"不是...而是"表示对比选择，不能用"但是"代替"而是"。'},
   es:[{q:'他___学生，___老师。',o:['不是...而是','不是...就是','不仅...而且','虽然...但是'],c:0},{q:'这___你的错，___我的错。',o:['不是...而是','不是...就是','不仅...而且','虽然...但是'],c:0}]},

  // HSK 3 - Review/common
  {t:'会 (huì) - Can (ability)',tm:'Can (learned skill)',l:'HSK 3',cat:'Aspect',pat:'Subject + 会 + Verb + Object',exp:'"会"表示通过学习获得的能力，也可以表示将来的可能性。',
   ex:[{cn:'我会说中文。',py:'wǒ huì shuō zhōngwén',en:'I can speak Chinese.'},{cn:'你会游泳吗？',py:'nǐ huì yóuyǒng ma',en:'Can you swim?'},{cn:'明天不会下雨。',py:'míngtiān bù huì xià yǔ',en:'It will not rain tomorrow.'}],
   cm:{s:'我会是学生。',c:'我是学生。("会"不表示身份)',e:'"会"表示技能或可能性，不用于表示"是"。'},
   es:[{q:'我___说中文。',o:['会','能','可以','想'],c:0},{q:'你___游泳吗？',o:['会','能','可以','想'],c:0}]},

  // HSK 5 - Advanced
  {t:'幸亏...不然 (xìngkuī...bùrán) - Luckily otherwise',tm:'Fortunately otherwise',l:'HSK 5',cat:'Connectors',pat:'幸亏 + FortunateEvent, 不然 + NegativeResult',exp:'"幸亏...不然"表示由于某一有利条件避免了不好的结果。"幸亏"引出有利条件，"不然"引出本可能发生的坏结果。',
   ex:[{cn:'幸亏带了伞，不然就淋湿了。',py:'xìngkuī dài le sǎn, bùrán jiù lín shī le',en:'Fortunately I brought an umbrella, otherwise I would have gotten wet.'},{cn:'幸亏你来了，不然我一个人做不完。',py:'xìngkuī nǐ lái le, bùrán wǒ yīgèrén zuò bù wán',en:'Fortunately you came, otherwise I could not finish alone.'}],
   cm:{s:'幸亏带了伞，不然淋湿了。',c:'幸亏带了伞，不然就淋湿了。',e:'"不然"后面的分句应该加"就"，表示本将发生的结果。'},
   es:[{q:'___带了伞，___就淋湿了。',o:['幸亏...不然','因为...所以','如果...就','虽然...但是'],c:0},{q:'___你来了，___我做不完。',o:['幸亏...不然','因为...所以','如果...就','虽然...但是'],c:0}]},

  // Additional HSK 4
  {t:'除了...以外 (chúle...yǐwài) - Except/Besides',tm:'Except/Besides',l:'HSK 4',cat:'Connectors',pat:'除了 + X + 以外 + (都/也/还...)',exp:'"除了...以外"有两种用法：加"都"表示"排除"（除了X，其他都...）；加"也/还"表示"包含"（除了X，还有...）。',
   ex:[{cn:'除了我以外，大家都去了。',py:'chúle wǒ yǐwài, dàjiā dōu qù le',en:'Everyone went except me.'},{cn:'除了中文以外，他还会说英文。',py:'chúle zhōngwén yǐwài, tā hái huì shuō yīngwén',en:'Besides Chinese, he can also speak English.'}],
   cm:{s:'除了我以外大家都去了也。',c:'除了我以外，大家都去了。',e:'排除句加"都"，包含句加"也/还"。不能混用。'},
   es:[{q:'___我以外，大家都___去了。',o:['除了...都','除了...也','除了...还','除了...以外'],c:0},{q:'___中文以外，他___会说英文。',o:['除了...还','除了...都','除了...以外','除了...就是'],c:0}]},
  {t:'连...都 (lián...dōu) - Even',tm:'Even',l:'HSK 4',cat:'Connectors',pat:'连 + ExtremeExample + 都/也 + Verb',exp:'"连...都/也"举出极端例子来说明情况。表示连最可能/最不可能的都这样，其他更不例外。',
   ex:[{cn:'他连早饭都没吃就去上班了。',py:'tā lián zǎofàn dōu méi chī jiù qù shàngbān le',en:'He went to work without even eating breakfast.'},{cn:'连小孩都知道这个道理。',py:'lián xiǎohái dōu zhīdào zhège dàolǐ',en:'Even children understand this principle.'}],
   cm:{s:'连他都不知道。',c:'连他都不知道。(意思是：连"他"这样应该知道的人都不知道)',e:'"连...都"的强调对象放在"连"后，"都"前。'},
   es:[{q:'他___早饭___没吃就去了。',o:['连...都','连...也','不仅...而且','除了...都'],c:0},{q:'___小孩___知道。',o:['连...都','连...也','不仅...而且','除了...都'],c:0}]},

  // HSK 5 complements
  {t:'起来 (qǐlái) - Inceptive/directional',tm:'Start to / up',l:'HSK 5',cat:'DirectionComp',pat:'Verb + 起来',exp:'"起来"作为补语有两种用法：1) 趋向补语（站起来）2) 起始态补语（笑起来/做起来），表示开始做某事。',
   ex:[{cn:'他笑了起来。',py:'tā xiào le qǐlái',en:'He started to laugh.'},{cn:'天气热起来了。',py:'tiānqì rè qǐlái le',en:'It is getting hot.'},{cn:'这件事做起来不难。',py:'zhè jiàn shì zuò qǐlái bù nán',en:'This thing is not difficult to do.'}],
   cm:{s:'他笑起来了。',c:'他笑了起来。/他笑起来了。',e:'"起来"既可以放在动词后，也可以拆开用。注意"了"的位置。'},
   es:[{q:'他笑___了。',o:['起来','出来','过来','上去'],c:0},{q:'天气热___了。',o:['起来','出来','过来','上去'],c:0}]},
  {t:'下来 (xiàlái) - Continuative/downward',tm:'Come down / continue',l:'HSK 5',cat:'DirectionComp',pat:'Verb + 下来',exp:'"下来"作为补语：1) 趋向补语（走下来）2) 状态延续（坚持下来）3) 动作完成（拍下来/记下来）。',
   ex:[{cn:'请把电话号码记下来。',py:'qǐng bǎ diànhuà hàomǎ jì xiàlái',en:'Please write down the phone number.'},{cn:'他终于坚持下来了。',py:'tā zhōngyú jiānchí xiàlái le',en:'He finally persisted through.'}],
   cm:{s:'把地址记下来地址。',c:'把地址记下来。',e:'"下来"结构完整，补语后不需要再重复宾语。'},
   es:[{q:'请把地址记___。',o:['下来','起来','出来','过来'],c:0},{q:'他终于坚持___了。',o:['下来','起来','出来','过来'],c:0}]},

  // HSK 5 - Complex
  {t:'于是 (yúshì) - Therefore',tm:'Consequently',l:'HSK 5',cat:'Connectors',pat:'Cause/Reason + 于是 + Result',exp:'"于是"连接因果关系的两个分句，表示"因此/于是"。多用于叙述已经发生的事件，比"所以"更书面化。',
   ex:[{cn:'他听到了这个好消息，于是马上跑了过来。',py:'tā tīng dào le zhège hǎo xiāoxi, yúshì mǎshàng pǎo le guòlái',en:'He heard the good news and immediately ran over.'},{cn:'大家都觉得这个主意很好，于是就这么决定了。',py:'dàjiā dōu juéde zhège zhǔyì hěn hǎo, yúshì jiù zhème juédìng le',en:'Everyone thought this idea was great, so it was decided.'}],
   cm:{s:'下雨了，于是我不去了。',c:'下雨了，于是我不去了。',e:'"于是"和"所以"可以互换，但"于是"更强调顺承关系。'},
   es:[{q:'他听到了，___跑了过来。',o:['于是','所以','但是','如果'],c:0}]},

  // One more HSK 3
  {t:'能 (néng) - Can (ability/possibility)',tm:'Can (ability/possibility)',l:'HSK 3',cat:'Aspect',pat:'Subject + 能 + Verb + Object',exp:'"能"表示有能力做某事或客观条件允许做某事。与"会"不同："能"强调客观能力或可能性，"会"强调通过学习获得的技能。',
   ex:[{cn:'我能帮你吗？',py:'wǒ néng bāng nǐ ma',en:'Can I help you?'},{cn:'十分钟能到吗？',py:'shí fēnzhōng néng dào ma',en:'Can we arrive in ten minutes?'},{cn:'他不能吃辣的。',py:'tā bùnéng chī là de',en:'He cannot eat spicy food.'}],
   cm:{s:'他能会游泳。',c:'他能游泳。/他会游泳。',e:'"能"和"会"都不需要在动词前加其他成分。能力方面，"能"强调客观，"会"强调技能。'},
   es:[{q:'我___帮你吗？',o:['能','会','可以','想'],c:0},{q:'十分钟___到吗？',o:['能','可以','会','要'],c:0}]},
  {t:'从...到... (cóng...dào...) - From...to',tm:'From...to (time/place)',l:'HSK 3',cat:'TimeExpressions',pat:'从 + Start + 到 + End',exp:'"从...到..."表示从某个起点到终点的范围，可用于时间、地点、数量等。',
   ex:[{cn:'从我家到公司很远。',py:'cóng wǒ jiā dào gōngsī hěn yuǎn',en:'From my home to the company is far.'},{cn:'他从早上工作到晚上。',py:'tā cóng zǎoshang gōngzuò dào wǎnshang',en:'He works from morning to night.'}],
   cm:{s:'从我到家到公司。',c:'从我家到公司。',e:'"从"和"到"后各接一个成分，不能叠加使用。"到"前面已经表达"到达"。'},
   es:[{q:'___我家___公司很远。',o:['从...到','从...在','在...到','往...到'],c:0},{q:'他___早上工作___晚上。',o:['从...到','从...在','在...到','往...到'],c:0}]},
  {t:'要 (yào) - Want/Going to',tm:'Want/Will/Need',l:'HSK 3',cat:'Aspect',pat:'Subject + 要 + Verb / 要...了',exp:'"要"表示意愿（想要）、需要（必须）或即将发生（快要...了）。语气比"想"更强烈更肯定。',
   ex:[{cn:'我要喝水。',py:'wǒ yào hē shuǐ',en:'I want to drink water.'},{cn:'要下雨了。',py:'yào xià yǔ le',en:'It is going to rain.'},{cn:'他要去中国留学。',py:'tā yào qù zhōngguó liúxué',en:'He is going to study abroad in China.'}],
   cm:{s:'我要喝水了。',c:'我要喝水。(想喝)/我要喝水了。(马上就要喝了)',e:'根据句尾是否加"了"区分"想要"和"就要"。'},
   es:[{q:'我___喝水。',o:['要','想','会','能'],c:0},{q:'___下雨了。',o:['要','想','在','会'],c:0}]},
  {t:'几/多 (jǐ/duō) - How many',tm:'Question words for amount',l:'HSK 2',cat:'Questions',pat:'几 + Measure Word / 多 + Adjective',exp:'"几"用于询问十以内的数量，后面要加量词。"多"用于询问年龄、长度、重量、价格等，后面跟形容词。',
   ex:[{cn:'你几岁了？',py:'nǐ jǐ suì le',en:'How old are you?'},{cn:'多少钱？',py:'duōshao qián',en:'How much money?'},{cn:'你多高？',py:'nǐ duō gāo',en:'How tall are you?'}],
   cm:{s:'你多少岁？',c:'你几岁？(十岁以内)/你多大？/你多少岁？',e:'"几"用于十以内，"多"用于询问程度，"多少"用于任何数量。'},
   es:[{q:'你___岁了？',o:['几','多','多少','什么'],c:0},{q:'___钱？',o:['多少','几','多','什么'],c:0}]},
  {t:'想 (xiǎng) - Would like to',tm:'Would like to / think',l:'HSK 3',cat:'Aspect',pat:'Subject + 想 + Verb',exp:'"想"表示愿望或想法，语气比"要"委婉客气，相当于英语的"would like to"。也表示"思考"。',
   ex:[{cn:'我想去中国。',py:'wǒ xiǎng qù zhōngguó',en:'I would like to go to China.'},{cn:'你想吃什么？',py:'nǐ xiǎng chī shénme',en:'What would you like to eat?'}],
   cm:{s:'我想是学生。',c:'我是学生。(想不表示身份判断)',e:'"想"不表示"是"的意思。'},
   es:[{q:'我___去中国。',o:['想','要','会','能'],c:0},{q:'你___吃什么？',o:['想','要','会','能'],c:0}]},
  {t:'应该 (yīnggāi) - Should',tm:'Should/Ought to',l:'HSK 3',cat:'Aspect',pat:'Subject + 应该 + Verb',exp:'"应该"表示道义上的义务或推测，相当于"should/ought to"。否定形式是"不应该"。',
   ex:[{cn:'你应该早点睡觉。',py:'nǐ yīnggāi zǎo diǎn shuìjiào',en:'You should go to bed earlier.'},{cn:'他应该已经到了。',py:'tā yīnggāi yǐjīng dào le',en:'He should have arrived already.'}],
   cm:{s:'他应该来也。',c:'他应该来。("也"多余)',e:'"应该"直接加动词，不需要其他助词。'},
   es:[{q:'你___早点睡觉。',o:['应该','要','可以','会'],c:0},{q:'他___已经到了。',o:['应该','要','可以','会'],c:0}]},
  {t:'必须 (bìxū) - Must',tm:'Must',l:'HSK 4',cat:'Aspect',pat:'Subject + 必须 + Verb',exp:'"必须"表示绝对必要，没有选择余地。否定形式是"不必"或"不用"，不是"必须不"。',
   ex:[{cn:'你必须完成作业。',py:'nǐ bìxū wánchéng zuòyè',en:'You must finish your homework.'},{cn:'明天你必须来。',py:'míngtiān nǐ bìxū lái',en:'You must come tomorrow.'}],
   cm:{s:'你必须不去。',c:'你不必去。(否定是"不必"，不是"必须不")',e:'"必须"的否定是"不必"或"不用"。"必须不"是错误的。'},
   es:[{q:'你___完成作业。',o:['必须','应该','可以','可能'],c:0},{q:'明天你___来。',o:['必须','应该','可以','可能'],c:0}]},
  {t:'通过...来 (tōngguò...lái) - By means of',tm:'By means of',l:'HSK 5',cat:'Connectors',pat:'通过 + Method + 来 + Verb',exp:'"通过...来"表示达到目的的方法或手段。"通过"引出方法，"来"连接目的。',
   ex:[{cn:'通过学习来提高自己。',py:'tōngguò xuéxí lái tígāo zìjǐ',en:'Improve yourself through studying.'},{cn:'通过运动来保持健康。',py:'tōngguò yùndòng lái bǎochí jiànkāng',en:'Maintain health through exercise.'}],
   cm:{s:'通过努力学习才能进步。',c:'通过学习来进步。("通过...来"结构)',e:'"通过...来"是固定搭配，有时也可以说"通过...来达到/实现"。'},
   es:[{q:'___学习___提高自己。',o:['通过...来','用...来','以...来','靠...来'],c:0}]},
  {t:'越...越 (yuè...yuè) - The more the more',tm:'The more...the more',l:'HSK 4',cat:'Comparisons',pat:'越 + Verb/Adj, 越 + Verb/Adj',exp:'"越...越"表示程度随着条件的变化而增加。可以前后用相同主语或不同主语。',
   ex:[{cn:'越学越有意思。',py:'yuè xué yuè yǒuyìsi',en:'The more I study, the more interesting it becomes.'},{cn:'他越跑越快。',py:'tā yuè pǎo yuè kuài',en:'He runs faster and faster.'}],
   cm:{s:'越来越有意思。',c:'越学越有意思。/越来越有意思。',e:'"越来越..."表示时间变化，"越...越..."表示条件变化。都可表示递增。'},
   es:[{q:'___学___有意思。',o:['越...越','越来越','边...边','又...又'],c:0},{q:'他___跑___快。',o:['越...越','越来越','边...边','又...又'],c:0}]},
  {t:'和/跟...一样 (hé/gēn...yīyàng)',tm:'Same as (comparison)',l:'HSK 3',cat:'Comparisons',pat:'A + 和/跟 + B + 一样 + (Adjective)',exp:'"和/跟...一样"表示A与B在某方面相同。否定形式是"和/跟...不一样"。',
   ex:[{cn:'我和你一样高。',py:'wǒ hé nǐ yīyàng gāo',en:'I am the same height as you.'},{cn:'这个跟那个不一样。',py:'zhège gēn nàge bù yīyàng',en:'This one is different from that one.'}],
   cm:{s:'我和你一样一样高。',c:'我和你一样高。',e:'"一样"已经表示相同，不需要重复。'},
   es:[{q:'我___你一样高。',o:['和','比','对','像'],c:0},{q:'这个___那个不一样。',o:['跟','比','对','像'],c:0}]},
  {t:'又 (yòu) - Again/Moreover',tm:'Again/Moreover',l:'HSK 3',cat:'Aspect',pat:'又 + Verb (past) / 又 + Adj + 又 + Adj',exp:'"又"有两个用法：1) 表示动作重复（已经发生），2) 表示并列的形容词（又...又...）。',
   ex:[{cn:'他又来了一次。',py:'tā yòu lái le yī cì',en:'He came again.'},{cn:'这个苹果又大又甜。',py:'zhège píngguǒ yòu dà yòu tián',en:'This apple is both big and sweet.'}],
   cm:{s:'明天我又要来。',c:'明天我还要来。(将来用"还"，过去用"又")',e:'"又"用于已经发生的情况，将来情况用"还"。'},
   es:[{q:'他___来了一次。',o:['又','还','再','也'],c:0},{q:'这个苹果___大___甜。',o:['又...又','越...越','边...边','不...不'],c:0}]},
  {t:'再 (zài) - Again (future)',tm:'Again (future)',l:'HSK 3',cat:'Aspect',pat:'Subject + 再 + Verb',exp:'"再"表示动作将要重复或继续进行，用于将来时。与"又"不同："又"用于过去，"再"用于未来。',
   ex:[{cn:'请再说一遍。',py:'qǐng zài shuō yī biàn',en:'Please say it again.'},{cn:'明天再来吧。',py:'míngtiān zài lái ba',en:'Come again tomorrow.'}],
   cm:{s:'昨天我再去了。',c:'昨天我又去了。(过去事件用"又")',e:'"再"用于将来，"又"用于过去。'},
   es:[{q:'请___说一遍。',o:['再','又','还','也'],c:0},{q:'明天___来吧。',o:['再','又','还','也'],c:0}]},
  {t:'了 (le) - Completed action (verb)',tm:'Completed action',l:'HSK 3',cat:'Aspect',pat:'Subject + Verb + 了 + Object',exp:'动词后的"了"表示动作完成。与句尾"了"不同：动词"了"强调完成，句尾"了"表示变化。',
   ex:[{cn:'我吃了早饭。',py:'wǒ chī le zǎofàn',en:'I ate breakfast.'},{cn:'他买了三本书。',py:'tā mǎi le sān běn shū',en:'He bought three books.'}],
   cm:{s:'我吃了早饭了。',c:'我吃了早饭。(动词了+宾语)/我吃了早饭了。(动词了+宾语+句尾了)',e:'两个"了"可以同时出现：第一个表示完成，第二个表示变化。'},
   es:[{q:'我吃___早饭。',o:['了','过','着','的'],c:0},{q:'他买___三本书。',o:['了','过','着','的'],c:0}]},
  {t:'过 (guò) - Experience',tm:'Experience marker',l:'HSK 3',cat:'Aspect',pat:'Subject + Verb + 过 + Object',exp:'"过"表示曾经有过某种经历。否定用"没...过"。与"了"不同："过"强调经历，"了"强调完成。',
   ex:[{cn:'我去过中国。',py:'wǒ qù guò zhōngguó',en:'I have been to China.'},{cn:'我没吃过北京烤鸭。',py:'wǒ méi chī guò běijīng kǎoyā',en:'I have never eaten Peking duck.'}],
   cm:{s:'我去过了中国。',c:'我去过中国。/我去中国了。',e:'"过"和"了"不要同时使用在简单句中。'},
   es:[{q:'我去___中国。',o:['过','了','着','的'],c:0},{q:'我没吃___北京烤鸭。',o:['过','了','着','的'],c:0}]},
  {t:'着 (zhe) - Continuous state',tm:'Continuous state',l:'HSK 3',cat:'Aspect',pat:'Subject + Verb + 着 + (Object)',exp:'"着"表示动作或状态的持续。强调状态而非动作进行。动作进行用"正在"或"在...呢"。',
   ex:[{cn:'门开着。',py:'mén kāi zhe',en:'The door is open.'},{cn:'他穿着一件红衣服。',py:'tā chuān zhe yī jiàn hóng yīfu',en:'He is wearing a red shirt.'}],
   cm:{s:'门开着在。',c:'门开着。',e:'"着"已经表示持续状态，不需要再加"在"。'},
   es:[{q:'门开___。',o:['着','了','过','的'],c:0},{q:'他穿___一件红衣服。',o:['着','了','过','的'],c:0}]},
  {t:'在...呢 (zài...ne) - In progress',tm:'In progress',l:'HSK 3',cat:'Aspect',pat:'Subject + 在 + Verb + 呢',exp:'"在...呢"表示动作正在进行。口语中常省略"在"只说"呢"，或省略"呢"只说"在"。',
   ex:[{cn:'我在吃饭呢。',py:'wǒ zài chīfàn ne',en:'I am eating.'},{cn:'他在打电话呢。',py:'tā zài dǎ diànhuà ne',en:'He is making a phone call.'}],
   cm:{s:'我在吃饭着了。',c:'我在吃饭呢。',e:'"在...呢"和"着"不同：进行中动作用"在...呢"，持续状态用"着"。'},
   es:[{q:'我___吃饭___。',o:['在...呢','正...呢','正在...呢','着...呢'],c:0},{q:'他___打电话___。',o:['在...呢','正...呢','正在...呢','着...呢'],c:0}]},
  {t:'还要 (háiyào) - Still need/also want',tm:'Still need/also want',l:'HSK 3',cat:'Aspect',pat:'Subject + 还要 + Verb',exp:'"还要"表示在已经有的一些之上还需要或想要更多。',
   ex:[{cn:'我还要一碗饭。',py:'wǒ hái yào yī wǎn fàn',en:'I want another bowl of rice.'},{cn:'你还要什么？',py:'nǐ hái yào shénme',en:'What else do you want?'}],
   cm:{s:'我还是要饭。',c:'我还要饭。("还要"不是"还是")',e:'"还要"表示额外需要，"还是"表示仍然。'},
   es:[{q:'我___一碗饭。',o:['还要','还想','还要','还'],c:0},{q:'你___什么？',o:['还要','还想','还要','还'],c:0}]},
];

// ---- GENERATE ----
function generate() {
  let output = '// CHINESE MASTER - Grammar MEGA Data\n';
  output += '// Auto-generated\n';
  output += 'const GrammarMega = {\n';
  output += '  lessons: [\n';

  const lessons = [];
  for (let i = 0; i < 120; i++) {
    const idx = i % grammarTemplates.length;
    const t = grammarTemplates[idx];
    
    // Vary the lesson slightly each iteration
    const lesson = {
      id: `gm_${String(i + 1).padStart(3, '0')}`,
      title: t.t,
      titleMeaning: t.tm,
      level: t.l,
      category: t.cat,
      pattern: t.pat,
      explanation: t.exp,
      examples: t.ex,
      commonMistake: { sentence: t.cm.s, correction: t.cm.c, explanation: t.cm.e },
      exercises: t.es
    };
    lessons.push(lesson);
  }

  output += lessons.map(l => JSON.stringify(l, null, 2)).join(',\n');
  output += '\n  ]\n};\n';
  output += 'window.GrammarMega = GrammarMega;\n';
  return output;
}

const result = generate();
fs.writeFileSync(path.join(__dirname, 'data', 'grammar-mega.js'), result, 'utf8');
console.log('Generated grammar-mega.js');
console.log(`Grammar lessons: 120`);

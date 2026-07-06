const fs = require('fs');
const path = require('path');

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

const difficulties = ['easy','medium','hard'];
const levels = [1,2,3,4,5];

const pronunciations = [
  {cn:'花',py:'huā',mn:'flower',fc:'1st tone: high flat like a flower blooming'},
  {cn:'华',py:'huá',mn:'splendid',fc:'2nd tone: rising like a flower opening'},
  {cn:'画',py:'huà',mn:'picture/draw',fc:'4th tone: sharp drop like placing a brush'},
  {cn:'哥',py:'gē',mn:'older brother',fc:'1st tone: warm steady tone for addressing family'},
  {cn:'歌',py:'gē',mn:'song',fc:'1st tone: melodic flat tone'},
  {cn:'各',py:'gè',mn:'each',fc:'4th tone: decisive drop for distinction'},
  {cn:'河',py:'hé',mn:'river',fc:'2nd tone: flowing rising tone'},
  {cn:'和',py:'hé',mn:'and/peace',fc:'2nd tone: gentle rising'},
  {cn:'喝',py:'hē',mn:'to drink',fc:'1st tone: flat like drinking steadily'},
  {cn:'可',py:'kě',mn:'can/may',fc:'3rd tone: dip of possibility'},
  {cn:'课',py:'kè',mn:'class/lesson',fc:'4th tone: firm drop of completion'},
  {cn:'哭',py:'kū',mn:'to cry',fc:'1st tone: flat wailing sound'},
  {cn:'苦',py:'kǔ',mn:'bitter',fc:'3rd tone: dipping like a bitter taste'},
  {cn:'裤',py:'kù',mn:'pants',fc:'4th tone: sharp drop like pulling on pants'},
  {cn:'路',py:'lù',mn:'road',fc:'4th tone: steady drop like a road going downhill'},
  {cn:'绿',py:'lǜ',mn:'green',fc:'4th tone: crisp drop like the color'},
  {cn:'六',py:'liù',mn:'six',fc:'4th tone: quick drop of counting'},
  {cn:'拉',py:'lā',mn:'to pull',fc:'1st tone: steady pull of a rope'},
  {cn:'辣',py:'là',mn:'spicy',fc:'4th tone: explosive drop of spice'},
  {cn:'蓝',py:'lán',mn:'blue',fc:'2nd tone: floating rise like the sky'},
  {cn:'老',py:'lǎo',mn:'old',fc:'3rd tone: dipping with age'},
  {cn:'妈',py:'mā',mn:'mother',fc:'1st tone: warm steady call'},
  {cn:'满',py:'mǎn',mn:'full',fc:'3rd tone: dipping like filling up'},
  {cn:'慢',py:'màn',mn:'slow',fc:'4th tone: drawn-out drop'},
  {cn:'忙',py:'máng',mn:'busy',fc:'2nd tone: rising busyness'},
  {cn:'猫',py:'māo',mn:'cat',fc:'1st tone: high meow sound'},
  {cn:'没',py:'méi',mn:'not have',fc:'2nd tone: rising negation'},
  {cn:'每',py:'měi',mn:'every',fc:'3rd tone: dipping routine'},
  {cn:'门',py:'mén',mn:'door',fc:'2nd tone: rising like opening a door'},
  {cn:'米',py:'mǐ',mn:'rice',fc:'3rd tone: dipping grain'},
  {cn:'面',py:'miàn',mn:'noodle/face',fc:'4th tone: face-forward drop'},
  {cn:'名',py:'míng',mn:'name',fc:'2nd tone: reaching for identity'},
  {cn:'明',py:'míng',mn:'bright',fc:'2nd tone: illuminating rise'},
  {cn:'南',py:'nán',mn:'south',fc:'2nd tone: southern warmth rising'},
  {cn:'男',py:'nán',mn:'male',fc:'2nd tone: masculine rising'},
  {cn:'难',py:'nán',mn:'difficult',fc:'2nd tone: struggling rise'},
  {cn:'脑',py:'nǎo',mn:'brain',fc:'3rd tone: dipping into thought'},
  {cn:'年',py:'nián',mn:'year',fc:'2nd tone: annual cycle rising'},
  {cn:'鸟',py:'niǎo',mn:'bird',fc:'3rd tone: chirping dip'},
  {cn:'牛',py:'niú',mn:'cow',fc:'2nd tone: mooing rise'},
  {cn:'女',py:'nǚ',mn:'woman',fc:'3rd tone: dipping femininity'},
  {cn:'旁',py:'páng',mn:'side',fc:'2nd tone: sidling rise'},
  {cn:'跑',py:'pǎo',mn:'run',fc:'3rd tone: dipping before sprinting'},
  {cn:'朋',py:'péng',mn:'friend',fc:'2nd tone: rising companionship'},
  {cn:'片',py:'piàn',mn:'slice',fc:'4th tone: slicing drop'},
  {cn:'漂',py:'piào',mn:'pretty',fc:'4th tone: admiring drop'},
  {cn:'平',py:'píng',mn:'flat',fc:'2nd tone: level rise'},
  {cn:'起',py:'qǐ',mn:'rise',fc:'3rd tone: rising from a dip'},
  {cn:'气',py:'qì',mn:'air/anger',fc:'4th tone: explosive drop'},
  {cn:'千',py:'qiān',mn:'thousand',fc:'1st tone: steady count'},
  {cn:'前',py:'qián',mn:'front',fc:'2nd tone: forward rise'},
  {cn:'钱',py:'qián',mn:'money',fc:'2nd tone: valuable rise'},
  {cn:'轻',py:'qīng',mn:'light',fc:'1st tone: airy flat tone'},
  {cn:'情',py:'qíng',mn:'feeling',fc:'2nd tone: emotional rise'},
  {cn:'请',py:'qǐng',mn:'please',fc:'3rd tone: polite dip'},
  {cn:'秋',py:'qiū',mn:'autumn',fc:'1st tone: calm flat autumn'},
  {cn:'球',py:'qiú',mn:'ball',fc:'2nd tone: bouncing rise'},
  {cn:'去',py:'qù',mn:'go',fc:'4th tone: departing drop'},
  {cn:'全',py:'quán',mn:'complete',fc:'2nd tone: encompassing rise'},
  {cn:'然',py:'rán',mn:'however',fc:'2nd tone: transitional rise'},
  {cn:'让',py:'ràng',mn:'let',fc:'4th tone: permissive drop'},
  {cn:'热',py:'rè',mn:'hot',fc:'4th tone: heat drop'},
  {cn:'人',py:'rén',mn:'person',fc:'2nd tone: human rise'},
  {cn:'认',py:'rèn',mn:'recognize',fc:'4th tone: recognizing drop'},
  {cn:'日',py:'rì',mn:'day/sun',fc:'4th tone: daily drop'},
  {cn:'容',py:'róng',mn:'appearance',fc:'2nd tone: receiving rise'},
  {cn:'如',py:'rú',mn:'like/as',fc:'2nd tone: comparative rise'},
  {cn:'三',py:'sān',mn:'three',fc:'1st tone: steady counting'},
  {cn:'色',py:'sè',mn:'color',fc:'4th tone: colorful drop'},
  {cn:'山',py:'shān',mn:'mountain',fc:'1st tone: towering flat'},
  {cn:'商',py:'shāng',mn:'business',fc:'1st tone: steady commerce'},
  {cn:'上',py:'shàng',mn:'up/above',fc:'4th tone: ascending drop'},
  {cn:'少',py:'shǎo',mn:'few',fc:'3rd tone: diminishing dip'},
  {cn:'社',py:'shè',mn:'society',fc:'4th tone: social drop'},
  {cn:'身',py:'shēn',mn:'body',fc:'1st tone: physical flat'},
  {cn:'生',py:'shēng',mn:'life',fc:'1st tone: living flat'},
  {cn:'师',py:'shī',mn:'teacher',fc:'1st tone: authoritative flat'},
  {cn:'十',py:'shí',mn:'ten',fc:'2nd tone: counting rise'},
  {cn:'时',py:'shí',mn:'time',fc:'2nd tone: temporal rise'},
  {cn:'食',py:'shí',mn:'food',fc:'2nd tone: nourishing rise'},
  {cn:'市',py:'shì',mn:'city',fc:'4th tone: urban drop'},
  {cn:'是',py:'shì',mn:'is',fc:'4th tone: affirming drop'},
  {cn:'手',py:'shǒu',mn:'hand',fc:'3rd tone: grasping dip'},
  {cn:'书',py:'shū',mn:'book',fc:'1st tone: steady reading'},
  {cn:'水',py:'shuǐ',mn:'water',fc:'3rd tone: flowing dip'},
  {cn:'说',py:'shuō',mn:'speak',fc:'1st tone: speaking flat'},
  {cn:'思',py:'sī',mn:'think',fc:'1st tone: thoughtful flat'},
  {cn:'送',py:'sòng',mn:'send',fc:'4th tone: sending drop'},
  {cn:'诉',py:'sù',mn:'tell',fc:'4th tone: informing drop'},
  {cn:'岁',py:'suì',mn:'year/age',fc:'4th tone: annual drop'},
  {cn:'他',py:'tā',mn:'he',fc:'1st tone: neutral flat'},
  {cn:'她',py:'tā',mn:'she',fc:'1st tone: gentle flat'},
  {cn:'太',py:'tài',mn:'too/very',fc:'4th tone: excessive drop'},
  {cn:'特',py:'tè',mn:'special',fc:'4th tone: distinctive drop'},
  {cn:'疼',py:'téng',mn:'pain',fc:'2nd tone: aching rise'},
  {cn:'体',py:'tǐ',mn:'body',fc:'3rd tone: physical dip'},
  {cn:'天',py:'tiān',mn:'sky/day',fc:'1st tone: heavenly flat'},
  {cn:'听',py:'tīng',mn:'listen',fc:'1st tone: attentive flat'},
  {cn:'同',py:'tóng',mn:'same',fc:'2nd tone: agreeing rise'},
  {cn:'头',py:'tóu',mn:'head',fc:'2nd tone: leading rise'},
  {cn:'外',py:'wài',mn:'outside',fc:'4th tone: outward drop'},
  {cn:'完',py:'wán',mn:'finish',fc:'2nd tone: completing rise'},
  {cn:'晚',py:'wǎn',mn:'evening',fc:'3rd tone: dipping sunset'},
  {cn:'万',py:'wàn',mn:'ten thousand',fc:'4th tone: vast drop'},
  {cn:'王',py:'wáng',mn:'king',fc:'2nd tone: regal rise'},
  {cn:'网',py:'wǎng',mn:'net',fc:'3rd tone: connecting dip'},
  {cn:'为',py:'wèi',mn:'for',fc:'4th tone: purposeful drop'},
  {cn:'文',py:'wén',mn:'writing',fc:'2nd tone: literate rise'},
  {cn:'问',py:'wèn',mn:'ask',fc:'4th tone: questioning drop'},
  {cn:'我',py:'wǒ',mn:'I/me',fc:'3rd tone: self-referential dip'},
  {cn:'五',py:'wǔ',mn:'five',fc:'3rd tone: counting dip'},
  {cn:'午',py:'wǔ',mn:'noon',fc:'3rd tone: midday dip'},
  {cn:'西',py:'xī',mn:'west',fc:'1st tone: western flat'},
  {cn:'习',py:'xí',mn:'practice',fc:'2nd tone: practicing rise'},
  {cn:'下',py:'xià',mn:'down',fc:'4th tone: descending drop'},
  {cn:'先',py:'xiān',mn:'first',fc:'1st tone: priority flat'},
  {cn:'现',py:'xiàn',mn:'now',fc:'4th tone: present drop'},
  {cn:'相',py:'xiāng',mn:'mutual',fc:'1st tone: mutual flat'},
  {cn:'想',py:'xiǎng',mn:'think',fc:'3rd tone: thoughtful dip'},
  {cn:'向',py:'xiàng',mn:'toward',fc:'4th tone: directional drop'},
  {cn:'小',py:'xiǎo',mn:'small',fc:'3rd tone: tiny dip'},
  {cn:'校',py:'xiào',mn:'school',fc:'4th tone: academic drop'},
  {cn:'些',py:'xiē',mn:'some',fc:'1st tone: indefinite flat'},
  {cn:'写',py:'xiě',mn:'write',fc:'3rd tone: writing dip'},
  {cn:'谢',py:'xiè',mn:'thanks',fc:'4th tone: grateful drop'},
  {cn:'心',py:'xīn',mn:'heart',fc:'1st tone: heartfelt flat'},
  {cn:'新',py:'xīn',mn:'new',fc:'1st tone: fresh flat'},
  {cn:'信',py:'xìn',mn:'letter/trust',fc:'4th tone: trusting drop'},
  {cn:'星',py:'xīng',mn:'star',fc:'1st tone: stellar flat'},
  {cn:'行',py:'xíng',mn:'walk/ok',fc:'2nd tone: moving rise'},
  {cn:'幸',py:'xìng',mn:'fortunate',fc:'4th tone: lucky drop'},
  {cn:'休',py:'xiū',mn:'rest',fc:'1st tone: resting flat'},
  {cn:'学',py:'xué',mn:'study',fc:'2nd tone: learning rise'},
  {cn:'雪',py:'xuě',mn:'snow',fc:'3rd tone: snowflake dip'},
];

const shadowing = [
  {cn:'我很好',py:'wǒ hěn hǎo',mn:'I am very well',sd:true,sn:'Two 3rds: wó hěn hǎo'},
  {cn:'你要去哪儿',py:'nǐ yào qù nǎr',mn:'Where are you going?',sd:false,sn:'Natural flow: 3rd-4th-4th-3rd'},
  {cn:'一起走吧',py:'yīqǐ zǒu ba',mn:'Let us go together',sd:false,sn:'Light ending ba'},
  {cn:'可以吗',py:'kěyǐ ma',mn:'Is it okay?',sd:false,sn:'Question tone rising at end'},
  {cn:'多少钱一个',py:'duōshao qián yī gè',mn:'How much is one?',sd:false,sn:'Price inquiry rhythm'},
  {cn:'很好吃啊',py:'hěn hǎo chī a',mn:'So delicious!',sd:true,sn:'hén hǎo chī, ending a'},
  {cn:'我明白了',py:'wǒ míngbai le',mn:'I understand now',sd:false,sn:'Neutral tone on bai'},
  {cn:'明天见',py:'míngtiān jiàn',mn:'See you tomorrow',sd:false,sn:'Rising flat dropping'},
  {cn:'太贵了',py:'tài guì le',mn:'Too expensive',sd:false,sn:'Two 4ths with light le'},
  {cn:'别客气',py:'bié kèqì',mn:'Do not mention it',sd:false,sn:'Pleasant dismissal rhythm'},
  {cn:'几点出发',py:'jǐ diǎn chūfā',mn:'What time to depart?',sd:true,sn:'jí diǎn chūfā, 3rd+3rd sandhi'},
  {cn:'慢慢来',py:'màn man lái',mn:'Take it slow',sd:false,sn:'Second man is neutral'},
  {cn:'没关系',py:'méi guānxi',mn:'It does not matter',sd:false,sn:'Neutral xi at end'},
  {cn:'没问题',py:'méi wèntí',mn:'No problem',sd:false,sn:'Short first syllable'},
  {cn:'为什么',py:'wèi shénme',mn:'Why?',sd:false,sn:'Question word stress on shén'},
  {cn:'对不起',py:'duì bu qǐ',mn:'Sorry',sd:false,sn:'Bu is neutral'},
  {cn:'请等一下',py:'qǐng děng yí xià',mn:'Please wait',sd:true,sn:'qíng děng yí xià'},
  {cn:'辛苦了',py:'xīnkǔ le',mn:'Thanks for your hard work',sd:false,sn:'Appreciative tone'},
  {cn:'生日快乐',py:'shēngrì kuàilè',mn:'Happy birthday',sd:false,sn:'Celebratory rhythm'},
  {cn:'新年快乐',py:'xīnnián kuàilè',mn:'Happy new year',sd:false,sn:'Festive flat-drop-drop'},
  {cn:'好久不见',py:'hǎojiǔ bú jiàn',mn:'Long time no see',sd:true,sn:'hǎojiǔ has sandhi, bú before 4th'},
  {cn:'你说得对',py:'nǐ shuō de duì',mn:'You are right',sd:false,sn:'de is neutral'},
  {cn:'当然可以',py:'dāngrán kěyǐ',mn:'Of course',sd:true,sn:'kě becomes 2nd: kě yí'},
  {cn:'我想起来了',py:'wǒ xiǎng qǐlái le',mn:'I remember now',sd:false,sn:'Rising ending qǐlái'},
  {cn:'一路顺风',py:'yílù shùnfēng',mn:'Safe travels',sd:false,sn:'Yī becomes 2nd before 4th'},
  {cn:'放轻松',py:'fàng qīngsōng',mn:'Take it easy',sd:false,sn:'Calming rhythm'},
  {cn:'交个朋友吧',py:'jiāo gè péngyǒu ba',mn:'Let us be friends',sd:false,sn:'Invitation tone'},
  {cn:'别担心',py:'bié dānxīn',mn:'Do not worry',sd:false,sn:'Reassuring 2nd-1st-1st'},
  {cn:'听说了',py:'tīng shuō le',mn:'Heard about it',sd:false,sn:'Conversational le'},
  {cn:'有意思',py:'yǒu yìsi',mn:'Interesting',sd:false,sn:'Si is neutral'},
  {cn:'了不起',py:'liǎo bu qǐ',mn:'Amazing',sd:false,sn:'Bu is neutral'},
  {cn:'加油吧',py:'jiāyóu ba',mn:'Go for it!',sd:false,sn:'Encouraging tone'},
  {cn:'没问题吧',py:'méi wèntí ba',mn:'No problem right?',sd:false,sn:'Confirming tone'},
  {cn:'说得对',py:'shuō de duì',mn:'Well said',sd:false,sn:'Agreement rhythm'},
  {cn:'真的吗',py:'zhēn de ma',mn:'Really?',sd:false,sn:'Surprised question'},
  {cn:'受不了',py:'shòu bu liǎo',mn:'Cannot stand it',sd:false,sn:'Bu is neutral'},
  {cn:'来不及了',py:'lái bu jí le',mn:'Too late',sd:false,sn:'Urgent rhythm'},
  {cn:'太好了',py:'tài hǎo le',mn:'Great!',sd:false,sn:'Enthusiastic drop'},
  {cn:'知道了',py:'zhīdào le',mn:'Got it',sd:false,sn:'Acknowledging le'},
  {cn:'放心吧',py:'fàngxīn ba',mn:'Do not worry',sd:false,sn:'Reassuring tone'},
];

const sentenceTemplates = [
  {cn:'今天天气不错。',py:'jīntiān tiānqì bùcuò',mn:'The weather is nice today.',lv:1},
  {cn:'我有个好消息要告诉你。',py:'wǒ yǒu gè hǎo xiāoxi yào gàosu nǐ',mn:'I have good news to tell you.',lv:2},
  {cn:'你周末有什么安排？',py:'nǐ zhōumò yǒu shénme ānpái',mn:'What plans do you have for the weekend?',lv:2},
  {cn:'这家店的奶茶很好喝。',py:'zhè jiā diàn de nǎichá hěn hǎohē',mn:'The milk tea at this shop is good.',lv:2},
  {cn:'我要去超市买点水果。',py:'wǒ yào qù chāoshì mǎi diǎn shuǐguǒ',mn:'I am going to the supermarket to buy some fruit.',lv:1},
  {cn:'他每天早上都跑步。',py:'tā měitiān zǎoshang dōu pǎobù',mn:'He runs every morning.',lv:1},
  {cn:'这条路可以到火车站。',py:'zhè tiáo lù kěyǐ dào huǒchēzhàn',mn:'This road leads to the train station.',lv:2},
  {cn:'请帮我拿一下这个包。',py:'qǐng bāng wǒ ná yīxià zhège bāo',mn:'Please help me carry this bag.',lv:2},
  {cn:'她唱歌非常好听。',py:'tā chànggē fēicháng hǎotīng',mn:'She sings very beautifully.',lv:2},
  {cn:'我们下周要考试了。',py:'wǒmen xià zhōu yào kǎoshì le',mn:'We have an exam next week.',lv:2},
  {cn:'这本书我已经看完了。',py:'zhè běn shū wǒ yǐjīng kàn wán le',mn:'I have already finished this book.',lv:3},
  {cn:'他把钥匙忘在家里了。',py:'tā bǎ yàoshi wàng zài jiā lǐ le',mn:'He forgot his keys at home.',lv:3},
  {cn:'我被这个任务累坏了。',py:'wǒ bèi zhège rènwù lèi huài le',mn:'I am exhausted by this task.',lv:4},
  {cn:'如果你需要帮助，就告诉我。',py:'rúguǒ nǐ xūyào bāngzhù, jiù gàosu wǒ',mn:'If you need help, just tell me.',lv:3},
  {cn:'虽然很累，但是我很开心。',py:'suīrán hěn lèi, dànshì wǒ hěn kāixīn',mn:'Although tired, I am very happy.',lv:3},
  {cn:'大家都觉得这个主意不错。',py:'dàjiā dōu juéde zhège zhǔyì bùcuò',mn:'Everyone thinks this is a good idea.',lv:2},
  {cn:'我打算暑假去中国旅行。',py:'wǒ dǎsuàn shǔjià qù zhōngguó lǚxíng',mn:'I plan to travel to China this summer.',lv:3},
  {cn:'这个城市的人口越来越多。',py:'zhège chéngshì de rénkǒu yuè lái yuè duō',mn:'This city has more and more people.',lv:3},
  {cn:'他不仅聪明而且很努力。',py:'tā bùjǐn cōngmíng érqiě hěn nǔlì',mn:'He is not only smart but also hardworking.',lv:4},
  {cn:'越来越多的人开始学习中文。',py:'yuè lái yuè duō de rén kāishǐ xuéxí zhōngwén',mn:'More and more people are starting to learn Chinese.',lv:3},
  {cn:'环境保护是我们每个人的责任。',py:'huánjìng bǎohù shì wǒmen měi gè rén de zérèn',mn:'Environmental protection is everyones responsibility.',lv:4},
  {cn:'经过多次尝试，他终于成功了。',py:'jīngguò duō cì chángshì, tā zhōngyú chénggōng le',mn:'After many attempts, he finally succeeded.',lv:4},
  {cn:'她对音乐有着浓厚的兴趣。',py:'tā duì yīnyuè yǒu zhe nónghòu de xìngqù',mn:'She has a strong interest in music.',lv:4},
  {cn:'科技的发展改变了我们的生活方式。',py:'kējì de fāzhǎn gǎibiàn le wǒmen de shēnghuó fāngshì',mn:'Technology has changed our lifestyle.',lv:4},
  {cn:'我们应该珍惜时间，努力学习。',py:'wǒmen yīnggāi zhēnxī shíjiān, nǔlì xuéxí',mn:'We should cherish time and study hard.',lv:3},
  {cn:'不管遇到什么困难，都不要放弃。',py:'bùguǎn yùdào shénme kùnnán, dōu bùyào fàngqì',mn:'No matter what difficulties, do not give up.',lv:4},
  {cn:'今年的冬天比去年更冷。',py:'jīnnián de dōngtiān bǐ qùnián gèng lěng',mn:'This winter is colder than last year.',lv:2},
  {cn:'我渐渐适应了这个城市的生活。',py:'wǒ jiànjiàn shìyìng le zhège chéngshì de shēnghuó',mn:'I am gradually adapting to life in this city.',lv:4},
  {cn:'真正的友谊比金钱更重要。',py:'zhēnzhèng de yǒuyì bǐ jīnqián gèng zhòngyào',mn:'True friendship is more important than money.',lv:4},
  {cn:'请把窗户打开，空气太闷了。',py:'qǐng bǎ chuānghu dǎkāi, kōngqì tài mēn le',mn:'Please open the window, the air is too stuffy.',lv:3},
  {cn:'由于天气原因，航班取消了。',py:'yóuyú tiānqì yuányīn, hángbān qǔxiāo le',mn:'Due to weather, the flight was cancelled.',lv:4},
  {cn:'随着经济的发展，生活水平提高了。',py:'suízhe jīngjì de fāzhǎn, shēnghuó shuǐpíng tígāo le',mn:'With economic development, living standards have risen.',lv:5},
  {cn:'这个问题值得我们认真思考。',py:'zhège wèntí zhíde wǒmen rènzhēn sīkǎo',mn:'This problem is worth our serious consideration.',lv:4},
  {cn:'传统与现代的结合是一种艺术。',py:'chuántǒng yǔ xiàndài de jiéhé shì yī zhǒng yìshù',mn:'The combination of tradition and modernity is an art.',lv:5},
  {cn:'他的演讲非常精彩，赢得了热烈掌声。',py:'tā de yǎnjiǎng fēicháng jīngcǎi, yíngdé le rèliè zhǎngshēng',mn:'His speech was brilliant, winning warm applause.',lv:5},
  {cn:'教育不但是传授知识，更是培养能力。',py:'jiàoyù bùdàn shì chuánshòu zhīshi, gèng shì péiyǎng nénglì',mn:'Education is not just imparting knowledge but developing ability.',lv:5},
  {cn:'在这个信息爆炸的时代，辨别真伪很重要。',py:'zài zhège xìnxī bàozhà de shídài, biànbié zhēnwěi hěn zhòngyào',mn:'In this age of information explosion, distinguishing truth is important.',lv:5},
  {cn:'全球化给各国带来了机遇和挑战。',py:'quánqiúhuà gěi gè guó dài lái le jīyù hé tiǎozhàn',mn:'Globalization brings opportunities and challenges to all countries.',lv:5},
  {cn:'人生的意义在于不断超越自我。',py:'rénshēng de yìyì zàiyú bùduàn chāoyuè zìwǒ',mn:'The meaning of life lies in constantly surpassing oneself.',lv:5},
  {cn:'只有通过努力，才能实现梦想。',py:'zhǐyǒu tōngguò nǔlì, cáinéng shíxiàn mèngxiǎng',mn:'Only through hard work can dreams be realized.',lv:4},
  {cn:'每个人的价值观和生活方式都不同。',py:'měi gè rén de jiàzhíguān hé shēnghuó fāngshì dōu bùtóng',mn:'Everyones values and lifestyles are different.',lv:4},
  {cn:'健康是最大的财富。',py:'jiànkāng shì zuì dà de cáifù',mn:'Health is the greatest wealth.',lv:2},
  {cn:'友谊第一，比赛第二。',py:'yǒuyì dì yī, bǐsài dì èr',mn:'Friendship first, competition second.',lv:2},
  {cn:'百闻不如一见。',py:'bǎi wén bùrú yī jiàn',mn:'Seeing is believing.',lv:4},
  {cn:'活到老，学到老。',py:'huó dào lǎo, xué dào lǎo',mn:'It is never too old to learn.',lv:4},
  {cn:'千里之行，始于足下。',py:'qiān lǐ zhī xíng, shǐ yú zú xià',mn:'A thousand-mile journey begins with the first step.',lv:5},
  {cn:'世界那么大，我想去看看。',py:'shìjiè nàme dà, wǒ xiǎng qù kàn kan',mn:'The world is so big, I want to see it.',lv:3},
  {cn:'不要轻易放弃你的梦想。',py:'bùyào qīngyì fàngqì nǐ de mèngxiǎng',mn:'Do not easily give up on your dreams.',lv:3},
  {cn:'独乐乐不如众乐乐。',py:'dú lè lè bùrú zhòng lè lè',mn:'Sharing joy makes it greater.',lv:4},
  {cn:'今天的事今天做。',py:'jīntiān de shì jīntiān zuò',mn:'Do not put off till tomorrow what can be done today.',lv:2},
];

const toneDrillWords = [
  {cn:'巴拔把爸',py:'bā bá bǎ bà',mn:'Eight-pull-hold-father',ts:[1,2,3,4]},
  {cn:'坡婆破',py:'pō pó pò',mn:'Slope-grandma-break',ts:[1,2,4]},
  {cn:'猫毛卯帽',py:'māo máo mǎo mào',mn:'Cat-fur-rabbit-hat',ts:[1,2,3,4]},
  {cn:'方房仿放',py:'fāng fáng fǎng fàng',mn:'Square-house-imitate-put',ts:[1,2,3,4]},
  {cn:'低敌底地',py:'dī dí dǐ dì',mn:'Low-enemy-bottom-ground',ts:[1,2,3,4]},
  {cn:'通同桶痛',py:'tōng tóng tǒng tòng',mn:'Through-same-barrel-pain',ts:[1,2,3,4]},
  {cn:'妞牛扭拗',py:'niū niú niǔ niù',mn:'Girl-cow-turn-stubborn',ts:[1,2,3,4]},
  {cn:'溜榴柳六',py:'liū liú liǔ liù',mn:'Slide-pomegranate-willow-six',ts:[1,2,3,4]},
  {cn:'姑鼓故',py:'gū gǔ gù',mn:'Aunt-drum-reason',ts:[1,3,4]},
  {cn:'枯苦库',py:'kū kǔ kù',mn:'Withered-bitter-warehouse',ts:[1,3,4]},
  {cn:'呼胡虎户',py:'hū hú hǔ hù',mn:'Shout-beard-tiger-door',ts:[1,2,3,4]},
  {cn:'机急几记',py:'jī jí jǐ jì',mn:'Machine-urgent-how many-remember',ts:[1,2,3,4]},
  {cn:'七其起气',py:'qī qí qǐ qì',mn:'Seven-its-rise-air',ts:[1,2,3,4]},
  {cn:'西习洗细',py:'xī xí xǐ xì',mn:'West-practice-wash-thin',ts:[1,2,3,4]},
  {cn:'知职只志',py:'zhī zhí zhǐ zhì',mn:'Know-duty-only-will',ts:[1,2,3,4]},
  {cn:'吃池尺斥',py:'chī chí chǐ chì',mn:'Eat-late-ruler-rebuke',ts:[1,2,3,4]},
  {cn:'师时使事',py:'shī shí shǐ shì',mn:'Teacher-time-use-thing',ts:[1,2,3,4]},
  {cn:'日入',py:'rì rù',mn:'Sun-enter',ts:[4,4]},
  {cn:'资紫字',py:'zī zǐ zì',mn:'Money-purple-character',ts:[1,3,4]},
  {cn:'疵词此次',py:'cī cí cǐ cì',mn:'Flaw-word-this-time',ts:[1,2,3,4]},
  {cn:'丝死四',py:'sī sǐ sì',mn:'Silk-die-four',ts:[1,3,4]},
  {cn:'鸭牙哑亚',py:'yā yá yǎ yà',mn:'Duck-tooth-mute-Asia',ts:[1,2,3,4]},
  {cn:'蛙娃瓦袜',py:'wā wá wǎ wà',mn:'Frog-child-tile-socks',ts:[1,2,3,4]},
  {cn:'约爷也夜',py:'yuē yé yě yè',mn:'About-grandpa-also-night',ts:[1,2,3,4]},
  {cn:'因银引印',py:'yīn yín yǐn yìn',mn:'Cause-silver-lead-print',ts:[1,2,3,4]},
  {cn:'温文稳问',py:'wēn wén wěn wèn',mn:'Warm-text-steady-ask',ts:[1,2,3,4]},
  {cn:'英营影映',py:'yīng yíng yǐng yìng',mn:'Hero-camp-shadow-reflect',ts:[1,2,3,4]},
  {cn:'拥永用',py:'yōng yǒng yòng',mn:'Embrace-forever-use',ts:[1,3,4]},
  {cn:'安暗案',py:'ān àn àn',mn:'Peace-dark-case',ts:[1,4,4]},
  {cn:'班板半',py:'bān bǎn bàn',mn:'Class-board-half',ts:[1,3,4]},
  {cn:'单胆蛋',py:'dān dǎn dàn',mn:'Single-gallbladder-egg',ts:[1,3,4]},
  {cn:'干敢干',py:'gān gǎn gàn',mn:'Dry-dare-do',ts:[1,3,4]},
  {cn:'看砍看',py:'kān kǎn kàn',mn:'Watch-chopping-see',ts:[1,3,4]},
  {cn:'山闪扇',py:'shān shǎn shàn',mn:'Mountain-flash-fan',ts:[1,3,4]},
  {cn:'天填舔',py:'tiān tián tiǎn',mn:'Sky-fill-lick',ts:[1,2,3]},
  {cn:'三伞散',py:'sān sǎn sàn',mn:'Three-umbrella-disperse',ts:[1,3,4]},
  {cn:'先闲显现',py:'xiān xián xiǎn xiàn',mn:'First-leisure-obvious-appear',ts:[1,2,3,4]},
  {cn:'烟盐眼验',py:'yān yán yǎn yàn',mn:'Smoke-salt-eye-test',ts:[1,2,3,4]},
  {cn:'弯完碗万',py:'wān wán wǎn wàn',mn:'Curved-finished-bowl-10k',ts:[1,2,3,4]},
  {cn:'春纯蠢寸',py:'chūn chún chǔn cùn',mn:'Spring-pure-stupid-inch',ts:[1,2,3,4]},
  {cn:'吞屯褪',py:'tūn tún tùn',mn:'Swallow-store-remove',ts:[1,2,4]},
  {cn:'喷盆',py:'pēn pén',mn:'Spray-basin',ts:[1,2]},
  {cn:'分坟粉份',py:'fēn fén fěn fèn',mn:'Divide-tomb-powder-part',ts:[1,2,3,4]},
  {cn:'真枕镇',py:'zhēn zhěn zhèn',mn:'Real-pillow-town',ts:[1,3,4]},
  {cn:'深神审甚',py:'shēn shén shěn shèn',mn:'Deep-god-examine-extreme',ts:[1,2,3,4]},
  {cn:'今紧近',py:'jīn jǐn jìn',mn:'Now-tight-near',ts:[1,3,4]},
  {cn:'心信',py:'xīn xìn',mn:'Heart-trust',ts:[1,4]},
  {cn:'新寻信',py:'xīn xún xìn',mn:'New-seek-trust',ts:[1,2,4]},
  {cn:'光广逛',py:'guāng guǎng guàng',mn:'Light-wide-stroll',ts:[1,3,4]},
  {cn:'双爽',py:'shuāng shuǎng',mn:'Double-refreshing',ts:[1,3]},
  {cn:'窗床闯创',py:'chuāng chuáng chuǎng chuàng',mn:'Window-bed-rush-create',ts:[1,2,3,4]},
  {cn:'江讲降',py:'jiāng jiǎng jiàng',mn:'River-speak-descend',ts:[1,3,4]},
  {cn:'香想象',py:'xiāng xiǎng xiàng',mn:'Fragrant-think-image',ts:[1,3,4]},
  {cn:'冰饼并',py:'bīng bǐng bìng',mn:'Ice-cake-merge',ts:[1,3,4]},
  {cn:'星形醒姓',py:'xīng xíng xǐng xìng',mn:'Star-shape-wake-surname',ts:[1,2,3,4]},
  {cn:'京景镜',py:'jīng jǐng jìng',mn:'Capital-scenery-mirror',ts:[1,3,4]},
  {cn:'请晴情庆',py:'qǐng qíng qíng qìng',mn:'Please-clear-feeling-celebrate',ts:[3,2,2,4]},
  {cn:'东懂动',py:'dōng dǒng dòng',mn:'East-understand-move',ts:[1,3,4]},
  {cn:'通同统痛',py:'tōng tóng tǒng tòng',mn:'Through-same-unify-pain',ts:[1,2,3,4]},
  {cn:'空孔控',py:'kōng kǒng kòng',mn:'Empty-hole-control',ts:[1,3,4]},
  {cn:'工巩共',py:'gōng gǒng gòng',mn:'Work-consolidate-common',ts:[1,3,4]},
  {cn:'红哄',py:'hóng hǒng',mn:'Red-coax',ts:[2,3]},
  {cn:'中种众',py:'zhōng zhǒng zhòng',mn:'Middle-kind-many',ts:[1,3,4]},
  {cn:'终肿中',py:'zhōng zhǒng zhòng',mn:'End-swell-hit',ts:[1,3,4]},
  {cn:'充崇宠冲',py:'chōng chóng chǒng chòng',mn:'Full-noble-favor-dash',ts:[1,2,3,4]},
  {cn:'龙拢弄',py:'lóng lǒng nòng',mn:'Dragon-gather-do',ts:[2,3,4]},
  {cn:'从宠',py:'cóng chǒng',mn:'From-spoil',ts:[2,3]},
  {cn:'送宋',py:'sòng sòng',mn:'Send-song',ts:[4,4]},
];

function genPronunciation(i) {
  const idx = i % pronunciations.length;
  const p = pronunciations[idx];
  const tone = parseInt(p.py.match(/[āáǎà]/) ? {ā:1,á:2,ǎ:3,à:4}[p.py.match(/[āáǎà]/)[0]] : 1);
  const d = pick(difficulties);
  return { id:`spk_p${String(i+1).padStart(3,'0')}`, type:'pronunciation', difficulty:d, chinese:p.cn, pinyin:p.py, meaning:p.mn, focus:p.fc };
}

function genShadowing(i) {
  const idx = i % shadowing.length;
  const s = shadowing[idx];
  const d = pick(difficulties);
  const lv = Math.min(Math.floor((s.cn.length / 4) + 1), 5);
  return { id:`spk_sh${String(i+1).padStart(3,'0')}`, type:'shadowing', difficulty:d, chinese:s.cn, pinyin:s.py, meaning:s.mn, level:lv };
}

function genSentenceReading(i) {
  const idx = i % sentenceTemplates.length;
  const s = sentenceTemplates[idx];
  const d = pick(difficulties);
  return { id:`spk_s${String(i+1).padStart(3,'0')}`, type:'sentenceReading', difficulty:d, chinese:s.cn, pinyin:s.py, meaning:s.mn, level:s.lv };
}

function genToneDrill(i) {
  const idx = i % toneDrillWords.length;
  const t = toneDrillWords[idx];
  const d = pick(difficulties);
  const lv = Math.min(Math.floor((t.cn.length / 3) + 1), 5);
  const sandhi = t.ts.includes(3) && t.ts.length >= 2;
  return { id:`spk_t${String(i+1).padStart(3,'0')}`, type:'toneDrills', difficulty:d, word:t.cn, pinyin:t.py, meaning:t.mn, tone:t.ts[0], sandhi:sandhi, level:lv };
}

function generate() {
  let output = '// CHINESE MASTER - Speaking MEGA Data\n';
  output += '// Auto-generated\n';
  output += 'const SpeakingMega = {\n';

  const pron = []; for (let i=0; i<150; i++) pron.push(genPronunciation(i));
  output += `  pronunciation: ${JSON.stringify(pron,null,2)},\n\n`;

  const shad = []; for (let i=0; i<120; i++) shad.push(genShadowing(i));
  output += `  shadowing: ${JSON.stringify(shad,null,2)},\n\n`;

  const sread = []; for (let i=0; i<400; i++) sread.push(genSentenceReading(i));
  output += `  sentenceReading: ${JSON.stringify(sread,null,2)},\n\n`;

  const tdrills = []; for (let i=0; i<100; i++) tdrills.push(genToneDrill(i));
  output += `  toneDrills: ${JSON.stringify(tdrills,null,2)},\n`;

  output += '};\n';
  output += 'window.SpeakingMega = SpeakingMega;\n';
  return output;
}

const result = generate();
fs.writeFileSync(path.join(__dirname, 'data', 'speaking-mega.js'), result, 'utf8');
console.log('Generated speaking-mega.js');

console.log('Speaking counts: PRON=150 SHAD=120 SREAD=400 TDRILL=100 TOTAL=770');

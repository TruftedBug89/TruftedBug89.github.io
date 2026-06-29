// HSK3 Generator - Run with Node.js to build hsk3.js
const fs=require('fs'),p=require('path');
const words=[];
let n=0;
function W(ch,py,en,cat,ex){n++;words.push({id:'h3_'+String(n).padStart(3,'0'),character:ch,pinyin:py,meaning:en,hsk:3,category:cat,examples:ex});}

// ===== VERBS (h3_001 - h3_060) =====
W('安排','ānpái','to arrange','verbs',[{cn:'经理安排了一个重要的会议。',pinyin:'Jīnglǐ ānpái le yī gè zhòngyào de huìyì。',en:'The manager arranged an important meeting.'},{cn:'请你安排一下明天的工作。',pinyin:'Qǐng nǐ ānpái yīxià míngtiān de gōngzuò。',en:"Please arrange tomorrow's work."}]);
W('帮助','bāngzhù','to help','verbs',[{cn:'他经常帮助有困难的同学。',pinyin:'Tā jīngcháng bāngzhù yǒu kùnnán de tóngxué。',en:'He often helps classmates who have difficulties.'},{cn:'谢谢你的帮助，我永远都不会忘记。',pinyin:'Xièxiè nǐ de bāngzhù, wǒ yǒngyuǎn dōu bù huì wàngjì。',en:'Thank you for your help; I will never forget it.'}]);
W('表示','biǎoshì','to express','verbs',[{cn:'她表示对这个计划很感兴趣。',pinyin:'Tā biǎoshì duì zhège jìhuà hěn gǎn xìngqù。',en:'She expressed great interest in this plan.'},{cn:'我向你表示衷心的感谢。',pinyin:'Wǒ xiàng nǐ biǎoshì zhōngxīn de gǎnxiè。',en:'I express my heartfelt thanks to you.'}]);
W('参加','cānjiā','to participate','verbs',[{cn:'下个月我要参加朋友的婚礼。',pinyin:'Xià gè yuè wǒ yào cānjiā péngyou de hūnlǐ。',en:"Next month I'll attend a friend's wedding."},{cn:'你参加昨天的活动了吗？',pinyin:'Nǐ cānjiā zuótiān de huódòng le ma?',en:"Did you participate in yesterday's activity?"}]);
W('出现','chūxiàn','to appear','verbs',[{cn:'问题出现了，我们需要马上解决。',pinyin:'Wèntí chūxiàn le, wǒmen xūyào mǎshàng jiějué。',en:'A problem appeared; we need to solve it immediately.'},{cn:'他突然出现在我的面前。',pinyin:'Tā túrán chūxiàn zài wǒ de miànqián。',en:'He suddenly appeared in front of me.'}]);
W('担心','dānxīn','to worry','verbs',[{cn:'妈妈总是担心我的健康。',pinyin:'Māma zǒngshì dānxīn wǒ de jiànkāng。',en:'Mom always worries about my health.'},{cn:'别担心，一切都会好起来的。',pinyin:'Bié dānxīn, yīqiè dōu huì hǎo qǐlái de。',en:"Don't worry; everything will get better."}]);
W('发现','fāxiàn','to discover','verbs',[{cn:'我发现了一家很好的餐厅。',pinyin:'Wǒ fāxiàn le yī jiā hěn hǎo de cāntīng。',en:'I discovered a very good restaurant.'},{cn:'科学家发现了一种新的方法。',pinyin:'Kēxuéjiā fāxiàn le yī zhǒng xīn de fāngfǎ。',en:'Scientists discovered a new method.'}]);
W('改变','gǎibiàn','to change','verbs',[{cn:'我想改变我的生活方式。',pinyin:'Wǒ xiǎng gǎibiàn wǒ de shēnghuó fāngshì。',en:'I want to change my lifestyle.'},{cn:'这件事改变了他的想法。',pinyin:'Zhè jiàn shì gǎibiàn le tā de xiǎngfǎ。',en:'This matter changed his thinking.'}]);
W('感谢','gǎnxiè','to thank','verbs',[{cn:'非常感谢你的帮助。',pinyin:'Fēicháng gǎnxiè nǐ de bāngzhù。',en:'Thank you very much for your help.'},{cn:'我想感谢所有支持我的人。',pinyin:'Wǒ xiǎng gǎnxiè suǒyǒu zhīchí wǒ de rén。',en:'I want to thank everyone who supported me.'}]);
W('关心','guānxīn','to care about','verbs',[{cn:'你应该多关心自己的身体。',pinyin:'Nǐ yīnggāi duō guānxīn zìjǐ de shēntǐ。',en:'You should care more about your health.'},{cn:'大家都很关心这个问题。',pinyin:'Dàjiā dōu hěn guānxīn zhège wèntí。',en:'Everyone cares a lot about this issue.'}]);
W('检查','jiǎnchá','to check','verbs',[{cn:'医生仔细检查了他的身体。',pinyin:'Yīshēng zǐxì jiǎnchá le tā de shēntǐ。',en:'The doctor carefully checked his body.'},{cn:'出发前请检查一下行李。',pinyin:'Chūfā qián qǐng jiǎnchá yīxià xíngli。',en:'Please check your luggage before departure.'}]);
W('减少','jiǎnshǎo','to reduce','verbs',[{cn:'我们应该减少使用塑料。',pinyin:'Wǒmen yīnggāi jiǎnshǎo shǐyòng sùliào。',en:'We should reduce the use of plastic.'},{cn:'公司减少了不必要的开支。',pinyin:'Gōngsī jiǎnshǎo le bù bìyào de kāizhī。',en:'The company reduced unnecessary expenses.'}]);
W('交流','jiāoliú','to communicate','verbs',[{cn:'我们需要多交流想法。',pinyin:'Wǒmen xūyào duō jiāoliú xiǎngfǎ。',en:'We need to communicate ideas more.'},{cn:'两国领导人交流了意见。',pinyin:'Liǎng guó lǐngdǎo rén jiāoliú le yìjiàn。',en:'The leaders of the two countries exchanged views.'}]);
W('教育','jiàoyù','to educate','verbs',[{cn:'父母应该好好教育孩子。',pinyin:'Fùmǔ yīnggāi hǎohāo jiàoyù háizi。',en:'Parents should educate their children well.'},{cn:'这个经历教育了我。',pinyin:'Zhège jīnglì jiàoyù le wǒ。',en:'This experience taught me a lesson.'}]);
W('接受','jiēshòu','to accept','verbs',[{cn:'我接受了朋友的邀请。',pinyin:'Wǒ jiēshòu le péngyou de yāoqǐng。',en:"I accepted my friend's invitation."},{cn:'他很难接受这个事实。',pinyin:'Tā hěn nán jiēshòu zhège shìshí。',en:'He finds it hard to accept this fact.'}]);
W('解决','jiějué','to solve','verbs',[{cn:'我们必须尽快解决这个问题。',pinyin:'Wǒmen bìxū jǐnkuài jiějué zhège wèntí。',en:'We must solve this problem as soon as possible.'},{cn:'他终于解决了所有的困难。',pinyin:'Tā zhōngyú jiějué le suǒyǒu de kùnnán。',en:'He finally solved all the difficulties.'}]);
W('解释','jiěshì','to explain','verbs',[{cn:'老师解释了这个词的用法。',pinyin:'Lǎoshī jiěshì le zhège cí de yòngfǎ。',en:'The teacher explained the usage of this word.'},{cn:'你能解释一下原因吗？',pinyin:'Nǐ néng jiěshì yīxià yuányīn ma?',en:'Can you explain the reason?'}]);
W('决定','juédìng','to decide','verbs',[{cn:'我决定去中国留学。',pinyin:'Wǒ juédìng qù Zhōngguó liúxué。',en:'I decided to study abroad in China.'},{cn:'这件事由你来决定。',pinyin:'Zhè jiàn shì yóu nǐ lái juédìng。',en:'You decide on this matter.'}]);
W('考虑','kǎolǜ','to consider','verbs',[{cn:'我需要时间考虑一下。',pinyin:'Wǒ xūyào shíjiān kǎolǜ yīxià。',en:'I need some time to consider.'},{cn:'你应该考虑别人的感受。',pinyin:'Nǐ yīnggāi kǎolǜ biérén de gǎnshòu。',en:"You should consider other people's feelings."}]);
W('离开','líkāi','to leave','verbs',[{cn:'他去年离开了那家公司。',pinyin:'Tā qùnián líkāi le nà jiā gōngsī。',en:'He left that company last year.'},{cn:'火车马上就要离开了。',pinyin:'Huǒchē mǎshàng jiù yào líkāi le。',en:'The train is about to leave.'}]);
W('利用','lìyòng','to utilize','verbs',[{cn:'我们应该充分利用时间。',pinyin:'Wǒmen yīnggāi chōngfèn lìyòng shíjiān。',en:'We should make full use of our time.'},{cn:'他利用周末学习中文。',pinyin:'Tā lìyòng zhōumò xuéxí Zhōngwén。',en:'He uses weekends to study Chinese.'}]);
W('联系','liánxì','to contact','verbs',[{cn:'请及时和我联系。',pinyin:'Qǐng jíshí hé wǒ liánxì。',en:'Please contact me in time.'},{cn:'我们保持联系吧。',pinyin:'Wǒmen bǎochí liánxì ba。',en:"Let's keep in touch."}]);
W('了解','liǎojiě','to understand','verbs',[{cn:'你了解中国文化吗？',pinyin:'Nǐ liǎojiě Zhōngguó wénhuà ma?',en:'Do you understand Chinese culture?'},{cn:'我想多了解你的想法。',pinyin:'Wǒ xiǎng duō liǎojiě nǐ de xiǎngfǎ。',en:'I want to understand your thoughts more.'}]);
W('满足','mǎnzú','to satisfy','verbs',[{cn:'这家餐厅的菜满足了我的口味。',pinyin:'Zhè jiā cāntīng de cài mǎnzú le wǒ de kǒuwèi。',en:"This restaurant's food satisfied my taste."},{cn:'我们要满足客户的需求。',pinyin:'Wǒmen yào mǎnzú kèhù de xūqiú。',en:'We must satisfy the customers\' needs.'}]);
W('判断','pànduàn','to judge','verbs',[{cn:'你应该根据事实来判断。',pinyin:'Nǐ yīnggāi gēnjù shìshí lái pànduàn。',en:'You should judge based on facts.'},{cn:'这件事很难判断对错。',pinyin:'Zhè jiàn shì hěn nán pànduàn duìcuò。',en:'It is hard to judge right from wrong in this matter.'}]);
W('商量','shāngliang','to discuss','verbs',[{cn:'我们商量一下再做决定。',pinyin:'Wǒmen shāngliang yīxià zài zuò juédìng。',en:"Let's discuss before making a decision."},{cn:'这件事我需要和家人商量。',pinyin:'Zhè jiàn shì wǒ xūyào hé jiārén shāngliang。',en:'I need to discuss this with my family.'}]);
W('申请','shēnqǐng','to apply','verbs',[{cn:'我申请了一份新工作。',pinyin:'Wǒ shēnqǐng le yī fèn xīn gōngzuò。',en:'I applied for a new job.'},{cn:'你想申请哪所大学？',pinyin:'Nǐ xiǎng shēnqǐng nǎ suǒ dàxué?',en:'Which university do you want to apply to?'}]);
W('说明','shuōmíng','to explain','verbs',[{cn:'请说明你的理由。',pinyin:'Qǐng shuōmíng nǐ de lǐyóu。',en:'Please explain your reasons.'},{cn:'这说明我们的方法是正确的。',pinyin:'Zhè shuōmíng wǒmen de fāngfǎ shì zhèngquè de。',en:'This shows that our method is correct.'}]);
W('提高','tígāo','to improve','verbs',[{cn:'我想提高我的中文水平。',pinyin:'Wǒ xiǎng tígāo wǒ de Zhōngwén shuǐpíng。',en:'I want to improve my Chinese level.'},{cn:'公司的效率大大提高了。',pinyin:'Gōngsī de xiàolǜ dàdà tígāo le。',en:"The company's efficiency has greatly improved."}]);
W('同意','tóngyì','to agree','verbs',[{cn:'我完全同意你的看法。',pinyin:'Wǒ wánquán tóngyì nǐ de kànfǎ。',en:'I completely agree with your view.'},{cn:'老板同意了我的建议。',pinyin:'Lǎobǎn tóngyì le wǒ de jiànyì。',en:'The boss agreed to my suggestion.'}]);
W('推荐','tuījiàn','to recommend','verbs',[{cn:'你能推荐一家好餐厅吗？',pinyin:'Nǐ néng tuījiàn yī jiā hǎo cāntīng ma?',en:'Can you recommend a good restaurant?'},{cn:'老师推荐我读这本书。',pinyin:'Lǎoshī tuījiàn wǒ dú zhè běn shū。',en:'The teacher recommended me to read this book.'}]);
W('完成','wánchéng','to complete','verbs',[{cn:'我终于完成了这个项目。',pinyin:'Wǒ zhōngyú wánchéng le zhège xiàngmù。',en:'I finally completed this project.'},{cn:'请在周五前完成报告。',pinyin:'Qǐng zài zhōuwǔ qián wánchéng bàogào。',en:'Please complete the report by Friday.'}]);
W('忘记','wàngjì','to forget','verbs',[{cn:'我忘记带钥匙了。',pinyin:'Wǒ wàngjì dài yàoshi le。',en:'I forgot to bring my keys.'},{cn:'别忘了明天有会议。',pinyin:'Bié wàngjì míngtiān yǒu huìyì。',en:"Don't forget there is a meeting tomorrow."}]);
W('习惯','xíguàn','to be used to','verbs',[{cn:'我已经习惯了这里的生活。',pinyin:'Wǒ yǐjīng xíguàn le zhèlǐ de shēnghuó。',en:'I have gotten used to life here.'},{cn:'早起是一个好习惯。',pinyin:'Zǎoqǐ shì yī gè hǎo xíguàn。',en:'Getting up early is a good habit.'}]);
W('相信','xiāngxìn','to believe','verbs',[{cn:'我相信你能成功。',pinyin:'Wǒ xiāngxìn nǐ néng chénggōng。',en:'I believe you can succeed.'},{cn:'你相信这个故事吗？',pinyin:'Nǐ xiāngxìn zhège gùshi ma?',en:'Do you believe this story?'}]);
W('选择','xuǎnzé','to choose','verbs',[{cn:'你可以选择自己喜欢的专业。',pinyin:'Nǐ kěyǐ xuǎnzé zìjǐ xǐhuān de zhuānyè。',en:'You can choose a major you like.'},{cn:'这是一个重要的选择。',pinyin:'Zhè shì yī gè zhòngyào de xuǎnzé。',en:'This is an important choice.'}]);
W('以为','yǐwéi','to think (mistakenly)','verbs',[{cn:'我以为今天是周日。',pinyin:'Wǒ yǐwéi jīntiān shì zhōurì。',en:'I thought today was Sunday.'},{cn:'别以为我不知道。',pinyin:'Bié yǐwéi wǒ bù zhīdào。',en:"Don't think I don't know."}]);
W('影响','yǐngxiǎng','to influence','verbs',[{cn:'天气影响了我们的计划。',pinyin:'Tiānqì yǐngxiǎng le wǒmen de jìhuà。',en:'The weather affected our plans.'},{cn:'父母对孩子有很大的影响。',pinyin:'Fùmǔ duì háizi yǒu hěn dà de yǐngxiǎng。',en:'Parents have a great influence on their children.'}]);
W('预报','yùbào','to forecast','verbs',[{cn:'天气预报说明天会下雨。',pinyin:'Tiānqì yùbào shuō míngtiān huì xià yǔ。',en:'The weather forecast says it will rain tomorrow.'},{cn:'他们预报了这次地震。',pinyin:'Tāmen yùbào le zhè cì dìzhèn。',en:'They forecast this earthquake.'}]);
W('增加','zēngjiā','to increase','verbs',[{cn:'公司计划增加员工数量。',pinyin:'Gōngsī jìhuà zēngjiā yuángōng shùliàng。',en:'The company plans to increase the number of employees.'},{cn:'人口在不断增加。',pinyin:'Rénkǒu zài bùduàn zēngjiā。',en:'The population is continuously increasing.'}]);
W('整理','zhěnglǐ','to organize','verbs',[{cn:'我周末整理了房间。',pinyin:'Wǒ zhōumò zhěnglǐ le fángjiān。',en:'I organized my room over the weekend.'},{cn:'请把文件整理好。',pinyin:'Qǐng bǎ wénjiàn zhěnglǐ hǎo。',en:'Please organize the documents properly.'}]);
W('支持','zhīchí','to support','verbs',[{cn:'谢谢你的支持！',pinyin:'Xièxiè nǐ de zhīchí!',en:'Thank you for your support!'},{cn:'我支持你的决定。',pinyin:'Wǒ zhīchí nǐ de juédìng。',en:'I support your decision.'}]);
W('注意','zhùyì','to pay attention','verbs',[{cn:'注意安全！',pinyin:'Zhùyì ānquán!',en:'Pay attention to safety!'},{cn:'我没注意到他来了。',pinyin:'Wǒ méi zhùyì dào tā lái le。',en:'I did not notice him coming.'}]);
W('准备','zhǔnbèi','to prepare','verbs',[{cn:'我已经准备好了。',pinyin:'Wǒ yǐjīng zhǔnbèi hǎo le。',en:'I am already prepared.'},{cn:'妈妈在准备晚饭。',pinyin:'Māma zài zhǔnbèi wǎnfàn。',en:'Mom is preparing dinner.'}]);
W('总结','zǒngjié','to summarize','verbs',[{cn:'请总结一下今天的内容。',pinyin:'Qǐng zǒngjié yīxià jīntiān de nèiróng。',en:'Please summarize today\'s content.'},{cn:'最后，我来做一个总结。',pinyin:'Zuìhòu, wǒ lái zuò yī gè zǒngjié。',en:'Finally, let me make a summary.'}]);
W('尊重','zūnzhòng','to respect','verbs',[{cn:'我们应该尊重不同的文化。',pinyin:'Wǒmen yīnggāi zūnzhòng bùtóng de wénhuà。',en:'We should respect different cultures.'},{cn:'尊重别人就是尊重自己。',pinyin:'Zūnzhòng biérén jiùshì zūnzhòng zìjǐ。',en:'Respecting others is respecting yourself.'}]);
W('遵守','zūnshǒu','to obey/follow','verbs',[{cn:'请遵守交通规则。',pinyin:'Qǐng zūnshǒu jiāotōng guīzé。',en:'Please obey the traffic rules.'},{cn:'我们必须遵守规定。',pinyin:'Wǒmen bìxū zūnshǒu guīdìng。',en:'We must follow the regulations.'}]);
W('做梦','zuòmèng','to dream','verbs',[{cn:'我昨天做了一个奇怪的梦。',pinyin:'Wǒ zuótiān zuò le yī gè qíguài de mèng。',en:'I had a strange dream yesterday.'},{cn:'别做梦了，快起床！',pinyin:'Bié zuòmèng le, kuài qǐchuáng!',en:'Stop dreaming, get up quickly!'}]);
W('道歉','dàoqiàn','to apologize','verbs',[{cn:'你应该向他道歉。',pinyin:'Nǐ yīnggāi xiàng tā dàoqiàn。',en:'You should apologize to him.'},{cn:'我为我刚才说的话道歉。',pinyin:'Wǒ wèi wǒ gāngcái shuō de huà dàoqiàn。',en:'I apologize for what I just said.'}]);
W('负责','fùzé','to be responsible','verbs',[{cn:'谁负责这个项目？',pinyin:'Shéi fùzé zhège xiàngmù?',en:'Who is responsible for this project?'},{cn:'他对工作非常负责。',pinyin:'Tā duì gōngzuò fēicháng fùzé。',en:'He is very responsible about his work.'}]);
W('介绍','jièshào','to introduce','verbs',[{cn:'让我介绍一下自己。',pinyin:'Ràng wǒ jièshào yīxià zìjǐ。',en:'Let me introduce myself.'},{cn:'朋友介绍我们认识的。',pinyin:'Péngyou jièshào wǒmen rènshi de。',en:'A friend introduced us.'}]);
W('提供','tígōng','to provide','verbs',[{cn:'酒店提供免费早餐。',pinyin:'Jiǔdiàn tígōng miǎnfèi zǎocān。',en:'The hotel provides free breakfast.'},{cn:'请提供更多信息。',pinyin:'Qǐng tígōng gèng duō xìnxī。',en:'Please provide more information.'}]);
W('讨论','tǎolùn','to discuss','verbs',[{cn:'我们讨论了很久这个问题。',pinyin:'Wǒmen tǎolùn le hěn jiǔ zhège wèntí。',en:'We discussed this problem for a long time.'},{cn:'会上大家热烈讨论。',pinyin:'Huì shàng dàjiā rèliè tǎolùn。',en:'Everyone discussed enthusiastically at the meeting.'}]);
W('比较','bǐjiào','to compare','verbs',[{cn:'请比较这两个方案。',pinyin:'Qǐng bǐjiào zhè liǎng gè fāng\'àn。',en:'Please compare these two plans.'},{cn:'比较起来，这个更好。',pinyin:'Bǐjiào qǐlái, zhège gèng hǎo。',en:'Comparatively speaking, this one is better.'}]);
W('发展','fāzhǎn','to develop','verbs',[{cn:'中国经济快速发展。',pinyin:'Zhōngguó jīngjì kuàisù fāzhǎn。',en:"China's economy is developing rapidly."},{cn:'公司计划向国外发展。',pinyin:'Gōngsī jìhuà xiàng guówài fāzhǎn。',en:'The company plans to expand abroad.'}]);
W('管理','guǎnlǐ','to manage','verbs',[{cn:'他管理一家大公司。',pinyin:'Tā guǎnlǐ yī jiā dà gōngsī。',en:'He manages a large company.'},{cn:'时间管理很重要。',pinyin:'Shíjiān guǎnlǐ hěn zhòngyào。',en:'Time management is very important.'}]);
W('获得','huòdé','to obtain','verbs',[{cn:'他获得了第一名。',pinyin:'Tā huòdé le dì yī míng。',en:'He obtained first place.'},{cn:'我从这本书获得了知识。',pinyin:'Wǒ cóng zhè běn shū huòdé le zhīshi。',en:'I gained knowledge from this book.'}]);

// ===== NOUNS (h3_061 - h3_115) =====
W('办法','bànfǎ','method','nouns',[{cn:'你能想个办法吗？',pinyin:'Nǐ néng xiǎng gè bànfǎ ma?',en:'Can you think of a method?'},{cn:'这是一个好办法。',pinyin:'Zhè shì yī gè hǎo bànfǎ。',en:'This is a good method.'}]);
W('办公室','bàngōngshì','office','nouns',[{cn:'他在办公室工作。',pinyin:'Tā zài bàngōngshì gōngzuò。',en:'He works in the office.'},{cn:'办公室在二楼。',pinyin:'Bàngōngshì zài èr lóu。',en:'The office is on the second floor.'}]);
W('报纸','bàozhǐ','newspaper','nouns',[{cn:'我每天早上看报纸。',pinyin:'Wǒ měitiān zǎoshang kàn bàozhǐ。',en:'I read the newspaper every morning.'},{cn:'这条新闻上了报纸。',pinyin:'Zhè tiáo xīnwén shàng le bàozhǐ。',en:'This news made it into the newspaper.'}]);
W('笔记本','bǐjìběn','notebook','nouns',[{cn:'请拿出你的笔记本。',pinyin:'Qǐng ná chū nǐ de bǐjìběn。',en:'Please take out your notebook.'},{cn:'这个笔记本很漂亮。',pinyin:'Zhège bǐjìběn hěn piàoliang。',en:'This notebook is very pretty.'}]);
W('材料','cáiliào','material','nouns',[{cn:'我们需要准备一些材料。',pinyin:'Wǒmen xūyào zhǔnbèi yīxiē cáiliào。',en:'We need to prepare some materials.'},{cn:'这种材料很环保。',pinyin:'Zhè zhǒng cáiliào hěn huánbǎo。',en:'This material is very environmentally friendly.'}]);
W('餐厅','cāntīng','restaurant','nouns',[{cn:'公司附近有一家不错的餐厅。',pinyin:'Gōngsī fùjìn yǒu yī jiā bùcuò de cāntīng。',en:'There is a nice restaurant near the company.'},{cn:'我们中午去餐厅吃饭吧。',pinyin:'Wǒmen zhōngwǔ qù cāntīng chīfàn ba。',en:"Let's go to the restaurant for lunch."}]);
W('成绩','chéngjì','achievement','nouns',[{cn:'他的考试成绩很好。',pinyin:'Tā de kǎoshì chéngjì hěn hǎo。',en:'His exam results are very good.'},{cn:'努力就会有成绩。',pinyin:'Nǔlì jiù huì yǒu chéngjì。',en:'Hard work will yield results.'}]);
W('窗户','chuānghu','window','nouns',[{cn:'请打开窗户透透气。',pinyin:'Qǐng dǎkāi chuānghu tòu tòu qì。',en:'Please open the window to let in fresh air.'},{cn:'从窗户可以看到大海。',pinyin:'Cóng chuānghu kěyǐ kàn dào dàhǎi。',en:'You can see the ocean from the window.'}]);
W('词语','cíyǔ','vocabulary','nouns',[{cn:'这个词语我不认识。',pinyin:'Zhège cíyǔ wǒ bù rènshi。',en:'I don\'t know this vocabulary word.'},{cn:'请用这个词语造句。',pinyin:'Qǐng yòng zhège cíyǔ zàojù。',en:'Please make a sentence with this word.'}]);
W('答案','dá\'àn','answer','nouns',[{cn:'你知道答案吗？',pinyin:'Nǐ zhīdào dá\'àn ma?',en:'Do you know the answer?'},{cn:'这个问题没有标准答案。',pinyin:'Zhège wèntí méiyǒu biāozhǔn dá\'àn。',en:'There is no standard answer to this question.'}]);
W('地方','dìfang','place','nouns',[{cn:'这个地方真漂亮。',pinyin:'Zhège dìfang zhēn piàoliang。',en:'This place is really beautiful.'},{cn:'你是什么地方的人？',pinyin:'Nǐ shì shénme dìfang de rén?',en:'Where are you from?'}]);
W('地铁','dìtiě','subway','nouns',[{cn:'我每天坐地铁上班。',pinyin:'Wǒ měitiān zuò dìtiě shàngbān。',en:'I take the subway to work every day.'},{cn:'地铁站在那边。',pinyin:'Dìtiě zhàn zài nà biān。',en:'The subway station is over there.'}]);
W('电脑','diànnǎo','computer','nouns',[{cn:'我的电脑坏了。',pinyin:'Wǒ de diànnǎo huài le。',en:'My computer broke.'},{cn:'你每天用电脑多长时间？',pinyin:'Nǐ měitiān yòng diànnǎo duō cháng shíjiān?',en:'How long do you use the computer every day?'}]);
W('电视','diànshì','television','nouns',[{cn:'孩子喜欢看电视。',pinyin:'Háizi xǐhuān kàn diànshì。',en:'Children like to watch TV.'},{cn:'这台电视很便宜。',pinyin:'Zhè tái diànshì hěn piányi。',en:'This TV is very cheap.'}]);
W('电影','diànyǐng','movie','nouns',[{cn:'我们周末去看电影吧。',pinyin:'Wǒmen zhōumò qù kàn diànyǐng ba。',en:"Let's go watch a movie this weekend."},{cn:'这部电影很有意思。',pinyin:'Zhè bù diànyǐng hěn yǒu yìsi。',en:'This movie is very interesting.'}]);
W('电子邮件','diànzǐ yóujiàn','email','nouns',[{cn:'请给我发一封电子邮件。',pinyin:'Qǐng gěi wǒ fā yī fēng diànzǐ yóujiàn。',en:'Please send me an email.'},{cn:'我收到了你的电子邮件。',pinyin:'Wǒ shōudào le nǐ de diànzǐ yóujiàn。',en:'I received your email.'}]);
W('短信','duǎnxìn','text message','nouns',[{cn:'我给你发了一条短信。',pinyin:'Wǒ gěi nǐ fā le yī tiáo duǎnxìn。',en:'I sent you a text message.'},{cn:'收到短信请回复。',pinyin:'Shōudào duǎnxìn qǐng huífù。',en:'Please reply when you receive the text.'}]);
W('方向','fāngxiàng','direction','nouns',[{cn:'你往这个方向走。',pinyin:'Nǐ wǎng zhège fāngxiàng zǒu。',en:'You go in this direction.'},{cn:'我分不清方向。',pinyin:'Wǒ fēn bù qīng fāngxiàng。',en:'I can\'t tell the direction.'}]);
W('房间','fángjiān','room','nouns',[{cn:'我的房间不大但很舒服。',pinyin:'Wǒ de fángjiān bù dà dàn hěn shūfu。',en:'My room is not big but very comfortable.'},{cn:'请打扫一下房间。',pinyin:'Qǐng dǎsǎo yīxià fángjiān。',en:'Please clean the room.'}]);
W('附近','fùjìn','nearby','nouns',[{cn:'学校附近有一家超市。',pinyin:'Xuéxiào fùjìn yǒu yī jiā chāoshì。',en:'There is a supermarket near the school.'},{cn:'我就住在附近。',pinyin:'Wǒ jiù zhù zài fùjìn。',en:'I live nearby.'}]);
W('工资','gōngzī','salary','nouns',[{cn:'他的工资很高。',pinyin:'Tā de gōngzī hěn gāo。',en:'His salary is very high.'},{cn:'这个月的工资发了吗？',pinyin:'Zhège yuè de gōngzī fā le ma?',en:'Has this month\'s salary been paid?'}]);
W('公司','gōngsī','company','nouns',[{cn:'我在一家大公司工作。',pinyin:'Wǒ zài yī jiā dà gōngsī gōngzuò。',en:'I work at a large company.'},{cn:'这家公司很有名。',pinyin:'Zhè jiā gōngsī hěn yǒumíng。',en:'This company is very famous.'}]);
W('故事','gùshi','story','nouns',[{cn:'给我讲一个故事吧。',pinyin:'Gěi wǒ jiǎng yī gè gùshi ba。',en:'Tell me a story.'},{cn:'这个故事很感人。',pinyin:'Zhège gùshi hěn gǎnrén。',en:'This story is very touching.'}]);
W('顾客','gùkè','customer','nouns',[{cn:'服务员对顾客很热情。',pinyin:'Fúwùyuán duì gùkè hěn rèqíng。',en:'The waiter is very warm to customers.'},{cn:'顾客就是上帝。',pinyin:'Gùkè jiùshì shàngdì。',en:'The customer is god.'}]);
W('关键','guānjiàn','key/crucial point','nouns',[{cn:'成功的关键是坚持。',pinyin:'Chénggōng de guānjiàn shì jiānchí。',en:'The key to success is persistence.'},{cn:'问题的关键不在于钱。',pinyin:'Wèntí de guānjiàn bù zàiyú qián。',en:'The key to the problem is not about money.'}]);
W('广播','guǎngbō','broadcast','nouns',[{cn:'我在听广播。',pinyin:'Wǒ zài tīng guǎngbō。',en:'I\'m listening to the broadcast.'},{cn:'广播里说今天会下雨。',pinyin:'Guǎngbō lǐ shuō jīntiān huì xià yǔ。',en:'The broadcast said it will rain today.'}]);
W('广告','guǎnggào','advertisement','nouns',[{cn:'这个广告很有意思。',pinyin:'Zhège guǎnggào hěn yǒu yìsi。',en:'This advertisement is very interesting.'},{cn:'我在网上看到了这个广告。',pinyin:'Wǒ zài wǎng shàng kàn dào le zhège guǎnggào。',en:'I saw this advertisement online.'}]);
W('规定','guīdìng','regulation','nouns',[{cn:'学校有严格的规定。',pinyin:'Xuéxiào yǒu yángé de guīdìng。',en:'The school has strict regulations.'},{cn:'请遵守公司的规定。',pinyin:'Qǐng zūnshǒu gōngsī de guīdìng。',en:'Please follow the company regulations.'}]);
W('国家','guójiā','country','nouns',[{cn:'中国是一个大国。',pinyin:'Zhōngguó shì yī gè dà guó。',en:'China is a big country.'},{cn:'你去过哪些国家？',pinyin:'Nǐ qù guò nǎxiē guójiā?',en:'Which countries have you been to?'}]);
W('果汁','guǒzhī','juice','nouns',[{cn:'我想喝一杯果汁。',pinyin:'Wǒ xiǎng hē yī bēi guǒzhī。',en:'I want to drink a glass of juice.'},{cn:'这种果汁很好喝。',pinyin:'Zhè zhǒng guǒzhī hěn hǎohē。',en:'This kind of juice is delicious.'}]);
W('过程','guòchéng','process','nouns',[{cn:'学习的过程很重要。',pinyin:'Xuéxí de guòchéng hěn zhòngyào。',en:'The learning process is very important.'},{cn:'请描述一下这个过程。',pinyin:'Qǐng miáoshù yīxià zhège guòchéng。',en:'Please describe this process.'}]);
W('海洋','hǎiyáng','ocean','nouns',[{cn:'海洋里有很多生物。',pinyin:'Hǎiyáng lǐ yǒu hěn duō shēngwù。',en:'There are many creatures in the ocean.'},{cn:'他喜欢研究海洋。',pinyin:'Tā xǐhuān yánjiū hǎiyáng。',en:'He likes to study the ocean.'}]);
W('会议','huìyì','meeting','nouns',[{cn:'下午有一个重要会议。',pinyin:'Xiàwǔ yǒu yī gè zhòngyào huìyì。',en:'There is an important meeting this afternoon.'},{cn:'会议推迟了。',pinyin:'Huìyì tuīchí le。',en:'The meeting was postponed.'}]);
W('活动','huódòng','activity','nouns',[{cn:'学校组织了很多活动。',pinyin:'Xuéxiào zǔzhī le hěn duō huódòng。',en:'The school organized many activities.'},{cn:'你喜欢什么课外活动？',pinyin:'Nǐ xǐhuān shénme kèwài huódòng?',en:'What extracurricular activities do you like?'}]);
W('基础','jīchǔ','foundation','nouns',[{cn:'打好基础很重要。',pinyin:'Dǎ hǎo jīchǔ hěn zhòngyào。',en:'Building a good foundation is very important.'},{cn:'他的中文基础很好。',pinyin:'Tā de Zhōngwén jīchǔ hěn hǎo。',en:'His Chinese foundation is very good.'}]);
W('计划','jìhuà','plan','nouns',[{cn:'你有什么计划？',pinyin:'Nǐ yǒu shénme jìhuà?',en:'What plans do you have?'},{cn:'一切按计划进行。',pinyin:'Yīqiè àn jìhuà jìnxíng。',en:'Everything is going according to plan.'}]);
W('技术','jìshù','technology','nouns',[{cn:'科技发展得很快。',pinyin:'Kējì fāzhǎn de hěn kuài。',en:'Technology develops very fast.'},{cn:'他学习计算机技术。',pinyin:'Tā xuéxí jìsuànjī jìshù。',en:'He studies computer technology.'}]);
W('季节','jìjié','season','nouns',[{cn:'你最喜欢哪个季节？',pinyin:'Nǐ zuì xǐhuān nǎ gè jìjié?',en:'Which season do you like most?'},{cn:'秋天是最美的季节。',pinyin:'Qiūtiān shì zuì měi de jìjié。',en:'Autumn is the most beautiful season.'}]);
W('价格','jiàgé','price','nouns',[{cn:'这个东西的价格是多少？',pinyin:'Zhège dōngxi de jiàgé shì duōshǎo?',en:'What is the price of this item?'},{cn:'价格太贵了！',pinyin:'Jiàgé tài guì le!',en:'The price is too expensive!'}]);
W('假期','jiàqī','vacation','nouns',[{cn:'假期你打算做什么？',pinyin:'Jiàqī nǐ dǎsuàn zuò shénme?',en:'What do you plan to do during the vacation?'},{cn:'我的假期过得很开心。',pinyin:'Wǒ de jiàqī guò de hěn kāixīn。',en:'I had a very happy vacation.'}]);
W('交通','jiāotōng','traffic','nouns',[{cn:'北京的交通很堵。',pinyin:'Běijīng de jiāotōng hěn dǔ。',en:"Beijing's traffic is very congested."},{cn:'这里的交通很方便。',pinyin:'Zhèlǐ de jiāotōng hěn fāngbiàn。',en:'The transportation here is very convenient.'}]);
W('教授','jiàoshòu','professor','nouns',[{cn:'李教授是我们的老师。',pinyin:'Lǐ jiàoshòu shì wǒmen de lǎoshī。',en:'Professor Li is our teacher.'},{cn:'他是一位著名的教授。',pinyin:'Tā shì yī wèi zhùmíng de jiàoshòu。',en:'He is a famous professor.'}]);
W('节目','jiémù','program','nouns',[{cn:'这个电视节目很好看。',pinyin:'Zhège diànshì jiémù hěn hǎokàn。',en:'This TV program is very good.'},{cn:'今晚有什么节目？',pinyin:'Jīnwǎn yǒu shénme jiémù?',en:'What program is on tonight?'}]);
W('节日','jiérì','festival','nouns',[{cn:'春节是中国最重要的节日。',pinyin:'Chūnjié shì Zhōngguó zuì zhòngyào de jiérì。',en:'Spring Festival is the most important festival in China.'},{cn:'你最喜欢哪个节日？',pinyin:'Nǐ zuì xǐhuān nǎ gè jiérì?',en:'Which festival do you like most?'}]);
W('结果','jiéguǒ','result','nouns',[{cn:'考试结果出来了。',pinyin:'Kǎoshì jiéguǒ chūlái le。',en:'The exam results are out.'},{cn:'结果证明他是对的。',pinyin:'Jiéguǒ zhèngmíng tā shì duì de。',en:'The results proved he was right.'}]);
W('经济','jīngjì','economy','nouns',[{cn:'国家的经济发展很快。',pinyin:'Guójiā de jīngjì fāzhǎn hěn kuài。',en:"The country's economy is developing quickly."},{cn:'他对经济很感兴趣。',pinyin:'Tā duì jīngjì hěn gǎn xìngqù。',en:'He is very interested in economics.'}]);
W('精神','jīngshén','spirit','nouns',[{cn:'他的精神很好。',pinyin:'Tā de jīngshén hěn hǎo。',en:'His spirit is very good.'},{cn:'我们要学习这种精神。',pinyin:'Wǒmen yào xuéxí zhè zhǒng jīngshén。',en:'We should learn from this spirit.'}]);
W('句子','jùzi','sentence','nouns',[{cn:'请用这个词造一个句子。',pinyin:'Qǐng yòng zhège cí zào yī gè jùzi。',en:'Please make a sentence with this word.'},{cn:'这个句子太长了。',pinyin:'Zhège jùzi tài cháng le。',en:'This sentence is too long.'}]);
W('咖啡','kāfēi','coffee','nouns',[{cn:'我每天早上喝一杯咖啡。',pinyin:'Wǒ měitiān zǎoshang hē yī bēi kāfēi。',en:'I drink a cup of coffee every morning.'},{cn:'这家店的咖啡很好喝。',pinyin:'Zhè jiā diàn de kāfēi hěn hǎohē。',en:"This shop's coffee is delicious."}]);
W('科学','kēxué','science','nouns',[{cn:'科学改变了我们的生活。',pinyin:'Kēxué gǎibiàn le wǒmen de shēnghuó。',en:'Science has changed our lives.'},{cn:'他对科学很感兴趣。',pinyin:'Tā duì kēxué hěn gǎn xìngqù。',en:'He is very interested in science.'}]);
W('世纪','shìjì','century','nouns',[{cn:'这座建筑有五个世纪的历史。',pinyin:'Zhè zuò jiànzhù yǒu wǔ gè shìjì de lìshǐ。',en:'This building has five centuries of history.'},{cn:'二十一世纪是信息时代。',pinyin:'Èrshíyī shìjì shì xìnxī shídài。',en:'The 21st century is the information age.'}]);
W('年代','niándài','era/decade','nouns',[{cn:'那是九十年代的事了。',pinyin:'Nà shì jiǔshí niándài de shì le。',en:'That was something from the 90s.'},{cn:'这个年代变化太快了。',pinyin:'Zhège niándài biànhuà tài kuài le。',en:'Changes in this era are too fast.'}]);
W('环境','huánjìng','environment','nouns',[{cn:'我们要保护环境。',pinyin:'Wǒmen yào bǎohù huánjìng。',en:'We must protect the environment.'},{cn:'这里的工作环境很好。',pinyin:'Zhèlǐ de gōngzuò huánjìng hěn hǎo。',en:'The work environment here is very good.'}]);
W('经验','jīngyàn','experience','nouns',[{cn:'他有丰富的经验。',pinyin:'Tā yǒu fēngfù de jīngyàn。',en:'He has rich experience.'},{cn:'这次旅行是一次难忘的经验。',pinyin:'Zhè cì lǚxíng shì yī cì nánwàng de jīngyàn。',en:'This trip was an unforgettable experience.'}]);
W('情况','qíngkuàng','situation','nouns',[{cn:'现在的情况怎么样了？',pinyin:'Xiànzài de qíngkuàng zěnmeyàng le?',en:'How is the situation now?'},{cn:'根据实际情况来决定。',pinyin:'Gēnjù shíjì qíngkuàng lái juédìng。',en:'Decide based on the actual situation.'}]);


// ===== ADJECTIVES =====
W('安全','ānquán','safe','adjectives',[{cn:'这里很安全。',pinyin:'Zhèlǐ hěn ānquán。',en:'It is very safe here.'},{cn:'注意安全！',pinyin:'Zhùyì ānquán!',en:'Pay attention to safety!'}]);
W('安静','ānjìng','quiet','adjectives',[{cn:'图书馆里很安静。',pinyin:'Túshūguǎn lǐ hěn ānjìng。',en:'The library is very quiet.'},{cn:'请安静一点。',pinyin:'Qǐng ānjìng yīdiǎn。',en:'Please be a little quieter.'}]);
W('方便','fāngbiàn','convenient','adjectives',[{cn:'这里交通很方便。',pinyin:'Zhèlǐ jiāotōng hěn fāngbiàn。',en:'The transportation here is very convenient.'},{cn:'什么时候方便？',pinyin:'Shénme shíhou fāngbiàn?',en:'When is it convenient?'}]);
W('丰富','fēngfù','rich/abundant','adjectives',[{cn:'中国的文化很丰富。',pinyin:'Zhōngguó de wénhuà hěn fēngfù。',en:"China's culture is very rich."},{cn:'他有丰富的经验。',pinyin:'Tā yǒu fēngfù de jīngyàn。',en:'He has rich experience.'}]);
W('复杂','fùzá','complex','adjectives',[{cn:'这个问题很复杂。',pinyin:'Zhège wèntí hěn fùzá。',en:'This problem is very complex.'},{cn:'情况变得复杂了。',pinyin:'Qíngkuàng biàn de fùzá le。',en:'The situation has become complex.'}]);
W('合适','héshì','suitable','adjectives',[{cn:'这件衣服很合适。',pinyin:'Zhè jiàn yīfu hěn héshì。',en:'This piece of clothing fits well.'},{cn:'你找到合适的人了吗？',pinyin:'Nǐ zhǎodào héshì de rén le ma?',en:'Have you found a suitable person?'}]);
W('基本','jīběn','basic','adjectives',[{cn:'这是基本的知识。',pinyin:'Zhè shì jīběn de zhīshi。',en:'This is basic knowledge.'},{cn:'我基本同意。',pinyin:'Wǒ jīběn tóngyì。',en:'I basically agree.'}]);
W('激动','jīdòng','excited','adjectives',[{cn:'听到这个消息我很激动。',pinyin:'Tīngdào zhège xiāoxi wǒ hěn jīdòng。',en:'I was very excited to hear this news.'},{cn:'别太激动了。',pinyin:'Bié tài jīdòng le。',en:"Don't get too excited."}]);
W('紧张','jǐnzhāng','nervous','adjectives',[{cn:'考试前我很紧张。',pinyin:'Kǎoshì qián wǒ hěn jǐnzhāng。',en:'I was very nervous before the exam.'},{cn:'时间很紧张。',pinyin:'Shíjiān hěn jǐnzhāng。',en:'Time is very tight.'}]);
W('精彩','jīngcǎi','wonderful','adjectives',[{cn:'演出非常精彩。',pinyin:'Yǎnchū fēicháng jīngcǎi。',en:'The performance was wonderful.'},{cn:'你的演讲很精彩。',pinyin:'Nǐ de yǎnjiǎng hěn jīngcǎi。',en:'Your speech was wonderful.'}]);
W('开心','kāixīn','happy','adjectives',[{cn:'今天我很开心。',pinyin:'Jīntiān wǒ hěn kāixīn。',en:'I am very happy today.'},{cn:'祝你生日快乐，天天开心！',pinyin:'Zhù nǐ shēngrì kuàilè, tiāntiān kāixīn!',en:'Happy birthday, may you be happy every day!'}]);
W('可爱',"kě'ài",'cute','adjectives',[{cn:'这只小猫真可爱。',pinyin:"Zhè zhī xiǎo māo zhēn kě'ài。",en:'This little cat is so cute.'},{cn:'你的孩子很可爱。',pinyin:"Nǐ de háizi hěn kě'ài。",en:'Your child is very cute.'}]);
W('可怕','kěpà','terrible','adjectives',[{cn:'那部电影很可怕。',pinyin:'Nà bù diànyǐng hěn kěpà。',en:'That movie was terrifying.'},{cn:'发生了可怕的事情。',pinyin:'Fāshēng le kěpà de shìqing。',en:'Something terrible happened.'}]);
W('困难','kùnnán','difficult','adjectives',[{cn:'这个工作很困难。',pinyin:'Zhège gōngzuò hěn kùnnán。',en:'This work is very difficult.'},{cn:'我们遇到了很多困难。',pinyin:'Wǒmen yùdào le hěn duō kùnnán。',en:'We encountered many difficulties.'}]);
W('厉害','lìhai','awesome/formidable','adjectives',[{cn:'他太厉害了！',pinyin:'Tā tài lìhai le!',en:'He is amazing!'},{cn:'这药很厉害。',pinyin:'Zhè yào hěn lìhai。',en:'This medicine is very strong.'}]);



W('难过','nánguò','sad','adjectives',[{cn:'听到这个消息我很难过。',pinyin:'Tīngdào zhège xiāoxi wǒ hěn nánguò。',en:'I was very sad to hear this news.'},{cn:'别难过了，一切都会好的。',pinyin:'Bié nánguò le, yīqiè dōu huì hǎo de。',en:"Don't be sad; everything will be fine."}]);
W('难受','nánshòu','uncomfortable','adjectives',[{cn:'我今天身体很难受。',pinyin:'Wǒ jīntiān shēntǐ hěn nánshòu。',en:'I feel very uncomfortable today.'},{cn:'这种感觉真难受。',pinyin:'Zhè zhǒng gǎnjué zhēn nánshòu。',en:'This feeling is really uncomfortable.'}]);
W('破','pò','broken','adjectives',[{cn:'我的手机屏幕破了。',pinyin:'Wǒ de shǒujī píngmù pò le。',en:'My phone screen is broken.'},{cn:'这件衣服破了。',pinyin:'Zhè jiàn yīfu pò le。',en:'This piece of clothing is torn.'}]);
W('普遍','pǔbiàn','common','adjectives',[{cn:'这是一个普遍现象。',pinyin:'Zhè shì yī gè pǔbiàn xiànxiàng。',en:'This is a common phenomenon.'},{cn:'手机已经很普遍了。',pinyin:'Shǒujī yǐjīng hěn pǔbiàn le。',en:'Mobile phones are already very common.'}]);
W('热情','rèqíng','enthusiastic','adjectives',[{cn:'这里的人很热情。',pinyin:'Zhèlǐ de rén hěn rèqíng。',en:'The people here are very warm.'},{cn:'谢谢你的热情招待。',pinyin:'Xièxiè nǐ de rèqíng zhāodài。',en:'Thank you for your warm hospitality.'}]);
W('容易','róngyì','easy','adjectives',[{cn:'这个问题很容易。',pinyin:'Zhège wèntí hěn róngyì。',en:'This question is very easy.'},{cn:'学中文不容易。',pinyin:'Xué Zhōngwén bù róngyì。',en:'Learning Chinese is not easy.'}]);
W('伤心','shāngxīn','sad','adjectives',[{cn:'她伤心得哭了。',pinyin:'Tā shāngxīn de kū le。',en:'She was so sad that she cried.'},{cn:'别为这件事伤心了。',pinyin:'Bié wèi zhè jiàn shì shāngxīn le。',en:"Don't be sad about this matter anymore."}]);
W('生气','shēngqì','angry','adjectives',[{cn:'他为什么生气？',pinyin:'Tā wèishénme shēngqì?',en:'Why is he angry?'},{cn:'别生气了，我道歉。',pinyin:'Bié shēngqì le, wǒ dàoqiàn。',en:"Don't be angry; I apologize."}]);
W('失望','shīwàng','disappointed','adjectives',[{cn:'我对这个结果很失望。',pinyin:'Wǒ duì zhège jiéguǒ hěn shīwàng。',en:'I am very disappointed with this result.'},{cn:'别让我失望。',pinyin:'Bié ràng wǒ shīwàng。',en:"Don't disappoint me."}]);
W('舒服','shūfu','comfortable','adjectives',[{cn:'这张床很舒服。',pinyin:'Zhè zhāng chuáng hěn shūfu。',en:'This bed is very comfortable.'},{cn:'我觉得不舒服。',pinyin:'Wǒ juéde bù shūfu。',en:'I feel uncomfortable.'}]);
W('顺利','shùnlì','smooth','adjectives',[{cn:'一切都很顺利。',pinyin:'Yīqiè dōu hěn shùnlì。',en:'Everything is going smoothly.'},{cn:'祝你工作顺利！',pinyin:'Zhù nǐ gōngzuò shùnlì!',en:'Wishing you smooth work!'}]);
W('讨厌','tǎoyàn','annoying','adjectives',[{cn:'我讨厌下雨天。',pinyin:'Wǒ tǎoyàn xià yǔ tiān。',en:'I hate rainy days.'},{cn:'他真让人讨厌。',pinyin:'Tā zhēn ràng rén tǎoyàn。',en:'He is really annoying.'}]);
W('伟大','wěidà','great','adjectives',[{cn:'他是一个伟大的人。',pinyin:'Tā shì yī gè wěidà de rén。',en:'He is a great person.'},{cn:'中国有伟大的历史。',pinyin:'Zhōngguó yǒu wěidà de lìshǐ。',en:'China has a great history.'}]);
W('无聊','wúliáo','boring','adjectives',[{cn:'这个电影很无聊。',pinyin:'Zhège diànyǐng hěn wúliáo。',en:'This movie is very boring.'},{cn:'一个人在家好无聊。',pinyin:'Yī gè rén zài jiā hǎo wúliáo。',en:'Being home alone is so boring.'}]);
W('幸福','xìngfú','happy/blessed','adjectives',[{cn:'他们一家人很幸福。',pinyin:'Tāmen yī jiā rén hěn xìngfú。',en:'Their family is very happy.'},{cn:'祝你幸福！',pinyin:'Zhù nǐ xìngfú!',en:'I wish you happiness!'}]);
W('严格','yángé','strict','adjectives',[{cn:'我们的老师很严格。',pinyin:'Wǒmen de lǎoshī hěn yángé。',en:'Our teacher is very strict.'},{cn:'公司有严格的规定。',pinyin:'Gōngsī yǒu yángé de guīdìng。',en:'The company has strict regulations.'}]);
W('严重','yánzhòng','serious','adjectives',[{cn:'这个问题很严重。',pinyin:'Zhège wèntí hěn yánzhòng。',en:'This problem is very serious.'},{cn:'他的病不严重。',pinyin:'Tā de bìng bù yánzhòng。',en:'His illness is not serious.'}]);
W('勇敢','yǒnggǎn','brave','adjectives',[{cn:'你真勇敢！',pinyin:'Nǐ zhēn yǒnggǎn!',en:'You are so brave!'},{cn:'勇敢面对困难。',pinyin:'Yǒnggǎn miànduì kùnnán。',en:'Face difficulties bravely.'}]);
W('有名','yǒumíng','famous','adjectives',[{cn:'他是很有名的演员。',pinyin:'Tā shì hěn yǒumíng de yǎnyuán。',en:'He is a very famous actor.'},{cn:'这个地方很有名。',pinyin:'Zhège dìfang hěn yǒumíng。',en:'This place is very famous.'}]);
W('有趣','yǒuqù','interesting','adjectives',[{cn:'这本书很有趣。',pinyin:'Zhè běn shū hěn yǒuqù。',en:'This book is very interesting.'},{cn:'他是一个有趣的人。',pinyin:'Tā shì yī gè yǒuqù de rén。',en:'He is an interesting person.'}]);


// ===== MORE ADJECTIVES =====
W('着急','zháojí','anxious','adjectives',[{cn:'别着急，慢慢来。',pinyin:'Bié zháojí, mànman lái。',en:"Don't be anxious; take it slowly."},{cn:'他在着急地等人。',pinyin:'Tā zài zháojí de děng rén。',en:'He is anxiously waiting for someone.'}]);
W('真正','zhēnzhèng','real/true','adjectives',[{cn:'他是我真正的朋友。',pinyin:'Tā shì wǒ zhēnzhèng de péngyou。',en:'He is my true friend.'},{cn:'这才是真正的问题。',pinyin:'Zhè cái shì zhēnzhèng de wèntí。',en:'This is the real problem.'}]);
W('正常','zhèngcháng','normal','adjectives',[{cn:'一切都很正常。',pinyin:'Yīqiè dōu hěn zhèngcháng。',en:'Everything is normal.'},{cn:'这是正常现象。',pinyin:'Zhè shì zhèngcháng xiànxiàng。',en:'This is a normal phenomenon.'}]);
W('正好','zhènghǎo','just right','adjectives',[{cn:'你来得正好。',pinyin:'Nǐ lái de zhènghǎo。',en:'You came at just the right time.'},{cn:'这件衣服正好合适。',pinyin:'Zhè jiàn yīfu zhènghǎo héshì。',en:'This piece of clothing fits just right.'}]);
W('重要','zhòngyào','important','adjectives',[{cn:'这是一个重要的决定。',pinyin:'Zhè shì yī gè zhòngyào de juédìng。',en:'This is an important decision.'},{cn:'健康最重要。',pinyin:'Jiànkāng zuì zhòngyào。',en:'Health is most important.'}]);
W('主动','zhǔdòng','active/initiative','adjectives',[{cn:'你应该主动一点。',pinyin:'Nǐ yīnggāi zhǔdòng yīdiǎn。',en:'You should be more proactive.'},{cn:'他主动帮助了我。',pinyin:'Tā zhǔdòng bāngzhù le wǒ。',en:'He took the initiative to help me.'}]);
W('主要','zhǔyào','main','adjectives',[{cn:'主要的问题是什么？',pinyin:'Zhǔyào de wèntí shì shénme?',en:'What is the main problem?'},{cn:'他主要负责销售。',pinyin:'Tā zhǔyào fùzé xiāoshòu。',en:'He is mainly responsible for sales.'}]);
W('仔细','zǐxì','careful','adjectives',[{cn:'请仔细检查。',pinyin:'Qǐng zǐxì jiǎnchá。',en:'Please check carefully.'},{cn:'他做事很仔细。',pinyin:'Tā zuòshì hěn zǐxì。',en:'He does things very carefully.'}]);
W('自然','zìrán','natural','adjectives',[{cn:'大自然很美。',pinyin:'Dà zìrán hěn měi。',en:'Nature is very beautiful.'},{cn:'她笑得很自然。',pinyin:'Tā xiào de hěn zìrán。',en:'She smiles very naturally.'}]);
W('自信','zìxìn','confident','adjectives',[{cn:'他对自己很自信。',pinyin:'Tā duì zìjǐ hěn zìxìn。',en:'He is very confident in himself.'},{cn:'要有自信！',pinyin:'Yào yǒu zìxìn!',en:'Be confident!'}]);
W('自由','zìyóu','free','adjectives',[{cn:'每个人都有自由的权利。',pinyin:'Měi gè rén dōu yǒu zìyóu de quánlì。',en:'Everyone has the right to freedom.'},{cn:'我喜欢自由的生活。',pinyin:'Wǒ xǐhuān zìyóu de shēnghuó。',en:'I like a free life.'}]);

// ===== ADVERBS & FUNCTION WORDS =====
W('时期','shíqī','period','adverbs',[{cn:'这是一个特殊时期。',pinyin:'Zhè shì yī gè tèshū shíqī。',en:'This is a special period.'},{cn:'在那个时期，生活很困难。',pinyin:'Zài nà gè shíqī, shēnghuó hěn kùnnán。',en:'During that period, life was very difficult.'}]);
W('阶段','jiēduàn','stage','adverbs',[{cn:'我们进入了新阶段。',pinyin:'Wǒmen jìnrù le xīn jiēduàn。',en:'We have entered a new stage.'},{cn:'每个阶段都有困难。',pinyin:'Měi gè jiēduàn dōu yǒu kùnnán。',en:'Every stage has difficulties.'}]);
W('将来','jiānglái','future','adverbs',[{cn:'将来我想当医生。',pinyin:'Jiānglái wǒ xiǎng dāng yīshēng。',en:'In the future, I want to be a doctor.'},{cn:'将来的事情谁也说不准。',pinyin:'Jiānglái de shìqing shéi yě shuō bù zhǔn。',en:'No one can predict future events.'}]);
W('过去','guòqù','past','adverbs',[{cn:'过去的事情就让它过去吧。',pinyin:'Guòqù de shìqing jiù ràng tā guòqù ba。',en:"Let the past stay in the past."},{cn:'我过去住在北京。',pinyin:'Wǒ guòqù zhù zài Běijīng。',en:'I used to live in Beijing.'}]);
W('目前','mùqián','currently','adverbs',[{cn:'目前我还没有工作。',pinyin:'Mùqián wǒ hái méiyǒu gōngzuò。',en:'Currently I still have no job.'},{cn:'目前的情况很好。',pinyin:'Mùqián de qíngkuàng hěn hǎo。',en:'The current situation is good.'}]);
W('以前','yǐqián','before','adverbs',[{cn:'我以前没见过他。',pinyin:'Wǒ yǐqián méi jiàn guò tā。',en:'I had never seen him before.'},{cn:'以前这里是一家商店。',pinyin:'Yǐqián zhèlǐ shì yī jiā shāngdiàn。',en:'This used to be a shop before.'}]);



// ===== MORE ADVERBS & FUNCTION WORDS =====
W('以后','yǐhòu','after/later','adverbs',[{cn:'以后我会注意的。',pinyin:'Yǐhòu wǒ huì zhùyì de。',en:'I will pay attention in the future.'},{cn:'从那以后我们成了好朋友。',pinyin:'Cóng nà yǐhòu wǒmen chéng le hǎo péngyou。',en:'After that we became good friends.'}]);
W('后来','hòulái','afterwards','adverbs',[{cn:'后来他去了上海。',pinyin:'Hòulái tā qù le Shànghǎi。',en:'Afterwards he went to Shanghai.'},{cn:'后来我才明白。',pinyin:'Hòulái wǒ cái míngbai。',en:'I only understood afterwards.'}]);
W('最近','zuìjìn','recently','adverbs',[{cn:'最近我很忙。',pinyin:'Zuìjìn wǒ hěn máng。',en:'I have been very busy recently.'},{cn:'你最近在看什么书？',pinyin:'Nǐ zuìjìn zài kàn shénme shū?',en:'What book have you been reading recently?'}]);
W('刚才','gāngcái','just now','adverbs',[{cn:'他刚才还在这里。',pinyin:'Tā gāngcái hái zài zhèlǐ。',en:'He was just here a moment ago.'},{cn:'你刚才说什么？',pinyin:'Nǐ gāngcái shuō shénme?',en:'What did you just say?'}]);
W('暂时','zànshí','temporarily','adverbs',[{cn:'暂时没有问题了。',pinyin:'Zànshí méiyǒu wèntí le。',en:'There are no problems for now.'},{cn:'我暂时住在朋友家。',pinyin:'Wǒ zànshí zhù zài péngyou jiā。',en:"I am temporarily staying at a friend's place."}]);
W('永远','yǒngyuǎn','forever','adverbs',[{cn:'我永远不会忘记你。',pinyin:'Wǒ yǒngyuǎn bù huì wàngjì nǐ。',en:'I will never forget you.'},{cn:'友谊永远是最重要的。',pinyin:'Yǒuyì yǒngyuǎn shì zuì zhòngyào de。',en:'Friendship is always the most important.'}]);
W('及时','jíshí','timely','adverbs',[{cn:'你来得真及时。',pinyin:'Nǐ lái de zhēn jíshí。',en:'You came just in time.'},{cn:'问题得到了及时解决。',pinyin:'Wèntí dédào le jíshí jiějué。',en:'The problem was solved in a timely manner.'}]);
W('按时','ànshí','on time','adverbs',[{cn:'请按时完成作业。',pinyin:'Qǐng ànshí wánchéng zuòyè。',en:'Please complete your homework on time.'},{cn:'火车按时到达。',pinyin:'Huǒchē ànshí dàodá。',en:'The train arrived on time.'}]);
W('提前','tíqián','in advance','adverbs',[{cn:'请提前告诉我。',pinyin:'Qǐng tíqián gàosu wǒ。',en:'Please tell me in advance.'},{cn:'我们提前完成了任务。',pinyin:'Wǒmen tíqián wánchéng le rènwù。',en:'We completed the task ahead of schedule.'}]);
W('终于','zhōngyú','finally','adverbs',[{cn:'我终于到了。',pinyin:'Wǒ zhōngyú dào le。',en:'I finally arrived.'},{cn:'等了很久，他终于来了。',pinyin:'Děng le hěn jiǔ, tā zhōngyú lái le。',en:'After waiting a long time, he finally came.'}]);
W('从来','cónglái','always (with negative)','adverbs',[{cn:'我从来没去过日本。',pinyin:'Wǒ cónglái méi qù guò Rìběn。',en:'I have never been to Japan.'},{cn:'他从来不说谎。',pinyin:'Tā cónglái bù shuōhuǎng。',en:'He never lies.'}]);
W('经常','jīngcháng','often','adverbs',[{cn:'我经常去图书馆。',pinyin:'Wǒ jīngcháng qù túshūguǎn。',en:'I often go to the library.'},{cn:'他经常出差。',pinyin:'Tā jīngcháng chūchāi。',en:'He often goes on business trips.'}]);
W('通常','tōngcháng','usually','adverbs',[{cn:'我通常七点起床。',pinyin:'Wǒ tōngcháng qī diǎn qǐchuáng。',en:'I usually get up at seven.'},{cn:'周末通常比较轻松。',pinyin:'Zhōumò tōngcháng bǐjiào qīngsōng。',en:'Weekends are usually more relaxed.'}]);
W('往往','wǎngwǎng','often/tend to','adverbs',[{cn:'成功往往需要时间。',pinyin:'Chénggōng wǎngwǎng xūyào shíjiān。',en:'Success often requires time.'},{cn:'他往往工作到很晚。',pinyin:'Tā wǎngwǎng gōngzuò dào hěn wǎn。',en:'He tends to work until very late.'}]);
W('一直','yīzhí','always/continuously','adverbs',[{cn:'雨一直下。',pinyin:'Yǔ yīzhí xià。',en:'The rain keeps falling.'},{cn:'我一直想学中文。',pinyin:'Wǒ yīzhí xiǎng xué Zhōngwén。',en:'I have always wanted to learn Chinese.'}]);



// ===== MORE FUNCTION WORDS =====
W('一会儿','yīhuìr','a while','adverbs',[{cn:'请等一会儿。',pinyin:'Qǐng děng yīhuìr。',en:'Please wait a moment.'},{cn:'我一会儿就回来。',pinyin:'Wǒ yīhuìr jiù huílái。',en:"I'll be back in a moment."}]);
W('一下子','yīxiàzi','suddenly','adverbs',[{cn:'天气一下子变冷了。',pinyin:'Tiānqì yīxiàzi biàn lěng le。',en:'The weather suddenly turned cold.'},{cn:'我一下子想起来了。',pinyin:'Wǒ yīxiàzi xiǎng qǐlái le。',en:'I suddenly remembered.'}]);
W('同时','tóngshí','at the same time','adverbs',[{cn:'我们可以同时进行。',pinyin:'Wǒmen kěyǐ tóngshí jìnxíng。',en:'We can proceed at the same time.'},{cn:'他同时做着两份工作。',pinyin:'Tā tóngshí zuò zhe liǎng fèn gōngzuò。',en:'He is doing two jobs at the same time.'}]);
W('随时','suíshí','anytime','adverbs',[{cn:'有问题随时找我。',pinyin:'Yǒu wèntí suíshí zhǎo wǒ。',en:'If you have problems, find me anytime.'},{cn:'随时欢迎你来。',pinyin:'Suíshí huānyíng nǐ lái。',en:'You are welcome anytime.'}]);
W('不断','bùduàn','continuously','adverbs',[{cn:'技术在不断进步。',pinyin:'Jìshù zài bùduàn jìnbù。',en:'Technology is continuously advancing.'},{cn:'他不断地学习新知识。',pinyin:'Tā bùduàn de xuéxí xīn zhīshi。',en:'He continuously learns new knowledge.'}]);
W('逐渐','zhújiàn','gradually','adverbs',[{cn:'天气逐渐变暖。',pinyin:'Tiānqì zhújiàn biàn nuǎn。',en:'The weather is gradually warming up.'},{cn:'我逐渐适应了新环境。',pinyin:'Wǒ zhújiàn shìyìng le xīn huánjìng。',en:'I gradually adapted to the new environment.'}]);
W('立刻','lìkè','immediately','adverbs',[{cn:'请立刻出发。',pinyin:'Qǐng lìkè chūfā。',en:'Please depart immediately.'},{cn:'他听到消息立刻赶来了。',pinyin:'Tā tīngdào xiāoxi lìkè gǎn lái le。',en:'He came immediately upon hearing the news.'}]);
W('马上','mǎshàng','right away','adverbs',[{cn:'我马上就到。',pinyin:'Wǒ mǎshàng jiù dào。',en:"I'll arrive right away."},{cn:'会议马上开始了。',pinyin:'Huìyì mǎshàng kāishǐ le。',en:'The meeting is starting right away.'}]);
W('已经','yǐjīng','already','adverbs',[{cn:'我已经吃过饭了。',pinyin:'Wǒ yǐjīng chī guò fàn le。',en:'I have already eaten.'},{cn:'问题已经解决了。',pinyin:'Wèntí yǐjīng jiějué le。',en:'The problem has already been solved.'}]);
W('才','cái','only then','adverbs',[{cn:'他十点才到。',pinyin:'Tā shí diǎn cái dào。',en:'He only arrived at ten.'},{cn:'我昨天才知道。',pinyin:'Wǒ zuótiān cái zhīdào。',en:'I only found out yesterday.'}]);
W('就','jiù','then/just','adverbs',[{cn:'我马上就来。',pinyin:'Wǒ mǎshàng jiù lái。',en:"I'll come right away."},{cn:'这就是我想要的。',pinyin:'Zhè jiùshì wǒ xiǎng yào de。',en:'This is exactly what I wanted.'}]);
W('还','hái','still','adverbs',[{cn:'他还在工作。',pinyin:'Tā hái zài gōngzuò。',en:'He is still working.'},{cn:'你还有什么问题吗？',pinyin:'Nǐ hái yǒu shénme wèntí ma?',en:'Do you still have any questions?'}]);
W('再','zài','again','adverbs',[{cn:'请再说一遍。',pinyin:'Qǐng zài shuō yī biàn。',en:'Please say it again.'},{cn:'我们下次再见。',pinyin:'Wǒmen xià cì zài jiàn。',en:'See you again next time.'}]);
W('又','yòu','again','adverbs',[{cn:'他又迟到了。',pinyin:'Tā yòu chídào le。',en:'He is late again.'},{cn:'今天又下雨了。',pinyin:'Jīntiān yòu xià yǔ le。',en:'It is raining again today.'}]);
W('也','yě','also','adverbs',[{cn:'我也想去。',pinyin:'Wǒ yě xiǎng qù。',en:'I also want to go.'},{cn:'他也是中国人。',pinyin:'Tā yě shì Zhōngguó rén。',en:'He is also Chinese.'}]);



// ===== WORKPLACE TERMS =====
W('报告','bàogào','report','workplace',[{cn:'请写一份报告。',pinyin:'Qǐng xiě yī fèn bàogào。',en:'Please write a report.'},{cn:'他做了精彩的报告。',pinyin:'Tā zuò le jīngcǎi de bàogào。',en:'He gave a wonderful report.'}]);
W('项目','xiàngmù','project','workplace',[{cn:'这个项目很重要。',pinyin:'Zhège xiàngmù hěn zhòngyào。',en:'This project is very important.'},{cn:'我们要按时完成项目。',pinyin:'Wǒmen yào ànshí wánchéng xiàngmù。',en:'We need to complete the project on time.'}]);
W('任务','rènwù','task','workplace',[{cn:'今天的任务完成了吗？',pinyin:'Jīntiān de rènwù wánchéng le ma?',en:'Have you completed today's tasks?'},{cn:'这是一个艰巨的任务。',pinyin:'Zhè shì yī gè jiānjù de rènwù。',en:'This is a difficult task.'}]);
W('客户','kèhù','client/customer','workplace',[{cn:'客户对我们的服务很满意。',pinyin:'Kèhù duì wǒmen de fúwù hěn mǎnyì。',en:'The client is very satisfied with our service.'},{cn:'我们要尊重每一位客户。',pinyin:'Wǒmen yào zūnzhòng měi yī wèi kèhù。',en:'We must respect every client.'}]);
W('效果','xiàoguǒ','effect/result','workplace',[{cn:'这个方法效果很好。',pinyin:'Zhège fāngfǎ xiàoguǒ hěn hǎo。',en:'This method has very good results.'},{cn:'效果很明显。',pinyin:'Xiàoguǒ hěn míngxiǎn。',en:'The effect is very obvious.'}]);
W('方法','fāngfǎ','method','workplace',[{cn:'你有什么好方法？',pinyin:'Nǐ yǒu shénme hǎo fāngfǎ?',en:'What good methods do you have?'},{cn:'学习方法很重要。',pinyin:'Xuéxí fāngfǎ hěn zhòngyào。',en:'Learning methods are very important.'}]);
W('态度','tàidù','attitude','workplace',[{cn:'他的工作态度很好。',pinyin:'Tā de gōngzuò tàidù hěn hǎo。',en:'His work attitude is very good.'},{cn:'态度决定一切。',pinyin:'Tàidù juédìng yīqiè。',en:'Attitude determines everything.'}]);
W('目标','mùbiāo','goal/target','workplace',[{cn:'你的目标是什么？',pinyin:'Nǐ de mùbiāo shì shénme?',en:'What is your goal?'},{cn:'我们达到了目标。',pinyin:'Wǒmen dádào le mùbiāo。',en:'We achieved the goal.'}]);
W('能力','nénglì','ability','workplace',[{cn:'他的能力很强。',pinyin:'Tā de nénglì hěn qiáng。',en:'His ability is very strong.'},{cn:'你要相信自己的能力。',pinyin:'Nǐ yào xiāngxìn zìjǐ de nénglì。',en:'You must believe in your own ability.'}]);
W('机会','jīhuì','opportunity','workplace',[{cn:'这是一次好机会。',pinyin:'Zhè shì yī cì hǎo jīhuì。',en:'This is a good opportunity.'},{cn:'机会是留给有准备的人的。',pinyin:'Jīhuì shì liú gěi yǒu zhǔnbèi de rén de。',en:'Opportunities are for those who are prepared.'}]);
W('条件','tiáojiàn','condition/requirement','workplace',[{cn:'这里的工作条件很好。',pinyin:'Zhèlǐ de gōngzuò tiáojiàn hěn hǎo。',en:'The working conditions here are very good.'},{cn:'你满足申请条件吗？',pinyin:'Nǐ mǎnzú shēnqǐng tiáojiàn ma?',en:'Do you meet the application requirements?'}]);
W('资源','zīyuán','resource','workplace',[{cn:'我们要合理利用资源。',pinyin:'Wǒmen yào hélǐ lìyòng zīyuán。',en:'We must use resources reasonably.'},{cn:'这个地区资源丰富。',pinyin:'Zhège dìqū zīyuán fēngfù。',en:'This region is rich in resources.'}]);

// ===== SOCIAL TERMS =====
W('关系','guānxì','relationship','social',[{cn:'我们的关系很好。',pinyin:'Wǒmen de guānxì hěn hǎo。',en:'Our relationship is very good.'},{cn:'人际关系很重要。',pinyin:'Rénjì guānxì hěn zhòngyào。',en:'Interpersonal relationships are very important.'}]);
W('友谊','yǒuyì','friendship','social',[{cn:'友谊是最珍贵的。',pinyin:'Yǒuyì shì zuì zhēnguì de。',en:'Friendship is the most precious.'},{cn:'我们的友谊会一直持续下去。',pinyin:'Wǒmen de yǒuyì huì yīzhí chíxù xiàqù。',en:'Our friendship will continue forever.'}]);
W('信任','xìnrèn','trust','social',[{cn:'我信任你。',pinyin:'Wǒ xìnrèn nǐ。',en:'I trust you.'},{cn:'信任是友谊的基础。',pinyin:'Xìnrèn shì yǒuyì de jīchǔ。',en:'Trust is the foundation of friendship.'}]);


// Build and write output
const out = `// ============================================
// CHINESE MASTER - HSK 3 VOCABULARY
// Intermediate Level - SIMPLIFIED CHINESE
// ${words.length}+ Words with Examples
// ============================================

const HSK3 = {
    words: ${JSON.stringify(words, null, 4)},

    count: ${words.length},

    getByHSK(level) { return this.words.filter(w => w.hsk === level); },
    getByCategory(category) { return this.words.filter(w => w.category === category); },
    getRandom(count = 10) { const s = [...this.words]; for (let i = s.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [s[i], s[j]] = [s[j], s[i]]; } return s.slice(0, count); }
};

window.HSK3 = HSK3;
`;

fs.writeFileSync(p.join(__dirname,'hsk3.js'), out, 'utf8');
console.log('Wrote hsk3.js with ' + words.length + ' words');

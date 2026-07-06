// build-dialogues-mega.js
// Generates data/dialogues-mega.js with 250 dialogue scenarios (dm_001–dm_250)
// Run: node build-dialogues-mega.js

const fs = require('fs');
const path = require('path');

const SCENARIOS = [
  // === Restaurant (13) ===
  { t: '在川菜馆', tm: 'At a Sichuan Restaurant', c: 'Food', d: 'medium' },
  { t: '在粤菜馆', tm: 'At a Cantonese Restaurant', c: 'Food', d: 'medium' },
  { t: '在日料店', tm: 'At a Japanese Restaurant', c: 'Food', d: 'medium' },
  { t: '在快餐店', tm: 'At a Fast Food Restaurant', c: 'Food', d: 'easy' },
  { t: '在火锅店', tm: 'At a Hotpot Restaurant', c: 'Food', d: 'medium' },
  { t: '在面馆', tm: 'At a Noodle Shop', c: 'Food', d: 'easy' },
  { t: '在烧烤摊', tm: 'At a BBQ Stall', c: 'Food', d: 'easy' },
  { t: '订外卖', tm: 'Ordering Food Delivery', c: 'Food', d: 'medium' },
  { t: '在奶茶店', tm: 'At a Bubble Tea Shop', c: 'Food', d: 'easy' },
  { t: '在酒吧', tm: 'At a Bar', c: 'Food', d: 'medium' },
  { t: '在咖啡厅约会', tm: 'Coffee Shop Date', c: 'Food', d: 'medium' },
  { t: '在甜品店', tm: 'At a Dessert Shop', c: 'Food', d: 'easy' },
  { t: '在食堂吃饭', tm: 'Eating at a Cafeteria', c: 'Food', d: 'easy' },
  // === Shopping (13) ===
  { t: '在服装店', tm: 'At a Clothing Store', c: 'Shopping', d: 'medium' },
  { t: '在电子产品店', tm: 'At an Electronics Store', c: 'Shopping', d: 'hard' },
  { t: '在菜市场', tm: 'At a Wet Market', c: 'Shopping', d: 'medium' },
  { t: '在书店', tm: 'At a Bookstore', c: 'Shopping', d: 'easy' },
  { t: '在花店', tm: 'At a Flower Shop', c: 'Shopping', d: 'easy' },
  { t: '在珠宝店', tm: 'At a Jewelry Store', c: 'Shopping', d: 'hard' },
  { t: '在便利店', tm: 'At a Convenience Store', c: 'Shopping', d: 'easy' },
  { t: '在二手市场', tm: 'At a Flea Market', c: 'Shopping', d: 'medium' },
  { t: '在家具城', tm: 'At a Furniture Store', c: 'Shopping', d: 'hard' },
  { t: '在化妆品店', tm: 'At a Cosmetics Store', c: 'Shopping', d: 'medium' },
  { t: '在线购物', tm: 'Online Shopping', c: 'Shopping', d: 'medium' },
  { t: '在玩具店', tm: 'At a Toy Store', c: 'Shopping', d: 'easy' },
  { t: '退换货', tm: 'Returning an Item', c: 'Shopping', d: 'hard' },
  // === Travel (13) ===
  { t: '在旅游咨询中心', tm: 'At a Tourist Info Center', c: 'Travel', d: 'medium' },
  { t: '订机票', tm: 'Booking Plane Tickets', c: 'Travel', d: 'hard' },
  { t: '取消行程', tm: 'Canceling a Trip', c: 'Travel', d: 'hard' },
  { t: '在景区买票', tm: 'Buying Scenic Spot Tickets', c: 'Travel', d: 'easy' },
  { t: '参加旅行团', tm: 'Joining a Tour Group', c: 'Travel', d: 'medium' },
  { t: '自驾游', tm: 'Road Trip', c: 'Travel', d: 'medium' },
  { t: '在青年旅舍', tm: 'At a Hostel', c: 'Travel', d: 'medium' },
  { t: '在度假村', tm: 'At a Resort', c: 'Travel', d: 'hard' },
  { t: '租自行车', tm: 'Renting a Bicycle', c: 'Travel', d: 'easy' },
  { t: '在游乐园', tm: 'At an Amusement Park', c: 'Travel', d: 'medium' },
  { t: '在博物馆', tm: 'At a Museum', c: 'Travel', d: 'medium' },
  { t: '在动物园', tm: 'At the Zoo', c: 'Travel', d: 'easy' },
  { t: '拍照留念', tm: 'Taking Photos', c: 'Travel', d: 'easy' },
  // === Hotel (12) ===
  { t: '办理入住', tm: 'Checking In', c: 'Hotel', d: 'medium' },
  { t: '退房结账', tm: 'Checking Out', c: 'Hotel', d: 'medium' },
  { t: '客房服务', tm: 'Room Service', c: 'Hotel', d: 'medium' },
  { t: '换房间', tm: 'Changing Rooms', c: 'Hotel', d: 'medium' },
  { t: '投诉噪音', tm: 'Complaining About Noise', c: 'Hotel', d: 'hard' },
  { t: '寄存行李', tm: 'Baggage Storage', c: 'Hotel', d: 'easy' },
  { t: '使用健身房', tm: 'Using the Gym', c: 'Hotel', d: 'easy' },
  { t: '预订会议室', tm: 'Booking a Meeting Room', c: 'Hotel', d: 'hard' },
  { t: '叫醒服务', tm: 'Wake-up Call', c: 'Hotel', d: 'easy' },
  { t: '洗衣服务', tm: 'Laundry Service', c: 'Hotel', d: 'medium' },
  { t: '在酒店餐厅', tm: 'At the Hotel Restaurant', c: 'Hotel', d: 'medium' },
  { t: '延长住宿', tm: 'Extending Stay', c: 'Hotel', d: 'medium' },
  // === School (13) ===
  { t: '第一天上课', tm: 'First Day of Class', c: 'School', d: 'easy' },
  { t: '在课堂上提问', tm: 'Asking Questions in Class', c: 'School', d: 'medium' },
  { t: '交作业', tm: 'Submitting Homework', c: 'School', d: 'easy' },
  { t: '和同学讨论', tm: 'Discussing with Classmates', c: 'School', d: 'medium' },
  { t: '准备考试', tm: 'Preparing for Exams', c: 'School', d: 'medium' },
  { t: '在图书馆', tm: 'At the Library', c: 'School', d: 'easy' },
  { t: '选课咨询', tm: 'Course Selection', c: 'School', d: 'hard' },
  { t: '和老师谈话', tm: 'Talking with a Teacher', c: 'School', d: 'medium' },
  { t: '参加社团', tm: 'Joining a Club', c: 'School', d: 'easy' },
  { t: '在宿舍', tm: 'At the Dormitory', c: 'School', d: 'easy' },
  { t: '在实验室', tm: 'In the Lab', c: 'School', d: 'hard' },
  { t: '毕业典礼', tm: 'Graduation Ceremony', c: 'School', d: 'medium' },
  { t: '申请奖学金', tm: 'Applying for Scholarship', c: 'School', d: 'hard' },
  // === Work (13) ===
  { t: '面试', tm: 'Job Interview', c: 'Work', d: 'hard' },
  { t: '第一天上班', tm: 'First Day at Work', c: 'Work', d: 'medium' },
  { t: '开会', tm: 'Having a Meeting', c: 'Work', d: 'medium' },
  { t: '请假', tm: 'Asking for Leave', c: 'Work', d: 'medium' },
  { t: '和同事午餐', tm: 'Lunch with Colleagues', c: 'Work', d: 'easy' },
  { t: '汇报工作', tm: 'Work Report', c: 'Work', d: 'hard' },
  { t: '加班', tm: 'Working Overtime', c: 'Work', d: 'medium' },
  { t: '出差', tm: 'Business Trip', c: 'Work', d: 'hard' },
  { t: '辞职', tm: 'Resigning', c: 'Work', d: 'hard' },
  { t: '和客户见面', tm: 'Meeting a Client', c: 'Work', d: 'hard' },
  { t: '公司聚餐', tm: 'Company Dinner', c: 'Work', d: 'medium' },
  { t: '团建活动', tm: 'Team Building', c: 'Work', d: 'medium' },
  { t: '升职加薪', tm: 'Promotion and Raise', c: 'Work', d: 'hard' },
  // === Doctor (12) ===
  { t: '挂号', tm: 'Registering at Hospital', c: 'Doctor', d: 'hard' },
  { t: '看牙医', tm: 'Seeing a Dentist', c: 'Doctor', d: 'hard' },
  { t: '看急诊', tm: 'Emergency Room Visit', c: 'Doctor', d: 'hard' },
  { t: '做体检', tm: 'Getting a Check-up', c: 'Doctor', d: 'medium' },
  { t: '拿药', tm: 'Picking Up Medicine', c: 'Doctor', d: 'medium' },
  { t: '打疫苗', tm: 'Getting Vaccinated', c: 'Doctor', d: 'medium' },
  { t: '看中医', tm: 'Seeing a Chinese Medicine Doctor', c: 'Doctor', d: 'hard' },
  { t: '做理疗', tm: 'Getting Physical Therapy', c: 'Doctor', d: 'hard' },
  { t: '看皮肤科', tm: 'Seeing a Dermatologist', c: 'Doctor', d: 'medium' },
  { t: '眼科检查', tm: 'Eye Examination', c: 'Doctor', d: 'medium' },
  { t: '住院', tm: 'Hospital Stay', c: 'Doctor', d: 'hard' },
  { t: '看望病人', tm: 'Visiting a Patient', c: 'Doctor', d: 'easy' },
  // === Bank (12) ===
  { t: '开账户', tm: 'Opening a Bank Account', c: 'Bank', d: 'hard' },
  { t: '存钱取钱', tm: 'Deposit and Withdrawal', c: 'Bank', d: 'medium' },
  { t: '办信用卡', tm: 'Applying for a Credit Card', c: 'Bank', d: 'hard' },
  { t: '汇款转账', tm: 'Money Transfer', c: 'Bank', d: 'hard' },
  { t: '兑换外币', tm: 'Foreign Currency Exchange', c: 'Bank', d: 'medium' },
  { t: '查看余额', tm: 'Checking Balance', c: 'Bank', d: 'easy' },
  { t: '挂失卡片', tm: 'Reporting Lost Card', c: 'Bank', d: 'hard' },
  { t: '贷款咨询', tm: 'Loan Consultation', c: 'Bank', d: 'hard' },
  { t: '使用ATM', tm: 'Using an ATM', c: 'Bank', d: 'easy' },
  { t: '交水电费', tm: 'Paying Utility Bills', c: 'Bank', d: 'medium' },
  { t: '买理财', tm: 'Buying Financial Products', c: 'Bank', d: 'hard' },
  { t: '换银行卡', tm: 'Replacing a Bank Card', c: 'Bank', d: 'medium' },
  // === Post Office (12) ===
  { t: '寄包裹', tm: 'Sending a Package', c: 'Post Office', d: 'medium' },
  { t: '收包裹', tm: 'Receiving a Package', c: 'Post Office', d: 'easy' },
  { t: '寄明信片', tm: 'Sending Postcards', c: 'Post Office', d: 'easy' },
  { t: '买邮票', tm: 'Buying Stamps', c: 'Post Office', d: 'easy' },
  { t: '寄挂号信', tm: 'Sending Registered Mail', c: 'Post Office', d: 'medium' },
  { t: 'EMS快递', tm: 'EMS Express Mail', c: 'Post Office', d: 'medium' },
  { t: '查询物流', tm: 'Tracking a Package', c: 'Post Office', d: 'medium' },
  { t: '改地址', tm: 'Changing Delivery Address', c: 'Post Office', d: 'hard' },
  { t: '寄国际包裹', tm: 'International Package', c: 'Post Office', d: 'hard' },
  { t: '邮政储蓄', tm: 'Postal Savings', c: 'Post Office', d: 'medium' },
  { t: '报刊订阅', tm: 'Newspaper Subscription', c: 'Post Office', d: 'medium' },
  { t: '退回包裹', tm: 'Returning a Package', c: 'Post Office', d: 'medium' },
  // === Taxi (12) ===
  { t: '打表计价', tm: 'Metered Taxi Ride', c: 'Taxi', d: 'medium' },
  { t: '用打车软件', tm: 'Using a Ride-hailing App', c: 'Taxi', d: 'medium' },
  { t: '拼车', tm: 'Carpooling', c: 'Taxi', d: 'medium' },
  { t: '去机场', tm: 'Going to the Airport', c: 'Taxi', d: 'medium' },
  { t: '堵车', tm: 'Traffic Jam', c: 'Taxi', d: 'medium' },
  { t: '夜间打车', tm: 'Late-night Taxi', c: 'Taxi', d: 'easy' },
  { t: '长途包车', tm: 'Long-distance Car Hire', c: 'Taxi', d: 'hard' },
  { t: '失物找回', tm: 'Retrieving Lost Items', c: 'Taxi', d: 'hard' },
  { t: '给司机指路', tm: 'Giving Directions to Driver', c: 'Taxi', d: 'medium' },
  { t: '网约车评价', tm: 'Ride-hailing App Rating', c: 'Taxi', d: 'easy' },
  { t: '机场接机', tm: 'Airport Pickup', c: 'Taxi', d: 'medium' },
  { t: '包车旅游', tm: 'Chartered Tour Car', c: 'Taxi', d: 'hard' },
  // === Subway (12) ===
  { t: '买地铁票', tm: 'Buying Subway Tickets', c: 'Subway', d: 'easy' },
  { t: '刷卡进站', tm: 'Tapping Card at Gate', c: 'Subway', d: 'easy' },
  { t: '换乘', tm: 'Transferring Lines', c: 'Subway', d: 'medium' },
  { t: '坐过站', tm: 'Missing Your Stop', c: 'Subway', d: 'medium' },
  { t: '问末班车', tm: 'Asking About Last Train', c: 'Subway', d: 'easy' },
  { t: '高峰期拥挤', tm: 'Rush Hour Crowding', c: 'Subway', d: 'easy' },
  { t: '补票', tm: 'Paying Extra Fare', c: 'Subway', d: 'medium' },
  { t: '地铁安检', tm: 'Subway Security Check', c: 'Subway', d: 'easy' },
  { t: '找出口', tm: 'Finding the Exit', c: 'Subway', d: 'easy' },
  { t: '办交通卡', tm: 'Getting a Transit Card', c: 'Subway', d: 'medium' },
  { t: '地铁故障', tm: 'Subway Breakdown', c: 'Subway', d: 'hard' },
  { t: '给老人让座', tm: 'Offering Seat to Elderly', c: 'Subway', d: 'easy' },
  // === Airport (12) ===
  { t: '办理登机', tm: 'Airport Check-in', c: 'Airport', d: 'hard' },
  { t: '过安检', tm: 'Going Through Security', c: 'Airport', d: 'medium' },
  { t: '候机', tm: 'Waiting at the Gate', c: 'Airport', d: 'easy' },
  { t: '登机', tm: 'Boarding', c: 'Airport', d: 'medium' },
  { t: '转机', tm: 'Transit/Connecting Flight', c: 'Airport', d: 'hard' },
  { t: '行李丢失', tm: 'Lost Luggage', c: 'Airport', d: 'hard' },
  { t: '在免税店', tm: 'At Duty Free', c: 'Airport', d: 'medium' },
  { t: '航班延误', tm: 'Flight Delay', c: 'Airport', d: 'medium' },
  { t: '在贵宾室', tm: 'At the Lounge', c: 'Airport', d: 'hard' },
  { t: '接机', tm: 'Picking Someone Up', c: 'Airport', d: 'medium' },
  { t: '海关申报', tm: 'Customs Declaration', c: 'Airport', d: 'hard' },
  { t: '退税', tm: 'Tax Refund', c: 'Airport', d: 'hard' },
  // === Social (13) ===
  { t: '初次见面', tm: 'First Meeting', c: 'Social', d: 'easy' },
  { t: '老朋友重逢', tm: 'Reunion with Old Friends', c: 'Social', d: 'easy' },
  { t: '邀请朋友', tm: 'Inviting a Friend', c: 'Social', d: 'medium' },
  { t: '参加派对', tm: 'Attending a Party', c: 'Social', d: 'medium' },
  { t: '在朋友家做客', tm: 'Visiting a Friend\'s Home', c: 'Social', d: 'medium' },
  { t: '道歉', tm: 'Apologizing', c: 'Social', d: 'medium' },
  { t: '感谢', tm: 'Expressing Gratitude', c: 'Social', d: 'easy' },
  { t: '祝贺生日', tm: 'Birthday Wishes', c: 'Social', d: 'easy' },
  { t: '新年祝福', tm: 'New Year Greetings', c: 'Social', d: 'easy' },
  { t: '介绍朋友认识', tm: 'Introducing Friends', c: 'Social', d: 'medium' },
  { t: '在社交场合', tm: 'At a Social Event', c: 'Social', d: 'medium' },
  { t: '约饭', tm: 'Making Dinner Plans', c: 'Social', d: 'easy' },
  { t: '告别', tm: 'Saying Goodbye', c: 'Social', d: 'easy' },
  // === Dating (12) ===
  { t: '第一次约会', tm: 'First Date', c: 'Dating', d: 'medium' },
  { t: '看电影', tm: 'Watching a Movie', c: 'Dating', d: 'easy' },
  { t: '表白', tm: 'Confessing Feelings', c: 'Dating', d: 'hard' },
  { t: '吵架和好', tm: 'Fight and Make Up', c: 'Dating', d: 'hard' },
  { t: '过纪念日', tm: 'Celebrating Anniversary', c: 'Dating', d: 'medium' },
  { t: '见家长', tm: 'Meeting the Parents', c: 'Dating', d: 'hard' },
  { t: '送礼物', tm: 'Giving a Gift', c: 'Dating', d: 'medium' },
  { t: '异地恋视频', tm: 'Long-distance Video Call', c: 'Dating', d: 'medium' },
  { t: '散步聊天', tm: 'Walking and Chatting', c: 'Dating', d: 'easy' },
  { t: '商量旅行', tm: 'Planning a Trip Together', c: 'Dating', d: 'medium' },
  { t: '求婚', tm: 'Proposing', c: 'Dating', d: 'hard' },
  { t: '分手', tm: 'Breaking Up', c: 'Dating', d: 'hard' },
  // === Family (12) ===
  { t: '和家人吃饭', tm: 'Having Dinner with Family', c: 'Family', d: 'easy' },
  { t: '打电话给父母', tm: 'Calling Parents', c: 'Family', d: 'easy' },
  { t: '和兄弟姐妹聊天', tm: 'Chatting with Siblings', c: 'Family', d: 'easy' },
  { t: '家庭聚会', tm: 'Family Gathering', c: 'Family', d: 'medium' },
  { t: '过年回家', tm: 'Going Home for New Year', c: 'Family', d: 'medium' },
  { t: '视频通话', tm: 'Video Call with Family', c: 'Family', d: 'easy' },
  { t: '陪父母看病', tm: 'Accompanying Parents to Doctor', c: 'Family', d: 'hard' },
  { t: '和父母商量', tm: 'Discussing with Parents', c: 'Family', d: 'medium' },
  { t: '教父母用手机', tm: 'Teaching Parents to Use Phone', c: 'Family', d: 'medium' },
  { t: '家庭旅行', tm: 'Family Trip', c: 'Family', d: 'medium' },
  { t: '照顾小孩', tm: 'Taking Care of a Child', c: 'Family', d: 'medium' },
  { t: '和亲戚拜年', tm: 'New Year Visits to Relatives', c: 'Family', d: 'easy' },
  // === Phone (12) ===
  { t: '打错了', tm: 'Wrong Number', c: 'Phone', d: 'easy' },
  { t: '预约服务', tm: 'Booking by Phone', c: 'Phone', d: 'medium' },
  { t: '电话客服', tm: 'Customer Service Call', c: 'Phone', d: 'hard' },
  { t: '电话面试', tm: 'Phone Interview', c: 'Phone', d: 'hard' },
  { t: '语音留言', tm: 'Voicemail', c: 'Phone', d: 'medium' },
  { t: '电话会议', tm: 'Conference Call', c: 'Phone', d: 'hard' },
  { t: '打国际长途', tm: 'International Call', c: 'Phone', d: 'medium' },
  { t: '手机没电了', tm: 'Phone Battery Dead', c: 'Phone', d: 'easy' },
  { t: '短信沟通', tm: 'Text Messaging', c: 'Phone', d: 'easy' },
  { t: '推销电话', tm: 'Telemarketing Call', c: 'Phone', d: 'medium' },
  { t: '紧急电话', tm: 'Emergency Call', c: 'Phone', d: 'hard' },
  { t: '打不通', tm: 'Can\'t Get Through', c: 'Phone', d: 'easy' },
  // === Emergency (12) ===
  { t: '叫救护车', tm: 'Calling an Ambulance', c: 'Emergency', d: 'hard' },
  { t: '报警', tm: 'Calling the Police', c: 'Emergency', d: 'hard' },
  { t: '报火警', tm: 'Reporting a Fire', c: 'Emergency', d: 'hard' },
  { t: '钱包被偷', tm: 'Wallet Stolen', c: 'Emergency', d: 'hard' },
  { t: '护照丢失', tm: 'Lost Passport', c: 'Emergency', d: 'hard' },
  { t: '交通事故', tm: 'Traffic Accident', c: 'Emergency', d: 'hard' },
  { t: '地震避险', tm: 'Earthquake Safety', c: 'Emergency', d: 'hard' },
  { t: '被困电梯', tm: 'Stuck in an Elevator', c: 'Emergency', d: 'hard' },
  { t: '食物中毒', tm: 'Food Poisoning', c: 'Emergency', d: 'hard' },
  { t: '迷路求助', tm: 'Lost and Asking for Help', c: 'Emergency', d: 'medium' },
  { t: '台风预警', tm: 'Typhoon Warning', c: 'Emergency', d: 'hard' },
  { t: '求助大使馆', tm: 'Seeking Embassy Help', c: 'Emergency', d: 'hard' },
  // === Weather (12) ===
  { t: '看天气预报', tm: 'Checking Weather Forecast', c: 'Weather', d: 'easy' },
  { t: '讨论气温', tm: 'Discussing Temperature', c: 'Weather', d: 'easy' },
  { t: '下雨了', tm: 'It\'s Raining', c: 'Weather', d: 'easy' },
  { t: '下雪了', tm: 'It\'s Snowing', c: 'Weather', d: 'easy' },
  { t: '天气太热了', tm: 'Too Hot', c: 'Weather', d: 'easy' },
  { t: '天气太冷了', tm: 'Too Cold', c: 'Weather', d: 'easy' },
  { t: '雾霾天气', tm: 'Smoggy Weather', c: 'Weather', d: 'medium' },
  { t: '台风来了', tm: 'Typhoon Coming', c: 'Weather', d: 'medium' },
  { t: '春天来了', tm: 'Spring Has Come', c: 'Weather', d: 'easy' },
  { t: '秋天赏叶', tm: 'Autumn Leaf Viewing', c: 'Weather', d: 'easy' },
  { t: '讨论气候', tm: 'Discussing Climate', c: 'Weather', d: 'medium' },
  { t: '出门带伞', tm: 'Bringing an Umbrella', c: 'Weather', d: 'easy' },
  // === Hobbies (12) ===
  { t: '学画画', tm: 'Learning to Paint', c: 'Hobbies', d: 'medium' },
  { t: '读书分享', tm: 'Book Sharing', c: 'Hobbies', d: 'medium' },
  { t: '健身锻炼', tm: 'Working Out', c: 'Hobbies', d: 'medium' },
  { t: '学乐器', tm: 'Learning an Instrument', c: 'Hobbies', d: 'medium' },
  { t: '摄影', tm: 'Photography', c: 'Hobbies', d: 'medium' },
  { t: '养宠物', tm: 'Keeping a Pet', c: 'Hobbies', d: 'easy' },
  { t: '园艺', tm: 'Gardening', c: 'Hobbies', d: 'medium' },
  { t: '看比赛', tm: 'Watching a Game', c: 'Hobbies', d: 'easy' },
  { t: '做手工', tm: 'Doing Crafts', c: 'Hobbies', d: 'medium' },
  { t: '烹饪爱好', tm: 'Cooking Hobby', c: 'Hobbies', d: 'medium' },
  { t: '跳广场舞', tm: 'Square Dancing', c: 'Hobbies', d: 'easy' },
  { t: '收藏', tm: 'Collecting', c: 'Hobbies', d: 'medium' },
  // === Technology (13) ===
  { t: '买手机', tm: 'Buying a Phone', c: 'Technology', d: 'medium' },
  { t: '修电脑', tm: 'Fixing a Computer', c: 'Technology', d: 'hard' },
  { t: '装软件', tm: 'Installing Software', c: 'Technology', d: 'medium' },
  { t: '连WiFi', tm: 'Connecting to WiFi', c: 'Technology', d: 'easy' },
  { t: '注册账号', tm: 'Registering an Account', c: 'Technology', d: 'medium' },
  { t: '打印文件', tm: 'Printing Documents', c: 'Technology', d: 'medium' },
  { t: '修打印机', tm: 'Fixing a Printer', c: 'Technology', d: 'hard' },
  { t: '下载App', tm: 'Downloading an App', c: 'Technology', d: 'easy' },
  { t: '用导航', tm: 'Using GPS Navigation', c: 'Technology', d: 'medium' },
  { t: '网络故障', tm: 'Network Outage', c: 'Technology', d: 'hard' },
  { t: '数据备份', tm: 'Data Backup', c: 'Technology', d: 'hard' },
  { t: '用社交软件', tm: 'Using Social Media', c: 'Technology', d: 'easy' },
  { t: '网上支付', tm: 'Online Payment', c: 'Technology', d: 'medium' }
];

const DIALOGUES = {};

DIALOGUES['Food'] = {
  '在川菜馆': [
    ['A', '欢迎光临！请问几位？', 'huānyíng guānglín! qǐngwèn jǐ wèi?', 'Welcome! How many people?'],
    ['B', '两位。有包间吗？', 'liǎng wèi. yǒu bāojiān ma?', 'Two. Is there a private room?'],
    ['A', '有的。这边请。先看看菜单。', 'yǒu de. zhè biān qǐng. xiān kànkan càidān.', 'Yes. This way please. First take a look at the menu.'],
    ['B', '水煮鱼和麻婆豆腐。你推荐什么？', 'shuǐzhǔ yú hé mápó dòufu. nǐ tuījiàn shénme?', 'Boiled fish and Mapo tofu. What do you recommend?'],
    ['A', '辣子鸡是我们的招牌菜。', 'làzǐ jī shì wǒmen de zhāopái cài.', 'Laziji is our signature dish.'],
    ['B', '好，就要这个。微辣。', 'hǎo, jiù yào zhège. wēi là.', 'OK, we\'ll take it. Mild spicy.']
  ],
  '在粤菜馆': [
    ['A', '请问有早茶吗？', 'qǐngwèn yǒu zǎochá ma?', 'Do you have dim sum?'],
    ['B', '有的，上午十点前都有。这是点心单。', 'yǒu de, shàngwǔ shí diǎn qián dōu yǒu. zhè shì diǎnxīn dān.', 'Yes, available until 10 AM. Here\'s the dim sum menu.'],
    ['A', '我要虾饺、烧卖和凤爪。', 'wǒ yào xiājiǎo, shāomài hé fèngzhuǎ.', 'I want shrimp dumplings, siu mai and chicken feet.'],
    ['B', '喝什么茶？', 'hē shénme chá?', 'What tea?'],
    ['A', '铁观音。', 'tiěguānyīn.', 'Tieguanyin tea.'],
    ['B', '好，请稍等。', 'hǎo, qǐng shāo děng.', 'OK, please wait a moment.']
  ],
  '在日料店': [
    ['A', 'いらっしゃいませ！欢迎光临！', 'huānyíng guānglín!', 'Welcome!'],
    ['B', '有吧台的位置吗？', 'yǒu bātái de wèizhì ma?', 'Is there a seat at the counter?'],
    ['A', '有的。您坐这里吧。', 'yǒu de. nín zuò zhèlǐ ba.', 'Yes. Please sit here.'],
    ['B', '我要一份三文鱼刺身和一个寿司拼盘。', 'wǒ yào yī fèn sānwényú cìshēn hé yīgè shòusī pīnpán.', 'I want a salmon sashimi and a sushi platter.'],
    ['A', '还要其他的吗？', 'hái yào qítā de ma?', 'Anything else?'],
    ['B', '再要一瓶清酒。', 'zài yào yī píng qīngjiǔ.', 'Also a bottle of sake.']
  ],
  '在快餐店': [
    ['A', '欢迎光临麦当劳！请问要点什么？', 'huānyíng guānglín! qǐngwèn yào diǎn shénme?', 'Welcome to McDonald\'s! What would you like?'],
    ['B', '一号套餐，饮料换可乐。', 'yī hào tàocān, yǐnliào huàn kělè.', 'Combo #1, change the drink to cola.'],
    ['A', '大份还是中份？', 'dà fèn háishì zhōng fèn?', 'Large or medium?'],
    ['B', '大份。', 'dà fèn.', 'Large.'],
    ['A', '一共三十二块。', 'yīgòng sānshí\'èr kuài.', 'That\'s 32 yuan total.'],
    ['B', '可以扫码支付吗？', 'kěyǐ sǎomǎ zhīfù ma?', 'Can I scan to pay?']
  ],
  '在火锅店': [
    ['A', '欢迎！想吃什么锅底？', 'huānyíng! xiǎng chī shénme guōdǐ?', 'Welcome! What soup base?'],
    ['B', '麻辣锅底，中辣。', 'málà guōdǐ, zhōng là.', 'Spicy broth, medium spice.'],
    ['A', '好的。蘸料区在那边。', 'hǎo de. zhànliào qū zài nàbiān.', 'OK. The sauce bar is over there.'],
    ['B', '要一份肥牛、毛肚和蔬菜拼盘。', 'yào yī fèn féiniú, máodù hé shūcài pīnpán.', 'I want beef, tripe and a vegetable platter.'],
    ['A', '喝什么饮料？', 'hē shénme yǐnliào?', 'What drink?'],
    ['B', '王老吉。', 'wáng lǎo jí.', 'Wanglaoji herbal tea.']
  ],
  '在面馆': [
    ['A', '老板，来一碗牛肉面。', 'lǎobǎn, lái yī wǎn niúròu miàn.', 'Boss, one bowl of beef noodles.'],
    ['B', '大碗还是小碗？', 'dà wǎn háishì xiǎo wǎn?', 'Large or small?'],
    ['A', '大碗。加一个卤蛋。', 'dà wǎn. jiā yīgè lǔ dàn.', 'Large. Add a marinated egg.'],
    ['B', '在这吃还是带走？', 'zài zhè chī háishì dài zǒu?', 'Eat here or take away?'],
    ['A', '在这吃。', 'zài zhè chī.', 'Eat here.'],
    ['B', '一共二十块。面好了我叫你。', 'yīgòng èrshí kuài. miàn hǎo le wǒ jiào nǐ.', '20 yuan total. I\'ll call you when it\'s ready.']
  ],
  '在烧烤摊': [
    ['A', '老板，羊肉串多少钱一串？', 'lǎobǎn, yángròu chuàn duōshao qián yī chuàn?', 'Boss, how much for lamb skewers?'],
    ['B', '五块钱一串，十块钱三串。', 'wǔ kuài qián yī chuàn, shí kuài qián sān chuàn.', '5 yuan each, 10 for three.'],
    ['A', '来十串羊肉、五串鸡翅。', 'lái shí chuàn yángròu, wǔ chuàn jīchì.', 'Give me ten lamb, five chicken wings.'],
    ['B', '要辣吗？', 'yào là ma?', 'Want it spicy?'],
    ['A', '多放点辣椒！再来两瓶啤酒。', 'duō fàng diǎn làjiāo! zài lái liǎng píng píjiǔ.', 'Lots of spice! And two bottles of beer.'],
    ['B', '好嘞，稍等一会儿！', 'hǎo lei, shāo děng yīhuìr!', 'Coming right up!']

  ],
  '订外卖': [
    ['A', '你好，我要订外卖。', 'nǐ hǎo, wǒ yào dìng wàimài.', 'Hello, I want to order delivery.'],
    ['B', '好的，您想吃什么？', 'hǎo de, nín xiǎng chī shénme?', 'OK, what would you like?'],
    ['A', '一个鱼香肉丝盖饭。', 'yīgè yúxiāng ròusī gàifàn.', 'One Yu Xiang shredded pork rice bowl.'],
    ['B', '送到哪里？', 'sòng dào nǎlǐ?', 'Delivered where?'],
    ['A', '幸福小区三号楼二单元501。', 'xìngfú xiǎoqū sān hào lóu èr dānyuán wǔ líng yī.', 'Building 3, Unit 2, Room 501, Xingfu Compound.'],
    ['B', '好的，大概三十分钟到。', 'hǎo de, dàgài sānshí fēnzhōng dào.', 'OK, arriving in about 30 minutes.']
  ],
  '在奶茶店': [
    ['A', '欢迎光临！想喝什么？', 'huānyíng guānglín! xiǎng hē shénme?', 'Welcome! What would you like?'],
    ['B', '一杯珍珠奶茶，少糖少冰。', 'yī bēi zhēnzhū nǎichá, shǎo táng shǎo bīng.', 'One bubble milk tea, less sugar and less ice.'],
    ['A', '大杯还是中杯？', 'dà bēi háishì zhōng bēi?', 'Large or medium?'],
    ['B', '大杯。', 'dà bēi.', 'Large.'],
    ['A', '十六块。扫码支付可以吗？', 'shíliù kuài. sǎomǎ zhīfù kěyǐ ma?', '16 yuan. Can you scan to pay?'],
    ['B', '可以，谢谢。', 'kěyǐ, xièxiè.', 'Yes, thanks.']
  ],
  '在酒吧': [
    ['A', '晚上好！想喝点什么？', 'wǎnshang hǎo! xiǎng hē diǎn shénme?', 'Good evening! What would you like to drink?'],
    ['B', '给我一杯莫吉托。', 'gěi wǒ yī bēi mòjítuō.', 'Give me a mojito.'],
    ['A', '要加冰吗？', 'yào jiā bīng ma?', 'With ice?'],
    ['B', '加。你们这里有现场音乐吗？', 'jiā. nǐmen zhèlǐ yǒu xiànchǎng yīnyuè ma?', 'Yes. Do you have live music?'],
    ['A', '有的，九点半开始。', 'yǒu de, jiǔ diǎn bàn kāishǐ.', 'Yes, starts at 9:30.'],
    ['B', '太好了，可以开个账单吗？', 'tài hǎo le, kěyǐ kāi gè zhàngdān ma?', 'Great, can I start a tab?']
  ],
  '在咖啡厅约会': [
    ['A', '你到了！想喝什么？我请客。', 'nǐ dào le! xiǎng hē shénme? wǒ qǐngkè.', 'You\'re here! What would you like to drink? My treat.'],
    ['B', 'flat white吧。你推荐什么？', 'flat white ba. nǐ tuījiàn shénme?', 'Flat white. What do you recommend?'],
    ['A', '这里的拿铁很不错。', 'zhèlǐ de nátiě hěn bùcuò.', 'The latte here is really good.'],
    ['B', '那我要一杯热的拿铁。', 'nà wǒ yào yī bēi rè de nátiě.', 'Then I\'ll have a hot latte.'],
    ['A', '好的，我还要一个蓝莓芝士蛋糕。', 'hǎo de, wǒ hái yào yīgè lánméi zhīshì dàngāo.', 'OK, and I want a blueberry cheesecake.'],
    ['B', '环境真不错！', 'huánjìng zhēn bùcuò!', 'The atmosphere is really nice!']
  ],
  '在甜品店': [
    ['A', '欢迎光临！来看看我们的蛋糕。', 'huānyíng guānglín! lái kànkan wǒmen de dàngāo.', 'Welcome! Come look at our cakes.'],
    ['B', '这个草莓蛋糕看起来好好吃。', 'zhège cǎoméi dàngāo kàn qǐlái hǎohào chī.', 'This strawberry cake looks delicious.'],
    ['A', '这是今天早上做的，很新鲜。', 'zhè shì jīntiān zǎoshang zuò de, hěn xīnxiān.', 'It was made this morning, very fresh.'],
    ['B', '我要一块这个，再要一杯热巧克力。', 'wǒ yào yī kuài zhège, zài yào yī bēi rè qiǎokèlì.', 'I want a slice of this, and a hot chocolate.'],
    ['A', '好的，坐这里还是打包？', 'hǎo de, zuò zhèlǐ háishì dǎbāo?', 'OK, eat here or take away?'],
    ['B', '在这吃。', 'zài zhè chī.', 'Eat here.']
  ],
  '在食堂吃饭': [
    ['A', '今天食堂有什么菜？', 'jīntiān shítáng yǒu shénme cài?', 'What dishes does the cafeteria have today?'],
    ['B', '番茄炒蛋、青椒肉丝和红烧排骨。', 'fānqié chǎo dàn, qīngjiāo ròusī hé hóngshāo páigǔ.', 'Scrambled eggs with tomatoes, pepper with pork, and braised ribs.'],
    ['A', '看起来都不错。我要番茄炒蛋和一份米饭。', 'kàn qǐlái dōu bùcuò. wǒ yào fānqié chǎo dàn hé yī fèn mǐfàn.', 'They all look good. I\'ll take tomato eggs and rice.'],
    ['B', '六块五。', 'liù kuài wǔ.', '6.5 yuan.'],
    ['A', '好的，刷卡。', 'hǎo de, shuākǎ.', 'OK, swipe the card.']
  ]
};

DIALOGUES['Shopping'] = {
  '在服装店': [
    ['A', '您好，想看看什么衣服？', 'nín hǎo, xiǎng kànkan shénme yīfu?', 'Hello, what clothes are you looking for?'],
    ['B', '我想买一件冬天的外套。', 'wǒ xiǎng mǎi yī jiàn dōngtiān de wàitào.', 'I want to buy a winter coat.'],
    ['A', '这些是今年的新款。您可以试一下。', 'zhèxiē shì jīnnián de xīnkuǎn. nín kěyǐ shì yīxià.', 'These are this year\'s new styles. You can try them on.'],
    ['B', '这个黑色的大号有吗？', 'zhège hēisè de dà hào yǒu ma?', 'Do you have this in black, large size?'],
    ['A', '有的，我去给您拿。试衣间在那边。', 'yǒu de, wǒ qù gěi nín ná. shìyī jiān zài nàbiān.', 'Yes, I\'ll get it for you. The fitting room is over there.'],
    ['B', '谢谢。可以打折吗？', 'xièxiè. kěyǐ dǎzhé ma?', 'Thanks. Is there a discount?']
  ],
  '在电子产品店': [
    ['A', '你好，我想看看新出的手机。', 'nǐ hǎo, wǒ xiǎng kànkan xīn chū de shǒujī.', 'Hello, I want to see the newly released phone.'],
    ['B', '这款是上个月刚上市的。', 'zhè kuǎn shì shàng gè yuè gāng shàngshì de.', 'This model just launched last month.'],
    ['A', '内存多大？', 'nèicún duō dà?', 'How much storage?'],
    ['B', '256G的，4999元。', 'liǎng bǎi wǔshíliù G de, sì qiān jiǔ bǎi jiǔshíjiǔ yuán.', '256GB, 4999 yuan.'],
    ['A', '有点贵。有优惠吗？', 'yǒudiǎn guì. yǒu yōuhuì ma?', 'A bit expensive. Any promotion?'],
    ['B', '现在买送充电宝和耳机。', 'xiànzài mǎi sòng chōngdiànbǎo hé ěrjī.', 'Buy now and get a power bank and earphones for free.']
  ],
  '在菜市场': [
    ['A', '老板，青菜怎么卖？', 'lǎobǎn, qīngcài zěnme mài?', 'Boss, how much are the greens?'],
    ['B', '三块钱一斤。今天的很新鲜。', 'sān kuài qián yī jīn. jīntiān de hěn xīnxiān.', '3 yuan per jin. Fresh today.'],
    ['A', '来两斤。能便宜点吗？', 'lái liǎng jīn. néng piányi diǎn ma?', 'Give me two jin. Can you make it cheaper?'],
    ['B', '五块五，够便宜了。', 'wǔ kuài wǔ, gòu piányi le.', '5.5 yuan, that\'s cheap enough.'],
    ['A', '好的。再给我拿一把葱。', 'hǎo de. zài gěi wǒ ná yī bǎ cōng.', 'OK. And give me a bunch of green onions.'],
    ['B', '葱送你了。一共五块五。', 'cōng sòng nǐ le. yīgòng wǔ kuài wǔ.', 'The onions are free. Total 5.5 yuan.']
  ],
  '在书店': [
    ['A', '请问，汉语学习类的书在哪里？', 'qǐngwèn, hànyǔ xuéxí lèi de shū zài nǎlǐ?', 'Excuse me, where are the Chinese learning books?'],
    ['B', '在二楼左边第二个架子。', 'zài èr lóu zuǒbiān dì èr gè jiàzi.', 'Second floor, left side, second shelf.'],
    ['A', '谢谢。有对外汉语教材吗？', 'xièxiè. yǒu duìwài hànyǔ jiàocái ma?', 'Thanks. Do you have TCSL textbooks?'],
    ['B', '有的。这本《汉语教程》很受欢迎。', 'yǒu de. zhè běn hànyǔ jiàochéng hěn shòu huānyíng.', 'Yes. This "Hanyu Jiaocheng" is very popular.'],
    ['A', '好，我要这本。还有MP3光盘吗？', 'hǎo, wǒ yào zhè běn. hái yǒu MP3 guāngpán ma?', 'OK, I\'ll take this one. Does it come with an MP3 CD?'],
    ['B', '扫描书后面的二维码可以听音频。', 'sǎomiáo shū hòumiàn de èrwéimǎ kěyǐ tīng yīnpín.', 'Scan the QR code on the back to listen to audio.']
  ],
  '在花店': [
    ['A', '欢迎光临！买花送人吗？', 'huānyíng guānglín! mǎi huā sòng rén ma?', 'Welcome! Buying flowers for someone?'],
    ['B', '对，女朋友过生日。', 'duì, nǚpéngyou guò shēngrì.', 'Yes, it\'s my girlfriend\'s birthday.'],
    ['A', '推荐这束红玫瑰，很浪漫。', 'tuījiàn zhè shù hóng méigui, hěn làngmàn.', 'I recommend this bouquet of red roses, very romantic.'],
    ['B', '多少钱？', 'duōshao qián?', 'How much?'],
    ['A', '一百二十八块。送一张贺卡。', 'yī bǎi èrshíbā kuài. sòng yī zhāng hèkǎ.', '128 yuan. Comes with a greeting card.'],
    ['B', '好的，帮我包起来。', 'hǎo de, bāng wǒ bāo qǐlái.', 'OK, please wrap it up.']
  ],
  '在珠宝店': [
    ['A', '您好，想看什么首饰？', 'nín hǎo, xiǎng kàn shénme shǒushì?', 'Hello, what jewelry are you looking for?'],
    ['B', '我想看看钻戒。', 'wǒ xiǎng kànkan zuànjiè.', 'I want to look at diamond rings.'],
    ['A', '这边请。您想找什么样子的？', 'zhè biān qǐng. nín xiǎng zhǎo shénme yàngzi?', 'This way please. What style are you looking for?'],
    ['B', '简单大方的那种。这个多少克拉？', 'jiǎndān dàfāng de nà zhǒng. zhège duōshao kèlā?', 'Simple and elegant. How many carats is this?'],
    ['A', '一克拉，两万八。有证书。', 'yī kèlā, liǎng wàn bā. yǒu zhèngshū.', 'One carat, 28,000 yuan. Comes with a certificate.'],
    ['B', '能试戴一下吗？', 'néng shìdài yīxià ma?', 'Can I try it on?']
  ],
  '在便利店': [
    ['A', '欢迎光临！', 'huānyíng guānglín!', 'Welcome!'],
    ['B', '请问有创可贴吗？', 'qǐngwèn yǒu chuāngkětiē ma?', 'Do you have band-aids?'],
    ['A', '有的，在收银台旁边的架子上。', 'yǒu de, zài shōuyín tái pángbiān de jiàzi shàng.', 'Yes, on the shelf next to the register.'],
    ['B', '找到了。再来一瓶矿泉水。', 'zhǎodào le. zài lái yī píng kuàngquánshuǐ.', 'Found it. And a bottle of water.'],
    ['A', '一共六块五。要袋子吗？', 'yīgòng liù kuài wǔ. yào dàizi ma?', 'Total 6.5 yuan. Need a bag?'],
    ['B', '不用了，谢谢。', 'bùyòng le, xièxiè.', 'No, thanks.']
  ],
  '在二手市场': [
    ['A', '这个旧相机多少钱？', 'zhège jiù xiàngjī duōshao qián?', 'How much is this old camera?'],
    ['B', '两百块，还能用。', 'liǎng bǎi kuài, hái néng yòng.', '200 yuan, still works.'],
    ['A', '能试一下吗？', 'néng shì yīxià ma?', 'Can I test it?'],
    ['B', '当然可以。给你电池。', 'dāngrán kěyǐ. gěi nǐ diànchí.', 'Of course. Here\'s the battery.'],
    ['A', '看起来不错。一百五行吗？', 'kàn qǐlái bùcuò. yī bǎi wǔ xíng ma?', 'Looks good. 150?'],
    ['B', '一百八，最低了。', 'yī bǎi bā, zuì dī le.', '180, the lowest.']
  ],
  '在家具城': [
    ['A', '您好，想看看什么家具？', 'nín hǎo, xiǎng kànkan shénme jiājù?', 'Hello, what furniture are you looking for?'],
    ['B', '我想买一张书桌。', 'wǒ xiǎng mǎi yī zhāng shūzhuō.', 'I want to buy a desk.'],
    ['A', '这边有实木的和板式的。', 'zhè biān yǒu shímù de hé bǎnshì de.', 'We have solid wood and panel desks here.'],
    ['B', '实木的怎么卖？', 'shímù de zěnme mài?', 'How much is the solid wood one?'],
    ['A', '这款橡木的，一千二。', 'zhè kuǎn xiàngmù de, yī qiān èr.', 'This oak one is 1,200.'],
    ['B', '送货上门吗？', 'sònghuò shàngmén ma?', 'Free delivery?']
  ],
  '在化妆品店': [
    ['A', '您好，想要什么？', 'nín hǎo, xiǎng yào shénme?', 'Hello, what would you like?'],
    ['B', '我想找一款保湿面霜。', 'wǒ xiǎng zhǎo yī kuǎn bǎoshī miànshuāng.', 'I\'m looking for a moisturizing cream.'],
    ['A', '这款是国内很受欢迎的。', 'zhè kuǎn shì guónèi hěn shòu huānyíng de.', 'This one is very popular in China.'],
    ['B', '可以试一下吗？', 'kěyǐ shì yīxià ma?', 'Can I try it?'],
    ['A', '可以。这个是清爽型的。', 'kěyǐ. zhège shì qīngshuǎng xíng de.', 'Sure. This is the oil-free type.'],
    ['B', '感觉不错。多少钱？', 'gǎnjué bùcuò. duōshao qián?', 'Feels good. How much?']
  ],
  '在线购物': [
    ['A', '你在淘宝上买东西了吗？', 'nǐ zài táobǎo shàng mǎi dōngxi le ma?', 'Did you buy anything on Taobao?'],
    ['B', '买了，一件T恤。只要59块。', 'mǎi le, yī jiàn T-xù. zhǐyào 59 kuài.', 'Yes, a T-shirt. Only 59 yuan.'],
    ['A', '包邮吗？', 'bāoyóu ma?', 'Free shipping?'],
    ['B', '包邮的。明天就能到。', 'bāoyóu de. míngtiān jiù néng dào.', 'Yes. It will arrive tomorrow.'],
    ['A', '这么快！有什么优惠券吗？', 'zhème kuài! yǒu shénme yōuhuì quàn ma?', 'So fast! Any coupons?'],
    ['B', '我用了满99减20的券。', 'wǒ yòng le mǎn jiǔshíjiǔ jiǎn èrshí de quàn.', 'I used a 20-off-99 coupon.']
  ],
  '在玩具店': [
    ['A', '欢迎光临！想给孩子买玩具吗？', 'huānyíng guānglín! xiǎng gěi háizi mǎi wánjù ma?', 'Welcome! Looking for toys for your child?'],
    ['B', '对，我儿子今年五岁。', 'duì, wǒ érzi jīnnián wǔ suì.', 'Yes, my son is five years old.'],
    ['A', '这个乐高飞船很受欢迎。', 'zhège lègāo fēichuán hěn shòu huānyíng.', 'This Lego spaceship is very popular.'],
    ['B', '多少钱？', 'duōshao qián?', 'How much?'],
    ['A', '两百九十九。适合五岁以上的孩子。', 'liǎng bǎi jiǔshíjiǔ. shìhé wǔ suì yǐshàng de háizi.', '299 yuan. Suitable for ages 5+.'],
    ['B', '好的，买一个。', 'hǎo de, mǎi yīgè.', 'OK, I\'ll take one.']
  ],
  '退换货': [
    ['A', '你好，我前天在这买的鞋子。', 'nǐ hǎo, wǒ qiántiān zài zhè mǎi de xiézi.', 'Hello, I bought these shoes here the day before yesterday.'],
    ['B', '有什么问题吗？', 'yǒu shénme wèntí ma?', 'Is there a problem?'],
    ['A', '尺码太小了，想换大一号的。', 'chǐmǎ tài xiǎo le, xiǎng huàn dà yī hào de.', 'They\'re too small. I want to exchange for a bigger size.'],
    ['B', '有发票吗？', 'yǒu fāpiào ma?', 'Do you have the receipt?'],
    ['A', '有的。给您。', 'yǒu de. gěi nín.', 'Yes. Here you go.'],
    ['B', '好的，我帮您换。请稍等。', 'hǎo de, wǒ bāng nín huàn. qǐng shāo děng.', 'OK, let me exchange them. Please wait.']
  ]
};

DIALOGUES['Travel'] = {
  '在旅游咨询中心': [
    ['A', '您好，有什么可以帮您的？', 'nín hǎo, yǒu shénme kěyǐ bāng nín de?', 'Hello, how can I help you?'],
    ['B', '我想了解一下北京的旅游景点。', 'wǒ xiǎng liǎojiě yīxià běijīng de lǚyóu jǐngdiǎn.', 'I want to learn about Beijing\'s attractions.'],
    ['A', '推荐故宫、长城和颐和园。', 'tuījiàn gùgōng, chángchéng hé yíhéyuán.', 'I recommend the Forbidden City, Great Wall and Summer Palace.'],
    ['B', '三天时间够玩吗？', 'sān tiān shíjiān gòu wán ma?', 'Is three days enough?'],
    ['A', '抓紧时间可以的。这里有地图。', 'zhuājǐn shíjiān kěyǐ de. zhèlǐ yǒu dìtú.', 'If you plan well. Here\'s a map.'],
    ['B', '谢谢！门票需要提前预订吗？', 'xièxiè! ménpiào xūyào tíqián yùdìng ma?', 'Thanks! Do I need to book tickets in advance?']
  ],
  '订机票': [
    ['A', '你好，我想订一张去上海的机票。', 'nǐ hǎo, wǒ xiǎng dìng yī zhāng qù shànghǎi de jīpiào.', 'Hello, I want to book a flight to Shanghai.'],
    ['B', '什么时候的？', 'shénme shíhou de?', 'For when?'],
    ['A', '下周三，2月15号。', 'xià zhōusān, èr yuè shíwǔ hào.', 'Next Wednesday, February 15th.'],
    ['B', '上午有八点和十点的航班。', 'shàngwǔ yǒu bā diǎn hé shí diǎn de hángbān.', 'Morning flights at 8 and 10.'],
    ['A', '十点的，经济舱。', 'shí diǎn de, jīngjì cāng.', '10 AM, economy class.'],
    ['B', '好的，七百五十块。身份证号给我。', 'hǎo de, qī bǎi wǔshí kuài. shēnfènzhèng hào gěi wǒ.', 'OK, 750 yuan. Give me your ID number.']
  ],
  '取消行程': [
    ['A', '你好，我需要取消下周五的预订。', 'nǐ hǎo, wǒ xūyào qǔxiāo xià zhōuwǔ de yùdìng.', 'Hello, I need to cancel next Friday\'s booking.'],
    ['B', '请问您的订单号是多少？', 'qǐngwèn nín de dìngdān hào shì duōshao?', 'What is your order number?'],
    ['A', 'DK2025015。', 'DK2025015.', 'DK2025015.'],
    ['B', '找到了。取消需要扣百分之十的手续费。', 'zhǎodào le. qǔxiāo xūyào kòu bǎi fēn zhī shí de shǒuxùfèi.', 'Found it. Cancellation has a 10% fee.'],
    ['A', '好的，没问题。', 'hǎo de, méi wèntí.', 'OK, no problem.'],
    ['B', '已经取消了。退款三个工作日到账。', 'yǐjīng qǔxiāo le. tuìkuǎn sān gè gōngzuòrì dào zhàng.', 'Cancelled. Refund in 3 business days.']
  ],
  '在景区买票': [
    ['A', '你好，买两张门票。', 'nǐ hǎo, mǎi liǎng zhāng ménpiào.', 'Hello, two tickets please.'],
    ['B', '成人票八十块一张，学生票半价。', 'chéngrén piào bāshí kuài yī zhāng, xuéshēng piào bàn jià.', 'Adult tickets 80 yuan, student tickets half price.'],
    ['A', '两张成人票。', 'liǎng zhāng chéngrén piào.', 'Two adult tickets.'],
    ['B', '一共一百六。需要导游吗？', 'yīgòng yī bǎi liù. xūyào dǎoyóu ma?', '160 total. Do you need a guide?'],
    ['A', '有中文导游吗？多少钱？', 'yǒu zhōngwén dǎoyóu ma? duōshao qián?', 'Is there a Chinese guide? How much?'],
    ['B', '有的，两百块一个团。', 'yǒu de, liǎng bǎi kuài yīgè tuán.', 'Yes, 200 yuan per group.']
  ],
  '参加旅行团': [
    ['A', '请问有没有去西安的三日团？', 'qǐngwèn yǒu méi yǒu qù xī\'ān de sān rì tuán?', 'Do you have a 3-day tour to Xi\'an?'],
    ['B', '有的。周五出发，三天两晚。', 'yǒu de. zhōuwǔ chūfā, sān tiān liǎng wǎn.', 'Yes. Departs Friday, 3 days 2 nights.'],
    ['A', '多少钱？包括什么？', 'duōshao qián? bāokuò shénme?', 'How much? What\'s included?'],
    ['B', '两千八，包括住宿、门票和三餐。', 'liǎng qiān bā, bāokuò zhùsù, ménpiào hé sān cān.', '2,800 including accommodation, tickets and meals.'],
    ['A', '可以。怎么报名？', 'kěyǐ. zěnme bàomíng?', 'OK. How to sign up?'],
    ['B', '填这张表，交定金五百块。', 'tián zhè zhāng biǎo, jiāo dìngjīn wǔ bǎi kuài.', 'Fill out this form and pay a 500 yuan deposit.']
  ],
  '自驾游': [
    ['A', '我们开车去杭州吧！', 'wǒmen kāichē qù hángzhōu ba!', 'Let\'s drive to Hangzhou!'],
    ['B', '好主意！大概要多久？', 'hǎo zhǔyì! dàgài yào duō jiǔ?', 'Good idea! About how long?'],
    ['A', '从上海开过去大概两小时。', 'cóng shànghǎi kāi guòqù dàgài liǎng xiǎoshí.', 'About two hours from Shanghai.'],
    ['B', '走高速吗？', 'zǒu gāosù ma?', 'Take the highway?'],
    ['A', '对，沪杭高速。路费大概一百左右。', 'duì, hù háng gāosù. lùfèi dàgài yī bǎi zuǒyòu.', 'Yes, the Shanghai-Hangzhou expressway. Tolls about 100 yuan.'],
    ['B', '好的，我来准备零食和饮料！', 'hǎo de, wǒ lái zhǔnbèi língshí hé yǐnliào!', 'OK, I\'ll prepare snacks and drinks!']
  ],
  '在青年旅舍': [
    ['A', '你好，还有床位吗？', 'nǐ hǎo, hái yǒu chuángwèi ma?', 'Hello, do you have any beds available?'],
    ['B', '有的。六人间一晚六十块。', 'yǒu de. liù rén jiān yī wǎn liùshí kuài.', 'Yes. 60 yuan per night for a 6-bed dorm.'],
    ['A', '有带独立卫生间的吗？', 'yǒu dài dúlì wèishēngjiān de ma?', 'Do you have any with a private bathroom?'],
    ['B', '有，四人间，一百二一晚。', 'yǒu, sì rén jiān, yī bǎi èr yī wǎn.', 'Yes, 4-bed room, 120 per night.'],
    ['A', '我要一个四人间，住两晚。', 'wǒ yào yīgè sì rén jiān, zhù liǎng wǎn.', 'I\'ll take the 4-bed room for two nights.'],
    ['B', '好的。押金五十块。', 'hǎo de. yājīn wǔshí kuài.', 'OK. 50 yuan deposit.']
  ],
  '在度假村': [
    ['A', '欢迎来到山水度假村！', 'huānyíng lái dào shānshuǐ dùjià cūn!', 'Welcome to Shanshui Resort!'],
    ['B', '环境真美！我们订了别墅。', 'huánjìng zhēn měi! wǒmen dìng le biéshù.', 'The environment is beautiful! We booked a villa.'],
    ['A', '好的，我带您过去。有温泉和泳池。', 'hǎo de, wǒ dài nín guòqù. yǒu wēnquán hé yǒngchí.', 'OK, I\'ll take you there. We have hot springs and a pool.'],
    ['B', '太好了！餐厅在哪里？', 'tài hǎo le! cāntīng zài nǎlǐ?', 'Great! Where is the restaurant?'],
    ['A', '在主楼的一楼，自助餐到晚上九点。', 'zài zhǔlóu de yī lóu, zìzhùcān dào wǎnshang jiǔ diǎn.', 'On the first floor of the main building. Buffet until 9 PM.'],
    ['B', '谢谢！明天我们想爬山。', 'xièxiè! míngtiān wǒmen xiǎng páshān.', 'Thanks! We want to hike tomorrow.']
  ],
  '租自行车': [
    ['A', '老板，租自行车怎么收费？', 'lǎobǎn, zū zìxíngchē zěnme shōufèi?', 'Boss, how much to rent a bike?'],
    ['B', '普通车一天三十，山地车五十。', 'pǔtōng chē yī tiān sānshí, shāndì chē wǔshí.', 'Regular bike 30/day, mountain bike 50.'],
    ['A', '我要一辆山地车，租两天。', 'wǒ yào yī liàng shāndì chē, zū liǎng tiān.', 'I want a mountain bike for two days.'],
    ['B', '押金三百块。需要身份证登记。', 'yājīn sān bǎi kuài. xūyào shēnfènzhèng dēngjì.', '300 yuan deposit. Need your ID to register.'],
    ['A', '好的。头盔有吗？', 'hǎo de. tóukuī yǒu ma?', 'OK. Do you have helmets?'],
    ['B', '有的，免费提供。', 'yǒu de, miǎnfèi tígōng.', 'Yes, provided for free.']
  ],
  '在游乐园': [
    ['A', '今天好多人啊！', 'jīntiān hǎo duō rén a!', 'So many people today!'],
    ['B', '因为是周末。我们先玩什么？', 'yīnwèi shì zhōumò. wǒmen xiān wán shénme?', 'Because it\'s the weekend. What should we do first?'],
    ['A', '去过山车吧！', 'qù guòshānchē ba!', 'Let\'s go on the roller coaster!'],
    ['B', '我有点害怕...你陪我坐吗？', 'wǒ yǒudiǎn hàipà... nǐ péi wǒ zuò ma?', 'I\'m a bit scared... Will you sit with me?'],
    ['A', '当然！别怕，很好玩的。', 'dāngrán! bié pà, hěn hǎowán de.', 'Of course! Don\'t be scared, it\'s fun.'],
    ['B', '好吧，我们一起去排队！', 'hǎo ba, wǒmen yīqǐ qù páiduì!', 'OK, let\'s go queue together!']
  ],
  '在博物馆': [
    ['A', '你好，请问有语音导览吗？', 'nǐ hǎo, qǐngwèn yǒu yǔyīn dǎolǎn ma?', 'Hello, do you have audio guides?'],
    ['B', '有的。有中英文的，三十块一个。', 'yǒu de. yǒu zhōng yīng wén de, sānshí kuài yīgè.', 'Yes. Available in Chinese and English, 30 yuan each.'],
    ['A', '我要一个中文的。', 'wǒ yào yīgè zhōngwén de.', 'I want one in Chinese.'],
    ['B', '好的，给您。这个馆的镇馆之宝是青铜器。', 'hǎo de, gěi nín. zhège guǎn de zhèn guǎn zhī bǎo shì qīngtóngqì.', 'Here you go. The museum\'s treasure is the bronze ware.'],
    ['A', '在哪个展厅？', 'zài nǎge zhǎntīng?', 'Which exhibition hall?'],
    ['B', '二楼左手边第三个展厅。', 'èr lóu zuǒshǒu biān dì sān gè zhǎntīng.', 'Second floor, left side, third hall.']
  ],
  '在动物园': [
    ['A', '爸爸，我要看大熊猫！', 'bàba, wǒ yào kàn dà xióngmāo!', 'Dad, I want to see the pandas!'],
    ['B', '好，我们去看熊猫馆。', 'hǎo, wǒmen qù kàn xióngmāo guǎn.', 'OK, let\'s go to the panda house.'],
    ['A', '熊猫好可爱啊！', 'xióngmāo hǎo kě\'ài a!', 'The pandas are so cute!'],
    ['B', '它们在吃竹子呢。', 'tāmen zài chī zhúzi ne.', 'They\'re eating bamboo.'],
    ['A', '可以喂它们吗？', 'kěyǐ wèi tāmen ma?', 'Can we feed them?'],
    ['B', '不可以哦，只能看。', 'bù kěyǐ o, zhǐ néng kàn.', 'No, we can only watch.']
  ],
  '拍照留念': [
    ['A', '这个角度拍出来很好看！', 'zhège jiǎodù pāi chūlái hěn hǎokàn!', 'This angle takes great photos!'],
    ['B', '你站过去，我帮你拍。', 'nǐ zhàn guòqù, wǒ bāng nǐ pāi.', 'Stand over there, I\'ll take a picture for you.'],
    ['A', '等一下，我把外套脱了。好了！', 'děng yīxià, wǒ bǎ wàitào tuō le. hǎo le!', 'Wait, let me take off my coat. OK!'],
    ['B', '三、二、一，茄子！', 'sān, èr, yī, qiézi!', 'Three, two, one, cheese!'],
    ['A', '我看看。拍得真不错！', 'wǒ kànkan. pāi de zhēn bùcuò!', 'Let me see. Great photo!'],
    ['B', '再拍几张吧，背景太美了。', 'zài pāi jǐ zhāng ba, bèijǐng tài měi le.', 'Let\'s take a few more, the background is gorgeous.']
  ]
};

const FALLBACK_SCENES = {
  'Hotel': [
    ['A', '您好，我有个预订，想办理入住。', 'nín hǎo, wǒ yǒu gè yùdìng, xiǎng bànlǐ rùzhù.', 'Hello, I have a reservation and want to check in.'],
    ['A', '好的，请问您的名字？', 'hǎo de, qǐngwèn nín de míngzì?', 'OK, what is your name?'],
    ['B', '我叫张伟。', 'wǒ jiào zhāng wěi.', 'My name is Zhang Wei.'],
    ['A', '找到了，商务大床房，住两晚对吧？', 'zhǎodào le, shāngwù dà chuáng fáng, zhù liǎng wǎn duì ba?', 'Found it. Business king room, two nights, correct?'],
    ['B', '对。能帮我升级到套房吗？', 'duì. néng bāng wǒ shēngjí dào tàofáng ma?', 'Yes. Can you upgrade me to a suite?'],
    ['A', '升级需要加三百块一晚。', 'shēngjí xūyào jiā sān bǎi kuài yī wǎn.', 'Upgrade costs an extra 300 per night.'],
    ['B', '好的，那就升级吧。', 'hǎo de, nà jiù shēngjí ba.', 'OK, go ahead with the upgrade.']
  ],
  'School': [
    ['A', '同学们好，今天我们学习第5课。', 'tóngxuémen hǎo, jīntiān wǒmen xuéxí dì wǔ kè.', 'Hello class, today we\'re studying Lesson 5.'],
    ['B', '老师，这个字怎么读？', 'lǎoshī, zhège zì zěnme dú?', 'Teacher, how do you pronounce this character?'],
    ['A', '这个字读"爱"，爱心的爱。', 'zhège zì dú "ài", àixīn de ài.', 'This character is "ài", as in "àixīn" (love).'],
    ['B', '可以造个句子吗？', 'kěyǐ zào gè jùzi ma?', 'Can you make a sentence?'],
    ['A', '我爱你。大家一起读一遍。', 'wǒ ài nǐ. dàjiā yīqǐ dú yī biàn.', 'I love you. Everyone read together.'],
    ['B', '老师，有作业吗？', 'lǎoshī, yǒu zuòyè ma?', 'Teacher, is there homework?']
  ],
  'Work': [
    ['A', '张经理，这是下个季度的计划。', 'zhāng jīnglǐ, zhè shì xià gè jìdù de jìhuà.', 'Manager Zhang, this is next quarter\'s plan.'],
    ['B', '好的，我看看。数据做得很详细。', 'hǎo de, wǒ kànkan. shùjù zuò de hěn xiángxì.', 'OK, let me look. The data is very detailed.'],
    ['A', '您有什么修改意见吗？', 'nín yǒu shénme xiūgǎi yìjiàn ma?', 'Do you have any revision suggestions?'],
    ['B', '预算部分可以再细化一些。', 'yùsuàn bùfèn kěyǐ zài xìhuà yīxiē.', 'The budget section could be more detailed.'],
    ['A', '好的，我回去修改。', 'hǎo de, wǒ huíqù xiūgǎi.', 'OK, I\'ll go back and revise it.'],
    ['B', '辛苦了。周五之前发给我就行。', 'xīnkǔ le. zhōuwǔ zhīqián fā gěi wǒ jiù xíng.', 'Good work. Send it to me by Friday.']
  ],
  'Doctor': [
    ['A', '医生，我最近总是头痛。', 'yīshēng, wǒ zuìjìn zǒngshì tóutòng.', 'Doctor, I\'ve been having headaches lately.'],
    ['B', '痛了多久了？', 'tòng le duō jiǔ le?', 'How long has it been going on?'],
    ['A', '大概一个星期了。', 'dàgài yīgè xīngqī le.', 'About a week.'],
    ['B', '量一下血压。有点高。', 'liáng yīxià xuèyā. yǒudiǎn gāo.', 'Let me take your blood pressure. It\'s a bit high.'],
    ['A', '严重吗？', 'yánzhòng ma?', 'Is it serious?'],
    ['B', '不严重，吃点药，注意休息。', 'bù yánzhòng, chī diǎn yào, zhùyì xiūxi.', 'Not serious. Take some medicine and rest well.']
  ],
  'Bank': [
    ['A', '你好，我要办一张银行卡。', 'nǐ hǎo, wǒ yào bàn yī zhāng yínháng kǎ.', 'Hello, I want to open a bank card.'],
    ['B', '请问您要办储蓄卡还是信用卡？', 'qǐngwèn nín yào bàn chǔxù kǎ háishì xìnyòng kǎ?', 'Would you like a debit card or credit card?'],
    ['A', '储蓄卡。需要什么材料？', 'chǔxù kǎ. xūyào shénme cáiliào?', 'Debit card. What documents are needed?'],
    ['B', '身份证和手机号。', 'shēnfènzhèng hé shǒujī hào.', 'ID card and phone number.'],
    ['A', '好的。要多少钱开户？', 'hǎo de. yào duōshao qián kāihù?', 'OK. How much to open the account?'],
    ['B', '十块工本费。', 'shí kuài gōngběn fèi.', '10 yuan processing fee.']
  ],
  'Post Office': [
    ['A', '你好，我想寄一个包裹到美国。', 'nǐ hǎo, wǒ xiǎng jì yīgè bāoguǒ dào měiguó.', 'Hello, I want to send a package to the US.'],
    ['B', '里面是什么东西？', 'lǐmiàn shì shénme dōngxi?', 'What\'s inside?'],
    ['A', '一些衣服和书。', 'yīxiē yīfu hé shū.', 'Some clothes and books.'],
    ['B', '海运还是空运？海运大概一个月。', 'hǎiyùn háishì kōngyùn? hǎiyùn dàgài yīgè yuè.', 'Sea or air? Sea takes about a month.'],
    ['A', '空运吧。多少钱？', 'kōngyùn ba. duōshao qián?', 'Air mail please. How much?'],
    ['B', '五百克以内两百块。请填一下这张单子。', 'wǔ bǎi kè yǐnèi liǎng bǎi kuài. qǐng tián yīxià zhè zhāng dānzi.', 'Under 500g is 200 yuan. Please fill out this form.']
  ],
  'Taxi': [
    ['A', '师傅，去三里屯。', 'shīfu, qù sān lǐ tún.', 'Driver, to Sanlitun.'],
    ['B', '好的。是走三环吗？', 'hǎo de. shì zǒu sān huán ma?', 'OK. Take the Third Ring Road?'],
    ['A', '对，这个时间三环不堵。', 'duì, zhège shíjiān sān huán bù dǔ.', 'Yes, the Third Ring shouldn\'t be busy now.'],
    ['B', '好嘞。您赶时间吗？', 'hǎo lei. nín gǎn shíjiān ma?', 'Sure. Are you in a hurry?'],
    ['A', '有点赶，我两点有个会。', 'yǒudiǎn gǎn, wǒ liǎng diǎn yǒu gè huì.', 'A bit, I have a meeting at 2.'],
    ['B', '那没问题，一点半之前能到。', 'nà méi wèntí, yī diǎn bàn zhīqián néng dào.', 'No problem, we\'ll make it before 1:30.']
  ],
  'Subway': [
    ['A', '你好，去天安门怎么坐地铁？', 'nǐ hǎo, qù tiān\'ānmén zěnme zuò dìtiě?', 'Excuse me, how do I get to Tiananmen by subway?'],
    ['B', '你坐一号线，在天安门东站下车。', 'nǐ zuò yī hào xiàn, zài tiān\'ānmén dōng zhàn xià chē.', 'Take Line 1, get off at Tiananmen East station.'],
    ['A', '要换乘吗？', 'yào huànchéng ma?', 'Do I need to transfer?'],
    ['B', '不用，一号线直达。出站就是。', 'bùyòng, yī hào xiàn zhídá. chū zhàn jiù shì.', 'No, Line 1 goes directly. The exit is right there.'],
    ['A', '好的，谢谢！', 'hǎo de, xièxiè!', 'OK, thanks!'],
    ['B', '不客气。', 'bù kèqì.', 'You\'re welcome.']
  ],
  'Airport': [
    ['A', '你好，我要办理登机手续。', 'nǐ hǎo, wǒ yào bànlǐ dēngjī shǒuxù.', 'Hello, I want to check in.'],
    ['B', '请出示护照和机票。', 'qǐng chūshì hùzhào hé jīpiào.', 'Please show your passport and ticket.'],
    ['A', '好的。有靠窗的位置吗？', 'hǎo de. yǒu kào chuāng de wèizhì ma?', 'OK. Is there a window seat?'],
    ['B', '有的。行李有托运行李吗？', 'yǒu de. xíngli yǒu tuōyùn xíngli ma?', 'Yes. Any checked luggage?'],
    ['A', '一个行李箱。', 'yīgè xíngli xiāng.', 'One suitcase.'],
    ['B', '好的，登机口在B23，请提前半小时登机。', 'hǎo de, dēngjī kǒu zài B23, qǐng tíqián bàn xiǎoshí dēngjī.', 'OK. Boarding gate B23, please board 30 minutes early.']
  ],
  'Social': [
    ['A', '你好！好久不见，最近怎么样？', 'nǐ hǎo! hǎo jiǔ bùjiàn, zuìjìn zěnmeyàng?', 'Hello! Long time no see, how have you been?'],
    ['B', '挺好的，最近换了一份新工作。', 'tǐng hǎo de, zuìjìn huàn le yī fèn xīn gōngzuò.', 'Pretty good. I recently changed jobs.'],
    ['A', '哦？做什么的？', 'ò? zuò shénme de?', 'Oh? Doing what?'],
    ['B', '在一家互联网公司做产品经理。', 'zài yī jiā hùliánwǎng gōngsī zuò chǎnpǐn jīnglǐ.', 'Product manager at an internet company.'],
    ['A', '听起来不错！有时间一起吃个饭？', 'tīng qǐlái bùcuò! yǒu shíjiān yīqǐ chī gè fàn?', 'Sounds great! Want to grab a meal sometime?'],
    ['B', '好啊，周末有空吗？', 'hǎo a, zhōumò yǒu kòng ma?', 'Sure, are you free this weekend?']
  ],
  'Dating': [
    ['A', '你今天真好看。', 'nǐ jīntiān zhēn hǎokàn.', 'You look really nice today.'],
    ['B', '谢谢！你也是。', 'xièxiè! nǐ yě shì.', 'Thanks! You too.'],
    ['A', '我们去看那部新电影吧，听说评分很高。', 'wǒmen qù kàn nà bù xīn diànyǐng ba, tīngshuō píngfēn hěn gāo.', 'Let\'s go see that new movie, I heard it has high ratings.'],
    ['B', '好啊，什么名字？', 'hǎo a, shénme míngzì?', 'OK, what\'s it called?'],
    ['A', '《流浪地球3》。七点半的场。', 'liú làng dìqiú sān. qī diǎn bàn de chǎng.', '"The Wandering Earth 3". 7:30 show.'],
    ['B', '好，我请你喝奶茶！', 'hǎo, wǒ qǐng nǐ hē nǎichá!', 'OK, I\'ll treat you to bubble tea!']
  ],
  'Family': [
    ['A', '妈，我回来了。', 'mā, wǒ huílái le.', 'Mom, I\'m home.'],
    ['B', '回来了？饿不饿？饭快好了。', 'huílái le? è bù è? fàn kuài hǎo le.', 'You\'re back? Hungry? Dinner\'s almost ready.'],
    ['A', '饿死了！今天吃什么？', 'èsǐ le! jīntiān chī shénme?', 'Starving! What\'s for dinner?'],
    ['B', '你最爱吃的红烧排骨和番茄蛋汤。', 'nǐ zuì ài chī de hóngshāo páigǔ hé fānqié dàn tāng.', 'Your favorites: braised ribs and tomato egg drop soup.'],
    ['A', '哇，太棒了！', 'wā, tài bàng le!', 'Wow, awesome!'],
    ['B', '先去洗手，叫你爸来吃饭。', 'xiān qù xǐshǒu, jiào nǐ bà lái chīfàn.', 'Go wash your hands first and call your dad for dinner.']
  ],
  'Phone': [
    ['A', '喂，请问是王先生吗？', 'wèi, qǐngwèn shì wáng xiānsheng ma?', 'Hello, is this Mr. Wang?'],
    ['B', '是的，您是哪位？', 'shì de, nín shì nǎ wèi?', 'Yes, who is this?'],
    ['A', '我是京东快递的。您有一个包裹到了。', 'wǒ shì jīngdōng kuàidì de. nín yǒu yīgè bāoguǒ dào le.', 'I\'m from JD Express. You have a package.'],
    ['B', '好的，我现在在家。门牌号是302。', 'hǎo de, wǒ xiànzài zài jiā. ménpái hào shì sān líng èr.', 'OK, I\'m home. The door number is 302.'],
    ['A', '好的，马上送上来。', 'hǎo de, mǎshàng sòng shànglái.', 'OK, I\'ll bring it up right away.'],
    ['B', '谢谢。', 'xièxiè.', 'Thanks.']
  ],
  'Emergency': [
    ['A', '警察同志，我的钱包被偷了！', 'jǐngchá tóngzhì, wǒ de qiánbāo bèi tōu le!', 'Officer, my wallet was stolen!'],
    ['B', '在哪儿被偷的？什么时候？', 'zài nǎr bèi tōu de? shénme shíhou?', 'Where was it stolen? When?'],
    ['A', '在地铁上，大概半小时前。', 'zài dìtiě shàng, dàgài bàn xiǎoshí qián.', 'On the subway, about half an hour ago.'],
    ['B', '钱包里有什么？', 'qiánbāo lǐ yǒu shénme?', 'What was in the wallet?'],
    ['A', '身份证、银行卡和五百块现金。', 'shēnfènzhèng, yínháng kǎ hé wǔ bǎi kuài xiànjīn.', 'ID card, bank cards, and 500 yuan cash.'],
    ['B', '先跟我回派出所做笔录。', 'xiān gēn wǒ huí pàichūsuǒ zuò bǐlù.', 'First come to the station with me to file a report.']
  ],
  'Weather': [
    ['A', '今天真热啊！多少度了？', 'jīntiān zhēn rè a! duōshao dù le?', 'So hot today! What\'s the temperature?'],
    ['B', '看天气预报说39度。', 'kàn tiānqì yùbào shuō sānshíjiǔ dù.', 'The weather forecast says 39°C.'],
    ['A', '受不了了，我想开空调。', 'shòu bù liǎo le, wǒ xiǎng kāi kòngtiáo.', 'Can\'t stand it, I want to turn on the AC.'],
    ['B', '开吧，明天可能会下雨降温。', 'kāi ba, míngtiān kěnéng huì xiàyǔ jiàngwēn.', 'Go ahead. Tomorrow it might rain and cool down.'],
    ['A', '但愿吧。这天气真是受不了。', 'dànyuàn ba. zhè tiānqì zhēn shì shòu bù liǎo.', 'Hopefully. This weather is unbearable.'],
    ['B', '多喝水，小心中暑。', 'duō hē shuǐ, xiǎoxīn zhòngshǔ.', 'Drink more water, be careful of heatstroke.']
  ],
  'Hobbies': [
    ['A', '你平时有什么爱好？', 'nǐ píngshí yǒu shénme àihào?', 'What hobbies do you usually have?'],
    ['B', '我喜欢跑步和摄影。', 'wǒ xǐhuān pǎobù hé shèyǐng.', 'I like running and photography.'],
    ['A', '摄影？你是用单反拍吗？', 'shèyǐng? nǐ shì yòng dānfǎn pāi ma?', 'Photography? Do you use a DSLR?'],
    ['B', '对，我有一台佳能。', 'duì, wǒ yǒu yī tái jiānéng.', 'Yes, I have a Canon.'],
    ['A', '可以看看你的作品吗？', 'kěyǐ kànkan nǐ de zuòpǐn ma?', 'Can I see your work?'],
    ['B', '当然，我发给你。', 'dāngrán, wǒ fā gěi nǐ.', 'Sure, I\'ll send it to you.']
  ],
  'Technology': [
    ['A', '我的电脑突然开不了机了。', 'wǒ de diànnǎo tūrán kāi bù liǎo jī le.', 'My computer suddenly won\'t turn on.'],
    ['B', '是不是没电了？', 'shì bùshì méi diàn le?', 'Is the battery dead?'],
    ['A', '插着电源呢。按了开关没反应。', 'chā zhe diànyuán ne. àn le kāiguān méi fǎnyìng.', 'It\'s plugged in. No response when I press the power button.'],
    ['B', '可能是硬件问题。你先拔掉电源等一分钟再试。', 'kěnéng shì yìngjiàn wèntí. nǐ xiān bá diào diànyuán děng yī fēnzhōng zài shì.', 'Could be a hardware issue. Unplug it for a minute and try again.'],
    ['A', '还是不行。', 'háishì bù xíng.', 'Still doesn\'t work.'],
    ['B', '那得送去维修店看看了。', 'nà děi sòng qù wéixiū diàn kànkan le.', 'Then you\'ll need to take it to a repair shop.']
  ]
};

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

// Shuffle arr in place (Fisher-Yates)
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Build mapping from category to scene list
const scenarios = [];
let idx = 1;

const CATEGORIES = ['Food', 'Shopping', 'Travel', 'Hotel', 'School', 'Work', 'Doctor', 'Bank', 'Post Office', 'Taxi', 'Subway', 'Airport', 'Social', 'Dating', 'Family', 'Phone', 'Emergency', 'Weather', 'Hobbies', 'Technology'];

// Build a lookup: category -> list of scene definitions
const byCategory = {};
for (const s of SCENARIOS) {
  if (!byCategory[s.c]) byCategory[s.c] = [];
  byCategory[s.c].push(s);
}

for (const cat of CATEGORIES) {
  const scenes = byCategory[cat] || [];
  for (const sc of scenes) {
    const id = `dm_${String(idx).padStart(3, '0')}`;
    // Try to find pre-written dialogue for this title; fallback to generic
    let turnsRaw;
    if (DIALOGUES[cat] && DIALOGUES[cat][sc.t]) {
      turnsRaw = DIALOGUES[cat][sc.t];
    } else if (FALLBACK_SCENES[cat]) {
      turnsRaw = FALLBACK_SCENES[cat];
    } else {
      // Generic fallback
      turnsRaw = [
        ['A', '你好！请问有什么可以帮您的？', 'nǐ hǎo! qǐngwèn yǒu shénme kěyǐ bāng nín de?', 'Hello! How can I help you?'],
        ['B', '我想咨询一下。', 'wǒ xiǎng zīxún yīxià.', 'I want to ask about something.'],
        ['A', '好的，请说。', 'hǎo de, qǐng shuō.', 'OK, please go ahead.'],
        ['B', '谢谢你的帮助。', 'xièxiè nǐ de bāngzhù.', 'Thank you for your help.'],
        ['A', '不客气！', 'bù kèqì!', 'You\'re welcome!']
      ];
    }
    const turns = turnsRaw.map(t => ({
      speaker: t[0],
      chinese: t[1],
      pinyin: t[2],
      meaning: t[3]
    }));
    scenarios.push({
      id,
      title: sc.t,
      titleMeaning: sc.tm,
      category: sc.c,
      difficulty: sc.d,
      turns
    });
    idx++;
  }
}

// Fill remaining slots with random generics if needed
const GENERIC_DIALOGUES = [
  [
    ['A', '你好！很高兴见到你。', 'nǐ hǎo! hěn gāoxìng jiàn dào nǐ.', 'Hello! Nice to meet you.'],
    ['B', '我也很高兴见到你。你是哪里人？', 'wǒ yě hěn gāoxìng jiàn dào nǐ. nǐ shì nǎlǐ rén?', 'Nice to meet you too. Where are you from?'],
    ['A', '我是美国人，来中国学习汉语。', 'wǒ shì měiguó rén, lái zhōngguó xuéxí hànyǔ.', 'I\'m American, here to study Chinese.'],
    ['B', '你的汉语说得很好！', 'nǐ de hànyǔ shuō de hěn hǎo!', 'Your Chinese is very good!'],
    ['A', '哪里哪里，还在学习。', 'nǎlǐ nǎlǐ, hái zài xuéxí.', 'Not at all, still learning.'],
    ['B', '加油！', 'jiāyóu!', 'Keep it up!']
  ],
  [
    ['A', '周末你有什么安排？', 'zhōumò nǐ yǒu shénme ānpái?', 'What plans do you have for the weekend?'],
    ['B', '我想去逛街。你要一起吗？', 'wǒ xiǎng qù guàngjiē. nǐ yào yīqǐ ma?', 'I want to go shopping. Want to come along?'],
    ['A', '好啊！去哪个商场？', 'hǎo a! qù nǎge shāngchǎng?', 'Sure! Which mall?'],
    ['B', '万达广场，那里有很多店。', 'wàndá guǎngchǎng, nàlǐ yǒu hěn duō diàn.', 'Wanda Plaza, there are many shops there.'],
    ['A', '好的，几点见？', 'hǎo de, jǐ diǎn jiàn?', 'OK, what time shall we meet?'],
    ['B', '下午两点，在门口见。', 'xiàwǔ liǎng diǎn, zài ménkǒu jiàn.', '2 PM, meet at the entrance.']
  ],
  [
    ['A', '你好，我找不到我的房间了。', 'nǐ hǎo, wǒ zhǎo bù dào wǒ de fángjiān le.', 'Hello, I can\'t find my room.'],
    ['B', '您住几号房间？', 'nín zhù jǐ hào fángjiān?', 'What room number are you in?'],
    ['A', '832号。', 'bā sān èr hào.', 'Room 832.'],
    ['B', '在八楼，出电梯右拐就到了。', 'zài bā lóu, chū diàntī yòu guǎi jiù dào le.', 'Eighth floor, turn right when you get out of the elevator.'],
    ['A', '谢谢！', 'xièxiè!', 'Thanks!'],
    ['B', '不客气，祝您住得愉快。', 'bù kèqì, zhù nín zhù de yúkuài.', 'You\'re welcome. Have a pleasant stay.']
  ]
];

while (scenarios.length < 250) {
  const id = `dm_${String(scenarios.length + 1).padStart(3, '0')}`;
  const tpl = pick(GENERIC_DIALOGUES);
  const turns = tpl.map(t => ({
    speaker: t[0], chinese: t[1], pinyin: t[2], meaning: t[3]
  }));
  scenarios.push({
    id,
    title: `日常对话 ${scenarios.length + 1}`,
    titleMeaning: `Everyday Conversation ${scenarios.length + 1}`,
    category: 'Social',
    difficulty: 'easy',
    turns
  });
}

const output = `// ============================================
// CHINESE MASTER - Dialogues Mega Data
// ${scenarios.length} dialogue scenarios (generated)
// ============================================

const DialoguesMega = {
    scenarios: ${JSON.stringify(scenarios, null, 4)},

    getById(id) {
        return this.scenarios.find(s => s.id === id);
    },

    getByCategory(category) {
        return this.scenarios.filter(s => s.category === category);
    },

    getByDifficulty(difficulty) {
        return this.scenarios.filter(s => s.difficulty === difficulty);
    },

    getRandom(count = 5) {
        const shuffled = [...this.scenarios].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    },

    get totalCount() {
        return this.scenarios.length;
    }
};

window.DialoguesMega = DialoguesMega;
`;

const outPath = path.join(__dirname, 'data', 'dialogues-mega.js');
fs.writeFileSync(outPath, output, 'utf8');
console.log(`Generated ${scenarios.length} dialogue scenarios → data/dialogues-mega.js`);

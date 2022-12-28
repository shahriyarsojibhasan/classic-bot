module.exports.config = {
	name: "help2",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Beginner's Guide",
	commandCategory: "system",
	usages: "[Name module]",
	cooldowns: 5,
	envConfig: {
		autoUnsend: false,
		delayUnsend: 20
	}
};

module.exports.languages = {
	"vi": {
		"moduleInfo": "「%1 」\n%2\n\n❯ ব্যবহার: %3\n❯ গ্রুপ: %4\n❯ সময়সীমা: %5 সেকেন্ড(গুলি)\n❯ অনুমতি: %6\n\n» মডিউল কোড % দ্বারা 7 «",
		"helpList": '[ বর্তমানে এই বটে ব্যবহারযোগ্য %1 কমান্ড রয়েছে, ব্যবহার করুন: "%2help nameCommand" ব্যবহারের বিবরণ দেখতে!]"',
		"user": "ব্যবহারকারী",
        "adminGroup": "গ্রুপ অ্যাডমিনিস্ট্রেটর",
        "adminBot": "বট অ্যাডমিন"
	},
	"en": {
		"moduleInfo": "「 %1 」\n%2\n\n❯ Usage: %3\n❯ Category: %4\n❯ Waiting time: %5 seconds(s)\n❯ Permission: %6\n\n» Module code by %7 «",
		"helpList": '[ There are %1 commands on this bot, Use: "%2help nameCommand" to know how to use! ]',
		"user": "User",
        "adminGroup": "Admin group",
        "adminBot": "Admin bot"
	}
};

module.exports.handleEvent = function ({ api, event, getText }) {
	const { commands } = global.client;
	const { threadID, messageID, body } = event;

	if (!body || typeof body == "undefined" || body.indexOf("help") != 0) return;
	const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
}

module.exports. run = function({ api, event, args, getText }) {
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const command = commands.get((args[0] || "").toLowerCase());
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	if (!command) {
		const arrayInfo = [];
		const page = parseInt(args[0]) || 1;
    const numberOfOnePage = 20;
    let i = 0;
    let msg = "⟩›»কমান্ড তালিকা«‹⟨\n\n";
    
    for (var [name, value] of (commands)) {
      name += ` ❯ ${value.config.usages}`;
      arrayInfo.push(name);
    }

    arrayInfo.sort((a, b) => a.data - b.data);
    
    const startSlice = numberOfOnePage*page - numberOfOnePage;
    i = startSlice;
    const returnArray = arrayInfo.slice(startSlice, startSlice + numberOfOnePage);
    
    for (let item of returnArray) msg += `「 ${++i} 」 ❯${item}\n`;
    
    const randomText = [ "এমনকি একটি বিচ্ছুতে অল্প পরিমাণে অ্যালকোহল ঢালাও এটিকে পাগল করে দেবে এবং নিজেকে মারার দিকে ধাবিত করবে।" "কুমির তার জিহ্বা বের করতে পারে না।" "বিশ্বের প্রাচীনতম পরিচিত প্রাণী হল 405 বছর বয়সী পুরুষ, 2007 সালে আবিষ্কৃত হয়।" "অন্যান্য মাছের মতো হাঙ্গরদেরও তাদের প্রজনন অঙ্গ পাঁজরের খাঁচায় থাকে।","অক্টোপাসের চোখে কোনো অন্ধ দাগ নেই। গড়ে, একটি অক্টোপাসের মস্তিষ্কে 300 মিলিয়ন নিউরন থাকে। যখন চরম চাপের মধ্যে থাকে, তখন কিছু অক্টোপাস তাদের কাণ্ডও খেয়ে ফেলে।","একটি হাতির মস্তিষ্কের ওজন প্রায় 6,000 গ্রাম, যখন একটি বিড়ালের মস্তিষ্কের ওজন প্রায় 30 গ্রাম।","বিড়াল এবং কুকুরের আল্ট্রাসাউন্ড শোনার ক্ষমতা রয়েছে।","ভেড়ার মস্তিষ্কের ওজন প্রায় 30 গ্রাম। তুষারে চাপা অবস্থায় 2 সপ্তাহ পর্যন্ত বেঁচে থাকে।","পৃথিবীর সবচেয়ে বুদ্ধিমান শূকরটি ম্যাডিসন, উইসকনসিন (মার্কিন যুক্তরাষ্ট্র) এর একজন গণিত শিক্ষকের মালিকানাধীন। এটিতে 12 গুণ করে কার্যপত্রক মুখস্থ করার ক্ষমতা রয়েছে।","পরিসংখ্যান দেখায় যে প্রতিটি র‍্যাটলসাপের মিলন ... 22 ঘন্টারও বেশি সময় পর্যন্ত স্থায়ী হয়", "গবেষণায় দেখা গেছে যে মাছি বধির।","জলের অভাবে, ক্যাঙ্গারুরা উটের চেয়ে বেশি সময় সহ্য করতে পারে।","""কুকুরের পেছনের পায়ে 4টি আঙুল এবং তাদের প্রতিটি সামনের পায়ে 5টি আঙুল থাকে।","মধু মৌমাছির গড় উড়ার গতি 24 কিমি/ঘন্টা। তারা কখনই ঘুমায় না।","তেলাপোকা মাথা কেটে ফেলার পরও 9 দিন পর্যন্ত বাঁচতে পারে।","যদি আপনি একটি সোনার মাছকে দীর্ঘ সময়ের জন্য অন্ধকারে রেখে যান, তাহলে তা শেষ পর্যন্ত সাদা হয়ে যাবে।","এর জন্য উড়ন্ত রেকর্ড। একটি মুরগির বয়স 13 সেকেন্ড।","পৃথিবীতে যে মশাটি মানুষের সবচেয়ে বেশি মৃত্যু ঘটায় তা হল মশা।","টি হাঁসের কোলে প্রতিধ্বনিত হয় না, এবং কেউ জানে না কেন।","সমুদ্র পুকুরের কোন মস্তিষ্ক নেই . তারা এমন কয়েকটি প্রাণীর মধ্যেও রয়েছে যারা তাদের পেট ভিতরে ঘুরিয়ে দিতে পারে।" "টেমাইটগুলি দিনে 24 ঘন্টা সক্রিয় থাকে এবং তারা ঘুমায় না। গবেষণায় আরও দেখা গেছে যে ভারী রক মিউজিক শোনার সময় উইপোকা কাঠকে দ্বিগুণ দ্রুত কুটে খায়।""বাচ্চা জিরাফগুলি সাধারণত 1.8 মিটার উচ্চতা থেকে পড়ে যখন তারা জন্ম নেয়।", "একটি বাঘের কেবল একটি ডোরাকাটা আবরণই নয়, তবে তাদের চামড়াও ডোরাকাটাযুক্ত।"," শকুনরা তাদের ডানা না ঝাপটায় উড়ে যায়।" "টার্কি সঙ্গম ছাড়াই বংশবিস্তার করতে পারে।" "পেঙ্গুইনই একমাত্র পাখি যারা সাঁতার কাটতে পারে, কিন্তু উড়তে পারে না। আর্কটিকেতে কোনো পেঙ্গুইন পাওয়া যায়নি।" "কিং কোবরার বিষ এতটাই বিষাক্ত যে মাত্র এক গ্রাম। 150 জনকে মেরে ফেলতে পারে।","একটি ছোট বিচ্ছুর বিষ একটি বড় বিচ্ছুর বিষের চেয়ে অনেক বেশি বিপজ্জনক।","একটি ঝিনুকের লিঙ্গের দৈর্ঘ্য এতই 'দানব' হতে পারে যে এটি তার শরীরের আকারের 20 গুণ বেশি! ","ইঁদুরের হৃৎপিণ্ড প্রতি মিনিটে 650 বার স্পন্দিত হয়।" "মাছি তার শরীরের দৈর্ঘ্যের 350 গুণ লাফ দিতে পারে। যদি এটি সেই ক্ষমতার অধিকারী হয় তবে একজন মানুষ একবার ফুটবল মাঠের দৈর্ঘ্য লাফ দিতে সক্ষম হবে।" ক্যাঙ্গারু যত দ্রুত লাফ দেয়, তত কম শক্তি খরচ করে।","হাতি এমন কয়েকটি স্তন্যপায়ী প্রাণীর মধ্যে যারা লাফ দিতে পারে না! এটাও আবিষ্কৃত হয়েছে যে হাতিরা মৃত্যুর পরেও দাঁড়িয়ে থাকে।","মাকড়সা এর স্বচ্ছ রক্ত আছে।","শামুক তাদের পায়ে শ্বাস নেয়।","কিছু সিংহ দিনে ৫০ বারের বেশি সঙ্গম করে।","চুট এত দ্রুত প্রজনন করে যে মাত্র 18 মাসে মাত্র 2টি ইঁদুর থেকে, মা সন্তান জন্ম দিতে পারে 1 মিলিয়ন উত্তরাধিকারীর কাছে।","হেজহগ পানিতে ভাসছে।","অ্যালেক্স হলেন বিশ্বের প্রথম আফ্রিকান ধূসর তোতাপাখি যিনি তার নিজের অস্তিত্বকে প্রশ্নবিদ্ধ করেছেন: আমি কি রঙ?।","ফ্ল্যামিঙ্গোদের রঙ গোলাপী-লাল হওয়ার কারণ হল কারণ তারা চিংড়ি এবং চিংড়ির খোসা থেকে রঙ্গক শোষণ করতে পারে যা তারা প্রতিদিন খায়।"," পেঁচা এবং পায়রা মানুষের মুখ মুখস্থ করতে পারে", "হাঙরের চেয়ে গরু বেশি বিপজ্জনক","পিঠে এবং পাখার এক জোড়া ডানা। পিছনের স্টেবিলাইজার মাছিকে একটানা উড়তে সাহায্য করে, কিন্তু তাদের জীবনকাল 14 দিনের বেশি নয়।","এক জোড়া অবিরাম লম্বা পা যা 1.5 মিটার পর্যন্ত উঁচু এবং 20-25 কেজি ওজনের হতে পারে, উটপাখি তার চেয়ে দ্রুত দৌড়াতে পারে। একটি ঘোড়া. এছাড়াও, পুরুষ উটপাখিরা সিংহের মতো গর্জন করতে পারে।","ক্যাঙ্গারুরা তাদের লেজ ব্যবহার করে ভারসাম্য রক্ষার জন্য, তাই আপনি যদি মাটি থেকে ক্যাঙ্গারুর লেজ তুলে দেন, তবে এটি লাফিয়ে ও দাঁড়াতে সক্ষম হবে না।","বাঘের শুধু তাই নয় তাদের পিঠে ডোরাকাটা কিন্তু তাদের ত্বকে মুদ্রিত। প্রতিটি স্বতন্ত্র বাঘ তার নিজস্ব অনন্য ডোরা নিয়ে জন্মায়।" "যদি আপনি একটি কুমির দ্বারা আক্রান্ত হন তবে তাদের ধাক্কা দিয়ে তাদের ধারালো দাঁতগুলি থেকে মুক্তি পাওয়ার চেষ্টা করবেন না। শুধু কুমিরের চোখে খোঁচা দিন, এটাই তাদের দুর্বলতা।","মাছিরা তাদের উচ্চতার 200 গুণ পর্যন্ত লাফ দিতে পারে। এটি নিউইয়র্কের এম্পায়ার স্টেট বিল্ডিং-এ একজন মানুষের ঝাঁপ দেওয়ার সমতুল্য।","একটি বিড়ালের কানে 32টি পর্যন্ত পেশী থাকে। এটি তাদের উচ্চতর শ্রবণ ক্ষমতার অধিকারী করে তোলে","কোয়ালাদের এমন একটি স্বাদ রয়েছে যা সারাজীবনে পরিবর্তিত হয় না, তারা ইউক্যালিপটাস গাছের পাতা ছাড়া প্রায় কিছুই খায় না।","বিভারের দাঁত তার সারাজীবন ধরে বৃদ্ধি পায় না। আপনি যদি দাঁতগুলিকে খুব বেশি লম্বা এবং নিয়ন্ত্রণ করা কঠিন না করতে চান তবে বীভারকে অবশ্যই শক্ত খাবার খেতে হবে যাতে সেগুলি পরা যায়।" "উপকূলীয় পাহাড় বা মোহনায় বসবাসকারী প্রাণীদের অত্যন্ত অদ্ভুত ক্ষমতা থাকে। ঝিনুক সঙ্গমের পদ্ধতির সাথে মিল রাখতে লিঙ্গ পরিবর্তন করতে পারে।","প্রজাপতির চোখ থাকে হাজার হাজার লেন্সের সাথে ক্যামেরার মতো, কিন্তু তারা কেবল লাল, সবুজ এবং হলুদ দেখতে পারে...","বাড়িতে এটি চেষ্টা করবেন না, সত্য হল যে একটি শামুক যদি একটি চোখ হারায় তবে এটি পুনরুদ্ধার করতে পারে।" "জিরাফের একই পরিবারের অন্যান্য প্রাণীর মতো ভোকাল কর্ড থাকে না, তাদের জিহ্বা নীল-কালো।","কুকুরের নাকের ছাপ মানুষের আঙ্গুলের ছাপের মতো এবং বিভিন্ন কুকুর সনাক্ত করতে ব্যবহার করা যেতে পারে।",];
    
    const text = `Page (${page}/${Math.ceil(arrayInfo.length/numberOfOnePage)})\nType: "${prefix}help <command name>" for more details about that command\nCurrently available ${arrayInfo.length} command on ${global.config.BOTNAME} Bot\nUse ${prefix}help
    <Number of pages>\n[DYK]\n✎﹏﹏﹏﹏: ${randomText[Math.floor(Math.random()*randomText.length)]}`;
    return api.sendMessage(msg + "\n" + text, threadID, async (error, info) => {
			if (autoUnsend) {
				await new Promise(resolve => setTimeout(resolve, delayUnsend * 10000));
				return api.unsendMessage(info.messageID);
			} else return;
		});
	}

	return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
};
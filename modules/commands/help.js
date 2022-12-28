module.exports.config = {
	name: "help",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Beginner's Guide",
	commandCategory: "system",
	usages: "[Tên module]",
	cooldowns: 5,
	envConfig: {
		autoUnsend: false,
		delayUnsend: 0
	}
};

module.exports.languages = {
	"vi": {
		"moduleInfo": "「 %1 」\n%2\n\n❯ Cách sử dụng: %3\n❯ Thuộc nhóm: %4\n❯ Thời gian chờ: %5 giây(s)\n❯ Quyền hạn: %6\n\n» Module code by %7 «",
		"helpList": '[ Hiện tại đang có %1 lệnh có thể sử dụng trên bot này, Sử dụng: "%2help nameCommand" để xem chi tiết cách sử dụng! ]"',
		"user": "Người dùng",
        "adminGroup": "Quản trị viên nhóm",
        "adminBot": "Quản trị viên bot"
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
    const numberOfOnePage = 8;
    let i = 0;
    let msg = "command list\n\n";
    
    for (var [name, value] of (commands)) {
      name += 
      arrayInfo.push(name);
    }

    arrayInfo.sort((a, b) => a.data - b.data);
    
    const startSlice = numberOfOnePage*page - numberOfOnePage;
    i = startSlice;
    const returnArray = arrayInfo.slice(startSlice, startSlice + numberOfOnePage);
    
    for (let item of returnArray) msg += `${++i}. ${global.config.PREFIX}${item}\n`; 
    
    const randomText = [ "Even a small amount of alcohol poured on a scorpion will drive it crazy and sting itself to death."," The crocodile can't stick its tongue out.","The oldest known animal in the world is a 405-year-old male, discovered in 2007.","Sharks, like other fish, have their reproductive organs located in the ribcage.","The eyes of the octopus have no blind spots. On average, the brain of an octopus has 300 million neurons. When under extreme stress, some octopuses even eat their trunks.","An elephant's brain weighs about 6,000g, while a cat's brain weighs only approximately 30g.","Cats and dogs have the ability to hear ultrasound.","Sheep can survive up to 2 weeks in a state of being buried in snow.","The smartest pig in the world is owned by a math teacher in Madison, Wisconsin (USA). It has the ability to memorize worksheets multiplying to 12.","Statistics show that each rattlesnake's mating lasts up to ... more than 22 hours", "Studies have found that flies are deaf.","In a lack of water, kangaroos can endure longer than camels.","","Dogs have 4 toes on their hind legs and 5 toes on each of their front paws.","The average flight speed of honey bees is 24km/h. They never sleep.","Cockroaches can live up to 9 days after having their heads cut off.","If you leave a goldfish in the dark for a long time, it will eventually turn white.","The flying record for a chicken is 13 seconds.","The mosquito that causes the most deaths to humans worldwide is the mosquito.","TThe quack of a duck doesn't resonate, and no one knows why.","Sea pond has no brain. They are also among the few animals that can turn their stomachs inside out.","Termites are active 24 hours a day and they do not sleep. Studies have also found that termites gnaw wood twice as fast when listening to heavy rock music.","Baby giraffes usually fall from a height of 1.8 meters when they are born.", "A tiger not only has a striped coat, but their skin is also streaked with stripes.."," Vultures fly without flapping their wings.","Turkeys can reproduce without mating.","Penguins are the only birds that can swim, but not fly. Nor have any penguins been found in the Arctic."," The venom of the king cobra is so toxic that just one gram can kill 150 people.","The venom of a small scorpion is much more dangerous than the venom of a large scorpion.","The length of an oyster's penis can be so 'monstrous' that it is 20 times its body size!","Rat's heart beats 650 times per minute.","The flea can jump 350 times its body length. If it also possessed that ability, a human would be able to jump the length of a football field once.","The faster the kangaroo jumps, the less energy it consumes.","Elephants are among the few mammals that can't jump! It was also discovered that elephants still stand after death.","Spiders have transparent blood."," Snails breathe with their feet.","Some lions mate more than 50 times a day.","Chuột reproduce so quickly that in just 18 months, from just 2 mice, the mother can give birth to 1 million heirs.","Hedgehog floats on water.","Alex is the world's first African gray parrot to question its own existence: What color am I?.","The reason why flamingos are pink-red in color is because they can absorb pigments from the shells of shrimp and shrimp that they eat every day."," Owls and pigeons can memorize human faces", "Cows are more dangerous than sharks","The single pair of wings on the back and the rear stabilizer help the flies to fly continuously, but their lifespan is not more than 14 days.","With a pair of endlessly long legs that can be up to 1.5 m high and weigh 20-25 kg, the ostrich can run faster than a horse. In addition, male ostriches can roar like a lion.","Kangaroos use their tails for balance, so if you lift a Kangaroo's tail off the ground, it won't be able to jump and stand.","Tigers not only have stripes on their backs but also printed on their skin. Each individual tiger is born with its own unique stripe.","If you are being attacked by a crocodile, do not try to get rid of their sharp teeth by pushing them away. Just poke the crocodile in the eye, that's their weakness.","Fleas can jump up to 200 times their height. This is equivalent to a man jumping on the Empire State Building in New York.","A cat has up to 32 muscles in the ear. That makes them have superior hearing ability","Koalas have a taste that does not change throughout life, they eat almost nothing but .. leaves of the eucalyptus tree.","The beaver's teeth do not stop growing throughout its life. If you do not want the teeth to be too long and difficult to control, the beaver must eat hard foods to wear them down.","Animals living in coastal cliffs or estuaries have extremely weird abilities. Oysters can change sex to match the mating method.","Butterflies have eyes with thousands of lenses similar to those on cameras, but they can only see red, green, and yellow..","Don't try this at home, the truth is that if a snail loses an eye, it can recover.","Giraffes do not have vocal cords like other animals of the same family, their tongues are blue-black.","Dog nose prints are like human fingerprints and can be used to identify different dogs.","alam nyo ba na ang pogi ni ken yung owner ng bot laki pa ng tite",];
    
    const text = `{page (${page}/${Math.ceil(arrayInfo.length/numberOfOnePage)}) \n\n help 1 help 2}\n \n  
🧩Currently Available Commands🧩

🌀🔸 Category: Group Admin

👉1.all
👉2.box info
👉3.resend
👉4.fbuser -fbuser id remove
👉5.kick - Member Remove
👉6.antiout - Auto Added Member
👉7.antiflood -
👉8.antijoin - Join Noti
👉9.autoreply - Set auto reply
👉10.unsend - Check Unsend Message
👉11.boxemoji - set emoji
👉12.boximage - set image
👉13.setall - Onlyadmin setting.
👉14. advice - উক্তি

🌀🔹Category ISLAM 🔸

👉1.হাদিস - হাদিস বাংলা
👉2.Hadis - বাংলা পিক হাদিস,
👉3.Dua - ইসলামিক প্রয়োজনীয় দোয়া সমূহ,
👉4.HZALI - হজরত আলি (রাঃ) এর উক্তি.
👉5.Death - 😓😭

🌀🔹Category: All User Used Command🔸

👉1.uid - আপনার নিজের আইডি Cord
👉2.trans - Language Translator
👉3.search - Google Searcher
👉4.imagesearch - 🔎 Searching for image...
👉5.jail - জেল খানা.
👉6.idbox - Box number 
👉7.kiss - চুম্মা চুম্মি🤫
👉8.marry - শুভ বিবাহ 😘
👉9.couple - Couple pick
👉10.Love - Love ℅ ♥
👉11.LOVEU- ভালোবাসার উক্তি
👉12.mystery - অলৌকিক শক্তি.
👉13.rip - 😪মরে জাওয়া😓
👉14.setneme - ইউজার নাম চেঞ্জ
👉15.mems - Some Funny Memes
👉16.poop - কাবাবের হাড্ডি.
👉17.Shortlink - Original url: undefined
👉18.spank - Try to use THIS Command Funny.
👉19.ss - full Link Page  Screenshots
👉20.vb - Bangla Voice
👉21.ve - English Voice
👉22.math - Solve Mathematics
👉23.covid - For try Again.
👉24.movie - All information.
👉25.pic - Pic search 
👉26.rname - Random Nicknames

🌀🔸Category: Fun Post🔹

👉1.toilet - Funny Post ওয়াশরুম.
👉2.Trump - Twitter funny post
👉3.zuck - Zuckerberg Funny post
👉4.mark - Mark Zuckerberg  Comment
👉5.poutine - আমার ছোট ভাই পুতিন এর সাথে মিটিং.
👉6.Obama - Twitter Funny Post
👉7.Kader - Facebook post Obaidul Kader
👉8.lexi - Lexi Lore funny post
👉9.phub - Post the content of the comment on ponhub
👉10.Mia - Mia khalifa Fun post
👉11.Sunny - sunny leyon Fun post
👉12.sefuda - sefatullal Fun post

🌀🔸Category: Cover Making 🔹

👉1.fbcover - Facebook cover mack
👉2.fbcover2 - Facebook cover mack 2
👉3.Card - simply Parsonal Card

🌀🔹Category: Music Player & Video Downloader🔸

👉1.tiksearch - [Tiktok] Enter the character to search for! Song artist name.
👉2.yt2mp3 - YouTube to Mp3
👉3.yt2mp4 - YouTube to Mp4
👉4.ytsearch - YouTube Video Search
👉5.video - Yt Video
👉6.Song - Y26t Song all
👉7.lyrics - ♩ গান এর লিরিক্স.
👉8.sing - yt song
👉9.fbvideo - facebook video downlood.

🌀🔸Category Repot Admin🔹

👉1.report - (যে কোন সমস্যা হলে রিপোর্ট লিখে রিপোর্ট করুন)

🌀🔸Category: ROBOT🔹

👉1.Meta - Meta is all bangla auto robot

✅Reply & Pick a Number to See How to Use The Command 😴

⚡️More Coming Soon⚡️

✅ For More Contact With Bot Developer :
Shahriyar Sojib Hasan
Email : shahriyarsojibhasan@gmail.com 
FB Link : https://www.facebook.com/shahriyarsojibhasan
    
😊RoBot কিনতে চাইলে নাম্বারে কল দিন💚/
Whatsapp : https://wa.me/+17038296309`;
    return api.sendMessage(msg + "\n" + text, threadID, async (error, info) => {
			if (autoUnsend) {
				await new Promise(resolve => setTimeout(resolve, delayUnsend * 10000));
				return api.unsendMessage(info.messageID);
			} else return;
		});
	}

	return

api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
};
const fs = require("fs");
module.exports.config = {
	name: "shahriyar",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "abir",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("@Shahriyar Sojib Hasan")==0 || event.body.indexOf("@Shahriyar Sojib Hasan")==0 || event.body.indexOf("@Shahriyar Sojib Hasan")==0 || event.body.indexOf("@মি্ঁষ্টা্ঁর্ঁ সা্ঁকি্ঁব্ঁ")==0 || event.body.indexOf("@Shahriyar Sojib Hasan")==0 || event.body.indexOf("@Shahriyar Sojib Hasan")==0 || event.body.indexOf("@মি্ঁষ্টা্ঁর্ঁ সা্ঁকি্ঁব্ঁ")==0 || event.body.indexOf("@Shahriyar Sojib Hasan")==0 || event.body.indexOf("@Shahriyar Sojib Hasan")==0 || event.body.indexOf("@Shahriyar Sojib Hasan")==0) {
		var msg = {
				body: "শাহরিয়ার অথবা সা্ঁকি্ঁব্ঁ এ্ঁখ্ঁন্ঁ খু্ঁব্ঁ বি্ঁজি্ঁ 🥰❤️🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/bossbusy.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
const fs = require("fs");
module.exports.config = {
	name: "😤",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "😤",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😡")==0 || event.body.indexOf("🤬")==0 || event.body.indexOf("😤")==0 || event.body.indexOf("😠")==0) {
		var msg = {
				body: "লাস্ট ওয়ার্নিং দিচ্ছি বেশি রাগ দেখল মাথায় গাট্টি মেরে ফ্রিজ এ ঢুকিয়ে দিব😤🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/angry2.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤣", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
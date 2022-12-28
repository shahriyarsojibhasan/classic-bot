const fs = require("fs");
module.exports.config = {
	name: "hihlw",
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
	if (event.body.indexOf("amogus")==0 || event.body.indexOf("Amogus")==0 || event.body.indexOf("hi")==0 || event.body.indexOf("HI")==0 || event.body.indexOf("Hi")==0 || event.body.indexOf("HLW")==0 || event.body.indexOf("Hlw")==0 || event.body.indexOf("👋")==0 || event.body.indexOf("✋")==0 || event.body.indexOf("Hy gys")==0 || event.body.indexOf("hlw")==0) {
		var msg = {
				body: "হাই গায়েস হ্যালো আপনারা সবাই কি করতেছেন🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/hihlw.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("👋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
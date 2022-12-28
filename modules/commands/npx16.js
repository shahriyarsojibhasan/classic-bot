const fs = require("fs");
module.exports.config = {
	name: "🐈",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🐈",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("amogus")==0 || event.body.indexOf("Amogus")==0 || event.body.indexOf("🐈")==0 || event.body.indexOf("🐾")==0 || event.body.indexOf("😹")==0 || event.body.indexOf("😸")==0 || event.body.indexOf("😺")==0 || event.body.indexOf("mew")==0 || event.body.indexOf("Mew")==0 || event.body.indexOf("MEW")==0 || event.body.indexOf("মে্ঁও্ঁ")==0 || event.body.indexOf("মেও")==0 || event.body.indexOf("Meo")==0 || event.body.indexOf("meo")==0 || event.body.indexOf("MEO")==0 || event.body.indexOf("cat")==0 || event.body.indexOf("CAT")==0 || event.body.indexOf("Cat")==0 || event.body.indexOf("বিলাই")==0 || event.body.indexOf("বিড়াল")==0 || event.body.indexOf("ছানা")==0 || event.body.indexOf("pussy cat")==0 || event.body.indexOf("😻")==0) {
		var msg = {
				body: "মে্ঁও্ঁ মে্ঁও্ঁ🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/mcat.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😽", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
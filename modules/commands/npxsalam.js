const fs = require("fs");
module.exports.config = {
	name: "সালাম",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "❤️",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("amogus")==0 || event.body.indexOf("Amogus")==0 || event.body.indexOf("As-salamu alaykum")==0 || event.body.indexOf(" ٱلسَّلَامُ عَلَيْكُمْ")==0 || event.body.indexOf("আস-সালামু আলাইকুম")==0 || event.body.indexOf("Assalamu wlaikum")==0 || event.body.indexOf("আসসালামু আলাইকুম")==0 || event.body.indexOf("assalamu alaikum")==0 || event.body.indexOf("salam")==0 || event.body.indexOf("assalamualaikum")==0 || event.body.indexOf("আসসালামুয়ালাইকুম")==0 || event.body.indexOf("সালাম")==0 ) {
		var msg = {
				body: "-ওয়ালাইকুমুস সালাম-🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/sssala.gif`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
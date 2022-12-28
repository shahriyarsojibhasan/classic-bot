module.exports.config = {
	name: "uid",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Rup Kumar",
	description: "Get your user ID",
	commandCategory: "other",
	cooldowns: 5
};

module.exports.run = function({ api, event }) {
	if (Object.keys(event.mentions) == 0) return api.sendMessage(`ðŸ“Ž Your User ID: \n${event.senderID}\n\nðŸ“ŽYour Messenger Chat Link:\nm.me/${event.senderID}\n\nðŸ“ŽYour Facebook Profile Link:\nwww.facebook.com/${event.senderID}`, event.threadID, event.messageID);
	else {
		for (var i = 0; i < Object.keys(event.mentions).length; i++) api.sendMessage(`${Object.values(event.mentions)[i].replace('@', '')}: ${Object.keys(event.mentions)[i]}`, event.threadID);
		return;
	}
  }
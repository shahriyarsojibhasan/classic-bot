module.exports.config = {
	name: "wiki",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Find everything you need to know through Wikipedia",
	commandCategory: "study",
	usages: "[en] [information to look for]",
	cooldowns: 1,
	dependencies: {
        "wikijs": ""
    }
}

module.exports.languages = {
    "vi": {
        "missingInput": "আপনার যা অনুসন্ধান করতে হবে তা লিখুন !",
        "returnNotFound": "%1 খুঁজে পাওয়া যাচ্ছে না।"
    },
    "en": {
        "missingInput": "আপনার যা অনুসন্ধান করতে হবে তা লিখুন।",
        "returnNotFound": "%1 খুঁজে পাওয়া যাচ্ছে না । "
    }
}

module.exports.run = ({ event, args, api, getText }) => {
    const wiki = (global.nodemodule["wikijs"]).default;
    let content = args.join(" ");
    let url = 'https://bn.wikipedia.org/w/api.php';
    if (args[0] == "bn") {
        url = 'https://bn.wikipedia.org/w/api.php'; 
        content = args.slice(1, args.length);
    }
    if (!content) return api.sendMessage(getText("missingInput"), event.threadID, event.messageID);
    return wiki({ apiUrl: url }).page(content).catch(() => api.sendMessage(getText("returnNotFound", content), event.threadID, event.messageID)).then(page => (typeof page != 'undefined') ? Promise.resolve(page.summary()).then(val => api.sendMessage(val, event.threadID, event.messageID)) : '');

}
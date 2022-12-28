const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "valobasa",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Hungcatmoi",
  description: "hug the user tagged",
  commandCategory: "general",
  usages: "hug [Tag someone you need to hug]",
  cooldowns: 5,
};


module.exports.run = async ({ api, event, args }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
    var out = (msg) => api.sendMessage(msg, event.threadID, event.messageID);
  if (!args.join("")) return out("দয়া করে কাউকে ট্যাগ করুন");
  else
  return axios.get('https://api.satou-chan.xyz/api/endpoint/cuddle').then(res => {
        let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
        var mention = Object.keys(event.mentions)[0];
                  let tag = event.mentions[mention].replace("@", "");    
        
 let callback = function () {
            api.setMessageReaction("✅", event.messageID, (err) => {}, true);
        api.sendMessage({
						        body: "তোমাকে শক্ত করে জড়িয়ে ধরে " + tag + "☺️\n\nকখনও কখনও আপনার যা প্রয়োজন তা হল আলিঙ্গন",
                                          mentions: [{
          tag: tag,
          id: Object.keys(event.mentions)[0]
        }],
						attachment: fs.createReadStream(__dirname + `/cache/hug.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/hug.${ext}`), event.messageID)
				};
 //   }
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/hug.${ext}`)).on("close", callback);
			})
    .catch(err => {
                     api.sendMessage("GIF তৈরি করতে ব্যর্থ হয়েছে, নিশ্চিত হন যে আপনি কাউকে ট্যাগ করেছেন !", event.threadID, event.messageID);
    api.setMessageReaction("☹️", event.messageID, (err) => {}, true);
                  })     
}

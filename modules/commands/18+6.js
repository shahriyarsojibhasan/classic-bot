module.exports.config = {
	name: "20",
	version: "1.0.3",
	hasPermssion: 0,
	credits: "Thiệu Trung Kiên",
	description: "Xem ảnh réply",
	commandCategory: "Tiện ích",
	cooldowns: 5,
	dependencies: {
		axios: ""
	}
}, module.exports.run = async function({
	event: e,
	api: a,
	args: n
}) {
	if (!n[0]) return a.sendMessage(" 💌 এই ল মেয়ের লিস্ট \n\n𝟙। 𝐀̉𝐧𝐡 𝐆𝐚́𝐢 💞 \n𝟚. 𝐓𝐫𝐚𝐢 💕\n𝟛. 𝐌𝐨̂𝐧𝐠 🍑\n𝟜। 𝟔 𝐌𝐮́𝐢 \n𝟝। 𝐍𝐮𝐝𝐞 🌚\n𝟞। 𝐂𝐨𝐬𝐩𝐥𝐚𝐲 \n𝟟. 𝐀𝐧𝐢𝐦𝐞 🦄\n𝟠। 𝐒𝐞𝐱𝐲 🔥\n𝟡. 𝐊𝐚𝐧𝐚 🌸\n𝟙𝟘। 𝐃𝐮́ 🎀\n𝟙𝟙। 𝐇𝐞𝐧𝐭𝐚𝐢 \n𝟙𝟚. 𝐉𝐢𝐦𝐦𝐲 \n𝟙𝟛। 𝐓𝐰𝐢𝐭𝐭𝐞𝐫 \n𝟙𝟜। 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 \n𝟙𝟝. 𝐖𝐢𝐛𝐮 🌸\n𝟙𝟞। 𝐋𝐨𝐥𝐢 📌\n𝟙𝟟. \n\n কোন মাইয়া লাগবো রিপ্লে দে", e.threadID, ((a, n) => {
		global.client.handleReply.push({
			name: this.config.name,
			messageID: n.messageID,
			author: e.senderID,
			type: "create"
		})
	}), e.messageID)
}, module.exports.handleReply = async ({
	api: e,
	event: a,
	client: n,
	handleReply: t,
	Currencies: s,
	Users: i,
	Threads: o
}) => {
	var { p, h } = linkanh();

	if ("create" === t.type) {
		const n = (await p.get(h)).data.url;
		let t = (await p.get(n, {
			responseType: "stream"
		})).data;
		return e.sendMessage({
			body: "মাইয়া ta দারুন সুন্দর",
			attachment: t
		}, a.threadID, a.messageID)
	}

    function linkanh() {
        const p = require("axios");
        if ("1" == a.body)
            var h = "https://tuandz.herokuapp.com/images/girl";
        else if ("2" == a.body)
         var   h = "https://tuandz.herokuapp.com/images/trai";
        else if ("3" == a.body)
         var   h = "https://tuandz.herokuapp.com/images/mong";
        else if ("4" == a.body)
          var  h = "https://tuandz.herokuapp.com/images/saumui";
        else if ("5" == a.body)
          var  h = "https://tuandz.herokuapp.com/images/nude";
        else if ("6" == a.body)
          var  h = "https://tuandz.herokuapp.com/images/cosplay";
        else if ("7" == a.body)
          var  h = "https://tuandz.herokuapp.com/images/anime";
        else if ("8" == a.body)
          var  h = "https://tuandz.herokuapp.com/images/girlsexy";
        else if ("9" == a.body)
         var   h = "https://apikanna.khoahoang3.repl.co/";
        else if ("10" == a.body)
         var  h = "https://tuandz.herokuapp.com/images/du";
        else if ("11" == a.body)
          var  h = "https://tuandz.herokuapp.com/images/hentai";
        else if ("12" == a.body)
          var  h = "https://jimmy.ocvat2810.repl.co";
        else if ("13" == a.body)
          var  h = "https://tuandz.herokuapp.com/images/tw";
        else if ("14" == a.body)
         var   h = "https://tuandz.herokuapp.com/images/ig";
        else if ("15" == a.body)
         var   h = "https://wibu.ocvat2810.repl.co";
        else if ("16" == a.body)
          var  h = "https://tuandz.herokuapp.com/images/loli";
        else if ("17" == a.body)
          var  h = "https://tuandz.herokuapp.com/images/naughty";
        return { p, h };
    }
};
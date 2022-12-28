module.exports.config = {
	name: "sing2",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Play music via YouTube link, SoundCloud or search keyword",
	commandCategory: "media",
	usages: "[link or content need search]",
	cooldowns: 10,
	dependencies: {
		"ytdl-core": "",
		"simple-youtube-api": "",
		"soundcloud-downloader": "",
		"fs-extra": "",
		"axios": ""
	},
	envConfig: {
		"YOUTUBE_API": "AIzaSyCOTZTEzTydcXuetconkxZUjEXKiPMDpG0",
		"SOUNDCLOUD_API": "M4TSyS6eV0AcMynXkA3qQASGcOFQTWub"
	}
};

module.exports.handleReply = async function({ api, event, handleReply }) {
	const ytdl = global.nodemodule["ytdl-core"];
	const { createReadStream, createWriteStream, unlinkSync, statSync } = global.nodemodule["fs-extra"];
	ytdl.getInfo(handleReply.link[event.body - 1]).then(res => {
	let body = res.videoDetails.title;
	api.sendMessage(`আপনার গান টি SSH BOT প্রস্তুত করছে !\n◆━━━━━━━━━━━━━◆\n${body}\n◆━━━━━━━━━━━━━◆\nঅনুগ্রহ করে অপেক্ষা করুন !`, event.threadID, (err, info) =>
	setTimeout(() => {api.unsendMessage(info.messageID) } , 10000));
    });
	try {
		ytdl.getInfo(handleReply.link[event.body - 1]).then(res => {
		let body = res.videoDetails.title;
		ytdl(handleReply.link[event.body - 1])
			.pipe(createWriteStream(__dirname + `/cache/${handleReply.link[event.body - 1]}.m4a`))
			.on("close", () => {
				if (statSync(__dirname + `/cache/${handleReply.link[event.body - 1]}.m4a`).size > 26214400) return api.sendMessage('বড় আকারের 25MB এর কারণে ফাইলটি পাঠাতে পারছি না। আপনি চাইলে /sing দিয়ে গান শুনতে পারেন । ধন্যবাদ', event.threadID, () => unlinkSync(__dirname + `/cache/${handleReply.link[event.body - 1]}.m4a`), event.messageID);
				else return api.sendMessage({body : `${body}`, attachment: createReadStream(__dirname + `/cache/${handleReply.link[event.body - 1]}.m4a`)}, event.threadID, () => unlinkSync(__dirname + `/cache/${handleReply.link[event.body - 1]}.m4a`), event.messageID)
			})
			.on("error", (error) => api.sendMessage(`অনুরোধ প্রক্রিয়া করার সময় একটি সমস্যা ছিল, ত্রুটি:\n${error}`, event.threadID, event.messageID));
		});
		}
	catch {
		api.sendMessage("আপনার অনুরোধ প্রক্রিয়া করা যায়নি!", event.threadID, event.messageID);
	}
	return api.unsendMessage(handleReply.messageID);
}

module.exports.run = async function({ api, event, args }) {
	const ytdl = global.nodemodule["ytdl-core"];
	const YouTubeAPI = global.nodemodule["simple-youtube-api"];
	const scdl = global.nodemodule["soundcloud-downloader"].default;
	const axios = global.nodemodule["axios"];
	const { createReadStream, createWriteStream, unlinkSync, statSync } = global.nodemodule["fs-extra"];
	
	const youtube = new YouTubeAPI(global.configModule[this.config.name].YOUTUBE_API);
	const keyapi = global.configModule[this.config.name].YOUTUBE_API
	if (args.length == 0 || !args) return api.sendMessage('অনুসন্ধান ক্ষেত্র খালি হতে পারে না!The search field cannot be empty!', event.threadID, event.messageID);
	const keywordSearch = args.join(" ");
	const videoPattern = /^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
	const scRegex = /^https?:\/\/(soundcloud\.com)\/(.*)$/;
	const urlValid = videoPattern.test(args[0]);
	
	if (urlValid) {
		try {
			ytdl.getInfo(args[0]).then(res => {
			let body = res.videoDetails.title;
			var id = args[0].split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
            (id[2] !== undefined) ? id = id[2].split(/[^0-9a-z_\-]/i)[0] : id = id[0];
			ytdl(args[0])
				.pipe(createWriteStream(__dirname + `/cache/${id}.m4a`))
				.on("close", () => {
					if (statSync(__dirname + `/cache/${id}.m4a`).size > 26214400) return api.sendMessage('ফাইল পাঠানো যাবে না কারণ এটি 25MB এর থেকে বড়। আপনি চাইলে /sing দিয়ে গান শুনতে পারেন । ধন্যবাদ ', event.threadID, () => unlinkSync(__dirname + `/cache/${id}.m4a`), event.messageID);
					else return api.sendMessage({body : `${body}`, attachment: createReadStream(__dirname + `/cache/${id}.m4a`)}, event.threadID, () => unlinkSync(__dirname + `/cache/${id}.m4a`) , event.messageID)
				})
				.on("error", (error) => api.sendMessage(`There was a problem while processing the request, error: \n${error}`, event.threadID, event.messageID));
			});
			}
		catch (e) {
			console.log(e);
			api.sendMessage("আপনার অনুরোধ প্রক্রিয়া করা যায়নি!", event.threadID, event.messageID);
		}

	}
	else if (scRegex.test(args[0])) {
		let body;
		try {
			var songInfo = await scdl.getInfo(args[0], global.configModule[this.config.name].SOUNDCLOUD_API);
			var timePlay = Math.ceil(songInfo.duration / 1000);
			body = `Title: ${songInfo.title} | ${(timePlay - (timePlay %= 60)) / 60 + (9 < timePlay ? ':' : ':0') + timePlay}]`;
		}
		catch (error) {
			if (error.statusCode == "404") return api.sendMessage("উপরের লিঙ্কের মাধ্যমে আপনার গান খুঁজে পাওয়া যায়নি ;w;
", event.threadID, event.messageID);
			api.sendMessage("একটি ত্রুটির কারণে অনুরোধটি প্রক্রিয়া করা যায়নি: " + error.message, event.threadID, event.messageID);
		}
		try {
			await scdl.downloadFormat(args[0], scdl.FORMATS.OPUS, global.configModule[this.config.name].SOUNDCLOUD_API ? global.configModule[this.config.name].SOUNDCLOUD_API : undefined).then(songs => songs.pipe(createWriteStream(__dirname + "/cache/music.mp3")).on("close", () => api.sendMessage({ body, attachment: createReadStream(__dirname + "/cache/music.mp3" )}, event.threadID, () => unlinkSync(__dirname + "/cache/music.mp3"), event.messageID)));
		}
		catch (error) {
			await scdl.downloadFormat(args[0], scdl.FORMATS.MP3, global.configModule[this.config.name].SOUNDCLOUD_API ? global.configModule[this.config.name].SOUNDCLOUD_API : undefined).then(songs => songs.pipe(createWriteStream(__dirname + "/cache/music.mp3")).on("close", () => api.sendMessage({ body, attachment: createReadStream(__dirname + "/cache/music.mp3" )}, event.threadID, () => unlinkSync(__dirname + "/cache/music.mp3"), event.messageID)));
		}
	}
	else {
		try {
			var link = [], msg = "", num = 0;
			var results = await youtube.searchVideos(keywordSearch, 5);
			for (let value of results) {
				if (typeof value.id == 'undefined') return;
				link.push(value.id);
				let datab = (await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${value.id}&key=${keyapi}`)).data;
				let gettime = datab.items[0].contentDetails.duration;
				let time = (gettime.slice(2));
				let datac = (await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${value.id}&key=${keyapi}`)).data;
				let channel = datac.items[0].snippet.channelTitle;
				msg += (`${num+=1}. ${value.title}\nTime: ${time}\nChannel: ${channel}\n◆━━━━━━━━━━━━━◆\n`);
			}
			return api.sendMessage(`🎼  ${link.length} ফলাফল আপনার অনুসন্ধান কীওয়ার্ড মিলেছে: \n${msg}\nঅনুগ্রহ করে উত্তর দিন (প্রতিক্রিয়া) উপরের অনুসন্ধানগুলির মধ্যে একটি বেছে নিন\nগানের সময় সর্বাধিক 10M!`, event.threadID,(error, info) => global.client.handleReply.push({ name: this.config.name, messageID: info.messageID, author: event.senderID, link }), event.messageID);
		}
		catch (error) {
			api.sendMessage("একটি ত্রুটির কারণে অনুরোধটি প্রক্রিয়া করা যায়নি:" + error.message, event.threadID, event.messageID);
		}
	}
  }
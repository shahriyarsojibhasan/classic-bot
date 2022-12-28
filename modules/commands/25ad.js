module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Joshua Sy", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.postimg.cc/X7tTy1P0/FB-IMG-1663695881848.jpg", 
            
            "https://i.postimg.cc/pdrGGD4B/Pics-Art-09-19-10-08-36.jpg", 
            
            "https://i.postimg.cc/zDhJ2W15/Pics-Art-08-17-01-37-39.jpg",
            
            "https://i.postimg.cc/T3zLFxHH/Pics-Art-09-01-08-16-59.jpg"];
  
var callback = () => api.sendMessage({body:`এডমিন এবং বট এর তথ্য

বট নাম : ${global.config.BOTNAME}

এডমিন : { শাহরিয়ার সজিব হাসান }

প্রোফাইল লিংক : https://www.facebook.com/shahriyarsojibhasan

PREFIX : ${global.config.PREFIX}

মালিক : 『King Shahriyar』 

➟ UPTIME

আজ সময় : ${juswa} 

BOT চলছে ${hours}:${minutes}:${seconds}.

ধন্যবাদ আমার বট ব্যাবহার এর জন্য ${global.config.BOTNAME} 『🙅🖤』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
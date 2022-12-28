module.exports.config = {
    name: "adbot",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Mirai Team",
    description: "",
    commandCategory: "Media",
    usages: "",
    cooldowns: 4,
    dependencies: {
        "request": "",
        "fs": ""
    }
    
};

module.exports.run = async({api,event,args}) => {
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const threadSetting = global.data.threadData.get(parseInt(event.threadID)) || {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
     if (args.length == 0) return api.sendMessage(`আপনি ব্যবহার করতে পারেন:\n\n${prefix}${this.config.name} user => এটি আপনার নিজস্ব তথ্য নেবে।\n\n${prefix}${this.config.name} ব্যবহারকারী @[ট্যাগ ] => এটি ফ্রেন্ড ইনফরমেশন ট্যাগ পাবে।\n\n${prefix}${this.config.name} বক্স => এটি আপনার বক্সের তথ্য পাবে (সদস্যদের সংখ্যা, একে অপরের ডিজেটি,...)\n \n${prefix}${this.config.name} ব্যবহারকারী বক্স [uid || tid.:\n\n${prefix}${this.config.name} admin => অ্যাডমিন বটের ব্যক্তিগত তথ্য]`, event.threadID, event.messageID);
    if (args[0] == "box") {
           if(args[1]){ let threadInfo = await api.getThreadInfo(args[1]);
           let imgg = threadInfo.imageSrc;
           var gendernam = [];
            var gendernu = [];
                for (let z in threadInfo.userInfo) {
                var gioitinhone = threadInfo.userInfo[z].gender;
                if(gioitinhone == "MALE"){gendernam.push(gioitinhone)
                }else{gendernu.push(gioitinhone)
                }};
             var nam = gendernam.length;
             var nu = gendernu.length;
             let sex = threadInfo.approvalMode;
       var pd = sex == false ? "Turn off" : sex == true ? "turn on" : "NS";
       if(!imgg) api.sendMessage(`গ্রুপের নাম: ${threadInfo.threadName}\nTID: ${args[1]}\nঅনুমোদিত: ${pd}\nইমোজি: ${threadInfo.emoji}\nতথ্য: \n»${threadInfo.participantIDs.length} সদস্যরা এবং ${threadInfo.adminIDs.length} অ্যাডমিনিস্ট্রেটর৷\n»${nam} ছেলে এবং ${nu} মহিলা সহ৷\n»মোট বার্তার সংখ্যা: ${threadInfo.messageCount}.`,event.threadID,event৷ messageID);
         else var কলব্যাক = () => api.sendMessage({body:`গ্রুপের নাম: ${threadInfo.threadName}\nTID: ${args[1]}\nঅনুমোদিত: ${pd}\nইমোজি: ${threadInfo.emoji }\nতথ্য: \n»${threadInfo.participantIDs.length} সদস্য এবং ${threadInfo.adminIDs.length}প্রশাসক৷\n»${nam} ছেলে এবং ${nu} মহিলা সহ৷\n»মোট বার্তার সংখ্যা : ${threadInfo.messageCount}।`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID); 
      return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
      
      }
          
            let threadInfo = await api.getThreadInfo(event.threadID);
            let img = threadInfo.imageSrc;
            var gendernam = [];
            var gendernu = [];
                for (let z in threadInfo.userInfo) {
                var gioitinhone = threadInfo.userInfo[z].gender;
                if(gioitinhone == "MALE"){gendernam.push(gioitinhone)
                }else{gendernu.push(gioitinhone)
                }};
             var nam = gendernam.length;
             var nu = gendernu.length;
             let sex = threadInfo.approvalMode;
       var pd = sex == false ? "Turn off" : sex == true ? "turn on" : "NS";
          if(!img) api.sendMessage(`Group name: ${threadInfo.threadName}\nTID: ${event.threadID}\nApproved: ${pd}\nEmoji: ${threadInfo.emoji}\nInformation: \n»${threadInfo.participantIDs.length} members and ${threadInfo.adminIDs.length} administrators.\n»Including ${nam} boy and ${nu} nữ.\n»Total number of messages: ${threadInfo.messageCount}.`,event.threadID,event.messageID)
          else  var callback = () => api.sendMessage({body:`Group name: ${threadInfo.threadName}\nTID: ${event.threadID}\nBrowser: ${pd}\nEmoji: ${threadInfo.emoji}\nInformation: \n»${threadInfo.participantIDs.length} members and ${threadInfo.adminIDs.length} administrators.\n»Including ${nam} boy and ${nu} female.\n»Total number of messages: ${threadInfo.messageCount}.`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID);   
      return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
               if (args.length == 0) return api.sendMessage(`আপনি ব্যবহার করতে পারেন:\n\n${prefix}${this.config.name} user => এটি আপনার নিজস্ব তথ্য পাবে।\n\n${prefix}${this.config.name} ব্যবহারকারী @[ট্যাগ ] => এটি আপনি যাকে ট্যাগ করবেন তার তথ্য পাবেন।\n\n${prefix}${this.config.name} বক্স => এটি আপনার বক্সের তথ্য পাবে (সদস্যের সংখ্যা, একে অপরকে djt,... .)\n\n${prefix}${this.config.name} ব্যবহারকারী বক্স [uid || tid]`, event.threadID, event.messageID);
    if (args[0] == "admin") {
      var callback = () => api.sendMessage(
  {body:`———»ADMIN «———\n❯ Name: Shahriyar Sojib Hasan \n❯ Facebook: https://www.facebook.com/shahriyarsojibhasan \n❯ ${global.config.BOTNAME} ব্যবহার করার জন্য ধন্যবাদ`,
    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/100029949729429/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    
      };

if (args[0] == "user") { 
    if(!args[1]){
    if(event.type == "message_reply") id = event.messageReply.senderID
    else id = event.senderID;
    let data = await api.getUserInfo(id);
    let url = data[id].profileUrl;
    let b = data[id].isFriend == false ? "are not !" : data[id].isFriend == true ? "Yes !" : "Damn";
    let sn = data[id].vanity;
    let name = await data[id].name;
    var sex = await data[id].gender;
    var gender = sex == 2 ? "Male" : sex == 1 ? "Female" : "Tran Duc Bo";
    var callback = () => api.sendMessage({body:`Name: ${name}` + `\nUser url: ${url}` + `\nUser name: ${sn}\nUID: ${id}\nGender: ${gender}\nMake friends with bots: ${b}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
       return request(encodeURI(`https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   }
    else {
    
    if (args.join().indexOf('@') !== -1){
    var mentions = Object.keys(event.mentions)
    let data = await api.getUserInfo(mentions);
    let url = data[mentions].profileUrl;
    let b = data[mentions].isFriend == false ? "are not !" : data[mentions].isFriend == true ? "yes!" : "Dammit";
    let sn = data[mentions].vanity;
    let name = await data[mentions].name;
    var sex = await data[mentions].gender;
    var gender = sex == 2 ? "Male" : sex == 1 ? "Female" : "Tran Duc Bo";
    var callback = () => api.sendMessage({body:`Name: ${name}` + `\nPersonal URL: ${url}` + `\n💦User name: ${sn}\nUID: ${mentions}\nSex: ${gender}\nMake friends with bots: ${b}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
       return request(encodeURI(`https://graph.facebook.com/${mentions}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
    else {
    let data = await api.getUserInfo(args[1]);
    let url = data[args[1]].profileUrl;
    let b = data[args[1]].isFriend == false ? "are not !" : data[args[1]].isFriend == true ? "yes!" : "Damn";
    let sn = data[args[1]].vanity;
    let name = await data[args[1]].name;
    var sex = await data[args[1]].gender;
    var gender = sex == 2 ? "Name" : sex == 1 ? "Female" : "Tran Duc Bo";
    var callback = () => api.sendMessage({body:`Name: ${name}` + `\nPersonal URL: ${url}` + `\nUser name: ${sn}\nUID: ${args[1]}\nGender: ${gender}\nMake friends with bots: ${b}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
       return request(encodeURI(`https://graph.facebook.com/${args[1]}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
     }
     }
      }
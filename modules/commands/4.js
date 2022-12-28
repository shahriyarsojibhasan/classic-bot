module.exports.config = {
  name: "about",
  version: "1.0.3",
  hasPermssion: 0,
  credits: "শাহরিয়ার সজিব হাসান",
  description: "কিছু নাই ",
  commandCategory: "utilities",
  cooldowns: 5,
  dependencies: {
    axios: ""
  }
}, module.exports.languages = {
  vi: {
    returnResult: "এখানে মিলিত ফলাফল আছে: \n",
    returnNull: "আপনার অনুসন্ধানের উপর ভিত্তি করে কোন ফলাফল পাওয়া যায়নি!"
  },
  en: {
    returnResult: "This is your result: \n",
    returnNull: "There is no result with your input!"
  }
}, module.exports.handleEvent = async function({
  api: e,
  event: n,
  args: a,
  Users: s,
  Threads: t
}) {
  const r = require("moment-timezone");
  var o = r.tz("Asia/Manila").format("HH:mm:ss"),
    h = global.config.ADMINBOT,
    i = r.tz("Asia/Manila").format("ss");
  if (o == `12:00:${i}` && i < 6)
    for (let n of h) setTimeout((() => e.sendMessage(`〉এখন: ${o}\n[❗] বট পুনরায় চালু হবে!`, n, (() => process.exit(1)))), 1e3)
}, module.exports.run = async function({
  api: e,
  event: n,
  getText: a,
  args: s
}) {
  if (!s[0]) return e.sendMessage("🛠 | Here are the bot's full settings | 🛠\n=== Manage Settings ===\n[1] Prefix.\n[2] Bot name.\n[3] List of Admins.\n[4] Language.\n[5] Auto-restart.\n=== Operations Management ===\n[6] Check for updates.\n[7] Get the list of banned users.\n[8] Get the list of banned groups.\n[9] Send notifications to all groups.\n[10]. Search UID through username.\n[11]. Search box TID by box name\n[12]. Change emoji box\n[13]. Rename the box\n[14]. View info box\n-> To choose, reply to this message with <-", n.threadID, ((e, a) => {
    global.client.handleReply.push({
      name: this.config.name,
      messageID: a.messageID,
      author: n.senderID,
      type: "choose"
    })
  }), n.messageID)
}, module.exports.handleReply = async function({
  api: e,
  event: n,
  client: a,
  handleReply: s,
  Currencies: t,
  Users: r,
  Threads: o
}) {
  const {
    userName: h
  } = global.data, {
    writeFileSync: i,
    readFileSync: g
  } = global.nodemodule["fs-extra"], d = [];
  switch (l = 1, s.type) {
    case "choose":
      switch (n.body) {
        case "1":
          return e.sendMessage("Prefix : " + global.config.PREFIX, n.threadID, n.messageID);
        case "2":
          return e.sendMessage("নাম: " + global.config.BOTNAME, n.threadID, n.messageID);
        case "3": {
          const a = global.config['ADMINBOT'] || []
          var m = [];
          for (const e of a)
            if (parseInt(e)) {
              const n = h.get(e) || await r.getNameUser(e);
              m.push(`${n} - ${e}`)
            } return e.sendMessage(`[এডমিন] একজন এডমিন এটি চালায়\n\n${m.join("\n")}`, n.threadID, n.messageID)
        }
        case "4":
          if ("vi" == global.config.language) return e.sendMessage("Language: Vietnamese", n.threadID, n.messageID);
          "en" == global.config.language && e.sendMessage("Language : English", n.threadID, n.messageID);
          break;
        case "5":
          return e.sendMessage("বট 12 ঘন্টায় পুনরায় চালু হবে", n.threadID, n.messageID);
        case "6":
          return e.sendMessage("বর্তমানে বট সংস্করণে রয়েছে: " + global.config.version, n.threadID, n.messageID);
        case "7": {
          const a = global.data.userBanned.keys();
          for (const e of a) {
            const n = global.data.userName.get(e) || await r.getNameUser(e);
            d.push(`${l++}. ${n} \nUID: ${e}`)
          }
          return e.sendMessage(`বর্তমানে উপলব্ধ ${d.length} ব্যবহারকারীদের নিষিদ্ধ করা হয়েছে \n\n${d.join("\n")}\n\n`, n.threadID)
        }
        case "8": {
          const a = global.data.threadBanned.keys();
          return e.sendMessage(`বর্তমানে উপলব্ধ ${d.length} ব্যবহারকারীদের নিষিদ্ধ করা হয়েছে \n\n${d.join("\n")}\n\n`, n.threadID)
          for (const s of a) return nameT = await global.data.threadInfo.get(s).threadName || "নাম নেই", d.push(`${l++}. ${nameT}\nTID: ${s}`), e.sendMessage(`বর্তমানে উপলব্ধ ${d.length} নিষিদ্ধ গ্রুপ\n\n${d.join("\n")}\n\n`, n.threadID)
        }
        break;
      case "9":
        return e.sendMessage("আপনি গ্রুপে যে বার্তা পাঠাতে চান তা লিখতে এই বার্তাটির উত্তর দিন", n.threadID, ((e, a) => {
          global.client.handleReply.push({
            name: this.config.name,
            messageID: a.messageID,
            author: n.senderID,
            type: "sendnoti"
          })
        }), n.messageID);
      case "10":
        return e.sendMessage("ব্যবহারকারীর নাম লিখতে এই বার্তার উত্তর দিন", n.threadID, ((e, a) => {
          global.client.handleReply.push({
            name: this.config.name,
            messageID: a.messageID,
            author: n.senderID,
            type: "getuid"
          })
        }), n.messageID);
      case "11":
        return e.sendMessage("বক্সের নাম লিখতে এই বার্তার উত্তর দিন", n.threadID, ((e, a) => {
          global.client.handleReply.push({
            name: this.config.name,
            messageID: a.messageID,
            author: n.senderID,
            type: "gettidbox"
          })
        }), n.messageID);
      case "12":
        return e.sendMessage("আপনি যে ইমোজি পরিবর্তন করতে চান তা প্রবেশ করতে এই বার্তাটির উত্তর দিন ৷ ", n.threadID, ((e, a) => {
          global.client.handleReply.push({
            name: this.config.name,
            messageID: a.messageID,
            author: n.senderID,
            type: "emojibox"
          })
        }), n.messageID);
      case "13":
        return e.sendMessage("পরিবর্তন করতে বক্সের নাম লিখতে এই বার্তার উত্তর দিন", n.threadID, ((e, a) => {
          global.client.handleReply.push({
            name: this.config.name,
            messageID: a.messageID,
            author: n.senderID,
            type: "namebox"
          })
        }), n.messageID);
      case "14": {
        require("request");
        let a = await e.getThreadInfo(n.threadID);
        a.participantIDs.length;
        let s = a.participantIDs.length;
        var c = [],
          u = [],
          I = [];
        for (let e in a.userInfo) {
          var D = a.userInfo[e].gender,
            b = a.userInfo[e].name;
          "MALE" == D ? c.push(e + D) : "FEMALE" == D ? u.push(D) : I.push(b)
        }
        var p = c.length,
          y = u.length;
        let t = a.adminIDs.length,
          r = a.messageCount,
          o = (a.nicknames, a.emoji),
          h = a.threadName,
          i = a.threadID,
          g = a.approvalMode;
        var f = 0 == g ? "বন্ধ করুন" : 1 == g ? "চালু করুন" : "Kh";
        e.sendMessage(`✨নাম: ${h}\n🤖 আইডি বক্স : ${i}\n👀 অনুমোদন করুন : ${f}\n🧠 ইমোজি: ${o}\n👉 তথ্য: সহ ${s} সদস্য\n👦পুরুষ : ${p} সদস্য\n👩‍🦰
মহিলা: ${y} সদস্য\nসঙ্গে ${t} এডমিন\n🕵️‍♀️ বার্তার মোট সংখ্যা: ${r} tin.\n`, n.threadID)
      }
      }
      break;
    case "sendnoti": {
      var $ = global.data.allThreadID || [];
      let a = await r.getNameUser(n.senderID);
      var M = 1,
        T = [];
      for (const s of $) isNaN(parseInt(s)) || s == n.threadID || (e.sendMessage(`অ্যাডমিন থেকে বিজ্ঞপ্তি ${a} \n\n` + n.body, s, ((e, n) => {
        e && T.push(s)
      })), M++, await new Promise((e => setTimeout(e, 500))));
      return e.sendMessage(`সফলভাবে পাঠানো হয়েছে: ${M} দলটি\n\nব্যর্থতা ${T.length} দলটি`, n.threadID, n.messageID)
    }
    case "getuid":
      e.getUserID(`${n.body}`, ((a, s) => {
        var m = [];
        for (var t in s) m += `Name : ${s[t].name}\nUID : ${s[t].userID}\n\n`;
        return e.sendMessage(m, n.threadID)
      }));
      break;
    case "gettidbox":
      try {
        const a = n.body || "",
          s = (await o.getAll(["threadID", "threadInfo"])).filter((e => !!e.threadInfo));
        var x = [],
          v = "",
          N = 0;
        s.forEach((e => {
          (e.threadInfo.threadName || "").toLowerCase().includes(a.toLowerCase()) && x.push({
            name: e.threadInfo.threadName,
            id: e.threadID
          })
        })), x.forEach((e => v += `\n${N+=1}. ${e.name} - ${e.id}`)), x.length > 0 ? e.sendMessage(`অনুসন্ধানের ফলাফল: ${v}`, n.threadID) : e.sendMessage("পাওয়া যায়নি", n.threadID, n.messageID)
      } catch (a) {
        return e.sendMessage(a, n.threadID)
      }
      break;
    case "namebox":
      try {
        return e.setTitle(`${n.body}`, n.threadID, n.messageID), e.sendMessage(`Changed the box name to ${n.body}`, n.threadID)
      } catch (a) {
        return e.sendMessage("ত্রুটি! একটি ত্রুটি ঘটেছে. অনুগ্রহ করে একটু পরে আবার চেষ্টা করুন", n.threadID)
      }
      break;
    case "emojibox":
      try {
        e.changeThreadEmoji(n.body, n.threadID, (() => e.sendMessage(`🔨 বট সফলভাবে ইমোজি এতে পরিবর্তন করেছে: ${n.body}`, n.threadID, n.messageID)))
      } catch (a) {
        e.sendMessage("ত্রুটি! একটি ত্রুটি ঘটেছে. অনুগ্রহ করে একটু পরে আবার চেষ্টা করুন", n.threadID)
      }
  }
};
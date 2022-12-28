module.exports.config = {
  name: "hi",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "",
  commandCategory: "noprefix",
  usages: "",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }
};

module.exports.handleEvent = async ({ event, api, Users }) => {
  const fs = global.nodemodule["fs-extra"];
  var { threadID, messageID, body, senderID } = event; const thread = global.data.threadData.get(threadID) || {};
  if (typeof thread["hi"] !== "undefined" && thread["hi"] == false) return;

  let name = await Users.getNameUser(event.senderID);
  if (senderID == global.data.botID) return;
  function out(data) {
api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
    api.sendMessage(data, threadID, messageID)
  }
  //reply
  var msg = {
    body: `হাই ${name}, আপনার দিনটি ভালো কাটুক ❤️`,
    attachment: (await global.nodemodule["axios"]({
      url: (await global.nodemodule["axios"]('https://apilucy.khoahoang3.repl.co')).data.data,
      method: "GET",
      responseType: "stream"
    })).data
  }
  // Gọi bot
  var arr = ["hi", "hello", "low", "hey", "loe", "hii", "hai", "yow", "yo", "hi po", "hoy", "uy"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) return out(msg)
  });
};

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": "hi thành công",
  },
  "en": {
    "on": "on",
    "off": "এ বাল হাই হেলো চুদাইস না তো 😈👿",
    "successText": "মেয়ে হলে I Love You 2 😘🥰 !",
  }
}

module.exports.run = async function ({ api, event, Threads, getText }) {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;

  if (typeof data["hi"] == "undefined" || data["hi"] == true) data["hi"] = false;
  else data["hi"] = true;

  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["hi"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
      }
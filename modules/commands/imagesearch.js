module.exports.config = {
	name: "pic",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "John Lester",
	description: "Search an Image",
	commandCategory: "image",
	usages: "imagesearch [text]",
	cooldowns: 0,
	dependencies: {	
    "axios":"",
    "fs-extra":"",
    "googlethis":"",
    "cloudscraper":""
	}
};




module.exports.run = async ({matches, event, api, extra, args}) => {
    
    const axios = global.nodemodule['axios'];
    const google = global.nodemodule["googlethis"];
const cloudscraper = global.nodemodule["cloudscraper"];
const fs = global.nodemodule["fs"];

var query = (event.type == "message_reply") ? event.messageReply.body : args.join(" ");
  //let query = args.join(" ");
  api.sendMessage(`🔎 ${query} খোজা হচ্ছে...`, event.threadID, event.messageID);
  
  let result = await google.image(query, {safe: false});
  if(result.length === 0) {
    api.sendMessage(`⚠️ আপনার ইমেজ সার্চ কোনো ফলাফল দেয়নি । `, event.threadID, event.messageID)
    return;
  }
  
  let streams = [];
  let counter = 0;
  
  console.log(result)
  
  for(let image of result) {
    // Only show 6 images
    if(counter >= 12)
      break;
      
    console.log(`${counter}: ${image.url}`);
    
    // Ignore urls that does not ends with .jpg or .png
    let url = image.url;
    if(!url.endsWith(".jpg") && !url.endsWith(".png"))
      continue;
    
   let path = __dirname + `/data/search-image-${counter}.jpg`;
    let hasError = false;
    await cloudscraper.get({uri: url, encoding: null})
      .then((buffer) => fs.writeFileSync(path, buffer))
      .catch((error) => {
        console.log(error)
        hasError = true;
      });
      
    if(hasError)
      continue;
    
    console.log(`Pushed to streams: ${path}`) ;
    streams.push(fs.createReadStream(path).on("end", async () => {
      if(fs.existsSync(path)) {
        fs.unlink(path, (err) => {
          if(err) return console.log(err);
            
          console.log(`Deleted file: ${path}`);
        });
      }
    }));
    
    counter += 1;
  }
  
  api.sendMessage("⏳ অনুসন্ধান ফলাফল পাঠানো হচ্ছে...", event.threadID, event.messageID)
  
  let msg = {
    body: `--------------------\nচিত্র অনুসন্ধান ফলাফল
\n"${query}"\n\nFound: ${result.length} image${result.length > 1 ? 's' : ''}\n\nশাহরিয়ার এর বট এর মাধ্যমে দেখছেন \n\n--------------------`,
    attachment: streams
  };
  
  api.sendMessage(msg, event.threadID, event.messageID);
};



  
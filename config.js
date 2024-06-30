const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_13_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxODMsXG4gICAgICAgIDUxLFxuICAgICAgICA4NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk3LFxuICAgICAgICA0MixcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDQxLFxuICAgICAgICA0NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwNixcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTMsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjA1LFxuICAgICAgICA5NixcbiAgICAgICAgMTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDU3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjE0LFxuICAgICAgICA0OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTExLFxuICAgICAgICA0OCxcbiAgICAgICAgODEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExLFxuICAgICAgICA3NyxcbiAgICAgICAgMTU2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA1NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDU3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNixcbiAgICAgICAgNzksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyLFxuICAgICAgICA0LFxuICAgICAgICAxODUsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzQsXG4gICAgICAgIDMsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI1LFxuICAgICAgICA0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNixcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDg3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMxLFxuICAgICAgICA5NSxcbiAgICAgICAgNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTksXG4gICAgICAgIDk4LFxuICAgICAgICA4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMixcbiAgICAgICAgMTQsXG4gICAgICAgIDg1LFxuICAgICAgICA2MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTExLFxuICAgICAgICAyNDEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDQyLFxuICAgICAgICA1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTIzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTYzLFxuICAgICAgICA4OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDk1LFxuICAgICAgICAzMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDc2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyOSxcbiAgICAgICAgODMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDM0LFxuICAgICAgICA4NixcbiAgICAgICAgODksXG4gICAgICAgIDYyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUYks3YjI5WU9FQ2xpaTJLalQraTFEeUVJWTZ6N0s0eUhlWHh5SUtPRWZrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzcwODA1NzE0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQ0U5QTBENURFRTUyOUE5QzkzOTBBMEIxMjczNUQ2MkFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5NzU2ODE2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNzA4MDU3MTQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxNTQ2M0MxQkRDREFGQ0M4QzMxNzYzQUI5M0JFQTQ4M1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk3NTY4MTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM3MDgwNTcxNDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY1RUI0QkRFQzJDRUUwQjEwRUM5MjFCODA4NjIyQkM3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTc1NjgyMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzcwODA1NzE0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTQyMzM1NjNBMTIzRDAwRDQyOTU2NkY2OUQ2Q0I5RDlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5NzU2ODIxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjVoVkJjbFJiUk5lWllCS3FwUnZGeXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTk3N2NlOGYtYmY0My00NGFkLTkxY2MtNDcxM2JlN2ZmMGJkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NixcbiAgICAgIDcwLFxuICAgICAgMjcsXG4gICAgICAyNTIsXG4gICAgICAyMixcbiAgICAgIDI1LFxuICAgICAgMTUsXG4gICAgICAzNyxcbiAgICAgIDI0OCxcbiAgICAgIDE5OCxcbiAgICAgIDE2MSxcbiAgICAgIDIxOCxcbiAgICAgIDIyNyxcbiAgICAgIDIwMSxcbiAgICAgIDY1LFxuICAgICAgMjQ5LFxuICAgICAgMTIsXG4gICAgICAyMzcsXG4gICAgICAxODAsXG4gICAgICAxMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNyxcbiAgICAgIDY1LFxuICAgICAgNDcsXG4gICAgICAxMSxcbiAgICAgIDIyMSxcbiAgICAgIDEyOCxcbiAgICAgIDE1OCxcbiAgICAgIDQ4LFxuICAgICAgODAsXG4gICAgICAyMCxcbiAgICAgIDQyLFxuICAgICAgMjQ3LFxuICAgICAgMTE1LFxuICAgICAgNTUsXG4gICAgICA3OCxcbiAgICAgIDIyNCxcbiAgICAgIDIxNyxcbiAgICAgIDEyMCxcbiAgICAgIDgzLFxuICAgICAgMTI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldIRzlSQkpUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM3MDgwNTcxNDA6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkl0eCBtZSBiYXNpdFwiLFxuICAgIFwibGlkXCI6IFwiMjI0ODMzNTE4NDU3MDAxOjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjdtdGRVSEVJdlFoYlFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJqWDlxaC8vU2tPdzRqL293dllMOG5ZQmtuZzlSb2ZkdGQ0YWNLMEozTFRnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImR6MXc1ZndUNjZtSCtSK3JTb2lsV1p2SStCakd5Z1lsZDVlaDRwRldDdmVrenRNbDVLbGI5Qmd1T3JKQmRiYzNpUkxDUGlQMnRsTjdoL1hWMUJYSEJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImlSK1RvcFEyckZKc3Urdzk5VzlDZU5lSEtNTmVkaW5CYWtFck9zbjV5bUlhVjVHQmRiRlQ1aFltSnpQYU9qczczOTdxM0F2eFA3OTNGblFralVuYkRBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzcwODA1NzE0MDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTc1NjgxNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVA2R1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUDZHLmpzb24iOiAie1wia2V5RGF0YVwiOlwienRnWW5WdGhtK2VLL0xFM1h6MkM1b0xnaXoxUlVIaUp6ZzZzRjhIdWhNdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDU4MTg3NjE0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk2NDI5OTQ3MzhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

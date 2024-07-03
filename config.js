const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="bandahealimaree@gmail.com"
global.location="sindh,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://dadl:Iamdadl123@atlascluster.yv7hl0a.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "pakistan/islamabad";
global.github=process.env.GITHUB|| "https://github.com/sarKarji1";
global.gurl  =process.env.GURL  || "https://wa.me/+923253617422?text=*_Hello-sarkar-bandah-e-Ali_*";
global.website=process.env.GURL || "https://wa.me/+923253617422?text=*_Hello-sarkar-bandah-e-Ali_*" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/ecc2c6d2716127da71129.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "`*_DOWNLOADED BY GUROJI_*`" 


global.devs = "923253617422" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923253617422";




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
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_31_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQxLFxuICAgICAgICA0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTY0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjE3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyLFxuICAgICAgICA5NixcbiAgICAgICAgMzksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQsXG4gICAgICAgIDI0LFxuICAgICAgICA1OSxcbiAgICAgICAgNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY3LFxuICAgICAgICA1NixcbiAgICAgICAgMTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQxLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjExLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTksXG4gICAgICAgIDMwLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMixcbiAgICAgICAgOTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjksXG4gICAgICAgIDY4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyLFxuICAgICAgICAzLFxuICAgICAgICA3LFxuICAgICAgICAwLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk3LFxuICAgICAgICA2NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICA2OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDgzLFxuICAgICAgICAxLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODUsXG4gICAgICAgIDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODUsXG4gICAgICAgIDg5LFxuICAgICAgICAzOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExMixcbiAgICAgICAgODIsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTksXG4gICAgICAgIDYzLFxuICAgICAgICAyMyxcbiAgICAgICAgODQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDczLFxuICAgICAgICA3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDg4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTExLFxuICAgICAgICA0MSxcbiAgICAgICAgODksXG4gICAgICAgIDIyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRDFzUE1vcHBmcjlRdEpzTHlubXpjcmpnWDBlQkJaQVphMFpDOEJjYzRxbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyNTM2MTc0MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjBBOTBGMkNDM0VDOUYyRUU1N0I2OTAxODNDMDI2ODBGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTg4MDI4OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0WHQzVkRMdlFDLXV2d3J2VDZueEdnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjJlYzM3NmE5LTJkNzAtNGViMC1hZjM5LTg2MWRjMzliNDBhM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTcsXG4gICAgICAxNDksXG4gICAgICAxOTIsXG4gICAgICAxNjUsXG4gICAgICAxNjMsXG4gICAgICA4NyxcbiAgICAgIDkzLFxuICAgICAgMTA5LFxuICAgICAgMTExLFxuICAgICAgNzEsXG4gICAgICAyMDAsXG4gICAgICAxMTEsXG4gICAgICAyNCxcbiAgICAgIDIwNCxcbiAgICAgIDEzMSxcbiAgICAgIDEzLFxuICAgICAgMTgsXG4gICAgICAxNzUsXG4gICAgICAxNDksXG4gICAgICAxNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYwLFxuICAgICAgMTAsXG4gICAgICAxNTAsXG4gICAgICAyMjUsXG4gICAgICAxNTQsXG4gICAgICAxNjgsXG4gICAgICAxMSxcbiAgICAgIDE1MSxcbiAgICAgIDExMCxcbiAgICAgIDI3LFxuICAgICAgNDAsXG4gICAgICAzOSxcbiAgICAgIDE0MSxcbiAgICAgIDI0MixcbiAgICAgIDc2LFxuICAgICAgODQsXG4gICAgICAxMzYsXG4gICAgICAzLFxuICAgICAgNCxcbiAgICAgIDI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJEWEpZQlFTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNTM2MTc0MjI6OTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1NTI4MDM3Mzg0NjEyMTo5MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwnZC1XFxu8J2bpVxcbvCdm65cXG7wnZC3XFxu8J2bpSBcXG7wnZuoXFxuIPCdm69cXG4g8J2bpVxcbvCdkL9cXG7wnZuqXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlRNN2RRSEVOZVVqYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJleWhaU3VQTjVhNnc0YXBDaE1yNEhpOWxJeHFLVEliV2dlTTlNWEcwbTBVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIllrME9ya0hnQzV4VWU2dlBJck9NR3ZEZzBlQlVBMEt2T0ZJMHBwNWhlZnNHOWpUVHA1U0N4VC9HV3p0Rm5IbjV6QjBzV0J5Q0VMc0p2Q2NHeXN0WkR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm0zanowSEdWOExENDhqeWVnUlhxbG5sL3pGU2FhYzc0UXFCYkRreUVxQTdXZlFxQVlKV2IxK0pnU3NDNmZxWHIvd2lCWlJxYjBQc1pLRjZTM1l3bEFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI1MzYxNzQyMjo5MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTg4MDI4MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJRUFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQlFQLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZHU5T3BJTjZyclEzVTdPUEl0L0ppU0FDUHZGSjd4ak5mLytDTkRuVU0wMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDU3MDA0NTY0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk4ODAyODQ4OTJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "S a r k a r",
  ownername:process.env.OWNER_NAME|| "bandaheali",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "S a r k a r"  ).toUpperCase(),



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

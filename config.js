const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb://mongo:uzzYuQVlvMOONQtcCfjGHuLwFaPKbofX@mongodb.railway.internal:27017"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/KnkAjmtcTseEzXobrzpPYR";
global.website=process.env.GURL || "https://chat.whatsapp.com/KnkAjmtcTseEzXobrzpPYR" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/408f5a1f7ac8d0855a91e.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍɪʜɪʀᴜᴋ²²¹-ᴍᴅ" 


global.devs = "94778764083" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94778764083";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_05_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTYzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA5LFxuICAgICAgICA1MyxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIyLFxuICAgICAgICAyMixcbiAgICAgICAgODEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDc3LFxuICAgICAgICAwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ5LFxuICAgICAgICA5NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDksXG4gICAgICAgIDEwLFxuICAgICAgICA0NixcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTQsXG4gICAgICAgIDM3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQyLFxuICAgICAgICA4MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDksXG4gICAgICAgIDc3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU4LFxuICAgICAgICA3MixcbiAgICAgICAgMjA3LFxuICAgICAgICAyNyxcbiAgICAgICAgODYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNyxcbiAgICAgICAgNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDMzLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzksXG4gICAgICAgIDk2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODYsXG4gICAgICAgIDc5LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM2LFxuICAgICAgICA0NixcbiAgICAgICAgODQsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDc1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDksXG4gICAgICAgIDIxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAzMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAzMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTk3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZUlaSmhITFRabzVBc2J0eWlPeWhrYnV1VG5JcGJ0V1BIU3B1eGUwTU5zST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcwMTA3MzAzN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTA2NjEwODU5NjZDQzJEMkYyOEU0NTcyQzAwN0FDMDNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMjQzMTI0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MDEwNzMwMzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjk5QkQ5NTQ2ODQyODhDRjAyMTUwOEZCODVGN0VBQTUyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTI0MzEyNFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJZcEVwV0dsQlJuNkxQTXFVZktXaERRXCIsXG4gIFwicGhvbmVJZFwiOiBcImZkYjQwZjYwLTA4ZDAtNGI2Yy04NTJiLWQyMWFkNDE3ZGYwOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMSxcbiAgICAgIDE4NixcbiAgICAgIDExMixcbiAgICAgIDU2LFxuICAgICAgNTYsXG4gICAgICAyNTUsXG4gICAgICAxNjIsXG4gICAgICAyNDgsXG4gICAgICAxMDcsXG4gICAgICA3MSxcbiAgICAgIDE3NyxcbiAgICAgIDE4NixcbiAgICAgIDEyNCxcbiAgICAgIDI1MyxcbiAgICAgIDM5LFxuICAgICAgNzEsXG4gICAgICA3MyxcbiAgICAgIDE3OSxcbiAgICAgIDU4LFxuICAgICAgMTIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY0LFxuICAgICAgMixcbiAgICAgIDEyNixcbiAgICAgIDM3LFxuICAgICAgMTcyLFxuICAgICAgMTY3LFxuICAgICAgNjAsXG4gICAgICA2MCxcbiAgICAgIDI1MyxcbiAgICAgIDE5LFxuICAgICAgNzksXG4gICAgICA2LFxuICAgICAgMjE4LFxuICAgICAgMjA0LFxuICAgICAgMTU3LFxuICAgICAgMjU1LFxuICAgICAgMTgxLFxuICAgICAgMjMzLFxuICAgICAgMjE2LFxuICAgICAgMjIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdZMTFGSkpTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcwMTA3MzAzNzozMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlBST0pFQ1QgNDA0XCIsXG4gICAgXCJsaWRcIjogXCIxMDk4MDExOTEyOTcwODA6MzBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1dyb2RjRUVPNnI0TFFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJNalluSlVPdE1YNnlRb0JHS1kwbmJVMldwcUlISDUweGFvQnZsVEZrVkh3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjRldEljZnRjYUhJd1J6VktaR3dHWW1mc1lBeWI1dDhtWC9tcVE0d0FJc2RGRURud05VdFhOSDNTRGVRZlJ5RFVja25TTElBUVN5MTZNaWVSNURUS0NRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlkydEwyOXp6U3htYVhyV1BFUUtxeHBGTGFKMUF6V1BiUkhEdVBuZmsvQWdTeFhtVGttYzIwa01yNDl4eFFaSHcrV1N6VmpvVHdCK0tzb1haMU9DN2p3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzAxMDczMDM3OjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTI0MzEyMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlJNlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSUk2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwibzltZ1ltYmZ0ajR3VFhUZjRLUXQ1L3VlR1k2NW1CWGtZN3dXZTlmK2cvTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjU2NzQwMzI1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA5ODI3NzI3NjRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Mihiruk Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍɪʜɪʀᴜᴋ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • ᴘʀᴏᴊᴇᴄᴛ 404』*\n youtube.com/@mihiruk_dilshan?si=PJVkf5b5Y_3P2dL6"),
 
  author : process.env.PACK_AUTHER|| "ᴍɪʜɪʀᴜᴋ",
  packname: process.env.PACK_NAME || "ᴍɪʜɪʀᴜᴋ",
  botname : process.env.BOT_NAME  || "ＭＩＨＩＲＵＫ ＭＤ",
  ownername:process.env.OWNER_NAME|| "ＭＲ ＭＩＨＩＲＵＫ ＤＩＬＳＨＡＮ",


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

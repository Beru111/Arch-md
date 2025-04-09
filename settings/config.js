const fs = require('fs');

global.d = new Date();
global.calender = d.toLocaleDateString('ng');
require('dotenv').config(); 

//================= { SETTINGS } =================\\
global.prefix = process.env.PREFIX || "."; // your desired prefix symbol only
global.owner = process.env.OWNER_NUMBER || "2349159180375" // owner number 
global.sudo = process.env.SUDO  || " ";
global.ownername = process.env.OWNER_NAME || "Sung"; //set bot owner name here 
global.botname = process.env.BOT_NAME || "Beru md"
global.author = process.env.AUTHOR  || "Sung";
global.packname = process.env.PACK_NAME  || "Beru Md ²⁵";
global.thumb = process.env.THUMB_IMAGE || 'https://files.catbox.moe/1uhvld.jpg';
global.footer = '🤖 © wa bot';
global.onlypc = process.env.ONLYPC_MSG  || "Sorry buddy the bot won't work directly in group chat to reduce spam use in private chat";
global.onlygc = process.env.ONLYGC_MSG  || "Sorry buddy the bot won't work directly in private chat to reduce spam use in group";
global.session = process.env.SESSION_ID || ""
global.simbol = process.env.SYMBOL || '♘'
global.menutype = process.env.MENU_TYPE  || "v3";
global.warn = process.env.WARN || "3"
global.welcome = process.env.WELCOME === 'true'
global.goodbye = process.env.GOODBYE === 'true'
global.timezone = process.env.TIME_ZONE || "Africa/Lagos";
global.startup = false

//================= { MASSAGE } =================\\

global.tempatDB = 'database.json'

global.mess = {
    owner: "*Access Denied* This feature is for bot owners only!",
	admin: "*Access Denied* This feature is for group admins only!!",
	botAdmin: "*Access Denied* This feature is only for when the bot is an admin.!",
	group: "*Access Denied* This feature is for groups only!",
	private: "*Access Denied* This feature is for private chat only!!",
	ban: "*Access Denied* you have been banned contact owner to unban!!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
};

//==================================\\

global.autOwn = 'req(62-8S57547ms11).287p';

//==================================\\

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
    delete require.cache[file];
    require(file);
});

//==================================\\

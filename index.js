const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "-";
var cmds = {
	"advinfo": "10/28/18/ 12:47",
	"info": "the first help bot by <@422552483932667925> with help from sky $ky#9646 just say your issue and it will hopefuly reply, if it doesnt dm me for help (-cmds for more commands)",
	"help": "whats your issue or dm <@442459978452697119>(-info for more info)",
	"cmds": "current commands: -help -info -cmds -ping -pingtest -scripts -advinfo -clear -botspreflix",
	"ping": "pong",
	"scripts": "Here you go: https://drive.google.com/file/d/1jmjJFyACxgSjEZWL3PgYmzAz5_2jIJN5/view?usp=drivesdk By 5CR33N5L4V3R 2.0: https://drive.google.com/open?id=1NXWwBE73F21R5hLrbg3j2eYUn4k4vZkV By Tom http://www.filedropper.com/tomsfescriptpack_4"
};
var includes = {
	"404 error": "run the highlighted exe here http://prntscr.com/l2blby to get to that file right click jjspolit http://prntscr.com/l2rzit and open file location you should pop up here http://prntscr.com/l2blxf scroll up and click the folder resources http://prntscr.com/l2bm3u open the folder and you should see the installer",
	"can't inject": "make sure this is installed: https://aka.ms/vs/15/release/vc_redist.x64.exe",
	"t inject": "make sure this is installed: https://aka.ms/vs/15/release/vc_redist.x64.exe",
	"k inject": "make sure this is installed: https://aka.ms/vs/15/release/vc_redist.x64.exe",
	"inject fail": "make sure this is installed: https://aka.ms/vs/15/release/vc_redist.x64.exe",
	"not inject": "make sure this is installed: https://aka.ms/vs/15/release/vc_redist.x64.exe",
	"to disable": "watch this video on how to turn off windows defender https://www.youtube.com/watch?v=wn5T8-9_f_o",
	"roblox crash": "reinstall roblox and restart computer, if it doesnt work roblox pacthed it",
	"game crash": "reinstall roblox and restart computer, if it doesnt work roblox pacthed it",
	"kick": "reinstall roblox and restart computer, if it doesnt work roblox pacthed it",
	"roblox closes": "reinstall roblox and restart computer, if it doesnt work roblox pacthed it",
	"chrome blocks": "read this: http://prntscr.com/l2sapx and make sure all your anti virus is disabled",
	"sale": "No advertising in this server <@422552483932667925>advertiser <@274065790867603457>advertiser",
	"sell": "No advertising in this server <@422552483932667925>advertiser <@274065790867603457>advertiser",
	"cant open": "if the expolit wont open or load, your anti virus is blocking it",
	"unhandled": "this error is from the anti virus blocking it, disable your anti virus and reinstall",
	"javascript error": "this is a bug and the only fix is to restart your computer",
 "need help": "whats your issue or dm <@442459978452697119>(-info for more info)",
 "someone help": "whats your issue or dm <@442459978452697119>(-info for more info)",
 "help": "whats your issue or dm <@442459978452697119>(-info for more info)",
	"multiple not working": "Make sure you are using different accounts NOTE: multiple rbx does not log the accunts in for you",
	"multiple not broken": "Make sure you are using different accounts NOTE: multiple rbx does not log the accunts in for you",
	"any script": "Here you go: https://drive.google.com/file/d/1jmjJFyACxgSjEZWL3PgYmzAz5_2jIJN5/view?usp=drivesdk By 5CR33N5L4V3R 2.0: https://drive.google.com/open?id=1NXWwBE73F21R5hLrbg3j2eYUn4k4vZkV By Tom http://www.filedropper.com/tomsfescriptpack_4",
	"some script": "Here you go: https://drive.google.com/file/d/1jmjJFyACxgSjEZWL3PgYmzAz5_2jIJN5/view?usp=drivesdk By 5CR33N5L4V3R 2.0: https://drive.google.com/open?id=1NXWwBE73F21R5hLrbg3j2eYUn4k4vZkV By Tom http://www.filedropper.com/tomsfescriptpack_4"
};
var replies = {
	"help": "whats your issue or dm <@442459978452697119>(-info for more info)",
};
let msgcount = 4;
var lasttime = Date.now();
var delay = 5;
function Clean(message) {
	message.channel.fetchMessages().then(function(messages) {
		messages.forEach(function(m) {
			if (m.deletable) { m.delete(); }
		});
	}).catch(function(error) {
		console.log(error);
	});;
}

function Send(message, reply) {
	if ((Date.now()-lasttime) < (delay*1000)) { return; }
	lasttime = Date.now();
	if (msgcount >= (5)) {
		msgcount = 0;
		Clean(message);
	}
	msgcount++;
	try {
		message.channel.send(`${reply} | \`msg id : ${message.id}\``).then(function(msg) {
			msg.edit(reply);
		}).catch(function(error) {
			console.log(error);
		});
	} catch(error) {
		console.log(error);
	}
}
bot.on("ready", function(message) {
	console.log("Started");
})
bot.on("message", function(message) {
	try {
		if (message.content.startsWith(prefix)) {
			Object.keys(cmds).forEach(function(command) {
				if (message.content == `${prefix}${command}`) {
					Send(message, cmds[command]);
					return;
				}
			});
		}
		Object.keys(includes).forEach(function(type) {
			var words = type.split(" ");
			var i = 0;
			words.forEach(function(word) {
				if (message.content.toLowerCase().includes(word)) {
					i++;
				}
			});
			if (i == words.length) {
				Send(message, includes[type]);
				return;
			}
		})
		Object.keys(replies).forEach(function(word) {
			if (message.content.toLowerCase() == word.toLowerCase()) {
				Send(message, replies[word]);
				return;
			}
		})
		if (message.content == `${prefix}clear`) {
			Clean(message);
		}
	} catch (error) {
		console.log(error);
	}
})

bot.on('message', (message) =>  {

if(message.author.bot) return;

  if(message.content == '-pingtest') {

      message.channel.send('!ping')
      message.channel.send('-ping')
      message.channel.send('..ping')
      message.channel.send('<ping')
      message.channel.send('>ping')
      message.channel.send('>>ping')
      message.channel.send('?ping')
      message.channel.send(';ping')
      message.channel.send('+ping')
     message.channel.send('[ping')
     message.channel.send('/ping')
     message.channel.send('=ping')


}

}

); 

bot.on('message', (message) =>  {

if(message.author.bot) return;

  if(message.content == '-botspreflix') {

      message.channel.send('!ping = Wearedevs BOT/Rhythme BOT')
      message.channel.send('-ping = Funtimes Helper (Funtimes)')
      message.channel.send('..ping = IDK')
      message.channel.send('<ping = Anti Tard (Aquatic)')
      message.channel.send('>ping = Aquatic Bot (Aquatic)')
      message.channel.send('>>ping = Vortex GAY')
      message.channel.send('?ping = Dyno BOT')
      message.channel.send(';ping = Unknown (Computerboy)')
      message.channel.send('+ping = FTXbot (FTXProgramming)')
     message.channel.send('[ping = Lemon (IDK)')
     message.channel.send('/ping = IDK')


}

}

);



bot.on('message', (message) =>  {

  if(message.content == '-jjinstaller') {
    if(message.author.bot) return;
    message.author.send("run the highlighted exe here http://prntscr.com/l2blby to get to that file right click jjspolit http://prntscr.com/l2rzit and open file location you should pop up here http://prntscr.com/l2blxf scroll up and click the folder resources http://prntscr.com/l2bm3u open the folder and you should see the installer")
}

}

);   


  




bot.login('process.evn.token')

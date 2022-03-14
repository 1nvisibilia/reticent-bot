require('dotenv').config();

// Require the necessary discord.js classes
const { Client, Intents, Collection } = require('discord.js');
const token = process.env.DISCORD_TOKEN;
const APEX = "https://cdn.discordapp.com/attachments/907754487387656222/947720102835539968/unknown.png";
const botID = "790718094732558367";
const apexID = "132230783132762112";

// Create a new client instance
const client = new Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES
	]
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

let coolDown = false;
let disable = false;

// Listen for messages
client.on('messageCreate', (message) => {
	if (message.author.id === botID) {
		return;
	} else if (message.content === ".nv enable") {
		disable = false;
		message.channel.send("current functionality enabled");
	} else if (message.content === ".nv disable") {
		disable = true;
		message.channel.send("current functionality disabled");
	} else if (message.content === ".nv info") {
		message.channel.send(`this is a bot build by tao. 
		it sends the random image apex is obsessed with whenever he types in the chat, 
		with the cooldown of 5 minutes. use \`.nv enable\` and \`.nv disable\` to toggle this functionality`);
	} else if (message.author.id === apexID && coolDown === false && disable === false) {
		message.channel.send(APEX);
		coolDown = true;
		setTimeout(() => {
			coolDown = true;
		}, 300000);
	} else if (message.content === "check") {
		message.channel.send("checked");
	}
});

// Login to Discord with your client's token
client.login(token);

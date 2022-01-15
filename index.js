const { Client, Collection, Intents, MessageEmbed } = require('discord.js');
const client = global.client = new Client({	allowedMentions: { parse: ['users', 'roles'], repliedUser: true },
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS]
 
});
const set = require("./settings.json");
const { Database } =  require('ready.db')
const  db  =  new  Database("settings.json")
client.login("TOKEN")

client.commands = new Collection();
const { readdirSync } = require("fs");   
const { join } = require("path");

const commandFiles = readdirSync(join(__dirname, "Commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "Commands", `${file}`));
    client.commands.set(command.code, command)
    console.log('[ '+command.code+' ] adlı komut başarıyla çalışıyor.');
}

readdirSync("./Events").filter(file => file.endsWith(".js")).forEach(file => {
    let event = require(`./Events/${file}`);
    client.on(event.conf.event, event.execute);
    console.log(` { ${file.replace(".js", "") } } adlı event başarıyla çalışıyor.`);
});

client.once("ready", async() => {
  console.log("Bot Başarıyla giriş yaptı!")
});
    


const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
//const PersistentCollection = require('djs-collection-persistent');

client.config = require("./config.json");
client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let cmdFunction = require(`./commands/${file}`);
    let cmdName = file.split(".")[0];
    client.commands.set(cmdName,cmdFunction);
  });
});

const rpg = require('./rpg/main.js');

rpg.start(Discord);

runCommand = (decorator, message, cmd, args) => { decorator(message, cmd, args); };

var SystemDecorator = (message, command, args) => {
  if (command.config.type == "Normal" || (command.config.type == "System" && message.author.id == client.config.ownerid)) {
    command.run(client, message, args);
  }
}

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (!message.content.startsWith(client.config.prefix) || message.author.bot) return;

  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const cmd = client.commands.get(command) || rpg.commands.get(command);

  if (cmd) {
    runCommand(SystemDecorator, message, cmd, args);
    runCommand(rpg.decorator, message, cmd, args);
  }

});

client.on('guildMemberAdd', member => {
  //const guild = member.guild;
  //let role = guild.roles.find("name", "test_role");
  //let member = message.member;
  //member.addRole(role).catch(console.error);
} );


client.login(client.config.token);

const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.config = require("./config.json");

//Changing prefix from code

//const fs = require('fs');
//config.prefix = newPrefix;
//fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);

client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let cmdFunction = require(`./commands/${file}`);
    let cmdName = file.split(".")[0];
    client.commands.set(cmdName,cmdFunction);
  });
});

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  //let prefix = '!';
  if (!message.content.startsWith(client.config.prefix) || message.author.bot) return;

  if (message.content.startsWith(client.config.prefix + "hello")) {
    message.reply('Hello!')
  } else
  // Deprecated
  if (message.content.startsWith(client.config.prefix + "add")) {
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    let cmdFunction = require(`./commands/${args[0]}.js`);
    let cmdName = args[0];
    let cmd = {name: cmdName, func: cmdFunction}
    cmdList.push(cmd);

  } else {
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command);
    if (cmd != undefined) {
      cmd.run(client, message, args);
    }
  }


});

client.on('guildMemberAdd', member => {
  const guild = member.guild;
  let role = guild.roles.find("name", "test_role");
  //let member = message.member;
  member.addRole(role).catch(console.error);
} )

client.login(client.config.token);

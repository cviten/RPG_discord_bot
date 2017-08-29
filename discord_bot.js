const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const PersistentCollection = require('djs-collection-persistent');

client.config = require("./config.json");

client.commands = new Discord.Collection();

client.base = require("./rpg/base.json");

client.players = new PersistentCollection({name: "Players"});
client.arena = new Discord.Collection();

client.IsPlayer = (message, player) => {
  if (!player){
    message.channel.send(`${message.author} is not the player`);
    return false;
  };
  return true;
};
client.IsMember = (message, member) => {
  if (!member){
    console.log("Not a member");
    return false;
  };
  return true;
};
client.InArena = (message, id) => {
  if (!client.arena.get(message.author.id)){
    message.channel.send(`${message.author} not in the Arena`);
    return false;
  };
  return true;
};

client.statNum = (s) => {
  switch (s.toUpperCase()) {
    case "A":
      return 5;
      break;
    case "B":
      return 4;
      break;
    case "C":
      return 3;
      break;
    case "D":
      return 2;
      break;
    case "E":
      return 1;
      break;
    case "EX":
      return 6;
      break;
    default:
      return 0;
  }
}

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
  if (!message.content.startsWith(client.config.prefix) || message.author.bot) return;

  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const cmd = client.commands.get(command);

  if (cmd && (cmd.config.type != "System" || message.author.id == client.config.ownerid)) {
    cmd.run(client, message, args);
  }

});

client.on('guildMemberAdd', member => {
  //const guild = member.guild;
  //let role = guild.roles.find("name", "test_role");
  //let member = message.member;
  //member.addRole(role).catch(console.error);
} );


client.login(client.config.token);

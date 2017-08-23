exports.run = (client, message, args) => {
  message.channel.send("Test " + "\n" + this.help.desc);
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let cmdFunction = require(`./commands/${args[0]}.js`);
  let cmdName = args[0];
  client.commands.set(cmdName,cmdFunction);
}

exports.help = {
  name: "add",
  desc: "Adds command to the collection"
}

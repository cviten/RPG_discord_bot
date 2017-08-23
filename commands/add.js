exports.run = (client, message, args) => {
  let add_args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  let add_command = args.shift().toLowerCase();
  let add_cmdFunction = require(`./commands/${args[0]}.js`);
  let add_cmdName = args[0];
  client.commands.set(cmdName,cmdFunction);
};

exports.config = {
  type: "System"
};

exports.help = {
  name: "add",
  desc: "Adds command to the collection"
};

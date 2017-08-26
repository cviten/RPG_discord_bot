exports.run = (client, message, args) => {
  let list_str ="List of commands:\n\n";
  let l = client.commands.map(cmd => `**${cmd.help.name}**\nType: ${cmd.config.type}\n*${cmd.help.desc}*\n`).join("\n");
  message.channel.send(list_str + l);
};

exports.config = {
  type: "Normal"
};

exports.help = {
  name: "list",
  desc: "List commands"
};

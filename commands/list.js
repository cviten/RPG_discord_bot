exports.run = (client, message, args) => {
  let list_str ="List of commands:\n";
  let l = client.commands.map(cmd => `${cmd.help.name} \n  ${cmd.help.desc}`).join("\n");
  message.channel.send(list_str + l);
}

exports.help = {
  name: "list",
  desc: "List commands"
}

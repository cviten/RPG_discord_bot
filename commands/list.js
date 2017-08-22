exports.run = (client, message, args) => {
  let list_str ="Something wrong if nothing else: ";
  let l = client.commands.map(cmd => cmd.name).join("\n");
  message.channel.send(list_str + l);
}

exports.help = {
  name: "list",
  desc: "List commands"
}

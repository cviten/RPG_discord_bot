exports.run = (client, message, args) => {
  console.log(client.players.get(message.author.id));
  console.log(client.players.get(message.author.id).stats.NoblePhantasm);
}

exports.config = {
  type: "Test"
};

exports.help = {
  name: "showchar",
  desc: "Shows the charcter in the console"
}

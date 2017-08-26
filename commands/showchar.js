exports.run = (client, message, args) => {
  console.log(client.players.get(message.author.id));
  console.log(client.players.get(message.author.id).stats.NoblePhantasm);
  message.channel.send(`Player: ${message.author.username}\n Stats:
    Strength: ${client.players.get(message.author.id).stats.Strength}
    Endurance: ${client.players.get(message.author.id).stats.Endurance}
    Agility: ${client.players.get(message.author.id).stats.Agility}
    Luck: ${client.players.get(message.author.id).stats.Luck}
    Mana: ${client.players.get(message.author.id).stats.Mana}
    Noble Phantasm: ${client.players.get(message.author.id).stats.NoblePhantasm}
    `
  );
}

exports.config = {
  type: "Test"
};

exports.help = {
  name: "showchar",
  desc: "Shows the charcter in the console"
}

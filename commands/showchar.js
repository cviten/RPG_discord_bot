exports.run = (client, message, args) => {
  let player = client.players.get(message.author.id);
  if(client.IsPlayer(player)) {
    const embed = {
      "title": `Class: ${player.class}`,
      "author": {
        "name": message.author.username
      },
      "color": 0x00AE86,
      "thumbnail": {
        "url": message.author.avatarURL
      },
      "fields": [
        {
          "name": "Stats",
          "value": `Strength: ${player.stats.Strength}\nEndurance: ${player.stats.Endurance}\nAgility: ${player.stats.Agility}\nLuck: ${player.stats.Luck}\nMana: ${player.stats.Mana}\nNoble Phantasm: ${player.stats.NoblePhantasm}`
        }
      ]
    }
    message.channel.send({embed});
  };
}

exports.config = {
  type: "RPG_Main"
};

exports.help = {
  name: "showchar",
  desc: "Shows the charcter in the console"
}

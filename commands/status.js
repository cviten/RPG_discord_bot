exports.run = (client, message, args) => {
  let player = client.players.get(message.author.id);
  if (client.IsPlayer(message, player)) {
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
          "name": "HP",
          "value": `${player.currHP}/${player.maxHP}`,
          "inline": true
        },
        {
          "name": "MP",
          "value": `${player.currMP}/${player.maxMP}`,
          "inline": true
        }
      ]
    }
    message.channel.send({embed});
  }
};

exports.config = {
  type: "RPG_Main"
};

exports.help = {
  name: "status",
  desc: "Status of the player"
};

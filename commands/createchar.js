exports.run = (client, message, args) => {
  const classes = require('../rpg/classes.json');
  // Can give user a role "Player"
  if (!(classes.hasOwnProperty(args[0]))) {
    message.reply("We don't have this class");
  } else
  if (!client.players.get(message.author.id)){
    client.players.set(message.author.id, {
      class: args[0],
      stats: classes[args[0]],
      maxHP: client.base.HP * client.statNum(classes[args[0]].Endurance),
      currHP: client.base.HP * client.statNum(classes[args[0]].Endurance),
      maxMP: 0,
      currMP: 0
    });
    message.channel.send(`Created a new Player, ${message.author}`)
  }
};

exports.config = {
  type: "RPG_Main"
};

exports.help = {
  name: "createchar",
  desc: "Create a new character"
}

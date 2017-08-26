exports.run = (client, message, args) => {
  const classes = require('../rpg/classes.json');
  // Can give user a role "Player"
  if (!(classes.hasOwnProperty(args[0]))) {
    message.reply("We don't have this class");
  } else
  if (!client.players.get(message.author.id)){
    client.players.set(message.author.id, {
      hp: 1000,
      stats: classes[args[0]]
    });
    message.channel.send(`Created a new Player, ${message.author}`)
  }
};

exports.config = {
  type: "RPG_Admin"
};

exports.help = {
  name: "createchar",
  desc: "Create a new character"
}

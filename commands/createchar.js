exports.run = (client, message, args) => {
  const classes = require('../rpg/classes.json');
  // Can give user a role "Player"
  if (!client.players.get(message.author.id)){
    client.players.set(message.author.id, {
      hp: 1000,
      stats: {
        Strength: classes[args[0]].Strength,
        Endurance: classes[args[0]].Endurance,
        Agility: classes[args[0]].Agility,
        Luck: classes[args[0]].Luck,
        Mana: classes[args[0]].Mana,
        NoblePhantasm: classes[args[0]].NoblePhantasm
      }
    });
  }
};

exports.config = {
  type: "Test"
};

exports.help = {
  name: "createchar",
  desc: "Create a new character"
}

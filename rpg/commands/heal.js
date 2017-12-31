exports.run = (client, message, args) => {
  let player = rpg.players.get(message.author.id);
  player.currHP = player.maxHP;
  rpg.players.set(message.author.id, player);
};

exports.config = {
  type: "RPG_Admin"
};

exports.help = {
  name: "heal",
  desc: "Heals yourself"
};

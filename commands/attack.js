exports.run = (client, message, args) => {
  let player = client.players.get(message.author.id);
  let member = message.mentions.members.first();
  if (client.IsPlayer(message, player) && client.InArena(message, message.author.id)
    && client.IsMember(message, member) && client.InArena(message, member.id)) {
      let enemy = client.players.get(member.id);
      if (Math.random() < (client.base.acc + (client.statNum(player.stats.Luck) - 1 ) * 5)) {
        damage = client.statNum(player.stats.Agility) * client.statNum(player.stats.Strength) * client.base.damage;
        if (Math.random() < client.base.crit + client.statNum(player.stats.Luck) - 1) {
          damage *= 2.5;
        }
        enemy.currHP -= damage;
        client.players.set(member.id, enemy);
      }
  };
};

exports.config = {
  type: "RPG_Active",
  cooldown: 5
};

exports.help = {
  name: "attack",
  desc: "Attacks player"
};

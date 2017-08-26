exports.run = (client, message, args) => {
  let member = message.mentions.members.first();
  if (!member){
    console.log("Not a member");
    return
  };
  let player = client.players.get(member.id);
  if (!player){
    message.channel.send(`${member} is not the player`);
    return
  };
  console.log(args[1]);
  if (!(player.hasOwnProperty(args[1]))) {
    message.reply("We don't have this stat");
    return;
  }
  console.log("Player has that stat");
  player.stats[args[1]] = args[2];
  console.log(player);
  console.log(player.stats[args[1]]);
  console.log(args[2]);
  client.players.set(member.id, player);
}

exports.config = {
  type: "RPG_Admin"
};

exports.help = {
  name: "setstat",
  desc: "Sets a stat for player"
};

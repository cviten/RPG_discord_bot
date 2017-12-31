exports.run = (rpg, message, args) => {
  let member = message.mentions.members.first();
  if (!member) {
    message.channel.send("Please choose somebody");
    return
  }
  let answer = rpg.changeStat(member.id,args[1],args[2])
  if (answer.success) {
    console.log(member.user.username + answer.message);
    message.channel.send(member.user.username + answer.message);
  } else {
    message.channel.send(member.user.username + answer.message);
  }
}

exports.config = {
  type: "RPG_Admin"
};

exports.help = {
  name: "setstat",
  desc: "Sets a stat for player"
};

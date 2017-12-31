exports.run = (rpg, message, args) => {
  //let player = rpg.players.get(message.author.id);
  let member = message.mentions.members.first();
  if (!member) {
    message.channel.send("Choose target")
  } else {
    answer = rpg.Attack(message.author.id,member.id);
    if (answer.success) {
      console.log(`${message.author.username}` + " attacks " + member.user.username);
      message.channel.send(answer.message);
    } else {
      message.channel.send(answer.message);
    }
  }
};

exports.config = {
  type: "RPG_Main",
  cooldown: 5
};

exports.help = {
  name: "attack",
  desc: "Attacks player"
};

exports.run = (rpg, message, args) => {
  answer = rpg.PlayerStatus(message.author.id, message.author);
  if (answer.success) {
    //console.log(answer.message + `${message.author.username}`);
    let embed = answer.obj;
    message.channel.send({embed});
  } else {
    message.reply(`${message.author.username} ` + answer.message);
  };
};

exports.config = {
  type: "RPG_Main"
};

exports.help = {
  name: "status",
  desc: "Status of the player"
};

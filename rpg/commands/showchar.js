exports.run = (rpg, message, args) => {
  answer = rpg.ShowCharacter(message.author.id, message.author);
  if (answer.success) {
    //console.log(answer.message + `${message.author.username}`);
    let embed = answer.obj;
    message.channel.send({embed});
  } else {
    message.reply(`${message.author.username} ` + answer.message);
  };
}

exports.config = {
  type: "RPG_Main"
};

exports.help = {
  name: "showchar",
  desc: "Shows the charcter in the console"
}

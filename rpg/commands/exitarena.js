exports.run = (rpg, message, args) => {
  answer = rpg.ExitArena(message.author.id);
  if (answer.success) {
    console.log(answer.message + `${message.author.username}`);
    message.channel.send(answer.message + `${message.author}`);
  } else {
    message.reply(`${message.author.username} ` + answer.message);
  };
}

exports.config = {
  type: "RPG_Main"
};

exports.help = {
  name: "exitarena",
  desc: "Exit arena"
}

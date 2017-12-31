exports.run = (rpg, message, args) => {
  answer = rpg.EnterArena(message.author.id);
  if (answer.success) {
    console.log(`${message.author.username} ` + answer.message);
    message.channel.send(`${message.author} ` + answer.message);
  } else {
    message.reply(`${message.author.username} ` + answer.message);
  };
}

exports.config = {
  type: "RPG_Main"
};

exports.help = {
  name: "enterarena",
  desc: "Enter arena"
}

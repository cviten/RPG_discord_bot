exports.run = (rpg, message, args) => {
  answer = rpg.DeleteCharacter(message.author.id);
  if (answer.success) {
    console.log(`${message.author.username}` + answer.message);
    message.channel.send(`${message.author}` + answer.message);
  } else {
    message.reply(answer.message);
  }
}

exports.config = {
  type: "RPG_Main"
};

exports.help = {
  name: "deletechar",
  desc: "Delete the charcter"
}

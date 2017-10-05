exports.run = (rpg, message, args) => {
  answer = rpg.CreateCharacter(message.author.id, args[0]);
  if (answer.success) {
    console.log(answer.message + `${message.author.username}`);
    message.channel.send(answer.message + `${message.author}`);
  } else {
    message.reply(answer.message);
  }
};

exports.config = {
  type: "RPG_Main"
};

exports.help = {
  name: "createchar",
  desc: "Create a new character"
}

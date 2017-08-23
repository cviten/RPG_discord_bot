exports.run = (client, message, args) => {
  message.channel.reply("Hello");
};

exports.config = {
  type: "Normal"
};

exports.help = {
  name: "hello",
  desc: 'Replies "Hello"'
};

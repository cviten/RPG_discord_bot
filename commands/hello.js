exports.run = (client, message, args) => {
  message.channel.reply("Hello");
}

exports.help = {
  name: "hello",
  desc: 'Replies "Hello"'
}

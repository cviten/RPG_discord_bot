exports.run = (client, message, args) => {
  message.channel.send("Test " + "\n" + this.help.desc);
}

exports.help = {
  name: "test",
  desc: "Simple test message"
}

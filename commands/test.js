exports.run = (client, message, args) => {
  message.channel.send("Test");
}

exports.config = {
  type: "Test"
};

exports.help = {
  name: "test",
  desc: "Simple test message"
}

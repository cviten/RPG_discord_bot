exports.run = (client, message, args) => {
  message.channel.send("Test");
  //client.IsPlayer(message);
}

exports.config = {
  type: "Test"
};

exports.help = {
  name: "test",
  desc: "Simple test message"
}

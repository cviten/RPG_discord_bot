exports.run = (client, message, args) => {
  message.author.send("One more");
};

exports.config = {
  type: "Normal"
};

exports.help = {
  name: "dmme",
  desc: "Direct messge to you"
}

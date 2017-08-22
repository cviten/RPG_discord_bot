exports.run = (client, message, args) => {
  message.author.send("One more");
}

exports.help = {
  name: "dmme",
  desc: "Direct messge to you"
}

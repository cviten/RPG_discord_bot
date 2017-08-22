exports.run = (client, message, args) => {
  message.channel.send("Hello from file")
}

exports.help = {
  name: "file_hello",
  desc: "Command from the file"
}

exports.run = (client, message, args) => {
  if (client.players.get(message.author.id)){
    client.players.delete(message.author.id);
  }
  console.log("Deleted");
  message.channel.send(`${message.author} was deleted`);
}

exports.config = {
  type: "RPG_Admin"
};

exports.help = {
  name: "deletechar",
  desc: "Delete the charcter"
}

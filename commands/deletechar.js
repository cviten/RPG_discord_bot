exports.run = (client, message, args) => {
  console.log(client.players.delete(message.author.id));
  console.log("Deleted");
}

exports.config = {
  type: "Test"
};

exports.help = {
  name: "deletechar",
  desc: "Delete the charcter"
}

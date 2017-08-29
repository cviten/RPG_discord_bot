exports.run = (client, message, args) => {
  let player = client.players.get(message.author.id);
  if (!player){
    message.channel.send(`${message.author} is not the player`);
    return
  };
  if (!client.arena.get(message.author.id)){
    message.channel.send(`${message.author} not the Arena`);
    return
  };
  client.arena.delete(message.author.id);
  message.channel.send(`${message.author} exited the Arena.`);
}

exports.config = {
  type: "RPG_main"
};

exports.help = {
  name: "exitarena",
  desc: "Exit arena"
}

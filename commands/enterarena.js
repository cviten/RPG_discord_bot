exports.run = (client, message, args) => {
  let player = client.players.get(message.author.id);
  if (!player){
    message.channel.send(`${message.author} is not the player`);
    return
  };
  if (client.arena.get(message.author.id)){
    message.channel.send(`${message.author} already in the Arena`);
    return
  };
  client.arena.set(message.author.id, player);
  message.channel.send(`${message.author} entered the Arena.`);
}

exports.config = {
  type: "RPG_main"
};

exports.help = {
  name: "enterarena",
  desc: "Enter arena"
}

exports.run = (client, message, args) => {
  const classes = require('../rpg/classes.json');
  console.log(classes[args[0]]);
}

exports.config = {
  type: "Test"
};

exports.help = {
  name: "test",
  desc: "Create a new character"
}

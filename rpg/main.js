const PersistentCollection = require('djs-collection-persistent');
const fs = require('fs');

//client = {};
rpg = {};

rpg.start = (Discord) => {
  rpg.commands = new Discord.Collection();
  rpg.players = new PersistentCollection({name: "Players"});
  rpg.base = require("./files/base.json");
  rpg.arena = new Discord.Collection();
  rpg.classes = require('./files/classes.json');

  fs.readdir("./rpg/commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      let cmdFunction = require(`./commands/${file}`);
      let cmdName = file.split(".")[0];
      rpg.commands.set(cmdName,cmdFunction);
    });
  });
};

rpg.decorator = (message, command, args) => {
  if (command.config.type == "RPG_Main" || command.config.type == "RPG_Admin") {
    command.run(rpg, message, args)
  }
}

rpg.IsPlayer = (player) => {
  if (player){
    return true;
  } else {
    return false;
  };
};

rpg.IsMember = (message, member) => {
  if (!member){
    console.log("Not a member");
    return false;
  };
  return true;
};

rpg.InArena = (message, id) => {
  if (!rpg.arena.get(message.author.id)){
    message.channel.send(`${message.author} not in the Arena`);
    return false;
  };
  return true;
};

rpg.statNum = (s) => {
  switch (s.toUpperCase()) {
    case "A":
      return 5;
      break;
    case "B":
      return 4;
      break;
    case "C":
      return 3;
      break;
    case "D":
      return 2;
      break;
    case "E":
      return 1;
      break;
    case "EX":
      return 6;
      break;
    default:
      return 0;
  }
};

rpg.CreateCharacter = (playerID, playerClass) => {
  if (!(rpg.classes.hasOwnProperty(playerClass))) {
    //message.reply("We don't have this class");
    return {success : false, message : "We don't have this class"};
  } else
  if (!rpg.players.get(playerID)){
    rpg.players.set(playerID, {
      class: playerClass,
      stats: rpg.classes[playerClass],
      maxHP: rpg.base.HP * rpg.statNum(rpg.classes[playerClass].Endurance),
      currHP: rpg.base.HP * rpg.statNum(rpg.classes[playerClass].Endurance),
      maxMP: rpg.base.MP * rpg.statNum(rpg.classes[playerClass].Mana),
      currMP: rpg.base.MP * rpg.statNum(rpg.classes[playerClass].Mana)
    });
    //console.log(`Created a new Player, ${message.author.username}`);
    //message.channel.send(`Created a new Player, ${message.author}`)
    return {success : true, message : `Created a new Player, `};
  } else {
    //message.reply("This player already creatred")
    return {success : false, message : "This player is already creatred"};
  }
};

rpg.DeleteCharacter = (playerID) => {
  if (rpg.players.get(playerID)){
    rpg.players.delete(playerID);
    //console.log("Deleted");
    //message.channel.send(`${message.author} was deleted`);
    return {success : true, message :  " was deleted"};
  } else {
    return {success : false, message : "This user isn't a player"};
  }
}

//Probably will merge them in one function (EnterArena and ExitArena)

rpg.EnterArena = (playerID) => {
  let player = rpg.players.get(playerID);
  if (!player){
    return {success : false, message : "is not the player"};
  };
  if (rpg.arena.get(playerID)){
    return {success : false, message : "already in the Arena"};
  };
  player.effects = [];
  rpg.arena.set(playerID, player);
  return {success : true, message : "entered the Arena"};
};

rpg.ExitArena = (playerID) => {
  let player = rpg.players.get(playerID);
  if (!player){
    return {success : false, message : "is not the player"};
  };
  if (!rpg.arena.get(playerID)){
    return {success : false, message : "not in the Arena"};
  };
  rpg.arena.delete(playerID);
  return {success : true, message : "exited the Arena"};
};

//Probably will merge them too (ShowCharacter and PlayerStatus)

rpg.ShowCharacter = (playerID, author) => {
  let player = rpg.players.get(playerID);
  let embed = null;
  if(player) {
    if (player.class == "Master") {
      embed = {
        "title": `Class: ${player.class}`,
        "author": {
          "name": message.author.username
        },
        "color": 0x00AE86,
        "thumbnail": {
          "url": message.author.avatarURL
        },
        "fields": [
          {
            "name": "Stats",
            "value": `Strength: ${player.stats.Strength}\nEndurance: ${player.stats.Endurance}\nAgility: ${player.stats.Agility}\nLuck: ${player.stats.Luck}\nMana: ${player.stats.Mana}\nCommand Seals: ${player.stats.CommandSeals}`
          }
        ]
      }
    } else {
      embed = {
        "title": `Class: ${player.class}`,
        "author": {
          "name": author.username
        },
        "color": 0x00AE86,
        "thumbnail": {
          "url": message.author.avatarURL
        },
        "fields": [
          {
            "name": "Stats",
            "value": `Strength: ${player.stats.Strength}\nEndurance: ${player.stats.Endurance}\nAgility: ${player.stats.Agility}\nLuck: ${player.stats.Luck}\nMana: ${player.stats.Mana}\nNoble Phantasm: ${player.stats.NoblePhantasm}`
          }
        ]
      }
    }
    //message.channel.send({embed});
    return {success : true, message : "Hit!", obj: embed};
  } else {
    return {success : false, message : "is not a player",};
  };
};

rpg.PlayerStatus = (playerID, author) => {
  let player = rpg.players.get(playerID);
  if (player) {
    const embed = {
      "title": `Class: ${player.class}`,
      "author": {
        "name": author.username
      },
      "color": 0x00AE86,
      "thumbnail": {
        "url": author.avatarURL
      },
      "fields": [
        {
          "name": "HP",
          "value": `${player.currHP}/${player.maxHP}`,
          "inline": true
        },
        {
          "name": "MP",
          "value": `${player.currMP}/${player.maxMP}`,
          "inline": true
        }
      ]
    }
    return {success : true, message : "Hit!", obj: embed};
  } else {
    return {success : false, message : "is not a player",};
  }
  if (client.IsPlayer(message, player)) {
    const embed = {
      "title": `Class: ${player.class}`,
      "author": {
        "name": message.author.username
      },
      "color": 0x00AE86,
      "thumbnail": {
        "url": message.author.avatarURL
      },
      "fields": [
        {
          "name": "HP",
          "value": `${player.currHP}/${player.maxHP}`,
          "inline": true
        },
        {
          "name": "MP",
          "value": `${player.currMP}/${player.maxMP}`,
          "inline": true
        }
      ]
    }
    message.channel.send({embed});
  }
}

//rpg.effect = (stat, )

rpg.Attack = (playerID, targetID) => { //Not completed
  let player = rpg.arena.get(playerID);
  let target = rpg.arena.get(targetID);
  let damage = 0;
  let msg = "";
  if (player && target) {
    if (Math.random() < (client.base.acc + (client.statNum(player.stats.Luck) - 1 ) * 5)) {
      damage = client.statNum(player.stats.Agility) * client.statNum(player.stats.Strength) * client.base.damage;
      if (Math.random() < client.base.crit + client.statNum(player.stats.Luck) - 1) {
        damage *= 2.5;
        msg = msg + "\nCritical Hit";
      };
      msg = msg + "Hits " + damage + " HP"
      target.currHP -= damage;
      rpg.arena.set(targetID, target);
      return {success : true, message : msg};
    } else {
    return {success : true, message : "Miss"};
    }
  }
};
module.exports = rpg;

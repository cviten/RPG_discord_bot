exports.run = (client, message, args) => {
  let role = message.guild.roles.find("name", "test_role");
  let member = message.member;
  member.addRole(role).catch(console.error);
}

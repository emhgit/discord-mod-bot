const { REST, Routes} = require("discord.js");
require('dotenv').config();

//Initialize slash commands for
const commands = [
  new SlashCommandBuilder()
    .setName('kick')
    .setDescription('Kick a user')
    .addUserOption(opt => opt.setName('target').setDescription('User to kick').setRequired(true)),
  new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Ban a user')
    .addUserOption(opt => opt.setName('target').setDescription('User to ban').setRequired(true)),
  new SlashCommandBuilder()
    .setName('role')
    .setDescription('Give a role to a user')
    .addUserOption(opt => opt.setName('target').setDescription('User to give role').setRequired(true))
    .addRoleOption(opt => opt.setName('role').setDescription('Role to assign').setRequired(true)),
].map(cmd => cmd.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      { body: commands }
    );
    console.log('Commands successfully registered.');
  } catch (err) {
    console.error("Commands unsuccessfully registered, " + err);
  }
})();
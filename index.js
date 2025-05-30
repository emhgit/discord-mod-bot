const { Client, GatewayIntentBits, Events } = require("discord.js");
require("dotenv").config();

//initialize the new client with proper intents/permissions
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ],
});

client.once(Events.ClientReady, () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "kick"){
        //kick the target
        const target = interaction.options.getUser("target");
        const member = interaction.guild.members.cache.get(target.id);

        if(!member || !member.kickable){
            return interaction.reply({ content: 'I cannot kick this user.', ephemeral: true })
        }
        
        member.kick;
        await interaction.reply(`${target.tag} has successfully been kicked.`);
    }
    if (interaction.commandName === "ban"){
        //ban the target
        const target = interaction.options.getUser("target");
        const member = interaction.guild.members.cache.get(target.id);

        if(!member || !member.bannable){
            return interaction.reply({ content: 'I cannot ban this user.', ephemeral: true })
        }
        
        member.ban;
        await interaction.reply(`${target.tag} has successfully been banned.`);
    }
    if (interaction.commandName === "role"){
        //give role to the member
        const target = interaction.options.getMember("target");
        const role = interaction.options.getRole("role");

        if (!role.editable) return interaction.reply({ content: 'I cannot assign that role.', ephemeral: true });

        await target.roles.add(role);
        await interaction.reply(`✅ Gave ${role.name} to ${target.user.tag}`);
    }
});

client.login(process.env.DISCORD_TOKEN);
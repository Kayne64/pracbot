const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('kick')
    .addUserOption(option => option.setName('user').setDescription('User you want to kick').setRequired(true))
    .addStringOption(option => option.setName('reason').setDescription('Reason for Kick').setRequired(true))
    .setDescription('Kick a User'),
    async execute(interaction) {
        const user = interaction.options.getUser("user")
        const reason = interaction.options.getString("reason")
        const { Permissions } = require('discord.js')
        if(interaction.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) {
            if(user) {
                user.kick 
                await interaction.reply({content: `${user} has been kicked`, ephemeral: true})
            } else {
                await interaction.reply({content: `You lack permission to do this`, ephemeral: true})
            }
        }
    },
};
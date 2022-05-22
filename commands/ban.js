const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ban')
    .addUserOption(option => option.setName('user').setDescription('User you want to Ban').setRequired(true))
    .addStringOption(option => option.setName('reason').setDescription('Reason for Ban').setRequired(true))
    .setDescription('Ban a Member'),
    async execute(interaction) {
        const user = interaction.options.getUser("user")
        const reason = interaction.options.getString("reason")
        const { Permissions } = require('discord.js')
        if(interaction.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) {
            user.ban();
            await interaction.reply({content: `${user} has been banned`, ephemeral: true})
        } else {
            await interaction.reply({content: `You lack permission to do this`, ephemeral: true})
        }
    },
};
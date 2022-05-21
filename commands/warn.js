const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('warn')
    .addUserOption(option => option.setName('user').setDescription('Warn a User').setRequired(true))
    .setDescription('Warns a User'),
    async execute(interaction) {
        const user = interaction.options.getUser("user")
        const { Permissions } = require('discord.js')
        if (interaction.member.permissions.has(Permissions.FLAGS.MODERATE_MEMBERS)) {
            user.member.roles.add('977540467094880276')
            await interaction.reply({content: `${user} has been Warned`, ephemeral: true})
        } else {
            await interaction.reply({content: `You lack permission to do this`, ephemeral: true})
        }
    },
};
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('nick')
    .addUserOption(option => option.setName('user').setDescription(`User who's Nickname will be changed`).setRequired(true))
    .addStringOption(option => option.setName('newnickname').setDescription('New Nickname of User').setRequired(true))
    .setDescription(`Set Somebody's Nickname`),
    async execute(interaction) {
        const user = interaction.options.getUser("user")
        const newnick = interaction.options.getString("newnickname")
        const { Permissions } = require('discord.js')

        // Permissions
        if (interaction.permissions.has(Permissions.FLAGS.MANAGE_NICKNAMES)) {
            user.setNickname(newnick)
            await interaction.reply({content: `${user}'s nickname has been changed to ${newnick}`, ephemeral: true})
        } else {
            await interaction.reply({content: `You lack permission to do this!`, ephemeral: true})
        }
    },
};
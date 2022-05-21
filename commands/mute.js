const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('mute')
    .addUserOption(option => option.setName('user').setDescription('User who is getting muted').setRequired(true))
    .setDescription('Mute a User!'),
    async execute(interaction) {
        const user = interaction.options.getUser("user")
        const { Permissions } = require('discord.js')
        if (interaction.member.permissions.has(Permissions.FLAGS.MUTE_MEMBERS)) {
            user.member.roles.add('977539303330693172')
            await interaction.reply({content: `${user} has been muted`, ephemeral: true})
        } else {
            await interaction.reply({content: `You lack permission to do that`, ephemeral: true})
        }
    },
};
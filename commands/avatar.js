const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('avatar')
    .addUserOption(option => option.setName('target').setDescription('Avatar you want to view!').setRequired(true))
    .setDescription('View an Avatar'),
    async execute(interaction) {
        const target = interaction.options.getUser('target')
        if (user) return interaction.reply(`${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true})}`);
        await interaction.reply(`Your avatar: ${interaction.user.displayAvatarURL({ dynamic: true})}`);
    },
};
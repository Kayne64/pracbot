const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('verify')
    .setDescription('Be Granted Access to the Server'),
    async execute(interaction) {
        interaction.member.roles.add('977169234184515624');
        await interaction.reply({content: 'Roles Given', epheremal: true})
    },
};
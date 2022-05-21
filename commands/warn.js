const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('uptime')
    .setDescription('Provides Uptime of the Bot'),
    async execute(interaction) {
        
    },
};
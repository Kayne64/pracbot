const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with the Latency'),
    async execute(interaction) {
        await interaction.reply({content: `**Latency Ping: ${interaction.client.ws.ping}ms`, ephemeral: true});
    }
}
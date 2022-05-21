const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('uptime')
    .setDescription('Provides Uptime of the Bot'),
    async execute(interaction) {
        const moment = require("moment");
        require("moment-duration-format");
        const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
    },
};
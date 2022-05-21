const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('say')
    .addStringOption(option => option.setName('title').setDescription('Title of the Embed').setRequired(true))
    .addStringOption(option => option.setName('desc').setDescription('Description of the Embed').setRequired(true))
    .setDescription('Release an Embed with Arguments'),
    async execute(interaction) {
        const title = interaction.options.getString('title')
        const desc = interaction.options.getString('desc')
        const channel = interaction.channel
        const { MessageEmbed, Permissions } = require('discord.js')
    
        // Embed
        const embed = new MessageEmbed()
        .setTitle(`${title}`)
        .setDescription(`${desc}`)
        .setThumbnail(interaction.guild.iconURL())
        .setFooter(interaction.member.user.tag, interaction.member.displayAvatarURL())
        .setTimestamp()

        // Permissions
        if(interaction.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
            channel.send({content: '_ _', embeds: [embed]})
            await interaction.reply({ content: `Thanks ${interaction.user}`, ephemeral: true})
        } else {
            await interaction.reply({ content: `You lack permissions to do this!`, ephemeral: true})
        }
    },
};
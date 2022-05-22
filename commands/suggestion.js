const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('suggest')
    .addStringOption(option => option.setName('title').setDescription('Title of Suggestion').setRequired(true))
    .addStringOption(option => option.setName('desc').setDescription('Description of Suggestion').setRequired(true))
    .setDescription('Make a Suggestion'),
    async execute(interaction) {
        const title = interaction.options.getString('title')
        const desc = interaction.options.getString("desc")
        const channel = interaction.member.guild.channels.cache.get('')
        const { MessageEmbed } = require('discord.js')
        const embed = new MessageEmbed()
        .setName(`${title}`)
        .setDescription(`${desc}`)
        .setThumbnail(interaction.member.displayAvatarURL())
        .setFooter(interaction.member.user.tag)
        .setTimestamp()
        await interaction.reply({content: `Thanks ${interaction.user} for the Suggestion`, ephemeral: true})
        const msg = await channel.send({content: '_ _', embeds: [embed]})
        await msg.react('')
        await msg.react('')
    },
};
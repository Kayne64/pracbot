const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('purge')
    .addIntegerOption(option => option.setName('amount').setDescription('Amount of Messages to delete').setRequired(true))
    .setDescription('Delete up to 100 Messages'),
    async execute(interaction) {
        const { Permissions, MessageEmbed }  = require('discord.js');

        // Functionality
        if (interaction.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
            const amount = interaction.options.getInteger('amount');
            if (amount <=1 || amount > 100) {
                return interaction.reply({ content: 'You have to input a Number between `1` and `99`', ephemeral: true});
                await interaction.channel.bulkDelete(amount, true).catch(error => {
                    console.error(error)
                    interaction.reply({content: 'There was an error executing this command, Please Contact a Staff Member', ephemeral: true})
                })
                    interaction.reply({content: `Successfully Deleted ${amount} of messages`, ephemeral: true})
            }
        }
    },
};
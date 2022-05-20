// Required Classes
const fs = require('fs')
const { Client, Collection, Intents } = require('discord.js');
const config = require('./config.json');

// New Instance
const client = new Client({
    intents: [
        'GUILDS',
        'GUILD_MEMBERS',
        'DIRECT_MESSAGES',
        'GUILD_MESSAGES'
    ],
    partials: [
        'MESSAGE',
        'USER'
    ]
})

// Command Handler
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    client.commands.set(command.data.name, command)
}

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName)

    if (!command) return;

    try {
        await command.execute(interaction)
    } catch (error) {
    }
})

// Event Handler
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(client, ...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

// Logs

// Log when Ready
client.login(config.token)
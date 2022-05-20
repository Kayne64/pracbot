// Required Classes
const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const config = require('./config.json')

// Handler
const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

// Creating New Rest API
const rest = new REST({ version: '9'}).setToken(config.token)

// Registering Command
rest.put(Routes.applicationGuildCommands(config.client, config.guild), { body: commands})
.then(() => console.log(`Command's Successfuly Registered!`))
.catch(console.error)
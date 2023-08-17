const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('create_matchup')
		.setDescription('Creates a new 1v1 race'),
	async execute(interaction) {
		await interaction.reply('Test Reply!');
	},
};
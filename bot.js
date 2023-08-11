const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'; // Set your desired command prefix

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith(`${prefix}create_matchup`)) {
    // Create a new matchup message in the #match-up channel
    const matchupMessage = await message.channel.send('New matchup! React to join.');
    await matchupMessage.react('✅');
  }
});

client.on('messageReactionAdd', async (reaction, user) => {
  if (user.bot) return;

  if (reaction.message.channel.name === 'match-up' && reaction.emoji.name === '✅') {
    const joinedUser = reaction.message.guild.members.cache.get(user.id);
    await reaction.message.channel.send(`${joinedUser} has joined the race!`);

    // Add logic to initiate the race, send server invite links, etc.
  }
});

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
client.login(DISCORD_BOT_TOKEN);
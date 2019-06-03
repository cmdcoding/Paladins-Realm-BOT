// Import the discord.js module       //To install this download node.js the open command prompt type (npm intsall discord.js)
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {     //Tells the bot what to say if it works
  console.log('I am ready!');  //You will se I am Ready with means the bot should be online
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome To Paladins Realm, ${member.user}  Please read the rules then go to #role-assignment is where you can get pingable roles!`);
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('Put your bot client token in here');    //Very important without this the bot will not work

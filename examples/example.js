const goat = require('../routable-discord/index.js')
const token = 'BOT TOKEN'

var bot = new Monitor(token)

var routes = [
  {
    state: 1,
    prefix: "add",
    action: function(steamId, discordId, req) {
      console.log(steamId, discordId);
    }
  },
  {
    state: 1,
    prefix: "remove",
    action: function(steamId, discordId, req) {
      console.log(steamId, discordId);
      req.reply(steamId)
    }
  }

]

bot.init(routes)

bot.client.on('ready', () => {
  console.log(`Monitor started as ${bot.client.user.tag}!`);
});

bot.client.on('message', msg => {
  var msgString = msg.toString()
  if (msgString.includes("!prefix")) bot.learnRequest(msg), bot.solveRequest()
});

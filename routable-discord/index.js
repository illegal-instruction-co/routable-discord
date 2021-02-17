const Discord = require('discord.js')

class Monitor {
  constructor(token) {
    this.token = token;
    this.client = new Discord.Client();
  }

  init(routes) {
    this.client.login(this.token);
    this.routes = routes
  }

  learnRequest(req) {
    this.req = req
  }

  solveRequest() {
    var reqString = this.req.toString()
    var reqAssembly = reqString.split(' ')

    for (var item in this.routes) {
      if(reqAssembly[this.routes[item].state] === this.routes[item].prefix) {

        // delete old assembly
        for (var i = 0; i < this.routes[item].state + 1; i++) {
          reqAssembly.shift()
        }

        // invoke action
        this.routes[item].action(...reqAssembly, this.req)
      }
    }

  }

}

module.exports = Monitor

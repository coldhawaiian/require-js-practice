requirejs.config({
  baseUrl: "scripts",
  paths: {
    // "bootstrap": "../bower_components/bootstrap/dist/js",
    "jquery": "../bower_components/jquery/jquery"
  },
  shim: {
    // "bootstrap": { deps: ["jquery"] },
  }
});

require(["jquery", "player-factory"], function($, playerFactory) {
  // Show the different player class stats
  var players = ["Rogue", "Warrior", "Wizard"].map(function(player) {
    return playerFactory.get(player);
  });

  for (var i = 0, n = players.length; i < n; i++) {
    console.log(players[i].toString() + "\n");
  }
});

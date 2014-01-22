requirejs.config({
  baseUrl: "scripts",
  paths: {
    // "bootstrap": "../bower_components/bootstrap/dist/js",
    "fancyinput": "../bower_components/fancyInput/fancyInput",
    "jquery": "../bower_components/jquery/jquery"
  },
  shim: {
    // "bootstrap": { deps: ["jquery"] },
    "jquery.fancyinput": ["jquery"]
  }
});

require(["jquery", "fancyinput", "player-factory"],
function($, fancyinput, playerFactory) {
  // Show the different player class stats
  var players = ["Rogue", "Warrior", "Wizard"].map(function(player) {
    return playerFactory.get(player);
  });

  for (var i = 0, n = players.length; i < n; i++) {
    console.log(players[i].toString() + "\n");
  }

  // Try out jQuery Fancy Input plugin
  $("#cool-input").fancyInput();
});

requirejs.config({
  baseUrl: "scripts"
});

require(["player-factory"], function(playerFactory) {
  var players = ["Rogue", "Warrior", "Wizard"].map(function(player) {
    return playerFactory.get(player);
  });

  for (var i = 0, n = players.length; i < n; i++) {
    console.log(players[i].toString() + "\n");
  }
});

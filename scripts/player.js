define("player", function() {
  function Player() {
    this.type = "Player";
    // All players start with 10 points to every stat
    this.hitPoints = 10;
    this.manaPoints = 10;
    this.strength = 10;
    this.agility = 10;
  }
  Player.prototype.toString = function() {
    var stats = [
      "Type: " + this.type,
      "HP: " + this.hitPoints,
      "MP: " + this.manaPoints,
      "Strength: " + this.strength,
      "Agility: " + this.agility
    ];

    console.log(stats.join("\n"))
  };

  return Player;
});

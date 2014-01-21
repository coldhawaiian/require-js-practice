define("warrior", ["player"], function(Player) {
  function Warrior() {
    this.type = "Warrior";
    this.hitPoints = 15;
    this.strength = 15;
  }
  Warrior.prototype = new Player();

  return Warrior;
});

define("rogue", ["player"], function(Player) {
  function Rogue() {
    this.type = "Rogue";
    this.agility = 15;
  }
  Rogue.prototype = new Player();

  return Rogue;
});

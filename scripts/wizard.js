define("wizard", ["player"], function(Player) {
  function Wizard() {
    this.type = "Wizard";
    this.manaPoints = 15;
  }
  Wizard.prototype = new Player();

  return Wizard;
});

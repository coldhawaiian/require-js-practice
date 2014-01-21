define("player-factory", function(require) {
  var Rogue = require("rogue");
  var Warrior = require("warrior");
  var Wizard = require("wizard");

  var types = {
    "Rogue": Rogue,
    "Warrior": Warrior,
    "Wizard": Wizard
  };

  return {
    get: function(type) {
      return new types[type]();
    }
  };

});

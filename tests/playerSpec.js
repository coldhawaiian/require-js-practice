/* JSHint directives */
/* global describe */
/* global it */
/* global expect */

define(["player"], function(Player) {
  describe("Player", function() {
    it("should create players with 10 points to each stat", function() {
      var player = new Player();
      expect(player.agility).toBe(10);
      expect(player.hitPoints).toBe(10);
      expect(player.manaPoints).toBe(10);
      expect(player.strength).toBe(10);
    });
  });
});

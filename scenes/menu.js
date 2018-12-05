let Menu = {
  preload: function() {
      preloadAssets('all');
  },
  create: function() {
      game.add.sprite(0, 0, 'background');
      game.add.text(30, 30, 'Runx5', { font: "65px Arial", fill: "#3a58ff", align: "center" });
      game.add.text(30, 100, 'Choose a character to begin', { font: "40px Arial", fill: "#3a58ff", align: "center" });
      game.add.button(133, 200, 'kai', this.startGame('kai'), this);
      game.add.button(267, 200, 'fosse', this.startGame('fosse'), this);
      game.add.button(400, 200, 'megan', this.startGame('megan'), this);
      game.add.button(533, 200, 'john', this.startGame('john'), this);
      game.add.button(667, 200, 'matt', this.startGame('matt'), this);
  },


  update: function() {},
  render: function() {},


  startGame: function (buttonName) {
      return function () {
          characterSelection = buttonName;
          game.state.start('Game');
      }
  }
};





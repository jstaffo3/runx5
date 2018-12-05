let Game_Over = {

    preload : function() {
        preloadAssets('gameOver');
    },

    create : function() {
        game.add.sprite(0, 0, 'background');
        game.add.text(30, 30, 'Game Over', { font: "65px Arial", fill: "#fff458"});
        game.add.text(30, 100, 'Press Space Bar to restart game', { font: "40px Arial", fill: "#fff458"});
        let spaceBar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceBar.onDown.addOnce(this.startGame, this);
    },

    startGame: function () {
        game.state.start('Menu');
    }

};

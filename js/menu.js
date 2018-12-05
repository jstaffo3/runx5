let Menu = {

    preload : function() {
        preloadAssets('all');
    },

    create: function () {
        game.add.sprite(0, 0, 'background');
        game.add.text(30, 30, 'Runx5', { font: "65px Arial", fill: "#3a58ff", align: "center" });
        game.add.text(30, 100, 'Choose a character to begin', { font: "40px Arial", fill: "#3a58ff", align: "center" });
        game.add.button(400, 300, 'kai', this.startGame, this);
    },

    startGame: function () {
        game.state.start('Game');
    }
};
let Menu = {

    preload : function() {
        preloadAssets('all');
    },

    create: function () {
        game.add.sprite(0, 0, 'background');
        game.add.text(30, 30, 'Runx5', { font: "65px Arial", fill: "#3a58ff", align: "center" });
        game.add.text(30, 100, 'Choose a character to begin', { font: "40px Arial", fill: "#3a58ff", align: "center" });
        game.add.button(5, 150, 'kai', this.startGame('kai'), this);
        game.add.button(205, 150, 'fosse', this.startGame('fosse'), this);
        game.add.button(5, 360, 'megan', this.startGame('megan'), this);
        game.add.button(205, 360, 'john', this.startGame('john'), this);
        game.add.button(405, 360, 'matt', this.startGame('matt'), this);
    },

    startGame: function (buttonName) {
        return function () {
            chosenPlayer = buttonName;
            game.state.start('Game');
        }
    }
};
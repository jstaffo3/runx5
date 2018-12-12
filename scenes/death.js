let Death = {
    preload: function() {
        preloadAssets('Death');
    },
    create: function() {
        game.add.sprite(0, 0, 'background');
        game.add.text(30, 30, 'Game Over', { font: "65px Arial", fill: "#3a58ff", align: "center" });
        game.add.text(game.width/2, 100, `Score: \n ${score}`);
        restartButton = game.add.button(40, 350, 'restart', this.restartGame('restart'), this);
        restartButton.scale.setTo(0.3, 0.3);
        game.add.button(267, 200, 'fosse', this.restartGame('fosse'), this);
    },

    update: function() {},
    render: function() {},

    restartGame: function (buttonName) {
        return function () {
            if (buttonName === 'restart') {
                game.state.start('Game');
            } else {
                game.state.start('Menu');
            }
        }
    }
};
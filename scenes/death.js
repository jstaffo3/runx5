let Death = {
    preload: function() {
        preloadAssets('death');
    },
    create: function() {
        game.add.sprite(0, 0, 'background');
        game.add.text(30, 30, 'Game Over', {font: "65px Courier", fill: "#ffffff"});
        game.add.text(game.width/2, 100, `Score: \n ${score}`, {font: "40px Courier", fill: "#ffffff"});
        restartButton = game.add.button(80, 350, 'restart', this.restartGame('restart'), this).scale.setTo(0.2, 0.2);
        newCharacterButton = game.add.button(430, 320, 'newCharacter', this.restartGame('newCharacter'), this).scale.setTo(0.2, 0.2);
    },

    update: function() {
        //restartButton.key = (restartButton.input.pointerOver()) ? 'restartHover' : 'restart';
    },
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
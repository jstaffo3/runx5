let Death = {
	preload: function () {
		preloadAssets('death');
	},

	create: function () {
		game.add.sprite(0, 0, 'background');
		game.add.sprite(0, 0, 'gameOverScreen');
		game.add.text(250, 200, `Score: ${score}`, {font: "40px Courier", fill: "#ffffff"});
		restartButton = game.add.button(80, 350, 'restart', this.restartGame('restart'), this).scale.setTo(0.2, 0.2);
		newCharacterButton = game.add.button(430, 320, 'newCharacter', this.restartGame('newCharacter'), this).scale.setTo(0.2, 0.2);
	},
	
	update: function () {
	},

	render: function () {
	},
	
	restartGame: function (buttonName) {
		scarecrowActive = false;
		return function () {
			if (buttonName === 'restart') {
				game.state.start('Game');
			} else {
				game.state.start('Menu');
			}
		}
	}
};
let Menu = {
	preload: function () {
		preloadAssets('all');
	},
	create: function () {
		
		game.add.sprite(0, 0, 'background');
		game.add.sprite(0, 0, 'menuScreen');
		//game.add.text(30, 30, 'Runx5', { font: "65px Arial", fill: "#3a58ff", align: "center" });
		//game.add.text(30, 100, 'Choose a character to begin', { font: "40px Arial", fill: "#3a58ff", align: "center" });
		game.add.button(133, 350, 'kai', this.startGame('kai'), this);
		game.add.button(267, 350, 'fosse', this.startGame('fosse'), this);
		game.add.button(400, 350, 'megan', this.startGame('megan'), this);
		game.add.button(533, 350, 'john', this.startGame('john'), this);
		game.add.button(667, 350, 'matt', this.startGame('matt'), this);
	},
	
	
	update: function () {
	},
	render: function () {
	},
	
	
	startGame: function (buttonName) {
		return function () {
			characterSelection = buttonName;
			bossSpawnerArray = characterArray.filter(x => x !== characterSelection);
			game.state.start('Game');
		}
	}
};





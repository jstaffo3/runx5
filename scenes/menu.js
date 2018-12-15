let Menu = {
	preload: function () {
		preloadAssets('all');
	},
	create: function () {
		game.add.sprite(0, 0, 'background');
		game.add.sprite(0, 0, 'menuScreen');
		game.add.button(133, 350, 'kai', this.startGame('kai'), this);
		game.add.button(267, 350, 'fosse', this.startGame('fosse'), this);
		game.add.button(400, 350, 'megan', this.startGame('megan'), this);
		game.add.button(533, 350, 'john', this.startGame('john'), this);
		game.add.button(667, 350, 'matt', this.startGame('matt'), this);
		game.add.text(128, 430, 'Kai', {font: "30px Courier", fill: "#ffffff"});
		game.add.text(237, 430, 'Fosse', {font: "30px Courier", fill: "#ffffff"});
		game.add.text(380, 430, 'Megan', {font: "30px Courier", fill: "#ffffff"});
		game.add.text(513, 430, 'John', {font: "30px Courier", fill: "#ffffff"});
		game.add.text(627, 430, 'Matthew', {font: "30px Courier", fill: "#ffffff"});
	},
	
	
	update: function () {
	},
	render: function () {
	},
	
	
	startGame: function (buttonName) {
		return function () {
			characterSelection = buttonName;
			game.state.start('Game');
		}
	}
};





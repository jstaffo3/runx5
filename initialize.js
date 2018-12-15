const game = new Phaser.Game(
	800,
	600,
	Phaser.CANVAS,
	'runx5'
);
game.state.add('Menu', Menu);
game.state.add('Game', Game);
game.state.add('Death', Death);

let characterSelection;
let score;
let player;
let playerCollisionGroup;
let toalMinionGroup;
let toalMinionsCollisionGroup;
let bossEnemyGroup;
let bossEnemyCollisionGroup;
let abilityGroup;
let abilityCollisionGroup;
let healthBar;
let healthBarFill;
let healthLocation = [15, 15];
let restartButton;
let newCharacterButton;
let scarecrowActive = false;
let scarecrow;
let characterArray = ['megan', 'john', 'fosse', 'matt', 'kai'];
let bossSpawnerArray;
let boostPad;
let boostPadPressed;
let boostPadGroup;
let javaBomb;
let javaBombActive = false;


game.state.start('Menu');
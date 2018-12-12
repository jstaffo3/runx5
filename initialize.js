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
//let bossEnemiesCollisionGroup;
let playerSpeedBase = 300;
let playerSpeedModifier = 1;
let abilityGroup;
let abilityCollisionGroup;
let healthBar;
let healthBarFill;
let healthLocation = [50, 30];
let restartButton;
let newCharacterButton;

game.state.start('Menu');
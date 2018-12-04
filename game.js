const game = new Phaser.Game(
    800,
    600,
    Phaser.AUTO,
    'phaser-example', {
        preload: preload,
        create: create,
        update: update
    }
);

function preload() {
    game.load.image('background', 'assets/grass.png');
    game.load.image('kai', 'assets/kai.png');
    game.load.image('fosse', 'assets/fosse.png');
    game.load.image('megan', 'assets/megan.png');
    game.load.image('matt', 'assets/matthew.png');
    game.load.image('john', 'assets/john.png');
    game.load.image('toal','assets/toal.png');
}

let cursors;
let activePlayer;
let enemies = [];

function create() {
    game.add.tileSprite(0, 0, 2000, 2000, 'background');
    game.world.setBounds(0, 0, 2000, 2000);

    activePlayer = new Player('kai');

    enemies.push(new BossEnemy('fosse', 4.01));
    enemies.push(new BossEnemy('megan', 5.2));
    enemies.push(new BossEnemy('matt', 1));
    enemies.push(new BossEnemy('john', 2.9));
    for(let i = 0; i < 10; i++){
    	enemies.push(new ToalMinion());
	}

    game.add.physicsGroup(Phaser.Physics.ARCADE);
    game.physics.startSystem(Phaser.Physics.P2JS);
	game.physics.p2.enable(activePlayer.sprite);
	activePlayer.sprite.body.fixedRotation = true;
	
	cursors = game.input.keyboard.createCursorKeys();
    wasd = {
        up: game.input.keyboard.addKey(Phaser.Keyboard.W),
        down: game.input.keyboard.addKey(Phaser.Keyboard.S),
        left: game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    };
    game.camera.follow(activePlayer.sprite, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
}

function update() {
    activePlayer.move();
    enemies.forEach(e => e.move(activePlayer));
    enemies.forEach(e => e.collisionCheck(activePlayer));
}

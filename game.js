var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update});

function preload() {
    game.load.image('background','assets/grass.png')
    game.load.image('kai', 'assets/kai.png');
    game.load.image('fosse', 'assets/fosse.png');
    game.load.image('megan', 'assets/megan.png');
    game.load.image('matt', 'assets/matthew.png');
    game.load.image('john', 'assets/john.png');
}
let cursors;
let charKai;
let enemies;
let opponent = [];
let enemySpeed = [];

function create() {
    game.add.tileSprite(0, 0, 2000, 2000, 'background');
    game.world.setBounds(0, 0, 2000, 2000);

    charKai = game.add.sprite(game.world.centerX, game.world.centerY, 'kai');
    charKai.scale.setTo(0.3);

    enemies = game.add.physicsGroup(Phaser.Physics.ARCADE);
    let spriteNames = ['fosse', 'megan', 'matt', 'john'];
    for (let i = 0; i <4; i++ )
    {
        opponent[i] = game.add.sprite(game.world.randomX, game.world.randomY, spriteNames[i]);
        opponent[i].scale.setTo(0.3);
        opponent[i].vel = 400;
        enemySpeed[i] = Math.random()*150 + 20;
    }
    game.physics.startSystem(Phaser.Physics.P2JS);
    game.physics.p2.enable(charKai);
    charKai.body.fixedRotation = true;

    cursors = game.input.keyboard.createCursorKeys();
    game.camera.follow(charKai, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
}

function update(){
    let speed = playerSpeedBase * playerSpeedModifier;
    // enemies.body.setZeroVelocity();
    charKai.body.setZeroVelocity();

    if (cursors.up.isDown)
    {
        charKai.body.moveUp(speed);

    }
    else if (cursors.down.isDown)
    {
        charKai.body.moveDown(speed);
    }

    if (cursors.left.isDown)
    {
        charKai.body.moveLeft(speed);
    }
    else if (cursors.right.isDown)
    {
        charKai.body.moveRight(speed);
    }
    for (let i = 0; i <4; i++ ) {
        opponent[i].position.x += (charKai.position.x - opponent[i].position.x) / enemySpeed[i];
        opponent[i].position.y += (charKai.position.y - opponent[i].position.y) / enemySpeed[i];

    }
}
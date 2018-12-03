var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update});

function preload() {
    game.load.image('background','assets/grass.png')
    game.load.image('Kai', 'assets/kai.png');
    game.load.image('Fosse', 'assets/fosse.png');
    game.load.image('Megan', 'assets/megan.png');

}
    let cursors;
    let charKai;
    let enemies;

function create() {
    game.add.tileSprite(0, 0, 2000, 2000, 'background');
    game.world.setBounds(0, 0, 2000, 2000);

    charKai = game.add.sprite(game.world.centerX, game.world.centerY, 'Kai');
    charKai.scale.setTo(0.3);

    enemies = game.add.physicsGroup(Phaser.Physics.ARCADE);



    for (let i = 1; i <5; i++ )
    {
        let opponent = enemies.create(game.world.randomX, game.world.randomY, 'Fosse',i);
        opponent.scale.setTo(0.3);
        let opponent2 = enemies.create(game.world.randomX, game.world.randomY, 'Megan',i);
        opponent2.scale.setTo(0.3);
    }
    game.physics.startSystem(Phaser.Physics.P2JS);
    game.physics.p2.enable(charKai);
    charKai.body.fixedRotation = true;

    cursors = game.input.keyboard.createCursorKeys();
    game.camera.follow(charKai, Phaser.Camera.FOLLOW_LOCKON, 0.01, 0.01);
}

function update(){

    charKai.body.setZeroVelocity();

    if (cursors.up.isDown)
    {
        charKai.body.moveUp(300)
    }
    else if (cursors.down.isDown)
    {
        charKai.body.moveDown(300);
    }

    if (cursors.left.isDown)
    {
        charKai.body.velocity.x = -300;
    }
    else if (cursors.right.isDown)
    {
        charKai.body.moveRight(300);
    }




}


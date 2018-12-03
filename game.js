var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('fosse', 'assets/fosse.png');

}

function create() {
    let fosse = game.add.sprite(50, 50, 'fosse');
}

function update() {
    playerMovement();
}
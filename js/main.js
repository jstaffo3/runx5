const game = new Phaser.Game(
    800,
    600,
    Phaser.AUTO,
    'phaser-example'
);

game.state.add('Menu', Menu);
game.state.add('Game', Game);
game.state.add('Game_Over', Game_Over);

game.state.start('Menu');
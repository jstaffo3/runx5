function centerSprite(object) {
    object.anchor.x = 0.5;
    object.anchor.y = 0.5;
}
function toalCollision() {
    player.health -= 1;
}
function preloadAssets (set) {
    switch (set) {
        case 'all':
            game.load.image('background', 'assets/grass.png');
            game.load.image('kai', 'assets/kai.png');
            game.load.image('fosse', 'assets/fosse.png');
            game.load.image('megan', 'assets/megan.png');
            game.load.image('matt', 'assets/matthew.png');
            game.load.image('john', 'assets/john.png');
            game.load.image('toal', 'assets/toal.png');
            break;
        case 'gameOver':
            game.load.image('background', 'assets/grass.png');
            break;
    }
}
function scaleSprite(object, scale) {
    object.scale.setTo(scale);
    object.body.setRectangle(object.width, object.height);
}
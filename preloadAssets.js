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
            game.load.image('title', 'assets/title.png');
            break;
        case 'gameOver':
            game.load.image('background', 'assets/grass.png');
            break;
    }
}
function centerSprite(object) {
    object.anchor.x = 0.5;
    object.anchor.y = 0.5;
}
function toalCollision(object) {
    return function() {
        player.health -= 1;
        //toalMinionGroup.remove(object);
        object.sprite.kill();
        //toalMinionGroup.children.splice(toalMinionGroup.children.indexOf(object),1);
    }
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
function moveToward(follower, leader) {
    const dx = leader.sprite.x - follower.x;
    const dy = leader.sprite.y - follower.y;
    const magnitude = Math.hypot(dx, dy);
    follower.body.setZeroVelocity();
    follower.body.moveRight((dx / magnitude) * follower.speed);
    follower.body.moveDown((dy / magnitude) * follower.speed);
}
function spawnToals() {
    for (i=0;i<10;i++) {
        new ToalMinion();
    }
    game.time.events.add(Phaser.Timer.SECOND * 5, spawnToals, this);

}
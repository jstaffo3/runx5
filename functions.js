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
        if (player.health <= 0) {
            Game.endGame();
        }
    }
}

function abilityCollision(object)
{
    return function()
    {
        //initiate powerup
        //delete image of egg
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
            game.load.image('scarecrow', 'assets/scarecrow.png');
            game.load.image('egg', 'assets/yoshiegg.png');
            game.load.image('healthBar', 'assets/healthBar.png');
            game.load.image('healthBarFill', 'assets/healthBarFill.png');
            break;
        case 'Death':
            game.load.image('background', 'assets/grass.png');
            game.load.image('restart', 'assets/restart.png');
            game.load.image('newCharacter', 'assets/newCharacter.png');
            game.load.image('restartHover', 'assets/restartHover.png');
            game.load.image('newCharacterHover', 'assets/newCharacterHover.png');
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
    for (let i = 0; i < 10; i++) {
        new ToalMinion();
    }
    game.time.events.add(Phaser.Timer.SECOND * 5, spawnToals, this);

}
function spawnAbility() {
        new Ability();

    game.time.events.add(Phaser.Timer.SECOND * 5, spawnAbility, this);

}

function updateHealthBar() {
    //player.health/player.healthMax*healthBarFill.width
    let newWidth = healthBar.width;
    let cropRect = new Phaser.Rectangle(healthLocation, healthLocation, newWidth, healthBar.height);
    healthBarFill.crop(cropRect);
}




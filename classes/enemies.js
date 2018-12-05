class ToalMinion {
    constructor() {
        this.speed = Math.random() * 130 + 150;
        this.sprite = toalMinionGroup.create(game.world.randomX, game.world.randomY, 'toal');
        centerSprite(this.sprite);
        let size = Math.random() * .15 + 0.125;
        this.sprite.scale.setTo(size);
        scaleSprite(this.sprite, Math.random() * 0.15 + 0.15);
        this.sprite.body.fixedRotation = true;

        //Physics
        this.sprite.body.setRectangle(size*163, size*202);
        this.sprite.body.setCollisionGroup(toalMinionsCollisionGroup);
        this.sprite.body.collides([toalMinionsCollisionGroup, playerCollisionGroup]);
    }
}
function moveToward(follower, leader) {
    const dx = leader.sprite.x - follower.sprite.x;
    const dy = leader.sprite.y - follower.sprite.y;
    const magnitude = Math.hypot(dx, dy);
    follower.sprite.body.setZeroVelocity();
    follower.sprite.body.moveRight((dx / magnitude) * follower.speed);
    follower.sprite.body.moveDown((dy / magnitude) * follower.speed);
}

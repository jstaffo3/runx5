class ToalMinion {
    constructor() {
        this.speed = Math.random() * 4 + 1;
        this.sprite = toalMinionGroup.create(game.world.randomX, game.world.randomY, 'toal');
        centerSprite(this.sprite);
        this.sprite.scale.setTo(Math.random() * .15 + 0.125);

        //Physics
        this.sprite.body.setCollisionGroup(toalMinionsCollisionGroup);
        this.sprite.body.collides([toalMinionsCollisionGroup, playerCollisionGroup]);
    }
}
class ToalMinion {
    constructor() {
        this.speed = Math.random() * 4 + 1;
        this.sprite = toalMinionGroup.create(game.world.randomX, game.world.randomY, 'toal');
        centerSprite(this.sprite);
        let size = Math.random() * .15 + 0.125;
        this.sprite.scale.setTo(size);

        //Physics
        this.sprite.body.setRectangle(size*163, size*202);
        this.sprite.body.setCollisionGroup(toalMinionsCollisionGroup);
        this.sprite.body.collides([toalMinionsCollisionGroup, playerCollisionGroup]);
    }
}
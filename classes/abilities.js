class Ability {

    constructor() {

        const size = 0.2;

        this.sprite = abilityGroup.create(game.world.randomX, game.world.randomY, 'egg');
        centerSprite(this.sprite);
        scaleSprite(this.sprite, size);

        //Physics
        this.sprite.body.fixedRotation=true;
        this.sprite.body.setRectangle(size*163, size*202);
        this.sprite.body.setCollisionGroup(abilityCollisionGroup);
        this.sprite.body.collides(playerCollisionGroup, abilityCollision(this), this);
        this.sprite.body.collides(abilityCollisionGroup);
        this.sprite.body.setZeroVelocity();
        }
}
class Scarecrow {
    constructor(x, y) {
        this.size = 0.5;
        this.x = x;
        this.y = y;
        this.sprite = game.add.sprite(this.x, this.y, 'scarecrow');
        centerSprite(this.sprite);
        scaleSprite(this.sprite, this.size);
    }
}
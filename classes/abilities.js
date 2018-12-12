class Ability {

    constructor() {

        const size = 0.2;

        this.sprite = abilityGroup.create(game.world.randomX, game.world.randomY, 'egg');
        centerSprite(this.sprite);
        scaleSprite(this.sprite, size);

        this.sprite.body.fixedRotation=true;

        this.sprite.body.setRectangle(size*163, size*202);
        this.sprite.body.setCollisionGroup(abilityCollisionGroup);
        this.sprite.body.collides(playerCollisionGroup, abilityCollision(this), this);
        this.sprite.body.collides(abilityCollisionGroup);

        this.sprite.body.setZeroVelocity();



        }










}
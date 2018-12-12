class ToalMinion {
    constructor() {
		const size = Math.random() * .15 + 0.125;
		this.sprite = toalMinionGroup.create(game.world.randomX, game.world.randomY, 'toal');
        this.sprite.speed = Math.random() * 150 + 150;
        centerSprite(this.sprite);

        scaleSprite(this.sprite, size);
        this.sprite.body.fixedRotation = true;

        //Physics
        this.sprite.body.setRectangle(size*163, size*202);
        this.sprite.body.setCollisionGroup(toalMinionsCollisionGroup);
        this.sprite.body.collides(playerCollisionGroup, toalCollision(this), this);
        this.sprite.body.collides(toalMinionsCollisionGroup);

        //Decay timer
        game.time.events.add(Phaser.Timer.SECOND * 18, this.fade, this);

    }
    fade() {
        if (this.sprite.alpha > 0.05) {
            this.sprite.alpha -= 0.05;
            game.time.events.add(Phaser.Timer.SECOND * 0.1, this.fade, this);
        } else {
            this.sprite.kill();
        }
    }
}
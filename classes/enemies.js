class ToalMinion {
    constructor() {
		this.size = Math.random() * .15 + 0.125;
		this.sprite = toalMinionGroup.create(game.world.randomX, game.world.randomY, 'toal');
        this.sprite.speed = Math.random() * 150 + 150;
        centerSprite(this.sprite);
        scaleSprite(this.sprite, this.size);
        this.sprite.body.fixedRotation = true;

        //Physics
        this.sprite.body.setRectangle(this.size*163, this.size*202);
        this.sprite.body.setCollisionGroup(toalMinionsCollisionGroup);
        this.sprite.body.collides(playerCollisionGroup, toalCollision(this), this);
        this.sprite.body.collides([toalMinionsCollisionGroup, bossEnemyCollisionGroup]);

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

class BossEnemy {
    constructor() {
        this.size = 1.5;
        this.name = bossSpawnerArray[Math.floor(Math.random()*(bossSpawnerArray.length+1))];
        this.sprite = bossEnemyGroup.create(game.world.randomX, game.world.randomY, this.name);
        this.sprite.speed = Math.random() * 100 + 220;
        centerSprite(this.sprite);
        scaleSprite(this.sprite, this.size);
        this.sprite.body.fixedRotation = true;

        //Physics
        this.sprite.body.setCollisionGroup(bossEnemyCollisionGroup);
        this.sprite.body.collides(playerCollisionGroup, this.playerCollision(this), this);
        this.sprite.body.collides([toalMinionsCollisionGroup, bossEnemyCollisionGroup]);
    }
    playerCollision(object) {
        return function() {
            player.speedModifier = 0.85;
            game.time.events.add(Phaser.Timer.SECOND * 5, function() {player.speedModifier = 1;}, this);
            if (object.size >= 0) {
                object.size -= .05;
                scaleSprite(object.sprite, object.size);
                centerSprite(object.sprite);
                game.time.events.add(Phaser.Timer.SECOND * 0.05, object.deathSequence, this);
            } else {
                object.sprite.kill();
            }
        }
    }
}
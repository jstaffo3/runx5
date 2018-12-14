class ToalMinion {
	constructor() {
		this.size = Math.random() * .15 + 0.125;
		this.sprite = toalMinionGroup.create(game.world.randomX, game.world.randomY, 'toal');
		this.sprite.speed = Math.random() * 150 + 150;
		this.sprite.follow = true;
		centerSprite(this.sprite);
		scaleSprite(this.sprite, this.size);
		this.sprite.body.fixedRotation = true;
		
		//Physics
		this.sprite.body.setRectangle(this.size * 163, this.size * 202);
		this.sprite.body.setCollisionGroup(toalMinionsCollisionGroup);
		this.sprite.body.collides(playerCollisionGroup, this.toalCollision(this), this);
		this.sprite.body.collides([toalMinionsCollisionGroup, bossEnemyCollisionGroup]);
		
		//Decay timer
		game.time.events.add(Phaser.Timer.SECOND * 18, this.fade, this);
	}
	
	toalCollision(object) {
		return function () {
			player.health -= 1;
			object.sprite.kill();
			if (player.health <= 0) {
				Game.endGame();
			}
		}
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
		this.name = bossSpawnerArray[Math.floor(Math.random() * (bossSpawnerArray.length + 1))];
		this.sprite = bossEnemyGroup.create(game.world.randomX, game.world.randomY, this.name);
		this.sprite.follow = true;
		this.sprite.speed = Math.random() * 100 + 220;
		centerSprite(this.sprite);
		scaleSprite(this.sprite, this.size);
		this.sprite.body.fixedRotation = true;
		
		//Physics
		this.sprite.body.setCollisionGroup(bossEnemyCollisionGroup);
		this.sprite.body.collides(playerCollisionGroup, this.playerCollision(), this);
		this.sprite.body.collides([toalMinionsCollisionGroup, bossEnemyCollisionGroup]);
	}
	
	playerCollision() {
		return function () {
			game.camera.flash(0xff0000, 500);
			player.health -= 10;
			player.speedModifier = 0.65;
			game.time.events.add(Phaser.Timer.SECOND * 2, function () {
				player.speedModifier = 1;
			}, this);
			this.sprite.follow = false;
			this.shrink();
		}
	}
	
	shrink() {
		if (this.size >= 0) {
			this.size -= .01;
			scaleSprite(this.sprite, this.size);
			centerSprite(this.sprite);
			game.time.events.add(Phaser.Timer.SECOND * 0.01, this.shrink, this);
		} else {
			this.sprite.kill();
		}
	}
}
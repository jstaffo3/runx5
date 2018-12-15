class ToalMinion {
	constructor() {
		this.size = Math.random() * .15 + 0.125;
		this.sprite = toalMinionGroup.create(getSpawnLocation()[0], getSpawnLocation()[1], 'toal');
		this.sprite.speed = Math.random() * 150 + 150;
		this.sprite.follow = true;
		formatSprite(this.sprite, this.size);
		
		//Physics
		this.sprite.body.setRectangle(this.size * 163, this.size * 202);
		this.sprite.body.setCollisionGroup(toalMinionsCollisionGroup);
		this.sprite.body.collides(playerCollisionGroup, this.toalCollision(this), this);
		this.sprite.body.collides([toalMinionsCollisionGroup, bossEnemyCollisionGroup]);
		
		//Decay timer
		game.time.events.add(Phaser.Timer.SECOND * 25, this.fade, this);
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
	constructor(name) {
		this.size = 1.5;
		this.name = name;
		this.sprite = bossEnemyGroup.create(getSpawnLocation()[0], getSpawnLocation()[1], this.name);
		this.sprite.follow = true;
		this.sprite.speed = Math.random() * 85 + 240;
		formatSprite(this.sprite, this.size);
		
		//Physics
		this.sprite.body.setCollisionGroup(bossEnemyCollisionGroup);
		this.sprite.body.collides(playerCollisionGroup, this.playerCollision(), this);
		this.sprite.body.collides([toalMinionsCollisionGroup, bossEnemyCollisionGroup]);
	}
	
	playerCollision() {
		return function () {
			game.camera.flash(0xff0000, 500);
			player.health -= 12.5;
			player.speedModifier = 0.65;
			game.time.events.add(Phaser.Timer.SECOND * 2, function () {
				player.speedModifier = 1;
			}, this);
			this.sprite.follow = false;
			this.shrink();
			if (player.health <= 0) {
				Game.endGame();
			}
		}
	}
	
	shrink() {
		if (this.size >= 0) {
			this.size -= .01;
			formatSprite(this.sprite, this.size);
			game.time.events.add(Phaser.Timer.SECOND * 0.01, this.shrink, this);
		} else {
			this.sprite.kill();
		}
	}
}
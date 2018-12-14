class Ability {
	constructor() {
		const size = 0.2;
		this.sprite = abilityGroup.create(game.world.randomX, game.world.randomY, 'egg');
		centerSprite(this.sprite);
		scaleSprite(this.sprite, size);
		
		//Physics
		this.sprite.body.fixedRotation = true;
		this.sprite.body.setRectangle(size * 163, size * 202);
		this.sprite.body.setCollisionGroup(abilityCollisionGroup);
		this.sprite.body.collides(playerCollisionGroup, this.abilityCollision(this), this);
		this.sprite.body.collides(abilityCollisionGroup);
		this.sprite.body.setZeroVelocity();
	}
	
	abilityCollision(object) {
		return function () {
			if (!scarecrowActive) {
				scarecrow = new Scarecrow(object.sprite.x, object.sprite.y);
				new Ability();
				object.sprite.kill();
				scarecrowActive = true;
				game.time.events.add(Phaser.Timer.SECOND * 5, scarecrow.deathSequence, this);
			}
		}
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
	
	deathSequence() {
		if (scarecrow.size <= 1.5) {
			scarecrow.size += .05;
			scaleSprite(scarecrow.sprite, scarecrow.size);
			centerSprite(scarecrow.sprite);
			game.time.events.add(Phaser.Timer.SECOND * 0.1, scarecrow.deathSequence, this);
		} else {
			scarecrowActive = false;
			scarecrow.sprite.kill();
		}
	}
}

class BoostPad {
	constructor(x, y) {
		const angleToCenter = Math.atan2(y - game.world.centerY, x - game.world.centerX) * 180 / Math.PI - 90;
		this.size = 0.25;
		this.sprite = boostPadGroup.create(x, y, 'boostPad');
		this.sprite.angle = angleToCenter;
		scaleSprite(this.sprite, this.size);
		centerSprite(this.sprite);
	}
}
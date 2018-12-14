class Player {
	constructor(name) {
		this.name = name;
		this.sprite = game.add.sprite(game.world.centerX, game.world.centerY, name);
		centerSprite(this.sprite);
		this.health = 100;
		this.healthMax = 100;
		this.speedBase = 310;
		this.speedModifier = 1;
		this.diagonalSpeedModifier = 1;
	}
	
	move() {
		this.sprite.body.setZeroVelocity();
		if (((cursors.up.isDown || wasd.up.isDown) || (cursors.down.isDown || wasd.down.isDown)) && ((cursors.left.isDown || wasd.left.isDown) || (cursors.right.isDown || wasd.right.isDown))) {
			this.diagonalSpeedModifier = Math.cos(Math.PI / 4);
		} else {
			this.diagonalSpeedModifier = 1;
		}
		let speed = this.speedBase * this.speedModifier * this.diagonalSpeedModifier;
		
		if (cursors.up.isDown || wasd.up.isDown) {
			this.sprite.body.velocity.y = -speed;
		} else if (cursors.down.isDown || wasd.down.isDown) {
			this.sprite.body.velocity.y = speed;
		}
		if (cursors.left.isDown || wasd.left.isDown) {
			this.sprite.body.velocity.x = -speed;
		} else if (cursors.right.isDown || wasd.right.isDown) {
			this.sprite.body.velocity.x = speed;
		}
	}
}
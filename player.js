class Player {
	constructor(name) {
		this.name = name;
		this.sprite = game.add.sprite(game.world.centerX, game.world.centerY, name);
		this.sprite.scale.setTo(.3);
	}
	
	move() {
		let speed = 300;
		this.sprite.body.setZeroVelocity();
		if (cursors.up.isDown || wasd.up.isDown) {
			this.sprite.body.moveUp(speed);
		} else if (cursors.down.isDown || wasd.down.isDown) {
			this.sprite.body.moveDown(speed);
		}
		if (cursors.left.isDown || wasd.left.isDown) {
			this.sprite.body.moveLeft(speed);
		} else if (cursors.right.isDown || wasd.right.isDown) {
			this.sprite.body.moveRight(speed);
		}
	}
}

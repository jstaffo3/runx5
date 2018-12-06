class Player {
    constructor(name) {
        this.name = name;
        this.sprite = game.add.sprite(game.world.centerX, game.world.centerY, name);
        centerSprite(this.sprite);
        this.health = 100;
    }
    move() {
		//let speed = Math.hypot(this.sprite.body.velocity.x,this.sprite.body.velocity.y);
        this.sprite.body.setZeroVelocity();
        playerSpeedModifier = 1;
        
        if (((cursors.up.isDown || wasd.up.isDown)||(cursors.down.isDown || wasd.down.isDown))&&((cursors.left.isDown || wasd.left.isDown)||(cursors.right.isDown || wasd.right.isDown))){
			playerSpeedModifier = Math.cos(Math.PI/4);
		}
		let speed = playerSpeedBase * playerSpeedModifier;
        
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
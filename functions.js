function preloadAssets(set) {
	switch (set) {
		case 'all':
			game.load.image('background', 'assets/grass.png');
			game.load.image('kai', 'assets/kai.png');
			game.load.image('fosse', 'assets/fosse.png');
			game.load.image('megan', 'assets/megan.png');
			game.load.image('matt', 'assets/matthew.png');
			game.load.image('john', 'assets/john.png');
			game.load.image('toal', 'assets/toal.png');
			game.load.image('scarecrow', 'assets/scarecrow.png');
			game.load.image('egg', 'assets/yoshiegg.png');
			game.load.image('healthBar', 'assets/healthBar.png');
			game.load.image('healthBarFill', 'assets/healthBarFill.png');
			game.load.image('menuScreen', 'assets/MenuScreen.png');
			game.load.image('boostPad', 'assets/boostPad.png');
			game.load.image('boostPadPressed', 'assets/boostPadPressed.png');
			game.load.image('javaBomb', 'assets/javaBomb.png');
			break;
		case 'death':
			game.load.image('background', 'assets/grass.png');
			game.load.image('restart', 'assets/restart.png');
			game.load.image('newCharacter', 'assets/newCharacter.png');
			//game.load.image('restartHover', 'assets/restartHover.png');
			//game.load.image('newCharacterHover', 'assets/newCharacterHover.png');
			game.load.image('gameOverScreen', 'assets/GameOverScreen.png');
			break;
	}
}

function centerSprite(object) {
	object.anchor.x = 0.5;
	object.anchor.y = 0.5;
}

function spawnBossEnemy() {
	new BossEnemy();
	game.time.events.add(Phaser.Timer.SECOND * 15, spawnBossEnemy, this);
}

function checkPlayerBoost(pad) {
	if (Phaser.Rectangle.intersects(player.sprite.getBounds(), pad.getBounds())) {
		player.speedModifier = 1.5;
		pad.loadTexture('boostPadPressed');
		game.time.events.add(Phaser.Timer.SECOND * 5, function () {
			player.speedModifier = 1;
			pad.loadTexture('boostPad');
		}, this);
	}
}

function checkToalBomb(toal) {
	if (Phaser.Rectangle.intersects(javaBomb.sprite.getBounds(), toal.getBounds())) {
		toal.kill();
	}
}

function scaleSprite(object, scale) {
	object.scale.setTo(scale);
	if (object.body !== null) {
		object.body.setRectangle(object.width, object.height);
	}
}

function moveToward(follower, leader) {
	if (follower.follow === true) {
		const dx = leader.sprite.x - follower.x;
		const dy = leader.sprite.y - follower.y;
		const magnitude = Math.hypot(dx, dy);
		follower.body.setZeroVelocity();
		follower.body.moveRight((dx / magnitude) * follower.speed);
		follower.body.moveDown((dy / magnitude) * follower.speed);
	}
}

function spawnToals() {
	for (let i = 0; i < 10; i++) {
		new ToalMinion();
	}
	game.time.events.add(Phaser.Timer.SECOND * 5, spawnToals, this);
}


function spawnAbility() {
	for (let i = 0; i < 3; i++){
		new Ability();
	}
}


function crop(object, initialWidth) {
	let cropRect = new Phaser.Rectangle(0, 0, player.health / player.healthMax * initialWidth, object.height);
	object.crop(cropRect);
}

function placeBoostPads() {
	const padCoorindates = [[200, 200], [1800, 1800]];
	for (let coordinates of padCoorindates) {
		new BoostPad(coordinates[0], coordinates[1]);
	}
}
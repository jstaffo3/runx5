let Game = {

    preload: function() {
        preloadAssets('all');
    },

    create: function() {
        game.add.tileSprite(0, 0, 2000, 2000, 'background');
        game.world.setBounds(0, 0, 2000, 2000);

        activePlayer = new Player(chosenPlayer);

        game.add.physicsGroup(Phaser.Physics.ARCADE);
        game.physics.startSystem(Phaser.Physics.P2JS);
        game.physics.p2.enable(activePlayer.sprite);
        activePlayer.sprite.body.fixedRotation = true;

        cursors = game.input.keyboard.createCursorKeys();
        wasd = {
            up: game.input.keyboard.addKey(Phaser.Keyboard.W),
            down: game.input.keyboard.addKey(Phaser.Keyboard.S),
            left: game.input.keyboard.addKey(Phaser.Keyboard.A),
            right: game.input.keyboard.addKey(Phaser.Keyboard.D),
        };
        game.camera.follow(activePlayer.sprite, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

        //Enemy Spawning
        game.time.events.add(Phaser.Timer.SECOND * 5, spawnMinions, this);
        game.time.events.add(Phaser.Timer.SECOND * 10, spawnBoss, this);


    },

    update: function() {
        activePlayer.move();
        enemies.forEach(e => e.move(activePlayer));
        enemies.forEach(e => e.collisionCheck(activePlayer));
        healthBar.value = activePlayer.health;
        if (activePlayer.health <= 0) {
            game.state.start('Game_Over');
        }
    },

};
let Game = {
    preload: function () {
        preloadAssets('all');
    },
    create: function () {
        //Reset Variables
        score = 0;

        //Create World
        game.add.tileSprite(0, 0, 2000, 2000, 'background');
        game.world.setBounds(0, 0, 2000, 2000);

        //Create Player Entity
        player = new Player(characterSelection);


        //Setup P2JS and Collisions
        game.physics.startSystem(Phaser.Physics.P2JS);
        game.physics.p2.setImpactEvents(true);
        game.physics.p2.restitution = 0.8;
        playerCollisionGroup = game.physics.p2.createCollisionGroup();
        toalMinionsCollisionGroup = game.physics.p2.createCollisionGroup();
        abilityCollisionGroup = game.physics.p2.createCollisionGroup();
        bossEnemyCollisionGroup = game.physics.p2.createCollisionGroup();
        game.physics.p2.updateBoundsCollisionGroup();

        toalMinionGroup = game.add.group();
        bossEnemyGroup = game.add.group();
        abilityGroup = game.add.group();

        toalMinionGroup.enableBody = true;
        toalMinionGroup.physicsBodyType = Phaser.Physics.P2JS;

        abilityGroup.enableBody = true;
        abilityGroup.physicsBodyType = Phaser.Physics.P2JS;
        bossEnemyGroup.enableBody = true;
        bossEnemyGroup.physicsBodyType = Phaser.Physics.P2JS;

        game.physics.p2.enable(player.sprite, false);

        player.sprite.body.fixedRotation = true;
        player.sprite.body.setCollisionGroup(playerCollisionGroup);

        player.sprite.body.collides(toalMinionsCollisionGroup);
        player.sprite.body.collides(abilityCollisionGroup);
        player.sprite.body.collides(bossEnemyCollisionGroup);

        //Camera
        game.camera.follow(player.sprite, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

        //Configure Controls
        cursors = game.input.keyboard.createCursorKeys();
        wasd = {
            up: game.input.keyboard.addKey(Phaser.Keyboard.W),
            down: game.input.keyboard.addKey(Phaser.Keyboard.S),
            left: game.input.keyboard.addKey(Phaser.Keyboard.A),
            right: game.input.keyboard.addKey(Phaser.Keyboard.D),
        };

        //Spawn Entities
        game.time.events.add(Phaser.Timer.SECOND * 5, spawnToals, this);
        game.time.events.add(Phaser.Timer.SECOND * 10, spawnAbility, this);
        game.time.events.add(Phaser.Timer.SECOND * 15, spawnBossEnemy, this);

        //Health Bar
        healthBar = game.add.sprite(healthLocation[0], healthLocation[1], 'healthBar');
        healthBar.fixedToCamera = true;
        healthBarFill = game.add.sprite(healthLocation[0], healthLocation[1], 'healthBarFill');
        healthBarFill.fixedToCamera = true;
        healthBarFill.alpha = 0.9;

    },

    update: function () {
        player.move();
        toalMinionGroup.children.forEach(x => moveToward(x, scarecrowActive ? scarecrow : player));
        bossEnemyGroup.children.forEach(x => moveToward(x,  scarecrowActive ? scarecrow : player));
        score++;
        crop(healthBarFill, healthBar.width);
    },
    render: function () {
        game.debug.text(`Score: ${score}`, 670, 20, {font: '80px Courier'});
    },
    endGame: function () {
        game.state.start('Death');
    }
};
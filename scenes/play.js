let Game = {
    preload: function() {
        preloadAssets('all');
    },
    create: function() {
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
        //let bossEnemiesCollisionGroup = game.physics.p2.createCollisionGroup();
        game.physics.p2.updateBoundsCollisionGroup();

        toalMinionGroup = game.add.group();
        bossEnemyGroup = game.add.group();

        toalMinionGroup.enableBody = true;
        toalMinionGroup.physicsBodyType = Phaser.Physics.P2JS;
        //bossEnemyGroup.enableBody = true;
        //bossEnemyGroup.physicsBodyType = Phaser.Physics.P2JS;

        game.physics.p2.enable(player.sprite, false);

        player.sprite.body.fixedRotation = true;
        player.sprite.body.setCollisionGroup(playerCollisionGroup);

        //bossEnemyGroup.body.setCollisionGroup(bossEnemiesCollisionGroup);
        //toalMinion.body.collides(toalMinionsCollisionGroup, bossEnemiesCollisionGroup);
        //bossEnemy.body.collides(bossEnemiesCollisionGroup, playerCollisionGroup);
        //bossEnemy.body.collides(bossEnemiesCollisionGroup, toalMinionsCollisionGroup);

        //toalMinionGroup.body.fixedRotation = true;

        player.sprite.body.collides(toalMinionsCollisionGroup, toalCollision, this);

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
        enemy1 = new ToalMinion();
    },
    update: function() {
        player.move();
        moveToward(enemy1, player);
    },
    render: function() {

    }
};
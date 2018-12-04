const game = new Phaser.Game(
  800,
  600,
  Phaser.AUTO,
  'phaser-example', {
    preload: preload,
    create: create,
    update: update
  }
);

function preload() {
  game.load.image('background', 'assets/grass.png');
  game.load.image('kai', 'assets/kai.png');
  game.load.image('fosse', 'assets/fosse.png');
  game.load.image('megan', 'assets/megan.png');
  game.load.image('matt', 'assets/matthew.png');
  game.load.image('john', 'assets/john.png');
}

class Enemy {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
    console.log('Game is', game);
    console.log('game.add is ', game.add);
    this.sprite = game.add.sprite(game.world.randomX, game.world.randomY, name);
    this.sprite.scale.setTo(0.3);
    this.sprite.vel = 400;
  }
  move() {
    const dx = charKai.position.x - this.sprite.position.x;
    const dy = charKai.position.y - this.sprite.position.y;
    const magnitude = Math.hypot(dx, dy);
    this.sprite.position.x += (dx / magnitude) * this.speed;
    this.sprite.position.y += (dy / magnitude) * this.speed;
  }
}

let cursors;
let charKai;
let enemies = [];

function create() {
    game.add.tileSprite(0, 0, 2000, 2000, 'background');
    game.world.setBounds(0, 0, 2000, 2000);

    charKai = game.add.sprite(game.world.centerX, game.world.centerY, 'kai');
    charKai.scale.setTo(0.3);

    enemies.push(new Enemy('fosse', 4.01));
    enemies.push(new Enemy('megan', 5.2));
    enemies.push(new Enemy('matt', 1));
    enemies.push(new Enemy('john', 2.9));

    game.add.physicsGroup(Phaser.Physics.ARCADE);
    game.physics.startSystem(Phaser.Physics.P2JS);
    game.physics.p2.enable(charKai);
    charKai.body.fixedRotation = true;

    cursors = game.input.keyboard.createCursorKeys();
    wasd = {
        up: game.input.keyboard.addKey(Phaser.Keyboard.W),
        down: game.input.keyboard.addKey(Phaser.Keyboard.S),
        left: game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    };
    game.camera.follow(charKai, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
}

function update() {
    let speed = playerSpeedBase * playerSpeedModifier;
    charKai.body.setZeroVelocity();
    if (cursors.up.isDown || wasd.up.isDown) {
        charKai.body.moveUp(speed);
    } else if (cursors.down.isDown || wasd.down.isDown) {
        charKai.body.moveDown(speed);
    }
    if (cursors.left.isDown || wasd.left.isDown) {
        charKai.body.moveLeft(speed);
    } else if (cursors.right.isDown || wasd.right.isDown) {
        charKai.body.moveRight(speed);
    }

    enemies.forEach(e => e.move());
}

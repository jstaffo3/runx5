class Enemy {
    constructor(sprite) {
        this.sprite = sprite;
        game.add.sprite(game.world.randomX, game.world.randomY, this.sprite);
        this.speed = Math.random() * 150 + 20;
    }

    move() {
        this.position.x += (charKai.position.x - this.position.x) / this.speed;
        this.position.y += (charKai.position.y - this.position.y) / this.speed;
    }
}

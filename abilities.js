class Ability {
    constructor() {
        this.type = Math.floor(Math.random() * 4);
        switch (this.type) {
            case 0:
                this.name = 'gun';
                break;
            case 1:
                this.name = 'tp';
                break;
            case 2:
                this.name = 'bomb';
                break;
            case 3:
                this.name = 'scarecrow';
                break;
        }
        this.sprite = game.add.sprite(game.world.randomX, game.world.randomY, name);
        this.sprite.anchor.x = 0.5;
        this.sprite.anchor.y = 0.5;
    }
}
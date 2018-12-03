let keys = game.input.keyboard();
let speed = playerSpeedBase * playerSpeedModifier;

if (keys.isDown(87)) {
    player.y -= speed;
}
if (keys.isDown(83)) {
    player.y += speed;
}
if (keys.isDown(65)) {
    player.x -= speed;
}
if (keys.isDown(68)) {
    player.x += speed;
}
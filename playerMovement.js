keys = game.input.keyboard();

if (keys.isDown(87)) {
    player.y -= 1;
}
if (keys.isDown(83)) {
    player.y += 1;
}
if (keys.isDown(65)) {
    player.x -= 1;
}
if (keys.isDown(68)) {
    player.x += 1;
}
function spawnMinions() {
    if (toalCounter < 50) {
        for (let i = 0; i < 10; i++) {
            enemies.push(new ToalMinion());
        }
        game.time.events.add(Phaser.Timer.SECOND * 5, spawnMinions, this);
        toalCounter += 10;
    }
}

function spawnBoss() {
    switch (bossCounter) {
        case 0:
            enemies.push(new BossEnemy('matt', 1));
            break;
        case 1:
            enemies.push(new BossEnemy('john', 2.9));
            break;
        case 2:
            enemies.push(new BossEnemy('fosse', 4.01));
            break;
        case 3:
            enemies.push(new BossEnemy('megan', 5.2));
            break;
    }
    bossCounter++;
    game.time.events.add(Phaser.Timer.SECOND * 10, spawnBoss, this);
}

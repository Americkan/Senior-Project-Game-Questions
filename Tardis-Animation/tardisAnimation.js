var game = new Phaser.Game(2400, 2200, Phaser.CANVAS, 'Tardis Animation', { preload: preload, create: create, update: update, render: render });

function preload() {
    game.load.atlasJSONHash('tard', 'assets/sprites/TardisSprites.png', 'assets/sprites/TardisSprites.json');
}

var t;

function create() {

    t = game.add.sprite(game.world.centerX, game.world.centerY, 'tard');
    t.anchor.setTo(0.5, 0.5);
    t.scale.setTo(2, 2);

    t.animations.add('spin');
    t.animations.play('spin', 10, true);

}

function update() {

    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        t.x -= 8;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        t.x += 8;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        t.y -= 8;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        t.y += 8;
    }

}



function render() {
    game.debug.spriteInfo(t, 20, 32);

}
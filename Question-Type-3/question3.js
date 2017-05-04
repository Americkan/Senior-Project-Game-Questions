var game = new Phaser.Game(1280, 1024, Phaser.AUTO, 'Question 3', { preload: preload, create: create, update: update });

function preload() {

    game.load.image('tardis', 'assets/tardis.png', 102, 125);
    game.load.spritesheet('letters', 'assets/letters.png', 62, 106);
    game.load.spritesheet('lettersD', 'assets/lettersD.png', 64, 105);
    game.load.spritesheet('lettersO', 'assets/lettersO.png', 85, 105);
    game.load.spritesheet('lettersC', 'assets/lettersC.png', 64, 105);
    game.load.spritesheet('lettersT', 'assets/lettersT.png', 64, 105);
    game.load.spritesheet('lettersR', 'assets/lettersR.png', 64, 105);

    game.load.image('space', 'assets/background.jpg');

}

var player;
var group;
var keys;

var count = 0;

var score;

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.stage.backgroundColor = '#4b0049';

    game.add.sprite(0, 0, 'space');

    var text1 = game.add.text(game.world.centerX - 285, 0, 'Consider the following Array Structure', { font: '16px Arial', fill: '#ffffff' });
    var text2 = game.add.text(game.world.centerX - 285, 25, 'If the letters D,O,C,T,O,R were played into an array such that,', { font: '16px Arial', fill: '#ffffff' });
    var text3 = game.add.text(game.world.centerX - 285, 50, 'char arr[5] = "DOCTOR";', { font: '16px Arial', fill: '#ffffff' });
    var text4 = game.add.text(game.world.centerX - 285, 75, 'What would that value of arr[3] be?', { font: '16px Arial', fill: '#ffffff' });

    player = game.add.sprite(32, 200, 'tardis');

    game.physics.arcade.enable(player);
    
    group = game.add.physicsGroup();

    var d = group.create(game.rnd.between(400, 800), game.rnd.between(400, 500), 'lettersD', game.rnd.between(250, 500));
    d.body.mass = -100;

    var o = group.create(game.rnd.between(400, 800), game.rnd.between(400, 500), 'lettersO', game.rnd.between(250, 500));
    o.body.mass = -100;

    var c = group.create(game.rnd.between(400, 800), game.rnd.between(0, 500), 'lettersC', game.rnd.between(250, 500));
    c.body.mass = -100;

    var t = group.create(game.rnd.between(400, 800), game.rnd.between(0, 500), 'lettersT', game.rnd.between(250, 500));
    t.body.mass = -100;

    var o2 = group.create(game.rnd.between(400, 800), game.rnd.between(0, 500), 'lettersO', game.rnd.between(250, 500));
    o2.body.mass = -100;

    var r = group.create(game.rnd.between(400, 800), game.rnd.between(0, 500), 'lettersR', game.rnd.between(250, 500));
    r.body.mass = -100;

    keys = game.input.keyboard.createCursorKeys();


    score = game.add.text(game.world.centerX - 350, 750, "Score: " + count, { font: '54px Arial', fill: '#ffffff' });

}

function update() {

    if (game.physics.arcade.collide(player, group, collisionHandler, processHandler, this))
    {
        console.log('boom');
    }

    // game.physics.arcade.overlap(sprite, group, collisionHandler, null, this);

    player.body.velocity.x = 0;
    player.body.velocity.y = 0;

    if (keys.left.isDown)
    {
        player.body.velocity.x = -300;
    }
    else if (keys.right.isDown)
    {
        player.body.velocity.x = 300;
    }

    if (keys.up.isDown)
    {
        player.body.velocity.y = -300;
    }
    else if (keys.down.isDown)
    {
        player.body.velocity.y = 300;
    }

}

function processHandler (player, letter) {

    return true;

}

function collisionHandler (player, letter) {

    if (letter.frame == 7)
    {
        letter.kill();
    }

}
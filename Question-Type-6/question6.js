
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'Question 6', { preload: preload, create: create, update: update, render: render });

//***************************************************************************************/
//*    Title: Starstruck
//*    Author: Photonstorm
//*    Code version: 2.7.8
//*    Availability: http://phaser.io/examples/v2/games/starstruck
//*
//***************************************************************************************/
//This example was used in the means of learning how to work with animations, implementing my own and seeing how it works using spritesheets I chose.   

function preload() {

    game.load.tilemap('level1', 'assets/worldmap.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles-1', 'assets/tilemap.png');
    game.load.spritesheet('dude', 'assets/tennant.png', 32, 48, 15);
    //game.load.image('background', 'assets/background2.png');

}

var map;
var tileset;
var layer;
var layer2;
var player;
var facing = 'left';
var cursors;
var jumpButton;
var bg;

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.stage.backgroundColor = '#000000';

    //bg = game.add.tileSprite(0, 0, 800, 600, 'background');
    //bg.fixedToCamera = true;

    map = game.add.tilemap('level1');

    map.addTilesetImage('tiles-1');

    layer = map.createLayer('Tile Layer 1');
    layer2 = map.createLayer('Tile Layer 2');

    map.setCollisionBetween(0, 10000, true, layer2);

    layer.resizeWorld();

    player = game.add.sprite(32, 32, 'dude');
    game.physics.enable(player, Phaser.Physics.ARCADE);

    player.body.bounce.y = 0.2;
    player.body.collideWorldBounds = true;
    player.body.setSize(20, 32, 5, 16);

    player.animations.add('left', [4, 5, 6, 7], 0, true);
    player.animations.add('turn', [0], 20, true);
    player.animations.add('right', [8, 9, 10, 11], 10, true);
    player.animations.add('up', [12, 13, 14, 15], 10, true);
    player.animations.add('down', [0, 1, 2, 3], 10, true)

    game.camera.follow(player);

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

}

function update() {

    game.physics.arcade.collide(player, layer2);

    player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -150;

        if (facing != 'left')
        {
            player.animations.play('left');
            facing = 'left';
        }
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 150;

        if (facing != 'right')
        {
            player.animations.play('right');
            facing = 'right';
        }
    }
    else if (cursors.up.isDown)
    {
        player.body.velocity.y = -150;

        if (facing != 'up')
        {
            player.animations.play('up');
            facing = 'up';
        }
    }
    else if (cursors.down.isDown)
    {
        player.body.velocity.y = 150;

        if (facing != 'down')
        {
            player.animations.play('down');
            facing = 'down';
        }
    }
    else
    {
       if (facing != 'idle')
       {
        player.animations.stop();

        if (facing == 'left')
        {
            player.frame = 0;
        }

        else
        {
            player.frame = 0;
        }
        facing = 'idle';
    }

}

}

function render () {


}
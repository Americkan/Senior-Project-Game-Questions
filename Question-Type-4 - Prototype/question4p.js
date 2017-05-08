var game = new Phaser.Game(852, 400, Phaser.CANVAS, 'Question4p'
    , { preload: preload, create: create });

function preload() {
    game.load.image('tardis', 'assets/Tardis.png', 102, 125);
    game.load.spritesheet('Button', 'assets/button.png', 200, 50);
    game.load.spritesheet('Button1', 'assets/button1.png', 200, 50);
    game.load.spritesheet('Button2', 'assets/button2.png', 200, 50);
    game.load.spritesheet('Button3', 'assets/button3.png', 200, 50);
    game.load.spritesheet('Button4', 'assets/button4.png', 200, 50);
    game.load.spritesheet('Button5', 'assets/button5.png', 200, 50);

    game.load.image('space', 'assets/background.jpg');

}

var button;
var button1;
var button2;
var button3;
var button4;
var button5;

var player;
var group;

var count = 0;

var score;

function create() {
	game.add.sprite(0, 0, 'space');
    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.stage.backgroundColor = '#4b0049';

    player = game.add.sprite(32, 200, 'tardis');
    game.physics.arcade.enable(player);
    group = game.add.physicsGroup();


    //var text1 = game.add.text(game.world.centerX - 285, 0, 'Move the Character', { font: '16px Arial', fill: '#ffffff' });

    button1 = game.add.button(game.world.centerX - 250, 0, 'Button', actionONE, this);
    button1 = game.add.button(game.world.centerX - 250, 50, 'Button1', actionTWO, this);
    button2 = game.add.button(game.world.centerX - 250, 100, 'Button2', actionTHREE, this);
    button3 = game.add.button(game.world.centerX - 250, 150, 'Button3', actionFOUR, this);
    button4 = game.add.button(game.world.centerX - 250, 200, 'Button4', actionFIVE, this);
    button5 = game.add.button(game.world.centerX - 250, 250, 'Button5', actionSIX, this);



    score = game.add.text(game.world.centerX - 350, 550, "Score: " + count, { font: '54px Arial', fill: '#ffffff' });


}

function actionONE() {
    player.x += 10;
}

function actionTWO() {
    player.x -= 10;
}

function actionTHREE() {
    player.y -= 10;
}

function actionFOUR() {
    player.y += 10;
}

function actionFIVE() {
    player.angle += 15;
}

function actionSIX() {
    player.angle -= 15;

}


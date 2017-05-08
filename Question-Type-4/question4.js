var game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'Question4'
    , { preload: preload, create: create, render: render });


function preload() {
    game.load.image('tardis', 'assets/Tardis.png', 102, 125);
    game.load.image('planet', 'assets/planet.png', 102, 125);
    game.load.spritesheet('Button', 'assets/button.png', 200, 50);
    game.load.spritesheet('Button1', 'assets/button1.png', 200, 50);
    game.load.spritesheet('Button2', 'assets/button2.png', 200, 50);
    game.load.spritesheet('Button3', 'assets/button3.png', 200, 50);
    game.load.spritesheet('Button4', 'assets/button4.png', 200, 50);
    game.load.spritesheet('Button5', 'assets/button5.png', 200, 50);
    game.load.spritesheet('Button6', 'assets/button6.png', 200, 50);
    game.load.spritesheet('Button7', 'assets/button7.png', 200, 50);
    game.load.spritesheet('Button8', 'assets/button8.png', 200, 50);
    game.load.spritesheet('Button9', 'assets/button9.png', 200, 50);

    game.load.image('space', 'assets/background.jpg');

}

var button;
var button1;
var button2;
var button3;
var button4;
var button5;
var button6;
var button7;
var button8;
var button9;


var xPosition = 300
var xPosition2 = 300;
var yPosition = 500
var yPosition2 = 500;;
var selection = 0;

var player;
var player2;
var group;

var count = 0;

var score;

function create() {
	game.add.sprite(0, 0, 'space');
    var planet = game.add.sprite(1000, 100, 'planet');
    game.physics.startSystem(Phaser.Physics.ARCADE);
    planet.scale.setTo(.25, .25);

    game.stage.backgroundColor = '#4b0049';

    player = game.add.sprite(xPosition, yPosition, 'tardis');
    game.physics.arcade.enable(player);
    player2 = game.add.sprite(xPosition2, yPosition2, 'tardis');
    game.physics.arcade.enable(player2)
    group = game.add.physicsGroup();


    var text1 = game.add.text(game.world.centerX - 285, 0, 'Move to the planet', { font: '32px Arial', fill: '#ffffff' });

    button1 = game.add.button(0, 0, 'Button', actionONE, this);
    button1 = game.add.button(0, 50, 'Button1', actionTWO, this);
    button2 = game.add.button(0, 100, 'Button2', actionTHREE, this);
    button3 = game.add.button(0, 150, 'Button3', actionFOUR, this);
    button4 = game.add.button(0, 200, 'Button4', actionFIVE, this);
    button5 = game.add.button(0, 250, 'Button5', actionSIX, this);
    button6 = game.add.button(0, 300, 'Button6', actionSEVEN, this);
    button7 = game.add.button(0, 350, 'Button7', actionEIGHT, this);
    button8 = game.add.button(0, 400, 'Button8', actionNINE, this);
    button9 = game.add.button(0, 450, 'Button9', actionTEN, this);


    if (selection > 4) {
        player2.x = xPosition2;
        player2.y = yPosition2;
    }


    score = game.add.text(0, 665, "Score: " + count, { font: '54px Arial', fill: '#ffffff' });

}

function actionONE() {
    player.x += 10; //changes x position
    xPosition2 += 10;
    selection += 1;
    count += 100;
    score.text = "Score: " + count;
}

function actionTWO() {
    player.x -= 10; //changes x position
    xPosition2 -= xPosition2 - 10;
    selection = selection +1;
    count += 100;
    score.text = "Score: " + count;
}

function actionTHREE() {
    player.y -= 10; // changes y position
    yPosition2 -= yPosition2 - 10;
    selection = selection +1;
    count += 100;
    score.text = "Score: " + count;
}

function actionFOUR() {
    player.y += 10; // changes y position
    yPosition2 += yPosition2 +10;
    selection = selection +1;
    count += 100;
    score.text = "Score: " + count;
}

function actionFIVE() {
    player.angle += 15;
    selection = selection +1;
    count += 100;
    score.text = "Score: " + count;
}

function actionSIX() {
    player.angle -= 15;
    selection = selection +1;
    count += 100;
    score.text = "Score: " + count;
}

function actionSEVEN() {
    player.x += 10;
    player.y -= 10;
    selection = selection +1;
    count += 100;
    score.text = "Score: " + count;
}

function actionEIGHT() {
    player.x -= 10;
    player.y -= 10;
    selection = selection +1;
    count += 100;
    score.text = "Score: " + count;
}

function actionNINE() {
    player.x -= 10;
    player.y += 10;
    selection = selection +1;
    count += 100;
    score.text = "Score: " + count;
}

function actionTEN() {
    player.x += 10;
    player.y += 10;
    selection = selection +1;
    count += 100;
    score.text = "Score: " + count;
}

function Update() {
    player2.x = xPosition2;
    player2.y = yPosition2;

    if(player2.x == 310) {
    		var text2 = game.add.text(game.world.centerX - 285, 100, 'You win!', { font: '32px Arial', fill: '#ffffff' });
    }
}

function render() {
    game.debug.spriteInfo(player, 700, 10);

}


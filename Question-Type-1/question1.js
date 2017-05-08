var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'Question1', { preload: preload, create: create });

function preload() {

    game.load.spritesheet('Button1', 'assets/Button1.png', 200, 50);
    game.load.spritesheet('Button2', 'assets/Button2.png', 200, 50);
    game.load.spritesheet('Button3', 'assets/Button3.png', 200, 50);
    game.load.spritesheet('Button4', 'assets/Button4.png', 200, 50);

    game.load.image('space', 'assets/space.jpg');
    game.load.image('question', 'assets/doubly.jpg');


}

var button1;
var button2;
var button3;
var button4;

var count = 0;

var score;

function create() {
	game.add.sprite(0, 0, 'space');

    game.stage.backgroundColor = '#4b0049';

    game.add.sprite(120, 100, 'question');

    var text1 = game.add.text(game.world.centerX - 285, 0, 'Consider the following Linear Structure', { font: '16px Arial', fill: '#ffffff' });
    var text2 = game.add.text(game.world.centerX - 285, 25, 'If items were placed in Last In First Out order', { font: '16px Arial', fill: '#ffffff' });
    var text3 = game.add.text(game.world.centerX - 285, 50, 'Which function would you call to remove an element?', { font: '16px Arial', fill: '#ffffff' });

    button1 = game.add.button(game.world.centerX - 295, 360, 'Button1', firstResponse, this);
    button2 = game.add.button(game.world.centerX + 95, 360, 'Button2', secondResponse, this);
    button3 = game.add.button(game.world.centerX - 295, 460, 'Button3', thirdResponse, this);
    button4 = game.add.button(game.world.centerX + 95, 460, 'Button4', fourthResponse, this);


    score = game.add.text(game.world.centerX - 350, 550, "Score: " + count, { font: '54px Arial', fill: '#ffffff' });


}

//***************************************************************************************/
//*    Title: Button Destroy
//*    Author: Photonstorm
//*    Code version: 2.7.8
//*    Availability: http://phaser.io/examples/v2/input/button-destroy
//*
//***************************************************************************************/
//The code to destroy/remove the buttons was taken from the following example.


function firstResponse() {

    button1.pendingDestroy = true;

    text = game.add.text(game.world.centerX, game.world.centerY, 'Incorrect', { font: '64px Arial', fill: '#000000' });

    count -= 100;
    score.text = "Score: " + count;

    text.anchor.set(0.5);

    game.input.onDown.addOnce(removeText, this);

}

function secondResponse() {

    button2.pendingDestroy = true;

    text = game.add.text(game.world.centerX, game.world.centerY, 'Correct', { font: '64px Arial', fill: '#000000' });

    count += 1000;
    score.text = "Score: " + count;

    text.anchor.set(0.5);

    game.input.onDown.addOnce(removeText, this);


}

function thirdResponse() {

    button3.pendingDestroy = true;

    text = game.add.text(game.world.centerX, game.world.centerY, 'Incorrect', { font: '64px Arial', fill: '#000000' });

    count -= 100;
    score.text = "Score: " + count;

    text.anchor.set(0.5);

    game.input.onDown.addOnce(removeText, this);

}

function fourthResponse() {

    button4.pendingDestroy = true;

    text = game.add.text(game.world.centerX, game.world.centerY, 'Incorrect', { font: '64px Arial', fill: '#000000' });

    count -= 100;
    score.text = "Score: " + count;

    text.anchor.set(0.5);

    game.input.onDown.addOnce(removeText, this);

}


function removeText() {

    text.destroy();

}

function removeQuestion() {
	sprite.destroy();
}

function updateText() {

	text.setText("Score:" + count);
}
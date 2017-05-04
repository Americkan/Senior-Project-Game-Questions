var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'Question 2', { preload: preload, create: create, render: render });

function preload() {

    game.load.spritesheet('Button1', 'assets/Button1.png', 170, 50);
    game.load.spritesheet('Button2', 'assets/Button2.png', 170, 50);
    game.load.spritesheet('Button3', 'assets/Button3.png', 170, 50);
    game.load.spritesheet('Button4', 'assets/Button4.png', 170, 50);
    game.load.spritesheet('Button5', 'assets/Button5.png', 170, 50);
    game.load.image('background', 'assets/question.png');
    game.load.image('background2', 'assets/background.jpg');
    game.load.image('close', 'assets/return.png');

}

var button1;
var button2;
var button3;
var button4;
var button5;
var popup;
var tween = null;

var count = 0;

var score;

function create() {
    game.add.sprite(0, 0, 'background2');
    game.stage.backgroundColor = '#4b0049';

    button1 = game.add.button(game.world.centerX - 95, 460, 'Button1', openWindow, this, 2, 1, 0);
    button1.input.useHandCursor = true;

    button2 = game.add.button(game.world.centerX - 295, 360, 'Button2', firstResponse, this);
    button3 = game.add.button(game.world.centerX + 95, 360, 'Button3', secondResponse, this);
    button4 = game.add.button(game.world.centerX - 295, 460, 'Button4', thirdResponse, this);
    button5 = game.add.button(game.world.centerX + 95, 460, 'Button5', fourthResponse, this);

    popup = game.add.sprite(game.world.centerX, game.world.centerY - 100, 'background'); //Allows you to drag 
    popup.alpha = 0.8;
    popup.anchor.set(0.5);

    var pw = (popup.width / 2) - 0; //Sets up a little close button. Positioned top right. 
    var ph = (popup.height / 2) - 8;

    var closeButton = game.make.sprite(pw, -ph, 'close');
    closeButton.inputEnabled = true;
    closeButton.input.priorityID = 1;
    closeButton.input.useHandCursor = true;

    popup.addChild(closeButton);

    popup.scale.set(0.1); //If image is not shown, then neither is the button.
    score = game.add.text(game.world.centerX - 350, 550, "Score: " + count, { font: '54px Arial', fill: '#ffffff' });

}


function openWindow() {

    if ((tween !== null && tween.isRunning) || popup.scale.x === 1)
    {
        return;
    }
 
    tween = game.add.tween(popup.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true); // Pop out 

}

function closeWindow() {

    if (tween && tween.isRunning || popup.scale.x === 0.1)
    {
        return;
    }
    tween = game.add.tween(popup.scale).to( { x: 0.1, y: 0.1 }, 500, Phaser.Easing.Elastic.In, true); //Reverse of Pop Out

}

function render() {

    game.debug.text("Click to open question and the back arrow to close window", 32, 32);

}

function firstResponse() {

    button2.pendingDestroy = true;

    text = game.add.text(game.world.centerX, game.world.centerY, 'Incorrect', { font: '64px Arial', fill: '#ffffff' });

    count -= 100;
    score.text = "Score: " + count;

    text.anchor.set(0.5);

    game.input.onDown.addOnce(removeText, this);

}

function secondResponse() {

    button3.pendingDestroy = true;

    text = game.add.text(game.world.centerX, game.world.centerY, 'Incorrect', { font: '64px Arial', fill: '#ffffff' });

    count -= 100;
    score.text = "Score: " + count;

    text.anchor.set(0.5);

    game.input.onDown.addOnce(removeText, this);


}

function thirdResponse() {

    button4.pendingDestroy = true;

    text = game.add.text(game.world.centerX, game.world.centerY, 'Correct', { font: '64px Arial', fill: '#ffffff' });

    count += 1000;
    score.text = "Score: " + count;

    text.anchor.set(0.5);

    game.input.onDown.addOnce(removeText, this);

}

function fourthResponse() {

    button5.pendingDestroy = true;

    text = game.add.text(game.world.centerX, game.world.centerY, 'Incorrect', { font: '64px Arial', fill: '#ffffff' });

    count -= 100;
    score.text = "Score: " + count;

    text.anchor.set(0.5);

    game.input.onDown.addOnce(removeText, this);

}

function removeText() {

    text.destroy(); //Remove Text after prompt. 

}

function removeQuestion() {
    sprite.destroy(); //Destroy Button Pressed
}

function updateText() {

    text.setText("Score:" + count); //Update Score
}
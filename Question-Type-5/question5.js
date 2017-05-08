var game = new Phaser.Game(1200,800,Phaser.CANVAS, "Question 5");

var spacefield;
var backgroundv;
var cursor;
var bullets;
var bulletTime = 0;
var fireButton; 
var doctor9;
var doctor10;
var doctor11;
var doctor12; 
var dalek; 
var laser;
var text1;
var text2;
var text3;
var text4;

var score = 0;
var scoreText;
var winText; 

var main = {
	preload:function(){

		game.load.image('starfield', "assets/starfield.jpg");
		game.load.image('bullet', "assets/bullet.png");
		game.load.image('doctor9', "assets/doctor9.png");
		game.load.image('doctor10', "assets/doctor10.png");
		game.load.image('doctor11', "assets/doctor11.png");
		game.load.image('doctor12', "assets/doctor12.png");
		game.load.image('dalek', "assets/dalek.png");
		game.load.image('laser', "assets/laser.png")

		},

	create:function() {

		spacefield = game.add.tileSprite(0,0,1200,800, 'starfield');
		backgroundv = 10;

		dalek = game.add.sprite(game.world.centerX, game.world.centerY + 200, 'dalek');
		dalek.scale.setTo(.26, .26);
		game.physics.enable(dalek, Phaser.Physics.ARCADE);
		cursor = game.input.keyboard.createCursorKeys();

		text1 = game.add.text(game.world.centerX - 195, 0, 'Exterminate a doctor to make the following logic true.', { font: '20px Arial', fill: '#ffffff' });
    	text2 = game.add.text(game.world.centerX - 195, 25, 'if ( ___ == 10) {', { font: '20px Arial', fill: '#ffffff' });
    	text3 = game.add.text(game.world.centerX - 195, 50, '//This statement is true.', { font: '20px Arial', fill: '#ffffff' });
    	text4 = game.add.text(game.world.centerX - 195, 75, '}', { font: '20px Arial', fill: '#ffffff' });


		doctor9 = game.add.group();
		doctor9.enableBody = true;
		doctor9.physicsBodyType = Phaser.Physics.ARCADE; 

		doctor10 = game.add.group();
		doctor10.enableBody = true;
		doctor10.physicsBodyType = Phaser.Physics.ARCADE;

		doctor11 = game.add.group();
		doctor11.enableBody = true;
		doctor11.physicsBodyType = Phaser.Physics.ARCADE; 

		doctor12 = game.add.group();
		doctor12.enableBody = true;
		doctor12.physicsBodyType = Phaser.Physics.ARCADE; 


		createDoctorNine();
		createDoctorTen();
		createDoctorEleven();
		createDoctorTweleve();

		scoreText = game.add.text(0,750, 'Score:', {font: '32px Arial', fill : '#fff'});
		winText = game.add.text(game.world.centerX, 200, 'First Try!', {font: '32px Arial', fill: '#fff'});
		winText.visible = false;



		bullets = game.add.group();
		bullets.enableBody = true;
		bullets.physicsBodyType = Phaser.Physics.ARCADE;
		bullets.createMultiple(1, 'bullet');
		bullets.setAll('anchor.x', 0.5);
		bullets.setAll('anchor.y', 1);
		bullets.setAll('outOfBoundsKill', true);
		bullets.setAll('checkWorldBounds', true);		
		fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	},

	update:function() {

		game.physics.arcade.overlap(bullets, doctor9, collisionHandler, null, this);
		game.physics.arcade.overlap(bullets, doctor10, collisionHandler2, null, this);
		game.physics.arcade.overlap(bullets, doctor11, collisionHandler3, null, this);
		game.physics.arcade.overlap(bullets, doctor12, collisionHandler4, null, this);

		dalek.body.velocity.x = 0;
		dalek.body.velocity.y = 0;

		spacefield.tilePosition.y += backgroundv;

		if(cursor.up.isDown) {

			dalek.body.velocity.y = -350;
		}

		if(cursor.down.isDown) {

			dalek.body.velocity.y = 350;
		}

		if(cursor.left.isDown) {

			dalek.body.velocity.x = -350;
		}

		if(cursor.right.isDown) {

			dalek.body.velocity.x = 350;
		}

		if(fireButton.isDown) {

			fireBullet();
		}

		scoreText.text = 'Score:' + score;

		if(score == 10000) {
			winText.visible = true;
			//scoreText.visible = false;
		}

	}
}

function createDoctorNine() {

	for(var y = 0; y < 1; y++) {
		for(var x = 0; x < 1; x++) {

			var NINE = doctor9.create(200, 100, 'doctor9');
			NINE.anchor.setTo(0.5, 0.5);
			NINE.scale.set(.45,.45);

		}
	}

	doctor9.x = 100;
	doctor9.y = 50; 

	var tween = game.add.tween(doctor9).to({x:200}, 800, Phaser.Easing.Linear.None, true, 0, 800, true);

	tween.onLoop.add(descend, this);
}

function createDoctorTen() {

	for(var y = 0; y < 1; y++) {
		for(var x = 0; x < 1; x++) {

			var TEN = doctor10.create(400, 300, 'doctor10');
			TEN.anchor.setTo(0.5, 0.5);
			TEN.scale.set(.10,.10);

		}
	}

	doctor10.x = 100;
	doctor10.y = 50; 

	var tween = game.add.tween(doctor10).to({x:200}, 700, Phaser.Easing.Linear.None, true, 0, 700, true);

	tween.onLoop.add(descend2, this);
}

function createDoctorEleven() {

	for(var y = 0; y < 1; y++) {
		for(var x = 0; x < 1; x++) {

			var ELEVEN = doctor11.create(600, 300, 'doctor11');
			ELEVEN.anchor.setTo(0.5, 0.5);
			ELEVEN.scale.set(.40,.40);

		}
	}

	doctor11.x = 100;
	doctor11.y = 50; 

	var tween = game.add.tween(doctor11).to({x:200}, 600, Phaser.Easing.Linear.None, true, 0, 600, true);

	tween.onLoop.add(descend3, this);
}

function createDoctorTweleve() {

	for(var y = 0; y < 1; y++) {
		for(var x = 0; x < 1; x++) {

			var TWELVE = doctor12.create(800, 100, 'doctor12');
			TWELVE.anchor.setTo(0.5, 0.5);
			TWELVE.scale.set(.15,.15);

		}
	}

	doctor12.x = 100;
	doctor12.y = 50; 

	var tween = game.add.tween(doctor12).to({x:200}, 500, Phaser.Easing.Linear.None, true, 0, 500, true);

	tween.onLoop.add(descend4, this);
}

function fireBullet() {

	if(game.time.now > bulletTime) {

		bullet = bullets.getFirstExists(false);

		if(bullet) {
			bullet.reset(dalek.x + 35 , dalek.y);
			bullet.body.velocity.y = -400;
			bulletTime = game.time.now + 200;
		}
	}
}

function descend() {
	doctor9.y += 10;
}

function descend2() {
	doctor10.y += 10;
}

function descend3() {
	doctor11.y += 10;
}

function descend4() {
	doctor12.y += 10;
}

function collisionHandler(bullet, doctor9) {
	bullet.kill();
	doctor9.kill();

	score -= 10000; 
}

function collisionHandler2(bullet, doctor10) {
	bullet.kill();
	doctor10.kill();

	score += 10000; 
}

function collisionHandler3(bullet, doctor11) {
	bullet.kill();
	doctor11.kill();

	score -= 10000; 
}

function collisionHandler4(bullet, doctor12) {
	bullet.kill();
	doctor12.kill();

	score -= 10000; 
}


game.state.add('main', main);

game.state.start('main');


/*eslint-env browser*/
//Set Up Variables
var canvas;
var context;
var WIDTH = 600;
var HEIGHT = 400;
var score = 0;
var message = "Score:" + score;
var collectables = [];
var health = 100;
var message2 = "Health: " + health;
for (var i = 0; i < 21; i++) {
    collectables.push(new Sprite());
    collectables[i].x = Math.random() * 400;
    collectables[i].y = Math.random() * 400;
    collectables[i].width = 25;
    collectables[i].height = 25;
}
//Declare an array variable called collectables. the opening and closing square brackets '[]' mean array in javascript
var enemies = [];
//Use a for loop to fill the array with collectable items
for (var i = 0; i < 5; i++) {
    enemies.push(new Sprite());
    enemies[i].x = Math.random() * 400;
    enemies[i].y = Math.random() * 400;
    enemies[i].width = 25;
    enemies[i].height = 25;
}
var splashScreenImage = new Image();
var splashScreenClicked = false;
splashScreenImage.src = 'images/WHenson_SplashScreen.png';
var playerImage = new Image();
playerImage.src = 'images/WHenson_Player.png';
var backgroundSound = new Audio("sounds/WHenson_Background.mp3");

function canvasClicked(event) {
  splashScreenClicked = true;
}

var collectableImage = new Image();
collectableImage.src = 'images/WHenson_Collectable.png';
var enemyImage = new Image();
enemyImage.src= "images/WHenson_Enemy.png";
var backgroundImage = new Image();
backgroundImage.src = "images/WHenson_Background.png"
function init (){
	canvas = document.getElementById("myCanvas");
	context = canvas.getContext("2d");
	setInterval(update,10);
	canvas.onmousemove = movePlayer;
	canvas.onmousedown = canvasClicked; 

backgroundSound.Play();
}
window.onload = init;

function update(){
	
	context.drawImage(splashScreenImage, 0, 0);
//Check if the user has clicked to start playing
if(splashScreenClicked){
	clear();
context.drawImage(backgroundImage, 0, 0);
   for (var i = 0; i < 5; i++) {
    var collectable = collectables[i];
    if (collectable.isVisible == true) {
      context.drawImage(collectableImage, collectable.x, collectable.y,collectable.width,collectable.height); }
 
    //Check for collisions between the player and collectable. Also check if the collectable is visible
    if(collectable.isVisible & collides(player, collectable)){
        //If a collision occurs and the collectable is visible, increase the score
	score ++;
	//Change the collectable's visibility to false so that it only get picked up once
	collectable.isVisible = false;
    }
}
for (var j = 0; j < 5; j++) {
    var enemy = enemies[j];
    if (enemy.isVisible == true) {
        context.fillStyle='Green';
context.drawImage(enemyImage, enemy.x, enemy.y,enemy.width,enemy.height);
    }
 
    //Check for collisions between the player and collectable. Also check if the collectable is visible
   if(enemy.isVisible & collides(player, enemy)){
    //If a collision occurs and the enemy is visible, decrease the score
    health = health - 20;
    //Change the enemy visibility to false
    enemy.isVisible = false;
}
if(health < 1) {
     window.open("00_gameOverScreen.html", "_self");
}
}


	
context.drawImage(playerImage, player.x, player.y,player.width,player.height);
	context.font = "25px 'Segoe UI'";
	context.fillStyle = "#000000";
	message = "Score: " + score;
	context.fillText(message,0,50);
	context.font = "25px serif";
context.fillStyle = "#000000";
message2 = "Health: " + health;
context.fillText (message2, 5, 60); 
}

}


function clear(){
	context.clearRect(0,0,WIDTH,HEIGHT);
}
function Sprite(){
	this.x = 0;
	this.y = 0;
    this.width = 50;
    this.height = 50;
    this.isVisible = true;
}
function movePlayer(event) {
    player.x = event.pageX - canvas.offsetLeft;
    player.y = event.pageY - canvas.offsetTop;
}
function collides(a, b) {
   var val = false;
 
   val = (a.x < b.x + b.width) &&
   (a.x + a.width > b.x) &&
   (a.y < b.y + b.height) &&
   (a.y + a.height > b.y);
 
   return val;        
}
var player = new Sprite();



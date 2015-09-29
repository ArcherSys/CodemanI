/*eslint-env browser*/
//Set Up Variables
var Vectralik = {};
Vectralik.Sprite = function Sprite(x,y,isVisible,width,height){
	this.x = 0;
	this.y = 0;
    this.width = 50;
    this.height = 50;
    this.isVisible = true;
};
Vectralik.Vector2 = function(x,y){
	this.x = x;
	this.y = y;
}
Vectralik.IntValue = function(font,fillStyle,message,drawProperty){
	this.message = message;
	this.font = font;
    this.fillStyle = fillStyle;
     this.fillText = fillText;
    this.drawProperty = function(vector2){
	context.font = font;
context.fillStyle = fillStyle;

context.fillText (this.message, vector2.x, vector2.y); 
};
};
Vectralik.HealthBar = function(vectorValue){
	this.healthbarSprite = new VectralikSprite(vectorValue.x,vectorValue.y,200,10);
	this.flareLoss = function(link,target){
		if(health < 1) {
     window.open(link, target);
}


	};
};
	Vectralik.Game = function(canvas,context){
		this.canvas = canvas;
		this.context = context;
		this.WIDTH = 600;
       this.HEIGHT = 400;
	};


var score = 0;
var message = "Score:" + score;
var collectables = [];
var health = 100;
var message2 = "Health: " + health;
var scrollSpeed = 2;
var totalCollectables = 250;
var totalEnemies = 50;
var sceneLength = 5000;
var goalx = 5000;
var goalImage = new Image();
var maxHealth = 100;


goalImage.src = "images/WHenson_Goal.png";
goalImage.onLoad = function(){
	conxtext.drawImage(goalImage, 69,50);
}
for (var i = 0; i < totalCollectables; i++) {
    collectables.push(new Sprite());
collectables[i].x = Math.random() * sceneLength;
collectables[i].y = Math.random() * 400;
collectables[i].width = 25;
    collectables[i].height = 25;
}
//Declare an array variable called collectables. the opening and closing square brackets '[]' mean array in javascript
var enemies = [];
//Use a for loop to fill the array with collectable items
for (var j = 0; j < totalEnemies; j++) {
    enemies.push(new Sprite());
    enemies[j].x = Math.random() * sceneLength;
    enemies[j].y = Math.random() * 400;
    enemies[j].width = 50;
    enemies[j].height = 50;
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
Vectralik.getCanvasClickHandler = function(cc){
		canvas.onmousedown = cc; 
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


backgroundSound.play();
}
Vectralik.setupLoader = function(initCallback){
window.onload = initCallback;	
};


function update(){
	
	context.drawImage(splashScreenImage, 0, 0);
//Check if the user has clicked to start playing
if(splashScreenClicked){
	clear();
context.drawImage(backgroundImage, 0, 0);
 context.drawImage(goalImage, goalx, 0);
goalx -= scrollSpeed;
if(goalx == 0){
    //When the player reaches the goal, open the victory page
    window.open("00_victoryScreen.html", "_self");
}
context.fillStyle = 'green';
context.fillRect(healthbar.x, healthbar.y, healthbar.width*health/maxHealth, healthbar.height);
   if(health < 40){
		context.fillStyle = 'red';
 	}
   for (var i = 0; i < totalCollectables; i++) {
 var collectable = collectables[i];
    collectable.x -= scrollSpeed;
      if(collectable.isVisible){
      	context.drawImage(collectableImage, collectable.x, collectable.y,collectable.width,collectable.height); 
 
      }
    //Check for collisions between the player and collectable. Also check if the collectable is visible
    if(collectable.isVisible && collides(player, collectable)){
        //If a collision occurs and the collectable is visible, increase the score
	score ++;
	//Change the collectable's visibility to false so that it only get picked up once
	collectable.isVisible = false;
    }
}

for (var j = 0; j < totalEnemies; j++) {

    var enemy = enemies[j];
     enemy.x -= scrollSpeed;
 
       if(enemy.isVisible ){
context.drawImage(enemyImage, enemy.x, enemy.y,enemy.width,enemy.height);
    
 }
    //Check for collisions between the player and collectable. Also check if the collectable is visible
   if(enemy.isVisible && collides(player, enemy)){
    //If a collision occurs and the enemy is visible, decrease the score
    health = health - 20;
    //Change the enemy visibility to false
    enemy.isVisible = false;
}
}




	
context.drawImage(playerImage, player.x, player.y,player.width,player.height);
	context.font = "25px 'Segoe UI'";
	context.fillStyle = "#000000";
	message = "Score: " + score;
	context.fillText(message,0,50);

}
}

Vectralik.clear = function(){
	context.clearRect(0,0,WIDTH,HEIGHT);
};

Vectralik.movePlayer = function(event) {
    player.x = event.pageX - canvas.offsetLeft;
    player.y = event.pageY - canvas.offsetTop;
}
Vectralik.collides =function(a, b) {
   var val = false;
 
   val = (a.x < b.x + b.width) &&
   (a.x + a.width > b.x) &&
   (a.y < b.y + b.height) &&
   (a.y + a.height > b.y);
 
   return val;        
}
var player = new Sprite();



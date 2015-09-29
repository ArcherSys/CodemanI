
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
var scrollSpeed = 2;
var totalCollectables = 5000;
var totalEnemies = 250;
var sceneLength = 20000;
var goalx = 20000;
var goalImage = new Image();
var maxHealth = 100;
var healthbar = new Sprite();
var speed = 5;
healthbar.x = 10;
healthbar.y = 10;
healthbar.width = 200;
healthbar.height = 20;
var isUpDown = false;
var isDownDown = false;
var isRightDown = false;
var isLeftDown = false;

goalImage.src = "images/WHenson_Goal.png";
goalImage.onLoad = function(){
	context.drawImage(goalImage, goalx,50);
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
	canvas.addEventListener('click',canvasClicked);
window.addEventListener('keydown',handleKeyDown,true);
window.addEventListener('keyup',handleKeyUp,true);

}
window.onload = init;

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
  if(health < 40){
		context.fillStyle = 'red';
 	}else{
 		context.fillStyle = 'green';
 	}

context.fillRect(healthbar.x, healthbar.y, healthbar.width*health/maxHealth, healthbar.height);
 
   for (var i = 0; i < totalCollectables; i++) {
 var collectable = collectables[i];
    collectable.x -= scrollSpeed;
      if(collectable.isVisible){
      	context.drawImage(collectableImage, collectable.x, collectable.y,collectable.width,collectable.height); 
 
      }
    //Check for collisions between the player and collectable. Also check if the collectable is visible
    if(collectable.isVisible && collides(player, collectable)){
        //If a collision occurs and the collectable is visible, increase the score
	score += 10;
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
    health = health - 2;
    if(health <= 0) {
     window.open("00_gameOverScreen.html", "_self");
}
    //Change the enemy visibility to false
    enemy.isVisible = false;
}
}



handleInput();

	
context.drawImage(playerImage, player.x, player.y,player.width,player.height);
	context.font = "25px 'Segoe UI'";
	context.fillStyle = "Lime";
	message = "Score: " + score;
	context.fillText(message,400,50);
	context.font = "25px serif";
context.fillStyle = "#FFFFFF";
message2 = "Health: " + health;
context.fillText (message2, 200, 60); 

}
}
function handleInput() {
	if(isUpDown){
		player.y-=speed;
	}
	if(isDownDown){
		player.y+=speed;
	}
	if(isLeftDown){
		player.x-=speed;
	}
	if(isRightDown){
		player.x+=speed;
	}
}
function handleKeyDown(evt) {
 
    if(evt.keyCode == 39) // Right
    {
        isRightDown = true;
    }
    if(evt.keyCode == 40) // Down
    {
        isDownDown = true;
    }
    if(evt.keyCode == 38) // Up
    {
        isUpDown = true;
    }
    if(evt.keyCode == 37) // Left
    {
        isLeftDown = true;
    }                   
 
}
function handleKeyUp(evt) {
 
    if(evt.keyCode == 39) // Right
    {
        isRightDown = false;
    }
    if(evt.keyCode == 40) // Down
    {
        isDownDown = false;
    }
    if(evt.keyCode == 38) // Up
    {
        isUpDown = false;
    }
    if(evt.keyCode == 37) // Left
    {
        isLeftDown = false;
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



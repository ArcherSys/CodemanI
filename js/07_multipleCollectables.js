
/*eslint-env browser*/
//Set Up Variables
var canvas;
var context;
var WIDTH = 600;
var HEIGHT = 400;
var score = 0;
var message = "Score:" + score;
var collectables = [];
for (var i = 0; i < 5; i++) {
    collectables.push(new Sprite());
    collectables[i].x = Math.random() * 400;
    collectables[i].y = Math.random() * 400;
    collectables[i].width = 25;
    collectables[i].height = 25;
}

function init (){
	canvas = document.getElementById("myCanvas");
	context = canvas.getContext("2d");
	setInterval(update,10);
	canvas.onmousemove = movePlayer;
}
window.onload = init;

function update(){
	clear();

   for (var i = 0; i < 5; i++) {
    var collectable = collectables[i];
    if (collectable.isVisible == true) {
        context.fillStyle='Green';
        context.fillRect(collectable.x,collectable.y,collectable.width,collectable.height);
    }
 
    //Check for collisions between the player and collectable. Also check if the collectable is visible
    if(collectable.isVisible & collides(player, collectable)){
        //If a collision occurs and the collectable is visible, increase the score
	score ++;
	//Change the collectable's visibility to false so that it only get picked up once
	collectable.isVisible = false;
    }
}


	context.fillStyle="#009999";
	context.fillRect(player.x, player.y, player.width, player.height);
	context.font = "25px 'Segoe UI'";
	context.fillStyle = "#000000";
	message = "Score: " + score;
	context.fillText(message,0,50);
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


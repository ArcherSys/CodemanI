
/*eslint-env browser*/
//Set Up Variables
var canvas;
var context;
var WIDTH = 600;
var HEIGHT = 400;
var score = 0;
var message = "Score:" + score;
function init (){
	canvas = document.getElementById("myCanvas");
	context = canvas.getContext("2d");
	setInterval(update,10);
	canvas.onmousemove = movePlayer;
}
window.onload = init;

function update(){
	clear();

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

var player = new Sprite();

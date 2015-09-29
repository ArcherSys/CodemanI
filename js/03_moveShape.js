
/*eslint-env browser*/
//Set Up Variables
var canvas;
var context;
var WIDTH = 600;
var HEIGHT = 400;
function init (){
	canvas = document.getElementById("myCanvas");
	context = canvas.getContext("2d");
	setInterval(update,10);
}
window.onload = init;
var x = 0;
var y = 0;
function update(){
	clear();
	x = x + 1;
	context.fillStyle="#009999";
	context.fillRect(x,y,50,50);
	
}

function clear(){
	context.clearRect(0,0,WIDTH,HEIGHT);
}
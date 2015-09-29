
/*eslint-env browser*/
//Set Up Variables
var CPLive = {};
CPLive.canvas;
CPLive.context;
CPLive.WIDTH = 600;
CPLive.HEIGHT = 400;
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

CPLive.clear= function(){
	context.clearRect(0,0,WIDTH,HEIGHT);
}
CPLive.Sprite = function(){
this.x = 0;
	this.y = 0;
    this.width = 50;
    this.height = 50;
    this.isVisible = true;
};

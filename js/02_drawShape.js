
/*eslint-env browser*/
//Set Up Variables
var canvas;
var context;
var WIDTH = 600;
var HEIGHT = 400;
function init (){
	canvas = document.getElementById("myCanvas");
	context = canvas.getContext("2d");
	context.fillStyle="#009999";
     context.fillRect(0,0,50,50);
}
window.onload = init;


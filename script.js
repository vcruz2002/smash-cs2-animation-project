// Global Variables
var p5Canvas;
var myName;
var p1x= 100;
var p1y= 120;
var p2x= 160;
var p2y= 170;
var p3x =220;
var p3y =120;
var p4x = 160;
var p4y = 80;
var p5x = 120;
var p5y = 200;
var p6x =  200;
var p6y = 200;
var flip = 5;
// initialize global variables in setup() function
function setup() {
  p5Canvas = createCanvas(800, 600);
  p5Canvas.parent("#p5-canvas");
  myName = select("#my-name");
  myName.html("Victor");
  EstrellaVelocity = 10;
}


function draw() {
    background(0, 255, 0);
    drawStar();
    drawEstrella();
}
function drawStar(){
    fill("black");
    line(260,400,360,400);
    line(360,400, 400, 500);
    line(400, 500, 440,400);
    line(440, 400, 540, 400);
    line(540,400,440,360);
    line(440,360,480,260);
    line(480,260,400,320);
    line(400,320,320,260);
    line(320,260,360,360);
    line(360,360,260,400);
}

function drawEstrella(){
    fill("black");
    triangle(p1x,p1y, p2x, p2y, p3x, p3y);
    triangle(p4x, p4y, p5x, p5y, p2x, p2y);
    triangle(p4x, p4y, p6x, p6y, p2x, p2y);
    p1x = p1x + flip;
    p2x = p2x + flip;
    p3x = p3x + flip;
    p4x = p4x + flip;
    p5x = p5x + flip;
    p6x = p6x + flip;
    
    if(p3x == 800|| p3x == 130){ 
        flip = flip * -1;
    }else{
        
    }
        
    
}




// create an animation function below, then call it in draw()
// see example.js if you need a place to start!
// when you're ready, be sure to change index.html to link to this script instead of example.js
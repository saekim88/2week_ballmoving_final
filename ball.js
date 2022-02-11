//Canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ballRadius = 10;

//balls below 
var velocity = 5;

var ball = document.getElementById("ball1");
var positionX = 0;
var positionY = 0;
var reverseX = false;
var reverseY = false;

//Canvas
function drawBall() {

    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}

//Drawing part global
let drawing = false;

function drawBallD(x, y) {

    ctx.beginPath();
    // ctx.save();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#8153b5";
    ctx.fill();
    // ctx.restore();
    ctx.closePath();
    ctx.stroke();

}

//Ball in Canvas
function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    
    x += dx;
    y += dy;
}
setInterval(draw, 20);

//Below Canvas.. Ball1
function moveBall1() {

    if (reverseX) {
      positionX -= velocity;
    } else {
      positionX += velocity;
    };
  
    if (reverseY) {
      positionY -= velocity;
    } else {
      positionY += velocity;
    };
  
    // two fixed x-axis coordinates (you will use these variable in step 3)
    var Xmin = 0;
    var Xmax = window.innerWidth;
    var Ymin = 0;
    var Ymax = 800;
  
    if (positionX > Xmax || positionX <= Xmin) {
      reverseX = !reverseX;
    };
  
    if (positionY > Ymax || positionY <= Ymin) {
      reverseY = !reverseY;
    };
  
    ball.style.left = positionX + 'px';
    ball.style.top = positionY + 'px';    
  };
  setInterval(moveBall1, 10);

  //Drawing part
  window.addEventListener('mousemove', function(e){
   
    if (drawing){
       drawBallD(e.x, e.y);
    }
 });
 window.addEventListener('mousedown', function(){
       drawing = true;
 });
 window.addEventListener('mouseup', function(){
       drawing = false;
 });
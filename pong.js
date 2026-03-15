//Pong

//Vars
let xBall = 300;
let yBall = 200;
let xBallSpeed = 5;
let yBallSpeed = 5;
let diameter = 16;
let radius = diameter / 2;

let xPlayer = 10;
let yPlayer = 200;
let lenPlayer = 90;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  Ball();
  Player();
}

function Ball(){
  circle(xBall, yBall, diameter);
  xBall += xBallSpeed;
  yBall += yBallSpeed;
  
  if(xBall + radius > width || xBall - radius < 0){
    xBallSpeed *= -1
  }
  if(yBall + radius > height || yBall - radius < 0){
    yBallSpeed *= -1
  }
}

function Player(){
  rect(xPlayer, yPlayer, 7, lenPlayer)
  
  if(keyIsDown(UP_ARROW)){
    yPlayer -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yPlayer += 10
  }
  
  if(yPlayer + lenPlayer > height){
    yPlayer = ;
  } else if(yPlayer < 0){
    yPlayer = 0;
  }
}

var ball
function setup() {
  createCanvas(400,400);
  ball=createSprite(200,200,10,5)
}

function draw() 
{
  background(30);
  if(keyDown(RIGHT_ARROW)||keyDown(LEFT_ARROw)){
    ball.x=ball.x+3
  }
drawSprites()
}





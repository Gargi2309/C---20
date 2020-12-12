var fixRect , movingRect;



function setup() {
  createCanvas(800,400);
  fixRect = createSprite(400, 200, 70, 50);
  fixRect.shapeColor = "blue";

  movingRect = createSprite(600,200,50,70);
  movingRect.shapeColor = "blue";
}

function draw() {
  background(255,255,255);
  
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;
  
  console.log(movingRect.x - fixRect.x);

  if(movingRect.x - fixRect.x < movingRect.width/2 + fixRect.width/2
    && fixRect.x - movingRect.x < movingRect.width/2 + fixRect.width/2
    && movingRect.y - fixRect.y < movingRect.height/2 + fixRect.height/2
    && fixRect.y - movingRect.y < movingRect.height/2 + fixRect.height/2
    ){
    movingRect.shapeColor = "yellow";
    fixRect.shapeColor = "yellow";
  }
  else{
    movingRect.shapeColor = "blue";
    fixRect.shapeColor = "blue";
  }

  drawSprites();
}
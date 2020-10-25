var fixedRect, movingRect;




function setup() {
  createCanvas(800,400);

  fixedRect=createSprite(200,200,50,100);
  fixedRect.shapeColor="blue";

  movingRect=createSprite(300,300,100,50);
  movingRect.shapeColor="pink";
  
}

function draw() {
  background(255,255,255); 
  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
  movingRect.shapeColor="purple";
  fixedRect.shapeColor="orange";
  }

  else {
    fixedRect.shapeColor="blue";
    movingRect.shapeColor="pink";
  }
  drawSprites();
}
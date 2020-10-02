var fixedRect,movingRect
var up,down

function setup() {
createCanvas(600,600)  

fixedRect=createSprite(500,100,50,25);
fixedRect.shapeColor="red";
fixedRect.velocityX=-6

movingRect=createSprite(100,100,50,25)
movingRect.shapeColor="green";
movingRect.velocityX=6

up=createSprite(300,100,25,50)
up.shapeColor="blue"
up.velocityY=6

down=createSprite(300,500,25,50)
down.shapeColor="yellow"
down.velocityY=-6

createEdgeSprites();
}

function draw(){
  background(0)

bounceOff(movingRect,fixedRect);
bounceOff(up,down);
  drawSprites();
}

function bounceOff(o1,o2){
if (o1.x-o2.x<o2.width/2+o1.width/2
  && o2.x-o1.x<o2.width/2+o1.width/2){
o1.velocityX*=(-1)
o2.velocityX*=(-1)
}
if (o1.y-o2.y<o2.height/2+o1.height/2
  && o2.y-o1.y<o2.height/2+o1.height/2){
o1.velocityY*=(-1)
o2.velocityY*=(-1)
}
}
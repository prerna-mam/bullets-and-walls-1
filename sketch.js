var wall,thickness;
var speed,weight,bullet;
function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  thickness=random(22,83);
  weight=random(400,1500);
 bullet = createSprite(50, 200, 50, 50);
 wall=createSprite(1200,200,thickness,height/2);
 bullet.shapeColor=color(255);
 wall.shapeColor=color(230,230,230);
 bullet.velocityX=speed;
 speed=random(223,321);
 weight=random(30,52);
}

function draw() {
  background(255,255,255);  
  
 if(hasCollided(bullet, wall)){

 
  bullet.velocityX-0;
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness)



  if (damage>10)
  {
    wall.shapeColor=color(255,0,0);
  }
if (damage<10){
  wall.shapeColor=color(0,255,0);
}
}
  drawSprites();
}
function hasCollided (bullet1, wall1){
  bulletRightEdge=bullet1.x+bullet1.width;
  wallLeftEdge= wall1.x;
  if(bulletRightEdge>=wallLeftEdge){
return true;
  }
 return false ;
}
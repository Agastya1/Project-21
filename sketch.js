var wall;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);


  speed=random(55,90);
  weight=random(400,1500);


  thickness=random(40,110);

  bullet=createSprite(50,200,50,5);
  bullet.velocityX=speed;


  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor= color (80,80,80);
}


  
 

function draw() {
  background(255,255,255);  
if(bullet.isTouching(wall)){
  bullet.collide(wall);
  var deformation=weight*speed*speed/thickness*thickness*thickness;
if(thickness > 70){
  wall.shapeColor="green";
}
if(thickness < 70){
  wall.shapeColor="red";
}

}
  drawSprites();
}
var bullet,wall
var speed , weight


function setup() {
  createCanvas(800,400);
  
speed=random(40,80)
weight=random(400,1500)

thickness = random(22,83)

bullet=createSprite(50,200,50,10)
bullet.velocityX = speed;
console.log(bullet.velocityX)

wall = createSprite(750,200,thickness,400 )

}

function draw() {
  background(0);  

  
  if(wall.x-bullet.x <(bullet.width+wall.width)/2){
 bullet.velocityX = 0;
 var deformation = 0.5 * weight * speed * speed/22509;
 if(deformation>180){
   wall.shapeColor=color("yellow");
 }
if(deformation<180 && deformation>100){
  wall.shapeColor=color("red");
 }
 if(deformation<100 && deformation>130){
  wall.shapeColor=color("green"); }

}
  drawSprites();
  
}
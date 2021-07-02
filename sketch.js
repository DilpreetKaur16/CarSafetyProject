var car, wall;
var speed,weight;
var deformation;
var object1,object2;
function setup() {
  createCanvas(1300,600);
  speed=random(55,80);
  weight=random(400,1500);

  wall= createSprite(1100,300,50,300);
  wall.shapeColor="black";

  car=createSprite(100, 300, 50, 50);
  car.shapeColor="black";
  car.velocityX=12;

  
}

function draw() {
  background("lavender"); 
  textSize(30);
  stroke("Red");
  fill("black");
  text("GLOBAL CAR SAFETY ORGANIZATION",450,70);
  text("Deformation:"+Math.floor(deformation),150,440);
  textSize(20);
  fill("black");
  text("Deformation >180-- Shouldn't prefer to go-- car color:red",150,480);

  text("180 > Deformation >100-- Should go if urgent-- car color:yellow",150,520);

  text("Deformation <100-- Can go and enjoy the ride-- car color:green",150,560);

  collide(wall,car);
  

  drawSprites();
}
function deform(){
  deformation=(0.5*weight*speed*speed)/22500;

  if(deformation>180){
    car.shapeColor=color(255,0,0);
  }
 else if(deformation>100 && deformation<180){
    car.shapeColor=color(230,230,0);
  }
 else if(deformation<100){
    car.shapeColor=color(0,255,0);
  }
}

function collide(object1,object2){
if(object1.x-object2.x<object1.width/2 +object2.width/2){
  
  deform();
  object2.velocityX=0;
}

}
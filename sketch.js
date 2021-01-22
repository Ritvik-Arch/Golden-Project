var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13;
var doctor, doctor_img;

function preload(){
  doctor_img=loadImage("D.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  // Creating Doctor and displaying its image
doctor=createSprite(40,60,30,30);
doctor.addImage(doctor_img);
doctor.scale=0.4;
  
//Create Maze
m1= createSprite(180,25,10,100);
m2= createSprite(20,140,100,10);
m3= createSprite(60,140,100,10);
m4= createSprite(110,185,10,100);

}



function draw() {
  background(247,222,96); 

  // Initial conditions
  doctor.velocityX=0;
  doctor.velocityY=0;

  //Moving the doctor sprite
  if(keyDown("w")){
    doctor.velocityX=0;
    doctor.velocityY=-5;
  }
  if(keyDown("s")){
    doctor.velocityX=0;
    doctor.velocityY=5;
  }
  if(keyDown("a")){
    doctor.velocityX=-5;
    doctor.velocityY=0;
  }
  if(keyDown("d")){
    doctor.velocityX=5;
    doctor.velocityY=0;
  }


 drawSprites();
}

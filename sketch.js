
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var ground
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,500)
 monkey = createSprite(40,400,20,20)
 monkey.addAnimation("running",monkey_running)
 monkey.scale=0.14
  
 ground = createSprite(300,500,600,107)
 ground.x = ground.width /2;
 ground.velocityX=-3;
  
 foodGroup = createGroup();
 obstacleGroup = createGroup();
}


function draw() {
  background("skyblue")

  if(keyDown("space")&& monkey.y >= 300){
    monkey.velocityY= -12
  }
  
  monkey.velocityY = monkey.velocityY +0.8
  
  stroke("white");
  textSize(20);
  fill("white")
  text("Score :"+score,400,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime :" + survivalTime,100,50);
  
  if(ground.x > 0){
    ground.x = ground.width /2;
  }
  
  food();
  enemy();
  
  monkey.collide(ground);
  drawSprites();
}

function food(){
  
  if(World.frameCount%80==0){
    banana = createSprite(600,200,20,20);
    banana.scale = 0.15
    banana.addImage("banana",bananaImage);
    banana.y=Math.round(random(120,300));
    banana.velocityX = -9;
    banana.setLifeTime = 60;
    foodGroup.add(banana);
    
  }
}

function enemy(){
  
  if(World.frameCount%300==0){
    obstacle = createSprite(600,425,20,20);
    obstacle.scale = 0.15
    obstacle.addImage("rock",obstacleImage);
    obstacle.velocityX = -9;
    obstacle.setLifeTime = 60;
    obstacleGroup.add(obstacle);
  }
}


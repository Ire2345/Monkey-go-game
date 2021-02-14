var backImage,backgr;
var player, player_running;
var ground,ground_img;
var foodGroup;
var END =0;
var PLAY =1;
var gameState = PLAY;
var score;
var ObstaclesGroup;
function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
 bananaImage=loadImage("banana.png");
 obstacleImage=loadImage("stone.png");
}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;

  foodGroup=new Group();
  ObstaclesGroup=new Group();
  score=0
  
}

function draw() { 
  background(0);
  
 

  

  if(gameState===PLAY){
    
    
  
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
    if(keyDown("space") ) {
      player.velocityY = -25;
    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);

    if(foodGroup.isTouching(player)){
      foodGroup.destroyEach();
      score = score + 2;
      player.scale+= +0.1

    }

    if (ObstaclesGroup.isTouching(player)){
      gameState = END;
    }
  


    spawnObstacles();

    spawnFood();

  }
  else if(gameState === END){
  backgr.velocityX = 0;
  player.visible = false;


  foodGroup.destroyEach();
  ObstaclesGroup.destroyEach();



text("Game Over",400,200)
  textSize(30)
  

  






 





  }
  drawSprites();
  

  
  textSize(30);
  fill(255)
  text("Score:"+score,700,20);

 


}




function spawnFood(){
if(frameCount% 80 === 0){
var banana = createSprite(600,250,40,10);
banana.y = random(50,130);
banana.addImage(bananaImage);
banana.scale=0.05
banana.velocityX= -4;

banana.lifetime = 300;
player.depth = banana.depth + 1;
foodGroup.add(banana)



}




}


function spawnObstacles(){
if(frameCount % 150 === 0){
var obstacle = createSprite(600,250,40,40);
obstacle.x = random(400,600);
obstacle.addImage(obstacleImage)
obstacle.scale=0.25;
obstacle.velocityX=-4


obstacle.lifetime = 300;
player.depth = obstacle.depth + 1;
ObstaclesGroup.add(obstacle)










}










}



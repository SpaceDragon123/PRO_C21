var shooter,shooterImage,bullet;
var alien,alienGroup,alienImage;
var Lbar,Rbar;
var bullets,bar;
var PLAY = 1;
var gameState = PLAY,END =0;
var score=0,gameOver,gameOverImg;
var bomb
function preload(){
  shooterImage = loadImage("jet.png");
  alienImage = loadAnimation("alien.png","alien2.png","alien3.png","alien4.png","alien5.png","alien6.png","alien7.png","alien8.png","alien9.png");
  gameOverImg = loadImage("gameOver.png");
  bombImage = loadImage("explosive.png")
}

function setup() {
  createCanvas(650, 550);
  
  shooter = createSprite(400,450,50,80);
  shooter.addImage(shooterImage);
  shooter.scale = 0.18
  
  bullets = new Group();
  alienGroup = new Group();
  
  Lbar = createSprite(0,300,3,600);
  Rbar = createSprite(650,300,3,600);
  
  
  
}

function draw() {
  background(11,11,69);
 //make the shooter move to the left side
 if(keyDown("left")){
   shooter.x = shooter.x - 5 ;
 }

 //make the shooter move to the right by using right arrow key
 if(keyDown("right")){
  shooter.x = shooter.x + 5 ;
}

 //release the bullets when space key is pressed
if(keyDown("space")){
    spawnBullets();
   
}

if(bullets.isTouching(alienGroup)){
alienGroup.destroyEach();

}
spawnBomb();
spawnAliens();

  drawSprites();
}


function spawnAliens(){
  if(frameCount % 60 == 0) {
  alien = createSprite (Math.round(random(50,600)),-50, 10, 10) ;
  alien.addAnimation ("alien", alienImage);
  alien.velocityY = 7;
  alien.scale = 0.15;
  alien.setLifetime = 800 ;

  alienGroup.add(alien);
  }
}


function spawnBullets(){
  if(frameCount%5 ===0){
bullet = createSprite(shooter.x,shooter.y - 40,5,10);
bullet.velocityY = -5;
    bullet.shapeColor = rgb(255, 255, 0);
    
    bullet.lifetime = 150;
    bullets.add(bullet);

  
}
}
function spawnbomb(){
  if(frameCount % 240 == 0) {
    bomb = createSprite (Math.round(random(50,600)),-50, 10, 10) ;
    bomb.addAnimation ("bomb", bombImage);
    bomb.velocityY = 7;
    bomb.scale = 0.15;
    bomb.setLifetime = 800 ;
  
    bomb.add(alien);
}
}
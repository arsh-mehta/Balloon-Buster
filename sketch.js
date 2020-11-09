var backgroundImage,Background;

var bow,arrow,redB,pinkB,greenB,blueB,arrowGroup;

var bowImage,arrowImage,redImage,greenImage,pinkImage,blueImage;

var score;

function preload(){
  backgroundImage = loadImage("background0.png");
  bowImage = loadImage("bow0.png");
  arrowImage = loadImage("arrow0.png");
  redImage = loadImage("red_balloon0.png");
  greenImage = loadImage("green_balloon0.png");
  pinkImage = loadImage("pink_balloon0.png");
  blueImage = loadImage("blue_balloon0.png");
}

function setup(){
  createCanvas(600,600);
  Background  = createSprite(200,100,600,600);
  Background.addImage("background",backgroundImage);
  Background.scale = 2.5;
  
  bow  = createSprite(580,0,10,40);
  bow.addImage("bow",bowImage);
  score = 0;
  
  arrowGroup = new Group();
  pinkB = new Group();
  blueB = new Group();
  greenB = new Group();
  redB = new Group();
  
  
}


function draw(){
  textSize(20);
  fill("black");
  Background.velocityX = -2;
  
  
  if(Background.x<100){
    Background.x = Background.width/2;
  }
  
  CreateArrow();
  ballon_selector = Math.round(random(1,4));
  ballonSelector();
  
  if(arrowGroup.isTouching(pinkB)){
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
  }
  else if(arrowGroup.isTouching(blueB)){
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
  }
  else if(arrowGroup.isTouching(greenB)){
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
  }
  else if(arrowGroup.isTouching(redB)){
    redB.destroyEach();
    arrowGroup.destroyEach();
    score = score+3;
  }
    
  bow.y = mouseY;
  drawSprites();
  text("Score: "+score,300,570);
}

function CreateArrow(){
  if(keyWentDown("space")){
    console.log("Arrow Shot");
    arrow = createSprite(560,mouseY,50,10);
    arrow.velocityX = -8;
    arrow.addImage("arrow",arrowImage)
    arrow.scale = 0.3;
    arrow.lifetime = 75;
    arrowGroup.add(arrow);
    
  }
  
}

function red_ballon(){
  var red = createSprite(40,Math.round(random(20,370)),20,20);
  red.addImage("red Ballon",redImage)
  red.scale = 0.1;
  red.lifetime = 75;
  red.velocityX = 6;
  redB.add(red);
}
function blue_ballon(){
  var blue = createSprite(0,Math.round(random(20,370)),10,10);
  blue.addImage("blue Ballon",blueImage)
  blue.scale = 0.11;
  blue.lifetime = 150;
  blue.velocityX = 3;
  blueB.add(blue);
}
function green_ballon(){
  var green = createSprite(0,Math.round(random(20,370)),10,10);
  green.addImage("green Ballon",greenImage)
  green.scale = 0.1;
  green.lifetime = 150;
  green.velocityX = 3;
  greenB.add(green);
}
function pink_ballon(){
 var pink = createSprite(220,300,20,20);
  pink.addImage("pink Ballon",pinkImage)
  pink.scale = 1.2;
  pink.lifetime = 80;
  pink.velocityX = 3;
  pinkB.add(pink);
}


function ballonSelector(){
  if(World.frameCount % 80 === 0){
    if(ballon_selector===1){
      red_ballon();
      console.log("The Ballon Selector Has Chosen The Red Ballon");
    }
    else if(ballon_selector===2){
      blue_ballon();
      console.log("The Ballon Selector Has Chosen The Blue Ballon");
    }
    else if(ballon_selector===3){
      green_ballon();
      console.log("The Ballon Selector Has Chosen The Green Ballon");
    }
    else{
      pink_ballon();
      console.log("The Ballon Selector Has Chosen The Pink Ballon");
    }
  }
}

var canvas, backgroundImage;

var gameState = 0,finishedPlayers;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var passedFinish;
var obstacles;
var s,i;
var form, player, game;

var cars, car1, car2;
var track, car1_img, car2_img;

var bg;

function preload(){
    s=loadSound("sliding.mp3")
f2 = loadImage("f1.png");
  track = loadImage("track.jpg");
  car1_img = loadImage("car1.png");
  car2_img = loadImage("car2.png");
  ground = loadImage("ground.png");
  silver_img = loadImage("silver.png");
  gold_img = loadImage("gold.png");
  bg=loadImage("wallpaper.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  gameState = 0;
  distance = 0;
  finishedPlayers = 0;
  yVel = 0;
  xVel = 0;
  obstacles=createGroup();

  xSet = false;
  game = new Game();
  game.getState();
  game.start();
    for(i=0;i<5;i++)
  {
    w=random(200,950);
    h=random(-height*4,height-300);
  f1 = createSprite(w,h);
  //car1.debug="true";
  f1.addImage("f1",f2);
  obstacles.add(f1);
 }
}


function draw(){
   //start the game
   background(bg);

   //start the game
 
  //start the game
  if (playerCount === 2 && finishedPlayers === 0) {
    game.update(1);
  }

  //start the game for real
  if (gameState === 1) {
    game.play();
  }

  //end the game
  if (finishedPlayers === 2) {
    game.update(2);
    //gameState = 2;
  }

  //display ranking
  if (gameState === 2 && finishedPlayers === 2) {
    game.displayRanks();
  }
}
function keyPressed() {
  if (keyCode === 13 && gameState !== 1 && passedFinish === false) {
    form.enter();
    console.log("hai");
    passedFinish = true;
  }
}

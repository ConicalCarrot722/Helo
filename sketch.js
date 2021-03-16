var gameState=0,playerCount, database;
var form,game,player;
var playerDetail
var distance=0
var car1,car2,car3,car4,cars
var car1Image,car2Image,car3Image,car4Image,track
function preload(){
  car1Image=loadImage("Images/car1.png")
  car2Image=loadImage("Images/car2.png")
  car3Image=loadImage("Images/car3.png")
  car4Image=loadImage("Images/car4.png")
  track=loadImage("Images/track.jpg")
}
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth,displayHeight);
game=new Game()
game.getState()
game.start()

  
}

function draw(){
  if(playerCount===4){
    game.update(1)
  }
  if(gameState===1){
    clear()
    game.play()
  }
  if(gameState==2){
    game.end()
  }
}



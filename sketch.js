var canva;

var gameState = 0; 

var contestantCount, database, quiz, question, contestant;

var form, contestant, game;

function setup(){
  canvas = createCanvas(850,400);

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("pink");

  if(contestantCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }

}

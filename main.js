//query selectors
var classicGameButton = document.querySelector(".classic-game-button");
var modernGameButton = document.querySelector(".modern-game-button");
var fighterChoiceRock = document.querySelector(".rock");
var fighterChoicePaper = document.querySelector(".paper");
var fighterChoiceScissors = document.querySelector(".scissors");
var fighterChoiceTornado = document.querySelector(".tornado");
var fighterChoiceVolcano = document.querySelector(".volcano");
var resetGameButton = document.querySelector(".reset-game-button");
var changeGameButton = document.querySelector(".change-game-button");
var currentGame = "";

//event listeners
// window.addEventListener('load', function());

classicGameButton.addEventListener('click', classicGamePageLoad);
fighterChoiceRock.addEventListener('click', function(){
  currentGame.checkGameWinner("classic", "rock", currentGame.computerRandomFighter());
  refreshWins();
});
fighterChoicePaper.addEventListener('click', function(){
  currentGame.checkGameWinner("classic", "paper", currentGame.computerRandomFighter());
  refreshWins();
});
fighterChoiceScissors.addEventListener('click', function(){
  currentGame.checkGameWinner("classic", "scissors", currentGame.computerRandomFighter());
  refreshWins();
});
modernGameButton.addEventListener('click', modernGamePageLoad);





//event handlers/functions
function mainPageLoad(){

};

function classicGamePageLoad(){
  var fighters = document.querySelector(".classic-fighter-button-container");
  var classicSubtitle = document.querySelector(".game-display-classic");
  var resetButton = document.querySelector(".reset-game-button-container");
  var changeButton = document.querySelector(".change-game-button-container");
  var pageLoad = document.querySelector(".game-page-load");
  var subtitle = document.querySelector(".game-subtitle");
  var fighterChoice = document.querySelector(".game-page-fighter-choice");

  fighters.classList.remove("hidden");
  classicSubtitle.classList.remove("hidden");
  resetButton.classList.remove("hidden");
  changeButton.classList.remove("hidden");
  pageLoad.classList.add("hidden");
  subtitle.classList.add("hidden");
  fighterChoice.classList.remove("hidden");
  currentGame = new Game();
}

function modernGamePageLoad(){
//this should mirror the above classicGamePageLoad with the different subtitle, and fighter choice
};

function refreshWins(){
  var player1 = document.querySelector(".player1-number-wins");
  var player2 = document.querySelector(".player2-number-wins");
  var player1Wins = "";
  var player2Wins = "";

  player1Wins += `wins: ${currentGame.player1.wins}`;
  player2Wins += `wins: ${currentGame.player2.wins}`;

  player1.innerText = player1Wins;
  player2.innerText = player2Wins;
}

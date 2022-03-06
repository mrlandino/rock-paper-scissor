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

var classicFighters = document.querySelector(".classic-fighter-button-container");
var modernFighters = document.querySelector(".modern-fighter-button-container");
var classicSubtitle = document.querySelector(".game-display-classic");
var modernSubtitle = document.querySelector(".game-display-modern");
var subtitle = document.querySelector(".game-subtitle");
var resetButton = document.querySelector(".reset-game-button-container");
var changeButton = document.querySelector(".change-game-button-container");
var pageLoad = document.querySelector(".game-page-load");
var classicGameChoice= document.querySelector(".classic-fighter-button-container")
var modernGameChoice = document.querySelector(".modern-fighter-button-container")
var gamePage = document.querySelector(".game-page-fighter-choice");
var weaponVsWeapon = document.querySelector(".weapon-vs-weapon");
var currentGame = "";

//event listeners
window.addEventListener('load', function(){
    currentGame = new Game();
});

classicGameButton.addEventListener('click', classicGamePageLoad);
modernGameButton.addEventListener('click', modernGamePageLoad);

gamePage.addEventListener('click', function(e){
   if(e.target.classList.contains("rock")){
     currentGame.checkGameWinner(currentGame.selectedGame, "rock", currentGame.player2.takeTurn(currentGame.selectedGame));
     refreshWins();
     showCurrentWinner();
     setTimeout(resetWinner, 3000);
   }
   if(e.target.classList.contains("paper")){
     currentGame.checkGameWinner(currentGame.selectedGame, "paper", currentGame.player2.takeTurn(currentGame.selectedGame));
     refreshWins();
     showCurrentWinner();
     setTimeout(resetWinner, 3000);
   }
   if(e.target.classList.contains("scissors")){
     currentGame.checkGameWinner(currentGame.selectedGame, "scissors", currentGame.player2.takeTurn(currentGame.selectedGame));
     refreshWins();
     showCurrentWinner();
     setTimeout(resetWinner, 3000);
   }
   if(e.target.classList.contains("tornado")){
     currentGame.checkGameWinner(currentGame.selectedGame, "tornado", currentGame.player2.takeTurn(currentGame.selectedGame));
     refreshWins();
     showCurrentWinner();
     setTimeout(resetWinner, 3000);
   }
   if(e.target.classList.contains("volcano")){
     currentGame.checkGameWinner(currentGame.selectedGame, "volcano", currentGame.player2.takeTurn(currentGame.selectedGame));
     refreshWins();
     showCurrentWinner();
     setTimeout(resetWinner, 3000);
   }
});

resetGameButton.addEventListener('click', resetGame)
changeGameButton.addEventListener('click', mainPageLoad)

//event handlers/functions
function mainPageLoad(){
  classicFighters.classList.add("hidden");
  classicSubtitle.classList.add("hidden");
  modernSubtitle.classList.add("hidden");
  resetButton.classList.add("hidden");
  changeButton.classList.add("hidden");
  pageLoad.classList.remove("hidden");
  subtitle.classList.remove("hidden");
  gamePage.classList.add("hidden");
  classicGameChoice.classList.add("hidden");
  modernGameChoice.classList.add("hidden");
  weaponVsWeapon.classList.add("hidden");
};

function classicGamePageLoad(){
  classicFighters.classList.remove("hidden");
  classicSubtitle.classList.remove("hidden");
  resetButton.classList.remove("hidden");
  changeButton.classList.remove("hidden");
  pageLoad.classList.add("hidden");
  subtitle.classList.add("hidden");
  gamePage.classList.remove("hidden");
  classicGameChoice.classList.remove("hidden");
  currentGame.selectedGame = "classic";
}

function modernGamePageLoad(){
  modernFighters.classList.remove("hidden");
  modernSubtitle.classList.remove("hidden");
  resetButton.classList.remove("hidden");
  changeButton.classList.remove("hidden");
  pageLoad.classList.add("hidden");
  subtitle.classList.add("hidden");
  gamePage.classList.remove("hidden");
  modernGameChoice.classList.remove("hidden");
  classicGameChoice.classList.add("hidden");
  currentGame.selectedGame = "modern";
};

function refreshWins(){
  var player1 = document.querySelector(".player1-number-wins");
  var player2 = document.querySelector(".player2-number-wins");
  player1.innerText = `wins: ${currentGame.player1.wins}`;
  player2.innerText = `wins: ${currentGame.player2.wins}`;
}

function resetGame(){
  currentGame.scoreReset();
  refreshWins();
}

function showCurrentWinner(){
  var winnerDraw = document.querySelector(".choose-your-fighter")
  winnerDraw.innerText = "Choose your Weapon!!"
  weaponVsWeapon.classList.remove("hidden");

  if (currentGame.presentWinner === "player1"){
    winnerDraw.innerHTML = `Congratulations ${currentGame.player1.name}! You WIN!!`;
    classicFighters.classList.add("hidden");
    modernFighters.classList.add("hidden");
    weaponVsWeapon.innerHTML += `<img class="${currentGame.player1Weapon}1" src="./assets/${currentGame.player1Weapon}.png" alt="${currentGame.player1Weapon}"></img>
    <p class="defeats">DEFEATS</p>
    <img class="${currentGame.player2Weapon}1" src="./assets/${currentGame.player2Weapon}.png" alt="${currentGame.player2Weapon}"></img>
    `;
  }
  if (currentGame.presentWinner === "player2"){
    winnerDraw.innerHTML = `You lose to ${currentGame.player2.name}.`;
    classicFighters.classList.add("hidden");
    modernFighters.classList.add("hidden");
    weaponVsWeapon.innerHTML += `<img class="${currentGame.player1Weapon}1" src="./assets/${currentGame.player1Weapon}.png" alt="${currentGame.player1Weapon}"></img>
    <p class="loses">LOSES TO</p>
    <img class="${currentGame.player2Weapon}1" src="./assets/${currentGame.player2Weapon}.png" alt="${currentGame.player2Weapon}"></img>
    `;
  }
  if (currentGame.presentWinner === "draw"){
    winnerDraw.innerHTML = `<p class="winner">Its a Draw!!</p>`;
    classicFighters.classList.add("hidden");
    modernFighters.classList.add("hidden");
    weaponVsWeapon.innerHTML += `<img class="${currentGame.player1Weapon}1" src="./assets/${currentGame.player1Weapon}.png" alt="${currentGame.player1Weapon}"></img>
    <p class="draw">DRAW</p>
    <img class="${currentGame.player2Weapon}1" src="./assets/${currentGame.player2Weapon}.png" alt="${currentGame.player2Weapon}"></img>
    `;
  }
}

function resetWinner() {
  currentGame.presentWinner = "";
  var winnerDraw = document.querySelector(".choose-your-fighter")
  winnerDraw.innerText = "Choose your Weapon!!";
  weaponVsWeapon.classList.add("hidden");
  if (currentGame.selectedGame === "classic"){
    classicFighters.classList.remove("hidden");
  } else {
    modernFighters.classList.remove("hidden");
  }
  weaponVsWeapon.innerHTML = "";
}

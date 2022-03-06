class Game {
  constructor(){
    this.player1 = new Player("Human", "./assets/human.png");
    this.player2 = new Player("Computer", "./assets/computer.png" );
    this.selectedGame = "";
    this.presentWinner = "";
    this.player1Weapon = "";
    this.player2Weapon = "";
  }

  classicRPSWinner(player1, player2){
    if (player1 === "rock") {
      player1 = 1;
      this.player1Weapon = "rock";
    } else if (player1 === "paper") {
      player1 = 2;
      this.player1Weapon = "paper";
    } else {
      player1 = 3;
      this.player1Weapon = "scissors";
    }

    if (player2 === "rock") {
      player2 = 1;
      this.player2Weapon = "rock";
    } else if (player2 === "paper") {
      player2 = 2;
      this.player2Weapon = "paper";
    } else {
      player2 = 3;
      this.player2Weapon = "scissors";
    }

    var currentWinner = "";

    if (player1 + player2 === 4 && player1 !== player2) {
      currentWinner = 1;
    } else if (player1 + player2 === 3 && player1 !== player2) {
      currentWinner = 2;
    } else if (player1 + player2 === 5 && player1 !== player2) {
      currentWinner = 3;
    } else {
      currentWinner = "tie";
    }

    if (player1 === currentWinner) {
      this.player1.wins++;
      this.presentWinner = "player1";
    } else if (player2 === currentWinner){
      this.player2.wins++;
      this.presentWinner = "player2";
    } else {
      this.presentWinner = "draw";
    }
  }

  modernRPSWinner(player1, player2){
    if (player1 === "rock") {
      player1 = 1;
      this.player1Weapon = "rock";
    } else if (player1 === "paper") {
      player1 = 2;
      this.player1Weapon = "paper";
    } else if (player1 === "scissors"){
      player1 = 3;
      this.player1Weapon = "scissors";
    } else if (player1 === "volcano") {
      player1 = 10;
      this.player1Weapon = "volcano";
    } else {
      player1 = 15;
      this.player1Weapon = "tornado";
    }

    if (player2 === "rock") {
      player2 = 1;
      this.player2Weapon = "rock";
    } else if (player2 === "paper") {
      player2 = 2;
      this.player2Weapon = "paper";
    } else if (player2 === "scissors") {
      player2 = 3;
      this.player2Weapon = "scissors";
    } else if (player2 === "volcano") {
      player2 = 10;
      this.player2Weapon = "volcano";
    } else {
      player2 = 15;
      this.player2Weapon = "tornado";
    }

    var currentWinner = "";

    if (player1 + player2 === 4 && player1 !== player2) {
      currentWinner = 1;
    } else if (player1 + player2 === 3 && player1 !== player2) {
      currentWinner = 2;
    } else if (player1 + player2 === 5 && player1 !== player2) {
      currentWinner = 3;
    } else if (player1 + player2 === 11 && player1 !== player2) {
      currentWinner = 1;
    } else if (player1 + player2 === 12 && player1 !== player2) {
      currentWinner = 10;
    } else if (player1 + player2 === 13 && player1 !== player2) {
      currentWinner = 3;
    } else if (player1 + player2 === 16 && player1 !== player2) {
      currentWinner = 15;
    } else if (player1 + player2 === 17 && player1 !== player2) {
      currentWinner = 2;
    } else if (player1 + player2 === 18 && player1 !== player2) {
      currentWinner = 15;
    } else if (player1 + player2 === 25 && player1 !== player2) {
      currentWinner = 10;
    } else {
      currentWinner = "tie";
    }

    if (player1 === currentWinner) {
      this.player1.wins++;
      this.presentWinner = "player1";
    } else if (player2 === currentWinner){
      this.player2.wins++;
      this.presentWinner = "player2";
    } else {
      this.presentWinner = "draw";
    }
  }

  checkGameWinner(gameType, player1, player2){
    if (gameType === "classic"){
      this.classicRPSWinner(player1, player2);
    }
    if (gameType === "modern"){
      this.modernRPSWinner(player1, player2);
    }
  }

  //need to find out if I need this?
  newGame(){
    document.location.reload();
  }

  scoreReset(){
    this.player1.wins = 0;
    this.player2.wins = 0;
  }
}

class Game {
  constructor(){
    this.player1 = new Player("Human", "./assets/human.png");
    this.player2 = new Player("Computer", "./assets/computer.png" );
    this.selectedGame = "";
    this.presentWinner = "";
  }

  classicRPSWinner(player1, player2){
    if (player1 === "rock") {
      player1 = 1;
    } else if (player1 === "paper") {
      player1 = 2;
    } else {
      player1 = 3;
    }

    if (player2 === "rock") {
      player2 = 1;
    } else if (player2 === "paper") {
      player2 = 2;
    } else {
      player2 = 3;
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
      console.log("player 1 wins!!");
    } else if (player2 === currentWinner){
      this.player2.wins++;
      this.presentWinner = "player2";
      console.log("player 2 wins!!");
    } else {
      this.presentWinner = "draw";
      console.log("its a DRAW!!");
    }
  }

  modernRPSWinner(player1, player2){
    if (player1 === "rock") {
      player1 = 1;
    } else if (player1 === "paper") {
      player1 = 2;
    } else if (player1 === "scissors"){
      player1 = 3;
    } else if (player1 === "volcano") {
      player1 = 10;
    } else {
      player1 = 15;
    }

    if (player2 === "rock") {
      player2 = 1;
    } else if (player2 === "paper") {
      player2 = 2;
    } else if (player2 === "scissors") {
      player2 = 3;
    } else if (player2 === "volcano") {
      player2 = 10;
    } else {
      player2 = 15;
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
      console.log("player 1 wins!!");
    } else if (player2 === currentWinner){
      this.player2.wins++;
      this.presentWinner = "player2";
      console.log("player 2 wins!!");
    } else {
      this.presentWinner = "draw";
      console.log("its a DRAW!!");
    }
  }

  checkGameWinner(gameType, player1, player2){
    //player1 choice agains player 2 choice with the game type to compare
    if (gameType === "classic"){
      this.classicRPSWinner(player1, player2);
    }
    if (gameType === "modern"){
      this.modernRPSWinner(player1, player2);
    }
  }

  newGame(){
    document.location.reload();
  }

  scoreReset(){
    this.player1.wins = 0;
    this.player2.wins = 0;
  }
}

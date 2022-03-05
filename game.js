class Game {
  constructor(){
    this.player1 = new Player("human", "./assets/human.png");
    this.player2 = new Player("computer", "./assets/computer.png" );
    this.selectedGame = "";
    this.currentGameStatus = {
      player1 : this.player1,
      player2 : this.player2,
      currentGame : this.selectedGame,
      player1Wins : this.player1.wins,
      player2Wins : this.player2.wins
    }
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
      console.log("player 1 wins!!");
    } else if (player2 === currentWinner){
      this.player2.wins++;
      console.log("player 2 wins!!");
    } else {
      console.log("its a DRAW!!");
    }
  }

  // modernRPSWinner(player1, player2){
  //   var rock > scissors || volcano;
  //   var paper > rock || tornado;
  //   var scissors > paper || volcano;
  //   var volcano > paper || tornado;
  //   var tornado > scissors || rock;
  //
  //   if (player1 > player2) {
  //     return "player1 wins";
  //     //need to add (wins count, message)??
  //     //refresh fighter choice??
  //   }
  //   if (player1 < player2) {
  //     return "player1 wins";
  //     //need to add (wins count, message)??
  //     //refresh fighter choice??
  //   }
  //   if (player1 === player2) {
  //     return "ITS A DRAW!!"
  //   }
  // }

  checkGameWinner(gameType, player1, player2){
    //player1 choice agains player 2 choice with the game type to compare
    if (gameType === "classic"){
      this.classicRPSWinner(player1, player2);
    }
    if (gameType === "modern"){
      this.modernRPSWinner(player1, player2);
    }
  }

  computerRandomFighter(){
    var fighterArray = ["rock", "paper", "scissors"];
    return fighterArray[Math.floor(Math.random() * fighterArray.length)];
  }
  gameChange(){

  }

  scoreReset(){
    this.player1.wins = 0;
    this.player2.wins = 0;
  }
}

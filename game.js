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
    var rock = 1;
    var paper = 2;
    var scissors = 3;
    var currentWinner = "";

    if (player1 + player2 === 4 && player1 !== player2) {
      currentWinner = "rock";
    } else if (player1 + player2 === 3 && player1 !== player2) {
      currentWinner = "paper";
    } else if (player1 + player2 === 2 && player1 !== player2) {
      currentWinner = "scissors";
    } else {
      currentWinner = "tie";
    }

    if (player1 === currentWinner) {
      this.player1.wins++;
      return "player 1 wins!!";
    } else if (player2 === currentWinner){
      this.player2.wins++;
      return "player 2 wins!!";
    } else {
      return "its a DRAW!!";
    }
  }

  modernRPSWinner(player1, player2){
    var rock > scissors || volcano;
    var paper > rock || tornado;
    var scissors > paper || volcano;
    var volcano > paper || tornado;
    var tornado > scissors || rock;

    if (player1 > player2) {
      return "player1 wins";
      //need to add (wins count, message)??
      //refresh fighter choice??
    }
    if (player1 < player2) {
      return "player1 wins";
      //need to add (wins count, message)??
      //refresh fighter choice??
    }
    if (player1 === player2) {
      return "ITS A DRAW!!"
    }
  }

  checkGameWinner(gameType, player1, player2){
    //player1 choice agains player 2 choice with the game type to compare
    if (gameType === "classic"){
      classicRPSWinner(player1, player2);
    }
    if (gameType === "modern"){
      modernRPSWinner(player1, player2);
    }
  }

  gameChange(){
    
  }

  scoreReset(){
    this.player1.wins = 0;
    this.player2.wins = 0;
  }
}

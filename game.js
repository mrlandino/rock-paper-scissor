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
    var rock > scissors;
    var paper > rock;
    var scissors > paper;
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
  }

  checkGameWinner(gameType, player1, player2){
    //player1 choice agains player 2 choice with the game type to compare
    if (gameType === "classic"){
      classicRPSWinner(player1, player2);
      //player1 wins! put message up
      //add 1 win to player1.wins
      //
    }
    if (gameType === "modern"){
      modernRPSWinner(player1, player2);
      //player1 loses! put message up
      //add 1 win to player2.wins
      //

  }
}

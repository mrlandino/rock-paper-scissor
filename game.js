class Game {
  constructor(){
    this.player1 = new Player("Human", "./assets/human.png");
    this.player2 = new Player("Computer", "./assets/computer.png" );
    this.selectedGame = "";
    this.presentWinner = "";
    this.player1Weapon = "";
    this.player2Weapon = "";
    this.gameRules = {
      rockscissors: "player1",
      rockpaper : "player2",
      rockvolcano : "player1",
      rocktornado : "player2",
      paperscissors : "player2",
      paperrock : "player1",
      papervolcano : "player2",
      papertornado : "player1",
      scissorspaper : "player1",
      scissorsrock : "player2",
      scissorsvolcano : "player1",
      scissorstornado : "player2",
      volcanorock : "player2",
      volcanopaper : "player1",
      volcanoscissors : "player2",
      volcanotornado : "player1",
      tornadorock : "player1",
      tornadopaper : "player2",
      tornadoscissors : "player1",
      tornadovolcano : "player2",
      rockrock : "draw",
      scissorsscissors : "draw",
      paperpaper : "draw",
      volcanovolcano: "draw",
      tornadotornado: "draw",
    }
  }

  checkGameWinner(player1, player2){
    this.player1Weapon = player1;
    this.player2Weapon = player2;
    var weaponCompare = `${player1}${player2}`;
    var declareWinner = this.gameRules[weaponCompare];
    if (declareWinner === "player1") {
      this.player1.wins++;
      this.presentWinner = "player1";
    } else if (declareWinner === "player2"){
      this.player2.wins++;
      this.presentWinner = "player2";
    } else {
      this.presentWinner = "draw";
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

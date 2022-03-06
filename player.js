class Player {
  constructor(name, token){
    this.name = name;
    this.token = token;
    this.wins = 0;
  }

  takeTurn(gameType){
    if (gameType === "classic"){
      var fighterArray = ["rock", "paper", "scissors"];
      return fighterArray[Math.floor(Math.random() * fighterArray.length)];
    }
    if (gameType === "modern") {
      var fighterArray = ["rock", "paper", "scissors", "volcano", "tornado"];
      return fighterArray[Math.floor(Math.random() * fighterArray.length)];
    }
  }
}

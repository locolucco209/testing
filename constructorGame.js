class Player{
  constructor(name, position, offense, defense){
    this.name = name
    this.position = position
    this.offensive = offense
    this.defense = defense
  }

//gameResult - Good Game vs Bad Game
gameResult(){
let result = Math.floor(Math.random() * 2);
  if (result === 0) {
    this.badGame = true
    this.goodGame = false
  }
  else {
    this.badGame = false
    this.goodGame = true
  }
  }
  }
}

// //badGame
// badGame(){
//   if()
// }

//printStats
printStats(){
    console.log(`${this.offensive}`)
   }
  }

let jose = new Player("Jose", "Right Handed Pitcher", "7", "2")

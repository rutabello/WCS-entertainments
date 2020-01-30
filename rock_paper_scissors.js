const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors"){
      return userInput;
    } else {
      console.log("This is not an option");
    }
  }
  
function getComputerRandomNumberChoice() {
    return Math.floor(Math.random() * (3 - 0))
  }

  // console.log(getComputerRandomNumberChoice());

// crear una funcio que conte la creacio d'un numero random o crida la funcio de getComputerChoice (per cridar una funcio posar parentesis)
// dins la funció depenent del numero random que tinc, faig una comprobacio
// (if-else) per retornan rock paper o scissors

//console log de la crida de la funcio per veure si funciona


// function getComputerresult
//      cridar funcio de numero random
//      fer if else comparant el numero random amb rock scissors paper
//      a cada opcio, que tingui un return
//tancar funcio

//fer un prova que la funcio funciona amb un console.log


function getComputerResult () {
    let randomNumber = getComputerRandomNumberChoice();
    console.log('aixo es el randomNumber', randomNumber);

    if (randomNumber === 0) {
        return "rock";
    }
    
    if (randomNumber === 1) {
        return "paper";
    }

    return "scissors";
  }
    // console.log(getComputerResult());

  
  function determineWinner(userChoice, computerChoice) {


    if (userChoice === computerChoice){
      return "Tie";
    }

    if (userChoice === "paper") { 
      if (computerChoice === "scissors") {
        return "You loose. Computer wins"
      }
      if (computerChoice === "rock") {
        return "You win!"
      }
    }
    
    if (userChoice === "scissors") { 
      if (computerChoice === "rock") {
        return "You loose. Computer wins"
      }
      if (computerChoice === "paper") {
        return "You win!"
      }
    }

    if (userChoice === "rock") { 
        if (computerChoice === "paper") {
          return "You loose. Computer wins"
        }
        if (computerChoice === "scissors") {
          return "You win!"
        }
      }
  }





var player = getUserChoice("paper");
var computer = getComputerResult();

  determineWinner(player, computer);

  console.log(determineWinner("rock", "paper"));
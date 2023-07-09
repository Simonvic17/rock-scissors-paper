function playerSelection() {
	let userInput = prompt("Write your choice between Rock, Paper and Scissors");
	let user = userInput.toLowerCase();
		console.log("You choose: " + user);
		return user;	
}


function getComputerChoice() {
	var choice = ["rock", "paper", "scissors"];
	let word = choice[Math.floor(Math.random()*choice.length)];
	console.log ("Computer chooses: " + word)
	return word;
}

function playRound(player1, computer1) {
    //Your code
  
    let playerScore = 0;
      let computerScore = 0;
      let count = 0;
  
      if(localStorage == null) {
          localStorage.setItem("computerScore", computerScore)
          localStorage.setItem("playerScore", playerScore)
          localStorage.setItem("count", count)
      }
  
    cScore = +localStorage.getItem("computerScore")
    pScore = +localStorage.getItem("playerScore")
    times = +localStorage.getItem("count")
  
      if (player1 === computer1){
          console.log("It is a tie, Let's play again!")
      }
      else if(player1 === "rock"){
          if(computer1 === "scissors") {
              
            pScore += 1;
            localStorage.setItem("playerScore", pScore)
            console.log("You win! Rock beats Scissors")
          }
          else {
              
            cScore += 1;
            localStorage.setItem("computerScore", cScore)
            console.log("You lose! Paper beats Rock")
          }
      }
      else if(player1 === "scissors") {
          if(computer1 === "paper") {
              
            pScore += 1;
            localStorage.setItem("playerScore", pScore)
            console.log("You win! Scissors beats Paper")
          }
          else {
  
            cScore += 1;
            localStorage.setItem("computerScore", cScore)
            console.log("You lose! Rock beats Scissors")
          }
      }
      else if(player1 === "paper") {
          if(computer1 === "rock") {
              
            pScore += 1;
            localStorage.setItem("playerScore", pScore)
            console.log("You win! Paper beats Rock")
          }
          else{
              
            computerScore += 1;
            localStorage.setItem("computerScore", computerScore);
            console.log("You lose! Scissors beats Paper");
          }
      }
      times += 1;
      localStorage.setItem("count", times)
      console.log("****************************")
      console.log("You play " + times + " round out of 5 rounds")
      console.log("****************************")
      console.log(`Computer has ${cScore}. You have ${pScore}`)
      console.log("****************************")
      return times
  }
  
  const player = playerSelection();
  const computer = getComputerChoice();
  playRound(player, computer);

  function game(){

	if(times >= 5){
		localStorage.clear();
        console.log("<<<< GAME OVER >>>>")
        console.log("******************")
		if(cScore == pScore ){
			console.log("It is a tie!!! Let's play again!!!");
		}
		else if(cScore > pScore){
			console.log("Computer outsmart you Human, you have to try harder!!");
		} else {
			console.log("You showed the computer that you are the boss!!!");
		}
	}
}

game()
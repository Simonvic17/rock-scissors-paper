function playerSelection() {
	let userInput = prompt("Write your choice between Rock, Paper and Scissors");
	let user = userInput.toLowerCase();
		console.log("You choose: " + user);
		return user		
}


function getComputerChoice() {
	var choice = ["rock", "paper", "scissors"];
	let word = choice[Math.floor(Math.random()*choice.length)];
	console.log ("Computer chooses: " + word)
	return word;
}
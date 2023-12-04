function getComputerChoice() {
	let randomChoice = Math.floor(Math.random() * 3)
	switch (randomChoice) {
		case 0:
			return 'ROCK'
			break
		case 1:
			return 'PAPER'
			break
		case 2:
			return 'SCISSORS'
			break
	}
}

function game() {
	let playerScore = 0
	let computerScore = 0
	let roundWinner = ''
	for (let i = 1; i <= 5; i++) {
		let computerSelection = getComputerChoice()
		let playerSelection = prompt(
			'Choose your weapon:(Rock, Paper or Scissors)'
		).toUpperCase()
		function playRound(playerSelection, computerSelection) {
			if (playerSelection === computerSelection) {
				roundWinner = 'tie'
			} else if (
				(playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
				(playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
				(playerSelection === 'SCISSORS' && computerSelection === 'PAPER')
			) {
				playerScore++
				roundWinner = 'player'
				alert(`You win! ${playerSelection} beats ${computerSelection}`)
			} else if (
				(computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
				(computerSelection === 'PAPER' && playerSelection === 'ROCK') ||
				(computerSelection === 'SCISSORS' && playerSelection === 'PAPER')
			) {
				computerScore++
				roundWinner = 'computer'
				alert(`You lose! ${computerSelection} beats ${playerSelection}`)
			}
		}
		playRound(playerSelection, computerSelection)
		alert(
			`Round winner: ${roundWinner} \nYour score: ${playerScore} Computer score: ${computerScore}`
		)
	}
	if (playerScore > computerScore) {
		alert('You win the game!')
	} else if (playerScore < computerScore) {
		alert('You lose the game!')
	} else if ((playerScore = computerScore)) {
		alert('the game is a tie!')
	}
}

game()

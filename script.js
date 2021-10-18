let plays = Array("rock", "paper", "scissors")

function computerPlay() {
    return plays[Math.floor(Math.random()*plays.length)]
}

function selectObject() {

}

function playRound(player, computer) {
    if (player === computer) {
        return "It's a tie."
    }
    if (player === "rock") {
        if (computer === "paper") {
            return "You Lose! Paper beats Rock"
        } else if (computer === "scissors") {
            return "You Win! Rock beats Scissors"
    }
    }

    if (player === "paper") {
        if (computer === "rock") {
            return "You Win! Paper beats Rock"
        } else if (computer === "scissors") {
            return "You Lose! Scissors beats Paper"
        }
    }

    if (player === "scissors") {
        if (computer === "rock") {
            return "You Lose! Rock beats Scissors"
        } else if (computer === "paper") {
            return "You Win! Scissors beats Paper"
        }
    }
}

function testRound() {
    const playerSelection = "rock";
    const computerSelection = computerPlay();

    console.log(playRound(playerSelection, computerSelection))
}

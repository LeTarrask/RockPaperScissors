let plays = Array("rock", "paper", "scissors")

function computerPlay() {
    return plays[Math.floor(Math.random()*plays.length)]
}

function selectObject() {

}

function playRound() {
    const player = document.getElementById("playerChoice").value.toLowerCase();

    const computer = computerPlay();

    result.innerHTML = ""

    console.log("Player chose: " + player + " --- Computer chose " + computer)

    if (player === computer) {
        result.innerHTML = "It's a tie."
    }

    if (player === "rock") {
        if (computer === "paper") {
            result.innerHTML =  "You Lose! Paper beats Rock"
        } else if (computer === "scissors") {
            result.innerHTML =  "You Win! Rock beats Scissors"
    }
    }

    if (player === "paper") {
        if (computer === "rock") {
            result.innerHTML =  "You Win! Paper beats Rock"
        } else if (computer === "scissors") {
            result.innerHTML =  "You Lose! Scissors beats Paper"
        }
    }

    if (player === "scissors") {
        if (computer === "rock") {
            result.innerHTML =  "You Lose! Rock beats Scissors"
        } else if (computer === "paper") {
            result.innerHTML =  "You Win! Scissors beats Paper"
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        testRound()
    }
}
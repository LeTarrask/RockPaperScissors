let plays = Array("rock", "paper", "scissors")

function computerPlay() {
    return plays[Math.floor(Math.random()*plays.length)]
}
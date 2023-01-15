console.log("VSC")
const game = document.getElementById("game")
const scoreDisplay = document.getElementById("score")
const exDisplay = document.getElementById("ex")
const playerInput = document.getElementById("result")

let score = 0
let a, b
let difficulty = 10

// Functie care porneste un joc nou \\

function newGame(level) {
    score = 0
    difficulty = level
    newEx(difficulty)
    scoreDisplay.textContent = score 
    exDisplay.textContent = newEx(difficulty)
}

function newEx(difficulty) {
    a = Math.floor(Math.random() * difficulty)
    b = Math.floor(Math.random() * difficulty)

    exDisplay.style.color = "gold"

    return a + " + " + b
}

function verification() {
    if (playerInput.value == a + b) {
        score++

        scoreDisplay.textContent = score
        exDisplay.textContent = newEx(difficulty)
        playerInput.value = ""
    } else {
        exDisplay.style.color = "red"
    }
}

playerInput.addEventListener("input", verification)
newGame(difficulty)
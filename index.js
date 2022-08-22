// Create variables for the game state
let player1Score = 0
let player2Score = 0
let players = [player1Score, player2Score]
let player1Turn = true

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const dicesArr = ["", "dices1.png", "dices2.png", "dices3.png", "dices4.png", "dices5.png", "dices6.png"]




function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
    
}

/* Hook up a click event listener to the Roll Dice Button. */
 rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    dicesArr[randomNumber]
    
    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.innerHTML = `<img class="dices-images" src="dices/${dicesArr[randomNumber]}">`
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.innerHTML = `<img class="dices-images" src="dices/${dicesArr[randomNumber]}">`
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
        
    }
    
    if (player1Score >= 20) {
        message.textContent = "Player One Wins 🏅"
        message.classList.add("wins")
        showResetButton()
    }  else if (player2Score >= 20) {
        message.textContent = "Player Two Wins 🏅"
        message.classList.add("wins")
        showResetButton()
    }
    player1Turn = !player1Turn
})
 
resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Player 1 Turn"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
    message.classList.remove("wins")
}


    
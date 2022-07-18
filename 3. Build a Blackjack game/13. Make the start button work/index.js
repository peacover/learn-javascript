let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEL = document.getElementById("message-el")
// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.
function startGame()
{
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    messageEL.textContent = message
}
// console.log(message)

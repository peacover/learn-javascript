// 1. Create two variables, firstCard and secondCard.
let max = 11
let min = 2
let firstCard = Math.floor(Math.random() * (max - min + 1)) + min
let secondCard = Math.floor(Math.random() * (max - min + 1)) + min
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
sum = firstCard + secondCard
console.log(sum)
if (sum < 21)
    console.log("Do you want to draw a new card? ")
else if (sum === 21)
    console.log("Wohoo! you've got blackjack!")
else
    console.log("You're out of the game!")

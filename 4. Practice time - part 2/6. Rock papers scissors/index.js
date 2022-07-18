let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function randomItem()
{
    let randIndex = Math.floor(Math.random() * 3)
    return hands[randIndex]
}
console.log(randomItem())
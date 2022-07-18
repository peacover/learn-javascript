// document.getElementById("count-el").innerText = 5
// console.log(4 + 5) // 9
// console.log("2" + "4") // 24
// console.log("5" + 1) // 51
// console.log(100 + "100") // 100100

let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let b = true
function increment()
{
    count++
    // countEl.innerText = count
    countEl.textContent = count
}
function save()
{
    if (b)
    {
        // saveEl.innerText += count
        saveEl.textContent += count
        b = false
    }
    else
        saveEl.textContent += " - " + count
        // saveEl.innerText += " - " + count
    countEl.textContent = 0
    count = 0 
}

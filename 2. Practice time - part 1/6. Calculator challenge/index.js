let num1 = 8
let num2 = 2
let result
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
sumEL = document.getElementById("sum-el")
// Create four functions: add(), subtract(), divide(), multiply()
function add()
{
    result = num1 + num2
    sumEL.textContent = "Sum: " + result 
}
function subtract()
{
    result = num1 - num2
    sumEL.textContent = "Sum: " + result 
}
function divide()
{
    result = num1 / num2
    sumEL.textContent = "Sum: " + result
}
function multiply()
{
    result = num1 * num2
    sumEL.textContent = "Sum: " + result
}
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"



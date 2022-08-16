//template literals are a new way to write strings in javascript,
//  instead of using double or single quotes, you can use backticks (`)

/////////// old way //////////////
const name = 'Max';
const age = 30;
console.log("My name is " + name + " and I am " + age + " years old.");

/////////// template literals //////////////
console.log(`My name is ${name} and I am ${age} years old.`);
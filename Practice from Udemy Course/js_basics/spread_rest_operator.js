let hobbies = ['Sports', 'Cooking'];
// console.log(hobbies);
let copiedArray = hobbies.slice();
const person = {
    name: 'Max',
    age: 30,
    greet(){
        console.log('Hi, I am ' + this.name);
    }
};
// let test = hobbies.slice(); //copy the array
let copiedPerson = {
    age: 99,
    test: "test",
    hello : "hello",
};
// SPREAD operator // copy one by one the elements of the array
copiedPerson = {...person}; 
console.log(copiedPerson);
// REST operator //merge multiple elements into one array 
const toArray = (...args) => {
    return args;
}
console.log(toArray(1,2,3,4,5));

const toArray2 = (args) => {
    return args;
}
console.log(toArray2([1,2,3,4,5]));

const name = "Max"
let age = 29
const hasHobbies = true


//////////////////////// ARROW FUNCTIONS //////////////////////////

// function summarizeUser(userName, userAge, userHashobby)
// {
//     return (
//         "Name is " + userName +
//         ", age is " + userAge + 
//         " and the user has hobbies: " + userHashobby
//     )
// }
// const summarizeUser = function(userName, userAge, userHashobby)
// {
//     return (
//         "Name is " + userName +
//         ", age is " + userAge + 
//         " and the user has hobbies: " + userHashobby
//     )
// }

const summarizeUser = (userName, userAge, userHashobby) =>
{
    return (
        "Name is " + userName +
        ", age is " + userAge + 
        " and the user has hobbies: " + userHashobby
    )
}

// const add = (a, b) =>
// {
//     return (a + b)
// }
const add = (a, b) => a + b
const addOne = a => a + 1
const addRandom = () => 1 + 2

// console.log(summarizeUser(name, age, hasHobbies))
// console.log(add(2,8))
// console.log(addRandom())

///////////////////////// OBJECTS ////////////////////

// const person = {
//     name: 'Max',
//     age: 29,
//     great: () => {
//         console.log('Hi, I am ' + this.name)
//     }
// }

// const person = {
//     name: 'Max',
//     age: 29,
//     great: function(){
//         console.log('Hi, I am ' + this.name)
//     }
// }

const person = {
    name: 'Max',
    age: 29,
    great(){
        console.log('Hi, I am ' + this.name)
    }
}
// person.great()


////////////////////// ARRAYS ////////////////////

const hobbies = ['Sports', 'Cooking', 'Driving', 'Traveling']

for (let hobby of hobbies){
    console.log(hobby)
}
const obj_hobbies = hobbies.map(hob => {
    return 'Hobby: ' + hob
})
const obj_hobbies2 = hobbies.map(hob => 'Hobby2: ' + hob)
console.log(obj_hobbies2)
// console.log(hobbies.map(hob => {
//     return 'Hobby: ' + hob
// }))

// console.log(hobbies.map(hob => 'Hobby: ' + hob))
// console.log(obj_hobbies)
obj_hobbies.push('test')
hobbies.push('tttttttt')
// console.log(obj_hobbies)

// console.log(hobbies)
const v = ["9", true, 33]
// v = ["tt", 44] // error you can't reassign const array/abject/function/RegExp !!!!
const copy_array = hobbies.slice(0, 3)
const cpy = [...hobbies, true, "hello world"]
// const copy_array = hobbies.slice() // copy of all array
console.log(cpy)

let a = {
    name : 'max',
    func : () => {
        console.log("test")
    },
    age : 94
}

class d {
    name = 'max';
    func = () => {
        console.log("test")
    };
    age = 94
}
let b = {
    name : 'sickl',
    func : () => {
        console.log("test")
    },
    age : 8,
    hobby : 'animal'
}

let array = ["hello", ...hobbies, "test"] 

console.log(array)
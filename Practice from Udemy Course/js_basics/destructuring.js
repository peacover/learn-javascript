const person = {
    name: 'Max',
    age: 30,
    greet(){
        console.log('Hi, I am ' + this.name);
    }
};

const printName1 = (personData) => {
    console.log(personData.name);
}
const printName2 = ({name}) => {
    console.log(name);
}

// const printName2 = ({name, age}) => {
//     console.log(name, age);
// }

printName1(person);
printName2(person);

const {name, age}  = person;
console.log(name, age);

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies; // in array destructuring we can choose any name we want (hobby1, hobby2) unlike in object destructuring !!
console.log(hobby1, hobby2);

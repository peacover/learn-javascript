// Create a person object that contains three keys: name, age, and county.
let person = {
    name : "youssef",
    age : 24,
    country : "morocco",
    logData : function()
    {
        return (this.name + " is " + this.age + " years old and lives in " + this.country)
        // return ret
    }
}
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

console.log(person.logData())
// Call the logData() function to verify that it works
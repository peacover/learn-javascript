//Modules

//Packages
const express = require('express');

const app = express();


app.use('/user-product', (req, res, next) => {
    res.send('<h1> "user-product" page </h1>');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Main page</h1>');
});

// app.use((req, res, next) => {
//     console.log('in the middleware!');
//     next(); // allows the request to continue to the next middleware
// });

// app.use((req, res, next) =>{
//     console.log('in another middleware!');
//     res.send('<h1>Hello World</h1>');
// });


app.listen(3000);
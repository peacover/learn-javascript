const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// app.use('/users', (req, res, next) => {
//     res.send("<h1> Users page </h1>");
// });

// app.use('/', (req, res, next) => {
//     res.send("<h1> Main page </h1>");
// });

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({extended: true}));

app.use('/add-product', (req, res, next) => {
    res.send('<form action="product" method="POST"> <input name="title" type="text"> <button type="submit">Add Product</form>');
});

app.post('/product', (req, res, next) => {
    // res.send('<h1> product page<h1/>');
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1> main page<h1/>');
});

app.listen(3000);
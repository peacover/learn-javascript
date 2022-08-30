const express = require('express');
app = express();

app.use('/users', (req, res, next) => {
    res.send("<h1> Users page </h1>");
});

app.use('/', (req, res, next) => {
    res.send("<h1> Main page </h1>");
});

app.listen(3000);

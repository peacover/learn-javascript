const path = require('path');
const express = require('express');
const router = express.Router();

const rootDir = require('../utils/path');

router.get('/', (req, res, next) => {
    // res.send('<h1> main page<h1/>');
    //path.join() join path both in linux and mac  
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    // res.sendFile("/mnt/c/Users/Youssef Er-raki/Desktop/1337_project/learn-javascript/Practice from Udemy Course/expressjs_basics/using_router/views/shop.html")
});

module.exports = router;
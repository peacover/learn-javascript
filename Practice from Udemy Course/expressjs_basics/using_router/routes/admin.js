const path = require('path');
const express = require('express');

const router = express.Router();

const rootDir = require('../utils/path');

router.get('/add-product', (req, res, next) => {
    // res.send('<form action="product" method="POST"> <input name="title" type="text"> <button type="submit">Add Product</form>');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
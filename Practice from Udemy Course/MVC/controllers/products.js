const path = require('path');
const rootDir = require('../util/path');
const products = [];

exports.getAddProducts = ((req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

exports.postAddProducts = ('/add-product', (req, res, next) => {
    console.log(req.body);
    products.push({ title: req.body.title });
    res.redirect('/');
});

exports.getProduct = ((req, res, next) => {
    console.log('shop : ', products);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});
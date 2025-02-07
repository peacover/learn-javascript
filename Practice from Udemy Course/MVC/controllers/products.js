// const products = [];
const Product = require('../models/product');
const fs = require('fs');
const path = require('path');

exports.getAddProducts = ((req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product Page',
        path: '/admin/add-product'
      });
});

exports.postAddProducts = ('add-product', (req, res, next) => {
    // products.push({ title: req.body.title });
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
});

exports.getProduct = ((req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop', {
            prods: products,
            pageTitle: 'Shop Page',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });
});


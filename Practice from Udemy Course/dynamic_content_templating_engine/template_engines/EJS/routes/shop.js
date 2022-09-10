const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const adminData = require('./admin');

router.get('/', (req, res, next) => {
  const products = adminData.products;
  console.log(products, products.length);
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop Page',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
});

module.exports = router;

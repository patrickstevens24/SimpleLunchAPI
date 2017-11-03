var express = require('express');
var router = express.Router();

var Product = require('../models/menuItem');

Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/restaurant');

module.exports = router;

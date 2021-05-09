const Router = require('express').Router();

const ProductsController = require('./products/controllers.js');

Router.use('/products', ProductsController);

module.exports = Router;
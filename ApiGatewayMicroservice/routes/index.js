const Router = require('express').Router();

const VirtualShopRoute = require('./virtual-shop.js');

Router.use('/virtual-shop', VirtualShopRoute);

module.exports = Router;

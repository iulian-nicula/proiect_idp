const Router = require('express').Router();

const {
    getProductById,
    getProducts,
    addProduct
} = require('./services.js');

Router.get('/', async (req, res) => {
    
    const products = await getProducts();

    res.json(products);
});

Router.get('/:id', async (req, res) => {

    const {
        id
    } = req.params;

    const product = await getProductById(id);

    res.json(product);
});

Router.post('/', async (req, res) => {

    const {
        name,
        category,
        price
    } = req.body;

    const id = await addProduct(name, category, price);

    res.json(id);
});

module.exports = Router;

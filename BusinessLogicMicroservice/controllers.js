const Router = require('express').Router();

const {
    ServerError
} = require('./errors');

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

    if (!name) {
        throw new ServerError('No name provided!', 400);
    }

    if (!category) {
        throw new ServerError('No category provided!', 400);
    }

    if (!price) {
        throw new ServerError('No price provided!', 400);
    }

    const id = await addProduct(name, category, price);

    res.json(id);
});

module.exports = Router;
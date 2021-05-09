const Router = require('express').Router();

const {
    getProductById,
    getProductss,
    addProduct
} = require('./services.js');

Router.get('/', async (req, res) => {
    
    const products = await getBooks();

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

    const id = await addProcut(title, author, genre);

    res.json(id);
});

module.exports = Router;
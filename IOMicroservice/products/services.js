const {
    query
} = require('../data');

const getProducts = async () => {
    console.info(`Getting all products ...`);

    const products = await query("SELECT id, title FROM virtual_shop");

    return products;
};

const getProductById = async (id) => {
    console.info(`Getting product ${id} ...`);

    const products = await query("SELECT name, category, price FROM virtual_shop WHERE id = $1", [id]);

    return products[0];
};

const addProduct = async (name, category, price) => {
    console.info(`Adding product with name ${name}, category ${category} and price ${price} ...`);

    const products = await query("INSERT INTO virtual_shop (name, category, price) VALUES ($1, $2, $3) RETURNING id", [name, category, price]);

    return products[0].id;
};  

module.exports = {
    getProducts,
    getProductById,
    addProduct
}
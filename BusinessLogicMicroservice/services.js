const {
    sendRequest
} = require('./http-client');

const getProducts = async () => {
    console.info(`Sending request to IO for all products ...`);
    
    const options = {
        url: `http://${process.env.IO_SERVICE_API_ROUTE}/products`
    }

    const products = await sendRequest(options);

    return products;
};

const getProductById = async (id) => {
    console.info(`Sending request to IO for product ${id} ...`);

    const options = {
        url: `http://${process.env.IO_SERVICE_API_ROUTE}/products/${id}`
    }

    const product = await sendRequest(options);

    return product;
};

const addProduct = async (name, category, price) => {
    console.info(`Sending request to IO to add product with name ${name}, category ${category} and price ${price} ...`);

    const options = {
        url: `http://${process.env.IO_SERVICE_API_ROUTE}/products`,
        method: 'POST',
        data: {
            name,
            category,
            price
        }
    }

    const id = await sendRequest(options);

    return id;
};  

module.exports = {
    getProducts,
    getProductById,
    addProduct
}

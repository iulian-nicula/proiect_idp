const Router = require("express").Router();

const { sendRequest } = require("../http-client");

Router.get("/", async (req, res) => {
  console.info(`Forwarding request for get virtual-shop ...`);

  const getVirtualShopRequest = {
    url: `http://${process.env.BUSINESS_LOGIC_SERVICE_API_ROUTE}`,
  };

  const virtual_shop = await sendRequest(getVirtualShopRequest);

  res.json(virtual_shop);
});

Router.get("/:id", async (req, res) => {
  const { id } = req.params;

  console.info(`Forwarding request for get product ${id} ...`);

  const getProductIdRequest = {
    url: `http://${process.env.BUSINESS_LOGIC_SERVICE_API_ROUTE}/${id}`,
  };

  const virtual_shop = await sendRequest(getProductIdRequest);

  res.json(virtual_shop);
});

Router.post("/", async (req, res) => {
  const { name, category, price } = req.body;

  const postProductRequest = {
    url: `http://${process.env.BUSINESS_LOGIC_SERVICE_API_ROUTE}`,
    method: "POST",
    data: {
      name,
      category,
      price,
    },
  };

  const id = await sendRequest(postProductRequest);

  res.json({ id });
});

module.exports = Router;

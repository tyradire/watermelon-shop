const productRouter = require('express').Router();
const {
  createProduct,
} = require('../controllers/products');

productRouter.post('/', createProduct);

module.exports = productRouter;
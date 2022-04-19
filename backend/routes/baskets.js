const basketRouter = require('express').Router();
const {
  addBasketProduct, getBasketProducts, deleteBasketProduct
} = require('../controllers/baskets');

basketRouter.post('/', addBasketProduct);
basketRouter.get('/', getBasketProducts);
basketRouter.delete('/', deleteBasketProduct);

module.exports = basketRouter;
const basketRouter = require('express').Router();
const {
  addBasketProduct, getBasketProducts
} = require('../controllers/baskets');

basketRouter.post('/', addBasketProduct);
basketRouter.get('/', getBasketProducts);

module.exports = basketRouter;
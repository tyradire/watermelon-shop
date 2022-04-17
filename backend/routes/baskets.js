const basketRouter = require('express').Router();
const {
  addBasketProduct
} = require('../controllers/baskets');

basketRouter.post('/', addBasketProduct);

module.exports = basketRouter;
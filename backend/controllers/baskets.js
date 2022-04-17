const { BasketProduct } = require('../models/models');

const addBasketProduct = (req, res, next) => {
  const id = req.params.id;
  console.log('111 ', id, req.user.id)
  BasketProduct.create({productId: id, userId: req.user.id})
  .then((product) => res.status(200).send({product}))
  .catch(next);
}

module.exports = {
  addBasketProduct,
};
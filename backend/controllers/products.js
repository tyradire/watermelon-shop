const uuid = require('uuid');
const path = require('path');
const { Product } = require('../models/models');
const CastError = require('../errors/CastError');

const createProduct = (req, res, next) => {
  const { 
    name, price, vendorId, info 
  } = req.body
  const { img } = req.files
  let fileName = uuid.v4() + '.jpg'
  img.mv(path.resolve(__dirname, '..', 'static', fileName))
  .then((product) => Product.create({
    name, price, vendorId, img: fileName
  }))
  .then((product) => res.status(200).send({product}))
  .catch((err) => {
    if (err.name === 'ValidationError') next(new CastError('Переданы некорректные данные при создании пользователя'));
    next(err);
  })
}

module.exports = {
  createProduct,
};
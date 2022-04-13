const uuid = require('uuid');
const path = require('path');
const { Product } = require('../models/models');
const CastError = require('../errors/CastError');
const NotFoundError = require('../errors/NotFoundError');

const createProduct = (req, res, next) => {
  let { 
    name, info, price, vendorId 
  } = req.body
  const { img } = req.files;
  let fileName = uuid.v4() + '.jpg';
  img.mv(path.resolve(__dirname, '..', 'static', fileName));
  Product.create({name, info, price, vendorId, img: fileName})
  .then((product) => res.status(200).send({product}))
  .catch((err) => {console.log(err)
    if (err.name === 'ValidationError') next(new CastError('Переданы некорректные данные при создании пользователя'));
    next(err);
  })
}

const getProducts = (req, res, next) => {
  const { vendorId } = req.body;
  if (!vendorId) Product.findAll()
  .then((products) => {
    res.status(200).send(products);
  });
  Product.findAll({ 
    where: {
      vendorId: vendorId
    }
  })
  .then((products) => {
    console.log('111 ', products);
    res.status(200).send(products);
  });
}

const getOneProduct = (req, res, next) => {
  const id = req.user.id;
  Product.findOne({
    where: { id }
  })
  .then((product) => {
    if (!product) throw new NotFoundError('Продукт с указанным id не найден')
    res.status(200).send(product)
  })
  .catch(next);
}

module.exports = {
  createProduct, getProducts, getOneProduct,
};
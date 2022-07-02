const uuid = require('uuid');
const path = require('path');
const { Product } = require('../models/models');
const CastError = require('../errors/CastError');
const NotFoundError = require('../errors/NotFoundError');

const createProduct = (req, res, next) => {
  let { 
    name, price, vendorId, info
  } = req.body;
  console.log('DO IMG', req.files)
  ///////////////////////////////
  let fileName; let img;
  if (req.files) {
    img = req.files.img;
    fileName = uuid.v4() + '.jpg';
    img.mv(path.resolve(__dirname, '..', 'static', fileName));
  } else {
    fileName = null;
  }
  //////////////////////////////
  //const img = req.files ? req.files.img : null;
  //const { img } = req.files || null;
  //console.log('POSLE IMG')
  //let fileName = uuid.v4() + '.jpg';
  //img.mv(path.resolve(__dirname, '..', 'static', fileName));
  Product.create({name, price, vendorId, info, img: fileName})
  .then((product) => res.status(200).send(product)) //тут убрала скобки у продакта
  .catch((err) => {console.log(err)
    if (err.name === 'ValidationError') next(new CastError('Переданы некорректные данные при создании пользователя'));
    next(err);
  })
}

const getProducts = (req, res, next) => {
  const vendorId = req.body.id;
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
    res.status(200).send(products);
  });
}

const getOneProduct = (req, res, next) => {
  const id = req.params.id;
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
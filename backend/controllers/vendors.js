const { Vendor } = require('../models/models');
const ConflictError = require('../errors/ConflictError');
const CastError = require('../errors/CastError');

const createVendor = (req, res, next) => {
  const { name } = req.body;
  Vendor.findOne({where: {name} })
    .then((vendorix) => {
      if (vendorix) throw new ConflictError('Производитель уже зарегистрирован');
      return;
    })
    .then((res) => Vendor.create({name}))
    .then((vendor) => res.status(200).send({vendor}))
    .catch((err) => {
      if (err.name === 'ValidationError') next(new CastError('Переданы некорректные данные при создании пользователя'));
      next(err);
    })
}

const getVendors = (req, res, next) => {
  const vendors = Vendor.findAll();
  return res.json(vendors);
}

module.exports = {
  createVendor, getVendors,
};
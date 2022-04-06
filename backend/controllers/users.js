const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Basket } = require('../models/models');
const ConflictError = require('../errors/ConflictError');

const createUser = (req, res, next) => {
  const {
    email, password, role
  } = req.body;
  User.findOne({ 
    where: {
      email
    } 
  })
  .then((user) => {
    if (user) throw new ConflictError('Пользователь с таким email уже существует');
    return bcrypt.hash(password, 10);
  })
  .then((hash) => User.create({
    password: hash, email, role,
  }))
  .then((user) => Basket.create({
    userId: user.id,
  }))
  // .then((user) => res.status(200).send({
  //   email: user.email, role: user.role, id: user.id,
  // })) 
  .catch((err) => {
    next(err);
  });
};

module.exports = {
  createUser,
};
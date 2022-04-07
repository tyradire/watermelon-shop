const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Basket } = require('../models/models');
const ConflictError = require('../errors/ConflictError');
const UnauthorizedError = require('../errors/UnauthorizedError');

const { NODE_ENV, JWT_SECRET } = process.env;

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

const login = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) throw new UnauthorizedError('Невалидные данные');
  User.findOne({
    where: {
      email
    }
  })
    .then(async (user) => {
      console.log('тутова ',user)
      if (!user) throw new UnauthorizedError('Неправильные почта или пароль');
      return { user, matched: await bcrypt.compare(password, user.password) };
    })
    .then(({ user, matched }) => {
      if (!matched) throw new UnauthorizedError('Неправильные почта или пароль');
      const token = jwt.sign(
        { id: user.id },
        NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
      );
      res.status(200).send({ token });
    })
    .catch(next);
};

module.exports = {
  createUser, login,
};
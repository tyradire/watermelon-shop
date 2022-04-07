const userRouter = require('express').Router();
const {
  createUser, login,
} = require('../controllers/users');

userRouter.post('/', createUser);
userRouter.post('/', login);

module.exports = userRouter;
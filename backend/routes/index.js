const appRouter = require('express').Router();

const users = require('./users');
const vendors = require('./vendors');
const products = require('./products');

appRouter.use('/user', users);
appRouter.use('/vendor', vendors);
appRouter.use('/product', products);

module.exports = appRouter;
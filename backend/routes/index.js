const appRouter = require('express').Router();

const userRouter = require('./users');
const vendorRouter = require('./vendors');
const productRouter = require('./products');

appRouter.use(userRouter);
appRouter.use(vendorRouter);
appRouter.use(productRouter);

module.exports = appRouter;
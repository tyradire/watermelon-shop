const appRouter = require('express').Router();
const {
  createVendor, getVendors,
} = require('../controllers/vendors');
const {
  createProduct,
} = require('../controllers/products');

const vendorRouter = require('./vendors');
const productRouter = require('./products');

appRouter.post('/addvendor', createVendor);
appRouter.get('/getvendors', getVendors);
appRouter.post('/addproduct', createProduct);

appRouter.use(vendorRouter);
appRouter.use(productRouter);

module.exports = appRouter;
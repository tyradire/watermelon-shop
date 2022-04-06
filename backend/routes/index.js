const appRouter = require('express').Router();
const {
  createVendor, getVendors,
} = require('../controllers/vendors');
const {
  createProduct, getProducts, getOneProduct
} = require('../controllers/products');
const {
  createUser,
} = require('../controllers/users');

const vendorRouter = require('./vendors');
const productRouter = require('./products');
const userRouter = require('./users');

appRouter.post('/addvendor', createVendor);
appRouter.get('/getvendors', getVendors);
appRouter.post('/addproduct', createProduct);
appRouter.get('/getproducts', getProducts);
appRouter.get('/getone', getOneProduct);
appRouter.post('/signup', createUser);

appRouter.use(userRouter);
appRouter.use(vendorRouter);
appRouter.use(productRouter);

module.exports = appRouter;
const appRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  createVendor, getVendors,
} = require('../controllers/vendors');
const {
  createProduct, getProducts, getOneProduct,
} = require('../controllers/products');
const {
  createUser, login,
} = require('../controllers/users');

const vendorRouter = require('./vendors');
const productRouter = require('./products');
const userRouter = require('./users');

appRouter.post('/addvendor', createVendor);
appRouter.get('/getvendors', getVendors);
appRouter.post('/addproduct', createProduct);
appRouter.get('/getproducts', getProducts);
appRouter.get('/getone', getOneProduct);
appRouter.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(2),
  }),
}), createUser);
appRouter.post('/signin', login);

appRouter.use(userRouter);
appRouter.use(vendorRouter);
appRouter.use(productRouter);

module.exports = appRouter;
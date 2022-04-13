const appRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  createVendor, getVendors,
} = require('../controllers/vendors');
const {
  createProduct, getProducts, getOneProduct,
} = require('../controllers/products');
const {
  createUser, login, getUser,
} = require('../controllers/users');
const {
  verify,
} = require('../middlewares/auth');

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


appRouter.use(verify);
appRouter.get('/users/me', getUser);
appRouter.use(userRouter);
appRouter.use(vendorRouter);
appRouter.use(productRouter);

module.exports = appRouter;
const appRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  createVendor, getVendors,
} = require('../controllers/vendors');
const {
  createProduct, getProducts, getOneProduct,
} = require('../controllers/products');
const {
  addBasketProduct, getBasketProducts, deleteBasketProduct, deleteOnePiece,
} = require('../controllers/baskets');
const {
  createUser, login, getUser,
} = require('../controllers/users');
const {
  verify,
} = require('../middlewares/auth');

const vendorRouter = require('./vendors');
const productRouter = require('./products');
const userRouter = require('./users');
const basketRouter = require('./baskets');

appRouter.post('/addvendor', createVendor);
appRouter.get('/getvendors', getVendors);
appRouter.post('/addproduct', createProduct);
appRouter.get('/getproducts', getProducts);
appRouter.get('/getone/:id', getOneProduct);
appRouter.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(2),
  }),
}), createUser);
appRouter.post('/signin', login);

appRouter.use(verify);
appRouter.get('/users/me', getUser);
appRouter.post('/addtobasket/:id', addBasketProduct);
appRouter.get('/getbasketproducts', getBasketProducts);
appRouter.delete('/deletebasketproduct/:id', deleteBasketProduct);
appRouter.delete('/deleteonepiece/:id', deleteOnePiece);
appRouter.use(userRouter);
appRouter.use(vendorRouter);
appRouter.use(productRouter);
appRouter.use(basketRouter);

module.exports = appRouter;
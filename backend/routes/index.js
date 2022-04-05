const appRouter = require('express').Router();
const {
  createVendor, getVendors,
} = require('../controllers/vendors');

const vendorRouter = require('./vendors');

appRouter.post('/addvendor', createVendor);
appRouter.get('/getvendors', getVendors);

appRouter.use(vendorRouter);

module.exports = appRouter;
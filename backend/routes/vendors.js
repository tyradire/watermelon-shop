const vendorRouter = require('express').Router();
const {
  createVendor, getVendors, deleteVendor,
} = require('../controllers/vendors');

vendorRouter.post('/', createVendor);
vendorRouter.get('/', getVendors);
vendorRouter.delete('/', deleteVendor);

module.exports = vendorRouter;
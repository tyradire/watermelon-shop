import { makeAutoObservable } from 'mobx';

export default class ProductStore {
  constructor() {
    this._vendors = {};
    this._products = []
    this._selectedVendor = {}
    makeAutoObservable(this)
  }

  setVendors(vendors) {
    vendors.forEach(vendor => {this._vendors[vendor.id] = vendor.name});
  }

  setProducts(products) {
    this._products = products;
  }

  setSelectedVendor(vendor) {
    this._selectedVendor = vendor;
  }

  get vendors() {
    return this._vendors;
  }

  get products() {
    return this._products;
  }

  get selectedVendor() {
    return this._selectedVendor;
  }
}
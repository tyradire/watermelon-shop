import { makeAutoObservable } from 'mobx';

export default class ProductStore {
  constructor() {
    this._vendors = []
    this._products = []
    this._selectedVendor = {}
    makeAutoObservable(this)
  }

  setVendors(vendors) {
    this._vendors = vendors;
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
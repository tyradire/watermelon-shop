import { makeAutoObservable } from 'mobx';

export default class ProductStore {
  constructor() {
    this._vendors = {}
    this._products = []
    //this._basket = [{name: 'aaaaaa', price: 133}]
    this._basket = []
    this._selectedVendor = {}
    makeAutoObservable(this)
  }

  setVendors(vendors) {
    vendors.forEach(vendor => {this._vendors[vendor.id] = vendor.name});
  }

  setProducts(products) {
    this._products = products;
  }

  setBasket(basket) {
    this._basket = basket;
  }

  setSelectedVendor(vendor) {
    this._selectedVendor = vendor;
  }

  addProductToBasket(product) {
    this._basket.push(product);
  }

  get vendors() {
    return this._vendors;
  }

  get products() {
    return this._products;
  }

  get basket() {
    return this._basket;
  }

  get selectedVendor() {
    return this._selectedVendor;
  }
}
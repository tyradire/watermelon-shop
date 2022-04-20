import { makeAutoObservable } from 'mobx';

export default class ProductStore {
  constructor() {
    this._vendors = {}
    this._products = []
    //this._basket = [{name: 'aaaaaa', price: 133}]
    this._basket = {}
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
    let obj = {};
    basket.forEach(item => {
      if (!obj[item.product.id]) {
        obj[item.product.id] = { name: item.product.name, price: item.product.price, img: item.product.img, key:item.id, quantity: 1, productId: item.product.id };
      } else {
        obj[item.product.id].quantity = obj[item.product.id].quantity + 1;
      }
      this._basket = obj;
    })
  }

  setSelectedVendor(vendor) {
    this._selectedVendor = vendor;
  }

  deleteProductPiece(id) {
    this._basket[id].quantity -= 1;
  }

  addProductToBasket(newProduct) {
    const key = Object.keys(newProduct)[0];
    if (!this._basket[key]) {
      this._basket[key] = newProduct[key];
    } else {
      this._basket[key].quantity = this._basket[key].quantity + 1;
    }
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
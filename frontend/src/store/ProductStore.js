import { makeAutoObservable } from 'mobx';

export default class ProductStore {
  constructor() {
    this._vendor = [
      {id: 1, name: 'Арбузиксикс'},
      {id: 2, name: 'Арбузиксиксикс'}
    ]
    this._products = [
      {id: 1, name: 'Квадратный арбуз', price: 500, rating: 5, img: "https://i0.wp.com/sadovodu.com/wp-content/uploads/2017/10/kvadratnyy_arbuz_12_26083819.png"},
      {id: 2, name: 'Квадратный арбуз 2', price: 500, rating: 5, img: "https://i0.wp.com/sadovodu.com/wp-content/uploads/2017/10/kvadratnyy_arbuz_12_26083819.png"},
      {id: 3, name: 'Квадратный арбуз 3', price: 500, rating: 5, img: "https://i0.wp.com/sadovodu.com/wp-content/uploads/2017/10/kvadratnyy_arbuz_12_26083819.png"},
      {id: 4, name: 'Квадратный арбуз 4', price: 500, rating: 5, img: "https://i0.wp.com/sadovodu.com/wp-content/uploads/2017/10/kvadratnyy_arbuz_12_26083819.png"},
      {id: 5, name: 'Квадратный арбуз 5', price: 500, rating: 5, img: "https://i0.wp.com/sadovodu.com/wp-content/uploads/2017/10/kvadratnyy_arbuz_12_26083819.png"},
    ]
    makeAutoObservable(this)
  }

  setVendor(vendors) {
    this._vendors = vendors;
  }

  setProducts(products) {
    this._products = products;
  }

  get vendors() {
    return this._vendors;
  }

  get products() {
    return this._products;
  }
}
import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS, CAR_ITEMS } from './mock-products';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return PRODUCTS;
  }

  getCarList(): Product[] {
    return CAR_ITEMS;
  }

  addCar(product: Product) {
    CAR_ITEMS.push(product);
    return product;
  }

}

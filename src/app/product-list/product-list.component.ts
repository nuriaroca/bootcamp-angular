import {Component, OnInit, Input} from '@angular/core';
import {PRODUCTS} from '../mock-products';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[];

  gridView = false;

  constructor(private productService: ProductService) {

  }

  getProducts(): void {
    this.products = this.productService.getProducts();
  }

  ngOnInit(): void {
    this.getProducts();
  }
}

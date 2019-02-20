import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  selectedProduct: Product;

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  getSelectedProduct(): Observable<Product> {
    return of(this.selectedProduct);
  }

  setSelectedProduct(product: Product) {
    this.selectedProduct = product;
  }

  constructor(private http: HttpClient) { }
}

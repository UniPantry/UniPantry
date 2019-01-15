import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-logged-in-landing',
  templateUrl: './logged-in-landing.component.html',
  styleUrls: ['./logged-in-landing.component.css', '../logged-in-card-carousel/logged-in-card-carousel.component.css']
})
export class LoggedInLandingComponent implements OnInit {

  selectedProduct: Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  getSelectedProduct() {
    this.productService.getSelectedProduct()
        .subscribe(product => this.selectedProduct = product);
    return this.selectedProduct;
  }

}

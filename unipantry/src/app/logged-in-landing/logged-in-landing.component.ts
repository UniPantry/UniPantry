import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-logged-in-landing',
  templateUrl: './logged-in-landing.component.html',
  styleUrls: ['./logged-in-landing.component.css', '../logged-in-card-carousel/logged-in-card-carousel.component.css']
})
export class LoggedInLandingComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  getSelectedProduct() {
    return this.productService.getSelectedProduct();
  }

}

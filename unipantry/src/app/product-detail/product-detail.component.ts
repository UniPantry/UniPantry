import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;

  quantity = 1;

  constructor() { }

  ngOnInit() {
    this.clearQuantity(this.quantity);
  }

  increaseQuantity() {
    this.quantity += 1;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity -= 1;
    }
  }

  clearQuantity(quantity: number) {
    $(document).ready(function () {
      console.log(1);
      $('#detailModal').on('hide.bs.modal', function (e) {
        console.log(quantity);
        quantity = 1;
        console.log(quantity);
      });
    });
  }
}

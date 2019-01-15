import { Component, OnChanges, Input } from '@angular/core';
import { Product } from '../../product';
import { CartComponent } from '../cart.component';

@Component({
  selector: 'app-cart-product-modal',
  templateUrl: './cart-product-modal.component.html',
  styleUrls: ['./cart-product-modal.component.css']
})
export class CartProductModalComponent implements OnChanges {

  @Input() product: Product;

  constructor(private cart: CartComponent) { }

  ngOnChanges() {
    this.resetQuantity();
  }

  addToCart() {
    const quantity = parseInt((document.getElementById('quantity') as any).value, 10);
    this.cart.addToCart(this.product, quantity);
  }

  increaseQuantity() {
    const newQuantity = parseInt((document.getElementById('quantity') as any).value, 10) + 1;
    if (newQuantity <= 20) {
      (document.getElementById('quantity') as any).value = newQuantity;
    }
  }

  decreaseQuantity() {
    const newQuantity = parseInt((document.getElementById('quantity') as any).value, 10) - 1;
    if (newQuantity > 0) {
      (document.getElementById('quantity') as any).value = newQuantity;
    }
  }

  resetQuantity() {
    $(document).on('hidden.bs.modal', '#cartModal', function () {
      const newQuantity = <number>1;
      (document.getElementById('quantity') as any).value = newQuantity;
    });
  }
}

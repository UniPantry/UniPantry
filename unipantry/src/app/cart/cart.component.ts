import { Component, OnInit, AfterViewInit, OnChanges } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, AfterViewInit, OnChanges {

  cart: Product[] = [];

  productDict = {};

  cartQuantity = 0;

  total: number;

  giftCredit: number;

  subtotal: number;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = [];
    this.getCart();
  }

  ngAfterViewInit() {
    this.setQuantities(-1);
  }

  ngOnChanges() {
    this.getCart();
  }

  getCart() {
    this.cartService.getCart()
      .subscribe(cart => {
        this.cart = cart['cart'];
        this.productDict = cart['dict'];
        this.cartQuantity = cart['quantity'];
        this.total = cart['total'];
        this.giftCredit = cart['credit'];
        this.subtotal = cart['subtotal'];
      });
  }

  removeFromCart(product: Product, quantity: number) {
    this.cartService.removeFromCart(product, quantity);
    this.getCart();
    const index = this.cart.indexOf(product);
    if (index !== -1) {
      this.setQuantities(index);
    }
  }

  removeAll(product: Product) {
    this.cartService.removeAll(product);
    this.getCart();
  }

  addToCart(product: Product, quantity: number) {
    this.cartService.addToCart(product, quantity);
    console.log(this.cart);
    if (!this.cart.includes(product)) {
      this.getCart();
      this.setQuantities(-1);
    } else {
      this.getCart();
      this.setQuantities(this.cart.indexOf(product));
    }
  }

  updateQuantity(product: Product) {
    const index = this.cart.indexOf(product);
    const newQuantity = (document.querySelectorAll('.quantity')[index] as any).value;
    const difference = newQuantity - this.productDict[product.name];
    if (difference === 0) {
      return;
    } else if (difference > 0) {
      this.addToCart(product, difference);
    } else {
      this.removeFromCart(product, -difference);
    }
  }

  setQuantities(index: number) {
    (document.getElementById('cart-quantity') as any).textContent = this.cartQuantity;
    if (index !== -1) {
      const query = document.querySelectorAll('.quantity');
      (query[index] as any).value = this.productDict[this.cart[index].name];
    }
  }
}

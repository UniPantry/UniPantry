import { Component, AfterViewInit, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements AfterViewInit, OnInit {

  cart: Product[] = [];

  productDict = {};

  cartQuantity = 0;

  total = 0;

  giftCredit: number;

  giftCreditUsed = false;

  subtotal = 0;

  totalRemaining = 30;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getCart();
  }

  ngAfterViewInit() {
    this.setQuantities(-1, this.cart, this.productDict);
    let i: number;
    for (i = 0; i < this.cart.length; i++) {
      this.setQuantities(i, this.cart, this.productDict);
    }
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
    if (this.giftCredit > this.total) {
      this.giftCredit = this.total;
    }
    this.totalRemaining = 30 - this.total;
  }

  removeFromCart(product: Product, quantity: number) {
    if (quantity >= this.productDict[product.name]) {
      this.removeAll(product);
      return;
    }
    this.cartService.removeFromCart(product, quantity);
    this.getCart();
    const index = this.cart.indexOf(product);
    if (index !== -1) {
      this.setQuantities(index, this.cart, this.productDict);
    }
  }

  removeAll(product: Product) {
    this.cartService.removeAll(product);
    this.getCart();
    this.setQuantities(-1, this.cart, this.productDict);
  }

  useGiftCredit() {
    this.giftCreditUsed = true;
  }

  addToCart(product: Product, quantity: number) {
    this.cartService.addToCart(product, quantity);
    this.getCart();
    this.setQuantities(this.cart.indexOf(product), this.cart, this.productDict);
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

  setQuantities(index: number, cart: Product[], productDict: {}) {
    (document.getElementById('cart-quantity') as any).textContent = this.cartQuantity;
    if (index !== -1) {
      const checkExist = setInterval(function () {
        if (document.querySelectorAll('.quantity').length === cart.length) {
          const query = document.querySelectorAll('.quantity');
          (query[index] as any).value = productDict[cart[index].name];
          clearInterval(checkExist);
        }
      }, 100);
    }
  }
}

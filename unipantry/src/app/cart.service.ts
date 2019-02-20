import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product';
import { AccountService } from './profile/account.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Product[] = [];

  private cartQuantity = 0;

  private productDict = {};

  private total: number;

  private giftCredit = 0;

  private subtotal: number;

  constructor(accountService: AccountService, private http: HttpClient) {
    accountService.getAccount().subscribe(account => this.giftCredit = account.giftCred);
  }

  public addToCart(product: Product, quantity: number) {
    if (!this.cart.includes(product)) {
      this.cart.push(product);
      this.productDict[product.name] = quantity;
    } else {
      this.productDict[product.name] += quantity;
    }
    this.cartQuantity += quantity;
  }

  public removeFromCart(product: Product, quantity: number) {
    const productQuantity = this.productDict[product.name];
    if (quantity >= productQuantity) {
      const index = this.cart.indexOf(product);
      this.cart.splice(index, 1);
      this.cartQuantity -= productQuantity;
      this.productDict[product.name] = 0;
    } else {
      this.cartQuantity -= quantity;
      this.productDict[product.name] -= quantity;
    }
  }

  public removeAll(product: Product) {
    this.removeFromCart(product, this.productDict[product.name]);
  }

  private calculateTotal() {
    this.total = 0;
    let i: number;
    for (i = 0; i < this.cart.length; i++) {
      const product = this.cart[i];
      this.total += product.price * this.productDict[product.name];
    }
    if (this.giftCredit > 0) {
      this.subtotal = this.total - this.giftCredit;
    }
  }

  public getCart() {
    this.calculateTotal();
    return of({
      'cart': this.cart,
      'quantity': this.cartQuantity,
      'total': this.total,
      'credit': this.giftCredit,
      'subtotal': this.subtotal,
      'dict': this.productDict
    });
  }

  public getCartQuantity() {
    return of(this.cartQuantity);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartQuantity = 0;

  constructor() { }

  public addToCart() {
    this.cartQuantity += 1;
  }

  public getCartQuantity() {
    return this.cartQuantity;
  }
}

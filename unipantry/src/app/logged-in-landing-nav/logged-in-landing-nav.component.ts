import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-logged-in-landing-nav',
  templateUrl: './logged-in-landing-nav.component.html',
  styleUrls: ['../logged-in-landing/logged-in-landing.component.css']
})
export class LoggedInLandingNavComponent implements OnInit {

  cartQuantity: number;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCartQuantity()
        .subscribe(quantity => this.cartQuantity = quantity);
    (document.getElementById('cart-quantity') as any).textContent = this.cartQuantity;
  }

  public addToCart(product: Product, quantity: number) {
    this.cartService.addToCart(product, quantity);
    this.cartService.getCartQuantity()
        .subscribe(cartQuantity => this.cartQuantity = cartQuantity);
    (document.getElementById('cart-quantity') as any).textContent = this.cartQuantity;
  }
}

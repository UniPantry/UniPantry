import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-logged-in-landing-nav',
  templateUrl: './logged-in-landing-nav.component.html',
  styleUrls: ['../logged-in-landing/logged-in-landing.component.css']
})
export class LoggedInLandingNavComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
    (document.getElementById('cart-quantity') as any).textContent = this.cartService.getCartQuantity();
  }

  public addToCart() {
    this.cartService.addToCart();
    (document.getElementById('cart-quantity') as any).textContent = this.cartService.getCartQuantity();
  }
}

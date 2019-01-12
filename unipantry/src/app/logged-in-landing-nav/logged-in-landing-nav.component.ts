import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logged-in-landing-nav',
  templateUrl: './logged-in-landing-nav.component.html',
  styleUrls: ['../logged-in-landing/logged-in-landing.component.css']
})
export class LoggedInLandingNavComponent implements OnInit {

  cartQuantity = 0;

  constructor() { }

  ngOnInit() {
  }

  public addToCart() {
    console.log(parseInt((document.getElementById('cart-quantity') as any).textContent, 10));
    const newQuantity = parseInt((document.getElementById('cart-quantity') as any).textContent, 10) + 1;
    (document.getElementById('cart-quantity') as any).textContent = newQuantity;
  }
}

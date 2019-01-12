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
    console.log(this.cartQuantity);
  }

  public addToCart() {
    this.cartQuantity += 1;
  }
}

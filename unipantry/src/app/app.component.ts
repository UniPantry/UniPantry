import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'UniPantry';

  private loggedIn = false;

  constructor(private router: Router) { }

  ngOnInit() { }

  public logIn() {
    this.loggedIn = true;
  }

  public isLoggedIn() {
    if (this.router.url === '/about' || this.router.url === '/logged-out') {
      return false;
    }
    // return this.loggedIn;   uncomment when login screen finished
    return true;
  }

  public isOnboarding() {
    if (this.router.url === '/login' || this.router.url === '/signup' || this.router.url === '/payment' ||
      this.router.url === '/shipping' || this.router.url === '/confirm' || this.router.url === '/request' ||
      this.router.url === '/complete-request' || this.router.url === '/welcome') {
      return true;
    }
    return false;
  }
}

$(document).ready(function () {
  $(this).scrollTop(0);
});

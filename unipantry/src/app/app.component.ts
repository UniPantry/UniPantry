import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'UniPantry';

  loggedIn = false;

  constructor( private router: Router ) { }

  ngOnInit() {}

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
}

$(document).ready(function() {
  $(this).scrollTop(0);
});

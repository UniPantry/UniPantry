import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['../landing/landing.component.css']
})
export class NavComponent implements OnInit {

  loggedIn = this.app.isLoggedIn();

  constructor( private app: AppComponent) { }

  ngOnInit() {}

  logIn() {
    this.app.logIn();
  }

}

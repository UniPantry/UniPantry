import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['../landing/landing.component.css']
})
export class FooterComponent implements OnInit {

  loggedIn = this.app.isLoggedIn();

  constructor(private app: AppComponent) { }

  ngOnInit() {
  }

}

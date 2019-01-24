import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['../landing/landing.component.css']
})
export class FooterComponent implements OnInit {

  private loggedIn = this.app.isLoggedIn();

  private onboarding = this.app.isOnboarding();

  constructor(private app: AppComponent) { }

  ngOnInit() {
  }

}

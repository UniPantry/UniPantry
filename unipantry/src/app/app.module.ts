import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingCarouselComponent } from './landing/landing-carousel.component';
import { BrowseAllComponent } from './landing/landing-browse-all.component';
import { CardCarousel1Component } from './card-carousel/card-carousel-1.component';
import { CardCarousel2Component } from './card-carousel/card-carousel-2.component';
import { CardCarousel3Component } from './card-carousel/card-carousel-3.component';
import { FooterComponent } from './footer/footer.component';
import { PaywallModalComponent } from './paywall-modal/paywall-modal.component';
import * as $ from 'jquery';
import { LoggedInLandingComponent } from './logged-in-landing/logged-in-landing.component';
import { LoggedInBrowseAllComponent } from './logged-in-landing/logged-in-browse-all.component';
import { BrowseComponent } from './browse/browse.component';
import { LoggedInCardCarousel1Component } from './logged-in-card-carousel/logged-in-card-carousel-1.component';
import { LoggedInCardCarousel2Component } from './logged-in-card-carousel/logged-in-card-carousel-2.component';
import { LoggedInCardCarousel3Component } from './logged-in-card-carousel/logged-in-card-carousel-3.component';
import { LoggedInLandingNavComponent } from './logged-in-landing-nav/logged-in-landing-nav.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LandingCarouselComponent,
    BrowseAllComponent,
    CardCarousel1Component,
    CardCarousel2Component,
    CardCarousel3Component,
    FooterComponent,
    PaywallModalComponent,
    LoggedInLandingComponent,
    LoggedInBrowseAllComponent,
    BrowseComponent,
    LoggedInCardCarousel1Component,
    LoggedInCardCarousel2Component,
    LoggedInCardCarousel3Component,
    LoggedInLandingNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

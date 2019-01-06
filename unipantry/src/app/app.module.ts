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

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LandingCarouselComponent,
    BrowseAllComponent,
    CardCarousel1Component,
    CardCarousel2Component,
    CardCarousel3Component,
    FooterComponent
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

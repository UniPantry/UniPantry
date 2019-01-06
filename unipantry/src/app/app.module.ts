import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingCarouselComponent } from './landing/landing-carousel.component';
import { BrowseAllComponent } from './landing/landing-browse-all.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LandingCarouselComponent,
    BrowseAllComponent
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

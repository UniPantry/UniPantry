import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-landing-carousel',
  templateUrl: './landing-carousel.component.html',
  providers: [NgbCarouselConfig]})
export class LandingCarouselComponent {
  images = [1, 2, 3].map(() => `https://picsum.photos/1600/500?random&t=${Math.random()}`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }
}

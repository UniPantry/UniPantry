import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-carousel',
  templateUrl: './landing-carousel.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingCarouselComponent {
  images = [1, 2, 3].map(() => `https://picsum.photos/1600/680?random&t=${Math.random()}`);

  constructor() {}
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.css'],
  providers: []
})
export class CardCarouselComponent {
  images = [1, 2, 3, 4, 5, 6, 7].map(() => `https://picsum.photos/200/200?random&t=${Math.random()}`);


  constructor() {
  }
}

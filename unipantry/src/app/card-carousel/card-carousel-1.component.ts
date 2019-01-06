import { Component } from '@angular/core';

@Component({
  selector: 'app-card-carousel-1',
  templateUrl: './card-carousel-1.component.html',
  styleUrls: ['./card-carousel.component.css'],
  providers: []
})
export class CardCarousel1Component {
  images = [1, 2, 3, 4, 5, 6, 7].map(() => `https://picsum.photos/225/225?random&t=${Math.random()}`);


  constructor() {
  }
}

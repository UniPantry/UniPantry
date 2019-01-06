import { Component } from '@angular/core';

@Component({
  selector: 'app-card-carousel-2',
  templateUrl: './card-carousel-2.component.html',
  styleUrls: ['./card-carousel.component.css'],
  providers: []
})
export class CardCarousel2Component {
  images = [1, 2, 3, 4, 5, 6, 7].map(() => `https://picsum.photos/225/225?random&t=${Math.random()}`);


  constructor() {
  }
}

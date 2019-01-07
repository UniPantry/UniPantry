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

$(document).ready(function () {
  $('#carousel-1').on('slide.bs.carousel', function (e) {
    const $e = $(e.relatedTarget);
    const idx = $e.index();
    const itemsPerSlide = 4;
    const totalItems = 7;
    if (idx >= totalItems - (itemsPerSlide - 1)) {
      const it = itemsPerSlide - (totalItems - idx);
      for (let i = 0; i < it; i++) {
        // append slides to end
        if (e.direction === 'left') {
          $('#c1')
            .eq(i)
            .appendTo('.inner-1');
        } else {
          $('#c1')
            .eq(0)
            .appendTo($(this).find('.inner-1'));
        }
      }
    }
  });
});

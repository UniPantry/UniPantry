import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists-carousel',
  templateUrl: './lists-carousel.component.html',
  styleUrls: ['./lists-carousel.component.css']
})
export class ListsCarouselComponent {
  images = [1, 2, 3, 4, 5, 6, 7].map(() => `https://picsum.photos/225/225?random&t=${Math.random()}`);

  constructor() { }

}

$(document).ready(function () {
  $('#carousel-4').on('slide.bs.carousel', function (e) {
    const $e = $((e as any).relatedTarget);
    const idx = $e.index();
    const itemsPerSlide = 3;
    const totalItems = 7;
    if (idx >= totalItems - (itemsPerSlide - 1)) {
      const it = itemsPerSlide - (totalItems - idx);
      for (let i = 0; i < it; i++) {
        // append slides to end
        if ((e as any).direction === 'left') {
          $('#c4')
            .eq(i)
            .appendTo('.inner-4');
        } else {
          $('#c4')
            .eq(0)
            .appendTo($(this).find('.inner-4'));
        }
      }
    }
  });
});
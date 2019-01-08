import { Component } from '@angular/core';

@Component({
    selector: 'app-logged-in-card-carousel-3',
    templateUrl: './logged-in-card-carousel-3.component.html',
    styleUrls: ['./logged-in-card-carousel.component.css']
})
export class LoggedInCardCarousel3Component {
    images = [1, 2, 3, 4, 5, 6, 7].map(() => `https://picsum.photos/225/225?random&t=${Math.random()}`);

    constructor() { }

}

$(document).ready(function () {
    $('#carousel-3').on('slide.bs.carousel', function (e) {
        const $e = $((e as any).relatedTarget);
        const idx = $e.index();
        const itemsPerSlide = 4;
        const totalItems = 7;
        if (idx >= totalItems - (itemsPerSlide - 1)) {
            const it = itemsPerSlide - (totalItems - idx);
            for (let i = 0; i < it; i++) {
                // append slides to end
                if ((e as any).direction === 'left') {
                    $('#c3')
                        .eq(i)
                        .appendTo('.inner-3');
                } else {
                    $('#c3')
                        .eq(0)
                        .appendTo($(this).find('.inner-3'));
                }
            }
        }
    });
});
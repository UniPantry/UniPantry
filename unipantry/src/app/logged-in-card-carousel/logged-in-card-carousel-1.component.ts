import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-logged-in-card-carousel-1',
  templateUrl: './logged-in-card-carousel-1.component.html',
  styleUrls: ['./logged-in-card-carousel.component.css']
})
export class LoggedInCardCarousel1Component {

  products: Product[];

  selectedProduct: Product;

  dormRoomEssentials = <Product[]>[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
    this.getDormEssentials(this.dormRoomEssentials);
    this.carousel(this.dormRoomEssentials);
  }

  getDormEssentials(dormRoomEssentials: Product[]): void {
    this.products.forEach(function (product) {
      if (product.promotion === 'dorm room essentials') {
        dormRoomEssentials.push(product);
      }
    });
  }

  carousel(products: Product[]) {
    $(document).ready(function () {
      $('#carousel-1').on('slide.bs.carousel', function (e) {
        const $e = $((e as any).relatedTarget);
        const idx = $e.index();
        const itemsPerSlide = 4;
        const totalItems = products.length;
        if (idx >= totalItems - (itemsPerSlide - 1)) {
          const it = itemsPerSlide - (totalItems - idx);
          for (let i = 0; i < it; i++) {
            // append slides to end
            if ((e as any).direction === 'left') {
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
  }
}

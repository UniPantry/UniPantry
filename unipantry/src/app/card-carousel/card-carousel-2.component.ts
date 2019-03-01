import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-card-carousel-2',
  templateUrl: './card-carousel-2.component.html',
  styleUrls: ['./card-carousel.component.css']
})
export class CardCarousel2Component {
  products: Product[];

  selectedProduct: Product;

  newYearNewYou = <Product[]>[];

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
    this.getNewYearNewYou(this.newYearNewYou);
    this.carousel(this.newYearNewYou);
  }

  getNewYearNewYou(newYearNewYou: Product[]): void {
    this.products.forEach(function (product) {
      if (product.promotion.includes('new year, new you')) {
        newYearNewYou.push(product);
      }
    });
  }

  carousel(products: Product[]) {
    $(document).ready(function () {
      $('#carousel-2').on('slide.bs.carousel', function (e) {
        const $e = $((e as any).relatedTarget);
        const idx = $e.index();
        const itemsPerSlide = 4;
        const totalItems = products.length;
        if (idx >= totalItems - (itemsPerSlide - 1)) {
          const it = itemsPerSlide - (totalItems - idx);
          for (let i = 0; i < it; i++) {
            // append slides to end
            if ((e as any).direction === 'left') {
              $('#c2')
                .eq(i)
                .appendTo('.inner-2');
            } else {
              $('#c2')
                .eq(0)
                .appendTo($(this).find('.inner-2'));
            }
          }
        }
      });
    });
  }
}


import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { LoggedInLandingNavComponent } from '../logged-in-landing-nav/logged-in-landing-nav.component';
import { AccountService } from '../profile/account.service';
import { Account } from '../profile/account';
import { List } from '../profile/list';

@Component({
  selector: 'app-logged-in-card-carousel-2',
  templateUrl: './logged-in-card-carousel-2.component.html',
  styleUrls: ['./logged-in-card-carousel.component.css']
})
export class LoggedInCardCarousel2Component implements OnInit {

  products: Product[];

  selectedProduct: Product;

  newYearNewYou = <Product[]>[];

  account: Account;

  new = false;

  constructor(private productService: ProductService, private nav: LoggedInLandingNavComponent, private accountService: AccountService) {
    accountService.getAccount().subscribe(account => this.account = account);
   }

  ngOnInit() {
    this.getProducts();
  }

  save(product: Product, list: List) {
    const listIndex = this.account.lists.indexOf(list);
    const productList = this.account.lists[listIndex].products;
    if (!productList.includes(product)) {
      productList.push(product);
    }
  }

  newList() {
    this.new = true;
  }

  route(event: KeyboardEvent) {
    if (event.charCode === 13) {
      const listName = (event as any).path[0].value;
      if (listName.length > 0) {
        this.account.lists.push({ name: listName, products: [] });
        this.new = false;
      }
    }
  }

  getSelectedProduct() {
    this.productService.getSelectedProduct()
      .subscribe(product => this.selectedProduct = product);
    return this.selectedProduct;
  }

  addToCart(product: Product) {
    this.nav.addToCart(product, 1);
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
    this.productService.setSelectedProduct(product);
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

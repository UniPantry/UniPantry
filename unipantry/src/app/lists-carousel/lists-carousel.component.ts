import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { LoggedInLandingNavComponent } from '../logged-in-landing-nav/logged-in-landing-nav.component';
import { AccountService } from '../profile/account.service';
import { Account } from '../profile/account';
import { List } from '../profile/list';
import { ListService } from '../list.service';

@Component({
  selector: 'app-lists-carousel',
  templateUrl: './lists-carousel.component.html',
  styleUrls: ['./lists-carousel.component.css']
})
export class ListsCarouselComponent implements OnInit, OnChanges {

  @Input() list = 0;

  selectedLists: List[];

  products: Product[];

  selectedProduct: Product;

  account: Account;

  new = false;

  constructor(private productService: ProductService, private nav: LoggedInLandingNavComponent, private accountService: AccountService, private listService: ListService) {
    accountService.getAccount().subscribe(account => this.account = account);
  }

  ngOnInit() {
    this.listService.getSelectedLists().subscribe(lists => this.selectedLists = lists);
    this.getProducts();
  }

  ngOnChanges() {
    this.listService.getSelectedLists().subscribe(lists => this.selectedLists = lists);
  }

  addToCart(product: Product) {
    this.nav.addToCart(product, 1);
  }

  delete(product: Product) {
    const productIndex = this.account.lists[this.list].products.indexOf(product);
    this.account.lists[this.list].products.splice(productIndex, 1);
  }

  getSelectedProduct() {
    this.productService.getSelectedProduct()
      .subscribe(product => this.selectedProduct = product);
    return this.selectedProduct;
  }

  move(product: Product, list: List) {
    const productIndex = this.account.lists[this.list].products.indexOf(product);
    this.account.lists[this.list].products.splice(productIndex, 1);
    const listIndex = this.account.lists.indexOf(list);
    const productList = this.account.lists[listIndex].products;
    if (!productList.includes(product)) {
      productList.push(product);
    }
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
    this.productService.setSelectedProduct(product);
  }

  getProducts(): void {
    this.products = this.selectedLists[this.list].products;
    this.carousel(this.products);
    this.fixElements(this.list);
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

  fixElements(list: number) {
    const fix = setInterval(function () {
      if (document.getElementById('carousel-1')) {
        const carousel = document.getElementById('carousel-1');
        if (carousel.querySelector('#right-chevron')) {
          carousel.id = 'carousel-' + list;
          (carousel.querySelector('#left-chevron') as any).dataset.target = '#carousel-' + list;
          (carousel.querySelector('#right-chevron') as any).dataset.target = '#carousel-' + list;
          clearInterval(fix);
        }
      }
    }, 100);
  }

  carousel(products: Product[]) {
    $(document).ready(function () {
      $('#carousel-' + this.list).on('slide.bs.carousel', function (e) {
        const $e = $((e as any).relatedTarget);
        const idx = $e.index();
        const itemsPerSlide = 4;
        const totalItems = products.length;
        if (idx >= totalItems - (itemsPerSlide - 1)) {
          const it = itemsPerSlide - (totalItems - idx);
          for (let i = 0; i < it; i++) {
            // append slides to end
            if ((e as any).direction === 'left') {
              $('#c')
                .eq(i)
                .appendTo($(this).find('#inner'));
            } else {
              $('#c')
                .eq(0)
                .appendTo($(this).find('#inner'));
            }
          }
        }
      });
    });
  }
}


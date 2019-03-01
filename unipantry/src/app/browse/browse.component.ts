import { Component, OnInit, OnChanges } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { LoggedInLandingNavComponent } from '../logged-in-landing-nav/logged-in-landing-nav.component';
import { ActivatedRoute, Router, ChildActivationEnd } from '@angular/router';
import { AccountService } from '../profile/account.service';
import { Account } from '../profile/account';
import { List } from '../profile/list';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit, OnChanges {

  products: Product[];

  selectedProduct: Product;

  selectedProducts = <Product[]>[];

  matchedProducts = <Product[]>[];

  start = 0;

  end = 12;

  page = 1;

  totalPages = 1;

  preferences = [];

  category: any;

  sub: any;

  account: Account;

  new = false;

  constructor(private productService: ProductService, private nav: LoggedInLandingNavComponent, private route: ActivatedRoute,
    private router: Router, private accountService: AccountService) {
      accountService.getAccount().subscribe(account => this.account = account);
  }

  ngOnInit() {
    this.getProducts();
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.category = +params['category'] || '';
      });
    const category = this.sub._subscriptions[0].subject._value.category;
    if (category !== '') {
      this.selectProducts(true, category);
    }
    this.router.events.subscribe(event => {
      if (event instanceof ChildActivationEnd) {
        this.selectProducts(true, event.snapshot.queryParams.category);
      }
    });
  }

  ngOnChanges() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.category = +params['category'] || '';
      });
    const category = this.sub._subscriptions[0].subject._value.category;
    if (category !== '') {
      this.selectProducts(true, category);
    }
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

  routing(event: KeyboardEvent) {
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
    this.selectedProducts = this.products.slice();
    this.matchPreferences();
  }

  selectProducts(clear: boolean, query: string): void {
    let matches = <Product[]>[];
    if (clear) {
      this.selectedProducts = [];
    }
    if (query === 'all') {
      matches = this.products.slice();
      const str = '<h3 style="font-size: 2vw; margin-left: 10%; margin-top: 2vw;" id="allProducts">All Products</h3>';
      (document.getElementById('allProducts')).outerHTML = str;
    } else if (query === 'groceries') {
      this.selectProducts(false, 'produce');
      this.selectProducts(false, 'meat & fish');
      this.selectProducts(false, 'bakery');
      this.selectProducts(false, 'dairy & eggs');
      this.selectProducts(false, 'beverages');
      this.selectProducts(false, 'snacks');
      this.selectProducts(false, 'packaged foods');
      this.selectProducts(false, 'frozen foods');
      this.selectProducts(false, 'baking supplies');
      this.selectProducts(false, 'specialty & allergy-friendly');
      const str = '<h3 style="font-size: 2vw; margin-left: 10%; margin-top: 2vw;" id="allProducts">' +
        '<span style="color: #0BCDB2">All Products</span>' + ' > Groceries</h3>';
      (document.getElementById('allProducts')).outerHTML = str;
    } else if (query === 'personal care') {
      this.selectProducts(false, 'hygiene');
      this.selectProducts(false, 'health');
      this.selectProducts(false, 'paper goods');
      this.selectProducts(false, 'cleaning supplies');
      this.selectProducts(false, 'laundry supplies');
      const str = '<h3 style="font-size: 2vw; margin-left: 10%; margin-top: 2vw;" id="allProducts">' +
        '<span style="color: #0BCDB2">All Products</span>' + ' > Personal Care</h3>';
      (document.getElementById('allProducts')).outerHTML = str;
    } else {
      this.products.forEach(function (product) {
        if (product.category === query) {
          matches.push(product);
        }
      });
      if (query) {
        const str = '<h3 style="font-size: 2vw; margin-left: 10%; margin-top: 2vw;" id="allProducts">' +
          '<span style="color: #0BCDB2">All Products</span> > ' +
          query.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ') + '</h3>';
        (document.getElementById('allProducts')).outerHTML = str;
      }
    }
    Array.prototype.push.apply(this.selectedProducts, matches);
    this.matchPreferences();
    (document.getElementById(query) as any).checked = true;
    this.router.navigate(['/browse'], { queryParams: { category: query.toLowerCase() } });
  }

  pages(i: number) {
    if (i === 0) {
      return new Array(1);
    }
    this.totalPages = Math.ceil(i);
    return new Array(this.totalPages);
  }

  goTo(page: number) {
    this.start = (page - 1) * 12;
    this.end = page * 12;
    this.page = page;
  }

  next() {
    if (this.page < this.totalPages) {
      this.page++;
      this.goTo(this.page);
    }
  }

  prev() {
    if (this.page > 1) {
      this.page--;
      this.goTo(this.page);
    }
  }

  selectPreference(preference: string) {
    const index = this.preferences.indexOf(preference);
    if (index >= 0) {
      this.preferences.splice(index, index + 1);
    } else {
      this.preferences.push(preference);
    }
    this.matchPreferences();
  }

  matchPreferences() {
    const products = this.selectedProducts.slice();
    this.matchedProducts = [];
    for (let i = 0; i < products.length; i++) {
      let match = true;
      if (this.preferences.length > 0) {
        for (let j = 0; j < this.preferences.length; j++) {
          if (!products[i].preference.includes(this.preferences[j])) {
            match = false;
          }
        }
      }
      if (match) {
        this.matchedProducts.push(products[i]);
      }
    }
    this.sort();
  }

  sort() {
    const sortBy = (document.getElementById('sort') as any).value;
    if (sortBy === 'alphabetical') {
      this.matchedProducts.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
    } else if (sortBy === 'popularity') {
      this.matchedProducts.sort((a, b) => b.popularity - a.popularity);
    } else if (sortBy === 'low') {
      this.matchedProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'high') {
      this.matchedProducts.sort((a, b) => b.price - a.price);
    }
  }
}

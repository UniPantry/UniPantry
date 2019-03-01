import { Component, OnChanges, Input } from '@angular/core';
import { Product } from '../product';
import { LoggedInLandingNavComponent } from '../logged-in-landing-nav/logged-in-landing-nav.component';
import { AccountService } from '../profile/account.service';
import { Account } from '../profile/account';
import { List } from '../profile/list';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnChanges {
  @Input() product: Product;

  account: Account;

  new = false;

  constructor(private nav: LoggedInLandingNavComponent, private accountService: AccountService, private productService: ProductService) {
    accountService.getAccount().subscribe(account => this.account = account);
  }

  ngOnChanges() {
    this.resetQuantity(this.product, this.productService);
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

  addToCart() {
    const quantity = parseInt((document.getElementById('quantity') as any).value, 10);
    this.nav.addToCart(this.product, quantity);
  }

  increaseQuantity() {
    const newQuantity = parseInt((document.getElementById('quantity') as any).value, 10) + 1;
    if (newQuantity <= 20) {
      (document.getElementById('quantity') as any).value = newQuantity;
    }
  }

  decreaseQuantity() {
    const newQuantity = parseInt((document.getElementById('quantity') as any).value, 10) - 1;
    if (newQuantity > 0) {
      (document.getElementById('quantity') as any).value = newQuantity;
    }
  }

  resetQuantity(product: Product, productService: ProductService) {
    $(document).on('show.bs.modal', '#detailModal', function () {
      const newQuantity = <number>1;
      (document.getElementById('quantity') as any).value = newQuantity;
      productService.getSelectedProduct().subscribe(newProduct => product = newProduct);
    });
  }
}

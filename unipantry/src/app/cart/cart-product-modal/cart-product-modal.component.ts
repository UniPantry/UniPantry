import { Component, OnChanges, Input } from '@angular/core';
import { Product } from '../../product';
import { CartComponent } from '../cart.component';
import { Account } from '../../profile/account';
import { AccountService } from '../../profile/account.service';
import { List } from '../../profile/list';

@Component({
  selector: 'app-cart-product-modal',
  templateUrl: './cart-product-modal.component.html',
  styleUrls: ['./cart-product-modal.component.css']
})
export class CartProductModalComponent implements OnChanges {

  @Input() product: Product;

  account: Account;

  new = false;

  constructor(private cart: CartComponent, private accountService: AccountService) {
    accountService.getAccount().subscribe(account => this.account = account);
  }

  ngOnChanges() {
    this.resetQuantity();
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
    this.cart.addToCart(this.product, quantity);
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

  resetQuantity() {
    $(document).on('hidden.bs.modal', '#cartModal', function () {
      const newQuantity = <number>1;
      (document.getElementById('quantity') as any).value = newQuantity;
    });
  }
}

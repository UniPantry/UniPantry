import { Component, OnChanges, Input } from '@angular/core';
import { Product } from '../product';
import { LoggedInLandingNavComponent } from '../logged-in-landing-nav/logged-in-landing-nav.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnChanges {
  @Input() product: Product;

  constructor(private nav: LoggedInLandingNavComponent) { }

  ngOnChanges() {
    this.resetQuantity();
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

  resetQuantity() {
    $(document).on('hidden.bs.modal', '#detailModal', function () {
      const newQuantity = <number>1;
      (document.getElementById('quantity') as any).value = newQuantity;
    });
  }

  newList(event: MouseEvent) {
    const str = '<input style="border-radius: .4vw; border-color: #F89833; border-width: .1vw; border-style: solid;' +
    'padding-left: .25vw; color: black; font-weight: 500; height: 100%; width: 95%;" placeholder="List Name" maxlength="25"></input>';
    if ((event.target as any).innerHTML !== str) {
      (event.target as any).innerHTML = str;
    }
  }
}

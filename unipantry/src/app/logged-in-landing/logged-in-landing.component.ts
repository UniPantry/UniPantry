import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { AccountService } from '../profile/account.service';
import { Account } from '../profile/account';

@Component({
  selector: 'app-logged-in-landing',
  templateUrl: './logged-in-landing.component.html',
  styleUrls: ['./logged-in-landing.component.css', '../logged-in-card-carousel/logged-in-card-carousel.component.css']
})
export class LoggedInLandingComponent implements OnInit {

  private account: Account;
  selectedProduct: Product;
  name: string;
  points = 20;
  giftCredit: number;

  constructor(private productService: ProductService, private accountService: AccountService) {
    accountService.getAccount().subscribe(account => this.account = account);
  }

  ngOnInit() {
    this.name = this.account.name;
    this.giftCredit = this.account.giftCred;
  }

  getSelectedProduct() {
    this.productService.getSelectedProduct()
      .subscribe(product => this.selectedProduct = product);
    return this.selectedProduct;
  }

}

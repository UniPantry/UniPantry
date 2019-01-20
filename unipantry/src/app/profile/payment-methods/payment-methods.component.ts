import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.css']
})
export class PaymentMethodsComponent implements OnInit {
  user: Account;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.getAccount();
  }

  getAccount(): void {
    this.accountService.getAccount()
      .subscribe(user => this.user = user);
  }

  allowEdit() {

  }
}

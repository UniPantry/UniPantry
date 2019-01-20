import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-shipping-addresses',
  templateUrl: './shipping-addresses.component.html',
  styleUrls: ['./shipping-addresses.component.css']
})
export class ShippingAddressesComponent implements OnInit {

  user: Account;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.getAccount();
  }

  getAccount(): void {
    this.accountService.getAccount()
      .subscribe(user => this.user = user);
  }

}

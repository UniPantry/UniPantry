import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-gift-credit',
  templateUrl: './gift-credit.component.html',
  styleUrls: ['./gift-credit.component.css']
})
export class GiftCreditComponent implements OnInit {

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

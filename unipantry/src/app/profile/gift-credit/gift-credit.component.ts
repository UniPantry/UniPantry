import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Account } from '../account';
import { AccountService } from '../account.service';
>>>>>>> Johnathan-patch-2

@Component({
  selector: 'app-gift-credit',
  templateUrl: './gift-credit.component.html',
  styleUrls: ['./gift-credit.component.css']
})
export class GiftCreditComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit() {
  }

=======
  user: Account;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.getAccount();
  }

  getAccount(): void {
    this.accountService.getAccount()
      .subscribe(user => this.user = user);
  }


>>>>>>> Johnathan-patch-2
}

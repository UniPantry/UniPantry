import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  user: Account;

  edit = false;

  allowEdit() {
    this.edit = true;
  }

<<<<<<< HEAD
  save(name,phone,email) {
=======
  save(name, phone, email) {
>>>>>>> Johnathan-patch-2
    if (name) this.user.name = name;
    if (phone) this.user.phone = phone;
    if (email) this.user.email = email;
    this.edit = false;
  }

<<<<<<< HEAD
  constructor() { }
=======
  constructor(private accountService: AccountService) { }
>>>>>>> Johnathan-patch-2

  ngOnInit() {
    this.getAccount();
  }

  getAccount(): void {
    this.accountService.getAccount()
      .subscribe(user => this.user = user);
  }

}

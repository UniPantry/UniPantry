import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../account';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  @Input() user: Account;

  edit = false;

  allowEdit() {
    this.edit = true;
  }

  save(name, phone, email) {
    if (name) this.user.name = name;
    if (phone) this.user.phone = phone;
    if (email) this.user.email = email;
    this.edit = false;
  }

  constructor() { }

  ngOnInit() {
  }


}

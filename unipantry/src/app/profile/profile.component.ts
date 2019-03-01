import { Component, OnInit } from '@angular/core';
import { Account } from './account';
import { AccountService } from './account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: Account;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.getAccount();
  }

  getAccount(): void {
    this.accountService.getAccount()
      .subscribe(user => this.user = user);
  }

  accCollapse = false;
  ordCollapse = true;
  giftCollapse = true;
  contactCollapse = true;

  onSelect() {

  }

  showAccount() {
    this.ordCollapse = true;
    this.accCollapse = false;
    this.giftCollapse = true;
    this.contactCollapse = true;

    document.getElementById('account').style.color = '#0BCDB2';
    document.getElementById('order').style.color = 'black';
    document.getElementById('gifty').style.color = 'black';
    document.getElementById('contact').style.color = 'black';
  }

  getOrder() {
    this.ordCollapse = false;
    this.accCollapse = true;
    this.giftCollapse = true;
    this.contactCollapse = true;

    document.getElementById('account').style.color = 'black';
    document.getElementById('order').style.color = '#0BCDB2';
    document.getElementById('gifty').style.color = 'black';
    document.getElementById('contact').style.color = 'black';
  }

  getGift() {
    this.ordCollapse = true;
    this.accCollapse = true;
    this.giftCollapse = false;
    this.contactCollapse = true;

    document.getElementById('account').style.color = 'black';
    document.getElementById('order').style.color = 'black';
    document.getElementById('gifty').style.color = '#0BCDB2';
    document.getElementById('contact').style.color = 'black';
  }

  getContact() {
    this.ordCollapse = true;
    this.accCollapse = true;
    this.giftCollapse = true;
    this.contactCollapse = false;

    document.getElementById('account').style.color = 'black';
    document.getElementById('order').style.color = 'black';
    document.getElementById('gifty').style.color = 'black';
    document.getElementById('contact').style.color = '#0BCDB2';
  }



}

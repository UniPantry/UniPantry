import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../account';

@Component({
  selector: 'app-gift-credit',
  templateUrl: './gift-credit.component.html',
  styleUrls: ['./gift-credit.component.css']
})
export class GiftCreditComponent implements OnInit {

  @Input() user: Account;

  constructor() { }

  ngOnInit() {
  }

}

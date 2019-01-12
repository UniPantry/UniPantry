import { Component, OnInit } from '@angular/core';
import { Billing } from '../billing';
import { Address } from '../address';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.css']
})
export class PaymentMethodsComponent implements OnInit {
  addy: Address = {
    name: "Rah Yan",
    line1: "266D William Keeton House",
    line2: "Ithaca, NY 14853"
  };

  bill: Billing = {
    name: "Rah Yan",
    cardNum: 123445677890,
    exp: "12/25",
    address: this.addy
  };

  constructor() { }

  ngOnInit() {
  }

}

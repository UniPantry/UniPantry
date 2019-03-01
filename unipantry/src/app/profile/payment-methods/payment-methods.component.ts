import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../account';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.css']
})
export class PaymentMethodsComponent implements OnInit {
  @Input() user: Account;

  constructor() { }

  ngOnInit() {
  }


  allowEdit() {

  }
}

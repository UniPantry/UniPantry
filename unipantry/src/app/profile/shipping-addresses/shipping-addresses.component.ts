import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../account';
import { Address } from '../address';

@Component({
  selector: 'app-shipping-addresses',
  templateUrl: './shipping-addresses.component.html',
  styleUrls: ['./shipping-addresses.component.css']
})
export class ShippingAddressesComponent implements OnInit {

  @Input() user: Account;
  currAddy: Address;

  edit(name) {
    this.currAddy = {name: name, street: 'street', city: 'city', state: 'state', zip: 10458, dorm: false};
  }

  constructor() { }

  ngOnInit() {
    this.currAddy = {name: 'name', street: 'street', city: 'city', state: 'state', zip: 10458, dorm: false};
  }

  line2(city, state, zip) {
    return city + ', ' + state + ', ' + zip; 
  }


}

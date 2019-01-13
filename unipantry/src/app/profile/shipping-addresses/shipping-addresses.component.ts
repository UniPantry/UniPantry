import { Component, OnInit } from '@angular/core';
import { Address } from '../address';

@Component({
  selector: 'app-shipping-addresses',
  templateUrl: './shipping-addresses.component.html',
  styleUrls: ['./shipping-addresses.component.css']
})
export class ShippingAddressesComponent implements OnInit {

  address: Address = {
    name: "Rah Yan",
    line1: "266D William Keeton House",
    line2: "Ithaca, NY 14853"
  };

  constructor() { }

  ngOnInit() {
  }

}

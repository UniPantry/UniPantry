import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../../address';
import { FormDataService } from '../../../onboarding/form-data.service';
import { AccountService } from '../../account.service';
import { Account } from '../../account';

@Component({
  selector: 'app-add-new-address',
  templateUrl: './add-new-address.component.html',
  styleUrls: ['./add-new-address.component.css']
})
export class AddNewAddressComponent implements OnInit {
  @Input() address: Address;
  edit = true;
  user: Account;
  shipping: Address;
  form: any;
  constructor(private router: Router, private accountService: AccountService) { }

  ngOnInit() {
    this.getAccount();
    console.log(this.address)
    if (this.address) {
      console.log("SKLADSLKJ");
      this.edit = true;
    }
  }

  getAccount(): void {
    this.accountService.getAccount()
      .subscribe(user => this.user = user);
  }

  save2(form): boolean {
    if (!form.valid) {
      return false;
    }

    this.user.shipping.push(this.shipping);
    return true;
  }

  save(name, street, city, state, zip) {
    if (name && street && city && state && zip) {
      const newAddy: Address = {name: name, street: street, city: city, state: state, zip: zip, dorm: false};
      this.user.shipping.push(newAddy);
      name = '';
    }
  }


  autofill(shipping) {
    const client = new XMLHttpRequest();
    client.open('GET', 'http://api.zippopotam.us/us/' + shipping.zip, true);
    client.onreadystatechange = function () {
      if (client.readyState === 4) {
        const response = JSON.parse(client.responseText)['places'][0];
        shipping.state = response['state abbreviation'];
        shipping.city = response['place name'];
      }
    };

    client.send();
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shipping } from '../formData.model';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shipping: Shipping;
  form: any;
  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
    this.shipping = this.formDataService.getShipping();
    if (this.shipping.zip.length === 5) {
      this.autofill(this.shipping);
    }
  }

  save(form): boolean {
    if (!form.valid) {
      return false;
    }

    this.formDataService.setShipping(this.shipping);
    return true;
  }

  goToPrevious(form) {
    this.save(form);
    this.router.navigate(['/signup']);

  }

  goToNext(form) {
    if (this.save(form)) {
      this.router.navigate(['/payment']);
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

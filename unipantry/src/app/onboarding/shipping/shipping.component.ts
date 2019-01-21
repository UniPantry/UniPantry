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
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }

    this.formDataService.setShipping(this.shipping);
    return true;
  }

  goToPrevious() {
    // Navigate to the personal page
    this.router.navigate(['/signup']);

  }

  goToNext(form: any) {
    if (this.save(form)) {
      // Navigate to the address page
      this.router.navigate(['/payment']);
    }
  }
}
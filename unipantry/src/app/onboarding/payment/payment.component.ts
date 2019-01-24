import { Component, OnInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Payment, Shipping } from '../formData.model';
import { FormDataService } from '../form-data.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit, AfterViewChecked {
  payment: Payment;
  shipping: Shipping;
  form: any;

  constructor(private router: Router, private formDataService: FormDataService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.payment = this.formDataService.getPayment();
    this.shipping = this.formDataService.getShipping();
    if (this.payment.newAddress) {
      (document.getElementById('customRadio1') as any).checked = false;
      (document.getElementById('customRadio2') as any).checked = true;
    } else {
      (document.getElementById('customRadio1') as any).checked = true;
      (document.getElementById('customRadio2') as any).checked = false;
      this.setBilling();
    }
  }

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }
    this.formDataService.setPayment(this.payment);
    return true;
  }

  setBilling() {
    this.payment.newAddress = false;
    this.payment.billingAddress = this.shipping.address;
    this.payment.billingCity = this.shipping.city;
    this.payment.billingState = this.shipping.state;
    this.payment.billingZip = this.shipping.zip;
  }

  addNewAddress() {
    this.payment.newAddress = true;
  }

  goToPrevious(form) {
    this.save(form);
    // Navigate to the personal page
    this.router.navigate(['/shipping']);
  }

  goToNext(form: any) {
    if (this.save(form)) {
      // Navigate to the address page
      this.router.navigate(['/confirm']);
    }
  }
  
  onSubmit() {}
}

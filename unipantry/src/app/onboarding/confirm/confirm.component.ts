import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormData } from '../formData.model';
import { FormDataService } from '../form-data.service';
import { AccountService } from '../../profile/account.service';
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  @Input() formData: FormData;
  isFormValid = false;
  checked = false;

  constructor(private router: Router, private formDataService: FormDataService, private accountService: AccountService) { }

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
    this.isFormValid = this.formDataService.isFormValid();
  }

  submit() {
    const date = new Date();
    this.accountService.currAcc = {
      name: this.formData.firstName + ' ' + this.formData.lastName,
      phone: this.formData.phoneNumber,
      email: this.formData.email,
      pw: this.formData.password,
      startOfMem: date.toLocaleDateString(),
      shipping: [
        { name: this.formData.firstName + ' ' + this.formData.lastName, street: this.formData.address, city: this.formData.city,
        state: this.formData.state, zip: parseInt(this.formData.zip, 10), dorm: this.formData.dorm }
      ],
      billing: [
        {
          name: this.formData.cardName, cardNum: parseInt(this.formData.cardNumber, 10), exp: this.formData.expirationDate,
          address: { name: this.formData.cardName, street: this.formData.billingAddress, city: this.formData.billingCity,
          state: this.formData.billingState, zip: parseInt(this.formData.billingZip, 10), dorm: false }
        }
      ],
      giftCred: 0,
      points: 0,
      lists: []
    };
    this.formData = this.formDataService.resetFormData();
    this.isFormValid = false;
  }

  check() {
    if (!this.checked) {
      this.checked = true;
    } else {
      this.checked = false;
    }
  }

  onSubmit() {}
}

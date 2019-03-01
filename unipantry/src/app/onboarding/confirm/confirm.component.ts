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
        { name: this.formData.firstName + ' ' + this.formData.lastName, line1: this.formData.address , line2: this.formData.city + ', ' +
        this.formData.state + ' ' + this.formData.zip }
      ],
      billing: [
        {
          name: this.formData.cardName, cardNum: parseInt(this.formData.cardNumber, 10), exp: this.formData.expirationDate,
          address: { name: this.formData.cardName, line1: this.formData.billingAddress, line2: this.formData.billingCity + ', ' +
          this.formData.billingState + ' ' + this.formData.billingZip }
        }
      ],
      giftCred: 0,
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

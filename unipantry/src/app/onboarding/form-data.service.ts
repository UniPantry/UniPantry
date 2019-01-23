import { Injectable } from '@angular/core';

import { FormData, Signup, Payment, Shipping } from './formData.model';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private formData: FormData = new FormData();
  private isSignupFormValid = false;
  private isShippingFormValid = false;
  private isPaymentFormValid = false;

  getSignup(): Signup {
    // Return the SignUp data
    const signup: Signup = {
      zip: this.formData.zip,
      firstName: this.formData.firstName,
      lastName: this.formData.lastName,
      phoneNumber: this.formData.phoneNumber,
      email: this.formData.email,
      password: this.formData.password,
      confirmPassword: this.formData.confirmPassword
    };
    return signup;
  }

  setSignup(data: Signup) {
    this.isSignupFormValid = true;
    this.formData.zip = data.zip;
    this.formData.firstName = data.firstName;
    this.formData.lastName = data.lastName;
    this.formData.phoneNumber = data.phoneNumber;
    this.formData.email = data.email;
    this.formData.password = data.password;
    this.formData.confirmPassword = data.confirmPassword;
  }

  getShipping(): Shipping {
    // Returns the Shipping Data
    const shipping: Shipping = {
      address: this.formData.address,
      city: this.formData.city,
      state: this.formData.state,
      zip: this.formData.zip,
      dorm: this.formData.dorm
    };
    return shipping;
  }

  setShipping(data: Shipping) {
    // update the Shipping data only when the Signup form has been validated
    this.isShippingFormValid = true;
    this.formData.address = data.address;
    this.formData.city = data.city;
    this.formData.state = data.state;
    this.formData.zip = data.zip;
    this.formData.dorm = data.dorm;
  }

  getPayment(): Payment {
    // Returs the Payment Data
    const payment: Payment = {
      cardName: this.formData.cardName,
      cardNumber: this.formData.cardNumber,
      expirationDate: this.formData.expirationDate,
      cvc: this.formData.cvc,
      billingAddress: this.formData.billingAddress,
      billingCity: this.formData.billingCity,
      billingState: this.formData.billingState,
      billingZip: this.formData.billingZip,
      newAddress: this.formData.newAddress
    };
    return payment;
  }

  setPayment(data: Payment) {
    // update the Payment data only when the Shipping form has been validated
    this.isPaymentFormValid = true;
    this.formData.cardName = data.cardName;
    this.formData.cardNumber = data.cardNumber;
    this.formData.expirationDate = data.expirationDate;
    this.formData.cvc = data.cvc;
    this.formData.billingAddress = data.billingAddress;
    this.formData.billingCity = data.billingCity;
    this.formData.billingState = data.billingState;
    this.formData.billingZip = data.billingZip;
    this.formData.newAddress = data.newAddress;
  }

  getFormData(): FormData {
    // Return the entire Form Data
    return this.formData;
  }

  resetFormData(): FormData {
    // Return the form data after all this.* members had been reset
    this.formData.clear();
    this.isSignupFormValid = this.isShippingFormValid = this.isPaymentFormValid = false;
    return this.formData;
  }

  isFormValid() {
    // Return true if all forms are valid otherwise return false
    return this.isSignupFormValid && this.isShippingFormValid && this.isPaymentFormValid;
  }
}

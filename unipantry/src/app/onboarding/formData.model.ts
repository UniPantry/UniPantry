export class FormData {
  zip = '';
  firstName = '';
  lastName = '';
  phoneNumber = '';
  email = '';
  password = '';
  confirmPassword = '';
  address = '';
  city = '';
  state = '';
  cardName = '';
  cardNumber = '';
  expirationDate = '';
  cvc = '';
  billingAddress = '';
  billingCity = '';
  billingState = '';
  billingZip = '';
  dorm = false;
  newAddress = false;

  clear() {
    this.zip = '';
    this.firstName = '';
    this.lastName = '';
    this.phoneNumber = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.address = '';
    this.city = '';
    this.state = '';
    this.cardName = '';
    this.cardNumber = '';
    this.expirationDate = '';
    this.cvc = '';
    this.billingAddress = '';
    this.billingCity = '';
    this.billingState = '';
    this.billingZip = '';
    this.dorm = false;
    this.newAddress = false;
  }
}

export class Signup {
  zip = '';
  firstName = '';
  lastName = '';
  phoneNumber = '';
  email = '';
  password = '';
  confirmPassword = '';
}

export class Request {
  zip = '';
  firstName = '';
  lastName = '';
  email = '';
  college = '';
}

export class Shipping {
  address = '';
  city = '';
  state = '';
  zip = '';
  dorm = false;
}

export class Payment {
  cardName = '';
  cardNumber = '';
  expirationDate = '';
  cvc = '';
  billingAddress = '';
  billingCity = '';
  billingState = '';
  billingZip = '';
  newAddress = false;
}

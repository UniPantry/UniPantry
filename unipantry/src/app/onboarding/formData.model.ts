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
  experationDate = '';
  cvc = '';
  billingAddress = '';
  billingCity = '';
  billingState = '';
  billingZip = '';

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
    this.experationDate = '';
    this.cvc = '';
    this.billingAddress = '';
    this.billingCity = '';
    this.billingState = '';
    this.billingZip = '';
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
}

export class Payment {
  cardName = '';
  cardNumber = '';
  experationDate = '';
  cvc = '';
  billingAddress = '';
  billingCity = '';
  billingState = '';
  billingZip = '';
}

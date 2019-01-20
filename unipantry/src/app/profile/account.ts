import { Billing } from './billing';
import { Address } from './address';

export class Account {
  name: string;
  phone: string;
  email: string;
  pw: string;
  startOfMem: string;
  shipping: Address[];
  billing: Billing[];
  giftCred: number;
}

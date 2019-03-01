import { Billing } from './billing';
import { Address } from './address';
import { List } from './list';

export class Account {
  name: string;
  phone: string;
  email: string;
  pw: string;
  startOfMem: string;
  shipping: Address[];
  billing: Billing[];
  giftCred: number;
  points: number;
  lists: List[];
  //orders: number[];
}

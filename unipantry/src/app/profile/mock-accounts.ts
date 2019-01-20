import { Account } from './account';
import { Billing } from './billing';
import { Address } from './address';

export const ACCOUNTS: Account[] = [
  {
    name: 'Rah Yan',
    phone: '634-123-4238',
    email: 'blah@gmail.com',
    pw: '1',
    startOfMem: '12/16/2000',
    shipping: [
      {name: 'Rah Yan', line1: '266D William Keeton House', line2: 'Ithaca, NY 14853'}
    ],
    billing: [
      {name: 'Rah Yan', cardNum: 123445677890, exp: '12/25',
        address: {name: null, line1: '266D William Keeton House', line2: 'Ithaca, NY 14853'}
      }
    ],
    giftCred: 0
  },
  {
    name: 'John And',
    phone: '696-969-6969',
    email: 'johnny@boy.com',
    pw: '2',
    startOfMem: '2/19/2005',
    shipping: [
      {name: 'John And', line1: '123 Four Ave', line2: 'Brooklyn, NY 90203'},
      {name: 'Rah Yan', line1: '266D William Keeton House', line2: 'Ithaca, NY 14853'}
    ],
    billing: [
      {name: 'John And', cardNum: 999877776542, exp: '12/25',
        address: {name: null, line1: '123 Four Ave', line2: 'Brooklyn, NY 90203'}
      },
      {name: 'Rah Yan', cardNum: 123445677890, exp: '12/25',
        address: {name: null, line1: '266D William Keeton House', line2: 'Ithaca, NY 14853'}
      }
    ],
    giftCred: 8
  },
  {
    name: 'Rain Sand',
    phone: '123-456-7890',
    email: 'rainman@gmail.com',
    pw: '3',
    startOfMem: '11/22/2002',
    shipping: [
      {name: 'Rain Sand', line1: '266D William Keeton House', line2: 'Ithaca, NY 14853'}
    ],
    billing: [
      {name: 'Rain Sand', cardNum: 123445677890, exp: '12/25',
        address: {name: null, line1: '266D William Keeton House', line2: 'Ithaca, NY 14853'}
      }
    ],
    giftCred: 10
  },
  {
    name: 'Tree Burr',
    phone: '374-943-7593',
    email: 'balt@more.com',
    pw: '4',
    startOfMem: '1/6/2010',
    shipping: [
      {name: 'Tree Burr', line1: '266D William Keeton House', line2: 'Ithaca, NY 14853'}
    ],
    billing: [
      {name: 'Tree Burr', cardNum: 123445677890, exp: '12/25',
        address: {name: null, line1: '123 Four Ave', line2: 'Brooklyn, NY 90203'}
      }
    ],
    giftCred: 0
  },
  {
    name: 'Just In',
    phone: '829-122-4230',
    email: 'bull@city.com',
    pw: '5',
    startOfMem: '4/30/1999',
    shipping: [
      {name: 'Just In', line1: '266D William Keeton House', line2: 'Ithaca, NY 14853'}
    ],
    billing: [
      {name: 'Rah Yan', cardNum: 123445677890, exp: '12/25',
        address: {name: null, line1: '266D William Keeton House', line2: 'Ithaca, NY 14853'}
      }
    ],
    giftCred: 0
  }
];

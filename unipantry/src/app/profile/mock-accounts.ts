import { Account } from './account';
import { Billing } from './billing';
import { Address } from './address';
import { LISTS } from '../mock-lists';

export const ACCOUNTS: Account[] = [
  {
    name: 'Rah Yan',
    phone: '634-123-4238',
    email: 'blah@gmail.com',
    pw: '1',
    startOfMem: '12/16/2000',
    shipping: [
      {name: 'Rah Yan', street: '266D William Keeton House', city: 'Ithaca', state: 'NY', zip: 14853, dorm: false}
    ],
    billing: [
      {name: 'Rah Yan', cardNum: 123445677890, exp: '12/25',
        address: {name: null, street: '266D William Keeton House', city: 'Ithaca', state: 'NY', zip: 14853, dorm: false}
      }
    ],
    giftCred: 0,
    points: 5,
    lists: []
  },
  {
    name: 'John And',
    phone: '696-969-6969',
    email: 'johnny@boy.com',
    pw: '2',
    startOfMem: '2/19/2005',
    shipping: [
      {name: 'John And', street: '123 Four Ave', city: 'Brooklyn', state: 'NY', zip: 90203, dorm: false},
      {name: 'Rah Yan', street: '266D William Keeton House', city: 'Ithaca', state: 'NY', zip: 14853, dorm: false}
    ],
    billing: [
      {name: 'John And', cardNum: 999877776542, exp: '12/25',
        address: {name: null, street: '123 Four Ave', city: 'Brooklyn', state: 'NY', zip: 90203, dorm: false}
      },
      {name: 'Rah Yan', cardNum: 123445677890, exp: '12/25',
        address: {name: null, street: '266D William Keeton House', city: 'Ithaca', state: 'NY', zip: 14853, dorm: false}
      }
    ],
    giftCred: 8,
    points: 50,
    lists: [LISTS[0], LISTS[1]]
  },
  {
    name: 'Rain Sand',
    phone: '123-456-7890',
    email: 'rainman@gmail.com',
    pw: '3',
    startOfMem: '11/22/2002',
    shipping: [
      {name: 'Rain Sand', street: '266D William Keeton House', city: 'Ithaca', state: 'NY', zip: 14853, dorm: false}
    ],
    billing: [
      {name: 'Rain Sand', cardNum: 123445677890, exp: '12/25',
        address: {name: null, street: '266D William Keeton House', city: 'Ithaca', state: 'NY', zip: 14853, dorm: false}
      }
    ],
    giftCred: 10,
    points: 7,
    lists: []
  },
  {
    name: 'Tree Burr',
    phone: '374-943-7593',
    email: 'balt@more.com',
    pw: '4',
    startOfMem: '1/6/2010',
    shipping: [
      {name: 'Tree Burr', street: '266D William Keeton House', city: 'Ithaca', state: 'NY', zip: 14853, dorm: false}
    ],
    billing: [
      {name: 'Tree Burr', cardNum: 123445677890, exp: '12/25',
        address: {name: null, street: '123 Four Ave', city: 'Brooklyn', state: 'NY', zip: 90203, dorm: false}
      }
    ],
    giftCred: 0,
    points: 2,
    lists: []
  },
  {
    name: 'Just In',
    phone: '829-122-4230',
    email: 'bull@city.com',
    pw: '5',
    startOfMem: '4/30/1999',
    shipping: [
      {name: 'Just In', street: '266D William Keeton House', city: 'Ithaca', state: 'NY', zip: 14853, dorm: false}
    ],
    billing: [
      {name: 'Rah Yan', cardNum: 123445677890, exp: '12/25',
        address: {name: null, street: '266D William Keeton House', city: 'Ithaca', state: 'NY', zip: 14853, dorm: false}
      }
    ],
    giftCred: 0,
    points: 3,
    lists: []
  }
];

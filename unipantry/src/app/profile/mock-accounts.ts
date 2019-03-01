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
      { name: 'Rah Yan', line1: '266D William Keeton House', line2: 'Ithaca, NY 14853' }
    ],
    billing: [
      {
        name: 'Rah Yan', cardNum: 123445677890, exp: '12/25',
        address: { name: null, line1: '266D William Keeton House', line2: 'Ithaca, NY 14853' }
      }
    ],
    giftCred: 0,
    lists: []
  },
  {
    name: 'John And',
    phone: '696-969-6969',
    email: 'johnny@boy.com',
    pw: '2',
    startOfMem: '2/19/2005',
    shipping: [
      { name: 'John And', line1: '123 Four Ave', line2: 'Brooklyn, NY 90203' },
      { name: 'Rah Yan', line1: '266D William Keeton House', line2: 'Ithaca, NY 14853' }
    ],
    billing: [
      {
        name: 'John And', cardNum: 999877776542, exp: '12/25',
        address: { name: null, line1: '123 Four Ave', line2: 'Brooklyn, NY 90203' }
      },
      {
        name: 'Rah Yan', cardNum: 123445677890, exp: '12/25',
        address: { name: null, line1: '266D William Keeton House', line2: 'Ithaca, NY 14853' }
      }
    ],
    giftCred: 8,
    lists: [
      {
        name: 'Friendsgiving', products: [
          {
            name: 'bread',
            weight: '10.0 oz',
            price: 2.00,
            oldPrice: 2.99,
            allergens: 'N/A',
            ingredients: 'wheat',
            src: 'https://picsum.photos/200/150?random&t=${Math.random()}',
            category: 'bakery',
            promotion: 'dorm room essentials',
            preference: 'N/A',
            popularity: 2
          },

          {
            name: 'kleenex facial tissues',
            weight: '480 ct. 3-pack',
            price: 1.19,
            oldPrice: 1.49,
            allergens: 'N/A',
            ingredients: 'n/a',
            src: 'https://picsum.photos/200/150?random&t=${Math.random()}',
            category: 'paper goods',
            promotion: 'dorm room essentials',
            preference: 'N/A',
            popularity: 3
          },

          {
            name: 'fuji apples',
            weight: '15.1 oz',
            price: 0.99,
            oldPrice: 1.09,
            allergens: 'N/A',
            ingredients: 'apple',
            src: 'https://picsum.photos/200/150?random&t=${Math.random()}',
            category: 'produce',
            promotion: 'dorm room essentials',
            preference: 'N/A',
            popularity: 4
          },

          {
            name: 'bananas',
            weight: '8.0 oz',
            price: 0.99,
            oldPrice: 1.19,
            allergens: 'N/A',
            ingredients: 'banana',
            src: 'https://picsum.photos/200/150?random&t=${Math.random()}',
            category: 'produce',
            promotion: 'dorm room essentials',
            preference: 'N/A',
            popularity: 2
          }
        ]
      },
      {
        name: 'Monthly Order', products: [
          {
            name: 'quaker instant oatmeal variety pack',
            weight: '15.1 oz',
            price: 3.29,
            oldPrice: 3.99,
            allergens: 'Dairy',
            ingredients: 'Whole grain rolled oats',
            src: 'https://picsum.photos/200/150?random&t=${Math.random()}',
            category: 'packaged foods',
            promotion: 'dorm room essentials',
            preference: 'N/A',
            popularity: 1
          },
          {
            name: 'kleenex facial tissues',
            weight: '480 ct. 3-pack',
            price: 1.19,
            oldPrice: 1.49,
            allergens: 'N/A',
            ingredients: 'n/a',
            src: 'https://picsum.photos/200/150?random&t=${Math.random()}',
            category: 'paper goods',
            promotion: 'time to restock',
            preference: 'N/A',
            popularity: 5
          }
        ]
      },
      {
        name: 'Kathleen\'s Birthday Party', products: [
          {
            name: 'quaker instant oatmeal',
            weight: '15.1 oz',
            price: 3.29,
            oldPrice: 3.99,
            allergens: 'Dairy',
            ingredients: 'Whole grain rolled oats',
            src: 'https://picsum.photos/200/150?random&t=${Math.random()}',
            category: 'packaged foods',
            promotion: 'time to restock',
            preference: 'N/A',
            popularity: 8
          },
          {
            name: 'fuji apples',
            weight: '15.1 oz',
            price: 0.99,
            oldPrice: 1.09,
            allergens: 'N/A',
            ingredients: 'apple',
            src: 'https://picsum.photos/200/150?random&t=${Math.random()}',
            category: 'produce',
            promotion: 'time to restock',
            preference: 'organic, vegan, kosher',
            popularity: 29
          },
          {
            name: 'bread',
            weight: '10.0 oz',
            price: 2.00,
            oldPrice: 2.99,
            allergens: 'N/A',
            ingredients: 'wheat',
            src: 'https://picsum.photos/200/150?random&t=${Math.random()}',
            category: 'bakery',
            promotion: 'time to restock',
            preference: 'gluten-free',
            popularity: 2
          }
        ]
      }
    ]
  },
  {
    name: 'Rain Sand',
    phone: '123-456-7890',
    email: 'rainman@gmail.com',
    pw: '3',
    startOfMem: '11/22/2002',
    shipping: [
      { name: 'Rain Sand', line1: '266D William Keeton House', line2: 'Ithaca, NY 14853' }
    ],
    billing: [
      {
        name: 'Rain Sand', cardNum: 123445677890, exp: '12/25',
        address: { name: null, line1: '266D William Keeton House', line2: 'Ithaca, NY 14853' }
      }
    ],
    giftCred: 10,
    lists: []
  },
  {
    name: 'Tree Burr',
    phone: '374-943-7593',
    email: 'balt@more.com',
    pw: '4',
    startOfMem: '1/6/2010',
    shipping: [
      { name: 'Tree Burr', line1: '266D William Keeton House', line2: 'Ithaca, NY 14853' }
    ],
    billing: [
      {
        name: 'Tree Burr', cardNum: 123445677890, exp: '12/25',
        address: { name: null, line1: '123 Four Ave', line2: 'Brooklyn, NY 90203' }
      }
    ],
    giftCred: 0,
    lists: []
  },
  {
    name: 'Just In',
    phone: '829-122-4230',
    email: 'bull@city.com',
    pw: '5',
    startOfMem: '4/30/1999',
    shipping: [
      { name: 'Just In', line1: '266D William Keeton House', line2: 'Ithaca, NY 14853' }
    ],
    billing: [
      {
        name: 'Rah Yan', cardNum: 123445677890, exp: '12/25',
        address: { name: null, line1: '266D William Keeton House', line2: 'Ithaca, NY 14853' }
      }
    ],
    giftCred: 0,
    lists: []
  }
];

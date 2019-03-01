import { List } from './profile/list';
import { PRODUCTS } from './mock-products';

export const LISTS: List[] = [
    {
        name: 'Friendsgiving',
        products: [PRODUCTS[0], PRODUCTS[5], PRODUCTS[8]]

    },
    {
        name: 'Monthly Orders',
        products: [PRODUCTS[1]]
    },
    {
        name: 'Birthday',
        products: [PRODUCTS[2]]
    }
];


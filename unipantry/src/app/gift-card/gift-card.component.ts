import { Component, OnInit } from '@angular/core';
import { LoggedInLandingNavComponent } from '../logged-in-landing-nav/logged-in-landing-nav.component';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-gift-card',
  templateUrl: './gift-card.component.html',
  styleUrls: ['./gift-card.component.css']
})
export class GiftCardComponent implements OnInit {

  selectedCard: Product;

  constructor(private productService: ProductService, private nav: LoggedInLandingNavComponent) { }

  ngOnInit() {
  }

  onSelect(amount: number): void {
    if (amount !== 0) {
      this.selectedCard = <Product>{
        name: 'gift card',
        weight: 'Electronic Delivery',
        price: amount,
        oldPrice: 0,
        allergens: 'N/A',
        ingredients: 'N/A',
        src: 'https://cdn.shopify.com/s/files/1/2208/6477/products/' +
          'GC_Blank_Image_d8b27814-e00b-48d7-9844-c0cb8ca464cb_2000x.png?v=1526936252',
        category: 'N/A',
        promotion: 'N/A'
      };
      this.productService.setSelectedProduct(this.selectedCard);
    } else {
      const otherAmount = (document.getElementById('other-amount') as any).value;
    }
  }

  addToCart() {
    if (this.selectedCard) {
      this.nav.addToCart(this.selectedCard, 1);
    }
    this.selectedCard = null;
  }
}

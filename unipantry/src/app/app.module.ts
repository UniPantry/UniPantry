import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingCarouselComponent } from './landing/landing-carousel.component';
import { BrowseAllComponent } from './landing/landing-browse-all.component';
import { CardCarousel1Component } from './card-carousel/card-carousel-1.component';
import { CardCarousel2Component } from './card-carousel/card-carousel-2.component';
import { CardCarousel3Component } from './card-carousel/card-carousel-3.component';
import { FooterComponent } from './footer/footer.component';
import { PaywallModalComponent } from './paywall-modal/paywall-modal.component';
import * as $ from 'jquery';
import { LoggedInLandingComponent } from './logged-in-landing/logged-in-landing.component';
import { LoggedInBrowseAllComponent } from './logged-in-landing/logged-in-browse-all.component';
import { BrowseComponent } from './browse/browse.component';
import { LoggedInCardCarousel1Component } from './logged-in-card-carousel/logged-in-card-carousel-1.component';
import { LoggedInCardCarousel2Component } from './logged-in-card-carousel/logged-in-card-carousel-2.component';
import { LoggedInCardCarousel3Component } from './logged-in-card-carousel/logged-in-card-carousel-3.component';
import { LoggedInLandingNavComponent } from './logged-in-landing-nav/logged-in-landing-nav.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AboutComponent } from './about/about.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { FormsModule } from '@angular/forms';
import { OnlyNumberDirective } from './onlynumber';
import { ProfileComponent } from './profile/profile.component';
import { AccountDetailsComponent } from './profile/account-details/account-details.component';
import { OrderHistoryComponent } from './profile/order-history/order-history.component';
import { PaymentMethodsComponent } from './profile/payment-methods/payment-methods.component';
import { ShippingAddressesComponent } from './profile/shipping-addresses/shipping-addresses.component';
import { NavComponent } from './nav/nav.component';
import { ListsComponent } from './lists/lists.component';
import { ListsCarouselComponent } from './lists-carousel/lists-carousel.component';
import { ListSelectedComponent } from './list-selected/list-selected.component';
import { ProductService } from './product.service';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { CartCarouselComponent } from './cart/cart-carousel/cart-carousel.component';
import { ReferFriendComponent } from './refer-friend/refer-friend.component';
import { CartProductModalComponent } from './cart/cart-product-modal/cart-product-modal.component';
import { GiftCardComponent } from './gift-card/gift-card.component';
import { ContactComponent } from './profile/contact/contact.component';
import { GiftCreditComponent } from './profile/gift-credit/gift-credit.component';
import { AccountService } from './profile/account.service';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { SignupComponent } from './onboarding/signup/signup.component';
import { PaymentComponent } from './onboarding/payment/payment.component';
import { ShippingComponent } from './onboarding/shipping/shipping.component';
import { LoginComponent } from './onboarding/login/login.component';
import { ConfirmComponent } from './onboarding/confirm/confirm.component';
import { OnboardingNavComponent } from './onboarding/onboarding-nav/onboarding-nav.component';
import { FormDataService } from './onboarding/form-data.service';
import { EqualValidator } from './onboarding/equal-validator.directive';
import { RequestComponent } from './onboarding/request/request.component';
import { CompleteRequestComponent } from './onboarding/request/complete-request/complete-request.component';
import { WelcomeComponent } from './onboarding/welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { AddNewAddressComponent } from './profile/shipping-addresses/add-new-address/add-new-address.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LandingCarouselComponent,
    BrowseAllComponent,
    CardCarousel1Component,
    CardCarousel2Component,
    CardCarousel3Component,
    FooterComponent,
    PaywallModalComponent,
    LoggedInLandingComponent,
    LoggedInBrowseAllComponent,
    BrowseComponent,
    LoggedInCardCarousel1Component,
    LoggedInCardCarousel2Component,
    LoggedInCardCarousel3Component,
    LoggedInLandingNavComponent,
    ProductsComponent,
    ProductDetailComponent,
    AboutComponent,
    TypeaheadComponent,
    OnlyNumberDirective,
    ProfileComponent,
    AccountDetailsComponent,
    OrderHistoryComponent,
    PaymentMethodsComponent,
    ShippingAddressesComponent,
    NavComponent,
    ListsComponent,
    ListsCarouselComponent,
    ListSelectedComponent,
    CartComponent,
    CartCarouselComponent,
    ReferFriendComponent,
    CartProductModalComponent,
    GiftCardComponent,
    ContactComponent,
    GiftCreditComponent,
    OnboardingComponent,
    SignupComponent,
    PaymentComponent,
    ShippingComponent,
    LoginComponent,
    ConfirmComponent,
    OnboardingNavComponent,
    EqualValidator,
    RequestComponent,
    CompleteRequestComponent,
    WelcomeComponent,
    AddNewAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoggedInLandingNavComponent,
    AppComponent,
    ProductService,
    CartService,
    AccountService,
    FormDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInLandingComponent } from './logged-in-landing/logged-in-landing.component';
import { LandingComponent } from './landing/landing.component';
import { BrowseComponent } from './browse/browse.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { ListsComponent } from './lists/lists.component';
import { CartComponent } from './cart/cart.component';
import { ReferFriendComponent } from './refer-friend/refer-friend.component';
import { GiftCardComponent } from './gift-card/gift-card.component';
import { SignupComponent } from './onboarding/signup/signup.component';
import { ShippingComponent } from './onboarding/shipping/shipping.component';
import { PaymentComponent } from './onboarding/payment/payment.component';
import { ConfirmComponent } from './onboarding/confirm/confirm.component';
import { LoginComponent } from './onboarding/login/login.component';
import { RequestComponent } from './onboarding/request/request.component';
import { CompleteRequestComponent } from './onboarding/request/complete-request/complete-request.component';
import { WelcomeComponent } from './onboarding/welcome/welcome.component';
import { AddNewAddressComponent } from './profile/shipping-addresses/add-new-address/add-new-address.component';

const routes: Routes = [
  { path: '', redirectTo: '/logged-out', pathMatch: 'full' },
  { path: 'logged-out', component: LandingComponent },
  { path: 'logged-in', component: LoggedInLandingComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'lists', component: ListsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'refer-friend', component: ReferFriendComponent },
  { path: 'gift-card', component: GiftCardComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'confirm', component: ConfirmComponent },
  { path: 'login', component: LoginComponent },
  { path: 'request', component: RequestComponent },
  { path: 'complete-request', component: CompleteRequestComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'add-new-address', component: AddNewAddressComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

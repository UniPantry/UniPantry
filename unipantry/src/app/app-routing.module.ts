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

const routes: Routes = [
  { path: '', redirectTo: '/logged-out', pathMatch: 'full' },
  { path: 'logged-out', component: LandingComponent },
  { path: 'logged-in', component: LoggedInLandingComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'lists', component: ListsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'refer-friend', component: ReferFriendComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Router } from '@angular/router';

const categories = ['Groceries', 'Produce', 'Meat & Fish', 'Bakery', 'Dairy & Eggs', 'Beverages', 'Snacks', 'Packaged Foods',
  'Frozen Foods', 'Baking Supplies', 'Specialty & Allergy-Friendly', 'Personal Care', 'Hygiene', 'Health', 'Paper Goods',
  'Cleaning Supplies', 'Laundry Supplies'];

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.css'],
  providers: [NgbTypeaheadConfig]
})
export class TypeaheadComponent {

  router: Router;

  public model: any;

  constructor(config: NgbTypeaheadConfig, router: Router) {
    // customize default values of typeaheads used by this component tree
    config.showHint = true;
    this.router = router;
  }

  route(event: KeyboardEvent) {
    if (event.charCode === 13) {
      const query = (document.getElementById('nav-search') as any).value;
      this.router.navigateByUrl('/browse');
    }
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 1 ? []
        : categories.filter(v => v.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10))
    )
}

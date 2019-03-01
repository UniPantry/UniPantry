import { Injectable } from '@angular/core';
import { Account } from './account';
import { ACCOUNTS } from './mock-accounts';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  currAcc: Account;

  email: string = 'johnny@boy.com';
  pw: string = '2';

  getAccount(): Observable<Account> {
    if (!this.currAcc) {
      const match = ACCOUNTS.filter(acc => (this.email === acc.email && this.pw === acc.pw));
      this.currAcc = match[0];
    }
    return of(this.currAcc);
  }

  constructor() { }
}

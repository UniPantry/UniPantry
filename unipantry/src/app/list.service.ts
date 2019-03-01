import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { List } from './profile/list';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  selectedLists = <List[]>[];

  getSelectedLists(): Observable<List[]> {
    return of(this.selectedLists);
  }

  setSelectedLists(lists: List[]) {
    this.selectedLists = lists;
  }

  constructor() { }
}

import { Component, OnInit, OnChanges } from '@angular/core';
import { AccountService } from '../profile/account.service';
import { Account } from '../profile/account';
import { List } from '../profile/list';
import { ListService } from '../list.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit, OnChanges {

  account: Account;

  selectedLists: List[];

  new = false;

  constructor(private accountService: AccountService, private listService: ListService) {
    accountService.getAccount().subscribe(account => this.account = account);
   }

  ngOnInit() {
    this.selectLists('all');
  }

  ngOnChanges() {
    this.selectLists('all');
  }

  selectLists(query: string) {
    let matches = <List[]>[];
    if (query === 'all') {
      matches = this.account.lists.slice();
    } else {
      this.account.lists.forEach(function (list) {
        if (list.name === query) {
          matches.push(list);
        }
      });
    }
    this.selectedLists = matches.slice();
    this.listService.setSelectedLists(this.selectedLists);
  }

  deleteList(list: List) {
    const index = this.account.lists.indexOf(list);
    this.account.lists.splice(index, 1);
    this.selectLists('all');
  }

  makeNewList() {
    this.new = true;
  }

  route(event: KeyboardEvent) {
    if (event.charCode === 13) {
      const listName = (event as any).path[0].value;
      if (listName.length > 0) {
        this.account.lists.push({ name: listName, products: [] });
        this.new = false;
        this.selectLists('all');
      }
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  accCollapse = false;
  ordCollapse = true;

  onSelect() {

  }

  getAccount() {
    this.ordCollapse = true;
    this.accCollapse = false;
  }

  getOrder() {
    this.ordCollapse = false;
    this.accCollapse = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
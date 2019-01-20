import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  accCollapse = false;
  ordCollapse = true;
  giftCollapse = true;
  contactCollapse = true;

  onSelect() {

  }

  getAccount() {
    this.ordCollapse = true;
    this.accCollapse = false;
    this.giftCollapse = true;
    this.contactCollapse = true;

    document.getElementById('account').style.color = '#0BCDB2';
    document.getElementById('order').style.color = 'black';
    document.getElementById('gifty').style.color = 'black';
    document.getElementById('contact').style.color = 'black';
  }

  getOrder() {
    this.ordCollapse = false;
    this.accCollapse = true;
    this.giftCollapse = true;
    this.contactCollapse = true;

    document.getElementById('account').style.color = 'black';
    document.getElementById('order').style.color = '#0BCDB2';
    document.getElementById('gifty').style.color = 'black';
    document.getElementById('contact').style.color = 'black';
  }

<<<<<<< HEAD
  getGift(){
=======
  getGift() {
>>>>>>> Johnathan-patch-2
    this.ordCollapse = true;
    this.accCollapse = true;
    this.giftCollapse = false;
    this.contactCollapse = true;

    document.getElementById('account').style.color = 'black';
    document.getElementById('order').style.color = 'black';
    document.getElementById('gifty').style.color = '#0BCDB2';
    document.getElementById('contact').style.color = 'black';
  }

<<<<<<< HEAD
  getContact(){
=======
  getContact() {
>>>>>>> Johnathan-patch-2
    this.ordCollapse = true;
    this.accCollapse = true;
    this.giftCollapse = true;
    this.contactCollapse = false;

    document.getElementById('account').style.color = 'black';
    document.getElementById('order').style.color = 'black';
    document.getElementById('gifty').style.color = 'black';
    document.getElementById('contact').style.color = '#0BCDB2';
  }

  constructor() { }

  ngOnInit() {
  }

}

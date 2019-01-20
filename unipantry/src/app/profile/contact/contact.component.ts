import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

<<<<<<< HEAD
  submitButton = "SUBMIT";

  submit() {
    this.submitButton = "DONE";
=======
  submitButton = 'SUBMIT';

  submit() {
    this.submitButton = 'DONE';
>>>>>>> Johnathan-patch-2
  }

  constructor() { }

  ngOnInit() {
  }

}

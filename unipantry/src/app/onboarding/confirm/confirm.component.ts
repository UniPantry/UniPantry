import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormData } from '../formData.model';
import { FormDataService } from '../form-data.service';
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  @Input() formData: FormData;
  isFormValid = false;

  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
    this.isFormValid = this.formDataService.isFormValid();
  }
  submit() {


    alert('Excellent Job!');
    this.formData = this.formDataService.resetFormData();
    this.isFormValid = false;

  }
  edit1() {

    // Navigate to the personal page
    this.router.navigate(['/signup']);

  }
  edit2() {

    // Navigate to the personal page
    this.router.navigate(['/shipping']);

  }
  edit3() {

    // Navigate to the personal page
    this.router.navigate(['/payment']);

  }
}
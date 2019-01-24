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
  checked = false;

  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
    this.isFormValid = this.formDataService.isFormValid();
  }
  submit() {
    this.formData = this.formDataService.resetFormData();
    this.isFormValid = false;
  }

  check() {
    if (!this.checked) {
      this.checked = true;
    } else {
      this.checked = false;
    }
  }
}

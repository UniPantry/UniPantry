import { Component, OnInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Signup } from '../formData.model';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, AfterViewChecked {
  signup: Signup;
  form: any;
  availableZipcodes = ['14850', '14853'];

  constructor(private router: Router, private formDataService: FormDataService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.signup = this.formDataService.getSignup();
  }

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }

    this.formDataService.setSignup(this.signup);
    return true;
  }

  goToNext(form: any) {
    if (this.save(form)) {
      // Navigate to the work page
      this.router.navigate(['/shipping']);
    }
  }

  available(zip) {
    if (zip.value) {
      if (zip.value.toString().length === 5) {
        if (this.availableZipcodes.includes(zip.value)) {
          zip.control.setErrors(null);
          return true;
        }
        zip.control.setErrors({ available: false });
        return false;
      }
    }
    return -1;
  }

  onSubmit() {}
}

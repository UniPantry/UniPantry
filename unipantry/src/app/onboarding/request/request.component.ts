import { Component, OnInit } from '@angular/core';
import { Request } from '../formData.model';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  request = new Request();

  constructor(private formDataService: FormDataService) { }

  ngOnInit() {
  }

}

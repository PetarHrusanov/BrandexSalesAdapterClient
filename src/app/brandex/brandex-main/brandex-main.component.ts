import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, FormControl } from "@angular/forms";

import { FormGroup, FormBuilder } from 'ngx-strongly-typed-forms';

import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Validators } from '@angular/forms';

import { SalesInputFormModel } from 'src/app/shared/models/inputSales.model';

@Component({
  selector: 'app-brandex-main',
  templateUrl: './brandex-main.component.html',
  styleUrls: ['./brandex-main.component.css']
})

export class BrandexMainComponent implements OnInit {
  form: FormGroup<SalesInputFormModel>;

  constructor(
    public fb: FormBuilder,
    private http: HttpClient
  ) {
    this.form = this.fb.group<SalesInputFormModel>({
      date: '',
      imageFile: new File([], ".xlxs")
    })
  }

  ngOnInit() {
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files![0];
    this.form.patchValue({
      imageFile: file
    });
    // this.form.get('avatar').updateValueAndValidity()
  }

  submitForm() {

    let formData: FormData;
    formData = new FormData();

    var dateValue = this.form.value.date;
    var fileValue = this.form.value.imageFile;

    formData.append("Date", dateValue);
    formData.append("ImageFile", fileValue);

   
    console.log(formData.get("Date"));
    console.log(formData.get("ImageFile"));

    // without options
    this.http.post('http://localhost:15001/brandex/import/', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )

  }

}
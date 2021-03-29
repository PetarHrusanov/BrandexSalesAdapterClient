import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/cars/cars.service';
import { Router } from '@angular/router';
import { StatisticsService } from '../statistics/statistics.service';
import { DateFormModel } from './date.model';
import { FormGroup, FormBuilder } from 'ngx-strongly-typed-forms';
import { Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { SalesRegionDateInputModel } from './regiond.model';
import { Region } from 'src/app/sales/models/region.model';
import { SalesService } from 'src/app/sales/sales.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dateForm: FormGroup<DateFormModel>;
  regionForm: FormGroup<SalesRegionDateInputModel>;
  regions: Array<Region>;

  constructor(
    private fb: FormBuilder,
    private salesService: SalesService, 
    public toastr: ToastrService,
    private router: Router) {
      this.salesService.getRegions().subscribe(res => {
        this.regions = res;
      })
     }

  

  ngOnInit(): void {
    this.dateForm = this.fb.group<DateFormModel>({
      date: [null, Validators.required],
    });
    this.regionForm = this.fb.group<SalesRegionDateInputModel>({
      regionId:[null, Validators.required],
      date: [null, Validators.required]
    });


  }
  
  login():void{};

  // drugAction():void{};

  export() {
    this.salesService.byCity(this.regionForm.value).subscribe(res => {
      this.router.navigate(['/']);
      // this.toastr.success("Success")
    })
  }


  // goToCars(id) {
  //   this.router.navigate(['cars'], { queryParams: { category: id } });
  // }
}

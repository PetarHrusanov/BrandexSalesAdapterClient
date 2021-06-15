import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Region } from './models/region.model';

// Excel Logic
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

import { SalesRegionDateInputModel } from 'src/app/shared/home/regiond.model';
// import { Category } from './category.model';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  //   carsPath: string = environment.dealersApiUrl + 'carads/';
  //   carPathWithoutSlash  = this.carsPath.slice(0, -1);

  constructor(private http: HttpClient) { }



  getRegions(): Observable<Array<Region>> {
    return this.http.get<Array<Region>>(environment.sales + 'region/getregions');
  }

  byCity(regionForm: SalesRegionDateInputModel): any {

    return this.http.post(environment.sales + "home/bycity/", regionForm, {responseType: 'blob'});
    
  }

  brandexImport(formData: FormData): any {

    return this.http.post(environment.sales + "brandex/import/", formData);

    
  }



  // exportSales(regionForm: RegionFormModel) Observable<Blob> {
  //   return this.http.post<RegionFormModel>(environment.sales + 'bycity', regionForm, { responseType: 'blob' as 'json' }).subscribe(
  //     (response: any) => {
  //       let dataType = response.type;
  //       let binaryData = [];
  //       binaryData.push(response);
  //       let downloadLink = document.createElement('a');
  //       downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, { type: dataType }));
  //       // if (filename)
  //       //     downloadLink.setAttribute('download', filename);
  //       document.body.appendChild(downloadLink);
  //       downloadLink.click();
  //     }

  // }

  //   getUserCars(): Observable<Array<Car>> {
  //     return this.http.get<Array<Car>>(this.carsPath + 'mine');
  //   }

  //   getCar(id: string): Observable<Car> {
  //     return this.http.get<Car>(this.carsPath + id);
  //   }

  //   createCar(car: Car): Observable<Car> {
  //     return this.http.post<Car>(this.carsPath, car);
  //   }

  //   editCar(id: string, car: Car): Observable<Car> {
  //     return this.http.put<Car>(this.carsPath + id, car);
  //   }

  //   deleteCar(id: string) {
  //     return this.http.delete(this.carsPath + id);
  //   }

  //   getCategories(): Observable<Array<Category>> {
  //     return this.http.get<Array<Category>>(this.carsPath + 'categories')
  //   }

  //   search(queryString): Observable<Array<Car>> {
  //     return this.http.get<Array<Car>>(this.carPathWithoutSlash + queryString)
  //   }

  //   sort(queryString): Observable<Array<Car>> {
  //     return this.http.get<Array<Car>>(this.carPathWithoutSlash + queryString)
  //   }

  //   changeAvailability(id): Observable<boolean> {
  //     return this.http.put<boolean>(this.carsPath + id + '/ChangeAvailability', {})
  //   }
}

// function host(endpoint){
//   return `https://api.backendless.com/B310B7B5-EF82-9FF8-FF8C-D2DEEF6C2A00/B8CA48CC-1F3F-428A-BA50-33658460793F/${endpoint}`;
// }

// const endpoints = {
//   REGISTER: 'users/register',
//   LOGIN: 'users/login',
//   LOGOUT: 'users/logout',
//   SHOES: 'data/shoes',
//   SHOES_BY_ID: 'data/shoes/'
// }

// export async function register(email, password){

//   const result = await (await fetch(host(endpoints.REGISTER),{
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//           email,
//           password
//       })
//   })).json();


//   return result;
// }

// export async function login(email, password){
//   const result = await (await fetch(host(endpoints.LOGIN),{
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//           login: email,
//           password
//       })
//   })).json();
//   localStorage.setItem('userToken', result['user-token']);
//   localStorage.setItem('email', result.email);
//   localStorage.setItem('userId', result.objectId);

//   return result;
// }


// export async function logout(){
//   const token = localStorage.getItem('userToken');
//   if(!token){
//       throw new Error('User is not logged in');
//   }

//   localStorage.removeItem('userToken');

//   const result = fetch(host(endpoints.LOGOUT),{
//       method: 'GET',
//       headers: {
//           'user-token': token

//       }
//   });

//   return result;

// }

// export async function create(shoe){
//   const token = localStorage.getItem('userToken');
//   if(!token){
//       throw new Error('User is not logged in');
//   }

//   const result = (await fetch(host(endpoints.SHOES),{
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json',
//           'user-token': token,
//       },
//       body: JSON.stringify(shoe)
//   })).json();

//   return result;
// }

// export async function getAll(){

//   let result;

//   const token = localStorage.getItem('userToken');
//   if(!token){
//       throw new Error('User is not logged in');
//   }

//   result =  (await fetch(host(endpoints.SHOES),{
//       headers: {
//           'user-token': token
//       }
//   })).json();

//   return result;

// }

// export async function getById(id){
//   beginRequest();
//   const token = localStorage.getItem('userToken');
//   if(!token){
//       throw new Error('User is not logged in');
//   }
//   const result = (await fetch(host(endpoints.SHOES_BY_ID+id),{
//       headers: {
//           'user-token': token
//       }
//   })).json();

//   endRequest();

//   return result;
// }



// export async function edit(id){
//   beginRequest();
//   const token = localStorage.getItem('userToken');
//   if(!token){
//       throw new Error('User is not logged in');
//   }
//   const result =  (await fetch(host(endpoints.SHOES_BY_ID+id),{
//       method: 'PUT',
//       headers: {
//           'Content-Type': 'application/json',
//           'user-token': token,
//       },
//       // body: JSON.stringify(updatedProps)
//   })).json();

//   endRequest();

//   return result;
// }

// export async function deleteItem(id){
//   const token = localStorage.getItem('userToken');
//   if(!token){
//       throw new Error('User is not logged in');
//   }
//   const result = (await fetch(host(endpoints.SHOES_BY_ID+id),{
//       method: 'DELETE',
//       headers: {
//           'Content-Type': 'application/json',
//           'user-token': token,
//       },
//       // body: JSON.stringify(updatedProps)
//   })).json();

//   return result;
// }


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthProvider } from '../auth/auth';
/*
  Generated class for the ParentServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ParentServiceProvider {
  baseURL = 'http://localhost:3000/api';


  constructor(public http: HttpClient,public auth:AuthProvider) {
    console.log('Hello ParentServiceProvider Provider');
  }

  getChildren() {

    return this.http.get(`${this.baseURL}/parents/${this.auth.getToken()}/children`);
  }

  getDailyTable(id) {
    let currentDate = new Date().toISOString();
    const currentDateISO = currentDate.substr(0,currentDate.indexOf('T'));
    return this.http.get(`${this.baseURL}/daily-table/getDailyTable/${id}/${currentDateISO}`);
  }


}

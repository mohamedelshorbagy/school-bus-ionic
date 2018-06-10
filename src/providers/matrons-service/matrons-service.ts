import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
  Generated class for the MatronsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MatronsServiceProvider {
  baseURL = 'http://46.101.1.65:3654/api';

  constructor(public http: HttpClient) {
    console.log('Hello MatronsServiceProvider Provider');
  }


  getAttendanceTable() {
    return this.http.get(`${this.baseURL}/matrons/getChildren/12`);
  }

  submitAttendanceList(attendanceList) {
    return this.http.post(`${this.baseURL}/attendance/create`, {
      children: attendanceList
    });
  }


}

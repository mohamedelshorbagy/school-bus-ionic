import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuthProvider} from '../auth/auth';

/*
  Generated class for the MatronsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MatronsServiceProvider {
  baseURL = 'http://localhost:3000/api';

  constructor(public http: HttpClient, private auth: AuthProvider) {
    console.log('Hello MatronsServiceProvider Provider');
  }


  getAttendanceTable() {
    return this.http.get(`${this.baseURL}/matrons/getChildren/${this.auth.getLineNumber()}`);
  }

  submitAttendanceList(attendanceList) {
    return this.http.post(`${this.baseURL}/attendance/create`, {
      children: attendanceList
    });
  }


}

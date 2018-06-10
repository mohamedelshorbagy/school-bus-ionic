import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  baseURL = 'http://46.101.1.65:3654/api';

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }


  login(code) {
    if (code.length === 5) {
      // Case Of Driver
      return this.loginDriver(code);
    } else if (code.length === 6) {
      // Case Of Parent
      return this.loginParent(code);

    } else if (code.length === 7) {
      // Case Of Matron
      return this.loginMatron(code);

    } else if (code.length === 8) {
      // Case Of Supervisor
      return this.loginSupervisor(code);

    }
  }


  loginMatron(code) {
    return this.http.get(`${this.baseURL}/matrons/${code}`);
  }


  loginDriver(code) {
    return this.http.get(`${this.baseURL}/drivers/${code}`);
  }


  loginParent(code) {
    return this.http.get(`${this.baseURL}/parents/${code}`);
  }


  loginSupervisor(code) {
    return this.http.get(`${this.baseURL}/supervisors/${code}/getSuper`);
  }


  storeToken(token, code, type, line = null) {
    if (type === 'parent') {


      localStorage.setItem('token', token);
      localStorage.setItem('type', type);
      localStorage.setItem('code', code)
    } else if (type === 'matrons') {
      // Case Of Matron
      localStorage.setItem('token', token);
      localStorage.setItem('type', type);
      localStorage.setItem('line', line);
      localStorage.setItem('code', code)
    } else if (type === 'driver') {
      localStorage.setItem('token', token);
      localStorage.setItem('type', type);
      localStorage.setItem('code', code)

    } else if (type === 'supervisor') {
      localStorage.setItem('token', token);
      localStorage.setItem('type', type);
      localStorage.setItem('code', code)
    }
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getType() {
    return localStorage.getItem('type');
  }

  getLineNumber() {
    return localStorage.getItem('line');
  }

  removeToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('type');
    localStorage.removeItem('code');
    if (this.getType() === 'matrons') {
      localStorage.removeItem('line');
    }

  }

  getParentProfile() {
    return this.http.get(`${this.baseURL}/parents/${this.getCode()}`)
  }

  getSuperProfile() {
    return this.http.get(`${this.baseURL}/supervisors/${this.getCode()}/getSuper`)
  }

  getMatronProfile() {
    return this.http.get(`${this.baseURL}/matrons/${this.getCode()}`)

  }

  getDriverProfile() {
    return this.http.get(`${this.baseURL}/drivers/${this.getCode()}`)
  }


  getCode() {
    return localStorage.getItem('code');
  }
}

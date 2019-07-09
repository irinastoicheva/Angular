import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginModel} from '../models/login.model';
import {RegisterModel} from '../models/register.model';

const appKey = 'kid_rJLDV1MZB';
const appSecret = '698d3c4260f442c4b340a60c3847a3c1';
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private currentAuthtoken: string;

  constructor(private http: HttpClient) {
  }

  login(loginModel: LoginModel) {
    return this.http.post(loginUrl,
      JSON.stringify(loginModel),
      {
        headers: this.createAuthHeaders('Basic')
      });
  }

  register(registerModel: RegisterModel) {
    return this.http.post(registerUrl,
      JSON.stringify(registerModel),
      {
        headers: this.createAuthHeaders('Basic')
      });
  }

  logout() {
    return this.http.post(logoutUrl, {},
      {
        headers: this.createAuthHeaders('Kinvey')
      });
  }


  checkIfLogged() {
    return this.currentAuthtoken === localStorage.getItem('authtoken');
  }

  get authtoken() {
    return this.currentAuthtoken;
  }

  set authtoken(value: string) {
    this.currentAuthtoken = value;
  }

  private createAuthHeaders(type: string) {
    if (type === 'Basic') {
      return new HttpHeaders({
        Authorization: `Basic ${btoa(`${appKey}:${appSecret}`)}`,
        'Content-Type': `applicanion/json`
      });
    } else {
      return new HttpHeaders({
        Authorization: `Kinvey ${localStorage.getItem('authtoken')}`,
        'Content-Type': `applicanion/json`
      });
    }
  }
}

import {Component, OnInit} from '@angular/core';
import {LoginModel} from '../../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: LoginModel;
  constructor() {
  this.form = new LoginModel('', '');
  }

  ngOnInit() {
  }

}

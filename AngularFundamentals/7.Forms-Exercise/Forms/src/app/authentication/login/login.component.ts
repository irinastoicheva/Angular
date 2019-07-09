import {Component, OnInit} from '@angular/core';
import {LoginModel} from '../../models/login.model';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: LoginModel;
  loginFailed: boolean;
  errorMessage: string;

  constructor(private authService: AuthenticationService,
              private router: Router) {
    this.form = new LoginModel('', '');
  }

  ngOnInit() {
  }

  login() {
    // console.log(this.form);
    this.authService.login(this.form)
      .subscribe(data => {
          this.successfulLogin(data);
        },
        err => {
          this.loginFailed = true;
          this.errorMessage = err.error.description;
        });
  }

  successfulLogin(data) {
    this.authService.authtoken = data._kmd.authtoken;
    localStorage.setItem('authtoken', data._kmd.authtoken);
    localStorage.setItem('username', data.username);
    this.router.navigate(['/home']);
  }
}

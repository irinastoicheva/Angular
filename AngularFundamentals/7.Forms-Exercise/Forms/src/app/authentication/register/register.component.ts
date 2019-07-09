import {Component, OnInit} from '@angular/core';
import {RegisterModel} from '../../models/register.model';
import {FormsModule} from '@angular/forms';
import {AuthenticationService} from '../authentication.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: RegisterModel;
  loginFailed: boolean;
  errMessage: string;

  constructor(private authService: AuthenticationService,
              private router: Router) {
    this.form = new RegisterModel('', '', '',
      '', '', '', 18);
  }

  ngOnInit() {
  }

  registration() {
    delete this.form.confirmPassword;
    this.authService.register(this.form)
      .subscribe(
        data => {
          this.router.navigate(['/login']);
        },
        err => {
          this.loginFailed = true;
          this.errMessage = err.error.description;
        });
  }

  get diagnostic() {}
}



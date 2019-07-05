import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-user-password',
  templateUrl: './user-password.component.html',
  styleUrls: ['./user-password.component.css']
})
export class UserPasswordComponent implements OnInit {

  form = new FormGroup({
    currentPass: new FormControl('', [Validators.required]),
    newPass: new FormControl(''),
    confirmPass: new FormControl('')
  });

  constructor() {
  }

  log() {
    console.log(this.form.value);
  }

  ngOnInit() {
  }

}

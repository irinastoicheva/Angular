import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication/authentication.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private authServise: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authServise.logout()
      .subscribe(data => {
        localStorage.clear();
        this.authServise.authtoken = '';
        this.router.navigate(['/login']);
      });
  }
}

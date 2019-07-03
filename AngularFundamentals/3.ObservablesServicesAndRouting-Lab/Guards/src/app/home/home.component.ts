import { Component, OnInit } from '@angular/core';
import {GitHubProfile} from './gitHubProfile';
import {HomeService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
profile: GitHubProfile;
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService
      .GetProfile('irinastoicheva')
      .subscribe(data => this.profile = data);
  }

}

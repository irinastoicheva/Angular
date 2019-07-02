import { Component, OnInit } from '@angular/core';
import {GitHubProfile} from "./gitHubProfile";
import {HomeServiceComponent} from "../home-service/home-service.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
profile: GitHubProfile;
  constructor(private homeService: HomeServiceComponent) { }

  ngOnInit() {
    this.homeService
      .GetProfile('irinastoicheva')
      .subscribe(data => this.profile = data);
  }

}

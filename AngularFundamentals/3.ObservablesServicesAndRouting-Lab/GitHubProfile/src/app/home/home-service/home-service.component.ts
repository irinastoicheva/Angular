import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GitHubProfile} from "../home/gitHubProfile";

@Component({
  selector: 'app-home-service',
  templateUrl: './home-service.component.html',
  styleUrls: ['./home-service.component.css']
})
@Injectable()
export class HomeServiceComponent implements OnInit {

  constructor(private httpClient: HttpClient) {
  }

  GetProfile(profile: string) {
    const url = `https://api.github.com/users/${profile}`;
    return this.httpClient.get<GitHubProfile>(url)
  }

  ngOnInit() {
  }

}

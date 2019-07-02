import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GitHubProfile} from "../home/gitHubProfile";

@Injectable()
export class HomeServiceComponent {

  constructor(private httpClient: HttpClient) {
  }

  GetProfile(profile: string) {
    const url = `https://api.github.com/users/${profile}`;
    return this.httpClient.get<GitHubProfile>(url)
  }

}

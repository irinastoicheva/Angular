import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GitHubProfile} from './gitHubProfile';

@Injectable()
export class HomeService {

  constructor(private httpClient: HttpClient) {
  }

  GetProfile(profile: string) {
    const url = `https://api.github.com/users/${profile}`;
    return this.httpClient.get<GitHubProfile>(url);
  }

}

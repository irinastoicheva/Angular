import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

const apiKey = 'f4311e701b6d8b6b289702a04070f264';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  path = 'https://api.themoviedb.org/3/';
  authentication = '&api_key=';

  popular = 'discover/movie?sort_by=popularity.desc';
  theaters = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22';

  constructor(private httpClient: HttpClient) {
  }

  getPopular() {
    return this.httpClient.get(this.path + this.popular + this.authentication + apiKey)
  }

  getTheaters() {
    return this.httpClient.get(this.path + this.theaters + this.authentication + apiKey)
  }
}

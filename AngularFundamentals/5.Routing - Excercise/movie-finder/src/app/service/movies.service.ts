import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const apiKey = 'f4311e701b6d8b6b289702a04070f264';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  path = 'https://api.themoviedb.org/3/';
  authentication = '&api_key=';

  popular = 'discover/movie?sort_by=popularity.desc';
  theaters = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22';
  kidsMovies = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
  drama = 'discover/movie?certification_country=US&certification.lte=R&sort_by=revenue.desc&with_cast=3896';
  movie = 'movie/';
  movieAuth = '?api_key=';

  constructor(private httpClient: HttpClient) {
  }

  // tslint:disable-next-line:ban-types
  getPopular(): Observable<Object> {
    // tslint:disable-next-line:ban-types
    return this.httpClient.get<Object>(this.path + this.popular + this.authentication + apiKey);
  }

  // tslint:disable-next-line:ban-types
  getTheaters(): Observable<Object> {
    // tslint:disable-next-line:ban-types
    return this.httpClient.get<Object>(this.path + this.theaters + this.authentication + apiKey);
  }

  // tslint:disable-next-line:ban-types
  getKidsMovies(): Observable<Object> {
    // tslint:disable-next-line:ban-types
    return this.httpClient.get<Object>(`${this.path}${this.kidsMovies}${this.authentication}${apiKey}`);
  }

  // tslint:disable-next-line:ban-types
  getDrama(): Observable<Object> {
    // tslint:disable-next-line:ban-types
    return this.httpClient.get<Object>(`${this.path}${this.drama}${this.authentication}${apiKey}`);
  }

  // tslint:disable-next-line:ban-types
  getMovie(id): Observable<Object> {
    // tslint:disable-next-line:ban-types
    return this.httpClient.get<Object>(`${this.path}${this.movie}` + id + `${this.movieAuth}${apiKey}`);
  }

  findAMovie(name) {
    https://api.themoviedb.org/3/search/movie?query=' + name + '&api_key=' + apiKey
    return this.httpClient.get('https://api.themoviedb.org/3/search/movie?query=' + name + '&api_key=' + apiKey);
  }
}

import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  popular: Object;
  // tslint:disable-next-line:ban-types
  theaters: Object;
  // tslint:disable-next-line:ban-types
  kidsMovies: Object;
  // tslint:disable-next-line:ban-types
  drama: Object;
  searchResult: any;
  isSearch: boolean;

  constructor(private moviesService: MoviesService) {
  }

  search(name) {
    const value = name.search;
    this.moviesService.findAMovie(value).subscribe(data => {
      this.searchResult = data;
      this.isSearch = true;
      console.log(this.searchResult);
    });
  }

  ngOnInit() {
    this.moviesService.getPopular().subscribe(data => {
      this.popular = data;
      // console.log(this.popular);
    });

    this.moviesService.getTheaters().subscribe(data => {
      this.theaters = data;
      // console.log(this.theaters);
    });

    this.moviesService.getKidsMovies().subscribe(data => {
      this.kidsMovies = data;
      // console.log(this.kidsMovies);
    });

    this.moviesService.getDrama().subscribe(data => {
      this.drama = data;
      // console.log(this.drama);
    });

  }

}

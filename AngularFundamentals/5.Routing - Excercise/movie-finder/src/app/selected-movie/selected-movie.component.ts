import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoviesService} from '../service/movies.service';

@Component({
  selector: 'app-selected-movie',
  templateUrl: './selected-movie.component.html',
  styleUrls: ['./selected-movie.component.css']
})
export class SelectedMovieComponent implements OnInit {
myMovie;
  constructor(private activatedRoute: ActivatedRoute,
              private moviesService: MoviesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const id = params.id;
      this.moviesService.getMovie(id).subscribe(movie => {
        this.myMovie = movie;
      });
    });
  }

}

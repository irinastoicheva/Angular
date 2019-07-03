import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import {MoviesService} from './service/movies.service';
import {HttpClientModule} from '@angular/common/http';
import { SelectedMovieComponent } from './selected-movie/selected-movie.component';
import {RouterModule, Route} from '@angular/router';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    SelectedMovieComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: MoviesComponent},
      { path: 'movie/:id', component: SelectedMovieComponent},
    ]),
    FormsModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { IResult } from '../interfaces/movie';
import { STmdbService } from '../s-tmdb.service';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-adventure',
  imports: [MovieCardComponent],
  templateUrl: './adventure.component.html',
  styleUrl: './adventure.component.css',
})
export class AdventureComponent implements OnInit {
  movieList!: IResult[];
  constructor(private _STmdbService: STmdbService) {}
  ngOnInit(): void {
    this._STmdbService.getMovies(12).subscribe((data) => {
      data.results.forEach((movie) => {
        movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        movie.vote_average = parseFloat(movie.vote_average.toFixed(1));
      });
      this.movieList = data.results;
      console.log(this.movieList);
    });
  }
}

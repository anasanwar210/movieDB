import { Component, OnInit } from '@angular/core';
import { IResult } from '../interfaces/movie';
import { STmdbService } from '../s-tmdb.service';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-horror',
  imports: [MovieCardComponent],
  templateUrl: './horror.component.html',
  styleUrl: './horror.component.css',
})
export class HorrorComponent implements OnInit {
  movieList!: IResult[];
  constructor(private _STmdbService: STmdbService) {}
  ngOnInit(): void {
    this._STmdbService.getMovies(27).subscribe((data) => {
      data.results.forEach((movie) => {
        movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        movie.vote_average = parseFloat(movie.vote_average.toFixed(1));
      });
      this.movieList = data.results;
      console.log(this.movieList);
    });
  }
}

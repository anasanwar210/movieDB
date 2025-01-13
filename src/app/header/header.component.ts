import { AfterViewInit, Component, OnInit } from '@angular/core';
import { STmdbService } from '../s-tmdb.service';
import { IResult } from '../interfaces/movie';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit, AfterViewInit {
  movieList!: IResult[];
  constructor(private _STmdbService: STmdbService) {}
  ngOnInit(): void {
    this._STmdbService.getTrending().subscribe((data) => {
      data.results.forEach((movie) => {
        if (!movie.poster_path.startsWith('https://image.tmdb.org/t/p/w500')) {
          movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        }
      });
      this.movieList = data.results;
    });
  }

  ngAfterViewInit(): void {}
}

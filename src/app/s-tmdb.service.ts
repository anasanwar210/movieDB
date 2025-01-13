import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovieObject } from './interfaces/movie';

@Injectable({
  providedIn: 'root',
})
export class STmdbService {
  private apiUrl: string;
  private apiKey: string;

  constructor(private _HttpClient: HttpClient) {
    this.apiUrl = 'https://api.themoviedb.org/3';
    this.apiKey = '5b2b2b6dddf920e316281b584f620563';
  }

  getMovies(gen: number): Observable<IMovieObject> {
    return this._HttpClient.get<IMovieObject>(
      `${this.apiUrl}/discover/movie?api_key=${this.apiKey}&with_genres=${gen}`
    );
  }

  getTrending(): Observable<IMovieObject> {
    return this._HttpClient.get<IMovieObject>(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${this.apiKey}`
    );
  }

  getPopularMovies() {
    return this._HttpClient.get(
      `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`
    );
  }

  getMovieDetails(movieId: number) {
    return this._HttpClient.get(
      `${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}`
    );
  }

  getGenres() {
    return this._HttpClient.get(
      `${this.apiUrl}/genre/movie/list?api_key=${this.apiKey}`
    );
  }
}

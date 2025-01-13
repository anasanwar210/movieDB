import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TMDBService {
  constructor() {
    const apiKey = '5b2b2b6dddf920e316281b584f620563';
    const baseURL = 'https://api.themoviedb.org/3';
  }
}

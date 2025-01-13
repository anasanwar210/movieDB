import { Component } from '@angular/core';
import { STmdbService } from '../s-tmdb.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private _STmdbService: STmdbService) {}
}

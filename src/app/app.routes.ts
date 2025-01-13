import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActionComponent } from './action/action.component';
import { AdventureComponent } from './adventure/adventure.component';
import { AnimationComponent } from './animation/animation.component';
import { ComedyComponent } from './comedy/comedy.component';
import { DramaComponent } from './drama/drama.component';
import { HorrorComponent } from './horror/horror.component';
import { ScifiComponent } from './scifi/scifi.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'action', component: ActionComponent, title: 'Action' },
  { path: 'adventure', component: AdventureComponent, title: 'Adventure' },
  { path: 'animation', component: AnimationComponent, title: 'Animation' },
  { path: 'comedy', component: ComedyComponent, title: 'Comedy' },
  { path: 'drama', component: DramaComponent, title: 'Drama' },
  { path: 'horror', component: HorrorComponent, title: 'Horror' },
  { path: 'scifi', component: ScifiComponent, title: 'SCIFI' },
];

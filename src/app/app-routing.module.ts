import { MoviePage } from './pages/movie/movie.page';
import { HomePage } from './pages/home/home.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  {
    path: 'movies',
    component: HomePage
  },
  {
    path: 'movie-details/:movieId',
    component: MoviePage
  }
  // {
  //   path: 'movie',
  //   loadChildren: () => import('./pages/home/movie/movie.module').then( m => m.MoviePageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

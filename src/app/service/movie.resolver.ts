import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieDetails } from '../models/movie';
import { MoviesService } from './movies.service';

@Injectable({providedIn: 'root'})
export class MovieResolver implements Resolve<MovieDetails>{
    constructor(
        private movieService: MoviesService
    ){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    MovieDetails | Observable<MovieDetails> | Promise<MovieDetails> {
        const id = route.paramMap.get('movieId');
        console.log(id);
        return this.movieService.getMovie(+id)
        .pipe(
            map(movie => movie)
        )

    }
}

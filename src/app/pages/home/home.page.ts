/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, LoadingController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { data } from 'src/app/models/data';
import { MovieDetails } from 'src/app/models/movie';

import { MoviesService } from './../../service/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infinitScroll: IonInfiniteScroll;
  original$: Observable<data>;
  movies$: Observable<data>;
  errorMessage: string;
  tmdbImage = 'https://image.tmdb.org/t/p';
  constructor(
    private movieService: MoviesService,
    private loadingCtrl: LoadingController
  ) { }
  async ngOnInit() {

    const loader = await this.loadingCtrl.create({
       animated: true,
      spinner: 'circles',
      translucent: true,
      duration: 5000,
      cssClass: 'loader',
    });
    await loader.present()
    setTimeout(async () => {
      setTimeout(async()=>{
        this.movies$ = this.movieService.getMovies(1).pipe(
          map(res => res),
          catchError((err) => {
            this.errorMessage = 'Could\'nt fetch movies$, check your internet settings';
            return err;
          })
        )
        this.original$ = this.movies$;
        await loader.dismiss()
      },1000)
    }, 500)
  }

  searchMovie(event:string){
    console.log(event)
    if(!event){
      this.original$ = this.movies$;
    };
    this.original$ = this.original$.pipe(
      map((values): data => {
        return {
          page: values.page,
          results: values.results.filter(movies => 
            movies.title.toLocaleLowerCase().includes(event.toLocaleLowerCase())),
          total_pages: values.total_pages,
          total_results: values.total_results
        }
      })
    )
  }

  loadMovies(event){
    localStorage.setItem('currentPage', '2');
    const page = this.movieService.pageGet;
    setTimeout(() => {
      this.movies$ = this.movieService.getMovies(page+1).pipe(
        map(res => res)
      );
      this.original$ = this.movies$;
    },2000)
  }

  toggleInfinitScroll(){
    this.infinitScroll.disabled = !this.infinitScroll.disabled;
  }
}

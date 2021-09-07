/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { data } from 'src/app/models/data';

import { MoviesService } from './../../service/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infinitScroll: IonInfiniteScroll;

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
        await loader.dismiss()
      },1000)
    }, 500)
  }

  onChange(event){
    console.log(event);
  }

  loadMovies(event){
    localStorage.setItem('currentPage', '2');
    const page = this.movieService.pageGet;
    setTimeout(() => {
      this.movies$ = this.movieService.getMovies(page+1).pipe(
        map(res => res)
      );
    },2000)
  }

  toggleInfinitScroll(){
    this.infinitScroll.disabled = !this.infinitScroll.disabled;
  }
}

/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Observable } from 'rxjs';
import { data } from 'src/app/models/data';

import { MoviesService } from './../../service/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infinitScroll: IonInfiniteScroll;

  movies: data;
  tmdbImage = 'https://image.tmdb.org/t/p';
  constructor(
    private movieService: MoviesService
  ) { }
  ngOnInit() {
    this.movieService.getMovies(1)
    .subscribe(
      (res: data) => {
        this.movies = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  onChange(event){
    console.log(event);
  }

  loadMovies(event){
    localStorage.setItem('currentPage', '2');
    const page = this.movieService.pageGet;
    if(this.movies.results.length === 1000) {
      this.toggleInfinitScroll();
      return;
    }
    this.movieService.getMovies(page+1)
    .subscribe(
      (res: data) => {
        console.log(res);
        const newMovie: data = {
          page: res.page,
          results: [...this.movies.results, ...res.results],
          total_pages: res.total_pages,
          total_results: res.total_results
        };
        this.movies = newMovie;
        this.movieService.pageSet = res.page;
        setTimeout(() => event.target?.complete(), 500);
      },
      err => {
        console.log(err);
      }
    );
  }

  toggleInfinitScroll(){
    this.infinitScroll.disabled = !this.infinitScroll.disabled;
  }
}

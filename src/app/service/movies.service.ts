/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { MovieDetails } from './../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private basedUrl = 'https://api.themoviedb.org/3';
  private apiKey = environment.apiKey;
  private page = 1;
  constructor(
    private http: HttpClient
  ) { }

  get pageGet() {
    return this.page;
  }

  set pageSet(pageIndex: number) {
    this.page = pageIndex;
  }

  getMovies(page: number): Observable<any>{
    if(page > this.page){
      this.page = page;
      return this.http.get(`${this.basedUrl}/movie/popular?page=${page}&&api_key=${this.apiKey}`);
    }
    return this.http.get(`${this.basedUrl}/movie/popular?page=${page}&&api_key=${this.apiKey}`);
  }

  getMovie(movieId: number): Observable<MovieDetails>{
    return this.http.get<MovieDetails>(`${this.basedUrl}/movie/${movieId}?api_key=${this.apiKey}`);
  }
}

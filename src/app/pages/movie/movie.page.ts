import { MoviesService } from './../../service/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movie, MovieDetails } from 'src/app/models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {
  movie: MovieDetails;
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesService
  ) { }

  ngOnInit() {
    this.movieService.getMovie(+this.activatedRoute.snapshot.paramMap.get('movieId'))
    .subscribe(
      (data: MovieDetails) => {
        this.movie = data;
      },
      err => {console.log(err);}
    );
  }

}

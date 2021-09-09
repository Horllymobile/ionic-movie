import { MoviesService } from './../../service/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MovieDetails } from 'src/app/models/movie';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {
  movie: MovieDetails;
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesService,
    private loadingCtrl: LoadingController
  ) { }

  async ngOnInit() {
    const loader = await this.loadingCtrl.create({
       animated: true,
      message: 'Please wait',
      spinner: 'bubbles'
    });
    await loader.present()
    setTimeout(async () => {
      this.activatedRoute.data.subscribe({
        next: (result) => {
          this.movie = result.movie;
          loader.dismiss().then(() => {
            
          })
        },
        error: (err) => {
          console.log(err);
        },
      })
    }, 1000)
  }

}

import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MovieCardComponent } from './movie-card/movie-card.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    MovieCardComponent
  ]
})
export class ComponentsModule { }

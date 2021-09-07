import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MovieCardComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    MovieCardComponent,
    SearchBarComponent
  ]
})
export class ComponentsModule { }

import { MoviePage } from './pages/movie/movie.page';
import { HomePageModule } from './pages/home/home.module';
import { HomePage } from './pages/home/home.page';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    MoviePage
  ],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HomePageModule,
    HttpClientModule,
    ComponentsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

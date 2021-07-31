import { HomePageModule } from './pages/home/home.module';
import { HomePage } from './pages/home/home.page';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  entryComponents: [
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HomePageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

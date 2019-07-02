import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { HomeServiceComponent } from './home/home-service/home-service.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeServiceComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HomeServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

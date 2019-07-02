import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import {EngineComponent} from './engine/engine.component';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [EngineComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

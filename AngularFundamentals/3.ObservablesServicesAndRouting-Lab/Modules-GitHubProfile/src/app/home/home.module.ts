import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeComponent} from './home.component';
import {HttpClientModule} from '@angular/common/http';
import {HomeService} from './home.service';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [HomeService],
})

export class HomeModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { HomeComponent } from './home/home.component';
import {AppRoutesModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {RegisterModel} from './models/register.model';
import {LoginModel} from './models/login.model';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    RouterModule,
    FormsModule
  ],
  providers: [RegisterModel, LoginModel],
  bootstrap: [AppComponent]
})
export class AppModule { }

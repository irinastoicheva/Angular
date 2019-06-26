import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { GameComponent } from './game/game.component';

import { FormsModule } from '@angular/forms';

import { NewComponentComponent } from './new-component/new-component.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NewComponentComponent,
    GameComponent,
    SubscribeComponent,
  ],
  imports: [
    BrowserModule, FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

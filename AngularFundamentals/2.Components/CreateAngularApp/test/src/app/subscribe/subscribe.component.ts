import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Game} from '../domain/game';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('subGame') subGame: Game;
  @Output() notification = new EventEmitter<string>();

  constructor() {
  }

  showSubscription() {
    console.log(`The ID is ${this.subGame.id}`);
    this.notification.emit('Subscription success');
  }

  ngOnInit() {
  }

}

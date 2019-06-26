import {Component, OnInit} from '@angular/core';
import {Game} from '../domain/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  games: Array<Game>;
  outputName = 'My Name';
  isShown = false;

  constructor() {
    // tslint:disable-next-line:max-line-length
    this.games = [{
      id: 1,
      title: 'First Game',
      image: 'http://investsofia.com/wp-content/uploads/2018/06/computer-course-digital-garage-softuni-sofia.jpg'
    }, {
      id: 2,
      title: 'Second Game',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqj6y42ve8l8ZpHPXo3glrkatx-aZ9GD0f-J3IlCL0OLtaXQhPZQ'
    }];
  }

  showContacts() {
    this.isShown = !this.isShown;
  }

  notifyMe(notification: string) {
    console.log(notification);
  }

  // showName(name) {
  //   console.log(name);
  //   this.outputName = name;
  // }
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-about',
  template: '<h2>About  {{id}}  {{name}}</h2>',
})
export class AboutComponent implements OnInit {
id: number;
name: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
      this.id = +params.id;
      this.name = params.name;
    });
  }

}

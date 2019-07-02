import {Component, OnInit} from '@angular/core';
import {EngineComponent} from "../engine/engine.component";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  make = 'Audi';
  model = 'A8';
  fuelType: string;

  constructor(private engine: EngineComponent) {
        this.fuelType = engine.type;
  }

  ngOnInit() {
  }

}

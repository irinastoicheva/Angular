import {Injectable} from '@angular/core';

@Injectable()
export class EngineComponent {
  type: string;

  constructor() {
    this.type = 'Gasoline';
  }

}

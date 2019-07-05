import {Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighLightDirective implements OnChanges {

  @Input() value: number;
  @Input() index: number;


  ngOnChanges(simpleChanges: SimpleChanges) {
    console.log(simpleChanges);
    this.highLight();
  }

  highLight() {
    if (this.value !== this.index) {
      this.elementRef.nativeElement.style.backgroundColor = '';
      return;
    }
    this.elementRef.nativeElement.style.backgroundColor = 'red';
  }

  constructor(public elementRef: ElementRef) {
    console.log(elementRef);
  }

}

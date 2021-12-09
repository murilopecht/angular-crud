import { StyleDirective } from './../../../../teste-angular/src/app/custom-style/style.directive';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor( private el: ElementRef) {
    el.nativeElement.style.color = '#e35e6b'
  }

}

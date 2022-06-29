import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBlue]'
})
export class BlueDirective {

  constructor(elementBlueRef: ElementRef) { 
    
    elementBlueRef.nativeElement.style.color = "blue";
  }
}

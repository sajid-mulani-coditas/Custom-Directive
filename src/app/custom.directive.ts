import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  // made an instance of ElementRef
  // ElementRef is used to access DOM element and manipulate it.
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor="yellow"
    el.nativeElement.style.fontFamily="arial"
    el.nativeElement.style.color="purple"
   }

}

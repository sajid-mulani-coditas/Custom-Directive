import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  // made an instance of ElementRef
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor="yellow"
   }

}

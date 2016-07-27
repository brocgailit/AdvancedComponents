import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[popup]',
  exportAs: 'popup'
})
export class Popup {

  @Input() message;

  @HostListener('click', ['$event.target'])
  displayMessage() {
    alert(this.message);
  }

  constructor(_elementRef: ElementRef) {
    console.log(_elementRef);
  }

}

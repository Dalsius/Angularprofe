import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyChar]'
})
export class OnlyCharDirective {
  private regex: RegExp = new RegExp(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/g);

  constructor(
    private el: ElementRef
  ) { }

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    if (event.ctrlKey && event.keyCode === 86) {
      return false;
    }

    const current: string = this.el.nativeElement.value;
    const next: string = current.concat(event.key);

    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }

}



import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appRotatingIcon]',
  standalone: true
})
export class RotatingIconDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    const hostElement = this.el.nativeElement as HTMLElement;

    // Add hovered to the main container
    this.renderer.addClass(hostElement, 'hovered');

    // searching the img with class 'waving_icon'
    const icon = hostElement.querySelector('.waving_icon') as HTMLElement;
    if (icon) {
      this.renderer.addClass(icon, 'visible');
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    const hostElement = this.el.nativeElement as HTMLElement;

    this.renderer.removeClass(hostElement, 'hovered');

    const icon = hostElement.querySelector('.waving_icon') as HTMLElement;
    if (icon) {
      this.renderer.removeClass(icon, 'visible');
    }
  }
}

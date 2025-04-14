import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRotatingIcon]',
  standalone: true
})
export class RotatingIconDirective {
  @Input() viewedDiv!: HTMLElement;
  @Input() rotatingIcon!: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.viewedDiv) {
      this.renderer.addClass(this.viewedDiv, 'hovered');
    }
    if (this.rotatingIcon) {
      this.renderer.addClass(this.rotatingIcon, 'visible');
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.viewedDiv) {
      this.renderer.removeClass(this.viewedDiv, 'hovered');
    }
    if (this.rotatingIcon) {
      this.renderer.removeClass(this.rotatingIcon, 'visible');
    }
  }
}


import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appRotatingIcon]',
  standalone: true
})
export class RotatingIconDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    if (window.innerWidth <= 760) {
      setTimeout(() => {
        const hostElement = this.el.nativeElement as HTMLElement;
        const button = hostElement.querySelector('#hello_button');

        if (button && button.classList.contains('event_target')) {
          this.triggerHoverEffect();
        }
      }, 3000);
    }
  }

  private triggerHoverEffect(): void {
    const hostElement = this.el.nativeElement as HTMLElement;

    this.renderer.addClass(hostElement, 'hovered');

    const icon = hostElement.querySelector('.waving_icon') as HTMLElement;
    if (icon) {
      this.renderer.addClass(icon, 'visible');
    }
  }

  @HostListener('mouseover', ['$event'])
  onMouseOver(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (target.classList.contains('event_target')) {
      this.triggerHoverEffect();
    }
  }

  @HostListener('mouseout', ['$event'])
  onMouseOut(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (target.classList.contains('event_target')) {
      const hostElement = this.el.nativeElement as HTMLElement;

      this.renderer.removeClass(hostElement, 'hovered');

      const icon = hostElement.querySelector('.waving_icon') as HTMLElement;
      if (icon) {
        this.renderer.removeClass(icon, 'visible');
      }
    }
  }
}

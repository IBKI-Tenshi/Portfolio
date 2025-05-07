




// datei wahrscheinlivh nicht benötigt



import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setupInitialStyles();
  }

  private setupInitialStyles() {
    const el = this.el.nativeElement;
    this.renderer.setStyle(el, 'color', 'white');
    this.renderer.setStyle(el, 'text-transform', 'lowercase');
    // this.renderer.setStyle(el, 'opacity', '1');
    this.renderer.setStyle(el, 'transition', 'color 0.0s ease, opacity 0.5s ease, text-transform 0.5s ease');
  }

  @HostListener('mouseenter') onMouseEnter() {
    const el = this.el.nativeElement;
    this.renderer.setStyle(el, 'color', '#f7c518');
    this.renderer.setStyle(el, 'text-transform', 'uppercase');
    // this.renderer.setStyle(el, 'opacity', '0.5');
  }

  @HostListener('mouseleave') onMouseLeave() {
    const el = this.el.nativeElement;
    this.renderer.setStyle(el, 'color', 'white');
    this.renderer.setStyle(el, 'text-transform', 'lowercase');
    this.renderer.setStyle(el, 'opacity', '1');
  }
}

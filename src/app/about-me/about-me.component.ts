import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements AfterViewInit {

  @ViewChild('underline_img') underlineImg!: ElementRef<HTMLImageElement>;

  ngAfterViewInit(): void {
    const el = this.underlineImg.nativeElement;

    const toggleEffect = () => {
      el.classList.add('show_underline');
      setTimeout(() => {
        el.classList.remove('show_underline');
      }, 1000);
    };

    toggleEffect();
    setInterval(toggleEffect, 4000);
  }
}

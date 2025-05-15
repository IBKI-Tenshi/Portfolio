
// import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
// import { HeaderComponent } from '../shared/header/header.component';
// import { CommonModule, NgClass } from '@angular/common';
// import { RotatingIconDirective } from '../shared/directive/rotating_icon_directive';

// @Component({
//   selector: 'app-hero',
//   standalone: true,
//   imports: [HeaderComponent, CommonModule, RotatingIconDirective],
//   templateUrl: './hero.component.html',
//   styleUrl: './hero.component.scss'
// })

// export class HeroComponent implements OnInit, OnDestroy {

//   firstLine_normal: string = 'Frontend';
//   firstLine_transformed: string = 'fRONTEND';
//   secondLine_normal: string = 'Developer';
//   secondLine_transformed: string = 'dEVELOPER';
//   hovering: boolean = false;

//   getLetters(letters_normal: string, letters_transformed: string): { normal: string; transformed: string }[] {
//     return letters_normal.split('').map((letter, i) => ({
//       normal: letter,
//       transformed: letters_transformed[i]
//     }));
//   }

//   ngOnInit() {
//     this.checkScreenWidth();
  
//     window.addEventListener('resize', this.checkScreenWidth.bind(this));
//   }
  
//   ngOnDestroy() {
//     window.removeEventListener('resize', this.checkScreenWidth.bind(this));
//   }
  
//   checkScreenWidth() {
//     this.hovering = window.innerWidth <= 450;
//   }
  

// }



import { Component, ElementRef, ViewChild, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { CommonModule, NgClass } from '@angular/common';
import { RotatingIconDirective } from '../shared/directive/rotating_icon_directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeaderComponent, CommonModule, RotatingIconDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('helloDiv') helloDivRef!: ElementRef;
  @ViewChild('helloButton') helloButtonRef!: ElementRef;

  hovering: boolean = false;

  firstLine_normal: string = 'Frontend';
  firstLine_transformed: string = 'fRONTEND';
  secondLine_normal: string = 'Developer';
  secondLine_transformed: string = 'dEVELOPER';

  ngOnInit() {
    this.checkScreenWidth();
    window.addEventListener('resize', this.checkScreenWidth.bind(this));
  }

  ngAfterViewInit() {
    if (window.innerWidth <= 760) {
      setTimeout(() => {
        if (this.helloDivRef) {
          this.helloDivRef.nativeElement.classList.add('hovered');
        }
        if (this.helloButtonRef) {
          this.helloButtonRef.nativeElement.classList.add('hovered');
        }
      }, 3000);
    }
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.checkScreenWidth.bind(this));
  }

  checkScreenWidth() {
    this.hovering = window.innerWidth <= 450;
  }

  getLetters(letters_normal: string, letters_transformed: string): { normal: string; transformed: string }[] {
    return letters_normal.split('').map((letter, i) => ({
      normal: letter,
      transformed: letters_transformed[i]
    }));
  }
}

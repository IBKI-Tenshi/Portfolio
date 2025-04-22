
import { Component, ElementRef, ViewChild } from '@angular/core';
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

export class HeroComponent {

  // @ViewChild('viewedDiv', { static: true }) viewedDiv!: ElementRef;
  // @ViewChild('rotatingIcon', { static: true }) rotatingIcon!: ElementRef;
  // @ViewChild('viewedButton', { static: true }) viewedButton!: ElementRef;

  firstLine_normal: string = 'Frontend';
  firstLine_transformed: string = 'fRONTEND';
  secondLine_normal: string = 'Developer';
  secondLine_transformed: string = 'dEVELOPER';

  hovering: boolean = false;



  getLetters(letters_normal:string, letters_transformed:string): { normal: string; transformed: string }[] {
    return letters_normal.split('').map((letter, i) => ({
      normal: letter,
      transformed: letters_transformed[i]
    }));
  }


}



import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { CommonModule, NgClass } from '@angular/common';



@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeaderComponent, NgClass, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  firstLine_normal: string = 'Frontend';
  firstLine_transformed: string = 'fRONTEND';

  secondLine_normal: string = 'DEVELOPER';
  secondLine_transformed: string = 'developer';

  getLetters(letters_normal:string, letters_transformed:string): { normal: string; transformed: string }[] {
    return letters_normal.split('').map((letter, i) => ({
      normal: letter,
      transformed: letters_transformed[i]
    }));
  }


}


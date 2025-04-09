
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


    // hovered: boolean = false;

    // onHover(isHovered: boolean): void {
    //   this.hovered = isHovered;
    // }



  firstLine_normal: string = 'Frontend';
  firstLine_transformed: string = 'fRONTEND';

  secondLine_normal: string = 'Developer';
  secondLine_transformed: string = 'dEVELOPER';

  getLetter(word: string): string[] {
    return word.split('');
  }



}

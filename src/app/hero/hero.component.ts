
import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { CommonModule, NgClass } from '@angular/common';
import { HighlightDirective } from '../shared/directive/highlight.directive';
import { MatButtonModule } from '@angular/material/button';




@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeaderComponent, NgClass, CommonModule, HighlightDirective, MatButtonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit {



  @ViewChild('helloDiv', { static: true }) helloDiv!: ElementRef;
  @ViewChild('wavingHand', { static: true }) wavingHand!: ElementRef;
  @ViewChild('helloButton', { static: true }) helloButton!: ElementRef;

  ngAfterViewInit(): void {
    const buttonEl = this.helloButton.nativeElement as HTMLButtonElement;

    buttonEl.addEventListener('mouseenter', () => {
      this.helloDiv.nativeElement.classList.add('hovered');
      this.wavingHand.nativeElement.classList.add('visible');
    });

    buttonEl.addEventListener('mouseleave', () => {
      this.helloDiv.nativeElement.classList.remove('hovered');
      this.wavingHand.nativeElement.classList.remove('visible');
    });
  }

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




  // Wort, das in Buchstaben aufgeteilt wird
  firstLine_normal_v2 = 'frontend';

  // Methode, um das Wort in einzelne Buchstaben aufzuteilen
  getLetter(word: string) {
    return word.split('').map(letter => ({
      normal: letter
    }));
  }


}


import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent {
  // buttonText: string = "Hello World"; // Standard-Text
  // // buttonWidth: string = "140px"; // Standard-Breite

  // changeText() {
  //   this.buttonText = "I'M Borna Kitak"; // Neuer Text
  //   // this.buttonWidth = "220px"; // Breite für längeren Text
  // }

  // resetText() {
  //   this.buttonText = "Hello World"; // Zurücksetzen des Textes
  //   // this.buttonWidth = "140px"; // Zurücksetzen der Breite
  // }
}
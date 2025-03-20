import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { AboutMeComponent } from "../about-me/about-me.component";

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [HeroComponent, AboutMeComponent],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent {
}
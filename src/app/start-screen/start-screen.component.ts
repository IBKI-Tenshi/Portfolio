import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { SkillSetComponent } from "../skill-set/skill-set.component";

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [HeroComponent, AboutMeComponent, SkillSetComponent],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent {
}
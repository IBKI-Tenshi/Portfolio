import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeaderComponent, NgClass],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  hovered: boolean = false;

  onHover(isHovered: boolean): void {
    this.hovered = isHovered;
  }
  
}

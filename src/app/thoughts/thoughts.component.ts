import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thoughts',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './thoughts.component.html',
  styleUrl: './thoughts.component.scss'
})
export class ThoughtsComponent {

  @Input() thought: any;

  hovered = false;


overlayImage = '/assets/images/thoughts_hover.png';
}

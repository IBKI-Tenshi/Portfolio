import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { LanguageService } from '../shared/services/language.service';

@Component({
  selector: 'app-thoughts',
  standalone: true,
  imports: [NgClass],
  templateUrl: './thoughts.component.html',
  styleUrl: './thoughts.component.scss'
})
export class ThoughtsComponent {
  @Input() thought: any;
  hovered = false;

  overlayImage = '/assets/images/thoughts_hover.webp';

  currentLang = 'en';

  constructor(private languageService: LanguageService) {
    this.languageService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  get comment(): string {
    return this.thought?.comment?.[this.currentLang] || '';
  }
}

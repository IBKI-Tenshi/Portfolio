import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LanguageService } from '../shared/services/language.service'; // Pfad ggf. anpassen

@Component({
  selector: 'app-project-div',
  standalone: true,
  imports: [NgIf],
  templateUrl: './project-div.component.html',
  styleUrl: './project-div.component.scss'
})
export class ProjectDivComponent {

  @Input() project: any;

  currentLang: 'en' | 'de' = 'en';

  constructor(private languageService: LanguageService) {
    this.languageService.currentLang$.subscribe(lang => {
      this.currentLang = lang as 'en' | 'de';
    });
  }

    getText(key: string): string {
    const translations:any = {
      en: {
        project_button: 'Project Details'
      },
      de: {
        project_button: 'Projekt Details'
      }
    };
    return translations[this.currentLang]?.[key] || key;
  }
}

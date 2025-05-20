
import { Component, Input, inject, effect, DestroyRef } from '@angular/core';
import { NgIf } from '@angular/common';
import { LanguageService } from '../shared/services/language.service'; // ggf. Pfad anpassen
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
  private destroyRef = inject(DestroyRef);

  constructor(private languageService: LanguageService) {
    this.languageService.currentLang$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((lang) => {
        this.currentLang = lang as 'en' | 'de';
      });
  }

  getText(key: string): string {
    const translations: any = {
      en: {
        project_button: 'Project Details'
      },
      de: {
        project_button: 'Zum Projekt'
      }
    };
    return translations[this.currentLang]?.[key] || key;
  }
}

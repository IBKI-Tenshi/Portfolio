import { Component, Input } from '@angular/core';
import { RotatingIconDirective } from '../directive/rotating_icon_directive';
import { FormGroup } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LanguageService } from '../services/language.service'; // Import des LanguageService

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RotatingIconDirective, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  currentLang = 'en'; // Standardmäßig Englisch

  constructor(private router: Router, private languageService: LanguageService) {
    this.languageService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  @Input() form!: FormGroup;

  markFormAsTouched() {
    this.form.markAllAsTouched();
  }

  getText(key: string): string {
    const translations:any = {
      en: {
        legalNotice: 'Legal Notice'
      },
      de: {
        legalNotice: 'Impressum'
      }
    };
    return translations[this.currentLang]?.[key] || key;
  }
}


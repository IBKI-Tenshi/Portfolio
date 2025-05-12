import { Component, EventEmitter, Output } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() closeOverlayClickedFromHeader = new EventEmitter<void>();

  currentLang = 'en';

  translations: { [key: string]: { [key: string]: string } } = {
    en: {
      navLink1: 'About me',
      navLink2: 'Projects',
      navLink3: 'Skills',
      navLink4: 'Contact'
    },
    de: {
      navLink1: 'Über mich',
      navLink2: 'Projekte',
      navLink3: 'Fähigkeiten',
      navLink4: 'Kontakt'
    }
  };

  constructor(private languageService: LanguageService) {
    this.languageService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  switchLanguage(lang: 'en' | 'de') {
    this.languageService.switchLanguage(lang);
  }

  getNavLink(index: number): string {
    return this.translations[this.currentLang]['navLink' + index];
  }

  emitCloseOverlay() {
    this.closeOverlayClickedFromHeader.emit();
  }

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  emitCloseOverlay_navbar() {
    this.isMenuOpen = false;
  }

}

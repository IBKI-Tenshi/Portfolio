

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLangSubject = new BehaviorSubject<string>('en');  // Standardwert ist Englisch
  currentLang$ = this.currentLangSubject.asObservable();

  switchLanguage(lang: 'en' | 'de') {
    this.currentLangSubject.next(lang);
  }
}

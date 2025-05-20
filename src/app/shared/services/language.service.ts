
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly STORAGE_KEY = 'selectedLanguage';

  // interner Zustand
  private currentLangSubject: BehaviorSubject<'en' | 'de'>;

  // öffentliches Observable (readonly)
  public currentLang$: Observable<'en' | 'de'>;

  constructor() {
    // lade gespeicherte Sprache oder fallback zu 'en'
    const savedLang = localStorage.getItem(this.STORAGE_KEY) as 'en' | 'de' | null;
    const initialLang = savedLang === 'de' || savedLang === 'en' ? savedLang : 'en';

    // Sprache zuweisen
    this.currentLangSubject = new BehaviorSubject<'en' | 'de'>(initialLang);
    this.currentLang$ = this.currentLangSubject.asObservable();
  }

  switchLanguage(lang: 'en' | 'de') {
    localStorage.setItem(this.STORAGE_KEY, lang);         // im localStorage speichern
    this.currentLangSubject.next(lang);                   // alle Subscriber benachrichtigen
  }

  get currentLang(): 'en' | 'de' {
    return this.currentLangSubject.value;
  }
}

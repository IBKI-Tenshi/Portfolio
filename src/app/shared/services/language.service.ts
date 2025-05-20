

// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class LanguageService {
//   private currentLangSubject = new BehaviorSubject<string>('en');  // Standardwert ist Englisch
//   currentLang$ = this.currentLangSubject.asObservable();

//   switchLanguage(lang: 'en' | 'de') {
//     this.currentLangSubject.next(lang);
//   }
// }


import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly STORAGE_KEY = 'selectedLanguage';

  private currentLangSubject: BehaviorSubject<string>;
  public currentLang$;

  constructor() {
    const savedLang = localStorage.getItem(this.STORAGE_KEY) as 'en' | 'de' | null;
    const initialLang = savedLang ?? 'en'; // Falls nichts gespeichert ist, nimm 'en'
    this.currentLangSubject = new BehaviorSubject<string>(initialLang);
    this.currentLang$ = this.currentLangSubject.asObservable();
  }

  switchLanguage(lang: 'en' | 'de') {
    localStorage.setItem(this.STORAGE_KEY, lang);
    this.currentLangSubject.next(lang);
  }
}

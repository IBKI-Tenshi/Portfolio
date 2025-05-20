import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { FooterComponent } from '../shared/footer/footer.component';
import { FadeAnimationEffectService } from '../shared/services/fade_animation.service';
import { NgIf } from '@angular/common';
import { ContactformComponent } from "../contactform/contactform.component";
import { LanguageService } from '../shared/services/language.service';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FooterComponent, ReactiveFormsModule, NgIf, ContactformComponent],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements AfterViewInit {

  @ViewChild('fade_animation_img') fade_animation_img!: ElementRef<HTMLImageElement>;
  @ViewChild('confirmationBox') confirmationBox!: ElementRef<HTMLDivElement>;

    constructor(
    private fadeAnimationEffect: FadeAnimationEffectService,
    private languageService: LanguageService
  ) {
    this.languageService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  contactForm!: FormGroup;
  currentLang = 'en';
  translations: any = {
    en: {
      overline: 'CONTACT ME' as string,
      headline: 'Ready to work together?' as string,
      paragraph: `I'm looking forward to hearing from you and working together on exciting projects! 
      If you're looking for a dedicated developer who loves tackling new challenges, feel free to contact me.
      I'm always motivated to grow my skills and contribute meaningfully to your team. 
      I'm excited by innovative solutions and love learning from others. Let's build something great together.` as string
    },
    de: {
      overline: 'KONTAKTIERE MICH' as string,
      headline: 'Bereit um zusammen zu arbeiten?' as string,
      paragraph: `Ich freue mich darauf, von dir zu hören und gemeinsam an spannenden Projekten zu arbeiten! 
      Wenn du auf der Suche nach einem engagierten Entwickler bist, der mit Begeisterung an neuen Herausforderungen arbeitet, 
      dann zögere nicht, mich zu kontaktieren.
      Ich bin stets motiviert, mein Wissen und meine Fähigkeiten weiter auszubauen und bin überzeugt, 
      dass ich mit meiner analytischen Denkweise und meiner Erfahrung in der Webentwicklung einen wertvollen Beitrag 
      zu deinem Team leisten kann. Es reizt mich, an innovativen Lösungen zu arbeiten und durch die Zusammenarbeit 
      mit anderen meine Perspektiven zu erweitern. Wenn du ein Projekt hast, bei dem du Unterstützung brauchst, 
      freue mich darauf, von dir zu hören und gemeinsam etwas Großartiges zu schaffen.` as string
    }
  };

  ngAfterViewInit(): void {
    const fade_icon = this.fade_animation_img.nativeElement;
    this.fadeAnimationEffect.startFadeAnimationLoop(fade_icon);
  }

  getText(key: string): string {
    return this.translations[this.currentLang]?.[key] || key;
  }
}

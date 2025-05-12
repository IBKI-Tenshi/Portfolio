import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FadeAnimationEffectService } from '../shared/services/fade_animation.service';
import { LanguageService } from '../shared/services/language.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements AfterViewInit {

  @ViewChild('fade_animation_img') fade_animation_img!: ElementRef<HTMLImageElement>;

  currentLang = 'en';

  constructor(
    private fadeAnimationEffect: FadeAnimationEffectService,
    private languageService: LanguageService
  ) {
    this.languageService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  ngAfterViewInit(): void {
    const el = this.fade_animation_img.nativeElement;
    this.fadeAnimationEffect.startFadeAnimationLoop(el);
  }

  translations: any = {
    en: {
      location: 'Based in Aalen',
      learning: 'Excited to learn new skills',
      remote: 'Open to work remote',
      overline: "WHO'S BORNA?",
      title: 'About me',
      button: "Let's talk",
      text: `
        Hello, my name is Borna.
        As an analytical thinker, I'm passionate about programming 
        because it allows me to solve logical problems and create 
        things that provide real value. The challenge of finding 
        ever more efficient and elegant solutions drives me and 
        inspires me to keep learning.
        
        I'm convinced that no knowledge is ever wasted, and I'm 
        constantly striving to improve my skills – whether through 
        new technologies or solving complex problems. For me, 
        programming is more than just a task; it's a way to make a 
        real difference.
        
        Let’s collaborate and build something remarkable together!
      `
    },
    de: {
      location: 'Wohnhaft in Aalen',
      learning: 'Neues zu lernen begeistert mich',
      remote: 'Offen für Remote-Arbeit',
      overline: 'WER IST BORNA?',
      title: 'Über mich',
      button: 'Lass uns sprechen',
      text: `
        Hallo, mein Name ist Borna.
        Als analytischer Denker begeistert mich Programmieren,
        weil es mir ermöglicht, logische Probleme zu lösen und
        etwas zu erschaffen, das echten Mehrwert bietet. 
        Die Herausforderung, immer effizientere und elegantere 
        Lösungen zu finden, treibt mich an und inspiriert mich,
        kontinuierlich dazuzulernen.
        
        Ich bin überzeugt, dass kein Wissen je verschwendet ist,
        und strebe ständig danach, meine Fähigkeiten 
        weiterzuentwickeln – sei es durch neue Technologien 
        oder durch das Lösen komplexer Aufgaben.
        Für mich ist Programmieren mehr als nur eine Tätigkeit; 
        es ist die Möglichkeit, etwas zu schaffen, 
        das einen echten Unterschied macht.
        
        Lass uns zusammenarbeiten und etwas Großartiges schaffen!
      `
    }
  };

  getText(key: string): string {
    return this.translations[this.currentLang][key];
  }

}

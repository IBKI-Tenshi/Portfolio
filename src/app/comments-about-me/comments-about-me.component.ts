import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ThoughtsComponent } from '../thoughts/thoughts.component';
import { NgFor } from '@angular/common';
import { FadeAnimationEffectService } from '../shared/services/fade_animation.service';
import { LanguageService } from '../shared/services/language.service';

@Component({
  selector: 'app-comments-about-me',
  standalone: true,
  imports: [ThoughtsComponent, NgFor],
  templateUrl: './comments-about-me.component.html',
  styleUrl: './comments-about-me.component.scss'
})
export class CommentsAboutMeComponent implements AfterViewInit {
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

  getText(key: string): string {
    return this.translations[this.currentLang][key];
  }

  translations: any = {
    en: {
      overline: 'IN THEIR WORDS:',
      title: "Colleagues' Thoughts"
    },
    de: {
      overline: 'IN IHREN WORTEN:',
      title: 'Gedanken von Kollegen'
    }
  };

  thoughts = [
    {
      name: 'Marco Lenschau',
      title: 'Frontend Developer',
      comment: {
        en: '“A valuable addition to any team – even in difficult situations, he keeps a clear head and provides thoughtful solutions.”',
        de: '„Eine wertvolle Bereicherung für jedes Team – auch in schwierigen Situationen behält er stets einen klaren Kopf und liefert durchdachte Lösungsansätze.“'
      },
      profileLink: 'link',
      backgroundimage: '/assets/images/thoughts_background_1.png'
    },
    {
      name: 'bbb',
      title: 'Frontend Developer',
      comment: {
        en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet facere esse...',
        de: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet facere esse...'
      },
      profileLink: 'link',
      backgroundimage: '/assets/images/thoughts_background_2.png'
    },
    {
      name: 'ccc',
      title: 'Frontend Developer',
      comment: {
        en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet facere esse...',
        de: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet facere esse...'
      },
      profileLink: 'link',
      backgroundimage: '/assets/images/thoughts_background_1.png'
    },
  ];
}

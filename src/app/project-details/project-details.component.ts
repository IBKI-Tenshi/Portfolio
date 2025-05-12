import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { HeaderComponent } from "../shared/header/header.component";
import { FadeAnimationEffectService } from '../shared/services/fade_animation.service';
import { PROJECTS } from '../projects/projects_data';
import { LanguageService } from '../shared/services/language.service';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [NgIf, HeaderComponent, NgFor],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent implements AfterViewInit {
  project: any;
  currentIndex: number = 0;
  projects = PROJECTS;
  currentLang: 'en' | 'de' = 'en';

  @ViewChild('fade_animation_img') fade_animation_img!: ElementRef<HTMLImageElement>;

  translations: any = {
    en: {
      goBack: 'Go Back',
      description: 'Description',
      implementationDetails: 'Implementation Details',
      duration: 'Duration',
      usedSkills: 'Used Skills',
      github: 'GitHub',
      liveTest: 'Live Test',
      previousProject: 'Previous Project',
      nextProject: 'Next Project'
    },
    de: {
      goBack: 'Zurück',
      description: 'Beschreibung',
      implementationDetails: 'Details zur Umsetzung',
      duration: 'Dauer',
      usedSkills: 'Angewendete Skills',
      github: 'GitHub',
      liveTest: 'Live-Demo',
      previousProject: 'Vorheriges Projekt',
      nextProject: 'Nächstes Projekt'
    }
  };

  constructor(
    private route: ActivatedRoute,
    private fadeAnimationEffect: FadeAnimationEffectService,
    private languageService: LanguageService
  ) {
    this.languageService.currentLang$.subscribe(lang => {
      this.currentLang = lang as 'en' | 'de';
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const index = Number(params.get('id'));
      if (!isNaN(index) && this.projects[index]) {
        this.currentIndex = index;
        this.project = this.projects[index];
      }
    });
  }

  ngAfterViewInit(): void {
    const el = this.fade_animation_img.nativeElement;
    this.fadeAnimationEffect.startFadeAnimationLoop(el);
  }

  getText(key: string): string {
    return this.translations[this.currentLang][key];
  }

  closeOverlay() {
    window.history.back();
  }

  previousProject() {
    const previousIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    this.currentIndex = previousIndex;
    this.project = this.projects[previousIndex];
  }

  nextProject() {
    const nextIndex = (this.currentIndex + 1) % this.projects.length;
    this.currentIndex = nextIndex;
    this.project = this.projects[nextIndex];
  }
}

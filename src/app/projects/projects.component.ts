
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectDivComponent } from "../project-div/project-div.component";
import { NgFor, NgIf } from '@angular/common';
import { FadeAnimationEffectService } from '../shared/services/fade_animation.service';
import { PROJECTS } from './projects_data';
import { LanguageService } from '../shared/services/language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectDivComponent, NgFor, NgIf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {

  projects = PROJECTS;
  selectedProject: any = null;
  selectedIndex: number = 0;

  currentLang = 'en';

  translations: any = {
    en: {
      overline: 'MY Craft',
      title: 'Projects',
      description: 'Feel free to take a look at my projects and interact with them! When developing, I place particular emphasis on user-friendly, responsive solutions based on efficient code. Each project reflects my approach to creating not only functional, but also well-structured and easy-to-understand applications.',
    },
    de: {
      overline: 'MEINE Werke',
      title: 'Projekte',
      description: 'Schau dir gerne meine Projekte an und interagiere mit ihnen! Bei der Entwicklung lege ich besonderen Wert auf benutzerfreundliche, responsive Lösungen, die auf effizienten Code setzen. Jedes Projekt spiegelt meinen Ansatz wieder, nicht nur funktionale, sondern auch gut strukturierte und leicht verständliche Anwendungen zu schaffen.',
    }
  };

  getText(key: string): string {
    return this.translations[this.currentLang][key];
  }

  @ViewChild('fade_animation_img') fade_animation_img!: ElementRef<HTMLImageElement>;

  constructor(private fadeAnimationEffect: FadeAnimationEffectService, private router: Router, private languageService: LanguageService ) {
        this.languageService.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });
   }

  ngAfterViewInit(): void {
    const el = this.fade_animation_img.nativeElement;
    this.fadeAnimationEffect.startFadeAnimationLoop(el);
  }

  openDetails(project: any, index: number) {
    this.selectedProject = project;
    this.selectedIndex = index;
    this.router.navigate(['/project', index]);
  }



}

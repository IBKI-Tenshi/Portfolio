// import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
// import { ProjectDivComponent } from "../project-div/project-div.component";
// import { NgFor, NgIf } from '@angular/common';
// import { FadeAnimationEffectService } from '../shared/services/fade_animation.service';
// import { ProjectDetailsComponent } from '../project-details/project-details.component';
// import { PROJECTS } from './projects_data'; 

// @Component({
//   selector: 'app-projects',
//   standalone: true,
//   imports: [ProjectDivComponent, ProjectDetailsComponent, NgFor, NgIf],
//   templateUrl: './projects.component.html',
//   styleUrl: './projects.component.scss'
// })
// export class ProjectsComponent implements AfterViewInit {

//   // projects = [
//   //   {
//   //     title: 'Join',
//   //     description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories',
//   //     info_details: 'tiefere infos zum projekt',
//   //     image: '/assets/images/project_images/join_image_laptop.png',
//   //     image_details: '/assets/images/project_images/join_image.png',
//   //     project_link: 'https://borna-kitak.developerakademie.net/Join/Join-main/index.html',
//   //     github_link: 'https://github.com/IBKI-Tenshi/Join',
//   //     duration: 'benötigte wochen',
//   //     used_skills: [
//   //       {
//   //         skill_image: 'assets/images/skills/HTML_icon.png',
//   //         skill_name: 'HTML'
//   //       },
//   //       {
//   //         skill_image: 'assets/images/skills/CSS_icon.png',
//   //         skill_name: 'CSS'
//   //       },
//   //       {
//   //         skill_image: 'assets/images/skills/JS_icon.png',
//   //         skill_name: 'JS'
//   //       },
//   //       {
//   //         skill_image: 'assets/images/skills/Firebase_icon.png',
//   //         skill_name: 'Firebase'
//   //       }
//   //     ],
//   //     highlighted: true
//   //   },
//   //   {
//   //     title: 'El Pollo Loco',
//   //     description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
//   //     info_details: 'tiefere infos zum projekt',
//   //     image: '/assets/images/project_images/el_pollo_loco_image_laptop.png',
//   //     image_details: '/assets/images/project_images/el_pollo_loco_image.png',
//   //     project_link: 'https://borna-kitak.developerakademie.net/el_pollo_loco/',
//   //     github_link: 'https://github.com/IBKI-Tenshi/El_pollo_loco',
//   //     duration: 'benötigte wochen',
//   //     used_skills: [
//   //       {
//   //         skill_image: 'assets/images/skills/HTML_icon.png',
//   //         skill_name: 'HTML'
//   //       },
//   //       {
//   //         skill_image: 'assets/images/skills/CSS_icon.png',
//   //         skill_name: 'CSS'
//   //       },
//   //       {
//   //         skill_image: 'assets/images/skills/JS_icon.png',
//   //         skill_name: 'JS'
//   //       }
//   //     ],
//   //     highlighted: false
//   //   },
//   //   {
//   //     title: 'pokedex',
//   //     description: 'In diesem Projekt habe ich einen interaktiven Pokédex erstellt, der die Pokémon-Daten aus der offiziellen Poké-API abruft. Die Anwendung ermöglicht es, verschiedene Pokémon zu durchsuchen, detaillierte Informationen zu erhalten.',
//   //     info_details: 'tiefere infos zum projekt',
//   //     image: '/assets/images/project_images/pokedex_image_laptop.png',
//   //     image_details: '/assets/images/project_images/pokedex_image.png',
//   //     project_link: 'https://borna-kitak.developerakademie.net/pokedex/',
//   //     github_link: 'https://github.com/IBKI-Tenshi/Pokedex',
//   //     duration: 'benötigte wochen',
//   //     used_skills: [
//   //       {
//   //         skill_image: 'assets/images/skills/HTML_icon.png',
//   //         skill_name: 'HTML'
//   //       },
//   //       {
//   //         skill_image: 'assets/images/skills/CSS_icon.png',
//   //         skill_name: 'CSS'
//   //       },
//   //       {
//   //         skill_image: 'assets/images/skills/JS_icon.png',
//   //         skill_name: 'JS'
//   //       },
//   //       {
//   //         skill_image: 'assets/images/skills/Rest-Api_icon.png',
//   //         skill_name: 'Rest-Api'
//   //       }
//   //     ],
//   //     highlighted: false
//   //   },

//   // ]

//   projects = PROJECTS;

//   selectedProject: any = null;
//   isDetailsOpen: boolean = false;
//   // isDetailsOpen: boolean = true;
//   selectedIndex: number = 0;

//   @ViewChild('fade_animation_img') fade_animation_img!: ElementRef<HTMLImageElement>;

//   constructor(private fadeAnimationEffect: FadeAnimationEffectService) {}

//   ngAfterViewInit(): void {
//     const el = this.fade_animation_img.nativeElement;
//     this.fadeAnimationEffect.startFadeAnimationLoop(el);
//   }

//   openDetails(project: any, index: number) {
//     this.selectedProject = project;
//     this.selectedIndex = index;
//     this.isDetailsOpen = true;
//   }

//   closeDetails() {
//     this.isDetailsOpen = false;
//   }

//   changeProject(index: number) {
//     this.selectedIndex = index;
//     this.selectedProject = this.projects[index];
//   }

// }

import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectDivComponent } from "../project-div/project-div.component";
import { NgFor, NgIf } from '@angular/common';
import { FadeAnimationEffectService } from '../shared/services/fade_animation.service';
import { PROJECTS } from './projects_data'; 

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

  @ViewChild('fade_animation_img') fade_animation_img!: ElementRef<HTMLImageElement>;

  constructor(private fadeAnimationEffect: FadeAnimationEffectService, private router: Router) {}  // Router injizieren

  ngAfterViewInit(): void {
    const el = this.fade_animation_img.nativeElement;
    this.fadeAnimationEffect.startFadeAnimationLoop(el);
  }

  // openDetails-Funktion geändert, um zu einer neuen Seite zu navigieren
  openDetails(project: any, index: number) {
    this.selectedProject = project;
    this.selectedIndex = index;
    this.router.navigate(['/project', index]);  // Navigieren zu einer Detail-Seite mit Index
  }

}

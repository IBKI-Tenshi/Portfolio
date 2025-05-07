
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
